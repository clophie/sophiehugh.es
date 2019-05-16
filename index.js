var clickEvent = (function() {
  if ('ontouchstart' in document.documentElement === true)
    return 'touchstart';
  else
    return 'click';
})();

$('aboutTxt').on('show.bs.collapse', function () {
  $('projectsTxt').collapse('hide');
});

$('projectsTxt').on('show.bs.collapse', function () {
  $('aboutTxt').collapse('hide');
});

$("#name").fitText(1.0, {minFontSize: '40px'});

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
