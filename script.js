let homeEl=document.getElementById("home");
let aboutSection=document.getElementById("aboutSection");
let bodyEl=document.getElementById("bodyEl");
let aboutLink=document.getElementById("aboutLink");
let downloadResumeBtn=document.getElementById("downloadResumeBtn");
function displayAbout(){
    aboutSection.classList.toggle("hidden");
}
downloadResumeBtn.addEventListener("click",function(){
    console.log("Resume Download Initiated.");
})
aboutLink.addEventListener("click",function(){
    aboutSection.classList.toggle("hidden");
    let allLinks=document.querySelectorAll(".nav a");
    allLinks.forEach(function(link){
        link.classList.remove("active");
    });
    aboutLink.classList.add("active");
});
aboutLink.addEventListener('click',function(event){
event.preventDefault();
})