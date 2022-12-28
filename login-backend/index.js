const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const port=process.env.PORT || 3002;

const app=express();

 app.use(express.json())
 app.use(express.urlencoded())
 app.use(cors())

 const DB='mongodb://localhost:27017/react-login'

 mongoose.connect(DB).then(()=>{
    console.log(`connection successfully`);
}).catch((e)=>{
    console.log(`no connection`,e)
});

//Creating schema
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    
})

const User=new mongoose.model("User",userSchema);

//Routes
app.post("/login",(req,res)=>{
    // const email1=req.body.email;

    const {email,password}=req.body

    //finding email and password

    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                res.send({message:"login successfully",user:user})
                // console.log("login successsfull")
            }else{
                res.send({message:"password not matching"})
            }

        }else{
            res.send({message:"user not registered"})
        }
    })
})

app.post("/register",(req,res)=>{
    
    const {name,email,password}=req.body
   

    //finding the user if already registered
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already registered"})
            
            
        }else{
            console.log(req.body)
            const user=new User({
                name:name,
                email:email,
                password:password
            })
        
            user.save(err=>{
                if(err){
                    // console.log(err)
                    res.send(err)
                }else{
                    res.send({message:"Successfully Registered,now u can login"})
                    // history.push("/login")
                }
            })
        }
    })

   
    // res.send("My Api register")
})




app.listen(port,()=>{
    console.log(`running at port ${port}`)
})

//API:application programming interface :interface btween two applicato