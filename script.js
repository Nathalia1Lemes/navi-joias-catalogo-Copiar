/*
  NAVI JOIAS — personalize os dados abaixo.
  1. Troque o número do WhatsApp em whatsappNumber: inclua código do Brasil (55) + DDD + número, sem espaços.
  2. Troque o perfil do Instagram em instagramUrl.
  3. Para cadastrar produtos, copie um objeto dentro da lista products e altere nome, categoria, preço, descrição e imagem.
*/
const whatsappNumber ="5514996868135"; // Exemplo: "5511999999999" — preencha com o número da loja
const instagramUrl = "https://www.instagram.com/navijoias_/";   // Exemplo: "https://www.instagram.com/sualoja/"

const products = [
  {
    id: 1, name: "Colar Duplo Folheado Coração", category: "colares", price: "R$ 39,99",
    description: "",
    tag: "",
    image: "Imagens/Colar_duplo.jpeg"
  },
  {
    id: 2, name: "Kit 2 Pares + Piercing Fake", category: "brincos", price: "R$ 40,90",
    description: "",
    tag: "",
    image: "Imagens/Brinco_trio_prata.jpeg"
  },
  {
    id: 3, name: "Anel Solitário + Riviera ", category: "aneis", price: "R$ 42,90",
    description: "",
    tag: "",
    image: "Imagens/Anel_Riviera.jpeg"
  },
  {
    id: 4, name: "Pulseira Foheada Cartier", category: "pulseiras", price: "R$ 24,98",
    description: "",
    tag: "",
    image: "Imagens/Pulseira_cartie.jpeg"
  },
  {
    id: 5, name: "Colar Veneziana Esfera Tam. P", category: "colares", price: "R$ 20,99",
    description: "",
    tag: "",
    image: "Imagens/Colar_esfera_P.jpeg"
  },
  {
    id: 6, name: "Mini Argola Zircônia Colorido", category: "brincos", price: "R$ 19,90",
    description: "",
    tag: "",
    image: "Imagens/Brinco_argolinha_colorido.jpeg"
  },
  {
    id: 7, name: "Anel Aço Inoxidável Tubo Fino", category: "aneis", price: "R$ 24,50",
    description: "",
    tag: "",
    image: "Imagens/Anel_redondo.jpeg"
  },
  {
    id: 8, name: "Pulseira Insp. CD Aço Inodável - Dourado", category: "pulseiras", price: "R$ 25,90",
    description: "",
    tag: "",
    image: "Imagens/Pulseira_insp_dourada.jpeg"
  },
  {
    id: 9, name: "Conjunto Algema Inspiração Virgina", category: "conjuntos", price: "R$ 49,99",
    description: "",
    tag: "",
    image:"Imagens/Conjunto_virginia.jpeg"
  },
  {
    id: 10, name: "Bracelete Cristal Coração Verde", category: "braceletes", price: "R$ 29,90",
    description: "",
    tag: "",
    image:"Imagens/Bracelete.jpeg"
  },
  {
    id: 11, name: "Colar Gota Cristal - Prata", category: "colares", price: "R$ 27,50",
    description: "",
    tag: "",
    image:"Imagens/Colar_gota.jpeg"
  },
  {
    id: 12, name: "Conjunto Folheado Gravatinha Gota Vermelha", category: "conjuntos", price: "R$ 49,99 ",
    description: "",
    tag: "",
    image:"Imagens/Conjunto_gravata_pedra_vermelha.jpeg"
  },
  {
    id: 13, name: "Pulseira Folheada Coração", category: "pulseiras", price: "R$ 23,90",
    description: "",
    tag: "",
    image:"Imagens/Pulseira_medalha_coração.jpeg"
  },
  {
    id: 14, name: "Colar Folheado Nossa Senhora Cravejado", category: "colares", price: "R$ 39,99",
    description: "",
    tag: "",
    image:"Imagens/Colar_nossasenhora.jpeg"
  },
  {
    id: 15, name: "Brinco Longo Ponto de Luz", category: "brincos", price: "R$ 22,50",
    description: "",
    tag: "",
    image:"Imagens/Brinco_longo_dourado.jpeg"
  },
  {
    id: 16, name: "Colar Folheado Perola", category: "colares", price: "R$ 32,50",
    description: "",
    tag: "",
    image:"Imagens/Colar_perola.jpeg"
  },
  {
    id: 17, name: "Colar Folheado Oval", category: "colares", price: "R$ 29,99",
    description: "",
    tag: "",
    image:"Imagens/Colar_oval.jpeg"
  },
  {
    id: 18, name: "Pulseira Folheada Corações Vazados", category: "pulseiras", price: "R$ 23,90",
    description: "",
    tag: "",
    image:"Imagens/Pulseira_coração_vazado.jpeg"
  },
  {
    id: 19, name: "Pulseira Zircônia Rosa", category: "pulseiras", price: "R$ 29,99",
    description: "",
    tag: "",
    image:"Imagens/Pulseira_riviera_rosabebe.jpeg"
  },
  {
    id: 20, name: "Brinco Zircônia Cristal - Prata", category: "brincos", price: "R$ 29,90",
    description: "",
    tag: "",
    image:"Imagens/Brinco_prata.jpeg"
  },
  {
    id: 21, name: "Pulseira Hand Chain Estrela Zircônia", category: "pulseiras", price: "R$ 35,99",
    description: "",
    tag: "",
    image:"Imagens/Pulseira_dedos1.jpeg"
  },
  {
    id: 22, name: "Pulseira Folheada Medalinhas", category: "pulseiras", price: "R$ 23,90",
    description: "",
    tag: "",
    image:"Imagens/Pulseira_medalinha.jpeg"
  },
  {
    id: 23, name: "Anel Cravejado Reto Zircônia - Regulavél", category: "aneis", price: "R$ 22,25",
    description: "",
    tag: "",
    image:"Imagens/Anel_prata.jpeg"
  },
  {
    id: 24, name: "Colar Riviera Menino Colorido", category: "colares", price: "R$ 42,98",
    description: "",
    tag: "",
    image:"Imagens/Colar_menino.jpeg"
  },
  {
    id: 25, name: "Pingente Menino Riviera Colorido", category: "pingentes", price: "R$ 9,90",
    description: "",
    tag: "",
    image:"Imagens/Pingente_menino.jpeg"
  },
  {
    id: 26, name: "Anel Aço Inoxidável Coração Vazado", category: "aneis", price: "R$ 18,00",
    description: "",
    tag: "",
    image:"Imagens/Anel_coração_vazado.jpeg"
  },
  {
    id: 27, name: "Colar Riviera Inicial - Dourado", category: "colares", price: "R$ 47,00",
    description: "",
    tag: "",
    image:"Imagens/Colar_letraR.jpeg"
  },
  {
    id: 28, name: "Pulseira Insp. CD Aço Inodável - Prata", category: "pulseiras", price: "R$ 25,90",
    description: "",
    tag: "",
    image:"Imagens/Pulseira_insp_prata.jpeg"
  },
  {
    id: 29, name: "Anel Solitário Coração Amarelo", category: "aneis", price: "R$ 22,50",
    description: "",
    tag: "",
    image:"Imagens/Anel_coração_amarelo.jpeg"
  },
  {
    id: 30, name: "Pulseira Flor 4 Pétalas Colorido", category: "pulseiras", price: "R$ 47,80",
    description: "",
    tag: "",
    image:"Imagens/Pulseira_flor.jpeg"
  },
  {
    id: 31, name: "Anel Letra Cravejado Regulável - Prata", category: "aneis", price: "R$ 25,00",
    description: "",
    tag: "",
    image:"Imagens/Anel_letra_M.jpeg"
  },
  {
    id: 32, name: "Colar Riviera Inicial - Prata", category: "colares", price: "R$ 47,00",
    description: "",
    tag: "",
    image:"Imagens/Colar_letraV.jpeg"
  },
  {
    id: 33, name: "Pulseira Riviera Folheada", category: "", price: "R$ 47,80",
    description: "",
    tag: "",
    image:"Imagens/Pulseira_riviera.jpeg"
  },
  {
    id: 34, name: "Anel Letra Cravejado Regulável - Dourado", category: "aneis", price: "R$ 25,00",
    description: "",
    tag: "",
    image:"Imagens/Anel_letra_J.jpeg"
  },
  {
    id: 35, name: "Pulseira Trio Flores Cravejada", category: "pulseiras", price: "R$ 39,99",
    description: "",
    tag: "",
    image:"Imagens/Pulseira_flores_prata.jpeg"
  },
  {
    id: 36, name: "Anel Pizza - Dourado", category: "aneis", price: "R$ 22,25",
    description: "",
    tag: "",
    image:"Imagens/Anel_pizza_dourado.jpeg"
  },
  {
    id: 37, name: "Anel Cristal Oval Turquesa", category: "aneis", price: "R$ 23,00",
    description: "",
    tag: "",
    image:"Imagens/Anel_azul.jpeg"
  },
  {
    id: 38, name: "Brinco Earcuff Cristal - Dourado", category: "brincos", price: "R$ 34,00",
    description: "",
    tag: "",
    image:"Imagens/Brinco_pedras_dourado.jpeg"
  },
  {
    id: 39, name: "Anel Solitário Oval Premium", category: "aneis", price: "R$ 24,50",
    description: "",
    tag: "",
    image:"Imagens/Anel_zirconia_dourado.jpeg"
  },
  {
    id: 40, name: "Anel Pizza - Prata", category: "aneis", price: "R$ 22,25",
    description: "",
    tag: "",
    image:"Imagens/Anel_pizza_prata.jpeg"
  },
  {
    id: 41, name: "Anel Coração Cravejado - Prata", category: "aneis", price: "R$ 19,99",
    description: "",
    tag: "",
    image:"Imagens/Anel_coração_prata.jpeg"
  },
  {
    id: 42, name: "Brinco Earcuff Cristal - Prata", category: "brincos", price: "R$ 34,00",
    description: "",
    tag: "",
    image:"Imagens/Brinco_pedras_prata.jpeg"
  },
  {
    id: 43, name: "Anel Coração Cravejado - Dourado", category: "aneis", price: "R$ 19,99",
    description: "",
    tag: "",
    image:"Imagens/Anel_coração_dourado.jpeg"
  },
  {
    id: 44 , name: "Anel de Cereja Zircônia - Regulavél", category: "aneis", price: "26,00",
    description: "",
    tag: "",
    image:"Imagens/Anel cereja.jpeg"
  },
  {
    id: 45, name: "Bracelete Inspiração Cartier Aço Inoxidável", category: "braceletes", price: "34,00",
    description: "",
    tag: "",
    image:"Imagens/Bracelete Insp.jpeg"
  },
  {
    id: 46, name: "Brinco Alongado Zircônia - Prata", category: "brincos", price: "25,00",
    description: "",
    tag: "",
    image:"Imagens/Brinco Brilho Prata.jpeg"
  },
  {
    id: 47, name: "Brinco Cereja", category: "brincos", price: "22,00",
    description: "",
    tag: "",
    image:"Imagens/Brinco Cereja.jpeg"
  },
  {
    id: 48, name: "Colar Riviera Aço Inoxidável", category: "colares", price: "52,90",
    description: "",
    tag: "",
    image:"Imagens/Colar riviera.jpeg"
  },
  {
    id: 49, name: "Relógio Impiração Bicolor", category: "relogios", price: "79,99",
    description: "",
    tag: "",
    image:"Imagens/Relogio Bicolor.jpeg"
  },
  {
    id: 50, name: "Brinco Alongado Zircônia - Dourado", category: "brincos", price: "25,00",
    description: "",
    tag: "",
    image:"Imagens/Brinco Brilho Dourado.jpeg"
  },
  {
    id: 51, name: "Pulseira Riviera Aço Inoxidável", category: "pulseiras", price: "39,99",
    description: "",
    tag: "",
    image:"Imagens/Pulseira Riviera.jpeg"
  },
  {
    id: 52, name: "Conjunto Inspiração SW", category: "conjuntos", price: "54,99",
    description: "",
    tag: "",
    image:"Imagens/Cunjunto Pedra.jpeg"
  },
  {
    id: 53, name: "Relogio Courino Inspiração Cartier", category: "relogios", price: "69,90",
    description: "",
    tag: "",
    image:"Imagens/Relogio Bulseira de couro.jpeg"
  },
  {
    id: 54, name: "Colar Trevo Aço Inoxidavel - Preto", category:"colares", price: "32,00",
    description: "",
    tag: "",
    image:"Imagens/Colar trevo petro.jpeg"
  },
  {
    id: 55, name: "Relogio Bracelete Inspiração", category:"relogios", price: "59,90",
    description: "",
    tag: "",
    image:"Imagens/Relogio Bracelete.jpeg"
  },
  {
    id: 56, name: "Conjunto Trevo Aço Inoxidável - Branco", category:"conjuntos", price: "42,99",
    description: "",
    tag: "",
    image:"Imagens/Conjunto Trevo Branco.jpeg"
  },
  {
    id: 57, name: "Colar Trevo Aço Inoxidavel - Branco", category:"colares", price: "32,00",
    description: "",
    tag: "",
    image:"Imagens/Colar trevo Branco.jpeg"
  }
];

