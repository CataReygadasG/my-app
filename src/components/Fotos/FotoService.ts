//guardar todas las peticiones y funciones relacion Back
import axios from 'axios'
export const getFotos = async () => {
    return await axios.get('http://localhost:3000/fotos')
}


