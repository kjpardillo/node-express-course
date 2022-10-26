const { writeFile } = require('fs').promises;


const makeFile = async () => {
    try { 
        for (let i = 1; i < 11; i++) { 
            if (i > 1) {
                await writeFile('./content/practice2.txt', 
                `This is line ${i} \n`, { flag: 'a' })
            } else {
                await writeFile('./content/practice2.txt',
                `This is the first line. \n`)
            } }
    } catch (error) {
        console.log(error)
    }
}

makeFile()