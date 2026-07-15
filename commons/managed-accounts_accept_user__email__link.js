{
  "use strict";

  let _v1 = "/managed-accounts/accept/user",
    _v2 = ["email", "link"];
  _v0.s(["MANAGED_ACCOUNTS_ACCEPT_BASE_PATH", 0, _v1, "MANAGED_ACCOUNTS_SOURCES", 0, _v2, "getManagedAccountsAcceptPath", 0, function (_v0) {
    return `${_v1}/${_v0}`;
  }, "normalizeManagedAccountsSource", 0, function (_v0) {
    return "string" == typeof _v0 && _v2.includes(_v0) ? _v0 : null;
  }]);
}