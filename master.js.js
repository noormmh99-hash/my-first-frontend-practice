//Check If Theres Local Storage Color
let mainColors = localStorage.getItem("color_option");



if( mainColors !== null){
  // console.log('Local Storage Is Not EMpty You  Can Set It On Root Now');
  //  console.log(localStorage.getItem("color_option"))

    document.documentElement.style.setProperty('--main-color',mainColors);

//Remove Active Class From All Colors List Item
    document.querySelectorAll(".colors-list li").forEach(element =>{
      element.classList.remove("active")


      //Add Active Class On Element With Data-color === Local Storage Item
     if(element.dataset.color === mainColors){
       
      //Add Active Class
      element.classList.add("active")
     }
    });

}


//Random Background Option
let backgroundOption = true;

//Variable To control The Interval 

let BackgroundInterval;

//Check If Theres Local Storge Random Background Item

let backgroundLocalItem = localStorage.getItem("background_option");


//Check If Random Background Local Storage Is Not Empty
if(backgroundLocalItem !== null){

  // console.log( typeof("backgroundLocalItem"));

  if(backgroundLocalItem ===' true'){
    backgroundOption = true;
  } else{
    backgroundOption = false;
  }

    console.log(backgroundLocalItem);


    //Remov Active Class From All Span
    document.querySelectorAll(".random-backgrounds span").forEach(element =>{
   element.classList.remove("active");


    })

    if(backgroundLocalItem === 'true'){
      document.querySelector(".random-backgrounds  .yes").classList.add("active")

    }else{
            document.querySelector(".random-backgrounds .No").classList.add("active")

    }

}


//Toggle Spin Class On Icon
document.querySelector(".toggle-setting .fa-gear").onclick = function(){
this.classList.toggle("fa-spin");

//Toggle Class Open
document.querySelector(".setting-box").classList.toggle("open");
};

//Switch Colors
const colorsli = document.querySelectorAll(".colors-list li");
colorsli.forEach(li =>{

  li.addEventListener("click",(e) =>{
    //Set Color on Root
    document.documentElement.style.setProperty('--main-color',e.target.dataset.color);

    //Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color)

   handleActive(e);
   
  })

});
//Switch Random Background Option
const randomBackgroundsEl = document.querySelectorAll(".random-backgrounds span");
randomBackgroundsEl.forEach(span =>{

  span.addEventListener("click",(e) =>{
    //Set Color on Root
    
     handleActive(e);

    if(e.target.dataset.background === 'yes') {
     backgroundOption = true;
    randomizeImgs();

    localStorage.setItem("background_option", true)

    } else {
        backgroundOption =false;

       clearInterval(BackgroundInterval)

       localStorage.setItem("background_option", false)
    }
  })

});



//Salect Landing Page Element
let landingPage = document.querySelector(".landing-page");

//Get Array Of Imgs
let imgeArray = ["Image1.jpg","Image2.jpg","Image3.jpg","Image4.jpg","Image5.jpg"];




//Function To Randomiz Imgs

function randomizeImgs(){
  if(backgroundOption === true){
//Get Random Number

  BackgroundInterval=  setInterval(()=>{
    let randomNumber = Math.floor(Math.random() * imgeArray.length);

    //Change Background Image Url 

landingPage.style.backgroundImage = 'url("Imgs/'  + imgeArray[randomNumber] +  '")';


},2000);  


  }
}
randomizeImgs();


//Select  Skills Selector

let ourSkills = document.querySelector(".skills");


window.onscroll = function(){

  // Skills Offset Top

  let SkillsOffsetTop  = ourSkills.offsetTop

  // Skills Outer Height

  let  SkillsOuterHeight  = ourSkills.offsetHeight;


  //Window Height

  let windowHeight = this.innerHeight;

  //Window ScrollTop 

  let windowScrollTop = this.pageYOffset;

  if ( windowScrollTop > (SkillsOffsetTop + SkillsOuterHeight - windowHeight)){
  //  this.console.log('Skills Section Reached')

  let allSkills = document.querySelectorAll(".skill-box .skill-progress span")
  
  allSkills.forEach(skill =>{

    skill.style.width = skill.dataset.progress;
  })
}



}

