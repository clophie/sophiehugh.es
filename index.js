var btnAbt = document.getElementById('about');
var textAbt = document.getElementById('aboutTxt');
var heightAbt = textAbt.clientHeight;
var widthAbt = textAbt.clientWidth;
textAbt.style.height = heightAbt + 'px';
textAbt.style.width = widthAbt + 'px';

var btnPro = document.getElementById('projects');
var textPro = document.getElementById('projectsTxt');
var heightPro = textPro.clientHeight;
var widthPro = textPro.clientWidth;
textPro.style.height = heightPro + 'px';
textPro.style.width = widthPro + 'px';
textPro.style.visibility = 'hidden';
textPro.style.height = '0';
textPro.style.width = '0';
textPro.style.padding = '0';
textAbt.style.visibility = 'hidden';
textAbt.style.height = '0';
textAbt.style.width = '0';
textAbt.style.padding = '0';

var clickEvent = (function() {
  if ('ontouchstart' in document.documentElement === true)
    return 'touchstart';
  else
    return 'click';
})();

btnAbt.addEventListener(clickEvent, function () {
  if (textAbt.style.visibility == 'hidden') {
    if (textPro.style.visibility !== 'hidden') {
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

btnPro.addEventListener(clickEvent, function () {
  if (textPro.style.visibility == 'hidden') {
    if (textAbt.style.visibility !== 'hidden') {
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
    textPro.style.width = '0';  }
});



function mouseOut() {
  document.getElementById('name').innerHTML = 'Sophie Hughes';
  document.getElementById('name').style.fontWeight = 'normal';
}

function abtHover() {
  document.getElementById('name').innerHTML = 'About Me';
  document.getElementById('name').style.fontWeight = 'bold';
}

function proHover() {
  document.getElementById('name').innerHTML = 'Projects';
  document.getElementById('name').style.fontWeight = 'bold';
}

function gitHover() {
  document.getElementById('name').innerHTML = 'GitHub';
  document.getElementById('name').style.fontWeight = 'bold';
}

function linHover() {
  document.getElementById('name').innerHTML = 'LinkedIn';
  document.getElementById('name').style.fontWeight = 'bold';
}
