(function () {
  class SiteHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = [
        '<header class="site-header">',
        '  <nav class="top-nav" aria-label="Global">',
        '    <a class="nav-brand" href="/" aria-label="1022 Productions home"><span class="brand-name">1022 Productions</span></a>',
        '    <div class="nav-links">',
        '      <a href="/jubilee/">Jubilee</a>',
        '      <a href="/praise/">Praise</a>',
        '      <a href="/space-watch/">Space Watch</a>',
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
