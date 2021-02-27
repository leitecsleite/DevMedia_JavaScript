const produtos = [
    { nome: 'Xbox 360', valor: 2000 , estoque: 20 },
    { nome: 'Nintendo Switch', valor: 4000, estoque: 15 },
    { nome: 'PS5', valor: 4500, estoque: 0 },
  ];

  const produtoZerado = produtos.filter( produto => produto.estoque < 1);
    produtoZerado.forEach( produto => {
        console.log(produto); 
    });
  