{
  "use strict";

  var _v1 = _v0.i(0);
  (0, _v0.i(0).withPageSetup)(() => ({
    props: {
      omitEsi: !0,
      providers: {
        mode: "export"
      }
    }
  }), {
    staffOnly: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, ({
    playerAssetUrls: _v0,
    ..._v1
  }) => (0, _v1.jsxs)("div", {
    children: [(0, _v1.jsx)("h1", {
      children: "Export Page"
    }), (0, _v1.jsx)("p", {
      children: "Inpect the network tab and see that the document request is much smaller than production."
    }), (0, _v1.jsx)("pre", {
      children: (0, _v1.jsx)("code", {
        children: JSON.stringify(_v1, null, 2)
      })
    })]
  })], 0);
}