import './MiOrg.css';

const MiOrg = (props) => {
    // const [nombreVariable, funcionActualizadora] = useState(valorInicial);

    return (
        <section className='orgSection'>
            <h3 className='titulo'>Mi Organización</h3>
            <img src='/img/boton-add.png' alt='Boton para abrir y cerrar el formulario' onClick={props.cambiarMostrar}></img>
        </section>
    );
}

export default MiOrg;