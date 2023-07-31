const mongoose=require('mongoose')
const mongoURL='mongodb+srv://ahmad7508650:d2us6cHZDZutZj74@cluster0.jgkwjl7.mongodb.net/seconddb?retryWrites=true&w=majority'

const connectToMong=()=>{
    
        mongoose.connect(mongoURL).then((data)=>{
            console.log("conncted to db");
        }).catch(()=>{
            console.log("error accured");
        })
 
}

module.exports =connectToMong;