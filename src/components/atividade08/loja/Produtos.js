import styled from "styled-components";

/* Elemento de bloco personalizado com CSS */
const SDiv = styled.div`
  height: 260px;
  padding: 10px;
  border-radius: 10px;
  background: #f2f2f2;
  cursor: pointer;

  img {
    width: 100%;
    height: 140px;
    border-radius: 5px;
  }
`;

/* Elemento de bloco de informação personalizado com CSS */
const SDivInfo = styled.div`
  padding: 15px;

  p {
    font-size: 15px;
  }

  span {
    font-size: 20px;
    font-weight: bold;
  }
`;
/**
 * Componente para listagem de produto
 * @param {Object} produto Produto a ser listado
 * @param {Function} onClick Função a ser executada ao clicar no produto
 */
function Produto({ produto, onClick }) {
  return (
    <SDiv onClick={onClick}>
      <img src={produto.image} alt={produto.name} />
      <SDivInfo>
        <p>{produto.name}</p>
        <span>R$ {produto.price}</span>
      </SDivInfo>
    </SDiv>
  );
}

/* Elemento de seção personalizado com CSS */
const SSection = styled.section`
  overflow: auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 230px;
  gap: 20px;
`;

/**
 * Componente para listagem de produtos
 * @param {Object[]} produtos Lista de produtos a serem listados
 * @param {Function} onClick Função a ser executada ao clicar no produto
 */
function Produtos({ produtos, onClick, isLoading = false }) {
  return (
    <SSection>
      {isLoading
        ? "Carregando..."
        : produtos.length > 0 // Verifica se existem produtos
        ? produtos.map((produto) => (
            <Produto
              key={produto.id}
              produto={produto}
              onClick={() => onClick(produto)}
            />
          ))
        : "Nenhum produto encontrado!"}
    </SSection>
  );
}

export default Produtos;
