import logo from './logo.svg'
import './App.css'
import TodoListStatefull from './components/TodoListStatefull'
import TodoListStateless from './components/TodoListStateless'
import TodoListFunctional from './components/TodoListFunctional'
import NameForm from './aula-1/parte-3/components/NameForm'
import SorveteForm from './aula-1/parte-3/components/SorveteForm'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <TodoListStatefull></TodoListStatefull>
                <TodoListFunctional></TodoListFunctional>
                {/* <TodoListStateless></TodoListStateless> */}
                <NameForm></NameForm>
                <SorveteForm></SorveteForm>
            </header>
        </div>
    )
}

export default App
