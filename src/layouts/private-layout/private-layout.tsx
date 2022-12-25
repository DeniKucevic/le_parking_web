import { AppShell, Navbar, Header } from "@mantine/core";
import { Navigate, Outlet } from "react-router-dom";
import { HeaderMenu } from "../../components";
import { NavbarMenu } from "../../components/navbar/navbar-menu";

export const PrivateLayout: React.FC = () => {
  const auth = false;
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          <NavbarMenu />
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <HeaderMenu />
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {!auth ? <Outlet /> : <Navigate to="/login" />}
      <Outlet />
    </AppShell>
  );
};
