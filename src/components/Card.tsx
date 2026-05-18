interface CardProps {
  produto: string;
  valor: number;
  desconto: number;
  funcao: any;
  children:any;
}

export default function Card(props: CardProps) {
  return (
    <div className={`flex  flex-col border-4  ${props.desconto > 0 ? "border-red-700" : "border-blue-600"} rounded-sm p-1 items-start`}>
      <div>Produto {props.produto}</div>
      <div>Valor R${props.valor}</div>

      {props.desconto > 0 && (
        <div>
          <div>Desconto R${props.desconto}</div>
          <div>R$ {props.funcao(props.valor, props.desconto)}</div>
        </div>
      )}
      <div>{props.children}</div>
    </div>
  );
}