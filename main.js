document.documentElement.lang = 'es';
// Links Header
let links = document.getElementById('links');
const icon = document.getElementById('icon');
const icons = document.getElementById('icons');


// Scrools
const scrollServices = document.getElementById('scrollServices');
const scrollToServices = document.getElementById('scrollToServices');
const scrollPortfolio = document.getElementById('scrollPortfolio');
const scrollToPortfolio = document.getElementById('scrollToPortfolio');
const scrollAbout = document.getElementById('scrollAbout');
const scrollToAbout = document.getElementById('scrollToAbout');
const scrollContact = document.getElementById('scrollContact');
const scrollToContact = document.getElementById('scrollToContact');
function scrollTo() {
    scrollToServices.scrollIntoView({behavior: "smooth"});
    hideElement();
    
}
    scrollServices.addEventListener('click', scrollTo);
    function scrollTo1() {
        scrollToPortfolio.scrollIntoView({behavior: "smooth"});
    }
scrollPortfolio.addEventListener('click', scrollTo1);
function scrollTo2() {
    scrollToAbout.scrollIntoView({behavior: "smooth"});
}
scrollAbout.addEventListener('click', scrollTo2);
function scrollTo3() {
    scrollToContact.scrollIntoView({behavior: "smooth"});
}
scrollContact.addEventListener('click', scrollTo3);

// Link Youtube
const youtube = document.getElementById('youtube');
function goYoutube() {
    window.open("https://www.youtube.com/");
}
youtube.addEventListener('click', goYoutube);
// Link Facebook
const facebook = document.getElementById('facebook');
function goFacebook() {
    window.open('https://www.facebook.com/');
}
facebook.addEventListener('click', goFacebook);
// Link Facebook
const twitter = document.getElementById('twitter');
function goTwitter() {
    window.open('https://www.twitter.com/');
}
twitter.addEventListener('click', goTwitter);




function hideElement() {
    icon.style.display = 'none';
    icons.style.display = 'none';
}
// scrollToPortfolio.addEventListener('click', hideElement);

function iconS() {
    icons.style.display = 'block';
    icon.style.display = 'block';

}
links.addEventListener('click', iconS);



