/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

let myNFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (myName,myType,myLegs,myHairColor) {
   
    const NFT = {
        name : myName,
        type: myType,
        legs: myLegs,
        hair_color: myHairColor

    };
    myNFTs.push(NFT);
    console.log("\n",NFT.name," Minted Successfully !!");

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<myNFTs.length;i++){
        console.log("\nID : \t",i+1);
        console.log("Name : ",myNFTs[i].name);
        console.log("Type : ",myNFTs[i].type);
        console.log("Legs : ",myNFTs[i].legs);
        console.log("Hair-Color : ",myNFTs[i].hair_color);

    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Supplies = ",myNFTs.length);
}

// call your functions below this line

mintNFT("Suryansh","Person",2,"Black");
mintNFT("Rockie","Dog",4,"Brown");
mintNFT("Tom","Cat",4,"Grey");
listNFTs();
getTotalSupply();
