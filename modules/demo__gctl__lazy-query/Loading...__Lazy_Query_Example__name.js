{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  function _v11() {
    let [_v0, _v1] = (0, _v5.useGetVideosLazy)(),
      [_v2, _v3] = (0, _v3.useState)(""),
      _v4 = (0, _v3.useMemo)(() => _v1.called ? _v1.data ? (0, _v1.jsx)(_v9.List, {
        children: _v1.data?.data.map(_v0 => (0, _v1.jsxs)(_v9.ListItem, {
          children: [(0, _v1.jsxs)(_v7.Header, {
            size: "5",
            style: {
              gridArea: "t",
              margin: 0,
              padding: 0
            },
            children: [_v0.name, " "]
          }), (0, _v1.jsxs)(_v9.ListItemDescription, {
            children: [(0, _v1.jsx)(_v9.Muted, {
              children: new Date(_v0.createdTime).toLocaleDateString("en")
            }), (0, _v1.jsx)("p", {
              children: (0, _v10.truncate)(_v0.description ?? void 0, 30)
            })]
          }), (0, _v1.jsx)(_v9.Thumbnail, {
            srcSet: _v0.pictures?.sizes?.map(_v0 => `${_v0.link} ${_v0.width}w`).join(", ")
          })]
        }, _v0.uri))
      }) : (0, _v1.jsx)(_v1.Fragment, {
        children: "Loading..."
      }) : null, [_v1]);
    return (0, _v1.jsxs)(_v9.SectionLayout, {
      children: [(0, _v1.jsx)(_v7.Header, {
        size: "2",
        children: "Lazy Query Example"
      }), (0, _v1.jsx)(_v12, {
        onSubmit: function (_v0) {
          _v0.preventDefault(), _v0({
            query: {
              query: _v2
            },
            select: ["uri", "name", "description", "createdTime", "pictures"]
          }), _v3("");
        },
        children: (0, _v1.jsx)(_v6.Search, {
          label: "Find videos",
          value: _v2,
          onChange: function (_v0) {
            _v3(_v0.currentTarget.value);
          },
          disabled: _v1.loading
        })
      }), _v4]
    });
  }
  _v11.getLayout = (_v0, _v1) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v8.HeaderLayout, {
      ..._v1
    }), (0, _v1.jsxs)(_v9.PageLayout, {
      children: [(0, _v1.jsx)(_v9.Sidebar, {
        ..._v1
      }), (0, _v1.jsx)(_v9.Main, {
        children: _v0
      })]
    })]
  }), (0, _v4.withPageSetup)(async () => ({
    props: {
      layoutOptions: {
        globalSearch: !1,
        ribbon: !0
      },
      activePath: "/demo/gctl/lazy-query"
    }
  }), {
    staffOnly: !0
  });
  var _v12 = (0, _v2.default)("form").withConfig({
    displayName: "lazy-query___StyledForm",
    componentId: "sc-c4e0c6ac-0"
  })`max-width: 64ch;`;
  _v0.s(["__N_SSP", 0, !0, "default", 0, _v11], 0);
}