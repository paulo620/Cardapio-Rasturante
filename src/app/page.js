
"use client";

import { useState } from "react";
import CampoDeBusca from "@/components/CampoDeBusca";
import Cards from "@/components/Cards";
import Categorias from "@/components/Categorias";
import {
  buscarProduto,
  categorias,
  filtrarProdutos,
} from "@/servicos/retornoProdutos";
import estilos from "./page.module.css";

const CATEGORIA_INICIAL = "Entradas";

export default function Home() {
  const [categoriaAtiva, setCategoriaAtiva] = useState(CATEGORIA_INICIAL);
  const [textoBusca, setTextoBusca] = useState("");
  const [pratosExibidos, setPratosExibidos] = useState(
    filtrarProdutos(CATEGORIA_INICIAL)
  );
  const urlCardapio = "https://cardapio-restaurante-chi.vercel.app/";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(
    urlCardapio
  )}`;

  function selecionarCategoria(categoria) {
    setCategoriaAtiva(categoria);
    setTextoBusca("");
    setPratosExibidos(filtrarProdutos(categoria));
  }

  function filtrarPorBusca(textoDigitado) {
    setTextoBusca(textoDigitado);
    const termoDigitado = textoDigitado.trim();

    if (termoDigitado.length >= 3) {
      setPratosExibidos(buscarProduto(termoDigitado));
    }
  }

  return (
    <div className={estilos.page}>
      <header className={estilos.header}>
        <div className={estilos.headerContainer}>
          <img src="/banner.png" alt="Banner Restaurante" />

          <div className={estilos.headerTexto}>
            <h1>RESTAURANT</h1>
            <p>
              De pratos clássicos a criações surpreendentes, nosso cardápio é
              um requinte de sabores refinados.
            </p>
          </div>
        </div>
      </header>

      <main className={estilos.main}>
        <Categorias
          categorias={categorias}
          categoriaAtiva={categoriaAtiva}
          onSelecionarCategoria={selecionarCategoria}
        />

        <CampoDeBusca textoBusca={textoBusca} onBuscar={filtrarPorBusca} />

        <section className={estilos.secaoCardapio}>
          <h2>Cardápio</h2>
          <Cards pratos={pratosExibidos} />
        </section>
      </main>
    </div>
  );
}
