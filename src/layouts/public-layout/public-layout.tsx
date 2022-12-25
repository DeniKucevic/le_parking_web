import { Container } from "@mantine/core";
import { Navigate, Outlet } from "react-router-dom";

export const PublicLayout = () => {
  const auth = false;
  return (
    <Container
      fluid
      size="lg"
      style={{
        height: "100vh",
        padding: 0,
      }}
    >
      {!auth ? <Navigate to="/dashboard" /> : <Outlet />}
      <Outlet />
    </Container>
  );
};
