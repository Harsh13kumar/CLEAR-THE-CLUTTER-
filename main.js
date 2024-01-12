// Drop you files in this folder You want to order 
import fs from "fs/promises"
import fsnn from "fs"
import path from "path"
// if there is any error then change basePath👇 and copy the relative path of this folder
// call reset() when to unorder 
const basePath = "/home/harsh/Coding/Files/Clear the clutter"
let Files = await fs.readdir(basePath)
for (const item of Files) {
    let ext = item.split(".")[1]
    if (item.split(".").length > 1) {
    }
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        if (fsnn.existsSync(path.join(basePath, ext))) {
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))

        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        }
    }
}
// run multiple time whem there is an error in reset
// This is a function that reset the clutter make sure to call it . After calling remove it  
async function reset(){
    for (const item of Files) {
     let folder=item.split(".").length > 1
     if (!folder) {
        let checkfile = await fs.readdir(item)
        for (const i of checkfile) {
            fs.rename(path.join(basePath,item,i),path.join(basePath,i))
        }
        fs.rmdir(item)
     }
        
    }
}
