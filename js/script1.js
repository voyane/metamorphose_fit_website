/* ================= MENU MOBILE ================= */
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
//-------------CHAT----------------------------
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


// ================= PRODUTOS =================
const produtos = {
    anabolic908: {
        titulo: "Anabolic Muscle 908g",
        preco: "700,00 MT",
        imagem: "img/anabolicmuscle_1kg-removebg-preview.png",
        descricao: `
            <p>É um suplemento do tipo hipercalórico (mass gainer), indicado para quem quer ganhar peso e massa muscular.</p>
            <p>Principais Benefícios:</p>
            <ul>
                <li>Ajudar no ganho de massa muscular;</li>
                <li>Aumenta ingestão calórica diária;</li>
                <li>Auxilia na recuperação pós-treino;</li>
                <li>Pode melhorar força e desempenho.</li>
            </ul>
            <h4>Composição típica</h4>
            <ol>
                <li>Proteína (≈40–50g por dose)  - Mistura de whey protein, proteína de soja e outras fontes — ajuda na construção e reparação muscular;</li>
                <li>Carboidratos (≈60–90g por dose) - Geralmente maltodextrina e dextrose — fornecem energia e ajudam a repor o glicogênio muscular;</li>
                <li>Creatina (≈3–5g) - Pode ajudar no aumento de força e desempenho em exercícios intensos;</li>
                <li>Aminoácidos e vitaminas - Apoiam recuperação muscular e metabolismo energético;</li>
                <li>Calorias elevadas - Ideal para quem precisa aumentar a ingestão calórica diária.</li>
            </ol>
            <h4>Como é usado</h4>
            <p>Uso comum recomendado pelo fabricante:</p>
            <ol>
                <li>Misturar 3–4 colheres (aprox. 150g);</li>
                <li>Adicionar 500–600ml de água ou leite;</li>
                <li>Agitar bem até dissolver;</li>
                <li>Consumir 1–2 vezes ao dia.</li>
            </ol>
            <h4>Melhor momento</h4>
            <ol>
                <li>Após o treino;</li>
                <li>Ou entre refeições para aumentar calorias.</li>
            </ol>
            <h4>Importante saber</h4>
            <ol>
                <li>Este tipo de suplemento não substitui uma dieta equilibrada e não faz “milagres”. O ganho de peso/massa depende da sua alimentação e do treino.</li>
                <li>Muitos fabricantes recomendam consultar um profissional de saúde antes de usar, especialmente se você tiver alguma condição médica, for menor de 18 anos ou estiver grávida/nutrindo bebê.</li>
                <li>Suplementos e outros produtos importados podem variar em preço e sabor dependendo do país e fornecedor.</li>
            </ol>
        `
    },
    hyperbolic1kg: {
        titulo: "Hyperbolic Mass GH 1kg",
        preco: "800,00MT",
        imagem: "img/hyperbolic_1kg-removebg-preview.png",
        descricao: `
            <p>É um suplemento alimentar do tipo hipercalórico (mass gainer), normalmente utilizado por quem tem dificuldade em ganhar peso ou quer aumentar a ingestão calórica para crescimento muscular.<br/> Serve para:</p>
                <ol>
                    <li>Aumentar o consumo de calorias diárias;</li>
                    <li>Auxiliar no ganho de massa muscular;</li>
                    <li>Melhorar a recuperação pós-treino;</li>
                    <li>Ajudar pessoas com metabolismo acelerado.</li>
                </ol>
            <p>Composição típica (pode variar um pouco, mas geralmente contém:)</p>
                <ol>
                    <li>Carboidratos (60–75%) - Principal fonte de energia;</li>
                    <li>Proteína (10–25%) - Pode vir do soro do leite (whey);</li>
                    <li>Gorduras (baixa a moderada quantidade) - Auxiliam no aporte calórico;</li>
                    <li>Vitaminas e Minerais - Complexo B, Ferro, Zinco, Cálcio</li>
                </ol>
            <h4>Como é usado</h4>
                <ol>
                    
                    <li>Misturar 1 dose (conforme a embalagem) com 250–500 ml de água ou leite;</li>
                    <li>Tomar após o treino (mais comum) ou entre refeições;</li>
                    <li>Pessoas com peso maior podem iniciar com menos porções nos primeiros dias e depois ajustar conforme necessário.</li>
                </ol>
            <h4>Importante saber</h4>
                <ol>
                    <li>Não substitui alimentação sólida;</li>
                    <li>Pode causar aumento de gordura se usado em excesso;</li>
                    <li>Ideal para quem tem dificuldade real em ganhar peso;</li>
                    <li>Deve ser combinado com treino de musculação.</li>
                </ol>
        `
    },
    anabolic4kg: {
        titulo: "Anabolic Muscle 4kg",
        preco: "2100,00 MT",
        imagem: "img/anabolicmuscle_4kg-removebg-preview.png",
        descricao: `
            <p>É um suplemento do tipo hipercalórico (mass gainer), indicado para quem quer ganhar peso e massa muscular.</p>
            <p>Principais Benefícios:</p>
            <ul>
                <li>Ajudar no ganho de massa muscular;</li>
                <li>Aumenta ingestão calórica diária;</li>
                <li>Auxilia na recuperação pós-treino;</li>
                <li>Pode melhorar força e desempenho.</li>
            </ul>
            <h4>Composição típica</h4>
            <ol>
                <li>Proteína (≈40–50g por dose)  - Mistura de whey protein, proteína de soja e outras fontes — ajuda na construção e reparação muscular;</li>
                <li>Carboidratos (≈60–90g por dose) - Geralmente maltodextrina e dextrose — fornecem energia e ajudam a repor o glicogênio muscular;</li>
                <li>Creatina (≈3–5g) - Pode ajudar no aumento de força e desempenho em exercícios intensos;</li>
                <li>Aminoácidos e vitaminas - Apoiam recuperação muscular e metabolismo energético;</li>
                <li>Calorias elevadas - Ideal para quem precisa aumentar a ingestão calórica diária.</li>
            </ol>
            <h4>Como é usado</h4>
            <p>Uso comum recomendado pelo fabricante:</p>
            <ol>
                <li>Misturar 3–4 colheres (aprox. 150g);</li>
                <li>Adicionar 500–600ml de água ou leite;</li>
                <li>Agitar bem até dissolver;</li>
                <li>Consumir 1–2 vezes ao dia.</li>
            </ol>
            <h4>Melhor momento</h4>
            <ol>
                <li>Após o treino;</li>
                <li>Ou entre refeições para aumentar calorias.</li>
            </ol>
            <h4>Importante saber</h4>
            <ol>
                <li>Este tipo de suplemento não substitui uma dieta equilibrada e não faz “milagres”. O ganho de peso/massa depende da sua alimentação e do treino.</li>
                <li>Muitos fabricantes recomendam consultar um profissional de saúde antes de usar, especialmente se você tiver alguma condição médica, for menor de 18 anos ou estiver grávida/nutrindo bebê.</li>
                <li>Suplementos e outros produtos importados podem variar em preço e sabor dependendo do país e fornecedor.</li>
            </ol>
        `
    },
    hyperbolic4kg: {
        titulo: "Hyperbolic Mass GH 4kg",
        preco: "2500,00MT",
        imagem: "img/hyperbolic_4kg-removebg-preview.png",
        descricao: `
            <p>É um suplemento alimentar do tipo hipercalórico (mass gainer), normalmente utilizado por quem tem dificuldade em ganhar peso ou quer aumentar a ingestão calórica para crescimento muscular.<br/> Serve para:</p>
                <ol>
                    <li>Aumentar o consumo de calorias diárias;</li>
                    <li>Auxiliar no ganho de massa muscular;</li>
                    <li>Melhorar a recuperação pós-treino;</li>
                    <li>Ajudar pessoas com metabolismo acelerado.</li>
                </ol>
            <p>Composição típica (pode variar um pouco, mas geralmente contém:)</p>
                <ol>
                    <li>Carboidratos (60–75%) - Principal fonte de energia;</li>
                    <li>Proteína (10–25%) - Pode vir do soro do leite (whey);</li>
                    <li>Gorduras (baixa a moderada quantidade) - Auxiliam no aporte calórico;</li>
                    <li>Vitaminas e Minerais - Complexo B, Ferro, Zinco, Cálcio</li>
                </ol>
            <h4>Como é usado</h4>
                <ol>
                    
                    <li>Misturar 1 dose (conforme a embalagem) com 250–500 ml de água ou leite;</li>
                    <li>Tomar após o treino (mais comum) ou entre refeições;</li>
                    <li>Pessoas com peso maior podem iniciar com menos porções nos primeiros dias e depois ajustar conforme necessário.</li>
                </ol>
            <h4>Importante saber</h4>
                <ol>
                    <li>Não substitui alimentação sólida;</li>
                    <li>Pode causar aumento de gordura se usado em excesso;</li>
                    <li>Ideal para quem tem dificuldade real em ganhar peso;</li>
                    <li>Deve ser combinado com treino de musculação.</li>
                </ol>
        `
    },
    fastgrow4kg: {
        titulo: "Fast Grow Anabolic GH 4kg",
        preco: "3750,00 MT",
        imagem: "img/fastgrow_4kg-removebg-preview.png",
        descricao: `
            <p>É um suplemento alimentar em pó projetado principalmente para pessoas que querem:</p>
            <ol>
                <li>Ajudar no crescimento muscular;</li>
                <li>Suportar recuperação após treinos;</li>
                <li>Fornecer proteína e calorias extras para quem tem dificuldade em ganhar peso.</li>
            </ol>
            <p>
                Ele combina fontes de proteína, carboidratos e outros ingredientes numa fórmula “all-in-one” — ou seja, vários nutrientes num mesmo produto
            </p>
            <h4>Composição típica (por dose ~150 g)</h4>
            <ol>
                <li>~50–55 g de proteína (mistura de whey, caseína e proteína de soja) — ajuda a reparar fibras musculares.</li>
                <li>Carboidratos (maltodextrina, dextrose) — para dar energia e ajudar a repor glicogênio.</li>
                <li>Creatina (≈5000 mg) — pode ajudar no desempenho de exercícios de alta intensidade.</li>
                <li>Aminoácidos, taurina e tribulus — ingredientes que algumas marcas usam para apoiar a síntese de proteína e força, embora evidência forte possa ser variável.</li>
            </ol>
            <h4>Como é usado</h4>
            <p>  Geralmente, a recomendação do fabricante é:</p>
            <ol>
                <li>~Misturar 3 colheres (~150 g) em cerca de 600-650 ml de água;</li>
                <li>Tomar 1-2 vezes por dia, entre refeições ou conforme o plano de nutrição;</li>
                <li>Pessoas com peso maior podem iniciar com mais porções nos primeiros dias e depois ajustar conforme necessário.</li>
            </ol>
            <h4>Importante saber</h4>
            <ol>
                <li>Este tipo de suplemento não substitui uma dieta equilibrada e não faz “milagres”. O ganho de peso/massa depende da sua alimentação e do treino.</li>
                <li>Muitos fabricantes recomendam consultar um profissional de saúde antes de usar, especialmente se você tiver alguma condição médica, for menor de 18 anos ou estiver grávida/nutrindo bebê.</li>
                <li>Suplementos e outros produtos importados podem variar em preço e sabor dependendo do país e fornecedor.</li>
            </ol>
        `
    },
    hypergainer4kg: {
        titulo: "Hyper Gain Mass 4kg",
        preco: "2500,00MT",
        imagem: "img/hypergainer_4kg-removebg-preview.png",
        descricao: `
            <p>É um suplemento hipercalórico (mass gainer), e o principal objetivo dele é ajudar pessoas a ganhar peso e massa muscular de forma mais rápida e prática.<br/> Serve para:</p>
                            <ol>
                                <li>Aumentar a ingestão calórica;</li>
                                <li>Auxiliar no ganho de massa muscular;</li>
                                <li>Melhorar a recuperação pós-treino;</li>
                                <li>Ajudar pessoas com metabolismo acelerado.</li>
                            </ol>
            <p>Embora a tabela exata dependendo da marca e sabor, produtos como esse costumam incluir:</p>
                                <ol>
                                    <li>Carboidratos (60–75%) - Principal fonte de energia;</li>
                                    <li>Proteína (10–25%) - ajuda na construção muscular;</li>
                                    <li>Gorduras - geralmente em menor quantidade (a quantidade exata depende da versão e sabor);</li>
                                    <li>Vitaminas e Minerais - para apoiar o metabolismo geral;</li>
                                    <li>L‑Glutamina e Tribulus (em algumas versões) — para recuperação e suporte muscular</li>
                                    <li>Creatina — pode ajudar no desempenho de força.</li>
                                </ol>
            <h4>Como é usado</h4>
                                <ol>
                                
                                    <li>Misture com água ou leite (250–600 ml) para fazer o shake;</li>
                                    <li>Porções diárias: 1 a 3 shakes por dia, dependendo da necessidade calórica e volume de treino;</li>
                                    <li>Quando tomar: após o treino, entre as refeições, como complemento de calorias quando for difícil comer mais comida sólida</li>
                                </ol>
            <h4>Importante saber</h4>
                                <ol>
                                    <li>É um suplemento, não um alimento principal – você ainda precisa comer bem;</li>
                                    <li>Pode ajudar a ganhar peso, mas se fizer muito além do que precisas, pode ganhar gordura;</li>
                                    <li>Hidratação e treino consistente são essenciais para resultados;</li>
                                    <li>Muitos profissionais recomendam consultar um nutricionista antes de usar.</li>
                                </ol>
        `
    },
    hulkgainer4kg: {
        titulo: "Hulk Gainer 4kg",
        preco: "2100,00 MT",
        imagem: "img/hulkgainer_4kg-removebg-preview.png",
        descricao: `
            <p>É um suplementos chamado mass gainer (hipercalórico), feito para ajudar no ganho de peso e massa muscular quando usado com treino e alimentação apropriada.<br/> Serve para:</p>
                            <ol>
                                <li>Aumentar a ingestão calórica;</li>
                                <li>Auxiliar no ganho de massa muscular;</li>
                                <li>Melhorar a recuperação pós-treino;</li>
                                <li>Ajudar pessoas com metabolismo acelerado.</li>
                            </ol>
            <p>Embora a tabela exata dependendo da marca e sabor, produtos como esse costumam incluir:</p>
                                <ol>
                                    <li>Carboidratos (~165 g) — fornecem energia e ajudam a ganhar peso;</li>
                                    <li>Proteínas (~30 g) — pra ajudar a construir músculo;</li>
                                    <li>Vitaminas e Minerais - para apoiar o metabolismo geral;</li>
                                    <li>Creatina (~5 g) — pode melhorar força e recuperação em algumas fórmulas.</li>
                                </ol>
            <h4>Como é usado</h4>
                                <ol>
                                    <li>Misture 3 scoops com água ou leite para um shake calórico grande.</li>
                                    <li>Pode tomar 1–3 vezes por dia dependendo de quantas calorias extras precisas;</li>
                                    <li>Muitas pessoas tomam após o treino, ou entre refeições quando estão com dificuldade de comer o suficiente.</li>
                                </ol>
            <h4>Importante saber</h4>
                                <ol>
                                    <li>Não substitui refeições completas — é um suplemento para complementar a dieta;</li>
                                    <li>Se usado sem treino adequado pode levar a ganho de gordura, não só músculo;</li>
                                    <li>É melhor combinar com uma alimentação equilibrada e um plano de treino;</li>
                                    <li>Não é recomendado para menores de 18 anos sem orientação de um profissional de saúde.</li>
                                </ol>
        `
    },
    hypermass4kg: {
        titulo: "Hyper Mass Xtrm 4kg",
        preco: "2100,00MT",
        imagem: "img/hypermass_4kg-removebg-preview.png",
        descricao: `
            <p>É um suplemento alimentar do tipo hipercalórico (mass gainer), normalmente utilizado por quem tem dificuldade em ganhar peso ou quer aumentar a ingestão calórica para crescimento muscular.<br/> Serve para:</p>
                <ol>
                    <li>Aumentar o consumo de calorias diárias;</li>
                    <li>Auxiliar no ganho de massa muscular;</li>
                    <li>Melhorar a recuperação pós-treino;</li>
                    <li>Ajudar pessoas com metabolismo acelerado.</li>
                </ol>
            <p>Composição típica (pode variar um pouco, mas geralmente contém:)</p>
                <ol>
                    <li>Carboidratos (60–75%) - Principal fonte de energia;</li>
                    <li>Proteína (10–25%) - Pode vir do soro do leite (whey);</li>
                    <li>Gorduras (baixa a moderada quantidade) - Auxiliam no aporte calórico;</li>
                    <li>Vitaminas e Minerais - Complexo B, Ferro, Zinco, Cálcio</li>
                </ol>
            <h4>Como é usado</h4>
                <ol>
                    
                    <li>Misturar 1 dose (conforme a embalagem) com 250–500 ml de água ou leite;</li>
                    <li>Tomar após o treino (mais comum) ou entre refeições;</li>
                    <li>Pessoas com peso maior podem iniciar com menos porções nos primeiros dias e depois ajustar conforme necessário.</li>
                </ol>
            <h4>Importante saber</h4>
                <ol>
                    <li>Não substitui alimentação sólida;</li>
                    <li>Pode causar aumento de gordura se usado em excesso;</li>
                    <li>Ideal para quem tem dificuldade real em ganhar peso;</li>
                    <li>Deve ser combinado com treino de musculação.</li>
                </ol>
        `
    }
};

