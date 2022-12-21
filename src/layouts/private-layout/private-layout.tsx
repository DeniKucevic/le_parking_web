import { AppShell, Navbar, Header } from "@mantine/core";
import { HeaderMenu } from "../../components";

type PrivateLayoutProps = {
  children: React.ReactElement;
};

export const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          {/* Navbar content */}
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <HeaderMenu links={[]} />
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
      {children}
    </AppShell>
  );
};
