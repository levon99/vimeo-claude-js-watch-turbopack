{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = ["name", "edit_session.has_watermark", "edit_session.min_tier_for_movie", "privacy.view"];
  class _v3 {
    static getAccessToken(_v0, _v1, _v2, _v3) {
      return fetch("/_next/access_token", {
        body: JSON.stringify({
          scopes: _v2,
          app_id: _v0,
          token: _v1,
          get_magisto_team_token: _v3
        }),
        method: "POST",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-type": "application/json"
        }
      }).then(_v0 => {
        if (_v0.ok) return _v0.json().then(_v0 => {
          let {
            access_token: _v1,
            magisto_team_token: _v2
          } = _v0;
          return (0, _v1.camelizeDeep)({
            ..._v1,
            magisto_team_token: _v2
          });
        });
        throw _v0;
      });
    }
    static fetchJwtToken() {
      return fetch("/_next/jwt", {
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      }).then(_v0 => {
        if (_v0.ok) return _v0.json().then(_v0 => {
          let {
            token: _v1
          } = _v0;
          return _v1;
        });
        throw _v0;
      });
    }
    static getConnectedApps(_v0, _v1, _v2) {
      return new Promise(_v0 => {
        _v3._getConnectedApps(_v0, _v1, _v2).then(_v0 => _v0(_v0)).catch(_v0 => {
          401 === _v0.status && _v3.fetchJwtToken().then(_v0 => {
            _v3._getConnectedApps(_v0, _v0, _v2).then(_v0 => _v0(_v0));
          });
        });
      });
    }
    static _getConnectedApps(_v0, _v1, _v2) {
      return new Promise((_v0, _v1) => {
        let _v2 = "?user_token=true";
        _v2 && (_v2 += `&owner_id=${_v2}`), fetch(`//${_v0}/me/connected_apps${_v2}`, {
          method: "GET",
          headers: {
            Authorization: `jwt ${_v1}`
          }
        }).then(_v0 => {
          _v0.ok ? _v0.json().then(_v0 => {
            _v0((0, _v1.camelizeDeep)(_v0));
          }) : _v1(_v0);
        });
      });
    }
    static getFBConnectedApp = (_v0, _v1, _v2) => new Promise((_v0, _v1) => {
      _v3.getConnectedApps(_v0, _v1, _v2).then(_v0 => {
        let _v1;
        _v0 && _v0.data && _v0.total > 0 && _v0.data.forEach(_v0 => {
          "facebook" === _v0.type && (_v1 = _v0);
        }), _v1 ? _v0(_v1) : _v1(Error("facebook app not found"));
      }).catch(_v0 => _v1(_v0));
    });
    static getFBAccessTokenWithBusinessCreativeScope = (_v0, _v1, _v2) => new Promise((_v0, _v1) => {
      _v3.getFBConnectedApp(_v0, _v1, _v2).then(_v0 => {
        _v0 && _v0.neededScopes && _v0.neededScopes.businessCreative && 0 === _v0.neededScopes.businessCreative.length ? _v0(_v0.userAccessToken) : _v1(Error("facebook business creative scope missing"));
      }).catch(_v0 => _v1(_v0));
    });
    static fetchVideoUploadStatus = (_v0, _v1, _v2) => new Promise((_v0, _v1) => {
      fetch(`//${_v1}/me/videos/${_v0}?fields=upload.status,privacy.view`, {
        method: "GET",
        headers: {
          Authorization: `jwt ${_v2}`
        }
      }).then(_v0 => {
        _v0.ok ? _v0.json().then(_v0 => {
          _v0(_v0);
        }) : _v1(_v0);
      }).catch(_v0 => _v1(_v0));
    });
    static fetchVideoDetails = async (_v0, _v1, _v2, _v3) => {
      try {
        let _v0 = await fetch(`//${_v1}/videos/${_v0}?fields=${_v3}`, {
          method: "GET",
          headers: {
            Authorization: `jwt ${_v2}`
          }
        });
        if (!_v0.ok) return null;
        {
          let _v0 = await _v0.json();
          return (0, _v1.camelizeDeep)(_v0);
        }
      } catch (_v0) {
        return null;
      }
    };
    static triggerExifTagging = async (_v0, _v1, _v2, _v3, _v4) => {
      try {
        let _v0 = await fetch(`//${_v1}/videos/${_v0}/tag_job`, {
          method: "POST",
          headers: {
            Authorization: `jwt ${_v2}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            flow: _v4,
            video_file_id: _v3
          })
        });
        if (_v0.ok) {
          let _v0 = await _v0.json();
          return (0, _v1.camelizeDeep)(_v0);
        }
        throw Error(await _v0.json());
      } catch (_v0) {
        throw _v0;
      }
    };
    static fetchExifTaggingStatus = async (_v0, _v1, _v2, _v3, _v4) => {
      try {
        let _v0 = await fetch(`//${_v1}/videos/${_v0}/tag_job/${_v3}?filename=${_v4}`, {
          method: "GET",
          headers: {
            Authorization: `jwt ${_v2}`
          }
        });
        if (_v0.ok) {
          let _v0 = await _v0.json();
          return (0, _v1.camelizeDeep)(_v0);
        }
        throw Error(await _v0.json());
      } catch (_v0) {
        throw _v0;
      }
    };
    static completeShopifyConnection = (_v0, _v1) => new Promise((_v0, _v1) => {
      fetch(`/shopify/complete${_v1}`, {
        method: "GET",
        headers: {
          Authorization: `jwt ${_v0}`
        }
      }).then(_v0 => {
        302 === _v0.status ? _v0.json().then(_v0 => {
          window.location.href = _v0.redirect;
        }) : _v0.ok ? _v0.json().then(_v0 => {
          _v0();
        }) : _v1(_v0);
      }).catch(_v0 => {
        _v1(_v0);
      });
    });
    static getShopifyShopsIfConnected(_v0, _v1, _v2) {
      return _v3.getConnectedApps(_v0, _v1, _v2).then(_v0 => {
        if (_v0 && _v0.data && _v0.total > 0) return _v0.data.filter(_v0 => "shopify" === _v0.type);
      });
    }
    static updateClipData = async (_v0, _v1, _v2, _v3) => {
      let _v4 = await fetch(`//${_v0}/videos/${_v2}?fields=${_v2.join(",")}`, {
          method: "PATCH",
          body: JSON.stringify(_v3),
          headers: {
            Authorization: `jwt ${_v1}`,
            "Content-Type": "application/json"
          }
        }),
        _v5 = await _v4.json();
      if (_v4.ok) return (0, _v1.camelizeDeep)(_v5);
      throw Error(_v5.error);
    };
    static getClipData = async (_v0, _v1, _v2, _v3) => {
      let _v4 = await fetch(`//${_v0}/videos/${_v2}?fields=${(_v3 || _v2).join(",")}`, {
          method: "GET",
          headers: {
            Authorization: `jwt ${_v1}`,
            "Content-Type": "application/json"
          }
        }),
        _v5 = await _v4.json();
      if (_v4.ok) return (0, _v1.camelizeDeep)(_v5);
      throw Error(_v5.error);
    };
    static fetchMaxResolutionVideoStatus = (_v0, _v1, _v2, _v3) => new Promise(_v0 => {
      let _v1 = _v0 => {
        setTimeout(async () => {
          let _v0 = await _v3.fetchVideoDetails(_v0, _v1, _v2, _v3);
          return _v0.editSession.isMaxResolution ? _v0(_v0) : _v1(0);
        }, _v0);
      };
      _v1(0);
    });
  }
  _v0.s(["default", 0, _v3]);
}