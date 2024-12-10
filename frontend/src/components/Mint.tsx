import { useIotaClient, useSignAndExecuteTransaction } from '@iota/dapp-kit';
import * as Dialog from "@radix-ui/react-dialog";
import { useNetworkVariable } from '../networkConfig';
import { useState } from 'react'
import mint from '../utils/mint';

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
					style={{
						backgroundColor: "rgba(0, 0, 0, 0.7)",
						position: "fixed",
						inset: 0,
					}}
				/>

				<Dialog.Content
					style={{
						backgroundColor: "#181d27",
						borderRadius: "12px",
						boxShadow: "0px 4px 6px 1px #474b53",
						padding: "24px",
						maxWidth: "450px",
						margin: "40px auto",
						fontFamily: "Arial, sans-serif",
						position: "fixed",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				>
					<Dialog.Title
						style={{
							marginBottom: "16px",
							fontSize: "20px",
							fontWeight: "bold",
							textAlign: "center",
							color: "#FFF",
						}}
					>
						Mint Tokens
					</Dialog.Title>

					<Dialog.Description
						style={{
							marginBottom: "24px",
							fontSize: "14px",
							color: "#FFF",
							textAlign: "center",
						}}
					>
						Enter the recipient address and the amount to mint tokens.
					</Dialog.Description>

					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "16px",
						}}
					>
						<input
							placeholder="Recipient Address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							style={{
								padding: "12px",
								fontSize: "14px",
								borderRadius: "6px",
								border: "none",
								width: "100%",
								background: "#111114",
								color: "#FFF",
							}}
						/>

						<input
							placeholder="Amount"
							type="number"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							style={{
								padding: "12px",
								fontSize: "14px",
								borderRadius: "6px",
								border: "none",
								width: "100%",
								background: "#111114",
								color: "#FFF",
							}}
						/>

						<button
							style={{
								cursor: "pointer",
								padding: "12px",
								backgroundColor: "#3e63dd",
								color: "white",
								border: "none",
								borderRadius: "50px",
								fontSize: "14px",
								fontWeight: "bold",
								textAlign: "center",
							}}
							onClick={() => mint({ address, setAddress, amount, setAmount, packageId, treasuryCap, signAndExecuteTransaction, client })}
						>
							Mint Token
						</button>
					</div>

					<Dialog.Close asChild>
						<button
							style={{
								position: "absolute",
								top: "16px",
								right: "16px",
								background: "none",
								border: "none",
								color: "#FFF",
								cursor: "pointer",
								fontSize: "18px",
							}}
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