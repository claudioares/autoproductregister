import './style.css'


export default function Login () {
    return(
        <div className="container_index">
        <h1>Sistema de registro de produtos</h1>
        <h3>Faça seu login para acessar</h3>

        <div className="container_form">
            <div className="input _email">
                <input type="email" id="email" placeholder="Email" />
            </div>
            <div class="input _password">
                <input type="password" id="password" placeholder="Senha" />
            </div>

            <a  
                class="button_index" href="#"
            >Entrar</a>
        </div>

    </div>
    )
}