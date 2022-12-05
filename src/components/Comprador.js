import React from "react"
export const Comprador = ({ compra, idCompra }) => {

  return (
    <div >

      <h5>Muchas gracias por tu compra!</h5>

      <div>
        <p> <span>Nombre: </span> {compra.nombre} </p>
        <p> <span>Ciudad: </span>  {compra.ciudad} </p>
        <p> <span>Dirección: </span> {compra.direccion} </p>
        <p> <span>Email: </span> {compra.email} </p>
        <p> <span>Cel: </span> {compra.cel} </p>
      </div>
      <h2> <span>Total: $ </span> {compra.total}.00 </h2>
      <p> ID de compra : <span>{idCompra}</span> </p>
    </div>
  )
}