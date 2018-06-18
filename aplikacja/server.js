const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Server started at port 3000!');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Content-Type, Accept");
  next();
});

let smartphoneList = [
  { id: 1, brand: 'Samsung', model: 's9', price: 4100 },
  { id: 2, brand: 'LG', model: 'g6', price: 2500 },
  { id: 3, brand: 'Huawei', model: 'p20', price: 3600 },
];

app.route('/server/smartphonelist').get((req, res) => {
    res.send(smartphoneList);
});


app.route('/server/addsmartphone').post((req, res) => {
    smartphoneList.push(req.body);
    res.send({});
})