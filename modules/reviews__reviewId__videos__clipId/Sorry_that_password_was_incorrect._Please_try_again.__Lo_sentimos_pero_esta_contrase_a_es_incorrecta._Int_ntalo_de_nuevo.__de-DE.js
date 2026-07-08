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
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = {
    incorrect_password: (0, _v13.translate)({
      singular: "Sorry, that password was incorrect. Please try again.",
      dictionary: {
        es: {
          singular: "Lo sentimos, pero esta contraseña es incorrecta. Inténtalo de nuevo."
        },
        "de-DE": {
          singular: "Leider ist das Kennwort falsch. Bitte noch einmal versuchen."
        },
        "fr-FR": {
          singular: "Désolé, ce mot de passe est incorrect. Veuillez réessayer."
        },
        "ja-JP": {
          singular: "パスワードが間違っています。再度お試しください。"
        },
        "ko-KR": {
          singular: "죄송합니다, 잘못된 비밀번호입니다. 올바른 비밀번호로 다시 시도해주세요."
        },
        "pt-BR": {
          singular: "Desculpe, mas a senha estava incorreta. Tente de novo."
        },
        "zh-CN": {
          singular: "抱歉，密码不正确。请重试。"
        }
      }
    }),
    cookies_disabled: (0, _v13.translate)({
      singular: "Unable to validate password. Ensure cookies are enabled in your browser, refresh the page, and try again.",
      dictionary: {
        es: {
          singular: "No se puede validar la contraseña. Asegúrese de que las cookies estén habilitadas en su navegador, actualice la página y vuelva a intentarlo."
        },
        "de-DE": {
          singular: "Das Kennwort kann nicht validiert werden. Stellen Sie sicher, dass Cookies in Ihrem Browser aktiviert sind, aktualisieren Sie die Seite und versuchen Sie es erneut."
        },
        "fr-FR": {
          singular: "Impossible de valider le mot de passe. Assurez-vous que les cookies sont activés dans votre navigateur, actualisez la page et réessayez."
        },
        "ja-JP": {
          singular: "パスワードを認証できませんでした。ブラウザでCookieが有効になっていることを確認し、ページを更新してからもう一度お試しください。"
        },
        "ko-KR": {
          singular: "비밀번호를 인증할 수 없습니다. 브라우저에서 쿠키가 활성화되어 있는지 확인하고, 페이지를 새로 고침한 후 다시 시도하세요."
        },
        "pt-BR": {
          singular: "Não foi possível validar a senha. Certifique-se de que os cookies estão habilitados no seu navegador, atualize a página e tente novamente."
        },
        "zh-CN": {
          singular: "无法验证密码。确保浏览器已启用 cookie，刷新页面后再试一次。"
        }
      }
    }),
    attempts_exceeded: (0, _v13.translate)({
      singular: "Too many failed attempts. Try again later.",
      dictionary: {
        es: {
          singular: "Demasiados intentos fallidos. Vuelva a intentarlo más tarde."
        },
        "de-DE": {
          singular: "Zu viele fehlgeschlagene Versuche. Versuche es später noch einmal."
        },
        "fr-FR": {
          singular: "Trop de tentatives infructueuses. Veuillez réessayer plus tard."
        },
        "ja-JP": {
          singular: "試行に繰り返し失敗しました。しばらくしてから、再試行してください。"
        },
        "ko-KR": {
          singular: "실패 횟수가 너무 많습니다. 나중에 다시 시도하세요."
        },
        "pt-BR": {
          singular: "Excesso de tentativas com falha. Tente de novo depois."
        },
        "zh-CN": {
          singular: "尝试失败次数过多。请稍后再试。"
        }
      }
    }),
    generic_error: (0, _v13.translate)({
      singular: "Unable to validate password. Ensure cookies are enabled in your browser, refresh the page, and try again.",
      dictionary: {
        es: {
          singular: "No se puede validar la contraseña. Asegúrese de que las cookies estén habilitadas en su navegador, actualice la página y vuelva a intentarlo."
        },
        "de-DE": {
          singular: "Das Kennwort kann nicht validiert werden. Stellen Sie sicher, dass Cookies in Ihrem Browser aktiviert sind, aktualisieren Sie die Seite und versuchen Sie es erneut."
        },
        "fr-FR": {
          singular: "Impossible de valider le mot de passe. Assurez-vous que les cookies sont activés dans votre navigateur, actualisez la page et réessayez."
        },
        "ja-JP": {
          singular: "パスワードを認証できませんでした。ブラウザでCookieが有効になっていることを確認し、ページを更新してからもう一度お試しください。"
        },
        "ko-KR": {
          singular: "비밀번호를 인증할 수 없습니다. 브라우저에서 쿠키가 활성화되어 있는지 확인하고, 페이지를 새로 고침한 후 다시 시도하세요."
        },
        "pt-BR": {
          singular: "Não foi possível validar a senha. Certifique-se de que os cookies estão habilitados no seu navegador, atualize a página e tente novamente."
        },
        "zh-CN": {
          singular: "无法验证密码。确保浏览器已启用 cookie，刷新页面后再试一次。"
        }
      }
    })
  };
  _v0.s(["PasswordPage", 0, function ({
    reviewId: _v0
  }) {
    let [_v1, _v2] = (0, _v2.useState)(!1),
      [_v3, _v4] = (0, _v2.useState)(null),
      {
        loading: _v5,
        postPassword: _v6
      } = (() => {
        let _v0 = (0, _v15.useViewer)(),
          [_v1, _v2] = (0, _v2.useState)(!1);
        return {
          postPassword: (0, _v2.useCallback)(async _v0 => {
            if (!_v0) throw Error("Viewer not available");
            _v2(!0);
            let _v1 = _v0?.xsrft;
            try {
              (0, _v14.loadCookie)("vuid") !== _v0.vuid && (_v1 = await fetch("/_next/viewer", {}).then(_v0 => {
                if (_v0.ok) return _v0.json().then(_v0 => {
                  let {
                    xsrft: _v1
                  } = _v0;
                  return _v1;
                });
                throw _v0;
              }));
            } catch (_v0) {}
            try {
              let _v0,
                _v1 = {
                  password: _v0.where.password,
                  token: _v1
                },
                _v2 = await (_v0 = _v0.where.reviewId, fetch(`/review_links/${_v0}/auth`, {
                  method: "POST",
                  credentials: "include",
                  body: JSON.stringify(_v1),
                  headers: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                  }
                }));
              if (_v2.ok) return;
              {
                let _v0 = await _v2.json(),
                  _v1 = ((_v0, _v1) => {
                    switch (_v0) {
                      case 429:
                        return "attempts_exceeded";
                      case 401:
                        return 1 === _v1 ? "incorrect_password" : "cookies_disabled";
                      default:
                        return "generic_error";
                    }
                  })(_v2.status, _v0?.error_code ?? 0),
                  _v2 = _v16[_v1];
                throw 401 === _v2.status && "incorrect_password" !== _v1 && window.location.reload(), _v2(!1), Error(_v2);
              }
            } catch (_v0) {
              throw _v2(!1), _v0;
            }
          }, [_v0]),
          loading: _v1
        };
      })(),
      _v7 = async _v0 => {
        _v0 && _v6({
          where: {
            reviewId: _v0,
            password: _v0
          }
        }).then(() => {
          _v2(!1), _v4(null), window.location.reload();
        }).catch(_v0 => {
          _v4(_v0), _v2(!0);
        });
      };
    return (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsxs)(_v7.ClipPageBase, {
        gridTemplateAreas: _v8.GRID_TEMPLATE_AREAS_LOADER,
        children: [(0, _v1.jsx)(_v11.PlayerWrapper, {
          gridArea: "media",
          children: (0, _v1.jsx)(_v3.Center, {
            w: "100%",
            h: "100%",
            children: _v5 ? (0, _v1.jsx)(_v5.Spinner, {
              size: "xl"
            }) : (0, _v1.jsxs)(_v10.PasswordForm, {
              error: _v3,
              isInvalid: _v1,
              onSubmit: _v7,
              children: [(0, _v1.jsx)(_v4.Header, {
                variant: "heading-2xl",
                size: "xl",
                children: (0, _v13.translate)({
                  singular: "This link is password protected",
                  dictionary: {
                    es: {
                      singular: "Este enlace está protegido por contraseña."
                    },
                    "de-DE": {
                      singular: "Dieser Link ist kennwortgeschützt"
                    },
                    "fr-FR": {
                      singular: "Ce lien est protégé par un mot de passe"
                    },
                    "ja-JP": {
                      singular: "このリンクはパスワードで保護されています"
                    },
                    "ko-KR": {
                      singular: "이 링크는 비밀번호로 보호되어 있습니다."
                    },
                    "pt-BR": {
                      singular: "Este link está protegido por senha"
                    },
                    "zh-CN": {
                      singular: "此链接受密码保护"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v6.Paragraph, {
                variant: "body-lg",
                children: (0, _v13.translate)({
                  singular: "Enter the password to view it. You can also try logging in or contacting the creator to gain access.",
                  dictionary: {
                    es: {
                      singular: "Ingrese la contraseña para verlo. También puede intentar iniciar sesión o ponerse en contacto con el creador para obtener acceso."
                    },
                    "de-DE": {
                      singular: "Geben Sie das Passwort ein, um es anzuzeigen. Sie können auch versuchen, sich einzuloggen oder den Creator zu kontaktieren, um Zugang zu erhalten."
                    },
                    "fr-FR": {
                      singular: "Saisissez le mot de passe pour l'afficher. Vous pouvez également essayer de vous connecter ou de contacter le créateur pour avoir accès."
                    },
                    "ja-JP": {
                      singular: "パスワードを入力して視聴します。ログインするか、クリエイターに問い合わせてアクセスすることもできます。"
                    },
                    "ko-KR": {
                      singular: "비밀번호를 입력하면 볼 수 있습니다. 로그인하거나 크리에이터에게 연락하여 액세스 권한을 얻을 수도 있습니다."
                    },
                    "pt-BR": {
                      singular: "Digite a senha para visualizar. Você também pode tentar fazer login ou entrar em contato com o criador para obter acesso."
                    },
                    "zh-CN": {
                      singular: "输入密码即可观看。您也可以尝试登录，或联系创建者获得访问权限。"
                    }
                  }
                })
              })]
            })
          })
        }), (0, _v1.jsx)(_v9.ModuleWrapper, {
          gridArea: "contentStack",
          h: "min-content",
          children: (0, _v1.jsx)(_v12.VideoDetailsSkeleton, {})
        })]
      })
    });
  }], 0);
}