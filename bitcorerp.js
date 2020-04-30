const Client = require("bitcoin-core");
const client = new Client({
  headers: true,
  host: "127.0.0.1",
  username: "username",
  password: "pPasSs@keEy",
  port: 18332,
  version: "0.18.1"
});


//generate address for User

module.exports.generateAddress = (callback) => {
    client.command('getnewaddress', (err,result) => {
        callback(err,result)
    })    
};


// get balance of address
module.exports.getaddressbalance = (address, callback) => {
    client.command(
      "getreceivedbyaddress",
      address,
      3,
      (err, result) => {
        callback(err,result)
      }
    );
};


// get unconfirmed transaction
module.exports.getUserunconfirmed = (address, callback) => {
  client.command("listunspent", 0, 2, [address], (err, result) => {
    callback(err, result);
  });
};


//module.exports.







