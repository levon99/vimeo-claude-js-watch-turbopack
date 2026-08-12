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
    _v18 = _v0.i(0);
  _v0.s(["ReportFlowModal", 0, ({
    report: _v0,
    isOpen: _v1,
    headerAction: _v2,
    bodyAction: _v3,
    footerAction: _v4
  }) => {
    let _v5 = (0, _v2.useRef)(null);
    return (0, _v2.useEffect)(() => {
      _v1 && _v0.hasData && _v5.current?.focus();
    }, [_v1, _v0.hasData]), (0, _v1.jsxs)(_v6.Modal, {
      isOpen: _v1,
      onClose: _v0.handleClose,
      scrollBehavior: "inside",
      initialFocusRef: _v5,
      children: [(0, _v1.jsx)(_v12.ModalOverlay, {}), (0, _v1.jsxs)(_v9.ModalContent, {
        maxHeight: "calc(100% - 3rem)",
        children: [(0, _v1.jsx)(_v11.ModalHeader, {
          children: (0, _v1.jsxs)(_v4.Flex, {
            align: "center",
            gap: "100",
            children: [_v0.canGoBack ? (0, _v1.jsx)(_v5.IconButton, {
              "aria-label": (0, _v16.backLabel)(),
              variant: "tertiary",
              size: "sm",
              icon: (0, _v1.jsx)(_v15.ArrowLeft, {}),
              onClick: _v0.onBack
            }) : null, (0, _v1.jsxs)(_v3.Box, {
              flex: "1",
              minW: "0",
              children: [(0, _v1.jsx)(_v14.Text, {
                variant: "body-lg",
                fontWeight: "bold",
                children: _v0.title
              }), (0, _v1.jsx)(_v14.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: _v0.subtitle
              })]
            }), _v2, (0, _v1.jsx)(_v8.ModalCloseButton, {
              position: "static"
            })]
          })
        }), (0, _v1.jsx)(_v13.Progress, {
          value: _v0.progress,
          size: "xs",
          mt: "200",
          sx: {
            "& > div": {
              transitionProperty: "width",
              transitionDuration: "300ms"
            }
          }
        }), (0, _v1.jsx)(_v7.ModalBody, {
          flex: "1 1 0%",
          overflow: "auto",
          pb: "300",
          children: (0, _v1.jsx)(_v17.ReportBody, {
            isLoading: _v0.isLoading,
            hasData: _v0.hasData,
            error: _v0.error,
            step: _v0.step,
            currentOptions: _v0.currentOptions,
            selected: _v0.selected,
            onSelectNode: _v0.onSelectNode,
            onDone: _v0.handleClose,
            firstOptionRef: _v5,
            action: _v3
          })
        }), _v0.showFooter ? (0, _v1.jsx)(_v10.ModalFooter, {
          children: (0, _v1.jsx)(_v18.ReportFooter, {
            submitLabel: _v0.submitLabel,
            submitDisabled: _v0.submitDisabled,
            onSubmit: _v0.onSubmit,
            help: _v0.help,
            action: _v4
          })
        }) : null]
      })]
    });
  }]);
}