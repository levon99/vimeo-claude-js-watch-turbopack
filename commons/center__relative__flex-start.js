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
  let _v14 = -10,
    _v15 = (0, _v5.rem)(17.23),
    _v16 = ({
      tileSize: _v0,
      clusterTiles: _v1,
      otherProductsCount: _v2,
      rotation: _v3 = _v14,
      tileOverlap: _v4,
      infoTooltip: _v5
    }) => {
      let _v6 = Math.abs(_v3) * Math.PI / 180,
        _v7 = _v0 * (Math.cos(_v6) + Math.sin(_v6)),
        _v8 = _v4 ?? `-${(0, _v5.rem)(.42 * _v0)}`,
        _v9 = {
          transform: `rotate(${_v3}deg)`
        };
      return (0, _v1.jsxs)(_v4.Flex, {
        alignItems: "center",
        flexShrink: 0,
        children: [_v1.map((_v0, _v1) => {
          let _v2 = _v1 === _v1.length - 1 && void 0 === _v2;
          return (0, _v1.jsx)(_v4.Flex, {
            width: (0, _v5.rem)(_v7),
            height: (0, _v5.rem)(_v7),
            marginRight: _v2 ? void 0 : _v8,
            zIndex: _v1,
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            children: (0, _v1.jsx)(_v3.Box, {
              width: (0, _v5.rem)(_v0),
              height: (0, _v5.rem)(_v0),
              sx: _v9,
              children: (0, _v1.jsx)(_v13.ProductTileView, {
                productId: _v0.productId,
                size: _v0
              })
            })
          }, _v0.productId);
        }), void 0 !== _v2 && (0, _v1.jsx)(_v4.Flex, {
          width: (0, _v5.rem)(_v7),
          height: (0, _v5.rem)(_v7),
          zIndex: _v1.length,
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          children: (0, _v1.jsx)(_v4.Flex, {
            sx: _v9,
            children: (0, _v1.jsx)(_v12.CounterTile, {
              size: _v0,
              count: _v2
            })
          })
        }), void 0 !== _v5 && (0, _v1.jsx)(_v3.Box, {
          alignSelf: "flex-start",
          flexShrink: 0,
          children: (0, _v1.jsx)(_v10.Tooltip, {
            label: _v5,
            placement: "top",
            hasArrow: !0,
            shouldWrapChildren: !0,
            children: (0, _v1.jsx)(_v11.InfoCircle, {
              color: "text-primary",
              width: _v15,
              height: _v15,
              marginRight: `-${(0, _v5.rem)(.0587 * _v0)}`
            })
          })
        })]
      });
    };
  _v0.s(["TiltedTileCluster", 0, _v16], 0), _v0.s(["BundlePlanCardStrip", 0, ({
    bundleType: _v0,
    isVisible: _v1,
    price: _v2
  }) => {
    let _v3 = (0, _v8.getBundleActivationCluster)(_v0);
    return (0, _v1.jsx)(_v3.Box, {
      width: "100%",
      height: _v1 ? (0, _v5.rem)(40) : 0,
      opacity: +!!_v1,
      overflow: "hidden",
      transform: _v1 ? "translateY(0)" : `translateY(${(0, _v5.rem)(-8)})`,
      transition: "height 320ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease, transform 320ms cubic-bezier(0.22, 1, 0.36, 1)",
      sx: {
        "@media (prefers-reduced-motion: reduce)": {
          transitionDuration: "1ms"
        }
      },
      "aria-hidden": !_v1,
      children: (0, _v1.jsxs)(_v4.Flex, {
        width: "100%",
        height: (0, _v5.rem)(40),
        background: _v7.BUNDLE_SURFACE_BACKGROUND,
        border: _v7.BUNDLE_SURFACE_BORDER,
        borderRadius: (0, _v5.rem)(8),
        paddingX: (0, _v5.rem)(8),
        alignItems: "center",
        justifyContent: "space-between",
        gap: (0, _v5.rem)(8),
        children: [(0, _v1.jsx)(_v16, {
          tileSize: 24,
          clusterTiles: _v3.clusterTiles,
          infoTooltip: void 0
        }), (0, _v1.jsxs)(_v2.Badge, {
          variant: "info",
          size: "sm",
          gap: "4px",
          flexShrink: 0,
          children: [(0, _v1.jsx)(_v6.Gift, {
            boxSize: "12px"
          }), (0, _v9.getBundlePriceBadgeLabel)(_v2)]
        })]
      })
    });
  }], 0);
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = _v0 => (0, _v1.jsx)(_v20.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M19.088 4.955c-.007-.008-.01-.019-.017-.026-.008-.008-.018-.01-.026-.018a9.979 9.979 0 0 0-14.09 0c-.008.008-.018.01-.026.018-.007.007-.01.018-.017.026a10 10 0 1 0 14.176 0ZM12 20a7.983 7.983 0 0 1-6.235-3H9.78a2.963 2.963 0 0 0 4.44 0h4.015A7.985 7.985 0 0 1 12 20Zm-1-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm8.41.002L19.4 15H15a2.995 2.995 0 0 0-2-2.816V9a1 1 0 0 0-2 0v3.184A2.995 2.995 0 0 0 9 15H4.6l-.01.002A7.931 7.931 0 0 1 4.07 13H5a1 1 0 0 0 0-2h-.93a7.951 7.951 0 0 1 1.618-3.898l.655.655a1 1 0 0 0 1.414-1.414l-.654-.655A7.952 7.952 0 0 1 11 4.07V5a1 1 0 1 0 2 0v-.93a7.952 7.952 0 0 1 3.897 1.618l-.654.655a1 1 0 0 0 1.414 1.414l.654-.655A7.951 7.951 0 0 1 19.931 11H19a1 1 0 0 0 0 2h.93a7.932 7.932 0 0 1-.52 2.002Z",
      fill: "currentColor"
    })
  });
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  _v0.s(["default", 0, ({
    planData: _v0
  }) => {
    var _v1;
    let {
        entitlements: _v2,
        isBandwidthProduct: _v3
      } = _v0?.metadata,
      {
        teamSeats: _v4,
        videoStoragePeriodicQuota: _v5,
        videoStorageQuotaUnit: _v6,
        bandwidth: _v7
      } = _v2?.params,
      {
        isFlatRateData: _v8,
        isSolutionData: _v9,
        isRepackagingData: _v10,
        usageCheckData: _v11
      } = (0, _v17.useContext)(_v29.PlansDataContext),
      {
        compact: _v12
      } = (0, _v17.useContext)(_v28.OverridesContext),
      _v13 = _v0 => {
        switch (_v0) {
          case "free":
          default:
            return (0, _v27.translate)({
              singular: "{AMOUNT} user",
              plural: "{AMOUNT} users",
              count: _v4 ?? 0,
              replacements: {
                AMOUNT: _v4
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} usuario",
                  plural: "{AMOUNT} usuarios"
                },
                "de-DE": {
                  singular: "{AMOUNT} Nutzer",
                  plural: "{AMOUNT} Nutzer"
                },
                "fr-FR": {
                  singular: "{AMOUNT} utilisateur",
                  plural: "{AMOUNT} utilisateurs"
                },
                "ja-JP": {
                  singular: "{AMOUNT}ユーザー",
                  plural: "{AMOUNT}ユーザー"
                },
                "ko-KR": {
                  singular: "{AMOUNT} 사용자",
                  plural: "{AMOUNT} 사용자"
                },
                "pt-BR": {
                  singular: "{AMOUNT} usuário",
                  plural: "{AMOUNT} usuários"
                },
                "zh-CN": {
                  singular: "{AMOUNT} 用户",
                  plural: "{AMOUNT} 用户"
                }
              }
            });
          case "enterprise":
            return (0, _v27.translate)({
              singular: "More users",
              dictionary: {
                es: {
                  singular: "Más usuarios"
                },
                "de-DE": {
                  singular: "Mehr Benutzer"
                },
                "fr-FR": {
                  singular: "Plus d'utilisateurs"
                },
                "ja-JP": {
                  singular: "より多くのユーザー"
                },
                "ko-KR": {
                  singular: "더 많은 사용자 추가"
                },
                "pt-BR": {
                  singular: "Mais usuários"
                },
                "zh-CN": {
                  singular: "更多用户"
                }
              }
            });
          case "customSelfServe":
            return (0, _v27.translate)({
              singular: "{AMOUNT} user included",
              plural: "{AMOUNT} users included",
              count: _v4 ?? 0,
              replacements: {
                AMOUNT: _v4
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} usuario incluido",
                  plural: "{AMOUNT} usuarios incluidos"
                },
                "de-DE": {
                  singular: "{AMOUNT} Benutzer eingeschlossen",
                  plural: "{AMOUNT} Benutzer eingeschlossen"
                },
                "fr-FR": {
                  singular: "{AMOUNT} utilisateur inclus",
                  plural: "{AMOUNT} utilisateurs inclus"
                },
                "ja-JP": {
                  singular: "{AMOUNT}人のユーザーが含まれます",
                  plural: "{AMOUNT}人のユーザーが含まれます"
                },
                "ko-KR": {
                  singular: "사용자 {AMOUNT}명 포함",
                  plural: "사용자 {AMOUNT}명 포함"
                },
                "pt-BR": {
                  singular: "{AMOUNT} usuário incluído",
                  plural: "{AMOUNT} usuários incluídos"
                },
                "zh-CN": {
                  singular: "包括 {AMOUNT} 位用户",
                  plural: "包括 {AMOUNT} 位用户"
                }
              }
            });
        }
      },
      _v14 = _v17.default.forwardRef(({
        children: _v0,
        ..._v1
      }, _v2) => (0, _v1.jsx)(_v3.Box, {
        ref: _v2,
        marginBottom: 3,
        marginTop: 3,
        display: "flex",
        position: "relative",
        alignItems: "center",
        width: "100%",
        ..._v1,
        children: _v0
      })),
      _v15 = _v0 => (0, _v1.jsx)(_v18.Text, {
        variant: _v12 ? "body-md" : "body-lg",
        marginLeft: (0, _v5.rem)(4),
        ..._v0,
        children: _v0.children
      });
    if (_v10) {
      let _v0 = _v0?.tier,
        _v1 = _v11?.[_v0];
      return (0, _v1.jsxs)(_v3.Box, {
        borderTop: "1px solid var(--vimeo-colors-stroke) !important",
        borderBottom: "1px solid var(--vimeo-colors-stroke) !important",
        padding: _v12 ? `${(0, _v5.rem)(6)} 0` : `${(0, _v5.rem)(10)} 0`,
        position: "relative",
        alignItems: "center",
        marginBottom: _v12 ? 8 : 20,
        children: [(0, _v1.jsxs)(_v14, {
          children: [(_v4 ?? 0) === 1 ? (0, _v1.jsx)(_v26.PersonUser, {}) : (0, _v1.jsx)(_v25.Users, {}), (0, _v1.jsx)(_v15, {
            children: "enterprise" === _v0 ? (0, _v27.translate)({
              singular: "More users",
              dictionary: {
                es: {
                  singular: "Más usuarios"
                },
                "de-DE": {
                  singular: "Mehr Benutzer"
                },
                "fr-FR": {
                  singular: "Plus d'utilisateurs"
                },
                "ja-JP": {
                  singular: "より多くのユーザー"
                },
                "ko-KR": {
                  singular: "더 많은 사용자 추가"
                },
                "pt-BR": {
                  singular: "Mais usuários"
                },
                "zh-CN": {
                  singular: "更多用户"
                }
              }
            }) : "core" === _v0 ? (0, _v27.translate)({
              singular: "{AMOUNT} user (up to {ADD_USERS})",
              plural: "{AMOUNT} users (up to {ADD_USERS})",
              count: _v4 ?? 0,
              replacements: {
                AMOUNT: _v4,
                ADD_USERS: 3
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} usuario (hasta {ADD_USERS})",
                  plural: "{AMOUNT} usuarios (hasta {ADD_USERS})"
                },
                "de-DE": {
                  singular: "{AMOUNT} Benutzer (bis zu {ADD_USERS})",
                  plural: "{AMOUNT} Benutzer (bis zu {ADD_USERS})"
                },
                "fr-FR": {
                  singular: "{AMOUNT} utilisateur (jusqu'à {ADD_USERS})",
                  plural: "{AMOUNT} utilisateurs (jusqu'à {ADD_USERS})"
                },
                "ja-JP": {
                  singular: "{AMOUNT} ユーザー (最大 {ADD_USERS} 名まで)",
                  plural: "{AMOUNT} ユーザー (最大 {ADD_USERS} 名まで)"
                },
                "ko-KR": {
                  singular: "{AMOUNT}명 사용자 (최대 {ADD_USERS}명)",
                  plural: "{AMOUNT}명 사용자 (최대 {ADD_USERS}명)"
                },
                "pt-BR": {
                  singular: "{AMOUNT} usuário (até {ADD_USERS})",
                  plural: "{AMOUNT} usuários (até {ADD_USERS})"
                },
                "zh-CN": {
                  singular: "{AMOUNT} 位用户 (最多 {ADD_USERS})",
                  plural: "{AMOUNT} 位用户 (最多 {ADD_USERS})"
                }
              }
            }) : "professional" === _v0 ? (0, _v27.translate)({
              singular: "{AMOUNT} users (up to {ADD_USERS})",
              replacements: {
                AMOUNT: _v4,
                ADD_USERS: 20
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} usuarios (hasta {ADD_USERS})"
                },
                "de-DE": {
                  singular: "{AMOUNT} Nutzer (bis zu {ADD_USERS})"
                },
                "fr-FR": {
                  singular: "{AMOUNT} utilisateurs (jusqu'à {ADD_USERS})"
                },
                "ja-JP": {
                  singular: "{AMOUNT}ユーザー（最大{ADD_USERS}まで）"
                },
                "ko-KR": {
                  singular: "{AMOUNT} 사용자({ADD_USERS}까지)"
                },
                "pt-BR": {
                  singular: "{AMOUNT} usuários (até {ADD_USERS})"
                },
                "zh-CN": {
                  singular: "{AMOUNT} 用户 (最多 {ADD_USERS})"
                }
              }
            }) : "studio" === _v0 ? (0, _v27.translate)({
              singular: "{AMOUNT} users (up to {ADD_USERS})",
              replacements: {
                AMOUNT: _v4,
                ADD_USERS: 200
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} usuarios (hasta {ADD_USERS})"
                },
                "de-DE": {
                  singular: "{AMOUNT} Nutzer (bis zu {ADD_USERS})"
                },
                "fr-FR": {
                  singular: "{AMOUNT} utilisateurs (jusqu'à {ADD_USERS})"
                },
                "ja-JP": {
                  singular: "{AMOUNT}ユーザー（最大{ADD_USERS}まで）"
                },
                "ko-KR": {
                  singular: "{AMOUNT} 사용자({ADD_USERS}까지)"
                },
                "pt-BR": {
                  singular: "{AMOUNT} usuários (até {ADD_USERS})"
                },
                "zh-CN": {
                  singular: "{AMOUNT} 用户 (最多 {ADD_USERS})"
                }
              }
            }) : "production" === _v0 ? (0, _v27.translate)({
              singular: "{AMOUNT} users (up to {ADD_USERS})",
              replacements: {
                AMOUNT: _v4,
                ADD_USERS: (0, _v27.translate)({
                  singular: "Unlimited",
                  dictionary: {
                    es: {
                      singular: "Ilimitado"
                    },
                    "de-DE": {
                      singular: "Unbegrenzt"
                    },
                    "fr-FR": {
                      singular: "Illimité"
                    },
                    "ja-JP": {
                      singular: "無制限"
                    },
                    "ko-KR": {
                      singular: "무제한"
                    },
                    "pt-BR": {
                      singular: "Ilimitado"
                    },
                    "zh-CN": {
                      singular: "无限"
                    }
                  }
                })
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} usuarios (hasta {ADD_USERS})"
                },
                "de-DE": {
                  singular: "{AMOUNT} Nutzer (bis zu {ADD_USERS})"
                },
                "fr-FR": {
                  singular: "{AMOUNT} utilisateurs (jusqu'à {ADD_USERS})"
                },
                "ja-JP": {
                  singular: "{AMOUNT}ユーザー（最大{ADD_USERS}まで）"
                },
                "ko-KR": {
                  singular: "{AMOUNT} 사용자({ADD_USERS}까지)"
                },
                "pt-BR": {
                  singular: "{AMOUNT} usuários (até {ADD_USERS})"
                },
                "zh-CN": {
                  singular: "{AMOUNT} 用户 (最多 {ADD_USERS})"
                }
              }
            }) : (0, _v27.translate)({
              singular: "{AMOUNT} user",
              plural: "{AMOUNT} users",
              count: _v4 ?? 0,
              replacements: {
                AMOUNT: _v4
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} usuario",
                  plural: "{AMOUNT} usuarios"
                },
                "de-DE": {
                  singular: "{AMOUNT} Nutzer",
                  plural: "{AMOUNT} Nutzer"
                },
                "fr-FR": {
                  singular: "{AMOUNT} utilisateur",
                  plural: "{AMOUNT} utilisateurs"
                },
                "ja-JP": {
                  singular: "{AMOUNT}ユーザー",
                  plural: "{AMOUNT}ユーザー"
                },
                "ko-KR": {
                  singular: "{AMOUNT} 사용자",
                  plural: "{AMOUNT} 사용자"
                },
                "pt-BR": {
                  singular: "{AMOUNT} usuário",
                  plural: "{AMOUNT} usuários"
                },
                "zh-CN": {
                  singular: "{AMOUNT} 用户",
                  plural: "{AMOUNT} 用户"
                }
              }
            })
          })]
        }), _v1?.seats?.over && (0, _v1.jsxs)(_v3.Box, {
          display: "flex",
          gap: (0, _v5.rem)(8),
          alignItems: "flex-start",
          background: "var(--vimeo-colors-status-caution-secondary, #feebcb)",
          borderRadius: (0, _v5.rem)(8),
          paddingLeft: (0, _v5.rem)(12),
          paddingRight: (0, _v5.rem)(8),
          paddingY: (0, _v5.rem)(8),
          width: "100%",
          marginBottom: (0, _v5.rem)(4),
          children: [(0, _v1.jsx)(_v3.Box, {
            paddingY: (0, _v5.rem)(2),
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            children: (0, _v1.jsx)(_v19.CircleExclamationFilled, {
              boxSize: (0, _v5.rem)(20),
              color: "status-caution-primary"
            })
          }), (0, _v1.jsx)(_v18.Text, {
            variant: "body-sm",
            children: (0, _v27.translate)({
              singular: "You currently have {COUNT} seats on your account. They will be removed upon downgrade.",
              replacements: {
                COUNT: _v1.seats.used
              },
              dictionary: {
                es: {
                  singular: "Actualmente tiene {COUNT} licencias en su cuenta. Se eliminarán al degradar el plan."
                },
                "de-DE": {
                  singular: "Sie haben derzeit {COUNT} Plätze in Ihrem Konto. Diese werden bei einer Herabstufung entfernt."
                },
                "fr-FR": {
                  singular: "Vous avez actuellement {COUNT} sièges sur votre compte. Ils seront supprimés lors de la rétrogradation."
                },
                "ja-JP": {
                  singular: "現在、アカウントには{COUNT}シートがあります。ダウングレード時に削除されます。"
                },
                "ko-KR": {
                  singular: "현재 계정에 {COUNT}개의 좌석이 있습니다. 다운그레이드 시 해당 좌석은 제거됩니다."
                },
                "pt-BR": {
                  singular: "Atualmente você tem {COUNT} assentos em sua conta. Eles serão removidos ao rebaixar o plano."
                },
                "zh-CN": {
                  singular: "您的账户当前有 {COUNT} 个席位。降级时它们将被移除。"
                }
              }
            })
          })]
        }), (0, _v1.jsxs)(_v14, {
          children: [(0, _v1.jsx)(_v24.Database, {}), (0, _v1.jsx)(_v15, {
            children: (_v0 => {
              if ("enterprise" === _v0) return (0, _v27.translate)({
                singular: "Unlimited storage",
                dictionary: {
                  es: {
                    singular: "Almacenamiento ilimitado"
                  },
                  "de-DE": {
                    singular: "Unbegrenzter Speicher"
                  },
                  "fr-FR": {
                    singular: "Stockage illimité"
                  },
                  "ja-JP": {
                    singular: "無制限のストレージ"
                  },
                  "ko-KR": {
                    singular: "무제한 저장 용량"
                  },
                  "pt-BR": {
                    singular: "Armazenamento ilimitado"
                  },
                  "zh-CN": {
                    singular: "无限存储"
                  }
                }
              });
              let _v1 = _v2?.params?.restrictedVideoStorageLimit;
              return (0, _v27.translate)({
                singular: "{AMOUNT} managed storage for embeddable and non-Public videos",
                replacements: {
                  AMOUNT: _v1 ?? ""
                },
                dictionary: {
                  es: {
                    singular: "{AMOUNT} de almacenamiento gestionado para vídeos incrustables y no públicos"
                  },
                  "de-DE": {
                    singular: "{AMOUNT} verwalteter Speicher für einbettbare und nicht-öffentliche Videos"
                  },
                  "fr-FR": {
                    singular: "{AMOUNT} de stockage géré pour les vidéos intégrables et non publiques"
                  },
                  "ja-JP": {
                    singular: "{AMOUNT}の埋め込み可能および非公開動画向け管理ストレージ"
                  },
                  "ko-KR": {
                    singular: "{AMOUNT} 임베드 가능 및 비공개 동영상용 관리형 저장공간"
                  },
                  "pt-BR": {
                    singular: "{AMOUNT} de armazenamento gerenciado para vídeos incorporáveis e não públicos"
                  },
                  "zh-CN": {
                    singular: "{AMOUNT} 托管存储，用于可嵌入和非公开视频"
                  }
                }
              });
            })(_v0)
          })]
        }), _v1?.restrictedVideoStorage?.over && (0, _v1.jsxs)(_v3.Box, {
          display: "flex",
          gap: (0, _v5.rem)(8),
          alignItems: "flex-start",
          background: "var(--vimeo-colors-status-caution-secondary, #feebcb)",
          borderRadius: (0, _v5.rem)(8),
          paddingLeft: (0, _v5.rem)(12),
          paddingRight: (0, _v5.rem)(8),
          paddingY: (0, _v5.rem)(8),
          width: "100%",
          marginBottom: (0, _v5.rem)(4),
          children: [(0, _v1.jsx)(_v3.Box, {
            paddingY: (0, _v5.rem)(2),
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            children: (0, _v1.jsx)(_v19.CircleExclamationFilled, {
              boxSize: (0, _v5.rem)(20),
              color: "status-caution-primary"
            })
          }), (0, _v1.jsx)(_v18.Text, {
            variant: "body-sm",
            children: (0, _v27.translate)({
              singular: "You are already above the limit for this plan. Your videos are going to be frozen.",
              dictionary: {
                es: {
                  singular: "Ya supera el límite de este plan. Sus videos quedarán congelados."
                },
                "de-DE": {
                  singular: "Sie haben das Limit dieses Plans bereits überschritten. Ihre Videos werden eingefroren."
                },
                "fr-FR": {
                  singular: "Vous dépassez déjà la limite de ce plan. Vos vidéos seront suspendues."
                },
                "ja-JP": {
                  singular: "このプランの上限をすでに超えています。動画が凍結されます。"
                },
                "ko-KR": {
                  singular: "이미 이 요금제의 제한을 초과했습니다. 동영상이 일시 중지될 예정입니다."
                },
                "pt-BR": {
                  singular: "Você já ultrapassou o limite deste plano. Seus vídeos serão congelados."
                },
                "zh-CN": {
                  singular: "您已超出此计划的限制。您的视频将被冻结。"
                }
              }
            })
          })]
        }), ("free" === _v0 || "creator" === _v0) && (0, _v1.jsxs)(_v14, {
          children: [(0, _v1.jsx)(_v24.Database, {}), (0, _v1.jsx)(_v15, {
            children: "enterprise" === _v0 ? (0, _v27.translate)({
              singular: "Custom storage",
              dictionary: {
                es: {
                  singular: "Personalizar almacenamiento"
                },
                "de-DE": {
                  singular: "Benutzerdefinierter Speicher"
                },
                "fr-FR": {
                  singular: "Stockage personnalisé"
                },
                "ja-JP": {
                  singular: "カスタムストレージ"
                },
                "ko-KR": {
                  singular: "커스텀 저장 공간"
                },
                "pt-BR": {
                  singular: "Armazenamento personalizado"
                },
                "zh-CN": {
                  singular: "自定义存储"
                }
              }
            }) : (0, _v27.translate)({
              singular: "{AMOUNT} total storage (including public, non-embedded videos)",
              replacements: {
                AMOUNT: _v5 ?? ""
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} de almacenamiento total (incluye vídeos públicos no incrustados)"
                },
                "de-DE": {
                  singular: "{AMOUNT} Gesamtspeicher (einschließlich öffentlicher, nicht eingebetteter Videos)"
                },
                "fr-FR": {
                  singular: "{AMOUNT} de stockage total (y compris les vidéos publiques, non intégrées)"
                },
                "ja-JP": {
                  singular: "{AMOUNT}の合計ストレージ（公開、埋め込みされていない動画を含む）"
                },
                "ko-KR": {
                  singular: "{AMOUNT} 총 저장 공간(공개 및 비임베드 동영상 포함)"
                },
                "pt-BR": {
                  singular: "{AMOUNT} de armazenamento total (inclui vídeos públicos, não incorporados)"
                },
                "zh-CN": {
                  singular: "{AMOUNT} 总存储 (包括公开、非嵌入视频)"
                }
              }
            })
          })]
        }), "enterprise" !== _v0 && (0, _v1.jsxs)(_v14, {
          children: [(0, _v1.jsx)(_v22.Speedometer, {}), (0, _v1.jsx)(_v15, {
            children: _v7?.quotaPeriod === "year" ? (0, _v27.translate)({
              singular: "{AMOUNT} yearly bandwidth",
              replacements: {
                AMOUNT: _v7.periodicQuota ?? ""
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} de ancho de banda anual"
                },
                "de-DE": {
                  singular: "{AMOUNT} Bandbreite pro Jahr"
                },
                "fr-FR": {
                  singular: "{AMOUNT} de bande passante annuelle"
                },
                "ja-JP": {
                  singular: "{AMOUNT} の年間帯域幅"
                },
                "ko-KR": {
                  singular: "{AMOUNT} 연간 대역폭"
                },
                "pt-BR": {
                  singular: "{AMOUNT} de largura de banda anual"
                },
                "zh-CN": {
                  singular: "{AMOUNT} 年带宽"
                }
              }
            }) : (0, _v27.translate)({
              singular: "{AMOUNT} monthly bandwidth",
              replacements: {
                AMOUNT: _v7?.periodicQuota ?? ""
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} de ancho de banda mensual"
                },
                "de-DE": {
                  singular: "{AMOUNT} monatliche Bandbreite"
                },
                "fr-FR": {
                  singular: "{AMOUNT} de bande passante mensuelle"
                },
                "ja-JP": {
                  singular: "{AMOUNT}の月間帯域幅"
                },
                "ko-KR": {
                  singular: "{AMOUNT} 월간 대역폭"
                },
                "pt-BR": {
                  singular: "{AMOUNT} de largura de banda mensal"
                },
                "zh-CN": {
                  singular: "{AMOUNT} 每月带宽"
                }
              }
            })
          })]
        })]
      });
    }
    return (0, _v1.jsxs)(_v3.Box, {
      borderTop: "1px solid #1A365D14 !important",
      borderBottom: "1px solid #1A365D14 !important",
      padding: `${(0, _v5.rem)(10)} 0`,
      position: "relative",
      alignItems: "center",
      marginBottom: 20,
      children: [_v0?.tier === "customSelfServe" && (0, _v1.jsxs)(_v14, {
        children: [(0, _v1.jsx)(_v21, {}), (0, _v1.jsx)(_v15, {
          children: (0, _v27.translate)({
            singular: "{AMOUNT} bandwidth per year",
            replacements: {
              AMOUNT: _v2.params.bandwidth.periodicQuota ?? 0
            },
            dictionary: {
              es: {
                singular: "{AMOUNT} de ancho de banda al año"
              },
              "de-DE": {
                singular: "{AMOUNT} Bandbreite pro Jahr"
              },
              "fr-FR": {
                singular: "{AMOUNT} bande passante par an"
              },
              "ja-JP": {
                singular: "年間帯域幅 {AMOUNT}"
              },
              "ko-KR": {
                singular: "연간 {AMOUNT}대역폭"
              },
              "pt-BR": {
                singular: "{AMOUNT} de largura de banda por ano"
              },
              "zh-CN": {
                singular: "每年 {AMOUNT} 带宽"
              }
            }
          })
        })]
      }), !_v8 && (_v0?.tier === "free" || _v0?.tier === "enterprise" || _v9 ? (0, _v1.jsxs)(_v14, {
        children: [(_v4 ?? 0) === 1 ? (0, _v1.jsx)(_v26.PersonUser, {}) : (0, _v1.jsx)(_v25.Users, {}), (0, _v1.jsx)(_v15, {
          children: _v13(_v0?.tier)
        })]
      }) : (0, _v1.jsxs)(_v14, {
        children: [(0, _v1.jsx)(_v25.Users, {}), (0, _v1.jsx)(_v15, {
          marginLeft: (0, _v5.rem)(4),
          children: _v13(_v0?.tier)
        })]
      })), (0, _v1.jsxs)(_v14, {
        children: ["video_count" === _v6 ? (0, _v1.jsx)(_v23.VideosStack, {}) : (0, _v1.jsx)(_v24.Database, {}), (0, _v1.jsx)(_v15, {
          children: (_v1 = _v0?.tier, "enterprise" === _v1 ? _v3 ? (0, _v27.translate)({
            singular: "More storage",
            dictionary: {
              es: {
                singular: "Más almacenamiento"
              },
              "de-DE": {
                singular: "Mehr Speicherplatz"
              },
              "fr-FR": {
                singular: "Plus d'espace de stockage"
              },
              "ja-JP": {
                singular: "さらに増えたストレージ"
              },
              "ko-KR": {
                singular: "더 많은 저장 공간"
              },
              "pt-BR": {
                singular: "Mais espaço para armazenamento"
              },
              "zh-CN": {
                singular: "更多存储"
              }
            }
          }) : (0, _v27.translate)({
            singular: "More storage and bandwidth",
            dictionary: {
              es: {
                singular: "Más almacenamiento y ancho de banda"
              },
              "de-DE": {
                singular: "Mehr Speicher und Bandbreite"
              },
              "fr-FR": {
                singular: "Plus de stockage et de bande passante"
              },
              "ja-JP": {
                singular: "より多くのストレージと帯域幅"
              },
              "ko-KR": {
                singular: "저장 공간과 대역폭 확대"
              },
              "pt-BR": {
                singular: "Mais espaço de armazenamento e largura de banda"
              },
              "zh-CN": {
                singular: "更多存储空间和带宽"
              }
            }
          }) : "video_count" === _v6 ? (0, _v27.translate)({
            singular: "{AMOUNT} videos",
            replacements: {
              AMOUNT: _v5
            },
            dictionary: {
              "de-DE": {
                singular: "{AMOUNT} Videos"
              },
              "fr-FR": {
                singular: "{AMOUNT} vidéos"
              },
              "ja-JP": {
                singular: "{AMOUNT}件の動画"
              },
              "ko-KR": {
                singular: "동영상 {AMOUNT}개"
              },
              "pt-BR": {
                singular: "{AMOUNT} vídeos"
              },
              "zh-CN": {
                singular: "{AMOUNT} 个视频"
              }
            }
          }) : (0, _v27.translate)({
            singular: "{AMOUNT} storage",
            replacements: {
              AMOUNT: _v5
            },
            dictionary: {
              es: {
                singular: "{AMOUNT} de almacenamiento"
              },
              "de-DE": {
                singular: "{AMOUNT} Speicherplatz"
              },
              "fr-FR": {
                singular: "{AMOUNT} de stockage"
              },
              "ja-JP": {
                singular: "{AMOUNT}のストレージ"
              },
              "ko-KR": {
                singular: "총 저장 공간 {AMOUNT}"
              },
              "pt-BR": {
                singular: "{AMOUNT} de armazenamento"
              },
              "zh-CN": {
                singular: "{AMOUNT} 存储空间"
              }
            }
          }))
        })]
      }), (_v9 || _v3) && (0, _v1.jsxs)(_v14, {
        children: [(0, _v1.jsx)(_v22.Speedometer, {}), (0, _v1.jsx)(_v15, {
          children: "enterprise" === _v0?.tier ? (0, _v27.translate)({
            singular: "More bandwidth",
            dictionary: {
              es: {
                singular: "Más ancho de banda"
              },
              "de-DE": {
                singular: "Mehr Bandbreite"
              },
              "fr-FR": {
                singular: "Plus de bande passante"
              },
              "ja-JP": {
                singular: "帯域幅がさらにアップ"
              },
              "ko-KR": {
                singular: "더 많은 대역폭"
              },
              "pt-BR": {
                singular: "Mais largura de banda"
              },
              "zh-CN": {
                singular: "更多带宽"
              }
            }
          }) : (0, _v27.translate)({
            singular: "{AMOUNT} bandwidth per year",
            replacements: {
              AMOUNT: _v7.periodicQuota ?? 0
            },
            dictionary: {
              es: {
                singular: "{AMOUNT} de ancho de banda al año"
              },
              "de-DE": {
                singular: "{AMOUNT} Bandbreite pro Jahr"
              },
              "fr-FR": {
                singular: "{AMOUNT} bande passante par an"
              },
              "ja-JP": {
                singular: "年間帯域幅 {AMOUNT}"
              },
              "ko-KR": {
                singular: "연간 {AMOUNT}대역폭"
              },
              "pt-BR": {
                singular: "{AMOUNT} de largura de banda por ano"
              },
              "zh-CN": {
                singular: "每年 {AMOUNT} 带宽"
              }
            }
          })
        })]
      })]
    });
  }], 0);
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  _v32.default.div.withConfig({
    displayName: "styles__FeatureSubhead",
    componentId: "sc-dc427937-0"
  })`
  margin-bottom: ${_v0 => _v0?.bottomSpacing || (0, _v31.rem)(12)};
  line-height: ${(0, _v31.rem)(18)};

  p {
    font-weight: 900;
  }
`;
  let _v36 = _v32.default.ul.withConfig({
    displayName: "styles__FeatureList",
    componentId: "sc-dc427937-1"
  })`
  list-style: initial;

  li {
    margin-bottom: ${_v0 => _v0.$compact ? (0, _v31.rem)(12) : (0, _v31.rem)(8)};
    position: relative;
    @media (width > ${_v34.breakpoints.TABLET}) {
      margin-bottom: ${_v0 => (_v0.$compact, (0, _v31.rem)(12))};
    }
  }

  > li {
    align-items: baseline;
    display: flex;
    line-height: ${_v0 => _v0.$compact ? (0, _v31.rem)(20) : (0, _v31.rem)(24)};
    @media (width > ${_v34.breakpoints.TABLET}) {
      &:last-child {
        padding-bottom: ${_v0 => _v0.$compact ? "0" : (0, _v31.rem)(48)} !important;
        margin-bottom: 0;
      }
    }
  }

  @media (width > ${_v34.breakpoints.TABLET}) {
    margin-bottom: ${_v0 => _v0.$compact ? "0" : (0, _v31.rem)(19)};
  }
`;
  (0, _v32.default)(_v33.Checkmark).withConfig({
    displayName: "styles__FeatureCheck",
    componentId: "sc-dc427937-2"
  })`
  ${(0, _v35.addWidth)(18, 24)};
  position: absolute;
  left: 0;
`;
  let _v37 = (0, _v32.default)(_v33.Checkmark).withConfig({
    displayName: "styles__StyledCheckmark",
    componentId: "sc-dc427937-3"
  })`
  margin-right: ${(0, _v31.rem)(4)};
  max-width: ${(0, _v31.rem)(16)};
  position: relative;
  width: 100%;
  top: ${(0, _v31.rem)(2)};

  @media (width > ${_v34.breakpoints.TABLET}) {
    margin-right: ${(0, _v31.rem)(8)};
  }
  path {
    fill: var(--vimeo-colors-text-primary);
  }
`;
  _v0.s(["FeatureList", 0, _v36, "StyledCheckmark", 0, _v37], 0);
  let _v38 = {
      free: [(0, _v27.translate)({
        singular: "Creation and editing",
        dictionary: {
          es: {
            singular: "Creación y edición"
          },
          "de-DE": {
            singular: "Erstellung und Bearbeitung"
          },
          "fr-FR": {
            singular: "Création et édition"
          },
          "ja-JP": {
            singular: "作成と編集"
          },
          "ko-KR": {
            singular: "제작 및 편집"
          },
          "pt-BR": {
            singular: "Criação e edição"
          },
          "zh-CN": {
            singular: "创建与编辑"
          }
        }
      }), (0, _v27.translate)({
        singular: "Screen recording",
        dictionary: {
          es: {
            singular: "Grabación de pantalla"
          },
          "de-DE": {
            singular: "Bildschirmaufnahme"
          },
          "fr-FR": {
            singular: "Enregistrement d'écran"
          },
          "ja-JP": {
            singular: "画面録画"
          },
          "ko-KR": {
            singular: "화면 녹화"
          },
          "pt-BR": {
            singular: "Gravação de tela"
          },
          "zh-CN": {
            singular: "屏幕录制"
          }
        }
      }), (0, _v27.translate)({
        singular: "Sharing and embedding",
        dictionary: {
          es: {
            singular: "Compartir e incrustar"
          },
          "de-DE": {
            singular: "Teilen und Einbetten"
          },
          "fr-FR": {
            singular: "Partage et intégration"
          },
          "ja-JP": {
            singular: "共有と埋め込み"
          },
          "ko-KR": {
            singular: "공유 및 임베드"
          },
          "pt-BR": {
            singular: "Compartilhamento e incorporação"
          },
          "zh-CN": {
            singular: "分享与嵌入"
          }
        }
      })],
      starter: [(0, _v27.translate)({
        singular: "Customizable video player",
        dictionary: {
          es: {
            singular: "Reproductor de video personalizable"
          },
          "de-DE": {
            singular: "Individuell anpassbarer Video-Player "
          },
          "fr-FR": {
            singular: "Player vidéo personnalisable"
          },
          "ja-JP": {
            singular: "カスタマイズ可能な動画プレーヤー"
          },
          "ko-KR": {
            singular: "사용자 지정 가능한 동영상 플레이어"
          },
          "pt-BR": {
            singular: "Video Player customizável"
          },
          "zh-CN": {
            singular: "可定制的视频播放器"
          }
        }
      }), (0, _v27.translate)({
        singular: "Password privacy & unlisted links",
        dictionary: {
          es: {
            singular: "Privacidad de la contraseña y enlaces sin listar"
          },
          "de-DE": {
            singular: "Passwortschutz und nicht gelistete Links"
          },
          "fr-FR": {
            singular: "Confidentialité des mots de passe et liens non répertoriés"
          },
          "ja-JP": {
            singular: "パスワードのプライバシーと限定公開リンク"
          },
          "ko-KR": {
            singular: "비밀번호 보호 및 일부 공개 링크"
          },
          "pt-BR": {
            singular: "Privacidade de senha e links não listados"
          },
          "zh-CN": {
            singular: "密码隐私与未公开发布的链接"
          }
        }
      }), (0, _v27.translate)({
        singular: "Review & collaboration tools {NEW_BADGE}",
        replacements: {
          NEW_BADGE: (0, _v1.jsx)(() => (0, _v1.jsx)(_v2.Badge, {
            size: "xs",
            variant: "new",
            children: (0, _v27.translate)({
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
          }), {})
        },
        dictionary: {
          es: {
            singular: "Herramientas de revisión y colaboración {NEW_BADGE}"
          },
          "de-DE": {
            singular: "Tools für Prüfung und Zusammenarbeit {NEW_BADGE}"
          },
          "fr-FR": {
            singular: "Outils de collaboration et de révision {NEW_BADGE}"
          },
          "ja-JP": {
            singular: "レビューと共同作業ツール {NEW_BADGE}"
          },
          "ko-KR": {
            singular: "리뷰 및 협업 도구 {NEW_BADGE}"
          },
          "pt-BR": {
            singular: "Ferramentas de revisão e colaboração {NEW_BADGE}"
          },
          "zh-CN": {
            singular: "审阅与协作工具 {NEW_BADGE}"
          }
        }
      }), (0, _v27.translate)({
        singular: "Transfer video files",
        dictionary: {
          es: {
            singular: "Transfiera archivos de video"
          },
          "de-DE": {
            singular: "Videodateien übertragen"
          },
          "fr-FR": {
            singular: "Transférer des fichiers vidéo"
          },
          "ja-JP": {
            singular: "動画ファイルを転送"
          },
          "ko-KR": {
            singular: "동영상 파일 전송"
          },
          "pt-BR": {
            singular: "Transferir arquivos de vídeo"
          },
          "zh-CN": {
            singular: "传输视频文件"
          }
        }
      }), (0, _v27.translate)({
        singular: "Engagement analytics",
        dictionary: {
          es: {
            singular: "Estadísticas de interacción"
          },
          "de-DE": {
            singular: "Analysen zur Interaktion"
          },
          "fr-FR": {
            singular: "Analyses liées à l'implication"
          },
          "ja-JP": {
            singular: "エンゲージメント分析"
          },
          "ko-KR": {
            singular: "참여도 분석"
          },
          "pt-BR": {
            singular: "Análise de engajamento"
          },
          "zh-CN": {
            singular: "参与分析"
          }
        }
      })],
      standard: [(0, _v27.translate)({
        singular: "Branding in the player",
        dictionary: {
          es: {
            singular: "Presencia de la marca en el reproductor"
          },
          "de-DE": {
            singular: "Branding im Player"
          },
          "fr-FR": {
            singular: "Branding dans le lecteur"
          },
          "ja-JP": {
            singular: "プレーヤー内でのブランディング"
          },
          "ko-KR": {
            singular: "플레이어 내 브랜딩"
          },
          "pt-BR": {
            singular: "Presença da marca no player"
          },
          "zh-CN": {
            singular: "播放器中的品牌标识"
          }
        }
      }), (0, _v27.translate)({
        singular: "Third party player support",
        dictionary: {
          es: {
            singular: "Compatibilidad con reproductores de terceros"
          },
          "de-DE": {
            singular: "Support für externe Video-Player"
          },
          "fr-FR": {
            singular: "Prise en charge des lecteurs tiers"
          },
          "ja-JP": {
            singular: "Vimeo以外のプレーヤーにも対応"
          },
          "ko-KR": {
            singular: "타사 플레이어 지원"
          },
          "pt-BR": {
            singular: "Suporte para players de terceiros"
          },
          "zh-CN": {
            singular: "第三方播放器支持"
          }
        }
      }), (0, _v27.translate)({
        singular: "Custom watermark",
        dictionary: {
          es: {
            singular: "Marca de agua personalizada"
          },
          "de-DE": {
            singular: "Benutzerdefiniertes Wasserzeichen"
          },
          "fr-FR": {
            singular: "Filigrane personnalisé"
          },
          "ja-JP": {
            singular: "カスタムウォーターマーク"
          },
          "ko-KR": {
            singular: "커스텀 워터마크"
          },
          "pt-BR": {
            singular: "Marca d´água customizada"
          },
          "zh-CN": {
            singular: "自定义水印"
          }
        }
      }), (0, _v27.translate)({
        singular: "Branded video galleries",
        dictionary: {
          es: {
            singular: "Galerías de vídeo con marca"
          },
          "de-DE": {
            singular: "Gebrandete Videogalerien"
          },
          "fr-FR": {
            singular: "Galeries vidéo brandées"
          },
          "ja-JP": {
            singular: "ブランド化された動画ギャラリー"
          },
          "ko-KR": {
            singular: "브랜디드 비디오 갤러리"
          },
          "pt-BR": {
            singular: "Galerias de vídeo com marca"
          },
          "zh-CN": {
            singular: "品牌视频画廊"
          }
        }
      }), (0, _v27.translate)({
        singular: "Lead capture",
        dictionary: {
          es: {
            singular: "Captura de oportunidades de venta"
          },
          "de-DE": {
            singular: "Lead-Erfassung"
          },
          "fr-FR": {
            singular: "Collecte d'opportunités commerciales"
          },
          "ja-JP": {
            singular: "リードキャプチャー"
          },
          "ko-KR": {
            singular: "리드 수집"
          },
          "pt-BR": {
            singular: "Captura de lead"
          },
          "zh-CN": {
            singular: "线索捕获"
          }
        }
      }), (0, _v27.translate)({
        singular: "Calls to action and custom cards",
        dictionary: {
          es: {
            singular: "Llamadas a la acción y tarjetas personalizadas"
          },
          "de-DE": {
            singular: "Call-to-Action-Elemente und benutzerdefinierte Karten"
          },
          "fr-FR": {
            singular: "Appels à l'action et cartes personnalisées"
          },
          "ja-JP": {
            singular: "行動喚起とカスタムカード"
          },
          "ko-KR": {
            singular: "콜 투 액션 및 커스텀 카드"
          },
          "pt-BR": {
            singular: "Chamadas para ação e cartões personalizados"
          },
          "zh-CN": {
            singular: "号召性用语与自定义卡片"
          }
        }
      })],
      advanced: [(0, _v27.translate)({
        singular: "Hosted livestreamed events",
        dictionary: {
          es: {
            singular: "Eventos en directo alojados"
          },
          "de-DE": {
            singular: "Gehostete Livestream-Events"
          },
          "fr-FR": {
            singular: "Événements diffusés en direct hébergés"
          },
          "ja-JP": {
            singular: "ホストされたライブ配信イベント"
          },
          "ko-KR": {
            singular: "호스팅된 라이브 스트리밍 이벤트"
          },
          "pt-BR": {
            singular: "Eventos ao vivo hospedados"
          },
          "zh-CN": {
            singular: "托管直播活动"
          }
        }
      }), (0, _v27.translate)({
        singular: "Events Q&A, polls, and chat",
        dictionary: {
          es: {
            singular: "Sesión de preguntas y respuestas de eventos, encuestas y chat"
          },
          "de-DE": {
            singular: "Event-Fragerunden, Umfragen und Chat"
          },
          "fr-FR": {
            singular: "Questions-réponses, sondages et discussions des événements"
          },
          "ja-JP": {
            singular: "イベントの質問セッション、アンケート、チャット"
          },
          "ko-KR": {
            singular: "이벤트 Q&A, 투표, 채팅"
          },
          "pt-BR": {
            singular: "Perguntas e respostas, enquetes e chat de eventos"
          },
          "zh-CN": {
            singular: "活动问答、投票和聊天"
          }
        }
      }), (0, _v27.translate)({
        singular: "Stream to multiple destinations",
        dictionary: {
          es: {
            singular: "Transmisión a varios destinos"
          },
          "de-DE": {
            singular: "Stream an mehrere Ziele schicken"
          },
          "fr-FR": {
            singular: "Diffusez des vidéos en streaming vers de multiples destinations"
          },
          "ja-JP": {
            singular: "複数の配信先にストリーム"
          },
          "ko-KR": {
            singular: "여러 목적지로 라이브 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão ao vivo para vários destinos"
          },
          "zh-CN": {
            singular: "串流至多个目的地"
          }
        }
      }), (0, _v27.translate)({
        singular: "DVR streaming",
        dictionary: {
          es: {
            singular: "Transmisión de DVR"
          },
          "de-DE": {
            singular: "Video-Streaming"
          },
          "fr-FR": {
            singular: "Streaming DVR"
          },
          "ja-JP": {
            singular: "DVRストリーミング"
          },
          "ko-KR": {
            singular: "DVR 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão de DVR"
          },
          "zh-CN": {
            singular: "DVR 直播"
          }
        }
      }), (0, _v27.translate)({
        singular: "Scheduled simulive",
        dictionary: {
          es: {
            singular: "Simulive programado"
          },
          "de-DE": {
            singular: "Geplantes Simulive"
          },
          "fr-FR": {
            singular: "Simulive programmé"
          },
          "ja-JP": {
            singular: "スケジュールされた疑似ライブ"
          },
          "ko-KR": {
            singular: "예정된 시뮬라이브"
          },
          "pt-BR": {
            singular: "Simulive programado"
          },
          "zh-CN": {
            singular: "预定模拟直播"
          }
        }
      }), (0, _v27.translate)({
        singular: "Live event-level analytics",
        dictionary: {
          es: {
            singular: "Análisis a nivel de evento en vivo"
          },
          "de-DE": {
            singular: "Live-Analysen auf Ereignisebene"
          },
          "fr-FR": {
            singular: "Statistiques au niveau des événements en direct"
          },
          "ja-JP": {
            singular: "ライブイベントレベルの分析"
          },
          "ko-KR": {
            singular: "라이브 이벤트 수준 분석"
          },
          "pt-BR": {
            singular: "Análise de eventos ao vivo"
          },
          "zh-CN": {
            singular: "现场活动级分析"
          }
        }
      }), (0, _v27.translate)({
        singular: "Marketing automation integrations",
        dictionary: {
          es: {
            singular: "Integraciones de automatización de marketing"
          },
          "de-DE": {
            singular: "Marketing-Automatisierungsintegrationen"
          },
          "fr-FR": {
            singular: "Intégrations d'automatisation marketing"
          },
          "ja-JP": {
            singular: "マーケティングオートメーションのインテグレーション"
          },
          "ko-KR": {
            singular: "마케팅 자동화 통합"
          },
          "pt-BR": {
            singular: "Integrações de automação de marketing"
          },
          "zh-CN": {
            singular: "营销自动化集成"
          }
        }
      })],
      customSelfServe: [(0, _v27.translate)({
        singular: "AI-generated chapters and text summaries",
        dictionary: {
          es: {
            singular: "Capítulos y resúmenes de texto generados por IA"
          },
          "de-DE": {
            singular: "KI-generierte Kapitel und Textzusammenfassungen"
          },
          "fr-FR": {
            singular: "Chapitres et résumés de texte générés par l'IA"
          },
          "ja-JP": {
            singular: "AI生成によるチャプターとテキストの概要"
          },
          "ko-KR": {
            singular: "AI가 생성한 챕터 및 텍스트 요약"
          },
          "pt-BR": {
            singular: "Resumos de capítulos e textos gerados por IA"
          },
          "zh-CN": {
            singular: "AI 生成的章节和文本摘要"
          }
        }
      }), (0, _v27.translate)({
        singular: "Enable creators to ask questions on videos",
        dictionary: {
          es: {
            singular: "Permita que los creadores hagan preguntas sobre los videos"
          },
          "de-DE": {
            singular: "Ermöglichen Sie es Erstellern, Fragen zu Videos zu stellen"
          },
          "fr-FR": {
            singular: "Permettez aux créateurs de poser des questions sur les vidéos"
          },
          "ja-JP": {
            singular: "クリエイターが動画上で質問可能"
          },
          "ko-KR": {
            singular: "크리에이터가 동영상에 대해 질문할 수 있도록 지원"
          },
          "pt-BR": {
            singular: "Permita que os criadores façam perguntas sobre os vídeos"
          },
          "zh-CN": {
            singular: "允许创作者在视频上提问"
          }
        }
      }), (0, _v27.translate)({
        singular: "Host live broadcasts",
        dictionary: {
          es: {
            singular: "Aloje transmisiones en vivo"
          },
          "de-DE": {
            singular: "Veranstalten Sie Live-Übertragungen"
          },
          "fr-FR": {
            singular: "Organisez des diffusions en direct"
          },
          "ja-JP": {
            singular: "ライブ配信をホスト"
          },
          "ko-KR": {
            singular: "라이브 방송 호스팅"
          },
          "pt-BR": {
            singular: "Hospedar transmissões ao vivo"
          },
          "zh-CN": {
            singular: "主持直播"
          }
        }
      }), (0, _v27.translate)({
        singular: "Stream to multiple destinations",
        dictionary: {
          es: {
            singular: "Transmisión a varios destinos"
          },
          "de-DE": {
            singular: "Stream an mehrere Ziele schicken"
          },
          "fr-FR": {
            singular: "Diffusez des vidéos en streaming vers de multiples destinations"
          },
          "ja-JP": {
            singular: "複数の配信先にストリーム"
          },
          "ko-KR": {
            singular: "여러 목적지로 라이브 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão ao vivo para vários destinos"
          },
          "zh-CN": {
            singular: "串流至多个目的地"
          }
        }
      }), (0, _v27.translate)({
        singular: "Live chat, polls, and Q&A",
        dictionary: {
          es: {
            singular: "Chat en vivo, encuestas, y preguntas y respuestas"
          },
          "de-DE": {
            singular: "Live-Chat, Umfragen und Fragerunden"
          },
          "fr-FR": {
            singular: "Discussion en direct, sondages et questions-réponses"
          },
          "ja-JP": {
            singular: "ライブチャット、投票、質問セッション"
          },
          "ko-KR": {
            singular: "실시간 채팅, 투표, Q&A"
          },
          "pt-BR": {
            singular: "Chat ao vivo, enquetes e perguntas e respostas"
          },
          "zh-CN": {
            singular: "在线聊天、投票和问答"
          }
        }
      })],
      enterprise: [(0, _v27.translate)({
        singular: "Custom permissions",
        dictionary: {
          es: {
            singular: "Permisos personalizados"
          },
          "de-DE": {
            singular: "Benutzerdefinierte Berechtigungen"
          },
          "fr-FR": {
            singular: "Autorisations personnalisées"
          },
          "ja-JP": {
            singular: "カスタム権限"
          },
          "ko-KR": {
            singular: "커스텀 권한"
          },
          "pt-BR": {
            singular: "Permissões customizadas"
          },
          "zh-CN": {
            singular: "自定义权限"
          }
        }
      }), (0, _v27.translate)({
        singular: "Advanced AI capabilities",
        dictionary: {
          es: {
            singular: "Capacidades de IA de Advanced"
          },
          "de-DE": {
            singular: "Erweiterte KI-Fähigkeiten"
          },
          "fr-FR": {
            singular: "Capacités d'IA avancées"
          },
          "ja-JP": {
            singular: "高度なAI機能"
          },
          "ko-KR": {
            singular: "고급 AI 기능"
          },
          "pt-BR": {
            singular: "Recursos avançados de IA"
          },
          "zh-CN": {
            singular: "高级 AI 功能"
          }
        }
      }), (0, _v27.translate)({
        singular: "SSO (SAML) and SCIM (OKTA, AZURE)",
        dictionary: {
          es: {
            singular: "SSO (SAML) y SCIM (OKTA, AZURE)"
          },
          "de-DE": {
            singular: "SSO (SAML) und SCIM (OKTA, AZURE)"
          },
          "fr-FR": {
            singular: "SSO (SAML) et SCIM (OKTA, AZURE)"
          },
          "ja-JP": {
            singular: "SSO（SAML）と SCIM（OKTA、AZURE）"
          },
          "ko-KR": {
            singular: "SSO(SAML) 및 SCIM(OKTA, AZURE)"
          },
          "pt-BR": {
            singular: "SSO (SAML) e SCIM (OKTA, AZURE)"
          },
          "zh-CN": {
            singular: "SSO (SAML) 和 SCIM（OKTA、AZURE）"
          }
        }
      }), (0, _v27.translate)({
        singular: "Advanced analytics and marketing integrations",
        dictionary: {
          es: {
            singular: "Análisis de avanzada e integraciones de marketing"
          },
          "de-DE": {
            singular: "Erweiterte Analytik und Marketing-Integrationen"
          },
          "fr-FR": {
            singular: "Statistiques avancées et intégrations marketing"
          },
          "ja-JP": {
            singular: "高度な分析機能とマーケティングインテグレーション"
          },
          "ko-KR": {
            singular: "고급 분석 및 마케팅 통합"
          },
          "pt-BR": {
            singular: "Análises avançadas e integrações de marketing"
          },
          "zh-CN": {
            singular: "高级分析和营销集成"
          }
        }
      }), (0, _v27.translate)({
        singular: "Events with polling and Live Q&A",
        dictionary: {
          es: {
            singular: "Eventos con encuestas y sesión de preguntas y respuestas en vivo"
          },
          "de-DE": {
            singular: "Events mit Umfragen und Live-Fragerunden"
          },
          "fr-FR": {
            singular: "Événements avec sondages et questions-réponses en direct"
          },
          "ja-JP": {
            singular: "アンケート投票とライブQ&Aが含まれたイベント"
          },
          "ko-KR": {
            singular: "투표 및 실시간 Q&A가 포함된 이벤트"
          },
          "pt-BR": {
            singular: "Eventos com enquetes e perguntas e respostas em tempo real"
          },
          "zh-CN": {
            singular: "带有投票和现场问答的活动"
          }
        }
      }), (0, _v27.translate)({
        singular: "Quality events (backup streams, eCDN)",
        dictionary: {
          es: {
            singular: "Eventos de calidad (transmisiones de respaldo, eCDN)"
          },
          "de-DE": {
            singular: "Hochwertige Events (Backup-Streams, eCDN)"
          },
          "fr-FR": {
            singular: "Événements de qualité (streams de secours, eCDN)"
          },
          "ja-JP": {
            singular: "高品質なイベント（バックアップストリーム、eCDN）"
          },
          "ko-KR": {
            singular: "고품질 이벤트(백업 스트림, eCDN)"
          },
          "pt-BR": {
            singular: "Eventos de qualidade (cópias de segurança da transmissão ao vivo, eCDN)"
          },
          "zh-CN": {
            singular: "高质量活动（备份流、eCDN）"
          }
        }
      }), (0, _v27.translate)({
        singular: "Dedicated support",
        dictionary: {
          es: {
            singular: "Asistencia exclusiva"
          },
          "de-DE": {
            singular: "Dedizierter Support"
          },
          "fr-FR": {
            singular: "Assistance dédiée"
          },
          "ja-JP": {
            singular: "専用のサポート"
          },
          "ko-KR": {
            singular: "전담 지원"
          },
          "pt-BR": {
            singular: "Suporte exclusivo"
          },
          "zh-CN": {
            singular: "专门支持"
          }
        }
      })]
    },
    _v39 = {
      plus: [(0, _v27.translate)({
        singular: "Privacy controls",
        dictionary: {
          es: {
            singular: "Controles de privacidad"
          },
          "de-DE": {
            singular: "Datenschutzsteuerungen"
          },
          "fr-FR": {
            singular: "Contrôle de la confidentialité"
          },
          "ja-JP": {
            singular: "プライバシーコントロール"
          },
          "ko-KR": {
            singular: "프라이버시 제어"
          },
          "pt-BR": {
            singular: "Controles de Privacidade"
          },
          "zh-CN": {
            singular: "隐私控制"
          }
        }
      }), (0, _v27.translate)({
        singular: "Custom video player",
        dictionary: {
          es: {
            singular: "Reproductor de video personalizado"
          },
          "de-DE": {
            singular: "Individuell anpassbarer Video-Player"
          },
          "fr-FR": {
            singular: "Player vidéo personnalisé"
          },
          "ja-JP": {
            singular: "カスタム動画プレーヤー"
          },
          "ko-KR": {
            singular: "커스텀 동영상 플레이어"
          },
          "pt-BR": {
            singular: "Video player customizado"
          },
          "zh-CN": {
            singular: "自定义视频播放器"
          }
        }
      }), (0, _v27.translate)({
        singular: "Custom URLs",
        dictionary: {
          es: {
            singular: "URL personalizadas"
          },
          "de-DE": {
            singular: "Benutzerdefinierte URLs"
          },
          "fr-FR": {
            singular: "URL personnalisées"
          },
          "ja-JP": {
            singular: "カスタムURL"
          },
          "ko-KR": {
            singular: "커스텀 URL"
          },
          "pt-BR": {
            singular: "URLs personalizados"
          },
          "zh-CN": {
            singular: "自定义 URL"
          }
        }
      }), (0, _v27.translate)({
        singular: "Subtitle translations (with AI Credits) {NEW_BADGE}",
        replacements: {
          NEW_BADGE: () => (0, _v1.jsx)(_v2.Badge, {
            size: "sm",
            variant: "new",
            children: (0, _v27.translate)({
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
          })
        },
        dictionary: {
          es: {
            singular: "Traducciones de subtítulos (con Créditos de IA) {NEW_BADGE}"
          },
          "de-DE": {
            singular: "Untertitelübersetzungen (mit KI-Credits) {NEW_BADGE}"
          },
          "fr-FR": {
            singular: "Traductions des sous-titres (avec crédits d'IA) {NEW_BADGE}"
          },
          "ja-JP": {
            singular: "字幕翻訳（AIクレジット使用）{NEW_BADGE}"
          },
          "ko-KR": {
            singular: "자막 번역(AI 크레딧 포함) {NEW_BADGE}"
          },
          "pt-BR": {
            singular: "Traduções de legendas (com créditos de IA) {NEW_BADGE}"
          },
          "zh-CN": {
            singular: "字幕翻译（使用 AI 点数）{NEW_BADGE}"
          }
        }
      })],
      pro: [(0, _v27.translate)({
        singular: "AI script generator",
        dictionary: {
          es: {
            singular: "Generador de guiones de IA"
          },
          "de-DE": {
            singular: "KI-Skript-Generator"
          },
          "fr-FR": {
            singular: "Générateur de scripts optimisé par l'IA"
          },
          "ja-JP": {
            singular: "AIスクリプトジェネレーター"
          },
          "ko-KR": {
            singular: "AI 스크립트 작성기"
          },
          "pt-BR": {
            singular: "Gerador de roteiros de IA"
          },
          "zh-CN": {
            singular: "AI 脚本生成器"
          }
        }
      }), (0, _v27.translate)({
        singular: "Teleprompter",
        dictionary: {
          "fr-FR": {
            singular: "Téléprompteur"
          },
          "ja-JP": {
            singular: "テレプロンプター"
          },
          "ko-KR": {
            singular: "텔레프롬프터"
          },
          "zh-CN": {
            singular: "提词器"
          }
        }
      }), (0, _v27.translate)({
        singular: "Text-based video editing",
        dictionary: {
          es: {
            singular: "Edición de video basada en texto"
          },
          "de-DE": {
            singular: "Textbasierte Videobearbeitung"
          },
          "fr-FR": {
            singular: "Montage vidéo basé sur le texte"
          },
          "ja-JP": {
            singular: "テキストベースの動画編集"
          },
          "ko-KR": {
            singular: "텍스트 기반 동영상 편집"
          },
          "pt-BR": {
            singular: "Edição de vídeo baseada em texto"
          },
          "zh-CN": {
            singular: "基于文本的视频编辑"
          }
        }
      })],
      proUnlimited: [(0, _v27.translate)({
        singular: "AI script generator",
        dictionary: {
          es: {
            singular: "Generador de guiones de IA"
          },
          "de-DE": {
            singular: "KI-Skript-Generator"
          },
          "fr-FR": {
            singular: "Générateur de scripts optimisé par l'IA"
          },
          "ja-JP": {
            singular: "AIスクリプトジェネレーター"
          },
          "ko-KR": {
            singular: "AI 스크립트 작성기"
          },
          "pt-BR": {
            singular: "Gerador de roteiros de IA"
          },
          "zh-CN": {
            singular: "AI 脚本生成器"
          }
        }
      }), (0, _v27.translate)({
        singular: "Teleprompter",
        dictionary: {
          "fr-FR": {
            singular: "Téléprompteur"
          },
          "ja-JP": {
            singular: "テレプロンプター"
          },
          "ko-KR": {
            singular: "텔레프롬프터"
          },
          "zh-CN": {
            singular: "提词器"
          }
        }
      }), (0, _v27.translate)({
        singular: "Text-based video editing",
        dictionary: {
          es: {
            singular: "Edición de video basada en texto"
          },
          "de-DE": {
            singular: "Textbasierte Videobearbeitung"
          },
          "fr-FR": {
            singular: "Montage vidéo basé sur le texte"
          },
          "ja-JP": {
            singular: "テキストベースの動画編集"
          },
          "ko-KR": {
            singular: "텍스트 기반 동영상 편집"
          },
          "pt-BR": {
            singular: "Edição de vídeo baseada em texto"
          },
          "zh-CN": {
            singular: "基于文本的视频编辑"
          }
        }
      })],
      business: [(0, _v27.translate)({
        singular: "Brand kit",
        dictionary: {
          es: {
            singular: "Kit de marca"
          },
          "de-DE": {
            singular: "Brand Kit"
          },
          "fr-FR": {
            singular: "Kit de marque"
          },
          "ja-JP": {
            singular: "ブランドキット"
          },
          "ko-KR": {
            singular: "브랜드 키트"
          },
          "pt-BR": {
            singular: "Kit de marca"
          },
          "zh-CN": {
            singular: "品牌工具包"
          }
        }
      }), (0, _v27.translate)({
        singular: "Showcase SEO",
        dictionary: {
          es: {
            singular: "SEO de presentación"
          },
          "de-DE": {
            singular: "SEO für Präsentationen"
          },
          "fr-FR": {
            singular: "Optimisation pour les moteurs de recherche des présentations"
          },
          "ja-JP": {
            singular: "ショーケースSEO"
          },
          "ko-KR": {
            singular: "쇼케이스 SEO"
          },
          "pt-BR": {
            singular: "SEO da Vitrine"
          },
          "zh-CN": {
            singular: "橱窗搜索引擎优化"
          }
        }
      }), (0, _v27.translate)({
        singular: "Lead generation",
        dictionary: {
          es: {
            singular: "Generación de oportunidades"
          },
          "de-DE": {
            singular: "Lead-Generierung"
          },
          "fr-FR": {
            singular: "Opportunités commerciales"
          },
          "ja-JP": {
            singular: "リード生成"
          },
          "ko-KR": {
            singular: "리드 생성"
          },
          "pt-BR": {
            singular: "Geração de leads"
          },
          "zh-CN": {
            singular: "潜在客户开发"
          }
        }
      }), (0, _v27.translate)({
        singular: "Player Call-to-action",
        dictionary: {
          es: {
            singular: "Llamada a la acción del reproductor"
          },
          "de-DE": {
            singular: "Player-Call-to-Action"
          },
          "fr-FR": {
            singular: "Appel à l'action du lecteur"
          },
          "ja-JP": {
            singular: "プレーヤーのコールトゥアクション"
          },
          "ko-KR": {
            singular: "플레이어 콜투액션"
          },
          "pt-BR": {
            singular: "Chamada para ação no player"
          },
          "zh-CN": {
            singular: "播放器号召性用语"
          }
        }
      }), (0, _v27.translate)({
        singular: "End cards",
        dictionary: {
          es: {
            singular: "Pantallas finales"
          },
          "de-DE": {
            singular: "Endkarten"
          },
          "fr-FR": {
            singular: "Écrans de fin"
          },
          "ja-JP": {
            singular: "エンドカード"
          },
          "ko-KR": {
            singular: "엔드 카드"
          },
          "pt-BR": {
            singular: "Cartões finais"
          },
          "zh-CN": {
            singular: "结束画面"
          }
        }
      }), (0, _v27.translate)({
        singular: "Custom branding",
        dictionary: {
          es: {
            singular: "Desarrollo de marca personalizado"
          },
          "de-DE": {
            singular: "Individuelles Branding"
          },
          "fr-FR": {
            singular: "Image de marque personnalisée"
          },
          "ja-JP": {
            singular: "カスタムブランディング"
          },
          "ko-KR": {
            singular: "커스텀 브랜딩"
          },
          "pt-BR": {
            singular: "Marca personalizada"
          },
          "zh-CN": {
            singular: "自定义品牌设计"
          }
        }
      })],
      livePremium: [(0, _v27.translate)({
        singular: "AI-generated chapters and text summaries",
        dictionary: {
          es: {
            singular: "Capítulos y resúmenes de texto generados por IA"
          },
          "de-DE": {
            singular: "KI-generierte Kapitel und Textzusammenfassungen"
          },
          "fr-FR": {
            singular: "Chapitres et résumés de texte générés par l'IA"
          },
          "ja-JP": {
            singular: "AI生成によるチャプターとテキストの概要"
          },
          "ko-KR": {
            singular: "AI가 생성한 챕터 및 텍스트 요약"
          },
          "pt-BR": {
            singular: "Resumos de capítulos e textos gerados por IA"
          },
          "zh-CN": {
            singular: "AI 生成的章节和文本摘要"
          }
        }
      }), (0, _v27.translate)({
        singular: "Enable creators to ask questions on videos",
        dictionary: {
          es: {
            singular: "Permita que los creadores hagan preguntas sobre los videos"
          },
          "de-DE": {
            singular: "Ermöglichen Sie es Erstellern, Fragen zu Videos zu stellen"
          },
          "fr-FR": {
            singular: "Permettez aux créateurs de poser des questions sur les vidéos"
          },
          "ja-JP": {
            singular: "クリエイターが動画上で質問可能"
          },
          "ko-KR": {
            singular: "크리에이터가 동영상에 대해 질문할 수 있도록 지원"
          },
          "pt-BR": {
            singular: "Permita que os criadores façam perguntas sobre os vídeos"
          },
          "zh-CN": {
            singular: "允许创作者在视频上提问"
          }
        }
      }), (0, _v27.translate)({
        singular: "Host live broadcasts and webinars",
        dictionary: {
          es: {
            singular: "Organice transmisiones en vivo y seminarios web"
          },
          "de-DE": {
            singular: "Veranstalten Sie Live-Übertragungen und Webinare"
          },
          "fr-FR": {
            singular: "Organisez des diffusions en direct et des webinaires"
          },
          "ja-JP": {
            singular: "ライブ配信とウェビナーをホスティング"
          },
          "ko-KR": {
            singular: "라이브 방송 및 웨비나 호스팅"
          },
          "pt-BR": {
            singular: "Hospede webinars e transmissões ao vivo"
          },
          "zh-CN": {
            singular: "主持直播和网络研讨会"
          }
        }
      }), (0, _v27.translate)({
        singular: "Stream to multiple destinations",
        dictionary: {
          es: {
            singular: "Transmisión a varios destinos"
          },
          "de-DE": {
            singular: "Stream an mehrere Ziele schicken"
          },
          "fr-FR": {
            singular: "Diffusez des vidéos en streaming vers de multiples destinations"
          },
          "ja-JP": {
            singular: "複数の配信先にストリーム"
          },
          "ko-KR": {
            singular: "여러 목적지로 라이브 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão ao vivo para vários destinos"
          },
          "zh-CN": {
            singular: "串流至多个目的地"
          }
        }
      }), (0, _v27.translate)({
        singular: "Branded invite and reminder emails",
        dictionary: {
          es: {
            singular: "Correos electrónicos de invitación y recordatorios con presencia de la marca"
          },
          "de-DE": {
            singular: "Markenspezifische Einladungs- und Erinnerungs-E-Mails"
          },
          "fr-FR": {
            singular: "Invitations et e-mails de rappel à l'image de votre marque"
          },
          "ja-JP": {
            singular: "ブランド化された招待状とリマインダーメール"
          },
          "ko-KR": {
            singular: "브랜딩 가능한 초대 및 알림 이메일"
          },
          "pt-BR": {
            singular: "Convites e e-mails de lembrete com sua marca"
          },
          "zh-CN": {
            singular: "品牌邀请和提醒电子邮件"
          }
        }
      }), (0, _v27.translate)({
        singular: "Live chat, polls, and Q&A",
        dictionary: {
          es: {
            singular: "Chat en vivo, encuestas, y preguntas y respuestas"
          },
          "de-DE": {
            singular: "Live-Chat, Umfragen und Fragerunden"
          },
          "fr-FR": {
            singular: "Discussion en direct, sondages et questions-réponses"
          },
          "ja-JP": {
            singular: "ライブチャット、投票、質問セッション"
          },
          "ko-KR": {
            singular: "실시간 채팅, 투표, Q&A"
          },
          "pt-BR": {
            singular: "Chat ao vivo, enquetes e perguntas e respostas"
          },
          "zh-CN": {
            singular: "在线聊天、投票和问答"
          }
        }
      })],
      enterprise: [(0, _v27.translate)({
        singular: "More storage and bandwidth",
        dictionary: {
          es: {
            singular: "Más almacenamiento y ancho de banda"
          },
          "de-DE": {
            singular: "Mehr Speicher und Bandbreite"
          },
          "fr-FR": {
            singular: "Plus de stockage et de bande passante"
          },
          "ja-JP": {
            singular: "より多くのストレージと帯域幅"
          },
          "ko-KR": {
            singular: "저장 공간과 대역폭 확대"
          },
          "pt-BR": {
            singular: "Mais espaço de armazenamento e largura de banda"
          },
          "zh-CN": {
            singular: "更多存储空间和带宽"
          }
        }
      }), (0, _v27.translate)({
        singular: "More users",
        dictionary: {
          es: {
            singular: "Más usuarios"
          },
          "de-DE": {
            singular: "Mehr Benutzer"
          },
          "fr-FR": {
            singular: "Plus d'utilisateurs"
          },
          "ja-JP": {
            singular: "より多くのユーザー"
          },
          "ko-KR": {
            singular: "더 많은 사용자 추가"
          },
          "pt-BR": {
            singular: "Mais usuários"
          },
          "zh-CN": {
            singular: "更多用户"
          }
        }
      }), (0, _v27.translate)({
        singular: "Custom permissions",
        dictionary: {
          es: {
            singular: "Permisos personalizados"
          },
          "de-DE": {
            singular: "Benutzerdefinierte Berechtigungen"
          },
          "fr-FR": {
            singular: "Autorisations personnalisées"
          },
          "ja-JP": {
            singular: "カスタム権限"
          },
          "ko-KR": {
            singular: "커스텀 권한"
          },
          "pt-BR": {
            singular: "Permissões customizadas"
          },
          "zh-CN": {
            singular: "自定义权限"
          }
        }
      }), (0, _v27.translate)({
        singular: "Advanced AI capabilities",
        dictionary: {
          es: {
            singular: "Capacidades de IA de Advanced"
          },
          "de-DE": {
            singular: "Erweiterte KI-Fähigkeiten"
          },
          "fr-FR": {
            singular: "Capacités d'IA avancées"
          },
          "ja-JP": {
            singular: "高度なAI機能"
          },
          "ko-KR": {
            singular: "고급 AI 기능"
          },
          "pt-BR": {
            singular: "Recursos avançados de IA"
          },
          "zh-CN": {
            singular: "高级 AI 功能"
          }
        }
      }), (0, _v27.translate)({
        singular: "SSO (SAML) and SCIM (OKTA, AZURE)",
        dictionary: {
          es: {
            singular: "SSO (SAML) y SCIM (OKTA, AZURE)"
          },
          "de-DE": {
            singular: "SSO (SAML) und SCIM (OKTA, AZURE)"
          },
          "fr-FR": {
            singular: "SSO (SAML) et SCIM (OKTA, AZURE)"
          },
          "ja-JP": {
            singular: "SSO（SAML）と SCIM（OKTA、AZURE）"
          },
          "ko-KR": {
            singular: "SSO(SAML) 및 SCIM(OKTA, AZURE)"
          },
          "pt-BR": {
            singular: "SSO (SAML) e SCIM (OKTA, AZURE)"
          },
          "zh-CN": {
            singular: "SSO (SAML) 和 SCIM（OKTA、AZURE）"
          }
        }
      }), (0, _v27.translate)({
        singular: "Advanced analytics and marketing integrations",
        dictionary: {
          es: {
            singular: "Análisis de avanzada e integraciones de marketing"
          },
          "de-DE": {
            singular: "Erweiterte Analytik und Marketing-Integrationen"
          },
          "fr-FR": {
            singular: "Statistiques avancées et intégrations marketing"
          },
          "ja-JP": {
            singular: "高度な分析機能とマーケティングインテグレーション"
          },
          "ko-KR": {
            singular: "고급 분석 및 마케팅 통합"
          },
          "pt-BR": {
            singular: "Análises avançadas e integrações de marketing"
          },
          "zh-CN": {
            singular: "高级分析和营销集成"
          }
        }
      }), (0, _v27.translate)({
        singular: "Events with polling and Live Q&A",
        dictionary: {
          es: {
            singular: "Eventos con encuestas y sesión de preguntas y respuestas en vivo"
          },
          "de-DE": {
            singular: "Events mit Umfragen und Live-Fragerunden"
          },
          "fr-FR": {
            singular: "Événements avec sondages et questions-réponses en direct"
          },
          "ja-JP": {
            singular: "アンケート投票とライブQ&Aが含まれたイベント"
          },
          "ko-KR": {
            singular: "투표 및 실시간 Q&A가 포함된 이벤트"
          },
          "pt-BR": {
            singular: "Eventos com enquetes e perguntas e respostas em tempo real"
          },
          "zh-CN": {
            singular: "带有投票和现场问答的活动"
          }
        }
      }), (0, _v27.translate)({
        singular: "Quality events (backup streams, eCDN)",
        dictionary: {
          es: {
            singular: "Eventos de calidad (transmisiones de respaldo, eCDN)"
          },
          "de-DE": {
            singular: "Hochwertige Events (Backup-Streams, eCDN)"
          },
          "fr-FR": {
            singular: "Événements de qualité (streams de secours, eCDN)"
          },
          "ja-JP": {
            singular: "高品質なイベント（バックアップストリーム、eCDN）"
          },
          "ko-KR": {
            singular: "고품질 이벤트(백업 스트림, eCDN)"
          },
          "pt-BR": {
            singular: "Eventos de qualidade (cópias de segurança da transmissão ao vivo, eCDN)"
          },
          "zh-CN": {
            singular: "高质量活动（备份流、eCDN）"
          }
        }
      }), (0, _v27.translate)({
        singular: "Dedicated support",
        dictionary: {
          es: {
            singular: "Asistencia exclusiva"
          },
          "de-DE": {
            singular: "Dedizierter Support"
          },
          "fr-FR": {
            singular: "Assistance dédiée"
          },
          "ja-JP": {
            singular: "専用のサポート"
          },
          "ko-KR": {
            singular: "전담 지원"
          },
          "pt-BR": {
            singular: "Suporte exclusivo"
          },
          "zh-CN": {
            singular: "专门支持"
          }
        }
      })]
    },
    _v40 = {
      free: [(0, _v27.translate)({
        singular: "Ad-free video player",
        dictionary: {
          es: {
            singular: "Videos sin anuncios"
          },
          "de-DE": {
            singular: "Werbefreier Video-Player"
          },
          "fr-FR": {
            singular: "Player vidéo sans publicités"
          },
          "ja-JP": {
            singular: "広告なしの動画プレーヤー"
          },
          "ko-KR": {
            singular: "광고 없는 동영상 플레이어"
          },
          "pt-BR": {
            singular: "Player de vídeo sem anúncios"
          },
          "zh-CN": {
            singular: "无广告视频播放器"
          }
        }
      }), (0, _v27.translate)({
        singular: "4K and HDR",
        dictionary: {
          es: {
            singular: "4K y HDR"
          },
          "de-DE": {
            singular: "4K und HDR"
          },
          "fr-FR": {
            singular: "4K et HDR"
          },
          "ja-JP": {
            singular: "4KとHDR"
          },
          "ko-KR": {
            singular: "4K 및 HDR"
          },
          "pt-BR": {
            singular: "4K e HDR"
          },
          "zh-CN": {
            singular: "4k 和 HDR"
          }
        }
      }), (0, _v27.translate)({
        singular: "Embed anywhere",
        dictionary: {
          es: {
            singular: "Inserta el reproductor\nen cualquier página"
          },
          "de-DE": {
            singular: "Überall einbetten"
          },
          "fr-FR": {
            singular: "Intégration de vos vidéos où vous le souhaitez"
          },
          "ja-JP": {
            singular: "どこにでも埋め込み可能"
          },
          "ko-KR": {
            singular: "자유로운 임베드"
          },
          "pt-BR": {
            singular: "Incorpore em qualquer lugar"
          },
          "zh-CN": {
            singular: "嵌入任何地方"
          }
        }
      }), (0, _v27.translate)({
        singular: "Unlisted links",
        dictionary: {
          es: {
            singular: "Enlaces sin listar"
          },
          "de-DE": {
            singular: "Nicht gelistete Links"
          },
          "fr-FR": {
            singular: "Liens non listés"
          },
          "ja-JP": {
            singular: "限定公開リンク"
          },
          "ko-KR": {
            singular: "일부 공개 링크"
          },
          "pt-BR": {
            singular: "Links não listados"
          }
        }
      })],
      proSolution: [(0, _v27.translate)({
        singular: "Customizable video player",
        dictionary: {
          es: {
            singular: "Reproductor de video personalizable"
          },
          "de-DE": {
            singular: "Individuell anpassbarer Video-Player "
          },
          "fr-FR": {
            singular: "Player vidéo personnalisable"
          },
          "ja-JP": {
            singular: "カスタマイズ可能な動画プレーヤー"
          },
          "ko-KR": {
            singular: "사용자 지정 가능한 동영상 플레이어"
          },
          "pt-BR": {
            singular: "Video Player customizável"
          },
          "zh-CN": {
            singular: "可定制的视频播放器"
          }
        }
      }), (0, _v27.translate)({
        singular: "Password protection",
        dictionary: {
          es: {
            singular: "Protección por contraseña"
          },
          "de-DE": {
            singular: "Kennwortschutz"
          },
          "fr-FR": {
            singular: "Protection par mot de passe"
          },
          "ja-JP": {
            singular: "動画のパスワード保護"
          },
          "ko-KR": {
            singular: "비밀번호로 동영상 보호"
          },
          "pt-BR": {
            singular: "Proteção com senha"
          },
          "zh-CN": {
            singular: "密码保护"
          }
        }
      }), (0, _v27.translate)({
        singular: "Review tools",
        dictionary: {
          es: {
            singular: "Herramientas de revisión"
          },
          "de-DE": {
            singular: "Review-Tools"
          },
          "fr-FR": {
            singular: "Outils d'avis"
          },
          "ja-JP": {
            singular: "レビューツール"
          },
          "ko-KR": {
            singular: "리뷰 도구"
          },
          "pt-BR": {
            singular: "Ferramentas de revisão"
          },
          "zh-CN": {
            singular: "评论工具"
          }
        }
      }), (0, _v27.translate)({
        singular: "Chapters",
        dictionary: {
          es: {
            singular: "Capítulos"
          },
          "de-DE": {
            singular: "Kapitel"
          },
          "fr-FR": {
            singular: "Chapitres"
          },
          "ja-JP": {
            singular: "チャプター"
          },
          "ko-KR": {
            singular: "챕터"
          },
          "pt-BR": {
            singular: "Capítulos"
          },
          "zh-CN": {
            singular: "章节"
          }
        }
      }), (0, _v27.translate)({
        singular: "Engagement analytics",
        dictionary: {
          es: {
            singular: "Estadísticas de interacción"
          },
          "de-DE": {
            singular: "Analysen zur Interaktion"
          },
          "fr-FR": {
            singular: "Analyses liées à l'implication"
          },
          "ja-JP": {
            singular: "エンゲージメント分析"
          },
          "ko-KR": {
            singular: "참여도 분석"
          },
          "pt-BR": {
            singular: "Análise de engajamento"
          },
          "zh-CN": {
            singular: "参与分析"
          }
        }
      })],
      team: [(0, _v27.translate)({
        singular: "Custom logo in the player",
        dictionary: {
          es: {
            singular: "Logotipo personalizado en el reproductor"
          },
          "de-DE": {
            singular: "Benutzerdefiniertes Logo im Player"
          },
          "fr-FR": {
            singular: "Logo personnalisé dans le lecteur"
          },
          "ja-JP": {
            singular: "プレーヤーのカスタムロゴ"
          },
          "ko-KR": {
            singular: "플레이어 내 커스텀 로고"
          },
          "pt-BR": {
            singular: "Logotipo personalizado no player"
          },
          "zh-CN": {
            singular: "播放器中的自定义徽标"
          }
        }
      }), (0, _v27.translate)({
        singular: "Customizable showcases",
        dictionary: {
          es: {
            singular: "Presentaciones personalizables"
          },
          "de-DE": {
            singular: "Individuell anpassbare Showcases"
          },
          "fr-FR": {
            singular: "Présentations personnalisables"
          },
          "ja-JP": {
            singular: "カスタマイズ可能なショーケース"
          },
          "ko-KR": {
            singular: "커스텀 가능한 쇼케이스"
          },
          "pt-BR": {
            singular: "Vitrines personalizáveis"
          },
          "zh-CN": {
            singular: "可定制的展示"
          }
        }
      }), (0, _v27.translate)({
        singular: "Custom forms",
        dictionary: {
          es: {
            singular: "Formularios personalizados"
          },
          "de-DE": {
            singular: "Benutzerdefinierte Formulare"
          },
          "fr-FR": {
            singular: "Formulaires personnalisés"
          },
          "ja-JP": {
            singular: "カスタムフォーム"
          },
          "ko-KR": {
            singular: "커스텀 양식"
          },
          "pt-BR": {
            singular: "Formulários personalizados"
          },
          "zh-CN": {
            singular: "自定义表单"
          }
        }
      }), (0, _v27.translate)({
        singular: "Transfer video files up to 300GB",
        dictionary: {
          es: {
            singular: "Transfiera archivos de video de hasta 300 GB"
          },
          "de-DE": {
            singular: "Übertragen Sie Videodateien bis zu 300 GB"
          },
          "fr-FR": {
            singular: "Transfert de fichiers vidéo jusqu'à 300 Go"
          },
          "ja-JP": {
            singular: "最大300GBの動画ファイルを転送"
          },
          "ko-KR": {
            singular: "최대 300GB의 동영상 파일 전송"
          },
          "pt-BR": {
            singular: "Transfira arquivos de vídeo de até 300 GB"
          },
          "zh-CN": {
            singular: "传输最大可达 300GB 的视频文件"
          }
        }
      }), (0, _v27.translate)({
        singular: "Marketing automation integrations",
        dictionary: {
          es: {
            singular: "Integraciones de automatización de marketing"
          },
          "de-DE": {
            singular: "Marketing-Automatisierungsintegrationen"
          },
          "fr-FR": {
            singular: "Intégrations d'automatisation marketing"
          },
          "ja-JP": {
            singular: "マーケティングオートメーションのインテグレーション"
          },
          "ko-KR": {
            singular: "마케팅 자동화 통합"
          },
          "pt-BR": {
            singular: "Integrações de automação de marketing"
          },
          "zh-CN": {
            singular: "营销自动化集成"
          }
        }
      }), (0, _v27.translate)({
        singular: "Viewer-level analytics",
        dictionary: {
          es: {
            singular: "Análisis a nivel del espectador"
          },
          "de-DE": {
            singular: "Analysen auf Zuschauerebene"
          },
          "fr-FR": {
            singular: "Analyse au niveau des spectateurs"
          },
          "ja-JP": {
            singular: "視聴者レベルの分析"
          },
          "ko-KR": {
            singular: "시청자 수준 애널리틱스"
          },
          "pt-BR": {
            singular: "Análise do público"
          }
        }
      })],
      teamLive: [(0, _v27.translate)({
        singular: "Host livestreamed events",
        dictionary: {
          es: {
            singular: "Organice eventos transmitidos en vivo"
          },
          "de-DE": {
            singular: "Veranstalten Sie Livestream-Events"
          },
          "fr-FR": {
            singular: "Héberger des événements en direct"
          },
          "ja-JP": {
            singular: "ライブ配信イベントを主催"
          },
          "ko-KR": {
            singular: "라이브 스트리밍 이벤트 주최"
          },
          "pt-BR": {
            singular: "Hospedar eventos transmitidos ao vivo"
          },
          "zh-CN": {
            singular: "举办直播活动"
          }
        }
      }), (0, _v27.translate)({
        singular: "Event Q&A, polls, and chat",
        dictionary: {
          es: {
            singular: "Sesión de preguntas y respuestas del evento, encuestas y chat"
          },
          "de-DE": {
            singular: "Event-Fragerunden, Umfragen und Chat"
          },
          "fr-FR": {
            singular: "Questions-réponses, sondages et discussions de l'événement"
          },
          "ja-JP": {
            singular: "イベントの質問セッション、アンケート、チャット"
          },
          "ko-KR": {
            singular: "이벤트 Q&A, 투표, 채팅"
          },
          "pt-BR": {
            singular: "Perguntas e respostas, enquetes e chat do evento"
          },
          "zh-CN": {
            singular: "活动问答、投票和聊天"
          }
        }
      }), (0, _v27.translate)({
        singular: "Stream to multiple destinations",
        dictionary: {
          es: {
            singular: "Transmisión a varios destinos"
          },
          "de-DE": {
            singular: "Stream an mehrere Ziele schicken"
          },
          "fr-FR": {
            singular: "Diffusez des vidéos en streaming vers de multiples destinations"
          },
          "ja-JP": {
            singular: "複数の配信先にストリーム"
          },
          "ko-KR": {
            singular: "여러 목적지로 라이브 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão ao vivo para vários destinos"
          },
          "zh-CN": {
            singular: "串流至多个目的地"
          }
        }
      }), (0, _v27.translate)({
        singular: "DVR streaming",
        dictionary: {
          es: {
            singular: "Transmisión de DVR"
          },
          "de-DE": {
            singular: "Video-Streaming"
          },
          "fr-FR": {
            singular: "Streaming DVR"
          },
          "ja-JP": {
            singular: "DVRストリーミング"
          },
          "ko-KR": {
            singular: "DVR 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão de DVR"
          },
          "zh-CN": {
            singular: "DVR 直播"
          }
        }
      }), (0, _v27.translate)({
        singular: "Concurrent streams",
        dictionary: {
          es: {
            singular: "Transmisiones concurrentes"
          },
          "de-DE": {
            singular: "Gleichzeitige Streams"
          },
          "fr-FR": {
            singular: "Streams simultanés"
          },
          "ja-JP": {
            singular: "同時配信"
          },
          "ko-KR": {
            singular: "동시 스트림"
          },
          "pt-BR": {
            singular: "Transmissões simultâneas"
          },
          "zh-CN": {
            singular: "并发视频流"
          }
        }
      }), (0, _v27.translate)({
        singular: "Scheduled simulive",
        dictionary: {
          es: {
            singular: "Simulive programado"
          },
          "de-DE": {
            singular: "Geplantes Simulive"
          },
          "fr-FR": {
            singular: "Simulive programmé"
          },
          "ja-JP": {
            singular: "スケジュールされた疑似ライブ"
          },
          "ko-KR": {
            singular: "예정된 시뮬라이브"
          },
          "pt-BR": {
            singular: "Simulive programado"
          },
          "zh-CN": {
            singular: "预定模拟直播"
          }
        }
      }), (0, _v27.translate)({
        singular: "Live event-level analytics",
        dictionary: {
          es: {
            singular: "Análisis a nivel de evento en vivo"
          },
          "de-DE": {
            singular: "Live-Analysen auf Ereignisebene"
          },
          "fr-FR": {
            singular: "Statistiques au niveau des événements en direct"
          },
          "ja-JP": {
            singular: "ライブイベントレベルの分析"
          },
          "ko-KR": {
            singular: "라이브 이벤트 수준 분석"
          },
          "pt-BR": {
            singular: "Análise de eventos ao vivo"
          },
          "zh-CN": {
            singular: "现场活动级分析"
          }
        }
      })],
      enterprise: [(0, _v27.translate)({
        singular: "Custom permissions",
        dictionary: {
          es: {
            singular: "Permisos personalizados"
          },
          "de-DE": {
            singular: "Benutzerdefinierte Berechtigungen"
          },
          "fr-FR": {
            singular: "Autorisations personnalisées"
          },
          "ja-JP": {
            singular: "カスタム権限"
          },
          "ko-KR": {
            singular: "커스텀 권한"
          },
          "pt-BR": {
            singular: "Permissões customizadas"
          },
          "zh-CN": {
            singular: "自定义权限"
          }
        }
      }), (0, _v27.translate)({
        singular: "SSO (SAML)",
        dictionary: {
          "ja-JP": {
            singular: "SSO（SAML）"
          },
          "ko-KR": {
            singular: "SSO(SAML)"
          }
        }
      }), (0, _v27.translate)({
        singular: "SCIM (OKTA, Azure)",
        dictionary: {
          "ja-JP": {
            singular: "SCIM（OKTA、Azure）"
          },
          "ko-KR": {
            singular: "SCIM(OKTA, Azure)"
          }
        }
      }), (0, _v27.translate)({
        singular: "AI translation",
        dictionary: {
          es: {
            singular: "Traducción con IA"
          },
          "de-DE": {
            singular: "KI-Übersetzung"
          },
          "fr-FR": {
            singular: "Traduction générée par l'IA"
          },
          "ja-JP": {
            singular: "AI翻訳"
          },
          "ko-KR": {
            singular: "AI 번역"
          },
          "pt-BR": {
            singular: "Tradução de IA"
          },
          "zh-CN": {
            singular: "人工智能翻译"
          }
        }
      }), (0, _v27.translate)({
        singular: "Interactive video",
        dictionary: {
          es: {
            singular: "Video interactivo"
          },
          "de-DE": {
            singular: "Interaktives Video"
          },
          "fr-FR": {
            singular: "Vidéo interactive"
          },
          "ja-JP": {
            singular: "インタラクティブ動画"
          },
          "ko-KR": {
            singular: "인터랙티브 동영상"
          },
          "pt-BR": {
            singular: "Vídeo interativo"
          },
          "zh-CN": {
            singular: "交互式视频"
          }
        }
      }), (0, _v27.translate)({
        singular: "Webinars",
        dictionary: {
          es: {
            singular: "Seminarios web"
          },
          "de-DE": {
            singular: "Webinare"
          },
          "fr-FR": {
            singular: "Webinaires"
          },
          "ja-JP": {
            singular: "ウェビナー"
          },
          "ko-KR": {
            singular: "웨비나"
          },
          "zh-CN": {
            singular: "网络研讨会"
          }
        }
      }), (0, _v27.translate)({
        singular: "Advanced integrations",
        dictionary: {
          es: {
            singular: "Integraciones avanzadas"
          },
          "de-DE": {
            singular: "Erweiterte Integrationen"
          },
          "fr-FR": {
            singular: "Intégrations avancées"
          },
          "ja-JP": {
            singular: "高度な統合"
          },
          "ko-KR": {
            singular: "고급 통합"
          },
          "pt-BR": {
            singular: "Integrações avançadas"
          },
          "zh-CN": {
            singular: "Advanced 集成"
          }
        }
      }), (0, _v27.translate)({
        singular: "Advanced analytics",
        dictionary: {
          es: {
            singular: "Análisis avanzados"
          },
          "de-DE": {
            singular: "Erweiterte Analysen"
          },
          "fr-FR": {
            singular: "Analyses détaillées"
          },
          "ja-JP": {
            singular: "高度な分析"
          },
          "ko-KR": {
            singular: "고급 애널리틱스"
          },
          "pt-BR": {
            singular: "Análises avançadas"
          }
        }
      }), (0, _v27.translate)({
        singular: "Dedicated support",
        dictionary: {
          es: {
            singular: "Asistencia exclusiva"
          },
          "de-DE": {
            singular: "Dedizierter Support"
          },
          "fr-FR": {
            singular: "Assistance dédiée"
          },
          "ja-JP": {
            singular: "専用のサポート"
          },
          "ko-KR": {
            singular: "전담 지원"
          },
          "pt-BR": {
            singular: "Suporte exclusivo"
          },
          "zh-CN": {
            singular: "专门支持"
          }
        }
      })]
    },
    _v41 = (_v0, _v1, _v2, _v3, _v4, _v5, _v6) => {
      if (_v3) switch (_v0) {
        case "free":
          return [(0, _v27.translate)({
            singular: "Ad-free video player",
            dictionary: {
              es: {
                singular: "Videos sin anuncios"
              },
              "de-DE": {
                singular: "Werbefreier Video-Player"
              },
              "fr-FR": {
                singular: "Player vidéo sans publicités"
              },
              "ja-JP": {
                singular: "広告なしの動画プレーヤー"
              },
              "ko-KR": {
                singular: "광고 없는 동영상 플레이어"
              },
              "pt-BR": {
                singular: "Player de vídeo sem anúncios"
              },
              "zh-CN": {
                singular: "无广告视频播放器"
              }
            }
          }), (0, _v27.translate)({
            singular: "4K and HDR",
            dictionary: {
              es: {
                singular: "4K y HDR"
              },
              "de-DE": {
                singular: "4K und HDR"
              },
              "fr-FR": {
                singular: "4K et HDR"
              },
              "ja-JP": {
                singular: "4KとHDR"
              },
              "ko-KR": {
                singular: "4K 및 HDR"
              },
              "pt-BR": {
                singular: "4K e HDR"
              },
              "zh-CN": {
                singular: "4k 和 HDR"
              }
            }
          })];
        case "creator":
          return _v4 || _v6 ? [(0, _v27.translate)({
            singular: "Review and collaboration tools",
            dictionary: {
              es: {
                singular: "Herramientas de revisión y colaboración"
              },
              "de-DE": {
                singular: "Tools für Prüfung und Zusammenarbeit"
              },
              "fr-FR": {
                singular: "Outils de collaboration et de révision"
              },
              "ja-JP": {
                singular: "レビュー＆共同作業ツール"
              },
              "ko-KR": {
                singular: "리뷰 및 콜라보레이션 도구"
              },
              "pt-BR": {
                singular: "Ferramentas de revisão e colaboração"
              },
              "zh-CN": {
                singular: "审查和协作工具"
              }
            }
          }), (0, _v27.translate)({
            singular: "Transfer video files",
            dictionary: {
              es: {
                singular: "Transfiera archivos de video"
              },
              "de-DE": {
                singular: "Videodateien übertragen"
              },
              "fr-FR": {
                singular: "Transférer des fichiers vidéo"
              },
              "ja-JP": {
                singular: "動画ファイルを転送"
              },
              "ko-KR": {
                singular: "동영상 파일 전송"
              },
              "pt-BR": {
                singular: "Transferir arquivos de vídeo"
              },
              "zh-CN": {
                singular: "传输视频文件"
              }
            }
          }), (0, _v27.translate)({
            singular: "AI-powered video tools",
            dictionary: {
              es: {
                singular: "Herramientas de vídeo impulsadas por IA"
              },
              "de-DE": {
                singular: "KI-gestützte Videotools"
              },
              "fr-FR": {
                singular: "Outils vidéo propulsés par l'IA"
              },
              "ja-JP": {
                singular: "AI搭載の動画ツール"
              },
              "ko-KR": {
                singular: "AI 기반 비디오 도구"
              },
              "pt-BR": {
                singular: "Ferramentas de vídeo com IA"
              },
              "zh-CN": {
                singular: "AI 驱动的视频工具"
              }
            }
          }), (0, _v27.translate)({
            singular: "Teleprompter",
            dictionary: {
              "fr-FR": {
                singular: "Téléprompteur"
              },
              "ja-JP": {
                singular: "テレプロンプター"
              },
              "ko-KR": {
                singular: "텔레프롬프터"
              },
              "zh-CN": {
                singular: "提词器"
              }
            }
          }), (0, _v27.translate)({
            singular: "Text-based video editing",
            dictionary: {
              es: {
                singular: "Edición de video basada en texto"
              },
              "de-DE": {
                singular: "Textbasierte Videobearbeitung"
              },
              "fr-FR": {
                singular: "Montage vidéo basé sur le texte"
              },
              "ja-JP": {
                singular: "テキストベースの動画編集"
              },
              "ko-KR": {
                singular: "텍스트 기반 동영상 편집"
              },
              "pt-BR": {
                singular: "Edição de vídeo baseada em texto"
              },
              "zh-CN": {
                singular: "基于文本的视频编辑"
              }
            }
          })] : [(0, _v27.translate)({
            singular: "Customizable video player",
            dictionary: {
              es: {
                singular: "Reproductor de video personalizable"
              },
              "de-DE": {
                singular: "Individuell anpassbarer Video-Player "
              },
              "fr-FR": {
                singular: "Player vidéo personnalisable"
              },
              "ja-JP": {
                singular: "カスタマイズ可能な動画プレーヤー"
              },
              "ko-KR": {
                singular: "사용자 지정 가능한 동영상 플레이어"
              },
              "pt-BR": {
                singular: "Video Player customizável"
              },
              "zh-CN": {
                singular: "可定制的视频播放器"
              }
            }
          }), (0, _v27.translate)({
            singular: "Password privacy & unlisted links",
            dictionary: {
              es: {
                singular: "Privacidad de la contraseña y enlaces sin listar"
              },
              "de-DE": {
                singular: "Passwortschutz und nicht gelistete Links"
              },
              "fr-FR": {
                singular: "Confidentialité des mots de passe et liens non répertoriés"
              },
              "ja-JP": {
                singular: "パスワードのプライバシーと限定公開リンク"
              },
              "ko-KR": {
                singular: "비밀번호 보호 및 일부 공개 링크"
              },
              "pt-BR": {
                singular: "Privacidade de senha e links não listados"
              },
              "zh-CN": {
                singular: "密码隐私与未公开发布的链接"
              }
            }
          }), (0, _v27.translate)({
            singular: "Review and collaboration tools",
            dictionary: {
              es: {
                singular: "Herramientas de revisión y colaboración"
              },
              "de-DE": {
                singular: "Tools für Prüfung und Zusammenarbeit"
              },
              "fr-FR": {
                singular: "Outils de collaboration et de révision"
              },
              "ja-JP": {
                singular: "レビュー＆共同作業ツール"
              },
              "ko-KR": {
                singular: "리뷰 및 콜라보레이션 도구"
              },
              "pt-BR": {
                singular: "Ferramentas de revisão e colaboração"
              },
              "zh-CN": {
                singular: "审查和协作工具"
              }
            }
          }), (0, _v27.translate)({
            singular: "Transfer video files",
            dictionary: {
              es: {
                singular: "Transfiera archivos de video"
              },
              "de-DE": {
                singular: "Videodateien übertragen"
              },
              "fr-FR": {
                singular: "Transférer des fichiers vidéo"
              },
              "ja-JP": {
                singular: "動画ファイルを転送"
              },
              "ko-KR": {
                singular: "동영상 파일 전송"
              },
              "pt-BR": {
                singular: "Transferir arquivos de vídeo"
              },
              "zh-CN": {
                singular: "传输视频文件"
              }
            }
          }), (0, _v27.translate)({
            singular: "AI-powered video tools",
            dictionary: {
              es: {
                singular: "Herramientas de vídeo impulsadas por IA"
              },
              "de-DE": {
                singular: "KI-gestützte Videotools"
              },
              "fr-FR": {
                singular: "Outils vidéo propulsés par l'IA"
              },
              "ja-JP": {
                singular: "AI搭載の動画ツール"
              },
              "ko-KR": {
                singular: "AI 기반 비디오 도구"
              },
              "pt-BR": {
                singular: "Ferramentas de vídeo com IA"
              },
              "zh-CN": {
                singular: "AI 驱动的视频工具"
              }
            }
          })];
        case "core":
          return [(0, _v27.translate)({
            singular: "Brand kit",
            dictionary: {
              es: {
                singular: "Kit de marca"
              },
              "de-DE": {
                singular: "Brand Kit"
              },
              "fr-FR": {
                singular: "Kit de marque"
              },
              "ja-JP": {
                singular: "ブランドキット"
              },
              "ko-KR": {
                singular: "브랜드 키트"
              },
              "pt-BR": {
                singular: "Kit de marca"
              },
              "zh-CN": {
                singular: "品牌工具包"
              }
            }
          }), (0, _v27.translate)({
            singular: "Custom fonts",
            dictionary: {
              es: {
                singular: "Fuentes personalizadas"
              },
              "de-DE": {
                singular: "Benutzerdefinierte Schriftarten"
              },
              "fr-FR": {
                singular: "Polices personnalisées"
              },
              "ja-JP": {
                singular: "カスタムフォント"
              },
              "ko-KR": {
                singular: "사용자 지정 글꼴"
              },
              "pt-BR": {
                singular: "Fontes personalizadas"
              },
              "zh-CN": {
                singular: "自定义字体"
              }
            }
          }), (0, _v27.translate)({
            singular: "Unlisted links for sharing",
            dictionary: {
              es: {
                singular: "Enlaces no listados para compartir"
              },
              "de-DE": {
                singular: "Nicht gelistete Links zum Teilen"
              },
              "fr-FR": {
                singular: "Liens non répertoriés pour le partage"
              },
              "ja-JP": {
                singular: "共有用の非公開リンク"
              },
              "ko-KR": {
                singular: "공유용 비공개 링크"
              },
              "pt-BR": {
                singular: "Links não listados para compartilhamento"
              },
              "zh-CN": {
                singular: "用于共享的未列出链接"
              }
            }
          }), (0, _v27.translate)({
            singular: "Embed domain level privacy",
            dictionary: {
              es: {
                singular: "Incorpore privacidad a nivel de dominio"
              },
              "de-DE": {
                singular: "Integriere Datenschutz auf Domain-Ebene."
              },
              "fr-FR": {
                singular: "Intégrer la confidentialité au niveau du domaine"
              },
              "ja-JP": {
                singular: "埋め込み動画のドメインレベルでのプライバシー"
              },
              "ko-KR": {
                singular: "도메인 수준 프라이버시 임베드"
              },
              "pt-BR": {
                singular: "Incorpore privacidade no nível de domínio"
              },
              "zh-CN": {
                singular: "嵌入域名级隐私"
              }
            }
          })];
        case "professional":
          return [(0, _v27.translate)({
            singular: "Virtual events and webinars",
            dictionary: {
              es: {
                singular: "Eventos virtuales y webinars"
              },
              "de-DE": {
                singular: "Virtuelle Veranstaltungen und Webinare"
              },
              "fr-FR": {
                singular: "Événements virtuels et webinaires"
              },
              "ja-JP": {
                singular: "バーチャルイベントとウェビナー"
              },
              "ko-KR": {
                singular: "가상 이벤트 및 웨비나"
              },
              "pt-BR": {
                singular: "Eventos virtuais e webinars"
              },
              "zh-CN": {
                singular: "虚拟活动与网络研讨会"
              }
            }
          }), (0, _v27.translate)({
            singular: "Branding in the player",
            dictionary: {
              es: {
                singular: "Presencia de la marca en el reproductor"
              },
              "de-DE": {
                singular: "Branding im Player"
              },
              "fr-FR": {
                singular: "Branding dans le lecteur"
              },
              "ja-JP": {
                singular: "プレーヤー内でのブランディング"
              },
              "ko-KR": {
                singular: "플레이어 내 브랜딩"
              },
              "pt-BR": {
                singular: "Presença da marca no player"
              },
              "zh-CN": {
                singular: "播放器中的品牌标识"
              }
            }
          }), (0, _v27.translate)({
            singular: "Third party player support",
            dictionary: {
              es: {
                singular: "Compatibilidad con reproductores de terceros"
              },
              "de-DE": {
                singular: "Support für externe Video-Player"
              },
              "fr-FR": {
                singular: "Prise en charge des lecteurs tiers"
              },
              "ja-JP": {
                singular: "Vimeo以外のプレーヤーにも対応"
              },
              "ko-KR": {
                singular: "타사 플레이어 지원"
              },
              "pt-BR": {
                singular: "Suporte para players de terceiros"
              },
              "zh-CN": {
                singular: "第三方播放器支持"
              }
            }
          }), (0, _v27.translate)({
            singular: "Stock photos, videos, and music",
            dictionary: {
              es: {
                singular: "Archivo de fotos, videos y música"
              },
              "de-DE": {
                singular: "Stockfotos, Videos und Musik"
              },
              "fr-FR": {
                singular: "Photos, vidéos et sons sous licence"
              },
              "ja-JP": {
                singular: "ストック写真、動画、音楽"
              },
              "ko-KR": {
                singular: "스톡 사진, 동영상, 음악"
              },
              "pt-BR": {
                singular: "Acervo de fotos, vídeos e músicas"
              },
              "zh-CN": {
                singular: "库存图片、视频和音乐"
              }
            }
          }), (0, _v27.translate)({
            singular: "Lead capture",
            dictionary: {
              es: {
                singular: "Captura de oportunidades de venta"
              },
              "de-DE": {
                singular: "Lead-Erfassung"
              },
              "fr-FR": {
                singular: "Collecte d'opportunités commerciales"
              },
              "ja-JP": {
                singular: "リードキャプチャー"
              },
              "ko-KR": {
                singular: "리드 수집"
              },
              "pt-BR": {
                singular: "Captura de lead"
              },
              "zh-CN": {
                singular: "线索捕获"
              }
            }
          }), (0, _v27.translate)({
            singular: "Custom intros and outros",
            dictionary: {
              es: {
                singular: "Introducciones y cierres personalizados"
              },
              "de-DE": {
                singular: "Benutzerdefinierte Intros und Outros"
              },
              "fr-FR": {
                singular: "Personnaliser les intros et les outros"
              },
              "ja-JP": {
                singular: "カスタムイントロおよびアウトロ"
              },
              "ko-KR": {
                singular: "커스텀 인트로 및 아우트로"
              },
              "pt-BR": {
                singular: "Introduções e telas pós-vídeo customizadas"
              },
              "zh-CN": {
                singular: "自定义片头和片尾"
              }
            }
          })];
        case "studio":
        case "production":
          return [(0, _v27.translate)({
            singular: "{AMOUNT} Admins included",
            replacements: {
              AMOUNT: _v5?.seats?.admin ?? 0
            },
            dictionary: {
              es: {
                singular: "{AMOUNT} administradores incluidos"
              },
              "de-DE": {
                singular: "{AMOUNT} Admins inklusive"
              },
              "fr-FR": {
                singular: "{AMOUNT} administrateurs inclus"
              },
              "ja-JP": {
                singular: "{AMOUNT}名の管理者が含まれます"
              },
              "ko-KR": {
                singular: "{AMOUNT}명의 관리자 포함"
              },
              "pt-BR": {
                singular: "{AMOUNT} administradores incluídos"
              },
              "zh-CN": {
                singular: "{AMOUNT} 位管理员包含在内"
              }
            }
          }), (0, _v27.translate)({
            singular: "Up to {AMOUNT} guests in live events",
            replacements: {
              AMOUNT: 10
            },
            dictionary: {
              es: {
                singular: "Hasta {AMOUNT} invitados en eventos en vivo"
              },
              "de-DE": {
                singular: "Bis zu {AMOUNT} Gäste bei Live-Events"
              },
              "fr-FR": {
                singular: "Jusqu'à {AMOUNT} invités lors d'événements en direct"
              },
              "ja-JP": {
                singular: "ライブイベントで最大{AMOUNT}名のゲスト"
              },
              "ko-KR": {
                singular: "라이브 이벤트에 최대 {AMOUNT}명의 게스트"
              },
              "pt-BR": {
                singular: "Até {AMOUNT} convidados em eventos ao vivo"
              },
              "zh-CN": {
                singular: "直播活动最多 {AMOUNT} 位嘉宾"
              }
            }
          })];
        case "enterprise":
          return [(0, _v27.translate)({
            singular: "Customizable video player",
            dictionary: {
              es: {
                singular: "Reproductor de video personalizable"
              },
              "de-DE": {
                singular: "Individuell anpassbarer Video-Player "
              },
              "fr-FR": {
                singular: "Player vidéo personnalisable"
              },
              "ja-JP": {
                singular: "カスタマイズ可能な動画プレーヤー"
              },
              "ko-KR": {
                singular: "사용자 지정 가능한 동영상 플레이어"
              },
              "pt-BR": {
                singular: "Video Player customizável"
              },
              "zh-CN": {
                singular: "可定制的视频播放器"
              }
            }
          }), (0, _v27.translate)({
            singular: "Password privacy & unlisted links",
            dictionary: {
              es: {
                singular: "Privacidad de la contraseña y enlaces sin listar"
              },
              "de-DE": {
                singular: "Passwortschutz und nicht gelistete Links"
              },
              "fr-FR": {
                singular: "Confidentialité des mots de passe et liens non répertoriés"
              },
              "ja-JP": {
                singular: "パスワードのプライバシーと限定公開リンク"
              },
              "ko-KR": {
                singular: "비밀번호 보호 및 일부 공개 링크"
              },
              "pt-BR": {
                singular: "Privacidade de senha e links não listados"
              },
              "zh-CN": {
                singular: "密码隐私与未公开发布的链接"
              }
            }
          }), (0, _v27.translate)({
            singular: "Review and collaboration tools",
            dictionary: {
              es: {
                singular: "Herramientas de revisión y colaboración"
              },
              "de-DE": {
                singular: "Tools für Prüfung und Zusammenarbeit"
              },
              "fr-FR": {
                singular: "Outils de collaboration et de révision"
              },
              "ja-JP": {
                singular: "レビュー＆共同作業ツール"
              },
              "ko-KR": {
                singular: "리뷰 및 콜라보레이션 도구"
              },
              "pt-BR": {
                singular: "Ferramentas de revisão e colaboração"
              },
              "zh-CN": {
                singular: "审查和协作工具"
              }
            }
          }), (0, _v27.translate)({
            singular: "Transfer video files",
            dictionary: {
              es: {
                singular: "Transfiera archivos de video"
              },
              "de-DE": {
                singular: "Videodateien übertragen"
              },
              "fr-FR": {
                singular: "Transférer des fichiers vidéo"
              },
              "ja-JP": {
                singular: "動画ファイルを転送"
              },
              "ko-KR": {
                singular: "동영상 파일 전송"
              },
              "pt-BR": {
                singular: "Transferir arquivos de vídeo"
              },
              "zh-CN": {
                singular: "传输视频文件"
              }
            }
          }), (0, _v27.translate)({
            singular: "Engagement analytics",
            dictionary: {
              es: {
                singular: "Estadísticas de interacción"
              },
              "de-DE": {
                singular: "Analysen zur Interaktion"
              },
              "fr-FR": {
                singular: "Analyses liées à l'implication"
              },
              "ja-JP": {
                singular: "エンゲージメント分析"
              },
              "ko-KR": {
                singular: "참여도 분석"
              },
              "pt-BR": {
                singular: "Análise de engajamento"
              },
              "zh-CN": {
                singular: "参与分析"
              }
            }
          })];
        default:
          return;
      }
      return _v1 ? _v39[_v0] : _v2 ? _v40[_v0] : _v38[_v0];
    },
    _v42 = (_v0, _v1 = !1, _v2, _v3) => _v0 && _v1 ? "enterprise" === _v0 ? (0, _v27.translate)({
      singular: "More storage and bandwidth",
      dictionary: {
        es: {
          singular: "Más almacenamiento y ancho de banda"
        },
        "de-DE": {
          singular: "Mehr Speicher und Bandbreite"
        },
        "fr-FR": {
          singular: "Plus de stockage et de bande passante"
        },
        "ja-JP": {
          singular: "より多くのストレージと帯域幅"
        },
        "ko-KR": {
          singular: "저장 공간과 대역폭 확대"
        },
        "pt-BR": {
          singular: "Mais espaço de armazenamento e largura de banda"
        },
        "zh-CN": {
          singular: "更多存储空间和带宽"
        }
      }
    }) : "lifetime" === _v2 ? (0, _v27.translate)({
      singular: "{AMOUNT} total storage",
      replacements: {
        AMOUNT: _v3
      },
      dictionary: {
        es: {
          singular: "{AMOUNT} de almacenamiento total"
        },
        "de-DE": {
          singular: "{AMOUNT} Gesamtspeicherplatz"
        },
        "fr-FR": {
          singular: "{AMOUNT} de stockage en tout"
        },
        "ja-JP": {
          singular: "{AMOUNT} の総ストレージ"
        },
        "ko-KR": {
          singular: "총 {AMOUNT} 저장 공간"
        },
        "pt-BR": {
          singular: "{AMOUNT} de armazenamento total"
        },
        "zh-CN": {
          singular: "{AMOUNT} 总存储量"
        }
      }
    }) : "pro" === _v0 || "plus" === _v0 ? (0, _v27.translate)({
      singular: "{AMOUNT} / week",
      replacements: {
        AMOUNT: _v3
      },
      dictionary: {
        es: {
          singular: "{AMOUNT} por semana"
        },
        "de-DE": {
          singular: "{AMOUNT} pro Woche"
        },
        "fr-FR": {
          singular: "{AMOUNT}/semaine"
        },
        "ja-JP": {
          singular: "{AMOUNT}/週"
        },
        "ko-KR": {
          singular: "{AMOUNT}/주"
        },
        "pt-BR": {
          singular: "{AMOUNT} / semana"
        },
        "zh-CN": {
          singular: "{AMOUNT}/周"
        }
      }
    }) : `${(0, _v27.translate)({
      singular: "No weekly limit",
      dictionary: {
        es: {
          singular: "Sin límites semanales"
        },
        "de-DE": {
          singular: "Keine Wochenlimits"
        },
        "fr-FR": {
          singular: "Sans limite hebdomadaire"
        },
        "ja-JP": {
          singular: "週毎の制限なし"
        },
        "ko-KR": {
          singular: "주간 제한 없음"
        },
        "pt-BR": {
          singular: "Sem limites semanais"
        },
        "zh-CN": {
          singular: "无每周限制"
        }
      }
    })}, ${(0, _v27.translate)({
      singular: "{AMOUNT} total storage",
      replacements: {
        AMOUNT: _v3
      },
      dictionary: {
        es: {
          singular: "{AMOUNT} de almacenamiento total"
        },
        "de-DE": {
          singular: "{AMOUNT} Gesamtspeicherplatz"
        },
        "fr-FR": {
          singular: "{AMOUNT} de stockage en tout"
        },
        "ja-JP": {
          singular: "{AMOUNT} の総ストレージ"
        },
        "ko-KR": {
          singular: "총 {AMOUNT} 저장 공간"
        },
        "pt-BR": {
          singular: "{AMOUNT} de armazenamento total"
        },
        "zh-CN": {
          singular: "{AMOUNT} 总存储量"
        }
      }
    })}` : "enterprise" === _v0 ? (0, _v27.translate)({
      singular: "Unlimited videos",
      dictionary: {
        es: {
          singular: "Videos ilimitados"
        },
        "de-DE": {
          singular: "Unbegrenzte Videos"
        },
        "fr-FR": {
          singular: "Nombre illimité de vidéos"
        },
        "ja-JP": {
          singular: "無制限の動画"
        },
        "ko-KR": {
          singular: "동영상 무제한"
        },
        "pt-BR": {
          singular: "Vídeos ilimitados"
        },
        "zh-CN": {
          singular: "无限数量的视频"
        }
      }
    }) : "free" === _v0 && 2 == _v3 ? (0, _v27.translate)({
      singular: "{NUM_VIDEOS} videos / month",
      replacements: {
        NUM_VIDEOS: _v3
      },
      dictionary: {
        es: {
          singular: "{NUM_VIDEOS} videos/mes"
        },
        "de-DE": {
          singular: "{NUM_VIDEOS} Videos pro Monat"
        },
        "fr-FR": {
          singular: "{NUM_VIDEOS} vidéos/mois"
        },
        "ja-JP": {
          singular: "動画{NUM_VIDEOS}本/月"
        },
        "ko-KR": {
          singular: "한 달에 동영상 {NUM_VIDEOS}개"
        },
        "pt-BR": {
          singular: "{NUM_VIDEOS} vídeos por mês"
        },
        "zh-CN": {
          singular: "{NUM_VIDEOS} 个视频/月"
        }
      }
    }) : (0, _v27.translate)({
      singular: "{NUM_VIDEOS} videos",
      replacements: {
        NUM_VIDEOS: _v3
      },
      dictionary: {
        "de-DE": {
          singular: "{NUM_VIDEOS} Videos"
        },
        "fr-FR": {
          singular: "{NUM_VIDEOS} vidéos"
        },
        "ja-JP": {
          singular: "{NUM_VIDEOS}件の動画"
        },
        "ko-KR": {
          singular: "동영상 {NUM_VIDEOS}개"
        },
        "pt-BR": {
          singular: "{NUM_VIDEOS} vídeos"
        },
        "zh-CN": {
          singular: "{NUM_VIDEOS} 个视频"
        }
      }
    }),
    _v43 = (_v0, _v1, _v2, _v3, _v4, _v5) => {
      let _v6 = !!Array.isArray(_v0) && !_v0.some(_v0 => "free" === _v0.tier);
      return "free" === _v1 || "customSelfServe" === _v1 || "starter" === _v1 && _v6 || _v4 && "professional" === _v1 && (_v6 || "business" === _v5) ? (0, _v27.translate)({
        singular: "Key features:",
        dictionary: {
          es: {
            singular: "Funciones clave:"
          },
          "de-DE": {
            singular: "Die wichtigsten Funktionen:"
          },
          "fr-FR": {
            singular: "Fonctionnalités principales :"
          },
          "ja-JP": {
            singular: "主な機能："
          },
          "ko-KR": {
            singular: "주요 기능:"
          },
          "pt-BR": {
            singular: "Principais recursos:"
          },
          "zh-CN": {
            singular: "主要特点："
          }
        }
      }) : (0, _v27.translate)({
        singular: "Everything in {PLAN_NAME}, plus:",
        replacements: {
          PLAN_NAME: {
            starter: "Free",
            standard: "Starter",
            advanced: "Standard",
            enterprise: _v2 ? "Premium" : _v3 ? "Team Live" : _v4 ? "Studio" : "Advanced",
            plus: "Basic",
            pro: "Plus",
            proUnlimited: "Plus",
            business: "Pro",
            livePremium: "Business",
            proSolution: "Free",
            team: "Pro",
            teamLive: "Team",
            creator: "Free",
            core: "Creator",
            professional: "Core",
            studio: "Professional",
            production: "Professional"
          }[_v1]
        },
        dictionary: {
          es: {
            singular: "Todo lo incluido en {PLAN_NAME}, más:"
          },
          "de-DE": {
            singular: "Alles in {PLAN_NAME}, plus:"
          },
          "fr-FR": {
            singular: "Tout ce qui est compris dans l'abonnement {PLAN_NAME}, plus :"
          },
          "ja-JP": {
            singular: "{PLAN_NAME}プランの全機能に加え："
          },
          "ko-KR": {
            singular: "{PLAN_NAME}의 모든 기능 및 다음 기능:"
          },
          "pt-BR": {
            singular: "Tudo incluído no plano {PLAN_NAME}, mais:"
          },
          "zh-CN": {
            singular: "{PLAN_NAME} 中的所有功能，加上："
          }
        }
      });
    };
  _v0.s(["CARD_FEATURE_LIST_MAP", 0, _v38, "getCardFeatureSubhead", 0, _v43, "getCardVideoQuota", 0, _v42, "getFeatureListByTier", 0, _v41], 0);
  var _v44 = _v0.i(0);
  let _v45 = _v0 => {
    let {
      compact: _v1
    } = (0, _v17.useContext)(_v28.OverridesContext);
    return (0, _v1.jsx)(_v30.Paragraph, {
      variant: _v1 ? "body-md" : void 0,
      fontWeight: 400,
      children: _v0.children
    });
  };
  _v0.s(["default", 0, ({
    planData: _v0,
    periodicQuota: _v1,
    quotaPeriod: _v2,
    planView: _v3
  }) => {
    let {
        tier: _v4
      } = _v0,
      {
        isFlatRateData: _v5,
        isSolutionData: _v6,
        isRepackagingData: _v7,
        plansData: _v8
      } = (0, _v17.useContext)(_v29.PlansDataContext),
      {
        compact: _v9
      } = (0, _v17.useContext)(_v28.OverridesContext),
      _v10 = !!_v7 && (0, _v44.isCreatorV2)(_v8),
      _v11 = !!_v7 && (0, _v44.isCreatorJuly2026)(_v8),
      _v12 = _v41(_v4, _v5, _v6, _v7, _v10, _v0?.metadata?.entitlements?.params, _v11),
      _v13 = _v43(_v8, _v4, _v5, _v6, _v7, _v3),
      _v14 = _v42(_v4, _v5, _v2, _v1);
    return (0, _v1.jsxs)(_v3.Box, {
      "data-testid": "plan-card-features",
      children: [_v13 && (0, _v1.jsx)(_v3.Box, {
        marginBottom: 12,
        lineHeight: 18,
        children: (0, _v1.jsx)(_v30.Paragraph, {
          fontWeight: 500,
          children: _v13
        })
      }), _v12 && _v12.length > 0 && (_v14 || _v7) && (0, _v1.jsxs)(_v36, {
        $compact: _v9,
        children: [_v5 && (0, _v1.jsxs)("li", {
          children: [(0, _v1.jsx)(_v37, {}), (0, _v1.jsx)(_v45, {
            children: _v14
          })]
        }), _v12.map(_v0 => (0, _v1.jsxs)("li", {
          children: [(0, _v1.jsx)(_v37, {}), (0, _v1.jsx)(_v45, {
            children: _v0
          })]
        }, _v0 + "cards-feature-list"))]
      })]
    });
  }], 0);
  var _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  let _v48 = (0, _v32.default)(_v33.Checkmark).withConfig({
    displayName: "styles__FeatureCheckIcon",
    componentId: "sc-d95ef56-0"
  })`
  width: ${(0, _v31.rem)(20)};
  height: ${(0, _v31.rem)(20)};
  flex-shrink: 0;

  path {
    fill: var(--vimeo-colors-text-primary);
  }
`;
  (0, _v32.default)(_v47.ReviewCheck).withConfig({
    displayName: "styles__ReviewIcon",
    componentId: "sc-d95ef56-1"
  })`
  ${(0, _v35.addWidth)(16, 20)};
  margin-top: ${(0, _v31.rem)(4)};
  align-self: flex-start;
  flex-shrink: 0;
`, _v32.default.div.withConfig({
    displayName: "styles__ReviewContainer",
    componentId: "sc-d95ef56-2"
  })`
  min-height: ${(0, _v31.rem)(120)};
  margin-bottom: ${(0, _v31.rem)(20)};
  svg {
    margin: ${(0, _v31.rem)(8)} 0;
  }
  p {
    color: ${_v46.bokehTheme.colors.gray["900"]};
    max-width: ${(0, _v31.rem)(180)};
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
`;
  let _v49 = _v32.default.ul.withConfig({
    displayName: "styles__EnterpriseFeatureList",
    componentId: "sc-d95ef56-3"
  })`
  list-style: initial;

  li {
    margin-top: ${(0, _v31.rem)(8)};
    position: relative;
  }

  > li {
    align-items: baseline;
    display: flex;
    line-height: ${(0, _v31.rem)(24)};
  }
`;
  _v0.s(["EnterpriseFeatureList", 0, _v49, "FeatureCheckIcon", 0, _v48], 0);
  let _v50 = _v32.default.div.withConfig({
      displayName: "styles__BadgeContainer",
      componentId: "sc-2c69964a-0"
    })`
  position: absolute;
  top: ${_v0 => _v0.$compact ? (0, _v31.rem)(-22) : (0, _v31.rem)(-24)};
  left: 0;
  background: ${({
      bgColor: _v0
    }) => _v0};
  color: white;
  border-radius: ${(0, _v31.rem)(20)} ${(0, _v31.rem)(20)} 0 0;
  height: ${_v0 => _v0.$compact ? (0, _v31.rem)(44) : (0, _v31.rem)(70)};
  width: 100%;
  text-align: center;

  @media (width > ${_v34.breakpoints.TABLET}) {
    top: ${_v0 => _v0.$compact ? (0, _v31.rem)(-22) : (0, _v31.rem)(-37)};
    min-height: ${_v0 => _v0.$compact ? (0, _v31.rem)(24) : (0, _v31.rem)(36)};
    height: ${_v0 => _v0.$compact ? (0, _v31.rem)(44) : (0, _v31.rem)(70)};
    padding: ${_v0 => _v0.$compact ? `${(0, _v31.rem)(4)} ${(0, _v31.rem)(24)}` : `${(0, _v31.rem)(6)} ${(0, _v31.rem)(24)}`};
  }

  > h2 {
    ${(0, _v35.addTypography)(12, 18)}
    color: #f0f4f6;
    font-weight: 500;
    line-height: ${(0, _v31.rem)(24)};
    margin: 0;
    letter-spacing: unset;
    @media (width > ${_v34.breakpoints.TABLET}) {
      line-height: ${(0, _v31.rem)(26)};
    }
  }
`,
    _v51 = _v32.default.div.withConfig({
      displayName: "styles__CurrentPlanBadgeContainer",
      componentId: "sc-2c69964a-1"
    })`
  border-radius: ${(0, _v31.rem)(20)};
  background: var(--vimeo-colors-button-secondary-default);
  padding: ${(0, _v31.rem)(8)} ${(0, _v31.rem)(2)};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  @media (max-width: ${_v34.breakpoints.DESKTOP_LARGE}) {
    padding: ${(0, _v31.rem)(6)} ${(0, _v31.rem)(1)};
  }
  .currentPlanText {
    ${(0, _v35.addTypography)(7, 14)}
    color: var(--vimeo-colors-text-secondary);
    font-weight: 400;
    padding: 0 ${(0, _v31.rem)(10)};
    margin: auto;
    line-height: 13.3px;
    letter-spacing: 0.56px;
  }
`,
    _v52 = ({
      color: _v0 = "#000",
      text: _v1,
      compact: _v2 = !1
    }) => (0, _v1.jsx)(_v50, {
      bgColor: _v0,
      $compact: _v2,
      children: (0, _v1.jsx)(_v18.Text, {
        variant: _v2 ? "heading-2xs" : "heading-md",
        children: _v1
      })
    });
  _v0.s(["default", 0, ({
    planData: _v0,
    showBadge: _v1
  }) => {
    let _v2 = (0, _v17.useContext)(_v28.OverridesContext);
    if (_v2?.noBadge) return null;
    let {
      tier: _v3
    } = _v0;
    return _v2?.badgeType && _v2?.badgePlan === _v3 ? (0, _v1.jsx)(_v52, {
      color: "#8A5EE8",
      text: _v2.badgeType,
      compact: _v2?.compact
    }) : _v1 ? (0, _v1.jsx)(_v52, {
      color: "#8A5EE8",
      text: (0, _v27.translate)({
        singular: "Recommended",
        dictionary: {
          es: {
            singular: "Recomendado"
          },
          "de-DE": {
            singular: "Empfohlen"
          },
          "fr-FR": {
            singular: "Recommandé"
          },
          "ja-JP": {
            singular: "おすすめ"
          },
          "ko-KR": {
            singular: "추천"
          },
          "pt-BR": {
            singular: "Recomendados"
          },
          "zh-CN": {
            singular: "推荐"
          }
        }
      }),
      compact: _v2?.compact
    }) : null;
  }], 0), _v0.s(["default", 0, ({
    showBadge: _v0,
    showUpcoming: _v1,
    label: _v2
  }) => _v0 || _v1 ? (0, _v1.jsx)(_v51, {
    children: (0, _v1.jsx)(_v18.Text, {
      as: "div",
      variant: "body-md",
      size: "6",
      className: "currentPlanText",
      children: _v2 ?? (0, _v27.translate)({
        singular: "Your plan",
        dictionary: {
          es: {
            singular: "Su plan"
          },
          "de-DE": {
            singular: "Dein Abonnement"
          },
          "fr-FR": {
            singular: "Votre abonnement"
          },
          "ja-JP": {
            singular: "あなたのプラン"
          },
          "ko-KR": {
            singular: "내 요금제"
          },
          "pt-BR": {
            singular: "Seu plano"
          },
          "zh-CN": {
            singular: "您的套餐"
          }
        }
      })
    })
  }) : null], 0);
}