{
  "use strict";

  _v0.s(["setLanguage", 0, function ({
    token: _v0,
    locale: _v1
  }) {
    return fetch("/settings/set_locale", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      },
      body: JSON.stringify({
        token: _v0,
        locale: _v1
      })
    });
  }]);
}