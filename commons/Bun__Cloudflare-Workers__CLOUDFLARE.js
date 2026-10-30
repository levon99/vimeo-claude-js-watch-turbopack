{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = function (_v0) {
      return _v4.slice(0, _v0.length) === _v0;
    };
  _v1.exports = _v6("Bun/") ? "BUN" : _v6("Cloudflare-Workers") ? "CLOUDFLARE" : _v6("Deno/") ? "DENO" : _v6("Node.js/") ? "NODE" : _v3.Bun && "string" == typeof Bun.version ? "BUN" : _v3.Deno && "object" == typeof Deno.version ? "DENO" : "process" === _v5(_v3.process) ? "NODE" : _v3.window && _v3.document ? "BROWSER" : "REST";
}