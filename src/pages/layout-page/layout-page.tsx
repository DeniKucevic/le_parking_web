import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

export const LayoutPage = () => {
  return (
    <Container
      fluid
      size="lg"
      style={{
        height: "100vh",
        padding: 0,
      }}
    >
      <Outlet />
    </Container>
  );
};
