import { useState, useEffect } from 'react'
import './App.css'

 function App() {
  const [altura, setAltura] = useState(1)
  const [peso, setPeso] = useState(0)

  const alteraPeso = (event) => {
    setPeso((parseFloat(event.target.value)))
  }
  
  const alteraAltura = (event) => {
    setAltura((parseFloat(event.target.value)))
  }

  const calculaImc = () => {
    const imc = peso / altura ** 2
    return Math.floor(imc)
  }
  
  const message = `Resultado do imc igual ${calculaImc()}`
  
  return (
      <>
      <div  className='container'>
        <form>
          <div className='form-div'>
            <label htmlFor='peso'>Peso:</label>
            <span>Coloque o peso em kilogramas</span>
            <input className='input' id='peso' onChange={alteraPeso} type='number' />
          </div>
          <div className='form-div'>
            <label htmlFor='altura'>Altura:</label>
            <span>Coloque a altura em metros</span>
            <input className='input' id='altura' onChange={alteraAltura} type='number'/>
          </div>
          <p>{message}</p>
        </form>
      <div>
      <table>
        <thead>
        <tr>
            <th>IMC</th>
            <th>Classificação</th>
         </tr>
        </thead>
        <tbody>
        <tr>
           <td> Menor que 18.5 </td>
           <td>Abaixo do peso normal</td>
         </tr>
         <tr>
           <td>   
            18.5 - 24.9
           </td>
           <td>
             Peso normal
           </td>
         </tr>
         <tr>
          <td>25.0 - 29.9 </td>
          <td>Excesso de peso</td>
         </tr>
         <tr>
          <td>
            30.0 - 34.9
          </td>
          <td>Obesidade classe 1</td>
         </tr>
         <tr>
          <td>35.0 - 39.9</td>
          <td>Obesidade classe 2</td>
         </tr>
         <tr>
           <td> Maior ou igual a 40.0</td>
           <td>Obesidade classe 3</td>
         </tr>
        </tbody>
      </table>
      </div>
      </div>
      </>
  )
} 

export default App
