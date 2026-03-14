// Simple password gate — not truly secure, just keeps casual visitors out
(function() {
  var PASS = 'yeahbuddy';

  if (sessionStorage.getItem('sb_access') === 'granted') return;

  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#1B2A4A;z-index:99999;display:flex;align-items:center;justify-content:center;font-family:"Nunito Sans",sans-serif;';

  overlay.innerHTML =
    '<div style="text-align:center;color:#FBF8F4;padding:2rem;">' +
      '<h1 style="font-family:Cormorant Garamond,serif;font-size:2.5rem;margin-bottom:0.5rem;">Songbird Boutique</h1>' +
      '<p style="color:rgba(255,255,255,0.5);margin-bottom:2rem;font-size:0.9rem;">This site is currently under construction.</p>' +
      '<input id="gate-pw" type="password" placeholder="Enter password" style="padding:0.8rem 1.2rem;font-size:1rem;border:1.5px solid rgba(255,255,255,0.2);border-radius:2px;background:rgba(255,255,255,0.08);color:#FBF8F4;outline:none;width:250px;font-family:inherit;">' +
      '<br><button id="gate-btn" style="margin-top:1rem;padding:0.8rem 2rem;font-size:0.85rem;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;background:#C4725E;color:#FBF8F4;border:none;border-radius:2px;cursor:pointer;font-family:inherit;">Enter</button>' +
      '<p id="gate-err" style="color:#C4725E;margin-top:1rem;font-size:0.85rem;display:none;">Incorrect password</p>' +
    '</div>';

  document.body.appendChild(overlay);

  function tryAccess() {
    if (document.getElementById('gate-pw').value === PASS) {
      sessionStorage.setItem('sb_access', 'granted');
      overlay.remove();
    } else {
      document.getElementById('gate-err').style.display = 'block';
    }
  }

  document.getElementById('gate-btn').addEventListener('click', tryAccess);
  document.getElementById('gate-pw').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') tryAccess();
  });
})();
