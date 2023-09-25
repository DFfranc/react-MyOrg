import './Equipo.css';
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    // Obtener valores
    const { id, titulo, colorPrimario} = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColorEquipo, like } = props;

    // Estilos
    const estiloFondo = { backgroundColor: hexToRgba(colorPrimario, 0.2) };
    const estiloTitulo = { borderColor: colorPrimario };

    return <>
        {
            colaboradores.length > 0 &&
            <section className='equipo' style={ estiloFondo }>
                <input
                    type='color'
                    className='input-color'
                    value={ colorPrimario }
                    onChange={
                        (e) => {
                            actualizarColorEquipo(e.target.value, id);
                        }
                    }
                
                />
                <h3 style={ estiloTitulo }>{ titulo }</h3>
                <div className='colaboradores'>
                    {
                        colaboradores.map((colaborador, index) => 
                            <Colaborador 
                                datos={colaborador} 
                                key={index}
                                colorPrimario={colorPrimario}
                                eliminarColaborador={eliminarColaborador}
                                like={like}
                            />
                        )
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;