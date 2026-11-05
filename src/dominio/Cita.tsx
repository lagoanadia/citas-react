import { useState } from "react";

function Cita(){
    interface CitaData
    {
        hora: string;
        paciente: string;
        especialidad: string;
        urgente?: boolean;
        compacta?:boolean;
        seleccionada?:boolean;

    }

    const [hora, setHora] = useState("");
    const[paciente, setPaciente]=useState("");
    const[especialidad, setEspecialidad]=useState("");
    const[urgente, setUrgente]=useState(false);
    const [compacta, setCompacta] = useState(false);
    const [seleccionada, setSeleccionada] = useState(false);

    return(
        <>

        </>
    )
} export default Cita;