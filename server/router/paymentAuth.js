const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const https = require('https');
require('../db/conn');
const {paytmParams, paytmMerchantkey} = require('../app');
const PaytmChecksum = require('../paytm/PaytmChecksum');

//payment router
router.post('/payment', async(req,res) => {

    let paytmCheckSum = await PaytmChecksum.generateSignature(paytmParams, paytmMerchantkey);
    try {
        let params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmCheckSum
        };
        res.json(params);
    } catch (error) {
        console.log(error);
    }

});



//payment response
router.post('/callback', async(req,res) => {

    const form = new formidable.IncomingForm();
        let paytmCheckSum = req.body.CHECKSUMHASH;
        delete req.body.CHECKSUMHASH;

        var isVerifySignature = PaytmChecksum.verifySignature(req.body, 'bKMfNxPPf_QdZppa', paytmCheckSum);
        console.log(isVerifySignature);
        if (isVerifySignature) {
            var paytmParams = {};
            paytmParams["MID"] = req.body.MID;
            paytmParams["ORDERID"] = req.body.ORDERID;

            PaytmChecksum.generateSignature(paytmParams, 'bKMfNxPPf_QdZppa').then(function (checksum) {

                paytmParams["CHECKSUMHASH"] = checksum;

                var post_data = JSON.stringify(paytmParams);

                var options = {

                    hostname: 'securegw-stage.paytm.in',
                    port: 443,
                    path: '/order/status',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length
                    }
                };

                var ress = "";
                var post_req = https.request(options, function (post_res) {
                    post_res.on('data', function (chunk) {
                        res += chunk;
                    });

                    post_res.on('end', function () {
                        let result = JSON.parse(ress)
                        res.redirect(`http://localhost:3000/`)
                    });
                });
                post_req.write(post_data);
                post_req.end();
            });
        } else {
            console.log("Checksum Mismatched");
        }
    console.log('//////////////end')

});


module.exports = router;