# DeFi-App

Tools and Technology Used:
Solidity: Solidity is a programming language specifically designed for developing smart contracts on the 
Ethereum blockchain. It is a statically-typed, contract-oriented, and high-level language that allows 
developers to define the behavior and logic of smart contracts that run on the Ethereum Virtual Machine 
(EVM). Solidity is the most widely used programming language for developing smart contracts and DApps 
on the Ethereum blockchain. In our DeFi web app with yield farming, Solidity can be used to 
implement the smart contracts that govern the staking, unstaking, yield farming, and other 
functionalities of the protocol. Solidity provides features such as contract inheritance, events, 
modifiers, and libraries that enable developers to write complex smart contracts with various 
functionalities. Solidity code is compiled into bytecode that is executed on the Ethereum 
blockchain, and it is typically deployed using Ethereum development tools such as Remix or 
Truffle.

Ganache: Ganache is a personal blockchain emulator developed by Truffle for local Ethereum 
development and testing. It allows developers to create and manage their own private Ethereum 
blockchain networks for development purposes without needing to interact with the real Ethereum 
network. Ganache provides a simple and user-friendly interface for creating and managing 
Ethereum accounts, generating test Ether (ETH) for transactions, and simulating various 
blockchain scenarios for testing purposes.

Web3.js: Web3.js is a collection of libraries that allows us to interact with a local or remote 
ethereum node using HTTP, IPC or WebSocket. web3.js is a JavaScript library that provides a 
convenient interface for interacting with the Ethereum blockchain from a web browser or a Node.js 
environment. It allows developers to send and receive transactions, interact with smart contracts, 
manage accounts, and perform other Ethereum-related operations using JavaScript code. web3.js 
is one of the most popular libraries for integrating Ethereum functionality into web applications 
and is widely used in the development of DApps and DeFi protocols. In our DeFi web app with 
yield farming, web3.js can be used to interact with the Ethereum blockchain and smart contracts 
from the front-end or back-end of the web app. It provides functions for connecting to Ethereum 
nodes, managing accounts and private keys, sending and receiving transactions, calling smart 
contract functions, and listening to events emitted by smart contracts. web3.js simplifies the 
complexities of interacting with the Ethereum blockchain, allowing developers to build seamless 
user experiences in the web app.

Truffle: Truffle is a development framework for building, testing, and deploying smart contracts 
on the Ethereum blockchain. It provides a suite of tools and utilities that streamline the 
development process for Ethereum-based applications, including DApps and DeFi protocols. 
Truffle is written in JavaScript and is compatible with both Ethereum Classic and Ethereum 
networks.

MetaMask: MetaMask is a popular Ethereum wallet and browser extension that allows users to 
interact with decentralized applications (DApps) on the Ethereum blockchain. It serves as a bridge 
between a user's web browser and the Ethereum blockchain, enabling users to manage their 
Ethereum accounts, send and receive Ether (ETH) and other ERC-20 tokens, and interact with 
DApps, including DeFi protocols, seamlessly. In the context of our DeFi web app with yield 
farming, MetaMask can be used as a wallet to store and manage the user's cryptocurrencies, 
including the tokens they stake, earn as rewards, or use for yield farming. Users can install the 
MetaMask extension in their web browser, create a new Ethereum account or import an existing 
one, and securely store their private keys or seed phrases locally.MetaMask also provides a userfriendly interface for interacting with DeFi protocols. Users can connect their MetaMask wallet to 
the DeFi web app, sign transactions to stake or unstake tokens, provide liquidity to liquidity pools, 
claim rewards, and perform other actions required by the yield farming process, all within the web 
app's interface.MetaMask offers additional security features, such as the ability to set transaction 
gas fees, review and approve transactions before they are executed, and manage multiple Ethereum 
accounts. It also provides a customizable user interface, allowing users to switch between different 
Ethereum networks (e.g., mainnet, testnets) and manage their tokens and transactions 
conveniently.

Smart contracts used:
• DaiToken.sol: Here, we use a user-defined DAI token which acts like real DAI token. 
• DappToken.sol: Dapp token is a new token that are deposited to the user's reward balance 
• TokenFarm.sol: This contract acts like a digital bank. Users earn interest(DAPP token 
based on the staking balance). That is, it accepts DAI tokens and issues Dapp tokens 
• Migration.sol: Moves the existing or new contracts and their data, into a new contract 
management platform
