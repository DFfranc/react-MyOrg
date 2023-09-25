import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
    // Inicar el useState()
    const [mostrarFormulario, actualizarMostrar] = useState(false);
    const [equipos, actualizarEquipos] = useState([
        {
            id: uuid(),
            titulo: "Programación",
            colorPrimario: "#57C278",
        },
        {
            id: uuid(),
            titulo: "Front End",
            colorPrimario: "#82CFFA",
        },
        {
            id: uuid(),
            titulo: "Data Science",
            colorPrimario: "#A6D157",
        },
        {
            id: uuid(),
            titulo: "Devops",
            colorPrimario: "#E06B69",
        },
        {
            id: uuid(),
            titulo: "UX y Diseño",
            colorPrimario: "#DB6EBF",
        },
        {
            id: uuid(),
            titulo: "Móvil",
            colorPrimario: "#FFBA05",
        },
        {
            id: uuid(),
            titulo: "Innovación y Gestión",
            colorPrimario: "#FF8A29",
        }
    ])
    const [colaboradores, actualizarColaboradores] = useState([
        {
            id: uuid(),
            equipo: "Front End",
            foto: "https://github.com/harlandlohora.png",
            nombre: "Harland Lohora",
            puesto: "Instructor",
            fav: true
          },
          {
            id: uuid(),
            equipo: "Programación",
            foto: "https://github.com/genesysR-dev.png",
            nombre: "Genesys Rondón",
            puesto: "Desarrolladora de software e instructora",
            fav: false
          },
          {
            id: uuid(),
            equipo: "UX y Diseño",
            foto: "https://github.com/JeanmarieAluraLatam.png",
            nombre: "Jeanmarie Quijada",
            puesto: "Instructora en Alura Latam",
            fav: false
          },
          {
            id: uuid(),
            equipo: "Programación",
            foto: "https://github.com/christianpva.png",
            nombre: "Christian Velasco",
            puesto: "Head de Alura e Instructor",
            fav: false
          },
          {
            id: uuid(),
            equipo: "Innovación y Gestión",
            foto: "https://github.com/JoseDarioGonzalezCha.png",
            nombre: "Jose Gonzalez",
            puesto: "Dev FullStack",
            fav: false
          }
    ]);

    // Función que ejecuta la función actualizarMostrar
    const cambiarMostrar = () => {
        actualizarMostrar(!mostrarFormulario); // Usar la función actualizadora
    }

    // Registrar colaborador
    const registrarColaborador = (colaborador) => {
        actualizarColaboradores([...colaboradores, colaborador]);
    }

    // Eliminar colaborador
    const eliminarColaborador = (id) => {
        const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
        actualizarColaboradores(nuevosColaboradores);
    }

    // Actualizar color de equipo
    const actualizarColorEquipo = (color, id) => {
        const equiposActualizados = equipos.map( (equipo) => {
            if(equipo.id === id){
                equipo.colorPrimario = color;
            }

            return equipo;
        });

        actualizarEquipos(equiposActualizados);
    }

    // Crear equipo
    const crearEquipo = (nuevoEquipo) => {
        actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}]);
    }

    // Poner/quitar favorito
    const like = (id) => {
        const colaboradoresActualizados = colaboradores.map((colaborador) => {
            if(colaborador.id === id){
                colaborador.fav = !colaborador.fav;
            }

            return colaborador;
        })

        actualizarColaboradores(colaboradoresActualizados);
    }

    return (
        <div>
            <Header />
            {
                mostrarFormulario && <Formulario 
                    equipos={equipos.map((equipo) => equipo.titulo)}
                    registrarColaborador={registrarColaborador}
                    crearEquipo={crearEquipo}
                />
            }

            <MiOrg cambiarMostrar={cambiarMostrar} /> {/* Mandar la función hacia el componente para que este se encarge de activar el evento */}

            {
                equipos.map((equipo) => 
                    <Equipo 
                        key={equipo.titulo} 
                        datos={equipo} 
                        colaboradores={colaboradores.filter((colaborador) => colaborador.equipo === equipo.titulo)}
                        eliminarColaborador={eliminarColaborador}
                        actualizarColorEquipo={actualizarColorEquipo}
                        like={like}
                    />
                )
            }

            <Footer />
        </div>
    );
}

export default App;
