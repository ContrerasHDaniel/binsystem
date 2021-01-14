import { Request, Response } from 'express'
import {connect } from '../database'
import { Container } from '../interfaces/container.interface'

export async function getContainers(req: Request, res: Response): Promise <Response> {
    const conn = await connect()
    const containers = await conn.query('SELECT * FROM Containers')
    return res.json(containers[0])
}

export async function createContainer(req: Request, res: Response): Promise <Response> {
    const newContainer: Container = req.body
    const conn = await connect()
    conn.query('INSERT INTO Containers SET ?', [newContainer])
    return res.json({
        message: 'Container created'
    })
}

export async function getContainer(req: Request, res: Response): Promise<Response> {
    const id = req.params.containerId
    const conn = await connect()
    const container = await conn.query('SELECT * FROM Containers WHERE ContainerID = ?', [id])
    return res.json(container[0])
}

export async function setMaterial(req: Request, res: Response): Promise<Response> {
    const id = req.params.containerId
    const MaterialID: number = req.body.MaterialID
    const conn = await connect()
    if(!MaterialID){
        const containerUpdated = await conn.query('UPDATE Containers SET MaterialID = NULL WHERE ContainerID = ?', [id])
    } else {
        const containerUpdated = await conn.query('UPDATE Containers SET MaterialID = ? WHERE ContainerID = ?', [MaterialID, id])
    }
    
    return res.json({message: 'Container patched'})
}