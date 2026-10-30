{
  "use strict";

  let _v1 = "ps_billing_plan_id";
  _v0.s(["SELECTED_BILLING_PLAN_ID_STORAGE_KEY", 0, _v1, "readSelectedBillingPlanId", 0, () => {
    let _v0 = window.localStorage.getItem(_v1);
    if (null === _v0) return null;
    try {
      let _v0 = JSON.parse(_v0);
      return "string" == typeof _v0 ? _v0 : null;
    } catch {
      return null;
    }
  }]);
}