let header = document.querySelector("header");
let headerAnchor = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset != 0){
        document.getElementById("myImg").src = "./Icons/black logo white.svg"
        header.style.backgroundColor = "rgba(0,0,0,0.6)";
        header.style.color = "white";
        headerAnchor.forEach(a=>{
            a.style.color = "white";
        })
    }else{
        document.getElementById("myImg").src = "./Icons/black logo.svg"
        header.style = "";
        headerAnchor.forEach(a=>{
            a.style.color = "#09777d"
        })
    }
})

// window.addEventListener("scroll", () =>{
//     if(window.pageYOffset != 0){
//         header.style.backgroundColor = "black";
//         header.style.color = "white";
//         headerAnchor.forEach(a =>{
//             a.style.color = "white";
//         })
//     }else{
//         header.style = "";
//         headerAnchor.forEach(a =>{
//             a.style.color = "#09777d";
//     }
// })
// })
