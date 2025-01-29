  import { useEffect, useState } from "react";
  import { createClient } from "@supabase/supabase-js";
import CardCollection from "./components/CardCollection";

  const supabase = createClient("https://sauxdgxccygvpwxjjlfv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhdXhkZ3hjY3lndnB3eGpqbGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxNTM4MDAsImV4cCI6MjA1MzcyOTgwMH0.mXY7w6cpadXjDBBTYInGZvzM1lr1ns9v_guapqTYvWs");
const App: React.FC = () => {
  

  return (
    <div className="bg-green-900 min-h-screen text-white">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">HTL Dornbirn 5bWI</h1>
      </header>
     <CardCollection></CardCollection>
    </div>
  );
};

  export default App;
