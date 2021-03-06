import type { NextPage } from "next";
import Container from "../../components/Container/container";

const title: string = "New Orders";
const NewOrders: NextPage = () => {
  return (
    <Container title={title}>
      <div>{title}</div>
    </Container>
  );
};

export default NewOrders;