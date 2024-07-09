import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calculator from './components/Calculator'


function App() {
  const [expression, setexpression] = useState('')
  
  const changeExpression = (e) => {
    setexpression(e.target.value);
    console.log(expression)
  }

  return (
    <main className='bg-slate-950 h-screen text-slate-200'>
      <div className='flex flex-col h-full items-center justify-center'>
        <section id="header" className='flex flex-col rounded-md bg-blue-600 w-56'>
          <span className='  mb-2 text-center font-semibold text-xl'>Calculator</span>
          <div  className=' rounded-md focus:outline-none px-2 pt-4 h-16 pb-1 text-lg text-zinc-200 bg-blue-800 text-end tracking-wider '>{expression} </div>
        </section>
        <Calculator expression={expression} setexpression={setexpression} />
      </div>
    </main>
  )
}

export default App
