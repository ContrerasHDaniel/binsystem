"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const path = require('path');
router.route('/').get((req, res) => {
    res.sendFile(path.join(__dirname, "../../../frontend/build/index.html"));
});
exports.default = router;
