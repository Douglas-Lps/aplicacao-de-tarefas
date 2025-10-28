
import { useContext, useState, useEffect } from "react";  
import { TaskContext } from "../context/TaskContext";
import iconeVoltar from "../icons/arrow-back.svg";

import { Link} from "react-router-dom";

export default function Formulario(props){

    const contexto = useContext(TaskContext)
    
    const [tarefa, setTarefa] = useState({ 
        titulo: contexto.tituloHome || "",
        descricao: ""
    });
   
 
useEffect(() => {
        if (props.tarefaAlvo) {
            setTarefa({
                titulo: props.tarefaAlvo.titulo || "",
                descricao: props.tarefaAlvo.descricao || ""
            });
        } else if (contexto.tituloHome) {
            setTarefa(prev => ({
                ...prev,
                titulo: contexto.tituloHome
            }));
        }
    }, [props.tarefaAlvo, contexto.tituloHome]);

 

function manipularMudancaInput(event){
      
    if (props.textoBotao) {
    const {name, value} = event.target;

    
    setTarefa(tarefaAnterior => ({ 
      ...tarefaAnterior, [name]: value
    }))

    }
}  

function manipularSubmit(event) {
event.preventDefault();


if (!tarefa.titulo.trim()) {
            console.error("O título da tarefa é obrigatório!"); 
            return;
        }

const tarefaComId = {
       id: props.tarefaAlvo?.id || Date.now(),
       titulo: tarefa.titulo.trim(),
       descricao: tarefa.descricao.trim()
}        

if (props.tarefaAlvo) {
        contexto.editarTask(tarefaComId); 
    } else {
        contexto.adicionarTask(tarefaComId);  
    }

if (!props.tarefaAlvo) {
    setTarefa({ titulo: "", descricao: "" }); 
}

}

return <>
<div className="container-principal">
 <h1 >{props.tituloFormulario}</h1>
 <form onSubmit={manipularSubmit} className="formulario">
    <label className="lb-titulo">Título: </label>
    <input className="titulo-ph" type="texto" name="titulo" value={tarefa.titulo} placeholder="Digite um titulo para a tarefa" onChange={manipularMudancaInput}></input>  
    <label className="lb-descricao">Descrição: </label>
    <textarea       className="descricao-ph"
                    name="descricao" 
                    value={tarefa.descricao} 
                    placeholder="Descrição da tarefa"  
                    style={{height: "180px"}}
                    onChange={manipularMudancaInput}
                ></textarea>
<div className="botoes"> 
<Link to="/" className="btn-voltar"> <img src={iconeVoltar}></img><span>Voltar</span></Link>
{ props.textoBotao && <button className="btn-dinamico" type="submit">{props.textoBotao}</button>}
</div>   
 </form>
 
</div>
</>


}