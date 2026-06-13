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
    let _v0 = (0, _v2.useContext)(_v8.ViewerContext);
    return (0, _v2.useMemo)(() => _v0?.user ? (0, _v1.jsx)(_v12, {
      userId: _v0.user.id
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: "Unauthorized"
    }), [_v0?.user]);
  }
  let _v12 = ({
    userId: _v0
  }) => {
    let {
        data: _v1,
        size: _v2,
        setSize: _v3,
        error: _v4
      } = (0, _v4.useGetUserVideosInfinite)({
        where: {
          userId: _v0
        },
        query: {
          perPage: 5
        },
        select: ["uri", "name", "description", "createdTime", "pictures"]
      }),
      _v5 = void 0 !== _v1?.[_v1?.length - 1]?.paging.next,
      _v6 = !_v1 && !_v4 || _v2 > 0 && _v1 && void 0 === _v1[_v2 - 1];
    return (0, _v1.jsxs)(_v9.SectionLayout, {
      children: [(0, _v1.jsx)(_v6.Header, {
        size: "2",
        children: "Infinite Query Example"
      }), (0, _v1.jsx)(_v9.PageDescription, {
        children: (0, _v1.jsx)("p", {
          children: "Notice, after loading more and navigating away from this page and then returning, the additional load requests are saved and used to hydrate the page when you return."
        })
      }), !_v1 && (0, _v1.jsx)(_v1.Fragment, {
        children: "Loading..."
      }), (0, _v1.jsx)(_v9.List, {
        children: _v1?.flatMap(_v0 => _v0?.data.map(_v0 => (0, _v1.jsxs)(_v9.ListItem, {
          children: [(0, _v1.jsxs)(_v6.Header, {
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
        }, _v0.uri)))
      }), (0, _v1.jsx)(_v5.Button, {
        disabled: _v5 || _v6,
        onClick: function () {
          _v3(_v2 + 1);
        },
        children: "Load more"
      })]
    });
  };
  _v11.getLayout = (_v0, _v1) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v7.HeaderLayout, {
      ..._v1
    }), (0, _v1.jsxs)(_v9.PageLayout, {
      children: [(0, _v1.jsx)(_v9.Sidebar, {
        ..._v1
      }), (0, _v1.jsx)(_v9.Main, {
        children: _v0
      })]
    })]
  }), (0, _v3.withPageSetup)(async () => ({
    props: {
      layoutOptions: {
        globalSearch: !1,
        ribbon: !0
      },
      activePath: "/demo/gctl/infinite-query"
    }
  }), {
    staffOnly: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v11], 0);
}