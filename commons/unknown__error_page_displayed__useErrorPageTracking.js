{
  "use strict";

  var _v1,
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
    let _v0 = (0, _v13.usePico)(),
      _v1 = function () {
        let _v0 = (0, _v14.useViewer)();
        try {
          return (0, _v15.deriveCanonicalPage)(new URL(window.location.href), {
            is_team_user: _v0?.user?.isTeamUser ?? !1
          });
        } catch {
          return "unknown";
        }
      }();
    return {
      trackErrorPageDisplayed: (0, _v4.useCallback)(_v0 => {
        null !== _v0 && _v0.track("error_page_displayed", {
          error_page_type: _v0.errorPageType,
          error_page_error_code: _v0.errorPageErrorCode,
          error_page_location: _v1,
          error_type: _v0.errorType
        });
      }, [_v0, _v1])
    };
  };
  _v0.s(["useErrorPageTracking", 0, _v16], 0);
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = _v5.default.div.withConfig({
      displayName: "ErrorPage__Container",
      componentId: "sc-eff8b2dc-0"
    })`
  margin-top: ${(0, _v3.rem)(40)};
  text-align: center;
`,
    _v21 = (0, _v5.default)(_v11.Header).attrs({
      size: "1"
    }).withConfig({
      displayName: "ErrorPage__Title",
      componentId: "sc-eff8b2dc-1"
    })`
  margin-top: 0;
  margin-bottom: ${(0, _v3.rem)(10)};
`,
    _v22 = _v5.default.div.withConfig({
      displayName: "ErrorPage__Content",
      componentId: "sc-eff8b2dc-2"
    })`
  margin: 0 auto;
  max-width: ${(0, _v3.rem)(660)};
  padding: 0 ${(0, _v3.rem)(15)} ${(0, _v3.rem)(10)};
`,
    _v23 = (0, _v5.default)(_v12.Paragraph).attrs({
      size: "1"
    }).withConfig({
      displayName: "ErrorPage__Message",
      componentId: "sc-eff8b2dc-3"
    })`
  margin-bottom: ${(0, _v3.rem)(30)};
  display: block;
`,
    _v24 = ({
      title: _v0,
      message: _v1,
      shouldShowSearch: _v2 = !0,
      shouldTrack: _v3
    }) => ((0, _v4.useEffect)(() => {
      _v3 && console.error(`[Vimeo Error Page] ${_v0}: ${_v1}`);
    }, [_v0, _v1, _v3]), (0, _v2.jsxs)(_v20, {
      id: _v3 ? "vimeo-error-page-view" : void 0,
      children: [(0, _v2.jsx)(_v21, {
        children: _v0
      }), (0, _v2.jsxs)(_v22, {
        children: [(0, _v2.jsx)(_v23, {
          children: _v1
        }), _v2 && (0, _v2.jsx)(_v19.SearchField, {
          id: "error-page-search"
        })]
      })]
    })),
    _v25 = ({
      title: _v0,
      message: _v1,
      shouldShowSearch: _v2 = !0,
      shouldTrack: _v3
    }) => ((0, _v4.useEffect)(() => {
      _v3 && console.error(`[Vimeo Error Page] ${_v0}: ${_v1}`);
    }, [_v0, _v1, _v3]), (0, _v2.jsxs)(_v6.Box, {
      id: _v3 ? "vimeo-error-page-view" : void 0,
      textAlign: "center",
      marginTop: "500",
      children: [(0, _v2.jsx)(_v7.Header, {
        variant: "heading-xl",
        as: "h1",
        marginBottom: "100",
        children: _v0
      }), (0, _v2.jsxs)(_v6.Box, {
        margin: "0 auto",
        maxWidth: (0, _v3.rem)(660),
        paddingX: "200",
        paddingBottom: "100",
        children: [(0, _v2.jsx)(_v8.Paragraph, {
          marginBottom: "400",
          children: _v1
        }), _v2 && (0, _v2.jsx)(_v19.SearchField, {
          id: "error-page-search"
        })]
      })]
    }));
  var _v26 = ((_v1 = _v26 || {}).VISIT_ERROR_PAGE = "vimeo_com.visit_error_page", _v1);
  _v0.s(["ErrorPage", 0, function (_v0) {
    let {
        error: _v1,
        shouldShowSearch: _v2,
        shouldTrack: _v3 = !0,
        useBokeh: _v4 = !1
      } = _v0,
      _v5 = (0, _v18.useAnalyticsEvent)(),
      {
        trackErrorPageDisplayed: _v6
      } = _v16(),
      _v7 = (0, _v4.useRef)(!1),
      _v8 = _v4 ? _v25 : _v24;
    (0, _v4.useEffect)(() => {
      _v3 && !_v7.current && (_v5({
        eventName: "vimeo_com.visit_error_page",
        version: 1,
        fields: {
          error_type: (_v0 => {
            switch (_v0) {
              case _v9.RateLimitError:
                return "Rate Limit Error";
              case _v9.ResourceNotFoundError:
                return "Resource Not Found Error";
              case _v9.ForbiddenError:
                return "Forbidden Error";
              case _v9.UnauthorizedError:
                return "Unauthorized Error";
              case _v9.NotAvailableError:
                return "Not Available Error";
            }
            return "Technical Difficulties";
          })(_v1.constructor),
          error_message: _v1.message || null,
          url: window.location.href
        }
      }), _v7.current = !0);
    }, [_v3]);
    let _v9 = _v1 instanceof _v9.RateLimitError ? {
      errorType: "rate_limit",
      errorPageErrorCode: 429
    } : _v1 instanceof _v9.ResourceNotFoundError ? {
      errorType: "resource_not_found",
      errorPageErrorCode: 404
    } : _v1 instanceof _v9.ForbiddenError ? {
      errorType: "forbidden",
      errorPageErrorCode: 403
    } : _v1 instanceof _v9.UnauthorizedError ? {
      errorType: "unauthorized",
      errorPageErrorCode: 401
    } : _v1 instanceof _v9.NotAvailableError ? {
      errorType: "not_available",
      errorPageErrorCode: 451
    } : {
      errorType: "technical_difficulties",
      errorPageErrorCode: null
    };
    switch ((0, _v17.usePicoEffect)(() => {
      if (!_v3) return !1;
      _v6({
        errorPageType: "vimeo_next",
        ..._v9
      });
    }, [_v3], {
      once: !0
    }), _v1.constructor) {
      default:
        return _v3 && window.DD_RUM && window.DD_RUM.onReady(() => {
          window.DD_RUM.addError(_v1, {
            component: "TechnicalDifficulties"
          });
        }), (0, _v2.jsx)(_v8, {
          title: (0, _v10.translate)({
            singular: "Technical Difficulties",
            dictionary: {
              es: {
                singular: "Dificultades técnicas"
              },
              "de-DE": {
                singular: "Technische Schwierigkeiten"
              },
              "fr-FR": {
                singular: "Difficultés techniques"
              },
              "ja-JP": {
                singular: "技術的な問題が発生しました"
              },
              "ko-KR": {
                singular: "기술적 문제"
              },
              "pt-BR": {
                singular: "Dificuldades Técnicas"
              },
              "zh-CN": {
                singular: "技术难题"
              }
            }
          }),
          message: (0, _v10.translate)({
            singular: "Whoops! We are having some technical difficulties, please try again in a minute.",
            dictionary: {
              es: {
                singular: "¡Ups! En estos momentos tenemos algunas dificultades técnicas. Por favor, inténtalo de nuevo dentro de un minuto."
              },
              "de-DE": {
                singular: "Hoppla! Der Fehlerteufel hat sich eingeschlichen, bitte versuche es in einigen Augenblicken erneut."
              },
              "fr-FR": {
                singular: "Oups ! Nous rencontrons des difficultés techniques, veuillez réessayer dans quelques instants."
              },
              "ja-JP": {
                singular: "エラーが発生しました！技術的な問題が発生しています。少し後で再試行しください。"
              },
              "ko-KR": {
                singular: "저런! 기술적 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
              },
              "pt-BR": {
                singular: "Opa! Estamos com algumas dificuldades técnicas, tente de novo em um minuto."
              },
              "zh-CN": {
                singular: "哎呀！我们遇到了一些技术问题，请稍后再试。"
              }
            }
          }),
          shouldShowSearch: _v2,
          shouldTrack: _v3
        });
      case _v9.RateLimitError:
        return (0, _v2.jsx)(_v8, {
          title: (0, _v10.translate)({
            singular: "Whoa there!",
            dictionary: {
              es: {
                singular: "¡Hey!"
              },
              "de-DE": {
                singular: "Immer langsam!"
              },
              "fr-FR": {
                singular: "Wow !"
              },
              "ja-JP": {
                singular: "ちょっと待って！"
              },
              "ko-KR": {
                singular: "한 번 더 생각해보세요!"
              },
              "pt-BR": {
                singular: "Calma aí!"
              },
              "zh-CN": {
                singular: "哇喔！"
              }
            }
          }),
          message: (0, _v10.translate)({
            singular: "Sorry, you have made too many requests in a short period of time. Please wait a few minutes and try again.",
            dictionary: {
              es: {
                singular: "Lo sentimos, has realizado demasiadas solicitudes en un corto periodo de tiempo. Espera unos minutos e inténtalo de nuevo."
              },
              "de-DE": {
                singular: "Entschuldige, aber du hast innerhalb zu kurzer Zeit zu viele Anfragen gestellt. Bitte warte einige Minuten und versuche es erneut."
              },
              "fr-FR": {
                singular: "Nous sommes désolés, mais vous avez effectué un trop grand nombre de demandes sur une période réduite. Veuillez patienter quelques minutes, puis réessayer."
              },
              "ja-JP": {
                singular: "大変申し訳ありません。短時間に大量のリクエストが送信されました。しばらくお待ちいただいてから、もう一度お試しください。"
              },
              "ko-KR": {
                singular: "죄송합니다. 짧은 시간 내에 너무 많은 요청을 했습니다. 몇 분 후 다시 시도하세요."
              },
              "pt-BR": {
                singular: "Desculpe, mas você fez muitas solicitações em um curto período de tempo. Aguarde alguns minutos e tente de novo."
              },
              "zh-CN": {
                singular: "对不起，您在短时间内提出了太多请求。请过几分钟后再重试。"
              }
            }
          }),
          shouldShowSearch: _v2,
          shouldTrack: _v3
        });
      case _v9.ResourceNotFoundError:
        return (0, _v2.jsx)(_v8, {
          title: (0, _v10.translate)({
            singular: "Sorry, we couldn’t find that page",
            dictionary: {
              es: {
                singular: "Lo sentimos, no pudimos encontrar esa página"
              },
              "de-DE": {
                singular: "Leider konnten wir die Seite nicht finden"
              },
              "fr-FR": {
                singular: "Désolé, nous n'avons pas pu trouver cette page."
              },
              "ja-JP": {
                singular: "申し訳ありませんが、ページが見つかりませんでした。"
              },
              "ko-KR": {
                singular: "죄송합니다, 페이지를 찾을 수 없습니다"
              },
              "pt-BR": {
                singular: "Desculpe, não conseguimos encontrar essa página"
              },
              "zh-CN": {
                singular: "抱歉，我们找不到该页面"
              }
            }
          }),
          message: (0, _v10.translate)({
            singular: "Make sure you’ve typed the URL correctly, or try searching Vimeo.",
            dictionary: {
              es: {
                singular: "Asegúrese de haber escrito bien el URL o intente buscar el video en Vimeo."
              },
              "de-DE": {
                singular: "Stellen Sie sicher, dass Sie die URL korrekt eingeben oder versuchen Sie Vimeo zu googeln. "
              },
              "fr-FR": {
                singular: "Assurez-vous d'avoir saisi l'URL correctement, ou essayez une recherche sur Vimeo."
              },
              "ja-JP": {
                singular: "URLが正しく記入されているか確認するか、Vimeoを検索してください。"
              },
              "ko-KR": {
                singular: "URL을 정확히 입력했는지 확인하거나 Vimeo를 검색해보세요."
              },
              "pt-BR": {
                singular: "Certifique-se de que você digitou o URL corretamente ou tente procurar no Vimeo."
              },
              "zh-CN": {
                singular: "请确保您输入的 URL 正确无误，或尝试搜索 Vimeo。"
              }
            }
          }),
          shouldShowSearch: _v2,
          shouldTrack: _v3
        });
      case _v9.ForbiddenError:
        return (0, _v2.jsx)(_v8, {
          title: (0, _v10.translate)({
            singular: "Permission Denied",
            dictionary: {
              es: {
                singular: "Permiso denegado"
              },
              "de-DE": {
                singular: "Berechtigung verweigert"
              },
              "fr-FR": {
                singular: "Autorisation refusée"
              },
              "ja-JP": {
                singular: "拒否されました"
              },
              "ko-KR": {
                singular: "승인 거부"
              },
              "pt-BR": {
                singular: "Permissão Negada"
              },
              "zh-CN": {
                singular: "权限被拒绝"
              }
            }
          }),
          message: (0, _v10.translate)({
            singular: "Sorry but you do not have the proper permission to access this area of Vimeo.",
            dictionary: {
              es: {
                singular: "No dispones del permiso adecuado para acceder a esta zona de Vimeo."
              },
              "de-DE": {
                singular: "Für diesen Bereich bei Vimeo fehlt dir leider die Zugangsberechtigung."
              },
              "fr-FR": {
                singular: "Désolé, nous n'avez pas l'autorisation nécessaire pour accéder à cet espace de Vimeo."
              },
              "ja-JP": {
                singular: "大変申し訳ありません。この Vimeo エリアへのアクセスは許可されていません。"
              },
              "ko-KR": {
                singular: "죄송합니다. 이 영역을 액세스하기 위해 필요한 권한이 없습니다."
              },
              "pt-BR": {
                singular: "Desculpe, mas você não tem a permissão necessária para acessar esta área do Vimeo."
              },
              "zh-CN": {
                singular: "抱歉，您没有访问 Vimeo 此区域的适当权限。"
              }
            }
          }),
          shouldShowSearch: _v2,
          shouldTrack: _v3
        });
      case _v9.UnauthorizedError:
        return (0, _v2.jsx)(_v8, {
          title: (0, _v10.translate)({
            singular: "Unauthorized",
            dictionary: {
              es: {
                singular: "No autorizado"
              },
              "de-DE": {
                singular: "Nicht genehmigt"
              },
              "fr-FR": {
                singular: "Non autorisé"
              },
              "ja-JP": {
                singular: "許可されていません。"
              },
              "ko-KR": {
                singular: "권한이 없습니다"
              },
              "pt-BR": {
                singular: "Não autorizado"
              },
              "zh-CN": {
                singular: "未经授权"
              }
            }
          }),
          message: (0, _v10.translate)({
            singular: "You are unauthorized for this action.",
            dictionary: {
              es: {
                singular: "No estás autorizado para llevar a cabo esta acción."
              },
              "de-DE": {
                singular: "Zu dieser Aktion bist du nicht berechtigt."
              },
              "fr-FR": {
                singular: "Vous n'avez pas l’autorisation requise pour effectuer cette action."
              },
              "ja-JP": {
                singular: "このアクションは許可されません"
              },
              "ko-KR": {
                singular: "이 작업에 대한 권한이 없습니다."
              },
              "pt-BR": {
                singular: "Você não tem autorização para realizar esta ação."
              },
              "zh-CN": {
                singular: "您无权进行此操作。"
              }
            }
          }),
          shouldShowSearch: _v2,
          shouldTrack: _v3
        });
      case _v9.NotAvailableError:
        return (0, _v2.jsx)(_v8, {
          title: (0, _v10.translate)({
            singular: "This page isn’t available in your region",
            dictionary: {
              es: {
                singular: "Esta página no está disponible en su región."
              },
              "de-DE": {
                singular: "Diese Seite ist in Ihrer Region nicht verfügbar"
              },
              "fr-FR": {
                singular: "Cette page n'est pas disponible dans votre région."
              },
              "ja-JP": {
                singular: "このページはお住まいの地域ではご利用いただけません"
              },
              "ko-KR": {
                singular: "이 페이지는 귀하의 지역에서는 이용할 수 없습니다."
              },
              "pt-BR": {
                singular: "Esta página não está disponível na sua região"
              },
              "zh-CN": {
                singular: "您所在地区无法查看此页面"
              }
            }
          }),
          message: "",
          shouldShowSearch: _v2,
          shouldTrack: _v3
        });
    }
  }], 0);
}