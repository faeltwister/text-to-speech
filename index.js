import say from "say" ;
import fs from "fs" ;
import chalk from "chalk" ;
import prompt from "prompt" ;

//pasta de textos

if(!fs.existsSync("texts")){
    fs.mkdirSync("texts");
}

//pasta de audios

if(!fs.existsSync("audios")){
    fs.mkdirSync("audios");
}