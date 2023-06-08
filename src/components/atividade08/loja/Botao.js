import styled from "styled-components";

/* Elemento de botão personalizado com CSS */
const SBotao = styled.button`
  cursor: pointer;
  padding: 18px 8px;
  width: 100%;
  color: #fff;
  background-color: #000;
  font-size: 18px;
  border: 0;
  border-radius: 8px;
`;

/** 
 * Componente de botão
* @param {HTMLCollection} children Elementos internos do componente
* @param {Function} onClick Função a ser executada ao clicar no botão
* @param {Boolean} isLoading Indica se o botão está carregando
*/

function Botao({ children, onClick, isLoading = false }) {
  return (
    <SBotao onClick={onClick} disabled={isLoading}>
      {isLoading ? "Carregando..." : children}
    </SBotao>
  );
}

export default Botao;
