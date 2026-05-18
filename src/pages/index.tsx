import Topo from "@/components/Topo";
<link href="/src/style.css" rel="stylesheet"></link>


export default function Home() {

  return (

    <main >
      <Topo />
      <div style={teste}>
        teste
      </div>
    </main>

  );
}


const teste = {
  display: "flex",
  justifyContent: 'center',
  alignItens: 'center',
  color: '#00f',
  backgroundColor: '#eee',
  fontSize: '20px'
}