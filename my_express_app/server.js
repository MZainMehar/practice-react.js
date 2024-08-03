const express  = require ('express')
const app = express()


const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'}
];

app.get('/', (req, res) => {
    res.json({message: 'Hello World!'});
})

app.get('/users', (req, res) => {
    res.json(users);
})

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
})