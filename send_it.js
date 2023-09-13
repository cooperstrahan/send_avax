const privateKey = "PRIVATE_KEY_HERE";

const nodeURL = "https://api.avax-test.network/ext/bc/C/rpc";

const ethers = require("ethers");
(async () => {
  const provider = new ethers.JsonRpcProvider(nodeURL);
  const signer = new ethers.Wallet(privateKey, provider);

  const tx = await signer.sendTransaction({
    to: "REPLACE_WITH_TO_ADDRESS",
    value: ethers.parseUnits("10", "ether"),
  });
  console.log(tx);
})();
