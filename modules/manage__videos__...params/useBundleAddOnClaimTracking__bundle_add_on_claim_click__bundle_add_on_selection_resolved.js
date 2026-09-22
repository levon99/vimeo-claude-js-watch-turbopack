{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useBundleAddOnClaimTracking", 0, _v0 => {
    let _v1 = (0, _v2.usePico)(),
      _v2 = (0, _v1.useCallback)(_v0 => {
        _v1?.track("bundle_add_on_claim_click", {
          source: _v0,
          eligible: _v0.eligible
        });
      }, [_v1, _v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        _v1?.track("bundle_add_on_selection_resolved", {
          source: _v0,
          outcome: _v0.outcome,
          eligible: _v0.eligible,
          is_resolving: _v0.isResolving
        });
      }, [_v1, _v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        _v1?.track("bundle_add_on_modal_displayed", {
          source: _v0,
          bundle_type: _v0.bundleType,
          add_on_id: _v0.addOnId,
          periodicity: _v0.periodicity,
          price_amount: _v0.priceAmount,
          currency: _v0.currency,
          has_paid_subscription: _v0.hasPaidSubscription
        });
      }, [_v1, _v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        _v1?.track("bundle_add_on_modal_dismissed", {
          source: _v0,
          add_on_id: _v0.addOnId
        });
      }, [_v1, _v0]),
      _v6 = (0, _v1.useCallback)(_v0 => {
        _v1?.track("bundle_add_on_purchase_click", {
          source: _v0,
          add_on_id: _v0.addOnId
        });
      }, [_v1, _v0]);
    return {
      trackClaimClick: _v2,
      trackSelectionResolved: _v3,
      trackModalDisplayed: _v4,
      trackModalDismissed: _v5,
      trackPurchaseClick: _v6,
      trackPurchaseSucceeded: (0, _v1.useCallback)(_v0 => {
        _v1?.track("bundle_add_on_purchase_succeeded", {
          source: _v0,
          add_on_id: _v0.addOnId,
          already_owned: _v0.alreadyOwned
        });
      }, [_v1, _v0]),
      trackPurchaseFailed: (0, _v1.useCallback)(_v0 => {
        _v1?.track("bundle_add_on_purchase_failed", {
          source: _v0,
          add_on_id: _v0.addOnId,
          failure_kind: _v0.failureKind,
          http_status: _v0.httpStatus,
          route: _v0.route
        });
      }, [_v1, _v0])
    };
  }]);
}