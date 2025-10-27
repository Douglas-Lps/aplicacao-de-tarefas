import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {

    const [tasks, setTasks] = useState(() => {

        const storedTasks = localStorage.getItem('tasks');
      
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
     
    const [tituloHome, setTituloHome] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
    
        localStorage.setItem('tasks', JSON.stringify(tasks))
        
    }, [tasks])

    function adicionarTask(task){
          
          setTasks([...tasks, task])
          setTituloHome("");
          navigate("/");

    }
    
    function limparTudo() {
      const confirmado = window.confirm("Deseja apagar todas as mensagens?");
      
      if (confirmado) {
           setTasks([]);
      }
         
    }

    function removerTask(taskId) {
     
      setTasks(tasks.filter( task =>task.id !== taskId))  

    }

    function editarTask(taskAtualizada){

      setTasks(tasks.map(task => {
        return task.id === taskAtualizada.id ? taskAtualizada: task
      }))
      
     navigate("/");
     
    }

    return (
    <TaskContext.Provider value={{ tasks, adicionarTask, removerTask, editarTask, tituloHome, setTituloHome, limparTudo }}>
      {children}
    </TaskContext.Provider>
  );



}


