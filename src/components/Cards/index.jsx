import Card from "./Card";
import estilos from "./Cards.module.css";

export default function Cards({ pratos }) {
    if (pratos.length === 0) {
        return <p className={estilos.vazio}>Nenhum prato encontrado para essa busca.</p>;
    }

    return (
        <div className={estilos.containerCards}>
            {pratos.map((prato) => (
                <Card key={prato.id} prato={prato} />
            ))}
        </div>
    );
}
