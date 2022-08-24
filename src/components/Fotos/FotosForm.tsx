import React from 'react'
//al seleccionar catalogp se va a esta ventana y aqui se va a poder agregar una foto
const FotoForm = () => {
    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-body">
                        <h3>Nueva Joya</h3>

                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="title" 
                                    placeholder="Escribe un titulo a la foto" 
                                    className='form-control'
                                    autoFocus
                                    />
                                </div>

                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    name="url" 
                                    placeholder='https://joyeriasagitario.com' 
                                    className="form-control" />
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FotoForm
