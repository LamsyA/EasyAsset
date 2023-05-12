const {expect} = require('chai');
const {ethers} = require('hardhat')

describe('EasyAsset', () => {
    let EasyAsset, contract,owner, buyerAddress, addr1

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
        [owner, buyerAddress, addr1] = await ethers.getSigners();
        // console.log("owner: " + owner.address);
        contract = await EasyAsset.deploy( "EasyAsset", "EAS")
        await contract.deployed();
    })

describe(" Asset Creation ", () => {
       beforeEach( async() => {
          const b = await contract.createAsset(title,  description, credential, price)
        //   console.log("bb ", b.address)

        })
        it('should contain  list of  created Asset', async() => {
            result = await contract.getAssets()
            // console.log("bb->>>>>>>>>>>>>> ", result)
            expect(result).to.have.length(1);
            
        })
        beforeEach( async() => {
            result = await contract.getAsset(id)
            await contract.connect(buyerAddress).buyAsset(0, {
                value: price
              })
            result = await contract.getBuyer(id) 
            // console.log("get buyer", result)
            expect(result.owner).to.be.eq(buyerAddress.address)
            // expect(result.status).to.equal(1)
        })
        it('should  refund buyer', async() => {
            result = await contract.getBuyer(id);
            buyer =  await contract.connect(buyerAddress).refund(id);
 
             result = await contract.getAsset(id);
            //  console.log("get buyer", buyer)
 
 
            expect(buyer).to.emit(result.staus, buyer.status)
 
         })
        it('should check the status of the Asset', async() => {
           
            result = await contract.getAsset(0) 
            
            expect(result.status).to.equal(1)
        })
        it('should check for the confirmation of the Asset', async() => {
            // result = await contract.getBuyer(0)
            // console.log("buyerAddress ",result)
           result = await contract.connect(buyerAddress).confirm(0)
            result = await contract.getAsset(0) 
            // console.log("result", result)
            expect(result.status).to.equal(4)
        })
       
        it('should  probe asset', async() => {
            // result = await contract.getBuyer(0);
             const buyer = await contract.Probe(0, {from: owner.address});
            result = await contract.getAsset(0);

             expect(result.status).to.equal(2);
            //  expect(result.refunded).to.equal(true);
         })
         it('should get the buyer of the asset', async() => {

            result = await contract.getBuyer(id);
            // console.log('list of buyer', result);

             expect(result.owner).to.be.eq(buyerAddress.address);
            //  expect(result.owner).to.equal(true);
         })
        
     })
})
