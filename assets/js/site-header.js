(function () {
  class SiteHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = [
        '<header class="site-header">',
        '  <nav class="top-nav" aria-label="Global">',
        '    <a class="nav-brand" href="/">1022 Productions</a>',
        '    <div class="nav-links">',
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
