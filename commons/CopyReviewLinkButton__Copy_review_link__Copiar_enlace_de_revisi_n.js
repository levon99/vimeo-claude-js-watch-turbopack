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
  _v0.s(["CopyReviewLinkButton", 0, () => {
    let _v0 = (0, _v7.useToast)(),
      _v1 = (0, _v10.useIsMobile)(),
      [_v2, _v3] = (0, _v2.useState)(!1),
      _v4 = (0, _v2.useRef)(null);
    (0, _v2.useEffect)(() => () => {
      _v4.current && clearTimeout(_v4.current);
    }, []);
    let _v5 = (0, _v11.translate)({
        singular: "Copy review link",
        dictionary: {
          es: {
            singular: "Copiar enlace de revisión"
          },
          "de-DE": {
            singular: "Review-Link kopieren"
          },
          "fr-FR": {
            singular: "Copier le lien de révision"
          },
          "ja-JP": {
            singular: "レビューリンクをコピー"
          },
          "ko-KR": {
            singular: "검토용 링크 복사"
          },
          "pt-BR": {
            singular: "Copiar link para revisão"
          },
          "zh-CN": {
            singular: "复制评审链接"
          }
        }
      }),
      _v6 = (0, _v11.translate)({
        singular: "Copied!",
        dictionary: {
          es: {
            singular: "Copiado"
          },
          "de-DE": {
            singular: "Kopiert!"
          },
          "fr-FR": {
            singular: "Copié !"
          },
          "ja-JP": {
            singular: "コピー完了！"
          },
          "ko-KR": {
            singular: "복사 완료!"
          },
          "pt-BR": {
            singular: "Copiado!"
          },
          "zh-CN": {
            singular: "已复制！"
          }
        }
      }),
      _v7 = async () => {
        try {
          await navigator.clipboard.writeText(window.location.href), _v0({
            title: (0, _v11.translate)({
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
          }), _v3(!0), _v4.current && clearTimeout(_v4.current), _v4.current = setTimeout(() => _v3(!1), 0);
        } catch {
          _v0({
            title: (0, _v11.translate)({
              singular: "Oops! Something went wrong. Please try again.",
              dictionary: {
                es: {
                  singular: "¡Ups, algo salió mal! Vuelve a intentarlo."
                },
                "de-DE": {
                  singular: "Hoppla! Etwas ist schief gelaufen. Bitte versuche es nochmal."
                },
                "fr-FR": {
                  singular: "Oups ! Une erreur s'est produite. Veuillez essayer à nouveau."
                },
                "ja-JP": {
                  singular: "エラーが発生しました。再度お試しください。"
                },
                "ko-KR": {
                  singular: "죄송합니다. 문제가 발생했습니다. 다시 시도해주세요."
                },
                "pt-BR": {
                  singular: "Oh! Alguma coisa deu errado. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "哎呀，出错了。请重试。"
                }
              }
            })
          });
        }
      },
      _v8 = _v2 ? (0, _v1.jsx)(_v8.CircleCheckFilled, {}) : (0, _v1.jsx)(_v9.Link, {});
    return _v1 ? (0, _v1.jsx)(_v5.IconButton, {
      icon: _v8,
      onClick: _v7,
      size: "md",
      variant: "primary",
      "aria-label": _v5,
      "data-testid": "copy-review-link-button"
    }) : (0, _v1.jsx)(_v4.Button, {
      variant: "primary",
      size: "md",
      leftIcon: _v8,
      onClick: _v7,
      "data-testid": "copy-review-link-button",
      children: (0, _v1.jsxs)(_v3.Box, {
        as: "span",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        sx: {
          "> span": {
            gridArea: "1 / 1",
            fontSize: "inherit",
            fontWeight: "medium",
            lineHeight: "inherit",
            transition: "opacity 0.2s ease-out"
          }
        },
        children: [(0, _v1.jsx)(_v6.Text, {
          as: "span",
          "aria-hidden": _v2,
          opacity: +!_v2,
          children: _v5
        }), (0, _v1.jsx)(_v6.Text, {
          as: "span",
          "aria-hidden": !_v2,
          opacity: +!!_v2,
          children: _v6
        })]
      })
    });
  }]);
}