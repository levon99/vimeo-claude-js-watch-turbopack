{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
    A: "accordion",
    B: "flat",
    C: "hidden",
    accordion: "accordion",
    flat: "flat",
    hidden: "hidden"
  };
  _v0.s(["useEnableFolderBulkPrivacy", 0, () => {
    let {
        settings: _v0
      } = (0, _v1.useOrionSettings)(),
      _v1 = _v2[_v0?.bulk_privacy_modal_variant ?? "hidden"] ?? "hidden",
      _v2 = "accordion" === _v1 || "flat" === _v1;
    return {
      isEnabled: _v2,
      variant: _v2 ? _v1 : void 0
    };
  }]);
}