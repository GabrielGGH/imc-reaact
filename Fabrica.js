import React from 'react';
import CartaoDeVisitas from './CartaoDeVisitas';

function Lista(props) {
  return props.pessoas.map(function (pessoa) {
    return (
      <CartaoDeVisitas
        nome={pessoa.nome}
        endereco={pessoa.endereco}
        telefone={pessoa.telefone}
        email={pessoa.email}
      />
    )
  })
}

class Fabrica extends React.Component {

  state = {
    pessoas: []
  }


  adicionar = () => {

    const pessoa = {
      nome: this.state.nome,
      endereco: this.state.endereco,
      telefone: this.state.telefone,
      email: this.state.email
    }

    this.setState(oldState => {
      return {
        pessoas: oldState.pessoas.concat(pessoa)
      }
    })
  }


  digitouNome = (evento) => {
    this.setState({ nome: evento.target.value })
  }

  digitouEndereco = (evento) => {
    this.setState({ endereco: evento.target.value })
  }

  digitouTelefone = (evento) => {
    this.setState({ telefone: evento.target.value })
  }

  digitouEmail = (evento) => {
    this.setState({ email: evento.target.value })
  }


  render() {
    console.log(this.state.pessoas)
    return (
      <div>
        <h2>Fábrica</h2>
        <table>
          <tr>
            <td>
              <label>Nome: </label>
            </td>
            <td>
              <input value={this.state.pessoas.nome} onChange={this.digitouNome} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Endereço: </label>
            </td>
            <td>
              <input value={this.state.pessoas.endereco} onChange={this.digitouEndereco} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Telefone: </label>
            </td>
            <td>
              <input value={this.state.pessoas.telefone} onChange={this.digitouTelefone} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Email: </label>
            </td>
            <td>
              <input value={this.state.pessoas.email} onChange={this.digitouEmail} />
            </td>
          </tr>
          <tr>
            <td colspan="">
              <button onClick={this.adicionar} >Adicionar </button>
            </td>
          </tr>
        </table>
        <Lista pessoas={this.state.pessoas} />
      </div>
    )
  }
}

export default Fabrica;