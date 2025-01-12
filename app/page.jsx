"use client";

import { useEffect, useState } from "react";

export default function Home () {
 const [animal, setAnimal] = useState([]);
 const [loading, setLoading] = useState("");
 const [error, setError] = useState("");

 async function loadAPI () {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        console.log(data);
        setAnimal(data.message);

    if (!response.ok) {
        throw new Error(`HTTP ERROR:" ${response.status}`);
    } 

    } catch (error) {
        setError("Error" + error.message);
    }
 }

 useEffect (()=> {
    loadAPI();
 }, [])

 if (!animal) {
   return (
    <div className="loading">
      <h1>Carregando...</h1>
    </div>
   )
 }

  return (
    <div className="container">
        <h1>Dog API</h1>
        <strong>Clique na imagem para ver outro cachorro 🐶 </strong>
       <header>
        <img
          src={animal} 
          alt="imagem de cachorro"
          onClick={loadAPI} 
        />
        </header>
    </div>
  )
}
