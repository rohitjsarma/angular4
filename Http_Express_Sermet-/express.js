exp=require("express")
bp=require("body-parser")
app=exp()
app.listen(1000)
app.use(bp.json())
app.use(exp.static(__dirname))

app.get("/met1",function(req,res){
res.send("Method Called")
})

app.post("/met2",function(req,res){
reqdata=req.body
	console.log(reqdata)
	res.send("Revd")
})