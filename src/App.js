
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import { TaskProvider } from './context/TaskContext';
import './App.css';
import "./Formulario.css"
import EditarTask from './pages/EditarTask';
import VisualizarTask from './pages/VisualizarTask';



function App() {
  return (<BrowserRouter basename="/aplicacao-de-tarefas">
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/edita-task/:id" element={<EditarTask />} />
          <Route path="/visualizar-task/:id" element={<VisualizarTask />} />
        </Routes>
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;
