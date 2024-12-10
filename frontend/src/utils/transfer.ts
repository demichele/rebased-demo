
import { TransactionType } from '../type';
import { Transaction } from '@iota/iota-sdk/transactions';
export default ({ address, setAddress, amount, setAmount, coinAddress, packageId, signAndExecuteTransaction, client }: TransactionType) => {

    const tx = () => {
        const tx = new Transaction();
        tx.setGasBudget(50000000)
        console.log(tx.pure.address(address), address)
        tx.moveCall({
            target: `${packageId}::my_token::transfer`,
            arguments: [tx.object(coinAddress as never), tx.pure.u64(amount), tx.pure.address(address)],
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