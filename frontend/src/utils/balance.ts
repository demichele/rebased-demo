export default async (coinAddress: never): Promise<{ balance: string; name: any }> => {
    const result = {
        balance: "0",
        name: "TOKEN"
    }

    const body = {
        jsonrpc: "2.0",
        id: 1,
        method: "iota_getObject",
        params: [coinAddress, { "showType": true, "showContent": true, "showOwner": true, "showPreviousTransaction": true, "showStorageRebate": true, "showDisplay": true }]
    }

    const response = await fetch('https://indexer.testnet.iota.cafe/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const res = await response.json()
    const val = res.result.data.content.type.match(/::([^:>]+)>$/)
    result.balance = (res.result.data.content.fields.balance / 1000000).toFixed(2)
    if (val.length > 0) result.name = val[1]
    return result
}