{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = () => (0, _v8.translate)({
      singular: "Report this person",
      dictionary: {
        es: {
          singular: "Reportar a esta persona"
        },
        "de-DE": {
          singular: "Diese Person melden"
        },
        "fr-FR": {
          singular: "Signaler cette personne"
        },
        "ja-JP": {
          singular: "このユーザーを報告する"
        },
        "ko-KR": {
          singular: "이 사용자를 신고"
        },
        "pt-BR": {
          singular: "Denunciar essa pessoa"
        },
        "zh-CN": {
          singular: "举报此人"
        }
      }
    }),
    _v10 = () => (0, _v8.translate)({
      singular: "Also block this person",
      dictionary: {
        es: {
          singular: "Bloquear también a esta persona"
        },
        "de-DE": {
          singular: "Auch diese Person blockieren"
        },
        "fr-FR": {
          singular: "Bloquer également cette personne"
        },
        "ja-JP": {
          singular: "このユーザーもブロックする"
        },
        "ko-KR": {
          singular: "이 사람도 차단"
        },
        "pt-BR": {
          singular: "Bloquear também essa pessoa"
        },
        "zh-CN": {
          singular: "同时屏蔽此人"
        }
      }
    }),
    _v11 = () => (0, _v8.translate)({
      singular: "Learn more about blocking",
      dictionary: {
        es: {
          singular: "Más información sobre el bloqueo"
        },
        "de-DE": {
          singular: "Mehr über das Blockieren erfahren"
        },
        "fr-FR": {
          singular: "En savoir plus sur le blocage"
        },
        "ja-JP": {
          singular: "ブロックについて詳しくはこちら"
        },
        "ko-KR": {
          singular: "차단에 대해 자세히 알아보기"
        },
        "pt-BR": {
          singular: "Saiba mais sobre como bloquear"
        },
        "zh-CN": {
          singular: "了解有关屏蔽的更多信息"
        }
      }
    }),
    _v12 = () => (0, _v8.translate)({
      singular: "This person could not be reported",
      dictionary: {
        es: {
          singular: "No se pudo denunciar a esta persona"
        },
        "de-DE": {
          singular: "Diese Person konnte nicht gemeldet werden"
        },
        "fr-FR": {
          singular: "Cette personne n'a pas pu être signalée"
        },
        "ja-JP": {
          singular: "このユーザーを通報できませんでした"
        },
        "ko-KR": {
          singular: "이 사용자를 신고할 수 없습니다."
        },
        "pt-BR": {
          singular: "Não foi possível denunciar esta pessoa"
        },
        "zh-CN": {
          singular: "无法举报此人"
        }
      }
    });
  _v0.s(["blockUserLabel", 0, _v10, "blockingHelpLabel", 0, _v11, "reportFailedMessage", 0, _v12, "reportUserModalHeader", 0, _v9, "returnToProfileLabel", 0, () => (0, _v8.translate)({
    singular: "Return to profile",
    dictionary: {
      es: {
        singular: "Volver al perfil"
      },
      "de-DE": {
        singular: "Zurück zum Profil"
      },
      "fr-FR": {
        singular: "Retour au profil"
      },
      "ja-JP": {
        singular: "プロフィールに戻る"
      },
      "ko-KR": {
        singular: "프로필로 돌아가기"
      },
      "pt-BR": {
        singular: "Voltar ao perfil"
      },
      "zh-CN": {
        singular: "返回个人资料"
      }
    }
  })], 0), _v0.s(["BlockUserCheckbox", 0, ({
    isChecked: _v0,
    onChange: _v1
  }) => (0, _v1.jsxs)(_v3.Flex, {
    align: "center",
    gap: "50",
    minW: "0",
    flexWrap: "wrap",
    children: [(0, _v1.jsx)(_v2.Checkbox, {
      isChecked: _v0,
      onChange: _v0 => _v1(_v0.target.checked),
      children: (0, _v1.jsx)(_v5.Text, {
        variant: "body-sm",
        children: _v10()
      })
    }), (0, _v1.jsx)(_v6.Tooltip, {
      label: _v11(),
      children: (0, _v1.jsx)(_v4.IconButton, {
        as: "a",
        href: "https://vimeo.com/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12425418952977-How-to-block-someone-on-Vimeo",
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": _v11(),
        variant: "tertiary",
        size: "xs",
        color: "text-secondary",
        icon: (0, _v1.jsx)(_v7.QuestionCircle, {})
      })
    })]
  })], 0);
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  async function _v22({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v20.measureLatency)("postUserReport", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/report`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v21.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v21.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v21.deepCamelCase)(_v1);
    });
  }
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  function _v25() {
    let {
        mutate: _v0
      } = (0, _v23.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v24.useGctlConfig)(),
      [_v5, _v6] = (0, _v19.useInternalState)();
    return [(0, _v13.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/report${(0, _v19.serializeQuery)(_v0)}`, _v22({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
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
  }
  "true" === _v18.default.env.STORYBOOK && (0, _v19.assignMswData)(_v25, {
    endpoint: "/users/:userId/report",
    method: "POST"
  });
  var _v26 = _v0.i(0);
  _v0.s(["useUserReport", 0, function ({
    userId: _v0,
    onClose: _v1,
    onSubmitted: _v2
  }) {
    let [_v3, _v4] = (0, _v13.useState)(!1),
      _v5 = (0, _v17.useViewer)(),
      _v6 = (0, _v14.useReport)({
        onClose: _v1,
        discovery: (0, _v15.useReportReasonsDiscovery)({
          contentType: "user",
          headerTitle: _v9()
        }),
        submitAdapter: function ({
          userId: _v0,
          block: _v1
        }) {
          let [_v2, {
            callCount: _v3,
            error: _v4,
            loading: _v5
          }] = _v25();
          return {
            postReport: (_v0, {
              optOutOfCommunications: _v1 = !1
            } = {}) => {
              _v0 && _v0 && _v2({
                where: {
                  userId: _v0
                },
                variables: {
                  reason: _v0,
                  block: _v1,
                  optOutOfCommunications: _v1,
                  source: (0, _v26.reportSourceHint)()
                }
              });
            },
            status: (0, _v13.useMemo)(() => 0 === _v3 ? {
              state: "idle"
            } : _v5 ? {
              state: "posting"
            } : {
              state: null != _v4 ? "failed" : "succeeded"
            }, [_v3, _v4, _v5])
          };
        }({
          userId: _v0,
          block: _v3
        }),
        onSubmitted: _v2,
        submitFailureMessage: _v12(),
        resolveExternalUrl: _v0 => (0, _v16.withReportedContentUrl)(_v0, `user${_v0}`),
        offerCommsOptOut: !!_v5?.isUnitedKingdom
      });
    return {
      ..._v6,
      showBlockOption: _v6.selected?.kind !== "external",
      blockUser: _v3,
      setBlockUser: _v4
    };
  }], 0);
}