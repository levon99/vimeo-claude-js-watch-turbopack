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
  _v0.s(["ReviewLinkConfirmationModal", 0, ({
    isOpen: _v0,
    confirmationLoading: _v1,
    close: _v2,
    onConfirm: _v3
  }) => _v0 ? (0, _v1.jsxs)(_v3.Modal, {
    size: "md",
    isOpen: _v0,
    onClose: _v2,
    children: [(0, _v1.jsx)(_v9.ModalOverlay, {}), (0, _v1.jsxs)(_v6.ModalContent, {
      children: [(0, _v1.jsxs)(_v8.ModalHeader, {
        children: [(0, _v1.jsx)(_v10.Text, {
          variant: "heading-md",
          children: _v11.T.ProhibitReviewLinks
        }), (0, _v1.jsx)(_v5.ModalCloseButton, {
          onClick: _v2
        })]
      }), (0, _v1.jsx)(_v4.ModalBody, {
        children: (0, _v1.jsx)(_v10.Text, {
          variant: "body-md",
          children: _v11.T.ProhibitReviewLinksConfirmationText
        })
      }), (0, _v1.jsxs)(_v7.ModalFooter, {
        children: [(0, _v1.jsx)(_v2.Button, {
          variant: "tertiary",
          onClick: _v2,
          children: _v11.T.Cancel
        }), (0, _v1.jsx)(_v2.Button, {
          onClick: _v3,
          isLoading: _v1,
          children: _v11.T.Confirm
        })]
      })]
    })]
  }) : null]);
}