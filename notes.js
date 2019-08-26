
const {fileOperations} = require('./lib/index');
const addNote = (argv)=>{
    fileOperations.addFile(argv.title, argv.body);
};

const removeNote = (argv) => {
    fileOperations.removeFile(argv);
};

const listNote = () => {
    fileOperations.listFile();
};

const readNote = (argv) => {
    fileOperations.readFile(argv);
};


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}