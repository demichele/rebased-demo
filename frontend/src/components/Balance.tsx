import { Flex, Text } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import fetchBalance from '../utils/balance';
import { useNetworkVariable } from '../networkConfig';

const Balance = () => {
    const [bal, setBalance] = useState<string>("0");
    const [type, setType] = useState<string>("");
    const coinAddress = useNetworkVariable('coinAddress');
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        (async () => {
            const { balance, name } = await fetchBalance(coinAddress);
            setBalance(balance);
            setType(name)
            setLoading(false)
        })()
    }, [])
    return (
        <Flex justify={"center"}>
            {!loading && <Text weight={"bold"} align={"center"} style={{ background: "#181d27", borderRadius: "16px", padding: "16px", boxShadow: "0px 4px 6px 1px #474b53" }}>{bal} {type}</Text>}
        </Flex>
    )
}

export default Balance
