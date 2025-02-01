const dotenv=require('dotenv');
dotenv.config();

let non_secret_key="123456";
console.log("Non secret key is:", non_secret_key);
console.log("Secret key is:", process.env.SECRET_KEY);