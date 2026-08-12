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
  _v0.s(["CopyReviewLinkButton", 0, ({
    surface: _v0,
    clipId: _v1,
    folderId: _v2,
    ref: _v3
  }) => {
    let _v4 = (0, _v7.useToast)(),
      _v5 = (0, _v10.useIsMobile)(),
      [_v6, _v7] = (0, _v2.useState)(!1),
      _v8 = (0, _v2.useRef)(null),
      {
        reviewId: _v9
      } = (0, _v2.useContext)(_v13.ReviewLinkContext),
      {
        trackReviewLinksCopied: _v10
      } = (0, _v12.useDistributionTracking)();
    (0, _v2.useEffect)(() => () => {
      _v8.current && clearTimeout(_v8.current);
    }, []);
    let _v11 = (0, _v11.translate)({
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
            singular: "검토 링크 복사"
          },
          "pt-BR": {
            singular: "Copiar link de revisão"
          },
          "zh-CN": {
            singular: "复制审阅链接"
          }
        }
      }),
      _v12 = (0, _v11.translate)({
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
      _v13 = async () => {
        try {
          await navigator.clipboard.writeText(window.location.href), _v10({
            clipId: _v1,
            folderId: _v2,
            reviewId: _v9 ?? "",
            surface: _v0
          }), _v4({
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
          }), _v7(!0), _v8.current && clearTimeout(_v8.current), _v8.current = setTimeout(() => _v7(!1), 0);
        } catch {
          _v4({
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
      _v14 = _v6 ? (0, _v1.jsx)(_v8.CircleCheckFilled, {}) : (0, _v1.jsx)(_v9.Link, {});
    return _v5 ? (0, _v1.jsx)(_v5.IconButton, {
      ref: _v3,
      icon: _v14,
      onClick: _v13,
      size: "md",
      variant: "primary",
      "aria-label": _v11,
      "data-testid": "copy-review-link-button"
    }) : (0, _v1.jsx)(_v4.Button, {
      ref: _v3,
      variant: "primary",
      size: "md",
      leftIcon: _v14,
      onClick: _v13,
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
          "aria-hidden": _v6,
          opacity: +!_v6,
          children: _v11
        }), (0, _v1.jsx)(_v6.Text, {
          as: "span",
          "aria-hidden": !_v6,
          opacity: +!!_v6,
          children: _v12
        })]
      })
    });
  }]);
}