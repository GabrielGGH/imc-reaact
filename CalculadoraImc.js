import React from 'react';

class Calculadora extends React.Component {

  state = {
    peso: 0,
    altura: 0,
    imc: undefined
  }

  calcularIMC = () => {
    this.setState({ imc: (this.state.peso) / ((this.state.altura * this.state.altura)) })
  }


  digitou1 = (evento) => {
    this.setState({ peso: evento.target.value })
  }

  digitou2 = (evento) => {
    this.setState({ altura: evento.target.value })
  }


  render() {
    const mensagem = this.state.imc !== undefined ? 'Seu IMC é: ' + this.state.imc.toFixed(2) :
      '';


    return (
      <div>
        <h2>Apresentar o nível de IMC</h2>
        <table className="table1">
          <thead>
            <tr>
              <td><h4>IMC</h4></td>
              <td><h4>Classificação</h4></td>
              <td><h4>Obesidade(grau)</h4></td>
            </tr>
          </thead>
          <tbody>
            <tr className={this.state.imc < 18 ? 'destaque' : ''}>
              <td>Menor que 18</td>
              <td>Magreza</td>
              <td>0</td>
            </tr>
            <tr className={(this.state.imc >= 18.5 && this.state.imc <= 24.9) ? 'destaque' : 'default'}>
              <td>Entre 18,5 e 24,9</td>
              <td>Normal</td>
              <td>0</td>
            </tr>
            <tr className={(this.state.imc >= 25 && this.state.imc <= 29.9) ? 'destaque' : ''}>
              <td>Entre 25,0 e 29,9	</td>
              <td>Sobrepeso</td>
              <td>I</td>
            </tr>
            <tr className={(this.state.imc >= 30 && this.state.imc <= 39.9) ? 'destaque' : ''}>
              <td>Entre 30,0 e 39,9</td>
              <td>Obesidade</td>
              <td>II</td>
            </tr>
            <tr className={(this.state.imc >= 40) ? 'destaque' : ''}>
              <td>Maior que 40,0</td>
              <td>Obesidade grave</td>
              <td>III</td>
            </tr>
          </tbody>
        </table>

        <br></br>

        <table>
          <tr>
            <td>
              <label>Insira seu peso: </label>
            </td>
            <td>
              <input name="peso" value={this.state.peso} onChange={this.digitou1}/><br></br>
            </td>
          </tr>
          <tr>
            <td>
              <label>Insira sua altura: </label>
            </td>
            <td>
              <input name="altura"  value={this.state.altura} onChange={this.digitou2} />
            </td>
          </tr>
          <tr>
            <td colspan="2" >
              <button type="button" onClick={this.calcularIMC}>Calcular</button>
            </td>
          </tr>
          <tr>
            <td colspan="2" >
              <h4>{mensagem}</h4>             
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Calculadora;