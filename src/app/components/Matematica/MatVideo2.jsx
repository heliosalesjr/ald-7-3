'use client'
import React from 'react';
import ReactPlayer from 'react-player';



function MatVideo2() {
    return (
        <div className='max-w-7xl mx-auto py-12'>
          <div className=" p-4 ">
            
    
            <div className="p-4 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 pr-8">
                    <ReactPlayer url='https://youtu.be/8tm69navBPo' width="100%" />
                </div>
              <div className="w-full md:w-1/2 pr-4">
                
                <div className=" mb-4">
                    <h1 className="text-4xl font-bold text-slate-700">Porcentagens</h1>
                </div>
                <h1 className=" text-slate-700 mb-4 pr-8">Cálculo de porcentagens e de acréscimos e decréscimos simples: aqui a professora Juju Torres mostra de maneira bem detalhada como calcular acréscimos e decréscimos percentuais.</h1>
              </div>
              
            </div>
          </div>
        
        </div>
      );
    }

export default MatVideo2