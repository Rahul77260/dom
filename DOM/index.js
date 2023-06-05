var content=document.getElementById("fr");
var button=document.getElementById("btn");
var colours=["red","blue","green","orange"];
var counter=0;
function change(){
    content.style.backgroundColor=colours[counter];
    counter++;
    counter%=4;
}
var para=document.getElementById("sc");
content.style.backgroundColor="white";
para.style.fontFamily = "Impact,Charcoal,sans-serif";

function show(){
    if(content.className==="open"){

       content.className=""; 
       button.innerHTML="Show More"

    }
    else{
        content.className="open";
        button.innerHTML="Show Less"
    }
};
//setInterval(change,3000);
