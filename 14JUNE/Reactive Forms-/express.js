exp=require("express")
app=exp()
app.listen(2500)
console.log("server is litening at 2500")
app.use(exp.static(__dirname))