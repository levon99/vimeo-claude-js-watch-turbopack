{
  "use strict";

  var _v1,
    _v2,
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
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  _v0.i(0);
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = ({
      children: _v0,
      onClose: _v1,
      showUpsell: _v2,
      visitedRoutes: _v3
    }) => _v2 ? (0, _v3.jsx)(_v34, {
      visitedRoutes: _v3,
      onClose: _v1,
      headerText: (0, _v30.translate)({
        singular: "Upgrade for more analytics",
        dictionary: {
          es: {
            singular: "Actualice la suscripción para obtener más análisis"
          },
          "de-DE": {
            singular: "Upgrade für mehr Analytik"
          },
          "fr-FR": {
            singular: "Passez au niveau supérieur pour plus de statistiques"
          },
          "ja-JP": {
            singular: "アップグレードして、さらに分析を"
          },
          "ko-KR": {
            singular: "업그레이드하고 더 많은 분석 활용"
          },
          "pt-BR": {
            singular: "Atualize para obter mais análises"
          },
          "zh-CN": {
            singular: "立即升级，获取更多分析"
          }
        }
      }),
      subHeaderText: (0, _v30.translate)({
        singular: "Get full access to basic, social, and engagement analytics",
        dictionary: {
          es: {
            singular: "Obtenga acceso completo a los análisis básicos, de redes sociales y de interacción"
          },
          "de-DE": {
            singular: "Erhalten Sie vollen Zugriff auf grundlegende, Social-Media- und Engagement-Analysen"
          },
          "fr-FR": {
            singular: "Accédez à toutes les statistiques de base, liées aux réseaux sociaux et à l'engagement"
          },
          "ja-JP": {
            singular: "基本分析、ソーシャル分析、エンゲージメント分析のすべてを利用できます"
          },
          "ko-KR": {
            singular: "기본, 소셜 및 참여 분석을 모두 활용하세요."
          },
          "pt-BR": {
            singular: "Tenha acesso total às análises básicas, sociais e de engajamento"
          },
          "zh-CN": {
            singular: "获得基础、社交和参与度分析的完全访问权限"
          }
        }
      })
    }) : (0, _v3.jsx)(_v3.Fragment, {
      children: _v0
    }),
    _v34 = ({
      onClose: _v0,
      headerText: _v1,
      subHeaderText: _v2,
      visitedRoutes: _v3
    }) => {
      let _v4 = (0, _v4.useContext)(_v28.ViewerContext),
        _v5 = (0, _v22.useRouter)(),
        _v6 = (0, _v24.useHistory)(),
        _v7 = (0, _v32.getReportPageNameFromUrl)(_v5.asPath);
      return (0, _v4.useEffect)(() => {
        setTimeout(() => {
          let _v0 = {
            location: _v5.asPath,
            path: _v5.asPath,
            component: "report_body",
            type: "subscription",
            product: _v32.ANALYTICS
          };
          _v29.BigPictureClient.sendEvent(new _v29.Event(_v32.UPSELL_IMPRESSION_EVENT_NAME, 1, _v0));
        }, 10);
      }, [_v5.asPath]), (0, _v3.jsx)(_v31.default, {
        apiUrl: _v4?.apiUrl,
        userConfig: {
          jwt: _v4?.jwt,
          userId: _v4?.user?.id
        },
        templateType: "default",
        modalConfig: {
          headerText: _v1,
          subHeaderText: _v2
        },
        onClose: () => _v0 ? _v0() : (() => {
          if (_v6.length > 2 && _v3 && _v3.length > 2) {
            let _v0 = _v3[_v3.length - 2];
            return _v6.push(_v0);
          }
          _v6.push("/analytics");
        })(),
        tracking: {
          params: {
            page: _v32.ANALYTICS_PAGE,
            feature: _v32.ANALYTICS,
            location: _v32.BigPictureLocations.REPORTS,
            upsell_name: _v32.UpsellName.REPORTS
          },
          paywallTracking: {
            paywallTrigger: `analytics_${_v7}_report_upgrade_button`,
            paywallLocation: "analytics_page",
            paywallType: "popup",
            paywallFeature: "analytics"
          }
        }
      });
    },
    _v35 = () => {
      let {
        reportName: _v0
      } = (0, _v24.useParams)();
      return (0, _v3.jsx)(_v24.Redirect, {
        to: `/analytics/${_v0}`
      });
    };
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0);
  let _v54 = _v0 => (0, _v3.jsx)(_v53.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v3.jsx)("path", {
      d: "M18 14a4 4 0 0 0-3.08 1.48l-5.1-2.35a3.64 3.64 0 0 0 0-2.26l5.1-2.35a4 4 0 1 0-.85-1.81L8.79 9.14a4 4 0 1 0 0 5.72l5.28 2.43A4.166 4.166 0 0 0 14 18a4 4 0 1 0 4-4Zm0-10a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM6 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm12 6A2 2 0 1 1 18 16 2 2 0 0 1 18 20Z",
      fill: "currentColor"
    })
  });
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0);
  async function _v61({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v59.measureLatency)("postUserAnalyticsAiWidget", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/analytics/ai_widget?fields=${_v1.map(_v60.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v60.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v60.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v60.deepCamelCase)(_v1);
    });
  }
  var _v62 = _v0.i(0),
    _v63 = _v0.i(0);
  function _v64() {
    let {
        mutate: _v0
      } = (0, _v62.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v63.useGctlConfig)(),
      [_v5, _v6] = (0, _v58.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/analytics/ai_widget${(0, _v58.serializeQuery)(_v0)}`, _v61({
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
  async function _v65({
    baseUrl: _v0,
    where: {
      userId: _v1,
      widgetId: _v2
    },
    ..._v3
  }) {
    return (0, _v59.measureLatency)("deleteUserAnalyticsWidget", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/analytics/widgets/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v60.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v60.deepCamelCase)(_v1);
    });
  }
  async function _v66({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      widgetId: _v4
    },
    ..._v5
  }) {
    return (0, _v59.measureLatency)("patchUserAnalyticsWidget", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/analytics/widgets/${_v4}?fields=${_v1.map(_v60.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v60.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v60.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v60.deepCamelCase)(_v1);
    });
  }
  function _v67() {
    let {
        mutate: _v0
      } = (0, _v62.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v63.useGctlConfig)(),
      [_v5, _v6] = (0, _v58.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/analytics/widgets/${_v0.where.widgetId}${(0, _v58.serializeQuery)(_v0)}`, _v65({
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
  function _v68() {
    let {
        mutate: _v0
      } = (0, _v62.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v63.useGctlConfig)(),
      [_v5, _v6] = (0, _v58.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/analytics/widgets/${_v0.where.widgetId}${(0, _v58.serializeQuery)(_v0)}`, _v66({
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
  async function _v69({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v59.measureLatency)("getUserAnalyticsWidgets", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/analytics/widgets?fields=${_v1.map(_v60.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v60.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v60.deepCamelCase)(_v1);
    });
  }
  async function _v70({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v59.measureLatency)("postUserAnalyticsWidgets", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/analytics/widgets?fields=${_v1.map(_v60.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v60.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v60.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v60.deepCamelCase)(_v1);
    });
  }
  "true" === _v57.default.env.STORYBOOK && (0, _v58.assignMswData)(_v64, {
    endpoint: "/users/:userId/analytics/ai_widget",
    method: "POST"
  }), "true" === _v57.default.env.STORYBOOK && (0, _v58.assignMswData)(_v67, {
    endpoint: "/users/:userId/analytics/widgets/:widgetId",
    method: "DELETE"
  }), "true" === _v57.default.env.STORYBOOK && (0, _v58.assignMswData)(_v68, {
    endpoint: "/users/:userId/analytics/widgets/:widgetId",
    method: "PATCH"
  });
  var _v71 = _v0.i(0);
  function _v72(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v63.useGctlConfig)();
    return (0, _v71.default)(_v2 ? `/users/${_v2.where.userId}/analytics/widgets${(0, _v58.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v69({
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
  function _v73() {
    let {
        mutate: _v0
      } = (0, _v62.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v63.useGctlConfig)(),
      [_v5, _v6] = (0, _v58.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/analytics/widgets${(0, _v58.serializeQuery)(_v0)}`, _v70({
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
  "true" === _v57.default.env.STORYBOOK && (0, _v58.assignMswData)(_v72, {
    endpoint: "/users/:userId/analytics/widgets",
    method: "GET"
  }), "true" === _v57.default.env.STORYBOOK && (0, _v58.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v62.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v63.useGctlConfig)(),
      [_v5, _v6] = (0, _v58.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/analytics/widgets${(0, _v58.serializeQuery)(_v0)}`, _v69({
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
    endpoint: "/users/:userId/analytics/widgets",
    method: "GET"
  }), "true" === _v57.default.env.STORYBOOK && (0, _v58.assignMswData)(_v73, {
    endpoint: "/users/:userId/analytics/widgets",
    method: "POST"
  });
  var _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0);
  let _v81 = "30rem",
    _v82 = (0, _v30.translate)({
      singular: "Add widget to custom analytics",
      dictionary: {
        es: {
          singular: "Añadir widget a analíticas personalizadas"
        },
        "de-DE": {
          singular: "Widget zu benutzerdefinierten Analytics hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter le widget aux analyses personnalisées"
        },
        "ja-JP": {
          singular: "ウィジェットをカスタム分析に追加"
        },
        "ko-KR": {
          singular: "위젯을 맞춤형 분석에 추가"
        },
        "pt-BR": {
          singular: "Adicionar widget ao painel de análises personalizado"
        },
        "zh-CN": {
          singular: "将小部件添加到自定义分析"
        }
      }
    }),
    _v83 = (0, _v30.translate)({
      singular: "Add this widget to your custom analytics dashboard to keep it handy. Once saved, it'll be available every time you return to this page.",
      dictionary: {
        es: {
          singular: "Añade este widget a tu panel de analíticas personalizado para tenerlo a mano. Una vez guardado, estará disponible cada vez que vuelvas a esta página."
        },
        "de-DE": {
          singular: "Fügen Sie dieses Widget Ihrem benutzerdefinierten Analytics-Dashboard hinzu, damit es griffbereit ist. Nach dem Speichern steht es jedes Mal zur Verfügung, wenn Sie zu dieser Seite zurückkehren."
        },
        "fr-FR": {
          singular: "Ajoutez ce widget à votre tableau de bord d'analyses personnalisées pour l'avoir sous la main. Une fois enregistré, il sera disponible à chaque fois que vous revenez sur cette page."
        },
        "ja-JP": {
          singular: "このウィジェットをカスタム分析ダッシュボードに追加しておくと便利です。保存すると、このページに戻るたびに利用できます。"
        },
        "ko-KR": {
          singular: "이 위젯을 맞춤형 분석 대시보드에 추가하여 항상 사용할 수 있도록 하세요. 저장하면 이 페이지에 다시 방문할 때마다 사용할 수 있습니다."
        },
        "pt-BR": {
          singular: "Adicione este widget ao seu painel de análises personalizado para tê-lo à mão. Depois de salvo, ele estará disponível sempre que você voltar a esta página."
        },
        "zh-CN": {
          singular: "将此小部件添加到您的自定义分析仪表板以便随时使用。保存后，您每次返回此页面时都可以使用它。"
        }
      }
    }),
    _v84 = (0, _v30.translate)({
      singular: "Not now",
      dictionary: {
        es: {
          singular: "Ahora no"
        },
        "de-DE": {
          singular: "Nicht jetzt"
        },
        "fr-FR": {
          singular: "Plus tard"
        },
        "ja-JP": {
          singular: "後でする"
        },
        "ko-KR": {
          singular: "나중에"
        },
        "pt-BR": {
          singular: "Agora não"
        },
        "zh-CN": {
          singular: "现在不行"
        }
      }
    }),
    _v85 = (0, _v30.translate)({
      singular: "Add to custom analytics",
      dictionary: {
        es: {
          singular: "Añadir a analíticas personalizadas"
        },
        "de-DE": {
          singular: "Zu benutzerdefinierten Analytics hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter aux analyses personnalisées"
        },
        "ja-JP": {
          singular: "カスタム分析に追加"
        },
        "ko-KR": {
          singular: "맞춤형 분석에 추가"
        },
        "pt-BR": {
          singular: "Adicionar ao painel de análises personalizado"
        },
        "zh-CN": {
          singular: "添加到自定义分析"
        }
      }
    }),
    _v86 = ({
      isOpen: _v0,
      isSaving: _v1,
      onConfirm: _v2,
      onClose: _v3
    }) => (0, _v3.jsxs)(_v75.Modal, {
      isOpen: _v0,
      onClose: _v3,
      size: "sm",
      isCentered: !0,
      children: [(0, _v3.jsx)(_v80.ModalOverlay, {}), (0, _v3.jsxs)(_v77.ModalContent, {
        width: _v81,
        maxWidth: _v81,
        borderRadius: "xl",
        overflow: "hidden",
        children: [(0, _v3.jsx)(_v79.ModalHeader, {
          paddingTop: "1.5rem",
          paddingX: "1.5rem",
          paddingBottom: "1rem",
          children: _v82
        }), (0, _v3.jsx)(_v76.ModalBody, {
          paddingX: "1.5rem",
          children: (0, _v3.jsx)(_v46.Text, {
            variant: "body-md",
            children: _v83
          })
        }), (0, _v3.jsxs)(_v78.ModalFooter, {
          paddingTop: "1rem",
          paddingBottom: "1.5rem",
          children: [(0, _v3.jsx)(_v74.Button, {
            variant: "tertiary",
            onClick: _v3,
            children: _v84
          }), (0, _v3.jsx)(_v74.Button, {
            variant: "primary",
            isDisabled: _v1,
            onClick: _v2,
            children: _v85
          })]
        })]
      })]
    });
  var _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0);
  let _v90 = {
      "&:hover": {
        bg: "fill-component"
      }
    },
    _v91 = ({
      text: _v0,
      onClick: _v1,
      isDisabled: _v2 = !1
    }) => (0, _v3.jsxs)(_v6.Flex, {
      as: "button",
      type: "button",
      disabled: _v2,
      width: "100%",
      alignItems: "center",
      gap: "6px",
      paddingX: "3",
      paddingY: "2",
      borderRadius: "md",
      backgroundColor: "transparent",
      sx: _v2 ? void 0 : _v90,
      cursor: _v2 ? "not-allowed" : "pointer",
      opacity: _v2 ? .4 : 1,
      onMouseDown: _v0 => {
        _v0.preventDefault();
      },
      onClick: _v1,
      children: [(0, _v3.jsx)(_v46.Text, {
        flex: 1,
        textAlign: "start",
        noOfLines: 1,
        children: _v0
      }), (0, _v3.jsx)(_v89.ArrowRight, {
        boxSize: "1.25rem",
        color: "text-primary",
        flexShrink: 0
      })]
    });
  var _v92 = _v0.i(0),
    _v93 = _v0.i(0);
  let _v94 = (0, _v30.translate)({
      singular: "Send",
      dictionary: {
        es: {
          singular: "Enviar"
        },
        "de-DE": {
          singular: "Senden"
        },
        "fr-FR": {
          singular: "Envoyer"
        },
        "ja-JP": {
          singular: "送信"
        },
        "ko-KR": {
          singular: "전송"
        },
        "pt-BR": {
          singular: "Enviar"
        },
        "zh-CN": {
          singular: "发送"
        }
      }
    }),
    _v95 = ({
      prompt: _v0,
      onPromptChange: _v1,
      onSubmit: _v2,
      isSubmitting: _v3,
      placeholder: _v4,
      isDisabled: _v5 = !1,
      inputRef: _v6,
      boxShadow: _v7,
      onFocus: _v8,
      onBlur: _v9
    }) => (0, _v3.jsxs)(_v5.Box, {
      as: "form",
      backgroundColor: "surface",
      borderWidth: "1px",
      borderColor: "stroke",
      borderRadius: "md",
      minHeight: "5.625rem",
      opacity: _v5 ? .4 : 1,
      pointerEvents: _v5 ? "none" : "auto",
      boxShadow: _v7,
      sx: {
        "&:focus-within": {
          borderColor: "focus-alt"
        }
      },
      overflow: "hidden",
      onSubmit: _v0 => {
        _v0.preventDefault(), _v5 || _v3 || _v0.trim().length > 0 && _v2(_v0.trim());
      },
      children: [(0, _v3.jsx)(_v92.Input, {
        ref: _v6,
        placeholder: _v4,
        value: _v0,
        isDisabled: _v5,
        onChange: _v0 => _v1(_v0.target.value),
        onFocus: _v8,
        onBlur: _v9,
        sx: {
          height: "auto",
          backgroundColor: "transparent",
          outline: "none",
          "&:hover": {
            outline: "none"
          },
          "&:focus": {
            outline: "none"
          },
          paddingTop: "3",
          paddingX: "4",
          fontSize: "body-md"
        }
      }), (0, _v3.jsx)(_v6.Flex, {
        justifyContent: "flex-end",
        padding: "3",
        children: (0, _v3.jsx)(_v40.IconButton, {
          size: "sm",
          variant: "primary",
          "aria-label": _v94,
          type: "submit",
          icon: _v3 ? (0, _v3.jsx)(_v10.Spinner, {
            size: "xs"
          }) : (0, _v3.jsx)(_v93.Send, {}),
          isDisabled: _v5 || _v3 || 0 === _v0.trim().length
        })
      })]
    }),
    _v96 = [(0, _v30.translate)({
      singular: "Which videos are trending on mobile devices right now?",
      dictionary: {
        es: {
          singular: "¿Qué vídeos son tendencia en dispositivos móviles ahora mismo?"
        },
        "de-DE": {
          singular: "Welche Videos sind gerade auf Mobilgeräten im Trend?"
        },
        "fr-FR": {
          singular: "Quelles vidéos sont tendance sur les appareils mobiles en ce moment\x0f\x0f\x1f\x1f\x1f\x1f?"
        },
        "ja-JP": {
          singular: "現在モバイル端末でどの動画がトレンドになっていますか？"
        },
        "ko-KR": {
          singular: "지금 모바일 기기에서 어떤 동영상이 트렌드인지요?"
        },
        "pt-BR": {
          singular: "Quais vídeos estão em alta em dispositivos móveis agora?"
        },
        "zh-CN": {
          singular: "目前哪些视频在移动设备上流行？"
        }
      }
    }), (0, _v30.translate)({
      singular: "What insights can we gather from user engagement metrics?",
      dictionary: {
        es: {
          singular: "¿Qué conclusiones podemos extraer de las métricas de compromiso de los usuarios?"
        },
        "de-DE": {
          singular: "Welche Erkenntnisse können wir aus den Engagement-Metriken der Nutzer gewinnen?"
        },
        "fr-FR": {
          singular: "Quelles informations pouvons‑nous tirer des métriques d'engagement utilisateur\x0f\x0f\x1f\x1f\x1f\x1f?"
        },
        "ja-JP": {
          singular: "ユーザーエンゲージメントの指標からどのような洞察が得られますか？"
        },
        "ko-KR": {
          singular: "사용자 참여 지표로부터 어떤 인사이트를 얻을 수 있나요?"
        },
        "pt-BR": {
          singular: "Quais insights podemos obter das métricas de engajamento dos usuários?"
        },
        "zh-CN": {
          singular: "我们可以从用户参与指标中获得哪些洞察？"
        }
      }
    }), (0, _v30.translate)({
      singular: "How can we visualize the performance trends of our content?",
      dictionary: {
        es: {
          singular: "¿Cómo podemos visualizar las tendencias de rendimiento de nuestro contenido?"
        },
        "de-DE": {
          singular: "Wie können wir die Leistungstrends unserer Inhalte visualisieren?"
        },
        "fr-FR": {
          singular: "Comment pouvons-nous visualiser les tendances de performance de notre contenu\x0f\x0f\x1f\x1f\x1f\x1f?"
        },
        "ja-JP": {
          singular: "当社のコンテンツのパフォーマンス傾向をどのように可視化できますか？"
        },
        "ko-KR": {
          singular: "콘텐츠의 성과 추세를 어떻게 시각화할 수 있을까요?"
        },
        "pt-BR": {
          singular: "Como podemos visualizar as tendências de desempenho do nosso conteúdo?"
        },
        "zh-CN": {
          singular: "我们如何可视化内容的性能趋势？"
        }
      }
    })],
    _v97 = (0, _v30.translate)({
      singular: "Vimeo AI",
      dictionary: {
        "fr-FR": {
          singular: "IA Vimeo"
        }
      }
    }),
    _v98 = (0, _v30.translate)({
      singular: "Custom analytics",
      dictionary: {
        es: {
          singular: "Analíticas personalizadas"
        },
        "de-DE": {
          singular: "Benutzerdefinierte Analysen"
        },
        "fr-FR": {
          singular: "Analyses personnalisées"
        },
        "ja-JP": {
          singular: "カスタムアナリティクス"
        },
        "ko-KR": {
          singular: "맞춤형 분석"
        },
        "pt-BR": {
          singular: "Análises personalizadas"
        },
        "zh-CN": {
          singular: "自定义分析"
        }
      }
    }),
    _v99 = (0, _v30.translate)({
      singular: "Generate and combine data widgets into {ITALIC}your own{/ITALIC} custom dashboard.",
      replacements: {
        ITALIC: _v0 => (0, _v3.jsx)(_v46.Text, {
          as: "span",
          fontStyle: "italic",
          children: _v0
        })
      },
      dictionary: {
        es: {
          singular: "Genera y combina widgets de datos en {ITALIC}tu propio{/ITALIC} panel personalizado."
        },
        "de-DE": {
          singular: "Generieren und kombinieren Sie Daten-Widgets in Ihr {ITALIC}eigenes{/ITALIC} benutzerdefiniertes Dashboard."
        },
        "fr-FR": {
          singular: "Générez et combinez des widgets de données pour créer {ITALIC}votre propre{/ITALIC} tableau de bord personnalisé."
        },
        "ja-JP": {
          singular: "データウィジェットを生成して組み合わせ、{ITALIC}あなただけの{/ITALIC}カスタムダッシュボードにまとめます。"
        },
        "ko-KR": {
          singular: "데이터 위젯을 생성하고 결합하여 {ITALIC}나만의{/ITALIC} 맞춤형 대시보드로 구성하세요."
        },
        "pt-BR": {
          singular: "Gere e combine widgets de dados em {ITALIC}seu{/ITALIC} painel personalizado."
        },
        "zh-CN": {
          singular: "生成并组合数据小部件，创建 {ITALIC}您自己的{/ITALIC} 自定义仪表板."
        }
      }
    }),
    _v100 = (0, _v30.translate)({
      singular: "Create a custom widget...",
      dictionary: {
        es: {
          singular: "Crear un widget personalizado..."
        },
        "de-DE": {
          singular: "Erstellen Sie ein benutzerdefiniertes Widget..."
        },
        "fr-FR": {
          singular: "Créez un widget personnalisé..."
        },
        "ja-JP": {
          singular: "カスタムウィジェットを作成..."
        },
        "ko-KR": {
          singular: "맞춤형 위젯 만들기..."
        },
        "pt-BR": {
          singular: "Crie um widget personalizado..."
        },
        "zh-CN": {
          singular: "创建自定义小部件..."
        }
      }
    }),
    _v101 = (0, _v30.translate)({
      singular: "By using Vimeo AI, you agree to our {TERMS}Terms of Service{/TERMS} and acknowledge our {PRIVACY}Privacy Policy{/PRIVACY}.",
      replacements: {
        TERMS: _v0 => (0, _v3.jsx)(_v88.Link, {
          isExternal: !0,
          href: "https://vimeo.com/legal/",
          color: "text-secondary",
          textDecoration: "underline",
          children: _v0
        }, "terms-link"),
        PRIVACY: _v0 => (0, _v3.jsx)(_v88.Link, {
          isExternal: !0,
          href: "https://vimeo.com/legal/privacy/policy",
          color: "text-secondary",
          textDecoration: "underline",
          children: _v0
        }, "privacy-link")
      },
      dictionary: {
        es: {
          singular: "Al utilizar Vimeo AI, acepta nuestros {TERMS}Términos de servicio{/TERMS} y reconoce nuestra {PRIVACY}Política de privacidad{/PRIVACY}."
        },
        "de-DE": {
          singular: "Durch die Nutzung von Vimeo AI stimmen Sie unseren {TERMS}Nutzungsbedingungen{/TERMS} zu und erkennen unsere {PRIVACY}Datenschutzrichtlinie{/PRIVACY} an."
        },
        "fr-FR": {
          singular: "En utilisant la fonctionnalité IA Vimeo, vous acceptez nos {TERMS}Conditions d'utilisation{/TERMS} et reconnaissez avoir pris connaissance de notre {PRIVACY}Politique de confidentialité{/PRIVACY}."
        },
        "ja-JP": {
          singular: "Vimeo AIを使用すると、当社の{TERMS}利用規約{/TERMS}に同意し、当社の{PRIVACY}プライバシーポリシー{/PRIVACY}を承認したものとみなされます。"
        },
        "ko-KR": {
          singular: "Vimeo AI를 사용함으로써 귀하는 Vimeo의 {TERMS}서비스 약관{/TERMS}에 동의하고 {PRIVACY}개인정보보호 정책{/PRIVACY}을 확인했음을 인정합니다."
        },
        "pt-BR": {
          singular: "Ao usar o Vimeo AI, você concorda com nossos {TERMS}Termos de Serviço{/TERMS} e aceita nossa {PRIVACY}Política de Privacidade{/PRIVACY}."
        },
        "zh-CN": {
          singular: "通过使用 Vimeo AI，即表示您同意我们的{TERMS}服务条款{/TERMS}并认可我们的{PRIVACY}隐私政策{/PRIVACY}。"
        }
      }
    }),
    _v102 = ({
      prompt: _v0,
      onPromptChange: _v1,
      onSubmit: _v2,
      isSubmitting: _v3
    }) => (0, _v3.jsxs)(_v6.Flex, {
      direction: "column",
      alignItems: "center",
      gap: "xl",
      maxWidth: "36.25rem",
      width: "100%",
      children: [(0, _v3.jsxs)(_v6.Flex, {
        direction: "column",
        alignItems: "center",
        gap: "md",
        paddingX: "3",
        textAlign: "center",
        children: [(0, _v3.jsx)(_v87.Badge, {
          variant: "new",
          size: "sm",
          children: _v97
        }), (0, _v3.jsxs)(_v6.Flex, {
          direction: "column",
          gap: "0",
          children: [(0, _v3.jsx)(_v39.Header, {
            size: "lg",
            children: _v98
          }), (0, _v3.jsx)(_v46.Text, {
            variant: "body-lg",
            color: "text-secondary",
            children: _v99
          })]
        })]
      }), (0, _v3.jsxs)(_v6.Flex, {
        direction: "column",
        gap: "3",
        width: "100%",
        children: [(0, _v3.jsx)(_v5.Box, {
          backgroundColor: "fill-component",
          borderWidth: "1px",
          borderColor: "stroke",
          borderRadius: "lg",
          padding: "1",
          overflow: "hidden",
          children: (0, _v3.jsxs)(_v6.Flex, {
            direction: "column",
            gap: "1",
            children: [(0, _v3.jsx)(_v95, {
              prompt: _v0,
              onPromptChange: _v1,
              onSubmit: _v0 => _v2(_v0, "input"),
              isSubmitting: _v3,
              placeholder: _v100
            }), (0, _v3.jsx)(_v6.Flex, {
              direction: "column",
              gap: "1",
              children: _v96.map(_v0 => (0, _v3.jsx)(_v91, {
                text: _v0,
                isDisabled: _v3,
                onClick: () => _v2(_v0, "suggestion")
              }, _v0))
            })]
          })
        }), (0, _v3.jsx)(_v46.Text, {
          variant: "body-sm",
          color: "text-secondary",
          textAlign: "center",
          children: _v101
        })]
      })]
    }),
    _v103 = (0, _v30.translate)({
      singular: "You don’t have permission to view this data.",
      dictionary: {
        es: {
          singular: "No tienes permiso para ver estos datos."
        },
        "de-DE": {
          singular: "Sie haben keine Berechtigung, diese Daten einzusehen."
        },
        "fr-FR": {
          singular: "Vous n’êtes pas autorisé à consulter ces données."
        },
        "ja-JP": {
          singular: "このデータを表示する権限がありません。"
        },
        "ko-KR": {
          singular: "이 데이터를 볼 권한이 없습니다."
        },
        "pt-BR": {
          singular: "Você não tem permissão para visualizar estes dados."
        },
        "zh-CN": {
          singular: "您没有权限查看此数据。"
        }
      }
    }),
    _v104 = () => (0, _v3.jsx)(_v6.Flex, {
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      children: (0, _v3.jsx)(_v46.Text, {
        variant: "body-md",
        color: "text-secondary",
        textAlign: "center",
        children: _v103
      })
    });
  var _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0);
  let _v110 = (0, _v30.translate)({
      singular: "New data widget",
      dictionary: {
        es: {
          singular: "Nuevo widget de datos"
        },
        "de-DE": {
          singular: "Neues Daten-Widget"
        },
        "fr-FR": {
          singular: "Nouveau widget de données"
        },
        "ja-JP": {
          singular: "新しいデータウィジェット"
        },
        "ko-KR": {
          singular: "새 데이터 위젯"
        },
        "pt-BR": {
          singular: "Novo widget de dados"
        },
        "zh-CN": {
          singular: "新建数据小部件"
        }
      }
    }),
    _v111 = (0, _v30.translate)({
      singular: "Generate a new custom data widget...",
      dictionary: {
        es: {
          singular: "Generar un nuevo widget de datos personalizado..."
        },
        "de-DE": {
          singular: "Neues benutzerdefiniertes Daten-Widget erstellen..."
        },
        "fr-FR": {
          singular: "Générer un nouveau widget de données personnalisé..."
        },
        "ja-JP": {
          singular: "新しいカスタムデータウィジェットを生成..."
        },
        "ko-KR": {
          singular: "새 맞춤형 데이터 위젯 생성..."
        },
        "pt-BR": {
          singular: "Gerar um novo widget de dados personalizado..."
        },
        "zh-CN": {
          singular: "生成新的自定义数据小部件..."
        }
      }
    }),
    _v112 = (0, _v30.translate)({
      singular: "Top videos by views in the last 30 days",
      dictionary: {
        es: {
          singular: "Los vídeos más vistos en los últimos 30 días"
        },
        "de-DE": {
          singular: "Top‑Videos nach Aufrufen in den letzten 30 Tagen"
        },
        "fr-FR": {
          singular: "Vidéos les plus vues au cours des 30 derniers jours"
        },
        "ja-JP": {
          singular: "過去30日間の視聴数トップ動画"
        },
        "ko-KR": {
          singular: "지난 30일간 조회수 기준 상위 동영상"
        },
        "pt-BR": {
          singular: "Principais vídeos por visualizações nos últimos 30 dias"
        },
        "zh-CN": {
          singular: "过去 30 天内按观看次数排名的热门视频"
        }
      }
    }),
    _v113 = (0, _v30.translate)({
      singular: "Widget limit reached",
      dictionary: {
        es: {
          singular: "Límite de widgets alcanzado"
        },
        "de-DE": {
          singular: "Widget-Limit erreicht"
        },
        "fr-FR": {
          singular: "Limite de widgets atteinte"
        },
        "ja-JP": {
          singular: "ウィジェットの上限に達しました"
        },
        "ko-KR": {
          singular: "위젯 한도에 도달했습니다"
        },
        "pt-BR": {
          singular: "Limite de widgets atingido"
        },
        "zh-CN": {
          singular: "小部件已达上限"
        }
      }
    }),
    _v114 = (0, _v30.translate)({
      singular: "Close",
      dictionary: {
        es: {
          singular: "Cerrar"
        },
        "de-DE": {
          singular: "Schließen"
        },
        "fr-FR": {
          singular: "Fermer "
        },
        "ja-JP": {
          singular: "閉じる"
        },
        "ko-KR": {
          singular: "닫기"
        },
        "pt-BR": {
          singular: "Fechar"
        },
        "zh-CN": {
          singular: "关闭"
        }
      }
    }),
    _v115 = {
      "@keyframes ai-overlay-panel-in": {
        from: {
          opacity: 0,
          transform: "translateX(-50%) translateY(0.75rem) scale(0.96)"
        },
        to: {
          opacity: 1,
          transform: "translateX(-50%) translateY(0) scale(1)"
        }
      }
    },
    _v116 = {
      "@keyframes ai-overlay-panel-out": {
        from: {
          opacity: 1,
          transform: "translateX(-50%) translateY(0) scale(1)"
        },
        to: {
          opacity: 0,
          transform: "translateX(-50%) translateY(0.75rem) scale(0.96)"
        }
      }
    },
    _v117 = {
      "@keyframes ai-overlay-trigger-in": {
        from: {
          opacity: 0,
          transform: "translateX(-50%) scale(0.85)"
        },
        to: {
          opacity: 1,
          transform: "translateX(-50%) scale(1)"
        }
      }
    },
    _v118 = {
      "@keyframes ai-overlay-trigger-out": {
        from: {
          opacity: 1,
          transform: "translateX(-50%) scale(1)"
        },
        to: {
          opacity: 0,
          transform: "translateX(-50%) scale(0.85)"
        }
      }
    },
    _v119 = ({
      onExpand: _v0,
      isExiting: _v1
    }) => (0, _v3.jsx)(_v5.Box, {
      as: "button",
      type: "button",
      position: "absolute",
      bottom: "0",
      left: "50%",
      pointerEvents: "auto",
      transform: "translateX(-50%)",
      "aria-label": _v110,
      onClick: _v0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "5px",
      borderRadius: "xl",
      backgroundColor: "background",
      borderWidth: "1px",
      borderColor: "stroke",
      boxShadow: "md",
      sx: {
        animation: `ai-overlay-trigger-${_v1 ? "out" : "in"} 200ms ease-out forwards`,
        ...(_v1 ? _v118 : _v117)
      },
      _hover: {
        backgroundColor: "fill-component"
      },
      cursor: "pointer",
      children: (0, _v3.jsx)(_v6.Flex, {
        alignItems: "center",
        justifyContent: "center",
        minWidth: "3rem",
        padding: "4px",
        borderRadius: "full",
        backgroundColor: "surface",
        borderWidth: "1px",
        borderColor: "stroke",
        children: (0, _v3.jsx)(_v108.AiSparkles, {
          boxSize: "1.25rem"
        })
      })
    }),
    _v120 = ({
      isSubmitting: _v0,
      hasWidgets: _v1,
      isAtWidgetLimit: _v2 = !1,
      prompt: _v3,
      onPromptChange: _v4,
      onSubmit: _v5
    }) => {
      let [_v6, _v7] = (0, _v4.useState)(!1),
        [_v8, _v9] = (0, _v4.useState)(!0),
        _v10 = !_v2 && (_v6 || !_v1),
        [_v11, _v12] = (0, _v4.useState)(null);
      (0, _v4.useEffect)(() => {
        if (null === _v11) return;
        let _v0 = setTimeout(() => _v12(null), Math.max(_v11 - Date.now(), 0));
        return () => clearTimeout(_v0);
      }, [_v11]);
      let _v13 = null !== _v11,
        _v14 = _v8 || _v13,
        _v15 = !_v8 || _v13,
        _v16 = _v0 => {
          _v9(_v0), _v12(Date.now() + 200);
        },
        _v17 = (0, _v4.useRef)(null),
        _v18 = (0, _v4.useEffectEvent)(() => {
          _v2 || _v17.current?.focus();
        });
      (0, _v4.useEffect)(() => {
        if (!_v8) return;
        let _v0 = requestAnimationFrame(_v18);
        return () => cancelAnimationFrame(_v0);
      }, [_v8]);
      let _v19 = (0, _v4.useRef)(null),
        _v20 = (0, _v4.useEffectEvent)(() => {
          _v8 && !_v6 && "" === _v3.trim() && _v16(!1);
        });
      (0, _v4.useEffect)(() => {
        let _v0 = _v19.current;
        if (null === _v0) return;
        let _v1 = _v0;
        for (let _v0 = _v0.parentElement; null !== _v0; _v0 = _v0.parentElement) {
          let {
            overflowY: _v0
          } = getComputedStyle(_v0);
          if ("auto" === _v0 || "scroll" === _v0) {
            _v1 = _v0;
            break;
          }
        }
        return _v1 === _v0 && (_v1 = document), _v1.addEventListener("scroll", _v20, {
          passive: !0,
          capture: !0
        }), () => _v1.removeEventListener("scroll", _v20, {
          capture: !0
        });
      }, []);
      let _v21 = (_v0, _v1 = "input") => {
        _v2 || _v0.trim().length > 0 && !_v0 && _v5(_v0.trim(), _v1);
      };
      return (0, _v3.jsxs)(_v6.Flex, {
        ref: _v19,
        position: "sticky",
        bottom: "2xl",
        zIndex: "dropdown",
        width: "100%",
        justifyContent: "center",
        pointerEvents: "none",
        height: "0",
        overflow: "visible",
        children: [_v14 ? (0, _v3.jsxs)(_v6.Flex, {
          direction: "column",
          gap: "2",
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: _v8 ? "auto" : "none",
          width: "30rem",
          sx: {
            animation: `ai-overlay-panel-${_v8 ? "in" : "out"} 200ms ease-out forwards`,
            ...(_v8 ? _v115 : _v116)
          },
          children: [_v2 ? (0, _v3.jsxs)(_v105.Alert, {
            status: "warning",
            "data-status": "warning",
            size: "sm",
            borderRadius: "lg",
            width: "100%",
            alignItems: "flex-start",
            paddingX: "4",
            paddingY: "3",
            gap: "3",
            children: [(0, _v3.jsx)(_v107.AlertTitle, {
              color: "text-primary",
              fontSize: "heading-xs",
              lineHeight: "1.4",
              children: _v113
            }), (0, _v3.jsx)(_v106.AlertDescription, {
              color: "text-primary",
              fontSize: "body-sm",
              lineHeight: "1.2",
              children: (0, _v30.translate)({
                singular: "Your account can have up to 20 custom widgets. Remove an existing widget to create a new one, or {LINK}Contact Sales{/LINK} to request a higher limit.",
                replacements: {
                  LINK: _v0 => (0, _v3.jsx)(_v88.Link, {
                    isExternal: !0,
                    href: "/enterprise/contact-us",
                    color: "text-primary",
                    textDecoration: "underline",
                    children: _v0
                  }, "contact-sales-link")
                },
                dictionary: {
                  es: {
                    singular: "Tu cuenta puede tener hasta 20 widgets personalizados. Elimina un widget existente para crear uno nuevo, o {LINK}Contacta con Ventas{/LINK} para solicitar un límite superior."
                  },
                  "de-DE": {
                    singular: "Ihr Konto kann bis zu 20 benutzerdefinierte Widgets haben. Entfernen Sie ein bestehendes Widget, um ein neues zu erstellen, oder {LINK}Contact Sales{/LINK}, um ein höheres Limit anzufordern."
                  },
                  "fr-FR": {
                    singular: "Votre compte peut contenir jusqu'à 20 widgets personnalisés. Supprimez un widget existant pour en créer un nouveau, ou {LINK}Contactez le service commercial{/LINK} pour demander un quota supérieur."
                  },
                  "ja-JP": {
                    singular: "アカウントでは最大20個のカスタムウィジェットを作成できます。既存のウィジェットを削除して新しいウィジェットを作成するか、{LINK}営業にお問い合わせ{/LINK}して上限引き上げをリクエストしてください。"
                  },
                  "ko-KR": {
                    singular: "귀하의 계정은 최대 20개의 맞춤형 위젯을 가질 수 있습니다. 새 위젯을 생성하려면 기존 위젯을 제거하거나 더 높은 한도를 요청하려면 {LINK}영업팀에 문의{/LINK}하세요."
                  },
                  "pt-BR": {
                    singular: "Sua conta pode ter até 20 widgets personalizados. Remova um widget existente para criar um novo, ou {LINK}Contate o time de vendas{/LINK} para solicitar um limite maior."
                  },
                  "zh-CN": {
                    singular: "您的账户最多可拥有 20 个自定义小部件。删除现有小部件以创建新小部件，或{LINK}联系销售{/LINK}以申请更高配额。"
                  }
                }
              })
            })]
          }) : null, (0, _v3.jsxs)(_v5.Box, {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1",
            padding: "1",
            borderRadius: "lg",
            backgroundColor: "background",
            borderWidth: "1px",
            borderColor: "stroke",
            boxShadow: "md",
            overflow: "hidden",
            children: [(0, _v3.jsxs)(_v6.Flex, {
              alignItems: "center",
              gap: "1",
              paddingLeft: "2",
              paddingRight: "px",
              children: [(0, _v3.jsx)(_v108.AiSparkles, {
                boxSize: "1.25rem"
              }), (0, _v3.jsx)(_v46.Text, {
                variant: "heading-xs",
                color: "text-primary",
                flex: 1,
                noOfLines: 1,
                children: _v110
              }), (0, _v3.jsx)(_v40.IconButton, {
                size: "xs",
                variant: "tertiary",
                "aria-label": _v114,
                icon: (0, _v3.jsx)(_v109.CloseXSmall, {}),
                onMouseDown: _v0 => {
                  _v0.preventDefault();
                },
                onClick: () => {
                  _v17.current?.blur(), _v16(!1);
                }
              })]
            }), _v10 ? (0, _v3.jsx)(_v6.Flex, {
              direction: "column",
              gap: "1",
              children: _v96.map(_v0 => (0, _v3.jsx)(_v91, {
                text: _v0,
                isDisabled: _v0,
                onClick: () => _v21(_v0, "suggestion")
              }, _v0))
            }) : null, (0, _v3.jsx)(_v95, {
              prompt: _v3,
              onPromptChange: _v4,
              onSubmit: _v0 => _v21(_v0, "input"),
              isSubmitting: _v0,
              placeholder: _v2 ? _v112 : _v111,
              isDisabled: _v2,
              inputRef: _v17,
              boxShadow: "sm",
              onFocus: () => _v7(!0),
              onBlur: () => _v7(!1)
            })]
          })]
        }) : null, _v15 ? (0, _v3.jsx)(_v119, {
          onExpand: () => _v16(!0),
          isExiting: _v8
        }) : null]
      });
    };
  var _v121 = _v21,
    _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0),
    _v127 = _v0.i(0),
    _v128 = _v0.i(0);
  let _v129 = new Set(["hour", "day", "week", "month", "year"]),
    _v130 = {
      views: () => (0, _v30.translate)({
        singular: "Views",
        dictionary: {
          es: {
            singular: "Vistas"
          },
          "de-DE": {
            singular: "Ansichten"
          },
          "fr-FR": {
            singular: "Vues"
          },
          "ja-JP": {
            singular: "視聴数"
          },
          "ko-KR": {
            singular: "조회 수"
          },
          "pt-BR": {
            singular: "Visualizações"
          },
          "zh-CN": {
            singular: "观看量"
          }
        }
      }),
      viewers: () => (0, _v30.translate)({
        singular: "Viewers",
        dictionary: {
          es: {
            singular: "Espectadores"
          },
          "de-DE": {
            singular: "Zuschauer"
          },
          "fr-FR": {
            singular: "Spectateurs"
          },
          "ja-JP": {
            singular: "視聴者"
          },
          "ko-KR": {
            singular: "뷰어"
          },
          "pt-BR": {
            singular: "Espectadores"
          },
          "zh-CN": {
            singular: "观众"
          }
        }
      }),
      plays: () => (0, _v30.translate)({
        singular: "Plays",
        dictionary: {
          es: {
            singular: "Reprod."
          },
          "fr-FR": {
            singular: "Lectures"
          },
          "ja-JP": {
            singular: "再生回数"
          },
          "ko-KR": {
            singular: "재생 횟수"
          },
          "pt-BR": {
            singular: "Reproduções"
          },
          "zh-CN": {
            singular: "播放量"
          }
        }
      }),
      impressions: () => (0, _v30.translate)({
        singular: "Impressions",
        dictionary: {
          es: {
            singular: "Impresiones"
          },
          "de-DE": {
            singular: "Impressionen"
          },
          "fr-FR": {
            singular: "Chargements"
          },
          "ja-JP": {
            singular: "インプレッション"
          },
          "ko-KR": {
            singular: "노출 수"
          },
          "pt-BR": {
            singular: "Impressões"
          },
          "zh-CN": {
            singular: "展示量"
          }
        }
      }),
      seconds_watched: () => (0, _v30.translate)({
        singular: "Seconds watched",
        dictionary: {
          es: {
            singular: "Segundos vistos"
          },
          "de-DE": {
            singular: "Sekunden angesehen"
          },
          "fr-FR": {
            singular: "Secondes regardées"
          },
          "ja-JP": {
            singular: "視聴秒数"
          },
          "ko-KR": {
            singular: "시청 초"
          },
          "pt-BR": {
            singular: "Segundos assistidos"
          },
          "zh-CN": {
            singular: "观看秒数"
          }
        }
      }),
      total_seconds_watched: () => (0, _v30.translate)({
        singular: "Total watch time",
        dictionary: {
          es: {
            singular: "Tiempo total de visualización"
          },
          "de-DE": {
            singular: "Gesamte Wiedergabezeit"
          },
          "fr-FR": {
            singular: "Temps total de visionnage"
          },
          "ja-JP": {
            singular: "総視聴時間"
          },
          "ko-KR": {
            singular: "총 시청 시간"
          },
          "pt-BR": {
            singular: "Tempo total de exibição"
          },
          "zh-CN": {
            singular: "总观看时长"
          }
        }
      }),
      mean_seconds_watched: () => (0, _v30.translate)({
        singular: "Avg. time watched",
        dictionary: {
          es: {
            singular: "Tiempo promedio de reproducción"
          },
          "de-DE": {
            singular: "Zeit, die das Video im Durchschnitt angesehen wurde"
          },
          "fr-FR": {
            singular: "Durée de visionnage moy."
          },
          "ja-JP": {
            singular: "平均視聴時間"
          },
          "ko-KR": {
            singular: "평균 시청 시간"
          },
          "pt-BR": {
            singular: "Tempo Médio Assistido"
          },
          "zh-CN": {
            singular: "平均观看时间"
          }
        }
      }),
      mean_percent_watched: () => (0, _v30.translate)({
        singular: "Avg. percent watched",
        dictionary: {
          es: {
            singular: "Porcentaje promedio visto"
          },
          "de-DE": {
            singular: "Prozent angeschaut (Durchschnitt)"
          },
          "fr-FR": {
            singular: "Pourcentage moyen de lecture"
          },
          "ja-JP": {
            singular: "平均視聴率"
          },
          "ko-KR": {
            singular: "평균 시청 시간"
          },
          "pt-BR": {
            singular: "Média de porcentagem assistida"
          },
          "zh-CN": {
            singular: "平均观看百分比"
          }
        }
      }),
      completions: () => (0, _v30.translate)({
        singular: "Completions",
        dictionary: {
          es: {
            singular: "Finalizaciones"
          },
          "de-DE": {
            singular: "Vervollständigungen"
          },
          "fr-FR": {
            singular: "Complétions"
          },
          "ja-JP": {
            singular: "完了数"
          },
          "ko-KR": {
            singular: "완료"
          },
          "pt-BR": {
            singular: "Conclusões"
          },
          "zh-CN": {
            singular: "完成情况"
          }
        }
      }),
      net_percent_completed: () => (0, _v30.translate)({
        singular: "Net percent completed",
        dictionary: {
          es: {
            singular: "Porcentaje neto completado"
          },
          "de-DE": {
            singular: "Netto-Prozentsatz abgeschlossen"
          },
          "fr-FR": {
            singular: "Pourcentage net achevé"
          },
          "ja-JP": {
            singular: "純完了率"
          },
          "ko-KR": {
            singular: "순 완료율"
          },
          "pt-BR": {
            singular: "Percentual líquido concluído"
          },
          "zh-CN": {
            singular: "完成净百分比"
          }
        }
      }),
      bandwidth: () => (0, _v30.translate)({
        singular: "Bandwidth",
        dictionary: {
          es: {
            singular: "Ancho de banda"
          },
          "de-DE": {
            singular: "Bandbreite"
          },
          "fr-FR": {
            singular: "Bande passante"
          },
          "ja-JP": {
            singular: "転送量"
          },
          "ko-KR": {
            singular: "대역폭"
          },
          "pt-BR": {
            singular: "Largura de banda"
          },
          "zh-CN": {
            singular: "带宽"
          }
        }
      }),
      storage: () => (0, _v30.translate)({
        singular: "Storage",
        dictionary: {
          es: {
            singular: "Almacenamiento:"
          },
          "de-DE": {
            singular: "Speicherplatz"
          },
          "fr-FR": {
            singular: "Stockage"
          },
          "ja-JP": {
            singular: "ストレージ"
          },
          "ko-KR": {
            singular: "저장 공간"
          },
          "pt-BR": {
            singular: "Armazenamento"
          },
          "zh-CN": {
            singular: "存储"
          }
        }
      }),
      viewer_retention: () => (0, _v30.translate)({
        singular: "Viewer retention",
        dictionary: {
          es: {
            singular: "Retención de espectadores"
          },
          "de-DE": {
            singular: "Betrachterbindung"
          },
          "fr-FR": {
            singular: "Fidélisation des spectateurs"
          },
          "ja-JP": {
            singular: "視聴者維持率"
          },
          "ko-KR": {
            singular: "시청 지속시간"
          },
          "pt-BR": {
            singular: "Retenção de espectadores"
          },
          "zh-CN": {
            singular: "观众留存率"
          }
        }
      }),
      viewer_retention_normalized: () => (0, _v30.translate)({
        singular: "Viewer retention",
        dictionary: {
          es: {
            singular: "Retención de espectadores"
          },
          "de-DE": {
            singular: "Betrachterbindung"
          },
          "fr-FR": {
            singular: "Fidélisation des spectateurs"
          },
          "ja-JP": {
            singular: "視聴者維持率"
          },
          "ko-KR": {
            singular: "시청 지속시간"
          },
          "pt-BR": {
            singular: "Retenção de espectadores"
          },
          "zh-CN": {
            singular: "观众留存率"
          }
        }
      })
    },
    _v131 = {
      video: () => (0, _v30.translate)({
        singular: "Video",
        dictionary: {
          "fr-FR": {
            singular: "Vidéo"
          },
          "ja-JP": {
            singular: "動画"
          },
          "ko-KR": {
            singular: "동영상"
          },
          "pt-BR": {
            singular: "Vídeo"
          },
          "zh-CN": {
            singular: "视频"
          }
        }
      }),
      member: () => (0, _v30.translate)({
        singular: "Team member",
        dictionary: {
          es: {
            singular: "Miembro del equipo"
          },
          "de-DE": {
            singular: "Teammitglied"
          },
          "fr-FR": {
            singular: "Membre de l'équipe"
          },
          "ja-JP": {
            singular: "チームメンバー"
          },
          "ko-KR": {
            singular: "팀 구성원"
          },
          "pt-BR": {
            singular: "Membro da equipe"
          },
          "zh-CN": {
            singular: "团队成员"
          }
        }
      }),
      user_video: () => (0, _v30.translate)({
        singular: "Team member",
        dictionary: {
          es: {
            singular: "Miembro del equipo"
          },
          "de-DE": {
            singular: "Teammitglied"
          },
          "fr-FR": {
            singular: "Membre de l'équipe"
          },
          "ja-JP": {
            singular: "チームメンバー"
          },
          "ko-KR": {
            singular: "팀 구성원"
          },
          "pt-BR": {
            singular: "Membro da equipe"
          },
          "zh-CN": {
            singular: "团队成员"
          }
        }
      }),
      country: () => (0, _v30.translate)({
        singular: "Country",
        dictionary: {
          es: {
            singular: "País"
          },
          "de-DE": {
            singular: "Land"
          },
          "fr-FR": {
            singular: "Pays"
          },
          "ja-JP": {
            singular: "国"
          },
          "ko-KR": {
            singular: "국가"
          },
          "pt-BR": {
            singular: "País"
          },
          "zh-CN": {
            singular: "国家/地区"
          }
        }
      }),
      region: () => (0, _v30.translate)({
        singular: "Region",
        dictionary: {
          es: {
            singular: "Región"
          },
          "fr-FR": {
            singular: "Région"
          },
          "ja-JP": {
            singular: "地域"
          },
          "ko-KR": {
            singular: "지역"
          },
          "pt-BR": {
            singular: "Região"
          },
          "zh-CN": {
            singular: "区域"
          }
        }
      }),
      city: () => (0, _v30.translate)({
        singular: "City",
        dictionary: {
          es: {
            singular: "Ciudad"
          },
          "de-DE": {
            singular: "Stadt"
          },
          "fr-FR": {
            singular: "Ville"
          },
          "ja-JP": {
            singular: "都市"
          },
          "ko-KR": {
            singular: "도시"
          },
          "pt-BR": {
            singular: "Cidade"
          },
          "zh-CN": {
            singular: "城市"
          }
        }
      }),
      device_type: () => (0, _v30.translate)({
        singular: "Device",
        dictionary: {
          es: {
            singular: "Dispositivo"
          },
          "de-DE": {
            singular: "Gerät"
          },
          "fr-FR": {
            singular: "Appareil"
          },
          "ja-JP": {
            singular: "デバイス"
          },
          "ko-KR": {
            singular: "기기"
          },
          "pt-BR": {
            singular: "Dispositivo"
          },
          "zh-CN": {
            singular: "设备"
          }
        }
      }),
      os: () => (0, _v30.translate)({
        singular: "Operating system",
        dictionary: {
          es: {
            singular: "Sistema operativo"
          },
          "de-DE": {
            singular: "Betriebssystem"
          },
          "fr-FR": {
            singular: "Système d'exploitation"
          },
          "ja-JP": {
            singular: "オペレーティングシステム"
          },
          "ko-KR": {
            singular: "운영체제"
          },
          "pt-BR": {
            singular: "Sistema operacional"
          },
          "zh-CN": {
            singular: "操作系统"
          }
        }
      }),
      browser: () => (0, _v30.translate)({
        singular: "Browser",
        dictionary: {
          es: {
            singular: "Navegador"
          },
          "fr-FR": {
            singular: "Navigateur"
          },
          "ja-JP": {
            singular: "ブラウザ"
          },
          "ko-KR": {
            singular: "브라우저"
          },
          "pt-BR": {
            singular: "Navegador"
          },
          "zh-CN": {
            singular: "浏览器"
          }
        }
      }),
      embed_domain: () => (0, _v30.translate)({
        singular: "Source URL",
        dictionary: {
          es: {
            singular: "URL de origen"
          },
          "de-DE": {
            singular: "Quell-URL"
          },
          "fr-FR": {
            singular: "URL source"
          },
          "ja-JP": {
            singular: "ソースURL"
          },
          "ko-KR": {
            singular: "소스 URL"
          },
          "pt-BR": {
            singular: "URL de Origem"
          },
          "zh-CN": {
            singular: "源 URL"
          }
        }
      }),
      embed_domain_path: () => (0, _v30.translate)({
        singular: "Source URL",
        dictionary: {
          es: {
            singular: "URL de origen"
          },
          "de-DE": {
            singular: "Quell-URL"
          },
          "fr-FR": {
            singular: "URL source"
          },
          "ja-JP": {
            singular: "ソースURL"
          },
          "ko-KR": {
            singular: "소스 URL"
          },
          "pt-BR": {
            singular: "URL de Origem"
          },
          "zh-CN": {
            singular: "源 URL"
          }
        }
      }),
      streaming_type: () => (0, _v30.translate)({
        singular: "Streaming type",
        dictionary: {
          es: {
            singular: "Tipo de transmisión"
          },
          "de-DE": {
            singular: "Streamingtyp"
          },
          "fr-FR": {
            singular: "Type de streaming"
          },
          "ja-JP": {
            singular: "ストリーミングタイプ"
          },
          "ko-KR": {
            singular: "스트리밍 유형"
          },
          "pt-BR": {
            singular: "Tipo de transmissão"
          },
          "zh-CN": {
            singular: "直播类型"
          }
        }
      }),
      text_track_language: () => (0, _v30.translate)({
        singular: "Subtitles and captions language",
        dictionary: {
          es: {
            singular: "Idioma de subtítulos y leyendas"
          },
          "de-DE": {
            singular: "Sprache der Untertitel und Bildunterschriften"
          },
          "fr-FR": {
            singular: "Langue des sous-titres et des sous-titres (SME)"
          },
          "ja-JP": {
            singular: "字幕とキャプションの言語"
          },
          "ko-KR": {
            singular: "자막 및 캡션 언어"
          },
          "pt-BR": {
            singular: "Idioma das legendas e closed captions"
          },
          "zh-CN": {
            singular: "字幕和隐藏式字幕语言"
          }
        }
      }),
      text_track_type: () => (0, _v30.translate)({
        singular: "Subtitles and captions type",
        dictionary: {
          es: {
            singular: "Tipo de subtítulos y captions"
          },
          "de-DE": {
            singular: "Typ von Untertiteln und Captions"
          },
          "fr-FR": {
            singular: "Type de sous-titres et légendes"
          },
          "ja-JP": {
            singular: "字幕とキャプションのタイプ"
          },
          "ko-KR": {
            singular: "자막 및 캡션 유형"
          },
          "pt-BR": {
            singular: "Tipo de legendas e legendas ocultas"
          },
          "zh-CN": {
            singular: "字幕与说明文字类型"
          }
        }
      }),
      text_track_provenance: () => (0, _v30.translate)({
        singular: "Subtitles and captions type",
        dictionary: {
          es: {
            singular: "Tipo de subtítulos y captions"
          },
          "de-DE": {
            singular: "Typ von Untertiteln und Captions"
          },
          "fr-FR": {
            singular: "Type de sous-titres et légendes"
          },
          "ja-JP": {
            singular: "字幕とキャプションのタイプ"
          },
          "ko-KR": {
            singular: "자막 및 캡션 유형"
          },
          "pt-BR": {
            singular: "Tipo de legendas e legendas ocultas"
          },
          "zh-CN": {
            singular: "字幕与说明文字类型"
          }
        }
      }),
      audio_track_language: () => (0, _v30.translate)({
        singular: "Audio track language",
        dictionary: {
          es: {
            singular: "Idioma de la pista de audio"
          },
          "de-DE": {
            singular: "Audiosprachspur"
          },
          "fr-FR": {
            singular: "Langue de la piste audio"
          },
          "ja-JP": {
            singular: "オーディオトラックの言語"
          },
          "ko-KR": {
            singular: "오디오 트랙 언어"
          },
          "pt-BR": {
            singular: "Idioma da faixa de áudio"
          },
          "zh-CN": {
            singular: "音轨语言"
          }
        }
      }),
      audio_track_type: () => (0, _v30.translate)({
        singular: "Audio track type",
        dictionary: {
          es: {
            singular: "Tipo de pista de audio"
          },
          "de-DE": {
            singular: "Audiospurtyp"
          },
          "fr-FR": {
            singular: "Type de piste audio"
          },
          "ja-JP": {
            singular: "オーディオトラックのタイプ"
          },
          "ko-KR": {
            singular: "오디오 트랙 유형"
          },
          "pt-BR": {
            singular: "Tipo de faixa de áudio"
          },
          "zh-CN": {
            singular: "音频轨道类型"
          }
        }
      }),
      audio_track_provenance: () => (0, _v30.translate)({
        singular: "Audio track type",
        dictionary: {
          es: {
            singular: "Tipo de pista de audio"
          },
          "de-DE": {
            singular: "Audiospurtyp"
          },
          "fr-FR": {
            singular: "Type de piste audio"
          },
          "ja-JP": {
            singular: "オーディオトラックのタイプ"
          },
          "ko-KR": {
            singular: "오디오 트랙 유형"
          },
          "pt-BR": {
            singular: "Tipo de faixa de áudio"
          },
          "zh-CN": {
            singular: "音频轨道类型"
          }
        }
      }),
      day: () => (0, _v30.translate)({
        singular: "Day",
        dictionary: {
          es: {
            singular: "Día",
            plural: "Días"
          },
          "de-DE": {
            singular: "Tag",
            plural: "Tage"
          },
          "fr-FR": {
            singular: "Jour",
            plural: "Jours"
          },
          "ja-JP": {
            singular: "日",
            plural: "日"
          },
          "ko-KR": {
            singular: "일",
            plural: "일"
          },
          "pt-BR": {
            singular: "Dia",
            plural: "Dias"
          },
          "zh-CN": {
            singular: "天",
            plural: "天"
          }
        }
      }),
      week: () => (0, _v30.translate)({
        singular: "Week",
        dictionary: {
          es: {
            singular: "Semana",
            plural: "Semanas"
          },
          "de-DE": {
            singular: "Woche",
            plural: "Wochen"
          },
          "fr-FR": {
            singular: "Semaine",
            plural: "Semaines"
          },
          "ja-JP": {
            singular: "週",
            plural: "週間"
          },
          "ko-KR": {
            singular: "주",
            plural: "주"
          },
          "pt-BR": {
            singular: "Semana",
            plural: "Semanas"
          },
          "zh-CN": {
            singular: "周",
            plural: "周"
          }
        }
      }),
      month: () => (0, _v30.translate)({
        singular: "Month",
        dictionary: {
          es: {
            singular: "Mes",
            plural: "Meses"
          },
          "de-DE": {
            singular: "Monat",
            plural: "Monate"
          },
          "fr-FR": {
            singular: "Mois",
            plural: "Mois"
          },
          "ja-JP": {
            singular: "か月",
            plural: "か月"
          },
          "ko-KR": {
            singular: "개월",
            plural: "개월"
          },
          "pt-BR": {
            singular: "Mês",
            plural: "Meses"
          },
          "zh-CN": {
            singular: "月",
            plural: "月"
          }
        }
      }),
      year: () => (0, _v30.translate)({
        singular: "Year",
        dictionary: {
          es: {
            singular: "Año",
            plural: "Años"
          },
          "de-DE": {
            singular: "Jahr",
            plural: "Jahre"
          },
          "fr-FR": {
            singular: "An",
            plural: "Ans"
          },
          "ja-JP": {
            singular: "年",
            plural: "年"
          },
          "ko-KR": {
            singular: "년",
            plural: "년"
          },
          "pt-BR": {
            singular: "Ano",
            plural: "Anos"
          },
          "zh-CN": {
            singular: "年",
            plural: "年"
          }
        }
      })
    },
    _v132 = {
      time: () => (0, _v30.translate)({
        singular: "Date",
        dictionary: {
          es: {
            singular: "Fecha"
          },
          "de-DE": {
            singular: "Datum"
          },
          "fr-FR": {
            singular: "Date "
          },
          "ja-JP": {
            singular: "日付"
          },
          "ko-KR": {
            singular: "날짜"
          },
          "pt-BR": {
            singular: "Data"
          },
          "zh-CN": {
            singular: "日期"
          }
        }
      }),
      month: () => (0, _v30.translate)({
        singular: "Month",
        dictionary: {
          es: {
            singular: "Mes",
            plural: "Meses"
          },
          "de-DE": {
            singular: "Monat",
            plural: "Monate"
          },
          "fr-FR": {
            singular: "Mois",
            plural: "Mois"
          },
          "ja-JP": {
            singular: "か月",
            plural: "か月"
          },
          "ko-KR": {
            singular: "개월",
            plural: "개월"
          },
          "pt-BR": {
            singular: "Mês",
            plural: "Meses"
          },
          "zh-CN": {
            singular: "月",
            plural: "月"
          }
        }
      }),
      day: () => (0, _v30.translate)({
        singular: "Day",
        dictionary: {
          es: {
            singular: "Día",
            plural: "Días"
          },
          "de-DE": {
            singular: "Tag",
            plural: "Tage"
          },
          "fr-FR": {
            singular: "Jour",
            plural: "Jours"
          },
          "ja-JP": {
            singular: "日",
            plural: "日"
          },
          "ko-KR": {
            singular: "일",
            plural: "일"
          },
          "pt-BR": {
            singular: "Dia",
            plural: "Dias"
          },
          "zh-CN": {
            singular: "天",
            plural: "天"
          }
        }
      }),
      video: () => (0, _v30.translate)({
        singular: "Video",
        dictionary: {
          "fr-FR": {
            singular: "Vidéo"
          },
          "ja-JP": {
            singular: "動画"
          },
          "ko-KR": {
            singular: "동영상"
          },
          "pt-BR": {
            singular: "Vídeo"
          },
          "zh-CN": {
            singular: "视频"
          }
        }
      }),
      member: () => (0, _v30.translate)({
        singular: "Team member",
        dictionary: {
          es: {
            singular: "Miembro del equipo"
          },
          "de-DE": {
            singular: "Teammitglied"
          },
          "fr-FR": {
            singular: "Membre de l'équipe"
          },
          "ja-JP": {
            singular: "チームメンバー"
          },
          "ko-KR": {
            singular: "팀 구성원"
          },
          "pt-BR": {
            singular: "Membro da equipe"
          },
          "zh-CN": {
            singular: "团队成员"
          }
        }
      }),
      user_video: () => (0, _v30.translate)({
        singular: "Team member",
        dictionary: {
          es: {
            singular: "Miembro del equipo"
          },
          "de-DE": {
            singular: "Teammitglied"
          },
          "fr-FR": {
            singular: "Membre de l'équipe"
          },
          "ja-JP": {
            singular: "チームメンバー"
          },
          "ko-KR": {
            singular: "팀 구성원"
          },
          "pt-BR": {
            singular: "Membro da equipe"
          },
          "zh-CN": {
            singular: "团队成员"
          }
        }
      }),
      country: () => (0, _v30.translate)({
        singular: "Country",
        dictionary: {
          es: {
            singular: "País"
          },
          "de-DE": {
            singular: "Land"
          },
          "fr-FR": {
            singular: "Pays"
          },
          "ja-JP": {
            singular: "国"
          },
          "ko-KR": {
            singular: "국가"
          },
          "pt-BR": {
            singular: "País"
          },
          "zh-CN": {
            singular: "国家/地区"
          }
        }
      }),
      region: () => (0, _v30.translate)({
        singular: "Region",
        dictionary: {
          es: {
            singular: "Región"
          },
          "fr-FR": {
            singular: "Région"
          },
          "ja-JP": {
            singular: "地域"
          },
          "ko-KR": {
            singular: "지역"
          },
          "pt-BR": {
            singular: "Região"
          },
          "zh-CN": {
            singular: "区域"
          }
        }
      }),
      city: () => (0, _v30.translate)({
        singular: "City",
        dictionary: {
          es: {
            singular: "Ciudad"
          },
          "de-DE": {
            singular: "Stadt"
          },
          "fr-FR": {
            singular: "Ville"
          },
          "ja-JP": {
            singular: "都市"
          },
          "ko-KR": {
            singular: "도시"
          },
          "pt-BR": {
            singular: "Cidade"
          },
          "zh-CN": {
            singular: "城市"
          }
        }
      }),
      device_type: () => (0, _v30.translate)({
        singular: "Device",
        dictionary: {
          es: {
            singular: "Dispositivo"
          },
          "de-DE": {
            singular: "Gerät"
          },
          "fr-FR": {
            singular: "Appareil"
          },
          "ja-JP": {
            singular: "デバイス"
          },
          "ko-KR": {
            singular: "기기"
          },
          "pt-BR": {
            singular: "Dispositivo"
          },
          "zh-CN": {
            singular: "设备"
          }
        }
      }),
      os: () => (0, _v30.translate)({
        singular: "Operating system",
        dictionary: {
          es: {
            singular: "Sistema operativo"
          },
          "de-DE": {
            singular: "Betriebssystem"
          },
          "fr-FR": {
            singular: "Système d'exploitation"
          },
          "ja-JP": {
            singular: "オペレーティングシステム"
          },
          "ko-KR": {
            singular: "운영체제"
          },
          "pt-BR": {
            singular: "Sistema operacional"
          },
          "zh-CN": {
            singular: "操作系统"
          }
        }
      }),
      browser: () => (0, _v30.translate)({
        singular: "Browser",
        dictionary: {
          es: {
            singular: "Navegador"
          },
          "fr-FR": {
            singular: "Navigateur"
          },
          "ja-JP": {
            singular: "ブラウザ"
          },
          "ko-KR": {
            singular: "브라우저"
          },
          "pt-BR": {
            singular: "Navegador"
          },
          "zh-CN": {
            singular: "浏览器"
          }
        }
      }),
      embed_domain: () => (0, _v30.translate)({
        singular: "Source URL",
        dictionary: {
          es: {
            singular: "URL de origen"
          },
          "de-DE": {
            singular: "Quell-URL"
          },
          "fr-FR": {
            singular: "URL source"
          },
          "ja-JP": {
            singular: "ソースURL"
          },
          "ko-KR": {
            singular: "소스 URL"
          },
          "pt-BR": {
            singular: "URL de Origem"
          },
          "zh-CN": {
            singular: "源 URL"
          }
        }
      }),
      embed_domain_path: () => (0, _v30.translate)({
        singular: "Source URL",
        dictionary: {
          es: {
            singular: "URL de origen"
          },
          "de-DE": {
            singular: "Quell-URL"
          },
          "fr-FR": {
            singular: "URL source"
          },
          "ja-JP": {
            singular: "ソースURL"
          },
          "ko-KR": {
            singular: "소스 URL"
          },
          "pt-BR": {
            singular: "URL de Origem"
          },
          "zh-CN": {
            singular: "源 URL"
          }
        }
      }),
      streaming_type: () => (0, _v30.translate)({
        singular: "Streaming type",
        dictionary: {
          es: {
            singular: "Tipo de transmisión"
          },
          "de-DE": {
            singular: "Streamingtyp"
          },
          "fr-FR": {
            singular: "Type de streaming"
          },
          "ja-JP": {
            singular: "ストリーミングタイプ"
          },
          "ko-KR": {
            singular: "스트리밍 유형"
          },
          "pt-BR": {
            singular: "Tipo de transmissão"
          },
          "zh-CN": {
            singular: "直播类型"
          }
        }
      }),
      downloads: () => (0, _v30.translate)({
        singular: "Downloads",
        dictionary: {
          es: {
            singular: "Descargas"
          },
          "fr-FR": {
            singular: "Téléchargements"
          },
          "ja-JP": {
            singular: "ダウンロード"
          },
          "ko-KR": {
            singular: "다운로드"
          },
          "zh-CN": {
            singular: "下载"
          }
        }
      }),
      finishes: () => (0, _v30.translate)({
        singular: "Finishes",
        dictionary: {
          es: {
            singular: "Finalizaciones"
          },
          "de-DE": {
            singular: "Abgespielt"
          },
          "fr-FR": {
            singular: "Lectures complètes"
          },
          "ja-JP": {
            singular: "全編鑑賞"
          },
          "ko-KR": {
            singular: "시청 완료"
          },
          "pt-BR": {
            singular: "Reproduções Finalizadas"
          },
          "zh-CN": {
            singular: "完播"
          }
        }
      }),
      live_bandwidth: () => (0, _v30.translate)({
        singular: "Live bandwidth",
        dictionary: {
          es: {
            singular: "Ancho de banda en directo"
          },
          "de-DE": {
            singular: "Live-Bandbreite"
          },
          "fr-FR": {
            singular: "Bande passante en direct"
          },
          "ja-JP": {
            singular: "ライブ帯域幅"
          },
          "ko-KR": {
            singular: "라이브 대역폭"
          },
          "pt-BR": {
            singular: "Largura de banda ao vivo"
          },
          "zh-CN": {
            singular: "实时带宽"
          }
        }
      }),
      video_bandwidth: () => (0, _v30.translate)({
        singular: "Video bandwidth",
        dictionary: {
          es: {
            singular: "Ancho de banda de vídeo"
          },
          "de-DE": {
            singular: "Video-Bandbreite"
          },
          "fr-FR": {
            singular: "Bande passante vidéo"
          },
          "ja-JP": {
            singular: "動画帯域幅"
          },
          "ko-KR": {
            singular: "비디오 대역폭"
          },
          "pt-BR": {
            singular: "Largura de banda de vídeo"
          },
          "zh-CN": {
            singular: "视频带宽"
          }
        }
      }),
      combined_bandwidth: () => (0, _v30.translate)({
        singular: "Combined bandwidth",
        dictionary: {
          es: {
            singular: "Ancho de banda combinado"
          },
          "de-DE": {
            singular: "Kombinierte Bandbreite"
          },
          "fr-FR": {
            singular: "Bande passante combinée"
          },
          "ja-JP": {
            singular: "合計帯域幅"
          },
          "ko-KR": {
            singular: "합산 대역폭"
          },
          "pt-BR": {
            singular: "Largura de banda combinada"
          },
          "zh-CN": {
            singular: "合计带宽"
          }
        }
      }),
      unique_videos: () => (0, _v30.translate)({
        singular: "Videos",
        dictionary: {
          "fr-FR": {
            singular: "Vidéos"
          },
          "ja-JP": {
            singular: "動画"
          },
          "ko-KR": {
            singular: "동영상"
          },
          "pt-BR": {
            singular: "Vídeos"
          },
          "zh-CN": {
            singular: "视频"
          }
        }
      }),
      unique_members: () => (0, _v30.translate)({
        singular: "Team members",
        dictionary: {
          es: {
            singular: "Miembros del equipo"
          },
          "de-DE": {
            singular: "Teammitglieder"
          },
          "fr-FR": {
            singular: "Membres de l'équipe"
          },
          "ja-JP": {
            singular: "チームメンバー"
          },
          "ko-KR": {
            singular: "팀 구성원"
          },
          "pt-BR": {
            singular: "Membros da equipe"
          },
          "zh-CN": {
            singular: "团队成员"
          }
        }
      }),
      unique_viewers: () => (0, _v30.translate)({
        singular: "Viewers",
        dictionary: {
          es: {
            singular: "Espectadores"
          },
          "de-DE": {
            singular: "Zuschauer"
          },
          "fr-FR": {
            singular: "Spectateurs"
          },
          "ja-JP": {
            singular: "視聴者"
          },
          "ko-KR": {
            singular: "뷰어"
          },
          "pt-BR": {
            singular: "Espectadores"
          },
          "zh-CN": {
            singular: "观众"
          }
        }
      }),
      unique_impressions: () => (0, _v30.translate)({
        singular: "Impressions",
        dictionary: {
          es: {
            singular: "Impresiones"
          },
          "de-DE": {
            singular: "Impressionen"
          },
          "fr-FR": {
            singular: "Chargements"
          },
          "ja-JP": {
            singular: "インプレッション"
          },
          "ko-KR": {
            singular: "노출 수"
          },
          "pt-BR": {
            singular: "Impressões"
          },
          "zh-CN": {
            singular: "展示量"
          }
        }
      }),
      drm_licenses_used: () => (0, _v30.translate)({
        singular: "DRM licenses used",
        dictionary: {
          es: {
            singular: "Licencias de DRM utilizadas"
          },
          "de-DE": {
            singular: "DRM-Lizenzen verwendet"
          },
          "fr-FR": {
            singular: "Licences DRM utilisées"
          },
          "ja-JP": {
            singular: "使用済みのDRMライセンス"
          },
          "ko-KR": {
            singular: "사용된 DRM 라이선스"
          },
          "pt-BR": {
            singular: "Licenças DRM usadas"
          },
          "zh-CN": {
            singular: "已使用的 DRM 许可证"
          }
        }
      }),
      third_party_impressions: () => (0, _v30.translate)({
        singular: "Impressions",
        dictionary: {
          es: {
            singular: "Impresiones"
          },
          "de-DE": {
            singular: "Impressionen"
          },
          "fr-FR": {
            singular: "Chargements"
          },
          "ja-JP": {
            singular: "インプレッション"
          },
          "ko-KR": {
            singular: "노출 수"
          },
          "pt-BR": {
            singular: "Impressões"
          },
          "zh-CN": {
            singular: "展示量"
          }
        }
      })
    },
    _v133 = {
      content: () => (0, _v30.translate)({
        singular: "Videos",
        dictionary: {
          "fr-FR": {
            singular: "Vidéos"
          },
          "ja-JP": {
            singular: "動画"
          },
          "ko-KR": {
            singular: "동영상"
          },
          "pt-BR": {
            singular: "Vídeos"
          },
          "zh-CN": {
            singular: "视频"
          }
        }
      }),
      country: () => (0, _v30.translate)({
        singular: "Countries",
        dictionary: {
          es: {
            singular: "Países"
          },
          "de-DE": {
            singular: "Länder"
          },
          "fr-FR": {
            singular: "Pays"
          },
          "ja-JP": {
            singular: "国"
          },
          "ko-KR": {
            singular: "국가"
          },
          "pt-BR": {
            singular: "Países"
          },
          "zh-CN": {
            singular: "国家/地区"
          }
        }
      }),
      region: () => (0, _v30.translate)({
        singular: "Regions",
        dictionary: {
          es: {
            singular: "Regiones"
          },
          "de-DE": {
            singular: "Regionen"
          },
          "fr-FR": {
            singular: "Régions"
          },
          "ja-JP": {
            singular: "地域"
          },
          "ko-KR": {
            singular: "지역"
          },
          "pt-BR": {
            singular: "Regiões"
          },
          "zh-CN": {
            singular: "区域"
          }
        }
      }),
      device_type: () => (0, _v30.translate)({
        singular: "Devices",
        dictionary: {
          es: {
            singular: "Dispositivos"
          },
          "de-DE": {
            singular: "Geräte"
          },
          "fr-FR": {
            singular: "Appareils"
          },
          "ja-JP": {
            singular: "デバイス"
          },
          "ko-KR": {
            singular: "기기"
          },
          "pt-BR": {
            singular: "Dispositivos"
          },
          "zh-CN": {
            singular: "设备"
          }
        }
      }),
      embed_domain: () => (0, _v30.translate)({
        singular: "Source URLs",
        dictionary: {
          es: {
            singular: "URLs de origen"
          },
          "de-DE": {
            singular: "Quell-URLs"
          },
          "fr-FR": {
            singular: "URLs source"
          },
          "ja-JP": {
            singular: "ソースURL"
          },
          "ko-KR": {
            singular: "소스 URL"
          },
          "pt-BR": {
            singular: "URLs de origem"
          },
          "zh-CN": {
            singular: "来源 URL"
          }
        }
      }),
      streaming_type: () => (0, _v30.translate)({
        singular: "Streaming types",
        dictionary: {
          es: {
            singular: "Tipos de streaming"
          },
          "de-DE": {
            singular: "Streaming-Typen"
          },
          "fr-FR": {
            singular: "Types de streaming"
          },
          "ja-JP": {
            singular: "ストリーミングの種類"
          },
          "ko-KR": {
            singular: "스트리밍 유형"
          },
          "pt-BR": {
            singular: "Tipos de streaming"
          },
          "zh-CN": {
            singular: "流媒体类型"
          }
        }
      }),
      text_track_language: () => (0, _v30.translate)({
        singular: "Subtitles and captions languages",
        dictionary: {
          es: {
            singular: "Idiomas de subtítulos y captions"
          },
          "de-DE": {
            singular: "Sprachen für Untertitel und Captions"
          },
          "fr-FR": {
            singular: "Langues des sous-titres et légendes"
          },
          "ja-JP": {
            singular: "字幕とキャプションの言語"
          },
          "ko-KR": {
            singular: "자막 및 캡션 언어"
          },
          "pt-BR": {
            singular: "Idiomas de legendas e legendas ocultas"
          },
          "zh-CN": {
            singular: "字幕与说明文字语言"
          }
        }
      }),
      text_track_type: () => (0, _v30.translate)({
        singular: "Subtitles and captions types",
        dictionary: {
          es: {
            singular: "Tipos de subtítulos y captions"
          },
          "de-DE": {
            singular: "Arten von Untertiteln und Captions"
          },
          "fr-FR": {
            singular: "Types de sous-titres et légendes"
          },
          "ja-JP": {
            singular: "字幕とキャプションのタイプ"
          },
          "ko-KR": {
            singular: "자막 및 캡션 유형"
          },
          "pt-BR": {
            singular: "Tipos de legendas e legendas ocultas"
          },
          "zh-CN": {
            singular: "字幕与说明文字类型"
          }
        }
      }),
      text_track_provenance: () => (0, _v30.translate)({
        singular: "Subtitles and captions types",
        dictionary: {
          es: {
            singular: "Tipos de subtítulos y captions"
          },
          "de-DE": {
            singular: "Arten von Untertiteln und Captions"
          },
          "fr-FR": {
            singular: "Types de sous-titres et légendes"
          },
          "ja-JP": {
            singular: "字幕とキャプションのタイプ"
          },
          "ko-KR": {
            singular: "자막 및 캡션 유형"
          },
          "pt-BR": {
            singular: "Tipos de legendas e legendas ocultas"
          },
          "zh-CN": {
            singular: "字幕与说明文字类型"
          }
        }
      }),
      audio_track_language: () => (0, _v30.translate)({
        singular: "Audio track languages",
        dictionary: {
          es: {
            singular: "Idiomas de pista de audio"
          },
          "de-DE": {
            singular: "Audio‑Sprachen"
          },
          "fr-FR": {
            singular: "Langues des pistes audio"
          },
          "ja-JP": {
            singular: "音声トラックの言語"
          },
          "ko-KR": {
            singular: "오디오 트랙 언어"
          },
          "pt-BR": {
            singular: "Idiomas das faixas de áudio"
          },
          "zh-CN": {
            singular: "音轨语言"
          }
        }
      }),
      audio_track_type: () => (0, _v30.translate)({
        singular: "Audio track types",
        dictionary: {
          es: {
            singular: "Tipos de pista de audio"
          },
          "de-DE": {
            singular: "Audiospurtypen"
          },
          "fr-FR": {
            singular: "Types de piste audio"
          },
          "ja-JP": {
            singular: "音声トラックの種類"
          },
          "ko-KR": {
            singular: "오디오 트랙 유형"
          },
          "pt-BR": {
            singular: "Tipos de faixa de áudio"
          },
          "zh-CN": {
            singular: "音轨类型"
          }
        }
      }),
      audio_track_provenance: () => (0, _v30.translate)({
        singular: "Audio track types",
        dictionary: {
          es: {
            singular: "Tipos de pista de audio"
          },
          "de-DE": {
            singular: "Audiospurtypen"
          },
          "fr-FR": {
            singular: "Types de piste audio"
          },
          "ja-JP": {
            singular: "音声トラックの種類"
          },
          "ko-KR": {
            singular: "오디오 트랙 유형"
          },
          "pt-BR": {
            singular: "Tipos de faixa de áudio"
          },
          "zh-CN": {
            singular: "音轨类型"
          }
        }
      })
    },
    _v134 = {
      hour: () => (0, _v30.translate)({
        singular: "Hourly",
        dictionary: {
          es: {
            singular: "Por hora"
          },
          "de-DE": {
            singular: "Stündlich"
          },
          "fr-FR": {
            singular: "Horaire"
          },
          "ja-JP": {
            singular: "時間別"
          },
          "ko-KR": {
            singular: "시간별"
          },
          "pt-BR": {
            singular: "Por hora"
          },
          "zh-CN": {
            singular: "每小时"
          }
        }
      }),
      day: () => (0, _v30.translate)({
        singular: "Daily",
        dictionary: {
          es: {
            singular: "Todos los días"
          },
          "de-DE": {
            singular: "Jeden Tag"
          },
          "fr-FR": {
            singular: "Quotidiennement"
          },
          "ja-JP": {
            singular: "デイリー"
          },
          "ko-KR": {
            singular: "일일"
          },
          "pt-BR": {
            singular: "Diariamente"
          },
          "zh-CN": {
            singular: "每日"
          }
        }
      }),
      week: () => (0, _v30.translate)({
        singular: "Weekly",
        dictionary: {
          es: {
            singular: "Semanal"
          },
          "de-DE": {
            singular: "Wöchentlich"
          },
          "fr-FR": {
            singular: "Hebdomadaire"
          },
          "ja-JP": {
            singular: "週間"
          },
          "ko-KR": {
            singular: "주간"
          },
          "pt-BR": {
            singular: "Por semana"
          },
          "zh-CN": {
            singular: "每周"
          }
        }
      }),
      month: () => (0, _v30.translate)({
        singular: "Monthly",
        dictionary: {
          es: {
            singular: "Mensual"
          },
          "de-DE": {
            singular: "Monatlich"
          },
          "fr-FR": {
            singular: "Mensuel"
          },
          "ja-JP": {
            singular: "月額"
          },
          "ko-KR": {
            singular: "월간"
          },
          "pt-BR": {
            singular: "Mensal"
          },
          "zh-CN": {
            singular: "按月"
          }
        }
      }),
      year: () => (0, _v30.translate)({
        singular: "Yearly",
        dictionary: {
          es: {
            singular: "Anual"
          },
          "de-DE": {
            singular: "Jährlich"
          },
          "fr-FR": {
            singular: "Annuel"
          },
          "ja-JP": {
            singular: "年額"
          },
          "ko-KR": {
            singular: "연간"
          },
          "pt-BR": {
            singular: "Anual"
          },
          "zh-CN": {
            singular: "按年"
          }
        }
      })
    },
    _v135 = {
      mobile: () => (0, _v30.translate)({
        singular: "Mobile",
        dictionary: {
          es: {
            singular: "Móvil"
          },
          "de-DE": {
            singular: "Mobil"
          },
          "ja-JP": {
            singular: "モバイル"
          },
          "ko-KR": {
            singular: "모바일"
          },
          "pt-BR": {
            singular: "Dispositivos Móveis"
          },
          "zh-CN": {
            singular: "移动端"
          }
        }
      }),
      tablet: () => (0, _v30.translate)({
        singular: "Tablet",
        dictionary: {
          es: {
            singular: "Tableta"
          },
          "fr-FR": {
            singular: "Tablette"
          },
          "ja-JP": {
            singular: "タブレット"
          },
          "ko-KR": {
            singular: "태블릿"
          },
          "zh-CN": {
            singular: "平板电脑"
          }
        }
      }),
      desktop: () => (0, _v30.translate)({
        singular: "Desktop",
        dictionary: {
          es: {
            singular: "Escritorio"
          },
          "ja-JP": {
            singular: "デスクトップ"
          },
          "ko-KR": {
            singular: "데스크탑"
          },
          "pt-BR": {
            singular: "Computadores de mesa"
          },
          "zh-CN": {
            singular: "桌面"
          }
        }
      }),
      tv: () => (0, _v30.translate)("TV"),
      console: () => (0, _v30.translate)({
        singular: "Game console",
        dictionary: {
          es: {
            singular: "Consola de videojuegos"
          },
          "de-DE": {
            singular: "Spielkonsole"
          },
          "fr-FR": {
            singular: "Console de jeux"
          },
          "ja-JP": {
            singular: "ゲーム機"
          },
          "ko-KR": {
            singular: "게임 콘솔"
          },
          "pt-BR": {
            singular: "Console de jogos"
          },
          "zh-CN": {
            singular: "游戏主机"
          }
        }
      }),
      wearable: () => (0, _v30.translate)({
        singular: "Wearable",
        dictionary: {
          "ja-JP": {
            singular: "ウェアラブル"
          },
          "ko-KR": {
            singular: "웨어러블"
          },
          "pt-BR": {
            singular: "Dispositivo vestível"
          },
          "zh-CN": {
            singular: "可穿戴设备"
          }
        }
      }),
      unknown: () => (0, _v30.translate)({
        singular: "Unknown",
        dictionary: {
          es: {
            singular: "Desconocido"
          },
          "de-DE": {
            singular: "Unbekannt"
          },
          "fr-FR": {
            singular: "Inconnu"
          },
          "ja-JP": {
            singular: "不明"
          },
          "ko-KR": {
            singular: "알 수 없음"
          },
          "pt-BR": {
            singular: "Desconhecido"
          },
          "zh-CN": {
            singular: "未知"
          }
        }
      }),
      live: () => (0, _v30.translate)({
        singular: "Live",
        dictionary: {
          es: {
            singular: "En vivo"
          },
          "fr-FR": {
            singular: "Direct"
          },
          "ja-JP": {
            singular: "ライブ"
          },
          "ko-KR": {
            singular: "라이브"
          },
          "pt-BR": {
            singular: "Ao vivo"
          },
          "zh-CN": {
            singular: "直播"
          }
        }
      }),
      on_demand: () => (0, _v30.translate)({
        singular: "On demand",
        dictionary: {
          es: {
            singular: "Bajo demanda"
          },
          "de-DE": {
            singular: "Auf Abruf"
          },
          "fr-FR": {
            singular: "À la demande"
          },
          "ja-JP": {
            singular: "オンデマンド"
          },
          "ko-KR": {
            singular: "주문형"
          },
          "pt-BR": {
            singular: "Sob demanda"
          },
          "zh-CN": {
            singular: "点播"
          }
        }
      }),
      off: () => (0, _v30.translate)({
        singular: "Off",
        dictionary: {
          es: {
            singular: "Desactivado"
          },
          "de-DE": {
            singular: "Aus"
          },
          "fr-FR": {
            singular: "Désactivé"
          },
          "ja-JP": {
            singular: "オフ"
          },
          "ko-KR": {
            singular: "꺼짐"
          },
          "pt-BR": {
            singular: "Desligado"
          },
          "zh-CN": {
            singular: "关闭"
          }
        }
      })
    },
    _v136 = (_v0, _v1) => (_v0[_v1] ?? (() => _v1.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/_/g, " ").replace(/^./, _v0 => _v0.toUpperCase())))(),
    _v137 = _v0 => _v129.has(_v0),
    _v138 = _v0 => "total" !== _v0 && "all-time" !== _v0 && !_v137(_v0),
    _v139 = ["time", "day", "week", "month", "year"],
    _v140 = (0, _v30.translate)({
      singular: "Query details",
      dictionary: {
        es: {
          singular: "Detalles de la consulta"
        },
        "de-DE": {
          singular: "Details zur Abfrage"
        },
        "fr-FR": {
          singular: "Détails de la requête"
        },
        "ja-JP": {
          singular: "クエリの詳細"
        },
        "ko-KR": {
          singular: "쿼리 세부정보"
        },
        "pt-BR": {
          singular: "Detalhes da consulta"
        },
        "zh-CN": {
          singular: "查询详情"
        }
      }
    }),
    _v141 = {
      metric: (0, _v30.translate)({
        singular: "Metric",
        dictionary: {
          es: {
            singular: "Métrica"
          },
          "de-DE": {
            singular: "Metrik"
          },
          "fr-FR": {
            singular: "Métrique"
          },
          "ja-JP": {
            singular: "指標"
          },
          "ko-KR": {
            singular: "지표"
          },
          "pt-BR": {
            singular: "Métrica"
          },
          "zh-CN": {
            singular: "指标"
          }
        }
      }),
      breakdown: (0, _v30.translate)({
        singular: "Breakdown",
        dictionary: {
          es: {
            singular: "Desglose"
          },
          "de-DE": {
            singular: "Aufschlüsselung"
          },
          "fr-FR": {
            singular: "Répartition"
          },
          "ja-JP": {
            singular: "内訳"
          },
          "ko-KR": {
            singular: "세부 항목"
          },
          "pt-BR": {
            singular: "Detalhamento"
          },
          "zh-CN": {
            singular: "细分"
          }
        }
      }),
      filter: (0, _v30.translate)({
        singular: "Filter",
        dictionary: {
          es: {
            singular: "Filtro"
          },
          "fr-FR": {
            singular: "Filtre"
          },
          "ja-JP": {
            singular: "フィルター"
          },
          "ko-KR": {
            singular: "필터"
          },
          "pt-BR": {
            singular: "Filtro"
          },
          "zh-CN": {
            singular: "筛选"
          }
        }
      }),
      time_grouping: (0, _v30.translate)({
        singular: "Time grouping",
        dictionary: {
          es: {
            singular: "Agrupación temporal"
          },
          "de-DE": {
            singular: "Zeitgruppierung"
          },
          "fr-FR": {
            singular: "Regroupement temporel"
          },
          "ja-JP": {
            singular: "時間のグループ化"
          },
          "ko-KR": {
            singular: "시간 그룹화"
          },
          "pt-BR": {
            singular: "Agrupamento de tempo"
          },
          "zh-CN": {
            singular: "时间分组"
          }
        }
      }),
      sort: (0, _v30.translate)({
        singular: "Sort",
        dictionary: {
          es: {
            singular: "Organizar por"
          },
          "de-DE": {
            singular: "Sortieren"
          },
          "fr-FR": {
            singular: "Trier"
          },
          "ja-JP": {
            singular: "並べ替え："
          },
          "ko-KR": {
            singular: "정렬"
          },
          "pt-BR": {
            singular: "Classificar por:"
          },
          "zh-CN": {
            singular: "排序"
          }
        }
      })
    },
    _v142 = ({
      block: _v0
    }) => (0, _v3.jsx)(_v125.Tooltip, {
      label: _v141[_v0.kind],
      children: (0, _v3.jsx)(_v128.Tag, {
        size: "md",
        children: (0, _v3.jsx)(_v128.TagLabel, {
          children: _v0.label
        })
      })
    }),
    _v143 = ({
      spec: _v0
    }) => {
      let _v1 = (0, _v4.useMemo)(() => {
        var _v0;
        let _v1, _v2, _v3, _v4, _v5;
        return _v1 = [], (_v2 = (_v0 = _v0).metrics.map(_v0 => _v136(_v130, _v0))).length > 0 && _v1.push({
          kind: "metric",
          label: (0, _v30.translate)({
            singular: "Metric: {values}",
            replacements: {
              values: _v2.join(", ")
            },
            dictionary: {
              es: {
                singular: "Métrica: {values}"
              },
              "de-DE": {
                singular: "Metrik: {values}"
              },
              "fr-FR": {
                singular: "Métrique\n: {values}"
              },
              "ja-JP": {
                singular: "指標: {values}"
              },
              "ko-KR": {
                singular: "지표: {values}"
              },
              "pt-BR": {
                singular: "Métrica: {values}"
              },
              "zh-CN": {
                singular: "指标：{values}"
              }
            }
          }),
          values: _v2
        }), (_v3 = _v0.dimensions.filter(_v138).map(_v0 => _v136(_v131, _v0))).length > 0 && _v1.push({
          kind: "breakdown",
          label: (0, _v30.translate)({
            singular: "Grouped by {values}",
            replacements: {
              values: _v3.join(", ")
            },
            dictionary: {
              es: {
                singular: "Agrupado por {values}"
              },
              "de-DE": {
                singular: "Gruppiert nach {values}"
              },
              "fr-FR": {
                singular: "Regroupés par {values}"
              },
              "ja-JP": {
                singular: "{values}別にグループ化"
              },
              "ko-KR": {
                singular: "{values}별로 그룹화됨"
              },
              "pt-BR": {
                singular: "Agrupado por {values}"
              },
              "zh-CN": {
                singular: "按 {values} 分组"
              }
            }
          }),
          values: _v3
        }), null !== (_v4 = (_v0 => {
          if (null !== _v0.timeInterval && _v0.timeInterval in _v134) return _v136(_v134, _v0.timeInterval);
          let _v1 = _v0.dimensions.find(_v137);
          return void 0 !== _v1 ? _v136(_v134, _v1) : null;
        })(_v0)) && _v1.push({
          kind: "time_grouping",
          label: _v4,
          values: [_v4]
        }), _v1.push(..._v0.filters.filter(_v0 => _v0.values.length > 0).map(_v0 => {
          let _v1 = _v136(_v133, _v0.field),
            _v2 = "content" === _v0.field ? _v0.values : _v0.values.map(_v0 => _v136(_v135, _v0));
          return {
            kind: "filter",
            label: (0, _v30.translate)({
              singular: "{field}: {values}",
              replacements: {
                field: _v1,
                values: _v2.join(", ")
              },
              dictionary: {
                "fr-FR": {
                  singular: "{field}\x1f\x1f\x1f\x1f: {values}"
                },
                "zh-CN": {
                  singular: "{field}：{values}"
                }
              }
            }),
            values: _v2
          };
        })), null !== (_v5 = (_v0 => {
          if (null === _v0.sort || "default" === _v0.sort || _v139.includes(_v0.sort)) return null;
          let _v1 = _v136(_v132, _v0.sort);
          return {
            kind: "sort",
            label: "desc" === _v0.direction ? (0, _v30.translate)({
              singular: "Sorted by {value}, highest first",
              replacements: {
                value: _v1
              },
              dictionary: {
                es: {
                  singular: "Ordenado por {value}, de mayor a menor"
                },
                "de-DE": {
                  singular: "Sortiert nach {value}, absteigend"
                },
                "fr-FR": {
                  singular: "Trié par {value}, du plus élevé au plus faible"
                },
                "ja-JP": {
                  singular: "{value}で並べ替え（高い順）"
                },
                "ko-KR": {
                  singular: "{value}별로 정렬됨(높은 값 우선)"
                },
                "pt-BR": {
                  singular: "Ordenado por {value}, do maior para o menor"
                },
                "zh-CN": {
                  singular: "按 {value} 排序，最高优先"
                }
              }
            }) : (0, _v30.translate)({
              singular: "Sorted by {value}, lowest first",
              replacements: {
                value: _v1
              },
              dictionary: {
                es: {
                  singular: "Ordenado por {value}, de menor a mayor"
                },
                "de-DE": {
                  singular: "Sortiert nach {value}, aufsteigend"
                },
                "fr-FR": {
                  singular: "Trié par {value}, du plus faible au plus élevé"
                },
                "ja-JP": {
                  singular: "{value}で並べ替え（低い順）"
                },
                "ko-KR": {
                  singular: "{value}별로 정렬됨(낮은 값 우선)"
                },
                "pt-BR": {
                  singular: "Ordenado por {value}, do menor para o maior"
                },
                "zh-CN": {
                  singular: "按 {value} 排序，最低优先"
                }
              }
            }),
            values: [_v1]
          };
        })(_v0)) && _v1.push(_v5), _v1;
      }, [_v0]);
      return 0 === _v1.length ? null : (0, _v3.jsx)(_v6.Flex, {
        wrap: "wrap",
        gap: "4px",
        role: "group",
        "aria-label": _v140,
        children: _v1.map(_v0 => (0, _v3.jsx)(_v142, {
          block: _v0
        }, _v0.label))
      });
    };
  var _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0),
    _v148 = _v0.i(0),
    _v149 = _v0.i(0),
    _v150 = _v0.i(0),
    _v151 = _v0.i(0),
    _v152 = _v0.i(0),
    _v153 = _v0.i(0);
  let _v154 = "label",
    _v155 = ["var(--vimeo-colors-vimeoBlue-600)", "var(--vimeo-colors-vimeoBlue-400)", "var(--vimeo-colors-vimeoBlue-200)", "var(--vimeo-colors-vimeoBlue-300)", "var(--vimeo-colors-vimeoBlue-500)", "var(--vimeo-colors-vimeoBlue-700)", "var(--vimeo-colors-vimeoBlue-100)", "var(--vimeo-colors-vimeoBlue-800)"],
    _v156 = _v0 => _v155[_v0 % _v155.length],
    _v157 = () => (0, _v4.useContext)(_v28.ViewerContext)?.locale ?? "en",
    _v158 = _v0 => Object.keys(_v0.rows[0]?.values ?? {}),
    _v159 = _v0 => _v0.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/_/g, " ").replace(/^./, _v0 => _v0.toUpperCase()),
    _v160 = (_v0, _v1) => new Intl.NumberFormat(_v1, {
      notation: "compact",
      maximumFractionDigits: 1
    }).format(_v0),
    _v161 = (_v0, _v1) => new Intl.NumberFormat(_v1, {
      maximumFractionDigits: 2
    }).format(_v0),
    _v162 = (_v0, _v1) => {
      let _v2 = new Date(_v0);
      return _v0.includes("T") && !Number.isNaN(_v2.getTime()) ? _v2.toLocaleDateString(_v1, {
        month: "short",
        day: "numeric"
      }) : _v0;
    },
    _v163 = _v0 => _v0.rows.map(_v0 => ({
      [_v154]: _v0.label ?? "",
      ..._v0.values
    })),
    _v164 = ({
      label: _v0,
      items: _v1
    }) => {
      let _v2 = (0, _v152.useColorModeValue)("gray.200", "gray.600");
      return (0, _v3.jsxs)(_v5.Box, {
        padding: "0.5rem 0.75rem",
        boxSizing: "border-box",
        width: "18rem",
        border: "none",
        borderRadius: "0.5rem",
        backgroundColor: _v2,
        backdropFilter: "blur(1.25rem)",
        textAlign: "left",
        children: [null != _v0 && (0, _v3.jsx)(_v6.Flex, {
          margin: "0.7rem 0",
          lineHeight: "0.9rem",
          flexDirection: "row",
          children: (0, _v3.jsx)(_v5.Box, {
            as: "label",
            textTransform: "capitalize",
            fontSize: "0.8rem",
            marginBottom: "0.25rem",
            color: "text-primary",
            fontWeight: "bold",
            width: "75%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            children: _v0
          })
        }), _v1.map(_v0 => (0, _v3.jsxs)(_v6.Flex, {
          margin: "0.7rem 0",
          lineHeight: "0.9rem",
          flexDirection: "row",
          justifyContent: "space-between",
          children: [(0, _v3.jsx)(_v153.CircleShapeFilled, {
            boxSize: "0.5rem",
            position: "relative",
            top: "0.156rem",
            marginRight: "0.5rem",
            color: _v0.color
          }), (0, _v3.jsx)(_v5.Box, {
            as: "label",
            textTransform: "capitalize",
            fontSize: "0.8rem",
            marginBottom: "0.25rem",
            color: _v0.color,
            fontWeight: "normal",
            width: "75%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            children: _v0.name
          }), (0, _v3.jsx)(_v5.Box, {
            as: "span",
            width: "25%",
            textAlign: "right",
            display: "inline-block",
            color: "text-primary",
            fontSize: "0.8rem",
            fontWeight: "normal",
            children: _v0.value
          })]
        }, _v0.id))]
      });
    },
    _v165 = ({
      active: _v0,
      label: _v1,
      payload: _v2,
      labelFormatter: _v3
    }) => {
      let _v4 = _v157();
      if (!0 !== _v0 || void 0 === _v2 || 0 === _v2.length) return null;
      let _v5 = null == _v1 ? null : void 0 !== _v3 ? _v3(String(_v1)) : String(_v1),
        _v6 = _v2.map(_v0 => {
          let _v1 = "number" == typeof _v0.value ? _v0.value : Number(_v0.value ?? 0);
          return {
            id: String(_v0.dataKey ?? _v0.name ?? ""),
            color: _v0.color ?? _v0.payload?.fill ?? "",
            name: _v0.name ?? _v159(String(_v0.dataKey ?? "")),
            value: _v161(_v1, _v4)
          };
        });
      return (0, _v3.jsx)(_v164, {
        label: _v5,
        items: _v6
      });
    },
    _v166 = (_v0, _v1) => ({
      fill: _v0,
      fontSize: _v1
    }),
    _v167 = ({
      data: _v0
    }) => {
      let _v1 = (0, _v8.useToken)("semanticTokens", "colors.stroke"),
        _v2 = (0, _v8.useToken)("semanticTokens", "colors.text-tertiary"),
        _v3 = (0, _v8.useToken)("fontSizes", "body-xs"),
        _v4 = (0, _v8.useToken)("fontSizes", "body-sm"),
        _v5 = _v157(),
        _v6 = (0, _v4.useMemo)(() => _v158(_v0), [_v0]),
        _v7 = (0, _v4.useMemo)(() => {
          let _v0 = _v0.rows.length > 20 ? _v0.rows.slice(0, 20) : _v0.rows;
          return _v163({
            ..._v0,
            rows: _v0
          });
        }, [_v0]);
      return (0, _v3.jsx)(_v148.ResponsiveContainer, {
        width: "100%",
        height: "100%",
        children: (0, _v3.jsxs)(_v145.BarChart, {
          data: _v7,
          layout: "vertical",
          margin: {
            left: 8,
            right: 16
          },
          children: [(0, _v3.jsx)(_v146.CartesianGrid, {
            horizontal: !1,
            stroke: _v1
          }), (0, _v3.jsx)(_v150.XAxis, {
            type: "number",
            axisLine: {
              stroke: "var(--vimeo-colors-stroke)"
            },
            tickLine: !1,
            tick: _v166(_v2, _v3),
            tickFormatter: _v0 => _v160(_v0, _v5)
          }), (0, _v3.jsx)(_v151.YAxis, {
            type: "category",
            dataKey: _v154,
            axisLine: !1,
            tickLine: !1,
            width: 140,
            tick: _v166(_v2, _v3)
          }), (0, _v3.jsx)(_v149.Tooltip, {
            cursor: !1,
            content: (0, _v3.jsx)(_v165, {})
          }), _v6.length > 1 && (0, _v3.jsx)(_v147.Legend, {
            wrapperStyle: {
              fontSize: _v4,
              color: _v2
            }
          }), _v6.map((_v0, _v1) => (0, _v3.jsx)(_v144.Bar, {
            dataKey: _v0,
            name: _v159(_v0),
            fill: _v156(_v1)
          }, _v0))]
        })
      });
    };
  var _v168 = _v0.i(0),
    _v169 = _v0.i(0),
    _v170 = _v0.i(0),
    _v171 = _v0.i(0),
    _v172 = _v0.i(0),
    _v173 = _v0.i(0),
    _v174 = _v0.i(0);
  let _v175 = ({
    data: _v0
  }) => {
    let _v1 = _v157(),
      _v2 = (0, _v4.useMemo)(() => _v158(_v0), [_v0]),
      _v3 = (0, _v4.useMemo)(() => {
        let _v0 = (0, _v30.translate)({
            singular: "Time",
            dictionary: {
              es: {
                singular: "Hora"
              },
              "de-DE": {
                singular: "Uhrzeit"
              },
              "fr-FR": {
                singular: "Heure"
              },
              "ja-JP": {
                singular: "時間"
              },
              "ko-KR": {
                singular: "시간"
              },
              "pt-BR": {
                singular: "Hora"
              },
              "zh-CN": {
                singular: "时间"
              }
            }
          }),
          _v1 = (0, _v30.translate)({
            singular: "Label",
            dictionary: {
              es: {
                singular: "Etiqueta"
              },
              "de-DE": {
                singular: "Beschriftung"
              },
              "fr-FR": {
                singular: "Libellé"
              },
              "ja-JP": {
                singular: "ラベル"
              },
              "ko-KR": {
                singular: "레이블"
              },
              "pt-BR": {
                singular: "Rótulo"
              },
              "zh-CN": {
                singular: "标签"
              }
            }
          }),
          _v2 = _v0.rows[0]?.labels.length ?? 0,
          _v3 = "dimension" !== _v0.labelKind;
        return Array.from({
          length: _v2
        }, (_v0, _v1) => {
          if (0 === _v1 && _v3) return {
            id: "label-kind",
            label: "time" === _v0.labelKind ? _v0 : _v1
          };
          let _v2 = _v0.dimensions[_v1 - !!_v3];
          return void 0 === _v2 ? {
            id: `label-${_v1}`,
            label: _v1
          } : {
            id: _v2,
            label: _v159(_v2)
          };
        });
      }, [_v0]);
    return (0, _v3.jsx)(_v5.Box, {
      height: "100%",
      border: "1px solid var(--vimeo-colors-stroke)",
      borderRadius: "md",
      overflow: "hidden",
      children: (0, _v3.jsx)(_v169.TableContainer, {
        height: "100%",
        overflowY: "auto",
        children: (0, _v3.jsxs)(_v168.Table, {
          size: "sm",
          variant: "unstyled",
          sx: {
            padding: 0
          },
          children: [(0, _v3.jsx)(_v173.Thead, {
            position: "sticky",
            top: 0,
            zIndex: 1,
            sx: {
              "& > tr": {
                bg: "fill-component"
              },
              "& > tr > th": {
                bg: "fill-component",
                color: "text-secondary",
                px: "2",
                py: "2",
                height: "2.5rem",
                borderBottom: "none",
                whiteSpace: "wrap",
                overflowWrap: "anywhere"
              }
            },
            children: (0, _v3.jsxs)(_v174.Tr, {
              children: [_v3.map(_v0 => (0, _v3.jsx)(_v172.Th, {
                children: _v0.label
              }, _v0.id)), _v2.map(_v0 => (0, _v3.jsx)(_v172.Th, {
                isNumeric: !0,
                children: _v159(_v0)
              }, _v0))]
            })
          }), (0, _v3.jsx)(_v170.Tbody, {
            children: _v0.rows.map(_v0 => {
              let _v1 = JSON.stringify([_v0.labels, _v0.values]);
              return (0, _v3.jsxs)(_v174.Tr, {
                sx: {
                  "& > td": {
                    borderBottom: "1px solid var(--vimeo-colors-stroke)"
                  }
                },
                children: [_v3.map((_v0, _v1) => (0, _v3.jsx)(_v171.Td, {
                  px: "2",
                  py: "2",
                  children: (0, _v3.jsx)(_v46.Text, {
                    textStyle: "body-md",
                    color: "text-secondary",
                    children: _v0.labels[_v1] ?? ""
                  })
                }, `${_v1}-${_v0.id}`)), _v2.map(_v0 => (0, _v3.jsx)(_v171.Td, {
                  isNumeric: !0,
                  px: "2",
                  py: "2",
                  children: (0, _v3.jsx)(_v46.Text, {
                    textStyle: "body-md",
                    color: "text-secondary",
                    children: _v161(_v0.values[_v0] ?? 0, _v1)
                  })
                }, _v0))]
              }, _v1);
            })
          })]
        })
      })
    });
  };
  var _v176 = _v0.i(0),
    _v177 = _v0.i(0),
    _v178 = _v0.i(0),
    _v179 = _v0.i(0);
  let _v180 = ({
      active: _v0,
      payload: _v1,
      metric: _v2
    }) => {
      let _v3 = _v157(),
        _v4 = _v1?.[0];
      if (!0 !== _v0 || void 0 === _v4) return null;
      let _v5 = _v4.value ?? 0,
        _v6 = _v4.color ?? ((0, _v56.isRecord)(_v4.payload) && "string" == typeof _v4.payload.fill ? _v4.payload.fill : "");
      return (0, _v3.jsx)(_v164, {
        label: _v4.name,
        items: [{
          id: _v2,
          color: _v6,
          name: _v159(_v2),
          value: _v161(_v5, _v3)
        }]
      });
    },
    _v181 = ({
      data: _v0
    }) => {
      let _v1 = (0, _v8.useToken)("semanticTokens", "colors.stroke"),
        _v2 = (0, _v8.useToken)("semanticTokens", "colors.text-tertiary"),
        _v3 = (0, _v8.useToken)("fontSizes", "body-xs"),
        _v4 = (0, _v30.translate)({
          singular: "Other",
          dictionary: {
            es: {
              singular: "Otro"
            },
            "de-DE": {
              singular: "Sonstiges"
            },
            "fr-FR": {
              singular: "Autre"
            },
            "ja-JP": {
              singular: "その他"
            },
            "ko-KR": {
              singular: "기타"
            },
            "pt-BR": {
              singular: "Outro"
            },
            "zh-CN": {
              singular: "其他"
            }
          }
        }),
        [_v5] = _v158(_v0),
        _v6 = (0, _v4.useMemo)(() => {
          if (void 0 === _v5) return null;
          let _v0 = [..._v0.rows].sort((_v0, _v1) => (_v1.values[_v5] ?? 0) - (_v0.values[_v5] ?? 0)),
            _v1 = _v0.slice(0, 12),
            _v2 = _v0.slice(12);
          return [..._v1.map((_v0, _v1) => ({
            [_v154]: _v0.label ?? _v4,
            value: _v0.values[_v5] ?? 0,
            fill: _v179.MULTI_LINE_GRAPH_COLORS[_v1 % _v179.MULTI_LINE_GRAPH_COLORS.length]
          })), ...(_v2.length > 0 ? [{
            [_v154]: _v4,
            value: _v2.reduce((_v0, _v1) => _v0 + (_v1.values[_v5] ?? 0), 0),
            fill: _v179.MULTI_LINE_GRAPH_COLORS[_v1.length % _v179.MULTI_LINE_GRAPH_COLORS.length]
          }] : [])];
        }, [_v0.rows, _v5, _v4]);
      return null === _v6 || void 0 === _v5 ? null : (0, _v3.jsx)(_v148.ResponsiveContainer, {
        width: "100%",
        height: "100%",
        children: (0, _v3.jsxs)(_v178.PieChart, {
          children: [(0, _v3.jsx)(_v177.Pie, {
            data: _v6,
            dataKey: "value",
            nameKey: _v154,
            innerRadius: "55%",
            outerRadius: "80%",
            stroke: _v1,
            children: _v6.map(_v0 => (0, _v3.jsx)(_v176.Cell, {
              fill: _v0.fill
            }, _v0[_v154]))
          }), (0, _v3.jsx)(_v149.Tooltip, {
            content: (0, _v3.jsx)(_v180, {
              metric: _v5
            })
          }), (0, _v3.jsx)(_v147.Legend, {
            wrapperStyle: {
              fontSize: _v3,
              color: _v2
            }
          })]
        })
      });
    };
  var _v182 = _v0.i(0),
    _v183 = _v0.i(0),
    _v184 = _v0.i(0),
    _v185 = _v0.i(0);
  let _v186 = (_v0, _v1) => ({
      fill: _v0,
      fontSize: _v1
    }),
    _v187 = ({
      data: _v0
    }) => {
      let _v1 = (0, _v8.useToken)("semanticTokens", "colors.stroke"),
        _v2 = (0, _v8.useToken)("semanticTokens", "colors.text-tertiary"),
        _v3 = (0, _v8.useToken)("fontSizes", "body-xs"),
        _v4 = _v157(),
        _v5 = _v158(_v0);
      return (0, _v3.jsx)(_v148.ResponsiveContainer, {
        width: "100%",
        height: "100%",
        children: (0, _v3.jsxs)(_v183.LineChart, {
          data: _v163(_v0),
          children: [(0, _v3.jsx)(_v146.CartesianGrid, {
            vertical: !1,
            stroke: _v1
          }), (0, _v3.jsx)(_v150.XAxis, {
            dataKey: _v154,
            axisLine: {
              stroke: "var(--vimeo-colors-stroke)"
            },
            tickLine: !1,
            minTickGap: 40,
            tick: _v186(_v2, _v3),
            tickMargin: 8,
            tickFormatter: _v0 => _v162(_v0, _v4)
          }), (0, _v3.jsx)(_v151.YAxis, {
            axisLine: !1,
            tickLine: !1,
            width: 56,
            tick: _v186(_v2, _v3),
            tickFormatter: _v0 => _v160(_v0, _v4)
          }), (0, _v3.jsx)(_v149.Tooltip, {
            cursor: {
              strokeDasharray: "3 3"
            },
            content: (0, _v3.jsx)(_v165, {
              labelFormatter: _v0 => _v162(_v0, _v4)
            })
          }), _v5.length > 1 && (0, _v3.jsx)(_v147.Legend, {
            wrapperStyle: {
              fontSize: _v3,
              color: _v2
            }
          }), _v5.map((_v0, _v1) => (0, _v3.jsx)(_v182.Line, {
            type: "monotone",
            dataKey: _v0,
            name: _v159(_v0),
            dot: (0, _v3.jsx)(_v185.Dot, {}),
            activeDot: (0, _v3.jsx)(_v184.ActiveDot, {
              stroke: _v156(_v1)
            }),
            stroke: _v156(_v1),
            strokeWidth: 2
          }, _v0))]
        })
      });
    },
    _v188 = ({
      data: _v0
    }) => {
      let _v1 = _v157(),
        [_v2] = _v0.rows;
      return void 0 === _v2 ? null : (0, _v3.jsx)(_v6.Flex, {
        height: "100%",
        alignItems: "center",
        flexWrap: "wrap",
        gap: {
          base: "lg",
          md: "2xl"
        },
        children: _v158(_v0).map(_v0 => (0, _v3.jsxs)(_v6.Flex, {
          direction: "column",
          gap: "2xs",
          children: [(0, _v3.jsx)(_v46.Text, {
            variant: "heading-3xl",
            children: _v161(_v2.values[_v0] ?? 0, _v1)
          }), (0, _v3.jsx)(_v46.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: _v159(_v0)
          })]
        }, _v0))
      });
    },
    _v189 = (0, _v4.memo)(({
      chartType: _v0,
      data: _v1
    }) => {
      switch (_v0) {
        case "line":
          return (0, _v3.jsx)(_v187, {
            data: _v1
          });
        case "bar":
          return (0, _v3.jsx)(_v167, {
            data: _v1
          });
        case "donut":
          return (0, _v3.jsx)(_v181, {
            data: _v1
          });
        case "metric_card":
          return (0, _v3.jsx)(_v188, {
            data: _v1
          });
        case "table":
          return (0, _v3.jsx)(_v175, {
            data: _v1
          });
        default:
          throw Error("Unhandled chart type");
      }
    });
  var _v190 = _v0.i(0),
    _v191 = _v0.i(0),
    _v192 = _v0.i(0),
    _v193 = _v0.i(0);
  async function _v194({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v59.measureLatency)("getUserAnalyticsBandwidth", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/analytics/bandwidth?${(0, _v60.searchQueryString)(_v3)}&fields=${_v1.map(_v60.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v60.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v60.deepCamelCase)(_v1);
    });
  }
  var _v195 = _v0.i(0);
  function _v196(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v63.useGctlConfig)();
    return (0, _v71.default)(_v2 ? `/users/${_v2.where.userId}/analytics/bandwidth${(0, _v58.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v194({
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
  "true" === _v57.default.env.STORYBOOK && (0, _v58.assignMswData)(_v196, {
    endpoint: "/users/:userId/analytics/bandwidth",
    method: "GET"
  }), "true" === _v57.default.env.STORYBOOK && (0, _v58.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v62.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v63.useGctlConfig)(),
      [_v5, _v6] = (0, _v58.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/analytics/bandwidth${(0, _v58.serializeQuery)(_v0)}`, _v194({
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
    endpoint: "/users/:userId/analytics/bandwidth",
    method: "GET"
  }), "true" === _v57.default.env.STORYBOOK && (0, _v58.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v63.useGctlConfig)();
    return (0, _v195.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/analytics/bandwidth?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v194({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/analytics/bandwidth",
    method: "GET"
  });
  var _v197 = _v0.i(0);
  let _v198 = _v0 => Array.isArray(_v0) ? `[${_v0.map(_v198).join(",")}]` : (0, _v56.isRecord)(_v0) ? `{${Object.keys(_v0).sort().map(_v0 => `${JSON.stringify(_v0)}:${_v198(_v0[_v0])}`).join(",")}}` : JSON.stringify(_v0),
    _v199 = new Set(["line", "bar", "donut", "metric_card", "table"]),
    _v200 = _v0 => "string" == typeof _v0 && _v199.has(_v0),
    _v201 = new Set(["sessions", "bandwidth", "teams", "retention"]),
    _v202 = new Set(["video", "member", "user_video"]),
    _v203 = _v0 => "string" == typeof _v0 && _v202.has(_v0),
    _v204 = ["id", "title", "chartType", "note", "query", "createdTime"],
    _v205 = ["status", "title", "chartType", "note", "description", "query", "suggestions"],
    _v206 = new Set(["content", "country", "region", "device_type", "embed_domain", "streaming_type", "text_track_language", "text_track_type", "text_track_provenance", "audio_track_language", "audio_track_type", "audio_track_provenance"]),
    _v207 = _v0 => {
      let _v1;
      return !!(0, _v56.isRecord)(_v0) && "string" == typeof (_v1 = _v0.field) && _v206.has(_v1) && Array.isArray(_v0.values) && _v0.values.length <= 50 && _v0.values.every(_v0 => "string" == typeof _v0 && _v0.length <= 255);
    },
    _v208 = _v0 => {
      let _v1;
      if (!(0, _v56.isRecord)(_v0) || !("string" == typeof (_v1 = _v0.dataset) && _v201.has(_v1)) || !Array.isArray(_v0.dimensions) || _v0.dimensions.length > 10 || !_v0.dimensions.every(_v0 => "string" == typeof _v0 && _v0.length <= 100) || !Array.isArray(_v0.metrics) || 0 === _v0.metrics.length || _v0.metrics.length > 10 || !_v0.metrics.every(_v0 => "string" == typeof _v0 && _v0.length <= 100) || !Array.isArray(_v0.filters) || _v0.filters.length > 20 || !_v0.filters.every(_v207) || "retention" === _v0.dataset && (_v0.dimensions.length > 0 || !_v0.filters.some(_v0 => "content" === _v0.field && _v0.values.length > 0 && _v0.values[0].trim().length > 0)) || "bandwidth" === _v0.dataset && (_v0.dimensions.length > 1 || 1 === _v0.dimensions.length && "video" !== _v0.dimensions[0] && "total" !== _v0.dimensions[0])) return null;
      let _v2 = "string" == typeof _v0.timeInterval ? _v0.timeInterval : "string" == typeof _v0.time_interval ? _v0.time_interval : null,
        _v3 = "string" == typeof _v0.sort ? _v0.sort : null,
        _v4 = "asc" === _v0.direction ? "asc" : "desc",
        _v5 = "number" == typeof _v0.limit && Number.isFinite(_v0.limit) && _v0.limit >= 1 ? Math.min(Math.floor(_v0.limit), 0) : 10;
      return {
        dataset: _v0.dataset,
        dimensions: _v0.dimensions,
        metrics: _v0.metrics,
        timeInterval: null !== _v2 && "none" !== _v2 && "" !== _v2 ? _v2 : null,
        sort: null !== _v3 && "default" !== _v3 && "" !== _v3 ? _v3 : null,
        direction: _v4,
        filters: _v0.filters,
        limit: _v5
      };
    },
    _v209 = _v0 => {
      if (!(0, _v56.isRecord)(_v0) || "number" != typeof _v0.id || "string" != typeof _v0.title || !_v200(_v0.chartType)) return null;
      let _v1 = _v208(_v0.query);
      return null === _v1 ? null : {
        id: _v0.id,
        title: _v0.title,
        chartType: _v0.chartType,
        note: "string" == typeof _v0.note && "" !== _v0.note ? _v0.note : null,
        query: _v1,
        createdTime: "string" == typeof _v0.createdTime && "" !== _v0.createdTime ? _v0.createdTime : null
      };
    },
    _v210 = new Set(["bucket", "dimension", "time"]),
    _v211 = "query",
    _v212 = "not_supported",
    _v213 = "analytics-ai-widget-cache-v2",
    _v214 = () => {
      try {
        let _v0 = window.localStorage.getItem(_v213);
        if (null === _v0) return {};
        let _v1 = JSON.parse(_v0);
        return (0, _v56.isRecord)(_v1) ? _v1 : {};
      } catch {
        return {};
      }
    },
    _v215 = _v0 => {
      try {
        window.localStorage.setItem(_v213, JSON.stringify(_v0));
      } catch {
        return;
      }
    },
    _v216 = (_v0, _v1, _v2) => {
      var _v3;
      let _v4;
      return !!(0, _v56.isRecord)(_v0) && "number" == typeof _v0.expiresAt && (_v2 || _v0.expiresAt > _v1) && "number" == typeof _v0.lastAccessedAt && "number" == typeof _v0.byteSize && "number" == typeof _v0.userId && (_v3 = _v0.data, !!(0, _v56.isRecord)(_v3) && Array.isArray(_v3.dimensions) && _v3.dimensions.every(_v0 => "string" == typeof _v0) && "string" == typeof (_v4 = _v3.labelKind) && _v210.has(_v4) && "boolean" == typeof _v3.hasMore && Array.isArray(_v3.rows) && _v3.rows.every(_v0 => !!(0, _v56.isRecord)(_v0) && (null === _v0.label || "string" == typeof _v0.label) && Array.isArray(_v0.labels) && _v0.labels.every(_v0 => null === _v0 || "string" == typeof _v0) && (0, _v56.isRecord)(_v0.values) && Object.values(_v0.values).every(_v0 => "number" == typeof _v0)));
    },
    _v217 = (_v0, _v1, {
      at: _v2 = Date.now(),
      ignoreTtl: _v3 = !1
    } = {}) => {
      let _v4 = _v214()[_v0];
      return void 0 !== _v4 && _v4.userId === _v1 && _v216(_v4, _v2, _v3) ? _v4.data : null;
    },
    _v218 = (_v0, _v1) => {
      let _v2 = new Blob([_v0], {
          type: "text/csv;charset=utf-8;"
        }),
        _v3 = URL.createObjectURL(_v2),
        _v4 = document.createElement("a");
      _v4.href = _v3, _v4.download = _v1, _v4.click(), URL.revokeObjectURL(_v3);
    };
  function _v219(_v0) {
    let _v1 = _v0.replace(/_([0-9])/g, "\0$1"),
      _v2 = (_v1 = (_v1 = (_v1 = _v1.replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")).replace(/([a-z0-9])([A-Z])/g, "$1_$2")).toLowerCase().replace(RegExp("\0", "g"), "_")).replace(/[^a-zA-Z0-9]+([a-zA-Z0-9])/g, (_v0, _v1) => _v0 === "_" + _v1 && _v1 >= "0" && _v1 <= "9" ? "_" + _v1 : _v1.toUpperCase());
    return _v2.charAt(0).toLowerCase() + _v2.slice(1);
  }
  let _v220 = new Set(["hour", "day", "week", "month", "year"]),
    _v221 = _v0 => _v220.has(_v0),
    _v222 = _v0 => _v0.dimensions.filter(_v0 => "total" !== _v0 && !_v221(_v0)),
    _v223 = _v0 => null !== _v0.timeInterval && _v221(_v0.timeInterval) ? _v0.timeInterval : null,
    _v224 = {
      audio_track_language: "audioTrackLanguage",
      audio_track_provenance: "audioTrackProvenance",
      audio_track_type: "audioTrackType",
      browser: "browserName",
      city: "cityName",
      country: "countryName",
      device_type: "deviceType",
      embed_domain: "embedDomain",
      embed_domain_path: "embedDomainPath",
      os: "osName",
      region: "regionName",
      streaming_type: "streamingType",
      text_track_language: "textTrackLanguage",
      text_track_provenance: "textTrackProvenance",
      text_track_type: "textTrackType",
      video: "metadata.connections.video.title"
    },
    _v225 = {
      video: "metadata.connections.video.title",
      member: "metadata.connections.user.name",
      user_video: "metadata.connections.user.name"
    },
    _v226 = (_v0, _v1) => {
      let _v2 = _v1.split("."),
        _v3 = _v0;
      for (let _v0 of _v2) {
        if (!(0, _v56.isRecord)(_v3)) return null;
        _v3 = _v3[_v0];
      }
      return "string" == typeof _v3 || "number" == typeof _v3 ? String(_v3) : null;
    },
    _v227 = (_v0, _v1) => {
      let _v2 = {};
      for (let _v0 of _v1) {
        let _v0 = _v0[_v0] ?? _v0[_v219(_v0)];
        "number" == typeof _v0 && (_v2[_v0] = _v0);
      }
      return _v2;
    },
    _v228 = _v0 => {
      let _v1 = _v0.filter(_v0 => null !== _v0);
      return _v1.length > 0 ? _v1.join(" / ") : null;
    },
    _v229 = ["browser", "city", "country", "device_type", "embed_domain", "embed_domain_path", "os", "region", "streaming_type", "total", "video"],
    _v230 = {
      content: "filterContent",
      country: "filterCountries",
      region: "filterRegions",
      device_type: "filterDeviceTypes",
      embed_domain: "filterEmbedDomains",
      streaming_type: "filterStreamingTypes",
      text_track_language: "filterTextTrackLanguages",
      text_track_type: "filterTextTrackTypes",
      text_track_provenance: "filterTextTrackProvenances",
      audio_track_language: "filterAudioTrackLanguages",
      audio_track_type: "filterAudioTrackTypes",
      audio_track_provenance: "filterAudioTrackProvenances"
    },
    _v231 = "/videos/",
    _v232 = _v0 => _v0.map(_v0 => _v0.startsWith(_v231) ? _v0 : `${_v231}${_v0}`),
    _v233 = "widget",
    _v234 = _v0 => {
      var _v1;
      let _v2, _v3;
      return _v1 = JSON.stringify(_v0, null), _v2 = new TextEncoder().encode(_v1), _v3 = "", _v2.forEach(_v0 => {
        _v3 += String.fromCharCode(_v0);
      }), btoa(_v3).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    },
    _v235 = /^[=+\-@\t\r]/,
    _v236 = {
      revalidateOnFocus: !1,
      revalidateOnReconnect: !1,
      dedupingInterval: 0
    },
    _v237 = {
      bucket: "Label",
      dimension: "Label",
      time: "Date"
    },
    _v238 = ({
      query: _v0,
      range: _v1,
      enabled: _v2 = !0,
      surface: _v3 = "dashboard",
      widgetId: _v4 = null
    }) => {
      let _v5 = _v0.where.userId,
        _v6 = null != _v1,
        _v7 = (0, _v4.useMemo)(() => _v6 ? ((_v0, _v1) => {
          switch (_v0.dataset) {
            case "sessions":
              {
                let _v0 = _v0.dimensions[0],
                  _v1 = {
                    dataset: "sessions",
                    dimension: "string" == typeof _v0 && _v229.includes(_v0) ? _v0 : "total",
                    dimensions: [..._v0.dimensions],
                    timeInterval: _v0.timeInterval ?? "none",
                    sort: _v0.sort ?? "default",
                    direction: _v0.direction,
                    page: 1,
                    perPage: _v0.limit,
                    from: _v1.from,
                    to: _v1.to
                  },
                  _v2 = {};
                for (let _v0 of _v0.filters) {
                  let _v0 = _v230[_v0.field];
                  void 0 !== _v0 && (_v2[_v0] = "content" === _v0.field ? _v232(_v0.values) : [..._v0.values]);
                }
                return {
                  ..._v1,
                  ..._v2
                };
              }
            case "bandwidth":
              return {
                dataset: "bandwidth",
                objectGroup: _v0.dimensions[0] ?? "total",
                timeGroup: _v0.timeInterval ?? void 0,
                sort: _v0.sort ?? void 0,
                page: 1,
                perPage: _v0.limit,
                startDate: _v1.from,
                endDate: _v1.to
              };
            case "teams":
              return {
                dataset: "teams",
                dimensions: [..._v0.dimensions],
                sort: _v0.sort ?? "default",
                direction: _v0.direction,
                page: 1,
                perPage: _v0.limit,
                startDate: _v1.from,
                endDate: _v1.to
              };
            case "retention":
              {
                let _v0 = (_v0 => {
                  for (let _v0 of _v0) if ("content" === _v0.field && _v0.values.length > 0) {
                    let _v0 = _v0.values[0];
                    return _v0.startsWith(_v231) ? _v0.slice(_v231.length) : _v0;
                  }
                  return null;
                })(_v0.filters);
                if (null === _v0 || "" === _v0) return null;
                return {
                  dataset: "retention",
                  filterContent: [`${_v231}${_v0}`],
                  page: 1,
                  perPage: 1,
                  from: _v1.from,
                  to: _v1.to
                };
              }
            default:
              {
                let _v0 = _v0.dataset;
                throw Error(`Unhandled dataset: ${String(_v0)}`);
              }
          }
        })(_v0.spec, _v1) : null, [_v6, _v0.spec, _v1]),
        {
          cachedData: _v8,
          write: _v9
        } = ((_v0, _v1) => {
          let [_v2, _v3] = (0, _v4.useState)(_v0),
            [_v4, _v5] = (0, _v4.useState)(_v1),
            [_v6, _v7] = (0, _v4.useState)(() => _v217(_v0, _v1));
          return (_v2 !== _v0 || _v4 !== _v1) && (_v3(_v0), _v5(_v1), _v7(_v217(_v0, _v1))), (0, _v4.useEffect)(() => {
            let _v0, _v1;
            void 0 !== (_v1 = (_v0 = _v214())[_v0]) && _v1.userId === _v1 && (_v1.lastAccessedAt = Date.now(), _v215(_v0));
          }, [_v0, _v1]), {
            cachedData: _v6,
            write: (0, _v4.useCallback)(_v0 => {
              ((_v0, _v1, _v2) => {
                let _v3,
                  _v4 = _v217(_v0, _v1, {
                    ignoreTtl: !0
                  });
                if (null !== _v4 && _v198(_v4) === _v198(_v2)) return;
                let _v5 = Date.now(),
                  _v6 = (_v3 = _v214(), Object.fromEntries(Object.entries(_v3).filter(([, _v0]) => _v216(_v0, _v5, !1)))),
                  _v7 = {
                    userId: _v1,
                    data: _v2,
                    expiresAt: _v5 + 0,
                    lastAccessedAt: _v5,
                    byteSize: 0
                  };
                _v7.byteSize = JSON.stringify({
                  [_v0]: {
                    ..._v7,
                    byteSize: 0
                  }
                }).length, _v6[_v0] = _v7;
                let _v8 = Object.values(_v6).reduce((_v0, _v1) => _v0 + _v1.byteSize, 0);
                for (; _v8 > 0;) {
                  let _v0 = Object.entries(_v6).sort(([, _v0], [, _v1]) => _v0.lastAccessedAt - _v1.lastAccessedAt)[0];
                  if (void 0 === _v0) break;
                  _v8 -= _v0[1].byteSize;
                  let {
                    [_v0[0]]: _v1,
                    ..._v2
                  } = _v6;
                  _v6 = _v2;
                }
                return _v215(_v6);
              })(_v0, _v1, _v0), _v7(_v0);
            }, [_v0, _v1]),
            clear: (0, _v4.useCallback)(() => {
              ((_v0, _v1) => {
                let _v2 = _v214(),
                  _v3 = _v2[_v0];
                if (void 0 === _v3 || _v3.userId !== _v1) return;
                let {
                  [_v0]: _v4,
                  ..._v5
                } = _v2;
                _v215(_v5);
              })(_v0, _v1), _v7(null);
            }, [_v0, _v1])
          };
        })((0, _v4.useMemo)(() => _v198({
          userId: _v0.where.userId,
          spec: _v0.spec,
          range: _v1
        }), [_v0, _v1]), _v5),
        [_v10, _v11] = (0, _v4.useState)(!1),
        _v12 = (0, _v4.useMemo)(() => JSON.stringify(_v0.spec), [_v0.spec]),
        {
          trackAnalyticsAiWidgetDataRequested: _v13
        } = (0, _v13.useAnalyticsTracking)(),
        _v14 = (0, _v4.useCallback)(_v0 => {
          _v13({
            dataset: _v0.dataset,
            chartType: _v0.chartType,
            querySpec: _v12,
            surface: _v3,
            widgetId: _v4,
            requestOutcome: _v0
          });
        }, [_v0.chartType, _v0.dataset, _v12, _v3, _v13, _v4]),
        _v15 = (0, _v4.useMemo)(() => ({
          ..._v236,
          onSuccess: () => _v14("success"),
          onError: () => _v14("error")
        }), [_v14]),
        _v16 = (0, _v4.useMemo)(() => Array.from(new Set([..._v0.spec.metrics, ...(_v0 => {
          let _v1 = _v222(_v0),
            _v2 = _v223(_v0);
          switch (_v0.dataset) {
            case "bandwidth":
              return _v1.length > 0 ? ["dimensionName"] : [];
            case "teams":
              {
                let _v0 = _v1.map(_v0 => _v203(_v0) ? _v225[_v0] : _v0);
                return (null !== _v2 || _v0.dimensions.some(_v221)) && _v0.push("range.startDate"), _v0;
              }
            case "retention":
              return [];
            case "sessions":
              {
                let _v0 = _v1.map(_v0 => _v224[_v0] ?? _v0);
                return null !== _v2 && _v0.push("startDate"), _v0;
              }
            default:
              {
                let _v0 = _v0.dataset;
                throw Error(`Unhandled dataset: ${String(_v0)}`);
              }
          }
        })(_v0.spec)])), [_v0.spec]),
        _v17 = "teams" === _v0.dataset && (!_v0.where.userId || 0 === _v0.where.userId),
        _v18 = _v2 && null === _v8 && _v6 && null !== _v7 && !_v17,
        _v19 = (0, _v193.useGetUserAnalytics)(() => _v7?.dataset === "sessions" && _v18 ? {
          select: _v16,
          where: _v0.where,
          query: _v7
        } : null, _v15),
        _v20 = _v196(() => _v7?.dataset === "bandwidth" && _v18 ? {
          select: _v16,
          where: _v0.where,
          query: _v7
        } : null, _v15),
        _v21 = (0, _v192.useGetTeamAnalytics)(() => _v7?.dataset === "teams" && _v18 ? {
          select: _v16,
          where: _v0.where,
          query: _v7
        } : null, _v15),
        _v22 = (0, _v197.useGetUserAnalyticsEngagement)(() => _v7?.dataset === "retention" && _v18 ? {
          select: _v16,
          where: _v0.where,
          query: _v7
        } : null, _v15),
        _v23 = (0, _v4.useMemo)(() => {
          switch (_v0.dataset) {
            case "sessions":
              return _v19;
            case "bandwidth":
              return _v20;
            case "teams":
              return _v21;
            case "retention":
              return _v22;
            default:
              {
                let _v0 = _v0.dataset;
                throw Error(`Unhandled dataset: ${String(_v0)}`);
              }
          }
        }, [_v20, _v22, _v0.dataset, _v19, _v21]),
        {
          error: _v24,
          isLoading: _v25,
          isValidating: _v26,
          mutate: _v27
        } = _v23,
        _v28 = (0, _v4.useMemo)(() => ((_v0, _v1) => {
          var _v2, _v3, _v4, _v5, _v6, _v7, _v8;
          let _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v16, _v17, _v18;
          if (null == _v0) return null;
          if (Array.isArray(_v0)) _v9 = _v0;else {
            if (!("data" in _v0 && Array.isArray(_v0.data))) return null;
            _v9 = _v0.data, void 0 === _v18 && "paging" in _v0 && (0, _v56.isRecord)(_v0.paging) && (_v18 = {
              next: "string" == typeof _v0.paging.next ? _v0.paging.next : null
            });
          }
          switch (_v1.dataset) {
            case "sessions":
              return _v2 = _v9, _v3 = _v18, _v10 = _v222(_v1), {
                dimensions: _v10,
                labelKind: (_v11 = null !== _v223(_v1)) ? "time" : "dimension",
                hasMore: _v3?.next != null,
                rows: _v2.filter(_v56.isRecord).map(_v0 => {
                  let _v1 = [...(_v11 ? ["string" == typeof _v0.startDate ? _v0.startDate : null] : []), ..._v10.map(_v0 => ((_v0, _v1) => {
                    let _v2 = _v224[_v1];
                    if (void 0 !== _v2) return _v226(_v0, _v2);
                    let _v3 = _v0[_v219(_v1)] ?? _v0[_v1];
                    return "string" == typeof _v3 || "number" == typeof _v3 ? String(_v3) : null;
                  })(_v0, _v0))];
                  return {
                    labels: _v1,
                    label: _v228(_v1),
                    values: _v227(_v0, _v1.metrics)
                  };
                })
              };
            case "bandwidth":
              return _v4 = _v9, _v5 = _v18, _v12 = _v222(_v1), {
                dimensions: _v12,
                labelKind: (_v13 = null !== _v223(_v1)) ? "time" : "dimension",
                hasMore: _v5?.next != null,
                rows: _v4.filter(_v56.isRecord).map(_v0 => {
                  let _v1 = [...(_v13 ? ["string" == typeof _v0.startDate ? _v0.startDate : null] : []), ...(_v12.length > 0 ? ["string" == typeof _v0.dimensionName ? _v0.dimensionName : null] : [])];
                  return {
                    labels: _v1,
                    label: _v228(_v1),
                    values: _v227(_v0, _v1.metrics)
                  };
                })
              };
            case "teams":
              return _v6 = _v9, _v7 = _v18, _v14 = _v1.dimensions.filter(_v203), {
                dimensions: _v14,
                labelKind: (_v15 = _v1.dimensions.filter(_v221)).length > 0 ? "time" : "dimension",
                hasMore: _v7?.next != null,
                rows: _v6.filter(_v56.isRecord).map(_v0 => {
                  let _v1 = [];
                  if (_v15.length > 0) {
                    let _v0 = (0, _v56.isRecord)(_v0.range) ? _v0.range : null;
                    _v1.push("string" == typeof _v0?.startDate ? _v0.startDate : null);
                  }
                  return _v1.push(..._v14.map(_v0 => _v226(_v0, _v225[_v0]))), {
                    labels: _v1,
                    label: _v228(_v1),
                    values: _v227(_v0, _v1.metrics)
                  };
                })
              };
            case "retention":
              return _v8 = _v9, _v17 = (_v16 = _v1.metrics.includes("viewer_retention_normalized")) ? "viewer_retention_normalized" : "viewer_retention", {
                dimensions: [],
                labelKind: "bucket",
                hasMore: !1,
                rows: _v8.filter(_v56.isRecord).flatMap(_v0 => {
                  let _v1 = _v16 ? _v0.viewerRetentionNormalized ?? _v0.viewer_retention_normalized : _v0.viewerRetention ?? _v0.viewer_retention;
                  return Array.isArray(_v1) ? _v1.filter(_v56.isRecord).flatMap(_v0 => {
                    let _v1 = _v0.timeIndex ?? _v0.time_index ?? _v0.timePercentage ?? _v0.time_percentage,
                      _v2 = _v0.views;
                    if ("number" != typeof _v1 || "number" != typeof _v2) return [];
                    let _v3 = _v16 ? `${_v1}%` : `${_v1}s`;
                    return [{
                      labels: [_v3],
                      label: _v3,
                      values: {
                        [_v17]: _v2
                      }
                    }];
                  }) : [];
                })
              };
            default:
              {
                let _v0 = _v1.dataset;
                throw Error(`Unhandled dataset: ${String(_v0)}`);
              }
          }
        })(_v23.data, _v0.spec), [_v23.data, _v0.spec]);
      (0, _v4.useEffect)(() => {
        null !== _v28 && _v9(_v28);
      }, [_v28, _v9]), (0, _v4.useEffect)(() => {
        if (!_v10) return () => void 0;
        let _v0 = setTimeout(() => _v11(!1), 600);
        return () => clearTimeout(_v0);
      }, [_v10]);
      let _v29 = (0, _v56.isRecord)(_v24) && 404 === _v24.status,
        _v30 = _v2 && !_v29 ? _v8 ?? _v28 : null,
        _v31 = (0, _v4.useCallback)(() => {
          _v6 && (_v11(!0), _v27());
        }, [_v6, _v27]),
        _v32 = (0, _v4.useCallback)(() => {
          let _v0, _v1, _v2;
          if (null === _v30 || 0 === _v30.rows.length) return;
          let _v3 = Object.keys(_v30.rows[0].values),
            _v4 = [...(_v0 = Object.keys(_v30.rows[0].values), _v1 = "dimension" !== _v30.labelKind, _v2 = _v237[_v30.labelKind], [..._v30.rows[0].labels.map((_v0, _v1) => {
              if (0 === _v1 && _v1) return _v2;
              let _v2 = _v30.dimensions[_v1 - !!_v1];
              return void 0 === _v2 ? _v2 : _v159(_v2);
            }), ..._v0.map(_v159)])],
            _v5 = _v30.rows.map(_v0 => [..._v0.labels.map(_v0 => {
              let _v1;
              return _v1 = _v0 ?? "", _v235.test(_v1) ? `'${_v1}` : _v1;
            }), ..._v3.map(_v0 => _v0.values[_v0] ?? 0)]),
            _v6 = null != _v1 ? _v1.from.slice(0, 10) : null,
            _v7 = null != _v1 ? _v1.to.slice(0, 10) : null,
            _v8 = null !== _v6 && null !== _v7 ? `ai_chart_${_v6}_to_${_v7}.csv` : "ai_chart.csv";
          _v218((0, _v191.stringify)([_v4, ..._v5]), _v8);
        }, [_v30, _v1]);
      return {
        isLoading: _v10 || null === _v8 && (_v25 || _v26),
        isError: void 0 !== _v24 && null === _v8,
        isPermissionError: _v29,
        data: _v30,
        export: _v32,
        refresh: _v31,
        share: (0, _v4.useCallback)(_v0 => {
          var _v1;
          let _v2;
          return navigator.clipboard.writeText((_v1 = {
            ..._v0,
            chartType: _v0.chartType,
            query: _v0.spec,
            widgetId: _v4 ?? null
          }, (_v2 = new URL(window.location.origin + window.location.pathname)).searchParams.set(_v233, _v234(_v1)), _v2.toString())).then(() => !0).catch(() => !1);
        }, [_v0.chartType, _v0.spec, _v4]),
        supportedChartType: ((_v0, _v1, _v2) => {
          if (null === _v2 || 0 === _v2.rows.length || 0 === Object.keys(_v2.rows[0].values).length) return null;
          if ("retention" === _v1.dataset) return "table" === _v0 ? "table" : "line";
          let _v3 = _v222(_v1),
            _v4 = null !== _v223(_v1);
          switch (_v0) {
            case "line":
              return _v4 && _v3.length <= 1 ? "line" : "table";
            case "bar":
              return _v3.length <= 1 ? "bar" : "table";
            case "donut":
              return "donut";
            case "metric_card":
              return 0 === _v3.length && 1 === _v2.rows.length ? "metric_card" : "table";
            case "table":
              return "table";
            default:
              throw Error(`Unhandled chart type: ${String(_v0)}`);
          }
        })(_v0.chartType, _v0.spec, _v30)
      };
    },
    _v239 = (0, _v30.translate)({
      singular: "Add to custom analytics",
      dictionary: {
        es: {
          singular: "Añadir a analíticas personalizadas"
        },
        "de-DE": {
          singular: "Zu benutzerdefinierten Analytics hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter aux analyses personnalisées"
        },
        "ja-JP": {
          singular: "カスタム分析に追加"
        },
        "ko-KR": {
          singular: "맞춤형 분석에 추가"
        },
        "pt-BR": {
          singular: "Adicionar ao painel de análises personalizado"
        },
        "zh-CN": {
          singular: "添加到自定义分析"
        }
      }
    }),
    _v240 = (0, _v30.translate)({
      singular: "Saving...",
      dictionary: {
        es: {
          singular: "Guardando..."
        },
        "de-DE": {
          singular: "Speichern..."
        },
        "fr-FR": {
          singular: "Enregistrement..."
        },
        "ja-JP": {
          singular: "保存中..."
        },
        "ko-KR": {
          singular: "저장 중..."
        },
        "pt-BR": {
          singular: "Salvando..."
        },
        "zh-CN": {
          singular: "正在保存..."
        }
      }
    }),
    _v241 = (0, _v30.translate)({
      singular: "Refresh data",
      dictionary: {
        es: {
          singular: "Actualizar datos"
        },
        "de-DE": {
          singular: "Daten aktualisieren"
        },
        "fr-FR": {
          singular: "Actualiser les données"
        },
        "ja-JP": {
          singular: "データを更新"
        },
        "ko-KR": {
          singular: "데이터 새로 고침"
        },
        "pt-BR": {
          singular: "Atualizar dados"
        },
        "zh-CN": {
          singular: "刷新数据"
        }
      }
    }),
    _v242 = (0, _v30.translate)({
      singular: "Download CSV",
      dictionary: {
        es: {
          singular: "Descargar archivo CSV"
        },
        "de-DE": {
          singular: "CSV herunterladen"
        },
        "fr-FR": {
          singular: "Télécharger le fichier CSV"
        },
        "ja-JP": {
          singular: "CSVをダウンロード"
        },
        "ko-KR": {
          singular: "CSV 다운로드"
        },
        "pt-BR": {
          singular: "Baixar CSV"
        },
        "zh-CN": {
          singular: "下载 CSV"
        }
      }
    }),
    _v243 = (0, _v30.translate)({
      singular: "Share data widget",
      dictionary: {
        es: {
          singular: "Compartir widget de datos"
        },
        "de-DE": {
          singular: "Daten-Widget teilen"
        },
        "fr-FR": {
          singular: "Partager le widget de données"
        },
        "ja-JP": {
          singular: "データウィジェットを共有"
        },
        "ko-KR": {
          singular: "데이터 위젯 공유"
        },
        "pt-BR": {
          singular: "Compartilhar widget de dados"
        },
        "zh-CN": {
          singular: "共享数据小部件"
        }
      }
    }),
    _v244 = (0, _v30.translate)({
      singular: "Rename widget",
      dictionary: {
        es: {
          singular: "Renombrar widget"
        },
        "de-DE": {
          singular: "Widget umbenennen"
        },
        "fr-FR": {
          singular: "Renommer le widget"
        },
        "ja-JP": {
          singular: "ウィジェットの名前を変更"
        },
        "ko-KR": {
          singular: "위젯 이름 변경"
        },
        "pt-BR": {
          singular: "Renomear widget"
        },
        "zh-CN": {
          singular: "重命名小部件"
        }
      }
    }),
    _v245 = (0, _v30.translate)({
      singular: "Remove widget",
      dictionary: {
        es: {
          singular: "Eliminar widget"
        },
        "de-DE": {
          singular: "Widget entfernen"
        },
        "fr-FR": {
          singular: "Supprimer le widget"
        },
        "ja-JP": {
          singular: "ウィジェットを削除"
        },
        "ko-KR": {
          singular: "위젯 제거"
        },
        "pt-BR": {
          singular: "Remover widget"
        },
        "zh-CN": {
          singular: "移除小部件"
        }
      }
    }),
    _v246 = (0, _v30.translate)({
      singular: "Download started",
      dictionary: {
        es: {
          singular: "Descarga iniciada"
        },
        "de-DE": {
          singular: "Download gestartet"
        },
        "fr-FR": {
          singular: "Téléchargement lancé"
        },
        "ja-JP": {
          singular: "ダウンロードが開始されました"
        },
        "ko-KR": {
          singular: "다운로드가 시작되었습니다"
        },
        "pt-BR": {
          singular: "Download iniciado"
        },
        "zh-CN": {
          singular: "下载已开始"
        }
      }
    }),
    _v247 = (0, _v30.translate)({
      singular: "Share link copied to clipboard",
      dictionary: {
        es: {
          singular: "Enlace para compartir copiado al portapapeles"
        },
        "de-DE": {
          singular: "Link zum Teilen in die Zwischenablage kopiert"
        },
        "fr-FR": {
          singular: "Lien de partage copié dans le presse-papiers"
        },
        "ja-JP": {
          singular: "共有リンクがクリップボードにコピーされました"
        },
        "ko-KR": {
          singular: "공유 링크가 클립보드에 복사되었습니다."
        },
        "pt-BR": {
          singular: "Link de compartilhamento copiado para a área de transferência"
        },
        "zh-CN": {
          singular: "共享链接已复制到剪贴板"
        }
      }
    }),
    _v248 = (0, _v30.translate)({
      singular: "No data for this range.",
      dictionary: {
        es: {
          singular: "No hay datos para este intervalo."
        },
        "de-DE": {
          singular: "Keine Daten für diesen Zeitraum."
        },
        "fr-FR": {
          singular: "Aucune donnée pour cette période."
        },
        "ja-JP": {
          singular: "この期間のデータはありません。"
        },
        "ko-KR": {
          singular: "이 범위에 대한 데이터가 없습니다."
        },
        "pt-BR": {
          singular: "Sem dados para este intervalo."
        },
        "zh-CN": {
          singular: "该范围内无数据。"
        }
      }
    }),
    _v249 = (0, _v30.translate)({
      singular: "There was an unexpected server error. Please try again.",
      dictionary: {
        es: {
          singular: "Se produjo un error inesperado. Vuelve a intentarlo."
        },
        "de-DE": {
          singular: "Ein unerwarteter Serverfehler ist aufgetreten. Bitte versuche es erneut."
        },
        "fr-FR": {
          singular: "Une erreur de serveur inattendue s'est produite. Veuillez réessayer."
        },
        "ja-JP": {
          singular: "予期しないサーバーエラーが発生しました。再度お試しください。"
        },
        "ko-KR": {
          singular: "예상하지 못한 서버 오류가 발생했습니다. 다시 시도해주세요."
        },
        "pt-BR": {
          singular: "Ocorreu um erro inesperado com o servidor. Por favor, tente novamente."
        },
        "zh-CN": {
          singular: "服务器出现意外错误。请重试。"
        }
      }
    }),
    _v250 = (0, _v30.translate)({
      singular: "The generated data cannot be displayed as this chart type.",
      dictionary: {
        es: {
          singular: "Los datos generados no pueden mostrarse con este tipo de gráfico."
        },
        "de-DE": {
          singular: "Die generierten Daten können mit diesem Diagrammtyp nicht dargestellt werden."
        },
        "fr-FR": {
          singular: "Les données générées ne peuvent pas être affichées avec ce type de graphique."
        },
        "ja-JP": {
          singular: "生成されたデータはこのチャートタイプで表示できません。"
        },
        "ko-KR": {
          singular: "생성된 데이터를 이 차트 유형으로 표시할 수 없습니다."
        },
        "pt-BR": {
          singular: "Os dados gerados não podem ser exibidos neste tipo de gráfico."
        },
        "zh-CN": {
          singular: "生成的数据无法以此图表类型显示。"
        }
      }
    }),
    _v251 = (0, _v30.translate)({
      singular: "No results found",
      dictionary: {
        es: {
          singular: "No encontramos resultados."
        },
        "de-DE": {
          singular: "Keine Ergebnisse"
        },
        "fr-FR": {
          singular: "Aucun résultat trouvé"
        },
        "ja-JP": {
          singular: "検索結果がありません"
        },
        "ko-KR": {
          singular: "검색 결과가 없습니다"
        },
        "pt-BR": {
          singular: "Nenhum resultado encontrado."
        },
        "zh-CN": {
          singular: "未找到结果"
        }
      }
    }),
    _v252 = (0, _v30.translate)({
      singular: "We couldn’t find any data matching your request. Try again adjusting your request.",
      dictionary: {
        es: {
          singular: "No encontramos datos que coincidan con tu solicitud. Ajusta tu petición e inténtalo de nuevo."
        },
        "de-DE": {
          singular: "Wir konnten keine Daten finden, die Ihrer Anfrage entsprechen. Versuchen Sie es erneut und passen Sie Ihre Anfrage an."
        },
        "fr-FR": {
          singular: "Nous n'avons trouvé aucune donnée correspondant à votre demande. Réessayez en ajustant votre requête."
        },
        "ja-JP": {
          singular: "リクエストに一致するデータが見つかりませんでした。リクエスト内容を調整して、もう一度お試しください。"
        },
        "ko-KR": {
          singular: "요청과 일치하는 데이터를 찾을 수 없습니다. 요청을 조정한 후 다시 시도해 보세요."
        },
        "pt-BR": {
          singular: "Não conseguimos encontrar dados que correspondam à sua solicitação. Tente novamente ajustando sua solicitação."
        },
        "zh-CN": {
          singular: "未找到与您的请求匹配的数据。请调整请求后重试。"
        }
      }
    }),
    _v253 = (0, _v30.translate)({
      singular: "Suggestions",
      dictionary: {
        es: {
          singular: "Sugerencias"
        },
        "de-DE": {
          singular: "Vorschläge"
        },
        "ja-JP": {
          singular: "提案"
        },
        "ko-KR": {
          singular: "제안"
        },
        "pt-BR": {
          singular: "Sugestões"
        },
        "zh-CN": {
          singular: "建议"
        }
      }
    }),
    _v254 = (0, _v30.translate)({
      singular: "Widget limit reached",
      dictionary: {
        es: {
          singular: "Límite de widgets alcanzado"
        },
        "de-DE": {
          singular: "Widget-Limit erreicht"
        },
        "fr-FR": {
          singular: "Limite de widgets atteinte"
        },
        "ja-JP": {
          singular: "ウィジェットの上限に達しました"
        },
        "ko-KR": {
          singular: "위젯 한도에 도달했습니다"
        },
        "pt-BR": {
          singular: "Limite de widgets atingido"
        },
        "zh-CN": {
          singular: "小部件已达上限"
        }
      }
    }),
    _v255 = (0, _v30.translate)({
      singular: "Your account can have up to {count} custom widgets. Remove an existing widget to create a new one, or Contact Sales to request a higher limit.",
      replacements: {
        count: 20
      },
      dictionary: {
        es: {
          singular: "Su cuenta puede tener hasta {count} widgets personalizados. Elimine un widget existente para crear uno nuevo, o póngase en contacto con Ventas para solicitar un límite mayor."
        },
        "de-DE": {
          singular: "Ihr Konto kann bis zu {count} benutzerdefinierte Widgets haben. Entfernen Sie ein vorhandenes Widget, um ein neues zu erstellen, oder kontaktieren Sie den Vertrieb, um ein höheres Limit anzufordern."
        },
        "fr-FR": {
          singular: "Votre compte peut contenir jusqu'à {count} widgets personnalisés. Supprimez un widget existant pour en créer un nouveau, ou contactez le service commercial pour demander une augmentation de la limite."
        },
        "ja-JP": {
          singular: "お使いのアカウントでは最大で {count} 個のカスタムウィジェットを保持できます。新しいウィジェットを作成するには既存のウィジェットを削除するか、上限の引き上げを希望する場合は営業までお問い合わせください。"
        },
        "ko-KR": {
          singular: "계정에는 최대 {count}개의 맞춤형 위젯을 보유할 수 있습니다. 새 위젯을 만들려면 기존 위젯을 제거하거나, 더 높은 한도를 원하시면 영업팀에 문의하세요."
        },
        "pt-BR": {
          singular: "Sua conta pode ter até {count} widgets personalizados. Remova um widget existente para criar um novo, ou entre em contato com a equipe de vendas para solicitar um limite maior."
        },
        "zh-CN": {
          singular: "您的账户最多可以有 {count} 个自定义组件. 删除现有组件以创建新的, 或联系销售以申请更高的配额."
        }
      }
    }),
    _v256 = (0, _v30.translate)({
      singular: "Contact sales",
      dictionary: {
        es: {
          singular: "Comunicarse con Ventas"
        },
        "de-DE": {
          singular: "Sales-Team kontaktieren"
        },
        "fr-FR": {
          singular: "Service commercial"
        },
        "ja-JP": {
          singular: "営業チームへ問い合わせる"
        },
        "ko-KR": {
          singular: "영업팀에 문의"
        },
        "pt-BR": {
          singular: "Falar com vendas"
        },
        "zh-CN": {
          singular: "联系销售"
        }
      }
    }),
    _v257 = "56.25rem",
    _v258 = "20rem",
    _v259 = _v0 => {
      let _v1 = _v0.toISO();
      if (null === _v1) throw Error("Failed to serialize DateTime to ISO string");
      return _v1;
    },
    _v260 = (_v0, _v1) => ({
      from: _v259(_v0.startOf("day")),
      to: _v259(_v1.endOf("day"))
    }),
    _v261 = _v0 => "string" == typeof _v0 && _v0.length >= 10 ? _v0.slice(0, 10) : null,
    _v262 = ({
      spec: _v0,
      userId: _v1,
      range: _v2,
      datasetAccess: _v3,
      isSaving: _v4,
      isAtWidgetLimit: _v5,
      savedWidget: _v6,
      error: _v7,
      onSave: _v8,
      onRenameWidget: _v9,
      onDeleteWidget: _v10
    }) => {
      let _v11 = (0, _v47.useToast)(),
        _v12 = (0, _v4.useMemo)(() => ((_v0 = _v121.DateTime.utc()) => {
          let _v1 = _v0 => _v260(_v0.minus({
            days: _v0
          }), _v0);
          return [{
            value: "today",
            label: _v190.T_TODAY,
            range: _v260(_v0, _v0)
          }, {
            value: "yesterday",
            label: _v190.T_YESTERDAY,
            range: _v260(_v0.minus({
              days: 1
            }), _v0.minus({
              days: 1
            }))
          }, {
            value: "last_7",
            label: (0, _v190.T_LAST_N_DAYS)(7),
            range: _v1(7)
          }, {
            value: "last_30",
            label: (0, _v190.T_LAST_N_DAYS)(30),
            range: _v1(30)
          }];
        })(), []),
        [_v13, _v14] = (0, _v4.useState)(() => _v2 ?? _v12[3].range),
        _v15 = (0, _v4.useMemo)(() => ({
          chartType: _v0.chartType,
          dataset: _v0.dataset,
          where: {
            userId: _v1
          },
          spec: _v0.query
        }), [_v1, _v0]),
        _v16 = _v3[_v0.dataset],
        {
          isLoading: _v17,
          isError: _v18,
          isPermissionError: _v19,
          data: _v20,
          export: _v21,
          refresh: _v22,
          share: _v23,
          supportedChartType: _v24
        } = _v238({
          query: _v15,
          range: _v13,
          enabled: "denied" !== _v16,
          surface: "preview",
          widgetId: _v6?.id ?? null
        }),
        _v25 = null !== _v20 && _v20.rows.length > 0,
        _v26 = (0, _v4.useCallback)(_v0 => {
          let _v1 = _v261(_v0.from),
            _v2 = _v261(_v0.to);
          if (null === _v1 || null === _v2) return null;
          let _v3 = _v12.find(_v0 => _v261(_v0.range.from) === _v1 && _v261(_v0.range.to) === _v2);
          return _v3?.value ?? null;
        }, [_v12])(_v13),
        _v27 = _v12.map(_v0 => ({
          label: _v0.label,
          value: _v0.value
        })),
        _v28 = _v6?.title ?? _v0.title,
        _v29 = _v6?.note ?? _v0.note;
      return (0, _v3.jsxs)(_v3.Fragment, {
        children: [(0, _v3.jsx)(_v79.ModalHeader, {
          paddingTop: "1.5rem",
          paddingX: "1.5rem",
          paddingBottom: "1rem",
          children: (0, _v3.jsxs)(_v6.Flex, {
            direction: "column",
            gap: "4px",
            children: [(0, _v3.jsx)(_v39.Header, {
              size: "md",
              children: _v28
            }), null !== _v29 && "" !== _v29 && (0, _v3.jsx)(_v46.Text, {
              variant: "body-md",
              color: "text-secondary",
              noOfLines: 3,
              children: _v29
            })]
          })
        }), (0, _v3.jsx)(_v76.ModalBody, {
          paddingTop: "0rem",
          paddingX: "1.5rem",
          paddingBottom: "1.5rem",
          display: "flex",
          children: (0, _v3.jsxs)(_v6.Flex, {
            direction: "column",
            gap: "1.5rem",
            flex: 1,
            minHeight: 0,
            children: [_v5 ? (0, _v3.jsxs)(_v105.AlertRoot, {
              backgroundColor: "status-caution-secondary",
              borderRadius: "lg",
              width: "100%",
              paddingLeft: "3",
              paddingRight: "2",
              paddingY: "2",
              gap: "2",
              alignItems: "center",
              children: [(0, _v3.jsx)(_v122.AlertIcon, {
                children: (0, _v3.jsx)(_v127.CircleExclamationFilled, {
                  color: "status-caution-primary"
                })
              }), (0, _v3.jsxs)(_v6.Flex, {
                flex: 1,
                alignItems: "center",
                gap: "2",
                children: [(0, _v3.jsxs)(_v6.Flex, {
                  direction: "column",
                  flex: 1,
                  children: [(0, _v3.jsx)(_v107.AlertTitle, {
                    color: "text-primary",
                    fontSize: "heading-xs",
                    lineHeight: "1.4",
                    children: _v254
                  }), (0, _v3.jsx)(_v106.AlertDescription, {
                    color: "text-primary",
                    fontSize: "body-sm",
                    lineHeight: "1.2",
                    children: _v255
                  })]
                }), (0, _v3.jsx)(_v74.Button, {
                  as: "a",
                  href: "/enterprise/contact-us",
                  variant: "secondary",
                  background: "input-fill",
                  size: "sm",
                  flexShrink: 0,
                  children: _v256
                })]
              })]
            }) : null, (0, _v3.jsxs)(_v6.Flex, {
              justifyContent: "space-between",
              alignItems: "center",
              gap: "4px",
              children: [(0, _v3.jsx)(_v5.Box, {
                width: _v258,
                flexShrink: 0,
                children: (0, _v3.jsx)(_v124.Select, {
                  size: "sm",
                  leftIcon: (0, _v3.jsx)(_v126.Calendar, {}),
                  items: _v27,
                  value: null !== _v26 ? [_v26] : [],
                  onValueChange: _v0 => {
                    let _v1 = _v12.find(_v0 => _v0.value === _v0.value[0]);
                    void 0 !== _v1 && _v14(_v1.range);
                  }
                })
              }), (0, _v3.jsxs)(_v6.Flex, {
                alignItems: "center",
                gap: "4px",
                children: [(0, _v3.jsx)(_v125.Tooltip, {
                  label: _v241,
                  placement: "bottom",
                  children: (0, _v3.jsx)(_v40.IconButton, {
                    size: "sm",
                    variant: "tertiary",
                    "aria-label": _v241,
                    icon: (0, _v3.jsx)(_v52.Replay, {
                      transform: "scaleX(-1)"
                    }),
                    isDisabled: !_v25 || _v17,
                    onClick: _v22
                  })
                }), (0, _v3.jsx)(_v38.Divider, {
                  orientation: "vertical",
                  height: "0.75rem"
                }), (0, _v3.jsxs)(_v6.Flex, {
                  alignItems: "center",
                  gap: "12px",
                  children: [(0, _v3.jsxs)(_v6.Flex, {
                    alignItems: "center",
                    gap: "4px",
                    children: [(0, _v3.jsx)(_v125.Tooltip, {
                      label: _v242,
                      placement: "bottom",
                      children: (0, _v3.jsx)(_v40.IconButton, {
                        size: "sm",
                        variant: "tertiary",
                        "aria-label": _v242,
                        icon: (0, _v3.jsx)(_v48.DownloadImport, {}),
                        isDisabled: !_v25,
                        onClick: () => {
                          _v21(), _v11({
                            title: _v246
                          });
                        }
                      })
                    }), (0, _v3.jsx)(_v125.Tooltip, {
                      label: _v243,
                      placement: "bottom",
                      children: (0, _v3.jsx)(_v40.IconButton, {
                        size: "sm",
                        variant: "tertiary",
                        "aria-label": _v243,
                        icon: (0, _v3.jsx)(_v54, {}),
                        isDisabled: !_v25,
                        onClick: () => {
                          _v23({
                            title: _v6?.title ?? _v0.title,
                            note: _v6?.note ?? _v0.note
                          }).then(_v0 => {
                            _v0 && _v11({
                              title: _v247
                            });
                          });
                        }
                      })
                    })]
                  }), null !== _v6 ? (0, _v3.jsxs)(_v3.Fragment, {
                    children: [(0, _v3.jsx)(_v125.Tooltip, {
                      label: _v244,
                      placement: "bottom",
                      children: (0, _v3.jsx)(_v40.IconButton, {
                        size: "sm",
                        variant: "tertiary",
                        "aria-label": _v244,
                        icon: (0, _v3.jsx)(_v49.EditPencil, {}),
                        onClick: () => _v9(_v6)
                      })
                    }), (0, _v3.jsx)(_v125.Tooltip, {
                      label: _v245,
                      placement: "bottom",
                      children: (0, _v3.jsx)(_v40.IconButton, {
                        size: "sm",
                        variant: "tertiary",
                        "aria-label": _v245,
                        icon: (0, _v3.jsx)(_v55.TrashBin, {}),
                        onClick: () => _v10(_v6)
                      })
                    })]
                  }) : void 0 !== _v8 && (0, _v3.jsx)(_v74.Button, {
                    size: "sm",
                    variant: "primary",
                    onClick: () => _v8(_v0),
                    isDisabled: _v4 || _v17 || _v5,
                    children: _v4 ? _v240 : _v239
                  })]
                })]
              })]
            }), null !== _v0.description && "" !== _v0.description && (0, _v3.jsx)(_v46.Text, {
              variant: "body-md",
              color: "text-secondary",
              noOfLines: 3,
              children: _v0.description
            }), (0, _v3.jsx)(_v143, {
              spec: _v0.query
            }), (0, _v3.jsx)(_v5.Box, {
              flex: 1,
              minHeight: 0,
              children: "denied" === _v16 || _v19 ? (0, _v3.jsx)(_v104, {}) : _v17 ? (0, _v3.jsx)(_v45.Skeleton, {
                height: "100%",
                borderRadius: "md"
              }) : _v18 ? (0, _v3.jsx)(_v6.Flex, {
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                children: (0, _v3.jsx)(_v46.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  children: _v249
                })
              }) : null !== _v20 && _v25 ? null === _v24 ? (0, _v3.jsx)(_v6.Flex, {
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                children: (0, _v3.jsx)(_v46.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  children: _v250
                })
              }) : (0, _v3.jsx)(_v189, {
                chartType: _v24,
                data: _v20
              }) : (0, _v3.jsx)(_v6.Flex, {
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                children: (0, _v3.jsx)(_v46.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  children: _v248
                })
              })
            })]
          })
        }), null !== _v7 && (0, _v3.jsx)(_v6.Flex, {
          paddingX: "1.5rem",
          paddingBottom: "1rem",
          children: (0, _v3.jsx)(_v46.Text, {
            variant: "body-md",
            color: "text-error",
            children: _v7
          })
        })]
      });
    },
    _v263 = () => (0, _v3.jsxs)(_v3.Fragment, {
      children: [(0, _v3.jsx)(_v79.ModalHeader, {
        paddingTop: "1.5rem",
        paddingX: "1.5rem",
        paddingBottom: "1rem",
        children: (0, _v3.jsx)(_v6.Flex, {
          direction: "column",
          gap: "4px",
          flex: 1,
          children: (0, _v3.jsx)(_v45.Skeleton, {
            height: "1.75rem",
            width: "17.0625rem",
            borderRadius: "12px"
          })
        })
      }), (0, _v3.jsx)(_v76.ModalBody, {
        paddingTop: "0rem",
        paddingX: "1.5rem",
        paddingBottom: "1.5rem",
        display: "flex",
        children: (0, _v3.jsxs)(_v6.Flex, {
          direction: "column",
          gap: "1.5rem",
          flex: 1,
          minHeight: 0,
          children: [(0, _v3.jsx)(_v6.Flex, {
            justifyContent: "space-between",
            alignItems: "center",
            gap: "4px",
            children: (0, _v3.jsx)(_v45.Skeleton, {
              height: "2rem",
              width: _v258,
              borderRadius: "12px"
            })
          }), (0, _v3.jsx)(_v45.Skeleton, {
            height: "1.25rem",
            width: "34rem",
            borderRadius: "12px"
          }), (0, _v3.jsx)(_v45.Skeleton, {
            height: "1.5rem",
            width: "26rem",
            borderRadius: "12px"
          }), (0, _v3.jsx)(_v5.Box, {
            flex: 1,
            minHeight: 0,
            children: (0, _v3.jsx)(_v45.Skeleton, {
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              "data-testid": "skeleton-chart"
            })
          })]
        })
      })]
    }),
    _v264 = "30rem",
    _v265 = ({
      text: _v0,
      onClick: _v1
    }) => (0, _v3.jsxs)(_v6.Flex, {
      as: "button",
      type: "button",
      width: "100%",
      alignItems: "center",
      gap: "6px",
      paddingX: "3",
      paddingY: "2",
      borderRadius: "md",
      backgroundColor: "fill-component-subtle",
      sx: {
        "&:hover": {
          backgroundColor: "fill-component"
        }
      },
      cursor: "pointer",
      onClick: _v1,
      children: [(0, _v3.jsx)(_v46.Text, {
        variant: "body-md",
        flex: 1,
        textAlign: "start",
        noOfLines: 2,
        children: _v0
      }), (0, _v3.jsx)(_v89.ArrowRight, {
        boxSize: "1.25rem",
        color: "text-primary",
        flexShrink: 0
      })]
    }),
    _v266 = ({
      suggestions: _v0,
      onTrySuggestion: _v1
    }) => (0, _v3.jsx)(_v76.ModalBody, {
      paddingTop: "0rem",
      paddingX: "1.5rem",
      paddingBottom: "1.5rem",
      display: "flex",
      children: (0, _v3.jsxs)(_v6.Flex, {
        flex: 1,
        minHeight: 0,
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2xl",
        children: [(0, _v3.jsxs)(_v6.Flex, {
          direction: "column",
          alignItems: "center",
          gap: "2",
          maxWidth: _v264,
          children: [(0, _v3.jsx)(_v39.Header, {
            size: "md",
            children: _v251
          }), (0, _v3.jsx)(_v46.Text, {
            variant: "body-md",
            color: "text-secondary",
            textAlign: "center",
            children: _v252
          })]
        }), (0, _v3.jsxs)(_v6.Flex, {
          direction: "column",
          alignItems: "center",
          gap: "3",
          width: _v264,
          maxWidth: "100%",
          children: [(0, _v3.jsxs)(_v6.Flex, {
            alignItems: "center",
            gap: "1",
            paddingX: "1",
            children: [(0, _v3.jsx)(_v108.AiSparkles, {
              boxSize: "1.25rem",
              color: "text-secondary"
            }), (0, _v3.jsx)(_v46.Text, {
              variant: "heading-xs",
              color: "text-secondary",
              children: _v253
            })]
          }), (0, _v3.jsx)(_v6.Flex, {
            direction: "column",
            gap: "2",
            width: "100%",
            alignItems: "center",
            children: _v0.map(_v0 => (0, _v3.jsx)(_v265, {
              text: _v0,
              onClick: () => _v1(_v0)
            }, _v0))
          })]
        })]
      })
    }),
    _v267 = ({
      message: _v0
    }) => (0, _v3.jsx)(_v76.ModalBody, {
      paddingTop: "0rem",
      paddingX: "1.5rem",
      paddingBottom: "1.5rem",
      display: "flex",
      children: (0, _v3.jsx)(_v6.Flex, {
        flex: 1,
        minHeight: 0,
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        children: (0, _v3.jsx)(_v46.Text, {
          variant: "body-md",
          color: "text-error",
          textAlign: "center",
          children: _v0
        })
      })
    }),
    _v268 = ({
      spec: _v0,
      isLoading: _v1,
      notSupportedSuggestions: _v2,
      onTrySuggestion: _v3,
      onClose: _v4,
      onSave: _v5,
      error: _v6,
      ..._v7
    }) => {
      let _v8 = null === _v0 && !_v1 && null === _v2 && null !== _v6;
      return null !== _v0 || _v1 || null !== _v2 || _v8 ? (0, _v3.jsxs)(_v75.Modal, {
        isOpen: !0,
        onClose: _v4,
        size: "xl",
        isCentered: !0,
        scrollBehavior: "inside",
        autoFocus: !1,
        children: [(0, _v3.jsx)(_v80.ModalOverlay, {}), (0, _v3.jsxs)(_v77.ModalContent, {
          width: _v257,
          maxWidth: _v257,
          height: "35rem",
          borderRadius: "lg",
          overflow: "hidden",
          "data-testid": null === _v0 ? null !== _v2 ? "preview-modal-not-supported" : _v8 ? "preview-modal-error" : "preview-modal-loading" : void 0,
          children: [(0, _v3.jsx)(_v123.ModalCloseButton, {
            size: "md",
            onClick: _v4
          }), null !== _v2 ? (0, _v3.jsx)(_v266, {
            suggestions: _v2,
            onTrySuggestion: _v3
          }) : _v8 ? (0, _v3.jsx)(_v267, {
            message: _v6
          }) : null === _v0 ? (0, _v3.jsx)(_v263, {}) : (0, _v3.jsx)(_v262, {
            spec: _v0,
            error: _v6,
            onSave: _v5,
            ..._v7
          })]
        })]
      }) : null;
    },
    _v269 = "30rem",
    _v270 = (0, _v30.translate)({
      singular: "Remove widget from custom analytics",
      dictionary: {
        es: {
          singular: "Eliminar widget de analíticas personalizadas"
        },
        "de-DE": {
          singular: "Widget aus den benutzerdefinierten Analytics entfernen"
        },
        "fr-FR": {
          singular: "Retirer le widget des analyses personnalisées"
        },
        "ja-JP": {
          singular: "ウィジェットをカスタム分析から削除"
        },
        "ko-KR": {
          singular: "위젯을 맞춤형 분석에서 제거"
        },
        "pt-BR": {
          singular: "Remover widget do painel de análises personalizado"
        },
        "zh-CN": {
          singular: "从自定义分析中移除小部件"
        }
      }
    }),
    _v271 = (0, _v30.translate)({
      singular: "This widget will be removed from your custom analytics dashboard. You can always generate and add it again later.",
      dictionary: {
        es: {
          singular: "Este widget se eliminará de tu panel de analíticas personalizado. Siempre puedes generarlo y añadirlo de nuevo más tarde."
        },
        "de-DE": {
          singular: "Dieses Widget wird aus Ihrem benutzerdefinierten Analytics-Dashboard entfernt. Sie können es jederzeit erneut generieren und hinzufügen."
        },
        "fr-FR": {
          singular: "Ce widget sera retiré de votre tableau de bord d'analyses personnalisées. Vous pouvez toujours le générer et l'ajouter de nouveau plus tard."
        },
        "ja-JP": {
          singular: "このウィジェットはカスタム分析ダッシュボードから削除されます。後でいつでも再生成して追加できます。"
        },
        "ko-KR": {
          singular: "이 위젯은 맞춤형 분석 대시보드에서 제거됩니다. 언제든지 다시 생성하여 추가할 수 있습니다."
        },
        "pt-BR": {
          singular: "Este widget será removido do seu painel de análises personalizado. Você sempre pode gerá-lo e adicioná-lo novamente mais tarde."
        },
        "zh-CN": {
          singular: "此小部件将从您的自定义分析仪表板中移除。您可以随时重新生成并添加它。"
        }
      }
    }),
    _v272 = (0, _v30.translate)({
      singular: "Cancel",
      dictionary: {
        es: {
          singular: "Cancelar"
        },
        "de-DE": {
          singular: "Abbrechen"
        },
        "fr-FR": {
          singular: "Annuler"
        },
        "ja-JP": {
          singular: "キャンセル"
        },
        "ko-KR": {
          singular: "취소"
        },
        "pt-BR": {
          singular: "Cancelar"
        },
        "zh-CN": {
          singular: "取消"
        }
      }
    }),
    _v273 = (0, _v30.translate)({
      singular: "Remove widget",
      dictionary: {
        es: {
          singular: "Eliminar widget"
        },
        "de-DE": {
          singular: "Widget entfernen"
        },
        "fr-FR": {
          singular: "Supprimer le widget"
        },
        "ja-JP": {
          singular: "ウィジェットを削除"
        },
        "ko-KR": {
          singular: "위젯 제거"
        },
        "pt-BR": {
          singular: "Remover widget"
        },
        "zh-CN": {
          singular: "移除小部件"
        }
      }
    }),
    _v274 = ({
      isOpen: _v0,
      onConfirm: _v1,
      onClose: _v2
    }) => (0, _v3.jsxs)(_v75.Modal, {
      isOpen: _v0,
      onClose: _v2,
      size: "sm",
      isCentered: !0,
      children: [(0, _v3.jsx)(_v80.ModalOverlay, {}), (0, _v3.jsxs)(_v77.ModalContent, {
        width: _v269,
        maxWidth: _v269,
        borderRadius: "xl",
        overflow: "hidden",
        children: [(0, _v3.jsx)(_v79.ModalHeader, {
          paddingTop: "1.5rem",
          paddingX: "1.5rem",
          paddingBottom: "1rem",
          children: _v270
        }), (0, _v3.jsx)(_v76.ModalBody, {
          paddingX: "1.5rem",
          children: (0, _v3.jsx)(_v46.Text, {
            variant: "body-md",
            children: _v271
          })
        }), (0, _v3.jsxs)(_v78.ModalFooter, {
          paddingTop: "1rem",
          paddingBottom: "1.5rem",
          children: [(0, _v3.jsx)(_v74.Button, {
            variant: "tertiary",
            onClick: _v2,
            children: _v272
          }), (0, _v3.jsx)(_v74.Button, {
            variant: "primary",
            onClick: _v1,
            children: _v273
          })]
        })]
      })]
    });
  var _v275 = _v0.i(0),
    _v276 = _v0.i(0);
  let _v277 = "30rem",
    _v278 = (0, _v30.translate)({
      singular: "Rename widget",
      dictionary: {
        es: {
          singular: "Renombrar widget"
        },
        "de-DE": {
          singular: "Widget umbenennen"
        },
        "fr-FR": {
          singular: "Renommer le widget"
        },
        "ja-JP": {
          singular: "ウィジェットの名前を変更"
        },
        "ko-KR": {
          singular: "위젯 이름 변경"
        },
        "pt-BR": {
          singular: "Renomear widget"
        },
        "zh-CN": {
          singular: "重命名小部件"
        }
      }
    }),
    _v279 = (0, _v30.translate)({
      singular: "Name",
      dictionary: {
        es: {
          singular: "Nombre"
        },
        "fr-FR": {
          singular: "Nom"
        },
        "ja-JP": {
          singular: "名前"
        },
        "ko-KR": {
          singular: "이름"
        },
        "pt-BR": {
          singular: "Nome"
        },
        "zh-CN": {
          singular: "姓名"
        }
      }
    }),
    _v280 = (0, _v30.translate)({
      singular: "Cancel",
      dictionary: {
        es: {
          singular: "Cancelar"
        },
        "de-DE": {
          singular: "Abbrechen"
        },
        "fr-FR": {
          singular: "Annuler"
        },
        "ja-JP": {
          singular: "キャンセル"
        },
        "ko-KR": {
          singular: "취소"
        },
        "pt-BR": {
          singular: "Cancelar"
        },
        "zh-CN": {
          singular: "取消"
        }
      }
    }),
    _v281 = (0, _v30.translate)({
      singular: "Save",
      dictionary: {
        es: {
          singular: "Guardar"
        },
        "de-DE": {
          singular: "Speichern"
        },
        "fr-FR": {
          singular: "Enregistrer"
        },
        "ja-JP": {
          singular: "保存"
        },
        "ko-KR": {
          singular: "저장"
        },
        "pt-BR": {
          singular: "Salvar"
        },
        "zh-CN": {
          singular: "保存"
        }
      }
    }),
    _v282 = ({
      isOpen: _v0,
      currentTitle: _v1,
      isSaving: _v2,
      error: _v3,
      onSave: _v4,
      onClose: _v5
    }) => {
      let [_v6, _v7] = (0, _v4.useState)(_v1);
      if (!_v0) return null;
      let _v8 = _v6.trim();
      return (0, _v3.jsxs)(_v75.Modal, {
        isOpen: !0,
        onClose: _v5,
        size: "sm",
        isCentered: !0,
        children: [(0, _v3.jsx)(_v80.ModalOverlay, {}), (0, _v3.jsxs)(_v77.ModalContent, {
          width: _v277,
          maxWidth: _v277,
          borderRadius: "xl",
          overflow: "hidden",
          children: [(0, _v3.jsx)(_v79.ModalHeader, {
            paddingTop: "1.5rem",
            paddingX: "1.5rem",
            paddingBottom: "1rem",
            children: _v278
          }), (0, _v3.jsx)(_v76.ModalBody, {
            paddingX: "1.5rem",
            children: (0, _v3.jsxs)(_v275.FormControl, {
              children: [(0, _v3.jsx)(_v276.FormLabel, {
                children: _v279
              }), (0, _v3.jsx)(_v92.Input, {
                value: _v6,
                onChange: _v0 => _v7(_v0.target.value),
                maxLength: 255
              })]
            })
          }), (0, _v3.jsxs)(_v78.ModalFooter, {
            paddingTop: "1rem",
            paddingBottom: "1.5rem",
            children: [(0, _v3.jsx)(_v74.Button, {
              variant: "tertiary",
              onClick: _v5,
              children: _v280
            }), (0, _v3.jsx)(_v74.Button, {
              variant: "primary",
              isDisabled: _v2 || "" === _v8 || _v8 === _v1,
              onClick: () => _v4(_v8),
              children: _v281
            })]
          }), null !== _v3 && (0, _v3.jsx)(_v5.Box, {
            paddingX: "1.5rem",
            paddingBottom: "1rem",
            children: (0, _v3.jsx)(_v46.Text, {
              variant: "body-md",
              color: "text-error",
              children: _v3
            })
          })]
        })]
      });
    };
  var _v283 = _v0.i(0),
    _v284 = _v0.i(0);
  let _v285 = ["canViewBandwidthAnalyticsReports", "hasTeamAnalytics"],
    _v286 = new Set(Object.values(_v283.TeamRole)),
    _v287 = new Set([_v283.TeamRole.Owner, _v283.TeamRole.Admin, _v283.TeamRole.Contributor, _v283.TeamRole["Contributor Plus"]]),
    _v288 = new Set([_v283.TeamRole.Owner, _v283.TeamRole.Admin]),
    _v289 = _v0 => null === _v0 ? "unknown" : _v287.has(_v0) ? "allowed" : "denied",
    _v290 = (_v0, _v1, _v2) => !0 === _v0 ? "allowed" : _v2 || null !== _v1 && !_v288.has(_v1) ? "denied" : "unknown";
  var _v291 = _v0.i(0),
    _v292 = _v0.i(0),
    _v293 = _v0.i(0),
    _v294 = _v0.i(0),
    _v295 = _v0.i(0),
    _v296 = _v0.i(0),
    _v297 = _v0.i(0),
    _v298 = _v0.i(0),
    _v299 = _v0.i(0),
    _v300 = _v0.i(0),
    _v301 = _v0.i(0),
    _v302 = _v0.i(0),
    _v303 = _v0.i(0),
    _v304 = _v0.i(0),
    _v305 = _v0.i(0),
    _v306 = _v0.i(0),
    _v307 = _v0.i(0),
    _v308 = _v0.i(0),
    _v309 = ((_v1 = {})[_v1.TEXT = 0] = "TEXT", _v1[_v1.VIDEO = 1] = "VIDEO", _v1[_v1.FOLDER = 2] = "FOLDER", _v1[_v1.UNKNOWN = 3] = "UNKNOWN", _v1),
    _v310 = ((_v2 = {})[_v2.ROOT_FOLDER = 0] = "ROOT_FOLDER", _v2[_v2.NAVIGATION = 1] = "NAVIGATION", _v2[_v2.SEARCH = 2] = "SEARCH", _v2),
    _v311 = _v0.i(0),
    _v312 = _v0.i(0);
  async function _v313({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      projectId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v59.measureLatency)("getUserProjectVideos", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/projects/${_v3}/videos?${(0, _v60.searchQueryString)(_v4)}&fields=${_v1.map(_v60.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v60.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v60.deepCamelCase)(_v1);
    });
  }
  async function _v314({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2,
      projectId: _v3
    },
    ..._v4
  }) {
    return (0, _v59.measureLatency)("putUserProjectVideos", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/projects/${_v3}/videos`, {
        ..._v4,
        method: "PUT",
        body: JSON.stringify((0, _v60.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v60.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v60.deepCamelCase)(_v1);
    });
  }
  async function _v315({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2,
      projectId: _v3
    },
    ..._v4
  }) {
    return (0, _v59.measureLatency)("deleteUserProjectVideos", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/projects/${_v3}/videos`, {
        ..._v4,
        method: "DELETE",
        body: JSON.stringify((0, _v60.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v60.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v60.deepCamelCase)(_v1);
    });
  }
  function _v316(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v63.useGctlConfig)();
    return (0, _v71.default)(_v2 ? `/users/${_v2.where.userId}/projects/${_v2.where.projectId}/videos${(0, _v58.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v313({
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
  "true" === _v57.default.env.STORYBOOK && (0, _v58.assignMswData)(_v316, {
    endpoint: "/users/:userId/projects/:projectId/videos",
    method: "GET"
  }), "true" === _v57.default.env.STORYBOOK && (0, _v58.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v62.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v63.useGctlConfig)(),
      [_v5, _v6] = (0, _v58.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/projects/${_v0.where.projectId}/videos${(0, _v58.serializeQuery)(_v0)}`, _v313({
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
    endpoint: "/users/:userId/projects/:projectId/videos",
    method: "GET"
  }), "true" === _v57.default.env.STORYBOOK && (0, _v58.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v63.useGctlConfig)();
    return (0, _v195.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/projects/${_v2.where.projectId}/videos?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v313({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/projects/:projectId/videos",
    method: "GET"
  }), "true" === _v57.default.env.STORYBOOK && (0, _v58.assignMswData)(function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v63.useGctlConfig)(),
      [_v4, _v5] = (0, _v58.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v314({
          ..._v0,
          baseUrl: _v0,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        });
        _v5({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v5({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v0, _v2, _v1, _v3, _v5]), _v4];
  }, {
    endpoint: "/users/:userId/projects/:projectId/videos",
    method: "PUT"
  }), "true" === _v57.default.env.STORYBOOK && (0, _v58.assignMswData)(function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v63.useGctlConfig)(),
      [_v4, _v5] = (0, _v58.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v315({
          ..._v0,
          baseUrl: _v0,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        });
        _v5({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v5({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v0, _v2, _v1, _v3, _v5]), _v4];
  }, {
    endpoint: "/users/:userId/projects/:projectId/videos",
    method: "DELETE"
  });
  var _v317 = _v0.i(0);
  let _v318 = _v0 => {
    let {
        variant: _v1,
        textToDisplay: _v2,
        type: _v3,
        numberOfItems: _v4,
        isLoading: _v5,
        isError: _v6,
        isSelectedItem: _v7
      } = _v0,
      _v8 = void 0 !== _v4 && _v3 === _v309.FOLDER;
    return (0, _v3.jsxs)(_v3.Fragment, {
      children: [_v7 && (0, _v3.jsx)(_v5.Box, {
        minWidth: "1.75rem",
        width: "1.75rem",
        children: _v3 === _v309.FOLDER ? (0, _v3.jsx)(_v312.Folder, {
          boxSize: "1.5rem",
          color: "text-primary"
        }) : (0, _v3.jsx)(_v317.Video, {
          boxSize: "1.5rem",
          color: "text-primary"
        })
      }), (0, _v3.jsxs)(_v6.Flex, {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        flexGrow: "1",
        title: "sm" === _v1 ? _v2 : "",
        children: [(0, _v3.jsx)(_v46.Text, {
          marginLeft: "1rem",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          display: "inline-block",
          overflow: "hidden",
          maxWidth: "lg" === _v1 ? "15rem" : "9rem",
          fontSize: "0.875rem",
          color: "text-primary",
          variant: "body-xl",
          children: _v2
        }), _v8 && (0, _v3.jsx)(_v3.Fragment, {
          children: _v5 ? (0, _v3.jsx)(_v45.Skeleton, {
            height: "1rem",
            width: "4.5rem",
            borderRadius: "3px",
            marginLeft: "1rem",
            marginBottom: "-1px"
          }) : (0, _v3.jsx)(_v46.Text, {
            marginLeft: "1rem",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            display: "inline-block",
            overflow: "hidden",
            maxWidth: _v6 ? "11rem" : "9rem",
            fontSize: "0.625rem",
            color: "text-secondary",
            variant: "body-xl",
            children: _v6 ? (0, _v30.translate)({
              singular: "Unable to load. Try again later.",
              dictionary: {
                es: {
                  singular: "No se pudo cargar. Vuelve a intentarlo más tarde."
                },
                "de-DE": {
                  singular: "Kann nicht geladen werden. Versuche es später noch einmal."
                },
                "fr-FR": {
                  singular: "Impossible de charger. Veuillez réessayer plus tard."
                },
                "ja-JP": {
                  singular: "読み込めません。しばらくしてから、再試行してください。"
                },
                "ko-KR": {
                  singular: "로드할 수 없습니다. 나중에 다시 시도하세요."
                },
                "pt-BR": {
                  singular: "Não foi possível carregar. Tente novamente mais tarde."
                },
                "zh-CN": {
                  singular: "无法加载。稍后再试。"
                }
              }
            }) : (0, _v30.translate)({
              singular: "{ITEMS} video",
              plural: "{ITEMS} videos",
              count: _v4,
              replacements: {
                ITEMS: _v4
              },
              dictionary: {
                "de-DE": {
                  singular: "{ITEMS} Video",
                  plural: "{ITEMS} Videos"
                },
                "fr-FR": {
                  singular: "{ITEMS} vidéo",
                  plural: "{ITEMS} vidéos"
                },
                "ja-JP": {
                  singular: "{ITEMS} 件の動画",
                  plural: "{ITEMS}件の動画"
                },
                "ko-KR": {
                  singular: "동영상 {ITEMS}개",
                  plural: "동영상 {ITEMS}개"
                },
                "pt-BR": {
                  singular: "{ITEMS} vídeo",
                  plural: "{ITEMS} vídeos"
                },
                "zh-CN": {
                  singular: "{ITEMS} 个视频",
                  plural: "{ITEMS} 个视频"
                }
              }
            })
          })
        })]
      })]
    });
  };
  var _v319 = _v0.i(0),
    _v320 = _v0.i(0),
    _v321 = _v0.i(0),
    _v322 = _v0.i(0);
  let _v323 = _v0 => !_v0 || (0, _v319.default)(_v0.data) ? [] : _v0.data.map(_v0 => {
      let _v1 = {
        type: (_v0 => {
          switch (_v0.toLowerCase()) {
            case "folder":
              return 2;
            case "video":
              return 1;
            case "text":
              return 0;
            default:
              return (0, _v308.logError)("Attempting Wrong ItemType Conversion", null, {
                type: _v0
              }), 3;
          }
        })(_v0.type)
      };
      return !(0, _v319.default)(_v0?.video) && _v0.video ? (_v1.name = _v0.video.name, _v1.thumbnailUrl = _v0.video.pictures?.sizes?.[0]?.link, _v1.videoUri = _v0.video.uri, _v1.canEdit = !!_v0.video.metadata?.interactions.edit) : !(0, _v319.default)(_v0?.folder) && _v0.folder ? (_v1.name = _v0.folder.name, _v1.folderUri = _v0.folder.uri, _v1.itemCount = _v0.folder.metadata?.connections?.items?.total, _v1.canEdit = !!_v0.folder.metadata?.interactions.edit) : (0, _v308.logError)("UnIdentified Type Objects are discovered while parsing Search API responses", null, {
        rawItem: JSON.stringify(_v0)
      }), _v1;
    }).filter(_v0 => _v0.type !== _v309.UNKNOWN),
    _v324 = ["type", "folder.name", "folder.uri", "folder.metadata.connections.items.total", "folder.metadata.interactions.edit", "video.name", "video.uri", "video.pictures", "video.metadata.interactions.edit"],
    _v325 = {
      excludePrivateToMe: !0,
      perPage: 25,
      sort: "date",
      direction: "desc"
    },
    _v326 = (_v0, _v1) => _v0?.folderUri === _v1?.folderUri && _v0?.videoUri === _v1?.videoUri,
    _v327 = ({
      videosSelectedCount: _v0,
      type: _v1,
      selectLimit: _v2,
      itemsCount: _v3,
      isSelected: _v4,
      canEdit: _v5
    }) => _v1 !== _v309.TEXT && (!_v5 || (_v1 === _v309.FOLDER ? _v0 === _v2 && !_v3 && !_v4 || _v0 + _v3 > _v2 && !_v4 : _v1 === _v309.VIDEO && _v0 + 1 > _v2 && !_v4)),
    _v328 = _v0 => {
      let {
          userId: _v1,
          selectedItems: _v2,
          itemObj: _v3,
          onCheckChange: _v4,
          onNavigateInside: _v5,
          videosSelectedCount: _v6,
          visibleItems: _v7,
          updateItemsListWithTotal: _v8
        } = _v0,
        {
          type: _v9,
          name: _v10,
          thumbnailUrl: _v11
        } = _v3,
        [_v12, _v13] = (0, _v4.useState)(!1),
        [_v14, _v15] = (0, _v4.useState)(0),
        {
          data: _v16,
          isValidating: _v17,
          error: _v18
        } = _v316(() => _v9 !== _v309.FOLDER ? null : {
          select: ["uri"],
          where: {
            userId: _v1,
            projectId: +(_v3.folderUri?.split("/")?.[4] ?? 0)
          },
          query: {
            includeSubfolders: !0,
            perPage: 1
          }
        }, {
          errorRetryCount: 1,
          errorRetryInterval: 0,
          revalidateOnFocus: !1,
          refreshInterval: 0
        });
      (0, _v4.useEffect)(() => {
        _v8({
          ..._v3,
          itemCount: _v16?.total ?? 0,
          isLoading: _v17
        }), _v15(_v16?.total ?? 0);
      }, [_v16, _v17]), (0, _v4.useEffect)(() => {
        let _v0 = !1;
        if (_v9 === _v309.TEXT && _v7) {
          let _v0 = _v7?.length && _v2.length && _v7?.filter(_v0 => _v327({
            videosSelectedCount: _v6,
            type: _v0.type,
            selectLimit: _v179.MAX_NO_OF_VIDEOS_FOR_NETWORK_TRANSFER,
            itemsCount: _v20 || 0,
            isSelected: _v2.findIndex(_v0 => _v326(_v0, _v0)) > -1,
            canEdit: _v0.canEdit ?? !1
          }) || _v2.findIndex(_v0 => _v326(_v0, _v0)) > -1);
          _v0 = 0 !== _v0 && _v0.length === _v7.length;
        } else _v0 = _v2.findIndex(_v0 => _v326(_v3, _v0)) > -1;
        _v13(_v0);
      }, [_v3, _v2, _v13, _v9, _v7]);
      let _v19 = () => {
          let _v0 = !_v12;
          _v13(_v0), _v4(_v0);
        },
        _v20 = _v14,
        _v21 = !!_v18,
        _v22 = _v9 === _v309.TEXT && _v7 && !!_v7.find(_v0 => _v0.isLoading),
        _v23 = _v21 || _v22 || _v17 || _v327({
          videosSelectedCount: _v6,
          type: _v3.type,
          selectLimit: _v179.MAX_NO_OF_VIDEOS_FOR_NETWORK_TRANSFER,
          itemsCount: _v20 || 0,
          isSelected: _v12,
          canEdit: _v3.canEdit ?? !1
        });
      return (0, _v3.jsxs)(_v6.Flex, {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        marginBottom: "1rem",
        minHeight: "2rem",
        _first: {
          marginBottom: "0.75rem"
        },
        children: [!_v23 || _v17 || _v21 ? (0, _v3.jsx)(_v311.Checkbox, {
          marginRight: "0.5rem",
          isDisabled: _v23,
          isChecked: _v12,
          onChange: _v19
        }) : (0, _v3.jsx)(_v125.Tooltip, {
          placement: "right-end",
          label: _v3.canEdit ? (0, _v30.translate)({
            singular: "Limit of {LIMIT} reached. Remove selections to add more.",
            replacements: {
              LIMIT: _v179.MAX_NO_OF_VIDEOS_FOR_NETWORK_TRANSFER.toString()
            },
            dictionary: {
              es: {
                singular: "Se alcanzó el límite de {LIMIT}. Elimina algunas selecciones para agregar más."
              },
              "de-DE": {
                singular: "Beschränkung von {LIMIT} erreicht. Entferne Markierungen, um mehr hinzuzufügen."
              },
              "fr-FR": {
                singular: "Limite de {LIMIT} atteinte. Supprimez des sélections pour en ajouter d'autres."
              },
              "ja-JP": {
                singular: "{LIMIT}件の上限に達しました。さらに追加するには、選択項目を削除してください。"
              },
              "ko-KR": {
                singular: "{LIMIT} 한도에 도달했습니다. 더 추가하려면 선택 항목을 제거하세요."
              },
              "pt-BR": {
                singular: "Limite de {LIMIT} atingido.  Remova seleções para adicionar mais."
              },
              "zh-CN": {
                singular: "达到限额 {LIMIT}。移除选择以添加更多。"
              }
            }
          }) : (_v0 => {
            switch (_v0) {
              case _v309.VIDEO:
                return (0, _v30.translate)({
                  singular: "You need access to view analytics for this video.",
                  dictionary: {
                    es: {
                      singular: "Necesitas acceso para ver el análisis de este video."
                    },
                    "de-DE": {
                      singular: "Du benötigst Zugriff, um die Analytik für dieses Video einzusehen."
                    },
                    "fr-FR": {
                      singular: "Vous devez disposer d'un accès pour consulter les statistiques de cette vidéo."
                    },
                    "ja-JP": {
                      singular: "この動画の分析内容を見るには、アクセス権が必要です。"
                    },
                    "ko-KR": {
                      singular: "이 동영상에 대한 분석을 보려면 액세스 권한이 필요합니다."
                    },
                    "pt-BR": {
                      singular: "Você precisa de acesso para visualizar as análises deste vídeo."
                    },
                    "zh-CN": {
                      singular: "您需要访问权限才能查看此视频的分析。"
                    }
                  }
                });
              case _v309.FOLDER:
                return (0, _v30.translate)({
                  singular: "You need access to view analytics for this folder.",
                  dictionary: {
                    es: {
                      singular: "Necesitas acceso para ver el análisis de esta carpeta."
                    },
                    "de-DE": {
                      singular: "Du benötigst Zugriff, um die Analytik für diesen Ordner einzusehen."
                    },
                    "fr-FR": {
                      singular: "Vous devez disposer d'un accès pour consulter les statistiques de ce dossier."
                    },
                    "ja-JP": {
                      singular: "このフォルダーの分析内容を見るには、アクセス権が必要です。"
                    },
                    "ko-KR": {
                      singular: "이 폴더에 대한 분석을 보려면 액세스 권한이 필요합니다."
                    },
                    "pt-BR": {
                      singular: "Você precisa de acesso para visualizar as análises desta pasta."
                    },
                    "zh-CN": {
                      singular: "您需要访问权限才能查看此文件夹的分析。"
                    }
                  }
                });
              default:
                return (0, _v308.logError)("Attempting to display disabled checkbox for invalid item", null, {
                  type: _v0
                }), (0, _v30.translate)({
                  singular: "Invalid item type please contact support",
                  dictionary: {
                    es: {
                      singular: "Tipo de elemento no válido, comunícate con el equipo de asistencia"
                    },
                    "de-DE": {
                      singular: "Ungültiger Elementtyp. Bitte wende dich an den Support."
                    },
                    "fr-FR": {
                      singular: "Type d'élément non valide. Veuillez contacter l'assistance"
                    },
                    "ja-JP": {
                      singular: "アイテムタイプが無効です。サポートまでご連絡ください。"
                    },
                    "ko-KR": {
                      singular: "잘못된 항목 유형은 지원팀에 문의하세요."
                    },
                    "pt-BR": {
                      singular: "Tipo de item inválido, entre em contato com o suporte"
                    },
                    "zh-CN": {
                      singular: "项目类型无效，请联系支持人员"
                    }
                  }
                });
            }
          })(_v3.type),
          children: (0, _v3.jsx)(_v5.Box, {
            as: "span",
            display: "inline-block",
            children: (0, _v3.jsx)(_v311.Checkbox, {
              marginTop: "0.25rem",
              marginRight: "0.5rem",
              isDisabled: _v23,
              isChecked: _v12,
              onChange: _v19
            })
          })
        }), (0, _v3.jsx)(_v5.Box, {
          flexGrow: "1",
          cursor: "pointer",
          onClick: () => _v5(),
          children: _v9 === _v309.TEXT ? (0, _v3.jsx)(_v5.Box, {
            as: "span",
            fontSize: "0.875rem",
            color: "text-primary",
            children: _v10
          }) : (0, _v3.jsxs)(_v6.Flex, {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "4rem",
            children: [_v11 ? (0, _v3.jsx)(_v5.Box, {
              background: `url(${_v11}) center`,
              minWidth: "6rem",
              width: "6rem",
              maxWidth: "6rem",
              height: "100%",
              borderRadius: "0.25rem",
              marginRight: "0"
            }) : (0, _v3.jsx)(_v6.Flex, {
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0.5rem",
              background: "fill-component",
              width: "6rem",
              height: "3.375rem",
              marginRight: "0",
              children: _v9 === _v309.VIDEO ? (0, _v3.jsx)(_v5.Box, {
                background: `url(${_v179.DEFAULT_VIDEO_THUMBNAIL})`,
                backgroundSize: "contain",
                height: "100%",
                width: "100%",
                borderRadius: "0.25rem"
              }) : (0, _v3.jsx)(_v312.Folder, {
                boxSize: "1.5rem",
                color: "text-primary"
              })
            }), (0, _v3.jsx)(_v318, {
              variant: "lg",
              type: _v9,
              textToDisplay: _v10,
              numberOfItems: _v14,
              isLoading: _v17,
              isError: _v21
            })]
          })
        })]
      });
    };
  var _v329 = _v0.i(0);
  let _v330 = _v0 => {
      let {
        textToDisplay: _v1,
        type: _v2,
        numberOfItems: _v3,
        onRemoveItem: _v4
      } = _v0;
      return (0, _v3.jsxs)(_v6.Flex, {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        marginBottom: "1rem",
        minHeight: "2rem",
        children: [(0, _v3.jsx)(_v318, {
          variant: "sm",
          type: _v2,
          textToDisplay: _v1,
          numberOfItems: _v3,
          isSelectedItem: !0
        }), (0, _v3.jsx)(_v5.Box, {
          justifySelf: "flex-end",
          _hover: {
            cursor: "pointer"
          },
          children: (0, _v3.jsx)(_v329.CloseX, {
            onClick: _v4,
            boxSize: "0.9rem",
            top: "-0.2rem",
            color: "text-primary"
          })
        })]
      });
    },
    _v331 = _v0 => {
      let _v1 = (0, _v4.useContext)(_v28.ViewerContext),
        {
          disabled: _v2,
          userInUse: _v3,
          dispatch: _v4,
          filterLists: _v5
        } = _v0,
        {
          trackAnalyticsContentFilterChanged: _v6
        } = (0, _v13.useAnalyticsTracking)(),
        _v7 = (0, _v4.useRef)(null),
        [_v8, _v9] = (0, _v4.useState)(!1),
        [_v10, _v11] = (0, _v4.useState)(!1),
        [_v12, _v13] = (0, _v4.useState)(""),
        _v14 = (0, _v307.useDebouncedValue)(_v12, 600),
        [_v15, _v16] = (0, _v4.useState)([]),
        [_v17, _v18] = (0, _v4.useState)([]),
        _v19 = (0, _v4.useMemo)(() => (_v5[_v299.Filters.CONTENT] ?? []).map(_v0 => ({
          name: _v0.name,
          type: _v0.type,
          itemCount: _v0.count,
          ...(_v0.type === _v309.FOLDER && {
            folderUri: _v0.uri
          }),
          ...(_v0.type === _v309.VIDEO && {
            videoUri: _v0.uri
          })
        })), [_v5]);
      (0, _v4.useEffect)(() => {
        _v18([..._v19]);
      }, [_v19]);
      let {
        isLoading: _v20,
        isError: _v21,
        isMoreDataAvailable: _v22,
        resultType: _v23,
        itemsList: _v24,
        setLoadMore: _v25,
        setItemsList: _v26,
        resetToSearchedResults: _v27
      } = ((_v0, _v1, _v2) => {
        let _v3,
          [_v4, _v5] = (0, _v4.useState)([]),
          [_v6, _v7] = (0, _v4.useState)(!1),
          [_v8, _v9] = (0, _v4.useState)(!1),
          [_v10, _v11] = (0, _v4.useState)(!1),
          [_v12, _v13] = (0, _v4.useState)(0),
          [_v14, _v15] = (0, _v4.useState)(0),
          [_v16, _v17] = (0, _v4.useState)(0),
          [_v18, _v19] = (0, _v4.useState)(null),
          {
            data: _v20,
            size: _v21,
            setSize: _v22,
            isValidating: _v23,
            error: _v24
          } = (0, _v320.useGetUserFoldersRootInfinite)((_v3 = _v1, {
            query: {
              ..._v325
            },
            where: {
              userId: _v3
            },
            select: [..._v324]
          }), {
            revalidateOnFocus: !1
          }),
          {
            data: _v25,
            size: _v26,
            setSize: _v27,
            isValidating: _v28,
            error: _v29
          } = (0, _v322.useGetUserProjectItemsInfinite)(() => {
            if (_v2.length > 0) {
              let _v0 = [..._v2].pop()?.uri?.match(/\d+$/)?.[0];
              if (Number(_v0)) {
                let _v0, _v1;
                return _v0 = _v1, _v1 = Number(_v0), {
                  query: {
                    ..._v325
                  },
                  where: {
                    userId: _v0,
                    projectId: _v1
                  },
                  select: [..._v324]
                };
              }
            }
            return null;
          }, {
            revalidateOnFocus: !1
          });
        (0, _v4.useEffect)(() => {
          _v28 && _v15(Date.now());
        }, [_v28, _v15]);
        let {
          data: _v30,
          size: _v31,
          setSize: _v32,
          isValidating: _v33,
          error: _v34
        } = (0, _v321.useGetUserItemsInfinite)(() => {
          let _v0, _v1;
          return _v0 ? (_v0 = _v1, _v1 = _v0, {
            query: {
              ..._v325,
              sort: "default",
              query: _v1
            },
            where: {
              userId: _v0
            },
            select: [..._v324]
          }) : null;
        }, {
          revalidateOnFocus: !1
        });
        return (0, _v4.useEffect)(() => {
          _v33 && _v17(Date.now());
        }, [_v33, _v17]), (0, _v4.useEffect)(() => {
          _v0 || _v2.length ? _v2.length > 0 ? !_v28 && Number(_v14) > Number(_v16) && (_v5(_v323(_v25?.reduce((_v0, _v1) => ({
            data: [..._v0.data, ..._v1.data]
          }), {
            data: []
          }))), _v11(!!_v25?.[_v25?.length - 1]?.paging.next), _v13(_v310.NAVIGATION)) : _v0 && !_v33 && Number(_v16) > Number(_v14) && (_v5(_v323(_v30?.reduce((_v0, _v1) => ({
            data: [..._v0.data, ..._v1.data]
          }), {
            data: []
          }))), _v11(!!_v30?.[_v30?.length - 1]?.paging.next), _v13(_v310.SEARCH)) : (_v5(_v323(_v20?.reduce((_v0, _v1) => ({
            data: [..._v0.data, ..._v1.data]
          }), {
            data: []
          }))), _v11(!!_v20?.[_v20?.length - 1]?.paging.next), _v13(_v310.ROOT_FOLDER));
        }, [_v25, _v30, _v20, _v14, _v16, _v28, _v33, _v0, _v2, _v21, _v31, _v26, _v8, _v9, _v11, _v13, _v22, _v32, _v27]), (0, _v4.useEffect)(() => {
          let _v0;
          if (_v8) return _v0 || _v2.length ? _v2.length > 0 ? _v0 = () => {
            _v27(_v26 + 1);
          } : _v0 && !_v33 && Number(_v16) > Number(_v14) && (_v0 = () => {
            _v32(_v31 + 1);
          }) : _v0 = () => {
            _v22(_v21 + 1);
          }, _v9(!1), _v0;
        }, [_v0, _v2, _v21, _v31, _v26, _v8, _v16, _v14, _v33, _v9, _v22, _v32, _v27]), (0, _v4.useEffect)(() => {
          _v0 || _v2.length || _v7(_v23), _v2.length > 0 && _v14 > _v16 && _v7(_v28), _v0 && _v16 > _v14 && _v7(_v33);
        }, [_v23, _v28, _v33, _v14, _v16, _v0, _v2, _v5]), (0, _v4.useEffect)(() => {
          _v0 || _v2.length || _v19(_v24), _v2.length > 0 && _v19(_v29), _v0 && _v19(_v34);
        }, [_v24, _v29, _v34, _v0, _v2]), {
          isLoading: _v6,
          isError: _v18,
          isMoreDataAvailable: _v10,
          resultType: _v12,
          itemsList: _v4,
          setItemsList: _v5,
          setLoadMore: _v9,
          resetToSearchedResults: () => {
            _v0 && _v30 && _v5(_v323(_v30?.reduce((_v0, _v1) => ({
              data: [..._v0.data, ..._v1.data]
            }), {
              data: []
            })));
          }
        };
      })(_v14, _v3.id, _v15);
      (0, _v4.useEffect)(() => {
        _v8 || _v11(!1);
      }, [_v8]), (0, _v304.useOutsideClick)({
        ref: _v7,
        handler: () => {
          _v8 && (_v11(!0), _v30());
        }
      });
      let _v28 = (_v0, _v1) => {
          let _v2 = _v15.findIndex(_v0 => _v0.uri === _v0);
          _v2 > -1 && _v16(_v15.slice(0, _v2)), _v16([..._v15, {
            uri: _v0,
            name: _v1
          }]);
        },
        _v29 = (_v0, _v1) => {
          _v1 ? -1 === _v17.findIndex(_v0 => _v326(_v0, _v0)) && _v18([..._v17, {
            ..._v0
          }]) : _v18([..._v17.filter(_v0 => !_v326(_v0, _v0))]);
        },
        _v30 = () => {
          _v13(""), _v16([]), _v26([]), _v9(!1);
        },
        _v31 = [(0, _v3.jsx)(_v300.BreadcrumbItem, {
          children: (0, _v3.jsx)(_v301.BreadcrumbLink, {
            color: "fill-brand",
            fontWeight: "normal",
            _hover: {
              color: "fill-brand"
            },
            href: "#",
            onClick: () => {
              _v16([]), _v27();
            },
            children: _v14 ? `"${_v14}"` : (0, _v30.translate)({
              singular: "Videos",
              dictionary: {
                "fr-FR": {
                  singular: "Vidéos"
                },
                "ja-JP": {
                  singular: "動画"
                },
                "ko-KR": {
                  singular: "동영상"
                },
                "pt-BR": {
                  singular: "Vídeos"
                },
                "zh-CN": {
                  singular: "视频"
                }
              }
            })
          })
        }, "content-filter-nav-home"), ..._v15.slice(0, -1).map((_v0, _v1) => (0, _v3.jsx)(_v300.BreadcrumbItem, {
          children: (0, _v3.jsx)(_v301.BreadcrumbLink, {
            color: "fill-brand",
            fontWeight: "normal",
            _hover: {
              color: "fill-brand"
            },
            href: "#",
            onClick: _v0 => {
              _v0.preventDefault(), _v28(_v0.uri, _v0.name);
              let _v1 = _v15.findIndex(_v0 => _v0.uri === _v0.uri);
              _v16(_v15.slice(0, _v1 + 1));
            },
            children: _v0.name
          })
        }, `content-filter-${_v0.name}-${_v1}`)), ..._v15.slice(-1).map(_v0 => (0, _v3.jsx)(_v300.BreadcrumbItem, {
          isCurrentPage: !0,
          children: (0, _v3.jsx)(_v301.BreadcrumbLink, {
            color: "text-secondary",
            fontWeight: "normal",
            _hover: {
              color: "text-secondary"
            },
            children: _v0.name
          })
        }, "content-filter-nav-current"))],
        _v32 = _v0 => {
          let _v1 = [..._v24];
          _v1[_v24.findIndex(_v0 => _v326(_v0, _v0))] = _v0, _v26([..._v1]);
        },
        _v33 = (0, _v4.useMemo)(() => _v17.reduce((_v0, _v1) => _v1.type === _v309.VIDEO ? _v0 + 1 : _v1.type === _v309.FOLDER && _v1.itemCount ? _v0 + _v1?.itemCount : _v0, 0), [_v17]);
      return (0, _v3.jsxs)(_v292.Popover, {
        isLazy: !0,
        placement: "bottom",
        isOpen: _v8,
        onClose: _v30,
        children: [(0, _v3.jsx)(_v294.PopoverTrigger, {
          children: (0, _v3.jsx)(_v74.Button, {
            isDisabled: _v2,
            onClick: () => {
              if (_v10) return _v11(!1);
              let _v0 = !_v8;
              _v0 && _v18([..._v19]), _v9(_v0);
            },
            rightIcon: (0, _v3.jsx)(_v305.ChevronDownSmall, {}),
            variant: "tertiary",
            isActive: _v8,
            children: `${(0, _v30.translate)({
              singular: "Content",
              dictionary: {
                es: {
                  singular: "Contenido"
                },
                "de-DE": {
                  singular: "Inhalt"
                },
                "fr-FR": {
                  singular: "Contenu"
                },
                "ja-JP": {
                  singular: "コンテンツ"
                },
                "ko-KR": {
                  singular: "콘텐츠"
                },
                "pt-BR": {
                  singular: "Conteúdo"
                },
                "zh-CN": {
                  singular: "内容"
                }
              }
            })} ${_v19?.length > 0 ? ` - ${_v19?.length}` : ""}`
          })
        }), (0, _v3.jsx)(_v302.Portal, {
          children: (0, _v3.jsx)(_v293.PopoverContent, {
            minWidth: "42.331rem",
            padding: "0",
            ref: _v7,
            children: (0, _v3.jsxs)(_v5.Box, {
              children: [(0, _v3.jsxs)(_v5.Box, {
                display: "grid",
                gridTemplateColumns: "1fr 16rem",
                maxHeight: "22.813rem",
                overflow: "hidden",
                children: [(0, _v3.jsxs)(_v6.Flex, {
                  padding: "0",
                  flexDirection: "column",
                  alignItems: "stretch",
                  justifyContent: "flex-start",
                  height: "28rem",
                  position: "relative",
                  children: [(0, _v3.jsx)(_v5.Box, {
                    padding: "1rem",
                    height: "4.5rem",
                    width: "100%",
                    borderBottomWidth: "0.063rem",
                    borderColor: "stroke",
                    children: (0, _v3.jsx)(_v303.Search, {
                      value: _v12,
                      onChange: _v0 => {
                        _v16([]), _v13(_v0.target.value);
                      },
                      placeholder: (0, _v30.translate)({
                        singular: "Search",
                        dictionary: {
                          es: {
                            singular: "Buscar"
                          },
                          "de-DE": {
                            singular: "Suchen"
                          },
                          "fr-FR": {
                            singular: "Chercher"
                          },
                          "ja-JP": {
                            singular: "検索"
                          },
                          "ko-KR": {
                            singular: "검색"
                          },
                          "pt-BR": {
                            singular: "Pesquisar"
                          },
                          "zh-CN": {
                            singular: "搜索"
                          }
                        }
                      }),
                      variant: "minimal"
                    })
                  }), _v31.length > 1 && (0, _v3.jsx)(_v5.Box, {
                    marginTop: "0.5rem",
                    padding: "0.25rem 1rem 0.25rem 1rem",
                    children: (0, _v3.jsx)(_v300.Breadcrumb, {
                      spacing: "0.125rem",
                      separator: (0, _v3.jsx)(_v306.ChevronRightSmall, {
                        color: "text-primary"
                      }),
                      children: _v31
                    })
                  }), (0, _v3.jsxs)(_v5.Box, {
                    marginTop: "0",
                    minHeight: "5rem",
                    padding: "1rem 1.5rem",
                    maxHeight: "18.313rem",
                    overflowY: _v20 ? "hidden" : "auto",
                    children: [!_v20 && _v21 && (0, _v3.jsx)(_v46.Text, {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "1rem 0",
                      fontSize: "0.75rem",
                      color: "text-primary",
                      variant: "body-xl",
                      children: (0, _v30.translate)({
                        singular: "Error retrieving the searched items. Please try again later.",
                        dictionary: {
                          es: {
                            singular: "Error al recuperar los elementos buscados. Vuelva a intentarlo más tarde."
                          },
                          "de-DE": {
                            singular: "Fehler beim Abrufen der gesuchten Elemente. Bitte versuche es später erneut."
                          },
                          "fr-FR": {
                            singular: "Une erreur est survenue lors de la récupération des éléments recherchés. Veuillez réessayer plus tard."
                          },
                          "ja-JP": {
                            singular: "検索したアイテムの取得中にエラーが発生しました。しばらくしてからもう一度お試しください。"
                          },
                          "ko-KR": {
                            singular: "검색한 항목을 찾는 중 오류가 발생했습니다. 나중에 다시 시도하세요."
                          },
                          "pt-BR": {
                            singular: "Erro ao recuperar os itens pesquisados. Tente novamente mais tarde."
                          },
                          "zh-CN": {
                            singular: "检索搜索项目时出错。请稍后再试。"
                          }
                        }
                      })
                    }), !_v20 && !_v21 && 0 === _v24.length && (0, _v3.jsx)(_v46.Text, {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "1rem 0",
                      fontSize: "0.75rem",
                      color: "text-primary",
                      variant: "body-xl",
                      children: ((_v0, _v1) => {
                        switch (_v0) {
                          case _v310.ROOT_FOLDER:
                            return (0, _v30.translate)({
                              singular: "Your account has no items.",
                              dictionary: {
                                es: {
                                  singular: "Tu cuenta no tiene elementos."
                                },
                                "de-DE": {
                                  singular: "In deinem Konto befinden sich keine Elemente."
                                },
                                "fr-FR": {
                                  singular: "Votre compte ne contient aucun élément."
                                },
                                "ja-JP": {
                                  singular: "アカウントにアイテムがありません。"
                                },
                                "ko-KR": {
                                  singular: "계정에 항목이 없습니다."
                                },
                                "pt-BR": {
                                  singular: "Sua conta não tem nenhum iten."
                                },
                                "zh-CN": {
                                  singular: "您的账户没有任何项目。"
                                }
                              }
                            });
                          case _v310.NAVIGATION:
                            return (0, _v30.translate)({
                              singular: "This folder has no items.",
                              dictionary: {
                                es: {
                                  singular: "Esta carpeta no tiene elementos."
                                },
                                "de-DE": {
                                  singular: "In diesem Ordner befinden sich keine Elemente."
                                },
                                "fr-FR": {
                                  singular: "Ce dossier ne contient aucun élément."
                                },
                                "ja-JP": {
                                  singular: "このフォルダーにはアイテムがありません。"
                                },
                                "ko-KR": {
                                  singular: "이 폴더에는 항목이 없습니다."
                                },
                                "pt-BR": {
                                  singular: "Esta pasta não tem nenhum iten."
                                },
                                "zh-CN": {
                                  singular: "此文件夹没有项目。"
                                }
                              }
                            });
                          case _v310.SEARCH:
                            return (0, _v30.translate)({
                              singular: 'Search for "{TERM}" did not match any items.',
                              replacements: {
                                TERM: _v1
                              },
                              dictionary: {
                                es: {
                                  singular: 'La búsqueda de "{TERM}" no arrojó ningún elemento.'
                                },
                                "de-DE": {
                                  singular: "Deine Suche nach „{TERM}“ hat keine Elemente ergeben."
                                },
                                "fr-FR": {
                                  singular: "La recherche « {TERM} » n'a donné aucun résultat."
                                },
                                "ja-JP": {
                                  singular: "「{TERM}」の検索結果はどのアイテムにも該当しませんでした。"
                                },
                                "ko-KR": {
                                  singular: '"{TERM}"에 대한 검색과 일치하는 항목이 없습니다.'
                                },
                                "pt-BR": {
                                  singular: 'A pesquisa por "{TERM}" não correspondeu a nenhum iten.'
                                },
                                "zh-CN": {
                                  singular: "搜索“{TERM}”未找到任何匹配项。"
                                }
                              }
                            });
                          default:
                            throw Error("[VA] Invalid Result Type");
                        }
                      })(_v23, _v14)
                    }), !_v21 && _v24.length > 0 && (0, _v3.jsxs)(_v3.Fragment, {
                      children: [(0, _v3.jsxs)(_v6.Flex, {
                        justifyContent: "flex-start",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        paddingLeft: "0.2rem",
                        children: [(0, _v3.jsx)(_v328, {
                          userId: _v3.id,
                          videosSelectedCount: _v33,
                          visibleItems: _v24,
                          selectedItems: _v17,
                          updateItemsListWithTotal: _v32,
                          itemObj: {
                            name: (0, _v30.translate)({
                              singular: "Select all",
                              dictionary: {
                                es: {
                                  singular: "Seleccionar todo"
                                },
                                "de-DE": {
                                  singular: "Alles auswählen"
                                },
                                "fr-FR": {
                                  singular: "Tout sélectionner"
                                },
                                "ja-JP": {
                                  singular: "すべて選択"
                                },
                                "ko-KR": {
                                  singular: "모두 선택"
                                },
                                "pt-BR": {
                                  singular: "Selecionar tudo"
                                },
                                "zh-CN": {
                                  singular: "选择所有"
                                }
                              }
                            }),
                            type: _v309.TEXT
                          },
                          onCheckChange: _v0 => (_v0 => {
                            if (_v0) {
                              let _v0 = _v33;
                              _v18([..._v24.filter(_v0 => {
                                let _v1 = -1 !== _v17.findIndex(_v0 => _v326(_v0, _v0)),
                                  _v2 = _v327({
                                    videosSelectedCount: _v0,
                                    type: _v0.type,
                                    selectLimit: _v179.MAX_NO_OF_VIDEOS_FOR_NETWORK_TRANSFER,
                                    itemsCount: _v0.itemCount || 0,
                                    isSelected: _v1,
                                    canEdit: _v0.canEdit ?? !1
                                  });
                                return _v0.type !== _v309.VIDEO || _v1 || _v2 || (_v0 += 1), _v0.type !== _v309.FOLDER || _v1 || _v2 || (_v0 += _v0.itemCount || 0), !_v2;
                              })]);
                            } else _v18([..._v17.filter(_v0 => -1 === _v24.findIndex(_v0 => _v326(_v0, _v0)))]);
                          })(_v0),
                          onNavigateInside: () => void 0
                        }, "select-all"), _v24.map((_v0, _v1) => (0, _v3.jsx)(_v328, {
                          userId: _v3.id,
                          videosSelectedCount: _v33,
                          selectedItems: _v17,
                          updateItemsListWithTotal: _v32,
                          itemObj: _v0,
                          onCheckChange: _v0 => _v29(_v0, _v0),
                          onNavigateInside: () => {
                            _v0.folderUri && _v28(_v0.folderUri, _v0.name);
                          }
                        }, `${_v0.name}-${_v1}`))]
                      }), !_v20 && _v22 && (0, _v3.jsx)(_v6.Flex, {
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1rem 0",
                        children: (0, _v3.jsx)(_v74.Button, {
                          onClick: () => _v25(!0),
                          size: "sm",
                          variant: "tertiary",
                          children: (0, _v30.translate)({
                            singular: "Load More",
                            dictionary: {
                              es: {
                                singular: "Cargar más"
                              },
                              "de-DE": {
                                singular: "Mehr laden"
                              },
                              "fr-FR": {
                                singular: "Plus"
                              },
                              "ja-JP": {
                                singular: "さらに読み込む"
                              },
                              "ko-KR": {
                                singular: "더 로드하기"
                              },
                              "pt-BR": {
                                singular: "Carregar Mais"
                              },
                              "zh-CN": {
                                singular: "加载更多"
                              }
                            }
                          })
                        })
                      })]
                    }), _v20 && (0, _v3.jsx)(_v6.Flex, {
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "1rem 0",
                      position: "absolute",
                      top: "0.438rem",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      zIndex: "2",
                      marginTop: "4rem",
                      backdropFilter: "blur(0.2rem)",
                      children: (0, _v3.jsx)(_v10.Spinner, {
                        size: "sm",
                        marginTop: "-3.5rem"
                      })
                    })]
                  })]
                }), (0, _v3.jsxs)(_v5.Box, {
                  borderLeftWidth: "0.063rem",
                  width: "15.625rem",
                  borderLeftColor: "stroke",
                  children: [(0, _v3.jsx)(_v6.Flex, {
                    minHeight: "4.5rem",
                    padding: "1.5rem 1.5rem 1.5rem 1rem",
                    borderBottomColor: "stroke",
                    borderBottomWidth: "0.063rem",
                    justifyContent: "center",
                    children: (0, _v3.jsxs)(_v6.Flex, {
                      width: "100%",
                      justifyContent: "space-between",
                      marginTop: "0.25rem",
                      children: [(0, _v3.jsx)(_v46.Text, {
                        fontSize: "0.75rem",
                        color: "text-primary",
                        variant: "body-xl",
                        children: (0, _v30.translate)({
                          singular: "{COUNT} video selected",
                          plural: "{COUNT} videos selected",
                          count: _v33,
                          replacements: {
                            COUNT: _v33
                          },
                          dictionary: {
                            es: {
                              singular: "{COUNT} video seleccionado",
                              plural: "{COUNT} videos seleccionados"
                            },
                            "de-DE": {
                              singular: "{COUNT} Video ausgewählt",
                              plural: "{COUNT} Videos ausgewählt"
                            },
                            "fr-FR": {
                              singular: "{COUNT} vidéo sélectionnée",
                              plural: "{COUNT} vidéos sélectionnées"
                            },
                            "ja-JP": {
                              singular: "{COUNT} 件の動画が選択されました",
                              plural: "{COUNT} 件の動画が選択されました"
                            },
                            "ko-KR": {
                              singular: "동영상 {COUNT}개 선택",
                              plural: "동영상 {COUNT}개 선택"
                            },
                            "pt-BR": {
                              singular: "{COUNT} vídeo selecionado",
                              plural: "{COUNT} vídeos selecionados"
                            },
                            "zh-CN": {
                              singular: "已选择 {COUNT} 个视频",
                              plural: "已选择 {COUNT} 个视频"
                            }
                          }
                        })
                      }), (0, _v3.jsx)(_v46.Text, {
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        color: "text-primary",
                        variant: "body-xl",
                        onClick: () => {
                          _v18([]), _v4({
                            type: _v299.REPORT_ACTION_TYPE.SET_FILTER_LIST,
                            payload: {
                              filterKey: _v299.Filters.CONTENT,
                              list: []
                            }
                          }), _v30();
                        },
                        _hover: {
                          cursor: "pointer",
                          textDecoration: "underline"
                        },
                        children: (0, _v30.translate)({
                          singular: "Clear all",
                          dictionary: {
                            es: {
                              singular: "Borrar todo"
                            },
                            "de-DE": {
                              singular: "Alle löschen"
                            },
                            "fr-FR": {
                              singular: "Tout supprimer"
                            },
                            "ja-JP": {
                              singular: "すべて削除"
                            },
                            "ko-KR": {
                              singular: "모두 지우기"
                            },
                            "pt-BR": {
                              singular: "Limpar tudo"
                            },
                            "zh-CN": {
                              singular: "清除全部"
                            }
                          }
                        })
                      })]
                    })
                  }), (0, _v3.jsx)(_v5.Box, {
                    padding: "0.5rem 1rem 0rem 1rem",
                    height: "24.85rem",
                    children: (0, _v3.jsx)(_v5.Box, {
                      paddingTop: "0.4rem",
                      height: "100%",
                      overflowY: "auto",
                      children: _v17.map((_v0, _v1) => (0, _v3.jsx)(_v330, {
                        type: _v0.type,
                        textToDisplay: _v0.name,
                        numberOfItems: _v0.itemCount,
                        onRemoveItem: () => _v29(_v0, !1)
                      }, `${_v0.name}-${_v1}`))
                    })
                  })]
                })]
              }), (0, _v3.jsxs)(_v6.Flex, {
                height: "4.5rem",
                boxSizing: "border-box",
                borderTopColor: "stroke",
                borderTopWidth: "0.063rem",
                borderRadius: "0 0 0.3rem 0.3rem",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "0.8rem",
                padding: "1rem",
                children: [(0, _v3.jsx)(_v46.Text, {
                  fontSize: "0.75rem",
                  color: "text-secondary",
                  variant: "body-xl",
                  children: (0, _v30.translate)({
                    singular: "You may select up to {LIMIT} videos.",
                    replacements: {
                      LIMIT: _v179.MAX_NO_OF_VIDEOS_FOR_NETWORK_TRANSFER.toString()
                    },
                    dictionary: {
                      es: {
                        singular: "Puede seleccionar hasta {LIMIT} videos."
                      },
                      "de-DE": {
                        singular: "Du kannst bis zu {LIMIT} Videos auswählen."
                      },
                      "fr-FR": {
                        singular: "Vous pouvez sélectionner jusqu'à {LIMIT} vidéos."
                      },
                      "ja-JP": {
                        singular: "{LIMIT}本まで動画を選択できます。"
                      },
                      "ko-KR": {
                        singular: "최대 {LIMIT}개의 동영상을 선택할 수 있습니다."
                      },
                      "pt-BR": {
                        singular: "Você pode selecionar até {LIMIT} vídeos."
                      },
                      "zh-CN": {
                        singular: "您最多可以选择 {LIMIT} 个视频。"
                      }
                    }
                  })
                }), (0, _v3.jsxs)(_v6.Flex, {
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  children: [(0, _v3.jsx)(_v74.Button, {
                    size: "sm",
                    onClick: _v30,
                    variant: "secondary",
                    children: (0, _v30.translate)({
                      singular: "Cancel",
                      dictionary: {
                        es: {
                          singular: "Cancelar"
                        },
                        "de-DE": {
                          singular: "Abbrechen"
                        },
                        "fr-FR": {
                          singular: "Annuler"
                        },
                        "ja-JP": {
                          singular: "キャンセル"
                        },
                        "ko-KR": {
                          singular: "취소"
                        },
                        "pt-BR": {
                          singular: "Cancelar"
                        },
                        "zh-CN": {
                          singular: "取消"
                        }
                      }
                    })
                  }), (0, _v3.jsx)(_v74.Button, {
                    size: "sm",
                    variant: "primary",
                    isDisabled: 0 === _v17.length,
                    onClick: () => {
                      let _v0 = _v17.map(_v0 => {
                        let _v1 = (_v0.type === _v309.FOLDER ? _v0?.folderUri : _v0?.videoUri) ?? "",
                          _v2 = _v1?.match(/\d+$/)?.[0] ?? "";
                        return {
                          id: _v0.type === _v309.FOLDER ? `/folders/${_v2}` : `/videos/${_v2}`,
                          name: _v0.name,
                          prepend: "",
                          color: "",
                          count: _v0?.itemCount ?? 0,
                          type: _v0.type,
                          uri: _v1,
                          ...(_v0.thumbnailUrl && {
                            thumbnailURI: _v0.thumbnailUrl
                          })
                        };
                      });
                      _v4({
                        type: _v299.REPORT_ACTION_TYPE.SET_FILTER_LIST,
                        payload: {
                          filterKey: _v299.Filters.CONTENT,
                          list: _v0
                        }
                      }), (0, _v32.sendFilterBarEvent)(_v299.Filters.CONTENT, _v0.map(_v0 => _v0?.id).join(","), window.location.pathname, _v1?.teamUser), _v6(), _v30();
                    },
                    children: (0, _v30.translate)({
                      singular: "Apply",
                      dictionary: {
                        es: {
                          singular: "Aplicar"
                        },
                        "de-DE": {
                          singular: "Anwenden"
                        },
                        "fr-FR": {
                          singular: "Appliquer"
                        },
                        "ja-JP": {
                          singular: "適用する"
                        },
                        "ko-KR": {
                          singular: "적용"
                        },
                        "pt-BR": {
                          singular: "Aplicar"
                        },
                        "zh-CN": {
                          singular: "应用"
                        }
                      }
                    })
                  })]
                })]
              })]
            })
          })
        })]
      });
    };
  var _v332 = _v0.i(0),
    _v333 = _v0.i(0);
  let _v334 = ({
    dispatch: _v0,
    filterLists: _v1,
    onModalOpenChange: _v2
  }) => {
    let {
        settings: _v3
      } = (0, _v26.useOrionSettings)(),
      _v4 = !!_v3?.show_custom_metadata,
      {
        fields: _v5,
        isLoading: _v6
      } = (0, _v333.useTeamCustomMetadataFields)({
        enabled: _v4
      });
    if (!_v4 || _v6 || 0 === _v5.length) return (0, _v3.jsx)(_v3.Fragment, {});
    let _v7 = (_v0 => {
      let _v1 = _v0[_v299.Filters.CUSTOM_METADATA];
      if (!Array.isArray(_v1) || 0 === _v1.length) return;
      let _v2 = _v1[0]?.id;
      return "string" == typeof _v2 && _v2.length > 0 ? _v2 : void 0;
    })(_v1);
    return (0, _v3.jsx)(_v332.CustomMetadataFilterAccordion, {
      serializedFilter: _v7,
      onModalOpenChange: _v2,
      onChange: _v0 => {
        _v0({
          type: _v299.REPORT_ACTION_TYPE.SET_FILTER_LIST,
          payload: {
            filterKey: _v299.Filters.CUSTOM_METADATA,
            list: null === _v0 ? [] : [{
              id: _v0,
              name: "Custom metadata",
              prepend: "",
              color: ""
            }]
          }
        });
      }
    });
  };
  var _v335 = _v0.i(0),
    _v336 = _v0.i(0);
  let _v337 = ({
    calendarPresets: _v0,
    dispatch: _v1,
    filters: {
      startDate: _v2,
      endDate: _v3
    },
    userInUse: {
      dateCreated: _v4
    },
    isDisabled: _v5 = !1,
    isMobile: _v6 = !1,
    calendarMinDate: _v7,
    rangeText: _v8,
    setRangeText: _v9,
    onValueChange: _v10,
    activePreset: _v11,
    setActivePreset: _v12,
    reportType: _v13
  }) => {
    let _v14 = (0, _v4.useRef)(null),
      [_v15, _v16] = (0, _v4.useState)(!1),
      _v17 = (0, _v4.useContext)(_v28.ViewerContext),
      {
        trackAnalyticsDateRangeChanged: _v18
      } = (0, _v13.useAnalyticsTracking)(),
      _v19 = _v17?.locale ?? "en-US",
      [_v20] = (0, _v9.useMediaQuery)("(min-width: 62rem)"),
      _v21 = _v13 === _v299.Reports.AI ? _v179.AI_DATE_RANGE_MAX_SPAN_DAYS : void 0,
      _v22 = (0, _v4.useMemo)(() => ({
        locale: _v19,
        month: "short",
        day: "numeric",
        year: "numeric"
      }), [_v19]),
      _v23 = (0, _v4.useMemo)(() => _v7 && _v7 > _v4 ? _v7 : _v4, [_v4, _v7]),
      _v24 = (0, _v4.useMemo)(() => _v21.DateTime.utc(), []),
      _v25 = (0, _v4.useMemo)(() => _v335.BokehDate.parseDate(_v24.toISODate()), [_v24]),
      _v26 = (0, _v4.useMemo)(() => _v335.BokehDate.parseDate(_v23.toISODate()), [_v23]),
      _v27 = (0, _v4.useMemo)(() => [_v335.BokehDate.parseDate(_v2.toISODate()), _v335.BokehDate.parseDate(_v3.toISODate())], [_v2, _v3]);
    return ((0, _v304.useOutsideClick)({
      ref: _v14,
      handler: () => _v16(!1)
    }), (0, _v4.useEffect)(() => {
      _v15 || _v11 || !_v12 || (_v12(null), _v9(`${_v2.setLocale(_v19).toLocaleString(_v22)} - ${_v3.setLocale(_v19).toLocaleString(_v22)}`));
    }, [_v15, _v3, _v2, _v19, _v22, _v11, _v9, _v12]), (0, _v4.useEffect)(() => {
      _v20 && _v16(!1);
    }, [_v20]), _v6) ? (0, _v3.jsx)(_v336.DateRangePicker, {
      defaultRange: _v27,
      isOpen: !0,
      locale: _v19,
      maxDate: _v25,
      minDate: _v26,
      maxSpanDays: _v21,
      presetValues: _v0,
      onValueChange: _v10,
      isMobile: !0,
      boxShadow: "none",
      padding: "md"
    }) : (0, _v3.jsx)(_v5.Box, {
      ref: _v14,
      children: (0, _v3.jsxs)(_v292.Popover, {
        placement: "bottom-end",
        isOpen: _v15,
        onClose: () => {
          _v11 && (_v9(_v11?.label), _v16(!1));
        },
        isLazy: !0,
        children: [(0, _v3.jsx)(_v294.PopoverTrigger, {
          children: (0, _v3.jsx)(_v74.Button, {
            onClick: () => _v16(_v0 => !_v0),
            rightIcon: (0, _v3.jsx)(_v305.ChevronDownSmall, {}),
            isDisabled: _v5,
            variant: "tertiary",
            isActive: _v15,
            children: _v8
          })
        }), (0, _v3.jsx)(_v293.PopoverContent, {
          padding: "0",
          children: (0, _v3.jsx)(_v336.DateRangePicker, {
            defaultRange: _v27,
            isOpen: _v15,
            locale: _v19,
            maxDate: _v25,
            minDate: _v26,
            maxSpanDays: _v21,
            onApply: ([_v0, _v1], _v2) => {
              _v2 ? (_v9(_v2?.label), _v12(_v2)) : _v12(null), (0, _v32.sendFilterBarEvent)(_v299.Filters.DATE, _v2?.label ?? "", window.location.pathname, _v17?.teamUser, `date_${_v0.toString()}_${_v1.toString()}`), _v13 && (_v0.toString() !== _v2.toISODate() || _v1.toString() !== _v3.toISODate()) && _v18({
                analyticsReportType: _v13
              }), _v1({
                type: _v299.REPORT_ACTION_TYPE.UPDATE_DATE_RANGE,
                payload: {
                  startDate: _v21.DateTime.fromISO(_v0.toString()).setZone("utc", {
                    keepLocalTime: !0
                  }).startOf("day"),
                  endDate: _v21.DateTime.fromISO(_v1.toString()).setZone("utc", {
                    keepLocalTime: !0
                  }).endOf("day")
                }
              }), _v16(!1);
            },
            presetValues: _v0,
            onValueChange: (_v0, _v1) => {
              if (_v1) return _v9(_v1?.label);
              let _v2 = _v21.DateTime.fromISO(_v0?.[0]?.toString()),
                _v3 = _v21.DateTime.fromISO(_v0?.[1]?.toString());
              return _v2?.isValid || _v3?.isValid ? _v9(`${_v2.setLocale(_v19).toLocaleString(_v22)} - ${_v3?.isValid ? _v3.setLocale(_v19).toLocaleString(_v22) : ""}`) : _v9(_v190.T_SELECT_DATE_RANGE);
            }
          })
        })]
      })
    });
  };
  var _v338 = _v0.i(0),
    _v339 = _v0.i(0),
    _v340 = _v0.i(0),
    _v341 = _v0.i(0),
    _v342 = _v0.i(0),
    _v343 = _v0.i(0),
    _v344 = _v0.i(0),
    _v345 = _v0.i(0),
    _v346 = _v0.i(0),
    _v347 = _v0.i(0),
    _v348 = _v0.i(0),
    _v349 = _v30;
  let _v350 = (_v0, _v1) => {
      switch (_v1.type) {
        case "SET_QUERY_STRING":
          let _v0 = [..._v0.availableItems?.filter(_v0 => _v0?.name?.toLowerCase()?.indexOf(_v1.payload?.toLowerCase()) > -1)];
          return {
            ..._v0,
            queryString: _v1.payload,
            filterItems: _v0,
            page: 1
          };
        case "SET_PAGE":
          let _v1 = _v0.availableItems.slice(0, 5 * _v1.payload);
          return {
            ..._v0,
            page: _v1.payload,
            filterItems: _v1
          };
        case "AVAILABLE_ITEMS":
          let _v2 = _v1.payload.slice(0, 5);
          return {
            ..._v0,
            availableItems: _v1.payload,
            filterItems: _v2
          };
        default:
          throw Error(`Unhandled action type: ${_v1.type}`);
      }
    },
    _v351 = ({
      filterKey: _v0,
      availableItems: _v1,
      selectedItems: _v2,
      name: _v3,
      placeholderText: _v4 = (0, _v349.translate)({
        singular: 'Search "context"',
        dictionary: {
          es: {
            singular: "Buscar “contexto”"
          },
          "de-DE": {
            singular: "„Kontext“ suchen"
          },
          "fr-FR": {
            singular: "Rechercher « contexte »"
          },
          "ja-JP": {
            singular: "「コンテキスト」を検索"
          },
          "ko-KR": {
            singular: '"context" 검색'
          },
          "pt-BR": {
            singular: 'Pesquisar "contexto"'
          },
          "zh-CN": {
            singular: "搜索“context”"
          }
        }
      }),
      isLoading: _v5,
      hasError: _v6,
      onItemSelectionUpdate: _v7
    }) => {
      let [_v8, _v9] = (0, _v4.useReducer)(_v350, {
          queryString: "",
          page: 1,
          filterItems: _v1.slice(0, 5),
          availableItems: _v1
        }),
        {
          queryString: _v10,
          page: _v11,
          filterItems: _v12
        } = _v8;
      _v8.availableItems !== _v1 && _v9({
        type: "AVAILABLE_ITEMS",
        payload: _v1
      });
      let _v13 = (0, _v4.useMemo)(() => _v10 ? 5 * _v11 < _v12?.length : 5 * _v11 < _v1?.length, [_v10, _v11, _v12?.length, _v1?.length]),
        _v14 = _v2?.length > 0 ? `${_v3} (${_v2?.length})` : _v3;
      return _v5 ? (0, _v3.jsx)(_v355, {
        name: _v3
      }) : !_v5 && _v6 ? (0, _v3.jsx)(_v353, {}) : _v5 || _v6 || _v1?.length ? (0, _v3.jsxs)(_v352, {
        name: _v14,
        children: [_v1?.length > 5 && (0, _v3.jsxs)(_v344.InputGroup, {
          marginBottom: "1rem",
          children: [(0, _v3.jsx)(_v345.InputLeftElement, {
            top: "-0.22rem",
            children: (0, _v3.jsx)(_v348.SearchMagnifier, {
              boxSize: "0.875rem",
              color: "text-secondary"
            })
          }), (0, _v3.jsx)(_v92.Input, {
            outline: "none",
            paddingLeft: "2rem",
            placeholder: _v4,
            size: "sm",
            value: _v10,
            onChange: _v0 => _v9({
              type: "SET_QUERY_STRING",
              payload: _v0.target.value
            })
          })]
        }), (0, _v3.jsx)(_v346.VStack, {
          alignItems: "flex-start",
          gap: "0.75rem",
          children: _v12.slice(0, 5 * _v11)?.map(_v0 => (0, _v3.jsx)(_v311.Checkbox, {
            isChecked: _v2?.some(_v0 => _v0.id === _v0.id),
            onChange: _v0 => _v7(_v0, _v0, _v0.target.checked),
            children: (0, _v3.jsx)(_v46.Text, {
              variant: "body-md",
              children: _v0.name
            })
          }, _v0.id))
        }), _v13 && (0, _v3.jsx)(_v74.Button, {
          marginTop: "0.5rem",
          size: "heading-2xs",
          variant: "tertiary",
          width: "100%",
          color: "text-secondary",
          rightIcon: (0, _v3.jsx)(_v305.ChevronDownSmall, {}),
          onClick: () => _v9({
            type: "SET_PAGE",
            payload: _v11 + 1
          }),
          _hover: {
            bgColor: "transparent !important"
          },
          children: (0, _v349.translate)({
            singular: "Load more",
            dictionary: {
              es: {
                singular: "Cargar más"
              },
              "de-DE": {
                singular: "Mehr laden"
              },
              "fr-FR": {
                singular: "Afficher plus"
              },
              "ja-JP": {
                singular: "もっとロードする"
              },
              "ko-KR": {
                singular: "동영상 더 보기"
              },
              "pt-BR": {
                singular: "Carregar mais"
              },
              "zh-CN": {
                singular: "加载更多"
              }
            }
          })
        })]
      }) : (0, _v3.jsx)(_v354, {
        name: _v3
      });
    },
    _v352 = ({
      name: _v0,
      children: _v1
    }) => (0, _v3.jsxs)(_v341.AccordionItem, {
      children: [(0, _v3.jsxs)(_v339.AccordionButton, {
        children: [(0, _v3.jsx)(_v5.Box, {
          as: "span",
          flex: "1",
          textAlign: "left",
          children: _v0
        }), (0, _v3.jsx)(_v340.AccordionIcon, {})]
      }), (0, _v3.jsx)(_v342.AccordionPanel, {
        paddingBottom: "1rem",
        children: _v1
      })]
    }),
    _v353 = () => (0, _v3.jsx)(_v343.Center, {
      flexGrow: "1",
      height: "7.63rem",
      textAlign: "center",
      paddingBottom: "0.5rem",
      children: (0, _v3.jsxs)(_v5.Box, {
        children: [(0, _v3.jsx)(_v347.CircleExclamation, {
          boxSize: "1.25em",
          color: "text-secondary"
        }), (0, _v349.translate)({
          singular: "{ERROR}Unable to load data.{/ERROR}",
          replacements: {
            ERROR: _v0 => (0, _v3.jsx)(_v46.Text, {
              variant: "body-xl",
              display: "block",
              color: "text-secondary",
              fontSize: "0.75rem",
              textAlign: "center",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "{ERROR}No se pudieron cargar los datos.{/ERROR}"
            },
            "de-DE": {
              singular: "{ERROR}Daten konnten nicht geladen werden.{/ERROR}"
            },
            "fr-FR": {
              singular: "{ERROR}Impossible de charger les données.{/ERROR}"
            },
            "ja-JP": {
              singular: "{ERROR}データを読み込めません。{/ERROR}"
            },
            "ko-KR": {
              singular: "{ERROR}데이터를 로드할 수 없습니다.{/ERROR}"
            },
            "pt-BR": {
              singular: "{ERROR}Não foi possível carregar os dados.{/ERROR}"
            },
            "zh-CN": {
              singular: "{ERROR}无法加载数据。{/ERROR}"
            }
          }
        }), (0, _v3.jsx)(_v46.Text, {
          display: "block",
          color: "text-secondary",
          fontSize: "0.75rem",
          textAlign: "center",
          variant: "body-xl",
          children: (0, _v349.translate)({
            singular: "{ANCHOR}Refresh{/ANCHOR} to try again or contact support.",
            replacements: {
              ANCHOR: _v0 => (0, _v3.jsx)(_v46.Text, {
                as: "a",
                variant: "body-xl",
                fontSize: "0.75rem",
                textDecoration: "underline",
                cursor: "pointer",
                onClick: () => window.location.reload(),
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "{ANCHOR}Actualice{/ANCHOR} para volver a intentarlo o póngase en contacto con el servicio de asistencia."
              },
              "de-DE": {
                singular: "{ANCHOR}Laden Sie die Seite neu{/ANCHOR} oder kontaktieren Sie den Support."
              },
              "fr-FR": {
                singular: "{ANCHOR}Actualisez{/ANCHOR} la page pour réessayer ou contactez l'assistance."
              },
              "ja-JP": {
                singular: "{ANCHOR}更新{/ANCHOR}して再試行するか、サポートにお問い合わせください。"
              },
              "ko-KR": {
                singular: "{ANCHOR}새로고침{/ANCHOR}하여 다시 시도하거나 지원팀에 문의하세요."
              },
              "pt-BR": {
                singular: "{ANCHOR}Atualize{/ANCHOR} para tentar novamente ou entre em contato com o suporte."
              },
              "zh-CN": {
                singular: "{ANCHOR}刷新{/ANCHOR}以重试或联系支持人员。"
              }
            }
          })
        })]
      })
    }),
    _v354 = ({
      name: _v0
    }) => (0, _v3.jsx)(_v352, {
      name: _v0,
      children: (0, _v3.jsx)(_v5.Box, {
        padding: "0 0.5rem 0.5rem 0.5rem",
        children: (0, _v3.jsx)(_v46.Text, {
          variant: "body-xl",
          display: "block",
          color: "text-secondary",
          fontSize: "0.75rem",
          textAlign: "center",
          children: (0, _v349.translate)({
            singular: "No values available.",
            dictionary: {
              es: {
                singular: "No hay valores disponibles."
              },
              "de-DE": {
                singular: "Keine Werte verfügbar."
              },
              "fr-FR": {
                singular: "Aucune valeur n'est disponible."
              },
              "ja-JP": {
                singular: "利用可能な値はありません。"
              },
              "ko-KR": {
                singular: "사용할 수 있는 값이 없습니다."
              },
              "pt-BR": {
                singular: "Nenhum valor disponível."
              },
              "zh-CN": {
                singular: "没有可用的值。"
              }
            }
          })
        })
      })
    }),
    _v355 = ({
      name: _v0
    }) => (0, _v3.jsx)(_v352, {
      name: _v0,
      children: (0, _v3.jsx)(_v343.Center, {
        height: "7.63rem",
        children: (0, _v3.jsx)(_v10.Spinner, {
          size: "xs"
        })
      })
    });
  var _v356 = _v0.i(0),
    _v357 = _v0.i(0);
  let _v358 = {
      mobile: "mobile",
      tablet: "tablet",
      desktop: "desktop",
      tv: "tv",
      other: "other",
      unknown: "unknown"
    },
    _v359 = {
      [_v358.mobile]: (0, _v30.translate)({
        singular: "Phone",
        dictionary: {
          es: {
            singular: "Teléfono"
          },
          "de-DE": {
            singular: "Telefon"
          },
          "fr-FR": {
            singular: "téléphonique"
          },
          "ja-JP": {
            singular: "電話"
          },
          "ko-KR": {
            singular: "전화"
          },
          "pt-BR": {
            singular: "Telefone"
          },
          "zh-CN": {
            singular: "手机"
          }
        }
      }),
      [_v358.tablet]: (0, _v30.translate)({
        singular: "Tablet",
        dictionary: {
          es: {
            singular: "Tableta"
          },
          "fr-FR": {
            singular: "Tablette"
          },
          "ja-JP": {
            singular: "タブレット"
          },
          "ko-KR": {
            singular: "태블릿"
          },
          "zh-CN": {
            singular: "平板电脑"
          }
        }
      }),
      [_v358.desktop]: (0, _v30.translate)({
        singular: "Desktop",
        dictionary: {
          es: {
            singular: "Escritorio"
          },
          "ja-JP": {
            singular: "デスクトップ"
          },
          "ko-KR": {
            singular: "데스크탑"
          },
          "pt-BR": {
            singular: "Computadores de mesa"
          },
          "zh-CN": {
            singular: "桌面"
          }
        }
      }),
      [_v358.tv]: (0, _v30.translate)({
        singular: "TV apps",
        dictionary: {
          es: {
            singular: "Apps para televisores"
          },
          "de-DE": {
            singular: "TV-Apps"
          },
          "fr-FR": {
            singular: "Apps pour TV"
          },
          "ja-JP": {
            singular: "TV アプリ"
          },
          "ko-KR": {
            singular: "TV 앱"
          },
          "pt-BR": {
            singular: "Aplicativos para TV"
          },
          "zh-CN": {
            singular: "电视应用程序"
          }
        }
      }),
      [_v358.other]: (0, _v30.translate)({
        singular: "Other",
        dictionary: {
          es: {
            singular: "Otro"
          },
          "de-DE": {
            singular: "Sonstiges"
          },
          "fr-FR": {
            singular: "Autre"
          },
          "ja-JP": {
            singular: "その他"
          },
          "ko-KR": {
            singular: "기타"
          },
          "pt-BR": {
            singular: "Outro"
          },
          "zh-CN": {
            singular: "其他"
          }
        }
      }),
      [_v358.unknown]: (0, _v30.translate)({
        singular: "Unknown",
        dictionary: {
          es: {
            singular: "Desconocido"
          },
          "de-DE": {
            singular: "Unbekannt"
          },
          "fr-FR": {
            singular: "Inconnu"
          },
          "ja-JP": {
            singular: "不明"
          },
          "ko-KR": {
            singular: "알 수 없음"
          },
          "pt-BR": {
            singular: "Desconhecido"
          },
          "zh-CN": {
            singular: "未知"
          }
        }
      })
    },
    _v360 = (0, _v30.translate)({
      singular: "None",
      dictionary: {
        es: {
          singular: "Ninguno"
        },
        "de-DE": {
          singular: "Kein"
        },
        "fr-FR": {
          singular: "Aucune"
        },
        "ja-JP": {
          singular: "なし"
        },
        "ko-KR": {
          singular: "없음"
        },
        "pt-BR": {
          singular: "Nenhum"
        },
        "zh-CN": {
          singular: "无"
        }
      }
    }),
    _v361 = (0, _v30.translate)({
      singular: "Original",
      dictionary: {
        "ja-JP": {
          singular: "オリジナルサイズ"
        },
        "ko-KR": {
          singular: "오리지널"
        },
        "zh-CN": {
          singular: "原创"
        }
      }
    }),
    _v362 = {
      revalidateOnFocus: !1,
      revalidateIfStale: !1,
      errorRetryInterval: 0,
      errorRetryCount: 1,
      refreshInterval: 0
    },
    _v363 = (_v0, _v1 = "en-US", _v2 = _v360) => {
      let _v3,
        _v4 = _v0,
        _v5 = !1;
      switch (_v4) {
        case "original":
          return _v361;
        case "none":
          return _v360;
      }
      if (!_v4) return _v2;
      _v4?.indexOf("-x-autogen") > -1 && (_v5 = !0, _v4 = _v4.replace("-x-autogen", ""));
      try {
        _v3 = new Intl.DisplayNames([_v1], {
          type: "language",
          languageDisplay: "standard"
        }).of(_v4);
      } catch (_v0) {
        (0, _v308.logError)("Invalid language code : " + _v4, _v0);
      }
      return _v4 = _v3 && "none" !== _v3 ? (0, _v357.default)(_v3) : _v360, _v5 ? `${_v4} (AI)` : _v4;
    },
    _v364 = _v0 => ({
      id: _v0.textTrackType + "-" + _v0.textTrackProvenance,
      name: (_v0.textTrackType ? (0, _v356.default)(_v0.textTrackType) : _v360) + ("ai_generated" === _v0.textTrackProvenance ? " (AI)" : "")
    }),
    _v365 = _v0 => ({
      id: _v0.audioTrackType + "-" + _v0.audioTrackProvenance,
      name: (_v0.audioTrackType ? (0, _v356.default)(_v0.audioTrackType) : "Main") + ("ai_generated" === _v0.audioTrackProvenance ? " (AI)" : "")
    }),
    _v366 = (_v0, _v1) => {
      let _v2 = {};
      return Object.keys(_v1).filter(_v0 => _v0 !== _v0).reduce((_v0, _v1) => (_v0[_v1] = _v1[_v1], _v0), _v2), _v2;
    };
  var _v367 = _v0.i(0);
  let _v368 = ({
      filtersToApply: _v0,
      selectedItems: _v1,
      selectedItemsToApply: _v2,
      startDate: _v3,
      endDate: _v4,
      userInUse: _v5,
      onItemSelectionUpdate: _v6
    }) => {
      let _v7 = (0, _v284.useViewer)(),
        [_v8, _v9] = (0, _v4.useState)([]),
        {
          isOrionLoading: _v10,
          queryParam: _v11
        } = (0, _v338.useAnalyticsFreshness)(),
        _v12 = (0, _v4.useMemo)(() => {
          let _v0 = _v366(_v299.Filters.AUDIO_LANGUAGE, _v1);
          return (0, _v367.getFiltersObject)(_v0, _v0);
        }, [_v0, _v1]),
        {
          data: _v13,
          error: _v14,
          isLoading: _v15
        } = (0, _v193.useGetUserAnalytics)(() => _v10 ? null : {
          select: ["audioTrackLanguage", "views"],
          where: {
            userId: _v5.id
          },
          query: {
            from: _v3.toISO(),
            to: _v4.toISO(),
            dimension: "total",
            dimensions: ["audio_track_language"],
            direction: "desc",
            ..._v12,
            sort: "views",
            page: 1,
            perPage: 200,
            ..._v11
          }
        }, _v362);
      return (0, _v4.useEffect)(() => {
        _v14 ? (0, _v308.logError)("Trouble retrieving Audio Track Language Filter data", _v14) : _v9(_v13?.data ? _v13?.data?.map(_v0 => ((_v0, _v1 = "en-US") => ({
          id: _v0.audioTrackLanguage,
          name: _v363(_v0.audioTrackLanguage, _v1, _v361)
        }))(_v0, _v7?.locale)) : []);
      }, [_v13, _v14, _v7?.locale]), (0, _v3.jsx)(_v351, {
        filterKey: _v299.Filters.AUDIO_LANGUAGE,
        name: (0, _v30.translate)({
          singular: "Audio track language",
          dictionary: {
            es: {
              singular: "Idioma de la pista de audio"
            },
            "de-DE": {
              singular: "Audiosprachspur"
            },
            "fr-FR": {
              singular: "Langue de la piste audio"
            },
            "ja-JP": {
              singular: "オーディオトラックの言語"
            },
            "ko-KR": {
              singular: "오디오 트랙 언어"
            },
            "pt-BR": {
              singular: "Idioma da faixa de áudio"
            },
            "zh-CN": {
              singular: "音轨语言"
            }
          }
        }),
        availableItems: _v8,
        selectedItems: [...(_v2[_v299.Filters.AUDIO_LANGUAGE] ?? [])],
        isLoading: _v15,
        hasError: !!_v14,
        onItemSelectionUpdate: _v6,
        placeholderText: (0, _v30.translate)({
          singular: "Search language",
          dictionary: {
            es: {
              singular: "Idioma de búsqueda"
            },
            "de-DE": {
              singular: "Suchsprache"
            },
            "fr-FR": {
              singular: "Langue de recherche"
            },
            "ja-JP": {
              singular: "言語を検索"
            },
            "ko-KR": {
              singular: "언어 검색"
            },
            "pt-BR": {
              singular: "Pesquisar idioma"
            },
            "zh-CN": {
              singular: "搜索语言"
            }
          }
        })
      }, _v299.Filters.AUDIO_LANGUAGE);
    },
    _v369 = ({
      filtersToApply: _v0,
      selectedItems: _v1,
      selectedItemsToApply: _v2,
      startDate: _v3,
      endDate: _v4,
      userInUse: _v5,
      onItemSelectionUpdate: _v6
    }) => {
      let [_v7, _v8] = (0, _v4.useState)([]),
        {
          isOrionLoading: _v9,
          queryParam: _v10
        } = (0, _v338.useAnalyticsFreshness)(),
        _v11 = (0, _v4.useMemo)(() => {
          let _v0 = _v366(_v299.Filters.AUDIO_TYPE_AND_PROVENANCE, _v1);
          return (0, _v367.getFiltersObject)(_v0, _v0);
        }, [_v0, _v1]),
        {
          data: _v12,
          error: _v13,
          isLoading: _v14
        } = (0, _v193.useGetUserAnalytics)(() => _v9 ? null : {
          select: ["audioTrackType", "audioTrackProvenance", "views"],
          where: {
            userId: _v5.id
          },
          query: {
            from: _v3.toISO(),
            to: _v4.toISO(),
            dimension: "total",
            dimensions: ["audio_track_type", "audio_track_provenance"],
            direction: "desc",
            ..._v11,
            sort: "views",
            page: 1,
            perPage: 200,
            ..._v10
          }
        }, _v362);
      return (0, _v4.useEffect)(() => {
        _v13 ? (0, _v308.logError)("Trouble retrieving Audio Track Type Filter data", _v13) : _v8(_v12?.data ? _v12?.data?.map(_v0 => _v365(_v0)) : []);
      }, [_v12, _v13]), (0, _v3.jsx)(_v351, {
        filterKey: _v299.Filters.AUDIO_TYPE_AND_PROVENANCE,
        name: (0, _v30.translate)({
          singular: "Audio track type",
          dictionary: {
            es: {
              singular: "Tipo de pista de audio"
            },
            "de-DE": {
              singular: "Audiospurtyp"
            },
            "fr-FR": {
              singular: "Type de piste audio"
            },
            "ja-JP": {
              singular: "オーディオトラックのタイプ"
            },
            "ko-KR": {
              singular: "오디오 트랙 유형"
            },
            "pt-BR": {
              singular: "Tipo de faixa de áudio"
            },
            "zh-CN": {
              singular: "音频轨道类型"
            }
          }
        }),
        availableItems: _v7,
        selectedItems: [...(_v2[_v299.Filters.AUDIO_TYPE_AND_PROVENANCE] ?? [])],
        isLoading: _v14,
        hasError: !!_v13,
        onItemSelectionUpdate: _v6,
        placeholderText: (0, _v30.translate)({
          singular: "Search track type",
          dictionary: {
            es: {
              singular: "Buscar tipo de pista"
            },
            "de-DE": {
              singular: "Tracktyp suchen"
            },
            "fr-FR": {
              singular: "Type de piste de recherche"
            },
            "ja-JP": {
              singular: "トラックのタイプを検索"
            },
            "ko-KR": {
              singular: "트랙 유형 검색"
            },
            "pt-BR": {
              singular: "Pesquisar tipo de faixa"
            },
            "zh-CN": {
              singular: "搜索轨道类型"
            }
          }
        })
      }, _v299.Filters.AUDIO_TYPE_AND_PROVENANCE);
    };
  var _v370 = _v0.i(0);
  let _v371 = ({
    filtersToApply: _v0,
    selectedItems: _v1,
    selectedItemsToApply: _v2,
    startDate: _v3,
    endDate: _v4,
    userInUse: _v5,
    onItemSelectionUpdate: _v6
  }) => {
    let [_v7, _v8] = (0, _v4.useState)([]),
      {
        isOrionLoading: _v9,
        queryParam: _v10
      } = (0, _v338.useAnalyticsFreshness)(),
      _v11 = (0, _v4.useMemo)(() => {
        let _v0 = _v366(_v299.Filters.DEVICE, _v1);
        return (0, _v367.getFiltersObject)(_v0, _v0);
      }, [_v0, _v1]),
      {
        data: _v12,
        error: _v13,
        isLoading: _v14
      } = (0, _v193.useGetUserAnalytics)(() => _v9 ? null : {
        select: ["deviceType", "views"],
        where: {
          userId: _v5.id
        },
        query: {
          from: _v3.toISO(),
          to: _v4.toISO(),
          dimension: "total",
          dimensions: ["device_type"],
          direction: "desc",
          ..._v11,
          sort: "views",
          page: 1,
          perPage: 200,
          ..._v10
        }
      }, _v362);
    return (0, _v4.useEffect)(() => {
      let _v0;
      _v13 ? (0, _v308.logError)("Trouble retrieving Device Filter data", _v13) : _v8(_v12?.data ? (_v0 = _v12?.data, _v0?.map(_v0 => {
        let _v1 = _v0?.deviceType;
        return {
          id: _v1,
          name: _v1 && _v359[_v358[_v1]] ? _v359[_v358[_v1]] : (0, _v370.default)(_v1)
        };
      })) : []);
    }, [_v12, _v13]), (0, _v3.jsx)(_v351, {
      filterKey: _v299.Filters.DEVICE,
      name: (0, _v30.translate)({
        singular: "Device",
        dictionary: {
          es: {
            singular: "Dispositivo"
          },
          "de-DE": {
            singular: "Gerät"
          },
          "fr-FR": {
            singular: "Appareil"
          },
          "ja-JP": {
            singular: "デバイス"
          },
          "ko-KR": {
            singular: "기기"
          },
          "pt-BR": {
            singular: "Dispositivo"
          },
          "zh-CN": {
            singular: "设备"
          }
        }
      }),
      availableItems: _v7,
      selectedItems: [...(_v2[_v299.Filters.DEVICE] ?? [])],
      isLoading: _v14,
      hasError: !!_v13,
      onItemSelectionUpdate: _v6,
      placeholderText: (0, _v30.translate)({
        singular: "Search device",
        dictionary: {
          es: {
            singular: "Buscar dispositivo"
          },
          "de-DE": {
            singular: "Gerät durchsuchen"
          },
          "fr-FR": {
            singular: "Rechercher un appareil"
          },
          "ja-JP": {
            singular: "デバイスを検索"
          },
          "ko-KR": {
            singular: "디바이스 검색"
          },
          "pt-BR": {
            singular: "Pesquisar dispositivo"
          },
          "zh-CN": {
            singular: "搜索设备"
          }
        }
      })
    }, _v299.Filters.DEVICE);
  };
  var _v372 = _v0.i(0),
    _v373 = _v0.i(0),
    _v374 = _v0.i(0),
    _v375 = _v0.i(0),
    _v376 = _v0.i(0),
    _v377 = _v0.i(0),
    _v378 = _v0.i(0),
    _v379 = _v0.i(0),
    _v380 = _v0.i(0),
    _v381 = _v0.i(0),
    _v382 = _v0.i(0),
    _v383 = _v0.i(0),
    _v384 = _v0.i(0);
  let _v385 = ({
      isMobile: _v0,
      isPanelOpen: _v1,
      isDrawerOpen: _v2,
      isClearDisabled: _v3,
      totalAppliedFiltersItems: _v4,
      listOfExpandedItems: _v5,
      openDrawer: _v6,
      closeDrawer: _v7,
      onClear: _v8,
      onApply: _v9,
      setIsPanelOpen: _v10,
      setListOfExpandedItems: _v11,
      children: _v12
    }) => (0, _v3.jsxs)(_v3.Fragment, {
      children: [(0, _v3.jsxs)(_v74.Button, {
        onClick: () => {
          _v6(), _v10(!0);
        },
        "data-id": "analyticsFilterPanel",
        leftIcon: (0, _v3.jsx)(_v376.Filter, {}),
        variant: "tertiary",
        isActive: _v1 || _v4 > 0,
        children: [(0, _v30.translate)({
          singular: "Filters",
          dictionary: {
            es: {
              singular: "Filtros"
            },
            "de-DE": {
              singular: "Filter"
            },
            "fr-FR": {
              singular: "Filtres"
            },
            "ja-JP": {
              singular: "フィルター"
            },
            "ko-KR": {
              singular: "필터"
            },
            "pt-BR": {
              singular: "Filtros"
            },
            "zh-CN": {
              singular: "过滤器"
            }
          }
        }), " ", _v4 > 0 && `(${_v4})`]
      }), (0, _v3.jsxs)(_v379.Drawer, {
        isOpen: _v0 && (_v2 || _v1),
        placement: "bottom",
        onClose: () => {
          _v7(), _v10(!1);
        },
        children: [(0, _v3.jsx)(_v384.DrawerOverlay, {}), (0, _v3.jsx)(_v377.motion.div, {
          drag: "y",
          dragConstraints: {
            top: 0,
            bottom: 100
          },
          onDragEnd: (_v0, _v1) => {
            _v1.offset.y < 0 || (_v2 ? _v7() : _v6());
          },
          children: (0, _v3.jsxs)(_v381.DrawerContent, {
            maxHeight: "calc(100vh - 4rem)",
            children: [(0, _v3.jsx)(_v378.bokeh.hr, {
              backgroundColor: "text-tertiary",
              alignSelf: "center",
              paddingY: (0, _v7.rem)(2),
              width: (0, _v7.rem)(70),
              border: "none",
              borderRadius: (0, _v7.rem)(10),
              my: "sm"
            }), (0, _v3.jsxs)(_v383.DrawerHeader, {
              display: "flex",
              textStyle: "heading-sm",
              fontSize: "heading-sm",
              padding: "0.25rem 1.75rem 1rem 2rem",
              children: [(0, _v30.translate)({
                singular: "Filters",
                dictionary: {
                  es: {
                    singular: "Filtros"
                  },
                  "de-DE": {
                    singular: "Filter"
                  },
                  "fr-FR": {
                    singular: "Filtres"
                  },
                  "ja-JP": {
                    singular: "フィルター"
                  },
                  "ko-KR": {
                    singular: "필터"
                  },
                  "pt-BR": {
                    singular: "Filtros"
                  },
                  "zh-CN": {
                    singular: "过滤器"
                  }
                }
              }), (0, _v3.jsx)(_v40.IconButton, {
                "aria-label": "close-icon",
                variant: "tertiary",
                size: "sm",
                icon: (0, _v3.jsx)(_v329.CloseX, {}),
                onClick: () => {
                  _v7(), _v10(!1);
                }
              })]
            }), (0, _v3.jsx)(_v380.DrawerBody, {
              padding: "0 1rem 1rem 1rem",
              children: (0, _v3.jsx)(_v5.Box, {
                overflowY: "auto",
                children: (0, _v3.jsx)(_v372.Accordion, {
                  allowMultiple: !0,
                  allowToggle: !0,
                  index: _v5,
                  onChange: _v0 => _v11(_v0),
                  children: _v12
                })
              })
            }), (0, _v3.jsx)(_v382.DrawerFooter, {
              padding: "0.5rem",
              children: (0, _v3.jsxs)(_v6.Flex, {
                width: "100%",
                padding: "0.5rem",
                gap: "0.5rem",
                children: [_v3 && (0, _v3.jsx)(_v74.Button, {
                  width: "100%",
                  size: "md",
                  variant: "tertiary",
                  onClick: () => {
                    _v8(), _v7(), _v10(!1);
                  },
                  children: (0, _v30.translate)({
                    singular: "Clear all",
                    dictionary: {
                      es: {
                        singular: "Borrar todo"
                      },
                      "de-DE": {
                        singular: "Alle löschen"
                      },
                      "fr-FR": {
                        singular: "Tout supprimer"
                      },
                      "ja-JP": {
                        singular: "すべて削除"
                      },
                      "ko-KR": {
                        singular: "모두 지우기"
                      },
                      "pt-BR": {
                        singular: "Limpar tudo"
                      },
                      "zh-CN": {
                        singular: "清除全部"
                      }
                    }
                  })
                }), (0, _v3.jsx)(_v74.Button, {
                  width: "100%",
                  size: "md",
                  variant: "primary",
                  onClick: () => {
                    _v9(), _v7(), _v10(!1);
                  },
                  children: (0, _v30.translate)({
                    singular: "Apply",
                    dictionary: {
                      es: {
                        singular: "Aplicar"
                      },
                      "de-DE": {
                        singular: "Anwenden"
                      },
                      "fr-FR": {
                        singular: "Appliquer"
                      },
                      "ja-JP": {
                        singular: "適用する"
                      },
                      "ko-KR": {
                        singular: "적용"
                      },
                      "pt-BR": {
                        singular: "Aplicar"
                      },
                      "zh-CN": {
                        singular: "应用"
                      }
                    }
                  })
                })]
              })
            })]
          })
        })]
      })]
    }),
    _v386 = ({
      children: _v0,
      totalAppliedFiltersItems: _v1,
      isClearDisabled: _v2,
      keepOpenWhileNestedModalOpen: _v3 = !1,
      onApply: _v4,
      onClear: _v5
    }) => {
      let _v6 = (0, _v4.useRef)(null),
        [_v7] = (0, _v8.useToken)("breakpoints", ["md"]),
        [_v8] = (0, _v9.useMediaQuery)([`(max-width: ${_v7})`]),
        {
          isOpen: _v9,
          onOpen: _v10,
          onClose: _v11
        } = (0, _v375.useDisclosure)(),
        [_v12, _v13] = (0, _v4.useState)(!1),
        _v14 = (0, _v152.useColorModeValue)("#F2F5F7", "#3D4751"),
        [_v15, _v16] = (0, _v4.useState)([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      return ((0, _v304.useOutsideClick)({
        enabled: !_v3,
        ref: _v6,
        handler: () => _v13(!1)
      }), _v8) ? (0, _v3.jsx)(_v385, {
        isMobile: _v8,
        isPanelOpen: _v12,
        isDrawerOpen: _v9,
        isClearDisabled: _v2,
        totalAppliedFiltersItems: _v1,
        listOfExpandedItems: _v15,
        openDrawer: _v10,
        closeDrawer: _v11,
        onClear: _v5,
        onApply: _v4,
        setIsPanelOpen: _v13,
        setListOfExpandedItems: _v16,
        children: _v0
      }) : (0, _v3.jsx)(_v5.Box, {
        ref: _v6,
        children: (0, _v3.jsxs)(_v292.Popover, {
          placement: "bottom-end",
          isOpen: _v12,
          isLazy: !0,
          children: [(0, _v3.jsx)(_v294.PopoverTrigger, {
            children: (0, _v3.jsxs)(_v74.Button, {
              onClick: () => _v13(_v0 => !_v0),
              "data-id": "analyticsFilterPanel",
              leftIcon: (0, _v3.jsx)(_v376.Filter, {}),
              variant: "tertiary",
              isActive: _v12 || _v1 > 0,
              children: [(0, _v30.translate)({
                singular: "Filters",
                dictionary: {
                  es: {
                    singular: "Filtros"
                  },
                  "de-DE": {
                    singular: "Filter"
                  },
                  "fr-FR": {
                    singular: "Filtres"
                  },
                  "ja-JP": {
                    singular: "フィルター"
                  },
                  "ko-KR": {
                    singular: "필터"
                  },
                  "pt-BR": {
                    singular: "Filtros"
                  },
                  "zh-CN": {
                    singular: "过滤器"
                  }
                }
              }), " ", _v1 > 0 && `(${_v1})`]
            })
          }), (0, _v3.jsxs)(_v293.PopoverContent, {
            width: "18.125rem",
            padding: "0",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            maxHeight: "calc(100vh - 10rem)",
            children: [(0, _v3.jsxs)(_v6.Flex, {
              padding: "1rem",
              justifyContent: "space-between",
              flexShrink: 0,
              children: [(0, _v3.jsx)(_v374.PopoverHeader, {
                textStyle: "heading-sm",
                children: (0, _v30.translate)({
                  singular: "Filters",
                  dictionary: {
                    es: {
                      singular: "Filtros"
                    },
                    "de-DE": {
                      singular: "Filter"
                    },
                    "fr-FR": {
                      singular: "Filtres"
                    },
                    "ja-JP": {
                      singular: "フィルター"
                    },
                    "ko-KR": {
                      singular: "필터"
                    },
                    "pt-BR": {
                      singular: "Filtros"
                    },
                    "zh-CN": {
                      singular: "过滤器"
                    }
                  }
                })
              }), (0, _v3.jsx)(_v373.PopoverCloseButton, {
                onClick: () => _v13(!1)
              })]
            }), (0, _v3.jsx)(_v5.Box, {
              padding: "0.5rem",
              overflowY: "auto",
              flex: "1 1 auto",
              minHeight: 0,
              children: (0, _v3.jsx)(_v372.Accordion, {
                allowMultiple: !0,
                allowToggle: !0,
                index: _v15,
                onChange: _v0 => _v16(_v0),
                children: _v0
              })
            }), (0, _v3.jsxs)(_v6.Flex, {
              height: "3rem",
              width: "100%",
              background: _v14,
              opacity: "1",
              padding: "0.5rem",
              gap: "0.5rem",
              flexShrink: 0,
              children: [_v2 && (0, _v3.jsx)(_v74.Button, {
                width: "100%",
                size: "sm",
                variant: "tertiary",
                onClick: () => {
                  _v5(), _v13(!1);
                },
                children: (0, _v30.translate)({
                  singular: "Clear all",
                  dictionary: {
                    es: {
                      singular: "Borrar todo"
                    },
                    "de-DE": {
                      singular: "Alle löschen"
                    },
                    "fr-FR": {
                      singular: "Tout supprimer"
                    },
                    "ja-JP": {
                      singular: "すべて削除"
                    },
                    "ko-KR": {
                      singular: "모두 지우기"
                    },
                    "pt-BR": {
                      singular: "Limpar tudo"
                    },
                    "zh-CN": {
                      singular: "清除全部"
                    }
                  }
                })
              }), (0, _v3.jsx)(_v74.Button, {
                width: "100%",
                size: "sm",
                variant: "primary",
                onClick: () => {
                  _v4(), _v13(!1);
                },
                children: (0, _v30.translate)({
                  singular: "Apply",
                  dictionary: {
                    es: {
                      singular: "Aplicar"
                    },
                    "de-DE": {
                      singular: "Anwenden"
                    },
                    "fr-FR": {
                      singular: "Appliquer"
                    },
                    "ja-JP": {
                      singular: "適用する"
                    },
                    "ko-KR": {
                      singular: "적용"
                    },
                    "pt-BR": {
                      singular: "Aplicar"
                    },
                    "zh-CN": {
                      singular: "应用"
                    }
                  }
                })
              })]
            })]
          })]
        })
      });
    },
    _v387 = ({
      userInUse: _v0,
      calendarPresets: _v1,
      dispatch: _v2,
      filters: _v3,
      isDisabled: _v4,
      rangeText: _v5,
      setRangeText: _v6,
      onValueChange: _v7,
      activePreset: _v8,
      setActivePreset: _v9
    }) => {
      let {
        startDate: _v10,
        endDate: _v11,
        filterLists: _v12
      } = _v3;
      return (0, _v3.jsxs)(_v341.AccordionItem, {
        children: [(0, _v3.jsxs)(_v339.AccordionButton, {
          children: [(0, _v3.jsx)(_v5.Box, {
            as: "span",
            flex: "1",
            textAlign: "left",
            children: (0, _v30.translate)({
              singular: "Date modified",
              dictionary: {
                es: {
                  singular: "Fecha de modificación"
                },
                "de-DE": {
                  singular: "Datum der Änderung"
                },
                "fr-FR": {
                  singular: "Date modifié"
                },
                "ja-JP": {
                  singular: "変更された日付"
                },
                "ko-KR": {
                  singular: "수정 날짜"
                },
                "pt-BR": {
                  singular: "Data de modificação"
                },
                "zh-CN": {
                  singular: "日期已修改"
                }
              }
            })
          }), (0, _v3.jsx)(_v340.AccordionIcon, {})]
        }), (0, _v3.jsx)(_v342.AccordionPanel, {
          padding: "0",
          children: (0, _v3.jsx)(_v337, {
            userInUse: _v0,
            calendarPresets: _v1,
            dispatch: _v2,
            filters: {
              startDate: _v10,
              endDate: _v11,
              filterLists: _v12
            },
            isDisabled: _v4,
            rangeText: _v5,
            setRangeText: _v6,
            onValueChange: _v7,
            activePreset: _v8,
            setActivePreset: _v9,
            isMobile: !0
          })
        })]
      });
    },
    _v388 = ({
      filtersToApply: _v0,
      selectedItems: _v1,
      selectedItemsToApply: _v2,
      startDate: _v3,
      endDate: _v4,
      userInUse: _v5,
      onItemSelectionUpdate: _v6
    }) => {
      let [_v7, _v8] = (0, _v4.useState)([]),
        {
          isOrionLoading: _v9,
          queryParam: _v10
        } = (0, _v338.useAnalyticsFreshness)(),
        _v11 = (0, _v4.useMemo)(() => {
          let _v0 = _v366(_v299.Filters.REGION, _v1);
          return (0, _v367.getFiltersObject)(_v0, _v0);
        }, [_v0, _v1]),
        {
          data: _v12,
          error: _v13,
          isLoading: _v14
        } = (0, _v193.useGetUserAnalytics)(() => _v9 ? null : {
          select: ["country", "views"],
          where: {
            userId: _v5.id
          },
          query: {
            from: _v3.toISO(),
            to: _v4.toISO(),
            dimension: "total",
            dimensions: ["country"],
            direction: "desc",
            ..._v11,
            sort: "views",
            page: 1,
            perPage: 200,
            ..._v10
          }
        }, _v362);
      return (0, _v4.useEffect)(() => {
        let _v0;
        _v13 ? (0, _v308.logError)("Trouble retrieving Region Filter data", _v13) : _v8(_v12?.data ? (_v0 = _v12?.data, _v0?.map(_v0 => ({
          id: _v0?.country?.code,
          name: _v0?.country?.name?.toLowerCase() === "unknown" ? (0, _v30.translate)({
            singular: "Unknown",
            dictionary: {
              es: {
                singular: "Desconocido"
              },
              "de-DE": {
                singular: "Unbekannt"
              },
              "fr-FR": {
                singular: "Inconnu"
              },
              "ja-JP": {
                singular: "不明"
              },
              "ko-KR": {
                singular: "알 수 없음"
              },
              "pt-BR": {
                singular: "Desconhecido"
              },
              "zh-CN": {
                singular: "未知"
              }
            }
          }) : _v0?.country?.name
        }))) : []);
      }, [_v12, _v13]), (0, _v3.jsx)(_v351, {
        filterKey: _v299.Filters.REGION,
        name: (0, _v30.translate)({
          singular: "Region",
          dictionary: {
            es: {
              singular: "Región"
            },
            "fr-FR": {
              singular: "Région"
            },
            "ja-JP": {
              singular: "地域"
            },
            "ko-KR": {
              singular: "지역"
            },
            "pt-BR": {
              singular: "Região"
            },
            "zh-CN": {
              singular: "区域"
            }
          }
        }),
        availableItems: _v7,
        selectedItems: [...(_v2[_v299.Filters.REGION] ?? [])],
        isLoading: _v14,
        hasError: !!_v13,
        onItemSelectionUpdate: _v6,
        placeholderText: (0, _v30.translate)({
          singular: "Search region",
          dictionary: {
            es: {
              singular: "Región de búsqueda"
            },
            "de-DE": {
              singular: "Region suchen"
            },
            "fr-FR": {
              singular: "Région de recherche"
            },
            "ja-JP": {
              singular: "地域を検索"
            },
            "ko-KR": {
              singular: "지역 검색"
            },
            "pt-BR": {
              singular: "Pesquisar região"
            },
            "zh-CN": {
              singular: "搜索地区"
            }
          }
        })
      }, _v299.Filters.REGION);
    },
    _v389 = ({
      filtersToApply: _v0,
      selectedItems: _v1,
      selectedItemsToApply: _v2,
      startDate: _v3,
      endDate: _v4,
      userInUse: _v5,
      onItemSelectionUpdate: _v6
    }) => {
      let [_v7, _v8] = (0, _v4.useState)([]),
        {
          isOrionLoading: _v9,
          queryParam: _v10
        } = (0, _v338.useAnalyticsFreshness)(),
        _v11 = (0, _v4.useMemo)(() => {
          let _v0 = _v366(_v299.Filters.SOURCE_URL, _v1);
          return (0, _v367.getFiltersObject)(_v0, _v0);
        }, [_v0, _v1]),
        {
          data: _v12,
          error: _v13,
          isLoading: _v14
        } = (0, _v193.useGetUserAnalytics)(() => _v9 ? null : {
          select: ["embedDomain", "views"],
          where: {
            userId: _v5.id
          },
          query: {
            from: _v3.toISO(),
            to: _v4.toISO(),
            dimension: "total",
            dimensions: ["embed_domain"],
            direction: "desc",
            ..._v11,
            sort: "views",
            page: 1,
            perPage: 200,
            ..._v10
          }
        }, _v362);
      return (0, _v4.useEffect)(() => {
        let _v0;
        _v13 ? (0, _v308.logError)("Trouble retrieving Source Filter data", _v13) : _v8(_v12?.data ? (_v0 = _v12?.data, _v0?.map(_v0 => ({
          id: _v0?.embedDomain,
          name: _v0?.embedDomain?.toLowerCase() === "unknown" ? (0, _v30.translate)({
            singular: "Unknown",
            dictionary: {
              es: {
                singular: "Desconocido"
              },
              "de-DE": {
                singular: "Unbekannt"
              },
              "fr-FR": {
                singular: "Inconnu"
              },
              "ja-JP": {
                singular: "不明"
              },
              "ko-KR": {
                singular: "알 수 없음"
              },
              "pt-BR": {
                singular: "Desconhecido"
              },
              "zh-CN": {
                singular: "未知"
              }
            }
          }) : _v0?.embedDomain?.toLowerCase()
        }))) : []);
      }, [_v12, _v13]), (0, _v3.jsx)(_v351, {
        filterKey: _v299.Filters.SOURCE_URL,
        name: (0, _v30.translate)({
          singular: "Source",
          dictionary: {
            es: {
              singular: "Fuente"
            },
            "de-DE": {
              singular: "Quelle"
            },
            "ja-JP": {
              singular: "ソース"
            },
            "ko-KR": {
              singular: "소스"
            },
            "pt-BR": {
              singular: "Fonte"
            },
            "zh-CN": {
              singular: "来源"
            }
          }
        }),
        availableItems: _v7,
        selectedItems: [...(_v2[_v299.Filters.SOURCE_URL] ?? [])],
        isLoading: _v14,
        hasError: !!_v13,
        onItemSelectionUpdate: _v6,
        placeholderText: (0, _v30.translate)({
          singular: "Search source",
          dictionary: {
            es: {
              singular: "Buscar fuente"
            },
            "de-DE": {
              singular: "Quelle durchsuchen"
            },
            "fr-FR": {
              singular: "Source de recherche"
            },
            "ja-JP": {
              singular: "ソースを検索"
            },
            "ko-KR": {
              singular: "소스 검색"
            },
            "pt-BR": {
              singular: "Pesquisar fonte"
            },
            "zh-CN": {
              singular: "搜索来源"
            }
          }
        })
      }, _v299.Filters.SOURCE_URL);
    },
    _v390 = [{
      id: "live",
      name: _v179.STREAMING_TYPES_DISPLAY_MAP.Live
    }, {
      id: "video",
      name: _v179.STREAMING_TYPES_DISPLAY_MAP.Non_live
    }],
    _v391 = ({
      selectedItemsToApply: _v0,
      onItemSelectionUpdate: _v1
    }) => (0, _v3.jsx)(_v351, {
      filterKey: _v299.Filters.STREAMING_TYPE,
      name: (0, _v30.translate)({
        singular: "View type",
        dictionary: {
          es: {
            singular: "Tipo de vista"
          },
          "de-DE": {
            singular: "Ansichtstyp"
          },
          "fr-FR": {
            singular: "Type de vue"
          },
          "ja-JP": {
            singular: "表示タイプ"
          },
          "ko-KR": {
            singular: "보기 유형"
          },
          "pt-BR": {
            singular: "Tipo de visualização"
          },
          "zh-CN": {
            singular: "视图类型"
          }
        }
      }),
      availableItems: _v390,
      selectedItems: [...(_v0[_v299.Filters.STREAMING_TYPE] ?? [])],
      isLoading: !1,
      hasError: !1,
      onItemSelectionUpdate: _v1
    }, _v299.Filters.STREAMING_TYPE),
    _v392 = ({
      filtersToApply: _v0,
      selectedItems: _v1,
      selectedItemsToApply: _v2,
      startDate: _v3,
      endDate: _v4,
      userInUse: _v5,
      onItemSelectionUpdate: _v6
    }) => {
      let _v7 = (0, _v284.useViewer)(),
        [_v8, _v9] = (0, _v4.useState)([]),
        {
          isOrionLoading: _v10,
          queryParam: _v11
        } = (0, _v338.useAnalyticsFreshness)(),
        _v12 = (0, _v4.useMemo)(() => {
          let _v0 = _v366(_v299.Filters.TEXT_LANGUAGE, _v1);
          return (0, _v367.getFiltersObject)(_v0, _v0);
        }, [_v0, _v1]),
        {
          data: _v13,
          error: _v14,
          isLoading: _v15
        } = (0, _v193.useGetUserAnalytics)(() => _v10 ? null : {
          select: ["textTrackLanguage", "views"],
          where: {
            userId: _v5.id
          },
          query: {
            from: _v3.toISO(),
            to: _v4.toISO(),
            dimension: "total",
            dimensions: ["text_track_language"],
            direction: "desc",
            ..._v12,
            sort: "views",
            page: 1,
            perPage: 200,
            ..._v11
          }
        }, _v362);
      return (0, _v4.useEffect)(() => {
        _v14 ? (0, _v308.logError)("Trouble retrieving Text Track Language Filter data", _v14) : _v9(_v13?.data ? _v13?.data?.map(_v0 => ((_v0, _v1 = "en-US") => ({
          id: _v0.textTrackLanguage,
          name: _v363(_v0.textTrackLanguage, _v1)
        }))(_v0, _v7?.locale)) : []);
      }, [_v13, _v14, _v7?.locale]), (0, _v3.jsx)(_v351, {
        filterKey: _v299.Filters.TEXT_LANGUAGE,
        name: (0, _v30.translate)({
          singular: "Subtitles and captions language",
          dictionary: {
            es: {
              singular: "Idioma de subtítulos y leyendas"
            },
            "de-DE": {
              singular: "Sprache der Untertitel und Bildunterschriften"
            },
            "fr-FR": {
              singular: "Langue des sous-titres et des sous-titres (SME)"
            },
            "ja-JP": {
              singular: "字幕とキャプションの言語"
            },
            "ko-KR": {
              singular: "자막 및 캡션 언어"
            },
            "pt-BR": {
              singular: "Idioma das legendas e closed captions"
            },
            "zh-CN": {
              singular: "字幕和隐藏式字幕语言"
            }
          }
        }),
        availableItems: _v8,
        selectedItems: [...(_v2[_v299.Filters.TEXT_LANGUAGE] ?? [])],
        isLoading: _v15,
        hasError: !!_v14,
        onItemSelectionUpdate: _v6,
        placeholderText: (0, _v30.translate)({
          singular: "Search language",
          dictionary: {
            es: {
              singular: "Idioma de búsqueda"
            },
            "de-DE": {
              singular: "Suchsprache"
            },
            "fr-FR": {
              singular: "Langue de recherche"
            },
            "ja-JP": {
              singular: "言語を検索"
            },
            "ko-KR": {
              singular: "언어 검색"
            },
            "pt-BR": {
              singular: "Pesquisar idioma"
            },
            "zh-CN": {
              singular: "搜索语言"
            }
          }
        })
      }, _v299.Filters.TEXT_LANGUAGE);
    },
    _v393 = ({
      filtersToApply: _v0,
      selectedItems: _v1,
      selectedItemsToApply: _v2,
      startDate: _v3,
      endDate: _v4,
      userInUse: _v5,
      onItemSelectionUpdate: _v6
    }) => {
      let [_v7, _v8] = (0, _v4.useState)([]),
        {
          isOrionLoading: _v9,
          queryParam: _v10
        } = (0, _v338.useAnalyticsFreshness)(),
        _v11 = (0, _v4.useMemo)(() => {
          let _v0 = _v366(_v299.Filters.TEXT_TYPE_AND_PROVENANCE, _v1);
          return (0, _v367.getFiltersObject)(_v0, _v0);
        }, [_v0, _v1]),
        {
          data: _v12,
          error: _v13,
          isLoading: _v14
        } = (0, _v193.useGetUserAnalytics)(() => _v9 ? null : {
          select: ["textTrackType", "textTrackProvenance", "views"],
          where: {
            userId: _v5.id
          },
          query: {
            from: _v3.toISO(),
            to: _v4.toISO(),
            dimension: "total",
            dimensions: ["text_track_type", "text_track_provenance"],
            direction: "desc",
            ..._v11,
            sort: "views",
            page: 1,
            perPage: 200,
            ..._v10
          }
        }, _v362);
      return (0, _v4.useEffect)(() => {
        _v13 ? (0, _v308.logError)("Trouble retrieving Text Track Type Filter data", _v13) : _v8(_v12?.data ? _v12?.data?.map(_v0 => _v364(_v0)) : []);
      }, [_v12, _v13]), (0, _v3.jsx)(_v351, {
        filterKey: _v299.Filters.TEXT_TYPE_AND_PROVENANCE,
        name: (0, _v30.translate)({
          singular: "Subtitles and caption type",
          dictionary: {
            es: {
              singular: "Subtítulos y tipo de leyendas"
            },
            "de-DE": {
              singular: "Untertitel- und Beschriftungstyp"
            },
            "fr-FR": {
              singular: "Type de sous-titres et de sous-titres (SME)"
            },
            "ja-JP": {
              singular: "字幕とキャプションのタイプ"
            },
            "ko-KR": {
              singular: "자막 및 캡션 유형"
            },
            "pt-BR": {
              singular: "Tipo de legendas e closed captions"
            },
            "zh-CN": {
              singular: "字幕和字幕说明类型"
            }
          }
        }),
        availableItems: _v7,
        selectedItems: [...(_v2[_v299.Filters.TEXT_TYPE_AND_PROVENANCE] ?? [])],
        isLoading: _v14,
        hasError: !!_v13,
        onItemSelectionUpdate: _v6,
        placeholderText: (0, _v30.translate)({
          singular: "Search track type",
          dictionary: {
            es: {
              singular: "Buscar tipo de pista"
            },
            "de-DE": {
              singular: "Tracktyp suchen"
            },
            "fr-FR": {
              singular: "Type de piste de recherche"
            },
            "ja-JP": {
              singular: "トラックのタイプを検索"
            },
            "ko-KR": {
              singular: "트랙 유형 검색"
            },
            "pt-BR": {
              singular: "Pesquisar tipo de faixa"
            },
            "zh-CN": {
              singular: "搜索轨道类型"
            }
          }
        })
      }, _v299.Filters.TEXT_TYPE_AND_PROVENANCE);
    };
  var _v394 = _v0.i(0),
    _v395 = _v0.i(0),
    _v396 = _v0.i(0);
  function _v397(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v63.useGctlConfig)();
    return (0, _v71.default)(_v2 ? `/me/workspaces${(0, _v58.serializeQuery)(_v2)}` : () => null, _v2 ? () => (0, _v396.getMeWorkspaces)({
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
  "true" === _v57.default.env.STORYBOOK && (0, _v58.assignMswData)(_v397, {
    endpoint: "/me/workspaces",
    method: "GET"
  }), "true" === _v57.default.env.STORYBOOK && (0, _v58.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v62.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v63.useGctlConfig)(),
      [_v5, _v6] = (0, _v58.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/workspaces${(0, _v58.serializeQuery)(_v0)}`, (0, _v396.getMeWorkspaces)({
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
    endpoint: "/me/workspaces",
    method: "GET"
  }), "true" === _v57.default.env.STORYBOOK && (0, _v58.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v63.useGctlConfig)();
    return (0, _v195.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/me/workspaces?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => (0, _v396.getMeWorkspaces)({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/me/workspaces",
    method: "GET"
  });
  var _v398 = _v0.i(0);
  let _v399 = ({
      name: _v0,
      src: _v1,
      fontSize: _v2
    }) => (0, _v3.jsxs)(_v394.HStack, {
      gap: "0.5rem",
      children: [(0, _v3.jsx)(_v395.Avatar, {
        size: "xs",
        alt: "avatar",
        src: _v1,
        nameProps: {
          name: _v0
        }
      }), (0, _v3.jsx)(_v5.Box, {
        maxWidth: "8.7rem",
        children: (0, _v3.jsx)(_v46.Text, {
          fontSize: _v2,
          isTruncated: !0,
          variant: "body-xl",
          children: _v0
        })
      })]
    }),
    _v400 = ({
      isLoading: _v0,
      hasError: _v1,
      children: _v2
    }) => _v0 ? (0, _v3.jsx)(_v343.Center, {
      flex: "1",
      children: (0, _v3.jsx)(_v10.Spinner, {
        size: "xs"
      })
    }) : _v1 ? (0, _v3.jsx)(_v6.Flex, {
      direction: "column",
      flex: "1",
      padding: "1rem",
      children: (0, _v3.jsx)(_v398.GeneralErrorMessage, {})
    }) : (0, _v3.jsx)(_v3.Fragment, {
      children: _v2
    }),
    _v401 = ({
      workspacesCount: _v0,
      children: _v1
    }) => _v0 && 0 !== _v0 ? _v0 > 1 ? (0, _v3.jsxs)(_v46.Text, {
      variant: "heading-xs",
      children: ["Workspace (", _v0, ")"]
    }) : (0, _v3.jsx)(_v3.Fragment, {
      children: _v1
    }) : (0, _v3.jsx)(_v46.Text, {
      variant: "heading-xs",
      children: "Workspace"
    }),
    _v402 = ({
      organizationUuid: _v0,
      dispatch: _v1,
      filterLists: _v2
    }) => {
      let _v3 = _v2?.[_v299.Filters.WORKSPACES]?.length ? _v2?.[_v299.Filters.WORKSPACES] : [],
        _v4 = (0, _v284.useViewer)(),
        _v5 = (0, _v4.useRef)(null),
        [_v6, _v7] = (0, _v4.useState)(_v3),
        [_v8, _v9] = (0, _v4.useState)(!1),
        {
          data: _v10,
          isLoading: _v11,
          error: _v12
        } = _v397(() => _v0 ? {
          select: ["displayName", "teamOwnerId", "icon.baseLink"],
          query: {
            orgUuid: _v0,
            permission: "manage"
          }
        } : null, {
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1
        }),
        _v13 = (0, _v4.useMemo)(() => {
          let _v0;
          return _v12 ? void (0, _v308.logError)("Trouble retrieving Workspace Filter data", _v12) : _v10?.data ? (_v0 = _v10?.data, _v0?.map(_v0 => ({
            id: _v0?.teamOwnerId,
            name: _v0?.displayName,
            icon: _v0?.icon?.baseLink
          }))) : [];
        }, [_v10, _v12]);
      (0, _v304.useOutsideClick)({
        ref: _v5,
        handler: () => {
          _v9(!1), _v7(_v3);
        }
      });
      let _v14 = _v6?.length;
      return (0, _v3.jsx)(_v5.Box, {
        ref: _v5,
        children: (0, _v3.jsxs)(_v292.Popover, {
          placement: "bottom-end",
          isOpen: _v8,
          isLazy: !0,
          children: [(0, _v3.jsx)(_v294.PopoverTrigger, {
            children: (0, _v3.jsx)(_v74.Button, {
              onClick: () => _v9(_v0 => !_v0),
              variant: "tertiary",
              isActive: _v8 || _v14 > 0,
              rightIcon: (0, _v3.jsx)(_v305.ChevronDownSmall, {}),
              children: (0, _v3.jsx)(_v401, {
                workspacesCount: _v14,
                children: (0, _v3.jsx)(_v399, {
                  name: _v6?.[0]?.name,
                  src: _v6?.[0]?.icon ?? "",
                  fontSize: "heading/xs"
                })
              })
            })
          }), (0, _v3.jsx)(_v293.PopoverContent, {
            width: "13.75rem",
            minWidth: "13.75rem",
            minHeight: "14rem",
            maxHeight: "25rem",
            padding: "0",
            children: (0, _v3.jsxs)(_v6.Flex, {
              flexDirection: "column",
              justifyContent: "space-between",
              flex: "1",
              children: [(0, _v3.jsx)(_v400, {
                isLoading: _v11,
                hasError: !!_v12,
                children: (0, _v3.jsx)(_v346.VStack, {
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  padding: "1rem",
                  overflowY: "auto",
                  overflowX: "hidden",
                  maxHeight: "21rem",
                  children: _v13?.map(_v0 => (0, _v3.jsx)(_v311.Checkbox, {
                    isChecked: _v6?.some(_v0 => Number(_v0?.id) === Number(_v0?.id)),
                    onChange: _v0 => {
                      _v7(_v0 => _v0.target.checked ? [..._v0, _v0] : _v0.filter(_v0 => Number(_v0?.id) !== Number(_v0?.id)));
                    },
                    children: (0, _v3.jsx)(_v399, {
                      name: _v0?.name,
                      src: _v0?.icon ?? "",
                      fontSize: "body/md"
                    })
                  }, _v0?.id))
                })
              }), (0, _v3.jsx)(_v6.Flex, {
                padding: "1rem",
                justifyContent: "flex-end",
                children: (0, _v3.jsxs)(_v6.Flex, {
                  gap: "0.75rem",
                  children: [(0, _v3.jsx)(_v74.Button, {
                    isDisabled: _v11 || !!_v12,
                    size: "sm",
                    variant: "tertiary",
                    onClick: () => {
                      _v7([]), _v1({
                        type: _v299.REPORT_ACTION_TYPE.SET_FILTER_LIST,
                        payload: {
                          filterKey: _v299.Filters.WORKSPACES,
                          list: []
                        }
                      }), _v9(!1);
                    },
                    children: (0, _v30.translate)({
                      singular: "Clear all",
                      dictionary: {
                        es: {
                          singular: "Borrar todo"
                        },
                        "de-DE": {
                          singular: "Alle löschen"
                        },
                        "fr-FR": {
                          singular: "Tout supprimer"
                        },
                        "ja-JP": {
                          singular: "すべて削除"
                        },
                        "ko-KR": {
                          singular: "모두 지우기"
                        },
                        "pt-BR": {
                          singular: "Limpar tudo"
                        },
                        "zh-CN": {
                          singular: "清除全部"
                        }
                      }
                    })
                  }), (0, _v3.jsx)(_v74.Button, {
                    isDisabled: _v11 || !!_v12 || !_v14,
                    size: "sm",
                    variant: "primary",
                    onClick: () => {
                      let _v0 = _v6?.map(_v0 => ({
                        id: _v0?.id,
                        name: _v0?.name,
                        icon: _v0?.icon
                      }));
                      _v1({
                        type: _v299.REPORT_ACTION_TYPE.SET_FILTER_LIST,
                        payload: {
                          filterKey: _v299.Filters.WORKSPACES,
                          list: _v0
                        }
                      }), (0, _v32.sendFilterBarEvent)(_v299.Filters.WORKSPACES, _v0.map(_v0 => _v0?.id)?.join(","), window.location.pathname, _v4?.teamUser), _v9(!1);
                    },
                    children: (0, _v30.translate)({
                      singular: "Apply",
                      dictionary: {
                        es: {
                          singular: "Aplicar"
                        },
                        "de-DE": {
                          singular: "Anwenden"
                        },
                        "fr-FR": {
                          singular: "Appliquer"
                        },
                        "ja-JP": {
                          singular: "適用する"
                        },
                        "ko-KR": {
                          singular: "적용"
                        },
                        "pt-BR": {
                          singular: "Aplicar"
                        },
                        "zh-CN": {
                          singular: "应用"
                        }
                      }
                    })
                  })]
                })
              })]
            })
          })]
        })
      });
    },
    _v403 = _v0 => {
      let {
          userInUse: _v1,
          disabled: _v2,
          calendarPresets: _v3,
          filters: {
            startDate: _v4,
            endDate: _v5,
            filterLists: _v6
          },
          reportFilters: _v7,
          reportType: _v8,
          dispatch: _v9,
          leftAlign: _v10 = !1,
          organizationUuid: _v11,
          organizationInternalId: _v12,
          showFilterPanel: _v13
        } = _v0,
        _v14 = !!(_v12 && _v11),
        _v15 = (0, _v4.useContext)(_v28.ViewerContext),
        {
          trackAnalyticsDateRangeChanged: _v16,
          trackAnalyticsFilterApplied: _v17
        } = (0, _v13.useAnalyticsTracking)(),
        [_v18, _v19] = (0, _v4.useState)(""),
        [_v20, _v21] = (0, _v4.useState)(null),
        [_v22, _v23] = (0, _v4.useState)(null),
        [_v24, _v25] = (0, _v4.useState)(!1),
        _v26 = _v15?.locale ?? "en-US",
        _v27 = (0, _v4.useMemo)(() => ({
          locale: _v26,
          month: "short",
          day: "numeric",
          year: "numeric"
        }), [_v26]),
        _v28 = (0, _v4.useMemo)(() => _v7.map(_v0 => _v0.filterKey), [_v7]),
        [_v29, _v30] = (0, _v4.useState)({
          ..._v6
        });
      (0, _v4.useEffect)(() => {
        _v30({
          ..._v6
        });
      }, [_v6]);
      let _v31 = (0, _v4.useMemo)(() => Object.keys(_v29).some(_v0 => _v29[_v0].length > 0), [_v29]),
        _v32 = (0, _v4.useMemo)(() => Object.keys(_v6).filter(_v0 => "workspaces" !== _v0).reduce((_v0, _v1) => _v0 + _v6[_v1].length, 0), [_v6]),
        _v33 = (_v0, _v1, _v2) => {
          let _v3 = _v29[_v0] || [];
          _v2 ? _v3.push(_v1) : _v3 = _v3.filter(_v0 => _v0.id !== _v1.id), _v29[_v0] = [..._v3], _v30({
            ..._v29
          });
        },
        _v34 = (0, _v4.useCallback)((_v0 = !1) => {
          let _v1 = {};
          _v28.forEach(_v0 => {
            _v1[_v0] = _v0 ? [] : _v29[_v0] || [];
          }), _v9({
            type: _v299.REPORT_ACTION_TYPE.UPDATE_FILTERS,
            payload: {
              ..._v1
            }
          }), _v30({
            ..._v1
          });
          let _v2 = Object?.keys(_v1).filter(_v0 => _v1?.[_v0]?.length);
          _v2?.map(_v0 => {
            _v32.sendFilterBarEvent?.(_v0, _v1?.[_v0].map(_v0 => _v0?.id)?.join(","), window.location.pathname, _v15?.teamUser);
          }), _v0 || _v17({
            analyticsReportType: _v8,
            activeFilterKeys: _v2
          });
        }, [_v9, _v28, _v29, _v15?.teamUser, _v8, _v17]);
      return (0, _v3.jsxs)(_v6.Flex, {
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem",
        position: "relative",
        flexWrap: "wrap",
        children: [(0, _v3.jsx)(_v5.Box, {
          children: _v14 && (0, _v3.jsx)(_v402, {
            organizationUuid: _v11,
            dispatch: _v9,
            filterLists: _v6
          })
        }), (0, _v3.jsx)(_v5.Box, {
          display: {
            base: "none",
            lg: "inline-block"
          },
          children: (0, _v3.jsx)(_v337, {
            userInUse: _v1,
            calendarPresets: _v3,
            dispatch: _v9,
            filters: {
              startDate: _v4,
              endDate: _v5,
              filterLists: _v6
            },
            isDisabled: _v2,
            rangeText: _v18,
            setRangeText: _v19,
            activePreset: _v20,
            setActivePreset: _v21,
            reportType: _v8
          })
        }), (0, _v3.jsx)(_v5.Box, {
          display: {
            base: "none",
            lg: "inline-block"
          },
          children: !_v14 && _v28.includes(_v299.Filters.CONTENT) && (0, _v3.jsx)(_v331, {
            disabled: _v2,
            dispatch: _v9,
            filterLists: _v6,
            startDate: _v4,
            endDate: _v5,
            filterKey: _v299.Filters.CONTENT,
            userInUse: _v1,
            filtersToApply: _v28,
            alignContent: _v10 ? "left" : void 0
          })
        }), _v13 && (0, _v3.jsxs)(_v386, {
          totalAppliedFiltersItems: _v32,
          isClearDisabled: _v31,
          keepOpenWhileNestedModalOpen: _v24,
          onClear: () => _v34(!0),
          onApply: () => {
            _v34(), _v22?.length === 2 && (([_v0, _v1], _v2) => {
              _v2 ? (_v19(_v2?.label), _v21(_v2)) : _v21(null), (0, _v32.sendFilterBarEvent)(_v299.Filters.DATE, _v2?.label ?? "", window.location.pathname, _v15?.teamUser, `date_${_v0.toString()}_${_v1.toString()}`), (_v0.toString() !== _v4.toISODate() || _v1.toString() !== _v5.toISODate()) && _v16({
                analyticsReportType: _v8
              }), _v9({
                type: _v299.REPORT_ACTION_TYPE.UPDATE_DATE_RANGE,
                payload: {
                  startDate: _v21.DateTime.fromISO(_v0.toString()).setZone("utc", {
                    keepLocalTime: !0
                  }).startOf("day"),
                  endDate: _v21.DateTime.fromISO(_v1.toString()).setZone("utc", {
                    keepLocalTime: !0
                  }).endOf("day")
                }
              });
            })(_v22, _v20);
          },
          children: [(0, _v3.jsx)(_v5.Box, {
            display: {
              base: "inline-block",
              lg: "none"
            },
            children: (0, _v3.jsx)(_v387, {
              userInUse: _v1,
              calendarPresets: _v3,
              dispatch: _v9,
              filters: {
                startDate: _v4,
                endDate: _v5,
                filterLists: _v6
              },
              isDisabled: _v2,
              rangeText: _v18,
              setRangeText: _v19,
              onValueChange: (_v0, _v1) => {
                if (_v23(_v0), _v21(_v1), _v1) return _v19(_v1?.label);
                let _v2 = _v21.DateTime.fromISO(_v0?.[0]?.toString()),
                  _v3 = _v21.DateTime.fromISO(_v0?.[1]?.toString());
                return _v2?.isValid || _v3?.isValid ? _v19(`${_v2.setLocale(_v26).toLocaleString(_v27)} - ${_v3?.isValid ? _v3.setLocale(_v26).toLocaleString(_v27) : ""}`) : _v19(_v190.T_SELECT_DATE_RANGE);
              },
              activePreset: _v20,
              setActivePreset: _v21
            })
          }), _v28.includes(_v299.Filters.SOURCE_URL) && (0, _v3.jsx)(_v389, {
            filtersToApply: _v28,
            selectedItems: _v6,
            selectedItemsToApply: _v29,
            startDate: _v4,
            endDate: _v5,
            userInUse: _v1,
            onItemSelectionUpdate: _v33
          }), _v28.includes(_v299.Filters.DEVICE) && (0, _v3.jsx)(_v371, {
            filtersToApply: _v28,
            selectedItems: _v6,
            selectedItemsToApply: _v29,
            startDate: _v4,
            endDate: _v5,
            userInUse: _v1,
            onItemSelectionUpdate: _v33
          }), _v28.includes(_v299.Filters.REGION) && (0, _v3.jsx)(_v388, {
            filtersToApply: _v28,
            selectedItems: _v6,
            selectedItemsToApply: _v29,
            startDate: _v4,
            endDate: _v5,
            userInUse: _v1,
            onItemSelectionUpdate: _v33
          }), _v28.includes(_v299.Filters.STREAMING_TYPE) && (0, _v3.jsx)(_v391, {
            selectedItemsToApply: _v29,
            onItemSelectionUpdate: _v33
          }), _v28.includes(_v299.Filters.TEXT_LANGUAGE) && (0, _v3.jsx)(_v392, {
            filtersToApply: _v28,
            selectedItems: _v6,
            selectedItemsToApply: _v29,
            startDate: _v4,
            endDate: _v5,
            userInUse: _v1,
            onItemSelectionUpdate: _v33
          }), _v28.includes(_v299.Filters.TEXT_TYPE_AND_PROVENANCE) && (0, _v3.jsx)(_v393, {
            filtersToApply: _v28,
            selectedItems: _v6,
            selectedItemsToApply: _v29,
            startDate: _v4,
            endDate: _v5,
            userInUse: _v1,
            onItemSelectionUpdate: _v33
          }), _v28.includes(_v299.Filters.AUDIO_LANGUAGE) && (0, _v3.jsx)(_v368, {
            filtersToApply: _v28,
            selectedItems: _v6,
            selectedItemsToApply: _v29,
            startDate: _v4,
            endDate: _v5,
            userInUse: _v1,
            onItemSelectionUpdate: _v33
          }), _v28.includes(_v299.Filters.AUDIO_TYPE_AND_PROVENANCE) && (0, _v3.jsx)(_v369, {
            filtersToApply: _v28,
            selectedItems: _v6,
            selectedItemsToApply: _v29,
            startDate: _v4,
            endDate: _v5,
            userInUse: _v1,
            onItemSelectionUpdate: _v33
          }), !_v14 && _v28.includes(_v299.Filters.CUSTOM_METADATA) && (0, _v3.jsx)(_v334, {
            dispatch: _v9,
            filterLists: _v6,
            onModalOpenChange: _v25
          })]
        })]
      });
    },
    _v404 = _v0 => {
      let {
          reportType: _v1,
          title: _v2,
          subtitle: _v3,
          state: _v4,
          infoPopUpContent: _v5,
          reportFilters: _v6,
          dispatch: _v7,
          calendarMinDate: _v8,
          calendarPresets: _v9,
          leftAlignFilters: _v10,
          marginX: _v11,
          showFilterPanel: _v12
        } = _v0,
        _v13 = (0, _v152.useColorModeValue)("darkBlueAlpha.200", "lightBlueAlpha.300"),
        _v14 = (0, _v24.matchPath)(location.pathname, "/analytics/bandwidth"),
        {
          trackAnalyticsBandwidthViewChanged: _v15
        } = (0, _v13.useAnalyticsTracking)();
      return (0, _v3.jsxs)(_v5.Box, {
        marginX: _v11 ?? "1.5rem",
        paddingTop: "1.5rem",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        children: [(0, _v3.jsxs)(_v5.Box, {
          children: [(0, _v3.jsxs)(_v6.Flex, {
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            gap: "0.7rem",
            children: [(0, _v3.jsx)(_v39.Header, {
              size: void 0 !== _v3 ? "lg" : "xl",
              color: "text-primary",
              children: _v2
            }), _v5 && (0, _v3.jsx)(_v5.Box, {
              position: "relative",
              children: (0, _v3.jsxs)(_v292.Popover, {
                placement: "right",
                trigger: "hover",
                children: [(0, _v3.jsx)(_v294.PopoverTrigger, {
                  children: (0, _v3.jsx)(_v298.InfoCircle, {
                    color: "text-tertiary",
                    boxSize: "0.75rem",
                    marginTop: "-1.7rem",
                    marginLeft: "-0.5rem"
                  })
                }), (0, _v3.jsx)(_v293.PopoverContent, {
                  children: _v5
                })]
              })
            }), _v14 && (0, _v3.jsx)(_v297.Tabs, {
              size: "sm",
              width: "18.75rem",
              variant: "soft",
              index: +!_v14?.isExact,
              children: (0, _v3.jsxs)(_v296.TabList, {
                children: [(0, _v3.jsx)(_v295.Tab, {
                  as: _v291.Link,
                  to: "/analytics/bandwidth",
                  _selected: {
                    color: "text-primary",
                    bg: _v13
                  },
                  fontSize: "heading-xs",
                  onClick: () => {
                    _v14?.isExact || _v15({
                      analyticsBandwidthView: "date"
                    });
                  },
                  children: _v190.T_VIEW_BY_DATE
                }), (0, _v3.jsx)(_v295.Tab, {
                  as: _v291.Link,
                  to: "/analytics/bandwidth/video",
                  _selected: {
                    color: "text-primary",
                    bg: _v13
                  },
                  fontSize: "heading-xs",
                  onClick: () => {
                    _v14?.isExact && _v15({
                      analyticsBandwidthView: "video"
                    });
                  },
                  children: _v190.T_VIEW_BY_VIDEO
                })]
              })
            })]
          }, "starship-name"), void 0 !== _v3 && (0, _v3.jsx)(_v46.Text, {
            variant: "body-md",
            color: "text-secondary",
            paddingTop: "1",
            children: _v3
          })]
        }), (0, _v3.jsx)(_v403, {
          userInUse: _v4.userInUse,
          reportType: _v1,
          calendarMinDate: _v8,
          calendarPresets: _v9,
          disabled: _v4.isLoading,
          filters: _v4.filters[_v4.reportGroup],
          reportFilters: _v6,
          dispatch: _v7,
          leftAlign: _v10,
          organizationUuid: _v4?.organizationUuid,
          organizationInternalId: _v4?.organizationInternalId,
          showFilterPanel: _v12
        })]
      });
    },
    _v405 = _v0 => {
      let _v1 = window;
      return _v1.addEventListener("popstate", _v0), () => _v1.removeEventListener("popstate", _v0);
    },
    _v406 = () => window.location.search,
    _v407 = () => "",
    _v408 = _v0 => {
      if (Array.isArray(_v0)) return _v0.flatMap(_v0 => {
        let _v1 = _v209(_v0);
        return null === _v1 ? [] : [_v1];
      });
      if ((0, _v56.isRecord)(_v0)) {
        if (Array.isArray(_v0.data)) return _v0.data.flatMap(_v0 => {
          let _v1 = _v209(_v0);
          return null === _v1 ? [] : [_v1];
        });
        let _v0 = _v209(_v0);
        if (null !== _v0) return [_v0];
      }
      return [];
    },
    _v409 = (0, _v30.translate)({
      singular: "Export data",
      dictionary: {
        es: {
          singular: "Exportar datos"
        },
        "de-DE": {
          singular: "Daten exportieren"
        },
        "fr-FR": {
          singular: "Exporter les données"
        },
        "ja-JP": {
          singular: "データをエクスポート"
        },
        "ko-KR": {
          singular: "데이터 내보내기"
        },
        "pt-BR": {
          singular: "Exportar dados"
        },
        "zh-CN": {
          singular: "导出数据"
        }
      }
    }),
    _v410 = (0, _v30.translate)({
      singular: "No data for this range.",
      dictionary: {
        es: {
          singular: "No hay datos para este intervalo."
        },
        "de-DE": {
          singular: "Keine Daten für diesen Zeitraum."
        },
        "fr-FR": {
          singular: "Aucune donnée pour cette période."
        },
        "ja-JP": {
          singular: "この期間のデータはありません。"
        },
        "ko-KR": {
          singular: "이 범위에 대한 데이터가 없습니다."
        },
        "pt-BR": {
          singular: "Sem dados para este intervalo."
        },
        "zh-CN": {
          singular: "该范围内无数据。"
        }
      }
    }),
    _v411 = (0, _v30.translate)({
      singular: "There was an unexpected server error. Please try again.",
      dictionary: {
        es: {
          singular: "Se produjo un error inesperado. Vuelve a intentarlo."
        },
        "de-DE": {
          singular: "Ein unerwarteter Serverfehler ist aufgetreten. Bitte versuche es erneut."
        },
        "fr-FR": {
          singular: "Une erreur de serveur inattendue s'est produite. Veuillez réessayer."
        },
        "ja-JP": {
          singular: "予期しないサーバーエラーが発生しました。再度お試しください。"
        },
        "ko-KR": {
          singular: "예상하지 못한 서버 오류가 발생했습니다. 다시 시도해주세요."
        },
        "pt-BR": {
          singular: "Ocorreu um erro inesperado com o servidor. Por favor, tente novamente."
        },
        "zh-CN": {
          singular: "服务器出现意外错误。请重试。"
        }
      }
    }),
    _v412 = (0, _v30.translate)({
      singular: "Refresh",
      dictionary: {
        es: {
          singular: "Actualizar"
        },
        "de-DE": {
          singular: "Aktualisieren"
        },
        "fr-FR": {
          singular: "Actualiser"
        },
        "ja-JP": {
          singular: "更新"
        },
        "ko-KR": {
          singular: "새로 고침"
        },
        "pt-BR": {
          singular: "Atualizar"
        },
        "zh-CN": {
          singular: "刷新"
        }
      }
    }),
    _v413 = (0, _v30.translate)({
      singular: "Expand",
      dictionary: {
        es: {
          singular: "Expandir"
        },
        "de-DE": {
          singular: "Vergrößern"
        },
        "fr-FR": {
          singular: "Agrandir"
        },
        "ja-JP": {
          singular: "拡大"
        },
        "ko-KR": {
          singular: "펼치기"
        },
        "pt-BR": {
          singular: "Expandir"
        },
        "zh-CN": {
          singular: "展开"
        }
      }
    }),
    _v414 = (0, _v30.translate)({
      singular: "More options",
      dictionary: {
        es: {
          singular: "Más opciones"
        },
        "de-DE": {
          singular: "Mehr Optionen"
        },
        "fr-FR": {
          singular: "Plus d'options"
        },
        "ja-JP": {
          singular: "その他のオプション"
        },
        "ko-KR": {
          singular: "옵션 더 보기"
        },
        "pt-BR": {
          singular: "Mais opções"
        },
        "zh-CN": {
          singular: "更多选项"
        }
      }
    }),
    _v415 = (0, _v30.translate)({
      singular: "Share data widget",
      dictionary: {
        es: {
          singular: "Compartir widget de datos"
        },
        "de-DE": {
          singular: "Daten-Widget teilen"
        },
        "fr-FR": {
          singular: "Partager le widget de données"
        },
        "ja-JP": {
          singular: "データウィジェットを共有"
        },
        "ko-KR": {
          singular: "데이터 위젯 공유"
        },
        "pt-BR": {
          singular: "Compartilhar widget de dados"
        },
        "zh-CN": {
          singular: "共享数据小部件"
        }
      }
    }),
    _v416 = (0, _v30.translate)({
      singular: "Rename widget",
      dictionary: {
        es: {
          singular: "Renombrar widget"
        },
        "de-DE": {
          singular: "Widget umbenennen"
        },
        "fr-FR": {
          singular: "Renommer le widget"
        },
        "ja-JP": {
          singular: "ウィジェットの名前を変更"
        },
        "ko-KR": {
          singular: "위젯 이름 변경"
        },
        "pt-BR": {
          singular: "Renomear widget"
        },
        "zh-CN": {
          singular: "重命名小部件"
        }
      }
    }),
    _v417 = (0, _v30.translate)({
      singular: "Remove widget",
      dictionary: {
        es: {
          singular: "Eliminar widget"
        },
        "de-DE": {
          singular: "Widget entfernen"
        },
        "fr-FR": {
          singular: "Supprimer le widget"
        },
        "ja-JP": {
          singular: "ウィジェットを削除"
        },
        "ko-KR": {
          singular: "위젯 제거"
        },
        "pt-BR": {
          singular: "Remover widget"
        },
        "zh-CN": {
          singular: "移除小部件"
        }
      }
    }),
    _v418 = (0, _v30.translate)({
      singular: "Could not generate a widget. Please try again.",
      dictionary: {
        es: {
          singular: "No se pudo generar el widget. Vuelve a intentarlo."
        },
        "de-DE": {
          singular: "Das Widget konnte nicht generiert werden. Bitte versuchen Sie es erneut."
        },
        "fr-FR": {
          singular: "Impossible de générer un widget. Veuillez réessayer."
        },
        "ja-JP": {
          singular: "ウィジェットを生成できませんでした。もう一度お試しください。"
        },
        "ko-KR": {
          singular: "위젯을 생성할 수 없습니다. 다시 시도해 주세요."
        },
        "pt-BR": {
          singular: "Não foi possível gerar o widget. Tente novamente."
        },
        "zh-CN": {
          singular: "无法生成小部件。请再试一次。"
        }
      }
    }),
    _v419 = (0, _v30.translate)({
      singular: "Could not save the widget. Please try again.",
      dictionary: {
        es: {
          singular: "No se pudo guardar el widget. Vuelve a intentarlo."
        },
        "de-DE": {
          singular: "Das Widget konnte nicht gespeichert werden. Bitte versuchen Sie es erneut."
        },
        "fr-FR": {
          singular: "Impossible d'enregistrer le widget. Veuillez réessayer."
        },
        "ja-JP": {
          singular: "ウィジェットを保存できませんでした。もう一度お試しください。"
        },
        "ko-KR": {
          singular: "위젯을 저장할 수 없습니다. 다시 시도해 주세요."
        },
        "pt-BR": {
          singular: "Não foi possível salvar o widget. Tente novamente."
        },
        "zh-CN": {
          singular: "无法保存小部件。请再试一次。"
        }
      }
    }),
    _v420 = (0, _v30.translate)({
      singular: "Could not rename the widget. Please try again.",
      dictionary: {
        es: {
          singular: "No se pudo renombrar el widget. Vuelve a intentarlo."
        },
        "de-DE": {
          singular: "Das Widget konnte nicht umbenannt werden. Bitte versuchen Sie es erneut."
        },
        "fr-FR": {
          singular: "Impossible de renommer le widget. Veuillez réessayer."
        },
        "ja-JP": {
          singular: "ウィジェットの名前を変更できませんでした。もう一度お試しください。"
        },
        "ko-KR": {
          singular: "위젯 이름을 변경할 수 없습니다. 다시 시도해 주세요."
        },
        "pt-BR": {
          singular: "Não foi possível renomear o widget. Tente novamente."
        },
        "zh-CN": {
          singular: "无法重命名小部件。请再试一次。"
        }
      }
    }),
    _v421 = (0, _v30.translate)({
      singular: "Share link copied to clipboard",
      dictionary: {
        es: {
          singular: "Enlace para compartir copiado al portapapeles"
        },
        "de-DE": {
          singular: "Link zum Teilen in die Zwischenablage kopiert"
        },
        "fr-FR": {
          singular: "Lien de partage copié dans le presse-papiers"
        },
        "ja-JP": {
          singular: "共有リンクがクリップボードにコピーされました"
        },
        "ko-KR": {
          singular: "공유 링크가 클립보드에 복사되었습니다."
        },
        "pt-BR": {
          singular: "Link de compartilhamento copiado para a área de transferência"
        },
        "zh-CN": {
          singular: "共享链接已复制到剪贴板"
        }
      }
    }),
    _v422 = (0, _v30.translate)({
      singular: "Generate and combine data widgets into your own custom dashboard.",
      dictionary: {
        es: {
          singular: "Genera y combina widgets de datos en tu propio panel personalizado."
        },
        "de-DE": {
          singular: "Generieren und kombinieren Sie Daten-Widgets in Ihrem eigenen benutzerdefinierten Dashboard."
        },
        "fr-FR": {
          singular: "Générez et combinez des widgets de données pour créer votre propre tableau de bord personnalisé."
        },
        "ja-JP": {
          singular: "データウィジェットを生成して組み合わせ、独自のカスタムダッシュボードを作成します。"
        },
        "ko-KR": {
          singular: "데이터 위젯을 생성하고 결합하여 자신만의 맞춤형 대시보드를 만드세요."
        },
        "pt-BR": {
          singular: "Gere e combine widgets de dados em seu próprio painel personalizado."
        },
        "zh-CN": {
          singular: "生成并组合数据小部件，打造您自己的自定义仪表板。"
        }
      }
    }),
    _v423 = ({
      title: _v0,
      note: _v1,
      widgetId: _v2,
      query: _v3,
      range: _v4,
      datasetAccess: _v5,
      isScrollTarget: _v6,
      scrollTargetRef: _v7,
      onDelete: _v8,
      onExpand: _v9,
      onRename: _v10
    }) => {
      let _v11,
        _v12,
        _v13 = (0, _v47.useToast)(),
        _v14 = _v5[_v3.dataset],
        {
          isLoading: _v15,
          isError: _v16,
          isPermissionError: _v17,
          data: _v18,
          export: _v19,
          refresh: _v20,
          share: _v21,
          supportedChartType: _v22
        } = _v238({
          query: _v3,
          range: _v4,
          enabled: "denied" !== _v14,
          surface: "dashboard",
          widgetId: _v2
        }),
        _v23 = null !== _v18 && _v18.rows.length > 0,
        _v24 = null !== _v4 && _v4.from.length >= 10 ? _v4.from.slice(0, 10) : null,
        _v25 = null !== _v4 && _v4.to.length >= 10 ? _v4.to.slice(0, 10) : null,
        _v26 = null !== _v24 && null !== _v25 ? (_v11 = _v21.DateTime.fromISO(_v24).toFormat("LLL d"), _v12 = _v21.DateTime.fromISO(_v25).toFormat("LLL d"), (0, _v30.translate)({
          singular: "{startDate} to {endDate}",
          replacements: {
            startDate: _v11,
            endDate: _v12
          },
          dictionary: {
            es: {
              singular: "{startDate} a {endDate}"
            },
            "de-DE": {
              singular: "{startDate} bis {endDate}"
            },
            "fr-FR": {
              singular: "Du {startDate} au {endDate}"
            },
            "ja-JP": {
              singular: "{startDate} 〜 {endDate}"
            },
            "ko-KR": {
              singular: "{startDate} ~ {endDate}"
            },
            "pt-BR": {
              singular: "{startDate} a {endDate}"
            },
            "zh-CN": {
              singular: "{startDate} 至 {endDate}"
            }
          }
        })) : null;
      return (0, _v3.jsx)(_v36.Card, {
        ref: _v6 ? _v7 : void 0,
        scrollMargin: "1.5rem",
        size: "lg",
        width: "100%",
        height: "22.5rem",
        paddingTop: "sm",
        paddingLeft: "lg",
        paddingRight: "sm",
        paddingBottom: "md",
        children: (0, _v3.jsxs)(_v37.CardBody, {
          display: "flex",
          flexDirection: "column",
          gap: "sm",
          padding: 0,
          height: "100%",
          children: [(0, _v3.jsxs)(_v6.Flex, {
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "sm",
            children: [(0, _v3.jsxs)(_v6.Flex, {
              direction: "column",
              gap: "4px",
              flex: 1,
              children: [(0, _v3.jsx)(_v39.Header, {
                size: "md",
                children: _v0
              }), null !== _v26 && (0, _v3.jsx)(_v46.Text, {
                variant: "body-sm",
                color: "text-tertiary",
                children: _v26
              })]
            }), (0, _v3.jsxs)(_v6.Flex, {
              alignItems: "center",
              gap: "4px",
              paddingTop: "4px",
              children: [(0, _v3.jsx)(_v40.IconButton, {
                size: "sm",
                variant: "tertiary",
                "aria-label": _v412,
                icon: (0, _v3.jsx)(_v52.Replay, {
                  transform: "scaleX(-1)"
                }),
                isDisabled: !_v23 && !_v16 || _v15,
                onClick: _v20
              }), (0, _v3.jsx)(_v38.Divider, {
                orientation: "vertical",
                height: "0.75rem"
              }), (0, _v3.jsx)(_v40.IconButton, {
                size: "sm",
                variant: "tertiary",
                "aria-label": _v409,
                icon: (0, _v3.jsx)(_v48.DownloadImport, {}),
                isDisabled: !_v23,
                onClick: _v19
              }), (0, _v3.jsx)(_v40.IconButton, {
                size: "sm",
                variant: "tertiary",
                "aria-label": _v413,
                icon: (0, _v3.jsx)(_v51.ExpandAlt, {}),
                onClick: _v9
              }), (0, _v3.jsxs)(_v41.Menu, {
                placement: "bottom-end",
                children: [(0, _v3.jsx)(_v42.MenuButton, {
                  as: _v40.IconButton,
                  size: "sm",
                  variant: "tertiary",
                  "aria-label": _v414,
                  icon: (0, _v3.jsx)(_v50.EllipsisV, {})
                }), (0, _v3.jsxs)(_v44.MenuList, {
                  children: [(0, _v3.jsx)(_v43.MenuItem, {
                    icon: (0, _v3.jsx)(_v54, {
                      boxSize: "auto"
                    }),
                    onClick: () => {
                      _v21({
                        title: _v0,
                        note: _v1
                      }).then(_v0 => {
                        _v0 && _v13({
                          title: _v421
                        });
                      });
                    },
                    children: _v415
                  }), (0, _v3.jsx)(_v43.MenuItem, {
                    icon: (0, _v3.jsx)(_v49.EditPencil, {
                      boxSize: "auto"
                    }),
                    onClick: _v10,
                    children: _v416
                  }), (0, _v3.jsx)(_v43.MenuItem, {
                    icon: (0, _v3.jsx)(_v55.TrashBin, {
                      boxSize: "auto"
                    }),
                    onClick: _v8,
                    children: _v417
                  })]
                })]
              })]
            })]
          }), (0, _v3.jsx)(_v5.Box, {
            flex: 1,
            minHeight: 0,
            children: "denied" === _v14 || _v17 ? (0, _v3.jsx)(_v104, {}) : _v15 ? (0, _v3.jsx)(_v45.Skeleton, {
              height: "100%",
              borderRadius: "md"
            }) : _v16 ? (0, _v3.jsx)(_v6.Flex, {
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              children: (0, _v3.jsx)(_v46.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: _v411
              })
            }) : null !== _v18 && _v23 && null !== _v22 ? (0, _v3.jsx)(_v189, {
              chartType: _v22,
              data: _v18
            }) : (0, _v3.jsx)(_v6.Flex, {
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              children: (0, _v3.jsx)(_v46.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: _v410
              })
            })
          })]
        })
      });
    },
    _v424 = _v0 => ({
      title: _v0.title,
      chartType: _v0.chartType,
      note: _v0.note,
      description: null,
      dataset: _v0.query.dataset,
      query: _v0.query
    }),
    _v425 = ({
      state: _v0,
      dispatch: _v1
    }) => {
      let {
          startDate: _v2,
          endDate: _v3
        } = _v0.filters[_v0.reportGroup],
        _v4 = _v0.userInUse.id,
        _v5 = (_v0 => {
          let _v1 = (0, _v284.useViewer)(),
            {
              capabilities: _v2,
              ready: _v3
            } = (0, _v11.useCapability)(_v285, _v0);
          return (0, _v4.useMemo)(() => {
            let _v0 = ((_v0, _v1) => {
              if (_v0?.user?.id === _v1) return _v283.TeamRole.Owner;
              let _v2 = _v0?.teamUser?.plainTextPermissionLevel;
              return _v0?.teamUser?.ownerId === _v1 && void 0 !== _v2 && _v286.has(_v2) ? _v2 : null;
            })(_v1, _v0);
            return {
              sessions: _v289(_v0),
              bandwidth: _v290(_v2.canViewBandwidthAnalyticsReports, _v0, _v3),
              teams: _v290(_v2.hasTeamAnalytics, _v0, _v3),
              retention: _v289(_v0)
            };
          }, [_v2.canViewBandwidthAnalyticsReports, _v2.hasTeamAnalytics, _v3, _v0, _v1]);
        })(_v4),
        _v6 = (0, _v47.useToast)(),
        _v7 = (0, _v22.useRouter)(),
        {
          trackAnalyticsAiDashboardDisplayed: _v8,
          trackAnalyticsAiPromptSubmitted: _v9,
          trackAnalyticsAiGenerationCompleted: _v10
        } = (0, _v13.useAnalyticsTracking)(),
        [_v11, _v12] = (0, _v4.useState)(!0),
        [_v13, _v14] = (0, _v4.useState)(null),
        [_v15, _v16] = (0, _v4.useState)(null),
        [_v17, _v18] = (0, _v4.useState)(null),
        [_v19, _v20] = (0, _v4.useState)(!1),
        _v21 = (0, _v4.useRef)(null),
        _v22 = (0, _v4.useRef)(null),
        [_v23, _v24] = (0, _v4.useState)(""),
        [_v25, _v26] = (0, _v4.useState)(null),
        _v27 = (0, _v4.useSyncExternalStore)(_v405, _v406, _v407),
        _v28 = (0, _v4.useMemo)(() => "" === _v27 ? null : (() => {
          let _v0 = new URLSearchParams(window.location.search).get(_v233);
          if (null === _v0 || "" === _v0) return null;
          try {
            let _v0,
              _v1,
              _v2,
              _v3 = JSON.parse((_v0 = _v0.replace(/-/g, "+").replace(/_/g, "/"), _v1 = atob(_v0 + "=".repeat((4 - _v0.length % 4) % 4)), _v2 = Uint8Array.from(_v1, _v0 => _v0.charCodeAt(0)), new TextDecoder().decode(_v2)));
            if (!(_v0 => {
              if (!(0, _v56.isRecord)(_v0)) return !1;
              let _v1 = void 0 === _v0.widgetId || null === _v0.widgetId || "number" == typeof _v0.widgetId && Number.isInteger(_v0.widgetId);
              return "string" == typeof _v0.title && _v200(_v0.chartType) && (null === _v0.note || "string" == typeof _v0.note) && _v1 && null !== _v208(_v0.query);
            })(_v3)) return null;
            let _v4 = _v208(_v3.query);
            if (null === _v4) return null;
            return {
              title: _v3.title,
              chartType: _v3.chartType,
              note: _v3.note,
              query: _v4,
              widgetId: "number" == typeof _v3.widgetId ? _v3.widgetId : null
            };
          } catch {
            return null;
          }
        })(), [_v27]),
        _v29 = _v19 ? null : _v28,
        _v30 = (0, _v4.useCallback)((_v0, _v1 = null) => {
          let _v2 = new URL(window.location.href),
            _v3 = _v2.searchParams.get(_v233),
            _v4 = null === _v0 ? null : _v234({
              title: _v0.title,
              chartType: _v0.chartType,
              note: _v0.note,
              query: _v0.query,
              widgetId: _v1
            });
          _v3 !== _v4 && (null === _v4 ? _v2.searchParams.delete(_v233) : _v2.searchParams.set(_v233, _v4), _v7.replace(`${_v2.pathname}${_v2.search}`, void 0, {
            shallow: !0
          }));
        }, [_v7]);
      (0, _v4.useEffect)(() => {
        _v1({
          type: _v299.REPORT_ACTION_TYPE.UPDATE_LOADING_STATE,
          payload: !1
        });
      }, [_v1]);
      let _v31 = (0, _v4.useMemo)(() => {
          let _v0 = _v2.toISO(),
            _v1 = _v3.toISO();
          return null !== _v0 && null !== _v1 ? {
            from: _v0,
            to: _v1
          } : null;
        }, [_v2, _v3]),
        {
          data: _v32,
          isLoading: _v33,
          isValidating: _v34,
          mutate: _v35
        } = _v72(() => ({
          select: _v204,
          where: {
            userId: _v4
          }
        }), {
          revalidateOnFocus: !1
        }),
        _v36 = (0, _v4.useRef)([]),
        [_v37, _v38] = _v64(),
        [_v39, _v40] = _v73(),
        [_v41, _v42] = _v67(),
        [_v43, _v44] = _v68(),
        _v45 = (0, _v4.useMemo)(() => null === _v38.error && void 0 !== _v38.data ? (_v0 => {
          if (!(0, _v56.isRecord)(_v0)) return null;
          if (_v0.status === _v212) {
            let _v0 = _v0.suggestions;
            return Array.isArray(_v0) && 0 !== _v0.length && _v0.every(_v0 => "string" == typeof _v0) ? {
              status: _v212,
              suggestions: _v0
            } : null;
          }
          if (_v0.status !== _v211) return null;
          let {
            title: _v1,
            chartType: _v2,
            note: _v3,
            description: _v4,
            query: _v5
          } = _v0;
          if ("string" != typeof _v1 || "string" != typeof _v2 || !_v200(_v2)) return null;
          let _v6 = _v208(_v5);
          return null === _v6 ? null : {
            status: _v211,
            spec: {
              title: _v1,
              chartType: _v2,
              note: "string" == typeof _v3 && "" !== _v3 ? _v3 : null,
              description: "string" == typeof _v4 && "" !== _v4 ? _v4 : null,
              dataset: _v6.dataset,
              query: _v6
            }
          };
        })(_v38.data) : null, [_v38.data, _v38.error]),
        [_v46, _v47] = (0, _v4.useState)(null),
        _v48 = _v38.loading,
        _v49 = _v40.loading,
        _v50 = null !== _v45 && "query" === _v45.status ? _v45.spec : null,
        _v51 = null !== _v45 && "not_supported" === _v45.status ? _v45.suggestions : null,
        _v52 = _v38.called && !_v48 && null === _v38.error,
        _v53 = null !== _v38.error || _v52 && null === _v45 ? _v418 : null,
        _v54 = _v40.called && !_v40.loading && (null !== _v40.error || null === _v40.data),
        _v55 = (0, _v4.useRef)(!1);
      (0, _v4.useEffect)(() => {
        _v54 && !_v55.current && (_v55.current = !0, _v6({
          title: _v419,
          status: "error"
        }));
      }, [_v54, _v6]);
      let _v56 = (0, _v4.useRef)(!1);
      (0, _v4.useEffect)(() => {
        if (!_v38.called || _v38.loading) {
          _v56.current = !1;
          return;
        }
        if (_v56.current) return;
        _v56.current = !0;
        let _v0 = null === _v38.error ? null : String(_v38.error);
        null === _v45 ? _v10({
          generationStatus: "error",
          prompt: _v22.current,
          querySpec: null,
          dataset: null,
          chartType: null,
          title: null,
          suggestionsCount: 0,
          error: _v0
        }) : "not_supported" === _v45.status ? _v10({
          generationStatus: "not_supported",
          prompt: _v22.current,
          querySpec: null,
          dataset: null,
          chartType: null,
          title: null,
          suggestionsCount: _v45.suggestions.length,
          error: null
        }) : _v10({
          generationStatus: "success",
          prompt: _v22.current,
          querySpec: JSON.stringify(_v45.spec.query),
          dataset: _v45.spec.dataset,
          chartType: _v45.spec.chartType,
          title: _v45.spec.title,
          suggestionsCount: 0,
          error: null
        });
      }, [_v38.called, _v38.error, _v38.loading, _v45, _v10]);
      let _v57 = (_v0, _v1 = "input") => {
          _v48 || (_v9({
            prompt: _v0,
            promptSource: _v1
          }), _v22.current = _v0, _v12(!1), _v47(null), _v16(null), _v20(!0), _v30(null), _v37({
            select: _v205,
            where: {
              userId: _v4
            },
            variables: {
              prompt: _v0
            }
          }));
        },
        _v58 = (0, _v4.useMemo)(() => _v408(_v32), [_v32]),
        _v59 = _v58.length > 0,
        _v60 = _v58.length >= 20;
      (0, _v14.usePicoEffect)(() => {
        if (_v33 || _v34) return !1;
        _v8({
          widgetCount: _v58.length,
          hasWidgets: _v58.length > 0
        });
      }, [_v33, _v34, _v58.length], {
        once: !0
      }), (0, _v4.useEffect)(() => {
        if (_v40.loading || null !== _v40.error || null == _v40.data || _v21.current === _v40.data.id) return;
        let _v0 = _v40.data;
        _v21.current = _v0.id;
        let _v1 = [..._v36.current.filter(_v0 => _v0.id !== _v0.id), _v0];
        _v36.current = [], _v35({
          total: _v1.length,
          data: _v1
        }, {
          revalidate: !1
        }), _v26(_v0.id), _v12(!0), _v16(null), _v24("");
      }, [_v35, _v40.data, _v40.error, _v40.loading]);
      let _v61 = (0, _v4.useRef)(null);
      (0, _v4.useEffect)(() => {
        null !== _v25 && null !== _v61.current && (_v61.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        }), _v26(null));
      }, [_v25, _v58]);
      let _v62 = () => {
          _v12(!0), _v47(null), _v16(null), _v20(!0), _v30(null);
        },
        _v63 = _v0 => {
          _v14(_v0);
        };
      (0, _v4.useEffect)(() => {
        _v42.called && !_v42.loading && null !== _v42.error && _v35();
      }, [_v42.called, _v42.loading, _v42.error, _v35]), (0, _v4.useEffect)(() => {
        _v44.called && !_v44.loading && null !== _v44.error && _v35();
      }, [_v44.called, _v44.loading, _v44.error, _v35]);
      let _v64 = (0, _v4.useMemo)(() => null === _v29 ? null : {
          title: _v29.title,
          chartType: _v29.chartType,
          note: _v29.note,
          description: null,
          dataset: _v29.query.dataset,
          query: _v29.query
        }, [_v29]),
        _v65 = _v29?.widgetId ?? null,
        _v66 = (0, _v4.useMemo)(() => {
          let _v0 = _v46 ?? _v65;
          return null === _v0 ? null : _v58.find(_v0 => _v0.id === _v0) ?? null;
        }, [_v46, _v58, _v65]),
        _v67 = (null === _v66 ? null : _v424(_v66)) ?? _v64 ?? (_v48 || _v11 ? null : _v50),
        _v68 = !_v11 && _v52 && null !== _v51;
      return (0, _v3.jsxs)(_v5.Box, {
        width: "100%",
        minHeight: "calc(100vh - 3.75rem)",
        display: "flex",
        flexDirection: "column",
        children: [(0, _v3.jsx)(_v5.Box, {
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          flex: 1,
          children: (0, _v3.jsxs)(_v6.Flex, {
            maxWidth: "87.5rem",
            width: "100%",
            marginX: "auto",
            direction: "column",
            gap: "lg",
            flex: 1,
            children: [_v59 ? (0, _v3.jsx)(_v404, {
              reportType: _v299.Reports.AI,
              title: _v179.REPORT_NAME_DISPLAY_MAP[_v179.REPORT_TYPE_AI],
              subtitle: _v422,
              state: _v0,
              dispatch: _v1,
              reportFilters: [],
              calendarPresets: _v179.CALENDAR_PRESETS[_v299.Reports.AI]
            }) : null, _v33 ? (0, _v3.jsx)(_v5.Box, {
              paddingX: "lg",
              paddingBottom: "xl",
              children: (0, _v3.jsx)(_v6.Flex, {
                height: "16rem",
                alignItems: "center",
                justifyContent: "center",
                children: (0, _v3.jsx)(_v10.Spinner, {
                  size: "md"
                })
              })
            }) : _v59 ? (0, _v3.jsx)(_v5.Box, {
              paddingX: "lg",
              paddingBottom: "xl",
              children: (0, _v3.jsx)(_v6.Flex, {
                direction: "column",
                gap: "md",
                display: {
                  base: "flex",
                  lg: "grid"
                },
                gridTemplateColumns: {
                  base: "1fr",
                  lg: "repeat(2, minmax(0, 1fr))"
                },
                alignItems: "stretch",
                children: _v58.map(_v0 => (0, _v3.jsx)(_v423, {
                  title: _v0.title,
                  note: _v0.note,
                  widgetId: _v0.id,
                  query: {
                    chartType: _v0.chartType,
                    dataset: _v0.query.dataset,
                    where: {
                      userId: _v4
                    },
                    spec: _v0.query
                  },
                  range: _v31,
                  datasetAccess: _v5,
                  isScrollTarget: _v0.id === _v25,
                  scrollTargetRef: _v61,
                  onDelete: () => _v63(_v0),
                  onExpand: () => {
                    _v47(_v0.id), _v30(_v424(_v0), _v0.id);
                  },
                  onRename: () => _v18(_v0)
                }, _v0.id))
              })
            }) : (0, _v3.jsx)(_v6.Flex, {
              paddingX: "lg",
              paddingBottom: "xl",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              children: (0, _v3.jsx)(_v102, {
                prompt: _v23,
                onPromptChange: _v24,
                onSubmit: _v57,
                isSubmitting: _v48
              })
            })]
          })
        }), _v59 ? (0, _v3.jsx)(_v120, {
          isSubmitting: _v48,
          hasWidgets: _v59,
          prompt: _v23,
          onPromptChange: _v24,
          onSubmit: _v57
        }) : null, (0, _v3.jsx)(_v268, {
          spec: _v67,
          isLoading: _v48 && !_v11 && null === _v46,
          userId: _v4,
          range: _v31,
          datasetAccess: _v5,
          isSaving: _v49,
          isAtWidgetLimit: _v60,
          savedWidget: _v66,
          error: null !== _v46 || _v11 ? null : _v53,
          notSupportedSuggestions: _v68 ? _v51 : null,
          onTrySuggestion: _v0 => _v57(_v0, "suggestion"),
          onSave: _v0 => {
            _v16(_v0);
          },
          onRenameWidget: _v18,
          onDeleteWidget: _v63,
          onClose: _v62
        }), (0, _v3.jsx)(_v86, {
          isOpen: null !== _v15,
          isSaving: _v49,
          onConfirm: () => {
            null !== _v15 && (_v49 || (_v55.current = !1, _v36.current = _v408(_v32), _v39({
              select: _v204,
              where: {
                userId: _v4
              },
              variables: {
                title: _v15.title,
                chartType: _v15.chartType,
                note: _v15.note ?? void 0,
                query: _v15.query
              }
            })));
          },
          onClose: () => _v16(null)
        }), (0, _v3.jsx)(_v282, {
          isOpen: null !== _v17,
          currentTitle: _v17?.title ?? "",
          isSaving: _v44.loading,
          error: _v44.called && !_v44.loading && null !== _v44.error ? _v420 : null,
          onSave: _v0 => {
            null === _v17 || _v44.loading || (_v18(null), _v35(_v0 => {
              let _v1 = _v408(_v0).map(_v0 => _v0.id === _v17.id ? {
                ..._v0,
                title: _v0
              } : _v0);
              return {
                total: _v1.length,
                data: _v1
              };
            }, {
              revalidate: !1
            }), _v43({
              select: _v204,
              where: {
                userId: _v4,
                widgetId: _v17.id
              },
              variables: {
                title: _v0
              }
            }));
          },
          onClose: () => {
            _v18(null);
          }
        }, _v17?.id ?? "none"), (0, _v3.jsx)(_v274, {
          isOpen: null !== _v13,
          onConfirm: () => {
            null !== _v13 && (_v14(null), _v35(_v0 => {
              let _v1 = _v408(_v0).filter(_v0 => _v0.id !== _v13.id);
              return {
                total: _v1.length,
                data: _v1
              };
            }, {
              revalidate: !1
            }), _v41({
              where: {
                userId: _v4,
                widgetId: _v13.id
              }
            }), _v62());
          },
          onClose: () => {
            _v14(null);
          }
        })]
      });
    };
  var _v426 = _v0.i(0),
    _v427 = _v0.i(0),
    _v428 = _v0.i(0);
  let _v429 = (_v0, _v1) => {
      if (!_v0) return [];
      let _v2 = (0, _v367.getDateRangeArray)(_v1.start_date, _v1.end_date, _v299.AggregateIntervalType.MONTH),
        _v3 = _v2?.map(_v0 => {
          let _v1 = _v0.find(_v0 => _v0.startDate === _v0);
          return {
            type: _v299.TablePayloadItemType.BANDWIDTH,
            id: _v0,
            name: _v0,
            liveBandwidth: _v1 ? Number(_v1.liveBandwidth) : 0,
            videoBandwidth: _v1 ? Number(_v1.videoBandwidth) : 0,
            combinedBandwidth: _v1 ? Number(_v1.combinedBandwidth) : 0
          };
        });
      return (0, _v367.sortHandler)("name", _v179.SORT_VALUE.ASCENDING_ORDER, _v3);
    },
    _v430 = (_v0, _v1) => {
      if (!_v0) return [];
      let _v2 = _v429(_v0, _v1);
      return _v2?.map(_v0 => ({
        date: _v0.name,
        data: {
          data: {
            cid: _v0.name,
            name: _v0.name,
            liveBandwidth: +_v0.liveBandwidth,
            videoBandwidth: +_v0.videoBandwidth,
            combinedBandwidth: +_v0.combinedBandwidth
          }
        }
      }));
    },
    _v431 = _v0 => _v0 ? _v0?.map(_v0 => ({
      type: _v299.TablePayloadItemType.BANDWIDTH_VIDEO,
      id: _v0.metadata?.connections?.video?.uri ?? "",
      name: _v0.dimensionName ?? "",
      createdTime: _v0.metadata?.connections?.video?.createdTime,
      thumbnail: _v0.metadata?.connections?.video?.pictures.sizes.find(_v0 => 227 === _v0.width && 128 === _v0.height)?.link ?? "",
      liveBandwidth: Number(_v0.liveBandwidth),
      videoBandwidth: Number(_v0.videoBandwidth),
      combinedBandwidth: Number(_v0.combinedBandwidth)
    })) : [],
    _v432 = (_v0, _v1, _v2, _v3) => {
      if (!_v0) return [];
      let _v4 = (_v0, _v1, _v2) => {
          let _v3 = _v0.filter(_v0 => _v0.startDate === _v1);
          return _v3?.reduce((_v0, _v1) => ({
            ..._v0,
            [_v2 ? "total-row-id" : _v1.metadata?.connections?.video?.uri ?? ""]: {
              cid: _v2 ? "total-row-id" : _v1.metadata?.connections?.video?.uri,
              name: _v2 ? "Report Total" : _v1.dimensionName,
              liveBandwidth: Number(_v1.liveBandwidth),
              videoBandwidth: Number(_v1.videoBandwidth),
              combinedBandwidth: Number(_v1.combinedBandwidth)
            }
          }), {});
        },
        _v5 = (0, _v367.getDateRangeArray)(_v1.start_date, _v1.end_date, _v299.AggregateIntervalType.DAY),
        _v6 = {
          combinedBandwidth: 0,
          videoBandwidth: 0,
          liveBandwidth: 0
        },
        _v7 = _v2?.reduce((_v0, _v1) => ({
          ..._v0,
          [_v1.id]: {
            name: _v1.name,
            ..._v6
          }
        }), {});
      return _v7 = {
        ..._v7,
        [_v179.TOTAL_ROW_ID]: {
          cid: _v179.TOTAL_ROW_ID,
          name: _v179.TOTAL_ROW_NAME,
          ..._v6
        }
      }, _v5?.map(_v0 => {
        let _v1 = _v4(_v0, _v0, !1),
          _v2 = _v3 ? _v4(_v3, _v0, !0) : {};
        return {
          date: _v0,
          data: {
            ..._v7,
            ..._v1,
            ..._v2
          }
        };
      });
    },
    _v433 = _v0 => _v0 && _v0.data ? {
      data: _v0.data.map(_v0 => ({
        type: _v299.TablePayloadItemType.DATE,
        id: _v0?.startDate ?? "",
        name: _v0?.startDate ?? "",
        startDate: _v0?.startDate ?? "",
        endDate: _v0?.endDate ?? "",
        plays: _v0?.views ?? 0,
        drm_licenses_used: _v0?.drmLicensesUsed ?? 0,
        loads: _v0?.impressions ?? 0,
        third_party_impressions: _v0?.thirdPartyImpressions ?? 0,
        finishes: _v0?.finishes ?? 0,
        downloads: _v0?.downloads ?? 0,
        unique_loads: _v0?.uniqueImpressions ?? 0,
        unique_viewers: _v0?.uniqueViewers ?? 0,
        averageviewpercentage: _v0?.meanPercentWatched ?? 0,
        averageviewduration: _v0?.meanSecondsWatched ?? 0,
        totalviewduration: _v0?.totalSecondsWatched ?? 0
      })),
      urlToDownloadCSV: _v0.exportLink
    } : {
      data: []
    },
    _v434 = _v0 => _v0 && _v0.data ? {
      data: _v0.data.map(_v0 => {
        let _v1 = _v0?.browserName ? _v0?.browserName.replace("desktop-", "") : "",
          _v2 = _v0?.osName ? _v0?.osName.replace(/(mobile-|tablet-)/g, "") : "";
        return {
          type: _v299.TablePayloadItemType.DEVICE,
          id: _v0?.deviceType ?? (_v0?.browserName || _v0?.osName || ""),
          name: (_v0?.deviceType && _v179.DEVICE_NAMES_DISPLAY_MAP[_v0.deviceType]) ?? (0, _v370.default)(_v0?.deviceType) ?? "",
          plays: _v0?.views ?? 0,
          drm_licenses_used: _v0?.drmLicensesUsed ?? 0,
          loads: _v0?.impressions ?? 0,
          third_party_impressions: _v0?.thirdPartyImpressions ?? 0,
          finishes: _v0?.finishes ?? 0,
          downloads: _v0?.downloads ?? 0,
          unique_loads: _v0?.uniqueImpressions ?? 0,
          unique_viewers: _v0?.uniqueViewers ?? 0,
          averageviewpercentage: _v0?.meanPercentWatched ?? 0,
          averageviewduration: _v0?.meanSecondsWatched ?? 0,
          totalviewduration: _v0?.totalSecondsWatched ?? 0,
          browserName: (_v1?.toLowerCase() && _v179.DEVICE_NAMES_DISPLAY_MAP[_v1.toLowerCase()]) ?? (0, _v370.default)(_v1),
          osName: (_v2?.toLowerCase() && _v179.DEVICE_NAMES_DISPLAY_MAP[_v2.toLowerCase()]) ?? (0, _v370.default)(_v2)
        };
      }),
      urlToDownloadCSV: _v0.exportLink
    } : {
      data: []
    },
    _v435 = _v0 => _v0 && _v0.data ? {
      data: _v0.data.map(_v0 => ({
        type: _v299.TablePayloadItemType.REGION,
        id: _v0?.countryCode ?? _v0?.regionCode ?? _v0?.cityName ?? "",
        name: _v0?.countryName ?? _v0?.regionName ?? _v0?.cityName ?? "",
        plays: _v0?.views ?? 0,
        drm_licenses_used: _v0?.drmLicensesUsed ?? 0,
        loads: _v0?.impressions ?? 0,
        third_party_impressions: _v0?.thirdPartyImpressions ?? 0,
        finishes: _v0?.finishes ?? 0,
        downloads: _v0?.downloads ?? 0,
        unique_loads: _v0?.uniqueImpressions ?? 0,
        unique_viewers: _v0?.uniqueViewers ?? 0,
        averageviewpercentage: _v0?.meanPercentWatched ?? 0,
        averageviewduration: _v0?.meanSecondsWatched ?? 0,
        totalviewduration: _v0?.totalSecondsWatched ?? 0,
        regionId: _v0?.regionCode,
        regionName: _v0?.regionName,
        cityName: _v0?.cityName
      })),
      urlToDownloadCSV: _v0.exportLink
    } : {
      data: []
    },
    _v436 = _v0 => _v0 && _v0.data ? {
      data: _v0.data.map(_v0 => ({
        type: _v299.TablePayloadItemType.VIDEO,
        id: _v0?.metadata?.connections?.video?.uri ?? "",
        name: _v0?.metadata?.connections?.video?.title ?? "",
        created_time: _v0?.metadata?.connections?.video?.createdTime ?? "",
        thumbnail: _v0?.thumbnail ?? "",
        plays: _v0?.views ?? 0,
        drm_licenses_used: _v0?.drmLicensesUsed ?? 0,
        loads: _v0?.impressions ?? 0,
        third_party_impressions: _v0?.thirdPartyImpressions ?? 0,
        finishes: _v0?.finishes ?? 0,
        likes: _v0?.metadata?.connections?.video?.likes ?? 0,
        comments: _v0?.metadata?.connections?.video?.comments ?? 0,
        downloads: _v0?.downloads ?? 0,
        unique_loads: _v0?.uniqueImpressions ?? 0,
        unique_viewers: _v0?.uniqueViewers ?? 0,
        averageviewpercentage: _v0?.meanPercentWatched ?? 0,
        averageviewduration: _v0?.meanSecondsWatched ?? 0,
        totalviewduration: _v0?.totalSecondsWatched ?? 0
      })),
      urlToDownloadCSV: _v0.exportLink
    } : {
      data: []
    },
    _v437 = _v0 => _v0 && _v0.data ? {
      data: _v0.data.map(_v0 => ({
        type: _v299.TablePayloadItemType.STREAMING_TYPE,
        id: _v0?.streamingType ?? "",
        name: _v0?.streamingType ?? "",
        plays: _v0?.views ?? 0,
        drm_licenses_used: _v0?.drmLicensesUsed ?? 0,
        loads: _v0?.impressions ?? 0,
        third_party_impressions: _v0?.thirdPartyImpressions ?? 0,
        finishes: _v0?.finishes ?? 0,
        likes: _v0?.metadata?.connections?.video?.likes ?? 0,
        comments: _v0?.metadata?.connections?.video?.comments ?? 0,
        downloads: _v0?.downloads ?? 0,
        unique_loads: _v0?.uniqueImpressions ?? 0,
        unique_viewers: _v0?.uniqueViewers ?? 0,
        averageviewpercentage: _v0?.meanPercentWatched ?? 0,
        averageviewduration: _v0?.meanSecondsWatched ?? 0,
        totalviewduration: _v0?.totalSecondsWatched ?? 0
      })),
      urlToDownloadCSV: _v0.exportLink
    } : {
      data: []
    },
    _v438 = _v0 => _v0 && _v0.data ? {
      data: _v0.data.map(_v0 => {
        let _v1 = _v0?.embedDomainPath === "/" ? "" : _v0?.embedDomainPath ?? "";
        return {
          type: _v299.TablePayloadItemType.SOURCE_URL,
          id: `${_v0?.embedDomain}${_v1}`,
          name: _v0?.embedDomain === "UNKNOWN" ? (0, _v370.default)(_v0?.embedDomain) : _v0?.embedDomain ?? "",
          plays: _v0?.views ?? 0,
          drm_licenses_used: _v0?.drmLicensesUsed ?? 0,
          loads: _v0?.impressions ?? 0,
          third_party_impressions: _v0?.thirdPartyImpressions ?? 0,
          finishes: _v0?.finishes ?? 0,
          downloads: _v0?.downloads ?? 0,
          unique_loads: _v0?.uniqueImpressions ?? 0,
          unique_viewers: _v0?.uniqueViewers ?? 0,
          averageviewpercentage: _v0?.meanPercentWatched ?? 0,
          averageviewduration: _v0?.meanSecondsWatched ?? 0,
          totalviewduration: _v0?.totalSecondsWatched ?? 0,
          path: _v0.embedDomainPath ? _v0.embedDomainPath : "/"
        };
      }),
      urlToDownloadCSV: _v0.exportLink
    } : {
      data: []
    },
    _v439 = {
      [_v299.Reports.BANDWIDTH_VIDEO]: ["startDate", "dimensionName", "metadata.connections.video.uri"],
      [_v299.Reports.BANDWIDTH_DATE]: ["startDate"]
    };
  function _v440(_v0, _v1, _v2, _v3) {
    let {
        isOrionLoading: _v4,
        queryParam: _v5
      } = (0, _v338.useAnalyticsFreshness)(),
      {
        startDate: _v6,
        endDate: _v7,
        filterLists: _v8
      } = _v1.filters[_v1.reportGroup],
      [_v9, _v10] = (0, _v4.useState)([]),
      _v11 = (0, _v4.useMemo)(() => _v6.toISODate(), [_v6]),
      _v12 = (0, _v4.useMemo)(() => _v7.toISODate(), [_v7]),
      _v13 = (0, _v4.useMemo)(() => Math.round(_v7.plus({
        day: 1
      }).diff(_v6, "days").days), [_v6, _v7]),
      _v14 = (_v0 => {
        switch (_v0) {
          case _v299.Reports.BANDWIDTH_VIDEO:
            return _v432;
          case _v299.Reports.BANDWIDTH_DATE:
            return _v430;
        }
        throw Error(`[VA] Invalid Report Types to getBandwidthDataProcessor for ${_v0}`);
      })(_v0),
      _v15 = (0, _v4.useMemo)(() => _v3 ? _v1.selectedItemsForGraph.filter(_v0 => _v0.id !== _v179.TOTAL_ROW_ID).map(_v0 => _v0.id) : [], [_v3, _v1.selectedItemsForGraph]),
      _v16 = (0, _v4.useMemo)(() => (0, _v367.getFiltersObjectForAPI)(_v2, _v8), [_v2, _v8]),
      _v17 = (0, _v4.useMemo)(() => _v3 ? {
        ..._v16,
        filter_content: _v15
      } : _v16, [_v3, _v15, _v16]),
      _v18 = (0, _v4.useMemo)(() => ["combinedBandwidth", "liveBandwidth", "videoBandwidth", ..._v439[_v0]], [_v0]),
      {
        data: _v19,
        isValidating: _v20,
        error: _v21
      } = _v196(() => _v4 || _v3 && !_v15?.length ? null : {
        where: {
          userId: _v1.userInUse.id
        },
        select: _v18,
        query: {
          startDate: _v11,
          endDate: _v12,
          objectGroup: _v0 === _v299.Reports.BANDWIDTH_VIDEO ? "video" : void 0,
          timeGroup: _v0 === _v299.Reports.BANDWIDTH_VIDEO ? "day" : "month",
          perPage: _v3 ? _v15.length * _v13 : 120,
          ..._v17,
          ..._v5
        }
      }, {
        revalidateOnFocus: !1,
        revalidateIfStale: !1,
        errorRetryInterval: 0,
        errorRetryCount: 1
      }),
      _v22 = !!_v3 && _v1.selectedItemsForGraph.find(_v0 => _v0.id === _v179.TOTAL_ROW_ID),
      _v23 = (0, _v4.useMemo)(() => ["combinedBandwidth", "liveBandwidth", "videoBandwidth", "startDate"], []),
      {
        data: _v24,
        isValidating: _v25,
        error: _v26
      } = _v196(() => _v4 || !_v22 ? null : {
        where: {
          userId: _v1.userInUse.id
        },
        select: _v23,
        query: {
          startDate: _v11,
          endDate: _v12,
          timeGroup: _v0 === _v299.Reports.BANDWIDTH_DATE ? "month" : void 0,
          perPage: _v3 ? _v13 : 120,
          ..._v16,
          ..._v5
        }
      }, {
        revalidateOnFocus: !1,
        revalidateIfStale: !1,
        errorRetryInterval: 0,
        errorRetryCount: 1
      });
    return (0, _v4.useEffect)(() => {
      if (!_v19 || _v22 && !_v24 || _v21 || _v26) return void _v10([]);
      try {
        let _v0 = _v14(_v19.data, {
          start_date: _v11,
          end_date: _v12
        }, _v1.selectedItemsForGraph, _v24?.data);
        _v10(_v0);
      } catch (_v0) {
        (0, _v308.logError)("Error while loading the Bandwidth Graph Data", _v0);
      }
    }, [_v19, _v24, _v11, _v12, _v1.selectedItemsForGraph, _v22, _v14, _v21, _v26]), {
      graphData: _v9,
      isLoading: _v20 || _v25,
      isError: _v21 || _v26
    };
  }
  var _v441 = _v0.i(0);
  let _v442 = ["startDate", "liveBandwidth", "videoBandwidth", "combinedBandwidth"];
  function _v443(_v0, _v1, _v2) {
    let {
        isOrionLoading: _v3,
        queryParam: _v4
      } = (0, _v338.useAnalyticsFreshness)(),
      {
        startDate: _v5,
        endDate: _v6,
        filterLists: _v7
      } = _v1.filters[_v1.reportGroup],
      [_v8, _v9] = (0, _v4.useState)([]),
      [_v10, _v11] = (0, _v4.useState)([]),
      [_v12, _v13] = (0, _v4.useState)(!1),
      [_v14, _v15] = (0, _v4.useState)(!1),
      [_v16, _v17] = (0, _v4.useState)(1),
      _v18 = (0, _v4.useMemo)(() => _v5.toISODate(), [_v5]),
      _v19 = (0, _v4.useMemo)(() => _v6.toISODate(), [_v6]),
      _v20 = (0, _v441.getTableFieldsByReportType)(_v0),
      _v21 = 1 === _v16,
      _v22 = (_v0 => {
        switch (_v0) {
          case _v299.Reports.BANDWIDTH_VIDEO:
            return _v431;
          case _v299.Reports.BANDWIDTH_DATE:
            return _v429;
        }
        throw Error(`[VA] Invalid Report Types to getBandwidthDataProcessor for ${_v0}`);
      })(_v0),
      _v23 = (0, _v4.useMemo)(() => _v0 === _v299.Reports.BANDWIDTH_DATE ? _v442 : _v20.map(_v0 => _v0.apiName), [_v0, _v20]);
    (0, _v4.useEffect)(() => {
      _v15(!0), _v17(1);
    }, [_v18, _v19]);
    let _v24 = (0, _v4.useMemo)(() => (0, _v367.getFiltersObjectForAPI)(_v2, _v7), [_v2, _v7]),
      _v25 = (0, _v4.useMemo)(() => ["combinedBandwidth", "liveBandwidth", "videoBandwidth", "startDate"], []),
      _v26 = (0, _v4.useMemo)(() => _v179.BANDWIDTH_REPORT_SORT_MAP[_v1.primaryDimensions.bandwidth], [_v1.primaryDimensions.bandwidth]),
      {
        data: _v27,
        isValidating: _v28,
        error: _v29
      } = _v196(() => {
        if (_v3) return null;
        let _v0 = _v0 === _v299.Reports.BANDWIDTH_DATE;
        return {
          where: {
            userId: _v1.userInUse.id
          },
          select: _v23,
          query: {
            startDate: _v18,
            endDate: _v19,
            objectGroup: _v0 === _v299.Reports.BANDWIDTH_VIDEO ? "video" : void 0,
            timeGroup: _v0 ? "month" : void 0,
            perPage: _v0 ? 120 : _v0 === _v299.Reports.BANDWIDTH_VIDEO ? 30 : 120,
            ...(_v0 ? {} : {
              page: _v16,
              sort: _v26
            }),
            ..._v24,
            ..._v4
          }
        };
      }, {
        revalidateOnFocus: !1,
        revalidateIfStale: !1,
        errorRetryInterval: 0,
        errorRetryCount: 1
      }),
      {
        data: _v30,
        isValidating: _v31,
        error: _v32
      } = _v196(() => _v3 || _v0 === _v299.Reports.BANDWIDTH_DATE ? null : {
        where: {
          userId: _v1.userInUse.id
        },
        select: _v25,
        query: {
          startDate: _v18,
          endDate: _v19,
          objectGroup: "total",
          ..._v24,
          ..._v4
        }
      }, {
        revalidateOnFocus: !1,
        revalidateIfStale: !1,
        errorRetryInterval: 0,
        errorRetryCount: 1
      });
    return (0, _v4.useEffect)(() => {
      if (!_v27 || _v29) return;
      let _v0 = _v22(_v27?.data, {
          start_date: _v18,
          end_date: _v19
        }),
        _v1 = _v0 === _v299.Reports.BANDWIDTH_DATE ? _v27.data.reduce((_v0, _v1) => ({
          combinedBandwidth: _v0.combinedBandwidth + (_v1.combinedBandwidth ?? 0),
          videoBandwidth: _v0.videoBandwidth + (_v1.videoBandwidth ?? 0),
          liveBandwidth: _v0.liveBandwidth + (_v1.liveBandwidth ?? 0),
          startDate: _v1.startDate ?? _v0.startDate
        }), {
          combinedBandwidth: 0,
          videoBandwidth: 0,
          liveBandwidth: 0,
          startDate: null
        }) : _v30?.data?.[0];
      _v1 && (_v11([{
        combinedBandwidth: _v1.combinedBandwidth?.toString() ?? "0",
        videoBandwidth: _v1.videoBandwidth?.toString() ?? "0",
        liveBandwidth: _v1.liveBandwidth?.toString() ?? "0",
        start_date: _v1.startDate ?? _v18
      }]), _v9(_v0 => _v21 ? _v0 : [..._v0, ..._v0]), _v15(!1), _v13(!!_v27?.paging?.next));
    }, [_v0, _v27, _v30, _v21, _v22, _v29, _v32, _v18, _v19]), {
      tableData: _v8,
      tableTotalData: _v10,
      initialLoad: _v21,
      isMoreDataLoading: _v14,
      isMoreDataAvailable: _v12,
      updateTableData: (_v0 = !1) => {
        _v0 ? _v17(1) : _v17(_v16 + 1);
      },
      isLoading: _v28 || _v31,
      isError: _v29 || _v32
    };
  }
  var _v444 = _v0.i(0),
    _v445 = _v0.i(0),
    _v446 = _v0.i(0),
    _v447 = _v0.i(0),
    _v448 = _v0.i(0),
    _v449 = _v0.i(0),
    _v450 = _v0.i(0),
    _v451 = _v0.i(0);
  let _v452 = async (_v0, _v1) => {
      let _v2 = _v0.headers.get("Content-Disposition")?.match(/attachment; filename="([^"]+)"/)?.at(1),
        _v3 = await _v0.blob(),
        _v4 = URL.createObjectURL(_v3),
        _v5 = document.createElement("a");
      _v5.href = _v4, _v5.download = _v2 ?? _v1, _v5.click(), URL.revokeObjectURL(_v4);
    },
    _v453 = _v0 => {
      let {
          dropdownWidth: _v1,
          name: _v2,
          placeholderText: _v3,
          itemRenderer: _v4,
          availableItems: _v5,
          alreadySelectedItems: _v6,
          disabled: _v7,
          onApply: _v8
        } = _v0,
        _v9 = (0, _v4.useRef)(null),
        [_v10, _v11] = (0, _v4.useState)(""),
        [_v12, _v13] = (0, _v4.useState)(!1),
        [_v14, _v15] = (0, _v4.useState)(!1),
        [_v16, _v17] = (0, _v4.useState)([..._v5]),
        [_v18, _v19] = (0, _v4.useState)([..._v6]);
      (0, _v304.useOutsideClick)({
        ref: _v9,
        handler: () => {
          _v12 && (_v19([]), _v13(!1));
        }
      }), (0, _v4.useEffect)(() => {
        let _v0 = new Map();
        _v6.forEach(_v0 => _v0.set(_v0.id, _v0)), _v18.forEach(_v0 => _v0.set(_v0.id, _v0)), _v19(Array.from(_v0.values()));
      }, [_v6, _v12]), (0, _v4.useEffect)(() => {
        _v10 ? _v17([..._v5.filter(_v0 => _v0.name.toLowerCase().indexOf(_v10.toLowerCase()) > -1)]) : _v17([..._v5]);
      }, [_v10, _v5]);
      let _v20 = () => {
          _v11(""), _v13(!1);
        },
        _v21 = 0 !== _v18.length && _v18.length === _v16.length;
      if (_v21) {
        for (let _v0 = 0; _v0 < _v18.length; _v0++) if (_v18[_v0].id !== _v16[_v0].id) {
          _v21 = !1;
          break;
        }
      }
      let _v22 = _v5.length >= 4;
      return (0, _v3.jsxs)(_v292.Popover, {
        isLazy: !0,
        placement: "bottom-end",
        isOpen: _v12,
        onClose: _v20,
        children: [(0, _v3.jsx)(_v294.PopoverTrigger, {
          children: (0, _v3.jsxs)(_v74.Button, {
            isDisabled: _v7,
            onClick: () => {
              if (_v14) return _v15(!1);
              let _v0 = !_v12;
              _v0 && _v19([..._v18]), _v13(_v0);
            },
            rightIcon: (0, _v3.jsx)(_v305.ChevronDownSmall, {}),
            variant: "tertiary",
            children: [_v2, _v6.length > 0 && ` - ${_v6.length}`]
          })
        }), (0, _v3.jsx)(_v302.Portal, {
          children: (0, _v3.jsx)(_v293.PopoverContent, {
            maxHeight: "25rem",
            width: _v1 || "20rem",
            borderWidth: "none",
            borderColor: "stroke",
            borderRadius: "0.75rem",
            padding: "0",
            ref: _v9,
            children: (0, _v3.jsxs)(_v5.Box, {
              children: [(0, _v3.jsxs)(_v5.Box, {
                padding: "1rem 1rem 0rem 1rem",
                width: "100%",
                children: [_v22 && (0, _v3.jsxs)(_v344.InputGroup, {
                  marginBottom: "1.25rem",
                  position: "relative",
                  children: [(0, _v3.jsx)(_v92.Input, {
                    placeholder: _v3,
                    size: "md",
                    value: _v10,
                    onChange: _v0 => {
                      let {
                        target: {
                          value: _v1
                        }
                      } = _v0;
                      _v11(_v1);
                    }
                  }), (0, _v3.jsx)(_v345.InputRightElement, {
                    children: _v10.length > 0 ? (0, _v3.jsx)(_v109.CloseXSmall, {
                      cursor: "pointer",
                      onClick: () => _v11("")
                    }) : (0, _v3.jsx)(_v348.SearchMagnifier, {})
                  })]
                }), (0, _v3.jsxs)(_v6.Flex, {
                  justifyContent: "space-between",
                  borderBottomWidth: "1px",
                  borderBottomColor: "stroke",
                  padding: "0 0.5rem",
                  _last: {
                    borderBottom: "none",
                    marginTop: 0 === _v16.length ? "0.5rem" : "inherit",
                    marginBottom: 0 === _v16.length ? "1.25rem" : "inherit"
                  },
                  children: [(0, _v3.jsx)(_v311.Checkbox, {
                    isChecked: _v21,
                    isDisabled: 0 === _v16.length,
                    onChange: _v0 => {
                      _v0.target.checked ? _v19(_v16.map(_v0 => ({
                        name: _v0.name,
                        id: _v0.id,
                        prepend: "",
                        color: ""
                      }))) : _v19([]);
                    },
                    children: (0, _v3.jsx)(_v5.Box, {
                      paddingLeft: "0.5rem",
                      children: _v21 ? (0, _v30.translate)({
                        singular: "Deselect all",
                        dictionary: {
                          es: {
                            singular: "Deseleccionar todo"
                          },
                          "de-DE": {
                            singular: "Alle abwählen"
                          },
                          "fr-FR": {
                            singular: "Tout désélectionner"
                          },
                          "ja-JP": {
                            singular: "すべての選択を解除"
                          },
                          "ko-KR": {
                            singular: "모두 선택 해제"
                          },
                          "pt-BR": {
                            singular: "Desmarcar tudo"
                          },
                          "zh-CN": {
                            singular: "取消全选"
                          }
                        }
                      }) : (0, _v30.translate)({
                        singular: "Select all",
                        dictionary: {
                          es: {
                            singular: "Seleccionar todo"
                          },
                          "de-DE": {
                            singular: "Alles auswählen"
                          },
                          "fr-FR": {
                            singular: "Tout sélectionner"
                          },
                          "ja-JP": {
                            singular: "すべて選択"
                          },
                          "ko-KR": {
                            singular: "모두 선택"
                          },
                          "pt-BR": {
                            singular: "Selecionar tudo"
                          },
                          "zh-CN": {
                            singular: "选择所有"
                          }
                        }
                      })
                    })
                  }), 0 !== _v18.length && (0, _v3.jsx)(_v5.Box, {
                    as: "button",
                    background: "none",
                    fontSize: "0.9rem",
                    color: "text-primary",
                    padding: "0",
                    margin: "0",
                    onClick: () => {
                      _v8([]), _v11(""), _v19([]), _v13(!1);
                    },
                    _hover: {
                      cursor: "pointer",
                      textDecoration: "underline"
                    },
                    children: (0, _v30.translate)({
                      singular: "Clear all",
                      dictionary: {
                        es: {
                          singular: "Borrar todo"
                        },
                        "de-DE": {
                          singular: "Alle löschen"
                        },
                        "fr-FR": {
                          singular: "Tout supprimer"
                        },
                        "ja-JP": {
                          singular: "すべて削除"
                        },
                        "ko-KR": {
                          singular: "모두 지우기"
                        },
                        "pt-BR": {
                          singular: "Limpar tudo"
                        },
                        "zh-CN": {
                          singular: "清除全部"
                        }
                      }
                    })
                  })]
                })]
              }), (0, _v3.jsx)(_v5.Box, {
                overflowY: "scroll",
                maxHeight: "14rem",
                _notFirst: {
                  padding: "0 1.5rem"
                },
                children: _v16.map((_v0, _v1) => {
                  let _v2 = _v18.findIndex(_v0 => _v0.id === _v0.id) > -1;
                  return (0, _v3.jsx)(_v5.Box, {
                    marginTop: "1.25rem",
                    _last: {
                      marginBottom: "1rem"
                    },
                    children: (0, _v3.jsx)(_v311.Checkbox, {
                      onChange: _v0 => {
                        _v0.target.checked ? _v19([..._v18, {
                          name: _v0.name,
                          id: _v0.id,
                          prepend: "",
                          color: ""
                        }]) : _v19([..._v18.filter(_v0 => _v0.id !== _v0.id)]);
                      },
                      isChecked: !!_v2,
                      children: (0, _v3.jsx)(_v5.Box, {
                        paddingLeft: "0.5rem",
                        fontWeight: "normal",
                        "text-overflow": "ellipsis",
                        overflow: "hidden",
                        children: _v4 ? _v4(_v0) : _v0.name
                      })
                    })
                  }, `video-element-${_v1}`);
                })
              }), (0, _v3.jsxs)(_v6.Flex, {
                boxSizing: "border-box",
                height: "4rem",
                width: "100%",
                borderTopWidth: "1px",
                borderTopColor: "stroke",
                borderRadius: "0 0 0.3rem 0.3rem",
                justifyContent: "flex-end",
                alignItems: "center",
                children: [(0, _v3.jsx)(_v5.Box, {
                  marginRight: "auto",
                  marginLeft: "1rem",
                  fontSize: "0.9rem",
                  color: "text-primary",
                  children: _v18.length > 0 && (0, _v3.jsxs)("span", {
                    children: [_v18.length, " selected"]
                  })
                }), (0, _v3.jsx)(_v74.Button, {
                  size: "sm",
                  variant: "secondary",
                  marginRight: "1rem",
                  onClick: _v20,
                  children: (0, _v30.translate)({
                    singular: "Cancel",
                    dictionary: {
                      es: {
                        singular: "Cancelar"
                      },
                      "de-DE": {
                        singular: "Abbrechen"
                      },
                      "fr-FR": {
                        singular: "Annuler"
                      },
                      "ja-JP": {
                        singular: "キャンセル"
                      },
                      "ko-KR": {
                        singular: "취소"
                      },
                      "pt-BR": {
                        singular: "Cancelar"
                      },
                      "zh-CN": {
                        singular: "取消"
                      }
                    }
                  })
                }), (0, _v3.jsx)(_v74.Button, {
                  size: "sm",
                  variant: "primary",
                  marginRight: "1rem",
                  onClick: () => {
                    _v8([..._v18]), _v11(""), _v19([]), _v13(!1);
                  },
                  isDisabled: 0 === _v18.length,
                  children: (0, _v30.translate)({
                    singular: "Apply",
                    dictionary: {
                      es: {
                        singular: "Aplicar"
                      },
                      "de-DE": {
                        singular: "Anwenden"
                      },
                      "fr-FR": {
                        singular: "Appliquer"
                      },
                      "ja-JP": {
                        singular: "適用する"
                      },
                      "ko-KR": {
                        singular: "적용"
                      },
                      "pt-BR": {
                        singular: "Aplicar"
                      },
                      "zh-CN": {
                        singular: "应用"
                      }
                    }
                  })
                })]
              })]
            })
          })
        })]
      });
    },
    _v454 = () => (0, _v3.jsx)(_v5.Box, {}),
    _v455 = [{
      name: _v179.STREAMING_TYPES_DISPLAY_MAP.Live,
      id: "live",
      prepend: "",
      color: ""
    }, {
      name: _v179.STREAMING_TYPES_DISPLAY_MAP.Non_live,
      id: "video",
      prepend: "",
      color: ""
    }],
    _v456 = _v0 => {
      let _v1 = (0, _v4.useContext)(_v28.ViewerContext),
        {
          disabled: _v2,
          filterLists: _v3,
          dispatch: _v4,
          filterKey: _v5
        } = _v0;
      return (0, _v3.jsx)(_v453, {
        name: _v179.DISPLAY_MAP.type,
        placeholderText: (0, _v30.translate)({
          singular: "Filter by streaming type",
          dictionary: {
            es: {
              singular: "Filtrar por el tipo de transmisión"
            },
            "de-DE": {
              singular: "Nach Streamingart filtern"
            },
            "fr-FR": {
              singular: "Filtrer par type de streaming"
            },
            "ja-JP": {
              singular: "ストリーミングタイプで絞り込み"
            },
            "ko-KR": {
              singular: "스트리밍 유형별 필터링"
            },
            "pt-BR": {
              singular: "Filtrar por tipo de transmissão"
            },
            "zh-CN": {
              singular: "按直播类型筛选"
            }
          }
        }),
        availableItems: _v455,
        alreadySelectedItems: _v3[_v5] ?? [],
        disabled: _v2,
        onApply: _v0 => {
          _v4({
            type: _v299.REPORT_ACTION_TYPE.SET_FILTER_LIST,
            payload: {
              filterKey: _v5,
              list: _v0
            }
          }), (0, _v32.sendFilterBarEvent)(_v299.Filters.STREAMING_TYPE, _v0.map(_v0 => _v0.id).join(","), window.location.pathname, _v1?.teamUser);
        }
      });
    },
    _v457 = [{
      filterKey: _v299.Filters.CONTENT,
      filterFunc: _v331
    }, {
      filterKey: _v299.Filters.CUSTOM_METADATA,
      filterFunc: _v334
    }, {
      filterKey: _v299.Filters.SOURCE_URL,
      filterFunc: _v0 => {
        let _v1 = (0, _v4.useContext)(_v28.ViewerContext),
          {
            disabled: _v2,
            filterLists: _v3,
            dispatch: _v4,
            startDate: _v5,
            endDate: _v6,
            filterKey: _v7,
            userInUse: _v8,
            filtersToApply: _v9
          } = _v0,
          _v10 = (0, _v4.useMemo)(() => (0, _v367.getFiltersObject)(_v9, _v3), [_v9, _v3]),
          [_v11, _v12] = (0, _v4.useState)([]),
          {
            isOrionLoading: _v13,
            queryParam: _v14
          } = (0, _v338.useAnalyticsFreshness)(),
          {
            data: _v15,
            error: _v16
          } = (0, _v193.useGetUserAnalytics)(() => _v13 ? null : {
            select: ["embedDomain"],
            where: {
              userId: _v8.id
            },
            query: {
              from: _v5.toISO(),
              to: _v6.toISO(),
              dimension: "embed_domain",
              direction: "desc",
              ..._v10,
              sort: "views",
              page: 1,
              perPage: 200,
              ..._v14
            }
          }, {
            revalidateOnFocus: !1,
            errorRetryInterval: 0,
            errorRetryCount: 1
          });
        return (0, _v4.useEffect)(() => {
          _v16 ? (0, _v308.logError)("Trouble retrieving Source Filter data", _v16) : _v12(_v15?.data?.map(_v0 => ({
            name: _v0?.embedDomain?.toLowerCase() === "unknown" ? (0, _v30.translate)({
              singular: "Unknown",
              dictionary: {
                es: {
                  singular: "Desconocido"
                },
                "de-DE": {
                  singular: "Unbekannt"
                },
                "fr-FR": {
                  singular: "Inconnu"
                },
                "ja-JP": {
                  singular: "不明"
                },
                "ko-KR": {
                  singular: "알 수 없음"
                },
                "pt-BR": {
                  singular: "Desconhecido"
                },
                "zh-CN": {
                  singular: "未知"
                }
              }
            }) : _v0?.embedDomain?.toLowerCase(),
            id: _v0?.embedDomain
          })) ?? []);
        }, [_v15, _v16]), (0, _v3.jsx)(_v453, {
          name: _v179.DISPLAY_MAP.source,
          placeholderText: (0, _v30.translate)({
            singular: "Filter by source URL",
            dictionary: {
              es: {
                singular: "Filtrar por la URL fuente"
              },
              "de-DE": {
                singular: "Nach Quell-URL filtern"
              },
              "fr-FR": {
                singular: "Filtrer par URL source"
              },
              "ja-JP": {
                singular: "ソースURLで絞り込み"
              },
              "ko-KR": {
                singular: "소스 URL로 필터링"
              },
              "pt-BR": {
                singular: "Filtrar por URL de origem"
              },
              "zh-CN": {
                singular: "按源 URL 筛选"
              }
            }
          }),
          availableItems: _v11,
          alreadySelectedItems: _v3[_v7] ?? [],
          disabled: _v2,
          onApply: _v0 => {
            _v4({
              type: _v299.REPORT_ACTION_TYPE.SET_FILTER_LIST,
              payload: {
                filterKey: _v7,
                list: _v0
              }
            }), (0, _v32.sendFilterBarEvent)(_v299.Filters.SOURCE_URL, _v0.map(_v0 => _v0.id).join(","), window.location.pathname, _v1?.teamUser);
          }
        });
      }
    }, {
      filterKey: _v299.Filters.DEVICE,
      filterFunc: _v0 => {
        let _v1 = (0, _v4.useContext)(_v28.ViewerContext),
          {
            userInUse: _v2,
            disabled: _v3,
            filterLists: _v4,
            dispatch: _v5,
            startDate: _v6,
            endDate: _v7,
            filterKey: _v8,
            filtersToApply: _v9
          } = _v0,
          _v10 = (0, _v4.useMemo)(() => (0, _v367.getFiltersObject)(_v9, _v4), [_v9, _v4]),
          [_v11, _v12] = (0, _v4.useState)([]),
          {
            isOrionLoading: _v13,
            queryParam: _v14
          } = (0, _v338.useAnalyticsFreshness)(),
          {
            data: _v15,
            error: _v16
          } = (0, _v193.useGetUserAnalytics)(() => _v13 ? null : {
            select: ["deviceType"],
            where: {
              userId: _v2.id
            },
            query: {
              from: _v6.toISO(),
              to: _v7.toISO(),
              dimension: "device_type",
              direction: "desc",
              ..._v10,
              sort: "views",
              page: 1,
              perPage: 200,
              ..._v14
            }
          }, {
            revalidateOnFocus: !1,
            errorRetryInterval: 0,
            errorRetryCount: 1
          });
        return (0, _v4.useEffect)(() => {
          _v16 ? (0, _v308.logError)("Trouble retrieving Device Filter data", _v16) : _v12((_v15?.data && _v15.data.map(_v0 => ({
            name: _v0.deviceType && _v179.DEVICE_DISPLAY_MAP[_v179.DEVICE_TYPES[_v0.deviceType]] ? _v179.DEVICE_DISPLAY_MAP[_v179.DEVICE_TYPES[_v0.deviceType]] : (0, _v370.default)(_v0.deviceType),
            id: _v0.deviceType
          }))) ?? []);
        }, [_v15, _v16]), (0, _v3.jsx)(_v453, {
          name: _v179.DISPLAY_MAP.device,
          placeholderText: (0, _v30.translate)({
            singular: "Filter by device type",
            dictionary: {
              es: {
                singular: "Filtrar por el tipo de dispositivo"
              },
              "de-DE": {
                singular: "Nach Gerätetyp filtern"
              },
              "fr-FR": {
                singular: "Filtrer par type d'appareil"
              },
              "ja-JP": {
                singular: "デバイスタイプで絞り込み"
              },
              "ko-KR": {
                singular: "기기 유형으로 필터링"
              },
              "pt-BR": {
                singular: "Filtrar por tipo de dispositivo"
              },
              "zh-CN": {
                singular: "按设备类型筛选"
              }
            }
          }),
          availableItems: _v11,
          alreadySelectedItems: _v4[_v8] ?? [],
          disabled: _v3,
          onApply: _v0 => {
            _v5({
              type: _v299.REPORT_ACTION_TYPE.SET_FILTER_LIST,
              payload: {
                filterKey: _v8,
                list: _v0
              }
            }), (0, _v32.sendFilterBarEvent)(_v299.Filters.DEVICE, _v0.map(_v0 => _v0.id).join(","), window.location.pathname, _v1?.teamUser);
          }
        });
      }
    }, {
      filterKey: _v299.Filters.REGION,
      filterFunc: _v0 => {
        let _v1 = (0, _v4.useContext)(_v28.ViewerContext),
          {
            userInUse: _v2,
            disabled: _v3,
            filterLists: _v4,
            dispatch: _v5,
            startDate: _v6,
            endDate: _v7,
            filterKey: _v8,
            filtersToApply: _v9
          } = _v0,
          _v10 = (0, _v4.useMemo)(() => (0, _v367.getFiltersObject)(_v9, _v4), [_v9, _v4]),
          [_v11, _v12] = (0, _v4.useState)([]),
          {
            isOrionLoading: _v13,
            queryParam: _v14
          } = (0, _v338.useAnalyticsFreshness)(),
          {
            data: _v15,
            error: _v16
          } = (0, _v193.useGetUserAnalytics)(() => _v13 ? null : {
            select: ["country"],
            where: {
              userId: _v2.id
            },
            query: {
              from: _v6.toISO(),
              to: _v7.toISO(),
              dimension: "country",
              direction: "desc",
              ..._v10,
              sort: "views",
              page: 1,
              perPage: 200,
              ..._v14
            }
          }, {
            revalidateOnFocus: !1,
            errorRetryInterval: 0,
            errorRetryCount: 1
          });
        return (0, _v4.useEffect)(() => {
          _v16 ? (0, _v308.logError)("Trouble retrieving Region Filter data", _v16) : _v12(_v15?.data?.map(_v0 => ({
            name: _v0?.country?.name?.toLowerCase() === "unknown" ? (0, _v30.translate)({
              singular: "Unknown",
              dictionary: {
                es: {
                  singular: "Desconocido"
                },
                "de-DE": {
                  singular: "Unbekannt"
                },
                "fr-FR": {
                  singular: "Inconnu"
                },
                "ja-JP": {
                  singular: "不明"
                },
                "ko-KR": {
                  singular: "알 수 없음"
                },
                "pt-BR": {
                  singular: "Desconhecido"
                },
                "zh-CN": {
                  singular: "未知"
                }
              }
            }) : _v0?.country?.name,
            id: _v0?.country?.code
          })) ?? []);
        }, [_v15, _v16]), (0, _v3.jsx)(_v453, {
          name: _v179.DISPLAY_MAP.region,
          placeholderText: (0, _v30.translate)({
            singular: "Filter by region name",
            dictionary: {
              es: {
                singular: "Filtrar por el nombre de la región"
              },
              "de-DE": {
                singular: "Nach Regionsnamen filtern"
              },
              "fr-FR": {
                singular: "Filtrer par nom de région"
              },
              "ja-JP": {
                singular: "地域名で絞り込み"
              },
              "ko-KR": {
                singular: "지역 이름으로 필터링"
              },
              "pt-BR": {
                singular: "Filtrar por nome da região"
              },
              "zh-CN": {
                singular: "按地名筛选"
              }
            }
          }),
          availableItems: _v11,
          alreadySelectedItems: _v4[_v8] ?? [],
          disabled: _v3,
          onApply: _v0 => {
            _v5({
              type: _v299.REPORT_ACTION_TYPE.SET_FILTER_LIST,
              payload: {
                filterKey: _v8,
                list: _v0
              }
            }), _v32.sendFilterBarEvent?.(_v299.Filters.REGION, _v0.map(_v0 => _v0.id).join(","), window.location.pathname, _v1?.teamUser);
          }
        });
      }
    }, {
      filterKey: _v299.Filters.STREAMING_TYPE,
      filterFunc: _v456
    }, {
      filterKey: _v299.Filters.MEMBER,
      filterFunc: _v454
    }, {
      filterKey: _v299.Filters.TEXT_LANGUAGE,
      filterFunc: _v454
    }, {
      filterKey: _v299.Filters.TEXT_TYPE_AND_PROVENANCE,
      filterFunc: _v454
    }, {
      filterKey: _v299.Filters.AUDIO_LANGUAGE,
      filterFunc: _v454
    }, {
      filterKey: _v299.Filters.AUDIO_TYPE_AND_PROVENANCE,
      filterFunc: _v454
    }, {
      filterKey: _v299.Filters.WORKSPACES,
      filterFunc: _v402
    }],
    _v458 = [_v299.Filters.CONTENT, _v299.Filters.CUSTOM_METADATA, _v299.Filters.SOURCE_URL, _v299.Filters.DEVICE, _v299.Filters.REGION, _v299.Filters.STREAMING_TYPE, _v299.Filters.MEMBER, _v299.Filters.TEXT_LANGUAGE, _v299.Filters.TEXT_TYPE_AND_PROVENANCE, _v299.Filters.AUDIO_LANGUAGE, _v299.Filters.AUDIO_TYPE_AND_PROVENANCE, _v299.Filters.WORKSPACES],
    _v459 = [{
      filterKey: _v299.Filters.CONTENT,
      filterFunc: _v331
    }, {
      filterKey: _v299.Filters.CUSTOM_METADATA,
      filterFunc: _v334
    }, {
      filterKey: _v299.Filters.STREAMING_TYPE,
      filterFunc: _v456
    }],
    _v460 = {
      [_v299.Reports.VIDEO]: "video_report.csv",
      [_v299.Reports.REGION]: "region_report.csv",
      [_v299.Reports.SOURCE]: "source_report.csv",
      [_v299.Reports.DEVICE]: "device_report.csv",
      [_v299.Reports.DATE]: "date_report.csv",
      [_v299.Reports.TEAM]: "team_report.csv"
    },
    _v461 = ({
      requestStatus: _v0,
      exportMethod: _v1,
      secondaryDimension: _v2
    }) => "REJECTED" == _v0 ? (0, _v3.jsx)(_v448.Paragraph, {
      size: "md",
      color: "status-destructive-primary",
      children: "POST" == _v1 ? _v190.T_EXPORT_CSV_MODAL.unableToExport : _v190.T_EXPORT_CSV_MODAL.unableToExportUseEmail
    }) : _v2 ? (0, _v3.jsx)(_v448.Paragraph, {
      size: "md",
      children: _v190.T_EXPORT_CSV_MODAL.secondaryDimensionInfo(_v2)
    }) : null,
    _v462 = ({
      reportType: _v0,
      emailAddress: _v1,
      filters: {
        startDate: _v2,
        endDate: _v3,
        filterLists: _v4
      },
      csvExportURL: _v5,
      isOpen: _v6,
      secondaryDimension: _v7,
      onClose: _v8
    }) => {
      let [_v9, _v10] = (0, _v4.useState)("NOT_SENT"),
        [_v11, _v12] = (0, _v4.useState)("POST"),
        _v13 = (0, _v47.useToast)(),
        _v14 = (0, _v4.useContext)(_v28.ViewerContext),
        _v15 = _v14?.teamUser,
        {
          trackAnalyticsDataExported: _v16
        } = (0, _v13.useAnalyticsTracking)();
      return (0, _v3.jsxs)(_v75.Modal, {
        isOpen: _v6,
        onClose: _v8,
        onOverlayClick: () => (0, _v32.sendExportModalCloseEvent)("overlay", _v15),
        children: [(0, _v3.jsx)(_v80.ModalOverlay, {}), (0, _v3.jsxs)(_v77.ModalContent, {
          borderRadius: "xl",
          maxW: "30rem",
          children: [(0, _v3.jsx)(_v79.ModalHeader, {
            paddingTop: "1.5rem",
            paddingBottom: "0rem",
            children: (0, _v3.jsx)(_v39.Header, {
              size: "md",
              children: _v190.T_EXPORT_CSV_MODAL.header
            })
          }), (0, _v3.jsx)(_v123.ModalCloseButton, {
            size: "md",
            onClick: () => (0, _v32.sendExportModalCloseEvent)(null, _v15)
          }), (0, _v3.jsxs)(_v76.ModalBody, {
            paddingTop: "0rem",
            paddingBottom: "1rem",
            display: "flex",
            flexDir: "column",
            gap: "1.25rem",
            children: [(0, _v3.jsx)(_v448.Paragraph, {
              size: "md",
              children: _v190.T_EXPORT_CSV_MODAL.emailAddress(_v1 || "")
            }), (0, _v3.jsx)(_v448.Paragraph, {
              size: "md",
              children: _v190.T_EXPORT_CSV_MODAL.reportExport(_v0)
            }), (0, _v3.jsxs)(_v5.Box, {
              children: [(0, _v3.jsx)(_v448.Paragraph, {
                size: "md",
                children: _v190.T_EXPORT_CSV_MODAL.dateRange(_v2.toLocaleString(), _v3.toLocaleString())
              }), _v457.filter(({
                filterKey: _v0
              }) => _v0 in _v4 && _v4[_v0].length > 0 && _v0 !== _v451.Filters.WORKSPACES).map(({
                filterKey: _v0
              }) => (0, _v3.jsx)(_v448.Paragraph, {
                size: "md",
                children: _v464(_v0, _v4[_v0])
              }, _v0))]
            }), (0, _v3.jsx)(_v461, {
              requestStatus: _v9,
              exportMethod: _v11,
              secondaryDimension: _v7
            })]
          }), (0, _v3.jsxs)(_v78.ModalFooter, {
            paddingTop: "0rem",
            paddingBottom: "1.5rem",
            children: [(0, _v3.jsx)(_v74.Button, {
              onClick: () => {
                (0, _v32.sendExportModalCloseEvent)("Close", _v15), _v8();
              },
              variant: "tertiary",
              children: _v190.T_EXPORT_CSV_MODAL.close
            }), (0, _v3.jsx)(_v463, {
              exportMethod: _v11,
              isLoading: "LOADING" == _v9,
              onChange: _v0 => {
                _v12(_v0), _v10("NOT_SENT");
              },
              onClick: () => {
                (0, _v32.sendExportModalExportEvent)(_v11, _v15), _v10("LOADING"), fetch(_v5, {
                  method: _v11
                }).then(_v0 => {
                  if (!_v0.ok) {
                    (0, _v32.sendExportModalErrorEvent)(_v15), _v13({
                      title: _v190.T_EXPORT_CSV_MODAL.unableToExport
                    });
                    return;
                  }
                  switch (_v16({
                    analyticsReportType: _v0,
                    analyticsDataExportedTarget: "POST" === _v11 ? "email" : "download"
                  }), _v11) {
                    case "POST":
                      (0, _v32.sendExportModalLoadingEvent)(_v15), _v13({
                        title: _v190.T_EXPORT_CSV_MODAL.exportProcessing
                      });
                      break;
                    case "GET":
                      return _v452(_v0, _v460[_v0]);
                  }
                }).then(_v8).catch(() => _v10("REJECTED"));
              }
            })]
          })]
        })]
      });
    },
    _v463 = _v0 => {
      let _v1 = [{
          value: "POST",
          button: _v190.T_EXPORT_CSV_MODAL.emailExport,
          tooltip: _v190.T_EXPORT_CSV_MODAL.reliableForAll,
          icon: (0, _v3.jsx)(_v450.Envelope, {})
        }, {
          value: "GET",
          button: _v190.T_EXPORT_CSV_MODAL.download,
          tooltip: _v190.T_EXPORT_CSV_MODAL.fasterForSmaller,
          icon: (0, _v3.jsx)(_v48.DownloadImport, {})
        }],
        _v2 = "POST" == _v0.exportMethod ? _v1[0] : _v1[1];
      return (0, _v3.jsxs)(_v449.SplitButton, {
        variant: "primary",
        isDisabled: _v0.isLoading,
        children: [(0, _v3.jsx)(_v449.SplitButtonPrimary, {
          spinner: (0, _v3.jsx)(_v10.Spinner, {
            size: "sm"
          }),
          isLoading: _v0.isLoading,
          onClick: _v0.onClick,
          children: _v2.button
        }), (0, _v3.jsxs)(_v41.Menu, {
          placement: "bottom-end",
          children: [(0, _v3.jsx)(_v449.SplitButtonSecondaryMenu, {
            "aria-label": "menu"
          }), (0, _v3.jsx)(_v44.MenuList, {
            children: (0, _v3.jsx)(_v445.MenuOptionGroup, {
              type: "radio",
              value: _v0.exportMethod,
              onChange: _v0.onChange,
              children: _v1.map(_v0 => (0, _v3.jsx)(_v444.MenuItemOption, {
                value: _v0.value,
                children: (0, _v3.jsx)(_v125.Tooltip, {
                  label: _v0.tooltip,
                  placement: "top",
                  children: (0, _v3.jsxs)(_v5.Box, {
                    as: "span",
                    display: "flex",
                    gap: ".25rem",
                    alignItems: "center",
                    children: [_v0.icon, _v0.button]
                  })
                })
              }, _v0.value))
            })
          })]
        })]
      });
    },
    _v464 = (_v0, _v1) => {
      let _v2 = () => ({
          names: _v1.slice(0, 2).map(_v0 => _v0.name).join(", "),
          overflow: _v1.length - 2
        }),
        _v3 = () => ({
          names: _v1.map(_v0 => _v0.name).join(", "),
          overflow: 0
        }),
        {
          names: _v4,
          overflow: _v5
        } = {
          [_v451.Filters.CONTENT]: () => ({
            names: _v1.slice(0, 2).map(_v0 => `“${(0, _v447.default)(_v0.name, {
              length: 39
            })}”`).join(" "),
            overflow: _v1.length - 2
          }),
          [_v451.Filters.SOURCE_URL]: _v2,
          [_v451.Filters.DEVICE]: _v3,
          [_v451.Filters.REGION]: _v2,
          [_v451.Filters.STREAMING_TYPE]: _v3,
          [_v451.Filters.MEMBER]: _v3,
          [_v451.Filters.TEXT_LANGUAGE]: _v2,
          [_v451.Filters.TEXT_TYPE_AND_PROVENANCE]: _v2,
          [_v451.Filters.AUDIO_LANGUAGE]: _v2,
          [_v451.Filters.AUDIO_TYPE_AND_PROVENANCE]: _v2
        }[_v0]();
      return _v5 > 0 ? _v190.T_EXPORT_CSV_MODAL.filterRowOverflow(_v0, _v4, _v5) : _v190.T_EXPORT_CSV_MODAL.filterRow(_v0, _v4);
    },
    _v465 = ({
      viewer: _v0,
      reportType: _v1,
      emailAddress: _v2,
      filters: _v3,
      csvExportURL: _v4,
      isDisabled: _v5,
      secondaryDimension: _v6,
      size: _v7 = "md"
    }) => {
      let [_v8, _v9] = (0, _v4.useState)(!1),
        {
          trackAnalyticsExportDataClicked: _v10
        } = (0, _v13.useAnalyticsTracking)();
      return (0, _v3.jsxs)(_v3.Fragment, {
        children: [(0, _v3.jsx)(_v74.Button, {
          size: _v7,
          variant: "secondary",
          leftIcon: (0, _v3.jsx)(_v446.ArrowToBottom, {}),
          "data-id": "analyticsExportButton",
          isDisabled: _v5,
          onClick: () => {
            _v9(!0), (0, _v32.sendExportModalOpenEvent)(_v0?.teamUser), _v10({
              analyticsReportType: _v1
            });
          },
          children: _v179.DISPLAY_MAP.export
        }), _v8 && (0, _v3.jsx)(_v462, {
          reportType: _v1,
          emailAddress: _v2,
          filters: _v3,
          csvExportURL: _v4,
          isOpen: _v8,
          secondaryDimension: _v6,
          onClose: () => _v9(!1)
        })]
      });
    },
    _v466 = [_v299.TablePayloadItemType.DATE, _v299.TablePayloadItemType.DEVICE, _v299.TablePayloadItemType.REGION, _v299.TablePayloadItemType.SOURCE_URL, _v299.TablePayloadItemType.VIDEO, _v299.TablePayloadItemType.STREAMING_TYPE, _v299.TablePayloadItemType.BANDWIDTH_VIDEO, _v299.TablePayloadItemType.TEXT_TRACK, _v299.TablePayloadItemType.AUDIO_TRACK],
    _v467 = _v0 => {
      let _v1 = (0, _v4.useContext)(_v28.ViewerContext),
        {
          selectedSegment: _v2,
          reportType: _v3,
          urlToDownloadCSV: _v4,
          setSelectedSegment: _v5,
          userInUse: _v6,
          pageFilters: _v7,
          isLoading: _v8
        } = _v0,
        {
          trackAnalyticsBreakdownChanged: _v9
        } = (0, _v13.useAnalyticsTracking)(),
        {
          capabilities: {
            canExportAnalyticsCsv: _v10
          },
          ready: _v11
        } = (0, _v11.useCapability)(["canExportAnalyticsCsv"], _v6);
      return (0, _v3.jsxs)(_v6.Flex, {
        paddingBottom: "1rem",
        backgroundColor: "background",
        justifyContent: "space-between",
        children: [(0, _v3.jsxs)(_v6.Flex, {
          justifyContent: "flex-start",
          children: [(0, _v3.jsxs)(_v41.Menu, {
            children: [(0, _v3.jsx)(_v42.MenuButton, {
              as: _v74.Button,
              "data-id": "analyticsSecondaryDimension",
              size: "sm",
              variant: "secondary",
              textAlign: "left",
              rightIcon: (0, _v3.jsx)(_v305.ChevronDownSmall, {}),
              onClick: () => {
                (0, _v32.sendTableSecondaryDimensionClickEvent)(_v1?.teamUser);
              },
              children: _v2 ? _v179.TABLE_SEGMENT_NAME_DISPLAY_MAP[_v2] : _v190.T_VIEW_BREAKDOWN_BY
            }), (0, _v3.jsx)(_v44.MenuList, {
              children: (0, _v3.jsx)(_v445.MenuOptionGroup, {
                type: "radio",
                value: _v2 || void 0,
                onChange: _v0 => {
                  _v5(_v0), (0, _v32.sendTableSegmentClickEvent)(_v0, _v1?.teamUser), _v9({
                    analyticsReportType: _v3,
                    analyticsBreakdownValue: _v0
                  });
                },
                children: _v466.filter(_v0 => ((_v0, _v1) => {
                  switch (_v0) {
                    case _v299.TablePayloadItemType.VIDEO:
                      if (_v1 === _v299.Reports.VIDEO) return !1;
                      return !0;
                    case _v299.TablePayloadItemType.DEVICE:
                      if (_v1 === _v299.Reports.DEVICE) return !1;
                      return !0;
                    case _v299.TablePayloadItemType.REGION:
                      if (_v1 === _v299.Reports.REGION) return !1;
                      return !0;
                    case _v299.TablePayloadItemType.SOURCE_URL:
                      if (_v1 === _v299.Reports.SOURCE) return !1;
                      return !0;
                    case _v299.TablePayloadItemType.DATE:
                      if (_v1 === _v299.Reports.DATE) return !1;
                      return !0;
                    case _v299.TablePayloadItemType.STREAMING_TYPE:
                    case _v299.TablePayloadItemType.TEXT_TRACK:
                    case _v299.TablePayloadItemType.AUDIO_TRACK:
                      return !0;
                    default:
                      return !1;
                  }
                })(_v0, _v3)).map(_v0 => (0, _v3.jsx)(_v444.MenuItemOption, {
                  value: _v0,
                  children: _v179.TABLE_SEGMENT_NAME_DISPLAY_MAP[_v0]
                }, _v0))
              }, _v2)
            })]
          }), _v2 && (0, _v3.jsx)(_v74.Button, {
            size: "sm",
            variant: "tertiary",
            marginLeft: "md",
            onClick: () => _v5(null),
            children: (0, _v30.translate)({
              singular: "Clear",
              dictionary: {
                es: {
                  singular: "Borrar"
                },
                "de-DE": {
                  singular: "Löschen"
                },
                "fr-FR": {
                  singular: "Effacer"
                },
                "ja-JP": {
                  singular: "クリア"
                },
                "ko-KR": {
                  singular: "비우기"
                },
                "pt-BR": {
                  singular: "Limpar"
                },
                "zh-CN": {
                  singular: "清除"
                }
              }
            })
          })]
        }), (0, _v3.jsx)(_v6.Flex, {
          justifyContent: "flex-end",
          children: _v8 ? (0, _v3.jsx)(_v45.Skeleton, {
            width: "8.125rem",
            height: "2rem",
            borderRadius: "sm"
          }) : _v10 || !_v11 ? (0, _v3.jsx)(_v465, {
            viewer: _v1,
            reportType: _v3,
            emailAddress: _v1?.user?.email,
            filters: _v7,
            csvExportURL: _v4 ?? "",
            isDisabled: void 0 === _v4,
            secondaryDimension: _v2 ?? void 0,
            size: "sm"
          }) : (0, _v3.jsx)(_v468, {
            size: "sm"
          })
        })]
      });
    },
    _v468 = ({
      size: _v0
    }) => {
      let [_v1, _v2] = (0, _v4.useState)(!1);
      return (0, _v3.jsxs)(_v3.Fragment, {
        children: [(0, _v3.jsx)(_v74.Button, {
          variant: "upsell",
          leftIcon: (0, _v3.jsx)(_v446.ArrowToBottom, {}),
          size: _v0,
          onClick: () => _v2(!0),
          children: _v179.UPSELL_TEXT.export
        }), _v1 && (0, _v3.jsx)(_v34, {
          onClose: () => _v2(!1),
          headerText: _v179.UPSELL_TEXT.export,
          subHeaderText: (0, _v30.translate)({
            singular: "Get access to robust analytics and privacy tools",
            dictionary: {
              es: {
                singular: "Acceda a sólidas herramientas de análisis y privacidad"
              },
              "de-DE": {
                singular: "Erhalten Sie Zugang zu zuverlässigen Analyse- und Datenschutztools"
              },
              "fr-FR": {
                singular: "Accédez à des outils performants en matière de statistiques et de confidentialité"
              },
              "ja-JP": {
                singular: "強力な分析ツールとプライバシーツールにアクセス"
              },
              "ko-KR": {
                singular: "강력한 분석 및 프라이버시 도구에 액세스하세요."
              },
              "pt-BR": {
                singular: "Acesse análises robustas e ferramentas de privacidade"
              },
              "zh-CN": {
                singular: "访问强大的分析和隐私工具"
              }
            }
          })
        })]
      });
    };
  var _v469 = _v0.i(0),
    _v470 = _v0.i(0),
    _v471 = _v0.i(0),
    _v472 = _v0.i(0);
  let _v473 = (_v0, _v1) => {
    switch (_v0) {
      case "date":
        return _v299.TablePayloadItemType.DATE;
      case "video":
        return _v299.TablePayloadItemType.VIDEO;
      case "source_url":
        return _v299.TablePayloadItemType.SOURCE_URL;
      case "device":
        return _v299.TablePayloadItemType.DEVICE;
      case "region":
        return _v299.TablePayloadItemType.REGION;
      case "streaming_type":
        return _v299.TablePayloadItemType.STREAMING_TYPE;
    }
    return _v1.type;
  };
  var _v474 = _v0.i(0),
    _v475 = _v0.i(0);
  let _v476 = _v0 => {
    let {
        totalRowStats: _v1,
        selectedDataItems: _v2,
        reportType: _v3,
        onCheckHandler: _v4,
        fields: _v5,
        tableLayoutData: _v6,
        isUserWithLimit: _v7,
        isTableError: _v8,
        isEmptyData: _v9
      } = _v0,
      _v10 = (0, _v4.useMemo)(() => {
        let _v0 = _v1?.data;
        return _v0?.length > 1 ? _v0.reduce((_v0, _v1) => {
          let _v2 = {};
          for (let _v0 in _v0[0]) _v2[_v0] = (Number(_v0[_v0]) || 0) + (Number(_v1[_v0]) || 0);
          return _v2;
        }, {}) : _v0?.length === 1 ? _v0[0] : (0, _v475.default)(_v1, "[0]");
      }, [_v1]),
      _v11 = !!_v2.find(_v0 => _v0.id === _v179.TOTAL_ROW_ID),
      _v12 = _v2.length >= 10 || _v8 || _v9,
      _v13 = (0, _v4.useMemo)(() => ![_v299.Reports.BANDWIDTH_DATE, _v299.Reports.DATE].includes(_v3), [_v3]),
      _v14 = (0, _v30.translate)({
        singular: "Report Total limit is {MAX} videos.",
        replacements: {
          MAX: _v179.MAX_NO_OF_VIDEOS_FOR_NETWORK_TRANSFER
        },
        dictionary: {
          es: {
            singular: "El límite total de informes es de {MAX} videos."
          },
          "de-DE": {
            singular: "Gesamtbericht Limit ist {MAX} Videos."
          },
          "fr-FR": {
            singular: "La limite du nombre total est de {MAX} vidéos."
          },
          "ja-JP": {
            singular: "レポートに表示される動画の上限は、合計{MAX}本です。"
          },
          "ko-KR": {
            singular: "동영상 신고 한도는 {MAX}개입니다."
          },
          "pt-BR": {
            singular: "O limite total do relatório é de {MAX} vídeos."
          },
          "zh-CN": {
            singular: "报告视频总数限制为 {MAX}。"
          }
        }
      }),
      _v15 = (0, _v30.translate)({
        singular: "Total based on all of the applied filters.",
        dictionary: {
          es: {
            singular: "Total basado en todos los filtros aplicados."
          },
          "de-DE": {
            singular: "Der Gesamtwert basiert auf allen angewendeten Filtern."
          },
          "fr-FR": {
            singular: "Total établi en fonction de tous les filtres appliqués."
          },
          "ja-JP": {
            singular: "適用されたすべてのフィルターに基づく合計数。"
          },
          "ko-KR": {
            singular: "적용된 모든 필터를 기반으로 한 총합입니다."
          },
          "pt-BR": {
            singular: "Total com base em todos os filtros aplicados."
          },
          "zh-CN": {
            singular: "根据应用的所有过滤器得出的总数。"
          }
        }
      }) + (_v7 ? ` ${_v14}` : "");
    return (0, _v3.jsx)(_v5.Box, {
      width: "100%",
      as: "tfoot",
      display: "table",
      children: (0, _v3.jsx)(_v5.Box, {
        as: "tr",
        children: _v5.filter(_v0 => _v0.isVisible).map((_v0, _v1) => {
          let _v2 = _v0.name,
            _v3 = ((_v0 = {}, _v1) => {
              let _v2 = _v1.split("."),
                _v3 = (0, _v475.default)(_v0, `${(0, _v474.default)(_v2[0])}`) ?? "-";
              return _v2.length > 1 && (_v3 = (0, _v475.default)(_v0, `${_v2[0]}.${(0, _v474.default)(_v2[1])}`) ?? "-"), _v3;
            })(_v10, _v0.apiName),
            _v4 = "name" === _v2,
            _v5 = "platform" === _v2,
            _v6 = _v6[_v2];
          return (0, _v3.jsxs)(_v5.Box, {
            as: "td",
            textTransform: "capitalize",
            fontWeight: "bold",
            color: "text-primary",
            width: _v6,
            minWidth: _v6,
            maxWidth: _v6,
            position: _v4 || _v5 ? "sticky" : "inherit",
            zIndex: _v4 ? 1 : "inherit",
            left: _v4 ? 0 : _v5 ? _v6 : "inherit",
            backgroundColor: "fill-surface",
            lineHeight: "1.4rem",
            fontSize: "0.9rem",
            padding: "0.92rem",
            paddingLeft: _v4 ? "1.5rem" : "inherit",
            textAlign: _v4 ? "left" : "right",
            borderBottomWidth: "0.063rem",
            borderBottomColor: "stroke",
            children: [(0, _v3.jsx)(_v5.Box, {
              position: "absolute",
              height: "calc(100% + 0.031rem)",
              width: "100%",
              top: "0",
              left: "0",
              zIndex: -10,
              borderRightWidth: _v4 ? "0.063rem" : "inherit",
              borderRightColor: _v4 ? "stroke" : "inherit"
            }), "name" === _v2 ? (0, _v3.jsxs)(_v6.Flex, {
              children: [_v13 ? (0, _v3.jsxs)(_v3.Fragment, {
                children: [(0, _v3.jsx)(_v6.Flex, {
                  width: "auto",
                  alignSelf: "center",
                  alignItems: "center",
                  cursor: _v11 || _v2.length < 10 ? "pointer" : "not-allowed",
                  onClick: _v0 => {
                    _v0.preventDefault(), _v4({
                      id: _v179.TOTAL_ROW_ID,
                      name: _v179.TOTAL_ROW_NAME,
                      type: (_v0 => {
                        switch (_v0) {
                          case _v299.Reports.VIDEO:
                            return _v299.TablePayloadItemType.VIDEO;
                          case _v299.Reports.DATE:
                            return _v299.TablePayloadItemType.DATE;
                          case _v299.Reports.DEVICE:
                            return _v299.TablePayloadItemType.DEVICE;
                          case _v299.Reports.REGION:
                            return _v299.TablePayloadItemType.REGION;
                          case _v299.Reports.SOURCE:
                            return _v299.TablePayloadItemType.SOURCE_URL;
                          case _v299.Reports.BANDWIDTH_DATE:
                            return _v299.TablePayloadItemType.BANDWIDTH;
                          case _v299.Reports.BANDWIDTH_VIDEO:
                            return _v299.TablePayloadItemType.BANDWIDTH_VIDEO;
                        }
                        throw Error("[VA] Invalid ReportType is given, Try Harder!");
                      })(_v3)
                    });
                  },
                  children: (0, _v3.jsx)(_v311.Checkbox, {
                    width: "100%",
                    isChecked: _v11,
                    borderColor: _v11 ? `${(0, _v367.getTotalRowColor)()} !important` : "stroke",
                    background: "background",
                    _checked: {
                      "& .chakra-checkbox__control": {
                        background: (0, _v367.getTotalRowColor)(),
                        borderColor: (0, _v367.getTotalRowColor)()
                      }
                    },
                    isDisabled: !_v11 && _v12
                  })
                }, "checkbox-total-row"), (0, _v3.jsx)(_v5.Box, {
                  marginRight: "1rem"
                })]
              }) : (0, _v3.jsx)(_v5.Box, {
                marginRight: "1.7rem"
              }), (0, _v3.jsx)(_v6.Flex, {
                alignContent: "center",
                alignItems: "center",
                height: "2rem",
                marginLeft: _v13 ? "0.7rem" : "0",
                children: (0, _v3.jsx)(_v125.Tooltip, {
                  placement: "right",
                  label: _v15,
                  children: (0, _v3.jsx)(_v46.Text, {
                    as: "p",
                    color: "text-primary",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    variant: "body-xl",
                    children: _v179.TOTAL_ROW_NAME
                  })
                })
              })]
            }) : (0, _v3.jsx)(_v5.Box, {
              as: "span",
              height: _v4 ? "1.6rem" : "2rem",
              padding: _v4 ? "0 0.5rem" : "inherit",
              paddingRight: _v4 || _v5 ? "auto" : "1.5rem",
              top: _v4 ? "0.063rem" : "inherit",
              textTransform: "capitalize",
              children: _v9 || _v8 ? 0 : _v0.totalFormatter ? _v0.totalFormatter(_v3) : _v3
            })]
          }, `table-footer-cell-${_v1}`);
        })
      })
    });
  };
  var _v477 = _v0.i(0),
    _v478 = _v0.i(0),
    _v479 = _v0.i(0);
  let _v480 = ["name", "likes", "comments", "shares", "platform"],
    _v481 = _v0 => {
      let {
        fields: _v1,
        sortState: _v2,
        tableLayoutData: _v3,
        isDatePayloadItemVisible: _v4,
        headerOnClickHandler: _v5,
        isTableError: _v6,
        isEmptyData: _v7
      } = _v0;
      return (0, _v3.jsx)(_v5.Box, {
        width: "100%",
        as: "thead",
        display: "table",
        borderRadius: "1.5rem",
        children: (0, _v3.jsx)(_v5.Box, {
          width: "100%",
          as: "tr",
          borderRadius: "1.5rem",
          children: _v1.filter(_v0 => _v0.isVisible).map((_v0, _v1) => {
            let _v2 = _v0.apiName,
              _v3 = _v2 === _v2.columnName,
              _v4 = _v4 && "name" === _v0.name,
              _v5 = _v3 && !_v6 && !_v7,
              _v6 = "name" === _v0.name,
              _v7 = "platform" === _v0.name,
              _v8 = _v0.isSortable || _v4,
              _v9 = _v3[_v0.name],
              _v10 = _v5 ? "text-primary" : "text-secondary",
              _v11 = (0, _v3.jsx)(_v479.SortSmall, {
                boxSize: "1.1rem",
                color: _v10,
                _groupHover: {
                  color: "text-primary"
                }
              });
            _v0.isSortable || _v4 ? !_v3 || _v6 || _v7 || (_v11 = _v2.sortValue === _v179.SORT_VALUE.ASCENDING_ORDER ? (0, _v3.jsx)(_v5.Box, {
              height: "auto",
              title: (0, _v30.translate)({
                singular: "up arrow signifying ascending sort",
                dictionary: {
                  es: {
                    singular: "flecha hacia arriba que indica el orden ascendente"
                  },
                  "de-DE": {
                    singular: "Pfeil nach oben (aufsteigende Sortierung)"
                  },
                  "fr-FR": {
                    singular: "flèche vers le haut indiquant l'ordre croissant"
                  },
                  "ja-JP": {
                    singular: "昇順ソートを示す上矢印"
                  },
                  "ko-KR": {
                    singular: "오름차순 정렬을 나타내는 위쪽 화살표"
                  },
                  "pt-BR": {
                    singular: "seta para cima significando classificação ascendente"
                  },
                  "zh-CN": {
                    singular: "向上箭头表示升序排序"
                  }
                }
              }),
              children: (0, _v3.jsx)(_v478.ArrowUp, {
                boxSize: "1.2rem",
                color: _v10,
                _groupHover: {
                  color: "text-primary"
                }
              })
            }) : (0, _v3.jsx)(_v5.Box, {
              height: "auto",
              title: (0, _v30.translate)({
                singular: "down arrow signifying descending sort",
                dictionary: {
                  es: {
                    singular: "flecha hacia abajo que indica el orden descendente"
                  },
                  "de-DE": {
                    singular: "Pfeil nach unten (absteigende Sortierung)"
                  },
                  "fr-FR": {
                    singular: "flèche vers le bas indiquant l'ordre décroissant"
                  },
                  "ja-JP": {
                    singular: "降順ソートを示す下矢印"
                  },
                  "ko-KR": {
                    singular: "내림차순 정렬을 나타내는 아래쪽 화살표"
                  },
                  "pt-BR": {
                    singular: "seta para baixo significando classificação decrescente"
                  },
                  "zh-CN": {
                    singular: "向下箭头表示降序排序"
                  }
                }
              }),
              children: (0, _v3.jsx)(_v477.ArrowDown, {
                boxSize: "1.2rem",
                color: _v10,
                _groupHover: {
                  color: "text-primary"
                }
              })
            })) : _v11 = (0, _v3.jsx)(_v3.Fragment, {});
            let _v12 = (0, _v3.jsx)(_v6.Flex, {
              as: "span",
              alignItems: "flex-end",
              height: "3.5rem",
              justifyContent: _v6 || _v7 ? "flex-start" : "flex-end",
              color: _v5 ? "text-primary" : "text-secondary",
              marginLeft: _v6 ? "2.4rem" : "inherit",
              _groupHover: {
                color: "text-primary"
              },
              children: _v0.displayName ? _v0.displayName : _v179.SOCIAL_DISPLAY_MAP[_v0.name] ?? _v0.name
            });
            return (0, _v3.jsxs)(_v5.Box, {
              as: "th",
              role: "group",
              width: _v9,
              minWidth: _v9,
              maxWidth: _v9,
              lineHeight: "1.4rem",
              fontSize: "0.9rem",
              padding: "1rem 1rem 0.3rem 1rem",
              textAlign: "right",
              borderBottomWidth: "0.063rem",
              borderBottomColor: "stroke",
              position: _v6 || _v7 ? "sticky" : "relative",
              left: _v6 ? 0 : _v7 ? _v9 : "inherit",
              zIndex: _v6 ? 1 : "inherit",
              backgroundColor: "fill-surface",
              _hover: {
                cursor: _v6 || _v7 || _v8 ? "pointer" : "auto"
              },
              _first: {
                borderTopLeftRadius: "1.5rem",
                padding: "1.6rem 1rem 0.8rem 1.8rem",
                "div.sticky-border": {
                  borderWidth: _v6 || _v7 ? "0 0.063rem 0 0" : "inherit",
                  borderColor: _v6 || _v7 ? "stroke" : "inherit"
                }
              },
              _last: {
                borderTopRightRadius: "1.5rem"
              },
              onClick: _v0 => {
                _v5(_v0, _v2);
              },
              children: [(0, _v3.jsx)(_v5.Box, {
                className: "sticky-border",
                zIndex: -1,
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "-0.031rem",
                left: "0"
              }), (0, _v3.jsx)(_v5.Box, {
                className: "top-border",
                position: "absolute",
                zIndex: 1,
                width: "100%",
                height: "0.75rem",
                top: "-0.031rem",
                left: "0"
              }), (0, _v3.jsx)(_v5.Box, {
                className: "right-border",
                position: "absolute",
                zIndex: 1,
                width: "0.5rem",
                height: "100%",
                bottom: "0",
                right: "0"
              }), (0, _v3.jsx)(_v5.Box, {
                float: "right",
                width: "1.5rem",
                top: "1.8rem",
                position: "relative",
                children: _v11
              }), _v480.includes(_v0.name) ? _v12 : (0, _v3.jsx)(_v125.Tooltip, {
                label: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP[_v0.name],
                placement: "top",
                children: (0, _v3.jsx)(_v5.Box, {
                  children: _v12
                })
              })]
            }, `table-head-cell-${_v1}`);
          })
        })
      });
    },
    _v482 = ({
      isExpanding: _v0,
      isExpandable: _v1,
      isExpanded: _v2,
      onClick: _v3,
      nestingLevel: _v4,
      isPayloadUnknownType: _v5,
      selectedSegment: _v6
    }) => {
      if (!_v1 || _v5 && !_v6) {
        let _v0 = (({
          nestingLevel: _v0,
          isPayloadUnknownType: _v1
        }) => {
          let _v2 = 3.5;
          return 0 === _v0 && (_v2 = 1.7, _v1 && (_v2 += 2)), 1 === _v0 && (_v2 = 2.25), 2 === _v0 && (_v2 = 3.8), _v2;
        })({
          nestingLevel: _v4,
          isPayloadUnknownType: _v5
        });
        return (0, _v3.jsx)(_v5.Box, {
          marginLeft: `${_v0}rem`
        });
      }
      return (0, _v3.jsx)(_v6.Flex, {
        cursor: "pointer",
        margin: "0 0.5rem 0 1.5rem",
        alignItems: "center",
        onClick: _v3,
        children: _v0 ? (0, _v3.jsx)(_v6.Flex, {
          width: "1.7rem",
          height: "1.7rem",
          alignItems: "center",
          justifyContent: "center",
          children: (0, _v3.jsx)(_v10.Spinner, {
            size: "sm"
          })
        }) : (0, _v3.jsx)(_v5.Box, {
          width: "1.7rem",
          height: "1.7rem",
          position: "relative",
          _hover: {
            background: "stroke",
            borderRadius: "1.5rem"
          },
          children: (0, _v3.jsx)(_v306.ChevronRightSmall, {
            boxSize: "1.5rem",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "2px",
            left: _v2 ? "0.125rem" : "0.156rem",
            transition: "transform 0.1s ease-in-out",
            transformOrigin: "center",
            transform: _v2 ? "rotate(90deg)" : "inherit",
            color: "text-primary"
          })
        })
      });
    };
  var _v483 = _v0.i(0);
  let _v484 = _v0 => {
      let _v1 = _v0.created_time?.split("T")?.[0],
        _v2 = _v1 ? (0, _v470.getDateObjFromFormat)(_v1, "YYYY-MM-DD") : "",
        _v3 = _v0.id.replace("/videos/", ""),
        _v4 = `/manage/videos/${_v3}/analytics`,
        _v5 = (_v0, _v1) => {
          let _v2 = {
            report_name: (0, _v32.getReportPageNameFromUrl)(window.location.pathname),
            target: _v1,
            video_id: _v0,
            path: window.location.pathname,
            location: window.location.pathname,
            product: _v32.ANALYTICS
          };
          _v29.BigPictureClient.sendEvent(new _v29.Event(_v32.TABLE_VIDEO_LINK_EVENT_NAME, 1, _v2)).catch(_v0 => console.log(_v0));
        };
      return (0, _v3.jsxs)(_v6.Flex, {
        title: _v0.name,
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        children: [(0, _v3.jsx)("a", {
          onClick: _v0 => _v5(_v3, _v4),
          href: _v4,
          target: "_blank",
          rel: "noopener noreferrer",
          children: (0, _v3.jsx)(_v483.Image, {
            src: _v0.thumbnail,
            alt: "video thumbnail",
            borderRadius: "0.25rem",
            height: "3rem",
            maxWidth: "5rem"
          })
        }), (0, _v3.jsxs)(_v6.Flex, {
          paddingLeft: "1rem",
          paddingRight: "1rem",
          flexDirection: "column",
          alignSelf: "center",
          alignItems: "stretch",
          width: "calc(100% - 5rem)",
          overflow: "hidden",
          children: [(0, _v3.jsx)(_v5.Box, {
            as: "a",
            href: _v4,
            onClick: () => _v5(_v3, _v4),
            target: "_blank",
            rel: "noopener noreferrer",
            color: "text-primary",
            display: "block",
            fontSize: "0.875rem",
            textDecoration: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "100%",
            lineHeight: "1.125rem",
            _hover: {
              color: "vimeoBlue.400"
            },
            children: _v0.name
          }), (0, _v3.jsx)(_v6.Flex, {
            as: "span",
            color: "text-secondary",
            fontSize: "0.75rem",
            width: "100%",
            lineHeight: "1.125rem",
            children: _v2 && (0, _v470.getFormattedStringFromDateObj)(_v2, "MMM DD, YYYY")
          })]
        })]
      });
    },
    _v485 = _v0 => {
      let _v1 = (0, _v470.getDateObjFromFormat)(_v0?.startDate?.split("T")?.[0], "YYYY-MM-DD"),
        _v2 = (0, _v470.getDateObjFromFormat)(_v0?.endDate?.split("T")?.[0], "YYYY-MM-DD"),
        _v3 = _v2.getTime() - _v1.getTime();
      return (0, _v3.jsx)("span", {
        children: _v3 < 0 ? (0, _v470.getFormattedStringFromDateObj)(_v1, "MMM DD, YYYY") : _v3 > 0 ? (0, _v470.getFormattedStringFromDateObj)(_v1, "MMM YYYY") : `${(0, _v470.getFormattedStringFromDateObj)(_v1, "MMM DD, YYYY")} - ${(0, _v470.getFormattedStringFromDateObj)(_v2, "MMM DD, YYYY")}`
      });
    },
    _v486 = _v0 => {
      let _v1 = (0, _v470.getDateObjFromFormat)(_v0.name, "YYYY-MM-DD");
      return (0, _v3.jsx)("span", {
        children: (0, _v470.getFormattedStringFromDateObj)(_v1, "MMM YYYY")
      });
    },
    _v487 = (_v0, _v1, _v2) => {
      if (_v1 > 1) return _v0.cityName;
      if (_v2 === _v299.TablePayloadItemType.SOURCE_URL && _v0.type === _v299.TablePayloadItemType.SOURCE_URL) return _v0.name;
      if (_v2 === _v299.TablePayloadItemType.STREAMING_TYPE && _v0.type === _v299.TablePayloadItemType.STREAMING_TYPE) return "live" === _v0.name ? _v179.STREAMING_TYPES_DISPLAY_MAP.Live : _v179.STREAMING_TYPES_DISPLAY_MAP.Non_live;
      let _v3 = _v0.browserName || _v0.osName || _v0.path || _v0.regionName,
        _v4 = _v488(_v0.type);
      return _v3 && "unknown" === _v3.toLowerCase() ? (0, _v30.translate)({
        singular: "Unknown",
        dictionary: {
          es: {
            singular: "Desconocido"
          },
          "de-DE": {
            singular: "Unbekannt"
          },
          "fr-FR": {
            singular: "Inconnu"
          },
          "ja-JP": {
            singular: "不明"
          },
          "ko-KR": {
            singular: "알 수 없음"
          },
          "pt-BR": {
            singular: "Desconhecido"
          },
          "zh-CN": {
            singular: "未知"
          }
        }
      }) : _v3 ?? (_v4 ? _v4(_v0) : _v0.name);
    },
    _v488 = _v0 => {
      switch (_v0) {
        case _v299.TablePayloadItemType.VIDEO:
          return _v484;
        case _v299.TablePayloadItemType.DATE:
          return _v485;
        case _v299.TablePayloadItemType.BANDWIDTH:
          return _v486;
        case _v299.TablePayloadItemType.BANDWIDTH_VIDEO:
          return _v484;
        default:
          return null;
      }
    },
    _v489 = _v0 => {
      let {
          totalSelectedItems: _v1,
          isSelected: _v2,
          isSelectionDisabled: _v3,
          applyColor: _v4,
          onClick: _v5,
          item: _v6,
          keyName: _v7,
          isExpandable: _v8,
          onExpand: _v9,
          nestingLevel: _v10,
          selectedSegment: _v11
        } = _v0,
        [_v12, _v13] = (0, _v4.useState)(!1),
        [_v14, _v15] = (0, _v4.useState)(!1);
      (0, _v4.useEffect)(() => {
        _v15(_v6.expandedPayload?.length === 0 || !(0, _v319.default)(_v6.expandedPayload));
      }, [_v6.expandedPayload]), (0, _v4.useEffect)(() => {
        _v13(!1);
      }, [_v6.expandedPayload]);
      let _v16 = _v488(_v6.type),
        _v17 = _v473(_v11, _v6),
        _v18 = -1 === [_v299.TablePayloadItemType.BANDWIDTH, _v299.TablePayloadItemType.DATE].indexOf(_v6.type);
      return (0, _v3.jsxs)(_v6.Flex, {
        alignSelf: "center",
        justifyContent: "flex-start",
        width: "100%",
        paddingLeft: "0.5rem",
        children: [_v18 && 0 === _v10 && (0, _v3.jsx)(_v6.Flex, {
          width: "auto",
          alignSelf: "center",
          alignItems: "center",
          cursor: _v2 || _v1 < 10 ? "pointer" : "not-allowed",
          onClick: _v5,
          children: (0, _v3.jsx)(_v311.Checkbox, {
            width: "100%",
            isChecked: _v2,
            _checked: {
              "& .chakra-checkbox__control": {
                background: _v4,
                borderColor: _v4
              }
            },
            isDisabled: !_v2 && _v3
          })
        }, `checkbox-${_v6.id}`), (0, _v3.jsxs)(_v6.Flex, {
          marginLeft: _v10 > 0 ? "3rem" : "0rem",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "calc(100% - 3rem)",
          children: [(0, _v3.jsx)(_v482, {
            isExpanded: _v14,
            onClick: () => {
              var _v0;
              let _v1, _v2;
              _v0 = (0, _v319.default)(_v6.expandedPayload), _v1 = _v6.regionId ? _v6.regionId : _v6.id, _v2 = {
                product: _v32.ANALYTICS,
                location: window.location.pathname,
                path: window.location.pathname,
                nesting_level: _v10,
                row_id: _v1,
                expansion_type: _v17,
                is_expand: _v0
              }, _v29.BigPictureClient.sendEvent(new _v29.Event(_v32.TABLE_ROW_EXPAND_EVENT_NAME, 1, _v2)), _v9(_v6, _v10), _v14 || _v13(!0);
            },
            isExpanding: _v12,
            isExpandable: _v8,
            nestingLevel: _v10,
            selectedSegment: _v11,
            isPayloadUnknownType: "unknown" === _v6.name.toLowerCase() || _v6.regionId && "unknown" === _v6.regionName.toLowerCase()
          }, `expander-${_v6.id}`), 0 === _v10 ? (0, _v3.jsx)(_v6.Flex, {
            lineHeight: "1.6rem",
            width: "calc(100% - 5rem)",
            title: _v6[_v7],
            children: _v16 ? _v16(_v6) : (0, _v3.jsx)(_v5.Box, {
              as: "span",
              textOverflow: "ellipsis",
              display: "block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: "100%",
              children: _v6[_v7] && "unknown" === _v6[_v7].toLowerCase() ? (0, _v30.translate)({
                singular: "Unknown",
                dictionary: {
                  es: {
                    singular: "Desconocido"
                  },
                  "de-DE": {
                    singular: "Unbekannt"
                  },
                  "fr-FR": {
                    singular: "Inconnu"
                  },
                  "ja-JP": {
                    singular: "不明"
                  },
                  "ko-KR": {
                    singular: "알 수 없음"
                  },
                  "pt-BR": {
                    singular: "Desconhecido"
                  },
                  "zh-CN": {
                    singular: "未知"
                  }
                }
              }) : _v6[_v7]
            })
          }, `text-${_v6.id}`) : (0, _v3.jsx)(_v5.Box, {
            as: "span",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            display: "block",
            title: _v487(_v6, _v10, _v11),
            children: _v487(_v6, _v10, _v11)
          }, `text-${_v6.id}`)]
        })]
      });
    },
    _v490 = () => {
      let _v0 = (0, _v152.useColorModeValue)("whiteAlpha.600", "lightBlueAlpha.50"),
        _v1 = (0, _v152.useColorModeValue)("surface", "lightBlueAlpha.100"),
        _v2 = {
          name: "11em"
        },
        _v3 = [{
          name: "name",
          apiName: "name",
          isVisible: !0,
          isSortable: !0
        }, {
          name: "name",
          apiName: "name",
          isVisible: !0,
          isSortable: !0
        }, {
          name: "name",
          apiName: "name",
          isVisible: !0,
          isSortable: !0
        }, {
          name: "name",
          apiName: "name",
          isVisible: !0,
          isSortable: !0
        }, {
          name: "name",
          apiName: "name",
          isVisible: !0,
          isSortable: !0
        }, {
          name: "name",
          apiName: "name",
          isVisible: !0,
          isSortable: !0
        }, {
          name: "name",
          apiName: "name",
          isVisible: !0,
          isSortable: !0
        }, {
          name: "name",
          apiName: "name",
          isVisible: !0,
          isSortable: !0
        }, {
          name: "name",
          apiName: "name",
          isVisible: !0,
          isSortable: !0
        }, {
          name: "name",
          apiName: "name",
          isVisible: !0,
          isSortable: !0
        }, {
          name: "name",
          apiName: "name",
          isVisible: !0,
          isSortable: !0
        }];
      return (0, _v3.jsxs)(_v5.Box, {
        as: "table",
        sx: {
          borderSpacing: 0,
          paddingRight: "2em",
          tableLayout: "fixed",
          borderRadius: "6px",
          borderCollapse: "separate",
          "tbody td, thead th, tfoot td": {
            lineHeight: "1.4em",
            fontSize: "0.9em",
            padding: "1em",
            textAlign: "right",
            borderBottom: "inherit",
            "&:first-of-type": {
              borderLeft: "inherit"
            },
            "&:last-of-type": {
              borderRight: "inherit"
            }
          },
          "tbody td, tfoot td": {
            span: {
              paddingRight: "1.5em"
            },
            ".s-name, .s-platform": {
              span: {
                paddingRight: "auto"
              }
            }
          },
          ".s-column": {
            span: {
              justifyContent: "flex-start",
              paddingLeft: "0.7em"
            }
          }
        },
        children: [(0, _v3.jsx)(_v481, {
          fields: _v3,
          sortState: {
            columnName: "id",
            sortValue: _v179.SORT_VALUE.SORTABLE
          },
          tableLayoutData: _v2,
          isDatePayloadItemVisible: !1,
          headerOnClickHandler: (_v0, _v1) => 0
        }), (0, _v3.jsx)(_v5.Box, {
          as: "tbody",
          background: _v0,
          sx: {
            color: "text-primary",
            overflow: "auto",
            "tr:last-of-type": {
              "td:first-of-type": {
                borderBottomLeftRadius: "6px"
              },
              "td:last-of-type": {
                borderBottomRightRadius: "6px"
              }
            }
          },
          children: Array.from([,,,,]).map((_v0, _v1) => (0, _v3.jsx)(_v5.Box, {
            as: "tr",
            sx: {
              display: "table",
              tableLayout: "fixed",
              "&:hover": {
                backgroundColor: _v1,
                td: {
                  "&.s-name": {
                    backgroundColor: _v1
                  }
                }
              }
            },
            children: _v3.map((_v0, _v1) => {
              let _v2 = _v2[_v0.name];
              return (0, _v3.jsx)(_v5.Box, {
                as: "td",
                width: _v2,
                sx: {
                  width: _v2,
                  minWidth: _v2,
                  maxWidth: _v2,
                  "&.s-name": {
                    position: "sticky",
                    zIndex: 1,
                    left: 0,
                    backgroundColor: _v0,
                    label: {
                      fontWeight: "normal"
                    }
                  },
                  "&.s-platform": {
                    position: "sticky",
                    left: _v2
                  }
                },
                children: (0, _v3.jsx)(_v5.Box, {
                  background: "slate.100",
                  opacity: "0.7",
                  width: "5em",
                  height: "0.5em",
                  margin: "1em"
                })
              }, _v1);
            })
          }, _v1))
        })]
      });
    };
  var _v491 = _v0.i(0);
  let _v492 = (_v0, _v1, _v2, _v3) => {
      var _v4;
      let _v5 = (_v4 = _v2.type, _v3 > 0 && _v4 === _v299.TablePayloadItemType.REGION ? (_v0, _v1) => _v0.id === _v1.id && _v0.regionId === _v1.regionId : (_v0, _v1) => _v0.id === _v1.id);
      return _v0.map(_v0 => {
        if (_v3 > 0) {
          let _v0 = _v0.expandedPayload?.map(_v0 => _v5(_v0, _v2) ? {
            ..._v0,
            expandedPayload: _v1
          } : {
            ..._v0
          });
          return {
            ..._v0,
            expandedPayload: _v0
          };
        }
        return _v5(_v0, _v2) ? {
          ..._v0,
          expandedPayload: _v1
        } : {
          ..._v0
        };
      });
    },
    _v493 = _v0 => {
      let {
          queryParam: _v1
        } = (0, _v338.useAnalyticsFreshness)(),
        _v2 = (0, _v4.useContext)(_v28.ViewerContext),
        {
          state: _v3,
          fields: _v4,
          payload: _v5,
          reportType: _v6,
          reportFilterKeys: _v7,
          totalRowStats: _v8,
          primaryDimension: _v9,
          tableLayoutData: _v10,
          selectedDataItems: _v11,
          applySort: _v12,
          dispatch: _v13,
          loadMoreData: _v14,
          isMoreDataLoading: _v15,
          isMoreDataAvailable: _v16,
          isTableError: _v17,
          isTableLoading: _v18,
          urlToDownloadCSV: _v19
        } = _v0,
        _v20 = _v4.filter(_v0 => _v0.isVisible).map(_v0 => _v0.name),
        _v21 = (0, _v4.useMemo)(() => _v3.filters[_v3.reportGroup], [_v3.filters, _v3.reportGroup]),
        [_v22, _v23] = (0, _v4.useState)(!1),
        [_v24, _v25] = (0, _v4.useState)([..._v179.MULTI_LINE_GRAPH_COLORS]),
        [_v26, _v27] = (0, _v4.useState)({
          columnName: "plays" === _v9 ? "views" : _v9,
          sortValue: _v179.SORT_VALUE.DECENDING_ORDER
        }),
        [_v28, _v29] = (0, _v4.useState)(null),
        [_v30, _v31] = (0, _v4.useState)(0),
        [_v32, _v33] = (0, _v4.useState)(null),
        [_v34, _v35] = (0, _v4.useState)([..._v5]),
        [_v36, {
          data: _v37,
          loading: _v38,
          error: _v39
        }] = (0, _v193.useGetUserAnalyticsLazy)(),
        _v40 = !!_v37?.data?.[0]?.metadata?.connections?.video,
        {
          data: _v41,
          isLoading: _v42
        } = ((_v0, _v1, _v2, _v3) => {
          let _v4 = (0, _v4.useMemo)(() => !_v3 || _v2 ? null : _v1?.map(_v0 => _v0?.metadata?.connections?.video?.uri), [_v1, _v3, _v2]),
            {
              data: _v5,
              isLoading: _v6
            } = (0, _v491.useGetVideos)(() => _v3 && _v4?.length && !_v2 ? {
              select: ["pictures.sizes", "uri"],
              query: {
                uris: _v4?.join(","),
                userId: _v0
              }
            } : null, {
              revalidateOnFocus: !1,
              errorRetryInterval: 0,
              errorRetryCount: 1
            }),
            _v7 = (0, _v4.useMemo)(() => _v5?.data.reduce((_v0, _v1) => {
              let _v2 = _v1.pictures?.sizes.slice(0, 3);
              return {
                ..._v0,
                [_v1.uri]: {
                  link: _v2?.pop()?.link ?? "https://i.vimeocdn.com/video/default_227x128?v=1&r=pad"
                }
              };
            }, {}), [_v5]);
          return {
            data: (0, _v4.useMemo)(() => !_v7 && _v3 ? null : _v1?.map(_v0 => ({
              ..._v0,
              thumbnail: _v0?.metadata?.connections?.video?.uri ? _v7?.[_v0?.metadata?.connections?.video?.uri]?.link : "https://i.vimeocdn.com/video/default_227x128?v=1&r=pad"
            })), [_v1, _v3, _v7]),
            isLoading: _v6
          };
        })(_v3.userInUse.id, _v37?.data, _v38, _v40),
        _v43 = (0, _v47.useToast)();
      (0, _v4.useEffect)(() => {
        _v35([..._v5]);
      }, [_v5]), (0, _v4.useEffect)(() => {
        _v29(null), _v33(null);
      }, [_v21]), (0, _v4.useEffect)(() => {
        let _v0 = _v11.map(_v0 => _v0.color);
        _v25([..._v179.MULTI_LINE_GRAPH_COLORS.filter(_v0 => -1 === _v0.findIndex(_v0 => _v0 === _v0))]);
      }, [_v11]), (0, _v4.useEffect)(() => {
        _v27({
          columnName: "plays" === _v9 ? "views" : _v9,
          sortValue: _v179.SORT_VALUE.DECENDING_ORDER
        });
      }, [_v9, _v28]), (0, _v4.useEffect)(() => {
        _v39 && (_v23(() => !0), _v43({
          title: (0, _v30.translate)({
            singular: "There was an unexpected server error. Please try again.",
            dictionary: {
              es: {
                singular: "Se produjo un error inesperado. Vuelve a intentarlo."
              },
              "de-DE": {
                singular: "Ein unerwarteter Serverfehler ist aufgetreten. Bitte versuche es erneut."
              },
              "fr-FR": {
                singular: "Une erreur de serveur inattendue s'est produite. Veuillez réessayer."
              },
              "ja-JP": {
                singular: "予期しないサーバーエラーが発生しました。再度お試しください。"
              },
              "ko-KR": {
                singular: "예상하지 못한 서버 오류가 발생했습니다. 다시 시도해주세요."
              },
              "pt-BR": {
                singular: "Ocorreu um erro inesperado com o servidor. Por favor, tente novamente."
              },
              "zh-CN": {
                singular: "服务器出现意外错误。请重试。"
              }
            }
          }),
          status: "error"
        }));
      }, [_v39, _v37, _v43]), (0, _v4.useEffect)(() => {
        if (!_v32 || _v38 || _v42) return;
        let _v0 = (_v0 => {
          switch (_v0) {
            case _v299.Reports.VIDEO:
              return _v436;
            case _v299.Reports.DATE:
              return _v433;
            case _v299.Reports.DEVICE:
              return _v434;
            case _v299.Reports.REGION:
              return _v435;
            case _v299.Reports.SOURCE:
              return _v438;
            case _v299.Reports.STREAMING_TYPE:
              return _v437;
          }
          throw Error(`[VA] Invalid Report Types to getDataProcessor for ${_v0}`);
        })((_v0 => {
          switch (_v0) {
            case _v299.TablePayloadItemType.DATE:
              return _v299.Reports.DATE;
            case _v299.TablePayloadItemType.DEVICE:
              return _v299.Reports.DEVICE;
            case _v299.TablePayloadItemType.SOURCE_URL:
              return _v299.Reports.SOURCE;
            case _v299.TablePayloadItemType.VIDEO:
              return _v299.Reports.VIDEO;
            case _v299.TablePayloadItemType.REGION:
              return _v299.Reports.REGION;
            case _v299.TablePayloadItemType.BANDWIDTH:
              return _v299.Reports.BANDWIDTH_DATE;
            case _v299.TablePayloadItemType.STREAMING_TYPE:
              return _v299.Reports.STREAMING_TYPE;
            case _v299.TablePayloadItemType.BANDWIDTH_VIDEO:
              return _v299.Reports.BANDWIDTH_VIDEO;
            case _v299.TablePayloadItemType.AUDIO_TRACK:
            case _v299.TablePayloadItemType.TEXT_TRACK:
              return _v299.Reports.VIDEO;
          }
        })(_v473(_v28, _v32)))({
          data: _v32.expandedPayload ? [] : _v41
        }).data || [];
        _v35(_v0 => _v492(_v0, _v0, _v32, _v30));
      }, [_v42, _v38, _v30, _v32, _v37, _v41, _v28]);
      let _v44 = (0, _v4.useMemo)(() => !!_v34.flatMap(_v0 => {
          let _v1 = _v0.expandedPayload ? [..._v0.expandedPayload] : [];
          return [_v0, ..._v1];
        }).find(_v0 => _v0.type === _v299.TablePayloadItemType.DATE || _v0.type === _v299.TablePayloadItemType.BANDWIDTH), [_v34]),
        _v45 = _v0 => {
          var _v1;
          let _v2,
            _v3 = _v11.findIndex(_v0 => _v0.id === _v0.id) > -1;
          if (!_v0.id || 1 === _v11.length && _v3 || _v11.length >= 10 && !_v3) return;
          let _v4 = [];
          if (_v3) _v4 = _v11.filter(_v0 => _v0.id !== _v0.id || (_v24.unshift(_v0.color), !1));else if (_v11.length < 10) {
            let _v0 = _v24.shift() ?? "";
            _v0.id === _v179.TOTAL_ROW_ID && (_v0 = (0, _v367.getTotalRowColor)()), _v4 = [..._v11, {
              name: _v0.name,
              id: _v0.id,
              prepend: _v0.prepend ?? "",
              color: _v0
            }];
          }
          _v13({
            type: _v299.REPORT_ACTION_TYPE.SET_GRAPH_ITEMS,
            payload: _v4
          }), _v25([..._v24]), _v1 = _v0.id === _v179.TOTAL_ROW_ID ? _v179.TOTAL_ROW_ID : null, _v2 = {
            path: window.location.pathname,
            location: window.location.pathname,
            report_name: (0, _v32.getReportPageNameFromUrl)(window.location.pathname),
            action: _v3 ? "uncheck" : "check",
            product: _v32.ANALYTICS,
            row_id: _v1
          }, _v29.BigPictureClient.sendEvent(new _v29.Event(_v32.TABLE_ROW_EVENT_NAME, 2, _v2)).catch(_v0 => console.log(_v0));
        },
        _v46 = (_v0, _v1) => {
          let _v2,
            _v3 = _v4.find(_v0 => _v0.apiName === _v1);
          _v3 && (_v3.isSortable || "name" === _v3.name && _v44) && (_v2 = _v1 === _v26.columnName ? _v26.sortValue === _v179.SORT_VALUE.ASCENDING_ORDER ? _v179.SORT_VALUE.DECENDING_ORDER : _v179.SORT_VALUE.ASCENDING_ORDER : _v179.SORT_VALUE.DECENDING_ORDER, _v27({
            columnName: _v1,
            sortValue: _v2
          }), _v12(_v3.name, _v2, _v34));
        },
        _v47 = (_v0, _v1) => {
          if (_v0.expandedPayload) _v35(_v0 => _v492(_v0, void 0, _v0, _v1));else {
            let _v0;
            _v23(!1);
            let _v1 = (_v0 = _v473(_v28, _v0), ((_v0, _v1, _v2, _v3, _v4) => {
              let {
                  startDate: _v5,
                  endDate: _v6,
                  filterLists: _v7
                } = _v1,
                _v8 = _v5.toISO(),
                _v9 = _v6.toISO(),
                _v10 = (0, _v469.default)(_v2, "fields"),
                _v11 = {
                  where: {
                    userId: _v0
                  },
                  select: _v2?.fields?.split(","),
                  query: {
                    from: _v8,
                    to: _v9,
                    page: 1,
                    perPage: 100,
                    dimension: "total",
                    direction: "desc",
                    ..._v10
                  }
                };
              return _v3.forEach(_v0 => {
                var _v1, _v2;
                _v7[_v0] && _v7[_v0].length > 0 && (_v1 = _v0, _v2 = _v4, (_v1 !== _v299.Filters.CONTENT || _v2 !== _v299.TablePayloadItemType.VIDEO) && (_v1 !== _v299.Filters.SOURCE_URL || _v2 !== _v299.TablePayloadItemType.SOURCE_URL) && (_v1 !== _v299.Filters.DEVICE || _v2 !== _v299.TablePayloadItemType.DEVICE) && (_v1 !== _v299.Filters.REGION || _v2 !== _v299.TablePayloadItemType.REGION) && 1) && (_v11.query[`filter_${_v179.FILTER_LIST_STRING_MAP[_v0]}`] = _v7[_v0] ? _v7[_v0].map(_v0 => _v0.id).join(",") : "");
              }), _v11;
            })(_v3.userInUse.id, _v3.filters[_v3.reportGroup], ((_v0, _v1, _v2, _v3, _v4) => {
              let _v5 = null,
                _v6 = null,
                _v7 = null;
              _v4 !== _v1.type && (_v5 = (_v0 => {
                switch (_v0) {
                  case _v299.TablePayloadItemType.DATE:
                    return "total";
                  case _v299.TablePayloadItemType.VIDEO:
                    return "video";
                  case _v299.TablePayloadItemType.SOURCE_URL:
                    return "embed_domain";
                  case _v299.TablePayloadItemType.DEVICE:
                    return "device_type";
                  case _v299.TablePayloadItemType.REGION:
                    return "country";
                  case _v299.TablePayloadItemType.STREAMING_TYPE:
                    return "streaming_type";
                  default:
                    return "total";
                }
              })(_v4)), _v4 === _v299.TablePayloadItemType.DATE && (_v6 = (0, _v367.getGroupByTimeLiteral)(_v0.filters[_v0.reportGroup].startDate, _v0.filters[_v0.reportGroup].endDate)), _v4 !== _v299.TablePayloadItemType.DATE && (_v7 = (0, _v367.getSortValueForApi)(_v3.columnName, _v0.primaryDimensions.vimeo));
              let _v8 = {
                page: 1,
                perPage: 50,
                fields: [(_v0 => {
                  let _v1 = [];
                  switch (_v0) {
                    case _v299.TablePayloadItemType.DATE:
                      _v1 = (0, _v441.getTableFieldsByReportType)(_v299.Reports.DATE);
                      break;
                    case _v299.TablePayloadItemType.VIDEO:
                      _v1 = (0, _v441.getTableFieldsByReportType)(_v299.Reports.VIDEO);
                      break;
                    case _v299.TablePayloadItemType.SOURCE_URL:
                      _v1 = (0, _v441.getTableFieldsByReportType)(_v299.Reports.SOURCE);
                      break;
                    case _v299.TablePayloadItemType.DEVICE:
                      _v1 = (0, _v441.getTableFieldsByReportType)(_v299.Reports.DEVICE);
                      break;
                    case _v299.TablePayloadItemType.REGION:
                      _v1 = (0, _v441.getTableFieldsByReportType)(_v299.Reports.REGION);
                      break;
                    case _v299.TablePayloadItemType.STREAMING_TYPE:
                      _v1 = (0, _v441.getTableFieldsByReportType)(_v299.Reports.STREAMING_TYPE);
                  }
                  return _v1?.map(_v0 => _v0.apiName).join(",");
                })(_v4)].filter(_v0 => _v0).join(","),
                ...(_v6 && {
                  timeInterval: _v6
                }),
                ...(_v7 && {
                  sort: _v7
                })
              };
              switch (_v1.type) {
                case _v299.TablePayloadItemType.VIDEO:
                  return {
                    ..._v8,
                    dimension: _v5 ?? "video",
                    filter_content: _v1.id ?? ""
                  };
                case _v299.TablePayloadItemType.SOURCE_URL:
                  return {
                    ..._v8,
                    dimension: _v5 ?? "embed_domain_path",
                    filter_embed_domains: _v1.id ?? ""
                  };
                case _v299.TablePayloadItemType.DEVICE:
                  return {
                    ..._v8,
                    dimension: _v5 ?? ("desktop" === _v1.id ? "browser" : "os"),
                    filter_device_types: _v1.id ?? "",
                    fields: _v8.fields + ",osName,browserName"
                  };
                case _v299.TablePayloadItemType.REGION:
                  if (_v2 > 0) return {
                    ..._v8,
                    dimension: _v5 ?? "city",
                    filter_regions: _v1?.regionId ?? "",
                    fields: `${_v8.fields},cityName`
                  };
                  return {
                    ..._v8,
                    dimension: _v5 ?? "region",
                    filter_countries: _v1.id ?? "",
                    fields: `${_v8.fields},regionName,regionCode`
                  };
                case _v299.TablePayloadItemType.DATE:
                  let _v0 = (0, _v470.getDateObjFromFormat)(_v1?.id?.split("T")?.[0], "YYYY-MM-DD");
                  return _v0.setTime(_v0.getTime() + 0), {
                    ..._v8,
                    dimension: _v5 ?? "total",
                    from: _v1.id ?? "",
                    to: (0, _v470.getFormattedStringFromDateObj)(_v0, "YYYY-MM-DD")
                  };
                case _v299.TablePayloadItemType.STREAMING_TYPE:
                  return {
                    ..._v8,
                    dimension: _v5 ?? "streaming_type",
                    filter_streaming_types: _v1.id ?? ""
                  };
              }
              return {};
            })(_v3, _v0, _v1, _v26, _v0), _v7, _v0.type));
            _v33(_v0), _v31(_v1), _v36({
              ..._v1,
              query: {
                ..._v1.query,
                ..._v1
              }
            });
          }
        },
        _v48 = (0, _v152.useColorModeValue)("whiteAlpha.600", "lightBlueAlpha.50"),
        _v49 = (0, _v152.useColorModeValue)("surface", "#181E22"),
        _v50 = (0, _v152.useColorModeValue)("#FAFAFB", "#141A1E");
      if (!_v34.length || _v18 || _v17) return (0, _v3.jsx)(_v5.Box, {
        margin: "2rem",
        children: _v18 ? (0, _v3.jsx)(_v5.Box, {
          overflowX: "auto",
          borderRadius: "1.5rem",
          children: (0, _v3.jsx)(_v490, {})
        }) : (0, _v3.jsx)(_v5.Box, {
          overflowX: "hidden",
          borderRadius: "1.5rem",
          children: (0, _v3.jsxs)(_v5.Box, {
            as: "table",
            children: [(0, _v3.jsx)(_v481, {
              isDatePayloadItemVisible: _v44,
              fields: _v4,
              sortState: _v26,
              tableLayoutData: _v10,
              headerOnClickHandler: _v46,
              isTableError: _v17,
              isEmptyData: !_v34.length
            }), (0, _v3.jsx)(_v476, {
              selectedDataItems: _v11,
              reportType: _v6,
              onCheckHandler: _v45,
              totalRowStats: _v8,
              fields: _v4,
              tableLayoutData: _v10,
              isUserWithLimit: _v3.userInUse.isUserWithVideoLimit,
              isTableError: _v17,
              isEmptyData: !_v34.length
            }), (0, _v3.jsx)(_v5.Box, {
              width: "100%",
              background: _v48,
              borderRadius: "0 0 1.5rem 1.5rem",
              children: (0, _v3.jsx)(_v343.Center, {
                minHeight: "15rem",
                width: "80vw",
                children: _v17 ? (0, _v3.jsx)(_v398.GeneralErrorMessage, {}) : (0, _v3.jsx)(_v46.Text, {
                  fontSize: "body-sm",
                  color: "text-tertiary",
                  variant: "body-xl",
                  children: _v190.T_NO_DATA
                })
              })
            })]
          })
        })
      });
      let _v51 = (_v0, _v1 = 0) => _v0.filter(_v0 => !!_v0.id).map((_v0, _v1) => {
        let _v2 = _v11.find(_v0 => _v0.id === _v0.id),
          _v3 = _v11.length >= 10;
        return (0, _v3.jsxs)(_v4.default.Fragment, {
          children: [(0, _v3.jsx)(_v5.Box, {
            width: "100%",
            role: "group",
            as: "tr",
            display: "table",
            _last: {
              "td:first-of-type": {
                borderBottomLeftRadius: "1.5rem"
              },
              "td:last-of-type": {
                borderBottomRightRadius: "1.5rem"
              }
            },
            children: _v20.map((_v0, _v1) => {
              let _v2 = _v10[_v0],
                _v3 = "name" === _v0,
                _v4 = "platform" === _v0;
              return (0, _v3.jsxs)(_v5.Box, {
                as: "td",
                width: _v2,
                minWidth: _v2,
                maxWidth: _v2,
                position: _v3 || _v4 ? "sticky" : "relative",
                zIndex: _v3 ? 1 : "inherit",
                left: _v3 ? 0 : _v4 ? _v2 : "inherit",
                paddingLeft: _v3 ? "1.5rem" : "inherit",
                lineHeight: "1.3rem",
                fontSize: "0.9rem",
                padding: "0.93rem",
                textAlign: _v3 || _v4 ? "left" : "right",
                background: _v48,
                _groupHover: {
                  backgroundColor: _v49
                },
                _first: {
                  backgroundColor: _v50
                },
                sx: {
                  "&:first-of-type": {
                    "div.sticky-border": {
                      borderRightColor: "stroke",
                      borderRightWidth: "0.063rem"
                    }
                  },
                  "&:last-of-type": {
                    zIndex: 10
                  }
                },
                children: [(0, _v3.jsx)(_v5.Box, {
                  className: "sticky-border",
                  zIndex: -10,
                  position: "absolute",
                  height: "calc(100% + 0.031rem)",
                  width: "100%",
                  top: "0",
                  left: "0"
                }), "name" === _v0 ? (0, _v3.jsx)(_v489, {
                  totalSelectedItems: _v11.length,
                  isSelected: !!_v2,
                  isSelectionDisabled: _v3,
                  keyName: _v0,
                  item: _v0,
                  applyColor: _v2 ? _v2?.color : "",
                  onClick: _v0 => {
                    _v0.preventDefault(), _v45(_v0);
                  },
                  isExpandable: ((_v0, _v1 = 0, _v2) => {
                    if ([_v299.TablePayloadItemType.BANDWIDTH, _v299.TablePayloadItemType.BANDWIDTH_VIDEO].indexOf(_v0.type) > -1) return !1;
                    if (_v299.TablePayloadItemType.SOURCE_URL === _v0.type && _v1 < 1) return !0;
                    if ((0, _v319.default)(_v2)) {
                      if (_v0.type === _v299.TablePayloadItemType.DATE) return !1;
                    } else {
                      if (_v473(_v2, _v0) !== _v0.type) {
                        if (_v1 > 0) return !1;
                        if (_v0.type === _v299.TablePayloadItemType.VIDEO) return !0;
                      }
                      if (_v1 > 0 && _v473(_v2, _v0) === _v0.type && _v0.type === _v299.TablePayloadItemType.REGION) return !1;
                    }
                    return 0 === _v1 && _v299.TablePayloadItemType.VIDEO !== _v0.type || 1 === _v1 && _v299.TablePayloadItemType.REGION === _v0.type;
                  })(_v0, _v1, _v28),
                  onExpand: _v47,
                  nestingLevel: _v1,
                  selectedSegment: _v28
                }) : (0, _v3.jsx)(_v5.Box, {
                  as: "span",
                  paddingRight: _v3 || _v4 ? "auto" : "1.5rem",
                  children: ((_v0, _v1) => {
                    let _v2 = _v0[_v1];
                    if ((0 > Number(_v2) || void 0 === _v2 || isNaN(_v2)) && "platform" !== _v1) return "-";
                    let _v3 = Number(_v0[_v1]);
                    if (!isNaN(_v3)) {
                      if (_v1 === _v179.TABLE_FIELD_SOCIAL_TOTAL_TIME_WATCHED || _v1 === _v179.TABLE_FIELD_SOCIAL_MEAN_WATCH_TIME) return (0, _v471.formatDuration)(0 * _v2);
                      _v2 = _v3.toLocaleString(), Number.isInteger(_v3) || (_v2 = Number(_v3.toFixed(2)).toLocaleString());
                    }
                    return _v1 === _v179.TABLE_FIELD_SOCIAL_MEAN_PERCENT_WATCHED && (_v2 += "%"), _v2;
                  })(_v0, _v0)
                })]
              }, `td-${_v1}`);
            })
          }, `tr-${_v0.id}-${_v1}`), _v0.expandedPayload && _v0.expandedPayload.length > 0 && _v51(_v0.expandedPayload, _v1 + 1)]
        }, `tr-fragment-${_v0.id}-${_v1}`);
      });
      return (0, _v3.jsxs)(_v5.Box, {
        margin: "2rem",
        children: [[_v299.Reports.DATE, _v299.Reports.VIDEO, _v299.Reports.DEVICE, _v299.Reports.SOURCE, _v299.Reports.DEVICE, _v299.Reports.REGION].includes(_v6) && (0, _v3.jsx)(_v467, {
          selectedSegment: _v28,
          reportType: _v6,
          urlToDownloadCSV: _v19,
          setSelectedSegment: _v0 => {
            _v35(_v34.map(_v0 => ({
              ..._v0,
              expandedPayload: void 0
            }))), _v29(_v0), _v33(null), (0, _v32.sendTableSegmentClickEvent)(_v0, _v2?.teamUser);
          },
          userInUse: _v3.userInUse.id,
          pageFilters: _v21
        }), (0, _v3.jsx)(_v5.Box, {
          overflowX: "auto",
          overflowY: "hidden",
          borderRadius: "1.5rem",
          children: (0, _v3.jsxs)(_v5.Box, {
            as: "table",
            children: [(0, _v3.jsx)(_v481, {
              isDatePayloadItemVisible: _v44,
              fields: _v4,
              sortState: _v26,
              tableLayoutData: _v10,
              headerOnClickHandler: _v46
            }), _v8 && (0, _v3.jsx)(_v476, {
              selectedDataItems: _v11,
              reportType: _v6,
              onCheckHandler: _v45,
              totalRowStats: _v8,
              fields: _v4,
              tableLayoutData: _v10,
              isUserWithLimit: _v3.userInUse.isUserWithVideoLimit
            }), (0, _v3.jsx)(_v5.Box, {
              width: "100%",
              as: "tbody",
              color: "text-primary",
              overflow: "auto",
              children: _v51(_v34)
            })]
          })
        }), (_v16 || _v15) && (0, _v3.jsx)(_v74.Button, {
          width: "100%",
          marginTop: "1rem",
          size: "xl",
          paddingTop: "1.3rem",
          paddingBottom: "1rem",
          variant: "secondary",
          fontWeight: "bold",
          borderRadius: "0.313rem",
          fontSize: "0.9em",
          justifyContent: "center",
          _hover: {
            cursor: "pointer"
          },
          onClick: () => _v14(),
          children: _v15 ? (0, _v3.jsx)(_v10.Spinner, {
            size: "sm"
          }) : (0, _v3.jsx)(_v5.Box, {
            as: "span",
            children: "Load More"
          })
        })]
      });
    },
    _v494 = (0, _v426.default)(async () => {
      let {
        LazyBarGraph: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v495 = {
      type: _v299.TablePayloadItemType.BANDWIDTH,
      id: "0em",
      name: "20em",
      liveBandwidth: "15em",
      videoBandwidth: "16em",
      combinedBandwidth: "12em"
    },
    _v496 = () => (0, _v3.jsxs)(_v6.Flex, {
      padding: "1rem",
      width: "30rem",
      flexDirection: "column",
      gap: "1rem",
      children: [(0, _v3.jsx)(_v46.Text, {
        as: "p",
        fontSize: "0.875rem",
        variant: "body-xl",
        children: _v179.BANDWIDTH_INFO_TEXT
      }), (0, _v3.jsx)(_v46.Text, {
        as: "p",
        fontSize: "0.875rem",
        variant: "body-xl",
        children: (0, _v3.jsxs)(_v88.Link, {
          color: "inherit",
          href: "https://vimeo.zendesk.com/hc/en-us/articles/360037761072-Bandwidth-on-Vimeo-",
          target: "_blank",
          children: [(0, _v30.translate)({
            singular: "More information",
            dictionary: {
              es: {
                singular: "Más información"
              },
              "de-DE": {
                singular: "Mehr Info"
              },
              "fr-FR": {
                singular: "Plus d'information"
              },
              "ja-JP": {
                singular: "詳細情報"
              },
              "ko-KR": {
                singular: "추가 정보"
              },
              "pt-BR": {
                singular: "Mais informações"
              },
              "zh-CN": {
                singular: "更多信息"
              }
            }
          }), (0, _v3.jsx)(_v5.Box, {
            as: "span",
            paddingLeft: "0.7rem",
            children: (0, _v3.jsx)(_v427.PopOut, {
              boxSize: "0.7rem"
            })
          })]
        })
      })]
    }),
    _v497 = _v21.DateTime.utc().set({
      year: 0,
      month: 11,
      day: 31
    }),
    _v498 = _v0 => {
      let {
          state: _v1,
          dispatch: _v2
        } = _v0,
        _v3 = _v299.Reports.BANDWIDTH_DATE,
        _v4 = (0, _v441.getTableFieldsByReportType)(_v3),
        _v5 = (0, _v4.useMemo)(() => [{
          filterKey: _v299.Filters.CONTENT,
          filterFunc: _v331
        }, {
          filterKey: _v299.Filters.WORKSPACES,
          filterFunc: _v402
        }], []),
        {
          capabilities: {
            canViewBandwidthAnalyticsReports: _v6
          },
          loading: _v7
        } = (0, _v11.useCapability)(["canViewBandwidthAnalyticsReports"], _v1.userInUse.id),
        {
          tableData: _v8,
          tableTotalData: _v9,
          isMoreDataLoading: _v10,
          isMoreDataAvailable: _v11,
          updateTableData: _v12,
          isLoading: _v13,
          isError: _v14
        } = _v443(_v3, _v1, _v5),
        {
          graphData: _v15,
          isLoading: _v16,
          isError: _v17
        } = _v440(_v3, _v1, _v5, !1);
      if (!_v7 && void 0 !== _v6 && !_v6) return (0, _v3.jsx)(_v27.ErrorPage, {
        error: new _v25.UnauthorizedError()
      });
      let _v18 = _v6 ? {
          to: "/analytics/bandwidth/video",
          text: (0, _v30.translate)({
            singular: "Bandwidth by video",
            dictionary: {
              es: {
                singular: "Ancho de banda por video"
              },
              "de-DE": {
                singular: "Bandbreite nach Video"
              },
              "fr-FR": {
                singular: "Bande passante par vidéo"
              },
              "ja-JP": {
                singular: "動画ごとの帯域幅"
              },
              "ko-KR": {
                singular: "동영상별 대역폭"
              },
              "pt-BR": {
                singular: "Largura de banda por vídeo"
              },
              "zh-CN": {
                singular: "按视频划分的带宽"
              }
            }
          })
        } : null,
        _v19 = _v17 || _v14,
        _v20 = _v7 || _v13 || _v16 || _v19 || (0, _v319.default)(_v8);
      return (0, _v3.jsxs)(_v6.Flex, {
        width: "100%",
        flexDirection: "column",
        position: "relative",
        children: [(0, _v3.jsx)(_v404, {
          title: _v179.REPORT_NAME_DISPLAY_MAP[_v179.REPORT_TYPE_BANDWIDTH],
          infoPopUpContent: (0, _v3.jsx)(_v496, {}),
          reportFilters: _v5,
          state: _v1,
          dispatch: _v2,
          calendarMinDate: _v497,
          calendarPresets: _v179.CALENDAR_PRESETS[_v3],
          reportType: _v3,
          SubHeaderLink: _v18,
          leftAlignFilters: !0
        }), _v20 && (0, _v3.jsx)(_v6.Flex, {
          position: "absolute",
          top: "1.5rem",
          bottom: "0",
          backdropFilter: "blur(0.188rem)",
          marginTop: "8rem",
          width: "100%",
          zIndex: "2",
          background: "transparent",
          alignItems: "flex-start",
          justifyContent: "center",
          textAlign: "center",
          children: (0, _v3.jsx)(_v6.Flex, {
            as: "span",
            marginTop: "6rem",
            width: "21rem",
            justifyContent: "center",
            children: (0, _v3.jsx)(_v10.Spinner, {})
          })
        }), (0, _v3.jsx)(_v494, {
          isLoading: _v16,
          payload: _v15,
          YAxisText: _v179.BANDWIDTH_GRAPH_YAXIS_TEXT,
          isError: _v19
        }), (0, _v3.jsx)(_v493, {
          state: _v1,
          payload: _v8,
          primaryDimension: _v1.primaryDimensions[_v179.REPORT_GROUP_MAP[_v3]],
          reportType: _v3,
          reportFilterKeys: [],
          totalRowStats: _v9,
          loadMoreData: _v12,
          isMoreDataLoading: _v10,
          isMoreDataAvailable: _v11,
          applySort: _v367.sortHandler,
          selectedDataItems: [],
          dispatch: _v2,
          fields: _v4,
          tableLayoutData: _v495,
          isTableError: _v19
        })]
      });
    };
  var _v499 = _v0.i(0);
  let _v500 = (0, _v426.default)(async () => {
      let {
        LazyMultiLineGraph: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      loading: () => (0, _v3.jsx)("div", {})
    }),
    _v501 = {
      type: _v299.TablePayloadItemType.BANDWIDTH_VIDEO,
      id: "0em",
      name: "36em",
      liveBandwidth: "15em",
      videoBandwidth: "16em",
      combinedBandwidth: "12em"
    },
    _v502 = _v21.DateTime.utc().set({
      year: 0,
      month: 11,
      day: 31
    }),
    _v503 = _v299.Reports.BANDWIDTH_VIDEO,
    _v504 = _v0 => {
      let {
          state: _v1,
          dispatch: _v2
        } = _v0,
        _v3 = (0, _v441.getTableFieldsByReportType)(_v503),
        _v4 = (0, _v4.useMemo)(() => [{
          filterKey: _v299.Filters.CONTENT,
          filterFunc: _v331
        }, {
          filterKey: _v299.Filters.WORKSPACES,
          filterFunc: _v402
        }], []),
        {
          startDate: _v5,
          endDate: _v6
        } = (0, _v4.useMemo)(() => _v1.filters[_v1.reportGroup], [_v1.filters, _v1.reportGroup]),
        {
          capabilities: {
            canViewBandwidthAnalyticsReports: _v7
          },
          loading: _v8
        } = (0, _v11.useCapability)(["canViewBandwidthAnalyticsReports"]),
        {
          tableData: _v9,
          tableTotalData: _v10,
          initialLoad: _v11,
          isMoreDataLoading: _v12,
          isMoreDataAvailable: _v13,
          updateTableData: _v14,
          isLoading: _v15,
          isError: _v16
        } = _v443(_v503, _v1, _v4),
        {
          graphData: _v17,
          isLoading: _v18,
          isError: _v19
        } = _v440(_v503, _v1, _v4, !0);
      if ((0, _v4.useEffect)(() => {
        _v11 && _v2({
          type: _v299.REPORT_ACTION_TYPE.SET_GRAPH_ITEMS,
          payload: [..._v9.slice(0, 5)],
          isInitialLoad: !0
        });
      }, [_v2, _v9, _v11]), !_v8 && void 0 !== _v7 && !_v7) return (0, _v3.jsx)(_v24.Redirect, {
        to: "/analytics"
      });
      let _v20 = _v8 || _v15 || _v18,
        _v21 = _v19 || _v16,
        _v22 = (0, _v499.shouldShowInDevelopmentFeature)("new_table");
      return (0, _v3.jsxs)(_v6.Flex, {
        width: "100%",
        flexDirection: "column",
        position: "relative",
        alignItems: "stretch",
        children: [(0, _v3.jsx)(_v404, {
          title: _v179.REPORT_NAME_DISPLAY_MAP[_v179.REPORT_TYPE_BANDWIDTH],
          infoPopUpContent: (0, _v3.jsx)(_v496, {}),
          reportFilters: _v4,
          state: _v1,
          dispatch: _v2,
          calendarMinDate: _v502,
          calendarPresets: _v179.CALENDAR_PRESETS[_v503],
          reportType: _v503
        }), _v22 ? (0, _v3.jsxs)(_v3.Fragment, {
          children: [(0, _v3.jsx)(_v500, {
            reportType: _v503,
            visibleMetric: _v1.primaryDimensions[_v179.REPORT_GROUP_MAP[_v503]],
            payload: _v17,
            resetTablePage: _v14,
            selectedDataItems: _v1.selectedItemsForGraph,
            dispatch: _v2,
            metrics: (0, _v367.tableFieldsToGraphMetrics)(_v3),
            selectedAggregateInterval: _v299.AggregateIntervalType.NONE,
            hideAggregateInteralSelector: !0,
            YAxisText: _v179.BANDWIDTH_GRAPH_YAXIS_TEXT,
            startDate: _v5,
            endDate: _v6,
            isGraphError: _v21,
            isLoading: _v20
          }), (0, _v3.jsx)(_v493, {
            state: _v1,
            payload: _v9,
            primaryDimension: _v1.primaryDimensions[_v179.REPORT_GROUP_MAP[_v503]],
            reportType: _v503,
            totalRowStats: _v10,
            loadMoreData: _v14,
            isMoreDataLoading: _v12,
            isMoreDataAvailable: _v13,
            applySort: _v367.sortHandler,
            selectedDataItems: _v1.selectedItemsForGraph,
            dispatch: _v2,
            fields: _v3,
            tableLayoutData: _v501,
            reportFilterKeys: [],
            isTableError: _v21
          })]
        }) : (0, _v3.jsxs)(_v3.Fragment, {
          children: [_v20 && (0, _v3.jsx)(_v6.Flex, {
            position: "absolute",
            top: "1.5rem",
            bottom: "0",
            backdropFilter: "blur(0.188rem)",
            marginTop: "8rem",
            width: "100%",
            zIndex: "2",
            background: "transparent",
            alignItems: "flex-start",
            justifyContent: "center",
            textAlign: "center",
            children: (0, _v3.jsx)(_v6.Flex, {
              as: "span",
              marginTop: "6rem",
              width: "21rem",
              justifyContent: "center",
              children: (0, _v3.jsx)(_v10.Spinner, {})
            })
          }), (0, _v3.jsx)(_v500, {
            reportType: _v503,
            visibleMetric: _v1.primaryDimensions[_v179.REPORT_GROUP_MAP[_v503]],
            payload: _v17,
            resetTablePage: _v14,
            selectedDataItems: _v1.selectedItemsForGraph,
            dispatch: _v2,
            metrics: (0, _v367.tableFieldsToGraphMetrics)(_v3),
            selectedAggregateInterval: _v299.AggregateIntervalType.NONE,
            hideAggregateInteralSelector: !0,
            YAxisText: _v179.BANDWIDTH_GRAPH_YAXIS_TEXT,
            startDate: _v5,
            endDate: _v6,
            isGraphError: _v21
          }), (0, _v3.jsx)(_v493, {
            state: _v1,
            payload: _v9,
            primaryDimension: _v1.primaryDimensions[_v179.REPORT_GROUP_MAP[_v503]],
            reportType: _v503,
            totalRowStats: _v10,
            loadMoreData: _v14,
            isMoreDataLoading: _v12,
            isMoreDataAvailable: _v13,
            applySort: _v367.sortHandler,
            selectedDataItems: _v1.selectedItemsForGraph,
            dispatch: _v2,
            fields: _v3,
            tableLayoutData: _v501,
            reportFilterKeys: [],
            isTableError: _v21
          })]
        })]
      });
    };
  var _v505 = _v0.i(0);
  let _v506 = (0, _v30.translate)({
    singular: "Top devices",
    dictionary: {
      es: {
        singular: "Principales dispositivos"
      },
      "de-DE": {
        singular: "Top-Geräte"
      },
      "fr-FR": {
        singular: "Principaux appareils"
      },
      "ja-JP": {
        singular: "トップデバイス"
      },
      "ko-KR": {
        singular: "상위 기기"
      },
      "pt-BR": {
        singular: "Principais dispositivos"
      },
      "zh-CN": {
        singular: "热门设备"
      }
    }
  });
  (0, _v30.translate)({
    singular: "View all device data",
    dictionary: {
      es: {
        singular: "Ver todos los datos de dispositivos"
      },
      "de-DE": {
        singular: "Alle Gerätedaten anzeigen"
      },
      "fr-FR": {
        singular: "Voir toutes les données sur les appareil"
      },
      "ja-JP": {
        singular: "すべてのデバイスデータを表示"
      },
      "ko-KR": {
        singular: "모든 기기 데이터 보기"
      },
      "pt-BR": {
        singular: "Exibir todos os dados sobre o dispositivo"
      },
      "zh-CN": {
        singular: "查看所有设备数据"
      }
    }
  });
  let _v507 = (0, _v30.translate)({
      singular: "Device",
      dictionary: {
        es: {
          singular: "Dispositivo"
        },
        "de-DE": {
          singular: "Gerät"
        },
        "fr-FR": {
          singular: "Appareil"
        },
        "ja-JP": {
          singular: "デバイス"
        },
        "ko-KR": {
          singular: "기기"
        },
        "pt-BR": {
          singular: "Dispositivo"
        },
        "zh-CN": {
          singular: "设备"
        }
      }
    }),
    _v508 = (0, _v30.translate)({
      singular: "Mobile",
      dictionary: {
        es: {
          singular: "Móvil"
        },
        "de-DE": {
          singular: "Mobil"
        },
        "ja-JP": {
          singular: "モバイル"
        },
        "ko-KR": {
          singular: "모바일"
        },
        "pt-BR": {
          singular: "Dispositivos Móveis"
        },
        "zh-CN": {
          singular: "移动端"
        }
      }
    }),
    _v509 = (0, _v30.translate)({
      singular: "Desktop",
      dictionary: {
        es: {
          singular: "Escritorio"
        },
        "ja-JP": {
          singular: "デスクトップ"
        },
        "ko-KR": {
          singular: "데스크탑"
        },
        "pt-BR": {
          singular: "Computadores de mesa"
        },
        "zh-CN": {
          singular: "桌面"
        }
      }
    }),
    _v510 = (0, _v30.translate)({
      singular: "Tablet",
      dictionary: {
        es: {
          singular: "Tableta"
        },
        "fr-FR": {
          singular: "Tablette"
        },
        "ja-JP": {
          singular: "タブレット"
        },
        "ko-KR": {
          singular: "태블릿"
        },
        "zh-CN": {
          singular: "平板电脑"
        }
      }
    }),
    _v511 = (0, _v30.translate)({
      singular: "TV apps",
      dictionary: {
        es: {
          singular: "Apps para televisores"
        },
        "de-DE": {
          singular: "TV-Apps"
        },
        "fr-FR": {
          singular: "Apps pour TV"
        },
        "ja-JP": {
          singular: "TV アプリ"
        },
        "ko-KR": {
          singular: "TV 앱"
        },
        "pt-BR": {
          singular: "Aplicativos para TV"
        },
        "zh-CN": {
          singular: "电视应用程序"
        }
      }
    }),
    _v512 = (0, _v30.translate)({
      singular: "Other",
      dictionary: {
        es: {
          singular: "Otro"
        },
        "de-DE": {
          singular: "Sonstiges"
        },
        "fr-FR": {
          singular: "Autre"
        },
        "ja-JP": {
          singular: "その他"
        },
        "ko-KR": {
          singular: "기타"
        },
        "pt-BR": {
          singular: "Outro"
        },
        "zh-CN": {
          singular: "其他"
        }
      }
    }),
    _v513 = (0, _v30.translate)({
      singular: "Views",
      dictionary: {
        es: {
          singular: "Vistas"
        },
        "de-DE": {
          singular: "Ansichten"
        },
        "fr-FR": {
          singular: "Vues"
        },
        "ja-JP": {
          singular: "視聴数"
        },
        "ko-KR": {
          singular: "조회 수"
        },
        "pt-BR": {
          singular: "Visualizações"
        },
        "zh-CN": {
          singular: "观看量"
        }
      }
    }),
    _v514 = (0, _v30.translate)({
      singular: "No data to show yet",
      dictionary: {
        es: {
          singular: "Aún no hay datos que mostrar"
        },
        "de-DE": {
          singular: "Noch keine Daten vorhanden"
        },
        "fr-FR": {
          singular: "Aucune donnée n’est encore disponible"
        },
        "ja-JP": {
          singular: "表示するデータはまだありません"
        },
        "ko-KR": {
          singular: "아직 표시할 데이터가 없습니다."
        },
        "pt-BR": {
          singular: "Ainda não há dados para mostrar"
        },
        "zh-CN": {
          singular: "暂无数据可显示"
        }
      }
    });
  var _v515 = _v0.i(0);
  let _v516 = ["views", "deviceType"];
  var _v517 = _v0.i(0),
    _v518 = _v0.i(0),
    _v519 = _v0.i(0),
    _v520 = _v0.i(0);
  let _v521 = () => (0, _v3.jsx)(_v343.Center, {
      flexGrow: "1",
      height: "inherit",
      textAlign: "center",
      children: (0, _v3.jsxs)(_v5.Box, {
        children: [(0, _v30.translate)({
          singular: "{ERROR}Unable to load data.{/ERROR}",
          replacements: {
            ERROR: _v0 => (0, _v3.jsx)(_v46.Text, {
              variant: "body-xl",
              display: "block",
              color: "text-secondary",
              fontSize: "0.688rem",
              textAlign: "center",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "{ERROR}No se pudieron cargar los datos.{/ERROR}"
            },
            "de-DE": {
              singular: "{ERROR}Daten konnten nicht geladen werden.{/ERROR}"
            },
            "fr-FR": {
              singular: "{ERROR}Impossible de charger les données.{/ERROR}"
            },
            "ja-JP": {
              singular: "{ERROR}データを読み込めません。{/ERROR}"
            },
            "ko-KR": {
              singular: "{ERROR}데이터를 로드할 수 없습니다.{/ERROR}"
            },
            "pt-BR": {
              singular: "{ERROR}Não foi possível carregar os dados.{/ERROR}"
            },
            "zh-CN": {
              singular: "{ERROR}无法加载数据。{/ERROR}"
            }
          }
        }), (0, _v3.jsx)(_v46.Text, {
          variant: "body-xl",
          display: "block",
          color: "text-secondary",
          fontSize: "0.688rem",
          textAlign: "center",
          children: (0, _v30.translate)({
            singular: "Refresh to try again or {ANCHOR}contact support{/ANCHOR}.",
            replacements: {
              ANCHOR: _v0 => (0, _v3.jsx)(_v46.Text, {
                variant: "body-xl",
                as: "a",
                fontSize: "0.688rem",
                textDecoration: "underline",
                href: "/help/contact",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Actualice para volver a intentarlo o {ANCHOR}póngase en contacto con el servicio de asistencia{/ANCHOR}."
              },
              "de-DE": {
                singular: "Aktualisieren Sie, um es erneut zu versuchen, oder {ANCHOR}wenden Sie sich an den Support{/ANCHOR}."
              },
              "fr-FR": {
                singular: "Actualisez la page pour réessayer ou {ANCHOR}contactez l'assistance{/ANCHOR}."
              },
              "ja-JP": {
                singular: "ページを更新して再試行するか、{ANCHOR}サポートにお問い合わせください{/ANCHOR} 。"
              },
              "ko-KR": {
                singular: "새로고침하여 다시 시도하거나 {ANCHOR}지원팀에 문의하세요{/ANCHOR}."
              },
              "pt-BR": {
                singular: "Atualize para tentar novamente ou {ANCHOR}entre em contato com a equipe de suporte{/ANCHOR}."
              },
              "zh-CN": {
                singular: "刷新重试，或{ANCHOR}联系支持人员{/ANCHOR}。"
              }
            }
          })
        })]
      })
    }),
    _v522 = ({
      data: _v0,
      dimension: _v1,
      metric: _v2,
      emptyDataMessage: _v3,
      hasError: _v4,
      isLoading: _v5
    }) => {
      let _v6 = (0, _v4.useContext)(_v28.ViewerContext),
        _v7 = (0, _v4.useMemo)(() => _v0?.reduce((_v0, _v1) => _v0 + _v1[_v2], 0), [_v0, _v2]),
        [_v8, _v9] = (0, _v4.useState)(null),
        [_v10, _v11] = (0, _v4.useState)(0),
        [_v12] = (0, _v9.useMediaQuery)(`(min-width: ${_v519.BREAKPOINTS[780]}px)`);
      return _v5 ? (0, _v3.jsx)(_v518.BokehSkeleton, {
        height: "100%",
        width: "100%",
        borderRadius: "0.5rem"
      }) : !_v5 && _v4 ? (0, _v3.jsx)(_v521, {}) : _v5 || _v4 || _v0?.length ? (0, _v3.jsx)(_v6.Flex, {
        as: "ol",
        flexDirection: "column",
        gap: _v12 ? "1.25rem" : "0.75rem",
        onMouseLeave: () => _v9?.(null),
        children: _v0?.map((_v0, _v1) => {
          let _v2 = Math.ceil(_v0?.[_v2] / (_v7 ?? 0) * 100);
          return (0, _v3.jsxs)(_v6.Flex, {
            as: "li",
            gap: "1rem",
            onMouseEnter: () => _v9?.(_v0[_v1]),
            opacity: _v8 && _v0[_v1] !== _v8 ? .3 : 1,
            cursor: "default",
            children: [(0, _v3.jsx)(_v5.Box, {
              flex: "0 0 3.375rem",
              children: (0, _v3.jsx)(_v46.Text, {
                variant: "body-md",
                lineHeight: "1.5",
                children: _v0[_v1]
              })
            }), (0, _v3.jsx)(_v125.Tooltip, {
              label: _v0[_v2]?.toLocaleString(),
              placement: "auto",
              modifiers: [{
                name: "offset",
                enabled: !0,
                phase: "main",
                options: {
                  offset: ({
                    reference: _v0,
                    popper: _v1
                  }) => [-30, _v0.x - _v1.width / 2 - _v10]
                }
              }],
              fontSize: "0.75rem",
              fontWeight: "700",
              children: (0, _v3.jsx)(_v6.Flex, {
                flex: "auto",
                alignItems: "center",
                onMouseMove: _v0 => {
                  _v11(_v0.clientX);
                },
                children: (0, _v3.jsx)(_v5.Box, {
                  width: `${_v2}%`,
                  minWidth: _v2 > 0 ? "0.5rem" : 0,
                  height: "0.5rem",
                  borderRadius: "0 0.5rem 0.5rem 0",
                  bg: "vimeoBlue.400"
                })
              })
            }), (0, _v3.jsx)(_v5.Box, {
              flex: "0 0 2.625rem",
              children: (0, _v3.jsx)(_v46.Text, {
                variant: "body-md",
                fontWeight: "700",
                textAlign: "right",
                lineHeight: "1.5",
                children: _v6 ? (0, _v520.formatDisplayNumber)(_v0[_v2], _v6.locale) : "-"
              })
            })]
          }, _v1);
        })
      }) : (0, _v3.jsx)(_v343.Center, {
        flexGrow: "1",
        height: "inherit",
        children: (0, _v3.jsx)(_v46.Text, {
          variant: "body-xl",
          color: "text-secondary",
          fontSize: "0.688rem",
          children: _v3
        })
      });
    },
    _v523 = ({
      data: _v0,
      dimension: _v1,
      dimensionLabel: _v2,
      emptyDataMessage: _v3,
      hasError: _v4,
      isLoading: _v5,
      metric: _v6,
      metricLabel: _v7,
      onMouseEnter: _v8
    }) => (0, _v3.jsxs)(_v6.Flex, {
      height: "100%",
      direction: "column",
      overflow: "hidden",
      gap: "1rem",
      children: [(0, _v3.jsxs)(_v6.Flex, {
        justifyContent: "space-between",
        children: [(0, _v3.jsx)(_v46.Text, {
          color: "text-secondary",
          variant: "body-sm",
          children: _v2
        }), (0, _v3.jsx)(_v46.Text, {
          color: "text-secondary",
          variant: "body-sm",
          children: _v7
        })]
      }), (0, _v3.jsx)(_v5.Box, {
        height: "100%",
        onMouseEnter: _v8,
        children: (0, _v3.jsx)(_v522, {
          data: _v0,
          dimension: _v1,
          metric: _v6,
          isLoading: _v5,
          emptyDataMessage: _v3,
          hasError: _v4
        })
      })]
    });
  var _v524 = _v0.i(0);
  let _v525 = ({
    filters: _v0,
    userId: _v1
  }) => {
    let {
        data: _v2,
        isLoading: _v3,
        error: _v4
      } = ((_v0, _v1) => {
        let {
            startDate: _v2,
            endDate: _v3,
            filterLists: _v4
          } = _v1,
          _v5 = (0, _v4.useMemo)(() => (0, _v515.getFiltersObject)(_v4), [_v4]),
          {
            isOrionLoading: _v6,
            queryParam: _v7
          } = (0, _v338.useAnalyticsFreshness)(),
          {
            data: _v8,
            isLoading: _v9,
            error: _v10
          } = (0, _v193.useGetUserAnalytics)(() => _v6 ? null : {
            select: _v516,
            where: {
              userId: _v0
            },
            query: {
              from: _v2.toISO(),
              to: _v3.toISO(),
              dimension: "device_type",
              direction: "desc",
              ..._v5,
              sort: "views",
              perPage: 5,
              ..._v7
            }
          }, {
            revalidateOnFocus: !1,
            errorRetryInterval: 0,
            errorRetryCount: 1
          }),
          _v11 = {
            mobile: _v508,
            device: _v507,
            tablet: _v510,
            desktop: _v509,
            tv: _v511,
            other: _v512
          };
        return {
          data: _v8?.data?.reduce((_v0, _v1) => _v1.views > 0 ? [..._v0, {
            ..._v1,
            deviceType: _v11?.[_v1.deviceType] ?? _v1.deviceType
          }] : _v0, []),
          isLoading: _v9,
          error: _v10
        };
      })(_v1, _v0),
      {
        sendEvent: _v5
      } = (0, _v505.useAnalyticsEvents)();
    return (0, _v3.jsx)(_v524.Widget, {
      header: {
        to: "/analytics/device",
        title: _v506,
        bpTarget: "Device Report"
      },
      name: _v517.WidgetName.ANALYTICS_DEVICE,
      children: (0, _v3.jsx)(_v5.Box, {
        height: "100%",
        display: "grid",
        flexGrow: "1",
        children: (0, _v3.jsx)(_v523, {
          data: _v2,
          dimension: "deviceType",
          dimensionLabel: _v507,
          emptyDataMessage: _v514,
          hasError: !!_v4,
          isLoading: _v3,
          metric: "views",
          metricLabel: _v513,
          onMouseEnter: () => (0, _v517.sendDeviceBarGraphHoverEvent)(_v5)
        })
      })
    });
  };
  var _v526 = _v0.i(0);
  let _v527 = (0, _v30.translate)({
      singular: "Views",
      dictionary: {
        es: {
          singular: "Vistas"
        },
        "de-DE": {
          singular: "Ansichten"
        },
        "fr-FR": {
          singular: "Vues"
        },
        "ja-JP": {
          singular: "視聴数"
        },
        "ko-KR": {
          singular: "조회 수"
        },
        "pt-BR": {
          singular: "Visualizações"
        },
        "zh-CN": {
          singular: "观看量"
        }
      }
    }),
    _v528 = (0, _v30.translate)({
      singular: "Unique viewers",
      dictionary: {
        es: {
          singular: "Espectadores únicos"
        },
        "de-DE": {
          singular: "Eindeutige Zuschauende"
        },
        "fr-FR": {
          singular: "Spectateurs uniques"
        },
        "ja-JP": {
          singular: "ユニーク視聴者数"
        },
        "ko-KR": {
          singular: "순 시청자 수"
        },
        "pt-BR": {
          singular: "Visualizações únicas"
        },
        "zh-CN": {
          singular: "独立观众数"
        }
      }
    }),
    _v529 = (0, _v30.translate)({
      singular: "Total time watched",
      dictionary: {
        es: {
          singular: "Tiempo total visto"
        },
        "de-DE": {
          singular: "Zeit, die das Video insgesamt angesehen wurde"
        },
        "fr-FR": {
          singular: "Temps de visionnage"
        },
        "ja-JP": {
          singular: "総視聴時間"
        },
        "ko-KR": {
          singular: "총 시청 시간"
        },
        "pt-BR": {
          singular: "Tempo total assistido"
        },
        "zh-CN": {
          singular: "总观看时间"
        }
      }
    }),
    _v530 = (0, _v30.translate)({
      singular: "Number of times videos have been played",
      dictionary: {
        es: {
          singular: "Cantidad de veces que se han reproducido los videos"
        },
        "de-DE": {
          singular: "Wie oft Videos abgespielt wurden"
        },
        "fr-FR": {
          singular: "Nombre de fois où les vidéos ont été vues"
        },
        "ja-JP": {
          singular: "動画が再生された回数"
        },
        "ko-KR": {
          singular: "동영상이 재생된 횟수"
        },
        "pt-BR": {
          singular: "Número de vezes que os vídeos foram reproduzidos"
        },
        "zh-CN": {
          singular: "视频播放次数"
        }
      }
    }),
    _v531 = (0, _v30.translate)({
      singular: "People that have watched at least one video",
      dictionary: {
        es: {
          singular: "Personas que han visto, al menos, un video"
        },
        "de-DE": {
          singular: "Personen, die mindestens ein Video angesehen haben"
        },
        "fr-FR": {
          singular: "Personnes ayant regardé au moins une vidéo"
        },
        "ja-JP": {
          singular: "動画を1本以上視聴した人"
        },
        "ko-KR": {
          singular: "동영상을 1개 이상 시청한 사람"
        },
        "pt-BR": {
          singular: "Pessoas que assistiram a pelo menos um vídeo"
        },
        "zh-CN": {
          singular: "至少观看过一个视频的用户"
        }
      }
    }),
    _v532 = (0, _v30.translate)({
      singular: "Total time watched for a video across all sessions",
      dictionary: {
        es: {
          singular: "El tiempo total visto de un video en todas las sesiones"
        },
        "de-DE": {
          singular: "Gesamtdauer der Videobetrachtung über alle Sitzungen hinweg"
        },
        "fr-FR": {
          singular: "Le temps total de lecture d'une vidéo pour toutes les sessions"
        },
        "ja-JP": {
          singular: "すべてのセッションで動画を視聴した合計時間"
        },
        "ko-KR": {
          singular: "모든 세션에서 동영상을 시청한 총 시간"
        },
        "pt-BR": {
          singular: "O tempo total assistido de um vídeo em todas as sessões"
        },
        "zh-CN": {
          singular: "所有时段观看视频的总时长"
        }
      }
    }),
    _v533 = ({
      filters: _v0,
      metrics: _v1,
      userId: _v2
    }) => {
      let _v3 = (0, _v4.useMemo)(() => (0, _v515.getFiltersObject)(_v0.filterLists), [_v0.filterLists]),
        {
          isOrionLoading: _v4,
          queryParam: _v5
        } = (0, _v338.useAnalyticsFreshness)(),
        {
          data: _v6,
          isLoading: _v7,
          error: _v8
        } = (0, _v193.useGetUserAnalytics)(() => _v4 ? null : {
          select: _v1,
          where: {
            userId: _v2
          },
          query: {
            from: _v0.startDate.toISO(),
            to: _v0.endDate.toISO(),
            dimension: "total",
            ..._v3,
            ..._v5
          }
        }, {
          revalidateOnFocus: !1,
          errorRetryInterval: 0,
          errorRetryCount: 1
        }),
        _v9 = (0, _v4.useRef)(!0),
        {
          sendEvent: _v10
        } = (0, _v505.useAnalyticsEvents)();
      return (0, _v4.useEffect)(() => {
        _v9.current && (_v1.forEach(_v0 => {
          (0, _v517.sendWidgetImpressionEvent)(_v10, _v535[_v0].widgetName, _v535[_v0].label);
        }), _v9.current = !1);
      }, [_v1, _v10]), (0, _v3.jsx)(_v526.Grid, {
        templateColumns: {
          base: "unset",
          lg: `repeat(${_v1.length}, minmax(14rem, 1fr))`
        },
        templateRows: {
          base: `repeat(${_v1.length}, 1fr)`,
          lg: "unset"
        },
        gap: "1.5rem",
        children: _v1.map(_v0 => {
          let {
              label: _v1,
              infoTooltip: _v2,
              widgetName: _v3
            } = _v535[_v0],
            _v4 = _v6?.data?.[0]?.[_v0];
          return (0, _v3.jsxs)(_v5.Box, {
            backgroundColor: "fill-surface",
            borderRadius: "16px",
            padding: "1.5rem",
            children: [(0, _v3.jsxs)(_v6.Flex, {
              gap: ".25rem",
              alignItems: "center",
              minWidth: "10.5rem",
              children: [(0, _v3.jsx)(_v39.Header, {
                size: "md",
                children: _v1
              }), (0, _v3.jsx)(_v125.Tooltip, {
                label: _v2,
                placement: "top",
                maxWidth: "15rem",
                variant: "body-md",
                textAlign: "left",
                fontSize: ".875rem",
                sx: {
                  textWrap: "pretty"
                },
                onOpen: () => (0, _v517.sendHoverEvent)(_v10, _v3, "icon", _v517.WidgetElementName.BIG_NUMBER_CARD),
                children: (0, _v3.jsx)(_v5.Box, {
                  children: (0, _v3.jsx)(_v298.InfoCircle, {
                    boxSize: ".75rem",
                    color: "text-secondary"
                  })
                })
              })]
            }), (0, _v3.jsx)(_v534, {
              hasError: !!_v8,
              isLoading: _v7,
              metric: _v0,
              value: _v4
            })]
          }, _v0);
        })
      });
    },
    _v534 = ({
      hasError: _v0,
      isLoading: _v1,
      metric: _v2,
      value: _v3
    }) => {
      let _v4,
        _v5,
        _v6 = (0, _v4.useContext)(_v28.ViewerContext),
        {
          sendEvent: _v7
        } = (0, _v505.useAnalyticsEvents)();
      if (_v1) return (0, _v3.jsx)(_v518.BokehSkeleton, {
        height: "2.625rem",
        width: "100%",
        borderRadius: "0.5rem"
      });
      if (_v0) return (0, _v3.jsxs)(_v6.Flex, {
        alignItems: "center",
        gap: ".25rem",
        children: [(0, _v3.jsx)(_v39.Header, {
          size: "2xl",
          children: "-"
        }), (0, _v3.jsx)(_v347.CircleExclamation, {
          boxSize: "1rem",
          color: "status-destructive-primary"
        })]
      });
      let {
        label: _v8,
        formatDataTooltip: _v9,
        formatValue: _v10,
        widgetName: _v11
      } = _v535[_v2];
      null == _v3 ? (_v4 = "-", _v5 = "-") : (_v4 = _v9 ? _v9(_v3, _v6?.locale) : _v3.toLocaleString(), _v5 = _v10 ? _v10(_v3) : (0, _v520.formatDisplayNumber)(_v3, _v6?.locale || "en"));
      let _v12 = _v8.length + _v4.length;
      return (0, _v3.jsx)(_v125.Tooltip, {
        label: (0, _v3.jsxs)(_v5.Box, {
          alignItems: _v12 > 50 ? "flex-start" : "center",
          minWidth: "9.25rem",
          flexFlow: "wrap",
          justifyContent: "space-between",
          flexDirection: _v12 > 50 ? "column" : "row",
          display: "flex",
          children: [(0, _v3.jsx)(_v46.Text, {
            variant: "body-md",
            paddingRight: "1rem",
            display: "inline",
            whiteSpace: "nowrap",
            children: _v8
          }), (0, _v3.jsx)(_v46.Text, {
            variant: "heading-xs",
            display: "inline",
            whiteSpace: "nowrap",
            children: _v4
          })]
        }),
        maxWidth: "unset",
        placement: "top",
        onOpen: () => (0, _v517.sendHoverEvent)(_v7, _v11, "text", _v517.WidgetElementName.BIG_NUMBER_CARD),
        children: (0, _v3.jsx)("span", {
          children: (0, _v3.jsx)(_v39.Header, {
            size: "xl",
            display: "inline",
            children: _v5
          })
        })
      });
    },
    _v535 = {
      views: {
        label: _v527,
        infoTooltip: _v530,
        widgetName: _v517.WidgetName.ANALYTICS_VIEWS
      },
      uniqueViewers: {
        label: _v528,
        infoTooltip: _v531,
        widgetName: _v517.WidgetName.ANALYTICS_UNIQUE_VIEWERS
      },
      totalTimeWatched: {
        label: _v529,
        infoTooltip: _v532,
        formatValue: _v520.formatTime,
        formatDataTooltip: _v520.formatTimeExpanded,
        widgetName: _v517.WidgetName.ANALYTICS_TOTAL_TIME_WATCHED
      }
    };
  var _v536 = _v0.i(0);
  let _v537 = {
    topRegions: (0, _v30.translate)({
      singular: "Top regions",
      dictionary: {
        es: {
          singular: "Regiones superiores"
        },
        "de-DE": {
          singular: "Top-Regionen"
        },
        "fr-FR": {
          singular: "Régions principales"
        },
        "ja-JP": {
          singular: "上位の地域"
        },
        "ko-KR": {
          singular: "인기 지역"
        },
        "pt-BR": {
          singular: "Principais regiões"
        },
        "zh-CN": {
          singular: "热门地区"
        }
      }
    }),
    viewAll: (0, _v30.translate)({
      singular: "View all region data",
      dictionary: {
        es: {
          singular: "Ver todos los datos regionales"
        },
        "de-DE": {
          singular: "Alle Regionsdaten anzeigen"
        },
        "fr-FR": {
          singular: "Voir toutes les données sur les régions"
        },
        "ja-JP": {
          singular: "すべての地域のデータを表示"
        },
        "ko-KR": {
          singular: "모든 지역 데이터 보기"
        },
        "pt-BR": {
          singular: "Exibir todos os dados sobre regiões"
        },
        "zh-CN": {
          singular: "查看所有区域的数据"
        }
      }
    }),
    location: (0, _v30.translate)({
      singular: "Location",
      dictionary: {
        es: {
          singular: "Ubicación"
        },
        "de-DE": {
          singular: "Ort"
        },
        "fr-FR": {
          singular: "Localisation"
        },
        "ja-JP": {
          singular: "位置情報"
        },
        "ko-KR": {
          singular: "위치"
        },
        "pt-BR": {
          singular: "Local"
        },
        "zh-CN": {
          singular: "位置"
        }
      }
    }),
    views: (0, _v30.translate)({
      singular: "Views",
      dictionary: {
        es: {
          singular: "Vistas"
        },
        "de-DE": {
          singular: "Ansichten"
        },
        "fr-FR": {
          singular: "Vues"
        },
        "ja-JP": {
          singular: "視聴数"
        },
        "ko-KR": {
          singular: "조회 수"
        },
        "pt-BR": {
          singular: "Visualizações"
        },
        "zh-CN": {
          singular: "观看量"
        }
      }
    }),
    emptyRegionData: (0, _v30.translate)({
      singular: "No data to show yet",
      dictionary: {
        es: {
          singular: "Aún no hay datos que mostrar"
        },
        "de-DE": {
          singular: "Noch keine Daten vorhanden"
        },
        "fr-FR": {
          singular: "Aucune donnée n’est encore disponible"
        },
        "ja-JP": {
          singular: "表示するデータはまだありません"
        },
        "ko-KR": {
          singular: "아직 표시할 데이터가 없습니다."
        },
        "pt-BR": {
          singular: "Ainda não há dados para mostrar"
        },
        "zh-CN": {
          singular: "暂无数据可显示"
        }
      }
    }),
    error: (0, _v30.translate)({
      singular: "Unable to load data. Refresh to try again or contact support.",
      dictionary: {
        es: {
          singular: "No se pudieron cargar los datos. Actualice para volver a intentarlo o póngase en contacto con el servicio de asistencia."
        },
        "de-DE": {
          singular: "Daten konnten nicht geladen werden. Laden Sie die Seite neu oder kontaktieren Sie den Support."
        },
        "fr-FR": {
          singular: "Impossible de charger les données. Actualisez la page pour réessayer ou contactez l'assistance."
        },
        "ja-JP": {
          singular: "データを読み込めません。更新して再試行するか、サポートにお問い合わせください。"
        },
        "ko-KR": {
          singular: "데이터를 로드할 수 없습니다. 새로고침하여 다시 시도하거나 지원팀에 문의하세요."
        },
        "pt-BR": {
          singular: "Não foi possível carregar os dados. Atualize para tentar novamente ou entre em contato com a equipe de suporte."
        },
        "zh-CN": {
          singular: "无法加载数据。刷新重试，或联系支持人员。"
        }
      }
    }),
    other: (0, _v30.translate)({
      singular: "Other",
      dictionary: {
        es: {
          singular: "Otro"
        },
        "de-DE": {
          singular: "Sonstiges"
        },
        "fr-FR": {
          singular: "Autre"
        },
        "ja-JP": {
          singular: "その他"
        },
        "ko-KR": {
          singular: "기타"
        },
        "pt-BR": {
          singular: "Outro"
        },
        "zh-CN": {
          singular: "其他"
        }
      }
    })
  };
  var _v538 = _v0.i(0),
    _v539 = _v0.i(0);
  let _v540 = ({
      data: _v0,
      dataKey: _v1,
      hasError: _v2,
      isLoading: _v3,
      tooltipLabel: _v4,
      highlightedSection: _v5,
      setHighlightedSection: _v6,
      onMouseEnter: _v7
    }) => {
      let _v8 = (0, _v4.useMemo)(() => _v0?.reduce((_v0, _v1) => _v0 + _v1[_v1], 0), [_v0, _v1]),
        _v9 = (0, _v152.useColorModeValue)("slate.100", "grayscale.800"),
        _v10 = (0, _v538.useDashboardColors)(),
        _v11 = (0, _v539.useOtherColor)();
      return _v3 ? (0, _v3.jsx)(_v5.Box, {
        marginBottom: "0.375rem",
        children: (0, _v3.jsx)(_v518.BokehSkeleton, {
          "data-testid": "segmented-bar-graph-loading",
          height: "0.5rem",
          width: "100%",
          borderRadius: "0.5rem"
        })
      }) : (_v3 || !_v2) && _v0?.length ? (0, _v3.jsx)(_v394.HStack, {
        "data-testid": "segmented-bar-graph",
        spacing: "2",
        width: "100%",
        height: "0.5rem",
        onMouseEnter: _v7,
        onMouseLeave: () => _v6?.(null),
        marginBottom: "0.375rem",
        children: _v0?.map((_v0, _v1) => {
          let _v2 = Math.ceil(_v0?.[_v1] / (_v8 ?? 0) * 100);
          return (0, _v3.jsx)(_v125.Tooltip, {
            label: (0, _v3.jsxs)(_v6.Flex, {
              minWidth: "9.25rem",
              gap: "1rem",
              justifyContent: "space-between",
              fontSize: "0.75rem",
              children: [(0, _v3.jsx)(_v5.Box, {
                children: _v4(_v0)
              }), (0, _v3.jsx)(_v5.Box, {
                fontWeight: 700,
                children: _v0?.[_v1]?.toLocaleString()
              })]
            }),
            placement: "top",
            children: (0, _v3.jsx)(_v5.Box, {
              "data-testid": "segmented-bar-graph-segment",
              width: `${_v2}%`,
              minWidth: _v2 > 0 ? "0.5rem" : 0,
              bg: _v10[_v1] ?? _v11,
              borderRadius: 100,
              height: "0.5rem",
              onMouseEnter: () => _v6?.(_v0.country.code),
              opacity: _v5 && _v0.country.code !== _v5 ? .3 : 1
            })
          }, _v1);
        })
      }) : (0, _v3.jsx)(_v5.Box, {
        marginBottom: "0.375rem",
        children: (0, _v3.jsx)(_v5.Box, {
          width: "100%",
          height: "0.5rem",
          borderRadius: "6.25rem",
          bg: _v9,
          "data-testid": "segmented-bar-graph-empty"
        })
      });
    },
    _v541 = ({
      emptyDataMessage: _v0,
      errorMessage: _v1,
      data: _v2,
      isLoading: _v3,
      dimension: _v4,
      metric: _v5,
      hasOtherDataError: _v6,
      highlightedItem: _v7,
      setHighlightedItem: _v8
    }) => {
      let _v9 = (0, _v4.useContext)(_v28.ViewerContext),
        _v10 = (0, _v538.useDashboardColors)(),
        _v11 = (0, _v539.useOtherColor)(),
        [_v12] = (0, _v9.useMediaQuery)(`(min-width: ${_v519.BREAKPOINTS[780]}px)`);
      return _v3 ? (0, _v3.jsx)(_v518.BokehSkeleton, {
        height: "100%",
        width: "100%",
        borderRadius: "0.5rem"
      }) : !_v3 && _v1 ? (0, _v3.jsx)(_v343.Center, {
        flexGrow: "1",
        height: "inherit",
        textAlign: "center",
        children: (0, _v3.jsx)(_v46.Text, {
          color: "text-secondary",
          variant: "body-sm",
          children: _v1
        })
      }) : _v3 || _v1 || _v2?.length ? (0, _v3.jsxs)(_v6.Flex, {
        as: "ol",
        flexDirection: "column",
        gap: _v12 ? "1.25rem" : "0.75rem",
        onMouseLeave: () => _v8?.(null),
        children: [_v2?.map((_v0, _v1) => {
          let _v2 = (0, _v428.default)(_v0, _v4),
            _v3 = (0, _v428.default)(_v0, _v5);
          return (0, _v3.jsxs)(_v6.Flex, {
            as: "li",
            "data-testid": "list-row",
            onMouseEnter: () => _v8?.(_v2),
            justifyContent: "space-between",
            width: "100%",
            gap: "0.5rem",
            opacity: _v7 && _v2 !== _v7 ? .3 : 1,
            children: [(0, _v3.jsxs)(_v5.Box, {
              minWidth: "0",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
              gap: ".5rem",
              children: [(0, _v3.jsx)(_v153.CircleShapeFilled, {
                height: "0.375rem",
                width: "0.375rem",
                color: _v10[_v1] ?? _v11
              }), (0, _v3.jsx)(_v46.Text, {
                variant: "body-md",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "85%",
                title: _v2,
                lineHeight: "1.5",
                children: _v2
              })]
            }), (0, _v3.jsx)(_v46.Text, {
              variant: "heading-xs",
              color: "text-primary",
              lineHeight: "1.5",
              children: _v9 ? (0, _v520.formatDisplayNumber)(_v3, _v9.locale) : "-"
            })]
          }, _v1);
        }), _v6 && (0, _v3.jsxs)(_v6.Flex, {
          justifyContent: "space-between",
          width: "100%",
          gap: "0.5rem",
          children: [(0, _v3.jsxs)(_v5.Box, {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            gap: ".5rem",
            children: [(0, _v3.jsx)(_v153.CircleShapeFilled, {
              height: "0.375rem",
              width: "0.375rem",
              color: "grayscale.500"
            }), (0, _v3.jsx)(_v46.Text, {
              color: "text-secondary",
              variant: "body-md",
              children: _v537.other
            })]
          }), (0, _v3.jsx)(_v347.CircleExclamation, {
            height: "1rem",
            width: "1rem",
            color: "status-destructive-primary"
          })]
        })]
      }) : (0, _v3.jsx)(_v343.Center, {
        flexGrow: "1",
        height: "inherit",
        children: (0, _v3.jsx)(_v46.Text, {
          color: "text-secondary",
          variant: "body-sm",
          children: _v0
        })
      });
    },
    _v542 = ({
      emptyDataMessage: _v0,
      errorMessage: _v1,
      data: _v2,
      dimensionLabel: _v3,
      dimension: _v4,
      metricLabel: _v5,
      metric: _v6,
      isLoading: _v7,
      hasOtherDataError: _v8,
      highlightedItem: _v9,
      setHighlightedItem: _v10,
      onMouseEnter: _v11,
      onMouseLeave: _v12
    }) => (0, _v3.jsxs)(_v6.Flex, {
      height: "100%",
      overflow: "hidden",
      direction: "column",
      cursor: "default",
      minWidth: "11.25rem",
      gap: "1rem",
      children: [(0, _v3.jsxs)(_v5.Box, {
        display: "flex",
        justifyContent: "space-between",
        children: [(0, _v3.jsx)(_v46.Text, {
          color: "text-secondary",
          variant: "body-sm",
          children: _v3
        }), (0, _v3.jsx)(_v46.Text, {
          color: "text-secondary",
          variant: "body-sm",
          children: _v5
        })]
      }), (0, _v3.jsx)(_v5.Box, {
        height: "100%",
        onMouseEnter: _v11,
        onMouseLeave: _v12,
        children: (0, _v3.jsx)(_v541, {
          emptyDataMessage: _v0,
          errorMessage: _v1,
          data: _v2,
          isLoading: _v7,
          dimension: _v4,
          metric: _v6,
          hasOtherDataError: _v8,
          highlightedItem: _v9,
          setHighlightedItem: _v10
        })
      })]
    }),
    _v543 = (0, _v426.default)(async () => {
      let {
        Map: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      loading: () => (0, _v3.jsx)(_v518.BokehSkeleton, {
        height: "100%",
        width: "100%",
        borderRadius: "0.5rem"
      })
    }),
    _v544 = ({
      filters: _v0,
      userId: _v1
    }) => {
      let {
          data: _v2,
          error: _v3,
          isLoading: _v4,
          otherDataError: _v5
        } = ((_v0, _v1) => {
          let {
              startDate: _v2,
              endDate: _v3,
              filterLists: _v4
            } = _v1,
            _v5 = _v2.toISO(),
            _v6 = _v3.toISO(),
            _v7 = (0, _v4.useMemo)(() => (0, _v515.getFiltersObject)(_v4), [_v4]),
            {
              isOrionLoading: _v8,
              queryParam: _v9
            } = (0, _v338.useAnalyticsFreshness)(),
            {
              data: _v10,
              isLoading: _v11,
              error: _v12
            } = (0, _v193.useGetUserAnalytics)(() => _v8 ? null : {
              select: ["views", "country"],
              where: {
                userId: _v0
              },
              query: {
                from: _v5,
                to: _v6,
                dimension: "country",
                direction: "desc",
                ..._v7,
                sort: "views",
                perPage: 5,
                ..._v9
              }
            }, {
              revalidateOnFocus: !1,
              errorRetryInterval: 0,
              errorRetryCount: 1
            }),
            {
              data: _v13,
              isLoading: _v14,
              error: _v15
            } = (0, _v193.useGetUserAnalytics)(() => _v8 ? null : {
              select: ["views"],
              where: {
                userId: _v0
              },
              query: {
                from: _v5,
                to: _v6,
                dimension: "total",
                ..._v7,
                ..._v9
              }
            }, {
              revalidateOnFocus: !1,
              errorRetryInterval: 0,
              errorRetryCount: 1
            });
          return {
            data: (0, _v4.useMemo)(() => {
              if (_v11 || !_v10) return;
              let _v0 = _v10.data?.filter(_v0 => _v0.views > 0);
              if (_v14 || !_v13?.data?.[0] || _v15) return _v0;
              let _v1 = _v13?.data?.[0].views - _v10?.data?.reduce((_v0, _v1) => _v0 + _v1.views, 0);
              return _v1 < 1 ? _v0 : [..._v0, {
                country: {
                  code: "XX",
                  name: _v537.other
                },
                views: _v1
              }];
            }, [_v10, _v11, _v14, _v13, _v15]),
            isLoading: _v11,
            error: _v12,
            otherDataError: _v15
          };
        })(_v1, _v0),
        {
          sendEvent: _v6
        } = (0, _v505.useAnalyticsEvents)(),
        [_v7] = (0, _v9.useMediaQuery)(`(min-width: ${_v519.BREAKPOINTS[780]}px)`),
        [_v8, _v9] = (0, _v4.useState)(null);
      return (0, _v3.jsx)(_v524.Widget, {
        header: {
          to: "/analytics/region",
          title: _v537.topRegions,
          bpTarget: "Region Report"
        },
        name: _v517.WidgetName.ANALYTICS_REGION,
        children: (0, _v3.jsxs)(_v5.Box, {
          display: "grid",
          gridTemplateRows: _v7 ? "unset" : "auto",
          flexGrow: "1",
          height: "100%",
          gap: _v7 ? "1.5rem" : "",
          gridTemplateColumns: _v7 ? "2fr 1fr" : "",
          children: [_v4 ? (0, _v3.jsxs)(_v6.Flex, {
            direction: "column",
            minHeight: "8.75rem",
            gap: "0.5rem",
            children: [(0, _v3.jsx)(_v518.BokehSkeleton, {
              height: "100%",
              width: "100%",
              borderRadius: "0.5rem"
            }), (0, _v3.jsx)(_v518.BokehSkeleton, {
              height: "0.5rem",
              width: "100%",
              borderRadius: "0.5rem"
            })]
          }) : (0, _v3.jsxs)(_v6.Flex, {
            height: "100%",
            paddingBottom: _v7 ? "0" : "0.75rem",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "0.5rem",
            children: [(0, _v3.jsx)(_v543, {
              topCountries: _v2,
              highlightedRegion: _v8,
              setHighlightedRegion: _v9,
              onMouseEnter: () => (0, _v517.sendRegionMapHoverEvent)(_v6)
            }), (0, _v3.jsx)(_v540, {
              data: _v2,
              dataKey: "views",
              isLoading: _v4,
              hasError: !!_v3,
              tooltipLabel: _v0 => _v0?.country?.name,
              highlightedSection: _v8,
              setHighlightedSection: _v9,
              onMouseEnter: () => (0, _v517.sendRegionSegmentedBarGraphHoverEvent)(_v6)
            })]
          }), (0, _v3.jsx)(_v542, {
            emptyDataMessage: _v537.emptyRegionData,
            errorMessage: !!_v3 && _v537.error,
            data: _v2,
            dimensionLabel: _v537.location,
            dimension: "country.name",
            metricLabel: _v537.views,
            metric: "views",
            isLoading: _v4,
            hasOtherDataError: !!_v5,
            highlightedItem: _v2?.find(_v0 => _v0.country.code === _v8)?.country.name,
            setHighlightedItem: _v0 => _v9(_v2?.find(_v0 => _v0.country.name === _v0)?.country.code ?? null),
            onMouseEnter: () => (0, _v517.sendRegionListHoverEvent)(_v6)
          })]
        })
      });
    };
  var _v545 = _v0.i(0);
  let _v546 = (0, _v426.default)(async () => {
      let {
        PieChart: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      loading: () => (0, _v3.jsx)(_v518.BokehSkeleton, {
        height: "100%",
        width: "100%",
        borderRadius: "0.5rem"
      })
    }),
    _v547 = ({
      filters: _v0,
      userId: _v1
    }) => {
      let {
          data: _v2,
          error: _v3,
          isLoading: _v4,
          otherDataError: _v5,
          totalViews: _v6
        } = ((_v0, _v1) => {
          let {
              startDate: _v2,
              endDate: _v3,
              filterLists: _v4
            } = _v1,
            _v5 = _v2.toISO(),
            _v6 = _v3.toISO(),
            _v7 = (0, _v4.useMemo)(() => (0, _v515.getFiltersObject)(_v4), [_v4]),
            {
              isOrionLoading: _v8,
              queryParam: _v9
            } = (0, _v338.useAnalyticsFreshness)(),
            {
              data: _v10,
              isLoading: _v11,
              error: _v12
            } = (0, _v193.useGetUserAnalytics)(() => _v8 ? null : {
              select: ["embedDomain", "views"],
              where: {
                userId: _v0
              },
              query: {
                from: _v5,
                to: _v6,
                dimension: "embed_domain",
                direction: "desc",
                ..._v7,
                sort: "views",
                perPage: 5,
                ..._v9
              }
            }, {
              revalidateOnFocus: !1,
              errorRetryInterval: 0,
              errorRetryCount: 1
            }),
            {
              data: _v13,
              isLoading: _v14,
              error: _v15
            } = (0, _v193.useGetUserAnalytics)(() => _v8 ? null : {
              select: ["views"],
              where: {
                userId: _v0
              },
              query: {
                from: _v5,
                to: _v6,
                dimension: "total",
                ..._v7,
                ..._v9
              }
            }, {
              revalidateOnFocus: !1,
              errorRetryInterval: 0,
              errorRetryCount: 1
            });
          return {
            data: (0, _v4.useMemo)(() => {
              if (_v11 || !_v10) return;
              let _v0 = _v10.data?.filter(_v0 => _v0.views > 0);
              if (_v14 || !_v13?.data?.[0] || _v15) return _v0;
              let _v1 = _v13?.data?.[0]?.views - _v10?.data?.reduce((_v0, _v1) => _v0 + _v1.views, 0);
              return _v1 < 1 ? _v0 : [..._v0, {
                embedDomain: _v545.translations.other,
                views: _v1
              }];
            }, [_v10, _v11, _v14, _v13, _v15]),
            isLoading: _v11,
            error: _v12,
            otherDataError: _v15,
            totalViews: _v13?.data?.[0]?.views
          };
        })(_v1, _v0),
        {
          sendEvent: _v7
        } = (0, _v505.useAnalyticsEvents)(),
        [_v8] = (0, _v9.useMediaQuery)(`(min-width: ${_v519.BREAKPOINTS[780]}px)`),
        [_v9, _v10] = (0, _v4.useState)(void 0);
      return (0, _v3.jsx)(_v524.Widget, {
        header: {
          to: "/analytics/source",
          title: _v545.translations.topSources,
          bpTarget: "Source Report"
        },
        name: _v517.WidgetName.ANALYTICS_SOURCE,
        children: (0, _v3.jsxs)(_v5.Box, {
          display: "grid",
          height: "100%",
          gridTemplateRows: _v8 ? "unset" : "auto",
          gridTemplateColumns: _v8 ? "1fr 1fr" : "",
          gap: _v8 ? "1.5rem" : "",
          children: [(0, _v3.jsx)(_v546, {
            data: _v2,
            dataKey: "views",
            isLoading: _v4,
            hasError: !!_v3,
            totalViews: _v6,
            activeIndex: _v9,
            setActiveIndex: _v10
          }), (0, _v3.jsx)(_v542, {
            emptyDataMessage: _v545.translations.emptySourceData,
            data: _v2,
            dimensionLabel: _v545.translations.source,
            dimension: "embedDomain",
            metricLabel: _v545.translations.views,
            metric: "views",
            errorMessage: !!_v3 && _v545.translations.error,
            isLoading: _v4,
            hasOtherDataError: !!_v5,
            onMouseEnter: () => (0, _v517.sendSourceListHoverEvent)(_v7),
            onMouseLeave: () => _v10(void 0),
            highlightedItem: void 0 !== _v9 ? _v2?.[_v9]?.embedDomain : null,
            setHighlightedItem: _v0 => _v10(_v2?.findIndex(_v0 => _v0.embedDomain === _v0))
          })]
        })
      });
    },
    _v548 = ["metadata.connections.video.title", "metadata.connections.video.duration", "metadata.connections.video.uri", "metadata.connections.video.createdTime", "metadata.connections.video.manageLink", "views"],
    _v549 = (0, _v30.translate)({
      singular: "Top videos",
      dictionary: {
        es: {
          singular: "Videos destacados"
        },
        "de-DE": {
          singular: "Top-Videos"
        },
        "fr-FR": {
          singular: "Meilleures vidéos"
        },
        "ja-JP": {
          singular: "トップ動画"
        },
        "ko-KR": {
          singular: "인기 동영상"
        },
        "pt-BR": {
          singular: "Vídeos destacados"
        },
        "zh-CN": {
          singular: "热门视频"
        }
      }
    });
  (0, _v30.translate)({
    singular: "View all video data",
    dictionary: {
      es: {
        singular: "Ver todos los datos de video"
      },
      "de-DE": {
        singular: "Alle Videodaten anzeigen"
      },
      "fr-FR": {
        singular: "Voir toutes les données vidéo"
      },
      "ja-JP": {
        singular: "すべての動画データを見る"
      },
      "ko-KR": {
        singular: "모든 동영상 데이터 보기"
      },
      "pt-BR": {
        singular: "Exibir todos os dados de vídeo"
      },
      "zh-CN": {
        singular: "查看所有视频数据"
      }
    }
  });
  let _v550 = (0, _v30.translate)({
      singular: "Video",
      dictionary: {
        "fr-FR": {
          singular: "Vidéo"
        },
        "ja-JP": {
          singular: "動画"
        },
        "ko-KR": {
          singular: "동영상"
        },
        "pt-BR": {
          singular: "Vídeo"
        },
        "zh-CN": {
          singular: "视频"
        }
      }
    }),
    _v551 = (0, _v30.translate)({
      singular: "Views",
      dictionary: {
        es: {
          singular: "Vistas"
        },
        "de-DE": {
          singular: "Ansichten"
        },
        "fr-FR": {
          singular: "Vues"
        },
        "ja-JP": {
          singular: "視聴数"
        },
        "ko-KR": {
          singular: "조회 수"
        },
        "pt-BR": {
          singular: "Visualizações"
        },
        "zh-CN": {
          singular: "观看量"
        }
      }
    }),
    _v552 = (0, _v30.translate)({
      singular: "No data to show yet",
      dictionary: {
        es: {
          singular: "Aún no hay datos que mostrar"
        },
        "de-DE": {
          singular: "Noch keine Daten vorhanden"
        },
        "fr-FR": {
          singular: "Aucune donnée n’est encore disponible"
        },
        "ja-JP": {
          singular: "表示するデータはまだありません"
        },
        "ko-KR": {
          singular: "아직 표시할 데이터가 없습니다."
        },
        "pt-BR": {
          singular: "Ainda não há dados para mostrar"
        },
        "zh-CN": {
          singular: "暂无数据可显示"
        }
      }
    }),
    _v553 = _v0 => (0, _v30.translate)({
      singular: "Uploaded {DATE}",
      replacements: {
        DATE: _v21.DateTime.fromISO(_v0, {
          setZone: !0
        }).toLocaleString(_v21.DateTime.DATE_MED)
      },
      dictionary: {
        es: {
          singular: "Subido {DATE}"
        },
        "de-DE": {
          singular: "Hochgeladen {DATE}"
        },
        "fr-FR": {
          singular: "Mise en ligne {DATE}"
        },
        "ja-JP": {
          singular: "{DATE} アップロード済み"
        },
        "ko-KR": {
          singular: "{DATE} 업로드"
        },
        "pt-BR": {
          singular: "Carregou {DATE}"
        },
        "zh-CN": {
          singular: "{DATE} 已上传"
        }
      }
    });
  var _v554 = _v0.i(0),
    _v555 = _v0.i(0);
  let _v556 = ({
      duration: _v0,
      src: _v1,
      isLoading: _v2,
      hasError: _v3
    }) => {
      let _v4 = (0, _v152.useColorModeValue)("grayscale.100", "grayscale.700");
      return _v2 ? (0, _v3.jsx)(_v518.BokehSkeleton, {
        height: "100%",
        width: "100%",
        borderRadius: "0.5rem"
      }) : !_v2 && _v3 ? (0, _v3.jsx)(_v6.Flex, {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        bg: _v4,
        children: (0, _v3.jsx)(_v347.CircleExclamation, {
          color: "text-secondary"
        })
      }) : (0, _v3.jsx)(_v5.Box, {
        backgroundImage: `url(${_v1 ?? _v555.DEFAULT_VIDEO_AVATAR})`,
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        position: "relative",
        children: _v0 && (0, _v3.jsx)(_v6.Flex, {
          minWidth: "2.188rem",
          height: "1.25rem",
          bg: "rgba(0, 0, 0, 0.9)",
          position: "absolute",
          bottom: "0.125rem",
          right: "0.125rem",
          borderRadius: "0.125rem",
          padding: "0.25rem",
          alignItems: "center",
          justifyContent: "center",
          children: (0, _v3.jsx)(_v46.Text, {
            variant: "body-xl",
            fontSize: "0.625rem",
            fontWeight: "500",
            color: "white",
            children: _v554.Duration.fromObject({
              seconds: _v0
            }).toFormat("mm:ss")
          })
        })
      });
    },
    _v557 = ({
      duration: _v0,
      src: _v1,
      isLoading: _v2,
      hasError: _v3
    }) => (0, _v3.jsx)(_v5.Box, {
      height: "3.375rem",
      width: "6.125rem",
      minWidth: "6.125rem",
      borderRadius: "0.25rem",
      overflow: "hidden",
      children: (0, _v3.jsx)(_v556, {
        duration: _v0,
        src: _v1,
        isLoading: _v2,
        hasError: _v3
      })
    }),
    _v558 = ({
      createdTime: _v0,
      title: _v1,
      metricLabel: _v2,
      metricValue: _v3
    }) => (0, _v3.jsxs)(_v3.Fragment, {
      children: [(0, _v3.jsx)(_v46.Text, {
        variant: "body-xl",
        fontSize: "0.875rem",
        textAlign: "left",
        children: _v1
      }), (0, _v3.jsx)(_v46.Text, {
        variant: "body-xl",
        fontSize: "0.688rem",
        color: "grayscale.200",
        textAlign: "left",
        children: _v553(_v0 || "")
      }), (0, _v3.jsx)(_v5.Box, {
        as: "hr",
        color: "grayscale.700",
        m: "0.5rem 0"
      }), (0, _v3.jsxs)(_v6.Flex, {
        justifyContent: "space-between",
        children: [(0, _v3.jsx)(_v46.Text, {
          variant: "body-xl",
          fontSize: "0.75rem",
          children: _v2
        }), (0, _v3.jsx)(_v46.Text, {
          variant: "body-xl",
          fontSize: "0.75rem",
          fontWeight: "700",
          children: _v3
        })]
      })]
    }),
    _v559 = ({
      data: _v0,
      emptyDataMessage: _v1,
      hasError: _v2,
      hasThumbnailsDataError: _v3,
      isLoading: _v4,
      isThumbnailsDataLoading: _v5,
      metric: _v6,
      metricLabel: _v7,
      thumbnailLinks: _v8,
      onVideoCardClick: _v9,
      onVideoCardMouseEnter: _v10
    }) => {
      let _v11 = (0, _v4.useContext)(_v28.ViewerContext),
        _v12 = (0, _v152.useColorModeValue)("slate.50", "grayscale.800");
      return _v4 ? (0, _v3.jsx)(_v518.BokehSkeleton, {
        height: "100%",
        width: "100%",
        borderRadius: "0.5rem"
      }) : !_v4 && _v2 ? (0, _v3.jsx)(_v521, {}) : _v4 || _v2 || _v0?.length ? (0, _v3.jsx)(_v6.Flex, {
        direction: "column",
        gap: "1.75rem",
        children: _v0?.map((_v0, _v1) => {
          let _v2 = _v0.metadata?.connections.video;
          return _v2 ? (0, _v3.jsx)(_v125.Tooltip, {
            gutter: -6,
            label: (0, _v3.jsx)(_v558, {
              createdTime: _v2.createdTime,
              title: _v2.title,
              metricLabel: _v7,
              metricValue: _v0[_v6]?.toLocaleString()
            }),
            width: "14.313rem",
            placement: "top",
            fontSize: "0.75rem",
            fontWeight: "700",
            children: (0, _v3.jsxs)(_v6.Flex, {
              as: "a",
              gap: "1rem",
              width: "100%",
              position: "relative",
              zIndex: "1",
              role: "group",
              href: `${_v2.manageLink}/analytics`,
              onClick: () => _v9?.(_v2.title),
              onMouseEnter: () => _v10?.(_v2.title),
              children: [(0, _v3.jsx)(_v5.Box, {
                position: "absolute",
                borderRadius: "0.5rem",
                _groupHover: {
                  background: _v12,
                  transition: "0.5s ease-in-out"
                },
                height: "calc(100% + 1rem)",
                width: "calc(100% + 1rem)",
                left: "-0.5rem",
                top: "-0.5rem",
                zIndex: "-1"
              }), (0, _v3.jsx)(_v557, {
                isLoading: _v5,
                hasError: _v3,
                duration: _v2.duration,
                src: _v2.uri && _v8?.[_v2.uri?.split(":")?.[0]]
              }), (0, _v3.jsx)(_v6.Flex, {
                alignItems: "center",
                flex: "auto",
                minWidth: "0",
                children: (0, _v3.jsxs)(_v5.Box, {
                  width: "100%",
                  minWidth: "0",
                  children: [(0, _v3.jsx)(_v46.Text, {
                    variant: "body-xl",
                    fontSize: "0.875rem",
                    color: "text-primary",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: "85%",
                    children: _v2.title
                  }), (0, _v3.jsx)(_v46.Text, {
                    variant: "body-xl",
                    fontSize: "0.688rem",
                    color: "text-secondary",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: "85%",
                    "data-testid": "created-time",
                    children: _v553(_v2.createdTime || "")
                  })]
                })
              }), (0, _v3.jsx)(_v6.Flex, {
                alignItems: "center",
                children: (0, _v3.jsx)(_v46.Text, {
                  variant: "body-xl",
                  fontSize: "0.875rem",
                  fontWeight: "700",
                  "data-testid": "views",
                  children: _v11 ? (0, _v520.formatDisplayNumber)(_v0[_v6], _v11.locale) : "-"
                })
              })]
            })
          }, _v1) : null;
        })
      }) : (0, _v3.jsx)(_v343.Center, {
        flexGrow: "1",
        height: "inherit",
        children: (0, _v3.jsx)(_v46.Text, {
          variant: "body-xl",
          color: "text-secondary",
          fontSize: "0.688rem",
          children: _v1
        })
      });
    },
    _v560 = ({
      filters: _v0,
      userId: _v1
    }) => {
      let {
          data: _v2,
          isLoading: _v3,
          error: _v4,
          thumbnailLinks: _v5,
          isThumbnailsDataLoading: _v6,
          thumbnailsDataError: _v7
        } = ((_v0, _v1) => {
          let {
              startDate: _v2,
              endDate: _v3,
              filterLists: _v4
            } = _v1,
            _v5 = (0, _v4.useMemo)(() => (0, _v515.getFiltersObject)(_v4), [_v4]),
            {
              isOrionLoading: _v6,
              queryParam: _v7
            } = (0, _v338.useAnalyticsFreshness)(),
            {
              data: _v8,
              isLoading: _v9,
              error: _v10
            } = (0, _v193.useGetUserAnalytics)(() => _v6 ? null : {
              select: _v548,
              where: {
                userId: _v0
              },
              query: {
                from: _v2.toISO(),
                to: _v3.toISO(),
                dimension: "video",
                direction: "desc",
                ..._v5,
                sort: "views",
                perPage: 8,
                ..._v7
              }
            }, {
              revalidateOnFocus: !1,
              errorRetryInterval: 0,
              errorRetryCount: 1
            }),
            _v11 = _v8?.data?.filter(_v0 => _v0.views > 0).slice(0, 3) ?? [],
            _v12 = _v11.map(_v0 => _v0.metadata.connections.video.uri),
            {
              data: _v13,
              isLoading: _v14,
              error: _v15
            } = (0, _v491.useGetVideos)(() => _v9 || _v11.length < 1 ? null : {
              select: ["pictures.sizes.link", "uri"],
              query: {
                sizes: "200",
                uris: _v12.join(","),
                userId: _v0
              }
            });
          return {
            data: _v11,
            isLoading: _v9,
            error: _v10,
            thumbnailLinks: (0, _v4.useMemo)(() => _v13?.data.reduce((_v0, _v1) => ({
              ..._v0,
              [_v1.uri]: _v1.pictures?.sizes?.[0]?.link
            }), {}), [_v13]),
            isThumbnailsDataLoading: _v14,
            thumbnailsDataError: _v15
          };
        })(_v1, _v0),
        {
          sendEvent: _v8
        } = (0, _v505.useAnalyticsEvents)();
      return (0, _v3.jsx)(_v524.Widget, {
        header: {
          to: "/analytics/video",
          title: _v549,
          bpTarget: "Video Report"
        },
        name: _v517.WidgetName.ANALYTICS_TOP_VIDEOS,
        children: (0, _v3.jsxs)(_v6.Flex, {
          height: "100%",
          direction: "column",
          gap: "1rem",
          children: [(0, _v3.jsxs)(_v6.Flex, {
            justifyContent: "space-between",
            children: [(0, _v3.jsx)(_v46.Text, {
              color: "text-secondary",
              variant: "body-sm",
              children: _v550
            }), (0, _v3.jsx)(_v46.Text, {
              color: "text-secondary",
              variant: "body-sm",
              children: _v551
            })]
          }), (0, _v3.jsx)(_v5.Box, {
            height: "100%",
            children: (0, _v3.jsx)(_v559, {
              data: _v2,
              emptyDataMessage: _v552,
              hasError: !!_v4,
              hasThumbnailsDataError: !!_v7,
              isLoading: _v3,
              isThumbnailsDataLoading: _v6,
              metric: "views",
              metricLabel: _v551,
              thumbnailLinks: _v5,
              onVideoCardClick: _v0 => (0, _v517.sendVideosCardClickEvent)(_v8, _v0),
              onVideoCardMouseEnter: _v0 => (0, _v517.sendVideosCardHoverEvent)(_v8, _v0)
            })
          })]
        })
      });
    };
  function _v561(_v0) {
    let {
        state: _v1,
        dispatch: _v2
      } = _v0,
      [_v3] = (0, _v9.useMediaQuery)("(min-width: 780px)"),
      [_v4] = (0, _v9.useMediaQuery)("(min-width: 1040px)");
    return (0, _v4.useEffect)(() => {
      _v2({
        type: _v299.REPORT_ACTION_TYPE.UPDATE_LOADING_STATE,
        payload: !1
      });
    }, [_v2]), (0, _v3.jsx)(_v5.Box, {
      width: "100%",
      children: (0, _v3.jsx)(_v5.Box, {
        marginX: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: {
          base: "flex-start",
          lg: "center"
        },
        children: (0, _v3.jsxs)(_v6.Flex, {
          maxWidth: "87.5rem",
          margin: "0 1.5rem 1.5rem 1.5rem",
          width: "calc(100% - 3rem)",
          gap: _v3 ? "1.5rem" : "1rem",
          flexDirection: "column",
          children: [(0, _v3.jsx)(_v404, {
            reportType: _v299.Reports.DASHBOARD,
            title: _v179.REPORT_NAME_DISPLAY_MAP[_v179.REPORT_TYPE_DASHBOARD],
            state: _v1,
            dispatch: _v2,
            reportFilters: _v457,
            calendarPresets: _v179.CALENDAR_PRESETS.dashboard,
            marginX: 0,
            showFilterPanel: !0
          }), (0, _v3.jsx)(_v533, {
            filters: _v1.filters[_v1.reportGroup],
            metrics: ["views", "uniqueViewers", "totalTimeWatched"],
            userId: _v1.userInUse.id
          }), (0, _v3.jsx)(_v536.Overview, {
            filters: _v1.filters[_v1.reportGroup],
            userId: _v1.userInUse.id
          }), (0, _v3.jsxs)(_v6.Flex, {
            flexDirection: "column",
            gap: _v3 ? "1.5em" : "1rem",
            display: _v4 ? "grid" : "inherit",
            gridTemplateColumns: _v4 ? "2fr 1fr" : "none",
            children: [(0, _v3.jsx)(_v544, {
              filters: _v1.filters[_v1.reportGroup],
              userId: _v1.userInUse.id
            }), (0, _v3.jsx)(_v525, {
              filters: _v1.filters[_v1.reportGroup],
              userId: _v1.userInUse.id
            })]
          }), (0, _v3.jsxs)(_v6.Flex, {
            flexDirection: "column",
            gap: _v3 ? "1.5em" : "1rem",
            display: _v4 ? "grid" : "inherit",
            gridTemplateColumns: _v4 ? "repeat(2, minmax(0, 1fr))" : "none",
            children: [(0, _v3.jsx)(_v547, {
              filters: _v1.filters[_v1.reportGroup],
              userId: _v1.userInUse.id
            }), (0, _v3.jsx)(_v560, {
              filters: _v1.filters[_v1.reportGroup],
              userId: _v1.userInUse.id
            })]
          })]
        })
      })
    });
  }
  var _v562 = _v0.i(0),
    _v563 = _v0.i(0);
  let _v564 = ({
      value: _v0,
      isActive: _v1,
      isPrimary: _v2,
      expansionStatus: _v3,
      isExpandable: _v4,
      onExpand: _v5,
      refinementCount: _v6,
      isUnknown: _v7
    }) => {
      let _v8 = (0, _v563.useTheme)(),
        _v9 = (0, _v3.jsx)(_v46.Text, {
          variant: "body-md",
          textColor: _v1 ? "text-primary" : "text-secondary",
          noOfLines: 1,
          wordBreak: "break-all",
          _hover: _v1 ? _v8?.textStyles?.["heading-xs"] ?? {} : {},
          _groupHover: _v1 ? _v8?.textStyles?.["heading-xs"] ?? {} : {},
          children: _v0
        });
      if (!_v4 && _v2 && 0 === _v6) return _v9;
      let _v10 = _v7 ?? ("" === _v0 || "Unknown" === _v0);
      return (0, _v3.jsx)(_v565, {
        expansionStatus: _v3,
        isExpandable: !_v10 && _v4 && _v1,
        onClick: _v5,
        indent: _v2 ? _v4 ? _v6 : _v6 - 1 : void 0,
        children: _v9
      });
    },
    _v565 = ({
      children: _v0,
      expansionStatus: _v1,
      isExpandable: _v2 = !0,
      indent: _v3 = 0,
      onClick: _v4
    }) => (0, _v3.jsxs)(_v6.Flex, {
      marginLeft: `calc(${_v3} * 1.75rem)`,
      width: "fit-content",
      gap: "sm",
      alignItems: "center",
      role: "group",
      cursor: _v2 ? "pointer" : void 0,
      onClick: _v2 ? _v4 : void 0,
      children: [(0, _v3.jsx)(_v5.Box, {
        minWidth: "1.25rem",
        minHeight: "1.25rem",
        children: _v2 && ("errored" === _v1 ? (0, _v3.jsx)(_v347.CircleExclamation, {
          color: "text-secondary",
          marginBottom: "0.125rem",
          boxSize: "1.25rem"
        }) : "loading" === _v1 ? (0, _v3.jsx)(_v10.Spinner, {
          size: "xs"
        }) : (0, _v3.jsx)(_v306.ChevronRightSmall, {
          boxSize: "1.25rem",
          marginBottom: "0.125rem",
          transition: "transform 0.1s ease-in-out",
          transformOrigin: "center",
          transform: "expanded" === _v1 ? "rotate(90deg)" : "inherit"
        }))
      }), _v0]
    }),
    _v566 = _v0 => _v0 => (0, _v3.jsx)(_v564, {
      value: _v0,
      ..._v0
    }),
    _v567 = _v0 => _v0 => {
      let _v1 = (0, _v428.default)(_v0.data, _v0);
      return (0, _v3.jsx)(_v564, {
        value: "" === _v1 ? "Unknown" : _v1,
        ..._v0
      });
    },
    _v568 = _v0 => void 0 === _v0 ? void 0 : [_v0],
    _v569 = {
      dimensions: ["audio_track_language"],
      fields: ["audioTrackLanguage"],
      render: _v0 => (0, _v3.jsx)(_v564, {
        value: _v363(_v0.data.audioTrackLanguage),
        ..._v0
      }),
      toFilter: (_v0, _v1) => ({
        ..._v1,
        filterAudioTrackLanguages: _v568(_v0.audioTrackLanguage)
      })
    },
    _v570 = {
      dimensions: ["audio_track_type", "audio_track_provenance"],
      fields: ["audioTrackType", "audioTrackProvenance"],
      render: _v0 => (0, _v3.jsx)(_v564, {
        value: _v365(_v0.data).name,
        ..._v0
      }),
      key: _v0 => `${_v0.audioTrackType}-${_v0.audioTrackProvenance}`
    },
    _v571 = {
      id: "audio_track_column",
      header: _v179.DISPLAY_MAP.audioTrack,
      entrypoint: _v566(_v190.T_ALL_LANGUAGES),
      initialCell: _v569,
      refine: _v0 => {
        if (_v0 === _v569) return _v570;
      }
    };
  var _v572 = _v0.i(0);
  let _v573 = _v0 => {
      let _v1 = (0, _v572.useLocale)();
      return (0, _v3.jsx)(_v564, {
        value: _v0.data.startDate ? _v21.DateTime.fromISO(_v0.data.startDate, {
          zone: "utc"
        }).setLocale(_v1).toLocaleString(_v21.DateTime.DATE_MED) : "",
        ..._v0
      });
    },
    _v574 = {
      id: "date_column",
      header: _v179.DISPLAY_MAP.date,
      isSortable: !0,
      remoteSortOverride: "time",
      entrypoint: _v566(_v190.T_ALL_DATES),
      initialCell: {
        dimensions: ["total"],
        extraParams: {
          timeInterval: "day"
        },
        fields: ["startDate", "endDate"],
        render: _v0 => (0, _v3.jsx)(_v573, {
          ..._v0
        }),
        sort: (_v0, _v1) => void 0 === _v0.data.startDate || void 0 === _v1.data.startDate ? 0 : _v21.DateTime.fromISO(_v0.data.startDate).toSeconds() - _v21.DateTime.fromISO(_v1.data.startDate).toSeconds(),
        toFilter: (_v0, _v1) => ({
          ..._v1,
          from: _v0.startDate ?? _v1.from,
          to: _v0.endDate ?? _v1.to
        })
      }
    },
    _v575 = {
      dimensions: ["device_type"],
      fields: ["deviceType"],
      render: _v0 => (0, _v3.jsx)(_v564, {
        value: _v0.data.deviceType ? _v179.DEVICE_DISPLAY_MAP[_v179.DEVICE_TYPES[_v0.data.deviceType]] : "",
        ..._v0
      }),
      toFilter: (_v0, _v1) => ({
        ..._v1,
        filterDeviceTypes: _v568(_v0.deviceType)
      })
    },
    _v576 = {
      dimensions: ["browser"],
      fields: ["browserName"],
      render: _v567("browserName")
    },
    _v577 = {
      dimensions: ["os"],
      fields: ["osName"],
      render: _v567("osName")
    },
    _v578 = {
      id: "device_column",
      header: _v179.DISPLAY_MAP.device,
      entrypoint: _v566(_v190.T_ALL_DEVICES),
      initialCell: _v575,
      refine: (_v0, _v1) => {
        if (_v0 === _v575) return _v1.deviceType && _v179.DEVICE_TYPES[_v1.deviceType] === _v179.DEVICE_TYPES.desktop ? _v576 : _v577;
      }
    },
    _v579 = {
      dimensions: ["country"],
      fields: ["countryCode", "countryName"],
      render: _v567("countryName"),
      toFilter: (_v0, _v1) => ({
        ..._v1,
        filterCountries: _v568(_v0.countryCode)
      })
    },
    _v580 = {
      dimensions: ["region"],
      fields: ["regionCode", "regionName"],
      render: _v567("regionName"),
      toFilter: (_v0, _v1) => ({
        ..._v1,
        filterRegions: _v568(_v0.regionCode)
      })
    },
    _v581 = {
      dimensions: ["city"],
      fields: ["cityName"],
      render: _v567("cityName")
    },
    _v582 = {
      id: "region_column",
      header: _v179.DISPLAY_MAP.region,
      entrypoint: _v566(_v190.T_ALL_REGIONS),
      initialCell: _v579,
      refine: _v0 => {
        switch (_v0) {
          case _v579:
            return _v580;
          case _v580:
            return _v581;
        }
      }
    },
    _v583 = {
      dimensions: ["embed_domain"],
      fields: ["embedDomain"],
      render: _v567("embedDomain"),
      toFilter: (_v0, _v1) => ({
        ..._v1,
        filterEmbedDomains: _v568(_v0.embedDomain)
      })
    },
    _v584 = {
      dimensions: ["embed_domain_path"],
      fields: ["embedDomainPath"],
      render: _v567("embedDomainPath")
    },
    _v585 = {
      id: "source_column",
      header: _v179.DISPLAY_MAP.source,
      entrypoint: _v566(_v190.T_ALL_SOURCES),
      initialCell: _v583,
      refine: _v0 => {
        if (_v0 === _v583) return _v584;
      }
    },
    _v586 = {
      id: "streaming_type_column",
      header: _v179.DISPLAY_MAP.streamingType,
      entrypoint: _v566(_v190.T_ALL_STREAMING_TYPES),
      initialCell: {
        dimensions: ["streaming_type"],
        fields: ["streamingType"],
        render: _v0 => (0, _v3.jsx)(_v564, {
          value: _v0.data.streamingType ? "live" === _v0.data.streamingType ? _v179.STREAMING_TYPES_DISPLAY_MAP.Live : _v179.STREAMING_TYPES_DISPLAY_MAP.Non_live : "",
          ..._v0
        }),
        toFilter: (_v0, _v1) => ({
          ..._v1,
          filterStreamingTypes: _v568(_v0.streamingType)
        })
      }
    },
    _v587 = {
      dimensions: ["text_track_language"],
      fields: ["textTrackLanguage"],
      render: _v0 => (0, _v3.jsx)(_v564, {
        value: _v363(_v0.data.textTrackLanguage),
        ..._v0
      }),
      toFilter: (_v0, _v1) => ({
        ..._v1,
        filterTextTrackLanguages: _v568(_v0.textTrackLanguage)
      })
    },
    _v588 = {
      dimensions: ["text_track_type", "text_track_provenance"],
      fields: ["textTrackType", "textTrackProvenance"],
      render: _v0 => (0, _v3.jsx)(_v564, {
        value: _v364(_v0.data).name,
        ..._v0
      }),
      key: _v0 => `${_v0.textTrackType}-${_v0.textTrackProvenance}`
    },
    _v589 = {
      id: "text_track_column",
      header: _v179.DISPLAY_MAP.subtitlesAndCaptions,
      entrypoint: _v566(_v190.T_ALL_LANGUAGES),
      initialCell: _v587,
      refine: _v0 => {
        if (_v0 === _v587) return _v588;
      }
    },
    _v590 = ({
      isPrimary: _v0,
      title: _v1,
      thumbnailLink: _v2,
      duration: _v3 = 0,
      manageLink: _v4,
      createdTime: _v5,
      streamedOnTime: _v6
    }) => {
      let _v7 = (0, _v572.useLocale)(),
        _v8 = _v5 ? _v21.DateTime.fromISO(_v5).setLocale(_v7).toLocaleString(_v21.DateTime.DATE_MED) : "",
        _v9 = _v6 ? _v21.DateTime.fromISO(_v6).setLocale(_v7).toLocaleString(_v21.DateTime.DATE_MED) : "",
        _v10 = _v9 ? (0, _v190.T_STREAMED_ON_DATE)(_v9) : _v8 ? (0, _v190.T_UPLOADED_DATE)(_v8) : "";
      return (0, _v3.jsxs)(_v6.Flex, {
        marginTop: _v0 ? "md" : void 0,
        marginBottom: _v0 ? "md" : void 0,
        paddingLeft: _v0 ? void 0 : "1.75rem",
        gap: "0.75rem",
        alignItems: "center",
        title: _v1,
        children: [(0, _v3.jsxs)(_v88.Link, {
          position: "relative",
          href: _v4,
          isExternal: !0,
          children: [(0, _v3.jsx)(_v483.Image, {
            alt: "",
            height: _v0 ? "3.5rem" : "2.5rem",
            width: _v0 ? "6.25rem" : "4.5rem",
            fit: "contain",
            src: _v2,
            borderRadius: _v0 ? "sm" : "0.375rem"
          }), _v0 && (0, _v3.jsx)(_v46.Text, {
            backgroundColor: "background-blur",
            padding: "0.3rem",
            borderRadius: "0.3rem",
            variant: "body-sm",
            position: "absolute",
            bottom: "4px",
            right: "4px",
            children: _v554.Duration.fromObject({
              seconds: _v3
            }).toFormat("mm:ss")
          })]
        }), (0, _v3.jsxs)(_v6.Flex, {
          direction: "column",
          gap: "0.125rem",
          children: [(0, _v3.jsx)(_v88.Link, {
            href: _v4,
            isExternal: !0,
            noOfLines: 1,
            variant: "primary",
            fontSize: "body-md",
            wordBreak: "break-all",
            children: _v1
          }), (0, _v3.jsx)(_v46.Text, {
            noOfLines: 1,
            variant: "body-xs",
            textColor: "text-secondary",
            children: _v10
          })]
        })]
      });
    },
    _v591 = () => (0, _v3.jsxs)(_v6.Flex, {
      gap: "md",
      alignItems: "center",
      children: [(0, _v3.jsx)(_v45.Skeleton, {
        height: "3.5rem",
        width: "6.25rem"
      }), (0, _v3.jsx)(_v45.Skeleton, {
        height: "1.25rem",
        width: "10rem"
      })]
    }),
    _v592 = {
      id: "video_column",
      header: _v179.DISPLAY_MAP.video,
      entrypoint: _v566(_v190.T_ALL_VIDEOS),
      initialCell: {
        dimensions: ["video"],
        fields: ["metadata.connections.video.uri", "metadata.connections.video.title", "metadata.connections.video.manageLink", "metadata.connections.video.duration", "metadata.connections.video.createdTime", "metadata.connections.video.live.streamStartTime", "metadata.connections.video.live.streamEndTime"],
        toFilter: (_v0, _v1) => ({
          ..._v1,
          filterContent: (0, _v428.default)(_v0, "metadata.connections.video.uri")
        }),
        render: _v0 => {
          let _v1 = _v0.data.metadata?.connections?.video;
          return _v0.isActive ? (0, _v3.jsx)(_v590, {
            isPrimary: _v0.isPrimary,
            title: _v1?.title,
            thumbnailLink: _v0.data.thumbnailLink,
            duration: _v1?.duration,
            manageLink: _v1?.manageLink?.concat("/analytics"),
            createdTime: _v1?.createdTime,
            streamedOnTime: _v1?.live?.streamStartTime
          }) : (0, _v3.jsx)(_v3.Fragment, {});
        },
        skeleton: _v591
      }
    },
    _v593 = _v0 => {
      let _v1 = (0, _v563.useTheme)();
      return (0, _v3.jsx)(_v46.Text, {
        variant: "body-md",
        textAlign: "end",
        marginLeft: "auto",
        width: "fit-content",
        _hover: _v1?.textStyles?.["heading-xs"] ?? {},
        style: {
          fontVariantNumeric: "normal"
        },
        children: _v0.children
      });
    },
    _v594 = (_v0, _v1) => _v0 => {
      let _v1 = Number((0, _v428.default)(_v0, _v0)),
        _v2 = isNaN(_v1) || _v1 < 0 ? "-" : _v1(_v1);
      return (0, _v3.jsx)(_v593, {
        children: _v2
      });
    },
    _v595 = _v0 => _v594(_v0, _v0 => _v0.toLocaleString()),
    _v596 = _v0 => _v594(_v0, _v0 => (0, _v471.formatDurationPretty)(_v0)),
    _v597 = {
      metrics: ["views"],
      sort: "views",
      header: _v179.SOCIAL_DISPLAY_MAP.plays,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.plays,
      render: _v595("views")
    },
    _v598 = {
      metrics: ["drmLicensesUsed"],
      sort: "drmLicensesUsed",
      header: _v179.SOCIAL_DISPLAY_MAP.drm_licenses_used,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.drm_licenses_used,
      hideWhenEmpty: !0,
      render: _v595("drmLicensesUsed")
    },
    _v599 = {
      metrics: ["impressions"],
      sort: "impressions",
      header: _v179.SOCIAL_DISPLAY_MAP.loads,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.loads,
      render: _v595("impressions")
    },
    _v600 = {
      metrics: ["thirdPartyImpressions"],
      sort: "thirdPartyImpressions",
      header: _v179.SOCIAL_DISPLAY_MAP.third_party_impressions,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.third_party_impressions,
      hideWhenEmpty: !0,
      render: _v595("thirdPartyImpressions")
    },
    _v601 = {
      metrics: ["uniqueImpressions"],
      sort: "uniqueImpressions",
      header: _v179.SOCIAL_DISPLAY_MAP.unique_loads,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.unique_loads,
      render: _v595("uniqueImpressions")
    },
    _v602 = {
      metrics: ["uniqueViewers"],
      sort: "uniqueViewers",
      header: _v179.SOCIAL_DISPLAY_MAP.unique_viewers,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.uniqueViewers2025,
      render: _v595("uniqueViewers")
    },
    _v603 = {
      metrics: ["totalSecondsWatched"],
      sort: "totalSecondsWatched",
      header: _v179.SOCIAL_DISPLAY_MAP.totalviewduration,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.totalviewduration,
      render: _v596("totalSecondsWatched")
    },
    _v604 = {
      metrics: ["meanSecondsWatched"],
      sort: "meanSecondsWatched",
      header: _v179.SOCIAL_DISPLAY_MAP.averageviewduration,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.averageviewduration,
      render: _v596("meanSecondsWatched")
    },
    _v605 = {
      metrics: ["meanPercentWatched"],
      sort: "meanPercentWatched",
      header: _v179.SOCIAL_DISPLAY_MAP.averageviewpercentage,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.averageviewpercentage,
      render: _v594("meanPercentWatched", _v0 => (_v0 / 100).toLocaleString(void 0, {
        style: "percent"
      }))
    },
    _v606 = {
      metrics: ["finishes"],
      sort: "finishes",
      header: _v179.SOCIAL_DISPLAY_MAP.finishes,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.finishes,
      render: _v595("finishes")
    },
    _v607 = {
      metrics: ["downloads"],
      sort: "downloads",
      header: _v179.SOCIAL_DISPLAY_MAP.downloads,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.downloads,
      render: _v595("downloads")
    },
    _v608 = {
      metrics: ["metadata.connections.video.likes"],
      sort: "metadata.connections.video.likes",
      header: _v179.SOCIAL_DISPLAY_MAP.likes,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.likes,
      render: _v595("metadata.connections.video.likes")
    },
    _v609 = {
      metrics: ["metadata.connections.video.comments"],
      sort: "metadata.connections.video.comments",
      header: _v179.SOCIAL_DISPLAY_MAP.comments,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.comments,
      render: _v595("metadata.connections.video.comments")
    },
    _v610 = {
      metrics: ["uniqueViews"],
      sort: "uniqueViews",
      header: _v179.SOCIAL_DISPLAY_MAP.plays,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.uniqueViews,
      render: _v595("uniqueViews")
    },
    _v611 = {
      metrics: ["totalSecondsWatchedIncludingRepeats"],
      sort: "totalSecondsWatchedIncludingRepeats",
      header: _v179.SOCIAL_DISPLAY_MAP.totalTimeWatchedInclRepeats,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.totalTimeWatchedInclRepeats,
      render: _v594("totalSecondsWatchedIncludingRepeats", _v471.formatDuration)
    },
    _v612 = {
      metrics: ["thumbsWidgetClicks"],
      sort: "thumbsWidgetClicks",
      header: _v179.SOCIAL_DISPLAY_MAP.totalThumbsVotes,
      render: _v595("thumbsWidgetClicks")
    },
    _v613 = {
      metrics: ["thumbsUpClicks"],
      sort: "thumbsUpClicks",
      header: _v179.SOCIAL_DISPLAY_MAP.totalThumbsUpVotes,
      render: _v595("thumbsUpClicks")
    },
    _v614 = {
      metrics: ["thumbsDownClicks"],
      sort: "thumbsDownClicks",
      header: _v179.SOCIAL_DISPLAY_MAP.totalThumbsDownVotes,
      render: _v595("thumbsDownClicks")
    },
    _v615 = {
      metrics: ["thumbsWidgetAverageRating"],
      sort: "thumbsWidgetAverageRating",
      header: _v179.SOCIAL_DISPLAY_MAP.avgThumbsRating,
      render: _v595("thumbsWidgetAverageRating")
    },
    _v616 = {
      metrics: ["rankingWidgetClicks"],
      sort: "rankingWidgetClicks",
      header: _v179.SOCIAL_DISPLAY_MAP.totalStarsVotes,
      render: _v595("rankingWidgetClicks")
    },
    _v617 = {
      metrics: ["oneStarClicks"],
      sort: "oneStarClicks",
      header: _v179.SOCIAL_DISPLAY_MAP.totalOneStarVotes,
      render: _v595("oneStarClicks")
    },
    _v618 = {
      metrics: ["twoStarClicks"],
      sort: "twoStarClicks",
      header: _v179.SOCIAL_DISPLAY_MAP.totalTwoStarVotes,
      render: _v595("twoStarClicks")
    },
    _v619 = {
      metrics: ["threeStarClicks"],
      sort: "threeStarClicks",
      header: _v179.SOCIAL_DISPLAY_MAP.totalThreeStarVotes,
      render: _v595("threeStarClicks")
    },
    _v620 = {
      metrics: ["fourStarClicks"],
      sort: "fourStarClicks",
      header: _v179.SOCIAL_DISPLAY_MAP.totalFourStarVotes,
      render: _v595("fourStarClicks")
    },
    _v621 = {
      metrics: ["fiveStarClicks"],
      sort: "fiveStarClicks",
      header: _v179.SOCIAL_DISPLAY_MAP.totalFiveStarVotes,
      render: _v595("fiveStarClicks")
    },
    _v622 = {
      metrics: ["rankingWidgetAverageRating"],
      sort: "rankingWidgetAverageRating",
      header: _v179.SOCIAL_DISPLAY_MAP.avgStarsRating,
      render: _v595("rankingWidgetAverageRating")
    },
    _v623 = [_v597, _v605, _v606],
    _v624 = [_v597, _v598, _v599, _v600, _v601, _v602, _v603, _v604, _v605, _v606, _v607],
    _v625 = [_v610, _v602, _v611],
    _v626 = [_v612, _v613, _v614, _v615, _v616, _v617, _v618, _v619, _v620, _v621, _v622],
    _v627 = {
      revalidateOnFocus: !1,
      revalidateIfStale: !1,
      errorRetryInterval: 0,
      errorRetryCount: 1
    },
    _v628 = (_v0, _v1, _v2, _v3, _v4, _v5) => {
      let {
          isOrionLoading: _v6,
          queryParam: _v7
        } = (0, _v338.useAnalyticsFreshness)(),
        _v8 = (0, _v4.useMemo)(() => void 0 === _v4 ? void 0 : {
          select: _v4.flatMap(_v0 => _v0.metrics).concat(_v3.initialCell.fields),
          where: {
            userId: _v0
          },
          query: {
            from: _v1.startDate.toISO(),
            to: _v1.endDate.toISO(),
            dimensions: _v3.initialCell.dimensions,
            direction: "desc",
            sort: _v2,
            perPage: 50,
            ...(0, _v367.getFiltersObject)(_v458, _v1.filterLists),
            dimension: "country",
            ..._v3.initialCell.extraParams
          }
        }, [_v1, _v4, _v3, _v2, _v0]),
        {
          data: _v9,
          isValidating: _v10,
          error: _v11,
          setSize: _v12
        } = (0, _v193.useGetUserAnalyticsInfinite)(() => _v6 || !_v8 ? null : {
          ..._v8,
          query: {
            ..._v8.query,
            ..._v7
          }
        }, {
          ..._v627,
          revalidateFirstPage: !1
        }),
        _v13 = (0, _v4.useMemo)(() => _v9?.flatMap(_v0 => _v0.data), [_v9]),
        {
          rows: _v14,
          thumbnailsLoading: _v15
        } = _v629({
          expandedColumn: _v3,
          fetchOptions: _v8,
          dimensionToFetch: _v3.initialCell,
          data: _v13,
          localSort: _v5
        });
      return {
        rows: _v14,
        _analyticsData: _v13,
        isLoading: _v10 || _v15,
        isError: !!_v11,
        hasNextPage: (0, _v4.useMemo)(() => !!_v9?.[_v9.length - 1]?.paging?.next, [_v9]),
        loadNextPage: () => _v12(_v0 => _v0 + 1),
        exportLink: _v14?.length > 0 ? _v9?.[0]?.exportLink : void 0
      };
    },
    _v629 = ({
      expandedColumn: _v0,
      dimensionColumnCells: _v1,
      data: _v2,
      fetchOptions: _v3,
      dimensionToFetch: _v4,
      localSort: _v5
    }) => {
      let {
        thumbnails: _v6,
        isLoading: _v7
      } = _v631(_v3?.where.userId, _v2);
      return {
        rows: (0, _v4.useMemo)(() => {
          if (void 0 === _v2 || void 0 === _v3 || void 0 === _v4 || void 0 === _v6 && _v7) return;
          let _v0 = _v1?.[_v0.id]?.refinementCount ?? -1;
          return _v2.map(_v0 => {
            let _v1 = _v0.metadata?.connections?.video?.uri?.split(":")?.[0];
            return {
              ..._v0,
              thumbnailLink: void 0 !== _v1 ? _v6?.[_v1] : void 0
            };
          }).filter(_v0 => void 0 === _v6 || void 0 !== _v0.thumbnailLink).map(_v0 => ({
            key: _v4.key?.(_v0) ?? (0, _v428.default)(_v0, _v4.fields[0]),
            fetchOptions: _v3,
            dimension: _v4,
            data: _v0,
            dimensionColumnCells: {
              ..._v1,
              [_v0.id]: {
                dimension: _v4,
                refinesTo: _v0.refine?.(_v4, _v0),
                data: _v0,
                refinementCount: _v0 + 1
              }
            }
          })).sort(_v5 ?? (() => 0));
        }, [_v2, _v1, _v4, _v0, _v3, _v5, _v6, _v7]),
        thumbnailsLoading: _v7
      };
    },
    _v630 = (_v0, _v1) => {
      switch (_v1.type) {
        case "toggle_expand":
          return {
            ..._v0,
            [_v1.id]: "collapsed" === _v0[_v1.id] || void 0 === _v0[_v1.id] ? "expanded" : "expanded" === _v0[_v1.id] ? "collapsed" : _v0[_v1.id]
          };
        case "load":
          return {
            ..._v0,
            [_v1.id]: "loading"
          };
        case "finish_load":
          return {
            ..._v0,
            [_v1.id]: "loading" === _v0[_v1.id] ? "expanded" : _v0[_v1.id]
          };
        case "error":
          return {
            ..._v0,
            [_v1.id]: "errored"
          };
      }
    },
    _v631 = (_v0, _v1) => {
      let [_v2, _v3] = (0, _v4.useState)(),
        [_v4, _v5] = (0, _v4.useState)(),
        _v6 = (0, _v4.useMemo)(() => _v1?.map(_v0 => _v0?.metadata?.connections?.video?.uri).filter(_v0 => void 0 !== _v0 && _v4?.[_v0] === void 0).sort().join(","), [_v1, _v4]),
        {
          data: _v7,
          isLoading: _v8
        } = (0, _v491.useGetVideos)(() => _v6 && _v0 ? {
          select: ["pictures.sizes", "uri"],
          query: {
            uris: _v6,
            userId: _v0
          }
        } : null, _v627);
      return _v6 !== _v2 && void 0 !== _v7 && (_v3(_v6), _v5(_v0 => ({
        ..._v0,
        ...Object.fromEntries(_v7.data.filter(_v0 => _v0?.[_v0.uri] === void 0).map(_v0 => {
          let _v1 = _v0.pictures?.sizes[2] ?? _v0.pictures?.sizes.at(-1);
          return [_v0.uri, _v1?.link ?? "https://i.vimeocdn.com/video/default_227x128?v=1&r=pad"];
        }))
      }))), {
        thumbnails: _v4,
        isLoading: _v8
      };
    },
    _v632 = ({
      primaryDimensionColumn: _v0,
      metricColumns: _v1,
      graphField: _v2
    }) => {
      let [_v3, _v4] = (0, _v4.useState)(_v2),
        [_v5, _v6] = (0, _v4.useState)(() => _v0.isSortable ? _v0 : _v1?.find(_v0 => _v0.sort === _v2)),
        [_v7, _v8] = (0, _v4.useState)("desc");
      _v3 !== _v2 && (_v4(_v2), _v6(_v1?.find(_v0 => _v0.sort === _v2)));
      let _v9 = (0, _v60.intoSnakeCase)(_v2),
        _v10 = _v0.remoteSortOverride ?? _v9,
        _v11 = (0, _v4.useCallback)((_v0, _v1) => {
          if (void 0 === _v5) return 0;
          let _v2 = "initialCell" in _v5 ? _v0.dimensionColumnCells[_v5.id]?.dimension.sort?.(_v0, _v1) ?? 0 : _v0.data[_v5.sort] - _v1.data[_v5.sort];
          return "asc" === _v7 ? _v2 : -1 * _v2;
        }, [_v5, _v7]),
        _v12 = (0, _v4.useCallback)(_v0 => {
          _v0 === _v5 ? _v8("asc" === _v7 ? "desc" : "asc") : (_v6(_v0), _v8("desc"));
        }, [_v5, _v7]);
      return {
        column: _v5,
        direction: _v7,
        remote: _v10,
        sortFn: _v11,
        setColumn: _v12
      };
    },
    _v633 = ["filter_audio_track_languages", "filter_audio_track_types_and_provenances", "filter_text_track_languages", "filter_text_track_types_and_provenances"],
    _v634 = [_v571, _v589],
    _v635 = (_v0, _v1, _v2, _v3, _v4, _v5) => {
      let {
          isOrionLoading: _v6,
          queryParam: _v7
        } = (0, _v338.useAnalyticsFreshness)(),
        _v8 = (0, _v4.useMemo)(() => {
          let _v0 = Object.keys((0, _v367.getFiltersObject)(_v458, _v1.filterLists)).some(_v0 => _v633.includes(_v0)),
            _v1 = _v2.some(_v0 => _v634.includes(_v0));
          return _v0 || _v1 ? _v625 : _v3;
        }, [_v2, _v1, _v3]),
        {
          data: _v9,
          error: _v10
        } = (0, _v193.useGetUserAnalytics)(() => _v6 ? null : {
          select: _v8.flatMap(_v0 => _v0.metrics),
          where: {
            userId: _v0
          },
          query: {
            from: _v1.startDate.toISO(),
            to: _v1.endDate.toISO(),
            dimension: "total",
            direction: "desc",
            ...(0, _v367.getFiltersObject)(_v458, _v1.filterLists),
            sort: "default",
            page: 1,
            perPage: 31,
            ..._v7
          }
        }, _v627),
        _v11 = _v9?.data?.[0],
        _v12 = (0, _v4.useMemo)(() => void 0 === _v9 ? void 0 : _v8.filter(_v0 => (0, _v428.default)(_v11, _v0.metrics[0]) || !_v0.hideWhenEmpty), [_v8, _v9, _v11]);
      return _v12 && !_v12.some(_v0 => _v0.sort === _v4) && _v5({
        type: _v299.REPORT_ACTION_TYPE.SET_PRIMARY_DIMENSION,
        payload: {
          metric: _v12[0].sort,
          reportGroup: _v299.ReportGroup.VIMEO
        }
      }), {
        totalsRow: _v11,
        hasError: !!_v10,
        overriddenMetrics: _v12
      };
    },
    _v636 = (0, _v7.rem)("1px"),
    _v637 = ({
      children: _v0,
      ..._v1
    }) => (0, _v3.jsx)(_v169.TableContainer, {
      borderTopLeftRadius: "2xl",
      borderTopRightRadius: "0",
      borderBottomRadius: "2xl",
      padding: "0",
      bg: "transparent",
      ..._v1,
      children: _v0
    }),
    _v638 = ({
      children: _v0,
      ..._v1
    }) => (0, _v3.jsx)(_v168.Table, {
      variant: "simple",
      ..._v1,
      children: _v0
    }),
    _v639 = ({
      children: _v0,
      ..._v1
    }) => (0, _v3.jsx)(_v173.Thead, {
      ..._v1,
      children: _v0
    }),
    _v640 = (0, _v4.memo)(({
      children: _v0,
      ..._v1
    }) => (0, _v3.jsx)(_v174.Tr, {
      bg: "surface",
      ..._v1,
      children: _v0
    })),
    _v641 = (0, _v4.memo)(({
      children: _v0,
      ..._v1
    }) => (0, _v3.jsx)(_v640, {
      height: "5.375rem",
      borderTopRightRadius: "2xl",
      ..._v1,
      children: _v0
    })),
    _v642 = (0, _v4.memo)(({
      children: _v0,
      ..._v1
    }) => (0, _v3.jsx)(_v646, {
      paddingTop: "md",
      paddingBottom: "md",
      paddingLeft: "sm",
      paddingRight: "sm",
      verticalAlign: "bottom",
      textColor: "text-secondary",
      _hover: {
        textColor: "text-primary"
      },
      scope: "col",
      ..._v1,
      children: _v0
    })),
    _v643 = ({
      children: _v0,
      ..._v1
    }) => (0, _v3.jsx)(_v170.Tbody, {
      fontSize: "body-md",
      ..._v1,
      children: _v0
    }),
    _v644 = (0, _v4.memo)(({
      depth: _v0 = 0,
      children: _v1,
      ..._v2
    }) => {
      let _v3 = (0, _v4.useMemo)(() => _v649(_v0), [_v0]),
        _v4 = (0, _v4.useMemo)(() => _v649(_v0 + 1), [_v0]);
      return (0, _v3.jsx)(_v174.Tr, {
        ..._v3,
        _hover: _v4,
        ..._v2,
        children: _v1
      });
    }),
    _v645 = (0, _v4.memo)(({
      sticky: _v0,
      stickyBorder: _v1,
      children: _v2,
      ..._v3
    }) => {
      let _v4 = _v647(_v1, _v3.width);
      return (0, _v3.jsx)(_v171.Td, {
        ..._v3,
        ...(_v0 && _v4),
        children: _v2
      });
    }),
    _v646 = (0, _v4.memo)(({
      sticky: _v0,
      stickyBorder: _v1,
      children: _v2,
      ..._v3
    }) => {
      let _v4 = _v647(_v1, _v3.width);
      return (0, _v3.jsx)(_v172.Th, {
        ..._v3,
        ...(_v0 && _v4),
        children: _v2
      });
    }),
    _v647 = (_v0, _v1) => (0, _v4.useMemo)(() => ({
      position: "sticky",
      zIndex: 2,
      bg: "inherit",
      ...(_v0 && {
        boxShadow: `-${_v636} 0 var(--vimeo-colors-stroke) inset`,
        ...(_v1 && {
          width: `calc(${_v1} + ${_v636})`
        })
      })
    }), [_v0, _v1]),
    _v648 = (0, _v4.memo)(({
      direction: _v0 = "none",
      disableSort: _v1,
      justifyContent: _v2 = "end",
      children: _v3,
      ..._v4
    }) => {
      let _v5 = {
        boxSize: "1.125rem",
        marginBottom: "0.125rem"
      };
      return (0, _v3.jsx)(_v642, {
        textColor: "none" === _v0 ? "text-secondary" : "text-primary",
        cursor: _v1 ? void 0 : "pointer",
        userSelect: "none",
        ..._v4,
        children: (0, _v3.jsxs)(_v6.Flex, {
          justifyContent: "start" === _v2 ? "flex-start" : "flex-end",
          alignItems: "start" === _v2 ? "flex-start" : "flex-end",
          gap: "xs",
          children: [(0, _v3.jsx)(_v5.Box, {
            textAlign: _v2,
            whiteSpace: "wrap",
            children: _v3
          }), !_v1 && ("none" === _v0 ? (0, _v3.jsx)(_v479.SortSmall, {
            ..._v5
          }) : "desc" === _v0 ? (0, _v3.jsx)(_v477.ArrowDown, {
            ..._v5
          }) : (0, _v3.jsx)(_v478.ArrowUp, {
            ..._v5
          }))]
        })
      });
    }),
    _v649 = _v0 => {
      let _v1 = "var(--vimeo-colors-background)",
        _v2 = `color-mix(in srgb, ${_v1}, white 48%)`,
        _v3 = `color-mix(in srgb, ${_v1}, var(--vimeo-colors-blue-100) 4%)`,
        _v4 = 3 * _v0,
        _v5 = `var(--vimeo-colors-blue-900) ${_v4}%`,
        _v6 = `white ${_v4}%`;
      return {
        bg: `color-mix(in srgb, ${_v5}, ${_v2})`,
        _dark: {
          bg: `color-mix(in srgb, ${_v6}, ${_v3})`
        }
      };
    },
    _v650 = "3.75rem",
    _v651 = "21.25rem",
    _v652 = "8.5rem",
    _v653 = "4rem",
    _v654 = "3.25rem",
    _v655 = "1.875rem",
    _v656 = "17.5rem",
    _v657 = _v0 => ({
      left: _v0 ? _v650 : void 0,
      width: _v0 ? _v651 : _v656,
      paddingLeft: _v0 ? "0" : "lg",
      sticky: _v0,
      stickyBorder: _v0 || void 0,
      borderRightWidth: _v0 ? void 0 : "0.0625rem"
    }),
    _v658 = _v0 => {
      let {
        dimensionColumns: _v1,
        metricColumns: _v2,
        totalRow: _v3,
        rootRows: _v4,
        dispatch: _v5,
        selectedItems: _v6,
        sort: _v7,
        hasError: _v8,
        hasSelectableRows: _v9 = !0,
        ..._v10
      } = _v0;
      return _v8 || _v4?.length === 0 ? (0, _v3.jsx)(_v663, {
        ..._v0
      }) : void 0 === _v4 || void 0 === _v3 ? (0, _v3.jsx)(_v664, {
        ..._v0
      }) : (0, _v3.jsx)(_v637, {
        ..._v10,
        children: (0, _v3.jsxs)(_v638, {
          children: [(0, _v3.jsx)(_v659, {
            ..._v0
          }), (0, _v3.jsx)(_v643, {
            children: _v4?.map(_v0 => (0, _v3.jsx)(_v660, {
              dimensionColumns: _v1,
              metricColumns: _v2,
              depth: 0,
              row: _v0,
              localSort: _v7.sortFn,
              dispatch: _v5,
              selectedItems: _v6,
              hasSelectableRows: _v9
            }, _v0.key))
          })]
        })
      });
    },
    _v659 = ({
      dimensionColumns: _v0,
      metricColumns: _v1,
      totalRow: _v2,
      dispatch: _v3,
      selectedItems: _v4,
      sort: _v5,
      hasSelectableRows: _v6 = !0
    }) => (0, _v3.jsxs)(_v639, {
      children: [(0, _v3.jsxs)(_v641, {
        children: [(0, _v3.jsx)(_v646, {
          left: 0,
          sticky: !0,
          width: _v650
        }), _v0.map((_v0, _v1) => (0, _v3.jsx)(_v648, {
          ..._v657(0 === _v1),
          justifyContent: "start",
          disableSort: !_v0.isSortable,
          direction: _v0 === _v5.column ? _v5.direction : "none",
          onClick: () => {
            _v0.isSortable && _v5.setColumn(_v0);
          },
          children: _v0.header
        }, _v0.id)), _v1.map(_v0 => (0, _v3.jsx)(_v648, {
          direction: _v0 === _v5.column ? _v5.direction : "none",
          width: _v652,
          onClick: () => {
            _v5.setColumn(_v0);
          },
          children: (0, _v3.jsx)(_v125.Tooltip, {
            label: _v0.tooltip,
            placement: "top",
            children: _v0.header
          })
        }, _v0.metrics[0]))]
      }), (0, _v3.jsxs)(_v640, {
        height: _v654,
        children: [(0, _v3.jsx)(_v646, {
          left: 0,
          sticky: !0,
          width: _v650,
          paddingLeft: "lg",
          paddingRight: "md",
          children: _v6 && (0, _v3.jsx)(_v662, {
            selectionId: _v179.TOTAL_ROW_ID,
            dispatch: _v3,
            selectedItems: _v4
          })
        }), _v0.map((_v0, _v1) => (0, _v3.jsx)(_v646, {
          ..._v657(0 === _v1),
          textColor: "text-secondary",
          _hover: {
            textColor: "text-primary"
          },
          children: 0 === _v1 && (0, _v3.jsx)(_v125.Tooltip, {
            label: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.total,
            placement: "top",
            children: _v179.DISPLAY_MAP.total
          })
        }, _v0.id)), _v1.map(_v0 => (0, _v3.jsx)(_v646, {
          width: _v652,
          paddingLeft: "sm",
          paddingRight: _v655,
          children: _v0.render(_v2 ?? {})
        }, _v0.metrics[0]))]
      })]
    }),
    _v660 = ({
      dimensionColumns: _v0,
      metricColumns: _v1,
      expandedColumn: _v2,
      depth: _v3,
      row: _v4,
      localSort: _v5,
      dispatch: _v6,
      selectedItems: _v7,
      hasSelectableRows: _v8 = !1
    }) => {
      let [_v9, _v10] = (0, _v4.useReducer)(_v630, {}, () => _v0.reduce((_v0, _v1) => ({
          ..._v0,
          [_v1.id]: "collapsed"
        }), {})),
        _v11 = (0, _v499.shouldShowInDevelopmentFeature)("expand_primary"),
        _v12 = _v0.findIndex(_v0 => _v0.id === _v2?.id);
      return (0, _v3.jsxs)(_v3.Fragment, {
        children: [(0, _v3.jsxs)(_v644, {
          height: _v653,
          depth: _v3,
          _last: {
            borderStyle: "hidden",
            borderBottomRightRadius: "2xl"
          },
          children: [(0, _v3.jsx)(_v645, {
            width: _v650,
            paddingLeft: "lg",
            paddingRight: "md",
            left: "0",
            sticky: !0,
            children: _v8 && (0, _v3.jsx)(_v662, {
              selectionId: _v4.key,
              dispatch: _v6,
              selectedItems: _v7
            })
          }), _v0.map((_v0, _v1) => {
            let _v2 = _v4.dimensionColumnCells[_v0.id],
              _v3 = 0 === _v1,
              _v4 = _v0.length > 1,
              _v5 = (_v11 || !(_v3 && _v4)) && (void 0 === _v2 || _v2?.refinesTo !== void 0),
              _v6 = _v2 ? _v2.dimension.render : _v0.entrypoint;
            return (0, _v3.jsx)(_v645, {
              ..._v657(0 === _v1),
              paddingTop: "0",
              paddingBottom: "0",
              paddingRight: "md",
              children: (0, _v3.jsx)(_v6, {
                data: _v2?.data,
                isActive: _v1 >= _v12,
                isPrimary: _v3,
                isExpandable: _v5,
                expansionStatus: _v9[_v0.id],
                refinementCount: _v2?.refinementCount ?? 0,
                onExpand: () => {
                  (0, _v32.trackTableRowExpand)(_v4?.key, _v0?.id, "collapsed" === _v9[_v0.id], _v3), _v10({
                    id: _v0.id,
                    type: "toggle_expand"
                  });
                }
              })
            }, _v0.id);
          }), _v1.map(_v0 => (0, _v3.jsx)(_v645, {
            paddingLeft: "sm",
            paddingRight: _v655,
            width: _v652,
            children: _v0.render(_v4.data)
          }, _v0.metrics[0]))]
        }), _v0.filter(_v0 => "expanded" === _v9[_v0.id] || "loading" === _v9[_v0.id]).reverse().map(_v0 => (0, _v3.jsx)(_v661, {
          dimensionColumns: _v0,
          metricColumns: _v1,
          depth: _v3 + 1,
          expandedColumn: _v0,
          parent: _v4,
          expansionStatusDispatch: _v10,
          localSort: _v5
        }, _v0.id))]
      });
    },
    _v661 = ({
      dimensionColumns: _v0,
      metricColumns: _v1,
      depth: _v2,
      expandedColumn: _v3,
      parent: _v4,
      expansionStatusDispatch: _v5,
      localSort: _v6
    }) => {
      let {
        rows: _v7
      } = ((_v0, _v1, _v2, _v3) => {
        let {
            isOrionLoading: _v4,
            queryParam: _v5
          } = (0, _v338.useAnalyticsFreshness)(),
          _v6 = (0, _v4.useMemo)(() => {
            let _v0 = _v0.dimensionColumnCells[_v1.id];
            return _v0 ? _v0.refinesTo : _v1.initialCell;
          }, [_v1, _v0]),
          _v7 = (0, _v4.useMemo)(() => ((_v0, _v1) => {
            if (void 0 === _v1 || void 0 === _v0.dimension.toFilter) return;
            let _v2 = _v0.fetchOptions.select.filter(_v0 => !_v0.dimension.fields.includes(_v0)).concat(_v1.fields);
            return {
              ..._v0.fetchOptions,
              select: _v2,
              query: {
                ..._v0.dimension.toFilter(_v0.data, _v0.fetchOptions.query),
                dimensions: _v1.dimensions,
                ..._v1.extraParams
              }
            };
          })(_v0, _v6), [_v0, _v6]),
          {
            data: _v8,
            error: _v9
          } = (0, _v193.useGetUserAnalytics)(() => _v4 || !_v7 ? null : {
            ..._v7,
            query: {
              ..._v7.query,
              ..._v5
            }
          }, _v627),
          {
            rows: _v10
          } = _v629({
            expandedColumn: _v1,
            dimensionColumnCells: _v0.dimensionColumnCells,
            data: _v8?.data,
            fetchOptions: _v7,
            dimensionToFetch: _v6,
            localSort: _v3
          });
        return (0, _v4.useEffect)(() => {
          _v2({
            id: _v1.id,
            type: void 0 !== _v9 ? "error" : void 0 === _v10 ? "load" : "finish_load"
          });
        }, [_v9, _v2, _v1, _v10]), {
          rows: _v10
        };
      })(_v4, _v3, _v5, _v6);
      return (0, _v3.jsx)(_v3.Fragment, {
        children: _v7?.map(_v0 => (0, _v3.jsx)(_v660, {
          dimensionColumns: _v0,
          metricColumns: _v1,
          expandedColumn: _v3,
          depth: _v2,
          row: _v0,
          localSort: _v6
        }, _v0.key))
      });
    },
    _v662 = ({
      selectionId: _v0,
      dispatch: _v1,
      selectedItems: _v2 = []
    }) => {
      let _v3 = (0, _v4.useMemo)(() => _v2.find(_v0 => _v0.id === _v0), [_v2, _v0]);
      return (0, _v3.jsxs)(_v5.Box, {
        position: "relative",
        children: [(0, _v3.jsx)("style", {
          children: `label:after {
          opacity: 0;
          border: 2px solid var(--vimeo-colors-background);
          border-top: none;
          border-right: none;
          content: "";
          height: 6px;
          position: absolute;
          top: 5px;
          left: 4px;
          transform: rotate(-45deg);
          width: 12px;
        }
        input[type="checkbox"]:checked + label:after {
          opacity: 1;
        }`
        }), (0, _v3.jsx)("input", {
          id: _v0,
          type: "checkbox",
          checked: void 0 !== _v3,
          disabled: void 0 === _v3 && _v2.length >= 10,
          style: {
            height: "1.25rem",
            width: "1.25rem",
            visibility: "hidden"
          },
          onChange: _v0 => {
            (0, _v32.trackTableRowCheck)(_v0.target.checked ? "check" : "uncheck"), _v1?.({
              type: _v299.REPORT_ACTION_TYPE.SET_GRAPH_ITEMS,
              payload: _v2.filter(_v0 => _v0.id !== _v0).concat(_v0.target.checked ? [{
                id: _v0
              }] : [])
            });
          }
        }), (0, _v3.jsx)("label", {
          htmlFor: _v0,
          style: {
            backgroundColor: void 0 !== _v3 ? _v3?.color : "#bee3f829",
            borderColor: void 0 !== _v3 ? _v3?.color : "#bee3f87a",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "0.4rem",
            cursor: "pointer",
            left: "0",
            position: "absolute",
            top: "0.1rem",
            height: "1.3rem",
            width: "1.3rem"
          }
        })]
      });
    },
    _v663 = _v0 => (0, _v3.jsxs)(_v3.Fragment, {
      children: [(0, _v3.jsx)(_v637, {
        overflowX: "hidden",
        borderBottomRadius: "none",
        children: (0, _v3.jsx)(_v638, {
          children: (0, _v3.jsx)(_v659, {
            ..._v0
          })
        })
      }), (0, _v3.jsx)(_v5.Box, {
        ..._v649(0),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottomRadius: "2xl",
        minHeight: "15rem",
        children: _v0.hasError ? (0, _v3.jsx)(_v398.GeneralErrorMessage, {}) : (0, _v3.jsx)(_v46.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: (0, _v30.translate)({
            singular: "No data to show yet.",
            dictionary: {
              es: {
                singular: "Aún no hay datos para mostrar."
              },
              "de-DE": {
                singular: "Noch keine Daten zum Anzeigen vorhanden."
              },
              "fr-FR": {
                singular: "Aucune donnée n'est encore disponible."
              },
              "ja-JP": {
                singular: "表示するデータはまだありません。"
              },
              "ko-KR": {
                singular: "아직 표시할 데이터가 없습니다."
              },
              "pt-BR": {
                singular: "Ainda não há dados para mostrar."
              },
              "zh-CN": {
                singular: "暂无数据可显示。"
              }
            }
          })
        })
      })]
    }),
    _v664 = ({
      dimensionColumns: _v0,
      metricColumns: _v1,
      ..._v2
    }) => {
      let _v3 = "25rem";
      return (0, _v3.jsx)(_v637, {
        overflowX: "hidden",
        ..._v2,
        children: (0, _v3.jsxs)(_v638, {
          children: [(0, _v3.jsxs)(_v639, {
            children: [(0, _v3.jsxs)(_v641, {
              children: [_v0.map((_v0, _v1) => (0, _v3.jsx)(_v642, {
                width: _v656,
                _first: {
                  width: _v3
                },
                borderRightWidth: "0.0625px",
                paddingLeft: "xl",
                children: (0, _v3.jsx)(_v45.Skeleton, {
                  width: 0 === _v1 ? "15rem" : "13.5rem",
                  height: "1.25rem"
                })
              }, _v0.id)), _v1.map(_v0 => (0, _v3.jsx)(_v642, {
                width: _v652,
                paddingLeft: "3.375rem",
                paddingRight: "1.875rem",
                children: (0, _v3.jsx)(_v45.Skeleton, {
                  width: "3.25rem",
                  height: "1.25rem"
                })
              }, _v0.metrics[0]))]
            }), (0, _v3.jsxs)(_v640, {
              height: _v654,
              children: [_v0.map((_v0, _v1) => (0, _v3.jsx)(_v646, {
                width: _v656,
                _first: {
                  width: _v3
                },
                borderRightWidth: "0.0625px",
                paddingLeft: "xl",
                children: (0, _v3.jsx)(_v45.Skeleton, {
                  width: 0 === _v1 ? "15rem" : "13.5rem",
                  height: "1.25rem"
                })
              }, _v0.id)), _v1.map(({
                metrics: _v0
              }) => (0, _v3.jsx)(_v646, {
                width: _v652,
                paddingLeft: "3.375rem",
                paddingRight: "1.875rem",
                children: (0, _v3.jsx)(_v45.Skeleton, {
                  width: "3.25rem",
                  height: "1.25rem"
                })
              }, _v0[0]))]
            })]
          }), (0, _v3.jsx)(_v643, {
            children: [,,,,,].fill(0).map((_v0, _v1) => (0, _v3.jsxs)(_v644, {
              height: _v653,
              depth: 0,
              children: [_v0.map((_v0, _v1) => (0, _v3.jsx)(_v645, {
                width: _v656,
                _first: {
                  width: _v3
                },
                borderRightWidth: "0.0625px",
                paddingLeft: "xl",
                paddingRight: "md",
                children: 0 === _v1 && _v0.initialCell.skeleton ? _v0.initialCell.skeleton() : (0, _v3.jsx)(_v45.Skeleton, {
                  width: "10rem",
                  height: "1.25rem"
                })
              }, _v0.id)), _v1.map((_v0, _v1) => (0, _v3.jsx)(_v645, {
                width: _v652,
                paddingLeft: "3.375rem",
                paddingRight: "1.875rem",
                children: (0, _v3.jsx)(_v45.Skeleton, {
                  width: "3.25rem",
                  height: "1.25rem"
                })
              }, _v1))]
            }, _v1))
          })]
        })
      });
    };
  var _v665 = _v0.i(0);
  function _v666(_v0, _v1, _v2, _v3, _v4, _v5) {
    var _v6, _v7;
    let _v8,
      _v9,
      {
        primaryDimensions: {
          [_v179.REPORT_GROUP_MAP[_v0]]: _v10
        },
        selectedItemsForGraph: _v11,
        selectedAggregateInterval: _v12
      } = _v1,
      {
        startDate: _v13,
        endDate: _v14,
        filterLists: _v15
      } = _v1.filters[_v1.reportGroup],
      _v16 = (0, _v4.useMemo)(() => _v4.map(_v0 => _v0.filterKey), [_v4]),
      _v17 = (0, _v4.useMemo)(() => (0, _v367.getFiltersObject)(_v16, _v15), [_v16, _v15]),
      _v18 = (0, _v4.useMemo)(() => {
        switch (_v0) {
          case _v299.Reports.VIDEO:
            return "video";
          case _v299.Reports.DATE:
            return "total";
          case _v299.Reports.DEVICE:
            return "device_type";
          case _v299.Reports.REGION:
            return "country";
          case _v299.Reports.SOURCE:
            return "embed_domain";
          case _v299.Reports.VIDEO_RATING:
            return "video";
          default:
            return "total";
        }
      }, [_v0]),
      _v19 = [...(_v299.AggregateIntervalType.WEEK ? ["startDate", "endDate"] : ["startDate"]), _v10, ...(_v3.length ? _v3 : [])],
      _v20 = _v179.REPORT_GROUP_BY_FILTER_MAP[_v0],
      _v21 = {
        [`filter_${_v20}`]: _v11.filter(_v0 => _v0.id !== _v179.TOTAL_ROW_ID).map(_v0 => `${_v0.prepend}${_v0.id}`).join(",").split(",")
      },
      _v22 = _v11.find(_v0 => _v0.id === _v179.TOTAL_ROW_ID),
      _v23 = Math.ceil(_v14.diff(_v13, "days").toObject().days ?? 0),
      _v24 = _v11.length * _v23,
      {
        isOrionLoading: _v25,
        queryParam: _v26
      } = (0, _v338.useAnalyticsFreshness)(),
      {
        data: _v27,
        isLoading: _v28,
        error: _v29
      } = (0, _v193.useGetUserAnalytics)(() => _v25 || !_v11.length || _v5 ? null : {
        select: _v19,
        where: {
          userId: _v1.userInUse.id
        },
        query: {
          from: _v13.toISO(),
          to: _v14.toISO(),
          dimension: _v18,
          direction: "desc",
          ..._v17,
          ..._v21,
          timeInterval: _v12,
          sort: "time",
          page: 1,
          perPage: _v24,
          ..._v26
        }
      }, {
        revalidateOnFocus: !1,
        errorRetryInterval: 0,
        errorRetryCount: 1
      }),
      {
        data: _v30,
        isLoading: _v31,
        error: _v32
      } = (0, _v193.useGetUserAnalytics)(() => _v25 || !_v22 || !_v11.length || _v5 ? null : {
        select: _v19,
        where: {
          userId: _v1.userInUse.id
        },
        query: {
          from: _v13.toISO(),
          to: _v14.toISO(),
          dimension: "total",
          direction: "desc",
          ..._v17,
          timeInterval: _v12,
          sort: "time",
          page: 1,
          perPage: _v24,
          ..._v26
        }
      }, {
        revalidateOnFocus: !1,
        errorRetryInterval: 0,
        errorRetryCount: 1
      }),
      _v33 = _v19.filter(_v0 => "startDate" !== _v0 && "endDate" !== _v0).reduce((_v0, _v1) => ({
        ..._v0,
        [_v1]: "00"
      }), {}),
      _v34 = "none" === _v12 ? "day" : _v12,
      _v35 = (0, _v4.useMemo)(() => (0, _v665.getZeroFilledGraphData)(_v13, _v14, _v27?.data, _v33, _v34), [_v27?.data, _v14, _v13, _v33, _v34]),
      _v36 = (0, _v4.useMemo)(() => _v22 ? (0, _v665.getZeroFilledGraphData)(_v13, _v14, _v30?.data, _v33, _v34) : [], [_v30?.data, _v14, _v13, _v33, _v34, _v22]);
    return {
      graphData: (_v6 = _v2(_v10, _v35), _v7 = _v36 && _v36?.length ? _v36.reduce((_v0, _v1) => {
        let _v2 = _v21.DateTime.fromISO(_v1?.startDate, {
            zone: "utc"
          }).toISODate(),
          _v3 = _v21.DateTime.fromISO(_v1?.endDate, {
            zone: "utc"
          }).toISODate();
        return {
          ..._v0,
          [_v2]: {
            [_v179.TOTAL_ROW_ID]: {
              cid: _v179.TOTAL_ROW_ID,
              name: _v179.TOTAL_ROW_NAME,
              range: {
                start_date: _v2,
                end_date: _v3
              },
              [_v10]: +(0, _v428.default)(_v1, _v10)
            }
          }
        };
      }, {}) : {}, _v8 = new Set([...Object.keys(_v6), ...Object.keys(_v7)]), _v9 = [], _v8.forEach(_v0 => {
        let _v1 = (0, _v319.default)((0, _v428.default)(_v6, _v0)) ? {} : (0, _v428.default)(_v6, _v0),
          _v2 = (0, _v319.default)((0, _v428.default)(_v7, _v0)) ? {} : (0, _v428.default)(_v7, _v0);
        _v9.push({
          date: _v0,
          data: {
            ..._v1,
            ..._v2
          }
        });
      }), _v9.sort((_v0, _v1) => (0, _v470.getDateObjFromFormat)(_v0.date, "YYYY-MM-DD") > (0, _v470.getDateObjFromFormat)(_v1.date, "YYYY-MM-DD") ? 1 : -1), _v9),
      isLoading: _v28 || _v31,
      isError: !!_v29 || !!_v32
    };
  }
  let _v667 = (0, _v426.default)(async () => {
      let {
        LazyMultiLineGraph: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      loading: () => (0, _v3.jsx)("div", {})
    }),
    _v668 = _v0 => {
      let {
          graphDataProcessor: _v1,
          graphFields: _v2,
          reportType: _v3,
          reportFilters: _v4,
          reportName: _v5,
          state: _v6,
          dispatch: _v7,
          primaryDimensionColumn: _v8,
          metricColumns: _v9,
          hasSelectableRows: _v10
        } = _v0,
        {
          startDate: _v11,
          endDate: _v12
        } = (0, _v4.useMemo)(() => _v6.filters[_v6.reportGroup], [_v6.filters, _v6.reportGroup]),
        [_v13, _v14] = (0, _v4.useState)(),
        _v15 = (0, _v4.useMemo)(() => {
          let _v0 = _v669(_v13);
          return _v0 ? [_v8, _v0] : [_v8];
        }, [_v8, _v13]),
        {
          totalsRow: _v16,
          hasError: _v17,
          overriddenMetrics: _v18
        } = _v635(_v6.userInUse.id, _v6.filters.vimeo, _v15, _v9, _v6.primaryDimensions.vimeo, _v7),
        _v19 = _v632({
          primaryDimensionColumn: _v8,
          metricColumns: _v18,
          graphField: _v6.primaryDimensions.vimeo
        }),
        {
          rows: _v20,
          isLoading: _v21,
          isError: _v22,
          hasNextPage: _v23,
          loadNextPage: _v24,
          exportLink: _v25
        } = _v628(_v6.userInUse.id, _v6.filters.vimeo, _v19.remote, _v8, _v18, _v19.sortFn),
        {
          graphData: _v26,
          isLoading: _v27,
          isError: _v28
        } = _v666(_v3, _v6, _v1, _v2, _v4, void 0 === _v20);
      (0, _v4.useEffect)(() => {
        void 0 !== _v20 && _v7({
          type: _v299.REPORT_ACTION_TYPE.SET_GRAPH_ITEMS,
          payload: _v20.slice(0, 5).map(_v0 => ({
            id: _v0.key
          })),
          isInitialLoad: !0
        });
      }, [_v7, _v20]), (0, _v4.useEffect)(() => {
        _v7({
          type: _v299.REPORT_ACTION_TYPE.ERROR_STATE_UPDATE,
          payload: _v17 || _v22 || _v28
        });
      }, [_v7, _v17, _v22, _v28]), (0, _v4.useEffect)(() => {
        _v7({
          type: _v299.REPORT_ACTION_TYPE.UPDATE_LOADING_STATE,
          payload: _v21 || _v27
        });
      }, [_v27, _v7, _v20, _v21]);
      let _v29 = [{
          color: (0, _v367.getTotalRowColor)(),
          id: _v179.DATE_LINE_ID,
          name: _v179.DATE_LINE_NAME,
          prepend: ""
        }],
        _v30 = _v3 === _v179.REPORT_TYPE_DATE ? _v29 : _v6.selectedItemsForGraph,
        _v31 = (0, _v4.useMemo)(() => (_v18 ?? _v9).map(_v0 => ({
          label: _v0.header,
          value: _v0.sort
        })), [_v9, _v18]);
      return (0, _v3.jsxs)(_v5.Box, {
        width: "100%",
        children: [(0, _v3.jsx)(_v404, {
          reportType: _v3,
          title: _v5,
          reportFilters: _v4,
          state: _v6,
          dispatch: _v7,
          calendarPresets: _v179.CALENDAR_PRESETS[_v3],
          showFilterPanel: !0
        }), (0, _v3.jsx)(_v5.Box, {
          position: "relative",
          children: (0, _v3.jsx)(_v667, {
            reportType: _v3,
            visibleMetric: _v6.primaryDimensions[_v179.REPORT_GROUP_MAP[_v3]],
            payload: _v26,
            resetTablePage: () => void 0,
            selectedAggregateInterval: _v6.selectedAggregateInterval,
            selectedDataItems: _v30,
            dispatch: _v7,
            metrics: _v31,
            startDate: _v11,
            endDate: _v12,
            isGraphError: _v28,
            isLoading: _v6.isLoading
          })
        }), (0, _v3.jsx)(_v5.Box, {
          marginX: "xl",
          marginTop: "lg",
          marginBottom: "sm",
          children: (0, _v3.jsx)(_v467, {
            selectedSegment: _v13 ?? null,
            reportType: _v3,
            urlToDownloadCSV: _v25,
            setSelectedSegment: _v0 => _v14(_v0 || void 0),
            userInUse: _v6.userInUse.id,
            pageFilters: _v6.filters.vimeo,
            isLoading: _v21
          })
        }), (0, _v3.jsxs)(_v5.Box, {
          marginLeft: "xl",
          children: [(0, _v3.jsx)(_v658, {
            dimensionColumns: _v15,
            metricColumns: _v18 ?? _v9,
            totalRow: _v16,
            rootRows: _v20,
            dispatch: _v7,
            selectedItems: _v6.selectedItemsForGraph,
            sort: _v19,
            hasError: _v22 || _v17,
            hasSelectableRows: _v10,
            paddingRight: "xl"
          }, _v6.primaryDimensions.vimeo + "-" + _v15.map(_v0 => _v0.id).join("-")), (_v23 || _v21) && void 0 !== _v20 && (0, _v3.jsx)(_v74.Button, {
            width: "calc(100% - 2rem)",
            marginTop: "1rem",
            size: "xl",
            paddingTop: "1.3rem",
            paddingBottom: "1rem",
            variant: "secondary",
            fontWeight: "bold",
            borderRadius: "0.313rem",
            fontSize: "0.9em",
            justifyContent: "center",
            _hover: {
              cursor: "pointer"
            },
            onClick: _v24,
            children: _v21 ? (0, _v3.jsx)(_v10.Spinner, {
              size: "sm"
            }) : (0, _v3.jsx)(_v5.Box, {
              as: "span",
              children: (0, _v30.translate)({
                singular: "Load More",
                dictionary: {
                  es: {
                    singular: "Cargar más"
                  },
                  "de-DE": {
                    singular: "Mehr laden"
                  },
                  "fr-FR": {
                    singular: "Plus"
                  },
                  "ja-JP": {
                    singular: "さらに読み込む"
                  },
                  "ko-KR": {
                    singular: "더 로드하기"
                  },
                  "pt-BR": {
                    singular: "Carregar Mais"
                  },
                  "zh-CN": {
                    singular: "加载更多"
                  }
                }
              })
            })
          })]
        })]
      });
    },
    _v669 = _v0 => {
      switch (_v0) {
        case _v299.TablePayloadItemType.DATE:
          return _v574;
        case _v299.TablePayloadItemType.VIDEO:
          return _v592;
        case _v299.TablePayloadItemType.REGION:
          return _v582;
        case _v299.TablePayloadItemType.SOURCE_URL:
          return _v585;
        case _v299.TablePayloadItemType.DEVICE:
          return _v578;
        case _v299.TablePayloadItemType.STREAMING_TYPE:
          return _v586;
        case _v299.TablePayloadItemType.TEXT_TRACK:
          return _v589;
        case _v299.TablePayloadItemType.AUDIO_TRACK:
          return _v571;
      }
    },
    _v670 = {
      type: _v299.TablePayloadItemType.DATE,
      id: "0em",
      name: "36em",
      plays: "10em",
      drm_licenses_used: "11em",
      loads: "10em",
      third_party_impressions: "10em",
      finishes: "10em",
      downloads: "10em",
      unique_loads: "10em",
      unique_viewers: "10em",
      totalviewduration: "15em",
      averageviewduration: "15em",
      averageviewpercentage: "15em"
    },
    _v671 = (_v0, _v1) => _v1 && _v1.length ? Object.fromEntries(Object.entries((0, _v562.default)(_v1, _v0 => _v21.DateTime.fromISO(_v0?.startDate, {
      zone: "utc"
    }).toISODate())).map(([_v0, _v1]) => [_v0, _v1.reduce((_v0, _v1) => {
      let _v2 = _v0[_v179.DATE_LINE_ID];
      return {
        ..._v0,
        [_v179.DATE_LINE_ID]: {
          cid: _v179.DATE_LINE_ID,
          name: _v179.DATE_LINE_NAME,
          range: {
            start_date: _v1?.startDate ? _v21.DateTime.fromISO(_v1?.startDate, {
              zone: "utc"
            }).toISODate() : "",
            end_date: _v1?.endDate ? _v21.DateTime.fromISO(_v1?.endDate, {
              zone: "utc"
            }).toISODate() : ""
          },
          [_v0]: _v2 ? +(0, _v428.default)(_v1, _v0) + _v2[_v0] : +(0, _v428.default)(_v1, _v0)
        }
      };
    }, {})])) : {};
  function _v672(_v0) {
    let {
      state: _v1,
      dispatch: _v2
    } = _v0;
    return (0, _v3.jsx)(_v3.Fragment, {
      children: (0, _v3.jsx)(_v668, {
        state: _v1,
        dispatch: _v2,
        apiPath: `users/${_v1.userInUse.id}/videos/stats`,
        reportType: _v299.Reports.DATE,
        reportFilters: _v457,
        reportName: _v179.REPORT_NAME_DISPLAY_MAP[_v179.REPORT_TYPE_DATE],
        tableLayoutData: _v670,
        tableFields: _v441.DateReportTableFields,
        graphDataProcessor: _v671,
        graphFields: [],
        primaryDimensionColumn: _v574,
        metricColumns: _v624,
        hasSelectableRows: !1
      })
    });
  }
  let _v673 = {
      type: _v299.TablePayloadItemType.DEVICE,
      id: "0em",
      name: "36em",
      plays: "10em",
      drm_licenses_used: "11em",
      loads: "10em",
      third_party_impressions: "10em",
      finishes: "10em",
      downloads: "10em",
      unique_loads: "10em",
      unique_viewers: "10em",
      totalviewduration: "15em",
      averageviewduration: "15em",
      averageviewpercentage: "15em"
    },
    _v674 = ["deviceType"],
    _v675 = (_v0, _v1) => _v1 && _v1.length ? Object.fromEntries(Object.entries((0, _v562.default)(_v1, _v0 => _v21.DateTime.fromISO(_v0?.startDate, {
      zone: "utc"
    }).toISODate())).map(([_v0, _v1]) => [_v0, _v1.reduce((_v0, _v1) => ({
      ..._v0,
      [_v1?.deviceType]: {
        cid: _v1?.deviceType,
        name: _v1?.deviceType,
        device_type: _v1?.deviceType,
        range: {
          start_date: _v21.DateTime.fromISO(_v1?.startDate, {
            zone: "utc"
          }).toISODate(),
          end_date: _v21.DateTime.fromISO(_v1?.endDate, {
            zone: "utc"
          }).toISODate()
        },
        [_v0]: +(0, _v428.default)(_v1, _v0)
      }
    }), {})])) : {};
  function _v676(_v0) {
    let {
      state: _v1,
      dispatch: _v2
    } = _v0;
    return (0, _v3.jsx)(_v3.Fragment, {
      children: (0, _v3.jsx)(_v668, {
        state: _v1,
        dispatch: _v2,
        apiPath: `users/${_v1.userInUse.id}/videos/stats`,
        reportType: _v299.Reports.DEVICE,
        reportFilters: _v457,
        reportName: _v179.REPORT_NAME_DISPLAY_MAP[_v179.REPORT_TYPE_DEVICE],
        tableLayoutData: _v673,
        tableFields: _v441.DeviceReportTableFields,
        graphDataProcessor: _v675,
        graphFields: _v674,
        primaryDimensionColumn: _v578,
        metricColumns: _v624
      })
    });
  }
  var _v677 = _v0.i(0);
  let _v678 = () => {
      let _v0 = (0, _v677.usePico)(),
        _v1 = (0, _v4.useCallback)(() => {
          null !== _v0 && _v0.track("engagement_export_clicked", {});
        }, [_v0]);
      return {
        trackEngagementExportClicked: _v1,
        trackEngagementLoadMoreClicked: (0, _v4.useCallback)(() => {
          null !== _v0 && _v0.track("engagement_load_more_clicked", {});
        }, [_v0]),
        trackEngagementTableSorted: (0, _v4.useCallback)((_v0, _v1) => {
          null !== _v0 && _v0.track("engagement_table_sorted", {
            column_name: _v0,
            sort_direction: _v1
          });
        }, [_v0])
      };
    },
    _v679 = [_v190.T_VIDEO_URL, _v190.T_VIDEO_TITLE, _v190.T_VIDEO_UPLOAD_DATE],
    _v680 = Array.from({
      length: 100
    }, (_v0, _v1) => (0, _v30.translate)({
      singular: "Views at {PERCENT}%",
      replacements: {
        PERCENT: _v1 + 1
      },
      dictionary: {
        es: {
          singular: "Visualizaciones al {PERCENT}%"
        },
        "de-DE": {
          singular: "Aufrufe bei {PERCENT}%"
        },
        "fr-FR": {
          singular: "Vues à {PERCENT}%"
        },
        "ja-JP": {
          singular: "動画の{PERCENT}%時点の再生数"
        },
        "ko-KR": {
          singular: "동영상 {PERCENT}% 지점의 조회수"
        },
        "pt-BR": {
          singular: "Visualizações em {PERCENT}%"
        },
        "zh-CN": {
          singular: "在视频 {PERCENT}% 处的观看次数"
        }
      }
    })),
    _v681 = ({
      rows: _v0,
      metricColumns: _v1,
      filters: _v2,
      isDisabled: _v3,
      retentionPercents: _v4 = !1
    }) => {
      let {
        trackEngagementExportClicked: _v5
      } = _v678();
      return (0, _v3.jsx)(_v74.Button, {
        size: "sm",
        variant: "secondary",
        leftIcon: (0, _v3.jsx)(_v446.ArrowToBottom, {}),
        isDisabled: _v3 || !_v0 || 0 === _v0.length,
        onClick: () => {
          if (!_v0 || 0 === _v0.length) return;
          _v5();
          let _v0 = ((_v0, _v1, _v2) => {
              let _v3 = _v2 ? _v1.filter(_v0 => {
                  let _v1;
                  return _v1 = _v0.sort, !/^retentionAt\d+$/.test(_v1);
                }) : _v1,
                _v4 = [..._v679, ..._v3.map(_v0 => _v0.header)];
              _v2 && _v4.push(..._v680);
              let _v5 = [_v4];
              for (let _v0 of _v0) {
                let _v0 = _v0.data.metadata?.connections?.video,
                  _v1 = _v0.data,
                  _v2 = [_v0?.uri ?? "", _v0?.title ?? "", _v0?.createdTime ?? "", ..._v3.map(_v0 => _v1[_v0.sort] ?? 0)];
                if (_v2) {
                  let _v0 = _v1.retentionPercents ?? [];
                  for (let _v0 = 0; _v0 < 100; _v0++) _v2.push(_v0[_v0] ?? 0);
                }
                _v5.push(_v2);
              }
              return (0, _v191.stringify)(_v5);
            })(_v0, _v1, _v4),
            _v1 = _v2.startDate.toISODate(),
            _v2 = _v2.endDate.toISODate();
          _v218(_v0, _v1 && _v2 ? `engagement_report_${_v1}_to_${_v2}.csv` : "engagement_report.csv");
        },
        children: (0, _v30.translate)({
          singular: "Export data",
          dictionary: {
            es: {
              singular: "Exportar datos"
            },
            "de-DE": {
              singular: "Daten exportieren"
            },
            "fr-FR": {
              singular: "Exporter les données"
            },
            "ja-JP": {
              singular: "データをエクスポート"
            },
            "ko-KR": {
              singular: "데이터 내보내기"
            },
            "pt-BR": {
              singular: "Exportar dados"
            },
            "zh-CN": {
              singular: "导出数据"
            }
          }
        })
      });
    },
    _v682 = _v0 => {
      if (!_v0) return;
      let _v1 = _v0.match(/\/videos\/(\d+)/);
      return _v1?.[1];
    },
    _v683 = Array.from({
      length: 100
    }, () => 0),
    _v684 = () => {
      let _v0 = (0, _v152.useColorModeValue)("gray.50", "gray.700");
      return (0, _v3.jsxs)(_v5.Box, {
        padding: "0.75rem",
        maxWidth: "22rem",
        fontSize: "0.875rem",
        children: [(0, _v3.jsx)(_v46.Text, {
          marginBottom: "0.75rem",
          children: _v190.T_ENGAGEMENT_INFO_GRAPH
        }), (0, _v3.jsx)(_v46.Text, {
          marginBottom: "0.75rem",
          children: _v190.T_ENGAGEMENT_INFO_MEASURE
        }), (0, _v3.jsx)(_v46.Text, {
          marginBottom: "0.75rem",
          children: _v190.T_ENGAGEMENT_INFO_SCRUBBING
        }), (0, _v3.jsx)(_v46.Text, {
          marginBottom: "0.75rem",
          children: _v190.T_ENGAGEMENT_INFO_MULTI_VIDEO
        }), (0, _v3.jsxs)(_v5.Box, {
          backgroundColor: _v0,
          padding: "0.5rem 0.75rem",
          borderRadius: "0.25rem",
          marginTop: "0.75rem",
          children: [(0, _v3.jsx)(_v46.Text, {
            fontWeight: "bold",
            marginBottom: "0.25rem",
            children: (0, _v3.jsx)("strong", {
              children: _v190.T_AXIS_LEGEND
            })
          }), (0, _v3.jsxs)(_v46.Text, {
            children: [(0, _v3.jsx)("strong", {
              children: _v190.T_Y_AXIS
            }), " ", _v190.T_Y_AXIS_LABEL]
          }), (0, _v3.jsxs)(_v46.Text, {
            children: [(0, _v3.jsx)("strong", {
              children: _v190.T_X_AXIS
            }), " ", _v190.T_X_AXIS_LABEL]
          })]
        })]
      });
    },
    _v685 = ({
      rows: _v0,
      metricColumns: _v1,
      selectedIds: _v2,
      onSelectionChange: _v3,
      isLoading: _v4,
      hasError: _v5,
      totalRow: _v6
    }) => {
      let [_v7, _v8] = (0, _v4.useState)(_v1.find(_v0 => "views" === _v0.sort) ?? _v1[0]),
        [_v9, _v10] = (0, _v4.useState)("desc"),
        {
          trackEngagementTableSorted: _v11
        } = _v678(),
        _v12 = (0, _v4.useCallback)(_v0 => {
          let _v1 = _v7 === _v0 && "desc" === _v9 ? "asc" : "desc";
          _v11("video" === _v0 ? "video" : _v0.sort, _v1), _v7 === _v0 ? _v10(_v0 => "desc" === _v0 ? "asc" : "desc") : (_v8(_v0), _v10("desc"));
        }, [_v7, _v9, _v11]),
        _v13 = (0, _v4.useCallback)((_v0, _v1) => {
          if ("video" === _v7) {
            let _v0 = _v0.data.metadata?.connections?.video?.title ?? "",
              _v1 = _v1.data.metadata?.connections?.video?.title ?? "",
              _v2 = _v0.localeCompare(_v1);
            return "asc" === _v9 ? _v2 : -1 * _v2;
          }
          let _v2 = (_v0.data[_v7.sort] ?? 0) - (_v1.data[_v7.sort] ?? 0);
          return "asc" === _v9 ? _v2 : -1 * _v2;
        }, [_v7, _v9]),
        _v14 = (0, _v4.useMemo)(() => {
          if (_v0) return [..._v0].sort(_v13);
        }, [_v0, _v13]),
        _v15 = (0, _v4.useCallback)(_v0 => {
          _v0 && (_v0 ? _v3(new Set(_v0.map(_v0 => _v0.key))) : _v3(new Set()));
        }, [_v0, _v3]),
        _v16 = (0, _v4.useCallback)((_v0, _v1) => {
          let _v2 = new Set(_v2);
          _v1 ? _v2.add(_v0) : _v2.delete(_v0), _v3(_v2);
        }, [_v2, _v3]),
        _v17 = !!_v0 && _v0.length > 0 && _v0.every(_v0 => _v2.has(_v0.key));
      return _v5 || _v0 && 0 === _v0.length ? (0, _v3.jsx)(_v687, {
        metricColumns: _v1,
        hasError: _v5
      }) : void 0 === _v0 || _v4 ? (0, _v3.jsx)(_v688, {
        metricColumns: _v1
      }) : (0, _v3.jsx)(_v637, {
        paddingRight: "xl",
        children: (0, _v3.jsxs)(_v638, {
          children: [(0, _v3.jsxs)(_v639, {
            children: [(0, _v3.jsxs)(_v641, {
              children: [(0, _v3.jsx)(_v646, {
                left: 0,
                sticky: !0,
                width: _v650
              }), (0, _v3.jsx)(_v648, {
                left: _v650,
                width: _v651,
                sticky: !0,
                stickyBorder: !0,
                justifyContent: "start",
                direction: "video" === _v7 ? _v9 : "none",
                onClick: () => _v12("video"),
                children: (0, _v30.translate)({
                  singular: "Video",
                  dictionary: {
                    "fr-FR": {
                      singular: "Vidéo"
                    },
                    "ja-JP": {
                      singular: "動画"
                    },
                    "ko-KR": {
                      singular: "동영상"
                    },
                    "pt-BR": {
                      singular: "Vídeo"
                    },
                    "zh-CN": {
                      singular: "视频"
                    }
                  }
                })
              }), _v1.map(_v0 => (0, _v3.jsx)(_v648, {
                width: _v652,
                direction: _v7 === _v0 ? _v9 : "none",
                onClick: () => _v12(_v0),
                children: (0, _v3.jsx)(_v125.Tooltip, {
                  label: _v0.tooltip,
                  placement: "top",
                  children: _v0.header
                })
              }, _v0.header))]
            }), (0, _v3.jsxs)(_v640, {
              height: _v654,
              children: [(0, _v3.jsx)(_v646, {
                left: 0,
                sticky: !0,
                width: _v650,
                paddingLeft: "lg",
                paddingRight: "md",
                children: (0, _v3.jsx)(_v686, {
                  checked: _v17,
                  onChange: _v0 => _v15(_v0.target.checked),
                  color: _v17 ? "var(--vimeo-colors-vimeoBlue-400)" : void 0
                })
              }), (0, _v3.jsx)(_v646, {
                left: _v650,
                width: _v651,
                paddingLeft: "0",
                sticky: !0,
                stickyBorder: !0,
                textColor: "text-secondary",
                children: (0, _v3.jsx)(_v125.Tooltip, {
                  label: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.total,
                  placement: "top",
                  children: _v179.DISPLAY_MAP.total
                })
              }), _v1.map(_v0 => (0, _v3.jsx)(_v646, {
                width: _v652,
                paddingLeft: "sm",
                paddingRight: _v655,
                children: _v6 && _v0.render(_v6)
              }, _v0.header))]
            })]
          }), (0, _v3.jsx)(_v643, {
            children: _v14?.map(_v0 => {
              let _v1 = _v2.has(_v0.key),
                _v2 = _v0.data.metadata?.connections?.video;
              return (0, _v3.jsxs)(_v644, {
                height: _v653,
                depth: 0,
                _last: {
                  borderStyle: "hidden",
                  borderBottomRightRadius: "2xl"
                },
                children: [(0, _v3.jsx)(_v645, {
                  width: _v650,
                  paddingLeft: "lg",
                  paddingRight: "md",
                  left: "0",
                  sticky: !0,
                  children: (0, _v3.jsx)(_v686, {
                    checked: _v1,
                    onChange: _v0 => _v16(_v0.key, _v0.target.checked),
                    color: _v1 ? "var(--vimeo-colors-vimeoBlue-400)" : void 0
                  })
                }), (0, _v3.jsx)(_v645, {
                  left: _v650,
                  width: _v651,
                  paddingLeft: "0",
                  paddingTop: "0",
                  paddingBottom: "0",
                  paddingRight: "md",
                  sticky: !0,
                  stickyBorder: !0,
                  children: (0, _v3.jsx)(_v590, {
                    isPrimary: !0,
                    title: _v2?.title,
                    thumbnailLink: _v0.data.thumbnailLink,
                    duration: _v2?.duration,
                    manageLink: _v2?.manageLink?.concat("/analytics"),
                    createdTime: _v2?.createdTime
                  })
                }), _v1.map(_v0 => (0, _v3.jsx)(_v645, {
                  width: _v652,
                  paddingLeft: "sm",
                  paddingRight: _v655,
                  children: _v0.render(_v0.data)
                }, _v0.header))]
              }, _v0.key);
            })
          })]
        })
      });
    },
    _v686 = ({
      checked: _v0,
      onChange: _v1,
      color: _v2
    }) => {
      let _v3 = _v4.default.useId();
      return (0, _v3.jsxs)(_v5.Box, {
        position: "relative",
        height: "1.3rem",
        width: "1.3rem",
        children: [(0, _v3.jsx)("style", {
          children: `label:after {
          opacity: 0;
          border: 2px solid var(--vimeo-colors-background);
          border-top: none;
          border-right: none;
          content: "";
          height: 6px;
          position: absolute;
          top: 5px;
          left: 4px;
          transform: rotate(-45deg);
          width: 12px;
        }
        input[type="checkbox"]:checked + label:after {
          opacity: 1;
        }`
        }), (0, _v3.jsx)("input", {
          id: _v3,
          type: "checkbox",
          checked: _v0,
          style: {
            position: "absolute",
            opacity: 0,
            height: "1.3rem",
            width: "1.3rem"
          },
          onChange: _v1
        }), (0, _v3.jsx)("label", {
          htmlFor: _v3,
          style: {
            backgroundColor: _v0 ? _v2 : "#bee3f829",
            borderColor: _v0 ? _v2 : "#bee3f87a",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "0.4rem",
            cursor: "pointer",
            left: "0",
            position: "absolute",
            top: "0",
            height: "1.3rem",
            width: "1.3rem"
          }
        })]
      });
    },
    _v687 = ({
      metricColumns: _v0,
      hasError: _v1
    }) => (0, _v3.jsxs)(_v3.Fragment, {
      children: [(0, _v3.jsx)(_v637, {
        borderBottomRadius: "none",
        paddingRight: "xl",
        children: (0, _v3.jsx)(_v638, {
          children: (0, _v3.jsx)(_v639, {
            children: (0, _v3.jsxs)(_v641, {
              children: [(0, _v3.jsx)(_v646, {
                left: 0,
                width: _v650
              }), (0, _v3.jsx)(_v648, {
                left: _v650,
                width: _v651,
                justifyContent: "start",
                direction: "none",
                children: (0, _v30.translate)({
                  singular: "Video",
                  dictionary: {
                    "fr-FR": {
                      singular: "Vidéo"
                    },
                    "ja-JP": {
                      singular: "動画"
                    },
                    "ko-KR": {
                      singular: "동영상"
                    },
                    "pt-BR": {
                      singular: "Vídeo"
                    },
                    "zh-CN": {
                      singular: "视频"
                    }
                  }
                })
              }), _v0.map(_v0 => (0, _v3.jsx)(_v648, {
                width: _v652,
                direction: "none",
                children: (0, _v3.jsx)(_v125.Tooltip, {
                  label: _v0.tooltip,
                  placement: "top",
                  children: _v0.header
                })
              }, _v0.header))]
            })
          })
        })
      }), (0, _v3.jsx)(_v5.Box, {
        ..._v649(0),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottomRadius: "2xl",
        minHeight: "15rem",
        children: _v1 ? (0, _v3.jsx)(_v398.GeneralErrorMessage, {}) : (0, _v3.jsx)(_v46.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v190.T_NO_DATA
        })
      })]
    }),
    _v688 = ({
      metricColumns: _v0
    }) => {
      let _v1 = "25rem";
      return (0, _v3.jsx)(_v637, {
        paddingRight: "xl",
        children: (0, _v3.jsxs)(_v638, {
          children: [(0, _v3.jsxs)(_v639, {
            children: [(0, _v3.jsxs)(_v641, {
              children: [(0, _v3.jsx)(_v646, {
                width: _v650
              }), (0, _v3.jsx)(_v646, {
                width: _v1,
                paddingLeft: "xl",
                children: (0, _v3.jsx)(_v45.Skeleton, {
                  width: "4rem",
                  height: "1.25rem"
                })
              }), _v0.map(_v0 => (0, _v3.jsx)(_v646, {
                width: _v652,
                paddingLeft: "3.375rem",
                paddingRight: "1.875rem",
                children: (0, _v3.jsx)(_v45.Skeleton, {
                  width: "3.25rem",
                  height: "1.25rem"
                })
              }, _v0.header))]
            }), (0, _v3.jsxs)(_v640, {
              height: _v654,
              children: [(0, _v3.jsx)(_v646, {
                width: _v650
              }), (0, _v3.jsx)(_v646, {
                width: _v1,
                paddingLeft: "xl",
                children: (0, _v3.jsx)(_v45.Skeleton, {
                  width: "5rem",
                  height: "1.25rem"
                })
              }), _v0.map(_v0 => (0, _v3.jsx)(_v646, {
                width: _v652,
                paddingLeft: "3.375rem",
                paddingRight: "1.875rem",
                children: (0, _v3.jsx)(_v45.Skeleton, {
                  width: "3.25rem",
                  height: "1.25rem"
                })
              }, _v0.header))]
            })]
          }), (0, _v3.jsx)(_v643, {
            children: [,,,,,].fill(0).map((_v0, _v1) => (0, _v3.jsxs)(_v644, {
              height: _v653,
              depth: 0,
              children: [(0, _v3.jsx)(_v645, {
                width: _v650
              }), (0, _v3.jsx)(_v645, {
                width: _v1,
                paddingLeft: "xl",
                paddingRight: "md",
                children: (0, _v3.jsx)(_v591, {})
              }), _v0.map(_v0 => (0, _v3.jsx)(_v645, {
                width: _v652,
                paddingLeft: "3.375rem",
                paddingRight: "1.875rem",
                children: (0, _v3.jsx)(_v45.Skeleton, {
                  width: "3.25rem",
                  height: "1.25rem"
                })
              }, _v0.header))]
            }, _v1))
          })]
        })
      });
    };
  var _v689 = _v0.i(0),
    _v690 = _v0.i(0);
  let _v691 = [1, 25, 50, 75, 100],
    _v692 = ({
      dataSeries: _v0,
      color: _v1,
      videoCount: _v2
    }) => {
      let _v3 = (0, _v8.useToken)("semanticTokens", "colors.stroke"),
        _v4 = (0, _v8.useToken)("semanticTokens", "colors.text-tertiary");
      return (0, _v3.jsx)(_v5.Box, {
        position: "absolute",
        height: "100%",
        width: "100%",
        children: (0, _v3.jsx)(_v148.ResponsiveContainer, {
          children: (0, _v3.jsxs)(_v690.AreaChart, {
            data: _v0,
            margin: {
              top: 10,
              right: 10,
              left: 0,
              bottom: 15
            },
            children: [(0, _v3.jsx)("defs", {
              children: (0, _v3.jsxs)("linearGradient", {
                id: "engagementGradient",
                x1: "0",
                y1: "0",
                x2: "0",
                y2: "1",
                children: [(0, _v3.jsx)("stop", {
                  offset: "5%",
                  stopColor: _v1,
                  stopOpacity: .8
                }), (0, _v3.jsx)("stop", {
                  offset: "95%",
                  stopColor: _v1,
                  stopOpacity: 0
                })]
              })
            }), (0, _v3.jsx)(_v146.CartesianGrid, {
              vertical: !1,
              stroke: _v3
            }), (0, _v3.jsx)(_v150.XAxis, {
              dataKey: "start",
              ticks: _v691,
              tickFormatter: _v0 => `${_v0}%`,
              axisLine: !1,
              tickLine: !1,
              tick: {
                fontSize: 12,
                fill: _v4
              },
              label: {
                value: _v190.T_PERCENT_OF_VIDEO,
                position: "insideBottom",
                offset: -10,
                fontSize: 12,
                fill: _v4
              }
            }), (0, _v3.jsx)(_v151.YAxis, {
              axisLine: !1,
              tickLine: !1,
              tick: {
                fontSize: 12,
                fill: _v4
              },
              tickFormatter: _v0 => _v693(_v0),
              width: 60,
              label: {
                value: _v190.T_TOTAL_VIEWS,
                angle: -90,
                position: "insideLeft",
                offset: 10,
                fontSize: 12,
                fill: _v4,
                style: {
                  textAnchor: "middle"
                }
              }
            }), (0, _v3.jsx)(_v689.Area, {
              type: "monotone",
              dataKey: "views",
              fillOpacity: 1,
              stroke: _v1,
              strokeWidth: 3,
              fill: "url(#engagementGradient)"
            }), (0, _v3.jsx)(_v149.Tooltip, {
              content: (0, _v3.jsx)(_v694, {
                videoCount: _v2
              })
            })]
          })
        })
      });
    },
    _v693 = _v0 => _v0 >= 0 ? `${(_v0 / 0).toFixed(1)}M` : _v0 >= 0 ? `${(_v0 / 0).toFixed(1)}K` : String(_v0),
    _v694 = ({
      videoCount: _v0,
      ..._v1
    }) => {
      let _v2 = (0, _v4.useContext)(_v28.ViewerContext),
        _v3 = (0, _v152.useColorModeValue)("gray.600", "gray.300"),
        _v4 = _v1?.payload?.[0]?.payload;
      if (!_v2 || !_v4) return null;
      let _v5 = (0, _v471.formatDisplayNumber)(Number(_v4.views), _v2.locale);
      return (0, _v3.jsx)(_v5.Box, {
        padding: "0.75rem",
        backgroundColor: _v3,
        fontSize: "0.9rem",
        borderRadius: "0.5rem",
        backdropFilter: "blur(1.25rem)",
        color: "text-button-inverted",
        children: (0, _v190.T_VIEWS_AT_POINT)(_v5, _v4.start, _v0)
      });
    },
    _v695 = ({
      value: _v0
    }) => (0, _v3.jsx)(_v46.Text, {
      variant: "body-md",
      textAlign: "end",
      marginLeft: "auto",
      width: "fit-content",
      children: _v0
    }),
    _v696 = {
      metrics: ["views"],
      sort: "views",
      header: _v179.DISPLAY_MAP.plays,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.plays,
      render: _v0 => (0, _v3.jsx)(_v695, {
        value: (_v0.views ?? 0).toLocaleString()
      })
    },
    _v697 = {
      metrics: ["meanPercentWatched"],
      sort: "meanPercentWatched",
      header: _v179.DISPLAY_MAP.watched,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.averageviewpercentage,
      render: _v0 => (0, _v3.jsx)(_v695, {
        value: `${Math.round(_v0.meanPercentWatched ?? 0)}%`
      })
    },
    _v698 = {
      metrics: ["views", "finishes"],
      sort: "completionRate",
      header: _v190.T_AVG_COMPLETION_RATE,
      tooltip: _v179.TABLE_HEADERS_INFO_DISPLAY_MAP.completionRate,
      render: _v0 => {
        let _v1 = Math.round(_v0.completionRate ?? 0);
        return (0, _v3.jsx)(_v695, {
          value: `${_v1}%`
        });
      }
    },
    _v699 = [{
      sort: "retentionAt1",
      percent: 1
    }, {
      sort: "retentionAt25",
      percent: 25
    }, {
      sort: "retentionAt50",
      percent: 50
    }, {
      sort: "retentionAt75",
      percent: 75
    }, {
      sort: "retentionAt100",
      percent: 100
    }],
    _v700 = [_v696, _v697, _v698, ..._v699.map(({
      sort: _v0,
      percent: _v1
    }) => ({
      metrics: ["views"],
      sort: _v0,
      header: (0, _v30.translate)({
        singular: "Views at {PERCENT}%",
        replacements: {
          PERCENT: _v1
        },
        dictionary: {
          es: {
            singular: "Visualizaciones al {PERCENT}%"
          },
          "de-DE": {
            singular: "Aufrufe bei {PERCENT}%"
          },
          "fr-FR": {
            singular: "Vues à {PERCENT}%"
          },
          "ja-JP": {
            singular: "動画の{PERCENT}%時点の再生数"
          },
          "ko-KR": {
            singular: "동영상 {PERCENT}% 지점의 조회수"
          },
          "pt-BR": {
            singular: "Visualizações em {PERCENT}%"
          },
          "zh-CN": {
            singular: "在视频 {PERCENT}% 处的观看次数"
          }
        }
      }),
      tooltip: (0, _v30.translate)({
        singular: "How many views were recorded at the {PERCENT}% point of the video.",
        replacements: {
          PERCENT: _v1
        },
        dictionary: {
          es: {
            singular: "Cuántas visualizaciones se registraron en el punto {PERCENT}% del video."
          },
          "de-DE": {
            singular: "Wie viele Aufrufe wurden am {PERCENT}%-Punkt des Videos verzeichnet."
          },
          "fr-FR": {
            singular: "Combien de vues ont été enregistrées au point {PERCENT}% de la vidéo."
          },
          "ja-JP": {
            singular: "動画の{PERCENT}%地点で記録された再生数はいくつですか."
          },
          "ko-KR": {
            singular: "동영상의 {PERCENT}% 지점에서 기록된 조회수는 몇 회입니까?"
          },
          "pt-BR": {
            singular: "Quantas visualizações foram registradas no ponto de {PERCENT}% do vídeo."
          },
          "zh-CN": {
            singular: "在视频 {PERCENT}% 处记录了多少次观看."
          }
        }
      }),
      render: _v0 => (0, _v3.jsx)(_v695, {
        value: (_v0.retentionPercents?.[_v1 - 1] ?? 0).toLocaleString()
      })
    }))],
    _v701 = ({
      state: _v0,
      dispatch: _v1
    }) => {
      let [_v2] = (0, _v8.useToken)("semanticTokens", ["colors.vimeoBlue.400"]),
        [_v3, _v4] = (0, _v4.useState)(new Set()),
        _v5 = (0, _v4.useRef)(null),
        _v6 = (0, _v4.useRef)(new Set()),
        {
          trackEngagementLoadMoreClicked: _v7
        } = _v678(),
        {
          rows: _v8,
          totalRow: _v9,
          retentionCache: _v10,
          isLoading: _v11,
          isError: _v12,
          hasNextPage: _v13,
          loadNextPage: _v14
        } = ((_v0, _v1) => {
          let {
              rows: _v2,
              _analyticsData: _v3,
              isLoading: _v4,
              isError: _v5,
              hasNextPage: _v6,
              loadNextPage: _v7
            } = _v628(_v0, _v1, "views", _v592, _v623),
            _v8 = ((_v0, _v1, _v2) => {
              let {
                  isOrionLoading: _v3,
                  queryParam: _v4
                } = (0, _v338.useAnalyticsFreshness)(),
                {
                  startDate: _v5,
                  endDate: _v6
                } = _v2,
                _v7 = `${_v5.toISO()}-${_v6.toISO()}`,
                [_v8, _v9] = (0, _v4.useState)({
                  dateRange: "",
                  data: {}
                }),
                _v10 = (0, _v4.useMemo)(() => _v8.dateRange === _v7 ? _v8.data : {}, [_v8, _v7]),
                _v11 = (0, _v4.useMemo)(() => _v1 && 0 !== _v1.length ? _v1.filter(_v0 => !(_v0 in _v10)) : [], [_v1, _v10]),
                {
                  data: _v12
                } = (0, _v197.useGetUserAnalyticsEngagement)(() => _v3 ? null : _v11.length > 0 ? {
                  select: ["viewerRetentionNormalized", "metadata.connections.video.uri"],
                  where: {
                    userId: _v0
                  },
                  query: {
                    from: _v5.toISO(),
                    to: _v6.toISO(),
                    filterContent: _v11.map(_v0 => `/videos/${_v0}`),
                    ..._v4
                  }
                } : null, {
                  revalidateOnFocus: !1,
                  revalidateIfStale: !1
                });
              return (0, _v4.useEffect)(() => {
                let _v0 = _v12?.data;
                if (!_v0) return;
                let _v1 = {};
                for (let _v0 of _v0) {
                  let _v0 = _v0.metadata?.connections?.video?.uri,
                    _v1 = _v0 ? _v682(_v0) : void 0;
                  if (!_v1) continue;
                  let _v2 = _v0.viewerRetentionNormalized ?? [],
                    _v3 = Array(100).fill(0);
                  for (let _v0 of _v2) _v0.timePercentage >= 1 && _v0.timePercentage <= 100 && (_v3[_v0.timePercentage - 1] = _v0.views);
                  _v1[_v1] = _v3;
                }
                Object.keys(_v1).length > 0 && _v9(_v0 => ({
                  dateRange: _v7,
                  data: _v0.dateRange === _v7 ? {
                    ..._v0.data,
                    ..._v1
                  } : _v1
                }));
              }, [_v12, _v7]), _v10;
            })(_v0, (0, _v4.useMemo)(() => _v3?.map(_v0 => _v682(_v0.metadata?.connections?.video?.uri)).filter(_v0 => void 0 !== _v0), [_v3]), _v1),
            _v9 = (0, _v4.useMemo)(() => {
              if (!_v2) return;
              let _v0 = new Set();
              return _v2.filter(_v0 => !_v0.has(_v0.key) && (_v0.add(_v0.key), !0)).map(_v0 => {
                let _v1 = _v682(_v0.data.metadata?.connections?.video?.uri),
                  _v2 = _v1 ? _v8[_v1] ?? _v683 : _v683,
                  _v3 = _v0.data.views ?? 0,
                  _v4 = _v0.data.finishes ?? 0;
                return {
                  ..._v0,
                  data: {
                    ..._v0.data,
                    completionRate: _v3 > 0 ? _v4 / _v3 * 100 : 0,
                    retentionPercents: _v2
                  }
                };
              });
            }, [_v2, _v8]),
            _v10 = (0, _v4.useMemo)(() => {
              if (!_v9 || 0 === _v9.length) return;
              let _v0 = 0,
                _v1 = 0,
                _v2 = 0,
                _v3 = Array(100).fill(0);
              for (let _v0 of _v9) {
                let _v0 = _v0.data,
                  _v1 = _v0.views ?? 0;
                if (_v0 += _v1, _v1 += _v0.finishes ?? 0, _v2 += (_v0.meanPercentWatched ?? 0) * _v1, _v0.retentionPercents) for (let _v0 = 0; _v0 < 100; _v0++) _v3[_v0] += _v0.retentionPercents[_v0] ?? 0;
              }
              return {
                views: _v0,
                finishes: _v1,
                meanPercentWatched: _v0 > 0 ? _v2 / _v0 : 0,
                completionRate: _v0 > 0 ? _v1 / _v0 * 100 : 0,
                retentionPercents: _v3
              };
            }, [_v9]);
          return {
            rows: _v9,
            totalRow: _v10,
            retentionCache: _v8,
            isLoading: _v4,
            isError: _v5,
            hasNextPage: _v6,
            loadNextPage: _v7
          };
        })(_v0.userInUse.id, _v0.filters.vimeo),
        _v15 = (0, _v4.useMemo)(() => {
          if (_v8) return _v8.map(_v0 => {
            let _v1 = _v0.data.retentionPercents;
            if (!_v1) return _v0;
            let _v2 = {};
            for (let {
              sort: _v0,
              percent: _v1
            } of _v699) _v2[_v0] = _v1[_v1 - 1];
            return {
              ..._v0,
              data: {
                ..._v0.data,
                ..._v2
              }
            };
          });
        }, [_v8]),
        _v16 = (0, _v4.useMemo)(() => {
          var _v0;
          return Object.keys(_v0 = _v0.filters.vimeo.filterLists).sort().map(_v0 => {
            let _v1 = (_v0[_v0] ?? []).map(_v0 => String(_v0.id)).sort().join(",");
            return _v1.length > 0 ? `${_v0}=${_v1}` : "";
          }).filter(_v0 => _v0.length > 0).join("|");
        }, [_v0.filters.vimeo.filterLists]);
      (0, _v4.useEffect)(() => {
        if (!_v15 || 0 === _v15.length) return;
        let _v0 = _v15.map(_v0 => _v0.key);
        if (_v5.current !== _v16) {
          _v4(new Set(_v16.length > 0 ? _v0 : _v0.slice(0, 5))), _v5.current = _v16, _v6.current = new Set(_v0);
          return;
        }
        if (!(_v16.length > 0)) return;
        let _v1 = _v6.current;
        if (_v3.size === _v1.size && Array.from(_v1).every(_v0 => _v3.has(_v0)) && _v0.length > _v1.size) {
          let _v0 = new Set(_v3);
          for (let _v0 of _v0) _v0.add(_v0);
          _v4(_v0), _v6.current = new Set(_v0);
        }
      }, [_v15, _v16, _v3]);
      let _v17 = (0, _v4.useMemo)(() => 0 === _v3.size ? Array.from({
          length: 100
        }, (_v0, _v1) => ({
          name: "retention",
          views: 0,
          start: _v1 + 1,
          end: _v1 + 2,
          totalViews: 0
        })) : Array.from({
          length: 100
        }, (_v0, _v1) => {
          let _v2 = 0;
          for (let _v0 of _v3) {
            let _v0 = _v682(_v0),
              _v1 = _v0 ? _v10[_v0] : void 0;
            _v1 && (_v2 += _v1[_v1] ?? 0);
          }
          return {
            name: "retention",
            views: _v2,
            start: _v1 + 1,
            end: _v1 + 2,
            totalViews: _v2
          };
        }), [_v10, _v3]),
        _v18 = (0, _v4.useCallback)(_v0 => {
          _v4(_v0);
        }, []);
      return (0, _v3.jsxs)(_v5.Box, {
        width: "100%",
        children: [(0, _v3.jsx)(_v404, {
          reportType: _v299.Reports.ENGAGEMENT,
          title: _v179.REPORT_NAME_DISPLAY_MAP[_v179.REPORT_TYPE_ENGAGEMENT],
          infoPopUpContent: (0, _v3.jsx)(_v684, {}),
          reportFilters: _v459,
          state: _v0,
          dispatch: _v1,
          calendarPresets: _v179.CALENDAR_PRESETS[_v299.Reports.ENGAGEMENT],
          showFilterPanel: !0
        }), (0, _v3.jsx)(_v5.Box, {
          display: "block",
          padding: "1.5rem",
          borderRadius: "1.5rem",
          backgroundColor: "fill-surface",
          marginTop: "1.5rem",
          marginX: "xl",
          children: (0, _v3.jsx)(_v5.Box, {
            height: "22.5rem",
            position: "relative",
            children: void 0 === _v15 ? (0, _v3.jsx)(_v6.Flex, {
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              children: (0, _v3.jsx)(_v10.Spinner, {
                size: "lg"
              })
            }) : (0, _v3.jsx)(_v692, {
              dataSeries: _v17,
              color: _v2,
              videoCount: _v3.size
            })
          })
        }), (0, _v3.jsx)(_v6.Flex, {
          marginX: "xl",
          marginTop: "lg",
          marginBottom: "sm",
          paddingBottom: "md",
          justifyContent: "flex-end",
          children: (0, _v3.jsx)(_v681, {
            rows: _v15,
            metricColumns: _v700,
            filters: _v0.filters.vimeo,
            isDisabled: void 0 === _v15,
            retentionPercents: !0
          })
        }), (0, _v3.jsxs)(_v5.Box, {
          marginLeft: "xl",
          children: [(0, _v3.jsx)(_v685, {
            rows: _v15,
            metricColumns: _v700,
            selectedIds: _v3,
            onSelectionChange: _v18,
            isLoading: void 0 === _v15,
            hasError: _v12,
            totalRow: _v9
          }), (_v13 || _v11) && void 0 !== _v15 && (0, _v3.jsx)(_v74.Button, {
            width: "calc(100% - 2rem)",
            marginTop: "1rem",
            size: "xl",
            paddingTop: "1.3rem",
            paddingBottom: "1rem",
            variant: "secondary",
            fontWeight: "bold",
            borderRadius: "0.313rem",
            fontSize: "0.9em",
            justifyContent: "center",
            _hover: {
              cursor: "pointer"
            },
            onClick: () => {
              _v7(), _v14();
            },
            children: _v11 ? (0, _v3.jsx)(_v10.Spinner, {
              size: "sm"
            }) : (0, _v3.jsx)(_v5.Box, {
              as: "span",
              children: (0, _v30.translate)({
                singular: "Load more",
                dictionary: {
                  es: {
                    singular: "Cargar más"
                  },
                  "de-DE": {
                    singular: "Mehr laden"
                  },
                  "fr-FR": {
                    singular: "Afficher plus"
                  },
                  "ja-JP": {
                    singular: "もっとロードする"
                  },
                  "ko-KR": {
                    singular: "동영상 더 보기"
                  },
                  "pt-BR": {
                    singular: "Carregar mais"
                  },
                  "zh-CN": {
                    singular: "加载更多"
                  }
                }
              })
            })
          })]
        })]
      });
    },
    _v702 = {
      type: _v299.TablePayloadItemType.REGION,
      id: "0em",
      name: "36em",
      plays: "10em",
      drm_licenses_used: "11em",
      loads: "10em",
      third_party_impressions: "10em",
      finishes: "10em",
      downloads: "10em",
      unique_loads: "10em",
      unique_viewers: "10em",
      totalviewduration: "15em",
      averageviewduration: "15em",
      averageviewpercentage: "15em"
    },
    _v703 = ["countryCode", "countryName"],
    _v704 = (_v0, _v1) => _v1 && _v1.length ? Object.fromEntries(Object.entries((0, _v562.default)(_v1, _v0 => _v21.DateTime.fromISO(_v0?.startDate, {
      zone: "utc"
    }).toISODate())).map(([_v0, _v1]) => [_v0, _v1.reduce((_v0, _v1) => ({
      ..._v0,
      [_v1?.countryCode]: {
        cid: _v1?.countryCode,
        name: _v1?.countryName,
        range: {
          start_date: _v21.DateTime.fromISO(_v1?.startDate, {
            zone: "utc"
          }).toISODate(),
          end_date: _v21.DateTime.fromISO(_v1?.endDate, {
            zone: "utc"
          }).toISODate()
        },
        [_v0]: +(0, _v428.default)(_v1, _v0)
      }
    }), {})])) : {};
  function _v705(_v0) {
    let {
      state: _v1,
      dispatch: _v2
    } = _v0;
    return (0, _v3.jsx)(_v3.Fragment, {
      children: (0, _v3.jsx)(_v668, {
        state: _v1,
        dispatch: _v2,
        apiPath: `users/${_v1.userInUse.id}/videos/stats`,
        reportType: _v299.Reports.REGION,
        reportFilters: _v457,
        reportName: _v179.REPORT_NAME_DISPLAY_MAP[_v179.REPORT_TYPE_REGION],
        tableLayoutData: _v702,
        tableFields: _v441.RegionReportTableFields,
        graphDataProcessor: _v704,
        graphFields: _v703,
        primaryDimensionColumn: _v582,
        metricColumns: _v624
      })
    });
  }
  let _v706 = {
      type: _v299.TablePayloadItemType.SOURCE_URL,
      id: "0em",
      name: "36em",
      plays: "10em",
      drm_licenses_used: "11em",
      loads: "10em",
      third_party_impressions: "10em",
      finishes: "10em",
      downloads: "10em",
      unique_loads: "10em",
      unique_viewers: "10em",
      totalviewduration: "15em",
      averageviewduration: "15em",
      averageviewpercentage: "15em"
    },
    _v707 = ["embedDomain"],
    _v708 = (_v0, _v1) => _v1 && _v1.length ? Object.fromEntries(Object.entries((0, _v562.default)(_v1, _v0 => _v21.DateTime.fromISO(_v0?.startDate, {
      zone: "utc"
    }).toISODate())).map(([_v0, _v1]) => [_v0, _v1.reduce((_v0, _v1) => ({
      ..._v0,
      [_v1?.embedDomain]: {
        cid: _v1?.embedDomain,
        name: _v1?.embedDomain,
        embed_domain: _v1?.embedDomain,
        range: {
          start_date: _v21.DateTime.fromISO(_v1?.startDate, {
            zone: "utc"
          }).toISODate(),
          end_date: _v21.DateTime.fromISO(_v1?.endDate, {
            zone: "utc"
          }).toISODate()
        },
        [_v0]: +(0, _v428.default)(_v1, _v0)
      }
    }), {})])) : {};
  function _v709(_v0) {
    let {
      state: _v1,
      dispatch: _v2
    } = _v0;
    return (0, _v3.jsx)(_v3.Fragment, {
      children: (0, _v3.jsx)(_v668, {
        state: _v1,
        dispatch: _v2,
        apiPath: `users/${_v1.userInUse.id}/videos/stats`,
        reportType: _v299.Reports.SOURCE,
        reportFilters: _v457,
        reportName: _v179.REPORT_NAME_DISPLAY_MAP[_v179.REPORT_TYPE_SOURCE],
        tableLayoutData: _v706,
        tableFields: _v441.SourceReportTableFields,
        graphDataProcessor: _v708,
        graphFields: _v707,
        primaryDimensionColumn: _v585,
        metricColumns: _v624
      })
    });
  }
  var _v710 = _v0.i(0),
    _v711 = _v0.i(0),
    _v712 = _v0.i(0),
    _v713 = _v0.i(0),
    _v714 = _v0.i(0),
    _v715 = _v0.i(0);
  let _v716 = [{
      icon: (0, _v3.jsx)(_v714.VideosStack, {
        boxSize: "1.5rem"
      }),
      text: _v715.T_UPSELL_MODAL_FEATURE_TEXT_1
    }, {
      icon: (0, _v3.jsx)(_v712.PersonUser, {
        boxSize: "1.5rem"
      }),
      text: _v715.T_UPSELL_MODAL_FEATURE_TEXT_2
    }, {
      icon: (0, _v3.jsx)(_v711.Eye, {
        boxSize: "1.5rem"
      }),
      text: _v715.T_UPSELL_MODAL_FEATURE_TEXT_3
    }, {
      icon: (0, _v3.jsx)(_v713.Stats, {
        boxSize: "1.5rem"
      }),
      text: _v715.T_UPSELL_MODAL_FEATURE_TEXT_4
    }],
    _v717 = ({
      onClose: _v0
    }) => {
      let _v1 = (0, _v4.useContext)(_v28.ViewerContext);
      return (0, _v3.jsx)(_v31.default, {
        templateType: "feature",
        apiUrl: _v1?.apiUrl,
        userConfig: {
          jwt: _v1?.jwt,
          userId: _v1?.user?.id
        },
        modalConfig: {
          mkcCode: "107042",
          headerText: _v715.T_UPSELL_MODAL_TITLE,
          subHeaderText: _v715.T_UPSELL_MODAL_SUB_TITLE,
          imgSrc: "https://i.vimeocdn.com/custom_asset/971715d27c20afa6bedfe6c520285487",
          body: (0, _v3.jsx)("table", {
            children: (0, _v3.jsx)("tbody", {
              children: _v716.map((_v0, _v1) => (0, _v3.jsxs)(_v5.Box, {
                as: "tr",
                children: [(0, _v3.jsx)(_v5.Box, {
                  as: "td",
                  paddingBottom: "0.7rem",
                  children: (0, _v3.jsx)(_v5.Box, {
                    width: "2.5rem",
                    children: _v0.icon
                  })
                }), (0, _v3.jsx)(_v5.Box, {
                  as: "td",
                  paddingBottom: "0.7rem",
                  children: (0, _v3.jsx)(_v46.Text, {
                    variant: "body-xl",
                    fontSize: "1rem",
                    children: _v0.text
                  })
                })]
              }, _v1 + _v0.text))
            })
          }),
          primaryCTAText: _v715.T_UPSELL_MODAL_LINK_BUTTON_TEXT,
          primaryCTALink: "/enterprise/contact?mkc=107042 "
        },
        onClose: _v0,
        tracking: {
          params: {
            feature: "analytics",
            location: "analytics_team_report",
            page: "team_report",
            upsell_name: "team_report_enterprise_upsell"
          },
          paywallTracking: {
            paywallTrigger: "team_analytics_report_enterprise_upgrade_button",
            paywallLocation: "team_analytics_report",
            paywallType: "popup",
            paywallFeature: "analytics"
          }
        }
      });
    };
  var _v718 = _v0.i(0);
  let _v719 = "users",
    _v720 = "videos",
    _v721 = {
      revalidateOnFocus: !1,
      errorRetryInterval: 0,
      errorRetryCount: 1
    },
    _v722 = {
      meanPercentWatched: "mean_percent_watched",
      uniqueMembers: "unique_members",
      uniqueVideos: "unique_videos",
      views: "views"
    },
    _v723 = {
      asc: "asc",
      desc: "desc",
      none: "desc"
    },
    _v724 = [_v299.Filters.MEMBER, _v299.Filters.STREAMING_TYPE, _v299.Filters.CONTENT, _v299.Filters.WORKSPACES],
    _v725 = "https://i.vimeocdn.com/portrait/defaults-blue.jpg",
    _v726 = _v0 => {
      let _v1 = (0, _v718.usePathname)(),
        {
          teamOwnerId: _v2,
          userOrVideoId: _v3
        } = (0, _v24.useParams)(),
        _v4 = (0, _v4.useMemo)(() => Number.isInteger(+_v2) ? +_v2 : 0, [_v2]),
        _v5 = (0, _v4.useMemo)(() => Number.isInteger(+_v3) ? +_v3 : 0, [_v3]);
      return {
        teamOwnerId: _v4,
        groupBy: (0, _v4.useMemo)(() => {
          let _v0 = _v1.split("/"),
            _v1 = _v720;
          return ("users" === (_v0 ? _v0[6] : _v0[4]) && (_v1 = _v719), _v5) ? _v1 === _v719 ? _v720 : _v719 : _v1;
        }, [_v1, _v5]),
        userOrVideoId: _v5
      };
    },
    _v727 = _v0 => {
      let _v1,
        {
          userInUse: _v2,
          isOrg: _v3,
          children: _v4,
          visitedRoutes: _v5
        } = _v0,
        _v6 = (0, _v24.useHistory)(),
        {
          teamOwnerId: _v7
        } = _v726(_v3);
      _v1 = (0, _v4.useContext)(_v28.ViewerContext), (0, _v4.useEffect)(() => {
        let _v0 = _v2?.teamItems?.find(_v0 => _v0.id === _v7);
        _v0 && _v1?.xsrft && _v7 && _v2.id && _v2.id !== _v7 && fetch("/manage/videos?action=SWITCH_TEAMS", {
          body: JSON.stringify({
            team_owner_id: _v0.id,
            token: _v1?.xsrft
          }),
          method: "POST",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
          }
        }).then(() => {
          window.location.reload();
        });
      }, [_v2, _v7, _v1?.xsrft]);
      let {
          capabilities: {
            hasTeamAnalytics: _v8,
            seeTeamAnalyticsUpsell: _v9
          },
          error: _v10,
          loading: _v11
        } = (0, _v11.useCapability)(["hasTeamAnalytics", "seeTeamAnalyticsUpsell"], _v7),
        {
          data: _v12,
          error: _v13,
          isLoading: _v14
        } = (0, _v710.useGetUserPreferences)({
          where: {
            userId: _v7
          },
          select: [_v179.NON_TOURPOINT_USER_PREFERENCES.TEAM_ACTIVITY_ANALYTICS]
        }, {
          errorRetryCount: 1
        });
      return !_v2?.teamItems || !_v7 || _v14 || _v11 ? (0, _v3.jsx)(_v6.Flex, {
        height: "90vh",
        alignItems: "center",
        justifyContent: "center",
        children: (0, _v3.jsx)(_v10.Spinner, {
          size: "lg"
        })
      }) : !_v8 && _v9 ? (0, _v3.jsx)(_v717, {
        onClose: () => {
          if (_v6.length > 2 && _v5.length > 2) {
            let _v0 = _v5[_v5.length - 2];
            _v6.push(_v0);
          } else _v6.push("/analytics");
        }
      }) : _v10?.res?.status !== 404 && _v13?.res?.status !== 404 && _v8 && _v12?.[_v179.NON_TOURPOINT_USER_PREFERENCES.TEAM_ACTIVITY_ANALYTICS] ? _v10 || _v13 ? (0, _v3.jsx)(_v27.ErrorPage, {
        error: Error("Something went wrong!")
      }) : (0, _v3.jsx)(_v3.Fragment, {
        children: _v4
      }) : (0, _v3.jsx)(_v27.ErrorPage, {
        error: new _v25.UnauthorizedError()
      });
    };
  var _v728 = _v0.i(0),
    _v729 = _v0.i(0),
    _v730 = _v0.i(0);
  let _v731 = ["meanPercentWatched", "uniqueMembers", "uniqueVideos", "views", "range.startDate", "range.endDate"],
    _v732 = ["meanPercentWatched", "uniqueMembers", "uniqueVideos", "views", "range.startDate", "range.endDate", "completions", "netTimeCompleted", "netPercentageCompleted", "totalSecondsWatched"],
    _v733 = ["uniqueMembers", "metadata.connections.video.uri", "metadata.connections.video.title", "metadata.connections.video.duration", "metadata.connections.video.createdTime", "metadata.connections.video.manageLink"],
    _v734 = ["uniqueVideos", "metadata.connections.user.uri", "metadata.connections.user.email", "metadata.connections.user.name", "metadata.connections.user.picture", "metadata.connections.video.duration"],
    _v735 = (_v0, _v1) => {
      let {
          isOrionLoading: _v2,
          queryParam: _v3
        } = (0, _v338.useAnalyticsFreshness)(),
        {
          endDate: _v4,
          startDate: _v5,
          filterLists: _v6
        } = _v0,
        _v7 = (0, _v4.useMemo)(() => _v5.toISO(), [_v5]),
        _v8 = (0, _v4.useMemo)(() => _v4.toISO(), [_v4]),
        _v9 = (0, _v4.useMemo)(() => (0, _v367.getGroupByTimeLiteral)(_v5, _v4), [_v5, _v4]),
        _v10 = (0, _v4.useMemo)(() => (0, _v367.getTeamsFiltersObject)(_v724, _v6), [_v6]),
        {
          data: _v11,
          isLoading: _v12,
          error: _v13
        } = (0, _v192.useGetTeamAnalytics)(() => _v2 ? null : {
          select: _v731,
          where: {
            userId: _v1
          },
          query: {
            startDate: _v7,
            endDate: _v8,
            groupBy: "all-time",
            ..._v10,
            ..._v3
          }
        }, _v721),
        {
          data: _v14,
          isLoading: _v15,
          error: _v16
        } = (0, _v192.useGetTeamAnalytics)(() => _v2 ? null : {
          select: _v731,
          where: {
            userId: _v1
          },
          query: {
            startDate: _v7,
            endDate: _v8,
            groupBy: _v9,
            ..._v10,
            ..._v3
          }
        }, _v721),
        _v17 = (0, _v4.useMemo)(() => (0, _v367.getZeroFilledGraphData)(_v7, _v8, _v9, _v14?.data), [_v7, _v8, _v9, _v14?.data]),
        {
          data: _v18,
          isLoading: _v19,
          error: _v20
        } = (0, _v729.useGetUserTeammembers)({
          select: ["uri"],
          where: {
            userId: _v1
          },
          query: {
            perPage: 1
          }
        }, _v721),
        {
          data: _v21,
          isLoading: _v22,
          error: _v23
        } = (0, _v730.useGetUserVideos)({
          select: ["uri"],
          where: {
            userId: _v1
          },
          query: {
            perPage: 1
          }
        }, _v721);
      return {
        uniqueMembers: _v11?.data?.[0]?.uniqueMembers,
        meanPercentWatched: _v11?.data?.[0]?.meanPercentWatched,
        uniqueVideos: _v11?.data?.[0]?.uniqueVideos,
        views: _v11?.data?.[0]?.views,
        graphSeriesData: _v17,
        totalMembers: _v18?.total ?? 0,
        totalVideos: _v21?.total ?? 0,
        isAllTimeDataLoading: _v12,
        isGraphDataLoading: _v15,
        isTotalTeamMembersLoading: _v19,
        isTotalVideosLoading: _v22,
        isError: _v13 || _v16 || _v20 || _v23
      };
    },
    _v736 = (_v0, _v1, _v2, _v3, _v4) => {
      let {
          isOrionLoading: _v5,
          queryParam: _v6
        } = (0, _v338.useAnalyticsFreshness)(),
        {
          endDate: _v7,
          startDate: _v8,
          filterLists: _v9
        } = _v0,
        _v10 = (0, _v4.useMemo)(() => _v8.toISO(), [_v8]),
        _v11 = (0, _v4.useMemo)(() => _v7.toISO(), [_v7]),
        _v12 = (0, _v4.useMemo)(() => (0, _v367.getTeamsFiltersObject)(_v724, _v9), [_v9]),
        _v13 = ((_v0, _v1 = [], _v2 = []) => (0, _v4.useMemo)(() => {
          let _v0 = ["meanPercentWatched", "views", "completions", "netPercentageCompleted", "netTimeCompleted", "totalSecondsWatched"];
          switch (_v0) {
            case _v719:
              return [..._v0, ..._v734, ...(1 == _v1.length ? ["viewedSegments"] : [])];
            case _v720:
              return [..._v0, ..._v733, ...(1 === _v2.length ? ["viewedSegments"] : [])];
            default:
              return _v0;
          }
        }, [_v0, _v1, _v2]))(_v1, _v9[_v451.Filters.CONTENT], _v9[_v451.Filters.MEMBER]),
        {
          data: _v14,
          isLoading: _v15,
          error: _v16
        } = (0, _v192.useGetTeamAnalytics)(() => _v5 ? null : {
          select: _v13,
          where: {
            userId: _v2
          },
          query: {
            startDate: _v10,
            endDate: _v11,
            groupBy: _v1 === _v719 ? "member" : "video",
            page: _v3,
            perPage: 50,
            sort: _v722[_v4.columnName],
            direction: _v723[_v4.value],
            ..._v12,
            ..._v6
          }
        }, _v721),
        {
          data: _v17,
          isLoading: _v18,
          error: _v19
        } = (0, _v192.useGetTeamAnalytics)(() => _v5 ? null : {
          select: _v732,
          where: {
            userId: _v2
          },
          query: {
            startDate: _v10,
            endDate: _v11,
            groupBy: "all-time",
            ..._v12,
            ..._v6
          }
        }, _v721),
        _v20 = (0, _v4.useMemo)(() => _v1 === _v719 && _v14?.data ? _v14?.data?.filter(_v0 => _v0.metadata?.connections?.user?.uri)?.map(_v0 => _v0.metadata?.connections?.user?.uri?.split("/")?.[2])?.join(",") : "", [_v1, _v14]),
        {
          data: _v21,
          isLoading: _v22,
          error: _v23
        } = (0, _v729.useGetUserTeammembers)(() => _v20 && _v2 ? {
          select: ["user.uri", "user.pictures.sizes.link"],
          where: {
            userId: _v2
          },
          query: {
            perPage: 50,
            users: _v20
          }
        } : null, _v721),
        _v24 = (0, _v4.useMemo)(() => _v21?.data.reduce((_v0, _v1) => _v1?.user?.uri ? {
          ..._v0,
          [_v1?.user?.uri]: _v1?.user?.pictures?.sizes?.[1]?.link
        } : _v0, {}), [_v21]),
        _v25 = (0, _v4.useMemo)(() => _v1 === _v720 && _v14?.data ? _v14?.data?.map(_v0 => _v0.metadata?.connections?.video?.uri).join(",") : "", [_v1, _v14]),
        {
          data: _v26,
          isLoading: _v27,
          error: _v28
        } = (0, _v491.useGetVideos)(() => _v25 ? {
          select: ["uri", "pictures.baseLink"],
          query: {
            query: _v25,
            uris: _v25
          }
        } : null, _v721),
        _v29 = (0, _v4.useMemo)(() => _v26?.data.reduce((_v0, _v1) => ({
          ..._v0,
          [_v1.uri]: _v1?.pictures?.baseLink
        }), {}), [_v26]);
      return {
        exportLink: _v14?.exportLink,
        tableData: {
          rows: _v14?.data,
          videoThumbnailMap: _v29,
          userThumbnailMap: _v24
        },
        totalRow: _v17?.data?.[0],
        totalItems: _v1 === _v720 ? _v17?.data?.[0]?.uniqueVideos ?? 0 : _v17?.data?.[0]?.uniqueMembers ?? 0,
        isLoading: _v15 || _v18 || _v27 || _v22,
        isError: _v16 || _v19 || _v28 || _v23
      };
    },
    _v737 = ({
      children: _v0,
      ..._v1
    }) => (0, _v3.jsx)(_v6.Flex, {
      alignItems: "center",
      flex: "1",
      padding: "1rem",
      overflow: "hidden",
      color: "text-primary",
      fontSize: "0.875rem",
      minWidth: "8rem",
      paddingRight: "1.875rem",
      ..._v1,
      children: _v0
    }),
    _v738 = ({
      isVideoView: _v0,
      columns: _v1 = 7
    }) => {
      let _v2 = (0, _v152.useColorModeValue)("whiteAlpha.600", "lightBlueAlpha.50"),
        _v3 = (0, _v152.useColorModeValue)("surface", "#181E22");
      return (0, _v3.jsxs)(_v5.Box, {
        as: "tbody",
        children: [(0, _v3.jsxs)(_v6.Flex, {
          as: "tr",
          justifyContent: "space-between",
          backgroundColor: "fill-surface",
          borderTopWidth: "0.063rem",
          borderTopColor: "stroke",
          whiteSpace: "nowrap",
          minHeight: "4.125rem",
          padding: "inherit",
          children: [(0, _v3.jsx)(_v737, {
            as: "td",
            position: "sticky",
            left: "0",
            backgroundColor: "fill-surface",
            color: "text-secondary",
            padding: "1rem 1.95rem 1rem 1.5rem",
            minWidth: "25rem",
            _first: {
              width: "25rem",
              borderRightColor: "stroke",
              borderRightWidth: "0.063rem"
            },
            children: (0, _v3.jsx)(_v39.Header, {
              size: "xs",
              fontWeight: 500,
              children: _v190.T_TOTAL
            })
          }), Array.from({
            length: _v1
          }, (_v0, _v1) => (0, _v3.jsx)(_v737, {
            as: "td",
            justifyContent: "flex-end",
            children: (0, _v3.jsx)(_v45.Skeleton, {
              height: "1.25rem",
              width: "3.25rem"
            })
          }, _v1))]
        }), Array.from("12345").map(_v0 => (0, _v3.jsxs)(_v6.Flex, {
          as: "tr",
          role: "group",
          justifyContent: "space-between",
          backgroundColor: _v2,
          borderTopWidth: "0.063rem",
          borderTopColor: "stroke",
          whiteSpace: "nowrap",
          _last: {
            borderRadius: "0 0 1.5rem 1.5rem"
          },
          _hover: {
            backgroundColor: _v3
          },
          sx: {
            "&:last-of-type td:first-of-type": {
              borderBottomLeftRadius: "1.5rem"
            }
          },
          children: [_v0 ? (0, _v3.jsxs)(_v737, {
            minWidth: "25rem",
            borderRightColor: "stroke",
            borderRightWidth: "0.063rem",
            children: [(0, _v3.jsx)(_v45.Skeleton, {
              height: "3.375rem",
              width: "6.125rem",
              minWidth: "6.125rem",
              minHeight: "3.375rem",
              borderRadius: "1rem",
              marginRight: "1rem"
            }), (0, _v3.jsx)(_v6.Flex, {
              alignItems: "left",
              justifyContent: "center",
              gap: "0.5rem",
              flexDirection: "column",
              children: (0, _v3.jsx)(_v45.Skeleton, {
                borderRadius: "0.5rem",
                marginRight: "0.5rem",
                width: "10rem",
                height: "1.25rem"
              })
            })]
          }) : (0, _v3.jsxs)(_v737, {
            minWidth: "25rem",
            borderRightColor: "stroke",
            borderRightWidth: "0.063rem",
            children: [(0, _v3.jsx)(_v45.Skeleton, {
              height: "2rem",
              width: "2rem",
              minWidth: "2rem",
              minHeight: "2rem",
              borderRadius: "2rem",
              marginRight: "1rem"
            }), (0, _v3.jsx)(_v6.Flex, {
              alignItems: "left",
              justifyContent: "center",
              gap: "0.5rem",
              flexDirection: "column",
              children: (0, _v3.jsx)(_v45.Skeleton, {
                borderRadius: "0.5rem",
                marginRight: "0.5rem",
                width: "15rem",
                height: "1.25rem"
              })
            })]
          }), Array.from({
            length: _v1
          }, (_v0, _v1) => (0, _v3.jsx)(_v737, {
            as: "td",
            justifyContent: "flex-end",
            children: (0, _v3.jsx)(_v45.Skeleton, {
              height: "1.25rem",
              width: "3.25rem"
            })
          }, _v1))]
        }, _v0))]
      });
    },
    _v739 = ({
      title: _v0,
      statValue: _v1,
      tooltipContent: _v2,
      locale: _v3,
      styleFormat: _v4,
      children: _v5,
      isLoading: _v6
    }) => (0, _v3.jsxs)(_v5.Box, {
      flex: "1",
      height: "11.625rem",
      minWidth: {
        base: "25rem",
        md: "16.25rem"
      },
      borderRadius: "0.75rem",
      padding: "1.5rem",
      backgroundColor: "fill-surface",
      children: [(0, _v3.jsxs)(_v6.Flex, {
        justifyContent: "flex-start",
        children: [(0, _v3.jsx)(_v39.Header, {
          size: "md",
          children: _v0
        }), _v2 && (0, _v3.jsx)(_v125.Tooltip, {
          "aria-label": "snapshot tooltip",
          label: _v2,
          placement: "bottom-end",
          width: "11.125rem",
          marginLeft: "1rem",
          marginTop: "-1rem",
          children: (0, _v3.jsx)(_v5.Box, {
            children: (0, _v3.jsx)(_v298.InfoCircle, {
              boxSize: "0.75rem",
              marginTop: "0",
              marginLeft: "0.5rem",
              color: "text-tertiary"
            })
          })
        })]
      }), _v6 ? (0, _v3.jsx)(_v45.Skeleton, {
        width: "8rem",
        height: "2.61rem",
        marginTop: "0.5rem",
        marginBottom: "0.5rem"
      }) : (0, _v3.jsx)(_v39.Header, {
        size: "xl",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        children: null != _v1 ? (0, _v665.formatNumber)({
          value: _v1,
          locale: _v3,
          style: _v4
        }) : "-"
      }), _v5]
    }),
    _v740 = ({
      totalTimeInSeconds: _v0,
      timeSegments: _v1
    }) => {
      let _v2 = (0, _v152.useColorModeValue)("darkBlueAlpha.200", "input-fill");
      return (0, _v3.jsx)(_v5.Box, {
        width: "100%",
        height: "0.5rem",
        borderRadius: "6.25rem",
        position: "relative",
        overflow: "hidden",
        backgroundColor: _v2,
        children: _v1?.map((_v0, _v1) => {
          let _v2 = _v0?.[0],
            _v3 = _v0?.[1],
            _v4 = _v2 / _v0 * 100;
          return (0, _v3.jsx)(_v5.Box, {
            position: "absolute",
            left: `${_v4}%`,
            width: `${_v3 / _v0 * 100 - _v4}%`,
            minWidth: "0.5rem",
            height: "100%",
            backgroundColor: "vimeoBlue.400",
            borderRadius: "0.5rem",
            transition: "all 1s ease-in-out",
            zIndex: "1"
          }, _v1);
        })
      });
    },
    _v741 = ({
      title: _v0,
      subtitle: _v1,
      path: _v2,
      children: _v3,
      openLinkInNewTab: _v4,
      manageLink: _v5,
      hasDetailButton: _v6
    }) => {
      let _v7 = (0, _v152.useColorModeValue)("#FAFAFB", "#141A1E"),
        _v8 = (0, _v152.useColorModeValue)("surface", "#181E22");
      return (0, _v3.jsxs)(_v737, {
        as: "td",
        position: "sticky",
        left: "0",
        flex: "1",
        background: _v7,
        padding: "1rem 1.95rem 1rem 1.5rem",
        paddingRight: _v6 ? "1rem" : "1.875rem",
        minWidth: "25rem",
        zIndex: "2",
        _first: {
          borderRightColor: "stroke",
          borderRightWidth: "0.063rem"
        },
        _groupHover: {
          background: _v8
        },
        children: [_v3, (0, _v3.jsxs)(_v5.Box, {
          marginLeft: "1rem",
          width: "calc(100%)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          children: [_v2 ? (0, _v3.jsx)(_v88.Link, {
            fontWeight: "700",
            textDecoration: "none",
            variant: "primary",
            fontSize: "body-md",
            as: _v291.Link,
            to: _v5 ? `${_v5}` : `${_v2}`,
            target: _v4 || _v5 ? "_blank" : "_self",
            _groupHover: {
              color: _v2 ? "fill-brand" : "inherit"
            },
            children: _v0
          }) : (0, _v3.jsx)(_v46.Text, {
            as: "span",
            color: "text-primary",
            noOfLines: 1,
            variant: "primary",
            fontSize: "body-md",
            children: _v0
          }), _v1 && (0, _v3.jsx)(_v46.Text, {
            noOfLines: 1,
            variant: "body-xs",
            textColor: "text-secondary",
            children: _v1
          })]
        }), _v6 && _v2 && (0, _v3.jsx)(_v40.IconButton, {
          as: _v291.Link,
          marginLeft: "0.5rem",
          to: `${_v2}`,
          target: _v4 ? "_blank" : "_self",
          "aria-label": "Chevron right",
          variant: "tertiary",
          icon: (0, _v3.jsx)(_v306.ChevronRightSmall, {})
        })]
      });
    },
    _v742 = ({
      user: _v0,
      path: _v1,
      userThumbnailMap: _v2
    }) => (0, _v3.jsx)(_v741, {
      title: _v0?.name ?? "",
      subtitle: _v0?.email,
      path: _v1,
      children: (0, _v3.jsx)(_v5.Box, {
        borderRadius: "90%",
        border: "0.15rem solid transparent",
        marginLeft: "-0.15rem",
        maxHeight: "2.75rem",
        _groupHover: {
          borderColor: _v1 ? "fill-brand" : "none",
          borderWidth: _v1 ? "0.15rem" : "none"
        },
        children: (0, _v3.jsx)(_v395.Avatar, {
          alt: "user avatar image",
          src: _v2?.[_v0?.uri ?? ""] ?? _v725,
          size: "md",
          nameProps: {
            name: _v0?.name ?? ""
          }
        })
      })
    }),
    _v743 = ({
      video: _v0,
      videoThumbnailMap: _v1,
      path: _v2,
      openLinkInNewTab: _v3,
      hasDetailButton: _v4
    }) => {
      let _v5 = (0, _v572.useLocale)(),
        _v6 = _v0?.createdTime ? _v21.DateTime.fromISO(_v0?.createdTime).setLocale(_v5).toLocaleString(_v21.DateTime.DATE_MED) : "";
      return (0, _v3.jsx)(_v741, {
        title: _v0?.title ?? "",
        subtitle: (0, _v190.T_UPLOADED_DATE)(_v6),
        path: _v2 ?? "",
        openLinkInNewTab: _v3,
        manageLink: _v0?.manageLink,
        hasDetailButton: _v4,
        children: (0, _v3.jsxs)(_v5.Box, {
          position: "relative",
          children: [(0, _v3.jsx)(_v291.Link, {
            to: `${_v0?.manageLink}`,
            target: "_blank",
            children: (0, _v3.jsx)(_v483.Image, {
              alt: "Video thumbnail",
              height: "3.5rem",
              width: "6.25rem",
              borderRadius: "sm",
              fit: "contain",
              src: _v1?.[_v0?.uri ?? ""] ?? "https://i.vimeocdn.com/video/default.jpg"
            })
          }), (0, _v3.jsx)(_v46.Text, {
            backgroundColor: "background-blur",
            padding: "0.3rem",
            borderRadius: "0.3rem",
            variant: "body-sm",
            position: "absolute",
            bottom: "0.25rem",
            right: "0.25rem",
            children: _v554.Duration.fromObject({
              seconds: _v0?.duration
            }).toFormat("mm:ss")
          })]
        })
      });
    },
    _v744 = ({
      item: _v0,
      uniqueValue: _v1,
      showTimeSegmentBar: _v2,
      showUniqueValue: _v3 = !0,
      children: _v4,
      duration: _v5
    }) => {
      let _v6 = (0, _v152.useColorModeValue)("whiteAlpha.600", "lightBlueAlpha.50"),
        _v7 = (0, _v152.useColorModeValue)("surface", "#181E22"),
        _v8 = _v5 ?? (_v0?.metadata?.connections?.video?.duration || 0);
      return (0, _v3.jsxs)(_v6.Flex, {
        as: "tr",
        role: "group",
        justifyContent: "space-between",
        backgroundColor: _v6,
        borderTopWidth: "0.063rem",
        borderTopColor: "stroke",
        whiteSpace: "nowrap",
        _last: {
          borderRadius: "0 0 1.5rem 1.5rem"
        },
        _hover: {
          backgroundColor: _v7
        },
        sx: {
          "&:last-of-type td:first-of-type": {
            borderBottomLeftRadius: "1.5rem"
          }
        },
        children: [_v4, _v3 && (0, _v3.jsx)(_v737, {
          as: "td",
          justifyContent: "flex-end",
          children: _v1 ?? 0
        }), (0, _v3.jsx)(_v737, {
          as: "td",
          justifyContent: "flex-end",
          children: _v0?.views ?? 0
        }), (0, _v3.jsx)(_v737, {
          as: "td",
          justifyContent: "flex-end",
          children: _v0?.completions ?? 0
        }), (0, _v3.jsx)(_v737, {
          as: "td",
          children: (0, _v3.jsxs)(_v5.Box, {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
            children: [_v2 && (0, _v3.jsx)(_v5.Box, {
              width: "10rem",
              minWidth: "4.604rem",
              flexGrow: "1",
              marginRight: "0.5rem",
              children: (0, _v3.jsx)(_v740, {
                timeSegments: _v0?.viewedSegments ? JSON.parse(`[${_v0?.viewedSegments}]`) : [],
                totalTimeInSeconds: _v8
              })
            }), (0, _v3.jsxs)(_v5.Box, {
              minWidth: "2rem",
              maxWidth: "2rem",
              textAlign: "right",
              children: [(0, _v367.formatPercent)(_v0?.netPercentageCompleted ?? 0), "%"]
            })]
          })
        }), (0, _v3.jsx)(_v737, {
          as: "td",
          justifyContent: "flex-end",
          children: (0, _v471.formatDurationPretty)(_v0?.netTimeCompleted ?? 0)
        }), (0, _v3.jsx)(_v737, {
          as: "td",
          justifyContent: "flex-end",
          children: (0, _v471.formatDurationPretty)(_v0?.totalSecondsWatched ?? 0)
        }), (0, _v3.jsxs)(_v737, {
          as: "td",
          justifyContent: "flex-end",
          children: [(0, _v367.formatPercent)(_v0?.meanPercentWatched ?? 0), "%"]
        })]
      });
    },
    _v745 = ({
      isTableDataError: _v0
    }) => {
      let _v1 = (0, _v152.useColorModeValue)("whiteAlpha.600", "lightBlueAlpha.50");
      return (0, _v3.jsx)(_v343.Center, {
        minHeight: "15rem",
        background: _v1,
        borderRadius: "0 0 1.5rem 1.5rem",
        children: _v0 ? (0, _v3.jsx)(_v398.GeneralErrorMessage, {}) : (0, _v3.jsx)(_v46.Text, {
          fontSize: "body-sm",
          color: "text-tertiary",
          variant: "body-xl",
          children: _v190.T_NO_DATA
        })
      });
    },
    _v746 = ({
      label: _v0,
      isSortable: _v1,
      sortValue: _v2,
      onClick: _v3,
      tooltipContent: _v4
    }) => (0, _v3.jsxs)(_v6.Flex, {
      as: "th",
      flex: "1",
      padding: "1rem 0.5rem",
      overflow: "hidden",
      color: "text-secondary",
      fontSize: "0.875rem",
      minWidth: "8.5rem",
      minHeight: "5rem",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      textAlign: "right",
      _first: {
        justifyContent: "flex-start",
        minWidth: "25rem",
        padding: "1rem 0rem 1rem 1.5rem",
        borderRightWidth: "0.063rem",
        borderRightColor: "stroke",
        position: "sticky",
        left: 0,
        backgroundColor: "fill-surface",
        borderTopLeftRadius: "1.5rem"
      },
      onClick: _v3,
      children: [(0, _v3.jsx)(_v125.Tooltip, {
        label: _v4,
        maxWidth: "15rem",
        placement: "bottom-start",
        shouldWrapChildren: !0,
        children: (0, _v3.jsx)(_v39.Header, {
          size: "xs",
          cursor: "pointer",
          fontWeight: 500,
          whiteSpace: "normal",
          children: _v0
        })
      }), (0, _v3.jsx)(_v5.Box, {
        children: !0 === _v1 ? "none" === _v2 ? (0, _v3.jsx)(_v479.SortSmall, {
          cursor: "pointer",
          boxSize: "1.5rem",
          color: "text-secondary"
        }) : "asc" === _v2 ? (0, _v3.jsx)(_v478.ArrowUp, {
          cursor: "pointer",
          marginLeft: "0.2rem",
          marginTop: "-0.2rem",
          boxSize: "1.125rem",
          color: "text-primary"
        }) : (0, _v3.jsx)(_v477.ArrowDown, {
          cursor: "pointer",
          marginLeft: "0.2rem",
          marginTop: "-0.2rem",
          boxSize: "1.125rem",
          color: "text-primary"
        }) : (0, _v3.jsx)(_v5.Box, {
          width: "1.5rem"
        })
      })]
    });
  var _v747 = _v0.i(0),
    _v748 = _v0.i(0);
  let _v749 = ({
      totalItems: _v0,
      currentPageForTableData: _v1,
      setCurrentPageForTableData: _v2
    }) => (0, _v3.jsxs)(_v5.Box, {
      width: "100%",
      padding: "1.5rem",
      backgroundColor: "none",
      children: [(0, _v3.jsxs)(_v6.Flex, {
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        children: [(0, _v3.jsx)(_v40.IconButton, {
          "aria-label": "chevron left icon button",
          icon: (0, _v3.jsx)(_v747.ChevronLeft, {}),
          size: "xs",
          variant: "tertiary",
          isDisabled: 1 === _v1,
          onClick: () => _v2(_v1 - 1)
        }), 1 !== _v1 && (0, _v3.jsx)(_v40.IconButton, {
          size: "xs",
          width: "1.5rem",
          height: "1.5rem",
          "aria-label": "current table page",
          icon: (0, _v3.jsx)(_v5.Box, {
            children: _v1 - 1
          }),
          variant: "secondary",
          onClick: () => _v2(_v1 - 1)
        }), (0, _v3.jsx)(_v40.IconButton, {
          isActive: !0,
          size: "xs",
          width: "1.5rem",
          height: "1.5rem",
          "aria-label": "current table page",
          icon: (0, _v3.jsx)(_v5.Box, {
            children: _v1
          }),
          variant: "secondary"
        }), !(_v1 >= _v0 / 50) && (0, _v3.jsx)(_v40.IconButton, {
          size: "xs",
          width: "1.5rem",
          height: "1.5rem",
          "aria-label": "current table page",
          icon: (0, _v3.jsx)(_v5.Box, {
            children: _v1 + 1
          }),
          variant: "secondary",
          onClick: () => _v2(_v1 + 1)
        }), (0, _v3.jsx)(_v40.IconButton, {
          "aria-label": "chevron right icon button",
          icon: (0, _v3.jsx)(_v748.ChevronRight, {}),
          size: "xs",
          variant: "tertiary",
          isDisabled: _v1 >= _v0 / 50,
          onClick: () => _v2(_v1 + 1)
        })]
      }), (0, _v3.jsx)(_v6.Flex, {
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.875rem",
        fontWeight: "500",
        marginTop: "0.5rem",
        children: (0, _v190.T_OF_PAGES_STYLED)((_v1 - 1) * 50 + 1, 50 * _v1 > _v0 ? _v0 : 50 * _v1, _v0)
      })]
    }),
    _v750 = ({
      uniqueValue: _v0,
      views: _v1,
      averagePercentWatched: _v2,
      completions: _v3,
      netPercentageCompleted: _v4,
      netTimeCompleted: _v5 = 0,
      totalSecondsWatched: _v6 = 0,
      showUniqueValue: _v7 = !0
    }) => (0, _v3.jsxs)(_v6.Flex, {
      as: "tr",
      justifyContent: "space-between",
      backgroundColor: "fill-surface",
      borderTopWidth: "0.063rem",
      borderTopColor: "stroke",
      whiteSpace: "nowrap",
      minHeight: "4.125rem",
      padding: "inherit",
      children: [(0, _v3.jsx)(_v737, {
        as: "td",
        position: "sticky",
        left: "0",
        backgroundColor: "fill-surface",
        color: "text-secondary",
        padding: "1rem 1.95rem 1rem 1.5rem",
        minWidth: "25rem",
        _first: {
          width: "25rem",
          borderRightColor: "stroke",
          borderRightWidth: "0.063rem"
        },
        children: (0, _v3.jsx)(_v39.Header, {
          size: "xs",
          fontWeight: 500,
          children: _v190.T_TOTAL
        })
      }), _v7 && (0, _v3.jsx)(_v737, {
        as: "td",
        justifyContent: "flex-end",
        children: (0, _v3.jsx)(_v39.Header, {
          size: "xs",
          fontWeight: 500,
          children: _v0 ?? 0
        })
      }), (0, _v3.jsx)(_v737, {
        as: "td",
        justifyContent: "flex-end",
        children: (0, _v3.jsx)(_v39.Header, {
          size: "xs",
          fontWeight: 500,
          children: _v1 ?? 0
        })
      }), (0, _v3.jsx)(_v737, {
        as: "td",
        justifyContent: "flex-end",
        children: (0, _v3.jsx)(_v39.Header, {
          size: "xs",
          fontWeight: 500,
          children: _v3 ?? 0
        })
      }), (0, _v3.jsx)(_v737, {
        as: "td",
        justifyContent: "flex-end",
        children: (0, _v3.jsxs)(_v39.Header, {
          size: "xs",
          fontWeight: 500,
          children: [(0, _v367.formatPercent)(_v4 ?? 0), "%"]
        })
      }), (0, _v3.jsx)(_v737, {
        as: "td",
        justifyContent: "flex-end",
        children: (0, _v3.jsx)(_v39.Header, {
          size: "xs",
          fontWeight: 500,
          children: (0, _v471.formatDurationPretty)(_v5 ?? 0)
        })
      }), (0, _v3.jsx)(_v737, {
        as: "td",
        justifyContent: "flex-end",
        children: (0, _v3.jsx)(_v39.Header, {
          size: "xs",
          fontWeight: 500,
          children: (0, _v471.formatDurationPretty)(_v6 ?? 0)
        })
      }), (0, _v3.jsx)(_v737, {
        as: "td",
        justifyContent: "flex-end",
        children: (0, _v3.jsxs)(_v39.Header, {
          size: "xs",
          fontWeight: 500,
          children: [(0, _v367.formatPercent)(_v2 ?? 0), "%"]
        })
      })]
    }),
    _v751 = ({
      reportName: _v0,
      children: _v1
    }) => (0, _v3.jsxs)(_v6.Flex, {
      padding: "1.5rem 1.5rem 0 1.5rem",
      minHeight: "none",
      justifyContent: "space-between",
      flexWrap: "wrap",
      backgroundColor: "background",
      borderBottomWidth: "none",
      borderBottomColor: "none",
      children: [(0, _v3.jsxs)(_v5.Box, {
        marginRight: "1rem",
        minWidth: "12rem",
        children: [(0, _v3.jsx)(_v39.Header, {
          size: "xl",
          children: _v0
        }), (0, _v3.jsx)(_v88.Link, {
          as: "a",
          color: "text-secondary",
          fontSize: "0.875rem",
          textDecoration: "underline",
          href: "https://help.vimeo.com/hc/en-us/articles/18704704449937-About-team-analytics",
          rel: "noopener noreferrer",
          target: "_blank",
          _hover: {
            color: "text-secondary"
          },
          children: _v190.T_TEAM_HC_LINK
        })]
      }), (0, _v3.jsx)(_v5.Box, {
        children: _v1
      })]
    }),
    _v752 = (0, _v426.default)(async () => {
      let {
        SmallAreaChart: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      loading: () => (0, _v3.jsx)(_v45.Skeleton, {
        height: "3.5rem",
        width: "100%",
        marginTop: "0.7rem"
      })
    });
  function _v753({
    userInUse: _v0,
    pageFilters: _v1,
    dispatch: _v2,
    organizationInternalId: _v3,
    organizationUuid: _v4
  }) {
    let _v5 = (0, _v4.useContext)(_v28.ViewerContext),
      _v6 = !!(_v3 && _v4),
      {
        teamOwnerId: _v7,
        groupBy: _v8
      } = _v726(_v6),
      [_v9, _v10] = (0, _v4.useState)(""),
      [_v11, _v12] = (0, _v4.useState)(null),
      [_v13] = (0, _v8.useToken)("semanticTokens", ["colors.fill-brand"]),
      _v14 = (0, _v152.useColorModeValue)("darkBlueAlpha.200", "lightBlueAlpha.300"),
      {
        capabilities: {
          canExportAnalyticsCsv: _v15
        },
        ready: _v16
      } = (0, _v11.useCapability)(["canExportAnalyticsCsv"], _v0?.id),
      _v17 = (0, _v22.useRouter)(),
      _v18 = (0, _v24.useHistory)(),
      _v19 = (_v0, _v1, _v2) => {
        let _v3 = _v18?.location?.pathname,
          _v4 = _v3.replace(_v0, _v1);
        (0, _v32.sendTableDimensionChangeEvent)(_v2, _v3, _v4, _v5?.teamUser), _v17.push(_v4);
      },
      [_v20, _v21] = (0, _v4.useState)(1),
      [_v22, _v23] = (0, _v4.useState)({
        columnName: "views",
        value: "desc"
      }),
      _v24 = _v0 => {
        let _v1 = _v18?.location?.pathname;
        _v23({
          columnName: _v0,
          value: "asc" == _v22.value ? "desc" : "asc"
        }), _v21(1), (0, _v32.sendTableColumnSortEvent)(_v0, _v1, "asc" == _v22.value ? "desc" : "asc", _v5?.teamUser);
      },
      {
        exportLink: _v25,
        tableData: _v26,
        totalRow: _v27,
        totalItems: _v28,
        isLoading: _v29,
        isError: _v30
      } = _v736(_v1, _v8, _v7, _v20, _v22),
      {
        uniqueMembers: _v31,
        uniqueVideos: _v32,
        views: _v33,
        graphSeriesData: _v34,
        totalMembers: _v35,
        totalVideos: _v36,
        isAllTimeDataLoading: _v37,
        isGraphDataLoading: _v38,
        isTotalTeamMembersLoading: _v39,
        isTotalVideosLoading: _v40,
        isError: _v41
      } = _v735(_v1, _v7),
      _v42 = _v31 && _v35 && _v35 > 0 ? (_v31 / _v35 * 100).toFixed(1) : 0,
      _v43 = _v32 && _v36 && _v36 > 0 ? (_v32 / _v36 * 100).toFixed(1) : 0,
      _v44 = _v15 && _v16 && _v25 && _v26?.rows?.length;
    return (0, _v3.jsxs)(_v5.Box, {
      background: "background",
      height: "100%",
      minHeight: "100vh",
      paddingBottom: "2.5rem",
      width: "100%",
      children: [(0, _v3.jsx)(_v751, {
        reportName: _v179.REPORT_NAME_DISPLAY_MAP[_v179.REPORT_TYPE_TEAM],
        children: _v44 ? (0, _v3.jsx)(_v465, {
          viewer: _v5,
          reportType: _v299.Reports.TEAM,
          emailAddress: _v5?.user?.email,
          filters: _v1,
          csvExportURL: _v25
        }) : null
      }), (0, _v3.jsxs)(_v6.Flex, {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0.5rem",
        flexWrap: "wrap",
        paddingBottom: "1.5rem",
        paddingRight: "1.5rem",
        paddingLeft: "1.5rem",
        children: [(0, _v3.jsx)(_v297.Tabs, {
          size: "sm",
          width: "18.75rem",
          minWidth: "18.75rem",
          paddingTop: "1.5rem",
          variant: "soft",
          index: +(_v8 === _v719),
          children: (0, _v3.jsxs)(_v296.TabList, {
            children: [(0, _v3.jsx)(_v295.Tab, {
              _selected: {
                color: "text-primary",
                bg: _v14
              },
              fontSize: "heading-xs",
              onClick: () => _v19("users", "videos", _v190.T_VIDEOS),
              children: _v190.T_VIDEOS
            }), (0, _v3.jsx)(_v295.Tab, {
              _selected: {
                color: "text-primary",
                bg: _v14
              },
              fontSize: "heading-xs",
              onClick: () => _v19("videos", "users", _v190.T_MEMBERS),
              children: _v190.T_MEMBERS
            })]
          })
        }), (0, _v3.jsxs)(_v6.Flex, {
          gap: "1.5rem",
          paddingTop: "1.5rem",
          alignItems: "center",
          children: [_v3 && _v4 && (0, _v3.jsx)(_v402, {
            organizationUuid: _v4,
            dispatch: _v2,
            filterLists: _v1.filterLists
          }), (0, _v3.jsx)(_v337, {
            userInUse: _v0,
            filters: _v1,
            calendarPresets: _v179.CALENDAR_PRESETS[_v299.Reports.TEAM],
            dispatch: _v2,
            rangeText: _v9,
            setRangeText: _v10,
            activePreset: _v11,
            setActivePreset: _v12
          }), !_v6 && (0, _v3.jsx)(_v331, {
            alignContent: "left",
            dispatch: _v2,
            filterKey: _v299.Filters.CONTENT,
            filterLists: _v1.filterLists,
            userInUse: _v0,
            disabled: !1,
            startDate: _v1.startDate,
            endDate: _v1.endDate,
            filtersToApply: []
          }), (0, _v3.jsx)(_v456, {
            dispatch: _v2,
            filterKey: _v299.Filters.STREAMING_TYPE,
            filterLists: _v1.filterLists,
            userInUse: _v0,
            disabled: !1,
            startDate: _v1.startDate,
            endDate: _v1.endDate,
            filtersToApply: []
          })]
        })]
      }), (0, _v3.jsxs)(_v5.Box, {
        padding: "0rem 0rem 1.5rem 1.5rem",
        overflowX: "scroll",
        children: [(_v41 || _v30) && (0, _v3.jsx)(_v5.Box, {
          paddingRight: "1.5rem",
          children: (0, _v3.jsx)(_v105.Alert, {
            status: "error",
            marginBottom: "1.5rem",
            borderRadius: "0.75rem",
            alignItems: "center",
            children: (0, _v3.jsx)(_v106.AlertDescription, {
              sx: {
                a: {
                  textDecoration: "none",
                  color: _v13
                }
              },
              children: (0, _v190.T_ERROR_MESSAGE)()
            })
          })
        }), (0, _v3.jsxs)(_v6.Flex, {
          width: "100%",
          justifyContent: "space-between",
          marginBottom: "1.5rem",
          gap: "1.5rem",
          flexShrink: "1",
          flexWrap: "wrap",
          paddingRight: "1.5rem",
          children: [(0, _v3.jsx)(_v739, {
            title: _v190.T_VIEWERS,
            tooltipContent: _v190.T_VIEWERS_TOOLTIP,
            locale: _v0.locale,
            isLoading: _v37,
            statValue: _v31,
            children: _v37 || _v39 ? (0, _v3.jsxs)(_v3.Fragment, {
              children: [(0, _v3.jsx)(_v45.Skeleton, {
                width: "12rem",
                height: "1.25rem",
                marginTop: "0.7rem"
              }), (0, _v3.jsx)(_v45.Skeleton, {
                width: "100%",
                height: "1.25rem",
                marginTop: "0.7rem"
              })]
            }) : (0, _v3.jsxs)(_v3.Fragment, {
              children: [(0, _v3.jsx)(_v448.Paragraph, {
                size: "md",
                color: "text-secondary",
                children: null != _v35 ? (0, _v190.T_SNAPSHOT_MEMBERS_COUNT)(_v35, _v0.locale) : "-"
              }), (0, _v3.jsx)(_v6.Flex, {
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.75rem",
                color: "text-secondary",
                marginTop: "1rem",
                children: (0, _v3.jsx)(_v728.Progress, {
                  width: "100%",
                  value: Number(_v42) || 0
                })
              })]
            })
          }), (0, _v3.jsx)(_v739, {
            title: _v190.T_VIDEOS_VIEWED,
            tooltipContent: _v190.T_VIDEOS_VIEWED_TOOLTIP,
            locale: _v0.locale,
            isLoading: _v37,
            statValue: _v32,
            children: _v37 || _v40 ? (0, _v3.jsxs)(_v3.Fragment, {
              children: [(0, _v3.jsx)(_v45.Skeleton, {
                width: "12rem",
                height: "1.25rem",
                marginTop: "0.7rem"
              }), (0, _v3.jsx)(_v45.Skeleton, {
                width: "100%",
                height: "1.25rem",
                marginTop: "0.7rem"
              })]
            }) : (0, _v3.jsxs)(_v3.Fragment, {
              children: [(0, _v3.jsx)(_v448.Paragraph, {
                size: "md",
                color: "text-secondary",
                children: null != _v36 ? (0, _v190.T_SNAPSHOT_VIDEOS_COUNT)(_v36, _v0.locale) : "-"
              }), (0, _v3.jsx)(_v6.Flex, {
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.75rem",
                color: "text-secondary",
                marginTop: "1rem",
                children: (0, _v3.jsx)(_v728.Progress, {
                  width: "100%",
                  value: Number(_v43) || 0
                })
              })]
            })
          }), (0, _v3.jsx)(_v739, {
            title: _v190.T_TOTAL_VIEWS,
            tooltipContent: _v190.T_TOTAL_VIEWS_TOOLTIP,
            locale: _v0.locale,
            isLoading: _v37,
            statValue: _v33,
            children: (0, _v3.jsx)(_v5.Box, {
              flexGrow: "1",
              flexBasis: "0",
              width: "100%",
              height: "3.5rem",
              children: _v38 ? (0, _v3.jsx)(_v45.Skeleton, {
                height: "3.5rem",
                width: "100%",
                marginTop: "0.7rem"
              }) : (0, _v3.jsx)(_v752, {
                color: _v13,
                stopOpacity: .2,
                strokeWidth: 2,
                dataSeries: _v34,
                dataKey: "views",
                isAnimationActive: !1
              })
            })
          })]
        }), (0, _v3.jsxs)(_v5.Box, {
          borderRadius: "0.75rem",
          overflow: "hidden",
          backgroundColor: "none",
          display: {
            sm: "none",
            md: "inherit"
          },
          children: [(0, _v3.jsx)(_v5.Box, {
            position: "relative",
            borderRadius: "1.5rem",
            children: (0, _v3.jsxs)(_v6.Flex, {
              as: "table",
              flexWrap: "wrap",
              flexDirection: "column",
              overflow: "auto",
              paddingRight: "1.5rem",
              borderTopLeftRadius: "1.5rem",
              borderBottomLeftRadius: "1.5rem",
              children: [(0, _v3.jsx)(_v5.Box, {
                as: "thead",
                children: (0, _v3.jsxs)(_v6.Flex, {
                  as: "tr",
                  justifyContent: "space-between",
                  backgroundColor: "fill-surface",
                  borderTopWidth: "none",
                  borderTopColor: "none",
                  borderRadius: "1.5rem 1.5rem 0 0",
                  whiteSpace: "nowrap",
                  children: [(0, _v3.jsx)(_v746, {
                    label: _v190.T_NAME,
                    isSortable: !1,
                    sortValue: "none"
                  }), _v8 === _v719 && (0, _v3.jsx)(_v746, {
                    label: _v190.T_VIDEOS_VIEWED,
                    onClick: () => _v24("uniqueVideos"),
                    isSortable: !0,
                    sortValue: "uniqueVideos" === _v22.columnName ? _v22.value : "none",
                    tooltipContent: _v190.T_VIDEOS_VIEWED_TOOLTIP
                  }), _v8 === _v720 && (0, _v3.jsx)(_v746, {
                    label: _v190.T_VIEWERS,
                    isSortable: !0,
                    onClick: () => _v24("uniqueMembers"),
                    sortValue: "uniqueMembers" === _v22.columnName ? _v22.value : "none",
                    tooltipContent: _v190.T_VIEWERS_TOOLTIP
                  }), (0, _v3.jsx)(_v746, {
                    label: _v190.T_VIEWS,
                    isSortable: !0,
                    onClick: () => _v24("views"),
                    sortValue: "views" === _v22.columnName ? _v22.value : "none",
                    tooltipContent: _v190.T_VIEWS_TOOLTIP
                  }), (0, _v3.jsx)(_v746, {
                    label: _v190.T_COMPLETIONS,
                    isSortable: !1,
                    tooltipContent: _v190.T_COMPLETIONS_TOOLTIP
                  }), (0, _v3.jsx)(_v746, {
                    label: _v190.T_NET_PERCENT_COMPLETED,
                    isSortable: !1,
                    tooltipContent: _v190.T_NET_PERCENT_COMPLETED_TOOLTIP
                  }), (0, _v3.jsx)(_v746, {
                    label: _v190.T_NET_TIME_COMPLETED,
                    isSortable: !1,
                    tooltipContent: _v190.T_NET_TIME_COMPLETED_TOOLTIP
                  }), (0, _v3.jsx)(_v746, {
                    label: _v190.T_TOTAL_TIME_WATCHED,
                    isSortable: !1,
                    tooltipContent: _v190.T_TOTAL_TIME_WATCHED_TOOLTIP
                  }), (0, _v3.jsx)(_v746, {
                    label: _v190.T_AVG_PERCENT_WATCHED,
                    isSortable: !0,
                    tooltipContent: _v190.T_AVG_PERCENT_WATCHED_TOOLTIP,
                    onClick: () => _v24("meanPercentWatched"),
                    sortValue: "meanPercentWatched" === _v22.columnName ? _v22.value : "none"
                  })]
                })
              }), _v29 ? (0, _v3.jsx)(_v738, {
                isVideoView: _v8 === _v720
              }) : (0, _v3.jsxs)(_v5.Box, {
                as: "tbody",
                children: [(0, _v3.jsx)(_v750, {
                  uniqueValue: _v8 === _v719 ? _v27?.uniqueVideos : _v27?.uniqueMembers,
                  views: _v27?.views,
                  averagePercentWatched: _v27?.meanPercentWatched,
                  completions: _v27?.completions,
                  netPercentageCompleted: _v27?.netPercentageCompleted,
                  netTimeCompleted: _v27?.netTimeCompleted,
                  totalSecondsWatched: _v27?.totalSecondsWatched
                }), _v26?.rows?.length ? _v26?.rows?.map((_v0, _v1) => _v8 === _v719 && _v0?.metadata?.connections?.user ? (0, _v3.jsx)(_v744, {
                  item: _v0,
                  uniqueValue: _v0?.uniqueVideos,
                  children: (0, _v3.jsx)(_v742, {
                    user: _v0?.metadata?.connections?.user,
                    userThumbnailMap: _v26?.userThumbnailMap,
                    path: (0, _v367.getMemberDetailReportUrlPath)(_v0?.metadata?.connections?.user)
                  })
                }, _v1) : _v0?.metadata?.connections?.video && (0, _v3.jsx)(_v744, {
                  item: _v0,
                  uniqueValue: _v0?.uniqueMembers,
                  children: (0, _v3.jsx)(_v743, {
                    video: _v0?.metadata?.connections?.video,
                    videoThumbnailMap: _v26?.videoThumbnailMap,
                    path: (0, _v367.getVideoDetailReportUrlPath)(_v0?.metadata?.connections?.video),
                    hasDetailButton: !0
                  })
                }, _v1)) : (0, _v3.jsx)(_v745, {
                  isTableDataError: _v30
                })]
              })]
            })
          }), (0, _v3.jsx)(_v749, {
            currentPageForTableData: _v20,
            totalItems: _v28,
            setCurrentPageForTableData: _v21
          })]
        })]
      })]
    });
  }
  let _v754 = {
      [_v299.REPORT_ACTION_TYPE.SET_FILTER_LIST]: (_v0, _v1) => {
        let {
            pageFilters: _v2
          } = _v0,
          {
            list: _v3,
            filterKey: _v4
          } = _v1.payload,
          _v5 = Object.assign({}, _v2.filterLists);
        return _v5[_v4] = _v3, {
          ..._v0,
          pageFilters: {
            ..._v2,
            filterLists: _v5
          }
        };
      },
      [_v299.REPORT_ACTION_TYPE.UPDATE_DATE_RANGE]: (_v0, _v1) => {
        let {
            pageFilters: _v2
          } = _v0,
          {
            startDate: _v3,
            endDate: _v4
          } = _v1.payload;
        return {
          ..._v0,
          pageFilters: {
            ..._v2,
            startDate: _v3,
            endDate: _v4
          }
        };
      }
    },
    _v755 = (_v0, _v1) => _v754[_v1.type] ? _v754[_v1.type](_v0, _v1) : _v0;
  var _v756 = _v0.i(0);
  let _v757 = ["uri", "pictures", "name", "description", "duration", "manageLink"],
    _v758 = ({
      userId: _v0,
      teamOwnerId: _v1,
      onUserDetailsError: _v2
    }) => {
      let {
        data: _v3,
        isLoading: _v4,
        error: _v5
      } = (0, _v729.useGetUserTeammembers)(() => _v0 && _v1 ? {
        select: ["user.name", "user.pictures", "email"],
        where: {
          userId: _v1
        },
        query: {
          perPage: 1,
          users: _v0.toString()
        }
      } : null);
      (0, _v4.useEffect)(() => {
        _v5 ? _v2(!0) : _v2(!1);
      }, [_v2, _v5]);
      let _v6 = _v3?.data?.[0];
      return (0, _v3.jsx)(_v760, {
        title: _v6?.user?.name || "-",
        subtitle: _v6?.email || "-",
        isLoading: _v4,
        children: _v4 ? (0, _v3.jsx)(_v45.Skeleton, {
          height: "4.688rem",
          width: "4.688rem",
          borderRadius: "90%"
        }) : (0, _v3.jsx)(_v395.Avatar, {
          alt: "user avatar image",
          size: "xl",
          src: _v6?.user?.pictures?.sizes?.[1]?.link || _v725,
          nameProps: {
            name: _v6?.user?.name ?? ""
          }
        })
      });
    },
    _v759 = ({
      videoMetadata: _v0,
      isLoading: _v1
    }) => (0, _v3.jsx)(_v760, {
      title: _v0?.name || "",
      subtitle: (0, _v3.jsx)(_v88.Link, {
        fontSize: "body-sm",
        href: `${_v0?.manageLink}`,
        textDecoration: "underline",
        target: "_blank",
        color: "text-secondary",
        children: _v190.T_VIEW_VIDEO_DETAILS
      }),
      isLoading: _v1,
      link: _v0?.manageLink,
      children: _v1 ? (0, _v3.jsx)(_v45.Skeleton, {
        height: "3.438rem",
        width: "6.125rem",
        minWidth: "6.125rem",
        borderRadius: "0.25rem"
      }) : (0, _v3.jsx)(_v88.Link, {
        href: `${_v0?.manageLink}`,
        target: "_blank",
        children: (0, _v3.jsx)(_v5.Box, {
          backgroundImage: `url(${_v0?.pictures?.sizes?.[1]?.link || "https://i.vimeocdn.com/video/default.jpg"})`,
          backgroundSize: "cover",
          height: "3.438rem",
          width: "6.125rem",
          minWidth: "6.125rem",
          borderRadius: "0.25rem"
        })
      })
    }),
    _v760 = ({
      title: _v0,
      subtitle: _v1,
      isLoading: _v2,
      children: _v3,
      link: _v4
    }) => {
      let _v5 = (0, _v22.useRouter)();
      return (0, _v3.jsxs)(_v6.Flex, {
        alignItems: "center",
        justifyContent: "flex-start",
        fontSize: "1rem",
        flex: "1",
        children: [(0, _v3.jsx)(_v5.Box, {
          marginRight: "1.25rem",
          cursor: "pointer",
          onClick: () => _v5.back(),
          children: (0, _v3.jsx)(_v756.ChevronLeftSmall, {
            boxSize: "2.5rem"
          })
        }), _v4 ? (0, _v3.jsxs)(_v3.Fragment, {
          children: [_v3, (0, _v3.jsx)(_v761, {
            title: _v0,
            subtitle: _v1,
            isLoading: _v2,
            link: _v4
          })]
        }) : (0, _v3.jsxs)(_v6.Flex, {
          marginLeft: "1rem",
          alignItems: "center",
          children: [_v3, (0, _v3.jsx)(_v761, {
            title: _v0,
            subtitle: _v1,
            isLoading: _v2
          })]
        })]
      });
    },
    _v761 = ({
      title: _v0,
      subtitle: _v1,
      isLoading: _v2,
      link: _v3
    }) => _v2 ? (0, _v3.jsxs)(_v6.Flex, {
      marginLeft: "1rem",
      alignItems: "flex-start",
      justifyContent: "center",
      direction: "column",
      children: [(0, _v3.jsx)(_v45.Skeleton, {
        height: "2.5rem",
        width: "10rem",
        marginBottom: "0.5rem"
      }), _v1 && (0, _v3.jsx)(_v45.Skeleton, {
        height: "1.3rem",
        width: "8rem"
      })]
    }) : (0, _v3.jsxs)(_v6.Flex, {
      marginLeft: "1rem",
      alignItems: "flex-start",
      justifyContent: "center",
      direction: "column",
      children: [_v3 ? (0, _v3.jsx)(_v88.Link, {
        href: _v3,
        target: "_blank",
        rel: "noopener noreferrer",
        display: "flex",
        alignItems: "center",
        children: (0, _v3.jsx)(_v39.Header, {
          size: {
            base: "md",
            lg: "lg"
          },
          children: _v0
        })
      }) : (0, _v3.jsx)(_v39.Header, {
        size: {
          base: "md",
          lg: "lg"
        },
        children: _v0
      }), (0, _v3.jsx)(_v46.Text, {
        color: "text-secondary",
        fontSize: "0.75rem",
        fontWeight: "400",
        variant: "body-xl",
        children: _v1
      })]
    }),
    _v762 = (0, _v426.default)(async () => {
      let {
        SmallAreaChart: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      loading: () => (0, _v3.jsx)(_v45.Skeleton, {
        height: "3.5rem",
        width: "100%",
        marginTop: "0.7rem"
      })
    });
  function _v763({
    userInUse: _v0,
    pageFilters: _v1,
    organizationInternalId: _v2,
    organizationUuid: _v3
  }) {
    let _v4 = (0, _v4.useContext)(_v28.ViewerContext),
      _v5 = (0, _v24.useHistory)(),
      {
        teamOwnerId: _v6,
        groupBy: _v7,
        userOrVideoId: _v8
      } = _v726(!!(_v2 && _v3)),
      [_v9, _v10] = (0, _v4.useState)(1),
      [_v11, _v12] = (0, _v4.useState)(!1),
      [_v13, _v14] = (0, _v4.useState)(""),
      [_v15, _v16] = (0, _v4.useState)(null),
      [_v17] = (0, _v8.useToken)("semanticTokens", ["colors.fill-brand"]),
      {
        capabilities: {
          canExportAnalyticsCsv: _v18
        },
        ready: _v19
      } = (0, _v11.useCapability)(["canExportAnalyticsCsv"], _v0?.id),
      [_v20, _v21] = (0, _v4.useReducer)(_v755, {
        pageFilters: _v1
      }),
      {
        data: _v22
      } = (0, _v729.useGetUserTeammembers)(() => _v8 && _v6 ? {
        select: ["user.name"],
        where: {
          userId: _v6
        },
        query: {
          perPage: 1,
          users: _v8.toString()
        }
      } : null);
    (0, _v4.useEffect)(() => {
      _v21({
        type: _v299.REPORT_ACTION_TYPE.SET_FILTER_LIST,
        payload: {
          filterKey: _v299.Filters.MEMBER,
          list: [{
            id: `users/${_v8}`,
            name: _v22?.data?.[0]?.user?.name ?? ""
          }]
        }
      });
    }, [_v8, _v22]);
    let [_v23, _v24] = (0, _v4.useState)({
        columnName: "views",
        value: "desc"
      }),
      _v25 = _v0 => {
        let _v1 = _v5?.location?.pathname;
        _v24({
          columnName: _v0,
          value: "asc" == _v23.value ? "desc" : "asc"
        }), (0, _v32.sendTableColumnSortEvent)(_v0, _v1, "asc" == _v23.value ? "desc" : "asc", _v4?.teamUser);
      },
      {
        exportLink: _v26,
        tableData: _v27,
        totalRow: _v28,
        totalItems: _v29,
        isLoading: _v30,
        isError: _v31
      } = _v736(_v20.pageFilters, _v7, _v6, _v9, _v23),
      {
        meanPercentWatched: _v32,
        uniqueVideos: _v33,
        views: _v34,
        graphSeriesData: _v35,
        totalVideos: _v36,
        isAllTimeDataLoading: _v37,
        isGraphDataLoading: _v38,
        isTotalVideosLoading: _v39,
        isError: _v40
      } = _v735(_v20.pageFilters, _v6),
      _v41 = _v33 && _v36 ? (_v33 / _v36 * 100).toFixed(1) : 0,
      _v42 = _v18 && _v19 && _v26 && _v27?.rows?.length;
    return (0, _v3.jsxs)(_v5.Box, {
      background: "background",
      height: "100%",
      minHeight: "100vh",
      paddingBottom: "2.5rem",
      width: "100%",
      children: [(0, _v3.jsx)(_v751, {
        reportName: _v179.REPORT_NAME_DISPLAY_MAP[_v179.REPORT_TYPE_TEAM],
        children: _v42 ? (0, _v3.jsx)(_v465, {
          viewer: _v4,
          reportType: _v299.Reports.TEAM,
          emailAddress: _v4?.user?.email,
          filters: _v20?.pageFilters,
          csvExportURL: _v26
        }) : null
      }), (0, _v3.jsx)(_v6.Flex, {
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "0.5rem",
        flexWrap: "wrap",
        paddingRight: "1.5rem",
        paddingLeft: "1.5rem",
        children: (0, _v3.jsxs)(_v6.Flex, {
          gap: "1.5rem",
          paddingTop: "1.5rem",
          alignItems: "center",
          children: [_v2 && _v3 && (0, _v3.jsx)(_v402, {
            organizationUuid: _v3,
            dispatch: _v21,
            filterLists: _v20.pageFilters.filterLists
          }), (0, _v3.jsx)(_v337, {
            userInUse: _v0,
            filters: _v20.pageFilters,
            calendarPresets: _v179.CALENDAR_PRESETS[_v299.Reports.TEAM],
            dispatch: _v21,
            rangeText: _v13,
            setRangeText: _v14,
            activePreset: _v15,
            setActivePreset: _v16
          }), (0, _v3.jsx)(_v331, {
            alignContent: "left",
            dispatch: _v21,
            filterKey: _v299.Filters.CONTENT,
            filterLists: _v20.pageFilters.filterLists,
            userInUse: _v0,
            disabled: !1,
            startDate: _v20.pageFilters.startDate,
            endDate: _v20.pageFilters.endDate,
            filtersToApply: []
          }), (0, _v3.jsx)(_v456, {
            dispatch: _v21,
            filterKey: _v299.Filters.STREAMING_TYPE,
            filterLists: _v20.pageFilters.filterLists,
            userInUse: _v0,
            disabled: !1,
            startDate: _v20.pageFilters.startDate,
            endDate: _v20.pageFilters.endDate,
            filtersToApply: []
          })]
        })
      }), (0, _v3.jsxs)(_v5.Box, {
        padding: "1.5rem 0rem 1.5rem 1.5rem",
        overflowX: "scroll",
        children: [(0, _v3.jsx)(_v6.Flex, {
          backgroundColor: "fill-surface",
          borderRadius: "0.75rem",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "1.5rem",
          marginRight: "1.5rem",
          marginBottom: "1.5rem",
          minWidth: "25rem",
          children: (0, _v3.jsx)(_v758, {
            userId: _v8,
            teamOwnerId: _v6,
            onUserDetailsError: _v0 => _v12(_v0)
          })
        }), (_v40 || _v31 || _v11) && (0, _v3.jsx)(_v5.Box, {
          paddingRight: "1.5rem",
          children: (0, _v3.jsx)(_v105.Alert, {
            status: "error",
            marginBottom: "1.5rem",
            borderRadius: "0.75rem",
            alignItems: "center",
            children: (0, _v3.jsx)(_v106.AlertDescription, {
              sx: {
                a: {
                  textDecoration: "none",
                  color: _v17
                }
              },
              children: (0, _v190.T_ERROR_MESSAGE)()
            })
          })
        }), (0, _v3.jsxs)(_v6.Flex, {
          width: "100%",
          justifyContent: "space-between",
          marginBottom: "1.5rem",
          gap: "1.5rem",
          flexShrink: "1",
          flexWrap: "wrap",
          paddingRight: "1.5rem",
          children: [(0, _v3.jsx)(_v739, {
            title: _v190.T_VIDEOS_VIEWED,
            tooltipContent: _v190.T_VIDEOS_VIEWED_MEMBER_TOOLTIP,
            locale: _v0.locale,
            isLoading: _v37,
            statValue: _v33,
            children: _v37 || _v39 ? (0, _v3.jsxs)(_v3.Fragment, {
              children: [(0, _v3.jsx)(_v45.Skeleton, {
                width: "12rem",
                height: "1.25rem",
                marginTop: "0.7rem"
              }), (0, _v3.jsx)(_v45.Skeleton, {
                width: "100%",
                height: "1.25rem",
                marginTop: "0.7rem"
              })]
            }) : (0, _v3.jsxs)(_v3.Fragment, {
              children: [(0, _v3.jsx)(_v448.Paragraph, {
                size: "md",
                color: "text-secondary",
                children: null != _v36 ? (0, _v190.T_SNAPSHOT_VIDEOS_COUNT)(_v36, _v0.locale) : "-"
              }), (0, _v3.jsx)(_v6.Flex, {
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.75rem",
                color: "text-secondary",
                marginTop: "1rem",
                children: (0, _v3.jsx)(_v728.Progress, {
                  width: "100%",
                  value: Number(_v41)
                })
              })]
            })
          }), (0, _v3.jsx)(_v739, {
            title: _v190.T_TOTAL_VIEWS,
            tooltipContent: _v190.T_TOTAL_VIEWS_MEMBER_TOOLTIP,
            locale: _v0.locale,
            isLoading: _v37,
            statValue: _v34,
            children: (0, _v3.jsx)(_v5.Box, {
              flexGrow: "1",
              flexBasis: "0",
              width: "100%",
              height: "3.5rem",
              children: _v38 ? (0, _v3.jsx)(_v45.Skeleton, {
                height: "3.5rem",
                width: "100%",
                marginTop: "0.7rem"
              }) : (0, _v3.jsx)(_v762, {
                color: _v17,
                stopOpacity: .2,
                strokeWidth: 2,
                dataSeries: _v35,
                dataKey: "views",
                isAnimationActive: !1
              })
            })
          }), (0, _v3.jsx)(_v739, {
            title: _v190.T_AVG_PERCENT_WATCHED,
            tooltipContent: _v190.T_AVG_PERCENT_WATCHED_MEMBER_TOOLTIP,
            locale: _v0.locale,
            styleFormat: "percent",
            isLoading: _v37,
            statValue: _v32 ? _v32 / 100 : 0,
            children: _v37 ? (0, _v3.jsx)(_v45.Skeleton, {
              width: "100%",
              height: "1.25rem",
              marginTop: "2.7rem"
            }) : (0, _v3.jsx)(_v6.Flex, {
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.75rem",
              color: "text-secondary",
              marginTop: "2.8rem",
              children: (0, _v3.jsx)(_v728.Progress, {
                width: "100%",
                value: _v32 ?? 0
              })
            })
          })]
        }), (0, _v3.jsxs)(_v5.Box, {
          borderRadius: "0.75rem",
          overflow: "hidden",
          backgroundColor: "none",
          display: {
            sm: "none",
            md: "inherit"
          },
          children: [(0, _v3.jsx)(_v5.Box, {
            position: "relative",
            borderRadius: "1.5rem",
            children: (0, _v3.jsxs)(_v6.Flex, {
              as: "table",
              flexWrap: "wrap",
              flexDirection: "column",
              overflow: "auto",
              paddingRight: "1.5rem",
              borderTopLeftRadius: "1.5rem",
              borderBottomLeftRadius: "1.5rem",
              children: [(0, _v3.jsxs)(_v6.Flex, {
                as: "tr",
                justifyContent: "space-between",
                backgroundColor: "fill-surface",
                borderTopWidth: "none",
                borderTopColor: "none",
                borderRadius: "1.5rem 1.5rem 0 0",
                whiteSpace: "nowrap",
                children: [(0, _v3.jsx)(_v746, {
                  label: _v190.T_NAME,
                  isSortable: !1,
                  sortValue: "none"
                }), (0, _v3.jsx)(_v746, {
                  label: _v190.T_VIEWS,
                  isSortable: !0,
                  onClick: () => _v25("views"),
                  sortValue: "views" === _v23.columnName ? _v23.value : "none",
                  tooltipContent: _v190.T_VIEWS_TOOLTIP
                }), (0, _v3.jsx)(_v746, {
                  label: _v190.T_COMPLETIONS,
                  isSortable: !1,
                  tooltipContent: _v190.T_COMPLETIONS_TOOLTIP
                }), (0, _v3.jsx)(_v746, {
                  label: _v190.T_NET_PERCENT_COMPLETED,
                  isSortable: !1,
                  tooltipContent: _v190.T_NET_PERCENT_COMPLETED_DETAIL_TOOLTIP
                }), (0, _v3.jsx)(_v746, {
                  label: _v190.T_NET_TIME_COMPLETED,
                  isSortable: !1,
                  tooltipContent: _v190.T_NET_TIME_COMPLETED_DETAIL_TOOLTIP
                }), (0, _v3.jsx)(_v746, {
                  label: _v190.T_TOTAL_TIME_WATCHED,
                  isSortable: !1,
                  tooltipContent: _v190.T_TOTAL_TIME_WATCHED_TOOLTIP
                }), (0, _v3.jsx)(_v746, {
                  label: _v190.T_AVG_PERCENT_WATCHED,
                  isSortable: !0,
                  tooltipContent: _v190.T_AVG_PERCENT_WATCHED_TOOLTIP,
                  onClick: () => _v25("meanPercentWatched"),
                  sortValue: "meanPercentWatched" === _v23.columnName ? _v23.value : "none"
                })]
              }), _v30 ? (0, _v3.jsx)(_v738, {
                isVideoView: !0,
                columns: 6
              }) : (0, _v3.jsxs)(_v5.Box, {
                as: "tbody",
                children: [(0, _v3.jsx)(_v750, {
                  views: _v28?.views,
                  averagePercentWatched: _v28?.meanPercentWatched,
                  completions: _v28?.completions,
                  netPercentageCompleted: _v28?.netPercentageCompleted,
                  netTimeCompleted: _v28?.netTimeCompleted,
                  totalSecondsWatched: _v28?.totalSecondsWatched,
                  showUniqueValue: !1
                }), _v27?.rows?.length ? _v27?.rows?.map((_v0, _v1) => (0, _v3.jsx)(_v744, {
                  item: _v0,
                  showTimeSegmentBar: !0,
                  showUniqueValue: !1,
                  children: (0, _v3.jsx)(_v743, {
                    video: _v0?.metadata?.connections?.video,
                    videoThumbnailMap: _v27?.videoThumbnailMap,
                    path: _v0?.metadata?.connections?.video?.manageLink ?? "",
                    openLinkInNewTab: !0
                  })
                }, _v1)) : (0, _v3.jsx)(_v745, {
                  isTableDataError: _v31
                })]
              })]
            })
          }), (0, _v3.jsx)(_v749, {
            currentPageForTableData: _v9,
            totalItems: _v29,
            setCurrentPageForTableData: _v10
          })]
        })]
      })]
    });
  }
  var _v764 = _v0.i(0);
  let _v765 = (0, _v426.default)(async () => {
    let {
      SmallAreaChart: _v0
    } = await _v0.A(0);
    return {
      default: _v0
    };
  }, {
    loadableGenerated: {
      modules: [0]
    },
    loading: () => (0, _v3.jsx)(_v45.Skeleton, {
      height: "3.5rem",
      width: "100%",
      marginTop: "0.7rem"
    })
  });
  function _v766({
    userInUse: _v0,
    pageFilters: _v1,
    organizationInternalId: _v2,
    organizationUuid: _v3
  }) {
    let _v4 = (0, _v4.useContext)(_v28.ViewerContext),
      _v5 = (0, _v24.useHistory)(),
      {
        teamOwnerId: _v6,
        groupBy: _v7,
        userOrVideoId: _v8
      } = _v726(!!(_v2 && _v3)),
      [_v9, _v10] = (0, _v4.useState)(1),
      [_v11, _v12] = (0, _v4.useState)(""),
      [_v13, _v14] = (0, _v4.useState)(null),
      [_v15] = (0, _v8.useToken)("semanticTokens", ["colors.fill-brand"]),
      {
        capabilities: {
          canExportAnalyticsCsv: _v16
        },
        ready: _v17
      } = (0, _v11.useCapability)(["canExportAnalyticsCsv"], _v0?.id),
      [_v18, _v19] = (0, _v4.useReducer)(_v755, {
        pageFilters: _v1
      }),
      {
        data: _v20
      } = (0, _v764.useGetVideo)(() => _v8 ? {
        select: ["name"],
        where: {
          videoId: _v8
        }
      } : null),
      [_v21, _v22] = (0, _v4.useState)({
        columnName: "views",
        value: "desc"
      }),
      _v23 = _v0 => {
        let _v1 = _v5?.location?.pathname;
        _v22({
          columnName: _v0,
          value: "asc" == _v21.value ? "desc" : "asc"
        }), (0, _v32.sendTableColumnSortEvent)(_v0, _v1, "asc" == _v21.value ? "desc" : "asc", _v4?.teamUser);
      };
    (0, _v4.useEffect)(() => {
      _v19({
        type: _v299.REPORT_ACTION_TYPE.SET_FILTER_LIST,
        payload: {
          filterKey: _v299.Filters.CONTENT,
          list: [{
            id: `videos/${_v8}`,
            name: _v20?.name
          }]
        }
      });
    }, [_v8, _v20]);
    let {
        data: _v24,
        isLoading: _v25,
        error: _v26
      } = (0, _v764.useGetVideo)(() => _v8 ? {
        select: _v757,
        where: {
          videoId: _v8
        }
      } : null),
      {
        exportLink: _v27,
        tableData: _v28,
        totalRow: _v29,
        totalItems: _v30,
        isLoading: _v31,
        isError: _v32
      } = _v736(_v18.pageFilters, _v7, _v6, _v9, _v21),
      {
        meanPercentWatched: _v33,
        uniqueMembers: _v34,
        views: _v35,
        graphSeriesData: _v36,
        totalMembers: _v37,
        isAllTimeDataLoading: _v38,
        isGraphDataLoading: _v39,
        isTotalTeamMembersLoading: _v40,
        isError: _v41
      } = _v735(_v18.pageFilters, _v6),
      _v42 = _v34 && _v37 ? (_v34 / _v37 * 100).toFixed(1) : 0,
      _v43 = _v16 && _v17 && _v27 && _v28?.rows?.length;
    return (0, _v3.jsxs)(_v5.Box, {
      background: "background",
      height: "100%",
      minHeight: "100vh",
      paddingBottom: "2.5rem",
      width: "100%",
      children: [(0, _v3.jsx)(_v751, {
        reportName: _v179.REPORT_NAME_DISPLAY_MAP[_v179.REPORT_TYPE_TEAM],
        children: _v43 ? (0, _v3.jsx)(_v465, {
          viewer: _v4,
          reportType: _v299.Reports.TEAM,
          emailAddress: _v4?.user?.email,
          filters: _v18?.pageFilters,
          csvExportURL: _v27
        }) : null
      }), (0, _v3.jsx)(_v6.Flex, {
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "0.5rem",
        flexWrap: "wrap",
        paddingRight: "1.5rem",
        paddingLeft: "1.5rem",
        children: (0, _v3.jsxs)(_v6.Flex, {
          gap: "1.5rem",
          paddingTop: "1.5rem",
          alignItems: "center",
          children: [_v2 && _v3 && (0, _v3.jsx)(_v402, {
            organizationUuid: _v3,
            dispatch: _v19,
            filterLists: _v18.pageFilters.filterLists
          }), (0, _v3.jsx)(_v337, {
            userInUse: _v0,
            filters: _v18?.pageFilters,
            calendarPresets: _v179.CALENDAR_PRESETS[_v299.Reports.TEAM],
            dispatch: _v19,
            rangeText: _v11,
            setRangeText: _v12,
            activePreset: _v13,
            setActivePreset: _v14
          }), (0, _v3.jsx)(_v456, {
            dispatch: _v19,
            filterKey: _v299.Filters.STREAMING_TYPE,
            filterLists: _v18.pageFilters.filterLists,
            userInUse: _v0,
            disabled: !1,
            startDate: _v18.pageFilters.startDate,
            endDate: _v18.pageFilters.endDate,
            filtersToApply: []
          })]
        })
      }), (0, _v3.jsxs)(_v5.Box, {
        padding: "1.5rem 0rem 1.5rem 1.5rem",
        overflowX: "scroll",
        children: [(0, _v3.jsx)(_v6.Flex, {
          backgroundColor: "fill-surface",
          borderRadius: "0.75rem",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "1.5rem",
          marginBottom: "1.5rem",
          marginRight: "1.5rem",
          minWidth: "25rem",
          children: (0, _v3.jsx)(_v759, {
            videoMetadata: _v24,
            isLoading: !_v25 && _v26
          })
        }), (_v41 || _v32 || _v26) && (0, _v3.jsx)(_v5.Box, {
          paddingRight: "1.5rem",
          children: (0, _v3.jsx)(_v105.Alert, {
            status: "error",
            marginBottom: "1.5rem",
            borderRadius: "0.75rem",
            alignItems: "center",
            children: (0, _v3.jsx)(_v106.AlertDescription, {
              sx: {
                a: {
                  textDecoration: "none",
                  color: _v15
                }
              },
              children: (0, _v190.T_ERROR_MESSAGE)()
            })
          })
        }), (0, _v3.jsxs)(_v6.Flex, {
          width: "100%",
          justifyContent: "space-between",
          marginBottom: "1.5rem",
          gap: "1.5rem",
          flexShrink: "1",
          flexWrap: "wrap",
          paddingRight: "1.5rem",
          children: [(0, _v3.jsx)(_v739, {
            title: _v190.T_VIEWERS,
            tooltipContent: _v190.T_VIEWERS_VIDEO_TOOLTIP,
            locale: _v0.locale,
            isLoading: _v38,
            statValue: _v34,
            children: _v38 || _v40 ? (0, _v3.jsxs)(_v3.Fragment, {
              children: [(0, _v3.jsx)(_v45.Skeleton, {
                width: "12rem",
                height: "1.25rem",
                marginTop: "0.7rem"
              }), (0, _v3.jsx)(_v45.Skeleton, {
                width: "100%",
                height: "1.25rem",
                marginTop: "0.7rem"
              })]
            }) : (0, _v3.jsxs)(_v3.Fragment, {
              children: [(0, _v3.jsx)(_v448.Paragraph, {
                size: "md",
                color: "text-secondary",
                children: null != _v37 ? (0, _v190.T_SNAPSHOT_MEMBERS_COUNT)(_v37, _v0.locale) : "-"
              }), (0, _v3.jsx)(_v6.Flex, {
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.75rem",
                color: "text-secondary",
                marginTop: "1rem",
                children: (0, _v3.jsx)(_v728.Progress, {
                  width: "100%",
                  value: Number(_v42)
                })
              })]
            })
          }), (0, _v3.jsx)(_v739, {
            title: _v190.T_TOTAL_VIEWS,
            tooltipContent: _v190.T_TOTAL_VIEWS_VIDEO_TOOLTIP,
            locale: _v0.locale,
            isLoading: _v38,
            statValue: _v35,
            children: (0, _v3.jsx)(_v5.Box, {
              flexGrow: "1",
              flexBasis: "0",
              width: "100%",
              height: "3.5rem",
              children: _v39 ? (0, _v3.jsx)(_v45.Skeleton, {
                height: "3.5rem",
                width: "100%",
                marginTop: "0.7rem"
              }) : (0, _v3.jsx)(_v765, {
                color: _v15,
                stopOpacity: .2,
                strokeWidth: 2,
                dataSeries: _v36,
                dataKey: "views",
                isAnimationActive: !1
              })
            })
          }), (0, _v3.jsx)(_v739, {
            title: _v190.T_AVG_PERCENT_WATCHED,
            tooltipContent: _v190.T_AVG_PERCENT_WATCHED_VIDEO_TOOLTIP,
            locale: _v0.locale,
            styleFormat: "percent",
            isLoading: _v38,
            statValue: _v33 ? _v33 / 100 : 0,
            children: _v38 ? (0, _v3.jsx)(_v45.Skeleton, {
              width: "100%",
              height: "1.25rem",
              marginTop: "2.7rem"
            }) : (0, _v3.jsx)(_v6.Flex, {
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.75rem",
              color: "text-secondary",
              marginTop: "2.8rem",
              children: (0, _v3.jsx)(_v728.Progress, {
                width: "100%",
                value: Number(_v33)
              })
            })
          })]
        }), (0, _v3.jsxs)(_v5.Box, {
          borderRadius: "0.75rem",
          overflow: "hidden",
          backgroundColor: "none",
          display: {
            sm: "none",
            md: "inherit"
          },
          children: [(0, _v3.jsx)(_v5.Box, {
            position: "relative",
            borderRadius: "1.5rem",
            children: (0, _v3.jsxs)(_v6.Flex, {
              as: "table",
              flexWrap: "wrap",
              flexDirection: "column",
              overflow: "auto",
              paddingRight: "1.5rem",
              borderTopLeftRadius: "1.5rem",
              borderBottomLeftRadius: "1.5rem",
              children: [(0, _v3.jsxs)(_v6.Flex, {
                as: "tr",
                justifyContent: "space-between",
                backgroundColor: "fill-surface",
                borderTopWidth: "none",
                borderTopColor: "none",
                borderRadius: "1.5rem 1.5rem 0 0",
                whiteSpace: "nowrap",
                children: [(0, _v3.jsx)(_v746, {
                  label: _v190.T_NAME,
                  isSortable: !1,
                  sortValue: "none"
                }), (0, _v3.jsx)(_v746, {
                  label: _v190.T_VIEWS,
                  isSortable: !0,
                  onClick: () => _v23("views"),
                  sortValue: "views" === _v21.columnName ? _v21.value : "none",
                  tooltipContent: _v190.T_VIEWS_TOOLTIP
                }), (0, _v3.jsx)(_v746, {
                  label: _v190.T_COMPLETIONS,
                  isSortable: !1,
                  tooltipContent: _v190.T_COMPLETIONS_TOOLTIP
                }), (0, _v3.jsx)(_v746, {
                  label: _v190.T_NET_PERCENT_COMPLETED,
                  isSortable: !1,
                  tooltipContent: _v190.T_NET_PERCENT_COMPLETED_DETAIL_TOOLTIP
                }), (0, _v3.jsx)(_v746, {
                  label: _v190.T_NET_TIME_COMPLETED,
                  isSortable: !1,
                  tooltipContent: _v190.T_NET_TIME_COMPLETED_DETAIL_TOOLTIP
                }), (0, _v3.jsx)(_v746, {
                  label: _v190.T_TOTAL_TIME_WATCHED,
                  isSortable: !1,
                  tooltipContent: _v190.T_TOTAL_TIME_WATCHED_TOOLTIP
                }), (0, _v3.jsx)(_v746, {
                  label: _v190.T_AVG_PERCENT_WATCHED,
                  isSortable: !0,
                  tooltipContent: _v190.T_AVG_PERCENT_WATCHED_TOOLTIP,
                  onClick: () => _v23("meanPercentWatched"),
                  sortValue: "meanPercentWatched" === _v21.columnName ? _v21.value : "none"
                })]
              }), _v31 || _v25 ? (0, _v3.jsx)(_v738, {
                isVideoView: !1,
                columns: 6
              }) : (0, _v3.jsxs)(_v5.Box, {
                as: "tbody",
                children: [(0, _v3.jsx)(_v750, {
                  views: _v29?.views,
                  averagePercentWatched: _v29?.meanPercentWatched,
                  completions: _v29?.completions,
                  netPercentageCompleted: _v29?.netPercentageCompleted,
                  netTimeCompleted: _v29?.netTimeCompleted,
                  totalSecondsWatched: _v29?.totalSecondsWatched,
                  showUniqueValue: !1
                }), _v28?.rows?.length ? _v28?.rows?.map((_v0, _v1) => (0, _v3.jsx)(_v744, {
                  item: _v0,
                  showTimeSegmentBar: !0,
                  duration: _v24?.duration,
                  showUniqueValue: !1,
                  children: (0, _v3.jsx)(_v742, {
                    user: _v0?.metadata?.connections?.user,
                    userThumbnailMap: _v28?.userThumbnailMap
                  })
                }, _v1)) : (0, _v3.jsx)(_v745, {
                  isTableDataError: _v32
                })]
              })]
            })
          }), (0, _v3.jsx)(_v749, {
            currentPageForTableData: _v9,
            totalItems: _v30,
            setCurrentPageForTableData: _v10
          })]
        })]
      })]
    });
  }
  let _v767 = (0, _v426.default)(async () => {
      let {
        LazyMultiLineGraph: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      loading: () => (0, _v3.jsx)("div", {})
    }),
    _v768 = ["metadata.connections.video.uri", "metadata.connections.video.title"],
    _v769 = [{
      label: (0, _v30.translate)({
        singular: "Total thumbs votes",
        dictionary: {
          es: {
            singular: "Total de votos de pulgares"
          },
          "de-DE": {
            singular: "Gesamtzahl der Daumen-Stimmen"
          },
          "fr-FR": {
            singular: "Total des votes (pouces)"
          },
          "ja-JP": {
            singular: "サム評価の合計投票数"
          },
          "ko-KR": {
            singular: "총 좋아요·싫어요 투표 수"
          },
          "pt-BR": {
            singular: "Total de votos (thumbs)"
          },
          "zh-CN": {
            singular: "点赞与点踩票数总计"
          }
        }
      }),
      value: "thumbsWidgetClicks"
    }, {
      label: (0, _v30.translate)({
        singular: "Avg. thumbs rating",
        dictionary: {
          es: {
            singular: "Valoración media (pulgares)"
          },
          "de-DE": {
            singular: "Durchschnittliche Daumenbewertung"
          },
          "fr-FR": {
            singular: "Évaluation moyenne (pouces)"
          },
          "ja-JP": {
            singular: "平均サム評価"
          },
          "ko-KR": {
            singular: "평균 추천 평점"
          },
          "pt-BR": {
            singular: "Avaliação média (thumbs)"
          },
          "zh-CN": {
            singular: "平均点赞评分"
          }
        }
      }),
      value: "thumbsWidgetAverageRating"
    }, {
      label: (0, _v30.translate)({
        singular: "Total stars votes",
        dictionary: {
          es: {
            singular: "Total de votos (estrellas)"
          },
          "de-DE": {
            singular: "Gesamtanzahl der Sternebewertungen"
          },
          "fr-FR": {
            singular: "Nombre total de votes (étoiles)"
          },
          "ja-JP": {
            singular: "星の投票総数"
          },
          "ko-KR": {
            singular: "총 별점 투표 수"
          },
          "pt-BR": {
            singular: "Total de votos em estrelas"
          },
          "zh-CN": {
            singular: "星级投票总数"
          }
        }
      }),
      value: "rankingWidgetClicks"
    }, {
      label: (0, _v30.translate)({
        singular: "Avg. stars rating",
        dictionary: {
          es: {
            singular: "Valoración media (estrellas)"
          },
          "de-DE": {
            singular: "Durchschnittliche Sternebewertung"
          },
          "fr-FR": {
            singular: "Note moyenne (étoiles)"
          },
          "ja-JP": {
            singular: "平均星評価"
          },
          "ko-KR": {
            singular: "평균 별점"
          },
          "pt-BR": {
            singular: "Média de avaliação em estrelas"
          },
          "zh-CN": {
            singular: "平均星级评分"
          }
        }
      }),
      value: "rankingWidgetAverageRating"
    }],
    _v770 = (_v0, _v1) => _v1 && _v1.length ? Object.fromEntries(Object.entries((0, _v562.default)(_v1, _v0 => _v21.DateTime.fromISO(_v0?.startDate, {
      zone: "utc"
    }).toISODate())).map(([_v0, _v1]) => [_v0, _v1.reduce((_v0, _v1) => ({
      ..._v0,
      [_v1?.metadata?.connections?.video?.uri]: {
        cid: _v1?.metadata?.connections?.video?.uri,
        name: _v1?.metadata?.connections?.video?.title,
        range: {
          start_date: _v21.DateTime.fromISO(_v1?.startDate, {
            zone: "utc"
          }).toISODate(),
          end_date: _v21.DateTime.fromISO(_v1?.endDate, {
            zone: "utc"
          }).toISODate()
        },
        [_v0]: Number((0, _v428.default)(_v1, _v0))
      }
    }), {})])) : {};
  function _v771({
    state: _v0,
    dispatch: _v1
  }) {
    let {
        startDate: _v2,
        endDate: _v3
      } = (0, _v4.useMemo)(() => _v0.filters[_v0.reportGroup], [_v0.filters, _v0.reportGroup]),
      _v4 = (0, _v4.useMemo)(() => [_v592], []),
      {
        totalsRow: _v5,
        hasError: _v6,
        overriddenMetrics: _v7
      } = _v635(_v0.userInUse.id, _v0.filters.vimeo, _v4, _v626, _v0.primaryDimensions.vimeo, _v1),
      _v8 = _v632({
        primaryDimensionColumn: _v4[0],
        metricColumns: _v7,
        graphField: _v0.primaryDimensions.vimeo
      }),
      {
        rows: _v9,
        isLoading: _v10,
        isError: _v11,
        hasNextPage: _v12,
        loadNextPage: _v13
      } = _v628(_v0.userInUse.id, _v0.filters.vimeo, _v8.remote, _v4[0], _v7, _v8.sortFn),
      {
        graphData: _v14,
        isLoading: _v15,
        isError: _v16
      } = _v666(_v299.Reports.VIDEO_RATING, _v0, _v770, _v768, _v457, void 0 === _v9);
    return (0, _v4.useEffect)(() => {
      void 0 !== _v9 && _v1({
        type: _v299.REPORT_ACTION_TYPE.SET_GRAPH_ITEMS,
        payload: _v9.slice(0, 5).map(_v0 => ({
          id: _v0.key
        })),
        isInitialLoad: !0
      });
    }, [_v1, _v9]), (0, _v4.useEffect)(() => {
      _v1({
        type: _v299.REPORT_ACTION_TYPE.ERROR_STATE_UPDATE,
        payload: _v6 || _v11 || _v16
      });
    }, [_v1, _v16, _v11, _v6]), (0, _v4.useEffect)(() => {
      _v1({
        type: _v299.REPORT_ACTION_TYPE.UPDATE_LOADING_STATE,
        payload: _v10 || _v15
      });
    }, [_v1, _v15, _v10]), (0, _v3.jsxs)(_v5.Box, {
      width: "100%",
      children: [(0, _v3.jsx)(_v404, {
        reportType: _v299.Reports.VIDEO_RATING,
        title: _v179.REPORT_NAME_DISPLAY_MAP[_v179.REPORT_TYPE_VIDEO_RATING],
        reportFilters: _v457,
        state: _v0,
        dispatch: _v1,
        calendarPresets: _v179.CALENDAR_PRESETS[_v299.Reports.VIDEO_RATING],
        showFilterPanel: !0
      }), (0, _v3.jsx)(_v5.Box, {
        position: "relative",
        children: (0, _v3.jsx)(_v767, {
          reportType: _v299.Reports.VIDEO_RATING,
          visibleMetric: _v0.primaryDimensions[_v179.REPORT_GROUP_MAP[_v299.Reports.VIDEO_RATING]],
          payload: _v14,
          resetTablePage: () => void 0,
          selectedAggregateInterval: _v0.selectedAggregateInterval,
          selectedDataItems: _v0.selectedItemsForGraph,
          dispatch: _v1,
          metrics: _v769,
          startDate: _v2,
          endDate: _v3,
          isGraphError: _v16,
          isLoading: _v0.isLoading
        })
      }), (0, _v3.jsxs)(_v5.Box, {
        marginX: "xl",
        marginTop: "lg",
        children: [(0, _v3.jsx)(_v658, {
          dimensionColumns: _v4,
          metricColumns: _v7 ?? _v626,
          totalRow: _v5,
          rootRows: _v9,
          dispatch: _v1,
          selectedItems: _v0.selectedItemsForGraph,
          sort: _v8,
          hasError: _v11 || _v6,
          hasSelectableRows: !0,
          paddingRight: "xl"
        }, _v0.primaryDimensions.vimeo + "-" + _v4.map(_v0 => _v0.id).join("-")), (_v12 || _v10) && void 0 !== _v9 && (0, _v3.jsx)(_v74.Button, {
          width: "calc(100% - 2rem)",
          marginTop: "1rem",
          size: "xl",
          paddingTop: "1.3rem",
          paddingBottom: "1rem",
          variant: "secondary",
          fontWeight: "bold",
          borderRadius: "0.313rem",
          fontSize: "0.9em",
          justifyContent: "center",
          _hover: {
            cursor: "pointer"
          },
          onClick: _v13,
          children: _v10 ? (0, _v3.jsx)(_v10.Spinner, {
            size: "sm"
          }) : (0, _v3.jsx)(_v5.Box, {
            as: "span",
            children: (0, _v30.translate)({
              singular: "Load More",
              dictionary: {
                es: {
                  singular: "Cargar más"
                },
                "de-DE": {
                  singular: "Mehr laden"
                },
                "fr-FR": {
                  singular: "Plus"
                },
                "ja-JP": {
                  singular: "さらに読み込む"
                },
                "ko-KR": {
                  singular: "더 로드하기"
                },
                "pt-BR": {
                  singular: "Carregar Mais"
                },
                "zh-CN": {
                  singular: "加载更多"
                }
              }
            })
          })
        })]
      })]
    });
  }
  let _v772 = _v624.concat(_v608, _v609),
    _v773 = {
      type: _v299.TablePayloadItemType.VIDEO,
      id: "0em",
      name: "36em",
      plays: "10em",
      drm_licenses_used: "11em",
      likes: "10em",
      loads: "10em",
      third_party_impressions: "10em",
      finishes: "10em",
      downloads: "10em",
      comments: "10em",
      unique_loads: "10em",
      unique_viewers: "10em",
      totalviewduration: "15em",
      averageviewduration: "15em",
      averageviewpercentage: "15em"
    },
    _v774 = ["metadata.connections.video.uri", "metadata.connections.video.title"],
    _v775 = (_v0, _v1) => _v1 && _v1.length ? Object.fromEntries(Object.entries((0, _v562.default)(_v1, _v0 => _v21.DateTime.fromISO(_v0?.startDate, {
      zone: "utc"
    }).toISODate())).map(([_v0, _v1]) => [_v0, _v1.reduce((_v0, _v1) => ({
      ..._v0,
      [_v1?.metadata?.connections?.video?.uri]: {
        cid: _v1?.metadata?.connections?.video?.uri,
        name: _v1?.metadata?.connections?.video?.title,
        range: {
          start_date: _v21.DateTime.fromISO(_v1?.startDate, {
            zone: "utc"
          }).toISODate(),
          end_date: _v21.DateTime.fromISO(_v1?.endDate, {
            zone: "utc"
          }).toISODate()
        },
        [_v0]: +(0, _v428.default)(_v1, _v0)
      }
    }), {})])) : {};
  function _v776(_v0) {
    let {
      state: _v1,
      dispatch: _v2
    } = _v0;
    return (0, _v3.jsx)(_v3.Fragment, {
      children: (0, _v3.jsx)(_v668, {
        state: _v1,
        dispatch: _v2,
        apiPath: `users/${_v1.userInUse.id}/videos/stats`,
        reportType: _v299.Reports.VIDEO,
        reportFilters: _v457,
        reportName: _v179.REPORT_NAME_DISPLAY_MAP[_v179.REPORT_TYPE_VIDEO],
        tableLayoutData: _v773,
        tableFields: _v441.VideoReportTableFields,
        graphDataProcessor: _v775,
        graphFields: _v774,
        primaryDimensionColumn: _v592,
        metricColumns: _v772
      })
    });
  }
  let _v777 = ({
      state: _v0,
      dispatch: _v1,
      hasAnalyticsAdvanced: _v2,
      setShowUpsellModal: _v3,
      showUpsell: _v4,
      organizationUuid: _v5,
      organizationInternalId: _v6
    }) => {
      let _v7,
        _v8,
        _v9 = (0, _v4.useContext)(_v28.ViewerContext),
        {
          settings: _v10
        } = (0, _v26.useOrionSettings)(),
        _v11 = (_v7 = (0, _v24.useLocation)(), _v8 = (0, _v4.useRef)([]), (0, _v4.useEffect)(() => {
          _v8.current.push(_v7.pathname);
        }, [_v7]), _v8.current),
        _v12 = _v0 => _v5 ? _v0.replace("/analytics", "/manage/organization/analytics") : _v0,
        _v13 = (({
          viewer: _v0,
          organizationInternalId: _v1,
          organizationUuid: _v2,
          fallbackUserId: _v3
        }) => {
          if ("number" == typeof _v1 && "string" == typeof _v2 && "" !== _v2) return _v1;
          let _v4 = _v0?.teamUser?.plainTextPermissionLevel?.toLowerCase(),
            _v5 = _v0?.teamUser?.ownerId;
          return "number" == typeof _v5 ? "owner" === _v4 || "admin" === _v4 ? _v5 : null : "number" == typeof _v0?.user?.id ? _v0.user.id : _v3 ?? null;
        })({
          viewer: _v9,
          organizationInternalId: _v6,
          organizationUuid: _v5,
          fallbackUserId: _v9?.user?.id
        }),
        {
          capabilities: {
            canUseSentimentWidgets: _v14
          }
        } = (0, _v11.useCapability)(["canUseSentimentWidgets"], _v0.userInUse.id);
      return (0, _v3.jsxs)(_v24.Switch, {
        children: [(0, _v3.jsx)(_v24.Route, {
          path: _v12("/analytics"),
          exact: !0,
          render: () => (0, _v3.jsx)(_v33, {
            onClose: () => _v3(!1),
            showUpsell: _v4,
            visitedRoutes: _v11,
            children: (0, _v3.jsx)(_v561, {
              state: _v0,
              dispatch: _v1
            })
          })
        }), _v10.enable_ai_analytics_dashboard && (0, _v3.jsx)(_v24.Route, {
          exact: !0,
          path: _v12("/analytics/ai"),
          render: () => (0, _v3.jsx)(_v425, {
            state: _v0,
            dispatch: _v1
          })
        }), (0, _v3.jsx)(_v24.Route, {
          path: _v12("/analytics/bandwidth/video"),
          render: () => (0, _v3.jsx)(_v504, {
            state: _v0,
            dispatch: _v1
          })
        }), (0, _v3.jsx)(_v24.Route, {
          path: _v12("/analytics/bandwidth"),
          render: () => (0, _v3.jsx)(_v498, {
            state: _v0,
            dispatch: _v1
          })
        }), (0, _v3.jsx)(_v24.Route, {
          path: _v12("/analytics/video"),
          render: () => (0, _v3.jsx)(_v33, {
            showUpsell: !_v2,
            visitedRoutes: _v11,
            children: (0, _v3.jsx)(_v776, {
              state: _v0,
              dispatch: _v1
            })
          })
        }), (0, _v3.jsx)(_v24.Route, {
          path: _v12("/analytics/engagement"),
          render: () => (0, _v3.jsx)(_v33, {
            showUpsell: !_v2,
            visitedRoutes: _v11,
            children: (0, _v3.jsx)(_v701, {
              state: _v0,
              dispatch: _v1
            })
          })
        }), (0, _v3.jsx)(_v24.Route, {
          path: _v12("/analytics/region"),
          render: () => (0, _v3.jsx)(_v33, {
            showUpsell: !_v2,
            visitedRoutes: _v11,
            children: (0, _v3.jsx)(_v705, {
              state: _v0,
              dispatch: _v1
            })
          })
        }), (0, _v3.jsx)(_v24.Route, {
          path: _v12("/analytics/source"),
          render: () => (0, _v3.jsx)(_v33, {
            showUpsell: !_v2,
            visitedRoutes: _v11,
            children: (0, _v3.jsx)(_v709, {
              state: _v0,
              dispatch: _v1
            })
          })
        }), (0, _v3.jsx)(_v24.Route, {
          path: _v12("/analytics/device"),
          render: () => (0, _v3.jsx)(_v33, {
            showUpsell: !_v2,
            visitedRoutes: _v11,
            children: (0, _v3.jsx)(_v676, {
              state: _v0,
              dispatch: _v1
            })
          })
        }), (0, _v3.jsx)(_v24.Route, {
          path: _v12("/analytics/date"),
          render: () => (0, _v3.jsx)(_v33, {
            showUpsell: !_v2,
            visitedRoutes: _v11,
            children: (0, _v3.jsx)(_v672, {
              state: _v0,
              dispatch: _v1
            })
          })
        }), (0, _v3.jsx)(_v24.Route, {
          exact: !0,
          path: _v12("/analytics/teams/:teamOwnerId/users/:userOrVideoId"),
          render: () => (0, _v3.jsx)(_v727, {
            userInUse: _v0.userInUse,
            isOrg: !!(_v6 && _v5),
            visitedRoutes: _v11,
            children: (0, _v3.jsx)(_v763, {
              userInUse: _v0.userInUse,
              pageFilters: _v0.filters[_v299.ReportGroup.VIMEO],
              organizationInternalId: _v6,
              organizationUuid: _v5
            })
          })
        }), (0, _v3.jsx)(_v24.Route, {
          exact: !0,
          path: _v12("/analytics/teams/:teamOwnerId/videos/:userOrVideoId"),
          render: () => (0, _v3.jsx)(_v727, {
            userInUse: _v0.userInUse,
            isOrg: !!(_v6 && _v5),
            visitedRoutes: _v11,
            children: (0, _v3.jsx)(_v766, {
              organizationInternalId: _v6,
              organizationUuid: _v5,
              userInUse: _v0.userInUse,
              pageFilters: _v0.filters[_v299.ReportGroup.VIMEO]
            })
          })
        }), (0, _v3.jsx)(_v24.Route, {
          exact: !0,
          path: _v12("/analytics/teams/:teamOwnerId/users"),
          render: () => (0, _v3.jsx)(_v727, {
            userInUse: _v0.userInUse,
            isOrg: !!(_v6 && _v5),
            visitedRoutes: _v11,
            children: (0, _v3.jsx)(_v753, {
              organizationInternalId: _v6,
              organizationUuid: _v5,
              userInUse: _v0.userInUse,
              pageFilters: _v0.filters[_v299.ReportGroup.VIMEO],
              dispatch: _v1
            })
          })
        }), (0, _v3.jsx)(_v24.Route, {
          exact: !0,
          path: _v12("/analytics/teams/:teamOwnerId/videos"),
          render: () => (0, _v3.jsx)(_v727, {
            userInUse: _v0.userInUse,
            isOrg: !!(_v6 && _v5),
            visitedRoutes: _v11,
            children: (0, _v3.jsx)(_v753, {
              organizationInternalId: _v6,
              organizationUuid: _v5,
              userInUse: _v0.userInUse,
              pageFilters: _v0.filters[_v299.ReportGroup.VIMEO],
              dispatch: _v1
            })
          })
        }), _v14 && (0, _v3.jsx)(_v24.Route, {
          exact: !0,
          path: _v12("/analytics/video-rating"),
          render: () => (0, _v3.jsx)(_v33, {
            showUpsell: !_v2,
            visitedRoutes: _v11,
            children: (0, _v3.jsx)(_v771, {
              state: _v0,
              dispatch: _v1
            })
          })
        }), (0, _v3.jsx)(_v24.Route, {
          exact: !0,
          path: _v12("/analytics/v2/:reportName"),
          render: () => (0, _v3.jsx)(_v35, {})
        }), _v13 ? (0, _v3.jsx)(_v24.Redirect, {
          from: _v12("/analytics/teams"),
          to: _v12(`/analytics/teams/${_v13}/videos`)
        }) : (0, _v3.jsx)(_v24.Redirect, {
          from: _v12("/analytics/teams"),
          to: _v12("/analytics")
        }), (0, _v3.jsx)(_v24.Route, {
          path: "*",
          render: () => (0, _v3.jsx)(_v27.ErrorPage, {
            error: new _v25.ResourceNotFoundError()
          })
        })]
      });
    },
    _v778 = () => {
      let _v0 = (0, _v4.useContext)(_v28.ViewerContext),
        [_v1, _v2] = (0, _v4.useState)(!1);
      return (0, _v4.useEffect)(() => {
        _v1 || ((0, _v32.sendContentLimitBannerImpressionEvent)(window.location.pathname, _v0?.teamUser), _v2(!0));
      }, [_v1, _v0?.teamUser]), (0, _v3.jsx)(_v105.Alert, {
        variant: "info",
        display: "flex",
        alignItems: "center",
        children: (0, _v3.jsx)(_v106.AlertDescription, {
          sx: {
            a: {
              color: "vimeoBlue.500"
            }
          },
          children: (0, _v30.translate)({
            singular: "Content limit applied to show 2,000 last created videos. {A}Learn More{/A} about content limits.",
            replacements: {
              A: _v0 => (0, _v3.jsx)("a", {
                href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426192758929-Advanced-Analytics",
                target: "_blank",
                rel: "noreferrer",
                onClick: () => {
                  _v32.sendContentLimitBannerClickEvent?.(window.location.pathname, _v0?.teamUser);
                },
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Se aplica un límite de contenido para mostrar los últimos 2000 videos creados. {A}Obtén más información{/A} sobre los límites de contenido."
              },
              "de-DE": {
                singular: "Das Inhaltslimit zeigt die 2.000 zuletzt erstellten Videos an. {A}Erfahre mehr{/A} über Inhaltslimits."
              },
              "fr-FR": {
                singular: "Limite de contenu appliquée pour ne montrer que les 2 000 dernières vidéos créées. {A}En savoir plus{/A} sur les limites de contenu."
              },
              "ja-JP": {
                singular: "コンテンツ制限が適用され、最後に作成した2,000本の動画を表示しています。コンテンツ制限に関する{A}詳細はこちら{/A}をご覧ください。"
              },
              "ko-KR": {
                singular: "마지막으로 만든 동영상 2,000개를 표시하도록 콘텐츠 제한이 적용되었습니다. 콘텐츠 제한에 대해 {A}자세히 알아보세요{/A}."
              },
              "pt-BR": {
                singular: "Limite de conteúdo aplicado para mostrar apenas os 2.000 últimos vídeos criados. {A}Saiba mais{/A} sobre limites de conteúdo."
              },
              "zh-CN": {
                singular: "有内容限制，显示 2,000 个最新创建的视频。{A}了解更多{/A}有关内容限制的信息。"
              }
            }
          })
        })
      });
    },
    _v779 = (_v0, _v1) => {
      let _v2 = Object.assign({}, _v0.filters[_v0.reportGroup]);
      switch (_v1.type) {
        case _v299.REPORT_ACTION_TYPE.SET_GRAPH_ITEMS:
          let _v0 = _v0.selectedItemsForGraph.reduce((_v0, _v1) => (_v0[_v1.id] = _v1, _v0), {});
          _v0.selectedItemsForGraph.find(_v0 => _v0.id === _v179.TOTAL_ROW_ID) && _v1.isInitialLoad && _v1.payload.unshift({
            id: _v179.TOTAL_ROW_ID,
            name: _v179.TOTAL_ROW_NAME,
            type: _v1.payload?.[0]?.type
          });
          let _v1 = _v1.payload.reduce((_v0, _v1) => _v0[_v1.id]?.color ? [..._v0, _v0[_v1.id].color] : _v0, []),
            _v2 = _v179.MULTI_LINE_GRAPH_COLORS.filter(_v0 => -1 === _v1.findIndex(_v0 => _v0 === _v0)),
            _v3 = _v1.payload.findIndex(_v0 => _v0.id === _v179.TOTAL_ROW_ID);
          if (_v3 >= 0) {
            let _v0 = _v1.payload.splice(_v3, 1);
            _v1.payload.push(..._v0);
          }
          let _v4 = _v1.payload.map(_v0 => _v0[_v0.id] ?? {
            name: _v0.name,
            id: _v0.id,
            prepend: _v0.prepend ?? "",
            color: _v0.id === _v179.TOTAL_ROW_ID ? (0, _v367.getTotalRowColor)() : _v2.shift() ?? ""
          });
          return {
            ..._v0,
            selectedItemsForGraph: _v4,
            isEmptyData: (0, _v319.default)(_v4)
          };
        case _v299.REPORT_ACTION_TYPE.SET_FILTER_LIST:
          let {
              list: _v5,
              filterKey: _v6
            } = _v1.payload,
            _v7 = Object.assign({}, _v0.filters[_v0.reportGroup].filterLists);
          return _v7[_v6] = _v5, {
            ..._v0,
            filters: {
              ..._v0.filters,
              [_v0.reportGroup]: {
                ..._v2,
                filterLists: _v7
              }
            },
            isEmptyData: (0, _v319.default)(_v1.payload)
          };
        case _v299.REPORT_ACTION_TYPE.UPDATE_FILTERS:
          let _v8 = _v1.payload,
            _v9 = Object.assign({}, _v0.filters[_v0.reportGroup].filterLists);
          for (let _v0 in _v8) _v9[_v0] = [..._v8[_v0]];
          return {
            ..._v0,
            filters: {
              ..._v0.filters,
              [_v0.reportGroup]: {
                ..._v2,
                filterLists: _v9
              }
            },
            isEmptyData: (0, _v319.default)(_v1.payload)
          };
        case _v299.REPORT_ACTION_TYPE.RESET_FILTERS:
          let {
              listOfFilters: _v10
            } = _v1.payload,
            _v11 = Object.assign({}, _v0.filters[_v0.reportGroup].filterLists);
          return _v10.map(_v0 => {
            _v11[_v0] = [];
          }), {
            ..._v0,
            filters: {
              ..._v0.filters,
              [_v0.reportGroup]: {
                ..._v2,
                filterLists: _v11
              }
            },
            isEmptyData: (0, _v319.default)(_v1.payload)
          };
        case _v299.REPORT_ACTION_TYPE.SET_PRIMARY_DIMENSION:
          let _v12 = _v0.primaryDimensions,
            _v13 = _v1.payload.reportGroup;
          return {
            ..._v0,
            primaryDimensions: {
              ..._v12,
              [_v13]: _v1.payload.metric
            }
          };
        case _v299.REPORT_ACTION_TYPE.UPDATE_DATE_RANGE:
          return {
            ..._v0,
            filters: {
              ..._v0.filters,
              [_v0.reportGroup]: {
                ..._v2,
                startDate: _v1.payload.startDate,
                endDate: _v1.payload.endDate
              }
            }
          };
        case _v299.REPORT_ACTION_TYPE.ERROR_STATE_UPDATE:
          return {
            ..._v0,
            isError: _v1.payload
          };
        case _v299.REPORT_ACTION_TYPE.UPDATE_LOADING_STATE:
          return {
            ..._v0,
            isLoading: _v1.payload,
            isError: !_v1.payload && _v0.isError
          };
        case _v299.REPORT_ACTION_TYPE.UPDATE_USER_IN_USE:
          let _v14 = _v0.userInUse;
          return {
            ..._v0,
            userInUse: {
              ..._v14,
              ..._v1.payload
            }
          };
        case _v299.REPORT_ACTION_TYPE.SET_AGGREGATE_INTERVAL:
          let {
            selectedAggregateInterval: _v15
          } = _v1.payload;
          return {
            ..._v0,
            selectedAggregateInterval: _v15
          };
        case _v299.REPORT_ACTION_TYPE.SET_USER_PREFERENCES:
          let {
            userPreferences: _v16
          } = _v1.payload;
          return {
            ..._v0,
            userPreferences: _v16
          };
        case _v299.REPORT_ACTION_TYPE.SET_REPORT_TYPE:
          let {
            newReportGroup: _v17
          } = _v1.payload;
          return {
            ..._v0,
            reportGroup: _v17
          };
        default:
          return (0, _v308.logError)("Unable to find the type dispatched in reducer!"), {
            ..._v0
          };
      }
    };
  var _v780 = _v0.i(0);
  let _v781 = ({
    viewer: _v0,
    userId: _v1,
    history: _v2,
    playerAssetUrls: _v3,
    hasAdvancedStats: _v4,
    organizationInternalId: _v5,
    organizationUuid: _v6,
    showUpsellModal: _v7,
    setShowUpsellModal: _v8
  }) => {
    var _v9;
    let _v10,
      _v11,
      _v12 = (0, _v4.useMemo)(() => _v5 || (_v0?.teamUser?.ownerId ? _v0.teamUser.ownerId : _v1 ?? null), [_v0, _v1, _v5]) ?? _v1,
      _v13 = (0, _v4.useMemo)(() => _v21.DateTime.utc(), []),
      _v14 = (0, _v22.useRouter)(),
      _v15 = {
        startDate: _v13.minus({
          days: 30
        }).startOf("day"),
        endDate: _v13.endOf("day"),
        filterLists: []
      },
      _v16 = {
        startDate: _v13.minus({
          months: 6
        }).startOf("day"),
        endDate: _v13,
        filterLists: []
      },
      [_v17, _v18] = (0, _v4.useState)(!1),
      [_v19, _v20] = (0, _v4.useReducer)(_v779, {
        reportGroup: _v299.ReportGroup.VIMEO,
        primaryDimensions: {
          [_v299.ReportGroup.VIMEO]: _v179.TABLE_FIELD_VIEWS,
          [_v299.ReportGroup.BANDWIDTH]: _v179.BANDWIDTH_REPORT_TABLE_FIELDS[0]
        },
        filters: {
          [_v299.ReportGroup.VIMEO]: _v15,
          [_v299.ReportGroup.BANDWIDTH]: _v16
        },
        isLoading: !1,
        isError: !1,
        isEmptyData: !1,
        selectedAggregateInterval: _v299.AggregateIntervalType.DAY,
        selectedItemsForGraph: [],
        userInUse: {
          id: _v12,
          teamUserRole: "Owner",
          dateCreated: _v13.set({
            year: _v13.year - 1,
            month: _v13.month + 1,
            day: 1
          }),
          locale: "en",
          isUserWithVideoLimit: !1,
          teamItems: []
        },
        userPreferences: {},
        organizationUuid: _v6,
        organizationInternalId: _v5
      });
    _v10 = (_v9 = _v2?.location?.query) && _v9.filter_content ? decodeURIComponent(_v9.filter_content) : void 0, _v11 = _v9 && _v9.filter_custom_metadata ? decodeURIComponent(_v9.filter_custom_metadata) : void 0, (0, _v4.useEffect)(() => {
      if (_v10) try {
        let _v0 = _v10?.split(",").map(_v0 => {
          let [, _v1, _v2] = _v0.split("/");
          if ("videos" === _v1 || "folders" === _v1) return {
            name: `${(0, _v370.default)(_v1)} Id - ${_v2}`,
            id: `/${_v1}/${_v2}`,
            uri: `/${_v1}/${_v2}`,
            prepend: "",
            color: "",
            type: "videos" === _v1 ? _v309.VIDEO : _v309.FOLDER
          };
        }).filter(_v0 => _v0) ?? [];
        _v20({
          type: _v299.REPORT_ACTION_TYPE.SET_FILTER_LIST,
          payload: {
            filterKey: _v299.Filters.CONTENT,
            list: _v0
          }
        });
      } catch (_v0) {
        (0, _v308.logError)("Unable to parse Query Param - filter_content", _v0, {
          filter_content: _v10
        });
      }
    }, [_v20, _v10]), (0, _v4.useEffect)(() => {
      if (_v11) try {
        JSON.parse(_v11), _v20({
          type: _v299.REPORT_ACTION_TYPE.SET_FILTER_LIST,
          payload: {
            filterKey: _v299.Filters.CUSTOM_METADATA,
            list: [{
              id: _v11,
              name: "Custom metadata",
              prepend: "",
              color: ""
            }]
          }
        });
      } catch (_v0) {
        (0, _v308.logError)("Unable to parse Query Param - filter_custom_metadata", _v0, {
          filter_custom_metadata: _v11
        });
      }
    }, [_v20, _v11]), ((_v0, _v1, _v2) => {
      let _v3 = _v1 === _v472.TeamUserPermissionLevel.Contributor || _v1 === _v472.TeamUserPermissionLevel.ContributorPlus,
        {
          data: _v4
        } = (0, _v730.useGetUserVideos)(() => _v3 ? {
          where: {
            userId: _v0
          },
          select: ["uri"],
          query: {
            perPage: 1
          }
        } : null, {
          revalidateOnFocus: !1,
          errorRetryCount: 2
        });
      (0, _v4.useEffect)(() => {
        _v2({
          type: _v299.REPORT_ACTION_TYPE.UPDATE_USER_IN_USE,
          payload: {
            isUserWithVideoLimit: (_v4?.total ?? 0) > _v179.MAX_NO_OF_VIDEOS_FOR_NETWORK_TRANSFER && _v3
          }
        });
      }, [_v1, _v4?.total, _v2, _v3]);
    })(_v19.userInUse.id, _v19.userInUse.teamUserRole, _v20), (_v0 => {
      let {
        data: _v1
      } = (0, _v780.useGetMePreferences)({
        select: _v179.TOUR_POINT_USER_PREFERENCES_KEYS
      });
      (0, _v4.useEffect)(() => {
        _v0({
          type: _v299.REPORT_ACTION_TYPE.SET_USER_PREFERENCES,
          payload: {
            userPreferences: _v1
          }
        });
      }, [_v0, _v1]);
    })(_v20);
    let {
      data: _v21
    } = (0, _v23.useGetUser)(() => _v0?.teamUser?.ownerId ? {
      where: {
        userId: _v0?.teamUser?.ownerId
      },
      select: ["createdTime"]
    } : null);
    (0, _v4.useEffect)(() => {
      let _v0 = _v21?.createdTime && _v21.DateTime.fromISO(_v21.createdTime),
        _v1 = _v0.user?.createdTime ? _v21.DateTime.fromISO(_v0.user?.createdTime) : _v13.set({
          year: _v13.year - 1,
          month: _v13.month + 1,
          day: 1
        });
      _v20({
        type: _v299.REPORT_ACTION_TYPE.UPDATE_USER_IN_USE,
        payload: {
          id: _v12,
          locale: _v0?.locale,
          teamUserRole: "Owner",
          dateCreated: _v0 || _v1,
          teamItems: []
        }
      });
    }, [_v12, _v0.user?.createdTime, _v0?.locale, _v13, _v21]), (0, _v4.useEffect)(() => {
      _v18(!(_v14.asPath.indexOf("bandwidth") > -1));
    }, [_v14.asPath]);
    let _v22 = (_v0 => {
      switch (_v0.split("/")[2]) {
        case "bandwidth":
          return _v299.ReportGroup.BANDWIDTH;
        case void 0:
          return null;
        default:
          return _v299.ReportGroup.VIMEO;
      }
    })(_v14.asPath);
    _v22 && _v22 !== _v19.reportGroup && _v20({
      type: _v299.REPORT_ACTION_TYPE.SET_REPORT_TYPE,
      payload: {
        newReportGroup: _v22
      }
    });
    let _v23 = _v19.userInUse.id !== _v0?.user?.id && _v19.userInUse.teamUserRole.toLowerCase();
    return (0, _v3.jsx)(_v5.Box, {
      minHeight: "70vh",
      height: "calc(100vh - 3.75rem)",
      background: "background",
      children: (0, _v3.jsxs)(_v5.Box, {
        minWidth: "100%",
        maxWidth: "100%",
        children: [_v17 && (0, _v367.shouldShowContentLimitAppliedNotice)(_v19.userInUse.isUserWithVideoLimit, _v2?.location?.pathname) && (0, _v3.jsx)(_v778, {}), !!_v19.userInUse.id && (0, _v3.jsx)(_v777, {
          state: _v19,
          dispatch: _v20,
          playerAssetUrls: _v3,
          hasAnalyticsAdvanced: _v4 || "owner" === _v23 || "admin" === _v23 || "contributor" === _v23 || "contributor plus" === _v23,
          showUpsell: _v7,
          setShowUpsellModal: _v8,
          organizationUuid: _v6,
          organizationInternalId: _v5
        })]
      })
    });
  };
  var _v782 = _v0.i(0),
    _v783 = _v0.i(0),
    _v784 = _v0.i(0),
    _v785 = _v0.i(0);
  let _v786 = ({
      userId: _v0,
      organizationInternalId: _v1,
      organizationUuid: _v2,
      setShowUpsellModal: _v3,
      viewer: _v4,
      onNavClick: _v5
    }) => {
      let {
          trackAnalyticsReportViewed: _v6
        } = (0, _v13.useAnalyticsTracking)(),
        {
          settings: _v7
        } = (0, _v26.useOrionSettings)(),
        _v8 = (0, _v4.useMemo)(() => _v1 || (_v4?.teamUser && _v4?.teamUser?.ownerId ? _v4?.teamUser?.ownerId : _v0), [_v0, _v4?.teamUser, _v1]),
        {
          capabilities: {
            hasAnalyticsVod: _v9
          },
          loading: _v10
        } = (0, _v11.useCapability)(["hasAnalyticsVod"], _v0),
        {
          capabilities: {
            hasAdvancedStats: _v11,
            hasTeamAnalytics: _v12,
            canSeeTeamAnalyticsUpsell: _v13,
            canUseSentimentWidgets: _v14
          },
          loading: _v15
        } = (0, _v11.useCapability)(["hasAdvancedStats", "hasTeamAnalytics", "canSeeTeamAnalyticsUpsell", "canUseSentimentWidgets"], _v8),
        {
          data: _v16
        } = (0, _v710.useGetUserPreferences)(() => _v8 ? {
          where: {
            userId: _v8
          },
          select: ["taa"]
        } : null),
        _v17 = (0, _v152.useColorModeValue)("darkBlueAlpha.200", "lightBlueAlpha.300"),
        _v18 = (0, _v7.rem)(40),
        _v19 = `${(0, _v7.rem)(8)} ${(0, _v7.rem)(16)}`,
        _v20 = (0, _v7.rem)(12),
        _v21 = (0, _v7.rem)(4),
        _v22 = _v0 => _v2 ? _v0.replace("/analytics", "/manage/organization/analytics") : _v0,
        _v23 = _v16?.taa,
        _v24 = _v10 || _v15,
        _v25 = _v1 && _v2 ? _v1 : _v4?.teamUser?.ownerId || _v4?.user?.id,
        _v26 = !!(0, _v24.matchPath)(location.pathname, {
          path: [_v22("/analytics/teams/:teamOwnerId/users"), _v22("/analytics/teams/:teamOwnerId/videos")]
        })?.isExact,
        _v27 = !_v24 && _v23 && (_v12 || _v13);
      return (0, _v3.jsx)(_v6.Flex, {
        flexGrow: "1",
        direction: "column",
        children: (0, _v3.jsx)(_v6.Flex, {
          flexGrow: "1",
          direction: "column",
          children: (0, _v3.jsx)(_v5.Box, {
            display: "flex",
            flexDirection: "column",
            py: 0,
            children: (0, _v3.jsxs)(_v783.ResizableSideNav.MenuItems, {
              children: [_v2 && (0, _v3.jsx)(_v88.Link, {
                as: _v291.Link,
                to: _v2 ? "/manage/organization/members" : "/",
                children: (0, _v3.jsxs)(_v74.Button, {
                  width: "100%",
                  minHeight: _v18,
                  padding: _v19,
                  borderRadius: _v20,
                  justifyContent: "flex-start",
                  marginTop: (0, _v7.rem)(8),
                  variant: "tertiary",
                  fontWeight: "400",
                  children: [(0, _v3.jsx)(_v782.ArrowLeft, {
                    paddingRight: "0.3rem"
                  }), (0, _v3.jsx)(_v46.Text, {
                    variant: "body-xl",
                    fontSize: (0, _v7.rem)(14),
                    children: _v2 ? _v190.T_BACK_TO_SETTINGS : _v190.T_BACK_TO_HOME
                  })]
                })
              }), (0, _v3.jsx)(_v88.Link, {
                as: _v291.Link,
                to: _v22("/analytics"),
                onClick: () => {
                  (0, _v32.trackSideBar)("dashboard"), _v6({
                    analyticsReportType: "dashboard"
                  });
                },
                children: (0, _v3.jsx)(_v74.Button, {
                  width: "100%",
                  minHeight: _v18,
                  padding: _v19,
                  borderRadius: _v20,
                  justifyContent: "flex-start",
                  variant: "tertiary",
                  isActive: location.pathname === _v22("/analytics"),
                  fontWeight: "400",
                  _active: {
                    backgroundColor: `${_v17} !important`
                  },
                  onClick: _v5,
                  children: (0, _v3.jsx)(_v46.Text, {
                    fontSize: (0, _v7.rem)(14),
                    variant: "body-xl",
                    children: _v179.DISPLAY_MAP.dashboard
                  })
                })
              }), _v7.enable_ai_analytics_dashboard && (0, _v3.jsx)(_v88.Link, {
                as: _v291.Link,
                to: _v22("/analytics/ai"),
                onClick: () => {
                  (0, _v32.trackSideBar)(_v179.REPORT_TYPE_AI), _v6({
                    analyticsReportType: _v179.REPORT_TYPE_AI
                  });
                },
                children: (0, _v3.jsx)(_v74.Button, {
                  width: "100%",
                  minHeight: _v18,
                  padding: _v19,
                  borderRadius: _v20,
                  justifyContent: "flex-start",
                  variant: "tertiary",
                  isActive: location.pathname === _v22("/analytics/ai"),
                  fontWeight: "400",
                  _active: {
                    backgroundColor: `${_v17} !important`
                  },
                  onClick: _v5,
                  children: (0, _v3.jsxs)(_v6.Flex, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    children: [(0, _v3.jsxs)(_v6.Flex, {
                      alignItems: "center",
                      gap: (0, _v7.rem)(4),
                      children: [(0, _v3.jsx)(_v46.Text, {
                        fontSize: (0, _v7.rem)(14),
                        variant: "body-xl",
                        children: (0, _v30.translate)({
                          singular: "Custom analytics",
                          dictionary: {
                            es: {
                              singular: "Analíticas personalizadas"
                            },
                            "de-DE": {
                              singular: "Benutzerdefinierte Analysen"
                            },
                            "fr-FR": {
                              singular: "Analyses personnalisées"
                            },
                            "ja-JP": {
                              singular: "カスタムアナリティクス"
                            },
                            "ko-KR": {
                              singular: "맞춤형 분석"
                            },
                            "pt-BR": {
                              singular: "Análises personalizadas"
                            },
                            "zh-CN": {
                              singular: "自定义分析"
                            }
                          }
                        })
                      }), (0, _v3.jsx)(_v108.AiSparkles, {
                        sx: {
                          "&&": {
                            width: (0, _v7.rem)(20),
                            height: (0, _v7.rem)(20)
                          }
                        }
                      })]
                    }), (0, _v3.jsx)(_v87.Badge, {
                      variant: "new",
                      size: "sm",
                      children: (0, _v30.translate)({
                        singular: "New",
                        dictionary: {
                          es: {
                            singular: "Nuevo"
                          },
                          "de-DE": {
                            singular: "Neu"
                          },
                          "fr-FR": {
                            singular: "Nouveau"
                          },
                          "ja-JP": {
                            singular: "新規作成"
                          },
                          "ko-KR": {
                            singular: "신규"
                          },
                          "pt-BR": {
                            singular: "Novo"
                          },
                          "zh-CN": {
                            singular: "新"
                          }
                        }
                      })
                    })]
                  })
                })
              }), !_v15 && !_v11 && (0, _v3.jsx)(_v785.SmallUpgradeBanner, {
                button: {
                  label: _v190.T_UPGRADE,
                  onClick: () => {
                    (0, _v32.trackUpgradeAction)({
                      location: _v32.BigPictureLocations.REPORTS,
                      page: _v32.ANALYTICS_PAGE,
                      upsell_name: _v32.UpsellName.REPORTS,
                      feature: _v32.ANALYTICS,
                      copy: "Upgrade"
                    }), _v3(!0);
                  }
                },
                style: {
                  borderRadius: (0, _v7.rem)(8),
                  overflow: "hidden"
                },
                cta: _v190.T_BASIC_UPSELL,
                sideNav: !0
              }), (0, _v3.jsx)(_v46.Text, {
                variant: "heading-2xs",
                color: "text-tertiary",
                padding: `${(0, _v7.rem)(4)} ${(0, _v7.rem)(8)}`,
                children: _v190.T_REPORTS_SIDE_NAV
              }), (0, _v3.jsxs)(_v6.Flex, {
                direction: "column",
                gap: _v21,
                paddingTop: "0",
                children: [_v179.REPORT_LINKS.map((_v0, _v1) => (0, _v3.jsx)(_v88.Link, {
                  as: _v291.Link,
                  to: _v22("/analytics/" + _v0),
                  onClick: () => {
                    (0, _v32.trackSideBar)(`${_v0}`), _v6({
                      analyticsReportType: _v0
                    });
                  },
                  children: (0, _v3.jsx)(_v74.Button, {
                    width: "100%",
                    minHeight: _v18,
                    padding: _v19,
                    borderRadius: _v20,
                    justifyContent: "flex-start",
                    variant: "tertiary",
                    isActive: !!(0, _v24.matchPath)(location.pathname, _v22(`/analytics/${_v0}`))?.isExact,
                    _active: {
                      backgroundColor: `${_v17} !important`
                    },
                    onClick: _v5,
                    children: (0, _v3.jsx)(_v46.Text, {
                      variant: "body-xl",
                      fontSize: (0, _v7.rem)(14),
                      children: _v179.DISPLAY_MAP[_v0]
                    })
                  })
                }, _v0 + _v1)), _v27 && (0, _v3.jsx)(_v74.Button, {
                  as: _v291.Link,
                  to: _v22(`/analytics/teams/${_v25}/videos`),
                  width: "100%",
                  minHeight: _v18,
                  padding: _v19,
                  borderRadius: _v20,
                  justifyContent: "flex-start",
                  variant: "tertiary",
                  isActive: _v26,
                  _active: {
                    fontWeight: "500",
                    backgroundColor: `${_v17} !important`
                  },
                  onClick: () => {
                    (0, _v32.trackSideBar)("team"), _v6({
                      analyticsReportType: "team"
                    }), _v5();
                  },
                  children: (0, _v3.jsxs)(_v6.Flex, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    children: [(0, _v3.jsx)(_v46.Text, {
                      variant: "body-xl",
                      fontSize: (0, _v7.rem)(14),
                      children: (0, _v30.translate)({
                        singular: "Team",
                        dictionary: {
                          es: {
                            singular: "Equipo"
                          },
                          "fr-FR": {
                            singular: "Équipe"
                          },
                          "ja-JP": {
                            singular: "チーム"
                          },
                          "ko-KR": {
                            singular: "팀"
                          },
                          "pt-BR": {
                            singular: "Equipe"
                          },
                          "zh-CN": {
                            singular: "团队"
                          }
                        }
                      })
                    }), _v13 && (0, _v3.jsx)(_v5.Box, {
                      noMargin: !0,
                      as: _v784.UpgradeBadge,
                      onClick: _v0 => {
                        _v0.preventDefault(), _v0.stopPropagation(), (0, _v32.trackUpgradeAction)({
                          copy: "Team",
                          location: _v32.BigPictureLocations.TEAM_REPORT,
                          page: _v32.ANALYTICS_PAGE,
                          upsell_name: _v32.UpsellName.TEAM_REPORT,
                          feature: _v32.ANALYTICS
                        }), _v3(!0);
                      }
                    })]
                  })
                }), _v14 && (0, _v3.jsx)(_v74.Button, {
                  as: _v291.Link,
                  to: _v22("/analytics/video-rating"),
                  width: "100%",
                  minHeight: _v18,
                  padding: _v19,
                  borderRadius: _v20,
                  justifyContent: "flex-start",
                  variant: "tertiary",
                  isActive: !!(0, _v24.matchPath)(location.pathname, _v22("/analytics/video-rating"))?.isExact,
                  _active: {
                    fontWeight: "500",
                    backgroundColor: `${_v17} !important`
                  },
                  onClick: () => {
                    (0, _v32.trackSideBar)("video_rating"), _v5();
                  },
                  children: (0, _v3.jsx)(_v46.Text, {
                    variant: "body-xl",
                    fontSize: (0, _v7.rem)(14),
                    children: (0, _v30.translate)({
                      singular: "Video Rating",
                      dictionary: {
                        es: {
                          singular: "Calificación del vídeo"
                        },
                        "de-DE": {
                          singular: "Video-Bewertung"
                        },
                        "fr-FR": {
                          singular: "Évaluation de la vidéo"
                        },
                        "ja-JP": {
                          singular: "動画の評価"
                        },
                        "ko-KR": {
                          singular: "동영상 평점"
                        },
                        "pt-BR": {
                          singular: "Avaliação do vídeo"
                        },
                        "zh-CN": {
                          singular: "视频评分"
                        }
                      }
                    })
                  })
                }), (0, _v3.jsx)(_v74.Button, {
                  as: _v291.Link,
                  to: _v22("/analytics/bandwidth"),
                  width: "100%",
                  minHeight: _v18,
                  padding: _v19,
                  borderRadius: _v20,
                  justifyContent: "flex-start",
                  variant: "tertiary",
                  isActive: !!(0, _v24.matchPath)(location.pathname, _v22("/analytics/bandwidth")),
                  _active: {
                    fontWeight: "500",
                    backgroundColor: `${_v17} !important`
                  },
                  onClick: () => {
                    (0, _v32.trackSideBar)("bandwidth"), _v6({
                      analyticsReportType: "bandwidth"
                    }), _v5();
                  },
                  children: (0, _v3.jsx)(_v6.Flex, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    children: (0, _v3.jsx)(_v46.Text, {
                      variant: "body-xl",
                      fontSize: (0, _v7.rem)(14),
                      children: (0, _v30.translate)({
                        singular: "Bandwidth",
                        dictionary: {
                          es: {
                            singular: "Ancho de banda"
                          },
                          "de-DE": {
                            singular: "Bandbreite"
                          },
                          "fr-FR": {
                            singular: "Bande passante"
                          },
                          "ja-JP": {
                            singular: "転送量"
                          },
                          "ko-KR": {
                            singular: "대역폭"
                          },
                          "pt-BR": {
                            singular: "Largura de banda"
                          },
                          "zh-CN": {
                            singular: "带宽"
                          }
                        }
                      })
                    })
                  })
                }), !_v24 && _v9 && (0, _v3.jsx)(_v88.Link, {
                  as: "a",
                  href: `/stats/ondemand?user_id=${_v0}`,
                  onClick: () => (0, _v32.trackVOD)(),
                  children: (0, _v3.jsx)(_v74.Button, {
                    width: "100%",
                    minHeight: _v18,
                    padding: _v19,
                    borderRadius: _v20,
                    justifyContent: "flex-start",
                    variant: "tertiary",
                    children: (0, _v3.jsx)(_v46.Text, {
                      variant: "body-xl",
                      fontSize: (0, _v7.rem)(14),
                      children: (0, _v30.translate)({
                        singular: "VOD",
                        dictionary: {
                          "zh-CN": {
                            singular: "视频点播"
                          }
                        }
                      })
                    })
                  })
                })]
              })]
            })
          })
        })
      });
    },
    _v787 = {
      contentMaxWidth: (0, _v7.rem)(0),
      contentInlineStart: (0, _v7.rem)(24)
    },
    _v788 = {
      contentMaxWidth: "100cqw",
      contentInlineStart: (0, _v7.rem)(24)
    };
  _v0.s(["AnalyticsLayout", 0, ({
    viewer: _v0,
    organizationUuid: _v1,
    history: _v2,
    playerAssetUrls: _v3,
    organizationInternalId: _v4
  }) => {
    let [_v5, _v6] = (0, _v4.useState)(!1),
      _v7 = _v0?.user?.id,
      {
        trackAnalyticsPageDisplayed: _v8
      } = (0, _v13.useAnalyticsTracking)();
    (0, _v14.usePicoEffect)(() => {
      _v8();
    }, [], {
      once: !0
    });
    let {
        capabilities: {
          hasAdvancedStats: _v9
        },
        ready: _v10
      } = (0, _v11.useCapability)(["hasAdvancedStats"], _v7),
      [_v11] = (0, _v8.useToken)("breakpoints", ["lg"]),
      [_v12] = (0, _v9.useMediaQuery)([`(max-width: ${_v11})`]),
      _v13 = !_v0 || !_v7 || !_v3 || !_v10,
      _v14 = _v2?.location.pathname,
      _v15 = _v14?.includes("/v2/") ? void 0 : _v14?.endsWith("/analytics") ? _v787 : _v788,
      {
        isOpen: _v16,
        toggle: _v17,
        open: _v18,
        close: _v19,
        collapsed: _v20
      } = (0, _v19.useSideNavSurfaceState)({
        surface: "analytics",
        userId: _v7,
        isMobile: _v12,
        persist: !1
      }),
      _v21 = (0, _v20.useTrackSidebarToggled)(),
      _v22 = (0, _v4.useCallback)(_v0 => (0, _v3.jsx)(_v786, {
        viewer: _v0,
        userId: _v0,
        organizationInternalId: _v4,
        organizationUuid: _v1,
        setShowUpsellModal: _v6,
        onNavClick: () => {
          _v12 && _v19();
        }
      }), [_v0, _v4, _v1, _v12, _v19]);
    return (0, _v3.jsxs)(_v6.Flex, {
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      children: [(0, _v3.jsx)(_v18.UpsellModalProvider, {
        children: (0, _v3.jsx)(_v17.TransferFileModalProvider, {
          children: (0, _v3.jsx)(_v16.SecondarySideNav, {
            isOpen: _v16,
            isMobile: _v12,
            collapsed: _v20,
            onClose: _v17,
            hideWhatsNew: !0,
            children: _v13 ? (0, _v3.jsx)(_v6.Flex, {
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
              children: (0, _v3.jsx)(_v10.Spinner, {
                size: "md"
              })
            }) : _v22(_v7)
          })
        })
      }), (0, _v3.jsx)(_v6.Flex, {
        flexDirection: "column",
        flex: "1 1 auto",
        width: "50%",
        sx: _v15 ? {
          containerType: "inline-size"
        } : void 0,
        children: (0, _v3.jsxs)(_v5.Box, {
          overflowY: "auto",
          children: [(0, _v3.jsx)(_v12.DefaultNavigation, {
            setIsSideNavActive: _v12 ? () => {
              _v21("open", _v12), _v18();
            } : void 0,
            isSideNavActive: _v16,
            hasSideNavLayout: !_v12,
            searchContentAlignment: _v15
          }), _v13 ? (0, _v3.jsx)(_v6.Flex, {
            height: "31.25rem",
            alignItems: "center",
            justifyContent: "center",
            children: (0, _v3.jsx)(_v10.Spinner, {
              size: "md"
            })
          }) : (0, _v3.jsx)(_v781, {
            history: _v2,
            userId: _v7,
            viewer: _v0,
            playerAssetUrls: _v3,
            hasAdvancedStats: !!_v9,
            organizationInternalId: _v4,
            organizationUuid: _v1,
            showUpsellModal: _v5,
            setShowUpsellModal: _v6
          }), (0, _v3.jsx)(_v5.Box, {
            children: _v0 && (0, _v3.jsx)(_v15.EssentialFooter, {
              ..._v0,
              enableQuotaMenu: !1
            })
          })]
        })
      })]
    });
  }], 0);
}