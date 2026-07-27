(function () {
  class SiteHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = [
        '<header class="site-header">',
        '  <nav class="top-nav" aria-label="Global">',
        '    <a class="nav-brand" href="/" aria-label="1022 Productions home"><span class="brand-number">1022</span><span class="brand-word">Productions</span></a>',
        '    <div class="nav-links">',
        '      <a href="/jubilee/"><span>01</span>Jubilee</a>',
        '      <a href="/praise/"><span>02</span>Praise</a>',
        '      <a href="/space-watch/"><span>03</span>Space Watch</a>',
        '    </div>',
        '  </nav>',
        '</header>'
      ].join('\n');
    }
  }

  if (!customElements.get('site-header')) {
    customElements.define('site-header', SiteHeader);
  }
})();
