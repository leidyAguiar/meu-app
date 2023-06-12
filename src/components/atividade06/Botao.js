import React from 'react'

export default function Botao({valor, funcao, className } ) {
    return (
        <button  className={`botao-generico ${className}`} onClick={() => funcao(valor)}>
            {valor}
        </button>
    )
}