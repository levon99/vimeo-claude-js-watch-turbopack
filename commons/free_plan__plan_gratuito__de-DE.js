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
  let _v13 = _v0 => _v0 ? `url(${_v0})` : void 0,
    _v14 = ({
      frozenVideosCount: _v0,
      storageUsedBytes: _v1,
      storageLimitBytes: _v2,
      targetPlanName: _v3
    }) => {
      let _v4 = _v3 ?? (0, _v8.translate)({
          singular: "free plan",
          dictionary: {
            es: {
              singular: "plan gratuito"
            },
            "de-DE": {
              singular: "kostenloser Plan"
            },
            "fr-FR": {
              singular: "forfait gratuit"
            },
            "ja-JP": {
              singular: "無料プラン"
            },
            "ko-KR": {
              singular: "무료 플랜"
            },
            "pt-BR": {
              singular: "plano gratuito"
            },
            "zh-CN": {
              singular: "免费计划"
            }
          }
        }),
        _v5 = (0, _v8.translate)({
          singular: "{COUNT} video will be frozen",
          plural: "{COUNT} videos will be frozen",
          count: _v0,
          replacements: {
            COUNT: (0, _v12.formatNumber)(_v0)
          },
          dictionary: {
            es: {
              singular: "{COUNT} video quedará congelado",
              plural: "{COUNT} videos quedarán congelados"
            },
            "de-DE": {
              singular: "{COUNT} Video wird eingefroren",
              plural: "{COUNT} Videos werden eingefroren"
            },
            "fr-FR": {
              singular: "{COUNT} vidéo sera gelée",
              plural: "{COUNT} vidéos seront gelées"
            },
            "ja-JP": {
              singular: "{COUNT}本の動画が凍結されます",
              plural: "{COUNT}本の動画が凍結されます"
            },
            "ko-KR": {
              singular: "{COUNT}개의 동영상이 동결됩니다",
              plural: "{COUNT}개의 동영상이 동결됩니다"
            },
            "pt-BR": {
              singular: "{COUNT} vídeo será congelado",
              plural: "{COUNT} vídeos serão congelados"
            },
            "zh-CN": {
              singular: "{COUNT} 个视频将被冻结",
              plural: "{COUNT} 个视频将被冻结"
            }
          }
        }),
        _v6 = (0, _v9.formatBytes)(_v2, !1),
        _v7 = (0, _v8.translate)({
          singular: "{USED} of {LIMIT} in use",
          replacements: {
            USED: (0, _v9.formatBytes)(_v1, !1),
            LIMIT: _v6
          },
          dictionary: {
            es: {
              singular: "{USED} de {LIMIT} en uso"
            },
            "de-DE": {
              singular: "{USED} von {LIMIT} verwendet"
            },
            "fr-FR": {
              singular: "{USED} sur {LIMIT} utilisés"
            },
            "ja-JP": {
              singular: "{LIMIT}中{USED}を使用中"
            },
            "ko-KR": {
              singular: "{LIMIT} 중 {USED} 사용 중"
            },
            "pt-BR": {
              singular: "{USED} de {LIMIT} em uso"
            },
            "zh-CN": {
              singular: "已使用 {USED}（共 {LIMIT}）"
            }
          }
        }),
        _v8 = _v1 > 0 ? Math.min(_v2 / _v1, 1) : 0,
        _v9 = `${100 * _v8}%`;
      return (0, _v1.jsxs)(_v3.Flex, {
        gap: "3",
        align: "flex-start",
        children: [(0, _v1.jsx)(_v7.CircleExclamationFilled, {
          boxSize: "24px",
          color: "status-caution-primary"
        }), (0, _v1.jsxs)(_v5.Stack, {
          spacing: "4",
          flex: "1",
          children: [(0, _v1.jsxs)(_v5.Stack, {
            spacing: "1",
            children: [(0, _v1.jsx)(_v6.Text, {
              variant: "heading-sm",
              children: _v5
            }), (0, _v1.jsx)(_v6.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v8.translate)({
                singular: "Your videos beyond the {PLAN} storage limit of {LIMIT} will be frozen and no longer accessible.",
                replacements: {
                  PLAN: _v4,
                  LIMIT: _v6
                },
                dictionary: {
                  es: {
                    singular: "Los videos que excedan el límite de almacenamiento de {LIMIT} del plan {PLAN} quedarán congelados y ya no serán accesibles."
                  },
                  "de-DE": {
                    singular: "Ihre Videos, die das Speicherlimit von {LIMIT} des {PLAN}-Plans überschreiten, werden gesperrt und sind nicht mehr zugänglich."
                  },
                  "fr-FR": {
                    singular: "Vos vidéos au‑delà de la limite de stockage de {LIMIT} du forfait {PLAN} seront bloquées et ne seront plus accessibles."
                  },
                  "ja-JP": {
                    singular: "{PLAN} のストレージ上限 {LIMIT} を超えるビデオは凍結され、アクセスできなくなります。"
                  },
                  "ko-KR": {
                    singular: "{PLAN} 플랜의 {LIMIT} 저장 한도를 초과하는 동영상은 동결되어 더 이상 접근할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "Seus vídeos além do limite de armazenamento de {LIMIT} do plano {PLAN} serão congelados e ficarão inacessíveis."
                  },
                  "zh-CN": {
                    singular: "超出 {PLAN} 存储限制 {LIMIT} 的视频将被冻结并无法访问。"
                  }
                }
              })
            })]
          }), (0, _v1.jsxs)(_v5.Stack, {
            spacing: "2",
            width: "100%",
            children: [(0, _v1.jsx)(_v6.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v7
            }), (0, _v1.jsxs)(_v2.Box, {
              position: "relative",
              height: "4px",
              borderRadius: "999px",
              backgroundColor: "blue.50",
              overflow: "visible",
              children: [(0, _v1.jsx)(_v2.Box, {
                position: "absolute",
                inset: "0",
                backgroundColor: "status-destructive-primary",
                borderRadius: "999px"
              }), (0, _v1.jsx)(_v2.Box, {
                position: "absolute",
                top: "0",
                left: "0",
                height: "4px",
                width: _v9,
                backgroundColor: "text-tertiary",
                borderRadius: "999px"
              }), (0, _v1.jsx)(_v2.Box, {
                position: "absolute",
                left: _v9,
                top: "50%",
                marginLeft: "-1px",
                marginTop: "-8px",
                height: "16px",
                borderLeft: "1px dotted",
                borderColor: "text-tertiary"
              })]
            })]
          })]
        })]
      });
    },
    _v15 = ({
      badgeLabel: _v0,
      count: _v1,
      title: _v2,
      description: _v3,
      videos: _v4
    }) => {
      let _v5 = _v4.length > 3,
        _v6 = Math.max(_v1, _v4.length),
        _v7 = _v5 ? _v4.slice(0, 2) : _v4,
        _v8 = _v5 ? _v4.slice(2, 5).map(_v0 => _v13(_v0.thumbnail)).filter(_v0 => !!_v0) : [],
        _v9 = Math.max(_v6 - 2, 0);
      return (0, _v1.jsxs)(_v3.Flex, {
        gap: "3",
        align: "flex-start",
        children: [(0, _v1.jsx)(_v7.CircleExclamationFilled, {
          boxSize: "24px",
          color: "status-caution-primary"
        }), (0, _v1.jsxs)(_v5.Stack, {
          spacing: "4",
          flex: "1",
          children: [(0, _v1.jsxs)(_v5.Stack, {
            spacing: "1",
            children: [(0, _v1.jsx)(_v6.Text, {
              variant: "heading-sm",
              children: _v2
            }), (0, _v1.jsx)(_v6.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v3
            })]
          }), (0, _v1.jsxs)(_v4.Grid, {
            width: "100%",
            gap: "3",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            justifyContent: "flex-start",
            children: [_v7.map(_v0 => (0, _v1.jsxs)(_v5.Stack, {
              spacing: "2",
              width: "100%",
              children: [(0, _v1.jsxs)(_v2.Box, {
                aspectRatio: "16 / 9",
                backgroundColor: "gray.100",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
                width: "100%",
                children: [(0, _v1.jsx)(_v2.Box, {
                  backgroundImage: _v13(_v0.thumbnail),
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  position: "absolute",
                  inset: "0"
                }), _v0 && (0, _v1.jsx)(_v2.Box, {
                  backgroundColor: "status-caution-primary",
                  borderRadius: "4px",
                  paddingX: "4px",
                  paddingY: "1px",
                  position: "absolute",
                  right: "8px",
                  top: "8px",
                  children: (0, _v1.jsx)(_v6.Text, {
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "500",
                    children: _v0
                  })
                })]
              }), (0, _v1.jsx)(_v6.Text, {
                variant: "heading-2xs",
                noOfLines: 1,
                textAlign: "left",
                children: _v0.title
              })]
            }, _v0.uri)), _v5 && (0, _v1.jsxs)(_v5.Stack, {
              spacing: "2",
              width: "100%",
              children: [(0, _v1.jsx)(_v2.Box, {
                aspectRatio: "16 / 9",
                backgroundColor: "transparent",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
                width: "100%",
                children: _v8.map((_v0, _v1) => {
                  let _v2 = [{
                    top: "20%",
                    left: "10%",
                    rotate: "-4deg"
                  }, {
                    top: "2%",
                    left: "30%",
                    rotate: "1deg"
                  }, {
                    top: "40%",
                    left: "48%",
                    rotate: "4deg"
                  }][_v1];
                  return _v2 ? (0, _v1.jsx)(_v2.Box, {
                    aspectRatio: "16 / 9",
                    backgroundImage: _v0,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    border: "1.5px solid white",
                    borderRadius: "4px",
                    position: "absolute",
                    width: "48%",
                    top: _v2.top,
                    left: _v2.left,
                    transform: `rotate(${_v2.rotate})`
                  }, `stacked-warning-videos-${_v1}`) : null;
                })
              }), (0, _v1.jsx)(_v6.Text, {
                variant: "heading-2xs",
                noOfLines: 1,
                textAlign: "left",
                children: (0, _v8.translate)({
                  singular: "and other {COUNT}",
                  plural: "and other {COUNT}",
                  count: _v9,
                  replacements: {
                    COUNT: (0, _v12.formatNumber)(_v9)
                  },
                  dictionary: {
                    es: {
                      singular: "y otro {COUNT}",
                      plural: "y otros {COUNT}"
                    },
                    "de-DE": {
                      singular: "und {COUNT} weiterer",
                      plural: "und {COUNT} weitere"
                    },
                    "fr-FR": {
                      singular: "et {COUNT} autre",
                      plural: "et {COUNT} autres"
                    },
                    "ja-JP": {
                      singular: "その他{COUNT}件",
                      plural: "その他{COUNT}件"
                    },
                    "ko-KR": {
                      singular: "및 기타 {COUNT}개",
                      plural: "및 기타 {COUNT}개"
                    },
                    "pt-BR": {
                      singular: "e outro {COUNT}",
                      plural: "e outros {COUNT}"
                    },
                    "zh-CN": {
                      singular: "以及另外 {COUNT} 个",
                      plural: "以及另外 {COUNT} 个"
                    }
                  }
                })
              })]
            }, "stacked-warning-videos")]
          })]
        })]
      });
    },
    _v16 = ({
      unlistedVideosCount: _v0,
      videos: _v1
    }) => {
      let _v2 = Math.max(_v0, _v1.length),
        _v3 = (0, _v8.translate)({
          singular: "{COUNT} unlisted video will become private",
          plural: "{COUNT} unlisted videos will become private",
          count: _v2,
          replacements: {
            COUNT: (0, _v12.formatNumber)(_v2)
          },
          dictionary: {
            es: {
              singular: "{COUNT} video sin listar se volverá privado",
              plural: "{COUNT} videos sin listar se volverán privados"
            },
            "de-DE": {
              singular: "{COUNT} nicht gelistetes Video wird privat",
              plural: "{COUNT} nicht gelistete Videos werden privat"
            },
            "fr-FR": {
              singular: "{COUNT} vidéo non répertoriée deviendra privée",
              plural: "{COUNT} vidéos non répertoriées deviendront privées"
            },
            "ja-JP": {
              singular: "{COUNT}本の限定公開動画が非公開になります",
              plural: "{COUNT}本の限定公開動画が非公開になります"
            },
            "ko-KR": {
              singular: "{COUNT}개의 Unlisted 동영상이 Private 상태가 됩니다",
              plural: "{COUNT}개의 Unlisted 동영상이 Private 상태가 됩니다"
            },
            "pt-BR": {
              singular: "{COUNT} vídeo Não listado ficará Privado",
              plural: "{COUNT} vídeos Não listados ficarão Privados"
            },
            "zh-CN": {
              singular: "{COUNT} 个未列出（Unlisted）的视频将变为私人（Private）",
              plural: "{COUNT} 个未列出（Unlisted）的视频将变为私人（Private）"
            }
          }
        });
      return (0, _v1.jsx)(_v15, {
        badgeLabel: (0, _v8.translate)({
          singular: "Unlisted",
          dictionary: {
            es: {
              singular: "Sin listar"
            },
            "de-DE": {
              singular: "Nicht gelistet"
            },
            "fr-FR": {
              singular: "Non répertorié"
            },
            "ja-JP": {
              singular: "限定公開"
            },
            "ko-KR": {
              singular: "일부 공개"
            },
            "pt-BR": {
              singular: "Não listado"
            },
            "zh-CN": {
              singular: "未公开发布"
            }
          }
        }),
        count: _v2,
        title: _v3,
        description: (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v8.translate)({
            singular: "Your currently Unlisted videos will revert to Private status, meaning",
            dictionary: {
              es: {
                singular: "Tus videos actualmente No listados volverán a ser Privados, lo que significa"
              },
              "de-DE": {
                singular: "Ihre derzeit nicht gelisteten Videos werden auf Privat zurückgesetzt, was bedeutet"
              },
              "fr-FR": {
                singular: "Vos vidéos actuellement non répertoriées redeviendront privées, ce qui signifie"
              },
              "ja-JP": {
                singular: "現在「限定公開」の動画は「非公開」に戻ります。つまり："
              },
              "ko-KR": {
                singular: "현재 Unlisted 상태인 동영상은 Private 상태로 되돌아갑니다. 즉"
              },
              "pt-BR": {
                singular: "Seus vídeos atualmente Não listados voltarão ao status Privado, o que significa"
              },
              "zh-CN": {
                singular: "您当前的未列出（Unlisted）视频将恢复为私人（Private）状态，这意味着"
              }
            }
          }), " ", (0, _v1.jsx)(_v6.Text, {
            as: "span",
            fontWeight: "500",
            color: "text-secondary",
            children: (0, _v8.translate)({
              singular: "any shared links will no longer work.",
              dictionary: {
                es: {
                  singular: "cualquier enlace compartido dejará de funcionar."
                },
                "de-DE": {
                  singular: "Alle geteilten Links funktionieren nicht mehr."
                },
                "fr-FR": {
                  singular: "tous les liens partagés cesseront de fonctionner."
                },
                "ja-JP": {
                  singular: "共有しているリンクはすべて無効になります。"
                },
                "ko-KR": {
                  singular: "공유된 모든 링크가 더 이상 작동하지 않습니다."
                },
                "pt-BR": {
                  singular: "quaisquer links compartilhados não funcionarão mais."
                },
                "zh-CN": {
                  singular: "任何已共享的链接将不再可用。"
                }
              }
            })
          })]
        }),
        videos: _v1
      });
    },
    _v17 = ({
      frozenVideosCount: _v0,
      storageLimitBytes: _v1,
      videos: _v2,
      targetPlanName: _v3
    }) => {
      let _v4 = Math.max(_v0, _v2.length),
        _v5 = (0, _v8.translate)({
          singular: "{COUNT} video will be frozen",
          plural: "{COUNT} videos will be frozen",
          count: _v4,
          replacements: {
            COUNT: (0, _v12.formatNumber)(_v4)
          },
          dictionary: {
            es: {
              singular: "{COUNT} video quedará congelado",
              plural: "{COUNT} videos quedarán congelados"
            },
            "de-DE": {
              singular: "{COUNT} Video wird eingefroren",
              plural: "{COUNT} Videos werden eingefroren"
            },
            "fr-FR": {
              singular: "{COUNT} vidéo sera gelée",
              plural: "{COUNT} vidéos seront gelées"
            },
            "ja-JP": {
              singular: "{COUNT}本の動画が凍結されます",
              plural: "{COUNT}本の動画が凍結されます"
            },
            "ko-KR": {
              singular: "{COUNT}개의 동영상이 동결됩니다",
              plural: "{COUNT}개의 동영상이 동결됩니다"
            },
            "pt-BR": {
              singular: "{COUNT} vídeo será congelado",
              plural: "{COUNT} vídeos serão congelados"
            },
            "zh-CN": {
              singular: "{COUNT} 个视频将被冻结",
              plural: "{COUNT} 个视频将被冻结"
            }
          }
        }),
        _v6 = _v3 ?? (0, _v8.translate)({
          singular: "free plan",
          dictionary: {
            es: {
              singular: "plan gratuito"
            },
            "de-DE": {
              singular: "kostenloser Plan"
            },
            "fr-FR": {
              singular: "forfait gratuit"
            },
            "ja-JP": {
              singular: "無料プラン"
            },
            "ko-KR": {
              singular: "무료 플랜"
            },
            "pt-BR": {
              singular: "plano gratuito"
            },
            "zh-CN": {
              singular: "免费计划"
            }
          }
        });
      return (0, _v1.jsx)(_v15, {
        count: _v4,
        title: _v5,
        description: null !== _v1 ? (0, _v8.translate)({
          singular: "Your videos beyond the {PLAN} storage limit of {LIMIT} will be frozen and no longer accessible.",
          replacements: {
            PLAN: _v6,
            LIMIT: (0, _v9.formatBytes)(_v1, !1)
          },
          dictionary: {
            es: {
              singular: "Los videos que excedan el límite de almacenamiento de {LIMIT} del plan {PLAN} quedarán congelados y ya no serán accesibles."
            },
            "de-DE": {
              singular: "Ihre Videos, die das Speicherlimit von {LIMIT} des {PLAN}-Plans überschreiten, werden gesperrt und sind nicht mehr zugänglich."
            },
            "fr-FR": {
              singular: "Vos vidéos au‑delà de la limite de stockage de {LIMIT} du forfait {PLAN} seront bloquées et ne seront plus accessibles."
            },
            "ja-JP": {
              singular: "{PLAN} のストレージ上限 {LIMIT} を超えるビデオは凍結され、アクセスできなくなります。"
            },
            "ko-KR": {
              singular: "{PLAN} 플랜의 {LIMIT} 저장 한도를 초과하는 동영상은 동결되어 더 이상 접근할 수 없습니다."
            },
            "pt-BR": {
              singular: "Seus vídeos além do limite de armazenamento de {LIMIT} do plano {PLAN} serão congelados e ficarão inacessíveis."
            },
            "zh-CN": {
              singular: "超出 {PLAN} 存储限制 {LIMIT} 的视频将被冻结并无法访问。"
            }
          }
        }) : (0, _v8.translate)({
          singular: "Your videos beyond the {PLAN} managed storage limit will be frozen and no longer accessible.",
          replacements: {
            PLAN: _v6
          },
          dictionary: {
            es: {
              singular: "Tus videos que excedan el límite de almacenamiento gestionado de {PLAN} quedarán congelados y ya no serán accesibles."
            },
            "de-DE": {
              singular: "Ihre Videos, die über das vom {PLAN} verwaltete Speicherlimit hinausgehen, werden eingefroren und sind nicht mehr zugänglich."
            },
            "fr-FR": {
              singular: "Vos vidéos dépassant la limite de stockage gérée par {PLAN} seront gelées et ne seront plus accessibles."
            },
            "ja-JP": {
              singular: "お客様の動画は、{PLAN}で管理されるストレージ上限を超えると凍結され、アクセスできなくなります。"
            },
            "ko-KR": {
              singular: "귀하의 동영상은 {PLAN} 관리형 저장 한도를 초과하면 동결되어 더 이상 접근할 수 없게 됩니다."
            },
            "pt-BR": {
              singular: "Seus vídeos que excederem o limite de armazenamento gerenciado do {PLAN} serão congelados e não poderão mais ser acessados."
            },
            "zh-CN": {
              singular: "超出 {PLAN} 管理存储限制的视频将被冻结，无法再访问。"
            }
          }
        }),
        videos: _v2
      });
    };
  _v0.s(["VideoPreviewWarning", 0, _v15, "WarningSection", 0, ({
    warningData: _v0,
    targetPlanName: _v1
  }) => {
    let _v2 = _v0?.storageUsedBytes ?? 0,
      _v3 = _v0?.storageLimitBytes ?? null,
      _v4 = _v0?.frozenVideosPreview ?? [],
      _v5 = _v0?.frozenFilesPreview ?? [],
      _v6 = _v0?.unlistedVideosPreview ?? [],
      _v7 = Math.max(_v0?.frozenVideosCount ?? 0, _v4.length),
      _v8 = Math.max(_v0?.frozenFilesCount ?? 0, _v5.length),
      _v9 = Math.max(_v0?.unlistedVideosCount ?? 0, _v6.length),
      _v10 = (0, _v11.isStorageOverage)(_v0),
      _v11 = _v9 > 0;
    return _v10 || _v11 ? (0, _v1.jsxs)(_v2.Box, {
      backgroundColor: "color-mix(in srgb, var(--vimeo-colors-status-caution-primary) 10%, transparent);",
      paddingX: "24px",
      paddingY: "24px",
      position: "relative",
      overflow: "visible",
      children: [(0, _v1.jsxs)(_v5.Stack, {
        spacing: "8",
        children: [_v10 && (_v11 && null !== _v3 ? (0, _v1.jsx)(_v14, {
          frozenVideosCount: _v7,
          storageUsedBytes: _v2,
          storageLimitBytes: _v3,
          targetPlanName: _v1
        }) : _v7 > 0 && (0, _v1.jsx)(_v17, {
          frozenVideosCount: _v7,
          storageLimitBytes: _v3,
          videos: _v4,
          targetPlanName: _v1
        })), _v8 > 0 && (0, _v1.jsx)(_v10.FrozenFilesWarning, {
          frozenFilesCount: _v8,
          storageLimitBytes: _v3,
          files: _v5,
          targetPlanName: _v1
        }), _v11 && (0, _v1.jsx)(_v16, {
          unlistedVideosCount: _v9,
          videos: _v6
        })]
      }), (0, _v1.jsxs)(_v3.Flex, {
        position: "absolute",
        top: "-10px",
        right: "24px",
        backgroundColor: "status-caution-primary",
        borderRadius: "4px",
        paddingX: "6px",
        height: "20px",
        alignItems: "center",
        gap: "1",
        zIndex: "2",
        children: [(0, _v1.jsx)(_v7.CircleExclamationFilled, {
          boxSize: "16px",
          color: "white"
        }), (0, _v1.jsx)(_v6.Text, {
          variant: "heading-2xs",
          color: "white",
          children: (0, _v8.translate)({
            singular: "Warning",
            dictionary: {
              es: {
                singular: "Advertencia"
              },
              "de-DE": {
                singular: "Warnung"
              },
              "fr-FR": {
                singular: "Attention"
              },
              "ja-JP": {
                singular: "警告"
              },
              "ko-KR": {
                singular: "경고"
              },
              "pt-BR": {
                singular: "Aviso"
              },
              "zh-CN": {
                singular: "警告"
              }
            }
          })
        })]
      })]
    }) : null;
  }]);
}