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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaterial = exports.createMaterial = exports.getMaterials = void 0;
const database_1 = require("../database");
function getMaterials(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const materials = yield conn.query('SELECT * FROM Materials');
        return res.json(materials[0]);
    });
}
exports.getMaterials = getMaterials;
function createMaterial(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newMaterial = req.body;
        const conn = yield database_1.connect();
        conn.query('INSERT INTO Materials SET ?', [newMaterial]);
        return res.json({
            message: 'Material created'
        });
    });
}
exports.createMaterial = createMaterial;
function getMaterial(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.MaterialId;
        const conn = yield database_1.connect();
        const material = yield conn.query('SELECT * FROM Materials WHERE MaterialID = ?', [id]);
        return res.json(material[0]);
    });
}
exports.getMaterial = getMaterial;
// export async function setContainer(req: Request, res: Response) {
//     const id = req.params.binId
//     const containerId: number = req.body.containerId
//     const conn = await connect()
//     const materialUpdated = await conn.query('UPDATE Materials SET ContainerID = ? WHERE MaterialID = ?', [containerId, id])
//     return res.json({message: 'Material patched'})
// }
