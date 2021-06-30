var images=["papa.png","mummy.png","me.png"];
var names=["Santosh Kr. Ghaley","Bahgya Laxmi Ghaley (Das)","Yuvraj Vir Ghaley"];

var i=0;
function change(){
    
    if(i==3)
    {i=0}
    document.getElementById("image").src=images[i];
    document.getElementById("namelable").innerHTML=names[i];
    i++;
}