window.onload = function(){
  setTimeout(function(){
    var wrapperElem = document.getElementsByClassName('wrapper')[0];
    wrapperElem.className = 'wrapper';
  },1000);

  var ulElem = document.getElementsByClassName('content')[0];
  ulElem.addEventListener('click', function(e){
    console.log(e.target);
    
  }, false);
};