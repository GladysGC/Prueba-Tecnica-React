import { useState } from "react";

//esto es un componente
const FormTodo = (props) => {
    const [description, setDescription] = useState("");//agregaria un useState, con su descripción
    const { handleAddItem } = props;//añade el item a la lista
    const handleSubmit = e => { //este es el manejador del submit, cuando pulsemos el botón pasará lo que hay dentro del manejador
        e.preventDefault();//evita que la página se actualice al pulsar el botón submit
        handleAddItem({
            done: false, //por defecto tiene valor false y cuando se true,se marca como realizada
            id: (+new Date()).toString(),//marca unica temporal del item.
            description //la tarea que escribimos 
        });
        setDescription("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-input">

                <h1>Mis tareas</h1>
                <div className="file-input">
                    <input type="text"
                        className="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)} />
                    <button className="btn-task" disabled={description ? "" : "disable"}>+</button>

                    <a href="https://github.com/GladysGC/" target="_blank"><img src="/icons8-github-64.png" alt="Icono de Github" title="github.com/FF5-DW1/ej3_ravenclaw" /></a>
                </div>
            </div>
        </form>
    );
};

export default FormTodo;