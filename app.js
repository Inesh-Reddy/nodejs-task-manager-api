const express = require('express');
const app = express();
const port = 3000
const tasks = require('./routes/tasks');


app.use(express.json())

app.get("/",(req, res)=> {
    res.send("Task Mananger App")

})

app.use('/api/v1/tasks', tasks)
app.use('api/v1/tasks', tasks)
app.get('api/v1/tasks/:id', tasks)
app.patch('api/va/tasks/:id', tasks)
app.delete('api/v1/tasks/:id', tasks)

app.listen(3000, ()=>{
    console.log("Server is listening on port: 3000 ...")
})
