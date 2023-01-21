import { Container } from "@mantine/core";
import { Navigate, Outlet } from "react-router-dom";

export const PublicLayout: React.FC<{ isAuthenticated: boolean }> = ({
  isAuthenticated,
}) => {
  return (
    <Container
      fluid
      size="lg"
      style={{
        height: "100vh",
        padding: 0,
      }}
    >
      {isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />}
    </Container>
  );
};
