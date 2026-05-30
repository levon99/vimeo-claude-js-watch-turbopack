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
    _v11 = _v0.i(0);
  function _v12() {
    let _v0 = (0, _v4.useRef)(null);
    return (_v0, _v1) => (_v0.current || "free" !== _v0 || 1 !== _v1 || (_v0.current = "control"), _v0.current);
  }
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  let _v23 = [{
    match: "/manage/videos/([\\w-]+)",
    route: "/manage/videos/:clipId"
  }, {
    match: "/upload/videos/([\\w-]+)",
    route: "/upload/videos/:uploadId"
  }, {
    match: "/upload/videos",
    route: "/upload/videos"
  }];
  function _v24(_v0) {
    let _v1 = _v23.find(_v0 => _v0.match(_v0.match));
    return _v1 ? _v1.route : null;
  }
  function _v25(_v0, _v1) {
    return Math.round(_v0 / _v1 * 100);
  }
  function _v26(_v0) {
    return "number" == typeof _v0 && !isNaN(_v0);
  }
  function _v27({
    percentUsed: _v0,
    linkText: _v1,
    upgradeHref: _v2,
    onUpgradeClick: _v3,
    quotaUnit: _v4
  }) {
    return (0, _v1.jsxs)(_v37, {
      children: [(0, _v1.jsx)(_v43, {
        name: (0, _v9.translate)({
          singular: "Hands raised in celebration",
          dictionary: {
            es: {
              singular: "Manos al aire en señal de festejo"
            },
            "de-DE": {
              singular: "Feierlich erhobene Hände"
            },
            "fr-FR": {
              singular: "Mains levées en signe de célébration"
            },
            "ja-JP": {
              singular: "万歳する手"
            },
            "ko-KR": {
              singular: "축하하며 들어올린 손"
            },
            "pt-BR": {
              singular: "Levante as mãos para comemorar"
            },
            "zh-CN": {
              singular: "举手庆祝"
            }
          }
        })
      }), (0, _v1.jsx)(_v44, {
        size: "4",
        children: function ({
          hasVideoCountQuota: _v0,
          isOutOfQuota: _v1
        }) {
          switch (!0) {
            case _v0 && !_v1:
              return (0, _v9.translate)({
                singular: "You've almost reached your video limit. Upgrade for more!",
                dictionary: {
                  es: {
                    singular: "Ya casi alcanzas tu límite de videos. ¡Actualiza la suscripción para obtener más!"
                  },
                  "de-DE": {
                    singular: "Du hast dein Video-Limit fast erreicht. Mit Upgrade gibt’s mehr Platz."
                  },
                  "fr-FR": {
                    singular: "Vous allez bientôt atteindre votre limite vidéo. Passez au niveau supérieur pour l'augmenter."
                  },
                  "ja-JP": {
                    singular: "動画の上限にまもなく達します。さらに多くの動画を活用するにはアップグレードしてください。"
                  },
                  "ko-KR": {
                    singular: "동영상 한도에 거의 도달했습니다. 동영상 한도를 늘리려면 업그레이드하세요!"
                  },
                  "pt-BR": {
                    singular: "Você quase atingiu seu limite de vídeo. Faça upgrade para obter mais espaço!"
                  },
                  "zh-CN": {
                    singular: "您将要达到视频限额。升级以获得更多！"
                  }
                }
              });
            case _v0 && _v1:
              return (0, _v9.translate)({
                singular: "You've reached your video limit. Upgrade for more!",
                dictionary: {
                  es: {
                    singular: "Has alcanzado tu límite de videos. ¡Actualiza la suscripción para obtener más!"
                  },
                  "de-DE": {
                    singular: "Du hast dein Video-Limit erreicht. Mit Upgrade gibt’s mehr Platz."
                  },
                  "fr-FR": {
                    singular: "Vous avez atteint votre limite vidéo. Passez au niveau supérieur pour l'augmenter."
                  },
                  "ja-JP": {
                    singular: "動画の上限に達しました。さらに多くの動画を活用するにはアップグレードしてください。"
                  },
                  "ko-KR": {
                    singular: "동영상 한도에 도달했습니다. 동영상 한도를 늘리려면 업그레이드하세요!"
                  },
                  "pt-BR": {
                    singular: "Você atingiu seu limite de vídeo. Faça upgrade para obter mais espaço!"
                  },
                  "zh-CN": {
                    singular: "您已达到视频限制。升级获得更多空间！"
                  }
                }
              });
            case !_v0 && !_v1:
              return (0, _v9.translate)({
                singular: "You are almost out of space! Upgrade for more.",
                dictionary: {
                  es: {
                    singular: "¡Ya casi no tienes espacio! Actualiza la suscripción para obtener más."
                  },
                  "de-DE": {
                    singular: "Du hast fast keinen Speicherplatz mehr! Mit Upgrade gibt’s mehr Platz."
                  },
                  "fr-FR": {
                    singular: "Il ne vous reste presque plus d'espace de stockage ! Passez au niveau supérieur pour en obtenir plus."
                  },
                  "ja-JP": {
                    singular: "ストレージ容量がまもなくいっぱいになります。より大きな容量スペースを確保するには、アップグレードしてください。"
                  },
                  "ko-KR": {
                    singular: "공간이 거의 남지 않았습니다! 공간을 늘리려면 업그레이드하세요."
                  },
                  "pt-BR": {
                    singular: "Você está quase sem espaço! Faça upgrade para obter mais espaço."
                  },
                  "zh-CN": {
                    singular: "您的空间不足！升级获得更多空间。"
                  }
                }
              });
            default:
              return (0, _v9.translate)({
                singular: "You are out of space! Upgrade for more.",
                dictionary: {
                  es: {
                    singular: "¡No tienes espacio! Actualiza la suscripción para obtener más."
                  },
                  "de-DE": {
                    singular: "Du hast keinen Speicherplatz mehr! Mit Upgrade gibt’s mehr Platz."
                  },
                  "fr-FR": {
                    singular: "Il ne vous reste plus d'espace de stockage ! Passez au niveau supérieur pour en obtenir plus."
                  },
                  "ja-JP": {
                    singular: "ストレージの空き容量が足りません。より大きな容量スペースを確保するには、アップグレードしてください。"
                  },
                  "ko-KR": {
                    singular: "공간이 부족합니다! 공간을 늘리려면 업그레이드하세요."
                  },
                  "pt-BR": {
                    singular: "Você está sem espaço! Faça upgrade para obter mais espaço."
                  },
                  "zh-CN": {
                    singular: "您空间不足！升级获得更多空间。"
                  }
                }
              });
          }
        }({
          hasVideoCountQuota: "video_count" === _v4,
          isOutOfQuota: _v0 >= 100
        })
      }), (0, _v1.jsx)(_v42, {
        onClick: _v3,
        variant: "minimal",
        element: "a",
        href: _v2,
        pill: !0,
        children: _v1
      })]
    });
  }
  let _v28 = (_v0, _v1) => ("video_size" === _v1 ? (0, _v22.bytesToSize)(_v0) : _v0).toString();
  function _v29({
    accountType: _v0,
    capabilities: {
      hasLivePremium: _v1,
      hasEnterprise: _v2,
      hasMonthlyBilling: _v3,
      hasTotalStorageCap: _v4
    },
    uploadQuota: _v5,
    userInitiated: _v6,
    showing: _v7
  }) {
    let _v8 = _v12(),
      {
        lifetime: _v9,
        periodic: _v10,
        space: _v11
      } = _v5,
      _v12 = null != _v5.restricted,
      _v13 = _v12 ? _v5.restricted.used : _v11.used,
      _v14 = _v12 ? _v5.restricted.max : _v11.max,
      _v15 = _v10.period ?? "week",
      _v16 = _v12 ? _v5.restricted.unit ?? "video_size" : _v11.unit ?? "video_size",
      _v17 = _v14 ? (_v13 ?? 0) / _v14 : 0,
      _v18 = Math.round(100 * _v17),
      _v19 = "variant" === (_v0 ? _v8(_v0, _v13 ?? 0) : null) || _v17 > 2 / 3,
      _v20 = "video_size" === _v16 && _v18 >= 95 ? "storage_limit" : "quota",
      _v21 = "video_count" === _v16,
      _v22 = (0, _v4.useMemo)(() => ({
        product: "Upload",
        location: _v17 >= 1 ? "at_limit_quota_widget" : _v19 ? "approaching_limit_quota_widget" : "quota_widget",
        upsell: _v12 || "lifetime" === _v11.showing ? "total_quota" : "weekly_quota",
        weekly_quota_percent_used: _v12 ? null : _v26(_v10.used) && _v26(_v10.max) ? _v25(_v10.used, _v10.max) : null,
        total_quota_percent_used: _v12 ? _v26(_v13) && _v26(_v14) ? _v25(_v13, _v14) : null : _v26(_v9.used) && _v26(_v9.max) ? _v25(_v9.used, _v9.max) : null
      }), [_v14, _v13, _v9.max, _v9.used, _v10.max, _v10.used, _v17, _v19, _v11.showing, _v12]),
      _v23 = (0, _v4.useMemo)(() => ({
        text: _v19 ? (0, _v9.translate)({
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
        }) : _v21 ? (0, _v9.translate)({
          singular: "Upgrade for more videos",
          dictionary: {
            es: {
              singular: "Actualiza la suscripción para obtener más videos"
            },
            "de-DE": {
              singular: "Mit einem Upgrade profitierst du von mehr Videos"
            },
            "fr-FR": {
              singular: "Passez au niveau supérieur pour plus de vidéos"
            },
            "ja-JP": {
              singular: "さらに多くの動画を活用するためにアップグレード"
            },
            "ko-KR": {
              singular: "더 많은 동영상을 사용하려면 업그레이드하세요."
            },
            "pt-BR": {
              singular: "Faça upgrade para ter mais vídeos"
            },
            "zh-CN": {
              singular: "升级即可观看更多视频"
            }
          }
        }) : (0, _v9.translate)({
          singular: "Upgrade Storage",
          dictionary: {
            es: {
              singular: "Cambiar el almacenamiento"
            },
            "de-DE": {
              singular: "Speicherplatz upgraden"
            },
            "fr-FR": {
              singular: "Obtenir plus d'espace de stockage"
            },
            "ja-JP": {
              singular: "ストレージをアップグレード"
            },
            "ko-KR": {
              singular: "저장 공간 업그레이드하기"
            },
            "pt-BR": {
              singular: "Fazer Upgrade do Armazenamento"
            },
            "zh-CN": {
              singular: "升级存储"
            }
          }
        }),
        href: (0, _v21.buildUpgradePlanUrl)({
          paywallTrigger: "quota_menu_upgrade_button",
          paywallLocation: "quota_menu",
          paywallFeature: _v20
        }, {
          paywall: "1"
        })
      }), [_v21, _v20, _v19]);
    (0, _v4.useEffect)(() => {
      if (_v7) {
        let _v0 = {
            file_size: null,
            user_initiated: _v6,
            path: window.location.pathname,
            page: _v24(window.location.pathname),
            ..._v22
          },
          _v1 = new _v6.Event("vimeo.view_quota_upsell", 2, _v0);
        _v6.BigPictureClient.sendEvent(_v1);
      }
    }, [_v22, _v7, _v6]);
    let _v24 = (0, _v4.useCallback)(() => {
        let _v0 = {
            copy: _v23.text,
            target: _v23.href,
            path: window.location.pathname,
            page: _v24(window.location.pathname) ?? "",
            ..._v22
          },
          _v1 = new _v6.Event("vimeo.click_quota_upsell", 1, _v0);
        _v6.BigPictureClient.sendEvent(_v1);
      }, [_v22, _v23]),
      _v25 = (0, _v4.useCallback)(() => {
        var _v0;
        let _v1 = new _v6.Event("vimeo.upgrade_action", 30, {
          action_type: "click",
          copy: _v23.text,
          currency: null,
          discount_offer: null,
          is_discount: null,
          is_new_pricing: null,
          loading_time: null,
          location: "storage_widget",
          page: (_v0 = window.location.pathname, /^\/upload\/videos$/.test(_v0) ? "upload_page" : "svv_manager"),
          path: window.location.pathname,
          plan_selected: null,
          price: null,
          purchase_type: null,
          target: _v23.href,
          target_path: _v23.href,
          upsell_name: "quota_meter",
          duration: null,
          feature: "quota",
          upgrade_flags: null,
          promo_code_id: null,
          device_type: null
        });
        _v6.BigPictureClient.sendEvent(_v1);
      }, [_v23]);
    return (0, _v1.jsxs)(_v30, {
      children: [_v19 && (0, _v1.jsx)(_v27, {
        percentUsed: _v18,
        linkText: _v23.text,
        upgradeHref: _v23.href,
        onUpgradeClick: _v24,
        quotaUnit: _v16
      }), (0, _v1.jsxs)(_v32, {
        children: [(0, _v1.jsx)(_v18.Text, {
          style: {
            fontSize: `${(0, _v3.rem)(20)}`
          },
          children: _v21 ? (0, _v9.translate)({
            singular: "Video usage",
            dictionary: {
              es: {
                singular: "Uso de videos"
              },
              "de-DE": {
                singular: "Videonutzung"
              },
              "fr-FR": {
                singular: "Utilisation des vidéos"
              },
              "ja-JP": {
                singular: "動画使用量"
              },
              "ko-KR": {
                singular: "동영상 사용량"
              },
              "pt-BR": {
                singular: "Uso de vídeo"
              },
              "zh-CN": {
                singular: "视频使用"
              }
            }
          }) : (0, _v9.translate)({
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
          })
        }), (0, _v1.jsx)(_v18.Text, {
          style: {
            fontSize: `${(0, _v3.rem)(20)}`
          },
          children: `${_v18}%`
        })]
      }), (0, _v1.jsx)(_v31, {
        children: (0, _v1.jsx)(_v14.Progress, {
          value: _v18 > 100 ? 100 : _v18,
          size: "md",
          colorScheme: "vimeoBlue",
          width: "100%"
        })
      }), (0, _v1.jsx)(_v35, {
        children: _v12 ? (0, _v1.jsxs)(_v31, {
          children: [(0, _v9.translate)({
            singular: "Total",
            dictionary: {
              "de-DE": {
                singular: "Insgesamt"
              },
              "ja-JP": {
                singular: "合計"
              },
              "ko-KR": {
                singular: "총계"
              },
              "zh-CN": {
                singular: "总计"
              }
            }
          }), (0, _v1.jsx)(_v36, {
            children: (0, _v1.jsx)("span", {
              children: `${_v28(_v13 ?? 0, _v16)} of ${_v28(_v14 ?? 0, _v16)}`
            })
          })]
        }) : (0, _v1.jsxs)(_v1.Fragment, {
          children: [!!_v10.max && (0, _v1.jsxs)(_v31, {
            children: [((_v0, _v1, _v2) => {
              switch (_v0) {
                case "lifetime":
                  return (0, _v9.translate)({
                    singular: "Total",
                    dictionary: {
                      "de-DE": {
                        singular: "Insgesamt"
                      },
                      "ja-JP": {
                        singular: "合計"
                      },
                      "ko-KR": {
                        singular: "총계"
                      },
                      "zh-CN": {
                        singular: "总计"
                      }
                    }
                  });
                case "year":
                  return _v1 ? (0, _v9.translate)({
                    singular: "Total",
                    dictionary: {
                      "de-DE": {
                        singular: "Insgesamt"
                      },
                      "ja-JP": {
                        singular: "合計"
                      },
                      "ko-KR": {
                        singular: "총계"
                      },
                      "zh-CN": {
                        singular: "总计"
                      }
                    }
                  }) : (0, _v9.translate)({
                    singular: "Annual",
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
                        singular: "年間"
                      },
                      "ko-KR": {
                        singular: "연간"
                      },
                      "pt-BR": {
                        singular: "Anual"
                      },
                      "zh-CN": {
                        singular: "每年"
                      }
                    }
                  });
                case "month":
                  return _v2 ? (0, _v9.translate)({
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
                        singular: "月間"
                      },
                      "ko-KR": {
                        singular: "월별"
                      },
                      "pt-BR": {
                        singular: "Mensalmente"
                      },
                      "zh-CN": {
                        singular: "每月"
                      }
                    }
                  }) : (0, _v9.translate)({
                    singular: "Total",
                    dictionary: {
                      "de-DE": {
                        singular: "Insgesamt"
                      },
                      "ja-JP": {
                        singular: "合計"
                      },
                      "ko-KR": {
                        singular: "총계"
                      },
                      "zh-CN": {
                        singular: "总计"
                      }
                    }
                  });
                default:
                  return (0, _v9.translate)({
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
                  });
              }
            })(_v15, _v3, _v4), (0, _v1.jsx)(_v36, {
              children: (0, _v1.jsx)("span", {
                children: `${_v28(_v10.used, _v16)} of ${_v28(_v10.max, _v16)}`
              })
            })]
          }), !!_v9.max && (0, _v1.jsxs)(_v31, {
            hasTotalStorageCap: _v4,
            children: [(0, _v9.translate)({
              singular: "Total",
              dictionary: {
                "de-DE": {
                  singular: "Insgesamt"
                },
                "ja-JP": {
                  singular: "合計"
                },
                "ko-KR": {
                  singular: "총계"
                },
                "zh-CN": {
                  singular: "总计"
                }
              }
            }), (0, _v1.jsx)(_v36, {
              children: (0, _v1.jsx)("span", {
                children: `${_v28(_v9.used, _v16)} of ${_v28(_v9.max, _v16)}`
              })
            })]
          })]
        })
      }), !(_v2 || _v1) && !_v19 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v34, {}), (0, _v1.jsx)(_v33, {
          children: (0, _v1.jsx)(_v20.UpgradeBadge, {
            style: {
              borderRadius: (0, _v3.rem)(8),
              height: (0, _v3.rem)(40),
              maxWidth: (0, _v3.rem)(304),
              width: "100%",
              fontSize: (0, _v3.rem)(14),
              fontWeight: 700,
              lineHeight: (0, _v3.rem)(23)
            },
            noMargin: !0,
            onClick: _v25,
            href: _v23.href,
            children: _v23.text
          })
        })]
      })]
    });
  }
  let _v30 = _v5.default.div.withConfig({
      displayName: "QuotaMenu__Container",
      componentId: "sc-c3e1a659-0"
    })`
  display: flex;
  flex-direction: column;
  font-size: ${(0, _v3.rem)(13)};
  font-weight: 500;
  width: ${(0, _v3.rem)(322)};
  color: ${({
      theme: _v0
    }) => _v0.formats.soft};
  background-color: ${({
      theme: _v0
    }) => _v0.item.bg};
  border: 1px solid
    ${({
      theme: _v0
    }) => "light" === _v0.name ? _v15.bokehTheme.colors.gray["100"] : _v15.bokehTheme.colors.gray["600"]};
  border-radius: ${(0, _v3.rem)(8)};
`,
    _v31 = _v5.default.div.withConfig({
      displayName: "QuotaMenu__Row",
      componentId: "sc-c3e1a659-1"
    })`
  display: flex;
  justify-content: space-between;
  padding: ${(0, _v3.rem)(4)} ${(0, _v3.rem)(20)};
  color: ${({
      hasTotalStorageCap: _v0,
      theme: _v1
    }) => _v0 ? _v1.elements.color5 : _v1.formats.soft};
  font-weight: ${({
      hasTotalStorageCap: _v0
    }) => _v0 && "400"};
`,
    _v32 = (0, _v5.default)(_v31).withConfig({
      displayName: "QuotaMenu__MainRow",
      componentId: "sc-c3e1a659-2"
    })`
  margin: ${(0, _v3.rem)(14)} ${(0, _v3.rem)(0)};
`,
    _v33 = (0, _v5.default)(_v31).withConfig({
      displayName: "QuotaMenu__CTARow",
      componentId: "sc-c3e1a659-3"
    })`
  margin: 0;
  padding: ${(0, _v3.rem)(8)};
`,
    _v34 = _v5.default.hr.withConfig({
      displayName: "QuotaMenu__HR",
      componentId: "sc-c3e1a659-4"
    })`
  border: none;
  border-top: ${(0, _v3.rem)(1)} solid
    ${({
      theme: _v0
    }) => "light" === _v0.name ? _v15.bokehTheme.colors.gray["100"] : _v15.bokehTheme.colors.gray["600"]};
  width: 100%;
`,
    _v35 = _v5.default.div.withConfig({
      displayName: "QuotaMenu__Column",
      componentId: "sc-c3e1a659-5"
    })`
  margin-top: ${(0, _v3.rem)(10)};
  > :last-child {
    margin-bottom: ${(0, _v3.rem)(8)};
  }
`,
    _v36 = _v5.default.span.withConfig({
      displayName: "QuotaMenu__Usage",
      componentId: "sc-c3e1a659-6"
    })`
  display: flex;
  align-items: center;
`,
    _v37 = (0, _v5.default)(_v35).withConfig({
      displayName: "QuotaMenu__UpsellContainer",
      componentId: "sc-c3e1a659-7"
    })`
  background-color: ${({
      theme: _v0
    }) => _v0.elements.bg0};
  padding: ${(0, _v3.rem)(25)} ${(0, _v3.rem)(20)};
  margin: ${(0, _v3.rem)(6)};
  border-radius: ${(0, _v3.rem)(4)};
`,
    _v38 = "#22B654",
    _v39 = "#15C1CA",
    _v40 = `linear-gradient(-270deg, ${_v38}, ${_v39}, ${_v38}, ${_v39})`,
    _v41 = _v5.keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`,
    _v42 = (0, _v5.default)(_v16.Button).withConfig({
      displayName: "QuotaMenu__UpgradeButton",
      componentId: "sc-c3e1a659-8"
    })`
  animation: ${_v41} 15s ease infinite;
  background: ${_v40};
  background-size: 300% 300%;
  color: ${_v15.bokehTheme.colors.white};
  margin-top: ${(0, _v3.rem)(20)};
  text-decoration: none;
  width: 100%;

  &:hover:not(:active),
  &:active {
    background: ${_v40};
    background-size: 300% 300%;
  }
