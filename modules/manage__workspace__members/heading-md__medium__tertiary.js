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
    isOpen: _v0,
    onClose: _v1,
    onConfirmAction: _v2,
    header: _v3,
    children: _v4,
    isLoading: _v5 = !1,
    cancelButtonProps: _v6,
    cancelButtonContent: _v7,
    confirmButtonProps: _v8,
    confirmButtonContent: _v9,
    modalProps: _v10,
    width: _v11 = 440,
    modalHeaderContent: _v12
  }) => {
    let _v13 = (0, _v11.getTranslations)();
    return (0, _v1.jsxs)(_v3.Modal, {
      isOpen: _v0,
      onClose: _v1,
      closeOnOverlayClick: !_v5,
      ..._v10,
      children: [(0, _v1.jsx)(_v4.ModalOverlay, {}), (0, _v1.jsxs)(_v5.ModalContent, {
        width: (0, _v10.rem)(_v11),
        children: [(0, _v1.jsx)(_v6.ModalHeader, {
          children: _v12 || (0, _v1.jsx)(_v9.Text, {
            variant: "heading-md",
            fontWeight: "medium",
            children: _v3
          })
        }), (0, _v1.jsx)(_v8.ModalBody, {
          children: _v4
        }), (0, _v1.jsxs)(_v7.ModalFooter, {
          children: [(0, _v1.jsx)(_v2.Button, {
            variant: "tertiary",
            onClick: _v1,
            isDisabled: _v5,
            ..._v6,
            children: _v7 ?? _v13.Cancel
          }), (0, _v1.jsx)(_v2.Button, {
            variant: "primary",
            onClick: () => _v2?.(),
            isLoading: _v5,
            ..._v8,
            children: _v9 ?? _v13.Confirm
          })]
        })]
      })]
    });
  };
  _v0.s(["ConfirmationModal", 0, _v12], 0), _v0.s(["RemovalConfirmationModal", 0, ({
    ..._v0
  }) => {
    let _v1 = (0, _v11.getTranslations)();
    return (0, _v1.jsx)(_v12, {
      confirmButtonProps: {
        variant: "destructive",
        ..._v0.confirmButtonProps
      },
      confirmButtonContent: _v1.Remove,
      ..._v0
    });
  }], 0);
}