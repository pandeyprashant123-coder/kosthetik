// -------navtoggle------
var navbar = document.getElementById("navbar");
navbar.style.height="0px";
function toggle(){
    if(navbar.style.height=="0px")
    {
        navbar.style.height="240px";
    }
    else{
        navbar.style.height="0px";
    }
}

//ID'S OF BUTTON
var cheek = document.getElementById("cheek");
var face = document.getElementById("face");
var face1 = document.getElementById("face1");
var liptattoo = document.getElementById("liptattoo");
var lipstick = document.getElementById("lipstick");
var tint1 = document.getElementById("tint_1");
var tint2 = document.getElementById("tint_2");
var tint3 = document.getElementById("tint_3");
var tint4 = document.getElementById("tint_4");


//ID'S of IMAGES
var cheekImage = document.getElementById("rest");
var faceImage = document.getElementById("fil");
var face1Image = document.getElementById("fil1");
var inkImage = document.getElementById("ink");
var lipImage = document.getElementById("lip");
var tintImage1 = document.getElementById("tint1");
var tintImage2 = document.getElementById("tint2");
var tintImage3 = document.getElementById("tint3");
var tintImage4 = document.getElementById("tint4");


faceImage.style.display = "none";
face1Image.style.display = "none";
inkImage.style.display = "none";
lipImage.style.display = "none";
tintImage1.style.display = "none";
tintImage2.style.display = "none";
tintImage3.style.display = "none";
tintImage4.style.display = "none";


cheek.addEventListener("click", function() {
    // document.getElementByID("face").innerHTML= "none";
    if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else this.classList.add("active");
    faceImage.style.display = "none";
    face1Image.style.display = "none";
    inkImage.style.display = "none";
    lipImage.style.display = "none";
    tintImage1.style.display = "none";
    tintImage2.style.display = "none";
    tintImage3.style.display = "none";
    tintImage4.style.display = "none";
    cheekImage.style.display = "flex";
});
face.addEventListener("click", function() {
    // document.getElementByID("face").innerHTML= "none";
    cheekImage.style.display = "none";
    inkImage.style.display = "none";
    lipImage.style.display = "none";
    tintImage1.style.display = "none";
    tintImage2.style.display = "none";
    tintImage3.style.display = "none";
    tintImage4.style.display = "none";
    // tintImage.style.display = "none";
    faceImage.style.display = "flex";
    face1Image.style.display = "none";
});
face1.addEventListener("click", function() {
    // document.getElementByID("face").innerHTML= "none";
    cheekImage.style.display = "none";
    inkImage.style.display = "none";
    lipImage.style.display = "none";
    tintImage1.style.display = "none";
    tintImage2.style.display = "none";
    tintImage3.style.display = "none";
    tintImage4.style.display = "none";
    // tintImage.style.display = "none";
    faceImage.style.display = "none";
    face1Image.style.display = "flex";
});
liptattoo.addEventListener("click", function() {
    // document.getElementByID("face").innerHTML= "none";
    cheekImage.style.display = "none";
    inkImage.style.display = "flex";
    lipImage.style.display = "none";
    tintImage1.style.display = "none";
    tintImage2.style.display = "none";
    tintImage3.style.display = "none";
    tintImage4.style.display = "none";
    // tintImage.style.display = "none";
    faceImage.style.display = "none";
    face1Image.style.display = "none";
});
lipstick.addEventListener("click", function() {
    // document.getElementByID("face").innerHTML= "none";
    cheekImage.style.display = "none";
    inkImage.style.display = "none";
    lipImage.style.display = "flex";
    tintImage1.style.display = "none";
    tintImage2.style.display = "none";
    tintImage3.style.display = "none";
    tintImage4.style.display = "none";
    // tintImage.style.display = "none";
    faceImage.style.display = "none";
    face1Image.style.display = "none";
});
tint1.addEventListener("click", function() {
    // document.getElementByID("face").innerHTML= "none";
    cheekImage.style.display = "none";
    inkImage.style.display = "none";
    lipImage.style.display = "none";
    faceImage.style.display = "none";
    tintImage1.style.display = "flex";
    tintImage2.style.display = "none";
    tintImage3.style.display = "none";
    tintImage4.style.display = "none";
    face1Image.style.display = "none";
});
tint2.addEventListener("click", function() {
    // document.getElementByID("face").innerHTML= "none";
    cheekImage.style.display = "none";
    inkImage.style.display = "none";
    lipImage.style.display = "none";
    faceImage.style.display = "none";
    tintImage1.style.display = "none";
    tintImage2.style.display = "flex";
    tintImage3.style.display = "none";
    tintImage4.style.display = "none";
    face1Image.style.display = "none";
});
tint3.addEventListener("click", function() {
    // document.getElementByID("face").innerHTML= "none";
    cheekImage.style.display = "none";
    inkImage.style.display = "none";
    lipImage.style.display = "none";
    tintImage1.style.display = "none";
    tintImage2.style.display = "none";
    tintImage3.style.display = "flex";
    tintImage4.style.display = "none";
    faceImage.style.display = "none";
    face1Image.style.display = "none";
});
tint4.addEventListener("click", function() {
    // document.getElementByID("face").innerHTML= "none";
    cheekImage.style.display = "none";
    inkImage.style.display = "none";
    lipImage.style.display = "none";
    tintImage1.style.display = "none";
    tintImage2.style.display = "none";
    tintImage3.style.display = "none";
    tintImage4.style.display = "flex";
    faceImage.style.display = "none";
    face1Image.style.display = "none";
});

// show.addEventListener("click", function() {
//     // document.getElementByID("face").innerHTML= "none";


//     cheekImage.style.display = "flex";
//     faceImage.style.display = "flex";
// });

