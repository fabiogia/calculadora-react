import Calcular from '../components/calcular';

export default function Multiplicacao() {
  return Calcular('Multiplicação', 'x', (n1: number, n2: number) => n1 * n2);
}
