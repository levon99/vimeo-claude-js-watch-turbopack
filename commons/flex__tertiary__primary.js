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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = ({
    showClearAll: _v0 = !1,
    disableApply: _v1 = !1,
    onClickClearAll: _v2,
    onClickApply: _v3,
    ..._v4
  }) => {
    let _v5 = (0, _v26.getTranslations)();
    return (0, _v1.jsxs)(_v9.Box, {
      display: "flex",
      justifyContent: "end",
      width: "100%",
      gap: "sm",
      ..._v4,
      children: [_v0 && (0, _v1.jsx)(_v10.Button, {
        variant: "tertiary",
        size: "sm",
        onClick: _v2,
        children: _v5.ClearAll
      }), (0, _v1.jsx)(_v10.Button, {
        variant: "primary",
        size: "sm",
        onClick: _v3,
        isDisabled: _v1,
        children: _v5.Apply
      })]
    });
  };
  var _v28 = (0, _v2.default)(_v27).withConfig({
    displayName: "ResponsiveFilters___StyledFilterFooter",
    componentId: "sc-6fc3f550-0"
  })(_v0 => ({
    "& button": {
      width: "100%",
      gridColumnStart: _v0.$_css
    }
  }));
  let _v29 = ({
      filterDisplayName: _v0,
      filterName: _v1,
      popoverContent: _v2,
      filterFooterProps: _v3
    }) => {
      let {
        popoverContainerRef: _v4,
        isOpen: _v5,
        onClose: _v6,
        onToggle: _v7
      } = _v30();
      return (0, _v1.jsx)(_v9.Box, {
        ref: _v4,
        as: "div",
        children: (0, _v1.jsxs)(_v11.Popover, {
          isOpen: _v5,
          onClose: _v6,
          placement: "bottom-end",
          isLazy: !0,
          children: [(0, _v1.jsx)(_v17.PopoverTrigger, {
            children: (0, _v1.jsx)(_v10.Button, {
              onClick: _v7,
              variant: "tertiary",
              size: "sm",
              rightIcon: (0, _v1.jsx)(_v24.ChevronDownSmall, {}),
              fontWeight: "500",
              ...(_v5 ? {
                "data-active": "true"
              } : {}),
              children: _v0 ?? _v1
            })
          }), (0, _v1.jsxs)(_v13.PopoverContent, {
            children: [(0, _v1.jsx)(_v15.PopoverBody, {
              children: _v2
            }), (0, _v1.jsx)(_v16.PopoverFooter, {
              children: (0, _v1.jsx)(_v27, {
                p: "sm",
                pt: "md",
                ..._v3
              })
            })]
          })]
        })
      });
    },
    _v30 = () => {
      let _v0 = (0, _v3.useRef)(null),
        _v1 = (0, _v21.useDisclosure)();
      return (0, _v22.useOutsideClick)({
        ref: _v0,
        handler: () => {
          _v1.isOpen && _v1.onClose();
        }
      }), {
        popoverContainerRef: _v0,
        ..._v1
      };
    };
  _v0.s(["ResponsivePopoverFilters", 0, ({
    filters: _v0,
    filterFooterProps: _v1,
    getFilterCount: _v2,
    breakpointConfig: _v3 = _v25.ORG_FILTER_BREAKPOINTS
  }) => {
    let _v4 = (0, _v26.getTranslations)(),
      _v5 = (0, _v20.useBreakpointValue)(_v3, {
        ssr: !1
      }),
      {
        popoverContainerRef: _v6,
        isOpen: _v7,
        onClose: _v8,
        onToggle: _v9
      } = _v30(),
      _v10 = _v0.slice(0, _v5),
      _v11 = _v0.slice(_v5),
      _v12 = _v11.length > 0,
      _v13 = _v11.some(_v0 => _v0.filterFooterProps?.showClearAll),
      _v14 = _v11.every(_v0 => _v0.filterFooterProps?.disableApply),
      _v15 = _v2 ? _v11.reduce((_v0, _v1) => _v0 + _v2(_v1), 0) : 0;
    if (!_v0 || 0 === _v0.length) return null;
    let _v16 = _v11.map((_v0, _v1) => _v1);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v10.map(_v0 => (0, _v1.jsx)(_v29, {
        filterName: _v0.filterName,
        filterDisplayName: _v0.filterDisplayName,
        popoverContent: _v0.popoverContent,
        filterFooterProps: _v0.filterFooterProps
      }, _v0.filterKey)), _v12 && (0, _v1.jsx)(_v9.Box, {
        ref: _v6,
        as: "div",
        children: (0, _v1.jsxs)(_v11.Popover, {
          isOpen: _v7,
          onClose: _v8,
          placement: "bottom-end",
          id: "more-filters",
          children: [(0, _v1.jsx)(_v17.PopoverTrigger, {
            children: (0, _v1.jsx)(_v10.Button, {
              onClick: _v9,
              variant: "secondary",
              size: "sm",
              leftIcon: (0, _v1.jsx)(_v23.Filter, {}),
              fontWeight: "500",
              children: _v15 ? _v4.Filters(_v15) : _v4.More
            })
          }), (0, _v1.jsxs)(_v13.PopoverContent, {
            children: [(0, _v1.jsxs)(_v14.PopoverHeader, {
              display: "flex",
              justifyContent: "space-between",
              p: "md",
              children: [(0, _v1.jsx)(_v18.Text, {
                variant: "heading-sm",
                children: _v4.Filters()
              }), (0, _v1.jsx)(_v12.PopoverCloseButton, {
                size: "lg",
                onClick: _v8
              })]
            }), (0, _v1.jsx)(_v15.PopoverBody, {
              maxHeight: (0, _v19.rem)(400),
              overflowY: "auto",
              m: "sm",
              children: (0, _v1.jsx)(_v4.Accordion, {
                allowMultiple: !0,
                defaultIndex: _v16,
                children: _v11.map(_v0 => (0, _v1.jsxs)(_v5.AccordionItem, {
                  children: [(0, _v1.jsxs)(_v6.AccordionButton, {
                    children: [_v0.filterName, (0, _v1.jsx)(_v7.AccordionIcon, {})]
                  }), (0, _v1.jsx)(_v8.AccordionPanel, {
                    children: _v0.popoverContent
                  })]
                }, _v0.filterKey))
              })
            }), (0, _v1.jsx)(_v16.PopoverFooter, {
              children: (0, _v1.jsx)(_v28, {
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                px: "sm",
                showClearAll: "boolean" != typeof _v1?.showClearAll ? _v13 : _v1?.showClearAll,
                disableApply: "boolean" != typeof _v1?.disableApply ? _v14 : _v1?.disableApply,
                onClickClearAll: () => _v1?.onClickClearAll(_v11.map(_v0 => _v0.filterKey)),
                onClickApply: () => _v1?.onClickApply?.(_v11.map(_v0 => _v0.filterKey)),
                $_css: _v13 || _v1?.showClearAll ? "inherit" : 2
              })
            })]
          })]
        })
      })]
    });
  }, "usePopoverOutsideClick", 0, _v30]);
}