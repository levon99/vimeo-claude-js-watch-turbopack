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
    _v10 = _v0.i(0);
  _v0.s(["AddInvitationNote", 0, ({
    handleInvitationNoteChange: _v0,
    invitationNote: _v1
  }) => {
    let [_v2, _v3] = (0, _v2.useState)(_v1),
      _v4 = (0, _v10.getTranslations)();
    return (0, _v1.jsxs)(_v3.Box, {
      gap: 0,
      px: (0, _v6.rem)(2),
      width: "100%",
      children: [(0, _v1.jsxs)(_v5.HStack, {
        paddingBottom: "xs",
        children: [(0, _v1.jsx)(_v4.Header, {
          size: "xs",
          children: _v4.AddANote
        }), (0, _v1.jsx)(_v7.Text, {
          color: "text-secondary",
          fontWeight: "350",
          variant: "body-md",
          children: `(${_v4.Optional})`
        })]
      }), (0, _v1.jsx)(_v8.Textarea, {
        borderColor: "stroke",
        borderRadius: "md",
        borderWidth: (0, _v6.rem)(1),
        height: (0, _v6.rem)(80),
        maxLength: _v9.MAX_LENGTH_OF_INVITATION_NOTE,
        onBlur: () => {
          _v0(_v2);
        },
        onChange: _v0 => {
          _v3(_v0.target.value);
        },
        size: "md",
        value: _v2,
        width: "100%"
      }), (0, _v1.jsxs)(_v7.Text, {
        color: "text-secondary",
        variant: "body-md",
        children: [_v2.length, "/", _v9.MAX_LENGTH_OF_INVITATION_NOTE]
      })]
    });
  }]);
}