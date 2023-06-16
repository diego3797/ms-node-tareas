import { Schema, model } from "mongoose"
import paginate from "mongoose-paginate-v2";

const tareasEsquema = new Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        trime: true
    },
    terminada: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
})

tareasEsquema.plugin(paginate)
export default model("Tareas", tareasEsquema)

