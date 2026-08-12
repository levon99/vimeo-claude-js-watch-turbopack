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
    _v12 = _v0.i(0);
  function _v13() {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v10.Header, {
        size: "lg",
        mb: "lg",
        mt: "lg",
        children: (0, _v12.translate)({
          singular: "Verify to get paid",
          dictionary: {
            es: {
              singular: "Verifique para recibir el pago"
            },
            "de-DE": {
              singular: "Verifizieren Sie, um bezahlt zu werden."
            },
            "fr-FR": {
              singular: "Vérifiez pour être payé"
            },
            "ja-JP": {
              singular: "確認して支払いを受領"
            },
            "ko-KR": {
              singular: "인증하고 수익금 받기"
            },
            "pt-BR": {
              singular: "Verifique sua conta para receber pagamentos"
            },
            "zh-CN": {
              singular: "请验证以获取报酬"
            }
          }
        })
      }), (0, _v1.jsx)(_v8.Alert, {
        status: "warning",
        mb: "lg",
        children: (0, _v1.jsx)(_v9.AlertDescription, {
          children: (0, _v12.translate)({
            singular: "New seller enrollment on Vimeo On Demand is temporarily unavailable. We'll share updates as they become available. For help, please {A}contact support{/A}.",
            replacements: {
              A: _v0 => (0, _v1.jsx)(_v11.Link, {
                href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/29181878995729/",
                variant: "inline-secondary",
                target: "_blank",
                children: _v0
              }, "support")
            },
            dictionary: {
              es: {
                singular: "La inscripción de nuevos vendedores en Vimeo On Demand no está disponible temporalmente. Compartiremos actualizaciones cuando estén disponibles. Para obtener ayuda, por favor {A}contact support{/A}."
              },
              "de-DE": {
                singular: "Die Anmeldung neuer Verkäufer bei Vimeo On Demand ist vorübergehend nicht möglich. Wir teilen Updates mit, sobald sie verfügbar sind. Bei Fragen wenden Sie sich bitte an {A}contact support{/A}."
              },
              "fr-FR": {
                singular: "L'inscription de nouveaux vendeurs sur Vimeo On Demand est temporairement indisponible. Nous communiquerons les mises à jour dès qu'elles seront disponibles. Pour obtenir de l'aide, veuillez {A}contacter l'assistance{/A}."
              },
              "ja-JP": {
                singular: "Vimeo On Demandでの新規セラー登録は一時的にご利用いただけません. 状況が分かり次第、最新情報を共有します. ヘルプが必要な場合は {A}サポートにお問い合わせください{/A}."
              },
              "ko-KR": {
                singular: "Vimeo On Demand에서 신규 판매자 등록은 일시적으로 이용할 수 없습니다. 업데이트가 가능해지는 대로 알려드리겠습니다. 도움이 필요하시면 {A}지원팀에 문의해 주세요{/A}."
              },
              "pt-BR": {
                singular: "As inscrições de novos vendedores no Vimeo On Demand estão temporariamente indisponíveis. Compartilharemos atualizações assim que estiverem disponíveis. Para obter ajuda, por favor {A}entre em contato com o suporte{/A}."
              },
              "zh-CN": {
                singular: "Vimeo On Demand 的新卖家注册暂时不可用。我们会在有更新时提供相关信息。需要帮助，请 {A}contact support{/A}。"
              }
            }
          })
        })
      })]
    });
  }
  let _v14 = "seller_verify_referrer";
  function _v15({
    personaLink: _v0,
    error: _v1,
    step: _v2,
    mustReverify: _v3
  }) {
    let [_v4, _v5] = (0, _v3.useState)(!1),
      [_v6, _v7] = (0, _v3.useState)(_v0 ? _v2 : 1),
      _v8 = (_v0 => {
        let [_v1, _v2] = (0, _v3.useState)("https://vimeo.dev" + _v0);
        return (0, _v3.useEffect)(() => {
          _v2("https://" + window.location.host + _v0);
        }, [_v0]), _v1;
      })("/settings/ondemand/payments");
    return (0, _v3.useEffect)(() => {
      let _v0 = document.cookie.split(";").find(_v0 => _v0.split("=")[0].trim() === _v14);
      if (1 === _v6 && !_v0) {
        let _v0 = "u" > typeof document ? document.referrer : "";
        _v0 = "" === _v0 ? _v8 : _v0, document.cookie = _v14 + "=" + _v0 + "; path=/";
      }
    }, [_v6, _v8]), (0, _v1.jsx)(_v7.Container, {
      p: "lg",
      minHeight: "80vh",
      maxWidth: "800",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      children: (0, _v1.jsx)(_v13, {})
    });
  }
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = () => {
    let {
        personaLink: _v0,
        error: _v1,
        step: _v2,
        mustReverify: _v3
      } = (0, _v2.useRouter)().query,
      _v4 = (0, _v3.useContext)(_v17.ViewerContext),
      {
        capabilities: _v5,
        ready: _v6
      } = (0, _v4.useCapability)(["hasVodKycExperience"]);
    if (!_v6) return null;
    if (!_v5.hasVodKycExperience) throw new _v5.UnauthorizedError();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v15, {
        personaLink: function (_v0) {
          if (_v0) try {
            let _v0 = new URL(_v0);
            if ("withpersona.com" !== _v0.hostname || "/verify" !== _v0.pathname || !_v0.searchParams.has("code")) return;
            return _v0.toString();
          } catch (_v0) {
            return;
          }
        }(_v0),
        error: _v1,
        step: _v2 ?? 1,
        mustReverify: _v3
      }), _v4 && (0, _v1.jsx)(_v16.EssentialFooter, {
        ..._v4,
        enableQuotaMenu: !1
      })]
    });
  };
  _v18.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v6.DefaultNavigation, {}), _v0]
  }), _v0.s(["__N_SSG", 0, !0, "default", 0, _v18], 0);
}