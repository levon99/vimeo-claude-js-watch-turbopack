{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["EmailTemplate", 0, _v0 => {
    let {
        emailState: _v1
      } = (0, _v5.useEmailCustomization)(),
      _v2 = (0, _v6.useLocalizedEmailPreview)(),
      _v3 = {
        ..._v0,
        localized: _v2,
        canEdit: !0 === _v0.canEdit && null === _v2
      };
    switch (_v1?.emailTemplateType) {
      case _v7.EMAIL_TYPES.CONFIRMATION:
        return (0, _v1.jsx)(_v2.Confirmation, {
          editorState: _v0.editorStates[_v7.EMAIL_TYPES.CONFIRMATION],
          ..._v3
        });
      case _v7.EMAIL_TYPES.REMINDER:
        return (0, _v1.jsx)(_v4.Reminder, {
          editorState: _v0.editorStates[_v7.EMAIL_TYPES.REMINDER],
          ..._v3
        });
      case _v7.EMAIL_TYPES.FOLLOWUP:
        return (0, _v1.jsx)(_v3.FollowUp, {
          editorState: _v0.editorStates[_v7.EMAIL_TYPES.FOLLOWUP],
          ..._v3
        });
      default:
        return null;
    }
  }]);
}