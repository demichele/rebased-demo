
import { Transaction } from '@iota/iota-sdk/transactions';

import { TransactionType } from '../type';

export default ({ address, setAddress, amount, setAmount, packageId, treasuryCap, signAndExecuteTransaction, client }: TransactionType) => {
    let parsedAmount = amount*1000000
    const tx = () => {
        const tx = new Transaction();
        tx.setGasBudget(50000000)
        tx.moveCall({
            target: `${packageId}::my_token::mint`,
            arguments: [tx.object(treasuryCap), tx.pure.u64(parsedAmount), tx.pure.address(address)],
        });
        return tx;
    }
    signAndExecuteTransaction(
        {
            transaction: tx(),
        },
        {
            onSuccess: ({ digest }:{digest:any}) => {
                client.waitForTransaction({ digest, options: { showEffects: true } }).then(() => {
                    setAddress("")
                    setAmount("");
                    alert("Transaction successfull!")
                });
            },

            onError: (error: any) => {
                console.error('Failed to execute transaction', tx, error);
            },

        },
    )
}