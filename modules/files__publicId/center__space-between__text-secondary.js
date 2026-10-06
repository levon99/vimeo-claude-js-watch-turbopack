{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = () => (0, _v1.jsx)(_v4.ErrorPageWithHeader, {
    error: new _v3.ForbiddenError(),
    shouldShowSearch: !1
  });
  var _v6 = _v0.i(0),
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
    _v18 = _v0.i(0);
  let _v19 = ({
      label: _v0,
      value: _v1
    }) => (0, _v1.jsxs)(_v7.Flex, {
      alignItems: "center",
      gap: "sm",
      justifyContent: "space-between",
      children: [(0, _v1.jsx)(_v12.Text, {
        color: "text-secondary",
        variant: "body-sm",
        children: _v0
      }), (0, _v1.jsx)(_v12.Text, {
        variant: "body-sm",
        children: _v1
      })]
    }),
    _v20 = ({
      file: _v0
    }) => {
      let _v1 = (0, _v18.useFormatDateTime)(),
        _v2 = (0, _v14.getContentTypeCategory)(_v0.contentType),
        _v3 = (0, _v14.getFileExtension)(_v0.name),
        _v4 = (0, _v17.getContentTypeLabel)(_v2),
        _v5 = "" === _v3 ? _v4 : `${_v4} \xb7 ${_v3}`,
        _v6 = "" === _v3 ? _v4 : _v3,
        _v7 = _v0.fileSize > 0 ? String((0, _v16.bytesToSize)(_v0.fileSize, 1)) : "",
        _v8 = _v0.uploader.name,
        _v9 = _v0.uploader.pictures?.sizes?.[0]?.link,
        _v10 = _v0.allowDownloads && null != _v0.downloadUrl && "" !== _v0.downloadUrl;
      return (0, _v1.jsxs)(_v7.Flex, {
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
        children: [(0, _v1.jsxs)(_v7.Flex, {
          flexDirection: "column",
          gap: "xl",
          children: [(0, _v1.jsxs)(_v7.Flex, {
            flexDirection: "column",
            gap: "sm",
            children: [(0, _v1.jsx)(_v14.FileThumbnailContent, {
              contentType: _v0.contentType,
              name: _v0.name,
              variant: "filled"
            }), (0, _v1.jsxs)(_v7.Flex, {
              flexDirection: "column",
              children: [(0, _v1.jsx)(_v12.Text, {
                noOfLines: 2,
                variant: "heading-md",
                children: _v0.name
              }), (0, _v1.jsx)(_v12.Text, {
                color: "text-secondary",
                variant: "body-sm",
                children: _v5
              })]
            })]
          }), _v10 && (0, _v1.jsx)(_v10.Button, {
            as: "a",
            "data-testid": "file-viewer-download",
            href: _v0.downloadUrl,
            leftIcon: (0, _v1.jsx)(_v13.DownloadImport, {}),
            variant: "secondary",
            width: "100%",
            children: (0, _v15.translate)({
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
          }), (0, _v1.jsx)(_v11.Divider, {}), (0, _v1.jsxs)(_v7.Flex, {
            flexDirection: "column",
            gap: "sm",
            children: [(0, _v1.jsx)(_v19, {
              label: (0, _v15.translate)({
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
            }), (0, _v1.jsx)(_v19, {
              label: (0, _v15.translate)({
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
            }), (0, _v1.jsx)(_v19, {
              label: (0, _v15.translate)({
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
        }), (0, _v1.jsxs)(_v7.Flex, {
          alignItems: "center",
          gap: "md",
          children: [(0, _v1.jsx)(_v9.Avatar, {
            alt: _v8,
            nameProps: {
              name: _v8
            },
            size: "md",
            src: _v9
          }), (0, _v1.jsxs)(_v7.Flex, {
            flexDirection: "column",
            children: [(0, _v1.jsx)(_v12.Text, {
              color: "text-secondary",
              variant: "body-xs",
              children: (0, _v15.translate)({
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
            }), (0, _v1.jsx)(_v12.Text, {
              variant: "body-md",
              children: _v8
            })]
          })]
        })]
      });
    },
    _v21 = ({
      file: _v0
    }) => (0, _v1.jsxs)(_v7.Flex, {
      background: "background",
      flexDirection: "column",
      minHeight: "100vh",
      children: [(0, _v1.jsx)(_v8.DefaultNavigation, {}), (0, _v1.jsxs)(_v7.Flex, {
        alignItems: "stretch",
        flexDirection: {
          base: "column",
          lg: "row"
        },
        flexGrow: 1,
        gap: "lg",
        p: "lg",
        children: [(0, _v1.jsx)(_v6.Box, {
          background: "black",
          borderRadius: "md",
          "data-testid": "file-viewer-preview",
          flexGrow: 1,
          minHeight: {
            base: "18rem",
            lg: "45rem"
          }
        }), (0, _v1.jsx)(_v20, {
          file: _v0
        })]
      })]
    });
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  async function _v24({
    baseUrl: _v0,
    select: _v1,
    where: {
      fileId: _v2
    },
    ..._v3
  }) {
    return (0, _v22.measureLatency)("getFile", "GET", async () => {
      let _v0 = await fetch(`${_v0}/files/${_v2}?fields=${_v1.map(_v23.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v23.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v23.deepCamelCase)(_v1);
    });
  }
  let _v25 = ["publicId", "name", "contentType", "fileSize", "privacy", "allowDownloads", "downloadUrl", "createdTime", "uploader.name", "uploader.pictures.sizes"],
    _v26 = async _v0 => {
      let _v1 = _v0.query.publicId,
        _v2 = (Array.isArray(_v1) ? _v1[0] : _v1) ?? "";
      try {
        let _v0 = await _v24({
          select: _v25,
          where: {
            fileId: _v2
          },
          baseUrl: _v0.baseUrl,
          headers: {
            ..._v0.headers,
            accept: "application/json"
          }
        });
        return {
          props: {
            publicId: _v2,
            file: _v0
          }
        };
      } catch {
        return _v0.res.statusCode = 404, {
          props: {
            publicId: _v2,
            file: null
          }
        };
      }
    };
  (0, _v2.withPageSetup)(_v26, {
    inlineViewer: "all",
    noIndex: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, ({
    file: _v0
  }) => null === _v0 ? (0, _v1.jsx)(_v5, {}) : (0, _v1.jsx)(_v21, {
    file: _v0
  })], 0);
}