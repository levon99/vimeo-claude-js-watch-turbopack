{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  function _v3(_v0) {
    let _v1 = {
      privacy: _v0.privacy
    };
    return "password" === _v0.privacy && (_v1.password = _v0.password), ("anybody" === _v0.privacy || "password" === _v0.privacy) && (_v1.allowComments = _v0.allowComments), _v1;
  }
  function _v4(_v0) {
    let _v1 = {
      embedPermission: _v0.embedPermission
    };
    if ("whitelist" === _v0.embedPermission) {
      let _v0 = _v0.newDomains.map(_v0 => _v0.value);
      _v1[_v0.isOverwritingDomains ? "embedDomains" : "embedDomainsAdd"] = _v0;
    }
    return _v1;
  }
  let _v5 = (_v0, _v1) => {
    if (!_v1.length) return;
    let _v2 = _v1[0].privacy?.[_v0];
    if (void 0 !== _v2) return _v1.every(_v0 => _v0.privacy?.[_v0] === _v2) ? _v2 : void 0;
  };
  _v0.s(["createClipsOnlyPayload", 0, function (_v0, _v1) {
    let _v2, _v3, _v4;
    return {
      ...(_v2 = _v0.privacy !== _v1.privacy, _v3 = "password" === _v0.privacy && _v0.password !== _v1.password, _v4 = _v0.allowComments !== _v1.allowComments, !_v2 && !_v3 && !_v4 ? {} : _v2 || _v3 ? _v3(_v0) : {
        allowComments: _v0.allowComments
      }),
      ..._v4(_v0),
      ...(_v0.allowDownloads === _v1.allowDownloads ? {} : {
        allowDownloads: _v0.allowDownloads
      })
    };
  }, "createPrivacyOptions", 0, function (_v0) {
    return {
      ..._v3(_v0),
      ..._v4(_v0),
      allowDownloads: _v0.allowDownloads
    };
  }, "getDefaultFormValuesForClips", 0, _v0 => ({
    privacy: _v5("view", _v0),
    embedPermission: void 0,
    allowDownloads: (_v0 => {
      if (!_v0.length) return;
      let _v1 = _v0[0].privacy?.download;
      if (void 0 !== _v1) return _v0.every(_v0 => _v0.privacy?.download === _v1) ? "true" === String(_v1) : void 0;
    })(_v0),
    allowComments: _v5("comments", _v0),
    password: 1 === _v0.length && _v0[0].password ? _v0[0].password : "",
    newDomains: [],
    isOverwritingDomains: !1
  }), "getUpdatingToastId", 0, _v0 => `bulk-privacy-updating-${_v0}`, "launchDownloadUpgradePaywall", 0, () => {
    let _v0 = (0, _v1.buildUpgradePlanUrl)({
      paywallTrigger: "bulk_privacy_allow_downloads_upgrade_button",
      paywallLocation: "bulk_privacy_modal",
      paywallFeature: "privacy"
    }, {
      upsell: "privacy_settings_allow_downloads",
      integration: "none",
      feature: "privacy",
      paywall: "1"
    });
    (0, _v2.launchLateStagePaywallFromUpgradePlanUrl)(_v0) || window.open(_v0, "_blank");
  }, "launchEmbedUpgradePaywall", 0, () => {
    let _v0 = (0, _v1.buildUpgradePlanUrl)({
      paywallTrigger: "bulk_privacy_embed_whitelist_upgrade_button",
      paywallLocation: "bulk_privacy_modal",
      paywallFeature: "privacy"
    }, {
      upsell: "privacy_settings_embed_specific_domains",
      integration: "none",
      feature: "privacy",
      paywall: "1"
    });
    (0, _v2.launchLateStagePaywallFromUpgradePlanUrl)(_v0) || window.open(_v0, "_blank");
  }]);
}