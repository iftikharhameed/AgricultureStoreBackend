const express=require('express')
const connectToMong=require('./db')
const  cors=require('cors')
const router=require('./router/userRoute')
const  aws= require("aws-sdk");

connectToMong()
const app =express()
app.use(express.json())
const port=5000
app.use(cors())
app.use('/api',router)


;

//aws setup

// const region = "eu-north-1";
// const bucketName = "ecom-website-agriculture";
// const accessKeyId = 'AKIAVP4BIFSATOCK7HFC';
// const secretAccessKey = 'RMh5MeCAdvB7bS2wA9aBnVNxcMb2X41YGTVct';

// aws.config.update({
//     region,
//     accessKeyId,
//     secretAccessKey

// })


// //init s3
// const s3 = new aws.S3();


// // image urd

// async function generateURL(){
//     let date = new Date();

//     const imageName =   `${date.getTime()}.jpeg`;

//     const params = {
//         Bucket: bucketName,
//         Key: imageName,
//         Expires: 30000,
//         ContentType: "image/jpeg"
//     }


//     const uploadURL = await s3.getSignedUrlPromise("putObject",params);
//     return uploadURL;
// }


// app.get('/s3url', (req, res) =>{
//     generateURL().then(url => res.json(url));
// })
 

// for user Router 


// const userRoute = require('./router/userRoute');
// app.use('/',userRoute);


// // for admin route 
// const adminRoute = require('./router/adminRoute');
// app.use('/admin',adminRoute);



app.listen(port,()=>{
    console.log(`app is runnig ${port}`)
})



// product Routes

// const product_routes = require("./router/productRoute");
// app.use('/api',product_routes);