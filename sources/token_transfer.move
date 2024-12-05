// Copyright (c) IOTA
// Modifications Copyright (c) 2024 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

module token_transfer_tutorial::my_token {
    use iota::coin::{Self, TreasuryCap, Coin};
    public struct MY_TOKEN has drop {}

    fun init(witness: MY_TOKEN, ctx: &mut TxContext) {
        let (treasury, metadata) = coin::create_currency(witness, 6, b"MY_TOKEN", b"MYT", b"", option::none(), ctx);
        transfer::public_freeze_object(metadata);
        transfer::public_transfer(treasury, ctx.sender());
    }

    public fun mint(
        treasury_cap: &mut TreasuryCap<MY_TOKEN>,
        amount: u64,
        recipient: address,
        ctx: &mut TxContext,
    ) {
        let coin = coin::mint(treasury_cap, amount, ctx);
        transfer::public_transfer(coin, recipient);
    }

    public entry fun transfer(
        token: &mut Coin<MY_TOKEN>,
        amount: u64,
        recipient: address,
        ctx: &mut TxContext,
    ) {
        let coin_to_transfer = coin::split(token, amount, ctx);
        transfer::public_transfer(coin_to_transfer, recipient);
    }
    public entry fun balance(coin: &coin::Coin<MY_TOKEN>) : u64 {
        let balance = coin::balance(coin);
        balance.value()
    }
}