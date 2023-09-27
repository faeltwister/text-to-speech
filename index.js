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

console.log(chalk.yellow("Você deseja inserir o texto pelo terminal ou por arquivo? "));
console.log(chalk.blueBright("[1] - Terminal"));
console.log(chalk.yellowBright("[2] - Arquivo"));

prompt.start();
prompt.get(['option'],(err,result)=>{
    if(result.option === '1'){
        console.log(chalk.bgGrey("Insira o texto: "));
        prompt.get(["text"],(err,result)=>{

            //salvar o texto em uma pasta
            const text = result.text ;
            fs.writeFileSync(`texts/texts-${Date.now()}.txt`, text);
        });
    }
})
