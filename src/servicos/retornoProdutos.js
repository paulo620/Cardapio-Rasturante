const produtos = [
    {
        id: 1,
        nome: "Bruschetta",
        categoria: "Entradas",
        descricao:
            "Pão artesanal crocante com tomate, alho, manjericão e fio de azeite extravirgem.",
        preco: 19.2,
        imagem: "/bruschetta.jpg",
    },
    {
        id: 2,
        nome: "Carpaccio",
        categoria: "Entradas",
        descricao:
            "Finas lâminas de carne com rúcula, alcaparras, parmesão e molho de mostarda.",
        preco: 32,
        imagem: "/carpaccio.jpg",
    },
    {
        id: 3,
        nome: "Paella",
        categoria: "Entradas",
        descricao:
            "Arroz espanhol com frutos do mar, camarão, mexilhão, lula e legumes salteados.",
        preco: 65,
        imagem: "/paella.jpg",
    },
    {
        id: 4,
        nome: "Ebi Spicy",
        categoria: "Entradas",
        descricao:
            "Camarões empanados em massa tempura com maionese picante e toque cítrico.",
        preco: 62,
        imagem: "/ebi-spicy.jpg",
    },
    {
        id: 5,
        nome: "Aligot",
        categoria: "Entradas",
        descricao:
            "Purê rústico de batatas francesas com queijo cremoso e textura aveludada.",
        preco: 18.99,
        imagem: "/aligot.jpg",
    },
    {
        id: 6,
        nome: "Lasanha",
        categoria: "Massas",
        descricao:
            "Lasanha tradicional com molho da casa, queijo gratinado e ervas frescas.",
        preco: 47.9,
        imagem: "/lasanha.jpg",
    },
    {
        id: 7,
        nome: "Espaguete",
        categoria: "Massas",
        descricao:
            "Espaguete al dente com molho pomodoro artesanal e parmesão ralado.",
        preco: 39.9,
        imagem: "/espaguete.jpg",
    },
    {
        id: 8,
        nome: "Ravioli",
        categoria: "Massas",
        descricao:
            "Ravioli recheado com ricota e espinafre ao molho de manteiga e sálvia.",
        preco: 45,
        imagem: "/ravioli.jpg",
    },
    {
        id: 9,
        nome: "Nhoque",
        categoria: "Massas",
        descricao:
            "Nhoque de batata servido com ragu de carne cozido lentamente.",
        preco: 43.9,
        imagem: "/nhoque.jpg",
    },
    {
        id: 10,
        nome: "Capeletti",
        categoria: "Massas",
        descricao:
            "Capeletti recheado em caldo leve aromatizado com legumes e ervas.",
        preco: 41.5,
        imagem: "/capeletti.jpg",
    },
    {
        id: 11,
        nome: "Picanha",
        categoria: "Carnes",
        descricao:
            "Corte nobre grelhado no ponto certo, acompanhado de farofa especial.",
        preco: 72,
        imagem: "/picanha.png",
    },
    {
        id: 12,
        nome: "Bife Ancho",
        categoria: "Carnes",
        descricao:
            "Bife ancho suculento com manteiga de ervas e batatas assadas.",
        preco: 79,
        imagem: "/bife-ancho.jpg",
    },
    {
        id: 13,
        nome: "Prime Rib",
        categoria: "Carnes",
        descricao:
            "Prime rib assado com crosta de especiarias e legumes grelhados.",
        preco: 95,
        imagem: "/prime-rib.jpg",
    },
    {
        id: 14,
        nome: "File Mignon",
        categoria: "Carnes",
        descricao:
            "Medalhão de filé mignon ao molho roti com purê de batata amanteigado.",
        preco: 86,
        imagem: "/file-mignon.jpg",
    },
    {
        id: 15,
        nome: "Tomahawk Steak",
        categoria: "Carnes",
        descricao:
            "Tomahawk steak grelhado com sal de parrilla e manteiga de alho.",
        preco: 130,
        imagem: "/tomahawk-steak.jpg",
    },
    {
        id: 16,
        nome: "Agua",
        categoria: "Bebidas",
        descricao: "Agua mineral com ou sem gas servida gelada.",
        preco: 7,
        imagem: "/agua.jpg",
    },
    {
        id: 17,
        nome: "Suco",
        categoria: "Bebidas",
        descricao: "Suco natural de frutas da estação preparado na hora.",
        preco: 12,
        imagem: "/suco.jpg",
    },
    {
        id: 18,
        nome: "Refrigerante",
        categoria: "Bebidas",
        descricao: "Refrigerante em lata nas versões tradicional e zero açúcar.",
        preco: 9,
        imagem: "/refrigerante.jpg",
    },
    {
        id: 19,
        nome: "Cerveja",
        categoria: "Bebidas",
        descricao: "Cerveja premium long neck com temperatura ideal.",
        preco: 15,
        imagem: "/cerveja.jpg",
    },
    {
        id: 20,
        nome: "Whiskey",
        categoria: "Bebidas",
        descricao: "Dose de whiskey selecionado com aroma amadeirado.",
        preco: 29,
        imagem: "/whiskey.jpg",
    },
    {
        id: 21,
        nome: "Salada Caprese",
        categoria: "Saladas",
        descricao:
            "Tomate, muçarela de búfala e manjericão com redução de balsâmico.",
        preco: 28,
        imagem: "/salada-caprese.jpg",
    },
    {
        id: 22,
        nome: "Salada Ceasar",
        categoria: "Saladas",
        descricao: "Alface romana, croutons, parmesão e molho ceasar da casa.",
        preco: 31,
        imagem: "/salada-ceasar.jpg",
    },
    {
        id: 23,
        nome: "Salada Grega",
        categoria: "Saladas",
        descricao: "Mix de folhas, pepino, tomate, azeitonas e queijo feta.",
        preco: 29,
        imagem: "/salada-grega.jpg",
    },
    {
        id: 24,
        nome: "Salada Nicoise",
        categoria: "Saladas",
        descricao:
            "Folhas verdes, atum, batata, vagem e ovo com vinagrete suave.",
        preco: 34,
        imagem: "/salada-nicoise.jpg",
    },
    {
        id: 25,
        nome: "Salada Waldorf",
        categoria: "Saladas",
        descricao: "Maçã verde, nozes, salsão e molho cremoso leve.",
        preco: 30,
        imagem: "/salada-waldorf.jpg",
    },
    {
        id: 26,
        nome: "Pudim",
        categoria: "Sobremesas",
        descricao: "Pudim de leite condensado com calda de caramelo artesanal.",
        preco: 16,
        imagem: "/pudim.jpg",
    },
    {
        id: 27,
        nome: "Cheesecake",
        categoria: "Sobremesas",
        descricao: "Cheesecake cremoso com cobertura de frutas vermelhas.",
        preco: 21,
        imagem: "/cheesecake.jpg",
    },
    {
        id: 28,
        nome: "Tiramisu",
        categoria: "Sobremesas",
        descricao: "Clássico italiano com café, mascarpone e cacau em pó.",
        preco: 24,
        imagem: "/tiramisu.jpg",
    },
    {
        id: 29,
        nome: "Mil Folhas",
        categoria: "Sobremesas",
        descricao: "Massa folhada crocante com creme de baunilha e açúcar fino.",
        preco: 22,
        imagem: "/mil-folhas.jpg",
    },
    {
        id: 30,
        nome: "Banoffee",
        categoria: "Sobremesas",
        descricao: "Torta de banana com doce de leite e chantilly leve.",
        preco: 20,
        imagem: "/banoffee.png",
    },
];

