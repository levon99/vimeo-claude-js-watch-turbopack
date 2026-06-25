{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s([], 0), _v0.i(0);
  let [_v2, _v3] = (0, _v0.i(0).createContext)({
    name: "PaginationContext",
    hookName: "usePaginationContext",
    providerName: "<PaginationProvider />"
  });
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = (0, _v5.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v6.createSplitProps)()(_v0, ["index"]),
      _v4 = _v3(),
      _v5 = (0, _v4.mergeProps)(_v4.getEllipsisProps(_v2), _v3);
    return (0, _v1.jsx)(_v7.ark.div, {
      ..._v5,
      ref: _v1
    });
  });
  _v8.displayName = "PaginationEllipsis";
  let _v9 = (0, _v5.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v6.createSplitProps)()(_v0, ["value", "type"]),
      _v4 = _v3(),
      _v5 = (0, _v4.mergeProps)(_v4.getItemProps(_v2), _v3);
    return (0, _v1.jsx)(_v7.ark.button, {
      ..._v5,
      ref: _v1
    });
  });
  _v9.displayName = "PaginationItem";
  let _v10 = (0, _v5.forwardRef)((_v0, _v1) => {
    let _v2 = _v3(),
      _v3 = (0, _v4.mergeProps)(_v2.getNextTriggerProps(), _v0);
    return (0, _v1.jsx)(_v7.ark.button, {
      ..._v3,
      ref: _v1
    });
  });
  _v10.displayName = "PaginationNextTrigger";
  let _v11 = (0, _v5.forwardRef)((_v0, _v1) => {
    let _v2 = _v3(),
      _v3 = (0, _v4.mergeProps)(_v2.getPrevTriggerProps(), _v0);
    return (0, _v1.jsx)(_v7.ark.button, {
      ..._v3,
      ref: _v1
    });
  });
  _v11.displayName = "PaginationPrevTrigger";
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = (0, _v12.createAnatomy)("pagination").parts("root", "item", "ellipsis", "prevTrigger", "nextTrigger").build(),
    _v17 = (_v0, _v1) => Array.from({
      length: _v1 - _v0 + 1
    }, (_v0, _v1) => _v1 + _v0),
    _v18 = "ellipsis",
    _v19 = (0, _v4.createMachine)({
      props: ({
        props: _v0
      }) => ({
        defaultPageSize: 10,
        siblingCount: 1,
        defaultPage: 1,
        type: "button",
        count: 1,
        ..._v0,
        translations: {
          rootLabel: "pagination",
          prevTriggerLabel: "previous page",
          nextTriggerLabel: "next page",
          itemLabel: ({
            page: _v0,
            totalPages: _v1
          }) => `${_v1 > 1 && _v0 === _v1 ? "last page, " : ""}page ${_v0}`,
          ..._v0.translations
        }
      }),
      initialState: () => "idle",
      context: ({
        prop: _v0,
        bindable: _v1,
        getContext: _v2
      }) => ({
        page: _v1(() => ({
          value: _v0("page"),
          defaultValue: _v0("defaultPage"),
          onChange(_v0) {
            let _v1 = _v2();
            _v0("onPageChange")?.({
              page: _v0,
              pageSize: _v1.get("pageSize")
            });
          }
        })),
        pageSize: _v1(() => ({
          value: _v0("pageSize"),
          defaultValue: _v0("defaultPageSize"),
          onChange(_v0) {
            _v0("onPageSizeChange")?.({
              pageSize: _v0
            });
          }
        }))
      }),
      watch({
        track: _v0,
        context: _v1,
        action: _v2
      }) {
        _v0([() => _v1.get("pageSize")], () => {
          _v2(["setPageIfNeeded"]);
        });
      },
      computed: {
        totalPages: ({
          context: _v0,
          prop: _v1
        }) => Math.ceil(_v1("count") / _v0.get("pageSize")),
        previousPage: ({
          context: _v0
        }) => 1 === _v0.get("page") ? null : _v0.get("page") - 1,
        nextPage: ({
          context: _v0,
          computed: _v1
        }) => _v0.get("page") === _v1("totalPages") ? null : _v0.get("page") + 1,
        pageRange: ({
          context: _v0,
          prop: _v1
        }) => {
          let _v2 = (_v0.get("page") - 1) * _v0.get("pageSize"),
            _v3 = Math.min(_v2 + _v0.get("pageSize"), _v1("count"));
          return {
            start: _v2,
            end: _v3
          };
        },
        isValidPage: ({
          context: _v0,
          computed: _v1
        }) => _v0.get("page") >= 1 && _v0.get("page") <= _v1("totalPages")
      },
      on: {
        SET_PAGE: {
          guard: "isValidPage",
          actions: ["setPage"]
        },
        SET_PAGE_SIZE: {
          actions: ["setPageSize"]
        },
        FIRST_PAGE: {
          actions: ["goToFirstPage"]
        },
        LAST_PAGE: {
          actions: ["goToLastPage"]
        },
        PREVIOUS_PAGE: {
          guard: "canGoToPrevPage",
          actions: ["goToPrevPage"]
        },
        NEXT_PAGE: {
          guard: "canGoToNextPage",
          actions: ["goToNextPage"]
        }
      },
      states: {
        idle: {}
      },
      implementations: {
        guards: {
          isValidPage: ({
            event: _v0,
            computed: _v1
          }) => _v0.page >= 1 && _v0.page <= _v1("totalPages"),
          isValidCount: ({
            context: _v0,
            event: _v1
          }) => _v0.get("page") > _v1.count,
          canGoToNextPage: ({
            context: _v0,
            computed: _v1
          }) => _v0.get("page") < _v1("totalPages"),
          canGoToPrevPage: ({
            context: _v0
          }) => _v0.get("page") > 1
        },
        actions: {
          setPage({
            context: _v0,
            event: _v1,
            computed: _v2
          }) {
            let _v3 = _v20(_v1.page, _v2("totalPages"));
            _v0.set("page", _v3);
          },
          setPageSize({
            context: _v0,
            event: _v1
          }) {
            _v0.set("pageSize", _v1.size);
          },
          goToFirstPage({
            context: _v0
          }) {
            _v0.set("page", 1);
          },
          goToLastPage({
            context: _v0,
            computed: _v1
          }) {
            _v0.set("page", _v1("totalPages"));
          },
          goToPrevPage({
            context: _v0,
            computed: _v1
          }) {
            _v0.set("page", _v0 => _v20(_v0 - 1, _v1("totalPages")));
          },
          goToNextPage({
            context: _v0,
            computed: _v1
          }) {
            _v0.set("page", _v0 => _v20(_v0 + 1, _v1("totalPages")));
          },
          setPageIfNeeded({
            context: _v0,
            computed: _v1
          }) {
            _v1("isValidPage") || _v0.set("page", 1);
          }
        }
      }
    }),
    _v20 = (_v0, _v1) => Math.min(Math.max(_v0, 1), _v1),
    _v21 = (0, _v14.createProps)()(["count", "dir", "getRootNode", "id", "ids", "onPageChange", "onPageSizeChange", "page", "defaultPage", "pageSize", "defaultPageSize", "siblingCount", "translations", "type"]);
  (0, _v15.createSplitProps)(_v21);
  var _v22 = (0, _v14.createProps)()(["value", "type"]);
  (0, _v15.createSplitProps)(_v22);
  var _v23 = (0, _v14.createProps)()(["index"]);
  (0, _v15.createSplitProps)(_v23);
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = (0, _v5.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v6.createSplitProps)()(_v0, ["count", "defaultPage", "defaultPageSize", "id", "ids", "onPageChange", "onPageSizeChange", "page", "pageSize", "siblingCount", "translations", "type"]),
      _v4 = (_v0 => {
        let _v1 = (0, _v5.useId)(),
          {
            getRootNode: _v2
          } = (0, _v25.useEnvironmentContext)(),
          {
            dir: _v3
          } = (0, _v26.useLocaleContext)(),
          _v4 = {
            id: _v1,
            dir: _v3,
            getRootNode: _v2,
            ..._v0
          };
        return function (_v0, _v1) {
          let {
              send: _v2,
              scope: _v3,
              prop: _v4,
              computed: _v5,
              context: _v6
            } = _v0,
            _v7 = _v5("totalPages"),
            _v8 = _v6.get("page"),
            _v9 = _v4("translations"),
            _v10 = _v4("count"),
            _v11 = _v5("previousPage"),
            _v12 = _v5("nextPage"),
            _v13 = _v5("pageRange"),
            _v14 = "button" === _v4("type"),
            _v15 = 1 === _v8,
            _v16 = _v8 === _v7,
            _v17 = (_v0 => {
              let {
                  page: _v1,
                  totalPages: _v2,
                  siblingCount: _v3
                } = _v0,
                _v4 = Math.min(2 * _v3 + 5, _v2),
                _v5 = Math.max(_v1 - _v3, 1),
                _v6 = Math.min(_v1 + _v3, _v2),
                _v7 = _v5 > 2,
                _v8 = _v6 < _v2 - 1,
                _v9 = _v4 - 2;
              return !_v7 && _v8 ? [..._v17(1, _v9), _v18, _v2] : _v7 && !_v8 ? [1, _v18, ..._v17(_v2 - _v9 + 1, _v2)] : _v7 && _v8 ? [1, _v18, ..._v17(_v5, _v6), _v18, _v2] : _v17(1, _v2);
            })({
              page: _v8,
              totalPages: _v7,
              siblingCount: _v4("siblingCount")
            }).map(_v0 => "number" == typeof _v0 ? {
              type: "page",
              value: _v0
            } : {
              type: "ellipsis"
            });
          return {
            count: _v10,
            page: _v8,
            pageSize: _v6.get("pageSize"),
            totalPages: _v7,
            pages: _v17,
            previousPage: _v11,
            nextPage: _v12,
            pageRange: _v13,
            slice: _v0 => _v0.slice(_v13.start, _v13.end),
            setPageSize(_v0) {
              _v2({
                type: "SET_PAGE_SIZE",
                size: _v0
              });
            },
            setPage(_v0) {
              _v2({
                type: "SET_PAGE",
                page: _v0
              });
            },
            goToNextPage() {
              _v2({
                type: "NEXT_PAGE"
              });
            },
            goToPrevPage() {
              _v2({
                type: "PREVIOUS_PAGE"
              });
            },
            goToFirstPage() {
              _v2({
                type: "FIRST_PAGE"
              });
            },
            goToLastPage() {
              _v2({
                type: "LAST_PAGE"
              });
            },
            getRootProps: () => _v1.element({
              id: _v3.ids?.root ?? `pagination:${_v3.id}`,
              ..._v16.root.attrs,
              dir: _v4("dir"),
              "aria-label": _v9.rootLabel
            }),
            getEllipsisProps: _v0 => {
              let _v1;
              return _v1.element({
                id: (_v1 = _v0.index, _v3.ids?.ellipsis?.(_v1) ?? `pagination:${_v3.id}:ellipsis:${_v1}`),
                ..._v16.ellipsis.attrs,
                dir: _v4("dir")
              });
            },
            getItemProps(_v0) {
              let _v1 = _v0.value,
                _v2 = _v1 === _v8;
              return _v1.element({
                id: _v3.ids?.item?.(_v1) ?? `pagination:${_v3.id}:item:${_v1}`,
                ..._v16.item.attrs,
                dir: _v4("dir"),
                "data-index": _v1,
                "data-selected": (0, _v13.dataAttr)(_v2),
                "aria-current": _v2 ? "page" : void 0,
                "aria-label": _v9.itemLabel?.({
                  page: _v1,
                  totalPages: _v7
                }),
                onClick() {
                  _v2({
                    type: "SET_PAGE",
                    page: _v1
                  });
                },
                ...(_v14 && {
                  type: "button"
                })
              });
            },
            getPrevTriggerProps: () => _v1.element({
              id: _v3.ids?.prevTrigger ?? `pagination:${_v3.id}:prev`,
              ..._v16.prevTrigger.attrs,
              dir: _v4("dir"),
              "data-disabled": (0, _v13.dataAttr)(_v15),
              "aria-label": _v9.prevTriggerLabel,
              onClick() {
                _v2({
                  type: "PREVIOUS_PAGE"
                });
              },
              ...(_v14 && {
                disabled: _v15,
                type: "button"
              })
            }),
            getNextTriggerProps: () => _v1.element({
              id: _v3.ids?.nextTrigger ?? `pagination:${_v3.id}:next`,
              ..._v16.nextTrigger.attrs,
              dir: _v4("dir"),
              "data-disabled": (0, _v13.dataAttr)(_v16),
              "aria-label": _v9.nextTriggerLabel,
              onClick() {
                _v2({
                  type: "NEXT_PAGE"
                });
              },
              ...(_v14 && {
                disabled: _v16,
                type: "button"
              })
            })
          };
        }((0, _v24.useMachine)(_v19, _v4), _v24.normalizeProps);
      })(_v2),
      _v5 = (0, _v4.mergeProps)(_v4.getRootProps(), _v3);
    return (0, _v1.jsx)(_v2, {
      value: _v4,
      children: (0, _v1.jsx)(_v7.ark.nav, {
        ..._v5,
        ref: _v1
      })
    });
  });
  _v27.displayName = "PaginationRoot";
  let _v28 = (0, _v5.forwardRef)((_v0, _v1) => {
    let [{
        value: _v2
      }, _v3] = (0, _v6.createSplitProps)()(_v0, ["value"]),
      _v4 = (0, _v4.mergeProps)(_v2.getRootProps(), _v3);
    return (0, _v1.jsx)(_v2, {
      value: _v2,
      children: (0, _v1.jsx)(_v7.ark.nav, {
        ..._v4,
        ref: _v1
      })
    });
  });
  _v28.displayName = "PaginationRootProvider", _v0.s(["Context", 0, _v0 => _v0.children(_v3()), "Ellipsis", 0, _v8, "Item", 0, _v9, "NextTrigger", 0, _v10, "PrevTrigger", 0, _v11, "Root", 0, _v27, "RootProvider", 0, _v28], 0);
  var _v29 = _v0.i(0),
    _v29 = _v29,
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  let _v34 = _v0 => (0, _v1.jsx)(_v33.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm14 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
      fill: "currentColor"
    })
  });
  var _v35 = _v0.i(0);
  let _v36 = _v0 => (0, _v1.jsx)(_v33.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "m11.29 12 3.54-3.54a1 1 0 1 0-1.42-1.41l-4.24 4.24a1 1 0 0 0 0 1.42L13.41 17a.998.998 0 0 0 .71.29.999.999 0 0 0 .71-.29 1 1 0 0 0 0-1.41L11.29 12Z",
        fill: "currentColor"
      })
    }),
    [_v37, _v38] = (0, _v30.createStylesContext)("Pagination"),
    {
      Context: _v39
    } = _v29,
    _v40 = _v0 => {
      let {
        trigger: _v1
      } = _v38();
      return (0, _v1.jsx)(_v29.PrevTrigger, {
        ..._v0,
        asChild: !0,
        children: (0, _v1.jsx)(_v31.Box, {
          as: "button",
          "aria-label": "Previous page",
          __css: _v1,
          children: (0, _v1.jsx)(_v36, {})
        })
      });
    },
    _v41 = _v0 => {
      let {
        trigger: _v1
      } = _v38();
      return (0, _v1.jsx)(_v29.NextTrigger, {
        ..._v0,
        asChild: !0,
        children: (0, _v1.jsx)(_v31.Box, {
          as: "button",
          "aria-label": "Next page",
          __css: _v1,
          children: (0, _v1.jsx)(_v35.ChevronRightSmall, {})
        })
      });
    },
    _v42 = ({
      value: _v0,
      type: _v1,
      ..._v2
    }) => {
      let {
        item: _v3
      } = _v38();
      return (0, _v1.jsx)(_v29.Item, {
        value: _v0,
        type: _v1,
        asChild: !0,
        children: (0, _v1.jsx)(_v31.Box, {
          as: "button",
          __css: _v3,
          ..._v2,
          children: _v0
        })
      });
    },
    _v43 = _v0 => {
      let {
        ellipsis: _v1
      } = _v38();
      return (0, _v1.jsx)(_v29.Ellipsis, {
        ..._v0,
        asChild: !0,
        children: (0, _v1.jsx)(_v31.Box, {
          __css: _v1,
          children: (0, _v1.jsx)(_v34, {})
        })
      });
    },
    _v44 = ({
      size: _v0 = "md",
      children: _v1,
      count: _v2 = 0,
      ..._v3
    }) => {
      let _v4 = (0, _v32.useMultiStyleConfig)("Pagination", {
        size: _v0
      });
      return (0, _v1.jsx)(_v37, {
        value: _v4,
        children: (0, _v1.jsx)(_v29.Root, {
          asChild: !0,
          count: _v2,
          ..._v3,
          children: (0, _v1.jsx)(_v31.Box, {
            __css: _v4.root,
            children: (0, _v1.jsx)(_v29.Context, {
              children: _v0 => "function" == typeof _v1 ? _v1(_v0) : _v1
            })
          })
        })
      });
    };
  _v0.s(["Pagination", 0, ({
    size: _v0 = "md",
    count: _v1 = 0,
    ..._v2
  }) => (0, _v1.jsx)(_v44, {
    count: _v1,
    size: _v0,
    ..._v2,
    children: _v0 => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v40, {}), _v0.pages.map((_v0, _v1) => "page" === _v0.type ? (0, _v1.jsx)(_v42, {
        ..._v0
      }, _v1) : (0, _v1.jsx)(_v43, {
        index: _v1
      }, _v1)), (0, _v1.jsx)(_v41, {})]
    })
  }), "PaginationContext", 0, _v39, "PaginationEllipsis", 0, _v43, "PaginationItem", 0, _v42, "PaginationNextTrigger", 0, _v41, "PaginationPrevTrigger", 0, _v40, "PaginationRoot", 0, _v44], 0);
}