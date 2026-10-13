// Animated "OCEAN DYNAMICS" banner (see css/banner.css).
// Some browsers refuse to autoplay even a muted video (iOS Safari in Low Power Mode, Android data
// saver) and show their own play button instead. If playback is refused, or has not started after a
// few seconds, show the still frame in place of the video; if the video starts later (e.g. it was
// only slow to load), switch back to it.
(function () {
  var v = document.getElementById('od-video');
  if (!v) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var banner = v.parentNode;

  function showStill() { if (v.paused) banner.classList.add('od-paused'); }
  v.addEventListener('playing', function () { banner.classList.remove('od-paused'); });

  var p = v.play && v.play();
  if (p && p.catch) p.catch(showStill);
  setTimeout(showStill, 3000);
})();
