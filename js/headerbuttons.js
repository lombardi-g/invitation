let introHeight = document.getElementById('intro').offsetHeight + document.getElementById('date-information').offsetHeight + document.getElementById('header').offsetHeight;
let dressHeight = document.getElementById('RSVP').offsetHeight + introHeight;
let locationHeight = document.getElementById('dress-code').offsetHeight + dressHeight;
let giftsHeight = document.getElementById('gifts-menu').offsetHeight + locationHeight;

document.getElementById('RSVP-button').addEventListener('click',function(){
  window.scrollTo({
    top:introHeight,
    behavior: 'smooth'});
  // console.log(introHeight)
});

document.getElementById('dress-button').addEventListener('click',function(){
  window.scrollTo({
    top:dressHeight,
    behavior: 'smooth'});
});

document.getElementById('location-button').addEventListener('click',function(){
  window.scrollTo({
    top:locationHeight,
    behavior: 'smooth'});
});

/*document.getElementById('gifts-button').addEventListener('click', function() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })
});*/

document.getElementById('gifts-button').addEventListener('click',function(){
  window.scrollTo({
    top:giftsHeight,
    behavior:'smooth'
  });
});