`,
    _v43 = (0, _v5.default)(function (_v0) {
      return _v4.default.createElement("svg", (0, _v17.c)({
        viewBox: "0 0 99 51"
      }, _v0), _v4.default.createElement("path", {
        d: "M91 3h3v11h-3zM82 40h3v11h-3zM4 18h3v11H4z"
      }), _v4.default.createElement("path", {
        d: "M87 7h11v3H87zM78 44h11v3H78zM0 22h11v3H0z"
      }), _v4.default.createElement("g", null, _v4.default.createElement("path", {
        d: "M32.661 0v7.648h-7.83v7.647H17V48h48.339v-7.648h7.83V35.61H81V0H32.661zm44.574 31.933H73.17V7.648H36.426V3.677h40.81v28.256zm-7.83-.313v5.037h-4.066V15.295H28.595v-3.97h40.81V31.62zm-7.83 5v7.685h-40.81V18.972h40.809V36.62z"
      }), _v4.default.createElement("path", {
        d: "M33.941 38.514v1.838h23.191v-3.676h-23.19v1.838zM25.227 40.83l5.044-2.849-5.044-2.85v5.7z"
      })));
    }).withConfig({
      displayName: "QuotaMenu__UpsellIllustration",
      componentId: "sc-c3e1a659-9"
    })`
  width: ${(0, _v3.rem)(120)};
  height: ${(0, _v3.rem)(52)};
  margin: 0 auto;
  display: block;
  margin-bottom: ${(0, _v3.rem)(25)};

  path {
    fill: ${({
      theme: _v0
    }) => _v0.content.color};
  }
