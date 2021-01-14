"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const containers_controller_1 = require("../controllers/containers.controller");
router.route('/')
    .get(containers_controller_1.getContainers)
    .post(containers_controller_1.createContainer);
router.route('/:containerId')
    .get(containers_controller_1.getContainer)
    .patch(containers_controller_1.setMaterial);
exports.default = router;
