import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { GarrafaTypes } from './types'


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
        <div className='quadrado'>TESTE</div>
        <div className='quadrado'>TESTE1</div>
        <div className='quadrado'>TESTE2</div>
        <button>^</button>
      </div>
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
