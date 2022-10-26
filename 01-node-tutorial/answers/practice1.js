const practice_two = require('./practice2')
const os = require('os')
const {writeFile} = require('fs')

writeFile('./content/practice.txt',
`${practice_two.sentence}, ${os.userInfo().username}`,
(err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('done')
}
)
