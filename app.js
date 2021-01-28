var express =require("express")
var app =express()
var port =2000;
var path =require("path")
app.get("/",function(rep,res){
    res.sendFile(path.join(__dirname,"./tex/index.html"))
})

app.use(express.static ('./tex'))
// app.new("/,",function(rep,res){
//     res.sendFile(path.join(__dirname,"./css.css"))
// })
app.listen(port,function(){
    console.log("sever đã hoạt động"+port)
})