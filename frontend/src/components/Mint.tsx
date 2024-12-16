import { useIotaClient, useSignAndExecuteTransaction } from '@iota/dapp-kit';
import * as Dialog from "@radix-ui/react-dialog";
import { useNetworkVariable } from '../networkConfig';
import { useState } from 'react'
import mint from '../utils/mint';
import styles from '../styles';

const Mint = () => {
	const packageId = useNetworkVariable('packageId');
	const treasuryCap = useNetworkVariable('treasuryCap');
	const {
		mutate: signAndExecuteTransaction,
	} = useSignAndExecuteTransaction();
	const client = useIotaClient();
	const [address, setAddress] = useState<string>("");
	const [amount, setAmount] = useState<string>("");

	return (
		<Dialog.Root defaultOpen={true}>
			<Dialog.Portal>
				<Dialog.Overlay
					style={styles.dialogOverlay}
				/>

				<Dialog.Content
					style={styles.dialogContent}
				>
					<Dialog.Title
						style={styles.dialogTitle}
					>
						Mint Tokens
					</Dialog.Title>

					<Dialog.Description
						style={styles.dialogDescription}
					>
						Enter the recipient address and the amount to mint tokens.
					</Dialog.Description>

					<div
						style={styles.descriptionBox}
					>
						<input
							placeholder="Recipient Address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							style={styles.input}
						/>

						<input
							placeholder="Amount"
							type="number"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							style={styles.input}
						/>

						<button
							style={styles.button}
							onClick={() => mint({ address, setAddress, amount, setAmount, packageId, treasuryCap, signAndExecuteTransaction, client })}
						>
							Mint Token
						</button>
					</div>

					<Dialog.Close asChild>
						<button
							style={styles.cancelButton}
						>
							✕
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}

export default Mint