const categoryNames = {
  colares: "Colares", brincos: "Brincos", aneis: "Anéis", pulseiras: "Pulseiras", conjuntos: "Conjuntos", braceletes:"Braceletes", relogios:"Relogios"
};

function makeWhatsAppUrl(product) {
  const message = product
    ? `Olá, Navi Joias! Tenho interesse na peça "${product.name}" (${product.price}). Poderia me passar mais informações?`
    : "Olá, Navi Joias! Gostaria de conhecer o catálogo e saber mais sobre as peças.";
  const number = whatsappNumber.replace(/\D/g, "");
  return number
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;
}


function renderProducts(category = "todos") {
  const grid = document.getElementById("productGrid");

  const filtered = category === "todos"
    ? products
    : products.filter(p => p.category === category);

  grid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          style="cursor: zoom-in;"
        >
        ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ""}
      </div>

      <div class="product-info">
        <p class="product-category">
          ${categoryNames[product.category] || product.category}
        </p>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>

        <div class="product-bottom">
          <span class="product-price">${product.price}</span>
          <a class="product-buy" href="${makeWhatsAppUrl(product)}" target="_blank" rel="noopener">
            Tenho interesse ↗
          </a>
        </div>
      </div>
    </article>
  `).join("");

  // Ativa o clique nas imagens
  grid.querySelectorAll(".product-image").forEach(img => {
    img.addEventListener("click", function() {
      abrirImagem(this.src, this.alt);
    });
  });
}


// ABRIR IMAGEM AMPLIADA
function abrirImagem(imagem, nome) {
  const modal = document.getElementById("imagemModal");
  const imagemAmpliada = document.getElementById("imagemAmpliada");

  imagemAmpliada.src = imagem;
  imagemAmpliada.alt = nome;

  modal.classList.add("ativo");
  document.body.style.overflow = "hidden";
}


// ABRIR IMAGEM AMPLIADA
function abrirImagem(imagem, nome) {
  const modal = document.getElementById("imagemModal");
  const imagemAmpliada = document.getElementById("imagemAmpliada");

  if (!modal || !imagemAmpliada) return;

  imagemAmpliada.src = imagem;
  imagemAmpliada.alt = nome;

  modal.classList.add("ativo");
  document.body.style.overflow = "hidden";
}

// FECHAR IMAGEM
function fecharImagem() {
  const modal = document.getElementById("imagemModal");

  if (!modal) return;

  modal.classList.remove("ativo");
  document.body.style.overflow = "";
}

// FECHAR CLICANDO FORA DA IMAGEM
const modalImagem = document.getElementById("imagemModal");

if (modalImagem) {
  modalImagem.addEventListener("click", function(event) {
    if (event.target === this) {
      fecharImagem();
    }
  });
}

// FECHAR PRESSIONANDO ESC
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    fecharImagem();
  }
});



document.getElementById("filters").addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderProducts(button.dataset.category);
});

function setSocialLinks() {
  const whatsappLinks = ["whatsappMain", "whatsappFooter"];
  whatsappLinks.forEach(id => document.getElementById(id).href = makeWhatsAppUrl());
  ["instagramMain", "instagramFooter"].forEach(id => {
    const link = document.getElementById(id);
    link.href = instagramUrl || "https://www.instagram.com/";
    if (!instagramUrl) link.title = "Edite instagramUrl no arquivo script.js para colocar o perfil da Navi Joias.";
  });
}
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
menuToggle.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navigation.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
setSocialLinks();


document.getElementById("imagemModal").addEventListener("click", function(event) {
    if (event.target === this) {
        fecharImagem();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        fecharImagem();
    }
});
