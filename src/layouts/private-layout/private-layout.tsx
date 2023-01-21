import { AppShell, Navbar } from "@mantine/core";
import { Navigate, Outlet } from "react-router-dom";
import { NavbarMenu } from "@components";

export const PrivateLayout: React.FC<{ isAuthenticated: boolean }> = ({
  isAuthenticated,
}) => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          <NavbarMenu />
        </Navbar>
      }
      // header={
      //   <Header height={60} p="xs">
      //     <HeaderMenu />
      //   </Header>
      // }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {isAuthenticated ? <Outlet /> : <Navigate to="/auth" />}
    </AppShell>
  );
};
