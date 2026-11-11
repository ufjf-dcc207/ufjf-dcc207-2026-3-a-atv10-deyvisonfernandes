import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import type { GarrafaTypes } from './types'
import GarrafaSuperior from './GarrafaSuperior'


const garrafaTipo:Array<GarrafaTypes> = [
  {
    posicao1: "TESTE1",
    posicao2: "TESTE2",
    posicao3: "TESTE3",
    posicao4: "TESTE4"
  }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className=''>
      <div className='garrafa'>
        <div className='quadrado'>{garrafaTipo[0].posicao1}</div>
        <div className='quadrado'>{garrafaTipo[0].posicao2}</div>
        <div className='quadrado'>{garrafaTipo[0].posicao3}</div>
        <div className='quadrado'>{garrafaTipo[0].posicao4}</div>      </div>
    </section>
     <section>
      <div className='garrafa'>
        <div className='quadrado'></div>
        <div className='quadrado'></div>
        <div className='quadrado'>TESTE</div>
        <button>^</button>
      </div>
    </section>
    </>
  )
}

export default App
