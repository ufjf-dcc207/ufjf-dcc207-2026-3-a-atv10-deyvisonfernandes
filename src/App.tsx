import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import type { GarrafaTypes } from './types'


const garrafaSuperior:Array<GarrafaTypes> = [
  {
    posicao1: "TESTE1",
    posicao2: "TESTE2",
    posicao3: "TESTE3",
    posicao4: "TESTE4"
  }
]


const garrafaInferior:Array<GarrafaTypes> = [
  {
    posicao1: null,
    posicao2: "TESTE1",
    posicao3: "TESTE3",
    posicao4: "TESTE4"
  }
]

let quadrado : string = null;



function App() {
  const [quadradosuperior, setQuadradoSuperior] = useState(garrafaSuperior[0].posicao1)
  const [quadradoInferior, setQuadradoInferior] = useState(0)
function pegar(){
  quadrado = garrafaSuperior[0].posicao1;
  setQuadradoSuperior(null)

}
  return (
    <>
    <section className=''>
      <div className='garrafa'>
        <div className='quadrado'>{garrafaSuperior[0].posicao1}</div>
        <div className='quadrado'>{garrafaSuperior[0].posicao2}</div>
        <div className='quadrado'>{garrafaSuperior[0].posicao3}</div>
        <div className='quadrado'>{garrafaSuperior[0].posicao4}</div>      </div>
        <button onClick={pegar}>PEGAR</button>
    </section>

    <div>{quadrado}</div>

    <section className=''>
      <div className='garrafa'>
        <div className='quadrado'>{garrafaInferior[0].posicao1}</div>
        <div className='quadrado'>{garrafaInferior[0].posicao2}</div>
        <div className='quadrado'>{garrafaInferior[0].posicao3}</div>
        <div className='quadrado'>{garrafaInferior[0].posicao4}</div>      </div>
        <button>ENTORNAR</button>
    </section>

    </>
  )
}

export default App
