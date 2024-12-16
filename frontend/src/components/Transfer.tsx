import { useNetworkVariable } from '../networkConfig';
import { useIotaClient, useSignAndExecuteTransaction } from '@iota/dapp-kit';
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from 'react';
import transfer from '../utils/transfer';
import { TranferProp } from '../type';
import style from '../styles.ts';

const Transfer = ({ setTransferField }: TranferProp) => {
    const [address, setAddress] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const {
        mutate: signAndExecuteTransaction,
    } = useSignAndExecuteTransaction();
    const client = useIotaClient();
    const packageId = useNetworkVariable('packageId');
    const coinAddress = useNetworkVariable('coinAddress');

    const handleTransfer = () => {
        transfer({
            address,
            setAddress,
            amount,
            setAmount,
            coinAddress,
            packageId,
            signAndExecuteTransaction,
            client,
        });
        setTransferField(false)
    };

    return (
        <Dialog.Root defaultOpen={true}>
            <Dialog.Portal>
                <Dialog.Overlay
                    style={style.dialogOverlay}
                />

                <Dialog.Content
                    style={style.dialogContent}
                >
                    <Dialog.Title
                        style={style.dialogTitle}
                    >
                        Transfer Tokens
                    </Dialog.Title>

                    <Dialog.Description
                        style={style.dialogDescription}
                    >
                        Enter the recipient address and the amount to transfer.
                    </Dialog.Description>

                    <div
                        style={style.descriptionBox}
                    >
                        <input
                            placeholder="Recipient Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            style={style.input}
                        />

                        <input
                            placeholder="Amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            style={style.input}
                        />

                        <button
                            style={style.button}
                            onClick={handleTransfer}
                        >
                            Transfer Token
                        </button>
                    </div>

                    <Dialog.Close asChild>
                        <button
                            style={style.cancelButton}
                        >
                            ✕
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default Transfer;
