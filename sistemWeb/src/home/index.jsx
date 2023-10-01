import Table from '../components';
import './style.css'

function Home() {

  return (
    <>
      <form className="container_main">
        <h1>Formulário de cadastro de produtos</h1>
        <div className="container_form">
            <div className="input_main">
                <label for="cod">Código do produto</label>
                <input type="text" id="cod" />
            </div>
    
            <div className="input_main">
                <label for="brand">Marca do produto</label>
                <input type="text" id="brand" />
            </div>
    
            <div className="input_main">
                <label for="type">Tipo do produto</label>
                <input type="text" id="type" />
            </div>
    
            <div className="input_main">
                <label for="category">Categoria do produto</label>
                <input type="text" id="category" />
            </div>
    
            <div className="input_main">
                <label for="unit_price">Preço unitário do produto</label>
                <input type="text" id="unit_price" />
            </div>
    
            <div className="input_main">
                <label for="price">Custo do produto</label>
                <input type="text" id="price" />
            </div>
    
            <div className="input_main">
                <label for="obs">OBS</label>
                <input type="text" id="obs" />
            </div>
    
            <div className="container_buttons">
                <button id="send">Enviar</button>
                <button id="erase">Limpar</button>
            </div>
        </div>
      </form>

      <Table />
    </>
  )
}

export default Home;
