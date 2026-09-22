{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useUploadEmbeddable", 0, function ({
    userId: _v0,
    hasRestrictedStorage: _v1,
    defaultEmbedPreference: _v2,
    onQuotaRevalidate: _v3
  }) {
    let {
        uploads: _v4
      } = (0, _v3.useUploader)(),
      [_v5] = (0, _v1.usePatchUserItems)(),
      _v6 = _v4.find(_v0 => _v0.clipId)?.clipId,
      _v7 = (0, _v2.useEmbeddable)(_v6) ?? (!_v2 || "private" !== _v2);
    return {
      showEmbedToggle: _v1,
      isEmbeddable: _v7,
      onEmbedToggle: () => {
        if (!_v6) return Promise.resolve();
        let _v0 = !_v7;
        return _v2.embeddableStore.set(_v6, _v0), _v5({
          where: {
            userId: _v0
          },
          query: {
            uris: _v4.filter(_v0 => _v0.clipId).map(_v0 => _v0.clipId).map(_v0 => `/videos/${_v0}`).join()
          },
          variables: {
            privacy: {
              embed: _v0 ? "public" : "private"
            }
          }
        }).then(() => {
          _v1 && _v3?.();
        }).catch(() => {
          _v2.embeddableStore.set(_v6, !_v0);
        });
      },
      clearEmbeddable: () => {
        _v6 && _v2.embeddableStore.delete(_v6);
      }
    };
  }]);
}