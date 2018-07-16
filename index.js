var btnAbt = document.getElementById('about');
var textAbt = document.getElementById('aboutTxt');
var heightAbt = textAbt.clientHeight;
var widthAbt = textAbt.clientWidth;
console.log(widthAbt + 'x' + heightAbt);
textAbt.style.height = heightAbt + 'px';
textAbt.style.width = widthAbt + 'px';

var btnPro = document.getElementById('projects');
var textPro = document.getElementById('projectsTxt');
var heightPro = textPro.clientHeight;
var widthPro = textPro.clientWidth;
console.log(widthPro + 'x' + heightPro);
textPro.style.height = heightPro + 'px';
textPro.style.width = widthPro + 'px';

btnAbt.addEventListener('click', function() {
  if(textAbt.style.visibility == 'hidden') {
    if(textPro.style.visibility !== 'hidden') {
      textPro.style.visibility = 'hidden';
      textPro.style.height = '0';
      textPro.style.width = '0';
      textPro.style.padding = '0';
    }
    textAbt.style.visibility = 'visible';
    textAbt.style.height = heightAbt + 'px';
    textAbt.style.width = widthAbt + 'px';
    textAbt.style.padding = '.5em';
  } else {
    textAbt.style.visibility = 'hidden';
    textAbt.style.height = '0';
    textAbt.style.width = '0';
    textAbt.style.padding = '0';
  }
});

btnPro.addEventListener('click', function() {
  if(textPro.style.visibility == 'hidden') {
    if(textAbt.style.visibility !== 'hidden') {
      textAbt.style.visibility = 'hidden';
      textAbt.style.height = '0';
      textAbt.style.width = '0';
      textAbt.style.padding = '0';
    }
    textPro.style.visibility = 'visible';
    textPro.style.height = heightPro + 'px';
    textPro.style.width = widthPro + 'px';
    textPro.style.padding = '.5em';
  } else {
    textPro.style.visibility = 'hidden';
    textPro.style.height = '0';
    textPro.style.width = '0';
    textPro.style.padding = '0';
  }
});
