
import express from 'express';
import 'dotenv/config';

const runMSG = "run"
const app = express();
const PORT = process.env.PORT

app.use(express.urlencoded({
  extended: true
}));

let response = {'string' : 'default String'};

app.get("/random", (_,res)=>{
  var jsondata = JSON.stringify(response);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  console.log('jsondata:', jsondata)
  res.send(jsondata);
})


app.listen(PORT, ()=> {
  console.log(`Server is listening on port ${PORT}...`)
})