export const categorias = [
    { id: "Entradas", label: "Entradas", icone: "/entrada.png" },
    { id: "Massas", label: "Massas", icone: "/massa.png" },
    { id: "Carnes", label: "Carnes", icone: "/carne.png" },
    { id: "Bebidas", label: "Bebidas", icone: "/bebidas.png" },
    { id: "Saladas", label: "Saladas", icone: "/salada.png" },
    { id: "Sobremesas", label: "Sobremesas", icone: "/sobremesa.png" },
];

export function filtrarProdutos(categoria) {
    return produtos.filter((produto) => produto.categoria === categoria);
}

function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .replace(/\s+/g, " ");
}

export function buscarProduto(textoDigitado) {
    const termo = normalizarTexto(textoDigitado);

    return produtos.filter((produto) => {
        const nomeNormalizado = normalizarTexto(produto.nome);
        const categoriaNormalizada = normalizarTexto(produto.categoria);
        const iniciais = nomeNormalizado
            .split(" ")
            .map((palavra) => palavra[0])
            .join("");

        return (
            nomeNormalizado.startsWith(termo) ||
            nomeNormalizado.includes(termo) ||
            categoriaNormalizada.startsWith(termo) ||
            categoriaNormalizada.includes(termo) ||
            iniciais.startsWith(termo)
        );
    });
}
