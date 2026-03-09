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

//-------------CHAT-----------------------
function toggleChat(){
    const chatBox = document.getElementById("chatBox");
    chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
}
function sendMessage(){
    const input = document.getElementById("chatInput");
    const chatBody = document.getElementById("chatBody");

    if(input.value.trim() === "") return;

    // Mensagem do usuário
    const userMsg = document.createElement("div");
    userMsg.classList.add("user-message");
    userMsg.textContent = input.value;
    chatBody.appendChild(userMsg);

    chatBody.scrollTop = chatBody.scrollHeight;

    // Enviar para WhatsApp
    const numero = "258845421616"; // seu número
    const texto = encodeURIComponent(input.value);
    const url = `https://wa.me/${numero}?text=${texto}`;
    
    window.open(url, "_blank");

    input.value = "";
}
