const express = require('express')
const app = express();
Note = ["Note1","Note2","Note3"]
app.get('/',(req,res)=>{
        res.send(Note)
   }
)
app.get('/note/:id',(req,res)=>{
        const id = req.params.id;
        for(var i=0;i<Note.length;i++){
            if(Note[i].id == id){
                res.send(Note[i]);
            }
        }
   }
)
app.listen(4000)