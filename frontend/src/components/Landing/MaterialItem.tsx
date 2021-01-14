import React from 'react'
import { Material } from './Material'

interface Props {
    material: Material
}

const MaterialItem = ({material}: Props) => {
    return (
        <div key={material.MaterialID}>
            <h2>{material.material_type}</h2>
        </div>
    )
}

export default MaterialItem
