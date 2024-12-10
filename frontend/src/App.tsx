import { ConnectButton } from "@iota/dapp-kit";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import Buttons from "./components/Buttons";
import { useState } from "react";
import Balance from "./components/Balance";
import Transfer from "./components/Transfer";
import Mint from "./components/Mint";

function App() {
  const [transferField, setTransferField] = useState<boolean>(false);
  const [mintField, setMintField] = useState<boolean>(false);
  const [showBalance, setShowBalance] = useState<boolean>(false);
  return (
    <Box>
      <Flex
        position="sticky"
        px="4"
        py="2"
        justify="between"
        align={"center"}
        style={{
          borderBottom: "1px solid var(--gray-a2)",
          background: "#1e2531"
        }}
      >
        <Box>
          <Heading>Simple token transfer</Heading>
        </Box>

        <Flex align={"center"}>
          <ConnectButton />
        </Flex>
      </Flex>
      <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "95vh", background: "#181d27" }} >
        <Container
          mt="5"
          py="2"
          px="4"
          mb={"4"}
        >
          <Buttons
            transferField={transferField}
            setTransferField={setTransferField}
            showBalance={showBalance}
            setShowBalance={setShowBalance}
            mintField={mintField}
            setMintField={setMintField}
          />
        </Container>
        {showBalance && <Balance />}
        {transferField && <Transfer setTransferField={setTransferField} />}
        {mintField && <Mint />}
      </Container>
    </Box>
  );
}

export default App;
