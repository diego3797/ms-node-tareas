import {Router} from "express"
import * as TaskController from "../controllers/tareas.controller";

const router = Router()

router.get("/", TaskController.getTareas)

router.post("/", TaskController.registraTareas);

router.get("/terminados", TaskController.getTareasTerminadas);

router.get("/:id", TaskController.buscarTareaXId);

router.delete("/:id", TaskController.eliminaTarea);

router.put("/:id", TaskController.actualizaTarea);


export default router; 