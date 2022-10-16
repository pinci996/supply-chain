
```sh
HOW TO TEST: 
Run truffle develop from  project-6 folder and after that run truffle test to get tests from TestSupplychain.js file

UML Diagrams are provided in project-6/UML Diagrams folder
Truffle v5.5.30 (core: 5.5.30)
Solidity v0.5.16 (solc-js)
Node v14.19.2
Web3.js v1.7.4
Contract Adress: 0x68402f698a9533C933725c1754f48022c6845bed
Whole migrations log: 

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Migrations dry-run (simulation)
===============================
> Network name:    'goerli-fork'
> Network id:      5
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        7775228
   > block timestamp:     1665858698
   > account:             0x68402f698a9533C933725c1754f48022c6845bed
   > balance:             0.09725912
   > gas used:            274088 (0x42ea8)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00274088 ETH

   -------------------------------------
   > Total cost:          0.00274088 ETH


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > block number:        7775230
   > block timestamp:     1665858701
   > account:             0x68402f698a9533C933725c1754f48022c6845bed
   > balance:             0.09349349
   > gas used:            330628 (0x50b84)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00330628 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > block number:        7775231
   > block timestamp:     1665858703
   > account:             0x68402f698a9533C933725c1754f48022c6845bed
   > balance:             0.09018709
   > gas used:            330640 (0x50b90)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0033064 ETH


   Deploying 'RetailerRole'
   ------------------------
   > block number:        7775232
   > block timestamp:     1665858705
   > account:             0x68402f698a9533C933725c1754f48022c6845bed
   > balance:             0.08688069
   > gas used:            330640 (0x50b90)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0033064 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > block number:        7775233
   > block timestamp:     1665858707
   > account:             0x68402f698a9533C933725c1754f48022c6845bed
   > balance:             0.08357429
   > gas used:            330640 (0x50b90)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0033064 ETH


   Deploying 'SupplyChain'
   -----------------------
   > block number:        7775234
   > block timestamp:     1665858713
   > account:             0x68402f698a9533C933725c1754f48022c6845bed
   > balance:             0.05776869
   > gas used:            2580560 (0x276050)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0258056 ETH

   -------------------------------------
   > Total cost:          0.03903108 ETH

Summary
=======
> Total deployments:   6
> Final cost:          0.04177196 ETH




Starting migrations...
======================
> Network name:    'goerli'
> Network id:      5
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x339034784c7d5452e8b7b0b46df5f7ad1ea37aa83b5c9356525cd102cefceeb7
   > Blocks: 0            Seconds: 12
   > contract address:    0x2006f92709ecebE65cEeC100b1A25Bc1b7527BdC
   > block number:        7775234
   > block timestamp:     1665858732
   > account:             0x68402f698a9533C933725c1754f48022c6845bed
   > balance:             0.09725912
   > gas used:            274088 (0x42ea8)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00274088 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00274088 ETH


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > transaction hash:    0xd8c142d825a5ce830b56adacedc555032efc1f34208e35cb2ed65df2dd478ba1
   > Blocks: 1            Seconds: 20
   > contract address:    0x038e57e9Ced1f0bEd9664beA79aA96bD99B1bc82
   > block number:        7775236
   > block timestamp:     1665858780
   > account:             0x68402f698a9533C933725c1754f48022c6845bed
   > balance:             0.09349349
   > gas used:            330628 (0x50b84)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00330628 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > transaction hash:    0xc5211d7ff2ce97577913aacedea2f1cb4b8124bf93eb753ece676aa474124530
   > Blocks: 2            Seconds: 17
   > contract address:    0xae8Fc4FBD620aFd1a917EB5593Ab332154A72e37
   > block number:        7775238
   > block timestamp:     1665858804
   > account:             0x68402f698a9533C933725c1754f48022c6845bed
   > balance:             0.09018709
   > gas used:            330640 (0x50b90)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0033064 ETH


   Deploying 'RetailerRole'
   ------------------------
   > transaction hash:    0x69d01adb9c273121ef0338e0ce554523ccc01dc31c1b7124c0c82f801c122f6a
   > Blocks: 1            Seconds: 17
   > contract address:    0x459c90617727E44Ee4982A5A899ce5d8Cf905CAf
   > block number:        7775240
   > block timestamp:     1665858828
   > account:             0x68402f698a9533C933725c1754f48022c6845bed
   > balance:             0.08688069
   > gas used:            330640 (0x50b90)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0033064 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > transaction hash:    0x79544e7dd635b760f14a6f8e2aaeba3c8ef93f253ce153e003a6116318a00052
   > Blocks: 2            Seconds: 17
   > contract address:    0xF08a9E02cfb6356D1BCeCF314137DC8eB1B5C542
   > block number:        7775242
   > block timestamp:     1665858852
   > account:             0x68402f698a9533C933725c1754f48022c6845bed
   > balance:             0.08357429
   > gas used:            330640 (0x50b90)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0033064 ETH


   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0xff0beb62389f1421311576ecc48f707e726318c62e6bb9e1f53a154a9113decb
   > Blocks: 1            Seconds: 17
   > contract address:    0xEAf4Bf83d1b313eBCd28bd7F1CaD1c584080CAa0
   > block number:        7775244
   > block timestamp:     1665858876
   > account:             0x68402f698a9533C933725c1754f48022c6845bed
   > balance:             0.05776869
   > gas used:            2580560 (0x276050)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0258056 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.03903108 ETH

Summary
=======
> Total deployments:   6
> Final cost:          0.04177196 ETH
```

