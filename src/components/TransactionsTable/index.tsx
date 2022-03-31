import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td>R$ 2000.00</td>
            <td>Desenvolvimento</td>
            <td>20/04/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td>R$ 2000.00</td>
            <td>Desenvolvimento</td>
            <td>20/04/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td>R$ 2000.00</td>
            <td>Desenvolvimento</td>
            <td>20/04/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}