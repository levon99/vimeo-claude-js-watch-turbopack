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
    _v20 = _v0.i(0);
  async function _v21({
    baseUrl: _v0,
    where: {
      liveEventId: _v1,
      speakerProfileId: _v2
    },
    ..._v3
  }) {
    return (0, _v19.measureLatency)("deleteLiveEventSpeakerProfile", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v1}/speaker_profiles/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v20.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v20.deepCamelCase)(_v1);
    });
  }
  async function _v22({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      liveEventId: _v3,
      speakerProfileId: _v4
    },
    ..._v5
  }) {
    return (0, _v19.measureLatency)("patchLiveEventSpeakerProfile", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v3}/speaker_profiles/${_v4}?fields=${_v1.map(_v20.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v20.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v20.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v20.deepCamelCase)(_v1);
    });
  }
  var _v23 = _v0.i(0),
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
    _v53 = _v0.i(0);
  let _v54 = _v0 => (0, _v1.jsx)(_v53.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.348 10.41a11.002 11.002 0 0 1 10-6.41c4.438 0 8.26 2.63 9.999 6.41a3.807 3.807 0 0 1 0 3.18 11.002 11.002 0 0 1-10 6.41 11.002 11.002 0 0 1-10-6.41 3.808 3.808 0 0 1 0-3.18ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
      fill: "currentColor"
    })
  });
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  _v0.i(0);
  var _v60 = _v0.i(0);
  async function _v61({
    baseUrl: _v0,
    where: {
      personProfileId: _v1
    },
    ..._v2
  }) {
    return (0, _v19.measureLatency)("deletePersonProfile", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/person_profiles/${_v1}`, {
        ..._v2,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v20.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v20.deepCamelCase)(_v1);
    });
  }
  async function _v62({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      personProfileId: _v3
    },
    ..._v4
  }) {
    return (0, _v19.measureLatency)("patchPersonProfile", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/person_profiles/${_v3}?fields=${_v1.map(_v20.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v20.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v20.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v20.deepCamelCase)(_v1);
    });
  }
  async function _v63({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v19.measureLatency)("getUserPersonProfiles", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/person_profiles?${(0, _v20.searchQueryString)(_v3)}&fields=${_v1.map(_v20.intoSnakeCase).join(",")}`, {
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
  async function _v64({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v19.measureLatency)("postUserPersonProfiles", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/person_profiles?fields=${_v1.map(_v20.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v20.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v20.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v20.deepCamelCase)(_v1);
    });
  }
  var _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  async function _v74({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      personProfileId: _v3,
      pictureId: _v4
    },
    ..._v5
  }) {
    return (0, _v19.measureLatency)("patchPersonProfilePicture", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/person_profiles/${_v3}/pictures/${_v4}?fields=${_v1.map(_v20.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v20.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v20.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v20.deepCamelCase)(_v1);
    });
  }
  async function _v75({
    baseUrl: _v0,
    select: _v1,
    where: {
      personProfileId: _v2
    },
    ..._v3
  }) {
    return (0, _v19.measureLatency)("postPersonProfilePictures", "POST", async () => {
      let _v0 = await fetch(`${_v0}/person_profiles/${_v2}/pictures?fields=${_v1.map(_v20.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST"
      });
      if (!_v0.ok) throw new _v20.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v20.deepCamelCase)(_v1);
    });
  }
  var _v76 = _v0.i(0),
    _v77 = _v0.i(0);
  let _v78 = ["uri", "link", "baseLink"];
  async function _v79({
    baseUrl: _v0,
    headers: _v1,
    personProfileId: _v2,
    upload: _v3,
    activate: _v4 = !0
  }) {
    let _v5 = await _v75({
      baseUrl: _v0,
      headers: _v1,
      where: {
        personProfileId: _v2
      },
      select: _v78
    });
    if (!_v5?.link) throw new _v77.LiveError("Thumbnail upload link missing in create response.", {
      code: _v76.ELiveErrorCode.API_ERROR
    });
    let _v6 = await fetch(_v5.link, {
      method: "PUT",
      body: _v3.body,
      headers: {
        "Content-Type": _v3.contentType
      }
    });
    if (!_v6.ok) throw new _v20.NetworkError("Thumbnail upload failed.", _v6.status, _v6);
    let _v7 = _v5.uri.split("/").pop() ?? "";
    if ("" === _v7) throw new _v77.LiveError("Could not resolve picture uid from created picture.", {
      code: _v76.ELiveErrorCode.API_ERROR
    });
    return _v4 && (await _v74({
      baseUrl: _v0,
      headers: _v1,
      where: {
        personProfileId: _v2,
        pictureId: _v7
      },
      select: ["uri", "active"],
      variables: {
        active: !0
      }
    })), {
      picture: _v5,
      pictureId: _v7
    };
  }
  var _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0);
  function _v86({
    image: _v0,
    isOpen: _v1,
    onDismiss: _v2,
    onSaved: _v3
  }) {
    let [_v4, _v5] = (0, _v13.useState)(),
      [_v6, _v7] = (0, _v13.useState)(50),
      {
        width: _v8
      } = (0, _v85.useWindowSize)(),
      _v9 = (0, _v13.useRef)(null),
      _v10 = (0, _v82.useBreakpointValue)({
        base: 160,
        md: 200
      }) || 200,
      _v11 = (0, _v13.useMemo)(() => _v4 ? 100 * _v10 / Math.min(_v4.naturalHeight, _v4.naturalWidth) : 0, [_v10, _v4]);
    return (0, _v13.useEffect)(() => {
      let _v0 = !1,
        _v1 = new FileReader();
      return _v1.onload = () => {
        if (_v0 || "string" != typeof _v1.result) return;
        let _v0 = new Image();
        _v0.onload = () => {
          _v0 || _v5(_v0);
        }, _v0.src = _v1.result;
      }, _v1.readAsDataURL(_v0), () => {
        _v0 = !0;
      };
    }, [_v0]), (0, _v1.jsxs)(_v35.Modal, {
      closeOnOverlayClick: !1,
      size: "lg",
      isCentered: !0,
      isOpen: _v1,
      onClose: _v2,
      children: [(0, _v1.jsx)(_v40.ModalOverlay, {}), (0, _v1.jsxs)(_v37.ModalContent, {
        children: [(0, _v1.jsx)(_v39.ModalHeader, {
          children: (0, _v10.translate)({
            singular: "Upload speaker photo",
            dictionary: {
              es: {
                singular: "Subir foto del ponente"
              },
              "de-DE": {
                singular: "Sprecherfoto hochladen"
              },
              "fr-FR": {
                singular: "Téléverser la photo de l'intervenant"
              },
              "ja-JP": {
                singular: "スピーカーの写真をアップロード"
              },
              "ko-KR": {
                singular: "발표자 사진 업로드"
              },
              "pt-BR": {
                singular: "Carregar foto do palestrante"
              },
              "zh-CN": {
                singular: "上传演讲者照片"
              }
            }
          })
        }), (0, _v1.jsx)(_v36.ModalBody, {
          px: 0,
          display: "flex",
          flexDirection: "column",
          gap: "md",
          children: _v4 ? (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v83.ImageCrop, {
              ref: _v9,
              image: _v4,
              zoomRatio: (_v6 + _v11) / 100,
              imageCropCircleDiameter: _v10,
              windowWidth: _v8,
              cropShape: "square"
            }), (0, _v1.jsx)(_v84.ImageCropSlider, {
              value: _v6,
              onChange: _v7
            })]
          }) : (0, _v1.jsx)(_v7.Flex, {
            align: "center",
            justify: "center",
            h: {
              base: (0, _v8.rem)(366),
              md: (0, _v8.rem)(284)
            },
            children: (0, _v1.jsx)(_v81.Spinner, {
              size: "md"
            })
          })
        }), (0, _v1.jsxs)(_v38.ModalFooter, {
          justifyContent: "flex-end",
          children: [(0, _v1.jsx)(_v14.Button, {
            onClick: _v2,
            variant: "secondary",
            children: (0, _v10.translate)({
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
          }), (0, _v1.jsx)(_v14.Button, {
            isDisabled: !_v4,
            onClick: () => {
              let _v0 = _v9.current?.calculateCropSize();
              _v0 && _v3({
                x: _v0.xMin,
                y: _v0.yMin,
                width: _v0.xMax - _v0.xMin,
                height: _v0.yMax - _v0.yMin
              });
            },
            variant: "primary",
            children: (0, _v10.translate)({
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
  }
  function _v87({
    id: _v0,
    fileName: _v1,
    fileSize: _v2,
    previewSrc: _v3,
    onCropSaved: _v4,
    onRemove: _v5
  }) {
    let [_v6, _v7] = (0, _v13.useState)(!1),
      [_v8, _v9] = (0, _v13.useState)(),
      _v10 = (0, _v18.useToast)();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v80.ImageUploader, {
        id: _v0,
        label: (0, _v10.translate)({
          singular: "Upload picture",
          dictionary: {
            es: {
              singular: "Subir imagen"
            },
            "de-DE": {
              singular: "Bild hochladen"
            },
            "fr-FR": {
              singular: "Téléverser l'image"
            },
            "ja-JP": {
              singular: "画像をアップロード"
            },
            "ko-KR": {
              singular: "사진 업로드"
            },
            "pt-BR": {
              singular: "Enviar imagem"
            },
            "zh-CN": {
              singular: "上传图片"
            }
          }
        }),
        accept: "image/jpeg,image/png,image/webp,image/gif",
        acceptedFormats: (0, _v10.translate)({
          singular: "JPEG, PNG, WebP, or GIF",
          dictionary: {
            es: {
              singular: "JPEG, PNG, WebP o GIF"
            },
            "de-DE": {
              singular: "JPEG, PNG, WebP oder GIF"
            },
            "fr-FR": {
              singular: "JPEG, PNG, WebP ou GIF"
            },
            "ja-JP": {
              singular: "JPEG、PNG、WebP、またはGIF"
            },
            "ko-KR": {
              singular: "JPEG, PNG, WebP, 또는 GIF"
            },
            "pt-BR": {
              singular: "JPEG, PNG, WebP, ou GIF"
            },
            "zh-CN": {
              singular: "JPEG、PNG、WebP 或 GIF"
            }
          }
        }),
        fileName: _v1,
        fileSize: _v2,
        previewSrc: _v3,
        status: _v3 ? "uploaded" : "default",
        helperText: (0, _v10.translate)({
          singular: "Max size 2MB",
          dictionary: {
            es: {
              singular: "Tamaño máximo 2 MB"
            },
            "de-DE": {
              singular: "Max. Größe 2 MB"
            },
            "fr-FR": {
              singular: "Taille max 2MB"
            },
            "ja-JP": {
              singular: "最大サイズ 2MB"
            },
            "ko-KR": {
              singular: "최대 크기 2MB"
            },
            "pt-BR": {
              singular: "Tamanho máximo 2MB"
            },
            "zh-CN": {
              singular: "最大 2MB"
            }
          }
        }),
        size: "xs",
        onRemove: _v5,
        onSelect: _v0 => {
          if (0 === _v0.length) return;
          let _v1 = _v0[0];
          _v1.size > 0 ? _v10({
            status: "error",
            duration: 0,
            title: (0, _v10.translate)({
              singular: "Your file can’t be uploaded because it exceeds the size limit of {FILE_SIZE_LIMIT}MB",
              replacements: {
                FILE_SIZE_LIMIT: 2
              },
              dictionary: {
                es: {
                  singular: "Tu archivo no se puede subir porque excede el límite de {FILE_SIZE_LIMIT}MB"
                },
                "de-DE": {
                  singular: "Ihre Datei kann nicht hochgeladen werden, da sie die Größengrenze von {FILE_SIZE_LIMIT}MB überschreitet"
                },
                "fr-FR": {
                  singular: "Votre fichier ne peut pas être téléchargé car il dépasse la taille maximale autorisée de {FILE_SIZE_LIMIT}MB"
                },
                "ja-JP": {
                  singular: "ファイルをアップロードできません。{FILE_SIZE_LIMIT}MBのサイズ制限を超えています"
                },
                "ko-KR": {
                  singular: "{FILE_SIZE_LIMIT}MB의 크기 제한을 초과하여 파일을 업로드할 수 없습니다."
                },
                "pt-BR": {
                  singular: "Seu arquivo não pode ser enviado porque excede o limite de tamanho de {FILE_SIZE_LIMIT}MB"
                },
                "zh-CN": {
                  singular: "您的文件无法上传，因为其超过了 {FILE_SIZE_LIMIT}MB 的大小限制"
                }
              }
            })
          }) : (_v9(_v1), _v7(!0));
        }
      }), _v8 ? (0, _v1.jsx)(_v86, {
        image: _v8,
        isOpen: _v6,
        onDismiss: () => {
          _v7(!1), _v9(void 0);
        },
        onSaved: _v0 => {
          _v8 && _v4(_v8, _v0), _v7(!1), _v9(void 0);
        }
      }) : null]
    });
  }
  let _v88 = async (_v0, _v1) => {
    try {
      let _v0 = await createImageBitmap(_v0),
        _v1 = document.createElement("canvas");
      _v1.width = 48, _v1.height = 48;
      let _v2 = _v1.getContext("2d");
      if (!_v2) return _v0.close(), URL.createObjectURL(_v0);
      _v2.drawImage(_v0, _v1.x, _v1.y, _v1.width, _v1.height, 0, 0, 48, 48), _v0.close();
      let _v3 = await new Promise(_v0 => _v1.toBlob(_v0));
      return URL.createObjectURL(_v3 ?? _v0);
    } catch {
      return URL.createObjectURL(_v0);
    }
  };
  function _v89({
    initialSpeaker: _v0,
    isOpen: _v1,
    mode: _v2,
    speakerSection: _v3,
    onClose: _v4,
    onSaved: _v5
  }) {
    let [_v6, _v7] = (0, _v13.useState)(_v0),
      [_v8, _v9] = (0, _v13.useState)(!1),
      [_v10, _v11] = (0, _v13.useState)(null),
      [_v12, _v13] = (0, _v13.useState)(null),
      _v14 = (0, _v66.useSessionOwnerId)(),
      {
        baseUrl: _v15,
        jwt: _v16
      } = (0, _v23.useGctlConfig)(),
      _v17 = (0, _v18.useToast)(),
      {
        trackSingleEventCustomizationSpeakerSaved: _v18
      } = (0, _v28.useSingleEventCustomizationTracking)(),
      [_v19, {
        data: _v20,
        error: _v21,
        loading: _v22
      }] = function () {
        let {
            baseUrl: _v0,
            jwt: _v1,
            xVimeoPage: _v2,
            locale: _v3
          } = (0, _v23.useGctlConfig)(),
          [_v4, _v5] = (0, _v59.useInternalState)();
        return [(0, _v13.useCallback)(async _v0 => {
          _v5({
            type: "REQUEST"
          });
          try {
            let _v0 = await _v64({
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
      }(),
      [_v23, {
        data: _v24,
        error: _v25,
        loading: _v26
      }] = function () {
        let {
            mutate: _v0
          } = (0, _v60.useSWRConfig)(),
          {
            baseUrl: _v1,
            jwt: _v2,
            xVimeoPage: _v3,
            locale: _v4
          } = (0, _v23.useGctlConfig)(),
          [_v5, _v6] = (0, _v59.useInternalState)();
        return [(0, _v13.useCallback)(async _v0 => {
          _v6({
            type: "REQUEST"
          });
          try {
            let _v0 = await _v0(`/person_profiles/${_v0.where.personProfileId}${(0, _v59.serializeQuery)(_v0)}`, _v62({
              ..._v0,
              baseUrl: _v1,
              headers: {
                ..._v0.headers,
                "Content-Type": "application/json",
                Authorization: _v2 ? `jwt ${_v2}` : "",
                "Vimeo-Page": `${_v3}`,
                "Accept-Language": _v4 ?? "en"
              }
            }), !1);
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
      }(),
      _v27 = _v0 => {
        _v17({
          status: "error",
          duration: 0,
          title: (0, _v27.getErrorToastTitle)(_v0, (0, _v10.translate)({
            singular: "Something went wrong saving, please check the input blanks and try again.",
            dictionary: {
              es: {
                singular: "Se produjo un error al guardar, por favor revise los campos y vuelva a intentarlo."
              },
              "de-DE": {
                singular: "Beim Speichern ist ein Fehler aufgetreten. Bitte überprüfen Sie die Eingabefelder und versuchen Sie es erneut."
              },
              "fr-FR": {
                singular: "Une erreur est survenue lors de l'enregistrement, veuillez vérifier les champs laissés vides et réessayer."
              },
              "ja-JP": {
                singular: "保存中に問題が発生しました。入力欄をご確認のうえ、もう一度お試しください。"
              },
              "ko-KR": {
                singular: "저장하는 동안 문제가 발생했습니다. 입력란을 확인한 후 다시 시도하세요."
              },
              "pt-BR": {
                singular: "Ocorreu um erro ao salvar, por favor, verifique os campos de entrada e tente novamente."
              },
              "zh-CN": {
                singular: "保存时发生错误，请检查输入项并重试。"
              }
            }
          }))
        });
      },
      _v28 = (0, _v13.useEffectEvent)(async _v0 => {
        if (_v10 && null != _v15) try {
          await _v79({
            baseUrl: _v15,
            headers: {
              Authorization: null != _v16 ? `jwt ${_v16}` : "",
              "Content-Type": "application/json"
            },
            personProfileId: _v0,
            upload: {
              body: _v10.file,
              contentType: _v10.file.type
            }
          });
        } catch (_v0) {
          _v17({
            status: "error",
            duration: 0,
            title: (0, _v27.getErrorToastTitle)(_v0, (0, _v10.translate)({
              singular: "Your speaker was saved, but the photo failed to upload.",
              dictionary: {
                es: {
                  singular: "El orador se guardó, pero no se pudo subir la foto."
                },
                "de-DE": {
                  singular: "Ihr Sprecher wurde gespeichert, aber das Foto konnte nicht hochgeladen werden."
                },
                "fr-FR": {
                  singular: "Votre intervenant a été enregistré, mais la photo n'a pas pu être téléversée."
                },
                "ja-JP": {
                  singular: "スピーカーは保存されましたが、写真のアップロードに失敗しました。"
                },
                "ko-KR": {
                  singular: "연사가 저장되었지만, 사진 업로드에 실패했습니다."
                },
                "pt-BR": {
                  singular: "Seu palestrante foi salvo, mas a foto não pôde ser enviada."
                },
                "zh-CN": {
                  singular: "您的演讲者已保存，但照片上传失败。"
                }
              }
            }))
          });
        }
        _v18({
          speakerAction: "add" === _v2 ? "created" : "edited",
          speakerSection: "add" === _v2 ? _v3 ?? null : null
        }), _v5(_v0), _v4();
      }),
      _v29 = _v20 ?? _v24,
      _v30 = _v22 || _v26 || null != _v29;
    (0, _v13.useEffect)(() => {
      _v29 && _v28(_v29.id);
    }, [_v29]);
    let _v31 = _v21 ?? _v25,
      _v32 = (0, _v13.useRef)(null),
      _v33 = (0, _v13.useEffectEvent)(_v0 => _v27(_v0));
    (0, _v13.useEffect)(() => {
      null !== _v31 && _v32.current !== _v31 && (_v32.current = _v31, _v33(_v31));
    }, [_v31]);
    let _v34 = (0, _v13.useMemo)(() => null !== _v10 ? URL.createObjectURL(_v10.file) : null, [_v10]);
    (0, _v13.useEffect)(() => () => {
      null !== _v34 && URL.revokeObjectURL(_v34);
    }, [_v34]), (0, _v13.useEffect)(() => {
      if (null === _v10) return;
      let _v0 = null,
        _v1 = !1;
      return _v88(_v10.file, _v10.crop).then(_v0 => {
        _v1 ? URL.revokeObjectURL(_v0) : (_v0 = _v0, _v13(_v0));
      }), () => {
        _v1 = !0, null !== _v0 && URL.revokeObjectURL(_v0);
      };
    }, [_v10]);
    let _v35 = (_v0, _v1) => {
      "name" === _v0 && "" !== _v1.trim() && _v9(!1), _v7({
        ..._v6,
        [_v0]: _v1
      });
    };
    return (0, _v1.jsxs)(_v35.Modal, {
      closeOnOverlayClick: !1,
      size: "lg",
      isCentered: !0,
      isOpen: _v1,
      onClose: _v4,
      children: [(0, _v1.jsx)(_v40.ModalOverlay, {}), (0, _v1.jsxs)(_v37.ModalContent, {
        children: [(0, _v1.jsx)(_v39.ModalHeader, {
          children: "edit" === _v2 ? (0, _v10.translate)({
            singular: "Edit speaker",
            dictionary: {
              es: {
                singular: "Editar orador"
              },
              "de-DE": {
                singular: "Redner bearbeiten"
              },
              "fr-FR": {
                singular: "Modifier l'intervenant"
              },
              "ja-JP": {
                singular: "スピーカーを編集"
              },
              "ko-KR": {
                singular: "발표자 편집"
              },
              "pt-BR": {
                singular: "Editar palestrante"
              },
              "zh-CN": {
                singular: "编辑演讲人"
              }
            }
          }) : (0, _v10.translate)({
            singular: "New speaker",
            dictionary: {
              es: {
                singular: "Nuevo ponente"
              },
              "de-DE": {
                singular: "Neuer Sprecher"
              },
              "fr-FR": {
                singular: "Nouvel intervenant"
              },
              "ja-JP": {
                singular: "新しいスピーカー"
              },
              "ko-KR": {
                singular: "새 스피커"
              },
              "pt-BR": {
                singular: "Novo palestrante"
              },
              "zh-CN": {
                singular: "新增演讲者"
              }
            }
          })
        }), (0, _v1.jsx)(_v36.ModalBody, {
          display: "flex",
          flexDirection: "column",
          children: (0, _v1.jsxs)(_v7.Flex, {
            gap: "xl",
            justify: "space-between",
            children: [(0, _v1.jsxs)(_v7.Flex, {
              direction: "column",
              flex: "1",
              gap: "md",
              minWidth: 0,
              children: [(0, _v1.jsx)(_v7.Flex, {
                direction: "column",
                children: (0, _v1.jsxs)(_v15.FormControl, {
                  isInvalid: _v8,
                  children: [(0, _v1.jsx)(_v16.FormLabel, {
                    htmlFor: "speaker-name",
                    children: (0, _v1.jsx)(_v9.Text, {
                      as: "span",
                      variant: "heading-sm",
                      children: (0, _v10.translate)({
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
                    })
                  }), (0, _v1.jsx)(_v70.Input, {
                    id: "speaker-name",
                    isInvalid: _v8,
                    maxLength: 120,
                    onChange: _v0 => _v35("name", _v0.target.value),
                    placeholder: (0, _v10.translate)({
                      singular: "Add name",
                      dictionary: {
                        es: {
                          singular: "Agregar nombre"
                        },
                        "de-DE": {
                          singular: "Name hinzufügen"
                        },
                        "fr-FR": {
                          singular: "Ajouter un nom"
                        },
                        "ja-JP": {
                          singular: "名前を追加"
                        },
                        "ko-KR": {
                          singular: "이름 추가"
                        },
                        "pt-BR": {
                          singular: "Adicionar nome"
                        },
                        "zh-CN": {
                          singular: "添加姓名"
                        }
                      }
                    }),
                    value: _v6.name
                  }), (0, _v1.jsx)(_v67.AnimatePresence, {
                    children: _v8 ? (0, _v1.jsx)(_v7.Flex, {
                      as: _v68.motion.div,
                      initial: {
                        height: 0,
                        opacity: 0
                      },
                      animate: {
                        height: "auto",
                        opacity: 1
                      },
                      exit: {
                        height: 0,
                        opacity: 0
                      },
                      transition: {
                        duration: "2",
                        type: "spring",
                        stiffness: "600",
                        damping: "32"
                      },
                      overflow: "hidden",
                      mt: "xs",
                      children: (0, _v1.jsx)(_v69.FormErrorMessage, {
                        variant: "error",
                        fontSize: "body-sm",
                        lineHeight: "body-sm",
                        mt: "0",
                        children: (0, _v10.translate)({
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
                      })
                    }) : null
                  })]
                })
              }), (0, _v1.jsxs)(_v7.Flex, {
                direction: "column",
                children: [(0, _v1.jsx)(_v16.FormLabel, {
                  htmlFor: "speaker-role",
                  children: (0, _v1.jsxs)(_v7.Flex, {
                    as: "span",
                    align: "center",
                    gap: (0, _v8.rem)(4),
                    children: [(0, _v1.jsx)(_v9.Text, {
                      as: "span",
                      variant: "heading-sm",
                      children: (0, _v10.translate)({
                        singular: "Role",
                        dictionary: {
                          es: {
                            singular: "Rol"
                          },
                          "de-DE": {
                            singular: "Rolle"
                          },
                          "fr-FR": {
                            singular: "Rôle"
                          },
                          "ja-JP": {
                            singular: "肩書き"
                          },
                          "ko-KR": {
                            singular: "역할"
                          },
                          "pt-BR": {
                            singular: "Função"
                          },
                          "zh-CN": {
                            singular: "职位"
                          }
                        }
                      })
                    }), (0, _v1.jsx)(_v47.Tooltip, {
                      label: (0, _v10.translate)({
                        singular: "Role appears on the event page",
                        dictionary: {
                          es: {
                            singular: "El rol aparece en la página del evento"
                          },
                          "de-DE": {
                            singular: "Rolle erscheint auf der Veranstaltungsseite"
                          },
                          "fr-FR": {
                            singular: "Le rôle apparaît sur la page de l'événement"
                          },
                          "ja-JP": {
                            singular: "肩書きはイベントページに表示されます"
                          },
                          "ko-KR": {
                            singular: "역할은 이벤트 페이지에 표시됩니다"
                          },
                          "pt-BR": {
                            singular: "A função aparece na página do evento"
                          },
                          "zh-CN": {
                            singular: "职位会显示在活动页面上"
                          }
                        }
                      }),
                      children: (0, _v1.jsx)(_v72.InfoCircle, {
                        boxSize: (0, _v8.rem)(16)
                      })
                    })]
                  })
                }), (0, _v1.jsx)(_v70.Input, {
                  id: "speaker-role",
                  maxLength: 120,
                  onChange: _v0 => _v35("role", _v0.target.value),
                  placeholder: (0, _v10.translate)({
                    singular: "Add role",
                    dictionary: {
                      es: {
                        singular: "Agregar rol"
                      },
                      "de-DE": {
                        singular: "Rolle hinzufügen"
                      },
                      "fr-FR": {
                        singular: "Ajouter un rôle"
                      },
                      "ja-JP": {
                        singular: "肩書きを追加"
                      },
                      "ko-KR": {
                        singular: "역할 추가"
                      },
                      "pt-BR": {
                        singular: "Adicionar função"
                      },
                      "zh-CN": {
                        singular: "添加职位"
                      }
                    }
                  }),
                  value: _v6.role
                })]
              }), (0, _v1.jsxs)(_v7.Flex, {
                direction: "column",
                children: [(0, _v1.jsx)(_v16.FormLabel, {
                  htmlFor: "speaker-photo",
                  children: (0, _v1.jsxs)(_v7.Flex, {
                    as: "span",
                    align: "center",
                    gap: (0, _v8.rem)(4),
                    children: [(0, _v1.jsx)(_v9.Text, {
                      as: "span",
                      variant: "heading-sm",
                      children: (0, _v10.translate)({
                        singular: "Photo",
                        dictionary: {
                          es: {
                            singular: "Foto"
                          },
                          "ja-JP": {
                            singular: "写真"
                          },
                          "ko-KR": {
                            singular: "사진"
                          },
                          "pt-BR": {
                            singular: "Foto"
                          },
                          "zh-CN": {
                            singular: "照片"
                          }
                        }
                      })
                    }), (0, _v1.jsx)(_v47.Tooltip, {
                      label: (0, _v10.translate)({
                        singular: "Photo appears on the event page",
                        dictionary: {
                          es: {
                            singular: "La foto aparece en la página del evento"
                          },
                          "de-DE": {
                            singular: "Foto erscheint auf der Veranstaltungsseite"
                          },
                          "fr-FR": {
                            singular: "La photo apparaît sur la page de l'événement"
                          },
                          "ja-JP": {
                            singular: "写真はイベントページに表示されます"
                          },
                          "ko-KR": {
                            singular: "사진은 이벤트 페이지에 표시됩니다"
                          },
                          "pt-BR": {
                            singular: "A foto aparece na página do evento"
                          },
                          "zh-CN": {
                            singular: "照片会显示在活动页面上"
                          }
                        }
                      }),
                      children: (0, _v1.jsx)(_v72.InfoCircle, {
                        boxSize: (0, _v8.rem)(16)
                      })
                    })]
                  })
                }), (0, _v1.jsx)(_v87, {
                  id: "speaker-photo",
                  fileName: _v10?.file.name,
                  fileSize: _v10 ? (_v0 => {
                    if (_v0 < 0) return `${_v0} B`;
                    if (_v0 < 0) return `${Math.max(1, Math.round(_v0 / 0))} KB`;
                    let _v1 = _v0 / 0;
                    return _v1 < 10 ? `${_v1.toFixed(1)} MB` : `${Math.round(_v1)} MB`;
                  })(_v10.file.size) : void 0,
                  previewSrc: _v12 || _v34 || void 0,
                  onCropSaved: (_v0, _v1) => {
                    _v11({
                      file: _v0,
                      crop: _v1
                    }), _v13(null);
                  },
                  onRemove: () => {
                    _v11(null), _v13(null);
                  }
                })]
              }), (0, _v1.jsxs)(_v7.Flex, {
                direction: "column",
                children: [(0, _v1.jsx)(_v16.FormLabel, {
                  htmlFor: "speaker-description",
                  children: (0, _v1.jsxs)(_v7.Flex, {
                    as: "span",
                    align: "center",
                    gap: (0, _v8.rem)(4),
                    children: [(0, _v1.jsx)(_v9.Text, {
                      as: "span",
                      variant: "heading-sm",
                      children: (0, _v10.translate)({
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
                    }), (0, _v1.jsx)(_v47.Tooltip, {
                      label: (0, _v10.translate)({
                        singular: "Description appears on the event page",
                        dictionary: {
                          es: {
                            singular: "La descripción aparece en la página del evento"
                          },
                          "de-DE": {
                            singular: "Beschreibung erscheint auf der Veranstaltungsseite"
                          },
                          "fr-FR": {
                            singular: "La description apparaît sur la page de l'événement"
                          },
                          "ja-JP": {
                            singular: "説明はイベントページに表示されます"
                          },
                          "ko-KR": {
                            singular: "설명은 이벤트 페이지에 표시됩니다"
                          },
                          "pt-BR": {
                            singular: "A descrição aparece na página do evento"
                          },
                          "zh-CN": {
                            singular: "描述会显示在活动页面上"
                          }
                        }
                      }),
                      children: (0, _v1.jsx)(_v72.InfoCircle, {
                        boxSize: (0, _v8.rem)(16)
                      })
                    })]
                  })
                }), (0, _v1.jsx)(_v71.Textarea, {
                  id: "speaker-description",
                  minHeight: (0, _v8.rem)(120),
                  onChange: _v0 => _v35("description", _v0.target.value),
                  placeholder: (0, _v10.translate)({
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
                  maxLength: 255,
                  resize: "none",
                  value: _v6.description
                })]
              })]
            }), (0, _v1.jsxs)(_v7.Flex, {
              direction: "column",
              px: "xs",
              children: [(0, _v1.jsx)(_v9.Text, {
                variant: "heading-sm",
                children: (0, _v10.translate)({
                  singular: "Preview",
                  dictionary: {
                    es: {
                      singular: "Vista previa"
                    },
                    "de-DE": {
                      singular: "Vorschau"
                    },
                    "fr-FR": {
                      singular: "Aperçu"
                    },
                    "ja-JP": {
                      singular: "プレビュー"
                    },
                    "ko-KR": {
                      singular: "미리 보기"
                    },
                    "pt-BR": {
                      singular: "Visualização"
                    },
                    "zh-CN": {
                      singular: "预览"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v73.SpeakerProfileCard, {
                name: _v6.name.trim() || "Name (required)",
                role: _v6.role,
                description: _v6.description,
                thumbnailUrl: _v34 ?? _v6.picture?.baseLink
              })]
            })]
          })
        }), (0, _v1.jsxs)(_v38.ModalFooter, {
          justifyContent: "flex-end",
          children: [(0, _v1.jsx)(_v14.Button, {
            isDisabled: _v30,
            onClick: _v4,
            variant: "secondary",
            children: (0, _v10.translate)({
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
          }), (0, _v1.jsx)(_v14.Button, {
            isLoading: _v30,
            onClick: () => {
              if (_v30) return;
              let _v0 = _v6.name.trim();
              if ("" === _v0) return void _v9(!0);
              let _v1 = {
                name: _v0,
                role: _v6.role.trim() || null,
                description: _v6.description.trim() || null,
                ...(null !== _v10 ? {
                  avatarCrop: _v10.crop
                } : {})
              };
              if ("edit" === _v2) {
                let _v0 = _v0.id;
                return null == _v0 ? void _v27(null) : void _v23({
                  select: ["id"],
                  where: {
                    personProfileId: _v0
                  },
                  variables: _v1
                });
              }
              _v14 <= 0 ? _v27(null) : _v19({
                select: ["id"],
                where: {
                  userId: _v14
                },
                variables: _v1
              });
            },
            variant: "primary",
            children: (0, _v10.translate)({
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
  }
  let _v90 = ({
      title: _v0,
      body: _v1,
      confirmLabel: _v2,
      cancelLabel: _v3,
      isConfirmLoading: _v4 = !1,
      onCancel: _v5,
      onConfirm: _v6
    }) => (0, _v1.jsxs)(_v35.Modal, {
      isOpen: !0,
      onClose: _v5,
      children: [(0, _v1.jsx)(_v40.ModalOverlay, {}), (0, _v1.jsxs)(_v37.ModalContent, {
        children: [(0, _v1.jsx)(_v39.ModalHeader, {
          children: _v0
        }), (0, _v1.jsx)(_v36.ModalBody, {
          children: _v1
        }), (0, _v1.jsxs)(_v38.ModalFooter, {
          children: [(0, _v1.jsx)(_v14.Button, {
            onClick: _v5,
            variant: "tertiary",
            children: _v3 ?? (0, _v10.translate)({
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
          }), (0, _v1.jsx)(_v14.Button, {
            isLoading: _v4,
            onClick: _v6,
            variant: "destructive",
            children: _v2 ?? (0, _v10.translate)({
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
        })]
      })]
    }),
    _v91 = (0, _v8.rem)(56),
    _v92 = ["id", "name", "role", "description", "pictures.baseLink", "avatarCrop"],
    _v93 = ["id", "personProfile.id", "personProfile.name", "personProfile.role", "personProfile.description", "personProfile.pictures.baseLink", "personProfile.avatarCrop"];
  function _v94({
    isOpen: _v0,
    onClose: _v1,
    eventId: _v2
  }) {
    let _v3 = _v2 > 0,
      _v4 = (0, _v66.useSessionOwnerId)(),
      _v5 = (0, _v18.useToast)(),
      {
        trackSingleEventCustomizationSpeakerVisibilityChanged: _v6,
        trackSingleEventCustomizationSpeakerDeleted: _v7
      } = (0, _v28.useSingleEventCustomizationTracking)(),
      [_v8, _v9] = (0, _v13.useState)(null),
      [_v10, _v11] = (0, _v13.useState)(null),
      [_v12, _v13] = (0, _v13.useState)(null),
      {
        data: _v14,
        isValidating: _v15,
        mutate: _v16,
        setSize: _v17
      } = function (_v0, _v1) {
        let _v2 = "function" == typeof _v0 ? _v0() : _v0,
          {
            baseUrl: _v3,
            jwt: _v4,
            xVimeoPage: _v5,
            locale: _v6
          } = (0, _v23.useGctlConfig)();
        return (0, _v65.default)((_v0, _v1) => {
          if (null === _v2 || _v1 && !_v1.paging.next) return null;
          let {
              perPage: _v2 = 25,
              page: _v3,
              ..._v4
            } = _v2.query ?? {},
            _v5 = _v2.select.join(","),
            _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
          return [`/users/${_v2.where.userId}/person_profiles?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
        }, null !== _v2 ? ([_v0, _v1]) => _v63({
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
      }(() => _v4 <= 0 ? null : {
        select: _v92,
        where: {
          userId: _v4
        },
        query: {
          perPage: 25
        }
      }, {
        revalidateOnFocus: !1
      }),
      _v18 = (0, _v13.useMemo)(() => _v14?.flatMap(_v0 => _v0.data), [_v14]),
      _v19 = _v14?.[_v14.length - 1]?.paging.next != null,
      {
        data: _v20,
        mutate: _v21
      } = (0, _v24.useGetLiveEventSpeakerProfiles)(() => _v3 ? {
        select: _v93,
        where: {
          liveEventId: _v2
        },
        query: {
          perPage: 100
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      _v22 = (0, _v13.useMemo)(() => {
        let _v0 = new Map();
        return _v20?.data.forEach(_v0 => {
          _v0.set(_v0.personProfile.id, _v0.id);
        }), _v0;
      }, [_v20]),
      _v23 = (0, _v13.useMemo)(() => _v20?.data.map(_v0 => _v0.personProfile) ?? [], [_v20]),
      _v24 = (0, _v13.useMemo)(() => _v18?.filter(_v0 => !_v22.has(_v0.id)) ?? [], [_v18, _v22]),
      _v25 = _v20?.total ?? _v23.length,
      _v26 = _v25 >= 25,
      _v27 = _v0 => null === _v0 ? void 0 : _v23.find(_v0 => _v0.id === _v0) ?? _v18?.find(_v0 => _v0.id === _v0),
      _v28 = _v27(_v10),
      _v29 = _v27(_v12),
      [_v30] = (0, _v24.usePostLiveEventSpeakerProfiles)(),
      [_v31] = function () {
        let {
            mutate: _v0
          } = (0, _v60.useSWRConfig)(),
          {
            baseUrl: _v1,
            jwt: _v2,
            xVimeoPage: _v3,
            locale: _v4
          } = (0, _v23.useGctlConfig)(),
          [_v5, _v6] = (0, _v59.useInternalState)();
        return [(0, _v13.useCallback)(async _v0 => {
          _v6({
            type: "REQUEST"
          });
          try {
            let _v0 = await _v0(`/live_events/${_v0.where.liveEventId}/speaker_profiles/${_v0.where.speakerProfileId}${(0, _v59.serializeQuery)(_v0)}`, _v21({
              ..._v0,
              baseUrl: _v1,
              headers: {
                ..._v0.headers,
                "Content-Type": "application/json",
                Authorization: _v2 ? `jwt ${_v2}` : "",
                "Vimeo-Page": `${_v3}`,
                "Accept-Language": _v4 ?? "en"
              }
            }), !1);
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
      }(),
      [_v32] = function () {
        let {
            mutate: _v0
          } = (0, _v60.useSWRConfig)(),
          {
            baseUrl: _v1,
            jwt: _v2,
            xVimeoPage: _v3,
            locale: _v4
          } = (0, _v23.useGctlConfig)(),
          [_v5, _v6] = (0, _v59.useInternalState)();
        return [(0, _v13.useCallback)(async _v0 => {
          _v6({
            type: "REQUEST"
          });
          try {
            let _v0 = await _v0(`/person_profiles/${_v0.where.personProfileId}${(0, _v59.serializeQuery)(_v0)}`, _v61({
              ..._v0,
              baseUrl: _v1,
              headers: {
                ..._v0.headers,
                "Content-Type": "application/json",
                Authorization: _v2 ? `jwt ${_v2}` : "",
                "Vimeo-Page": `${_v3}`,
                "Accept-Language": _v4 ?? "en"
              }
            }), !1);
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
      }(),
      [_v33, _v34] = (0, _v13.useState)(new Set()),
      [_v35, _v36] = (0, _v13.useState)(new Set()),
      _v37 = (_v0, _v1) => {
        if (!_v3 || _v33.has(_v0)) return;
        let _v2 = null !== _v1;
        !_v2 && _v26 ? _v5({
          title: (0, _v10.translate)({
            singular: "You can show up to {MAX} speakers on the event landing page. Hide one to show another.",
            replacements: {
              MAX: 25
            },
            dictionary: {
              es: {
                singular: "Puede mostrar hasta {MAX} oradores en la página del evento. Oculte uno para mostrar otro."
              },
              "de-DE": {
                singular: "Sie können bis zu {MAX} Sprecher auf der Event-Landingpage anzeigen. Blenden Sie einen aus, um einen anderen anzuzeigen."
              },
              "fr-FR": {
                singular: "Vous pouvez afficher jusqu'à {MAX} intervenants sur la page de présentation de l'événement. Masquez-en un pour en afficher un autre."
              },
              "ja-JP": {
                singular: "イベントのランディングページには最大{MAX}名のスピーカーを表示できます。別のスピーカーを表示するには、1人を非表示にしてください。"
              },
              "ko-KR": {
                singular: "이벤트 랜딩 페이지에는 최대 {MAX}명의 발표자를 표시할 수 있습니다. 하나를 숨기면 다른 발표자를 표시할 수 있습니다."
              },
              "pt-BR": {
                singular: "Você pode exibir até {MAX} palestrantes na página do evento. Oculte um para mostrar outro."
              },
              "zh-CN": {
                singular: "您可以在活动着陆页上显示最多 {MAX} 位演讲者。隐藏一个即可显示另一个。"
              }
            }
          })
        }) : (_v34(_v0 => new Set(_v0).add(_v0)), (_v2 ? _v31({
          where: {
            liveEventId: _v2,
            speakerProfileId: _v1
          }
        }) : _v30({
          select: ["id"],
          where: {
            liveEventId: _v2
          },
          variables: {
            personProfileId: _v0
          }
        })).then(() => {
          _v6({
            newStatus: !_v2
          }), _v21(), _v5({
            status: "success",
            duration: 0,
            title: _v2 ? (0, _v10.translate)({
              singular: "Speaker hidden from the event landing page.",
              dictionary: {
                es: {
                  singular: "Ponente oculto en la página de destino del evento."
                },
                "de-DE": {
                  singular: "Sprecher auf der Landingpage der Veranstaltung ausgeblendet."
                },
                "fr-FR": {
                  singular: "L'intervenant est masqué sur la page de destination de l'événement."
                },
                "ja-JP": {
                  singular: "イベントのランディングページでスピーカーが非表示になりました。"
                },
                "ko-KR": {
                  singular: "발표자가 이벤트 랜딩 페이지에서 숨겨졌습니다."
                },
                "pt-BR": {
                  singular: "Palestrante oculto na landing page do evento."
                },
                "zh-CN": {
                  singular: "演讲者已从活动着陆页隐藏。"
                }
              }
            }) : (0, _v10.translate)({
              singular: "Speaker shown on the event landing page.",
              dictionary: {
                es: {
                  singular: "Ponente visible en la página de destino del evento."
                },
                "de-DE": {
                  singular: "Sprecher auf der Landingpage der Veranstaltung angezeigt."
                },
                "fr-FR": {
                  singular: "L'intervenant est affiché sur la page de destination de l'événement."
                },
                "ja-JP": {
                  singular: "イベントのランディングページでスピーカーが表示されました。"
                },
                "ko-KR": {
                  singular: "발표자가 이벤트 랜딩 페이지에 표시되었습니다."
                },
                "pt-BR": {
                  singular: "Palestrante exibido na landing page do evento."
                },
                "zh-CN": {
                  singular: "演讲者已在活动着陆页上显示。"
                }
              }
            })
          });
        }).catch(_v0 => {
          _v5({
            status: "error",
            duration: 0,
            title: (0, _v27.getErrorToastTitle)(_v0, (0, _v10.translate)({
              singular: "Something went wrong updating speaker visibility. Try again.",
              dictionary: {
                es: {
                  singular: "Se produjo un error al actualizar la visibilidad del ponente. Inténtelo de nuevo."
                },
                "de-DE": {
                  singular: "Beim Aktualisieren der Sichtbarkeit des Sprechers ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
                },
                "fr-FR": {
                  singular: "Une erreur est survenue lors de la mise à jour de la visibilité de l'intervenant. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "スピーカーの表示設定の更新中に問題が発生しました。もう一度お試しください。"
                },
                "ko-KR": {
                  singular: "발표자 가시성 업데이트 중 오류가 발생했습니다. 다시 시도해 주세요."
                },
                "pt-BR": {
                  singular: "Ocorreu um erro ao atualizar a visibilidade do palestrante. Tente novamente."
                },
                "zh-CN": {
                  singular: "更新演讲者可见性时出错。请重试。"
                }
              }
            }))
          });
        }).finally(() => {
          _v34(_v0 => {
            let _v1 = new Set(_v0);
            return _v1.delete(_v0), _v1;
          });
        }));
      },
      _v38 = () => {
        _v9(null), _v11(null), _v13(null), _v1();
      },
      _v39 = _v0 => {
        _v11(null), _v9(_v0);
      },
      _v40 = _v0 => {
        _v9(null), _v11(_v0);
      },
      _v41 = _v0 => {
        _v13(_v0);
      };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v35.Modal, {
        closeOnOverlayClick: !1,
        size: "lg",
        isCentered: !0,
        isOpen: _v0,
        onClose: _v38,
        children: [(0, _v1.jsx)(_v40.ModalOverlay, {}), (0, _v1.jsxs)(_v37.ModalContent, {
          minWidth: (0, _v8.rem)(990),
          children: [(0, _v1.jsxs)(_v39.ModalHeader, {
            children: [(0, _v10.translate)({
              singular: "Manage visible speakers",
              dictionary: {
                es: {
                  singular: "Administrar ponentes visibles"
                },
                "de-DE": {
                  singular: "Sichtbare Sprecher verwalten"
                },
                "fr-FR": {
                  singular: "Gérer les intervenants visibles"
                },
                "ja-JP": {
                  singular: "表示されるスピーカーを管理"
                },
                "ko-KR": {
                  singular: "표시되는 스피커 관리"
                },
                "pt-BR": {
                  singular: "Gerenciar palestrantes visíveis"
                },
                "zh-CN": {
                  singular: "管理可见演讲者"
                }
              }
            }), (0, _v1.jsx)(_v41.ModalCloseButton, {
              onClick: _v38
            })]
          }), (0, _v1.jsxs)(_v36.ModalBody, {
            display: "flex",
            flexDirection: "column",
            gap: "md",
            children: [(0, _v1.jsx)(_v29.Alert, {
              status: "info",
              overflow: "unset",
              children: (0, _v1.jsx)(_v30.AlertDescription, {
                children: (0, _v1.jsx)(_v9.Text, {
                  variant: "body-sm",
                  children: (0, _v10.translate)({
                    singular: "If you add speakers from the Speakers tab, they’ll automatically appear here. However, you still need to manually enable them to be displayed on the event landing page.",
                    dictionary: {
                      es: {
                        singular: "Si agregas ponentes desde la pestaña Ponentes, aparecerán automáticamente aquí. Sin embargo, aún debes habilitarlos manualmente para que se muestren en la página de aterrizaje del evento."
                      },
                      "de-DE": {
                        singular: "Wenn Sie Sprecher im Tab „Sprecher“ hinzufügen, erscheinen sie hier automatisch. Sie müssen sie jedoch weiterhin manuell aktivieren, damit sie auf der Event-Landingpage angezeigt werden."
                      },
                      "fr-FR": {
                        singular: "Si vous ajoutez des intervenants depuis l'onglet Speakers, ils apparaîtront automatiquement ici. Cependant, vous devez toujours les activer manuellement pour qu'ils s'affichent sur la page de présentation de l'événement."
                      },
                      "ja-JP": {
                        singular: "「Speakers」タブからスピーカーを追加すると、ここに自動的に表示されます。ただし、イベントのランディングページに表示するには、手動で有効化する必要があります。"
                      },
                      "ko-KR": {
                        singular: "Speakers 탭에서 스피커를 추가하면 이곳에 자동으로 나타납니다. 그러나 이벤트 랜딩 페이지에 표시하려면 수동으로 활성화해야 합니다."
                      },
                      "pt-BR": {
                        singular: "Se você adicionar palestrantes na aba Palestrantes, eles aparecerão automaticamente aqui. Entretanto, você ainda precisa habilitá‑los manualmente para que sejam exibidos na página de destino do evento."
                      },
                      "zh-CN": {
                        singular: "如果您从 Speakers 选项卡添加演讲者，他们会自动出现在此处。不过，您仍需手动启用他们，以便在活动着陆页上显示。"
                      }
                    }
                  })
                })
              })
            }), (0, _v1.jsx)(_v95, {
              title: (0, _v10.translate)({
                singular: "Visible speaker ({COUNT}/{MAX})",
                plural: "Visible speakers ({COUNT}/{MAX})",
                count: _v25,
                replacements: {
                  COUNT: _v25,
                  MAX: 25
                },
                dictionary: {
                  es: {
                    singular: "Orador visible ({COUNT}/{MAX})",
                    plural: "Oradores visibles ({COUNT}/{MAX})"
                  },
                  "de-DE": {
                    singular: "Sichtbarer Sprecher ({COUNT}/{MAX})",
                    plural: "Sichtbare Sprecher ({COUNT}/{MAX})"
                  },
                  "fr-FR": {
                    singular: "Intervenant visible ({COUNT}/{MAX})",
                    plural: "Intervenants visibles ({COUNT}/{MAX})"
                  },
                  "ja-JP": {
                    singular: "表示中のスピーカー ({COUNT}/{MAX})",
                    plural: "表示中のスピーカー ({COUNT}/{MAX})"
                  },
                  "ko-KR": {
                    singular: "표시된 발표자 ({COUNT}/{MAX})",
                    plural: "표시된 발표자 ({COUNT}/{MAX})"
                  },
                  "pt-BR": {
                    singular: "Palestrante visível ({COUNT}/{MAX})",
                    plural: "Palestrantes visíveis ({COUNT}/{MAX})"
                  },
                  "zh-CN": {
                    singular: "可见演讲者 ({COUNT}/{MAX})",
                    plural: "可见演讲者 ({COUNT}/{MAX})"
                  }
                }
              }),
              speakersCount: _v23.length,
              emptyStateText: (0, _v10.translate)({
                singular: "No speakers are visible on the event landing page yet.",
                dictionary: {
                  es: {
                    singular: "Aún no hay ponentes visibles en la página de inicio del evento."
                  },
                  "de-DE": {
                    singular: "Auf der Event-Landingpage sind noch keine Sprecher sichtbar."
                  },
                  "fr-FR": {
                    singular: "Aucun intervenant n'est encore visible sur la page de destination de l'événement."
                  },
                  "ja-JP": {
                    singular: "イベントのランディングページにはまだ登壇者が表示されていません。"
                  },
                  "ko-KR": {
                    singular: "아직 이벤트 랜딩 페이지에 표시되는 발표자가 없습니다."
                  },
                  "pt-BR": {
                    singular: "Ainda não há palestrantes visíveis na página de destino do evento."
                  },
                  "zh-CN": {
                    singular: "目前活动登录页面尚未显示任何演讲者。"
                  }
                }
              }),
              isAddDisabled: _v26,
              onAddClick: () => _v39("visible"),
              children: _v23.map(_v0 => (0, _v1.jsx)(_v96, {
                profile: _v0,
                attachedSpeakerId: _v22.get(_v0.id) ?? null,
                onOpenEditSpeakerModal: _v40,
                onToggleAddedToEvent: _v37,
                onSetDeleteCandidateId: _v41,
                isAtSpeakerLimit: _v26,
                isDeleting: _v35.has(_v0.id),
                isToggling: _v33.has(_v0.id)
              }, _v0.id))
            }), (0, _v1.jsx)(_v95, {
              title: (0, _v10.translate)({
                singular: "Available speaker ({COUNT})",
                plural: "Available speakers ({COUNT})",
                count: _v24.length,
                replacements: {
                  COUNT: _v24.length
                },
                dictionary: {
                  es: {
                    singular: "Orador disponible ({COUNT})",
                    plural: "Oradores disponibles ({COUNT})"
                  },
                  "de-DE": {
                    singular: "Verfügbarer Sprecher ({COUNT})",
                    plural: "Verfügbare Sprecher ({COUNT})"
                  },
                  "fr-FR": {
                    singular: "Intervenant disponible ({COUNT})",
                    plural: "Intervenants disponibles ({COUNT})"
                  },
                  "ja-JP": {
                    singular: "利用可能な発言者 ({COUNT})",
                    plural: "利用可能な発言者 ({COUNT})"
                  },
                  "ko-KR": {
                    singular: "사용 가능한 발표자 ({COUNT})",
                    plural: "사용 가능한 발표자들 ({COUNT})"
                  },
                  "pt-BR": {
                    singular: "Orador disponível ({COUNT})",
                    plural: "Oradores disponíveis ({COUNT})"
                  },
                  "zh-CN": {
                    singular: "可用发言者 ({COUNT})",
                    plural: "可用发言者 ({COUNT})"
                  }
                }
              }),
              speakersCount: _v24.length,
              emptyStateText: (0, _v10.translate)({
                singular: "All added speakers are currently visible on the event landing page.",
                dictionary: {
                  es: {
                    singular: "Todos los ponentes añadidos están actualmente visibles en la página de inicio del evento."
                  },
                  "de-DE": {
                    singular: "Alle hinzugefügten Sprecher sind derzeit auf der Event-Landingpage sichtbar."
                  },
                  "fr-FR": {
                    singular: "Tous les intervenants ajoutés sont actuellement visibles sur la page de destination de l'événement."
                  },
                  "ja-JP": {
                    singular: "追加されたすべての登壇者は現在イベントのランディングページに表示されています。"
                  },
                  "ko-KR": {
                    singular: "추가된 모든 발표자가 현재 이벤트 랜딩 페이지에 표시됩니다."
                  },
                  "pt-BR": {
                    singular: "Todos os palestrantes adicionados estão atualmente visíveis na página de destino do evento."
                  },
                  "zh-CN": {
                    singular: "所有已添加的演讲者目前都在活动登录页面可见。"
                  }
                }
              }),
              onAddClick: () => _v39("available"),
              children: _v24.map(_v0 => (0, _v1.jsx)(_v96, {
                profile: _v0,
                attachedSpeakerId: null,
                onOpenEditSpeakerModal: _v40,
                onToggleAddedToEvent: _v37,
                onSetDeleteCandidateId: _v41,
                isAtSpeakerLimit: _v26,
                isDeleting: _v35.has(_v0.id),
                isToggling: _v33.has(_v0.id)
              }, _v0.id))
            }), _v19 ? (0, _v1.jsx)(_v7.Flex, {
              justify: "center",
              children: (0, _v1.jsx)(_v14.Button, {
                isLoading: _v15,
                onClick: () => {
                  _v17(_v0 => _v0 + 1);
                },
                size: "sm",
                variant: "secondary",
                children: (0, _v10.translate)({
                  singular: "Load more",
                  dictionary: {
                    es: {
                      singular: "Cargar más"
                    },
                    "de-DE": {
                      singular: "Mehr laden"
                    },
                    "fr-FR": {
                      singular: "Afficher plus"
                    },
                    "ja-JP": {
                      singular: "もっとロードする"
                    },
                    "ko-KR": {
                      singular: "동영상 더 보기"
                    },
                    "pt-BR": {
                      singular: "Carregar mais"
                    },
                    "zh-CN": {
                      singular: "加载更多"
                    }
                  }
                })
              })
            }) : null]
          }), (0, _v1.jsx)(_v38.ModalFooter, {})]
        })]
      }), null !== _v8 ? (0, _v1.jsx)(_v89, {
        initialSpeaker: {
          name: "",
          role: "",
          description: "",
          picture: null,
          avatarCrop: null
        },
        isOpen: !0,
        mode: "add",
        speakerSection: _v8,
        onClose: () => {
          _v9(null);
        },
        onSaved: _v0 => {
          if (_v16(), _v3 && "visible" === _v8) {
            if (_v26) return void _v5({
              title: (0, _v10.translate)({
                singular: "Speaker added to Available speakers. You can show up to {MAX} speakers on the event landing page.",
                replacements: {
                  MAX: 25
                },
                dictionary: {
                  es: {
                    singular: "Orador añadido a los oradores disponibles. Puede mostrar hasta {MAX} oradores en la página del evento."
                  },
                  "de-DE": {
                    singular: "Sprecher zu den verfügbaren Sprechern hinzugefügt. Auf der Event-Landingpage können Sie bis zu {MAX} Sprecher anzeigen."
                  },
                  "fr-FR": {
                    singular: "Intervenant ajouté aux intervenants disponibles. Vous pouvez afficher jusqu'à {MAX} intervenants sur la page de présentation de l'événement."
                  },
                  "ja-JP": {
                    singular: "スピーカーが「利用可能なスピーカー」に追加されました。イベントのランディングページには最大{MAX}名のスピーカーを表示できます。"
                  },
                  "ko-KR": {
                    singular: "발표자가 사용 가능한 발표자 목록에 추가되었습니다. 이벤트 랜딩 페이지에는 최대 {MAX}명의 발표자를 표시할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Palestrante adicionado aos Palestrantes disponíveis. Você pode exibir até {MAX} palestrantes na página do evento."
                  },
                  "zh-CN": {
                    singular: "演讲者已添加到可用演讲者。您可以在活动着陆页上显示最多 {MAX} 位演讲者。"
                  }
                }
              })
            });
            _v30({
              select: ["id"],
              where: {
                liveEventId: _v2
              },
              variables: {
                personProfileId: _v0
              }
            }).then(() => (_v6({
              newStatus: !0
            }), _v21()));
          }
        }
      }, "add-speaker-modal") : null, _v28 ? (0, _v1.jsx)(_v89, {
        initialSpeaker: {
          id: _v28.id,
          name: _v28.name,
          role: _v28.role || "",
          description: _v28.description || "",
          picture: _v28.pictures,
          avatarCrop: _v28.avatarCrop
        },
        isOpen: null !== _v28,
        mode: "edit",
        onClose: () => {
          _v11(null);
        },
        onSaved: () => _v16()
      }, `edit-speaker-modal-${_v28.id}`) : null, _v29 ? (0, _v1.jsx)(_v90, {
        title: (0, _v10.translate)({
          singular: 'Delete "{NAME}"?',
          replacements: {
            NAME: _v29.name
          },
          dictionary: {
            es: {
              singular: '¿Eliminar "{NAME}"?'
            },
            "de-DE": {
              singular: '"{NAME}" löschen?'
            },
            "fr-FR": {
              singular: 'Supprimer "{NAME}" ?'
            },
            "ja-JP": {
              singular: '"{NAME}"を削除しますか?'
            },
            "ko-KR": {
              singular: '"{NAME}"을(를) 삭제하시겠습니까?'
            },
            "pt-BR": {
              singular: 'Excluir "{NAME}"?'
            },
            "zh-CN": {
              singular: '删除 "{NAME}"?'
            }
          }
        }),
        body: (0, _v10.translate)({
          singular: "This speaker will be deleted and removed from every event. This action can't be undone.",
          dictionary: {
            es: {
              singular: "Este ponente será eliminado y retirado de todos los eventos. Esta acción no se puede deshacer."
            },
            "de-DE": {
              singular: "Dieser Sprecher wird gelöscht und aus allen Veranstaltungen entfernt. Diese Aktion kann nicht rückgängig gemacht werden."
            },
            "fr-FR": {
              singular: "Cet intervenant sera supprimé et retiré de tous les événements. Cette action est irréversible."
            },
            "ja-JP": {
              singular: "このスピーカーを削除すると、すべてのイベントからも削除されます。この操作は取り消せません。"
            },
            "ko-KR": {
              singular: "이 발표자는 삭제되어 모든 이벤트에서 제거됩니다. 이 작업은 되돌릴 수 없습니다."
            },
            "pt-BR": {
              singular: "Este palestrante será excluído e removido de todos os eventos. Esta ação não pode ser desfeita."
            },
            "zh-CN": {
              singular: "此发言人将被删除，并从每个活动中移除。此操作无法撤销。"
            }
          }
        }),
        onCancel: () => _v13(null),
        onConfirm: () => {
          null !== _v12 && (_v35.has(_v12) || (_v36(_v0 => new Set(_v0).add(_v12)), _v32({
            where: {
              personProfileId: _v12
            }
          }).then(() => {
            _v7(), _v16(), _v21();
          }).finally(() => {
            _v36(_v0 => {
              let _v1 = new Set(_v0);
              return _v1.delete(_v12), _v1;
            });
          })), _v13(null));
        }
      }) : null]
    });
  }
  let _v95 = ({
      title: _v0,
      speakersCount: _v1,
      emptyStateText: _v2,
      children: _v3,
      isAddDisabled: _v4 = !1,
      onAddClick: _v5
    }) => {
      let [_v6, _v7] = (0, _v13.useState)(!0);
      return (0, _v1.jsxs)(_v7.Flex, {
        direction: "column",
        gap: "sm",
        children: [(0, _v1.jsxs)(_v7.Flex, {
          align: "center",
          justify: "space-between",
          gap: (0, _v8.rem)(16),
          children: [(0, _v1.jsxs)(_v7.Flex, {
            align: "center",
            appearance: "none",
            "aria-expanded": _v6,
            "aria-label": _v6 ? (0, _v10.translate)({
              singular: "Collapse section",
              dictionary: {
                es: {
                  singular: "Contraer sección"
                },
                "de-DE": {
                  singular: "Abschnitt einklappen"
                },
                "fr-FR": {
                  singular: "Réduire la section"
                },
                "ja-JP": {
                  singular: "セクションを折りたたむ"
                },
                "ko-KR": {
                  singular: "섹션 접기"
                },
                "pt-BR": {
                  singular: "Recolher seção"
                },
                "zh-CN": {
                  singular: "折叠部分"
                }
              }
            }) : (0, _v10.translate)({
              singular: "Expand section",
              dictionary: {
                es: {
                  singular: "Expandir sección"
                },
                "de-DE": {
                  singular: "Abschnitt aufklappen"
                },
                "fr-FR": {
                  singular: "Développer la section"
                },
                "ja-JP": {
                  singular: "セクションを展開する"
                },
                "ko-KR": {
                  singular: "섹션 펼치기"
                },
                "pt-BR": {
                  singular: "Expandir seção"
                },
                "zh-CN": {
                  singular: "展开部分"
                }
              }
            }),
            as: "button",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            flex: "1",
            gap: "xs",
            minWidth: "0",
            onClick: () => _v7(_v0 => !_v0),
            padding: "0",
            textAlign: "left",
            type: "button",
            children: [(0, _v1.jsx)(_v9.Text, {
              noOfLines: 1,
              variant: "heading-xs",
              children: _v0
            }), (0, _v1.jsx)(_v49.ChevronDownSmall, {
              color: "icon-primary",
              transform: _v6 ? void 0 : "rotate(-90deg)"
            })]
          }), (0, _v1.jsx)(_v47.Tooltip, {
            label: _v4 ? (0, _v10.translate)({
              singular: "You can show up to {MAX} speakers on the event landing page. Hide one to show another.",
              replacements: {
                MAX: 25
              },
              dictionary: {
                es: {
                  singular: "Puede mostrar hasta {MAX} oradores en la página del evento. Oculte uno para mostrar otro."
                },
                "de-DE": {
                  singular: "Sie können bis zu {MAX} Sprecher auf der Event-Landingpage anzeigen. Blenden Sie einen aus, um einen anderen anzuzeigen."
                },
                "fr-FR": {
                  singular: "Vous pouvez afficher jusqu'à {MAX} intervenants sur la page de présentation de l'événement. Masquez-en un pour en afficher un autre."
                },
                "ja-JP": {
                  singular: "イベントのランディングページには最大{MAX}名のスピーカーを表示できます。別のスピーカーを表示するには、1人を非表示にしてください。"
                },
                "ko-KR": {
                  singular: "이벤트 랜딩 페이지에는 최대 {MAX}명의 발표자를 표시할 수 있습니다. 하나를 숨기면 다른 발표자를 표시할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Você pode exibir até {MAX} palestrantes na página do evento. Oculte um para mostrar outro."
                },
                "zh-CN": {
                  singular: "您可以在活动着陆页上显示最多 {MAX} 位演讲者。隐藏一个即可显示另一个。"
                }
              }
            }) : "",
            isDisabled: !_v4,
            shouldWrapChildren: !0,
            children: (0, _v1.jsx)(_v14.Button, {
              isDisabled: _v4,
              leftIcon: (0, _v1.jsx)(_v51.PlusCircle, {}),
              onClick: _v5,
              size: "sm",
              variant: "secondary",
              children: (0, _v10.translate)({
                singular: "Add speaker",
                dictionary: {
                  es: {
                    singular: "Agregar orador"
                  },
                  "de-DE": {
                    singular: "Redner hinzufügen"
                  },
                  "fr-FR": {
                    singular: "Ajouter un(e) intervenant(e)"
                  },
                  "ja-JP": {
                    singular: "スピーカーを追加"
                  },
                  "ko-KR": {
                    singular: "발표자 추가"
                  },
                  "pt-BR": {
                    singular: "Adicionar palestrante"
                  },
                  "zh-CN": {
                    singular: "添加演讲人"
                  }
                }
              })
            })
          })]
        }), (0, _v1.jsx)(_v32.Collapse, {
          in: _v6,
          children: _v1 > 0 ? (0, _v1.jsxs)(_v42.Table, {
            variant: "unstyled",
            children: [(0, _v1.jsx)(_v46.Thead, {
              children: (0, _v1.jsxs)(_v48.Tr, {
                color: "text-secondary",
                children: [(0, _v1.jsx)(_v45.Th, {
                  backgroundColor: "fill-component",
                  borderStartRadius: "input-md",
                  px: "2",
                  py: "2",
                  width: "27%",
                  children: (0, _v1.jsx)(_v7.Flex, {
                    align: "center",
                    gap: (0, _v8.rem)(8),
                    minWidth: 0,
                    children: (0, _v1.jsx)(_v9.Text, {
                      noOfLines: 1,
                      variant: "heading-xs",
                      children: (0, _v10.translate)({
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
                    })
                  })
                }), (0, _v1.jsx)(_v45.Th, {
                  backgroundColor: "fill-component",
                  px: "2",
                  py: "2",
                  width: "13%",
                  children: (0, _v1.jsx)(_v9.Text, {
                    variant: "heading-xs",
                    children: (0, _v10.translate)({
                      singular: "Visible",
                      dictionary: {
                        "de-DE": {
                          singular: "Sichtbar"
                        },
                        "ja-JP": {
                          singular: "表示"
                        },
                        "ko-KR": {
                          singular: "표시됨"
                        },
                        "pt-BR": {
                          singular: "Visível"
                        },
                        "zh-CN": {
                          singular: "可见"
                        }
                      }
                    })
                  })
                }), (0, _v1.jsx)(_v45.Th, {
                  backgroundColor: "fill-component",
                  px: "2",
                  py: "2",
                  width: "17%",
                  children: (0, _v1.jsx)(_v9.Text, {
                    variant: "heading-xs",
                    children: (0, _v10.translate)({
                      singular: "Role",
                      dictionary: {
                        es: {
                          singular: "Rol"
                        },
                        "de-DE": {
                          singular: "Rolle"
                        },
                        "fr-FR": {
                          singular: "Rôle"
                        },
                        "ja-JP": {
                          singular: "肩書き"
                        },
                        "ko-KR": {
                          singular: "역할"
                        },
                        "pt-BR": {
                          singular: "Função"
                        },
                        "zh-CN": {
                          singular: "职位"
                        }
                      }
                    })
                  })
                }), (0, _v1.jsx)(_v45.Th, {
                  backgroundColor: "fill-component",
                  px: "2",
                  py: "2",
                  width: "29%",
                  children: (0, _v1.jsx)(_v9.Text, {
                    variant: "heading-xs",
                    children: (0, _v10.translate)({
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
                  })
                }), (0, _v1.jsx)(_v45.Th, {
                  backgroundColor: "fill-component",
                  borderEndRadius: "input-md",
                  px: "2",
                  py: "2",
                  width: "14%"
                })]
              })
            }), (0, _v1.jsx)(_v43.Tbody, {
              children: _v3
            })]
          }) : (0, _v1.jsx)(_v9.Text, {
            color: "text-secondary",
            py: (0, _v8.rem)(16),
            variant: "body-md",
            children: _v2
          })
        })]
      });
    },
    _v96 = ({
      profile: _v0,
      attachedSpeakerId: _v1,
      onOpenEditSpeakerModal: _v2,
      onToggleAddedToEvent: _v3,
      onSetDeleteCandidateId: _v4,
      isAtSpeakerLimit: _v5,
      isDeleting: _v6,
      isToggling: _v7
    }) => {
      let _v8 = null !== _v1,
        _v9 = !_v8 && _v5,
        _v10 = _v8 ? (0, _v10.translate)({
          singular: "Hide from the event landing page",
          dictionary: {
            es: {
              singular: "Ocultar de la página de aterrizaje del evento"
            },
            "de-DE": {
              singular: "Auf der Event-Landingpage ausblenden"
            },
            "fr-FR": {
              singular: "Masquer de la page de présentation de l'événement"
            },
            "ja-JP": {
              singular: "イベントのランディングページから非表示にする"
            },
            "ko-KR": {
              singular: "이벤트 랜딩 페이지에서 숨기기"
            },
            "pt-BR": {
              singular: "Ocultar da página de destino do evento"
            },
            "zh-CN": {
              singular: "从活动着陆页隐藏"
            }
          }
        }) : (0, _v10.translate)({
          singular: "Show on the event landing page",
          dictionary: {
            es: {
              singular: "Mostrar en la página de aterrizaje del evento"
            },
            "de-DE": {
              singular: "Auf der Event-Landingpage anzeigen"
            },
            "fr-FR": {
              singular: "Afficher sur la page de présentation de l'événement"
            },
            "ja-JP": {
              singular: "イベントのランディングページに表示する"
            },
            "ko-KR": {
              singular: "이벤트 랜딩 페이지에 표시"
            },
            "pt-BR": {
              singular: "Exibir na página de destino do evento"
            },
            "zh-CN": {
              singular: "在活动着陆页显示"
            }
          }
        }),
        _v11 = _v0.pictures?.baseLink,
        _v12 = _v0.avatarCrop && _v0.avatarCrop.width > 0 ? _v0.avatarCrop : null;
      return (0, _v1.jsxs)(_v48.Tr, {
        children: [(0, _v1.jsx)(_v44.Td, {
          px: "2",
          py: (0, _v8.rem)(10),
          width: "27%",
          children: (0, _v1.jsxs)(_v7.Flex, {
            align: "center",
            gap: (0, _v8.rem)(16),
            minWidth: 0,
            children: [_v11 ? (0, _v1.jsx)(_v31.Box, {
              borderRadius: "input-md",
              flexShrink: 0,
              height: _v91,
              overflow: "hidden",
              width: _v91,
              children: (0, _v1.jsx)(_v34.Image, {
                alt: _v0.name || "",
                src: _v11,
                ...(_v12 ? {
                  maxWidth: "none",
                  transform: `scale(${56 / _v12.width}) translate(${-_v12.x}px, ${-_v12.y}px)`,
                  transformOrigin: "top left"
                } : {
                  height: "100%",
                  objectFit: "cover",
                  width: "100%"
                })
              })
            }) : (0, _v1.jsx)(_v31.Box, {
              width: _v91,
              height: _v91,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "input-md",
              backgroundColor: "fill-component",
              color: "icon-secondary",
              children: (0, _v1.jsx)(_v52.PersonUserFilled, {})
            }), (0, _v1.jsx)(_v9.Text, {
              noOfLines: 1,
              variant: "heading-xs",
              children: _v0.name
            })]
          })
        }), (0, _v1.jsx)(_v44.Td, {
          px: "2",
          py: (0, _v8.rem)(10),
          width: "13%",
          children: (0, _v1.jsx)(_v31.Box, {
            "aria-label": _v8 ? (0, _v10.translate)({
              singular: "Show on the event landing page",
              dictionary: {
                es: {
                  singular: "Mostrar en la página de aterrizaje del evento"
                },
                "de-DE": {
                  singular: "Auf der Event-Landingpage anzeigen"
                },
                "fr-FR": {
                  singular: "Afficher sur la page de présentation de l'événement"
                },
                "ja-JP": {
                  singular: "イベントのランディングページに表示する"
                },
                "ko-KR": {
                  singular: "이벤트 랜딩 페이지에 표시"
                },
                "pt-BR": {
                  singular: "Exibir na página de destino do evento"
                },
                "zh-CN": {
                  singular: "在活动着陆页显示"
                }
              }
            }) : (0, _v10.translate)({
              singular: "Hide from the event landing page",
              dictionary: {
                es: {
                  singular: "Ocultar de la página de aterrizaje del evento"
                },
                "de-DE": {
                  singular: "Auf der Event-Landingpage ausblenden"
                },
                "fr-FR": {
                  singular: "Masquer de la page de présentation de l'événement"
                },
                "ja-JP": {
                  singular: "イベントのランディングページから非表示にする"
                },
                "ko-KR": {
                  singular: "이벤트 랜딩 페이지에서 숨기기"
                },
                "pt-BR": {
                  singular: "Ocultar da página de destino do evento"
                },
                "zh-CN": {
                  singular: "从活动着陆页隐藏"
                }
              }
            }),
            backgroundColor: "fill-component",
            borderRadius: "sm",
            display: "inline-flex",
            p: (0, _v8.rem)(6),
            children: _v8 ? (0, _v1.jsx)(_v54, {
              boxSize: (0, _v8.rem)(20),
              color: "text-tertiary"
            }) : (0, _v1.jsx)(_v55.CloseXCircleFilled, {
              boxSize: (0, _v8.rem)(20),
              color: "text-tertiary"
            })
          })
        }), (0, _v1.jsx)(_v44.Td, {
          px: "2",
          py: (0, _v8.rem)(10),
          width: "17%",
          children: (0, _v1.jsx)(_v9.Text, {
            noOfLines: 1,
            variant: "body-md",
            color: "text-secondary",
            children: _v0.role || "-"
          })
        }), (0, _v1.jsx)(_v44.Td, {
          px: "2",
          py: (0, _v8.rem)(10),
          width: "29%",
          children: (0, _v1.jsx)(_v9.Text, {
            noOfLines: 1,
            variant: "body-md",
            color: "text-secondary",
            children: _v0.description || "-"
          })
        }), (0, _v1.jsx)(_v44.Td, {
          px: "2",
          py: (0, _v8.rem)(10),
          width: "14%",
          children: (0, _v1.jsxs)(_v7.Flex, {
            gap: "1",
            justify: "flex-end",
            children: [(0, _v1.jsx)(_v47.Tooltip, {
              label: (0, _v10.translate)({
                singular: "Edit speaker details",
                dictionary: {
                  es: {
                    singular: "Editar detalles del ponente"
                  },
                  "de-DE": {
                    singular: "Sprecherdetails bearbeiten"
                  },
                  "fr-FR": {
                    singular: "Modifier les détails de l'intervenant"
                  },
                  "ja-JP": {
                    singular: "スピーカーの詳細を編集"
                  },
                  "ko-KR": {
                    singular: "연사 세부 정보 편집"
                  },
                  "pt-BR": {
                    singular: "Editar detalhes do palestrante"
                  },
                  "zh-CN": {
                    singular: "编辑演讲者详细信息"
                  }
                }
              }),
              children: (0, _v1.jsx)(_v33.IconButton, {
                "aria-label": (0, _v10.translate)({
                  singular: "Edit speaker details",
                  dictionary: {
                    es: {
                      singular: "Editar detalles del ponente"
                    },
                    "de-DE": {
                      singular: "Sprecherdetails bearbeiten"
                    },
                    "fr-FR": {
                      singular: "Modifier les détails de l'intervenant"
                    },
                    "ja-JP": {
                      singular: "スピーカーの詳細を編集"
                    },
                    "ko-KR": {
                      singular: "연사 세부 정보 편집"
                    },
                    "pt-BR": {
                      singular: "Editar detalhes do palestrante"
                    },
                    "zh-CN": {
                      singular: "编辑演讲者详细信息"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v50.EditSheet, {}),
                onClick: () => _v2(_v0.id),
                size: "sm",
                variant: "tertiary"
              })
            }), (0, _v1.jsx)(_v47.Tooltip, {
              label: _v9 ? (0, _v10.translate)({
                singular: "You can show up to {MAX} speakers on the event landing page. Hide one to show another.",
                replacements: {
                  MAX: 25
                },
                dictionary: {
                  es: {
                    singular: "Puede mostrar hasta {MAX} oradores en la página del evento. Oculte uno para mostrar otro."
                  },
                  "de-DE": {
                    singular: "Sie können bis zu {MAX} Sprecher auf der Event-Landingpage anzeigen. Blenden Sie einen aus, um einen anderen anzuzeigen."
                  },
                  "fr-FR": {
                    singular: "Vous pouvez afficher jusqu'à {MAX} intervenants sur la page de présentation de l'événement. Masquez-en un pour en afficher un autre."
                  },
                  "ja-JP": {
                    singular: "イベントのランディングページには最大{MAX}名のスピーカーを表示できます。別のスピーカーを表示するには、1人を非表示にしてください。"
                  },
                  "ko-KR": {
                    singular: "이벤트 랜딩 페이지에는 최대 {MAX}명의 발표자를 표시할 수 있습니다. 하나를 숨기면 다른 발표자를 표시할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Você pode exibir até {MAX} palestrantes na página do evento. Oculte um para mostrar outro."
                  },
                  "zh-CN": {
                    singular: "您可以在活动着陆页上显示最多 {MAX} 位演讲者。隐藏一个即可显示另一个。"
                  }
                }
              }) : _v10,
              children: (0, _v1.jsx)(_v33.IconButton, {
                "aria-label": _v10,
                icon: _v8 ? (0, _v1.jsx)(_v56.EyeShut, {}) : (0, _v1.jsx)(_v57.Eye, {}),
                isDisabled: _v9,
                isLoading: _v7,
                onClick: () => _v3(_v0.id, _v1),
                size: "sm",
                variant: "tertiary"
              })
            }), (0, _v1.jsx)(_v47.Tooltip, {
              label: (0, _v10.translate)({
                singular: "Delete speaker",
                dictionary: {
                  es: {
                    singular: "Eliminar orador"
                  },
                  "de-DE": {
                    singular: "Sprecher löschen"
                  },
                  "fr-FR": {
                    singular: "Supprimer l'intervenant"
                  },
                  "ja-JP": {
                    singular: "スピーカーを削除"
                  },
                  "ko-KR": {
                    singular: "발표자 삭제"
                  },
                  "pt-BR": {
                    singular: "Excluir palestrante"
                  },
                  "zh-CN": {
                    singular: "删除演讲者"
                  }
                }
              }),
              children: (0, _v1.jsx)(_v33.IconButton, {
                "aria-label": (0, _v10.translate)({
                  singular: "Delete speaker",
                  dictionary: {
                    es: {
                      singular: "Eliminar orador"
                    },
                    "de-DE": {
                      singular: "Sprecher löschen"
                    },
                    "fr-FR": {
                      singular: "Supprimer l'intervenant"
                    },
                    "ja-JP": {
                      singular: "スピーカーを削除"
                    },
                    "ko-KR": {
                      singular: "발표자 삭제"
                    },
                    "pt-BR": {
                      singular: "Excluir palestrante"
                    },
                    "zh-CN": {
                      singular: "删除演讲者"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v58.TrashBin, {}),
                isLoading: _v6,
                onClick: () => _v4(_v0.id),
                size: "sm",
                variant: "tertiary"
              })
            })]
          })
        })]
      }, _v0.id);
    },
    _v97 = "manage-speakers-field-show-speakers",
    _v98 = ["id", "visibilityStatus"];
  function _v99() {
    let [_v0, _v1] = (0, _v13.useState)(!1),
      [_v2, _v3] = (0, _v13.useState)(null),
      [_v4, _v5] = (0, _v13.useState)(!1),
      {
        sessionId: _v6
      } = (0, _v12.useManager)(_v26.ComposerSessionManager),
      _v7 = Number(_v6),
      _v8 = _v7 > 0,
      _v9 = (0, _v18.useToast)(),
      {
        trackSingleEventCustomizationSpeakersToggled: _v10,
        trackSingleEventCustomizationManageSpeakersClicked: _v11
      } = (0, _v28.useSingleEventCustomizationTracking)(),
      {
        data: _v12,
        mutate: _v13
      } = (0, _v24.useGetLiveEventSpeakerProfiles)(() => _v8 ? {
        select: _v98,
        where: {
          liveEventId: _v7
        },
        query: {
          perPage: 100
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      _v14 = _v12?.data,
      {
        baseUrl: _v15,
        jwt: _v16,
        xVimeoPage: _v17,
        locale: _v18
      } = (0, _v23.useGctlConfig)(),
      _v19 = _v4;
    return null !== _v2 ? _v19 = "visible" === _v2 : _v14 && _v14.length > 0 && (_v19 = _v14.some(_v0 => "visible" === _v0.visibilityStatus)), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v7.Flex, {
        direction: "column",
        gap: "md",
        width: "100%",
        children: [(0, _v1.jsx)(_v15.FormControl, {
          children: (0, _v1.jsxs)(_v16.FormLabel, {
            alignItems: "center",
            cursor: "pointer",
            display: "flex",
            htmlFor: _v97,
            justifyContent: "space-between",
            margin: "0",
            children: [(0, _v1.jsxs)(_v7.Flex, {
              align: "center",
              gap: (0, _v8.rem)(4),
              children: [(0, _v1.jsx)(_v9.Text, {
                variant: "heading-xs",
                children: (0, _v10.translate)({
                  singular: "Show speakers",
                  dictionary: {
                    es: {
                      singular: "Mostrar oradores"
                    },
                    "de-DE": {
                      singular: "Redner einblenden"
                    },
                    "fr-FR": {
                      singular: "Montrer les intervenants"
                    },
                    "ja-JP": {
                      singular: "スピーカーを表示する"
                    },
                    "ko-KR": {
                      singular: "발표자 표시"
                    },
                    "pt-BR": {
                      singular: "Exibir palestrantes"
                    },
                    "zh-CN": {
                      singular: "显示演讲人"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v25.CircleTip, {
                as: "span",
                label: (0, _v10.translate)({
                  singular: "Speakers are shown in the event page with a dedicated section.",
                  dictionary: {
                    es: {
                      singular: "Los ponentes se muestran en la página del evento con una sección dedicada."
                    },
                    "de-DE": {
                      singular: "Sprecher werden auf der Veranstaltungsseite in einem eigenen Abschnitt angezeigt."
                    },
                    "fr-FR": {
                      singular: "Les intervenants sont affichés sur la page de l'événement dans une section dédiée."
                    },
                    "ja-JP": {
                      singular: "スピーカーはイベントページの専用セクションに表示されます。"
                    },
                    "ko-KR": {
                      singular: "스피커는 전용 섹션과 함께 이벤트 페이지에 표시됩니다."
                    },
                    "pt-BR": {
                      singular: "Os palestrantes são exibidos na página do evento em uma seção dedicada."
                    },
                    "zh-CN": {
                      singular: "演讲者在活动页面中以专门的区域展示。"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v17.Switch, {
              id: _v97,
              isChecked: _v19,
              isDisabled: null !== _v2,
              onChange: () => {
                if (null !== _v2) return;
                let _v0 = _v19 ? "hidden" : "visible";
                (_v5("visible" === _v0), _v14 && 0 !== _v14.length) ? (_v3(_v0), Promise.all(_v14.map(_v0 => _v22({
                  baseUrl: _v15,
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: _v16 ? `jwt ${_v16}` : "",
                    "Vimeo-Page": `${_v17}`,
                    "Accept-Language": _v18 ?? "en"
                  },
                  select: _v98,
                  where: {
                    liveEventId: _v7,
                    speakerProfileId: _v0.id
                  },
                  variables: {
                    visibilityStatus: _v0
                  }
                }))).then(() => (_v10({
                  newStatus: "visible" === _v0
                }), _v13())).catch(_v0 => {
                  _v9({
                    status: "error",
                    duration: 0,
                    title: (0, _v27.getErrorToastTitle)(_v0, (0, _v10.translate)({
                      singular: "Something went wrong updating speaker visibility. Try again.",
                      dictionary: {
                        es: {
                          singular: "Se produjo un error al actualizar la visibilidad del ponente. Inténtelo de nuevo."
                        },
                        "de-DE": {
                          singular: "Beim Aktualisieren der Sichtbarkeit des Sprechers ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
                        },
                        "fr-FR": {
                          singular: "Une erreur est survenue lors de la mise à jour de la visibilité de l'intervenant. Veuillez réessayer."
                        },
                        "ja-JP": {
                          singular: "スピーカーの表示設定の更新中に問題が発生しました。もう一度お試しください。"
                        },
                        "ko-KR": {
                          singular: "발표자 가시성 업데이트 중 오류가 발생했습니다. 다시 시도해 주세요."
                        },
                        "pt-BR": {
                          singular: "Ocorreu um erro ao atualizar a visibilidade do palestrante. Tente novamente."
                        },
                        "zh-CN": {
                          singular: "更新演讲者可见性时出错。请重试。"
                        }
                      }
                    }))
                  });
                }).finally(() => {
                  _v3(null);
                })) : _v10({
                  newStatus: "visible" === _v0
                });
              }
            })]
          })
        }), (0, _v1.jsx)(_v14.Button, {
          isDisabled: !_v19 || !_v8,
          onClick: () => {
            _v11(), _v1(!0);
          },
          size: "sm",
          variant: "secondary",
          width: "100%",
          children: (0, _v10.translate)({
            singular: "Manage visible speakers",
            dictionary: {
              es: {
                singular: "Administrar ponentes visibles"
              },
              "de-DE": {
                singular: "Sichtbare Sprecher verwalten"
              },
              "fr-FR": {
                singular: "Gérer les intervenants visibles"
              },
              "ja-JP": {
                singular: "表示されるスピーカーを管理"
              },
              "ko-KR": {
                singular: "표시되는 스피커 관리"
              },
              "pt-BR": {
                singular: "Gerenciar palestrantes visíveis"
              },
              "zh-CN": {
                singular: "管理可见演讲者"
              }
            }
          })
        })]
      }), _v0 ? (0, _v1.jsx)(_v94, {
        isOpen: _v0,
        onClose: () => _v1(!1),
        eventId: _v7
      }) : null]
    });
  }
  var _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0);
  let _v104 = {
    type: "vimeo",
    uri: null,
    url: null
  };
  function _v105({
    eventSettingsContext: {
      settings: {
        value: _v0
      },
      actions: {
        updateLiveEventSettings: _v1
      }
    } = (0, _v12.useManager)(_v102.EventSettingsManager)
  }) {
    let [_v2, _v3] = (0, _v13.useState)(!1),
      {
        trackSingleEventCustomizationLogoChanged: _v4
      } = (0, _v28.useSingleEventCustomizationTracking)(),
      _v5 = _v0?.landingPageLogo ?? _v104,
      _v6 = [{
        label: (0, _v10.translate)({
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
      }, {
        label: (0, _v10.translate)({
          singular: "Custom logo",
          dictionary: {
            es: {
              singular: "Logotipo personalizado"
            },
            "de-DE": {
              singular: "Benutzerdefiniertes Logo"
            },
            "fr-FR": {
              singular: "Logo personnalisé"
            },
            "ja-JP": {
              singular: "カスタムロゴ"
            },
            "ko-KR": {
              singular: "사용자 지정 로고"
            },
            "pt-BR": {
              singular: "Logotipo personalizado"
            },
            "zh-CN": {
              singular: "自定义徽标"
            }
          }
        }),
        value: "custom"
      }, {
        label: (0, _v10.translate)({
          singular: "Vimeo logo",
          dictionary: {
            es: {
              singular: "Logotipo de Vimeo"
            },
            "de-DE": {
              singular: "Vimeo-Logo"
            },
            "fr-FR": {
              singular: "Logo Vimeo"
            },
            "ja-JP": {
              singular: "Vimeo ロゴ"
            },
            "ko-KR": {
              singular: "Vimeo 로고"
            },
            "pt-BR": {
              singular: "Logotipo do Vimeo"
            },
            "zh-CN": {
              singular: "Vimeo 徽标"
            }
          }
        }),
        value: "vimeo"
      }];
    return (0, _v1.jsxs)(_v7.Flex, {
      direction: "column",
      gap: (0, _v8.rem)(16),
      width: "100%",
      children: [(0, _v1.jsx)(_v100.Select, {
        defaultValue: [_v5.type],
        items: _v6,
        onValueChange: _v0 => {
          var _v1;
          _v1({
            landingPageLogo: "custom" === (_v1 = _v0.value[0]) ? {
              type: _v1,
              uri: _v5.uri,
              url: _v5.url
            } : {
              type: _v1,
              uri: null,
              url: null
            }
          }).then(() => _v4({
            logoType: _v1
          }));
        },
        withPortal: !1
      }), "custom" === _v5.type ? (0, _v1.jsx)(_v103.LogoPickerBrandKit, {
        LogoPickerControlComponent: () => (0, _v1.jsxs)(_v7.Flex, {
          align: "center",
          as: "button",
          backgroundColor: "surface",
          borderColor: "input-stroke",
          borderRadius: (0, _v8.rem)(8),
          borderStyle: "solid",
          borderWidth: (0, _v8.rem)(1),
          gap: (0, _v8.rem)(12),
          onClick: () => _v3(_v0 => !_v0),
          padding: (0, _v8.rem)(8),
          type: "button",
          width: "100%",
          children: [(0, _v1.jsx)(_v31.Box, {
            alignItems: "center",
            backgroundColor: "fill-component",
            borderRadius: (0, _v8.rem)(6),
            display: "flex",
            flexShrink: 0,
            height: (0, _v8.rem)(48),
            justifyContent: "center",
            overflow: "hidden",
            width: (0, _v8.rem)(48),
            children: _v5.url ? (0, _v1.jsx)(_v31.Box, {
              alt: (0, _v10.translate)({
                singular: "Custom logo",
                dictionary: {
                  es: {
                    singular: "Logotipo personalizado"
                  },
                  "de-DE": {
                    singular: "Benutzerdefiniertes Logo"
                  },
                  "fr-FR": {
                    singular: "Logo personnalisé"
                  },
                  "ja-JP": {
                    singular: "カスタムロゴ"
                  },
                  "ko-KR": {
                    singular: "사용자 지정 로고"
                  },
                  "pt-BR": {
                    singular: "Logotipo personalizado"
                  },
                  "zh-CN": {
                    singular: "自定义徽标"
                  }
                }
              }),
              as: "img",
              height: "100%",
              objectFit: "contain",
              src: _v5.url,
              width: "100%"
            }) : (0, _v1.jsx)(_v101.Upload, {
              boxSize: 20,
              color: "text-primary"
            })
          }), (0, _v1.jsx)(_v9.Text, {
            color: "text-primary",
            textAlign: "left",
            variant: "heading-xs",
            children: _v5.url ? (0, _v10.translate)({
              singular: "Change picture",
              dictionary: {
                es: {
                  singular: "Cambiar imagen"
                },
                "de-DE": {
                  singular: "Bild ändern"
                },
                "fr-FR": {
                  singular: "Changer l'image"
                },
                "ja-JP": {
                  singular: "画像を変更"
                },
                "ko-KR": {
                  singular: "사진 변경"
                },
                "pt-BR": {
                  singular: "Alterar imagem"
                },
                "zh-CN": {
                  singular: "更换图片"
                }
              }
            }) : (0, _v10.translate)({
              singular: "Upload picture",
              dictionary: {
                es: {
                  singular: "Subir imagen"
                },
                "de-DE": {
                  singular: "Bild hochladen"
                },
                "fr-FR": {
                  singular: "Téléverser l'image"
                },
                "ja-JP": {
                  singular: "画像をアップロード"
                },
                "ko-KR": {
                  singular: "사진 업로드"
                },
                "pt-BR": {
                  singular: "Enviar imagem"
                },
                "zh-CN": {
                  singular: "上传图片"
                }
              }
            })
          })]
        }),
        initialLogo: _v5.url ? {
          url: _v5.url,
          uri: _v5.uri ?? void 0
        } : void 0,
        isPickerOpen: _v2,
        onClose: () => _v3(!1),
        onLogoSelect: ({
          logoUri: _v0,
          logoUrl: _v1
        }) => {
          _v1({
            landingPageLogo: {
              type: "custom",
              uri: _v0,
              url: _v1
            }
          }), _v3(!1);
        },
        popoverPlacement: "bottom-start",
        visualMatchingEnabled: !0
      }) : null]
    });
  }
  var _v106 = _v0.i(0);
  _v0.s(["LandingPageSettings", 0, function () {
    let _v0 = (0, _v11.useOrionSettingsFields)(["release_single_event_customization"]);
    return (0, _v1.jsxs)(_v7.Flex, {
      direction: "column",
      gap: (0, _v8.rem)(16),
      width: "100%",
      children: [(0, _v1.jsx)(_v9.Text, {
        color: "text-secondary",
        variant: "body-sm",
        children: (0, _v10.translate)({
          singular: "The event landing page is what users see when you share the link to this event.",
          dictionary: {
            es: {
              singular: "La página de destino del evento es lo que ven los usuarios cuando compartes el enlace a este evento."
            },
            "de-DE": {
              singular: "Die Event-Landingpage ist die Seite, die Nutzer sehen, wenn Sie den Link zu dieser Veranstaltung teilen."
            },
            "fr-FR": {
              singular: "La page de destination de l'événement est ce que voient les utilisateurs lorsque vous partagez le lien vers cet événement."
            },
            "ja-JP": {
              singular: "イベントのランディングページは、このイベントへのリンクを共有したときにユーザーが見るページです。"
            },
            "ko-KR": {
              singular: "이벤트 랜딩 페이지는 이 이벤트의 링크를 공유했을 때 사용자가 보게 되는 페이지입니다."
            },
            "pt-BR": {
              singular: "A página de destino do evento é o que os usuários veem quando você compartilha o link deste evento."
            },
            "zh-CN": {
              singular: "活动着陆页是在您分享该活动链接时用户看到的页面。"
            }
          }
        })
      }), (0, _v1.jsxs)(_v2.Accordion, {
        allowMultiple: !0,
        defaultIndex: [0, 1],
        width: "100%",
        children: [(0, _v1.jsxs)(_v5.AccordionItem, {
          children: [(0, _v1.jsx)(_v9.Text, {
            variant: "heading-xs",
            children: (0, _v1.jsxs)(_v3.AccordionButton, {
              children: [(0, _v10.translate)({
                singular: "Navbar logo",
                dictionary: {
                  es: {
                    singular: "Logotipo de la barra de navegación"
                  },
                  "de-DE": {
                    singular: "Navbar-Logo"
                  },
                  "fr-FR": {
                    singular: "Logo de la barre de navigation"
                  },
                  "ja-JP": {
                    singular: "ナビゲーションバーのロゴ"
                  },
                  "ko-KR": {
                    singular: "네비게이션 바 로고"
                  },
                  "pt-BR": {
                    singular: "Logotipo da barra de navegação"
                  },
                  "zh-CN": {
                    singular: "导航栏徽标"
                  }
                }
              }), (0, _v1.jsx)(_v4.AccordionIcon, {})]
            })
          }), (0, _v1.jsx)(_v6.AccordionPanel, {
            children: (0, _v1.jsx)(_v105, {})
          })]
        }), _v0.release_single_event_customization ? (0, _v1.jsxs)(_v5.AccordionItem, {
          children: [(0, _v1.jsx)(_v9.Text, {
            variant: "heading-xs",
            children: (0, _v1.jsxs)(_v3.AccordionButton, {
              children: [_v106.translations.speakers, (0, _v1.jsx)(_v4.AccordionIcon, {})]
            })
          }), (0, _v1.jsx)(_v6.AccordionPanel, {
            children: (0, _v1.jsx)(_v99, {})
          })]
        }) : null]
      })]
    });
  }], 0);
}