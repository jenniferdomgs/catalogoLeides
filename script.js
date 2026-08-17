const produtos = [
    // --- FESTAS ---
    {
        id: 1,
        nome: "Topo de Bolo Simples",
        categoria: "Festas",
        descricao: "Papel Fotográfico. Só Impressão: R$ 8,00 cada folha (já recortado).",
        informacaoExtra: "Design + Impressão: R$ 12,00 (por folha).",
        imagem: "img/topodebolo_Kpop.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Topo%20de%20Bolo%20Simples."
    },
    {
        id: 2,
        nome: "Topo de Bolo 3D",
        categoria: "Festas",
        descricao: "Papel Fotográfico / Lamicote. Só Impressão: a partir de R$ 20,00.",
        informacaoExtra: "Design + Impressão: a partir de R$ 25,00.",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Topo%20de%20Bolo%203D."
    },
    {
        id: 3,
        nome: "Convites Simples P (7x10cm)",
        categoria: "Festas",
        descricao: "Papel Offset. Só Impressão: R$ 1,80 (a partir de 8 un).",
        informacaoExtra: "Design + Impressão: R$ 3,00 (por unidade).",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Convites%20Simples%20P."
    },
    {
        id: 4,
        nome: "Convites Simples M (10x14,8 cm)", 
        categoria: "Festas",
        descricao: "Papel Offset. Só Impressão: R$ 2,50 (a partir de 8 un).",
        informacaoExtra: "Design + Impressão: R$ 4,50 (por unidade).",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Convites%20Simples%20M."
    },
    {
        id: 5,
        nome: "Convites Premium P (7x10cm)",
        categoria: "Festas",
        descricao: "Papel Cartão. Só Impressão: R$ 2,00 (a partir de 8 un).",
        informacaoExtra: "Design + Impressão: R$ 4,00 (por unidade).",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Convites%20Premium%20P."
    },
    {
        id: 6,
        nome: "Convites Premium M (10x14,8 cm)",
        categoria: "Festas",
        descricao: "Papel Cartão. Só Impressão: R$ 3,50 (a partir de 8 un).",
        informacaoExtra: "Design + Impressão: R$ 6,00 (por unidade).",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Convites%20Premium%20M."
    },
    {
        id: 7,
        nome: "Polaroids (7x9cm)",
        categoria: "Festas",
        descricao: "Papel Fotográfico. Só Impressão: R$ 1,50 por unidade (a partir de 9 un).",
        informacaoExtra: "Design + Impressão: R$ 2,50 por unidade.",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Polaroids."
    },
    {
        id: 8,
        nome: "Cartela 9 Polaroids (7x9cm)",
        categoria: "Festas",
        descricao: "Papel Fotográfico. Só Impressão: R$ 13,50.",
        informacaoExtra: "Design + Impressão: R$ 22,50.",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Cartela%20Polaroids."
    },
    {
        id: 23,
        nome: "Convite Digital Simples",
        categoria: "Festas",
        descricao: "Arte digital (JPG/PNG) para envio via WhatsApp ou Redes Sociais.",
        informacaoExtra: "Valor Único: R$ 20,00.",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Convite%20Digital%20Simples."
    },
    {
        id: 24,
        nome: "Convite Digital Interativo",
        categoria: "Festas",
        descricao: "Arquivo PDF com botões clicáveis (Localização, Lista de Presentes, Confirmação).",
        informacaoExtra: "Valor Único: R$ 40,00.",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Convite%20Digital%20Interativo."
    },

    // --- KITS ---
    {
        id: 9,
        nome: "Kit Só um bolinho",
        categoria: "Kits",
        descricao: "1 Topo de Bolo Simples (2D), 3 Cartelas de Adesivos (4x4cm) e 20 Etiquetas/Tags para docinhos (4x4cm).",
        informacaoExtra: "Valor: R$ 90,00",
        imagem: "img/kit_SóUmBolinho.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Kit%20Só%20um%20bolinho."
    },
    {
        id: 10,
        nome: "Kit Festa Leides",
        categoria: "Kits",
        descricao: "1 Topo de Bolo 3D, Convite Digital Interativo, 5 Cartelas de Adesivos (4x4cm) e 20 Etiquetas/Tags (5x5cm).",
        informacaoExtra: "Valor: R$ 140,00",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Kit%20Festa%20Leides."
    },
    {
        id: 11,
        nome: "Kit Empreendedor Básico",
        categoria: "Kits",
        descricao: "50 cartões de visita, 50 recibos e 2 cartelas de adesivos.",
        informacaoExtra: "Só impressão: R$ 70,00  | Design + Impressão: R$ 95,00.",
        imagem: "img/kitEmpBasico.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Kit%20Básico."
    },
    {
        id: 12,
        nome: "Kit Empreendedor Leide",
        categoria: "Kits",
        descricao: "50 cartões agradecimento, 50 etiquetas e 3 cartelas de adesivos.",
        informacaoExtra: "Só impressão: R$ 85,00 | Design + Impressão: R$ 110,00.",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Kit%20Leide."
    },

    // --- GERAL ---
    {
        id: 13,
        nome: "Cartão de Visita (Fotográfico)",
        categoria: "Geral",
        descricao: "Papel Fotográfico (9x5cm). Só Impressão: R$ 25,00 (50 unidades).",
        informacaoExtra: "Design + Impressão: R$ 45,00.",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Cartão%20de%20Visita."
    },
    {
        id: 14,
        nome: "Cartão de Visita (Cartão)",
        categoria: "Geral",
        descricao: "Papel Cartão (9x5cm). Só Impressão: R$ 32,00 (50 unidades).",
        informacaoExtra: "Design + Impressão: R$ 50,00.",
        imagem: "img/cartaoVisita.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Cartão%20de%20Visita."
    },
    {
        id: 15,
        nome: "Cartão Agradecimento (10x10cm)",
        categoria: "Geral",
        descricao: "Papel Offset. Só Impressão: R$ 70,00 (50 unidades).",
        informacaoExtra: "Design + Impressão: R$ 110,00.",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Cartão%20Agradecimento."
    },
    {
        id: 16,
        nome: "Cartão Agradecimento (7x9cm)",
        categoria: "Geral",
        descricao: "Papel Offset. Só Impressão: R$ 50,00 (50 unidades).",
        informacaoExtra: "Design + Impressão: R$ 70,00.",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Cartão%20Agradecimento."
    },
    {
        id: 17,
        nome: "Cartão Agradecimento (9x10cm)",
        categoria: "Geral",
        descricao: "Papel Offset. Só Impressão: R$ 70,00 (50 unidades).",
        informacaoExtra: "Design + Impressão: R$ 95,00.",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Cartão%20Agradecimento."
    },
    {
        id: 18,
        nome: "Recibo (10x14cm)",
        categoria: "Geral",
        descricao: "Papel Normal (Sulfite). Só Impressão: R$ 55,00 (50 unidades).",
        informacaoExtra: "Design + Impressão: R$ 80,00.",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Recibo."
    },
    {
        id: 19,
        nome: "Recibo (15x21cm)",
        categoria: "Geral",
        descricao: "Papel Normal (Sulfite). Só Impressão: R$ 90,00 (50 unidades).",
        informacaoExtra: "Design + Impressão: R$ 120,00.",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Recibo."
    },
    {
        id: 20,
        nome: "Adesivos Recortados (Por Unidade)",
        categoria: "Geral",
        descricao: "Pedido Mínimo: 20 unidades. Tamanho à escolha (ex: 4x4cm ou 5x5cm).",
        informacaoExtra: "Só Impressão e Corte: R$ 0,45/unidade | Design + Impressão: R$ 0,65/unidade.",
        imagem: "img/mockupAdesivos.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20Adesivos%20por%20unidade."
    },
    {
        id: 21,
        nome: "Etiquetas Quadradas (5x5cm)",
        categoria: "Geral",
        descricao: "Papel Cartão. Só Impressão: R$ 6,50 por folha A4 (aprox. 20 un).",
        informacaoExtra: "Design + Impressão: R$ 12,00 por folha A4.",
        imagem: "img/perfilIG.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Etiquetas."
    },
    {
        id: 22,
        nome: "Etiquetas (5x7,5cm)",
        categoria: "Geral",
        descricao: "Papel Cartão. Só Impressão: R$ 6,50 por folha A4 (aprox. 12 un).",
        informacaoExtra: "Design + Impressão: R$ 12,00 por folha A4.",
        imagem: "img/MockupTags.png",
        linkBotao: "https://wa.me/5584999208623?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Etiquetas."
    }
];

