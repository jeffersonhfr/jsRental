
// Obtém todos os elementos que você deseja adicionar o evento de clique
const btnAddCart = document.querySelectorAll('.product-card-cta');

// Função de callback para manipular o evento de clique
function handleClick(event) {
    changeItens()
    const itemClicado = event.target; // Obtém o elemento clicado

    // Obtém os dados específicos do item clicado
    // let modalProduct = document.querySelector('.modal_product')
    let modalProductName = document.querySelector('.modal_product_name')

    const dados = {
        type: itemClicado.getAttribute('data-type'),
        id: itemClicado.getAttribute('data-id'),
        name: itemClicado.getAttribute('data-nome'),
        image: itemClicado.getAttribute('data-image')
    };
    document.getElementById("modal_product_image").src = itemClicado.getAttribute('data-image');
    modalProductName.innerHTML = itemClicado.getAttribute('data-nome');

    // Faça algo com os dados do item clicado
    // console.log('Item adicionado ao orçamento:', dados);

    itensBag.push(dados)
    sessionStorage.setItem('itens', JSON.stringify(itensBag));

    changeItens()
    event.preventDefault();
}

// Adiciona o evento de clique a cada elemento
btnAddCart.forEach(function (elemento) {
    elemento.addEventListener('click', handleClick);
});


