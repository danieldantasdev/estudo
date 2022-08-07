# Desenvolvimento de aplicações para internet com ReactJS

## Aula 1 - Trabalhando com estilos em elementos e componentes

### CSS Components e elementos

-   Inline
-   Classes
-   CSS in JS

[Acessar o script.js](./script.js)

### Stateful e Stateless

-   Stateful usa estados
-   Stateless não usa estados

#### Stateful

-   Possui gerenciamento de estados no componente
-   Construídos usando classes em JS
-   Ciclo de vida (Inicialização -> Montagem -> Atualização -> Desmontagem )

#### Stateless

-   Não possui gerenciamento de estados no componente
-   Construídos usando funções no JS

### Formulário

-   Em HTML, ficaria:
<form>
    <label>
    Nome:
        <input type="text" name="Nome"/>
    </label>
        <input type="submit" name="Enviar"/>
</form>

**Input, textarea, select possuem um estado interno**

-   Em React, podemos controlar estado com:
    `state`
    `setState`

#### Componente controlado com React

-   Em React, tanto select, input ou textarea aceitam o atributo value e podemos mudar esse valor com o atributo `onChange`

#### Componente não controlado com React

-   A tag input é read-only

#### Bibliotecas

-   Formik (manipulação de forms mais robustos)
-   Redux-forms
