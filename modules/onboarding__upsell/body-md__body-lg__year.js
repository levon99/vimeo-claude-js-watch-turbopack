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
  _v0.s(["default", 0, _v0 => {
    let {
        planData: _v1,
        modalConfig: _v2
      } = _v0,
      _v3 = (0, _v12.getPlanQuota)(_v1),
      {
        entitlements: _v4
      } = _v1.metadata,
      _v5 = _v2?.planOverrides?.[_v1.tier]?.seatCopy,
      _v6 = _v0 => (0, _v1.jsx)(_v3.Text, {
        variant: {
          base: "body-md",
          md: "body-lg",
          xl: "body-md"
        },
        children: _v0
      });
    if ((0, _v12.isRepackagingTier)(_v1.tier)) {
      let _v0 = _v4?.params?.teamSeats,
        _v1 = (0, _v9.selectStorageQuota)(_v4?.params ?? {}).quantity ?? "",
        _v2 = _v4?.params?.videoStoragePeriodicQuota ?? "",
        _v3 = _v4?.params?.bandwidth?.periodicQuota ?? "",
        _v4 = _v4?.params?.bandwidth?.quotaPeriod === "year",
        _v5 = _v5 ? `${_v0} ${_v5}` : (() => {
          switch (_v1.tier) {
            case _v11.PLANS.CORE:
              return (0, _v8.translate)({
                singular: "{AMOUNT} user (up to {ADD_USERS})",
                plural: "{AMOUNT} users (up to {ADD_USERS})",
                count: _v0 ?? 0,
                replacements: {
                  AMOUNT: _v0,
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
              });
            case _v11.PLANS.PROFESSIONAL:
              return (0, _v8.translate)({
                singular: "{AMOUNT} users (up to {ADD_USERS})",
                replacements: {
                  AMOUNT: _v0,
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
              });
            case _v11.PLANS.STUDIO:
              return (0, _v8.translate)({
                singular: "{AMOUNT} users (up to {ADD_USERS})",
                replacements: {
                  AMOUNT: _v0,
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
              });
            case _v11.PLANS.PRODUCTION:
              return (0, _v8.translate)({
                singular: "{AMOUNT} users (up to {ADD_USERS})",
                replacements: {
                  AMOUNT: _v0,
                  ADD_USERS: (0, _v8.translate)({
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
              });
            default:
              return (0, _v8.translate)({
                singular: "{AMOUNT} user",
                plural: "{AMOUNT} users",
                count: _v0 ?? 0,
                replacements: {
                  AMOUNT: _v0
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
          }
        })(),
        _v6 = [{
          icon: (0, _v1.jsx)(_v6.Users, {
            h: {
              base: (0, _v2.rem)(16),
              md: (0, _v2.rem)(20),
              xl: (0, _v2.rem)(16)
            },
            w: {
              base: (0, _v2.rem)(16),
              md: (0, _v2.rem)(20),
              xl: (0, _v2.rem)(16)
            }
          }),
          value: _v5
        }, {
          icon: (0, _v1.jsx)(_v5.Database, {
            h: {
              base: (0, _v2.rem)(16),
              md: (0, _v2.rem)(20),
              xl: (0, _v2.rem)(16)
            },
            w: {
              base: (0, _v2.rem)(16),
              md: (0, _v2.rem)(20),
              xl: (0, _v2.rem)(16)
            }
          }),
          value: (0, _v8.translate)({
            singular: "{AMOUNT} managed storage for embeddable and non-Public videos",
            replacements: {
              AMOUNT: _v1
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
          })
        }, ...(_v1.tier === _v11.PLANS.CREATOR ? [{
          icon: (0, _v1.jsx)(_v5.Database, {
            h: {
              base: (0, _v2.rem)(16),
              md: (0, _v2.rem)(20),
              xl: (0, _v2.rem)(16)
            },
            w: {
              base: (0, _v2.rem)(16),
              md: (0, _v2.rem)(20),
              xl: (0, _v2.rem)(16)
            }
          }),
          value: (0, _v8.translate)({
            singular: "{AMOUNT} total storage (including public, non-embedded videos)",
            replacements: {
              AMOUNT: _v2
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
        }] : []), {
          icon: (0, _v1.jsx)(_v4.Speedometer, {
            h: {
              base: (0, _v2.rem)(16),
              md: (0, _v2.rem)(20),
              xl: (0, _v2.rem)(16)
            },
            w: {
              base: (0, _v2.rem)(16),
              md: (0, _v2.rem)(20),
              xl: (0, _v2.rem)(16)
            }
          }),
          value: _v4 ? (0, _v8.translate)({
            singular: "{AMOUNT} yearly bandwidth",
            replacements: {
              AMOUNT: _v3
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
          }) : (0, _v8.translate)({
            singular: "{AMOUNT} monthly bandwidth",
            replacements: {
              AMOUNT: _v3
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
        }];
      return (0, _v1.jsx)(_v10.PlanQuotaContainer, {
        children: (0, _v1.jsx)(_v10.StorageQuotaContainer, {
          children: _v6.map((_v0, _v1) => (0, _v1.jsxs)(_v10.StyledRow, {
            children: [(0, _v1.jsx)("div", {
              children: _v0.icon
            }), _v6(_v0.value)]
          }, `${_v1.tier}-quota-${_v1}`))
        })
      });
    }
    if (!_v3) return null;
    let {
        getSeatCount: _v7,
        getVideoCount: _v8,
        getStorageQuota: _v9,
        getBandwidth: _v10
      } = _v3,
      _v11 = _v4?.params?.videoStorageQuotaUnit === "video_size";
    return (0, _v1.jsx)(_v10.PlanQuotaContainer, {
      children: (0, _v1.jsxs)(_v10.StorageQuotaContainer, {
        children: [(0, _v1.jsxs)(_v10.StyledRow, {
          children: [(0, _v1.jsx)("div", {
            children: (0, _v1.jsx)(_v6.Users, {
              h: {
                base: (0, _v2.rem)(16),
                md: (0, _v2.rem)(20),
                xl: (0, _v2.rem)(16)
              },
              w: {
                base: (0, _v2.rem)(16),
                md: (0, _v2.rem)(20),
                xl: (0, _v2.rem)(16)
              }
            })
          }), (0, _v1.jsx)(_v3.Text, {
            variant: {
              base: "body-md",
              md: "body-lg",
              xl: "body-md"
            },
            children: _v5 ? `${_v4?.params?.teamSeats} ${_v5}` : _v7(_v4?.params?.teamSeats, !0)
          })]
        }), (0, _v1.jsxs)(_v10.StyledRow, {
          children: [_v11 ? (0, _v1.jsx)(_v5.Database, {
            h: {
              base: (0, _v2.rem)(16),
              md: (0, _v2.rem)(20),
              xl: (0, _v2.rem)(16)
            },
            w: {
              base: (0, _v2.rem)(16),
              md: (0, _v2.rem)(20),
              xl: (0, _v2.rem)(16)
            }
          }) : (0, _v1.jsx)(_v7.VideosStack, {
            h: {
              base: (0, _v2.rem)(16),
              md: (0, _v2.rem)(20),
              xl: (0, _v2.rem)(16)
            },
            w: {
              base: (0, _v2.rem)(16),
              md: (0, _v2.rem)(20),
              xl: (0, _v2.rem)(16)
            }
          }), _v6(_v11 ? _v9(_v4?.params?.videoStoragePeriodicQuota) : _v8(_v4?.params?.videoStoragePeriodicQuota))]
        }), _v10 && _v1.metadata.isBandwidthProduct && (0, _v1.jsxs)(_v10.StyledRow, {
          children: [(0, _v1.jsx)("div", {
            children: (0, _v1.jsx)(_v4.Speedometer, {
              h: {
                base: (0, _v2.rem)(16),
                md: (0, _v2.rem)(20),
                xl: (0, _v2.rem)(16)
              },
              w: {
                base: (0, _v2.rem)(16),
                md: (0, _v2.rem)(20),
                xl: (0, _v2.rem)(16)
              }
            })
          }), _v6(_v10(_v4?.params?.bandwidth?.periodicQuota))]
        })]
      })
    });
  }]);
}