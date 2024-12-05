import { Button, Container, Flex } from "@radix-ui/themes";

interface PropType {
  transferField: boolean,
  setTransferField: React.Dispatch<React.SetStateAction<boolean>>,
  showBalance: boolean,
  setShowBalance: React.Dispatch<React.SetStateAction<boolean>>,
  mintField: boolean
  setMintField: React.Dispatch<React.SetStateAction<boolean>>
}

export default ({ transferField,setTransferField,showBalance,setShowBalance,mintField,setMintField }: PropType) => {

  return (
    <Container>
      <Flex justify={"between"} direction={"row"}>
        <Button style={{ cursor: "pointer" }} onClick={() => {
          setTransferField(!transferField)
          setMintField(false)
          setShowBalance(false)
        }}>Transfer</Button>
        <Button style={{ cursor: "pointer" }} onClick={() => {
          setMintField(!mintField)
          setTransferField(false)
          setShowBalance(false)
        }}>Mint</Button>
        <Button style={{ cursor: "pointer" }} onClick={() => {
          setShowBalance(!showBalance)
          setTransferField(false)
          setMintField(false)
        }}>Check Balance</Button>
      </Flex>
    </Container>
  );
}
