import estilos from "./Categorias.module.css";

export default function Categorias({ categorias, categoriaAtiva, onSelecionarCategoria }) {
    return (
        <section className={estilos.secaoCategorias}>
            {categorias.map((categoria) => {
                const ativo = categoria.id === categoriaAtiva;

                return (
                    <button
                        key={categoria.id}
                        type="button"
                        className={`${estilos.botaoCategoria} ${ativo ? estilos.botaoAtivo : ""}`}
                        onClick={() => onSelecionarCategoria(categoria.id)}
                    >
                        <img src={categoria.icone} alt={categoria.label} />
                        <span>{categoria.label}</span>
                    </button>
                );
            })}
        </section>
    );
}
