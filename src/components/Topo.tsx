import Link from "next/link";

export default function Topo() {
  return (
    <div className="flex flex-col justify-between items-center bg-zinc-300 h-[150px]">
      <div>Logo</div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl" >Cursinho</div>
        <div className="subtituloTopo">Curso de React</div>
      </div>


      <nav className="flex justify-center items-center gap-2">

        <Link href={"/"}>
          Home
        </Link>
        <Link href={"/useState/UseState"}>
          State
        </Link>

        <Link href={
          {
            pathname: "/produtos/Produtos",
            query: { nome: "Marcos", curso: "React Next" }
          }
        }>
          Produtos
        </Link>

        <Link href={"/teste/teste"}>
          Teste
        </Link>

        <Link href={"/inputs/inputs"}>
          Inputs
        </Link>
      </nav>
    </div>

  )
}