import type { NextPage } from "next";
import Container from "../../components/Container";

const title: string = "Completed Orders";
const CompletedOrders: NextPage = () => {
  return (
    <Container title={title}>
      <div>{title}</div>
    </Container>
  );
};

export default CompletedOrders;