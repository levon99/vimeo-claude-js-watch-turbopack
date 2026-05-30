{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["AddToFoldersModal", 0, function ({
    isOpen: _v0,
    teamOwnerId: _v1,
    selectedTeamMembers: _v2,
    closeModal: _v3,
    onSuccess: _v4,
    children: _v5
  }) {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v5, (0, _v1.jsxs)(_v2.Modal, {
        isOpen: _v0,
        onClose: _v3,
        children: [(0, _v1.jsx)(_v3.ModalOverlay, {}), (0, _v1.jsx)(_v4.AddToFoldersModalContent, {
          onClose: _v3,
          ownerId: _v1,
          teamUsers: _v2,
          onSuccess: _v4
        })]
      })]
    });
  }]);
}