import { generateEVM } from "./functions.js"
import { general } from "./settings.js"
import { logger } from "./helpers.js"
import fs from "fs"



fs.writeFileSync("./result/address.txt", "")
fs.writeFileSync("./result/private.txt", "")
fs.writeFileSync("./result/mnemonic.txt", "")





logger.info(`Starting to generate ${general.walletNumber} ${general.walletType} wallets`)


for(let i = 0; i < general.walletNumber; i++){
    
    if(general.walletType.toLowerCase() == 'evm'){
        await generateEVM()
    }
}
 


logger.info(`----Done--Done--Done--Done--Done--Done--Done--Done----`)