import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";


function RecMapaMental() {
  return (
    <div className="mx-auto max-w-7xl p-4 m-4">
      <h1 className="text-4xl text-slate-700 font-bold py-4">Estratégia Didática: Mapa Mental</h1>
      <p className="text-slate-700">
        O mapa mental permite organizar conceitos e/ou ideias que vão se ramificando sob a forma de galhos, formando uma “árvore do conhecimento”. Esse mapa possui uma estrutura flexível, sendo possível adicionar a ele outros elementos, como desenhos, imagens, vídeos, etc. Você pode ver um exemplo {' '} <a href="https://drive.google.com/file/d/1kXri6YnZctOUFKywSZYS7r94QtHL1pcG/view?usp=sharing" target='blank' className="text-blue-700 underline hover:text-purple-700">aqui</a>{''}.
      </p>
      <div className="mt-8">
        <Accordion variant='bordered' >
            <AccordionItem key="1" aria-label="Accordion 1" title="Sugestão de atividade">
              <p className='py-2'>A Parte 3 do Livro do Estudante aborda poupança e descontos.</p>
              <p className='py-2'>Assim, sugerimos que os estudantes se organizem em duplas ou trios e criem um mapa mental sobre (1) poupança ou (2) descontos.</p>
              <p className='py-2'>Caso julgue necessário, revisitem os capítulos 5, 6, 7 e 8 do Livro do Estudante.</p>
              <p className='py-2'>Após a construção do mapa pelas duplas, apresente-os para toda a turma.</p>
              <p className='py-2'>Se vocês não tiverem acesso à internet, os estudantes podem fazer o mapa mental com lápis e papel.</p>
              <p className='py-2 font-bold'>ATENÇÃO:</p>
              <p className='py-2'>Antes que os estudantes iniciem a atividade, certifique- se de que eles entenderam a estrutura de um mapa mental. Chame a atenção para o fato de que eles devem sistematizar e organizar os conceitos com frases curtas, imagens etc.</p>
              <p className='py-2'>Consulte {' '} <a href="https://drive.google.com/file/d/1AYiVYrpFnCNdE9i08dcUqS8HFWHEKCN8/view?usp=sharing" target='blank' className="text-blue-700 underline hover:text-purple-700">aqui</a>{''} um modelo de mapa mental construído na plataforma Mind Meister e que poderá servir de inspiração para os alunos.</p>
              <p className='py-2'>A intenção desta atividade é proporcionar um cenário de aprendizagem em que os estudantes sejam protagonistas do próprio conhecimento. Nesse cenário, o educador será um orientador ou mentor, motivando, questionando, orientando os alunos.</p>
              <p className='py-2'>Se você não tiver acesso à internet, pode fazer o mapa mental com lápis e papel.</p>
              <p className='py-2'>No momento de socialização da atividade, faça perguntas aos estudantes sobre a construção do mapa. Sistematize essas atividades com as ideias e respostas geradas pelas duplas que construíram os mapas.</p>
              
                
                
            </AccordionItem>
            
        </Accordion>
        
      </div>
    </div>
  );
}

export default RecMapaMental;
