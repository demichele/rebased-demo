import { ConnectButton } from "@iota/dapp-kit";
import { Box, Container, Flex, Heading, TextField, Text } from "@radix-ui/themes";
import WalletStatus  from "./WalletStatus";
import { useState } from "react";

function App() {
  const [showTextField,setShowTextField] = useState<boolean>(false);
  const [showBalance,setShowBalance] = useState<boolean>( true);
  const [balance,setBalance] = useState<number>(120);
  return (
    <>
      <Flex
        position="sticky"
        px="4"
        py="2"
        justify="between"
        style={{
          borderBottom: "1px solid var(--gray-a2)",
        }}
      >
        <Box>
          <Heading>Simple token transfer</Heading>
        </Box>

        <Box>
          <ConnectButton />
        </Box>
      </Flex>
      <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }} >
        <Container
          mt="5"
          py="2"
          px="4"
          style={{ background: "var(--gray-a2)" }}
        >
          <WalletStatus 
          showTextField={showTextField}
          setShowTextField={setShowTextField}
          showBalance={showBalance}
          setShowBalance={setShowBalance}
          />
        </Container>
        {showBalance && <Flex justify={"center"} mt={"4"}>
          <Text weight={"bold"} align={"center"}>{balance} IOTA</Text>
        </Flex>}
        {showTextField && <Box my={"2"}>
          <TextField.Root size="3" placeholder="Enter" />
        </Box>}
      </Container>
    </>
  );
}

export default App;
