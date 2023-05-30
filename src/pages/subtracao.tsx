import Calcular from '../components/calcular';

export default function Subtracao() {
  return Calcular('Subtração', '-', (n1: number, n2: number) => n1 - n2);
}
