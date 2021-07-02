import React from 'react';
import { useState } from 'react';
import { Juego } from './components/Juego';
import { Sesion } from './components/Sesion';
import './App.css';
import { Usuarios } from './components/Usuarios';
import { ListaDeUsuario } from './components/ListaDeUsuario';


const Inicio = () => {
  const [gameId, setGameId] = useState(1);
  const [logeado, setLogeado] = useState(false)
  const [nuevoJugador, setNuevoJugador] = useState(Usuarios)
  const añadirJugador = (jugador) => {
    setNuevoJugador([...nuevoJugador, jugador])
    console.log(nuevoJugador);
    setLogeado(true)
  }
  return( 

  <>
    {
      logeado === true ? (
        <Juego key={gameId} 
        startNewGame={() => setGameId(gameId + 1)} 
        nuevoJugador= {nuevoJugador} 
        
        setLogeado={setLogeado}/>
      
      ) :(
      <Sesion handleSubmited = {añadirJugador}
      ></Sesion>
    ) 
  }
  <div>
  <ListaDeUsuario nuevoJugador = {nuevoJugador}></ListaDeUsuario>
  </div>
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