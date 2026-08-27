{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = () => {
    let {
        settings: _v0
      } = (0, _v9.useOrionSettings)(),
      {
        isTeamInfoLoading: _v1,
        teamCapabilities: {
          hasEnterprise: _v2
        },
        teamInfo: {
          teamData: {
            ownerId: _v3 = 0
          } = {}
        }
      } = (0, _v2.useContext)(_v11.ManageTeamStateCtx),
      {
        data: _v4
      } = (0, _v7.useGetUser)(() => _v3 && _v2 && _v0.show_ai_credits_revamp ? {
        where: {
          userId: _v3
        },
        select: ["aiCreditsQuota", "uploadQuota"]
      } : null);
    if (_v1 || !_v2 || !_v0.show_ai_credits_revamp) return null;
    let _v5 = _v4?.aiCreditsQuota,
      _v6 = _v4?.uploadQuota;
    return (0, _v1.jsxs)(_v5.VStack, {
      paddingTop: "lg",
      paddingX: "lg",
      children: [(0, _v1.jsx)(_v4.Text, {
        variant: "heading-lg",
        fontWeight: "medium",
        alignSelf: "flex-start",
        children: (0, _v8.translate)({
          singular: "Usage",
          dictionary: {
            es: {
              singular: "Uso"
            },
            "de-DE": {
              singular: "Nutzung"
            },
            "fr-FR": {
              singular: "Utilisation"
            },
            "ja-JP": {
              singular: "使用状況"
            },
            "ko-KR": {
              singular: "사용량"
            },
            "pt-BR": {
              singular: "Uso"
            },
            "zh-CN": {
              singular: "使用情况"
            }
          }
        })
      }), (0, _v1.jsx)(_v15.UsageContactUs, {}), (0, _v1.jsxs)(_v3.Flex, {
        "data-testid": "team-usage-container",
        width: "100%",
        gap: "lg",
        flexDirection: {
          base: "column",
          md: "row"
        },
        marginBottom: "md",
        children: [(0, _v1.jsx)(_v13.AiCreditsTotalCount, {
          currentCount: _v5?.used,
          totalCount: _v5?.available,
          resetDate: _v5?.resetDate
        }), (0, _v1.jsx)(_v14.StorageTotalCount, {
          currentCount: _v6?.space?.used ?? void 0,
          totalCount: _v6?.space?.max ?? void 0
        })]
      }), (0, _v1.jsx)(_v12.AiCreditsConsumptionList, {
        teamOwnerId: _v3
      })]
    });
  };
  (0, _v6.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v16.getLayout = _v10.getLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v16], 0);
}