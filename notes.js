
const {fileOperations} = require('./lib/index');
const addNote = (argv)=>{
    debugger
    fileOperations.addFile(argv.title, argv.body);
};

const removeNote = (argv) => {
    fileOperations.removeFile(argv.title);
};

const listNote = () => {
    fileOperations.listFile();
};

const readNote = (argv) => {
    fileOperations.readFile(argv.title);
};



module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}