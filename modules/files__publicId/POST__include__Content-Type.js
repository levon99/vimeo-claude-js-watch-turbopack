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
  let _v13 = ({
    publicId: _v0
  }) => {
    let _v1 = (0, _v12.useViewer)(),
      [_v2, _v3] = (0, _v3.useState)(!1),
      [_v4, _v5] = (0, _v3.useState)(!1),
      [_v6, _v7] = (0, _v3.useState)(null),
      _v8 = async _v0 => {
        _v5(!0), _v7(null);
        try {
          let _v0 = await fetch(`/files/${_v0}/password`, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest"
            },
            body: JSON.stringify({
              password: _v0,
              token: _v1?.xsrft
            })
          });
          if (_v0.ok) return void window.location.reload();
          let _v1 = await _v0.json().catch(() => ({}));
          if (429 === _v0.status) _v7(Error((0, _v11.translate)({
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
          })));else 401 === _v0.status && ("object" == typeof _v1 && null !== _v1 && "error_code" in _v1 && "number" == typeof _v1.error_code ? _v1.error_code : void 0) === 1 ? _v7(Error((0, _v11.translate)({
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
          }))) : _v7(Error((0, _v11.translate)({
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
          })));
          _v3(!0);
        } catch {
          _v7(Error((0, _v11.translate)({
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
          }))), _v3(!0);
        } finally {
          _v5(!1);
        }
      };
    return (0, _v1.jsxs)(_v5.Flex, {
      background: "background",
      flexDirection: "column",
      minHeight: "100vh",
      children: [(0, _v1.jsx)(_v10.DefaultNavigation, {}), (0, _v1.jsx)(_v4.Center, {
        flexGrow: 1,
        children: _v4 ? (0, _v1.jsx)(_v8.Spinner, {
          size: "xl"
        }) : (0, _v1.jsxs)(_v9.PasswordForm, {
          error: _v6,
          isInvalid: _v2,
          onSubmit: _v0 => void _v8(_v0),
          children: [(0, _v1.jsx)(_v6.Header, {
            textAlign: "center",
            variant: "heading-2xl",
            children: (0, _v11.translate)({
              singular: "This file is password protected",
              dictionary: {
                es: {
                  singular: "Este archivo está protegido por contraseña"
                },
                "de-DE": {
                  singular: "Diese Datei ist passwortgeschützt"
                },
                "fr-FR": {
                  singular: "Ce fichier est protégé par un mot de passe"
                },
                "ja-JP": {
                  singular: "このファイルはパスワードで保護されています"
                },
                "ko-KR": {
                  singular: "이 파일은 비밀번호로 보호되어 있습니다"
                },
                "pt-BR": {
                  singular: "Este arquivo está protegido por senha"
                },
                "zh-CN": {
                  singular: "此文件受密码保护"
                }
              }
            })
          }), (0, _v1.jsx)(_v7.Paragraph, {
            textAlign: "center",
            variant: "body-lg",
            children: (0, _v11.translate)({
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
      })]
    });
  };
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = () => (0, _v1.jsx)(_v15.ErrorPageWithHeader, {
    error: new _v14.ForbiddenError(),
    shouldShowSearch: !1
  });
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = ({
      label: _v0,
      value: _v1
    }) => (0, _v1.jsxs)(_v5.Flex, {
      alignItems: "center",
      gap: "sm",
      justifyContent: "space-between",
      children: [(0, _v1.jsx)(_v21.Text, {
        color: "text-secondary",
        variant: "body-sm",
        children: _v0
      }), (0, _v1.jsx)(_v21.Text, {
        variant: "body-sm",
        children: _v1
      })]
    }),
    _v28 = ({
      file: _v0
    }) => {
      let _v1 = (0, _v26.useFormatDateTime)(),
        _v2 = (0, _v23.getContentTypeCategory)(_v0.contentType),
        _v3 = (0, _v23.getFileExtension)(_v0.name),
        _v4 = (0, _v25.getContentTypeLabel)(_v2),
        _v5 = "" === _v3 ? _v4 : `${_v4} \xb7 ${_v3}`,
        _v6 = "" === _v3 ? _v4 : _v3,
        _v7 = _v0.fileSize > 0 ? String((0, _v24.bytesToSize)(_v0.fileSize, 1)) : "",
        _v8 = _v0.uploader.name,
        _v9 = _v0.uploader.pictures?.sizes?.[0]?.link,
        _v10 = _v0.allowDownloads && null != _v0.downloadUrl && "" !== _v0.downloadUrl;
      return (0, _v1.jsxs)(_v5.Flex, {
        background: "surface",
        borderRadius: "md",
        "data-testid": "file-viewer-panel",
        flexDirection: "column",
        flexShrink: 0,
        gap: "xl",
        justifyContent: "space-between",
        p: "lg",
        width: {
          base: "100%",
          lg: "22.5rem"
        },
        children: [(0, _v1.jsxs)(_v5.Flex, {
          flexDirection: "column",
          gap: "xl",
          children: [(0, _v1.jsxs)(_v5.Flex, {
            flexDirection: "column",
            gap: "sm",
            children: [(0, _v1.jsx)(_v23.FileThumbnailContent, {
              contentType: _v0.contentType,
              name: _v0.name,
              variant: "filled"
            }), (0, _v1.jsxs)(_v5.Flex, {
              flexDirection: "column",
              children: [(0, _v1.jsx)(_v21.Text, {
                noOfLines: 2,
                variant: "heading-md",
                children: _v0.name
              }), (0, _v1.jsx)(_v21.Text, {
                color: "text-secondary",
                variant: "body-sm",
                children: _v5
              })]
            })]
          }), _v10 && (0, _v1.jsx)(_v19.Button, {
            as: "a",
            "data-testid": "file-viewer-download",
            href: _v0.downloadUrl,
            leftIcon: (0, _v1.jsx)(_v22.DownloadImport, {}),
            variant: "secondary",
            width: "100%",
            children: (0, _v11.translate)({
              singular: "Download original",
              dictionary: {
                es: {
                  singular: "Descargar original"
                },
                "de-DE": {
                  singular: "Original herunterladen"
                },
                "fr-FR": {
                  singular: "Télécharger l'original"
                },
                "ja-JP": {
                  singular: "オリジナルをダウンロード"
                },
                "ko-KR": {
                  singular: "원본 다운로드"
                },
                "pt-BR": {
                  singular: "Baixar original"
                },
                "zh-CN": {
                  singular: "下载原始文件"
                }
              }
            })
          }), (0, _v1.jsx)(_v20.Divider, {}), (0, _v1.jsxs)(_v5.Flex, {
            flexDirection: "column",
            gap: "sm",
            children: [(0, _v1.jsx)(_v27, {
              label: (0, _v11.translate)({
                singular: "Date",
                dictionary: {
                  es: {
                    singular: "Fecha"
                  },
                  "de-DE": {
                    singular: "Datum"
                  },
                  "fr-FR": {
                    singular: "Date "
                  },
                  "ja-JP": {
                    singular: "日付"
                  },
                  "ko-KR": {
                    singular: "날짜"
                  },
                  "pt-BR": {
                    singular: "Data"
                  },
                  "zh-CN": {
                    singular: "日期"
                  }
                }
              }),
              value: _v1.getDisplayDate(_v0.createdTime)
            }), (0, _v1.jsx)(_v27, {
              label: (0, _v11.translate)({
                singular: "File type",
                dictionary: {
                  es: {
                    singular: "Tipo de archivo"
                  },
                  "de-DE": {
                    singular: "Dateityp"
                  },
                  "fr-FR": {
                    singular: "Type de fichier"
                  },
                  "ja-JP": {
                    singular: "ファイルタイプ"
                  },
                  "ko-KR": {
                    singular: "파일 유형"
                  },
                  "pt-BR": {
                    singular: "Tipo de arquivo"
                  },
                  "zh-CN": {
                    singular: "文件类型"
                  }
                }
              }),
              value: _v6
            }), (0, _v1.jsx)(_v27, {
              label: (0, _v11.translate)({
                singular: "File size",
                dictionary: {
                  es: {
                    singular: "Tamaño del archivo"
                  },
                  "de-DE": {
                    singular: "Dateigröße"
                  },
                  "fr-FR": {
                    singular: "Taille du fichier"
                  },
                  "ja-JP": {
                    singular: "ファイルサイズ"
                  },
                  "ko-KR": {
                    singular: "파일 크기"
                  },
                  "pt-BR": {
                    singular: "Tamanho do Arquivo"
                  },
                  "zh-CN": {
                    singular: "文件大小"
                  }
                }
              }),
              value: _v7
            })]
          })]
        }), (0, _v1.jsxs)(_v5.Flex, {
          alignItems: "center",
          gap: "md",
          children: [(0, _v1.jsx)(_v18.Avatar, {
            alt: _v8,
            nameProps: {
              name: _v8
            },
            size: "md",
            src: _v9
          }), (0, _v1.jsxs)(_v5.Flex, {
            flexDirection: "column",
            children: [(0, _v1.jsx)(_v21.Text, {
              color: "text-secondary",
              variant: "body-xs",
              children: (0, _v11.translate)({
                singular: "Uploaded by",
                dictionary: {
                  es: {
                    singular: "Subido por"
                  },
                  "de-DE": {
                    singular: "Hochgeladen von"
                  },
                  "fr-FR": {
                    singular: "Mis en ligne par"
                  },
                  "ja-JP": {
                    singular: "がアップロードしました"
                  },
                  "ko-KR": {
                    singular: "업로드한 창작가:"
                  },
                  "pt-BR": {
                    singular: "Carregado por"
                  },
                  "zh-CN": {
                    singular: "上传者"
                  }
                }
              })
            }), (0, _v1.jsx)(_v21.Text, {
              variant: "body-md",
              children: _v8
            })]
          })]
        })]
      });
    },
    _v29 = ({
      file: _v0
    }) => (0, _v1.jsxs)(_v5.Flex, {
      background: "background",
      flexDirection: "column",
      minHeight: "100vh",
      children: [(0, _v1.jsx)(_v10.DefaultNavigation, {}), (0, _v1.jsxs)(_v5.Flex, {
        alignItems: "stretch",
        flexDirection: {
          base: "column",
          lg: "row"
        },
        flexGrow: 1,
        gap: "lg",
        p: "lg",
        children: [(0, _v1.jsx)(_v17.Box, {
          background: "black",
          borderRadius: "md",
          "data-testid": "file-viewer-preview",
          flexGrow: 1,
          minHeight: {
            base: "18rem",
            lg: "45rem"
          }
        }), (0, _v1.jsx)(_v28, {
          file: _v0
        })]
      })]
    });
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  async function _v33({
    baseUrl: _v0,
    select: _v1,
    where: {
      fileId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v31.measureLatency)("getFile", "GET", async () => {
      let _v0 = await fetch(`${_v0}/files/${_v2}?${(0, _v32.searchQueryString)(_v3)}&fields=${_v1.map(_v32.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v32.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v32.deepCamelCase)(_v1);
    });
  }
  let _v34 = ["publicId", "name", "contentType", "fileSize", "privacy", "allowDownloads", "downloadUrl", "createdTime", "uploader.name", "uploader.pictures.sizes"],
    _v35 = async _v0 => {
      let _v1 = "object" == typeof _v0 && null !== _v0 && "res" in _v0 && _v0.res instanceof Response ? _v0.res : void 0;
      if (!_v1) return;
      let _v2 = await _v1.json().catch(() => ({}));
      return "object" == typeof _v2 && null !== _v2 && "error_code" in _v2 && "number" == typeof _v2.error_code ? _v2.error_code : void 0;
    },
    _v36 = async _v0 => {
      let _v1 = _v0.query.publicId,
        _v2 = (Array.isArray(_v1) ? _v1[0] : _v1) ?? "",
        _v3 = _v0.req.cookies[`${_v2}_password`];
      try {
        let _v0 = await _v33({
          select: _v34,
          where: {
            fileId: _v2
          },
          query: void 0 === _v3 ? void 0 : {
            password: _v3
          },
          baseUrl: _v0.baseUrl,
          headers: {
            ..._v0.headers,
            accept: "application/json"
          }
        });
        return ("password" === _v0.privacy || void 0 !== _v3) && (0, _v30.setCacheHeaders)(_v0.req, _v0.res, {
          ttl: 0
        }), {
          props: {
            publicId: _v2,
            file: _v0,
            requiresPassword: !1
          }
        };
      } catch (_v0) {
        let _v1 = await _v35(_v0);
        if (0 === _v1 || 0 === _v1) return (0, _v30.setCacheHeaders)(_v0.req, _v0.res, {
          ttl: 0
        }), {
          props: {
            publicId: _v2,
            file: null,
            requiresPassword: !0
          }
        };
        return _v0.res.statusCode = 404, {
          props: {
            publicId: _v2,
            file: null,
            requiresPassword: !1
          }
        };
      }
    };
  (0, _v2.withPageSetup)(_v36, {
    inlineViewer: "all",
    noIndex: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, ({
    file: _v0,
    publicId: _v1,
    requiresPassword: _v2
  }) => _v2 ? (0, _v1.jsx)(_v13, {
    publicId: _v1
  }) : null === _v0 ? (0, _v1.jsx)(_v16, {}) : (0, _v1.jsx)(_v29, {
    file: _v0
  })], 0);
}