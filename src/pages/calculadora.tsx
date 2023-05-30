import { LegacyRef, useRef, useState } from 'react';
import './calculadora.css';

export default function Calculadora() {
    var [digitado, setDigitado] = useState('');
    var [display, setDisplay] = useState('');
    var [equalClicked, setEqualClicked] = useState(false);

    function isNumber(value: string) 
    {
        return value >= '0' && value <= '9';
    }

    function keyClick(value: string) {
        return () => {
            if (isNumber(value) && equalClicked) {
                setDigitado(value);
                setDisplay(value);
            }
            else {
                setDigitado(digitado + value);
                setDisplay(digitado + value);
            }
            setEqualClicked(false);
        }
    }

function equalClick() {
    return () => {
        setEqualClicked(true);
        try {
            var value = eval(digitado);
            if (Math.abs(value) === Infinity) {
                setDigitado('');
                setDisplay('Erro');
                return;
            }

            setDigitado(value);
            setDisplay(value);
        }
        catch(e: any) {
            setDigitado('');
            setDisplay('Erro');
            console.error(e);
        }
    }
}

function clear() {
    return () => {
        setDigitado('');
        setDisplay('');
    }
}

    return <div className="body-calculator">
         <div className="container-calculator">
      <form action="" name="calc" className="calculator">
        <input type="text" className="value" readOnly value={display} />
        <span className="num clear" onClick={clear()}><i>C</i></span>
        <span className="num" onClick={keyClick('/')}><i>/</i></span>
        <span className="num" onClick={keyClick('*')}><i>*</i></span>
        <span className="num" onClick={keyClick('7')}><i>7</i></span>
        <span className="num" onClick={keyClick('8')}><i>8</i></span>
        <span className="num" onClick={keyClick('9')}><i>9</i></span>
        <span className="num" onClick={keyClick('-')}><i>-</i></span>
        <span className="num" onClick={keyClick('4')}><i>4</i></span>
        <span className="num" onClick={keyClick('5')}><i>5</i></span>
        <span className="num" onClick={keyClick('6')}><i>6</i></span>
        <span className="num plus" onClick={keyClick('+')}><i>+</i></span>
        <span className="num" onClick={keyClick('1')}><i>1</i></span>
        <span className="num" onClick={keyClick('2')}><i>2</i></span>
        <span className="num" onClick={keyClick('3')}><i>3</i></span>
        <span className="num" onClick={keyClick('0')}><i>0</i></span>
        <span className="num" onClick={keyClick('00')}><i>00</i></span>
        <span className="num" onClick={keyClick('.')}><i>.</i></span>

        <span
          className="num equal"
          onClick={equalClick()}
          ><i>=</i></span>
      </form>
    </div>
    </div>
}