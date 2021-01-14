import axios from 'axios'

export const getContainers = async () => {
    return await axios.get('http://localhost:4000/containers')
}

export const setMaterialID = async(containerID: string, materialID?: number) => {
    return await axios.patch(`http://localhost:4000/containers/${containerID}`, {'MaterialID': materialID ? materialID: null})
}