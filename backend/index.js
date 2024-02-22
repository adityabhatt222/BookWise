import express from "express"
import {PORT,MongodbURl} from "./config.js"
import mongoose from "mongoose";
import cors from "cors"
import {Book} from "./models/bookModel.js"
import bookroutes from "./Routes/bookroutes.js"

const app = express();
app.use(express.json());

app.use("/books" , bookroutes)  // we use this middleware so that if more and more routes we have to define 
// basically haamne routes dusri files me define krdiye taki acha dikhe

//app.use(cors()); // we have used it so that cors policy k according fir aage error nhi aayga
// yeh allow krta h all origins

//custom origins
 app.use(cors())
    //  {
    //  origin:['http://localhost:3000','http://localhost:5173'],
    //  methods:['GET','POST','PUT','DELETE'],
    //  allowedHeaders:['content-Type']
    //  }
   //))

mongoose.connect(MongodbURl)
.then(()=>
{console.log("App is connected to the database")}
// app.get("/", (req,res)=>{
//     res.json({
//         msg:"Hi there"
//     })
// })}
)
.catch((error)=>{
    console.log(error)
})


app.listen(PORT,()=>{
    console.log(`App is listening to port number :${PORT}`)
})