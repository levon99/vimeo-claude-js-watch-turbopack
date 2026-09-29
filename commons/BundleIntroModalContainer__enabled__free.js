{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = _v0 => `bsp_bundle_intro_modal_shown_at_${_v0}`;
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  _v0.s(["BundleIntroModalContainer", 0, ({
    isSuppressed: _v0 = !1,
    productDescriptionsVariant: _v1 = "default"
  }) => {
    let _v2 = (0, _v11.useBundleOffer)(),
      _v3 = "enabled" === _v2.status && "free" === _v2.price,
      {
        ownsBundle: _v4,
        isResolving: _v5
      } = (0, _v12.useBundleOwnership)({
        enabled: _v3
      }),
      _v6 = (0, _v7.useViewer)(),
      _v7 = (0, _v3.useCampaignIdOverride)(),
      _v8 = (0, _v6.normalizeTier)(_v6?.teamUser?.accountType?.toString() ?? _v6?.user?.account?.toString() ?? ""),
      _v9 = (0, _v6.isPaidRepackagingTier)(_v8) || null !== _v7 && _v3.REPACKAGING_CAMPAIGN_IDS.includes(_v7),
      _v10 = _v3 && !_v5 && !_v4 && !_v0 && !_v9,
      {
        isOpen: _v11,
        dismiss: _v12
      } = (({
        enabled: _v0
      }) => {
        let _v1 = (0, _v7.useViewer)(),
          _v2 = _v1?.user?.id ?? null,
          [_v3, _v4] = (0, _v2.useState)(!1),
          _v5 = (0, _v2.useRef)(null);
        return (0, _v2.useEffect)(() => {
          !_v0 || null === _v2 || _v5.current === _v2 || (_v5.current = _v2, (_v0 => {
            try {
              let _v0 = window.localStorage.getItem(_v9(_v0));
              if (null === _v0) return !1;
              let _v1 = Number(_v0);
              return Number.isFinite(_v1) && Date.now() - _v1 < 0;
            } catch {
              return !1;
            }
          })(_v2) || ((_v0 => {
            try {
              window.localStorage.setItem(_v9(_v0), String(Date.now()));
            } catch {
              return;
            }
          })(_v2), _v4(!0)));
        }, [_v0, _v2]), {
          isOpen: _v3,
          dismiss: (0, _v2.useCallback)(() => _v4(!1), [])
        };
      })({
        enabled: _v10
      }),
      {
        trackBundleIntroModalDisplayed: _v13,
        trackBundleIntroModalCtaClick: _v14,
        trackBundleIntroModalDismissed: _v15
      } = (0, _v4.useBundleTracking)(),
      _v16 = (0, _v10.useBundleExperimentKey)(),
      _v17 = "enabled" === _v2.status ? _v2.bundleType : null;
    (0, _v5.usePicoEffect)(() => !!_v11 && !!_v10 && null !== _v17 && (_v13({
      surface: "weekly_intro",
      bundleType: _v17,
      bundlePrice: "free",
      experimentKey: _v16
    }), !0), [_v11, _v10, _v17, _v13, _v16], {
      once: !0
    });
    let _v18 = (0, _v2.useCallback)(_v0 => {
        null !== _v17 && _v15({
          surface: "weekly_intro",
          bundleType: _v17,
          bundlePrice: "free",
          dismissMethod: _v0,
          experimentKey: _v16
        }), _v12();
      }, [_v17, _v15, _v12, _v16]),
      _v19 = (0, _v2.useCallback)(() => {
        null !== _v17 && _v14({
          surface: "weekly_intro",
          bundleType: _v17,
          bundlePrice: "free",
          experimentKey: _v16
        }), _v12(), (0, _v13.openBundleLibrary)();
      }, [_v17, _v14, _v12, _v16]);
    return null === _v17 ? null : (0, _v1.jsx)(_v8.BundleIntroModal, {
      isOpen: _v11 && _v10,
      bundleType: _v17,
      onCtaClick: _v19,
      onDismiss: _v18,
      productDescriptionsVariant: _v1
    });
  }], 0);
}