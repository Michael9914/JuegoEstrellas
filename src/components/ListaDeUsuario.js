import React from "react";
import { Usuarios } from "./Usuarios";

export const ListaDeUsuario = (props) => {
  return (
    <div>
      <h1>Jugadores</h1>
      {props.nuevosJugador.map((Usuarios) => (
        <div key={Usuarios.usuario}>
          <p>jugador: {Usuarios.usuario}</p>
          <p>jugador: {Usuarios.puntuacion}</p>
        </div>
      ))}
    </div>
  );
};
