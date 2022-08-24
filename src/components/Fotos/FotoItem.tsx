import React from 'react'
import { Foto } from './Fotos'
//interfaz con props
interface Props {
  foto: Foto
}
//datos que quiero consumir
const FotoItem = ({ foto }: Props) => {
  return (
    <div>
      <h1 key={foto._id}> {foto.title}, {foto.description} </h1>
      <p> {foto.description} </p>
    </div>
  )
}

export default FotoItem


