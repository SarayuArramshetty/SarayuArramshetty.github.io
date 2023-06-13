let Kalamoldinfo = {
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVS1XwYvv5qv2yacRfueVXin9v4JZR4Rd6rH2TwnqQWQ&usqp=CAU&ec=48600112",
    name: "Abdul Kalam",
    description: "Aerospace Scientist"
}


let displayobject;
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>console.log(data))
    document.getElementById("kalam").src = displayobject.imageurl;
    document.getElementById("abdulKalam").innerHTML = displayobject.name;
    document.getElementById("descrip").innerHTML = displayobject.description;


}