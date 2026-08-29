// theme.js — dark mode for Classical Mind.
//
// THE STATUS BAR IS NOT OURS TO PAINT, and proving that took far too long. The
// device reported safe-area-inset-top as 0px while the page asked for
// black-translucent: the web view stops BELOW the clock, so no element,
// stylesheet or z-index can reach that band. It was showing #FAF6EC — a colour
// that appears nowhere in the page chrome and only in manifest.json. iOS was
// painting it from the manifest, read once when the Home Screen icon was made.
//
// So this now copies Days Out NI, which follows the theme correctly on the same
// phone: status-bar-style "default", and the bar takes its colour from the live
// <meta name="theme-color">, which apply() keeps in step. The manifest's
// theme_color is the light chrome too, so a fresh install starts correct.
//
// An icon added to the Home Screen BEFORE those metas existed keeps the old
// behaviour for ever — iOS never re-reads them. That icon has to be deleted and
// re-added once. It is the only step no deploy can do.
//
// THE APP ICON ON THE HOME PAGE IS THE ONLY CONTROL. Inner pages wear the theme
// and offer no second switch.
(function () {
  var KEY = 'theme';
  var CHROME = { light: '#3F8FCB', dark: '#12252F' };

  function current() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
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
    if (ctrl) {
      ctrl.title = label(theme === 'dark');
      ctrl.setAttribute('aria-label', label(theme === 'dark'));
    }
    // THIS is what colours the iOS status bar and Safari's chrome. Days Out
    // does exactly the same and follows the theme correctly on the device.
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
