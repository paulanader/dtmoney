import { Container } from "./styles";
import {
  BsArrowDownCircle,
  BsArrowUpCircle,
  BsCurrencyDollar,
} from "react-icons/bs";
import { useTransactions } from "../../hooks/useTransactions";

export const Summary = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p className="me-1">Entradas</p>
          <BsArrowUpCircle size={22} color="#33cc95" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p className="me-1">Saídas</p>
          <BsArrowDownCircle size={22} color="#EB1800" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div className="text-white" style={{ background: "#33cc95" }}>
        <header>
          <p className="me-1">Total</p>
          <BsCurrencyDollar size={22} color="#fff" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
};
