const yargs = require('yargs');
const { addNote, removeNote, listNote, readNote} = require('./notes');

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
         addNote(argv);
    }     
    
});


yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        removeNote(argv);
    }

});


yargs.command({
    command: 'list',
    describe: 'Add a note',
    handler: () => {
        listNote();
    }

});


yargs.command({
    command: 'read',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv) => {
        readNote(argv)
    }

});

yargs.parse();