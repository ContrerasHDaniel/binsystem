import { Router } from "express";
const router = Router()
import { createContainer, getContainer, getContainers, setMaterial } from '../controllers/containers.controller'

router.route('/')
    .get(getContainers)
    .post(createContainer)

router.route('/:containerId')
    .get(getContainer)
    .patch(setMaterial)

export default router;