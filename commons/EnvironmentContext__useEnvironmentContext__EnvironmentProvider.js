{
  "use strict";

  let [_v1, _v2] = (0, _v0.i(0).createContext)({
    name: "EnvironmentContext",
    hookName: "useEnvironmentContext",
    providerName: "<EnvironmentProvider />",
    strict: !1,
    defaultValue: {
      getRootNode: () => document,
      getDocument: () => document,
      getWindow: () => window
    }
  });
  _v0.s(["useEnvironmentContext", 0, _v2]);
}