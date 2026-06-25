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
    _v16 = _v0.i(0);
  _v0.s(["default", 0, ({
    active: _v0,
    onClose: _v1,
    name: _v2,
    removeMember: _v3,
    removeMemberRole: _v4,
    teamName: _v5,
    hasPerSeatPricingModel: _v6,
    isLastCollaborator: _v7 = !1
  }) => {
    let _v8 = !!_v4 && _v4 !== _v15.TeamRole.Viewer && _v6;
    return (0, _v1.jsxs)(_v7.Modal, {
      isOpen: _v0,
      onClose: _v1,
      isCentered: !0,
      children: [(0, _v1.jsx)(_v13.ModalOverlay, {}), (0, _v1.jsxs)(_v10.ModalContent, {
        maxW: "488px",
        children: [(0, _v1.jsxs)(_v12.ModalHeader, {
          children: [(0, _v1.jsxs)(_v6.Header, {
            size: "md",
            as: "h2",
            children: [_v7 ? _v16.T.RemoveLastCollaborator : _v16.T.RemoveTeamMember, "?"]
          }), (0, _v1.jsx)(_v14.Text, {
            variant: "body-md",
            color: "text-primary",
            mt: "sm",
            children: _v16.T.LooseAcess(_v2, _v5)
          })]
        }), (0, _v1.jsx)(_v9.ModalCloseButton, {
          onClick: _v1
        }), _v7 && (0, _v1.jsx)(_v8.ModalBody, {
          children: (0, _v1.jsx)(_v2.Alert, {
            status: "warning",
            size: "md",
            children: (0, _v1.jsx)(_v3.AlertDescription, {
              children: _v16.T.LastCollaboratorWarning
            })
          })
        }), (0, _v1.jsxs)(_v11.ModalFooter, {
          flexDirection: "column",
          alignItems: "stretch",
          gap: "md",
          children: [_v8 && (0, _v1.jsx)(_v14.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: _v16.T.ReassignSeats
          }), (0, _v1.jsxs)(_v5.Flex, {
            gap: 3,
            justifyContent: "flex-end",
            children: [(0, _v1.jsx)(_v4.Button, {
              variant: "tertiary",
              size: "md",
              onClick: _v1,
              children: _v16.T.Cancel
            }), (0, _v1.jsx)(_v4.Button, {
              variant: "destructive",
              size: "md",
              onClick: _v3,
              children: _v16.T.RemoveMember
            })]
          })]
        })]
      })]
    });
  }]);
}