const catalogContainer = document.getElementById('catalog');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderizarCatalogo(filtro = "Todos") {
    catalogContainer.innerHTML = '';

    const produtosFiltrados = produtos.filter(produto => {
        if (filtro === "Todos") return true;
        return produto.categoria === filtro;
    });

    // renderização dos cards
    produtosFiltrados.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="product-image">
            <div class="product-info">
                <h2 class="product-title">${produto.nome}</h2>
                <p class="product-desc">${produto.descricao}</p>
                <p class="product-info-extra">${produto.informacaoExtra}</p>
                <a href="${produto.linkBotao}" class="btn-action" target="_blank">
                    <i class="fa-brands fa-whatsapp"></i> Encomendar
                </a>
            </div>
        `;

        catalogContainer.appendChild(card);
    });
}

// BOTÕES DE FILTRO
if(filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // remove/adiciona classe active
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const filtro = e.target.getAttribute('data-filter');
            renderizarCatalogo(filtro);
        });
    });
}

// BOTÃO FLUTUANTE TEMPORÁRIO 
const avisoFlutuante = document.getElementById('aviso-flutuante');
const btnFecharAviso = document.getElementById('fechar-aviso');

if (btnFecharAviso && avisoFlutuante) {
    btnFecharAviso.addEventListener('click', () => {
        avisoFlutuante.style.display = 'none';
    });
}

renderizarCatalogo();