const {ethers} = require("hardhat");

async function deploy() {
    const RoosterToken = await ethers.getContractFactory("RoosterToken");

    const roosterToken = await RoosterToken.deploy(123_000_000);
    console.log(`Contract deployed to: ${roosterToken.address}`);
}

deploy().then(
    () => {
        process.exit(0);
    }
).catch((error)=>{
    console.log(error);
    process.exit(1);
})