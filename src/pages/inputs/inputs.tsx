import Topo from "@/components/Topo";
import { useState, useEffect } from "react";
import Globais from "@/components/Globais";

const cursos=[
  {"Curso":"CSharp"},
  {"Curso":"HTML"},
  {"Curso":"C++"},
  {"Curso":"React"}
];


export default function inputs(){
  const[nome,setNome] = useState("");
  const[curso,setCurso] = useState("");

  useEffect(() =>{
    Globais.curso = "Pop";
  },[]);

  function fcursos(){
     return cursos.map((op:any) => {
              return <option value={op.Curso}>{op.Curso}</option>
            })
  }

  return(
    <div>
      <Topo/>      
      <div className="campoForm">
        <label>Nome</label>
        <input type="text" value={nome} onChange={(evt) => setNome(evt.target.value)}/>
      </div>
      <div className="campoForm">
        <label>Curso</label>
        <select onChange={(evt) => setCurso(evt.target.value)}>
          {
            fcursos()
          }
        </select>
      </div>

      <div>Nome digitado: {nome}</div>
      <div>Curso escolhido: {curso}</div>
      <div>Curso Global: {Globais.curso} - Canal: {Globais.canal} - Ano:{Globais.ano}</div>
    </div>
  )
}