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
exports.setMaterial = exports.getContainer = exports.createContainer = exports.getContainers = void 0;
const database_1 = require("../database");
function getContainers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const containers = yield conn.query('SELECT * FROM Containers');
        return res.json(containers[0]);
    });
}
exports.getContainers = getContainers;
function createContainer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newContainer = req.body;
        const conn = yield database_1.connect();
        conn.query('INSERT INTO Containers SET ?', [newContainer]);
        return res.json({
            message: 'Container created'
        });
    });
}
exports.createContainer = createContainer;
function getContainer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.containerId;
        const conn = yield database_1.connect();
        const container = yield conn.query('SELECT * FROM Containers WHERE ContainerID = ?', [id]);
        return res.json(container[0]);
    });
}
exports.getContainer = getContainer;
function setMaterial(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.containerId;
        const MaterialID = req.body.MaterialID;
        const conn = yield database_1.connect();
        if (!MaterialID) {
            const containerUpdated = yield conn.query('UPDATE Containers SET MaterialID = NULL WHERE ContainerID = ?', [id]);
        }
        else {
            const containerUpdated = yield conn.query('UPDATE Containers SET MaterialID = ? WHERE ContainerID = ?', [MaterialID, id]);
        }
        return res.json({ message: 'Container patched' });
    });
}
exports.setMaterial = setMaterial;
