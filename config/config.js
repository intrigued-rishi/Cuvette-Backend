const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://adminuser:useradmin@charitydb.fivwx.mongodb.net/Cuvette?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('Database established');
}).catch((err)=>{
    console.error("Error in establishing database",err);
});
