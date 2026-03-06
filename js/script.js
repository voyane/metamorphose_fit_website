
//--------------DropDown-----------------------
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', e => {
        e.stopPropagation();

        // fecha os outros
        dropdowns.forEach(other => {
            if (other !== dropdown) {
                other.querySelector('.menu').classList.remove('menu-open');
                other.querySelector('.caret').classList.remove('rotate');
            }
        });

        menu.classList.toggle('menu-open');
        caret.classList.toggle('rotate');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;

            menu.classList.remove('menu-open');
            caret.classList.remove('rotate');

            options.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
        });
    });
});

// fecha dropdown ao clicar fora
document.addEventListener('click', e => {
    if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => {
            dropdown.querySelector('.menu').classList.remove('menu-open');
            dropdown.querySelector('.caret').classList.remove('rotate');
        });
    }
});

//---------menu-toggle------------------
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

//-------Voltar-------------------
const btnBack = document.getElementById('btn-back');
btnBack.addEventListener('click', () =>{
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
})

// FECHAR MENU AO CLICAR FORA (MOBILE)
document.addEventListener('click', (e) => {

    const isClickInsideMenu = navMenu.contains(e.target);
    const isClickOnToggle = menuToggle.contains(e.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }

});

//-------------------Comprar Whatsapp-----
function comprarWhatsapp(){
    const numero = "258845421616";
    const mensagem = encodeURIComponent(
        "Olá, quero saber mais dos suplementos da Metamorphose Fit Shop."
    );
    window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
}

//-------------------------------------------------------------
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let back = document.getElementById('back');
let seeMore = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let list = document.querySelector('.carousel .list');

next.onclick = function(){
    showSlider('next');
}
prev.onclick = function(){
    showSlider('prev');
}

let unAcceptClick;
const showSlider = (type) =>{
    next.style.pointerEvents = 'none';
    prev.style.pointerEvents = 'none';
    carousel.classList.remove('prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        list.appendChild(items[0]);
        carousel.classList.add('next')
    }
    else{
        let positionLast = items.length - 1;
        list.prepend(items[positionLast]);
        carousel.classList.add('prev');
    }
    unAcceptClick = setTimeout(() => {
         next.style.pointerEvents = 'auto';
        prev.style.pointerEvents = 'auto';
    }, 800);
}

seeMore.forEach(button => {
    button.onclick = function(){
        carousel.classList.add('showDetail');
    }
});
back.onclick = function(){
    carousel.classList.remove('showDetail');
}
function addToCart(botao){
    const contacto = "258845421616";

    const item = botao.closest(".item");

    const imagemProduto = item.querySelector(".produto-img").src;
    const precoProduto = item.querySelector(".produto-preco").innerText;

    const notificacao = encodeURIComponent(
        `Olá, gostaria de comprar: \n\n` +
        `Imagem: ${imagemProduto}\n` +
        `Preço: ${precoProduto} MZN\n\n` +
        `Aguardo confirmação.`
    );

    const url = `https://wa.me/${contacto}?text=${notificacao}`;

    window.open(url, "_blank");
}