{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getMemoryUsage", 0, _v0 => {
    if (window.performance && window.performance.memory) {
      let {
          usedJSHeapSize: _v0,
          totalJSHeapSize: _v1,
          jsHeapSizeLimit: _v2
        } = window.performance.memory,
        _v3 = (_v0 / 0).toFixed(2),
        _v4 = (_v1 / 0).toFixed(2),
        _v5 = (_v2 / 0).toFixed(2),
        _v6 = 0,
        _v7 = 0,
        _v8 = 0,
        _v9 = 0;
      return _v0.layers.forEach(_v0 => {
        _v0.composition.forEach(_v0 => {
          (0, _v1.isTextElement)(_v0) ? _v6++ : (0, _v1.isImageElement)(_v0) ? _v7++ : (0, _v1.isVideoElement)(_v0) ? _v8++ : (0, _v1.isGraphicElement)(_v0) && _v9++;
        });
      }), {
        usedJSHeapSize: _v3,
        totalJSHeapSize: _v4,
        jsHeapSizeLimit: _v5,
        heapUsagePercentage: _v0 / _v1 * 100,
        totalTextElements: _v6,
        totalImageElements: _v7,
        totalVideoElements: _v8,
        totalGraphicElements: _v9
      };
    }
  }, "isFirefox", 0, () => window.navigator.userAgent.indexOf("Firefox") > -1 && -1 === window.navigator.userAgent.indexOf("Chrome")]);
}