import say from "say" ;
import fs from "fs" ;
import chalk from "chalk" ;
import prompt from "prompt" ;

let voices = 'Microsoft Zira Desktop' ;
// Microsoft David Desktop
//Microsoft Maria Desktop : PT-BR

//pasta de textos

if(!fs.existsSync("texts")){
    fs.mkdirSync("texts");
}

//pasta de audios

if(!fs.existsSync("audios")){
    fs.mkdirSync("audios");
}

tela();
escolha();



prompt.start();
prompt.get(['option'],(err,result)=>{
    if(result.option === '1'){
        console.log(chalk.bgGrey("Insira o texto: "));
        prompt.get(["text"],(err,result)=>{

            //salvar o texto em uma pasta
            const text = result.text ;
            fs.writeFileSync(`texts/texts-${Date.now()}.txt`, text);
            playAudio(text);
            exportAudio(text);
        });
    }else if(result.option === '2'){
        console.log(chalk.yellow('Insira o caminho do arquivo'));
        prompt.get(['filePath'],(err,result)=>{
            const filePath = result.filePath ;
            fs.readFile(filePath, "utf-8", (err,data)=>{
                playAudio(data);
                exportAudio(data);
                
            });
        });
    }
});

//play audio

function playAudio(text) {
    say.speak(text, voices, 1, (err)=>{
        if(err){
            console.err(chalk.bgRed(err));
        }
        console.log(chalk.green("Audio gerado com sucesso!"));
    })
}

function exportAudio(data){
    say.export(data, voices, 1, `./audios/audio-${Date.now()}.wav`, (err)=>{
        if(err){
            console.err(chalk.bgRed(err));
        }
        console.log(chalk.blue("Aquivo criado com sucesso!"));
    });
}

function tela() {
    console.log(chalk.blue(`                                                                        
                                  ##########      
                                  ####################      
                            ##########################      
                            ##########################      
                            ##########################      
                            ##########################      
                            ##############        ####      
                            ####                    ##      
                            ####                    ##      
                            ####                    ##      
                            ####                    ##      
                            ####                    ##      
                            ####                    ##      
                            ####                    ##      
                            ####                  ####      
                            ####          ############      
                          ######        ##############      
                  ##############        ##############      
                ################        ##############      
                ################          ##########        
                  ############                              
                  ##########             
    `));
}

function escolha(){
    console.log(chalk.yellow("Você deseja inserir o texto pelo terminal ou por arquivo? "));
    console.log(chalk.blueBright("[1] - Terminal"));
    console.log(chalk.yellowBright("[2] - Arquivo"));
}