"use client";

import { useEffect, useState } from "react";

export default function Home () {
 const [animal, setAnimal] = useState([]);
 const [loading, setLoading] = useState("");

 async function loadAPI () {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        console.log(data);
        setAnimal(data.message);

    if (!response.ok) {
        throw new Error("Erro ao buscar os dados da API");
    } 

    } catch (error) {
        console.error(error);
    }
 }

 useEffect (()=> {
    loadAPI();
 }, [])

 const handleLoading = () => {
   if (!animal) {
    setLoading("Carregando...")
   }
 }

  return (
    <div className="container">
        <h1>Dog API</h1>
        <strong>Clique na imagem para ver outro cachorro 🐶 </strong>
       <header>
        <img
          src={animal} 
          alt={loading}
          onClick={loadAPI} 
        />
        </header>
    </div>
  )
}
