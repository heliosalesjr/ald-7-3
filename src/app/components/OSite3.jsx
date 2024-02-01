import React from 'react';

const Card = ({ title, content }) => (
  <div className="max-w-[200px] p-4 mx-auto bg-white border border-gray-300 rounded-lg shadow-xl m-4 flex flex-col transition-transform hover:scale-105">
    <h2 className="font-bold mb-2 text-primary ">{title}</h2>
    <p className="text-gray-700 mb-2">{content}</p>
  </div>
);

const OSite3 = () => {
  const cardsData = [
    { title: 'Parte do quadro geral', content: '3. Caminhando em direção aos sonhos.' },
    { title: 'Capítulos do livro do estudante', content: '5. Como faço para guardar dinheiro? / 6. Uma ajuda é sempre bem vinda. / 7. O poder da poupança. / 8. Um desconso sempre ajuda.' },
    { title: 'Atividades do projeto', content: 'IV - Atividades. / V - Avaliação' },
    { title: 'Matemática e educação financeira', content: 'Linguagem algébrica: variável e incógnita. / Cálculo de porcentagens simples. / Equivalência de expressões algébricas. / Problemas envolvendo grandezas diretamente e inversamente proporcionais. / Equações polinomiais.' },
    { title: 'Recursos didáticos', content: 'Mapa mental / Google sites' },
  ];

  return (
    <div className='max-w-6xl mx-auto p-8 mb-4'>
        <div>
            <h1 className='text-4xl font-bold mb-4 text-slate-700'>O Site 3</h1>
            <p className='text-slate-700 pb-8'>Vamos ver quais <strong>Etapas do Projeto</strong>, temas de <strong>Matemática</strong> e <strong>ferramentas didáticas</strong> serão tratadas neste site:</p>
        </div>
        
        <div className="flex flex-wrap justify-center">
            {cardsData.map((card, index) => (
                <Card key={index} title={card.title} content={card.content} />
            ))}
        </div>
    
    </div>
    
  );
};

export default OSite3;
