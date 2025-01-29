import React, { useState, useEffect } from 'react';
import Card from './Card';

type Props = {};

type Person = {
  name: string;
  description: string;
  imageUrl: string;
};

export default function Card_Collection({ }: Props) {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api');
        if (!response.ok) {
          throw new Error('Netzwerkantwort war nicht ok');
        }
        
        const data = await response.json();
        console.log('API Response:', data); 
        setPeople(data.data);
      } catch (err) {
        setError('Fehler beim Laden der Daten');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8">
      {people.map((person, index) => (
        <Card
          key={index}
          name={person.name}
          description={person.description}
          imageUrl={`http://10.115.1.41:8055/assets/${person.image}`}
        />
      ))}
    </main>
  );
}
