import React from 'react'

function AtiDica() {
    return (
        <div className="bg-primary">
          <div className="flex items-center justify-center p-8">
            <div className="attention-box text-white text-center text-lg max-w-5xl mx-auto border-2 rounded-xl p-8 m-8">
              <p>
              Relembre{' '}
                <a
                  href="https://docs.google.com/spreadsheets/d/19rHOh929tbvQl1XpdmED2WJBEILeTNfjahGWxbUSh2k/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 underline"
                >
                  aqui
                </a>{' '}o exemplo de planejamento de PPDA do livro e as estratégias de avaliação nele descritas. E confira {' '}
                <a
                  href="https://docs.google.com/spreadsheets/d/19rHOh929tbvQl1XpdmED2WJBEILeTNfjahGWxbUSh2k/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 underline"
                >
                  aqui
                </a>{' '}um exemplo de tabela para avaliação de um PPDA.</p>
            </div>
          </div>
        </div>
      );
    }

export default AtiDica