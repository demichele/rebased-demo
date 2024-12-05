import { ConnectButton } from "@iota/dapp-kit";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import Buttons  from "./components/Buttons";
import { useState } from "react";
import Balance from "./components/Balance";
import Transfer from "./components/Transfer";
import Mint from "./components/Mint";

function App() {
  const [transferField,setTransferField] = useState<boolean>(false);
  const [mintField,setMintField] = useState<boolean>(false);
  const [showBalance,setShowBalance] = useState<boolean>( false);
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
          mb={"4"}
          style={{ background: "var(--gray-a2)" }}
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
        {showBalance && <Balance/>}
        {transferField && <Transfer/>}
        {mintField && <Mint/>}
      </Container>
    </>
  );
}

export default App;
