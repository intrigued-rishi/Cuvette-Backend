const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Cuvette',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('Database established');
}).catch((err)=>{
    console.error("Error in establishing database",err);
});
