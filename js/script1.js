const menuBar = document.getElementById('menu-bars');
const navMenu = document.getElementById('nav-menu');
menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// FECHAR MENU AO CLICAR FORA (MOBILE)
document.addEventListener('click', (e) => {

    const isClickInsideMenu = navMenu.contains(e.target);
    const isClickOnToggle = menuBar.contains(e.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
        navMenu.classList.remove('active');
        menuBar.classList.remove('active');
    }

});


//---------------------------------------------
const botoes = document.querySelectorAll(".verMais");

const paginaProduto = document.getElementById("paginaProduto");
const titulo = document.getElementById("produtoTitulo");
const preco = document.getElementById("produtoPreco");
const imagem = document.getElementById("produtoImagem");
const descricao = document.getElementById("produtoDescricao");

botoes.forEach(botao =>{

    botao.addEventListener("click", ()=>{

        titulo.innerText = botao.dataset.nome;
        preco.innerText = botao.dataset.preco;
        imagem.src = botao.dataset.img;
        descricao.innerText = botao.dataset.desc;

        document.querySelector(".artigo-section").style.display="none";
        paginaProduto.style.display="block";

    });

});
//------------------Voltar----------------------------------
document.querySelector(".voltar").onclick = () =>{
    document.querySelector(".artigo-section").style.display="block";
    paginaProduto.style.display="none";
};