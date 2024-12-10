import React from 'react';
import Card from './components/Card';

const App: React.FC = () => {
  const people = [
    {
      name: 'Jonas Kronabitter',
      description: 'Lorem ipsum dolor sit amet consectetur. Quis vitae ut quam urna ut turpis. Nunc imperdiet augue dis suspendisse.',
      imageUrl: 'https://picsum.photos/150', 
    },
    {
      name: 'Jonas Nigg',
      description: 'Lorem ipsum dolor sit amet consectetur. Quis vitae ut quam urna ut turpis. Nunc imperdiet augue dis suspendisse.',
      imageUrl: 'https://picsum.photos/150', 
    },
    {
      name: 'Luca Grabher',
      description: 'Lorem ipsum dolor sit amet consectetur. Quis vitae ut quam urna ut turpis. Nunc imperdiet augue dis suspendisse.',
      imageUrl: 'https://picsum.photos/150', 
    },
      {
      name: 'Noel Riedmann',
      description: 'Lorem ipsum dolor sit amet consectetur. Quis vitae ut quam urna ut turpis. Nunc imperdiet augue dis suspendisse.',
      imageUrl: 'https://picsum.photos/150', 
    },
        {
      name: 'Ian Felder',
      description: 'Lorem ipsum dolor sit amet consectetur. Quis vitae ut quam urna ut turpis. Nunc imperdiet augue dis suspendisse.',
      imageUrl: 'https://picsum.photos/150', 
    },
  ];

  return (
    <div className="bg-green-900 min-h-screen text-white">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">HTL Dornbirn 5bWI</h1>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8">
        {people.map((person, index) => (
          <Card
            key={index}
            name={person.name}
            description={person.description}
            imageUrl={person.imageUrl}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
