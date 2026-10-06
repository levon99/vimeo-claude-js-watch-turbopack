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
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = {
      clock: (0, _v1.jsx)(_v23.Clock, {}),
      image: (0, _v1.jsx)(_v25.Image, {}),
      theme: (0, _v1.jsx)(_v21.AiSparkles, {}),
      create: (0, _v1.jsx)(_v24.CreateVideo, {}),
      brand: (0, _v1.jsx)(_v26.LogoBrand, {}),
      stickers: (0, _v1.jsx)(_v0 => (0, _v1.jsx)(_v22.Icon, {
        viewBox: "0 0 24 24",
        ..._v0,
        fill: "none",
        children: (0, _v1.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M22.01 12.11 11.89 1.99l-.446.025C6.16 2.305 2 6.685 2 12c0 5.523 4.477 10 10 10 5.316 0 9.695-4.159 9.985-9.444l.024-.446Zm-3.733-.904-5.483-5.483a7.975 7.975 0 0 0 2.034 3.449 7.975 7.975 0 0 0 3.45 2.034ZM10.504 4.14a8 8 0 1 0 9.356 9.356 9.968 9.968 0 0 1-6.446-2.91 9.969 9.969 0 0 1-2.91-6.446Z",
          fill: "currentColor"
        })
      }), {}),
      video: (0, _v1.jsx)(_v27.Video, {}),
      lineChart: (0, _v1.jsx)(_v0 => (0, _v1.jsx)(_v22.Icon, {
        viewBox: "0 0 24 24",
        ..._v0,
        fill: "none",
        children: (0, _v1.jsx)("path", {
          d: "M7 16a1.5 1.5 0 0 0 1.5-1.5.77.77 0 0 0 0-.15l2.79-2.79h.46l1.61 1.61v.08a1.5 1.5 0 1 0 3 0v-.08L20 9.5A1.5 1.5 0 1 0 18.5 8a.767.767 0 0 0 0 .15l-3.61 3.61h-.16L13 10a1.5 1.5 0 1 0-3 0l-3 3a1.5 1.5 0 1 0 0 3Zm13.5 4h-17V3a1 1 0 0 0-2 0v18a1 1 0 0 0 1 1h18a1 1 0 0 0 0-2Z",
          fill: "currentColor"
        })
      }), {}),
      videoStack: (0, _v1.jsx)(_v28.VideosStack, {}),
      vimeoV: (0, _v1.jsx)(_v29.VimeoV, {})
    },
    _v31 = ({
      blockedCapabilities: _v0 = [],
      paidFeaturesTitle: _v1
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v1 && (0, _v1.jsx)(_v20.Paragraph, {
        children: (0, _v10.translate)({
          singular: "Paid features:",
          dictionary: {
            es: {
              singular: "Funciones pagas:"
            },
            "de-DE": {
              singular: "Zahlungspflichtige Funktionen:"
            },
            "fr-FR": {
              singular: "Fonctionnalités payantes :"
            },
            "ja-JP": {
              singular: "有料機能："
            },
            "ko-KR": {
              singular: "유료 기능:"
            },
            "pt-BR": {
              singular: "Recursos pagos:"
            },
            "zh-CN": {
              singular: "付费功能："
            }
          }
        })
      }), _v0.map((_v0, _v1) => (0, _v1.jsxs)(_v19.Flex, {
        alignItems: "center",
        children: [(0, _v1.jsx)(_v19.Flex, {
          width: (0, _v18.rem)(20),
          height: (0, _v18.rem)(20),
          margin: (0, _v18.rem)(20),
          marginLeft: 0,
          children: _v30[_v0.icon] ?? ""
        }), (0, _v1.jsx)(_v20.Paragraph, {
          children: _v0.message
        })]
      }, _v1))]
    }),
    _v32 = ({
      blockedCapabilities: _v0,
      ctaText: _v1,
      onClose: _v2,
      onUpgradeClick: _v3,
      upsellData: _v4
    }) => {
      let {
        header: _v5,
        paragraph: _v6,
        paidFeaturesTitle: _v7
      } = _v4;
      return (0, _v3.useEffect)(() => () => {
        _v2?.();
      }, [_v2]), (0, _v1.jsxs)(_v4.Box, {
        padding: "lg",
        children: [(0, _v1.jsx)(_v16.Header, {
          size: "lg",
          children: _v5
        }), _v6.map((_v0, _v1) => (0, _v1.jsx)(_v17.Text, {
          variant: "heading-sm",
          marginTop: _v1 > 0 ? 0 : (0, _v18.rem)(16),
          children: _v0
        }, _v1)), (0, _v1.jsx)(_v31, {
          blockedCapabilities: _v0,
          paidFeaturesTitle: _v7
        }), (0, _v1.jsx)(_v15.Button, {
          onClick: _v3,
          width: "100%",
          variant: "upsell",
          children: _v1
        })]
      });
    };
  var _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  let _v36 = ({
    blockedCapabilities: _v0,
    ctaText: _v1,
    onUpgradeClick: _v2,
    upsellData: _v3
  }) => {
    let {
      header: _v4,
      paragraph: _v5,
      paidFeaturesTitle: _v6
    } = _v3;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v35.ModalHeader, {
        children: [(0, _v1.jsx)(_v16.Header, {
          size: "lg",
          children: _v4
        }), _v5.map((_v0, _v1) => (0, _v1.jsx)(_v17.Text, {
          variant: "heading-sm",
          marginTop: _v1 > 0 ? 0 : (0, _v18.rem)(16),
          children: _v0
        }, _v1))]
      }), (0, _v1.jsx)(_v33.ModalBody, {
        children: (0, _v1.jsx)(_v31, {
          blockedCapabilities: _v0,
          paidFeaturesTitle: _v6
        })
      }), (0, _v1.jsx)(_v34.ModalFooter, {
        children: (0, _v1.jsx)(_v15.Button, {
          onClick: _v2,
          width: "100%",
          variant: "upsell",
          children: _v1
        })
      })]
    });
  };
  var _v37 = _v0.i(0);
  let _v38 = ({
    as: _v0 = "content",
    bpConfig: _v1,
    clipId: _v2,
    disabledOptions: _v3,
    isOpen: _v4 = !1,
    onClose: _v5
  }) => {
    let _v6 = (0, _v3.useRef)(!1),
      _v7 = (0, _v3.useContext)(_v14.ViewerContext),
      {
        thirdPartyIntegration: _v8
      } = (0, _v3.useContext)(_v12.ConfigContext),
      _v9 = (0, _v9.loadCookie)(_v8.BI_UPSELL_IS_TRIAL),
      _v10 = (0, _v9.loadCookie)(_v8.BI_UPSELL_PLAN) || "unknown",
      _v11 = "true" === _v9,
      _v12 = {
        planDuration: null,
        planOffered: _v3?.minTierForCapability || ""
      },
      _v13 = _v7?.user?.isFreeTrial,
      _v14 = (({
        type: _v0,
        isUserInTrialPackage: _v1
      }) => {
        let _v2 = {
          header: (0, _v10.translate)({
            singular: "Upgrade to use paid features",
            dictionary: {
              es: {
                singular: "Actualiza tu membresía para usar las funciones pagas"
              },
              "de-DE": {
                singular: "Upgraden, um kostenpflichtige Funktionen zu nutzen"
              },
              "fr-FR": {
                singular: "Mettez à niveau pour utiliser les fonctionnalités payantes"
              },
              "ja-JP": {
                singular: "アップグレードして有料機能を活用しましょう"
              },
              "ko-KR": {
                singular: "업그레이드하여 유료 기능을 사용하세요."
              },
              "pt-BR": {
                singular: "Faça upgrade para usar os recursos pagos"
              },
              "zh-CN": {
                singular: "升级使用付费功能"
              }
            }
          }),
          paragraph: [(0, _v10.translate)({
            singular: "This video includes paid Create features",
            dictionary: {
              es: {
                singular: "Este video incluye funciones pagadas de Create."
              },
              "de-DE": {
                singular: "Dieses Video enthält kostenpflichtige Create-Funktionen"
              },
              "fr-FR": {
                singular: "Cette vidéo comprend des fonctionnalités payantes de Vimeo Create."
              },
              "ja-JP": {
                singular: "この動画には、有料のCreate機能が含まれています。"
              },
              "ko-KR": {
                singular: "이 동영상은 Create 유료 기능을 포함합니다."
              },
              "pt-BR": {
                singular: "Este vídeo inclui recursos pagos do Create"
              },
              "zh-CN": {
                singular: "此视频包含付费的创建功能"
              }
            }
          }), (0, _v10.translate)({
            singular: "To share, embed, or download this video,",
            dictionary: {
              es: {
                singular: "Para compartir, insertar o descargar este video,"
              },
              "de-DE": {
                singular: "Um dieses Video zu teilen, einzubetten oder herunterzuladen,"
              },
              "fr-FR": {
                singular: "Pour partager, intégrer ou télécharger cette vidéo,"
              },
              "ja-JP": {
                singular: "この動画を共有、埋め込み、ダウンロードするには、"
              },
              "ko-KR": {
                singular: "이 동영상을 공유, 임베드 또는 다운로드하려면"
              },
              "pt-BR": {
                singular: "Para compartilhar, incorporar ou baixar este vídeo,"
              },
              "zh-CN": {
                singular: "要分享、嵌入或下载此视频，"
              }
            }
          })],
          planPricingUri: "",
          paidFeaturesTitle: !0,
          upgradeCta: {}
        };
        switch (_v0) {
          case _v37.UPSELL_PLAN_TYPES.STARTER:
            _v2.header = "Upgrade for more features", _v2.paragraph = ["Upgrade to a Starter plan and get access to a video toolkit that covers the fundamentals, including:"], _v2.planPricingUri = _v1 ? "/cart/starter" : "/cart/starter/trial", _v2.paidFeaturesTitle = !1;
            break;
          case _v37.UPSELL_PLAN_TYPES.STANDARD:
            _v2.header = "Upgrade for more features", _v2.paragraph = ["Upgrade to a Standard plan and get access to more video management and marketing features, including:"], _v2.planPricingUri = _v1 ? "/cart/standard" : "/cart/standard/trial", _v2.paidFeaturesTitle = !1;
            break;
          case _v37.UPSELL_PLAN_TYPES.ADVANCED:
            _v2.header = "Advanced", _v2.paragraph = ["Advanced video features plus virtual events and webinars"], _v2.planPricingUri = _v1 ? "/cart/advanced" : "/cart/advanced/trial", _v2.paidFeaturesTitle = !1, _v2.upgradeCta = {
              text: "Purchase now"
            };
            break;
          case _v37.UPSELL_PLAN_TYPES.ENTERPRISE:
            _v2.header = "Enterprise", _v2.paragraph = ["Additional security, control, and support"], _v2.planPricingUri = "/cart/enterprise", _v2.paidFeaturesTitle = !1, _v2.upgradeCta = {
              text: "Contact us",
              url: "/enterprise/contact-us"
            };
        }
        return _v2;
      })({
        type: _v12?.planOffered,
        isUserInTrialPackage: _v13
      }),
      _v15 = (0, _v10.translate)({
        singular: "Upgrade to {TIER}",
        replacements: {
          TIER: ((_v0 = "") => _v0.charAt(0).toUpperCase() + _v0.slice(1))(_v12?.planOffered === "plus" ? "pro" : _v12?.planOffered)
        },
        dictionary: {
          es: {
            singular: "Cambiar a {TIER}"
          },
          "de-DE": {
            singular: "Upgrade auf {TIER} vornehmen"
          },
          "fr-FR": {
            singular: "Passez à l'abonnement {TIER}"
          },
          "ja-JP": {
            singular: "{TIER} にアップグレード"
          },
          "ko-KR": {
            singular: "{TIER} 요금제로 업그레이드"
          },
          "pt-BR": {
            singular: "Fazer upgrade para {TIER}"
          },
          "zh-CN": {
            singular: "升级到 {TIER}"
          }
        }
      }),
      {
        planPricingUri: _v16,
        upgradeCta: _v17
      } = _v14,
      _v18 = (0, _v3.useMemo)(() => ({
        vsid: _v2,
        userId: _v7?.user?.id,
        currentTier: _v7?.user?.account,
        deviceId: _v7?.vuid,
        offeredPlanDuration: _v12?.planDuration,
        offeredPlan: _v12?.planOffered,
        currentPlan: _v10,
        currentIsTrial: _v11,
        thirdParty: _v7?.user?.managedUser?.app?.id || _v8,
        cta: _v17?.text || _v15,
        ..._v1
      }), [_v1, _v2, _v15, _v11, _v10, _v12?.planDuration, _v12?.planOffered, _v8, _v17?.text, _v7?.user?.account, _v7?.user?.id, _v7?.user?.managedUser?.app?.id, _v7?.vuid]);
    (0, _v3.useEffect)(() => {
      _v6.current || (_v6.current = !0, (0, _v11.trackOpenUpgradeCapabilityModal)(_v18));
    }, [_v18]), window.successfulUpgradeCallback = () => {
      let _v0 = (0, _v9.loadCookie)(_v8.BI_UPSELL_IS_TRIAL),
        _v1 = (0, _v9.loadCookie)(_v8.BI_UPSELL_PLAN),
        _v2 = _v18.offeredPlan;
      (0, _v13.trackSuccessfulClientTransaction)(_v2, _v1 || "unknown", _v18.triggerForUpsell, _v18.currentTier, _v18.triggerCapability, "true" === _v0, _v18.thirdParty.toString(), _v18.flow), window.location.reload();
    };
    let _v19 = () => {
        let _v0;
        if (_v17?.url) _v0 = _v17?.url;else if (_v16) _v0 = _v16;else {
          let _v0 = _v12?.planOffered === "plus" ? "pro" : _v12?.planOffered;
          "pro" === _v0 && (_v0 = "free30daypro"), _v0 = `/store/${_v0}?show_teams_onboarding=false`;
        }
        (0, _v11.trackClickOnUpgradeCapabilityModal)(_v18), window.open(_v0);
      },
      _v20 = () => {
        (0, _v11.trackCloseUpgradeCapabilityModal)(_v18), _v5?.();
      };
    return "modal" === _v0 ? (0, _v1.jsx)(_v4.Box, {
      width: (0, _v2.rem)(320),
      maxWidth: "90vw",
      children: (0, _v1.jsxs)(_v5.Modal, {
        isOpen: _v4,
        onClose: _v20,
        children: [(0, _v1.jsx)(_v7.ModalOverlay, {}), (0, _v1.jsx)(_v6.ModalContent, {
          children: (0, _v1.jsx)(_v36, {
            blockedCapabilities: _v3?.reasons,
            ctaText: _v17?.text || _v15,
            upsellData: _v14,
            onUpgradeClick: _v19
          })
        })]
      })
    }) : (0, _v1.jsx)(_v32, {
      blockedCapabilities: _v3?.reasons,
      ctaText: _v17?.text || _v15,
      onClose: _v20,
      onUpgradeClick: _v19,
      upsellData: _v14
    });
  };
  _v0.s(["BlockerModeModal", 0, ({
    trigger: _v0,
    video: _v1,
    videoId: _v2,
    active: _v3,
    close: _v4
  }) => {
    let _v5 = _v1?.disabledProperties?.embed,
      _v6 = _v1?.disabledProperties?.download,
      _v7 = _v1?.disabledProperties?.duplicate,
      _v8 = _v5 || _v6 || _v7;
    return _v8 && (_v8.minTierForCapability = "upgrade_publish" === _v0 ? _v5?.minTierForCapability || "pro" : "upgrade_duplicate" === _v0 ? _v7?.minTierForCapability || "pro" : _v6?.minTierForCapability || "pro"), (0, _v1.jsx)(_v38, {
      as: "modal",
      bpConfig: {
        flow: "SVV",
        triggerForUpsell: "upgrade_publish" === _v0 ? "click_on_publish_to_social" : "upgrade_duplicate" === _v0 ? "click_on_duplicate" : "click_on_download",
        triggerCapability: "upgrade_publish" === _v0 ? "publish_to_social" : "upgrade_duplicate" === _v0 ? "click_on_duplicate" : "download_video"
      },
      clipId: _v2,
      disabledOptions: _v8,
      isOpen: !!_v3,
      onClose: () => _v4?.()
    });
  }], 0);
}