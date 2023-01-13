const axios = require('axios')

async function login(){
const response = await axios.post("http://10.225.70.119:51088/login",
{
    "username": "dfemia", "password": "!@$EhNuoVbvIZs2Et0+MLEIVLx5LJKxw1oo7LbH39mxTqYS8oNpS8jCSLHtfzGsmV3QrSCtutQDKrD9CfWCsQ6W6X4plfuzWo/I8GxV7gYctUnj/WtCusQh55ousZzg5TRIJhXm8jf1PXhhzD52zhqa9cg1gKr4tBzdSEx29Mc6xpA="
},{
    headers: {"Content-Type":"application/json"}   
});
console.log("Check it out BABBBYYYY!" + JSON.stringify(response.data))
return response;
}

let test = login();
//console.log(test)
//curl -X POST 'http://pwpnch-enf02:51089/login' -H 'Content-Type: application/json' --data '{"username": "Administrator", "password": "!%40%24QBk%252BmdP1YJcU2cf61053cbstHmB7ysxyFB2Oy63WZwtSWN%252FhJzfVuiYo%252Fn%252Fx2Xn4x7f18%252BOB8oc1jovP%252FkNqMjj2e5o3XZYGWE7Qp6%252BaREcnu4XbFuooJ3y0lKPfC%252B0oDGq1P368uFdB7PznwhtOEKLUCl1CrNz98zzt1avqXgY%253D"}'
