{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["AccessEndingBadge", 0, ({
    surface: _v0
  }) => {
    let {
        isEligible: _v1,
        isAudienceMatch: _v2,
        isTreatment: _v3,
        isReady: _v4,
        daysToRenewal: _v5,
        currentTier: _v6
      } = (0, _v6.useAutoRenewEncouragementEligibility)(),
      {
        trackEligible: _v7,
        trackDisplayed: _v8,
        trackCtaClicked: _v9
      } = (0, _v7.useAutoRenewEncouragementTracking)(),
      _v10 = _v3 ? "treatment" : "control";
    return ((0, _v4.usePicoEffect)(() => {
      if (!_v4 || !_v2) return !1;
      let _v0 = {
        surface: _v0,
        variant: _v3 ? "treatment" : "control",
        daysToRenewal: _v5,
        tier: _v6
      };
      _v7(_v0), _v1 && _v8(_v0);
    }, [_v4, _v2, _v1, _v3, _v0, _v5, _v6], {
      once: !0
    }), _v1) ? (0, _v1.jsx)(_v2.Button, {
      as: "a",
      href: _v5.AUTO_RENEW_ENABLE_URL,
      size: "xs",
      onClick: () => _v9({
        surface: _v0,
        variant: _v10,
        daysToRenewal: _v5,
        tier: _v6
      }),
      sx: {
        bgColor: "status-caution-primary",
        color: "white",
        _hover: {
          bgColor: "status-caution-primary"
        },
        _active: {
          bgColor: "status-caution-primary"
        }
      },
      children: (0, _v3.translate)({
        singular: "Access Ending",
        dictionary: {
          es: {
            singular: "Fin del acceso"
          },
          "de-DE": {
            singular: "Zugriffsende"
          },
          "fr-FR": {
            singular: "Fin de l'accès"
          },
          "ja-JP": {
            singular: "アクセスの終了"
          },
          "ko-KR": {
            singular: "액세스 종료"
          },
          "pt-BR": {
            singular: "Acesso expirando"
          },
          "zh-CN": {
            singular: "访问即将结束"
          }
        }
      })
    }) : null;
  }]);
}