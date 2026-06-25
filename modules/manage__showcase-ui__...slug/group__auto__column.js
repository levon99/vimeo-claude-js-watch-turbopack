{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = ({
    index: _v0
  }) => (0, _v1.jsxs)(_v7.ContentRow, {
    listGridColumns: `${(0, _v4.rem)(130)} 4fr 0.5fr`,
    sx: _v8.responsiveRowSx,
    role: "group",
    disableHover: !0,
    tabIndex: -1,
    gap: "md",
    children: [(0, _v1.jsx)(_v7.ContentRow.Column, {
      hideAtWidth: _v6.bokehTheme.breakpoints.md,
      children: (0, _v1.jsx)(_v3.Checkbox, {
        isDisabled: !0
      })
    }), (0, _v1.jsx)(_v7.ContentRow.Column, {
      children: (0, _v1.jsx)(_v5.Skeleton, {
        h: (0, _v4.rem)(73),
        minW: (0, _v4.rem)(130)
      })
    }), (0, _v1.jsx)(_v7.ContentRow.Column, {
      overflow: "auto",
      justifyColumn: "auto",
      children: (0, _v1.jsx)(_v2.Flex, {
        w: "100%",
        gap: "3",
        children: (0, _v1.jsxs)(_v2.Flex, {
          direction: "column",
          overflow: "hidden",
          gap: "xs",
          children: [(0, _v1.jsx)(_v5.Skeleton, {
            variant: "text",
            width: (0, _v4.rem)(246)
          }), (0, _v1.jsxs)(_v2.Flex, {
            align: "center",
            gap: "xs",
            children: [(0, _v1.jsx)(_v5.Skeleton, {
              borderRadius: "50%",
              boxSize: (0, _v4.rem)(12),
              flexShrink: 0
            }), (0, _v1.jsx)(_v5.Skeleton, {
              variant: "text",
              width: (0, _v4.rem)(141)
            })]
          })]
        })
      })
    }), (0, _v1.jsx)(_v7.ContentRow.Column, {
      hideAtWidth: _v6.bokehTheme.breakpoints.lg,
      children: (0, _v1.jsx)(_v2.Flex, {
        children: (0, _v1.jsx)(_v5.Skeleton, {
          variant: "text",
          w: (0, _v4.rem)(86),
          alignItems: "flex-end"
        })
      })
    }), (0, _v1.jsx)(_v7.ContentRow.Column, {
      hideAtWidth: _v6.bokehTheme.breakpoints.lg,
      children: (0, _v1.jsx)(_v2.Flex, {
        children: (0, _v1.jsx)(_v5.Skeleton, {
          variant: "text",
          w: (0, _v4.rem)(140),
          alignItems: "flex-end"
        })
      })
    })]
  }, `loading-state-skeleton-card-list-${_v0}`);
  _v0.s(["ContentRowLoading", 0, _v9], 0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = ({
    index: _v0
  }) => {
    let _v1 = (0, _v10.useStore)(_v0 => _v0.commonStore.sidebarWidth) < _v11.SIDEBAR_CONSTRAINTS.MAX_WIDTH_LG;
    return (0, _v1.jsxs)(_v7.ContentRow, {
      listGridColumns: (0, _v8.getVideoListSidebarRowGridColumns)(_v1),
      role: "group",
      disableHover: !0,
      tabIndex: -1,
      gap: _v1 ? "sm" : "md",
      children: [(0, _v1.jsx)(_v7.ContentRow.Column, {
        hideAtWidth: _v6.bokehTheme.breakpoints.md,
        children: (0, _v1.jsx)(_v3.Checkbox, {
          size: "sm",
          isDisabled: !0
        })
      }), (0, _v1.jsx)(_v7.ContentRow.Column, {
        children: (0, _v1.jsx)(_v5.Skeleton, {
          h: (0, _v4.rem)(40),
          minW: (0, _v4.rem)(72),
          borderRadius: "sm"
        })
      }), (0, _v1.jsx)(_v7.ContentRow.Column, {
        overflow: "auto",
        justifyColumn: "auto",
        children: (0, _v1.jsx)(_v2.Flex, {
          w: "100%",
          gap: "3",
          children: (0, _v1.jsxs)(_v2.Flex, {
            direction: "column",
            overflow: "hidden",
            gap: "xs",
            children: [(0, _v1.jsx)(_v5.Skeleton, {
              variant: "text",
              width: (0, _v4.rem)(148)
            }), (0, _v1.jsx)(_v5.Skeleton, {
              variant: "text",
              width: (0, _v4.rem)(100)
            })]
          })
        })
      }), !_v1 && (0, _v1.jsx)(_v7.ContentRow.Column, {
        children: (0, _v1.jsx)(_v2.Flex, {
          align: "center",
          children: (0, _v1.jsx)(_v5.Skeleton, {
            variant: "text",
            w: (0, _v4.rem)(60)
          })
        })
      }), !_v1 && (0, _v1.jsx)(_v7.ContentRow.Column, {
        children: (0, _v1.jsx)(_v2.Flex, {
          children: (0, _v1.jsx)(_v5.Skeleton, {
            variant: "text",
            w: (0, _v4.rem)(80),
            alignItems: "flex-end"
          })
        })
      }), _v1 && (0, _v1.jsx)(_v2.Flex, {
        align: "center",
        gap: "xs",
        children: (0, _v1.jsx)(_v5.Skeleton, {
          h: (0, _v4.rem)(24),
          w: (0, _v4.rem)(60),
          borderRadius: "xs"
        })
      })]
    }, `loading-state-skeleton-card-list-${_v0}`);
  };
  _v0.s(["ContentRowSideDrawerLoading", 0, _v12], 0), _v0.s(["LoadingStateList", 0, ({
    isInSideDrawer: _v0 = !1
  }) => (0, _v1.jsx)(_v2.Flex, {
    direction: "column",
    w: "100%",
    gap: "sm",
    ..._v11.loaderAriaProperties,
    children: (0, _v1.jsx)(_v1.Fragment, {
      children: [,,,,].fill(null).map((_v0, _v1) => _v0 ? (0, _v1.jsx)(_v12, {
        index: _v1
      }, _v1) : (0, _v1.jsx)(_v9, {
        index: _v1
      }, _v1))
    })
  })], 0);
}