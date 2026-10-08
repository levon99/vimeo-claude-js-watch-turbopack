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
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  _v0.s(["ShowcaseBreadcrumbs", 0, () => {
    let {
        name: _v0
      } = (0, _v8.useSavedName)(),
      _v1 = (0, _v9.useStore)(_v0 => _v0.commonStore.isSearchOpen);
    return (0, _v1.jsxs)(_v2.Breadcrumb, {
      spacing: "0.125rem",
      hideBelow: _v1 ? "xl" : "md",
      overflow: "hidden",
      children: [(0, _v1.jsx)(_v2.BreadcrumbItem, {
        sx: {
          span: {
            mx: "sm",
            boxSize: "2xs",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }
        },
        children: (0, _v1.jsx)(_v3.BreadcrumbLink, {
          href: "/library/showcases",
          children: (0, _v7.translate)({
            singular: "Showcases",
            dictionary: {
              es: {
                singular: "Presentaciones"
              },
              "de-DE": {
                singular: "Präsentationen"
              },
              "fr-FR": {
                singular: "Présentations"
              },
              "ja-JP": {
                singular: "ショーケース"
              },
              "ko-KR": {
                singular: "쇼케이스"
              },
              "pt-BR": {
                singular: "Vitrines"
              },
              "zh-CN": {
                singular: "橱窗"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v2.BreadcrumbItem, {
        maxW: "13rem",
        overflow: "hidden",
        whiteSpace: "nowrap",
        mt: (0, _v6.rem)(1),
        children: (0, _v11.isEmpty)(_v0) ? (0, _v1.jsx)(_v4.Skeleton, {
          variant: "text",
          h: "xs",
          w: "10rem",
          borderRadius: "sm",
          ..._v10.loaderAriaProperties
        }) : (0, _v1.jsx)(_v5.Text, {
          variant: "body-md",
          color: "text-primary",
          overflow: "hidden",
          textOverflow: "ellipsis",
          children: _v0
        })
      })]
    });
  }]);
}