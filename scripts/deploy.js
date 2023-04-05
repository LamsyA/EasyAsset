const hre = require("hardhat");

async function main() {
  const EasyAsset = await hre.ethers.getContractFactory("EasyAsset");
  const easyAsset = await EasyAsset.deploy("EassyAssetNFT", "EAT");

  await easyAsset.deployed();
  
  const gasEstimateCreateAsset = await easyAsset.estimateGas.createAsset("HJs", "qiuq","oqp", ethers.utils.parseEther("1"));
  // console.log("Gas estimate for createAsset:", gasEstimateCreateAsset.toString());
  
  // const gasEstimateGetAssets = await easyAsset.estimateGas.getAssets();
  // console.log("Gas estimate for getAssets:", gasEstimateGetAssets.toString());
  
  // const gasEstimateGetBuyers = await easyAsset.estimateGas.getBuyers();
  // console.log("Gas estimate for getBuyers:", gasEstimateGetBuyers.toString());

  // const gasEstimateBuyAsset = await easyAsset.estimateGas.buyAsset(0,{ value: ethers.utils.parseEther("1") });
  // console.log("Gas estimate for buyAsset:", gasEstimateBuyAsset.toString());

  // const gasEstimateRefund = await easyAsset.estimateGas.refund(0);
  // console.log("Gas estimate for refund:", gasEstimateRefund.toString());

  // const gasEstimateConfirm = await easyAsset.estimateGas.confirm(0);
  // console.log("Gas estimate for confirm:", gasEstimateConfirm.toString());

  // const gasEstimateProbe = await easyAsset.estimateGas.probe(0);
  // console.log("Gas estimate for probe:", gasEstimateProbe.toString());

  // const gasEstimateReleaseAsset = await easyAsset.estimateGas.releaseAsset(0);
  // console.log("Gas estimate for releaseAsset:", gasEstimateReleaseAsset.toString());

  console.log(`EasyAsset deployed to ${easyAsset.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
