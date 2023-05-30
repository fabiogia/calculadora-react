import Calcular from '../components/calcular';

export default function Soma() {
  return Calcular('Soma', '+', (n1: number, n2: number) => n1 + n2);
}
