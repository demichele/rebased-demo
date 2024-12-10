// module token_transfer_tutorial::my_token_tests {
//     use token_transfer_tutorial::my_token::{Self,MY_TOKEN};
//     use iota::test_scenario;
//     use 0x2::transfer;

//     const Admin : address = @0xBABE;
//     const Initial_owner : address = @0xCAFE;
//     const Final_owner : address = @0xFACE;
//     #[test]
//     fun test_mint() {
//         let scenario_val = test_scenario::begin(Admin);
//         let mut scenario = &mut scenario_val;
//         {
//             my_token::init(test_scenario::ctx(scenario));
//         };
//         my_token::mint(Final_owner,&mut treasury_cap, 10_000_000, test_scenario::ctx(scenario));

//         // let balances = transfer::balances(ctx.sender());
//         // assert!(balances == 1_000_000,1_00_000);
//     }

//     #[test]
//     fun test_transfer() {
//         let scenario_val = test_scenario::begin(Admin);
//         let mut scenario = &mut scenario_val;
//         {
//             my_token::init(test_scenario::ctx(scenario));
//         };

//         let witness = my_token::MY_TOKEN {};
        
//         my_token::mint(Final_owner,&mut treasury_cap, 10_000_000, test_scenario::ctx(scenario));

//         let mut sender_coin = transfer::get_coin(test_scenario::ctx(scenario));
//         my_token::transfer(&mut sender_coin, 500_000, 0x2);

//         let sender_balance = transfer::balances(test_scenario::ctx(scenario));
//         let recipient_balance = transfer::balances(0x2);
//         assert!(sender_balance == 500_000, 500_000);
//         assert!(recipient_balance == 500_000, 500_000);
//     }

//     #[test]
//     fun test_balances() {
//         let ctx = test_ctx();
//         let witness = my_token::MY_TOKEN {};

//         my_token::init(witness);

//         let treasury_cap = transfer::get_treasury_cap(ctx.sender());
        
//         // Mint tokens
//         my_token::mint(&mut treasury_cap, 1_000_000, ctx.sender());

//         // Verify balance retrieval
//         let mut coin = transfer::get_coin(ctx.sender());
//         let balance = my_token::balances(&mut coin);
//         assert!(balance == 1_000_000, b"Balances function did not return correct value!");
//     }
// }
// ==========================================================================================================================================================
// module token_transfer_tutorial::my_token_test {
//     use iota::test_scenario::{Scenario, TestScenario, TreasuryCap, Coin};
//     use token_transfer_tutorial::my_token::{Self, MY_TOKEN, User};

//     #[test]
//     public fun test_init_and_mint() {
//         let mut scenario = TestScenario::new();

//         // Deploy the token contract
//         let token = scenario.publish_package("token_transfer_tutorial");

//         // Initialize the token
//         let ctx = scenario.new_tx_context();
//         let witness = MY_TOKEN {};
//         token_transfer_tutorial::my_token::init(witness, &mut ctx);

//         // Mint tokens
//         let ctx = scenario.new_tx_context();
//         let treasury = scenario.get_object<TreasuryCap<MY_TOKEN>>();
//         let recipient = scenario.new_account();
//         let mint_amount = 1_000;

//         token_transfer_tutorial::my_token::mint(&mut treasury, mint_amount, recipient, &mut ctx);

//         // Verify recipient balance
//         let user = User { account: recipient, amount: 0 };
//         let balance = token_transfer_tutorial::my_token::balance(user);

//         assert!(balance == mint_amount, "Minting failed, incorrect balance!");
//     }

//     #[test]
//     public fun test_transfer() {
//         let mut scenario = TestScenario::new();

//         // Deploy the token contract
//         let token = scenario.publish_package("token_transfer_tutorial");

//         // Initialize the token
//         let ctx = scenario.new_tx_context();
//         let witness = MY_TOKEN {};
//         token_transfer_tutorial::my_token::init(witness, &mut ctx);

//         // Mint tokens to the sender
//         let ctx = scenario.new_tx_context();
//         let treasury = scenario.get_object<TreasuryCap<MY_TOKEN>>();
//         let sender = scenario.new_account();
//         let recipient = scenario.new_account();
//         let mint_amount = 1_000;

//         token_transfer_tutorial::my_token::mint(&mut treasury, mint_amount, sender, &mut ctx);

//         // Transfer tokens
//         let transfer_amount = 500;
//         let ctx = scenario.new_tx_context();
//         let mut coin = scenario.get_object<Coin<MY_TOKEN>>(sender);

//         token_transfer_tutorial::my_token::transfer(&mut coin, transfer_amount, recipient, &mut ctx);

//         // Verify sender's balance
//         let sender_user = User { account: sender, amount: 0 };
//         let sender_balance = token_transfer_tutorial::my_token::balance(sender_user);

//         assert!(sender_balance == (mint_amount - transfer_amount), "Incorrect sender balance after transfer!");

//         // Verify recipient's balance
//         let recipient_user = User { account: recipient, amount: 0 };
//         let recipient_balance = token_transfer_tutorial::my_token::balance(recipient_user);

//         assert!(recipient_balance == transfer_amount, "Incorrect recipient balance after transfer!");
//     }
// }
// =======================================================================================================================================================
