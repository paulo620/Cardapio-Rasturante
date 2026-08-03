import estilos from "./Card.module.css";

function formatarPreco(preco) {
    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}

export default function Card({ prato }) {
    return (
        <article className={estilos.cardPrato}>
            <figure>
                <img src={prato.imagem} alt={prato.nome} />
            </figure>

            <div className={estilos.cardConteudo}>
                <div className={estilos.cardInfo}>
                    <h3>{prato.nome}</h3>
                    <small>{prato.categoria}</small>
                    <p>{prato.descricao}</p>
                </div>

                <div className={estilos.cardPreco}>
                    <span>{formatarPreco(prato.preco)}</span>
                </div>
            </div>
        </article>
    );
}
