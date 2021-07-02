import React, { useState } from 'react'

/* export const Sesion = (props) => {

    const [usuario, setUsuario] = useState("")

    const handleSubmit = () => {
       props.setLogeado(true) 
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={usuario}
                 onChange={e=>setUsuario(e.target.value)}>

                 </input>
                 <button>Agregar</button>
                 
            </form>
        </div>
    )
} */


 export const Sesion = ({ handleSubmited}) => {

    const [apodo, setApodo] = useState('')

    let player ={};

    const handleSubmit = (e) => {
        e.preventDefault()
        player.usuario=apodo
        player.puntuacion=0
        handleSubmited(player)
      
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                  id=""
                  label="Ingrese usuario"
                  value ={apodo}
                  onChange = {e => setApodo(e.target.value)}
                  required
                />
                 <button>agregar usuario</button>
            </form>

           
        </div>
    )
} 