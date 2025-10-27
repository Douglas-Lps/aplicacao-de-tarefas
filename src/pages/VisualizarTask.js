import Formulario from "../componentes/Formulario_padrao";
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function VisualizarTask() {
 
    const contexto = useContext(TaskContext);

    const { id } = useParams();

    const targetTask = contexto.tasks.find(t => t.id == id);

return <>
        <Formulario tarefaAlvo={targetTask}  tituloFormulario="Sua Tarefa" />
        
    </> 


}