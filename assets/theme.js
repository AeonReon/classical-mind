// theme.js — dark mode for Classical Mind.
//
// Rebuilt from scratch 2026-08-29 after the first attempt was reverted. Four
// builds failed to make the band behind the iPhone clock follow the theme, so
// this version is designed around what was actually PROVEN on the device rather
// than what should work in principle.
//
// WHAT WAS PROVEN: driving that band from an INLINE style changes it, on
// demand, instantly — the user watched it cycle purple, red, blue. Driving the
// same colour through a `[data-theme="dark"]` CSS rule never moved it, four
// times running. So this file does not ask CSS to paint the band. It creates a
// real element and writes the colour onto it directly, which is the mechanism
// that works.
//
// WHAT IS STILL UNEXPLAINED is why the CSS route failed. The leading suspect is
// that the stylesheet reaching the phone did not contain the dark rules at all
// (a service worker sits in front of it, and inline styles work regardless of
// what CSS loaded, which fits both observations). So the dark block declares
// --dark-css-loaded, this file reads it back, and the version pill reports it.
// If it ever says "css missing", that is the answer and no more guessing is
// needed.
//
// THE APP ICON ON THE HOME PAGE IS THE ONLY CONTROL. Inner pages wear the theme
// and offer no second switch.
(function () {
  var KEY = 'theme';
  // ===== DIAGNOSTIC v61 — revert to { light:'#3F8FCB', dark:'#12252F' } =====
  // The band is forced MAGENTA in both themes. Nothing else in this app is
  // magenta, so "did the band change?" cannot be confused with "did the app bar
  // change?" — which is the ambiguity that misdirected three builds. The page
  // itself still goes properly light and dark; only the band is flagged.
  var CHROME = { light: '#FF00AA', dark: '#FF00AA' };

  function current() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  // ---- The band behind the clock ----------------------------------------
  // A real element, positioned and coloured inline, so it depends on no
  // stylesheet at all. The <head> boot script creates it as soon as <body>
  // exists so it is painted correctly on the first frame; this is the fallback
  // for any page that somehow loads without it.
  function strip() {
    var el = document.getElementById('chromestrip');
    if (!el && document.body) {
      el = document.createElement('div');
      el.id = 'chromestrip';
      el.style.cssText = 'position:fixed;top:0;left:0;right:0;' +
                         'height:env(safe-area-inset-top,0px);z-index:9999;pointer-events:none';
      document.body.insertAdjacentElement('afterbegin', el);
    }
    return el;
  }

  function paintStrip(theme) {
    var el = strip();
    if (el) el.style.background = CHROME[theme];
    // WebKit is lazy about repainting the safe-area region. Force it now.
    void document.documentElement.offsetHeight;
  }

  // ---- Did the dark stylesheet actually arrive? --------------------------
  // --dark-css-loaded is declared once, inside the [data-theme="dark"] block.
  // If it comes back empty while the theme is dark, this device is running a
  // stylesheet without the dark rules — which would explain everything.
  function darkCssLoaded() {
    var was = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', 'dark');
    var v = getComputedStyle(document.documentElement).getPropertyValue('--dark-css-loaded').trim();
    document.documentElement.setAttribute('data-theme', was || 'light');
    return v === '1';
  }

  function label(dark) { return dark ? 'Switch to light mode' : 'Switch to dark mode'; }

  function apply(theme, ctrl) {
    document.documentElement.setAttribute('data-theme', theme);
    paintStrip(theme);
    if (ctrl) {
      ctrl.title = label(theme === 'dark');
      ctrl.setAttribute('aria-label', label(theme === 'dark'));
    }
    // Safari's own browser chrome does read this live. The installed app does
    // not use it — the element above is what it sees.
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', CHROME[theme]);
  }

  function wire(ctrl) {
    ctrl.classList.add('theme-icon-btn');
    ctrl.setAttribute('role', 'button');
    ctrl.setAttribute('tabindex', '0');
    function toggle() {
      var next = current() === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(KEY, next); } catch (e) {}
      apply(next, ctrl);
    }
    ctrl.addEventListener('click', function (e) { e.preventDefault(); toggle(); });
    ctrl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
    apply(current(), ctrl);
  }

  // Until they choose for themselves, the OS setting wins — on every page,
  // control or no control.
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

  // The version pill doubles as the readout. It is pointer-events:none, so this
  // must not need a tap.
  function report() {
    var tries = 0;
    var t = setInterval(function () {
      var pill = document.querySelector('.version-pill');
      if (!pill) { if (++tries > 40) clearInterval(t); return; }
      clearInterval(t);
      if (!darkCssLoaded()) pill.textContent = pill.textContent + ' · CSS MISSING';
    }, 100);
  }

  function mount() {
    var icon = document.querySelector('.appbar .abico');
    if (icon) { wire(icon); watchOS(icon); }
    else { apply(current(), null); watchOS(null); }
    report();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
