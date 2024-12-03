import { useCurrentAccount } from "@iota/dapp-kit";
import { Box, Button, Container, Flex, TextField } from "@radix-ui/themes";

interface PropType {
  showTextField: boolean,
  setShowTextField: React.Dispatch<React.SetStateAction<boolean>>,
  showBalance: boolean,
  setShowBalance: React.Dispatch<React.SetStateAction<boolean>>,
}

export default ({ showTextField,setShowTextField,showBalance,setShowBalance }: PropType) => {
  const account = useCurrentAccount();

  return (
    <Container>
      <Flex justify={"between"} direction={"row"}>
        <Button style={{ cursor: "pointer" }} onClick={() => setShowTextField(!showTextField)}>Transfer</Button>
        <Button style={{ cursor: "pointer" }}>Mint</Button>
        <Button style={{ cursor: "pointer" }} onClick={() => setShowBalance(!showBalance)}>Check Balance</Button>
      </Flex>
    </Container>
  );
}
