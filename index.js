var btn = document.getElementById('about');
var text = document.getElementById('aboutTxt');
var height = text.clientHeight;
var width = text.clientWidth;
console.log(width + 'x' + height);
text.style.height = height + 'px';
text.style.width = width + 'px';

btn.addEventListener('click', function() {
  if(text.style.visibility == 'hidden') {
    text.style.visibility = 'visible';
    text.style.height = height + 'px';
    text.style.width = width + 'px';
    hint.style.padding = '.5em';
  } else {
    text.style.visibility = 'hidden';
    text.style.height = '0';
    text.style.width = '0';
    text.style.padding = '0';
  }
});
