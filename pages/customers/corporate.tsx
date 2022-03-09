import type { NextPage } from "next";
import Container from "../../components/Container/container";

const title: string = "Corporate Customers";
const CorporateCustomers: NextPage = () => {
  return (
    <Container title={title}>
      <div>{title}</div>
    </Container>
  );
};

export default CorporateCustomers;