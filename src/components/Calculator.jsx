import React from 'react'

const Button = (props) => {
  const {expression, setexpression } = props

 

  const changeInput = (e) => {

    if(e.target.value === undefined ) return

    if(e.target.value === 'C') {
      setexpression('')
      return
    }
    if(e.target.value === 'back') {
      let newExp = expression.slice(0,-1);
      setexpression(newExp)
      return
    }

    if(e.target.value === '='){
      setexpression(eval(expression))
      return
    }

    let newExp = expression + e.target.value
    setexpression(newExp)   
  }
    
  return (
    <section onClick={changeInput} className='grid grid-cols-4 grid-rows-5 gap-2 w-56 mt-2'>
          <button className='bg-red-500 p-2 rounded-full font-semibold text-base'  value={'C'}>C</button>
          <button className='bg-blue-600 p-2 rounded-full font-semibold text-base' value={'back'}>back</button>
          <button className='bg-blue-600 p-2 rounded-full font-semibold text-base' value={'%'}>%</button>
          <button className='bg-blue-600 p-2 rounded-full font-semibold text-base' value={'/'}>/</button>
          <button className='bg-blue-600 p-2 rounded-full font-semibold text-base' value={'7'}>7</button>
          <button className='bg-blue-600 p-2 rounded-full font-semibold text-base' value={'8'}>8</button>
          <button className='bg-blue-600 p-2 rounded-full font-semibold text-base' value={'9'}>9</button>
          <button className='bg-blue-600 p-2 rounded-full font-semibold text-base' value={'*'}>X</button>
          <button className='bg-blue-600 p-2 rounded-full font-semibold text-base' value={'4'}>4</button>
          <button className='bg-blue-600 p-2 rounded-full font-semibold text-base' value={'5'}>5</button>
          <button className='bg-blue-600 p-2 rounded-full font-semibold text-base' value={'6'}>6</button>
          <button className='bg-blue-600 p-2 rounded-full font-semibold text-base' value={'-'}>-</button>
          <button className='bg-blue-600 p-2 rounded-full font-semibold text-base' value={'1'}>1</button>
          <button className='bg-blue-600 p-2 rounded-full font-semibold text-base' value={'2'}>2</button>
          <button className='bg-blue-600 p-2 rounded-full font-semibold text-base' value={'3'}>3</button>
          <button className='bg-blue-600 p-2 rounded-full font-semibold text-base' value={'+'}>+</button>
          <button className='bg-blue-600 p-2 rounded-full font-semibold text-base' value={'0'}>0</button>
          <button className='bg-red-500 p-2 rounded-full font-semibold text-base  col-span-3' value={'='}>=</button>
        </section>
  )
}

export default Button