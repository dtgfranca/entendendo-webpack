import React from 'react'
import ReactDom from 'react-dom'

const meuNome = "Diego"

ReactDom.render(
    <div> Nome: {meuNome}</div>,
    document.querySelector("#app")
)

console.log("funcionou tudo junto")