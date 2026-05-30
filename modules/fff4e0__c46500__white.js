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
  let _v14 = "#fff4e0",
    _v15 = "#c46500",
    _v16 = {
      bgColor: _v15,
      color: "white",
      _hover: {
        bgColor: "#a85500"
      },
      _active: {
        bgColor: "#8c4600"
      },
      _disabled: {
        bgColor: _v15,
        _hover: {
          bgColor: _v15
        }
      }
    };
  _v0.s(["ColdStorageBanner", 0, ({
    surface: _v0,
    onLearnMore: _v1,
    onViewVideos: _v2,
    planName: _v3 = "Advanced",
    className: _v4
  }) => {
    let {
      trackColdStorageUxDisplayed: _v5,
      trackColdStorageUxClicked: _v6
    } = (0, _v12.useColdStorageTracking)();
    (0, _v2.useEffect)(() => {
      _v5({
        surface: _v0
      });
    }, [_v0, _v5]);
    let _v7 = (0, _v1.jsx)(_v13.default, {
      size: "sm",
      noMargin: !0,
      style: _v16,
      name: "cold_storage_banner_upgrade_button",
      location: `cold_storage_banner_${_v0}`,
      onClick: () => {
        _v6({
          element: "upgrade_button"
        });
      },
      modalConfig: {},
      modalTracking: {
        params: {
          page: _v0,
          feature: "storage",
          location: `cold_storage_banner_${_v0}`,
          upsell_name: "cold_storage_banner"
        },
        paywallTracking: {
          paywallTrigger: `cold_storage_banner_upgrade_${_v0}`,
          paywallLocation: `cold_storage_banner_${_v0}`,
          paywallType: "popup",
          paywallFeature: "storage_limit"
        }
      },
      children: (0, _v11.translate)({
        singular: "Upgrade",
        dictionary: {
          es: {
            singular: "Actualizar"
          },
          "de-DE": {
            singular: "Upgraden"
          },
          "fr-FR": {
            singular: "Mettre à niveau"
          },
          "ja-JP": {
            singular: "アップグレード"
          },
          "ko-KR": {
            singular: "업그레이드"
          },
          "zh-CN": {
            singular: "升级"
          }
        }
      })
    });
    return "homepage" === _v0 ? (0, _v1.jsx)(_v3.AlertRoot, {
      className: _v4,
      backgroundColor: _v14,
      color: "black",
      borderRadius: "lg",
      padding: (0, _v9.rem)(32),
      gap: "md",
      alignItems: "center",
      children: (0, _v1.jsxs)(_v4.AlertDescription, {
        display: "flex",
        flexDirection: "column",
        gap: (0, _v9.rem)(16),
        width: "100%",
        alignItems: "center",
        textAlign: "center",
        children: [(0, _v1.jsx)(_v5.Box, {
          alignItems: "center",
          background: _v15,
          borderRadius: "md",
          color: "white",
          display: "flex",
          flexShrink: 0,
          height: (0, _v9.rem)(48),
          justifyContent: "center",
          width: (0, _v9.rem)(48),
          children: (0, _v1.jsx)(_v10.Database, {
            boxSize: (0, _v9.rem)(26)
          })
        }), (0, _v1.jsxs)(_v7.Flex, {
          direction: "column",
          gap: (0, _v9.rem)(8),
          alignItems: "center",
          maxWidth: (0, _v9.rem)(560),
          children: [(0, _v1.jsx)(_v8.Text, {
            variant: "heading-lg",
            color: "black",
            children: (0, _v11.translate)({
              singular: "You're over the storage limit",
              dictionary: {
                es: {
                  singular: "Ha superado el límite de almacenamiento"
                },
                "de-DE": {
                  singular: "Sie haben das Speicherlimit überschritten"
                },
                "fr-FR": {
                  singular: "Vous avez dépassé la limite de stockage"
                },
                "ja-JP": {
                  singular: "ストレージ上限を超えています"
                },
                "ko-KR": {
                  singular: "저장 용량 한도를 초과했습니다"
                },
                "pt-BR": {
                  singular: "Você excedeu o limite de armazenamento"
                },
                "zh-CN": {
                  singular: "您已超过存储限制"
                }
              }
            })
          }), (0, _v1.jsx)(_v8.Text, {
            variant: "body-sm",
            color: "black",
            children: (0, _v11.translate)({
              singular: "You've reached the storage limit on your current plan. Learn more or upgrade to {PLAN} for more storage.",
              replacements: {
                PLAN: _v3
              },
              dictionary: {
                es: {
                  singular: "Has alcanzado el límite de almacenamiento de tu plan actual. Obtén más información o actualiza a {PLAN} para disponer de más espacio de almacenamiento."
                },
                "de-DE": {
                  singular: "Sie haben das Speicherlimit Ihres aktuellen Tarifs erreicht. Erfahren Sie mehr oder wechseln Sie zu {PLAN}, um mehr Speicher zu erhalten."
                },
                "fr-FR": {
                  singular: "Vous avez atteint la limite de stockage de votre forfait actuel. En savoir plus ou passez à {PLAN} pour obtenir davantage d'espace de stockage."
                },
                "ja-JP": {
                  singular: "現在のプランで利用できるストレージ上限に達しました。詳細を確認するか、ストレージを増やすには{PLAN}にアップグレードしてください。"
                },
                "ko-KR": {
                  singular: "현재 이용 중인 요금제의 저장 용량 한도에 도달했습니다. 자세한 내용을 확인하거나 더 많은 저장 공간이 필요하면 {PLAN}으로 업그레이드하세요."
                },
                "pt-BR": {
                  singular: "Você atingiu o limite de armazenamento do seu plano atual. Saiba mais ou atualize para {PLAN} para obter mais armazenamento."
                },
                "zh-CN": {
                  singular: "您已达到当前套餐的存储上限。了解详情或升级到 {PLAN} 以获取更多存储空间。"
                }
              }
            })
          })]
        }), (0, _v1.jsxs)(_v7.Flex, {
          alignItems: "center",
          gap: "sm",
          justifyContent: "center",
          mt: (0, _v9.rem)(4),
          children: [(0, _v1.jsx)(_v6.Button, {
            variant: "secondary",
            size: "sm",
            onClick: () => {
              _v6({
                element: "view_videos"
              }), _v2?.();
            },
            children: (0, _v11.translate)({
              singular: "View videos",
              dictionary: {
                es: {
                  singular: "Ver videos"
                },
                "de-DE": {
                  singular: "Videos ansehen"
                },
                "fr-FR": {
                  singular: "Afficher les vidéos"
                },
                "ja-JP": {
                  singular: "動画を表示"
                },
                "ko-KR": {
                  singular: "동영상 보기"
                },
                "pt-BR": {
                  singular: "Ver vídeos"
                },
                "zh-CN": {
                  singular: "查看视频"
                }
              }
            })
          }), _v7]
        })]
      })
    }) : (0, _v1.jsx)(_v3.AlertRoot, {
      className: _v4,
      backgroundColor: _v14,
      color: "black",
      borderRadius: "lg",
      padding: (0, _v9.rem)(12),
      gap: "md",
      alignItems: "center",
      children: (0, _v1.jsxs)(_v4.AlertDescription, {
        display: "flex",
        flexDirection: {
          base: "column",
          md: "row"
        },
        gap: "md",
        width: "100%",
        alignItems: {
          base: "stretch",
          md: "center"
        },
        justifyContent: "space-between",
        children: [(0, _v1.jsxs)(_v7.Flex, {
          alignItems: "center",
          gap: "sm",
          flex: "1",
          minWidth: 0,
          children: [(0, _v1.jsx)(_v10.Database, {
            boxSize: (0, _v9.rem)(20),
            color: _v15
          }), (0, _v1.jsx)(_v8.Text, {
            color: "var(--text-primary, #0E1216)",
            fontFamily: "ABCRepro-Medium",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "140%",
            letterSpacing: "-0.42px",
            children: (0, _v11.translate)({
              singular: "You're over the storage limit. Some videos have been restricted.",
              dictionary: {
                es: {
                  singular: "Has superado el límite de almacenamiento. Algunos vídeos han sido restringidos."
                },
                "de-DE": {
                  singular: "Sie haben das Speicherlimit überschritten. Einige Videos wurden eingeschränkt."
                },
                "fr-FR": {
                  singular: "Vous avez dépassé la limite de stockage. Certaines vidéos ont été restreintes."
                },
                "ja-JP": {
                  singular: "ストレージ容量の上限を超えています。いくつかの動画の利用が制限されています。"
                },
                "ko-KR": {
                  singular: "저장 용량 한도를 초과했습니다. 일부 동영상의 접근이 제한되었습니다."
                },
                "pt-BR": {
                  singular: "Você excedeu o limite de armazenamento. Alguns vídeos foram restringidos."
                },
                "zh-CN": {
                  singular: "您已超出存储配额。部分视频已被限制。"
                }
              }
            })
          })]
        }), (0, _v1.jsxs)(_v7.Flex, {
          alignItems: "center",
          gap: "sm",
          flexShrink: 0,
          justifyContent: {
            base: "flex-end",
            md: "flex-start"
          },
          children: [(0, _v1.jsx)(_v6.Button, {
            variant: "secondary",
            size: "sm",
            onClick: () => {
              (_v6({
                element: "learn_more"
              }), _v1) ? _v1() : window.dispatchEvent(new Event("cold-storage-intro-modal:force-open"));
            },
            backgroundColor: "white",
            _hover: {
              backgroundColor: "white"
            },
            _active: {
              backgroundColor: "white"
            },
            children: (0, _v11.translate)({
              singular: "Learn more",
              dictionary: {
                es: {
                  singular: "Ver más"
                },
                "de-DE": {
                  singular: "Mehr dazu"
                },
                "fr-FR": {
                  singular: "En savoir plus "
                },
                "ja-JP": {
                  singular: "詳細を見る"
                },
                "ko-KR": {
                  singular: "자세히 보기"
                },
                "pt-BR": {
                  singular: "Saiba mais"
                },
                "zh-CN": {
                  singular: "了解更多"
                }
              }
            })
          }), _v7]
        })]
      })
    });
  }]);
}