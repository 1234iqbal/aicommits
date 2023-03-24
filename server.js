const express = require ("express")
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Belajar Commit With Ai!')
})
    
app.listen(port, () => console.log(`Hello Node app listening on port ${port}!`) );








