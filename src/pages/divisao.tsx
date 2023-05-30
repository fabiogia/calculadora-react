import Calcular from '../components/calcular';

export default function Divisao() {
  return Calcular('Divisão', '/', (n1: number, n2: number) => n1 / n2);
}
