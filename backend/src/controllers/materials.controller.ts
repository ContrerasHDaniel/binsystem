import { Request, Response } from "express"
import { connect } from "../database"
import { Material } from "../interfaces/material.interface"

export async function getMaterials(req: Request, res: Response): Promise <Response>{
    const conn = await connect()
    const materials = await conn.query('SELECT * FROM Materials')
    return res.json(materials[0])
}

export async function createMaterial(req: Request, res: Response): Promise<Response> {
    const newMaterial: Material = req.body
    const conn = await connect()
    conn.query('INSERT INTO Materials SET ?', [newMaterial])
    return res.json({
        message: 'Material created'
    })
}

export async function getMaterial(req: Request, res: Response): Promise<Response> {
    const id = req.params.MaterialId
    const conn = await connect()
    const material = await conn.query('SELECT * FROM Materials WHERE MaterialID = ?', [id])
    return res.json(material[0])
}

// export async function setContainer(req: Request, res: Response) {
//     const id = req.params.binId
//     const containerId: number = req.body.containerId
//     const conn = await connect()
//     const materialUpdated = await conn.query('UPDATE Materials SET ContainerID = ? WHERE MaterialID = ?', [containerId, id])
//     return res.json({message: 'Material patched'})
// }