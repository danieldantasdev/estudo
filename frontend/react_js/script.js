// =================== Inline ====================

const divStyle = {
    color: 'green',
    backgroundImage: 'url(' + imgUrl + ')'
}

function HelloWorldComponent() {
    return <div style={divStyle}>Hello World!</div>
}

let App = () => {
    return <App style={{ marginTop: '10px' }} />
}

/* 
- Escrito em camelCase

Prós:
- Maneira mais rápida e direta
- Ajustes rápidos
- Testes de estilo

Contras:
- Difícil manutenabilidade
*/

// =================== Classes ====================

// ========== Escrever no CSS normalmente ==========
/* .div-style{
color:blue;
font-size:2rem;
} */

// ========== Importando no JS ==========
import './HelloWorldComponent.css'

function HelloWorldComponent() {
    return <div className="div-style">Hello World!</div>
}

/* 
Prós:
- Em JSX, define-se classes pelo atributo className
- Maneira mais prática e direta

Contras:
- Difícil manutenabilidade
- Pouca flexibilidade
- Conflitos com nomes
*/

// =================== CSS in JS ====================

/* npm install --save styled-component */

const DIVSTYLE = styled.div`
    color: blue;
    background: url('${(props) => props.imageUrl}');
`
function HelloWorld() {
    const URL = 'https://github.com/lobinhodev'
    return <DivStyle imageUrl={URL}>Hello World!</DivStyle>
}

/* 
Prós:
- Manutenção
- Facilidade para remover CSS
- Estilos dinâmicos
- Performance
- Injeção automática de prefixos vendor
*/
