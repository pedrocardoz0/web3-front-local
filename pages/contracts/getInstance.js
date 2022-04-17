import Web3 from "web3";

function getInstance() {
    const web3 = new Web3("http://127.0.0.1:8545");

    const contract = new web3.eth.Contract(
        [
            {
                inputs: [
                    {
                        internalType: "uint256",
                        name: "_myuint",
                        type: "uint256",
                    },
                ],
                name: "setMyUint",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
            {
                inputs: [],
                name: "myUint",
                outputs: [
                    {
                        internalType: "uint256",
                        name: "",
                        type: "uint256",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
        ],
        "0x1058B9B1859cdD3ed872e15C9ce88F533a80B00B"
    );

    return contract;
}

export default getInstance;
