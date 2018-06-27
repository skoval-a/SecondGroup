

var navItem = document.querySelectorAll('.head a');
var tabItem = document.querySelectorAll('.tab');

document.querySelector('.head').onclick = function(e) {
  var target = e.target;
  for (var  i = 0; i < navItem.length; i++) {
    target == navItem[i] && showContent(i);
  }
}



function hideContent (a) {
  for(var i = 0; i < tabItem.length; i++) {
    tabItem[i].classList.remove('show');
  }
}

function showContent (index) {
  hideContent();
  tabItem[index].classList.add('show');
}
