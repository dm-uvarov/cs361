
import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT

app.use(express.urlencoded({
  extended: true
}));

function makeRandomString(len) {
  let result = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
  const charsLength = chars.length;
  let i = 0;
  while (i < len) {
    result += chars.charAt(Math.floor(Math.random() * charsLength));
    i += 1;
  }
  return result;
}



let response = {'rs' : 'default String'};

const makeLen = ()=>{
  let seedLength = Math.floor(Math.random()*49 +1)
  return seedLength
}



app.get("/random", (_,res)=>{
  console.log("recieved http get request. proceed")
  response.rs = makeRandomString(makeLen())
  var jsondata = JSON.stringify(response);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  console.log('send data:', jsondata)
  res.send(jsondata);
})


app.listen(PORT, ()=> {
  console.log(`Server is listening on port ${PORT}...`)
})