{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = ({
    category: _v0
  }) => (0, _v1.jsx)(_v3.Page, {
    children: (0, _v1.jsx)("h1", {
      children: _v0
    })
  });
  _v5.getLayout = _v4.getLayout, (0, _v2.withPageSetup)(async ({
    params: _v0
  }) => ({
    props: {
      category: _v0?.category?.toString()
    }
  }), {
    staffOnly: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v5], 0);
}