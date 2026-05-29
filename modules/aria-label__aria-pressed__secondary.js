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
  let _v12 = ({
    layout: _v0,
    onLayoutChange: _v1,
    isDisabled: _v2 = !1
  }) => (0, _v1.jsx)(_v9.ButtonGroup, {
    spacing: "4px",
    children: [_v6.LAYOUT.LIST, _v6.LAYOUT.GRID].map(_v0 => {
      let {
          Icon: _v1,
          tooltipText: _v2
        } = _v6.LAYOUT_CONFIG[_v0],
        _v3 = _v0 === _v0;
      return (0, _v1.jsx)(_v11.Tooltip, {
        label: _v2,
        placement: "top",
        children: (0, _v1.jsx)(_v10.IconButton, {
          "aria-label": _v2,
          "aria-pressed": _v3,
          icon: (0, _v1.jsx)(_v1, {}),
          onClick: () => _v1(_v0),
          variant: _v3 ? "secondary" : "tertiary",
          isDisabled: _v2
        })
      }, _v0);
    })
  });
  _v0.s(["LayoutToggle", 0, _v12], 0), _v0.s(["FilterSortBar", 0, ({
    checkbox: _v0,
    children: _v1,
    layout: _v2,
    setLayout: _v3,
    searchElement: _v4,
    sort: _v5,
    setSort: _v6,
    setDateDisplay: _v7,
    shouldHideViewControls: _v8,
    sortOptions: _v9,
    sortTriggerDataId: _v10,
    isLayoutToggleDisabled: _v11 = !1,
    isInitialLoadInProgress: _v12 = !1,
    layoutSelector: _v13
  }) => {
    var _v14;
    let _v15 = (0, _v5.usePageName)();
    return (0, _v1.jsxs)(_v3.Flex, {
      justifyContent: "space-between",
      gap: ".5rem",
      minHeight: "md",
      zIndex: "12",
      backgroundColor: "background",
      children: [(0, _v1.jsx)(_v3.Flex, {
        alignItems: "center",
        gap: ".5rem",
        children: _v0
      }), (0, _v1.jsxs)(_v3.Flex, {
        alignItems: "center",
        display: _v8 ? "none" : "flex",
        justifyContent: "flex-end",
        gap: ".5rem",
        children: [_v1, !!_v9 && !!_v5 && !!_v6 && !_v12 && (0, _v1.jsx)(_v4.SortSelect, {
          sortOptions: _v9,
          selectedSort: (_v14 = _v5).type.toLowerCase() + (_v14.direction ? `_${_v14.direction.toLowerCase()}` : ""),
          onSortOptionClick: _v0 => {
            let _v1 = {
              direction: _v9[_v0].sortDirection,
              type: _v9[_v0].sortBy
            };
            _v6(_v1), _v7 && (_v1.type === _v6.SORT_OPTION.CREATED || _v1.type === _v6.SORT_OPTION.MODIFIED) && _v7(_v1.type), _v2.BigPictureClient.sendEvent(new _v2.Event("vimeo.click", 142, {
              click_type: null,
              copy: (0, _v8.getBPSortClickEventCopy)(_v1),
              device_type: (0, _v7.getDeviceType)(),
              feature: "sort",
              location: "sort_dropdown",
              name: "apply_sort",
              page: _v15,
              path: window.location.pathname,
              target: null,
              target_path: null,
              third_party_integration: null,
              type: "general"
            }));
          },
          triggerDataId: _v10
        }), _v4, !_v12 && (_v13 || (0, _v1.jsx)(_v12, {
          layout: _v2,
          isDisabled: _v11,
          onLayoutChange: _v0 => {
            _v0 !== _v2 && (_v2.BigPictureClient.sendEvent(new _v2.Event("vimeo.click", 142, {
              click_type: null,
              copy: null,
              device_type: (0, _v7.getDeviceType)(),
              feature: "layout",
              location: "filter_sort_bar",
              name: "click_view_mode",
              page: _v15,
              path: window.location.pathname,
              target: _v0,
              target_path: null,
              third_party_integration: null,
              type: "general"
            })), _v3(_v0));
          }
        }))]
      })]
    });
  }], 0);
}