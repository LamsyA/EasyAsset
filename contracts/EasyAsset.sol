// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

// NFT marketplace contract
contract EasyAsset is ERC721, ReentrancyGuard {
    /*
    struct that holds the Asset owner details
    */
    uint256 assetCount;
    // uint256 balanceFee;

    struct Asset {
        address seller;
        uint256 id;
        string title;
        string description;
        string credential;
        uint256 timestamp;
        uint256 price;
        bool probe;
        bool bought;
        assetStatus status;
    }
    // address[] private assetOwner;

    struct buyer {
        uint256 id;
        address owner;
        uint256 amountpaid;
        uint256 timestamp;
        bool refunded;
        bool paid;
        bool checked;
        string credential;
    }
    event refundAction(
        assetStatus,
        bool
    );

    // event sold(bool confirm, assetStatus status);

    event Action(
        address buyer,
        address seller,
        uint256 timestamp,
        uint256 amount,
        bool paid
    );
    // Enum to track the status of an asset
    enum assetStatus {
        OPEN,
        PENDING,
        SOLD,
        HELD
    }

    // Array to store new buyer
    buyer[] Newbuyer;

    mapping(uint256 => buyer) buyerMap;
    // uint256[] private TokenIdNumber;
    Asset[] assetArray;

    mapping(uint256 => Asset) Assets;
    //  event is that holds asset creation
    event assetCreation(
        address owner,
        uint256 indexed id,
        string credential,
        uint256 timestamp,
        uint256 price
    );

    // map all buyer into buyerof to store details all as a key-value pair
    // mapping(uint256 => buyer[]) public buyerof;
    // keep track of mintedCredential that exist
    mapping(string => bool) private mintedCredential;
    // keep track of asset that exist
    mapping(string => bool) AssetExist;
    mapping(uint256 => bool) AssetIdExist;

    event assetTransfer(
        address from,
        address to,
        uint256 tokenId,
        string credential,
        uint timestamp
    );

    address public owner;


    constructor(
        string memory _name,
        string memory _symbol
    )
        // uint256 _royalityFee
        ERC721(_name, _symbol)
    {
        owner = payable(msg.sender);
    }



    function createAsset(
        string memory title,
        string memory description,
        string memory credential,
        uint256 price
    ) public returns (bool) {
        // set all condition
        require(bytes(title).length > 0, "Title must be greater than 0");
        require(bytes(description).length > 0, "Description cannot be empty");
        require(bytes(credential).length > 0, "Image cannot be empty");
        require(price > 0 ether, "cost must be greater than 0");
        require(!AssetExist[credential], "Asset already exist");

        //  initialize a counter;
        uint assetCounter = assetCount++;
        // assetCounter++;
        // create a new Asset and set the details
        Asset storage asset = Assets[assetCounter];

        asset.seller = msg.sender;
        asset.id = assetCounter;
        asset.title = title;
        asset.description = description;
        asset.credential = credential;
        asset.timestamp = block.timestamp;
        asset.price = price;

        // assetOwner.push(msg.sender);

        assetArray.push(asset);

        // TokenIdNumber.push(assetCounter);

        AssetExist[credential] = true;

        AssetIdExist[assetCounter] = true;

        emit assetCreation(
            msg.sender,
            assetCounter,
            credential,
            block.timestamp,
            price
        );
        _safeMint(msg.sender, assetCounter);

        return true;
    }

    function buyAsset(uint256 id) public payable nonReentrant {
        require(
            assetArray[id].status == assetStatus.OPEN,
            "Asset is undegoing Negotiation"
        );
        // require(msg.value > 0 ether, "value cannot be Zero");

        require(
            msg.sender != assetArray[id].seller,
            "You cannot buy your Asset"
        );
        require(AssetIdExist[id], "Asset does not Exist");
        require(msg.value == assetArray[id].price, "Incorrect payment amount");

        // create a new buyer and set the details

        buyer storage buy = buyerMap[id];
        buy.id = id;
        buy.owner = msg.sender;
        buy.amountpaid = msg.value;
        buy.timestamp = block.timestamp;
        // buy.refunded = false;
        // buy.buyingpoint = 1;
        buy.paid = true;
        // buy.checked = false;

        // buyerof[id].push(buy);

        Newbuyer.push(buy);

       assetArray[id].bought = true;

        emit Action(
            msg.sender,
            assetArray[id].seller,
            block.timestamp,
            msg.value,
            true
        );

        assetArray[id].status = assetStatus.PENDING;
        
    }

    function pay(address to, uint256 amount) internal {
        (bool success, ) = payable(to).call{value: amount}("");
        require(success, "Failed to send Ether");
    }

    function refund(uint256 id) public {
        require(
            assetArray[id].status == assetStatus.PENDING &&
                msg.sender == Newbuyer[id].owner &&
                !Newbuyer[id].refunded,
            "Only the buyer can call this function"
        );
            pay(Newbuyer[id].owner, assetArray[id].price);
            assetArray[id].status = assetStatus.OPEN;
            Newbuyer[id].refunded = true;
            emit refundAction( assetArray[id].status,Newbuyer[id].refunded  );
        }

    // receive() external payable {}

    //check the balance of the contract.
    // function balance() public view returns (uint256) {
    //     return address(this).balance;
    // }

    function Probe(uint256 id) public {
        require(
            msg.sender == owner && !assetArray[id].probe,
            "Only Owner has the authority to can probe Asset, Process Reversed"
        );
        assetArray[id].probe = true;

        if (assetArray[id].status == assetStatus.PENDING) {
            pay(Newbuyer[id].owner, assetArray[id].price);
        }
        assetArray[id].status = assetStatus.HELD;
    }

    function releaseAsset(uint256 id) public {
        require(
            msg.sender == owner && assetArray[id].status == assetStatus.HELD,
            "only the owner can release Asset"
        );
        assetArray[id].probe = false;
        assetArray[id].status = assetStatus.OPEN;
    }

    function confirm(uint256 id) public {
        //check if asset exist
        require(AssetIdExist[id], "Asset does not Exist");
        //check the status of the asset
        //the asset must be set to pending before approval
        require(
            assetArray[id].status == assetStatus.PENDING,
            "Asset is undergoing Negotiation"
        );

        // require(msg.sender ==  assetArray[id].seller || msg.sender ==  buyerof[id][id].owner , "Only the buyer and the owner can call this function");
        //only the initial buyer and the owner can call this function
        require(
            msg.sender == Newbuyer[id].owner,
            "Only the buyer can call this function"
        );
        //this function can only be called once by the buyer of the asset and the asset owner;
        // require(assetArray[id].checked == false   || buyerof[id][id].checked == false  , "You cannot buy your Asset");
        require(!Newbuyer[id].checked, "You Have already Confirm the Assest");

        // change the checking status to true
        Newbuyer[id].checked = true;

        // uint256 fund = assetArray[id].price;
        //  pay the asset owner
        pay(assetArray[id].seller, assetArray[id].price);

        assetArray[id].price -= Newbuyer[id].amountpaid;
        assetArray[id].status = assetStatus.SOLD;
        // transfer ownership
        _transfer(assetArray[id].seller, msg.sender, assetArray[id].id);
        Newbuyer[id].credential = assetArray[id].credential;
        assetArray[id].seller = msg.sender;

        emit assetTransfer(
            assetArray[id].seller,
            Newbuyer[id].owner,
            assetArray[id].id,
            Newbuyer[id].credential,
            block.timestamp
        );

        // emit sold(Newbuyer[id].checked, assetArray[id].status);
    }

    function getAssets() public view returns (Asset[] memory) {
        return assetArray;
    }

    function getBuyers() public view returns (buyer[] memory) {
        return Newbuyer;
    }

    function getBuyer(uint256 buyerId) public view returns (buyer memory) {
        return buyerMap[buyerId];
    }

    function getAsset(uint256 _id) public view returns (Asset memory) {
        return assetArray[_id];
    }
}