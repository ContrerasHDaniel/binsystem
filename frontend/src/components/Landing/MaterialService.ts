import axios from 'axios'

export const getMaterials = async () => {
    return await axios.get('http://localhost:4000/materials')
}