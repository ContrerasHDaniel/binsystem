import { Router } from 'express'
import { createMaterial, getMaterial, getMaterials } from "../controllers/materials.controller"
const router = Router()

router.route('/')
    .get(getMaterials)
    .post(createMaterial)

router.route('/:materialId')
    .get(getMaterial)

export default router
