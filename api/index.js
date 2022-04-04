const express=require("express")

const app=express()
const { sequelize, Conversation ,Messages }= require('./models')
const cors=require('cors')

app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello....")
})

// save msg
app.post('/addmsg',async(req,res)=>{
    try {
        const data= await Messages.create(req.body)
        console.log(req.body)
        res.json({msg:data})
    } catch (err) {
        res.json({err})
    }
})

// add convo
app.post('/addconvo',async(req,res)=>{
    try {
        const data= await Conversation.create(req.body)
        res.json({msg:data})
    } catch (err) {
      console.log(err)
        res.json({err})
    }
})


//get all users....
app.get("/getusers", async (req, res) => {
    try {
      const conversation = await Conversation.findAll();
      res.status(200).json(conversation);
    } catch (err) {
      res.status(500).json(err);
    }
});


// get all msgs for a conversation
app.get("/:conversationId", async (req, res) => {
    try {
      console.log(req.params.conversationId);
      const messages = await Messages.findAll({
        where:{conversationId: req.params.conversationId},
      });
      
      res.status(200).json(messages);
    } catch (err) {
      
      res.status(500).json(err);
    }
});


app.listen(5000, async()=>{

    console.log("server connected to http://localhost:5000")
    await sequelize.authenticate()
    console.log("database connected..");
})