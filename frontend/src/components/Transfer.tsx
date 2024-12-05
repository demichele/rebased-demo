import { useIotaClient, useSignAndExecuteTransaction } from '@iota/dapp-kit';
import { Transaction } from '@iota/iota-sdk/transactions';
import { Button, Flex, TextField } from '@radix-ui/themes'
import { useState } from 'react'
import { useNetworkVariable } from '../networkConfig';

const Transfer = () => {
    const [address, setAddress] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const packageId = useNetworkVariable('packageId');
    const coinAddress = useNetworkVariable('coinAddress');
    const {
        mutate: signAndExecuteTransaction,
    } = useSignAndExecuteTransaction();
    const client = useIotaClient();
    const tranfer = () => {
        const tx = () => {
            const tx = new Transaction();
            tx.setGasBudget(50000000)
            console.log(tx.pure.address(address),address)
            tx.moveCall({
                target: `${packageId}::my_token::transfer`,
                arguments: [tx.object(coinAddress),tx.pure.u64(amount), tx.pure.address(address)],
            });
            return tx;
        }
        signAndExecuteTransaction(
            {   
				transaction: tx(),
			},
			{
				onSuccess: ({ digest }) => {
					client
                    .waitForTransaction({ digest, options: { showEffects: true } })
                    .then(() => {
                        setAddress("")
                        setAmount("");
                        alert("Transaction successfull!")
                    });
				},

				onError: (error) => {
					console.error('Failed to execute transaction', tx, error);
				},
                
			},
        )
    }
    return (
        <Flex direction={"column"} align={"center"}>
            <Flex justify={"center"} mb="2">
                <TextField.Root size="3" placeholder="Recipient Address" value={address} onChange={e => setAddress(e.target.value)}  mr="2"/>
                <TextField.Root size="3" placeholder="Amount" value={amount}  type='number' onChange={e => setAmount(e.target.value)} />
            </Flex>
            <Button style={{ cursor: "pointer" }} onClick={tranfer}>Tranfer Token</Button>
        </Flex>
    )
}

export default Transfer
