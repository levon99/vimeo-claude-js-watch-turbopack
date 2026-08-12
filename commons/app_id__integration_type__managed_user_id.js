{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v0.i(0).createNullObject)(["app_id", "integration_type", "managed_user_id", "partner_bucket"]);
  _v0.s(["buildThirdPartyIntegrationBpContext", 0, _v0 => ({
    third_party_integration_context: new _v1.EventContext("third_party_integration_context", 5, {
      is_integration: null !== _v0.integration_id,
      ..._v2,
      ..._v0
    })
  })]);
}