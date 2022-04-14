var a=0;
var b=1;
console.log(a,b);
for(var i=0;i<9;i++){
    var c=a+b;
    console.log(c);
    a=b;
    b=c;
}
