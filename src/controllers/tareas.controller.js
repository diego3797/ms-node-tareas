import Task from "../models/Tareas"
import { getPaginacion } from "../libs/getPagination";

export const getTareas = async (req, res) => {
    try {
        const {size, page} = req.query
        const {limit, offset} = getPaginacion(page, size)

        //const tareas = await Task.find()
        const tareas = await Task.paginate({},{offset, limit})
        res.json(tareas)    
    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo salio mal la obtener Tareas"
        })
    }
    
}

export const registraTareas = async (req, res) => {

    if (!req.body.titulo) {
        return res.status(400).send({ message: "el titulo es requerido" })
    }

    try {
        const newTarea = new Task({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            terminada: req.body.terminada ? req.body.terminada : false
        });
        const tareaCreada = await newTarea.save();
        res.json(tareaCreada)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo salio mal en la creacion de Tarea"
        })
    }

}

export const buscarTareaXId = async (req, res) => {
    try {
        const { id } = req.params
        const tarea = await Task.findById(id)
        if (!tarea) return res.status(404).json({ message: `La tarea ${id} no existe en BD` })
        res.json(tarea)            
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error al devolver Tarea"
        })
    }
}

export const eliminaTarea = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.json({
            message: "Tarea eliminada"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error al Elimnar Tarea"
        })
    }
    
}

export const getTareasTerminadas = async (req, res) => {
    const tareas = await Task.find({ terminada: true })
    res.json(tareas)
}

export const actualizaTarea = async (req, res) => {
    const tareasAct = await Task.findByIdAndUpdate(req.params.id, req.body)
    res.json("Tarea actualizada")
}
