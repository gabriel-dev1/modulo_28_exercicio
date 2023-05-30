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

/* const App = () => {
  let [materiaA, setMateriaA] = useState(0) // usa uma constante para declarar
  let [materiaB, setMateriaB] = useState(0) // usa uma constante para declarar
  let [materiaC, setMateriaC] = useState(0) // usa uma constante para declarar
  let [nome,setNome] = useState('')

  // Ciclo do componente 
  // mount
  // update
  // onmount

  useEffect(() => {  // pode ser usado com props
      console.log('o componente iniciou')

      return () => {
          console.log('o componente finalizou')
      }
  }, [])

  useEffect(() => {
      console.log('O estado nome mudou')
  }, [nome]) // Para ser exibido apenas quando o nome for alterado 


  useEffect(() => {
      console.log(`materia A mudou para: ${materiaA}`) // 'materia A mudou para' + materia A
  }, [materiaA, materiaB, materiaC])
  // 

  const alteraNome = (event) => {
      console.log(event.target.value)
      //setNome(event.target.value)
      setNome(estadoAnterior => {
          console.log(estadoAnterior)

          return event.target.value
      })
  }

  const renderizaResultado = () => {
      const soma = materiaA + materiaB + materiaC
      const media = soma/3

      //console.log(media)

      if (media >= 7) {
          return (
              <p>Olá, {nome} foi aprovado</p>
          ) 
      } else {
         return (
              <p>Olá, {nome} foi reprovado</p> 
         )
      } 
  }

  return (
      <form>
          <ul>
              {[1,2,3,4,5].map(item => (
                  <li key={item} >{item}</li> // para usar mais tags é preciso usar os fragmentos (<>,</>)
              ) )}
          </ul>
          
          <input type='text' placeholder='Seu nome' onChange={alteraNome} />
          <input type='number' placeholder='Nota da matéria A' onChange={event => setMateriaA(parseInt(event.target.value))} /> {/* ({target}) --- desestruturação do evento/target *
          <input type='number' placeholder='Nota da matéria B' onChange={event => setMateriaB(parseFloat(event.target.value))} />
          <input type='number' placeholder='Nota da matéria C' onChange={event => setMateriaC(parseFloat(event.target.value))} />
          {renderizaResultado()}
          {materiaA}
          {materiaB}
          {materiaC}
      </form>
  )
} */

export default App