//Create Popup With The Image

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img =>{
  img.addEventListener('click',(e) =>{

    //Create  Overlay Element
    let overlay = document.createElement("div")

    //Add Class To Overlay

    overlay.className = 'popup-overlay';


    //Append Overlay To Body
    document.body.appendChild(overlay);

    //Create The Popup
    let popupBox = document.createElement("div");
    
    popupBox.className = 'popup-Box';

      if(img.alt !== null){
      //Creat Heading
      let imgeheading = document.createElement("h3")

      //Creat text For Heading
      let imgText = document.createTextNode(img.alt);

      //Append The Text The Heading
      imgeheading.appendChild(imgText);

      //Append  The Heading To  Popup Box
      popupBox.appendChild(imgeheading);

    }

    let popupImage = document.createElement("img");

    //Set Image Source
    popupImage.src = img.src;

    //Add Imsge To popup Box

    popupBox.appendChild(popupImage)

    document.body.appendChild(popupBox)

    //Creat The Close Span
   let closeButton = document.createElement("span")

   //  //Creat The Close Button Text

   let closeButtonText = document.createTextNode("X");

   //Append Text To Close Button
   closeButton.appendChild(closeButtonText)

   //Add Class To  Close  Button

   closeButton.className = 'close-button';

   //Add   Close  Button To Popup Box
   popupBox.appendChild(closeButton)
    
  });
});

//Close Popup
document.addEventListener("click", function(e){
  if(e.target.className === 'close-button'){
    e.target.parentNode.remove();

    document.querySelector(".popup-overlay").remove();


  }
});

//Select All Bullet

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// allBullets.forEach(bullet =>{
//   bullet.addEventListener("click",(e) =>{

//     document.querySelector(e.target.dataset.section).scrollIntoView({
//       behavior:'smooth'
//     })
//   })
// });
//Select All Links

const alllinks = document.querySelectorAll(".links a");

// alllinks.forEach(link =>{
//   link.addEventListener("click",(e) =>{

//     e.preventDefault();

//     document.querySelector(e.target.dataset.section).scrollIntoView({
//       behavior:'smooth'
//     })
//   })
// });

function scrollToSomewhere(elements){

elements.forEach(ele =>{
  ele.addEventListener("click",(e) =>{

    e.preventDefault();

    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior:'smooth'
    })
  })
});
}

scrollToSomewhere(allBullets);
scrollToSomewhere(alllinks);

//Handle Active State
function handleActive(ev){
  //Remove Active Class From All Childrin
    ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
      element.classList.remove("active")
    });

    //Add Active Class
    ev.target.classList.add("active")
}



let bulletsSpan  = document.querySelectorAll(".bullets-option span")

let bulletsContainer = document.querySelector(".nav-bullets")

let bulletLocalItem = localStorage.getItem("bullets_option")

if(bulletLocalItem !== null){

bulletsSpan.forEach(span =>{
  span.classList.remove("active");
})

if(bulletLocalItem === 'block'){
  bulletsContainer.style.display = 'block';

  document.querySelector(".bullets-option .yes").classList.add("active");

}else{
  bulletsContainer.style.display = 'none';
  document.querySelector(".bullets-option .No").classList.add("active");
}

}

bulletsSpan.forEach(span =>{
  span.addEventListener("click", (e) =>{
    if(span.dataset.display === 'show'){

      bulletsContainer.style.display = 'block'

      localStorage.setItem("bullets_option", 'block')

    }else{
          bulletsContainer.style.display = 'none';

           localStorage.setItem("bullets_option", 'none');
    }
   handleActive(e)
  })
})


//Reset Button

document.querySelector(".reset-option").onclick = function(){
  // localStorage.clear();
  localStorage.removeItem("bullets_option");
  localStorage.removeItem("color_option");
  localStorage.removeItem("background_option");

  window.location.reload();
}


//Toggle Menu

let toggleBtn  =document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");
toggleBtn.onclick = function(e){
   
  e.stopPropagation();
  // Toggle lass "menu-active" On Button
  this.classList.toggle("menu-active");
  //Toggle Class "open" On Links
  tLinks.classList.toggle("open");
};
//Click Anywhere Outside Menu And Toggle Button

document.addEventListener("click",(e)=>{
  if(e !== toggleBtn && e.target !== tLinks){

   //Check If Menu Is Open

   if(tLinks.classList.contains("open")){
// Toggle lass "menu-active" On Button
 toggleBtn.classList.toggle("menu-active");
  //Toggle Class "open" On Links
  tLinks.classList.toggle("open");
   }

  }
});

tLinks.onclick = function(e){
  e.stopPropagation();
}

