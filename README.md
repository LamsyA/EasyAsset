# Easy Asset Project
Easy Asset is a ERC 721 NFT

Easy Asset is a Decentralised Application where you can mint your asset as NFT and display it for sale on 
the App. All Minted asset are done on-chain.

Anybody can buy asset on the App and transfer of ownership will be done once payment has been confirm.

- If Asset is a Tangible Asset (Phyiscal Asset) Buyer will pay for Asset and checkout Asset and 
supporting Document before confirm the Assest on the APP

Note: Only Legal Document of Asset are Minted and Transfer of ownership is done once confirm buy the buyer
that the Asset 


to clone this project run 

git clone https://github.com/LamsyA/EasyAsset 

Try running some of the following tasks:
 

```shell
npx hardhat help
npx hardhat test

npx hardhat node
npx hardhat run scripts/deploy.js
```

Live link >>https://easy-asset.vercel.app/<<

How to use the website:
change your wallet network to MUMBAI polygon (testnet)
connect your wallet.

Mint Asset suing the mint button, fill all the necessary details like:

the original crediential of the asset, the Name of the asset,

the description about the asset.

buyer can buy asset buy pressing the buy Asset button

once a buyer has an asset, the buyer can request for refund if they are not comfortable with asset.

Note, buyer can not request for refund when they have confirm the asset.

buyer can confirm the asset once they are comfortable with the asset.

Once the buyer comfirm the asset the seller of the asset will be credited.


Asset can be probe by admin using the probe button, only admin can call the probe button. 

meaning of the following indicator:
- OPEN - The asset is opened for buying
- PAID - A buyer is has paid but yet to confirm the asset
- PROBE - Asset is been held (no one can buy the asset, asset has been seized)
- SOLD - Asset has been confirmed by the buyer and ownership has been transfered to the buyer.  
