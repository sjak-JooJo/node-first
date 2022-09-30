const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors');




app.use(cors());
app.use(express.json());



app.get('/', (req, res) =>{
    res.send('from my personal over own smarty pant!!!');
});

const users = [
    {id:1, name:'Sabana', email: 'sabana@gmail.com', phone: '012200202002'},
    {id:2, name:'sabnur', email: 'sabnur@gmail.com', phone: '012200202002'},
    {id:3, name:'Suchorita', email: 'Suchorita@gmail.com', phone: '012200202002'},
    {id:4, name:'Suchonda', email: 'suchonda@gmail.com', phone: '012200202002'},
    {id:5, name:'srabon', email: 'srabon@gmail.com', phone: '012200202002'},
    {id:6, name:'srodda', email: 'srodda@gmail.com', phone: '012200202002'},
    {id:7, name:'sonali', email: 'sonali@gmail.com', phone: '012200202002'},
]

/* app.get('/users', (req, res) =>{
    res.send(users);
}) */


// filter by serach query parameter
app.get('/users', (req, res) => {
    
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
    console.log('Query', req.query);
    
})


app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    res.send (user);
});

app.post('/user', (req, res)=>{
    console.log('request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})


app.get('/fruits', (req, res) =>{
    res.send(['mango', 'apple', 'oranges']);
})

app.get('/fruits/mango/fazle',(req, res)  =>{
    res.send('sour soud fazle flavor');
})

app.listen(port, () =>{
    console.log('Listening to port', port);
})

/* app.get() */