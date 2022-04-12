import { AiFillDollarCircle } from "react-icons/ai";
import { Container, Contant } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Contant className="d-flex align-items-center justify-content-between">
        <div>
          <AiFillDollarCircle color="#80EBDF" size={30} />
          <span>Dt money</span>
        </div>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Contant>
    </Container>
  );
};
