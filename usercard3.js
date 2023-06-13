let Kalamoldinfo = {
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVS1XwYvv5qv2yacRfueVXin9v4JZR4Rd6rH2TwnqQWQ&usqp=CAU&ec=48600112",
    name: "Abdul Kalam",
    description: "Aerospace Scientist"
}

let KalamMissileManinfo={
    imageurl: "https://i.pinimg.com/736x/4d/b1/41/4db1413cd7b147df98bc2642c93ee278.jpg",
    name: "Dr A P J Abdul Kalam",
    description: "Missile Man of India"
}

let isKalamoldinfo = true;
let displayobject;
let flipdata = function(){
    if(isKalamoldinfo==true){
        displayobject = KalamMissileManinfo;
        isKalamoldinfo = false;
    }
    else{
        displayobject = Kalamoldinfo;
        isKalamoldinfo = true;
    }
    document.getElementById("kalam").src = displayobject.imageurl;
    document.getElementById("abdulKalam").innerHTML = displayobject.name;
    document.getElementById("descrip").innerHTML = displayobject.description;


}