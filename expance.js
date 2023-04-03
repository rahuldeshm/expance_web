// console.log("rahul")
var form = document.getElementById("addForm");
var expancelist = document.getElementById("expances");
form.addEventListener("submit",addExpance);
function addExpance(e){
    e.preventDefault();
    // console.log("inside submit success");
    var newamount = document.getElementById("amount").value;
    var newdiscription = document.getElementById("discription").value;
    var newcategery= document.getElementById("categery").value;
    // console.log(newcategery)
    // console.log(newamount)
    // console.log(newdiscription)
    //added element to document 
    //adding data to local storage
    let myObj = {
        "Expanceamount":newamount,
        "Expancediscription": newdiscription,
        "Categary":newcategery
    }
    let myObj_sreialized = JSON.stringify(myObj);
    // console.log(myObj_sreialized)
    localStorage.setItem(newamount,myObj_sreialized)
    document.getElementById("amount").value="";
    document.getElementById("discription").value="";
    document.getElementById("categery").value="";
    showondom(myObj)
}
document.addEventListener("DOMContentLoaded",fatchlocaldata);
function fatchlocaldata(){
    let datakeys = Object.keys(localStorage);
    for (let i = 0;i<datakeys.length;i++){
        let storageobj = JSON.parse(localStorage.getItem(datakeys[i]));
        showondom(storageobj)
    }
}
function showondom(Obj){
    console.log("showondom")
    var li = document.createElement("div");
    li.classList.add("form" ,"rounded", "border", "shadow" , "p-4")
    const deletebtn = document.createElement("button");
    const editbtn = document.createElement("button");
    deletebtn.className="dbtn"
    deletebtn.innerHTML="Delete Expance";
    editbtn.className="ebtn"
    editbtn.innerHTML="Edit Expance";
    li.innerHTML = " Expance amount : "+Obj.Expanceamount + "<br>" +" Discription : " +Obj.Expancediscription + "<br>" + "Categary : " + Obj.Categary+ "<br>";
    li.appendChild(deletebtn)
    li.appendChild(editbtn)
    expancelist.appendChild(li);
    deletebtn.onclick=() =>{
        localStorage.removeItem(Obj.Expanceamount)
        expancelist.removeChild(li)
    }
    //adding functionality to editbutton
    editbtn.onclick=() =>{
        
        document.getElementById("amount").value=Obj.Expanceamount;
        document.getElementById("discription").value=Obj.Expancediscription;
        document.getElementById("categery").value=Obj.Categary;
        localStorage.removeItem(Obj.Expanceamount)
        expancelist.removeChild(li)
    }
    
}