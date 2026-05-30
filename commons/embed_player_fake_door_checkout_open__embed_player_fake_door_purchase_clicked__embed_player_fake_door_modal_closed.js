{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  function _v5() {
    return Object.fromEntries(new URLSearchParams(window.location.search));
  }
  let _v6 = {
    ep: {
      events: {
        checkoutOpen: "embed_player_fake_door_checkout_open",
        purchaseClicked: "embed_player_fake_door_purchase_clicked",
        modalClosed: "embed_player_fake_door_modal_closed"
      },
      eventsPayload: _v0 => ({
        feature: _v0.f ?? ""
      }),
      getRedirectUrl: () => "/"
    }
  };
  _v0.s(["getFakeDoorConfig", 0, _v0 => _v0 ? _v6[_v0] ?? null : null, "getQueryParams", 0, _v5], 0), _v0.s(["useFakeDoorCheckoutTracking", 0, () => {
    let _v0 = (0, _v3.usePico)(),
      _v1 = (0, _v1.useRouter)(),
      _v2 = (0, _v4.useViewer)(),
      _v3 = "string" == typeof _v1.query?.plan ? _v1.query.plan : "starter",
      _v4 = _v2?.user ? _v2.teamUser?.accountType ?? _v2.user.account : "logged_out",
      _v5 = _v1.pathname.includes("/trial"),
      _v6 = (0, _v2.useMemo)(() => ({
        upgrade_plan: _v3,
        current_plan: _v4,
        is_trial: _v5
      }), [_v3, _v4, _v5]),
      _v7 = (0, _v2.useCallback)(_v0 => {
        let _v1 = {
          ..._v0.eventsPayload?.(_v5()),
          ..._v6
        };
        _v0?.track(_v0.events.checkoutOpen, _v1);
      }, [_v0, _v6]);
    return {
      trackFakeDoorCheckoutOpen: _v7,
      trackFakeDoorPurchaseClicked: (0, _v2.useCallback)(_v0 => {
        let _v1 = {
          ..._v0.eventsPayload?.(_v5()),
          ..._v6
        };
        _v0?.track(_v0.events.purchaseClicked, _v1);
      }, [_v0, _v6]),
      trackFakeDoorModalClosed: (0, _v2.useCallback)((_v0, _v1) => {
        let _v2 = {
          ..._v0.eventsPayload?.(_v5()),
          ..._v6,
          action_type: _v1
        };
        _v0?.track(_v0.events.modalClosed, _v2);
      }, [_v0, _v6])
    };
  }], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  function _v13(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v12.useGctlConfig)();
    return (0, _v9.default)(_v2 ? `/me/capabilities${(0, _v11.serializeQuery)(_v2)}` : () => null, _v2 ? () => (0, _v8.getMeCapabilities)({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  "true" === _v7.default.env.STORYBOOK && (0, _v11.assignMswData)(_v13, {
    endpoint: "/me/capabilities",
    method: "GET"
  }), "true" === _v7.default.env.STORYBOOK && (0, _v11.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v10.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v12.useGctlConfig)(),
      [_v5, _v6] = (0, _v11.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/capabilities${(0, _v11.serializeQuery)(_v0)}`, (0, _v8.getMeCapabilities)({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/me/capabilities",
    method: "GET"
  }), _v0.s(["useGetMeCapabilities", 0, _v13], 0);
}