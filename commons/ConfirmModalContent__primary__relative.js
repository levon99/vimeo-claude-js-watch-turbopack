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
    _v9 = _v0.i(0);
  _v0.s(["ConfirmModalContent", 0, ({
    closeModal: _v0,
    onConfirmed: _v1,
    headerText: _v2,
    contentText: _v3,
    confirmButtonVariant: _v4 = "primary"
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsxs)(_v3.ModalHeader, {
      position: "relative",
      children: [(0, _v1.jsxs)(_v2.Header, {
        size: "md",
        children: [" ", _v2]
      }), (0, _v1.jsx)(_v8.ModalCloseButton, {
        id: "close-modal-x",
        onClick: _v0
      })]
    }), (0, _v1.jsx)(_v5.ModalBody, {
      children: (0, _v1.jsx)(_v4.Paragraph, {
        size: "md",
        children: _v3
      })
    }), (0, _v1.jsxs)(_v6.ModalFooter, {
      children: [(0, _v1.jsx)(_v7.Button, {
        id: "close-modal-btn",
        variant: "secondary",
        onClick: _v0,
        children: _v9.T.Cancel
      }), (0, _v1.jsx)(_v7.Button, {
        id: "confirm-modal-btn",
        variant: _v4,
        onClick: _v1,
        children: _v9.T.Confirm
      })]
    })]
  })]);
}