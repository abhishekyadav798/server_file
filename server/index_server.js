const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.get('/', function (req, res) {
   res.send('Hello World')
 // res.sendFile('/root/express_server_test_1/index.html')
})

app.get('/images/:image',function(req,res){
  res.sendFile("/root/express_server_test_1/images/"+req.params['image'])
  console.log(req.params['image'])
  // res.send("hello")
})
app.listen(3005)
