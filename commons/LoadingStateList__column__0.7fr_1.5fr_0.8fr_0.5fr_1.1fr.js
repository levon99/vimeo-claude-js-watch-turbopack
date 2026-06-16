{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = {
    [`@media screen and (min-width: ${_v6.bokehTheme.breakpoints.md})`]: {
      gridTemplateColumns: `${(0, _v5.rem)(32)} ${(0, _v5.rem)(150)} 8fr 2.5rem`
    },
    [`@media screen and (min-width: ${_v6.bokehTheme.breakpoints.lg})`]: {
      gridTemplateColumns: `${(0, _v5.rem)(32)} ${(0, _v5.rem)(150)} 7.5fr 2fr 2.5rem`
    },
    [`@media screen and (min-width: ${(0, _v5.rem)(0)})`]: {
      gridTemplateColumns: `${(0, _v5.rem)(32)} ${(0, _v5.rem)(150)} 6fr 1.5fr 2fr 2.5rem`
    },
    [`@media screen and (min-width: ${_v6.bokehTheme.breakpoints.xl})`]: {
      gridTemplateColumns: `${(0, _v5.rem)(32)} ${(0, _v5.rem)(150)} 4fr 2fr 1.5fr 2fr 2.5rem`
    },
    gridTemplateColumns: `${(0, _v5.rem)(150)} 1fr`
  };
  _v0.s(["LoadingStateList", 0, () => (0, _v1.jsx)(_v3.Flex, {
    direction: "column",
    width: "100%",
    gap: "sm",
    children: (0, _v1.jsx)(_v1.Fragment, {
      children: [,,,,].fill(null).map((_v0, _v1) => (0, _v1.jsxs)(_v7.ContentRow, {
        listGridColumns: "0.7fr 1.5fr 0.8fr 0.5fr 1.1fr",
        isSelected: !1,
        role: "group",
        disableHover: !0,
        sx: _v8,
        width: "100%",
        children: [(0, _v1.jsx)(_v7.ContentRow.Column, {
          display: "none",
          sx: {
            [`@media screen and (min-width: ${_v6.bokehTheme.breakpoints.md})`]: {
              display: "flex"
            }
          },
          children: (0, _v1.jsx)(_v1.Fragment, {})
        }), (0, _v1.jsx)(_v7.ContentRow.Column, {
          children: (0, _v1.jsx)(_v2.Box, {
            aspectRatio: 16 / 9,
            width: "150px",
            children: (0, _v1.jsx)(_v4.Skeleton, {
              height: "100%",
              width: "100%"
            })
          })
        }), (0, _v1.jsx)(_v7.ContentRow.Column, {
          width: "100%",
          children: (0, _v1.jsxs)(_v3.Flex, {
            direction: "column",
            gap: "1rem",
            justifyContent: "left",
            paddingLeft: "0.5rem",
            width: "100%",
            children: [(0, _v1.jsx)(_v4.Skeleton, {
              variant: "text",
              maxWidth: "18rem"
            }), (0, _v1.jsx)(_v4.Skeleton, {
              variant: "text",
              maxWidth: "8rem"
            })]
          })
        }), (0, _v1.jsx)(_v7.ContentRow.Column, {
          display: "none",
          sx: {
            [`@media screen and (min-width: ${_v6.bokehTheme.breakpoints.lg})`]: {
              display: "flex"
            }
          },
          children: (0, _v1.jsx)(_v3.Flex, {
            marginRight: "2rem",
            children: (0, _v1.jsx)(_v4.Skeleton, {
              variant: "text",
              width: "4rem",
              alignItems: "flex-end"
            })
          })
        }), (0, _v1.jsx)(_v7.ContentRow.Column, {
          display: "none",
          sx: {
            [`@media screen and (min-width: ${(0, _v5.rem)(0)})`]: {
              display: "flex"
            }
          },
          children: (0, _v1.jsx)(_v3.Flex, {
            marginRight: "2rem",
            children: (0, _v1.jsx)(_v4.Skeleton, {
              variant: "text",
              width: "4rem",
              alignItems: "flex-end"
            })
          })
        }), (0, _v1.jsx)(_v7.ContentRow.Column, {
          display: "none",
          sx: {
            [`@media screen and (min-width: ${_v6.bokehTheme.breakpoints.xl})`]: {
              display: "flex"
            }
          },
          children: (0, _v1.jsx)(_v3.Flex, {
            children: (0, _v1.jsx)(_v4.Skeleton, {
              variant: "text",
              width: "12rem",
              alignItems: "flex-end"
            })
          })
        })]
      }, `loading-state-skeleton-card-list-${_v1}`))
    })
  })]);
}