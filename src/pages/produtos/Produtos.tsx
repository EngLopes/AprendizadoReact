import Card from "@/components/Card"
import Topo from "@/components/Topo";
import { useRouter } from "next/router";

function calcDesc(v: number, d: number) {
  return v - d;
}

function calcDesc2(v: number, d: number) {
  return v - (d / 2);
}


const produtos = [
  {
    id:0,
    produto: 'Mouse',
    valor: 24.15,
    desconto: 12,
    disponivel: true
  },
  {
    id:1,
    produto: 'Teclado',
    valor: 45.10,
    desconto: 12,
    disponivel: false
  },
  {
    id:2,
    produto: 'Monitor',
    valor: 256.41,
    desconto: 12,
    disponivel: true
  },
  {
    id:3,
    produto: 'Fone',
    valor: 150.94,
    desconto: 12,
    disponivel: false
  },
  {
    id:4,
    produto: 'CPU',
    valor: 66.40,
    desconto: 12,
    disponivel: true
  },
  {
    id:5,
    produto: 'Placa mãe',
    valor: 67.40,
    desconto: 15,
    disponivel: true
  }
]


export default function ProdutosPagina() {
  const info = useRouter();
  const {nome,curso} = info.query;
  return (
    <div>
       <Topo/>
       <div>{nome}</div>
       <div>{curso}</div>
      <div className="flex justify-center gap-3 ">
        {
          produtos.map((e: any) => {
            if (e.disponivel) {
              return (
                <Card key={e.id} produto={e.produto} desconto={e.desconto} funcao={calcDesc} valor={e.valor} >
                  Teste
                </Card>
              )
            }
          })
        }
      </div>
    </div>
  )
}