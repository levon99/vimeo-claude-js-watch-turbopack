{
  "use strict";

  _v0.s(["serverLogger", 0, {
    trace: (_v0, _v1) => globalThis.__logger?.trace(_v0, _v1),
    debug: (_v0, _v1) => globalThis.__logger?.debug(_v0, _v1),
    info: (_v0, _v1) => globalThis.__logger?.info(_v0, _v1),
    warn: (_v0, _v1) => globalThis.__logger?.warn(_v0, _v1),
    error: (_v0, _v1) => globalThis.__logger?.error(_v0, _v1),
    fatal: (_v0, _v1) => globalThis.__logger?.fatal(_v0, _v1)
  }]);
}