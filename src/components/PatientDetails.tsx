import { Patient } from "../types";
import { toast } from "react-toastify";
import { usePatientStore } from "../store";
import PatienDetailItem from "./PatienDetailItem";

import "react-toastify/dist/ReactToastify.css";

type PatientDetailsProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {
  const { deletePatient, getPatientById } = usePatientStore();

  const handleClick = () => {
    deletePatient(patient.id);
    toast("Paciente Eliminado Correctamente");
  };

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatienDetailItem label="ID" data={patient.id} />
      <PatienDetailItem label="Nombre" data={patient.name} />
      <PatienDetailItem label="Propietario" data={patient.caretaker} />
      <PatienDetailItem label="Email" data={patient.email} />
      <PatienDetailItem label="Fecha Alta" data={patient.date.toString()} />
      <PatienDetailItem label="Síntomas" data={patient.symptoms} />

      <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleClick}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
