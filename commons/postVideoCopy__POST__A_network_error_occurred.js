{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  async function _v8({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      videoId: _v3
    },
    ..._v4
  }) {
    return (0, _v7.measureLatency)("postVideoCopy", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v3}/copy?fields=${_v1.map(_v6.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v6.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v6.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v6.deepCamelCase)(_v1);
    });
  }
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = ["uri", "name"],
    _v12 = ({
      onFailure: _v0,
      onSuccess: _v1
    }) => {
      let {
          baseUrl: _v2,
          jwt: _v3,
          xVimeoPage: _v4,
          locale: _v5
        } = (0, _v9.useGctlConfig)(),
        [_v6, _v7] = (0, _v2.useState)(!1),
        _v8 = (0, _v2.useRef)(!1);
      return [(0, _v2.useCallback)(async (_v0, _v1) => {
        if (!_v8.current) {
          if (!_v2) return void _v0("unknown");
          _v8.current = !0, _v7(!0);
          try {
            let _v0 = await _v8({
              baseUrl: _v2,
              select: _v11,
              where: {
                videoId: (0, _v10.idFromUri)(_v0)
              },
              variables: _v1 ? {
                name: _v1
              } : void 0,
              headers: {
                "Content-Type": "application/json",
                Authorization: _v3 ? `jwt ${_v3}` : "",
                "Vimeo-Page": `${_v4}`,
                "Accept-Language": _v5 ?? "en"
              }
            });
            if (!_v0?.uri) return void _v0("unknown");
            _v1({
              uri: _v0.uri,
              name: _v0.name ?? _v1
            });
          } catch (_v0) {
            let _v1 = "unknown";
            if (_v0 instanceof _v6.NetworkError) try {
              _v1 = (_v0 => {
                switch (_v0?.error_code) {
                  case 0:
                    return "quota_size";
                  case 0:
                    return "quota_count";
                  case 0:
                    return "restricted_storage";
                  case 3:
                    return _v0?.error?.toLowerCase().includes("not ready") ? "not_ready" : "not_allowed";
                  default:
                    return "unknown";
                }
              })(await _v0.res.json());
            } catch {}
            _v0(_v1);
          } finally {
            _v8.current = !1, _v7(!1);
          }
        }
      }, [_v2, _v3, _v5, _v0, _v1, _v4]), {
        loading: _v6
      }];
    };
  _v0.s(["useCopyVideo", 0, _v12], 0);
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = ["free", "starter", "standard", "advanced"],
    _v20 = _v0 => !!_v0 && _v19.includes(_v0);
  _v0.s(["isPerSeatSelfServeTier", 0, _v20], 0);
  let _v21 = (_v0, _v1) => !!_v0 && !!_v1.user?.uri && _v0 === _v1.user.uri;
  _v0.s(["isCopyableVideoContent", 0, _v0 => "stock" !== _v0.type && "live" !== _v0.type && _v0.privacy?.view !== "ptv" && _v0.privacy?.view !== "ptvhide", "useCopyVideoFlow", 0, ({
    onAfterCopySuccess: _v0
  } = {}) => {
    let _v1 = (0, _v13.useNotification)(),
      _v2 = (0, _v5.useViewer)(),
      _v3 = (0, _v14.usePageName)(),
      {
        open: _v4,
        close: _v5
      } = (0, _v15.useUpsellModal)(),
      [_v6, _v7] = (0, _v2.useState)(null),
      [_v8, _v9] = (0, _v2.useState)(""),
      _v10 = (0, _v2.useCallback)(() => {
        _v7(null), _v9("");
      }, []),
      _v11 = (0, _v2.useCallback)(_v0 => {
        _v4({
          tracking: {
            params: {
              feature: "video_library",
              location: "copy_video",
              page: _v3,
              upsell_name: "at_limit_quota_copy_video"
            },
            paywallTracking: {
              paywallTrigger: `${_v3}_copy_video_quota_limit_button`,
              paywallLocation: _v3,
              paywallType: "popup",
              paywallFeature: _v0
            }
          },
          onClose: _v5
        });
      }, [_v4, _v5, _v3]),
      _v12 = (0, _v2.useCallback)(_v0 => {
        _v20(_v2?.user?.account) ? _v11(_v0) : window.location.assign((0, _v4.buildUpgradePlanUrl)({
          paywallTrigger: `${_v3}_copy_video_quota_limit_button`,
          paywallLocation: _v3,
          paywallFeature: _v0
        }));
      }, [_v11, _v3, _v2?.user?.account]),
      _v13 = (0, _v2.useCallback)(() => {
        _v1({
          content: (0, _v3.translate)({
            singular: "This video can't be copied. The owner has reached their upload limit.",
            dictionary: {
              es: {
                singular: "Este vídeo no se puede copiar. El propietario ha alcanzado su límite de subida."
              },
              "de-DE": {
                singular: "Dieses Video kann nicht kopiert werden. Das Upload-Limit des Kontoinhabers wurde erreicht."
              },
              "fr-FR": {
                singular: "Cette vidéo ne peut pas être copiée. Le propriétaire a atteint sa limite de téléversement."
              },
              "ja-JP": {
                singular: "この動画はコピーできません。所有者がアップロードの上限に達しています。"
              },
              "ko-KR": {
                singular: "이 비디오는 복사할 수 없습니다. 소유자가 업로드 한도에 도달했습니다."
              },
              "pt-BR": {
                singular: "Este vídeo não pode ser copiado. O proprietário atingiu o limite de envios."
              },
              "zh-CN": {
                singular: "该视频无法复制。视频所有者已达到其上传限制。"
              }
            }
          }),
          status: "error"
        });
      }, [_v1]),
      _v14 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v6?.uri;
        _v10(), _v1 && _v0?.(_v0, {
          uri: _v1
        });
        let _v2 = `/manage/videos/${(0, _v10.idFromUri)(_v0.uri)}`;
        _v1({
          content: (0, _v3.translate)({
            singular: 'Created "{COPIED_VIDEO_NAME}". {LINK}Open page{/LINK}',
            replacements: {
              COPIED_VIDEO_NAME: _v0.name,
              LINK: _v0 => (0, _v1.jsx)(_v16.LinkComponent, {
                href: _v2,
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: 'Creado "{COPIED_VIDEO_NAME}". {LINK}Abrir página{/LINK}'
              },
              "de-DE": {
                singular: 'Erstellt "{COPIED_VIDEO_NAME}". {LINK}Seite öffnen{/LINK}'
              },
              "fr-FR": {
                singular: 'Créé "{COPIED_VIDEO_NAME}". {LINK}Ouvrir la page{/LINK}'
              },
              "ja-JP": {
                singular: "「{COPIED_VIDEO_NAME}」を作成しました。 {LINK}ページを開く{/LINK}"
              },
              "ko-KR": {
                singular: '"{COPIED_VIDEO_NAME}"이(가) 생성되었습니다. {LINK}페이지 열기{/LINK}'
              },
              "pt-BR": {
                singular: 'Criado "{COPIED_VIDEO_NAME}". {LINK}Abrir página{/LINK}'
              },
              "zh-CN": {
                singular: '已创建 "{COPIED_VIDEO_NAME}"。 {LINK}打开页面{/LINK}'
              }
            }
          }),
          status: "success"
        });
      }, [_v10, _v1, _v0, _v6?.uri]),
      [_v15, {
        loading: _v16
      }] = _v12({
        onFailure: (0, _v2.useCallback)(_v0 => {
          switch (_v0) {
            case "quota_count":
            case "quota_size":
            case "restricted_storage":
              if (_v10(), _v6 && !_v21(_v2?.user?.uri, _v6)) return void _v13();
              _v12("quota_count" === _v0 ? "quota" : "storage_limit");
              return;
            case "not_ready":
              _v10(), _v1({
                content: (0, _v3.translate)({
                  singular: "Available once this video finishes processing",
                  dictionary: {
                    es: {
                      singular: "Disponible una vez que este vídeo termine de procesarse"
                    },
                    "de-DE": {
                      singular: "Verfügbar, sobald die Verarbeitung dieses Videos abgeschlossen ist"
                    },
                    "fr-FR": {
                      singular: "Disponible une fois que cette vidéo aura fini d'être traitée."
                    },
                    "ja-JP": {
                      singular: "この動画の処理が完了次第、利用可能になります。"
                    },
                    "ko-KR": {
                      singular: "이 비디오는 처리 완료 후 이용할 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Disponível assim que o processamento deste vídeo for concluído."
                    },
                    "zh-CN": {
                      singular: "该视频处理完成后可用"
                    }
                  }
                }),
                status: "error"
              });
              return;
            case "not_allowed":
              _v10(), _v1({
                content: (0, _v3.translate)({
                  singular: "This video can't be copied.",
                  dictionary: {
                    es: {
                      singular: "Este vídeo no se puede copiar."
                    },
                    "de-DE": {
                      singular: "Dieses Video kann nicht kopiert werden."
                    },
                    "fr-FR": {
                      singular: "Cette vidéo ne peut pas être copiée."
                    },
                    "ja-JP": {
                      singular: "この動画はコピーできません。"
                    },
                    "ko-KR": {
                      singular: "이 비디오는 복사할 수 없습니다."
                    },
                    "pt-BR": {
                      singular: "Este vídeo não pode ser copiado."
                    },
                    "zh-CN": {
                      singular: "该视频无法复制。"
                    }
                  }
                }),
                status: "error"
              });
              return;
            default:
              _v1({
                content: (0, _v3.translate)({
                  singular: "Could not copy video. Please try again.",
                  dictionary: {
                    es: {
                      singular: "No se pudo copiar el vídeo. Por favor, inténtelo de nuevo."
                    },
                    "de-DE": {
                      singular: "Das Video konnte nicht kopiert werden. Bitte versuchen Sie es erneut."
                    },
                    "fr-FR": {
                      singular: "Impossible de copier la vidéo. Veuillez réessayer."
                    },
                    "ja-JP": {
                      singular: "動画をコピーできませんでした。もう一度お試しください。"
                    },
                    "ko-KR": {
                      singular: "비디오를 복사할 수 없습니다. 다시 시도해 주세요."
                    },
                    "pt-BR": {
                      singular: "Não foi possível copiar o vídeo. Por favor, tente novamente."
                    },
                    "zh-CN": {
                      singular: "无法复制视频. 请再试一次."
                    }
                  }
                }),
                status: "error"
              });
          }
        }, [_v10, _v1, _v13, _v12, _v6, _v2?.user?.uri]),
        onSuccess: _v14
      }),
      _v17 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v0.user?.uploadQuota,
          _v2 = _v1?.lifetime?.free === 0,
          _v3 = _v1?.periodic?.free === 0;
        if (_v2 || _v3) return _v21(_v2?.user?.uri, _v0) ? void _v12(_v1?.space?.unit === "video_size" ? "storage_limit" : "quota") : void _v13();
        _v7(_v0), _v9((0, _v18.buildCopyPrefilledTitle)(_v0.name ?? ""));
      }, [_v13, _v12, _v2?.user?.uri]),
      _v18 = (0, _v2.useCallback)(_v0 => {
        _v6 && _v15(_v6.uri, _v0);
      }, [_v15, _v6]);
    return {
      openCopyVideoModal: _v17,
      copyVideoModal: (0, _v1.jsx)(_v17.NameInputModal, {
        isOpen: !!_v6,
        isLoading: _v16,
        title: (0, _v3.translate)({
          singular: "Make a copy",
          dictionary: {
            es: {
              singular: "Hacer una copia"
            },
            "de-DE": {
              singular: "Kopie erstellen"
            },
            "fr-FR": {
              singular: "Faire une copie"
            },
            "ja-JP": {
              singular: "コピーを作る"
            },
            "ko-KR": {
              singular: "사본 만들기"
            },
            "pt-BR": {
              singular: "Fazer uma cópia"
            },
            "zh-CN": {
              singular: "复制"
            }
          }
        }),
        name: _v8,
        onClose: _v10,
        onNameChange: _v9,
        onSubmit: _v18
      }),
      isCopyingVideo: _v16
    };
  }], 0);
}