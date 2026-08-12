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
    _v16 = _v0.i(0);
  function _v17({
    href: _v0,
    onCtaClick: _v1,
    ..._v2
  }) {
    return (0, _v1.jsx)(_v5.Button, {
      "data-testid": "limit-paywall-upload-defaults-button",
      as: "a",
      href: _v0,
      size: "lg",
      variant: "tertiary",
      width: "100%",
      onClick: () => {
        try {
          _v1?.("upload_defaults");
        } catch (_v0) {
          console.error("UploadDefaultsButton: paywall_cta_clicked failed", _v0);
        }
      },
      ..._v2,
      children: (0, _v11.translate)({
        singular: "Update your upload preferences",
        dictionary: {
          es: {
            singular: "Actualiza tus preferencias de carga"
          },
          "de-DE": {
            singular: "Aktualisieren Sie Ihre Upload-Einstellungen"
          },
          "fr-FR": {
            singular: "Mettez à jour vos préférences de mise en ligne"
          },
          "ja-JP": {
            singular: "アップロード設定を更新"
          },
          "ko-KR": {
            singular: "업로드 환경 설정을 업데이트하세요"
          },
          "pt-BR": {
            singular: "Atualize suas preferências de upload"
          },
          "zh-CN": {
            singular: "更新您的上传偏好设置"
          }
        }
      })
    });
  }
  _v0.s(["UploadDefaultsButton", 0, _v17], 0);
  var _v18 = _v0.i(0);
  let _v19 = ({
    height: _v0 = "32",
    width: _v1 = "74",
    ..._v2
  }) => (0, _v1.jsxs)(_v18.bokeh.svg, {
    width: _v1,
    height: _v0,
    viewBox: "0 0 74 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    ..._v2,
    children: [(0, _v1.jsx)(_v18.bokeh.path, {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M67.9795 8.71875C71.7267 8.71875 74 10.8869 74 14.5703C74 19.3987 71.1333 22.998 65.3984 22.998C62.9169 22.9979 60.7593 21.9257 59.8447 19.9619C58.1916 21.3101 55.2374 22.9999 51.7051 23C48.9115 23 46.9555 22.0895 46.0234 20.4717C45.9134 20.5742 45.8034 20.6781 45.6885 20.7783C44.0262 22.2095 42.3243 22.9951 40.6045 22.9951C38.8847 22.9951 38.3115 21.7351 38.3115 20.6855C38.3116 18.795 39.458 16.2764 39.458 14.8164C39.4845 13.8779 39.0527 13.3369 38.4551 13.3369C36.596 13.3372 34.8722 16.9265 34.8721 20.4766C34.8721 21.5039 35.1576 22.5787 35.4453 22.998C32.0036 22.998 30.8565 22.1568 30.8564 19.4277C30.8564 17.748 31.7178 16.2766 31.7178 14.8076C31.7178 13.8646 31.4342 13.3389 30.7148 13.3389C29.4244 13.3392 27.417 16.0682 27.417 20.0576C27.417 21.5465 27.7623 22.4544 27.9902 22.998C25.4999 22.998 24.0832 22.2115 23.5967 20.4336C22.1978 21.7679 20.3409 22.9998 18.2432 23C16.809 23 15.9493 21.7464 15.9492 20.4795C15.9492 18.1698 17.3835 14.5997 17.3838 13.5498C17.3838 13.1304 17.0957 12.709 16.5225 12.709C16.0126 12.7091 15.6708 12.8254 15.4766 12.9199C15.3744 13.3095 15.2301 13.7416 15.0225 14.1973C14.4448 15.4687 13.3419 17.2754 12.2949 18.6201C10.0463 21.5378 8.39062 23 6.6709 23C5.52454 22.9999 4.59241 21.9883 4.13867 20.3311C3.68714 18.6735 3.24958 17.073 2.80469 15.4443C2.31113 13.6693 2.22427 12.7109 1.36328 12.7109C0.912127 12.711 0.604535 12.8858 0.345703 13.041L0 12.3203C0 12.3203 2.38357 8.93003 4.81152 8.92969C5.86952 8.92969 6.08205 9.68209 6.38086 11.5615C6.7018 13.5896 6.92364 14.8521 7.0498 15.3447C7.42164 17.0289 7.6787 17.9609 8.25195 17.9609C9.54224 17.9602 10.9785 14.8627 10.9785 13.6025C10.9784 12.8417 10.6551 12.5537 10.2656 12.5537C9.90707 12.5537 9.59685 12.7265 9.33789 12.8818L9.1123 12.5537C9.1123 12.5537 10.4939 8.77246 13.4111 8.77246C15.1305 8.77257 15.704 9.86598 15.7041 11.3213C15.7041 11.3743 15.7019 11.4343 15.6992 11.5C16.7026 10.4973 18.5117 8.92969 20.0156 8.92969C21.1621 8.92969 21.6865 9.56037 21.6865 11.0293C21.6863 12.5851 20.5403 17.3276 20.54 18.7969C20.54 19.4381 20.9828 19.6387 21.6025 19.6387C22.1722 19.6387 22.8033 19.3821 23.4053 19.0273C23.4033 18.9518 23.4023 18.8747 23.4023 18.7969C23.4025 17.1172 24.5488 14.8071 24.5488 13.5469C24.5486 13.1254 24.2606 12.7061 23.6875 12.7061C22.9859 12.7061 22.501 13.0371 22.501 13.0371L22.1562 12.3154C22.1922 12.2747 25.1506 8.92793 26.9854 8.92773C28.1318 8.92773 28.8495 9.5576 28.8496 11.0264C28.8496 11.5855 28.8047 12.1381 28.7295 12.7061C29.9513 10.6736 31.7181 8.92773 33.7256 8.92773C35.7327 8.92785 36.3056 9.977 36.3057 11.8672C36.3057 12.1468 36.2929 12.425 36.2686 12.709C37.5965 10.3992 39.8916 8.92981 41.6113 8.92969C43.3311 8.92969 44.4775 9.56021 44.4775 11.8701C44.4774 14.781 43.1877 16.911 43.1875 18.3799C43.1875 19.4294 43.5774 19.6406 44.0488 19.6406C44.4785 19.6405 44.9955 19.4406 45.5225 19.1484C45.4434 18.776 45.4033 18.3797 45.4033 17.9609C45.4033 13.5519 49.1239 8.7207 54.9141 8.7207C57.3421 8.72072 58.874 10.1395 58.874 12.0811C58.8737 16.5872 54.6417 18.8988 50.3486 18.8467C50.8338 19.7438 51.8868 20.2148 53.8936 20.2148L53.8916 20.2178C56.2683 20.2177 58.0412 19.5561 59.4434 18.6191C59.4008 18.3409 59.3779 18.0504 59.3779 17.748C59.3779 12.3916 62.767 8.7188 67.9795 8.71875ZM67.4062 11.6611C65.4873 11.6612 63.9648 14.5063 63.9648 17.1201C63.9649 19.2188 64.8254 20.0594 65.9717 20.0596C68.019 20.0596 69.414 17.2154 69.4141 14.6016C69.4141 12.711 68.7453 11.6611 67.4062 11.6611ZM53.4268 11.6592C51.707 11.6592 49.9982 14.2838 49.998 17.1172C49.998 17.3902 50.0161 17.6463 50.0508 17.8848C52.0258 17.4559 54.584 15.1871 54.584 12.9189C54.5839 12.2889 54.2875 11.6592 53.4268 11.6592Z"
    }), (0, _v1.jsx)(_v18.bokeh.path, {
      fill: "currentColor",
      d: "M20.8232 2C22.2485 2 23.4042 3.12845 23.4043 4.52051C23.4043 5.91266 22.2486 7.04102 20.8232 7.04102C19.398 7.04089 18.2432 5.91258 18.2432 4.52051C18.2433 3.12853 19.3981 2.00013 20.8232 2Z"
    })]
  });
  var _v20 = _v0.i(0);
  function _v21({
    title: _v0,
    price: _v1,
    selected: _v2,
    onClick: _v3,
    badge: _v4
  }) {
    let _v5 = (0, _v9.useColorModeValue)("var(--vimeo-colors-vimeoBlue-50)", "var(--vimeo-colors-vimeoBlue-900)");
    return (0, _v1.jsxs)(_v4.Box, {
      position: "relative",
      width: "100%",
      children: [(0, _v1.jsxs)(_v6.Flex, {
        as: "button",
        type: "button",
        onClick: _v3,
        alignItems: "center",
        gap: "md",
        padding: "md",
        width: "100%",
        height: "64px",
        borderColor: _v2 ? "fill-brand" : "check-radio-stroke",
        borderRadius: "16px",
        borderWidth: "1px",
        borderStyle: "solid",
        cursor: "pointer",
        bg: _v2 ? _v5 : "surface",
        _hover: {
          bg: _v2 ? _v5 : "input-fill-hover"
        },
        transition: "background-color 0.15s ease, border-color 0.15s ease",
        sx: {
          width: "100% !important"
        },
        children: [(0, _v1.jsx)(_v22, {
          selected: _v2
        }), (0, _v1.jsx)(_v6.Flex, {
          direction: "column",
          alignItems: "start",
          flex: "1",
          children: (0, _v1.jsx)(_v8.Text, {
            variant: "heading-sm",
            fontWeight: "medium",
            color: "text-primary",
            children: _v0
          })
        }), (0, _v1.jsx)(_v6.Flex, {
          direction: "column",
          alignItems: "end",
          children: (0, _v1.jsx)(_v8.Text, {
            variant: "body-sm",
            color: "text-secondary",
            textAlign: "right",
            children: _v1
          })
        })]
      }), _v4 && (0, _v1.jsx)(_v20.Badge, {
        position: "absolute",
        top: "-11px",
        left: "15px",
        variant: "new",
        size: "sm",
        children: (0, _v1.jsx)(_v8.Text, {
          variant: "heading-2xs",
          color: "text-primary",
          children: _v4
        })
      })]
    });
  }
  function _v22({
    selected: _v0,
    size: _v1 = 20
  }) {
    return _v0 ? (0, _v1.jsx)(_v4.Box, {
      minWidth: `${_v1}px`,
      minHeight: `${_v1}px`,
      width: `${_v1}px`,
      height: `${_v1}px`,
      borderRadius: "50%",
      borderWidth: "6px",
      borderColor: "fill-brand",
      bg: "surface",
      flexShrink: 0
    }) : (0, _v1.jsx)(_v4.Box, {
      minWidth: `${_v1}px`,
      minHeight: `${_v1}px`,
      width: `${_v1}px`,
      height: `${_v1}px`,
      borderRadius: "50%",
      borderWidth: "1px",
      borderColor: "check-radio-stroke",
      bg: "transparent",
      flexShrink: 0
    });
  }
  let _v23 = "48px";
  function _v24({
    selected: _v0
  }) {
    return (0, _v1.jsx)(_v4.Box, {
      minWidth: "24px",
      minHeight: "24px",
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      borderWidth: _v0 ? "0" : "1px",
      borderColor: "check-radio-stroke",
      bg: _v0 ? "fill-brand" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      children: _v0 && (0, _v1.jsx)(_v10.Checkmark, {
        color: "white",
        width: "20px",
        height: "20px"
      })
    });
  }
  _v0.s(["PlansComparisonPaywall", 0, function ({
    tier: _v0 = "starter",
    paywallTracking: _v1,
    defaultPeriodicity: _v2 = "yearly",
    monthlyFreeTrial: _v3 = !1,
    isFreeTrialEligible: _v4 = !0,
    postCheckoutUrl: _v5,
    title: _v6,
    subtitle: _v7,
    hideTierBadge: _v8 = !1,
    isExistingSubscriber: _v9 = !1,
    showOtherPlans: _v10 = !1,
    visual: _v11,
    isModal: _v12 = !1,
    uploadDefaultsUrl: _v13,
    onCtaClick: _v14
  }) {
    var _v15;
    let _v16,
      [_v17, _v18] = (0, _v3.useState)(_v2),
      [_v19, _v20] = (0, _v3.useState)(!1),
      _v21 = _v4 && _v19,
      _v22 = (0, _v13.useGetSubscriptionPlansData)([_v0], void 0, !1),
      _v23 = (0, _v15.useViewer)(),
      _v24 = (0, _v14.isUkLocation)(_v23?.location),
      _v25 = _v22?.find(_v0 => _v0.tier === _v0) ?? _v22?.[0],
      _v26 = _v25?.currency?.currencyCode || "USD",
      _v27 = _v24 ? (0, _v14.formatUkVatPrice)(_v25?.price.annualMonthly, _v26) : _v25?.priceFormatted.annualMonthly,
      _v28 = _v24 ? (0, _v14.formatUkVatPrice)(_v25?.price.monthly, _v26) : _v25?.priceFormatted.monthly,
      _v29 = void 0 === _v22,
      _v30 = (0, _v9.useColorModeValue)("https://i.vimeocdn.com/custom_asset/4a6f0f615c4cf9d30b48f79df970438e", "https://i.vimeocdn.com/custom_asset/edb2ec4f5620a90adb065894bbb08419"),
      _v31 = (0, _v9.useColorModeValue)("var(--vimeo-colors-vimeoBlue-50)", "var(--vimeo-colors-vimeoBlue-900)"),
      _v32 = _v0 => {
        _v18(_v0), "monthly" !== _v0 || _v3 || _v20(!1);
      },
      _v33 = _v25?.name ?? (0, _v2.default)(`${_v0}`),
      _v34 = _v6 ?? (_v9 ? (0, _v11.translate)({
        singular: "Upgrade your plan",
        dictionary: {
          es: {
            singular: "Actualiza tu plan"
          },
          "de-DE": {
            singular: "Tarif upgraden"
          },
          "fr-FR": {
            singular: "Améliorez votre forfait"
          },
          "ja-JP": {
            singular: "プランをアップグレード"
          },
          "ko-KR": {
            singular: "요금제를 업그레이드하세요"
          },
          "pt-BR": {
            singular: "Atualize seu plano"
          },
          "zh-CN": {
            singular: "升级您的计划"
          }
        }
      }) : (0, _v11.translate)({
        singular: "Join Vimeo",
        dictionary: {
          es: {
            singular: "Unirse a Vimeo"
          },
          "de-DE": {
            singular: "Registriere dich bei Vimeo"
          },
          "fr-FR": {
            singular: "S'inscrire à Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoに登録"
          },
          "ko-KR": {
            singular: "Vimeo 가입"
          },
          "pt-BR": {
            singular: "Cadastre-se no Vimeo"
          },
          "zh-CN": {
            singular: "加入 Vimeo"
          }
        }
      })),
      _v35 = _v7 ?? (_v9 ? (0, _v11.translate)({
        singular: "Get more with {PLAN_NAME}.",
        replacements: {
          PLAN_NAME: _v33
        },
        dictionary: {
          es: {
            singular: "Obtén más con {PLAN_NAME}."
          },
          "de-DE": {
            singular: "Mehr mit {PLAN_NAME} erhalten."
          },
          "fr-FR": {
            singular: "Obtenez plus avec {PLAN_NAME}."
          },
          "ja-JP": {
            singular: "{PLAN_NAME}でさらに多くの機能をご利用いただけます."
          },
          "ko-KR": {
            singular: "{PLAN_NAME}으로 더 많은 혜택을 누리세요."
          },
          "pt-BR": {
            singular: "Obtenha mais com {PLAN_NAME}."
          },
          "zh-CN": {
            singular: "使用 {PLAN_NAME} 获取更多。"
          }
        }
      }) : (0, _v11.translate)({
        singular: "All the tools to create, manage, and showcase video.",
        dictionary: {
          es: {
            singular: "Todas las herramientas para crear, gestionar y mostrar vídeo."
          },
          "de-DE": {
            singular: "Alle Tools, mit denen Sie Videos erstellen, verwalten und präsentieren können."
          },
          "fr-FR": {
            singular: "Tous les outils pour créer, gérer et mettre en valeur la vidéo."
          },
          "ja-JP": {
            singular: "動画を作成、管理、公開するためのすべてのツール。"
          },
          "ko-KR": {
            singular: "비디오를 제작, 관리 및 전시할 수 있는 모든 도구."
          },
          "pt-BR": {
            singular: "Todas as ferramentas para criar, gerenciar e exibir vídeos."
          },
          "zh-CN": {
            singular: "创建、管理和展示视频的所有工具。"
          }
        }
      })),
      _v36 = !_v8,
      _v37 = _v34.length > 12;
    return (0, _v1.jsxs)(_v6.Flex, {
      direction: "column",
      alignItems: "center",
      width: "100%",
      maxHeight: _v12 ? void 0 : "calc(100vh - 120px)",
      height: _v12 ? "100%" : void 0,
      minHeight: _v12 ? "0" : void 0,
      position: "relative",
      children: [_v12 && (0, _v1.jsx)(_v6.Flex, {
        justifyContent: "center",
        width: "100%",
        flexShrink: 0,
        pb: {
          base: "16px",
          md: "24px"
        },
        children: (0, _v1.jsx)(_v19, {
          color: "text-primary"
        })
      }), (0, _v1.jsxs)(_v6.Flex, {
        direction: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: _v12 ? "100%" : "400px",
        gap: {
          base: "12px",
          md: "24px"
        },
        flex: "1",
        minHeight: "0",
        pb: _v12 ? "0" : {
          base: "24px",
          md: "48px"
        },
        mx: _v12 ? "0" : {
          base: "0",
          md: "32px"
        },
        overflow: "auto",
        children: [(0, _v1.jsxs)(_v6.Flex, {
          direction: "column",
          alignItems: "center",
          gap: "md",
          width: "100%",
          paddingX: _v12 ? {
            base: "0",
            md: "8px"
          } : {
            base: "0",
            md: "32px"
          },
          children: [(0, _v1.jsxs)(_v6.Flex, {
            direction: "row",
            alignItems: "center",
            gap: "sm",
            justifyContent: "center",
            children: [(0, _v1.jsx)(_v8.Text, {
              variant: {
                base: "heading-lg",
                md: _v37 ? "heading-xl" : "heading-2xl"
              },
              textAlign: "center",
              whiteSpace: _v36 ? "nowrap" : "normal",
              children: _v34
            }), _v36 && (0, _v1.jsx)(_v4.Box, {
              pt: {
                base: "0",
                md: _v37 ? "4px" : "8px"
              },
              children: (0, _v1.jsx)(_v4.Box, {
                bg: "#8a5ee8",
                px: "6px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                children: (0, _v1.jsx)(_v8.Text, {
                  fontSize: "14px",
                  fontWeight: "medium",
                  color: "white",
                  children: _v33
                })
              })
            })]
          }), (0, _v1.jsx)(_v8.Text, {
            variant: "heading-sm",
            fontWeight: "medium",
            color: "text-primary",
            textAlign: "center",
            children: _v35
          })]
        }), _v11 ?? (0, _v1.jsx)(_v4.Box, {
          width: "100%",
          maxWidth: "252px",
          maxHeight: {
            base: _v21 ? "120px" : "140px",
            md: _v21 ? "180px" : "200px"
          },
          minHeight: {
            base: "80px",
            md: "120px"
          },
          aspectRatio: "1333/1058",
          flexShrink: "1",
          backgroundImage: `url(${_v30})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transition: _v21 ? "all 0.3s ease" : "all 0.3s ease 0.1s"
        }), _v4 && (0, _v1.jsxs)(_v6.Flex, {
          direction: "column",
          gap: "8px",
          width: "100%",
          marginBottom: {
            base: "12px",
            md: "0px"
          },
          children: [(0, _v1.jsxs)(_v6.Flex, {
            as: "button",
            type: "button",
            onClick: () => {
              let _v0 = !_v19;
              _v20(_v0), _v0 && !_v3 && _v18("yearly");
            },
            alignItems: "center",
            gap: "md",
            padding: "md",
            width: "100%",
            height: "78px",
            borderColor: _v21 ? "fill-brand" : "input-stroke",
            borderRadius: "16px",
            borderWidth: "1px",
            borderStyle: "solid",
            cursor: "pointer",
            bg: _v21 ? _v31 : "surface",
            _hover: {
              bg: _v21 ? _v31 : "input-fill-hover"
            },
            transition: "background-color 0.15s ease, border-color 0.15s ease",
            sx: {
              width: "100% !important"
            },
            children: [(0, _v1.jsxs)(_v6.Flex, {
              direction: "column",
              alignItems: "start",
              flex: "1",
              gap: "2px",
              children: [(0, _v1.jsx)(_v8.Text, {
                variant: "heading-sm",
                fontWeight: "medium",
                color: "text-primary",
                children: _v21 ? (0, _v11.translate)({
                  singular: "Free trial enabled",
                  dictionary: {
                    es: {
                      singular: "Prueba gratuita activada"
                    },
                    "de-DE": {
                      singular: "Kostenlose Testversion aktiviert"
                    },
                    "fr-FR": {
                      singular: "Essai gratuit activé"
                    },
                    "ja-JP": {
                      singular: "無料トライアルが有効になりました"
                    },
                    "ko-KR": {
                      singular: "무료 체험 활성화됨"
                    },
                    "pt-BR": {
                      singular: "Avaliação gratuita ativada"
                    },
                    "zh-CN": {
                      singular: "已启用免费试用"
                    }
                  }
                }) : (0, _v11.translate)({
                  singular: "Not sure yet?",
                  dictionary: {
                    es: {
                      singular: "¿Todavía no estás seguro?"
                    },
                    "de-DE": {
                      singular: "Noch nicht sicher?"
                    },
                    "fr-FR": {
                      singular: "Pas encore sûr ?"
                    },
                    "ja-JP": {
                      singular: "まだ決めていませんか？"
                    },
                    "ko-KR": {
                      singular: "아직 확실하지 않으신가요?"
                    },
                    "pt-BR": {
                      singular: "Ainda não tem certeza?"
                    },
                    "zh-CN": {
                      singular: "还不确定？"
                    }
                  }
                })
              }), !_v21 && (0, _v1.jsx)(_v8.Text, {
                variant: "body-md",
                color: "text-tertiary",
                children: (0, _v11.translate)({
                  singular: "Enable free trial",
                  dictionary: {
                    es: {
                      singular: "Activar la prueba gratuita"
                    },
                    "de-DE": {
                      singular: "Kostenlose Testversion aktivieren"
                    },
                    "fr-FR": {
                      singular: "Activer l'essai gratuit"
                    },
                    "ja-JP": {
                      singular: "無料トライアルを有効にする"
                    },
                    "ko-KR": {
                      singular: "무료 체험 활성화"
                    },
                    "pt-BR": {
                      singular: "Ativar avaliação gratuita"
                    },
                    "zh-CN": {
                      singular: "启用免费试用"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v24, {
              selected: _v21
            })]
          }), (0, _v1.jsxs)(_v6.Flex, {
            width: "100%",
            px: "md",
            justifyContent: "space-between",
            alignItems: "center",
            height: _v21 ? "20px" : "0px",
            opacity: +!!_v21,
            transition: _v21 ? "height 0.3s ease, opacity 0.3s ease 0.1s" : "height 0.3s ease 0.1s, opacity 0.3s ease",
            overflow: "hidden",
            children: [(0, _v1.jsx)(_v8.Text, {
              variant: "heading-2xs",
              color: "text-secondary",
              children: (0, _v11.translate)({
                singular: "{amount} due today",
                replacements: {
                  amount: (_v15 = _v26, _v16 = (0, _v11.getCurrentLocale)(), new Intl.NumberFormat(_v16, {
                    style: "currency",
                    currency: _v15,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }).format(0))
                },
                dictionary: {
                  es: {
                    singular: "{amount} a pagar hoy"
                  },
                  "de-DE": {
                    singular: "{amount} heute fällig"
                  },
                  "fr-FR": {
                    singular: "{amount} à payer aujourd'hui"
                  },
                  "ja-JP": {
                    singular: "{amount} が本日請求されます"
                  },
                  "ko-KR": {
                    singular: "{amount} 오늘 결제 예정"
                  },
                  "pt-BR": {
                    singular: "{amount} devido hoje"
                  },
                  "zh-CN": {
                    singular: "{amount} 今日应付"
                  }
                }
              })
            }), (0, _v1.jsx)(_v8.Text, {
              variant: "heading-2xs",
              color: "fill-brand",
              children: (0, _v11.translate)({
                singular: "Free",
                dictionary: {
                  es: {
                    singular: "Gratis"
                  },
                  "de-DE": {
                    singular: "Kostenlos"
                  },
                  "fr-FR": {
                    singular: "Gratuit"
                  },
                  "ja-JP": {
                    singular: "無料"
                  },
                  "ko-KR": {
                    singular: "무료"
                  },
                  "pt-BR": {
                    singular: "Grátis"
                  },
                  "zh-CN": {
                    singular: "免费"
                  }
                }
              })
            })]
          })]
        }), (0, _v1.jsxs)(_v6.Flex, {
          direction: "column",
          gap: "12px",
          width: "100%",
          children: [_v29 ? (0, _v1.jsx)(_v4.Box, {
            position: "relative",
            width: "100%",
            children: (0, _v1.jsx)(_v7.Skeleton, {
              width: "100%",
              height: "64px",
              borderRadius: "16px"
            })
          }) : (0, _v1.jsx)(_v21, {
            title: (0, _v11.translate)({
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
            }),
            price: _v27 ? `${_v27}${(0, _v11.translate)({
              singular: "/month",
              dictionary: {
                es: {
                  singular: "/mes"
                },
                "de-DE": {
                  singular: "/Monat"
                },
                "fr-FR": {
                  singular: "/mois"
                },
                "ja-JP": {
                  singular: "/月"
                },
                "ko-KR": {
                  singular: "/월"
                },
                "pt-BR": {
                  singular: "/mês"
                },
                "zh-CN": {
                  singular: "/月"
                }
              }
            })}` : "-",
            selected: "yearly" === _v17,
            onClick: () => _v32("yearly"),
            badge: (0, _v11.translate)({
              singular: "Most popular",
              dictionary: {
                es: {
                  singular: "Más popular"
                },
                "de-DE": {
                  singular: "Am beliebtesten"
                },
                "fr-FR": {
                  singular: "Le plus populaire"
                },
                "ja-JP": {
                  singular: "一番人気"
                },
                "ko-KR": {
                  singular: "가장 인기 있는"
                },
                "pt-BR": {
                  singular: "Mais popular"
                },
                "zh-CN": {
                  singular: "最受欢迎"
                }
              }
            })
          }), _v29 ? (0, _v1.jsx)(_v4.Box, {
            width: "100%",
            children: (0, _v1.jsx)(_v7.Skeleton, {
              width: "100%",
              height: "64px",
              borderRadius: "16px"
            })
          }) : (0, _v1.jsx)(_v21, {
            title: (0, _v11.translate)({
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
            price: _v28 ? `${_v28}${(0, _v11.translate)({
              singular: "/month",
              dictionary: {
                es: {
                  singular: "/mes"
                },
                "de-DE": {
                  singular: "/Monat"
                },
                "fr-FR": {
                  singular: "/mois"
                },
                "ja-JP": {
                  singular: "/月"
                },
                "ko-KR": {
                  singular: "/월"
                },
                "pt-BR": {
                  singular: "/mês"
                },
                "zh-CN": {
                  singular: "/月"
                }
              }
            })}` : "-",
            selected: "monthly" === _v17,
            onClick: () => _v32("monthly")
          }), !_v29 && !_v12 && (0, _v1.jsx)(_v8.Text, {
            variant: "body-sm",
            color: "text-tertiary",
            textAlign: "center",
            children: _v24 ? (0, _v11.translate)({
              singular: "incl. 20% VAT",
              dictionary: {
                es: {
                  singular: "incl. 20% IVA"
                },
                "de-DE": {
                  singular: "inkl. 20% MwSt."
                },
                "fr-FR": {
                  singular: "incl. 20 % TVA"
                },
                "ja-JP": {
                  singular: "付加価値税（20%）を含む"
                },
                "ko-KR": {
                  singular: "부가가치세 20% 포함"
                },
                "zh-CN": {
                  singular: "含 20% 增值税"
                }
              }
            }) : (0, _v11.translate)({
              singular: "plus applicable tax",
              dictionary: {
                es: {
                  singular: "más impuestos aplicables"
                },
                "de-DE": {
                  singular: "zzgl. anfallender Steuern"
                },
                "fr-FR": {
                  singular: "plus les taxes applicables"
                },
                "ja-JP": {
                  singular: "該当する税金を別途加算"
                },
                "ko-KR": {
                  singular: "해당 세금 별도"
                },
                "pt-BR": {
                  singular: "mais imposto aplicável"
                },
                "zh-CN": {
                  singular: "另加适用税费"
                }
              }
            })
          })]
        })]
      }), (0, _v1.jsxs)(_v6.Flex, {
        direction: "column",
        gap: "sm",
        position: "sticky",
        bottom: "0",
        width: "100%",
        maxWidth: _v12 ? "100%" : "400px",
        flexShrink: 0,
        pt: "24px",
        pb: _v12 ? "0" : {
          base: "0px",
          md: "48px"
        },
        children: [(0, _v1.jsx)(_v5.Button, {
          width: "100%",
          height: _v23,
          size: "md",
          variant: "primary",
          onClick: () => {
            _v14?.("primary");
            let _v0 = "monthly" === _v17 ? `${_v0}/monthly` : _v0,
              _v1 = (0, _v12.buildCheckoutUrl)({
                ..._v1,
                tier: _v0,
                isTrial: _v21,
                postCheckoutUrl: _v5
              });
            window.location.assign(_v1);
          },
          isDisabled: _v29,
          children: _v21 ? (0, _v11.translate)({
            singular: "Try for free",
            dictionary: {
              es: {
                singular: "Prueba gratuita"
              },
              "de-DE": {
                singular: "Kostenlos testen"
              },
              "fr-FR": {
                singular: "Essayer gratuitement"
              },
              "ja-JP": {
                singular: "無料で試す"
              },
              "ko-KR": {
                singular: "무료로 체험해 보기"
              },
              "pt-BR": {
                singular: "Experimente grátis"
              },
              "zh-CN": {
                singular: "免费试用"
              }
            }
          }) : (0, _v11.translate)({
            singular: "Continue",
            dictionary: {
              es: {
                singular: "Continuar"
              },
              "de-DE": {
                singular: "Weiter"
              },
              "fr-FR": {
                singular: "Continuer"
              },
              "ja-JP": {
                singular: "次へ"
              },
              "ko-KR": {
                singular: "계속"
              },
              "pt-BR": {
                singular: "Continuar"
              },
              "zh-CN": {
                singular: "继续"
              }
            }
          })
        }), _v10 && (0, _v1.jsx)(_v16.OtherPlansButton, {
          paywallTracking: _v1,
          size: "md",
          height: _v23,
          onCtaClick: _v14
        }), _v13 && (0, _v1.jsx)(_v17, {
          href: _v13,
          onCtaClick: _v14,
          size: "md",
          height: _v23
        })]
      })]
    });
  }], 0);
}