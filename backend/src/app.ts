import express, { Application } from 'express'
import morgan from 'morgan'
import cors from "cors"
import MaterialsRoutes from "./routes/materials.routes";
import ContainersRoutes from "./routes/containers.routes";
import IndexRoutes from "./routes/index.routes";
const path = require('path');

export class App {
    
    private app: Application

    constructor(private port?: number | string) {
        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
    }

    settings() {
        this.app.set('port', this.port || process.env.port || 4000)
    }

    middlewares() {
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(express.static(path.join(__dirname,"../dist/build/")))
        console.log(__dirname);
        this.app.use(express.static(path.join(__dirname,"../dist/build/static/")))
    }

    routes() {
        this.app.use('/', IndexRoutes)
        this.app.use('/materials', MaterialsRoutes)
        this.app.use('/containers', ContainersRoutes)
    }

    async listen() {
        await this.app.listen(this.app.get('port'))
        console.log('Server on port: ', this.app.get('port'))
    }
}
