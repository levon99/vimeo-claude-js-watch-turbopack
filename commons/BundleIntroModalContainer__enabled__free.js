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
    onOpenChange: _v1,
    productDescriptionsVariant: _v2 = "default"
  }) => {
    let _v3 = (0, _v11.useBundleOffer)(),
      _v4 = "enabled" === _v3.status && "free" === _v3.price,
      {
        ownsBundle: _v5,
        isResolving: _v6
      } = (0, _v12.useBundleOwnership)({
        enabled: _v4
      }),
      _v7 = (0, _v7.useViewer)(),
      {
        campaignId: _v8,
        isLoading: _v9
      } = (0, _v3.useCampaignIdOverride)(),
      _v10 = (0, _v6.normalizeTier)(_v7?.teamUser?.accountType?.toString() ?? _v7?.user?.account?.toString() ?? ""),
      _v11 = (0, _v6.isPaidRepackagingTier)(_v10) || null !== _v8 && _v3.REPACKAGING_CAMPAIGN_IDS.includes(_v8),
      _v12 = _v4 && !_v6 && !_v5 && !_v0 && !_v11 && !_v9,
      {
        isOpen: _v13,
        dismiss: _v14
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
        enabled: _v12
      });
    (0, _v2.useEffect)(() => {
      _v1?.(_v13 && _v12);
    }, [_v12, _v13, _v1]);
    let {
        trackBundleIntroModalDisplayed: _v15,
        trackBundleIntroModalCtaClick: _v16,
        trackBundleIntroModalDismissed: _v17
      } = (0, _v4.useBundleTracking)(),
      _v18 = (0, _v10.useBundleExperimentKey)(),
      _v19 = "enabled" === _v3.status ? _v3.bundleType : null;
    (0, _v5.usePicoEffect)(() => !!_v13 && !!_v12 && null !== _v19 && (_v15({
      surface: "weekly_intro",
      bundleType: _v19,
      bundlePrice: "free",
      experimentKey: _v18
    }), !0), [_v13, _v12, _v19, _v15, _v18], {
      once: !0
    });
    let _v20 = (0, _v2.useCallback)(_v0 => {
        null !== _v19 && _v17({
          surface: "weekly_intro",
          bundleType: _v19,
          bundlePrice: "free",
          dismissMethod: _v0,
          experimentKey: _v18
        }), _v14();
      }, [_v19, _v17, _v14, _v18]),
      _v21 = (0, _v2.useCallback)(() => {
        null !== _v19 && _v16({
          surface: "weekly_intro",
          bundleType: _v19,
          bundlePrice: "free",
          experimentKey: _v18
        }), _v14(), (0, _v13.openBundleLibrary)();
      }, [_v19, _v16, _v14, _v18]);
    return null === _v19 ? null : (0, _v1.jsx)(_v8.BundleIntroModal, {
      isOpen: _v13 && _v12,
      bundleType: _v19,
      onCtaClick: _v21,
      onDismiss: _v20,
      productDescriptionsVariant: _v2
    });
  }], 0);
}