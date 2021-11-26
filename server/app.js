const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();


dotenv.config({path: './.env'});
require('./db/conn');
const DefaultData = require('./default');
DefaultData();
const PORT = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());

//paytm
let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuidv4(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
paytmParams['EMAIL'] = 'jasveen808@gmail.com'
paytmParams['MOBILE_NO'] = '8209580675'
module.exports = {
    paytmMerchantkey,
    paytmParams
};


app.get('/', (req,res) => {
    res.send('hi');
});

app.use(require('./router/userAuth'));
app.use(require('./router/productAuth'));
app.use(require('./router/paymentAuth'));


app.listen(PORT, () => {
    console.log(`server running at port no. ${8000}`);
});