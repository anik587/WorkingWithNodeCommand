const yargs = require('yargs');
const { addNote, removeNote, listNote, readNote} = require('./notes');
const { getLocation } = require('./lib/getPosition.js');
const { getWeather } = require('./lib/getWeather.js');

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


yargs.command({
    command: 'address',
    describe: 'Provide an address',
    builder: {
        city: {
            describe: 'Address Required',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log(argv)
        getWeatherData(argv);
    }

});


const getWeatherData = (argv) => {
    let latitude = '';
    let longitude = '';
    let url = '';
    getLocation(argv.city, (error, data) => {
        if (error) {
            console.log(error);
        } else {
            latitude = data[0];
            longitude = data[1];
            url = `https://api.darksky.net/forecast/966f210d15503070d798f9e8064091a9/${latitude},${longitude}?units=si&lang=en`;
            getWeather(url, (error, data) => {
                if (error) {
                    console.log(`error ${error}`);

                } else {
                    console.log(data[0]);
                    console.log(data[1]);
                }
            });

        }

    })
}


yargs.parse();