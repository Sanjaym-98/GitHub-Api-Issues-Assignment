const displayissues =document.getElementById("displayissues");
const loadnext =document.getElementById("loadnext");
const loadprevious =document.getElementById("loadprevious");

let pagenumber =1;
function getdata(){
    
    fetch(`https://api.github.com/repositories/1296269/issues?page=${pagenumber}&per_page=5`).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data);
        data.forEach(element => {
            let list =document.createElement("li");
            list.innerText=element.title
           displayissues.appendChild(list)
        });
    })
}


loadnext.addEventListener("click",nextpage)
function nextpage(){
    displayissues.innerHTML="";
pagenumber++;
getdata()
}
loadprevious.addEventListener("click",previouspage)
function previouspage(){
    displayissues.innerHTML="";
    if(pagenumber>1){
        pagenumber--;
        getdata()
    }
}