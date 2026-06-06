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
  let _v12 = {
    page: 0,
    totalPages: 0,
    next: "",
    previous: "",
    goToPageNumber: () => ""
  };
  _v0.s(["emptyPagination", 0, _v12], 0), _v0.s(["TeamSettingsTable", 0, ({
    columns: _v0 = [],
    rows: _v1 = [],
    renderRow: _v2 = () => (0, _v1.jsx)(_v1.Fragment, {}),
    defaultIndexKey: _v3,
    pagination: _v4 = _v12,
    toolBar: _v5,
    placeholder: _v6,
    tableStyle: _v7,
    ..._v8
  }) => (0, _v1.jsx)(_v2.Box, {
    ..._v8,
    children: (0, _v1.jsxs)(_v2.Box, {
      backgroundColor: "fill-surface",
      padding: "200",
      borderRadius: "lg",
      children: [_v5 && (0, _v1.jsx)(_v2.Box, {
        paddingBottom: "200",
        children: _v5
      }), _v6 ? (0, _v1.jsx)(_v3.Flex, {
        alignItems: "center",
        paddingX: "100",
        paddingY: "200",
        justifyContent: "center",
        minHeight: (0, _v4.rem)(300),
        children: _v6
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v5.Table, {
          sx: {
            tableLayout: "fixed",
            fontVariantNumeric: "unset",
            "& tr": {
              display: "table-row"
            },
            "& td,& th": {
              paddingY: "75",
              paddingX: "200"
            },
            "& tr:last-child td": {
              borderBottom: "none"
            },
            ...(_v7 || {})
          },
          width: "100%",
          children: [(0, _v1.jsx)("colgroup", {
            children: _v0?.map((_v0, _v1) => (0, _v1.jsx)("col", {
              style: {
                width: _v0.width
              }
            }, _v1))
          }), (0, _v1.jsx)(_v7.Thead, {
            children: (0, _v1.jsx)(_v8.Tr, {
              children: _v0?.map((_v0, _v1) => (0, _v1.jsx)(_v6.Th, {
                children: (0, _v1.jsx)(_v11.ShrinkableText, {
                  variant: "heading-xs",
                  color: "text-secondary",
                  children: _v0.title ?? null
                })
              }, _v1))
            })
          }), (0, _v1.jsx)(_v9.Tbody, {
            children: _v1.map((_v0, _v1) => {
              let _v2 = _v3 && _v0[_v3] || _v1;
              return (0, _v1.jsx)(_v8.Tr, {
                children: _v2({
                  row: _v0,
                  index: _v1
                })
              }, _v2);
            })
          })]
        }), _v4.totalPages > 1 ? (0, _v1.jsx)(_v3.Flex, {
          width: "100%",
          justifyContent: "center",
          paddingTop: "300",
          paddingBottom: "75",
          children: (0, _v1.jsx)(_v10.Pagination, {
            size: "sm",
            count: _v4.totalPages,
            pageSize: 1,
            page: _v4.page,
            onPageChange: _v0 => _v4.goToPageNumber(_v0.page)
          })
        }) : null]
      })]
    })
  })], 0);
  var _v13 = _v0.i(0);
  _v0.s(["TeamSettingsTableCell", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v13.Td, {
    ..._v1,
    children: _v0
  })], 0);
}