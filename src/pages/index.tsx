import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";



export default function Home() {
  const name="Marcos";
  let canal ="Markinhus";

 

  function Topo(){
    return (
      <div className="flex justify-between items-center bg-zinc-300 h-[100px]">
        <div>Logo</div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl" >{canal}</div>
          <div className="subtituloTopo">Curso de React</div>
        </div>
        <div>{name}</div>
      </div>
    )
  }
  return (
    
      <main >
        <Topo/>
      </main>
   
  );
}
