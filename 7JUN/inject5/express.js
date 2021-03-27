exp=require("express")
app=exp()
app.listen(1000)
app.use(exp.static(__dirname))