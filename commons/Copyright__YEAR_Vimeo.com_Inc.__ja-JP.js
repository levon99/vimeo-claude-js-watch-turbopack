{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["Copyright", 0, function () {
    return (0, _v1.jsx)(_v3.Paragraph, {
      size: "3",
      children: (0, _v2.translate)({
        singular: "© {YEAR} Vimeo.com, Inc.",
        replacements: {
          YEAR: new Date().getFullYear().toString()
        },
        dictionary: {
          "ja-JP": {
            singular: "© {YEAR} Vimeo.com,Inc."
          }
        }
      })
    });
  }]);
}