import styled from "styled-components";
import Botao from "./Botao";

const Sli = styled.li`
  margin-bottom: 10px;
  padding: 16px;
  border-radius: 8px;
  background: #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* Elemento de bloco informativo personalizado com CSS */
const SInfo = styled.div`
  p {
    font-size: 16px;
    margin-bottom: 2px;
  }

  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

/* Elemento de bloco de unidades personalizado com CSS */
const SUnidades = styled.div`
  width: 86px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 5px 10px;
    border: 1px solid #fffff;
    border-radius: 5px;
    cursor: pointer;
  }
`;

/**
 * Componente para listagem de produto no carrinho
 * @param {Object} produto Produto a ser listado
 */
function ItemCarrinho({ produto, onChange, isLoading }) {
  return (
    <Sli>
      <SInfo>
        <p>{produto.name}</p>
        <span>R$ {produto.price}</span>
      </SInfo>
      <SUnidades>
        <button disabled={isLoading} onClick={() => onChange(produto, -1)}>
          -
        </button>
        <p>{produto.units}</p>
        <button disabled={isLoading} onClick={() => onChange(produto, 1)}>
          +
        </button>
      </SUnidades>
    </Sli>
  );
}

/* Elemento de lista personalizada com CSS */
const SSecao = styled.section`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 50px;
  gap: 20px;
`;

/* Elemento de lista personalizada com CSS */
const SUl = styled.ul`
  list-style-type: none;
`;

/**
 * Componente para listagem de produtos no carrinho
 * @param {Object[]} produtos Produtos para listagem
 * @param {Function} onClick Função de finalização da compra
 * @param {Boolean} isLoading Staus de loanding
 */
function Carrinho({ produtos, onChange, onClick, isLoading = false }) {
  return (
    <SSecao>
      <SUl>
        {produtos.map((produto) => (
          <ItemCarrinho
            key={produto.id}
            produto={produto}
            onChange={onChange}
            isLoading={isLoading}
          />
        ))}
      </SUl>
      <Botao onClick={onClick} isLoading={isLoading}>
        Finalizar compra
      </Botao>
    </SSecao>
  );
}

export default Carrinho;
