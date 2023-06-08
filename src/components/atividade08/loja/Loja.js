import { useEffect, useState } from "react";
import styled from "styled-components";
import Carrinho from "./Carrinho";
import Produtos from "./Produtos";

/**
 * Função para chamar a API
 * @param {string} url caminho da função
 * @param {string} method método da função
 * @returns objeto de resposta da API
 */
async function api(url, method, body = undefined) {
  return await fetch(`http://localhost:4000/${url}`, {
    body: body !== undefined ? JSON.stringify(body) : body,
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}
/**
 * Busca todos os produtos da API
 * @returns lista de produtos
 */
async function apiGetProdutos() {
  const data = await api("products", "GET");
  return data.products;
}

/**
 * Salva o carrinho de compras na API
 * @param {Object[]} produtos Lista de produtos do carrinho
 */
async function apiSalvarCarrinho(products) {
  await api("purchases", "POST", { products });
}

function Loja() {
  const [produtosLoading, setProdutosLoading] = useState(false); // Estado para controle de carregamento dos produtos
  const [produtos, setProdutos] = useState([]); // Estado para armazenar os produtos
  const [carrinho, setCarrinho] = useState([]); // Estado para armazenar os produtos do carrinho
  const [carrinhoLoading, setCarrinhoLoading] = useState(false); // Estado para controle de carregamento dos produtos do carrinho

  /**
   * Busca os produtos da API
   */
  async function getProdutos() {
    setProdutosLoading(true); // Ativa o carregamento
    setProdutos(await apiGetProdutos()); // Atualiza o estado
    setProdutosLoading(false); // Desativa o carregamento
  }

  /**
   * Salva o carrinho de compras na API
   */
  async function salvarCarrinho() {
    setCarrinhoLoading(true); // Ativa o carregamento
    await apiSalvarCarrinho(carrinho); // Salva o carrinho na API
    setCarrinho([]); // Limpa o carrinho
    setCarrinhoLoading(false); // Desativa o carregamento

    getProdutos(); // Busca os produtos novamente
  }
  /**
   * Altera unidades do produto
   */
  function setProduto(produto, change) {
    const produtos = carrinho.filter(({ id }) => {
      return id !== produto.id;
    });

    produto.units += change;
    if (produto.units > 0) {
      setCarrinho(() => [...produtos, produto]);
    } else {
      setCarrinho(() => [...produtos]);
      setProdutos((LastProdutos) => [...LastProdutos, produto]);
    }
  }

  /**
   * Adiciona um produto ao carrinho
   */
  function addProduto(produto) {
    produto.units = 1;
    setCarrinho(() => [...carrinho, produto]);

    setProdutos(() =>
      produtos.filter(({ id }) => {
        return id !== produto.id;
      })
    );
  }

  useEffect(() => {
    getProdutos(); // Busca os produtos
  }, []);


  /* Elemento main personalizado com CSS */
  const SMain = styled.main`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
  `;

  return (
    <SMain>
      <Carrinho 
        produtos={carrinho}
        onChange={setProduto}
        onClick={salvarCarrinho}
        isLoading={carrinhoLoading}
      />
      <Produtos
        produtos={produtos}
        onClick={addProduto}
        isLoading={produtosLoading}
      />
    </SMain>
  );
}

export default Loja;
