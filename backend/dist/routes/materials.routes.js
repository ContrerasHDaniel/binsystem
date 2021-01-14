"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const materials_controller_1 = require("../controllers/materials.controller");
const router = express_1.Router();
router.route('/')
    .get(materials_controller_1.getMaterials)
    .post(materials_controller_1.createMaterial);
router.route('/:materialId')
    .get(materials_controller_1.getMaterial);
exports.default = router;
