const {expect} = require('chai');
const {ethers} = require('hardhat')

describe('EasyAsset', () => {
    let Contract, contract,holder

    // parameters for creating an Asset
    const id = 0;
    const title = "One bedroom Apartment ";
    const description = " this is a description";
    const credentials = "https://github.com/lamsyA";
    const timestamp = Date.now() + 3600 * 1000 * 24;
    const price = 1_000_000_000;

    // parameters for buying an asset


    beforeEach( async () => {
        Contract = await ethers.getContractFactory("EasyAsset")
    })
})