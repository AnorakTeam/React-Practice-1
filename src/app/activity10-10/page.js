"use client";

import { useState } from "react";


function Task({index, classes, task}){
  const [clicked, setClicked] = useState(false)
  const [customClasses, setCustomClasses] = useState(classes)

  const clickHandler = () => {

    // RETO 4 DONE
    if(clicked){
      // No me quedó tan claro si con "desaparecer" se refiere a directamente
      // ser ocultada en pantalla. De todas formas, 
      // aquí dejo la versión con la clase hidden de tailwind.
      // Ahora, creo que sería mejor si se "eliminaran" directamente del state,
      // pero tocaría reformular lo que llevo de componente Task, creo que para
      // el punto del ejercicio es mejor sólo agregar el css de que se oculte.
      setCustomClasses(customClasses + " hidden")

      // Ahora, suponiendo que es eliminarse directamente del state, entonces
      // imaginando que se pasa el array + el callable para set dentro de los props de Task,
      // la versión de eliminarlos directamente sería algo como esto:
      // if(index+1 === tasks.length){
      //     tasks.pop()
      //     setTasks([...tasks]) 
      // } else {
      //     setTasks(
      //         tasks.slice(0, index).concat( tasks.slice(index+1, tasks.length) )
      //     )
      // }
      return
    }
    // RETO 3 DONE
    setCustomClasses(customClasses + " line-through")
    setClicked(true)
  }

  return(
    <div 
      key={index} 
      className={customClasses} 
      onClick={clickHandler}
      >
      {task}
    </div>
  )
}


export default function Home() {
  const [tasks, setTasks] = useState(["Tarea 1", "Tarea 2"]);
  const [currentTask, setCurrentTask] = useState("");
  const [reverseOrder, setReverseOrder] = useState(true);

  const addButtonHandler = () => {
    // RETO 1 DONE
    if(currentTask.trim() === ""){
      alert("Ingresa un valor en el campo que no sea vacío o espacios.")
      return
    } 

    // RETO 2 DONE
    if(tasks.includes(currentTask)){
      alert("La tarea ingresada ya existe.")
      return
    }

    setTasks([...tasks, currentTask]);
    setCurrentTask("");
  };

  // RETO 5 DONE
  // RETO 7 DONE
  const sortButtonHandler = () => {
    tasks.sort()
    
    if(reverseOrder)
        tasks.reverse()
    
    setTasks([...tasks])
    setReverseOrder(!reverseOrder)
  }

  // RETO 6 DONE
  const deleteButtonHandler = () => {
    setTasks([])
  }

  // DONE Reto 1: Hacer que no se pueda agregar una tarea vacía 
  // DONE Reto 2: Hacer que no se pueda agregar una tarea repetida
  // DONE Reto 3: Hacer que al dar click en una tarea, aparezca tachada (clase tailwind "line-through")
  // DONE Reto 4: Hacer que al dar click en una tarea tachada, desaparezca la tarea
  // DONE Reto 5: Poner un botón que organice las tareas alfabéticamente
  // DONE Reto 6: Poner un botón que elimine todas las tareas
  // DONE Reto 7: Hacer que las tareas se ordenen en orden inverso al volver a presionar el botón de organizar

  return (
    <section className="bg-red-100 p-4 max-w-2xl mx-auto my-10">
      <div className="my-2 flex gap-2">
        <input
          className="bg-gray-100 border border-red-400 rounded-lg p-2"
          type="text"
          value={currentTask}
          onChange={(e) => {
            setCurrentTask(e.target.value);
          }}
        />
        <button
          className="bg-cyan-500 text-white rounded-lg px-4 py-2"
          onClick={addButtonHandler}
        >
          Agregar
        </button>
        <button 
        className="bg-green-500 text-white rounded-lg px-4 py-2"
        onClick={sortButtonHandler}
        >
          Ordenar
        </button>
        <button 
        className="bg-red-500 text-white rounded-lg px-4 py-2"
        onClick={deleteButtonHandler}
        >
          Eliminar
        </button>
      </div>
      <div className="flex flex-col gap-2">

        {tasks.map((task, index) => (
          <Task
          index={index}
          task={task}
          classes={"bg-red-200 rounded-lg px-2 py-1"}
          key={task}
          />
        ))}

      </div>
    </section>
  );
}