const {expect} = require('chai');
const {ethers} = require('hardhat')

describe('EasyAsset', () => {
    let EasyAsset, contract,owner, holder

    // parameters for creating an Asset
    const id = 0;
    const title = "One bedroom Apartment ";
    const description = " this is a description";
    const credential = "https://github.com/lamsyA";
    const timestamp = Date.now() + 3600 * 1000 * 24;
    const price = ethers.utils.parseEther("1");

    // parameters for buying an asset


beforeEach( async () => {
        EasyAsset = await ethers.getContractFactory("EasyAsset");
        [owner, holder, addr1] = await ethers.getSigners();
        contract = await EasyAsset.deploy( "EasyAsset", "EAS")
        await contract.deployed();
    })

describe(" Asset Creation ", () => {
       beforeEach( async() => {
           await contract.createAsset(title,  description, credential, price)
        })
        it('should contain  list of  created Asset', async() => {
            result = await contract.getAssets()
        expect(result).to.have.length(1);
        })
        it('should be able to buy Asset and revert with buyer address as the owner', async() => {
            result = await contract.getAsset(id)
            await contract.connect(holder).buyAsset(result.id, {
                value: price
              })
            result = await contract.getAsset(id) 
            expect(await contract.ownerOf(id)).to.revertedWith(holder.address)
            // expect(result.status).to.equal(1)
        })
        it('should check the status of the Asset', async() => {
            result = await contract.getAsset(id)
            await contract.connect(holder).buyAsset(result.id, {
                value: price
              })
            result = await contract.getAsset(id) 
            
            expect(result.status).to.equal(1)
        })
        it('should refund buyer', async() => {
            result = await contract.getAsset(id)
            await contract.connect(holder).refund(result.id, {
                from:holder.address,
            })
            // result = await contract.getBuyer(id) 
            
            expect(result.status).to.equal(0)
            
            // expect(result.refunded).to.equal(true)
        })
     })
})
