// components.js — shared site-header and site-footer web components
(function () {

// ── SITE HEADER ────────────────────────────────────────────────
class SiteHeader extends HTMLElement {
  connectedCallback() {
    const a = this.getAttribute('active') || '';
    const lnk = (page, href, label) =>
      `<a class="nav-link${a === page ? ' active' : ''}" href="${href}">${label}</a>`;
    const mob = (page, href, ico, label, sub, color) =>
      `<a class="mob-link${a === page ? ' mob-link-active' : ''}" href="${href}"><span class="mob-link-ico" style="background:${color}">${ico}</span><span><span class="mob-link-label">${label}</span><span class="mob-link-sub">${sub}</span></span><span class="mob-link-chev">›</span></a>`;

    this.innerHTML = `
<nav class="site-nav">
  <div class="nav-inner">
    <a class="nav-logo" href="/index.html">
      <img src="/assets/logo/avadhut-logo-horizontal.png" alt="Avadhut Tours"
           onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <span class="nav-logo-text" style="display:none">Avadhut Tours</span>
    </a>
    <div class="nav-links">
      ${lnk('home','/index.html','Home')}
      ${lnk('packages','/packages.html','Packages')}
      ${lnk('destinations','/destinations.html','Destinations')}
      ${lnk('gallery','/gallery.html','Gallery')}
      ${lnk('rentals','/rentals.html','Rentals')}
      ${lnk('fleet','/fleet.html','Fleet')}
      ${lnk('blog','/blog.html','Blog')}
      ${lnk('about','/about.html','About')}
      <a class="nav-link" href="/about.html#contact">Contact</a>
    </div>
    <div class="nav-right">
      <a href="tel:+918390922322" class="btn btn-outline btn-sm nav-call-desktop">📞 83909 22322</a>
      <a href="tel:+918390922322" class="nav-call-mobile" aria-label="Call">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="20" height="20">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.13-1.13a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </a>
      <a href="/about.html#contact" class="btn btn-primary btn-sm">Enquire Now</a>
      <button class="nav-hamburger" id="hamburger" onclick="toggleNav()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
<div class="mobile-nav" id="mobile-nav">
  <div class="mob-head">
    <div class="mob-head-brand">
      <img src="/assets/logo/avadhut-emblem.png" alt="Avadhut Tours" onerror="this.style.display='none'">
      <div>
        <div class="mob-head-title">Avadhut Tours</div>
        <div style="font-size:11px;color:rgba(255,255,255,.6);margin-top:1px">All India Tours &amp; Rentals</div>
      </div>
    </div>
    <button class="mob-head-close" onclick="toggleNav()">✕</button>
  </div>
  <div class="mob-nav-list">
    ${mob('home','/index.html','🏠','Home','Back to homepage','var(--at-saffron-50)')}
    ${mob('packages','/packages.html','🗺️','Tour Packages','32+ destinations across India &amp; abroad','var(--at-saffron-50)')}
    ${mob('destinations','/destinations.html','🧭','Destination Guides','Kashmir · Himachal · Kerala &amp; more','var(--at-saffron-50)')}
    ${mob('gallery','/gallery.html','📷','Gallery','Trip photos from across India','var(--at-saffron-50)')}
    ${mob('rentals','/rentals.html','🚗','Car &amp; Bus Rental','Sedan · SUV · Tempo · Coach','#e9eaf4')}
    ${mob('fleet','/fleet.html','🏢','Corporate Fleet','Employee shuttle · Monthly contract','var(--at-navy-50)')}
    ${mob('blog','/blog.html','✍️','Travel Blog','Tips, guides &amp; destination stories','var(--at-green-100)')}
    ${mob('about','/about.html','ℹ️','About Us','15+ years · 5000+ travellers','var(--at-green-100)')}
    <a class="mob-link" href="/about.html#contact"><span class="mob-link-ico" style="background:var(--at-red-50)">📞</span><span><span class="mob-link-label">Contact Us</span><span class="mob-link-sub">Enquire · WhatsApp · Call</span></span><span class="mob-link-chev">›</span></a>
  </div>
  <div class="mob-foot">
    <div class="mob-btns">
      <a href="tel:+918390922322" class="btn btn-outline">📞 +91 83909 22322</a>
      <a href="/about.html#contact" class="btn btn-primary">✉ Get Free Quote</a>
      <a href="https://wa.me/918390922322" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
    </div>
  </div>
</div>`;
  }
}
customElements.define('site-header', SiteHeader);

// ── SITE FOOTER ────────────────────────────────────────────────
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="ft-brand-col">
        <div class="ft-logo-wrap"><img class="ft-logo" src="/assets/logo/avadhut-logo-horizontal.png" alt="Avadhut Tours" onerror="this.parentElement.style.display='none'"></div>
        <p class="ft-desc">Customised tour packages &amp; vehicle rental across all India. Family-run, trusted by 5000+ travellers since 2008.</p>
        <div class="ft-social">
          <a href="https://www.facebook.com/avadhuttours/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/avadhuttours/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="https://wa.me/918390922322" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z"/></svg>
          </a>
        </div>
      </div>
      <div class="ft-col">
        <h4>Tours</h4>
        <a href="/packages.html">All Packages</a>
        <a href="/packages.html?seg=family">Family Tours</a>
        <a href="/packages.html?seg=senior">Senior Citizen</a>
        <a href="/packages.html?seg=ladies">Ladies Special</a>
        <a href="/packages.html?seg=honeymoon">Honeymoon</a>
        <a href="/packages.html?seg=pilgrimage">Pilgrimage</a>
        <a href="/packages.html?seg=international">International</a>
      </div>
      <div class="ft-col">
        <h4>Services</h4>
        <a href="/rentals.html">Car &amp; Bus Rental</a>
        <a href="/fleet.html">Fleet Management</a>
        <a href="/destinations.html">Destination Guides</a>
        <a href="/about.html">About Us</a>
        <a href="/about.html#contact">Contact</a>
        <a href="#" onclick="openModal('cancel');return false">Cancellation Policy</a>
        <a href="#" onclick="openModal('tnc');return false">Terms &amp; Conditions</a>
        <a href="#" onclick="openModal('privacy');return false">Privacy Policy</a>
      </div>
      <div class="ft-col ft-contact">
        <h4>Contact Us</h4>
        <p>P-191, Sukh Vaibhav, Sector-4,<br>Airoli, Navi Mumbai 400 708</p>
        <p style="color:rgba(255,255,255,.5);font-size:12px;margin:3px 0 7px">🏢 Offices: Pune &amp; Satara</p>
        <div class="ft-contact-row"><span class="ft-ci">📞</span><a href="tel:+918390922322" style="color:rgba(255,255,255,.68)">+91 83909 22322</a></div>
        <div class="ft-contact-row"><span class="ft-ci">✉</span><a href="mailto:avadhuttours365@gmail.com" style="color:rgba(255,255,255,.68)">avadhuttours365@gmail.com</a></div>
        <div class="ft-contact-row"><span class="ft-ci">🕐</span><span style="color:rgba(255,255,255,.68)">Mon–Sat 9 AM–8 PM</span></div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Avadhut Tours. All rights reserved.</p>
      <p><a href="https://share.google/BIthxw6Fp5xZxVwD6" target="_blank" rel="noopener noreferrer" style="color:rgba(255,255,255,.4)">⭐ Google Reviews</a></p>
      <p style="width:100%;text-align:center;font-size:11px;color:rgba(255,255,255,.3);border-top:1px solid rgba(255,255,255,.08);padding-top:8px;margin-top:6px">* Prices shown are indicative. Final pricing will be confirmed at the time of booking via phone or WhatsApp.</p>
    </div>
  </div>
</footer>

<div class="modal-bd" id="modal-cancel">
  <div class="modal-box">
    <div class="modal-head"><h3>Cancellation &amp; Refund Policy</h3><button class="modal-close" onclick="closeModal('cancel')">✕</button></div>
    <div class="modal-body">
      <p>We understand plans can change. Here is our refund schedule:</p>
      <h4>Domestic Tours</h4>
      <ul><li><strong>30+ days before departure:</strong> Full refund minus ₹500 admin fee</li><li><strong>15–30 days:</strong> 50% refund</li><li><strong>Less than 15 days:</strong> No refund</li><li><strong>No-show:</strong> No refund</li></ul>
      <h4>International Tours</h4>
      <ul><li><strong>45+ days before departure:</strong> Full refund minus ₹1,000 admin fee</li><li><strong>30–45 days:</strong> 50% refund</li><li><strong>Less than 30 days:</strong> No refund</li></ul>
      <h4>One Day Picnics</h4>
      <p>7+ days before: full refund. Less than 7 days: no refund. Travel insurance is strongly recommended.</p>
    </div>
  </div>
</div>
<div class="modal-bd" id="modal-tnc">
  <div class="modal-box">
    <div class="modal-head"><h3>Terms &amp; Conditions</h3><button class="modal-close" onclick="closeModal('tnc')">✕</button></div>
    <div class="modal-body">
      <p style="background:#FEF1E9;border-left:3px solid #F15A23;padding:10px 14px;border-radius:4px;font-size:13px;margin:0 0 14px"><strong>Pricing Note:</strong> Prices shown on our website are indicative. Final pricing will be confirmed at the time of booking via phone or WhatsApp.</p>
      <h4>Booking</h4><p>A booking is confirmed upon receipt of minimum 25% advance. Balance due 15 days before departure.</p>
      <h4>Pricing</h4><p>All prices are per person on twin-sharing basis unless stated. Prices may change based on travel dates and availability at time of booking.</p>
      <h4>Itinerary Changes</h4><p>Avadhut Tours may alter itineraries due to weather, safety, or unforeseen circumstances. Equivalent alternatives will be arranged.</p>
      <h4>Liability</h4><p>Avadhut Tours acts as organiser and is not liable for delays or losses caused by third-party providers. Travel insurance is the traveller's responsibility.</p>
      <h4>Disputes</h4><p>All disputes are subject to the jurisdiction of Navi Mumbai courts.</p>
    </div>
  </div>
</div>
<div class="modal-bd" id="modal-privacy">
  <div class="modal-box">
    <div class="modal-head"><h3>Privacy Policy</h3><button class="modal-close" onclick="closeModal('privacy')">✕</button></div>
    <div class="modal-body">
      <p>Avadhut Tours respects your privacy and complies with India's Digital Personal Data Protection Act (DPDP), 2023.</p>
      <h4>Data We Collect</h4>
      <ul><li>Name, mobile number and email when you enquire or book</li><li>Travel preferences and group information to plan your tour</li><li>Usage data from our website (via Google Analytics)</li></ul>
      <h4>How We Use It</h4>
      <ul><li>To respond to enquiries and process bookings</li><li>To send relevant tour offers (opt-out any time)</li></ul>
      <h4>Data Sharing</h4><p>We do not sell personal data. We share necessary details with hotels and transport providers only to fulfil bookings.</p>
      <h4>Contact</h4><p>For privacy concerns email: <a href="mailto:avadhuttours365@gmail.com" style="color:var(--at-saffron-600)">avadhuttours365@gmail.com</a></p>
    </div>
  </div>
</div>

<a class="wa-float" href="https://wa.me/918390922322" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
  <svg viewBox="0 0 24 24" fill="#fff" width="26" height="26">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z"/>
  </svg>
</a>`;
  }
}
customElements.define('site-footer', SiteFooter);

// ── GLOBAL UTILITY FUNCTIONS ───────────────────────────────────
window.toggleNav = function () {
  const nav = document.getElementById('mobile-nav');
  const isOpen = nav.classList.toggle('open');
  document.body.style.overflow = isOpen ? 'hidden' : '';
  const h = document.getElementById('hamburger');
  if (h) h.classList.toggle('open');
};

window.openModal = function (id) {
  const el = document.getElementById('modal-' + id);
  if (el) el.classList.add('open');
};

window.closeModal = function (id) {
  const el = document.getElementById('modal-' + id);
  if (el) el.classList.remove('open');
};

window.toggleFaq = function (el) {
  el.classList.toggle('open');
};

// Close any open modal when clicking the backdrop
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal-bd')) {
    e.target.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// CORS / file:// helper: warn devs, don't break prod
window.safeFetch = function (url) {
  if (window.location.protocol === 'file:') {
    return Promise.reject(new Error('LOCAL_FILE'));
  }
  return fetch(url);
};

window.showLocalDevNotice = function (containerId, what) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px 20px">
    <p style="font-size:15px;font-weight:600;color:var(--at-brown-800);margin:0 0 10px">⚠️ Run a local server to preview</p>
    <p style="font-size:13.5px;color:var(--text-muted);margin:0 0 18px">
      Open Terminal in the project folder and run:<br>
      <code style="background:var(--at-sand);padding:4px 10px;border-radius:6px;font-size:13px">python3 -m http.server 8080</code><br>
      Then visit <strong>http://localhost:8080</strong>
    </p>
    <p style="font-size:13px;color:var(--text-muted);margin:0 0 18px">Or WhatsApp us for ${what}:</p>
    <a href="https://wa.me/918390922322" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp for Details</a>
  </div>`;
};

})();
