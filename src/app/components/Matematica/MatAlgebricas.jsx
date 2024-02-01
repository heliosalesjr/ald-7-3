import React from 'react'
import ReactPlayer from 'react-player'

function MatAlgebricas() {
    return (
        <div className=''>
            <div className='max-w-7xl mx-auto m-4'>
                <div className='mx-auto p-4'>
                    <h1 className='font-bold text-3xl py-4 text-center text-slate-700'>Expressões algébricas</h1>
                    <p className='text-slate-700 py-4'>Qual a diferença entre incógnita e variável? O professor Rafael Procópio mostra o que significa esses termos, tão importantes na resolução de equações e funções. No vídeo seguinte, a professora Gis traz o conceito, alguns exemplos e exercícios para ajudar os estudantes a compreender o que são expressões algébricas equivalentes.</p>
                </div>
                
                <div className="max-w-screen-xl mx-auto p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
                    
                    <div className="w-full lg:w-1/2">
                    <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                        <ReactPlayer url='https://youtu.be/HEMBoy17Zxk' width="100%" />
                    </div>
                    <p className='text-center text-slate-700 font-bold p-4'>Linguagem algébrica: variável e incógnita</p>
                    
                    </div>

                    <div className="w-full lg:w-1/2">
                    <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                        <ReactPlayer url='https://youtu.be/4_zB2dW3LYc' width="100%" />
                    </div>
                    <p className='text-center text-slate-700 font-bold p-4'>Equivalência de expressões algébricas</p>
                    
                    </div>

                </div>

        </div>
        </div>
      )
    }

export default MatAlgebricas