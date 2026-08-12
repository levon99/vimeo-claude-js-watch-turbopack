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
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
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
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0);
  async function _v77({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v75.measureLatency)("postTeamCustomMetadataBackfill", "POST", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/custom_metadata/backfill`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v76.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v76.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v76.deepCamelCase)(_v1);
    });
  }
  async function _v78({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v75.measureLatency)("patchTeamCustomMetadataOptions", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v3}/custom_metadata/options?fields=${_v1.map(_v76.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v76.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v76.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v76.deepCamelCase)(_v1);
    });
  }
  var _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0);
  async function _v82({
    baseUrl: _v0,
    where: {
      userId: _v1
    },
    query: _v2,
    ..._v3
  }) {
    return (0, _v75.measureLatency)("getTeamCustomMetadataIncompleteVideos", "GET", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v1}/custom_metadata/incomplete_videos?${(0, _v76.searchQueryString)(_v2)}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v76.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v76.deepCamelCase)(_v1);
    });
  }
  var _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0);
  function _v86(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v79.useGctlConfig)();
    return (0, _v83.default)(_v2 ? `/teams/${_v2.where.userId}/custom_metadata/incomplete_videos${(0, _v85.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v82({
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
  "true" === _v81.default.env.STORYBOOK && (0, _v85.assignMswData)(_v86, {
    endpoint: "/teams/:userId/custom_metadata/incomplete_videos",
    method: "GET"
  }), "true" === _v81.default.env.STORYBOOK && (0, _v85.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v84.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v79.useGctlConfig)(),
      [_v5, _v6] = (0, _v85.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/teams/${_v0.where.userId}/custom_metadata/incomplete_videos${(0, _v85.serializeQuery)(_v0)}`, _v82({
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
    endpoint: "/teams/:userId/custom_metadata/incomplete_videos",
    method: "GET"
  });
  var _v87 = _v0.i(0),
    _v88 = _v0.i(0);
  let _v89 = (_v0, _v1) => "multi-select" !== _v1 ? _v0 : JSON.stringify(_v0.split(",").filter(Boolean)),
    _v90 = {
      str: (0, _v87.translate)({
        singular: "Text",
        dictionary: {
          es: {
            singular: "Texto"
          },
          "fr-FR": {
            singular: "Texte"
          },
          "ja-JP": {
            singular: "テキスト"
          },
          "ko-KR": {
            singular: "텍스트"
          },
          "pt-BR": {
            singular: "Texto"
          },
          "zh-CN": {
            singular: "文本"
          }
        }
      }),
      select: (0, _v87.translate)({
        singular: "Single select",
        dictionary: {
          es: {
            singular: "Selección única"
          },
          "de-DE": {
            singular: "Einzelauswahl"
          },
          "fr-FR": {
            singular: "Sélection unique"
          },
          "ja-JP": {
            singular: "単一選択"
          },
          "ko-KR": {
            singular: "단일 선택"
          },
          "pt-BR": {
            singular: "Seleção única"
          },
          "zh-CN": {
            singular: "单选"
          }
        }
      }),
      "multi-select": (0, _v87.translate)({
        singular: "Multi select",
        dictionary: {
          es: {
            singular: "Selección múltiple"
          },
          "de-DE": {
            singular: "Mehrfachauswahl"
          },
          "fr-FR": {
            singular: "Sélection multiple"
          },
          "ja-JP": {
            singular: "複数選択"
          },
          "ko-KR": {
            singular: "다중 선택"
          },
          "pt-BR": {
            singular: "Seleção múltipla"
          },
          "zh-CN": {
            singular: "多选"
          }
        }
      }),
      bool: (0, _v87.translate)({
        singular: "Toggle",
        dictionary: {
          es: {
            singular: "Alternar"
          },
          "de-DE": {
            singular: "Umschalten"
          },
          "fr-FR": {
            singular: "Basculer"
          },
          "ja-JP": {
            singular: "切り替え"
          },
          "ko-KR": {
            singular: "토글"
          },
          "pt-BR": {
            singular: "Alternar"
          },
          "zh-CN": {
            singular: "切换"
          }
        }
      }),
      int: (0, _v87.translate)({
        singular: "Number",
        dictionary: {
          es: {
            singular: "Número"
          },
          "de-DE": {
            singular: "Zahl"
          },
          "fr-FR": {
            singular: "Nombre"
          },
          "ja-JP": {
            singular: "数値"
          },
          "ko-KR": {
            singular: "숫자"
          },
          "pt-BR": {
            singular: "Número"
          },
          "zh-CN": {
            singular: "数字"
          }
        }
      }),
      date: (0, _v87.translate)({
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
      })
    },
    _v91 = Object.keys(_v90),
    _v92 = _v91.map(_v0 => ({
      label: _v90[_v0],
      value: _v0
    })),
    _v93 = _v0 => `${_v0.year}-${String(_v0.month).padStart(2, "0")}-${String(_v0.day).padStart(2, "0")}`;
  _v0.s(["CustomMetadataPage", 0, ({
    ownerId: _v0
  }) => {
    let _v1,
      _v2,
      _v3,
      _v4,
      {
        baseUrl: _v5,
        jwt: _v6,
        xVimeoPage: _v7,
        locale: _v8
      } = (0, _v79.useGctlConfig)(),
      {
        settings: _v9,
        isLoadingResponse: _v10
      } = (0, _v88.useOrionSettings)(),
      [_v11, _v12] = (0, _v2.useState)(""),
      [_v13, _v14] = (0, _v2.useState)([]),
      [_v15, _v16] = (0, _v2.useState)([]),
      [_v17, _v18] = (0, _v2.useState)(!1),
      _v19 = _v13.length > 0 || _v15.length > 0,
      {
        isOpen: _v20,
        onOpen: _v21,
        onClose: _v22
      } = (0, _v56.useDisclosure)(),
      _v23 = (0, _v57.useToast)(),
      [_v24, _v25] = (0, _v2.useState)(""),
      [_v26, _v27] = (0, _v2.useState)(""),
      [_v28, _v29] = (0, _v2.useState)("str"),
      [_v30, _v31] = (0, _v2.useState)(""),
      [_v32, _v33] = (0, _v2.useState)(!1),
      [_v34, _v35] = (0, _v2.useState)([""]),
      [_v36, _v37] = (0, _v2.useState)(new Set()),
      [_v38, _v39] = (0, _v2.useState)(1),
      [_v40, _v41] = (0, _v2.useState)("default"),
      [_v42, _v43] = (0, _v2.useState)(""),
      _v44 = (0, _v2.useRef)(!1),
      _v45 = (0, _v2.useRef)(null),
      _v46 = (0, _v2.useRef)(null),
      [_v47, _v48] = (0, _v2.useState)(!1),
      [_v49, _v50] = (0, _v2.useState)(null),
      {
        isOpen: _v51,
        onOpen: _v52,
        onClose: _v53
      } = (0, _v56.useDisclosure)(),
      [_v54, _v55] = (0, _v2.useState)(""),
      [_v56, _v57] = (0, _v2.useState)(!1),
      [_v58, _v59] = (0, _v2.useState)(null),
      {
        isOpen: _v60,
        onOpen: _v61,
        onClose: _v62
      } = (0, _v56.useDisclosure)(),
      [_v63, _v64] = (0, _v2.useState)(!1),
      [_v65, _v66] = (0, _v2.useState)(null),
      {
        isOpen: _v67,
        onOpen: _v68,
        onClose: _v69
      } = (0, _v56.useDisclosure)(),
      [_v70, _v71] = (0, _v2.useState)("general"),
      [_v72, _v73] = (0, _v2.useState)(""),
      [_v74, _v75] = (0, _v2.useState)(""),
      [_v76, _v77] = (0, _v2.useState)(!1),
      [_v78, _v79] = (0, _v2.useState)(""),
      [_v80, _v81] = (0, _v2.useState)([{
        originalValue: null,
        value: ""
      }]),
      [_v82, _v83] = (0, _v2.useState)(new Set()),
      [_v84, _v85] = (0, _v2.useState)(null),
      {
        isOpen: _v86,
        onOpen: _v87,
        onClose: _v88
      } = (0, _v56.useDisclosure)(),
      {
        isOpen: _v89,
        onOpen: _v90,
        onClose: _v91
      } = (0, _v56.useDisclosure)(),
      {
        isOpen: _v92,
        onOpen: _v93,
        onClose: _v94
      } = (0, _v56.useDisclosure)(),
      _v95 = (0, _v2.useCallback)(() => {
        _v25(""), _v27(""), _v29("str"), _v31(""), _v33(!1), _v35([""]), _v37(new Set()), _v39(1), _v41("default"), _v43(""), _v44.current = !1;
      }, []),
      _v96 = (0, _v2.useCallback)(() => {
        _v95(), _v22();
      }, [_v95, _v22]),
      _v97 = (0, _v2.useMemo)(() => ({
        "Content-Type": "application/json",
        Authorization: _v6 ? `jwt ${_v6}` : "",
        "Vimeo-Page": `${_v7}`,
        "Accept-Language": _v8 ?? "en"
      }), [_v6, _v7, _v8]),
      _v98 = (0, _v2.useCallback)(_v0 => {
        _v50(_v0), _v55(""), _v57(!1), _v52();
      }, [_v52]),
      _v99 = (0, _v2.useCallback)(() => {
        _v49 && _v0 && _v54.trim() && (_v53(), _v23({
          title: (0, _v87.translate)({
            singular: "Applying to all videos may take some time.",
            dictionary: {
              es: {
                singular: "Aplicarlo a todos los videos puede tardar un poco."
              },
              "de-DE": {
                singular: "Die Anwendung auf alle Videos kann einige Zeit dauern."
              },
              "fr-FR": {
                singular: "L’application à toutes les vidéos peut prendre un certain temps."
              },
              "ja-JP": {
                singular: "すべての動画に適用するには時間がかかる場合があります。"
              },
              "ko-KR": {
                singular: "모든 동영상에 적용하는 데 시간이 걸릴 수 있습니다."
              },
              "pt-BR": {
                singular: "Aplicar a todos os vídeos pode levar algum tempo."
              },
              "zh-CN": {
                singular: "应用到所有视频可能需要一些时间。"
              }
            }
          }),
          duration: 0
        }), _v77({
          where: {
            userId: _v0
          },
          variables: {
            fieldId: _v49.id,
            fieldValue: _v89(_v54, _v49.type),
            overrideExisting: _v56
          },
          headers: _v97,
          baseUrl: _v5
        }).catch(() => {
          _v23({
            title: (0, _v87.translate)({
              singular: "Failed to apply backfill. Please try again.",
              dictionary: {
                es: {
                  singular: "No se pudo aplicar el relleno. Inténtelo de nuevo."
                },
                "de-DE": {
                  singular: "Die Rückbefüllung konnte nicht angewendet werden. Bitte versuchen Sie es erneut."
                },
                "fr-FR": {
                  singular: "Échec de l’application du remplissage rétroactif. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "バックフィルの適用に失敗しました。再度お試しください。"
                },
                "ko-KR": {
                  singular: "백필 적용에 실패했습니다. 다시 시도하세요."
                },
                "pt-BR": {
                  singular: "Falha ao aplicar o preenchimento. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "回填应用失败。请重试。"
                }
              }
            }),
            duration: 0,
            status: "error"
          });
        }));
      }, [_v49, _v0, _v54, _v56, _v97, _v5, _v53, _v23]),
      _v100 = (0, _v2.useCallback)(_v0 => {
        _v59(_v0), _v61();
      }, [_v61]),
      _v101 = (0, _v2.useCallback)(_v0 => {
        if (_v66(_v0), _v73(_v0.name ?? ""), _v75(_v0.description ?? ""), _v77(_v0.mandatory ?? !1), _v71("general"), "select" === _v0.type || "multi-select" === _v0.type) {
          let _v0 = (_v0.values?.length ? _v0.values : []).map(_v0 => ({
            originalValue: _v0,
            value: _v0
          }));
          0 === _v0.length && _v0.push({
            originalValue: null,
            value: ""
          }), _v81(_v0);
          let _v1 = (_v0.default ?? "").split(",").filter(Boolean),
            _v2 = new Set();
          _v1.forEach(_v0 => {
            let _v1 = _v0.findIndex(_v0 => _v0.value === _v0);
            _v1 >= 0 && _v2.add(_v1);
          }), _v83(_v2), _v79("");
        } else _v81([{
          originalValue: null,
          value: ""
        }]), _v83(new Set()), _v79(_v0.default ?? "");
        _v68();
      }, [_v68]),
      _v102 = (0, _v2.useMemo)(() => {
        if (!_v65) return !1;
        if (_v72 !== (_v65.name ?? "") || _v74 !== (_v65.description ?? "") || _v76 !== (_v65.mandatory ?? !1)) return !0;
        if ("select" === _v65.type || "multi-select" === _v65.type) {
          let _v0 = _v65.values?.length ? _v65.values : [],
            _v1 = _v80.map(_v0 => _v0.value);
          if (_v1.length !== _v0.length || _v1.some((_v0, _v1) => _v0 !== _v0[_v1])) return !0;
          let _v2 = (_v65.default ?? "").split(",").filter(Boolean),
            _v3 = new Set();
          if (_v2.forEach(_v0 => {
            let _v1 = _v0.indexOf(_v0);
            _v1 >= 0 && _v3.add(_v1);
          }), _v82.size !== _v3.size || [..._v82].some(_v0 => !_v3.has(_v0))) return !0;
        } else if (_v78 !== (_v65.default ?? "")) return !0;
        return !1;
      }, [_v65, _v72, _v74, _v76, _v80, _v82, _v78]),
      _v103 = (0, _v2.useMemo)(() => {
        if (!_v65 || "select" !== _v65.type && "multi-select" !== _v65.type) return {
          added: [],
          deleted: [],
          renamed: []
        };
        let _v0 = _v65.values ?? [],
          _v1 = [],
          _v2 = [],
          _v3 = [],
          _v4 = _v80.filter(_v0 => null !== _v0.originalValue);
        for (let _v0 of _v0) {
          let _v0 = _v4.find(_v0 => _v0.originalValue === _v0);
          _v0 ? _v0.value !== _v0 && _v3.push({
            from: _v0,
            to: _v0.value
          }) : _v2.push(_v0);
        }
        for (let _v0 of _v80) null === _v0.originalValue && _v0.value.trim() && _v1.push(_v0.value);
        return {
          added: _v1,
          deleted: _v2,
          renamed: _v3
        };
      }, [_v65, _v80]),
      _v104 = _v103.added.length > 0 || _v103.deleted.length > 0 || _v103.renamed.length > 0,
      _v105 = (0, _v2.useCallback)(() => {
        _v102 ? _v90() : _v69();
      }, [_v102, _v90, _v69]),
      _v106 = (0, _v2.useMemo)(() => {
        if ("select" === _v28 || "multi-select" === _v28) {
          let _v0 = [..._v36].map(_v0 => _v34[_v0]).filter(Boolean);
          return _v0.length > 0 ? _v0.join(", ") : (0, _v87.translate)({
            singular: "None",
            dictionary: {
              es: {
                singular: "Ninguno"
              },
              "de-DE": {
                singular: "Kein"
              },
              "fr-FR": {
                singular: "Aucune"
              },
              "ja-JP": {
                singular: "なし"
              },
              "ko-KR": {
                singular: "없음"
              },
              "pt-BR": {
                singular: "Nenhum"
              },
              "zh-CN": {
                singular: "无"
              }
            }
          });
        }
        return "bool" === _v28 ? "true" === _v30 ? (0, _v87.translate)({
          singular: "True",
          dictionary: {
            es: {
              singular: "Verdadero"
            },
            "de-DE": {
              singular: "Wahr"
            },
            "fr-FR": {
              singular: "Vrai"
            },
            "ja-JP": {
              singular: "はい"
            },
            "ko-KR": {
              singular: "참"
            },
            "pt-BR": {
              singular: "Verdadeiro"
            },
            "zh-CN": {
              singular: "是"
            }
          }
        }) : "false" === _v30 ? (0, _v87.translate)({
          singular: "False",
          dictionary: {
            es: {
              singular: "Falso"
            },
            "de-DE": {
              singular: "Falsch"
            },
            "fr-FR": {
              singular: "Faux"
            },
            "ja-JP": {
              singular: "いいえ"
            },
            "ko-KR": {
              singular: "거짓"
            },
            "pt-BR": {
              singular: "Falso"
            },
            "zh-CN": {
              singular: "否"
            }
          }
        }) : (0, _v87.translate)({
          singular: "None",
          dictionary: {
            es: {
              singular: "Ninguno"
            },
            "de-DE": {
              singular: "Kein"
            },
            "fr-FR": {
              singular: "Aucune"
            },
            "ja-JP": {
              singular: "なし"
            },
            "ko-KR": {
              singular: "없음"
            },
            "pt-BR": {
              singular: "Nenhum"
            },
            "zh-CN": {
              singular: "无"
            }
          }
        }) : _v30 || (0, _v87.translate)({
          singular: "None",
          dictionary: {
            es: {
              singular: "Ninguno"
            },
            "de-DE": {
              singular: "Kein"
            },
            "fr-FR": {
              singular: "Aucune"
            },
            "ja-JP": {
              singular: "なし"
            },
            "ko-KR": {
              singular: "없음"
            },
            "pt-BR": {
              singular: "Nenhum"
            },
            "zh-CN": {
              singular: "无"
            }
          }
        });
      }, [_v28, _v30, _v36, _v34]),
      _v107 = (0, _v2.useMemo)(() => "select" === _v28 || "multi-select" === _v28 ? [..._v36].some(_v0 => !!_v34[_v0]) : "bool" === _v28 ? "true" === _v30 || "false" === _v30 : _v30.length > 0, [_v28, _v30, _v36, _v34]),
      {
        data: _v108,
        mutate: _v109
      } = (0, _v80.useGetTeamCustomMetadata)(() => _v0 ? {
        where: {
          userId: _v0
        },
        select: ["id", "name", "type", "mandatory", "values", "description", "default"]
      } : null, {
        revalidateOnFocus: !1
      }),
      _v110 = (0, _v2.useCallback)(() => {
        if (!_v65 || !_v0) return;
        let _v0 = {
            id: _v65.id,
            name: _v72.trim(),
            mandatory: _v76,
            ...(_v74.trim() ? {
              description: _v74.trim()
            } : {
              description: null
            })
          },
          _v1 = [];
        if ("select" === _v65.type || "multi-select" === _v65.type) {
          let _v0 = _v65.values ?? [],
            _v1 = _v80.filter(_v0 => null !== _v0.originalValue);
          for (let _v0 of _v0) {
            let _v0 = _v1.find(_v0 => _v0.originalValue === _v0);
            _v0 ? _v0.value !== _v0 && _v1.push({
              oldValue: _v0,
              newValue: _v0.value
            }) : _v1.push({
              oldValue: _v0
            });
          }
          for (let _v0 of _v80) null === _v0.originalValue && _v0.value.trim() && _v1.push({
            newValue: _v0.value
          });
          let _v2 = [..._v82].map(_v0 => _v80[_v0]?.value).filter(Boolean);
          _v0.defaultValue = _v2.length > 0 ? _v2.join(",") : null;
        } else _v0.defaultValue = _v78 || null;
        _v69(), _v23({
          title: (0, _v87.translate)({
            singular: "Saving changes. This can take a moment for large fields.",
            dictionary: {
              es: {
                singular: "Guardando cambios. Esto puede tardar un momento para campos grandes."
              },
              "de-DE": {
                singular: "Änderungen werden gespeichert. Bei großen Feldern kann dies einen Moment dauern."
              },
              "fr-FR": {
                singular: "Enregistrement des modifications. Cela peut prendre un moment pour les champs volumineux."
              },
              "ja-JP": {
                singular: "変更を保存しています。大きなフィールドでは時間がかかる場合があります。"
              },
              "ko-KR": {
                singular: "변경 사항을 저장하는 중입니다. 큰 필드의 경우 시간이 걸릴 수 있습니다."
              },
              "pt-BR": {
                singular: "Salvando alterações. Isso pode levar um momento para campos grandes."
              },
              "zh-CN": {
                singular: "正在保存更改。对于较大的字段，这可能需要一些时间。"
              }
            }
          }),
          duration: 0
        }), (async () => {
          try {
            _v1.length > 0 && (await _v78({
              where: {
                userId: _v0
              },
              select: [],
              variables: {
                fieldId: _v65.id,
                options: _v1
              },
              headers: _v97,
              baseUrl: _v5
            })), await (0, _v74.postTeamCustomMetadata)({
              where: {
                userId: _v0
              },
              select: ["id", "name", "type", "mandatory"],
              variables: {
                fields: [_v0]
              },
              headers: _v97,
              baseUrl: _v5
            }), await _v109(), _v23({
              title: (0, _v87.translate)({
                singular: "Custom metadata field updated.",
                dictionary: {
                  es: {
                    singular: "Campo de metadatos personalizado actualizado."
                  },
                  "de-DE": {
                    singular: "Benutzerdefiniertes Metadatenfeld aktualisiert."
                  },
                  "fr-FR": {
                    singular: "Champ de métadonnées personnalisé mis à jour."
                  },
                  "ja-JP": {
                    singular: "カスタムメタデータフィールドが更新されました。"
                  },
                  "ko-KR": {
                    singular: "사용자 지정 메타데이터 필드가 업데이트되었습니다."
                  },
                  "pt-BR": {
                    singular: "Campo de metadados personalizados atualizado."
                  },
                  "zh-CN": {
                    singular: "自定义元数据字段已更新。"
                  }
                }
              }),
              duration: 0
            });
          } catch {
            await _v109(), _v23({
              title: (0, _v87.translate)({
                singular: "Failed to update field. Please try again.",
                dictionary: {
                  es: {
                    singular: "No se pudo actualizar el campo. Inténtelo de nuevo."
                  },
                  "de-DE": {
                    singular: "Feld konnte nicht aktualisiert werden. Bitte versuchen Sie es erneut."
                  },
                  "fr-FR": {
                    singular: "Échec de la mise à jour du champ. Veuillez réessayer."
                  },
                  "ja-JP": {
                    singular: "フィールドの更新に失敗しました。再度お試しください。"
                  },
                  "ko-KR": {
                    singular: "필드 업데이트에 실패했습니다. 다시 시도하세요."
                  },
                  "pt-BR": {
                    singular: "Falha ao atualizar o campo. Por favor, tente novamente."
                  },
                  "zh-CN": {
                    singular: "更新字段失败。请重试。"
                  }
                }
              }),
              duration: 0,
              status: "error"
            });
          }
        })();
      }, [_v65, _v0, _v72, _v74, _v76, _v78, _v80, _v82, _v97, _v5, _v109, _v69, _v23]),
      _v111 = (0, _v2.useCallback)(async () => {
        if (_v58 && _v0) {
          _v64(!0);
          try {
            let _v0 = [{
              id: _v58.id,
              delete: !0
            }];
            await (0, _v74.postTeamCustomMetadata)({
              where: {
                userId: _v0
              },
              select: ["id"],
              variables: {
                fields: _v0
              },
              headers: _v97,
              baseUrl: _v5
            }), await _v109(), _v62(), _v23({
              title: (0, _v87.translate)({
                singular: "Custom metadata field deleted.",
                dictionary: {
                  es: {
                    singular: "Campo de metadatos personalizado eliminado."
                  },
                  "de-DE": {
                    singular: "Benutzerdefiniertes Metadatenfeld gelöscht."
                  },
                  "fr-FR": {
                    singular: "Champ de métadonnées personnalisé supprimé."
                  },
                  "ja-JP": {
                    singular: "カスタムメタデータフィールドが削除されました。"
                  },
                  "ko-KR": {
                    singular: "사용자 지정 메타데이터 필드가 삭제되었습니다."
                  },
                  "pt-BR": {
                    singular: "Campo de metadados personalizados excluído."
                  },
                  "zh-CN": {
                    singular: "自定义元数据字段已删除。"
                  }
                }
              }),
              duration: 0
            });
          } catch {
            _v23({
              title: (0, _v87.translate)({
                singular: "Failed to delete field. Please try again.",
                dictionary: {
                  es: {
                    singular: "No se pudo eliminar el campo. Inténtelo de nuevo."
                  },
                  "de-DE": {
                    singular: "Feld konnte nicht gelöscht werden. Bitte versuchen Sie es erneut."
                  },
                  "fr-FR": {
                    singular: "Échec de la suppression du champ. Veuillez réessayer."
                  },
                  "ja-JP": {
                    singular: "フィールドの削除に失敗しました。再度お試しください。"
                  },
                  "ko-KR": {
                    singular: "필드 삭제에 실패했습니다. 다시 시도하세요."
                  },
                  "pt-BR": {
                    singular: "Falha ao excluir o campo. Por favor, tente novamente."
                  },
                  "zh-CN": {
                    singular: "删除字段失败。请重试。"
                  }
                }
              }),
              duration: 0,
              status: "error"
            });
          } finally {
            _v64(!1);
          }
        }
      }, [_v58, _v0, _v97, _v5, _v109, _v62, _v23]),
      _v112 = (0, _v2.useMemo)(() => Array.isArray(_v108) ? _v108 : _v108?.data ?? [], [_v108]),
      _v113 = (0, _v2.useMemo)(() => _v112.length ? _v112.filter(_v0 => {
        let _v1 = _v0.name.toLowerCase().includes(_v11.toLowerCase()),
          _v2 = 0 === _v13.length || _v13.includes(_v0.type),
          _v3 = 0 === _v15.length || _v15.includes("required") && _v0.mandatory || _v15.includes("optional") && !_v0.mandatory;
        return _v1 && _v2 && _v3;
      }) : [], [_v112, _v11, _v13, _v15]),
      _v114 = (0, _v2.useMemo)(() => _v112.map(_v0 => _v0.name), [_v112]),
      _v115 = (0, _v2.useMemo)(() => _v112.some(_v0 => _v0.mandatory), [_v112]),
      _v116 = (0, _v2.useMemo)(() => JSON.stringify(_v112.map(_v0 => ({
        id: _v0.id,
        mandatory: _v0.mandatory
      }))), [_v112]),
      [_v117, _v118] = (0, _v2.useState)(1),
      [_v119, _v120] = (0, _v2.useState)("title_asc"),
      {
        data: _v121,
        isLoading: _v122,
        mutate: _v123
      } = _v86(() => _v0 && _v115 ? {
        where: {
          userId: _v0
        },
        query: {
          page: _v117,
          perPage: 10,
          sort: _v119
        }
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1,
        revalidateIfStale: !1,
        onError: () => {
          _v23({
            title: (0, _v87.translate)({
              singular: "Failed to load incomplete videos.",
              dictionary: {
                es: {
                  singular: "No se pudieron cargar los videos incompletos."
                },
                "de-DE": {
                  singular: "Unvollständige Videos konnten nicht geladen werden."
                },
                "fr-FR": {
                  singular: "Échec du chargement des vidéos incomplètes."
                },
                "ja-JP": {
                  singular: "不完全な動画の読み込みに失敗しました。"
                },
                "ko-KR": {
                  singular: "완료되지 않은 동영상을 불러오지 못했습니다."
                },
                "pt-BR": {
                  singular: "Falha ao carregar vídeos incompletos."
                },
                "zh-CN": {
                  singular: "加载不完整的视频失败。"
                }
              }
            }),
            duration: 0,
            status: "error"
          });
        }
      }),
      [_v124, _v125] = (0, _v2.useState)(_v116);
    _v124 !== _v116 && (_v125(_v116), _v118(1), _v123());
    let _v126 = (0, _v2.useMemo)(() => _v121 ? Math.ceil(_v121.total / 10) : 0, [_v121]),
      _v127 = (0, _v2.useMemo)(() => "" !== _v24.trim() && _v114.some(_v0 => _v0.toLowerCase() === _v24.trim().toLowerCase()), [_v24, _v114]),
      _v128 = (0, _v2.useMemo)(() => !!_v65 && "" !== _v72.trim() && _v114.some(_v0 => _v0.toLowerCase() === _v72.trim().toLowerCase() && _v0.toLowerCase() !== (_v65.name ?? "").toLowerCase()), [_v72, _v65, _v114]),
      _v129 = (0, _v2.useMemo)(() => !!(!_v24.trim() || _v127 || !_v28 || ("select" === _v28 || "multi-select" === _v28) && _v34.some(_v0 => !_v0.trim())), [_v24, _v127, _v28, _v34]),
      _v130 = (0, _v2.useMemo)(() => _v11 ? _v114.find(_v0 => _v0.toLowerCase().startsWith(_v11.toLowerCase())) ?? "" : "", [_v11, _v114]),
      _v131 = (0, _v2.useCallback)(_v0 => {
        "Tab" === _v0.key && _v130 && (_v0.preventDefault(), _v12(_v130));
      }, [_v130]),
      _v132 = (0, _v2.useCallback)(async () => {
        if (_v0) {
          _v48(!0);
          try {
            let _v0 = {
              name: _v24.trim(),
              type: _v28,
              mandatory: _v32,
              ...(_v26.trim() ? {
                description: _v26.trim()
              } : {})
            };
            if ("select" === _v28 || "multi-select" === _v28) {
              _v0.values = _v34.filter(Boolean);
              let _v0 = [..._v36].map(_v0 => _v34[_v0]).filter(Boolean);
              _v0.length > 0 && (_v0.defaultValue = _v0.join(","));
            } else _v30 && (_v0.defaultValue = _v30);
            let _v1 = await (0, _v74.postTeamCustomMetadata)({
                where: {
                  userId: _v0
                },
                select: ["id", "name", "type", "mandatory"],
                variables: {
                  fields: [_v0]
                },
                headers: _v97,
                baseUrl: _v5
              }),
              _v2 = _v1?.data?.[0] ?? null,
              _v3 = (() => {
                if ("default" === _v40) {
                  if ("select" === _v28 || "multi-select" === _v28) {
                    let _v0 = [..._v36].map(_v0 => _v34[_v0]).filter(Boolean);
                    return _v0.length > 0 ? _v0.join(",") : null;
                  }
                  return _v30 || null;
                }
                return "custom" === _v40 && _v42 || null;
              })();
            await _v109(), _v96(), _v2?.id && null !== _v3 ? (_v23({
              title: (0, _v87.translate)({
                singular: "Custom metadata added. Applying to all videos may take some time.",
                dictionary: {
                  es: {
                    singular: "Metadatos personalizados agregados. Aplicarlo a todos los videos puede tardar un poco."
                  },
                  "de-DE": {
                    singular: "Benutzerdefinierte Metadaten hinzugefügt. Die Anwendung auf alle Videos kann einige Zeit dauern."
                  },
                  "fr-FR": {
                    singular: "Méta-données personnalisées ajoutées. L’application à toutes les vidéos peut prendre un certain temps."
                  },
                  "ja-JP": {
                    singular: "カスタムメタデータが追加されました。すべての動画に適用するには時間がかかる場合があります。"
                  },
                  "ko-KR": {
                    singular: "사용자 지정 메타데이터가 추가되었습니다. 모든 동영상에 적용하는 데 시간이 걸릴 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Metadados personalizados adicionados. A aplicação a todos os vídeos pode levar algum tempo."
                  },
                  "zh-CN": {
                    singular: "已添加自定义元数据。将其应用到所有视频可能需要一些时间。"
                  }
                }
              }),
              duration: 0
            }), _v77({
              where: {
                userId: _v0
              },
              variables: {
                fieldId: _v2.id,
                fieldValue: _v89(_v3, _v28),
                overrideExisting: !1
              },
              headers: _v97,
              baseUrl: _v5
            }).catch(() => {
              _v23({
                title: (0, _v87.translate)({
                  singular: "Failed to apply backfill. Please try again.",
                  dictionary: {
                    es: {
                      singular: "No se pudo aplicar el relleno. Inténtelo de nuevo."
                    },
                    "de-DE": {
                      singular: "Die Rückbefüllung konnte nicht angewendet werden. Bitte versuchen Sie es erneut."
                    },
                    "fr-FR": {
                      singular: "Échec de l’application du remplissage rétroactif. Veuillez réessayer."
                    },
                    "ja-JP": {
                      singular: "バックフィルの適用に失敗しました。再度お試しください。"
                    },
                    "ko-KR": {
                      singular: "백필 적용에 실패했습니다. 다시 시도하세요."
                    },
                    "pt-BR": {
                      singular: "Falha ao aplicar o preenchimento. Por favor, tente novamente."
                    },
                    "zh-CN": {
                      singular: "回填应用失败。请重试。"
                    }
                  }
                }),
                duration: 0,
                status: "error"
              });
            })) : _v23({
              title: (0, _v87.translate)({
                singular: "Custom metadata added.",
                dictionary: {
                  es: {
                    singular: "Metadatos personalizados agregados."
                  },
                  "de-DE": {
                    singular: "Benutzerdefinierte Metadaten hinzugefügt."
                  },
                  "fr-FR": {
                    singular: "Méta-données personnalisées ajoutées."
                  },
                  "ja-JP": {
                    singular: "カスタムメタデータが追加されました。"
                  },
                  "ko-KR": {
                    singular: "사용자 지정 메타데이터가 추가되었습니다."
                  },
                  "pt-BR": {
                    singular: "Metadados personalizados adicionados."
                  },
                  "zh-CN": {
                    singular: "已添加自定义元数据。"
                  }
                }
              }),
              duration: 0
            });
          } catch {
            _v23({
              title: (0, _v87.translate)({
                singular: "Failed to create field. Please try again.",
                dictionary: {
                  es: {
                    singular: "No se pudo crear el campo. Inténtelo de nuevo."
                  },
                  "de-DE": {
                    singular: "Feld konnte nicht erstellt werden. Bitte versuchen Sie es erneut."
                  },
                  "fr-FR": {
                    singular: "Échec de la création du champ. Veuillez réessayer."
                  },
                  "ja-JP": {
                    singular: "フィールドの作成に失敗しました。再度お試しください。"
                  },
                  "ko-KR": {
                    singular: "필드 생성에 실패했습니다. 다시 시도하세요."
                  },
                  "pt-BR": {
                    singular: "Falha ao criar o campo. Por favor, tente novamente."
                  },
                  "zh-CN": {
                    singular: "创建字段失败。请重试。"
                  }
                }
              }),
              duration: 0,
              status: "error"
            });
          } finally {
            _v48(!1);
          }
        }
      }, [_v0, _v24, _v28, _v32, _v34, _v36, _v30, _v26, _v40, _v42, _v97, _v5, _v109, _v96, _v23]);
    if (_v10) return (0, _v1.jsx)(_v14.Flex, {
      flex: "1",
      align: "center",
      justify: "center",
      py: "xl",
      children: (0, _v1.jsx)(_v44.Spinner, {
        size: "lg"
      })
    });
    if (!_v9.show_custom_metadata) throw new _v73.UnauthorizedError();
    return (0, _v1.jsxs)(_v58.VStack, {
      spacing: "lg",
      p: "lg",
      pb: "xl",
      align: "stretch",
      maxW: (0, _v42.rem)(960),
      mx: "auto",
      w: "100%",
      children: [(0, _v1.jsx)(_v8.Box, {
        children: (0, _v1.jsx)(_v52.Text, {
          as: "h1",
          variant: "heading-lg",
          fontWeight: "medium",
          children: (0, _v87.translate)({
            singular: "Custom metadata",
            dictionary: {
              es: {
                singular: "Metadatos personalizados"
              },
              "de-DE": {
                singular: "Benutzerdefinierte Metadaten"
              },
              "fr-FR": {
                singular: "Métadonnées personnalisées"
              },
              "ja-JP": {
                singular: "カスタムメタデータ"
              },
              "ko-KR": {
                singular: "사용자 정의 메타데이터"
              },
              "pt-BR": {
                singular: "Metadados personalizados"
              },
              "zh-CN": {
                singular: "自定义元数据"
              }
            }
          })
        })
      }), (0, _v1.jsxs)(_v8.Box, {
        backgroundColor: "surface",
        borderRadius: "lg",
        children: [(0, _v1.jsxs)(_v17.HStack, {
          justifyContent: "space-between",
          alignItems: "center",
          p: "md",
          children: [(0, _v1.jsxs)(_v17.HStack, {
            spacing: "sm",
            children: [(0, _v1.jsxs)(_v38.Popover, {
              placement: "bottom-start",
              onOpen: () => _v18(!0),
              onClose: () => _v18(!1),
              children: [(0, _v1.jsx)(_v41.PopoverTrigger, {
                children: (0, _v1.jsx)(_v18.IconButton, {
                  "aria-label": (0, _v87.translate)({
                    singular: "Filter",
                    dictionary: {
                      es: {
                        singular: "Filtro"
                      },
                      "fr-FR": {
                        singular: "Filtre"
                      },
                      "ja-JP": {
                        singular: "フィルター"
                      },
                      "ko-KR": {
                        singular: "필터"
                      },
                      "pt-BR": {
                        singular: "Filtro"
                      },
                      "zh-CN": {
                        singular: "筛选"
                      }
                    }
                  }),
                  variant: "secondary",
                  size: "md",
                  icon: (0, _v1.jsx)(_v65.Filter, {}),
                  isActive: _v17 || _v19
                })
              }), (0, _v1.jsx)(_v40.PopoverContent, {
                children: (0, _v1.jsx)(_v39.PopoverBody, {
                  p: "md",
                  children: (0, _v1.jsxs)(_v58.VStack, {
                    align: "stretch",
                    spacing: "md",
                    children: [(0, _v1.jsxs)(_v8.Box, {
                      children: [(0, _v1.jsx)(_v52.Text, {
                        variant: "body-sm",
                        fontWeight: "semibold",
                        mb: "sm",
                        children: (0, _v87.translate)({
                          singular: "Type",
                          dictionary: {
                            es: {
                              singular: "Tipo"
                            },
                            "de-DE": {
                              singular: "Typ"
                            },
                            "ja-JP": {
                              singular: "タイプ"
                            },
                            "ko-KR": {
                              singular: "유형"
                            },
                            "pt-BR": {
                              singular: "Tipo"
                            },
                            "zh-CN": {
                              singular: "类型"
                            }
                          }
                        })
                      }), (0, _v1.jsx)(_v13.CheckboxGroup, {
                        value: _v13,
                        onChange: _v0 => _v14(_v0),
                        children: (0, _v1.jsx)(_v58.VStack, {
                          align: "stretch",
                          spacing: "xs",
                          children: _v91.map(_v0 => (0, _v1.jsx)(_v12.Checkbox, {
                            value: _v0,
                            children: _v90[_v0]
                          }, _v0))
                        })
                      })]
                    }), (0, _v1.jsxs)(_v8.Box, {
                      children: [(0, _v1.jsx)(_v52.Text, {
                        variant: "body-sm",
                        fontWeight: "semibold",
                        mb: "sm",
                        children: (0, _v87.translate)({
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
                        })
                      }), (0, _v1.jsx)(_v13.CheckboxGroup, {
                        value: _v15,
                        onChange: _v0 => _v16(_v0),
                        children: (0, _v1.jsxs)(_v58.VStack, {
                          align: "stretch",
                          spacing: "xs",
                          children: [(0, _v1.jsx)(_v12.Checkbox, {
                            value: "required",
                            children: (0, _v87.translate)({
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
                            })
                          }), (0, _v1.jsx)(_v12.Checkbox, {
                            value: "optional",
                            children: (0, _v87.translate)({
                              singular: "Optional",
                              dictionary: {
                                es: {
                                  singular: "Opcional"
                                },
                                "fr-FR": {
                                  singular: "Facultatif"
                                },
                                "ja-JP": {
                                  singular: "任意"
                                },
                                "ko-KR": {
                                  singular: "선택 사항"
                                },
                                "pt-BR": {
                                  singular: "Opcional"
                                },
                                "zh-CN": {
                                  singular: "可选"
                                }
                              }
                            })
                          })]
                        })
                      })]
                    })]
                  })
                })
              })]
            }), (0, _v1.jsxs)(_v21.InputGroup, {
              w: (0, _v42.rem)(240),
              maxW: (0, _v42.rem)(296),
              position: "relative",
              bg: "fill-component",
              borderRadius: (0, _v42.rem)(12),
              children: [(0, _v1.jsx)(_v22.InputLeftElement, {
                pointerEvents: "none",
                h: "100%",
                children: (0, _v1.jsx)(_v68.SearchMagnifier, {})
              }), _v130 && _v11 && (0, _v1.jsxs)(_v8.Box, {
                position: "absolute",
                left: "0",
                top: "0",
                right: "0",
                bottom: "0",
                display: "flex",
                alignItems: "center",
                pl: (0, _v42.rem)(40),
                pr: (0, _v42.rem)(16),
                pointerEvents: "none",
                whiteSpace: "pre",
                fontSize: "body-md",
                fontFamily: "body",
                overflow: "hidden",
                children: [(0, _v1.jsx)(_v8.Box, {
                  as: "span",
                  color: "transparent",
                  whiteSpace: "pre",
                  children: _v11
                }), (0, _v1.jsx)(_v8.Box, {
                  as: "span",
                  color: "text-tertiary",
                  whiteSpace: "pre",
                  children: _v130.slice(_v11.length)
                })]
              }), (0, _v1.jsx)(_v20.Input, {
                size: "md",
                h: (0, _v42.rem)(40),
                bg: "transparent",
                borderRadius: (0, _v42.rem)(12),
                placeholder: (0, _v87.translate)({
                  singular: "Search fields...",
                  dictionary: {
                    es: {
                      singular: "Buscar campos..."
                    },
                    "de-DE": {
                      singular: "Felder durchsuchen..."
                    },
                    "fr-FR": {
                      singular: "Rechercher des champs..."
                    },
                    "ja-JP": {
                      singular: "フィールドを検索..."
                    },
                    "ko-KR": {
                      singular: "필드 검색..."
                    },
                    "pt-BR": {
                      singular: "Pesquisar campos..."
                    },
                    "zh-CN": {
                      singular: "搜索字段..."
                    }
                  }
                }),
                value: _v11,
                onChange: _v0 => _v12(_v0.target.value),
                onKeyDown: _v131,
                autoComplete: "off"
              })]
            })]
          }), (0, _v1.jsx)(_v49.Tooltip, {
            label: (0, _v87.translate)({
              singular: "You’ve reached the {LIMIT}-field limit. Delete an existing field to add a new one.",
              replacements: {
                LIMIT: 20
              },
              dictionary: {
                es: {
                  singular: "Ha alcanzado el límite de {LIMIT} campos. Elimine un campo existente para añadir uno nuevo."
                },
                "de-DE": {
                  singular: "Sie haben das Limit von {LIMIT} Feldern erreicht. Löschen Sie ein vorhandenes Feld, um ein neues hinzuzufügen."
                },
                "fr-FR": {
                  singular: "Vous avez atteint la limite de {LIMIT} champs. Supprimez un champ existant pour en ajouter un nouveau."
                },
                "ja-JP": {
                  singular: "フィールドが{LIMIT}件の上限に達しました。新しいフィールドを追加するには既存のフィールドを削除してください。"
                },
                "ko-KR": {
                  singular: "{LIMIT}-필드 제한에 도달했습니다. 새 필드를 추가하려면 기존 필드를 삭제하세요."
                },
                "pt-BR": {
                  singular: "Você atingiu o limite de {LIMIT} campos. Exclua um campo existente para adicionar um novo."
                },
                "zh-CN": {
                  singular: "您已达到 {LIMIT} 个字段的上限。删除一个现有字段以添加新字段。"
                }
              }
            }),
            placement: "top",
            isDisabled: _v114.length < 20,
            shouldWrapChildren: !0,
            children: (0, _v1.jsx)(_v11.Button, {
              variant: "secondary",
              size: "md",
              onClick: _v21,
              isDisabled: void 0 === _v108 || _v114.length >= 20,
              children: (0, _v1.jsxs)(_v17.HStack, {
                spacing: "xs",
                children: [(0, _v1.jsx)(_v67.PlusSmall, {}), (0, _v1.jsx)("span", {
                  children: (0, _v87.translate)({
                    singular: "New field",
                    dictionary: {
                      es: {
                        singular: "Nuevo campo"
                      },
                      "de-DE": {
                        singular: "Neues Feld"
                      },
                      "fr-FR": {
                        singular: "Nouveau champ"
                      },
                      "ja-JP": {
                        singular: "新しいフィールド"
                      },
                      "ko-KR": {
                        singular: "새 필드"
                      },
                      "pt-BR": {
                        singular: "Novo campo"
                      },
                      "zh-CN": {
                        singular: "新字段"
                      }
                    }
                  })
                })]
              })
            })
          })]
        }), void 0 === _v108 ? (0, _v1.jsx)(_v14.Flex, {
          justifyContent: "center",
          p: "xl",
          children: (0, _v1.jsx)(_v44.Spinner, {})
        }) : _v113.length > 0 ? (0, _v1.jsxs)(_v46.Table, {
          w: "100%",
          sx: {
            tableLayout: "fixed",
            "th, td": {
              px: "md",
              borderBottomColor: "transparent"
            },
            "thead tr, tbody tr": {
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "md",
                right: "md",
                height: "1px",
                bg: "stroke"
              }
            }
          },
          children: [(0, _v1.jsx)(_v54.Thead, {
            children: (0, _v1.jsxs)(_v55.Tr, {
              children: [(0, _v1.jsx)(_v53.Th, {
                w: "30%",
                color: "text-secondary",
                children: (0, _v87.translate)({
                  singular: "Name",
                  dictionary: {
                    es: {
                      singular: "Nombre"
                    },
                    "fr-FR": {
                      singular: "Nom"
                    },
                    "ja-JP": {
                      singular: "名前"
                    },
                    "ko-KR": {
                      singular: "이름"
                    },
                    "pt-BR": {
                      singular: "Nome"
                    },
                    "zh-CN": {
                      singular: "姓名"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v53.Th, {
                w: "28%",
                color: "text-secondary",
                children: (0, _v87.translate)({
                  singular: "Type",
                  dictionary: {
                    es: {
                      singular: "Tipo"
                    },
                    "de-DE": {
                      singular: "Typ"
                    },
                    "ja-JP": {
                      singular: "タイプ"
                    },
                    "ko-KR": {
                      singular: "유형"
                    },
                    "pt-BR": {
                      singular: "Tipo"
                    },
                    "zh-CN": {
                      singular: "类型"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v53.Th, {
                w: "30%",
                color: "text-secondary",
                children: (0, _v87.translate)({
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
                })
              }), (0, _v1.jsx)(_v53.Th, {
                w: "12%"
              })]
            })
          }), (0, _v1.jsx)(_v50.Tbody, {
            children: _v113.map(_v0 => (0, _v1.jsxs)(_v55.Tr, {
              children: [(0, _v1.jsx)(_v51.Td, {
                w: "30%",
                children: (0, _v1.jsx)(_v52.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  cursor: "pointer",
                  _hover: {
                    textDecoration: "underline"
                  },
                  onClick: () => _v101(_v0),
                  children: _v0.name
                })
              }), (0, _v1.jsx)(_v51.Td, {
                w: "28%",
                children: (0, _v1.jsx)(_v52.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  children: _v90[_v0.type]
                })
              }), (0, _v1.jsx)(_v51.Td, {
                w: "30%",
                children: (0, _v1.jsx)(_v6.Badge, {
                  size: "sm",
                  variant: _v0.mandatory ? "staff" : "default",
                  children: _v0.mandatory ? (0, _v87.translate)({
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
                  }) : (0, _v87.translate)({
                    singular: "Optional",
                    dictionary: {
                      es: {
                        singular: "Opcional"
                      },
                      "fr-FR": {
                        singular: "Facultatif"
                      },
                      "ja-JP": {
                        singular: "任意"
                      },
                      "ko-KR": {
                        singular: "선택 사항"
                      },
                      "pt-BR": {
                        singular: "Opcional"
                      },
                      "zh-CN": {
                        singular: "可选"
                      }
                    }
                  })
                })
              }), (0, _v1.jsx)(_v51.Td, {
                w: "12%",
                textAlign: "right",
                children: (0, _v1.jsx)(_v23.Menu, {
                  children: ({
                    isOpen: _v0
                  }) => (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v24.MenuButton, {
                      as: _v18.IconButton,
                      "aria-label": (0, _v87.translate)({
                        singular: "Actions",
                        dictionary: {
                          es: {
                            singular: "Acciones"
                          },
                          "de-DE": {
                            singular: "Aktionen"
                          },
                          "ja-JP": {
                            singular: "メニュー"
                          },
                          "ko-KR": {
                            singular: "옵션"
                          },
                          "pt-BR": {
                            singular: "Ações"
                          },
                          "zh-CN": {
                            singular: "操作"
                          }
                        }
                      }),
                      icon: (0, _v1.jsx)(_v64.EllipsisH, {}),
                      variant: "unstyled",
                      size: "sm",
                      borderRadius: "md",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bg: _v0 ? "text-primary" : "transparent",
                      color: _v0 ? "text-button-inverted" : "inherit",
                      _hover: {
                        bg: _v0 ? "text-primary" : "fill-component"
                      }
                    }), (0, _v1.jsxs)(_v28.MenuList, {
                      children: [(0, _v1.jsx)(_v25.MenuItem, {
                        icon: (0, _v1.jsx)(_v63.RenamePencil, {}),
                        onClick: () => _v101(_v0),
                        children: (0, _v87.translate)({
                          singular: "Edit field",
                          dictionary: {
                            es: {
                              singular: "Editar campo"
                            },
                            "de-DE": {
                              singular: "Feld bearbeiten"
                            },
                            "fr-FR": {
                              singular: "Modifier le champ"
                            },
                            "ja-JP": {
                              singular: "フィールドを編集"
                            },
                            "ko-KR": {
                              singular: "필드 편집"
                            },
                            "pt-BR": {
                              singular: "Editar campo"
                            },
                            "zh-CN": {
                              singular: "编辑字段"
                            }
                          }
                        })
                      }), (0, _v1.jsx)(_v25.MenuItem, {
                        icon: (0, _v1.jsx)(_v61.CircleCheck, {}),
                        onClick: () => _v98(_v0),
                        children: (0, _v87.translate)({
                          singular: "Set value to all videos",
                          dictionary: {
                            es: {
                              singular: "Asignar valor a todos los videos"
                            },
                            "de-DE": {
                              singular: "Wert für alle Videos festlegen"
                            },
                            "fr-FR": {
                              singular: "Appliquer la valeur à toutes les vidéos"
                            },
                            "ja-JP": {
                              singular: "すべての動画に値を設定"
                            },
                            "ko-KR": {
                              singular: "모든 동영상에 값 설정"
                            },
                            "pt-BR": {
                              singular: "Definir valor para todos os vídeos"
                            },
                            "zh-CN": {
                              singular: "将值设置为所有视频"
                            }
                          }
                        })
                      }), (0, _v1.jsx)(_v25.MenuItem, {
                        icon: (0, _v1.jsx)(_v71.TrashBin, {}),
                        color: "status-destructive-primary",
                        onClick: () => _v100(_v0),
                        children: (0, _v87.translate)({
                          singular: "Delete field",
                          dictionary: {
                            es: {
                              singular: "Eliminar campo"
                            },
                            "de-DE": {
                              singular: "Feld löschen"
                            },
                            "fr-FR": {
                              singular: "Supprimer le champ"
                            },
                            "ja-JP": {
                              singular: "フィールドを削除"
                            },
                            "ko-KR": {
                              singular: "필드 삭제"
                            },
                            "pt-BR": {
                              singular: "Excluir campo"
                            },
                            "zh-CN": {
                              singular: "删除字段"
                            }
                          }
                        })
                      })]
                    })]
                  })
                })
              })]
            }, _v0.id))
          })]
        }) : (0, _v1.jsx)(_v14.Flex, {
          justifyContent: "center",
          p: "xl",
          children: (0, _v1.jsx)(_v52.Text, {
            color: "text-secondary",
            variant: "body-md",
            children: (0, _v87.translate)({
              singular: "No custom metadata fields found.",
              dictionary: {
                es: {
                  singular: "No se encontraron campos de metadatos personalizados."
                },
                "de-DE": {
                  singular: "Keine benutzerdefinierten Metadatenfelder gefunden."
                },
                "fr-FR": {
                  singular: "Aucun champ de métadonnées personnalisé trouvé."
                },
                "ja-JP": {
                  singular: "カスタムメタデータフィールドが見つかりません。"
                },
                "ko-KR": {
                  singular: "사용자 지정 메타데이터 필드를 찾을 수 없습니다."
                },
                "pt-BR": {
                  singular: "Nenhum campo de metadados personalizados encontrado."
                },
                "zh-CN": {
                  singular: "未找到自定义元数据字段。"
                }
              }
            })
          })
        }), void 0 !== _v108 && (0, _v1.jsx)(_v14.Flex, {
          justifyContent: "center",
          py: "md",
          children: (0, _v1.jsxs)(_v52.Text, {
            variant: "body-xs",
            color: "text-tertiary",
            children: [_v114.length, "/", 20, " fields used"]
          })
        })]
      }), _v115 && (0, _v1.jsx)(_v8.Box, {
        backgroundColor: "surface",
        borderRadius: "lg",
        children: !_v121 && _v122 ? (0, _v1.jsx)(_v14.Flex, {
          justifyContent: "center",
          p: "xl",
          children: (0, _v1.jsx)(_v44.Spinner, {})
        }) : _v121 && _v121.data.length > 0 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v8.Box, {
            px: "md",
            pt: "md",
            pb: "sm",
            children: (0, _v1.jsxs)(_v3.Alert, {
              status: "warning",
              alignItems: "flex-start",
              sx: {
                ".chakra-alert__icon": {
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: "2px",
                  "& svg": {
                    width: "100%",
                    height: "100%"
                  }
                }
              },
              children: [(0, _v1.jsx)(_v5.AlertTitle, {
                children: (0, _v87.translate)({
                  singular: "{COUNT} video has missing mandatory fields.",
                  plural: "{COUNT} videos have missing mandatory fields.",
                  count: _v121.total,
                  replacements: {
                    COUNT: _v121.total
                  },
                  dictionary: {
                    es: {
                      singular: "{COUNT} video tiene campos obligatorios faltantes.",
                      plural: "{COUNT} videos tienen campos obligatorios faltantes."
                    },
                    "de-DE": {
                      singular: "{COUNT} Video weist fehlende Pflichtfelder auf.",
                      plural: "{COUNT} Videos weisen fehlende Pflichtfelder auf."
                    },
                    "fr-FR": {
                      singular: "{COUNT} vidéo a des champs obligatoires manquants.",
                      plural: "{COUNT} vidéos ont des champs obligatoires manquants."
                    },
                    "ja-JP": {
                      singular: "{COUNT} 件の動画で必須フィールドが不足しています。",
                      plural: "{COUNT} 件の動画で必須フィールドが不足しています。"
                    },
                    "ko-KR": {
                      singular: "{COUNT}개의 동영상에 필수 필드가 누락되어 있습니다.",
                      plural: "{COUNT}개의 동영상에 필수 필드가 누락되어 있습니다."
                    },
                    "pt-BR": {
                      singular: "{COUNT} vídeo possui campos obrigatórios ausentes.",
                      plural: "{COUNT} vídeos possuem campos obrigatórios ausentes."
                    },
                    "zh-CN": {
                      singular: "{COUNT} 个视频缺少必填字段。",
                      plural: "{COUNT} 个视频缺少必填字段。"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v4.AlertDescription, {
                children: (0, _v87.translate)({
                  singular: "Videos missing required metadata can’t be shared, but already shared videos remain visible.",
                  dictionary: {
                    es: {
                      singular: "Los videos que carecen de los metadatos requeridos no pueden compartirse, pero los videos ya compartidos siguen siendo visibles."
                    },
                    "de-DE": {
                      singular: "Videos, denen erforderliche Metadaten fehlen, können nicht geteilt werden. Bereits geteilte Videos bleiben jedoch sichtbar."
                    },
                    "fr-FR": {
                      singular: "Les vidéos dépourvues des métadonnées obligatoires ne peuvent pas être partagées, mais les vidéos déjà partagées restent visibles."
                    },
                    "ja-JP": {
                      singular: "必須メタデータが不足している動画は共有できませんが、既に共有されている動画は表示されたままになります。"
                    },
                    "ko-KR": {
                      singular: "필수 메타데이터가 없는 동영상은 공유할 수 없지만, 이미 공유된 동영상은 계속 표시됩니다."
                    },
                    "pt-BR": {
                      singular: "Vídeos sem metadados obrigatórios não podem ser compartilhados, mas vídeos já compartilhados permanecem visíveis."
                    },
                    "zh-CN": {
                      singular: "无法共享缺少必需元数据的视频，但已共享的视频仍然可见。"
                    }
                  }
                })
              })]
            })
          }), (0, _v1.jsx)(_v14.Flex, {
            justifyContent: "flex-start",
            px: "md",
            py: "sm",
            children: (0, _v1.jsxs)(_v23.Menu, {
              isLazy: !0,
              children: [(0, _v1.jsx)(_v24.MenuButton, {
                as: _v11.Button,
                variant: "tertiary",
                size: "md",
                rightIcon: (0, _v1.jsx)(_v72.SortSmall, {}),
                children: {
                  title_asc: (0, _v87.translate)({
                    singular: "Title, A-Z",
                    dictionary: {
                      es: {
                        singular: "Título, A-Z"
                      },
                      "de-DE": {
                        singular: "Titel, A-Z"
                      },
                      "fr-FR": {
                        singular: "Titre, A-Z"
                      },
                      "ja-JP": {
                        singular: "タイトル（A→Z）"
                      },
                      "ko-KR": {
                        singular: "제목, A-Z"
                      },
                      "pt-BR": {
                        singular: "Título, A-Z"
                      },
                      "zh-CN": {
                        singular: "标题，A-Z"
                      }
                    }
                  }),
                  title_desc: (0, _v87.translate)({
                    singular: "Title, Z-A",
                    dictionary: {
                      es: {
                        singular: "Título, Z-A"
                      },
                      "de-DE": {
                        singular: "Titel, Z-A"
                      },
                      "fr-FR": {
                        singular: "Titre, Z-A"
                      },
                      "ja-JP": {
                        singular: "タイトル（Z→A）"
                      },
                      "ko-KR": {
                        singular: "제목, Z-A"
                      },
                      "pt-BR": {
                        singular: "Título, Z-A"
                      },
                      "zh-CN": {
                        singular: "标题，Z-A"
                      }
                    }
                  }),
                  modified_desc: (0, _v87.translate)({
                    singular: "Modified Date, Newest",
                    dictionary: {
                      es: {
                        singular: "Fecha de modificación, más reciente"
                      },
                      "de-DE": {
                        singular: "Änderungsdatum, neueste"
                      },
                      "fr-FR": {
                        singular: "Date de modification, la plus récente"
                      },
                      "ja-JP": {
                        singular: "更新日（新しい順）"
                      },
                      "ko-KR": {
                        singular: "수정 날짜, 최신순"
                      },
                      "pt-BR": {
                        singular: "Data de modificação, mais recente"
                      },
                      "zh-CN": {
                        singular: "修改日期，最新"
                      }
                    }
                  }),
                  modified_asc: (0, _v87.translate)({
                    singular: "Modified Date, Oldest",
                    dictionary: {
                      es: {
                        singular: "Fecha de modificación, más antigua"
                      },
                      "de-DE": {
                        singular: "Änderungsdatum, älteste"
                      },
                      "fr-FR": {
                        singular: "Date de modification, la plus ancienne"
                      },
                      "ja-JP": {
                        singular: "更新日（古い順）"
                      },
                      "ko-KR": {
                        singular: "수정 날짜, 오래된순"
                      },
                      "pt-BR": {
                        singular: "Data de modificação, mais antiga"
                      },
                      "zh-CN": {
                        singular: "修改日期，最旧"
                      }
                    }
                  })
                }[_v119]
              }), (0, _v1.jsx)(_v28.MenuList, {
                children: (0, _v1.jsx)(_v27.MenuGroup, {
                  as: _v52.Text,
                  variant: "heading-xs",
                  title: (0, _v87.translate)({
                    singular: "Sort",
                    dictionary: {
                      es: {
                        singular: "Organizar por"
                      },
                      "de-DE": {
                        singular: "Sortieren"
                      },
                      "fr-FR": {
                        singular: "Trier"
                      },
                      "ja-JP": {
                        singular: "並べ替え："
                      },
                      "ko-KR": {
                        singular: "정렬"
                      },
                      "pt-BR": {
                        singular: "Classificar por:"
                      },
                      "zh-CN": {
                        singular: "排序"
                      }
                    }
                  }),
                  children: [["title_asc", (0, _v87.translate)({
                    singular: "Title, A-Z",
                    dictionary: {
                      es: {
                        singular: "Título, A-Z"
                      },
                      "de-DE": {
                        singular: "Titel, A-Z"
                      },
                      "fr-FR": {
                        singular: "Titre, A-Z"
                      },
                      "ja-JP": {
                        singular: "タイトル（A→Z）"
                      },
                      "ko-KR": {
                        singular: "제목, A-Z"
                      },
                      "pt-BR": {
                        singular: "Título, A-Z"
                      },
                      "zh-CN": {
                        singular: "标题，A-Z"
                      }
                    }
                  })], ["title_desc", (0, _v87.translate)({
                    singular: "Title, Z-A",
                    dictionary: {
                      es: {
                        singular: "Título, Z-A"
                      },
                      "de-DE": {
                        singular: "Titel, Z-A"
                      },
                      "fr-FR": {
                        singular: "Titre, Z-A"
                      },
                      "ja-JP": {
                        singular: "タイトル（Z→A）"
                      },
                      "ko-KR": {
                        singular: "제목, Z-A"
                      },
                      "pt-BR": {
                        singular: "Título, Z-A"
                      },
                      "zh-CN": {
                        singular: "标题，Z-A"
                      }
                    }
                  })], ["modified_desc", (0, _v87.translate)({
                    singular: "Modified Date, Newest",
                    dictionary: {
                      es: {
                        singular: "Fecha de modificación, más reciente"
                      },
                      "de-DE": {
                        singular: "Änderungsdatum, neueste"
                      },
                      "fr-FR": {
                        singular: "Date de modification, la plus récente"
                      },
                      "ja-JP": {
                        singular: "更新日（新しい順）"
                      },
                      "ko-KR": {
                        singular: "수정 날짜, 최신순"
                      },
                      "pt-BR": {
                        singular: "Data de modificação, mais recente"
                      },
                      "zh-CN": {
                        singular: "修改日期，最新"
                      }
                    }
                  })], ["modified_asc", (0, _v87.translate)({
                    singular: "Modified Date, Oldest",
                    dictionary: {
                      es: {
                        singular: "Fecha de modificación, más antigua"
                      },
                      "de-DE": {
                        singular: "Änderungsdatum, älteste"
                      },
                      "fr-FR": {
                        singular: "Date de modification, la plus ancienne"
                      },
                      "ja-JP": {
                        singular: "更新日（古い順）"
                      },
                      "ko-KR": {
                        singular: "수정 날짜, 오래된순"
                      },
                      "pt-BR": {
                        singular: "Data de modificação, mais antiga"
                      },
                      "zh-CN": {
                        singular: "修改日期，最旧"
                      }
                    }
                  })]].map(([_v0, _v1]) => (0, _v1.jsx)(_v26.MenuItemOption, {
                    isChecked: _v119 === _v0,
                    onClick: () => {
                      _v120(_v0), _v118(1);
                    },
                    children: _v1
                  }, _v0))
                })
              })]
            })
          }), (0, _v1.jsxs)(_v46.Table, {
            w: "auto",
            mx: "md",
            sx: {
              tableLayout: "fixed",
              "th, td": {
                px: "sm",
                borderBottomColor: "transparent"
              },
              "tbody tr": {
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: "sm",
                  right: "sm",
                  height: "1px",
                  bg: "stroke"
                }
              }
            },
            children: [(0, _v1.jsx)(_v54.Thead, {
              children: (0, _v1.jsxs)(_v55.Tr, {
                children: [(0, _v1.jsx)(_v53.Th, {
                  w: "60%",
                  color: "text-secondary",
                  py: "6px",
                  px: "sm",
                  fontSize: "sm",
                  fontWeight: "medium",
                  textTransform: "none",
                  letterSpacing: "normal",
                  lineHeight: "1.4",
                  bg: "fill-component",
                  borderLeftRadius: "md",
                  children: (0, _v87.translate)({
                    singular: "Name",
                    dictionary: {
                      es: {
                        singular: "Nombre"
                      },
                      "fr-FR": {
                        singular: "Nom"
                      },
                      "ja-JP": {
                        singular: "名前"
                      },
                      "ko-KR": {
                        singular: "이름"
                      },
                      "pt-BR": {
                        singular: "Nome"
                      },
                      "zh-CN": {
                        singular: "姓名"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v53.Th, {
                  w: "40%",
                  color: "text-secondary",
                  py: "6px",
                  px: "sm",
                  fontSize: "sm",
                  fontWeight: "medium",
                  textTransform: "none",
                  letterSpacing: "normal",
                  lineHeight: "1.4",
                  bg: "fill-component",
                  borderRightRadius: "md",
                  children: (0, _v87.translate)({
                    singular: "Modified Date",
                    dictionary: {
                      es: {
                        singular: "Fecha de modificación"
                      },
                      "de-DE": {
                        singular: "Änderungsdatum"
                      },
                      "fr-FR": {
                        singular: "Date de modification"
                      },
                      "ja-JP": {
                        singular: "更新日"
                      },
                      "ko-KR": {
                        singular: "수정 날짜"
                      },
                      "pt-BR": {
                        singular: "Data de modificação"
                      },
                      "zh-CN": {
                        singular: "修改日期"
                      }
                    }
                  })
                })]
              })
            }), _v122 && (0, _v1.jsx)(_v50.Tbody, {
              children: (0, _v1.jsx)(_v55.Tr, {
                children: (0, _v1.jsx)(_v51.Td, {
                  colSpan: 2,
                  border: "none",
                  children: (0, _v1.jsx)(_v14.Flex, {
                    justifyContent: "center",
                    py: "xl",
                    children: (0, _v1.jsx)(_v44.Spinner, {})
                  })
                })
              })
            }), (0, _v1.jsx)(_v50.Tbody, {
              display: _v122 ? "none" : void 0,
              children: _v121.data.map(_v0 => (0, _v1.jsxs)(_v55.Tr, {
                cursor: "pointer",
                _hover: {
                  bg: "fill-component-hover"
                },
                onClick: () => window.open(_v0.link, "_blank"),
                children: [(0, _v1.jsx)(_v51.Td, {
                  w: "60%",
                  children: (0, _v1.jsxs)(_v17.HStack, {
                    spacing: "sm",
                    alignItems: "center",
                    children: [(0, _v1.jsx)(_v8.Box, {
                      flexShrink: 0,
                      w: (0, _v42.rem)(128),
                      h: (0, _v42.rem)(72),
                      borderRadius: (0, _v42.rem)(12),
                      border: "1px solid",
                      borderColor: "stroke",
                      overflow: "hidden",
                      bg: "fill-component",
                      children: _v0.thumbnailUrl ? (0, _v1.jsx)(_v19.Image, {
                        src: _v0.thumbnailUrl,
                        alt: _v0.name,
                        w: "100%",
                        h: "100%",
                        objectFit: "cover",
                        display: "block"
                      }) : (0, _v1.jsx)(_v14.Flex, {
                        w: "100%",
                        h: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        children: (0, _v1.jsx)(_v52.Text, {
                          color: "text-tertiary",
                          fontSize: "xs",
                          children: (0, _v87.translate)({
                            singular: "No thumbnail",
                            dictionary: {
                              es: {
                                singular: "Sin miniatura"
                              },
                              "de-DE": {
                                singular: "Kein Vorschaubild"
                              },
                              "fr-FR": {
                                singular: "Pas de miniature"
                              },
                              "ja-JP": {
                                singular: "サムネイルなし"
                              },
                              "ko-KR": {
                                singular: "썸네일 없음"
                              },
                              "pt-BR": {
                                singular: "Sem miniatura"
                              },
                              "zh-CN": {
                                singular: "无缩略图"
                              }
                            }
                          })
                        })
                      })
                    }), (0, _v1.jsx)(_v52.Text, {
                      variant: "heading-xs",
                      color: "text-primary",
                      noOfLines: 2,
                      children: _v0.name
                    })]
                  })
                }), (0, _v1.jsx)(_v51.Td, {
                  w: "40%",
                  children: (0, _v1.jsx)(_v52.Text, {
                    variant: "body-md",
                    color: "text-secondary",
                    noOfLines: 1,
                    children: _v0.modifiedTime ? new Date(_v0.modifiedTime).toLocaleString(void 0, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit"
                    }) : "—"
                  })
                })]
              }, _v0.clipId))
            })]
          }), _v126 > 1 && (0, _v1.jsx)(_v14.Flex, {
            justifyContent: "center",
            py: "md",
            children: (0, _v1.jsx)(_v37.Pagination, {
              count: _v121.total,
              pageSize: 10,
              page: _v117,
              onPageChange: ({
                page: _v0
              }) => _v118(_v0),
              size: "xs"
            })
          })]
        }) : _v121 && 0 === _v121.total ? (0, _v1.jsx)(_v14.Flex, {
          justifyContent: "center",
          p: "xl",
          children: (0, _v1.jsx)(_v58.VStack, {
            spacing: "xs",
            children: (0, _v1.jsx)(_v52.Text, {
              color: "text-secondary",
              variant: "body-md",
              children: (0, _v87.translate)({
                singular: "All videos have their required metadata filled in.",
                dictionary: {
                  es: {
                    singular: "Todos los videos tienen sus metadatos requeridos completos."
                  },
                  "de-DE": {
                    singular: "Bei allen Videos sind die erforderlichen Metadaten ausgefüllt."
                  },
                  "fr-FR": {
                    singular: "Toutes les vidéos ont leurs métadonnées requises renseignées."
                  },
                  "ja-JP": {
                    singular: "すべての動画に必須メタデータが入力されています。"
                  },
                  "ko-KR": {
                    singular: "모든 동영상에 필수 메타데이터가 입력되어 있습니다."
                  },
                  "pt-BR": {
                    singular: "Todos os vídeos têm seus metadados obrigatórios preenchidos."
                  },
                  "zh-CN": {
                    singular: "所有视频的必需元数据均已填写。"
                  }
                }
              })
            })
          })
        }) : null
      }), (0, _v1.jsxs)(_v29.Modal, {
        isOpen: _v20,
        onClose: _v96,
        children: [(0, _v1.jsx)(_v35.ModalOverlay, {}), (0, _v1.jsxs)(_v32.ModalContent, {
          maxW: (0, _v42.rem)(480),
          children: [(0, _v1.jsxs)(_v34.ModalHeader, {
            pr: "7",
            pb: "sm",
            children: [2 === _v38 && (0, _v1.jsx)(_v18.IconButton, {
              "aria-label": (0, _v87.translate)({
                singular: "Back",
                dictionary: {
                  es: {
                    singular: "Atrás"
                  },
                  "de-DE": {
                    singular: "Zurück"
                  },
                  "fr-FR": {
                    singular: "Retour"
                  },
                  "ja-JP": {
                    singular: "戻る"
                  },
                  "ko-KR": {
                    singular: "뒤로"
                  },
                  "pt-BR": {
                    singular: "Voltar"
                  },
                  "zh-CN": {
                    singular: "返回"
                  }
                }
              }),
              icon: (0, _v1.jsx)(_v59.ArrowLeft, {}),
              variant: "tertiary",
              size: "sm",
              onClick: () => _v39(1),
              mr: "sm"
            }), (0, _v87.translate)({
              singular: "New field",
              dictionary: {
                es: {
                  singular: "Nuevo campo"
                },
                "de-DE": {
                  singular: "Neues Feld"
                },
                "fr-FR": {
                  singular: "Nouveau champ"
                },
                "ja-JP": {
                  singular: "新しいフィールド"
                },
                "ko-KR": {
                  singular: "새 필드"
                },
                "pt-BR": {
                  singular: "Novo campo"
                },
                "zh-CN": {
                  singular: "新字段"
                }
              }
            })]
          }), (0, _v1.jsx)(_v31.ModalCloseButton, {}), (0, _v1.jsx)(_v30.ModalBody, {
            p: "7",
            children: 1 === _v38 ? (0, _v1.jsxs)(_v58.VStack, {
              spacing: "md",
              align: "stretch",
              children: [(0, _v1.jsxs)(_v15.FormControl, {
                isRequired: !0,
                isInvalid: _v127,
                sx: {
                  "label .chakra-form__required-indicator": {
                    ml: 0
                  }
                },
                children: [(0, _v1.jsx)(_v16.FormLabel, {
                  fontWeight: "bold",
                  children: (0, _v87.translate)({
                    singular: "Field Name",
                    dictionary: {
                      es: {
                        singular: "Nombre del campo"
                      },
                      "de-DE": {
                        singular: "Feldname"
                      },
                      "fr-FR": {
                        singular: "Nom du champ"
                      },
                      "ja-JP": {
                        singular: "フィールド名"
                      },
                      "ko-KR": {
                        singular: "필드 이름"
                      },
                      "pt-BR": {
                        singular: "Nome do campo"
                      },
                      "zh-CN": {
                        singular: "字段名称"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v20.Input, {
                  placeholder: (0, _v87.translate)({
                    singular: "e.g., Campaign ID, Project Code",
                    dictionary: {
                      es: {
                        singular: "p. ej., ID de campaña, código de proyecto"
                      },
                      "de-DE": {
                        singular: "z. B., Kampagnen-ID, Projektcode"
                      },
                      "fr-FR": {
                        singular: "p. ex., Campaign ID, Project Code"
                      },
                      "ja-JP": {
                        singular: "例：Campaign ID、Project Code"
                      },
                      "ko-KR": {
                        singular: "예: 캠페인 ID, 프로젝트 코드"
                      },
                      "pt-BR": {
                        singular: "ex.: Campaign ID, Project Code"
                      },
                      "zh-CN": {
                        singular: "例如：Campaign ID、Project Code"
                      }
                    }
                  }),
                  value: _v24,
                  onChange: _v0 => _v25(_v0.target.value),
                  _placeholder: {
                    color: "text-tertiary"
                  },
                  _focus: {
                    bg: "fill-component"
                  }
                }), _v127 && (0, _v1.jsx)(_v52.Text, {
                  variant: "body-xs",
                  color: "status-destructive-primary",
                  mt: "xs",
                  children: (0, _v87.translate)({
                    singular: "A field with this name already exists.",
                    dictionary: {
                      es: {
                        singular: "Ya existe un campo con este nombre."
                      },
                      "de-DE": {
                        singular: "Ein Feld mit diesem Namen existiert bereits."
                      },
                      "fr-FR": {
                        singular: "Un champ portant ce nom existe déjà."
                      },
                      "ja-JP": {
                        singular: "同じ名前のフィールドが既に存在します。"
                      },
                      "ko-KR": {
                        singular: "같은 이름의 필드가 이미 존재합니다."
                      },
                      "pt-BR": {
                        singular: "Um campo com este nome já existe."
                      },
                      "zh-CN": {
                        singular: "具有该名称的字段已存在。"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsxs)(_v15.FormControl, {
                children: [(0, _v1.jsx)(_v16.FormLabel, {
                  variant: "heading-xs",
                  children: (0, _v87.translate)({
                    singular: "Description",
                    dictionary: {
                      es: {
                        singular: "Descripción"
                      },
                      "de-DE": {
                        singular: "Beschreibung"
                      },
                      "ja-JP": {
                        singular: "説明"
                      },
                      "ko-KR": {
                        singular: "설명"
                      },
                      "pt-BR": {
                        singular: "Descrição"
                      },
                      "zh-CN": {
                        singular: "描述"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v48.Textarea, {
                  placeholder: (0, _v87.translate)({
                    singular: "Add description",
                    dictionary: {
                      es: {
                        singular: "Agregar descripción"
                      },
                      "de-DE": {
                        singular: "Beschreibung hinzufügen"
                      },
                      "fr-FR": {
                        singular: "Ajouter une description"
                      },
                      "ja-JP": {
                        singular: "説明を追加"
                      },
                      "ko-KR": {
                        singular: "설명 추가"
                      },
                      "pt-BR": {
                        singular: "Adicionar descrição"
                      },
                      "zh-CN": {
                        singular: "添加描述"
                      }
                    }
                  }),
                  value: _v26,
                  onChange: _v0 => _v27(_v0.target.value),
                  borderRadius: (0, _v42.rem)(12),
                  _placeholder: {
                    color: "text-secondary"
                  },
                  _focus: {
                    bg: "fill-component"
                  }
                }), (0, _v1.jsx)(_v52.Text, {
                  variant: "body-sm",
                  color: "text-tertiary",
                  mt: "xs",
                  children: (0, _v87.translate)({
                    singular: "Description appears next to the field label on the video page.",
                    dictionary: {
                      es: {
                        singular: "La descripción aparece junto a la etiqueta del campo en la página del video."
                      },
                      "de-DE": {
                        singular: "Die Beschreibung erscheint neben dem Feldlabel auf der Videoseite."
                      },
                      "fr-FR": {
                        singular: "La description apparaît à côté du libellé du champ sur la page de la vidéo."
                      },
                      "ja-JP": {
                        singular: "説明は動画ページのフィールドラベルの横に表示されます。"
                      },
                      "ko-KR": {
                        singular: "설명은 동영상 페이지의 필드 라벨 옆에 표시됩니다."
                      },
                      "pt-BR": {
                        singular: "A descrição aparece ao lado do rótulo do campo na página do vídeo."
                      },
                      "zh-CN": {
                        singular: "描述显示在视频页面的字段标签旁。"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsxs)(_v15.FormControl, {
                isRequired: !0,
                sx: {
                  "label .chakra-form__required-indicator": {
                    ml: 0
                  }
                },
                children: [(0, _v1.jsx)(_v16.FormLabel, {
                  fontWeight: "bold",
                  children: (0, _v87.translate)({
                    singular: "Field Type",
                    dictionary: {
                      es: {
                        singular: "Tipo de campo"
                      },
                      "de-DE": {
                        singular: "Feldtyp"
                      },
                      "fr-FR": {
                        singular: "Type de champ"
                      },
                      "ja-JP": {
                        singular: "フィールドタイプ"
                      },
                      "ko-KR": {
                        singular: "필드 유형"
                      },
                      "pt-BR": {
                        singular: "Tipo de campo"
                      },
                      "zh-CN": {
                        singular: "字段类型"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v43.Select, {
                  variant: "withCheck",
                  items: _v92,
                  placeholder: (0, _v87.translate)({
                    singular: "Select a type",
                    dictionary: {
                      es: {
                        singular: "Seleccione un tipo"
                      },
                      "de-DE": {
                        singular: "Typ auswählen"
                      },
                      "fr-FR": {
                        singular: "Sélectionner un type"
                      },
                      "ja-JP": {
                        singular: "タイプを選択"
                      },
                      "ko-KR": {
                        singular: "유형 선택"
                      },
                      "pt-BR": {
                        singular: "Selecione um tipo"
                      },
                      "zh-CN": {
                        singular: "选择类型"
                      }
                    }
                  }),
                  value: [_v28],
                  onValueChange: ({
                    value: _v0
                  }) => {
                    _v29(_v0[0] ?? "str"), _v31(""), _v35([""]), _v37(new Set());
                  },
                  positioning: {
                    placement: "bottom",
                    strategy: "fixed"
                  }
                })]
              }), "select" === _v28 || "multi-select" === _v28 ? (0, _v1.jsxs)(_v15.FormControl, {
                children: [(0, _v1.jsx)(_v16.FormLabel, {
                  fontWeight: "bold",
                  children: (0, _v87.translate)({
                    singular: "Options",
                    dictionary: {
                      es: {
                        singular: "Opciones"
                      },
                      "de-DE": {
                        singular: "Optionen"
                      },
                      "ja-JP": {
                        singular: "オプション"
                      },
                      "ko-KR": {
                        singular: "옵션"
                      },
                      "pt-BR": {
                        singular: "Opções"
                      },
                      "zh-CN": {
                        singular: "选项"
                      }
                    }
                  })
                }), (0, _v1.jsxs)(_v58.VStack, {
                  spacing: "sm",
                  align: "stretch",
                  children: [(0, _v1.jsx)(_v58.VStack, {
                    ref: _v45,
                    spacing: "sm",
                    align: "stretch",
                    "data-options-list": !0,
                    maxH: "min(50vh, 25rem)",
                    overflowY: "auto",
                    pr: "xs",
                    children: _v34.map((_v0, _v1) => (0, _v1.jsxs)(_v17.HStack, {
                      spacing: "sm",
                      children: [(0, _v1.jsx)(_v49.Tooltip, {
                        label: _v36.has(_v1) ? (0, _v87.translate)({
                          singular: "Remove default",
                          dictionary: {
                            es: {
                              singular: "Eliminar el valor predeterminado"
                            },
                            "de-DE": {
                              singular: "Standard entfernen"
                            },
                            "fr-FR": {
                              singular: "Supprimer les valeurs par défaut"
                            },
                            "ja-JP": {
                              singular: "デフォルトを削除"
                            },
                            "ko-KR": {
                              singular: "기본 설정 제거"
                            },
                            "pt-BR": {
                              singular: "Remova o padrão"
                            },
                            "zh-CN": {
                              singular: "移除默认设置"
                            }
                          }
                        }) : (0, _v87.translate)({
                          singular: "Set default",
                          dictionary: {
                            es: {
                              singular: "Establecer valor predeterminado"
                            },
                            "de-DE": {
                              singular: "Standard festlegen"
                            },
                            "fr-FR": {
                              singular: "Définir les paramètres par défaut"
                            },
                            "ja-JP": {
                              singular: "デフォルトを設定"
                            },
                            "ko-KR": {
                              singular: "기본값으로 설정"
                            },
                            "pt-BR": {
                              singular: "Definir padrão"
                            },
                            "zh-CN": {
                              singular: "设置默认值"
                            }
                          }
                        }),
                        placement: "top",
                        shouldWrapChildren: !0,
                        children: (0, _v1.jsx)(_v18.IconButton, {
                          "aria-label": _v36.has(_v1) ? (0, _v87.translate)({
                            singular: "Remove default",
                            dictionary: {
                              es: {
                                singular: "Eliminar el valor predeterminado"
                              },
                              "de-DE": {
                                singular: "Standard entfernen"
                              },
                              "fr-FR": {
                                singular: "Supprimer les valeurs par défaut"
                              },
                              "ja-JP": {
                                singular: "デフォルトを削除"
                              },
                              "ko-KR": {
                                singular: "기본 설정 제거"
                              },
                              "pt-BR": {
                                singular: "Remova o padrão"
                              },
                              "zh-CN": {
                                singular: "移除默认设置"
                              }
                            }
                          }) : (0, _v87.translate)({
                            singular: "Set default",
                            dictionary: {
                              es: {
                                singular: "Establecer valor predeterminado"
                              },
                              "de-DE": {
                                singular: "Standard festlegen"
                              },
                              "fr-FR": {
                                singular: "Définir les paramètres par défaut"
                              },
                              "ja-JP": {
                                singular: "デフォルトを設定"
                              },
                              "ko-KR": {
                                singular: "기본값으로 설정"
                              },
                              "pt-BR": {
                                singular: "Definir padrão"
                              },
                              "zh-CN": {
                                singular: "设置默认值"
                              }
                            }
                          }),
                          variant: "secondary",
                          size: "md",
                          isActive: _v36.has(_v1),
                          icon: _v36.has(_v1) ? (0, _v1.jsx)(_v61.CircleCheck, {
                            boxSize: "20px"
                          }) : (0, _v1.jsx)(_v62.CircleShape, {
                            boxSize: "20px"
                          }),
                          onClick: () => {
                            let _v0 = new Set(_v36);
                            _v0.has(_v1) ? _v0.delete(_v1) : ("select" === _v28 && _v0.clear(), _v0.add(_v1)), _v37(_v0);
                          }
                        })
                      }), (0, _v1.jsx)(_v20.Input, {
                        placeholder: (0, _v87.translate)({
                          singular: "Option {NUMBER}",
                          replacements: {
                            NUMBER: _v1 + 1
                          },
                          dictionary: {
                            es: {
                              singular: "Opción {NUMBER}"
                            },
                            "ja-JP": {
                              singular: "オプション {NUMBER}"
                            },
                            "ko-KR": {
                              singular: "옵션 {NUMBER}"
                            },
                            "pt-BR": {
                              singular: "Opção {NUMBER}"
                            },
                            "zh-CN": {
                              singular: "选项 {NUMBER}"
                            }
                          }
                        }),
                        value: _v0,
                        onChange: _v0 => {
                          let _v1 = [..._v34];
                          _v1[_v1] = _v0.target.value, _v35(_v1);
                        },
                        onKeyDown: _v0 => {
                          if ("Enter" === _v0.key && _v0.trim()) {
                            _v0.preventDefault();
                            let _v0 = _v0.currentTarget.closest("[data-options-list]");
                            _v35([..._v34, ""]), requestAnimationFrame(() => {
                              let _v0 = _v0?.querySelectorAll("input");
                              _v0?.[_v0.length - 1]?.focus();
                            });
                          }
                        },
                        _placeholder: {
                          color: "text-tertiary"
                        },
                        _focus: {
                          bg: "fill-component"
                        }
                      }), (0, _v1.jsx)(_v18.IconButton, {
                        "aria-label": (0, _v87.translate)({
                          singular: "Delete option",
                          dictionary: {
                            es: {
                              singular: "Eliminar opción"
                            },
                            "de-DE": {
                              singular: "Option löschen"
                            },
                            "fr-FR": {
                              singular: "Supprimer l’option"
                            },
                            "ja-JP": {
                              singular: "オプションを削除"
                            },
                            "ko-KR": {
                              singular: "옵션 삭제"
                            },
                            "pt-BR": {
                              singular: "Excluir opção"
                            },
                            "zh-CN": {
                              singular: "删除选项"
                            }
                          }
                        }),
                        variant: "tertiary",
                        size: "md",
                        icon: (0, _v1.jsx)(_v71.TrashBin, {}),
                        isDisabled: _v34.length <= 1,
                        onClick: () => {
                          if (_v34.length <= 1) return;
                          _v35(_v34.filter((_v0, _v1) => _v1 !== _v1));
                          let _v0 = new Set();
                          for (let _v0 of _v36) _v0 < _v1 ? _v0.add(_v0) : _v0 > _v1 && _v0.add(_v0 - 1);
                          _v37(_v0);
                        }
                      })]
                    }, _v1))
                  }), (0, _v1.jsx)(_v11.Button, {
                    variant: "ghost",
                    size: "sm",
                    alignSelf: "center",
                    bg: "surface",
                    _hover: {
                      bg: "fill-component-hover"
                    },
                    onClick: () => {
                      _v35([..._v34, ""]), requestAnimationFrame(() => {
                        let _v0 = _v45.current?.querySelectorAll("input");
                        _v0?.[_v0.length - 1]?.focus();
                      });
                    },
                    children: (0, _v1.jsxs)(_v17.HStack, {
                      spacing: "xs",
                      children: [(0, _v1.jsx)(_v66.PlusCircle, {}), (0, _v1.jsx)("span", {
                        children: (0, _v87.translate)({
                          singular: "New option",
                          dictionary: {
                            es: {
                              singular: "Nueva opción"
                            },
                            "de-DE": {
                              singular: "Neue Option"
                            },
                            "fr-FR": {
                              singular: "Nouvelle option"
                            },
                            "ja-JP": {
                              singular: "新しいオプション"
                            },
                            "ko-KR": {
                              singular: "새 옵션"
                            },
                            "pt-BR": {
                              singular: "Nova opção"
                            },
                            "zh-CN": {
                              singular: "新选项"
                            }
                          }
                        })
                      })]
                    })
                  })]
                })]
              }) : "date" === _v28 ? (0, _v1.jsxs)(_v15.FormControl, {
                children: [(0, _v1.jsx)(_v16.FormLabel, {
                  fontWeight: "bold",
                  children: (0, _v87.translate)({
                    singular: "Default Value",
                    dictionary: {
                      es: {
                        singular: "Valor predeterminado"
                      },
                      "de-DE": {
                        singular: "Standardwert"
                      },
                      "fr-FR": {
                        singular: "Valeur par défaut"
                      },
                      "ja-JP": {
                        singular: "デフォルト値"
                      },
                      "ko-KR": {
                        singular: "기본값"
                      },
                      "pt-BR": {
                        singular: "Valor padrão"
                      },
                      "zh-CN": {
                        singular: "默认值"
                      }
                    }
                  })
                }), (0, _v1.jsxs)(_v9.DatePicker, {
                  width: "100%",
                  value: _v30 && (_v1 = _v30.match(/^(\d{4})-(\d{2})-(\d{2})/)) ? [new _v7.BokehDate.CalendarDate(Number(_v1[1]), Number(_v1[2]), Number(_v1[3]))] : [],
                  onValueChange: _v0 => {
                    let _v1 = _v0.value?.[0];
                    _v31(_v1 ? _v93(_v1) : "");
                  },
                  children: [(0, _v1.jsx)(_v9.DatePickerControl, {
                    children: (0, _v1.jsxs)(_v21.InputGroup, {
                      children: [(0, _v1.jsx)(_v9.DatePickerInputBase, {
                        asChild: !0,
                        children: (0, _v1.jsx)(_v20.Input, {
                          _focus: {
                            bg: "fill-component"
                          },
                          pr: "40px"
                        })
                      }), (0, _v1.jsx)(_v22.InputRightElement, {
                        children: (0, _v1.jsx)(_v9.DatePickerTrigger, {
                          asChild: !0,
                          children: (0, _v1.jsx)(_v18.IconButton, {
                            "aria-label": (0, _v87.translate)({
                              singular: "Pick date",
                              dictionary: {
                                es: {
                                  singular: "Seleccionar fecha"
                                },
                                "de-DE": {
                                  singular: "Datum wählen"
                                },
                                "fr-FR": {
                                  singular: "Choisir la date"
                                },
                                "ja-JP": {
                                  singular: "日付を選択"
                                },
                                "ko-KR": {
                                  singular: "날짜 선택"
                                },
                                "pt-BR": {
                                  singular: "Selecionar data"
                                },
                                "zh-CN": {
                                  singular: "选择日期"
                                }
                              }
                            }),
                            variant: "unstyled",
                            size: "sm",
                            bg: "surface",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            icon: (0, _v1.jsx)(_v60.Calendar, {
                              color: "text-secondary",
                              boxSize: "18px"
                            })
                          })
                        })
                      })]
                    })
                  }), (0, _v1.jsx)(_v10.DatePickerPortal, {
                    children: (0, _v1.jsx)(_v9.DatePickerPositioner, {
                      style: {
                        zIndex: 0
                      },
                      children: (0, _v1.jsx)(_v9.DatePickerContent, {
                        children: (0, _v1.jsx)(_v9.Calendar, {})
                      })
                    })
                  })]
                })]
              }) : "bool" === _v28 ? (0, _v1.jsxs)(_v15.FormControl, {
                children: [(0, _v1.jsx)(_v16.FormLabel, {
                  fontWeight: "bold",
                  children: (0, _v87.translate)({
                    singular: "Default Value",
                    dictionary: {
                      es: {
                        singular: "Valor predeterminado"
                      },
                      "de-DE": {
                        singular: "Standardwert"
                      },
                      "fr-FR": {
                        singular: "Valeur par défaut"
                      },
                      "ja-JP": {
                        singular: "デフォルト値"
                      },
                      "ko-KR": {
                        singular: "기본값"
                      },
                      "pt-BR": {
                        singular: "Valor padrão"
                      },
                      "zh-CN": {
                        singular: "默认值"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v43.Select, {
                  items: [{
                    label: (0, _v87.translate)({
                      singular: "None",
                      dictionary: {
                        es: {
                          singular: "Ninguno"
                        },
                        "de-DE": {
                          singular: "Kein"
                        },
                        "fr-FR": {
                          singular: "Aucune"
                        },
                        "ja-JP": {
                          singular: "なし"
                        },
                        "ko-KR": {
                          singular: "없음"
                        },
                        "pt-BR": {
                          singular: "Nenhum"
                        },
                        "zh-CN": {
                          singular: "无"
                        }
                      }
                    }),
                    value: ""
                  }, {
                    label: (0, _v87.translate)({
                      singular: "True",
                      dictionary: {
                        es: {
                          singular: "Verdadero"
                        },
                        "de-DE": {
                          singular: "Wahr"
                        },
                        "fr-FR": {
                          singular: "Vrai"
                        },
                        "ja-JP": {
                          singular: "はい"
                        },
                        "ko-KR": {
                          singular: "참"
                        },
                        "pt-BR": {
                          singular: "Verdadeiro"
                        },
                        "zh-CN": {
                          singular: "是"
                        }
                      }
                    }),
                    value: "true"
                  }, {
                    label: (0, _v87.translate)({
                      singular: "False",
                      dictionary: {
                        es: {
                          singular: "Falso"
                        },
                        "de-DE": {
                          singular: "Falsch"
                        },
                        "fr-FR": {
                          singular: "Faux"
                        },
                        "ja-JP": {
                          singular: "いいえ"
                        },
                        "ko-KR": {
                          singular: "거짓"
                        },
                        "pt-BR": {
                          singular: "Falso"
                        },
                        "zh-CN": {
                          singular: "否"
                        }
                      }
                    }),
                    value: "false"
                  }],
                  placeholder: (0, _v87.translate)({
                    singular: "Select default value",
                    dictionary: {
                      es: {
                        singular: "Seleccione el valor predeterminado"
                      },
                      "de-DE": {
                        singular: "Standardwert auswählen"
                      },
                      "fr-FR": {
                        singular: "Sélectionner la valeur par défaut"
                      },
                      "ja-JP": {
                        singular: "デフォルト値を選択"
                      },
                      "ko-KR": {
                        singular: "기본값 선택"
                      },
                      "pt-BR": {
                        singular: "Selecione o valor padrão"
                      },
                      "zh-CN": {
                        singular: "选择默认值"
                      }
                    }
                  }),
                  value: [_v30],
                  onValueChange: ({
                    value: _v0
                  }) => _v31(_v0[0] ?? ""),
                  positioning: {
                    placement: "bottom",
                    strategy: "fixed"
                  }
                })]
              }) : "int" === _v28 ? (0, _v1.jsxs)(_v15.FormControl, {
                children: [(0, _v1.jsx)(_v16.FormLabel, {
                  fontWeight: "bold",
                  children: (0, _v87.translate)({
                    singular: "Default Value",
                    dictionary: {
                      es: {
                        singular: "Valor predeterminado"
                      },
                      "de-DE": {
                        singular: "Standardwert"
                      },
                      "fr-FR": {
                        singular: "Valeur par défaut"
                      },
                      "ja-JP": {
                        singular: "デフォルト値"
                      },
                      "ko-KR": {
                        singular: "기본값"
                      },
                      "pt-BR": {
                        singular: "Valor padrão"
                      },
                      "zh-CN": {
                        singular: "默认值"
                      }
                    }
                  })
                }), (0, _v1.jsxs)(_v36.NumberInput, {
                  value: _v30,
                  onChange: _v0 => _v31(_v0),
                  children: [(0, _v1.jsx)(_v36.NumberInputField, {
                    placeholder: (0, _v87.translate)({
                      singular: "Enter default value",
                      dictionary: {
                        es: {
                          singular: "Ingrese el valor predeterminado"
                        },
                        "de-DE": {
                          singular: "Standardwert eingeben"
                        },
                        "fr-FR": {
                          singular: "Saisir la valeur par défaut"
                        },
                        "ja-JP": {
                          singular: "デフォルト値を入力"
                        },
                        "ko-KR": {
                          singular: "기본값을 입력하세요"
                        },
                        "pt-BR": {
                          singular: "Digite um valor padrão"
                        },
                        "zh-CN": {
                          singular: "输入默认值"
                        }
                      }
                    }),
                    _placeholder: {
                      color: "text-tertiary"
                    },
                    _focus: {
                      bg: "fill-component"
                    }
                  }), (0, _v1.jsxs)(_v36.NumberInputStepper, {
                    children: [(0, _v1.jsx)(_v36.NumberIncrementStepper, {}), (0, _v1.jsx)(_v36.NumberDecrementStepper, {})]
                  })]
                })]
              }) : (0, _v1.jsxs)(_v15.FormControl, {
                children: [(0, _v1.jsx)(_v16.FormLabel, {
                  fontWeight: "bold",
                  children: (0, _v87.translate)({
                    singular: "Default Value",
                    dictionary: {
                      es: {
                        singular: "Valor predeterminado"
                      },
                      "de-DE": {
                        singular: "Standardwert"
                      },
                      "fr-FR": {
                        singular: "Valeur par défaut"
                      },
                      "ja-JP": {
                        singular: "デフォルト値"
                      },
                      "ko-KR": {
                        singular: "기본값"
                      },
                      "pt-BR": {
                        singular: "Valor padrão"
                      },
                      "zh-CN": {
                        singular: "默认值"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v20.Input, {
                  placeholder: (0, _v87.translate)({
                    singular: "Enter default value",
                    dictionary: {
                      es: {
                        singular: "Ingrese el valor predeterminado"
                      },
                      "de-DE": {
                        singular: "Standardwert eingeben"
                      },
                      "fr-FR": {
                        singular: "Saisir la valeur par défaut"
                      },
                      "ja-JP": {
                        singular: "デフォルト値を入力"
                      },
                      "ko-KR": {
                        singular: "기본값을 입력하세요"
                      },
                      "pt-BR": {
                        singular: "Digite um valor padrão"
                      },
                      "zh-CN": {
                        singular: "输入默认值"
                      }
                    }
                  }),
                  value: _v30,
                  onChange: _v0 => {
                    "str" === _v28 && _v0.target.value.length > 50 || _v31(_v0.target.value);
                  },
                  maxLength: "str" === _v28 ? 50 : void 0,
                  _placeholder: {
                    color: "text-tertiary"
                  },
                  _focus: {
                    bg: "fill-component"
                  }
                }), "str" === _v28 && (0, _v1.jsxs)(_v17.HStack, {
                  justifyContent: "space-between",
                  mt: "xs",
                  children: [(0, _v1.jsx)(_v52.Text, {
                    variant: "body-sm",
                    color: "text-tertiary",
                    children: (0, _v87.translate)({
                      singular: "50 characters limit.",
                      dictionary: {
                        es: {
                          singular: "Límite de 50 caracteres."
                        },
                        "de-DE": {
                          singular: "Max. 50 Zeichen."
                        },
                        "fr-FR": {
                          singular: "Limite de 50 caractères."
                        },
                        "ja-JP": {
                          singular: "最大50文字です。"
                        },
                        "ko-KR": {
                          singular: "최대 50자."
                        },
                        "pt-BR": {
                          singular: "Limite de 50 caracteres."
                        },
                        "zh-CN": {
                          singular: "最多 50 个字符。"
                        }
                      }
                    })
                  }), (0, _v1.jsxs)(_v52.Text, {
                    variant: "body-sm",
                    color: _v30.length >= 50 ? "status-destructive-primary" : "text-tertiary",
                    children: [_v30.length, "/50"]
                  })]
                })]
              }), (0, _v1.jsx)(_v15.FormControl, {
                children: (0, _v1.jsxs)(_v17.HStack, {
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "md",
                  children: [(0, _v1.jsxs)(_v58.VStack, {
                    align: "stretch",
                    spacing: "xs",
                    flex: "1",
                    children: [(0, _v1.jsxs)(_v17.HStack, {
                      spacing: "xs",
                      children: [(0, _v1.jsx)(_v16.FormLabel, {
                        fontWeight: "bold",
                        mb: "0",
                        children: (0, _v87.translate)({
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
                        })
                      }), (0, _v1.jsx)(_v49.Tooltip, {
                        label: (0, _v87.translate)({
                          singular: "Videos missing this metadata can’t be shared, but already shared videos remain visible.",
                          dictionary: {
                            es: {
                              singular: "Los videos que carecen de este metadato no pueden compartirse, pero los videos ya compartidos siguen siendo visibles."
                            },
                            "de-DE": {
                              singular: "Videos, denen diese Metadaten fehlen, können nicht geteilt werden. Bereits geteilte Videos bleiben jedoch sichtbar."
                            },
                            "fr-FR": {
                              singular: "Les vidéos ne disposant pas de ces métadonnées ne peuvent pas être partagées, mais les vidéos déjà partagées restent visibles."
                            },
                            "ja-JP": {
                              singular: "このメタデータが不足している動画は共有できませんが、既に共有されている動画は表示されたままになります。"
                            },
                            "ko-KR": {
                              singular: "이 메타데이터가 없는 동영상은 공유할 수 없지만, 이미 공유된 동영상은 계속 표시됩니다."
                            },
                            "pt-BR": {
                              singular: "Vídeos sem este metadado não podem ser compartilhados, mas vídeos já compartilhados permanecem visíveis."
                            },
                            "zh-CN": {
                              singular: "缺少此元数据的视频无法共享，但已共享的视频仍然可见。"
                            }
                          }
                        }),
                        placement: "top",
                        shouldWrapChildren: !0,
                        children: (0, _v1.jsx)(_v70.InfoCircle, {
                          cursor: "pointer",
                          boxSize: "2xs",
                          color: "text-tertiary"
                        })
                      })]
                    }), (0, _v1.jsx)(_v52.Text, {
                      variant: "body-md",
                      color: "text-secondary",
                      children: (0, _v87.translate)({
                        singular: "This field is mandatory for all videos.",
                        dictionary: {
                          es: {
                            singular: "Este campo es obligatorio para todos los videos."
                          },
                          "de-DE": {
                            singular: "Dieses Feld ist für alle Videos verpflichtend."
                          },
                          "fr-FR": {
                            singular: "Ce champ est obligatoire pour toutes les vidéos."
                          },
                          "ja-JP": {
                            singular: "このフィールドはすべての動画で必須です。"
                          },
                          "ko-KR": {
                            singular: "이 필드는 모든 동영상에 필수입니다."
                          },
                          "pt-BR": {
                            singular: "Este campo é obrigatório para todos os vídeos."
                          },
                          "zh-CN": {
                            singular: "此字段对所有视频都是强制性的。"
                          }
                        }
                      })
                    })]
                  }), (0, _v1.jsx)(_v45.Switch, {
                    isChecked: _v32,
                    onChange: _v0 => _v33(_v0.target.checked)
                  })]
                })
              })]
            }) : (0, _v1.jsxs)(_v58.VStack, {
              spacing: "md",
              align: "stretch",
              children: [(0, _v1.jsx)(_v52.Text, {
                variant: "body-md",
                children: (0, _v87.translate)({
                  singular: "Do you want to apply this field to existing videos?",
                  dictionary: {
                    es: {
                      singular: "¿Desea aplicar este campo a los videos existentes?"
                    },
                    "de-DE": {
                      singular: "Möchten Sie dieses Feld auf vorhandene Videos anwenden?"
                    },
                    "fr-FR": {
                      singular: "Voulez-vous appliquer ce champ aux vidéos existantes ?"
                    },
                    "ja-JP": {
                      singular: "このフィールドを既存の動画に適用しますか？"
                    },
                    "ko-KR": {
                      singular: "이 필드를 기존 동영상에 적용하시겠습니까?"
                    },
                    "pt-BR": {
                      singular: "Deseja aplicar este campo aos vídeos existentes?"
                    },
                    "zh-CN": {
                      singular: "您想将此字段应用到现有视频吗？"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v15.FormControl, {
                children: [(0, _v1.jsx)(_v16.FormLabel, {
                  variant: "heading-xs",
                  children: (0, _v87.translate)({
                    singular: "Backfill Value",
                    dictionary: {
                      es: {
                        singular: "Valor de relleno"
                      },
                      "de-DE": {
                        singular: "Rückbefüllungswert"
                      },
                      "fr-FR": {
                        singular: "Valeur de remplissage rétroactif"
                      },
                      "ja-JP": {
                        singular: "バックフィル値"
                      },
                      "ko-KR": {
                        singular: "백필 값"
                      },
                      "pt-BR": {
                        singular: "Valor de preenchimento"
                      },
                      "zh-CN": {
                        singular: "回填值"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v43.Select, {
                  items: [...(_v107 ? [{
                    label: (0, _v87.translate)({
                      singular: "Default Value",
                      dictionary: {
                        es: {
                          singular: "Valor predeterminado"
                        },
                        "de-DE": {
                          singular: "Standardwert"
                        },
                        "fr-FR": {
                          singular: "Valeur par défaut"
                        },
                        "ja-JP": {
                          singular: "デフォルト値"
                        },
                        "ko-KR": {
                          singular: "기본값"
                        },
                        "pt-BR": {
                          singular: "Valor padrão"
                        },
                        "zh-CN": {
                          singular: "默认值"
                        }
                      }
                    }),
                    value: "default"
                  }] : []), {
                    label: (0, _v87.translate)({
                      singular: "Custom Value",
                      dictionary: {
                        es: {
                          singular: "Valor personalizado"
                        },
                        "de-DE": {
                          singular: "Benutzerdefinierter Wert"
                        },
                        "fr-FR": {
                          singular: "Valeur personnalisée"
                        },
                        "ja-JP": {
                          singular: "カスタム値"
                        },
                        "ko-KR": {
                          singular: "사용자 지정 값"
                        },
                        "pt-BR": {
                          singular: "Valor personalizado"
                        },
                        "zh-CN": {
                          singular: "自定义值"
                        }
                      }
                    }),
                    value: "custom"
                  }, {
                    label: (0, _v87.translate)({
                      singular: "None",
                      dictionary: {
                        es: {
                          singular: "Ninguno"
                        },
                        "de-DE": {
                          singular: "Kein"
                        },
                        "fr-FR": {
                          singular: "Aucune"
                        },
                        "ja-JP": {
                          singular: "なし"
                        },
                        "ko-KR": {
                          singular: "없음"
                        },
                        "pt-BR": {
                          singular: "Nenhum"
                        },
                        "zh-CN": {
                          singular: "无"
                        }
                      }
                    }),
                    value: "none"
                  }],
                  value: [_v40],
                  onValueChange: ({
                    value: _v0
                  }) => {
                    _v41(_v0[0] ?? "default"), _v43("");
                  },
                  positioning: {
                    placement: "bottom",
                    strategy: "fixed"
                  }
                }), (0, _v1.jsx)(_v52.Text, {
                  variant: "body-sm",
                  color: "text-tertiary",
                  mt: "xs",
                  children: (0, _v87.translate)({
                    singular: "For required fields, you’ll need to fill them manually if no value is applied.",
                    dictionary: {
                      es: {
                        singular: "Para los campos obligatorios, deberá completarlos manualmente si no se aplica ningún valor."
                      },
                      "de-DE": {
                        singular: "Bei Pflichtfeldern müssen Sie diese manuell ausfüllen, falls kein Wert angewendet wurde."
                      },
                      "fr-FR": {
                        singular: "Pour les champs obligatoires, vous devrez les remplir manuellement si aucune valeur n’est appliquée."
                      },
                      "ja-JP": {
                        singular: "必須フィールドは、値が適用されていない場合は手動で入力する必要があります。"
                      },
                      "ko-KR": {
                        singular: "필수 필드는 값이 적용되지 않은 경우 직접 입력해야 합니다."
                      },
                      "pt-BR": {
                        singular: "Para campos obrigatórios, você precisará preenchê-los manualmente se nenhum valor for aplicado."
                      },
                      "zh-CN": {
                        singular: "对于必填字段，如果未应用值，您需要手动填写它们。"
                      }
                    }
                  })
                })]
              }), "custom" === _v40 ? "select" === _v28 ? (0, _v1.jsx)(_v43.Select, {
                items: _v34.filter(Boolean).map(_v0 => ({
                  label: _v0,
                  value: _v0
                })),
                placeholder: (0, _v87.translate)({
                  singular: "Select a value",
                  dictionary: {
                    es: {
                      singular: "Seleccione un valor"
                    },
                    "de-DE": {
                      singular: "Wert auswählen"
                    },
                    "fr-FR": {
                      singular: "Sélectionner une valeur"
                    },
                    "ja-JP": {
                      singular: "値を選択"
                    },
                    "ko-KR": {
                      singular: "값 선택"
                    },
                    "pt-BR": {
                      singular: "Selecione um valor"
                    },
                    "zh-CN": {
                      singular: "选择一个值"
                    }
                  }
                }),
                value: _v42 ? [_v42] : [],
                onValueChange: ({
                  value: _v0
                }) => _v43(_v0[0] ?? ""),
                positioning: {
                  placement: "bottom",
                  strategy: "fixed"
                }
              }) : "multi-select" === _v28 ? (0, _v1.jsxs)(_v14.Flex, {
                flexDirection: "column",
                gap: "sm",
                children: [(0, _v1.jsx)(_v43.Select, {
                  items: _v34.filter(_v0 => !!_v0 && !(_v42 ? _v42.split(",") : []).includes(_v0)).map(_v0 => ({
                    label: _v0,
                    value: _v0
                  })),
                  value: [],
                  placeholder: (0, _v87.translate)({
                    singular: "Select",
                    dictionary: {
                      es: {
                        singular: "Seleccionar"
                      },
                      "de-DE": {
                        singular: "Auswählen"
                      },
                      "fr-FR": {
                        singular: "Sélectionner"
                      },
                      "ja-JP": {
                        singular: "選択"
                      },
                      "ko-KR": {
                        singular: "선택"
                      },
                      "pt-BR": {
                        singular: "Selecionar"
                      },
                      "zh-CN": {
                        singular: "选择"
                      }
                    }
                  }),
                  onValueChange: ({
                    value: _v0
                  }) => {
                    let _v1 = _v0[0];
                    _v1 && _v43([...(_v42 ? _v42.split(",").filter(Boolean) : []), _v1].join(","));
                  },
                  positioning: {
                    placement: "bottom",
                    strategy: "fixed"
                  }
                }), _v42 && (0, _v1.jsx)(_v17.HStack, {
                  flexWrap: "wrap",
                  gap: "xs",
                  children: _v42.split(",").filter(Boolean).map(_v0 => (0, _v1.jsxs)(_v47.Tag, {
                    size: "sm",
                    children: [(0, _v1.jsx)(_v47.TagLabel, {
                      children: _v0
                    }), (0, _v1.jsx)(_v47.TagCloseButton, {
                      onClick: () => {
                        _v43(_v42.split(",").filter(_v0 => _v0 !== _v0).join(","));
                      },
                      children: (0, _v1.jsx)(_v69.CloseX, {})
                    })]
                  }, _v0))
                })]
              }) : "bool" === _v28 ? (0, _v1.jsx)(_v43.Select, {
                items: [{
                  label: (0, _v87.translate)({
                    singular: "True",
                    dictionary: {
                      es: {
                        singular: "Verdadero"
                      },
                      "de-DE": {
                        singular: "Wahr"
                      },
                      "fr-FR": {
                        singular: "Vrai"
                      },
                      "ja-JP": {
                        singular: "はい"
                      },
                      "ko-KR": {
                        singular: "참"
                      },
                      "pt-BR": {
                        singular: "Verdadeiro"
                      },
                      "zh-CN": {
                        singular: "是"
                      }
                    }
                  }),
                  value: "true"
                }, {
                  label: (0, _v87.translate)({
                    singular: "False",
                    dictionary: {
                      es: {
                        singular: "Falso"
                      },
                      "de-DE": {
                        singular: "Falsch"
                      },
                      "fr-FR": {
                        singular: "Faux"
                      },
                      "ja-JP": {
                        singular: "いいえ"
                      },
                      "ko-KR": {
                        singular: "거짓"
                      },
                      "pt-BR": {
                        singular: "Falso"
                      },
                      "zh-CN": {
                        singular: "否"
                      }
                    }
                  }),
                  value: "false"
                }],
                placeholder: (0, _v87.translate)({
                  singular: "Select a value",
                  dictionary: {
                    es: {
                      singular: "Seleccione un valor"
                    },
                    "de-DE": {
                      singular: "Wert auswählen"
                    },
                    "fr-FR": {
                      singular: "Sélectionner une valeur"
                    },
                    "ja-JP": {
                      singular: "値を選択"
                    },
                    "ko-KR": {
                      singular: "값 선택"
                    },
                    "pt-BR": {
                      singular: "Selecione um valor"
                    },
                    "zh-CN": {
                      singular: "选择一个值"
                    }
                  }
                }),
                value: _v42 ? [_v42] : [],
                onValueChange: ({
                  value: _v0
                }) => _v43(_v0[0] ?? ""),
                positioning: {
                  placement: "bottom",
                  strategy: "fixed"
                }
              }) : "date" === _v28 ? (0, _v1.jsxs)(_v9.DatePicker, {
                width: "100%",
                value: _v42 && (_v2 = _v42.match(/^(\d{4})-(\d{2})-(\d{2})/)) ? [new _v7.BokehDate.CalendarDate(Number(_v2[1]), Number(_v2[2]), Number(_v2[3]))] : [],
                onValueChange: _v0 => {
                  let _v1 = _v0.value?.[0];
                  _v43(_v1 ? _v93(_v1) : "");
                },
                children: [(0, _v1.jsx)(_v9.DatePickerControl, {
                  children: (0, _v1.jsxs)(_v21.InputGroup, {
                    children: [(0, _v1.jsx)(_v9.DatePickerInputBase, {
                      asChild: !0,
                      children: (0, _v1.jsx)(_v20.Input, {
                        _focus: {
                          bg: "fill-component"
                        },
                        pr: "40px"
                      })
                    }), (0, _v1.jsx)(_v22.InputRightElement, {
                      children: (0, _v1.jsx)(_v9.DatePickerTrigger, {
                        asChild: !0,
                        children: (0, _v1.jsx)(_v18.IconButton, {
                          "aria-label": (0, _v87.translate)({
                            singular: "Pick date",
                            dictionary: {
                              es: {
                                singular: "Seleccionar fecha"
                              },
                              "de-DE": {
                                singular: "Datum wählen"
                              },
                              "fr-FR": {
                                singular: "Choisir la date"
                              },
                              "ja-JP": {
                                singular: "日付を選択"
                              },
                              "ko-KR": {
                                singular: "날짜 선택"
                              },
                              "pt-BR": {
                                singular: "Selecionar data"
                              },
                              "zh-CN": {
                                singular: "选择日期"
                              }
                            }
                          }),
                          variant: "unstyled",
                          size: "sm",
                          bg: "surface",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          icon: (0, _v1.jsx)(_v60.Calendar, {
                            color: "text-secondary",
                            boxSize: "18px"
                          })
                        })
                      })
                    })]
                  })
                }), (0, _v1.jsx)(_v10.DatePickerPortal, {
                  children: (0, _v1.jsx)(_v9.DatePickerPositioner, {
                    style: {
                      zIndex: 0
                    },
                    children: (0, _v1.jsx)(_v9.DatePickerContent, {
                      children: (0, _v1.jsx)(_v9.Calendar, {})
                    })
                  })
                })]
              }) : "int" === _v28 ? (0, _v1.jsxs)(_v36.NumberInput, {
                value: _v42,
                onChange: _v0 => _v43(_v0),
                children: [(0, _v1.jsx)(_v36.NumberInputField, {
                  placeholder: (0, _v87.translate)({
                    singular: "Enter custom value",
                    dictionary: {
                      es: {
                        singular: "Ingrese un valor personalizado"
                      },
                      "de-DE": {
                        singular: "Benutzerdefinierten Wert eingeben"
                      },
                      "fr-FR": {
                        singular: "Saisir une valeur personnalisée"
                      },
                      "ja-JP": {
                        singular: "カスタム値を入力"
                      },
                      "ko-KR": {
                        singular: "사용자 지정 값을 입력하세요"
                      },
                      "pt-BR": {
                        singular: "Digite um valor personalizado"
                      },
                      "zh-CN": {
                        singular: "输入自定义值"
                      }
                    }
                  }),
                  _placeholder: {
                    color: "text-tertiary"
                  },
                  _focus: {
                    bg: "fill-component"
                  }
                }), (0, _v1.jsxs)(_v36.NumberInputStepper, {
                  children: [(0, _v1.jsx)(_v36.NumberIncrementStepper, {}), (0, _v1.jsx)(_v36.NumberDecrementStepper, {})]
                })]
              }) : (0, _v1.jsx)(_v20.Input, {
                placeholder: (0, _v87.translate)({
                  singular: "Enter custom value",
                  dictionary: {
                    es: {
                      singular: "Ingrese un valor personalizado"
                    },
                    "de-DE": {
                      singular: "Benutzerdefinierten Wert eingeben"
                    },
                    "fr-FR": {
                      singular: "Saisir une valeur personnalisée"
                    },
                    "ja-JP": {
                      singular: "カスタム値を入力"
                    },
                    "ko-KR": {
                      singular: "사용자 지정 값을 입력하세요"
                    },
                    "pt-BR": {
                      singular: "Digite um valor personalizado"
                    },
                    "zh-CN": {
                      singular: "输入自定义值"
                    }
                  }
                }),
                value: _v42,
                onChange: _v0 => {
                  _v0.target.value.length > 50 || _v43(_v0.target.value);
                },
                maxLength: 50,
                _placeholder: {
                  color: "text-tertiary"
                },
                _focus: {
                  bg: "fill-component"
                }
              }) : "default" === _v40 ? (0, _v1.jsxs)(_v52.Text, {
                variant: "body-sm",
                children: [(0, _v87.translate)({
                  singular: "Default Value:",
                  dictionary: {
                    es: {
                      singular: "Valor predeterminado:"
                    },
                    "de-DE": {
                      singular: "Standardwert:"
                    },
                    "fr-FR": {
                      singular: "Valeur par défaut :"
                    },
                    "ja-JP": {
                      singular: "デフォルト値:"
                    },
                    "ko-KR": {
                      singular: "기본값:"
                    },
                    "pt-BR": {
                      singular: "Valor padrão:"
                    },
                    "zh-CN": {
                      singular: "默认值："
                    }
                  }
                }), " ", (0, _v1.jsx)("strong", {
                  children: _v106
                })]
              }) : null]
            })
          }), (0, _v1.jsx)(_v33.ModalFooter, {
            children: (0, _v1.jsxs)(_v17.HStack, {
              spacing: "3",
              children: [(0, _v1.jsx)(_v11.Button, {
                variant: "secondary",
                size: "md",
                onClick: _v96,
                children: (0, _v87.translate)({
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
              }), 1 === _v38 ? (0, _v1.jsx)(_v11.Button, {
                variant: "primary",
                size: "md",
                onClick: () => {
                  _v44.current || (_v41("none"), _v44.current = !0), _v39(2);
                },
                isDisabled: _v129,
                children: (0, _v87.translate)({
                  singular: "Next",
                  dictionary: {
                    es: {
                      singular: "Siguiente"
                    },
                    "de-DE": {
                      singular: "Weiter"
                    },
                    "fr-FR": {
                      singular: "Suivant"
                    },
                    "ja-JP": {
                      singular: "次へ"
                    },
                    "ko-KR": {
                      singular: "다음"
                    },
                    "pt-BR": {
                      singular: "Próxima"
                    },
                    "zh-CN": {
                      singular: "下一步"
                    }
                  }
                })
              }) : (0, _v1.jsx)(_v11.Button, {
                variant: "primary",
                size: "md",
                onClick: _v132,
                isLoading: _v47,
                isDisabled: "custom" === _v40 && !_v42.trim(),
                children: (0, _v87.translate)({
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
            })
          })]
        })]
      }), (0, _v1.jsxs)(_v29.Modal, {
        isOpen: _v51,
        onClose: _v53,
        children: [(0, _v1.jsx)(_v35.ModalOverlay, {}), (0, _v1.jsxs)(_v32.ModalContent, {
          maxW: (0, _v42.rem)(480),
          children: [(0, _v1.jsx)(_v34.ModalHeader, {
            children: (0, _v87.translate)({
              singular: "Set value to all videos",
              dictionary: {
                es: {
                  singular: "Asignar valor a todos los videos"
                },
                "de-DE": {
                  singular: "Wert für alle Videos festlegen"
                },
                "fr-FR": {
                  singular: "Appliquer la valeur à toutes les vidéos"
                },
                "ja-JP": {
                  singular: "すべての動画に値を設定"
                },
                "ko-KR": {
                  singular: "모든 동영상에 값 설정"
                },
                "pt-BR": {
                  singular: "Definir valor para todos os vídeos"
                },
                "zh-CN": {
                  singular: "将值设置为所有视频"
                }
              }
            })
          }), (0, _v1.jsx)(_v31.ModalCloseButton, {}), (0, _v1.jsx)(_v30.ModalBody, {
            p: "7",
            children: (0, _v1.jsxs)(_v58.VStack, {
              spacing: "md",
              alignItems: "stretch",
              children: [(0, _v1.jsx)(_v52.Text, {
                variant: "body-md",
                children: (0, _v87.translate)({
                  singular: "What value do you want to apply to all videos?",
                  dictionary: {
                    es: {
                      singular: "¿Qué valor desea aplicar a todos los videos?"
                    },
                    "de-DE": {
                      singular: "Welchen Wert möchten Sie auf alle Videos anwenden?"
                    },
                    "fr-FR": {
                      singular: "Quelle valeur souhaitez-vous appliquer à toutes les vidéos ?"
                    },
                    "ja-JP": {
                      singular: "すべての動画に適用する値を指定してください。"
                    },
                    "ko-KR": {
                      singular: "모든 동영상에 적용할 값은 무엇입니까?"
                    },
                    "pt-BR": {
                      singular: "Qual valor você deseja aplicar a todos os vídeos?"
                    },
                    "zh-CN": {
                      singular: "您想将什么值应用到所有视频？"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v15.FormControl, {
                children: [(0, _v1.jsx)(_v16.FormLabel, {
                  variant: "heading-xs",
                  children: (0, _v87.translate)({
                    singular: "Backfill Value",
                    dictionary: {
                      es: {
                        singular: "Valor de relleno"
                      },
                      "de-DE": {
                        singular: "Rückbefüllungswert"
                      },
                      "fr-FR": {
                        singular: "Valeur de remplissage rétroactif"
                      },
                      "ja-JP": {
                        singular: "バックフィル値"
                      },
                      "ko-KR": {
                        singular: "백필 값"
                      },
                      "pt-BR": {
                        singular: "Valor de preenchimento"
                      },
                      "zh-CN": {
                        singular: "回填值"
                      }
                    }
                  })
                }), _v49?.type === "select" ? (0, _v1.jsx)(_v43.Select, {
                  items: (_v49.values ?? []).map(_v0 => ({
                    label: _v0,
                    value: _v0
                  })),
                  placeholder: (0, _v87.translate)({
                    singular: "Select a value",
                    dictionary: {
                      es: {
                        singular: "Seleccione un valor"
                      },
                      "de-DE": {
                        singular: "Wert auswählen"
                      },
                      "fr-FR": {
                        singular: "Sélectionner une valeur"
                      },
                      "ja-JP": {
                        singular: "値を選択"
                      },
                      "ko-KR": {
                        singular: "값 선택"
                      },
                      "pt-BR": {
                        singular: "Selecione um valor"
                      },
                      "zh-CN": {
                        singular: "选择一个值"
                      }
                    }
                  }),
                  value: _v54 ? [_v54] : [],
                  onValueChange: ({
                    value: _v0
                  }) => _v55(_v0[0] ?? ""),
                  positioning: {
                    placement: "bottom",
                    strategy: "fixed"
                  }
                }) : _v49?.type === "multi-select" ? (0, _v1.jsxs)(_v14.Flex, {
                  flexDirection: "column",
                  gap: "sm",
                  children: [(0, _v1.jsx)(_v43.Select, {
                    items: (_v49.values ?? []).filter(_v0 => !!_v0 && !(_v54 ? _v54.split(",") : []).includes(_v0)).map(_v0 => ({
                      label: _v0,
                      value: _v0
                    })),
                    value: [],
                    placeholder: (0, _v87.translate)({
                      singular: "Select",
                      dictionary: {
                        es: {
                          singular: "Seleccionar"
                        },
                        "de-DE": {
                          singular: "Auswählen"
                        },
                        "fr-FR": {
                          singular: "Sélectionner"
                        },
                        "ja-JP": {
                          singular: "選択"
                        },
                        "ko-KR": {
                          singular: "선택"
                        },
                        "pt-BR": {
                          singular: "Selecionar"
                        },
                        "zh-CN": {
                          singular: "选择"
                        }
                      }
                    }),
                    onValueChange: ({
                      value: _v0
                    }) => {
                      let _v1 = _v0[0];
                      _v1 && _v55([...(_v54 ? _v54.split(",").filter(Boolean) : []), _v1].join(","));
                    },
                    positioning: {
                      placement: "bottom",
                      strategy: "fixed"
                    }
                  }), _v54 && (0, _v1.jsx)(_v17.HStack, {
                    flexWrap: "wrap",
                    gap: "xs",
                    children: _v54.split(",").filter(Boolean).map(_v0 => (0, _v1.jsxs)(_v47.Tag, {
                      size: "sm",
                      children: [(0, _v1.jsx)(_v47.TagLabel, {
                        children: _v0
                      }), (0, _v1.jsx)(_v47.TagCloseButton, {
                        onClick: () => {
                          _v55(_v54.split(",").filter(_v0 => _v0 !== _v0).join(","));
                        },
                        children: (0, _v1.jsx)(_v69.CloseX, {})
                      })]
                    }, _v0))
                  })]
                }) : _v49?.type === "bool" ? (0, _v1.jsx)(_v43.Select, {
                  items: [{
                    label: (0, _v87.translate)({
                      singular: "True",
                      dictionary: {
                        es: {
                          singular: "Verdadero"
                        },
                        "de-DE": {
                          singular: "Wahr"
                        },
                        "fr-FR": {
                          singular: "Vrai"
                        },
                        "ja-JP": {
                          singular: "はい"
                        },
                        "ko-KR": {
                          singular: "참"
                        },
                        "pt-BR": {
                          singular: "Verdadeiro"
                        },
                        "zh-CN": {
                          singular: "是"
                        }
                      }
                    }),
                    value: "true"
                  }, {
                    label: (0, _v87.translate)({
                      singular: "False",
                      dictionary: {
                        es: {
                          singular: "Falso"
                        },
                        "de-DE": {
                          singular: "Falsch"
                        },
                        "fr-FR": {
                          singular: "Faux"
                        },
                        "ja-JP": {
                          singular: "いいえ"
                        },
                        "ko-KR": {
                          singular: "거짓"
                        },
                        "pt-BR": {
                          singular: "Falso"
                        },
                        "zh-CN": {
                          singular: "否"
                        }
                      }
                    }),
                    value: "false"
                  }],
                  placeholder: (0, _v87.translate)({
                    singular: "Select a value",
                    dictionary: {
                      es: {
                        singular: "Seleccione un valor"
                      },
                      "de-DE": {
                        singular: "Wert auswählen"
                      },
                      "fr-FR": {
                        singular: "Sélectionner une valeur"
                      },
                      "ja-JP": {
                        singular: "値を選択"
                      },
                      "ko-KR": {
                        singular: "값 선택"
                      },
                      "pt-BR": {
                        singular: "Selecione um valor"
                      },
                      "zh-CN": {
                        singular: "选择一个值"
                      }
                    }
                  }),
                  value: _v54 ? [_v54] : [],
                  onValueChange: ({
                    value: _v0
                  }) => _v55(_v0[0] ?? ""),
                  positioning: {
                    placement: "bottom",
                    strategy: "fixed"
                  }
                }) : _v49?.type === "date" ? (0, _v1.jsxs)(_v9.DatePicker, {
                  width: "100%",
                  value: _v54 && (_v3 = _v54.match(/^(\d{4})-(\d{2})-(\d{2})/)) ? [new _v7.BokehDate.CalendarDate(Number(_v3[1]), Number(_v3[2]), Number(_v3[3]))] : [],
                  onValueChange: _v0 => {
                    let _v1 = _v0.value?.[0];
                    _v55(_v1 ? _v93(_v1) : "");
                  },
                  children: [(0, _v1.jsx)(_v9.DatePickerControl, {
                    children: (0, _v1.jsxs)(_v21.InputGroup, {
                      children: [(0, _v1.jsx)(_v9.DatePickerInputBase, {
                        asChild: !0,
                        children: (0, _v1.jsx)(_v20.Input, {
                          _focus: {
                            bg: "fill-component"
                          },
                          pr: "40px"
                        })
                      }), (0, _v1.jsx)(_v22.InputRightElement, {
                        children: (0, _v1.jsx)(_v9.DatePickerTrigger, {
                          asChild: !0,
                          children: (0, _v1.jsx)(_v18.IconButton, {
                            "aria-label": (0, _v87.translate)({
                              singular: "Pick date",
                              dictionary: {
                                es: {
                                  singular: "Seleccionar fecha"
                                },
                                "de-DE": {
                                  singular: "Datum wählen"
                                },
                                "fr-FR": {
                                  singular: "Choisir la date"
                                },
                                "ja-JP": {
                                  singular: "日付を選択"
                                },
                                "ko-KR": {
                                  singular: "날짜 선택"
                                },
                                "pt-BR": {
                                  singular: "Selecionar data"
                                },
                                "zh-CN": {
                                  singular: "选择日期"
                                }
                              }
                            }),
                            variant: "unstyled",
                            size: "sm",
                            bg: "surface",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            icon: (0, _v1.jsx)(_v60.Calendar, {
                              color: "text-secondary",
                              boxSize: "18px"
                            })
                          })
                        })
                      })]
                    })
                  }), (0, _v1.jsx)(_v10.DatePickerPortal, {
                    children: (0, _v1.jsx)(_v9.DatePickerPositioner, {
                      style: {
                        zIndex: 0
                      },
                      children: (0, _v1.jsx)(_v9.DatePickerContent, {
                        children: (0, _v1.jsx)(_v9.Calendar, {})
                      })
                    })
                  })]
                }) : _v49?.type === "int" ? (0, _v1.jsxs)(_v36.NumberInput, {
                  value: _v54,
                  onChange: _v0 => _v55(_v0),
                  children: [(0, _v1.jsx)(_v36.NumberInputField, {
                    placeholder: (0, _v87.translate)({
                      singular: "Enter value",
                      dictionary: {
                        es: {
                          singular: "Ingrese un valor"
                        },
                        "de-DE": {
                          singular: "Wert eingeben"
                        },
                        "fr-FR": {
                          singular: "Saisir la valeur"
                        },
                        "ja-JP": {
                          singular: "値を入力"
                        },
                        "ko-KR": {
                          singular: "값을 입력하세요"
                        },
                        "pt-BR": {
                          singular: "Digite um valor"
                        },
                        "zh-CN": {
                          singular: "输入值"
                        }
                      }
                    }),
                    _placeholder: {
                      color: "text-tertiary"
                    },
                    _focus: {
                      bg: "fill-component"
                    }
                  }), (0, _v1.jsxs)(_v36.NumberInputStepper, {
                    children: [(0, _v1.jsx)(_v36.NumberIncrementStepper, {}), (0, _v1.jsx)(_v36.NumberDecrementStepper, {})]
                  })]
                }) : (0, _v1.jsx)(_v20.Input, {
                  placeholder: (0, _v87.translate)({
                    singular: "Enter value",
                    dictionary: {
                      es: {
                        singular: "Ingrese un valor"
                      },
                      "de-DE": {
                        singular: "Wert eingeben"
                      },
                      "fr-FR": {
                        singular: "Saisir la valeur"
                      },
                      "ja-JP": {
                        singular: "値を入力"
                      },
                      "ko-KR": {
                        singular: "값을 입력하세요"
                      },
                      "pt-BR": {
                        singular: "Digite um valor"
                      },
                      "zh-CN": {
                        singular: "输入值"
                      }
                    }
                  }),
                  value: _v54,
                  onChange: _v0 => {
                    _v0.target.value.length > 50 || _v55(_v0.target.value);
                  },
                  maxLength: 50,
                  _placeholder: {
                    color: "text-tertiary"
                  },
                  _focus: {
                    bg: "fill-component"
                  }
                })]
              }), (0, _v1.jsx)(_v12.Checkbox, {
                isChecked: _v56,
                onChange: _v0 => _v57(_v0.target.checked),
                children: (0, _v1.jsx)(_v52.Text, {
                  variant: "body-md",
                  children: (0, _v87.translate)({
                    singular: "Override all existing values across all videos",
                    dictionary: {
                      es: {
                        singular: "Sobrescribir todos los valores existentes en todos los videos"
                      },
                      "de-DE": {
                        singular: "Alle bestehenden Werte in allen Videos überschreiben"
                      },
                      "fr-FR": {
                        singular: "Remplacer toutes les valeurs existantes dans toutes les vidéos"
                      },
                      "ja-JP": {
                        singular: "すべての動画に対して既存の値をすべて上書きする"
                      },
                      "ko-KR": {
                        singular: "모든 동영상의 기존 값을 모두 덮어쓰기"
                      },
                      "pt-BR": {
                        singular: "Substituir todos os valores existentes em todos os vídeos"
                      },
                      "zh-CN": {
                        singular: "覆盖所有视频中现有的所有值"
                      }
                    }
                  })
                })
              })]
            })
          }), (0, _v1.jsx)(_v33.ModalFooter, {
            children: (0, _v1.jsxs)(_v17.HStack, {
              spacing: "3",
              children: [(0, _v1.jsx)(_v11.Button, {
                variant: "secondary",
                size: "md",
                onClick: _v53,
                children: (0, _v87.translate)({
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
              }), (0, _v1.jsx)(_v11.Button, {
                variant: "primary",
                size: "md",
                onClick: _v99,
                isDisabled: !_v54.trim(),
                children: (0, _v87.translate)({
                  singular: "Apply",
                  dictionary: {
                    es: {
                      singular: "Aplicar"
                    },
                    "de-DE": {
                      singular: "Anwenden"
                    },
                    "fr-FR": {
                      singular: "Appliquer"
                    },
                    "ja-JP": {
                      singular: "適用する"
                    },
                    "ko-KR": {
                      singular: "적용"
                    },
                    "pt-BR": {
                      singular: "Aplicar"
                    },
                    "zh-CN": {
                      singular: "应用"
                    }
                  }
                })
              })]
            })
          })]
        })]
      }), (0, _v1.jsxs)(_v29.Modal, {
        isOpen: _v60,
        onClose: _v62,
        size: "lg",
        children: [(0, _v1.jsx)(_v35.ModalOverlay, {}), (0, _v1.jsxs)(_v32.ModalContent, {
          children: [(0, _v1.jsx)(_v34.ModalHeader, {
            children: (0, _v87.translate)({
              singular: "Delete Custom Field",
              dictionary: {
                es: {
                  singular: "Eliminar campo personalizado"
                },
                "de-DE": {
                  singular: "Benutzerdefiniertes Feld löschen"
                },
                "fr-FR": {
                  singular: "Supprimer le champ personnalisé"
                },
                "ja-JP": {
                  singular: "カスタムフィールドを削除"
                },
                "ko-KR": {
                  singular: "사용자 지정 필드 삭제"
                },
                "pt-BR": {
                  singular: "Excluir campo personalizado"
                },
                "zh-CN": {
                  singular: "删除自定义字段"
                }
              }
            })
          }), (0, _v1.jsx)(_v31.ModalCloseButton, {}), (0, _v1.jsx)(_v30.ModalBody, {
            p: "7",
            children: (0, _v1.jsxs)(_v58.VStack, {
              spacing: "md",
              alignItems: "stretch",
              children: [(0, _v1.jsx)(_v52.Text, {
                variant: "body-md",
                children: (0, _v87.translate)({
                  singular: "This action will permanently remove this field and all associated data from every video in your workspace. Contributors will no longer be able to see or edit this information.",
                  dictionary: {
                    es: {
                      singular: "Esta acción eliminará permanentemente este campo y todos los datos asociados de cada video en su espacio de trabajo. Los colaboradores ya no podrán ver ni editar esta información."
                    },
                    "de-DE": {
                      singular: "Diese Aktion entfernt dieses Feld und alle zugehörigen Daten dauerhaft aus jedem Video in Ihrem Arbeitsbereich. Mitwirkende können diese Informationen danach nicht mehr sehen oder bearbeiten."
                    },
                    "fr-FR": {
                      singular: "Cette action supprimera définitivement ce champ et toutes les données associées de chaque vidéo de votre espace de travail. Les contributeurs ne pourront plus voir ni modifier ces informations."
                    },
                    "ja-JP": {
                      singular: "この操作により、このフィールドと関連するすべてのデータがワークスペース内のすべての動画から永久に削除されます。コントリビューターはこれらの情報を表示または編集できなくなります。"
                    },
                    "ko-KR": {
                      singular: "이 작업은 이 워크스페이스의 모든 동영상에서 이 필드와 관련된 모든 데이터를 영구적으로 제거합니다. 기여자는 더 이상 해당 정보를 볼 수도, 편집할 수도 없습니다."
                    },
                    "pt-BR": {
                      singular: "Esta ação removerá permanentemente este campo e todos os dados associados de cada vídeo no seu espaço de trabalho. Os colaboradores não poderão mais ver ou editar essas informações."
                    },
                    "zh-CN": {
                      singular: "此操作将永久从您工作区的每个视频中删除该字段及所有关联数据。贡献者将不再能够查看或编辑此信息。"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v52.Text, {
                variant: "body-md",
                children: (0, _v87.translate)({
                  singular: "This action cannot be undone.",
                  dictionary: {
                    es: {
                      singular: "Esta acción no se puede deshacer."
                    },
                    "de-DE": {
                      singular: "Diese Aktion kann nicht rückgängig gemacht werden."
                    },
                    "fr-FR": {
                      singular: "Cette action est irréversible."
                    },
                    "ja-JP": {
                      singular: "この操作は取り消せません。"
                    },
                    "ko-KR": {
                      singular: "이 작업은 취소할 수 없습니다."
                    },
                    "pt-BR": {
                      singular: "Esta ação não pode ser desfeita."
                    },
                    "zh-CN": {
                      singular: "此操作无法撤销。"
                    }
                  }
                })
              })]
            })
          }), (0, _v1.jsx)(_v33.ModalFooter, {
            children: (0, _v1.jsxs)(_v17.HStack, {
              spacing: "3",
              children: [(0, _v1.jsx)(_v11.Button, {
                variant: "secondary",
                size: "md",
                onClick: _v62,
                children: (0, _v87.translate)({
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
              }), (0, _v1.jsx)(_v11.Button, {
                variant: "destructive",
                size: "md",
                onClick: _v111,
                isLoading: _v63,
                children: (0, _v87.translate)({
                  singular: "Delete",
                  dictionary: {
                    es: {
                      singular: "Eliminar"
                    },
                    "de-DE": {
                      singular: "Löschen"
                    },
                    "fr-FR": {
                      singular: "Supprimer"
                    },
                    "ja-JP": {
                      singular: "削除"
                    },
                    "ko-KR": {
                      singular: "삭제"
                    },
                    "pt-BR": {
                      singular: "Excluir"
                    },
                    "zh-CN": {
                      singular: "删除"
                    }
                  }
                })
              })]
            })
          })]
        })]
      }), (0, _v1.jsxs)(_v29.Modal, {
        isOpen: _v67,
        onClose: _v105,
        size: "lg",
        children: [(0, _v1.jsx)(_v35.ModalOverlay, {}), (0, _v1.jsxs)(_v32.ModalContent, {
          children: [(0, _v1.jsx)(_v34.ModalHeader, {
            pr: "7",
            pb: "sm",
            children: (0, _v87.translate)({
              singular: "Edit field",
              dictionary: {
                es: {
                  singular: "Editar campo"
                },
                "de-DE": {
                  singular: "Feld bearbeiten"
                },
                "fr-FR": {
                  singular: "Modifier le champ"
                },
                "ja-JP": {
                  singular: "フィールドを編集"
                },
                "ko-KR": {
                  singular: "필드 편집"
                },
                "pt-BR": {
                  singular: "Editar campo"
                },
                "zh-CN": {
                  singular: "编辑字段"
                }
              }
            })
          }), (0, _v1.jsx)(_v31.ModalCloseButton, {}), (0, _v1.jsx)(_v8.Box, {
            h: "1px",
            bg: "stroke"
          }), (0, _v1.jsxs)(_v17.HStack, {
            align: "stretch",
            spacing: 0,
            minH: (0, _v42.rem)(320),
            flex: 1,
            children: [(0, _v1.jsxs)(_v58.VStack, {
              w: "25%",
              align: "stretch",
              spacing: 0,
              p: "lg",
              children: [(0, _v1.jsx)(_v8.Box, {
                cursor: "pointer",
                px: "md",
                h: (0, _v42.rem)(40),
                display: "flex",
                alignItems: "center",
                borderRadius: "md",
                bg: "general" === _v70 ? "fill-component" : "transparent",
                _hover: "general" === _v70 ? void 0 : {
                  bg: "fill-component-hover"
                },
                onClick: () => _v71("general"),
                children: (0, _v1.jsx)(_v52.Text, {
                  variant: "body-md",
                  fontWeight: "general" === _v70 ? "bold" : "normal",
                  children: (0, _v87.translate)({
                    singular: "General",
                    dictionary: {
                      "de-DE": {
                        singular: "Allgemein"
                      },
                      "fr-FR": {
                        singular: "Général"
                      },
                      "ja-JP": {
                        singular: "一般"
                      },
                      "ko-KR": {
                        singular: "일반"
                      },
                      "pt-BR": {
                        singular: "Geral"
                      },
                      "zh-CN": {
                        singular: "一般"
                      }
                    }
                  })
                })
              }), (0, _v1.jsx)(_v8.Box, {
                cursor: "pointer",
                px: "md",
                h: (0, _v42.rem)(40),
                display: "flex",
                alignItems: "center",
                borderRadius: "md",
                bg: "values" === _v70 ? "fill-component" : "transparent",
                _hover: "values" === _v70 ? void 0 : {
                  bg: "fill-component-hover"
                },
                onClick: () => _v71("values"),
                children: (0, _v1.jsx)(_v52.Text, {
                  variant: "body-md",
                  fontWeight: "values" === _v70 ? "bold" : "normal",
                  children: (0, _v87.translate)({
                    singular: "Values",
                    dictionary: {
                      es: {
                        singular: "Valores"
                      },
                      "de-DE": {
                        singular: "Werte"
                      },
                      "fr-FR": {
                        singular: "Valeurs"
                      },
                      "ja-JP": {
                        singular: "値"
                      },
                      "ko-KR": {
                        singular: "값"
                      },
                      "pt-BR": {
                        singular: "Valores"
                      },
                      "zh-CN": {
                        singular: "值"
                      }
                    }
                  })
                })
              })]
            }), (0, _v1.jsx)(_v8.Box, {
              w: "1px",
              bg: "stroke"
            }), (0, _v1.jsx)(_v58.VStack, {
              w: "75%",
              align: "stretch",
              p: "lg",
              children: "general" === _v70 ? (0, _v1.jsxs)(_v58.VStack, {
                spacing: "7",
                align: "stretch",
                children: [(0, _v1.jsxs)(_v15.FormControl, {
                  isRequired: !0,
                  isInvalid: _v128 || !_v72.trim(),
                  sx: {
                    "label .chakra-form__required-indicator": {
                      ml: 0
                    }
                  },
                  children: [(0, _v1.jsx)(_v16.FormLabel, {
                    variant: "heading-xs",
                    children: (0, _v87.translate)({
                      singular: "Field name",
                      dictionary: {
                        es: {
                          singular: "Nombre del campo"
                        },
                        "de-DE": {
                          singular: "Feldname"
                        },
                        "fr-FR": {
                          singular: "Nom du champ"
                        },
                        "ja-JP": {
                          singular: "フィールド名"
                        },
                        "ko-KR": {
                          singular: "필드명"
                        },
                        "pt-BR": {
                          singular: "Nome do campo"
                        },
                        "zh-CN": {
                          singular: "字段名称"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v20.Input, {
                    value: _v72,
                    onChange: _v0 => _v73(_v0.target.value),
                    _placeholder: {
                      color: "text-tertiary"
                    },
                    _focus: {
                      bg: "fill-component"
                    }
                  }), _v128 && (0, _v1.jsx)(_v52.Text, {
                    variant: "body-xs",
                    color: "status-destructive-primary",
                    mt: "xs",
                    children: (0, _v87.translate)({
                      singular: "A field with this name already exists.",
                      dictionary: {
                        es: {
                          singular: "Ya existe un campo con este nombre."
                        },
                        "de-DE": {
                          singular: "Ein Feld mit diesem Namen existiert bereits."
                        },
                        "fr-FR": {
                          singular: "Un champ portant ce nom existe déjà."
                        },
                        "ja-JP": {
                          singular: "同じ名前のフィールドが既に存在します。"
                        },
                        "ko-KR": {
                          singular: "같은 이름의 필드가 이미 존재합니다."
                        },
                        "pt-BR": {
                          singular: "Um campo com este nome já existe."
                        },
                        "zh-CN": {
                          singular: "具有该名称的字段已存在。"
                        }
                      }
                    })
                  }), !_v72.trim() && (0, _v1.jsx)(_v52.Text, {
                    variant: "body-xs",
                    color: "status-destructive-primary",
                    mt: "xs",
                    children: (0, _v87.translate)({
                      singular: "Field name is required.",
                      dictionary: {
                        es: {
                          singular: "El nombre del campo es obligatorio."
                        },
                        "de-DE": {
                          singular: "Feldname ist erforderlich."
                        },
                        "fr-FR": {
                          singular: "Le nom du champ est requis."
                        },
                        "ja-JP": {
                          singular: "フィールド名は必須です。"
                        },
                        "ko-KR": {
                          singular: "필드 이름은 필수입니다."
                        },
                        "pt-BR": {
                          singular: "O nome do campo é obrigatório."
                        },
                        "zh-CN": {
                          singular: "字段名称为必填项。"
                        }
                      }
                    })
                  })]
                }), (0, _v1.jsxs)(_v15.FormControl, {
                  children: [(0, _v1.jsx)(_v16.FormLabel, {
                    variant: "heading-xs",
                    children: (0, _v87.translate)({
                      singular: "Description",
                      dictionary: {
                        es: {
                          singular: "Descripción"
                        },
                        "de-DE": {
                          singular: "Beschreibung"
                        },
                        "ja-JP": {
                          singular: "説明"
                        },
                        "ko-KR": {
                          singular: "설명"
                        },
                        "pt-BR": {
                          singular: "Descrição"
                        },
                        "zh-CN": {
                          singular: "描述"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v48.Textarea, {
                    placeholder: (0, _v87.translate)({
                      singular: "Add description",
                      dictionary: {
                        es: {
                          singular: "Agregar descripción"
                        },
                        "de-DE": {
                          singular: "Beschreibung hinzufügen"
                        },
                        "fr-FR": {
                          singular: "Ajouter une description"
                        },
                        "ja-JP": {
                          singular: "説明を追加"
                        },
                        "ko-KR": {
                          singular: "설명 추가"
                        },
                        "pt-BR": {
                          singular: "Adicionar descrição"
                        },
                        "zh-CN": {
                          singular: "添加描述"
                        }
                      }
                    }),
                    value: _v74,
                    onChange: _v0 => _v75(_v0.target.value),
                    borderRadius: (0, _v42.rem)(12),
                    _placeholder: {
                      color: "text-secondary"
                    },
                    _focus: {
                      bg: "fill-component"
                    }
                  }), (0, _v1.jsx)(_v52.Text, {
                    variant: "body-sm",
                    color: "text-tertiary",
                    mt: "xs",
                    children: (0, _v87.translate)({
                      singular: "Description appears next to the field label on the video page.",
                      dictionary: {
                        es: {
                          singular: "La descripción aparece junto a la etiqueta del campo en la página del video."
                        },
                        "de-DE": {
                          singular: "Die Beschreibung erscheint neben dem Feldlabel auf der Videoseite."
                        },
                        "fr-FR": {
                          singular: "La description apparaît à côté du libellé du champ sur la page de la vidéo."
                        },
                        "ja-JP": {
                          singular: "説明は動画ページのフィールドラベルの横に表示されます。"
                        },
                        "ko-KR": {
                          singular: "설명은 동영상 페이지의 필드 라벨 옆에 표시됩니다."
                        },
                        "pt-BR": {
                          singular: "A descrição aparece ao lado do rótulo do campo na página do vídeo."
                        },
                        "zh-CN": {
                          singular: "描述显示在视频页面的字段标签旁。"
                        }
                      }
                    })
                  })]
                }), (0, _v1.jsxs)(_v15.FormControl, {
                  isRequired: !0,
                  sx: {
                    "label .chakra-form__required-indicator": {
                      ml: 0
                    }
                  },
                  children: [(0, _v1.jsx)(_v16.FormLabel, {
                    variant: "heading-xs",
                    children: (0, _v87.translate)({
                      singular: "Field Type",
                      dictionary: {
                        es: {
                          singular: "Tipo de campo"
                        },
                        "de-DE": {
                          singular: "Feldtyp"
                        },
                        "fr-FR": {
                          singular: "Type de champ"
                        },
                        "ja-JP": {
                          singular: "フィールドタイプ"
                        },
                        "ko-KR": {
                          singular: "필드 유형"
                        },
                        "pt-BR": {
                          singular: "Tipo de campo"
                        },
                        "zh-CN": {
                          singular: "字段类型"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v43.Select, {
                    variant: "withCheck",
                    items: _v92,
                    value: _v65?.type ? [_v65.type] : [],
                    disabled: !0
                  })]
                }), (0, _v1.jsx)(_v15.FormControl, {
                  children: (0, _v1.jsxs)(_v17.HStack, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "md",
                    children: [(0, _v1.jsxs)(_v58.VStack, {
                      align: "stretch",
                      spacing: "xs",
                      flex: "1",
                      children: [(0, _v1.jsx)(_v16.FormLabel, {
                        variant: "heading-xs",
                        mb: "0",
                        children: (0, _v87.translate)({
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
                        })
                      }), (0, _v1.jsx)(_v52.Text, {
                        variant: "body-md",
                        color: "text-secondary",
                        children: (0, _v87.translate)({
                          singular: "This field is required for all videos.",
                          dictionary: {
                            es: {
                              singular: "Este campo es obligatorio para todos los vídeos."
                            },
                            "de-DE": {
                              singular: "Dieses Feld ist für alle Videos erforderlich."
                            },
                            "fr-FR": {
                              singular: "Ce champ est obligatoire pour toutes les vidéos."
                            },
                            "ja-JP": {
                              singular: "このフィールドはすべての動画で必須です。"
                            },
                            "ko-KR": {
                              singular: "이 필드는 모든 동영상에 필수 항목입니다."
                            },
                            "pt-BR": {
                              singular: "Este campo é obrigatório para todos os vídeos."
                            },
                            "zh-CN": {
                              singular: "此字段为所有视频必填."
                            }
                          }
                        })
                      })]
                    }), (0, _v1.jsx)(_v45.Switch, {
                      isChecked: _v76,
                      onChange: _v0 => _v77(_v0.target.checked)
                    })]
                  })
                })]
              }) : (0, _v1.jsx)(_v58.VStack, {
                spacing: "7",
                align: "stretch",
                children: _v65?.type === "select" || _v65?.type === "multi-select" ? (0, _v1.jsxs)(_v15.FormControl, {
                  children: [(0, _v1.jsx)(_v16.FormLabel, {
                    variant: "heading-xs",
                    children: (0, _v87.translate)({
                      singular: "Options",
                      dictionary: {
                        es: {
                          singular: "Opciones"
                        },
                        "de-DE": {
                          singular: "Optionen"
                        },
                        "ja-JP": {
                          singular: "オプション"
                        },
                        "ko-KR": {
                          singular: "옵션"
                        },
                        "pt-BR": {
                          singular: "Opções"
                        },
                        "zh-CN": {
                          singular: "选项"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v3.Alert, {
                    status: "warning",
                    mb: "md",
                    children: (0, _v1.jsx)(_v4.AlertDescription, {
                      children: (0, _v87.translate)({
                        singular: "Renaming an option will change the value across all videos.",
                        dictionary: {
                          es: {
                            singular: "Renombrar una opción cambiará el valor en todos los videos."
                          },
                          "de-DE": {
                            singular: "Das Umbenennen einer Option ändert den Wert in allen Videos."
                          },
                          "fr-FR": {
                            singular: "Renommer une option modifiera la valeur dans toutes les vidéos."
                          },
                          "ja-JP": {
                            singular: "オプションの名前を変更すると、すべての動画の値が変更されます。"
                          },
                          "ko-KR": {
                            singular: "옵션 이름을 변경하면 모든 동영상의 값이 변경됩니다."
                          },
                          "pt-BR": {
                            singular: "Renomear uma opção alterará o valor em todos os vídeos."
                          },
                          "zh-CN": {
                            singular: "重命名选项将更改所有视频中的该值。"
                          }
                        }
                      })
                    })
                  }), (0, _v1.jsxs)(_v58.VStack, {
                    spacing: "sm",
                    align: "stretch",
                    children: [(0, _v1.jsx)(_v58.VStack, {
                      ref: _v46,
                      spacing: "sm",
                      align: "stretch",
                      "data-edit-options-list": !0,
                      maxH: "min(50vh, 25rem)",
                      overflowY: "auto",
                      pr: "xs",
                      children: _v80.map((_v0, _v1) => (0, _v1.jsxs)(_v17.HStack, {
                        spacing: "sm",
                        children: [(0, _v1.jsx)(_v49.Tooltip, {
                          label: _v82.has(_v1) ? (0, _v87.translate)({
                            singular: "Remove default",
                            dictionary: {
                              es: {
                                singular: "Eliminar el valor predeterminado"
                              },
                              "de-DE": {
                                singular: "Standard entfernen"
                              },
                              "fr-FR": {
                                singular: "Supprimer les valeurs par défaut"
                              },
                              "ja-JP": {
                                singular: "デフォルトを削除"
                              },
                              "ko-KR": {
                                singular: "기본 설정 제거"
                              },
                              "pt-BR": {
                                singular: "Remova o padrão"
                              },
                              "zh-CN": {
                                singular: "移除默认设置"
                              }
                            }
                          }) : (0, _v87.translate)({
                            singular: "Set default",
                            dictionary: {
                              es: {
                                singular: "Establecer valor predeterminado"
                              },
                              "de-DE": {
                                singular: "Standard festlegen"
                              },
                              "fr-FR": {
                                singular: "Définir les paramètres par défaut"
                              },
                              "ja-JP": {
                                singular: "デフォルトを設定"
                              },
                              "ko-KR": {
                                singular: "기본값으로 설정"
                              },
                              "pt-BR": {
                                singular: "Definir padrão"
                              },
                              "zh-CN": {
                                singular: "设置默认值"
                              }
                            }
                          }),
                          placement: "top",
                          shouldWrapChildren: !0,
                          children: (0, _v1.jsx)(_v18.IconButton, {
                            "aria-label": _v82.has(_v1) ? (0, _v87.translate)({
                              singular: "Remove default",
                              dictionary: {
                                es: {
                                  singular: "Eliminar el valor predeterminado"
                                },
                                "de-DE": {
                                  singular: "Standard entfernen"
                                },
                                "fr-FR": {
                                  singular: "Supprimer les valeurs par défaut"
                                },
                                "ja-JP": {
                                  singular: "デフォルトを削除"
                                },
                                "ko-KR": {
                                  singular: "기본 설정 제거"
                                },
                                "pt-BR": {
                                  singular: "Remova o padrão"
                                },
                                "zh-CN": {
                                  singular: "移除默认设置"
                                }
                              }
                            }) : (0, _v87.translate)({
                              singular: "Set default",
                              dictionary: {
                                es: {
                                  singular: "Establecer valor predeterminado"
                                },
                                "de-DE": {
                                  singular: "Standard festlegen"
                                },
                                "fr-FR": {
                                  singular: "Définir les paramètres par défaut"
                                },
                                "ja-JP": {
                                  singular: "デフォルトを設定"
                                },
                                "ko-KR": {
                                  singular: "기본값으로 설정"
                                },
                                "pt-BR": {
                                  singular: "Definir padrão"
                                },
                                "zh-CN": {
                                  singular: "设置默认值"
                                }
                              }
                            }),
                            variant: "secondary",
                            size: "md",
                            isActive: _v82.has(_v1),
                            icon: _v82.has(_v1) ? (0, _v1.jsx)(_v61.CircleCheck, {
                              boxSize: "20px"
                            }) : (0, _v1.jsx)(_v62.CircleShape, {
                              boxSize: "20px"
                            }),
                            onClick: () => {
                              let _v0 = new Set(_v82);
                              _v0.has(_v1) ? _v0.delete(_v1) : (_v65?.type === "select" && _v0.clear(), _v0.add(_v1)), _v83(_v0);
                            }
                          })
                        }), (0, _v1.jsx)(_v15.FormControl, {
                          isInvalid: !_v0.value.trim(),
                          flex: 1,
                          children: (0, _v1.jsx)(_v20.Input, {
                            placeholder: (0, _v87.translate)({
                              singular: "Option {NUMBER}",
                              replacements: {
                                NUMBER: _v1 + 1
                              },
                              dictionary: {
                                es: {
                                  singular: "Opción {NUMBER}"
                                },
                                "ja-JP": {
                                  singular: "オプション {NUMBER}"
                                },
                                "ko-KR": {
                                  singular: "옵션 {NUMBER}"
                                },
                                "pt-BR": {
                                  singular: "Opção {NUMBER}"
                                },
                                "zh-CN": {
                                  singular: "选项 {NUMBER}"
                                }
                              }
                            }),
                            value: _v0.value,
                            onChange: _v0 => {
                              let _v1 = [..._v80];
                              _v1[_v1] = {
                                ..._v1[_v1],
                                value: _v0.target.value
                              }, _v81(_v1);
                            },
                            onKeyDown: _v0 => {
                              if ("Enter" === _v0.key && _v0.value.trim()) {
                                _v0.preventDefault();
                                let _v0 = _v0.currentTarget.closest("[data-edit-options-list]");
                                _v81([..._v80, {
                                  originalValue: null,
                                  value: ""
                                }]), requestAnimationFrame(() => {
                                  let _v0 = _v0?.querySelectorAll("input");
                                  _v0?.[_v0.length - 1]?.focus();
                                });
                              }
                            },
                            _placeholder: {
                              color: "text-tertiary"
                            },
                            _focus: {
                              bg: "fill-component"
                            }
                          })
                        }), (0, _v1.jsx)(_v18.IconButton, {
                          "aria-label": (0, _v87.translate)({
                            singular: "Delete option",
                            dictionary: {
                              es: {
                                singular: "Eliminar opción"
                              },
                              "de-DE": {
                                singular: "Option löschen"
                              },
                              "fr-FR": {
                                singular: "Supprimer l’option"
                              },
                              "ja-JP": {
                                singular: "オプションを削除"
                              },
                              "ko-KR": {
                                singular: "옵션 삭제"
                              },
                              "pt-BR": {
                                singular: "Excluir opção"
                              },
                              "zh-CN": {
                                singular: "删除选项"
                              }
                            }
                          }),
                          variant: "tertiary",
                          size: "md",
                          icon: (0, _v1.jsx)(_v71.TrashBin, {}),
                          isDisabled: _v80.length <= 1,
                          onClick: () => {
                            _v85(_v1), _v87();
                          }
                        })]
                      }, _v1))
                    }), (0, _v1.jsx)(_v11.Button, {
                      variant: "tertiary",
                      size: "md",
                      alignSelf: "center",
                      leftIcon: (0, _v1.jsx)(_v66.PlusCircle, {}),
                      onClick: () => {
                        _v81([..._v80, {
                          originalValue: null,
                          value: ""
                        }]), requestAnimationFrame(() => {
                          let _v0 = _v46.current?.querySelectorAll("input");
                          _v0?.[_v0.length - 1]?.focus();
                        });
                      },
                      children: (0, _v87.translate)({
                        singular: "New option",
                        dictionary: {
                          es: {
                            singular: "Nueva opción"
                          },
                          "de-DE": {
                            singular: "Neue Option"
                          },
                          "fr-FR": {
                            singular: "Nouvelle option"
                          },
                          "ja-JP": {
                            singular: "新しいオプション"
                          },
                          "ko-KR": {
                            singular: "새 옵션"
                          },
                          "pt-BR": {
                            singular: "Nova opção"
                          },
                          "zh-CN": {
                            singular: "新选项"
                          }
                        }
                      })
                    })]
                  })]
                }) : _v65?.type === "date" ? (0, _v1.jsxs)(_v15.FormControl, {
                  children: [(0, _v1.jsx)(_v16.FormLabel, {
                    fontWeight: "bold",
                    fontSize: "sm",
                    children: (0, _v87.translate)({
                      singular: "Default Value",
                      dictionary: {
                        es: {
                          singular: "Valor predeterminado"
                        },
                        "de-DE": {
                          singular: "Standardwert"
                        },
                        "fr-FR": {
                          singular: "Valeur par défaut"
                        },
                        "ja-JP": {
                          singular: "デフォルト値"
                        },
                        "ko-KR": {
                          singular: "기본값"
                        },
                        "pt-BR": {
                          singular: "Valor padrão"
                        },
                        "zh-CN": {
                          singular: "默认值"
                        }
                      }
                    })
                  }), (0, _v1.jsxs)(_v9.DatePicker, {
                    width: "100%",
                    value: _v78 && (_v4 = _v78.match(/^(\d{4})-(\d{2})-(\d{2})/)) ? [new _v7.BokehDate.CalendarDate(Number(_v4[1]), Number(_v4[2]), Number(_v4[3]))] : [],
                    onValueChange: _v0 => {
                      let _v1 = _v0.value?.[0];
                      _v79(_v1 ? _v93(_v1) : "");
                    },
                    children: [(0, _v1.jsx)(_v9.DatePickerControl, {
                      children: (0, _v1.jsxs)(_v21.InputGroup, {
                        children: [(0, _v1.jsx)(_v9.DatePickerInputBase, {
                          asChild: !0,
                          children: (0, _v1.jsx)(_v20.Input, {
                            _focus: {
                              bg: "fill-component"
                            },
                            pr: "40px"
                          })
                        }), (0, _v1.jsx)(_v22.InputRightElement, {
                          children: (0, _v1.jsx)(_v9.DatePickerTrigger, {
                            asChild: !0,
                            children: (0, _v1.jsx)(_v18.IconButton, {
                              "aria-label": (0, _v87.translate)({
                                singular: "Pick date",
                                dictionary: {
                                  es: {
                                    singular: "Seleccionar fecha"
                                  },
                                  "de-DE": {
                                    singular: "Datum wählen"
                                  },
                                  "fr-FR": {
                                    singular: "Choisir la date"
                                  },
                                  "ja-JP": {
                                    singular: "日付を選択"
                                  },
                                  "ko-KR": {
                                    singular: "날짜 선택"
                                  },
                                  "pt-BR": {
                                    singular: "Selecionar data"
                                  },
                                  "zh-CN": {
                                    singular: "选择日期"
                                  }
                                }
                              }),
                              variant: "unstyled",
                              size: "sm",
                              bg: "surface",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              icon: (0, _v1.jsx)(_v60.Calendar, {
                                color: "text-secondary",
                                boxSize: "18px"
                              })
                            })
                          })
                        })]
                      })
                    }), (0, _v1.jsx)(_v10.DatePickerPortal, {
                      children: (0, _v1.jsx)(_v9.DatePickerPositioner, {
                        style: {
                          zIndex: 0
                        },
                        children: (0, _v1.jsx)(_v9.DatePickerContent, {
                          children: (0, _v1.jsx)(_v9.Calendar, {})
                        })
                      })
                    })]
                  })]
                }) : _v65?.type === "bool" ? (0, _v1.jsxs)(_v15.FormControl, {
                  children: [(0, _v1.jsx)(_v16.FormLabel, {
                    fontWeight: "bold",
                    fontSize: "sm",
                    children: (0, _v87.translate)({
                      singular: "Default Value",
                      dictionary: {
                        es: {
                          singular: "Valor predeterminado"
                        },
                        "de-DE": {
                          singular: "Standardwert"
                        },
                        "fr-FR": {
                          singular: "Valeur par défaut"
                        },
                        "ja-JP": {
                          singular: "デフォルト値"
                        },
                        "ko-KR": {
                          singular: "기본값"
                        },
                        "pt-BR": {
                          singular: "Valor padrão"
                        },
                        "zh-CN": {
                          singular: "默认值"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v43.Select, {
                    items: [{
                      label: (0, _v87.translate)({
                        singular: "None",
                        dictionary: {
                          es: {
                            singular: "Ninguno"
                          },
                          "de-DE": {
                            singular: "Kein"
                          },
                          "fr-FR": {
                            singular: "Aucune"
                          },
                          "ja-JP": {
                            singular: "なし"
                          },
                          "ko-KR": {
                            singular: "없음"
                          },
                          "pt-BR": {
                            singular: "Nenhum"
                          },
                          "zh-CN": {
                            singular: "无"
                          }
                        }
                      }),
                      value: ""
                    }, {
                      label: (0, _v87.translate)({
                        singular: "True",
                        dictionary: {
                          es: {
                            singular: "Verdadero"
                          },
                          "de-DE": {
                            singular: "Wahr"
                          },
                          "fr-FR": {
                            singular: "Vrai"
                          },
                          "ja-JP": {
                            singular: "はい"
                          },
                          "ko-KR": {
                            singular: "참"
                          },
                          "pt-BR": {
                            singular: "Verdadeiro"
                          },
                          "zh-CN": {
                            singular: "是"
                          }
                        }
                      }),
                      value: "true"
                    }, {
                      label: (0, _v87.translate)({
                        singular: "False",
                        dictionary: {
                          es: {
                            singular: "Falso"
                          },
                          "de-DE": {
                            singular: "Falsch"
                          },
                          "fr-FR": {
                            singular: "Faux"
                          },
                          "ja-JP": {
                            singular: "いいえ"
                          },
                          "ko-KR": {
                            singular: "거짓"
                          },
                          "pt-BR": {
                            singular: "Falso"
                          },
                          "zh-CN": {
                            singular: "否"
                          }
                        }
                      }),
                      value: "false"
                    }],
                    placeholder: (0, _v87.translate)({
                      singular: "Select default value",
                      dictionary: {
                        es: {
                          singular: "Seleccione el valor predeterminado"
                        },
                        "de-DE": {
                          singular: "Standardwert auswählen"
                        },
                        "fr-FR": {
                          singular: "Sélectionner la valeur par défaut"
                        },
                        "ja-JP": {
                          singular: "デフォルト値を選択"
                        },
                        "ko-KR": {
                          singular: "기본값 선택"
                        },
                        "pt-BR": {
                          singular: "Selecione o valor padrão"
                        },
                        "zh-CN": {
                          singular: "选择默认值"
                        }
                      }
                    }),
                    value: [_v78],
                    onValueChange: ({
                      value: _v0
                    }) => _v79(_v0[0] ?? ""),
                    positioning: {
                      placement: "bottom",
                      strategy: "fixed"
                    }
                  })]
                }) : _v65?.type === "int" ? (0, _v1.jsxs)(_v15.FormControl, {
                  children: [(0, _v1.jsx)(_v16.FormLabel, {
                    fontWeight: "bold",
                    fontSize: "sm",
                    children: (0, _v87.translate)({
                      singular: "Default Value",
                      dictionary: {
                        es: {
                          singular: "Valor predeterminado"
                        },
                        "de-DE": {
                          singular: "Standardwert"
                        },
                        "fr-FR": {
                          singular: "Valeur par défaut"
                        },
                        "ja-JP": {
                          singular: "デフォルト値"
                        },
                        "ko-KR": {
                          singular: "기본값"
                        },
                        "pt-BR": {
                          singular: "Valor padrão"
                        },
                        "zh-CN": {
                          singular: "默认值"
                        }
                      }
                    })
                  }), (0, _v1.jsxs)(_v36.NumberInput, {
                    value: _v78,
                    onChange: _v0 => _v79(_v0),
                    children: [(0, _v1.jsx)(_v36.NumberInputField, {
                      placeholder: (0, _v87.translate)({
                        singular: "Enter default value",
                        dictionary: {
                          es: {
                            singular: "Ingrese el valor predeterminado"
                          },
                          "de-DE": {
                            singular: "Standardwert eingeben"
                          },
                          "fr-FR": {
                            singular: "Saisir la valeur par défaut"
                          },
                          "ja-JP": {
                            singular: "デフォルト値を入力"
                          },
                          "ko-KR": {
                            singular: "기본값을 입력하세요"
                          },
                          "pt-BR": {
                            singular: "Digite um valor padrão"
                          },
                          "zh-CN": {
                            singular: "输入默认值"
                          }
                        }
                      }),
                      _placeholder: {
                        color: "text-tertiary"
                      },
                      _focus: {
                        bg: "fill-component"
                      }
                    }), (0, _v1.jsxs)(_v36.NumberInputStepper, {
                      children: [(0, _v1.jsx)(_v36.NumberIncrementStepper, {}), (0, _v1.jsx)(_v36.NumberDecrementStepper, {})]
                    })]
                  })]
                }) : (0, _v1.jsxs)(_v15.FormControl, {
                  children: [(0, _v1.jsx)(_v16.FormLabel, {
                    fontWeight: "bold",
                    fontSize: "sm",
                    children: (0, _v87.translate)({
                      singular: "Default Value",
                      dictionary: {
                        es: {
                          singular: "Valor predeterminado"
                        },
                        "de-DE": {
                          singular: "Standardwert"
                        },
                        "fr-FR": {
                          singular: "Valeur par défaut"
                        },
                        "ja-JP": {
                          singular: "デフォルト値"
                        },
                        "ko-KR": {
                          singular: "기본값"
                        },
                        "pt-BR": {
                          singular: "Valor padrão"
                        },
                        "zh-CN": {
                          singular: "默认值"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v20.Input, {
                    placeholder: (0, _v87.translate)({
                      singular: "Enter default value",
                      dictionary: {
                        es: {
                          singular: "Ingrese el valor predeterminado"
                        },
                        "de-DE": {
                          singular: "Standardwert eingeben"
                        },
                        "fr-FR": {
                          singular: "Saisir la valeur par défaut"
                        },
                        "ja-JP": {
                          singular: "デフォルト値を入力"
                        },
                        "ko-KR": {
                          singular: "기본값을 입력하세요"
                        },
                        "pt-BR": {
                          singular: "Digite um valor padrão"
                        },
                        "zh-CN": {
                          singular: "输入默认值"
                        }
                      }
                    }),
                    value: _v78,
                    onChange: _v0 => {
                      _v0.target.value.length > 50 || _v79(_v0.target.value);
                    },
                    maxLength: 50,
                    _placeholder: {
                      color: "text-tertiary"
                    },
                    _focus: {
                      bg: "fill-component"
                    }
                  }), _v65?.type === "str" && (0, _v1.jsxs)(_v17.HStack, {
                    justifyContent: "space-between",
                    mt: "xs",
                    children: [(0, _v1.jsx)(_v52.Text, {
                      variant: "body-sm",
                      color: "text-tertiary",
                      children: (0, _v87.translate)({
                        singular: "50 characters limit.",
                        dictionary: {
                          es: {
                            singular: "Límite de 50 caracteres."
                          },
                          "de-DE": {
                            singular: "Max. 50 Zeichen."
                          },
                          "fr-FR": {
                            singular: "Limite de 50 caractères."
                          },
                          "ja-JP": {
                            singular: "最大50文字です。"
                          },
                          "ko-KR": {
                            singular: "최대 50자."
                          },
                          "pt-BR": {
                            singular: "Limite de 50 caracteres."
                          },
                          "zh-CN": {
                            singular: "最多 50 个字符。"
                          }
                        }
                      })
                    }), (0, _v1.jsxs)(_v52.Text, {
                      variant: "body-sm",
                      color: _v78.length >= 50 ? "status-destructive-primary" : "text-tertiary",
                      children: [_v78.length, "/50"]
                    })]
                  })]
                })
              })
            })]
          }), (0, _v1.jsx)(_v8.Box, {
            h: "1px",
            bg: "stroke"
          }), (0, _v1.jsx)(_v33.ModalFooter, {
            children: (0, _v1.jsxs)(_v17.HStack, {
              spacing: "3",
              children: [(0, _v1.jsx)(_v11.Button, {
                variant: "secondary",
                size: "md",
                onClick: _v105,
                children: (0, _v87.translate)({
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
              }), (0, _v1.jsx)(_v11.Button, {
                variant: "primary",
                size: "md",
                onClick: _v104 ? _v93 : _v110,
                isDisabled: !_v72.trim() || _v128 || (_v65?.type === "select" || _v65?.type === "multi-select") && _v80.some(_v0 => !_v0.value.trim()),
                children: (0, _v87.translate)({
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
            })
          })]
        })]
      }), (0, _v1.jsxs)(_v29.Modal, {
        isOpen: _v86,
        onClose: _v88,
        children: [(0, _v1.jsx)(_v35.ModalOverlay, {}), (0, _v1.jsxs)(_v32.ModalContent, {
          maxW: (0, _v42.rem)(480),
          children: [(0, _v1.jsx)(_v34.ModalHeader, {
            children: (0, _v87.translate)({
              singular: "Delete Option",
              dictionary: {
                es: {
                  singular: "Eliminar opción"
                },
                "de-DE": {
                  singular: "Option löschen"
                },
                "fr-FR": {
                  singular: "Supprimer l’option"
                },
                "ja-JP": {
                  singular: "オプションを削除"
                },
                "ko-KR": {
                  singular: "옵션 삭제"
                },
                "pt-BR": {
                  singular: "Excluir opção"
                },
                "zh-CN": {
                  singular: "删除选项"
                }
              }
            })
          }), (0, _v1.jsx)(_v31.ModalCloseButton, {}), (0, _v1.jsx)(_v30.ModalBody, {
            p: "7",
            children: (0, _v1.jsx)(_v52.Text, {
              variant: "body-md",
              children: (0, _v87.translate)({
                singular: "Deleting this option will remove it from all videos. Videos that used it will no longer have a value assigned.",
                dictionary: {
                  es: {
                    singular: "Eliminar esta opción la quitará de todos los videos. Los videos que la usaban ya no tendrán un valor asignado."
                  },
                  "de-DE": {
                    singular: "Beim Löschen dieser Option wird sie aus allen Videos entfernt. Videos, die sie verwendet haben, haben anschließend keinen zugewiesenen Wert mehr."
                  },
                  "fr-FR": {
                    singular: "La suppression de cette option la retirera de toutes les vidéos. Les vidéos qui l’utilisaient n’auront plus de valeur assignée."
                  },
                  "ja-JP": {
                    singular: "このオプションを削除すると、すべての動画からこのオプションが削除されます。これを使用していた動画にはもはや値が割り当てられません。"
                  },
                  "ko-KR": {
                    singular: "이 옵션을 삭제하면 모든 동영상에서 제거됩니다. 이 옵션을 사용하던 동영상에는 더 이상 값이 할당되지 않습니다."
                  },
                  "pt-BR": {
                    singular: "Excluir esta opção irá removê-la de todos os vídeos. Vídeos que a usavam não terão mais um valor atribuído."
                  },
                  "zh-CN": {
                    singular: "删除此选项将从所有视频中移除它。使用过该选项的视频将不再有分配的值。"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v33.ModalFooter, {
            children: (0, _v1.jsxs)(_v17.HStack, {
              spacing: "3",
              children: [(0, _v1.jsx)(_v11.Button, {
                variant: "secondary",
                size: "md",
                onClick: _v88,
                children: (0, _v87.translate)({
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
              }), (0, _v1.jsx)(_v11.Button, {
                variant: "destructive",
                size: "md",
                onClick: () => {
                  if (null === _v84) return;
                  _v81(_v80.filter((_v0, _v1) => _v1 !== _v84));
                  let _v0 = new Set();
                  for (let _v0 of _v82) _v0 < _v84 ? _v0.add(_v0) : _v0 > _v84 && _v0.add(_v0 - 1);
                  _v83(_v0), _v85(null), _v88();
                },
                children: (0, _v87.translate)({
                  singular: "Delete",
                  dictionary: {
                    es: {
                      singular: "Eliminar"
                    },
                    "de-DE": {
                      singular: "Löschen"
                    },
                    "fr-FR": {
                      singular: "Supprimer"
                    },
                    "ja-JP": {
                      singular: "削除"
                    },
                    "ko-KR": {
                      singular: "삭제"
                    },
                    "pt-BR": {
                      singular: "Excluir"
                    },
                    "zh-CN": {
                      singular: "删除"
                    }
                  }
                })
              })]
            })
          })]
        })]
      }), (0, _v1.jsxs)(_v29.Modal, {
        isOpen: _v89,
        onClose: _v91,
        size: "sm",
        children: [(0, _v1.jsx)(_v35.ModalOverlay, {}), (0, _v1.jsxs)(_v32.ModalContent, {
          children: [(0, _v1.jsx)(_v34.ModalHeader, {
            fontWeight: "bold",
            children: (0, _v87.translate)({
              singular: "Discard changes?",
              dictionary: {
                es: {
                  singular: "¿Descartar cambios?"
                },
                "de-DE": {
                  singular: "Änderungen verwerfen?"
                },
                "fr-FR": {
                  singular: "Annuler les modifications ?"
                },
                "ja-JP": {
                  singular: "変更を破棄しますか？"
                },
                "ko-KR": {
                  singular: "변경 사항을 버리시겠습니까?"
                },
                "pt-BR": {
                  singular: "Descartar alterações?"
                },
                "zh-CN": {
                  singular: "放弃更改？"
                }
              }
            })
          }), (0, _v1.jsx)(_v31.ModalCloseButton, {}), (0, _v1.jsx)(_v30.ModalBody, {
            children: (0, _v1.jsxs)(_v58.VStack, {
              spacing: "sm",
              align: "stretch",
              children: [(0, _v1.jsx)(_v52.Text, {
                variant: "body-md",
                children: (0, _v87.translate)({
                  singular: "Are you sure you want to discard your changes?",
                  dictionary: {
                    es: {
                      singular: "¿Está seguro de que desea descartar sus cambios?"
                    },
                    "de-DE": {
                      singular: "Möchten Sie Ihre Änderungen wirklich verwerfen?"
                    },
                    "fr-FR": {
                      singular: "Êtes-vous sûr de vouloir annuler vos modifications ?"
                    },
                    "ja-JP": {
                      singular: "変更を破棄してもよろしいですか？"
                    },
                    "ko-KR": {
                      singular: "변경 사항을 버리시겠습니까?"
                    },
                    "pt-BR": {
                      singular: "Tem certeza de que deseja descartar suas alterações?"
                    },
                    "zh-CN": {
                      singular: "您确定要放弃更改吗？"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v52.Text, {
                variant: "body-md",
                children: (0, _v87.translate)({
                  singular: "All unsaved edits will be lost.",
                  dictionary: {
                    es: {
                      singular: "Todos los cambios no guardados se perderán."
                    },
                    "de-DE": {
                      singular: "Alle nicht gespeicherten Änderungen gehen verloren."
                    },
                    "fr-FR": {
                      singular: "Toutes les modifications non enregistrées seront perdues."
                    },
                    "ja-JP": {
                      singular: "保存されていない編集内容はすべて失われます。"
                    },
                    "ko-KR": {
                      singular: "저장되지 않은 모든 편집 내용은 사라집니다."
                    },
                    "pt-BR": {
                      singular: "Todas as edições não salvas serão perdidas."
                    },
                    "zh-CN": {
                      singular: "所有未保存的编辑将丢失。"
                    }
                  }
                })
              })]
            })
          }), (0, _v1.jsx)(_v33.ModalFooter, {
            children: (0, _v1.jsxs)(_v17.HStack, {
              spacing: "sm",
              children: [(0, _v1.jsx)(_v11.Button, {
                variant: "tertiary",
                size: "sm",
                onClick: () => {
                  _v91(), _v69();
                },
                children: (0, _v87.translate)({
                  singular: "Discard",
                  dictionary: {
                    es: {
                      singular: "Descartar"
                    },
                    "de-DE": {
                      singular: "Verwerfen"
                    },
                    "fr-FR": {
                      singular: "Ignorer"
                    },
                    "ja-JP": {
                      singular: "破棄する"
                    },
                    "ko-KR": {
                      singular: "폐기"
                    },
                    "pt-BR": {
                      singular: "Descartar"
                    },
                    "zh-CN": {
                      singular: "丢弃"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v11.Button, {
                variant: "primary",
                size: "sm",
                onClick: _v91,
                children: (0, _v87.translate)({
                  singular: "Keep Editing",
                  dictionary: {
                    es: {
                      singular: "Seguir editando"
                    },
                    "de-DE": {
                      singular: "Weiter bearbeiten"
                    },
                    "fr-FR": {
                      singular: "Continuer à modifier"
                    },
                    "ja-JP": {
                      singular: "編集を続ける"
                    },
                    "ko-KR": {
                      singular: "편집 계속하기"
                    },
                    "pt-BR": {
                      singular: "Continuar editando"
                    },
                    "zh-CN": {
                      singular: "继续编辑"
                    }
                  }
                })
              })]
            })
          })]
        })]
      }), (0, _v1.jsxs)(_v29.Modal, {
        isOpen: _v92,
        onClose: _v94,
        size: "md",
        children: [(0, _v1.jsx)(_v35.ModalOverlay, {}), (0, _v1.jsxs)(_v32.ModalContent, {
          children: [(0, _v1.jsx)(_v34.ModalHeader, {
            fontWeight: "bold",
            children: (0, _v87.translate)({
              singular: "Confirm option changes",
              dictionary: {
                es: {
                  singular: "Confirmar cambios de la opción"
                },
                "de-DE": {
                  singular: "Änderungen an Optionen bestätigen"
                },
                "fr-FR": {
                  singular: "Confirmer les modifications de l’option"
                },
                "ja-JP": {
                  singular: "オプションの変更を確認"
                },
                "ko-KR": {
                  singular: "옵션 변경 확인"
                },
                "pt-BR": {
                  singular: "Confirmar alterações na opção"
                },
                "zh-CN": {
                  singular: "确认选项更改"
                }
              }
            })
          }), (0, _v1.jsx)(_v31.ModalCloseButton, {}), (0, _v1.jsx)(_v30.ModalBody, {
            children: (0, _v1.jsxs)(_v58.VStack, {
              spacing: "md",
              align: "stretch",
              children: [(0, _v1.jsx)(_v52.Text, {
                variant: "body-md",
                children: (0, _v87.translate)({
                  singular: "The following changes will be applied to all videos using this field:",
                  dictionary: {
                    es: {
                      singular: "Los siguientes cambios se aplicarán a todos los videos que usan este campo:"
                    },
                    "de-DE": {
                      singular: "Die folgenden Änderungen werden auf alle Videos angewendet, die dieses Feld verwenden:"
                    },
                    "fr-FR": {
                      singular: "Les modifications suivantes seront appliquées à toutes les vidéos utilisant ce champ :"
                    },
                    "ja-JP": {
                      singular: "以下の変更はこのフィールドを使用しているすべての動画に適用されます："
                    },
                    "ko-KR": {
                      singular: "다음 변경 사항은 이 필드를 사용하는 모든 동영상에 적용됩니다:"
                    },
                    "pt-BR": {
                      singular: "As seguintes alterações serão aplicadas a todos os vídeos que usam este campo:"
                    },
                    "zh-CN": {
                      singular: "以下更改将应用到使用此字段的所有视频："
                    }
                  }
                })
              }), _v103.renamed.length > 0 && (0, _v1.jsxs)(_v8.Box, {
                children: [(0, _v1.jsx)(_v52.Text, {
                  fontWeight: "bold",
                  variant: "heading-sm",
                  mb: "xs",
                  children: (0, _v87.translate)({
                    singular: "Renamed",
                    dictionary: {
                      es: {
                        singular: "Renombrado"
                      },
                      "de-DE": {
                        singular: "Umbenannt"
                      },
                      "fr-FR": {
                        singular: "Renommé"
                      },
                      "ja-JP": {
                        singular: "名前が変更されました。"
                      },
                      "ko-KR": {
                        singular: "이름 변경됨"
                      },
                      "pt-BR": {
                        singular: "Renomeado"
                      },
                      "zh-CN": {
                        singular: "已重命名"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v58.VStack, {
                  spacing: "xs",
                  align: "stretch",
                  children: _v103.renamed.map((_v0, _v1) => (0, _v1.jsxs)(_v17.HStack, {
                    spacing: "xs",
                    children: [(0, _v1.jsx)(_v47.Tag, {
                      size: "sm",
                      bg: "fill-component",
                      children: (0, _v1.jsx)(_v47.TagLabel, {
                        children: _v0.from
                      })
                    }), (0, _v1.jsx)(_v52.Text, {
                      fontSize: "sm",
                      color: "text-secondary",
                      children: "→"
                    }), (0, _v1.jsx)(_v47.Tag, {
                      size: "sm",
                      bg: "fill-component",
                      children: (0, _v1.jsx)(_v47.TagLabel, {
                        children: _v0.to
                      })
                    })]
                  }, _v1))
                })]
              }), _v103.added.length > 0 && (0, _v1.jsxs)(_v8.Box, {
                children: [(0, _v1.jsx)(_v52.Text, {
                  fontWeight: "bold",
                  variant: "heading-sm",
                  mb: "xs",
                  children: (0, _v87.translate)({
                    singular: "Added",
                    dictionary: {
                      es: {
                        singular: "Añadido"
                      },
                      "de-DE": {
                        singular: "Hinzugefügt"
                      },
                      "fr-FR": {
                        singular: "Ajouté"
                      },
                      "ja-JP": {
                        singular: "追加した日"
                      },
                      "ko-KR": {
                        singular: "추가됨"
                      },
                      "pt-BR": {
                        singular: "Adicionado(a)"
                      },
                      "zh-CN": {
                        singular: "已添加"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v17.HStack, {
                  spacing: "xs",
                  flexWrap: "wrap",
                  children: _v103.added.map((_v0, _v1) => (0, _v1.jsx)(_v47.Tag, {
                    size: "sm",
                    bg: "fill-component",
                    children: (0, _v1.jsx)(_v47.TagLabel, {
                      children: _v0
                    })
                  }, _v1))
                })]
              }), _v103.deleted.length > 0 && (0, _v1.jsxs)(_v8.Box, {
                children: [(0, _v1.jsx)(_v52.Text, {
                  fontWeight: "bold",
                  variant: "heading-sm",
                  mb: "xs",
                  children: (0, _v87.translate)({
                    singular: "Deleted",
                    dictionary: {
                      es: {
                        singular: "Eliminado"
                      },
                      "de-DE": {
                        singular: "Gelöscht"
                      },
                      "fr-FR": {
                        singular: "Supprimé"
                      },
                      "ja-JP": {
                        singular: "削除されました。"
                      },
                      "ko-KR": {
                        singular: "삭제됨"
                      },
                      "pt-BR": {
                        singular: "Excluído"
                      },
                      "zh-CN": {
                        singular: "已删除"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v17.HStack, {
                  spacing: "xs",
                  flexWrap: "wrap",
                  children: _v103.deleted.map((_v0, _v1) => (0, _v1.jsx)(_v47.Tag, {
                    size: "sm",
                    bg: "status-destructive-secondary",
                    children: (0, _v1.jsx)(_v47.TagLabel, {
                      children: _v0
                    })
                  }, _v1))
                })]
              })]
            })
          }), (0, _v1.jsx)(_v33.ModalFooter, {
            children: (0, _v1.jsxs)(_v17.HStack, {
              spacing: "sm",
              children: [(0, _v1.jsx)(_v11.Button, {
                variant: "tertiary",
                size: "sm",
                onClick: _v94,
                children: (0, _v87.translate)({
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
              }), (0, _v1.jsx)(_v11.Button, {
                variant: "primary",
                size: "sm",
                onClick: () => {
                  _v94(), _v110();
                },
                children: (0, _v87.translate)({
                  singular: "Confirm",
                  dictionary: {
                    es: {
                      singular: "Confirmar"
                    },
                    "de-DE": {
                      singular: "Bestätigen"
                    },
                    "fr-FR": {
                      singular: "Confirmer"
                    },
                    "ja-JP": {
                      singular: "確定"
                    },
                    "ko-KR": {
                      singular: "확인"
                    },
                    "pt-BR": {
                      singular: "Confirmar"
                    },
                    "zh-CN": {
                      singular: "确认"
                    }
                  }
                })
              })]
            })
          })]
        })]
      })]
    });
  }], 0);
}