{
  "use strict";

  class _v1 {
    mutex = Promise.resolve();
    async run(_v0) {
      return new Promise((_v0, _v1) => {
        this.mutex = this.mutex.then(async () => {
          try {
            _v0(await _v0());
          } catch (_v0) {
            _v1(_v0);
          }
        });
      });
    }
  }
  _v0.s(["Mutex", 0, _v1]);
}