`,
    _v44 = (0, _v5.default)(_v19.Header).withConfig({
      displayName: "QuotaMenu__Header",
      componentId: "sc-c3e1a659-10"
    })`
  text-align: center;
`;
  function _v45({
    used: _v0 = 0,
    max: _v1 = 100,
    period: _v2 = "week",
    unit: _v3 = "video_size",
    mood: _v4 = "safe",
    textVariant: _v5 = "percent",
    onClick: _v6,
    className: _v7
  }) {
    let _v8 = _v0 / _v1,
      _v9 = Math.round(100 * _v8),
      _v10 = (0, _v4.useContext)(_v5.ThemeContext),
      _v11 = {
        StoragePill: {
          bg: _v10?.elements?.bg1,
          fg: _v10?.elements?.color4,
          border: _v10?.elements?.color4,
          hoverBg: _v10?.elements?.bg1,
          hoverBorder: _v10?.elements?.color4,
          numberFg: _v10?.formats?.primary
        }
      };
    switch (_v4) {
      case "safe":
        _v11 = {
          StoragePill: {
            bg: _v10?.elements?.bg1,
            fg: _v10?.elements?.color4,
            border: _v10?.elements?.color4,
            hoverBg: _v10?.elements?.bg1,
            hoverBorder: _v10?.elements?.color4,
            numberFg: _v10?.formats?.primary
          }
        };
        break;
      case "warn":
        _v11 = {
          StoragePill: {
            bg: _v10?.name === "dark" ? "rgba(55, 37, 0, 1)" : "rgba(255, 247, 232, 1)",
            fg: _v10?.elements?.color4,
            border: "rgba(255, 178, 30, 1)",
            hoverBg: _v10?.name === "dark" ? "rgba(55, 37, 0, 1)" : "rgba(255, 247, 232, 1)",
            hoverBorder: "rgba(255, 178, 30, 1)",
            numberFg: "rgba(255, 178, 30, 1)"
          }
        };
        break;
      case "limit":
        _v11 = {
          StoragePill: {
            bg: _v10?.name === "dark" ? "rgba(56, 9, 9, 1)" : "rgba(255, 237, 237, 1)",
            fg: _v10?.elements?.color4,
            border: "rgba(226, 43, 18, 1)",
            hoverBg: _v10?.name === "dark" ? "rgba(56, 9, 9, 1)" : "rgba(255, 237, 237, 1)",
            hoverBorder: "rgba(226, 43, 18, 1)",
            numberFg: "rgba(226, 43, 18, 1)"
          }
        };
    }
    return (0, _v1.jsx)(_v5.ThemeProvider, {
      theme: _v11,
      children: (0, _v1.jsx)(_v48, {
        size: "sm",
        bounce: "warn" === _v4 || "limit" === _v4 || "safe" === _v4 && _v8 > 2 / 3 && _v8 < 3 / 4,
        format: "secondary",
        variant: "outline",
        "aria-label": (({
          period: _v0,
          percentUsed: _v1
        }) => {
          switch (_v0) {
            case "lifetime":
              return (0, _v9.translate)({
                singular: "{percentUsed}% of lifetime quota used",
                replacements: {
                  percentUsed: _v1
                },
                dictionary: {
                  es: {
                    singular: "{percentUsed} % de la cuota de por vida utilizada"
                  },
                  "de-DE": {
                    singular: "{percentUsed} % des lebenslangen Kontingents verbraucht"
                  },
                  "fr-FR": {
                    singular: "{percentUsed} % du quota à vie utilisé"
                  },
                  "ja-JP": {
                    singular: "使用済みの生涯アップロード容量 {percentUsed}%"
                  },
                  "ko-KR": {
                    singular: "평생 한도의 {percentUsed}% 사용됨"
                  },
                  "pt-BR": {
                    singular: "{percentUsed}% da cota usada do período de vigência"
                  },
                  "zh-CN": {
                    singular: "终生配额已使用 {percentUsed}%"
                  }
                }
              });
            case "year":
              return (0, _v9.translate)({
                singular: "{percentUsed}% of annual quota used",
                replacements: {
                  percentUsed: _v1
                },
                dictionary: {
                  es: {
                    singular: "{percentUsed} % de la cuota anual utilizada"
                  },
                  "de-DE": {
                    singular: "{percentUsed} % des Jahreskontingents verbraucht"
                  },
                  "fr-FR": {
                    singular: "{percentUsed} % du quota annuel utilisé"
                  },
                  "ja-JP": {
                    singular: "使用済みの年間アップロード容量 {percentUsed}%"
                  },
                  "ko-KR": {
                    singular: "연간 한도의 {percentUsed}% 사용됨"
                  },
                  "pt-BR": {
                    singular: "{percentUsed}% da cota anual usada"
                  },
                  "zh-CN": {
                    singular: "年度配额已使用 {percentUsed}%"
                  }
                }
              });
            case "month":
              return (0, _v9.translate)({
                singular: "{percentUsed}% of monthly quota used",
                replacements: {
                  percentUsed: _v1
                },
                dictionary: {
                  es: {
                    singular: "{percentUsed} % de la cuota mensual utilizada"
                  },
                  "de-DE": {
                    singular: "{percentUsed} % des Monatskontingents verbraucht"
                  },
                  "fr-FR": {
                    singular: "{percentUsed} % du quota mensuel utilisé"
                  },
                  "ja-JP": {
                    singular: "使用済みの月間アップロード容量 {percentUsed}%"
                  },
                  "ko-KR": {
                    singular: "월간 한도의 {percentUsed}% 사용됨"
                  },
                  "pt-BR": {
                    singular: "{percentUsed}% da cota mensal usada"
                  },
                  "zh-CN": {
                    singular: "每月配额已使用 {percentUsed}%"
                  }
                }
              });
            default:
              return (0, _v9.translate)({
                singular: "{percentUsed}% of weekly quota used",
                replacements: {
                  percentUsed: _v1
                },
                dictionary: {
                  es: {
                    singular: "{percentUsed} % de la cuota semanal utilizada"
                  },
                  "de-DE": {
                    singular: "{percentUsed} % des Wochenkontingents verbraucht"
                  },
                  "fr-FR": {
                    singular: "{percentUsed} % du quota hebdomadaire utilisé"
                  },
                  "ja-JP": {
                    singular: "使用済みの週間アップロード容量 {percentUsed}%"
                  },
                  "ko-KR": {
                    singular: "주간 한도의 {percentUsed}% 사용됨"
                  },
                  "pt-BR": {
                    singular: "{percentUsed}% da cota semanal usada"
                  },
                  "zh-CN": {
                    singular: "每周配额已使用 {percentUsed}%"
                  }
                }
              });
          }
        })({
          period: _v2,
          percentUsed: _v9
        }),
        pill: !0,
        onClick: _v6,
        id: "essential-footer-storage-pill",
        className: _v7,
        children: (0, _v1.jsx)(_v18.Text, {
          style: {
            fontWeight: 500
          },
          children: ((_v0, _v1, _v2, _v3, _v4) => {
            let _v5 = Math.round(_v3 / _v4 * 100),
              _v6 = {
                percentUsed: (0, _v1.jsxs)(_v49, {
                  children: [_v5, "%"]
                }, "used-text")
              };
            if ("video_count" === _v1) {
              if ("ratio" === _v0) switch (_v2) {
                case "week":
                  return (0, _v9.translate)({
                    singular: "Weekly videos {STYLE}{used}/{max}{/STYLE}",
                    replacements: {
                      used: _v3,
                      max: _v4,
                      STYLE: _v0 => (0, _v1.jsx)(_v49, {
                        children: _v0
                      }, "used-text")
                    },
                    dictionary: {
                      es: {
                        singular: "{STYLE}{used}/{max}{/STYLE} videos semanales"
                      },
                      "de-DE": {
                        singular: "Wöchentliche Videos {STYLE}{used}/{max}{/STYLE}"
                      },
                      "fr-FR": {
                        singular: "Vidéos hebdomadaires {STYLE}{used}/{max}{/STYLE}"
                      },
                      "ja-JP": {
                        singular: "週間動画 {STYLE}{used}/{max}{/STYLE}"
                      },
                      "ko-KR": {
                        singular: "주간 동영상 {STYLE}{used}/{max}{/STYLE}"
                      },
                      "pt-BR": {
                        singular: "Vídeos semanais {STYLE}{used}/{max}{/STYLE}"
                      },
                      "zh-CN": {
                        singular: "每周视频 {STYLE}{max}/{used}{/STYLE}"
                      }
                    }
                  });
                case "month":
                  return (0, _v9.translate)({
                    singular: "Monthly videos {STYLE}{used}/{max}{/STYLE}",
                    replacements: {
                      used: _v3,
                      max: _v4,
                      STYLE: _v0 => (0, _v1.jsx)(_v49, {
                        children: _v0
                      }, "used-text")
                    },
                    dictionary: {
                      es: {
                        singular: "{STYLE}{used}/{max}{/STYLE} videos mensuales"
                      },
                      "de-DE": {
                        singular: "Monatliche Videos {STYLE}{used}/{max}{/STYLE}"
                      },
                      "fr-FR": {
                        singular: "Vidéos mensuelles {STYLE}{used}/{max}{/STYLE}"
                      },
                      "ja-JP": {
                        singular: "月間動画 {STYLE}{used}/{max}{/STYLE}"
                      },
                      "ko-KR": {
                        singular: "월간 동영상 {STYLE}{used}/{max}{/STYLE}"
                      },
                      "pt-BR": {
                        singular: "Vídeos mensais {STYLE}{used}/{max}{/STYLE}"
                      },
                      "zh-CN": {
                        singular: "每月视频 {STYLE}{max}/{used}{/STYLE}"
                      }
                    }
                  });
                case "year":
                  return (0, _v9.translate)({
                    singular: "Yearly videos {STYLE}{used}/{max}{/STYLE}",
                    replacements: {
                      used: _v3,
                      max: _v4,
                      STYLE: _v0 => (0, _v1.jsx)(_v49, {
                        children: _v0
                      }, "used-text")
                    },
                    dictionary: {
                      es: {
                        singular: "{STYLE}{used}/{max}{/STYLE} videos anuales"
                      },
                      "de-DE": {
                        singular: "Jährliche Videos {STYLE}{used}/{max}{/STYLE}"
                      },
                      "fr-FR": {
                        singular: "Vidéos annuelles {STYLE}{used}/{max}{/STYLE}"
                      },
                      "ja-JP": {
                        singular: "年間動画 {STYLE}{used}/{max}{/STYLE}"
                      },
                      "ko-KR": {
                        singular: "연간 동영상 {STYLE}{used}/{max}{/STYLE}"
                      },
                      "pt-BR": {
                        singular: "Vídeos por ano {STYLE}{used}{max}{/STYLE}"
                      },
                      "zh-CN": {
                        singular: "每年视频 {STYLE}{max}/{used}{/STYLE}"
                      }
                    }
                  });
                case "lifetime":
                  return (0, _v9.translate)({
                    singular: "Total videos {STYLE}{used}/{max}{/STYLE}",
                    replacements: {
                      used: _v3,
                      max: _v4,
                      STYLE: _v0 => (0, _v1.jsx)(_v49, {
                        children: _v0
                      }, "used-text")
                    },
                    dictionary: {
                      es: {
                        singular: "Videos totales {STYLE}{used}/{max}{/STYLE}"
                      },
                      "de-DE": {
                        singular: "Videos insgesamt {STYLE}{used}/{max}{/STYLE}"
                      },
                      "fr-FR": {
                        singular: "Total des vidéos {STYLE}{used}/{max}{/STYLE}"
                      },
                      "ja-JP": {
                        singular: "総動画数 {STYLE}{used}/{max}{/STYLE}"
                      },
                      "ko-KR": {
                        singular: "총 동영상 {STYLE}{used}/{max}{/STYLE}"
                      },
                      "pt-BR": {
                        singular: "Total de vídeos {STYLE}{used}/{max}{/STYLE}"
                      },
                      "zh-CN": {
                        singular: "视频总数 {STYLE}{used}/{max}{/STYLE}"
                      }
                    }
                  });
              }
              return (0, _v9.translate)({
                singular: "Video usage {percentUsed}",
                replacements: _v6,
                dictionary: {
                  es: {
                    singular: "Uso de videos {percentUsed}"
                  },
                  "de-DE": {
                    singular: "Videonutzung: {percentUsed}"
                  },
                  "fr-FR": {
                    singular: "Utilisation des vidéos {percentUsed}"
                  },
                  "ja-JP": {
                    singular: "動画使用量 {percentUsed}"
                  },
                  "ko-KR": {
                    singular: "동영상 사용량 {percentUsed}"
                  },
                  "pt-BR": {
                    singular: "{percentUsed}"
                  },
                  "zh-CN": {
                    singular: "视频使用 {percentUsed}"
                  }
                }
              });
            }
            return "ratio" === _v0 ? (0, _v9.translate)({
              singular: "Storage {STYLE}{used}/{max}{/STYLE}",
              replacements: {
                used: (0, _v22.bytesToSize)(_v3),
                max: (0, _v22.bytesToSize)(_v4),
                STYLE: _v0 => (0, _v1.jsx)(_v49, {
                  children: _v0
                }, "used-text")
              },
              dictionary: {
                es: {
                  singular: "{STYLE}{used}/{max}{/STYLE} de almacenamiento"
                },
                "de-DE": {
                  singular: "Speicher {STYLE}{used}/{max}{/STYLE}"
                },
                "fr-FR": {
                  singular: "Stockage {STYLE}{used}/{max}{/STYLE}"
                },
                "ja-JP": {
                  singular: "ストレージ {STYLE}{used}/{max}{/STYLE}"
                },
                "ko-KR": {
                  singular: "저장 공간 {STYLE}{used}/{max}{/STYLE}"
                },
                "pt-BR": {
                  singular: "Espaço de armazenamento {STYLE}{used}/{max}{/STYLE}"
                },
                "zh-CN": {
                  singular: "存储空间 {STYLE}{used}/{max}{/STYLE}"
                }
              }
            }) : (0, _v9.translate)({
              singular: "Storage {percentUsed}",
              replacements: _v6,
              dictionary: {
                es: {
                  singular: "Almacenamiento {percentUsed}"
                },
                "de-DE": {
                  singular: "Speicherplatz: {percentUsed}"
                },
                "fr-FR": {
                  singular: "Stockage {percentUsed}"
                },
                "ja-JP": {
                  singular: "ストレージ {percentUsed}"
                },
                "ko-KR": {
                  singular: "저장 공간 {percentUsed}"
                },
                "pt-BR": {
                  singular: "{percentUsed} de espaço de armazenamento"
                },
                "zh-CN": {
                  singular: "存储空间 {percentUsed}"
                }
              }
            });
          })(_v5, _v3, _v2, _v0, _v1)
        })
      })
    });
  }
  let _v46 = _v5.keyframes`
  0%, 100% {
    transform: translate(0);
  }
  33% {
    transform: translateY(${(0, _v3.rem)(5)});
  }
  66% {
    transform: translateY(${(0, _v3.rem)(-12)});
  }
