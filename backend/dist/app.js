"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const materials_routes_1 = __importDefault(require("./routes/materials.routes"));
const containers_routes_1 = __importDefault(require("./routes/containers.routes"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const path = require('path');
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set('port', this.port || process.env.port || 4000);
    }
    middlewares() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.static(path.join(__dirname, "../dist/build/")));
        console.log(__dirname);
        this.app.use(express_1.default.static(path.join(__dirname, "../dist/build/static/")));
    }
    routes() {
        this.app.use('/', index_routes_1.default);
        this.app.use('/materials', materials_routes_1.default);
        this.app.use('/containers', containers_routes_1.default);
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log('Server on port: ' + this.app.get('port') + "visita http://localhost:3080 para usar la app");
        });
    }
}
exports.App = App;
