import type { NextPage } from "next";
import Container from "../../components/Container/container";

const title: string = "Inventory Home";
const CorporateCustomers: NextPage = () => {
  return (
    <Container title={title}>
      <div>{title}</div>
    </Container>
  );
};

export default CorporateCustomers;