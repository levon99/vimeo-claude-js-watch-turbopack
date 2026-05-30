{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = ((_v1 = {})[_v1.BarebonePlayer = 0] = "BarebonePlayer", _v1[_v1.VimeoPlayer = 1] = "VimeoPlayer", _v1);
  class _v5 {
    asset = {
      js: "",
      css: ""
    };
    isJSAdded = !1;
    isCSSAdded = !1;
    type;
    assetUrls;
    constructor(_v0, _v1) {
      this.type = _v0, this.assetUrls = _v1;
    }
    load = () => {
      this.asset = this.getAssets();
      let _v0 = [];
      return this.checkIfJsExists || _v0.push(this.addJs()), this.checkIfCSSExists || _v0.push(this.addCss()), Promise.all(_v0.length ? _v0 : [Promise.resolve()]);
    };
    cleanup = () => {
      this.isJSAdded && (this.removeJs(), this.isJSAdded = !1), this.isCSSAdded && (this.removeCss(), this.isCSSAdded = !1);
    };
    get checkIfJsExists() {
      return null == this.asset.js;
    }
    get checkIfCSSExists() {
      return null == this.asset.css;
    }
    getAssets = () => {
      switch (this.type) {
        case 1:
          return {
            js: this.assetUrls.js,
            css: this.assetUrls.css
          };
        case 0:
          return {
            js: this.assetUrls.barebone_js,
            css: this.assetUrls.css
          };
        default:
          throw TypeError("Invalid PlayerType, must be either .BarebonePlayer or .ChromelessPlayer or .VimeoPlayer!");
      }
    };
    addJs = () => {
      let _v0 = document.createElement("script");
      _v0.src = this.asset.js, document.body.appendChild(_v0);
      let _v1 = this.generatePromise(_v0);
      return _v1.then(() => this.isJSAdded = !0), _v1;
    };
    addCss = () => {
      let _v0 = document.createElement("link");
      _v0.rel = "stylesheet", _v0.type = "text/css", _v0.media = "screen", _v0.href = this.asset.css, document.getElementsByTagName("head")[0].appendChild(_v0);
      let _v1 = this.generatePromise(_v0);
      return _v1.then(() => this.isCSSAdded = !0), _v1;
    };
    removeJs = () => {
      let _v0 = document.querySelector(`script[src="${this.asset.js}"]`);
      _v0 && _v0.parentNode && _v0.parentNode.removeChild(_v0);
    };
    removeCss = () => {
      let _v0 = document.querySelector(`link[href="${this.asset.css}"]`);
      _v0 && _v0.parentNode && _v0.parentNode.removeChild(_v0);
    };
    generatePromise = _v0 => new Promise((_v0, _v1) => {
      _v0.onload = _v0, _v0.onabort = _v1, _v0.onerror = _v1;
    });
  }
  _v0.s(["PlayerLoader", 0, _v5, "PlayerType", () => _v4], 0);
  let _v6 = _v3.default.createContext({
    PlayerConstructor: void 0,
    playerType: void 0
  });
  _v0.s(["PlayerContext", 0, _v6, "default", 0, function ({
    type: _v0,
    assetUrls: _v1,
    children: _v2
  }) {
    let [_v3, _v4] = (0, _v3.useState)({
      PlayerConstructor: void 0,
      playerType: void 0
    });
    return (0, _v3.useEffect)(() => {
      let _v0 = new _v5(_v0, _v1);
      return _v0.load().then(() => {
        _v4({
          PlayerConstructor: window[_v4[_v0]],
          playerType: _v0
        });
      }), () => {
        _v0 && _v0.cleanup();
      };
    }, [_v1, _v0]), (0, _v2.jsx)(_v6.Provider, {
      value: _v3,
      children: _v2
    });
  }], 0);
}