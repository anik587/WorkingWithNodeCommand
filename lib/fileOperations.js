const chalk = require('chalk');
const fs = require('fs');

const loadNotes = ()=>{
    try{
        let dataBuffer =  fs.readFileSync('data.json') 
        let dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }catch(e){
        return [];
    }
};

const writeNotes = (data)=>{
    try{
        fs.writeFileSync('data.json', JSON.stringify(data));
    }catch(e){
        console.log(chalk.red.inverse('File Write Failed'));
    }
};


const addFile = (title, body)=>{
    let data = {
        title: title,
        body: body
    };
    let notes = loadNotes();
    let duplicateNotes = notes.find((d)=>{
        return d.title === data.title
    })
    if(!duplicateNotes){
        notes.push((data));
        writeNotes(notes);
        console.log(chalk.green.inverse('Note added!!'))
    }else{
        console.log(chalk.red.inverse('Duplicate Note'))
    }
};

const removeFile = (title)=>{
    let notes = loadNotes();
    let deletedNote = notes.filter((d) => d.title !== title );
    if (deletedNote.length === notes.length){
        console.log(chalk.red.inverse('Note Not Found!!'));
    }else{
        console.log(chalk.green.inverse('Note removed!!'));
        writeNotes(deletedNote);

    }
 };

const listFile = ()=>{
    let notes = loadNotes();
    notes.map((d,i)=>{
        console.log(chalk.white.inverse(i));
        console.log(chalk.yellow.inverse(d.title));
        console.log(chalk.blue.inverse(d.title));
    })
};

const readFile = (title)=>{
    let notes = loadNotes();
    let readNotes = notes.find((d) => d.title === title);
    if (readNotes){
        console.log(chalk.yellow.inverse(readNotes.title));
        console.log(chalk.green.inverse(readNotes.body));
    }else{
        console.log(chalk.red.inverse('Note Not Found'));
    }
};

module.exports = {
    addFile : addFile,
    removeFile : removeFile,
    listFile : listFile,
    readFile : readFile,
}