`,
    _v47 = _v5.css`
  animation: ${_v46} 600ms ease-out 2s 1;
`,
    _v48 = (0, _v5.default)(_v16.Button).withConfig({
      displayName: "StoragePill__Button",
      componentId: "sc-76c897a2-0"
    })`
  margin-right: ${(0, _v3.rem)(7)};
  background-color: ${({
      theme: _v0
    }) => _v0.StoragePill.bg};
  color: ${({
      theme: _v0
    }) => _v0.StoragePill.fg};
  border: ${({
      theme: _v0
    }) => `1px solid ${_v0.StoragePill.border}`};
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0.1875rem 0.375rem 0px;
  ${({
      bounce: _v0
    }) => _v0 ? _v47 : null};
  padding: ${(0, _v3.rem)(2)} ${(0, _v3.rem)(14)};

  &:hover {
    background-color: ${({
      theme: _v0
    }) => _v0.StoragePill.hoverBg};
    border: ${({
      theme: _v0
    }) => `1px solid ${_v0.StoragePill.hoverBorder}`};
    box-shadow: rgba(0, 0, 0, 0.07) 0px 0.1875rem 0.375rem 0px;
    transform: translateY(-1px) scale(1.001);
  }
`,
    _v49 = (0, _v5.default)(_v18.Text).withConfig({
      displayName: "StoragePill__StyledText",
      componentId: "sc-76c897a2-1"
    })`
  color: ${({
      theme: _v0
    }) => _v0.StoragePill.numberFg};
  font-weight: 800;
