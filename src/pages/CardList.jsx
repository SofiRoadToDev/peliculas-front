import React from 'react'
import { useParams } from 'react-router-dom'

const CardList = () => {
const {nombre}=useParams();

  return (
    <div>CardList
        <h3>El nombre del genero es {nombre}</h3>

    </div>
  )
}

export default CardList