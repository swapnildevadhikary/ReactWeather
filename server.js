var  exp1=require('express');
var app=exp1();
app.use(exp1.static('public'));
app.listen(4000,function(){
  console.log('hello my first app');
})
