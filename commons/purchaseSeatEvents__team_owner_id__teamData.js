{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v0 => ({
      team_owner_id: _v0?.teamData?.ownerId,
      actor_team_role: _v0?.untranslatedUserRole.toLowerCase()
    }),
    _v4 = async (_v0, _v1 = {}, _v2 = 1) => {
      try {
        let _v0 = new _v1.Event(_v0, _v2, {
          product: _v2.EVENT_PRODUCT,
          path: window.parent.location.pathname,
          ..._v1
        });
        _v1.BigPictureClient.sendEvent(_v0);
      } catch (_v0) {
        console.error(_v0);
      }
    };
  _v0.s(["purchaseSeatEvents", 0, _v0 => ({
    purchaseSeatsTriggeredEvent: _v0 => _v4(_v2.EVENT_NAMES.PURCHASE_TEAM_SEATS, {
      ..._v3(_v0),
      ..._v0
    }, 6),
    confirmPurchaseEvent: _v0 => _v4(_v2.EVENT_NAMES.CONFIRM_TEAM_SEAT_PURCHASE, {
      ..._v3(_v0),
      ..._v0
    }, 7),
    purchaseSeatsFailure: _v0 => _v4(_v2.EVENT_NAMES.PURCHASE_TEAM_SEATS_FAILED, {
      ..._v3(_v0),
      ..._v0
    }, 2),
    trackBillingPageEvents: (_v0, _v1) => _v4(_v0, {
      ..._v3(_v0),
      ..._v1
    }, 1),
    trackSeatCountUpdation: _v0 => {
      _v4(_v2.EVENT_NAMES.CHANGE_NUMBER_OF_SEATS, {
        ..._v3(_v0),
        ..._v0
      }, 2);
    },
    trackCompletedOrder: _v0 => {
      _v4(_v2.EVENT_NAMES.ZUORA_ORDER_COMPLETED, {
        zuora_order_id: _v0
      }, 2);
    }
  })]);
}