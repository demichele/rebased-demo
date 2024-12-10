import { Button, Container, Flex } from "@radix-ui/themes";
import { ButtonType } from "../type";

export default ({ transferField, setTransferField, showBalance, setShowBalance, mintField, setMintField }: ButtonType) => {

  return (
    <Container>
      <Flex style={{ marginLeft: "459px" }} direction={"column"} width={"200px"} gap={"25px"}>
        <Button style={{ cursor: "pointer", borderRadius: "50px", padding: "10px 20px" }} onClick={() => {
          setTransferField(!transferField)
          setMintField(false)
          setShowBalance(false)
        }}>Transfer</Button>
        <Button style={{ cursor: "pointer", borderRadius: "50px", padding: "10px 20px" }} onClick={() => {
          setMintField(!mintField)
          setTransferField(false)
          setShowBalance(false)
        }}>Mint</Button>
        <Button style={{ cursor: "pointer", borderRadius: "50px", padding: "10px 20px" }} onClick={() => {
          setShowBalance(!showBalance)
          setTransferField(false)
          setMintField(false)
        }}>Check Balance</Button>
      </Flex>
    </Container>
  );
}
