import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import './style.css';
import CartaoDeVisitas from './CartaoDeVisitas';
import Calculadora from './CalculadoraImc';
import Fabrica from './Fabrica';


const Pessoas = [
  {
    nome:"Gabriel.",
    endereco: "Avenida Cerro Azul, 544.",
    telefone: "(99) 9999-9999.",
    email: "a@teste"
  },
   {
    nome:"Gabriel 2.",
    endereco: "Avenida Cerro Azul, 544.",
    telefone: "(88) 8888-8888."
  },
  {
    nome:"Gabriel 3.",
    endereco: "Avenida Cerro Azul, 544.",
    telefone: "(77) 7777-7777.",
    email: "c@teste"
  }
];


function Lista(props){
  return props.xxx.map(function(pessoa){
    return (
      <CartaoDeVisitas 
        nome = {pessoa.nome}  
        endereco = {pessoa.endereco}
        telefone = {pessoa.telefone}
        email = {pessoa.email}
      />
    )
  })
}

function map( arr, funcao) {
  let resultado = []
    for (let item in arr) {
      resultado.push(funcao(item))
    }
    return resultado;
}


ReactDOM.render(<Calculadora
  />, document.getElementById('root')
);

