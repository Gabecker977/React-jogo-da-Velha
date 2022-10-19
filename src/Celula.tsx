import { useState } from "react";

type Props={
    valor: string;
    jogador:string;
    onPlayed:()=>void;
};

export default function Celula(props: Props){
    const [valor,setValor]=useState(props.valor);

    const marcarCelula =() =>{
        console.log('marcar celula')
        if(valor===''){
            setValor(props.jogador)
            props.onPlayed()
        }
    }
    let classe='';
    if(valor==='O'){
        classe='bolinha'
    }else if(valor==='X'){
  classe='xiszinho'
    }
    return(
        <div className={'celula ${classe}'} onClick={marcarCelula}> 
        <span>{valor}</span>
        </div> 
    )
}