import React, { useState } from 'react'

export const Sesion = (props) => {

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
}
