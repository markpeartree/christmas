const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/site/index.html'));
});

app.use(express.static('site'))
app.use(express.static('pics'))
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