//================= PEGAR PRODUTO DA URL =================
const params = new URLSearchParams(window.location.search);
const produtoID = params.get("produto");

const paginaProduto = document.getElementById("paginaProduto");
const artigoSection = document.querySelector(".artigo-section");

const produtoImagem = document.getElementById("produtoImagem");
const produtoTitulo = document.getElementById("produtoTitulo");
const produtoPreco = document.getElementById("produtoPreco");
const produtoDescricao = document.getElementById("produtoDescricao");

/* ================= MOSTRAR PRODUTO ================= */
if (produtoID && produtos[produtoID]) {
    const produto = produtos[produtoID];

    // esconder lista de produtos
    artigoSection.style.display = "none";

    // mostrar página do produto
    paginaProduto.style.display = "block";

    // preencher dados
    produtoImagem.src = produto.imagem;
    produtoTitulo.textContent = produto.titulo;
    produtoPreco.textContent = produto.preco;
    produtoDescricao.innerHTML = produto.descricao;

    // rolar para o topo da página do produto
    paginaProduto.scrollTop = 0;
}

//================= BOTÃO VOLTAR ================= 
document.querySelector(".voltar").addEventListener("click", () => {
    history.pushState({}, "", window.location.pathname);
    // volta para a lista de produtos sem recarregar a página
    paginaProduto.style.display = "none";
    artigoSection.style.display = "block";
});

