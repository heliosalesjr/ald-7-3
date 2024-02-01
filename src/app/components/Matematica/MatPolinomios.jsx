import React from 'react'
import ReactPlayer from 'react-player'

function MatPolinomios() {
    return (
        <div className='bg-gradient-to-tl from-primary to-primary-focus'>
            <div className='max-w-7xl mx-auto m-4'>
                <div className='mx-auto p-4'>
                    <h1 className='font-bold text-3xl py-4 text-center text-white'>Expressões algébricas</h1>
                    <p className='text-white py-4'>A professora Gis traz a definição de equação do primeiro grau, mostra o paralelo com a balança e traz alguns exemplos de resolução. Já o professor Demóclis também traz um exemplo de resolução de equação polinomial do primeiro grau com outra abordagem.</p>
                </div>
                
                <div className="max-w-screen-xl mx-auto p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
                    
                    <div className="w-full lg:w-1/2">
                    <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                        <ReactPlayer url='https://youtu.be/TLkqE_CWY2E' width="100%" />
                    </div>
                    <p className='text-center text-white font-bold p-4'>Equações polinomiais do 1º grau</p>
                    
                    </div>

                    <div className="w-full lg:w-1/2">
                    <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                        <ReactPlayer url='https://youtu.be/fgGHi2MaKYs' width="100%" />
                    </div>
                    <p className='text-center text-white font-bold p-4'>Resolução de equação polinomial</p>
                    
                    </div>

                </div>

        </div>
        </div>
      )
    }

export default MatPolinomios