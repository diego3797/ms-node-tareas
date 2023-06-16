import moondb from 'mongoose'
import config from "./config"

(async () => {
    try {
        const db = await moondb.connect(config.mongodbURL)
        console.log('Base de datos conectada: ', db.connection.name);    
    } catch (error) {
        console.error(error)
    }
    
})();