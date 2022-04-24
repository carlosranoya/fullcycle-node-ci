const fs = require('fs')

var content = '';

fs.readFile('Dockerfile.lock', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    let insert = 'ARG NODE_VERSION=node:16';

    if (process.argv.length > 2) {
        version = process.argv[2];
        if (version != '16') {
            insert = 'ARG NODE_VERSION=node:' + version
        }
    }
    content = insert + "\n" + data;

    fs.writeFile('Dockerfile', content, err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
    })
})


