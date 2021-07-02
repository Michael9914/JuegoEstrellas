import React from 'react';
import { useState } from 'react';
import { Juego } from './components/Juego';
import { Sesion } from './components/Sesion';
import './App.css';
import { Usuarios } from './components/Usuarios';


const Inicio = () => {
  const [gameId, setGameId] = useState(1);
  const [logeado, setLogeado] = useState(false)
  const [nuevoJugador, setNuevoJugador] = useState(Usuarios)
  const añadirJugador = (jugador) => {
    setNuevoJugador(...Usuarios, jugador)
    setLogeado(true)
  }
  return( 

  <>
    {
      logeado === true ? (
        <Juego key={gameId} startNewGame={() => setGameId(gameId + 1)} 
        nuevoJugador= {nuevoJugador} onSumbited={añadirJugador}/>
      
      ):(
      <Sesion setLogeado={setLogeado}
      ></Sesion>
    ) 
  }
  </>
  
  );
}

// Colores
export const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};




export default Inicio;