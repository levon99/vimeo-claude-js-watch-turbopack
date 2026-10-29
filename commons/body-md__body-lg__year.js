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
  _v0.s(["default", 0, _v0 => {
    let {
        planData: _v1,
        modalConfig: _v2
      } = _v0,
      _v3 = (0, _v13.getPlanQuota)(_v1),
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
    if ((0, _v13.isRepackagingTier)(_v1.tier)) {
      let _v0 = _v4?.params?.teamSeats,
        _v1 = (0, _v10.selectStorageQuota)(_v4?.params ?? {}).quantity ?? "",
        _v2 = _v4?.params?.bandwidth?.periodicQuota ?? "",
        _v3 = _v4?.params?.bandwidth?.quotaPeriod === "year",
        _v4 = _v5 ? `${_v0} ${_v5}` : (() => {
          switch (_v1.tier) {
            case _v12.PLANS.PROFESSIONAL:
              return (0, _v9.translate)({
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
            case _v12.PLANS.STUDIO:
              return (0, _v9.translate)({
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
            case _v12.PLANS.PRODUCTION:
              return (0, _v9.translate)({
                singular: "{AMOUNT} users (up to {ADD_USERS})",
                replacements: {
                  AMOUNT: _v0,
                  ADD_USERS: (0, _v9.translate)({
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
              return (0, _v9.translate)({
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
        _v5 = [{
          icon: (0, _v1.jsx)(_v7.Users, {
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
          value: _v4
        }, ...(_v1.tier === _v12.PLANS.CREATOR ? [{
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
          value: (0, _v9.translate)({
            singular: "Unlimited public storage and bandwidth",
            dictionary: {
              es: {
                singular: "Almacenamiento y ancho de banda públicos ilimitados"
              },
              "de-DE": {
                singular: "Unbegrenzter öffentlicher Speicherplatz und Bandbreite"
              },
              "fr-FR": {
                singular: "Stockage public illimité et bande passante illimitée"
              },
              "ja-JP": {
                singular: "無制限の公開ストレージと帯域幅"
              },
              "ko-KR": {
                singular: "공개 저장 공간 및 대역폭 무제한"
              },
              "pt-BR": {
                singular: "Armazenamento público e largura de banda ilimitados"
              },
              "zh-CN": {
                singular: "无限公共存储和带宽"
              }
            }
          })
        }] : []), {
          icon: (0, _v1.jsx)(_v6.ManagedStorage, {
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
          value: (0, _v9.translate)({
            singular: "{AMOUNT} managed storage",
            replacements: {
              AMOUNT: _v1
            },
            dictionary: {
              es: {
                singular: "{AMOUNT} de almacenamiento gestionado"
              },
              "de-DE": {
                singular: "{AMOUNT} verwalteter Speicherplatz"
              },
              "fr-FR": {
                singular: "{AMOUNT} de stockage géré"
              },
              "ja-JP": {
                singular: "{AMOUNT} 管理対象ストレージ"
              },
              "ko-KR": {
                singular: "{AMOUNT} 관리형 저장소"
              },
              "pt-BR": {
                singular: "{AMOUNT} de armazenamento gerenciado"
              },
              "zh-CN": {
                singular: "{AMOUNT} 托管存储"
              }
            }
          })
        }, {
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
          value: _v3 ? (0, _v9.translate)({
            singular: "{AMOUNT}/yr managed bandwidth",
            replacements: {
              AMOUNT: _v2
            },
            dictionary: {
              es: {
                singular: "{AMOUNT}/yr ancho de banda gestionado"
              },
              "de-DE": {
                singular: "{AMOUNT}/yr verwaltete Bandbreite"
              },
              "fr-FR": {
                singular: "{AMOUNT}/yr de bande passante gérée"
              },
              "ja-JP": {
                singular: "{AMOUNT}/yr 管理対象帯域幅"
              },
              "ko-KR": {
                singular: "{AMOUNT}/yr 관리형 대역폭"
              },
              "pt-BR": {
                singular: "{AMOUNT}/ano de largura de banda gerenciada"
              },
              "zh-CN": {
                singular: "{AMOUNT}/yr 托管带宽"
              }
            }
          }) : (0, _v9.translate)({
            singular: "{AMOUNT}/mo managed bandwidth",
            replacements: {
              AMOUNT: _v2
            },
            dictionary: {
              es: {
                singular: "{AMOUNT}/mo ancho de banda gestionado"
              },
              "de-DE": {
                singular: "{AMOUNT}/mo verwaltete Bandbreite"
              },
              "fr-FR": {
                singular: "{AMOUNT}/mo de bande passante gérée"
              },
              "ja-JP": {
                singular: "{AMOUNT}/mo 管理対象帯域幅"
              },
              "ko-KR": {
                singular: "{AMOUNT}/mo 관리형 대역폭"
              },
              "pt-BR": {
                singular: "{AMOUNT}/mês de largura de banda gerenciada"
              },
              "zh-CN": {
                singular: "{AMOUNT}/mo 托管带宽"
              }
            }
          })
        }];
      return (0, _v1.jsx)(_v11.PlanQuotaContainer, {
        children: (0, _v1.jsx)(_v11.StorageQuotaContainer, {
          children: _v5.map((_v0, _v1) => (0, _v1.jsxs)(_v11.StyledRow, {
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
    return (0, _v1.jsx)(_v11.PlanQuotaContainer, {
      children: (0, _v1.jsxs)(_v11.StorageQuotaContainer, {
        children: [(0, _v1.jsxs)(_v11.StyledRow, {
          children: [(0, _v1.jsx)("div", {
            children: (0, _v1.jsx)(_v7.Users, {
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
        }), (0, _v1.jsxs)(_v11.StyledRow, {
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
          }) : (0, _v1.jsx)(_v8.VideosStack, {
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
        }), _v10 && _v1.metadata.isBandwidthProduct && (0, _v1.jsxs)(_v11.StyledRow, {
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