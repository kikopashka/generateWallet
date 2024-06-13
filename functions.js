import { ethers } from "ethers"
import fs from "fs"





export async function generateEVM(){
    const wallet = ethers.Wallet.createRandom()
    let address = `${wallet.address}\n`
    let privateKey = `${wallet.privateKey}\n`
    let mnemonic = `${wallet.mnemonic.phrase}\n`
    fs.appendFileSync("./result/address.txt", address)
    fs.appendFileSync("./result/private.txt", privateKey)
    fs.appendFileSync("./result/mnemonic.txt", mnemonic)
}