//---------------Favoritos----------------------
// pegar favoritos guardados
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
/* marcar favoritos ao carregar página */
document.querySelectorAll('.favorito').forEach(btn => {

    const id = btn.dataset.id;
    const icon = btn.querySelector('i');
    // se já estiver salvo → marcar
    if(favoritos.includes(id)){
        icon.classList.add('active');
    }
    // clique no coração
    btn.addEventListener('click', () => {
        icon.classList.toggle('active');
        if(favoritos.includes(id)){
            // remover
            favoritos = favoritos.filter(item => item !== id);
        } else {
            // adicionar
            favoritos.push(id);
        }
        // salvar no navegador
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    });
});

//-------Ratting--------------
document.querySelectorAll('.rating').forEach(ratingDiv => {
    const stars = ratingDiv.querySelectorAll('i');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const starValue = parseInt(star.dataset.star);
            stars.forEach(s => {
                if (parseInt(s.dataset.star) <= starValue) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
});

//================= CARRINHO ================= 
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
/* atualizar contador */
function atualizarCartCount(){

    const count = carrinho.reduce((total,item)=> {
        return total + item.quantidade;
    },0);

    document.getElementById("cartCount").textContent = count;
}
/* adicionar produto */
function adicionarCarrinho(id){
    const produto = produtos[id];
    if(!produto) return;
    const existe = carrinho.find(item => item.id === id);
    if(existe){
        existe.quantidade++;
    }else{
        carrinho.push({
            id:id,
            titulo:produto.titulo,
            preco: parseFloat(produto.preco.replace(" MT","").replace(",",".")),
            imagem:produto.imagem,
            quantidade:1
        });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarCartCount();

    animarBotao();
}
/* evento dos botões */
document.querySelectorAll(".cart-btn").forEach(btn => {

    btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        adicionarCarrinho(id);
        showToast("Produto adicionado ao carrinho!");
        renderCart();
    });
});
/* animação botão */
function animarBotao(){
    const cart = document.getElementById("cartCount");

    cart.style.transform = "scale(1.4)";

    setTimeout(()=>{
        cart.style.transform = "scale(1)";
    },200);
}
/* iniciar contador */
atualizarCartCount();
//----------------ANIMACAO---------------------
function animateCart(){
    const cart = document.getElementById("openCart");

    cart.classList.add("cart-bounce");

    setTimeout(()=>{
        cart.classList.remove("cart-bounce");
    },500);
};

/* ================= CART SYSTEM ================= */

const drawer = document.getElementById("cartDrawer");
const openCart = document.getElementById("openCart");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

// abrir / fechar drawer
openCart.addEventListener("click", () => drawer.classList.add("active"));
closeCart.addEventListener("click", () => drawer.classList.remove("active"));

/* fechar ao clicar fora
document.addEventListener("click", (e) => {
  if (!drawer.contains(e.target) && e.target.id !== "openCart") {
    drawer.classList.remove("active");
  }
});
*/

// salvar carrinho
function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// renderizar carrinho
function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;

  if (carrinho.length === 0) {
    cartItems.innerHTML = `<p class="cart-empty">Carrinho vazio</p>`;
    cartTotal.textContent = "0 MT";
    cartCount.textContent = "0";
    return;
  }

  carrinho.forEach((item, index) => {
    total += item.preco * item.quantidade;
    count += item.quantidade;

    const li = document.createElement("div");
    li.className = "cart-item";
    li.innerHTML = `
      <img src="${item.imagem}" alt="${item.titulo}">
      <div class="cart-info">
        <h4>${item.titulo}</h4>
        <p>${item.quantidade} x ${item.preco} MT</p>
      </div>
      <div class="cart-actions">
        <button class="minus">-</button>
        <button class="plus">+</button>
        <button class="remove-btn">Apagar</button>
      </div>
    `;

    cartItems.appendChild(li);

    // eventos dos botões
    li.querySelector(".minus").addEventListener("click", () => alterarQuantidade(index, -1));
    li.querySelector(".plus").addEventListener("click", () => alterarQuantidade(index, 1));
    li.querySelector(".remove-btn").addEventListener("click", () => removerItem(index));
  });

  cartTotal.textContent = total.toFixed(2) + " MT";
  cartCount.textContent = count;
}

// alterar quantidade
function alterarQuantidade(index, delta) {
  carrinho[index].quantidade += delta;
  if (carrinho[index].quantidade <= 0) {
    carrinho.splice(index, 1);
  }
  salvarCarrinho();
  renderCart();
}

// remover item
function removerItem(index) {
  carrinho.splice(index, 1);
  salvarCarrinho();
  renderCart();
}

// iniciar render
renderCart();


/* ================= TOAST ================= */
function showToast(mensagem){
    const toastContainer = document.getElementById("toast");
    const toast = document.createElement("div");
    toast.className = "toast-msg";

    toast.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        <span>${mensagem}</span>
    `;
    toastContainer.appendChild(toast);
    // remover após 3s
    setTimeout(() => {
        toast.classList.add("toast-hide");

        setTimeout(()=>{
            toast.remove();
        },400);
    },3000);
}