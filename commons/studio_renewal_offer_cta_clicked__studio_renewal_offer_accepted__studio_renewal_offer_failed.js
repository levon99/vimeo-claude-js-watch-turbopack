{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("studio_renewal_offer_cta_clicked", {
          copy: _v0.copy,
          savings_percent: _v0.savingsPercent,
          location: _v0.location ?? null
        });
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => null === _v0 ? Promise.resolve() : _v0.track("studio_renewal_offer_accepted", {
        savings_percent: _v0.savingsPercent,
        periodicity: _v0.periodicity,
        location: _v0.location ?? null
      }), [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("studio_renewal_offer_failed", {
          error_message: _v0.errorMessage,
          location: _v0.location ?? null
        });
      }, [_v0]);
    return {
      trackStudioRenewalOfferCtaClicked: _v1,
      trackStudioRenewalOfferAccepted: _v2,
      trackStudioRenewalOfferFailed: _v3,
      trackStudioRenewalOfferDisplayed: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("studio_renewal_offer_displayed", {
          savings_percent: _v0.savingsPercent,
          location: _v0.location ?? null
        });
      }, [_v0]),
      trackStudioRenewalOfferDismissed: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("studio_renewal_offer_dismissed", {
          savings_percent: _v0.savingsPercent,
          location: _v0.location ?? null
        });
      }, [_v0])
    };
  };
  _v0.s(["useStudioRenewalOfferDismissed", 0, _v0 => {
    let {
        isOpen: _v1,
        savingsPercent: _v2,
        wasAcceptedRef: _v3,
        location: _v4
      } = _v0,
      {
        trackStudioRenewalOfferDismissed: _v5
      } = _v4(),
      _v6 = (0, _v1.useRef)(!1),
      _v7 = _v3.current;
    (0, _v1.useEffect)(() => {
      if (_v1) {
        _v6.current = !0;
        return;
      }
      _v6.current && !_v7 && (_v6.current = !1, _v5({
        savingsPercent: _v2,
        location: _v4
      }));
    }, [_v1, _v7]);
  }, "useStudioRenewalOfferDisplayed", 0, _v0 => {
    let {
        isOpen: _v1,
        savingsPercent: _v2,
        location: _v3
      } = _v0,
      {
        trackStudioRenewalOfferDisplayed: _v4
      } = _v4(),
      _v5 = (0, _v1.useRef)(!1);
    (0, _v3.usePicoEffect)(() => {
      if (!_v1 || _v5.current) return !1;
      _v5.current = !0, _v4({
        savingsPercent: _v2,
        location: _v3
      });
    }, [_v1, _v2, _v3, _v4], {
      once: !0
    });
  }, "useStudioRenewalOfferTracking", 0, _v4]);
}