import { Flex, Text } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import { useNetworkVariable } from '../networkConfig';


const Balance = () => {
    const [balance, setBalance] = useState<number>(0);
    const [type,setType] = useState<string>("");
    const coinAddress = useNetworkVariable('coinAddress');
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        (async () => {
            const body = { 
                jsonrpc: "2.0", 
                id: 1, 
                method: "iota_getObject", 
                params: [coinAddress, { "showType": true, "showContent": true, "showOwner": true, "showPreviousTransaction": true, "showStorageRebate": true, "showDisplay": true }] 
            }

            fetch('https://indexer.testnet.iota.cafe/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            .then(res => res.json())
            .then(res => {
                const val = res.result.data.content.type.match(/::([^:>]+)>$/)
                setType(val ? val[1] : "TOKEN")
                setBalance(res.result.data.content.fields.balance/1000000)
                setLoading(false)
            })
            .catch(e => alert(e.message))
        })()
    }, [])
    return (
        <Flex justify={"center"}>
            {!loading && <Text weight={"bold"} align={"center"}>{balance} {type}</Text>}
        </Flex>
    )
}

export default Balance
