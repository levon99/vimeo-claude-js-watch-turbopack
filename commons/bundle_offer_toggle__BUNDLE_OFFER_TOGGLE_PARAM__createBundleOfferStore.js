{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      free: {
        price: null,
        fullPrice: {
          amount: 350,
          currency: "USD"
        }
      },
      low: {
        price: {
          amount: 7,
          currency: "USD"
        },
        fullPrice: {
          amount: 350,
          currency: "USD"
        }
      },
      high: {
        price: {
          amount: 15,
          currency: "USD"
        },
        fullPrice: {
          amount: 350,
          currency: "USD"
        }
      }
    },
    _v3 = "bundle_offer_toggle",
    _v4 = {
      isEnabled: !1,
      bundleType: null,
      price: null,
      fullPrice: null,
      isBundleActive: !1,
      isOfferModalOpen: !1,
      hasDismissedOffer: !1,
      setOffer: () => void 0,
      toggleBundle: () => void 0,
      interceptPurchase: _v0 => _v0(),
      reconcileCheckoutHref: _v0 => _v0,
      stripToggleParam: _v0 => {
        let [_v1, _v2 = ""] = _v0.split("?"),
          _v3 = new URLSearchParams(_v2);
        _v3.delete(_v3);
        let _v4 = _v3.toString();
        return _v4 ? `${_v1}?${_v4}` : _v1;
      },
      closeOfferModal: () => void 0,
      addBundleAndContinue: () => void 0,
      continueWithoutBundle: () => void 0,
      reset: () => void 0
    };
  _v0.s(["BUNDLE_OFFER_TOGGLE_PARAM", 0, _v3, "createBundleOfferStore", 0, (_v0 = !1) => {
    let _v1 = null;
    return (0, _v1.createStore)()((_v0, _v1) => ({
      ..._v4,
      isBundleActive: _v0,
      setOffer: _v0 => {
        _v0 ? _v0({
          isEnabled: !0,
          bundleType: _v0.bundleType,
          price: _v0.price,
          fullPrice: _v0.fullPrice
        }) : (_v1 = null, _v0({
          isEnabled: !1,
          bundleType: null,
          price: null,
          fullPrice: null,
          isBundleActive: !1,
          isOfferModalOpen: !1
        }));
      },
      toggleBundle: _v0 => _v0({
        isBundleActive: _v0
      }),
      reconcileCheckoutHref: _v0 => {
        if (null === _v0) return null;
        let {
          isEnabled: _v1,
          isBundleActive: _v2,
          stripToggleParam: _v3
        } = _v1();
        if (!_v1 || !_v2) return _v3(_v0);
        let [_v4, _v5 = ""] = _v0.split("?"),
          _v6 = new URLSearchParams(_v5);
        _v6.set(_v3, "1");
        let _v7 = _v6.toString();
        return _v7 ? `${_v4}?${_v7}` : _v4;
      },
      interceptPurchase: (_v0, _v1 = null) => {
        let {
          isEnabled: _v2,
          isBundleActive: _v3,
          hasDismissedOffer: _v4,
          reconcileCheckoutHref: _v5
        } = _v1();
        !_v2 || _v3 || _v4 ? _v0(_v5(_v1)) : (_v1 = {
          proceed: _v0,
          destination: _v1
        }, _v0({
          isOfferModalOpen: !0
        }));
      },
      closeOfferModal: () => {
        _v1 = null, _v0({
          isOfferModalOpen: !1,
          hasDismissedOffer: !0
        });
      },
      addBundleAndContinue: () => {
        let _v0 = _v1;
        _v1 = null, _v0({
          isBundleActive: !0,
          isOfferModalOpen: !1
        }), _v0?.proceed(_v1().reconcileCheckoutHref(_v0.destination));
      },
      continueWithoutBundle: () => {
        let _v0 = _v1;
        _v1 = null, _v0({
          isOfferModalOpen: !1,
          hasDismissedOffer: !0
        }), _v0?.proceed(_v1().reconcileCheckoutHref(_v0.destination));
      },
      reset: () => {
        _v1 = null, _v0({
          isEnabled: !1,
          bundleType: null,
          price: null,
          fullPrice: null,
          isBundleActive: !1,
          isOfferModalOpen: !1,
          hasDismissedOffer: !1
        });
      }
    }));
  }, "resolvePricingPageOfferInput", 0, _v0 => {
    if ("enabled" !== _v0.status || !_v0.triggers.includes("pricing_page")) return null;
    let _v1 = _v0.price;
    return {
      bundleType: _v0.bundleType,
      price: _v2[_v1].price,
      fullPrice: _v2[_v1].fullPrice
    };
  }], 0);
}