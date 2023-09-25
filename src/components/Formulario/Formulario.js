import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {
    // Declarar los hooks useState(""). Se usan comillas ya que son Strings.
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const { registrarColaborador, crearEquipo } = props;

    const manejarEnvio = (e) => {
        e.preventDefault();

        // Asignar los valores a un objeto (Asemejar la tarea de enviar datos al backend)
        let datos = {
            nombre,
            puesto,
            foto,
            equipo
        }

        registrarColaborador(datos);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();

        let datos = {
            titulo,
            colorPrimario: color
        }

        crearEquipo(datos);
    }

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo
                    titulo="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    valor={nombre}
                    actualizarValor={setNombre}
                />
                <Campo
                    titulo="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    valor={puesto}
                    actualizarValor={setPuesto}
                />
                <Campo
                    titulo="Foto"
                    placeholder="Ingresar enlace de foto"
                    required
                    valor={foto}
                    actualizarValor={setFoto}
                />

                <ListaOpciones
                    equipos={props.equipos}
                    valor={equipo}
                    actualizarValor={setEquipo}
                />
                <Boton>
                    Crear
                </Boton>
            </form>

            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Campo
                    titulo="Titulo"
                    placeholder="Ingresar titulo"
                    required
                    valor={titulo}
                    actualizarValor={setTitulo}
                />
                <Campo
                    titulo="Color"
                    placeholder="Ingresar color en hexadecimal"
                    required
                    valor={color}
                    actualizarValor={setColor}
                    type="color"
                />
                <Boton>
                    Registrar equipo
                </Boton>
            </form>
        </section>
    );
}

export default Formulario;