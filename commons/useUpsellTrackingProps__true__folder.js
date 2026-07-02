{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["useUpsellTrackingProps", 0, _v0 => {
    let _v1 = (0, _v4.useViewer)(),
      {
        pathname: _v2,
        query: _v3
      } = (0, _v1.useRouter)(),
      [_v4, _v5] = (0, _v2.useState)(""),
      _v6 = (0, _v2.useRef)(!1),
      _v7 = (0, _v6.getAnalyticsPageName)(_v2, "true" === _v3.isPrivate),
      _v8 = "folder" === _v0 ? "share_folder_modal" : "share_video_modal",
      _v9 = "folder" === _v0 ? "folder" : "video",
      _v10 = (0, _v2.useMemo)(() => ({
        headerText: (0, _v3.translate)({
          singular: "Unlock advanced review link control",
          dictionary: {
            es: {
              singular: "Desbloquee el control avanzado del enlace de revisión"
            },
            "de-DE": {
              singular: "Schalte die erweiterte Kontrolle über Review-Links frei"
            },
            "fr-FR": {
              singular: "Déverrouiller le contrôle avancé des liens de révision"
            },
            "ja-JP": {
              singular: "高度なレビューリンク管理を活用しましょう"
            },
            "ko-KR": {
              singular: "고급 리뷰 링크 제어 기능 활성화하기"
            },
            "pt-BR": {
              singular: "Desbloqueie o controle avançado de links de revisão"
            },
            "zh-CN": {
              singular: "解锁高级审阅链接管理功能"
            }
          }
        }),
        subHeaderText: (0, _v3.translate)({
          singular: "Customize links for every reviewer — add passwords, set expirations, and more",
          dictionary: {
            es: {
              singular: "Personalice los enlaces para cada revisor: agregue contraseñas, establezca fechas de vencimiento y mucho más"
            },
            "de-DE": {
              singular: "Passen Sie Links für jeden Prüfer an – fügen Sie Passwörter hinzu, legen Sie Ablaufdaten fest und mehr."
            },
            "fr-FR": {
              singular: "Personnalisez les liens pour chaque évaluateur : ajoutez des mots de passe, définissez des dates d'expiration, et plus encore."
            },
            "ja-JP": {
              singular: "各レビュアー向けに、パスワードや期限などを設定してリンクをカスタマイズしましょう"
            },
            "ko-KR": {
              singular: "각 리뷰어별 링크를 맞춤 설정하세요. 비밀번호 추가, 만료일 설정 등 다양한 옵션을 사용할 수 있습니다."
            },
            "pt-BR": {
              singular: "Personalize os links de revisão. Adicione senhas, defina datas de expiração e muito mais"
            },
            "zh-CN": {
              singular: "为每位审稿人定制链接——添加密码、设置有效期等"
            }
          }
        })
      }), []),
      _v11 = (0, _v2.useMemo)(() => ({
        webContextFields: {
          page_name: _v7,
          copy: "upgrade"
        },
        productContextFields: {
          product: "collaboration",
          feature: "Review",
          location: "Create_Review_Link",
          flow: null,
          element: null,
          device_type: null,
          copy: "upgrade",
          modal_name: _v8,
          entity_type: _v9
        }
      }), [_v7, _v8, _v9]),
      _v12 = (0, _v2.useMemo)(() => ({
        params: {
          page: _v7,
          feature: "Review",
          location: "Create_Review_Link",
          upsell_name: _v4
        },
        paywallTracking: {
          paywallTrigger: `review_link_form_${_v4 || "default"}_button`,
          paywallLocation: "review_link",
          paywallType: "popup",
          paywallFeature: "collaboration"
        },
        onOpen: () => {
          _v6.current || ((0, _v5.sendBpUpsellEvent)({
            viewer: _v1,
            analyticsProps: {
              ..._v11,
              productContextFields: {
                ..._v11.productContextFields,
                modal_name: "upsell_modal"
              }
            },
            eventName: "vimeo.view_upsell",
            eventVersion: _v5.UPGRADE_VIEW_GROUP_EVENT_VERSION,
            includeViewContext: !0,
            upsellName: _v4
          }), _v6.current = !0);
        },
        onClose: () => {
          (0, _v5.sendBpUpsellEvent)({
            viewer: _v1,
            analyticsProps: {
              ..._v11,
              productContextFields: {
                ..._v11.productContextFields,
                copy: "close",
                modal_name: "upsell_modal"
              },
              webContextFields: {
                ..._v11.webContextFields,
                copy: "close"
              }
            },
            eventName: "vimeo.close_upsell",
            eventVersion: _v5.UPGRADE_ACTION_GROUP_EVENT_VERSION,
            upsellName: _v4
          });
        },
        onButtonClick: () => {
          (0, _v5.sendBpUpsellEvent)({
            viewer: _v1,
            analyticsProps: {
              ..._v11,
              productContextFields: {
                ..._v11.productContextFields,
                modal_name: "upsell_modal",
                copy: null
              },
              webContextFields: {
                ..._v11.webContextFields,
                copy: null
              }
            },
            eventName: "vimeo.proceed_to_checkout",
            eventVersion: _v5.UPGRADE_ACTION_GROUP_EVENT_VERSION,
            upsellName: _v4
          });
        }
      }), [_v1, _v11, _v4, _v7]);
    return {
      upsellModalConfig: _v10,
      upsellTrackingProps: _v12,
      setUpsellAndTriggerEvent: (0, _v2.useCallback)(_v0 => {
        _v5(_v0), _v6.current = !1, (0, _v5.sendBpUpsellEvent)({
          viewer: _v1,
          analyticsProps: _v11,
          eventName: "vimeo.trigger_upsell",
          eventVersion: _v5.UPGRADE_ACTION_GROUP_EVENT_VERSION,
          upsellName: _v0
        });
      }, [_v1, _v11]),
      bpTriggerUpsellImpression: (0, _v2.useCallback)(_v0 => {
        (0, _v5.sendBpUpsellEvent)({
          viewer: _v1,
          analyticsProps: _v11,
          eventName: "vimeo.upsell_trigger_impression",
          eventVersion: _v5.UPGRADE_VIEW_GROUP_EVENT_VERSION,
          upsellName: _v0,
          includeViewContext: !0
        });
      }, [_v1, _v11])
    };
  }]);
}