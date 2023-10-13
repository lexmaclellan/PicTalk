const { execSync } = require('child_process')

const DB_NAME = 'pictalkDB'

try {
    execSync(`mongoimport --db ${DB_NAME} --collection users --drop --file "${process.cwd()}/data/seed/users.json" --jsonArray`)
    execSync(`mongoimport --db ${DB_NAME} --collection posts --drop --file "${process.cwd()}/data/seed/posts.json" --jsonArray`)
    console.log(`Imported documents into database ${DB_NAME}`)
} catch (err) {
    console.log(`Cound not import documents into database ${DB_NAME}`)
    console.error(err)
}