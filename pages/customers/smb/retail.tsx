import type { NextPage } from "next";
import Container from "../../../components/Container";

const title: string = "Smb Retail Customers";
const CorporateCustomers: NextPage = () => {
  return (
    <Container title={title}>
      <div>{title}</div>
    </Container>
  );
};

export default CorporateCustomers;