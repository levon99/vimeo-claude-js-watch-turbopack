{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.i(0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  async function _v9({
    baseUrl: _v0,
    select: _v1,
    query: _v2,
    ..._v3
  }) {
    return (0, _v7.measureLatency)("getMeAlbums", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/albums?${(0, _v8.searchQueryString)(_v2)}&fields=${_v1.map(_v8.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v8.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v8.deepCamelCase)(_v1);
    });
  }
  _v0.i(0), _v0.i(0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  function _v19() {
    return (0, _v1.jsxs)(_v17.SectionLayout, {
      children: [(0, _v1.jsx)(_v15.Header, {
        size: "2",
        children: "Suspense Example"
      }), (0, _v1.jsx)(_v17.PageDescription, {
        children: (0, _v1.jsxs)("p", {
          children: ["Suspense currently can't be rendered by ", (0, _v1.jsx)("em", {
            children: "react-dom/server"
          }), ", so only use it on renders that are deferred."]
        })
      }), (0, _v1.jsx)(_v14.Modal, {
        content: (0, _v1.jsx)(_v3.Suspense, {
          fallback: (0, _v1.jsx)(_v4.Spinner, {}),
          children: (0, _v1.jsx)(_v20, {})
        }),
        children: (0, _v1.jsx)(_v13.Button, {
          children: "Open modal"
        })
      })]
    });
  }
  let _v20 = () => {
      let {
          data: _v0,
          size: _v1,
          setSize: _v2,
          isValidating: _v3
        } = function (_v0, _v1) {
          let _v2 = "function" == typeof _v0 ? _v0() : _v0,
            {
              baseUrl: _v3,
              jwt: _v4,
              xVimeoPage: _v5,
              locale: _v6
            } = (0, _v11.useGctlConfig)();
          return (0, _v10.default)((_v0, _v1) => {
            if (null === _v2 || _v1 && !_v1.paging.next) return null;
            let {
                perPage: _v2 = 25,
                page: _v3,
                ..._v4
              } = _v2.query ?? {},
              _v5 = _v2.select.join(","),
              _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
            return [`/me/albums?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
          }, null !== _v2 ? ([_v0, _v1]) => _v9({
            ..._v2,
            baseUrl: _v3,
            headers: {
              ..._v2.headers,
              "Content-Type": "application/json",
              Authorization: _v4 ? `jwt ${_v4}` : "",
              "Vimeo-Page": `${_v5}`,
              "Accept-Language": _v6 ?? "en"
            },
            query: {
              ..._v2.query,
              page: _v1 + 1
            }
          }) : null, _v1);
        }({
          select: ["uri", "name", "pictures", "description", "createdTime"],
          query: {
            perPage: 5
          }
        }, {
          suspense: !0
        }),
        _v4 = void 0 !== _v0?.[_v0.length - 1]?.paging.next;
      return (0, _v1.jsxs)(_v23, {
        children: [(0, _v1.jsx)(_v15.Header, {
          size: "3",
          children: "Albums"
        }), (0, _v1.jsx)(_v22, {
          children: (0, _v1.jsx)(_v17.List, {
            children: _v0?.flatMap(_v0 => _v0?.data.map(_v0 => (0, _v1.jsxs)(_v17.ListItem, {
              children: [(0, _v1.jsx)(_v15.Header, {
                size: "5",
                style: {
                  gridArea: "t",
                  margin: 0,
                  padding: 0
                },
                children: _v0.name
              }), (0, _v1.jsxs)(_v17.ListItemDescription, {
                children: [(0, _v1.jsx)(_v17.Muted, {
                  children: new Date(_v0.createdTime).toLocaleDateString("en")
                }), (0, _v1.jsx)("p", {
                  children: (0, _v18.truncate)(_v0.description ?? void 0, 30)
                })]
              }), (0, _v1.jsx)(_v21, {
                albumId: function (_v0) {
                  let _v1 = _v0.split("/").pop();
                  if (!_v1) throw Error(`Malformed URI: ${_v0}`);
                  return parseInt(_v1, 10);
                }(_v0.uri)
              })]
            }, _v0.uri)))
          })
        }), (0, _v1.jsx)(_v13.Button, {
          disabled: _v4 || _v3,
          onClick: () => _v2(_v1 + 1),
          children: "Load more"
        })]
      });
    },
    _v21 = ({
      albumId: _v0
    }) => {
      let {
          data: _v1
        } = (0, _v6.useGetAlbumVideos)({
          where: {
            albumId: _v0
          },
          select: ["uri", "pictures"]
        }, {
          suspense: !0
        }),
        _v2 = _v1?.data.map(_v0 => (0, _v1.jsx)("div", {
          children: (0, _v1.jsx)(_v24, {
            srcSet: _v0.pictures?.sizes.map(_v0 => `${_v0.link} ${_v0.width}w`).join(", ")
          })
        }, `t.${_v0.uri}`));
      return (0, _v1.jsx)(_v25, {
        children: _v2
      });
    };
  _v19.getLayout = (_v0, _v1) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v16.HeaderLayout, {
      ..._v1
    }), (0, _v1.jsxs)(_v17.PageLayout, {
      children: [(0, _v1.jsx)(_v17.Sidebar, {
        ..._v1
      }), (0, _v1.jsx)(_v17.Main, {
        children: _v0
      })]
    })]
  }), (0, _v5.withPageSetup)(async () => ({
    props: {
      layoutOptions: {
        globalSearch: !1,
        ribbon: !0
      },
      activePath: "/demo/gctl/suspense"
    }
  }), {
    staffOnly: !0
  });
  var _v22 = (0, _v2.default)("div").withConfig({
      displayName: "suspense___StyledDiv",
      componentId: "sc-90291bbf-0"
    })`overflow: auto; max-height: 50vh;`,
    _v23 = (0, _v2.default)("div").withConfig({
      displayName: "suspense___StyledDiv2",
      componentId: "sc-90291bbf-1"
    })`
        background-color: ${_v12.white};
        padding: 1rem 2rem;
        border-radius: 3px;
        width: 80ch;
      `,
    _v24 = (0, _v2.default)("img").withConfig({
      displayName: "suspense___StyledImg",
      componentId: "sc-90291bbf-2"
    })`width: 100%; height: 100%; object-fit: cover;`,
    _v25 = (0, _v2.default)("div").withConfig({
      displayName: "suspense___StyledDiv3",
      componentId: "sc-90291bbf-3"
    })`
        width: 7.1rem;
        height: 4rem;
        display: grid;
        grid-area: i;
        grid-template-columns: 3fr 1fr;
        grid-template-rows: repeat(2, 1fr);
        gap: 0.25rem;

        & > :first-child {
          grid-row: span 2;
        }
      `;
  _v0.s(["__N_SSP", 0, !0, "default", 0, _v19], 0);
}