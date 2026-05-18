import Topo from "@/components/Topo";

export default function inputs(){
  return(
    <div>
      <Topo/>      
      <div className="campoForm">
        <label>Nome</label>
        <input type="text"/>
      </div>
    </div>
  )
}