

/*Clicking on a navigation item should scroll to the appropriate section of the page.*/

const firstSection = document.querySelector('#firstSection');

const secondSection = document.querySelector('#secondSection');

const thirdSection = document.querySelector('#thirdSection');

const fourthSection = document.querySelector('#fourthSection');

const section1 = document.querySelector('#Section1');

const section2 = document.querySelector('#Section2');

const section3 = document.querySelector('#Section3');

const section4 = document.querySelector('#Section4');

const navBar = document.querySelector('#navbar__list');

firstSection.addEventListener('click', function(event) {
    event.preventDefault()
    section1.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
});

secondSection.addEventListener('click', function(event) {
  event.preventDefault()
    section2.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
});

thirdSection.addEventListener('click', function(event) {
    event.preventDefault()
    section3.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
});

fourthSection.addEventListener('click', function(event) {
  event.preventDefault()
  section4.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
});



/* Show the navigation bar on the main page page and hide while scrolling,
I have created a div with id "#scrolling" includes the three sections and the footer,
I didnot include the header then I add an event "mouseover" that div the nav bar hides and
I setTimeOut after 5 seconds the the nav bar shows out  */ 

const nav_bar = document.querySelector('.page__header');
const scrolling = document.querySelector('#scrolling');
const header = document.querySelector('.main__hero');
header.addEventListener('mouseover', function(){
  nav_bar.style.top = '0';
})
scrolling.addEventListener('mouseover', function(){
  nav_bar.style.top = '0';
  setTimeout(function(){
    nav_bar.style.top = '-50';}, "10000");
})





/* Add an active state to your navigation items when a section is in the viewport.*/
 function makeActive(){
    const sections = scrolling.children;
    for( const section of sections){
        box = section.getBoundingClientRect();
        if (box.top <= window.innerHeight/2 && box.bottom >= window.innerHeight/2){
            section.classList.add('Active');
              } else {
            section.classList.remove('Active');
        };
      };
    };
  
document.addEventListener('scroll', makeActive);



/*To highlight nav with the active section*/


function navHighLight(){
  const navBar = document.querySelector('#navbar__list');
  const sections = scrolling.children;

  for (const section of sections){
    if(section.classList.contains('section_1') && section.classList.contains('Active')){
      firstSection.classList.add('active_');
    }else if (section.classList.contains('section_2') && section.classList.contains('Active')){
      secondSection.classList.add('active_');
    }else if(section.classList.contains('section_3') && section.classList.contains('Active')){
      thirdSection.classList.add('active_');
    }else if(section.classList.contains('section_4') && section.classList.contains('Active')){
      fourthSection.classList.add('active_');
    };
  };};

document.addEventListener('scroll', navHighLight);

/*function a(){
if(section1.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })){
  firstSection.style.backgroundColor = "red";
} else if(section2.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })){
  secondSection.style.backgroundColor = "red";
} else if (section3.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })){
  thirdSection.style.backgroundColor = "red";
} else if (section1.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })){
  fourthSection.style.backgroundColor = "red";
} else{
  console.log("try!!")
};
};*/




