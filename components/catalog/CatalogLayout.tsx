import { FC, ReactNode, useState } from "react";
import { AppShell, Text, Footer, Header, useMantineTheme } from "@mantine/core";

type Props = {
  children: ReactNode;
};

const CatalogLayout: FC<Props> = ({ children }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <Text>Application header</Text>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
export default CatalogLayout;