`,
    _v50 = (0, _v2.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v51 = (_v0, _v1) => {
      _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo.upgrade_action", 19, {
        action_type: "click",
        page: _v0,
        location: "storage_widget",
        target: "modal",
        upsell_name: _v1,
        copy: "video_usage",
        feature: "quota",
        currency: null,
        device_type: null,
        discount_offer: null,
        duration: null,
        is_discount: null,
        is_new_pricing: null,
        loading_time: null,
        path: null,
        plan_selected: null,
        price: null,
        promo_code_id: null,
        purchase_type: null,
        target_path: null,
        upgrade_flags: null
      }));
    },
    _v52 = (0, _v5.default)(_v10.PopOver).withConfig({
      displayName: "EssentialQuotaMenu__StyledPopOver",
      componentId: "sc-9da32818-0"
    })`
  border-radius: ${(0, _v3.rem)(8)};
`;
  _v0.s(["EssentialQuotaMenu", 0, ({
    user: _v0,
    jwt: _v1,
    apiUrl: _v2,
    teamOwnersId: _v3,
    enableQuotaMenu: _v4 = !0,
    onOpenQuotaMenu: _v5,
    className: _v6
  }) => {
    let _v7 = _v12(),
      _v8 = (0, _v4.useRef)(null),
      [_v9, _v10] = (0, _v4.useState)(),
      [_v11, _v12] = (0, _v4.useState)(!1),
      [_v13, _v14] = (0, _v4.useState)(!1),
      _v15 = (0, _v4.useCallback)(_v0 => {
        _v10(_v0), _v0 && _v5?.();
      }, [_v5]),
      {
        capabilities: _v16,
        ready: _v17
      } = (0, _v7.useCapability)(["hasLivePremium", "hasEnterprise", "hasTotalStorageCap", "hasMonthlyBilling"], _v3),
      _v18 = _v3 ?? _v0?.id,
      {
        data: _v19
      } = (0, _v8.useGetUser)(() => _v18 && _v4 ? {
        where: {
          userId: _v18
        },
        select: ["membership.type", "uploadQuota"],
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.14"
        }
      } : null),
      _v20 = _v19?.uploadQuota,
      _v21 = _v19?.membership?.type,
      _v22 = _v20?.restricted != null,
      _v23 = _v22 ? _v20.restricted.used : _v20?.space?.used,
      _v24 = _v22 ? _v20.restricted.max : _v20?.space?.max,
      _v25 = _v22 ? _v20.restricted.unit ?? "video_size" : _v20?.space?.unit,
      _v26 = (0, _v13.getPageName)(window.location.pathname),
      _v27 = (0, _v4.useMemo)(() => {
        if (_v25 && null != _v24 && _v24 >= 0 && void 0 !== _v23 && _v23 >= 0) {
          if ("video_count" === _v25 && _v23 >= 0 && _v24 >= 0) {
            if (_v24 <= 10) {
              if (_v24 - _v23 <= 1 || _v23 / _v24 >= .7) return "limit";
              if (_v23 / _v24 >= .5) return "warn";
            }
            if (_v24 > 10) {
              if (_v23 / _v24 >= .9) return "limit";
              if (_v23 / _v24 >= 2 / 3) return "warn";
            }
            return "safe";
          }
          if ("video_size" === _v25 && _v23 >= 0 && _v24 >= 0) {
            if (_v23 / _v24 >= .9) return "limit";
            if (_v23 / _v24 >= 2 / 3) return "warn";
          }
        }
        return "safe";
      }, [_v23, _v24, _v25]),
      _v28 = _v24 && _v24 > 0 && void 0 !== _v23 ? _v23 / _v24 : 0,
      _v29 = "video_size" === _v25 && _v28 >= .95,
      _v30 = (0, _v4.useMemo)(() => {
        let _v0 = {
          mkcCode: "109339"
        };
        if (_v20 && ("limit" === _v27 || "warn" === _v27)) if (null != _v24 && void 0 !== _v23 && _v23 >= _v24) return {
          headerText: (0, _v9.translate)({
            singular: "You’ve reached the video limit",
            dictionary: {
              es: {
                singular: "Ha alcanzado el límite de videos"
              },
              "de-DE": {
                singular: "Du hast das Video-Limit erreicht"
              },
              "fr-FR": {
                singular: "Vous avez atteint la limite vidéo"
              },
              "ja-JP": {
                singular: "動画の上限に達しました"
              },
              "ko-KR": {
                singular: "동영상 한도에 도달했습니다"
              },
              "pt-BR": {
                singular: "Você atingiu o limite de vídeos"
              },
              "zh-CN": {
                singular: "您已达到视频限制"
              }
            }
          }),
          subHeaderText: (0, _v9.translate)({
            singular: "To get more videos, upgrade your account",
            dictionary: {
              es: {
                singular: "Para obtener más videos, actualice su cuenta"
              },
              "de-DE": {
                singular: "Nimm ein Upgrade vor, um weitere Videos hochzuladen"
              },
              "fr-FR": {
                singular: "Pour obtenir plus de vidéos, mettez votre compte à niveau."
              },
              "ja-JP": {
                singular: "動画をさらに視聴するには、アカウントをアップグレードしてください"
              },
              "ko-KR": {
                singular: "더 많은 동영상을 보려면 계정을 업그레이드하세요"
              },
              "pt-BR": {
                singular: "Para ter direito a mais vídeos, faça upgrade da sua conta"
              },
              "zh-CN": {
                singular: "要上传更多视频，请升级您的账户"
              }
            }
          }),
          ..._v0
        };else return {
          headerText: (0, _v9.translate)({
            singular: "You’ve almost reached the video limit",
            dictionary: {
              es: {
                singular: "Casi alcanza el límite de videos"
              },
              "de-DE": {
                singular: "Du hast dein Video-Limit fast erreicht"
              },
              "fr-FR": {
                singular: "Vous allez bientôt atteindre la limite vidéo"
              },
              "ja-JP": {
                singular: "動画の上限にまもなく達します"
              },
              "ko-KR": {
                singular: "동영상 한도에 거의 도달했습니다."
              },
              "pt-BR": {
                singular: "Você está prestes a atingir o limite de vídeos"
              },
              "zh-CN": {
                singular: "您即将达到视频限制"
              }
            }
          }),
          subHeaderText: (0, _v9.translate)({
            singular: "To increase your video limit, upgrade your account",
            dictionary: {
              es: {
                singular: "Para aumentar el límite de videos, actualiza tu cuenta"
              },
              "de-DE": {
                singular: "Nimm ein Upgrade für dein Konto vor, um dein Videolimit zu erhöhen."
              },
              "fr-FR": {
                singular: "Pour augmenter votre limite vidéo, mettez votre compte à niveau"
              },
              "ja-JP": {
                singular: "動画のアップロード上限を増やすには、アカウントをアップグレードしてください"
              },
              "ko-KR": {
                singular: "동영상 한도를 늘리려면 계정을 업그레이드하세요."
              },
              "pt-BR": {
                singular: "Para aumentar o limite de vídeo, faça o upgrade de sua conta"
              },
              "zh-CN": {
                singular: "要提高视频限制，请升级您的账户"
              }
            }
          }),
          ..._v0
        };
        return _v0;
      }, [_v20, _v27, _v24, _v23]);
    (0, _v4.useEffect)(() => {
      if (void 0 !== _v9 || "/upload/videos" !== window.location.pathname || "safe" !== _v27 || !_v20) return;
      let _v0 = _v24 && void 0 !== _v23 ? _v23 / _v24 : 0;
      _v15("variant" === (_v21 && void 0 !== _v23 ? _v7(_v21, _v23) : null) || _v0 > .9);
    }, [_v21, _v24, _v23, _v7, _v27, _v9, _v15, _v20]);
    let _v31 = (0, _v4.useRef)(_v3);
    return ((0, _v4.useEffect)(() => {
      _v31.current && _v31.current !== _v3 && (_v15(!1), _v31.current = _v3);
    }, [_v3, _v15]), (0, _v11.default)([_v8], () => {
      _v11 && _v9 && _v15(!1);
    }, null, [_v9, _v11]), _v17 && _v20) ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)("div", {
        ref: _v8,
        children: (0, _v1.jsx)(_v52, {
          onMouseEnter: () => {
            _v12(!1);
          },
          onMouseLeave: () => {
            _v12(!0);
          },
          active: !!_v9,
          attach: [[0, 0], [100, 0]],
          content: (0, _v1.jsx)(_v29, {
            accountType: _v21,
            capabilities: _v16,
            uploadQuota: _v20,
            showing: !!_v9,
            userInitiated: !!_v9 && (!_v24 || void 0 !== _v23 && _v23 / _v24 <= .9)
          }),
          children: (0, _v1.jsx)("div", {
            children: (0, _v1.jsx)(_v45, {
              used: _v23,
              max: _v24 ?? 1 / 0,
              period: _v22 ? "lifetime" : "periodic" === _v20.space.showing ? _v20.periodic.period ?? "week" : "lifetime",
              unit: _v25 ?? "video_size",
              mood: _v27,
              textVariant: "ratio",
              onClick: () => {
                switch (_v27) {
                  case "safe":
                    _v15(!_v9);
                    break;
                  case "warn":
                    _v13 || (_v14(!0), _v51(_v26, "approaching_quota"));
                    break;
                  case "limit":
                    _v13 || (_v14(!0), _v51(_v26, "at_limit_quota"));
                }
              },
              className: _v6
            })
          })
        })
      }), _v13 && (0, _v1.jsx)(_v50, {
        apiUrl: _v2,
        userConfig: {
          jwt: _v1,
          userId: _v0?.id
        },
        templateType: "default",
        modalConfig: _v30,
        onClose: () => _v14(!1),
        tracking: {
          params: {
            feature: "quota",
            location: "storage_widget",
            page: _v26,
            upsell_name: "warn" === _v27 ? "approaching_quota" : "limit" === _v27 ? "at_limit_quota" : ""
          },
          paywallTracking: {
            paywallTrigger: "footer_storage_widget_upgrade_button",
            paywallLocation: "footer_storage_widget",
            paywallType: "popup",
            paywallFeature: _v29 ? "storage_limit" : "quota"
          }
        }
      })]
    }) : (0, _v1.jsx)(_v1.Fragment, {});
  }], 0);
}