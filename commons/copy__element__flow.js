{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v0.i(0).createNullObject)(["copy", "element", "flow", "modal_name", "device_type", "is_user_facing_data", "scrolling_percentage", "entity_type"]);
  _v0.s(["buildProductAnalyticsBpContext", 0, _v0 => ({
    product_analytics_context: new _v1.EventContext("product_analytics_context", 202, {
      ..._v2,
      ..._v0,
      cta_location_id: _v0.cta_location_id ?? null
    })
  })]);
}