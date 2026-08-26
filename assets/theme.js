// theme.js — dark mode toggle, shared by Classical Mind, Classical Architecture,
// Conscious Parenting and Self Mastery. Same behaviour as Days Out NI.
//
// The theme itself is applied by a tiny inline script in each page's <head>, so
// it lands before first paint and there is no flash of cream. This file only
// draws the button and handles the tap.
//
// Where the page has an app bar the button sits in it, next to "Get app". The
// inner pages build their headers in JS, so there it floats top-right instead.
(function () {
  var KEY = 'theme:' + location.pathname.split('/').slice(0, 2).join('/');
  var MOON = '<svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  var SUN = '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="currentColor" stroke="none"/><line x1="12" y1="2.6" x2="12" y2="4.8"/><line x1="12" y1="19.2" x2="12" y2="21.4"/><line x1="2.6" y1="12" x2="4.8" y2="12"/><line x1="19.2" y1="12" x2="21.4" y2="12"/><line x1="5.3" y1="5.3" x2="6.9" y2="6.9"/><line x1="17.1" y1="17.1" x2="18.7" y2="18.7"/><line x1="18.7" y1="5.3" x2="17.1" y2="6.9"/><line x1="6.9" y1="17.1" x2="5.3" y2="18.7"/></svg>';

  var meta = document.querySelector('meta[name="theme-color"]');
  var LIGHT_CHROME = meta ? meta.getAttribute('content') : '#3F8FCB';
  var DARK_CHROME = '#0F1E2A';

  function current() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function apply(theme, btn) {
    var dark = theme === 'dark';
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    if (btn) {
      btn.innerHTML = dark ? SUN : MOON;
      var label = dark ? 'Switch to light mode' : 'Switch to dark mode';
      btn.title = label;
      btn.setAttribute('aria-label', label);
    }
    if (meta) meta.setAttribute('content', dark ? DARK_CHROME : LIGHT_CHROME);
  }

  function mount() {
    if (document.getElementById('themeToggle')) return;
    var btn = document.createElement('button');
    btn.id = 'themeToggle';
    btn.type = 'button';
    btn.className = 'theme-toggle-btn';

    // Prefer the app bar; the install button is the reliable anchor for it.
    var host = document.querySelector('.appbar .row');
    if (host) host.appendChild(btn);
    else { btn.classList.add('floating'); document.body.appendChild(btn); }

    apply(current(), btn);
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(KEY, next); } catch (e) {}
      apply(next, btn);
    });

    // Follow the OS only while the reader has not made an explicit choice.
    if (window.matchMedia) {
      var mq = matchMedia('(prefers-color-scheme: dark)');
      var onChange = function (e) {
        var saved = null;
        try { saved = localStorage.getItem(KEY); } catch (err) {}
        if (!saved) apply(e.matches ? 'dark' : 'light', btn);
      };
      if (mq.addEventListener) mq.addEventListener('change', onChange);
      else if (mq.addListener) mq.addListener(onChange);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
