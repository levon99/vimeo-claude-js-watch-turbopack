{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["useShareMenu", 0, () => {
    let _v0 = (0, _v3.useToast)(),
      [_v1, _v2] = (0, _v2.useState)(!1),
      [_v3, _v4] = (0, _v2.useState)(!1),
      {
        link: _v5,
        url: _v6
      } = (0, _v8.useStore)(_v0 => _v0.commonStore),
      {
        isEmbedDisabled: _v7,
        onCopyEmbedCode: _v8
      } = (() => {
        let _v0 = (0, _v3.useToast)(),
          {
            embed: _v1,
            metadataConnectionsVideosTotal: _v2
          } = (0, _v8.useStore)(_v0 => _v0.commonStore),
          {
            sendDistributeContentClickEvents: _v3
          } = (0, _v7.useBpEventService)(),
          _v4 = (0, _v2.useMemo)(() => _v1?.html, [_v1]);
        return {
          onCopyEmbedCode: (0, _v2.useCallback)(async () => {
            _v4 && navigator.clipboard.writeText(_v4).then(() => {
              _v0({
                title: (0, _v6.translate)({
                  singular: "Embed code copied",
                  dictionary: {
                    es: {
                      singular: "Se copió el código de inserción"
                    },
                    "de-DE": {
                      singular: "Einbettungscode kopiert"
                    },
                    "fr-FR": {
                      singular: "Code d'intégration copié"
                    },
                    "ja-JP": {
                      singular: "埋め込みコードがコピーされました"
                    },
                    "ko-KR": {
                      singular: "임베드 코드를 복사했습니다"
                    },
                    "pt-BR": {
                      singular: "Código de incorporação copiado"
                    },
                    "zh-CN": {
                      singular: "嵌入代码已复制"
                    }
                  }
                })
              }), _v3("copy embed code", "embed", "embed");
            }).catch(() => _v0({
              title: (0, _v6.translate)({
                singular: "Oops, something went wrong. Please try again.",
                dictionary: {
                  es: {
                    singular: "Ups, algo salió mal. Vuelve a intentarlo."
                  },
                  "de-DE": {
                    singular: "Oops, etwas ist schief gelaufen. Bitte versuche es nochmal."
                  },
                  "fr-FR": {
                    singular: "Oups ! Une erreur s'est produite. Veuillez réessayer."
                  },
                  "ja-JP": {
                    singular: "エラーが発生しました。再度お試しください。"
                  },
                  "ko-KR": {
                    singular: "앗, 문제가 발생했습니다. 다시 시도해주세요."
                  },
                  "pt-BR": {
                    singular: "Ops, algo deu errado. Por favor, tente novamente."
                  },
                  "zh-CN": {
                    singular: "哎呀，出错了。请重试。"
                  }
                }
              })
            }));
          }, [_v4, _v0, _v3]),
          isEmbedDisabled: (0, _v2.useMemo)(() => !_v4 || !_v2, [_v4, _v2])
        };
      })(),
      {
        sendOpenDistributionMenuEvent: _v9,
        sendDistributeContentClickEvents: _v10
      } = (0, _v7.useBpEventService)(),
      _v11 = (0, _v2.useCallback)(async () => {
        let _v0 = new URL(_v6 ? `${window.location.protocol}//${window.location.hostname}/showcase/${_v6}` : _v5 || "");
        _v0.searchParams.append("share", "copy"), _v0.searchParams.append("fl", "sm"), _v0.searchParams.append("fe", "fs");
        try {
          await navigator.clipboard.writeText(_v0.toString()), _v0({
            title: (0, _v6.translate)({
              singular: "Link copied",
              dictionary: {
                es: {
                  singular: "Vínculo copiado"
                },
                "de-DE": {
                  singular: "Link kopiert"
                },
                "fr-FR": {
                  singular: "Lien copié"
                },
                "ja-JP": {
                  singular: "リンクがコピーされました"
                },
                "ko-KR": {
                  singular: "링크가 복사됐습니다"
                },
                "pt-BR": {
                  singular: "Link copiado"
                },
                "zh-CN": {
                  singular: "链接已复制"
                }
              }
            })
          }), _v10("copy link", "share_link");
        } catch (_v0) {
          _v0({
            title: (0, _v6.translate)({
              singular: "Oops, something went wrong. Please try again.",
              dictionary: {
                es: {
                  singular: "Ups, algo salió mal. Vuelve a intentarlo."
                },
                "de-DE": {
                  singular: "Oops, etwas ist schief gelaufen. Bitte versuche es nochmal."
                },
                "fr-FR": {
                  singular: "Oups ! Une erreur s'est produite. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "エラーが発生しました。再度お試しください。"
                },
                "ko-KR": {
                  singular: "앗, 문제가 발생했습니다. 다시 시도해주세요."
                },
                "pt-BR": {
                  singular: "Ops, algo deu errado. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "哎呀，出错了。请重试。"
                }
              }
            })
          });
        }
      }, [_v5, _v0, _v6, _v10]),
      _v12 = (0, _v2.useCallback)(() => _v4(!1), []),
      _v13 = (0, _v2.useCallback)(() => {
        _v4(!0), _v9();
      }, []);
    return {
      isTooltipOpen: _v1,
      menuState: {
        isOpen: _v3,
        onClose: _v12,
        onOpen: _v13
      },
      onMoreSharingOptionsClick: (0, _v2.useCallback)(() => _v2(!1), []),
      setIsTooltipOpen: _v2,
      shareMenu: (0, _v2.useMemo)(() => [{
        label: (0, _v6.translate)({
          singular: "Copy link",
          dictionary: {
            es: {
              singular: "Copiar vínculo"
            },
            "de-DE": {
              singular: "Link kopieren"
            },
            "fr-FR": {
              singular: "Copier le lien"
            },
            "ja-JP": {
              singular: "リンクをコピー"
            },
            "ko-KR": {
              singular: "링크 복사"
            },
            "pt-BR": {
              singular: "Copiar link"
            },
            "zh-CN": {
              singular: "复制链接"
            }
          }
        }),
        onClick: _v11,
        icon: (0, _v1.jsx)(_v4.Link, {
          boxSize: "2xs"
        })
      }, {
        label: (0, _v6.translate)({
          singular: "Copy embed code",
          dictionary: {
            es: {
              singular: "Copiar el código de inserción"
            },
            "de-DE": {
              singular: "Einbettungscode kopieren"
            },
            "fr-FR": {
              singular: "Copier le code d’intégration"
            },
            "ja-JP": {
              singular: "埋め込みコードをコピー"
            },
            "ko-KR": {
              singular: "임베드 코드 복사하기"
            },
            "pt-BR": {
              singular: "Copiar código de incorporação"
            },
            "zh-CN": {
              singular: "复制嵌入代码"
            }
          }
        }),
        onClick: _v8,
        icon: (0, _v1.jsx)(_v5.Code, {
          boxSize: "2xs"
        }),
        disabled: _v7
      }], [_v7, _v8, _v11]),
      onCopyClick: _v11
    };
  }], 0);
}