const dbConnect=require('./mongodb')
const express=require('express');
const {response}=require('express');
const app=express();
app.use(express.json())
//get api 


app.get('/getData',async(req,res)=>{
   let result=await dbConnect();
   result=await result.find().toArray();
   res.send.send(result);

})


//post api
app.post('/insertData',(req,res)=>{
    let result= await dbConnect();
    result= await result.insertOne(req.body);
    res.send("Data Inserted Succesfully")
})

//put api

app.put('/updateData/:name', async(req,res)=>{
    let result=await dbConnect();
    result=await result.updateOne({name:req.params.name},{$set:req.body});
    res.send("Data Updated!!")
})


//delete api
app.delete('/deleteData/:name',async(req,res)=>{
    let result=await dbConnect();
    result=await result.deleteOne({name:req.params.name})
    res.send("Data Deleted");
})

app.listen(3000);

