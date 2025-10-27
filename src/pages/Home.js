
import { Link } from "react-router-dom";
import { useContext } from "react";
import Formulario from "../componentes/Formulario_padrao";
import { TaskContext } from "../context/TaskContext";


function Home(){

const contexto = useContext(TaskContext);




   return <>
          <div className="home">
          <h1 id="titulo-principal">To do List</h1>
          
          <div>
          <input type="text" value={contexto.tituloHome} className="input-home" placeholder="Digite um título e adicione" onChange={evento => contexto.setTituloHome(evento.target.value)}></input>
          <Link to="/add-task" className="btn-add"><img src="/icons/add_circle_preto.svg"></img><span> Adicionar <br></br>tarefa</span></Link>
          </div>
          <h2>Sua lista de tarefas:</h2>
          {contexto.tasks.length === 0 && <img src="/icons/lista-vazia-add.svg" className="img-lista-vazia"></img>}
          {contexto.tasks.length > 0 && <button onClick={contexto.limparTudo} className="btn-limpar">Limpar</button>}
          <ul>
            {contexto.tasks.length > 0 && contexto.tasks.map(item => {
              return (
              <li key={item.id} className="afazer">
                  <h3 className="titulo-da-tarefa">{item.titulo}</h3>
                  <Link to={`edita-task/${item.id}`} className="btn-editar"><img src="/icons/edit-square.svg" alt="icone editar" title="Editar"></img></Link>
                  <button className="btn-delete" onClick={()=> contexto.removerTask(item.id)}><img src="/icons/icone-lixeira.svg" alt="icone deletar" title="Deletar"></img></button>
                  <p className="descricao">{item.descricao}</p>
                  <Link to={`visualizar-task/${item.id}`} className="btn-visualizar"><img src="/icons/visibility.svg" alt="botao visualizar" title="visualizar"></img></Link>
                 </li>
                 )
            })}
          </ul>
          
          </div>
   </>
}


export default Home;