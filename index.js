var clickEvent = (function() {
  if ('ontouchstart' in document.documentElement === true)
    return 'touchstart';
  else
    return 'click';
})();

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

$(document).ready(function() {
  const aboutTxt = $('#aboutTxt');
  const projectTxt = $('#projectsTxt');

  aboutTxt.on('click', function () {
    alert('hello');
    aboutTxt.collapse('toggle');
  });

  aboutTxt.on('show.bs.collapse', function () {
    projectTxt.collapse('hide');
  });

  projectTxt.on('click', function () {
    projectTxt.collapse('toggle');
  });

  projectTxt.on('show.bs.collapse', function () {
    aboutTxt.collapse('hide');
  });

  $("#name").fitText(1.0, {maxFontSize: '60px', minFontSize: '40px'});
});