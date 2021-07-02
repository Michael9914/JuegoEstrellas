import React from "react";

/* export const ListaDejugador = (props) => {
  return (
    <div>
      <h1>Jugadores</h1>
      {props.nuevosJugador.map((jugadors) => (
        <div key={jugadors.jugador}>
          <p>jugador: {jugadors.jugador}</p>
          <p>jugador: {jugadors.puntuacion}</p>
        </div>
      ))}
    </div>
  );
}; */
export const ListaDeUsuario = (props) => {
  return (
      <div>
          {props.nuevoJugador.map(jugador => <div><p>{jugador.usuario}</p> <p>{jugador.puntuacion}</p></div>)}
      </div>
  )
}
