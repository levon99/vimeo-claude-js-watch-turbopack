{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = new Set(["dark", "light", "system"]);
  _v0.s(["ColorModeScript", 0, function (_v0 = {}) {
    let {
      nonce: _v1
    } = _v0;
    return (0, _v1.jsx)("script", {
      id: "chakra-script",
      nonce: _v1,
      dangerouslySetInnerHTML: {
        __html: function (_v0 = {}) {
          let _v1,
            {
              initialColorMode: _v2 = "light",
              type: _v3 = "localStorage",
              storageKey: _v4 = "chakra-ui-color-mode"
            } = _v0,
            _v5 = (_v1 = _v2, _v2.has(_v1) || (_v1 = "light"), _v1),
            _v6 = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${_v5}",r="${_v4}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `,
            _v7 = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${_v5}",e="${_v4}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
          return `!${"cookie" === _v3 ? _v6 : _v7}`.trim();
        }(_v0)
      }
    });
  }]);
}