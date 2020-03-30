module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "password",
    "database": "dwayner",
    "entities": [
        `dist/**/**.entity{.ts,.js}`
    ],
}