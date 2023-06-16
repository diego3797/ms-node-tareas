//const xpress = require("express") //version comun
import xpress from "express" //version con babel
import indexRoutes from "./routes/tareas.router"
import mrgan from "morgan" //para ver el detalle de cada endnpoint en consola
import cors from "cors"; //permite habilitar la consulta de los endpoints desd otros ms

const app = xpress()

//settings
app.set("port", process.env.PORT || 3000)

//middleware
app.use(xpress.json())
app.use(mrgan('dev'))
app.use(cors())

//rutas
app.get("/", (req, res) => {
    res.json({
        message: "bienvenido"
    })
})

app.use("/api/tareas", indexRoutes)

export default app;