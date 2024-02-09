
const TesteBard = () => {
    const cards = [
      {
        emoji: '😊',
        title: 'Desenvolvimento Web Moderno',
        description: 'Aprenda as últimas tecnologias e frameworks para criar websites e aplicações web incríveis.',
      },
      {
        emoji: '😊',
        title: 'Design de Interface de Usuário',
        description: 'Crie interfaces de usuário elegantes e intuitivas que proporcionam uma ótima experiência ao usuário.',
      },
      {
        emoji: '😊',
        title: 'Design de Interface de Usuário',
        description: 'Crie interfaces de usuário elegantes e intuitivas que proporcionam uma ótima experiência ao usuário.',
      },
      {
        emoji: '😊',
        title: 'Design de Interface de Usuário',
        description: 'Crie interfaces de usuário elegantes e intuitivas que proporcionam uma ótima experiência ao usuário.',
      },
      {
        emoji: '😊  ',
        title: 'Design de Interface de Usuário',
        description: 'Crie interfaces de usuário elegantes e intuitivas que proporcionam uma ótima experiência ao usuário.',
      },
      // Adicione mais cards aqui...
    ];
  
    return (
        <div className="container max-w-5xl mx-auto">
        <h1>Título Principal</h1>
        <p>Descrição Principal</p>
        <div className="cards grid grid-cols-3 grid-rows-2 gap-4">
          {cards.map((card) => (
            <div key={card.title} className="card p-8 bg-gray-100 rounded-md hover:shadow-md">
              <div className="emoji-container flex justify-center items-center mb-2 ">
                <span className="emoji text-4xl text-blue-500">{card.emoji}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800">{card.title}</h2>
              <p className="text-base text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TesteBard;