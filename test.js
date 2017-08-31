var string = "1->2->3->3->4->5->3";
var val = 3;

var array = string.split("->");
var result =[]
array.forEach((e)=>{
    if(e != val){
        result.push(e);
    }
})

console.log(result.join("->"));