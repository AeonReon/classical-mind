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

  function wire(ctrl, isPill) {
    apply(current(), ctrl, isPill);
    function toggle() {
      var next = current() === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(KEY, next); } catch (e) {}
      apply(next, ctrl, isPill);
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

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
