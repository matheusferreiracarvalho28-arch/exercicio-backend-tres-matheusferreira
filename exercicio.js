console.log("escrevendo na linha de comando")

// 1. Criação do objeto pessoa
const pessoa = {
    nome: "João Silva",
    idade: 17,
    email: "joao@email.com",
    endereco: {
      rua: "Rua das Flores",
      numero: 123,
      cidade: "São Paulo"
    },
    hobbies: ["Futebol", "Videogame", "Leitura"]
  };
  
  // 2. Converter para string JSON simples
  const pessoaJSON = JSON.stringify(pessoa);
  console.log("=== OBJETO PARA JSON ===");
  console.log("Tipo:", typeof pessoaJSON);
  console.log("Conteúdo:", pessoaJSON);
  
  // 3. Converter para JSON formatado (indentação de 2 espaços)
  const pessoaFormatada = JSON.stringify(pessoa, null, 2);
  console.log("\n=== JSON FORMATADO ===");
  console.log(pessoaFormatada);
  
  // 4. Parsing de string JSON para Objeto
  const jsonRecebido = '{"nome":"Maria","idade":16,"turma":"3A"}';
  const objetoConvertido = JSON.parse(jsonRecebido);
  console.log("\n=== JSON PARA OBJETO ===");
  console.log("Tipo:", typeof objetoConvertido);
  console.log(`Nome: ${objetoConvertido.nome}, Idade: ${objetoConvertido.idade}`);
  
  // 5. Criação do array de filmes
  const filmes = [
    { id: 1, titulo: "Matrix", ano: 1999, genero: "Ficção" },
    { id: 2, titulo: "Titanic", ano: 1997, genero: "Romance" },
    { id: 3, titulo: "Toy Story", ano: 1995, genero: "Animação" }
  ];
  
  // 6. Catálogo de Filmes e Simulação de Recebimento
  console.log("\n=== CATÁLOGO DE FILMES ===");
  const filmesJSON = JSON.stringify(filmes, null, 2);
  console.log("Filmes em JSON:", filmesJSON);
  
  // Simulando recebimento (Parsing)
  const filmesRecebidos = JSON.parse(filmesJSON);
  console.log("\nFilmes carregados novamente:");
  
  filmesRecebidos.forEach(filme => {
    console.log(`${filme.id}. ${filme.titulo} (${filme.ano}) - ${filme.genero}`);
  });
  
