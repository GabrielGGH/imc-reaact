import React from 'react';

function CartaoDeVisitas(props){
  return ( 
    <div>
      <table>
        <tr>
          <label>Nome:{props.nome}</label>
        </tr>
        <tr>
          <label>Endereço:{props.endereco}</label>
        </tr>
        <tr>
          <label>Telefone:{props.telefone}</label>
        </tr>
        <tr>
          <label>Email:  {props.email} </label>
        </tr>
      </table>
    </div>
  );
}


export default CartaoDeVisitas; 
