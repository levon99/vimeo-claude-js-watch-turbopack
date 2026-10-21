{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["trackFailedOrder", 0, ({
    errorResponse: _v0,
    source: _v1 = "zuora_hpm",
    stripeErrorCode: _v2,
    checkoutTracking: _v3
  }) => {
    let {
      formErrorCode: _v4,
      formErrorMessage: _v5,
      formField: _v6,
      rawGatewayInfo: _v7
    } = _v0;
    if (!(0, _v1.acquireCheckoutFailedLatch)()) return;
    let _v8 = (0, _v1.classifyClientDecline)("stripe" === _v1 ? {
      source: "stripe",
      code: _v2,
      message: _v5
    } : {
      source: "zuora_hpm",
      formErrorCode: _v4,
      formErrorMessage: _v5,
      formField: _v6,
      rawGatewayInfo: _v7
    });
    _v3.trackCheckoutFailed({
      tier: _v3.tier,
      periodicity: _v3.periodicity,
      isFreeTrial: _v3.isFreeTrial,
      source: _v8.source,
      decline_category: _v8.decline_category,
      failing_field: _v8.failing_field,
      error_code: _v8.error_code,
      error_message: _v8.error_message
    });
  }]);
}