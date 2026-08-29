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
    _v13 = _v0.i(0);
  let _v14 = ({
    workspaceUuid: _v0
  }) => {
    let {
        settings: _v1
      } = (0, _v8.useOrionSettings)(),
      _v2 = _v1.show_ai_credits_revamp,
      {
        data: _v3
      } = (0, _v6.useGetWorkspace)(() => _v0 ? {
        where: {
          workspaceUuid: _v0
        },
        select: ["primitives"]
      } : null);
    if (!_v2) return null;
    let _v4 = _v3?.primitives?.aiCreditsQuota,
      _v5 = _v3?.primitives?.uploadQuota;
    return (0, _v1.jsxs)(_v4.VStack, {
      paddingTop: "lg",
      paddingX: "lg",
      children: [(0, _v1.jsx)(_v3.Text, {
        variant: "heading-lg",
        fontWeight: "medium",
        alignSelf: "flex-start",
        children: (0, _v7.translate)({
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
      }), (0, _v1.jsxs)(_v2.Flex, {
        "data-testid": "workspace-usage-container",
        width: "100%",
        gap: "lg",
        flexDirection: {
          base: "column",
          md: "row"
        },
        marginBottom: "md",
        children: [(0, _v1.jsx)(_v10.AiCreditsTotalCount, {
          currentCount: _v4?.used ?? void 0,
          totalCount: _v4?.available ?? void 0,
          resetDate: _v4?.resetDate ?? void 0,
          breakdown: _v4?.breakdown
        }), (0, _v1.jsx)(_v11.StorageTotalCount, {
          currentCount: _v5?.used ?? void 0,
          totalCount: _v5?.available ?? void 0
        })]
      }), (0, _v1.jsx)(_v9.AiCreditsConsumptionList, {
        workspaceUuid: _v0
      })]
    });
  };
  (0, _v5.withPageSetup)(_v13.getWspServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v14.getLayout = (_v0, _v1) => (0, _v12.getLayout)(_v0, _v1, _v12.WORKSPACE_ROOT_LIST_LAYOUT), _v0.s(["__N_SSP", 0, !0, "default", 0, _v14], 0);
}