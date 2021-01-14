import { Router, Request, Response } from 'express'
const router = Router()
const path = require('path');

router.route('/').get((req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../../frontend/build/index.html")
    )});

export default router;