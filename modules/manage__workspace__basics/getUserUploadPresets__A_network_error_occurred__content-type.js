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
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  async function _v31({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v29.measureLatency)("getUserUploadPresets", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/upload_presets?${(0, _v30.searchQueryString)(_v3)}&fields=${_v1.map(_v30.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  async function _v32({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v29.measureLatency)("putUserUploadPresets", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/upload_presets`, {
        ..._v3,
        method: "PUT",
        body: JSON.stringify((0, _v30.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  async function _v33({
    baseUrl: _v0,
    where: {
      userId: _v1
    },
    ..._v2
  }) {
    return (0, _v29.measureLatency)("deleteUserUploadPresets", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/upload_presets`, {
        ..._v2,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  function _v38(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v37.useGctlConfig)();
    return (0, _v34.default)(_v2 ? `/users/${_v2.where.userId}/upload_presets${(0, _v28.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v31({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  function _v39() {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v37.useGctlConfig)(),
      [_v4, _v5] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v32({
          ..._v0,
          baseUrl: _v0,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        });
        _v5({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v5({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v0, _v2, _v1, _v3, _v5]), _v4];
  }
  function _v40() {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v37.useGctlConfig)(),
      [_v4, _v5] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v33({
          ..._v0,
          baseUrl: _v0,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        });
        _v5({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v5({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v0, _v2, _v1, _v3, _v5]), _v4];
  }
  "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v38, {
    endpoint: "/users/:userId/upload_presets",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v35.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v37.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/upload_presets${(0, _v28.serializeQuery)(_v0)}`, _v31({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/users/:userId/upload_presets",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v37.useGctlConfig)();
    return (0, _v36.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/upload_presets?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v31({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/upload_presets",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v39, {
    endpoint: "/users/:userId/upload_presets",
    method: "PUT"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v40, {
    endpoint: "/users/:userId/upload_presets",
    method: "DELETE"
  });
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  let _v57 = ["language", "drugs", "violence", "nudity"],
    _v58 = ["preferences.videos.license", "preferences.videos.privacy.add", "preferences.videos.privacy.allowShareLink", "preferences.videos.privacy.clipEmbedAllowedDomains", "preferences.videos.privacy.comments", "preferences.videos.privacy.download", "preferences.videos.privacy.embed", "preferences.videos.privacy.password", "preferences.videos.privacy.view", "preferences.videos.password", "preferences.videos.hideStats", "preferences.videos.rating", "preferences.videos.autoccDisplayEnabledByDefault", "preferences.videos.sharingLinkDefaultExpiryDays"],
    _v59 = ({
      addDomainToWhitelist: _v0,
      domainWhitelist: _v1,
      removeDomainFromWhitelist: _v2
    }) => {
      let [_v3, _v4] = (0, _v2.useState)(""),
        [_v5, _v6] = (0, _v2.useState)(null),
        _v7 = (0, _v2.useMemo)(() => ({
          listEmpty: (0, _v41.translate)({
            singular: "At least 1 domain must be allowed",
            dictionary: {
              es: {
                singular: "Se debe permitir, al menos, 1 dominio"
              },
              "de-DE": {
                singular: "Mindestens eine Domain muss zugelassen werden."
              },
              "fr-FR": {
                singular: "Au moins un domaine doit être autorisé"
              },
              "ja-JP": {
                singular: "少なくとも1つのドメインを許可する必要があります"
              },
              "ko-KR": {
                singular: "최소 1개의 도메인이 허용되어야 합니다."
              },
              "pt-BR": {
                singular: "Pelo menos 1 domínio deve ser permitido"
              },
              "zh-CN": {
                singular: "必须至少允许 1 个域名"
              }
            }
          }),
          invalidUrl: (0, _v41.translate)({
            singular: "Enter a valid URL",
            dictionary: {
              es: {
                singular: "Ingresar un URL válido"
              },
              "de-DE": {
                singular: "Gib eine gültige URL ein"
              },
              "fr-FR": {
                singular: "Saisissez une URL valide"
              },
              "ja-JP": {
                singular: "正しいURLを入力してください"
              },
              "ko-KR": {
                singular: "유효한 URL을 입력하세요."
              },
              "pt-BR": {
                singular: "Digite um URL válido"
              },
              "zh-CN": {
                singular: "输入有效的 URL"
              }
            }
          }),
          alreadyAdded: (0, _v41.translate)({
            singular: "Domain already added",
            dictionary: {
              es: {
                singular: "El dominio ya se agregó"
              },
              "de-DE": {
                singular: "Domain wurde bereits hinzugefügt."
              },
              "fr-FR": {
                singular: "Le domaine a déjà été ajouté"
              },
              "ja-JP": {
                singular: "ドメインはすでに追加されています"
              },
              "ko-KR": {
                singular: "도메인이 이미 추가되었습니다."
              },
              "pt-BR": {
                singular: "Domínio já adicionado"
              },
              "zh-CN": {
                singular: "域名已被添加"
              }
            }
          })
        }), []),
        _v8 = _v5 ? _v7[_v5] : "",
        _v9 = "listEmpty" !== _v5 && _v1.length > 0,
        _v10 = () => {
          if ("" === _v3.trim()) return;
          _v4("");
          let _v0 = (_v0 => {
            try {
              let _v0;
              try {
                _v0 = new URL(_v0);
              } catch (_v0) {
                _v0 = new URL("http://" + _v0);
              }
              if ("http:" !== _v0.protocol && "https:" !== _v0.protocol) return null;
              let _v1 = _v0.hostname.startsWith("www.") ? _v0.hostname.substring(4) : _v0.hostname;
              if (_v1.includes(".")) return _v1;
              return null;
            } catch (_v0) {
              return null;
            }
          })(_v3);
          _v0 ? _v1.includes(_v0) ? _v6("alreadyAdded") : (_v6(null), _v0(_v0)) : _v6("invalidUrl");
        },
        _v11 = (0, _v2.useMemo)(() => _v1.map(_v0 => (0, _v1.jsxs)(_v53.Tag, {
          size: "sm",
          children: [(0, _v1.jsx)(_v53.TagLabel, {
            children: _v0
          }), (0, _v1.jsx)(_v53.TagCloseButton, {
            onClick: () => _v2(_v0)
          })]
        }, _v0)), [_v1, _v2]);
      return (0, _v1.jsxs)(_v55.VStack, {
        w: "100%",
        gap: "sm",
        align: "flex-start",
        children: [(0, _v1.jsx)(_v22.Text, {
          variant: "heading-xs",
          children: (0, _v41.translate)({
            singular: "Allowed domains",
            dictionary: {
              es: {
                singular: "Dominios permitidos"
              },
              "de-DE": {
                singular: "Zulässige Domains"
              },
              "fr-FR": {
                singular: "Domaines autorisés"
              },
              "ja-JP": {
                singular: "許可ドメイン"
              },
              "ko-KR": {
                singular: "허용되는 도메인"
              },
              "pt-BR": {
                singular: "Domínios permitidos"
              },
              "zh-CN": {
                singular: "允许的域名"
              }
            }
          })
        }), (0, _v1.jsxs)(_v13.FormControl, {
          w: "100%",
          isInvalid: !!_v5,
          children: [(0, _v1.jsxs)(_v51.InputGroup, {
            size: "md",
            children: [(0, _v1.jsx)(_v50.Input, {
              autoFocus: !0,
              variant: "outlined",
              placeholder: "domain.com",
              value: _v3,
              size: "md",
              onChange: _v0 => {
                _v5 && _v6(null), _v4(_v0.target.value);
              },
              onKeyDown: _v0 => "Enter" === _v0.key && _v10(),
              onBlur: _v10
            }), (0, _v1.jsx)(_v52.InputRightElement, {
              children: (0, _v1.jsx)(_v54.Tooltip, {
                label: (0, _v41.translate)({
                  singular: "Add to list",
                  dictionary: {
                    es: {
                      singular: "Agregar a la lista"
                    },
                    "de-DE": {
                      singular: "Zur Liste hinzufügen"
                    },
                    "fr-FR": {
                      singular: "Ajouter à la liste"
                    },
                    "ja-JP": {
                      singular: "リストに追加"
                    },
                    "ko-KR": {
                      singular: "목록에 추가"
                    },
                    "pt-BR": {
                      singular: "Adicionar à lista"
                    },
                    "zh-CN": {
                      singular: "添加到列表中"
                    }
                  }
                }),
                placement: "top",
                children: (0, _v1.jsx)(_v49.IconButton, {
                  "aria-label": (0, _v41.translate)({
                    singular: "Add domain",
                    dictionary: {
                      es: {
                        singular: "Agregar un dominio"
                      },
                      "de-DE": {
                        singular: "Domäne hinzufügen"
                      },
                      "fr-FR": {
                        singular: "Ajouter un domaine"
                      },
                      "ja-JP": {
                        singular: "ドメインを追加"
                      },
                      "ko-KR": {
                        singular: "도메인 추가"
                      },
                      "pt-BR": {
                        singular: "Adicionar domínio"
                      },
                      "zh-CN": {
                        singular: "添加域"
                      }
                    }
                  }),
                  size: "sm",
                  variant: "tertiary",
                  icon: (0, _v1.jsx)(_v56.PlusCircle, {
                    cursor: "pointer"
                  }),
                  onClick: _v10
                })
              })
            })]
          }), (0, _v1.jsx)(_v14.FormErrorMessage, {
            children: _v8
          })]
        }), _v9 && (0, _v1.jsx)(_v48.HStack, {
          flexWrap: "wrap",
          maxH: (0, _v21.rem)(120),
          overflowY: "auto",
          mt: "xs",
          children: _v11
        })]
      });
    };
  var _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = [{
      value: "keep-skip",
      label: () => (0, _v41.translate)({
        singular: "Keep folder defaults and skip their videos",
        dictionary: {
          es: {
            singular: "Conservar valores predeterminados de las carpetas y omitir sus videos"
          },
          "de-DE": {
            singular: "Standardeinstellungen der Ordner beibehalten und deren Videos überspringen"
          },
          "fr-FR": {
            singular: "Conserver les paramètres par défaut des dossiers et ne pas mettre à jour leurs vidéos"
          },
          "ja-JP": {
            singular: "フォルダのデフォルトを維持し、そのフォルダ内の動画は更新しない"
          },
          "ko-KR": {
            singular: "폴더 기본값을 유지하고 해당 폴더의 동영상은 건너뜁니다."
          },
          "pt-BR": {
            singular: "Manter os padrões de pasta e ignorar os vídeos dessas pastas"
          },
          "zh-CN": {
            singular: "保留文件夹默认设置并跳过其视频"
          }
        }
      }),
      description: () => (0, _v41.translate)({
        singular: "Folder defaults are preserved and existing videos in those folders are not updated. The new account default only applies to videos that are not part of folders with custom defaults.",
        dictionary: {
          es: {
            singular: "Se conservan los valores predeterminados de las carpetas y los videos existentes en esas carpetas no se actualizan. El nuevo valor predeterminado de la cuenta solo se aplica a los videos que no formen parte de carpetas con valores predeterminados personalizados."
          },
          "de-DE": {
            singular: "Die Standardeinstellungen der Ordner bleiben erhalten und vorhandene Videos in diesen Ordnern werden nicht aktualisiert. Der neue Kontostandard gilt nur für Videos, die nicht Teil von Ordnern mit benutzerdefinierten Standardeinstellungen sind."
          },
          "fr-FR": {
            singular: "Les paramètres par défaut des dossiers sont conservés et les vidéos existantes dans ces dossiers ne sont pas mises à jour. Le nouveau paramètre par défaut du compte ne s'applique qu'aux vidéos qui ne font pas partie de dossiers ayant des paramètres par défaut personnalisés."
          },
          "ja-JP": {
            singular: "フォルダのデフォルトは保持され、これらのフォルダ内の既存の動画は更新されません。新しいアカウントのデフォルトは、カスタムデフォルトを持たないフォルダに属する動画にのみ適用されます。"
          },
          "ko-KR": {
            singular: "폴더 기본값은 유지되며, 해당 폴더에 있는 기존 동영상은 업데이트되지 않습니다. 새 계정 기본값은 사용자 지정 기본값이 설정된 폴더에 속하지 않은 동영상에만 적용됩니다."
          },
          "pt-BR": {
            singular: "Os padrões de pasta são preservados e os vídeos existentes nessas pastas não são atualizados. O novo padrão da conta aplica-se apenas aos vídeos que não fazem parte de pastas com padrões personalizados."
          },
          "zh-CN": {
            singular: "保留文件夹默认设置，已存在于这些文件夹中的视频不会更新。新的账户默认仅适用于不属于具有自定义默认设置的文件夹的视频。"
          }
        }
      })
    }, {
      value: "keep-update",
      label: () => (0, _v41.translate)({
        singular: "Keep folder defaults, but update their videos anyway",
        dictionary: {
          es: {
            singular: "Conservar valores predeterminados de las carpetas, pero actualizar sus videos de todos modos"
          },
          "de-DE": {
            singular: "Standardeinstellungen der Ordner beibehalten, deren Videos jedoch trotzdem aktualisieren"
          },
          "fr-FR": {
            singular: "Conserver les paramètres par défaut des dossiers, mais mettre à jour leurs vidéos quand même"
          },
          "ja-JP": {
            singular: "フォルダのデフォルトは維持するが、それでもフォルダ内の動画は更新する"
          },
          "ko-KR": {
            singular: "폴더 기본값은 유지하되, 그럼에도 불구하고 해당 폴더의 동영상을 업데이트합니다."
          },
          "pt-BR": {
            singular: "Manter os padrões de pasta, mas atualizar os vídeos dessas pastas mesmo assim"
          },
          "zh-CN": {
            singular: "保留文件夹默认设置，但仍更新其视频"
          }
        }
      }),
      description: () => (0, _v41.translate)({
        singular: "Folder defaults are preserved, but all existing videos, including those in folders with custom defaults, are updated to the new account default.",
        dictionary: {
          es: {
            singular: "Se conservan los valores predeterminados de las carpetas, pero todos los videos existentes, incluidos los de carpetas con valores predeterminados personalizados, se actualizan al nuevo valor predeterminado de la cuenta."
          },
          "de-DE": {
            singular: "Die Standardeinstellungen der Ordner bleiben erhalten, aber alle vorhandenen Videos, einschließlich derjenigen in Ordnern mit benutzerdefinierten Standardeinstellungen, werden auf den neuen Kontostandard aktualisiert."
          },
          "fr-FR": {
            singular: "Les paramètres par défaut des dossiers sont conservés, mais toutes les vidéos existantes, y compris celles situées dans des dossiers avec des paramètres par défaut personnalisés, sont mises à jour vers le nouveau paramètre par défaut du compte."
          },
          "ja-JP": {
            singular: "フォルダのデフォルトは保持されますが、カスタムデフォルトを持つフォルダ内の動画を含むすべての既存の動画が新しいアカウントのデフォルトに更新されます。"
          },
          "ko-KR": {
            singular: "폴더 기본값은 유지되지만, 사용자 지정 기본값이 있는 폴더에 있는 동영상을 포함한 모든 기존 동영상이 새 계정 기본값으로 업데이트됩니다."
          },
          "pt-BR": {
            singular: "Os padrões de pasta são preservados, mas todos os vídeos existentes, incluindo os em pastas com padrões personalizados, são atualizados para o novo padrão da conta."
          },
          "zh-CN": {
            singular: "保留文件夹默认设置，但所有现有视频（包括位于具有自定义默认设置的文件夹中的视频）都会更新为新的账户默认。"
          }
        }
      })
    }, {
      value: "reset",
      label: () => (0, _v41.translate)({
        singular: "Reset folder defaults to the new account default",
        dictionary: {
          es: {
            singular: "Restablecer los valores predeterminados de las carpetas al nuevo valor predeterminado de la cuenta"
          },
          "de-DE": {
            singular: "Standardeinstellungen der Ordner auf den neuen Kontostandard zurücksetzen"
          },
          "fr-FR": {
            singular: "Réinitialiser les paramètres par défaut des dossiers sur le nouveau paramètre par défaut du compte"
          },
          "ja-JP": {
            singular: "フォルダのデフォルトを新しいアカウントのデフォルトにリセットする"
          },
          "ko-KR": {
            singular: "폴더 기본값을 새 계정 기본값으로 재설정"
          },
          "pt-BR": {
            singular: "Redefinir os padrões de pasta para o novo padrão da conta"
          },
          "zh-CN": {
            singular: "将文件夹默认设置重置为新的账户默认值"
          }
        }
      }),
      description: () => (0, _v41.translate)({
        singular: "Folder defaults are replaced, and all existing videos, including those in folders with custom defaults, are updated to the new account default.",
        dictionary: {
          es: {
            singular: "Se reemplazan los valores predeterminados de las carpetas y todos los videos existentes, incluidos los de carpetas con valores predeterminados personalizados, se actualizan al nuevo valor predeterminado de la cuenta."
          },
          "de-DE": {
            singular: "Die Standardeinstellungen der Ordner werden ersetzt, und alle vorhandenen Videos, einschließlich derjenigen in Ordnern mit benutzerdefinierten Standardeinstellungen, werden auf den neuen Kontostandard aktualisiert."
          },
          "fr-FR": {
            singular: "Les paramètres par défaut des dossiers sont remplacés, et toutes les vidéos existantes, y compris celles dans des dossiers avec des paramètres par défaut personnalisés, sont mises à jour vers le nouveau paramètre par défaut du compte."
          },
          "ja-JP": {
            singular: "フォルダのデフォルトは置き換えられ、カスタムデフォルトを持つフォルダ内の動画を含むすべての既存の動画が新しいアカウントのデフォルトに更新されます。"
          },
          "ko-KR": {
            singular: "폴더 기본값이 대체되며, 사용자 지정 기본값이 있는 폴더에 있는 동영상을 포함한 모든 기존 동영상이 새 계정 기본값으로 업데이트됩니다."
          },
          "pt-BR": {
            singular: "Os padrões de pasta são substituídos, e todos os vídeos existentes, incluindo os em pastas com padrões personalizados, são atualizados para o novo padrão da conta."
          },
          "zh-CN": {
            singular: "文件夹默认设置将被替换，所有现有视频（包括位于具有自定义默认设置的文件夹中的视频）都会更新为新的账户默认。"
          }
        }
      })
    }],
    _v63 = ({
      isOpen: _v0,
      onCancel: _v1,
      onSave: _v2
    }) => {
      let [_v3, _v4] = (0, _v2.useState)("keep-skip");
      return (0, _v1.jsxs)(_v6.Modal, {
        isOpen: _v0,
        onClose: _v1,
        isCentered: !0,
        children: [(0, _v1.jsx)(_v11.ModalOverlay, {}), (0, _v1.jsxs)(_v8.ModalContent, {
          children: [(0, _v1.jsx)(_v10.ModalHeader, {
            children: (0, _v1.jsx)(_v22.Text, {
              variant: "heading-md",
              children: (0, _v41.translate)({
                singular: "Reset folder defaults",
                dictionary: {
                  es: {
                    singular: "Restablecer valores predeterminados de las carpetas"
                  },
                  "de-DE": {
                    singular: "Standardeinstellungen der Ordner zurücksetzen"
                  },
                  "fr-FR": {
                    singular: "Réinitialiser les paramètres par défaut des dossiers"
                  },
                  "ja-JP": {
                    singular: "フォルダのデフォルトをリセット"
                  },
                  "ko-KR": {
                    singular: "폴더 기본값 재설정"
                  },
                  "pt-BR": {
                    singular: "Redefinir padrões de pasta"
                  },
                  "zh-CN": {
                    singular: "重置文件夹默认设置"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v19.ModalBody, {
            children: (0, _v1.jsxs)(_v12.Flex, {
              direction: "column",
              gap: "md",
              children: [(0, _v1.jsx)(_v22.Text, {
                variant: "body-md",
                children: (0, _v41.translate)({
                  singular: "Some folders have their own custom privacy defaults. How do you want to manage them?",
                  dictionary: {
                    es: {
                      singular: "Algunas carpetas tienen sus propios valores predeterminados de privacidad personalizados. ¿Cómo desea administrarlos?"
                    },
                    "de-DE": {
                      singular: "Einige Ordner haben eigene, benutzerdefinierte Datenschutzeinstellungen. Wie möchten Sie damit verfahren?"
                    },
                    "fr-FR": {
                      singular: "Certains dossiers ont leurs propres paramètres de confidentialité par défaut personnalisés. Comment souhaitez-vous les gérer ?"
                    },
                    "ja-JP": {
                      singular: "一部のフォルダには独自のプライバシーデフォルトがあります。どのように管理しますか？"
                    },
                    "ko-KR": {
                      singular: "일부 폴더는 자체 사용자 지정 프라이버시 기본값을 가지고 있습니다. 어떻게 관리하시겠습니까?"
                    },
                    "pt-BR": {
                      singular: "Algumas pastas têm seus próprios padrões personalizados de privacidade. Como você deseja gerenciá‑las?"
                    },
                    "zh-CN": {
                      singular: "有些文件夹具有自己的自定义隐私默认设置。您想如何管理它们？"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v61.RadioGroup, {
                value: _v3,
                onChange: _v0 => _v4(_v0),
                children: (0, _v1.jsx)(_v12.Flex, {
                  direction: "column",
                  gap: "md",
                  children: _v62.map(_v0 => (0, _v1.jsx)(_v60.Radio, {
                    value: _v0.value,
                    alignItems: "flex-start",
                    children: (0, _v1.jsxs)(_v12.Flex, {
                      direction: "column",
                      gap: "xxs",
                      children: [(0, _v1.jsx)(_v22.Text, {
                        variant: "body-md",
                        children: _v0.label()
                      }), (0, _v1.jsx)(_v22.Text, {
                        variant: "body-sm",
                        color: "text-secondary",
                        children: _v0.description()
                      })]
                    })
                  }, _v0.value))
                })
              })]
            })
          }), (0, _v1.jsxs)(_v9.ModalFooter, {
            children: [(0, _v1.jsx)(_v3.Button, {
              variant: "secondary",
              onClick: _v1,
              children: (0, _v41.translate)({
                singular: "Cancel",
                dictionary: {
                  es: {
                    singular: "Cancelar"
                  },
                  "de-DE": {
                    singular: "Abbrechen"
                  },
                  "fr-FR": {
                    singular: "Annuler"
                  },
                  "ja-JP": {
                    singular: "キャンセル"
                  },
                  "ko-KR": {
                    singular: "취소"
                  },
                  "pt-BR": {
                    singular: "Cancelar"
                  },
                  "zh-CN": {
                    singular: "取消"
                  }
                }
              })
            }), (0, _v1.jsx)(_v3.Button, {
              variant: "primary",
              onClick: () => _v2(_v3),
              children: (0, _v41.translate)({
                singular: "Save",
                dictionary: {
                  es: {
                    singular: "Guardar"
                  },
                  "de-DE": {
                    singular: "Speichern"
                  },
                  "fr-FR": {
                    singular: "Enregistrer"
                  },
                  "ja-JP": {
                    singular: "保存"
                  },
                  "ko-KR": {
                    singular: "저장"
                  },
                  "pt-BR": {
                    singular: "Salvar"
                  },
                  "zh-CN": {
                    singular: "保存"
                  }
                }
              })
            })]
          })]
        })]
      });
    },
    _v64 = ({
      isOpen: _v0,
      onCancel: _v1,
      onKeepOverrides: _v2,
      onResetFolderValues: _v3
    }) => (0, _v1.jsxs)(_v6.Modal, {
      isOpen: _v0,
      onClose: _v1,
      isCentered: !0,
      children: [(0, _v1.jsx)(_v11.ModalOverlay, {}), (0, _v1.jsxs)(_v8.ModalContent, {
        children: [(0, _v1.jsx)(_v10.ModalHeader, {
          children: (0, _v1.jsx)(_v22.Text, {
            variant: "heading-md",
            children: (0, _v41.translate)({
              singular: "Update folder defaults",
              dictionary: {
                es: {
                  singular: "Actualizar valores predeterminados de las carpetas"
                },
                "de-DE": {
                  singular: "Standardeinstellungen der Ordner aktualisieren"
                },
                "fr-FR": {
                  singular: "Mettre à jour les paramètres par défaut des dossiers"
                },
                "ja-JP": {
                  singular: "フォルダのデフォルトを更新"
                },
                "ko-KR": {
                  singular: "폴더 기본값 업데이트"
                },
                "pt-BR": {
                  singular: "Atualizar padrões de pasta"
                },
                "zh-CN": {
                  singular: "更新文件夹默认设置"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v19.ModalBody, {
          children: (0, _v1.jsx)(_v22.Text, {
            variant: "body-md",
            children: (0, _v41.translate)({
              singular: "Some folders have their own custom privacy defaults that override your account default. Do you want to reset their current values to the new account default?",
              dictionary: {
                es: {
                  singular: "Algunas carpetas tienen sus propios valores predeterminados de privacidad personalizados que anulan el valor predeterminado de su cuenta. ¿Desea restablecer sus valores actuales al nuevo valor predeterminado de la cuenta?"
                },
                "de-DE": {
                  singular: "Einige Ordner haben eigene, benutzerdefinierte Datenschutzeinstellungen, die Ihren Kontostandard überschreiben. Möchten Sie deren aktuelle Werte auf den neuen Kontostandard zurücksetzen?"
                },
                "fr-FR": {
                  singular: "Certains dossiers ont leurs propres paramètres de confidentialité par défaut personnalisés qui remplacent le paramètre par défaut de votre compte. Voulez-vous réinitialiser leurs valeurs actuelles sur le nouveau paramètre par défaut du compte ?"
                },
                "ja-JP": {
                  singular: "一部のフォルダにはアカウントのデフォルトを上書きする独自のプライバシーデフォルトがあります。これらの現在の値を新しいアカウントのデフォルトにリセットしますか？"
                },
                "ko-KR": {
                  singular: "일부 폴더는 계정 기본값을 덮어쓰는 자체 사용자 지정 프라이버시 기본값을 가지고 있습니다. 현재 값을 새 계정 기본값으로 재설정하시겠습니까?"
                },
                "pt-BR": {
                  singular: "Algumas pastas têm seus próprios padrões personalizados de privacidade que substituem o padrão da sua conta. Deseja redefinir os valores atuais delas para o novo padrão da conta?"
                },
                "zh-CN": {
                  singular: "有些文件夹具有覆盖您账户默认设置的自定义隐私默认值。您是否要将它们当前的值重置为新的账户默认值？"
                }
              }
            })
          })
        }), (0, _v1.jsxs)(_v9.ModalFooter, {
          children: [(0, _v1.jsx)(_v3.Button, {
            variant: "tertiary",
            onClick: _v3,
            children: (0, _v41.translate)({
              singular: "Reset folder values",
              dictionary: {
                es: {
                  singular: "Restablecer valores de las carpetas"
                },
                "de-DE": {
                  singular: "Ordnerwerte zurücksetzen"
                },
                "fr-FR": {
                  singular: "Réinitialiser les valeurs des dossiers"
                },
                "ja-JP": {
                  singular: "フォルダの値をリセット"
                },
                "ko-KR": {
                  singular: "폴더 값 재설정"
                },
                "pt-BR": {
                  singular: "Redefinir valores das pastas"
                },
                "zh-CN": {
                  singular: "重置文件夹值"
                }
              }
            })
          }), (0, _v1.jsx)(_v3.Button, {
            variant: "primary",
            onClick: _v2,
            children: (0, _v41.translate)({
              singular: "Keep folder overrides",
              dictionary: {
                es: {
                  singular: "Conservar las anulaciones de las carpetas"
                },
                "de-DE": {
                  singular: "Ordnerüberschreibungen beibehalten"
                },
                "fr-FR": {
                  singular: "Conserver les paramètres personnalisés des dossiers"
                },
                "ja-JP": {
                  singular: "フォルダのオーバーライドを保持する"
                },
                "ko-KR": {
                  singular: "폴더 재정의 유지"
                },
                "pt-BR": {
                  singular: "Manter as substituições de pasta"
                },
                "zh-CN": {
                  singular: "保留文件夹覆盖设置"
                }
              }
            })
          })]
        })]
      })]
    }),
    _v65 = _v0 => {
      let [_v1, _v2] = (0, _v2.useState)(_v0),
        _v3 = (0, _v2.useRef)(_v0),
        _v4 = (0, _v2.useCallback)(function (_v0, _v1) {
          _v2(_v0 => ({
            ..._v0,
            [_v0]: _v1
          }));
        }, [_v2]),
        _v5 = (0, _v2.useCallback)(_v0 => {
          _v2(_v0 => ({
            ..._v0,
            ..._v0
          })), _v3.current = {
            ..._v3.current,
            ..._v0
          };
        }, [_v2]),
        _v6 = (0, _v2.useCallback)(() => {
          _v2(_v3.current);
        }, [_v2]),
        _v7 = JSON.stringify(_v3.current) !== JSON.stringify(_v1);
      return {
        state: _v1,
        hasChanges: _v7,
        updateState: _v4,
        initializeState: _v5,
        resetState: _v6
      };
    };
  var _v66 = _v0.i(0);
  let _v67 = () => {
    let _v0 = (0, _v47.useViewer)(),
      _v1 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
      {
        data: _v2,
        mutate: _v3,
        isLoading: _v4
      } = (0, _v66.useGetUser)(() => _v1 ? {
        where: {
          userId: _v1
        },
        select: _v58,
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null),
      [_v5, {
        loading: _v6,
        error: _v7,
        data: _v8
      }] = (0, _v66.usePatchUser)(),
      _v9 = async _v0 => {
        _v1 && (await _v5({
          select: _v58,
          variables: _v0,
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4.1"
          },
          where: {
            userId: _v1
          }
        }), _v3());
      };
    return {
      patchError: _v7,
      patchData: _v8,
      defaults: _v2?.preferences?.videos,
      isLoading: _v6 || _v4,
      updateUploadDefaults: _v9
    };
  };
  var _v68 = _v0.i(0);
  let _v69 = () => ({
      videoPrivacyLabel: (0, _v41.translate)({
        singular: "Privacy",
        dictionary: {
          es: {
            singular: "Privacidad"
          },
          "de-DE": {
            singular: "Datenschutz"
          },
          "fr-FR": {
            singular: "Confidentialité "
          },
          "ja-JP": {
            singular: "プライバシー"
          },
          "ko-KR": {
            singular: "프라이버시"
          },
          "pt-BR": {
            singular: "Privacidade"
          },
          "zh-CN": {
            singular: "隐私"
          }
        }
      }),
      passwordPlaceholder: (0, _v41.translate)({
        singular: "Enter password",
        dictionary: {
          es: {
            singular: "Ingresar la contraseña"
          },
          "de-DE": {
            singular: "Bitte Kennwort eingeben"
          },
          "fr-FR": {
            singular: "Saisir mot de passe"
          },
          "ja-JP": {
            singular: "パスワードを入力"
          },
          "ko-KR": {
            singular: "비밀번호 입력"
          },
          "pt-BR": {
            singular: "Digite a senha"
          },
          "zh-CN": {
            singular: "输入密码"
          }
        }
      }),
      embedLocationLabel: (0, _v41.translate)({
        singular: "Where can content be embedded?",
        dictionary: {
          es: {
            singular: "¿Dónde se puede insertar el contenido?"
          },
          "de-DE": {
            singular: "Wo können Inhalte eingebettet werden?"
          },
          "fr-FR": {
            singular: "Où le contenu peut-il être intégré ?"
          },
          "ja-JP": {
            singular: "コンテンツはどこに埋め込むことができますか？"
          },
          "ko-KR": {
            singular: "콘텐츠 임베드 위치"
          },
          "pt-BR": {
            singular: "Onde o conteúdo pode ser incorporado?"
          },
          "zh-CN": {
            singular: "内容可以可以嵌入到哪里？"
          }
        }
      }),
      folderDefaultsSettings: (0, _v41.translate)({
        singular: "Folder defaults settings",
        dictionary: {
          es: {
            singular: "Ajustes predeterminados de la carpeta"
          },
          "de-DE": {
            singular: "Standardeinstellungen für Ordner"
          },
          "fr-FR": {
            singular: "Paramètres par défaut du dossier"
          },
          "ja-JP": {
            singular: "フォルダのデフォルト設定"
          },
          "ko-KR": {
            singular: "폴더 기본 설정"
          },
          "pt-BR": {
            singular: "Configurações padrão da pasta"
          },
          "zh-CN": {
            singular: "文件夹默认设置"
          }
        }
      }),
      passwordErrorMsg: (0, _v41.translate)({
        singular: "Required",
        dictionary: {
          es: {
            singular: "Requerido"
          },
          "de-DE": {
            singular: "Erforderlich"
          },
          "fr-FR": {
            singular: "Obligatoire"
          },
          "ja-JP": {
            singular: "必須"
          },
          "ko-KR": {
            singular: "필수"
          },
          "pt-BR": {
            singular: "Obrigatório"
          },
          "zh-CN": {
            singular: "必填"
          }
        }
      }),
      applyToAllExistingVideos: (0, _v41.translate)({
        singular: "Apply to all existing videos",
        dictionary: {
          es: {
            singular: "Aplicar a todos los videos existentes"
          },
          "de-DE": {
            singular: "Auf alle vorhandenen Videos anwenden"
          },
          "fr-FR": {
            singular: "Appliquer à toutes les vidéos existantes"
          },
          "ja-JP": {
            singular: "既存のすべての動画に適用"
          },
          "ko-KR": {
            singular: "기존 동영상 전체에 적용"
          },
          "pt-BR": {
            singular: "Aplicar a todos os vídeos existentes"
          },
          "zh-CN": {
            singular: "应用于所有现有视频"
          }
        }
      }),
      save: (0, _v41.translate)({
        singular: "Save",
        dictionary: {
          es: {
            singular: "Guardar"
          },
          "de-DE": {
            singular: "Speichern"
          },
          "fr-FR": {
            singular: "Enregistrer"
          },
          "ja-JP": {
            singular: "保存"
          },
          "ko-KR": {
            singular: "저장"
          },
          "pt-BR": {
            singular: "Salvar"
          },
          "zh-CN": {
            singular: "保存"
          }
        }
      }),
      description: (0, _v41.translate)({
        singular: "These settings apply to all new videos, showcases, and events. You can manage which privacies are available in {LINK}Security and data{/LINK}.",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v68.Link, {
            href: "https://vimeo.com/manage/workspace/security-and-data/privacy-restrictions",
            variant: "inline-primary",
            fontSize: "inherit",
            target: "_blank",
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "Esta configuración se aplica a todos los videos, las presentaciones y los eventos nuevos. Puede gestionar qué configuraciones de privacidad hay disponibles en {LINK}Seguridad y datos{/LINK}."
          },
          "de-DE": {
            singular: "Diese Einstellungen gelten für alle neuen Videos, Schaufenster und Veranstaltungen. Sie können unter {LINK}Sicherheit und Daten{/LINK} verwalten, welche Datenschutzeinstellungen verfügbar sind."
          },
          "fr-FR": {
            singular: "Ces paramètres s'appliquent à toutes les nouvelles vidéos, présentations et événements. Vous pouvez gérer les options de confidentialité disponibles dans {LINK}Sécurité et données{/LINK}."
          },
          "ja-JP": {
            singular: "これらの設定は、すべての新しい動画、ショーケース、イベントに適用されます。{LINK}セキュリティおよびデータ{/LINK}で利用できるプライバシーを管理できます。"
          },
          "ko-KR": {
            singular: "이러한 설정은 모든 새 동영상, 쇼케이스 및 이벤트에 적용됩니다. {LINK}보안 및 데이터{/LINK}에서 사용할 수 있는 프라이버시를 관리할 수 있습니다."
          },
          "pt-BR": {
            singular: "Essas configurações serão aplicadas a todos os novos vídeos, eventos e vitrines. Acesse {LINK}Segurança e dados{/LINK} para gerenciar as opções de privacidade disponíveis."
          },
          "zh-CN": {
            singular: "这些设置适用于所有新视频、展示和活动。您可以在{LINK}安全和数据{/LINK}中管理哪些隐私可用。"
          }
        }
      }),
      viewerPermissions: (0, _v41.translate)({
        singular: "Viewer permissions",
        dictionary: {
          es: {
            singular: "Permisos de los espectadores"
          },
          "de-DE": {
            singular: "Zuschauerberechtigungen"
          },
          "fr-FR": {
            singular: "Autorisations du spectateur"
          },
          "ja-JP": {
            singular: "視聴者権限"
          },
          "ko-KR": {
            singular: "뷰어 권한"
          },
          "pt-BR": {
            singular: "Permissões do espectador"
          },
          "zh-CN": {
            singular: "观众权限"
          }
        }
      }),
      viewerPermissionsDescription: (0, _v41.translate)({
        singular: "These settings apply to all new videos and events",
        dictionary: {
          es: {
            singular: "Esta configuración se aplica a todos los videos y eventos nuevos"
          },
          "de-DE": {
            singular: "Diese Einstellungen gelten für alle neuen Videos und Veranstaltungen"
          },
          "fr-FR": {
            singular: "Ces paramètres s'appliquent à toutes les nouvelles vidéos et tous les nouveaux événements"
          },
          "ja-JP": {
            singular: "これらの設定は、すべての新しい動画とイベントに適用されます"
          },
          "ko-KR": {
            singular: "이 설정은 모든 새 동영상과 이벤트에 적용됩니다."
          },
          "pt-BR": {
            singular: "Essas configurações serão aplicadas a todos os novos vídeos e eventos"
          },
          "zh-CN": {
            singular: "这些设置适用于所有新视频和事件"
          }
        }
      }),
      ccLicenseLink: (0, _v41.translate)({
        singular: "{LINK}About Creative Commons licenses{/LINK}",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v68.Link, {
            target: "_blank",
            href: "https://help.vimeo.com/hc/en-us/articles/12427652203153-What-do-the-different-Creative-Commons-licenses-mean",
            fontSize: "inherit",
            textDecoration: "underline",
            children: _v0
          }, _v0)
        },
        dictionary: {
          es: {
            singular: "{LINK}Acerca de las licencias de Creative Commons{/LINK}"
          },
          "de-DE": {
            singular: "{LINK}Über Creative Commons-Lizenzen{/LINK}"
          },
          "fr-FR": {
            singular: "{LINK}À propos des licences Creative Commons{/LINK}"
          },
          "ja-JP": {
            singular: "{LINK}クリエイティブ・コモンズ・ライセンスについて{/LINK}"
          },
          "ko-KR": {
            singular: "{LINK}크리에이티브 커먼즈 라이선스 정보{/LINK}"
          },
          "pt-BR": {
            singular: "{LINK}Sobre as licenças Creative Commons{/LINK}"
          },
          "zh-CN": {
            singular: "{LINK}关于 Creative Commons 许可协议{/LINK}"
          }
        }
      }),
      contentRating: (0, _v41.translate)({
        singular: "Content rating",
        dictionary: {
          es: {
            singular: "Calificación del contenido"
          },
          "de-DE": {
            singular: "Inhaltsbewertung"
          },
          "fr-FR": {
            singular: "Classification des contenus"
          },
          "ja-JP": {
            singular: "コンテンツ レーティング"
          },
          "ko-KR": {
            singular: "콘텐츠 등급"
          },
          "pt-BR": {
            singular: "Classificação de conteúdo"
          },
          "zh-CN": {
            singular: "内容分级"
          }
        }
      }),
      contentRatingTooltip: (0, _v41.translate)({
        singular: "Labeling the contents of your video keeps Vimeo safe and accessible to as many audiences as possible",
        dictionary: {
          es: {
            singular: "Etiquetar el contenido de su video hace que Vimeo sea seguro y accesible para la mayor cantidad de audiencia posible"
          },
          "de-DE": {
            singular: "Die Kennzeichnung der Inhalte Ihres Videos sorgt dafür, dass Vimeo sicher und für möglichst viele Zielgruppen zugänglich ist."
          },
          "fr-FR": {
            singular: "L'étiquetage du contenu de votre vidéo contribue à assurer la sécurité de Vimeo et à le rendre accessible au plus grand nombre de publics possibles"
          },
          "ja-JP": {
            singular: "動画に含まれるコンテンツにラベル付けすると、Vimeoに安全にアクセス可能なオーディエンス数を最大化できます"
          },
          "ko-KR": {
            singular: "동영상 콘텐츠에 라벨을 추가하면 최대한 많은 시청자가 Vimeo를 안전하게 이용할 수 있습니다."
          },
          "pt-BR": {
            singular: "O rótulo com o conteúdo do seu vídeo mantém o Vimeo seguro e acessível para o maior público possível"
          },
          "zh-CN": {
            singular: "给您的视频内容贴上标签有助于保证 Vimeo 的安全，让尽可能多的观众可以访问"
          }
        }
      }),
      creativeCommonsTooltip: (0, _v41.translate)({
        singular: "Creative Commons licenses let viewers know how they're allowed to use your videos",
        dictionary: {
          es: {
            singular: "Las licencias de Creative Commons les permiten a los espectadores saber cómo pueden usar sus videos."
          },
          "de-DE": {
            singular: "Creative-Commons-Lizenzen teilen den Zuschauenden mit, wie sie Ihre Videos verwenden dürfen."
          },
          "fr-FR": {
            singular: "Les licences Creative Commons permettent aux spectateurs de savoir comment ils sont autorisés à utiliser vos vidéos"
          },
          "ja-JP": {
            singular: "クリエイティブ・コモンズ・ライセンスを使用すると、どのような動画の使用が許可されているかを視聴者に知らせることができます"
          },
          "ko-KR": {
            singular: "크리에이티브 커먼즈 라이선스(Creative Commons Licenses, CCL)를 통해 뷰어는 동영상을 어떻게 사용할 수 있는지 알 수 있습니다."
          },
          "pt-BR": {
            singular: "Com as licenças Creative Commons, os espectadores sabem como podem usar seus vídeos"
          },
          "zh-CN": {
            singular: "知识共享许可协议让观看者了解他们可以如何使用您的视频"
          }
        }
      }),
      copyright: (0, _v41.translate)({
        singular: "Copyright",
        dictionary: {
          es: {
            singular: "Derechos de autor"
          },
          "de-DE": {
            singular: "Urheberrecht"
          },
          "fr-FR": {
            singular: "Droit d'auteur"
          },
          "ja-JP": {
            singular: "著作権"
          },
          "ko-KR": {
            singular: "저작권"
          },
          "pt-BR": {
            singular: "Direitos Autorais"
          },
          "zh-CN": {
            singular: "版权"
          }
        }
      }),
      selectLicense: (0, _v41.translate)({
        singular: "Select a license...",
        dictionary: {
          es: {
            singular: "Seleccione una licencia..."
          },
          "de-DE": {
            singular: "Eine Lizenz auswählen..."
          },
          "fr-FR": {
            singular: "Sélectionnez une licence"
          },
          "ja-JP": {
            singular: "ライセンスを選択..."
          },
          "ko-KR": {
            singular: "라이선스 선택하기"
          },
          "pt-BR": {
            singular: "Selecione uma licença..."
          },
          "zh-CN": {
            singular: "选择许可..."
          }
        }
      }),
      selectRating: (0, _v41.translate)({
        singular: "Select a rating...",
        dictionary: {
          es: {
            singular: "Seleccione una calificación..."
          },
          "de-DE": {
            singular: "Wählen Sie eine Bewertung aus ..."
          },
          "fr-FR": {
            singular: "Sélectionner une classification..."
          },
          "ja-JP": {
            singular: "レーティングを選択してください..."
          },
          "ko-KR": {
            singular: "등급 선택..."
          },
          "pt-BR": {
            singular: "Selecione uma classificação..."
          },
          "zh-CN": {
            singular: "选择分级..."
          }
        }
      }),
      changesSaved: (0, _v41.translate)({
        singular: "Changes saved",
        dictionary: {
          es: {
            singular: "Guardamos los cambios"
          },
          "de-DE": {
            singular: "Änderungen wurden gespeichert"
          },
          "fr-FR": {
            singular: "Changements sauvegardés"
          },
          "ja-JP": {
            singular: "変更内容が保存されました"
          },
          "ko-KR": {
            singular: "변경 사항 저장 완료"
          },
          "pt-BR": {
            singular: "Alterações salvas"
          },
          "zh-CN": {
            singular: "已保存更改"
          }
        }
      }),
      changesWereNotSaved: (0, _v41.translate)({
        singular: "Changes were not saved. Please try again.",
        dictionary: {
          es: {
            singular: "Los cambios no se guardaron. Inténtelo de nuevo."
          },
          "de-DE": {
            singular: "Die Änderungen wurden nicht gespeichert. Bitte versuchen Sie es erneut."
          },
          "fr-FR": {
            singular: "Les modifications n'ont pas été enregistrées. Veuillez réessayer."
          },
          "ja-JP": {
            singular: "変更が保存されませんでした。もう一度お試しください。"
          },
          "ko-KR": {
            singular: "변경사항이 저장되지 않았습니다. 다시 시도해 주세요."
          },
          "pt-BR": {
            singular: "As alterações não foram salvas. Tente novamente."
          },
          "zh-CN": {
            singular: "更改未保存。请重试。"
          }
        }
      })
    }),
    _v70 = "uds-privacy-update",
    _v71 = {
      view: "anybody",
      embed: "public",
      password: "",
      domainAllowlist: [],
      error: !1,
      applyViewPrivacyToAll: !1,
      applyEmbedPrivacyToAll: !1,
      sharingLinkExpiryDays: 0
    },
    _v72 = [{
      value: 0,
      label: () => (0, _v41.translate)({
        singular: "No expiration",
        dictionary: {
          es: {
            singular: "Sin expiración"
          },
          "de-DE": {
            singular: "Kein Ablaufdatum"
          },
          "fr-FR": {
            singular: "Pas d'expiration"
          },
          "ja-JP": {
            singular: "期限なし"
          },
          "ko-KR": {
            singular: "만료 없음"
          },
          "pt-BR": {
            singular: "Sem expiração"
          },
          "zh-CN": {
            singular: "无限期"
          }
        }
      })
    }, {
      value: 1,
      label: () => (0, _v41.translate)({
        singular: "1 day",
        dictionary: {
          es: {
            singular: "1 día"
          },
          "de-DE": {
            singular: "1 Tag"
          },
          "fr-FR": {
            singular: "1 jour"
          },
          "ja-JP": {
            singular: "1日"
          },
          "ko-KR": {
            singular: "1일"
          },
          "pt-BR": {
            singular: "1 dia"
          },
          "zh-CN": {
            singular: "1 天"
          }
        }
      })
    }, {
      value: 7,
      label: () => (0, _v41.translate)({
        singular: "1 week",
        dictionary: {
          es: {
            singular: "1 semana"
          },
          "de-DE": {
            singular: "1 Woche"
          },
          "fr-FR": {
            singular: "1 semaine"
          },
          "ja-JP": {
            singular: "1週間"
          },
          "ko-KR": {
            singular: "1주일"
          },
          "pt-BR": {
            singular: "1 semana"
          },
          "zh-CN": {
            singular: "1 周"
          }
        }
      })
    }, {
      value: 30,
      label: () => (0, _v41.translate)({
        singular: "30 days",
        dictionary: {
          es: {
            singular: "30 días"
          },
          "de-DE": {
            singular: "30 Tage"
          },
          "fr-FR": {
            singular: "30 jours"
          },
          "ja-JP": {
            singular: "30日間"
          },
          "ko-KR": {
            singular: "30일"
          },
          "pt-BR": {
            singular: "30 dias"
          },
          "zh-CN": {
            singular: "30 天"
          }
        }
      })
    }];
  _v0.s(["PrivacyDefaultsModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    onSaveSuccess: _v2
  }) => {
    let {
        defaults: _v3,
        isLoading: _v4,
        updateUploadDefaults: _v5
      } = _v67(),
      {
        initializeState: _v6,
        resetState: _v7,
        updateState: _v8,
        state: _v9,
        hasChanges: _v10
      } = _v65(_v71),
      _v11 = (0, _v47.useViewer)(),
      _v12 = _v11?.teamUser?.ownerId ?? _v11?.user?.id,
      {
        allowedPrivacies: _v13
      } = (0, _v44.useUserAllowedPrivacies)(),
      {
        settings: _v14
      } = (0, _v42.useOrionSettings)(),
      {
        capabilities: _v15,
        ready: _v16,
        error: _v17
      } = (0, _v26.useCapability)(["folderUploadPresets"], _v12),
      _v18 = _v14.enable_folder_upload_presets || !0 === _v15.folderUploadPresets,
      {
        data: _v19,
        error: _v20,
        mutate: _v21
      } = _v38(() => _v18 && _v12 ? {
        where: {
          userId: _v12
        },
        select: ["uri"]
      } : null),
      [_v22, {
        loading: _v23,
        error: _v24,
        called: _v25
      }] = _v40(),
      [_v26, {
        loading: _v27,
        error: _v28,
        called: _v29
      }] = _v39(),
      [_v30, _v31] = (0, _v2.useState)(!1),
      [_v32, _v33] = (0, _v2.useState)(!1),
      _v34 = (0, _v2.useRef)(!1),
      _v35 = (0, _v2.useRef)(!1),
      _v36 = (_v19?.total ?? 0) > 0,
      _v37 = !_v18 && !_v16 && null === _v17 || _v18 && void 0 === _v19 && null == _v20,
      _v38 = _v9.applyViewPrivacyToAll || _v9.applyEmbedPrivacyToAll,
      _v39 = _v3?.privacy,
      _v40 = _v9.view !== _v39?.view || _v9.embed !== _v39?.embed || _v9.password !== (_v3?.password ?? "") || (_v9.domainAllowlist ?? []).join(",") !== (_v39?.clipEmbedAllowedDomains ?? []).join(","),
      _v41 = _v14.bi_expiring_links_ux_enabled,
      _v42 = (0, _v23.useToast)(),
      _v43 = (0, _v2.useRef)(_v42),
      {
        trackPrivacyChanged: _v44
      } = (0, _v43.useViewPrivacyChangeTracking)(),
      _v45 = (0, _v2.useMemo)(() => _v69(), []),
      _v46 = "password" === _v9.view,
      _v47 = "whitelist" === _v9.embed,
      _v48 = (0, _v46.useEmbedPrivacyOptions)(!0),
      _v49 = _v14?.bi_expiring_links_default_expiry_days ?? 0;
    (0, _v2.useEffect)(() => {
      if (!_v3) return;
      let _v0 = _v49 > 0 ? Math.min(_v49, 365) : 0,
        _v1 = null != _v3.sharingLinkDefaultExpiryDays ? _v3.sharingLinkDefaultExpiryDays : _v0;
      _v6({
        view: _v3.privacy?.view,
        embed: _v3.privacy?.embed,
        password: _v3.password || "",
        domainAllowlist: _v3.privacy?.clipEmbedAllowedDomains || [],
        sharingLinkExpiryDays: _v1
      });
    }, [_v3, _v6, _v49]);
    let _v50 = (0, _v2.useCallback)((_v0, _v1) => {
        _v43.current.isActive(_v70) || _v43.current({
          title: _v0,
          status: _v1,
          id: _v70
        });
      }, []),
      _v51 = () => {
        _v7(), _v1();
      },
      _v52 = async (_v0 = !1, _v1 = !1) => {
        let {
            view: _v2,
            embed: _v3,
            password: _v4,
            domainAllowlist: _v5,
            applyViewPrivacyToAll: _v6,
            applyEmbedPrivacyToAll: _v7
          } = _v9,
          _v8 = _v3?.privacy?.view ?? null;
        try {
          if (await _v5({
            ...(_v6 ? {
              applyToAllViewPrivacy: !0
            } : {}),
            ...(_v7 ? {
              applyToAllEmbedPrivacy: !0
            } : {}),
            ...(_v0 ? {
              skipUploadPresetFolderVideos: !0
            } : {}),
            videos: {
              privacy: {
                view: _v2,
                embed: _v3,
                ...(_v5.length ? {
                  embedAllowedDomains: _v5
                } : {})
              },
              ...(_v41 ? {
                sharingLinkDefaultExpiryDays: _v9.sharingLinkExpiryDays
              } : {})
            },
            ...(_v4 ? {
              password: _v4
            } : {})
          }), _v8 !== _v2 && _v44({
            entityType: "workspace_default",
            previousPrivacy: _v8,
            newPrivacy: _v2
          }), _v1 && _v12) {
            _v35.current = !0, _v26({
              where: {
                userId: _v12
              }
            });
            return;
          }
          _v2(), _v51();
        } catch {
          _v50(_v45.changesWereNotSaved, "error");
        }
      },
      _v53 = async () => {
        _v36 && _v38 ? _v31(!0) : _v36 && _v40 ? _v33(!0) : await _v52();
      },
      _v54 = (0, _v2.useEffectEvent)(() => {
        _v34.current = !1, _v21(), _v52();
      }),
      _v55 = (0, _v2.useEffectEvent)(() => {
        _v34.current = !1, _v50(_v45.changesWereNotSaved, "error");
      });
    (0, _v2.useEffect)(() => {
      _v34.current && !_v23 && _v25 && (null === _v24 ? _v54() : _v55());
    }, [_v23, _v25, _v24]);
    let _v56 = (0, _v2.useEffectEvent)(() => {
        _v35.current = !1, _v21(), _v2(), _v51();
      }),
      _v57 = (0, _v2.useEffectEvent)(() => {
        _v35.current = !1, _v50(_v45.changesWereNotSaved, "error");
      });
    (0, _v2.useEffect)(() => {
      _v35.current && !_v27 && _v29 && (null === _v28 ? _v56() : _v57());
    }, [_v27, _v29, _v28]);
    let _v58 = async _v0 => {
        _v33(!1), await _v52(!1, _v0);
      },
      _v59 = async _v0 => {
        if (_v31(!1), "reset" === _v0 && _v12) {
          _v34.current = !0, _v22({
            where: {
              userId: _v12
            }
          });
          return;
        }
        await _v52("keep-skip" === _v0);
      },
      _v60 = (0, _v45.useDefaultPrivacyOptions)(_v11, !0).map(_v0 => ({
        ..._v0,
        isDisabled: !_v13.includes(_v0.privacy)
      }));
    return (0, _v1.jsxs)(_v6.Modal, {
      isOpen: _v0,
      onClose: _v51,
      children: [(0, _v1.jsx)(_v11.ModalOverlay, {}), (0, _v1.jsxs)(_v8.ModalContent, {
        children: [(0, _v1.jsx)(_v10.ModalHeader, {
          children: (0, _v1.jsx)(_v22.Text, {
            variant: "heading-md",
            children: _v45.folderDefaultsSettings
          })
        }), (0, _v1.jsx)(_v7.ModalCloseButton, {}), (0, _v1.jsx)(_v19.ModalBody, {
          children: (0, _v1.jsxs)(_v12.Flex, {
            direction: "column",
            gap: "md",
            w: "100%",
            children: [(0, _v1.jsx)(_v22.Text, {
              variant: "body-md",
              children: _v45.description
            }), (0, _v1.jsxs)(_v12.Flex, {
              direction: "column",
              gap: "xs",
              children: [(0, _v1.jsx)(_v22.Text, {
                variant: "heading-xs",
                children: _v45.videoPrivacyLabel
              }), (0, _v1.jsx)(_v25.PrivacyDropdown, {
                isVideoPrivacy: !0,
                activePrivacy: _v9.view,
                onSelect: _v0 => _v8("view", _v0),
                privacyOptions: _v60,
                variant: "outlined"
              }), _v46 && (0, _v1.jsxs)(_v13.FormControl, {
                w: "100%",
                mt: "sm",
                isInvalid: _v9.error,
                children: [(0, _v1.jsx)(_v20.Password, {
                  minLength: 1,
                  maxLength: 32,
                  placeholder: _v45.passwordPlaceholder,
                  value: _v9.password,
                  autoComplete: "none",
                  w: "100%",
                  autoFocus: !1,
                  onChange: _v0 => {
                    _v8("password", _v0.target.value), _v9.error && _v8("error", !1);
                  },
                  onKeyDown: _v0 => {
                    "Enter" === _v0.key && 1 > (_v9.password?.trim().length || 0) && _v8("error", !0);
                  },
                  "aria-required": !0,
                  "data-lpignore": !0
                }), _v9.error ? (0, _v1.jsx)(_v14.FormErrorMessage, {
                  children: _v45.passwordErrorMsg
                }) : (0, _v1.jsxs)(_v13.FormHelperText, {
                  textAlign: "right",
                  children: [_v9.password?.length || 0, " / ", 32]
                })]
              })]
            }), (0, _v1.jsx)(_v4.Checkbox, {
              size: "md",
              isChecked: _v9.applyViewPrivacyToAll,
              onChange: _v0 => _v8("applyViewPrivacyToAll", _v0.target.checked),
              children: _v45.applyToAllExistingVideos
            }), (0, _v1.jsx)(_v5.Divider, {
              borderColor: "stroke",
              mx: (0, _v21.rem)(-24),
              width: `calc(100% + ${(0, _v21.rem)(48)})`
            }), (0, _v1.jsxs)(_v12.Flex, {
              direction: "column",
              gap: "xs",
              children: [(0, _v1.jsx)(_v22.Text, {
                variant: "heading-xs",
                children: _v45.embedLocationLabel
              }), (0, _v1.jsx)(_v25.PrivacyDropdown, {
                activePrivacy: _v9.embed,
                onSelect: _v0 => _v8("embed", _v0),
                privacyOptions: _v48,
                variant: "outlined"
              }), _v47 && (0, _v1.jsx)(_v59, {
                addDomainToWhitelist: _v0 => _v8("domainAllowlist", [..._v9.domainAllowlist, _v0]),
                domainWhitelist: _v9.domainAllowlist,
                removeDomainFromWhitelist: _v0 => _v8("domainAllowlist", _v9.domainAllowlist.filter(_v0 => _v0 !== _v0))
              })]
            }), (0, _v1.jsx)(_v4.Checkbox, {
              size: "md",
              isChecked: _v9.applyEmbedPrivacyToAll,
              onChange: _v0 => _v8("applyEmbedPrivacyToAll", _v0.target.checked),
              children: _v45.applyToAllExistingVideos
            }), _v41 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v5.Divider, {
                borderColor: "stroke",
                mx: (0, _v21.rem)(-24),
                width: `calc(100% + ${(0, _v21.rem)(48)})`
              }), (0, _v1.jsxs)(_v12.Flex, {
                direction: "column",
                gap: "xs",
                children: [(0, _v1.jsx)(_v22.Text, {
                  variant: "heading-xs",
                  children: (0, _v41.translate)({
                    singular: "Sharing link expiration",
                    dictionary: {
                      es: {
                        singular: "Caducidad del enlace para compartir"
                      },
                      "de-DE": {
                        singular: "Ablaufdatum für Freigabelinks"
                      },
                      "fr-FR": {
                        singular: "Expiration des liens de partage"
                      },
                      "ja-JP": {
                        singular: "共有リンクの有効期限"
                      },
                      "ko-KR": {
                        singular: "공유 링크 만료"
                      },
                      "pt-BR": {
                        singular: "Expiração do link de compartilhamento"
                      },
                      "zh-CN": {
                        singular: "共享链接过期时间"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v22.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  children: (0, _v41.translate)({
                    singular: "Set the default expiration for new sharing links",
                    dictionary: {
                      es: {
                        singular: "Establecer la caducidad predeterminada de los nuevos enlaces para compartir"
                      },
                      "de-DE": {
                        singular: "Standardablauf für neue Freigabelinks festlegen"
                      },
                      "fr-FR": {
                        singular: "Définir la durée d'expiration par défaut pour les nouveaux liens de partage"
                      },
                      "ja-JP": {
                        singular: "新しい共有リンクの既定の有効期限を設定する"
                      },
                      "ko-KR": {
                        singular: "새 공유 링크의 기본 만료 기간을 설정합니다"
                      },
                      "pt-BR": {
                        singular: "Defina a expiração padrão para novos links de compartilhamento"
                      },
                      "zh-CN": {
                        singular: "为新的共享链接设置默认过期时间"
                      }
                    }
                  })
                }), (0, _v1.jsxs)(_v15.Menu, {
                  children: [(0, _v1.jsx)(_v16.MenuButton, {
                    as: _v3.Button,
                    size: "sm",
                    variant: "outlined",
                    rightIcon: (0, _v1.jsx)(_v24.ChevronDownSmall, {
                      boxSize: (0, _v21.rem)(16)
                    }),
                    w: "fit-content",
                    children: _v72.find(_v0 => _v0.value === _v9.sharingLinkExpiryDays)?.label() ?? (0, _v41.translate)({
                      singular: "1 week",
                      dictionary: {
                        es: {
                          singular: "1 semana"
                        },
                        "de-DE": {
                          singular: "1 Woche"
                        },
                        "fr-FR": {
                          singular: "1 semaine"
                        },
                        "ja-JP": {
                          singular: "1週間"
                        },
                        "ko-KR": {
                          singular: "1주일"
                        },
                        "pt-BR": {
                          singular: "1 semana"
                        },
                        "zh-CN": {
                          singular: "1 周"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v18.MenuList, {
                    children: _v72.map(_v0 => (0, _v1.jsx)(_v17.MenuItem, {
                      onClick: () => _v8("sharingLinkExpiryDays", _v0.value),
                      children: (0, _v1.jsx)(_v22.Text, {
                        variant: "body-md",
                        children: _v0.label()
                      })
                    }, _v0.value))
                  })]
                })]
              })]
            })]
          })
        }), (0, _v1.jsx)(_v9.ModalFooter, {
          justifyContent: "flex-end",
          children: (0, _v1.jsx)(_v3.Button, {
            variant: "primary",
            isDisabled: !_v10,
            isLoading: _v4 || _v23 || _v27 || (_v38 || _v40) && _v37,
            onClick: () => void _v53(),
            children: _v45.save
          })
        })]
      }), _v32 && (0, _v1.jsx)(_v64, {
        isOpen: !0,
        onCancel: () => _v33(!1),
        onKeepOverrides: () => void _v58(!1),
        onResetFolderValues: () => void _v58(!0)
      }), _v30 && (0, _v1.jsx)(_v63, {
        isOpen: !0,
        onCancel: () => _v31(!1),
        onSave: _v0 => void _v59(_v0)
      })]
    });
  }], 0);
  var _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0);
  let _v77 = {
      violence: (0, _v41.translate)({
        singular: "Violence",
        dictionary: {
          es: {
            singular: "Violencia"
          },
          "de-DE": {
            singular: "Gewalt"
          },
          "ja-JP": {
            singular: "暴力"
          },
          "ko-KR": {
            singular: "폭력"
          },
          "pt-BR": {
            singular: "Violência"
          },
          "zh-CN": {
            singular: "暴力"
          }
        }
      }),
      language: (0, _v41.translate)({
        singular: "Profanity",
        dictionary: {
          es: {
            singular: "Lenguaje vulgar"
          },
          "de-DE": {
            singular: "Vulgäre Ausdrucksweise"
          },
          "fr-FR": {
            singular: "Contenu à caractère injurieux"
          },
          "ja-JP": {
            singular: "冒涜"
          },
          "ko-KR": {
            singular: "욕설"
          },
          "pt-BR": {
            singular: "Linguagem imprópria"
          },
          "zh-CN": {
            singular: "粗言秽语"
          }
        }
      }),
      nudity: (0, _v41.translate)({
        singular: "Nudity",
        dictionary: {
          es: {
            singular: "Desnudez"
          },
          "de-DE": {
            singular: "Nacktheit"
          },
          "fr-FR": {
            singular: "Nudité"
          },
          "ja-JP": {
            singular: "ヌード"
          },
          "ko-KR": {
            singular: "나체"
          },
          "pt-BR": {
            singular: "Nudez"
          },
          "zh-CN": {
            singular: "裸露"
          }
        }
      }),
      drugs: (0, _v41.translate)({
        singular: "Drug or alcohol use",
        dictionary: {
          es: {
            singular: "Consumo de drogas o alcohol"
          },
          "de-DE": {
            singular: "Drogen- oder Alkoholkonsum"
          },
          "fr-FR": {
            singular: "Consommation de drogues ou d'alcool"
          },
          "ja-JP": {
            singular: "ドラッグ、アルコールの使用"
          },
          "ko-KR": {
            singular: "약물 복용 또는 음주"
          },
          "pt-BR": {
            singular: "Uso de drogas ou álcool"
          },
          "zh-CN": {
            singular: "吸毒或酗酒"
          }
        }
      }),
      safe: (0, _v41.translate)({
        singular: "All audiences",
        dictionary: {
          es: {
            singular: "Para todos los públicos"
          },
          "de-DE": {
            singular: "Alle Zuschauergruppen"
          },
          "fr-FR": {
            singular: "Tout public"
          },
          "ja-JP": {
            singular: "すべての視聴者"
          },
          "ko-KR": {
            singular: "모든 시청자"
          },
          "pt-BR": {
            singular: "Para todas as idades"
          },
          "zh-CN": {
            singular: "所有观众"
          }
        }
      }),
      mature: (0, _v41.translate)({
        singular: "Mature",
        dictionary: {
          es: {
            singular: "Para adultos"
          },
          "de-DE": {
            singular: "Nicht jugendfrei"
          },
          "fr-FR": {
            singular: "Adulte"
          },
          "ja-JP": {
            singular: "成人向け"
          },
          "ko-KR": {
            singular: "성인"
          },
          "pt-BR": {
            singular: "Adulto"
          },
          "zh-CN": {
            singular: "成人"
          }
        }
      }),
      unrated: (0, _v41.translate)({
        singular: "Select rating",
        dictionary: {
          es: {
            singular: "Seleccionar clasificación"
          },
          "de-DE": {
            singular: "Bewertung auswählen"
          },
          "fr-FR": {
            singular: "Sélectionner la classification"
          },
          "ja-JP": {
            singular: "レーティングを選択"
          },
          "ko-KR": {
            singular: "등급 선택"
          },
          "pt-BR": {
            singular: "Selecionar classificação"
          },
          "zh-CN": {
            singular: "选择分级"
          }
        }
      })
    },
    _v78 = [{
      value: "safe",
      label: _v77.safe
    }, {
      value: "mature",
      label: _v77.mature
    }],
    _v79 = ({
      contentRating: _v0,
      isRatingModlocked: _v1,
      onRatingChange: _v2
    }) => {
      let _v3 = _v69(),
        _v4 = (0, _v2.useMemo)(() => _v0?.includes("safe") ? "safe" : _v0?.some(_v0 => _v57.includes(_v0)) ? "mature" : "unrated", [_v0]);
      return (0, _v1.jsxs)(_v12.Flex, {
        direction: "column",
        gap: "sm",
        children: [(0, _v1.jsx)(_v75.Select, {
          placeholder: _v3.selectRating,
          items: _v78,
          value: [_v4 ?? ""],
          disabled: _v1,
          onValueChange: _v0 => {
            _v2(_v0.value[0]);
          },
          children: _v0 => (0, _v1.jsx)(_v75.SelectItem, {
            display: "flex",
            "data-testid": `${_v0.value}-option`,
            children: (0, _v1.jsx)(_v75.SelectItemText, {
              children: _v0.label
            })
          })
        }), "mature" === _v4 && (0, _v1.jsx)(_v12.Flex, {
          direction: "column",
          gap: "xs",
          children: _v57.map(_v0 => (0, _v1.jsx)(_v4.Checkbox, {
            isChecked: _v0.includes(_v0),
            onChange: _v0 => _v2(_v0, _v0.target.checked),
            alignItems: "flex-start",
            name: _v0,
            "data-testid": `${_v0}-checkbox`,
            value: _v0,
            children: _v77[_v0]
          }, `${_v0}-checkbox`))
        })]
      });
    };
  var _v80 = _v0.i(0);
  let _v81 = [{
      label: (0, _v41.translate)({
        singular: "Downloads",
        dictionary: {
          es: {
            singular: "Descargas"
          },
          "fr-FR": {
            singular: "Téléchargements"
          },
          "ja-JP": {
            singular: "ダウンロード"
          },
          "ko-KR": {
            singular: "다운로드"
          },
          "zh-CN": {
            singular: "下载"
          }
        }
      }),
      key: "download",
      info: null
    }, {
      label: (0, _v41.translate)({
        singular: "Add to collections",
        dictionary: {
          es: {
            singular: "Agregar a las colecciones"
          },
          "de-DE": {
            singular: "Zu Sammlungen hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter aux collections"
          },
          "ja-JP": {
            singular: "コレクションに追加"
          },
          "ko-KR": {
            singular: "컬렉션에 추가"
          },
          "pt-BR": {
            singular: "Adicionar às coleções"
          },
          "zh-CN": {
            singular: "添加到合集中"
          }
        }
      }),
      key: "add",
      info: (0, _v41.translate)({
        singular: "Showcases, channels, or groups",
        dictionary: {
          es: {
            singular: "Presentaciones, canales o grupos"
          },
          "de-DE": {
            singular: "Präsentationen, Kanäle oder Gruppen"
          },
          "fr-FR": {
            singular: "Présentations, chaînes ou groupes"
          },
          "ja-JP": {
            singular: "ショーケース、チャンネル、またはグループ"
          },
          "ko-KR": {
            singular: "쇼케이스, 채널 또는 그룹"
          },
          "pt-BR": {
            singular: "Vitrines, canais ou grupos"
          },
          "zh-CN": {
            singular: "展示、频道或群组"
          }
        }
      })
    }, {
      label: (0, _v41.translate)({
        singular: "Auto-generated captions",
        dictionary: {
          es: {
            singular: "Leyendas generadas automáticamente"
          },
          "de-DE": {
            singular: "Automatisch generierte erweiterte Untertitel"
          },
          "fr-FR": {
            singular: "Sous-titres générés automatiquement"
          },
          "ja-JP": {
            singular: "自動生成キャプション"
          },
          "ko-KR": {
            singular: "자동 생성된 캡션"
          },
          "pt-BR": {
            singular: "Legendas geradas automaticamente"
          },
          "zh-CN": {
            singular: "自动生成的字幕"
          }
        }
      }),
      key: "cc",
      info: null
    }, {
      label: (0, _v41.translate)({
        singular: "Comments",
        dictionary: {
          es: {
            singular: "Comentarios"
          },
          "de-DE": {
            singular: "Kommentare"
          },
          "fr-FR": {
            singular: "Commentaires"
          },
          "ja-JP": {
            singular: "コメント"
          },
          "ko-KR": {
            singular: "소감"
          },
          "pt-BR": {
            singular: "Comentários"
          },
          "zh-CN": {
            singular: "评论"
          }
        }
      }),
      key: "comments",
      info: null
    }, {
      label: (0, _v41.translate)({
        singular: "Video stats and views",
        dictionary: {
          es: {
            singular: "Estadísticas de video y visualizaciones"
          },
          "de-DE": {
            singular: "Videostatistiken und Videoaufrufe"
          },
          "fr-FR": {
            singular: "Stats vidéo et vues"
          },
          "ja-JP": {
            singular: "動画の統計データと視聴回数"
          },
          "ko-KR": {
            singular: "동영상 통계 및 조회수"
          },
          "pt-BR": {
            singular: "Estatísticas de vídeo e visualizações"
          },
          "zh-CN": {
            singular: "视频统计数据和观看次数"
          }
        }
      }),
      key: "videoStats",
      info: null
    }],
    _v82 = (0, _v21.rem)(250),
    _v83 = {
      add: !0,
      cc: !1,
      comments: !1,
      download: !1,
      license: "none",
      rating: ["safe"],
      videoStats: !0,
      applyToAll: !1
    };
  _v0.s(["ViewerPermissionsModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    onSaveSuccess: _v2,
    onSaveFailure: _v3
  }) => {
    let {
        creativeCommonsLicenses: _v4
      } = (() => {
        let {
          data: _v0
        } = (0, _v80.useGetCreativecommons)({
          select: ["code", "name"]
        });
        return {
          creativeCommonsLicenses: _v0?.data
        };
      })(),
      {
        defaults: _v5,
        isLoading: _v6,
        updateUploadDefaults: _v7,
        patchError: _v8,
        patchData: _v9
      } = _v67(),
      {
        state: _v10,
        hasChanges: _v11,
        updateState: _v12,
        initializeState: _v13,
        resetState: _v14
      } = _v65(_v83),
      _v15 = _v69(),
      _v16 = (0, _v2.useMemo)(() => {
        let _v0 = _v4?.map(_v0 => ({
          label: _v0.name,
          value: _v0.code
        }));
        return _v0?.unshift({
          label: (0, _v41.translate)({
            singular: "Select a license...",
            dictionary: {
              es: {
                singular: "Seleccione una licencia..."
              },
              "de-DE": {
                singular: "Eine Lizenz auswählen..."
              },
              "fr-FR": {
                singular: "Sélectionnez une licence"
              },
              "ja-JP": {
                singular: "ライセンスを選択..."
              },
              "ko-KR": {
                singular: "라이선스 선택하기"
              },
              "pt-BR": {
                singular: "Selecione uma licença..."
              },
              "zh-CN": {
                singular: "选择许可..."
              }
            }
          }),
          value: "none"
        }), _v0 || [];
      }, [_v4]);
    (0, _v2.useEffect)(() => {
      var _v0;
      _v5 && _v13({
        download: _v5.privacy?.download ?? !1,
        add: _v5.privacy?.add ?? !0,
        comments: _v5.privacy?.comments === "anybody",
        videoStats: !(_v5.hideStats ?? !0),
        cc: _v5.autoccDisplayEnabledByDefault ?? !1,
        license: _v5.license || "none",
        rating: 0 === (_v0 = _v5.rating).length || _v0.includes("safe") && _v57.some(_v0 => _v0.includes(_v0)) ? ["unrated"] : _v0,
        applyToAll: !1
      });
    }, [_v5, _v13]);
    let _v17 = async () => {
      let {
        add: _v0,
        applyToAll: _v1,
        cc: _v2,
        comments: _v3,
        download: _v4,
        license: _v5,
        rating: _v6,
        videoStats: _v7
      } = _v10;
      _v7({
        applyToAll: _v1,
        videos: {
          license: "none" === _v5 ? "" : _v5,
          privacy: {
            download: _v4,
            add: _v0,
            comments: _v3 ? "anybody" : "nobody"
          },
          hideStats: !_v7,
          autoccDisplayEnabledByDefault: _v2,
          rating: _v6
        }
      });
    };
    return (0, _v2.useEffect)(() => {
      _v8 ? _v3() : _v9 && (_v2(), _v1());
    }, [_v8, _v9, _v3, _v2, _v1]), (0, _v1.jsxs)(_v6.Modal, {
      isOpen: _v0,
      onClose: () => {
        _v14(), _v1();
      },
      children: [(0, _v1.jsx)(_v11.ModalOverlay, {}), (0, _v1.jsxs)(_v8.ModalContent, {
        children: [(0, _v1.jsxs)(_v10.ModalHeader, {
          children: [(0, _v1.jsx)(_v22.Text, {
            variant: "heading-md",
            children: _v15.viewerPermissions
          }), (0, _v1.jsx)(_v22.Text, {
            variant: "body-md",
            children: _v15.viewerPermissionsDescription
          })]
        }), (0, _v1.jsx)(_v7.ModalCloseButton, {
          onClick: _v1
        }), (0, _v1.jsxs)(_v19.ModalBody, {
          children: [(0, _v1.jsxs)(_v48.HStack, {
            mb: "xs",
            gap: "xs",
            children: [(0, _v1.jsx)(_v22.Text, {
              variant: "heading-xs",
              children: _v15.contentRating
            }), (0, _v1.jsx)(_v54.Tooltip, {
              label: _v15.contentRatingTooltip,
              maxW: _v82,
              placement: "top",
              shouldWrapChildren: !0,
              children: (0, _v1.jsx)(_v76.InfoCircle, {
                cursor: "pointer",
                display: "flex",
                boxSize: "2xs"
              })
            })]
          }), (0, _v1.jsx)(_v79, {
            onRatingChange: (_v0, _v1) => {
              let {
                rating: _v2
              } = _v10;
              switch (_v0) {
                case "mature":
                  _v12("rating", ["language", "drugs", "violence", "nudity"]);
                  return;
                case "safe":
                  _v12("rating", ["safe"]);
                  return;
                default:
                  if (_v1) return void _v12("rating", [..._v2, _v0]);
                  let _v0 = _v2.filter(_v0 => _v0 !== _v0);
                  _v0.length ? _v12("rating", _v0) : _v12("rating", ["safe"]);
              }
            },
            isRatingModlocked: !1,
            contentRating: _v10.rating
          }), (0, _v1.jsx)(_v5.Divider, {
            borderColor: "stroke",
            my: "md"
          }), (0, _v1.jsx)(_v55.VStack, {
            gap: "md",
            children: _v81.map(({
              label: _v0,
              key: _v1,
              info: _v2
            }) => (0, _v1.jsx)(_v73.Toggle, {
              label: _v0,
              info: _v2,
              size: "md",
              fontSize: 14,
              isDisabled: !1,
              onChange: () => _v12(_v1, !_v10[_v1]),
              isChecked: _v10[_v1]
            }, _v1))
          }), (0, _v1.jsx)(_v5.Divider, {
            borderColor: "stroke",
            my: "md"
          }), (0, _v1.jsxs)(_v48.HStack, {
            gap: "xs",
            mb: "xs",
            children: [(0, _v1.jsx)(_v22.Text, {
              variant: "heading-xs",
              children: _v15.copyright
            }), (0, _v1.jsx)(_v54.Tooltip, {
              label: _v15.creativeCommonsTooltip,
              maxW: _v82,
              placement: "top",
              shouldWrapChildren: !0,
              children: (0, _v1.jsx)(_v76.InfoCircle, {
                cursor: "pointer",
                display: "flex",
                boxSize: "2xs"
              })
            })]
          }), (0, _v1.jsx)(_v75.Select, {
            variant: "withCheck",
            placeholder: _v15.selectLicense,
            items: _v16,
            onValueChange: ({
              value: _v0
            }) => _v12("license", _v0[0]),
            value: [_v10.license ?? "none"]
          }), (0, _v1.jsx)(_v22.Text, {
            variant: "body-md",
            color: "text-secondary",
            mt: "xs",
            children: _v15.ccLicenseLink
          })]
        }), (0, _v1.jsx)(_v9.ModalFooter, {
          justifyContent: "space-between",
          children: (0, _v1.jsx)(_v74.DefaultFooterContent, {
            isSaveDisabled: !_v11,
            isLoading: _v6,
            onSave: _v17,
            onApplyToAll: _v0 => _v12("applyToAll", _v0)
          })
        })]
      })]
    });
  }], 0);
}