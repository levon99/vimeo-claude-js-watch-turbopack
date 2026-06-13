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
  _v0.s(["default", 0, ({
    active: _v0,
    onClose: _v1,
    name: _v2,
    removeMember: _v3,
    removeMemberRole: _v4,
    teamName: _v5,
    hasPerSeatPricingModel: _v6
  }) => (0, _v1.jsx)(_v4.Modal, {
    active: _v0,
    content: (0, _v1.jsxs)(_v6.UnassignMemberConfirmModalContent, {
      children: [(0, _v1.jsxs)(_v2.Header, {
        size: "md",
        as: "h4",
        marginBottom: "17",
        children: [_v8.T.RemoveTeamMember, "?"]
      }), (0, _v1.jsx)(_v9.CloseIconStyle, {
        icon: (0, _v1.jsx)(_v3.CloseX, {}),
        size: "sm",
        variant: "minimalTransparent",
        format: "basic",
        onClick: _v1
      }), (0, _v1.jsx)(_v5.Paragraph, {
        size: 2,
        children: _v8.T.LooseAcess(_v2, _v5)
      }), (0, _v1.jsx)("br", {}), (0, _v1.jsx)("br", {}), _v4 && _v4 !== _v7.TeamRole.Viewer && _v6 && (0, _v1.jsx)(_v6.SecondaryParagraph, {
        size: 3,
        children: _v8.T.ReassignSeats
      }), (0, _v1.jsx)("br", {}), (0, _v1.jsx)("br", {}), (0, _v1.jsxs)(_v6.ModalFooterBtnContainer, {
        children: [(0, _v1.jsx)(_v6.CancelButton, {
          onClick: _v1,
          size: "md",
          format: "secondary",
          status: "neutral",
          type: "button",
          variant: "solid",
          children: _v8.T.Cancel
        }), (0, _v1.jsx)(_v6.RemoveButton, {
          onClick: _v3,
          size: "md",
          format: "primary",
          status: "negative",
          type: "button",
          children: _v8.T.RemoveMember
        })]
      })]
    }),
    onOpen: _v1
  })]);
}