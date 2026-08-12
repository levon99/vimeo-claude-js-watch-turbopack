{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
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
    _v20 = _v0.i(0);
  async function _v21({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v19.measureLatency)("getUserLicensedMusicInfringements", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/licensed_music_infringements?${(0, _v20.searchQueryString)(_v3)}&fields=${_v1.map(_v20.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v20.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v20.deepCamelCase)(_v1);
    });
  }
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  function _v27(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v26.useGctlConfig)();
    return (0, _v22.default)(_v2 ? `/users/${_v2.where.userId}/licensed_music_infringements${(0, _v24.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v21({
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
  "true" === _v18.default.env.STORYBOOK && (0, _v24.assignMswData)(_v27, {
    endpoint: "/users/:userId/licensed_music_infringements",
    method: "GET"
  }), "true" === _v18.default.env.STORYBOOK && (0, _v24.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v23.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v26.useGctlConfig)(),
      [_v5, _v6] = (0, _v24.useInternalState)();
    return [(0, _v16.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/licensed_music_infringements${(0, _v24.serializeQuery)(_v0)}`, _v21({
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
    endpoint: "/users/:userId/licensed_music_infringements",
    method: "GET"
  }), "true" === _v18.default.env.STORYBOOK && (0, _v24.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v26.useGctlConfig)();
    return (0, _v25.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/licensed_music_infringements?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v21({
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
    endpoint: "/users/:userId/licensed_music_infringements",
    method: "GET"
  });
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  _v0.i(0);
  var _v36 = (0, _v34.withIris)(function (_v0) {
      var _v1 = _v0.active,
        _v2 = void 0 === _v1 ? 1 : _v1,
        _v3 = _v0.format,
        _v4 = void 0 === _v3 ? "secondary" : _v3,
        _v5 = _v0.forwardRef,
        _v6 = _v0.onChange,
        _v7 = _v0.pageSize,
        _v8 = _v0.total,
        _v9 = _v0.variant,
        _v10 = void 0 === _v9 ? "solid" : _v9,
        _v11 = (0, _v31.b)(_v0, ["active", "format", "forwardRef", "onChange", "pageSize", "total", "variant"]),
        _v12 = (0, _v16.useRef)(null),
        _v13 = Math.ceil(_v8 / _v7);
      function _v14() {
        _v12.current !== document.activeElement && (_v12.current.value = _v2);
      }
      (0, _v16.useEffect)(_v14);
      var _v15 = {
          width: 8 * _v2.toString().length + 25
        },
        _v16 = function (_v0) {
          return function (_v0) {
            return null == _v6 ? void 0 : _v6((0, _v31.c)({
              paging: _v0
            }, _v0));
          };
        },
        _v17 = _v16({
          type: "next"
        }),
        _v18 = _v16({
          type: "prev"
        });
      return _v16.default.createElement(_v38, (0, _v31.c)({
        ref: _v5
      }, _v11), _v16.default.createElement(_v37, {
        size: "md",
        format: _v4,
        variant: _v10,
        icon: _v16.default.createElement(_v39, null),
        disabled: 1 === _v2,
        onClick: _v18
      }), _v16.default.createElement(_v40, {
        defaultValue: _v2,
        onKeyUp: function (_v0) {
          var _v1 = _v0.target.value,
            _v2 = !isNaN(_v1) && parseInt(_v1, 10);
          "Enter" === _v0.key && _v16({
            type: "goto",
            page: _v2
          })(_v0);
        },
        onBlur: _v14,
        ref: _v12,
        style: _v15
      }), _v16.default.createElement(_v37, {
        size: "md",
        format: _v4,
        variant: _v10,
        icon: _v16.default.createElement(_v35.ChevronRight, null),
        disabled: _v2 === _v13,
        onClick: _v17
      }));
    }),
    _v37 = (0, _v6.default)(_v28.Button)(_v1 || (_v1 = (0, _v31.a)(["\n  margin: 0 0.5rem;\n"], ["\n  margin: 0 0.5rem;\n"]))),
    _v38 = _v6.default.div(_v2 || (_v2 = (0, _v31.a)(["\n  display: flex;\n"], ["\n  display: flex;\n"]))),
    _v39 = (0, _v6.default)(_v35.ChevronRight)(_v3 || (_v3 = (0, _v31.a)(["\n  transform: rotate(180deg);\n"], ["\n  transform: rotate(180deg);\n"]))),
    _v40 = (0, _v6.default)(_v33.Input)(_v4 || (_v4 = (0, _v31.a)(["\n  min-width: ", ";\n\n  input {\n    text-align: center;\n  }\n"], ["\n  min-width: ", ";\n\n  input {\n    text-align: center;\n  }\n"])), (0, _v32.rem)(40)),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = (0, _v16.forwardRef)(function (_v0, _v1) {
      return _v16.default.createElement("svg", (0, _v31.c)({
        viewBox: "0 0 32 32",
        ref: _v1
      }, _v0), _v16.default.createElement("path", {
        id: "music_32",
        d: "M29.671,0.028l-20,3.333C8.707,3.522,8,4.356,8,5.334v15.034C7.372,20.144,6.705,20,6,20\n		c-3.314,0-6,2.686-6,6s2.686,6,6,6s6-2.686,6-6V10.973l16-2.667v8.061C27.372,16.144,26.705,16,26,16c-3.314,0-6,2.686-6,6\n		s2.686,6,6,6s6-2.686,6-6V2C32,0.765,30.89-0.175,29.671,0.028z"
      }));
    }),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  let _v47 = "show_all_appeal_statuses",
    _v48 = [{
      id: void 0,
      label: (0, _v8.translate)({
        singular: "No appeal",
        dictionary: {
          es: {
            singular: "Sin apelación"
          },
          "de-DE": {
            singular: "Kein Widerspruch"
          },
          "fr-FR": {
            singular: "Pas de recours"
          },
          "ja-JP": {
            singular: "異議申し立てなし"
          },
          "ko-KR": {
            singular: "이의 제기가 없습니다."
          },
          "pt-BR": {
            singular: "Sem recurso"
          },
          "zh-CN": {
            singular: "无申述"
          }
        }
      })
    }, {
      id: "new",
      label: (0, _v8.translate)({
        singular: "Appeal submitted",
        dictionary: {
          es: {
            singular: "Apelación presentada"
          },
          "de-DE": {
            singular: "Widerspruch eingereicht"
          },
          "fr-FR": {
            singular: "Recours envoyé"
          },
          "ja-JP": {
            singular: "異議申し立て提出済み"
          },
          "ko-KR": {
            singular: "이의 제기가 제출되었습니다."
          },
          "pt-BR": {
            singular: "Recurso enviado"
          },
          "zh-CN": {
            singular: "申诉已提交"
          }
        }
      })
    }, {
      id: "failed_appeal",
      label: (0, _v8.translate)({
        singular: "Appeal denied",
        dictionary: {
          es: {
            singular: "Apelación denegada"
          },
          "de-DE": {
            singular: "Widerspruch abgelehnt"
          },
          "fr-FR": {
            singular: "Recours refusé"
          },
          "ja-JP": {
            singular: "異議申し立て却下"
          },
          "ko-KR": {
            singular: "이의 제기가 거부되었습니다."
          },
          "pt-BR": {
            singular: "Recurso negado"
          },
          "zh-CN": {
            singular: "申述被拒绝"
          }
        }
      })
    }, {
      id: "successful_appeal",
      label: (0, _v8.translate)({
        singular: "Appeal won",
        dictionary: {
          es: {
            singular: "Apelación ganada"
          },
          "de-DE": {
            singular: "Widerspruch gewonnen"
          },
          "fr-FR": {
            singular: "Recours approuvé"
          },
          "ja-JP": {
            singular: "異議申し立て成功"
          },
          "ko-KR": {
            singular: "이의 제기가 승인되었습니다."
          },
          "pt-BR": {
            singular: "Recurso aceito"
          },
          "zh-CN": {
            singular: "申诉成功"
          }
        }
      })
    }],
    _v49 = [{
      id: _v47,
      label: (0, _v8.translate)({
        singular: "Show all",
        dictionary: {
          es: {
            singular: "Mostrar todo"
          },
          "de-DE": {
            singular: "Alle anzeigen"
          },
          "fr-FR": {
            singular: "Tout afficher"
          },
          "ja-JP": {
            singular: "すべて表示"
          },
          "ko-KR": {
            singular: "모두 표시"
          },
          "pt-BR": {
            singular: "Mostrar tudo"
          },
          "zh-CN": {
            singular: "显示全部"
          }
        }
      })
    }, ..._v48],
    _v50 = ({
      handleSelected: _v0,
      selectedElement: _v1
    }) => (0, _v5.jsx)(_v30.Pop.List, {
      children: _v49.map(_v0 => (0, _v5.jsx)(_v30.Pop.Item, {
        onClick: () => _v0(_v0.id),
        selected: _v1 === _v0.id,
        children: _v0.label
      }, _v0.id))
    }),
    _v51 = (0, _v6.default)(_v11.Paragraph).withConfig({
      displayName: "rightsManagementTable__StyledParagraph",
      componentId: "sc-9e9c5a4e-0"
    })`
  margin: 0;
  display: block;
`,
    _v52 = _v6.default.div.withConfig({
      displayName: "rightsManagementTable__FlexContainer",
      componentId: "sc-9e9c5a4e-1"
    })`
  display: flex;
  gap: ${_v9.core.space(100)};
  height: 100%;
  display: flex;
  align-items: center;

  // Title of video
  > span {
    word-wrap: break-word;
    white-space: pre-wrap;
    width: ${(0, _v15.rem)(100)};
  }
`,
    _v53 = (0, _v6.default)(_v43).withConfig({
      displayName: "rightsManagementTable__MusicSvg",
      componentId: "sc-9e9c5a4e-2"
    })`
  height: ${(0, _v15.rem)(25)};
  width: ${(0, _v15.rem)(25)};
`,
    _v54 = (0, _v6.default)(_v44.Table.Cell).withConfig({
      displayName: "rightsManagementTable__StyledRowCell",
      componentId: "sc-9e9c5a4e-3"
    })`
  min-width: ${(0, _v15.rem)(275)};
`,
    _v55 = (0, _v6.default)(_v44.Table.Cell).withConfig({
      displayName: "rightsManagementTable__StyledHeaderCell",
      componentId: "sc-9e9c5a4e-4"
    })`
  min-width: ${(0, _v15.rem)(275)};
  position: sticky;
  top: 0;
  background-color: ${_v0 => _v0.theme.content.background};
  z-index: 1;
`,
    _v56 = (0, _v6.default)(_v44.Table.TableBase).withConfig({
      displayName: "rightsManagementTable__StyledTable",
      componentId: "sc-9e9c5a4e-5"
    })`
  position: relative;
  display: block;
  overflow: scroll;
  flex-grow: 1;
`,
    _v57 = ({
      uri: _v0,
      createdOn: _v1,
      title: _v2,
      artist: _v3,
      label: _v4,
      gracePeriodExpiration: _v5,
      status: _v6,
      clipTitle: _v7,
      pictures: _v8
    }) => {
      let _v9,
        _v10 = new Date(_v1),
        _v11 = (0, _v45.useLocale)(),
        _v12 = new Intl.DateTimeFormat(_v11).format(_v10),
        _v13 = _v0.match(/\/videos\/(\d+).*\/licensed_music_infringements\/(\d+)/),
        _v14 = _v13?.[1],
        _v15 = _v14 ? parseInt(_v14) : null,
        _v16 = _v13?.[2],
        _v17 = _v16 ? parseInt(_v16) : null,
        _v18 = _v48.find(_v0 => _v0.id === _v6)?.label;
      return (0, _v5.jsxs)(_v5.Fragment, {
        children: [(0, _v5.jsxs)(_v44.Table.Row, {
          children: [(0, _v5.jsx)(_v54, {
            children: (0, _v5.jsxs)(_v52, {
              children: [(0, _v5.jsx)("img", {
                src: _v8.sizes[0]?.link,
                alt: "video thumbnail"
              }), (0, _v5.jsx)(_v10.Header, {
                size: "7",
                children: _v7
              })]
            })
          }), (0, _v5.jsx)(_v54, {
            children: (0, _v5.jsxs)(_v52, {
              children: [(0, _v5.jsx)(_v53, {}), (0, _v5.jsxs)("div", {
                children: [(0, _v5.jsx)(_v51, {
                  size: "3",
                  children: _v2
                }), (0, _v5.jsx)(_v51, {
                  size: "3",
                  children: _v3
                }), (0, _v5.jsx)(_v51, {
                  size: "3",
                  format: "alternative",
                  children: _v4
                })]
              })]
            })
          }), (0, _v5.jsx)(_v54, {
            children: (0, _v5.jsx)(_v51, {
              size: "2",
              format: "alternative",
              children: _v18 ?? (0, _v8.translate)({
                singular: "No appeal",
                dictionary: {
                  es: {
                    singular: "Sin apelación"
                  },
                  "de-DE": {
                    singular: "Kein Widerspruch"
                  },
                  "fr-FR": {
                    singular: "Pas de recours"
                  },
                  "ja-JP": {
                    singular: "異議申し立てなし"
                  },
                  "ko-KR": {
                    singular: "이의 제기가 없습니다."
                  },
                  "pt-BR": {
                    singular: "Sem recurso"
                  },
                  "zh-CN": {
                    singular: "无申述"
                  }
                }
              })
            })
          }), (0, _v5.jsx)(_v54, {
            children: _v12
          }), (0, _v5.jsx)(_v54, {
            children: (0, _v5.jsxs)(_v52, {
              children: [(0, _v5.jsx)(_v28.Button, {
                element: "a",
                format: "soft",
                variant: "minimal",
                href: `/rights-management/appeal/${_v15}/${_v17}`,
                children: (0, _v8.translate)({
                  singular: "Appeal",
                  dictionary: {
                    es: {
                      singular: "Apelar"
                    },
                    "de-DE": {
                      singular: "Vorwurf anfechten"
                    },
                    "fr-FR": {
                      singular: "Faire appel"
                    },
                    "ja-JP": {
                      singular: "異議申立てをする"
                    },
                    "ko-KR": {
                      singular: "이의 제기"
                    },
                    "pt-BR": {
                      singular: "Recorrer"
                    },
                    "zh-CN": {
                      singular: "申诉"
                    }
                  }
                })
              }), (0, _v5.jsx)(_v28.Button, {
                element: "a",
                format: "basic",
                href: `/manage/videos/${_v15}/replace`,
                children: (0, _v8.translate)({
                  singular: "Replace",
                  dictionary: {
                    es: {
                      singular: "Reemplazar"
                    },
                    "de-DE": {
                      singular: "Ersetzen"
                    },
                    "fr-FR": {
                      singular: "Remplacer"
                    },
                    "ja-JP": {
                      singular: "置き換え"
                    },
                    "ko-KR": {
                      singular: "변경"
                    },
                    "pt-BR": {
                      singular: "Substituir"
                    },
                    "zh-CN": {
                      singular: "更换"
                    }
                  }
                })
              })]
            })
          })]
        }), _v5 && (0, _v5.jsx)("td", {
          colSpan: 3,
          children: (0, _v5.jsx)(_v41.Notice, {
            format: "primary",
            style: {
              width: "max-content"
            },
            children: (0, _v5.jsxs)(_v11.Paragraph, {
              size: "2",
              format: "soft",
              children: [(0, _v8.translate)({
                singular: "This video will be restricted to Private on",
                dictionary: {
                  es: {
                    singular: "Este video se restringirá a Privado el"
                  },
                  "de-DE": {
                    singular: "Dieses Video wird auf „Privat“ gestellt am"
                  },
                  "fr-FR": {
                    singular: "Cette vidéo sera définie sur Privé le"
                  },
                  "ja-JP": {
                    singular: "この動画は次の日時に非公開に制限されます："
                  },
                  "ko-KR": {
                    singular: "이 동영상은 다음 날짜에 비공개로 제한됩니다."
                  },
                  "pt-BR": {
                    singular: "Este vídeo ficará restrito no modo privado em"
                  },
                  "zh-CN": {
                    singular: "此视频将在以下时间被限制为私人视频"
                  }
                }
              }), " ", (_v9 = new Date(_v5), new Intl.DateTimeFormat(_v11, {
                dateStyle: "short",
                timeStyle: "long"
              }).format(_v9))]
            })
          })
        })]
      });
    },
    _v58 = () => {
      let _v0 = (0, _v46.useOptionalViewer)(),
        [_v1, _v2] = (0, _v16.useState)(_v47),
        [_v3, _v4] = (0, _v16.useState)(!1),
        [_v5, _v6] = (0, _v16.useState)(1),
        {
          isValidating: _v7,
          data: _v8
        } = _v27(() => _v0?.user ? {
          where: {
            userId: _v0.user.id.toString()
          },
          query: {
            ...(_v1 && {
              appealStatusFilter: _v1
            }),
            page: _v5,
            perPage: 25
          },
          select: ["uri", "createdOn", "title", "artist", "label", "gracePeriodExpiration", "status", "clipTitle", "pictures"]
        } : null);
      return (0, _v5.jsxs)(_v5.Fragment, {
        children: [(0, _v5.jsxs)(_v56, {
          children: [(0, _v5.jsxs)(_v44.Table.Head, {
            children: [(0, _v5.jsx)(_v55, {
              as: "th",
              children: (0, _v8.translate)({
                singular: "Video title",
                dictionary: {
                  es: {
                    singular: "Título del video"
                  },
                  "de-DE": {
                    singular: "Videotitel"
                  },
                  "fr-FR": {
                    singular: "Titre de la vidéo"
                  },
                  "ja-JP": {
                    singular: "動画タイトル"
                  },
                  "ko-KR": {
                    singular: "동영상 제목"
                  },
                  "pt-BR": {
                    singular: "Título do vídeo"
                  },
                  "zh-CN": {
                    singular: "视频标题"
                  }
                }
              })
            }), (0, _v5.jsx)(_v55, {
              as: "th",
              children: (0, _v8.translate)({
                singular: "Music detected",
                dictionary: {
                  es: {
                    singular: "Música detectada"
                  },
                  "de-DE": {
                    singular: "Musik erkannt"
                  },
                  "fr-FR": {
                    singular: "Musique détectée"
                  },
                  "ja-JP": {
                    singular: "音楽が検出されました"
                  },
                  "ko-KR": {
                    singular: "음악이 감지되었습니다."
                  },
                  "pt-BR": {
                    singular: "Música detectada"
                  },
                  "zh-CN": {
                    singular: "检测到音乐"
                  }
                }
              })
            }), (0, _v5.jsx)(_v55, {
              as: "th",
              children: (0, _v5.jsx)(_v29.PopOver, {
                active: _v3,
                content: (0, _v5.jsx)(_v50, {
                  handleSelected: _v0 => {
                    _v4(!1), _v2(_v0);
                  },
                  selectedElement: _v1
                }),
                children: (0, _v5.jsx)(_v28.Button, {
                  size: "sm",
                  format: "basic",
                  variant: "minimalTransparent",
                  icon: (0, _v5.jsx)(_v42.ChevronDown, {}),
                  iconPosition: "right",
                  onClick: () => _v4(!_v3),
                  children: (0, _v8.translate)({
                    singular: "Appeal Status",
                    dictionary: {
                      es: {
                        singular: "Estado de la apelación"
                      },
                      "de-DE": {
                        singular: "Widerspruchsstatus"
                      },
                      "fr-FR": {
                        singular: "Statut du recours"
                      },
                      "ja-JP": {
                        singular: "異議申し立ての状況"
                      },
                      "ko-KR": {
                        singular: "이의 제기 상태"
                      },
                      "pt-BR": {
                        singular: "Status do recurso"
                      },
                      "zh-CN": {
                        singular: "申诉状态"
                      }
                    }
                  })
                })
              })
            }), (0, _v5.jsx)(_v55, {
              as: "th",
              children: (0, _v8.translate)({
                singular: "Date detected",
                dictionary: {
                  es: {
                    singular: "Fecha de detección"
                  },
                  "de-DE": {
                    singular: "Datum erkannt"
                  },
                  "fr-FR": {
                    singular: "Date de la détection"
                  },
                  "ja-JP": {
                    singular: "データが検出されました"
                  },
                  "ko-KR": {
                    singular: "감지된 날짜"
                  },
                  "pt-BR": {
                    singular: "Data detectada"
                  },
                  "zh-CN": {
                    singular: "检测到日期"
                  }
                }
              })
            }), (0, _v5.jsx)(_v55, {
              as: "th"
            })]
          }), (0, _v5.jsxs)(_v44.Table.Body, {
            children: [_v7 && !_v8 && (0, _v5.jsx)("tr", {
              children: (0, _v5.jsx)(_v44.Table.Cell, {
                colSpan: 4,
                style: {
                  height: (0, _v15.rem)(75),
                  textAlign: "center"
                },
                children: (0, _v5.jsx)(_v17.Spinner, {
                  color: "gray.500",
                  style: {
                    display: "inline-block"
                  }
                })
              })
            }), _v8?.total === 0 ? (0, _v5.jsx)("tr", {
              children: (0, _v5.jsx)(_v44.Table.Cell, {
                colSpan: 4,
                style: {
                  lineHeight: (0, _v15.rem)(75),
                  textAlign: "center"
                },
                children: (0, _v8.translate)({
                  singular: "No results found",
                  dictionary: {
                    es: {
                      singular: "No encontramos resultados."
                    },
                    "de-DE": {
                      singular: "Keine Ergebnisse"
                    },
                    "fr-FR": {
                      singular: "Aucun résultat trouvé"
                    },
                    "ja-JP": {
                      singular: "検索結果がありません"
                    },
                    "ko-KR": {
                      singular: "검색 결과가 없습니다"
                    },
                    "pt-BR": {
                      singular: "Nenhum resultado encontrado."
                    },
                    "zh-CN": {
                      singular: "未找到结果"
                    }
                  }
                })
              })
            }) : _v8?.data.map((_v0, _v1) => (0, _v5.jsx)(_v57, {
              ..._v0
            }, _v1))]
          })]
        }), _v8 && _v8?.total > 25 && (0, _v5.jsx)(_v36, {
          active: _v5,
          total: _v8?.total,
          pageSize: 25,
          onChange: _v0 => {
            "next" === _v0.paging.type && _v6(_v5 + 1), "prev" === _v0.paging.type && _v6(_v5 - 1), "goto" === _v0.paging.type && _v6(_v0.paging.page);
          },
          style: {
            display: "flex",
            justifyContent: "flex-end"
          }
        })]
      });
    };
  (0, _v7.withPageSetup)({
    requireLogin: !0,
    inlineViewer: !0
  });
  let _v59 = _v6.default.div.withConfig({
      displayName: "rights-management__HeaderWrapper",
      componentId: "sc-6fe174cd-0"
    })`
  max-width: 800px;
`,
    _v60 = _v6.default.div.withConfig({
      displayName: "rights-management__Wrapper",
      componentId: "sc-6fe174cd-1"
    })`
  padding: ${_v9.core.space(400)};
  display: flex;
  flex-direction: column;
  height: 100vh;
`,
    _v61 = () => (0, _v5.jsxs)(_v60, {
      children: [(0, _v5.jsxs)(_v59, {
        children: [(0, _v5.jsx)(_v10.Header, {
          size: "2",
          children: (0, _v8.translate)({
            singular: "Rights management",
            dictionary: {
              es: {
                singular: "Gestión de derechos"
              },
              "de-DE": {
                singular: "Rechteverwaltung"
              },
              "fr-FR": {
                singular: "Gestion des droits"
              },
              "ja-JP": {
                singular: "著作権管理"
              },
              "ko-KR": {
                singular: "권한 관리"
              },
              "pt-BR": {
                singular: "Gestão de Direitos"
              },
              "zh-CN": {
                singular: "权利管理"
              }
            }
          })
        }), (0, _v5.jsxs)(_v11.Paragraph, {
          size: "2",
          children: [(0, _v8.translate)({
            singular: "Music in these videos may be protected by copyright. Videos containing protected music are restricted to Private if the issue hasn’t been resolved within 48 hours.",
            dictionary: {
              es: {
                singular: "La música de estos videos puede estar protegida por derechos de autor. Los videos que contienen música protegida se restringen a Privado si el problema no se resuelve en 48 horas."
              },
              "de-DE": {
                singular: "Die Musik in diesen Videos kann urheberrechtlich geschützt sein. Videos mit urheberrechtlich geschützter Musik werden in den Privatmodus gesetzt, sofern das Problem nicht innerhalb von 48 Stunden behoben wird."
              },
              "fr-FR": {
                singular: "La musique de ces vidéos peut être protégée par des droits d'auteur. Les vidéos qui contiennent de la musique protégée sont définies uniquement sur Privé si le problème n'a pas été résolu dans les 48 heures."
              },
              "ja-JP": {
                singular: "これらの動画内の音楽は著作権で保護されている可能性があります。48時間以内にこの問題が解決されない場合、著作権保護対象の音楽を含む動画は非公開化として制限されたままになります。"
              },
              "ko-KR": {
                singular: "이 동영상에 포함된 음악은 저작권의 보호를 받을 수 있습니다. 저작권 있는 음악이 사용된 동영상은 문제가 48시간 이내에 해결되지 않으면 비공개로 제한됩니다."
              },
              "pt-BR": {
                singular: "As músicas nestes vídeos podem estar protegidas por direitos autorais. Vídeos que contêm músicas protegidas são restritos ao modo Privado se o problema não for resolvido em 48 horas."
              },
              "zh-CN": {
                singular: "这些视频中的音乐可能受版权保护。如果问题在 48 小时内未得到解决，则包含受保护音乐的视频仅限于私密观看。"
              }
            }
          }), " "]
        }), (0, _v5.jsx)(_v12.Link, {
          style: {
            fontSize: "0.875rem"
          },
          format: "basic",
          href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/15786745904017",
          target: "_blank",
          children: (0, _v8.translate)({
            singular: "Why was my content set to private?",
            dictionary: {
              es: {
                singular: "¿Por qué mi contenido se estableció en Privado?"
              },
              "de-DE": {
                singular: "Warum wurde mein Inhalt auf „Privat“ gesetzt?"
              },
              "fr-FR": {
                singular: "Pourquoi mon contenu a-t-il été défini comme privé ?"
              },
              "ja-JP": {
                singular: "コンテンツがプライベートに設定されたのはなぜですか？"
              },
              "ko-KR": {
                singular: "내 콘텐츠가 비공개로 설정된 이유는 무엇인가요?"
              },
              "pt-BR": {
                singular: "Por que meu conteúdo foi definido como privado?"
              },
              "zh-CN": {
                singular: "我的内容为什么会设置为私密？"
              }
            }
          })
        }), (0, _v5.jsx)("br", {}), (0, _v5.jsx)(_v11.Paragraph, {
          size: "2",
          children: (0, _v8.translate)({
            singular: "To resolve this issue, replace the videos with versions that contain only music you’re authorized to use. If you’re authorized to use the music in these videos, you can submit an appeal.",
            dictionary: {
              es: {
                singular: "Para resolver este problema, sustituye los videos por versiones que solo contengan música que estés autorizado a utilizar. Si estás autorizado a utilizar la música de estos videos, puedes presentar una apelación."
              },
              "de-DE": {
                singular: "Du kannst dieses Problem lösen, indem du die vorhandenen Videos durch Versionen ersetzt, die nur Musik enthalten, die du auch tatsächlich verwenden darfst. Wenn du zur Verwendung der Musik in diesen Videos berechtigt bist, kannst du Widerspruch einlegen."
              },
              "fr-FR": {
                singular: "Pour résoudre ce problème, remplacez les vidéos par des versions qui contiennent uniquement de la musique que vous êtes autorisé(e) à utiliser. Si vous disposez des autorisations nécessaires pour utiliser cette musique dans ces vidéos, veuillez déposer un recours."
              },
              "ja-JP": {
                singular: "この問題を解決するには、使用許可を持つ音楽のみで構成されたバージョンに動画を差し替えてください。これらの動画で使用している音楽の使用権をお持ちの場合は、異議申し立てを行うことができます。"
              },
              "ko-KR": {
                singular: "이 문제를 해결하려면 사용 권한이 있는 음악만 포함된 버전으로 동영상을 교체하세요. 이 동영상의 음악을 사용할 권한이 있는 경우 이의를 제기할 수 있습니다."
              },
              "pt-BR": {
                singular: "Para resolver esse problema, substitua os vídeos por versões que contenham somente músicas que você tem autorização para a usar. Se você tiver autorização para usar a música nesses vídeos, pode enviar um recurso."
              },
              "zh-CN": {
                singular: "要解决这个问题，请将视频替换为只包含您授权使用的音乐的版本。如果您已获得授权使用这些视频中的音乐，您可以提交申诉。"
              }
            }
          })
        })]
      }), (0, _v5.jsx)(_v58, {})]
    });
  _v61.getLayout = function (_v0) {
    return (0, _v5.jsxs)(_v5.Fragment, {
      children: [(0, _v5.jsx)(_v13.DefaultNavigation, {
        fixed: !1,
        hasThemeSupport: !1
      }), _v0, (0, _v5.jsx)(_v14.MinimalFooterLayout, {})]
    });
  }, _v0.s(["__N_SSP", 0, !0, "default", 0, _v61], 0);
}