/*
  NAVI JOIAS — personalize os dados abaixo.
  1. Troque o número do WhatsApp em whatsappNumber: inclua código do Brasil (55) + DDD + número, sem espaços.
  2. Troque o perfil do Instagram em instagramUrl.
  3. Para cadastrar produtos, copie um objeto dentro da lista products e altere nome, categoria, preço, descrição e imagem.
*/
  const whatsappNumber ="5514996868135"; // Exemplo: "5511999999999" — preencha com o número da loja
const instagramUrl = "";   // Exemplo: "https://www.instagram.com/sualoja/"

const products = [
  {
    id: 1, name: "Colar Aurora", category: "colares", price: "R$ 89,90",
    description: "Um detalhe delicado para iluminar o visual.",
    tag: "MAIS QUERIDO",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2, name: "Brinco Serena", category: "brincos", price: "R$ 59,90",
    description: "Elegância leve para qualquer ocasião.",
    tag: "DELICADO",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3, name: "Anel Lumière", category: "aneis", price: "R$ 69,90",
    description: "Um brilho sutil que faz toda a diferença.",
    tag: "ELEGANTE",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4, name: "Pulseira Dourada", category: "pulseiras", price: "R$ 74,90",
    description: "Um toque de charme para acompanhar você.",
    tag: "NOVIDADE",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5, name: "Colar Essência", category: "colares", price: "R$ 99,90",
    description: "Uma peça versátil para usar do seu jeito.",
    tag: "",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 6, name: "Argolas Clássicas", category: "brincos", price: "R$ 49,90",
    description: "O clássico que combina com tudo.",
    tag: "",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 7, name: "Anel Dourado", category: "aneis", price: "R$ 64,90",
    description: "Minimalista, elegante e atemporal.",
    tag: "",
    image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 8, name: "Pulseira Elo Fino", category: "pulseiras", price: "R$ 79,90",
    description: "Delicadeza que mora nos detalhes.",
    tag: "",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 9, name: "Conjuntos", category: "conjuntos", price: "R$ 79,90",
    description: "Delicadeza que mora nos detalhes.",
    tag: "",
    image:"teste.jpeg"
  }

];

const categoryNames = {
  colares: "Colares", brincos: "Brincos", aneis: "Anéis", pulseiras: "Pulseiras", conjuntos: "Conjuntos"
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
  const filtered = category === "todos" ? products : products.filter(p => p.category === category);
  grid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ""}
      </div>
      <div class="product-info">
        <p class="product-category">${categoryNames[product.category] || product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-bottom">
          <span class="product-price">${product.price}</span>
          <a class="product-buy" href="${makeWhatsAppUrl(product)}" target="_blank" rel="noopener">Tenho interesse ↗</a>
        </div>
      </div>
    </article>
  `).join("");
}

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
