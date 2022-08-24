import React, { useEffect, useState } from 'react'
import { Foto } from './Fotos'
import * as FotoService from './FotoService'
import FotoItem from './FotoItem'


const FotoList = () => {
    const [fotos, setFotos] = useState<Foto[]>([]);

    const loadFotos = async () => {
        const res = await FotoService.getFotos()
        setFotos(res.data);
    }

    useEffect(() => {
        loadFotos()
    }, [])

    return (
        /*consumir los datos, aqui llamar lista de fotos */

        <div>{fotos.map(foto => {
            return <FotoItem foto={foto} />
        })}</div>




    )
}

export default FotoList
