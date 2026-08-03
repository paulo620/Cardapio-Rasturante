import estilos from "./CampoDeBusca.module.css";

export default function CampoDeBusca({ textoBusca, onBuscar }) {
    return (
        <div className={estilos.containerBusca}>
            <img src="/lupa.png" alt="Ícone de busca" />
            <input
                type="text"
                value={textoBusca}
                onChange={(evento) => onBuscar(evento.target.value)}
                placeholder="Pesquise aqui um dos pratos do nosso cardápio"
                aria-label="Campo de busca de pratos"
            />
        </div>
    );
}
