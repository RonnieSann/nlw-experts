const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "let variavel = 10;",
        "variable nome = 10;",
        "const = 10;"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '=== ' em JavaScript?",
      respostas: [
        "Compara valores sem verificar o tipo de dados.",
        "Atribui um valor a uma variável.",
        "Compara valores e tipos de dados."
      ],
      correta: 2
    },
    {
      pergunta: "Como você adiciona um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "' Este é um comentário"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um método de criptografia.",
        "Uma linguagem de programação.",
        "Uma interface para interagir com elementos HTML."
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'querySelector'?",
      respostas: [
        "Selecionar todos os elementos da página.",
        "Selecionar o primeiro elemento que corresponde a um seletor CSS.",
        "Adicionar um evento a um elemento."
      ],
      correta: 1
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado que armazena apenas números.",
        "Um tipo de dado que armazena uma única string.",
        "Um tipo de dado que armazena uma coleção de valores."
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "'let' é usado para variáveis que não podem ser alteradas, enquanto 'const' pode ser reatribuído.",
        "'let' pode ser reatribuído, enquanto 'const' é usado para variáveis que não podem ser alteradas.",
        "'let' e 'const' são intercambiáveis e podem ser usados de forma intercambiável."
      ],
      correta: 1
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "Um evento que ocorre quando a página é carregada.",
        "Um evento que ocorre quando o mouse é clicado em um elemento.",
        "Um evento que ocorre quando uma tecla do teclado é pressionada."
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Um método de ordenação de dados.",
        "Um formato de arquivo para armazenar dados estruturados.",
        "Uma biblioteca para manipulação de elementos HTML."
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'parseInt'?",
      respostas: [
        "Converter uma string em um número inteiro.",
        "Converter um número inteiro em uma string.",
        "Arredondar um número decimal para o inteiro mais próximo."
      ],
      correta: 0
    },
  ];
  // aqui ele vai cria um container e colocar as mesma informações que há no template
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou repetição
  for(const item of perguntas) {
    // aqui faz o clone da Pergunta
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
   
    // outro loop dentro do loop
    for(let resposta of item.respostas) {
      // aqui faz o clone das alternativas
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pegunta na tela
    quiz.appendChild(quizItem)
  }
  
  