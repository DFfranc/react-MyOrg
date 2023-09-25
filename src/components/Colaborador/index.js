import './Colaborador.css';
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Colaborador = (props) => {
    const { id, nombre, puesto, foto, fav } = props.datos;
    const { colorPrimario, eliminarColaborador, like } = props;

    const backgroundColor = { backgroundColor: colorPrimario }
    const estiloCloseBtn = { 
        color: colorPrimario,
        filter: 'brightness(0.6)'
    }
    
    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                className='eliminar' 
                onClick={ () => eliminarColaborador(id) }
                style={estiloCloseBtn}
            />
            <div className='encabezado' style={ backgroundColor }>
                <img src={foto} alt={`Imagen de ` + nombre}></img>
            </div>
            <div className='info'>
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                { fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
            </div>
        </div>
    );
}

export default Colaborador;