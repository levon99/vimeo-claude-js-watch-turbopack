{
  "use strict";

  let _v1 = (0, _v0.i(0).create)((_v0, _v1) => ({
    entityId: null,
    entityType: null,
    leadCaptureFormUuid: void 0,
    leadCaptureFormEntityId: null,
    leadCaptureForm: {
      enabled: !1,
      placement: ""
    },
    privacy: null,
    isSeoOn: null,
    numberOfVideos: null,
    setLeadCaptureForm: _v0 => _v0(() => ({
      leadCaptureForm: {
        ..._v1().leadCaptureForm,
        ..._v0
      }
    }))
  }));
  _v0.s(["useConfigStore", 0, _v1]);
}