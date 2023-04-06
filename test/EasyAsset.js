const {expect} = require('chai');
const {ethers} = require('hardhat')

describe('EasyAsset', () => {
    let EasyAsset, contract,owner, addr2, addr1

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
        [owner, addr2, addr1] = await ethers.getSigners();
        contract = await EasyAsset.deploy( "EasyAsset", "EAS")
        await contract.deployed();
    })

describe(" Asset Creation ", () => {
       beforeEach( async() => {
          const b = await contract.createAsset(title,  description, credential, price)
        //   console.log("bb ", b)

        })
        it('should contain  list of  created Asset', async() => {
            result = await contract.getAssets()
            expect(result).to.have.length(1);
            
        })
        it('should be able to buy Asset and revert with buyer address as the owner', async() => {
            result = await contract.getAsset(id)
            await contract.connect(addr2).buyAsset(0, {
                value: price
              })
            result = await contract.getAsset(id) 
            expect(await contract.ownerOf(id)).to.revertedWith(addr2.address)
            // expect(result.status).to.equal(1)
        })
        it('should check the status of the Asset', async() => {
            result = await contract.getAsset(0)
         const r =   await contract.connect(addr1).buyAsset(id, { 
                value: price
              })
            //   console.log("rrrr ", r)
            result = await contract.getAsset(0) 
            
            expect(result.status).to.equal(1)
        })
        it('should check for the confirmation of the Asset', async() => {
            result = await contract.getBuyer(0)
            // console.log("addr2 ",result)
            await contract.connect(addr1).confirm(0)
            result = await contract.getAsset(0) 
            // console.log("result", result)
            expect(result.status).to.equal(4)
        })
        it('should  refund buyer', async() => {
        //    result = await contract.getBuyer(0);
            await contract.connect(addr2).refund(0);
           buyer = await contract.getBuyer(0);

           expect(await contract.ownerOf(id)).to.be.revertedWith(addr2.address)

        })
        it('should  probe asset', async() => {
            // result = await contract.getBuyer(0);
             const buyer = await contract.Probe(0, {from: owner.address});
            result = await contract.getAsset(0);

             expect(result.status).to.equal(5);
            //  expect(result.refunded).to.equal(true);
         })
        
     })
})
