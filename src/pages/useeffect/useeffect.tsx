import Globais from "@/components/Globais";
import Topo from "@/components/Topo";
import { useEffect,useState } from "react";

export default function useeffect(){
    const [cont,setCount] = useState<number>(0)
    const [aux,setAux]= useState<number>(0);
    useEffect(() => {
        alert("UseEffect disparado");
        Globais.curso = "Testando";
        Globais.canal = "Jovem";
        Globais.ano = 2026;
    },[])

    function add(){
        let c= aux;
        c++;
        setAux(c);
    }

    return (
        <div>
            <Topo/>
            <div>
                <p>{`Valor de Count: ${cont}`}</p>
                <p>{`Valorde aux: ${aux}`}</p>
                <button onClick={add}>Adicionar</button>
            </div>

            <div>Curso Global: {Globais.curso} - Canal: {Globais.canal} - Ano:{Globais.ano}</div>
        </div>
    );
}