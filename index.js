const fs = require('fs');
const folderpath = "D:\\firstapp";
fs.readdir(folderpath , (err,files)=>{
    console.log("files : " + files);
    files.forEach((FileName , index)=>{
        console.log("FileName : " + FileName);
    })``
});
