//javascript
const photoList = ["your-name-gallery", "titanfall", "spil-gallery", "karmen-gallery", "color-full-gallery", "alan-walker-gallery"];
let index =0;
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let mainImg = document.querySelector("#main-img");
let nyFoto;
let readMore = document.querySelector("#readmore");
let text = document.querySelector(".hide-div");
let send = document.querySelector("#bg_slider-send");
let wrong = document.querySelector("#wrong");
let email = document.querySelector("#indtaste-email");
let name = document.querySelector("#indtaste-navn");
let msg = document.querySelector("#indtaste-besked");


if (document.querySelector("#readmore")){
    readMore.addEventListener("click", show);
}
if (document.querySelector("#bg_slider-send")){
    send.addEventListener("click", validateForm);
}

if (document.querySelector("#left")) {
    left.addEventListener("click", skift);
    right.addEventListener("click", skift);
}

function show(){
    if(text.style.display!=="block"){
        readMore.innerHTML="læs mindre"+'<i class="fas fa-arrow-up"></i>';
    }else{
        text.style.display ==="none";
        readMore.innerHTML="læs mere"+'<i class="fas fa-arrow-down"></i>';
    }
}

function skift(e){
    if (e.target.getAttribute("id")==="left"){
        if(index > 0){
            index--;
        }else{
            index = photoList.length-1;
        }
    }else{
        if(index < photoList.length-1){
            index++;
        }else{
            index = 0;
        }
    }
        nyFoto = "images/"+photoList[index]+".jpg";
        mainImg.setAttribute("src", nyFoto);
}



function validateForm(){


    var navn = document.forms["myForm"]["fname"].value;
    if (navn === "") {
      name.style.color="#FC4A56";
      return false;
    }

    var mailempty = document.forms["myForm"]["femail"].value;
    if (mailempty === "") {
      email.style.color="#FC4A56";
      return false;
    }

    var sms = document.forms["myForm"]["fbesked"].value;
    if (sms === "") {
      msg.style.color="#FC4A56";
      return false;
    }



    
    {if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.femail.value))
    {
        return (true);
    }
        wrong.style.display="inline";
        return false;
        
    }

}


$("#burger").click(function(){
		$("#menu ul").slideToggle(500, function(){
	});
});

$("#readmore").click(function(){
    $(".hide-div").slideToggle(500, function(){
    });
});