{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = "reverse_ft_delay_state_changed",
    _v9 = "seen";
  function _v10(_v0) {
    return `reverse_ft_delay_state:${_v0}`;
  }
  function _v11(_v0) {
    try {
      return window.localStorage.getItem(_v10(_v0)) === _v9;
    } catch {
      return !1;
    }
  }
  _v0.s(["useReverseFreeTrialDelay", 0, function () {
    let _v0 = (0, _v6.useViewer)(),
      {
        capabilities: {
          hasFreeTrialEligibility: _v1
        },
        ready: _v2
      } = (0, _v2.useCapability)(["hasFreeTrialEligibility"], _v0?.teamUser?.ownerId),
      {
        settings: _v3,
        isLoadingResponse: _v4
      } = (0, _v4.useOrionSettings)(),
      {
        activate: _v5
      } = (0, _v7.useReverseTrialGrant)(),
      {
        reverse_ft_delay_offer_paywall_on_trigger: _v6,
        reverse_ft_delay_announcement_on_trigger: _v7,
        reverse_ft_delay_trial_days: _v8
      } = _v3,
      _v9 = _v0?.user?.id,
      _v10 = _v7 ? "announcement" : _v6 ? "offer" : null,
      _v11 = null !== _v10,
      [_v12, _v13] = (0, _v1.useState)(() => null != _v9 && _v11(_v9));
    (0, _v1.useEffect)(() => {
      _v13(_v11(_v9 ?? 0));
    }, [_v9]), (0, _v1.useEffect)(() => {
      let _v0 = () => {
        _v13(_v11(_v9 ?? 0));
      };
      return window.addEventListener(_v8, _v0), () => window.removeEventListener(_v8, _v0);
    }, [_v9]);
    let _v14 = (0, _v3.useGetUser)(() => null != _v9 && _v11 && _v2 && _v1 ? {
        select: ["metadata.connections.videos.total"],
        where: {
          userId: _v9
        }
      } : null),
      _v15 = _v14.data?.metadata?.connections?.videos?.total,
      _v16 = !!_v0 && _v2 && !_v4,
      _v17 = (_v0?.teamUser?.accountType ?? _v0?.user?.account) === _v5.AccountType.Free,
      _v18 = Date.now(),
      _v19 = _v0?.user?.createdTime ? Math.floor((_v18 - Date.parse(_v0.user.createdTime)) / 0) : null,
      _v20 = _v16 && _v11 && _v17 && !0 === _v1 && null != _v9 && null !== _v19 && _v19 < 0,
      _v21 = _v20 && !_v12 && ((_v15 ?? 0) > 0 || null !== _v19 && _v19 >= 15) ? _v10 : null,
      _v22 = (0, _v1.useCallback)(() => {
        if (null != _v9) {
          try {
            window.localStorage.setItem(_v10(_v9), _v9), window.dispatchEvent(new Event(_v8));
          } catch {}
          _v13(!0);
        }
      }, [_v9]),
      _v23 = (0, _v1.useCallback)(async () => {
        if (!_v7 || !_v20) return !1;
        try {
          return await _v5(_v8), !0;
        } catch {
          return !1;
        }
      }, [_v7, _v20, _v5, _v8]);
    return {
      mode: _v21,
      trialDays: _v8,
      markSeen: _v22,
      shouldScheduleEmail: _v20,
      grantSilently: _v23
    };
  }], 0);
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  async function _v14({
    baseUrl: _v0,
    variables: _v1,
    ..._v2
  }) {
    return (0, _v12.measureLatency)("postMeMembershipReverseTrialDelayEmail", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/membership/reverse_trial_delay/email`, {
        ..._v2,
        method: "POST",
        body: JSON.stringify((0, _v13.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v13.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v13.deepCamelCase)(_v1);
    });
  }
  async function _v15({
    baseUrl: _v0,
    ..._v1
  }) {
    return (0, _v12.measureLatency)("postMeMembershipReverseTrialDelaySeen", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/membership/reverse_trial_delay/seen`, {
        ..._v1,
        method: "POST"
      });
      if (!_v0.ok) throw new _v13.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v13.deepCamelCase)(_v1);
    });
  }
  var _v16 = _v0.i(0);
  _v0.s(["useReverseTrialDelayApi", 0, function () {
    let {
      baseUrl: _v0,
      jwt: _v1,
      xVimeoPage: _v2,
      locale: _v3
    } = (0, _v16.useGctlConfig)();
    return {
      scheduleEmail: (0, _v1.useCallback)(async _v0 => {
        await _v14({
          baseUrl: _v0,
          variables: {
            trialDays: _v0
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        });
      }, [_v0, _v1, _v2, _v3]),
      markSeen: (0, _v1.useCallback)(async () => {
        await _v15({
          baseUrl: _v0,
          headers: {
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        });
      }, [_v0, _v1, _v2, _v3])
    };
  }], 0);
}