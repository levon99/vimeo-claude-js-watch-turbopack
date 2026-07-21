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
  let _v14 = "embeddable-toggle-session-count",
    _v15 = "embeddable-toggle-counted";
  _v0.s(["EmbeddableQuotaMeter", 0, ({
    isChecked: _v0,
    isDisabled: _v1,
    viewPrivacy: _v2,
    onChange: _v3,
    quota: _v4,
    isQuotaLoading: _v5,
    highlightedValue: _v6,
    isHighlightedAdditional: _v7,
    showUpgrade: _v8 = !1
  }) => {
    let _v9,
      _v10 = function () {
        let [_v0] = (0, _v2.useState)(() => {
          try {
            let _v0 = localStorage.getItem(_v14),
              _v1 = _v0 ? parseInt(_v0, 10) : 0;
            if (!sessionStorage.getItem(_v15)) {
              sessionStorage.setItem(_v15, "1");
              let _v0 = _v1 + 1;
              return localStorage.setItem(_v14, String(_v0)), _v0 <= 3;
            }
            return _v1 < 3;
          } catch {
            return !1;
          }
        });
        return _v0;
      }();
    return (0, _v1.jsxs)(_v5.Flex, {
      flexDirection: "column",
      gap: "2",
      children: [(0, _v1.jsxs)(_v5.Flex, {
        justifyContent: "space-between",
        w: "100%",
        children: [(0, _v1.jsxs)(_v5.Flex, {
          gap: "sm",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v8.Text, {
            variant: "body-md",
            opacity: _v1 ? .5 : 1,
            children: (0, _v12.translate)({
              singular: "Embeddable",
              dictionary: {
                es: {
                  singular: "Insertable"
                },
                "de-DE": {
                  singular: "Einbettbar"
                },
                "fr-FR": {
                  singular: "Intégrable"
                },
                "ja-JP": {
                  singular: "埋め込み可能"
                },
                "ko-KR": {
                  singular: "임베드 가능"
                },
                "pt-BR": {
                  singular: "Incorporável"
                },
                "zh-CN": {
                  singular: "可嵌入"
                }
              }
            })
          }), (0, _v1.jsx)(_v9.Tooltip, {
            label: (0, _v12.translate)({
              singular: "Allow this video to be embedded on external sites",
              dictionary: {
                es: {
                  singular: "Permitir que este video se incruste en sitios externos"
                },
                "de-DE": {
                  singular: "Erlaube das Einbetten dieses Videos auf externen Websites"
                },
                "fr-FR": {
                  singular: "Autoriser l'intégration de cette vidéo sur des sites externes"
                },
                "ja-JP": {
                  singular: "この動画を外部サイトに埋め込み可能にする"
                },
                "ko-KR": {
                  singular: "이 비디오를 외부 사이트에 임베드할 수 있도록 허용"
                },
                "pt-BR": {
                  singular: "Permitir que este vídeo seja incorporado em sites externos"
                },
                "zh-CN": {
                  singular: "允许将此视频嵌入到外部站点"
                }
              }
            }),
            placement: "top",
            shouldWrapChildren: !0,
            children: (0, _v1.jsx)(_v11.InfoCircle, {
              boxSize: "2xs",
              display: "flex"
            })
          }), _v10 && (0, _v1.jsx)(_v4.Badge, {
            size: "sm",
            variant: "new",
            children: (0, _v12.translate)({
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
          })]
        }), (0, _v1.jsx)(_v5.Flex, {
          alignItems: "center",
          children: (0, _v1.jsx)(_v7.Switch, {
            size: "md",
            isChecked: _v0,
            isDisabled: _v1,
            onChange: _v3
          })
        })]
      }), _v0 || "anybody" !== _v2 ? !_v4 || _v5 ? (0, _v1.jsxs)(_v5.Flex, {
        flexDirection: "column",
        gap: "sm",
        children: [(0, _v1.jsx)(_v6.Skeleton, {
          height: (0, _v10.rem)(14),
          width: "60%",
          borderRadius: "md"
        }), (0, _v1.jsx)(_v6.Skeleton, {
          height: (0, _v10.rem)(6),
          width: "100%",
          borderRadius: "999px"
        })]
      }) : (0, _v1.jsx)(_v13.UploadQuotaMeter, {
        isMobile: !1,
        quota: _v7 && _v6 ? (_v9 = null != _v4.restricted, {
          ..._v4,
          ...(_v9 && _v4.restricted && {
            restricted: {
              ..._v4.restricted,
              used: (_v4.restricted.used ?? 0) + _v6
            }
          }),
          ...(!_v9 && {
            periodic: {
              ..._v4.periodic,
              used: (_v4.periodic.used ?? 0) + _v6
            },
            lifetime: {
              ..._v4.lifetime,
              used: (_v4.lifetime.used ?? 0) + _v6
            }
          })
        }) : _v4,
        highlightedValue: _v6 ?? null,
        showUpgrade: _v8,
        limitLabel: (0, _v12.translate)({
          singular: "Managed storage",
          dictionary: {
            es: {
              singular: "Almacenamiento gestionado"
            },
            "de-DE": {
              singular: "Verwalteter Speicher"
            },
            "fr-FR": {
              singular: "Stockage géré"
            },
            "ja-JP": {
              singular: "マネージドストレージ"
            },
            "ko-KR": {
              singular: "관리형 스토리지"
            },
            "pt-BR": {
              singular: "Armazenamento gerenciado"
            },
            "zh-CN": {
              singular: "托管存储"
            }
          }
        }),
        compact: !0
      }) : (0, _v1.jsx)(_v3.Alert, {
        status: "info",
        children: (0, _v1.jsx)(_v8.Text, {
          variant: "body-sm",
          children: (0, _v12.translate)({
            singular: "This video doesn't count towards your Managed storage limit. All public, non-embeddable videos are on us.",
            dictionary: {
              es: {
                singular: "Este video no cuenta para su límite de almacenamiento Managed. Todos los videos públicos no incrustables corren por nuestra cuenta."
              },
              "de-DE": {
                singular: "Dieses Video zählt nicht zu Ihrem Managed storage-Limit. Alle öffentlichen, nicht einbettbaren Videos gehen auf unsere Kosten."
              },
              "fr-FR": {
                singular: "Cette vidéo ne compte pas dans votre limite de stockage Managed. Toutes les vidéos publiques non intégrables sont à notre charge."
              },
              "ja-JP": {
                singular: "この動画は Managed storage の上限にカウントされません。公開されている埋め込み不可の動画はすべて当社負担です。"
              },
              "ko-KR": {
                singular: "이 비디오는 관리형 저장 용량 한도에 포함되지 않습니다. 공개이면서 임베드 불가한 모든 비디오는 당사에서 부담합니다."
              },
              "pt-BR": {
                singular: "Este vídeo não conta para o seu limite de armazenamento Gerenciado. Todos os vídeos públicos não incorporáveis ficam por nossa conta."
              },
              "zh-CN": {
                singular: "此视频不计入您的托管存储限制。所有公开且不可嵌入的视频由我们承担。"
              }
            }
          })
        })
      })]
    });
  }]);
}