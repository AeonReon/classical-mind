// theme.js — dark mode, shared by Classical Mind, Classical Architecture,
// Conscious Parenting and Self Mastery. Palette matches Days Out NI.
//
// The theme itself is set by a tiny inline script in each page's <head> so it
// lands before first paint and there is no flash of cream. This file only wires
// up the control.
//
// THE APP ICON IS THE CONTROL. An earlier version added a separate round button
// to the app bar, which broke it: `.appbar .row` is a three-column grid
// (icon / title / share) and a fourth child spilled onto a second row, pushing
// the icon and share button out of vertical centre. Tapping the logo is tidier
// and keeps the bar symmetrical. Inner pages have no app bar — they get a pill
// that matches the existing Back / Home corner controls.
(function () {
  // ONE key for the whole app, not one per page. This used to be built from
  // location.pathname, which on a flat site resolved to '/index.html',
  // '/schools.html' and so on — so every page remembered its own theme and the
  // app flickered between light and dark as you moved through it. localStorage
  // is already per-origin and each app has its own origin, so a bare 'theme'
  // is enough. Old per-page keys are migrated once, so nobody loses their choice.
  var KEY = 'theme';
  try {
    if (localStorage.getItem(KEY) === null) {
      for (var i = 0; i < localStorage.length; i++) {
        var ok = localStorage.key(i);
        if (ok && ok.indexOf('theme:') === 0) { localStorage.setItem(KEY, localStorage.getItem(ok)); break; }
      }
    }
  } catch (e) {}
  var meta = document.querySelector('meta[name="theme-color"]');
  // The boot script may already have darkened the meta, so take the page's real
  // light colour from the attribute it stashed rather than from the live meta.
  var LIGHT_CHROME = document.documentElement.getAttribute('data-chrome-light')
                  || (meta ? meta.getAttribute('content') : '#3F8FCB');
  var DARK_CHROME = '#12252F';   // matches the darkened app bar

  function current() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function label(dark) { return dark ? 'Switch to light mode' : 'Switch to dark mode'; }

  function apply(theme, ctrl, isPill) {
    var dark = theme === 'dark';
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    if (ctrl) {
      ctrl.title = label(dark);
      ctrl.setAttribute('aria-label', label(dark));
      if (isPill) ctrl.textContent = dark ? '☀' : '☾';
    }
    if (meta) meta.setAttribute('content', dark ? DARK_CHROME : LIGHT_CHROME);
  }

  // Installed on the Home Screen, iOS reads <meta name="theme-color"> ONCE, when
  // the document loads, and ignores every change to it after that. So flipping
  // the theme repainted the whole page and left the strip behind the clock at
  // whatever it was when you arrived — and walking into a section and back
  // "set" it again, because that was a fresh load. Nothing in CSS can reach it.
  // In a standalone window the toggle therefore reloads: the boot script in the
  // head sets the theme and the meta before first paint, so the reload is
  // invisible apart from the strip finally moving with everything else.
  // Safari repaints its own chrome live, so there it just toggles.
  var STANDALONE = window.navigator.standalone === true ||
                   (window.matchMedia && matchMedia('(display-mode: standalone)').matches);

  function reloadForChrome(next) {
    try { sessionStorage.setItem('theme:scroll', String(window.scrollY || 0)); } catch (e) {}
    // A same-URL reload is NOT enough. iOS treats it as the same document and
    // keeps the strip colour it already has — which is why v55 changed nothing.
    // Walking into a section and back out DID move it, because that is a real
    // navigation, so that is what this does: go to a URL the app does not
    // currently have open. `?t=` flips between two values, so the next toggle
    // is always a different URL again.
    var base = location.href.split('#')[0].split('?')[0];
    location.replace(base + '?t=' + next);
  }

  function wire(ctrl, isPill) {
    apply(current(), ctrl, isPill);
    function toggle() {
      var next = current() === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(KEY, next); } catch (e) {}
      apply(next, ctrl, isPill);
      if (STANDALONE) reloadForChrome(next);
    }
    ctrl.addEventListener('click', function (e) { e.preventDefault(); toggle(); });
    ctrl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  }

  // Until they choose for themselves, the OS setting wins — on every page, with
  // or without a control on it.
  function watchOS(ctrl, isPill) {
    if (!window.matchMedia) return;
    var mq = matchMedia('(prefers-color-scheme: dark)');
    var onChange = function (e) {
      var saved = null;
      try { saved = localStorage.getItem(KEY); } catch (err) {}
      if (!saved) apply(e.matches ? 'dark' : 'light', ctrl, isPill);
    };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  function mount() {
    var icon = document.querySelector('.appbar .abico');
    if (icon) {
      icon.classList.add('theme-icon-btn');
      icon.setAttribute('role', 'button');
      icon.setAttribute('tabindex', '0');
      wire(icon, false);
      watchOS(icon, false);
      return;
    }
    // ONE control, on the home page, and nowhere else — the user's call
    // 2026-08-28. Inner pages still WEAR the theme (the boot script in their
    // head sets it before paint from the same key); they just do not offer a
    // second switch. An earlier build dropped a pill between the Back and Home
    // corners on all ~50 inner pages, which read as a per-page setting.
    apply(current(), null, false);
    watchOS(null, false);
  }

  // ---- Strip diagnostic (temporary, v56) --------------------------------
  // We cannot see the device, and the three possible iOS behaviours look alike
  // in a screenshot. The version pill reports the one number that separates
  // them for twelve seconds after launch, then goes back to the version.
  //   inset > 0  -> the web view runs UNDER the clock, so the PAGE paints the
  //                 strip: a pure CSS fix, guaranteed, no reload tricks.
  //   inset 0    -> iOS owns an opaque bar and only re-reads its colour when a
  //                 document loads, which is what the ?t= navigation is for.
  // The pill is pointer-events:none by design, so this must not need a tap.
  function mountDiag() {
    var tries = 0;
    var timer = setInterval(function () {
      var pill = document.querySelector('.version-pill');
      if (!pill) { if (++tries > 40) clearInterval(timer); return; }
      clearInterval(timer);
      var probe = document.createElement('div');
      probe.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:env(safe-area-inset-top,0px)';
      document.body.appendChild(probe);
      var inset = Math.round(probe.getBoundingClientRect().height);
      probe.remove();
      var where = (window.navigator.standalone === true) ? 'home'
                : (window.matchMedia && matchMedia('(display-mode: standalone)').matches) ? 'standalone'
                : 'browser';
      var version = pill.textContent;
      pill.textContent = version + ' · inset ' + inset + ' · ' + where + ' · ' + current();
      setTimeout(function () { pill.textContent = version; }, 12000);
    }, 100);
  }

  function restoreScroll() {
    try {
      var y = sessionStorage.getItem('theme:scroll');
      if (y === null) return;
      sessionStorage.removeItem('theme:scroll');
      window.scrollTo(0, parseInt(y, 10) || 0);
    } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { mount(); restoreScroll(); mountDiag(); });
  } else { mount(); restoreScroll(); mountDiag(); }
})();
