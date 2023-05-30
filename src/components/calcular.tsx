import React from "react";

export default function Calcular(nomeOperacao: string, operador: string, calcular: any) {
  
    var numero1 = React.useRef<HTMLInputElement>(null);
    var numero2 = React.useRef<HTMLInputElement>(null);
    var resultado = React.useRef<HTMLInputElement>(null);
    var somar = () => {
      var num1 = parseFloat(numero1.current?.value ?? '0');
      var num2 = parseFloat(numero2.current?.value ?? '0');
  
      if (resultado.current) {
        resultado.current.value = `${calcular(num1, num2)}`;
      }
    }
  
    return (
      <div className='area-operacoes'>
        <h2>{nomeOperacao}</h2>
        <input type="number" ref={numero1} autoFocus />
        <span className='operador'>{operador}</span>
        <input type="number" ref={numero2} />
        <button onClick={somar}>Calcular</button><br/>
        <br/>
        <div>
          Resultado: <input type="text" ref={resultado} disabled className="resultado"/>
        </div>
      </div>
    );
  }
  