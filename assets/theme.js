// theme.js — dark mode, shared by Classical Mind, Classical Architecture,
// Conscious Parenting and Self Mastery. Palette matches Days Out NI.
//
// The theme itself is set by a tiny inline script in each page's <head> so it
// lands before first paint and there is no flash of cream. This file only wires
// up the control.
//
// THE APP ICON ON THE HOME PAGE IS THE ONE CONTROL. An earlier version put a
// separate round button in `.appbar .row`, which broke the layout: that row is
// a three-column grid (icon / title / share) and a fourth child spilled onto a
// second row. A later version dropped a pill onto every inner page instead,
// which read as a per-page setting. Inner pages WEAR the theme and offer no
// switch.
//
// THE STRIP BEHIND THE iPHONE CLOCK IS OURS. Proven on device 2026-08-29 by
// cycling it purple/red/blue on command: with black-translucent plus
// viewport-fit=cover the web view runs underneath the clock, so `body::before`
// in style.css paints that band from --chrome and it follows data-theme like
// anything else. Earlier builds tried to steer it through the theme-color meta,
// then through a reload, then through a real navigation — all of that was aimed
// at an OS-owned bar that turned out not to be OS-owned. It is gone.
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
  var DARK_CHROME = '#12252F';   // matches --chrome and the top of the app bar

  function current() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function label(dark) { return dark ? 'Switch to light mode' : 'Switch to dark mode'; }

  function apply(theme, ctrl) {
    var dark = theme === 'dark';
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    if (ctrl) {
      ctrl.title = label(dark);
      ctrl.setAttribute('aria-label', label(dark));
    }
    // Still kept in step for Safari's own browser chrome, which does read it
    // live. The installed app does not use it.
    if (meta) meta.setAttribute('content', dark ? DARK_CHROME : LIGHT_CHROME);
    // WebKit is lazy about repainting the safe-area band when only a custom
    // property underneath it changed — the colour arrived a beat late, which
    // showed up as the toggle looking glitchy. Reading a layout property forces
    // the repaint to happen now.
    void document.documentElement.offsetHeight;
  }

  function wire(ctrl) {
    apply(current(), ctrl);
    function toggle() {
      var next = current() === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(KEY, next); } catch (e) {}
      apply(next, ctrl);
    }
    ctrl.addEventListener('click', function (e) { e.preventDefault(); toggle(); });
    ctrl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  }

  // Until they choose for themselves, the OS setting wins — on every page, with
  // or without a control on it.
  function watchOS(ctrl) {
    if (!window.matchMedia) return;
    var mq = matchMedia('(prefers-color-scheme: dark)');
    var onChange = function (e) {
      var saved = null;
      try { saved = localStorage.getItem(KEY); } catch (err) {}
      if (!saved) apply(e.matches ? 'dark' : 'light', ctrl);
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
      wire(icon);
      watchOS(icon);
      return;
    }
    apply(current(), null);
    watchOS(null);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
