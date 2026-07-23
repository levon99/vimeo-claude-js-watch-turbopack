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
    _v23 = _v0.i(0);
  let _v24 = ({
    files: _v0,
    registerClick: _v1
  }) => (0, _v1.jsx)(_v2.Flex, {
    direction: "column",
    w: "100%",
    py: "100",
    children: (0, _v1.jsx)(_v2.Flex, {
      gap: "1.75rem",
      direction: "column",
      children: _v0.map(_v0 => (0, _v1.jsxs)(_v2.Flex, {
        align: "center",
        justify: "space-between",
        children: [(0, _v1.jsx)(_v21.Paragraph, {
          size: "lg",
          fontWeight: "500",
          minW: "3.13rem",
          children: _v0.displayLanguage
        }), (0, _v1.jsx)(_v22.IconButton, {
          "aria-label": (0, _v20.translate)({
            singular: "Download",
            dictionary: {
              es: {
                singular: "Descargar"
              },
              "de-DE": {
                singular: "Herunterladen"
              },
              "fr-FR": {
                singular: "Télécharger "
              },
              "ja-JP": {
                singular: "ダウンロード"
              },
              "ko-KR": {
                singular: "다운로드"
              },
              "pt-BR": {
                singular: "Baixar"
              },
              "zh-CN": {
                singular: "下载"
              }
            }
          }),
          as: "a",
          href: _v0.link,
          variant: "secondary",
          icon: (0, _v1.jsx)(_v23.DownloadImport, {}),
          onClick: () => _v1(_v0.language)
        })]
      }, _v0.id))
    })
  });
  var _v25 = _v0.i(0);
  let _v26 = ({
      videoFiles: _v0,
      videoId: _v1,
      clipRequestId: _v2,
      texttracks: _v3,
      onTranscriptDownload: _v4,
      isLoadingVideoFiles: _v5
    }) => {
      let _v6 = _v0 => {
        _v0 && _v4?.(_v0);
      };
      return 0 === _v3.length ? (0, _v1.jsx)(_v2.Flex, {
        direction: "column",
        w: "100%",
        py: "100",
        children: _v5 ? (0, _v1.jsx)(_v27, {}) : (0, _v1.jsx)(_v19.DownloadFilesContent, {
          files: _v0,
          videoID: _v1 ? parseInt(_v1) : void 0,
          clipRequestId: _v2,
          pageName: "viewer_home"
        })
      }) : 0 === _v0.length ? (0, _v1.jsx)(_v24, {
        files: _v3,
        registerClick: _v6
      }) : (0, _v1.jsxs)(_v12.Tabs, {
        variant: "inlay",
        size: "sm",
        width: "100%",
        defaultIndex: 0,
        children: [(0, _v1.jsxs)(_v13.TabList, {
          children: [(0, _v1.jsx)(_v11.Tab, {
            children: (0, _v20.translate)({
              singular: "Video",
              dictionary: {
                "fr-FR": {
                  singular: "Vidéo"
                },
                "ja-JP": {
                  singular: "動画"
                },
                "ko-KR": {
                  singular: "동영상"
                },
                "pt-BR": {
                  singular: "Vídeo"
                },
                "zh-CN": {
                  singular: "视频"
                }
              }
            })
          }), (0, _v1.jsx)(_v11.Tab, {
            children: (0, _v20.translate)({
              singular: "Transcript",
              dictionary: {
                es: {
                  singular: "Transcripción"
                },
                "de-DE": {
                  singular: "Transkript"
                },
                "fr-FR": {
                  singular: "Transcription"
                },
                "ja-JP": {
                  singular: "トランスクリプト"
                },
                "ko-KR": {
                  singular: "스크립트"
                },
                "pt-BR": {
                  singular: "Transcrição"
                },
                "zh-CN": {
                  singular: "文字稿"
                }
              }
            })
          }), (0, _v1.jsx)(_v12.TabIndicator, {})]
        }), (0, _v1.jsxs)(_v14.TabPanels, {
          children: [(0, _v1.jsx)(_v15.TabPanel, {
            children: (0, _v1.jsx)(_v2.Flex, {
              direction: "column",
              w: "100%",
              py: "100",
              children: _v5 ? (0, _v1.jsx)(_v27, {}) : (0, _v1.jsx)(_v19.DownloadFilesContent, {
                files: _v0,
                videoID: _v1 ? parseInt(_v1) : void 0,
                clipRequestId: _v2,
                pageName: "viewer_home"
              })
            })
          }), (0, _v1.jsx)(_v15.TabPanel, {
            children: (0, _v1.jsx)(_v24, {
              files: _v3,
              registerClick: _v6
            })
          })]
        })]
      });
    },
    _v27 = () => (0, _v1.jsx)(_v18.Center, {
      py: "xl",
      children: (0, _v1.jsx)(_v17.Spinner, {})
    });
  _v0.s(["DownloadList", 0, ({
    isOpen: _v0 = !1,
    onClose: _v1,
    showAsModal: _v2 = !1,
    videoFiles: _v3,
    texttracks: _v4,
    videoId: _v5,
    clipRequestId: _v6,
    onTranscriptDownload: _v7,
    isLoadingVideoFiles: _v8
  }) => {
    let _v9 = (0, _v20.translate)({
      singular: "Download",
      dictionary: {
        es: {
          singular: "Descargar"
        },
        "de-DE": {
          singular: "Herunterladen"
        },
        "fr-FR": {
          singular: "Télécharger "
        },
        "ja-JP": {
          singular: "ダウンロード"
        },
        "ko-KR": {
          singular: "다운로드"
        },
        "pt-BR": {
          singular: "Baixar"
        },
        "zh-CN": {
          singular: "下载"
        }
      }
    });
    return (!_v8 && 0 === _v3.length && _v4.length >= 1 ? _v9 = (0, _v20.translate)({
      singular: "Download transcript",
      dictionary: {
        es: {
          singular: "Descargar transcripción"
        },
        "de-DE": {
          singular: "Transkript herunterladen"
        },
        "fr-FR": {
          singular: "Télécharger la transcription"
        },
        "ja-JP": {
          singular: "トランスクリプトのダウンロード"
        },
        "ko-KR": {
          singular: "텍스트 변환 다운로드"
        },
        "pt-BR": {
          singular: "Baixe a transcrição"
        },
        "zh-CN": {
          singular: "下载转录"
        }
      }
    }) : !_v8 && _v3.length >= 1 && 0 === _v4.length && (_v9 = (0, _v20.translate)({
      singular: "Download video",
      dictionary: {
        es: {
          singular: "Descargar el video"
        },
        "de-DE": {
          singular: "Video herunterladen"
        },
        "fr-FR": {
          singular: "Télécharger la vidéo"
        },
        "ja-JP": {
          singular: "動画をダウンロード"
        },
        "ko-KR": {
          singular: "동영상 다운로드"
        },
        "pt-BR": {
          singular: "Baixar vídeo"
        },
        "zh-CN": {
          singular: "下载视频"
        }
      }
    })), _v2) ? (0, _v1.jsxs)(_v3.Modal, {
      isOpen: _v0,
      onClose: () => _v1?.(),
      size: "sm",
      children: [(0, _v1.jsx)(_v4.ModalOverlay, {}), (0, _v1.jsxs)(_v5.ModalContent, {
        children: [(0, _v1.jsx)(_v7.ModalHeader, {
          children: (0, _v1.jsx)(_v9.Text, {
            variant: "heading-md",
            as: "h4",
            children: _v9
          })
        }), (0, _v1.jsx)(_v6.ModalCloseButton, {}), (0, _v1.jsx)(_v8.ModalBody, {
          py: "300",
          borderBottomRadius: "xl",
          children: (0, _v1.jsx)(_v26, {
            videoFiles: _v3,
            texttracks: _v4,
            videoId: _v5,
            clipRequestId: _v6,
            onTranscriptDownload: _v7,
            isLoadingVideoFiles: _v8
          })
        })]
      })]
    }) : (0, _v1.jsxs)(_v10.VStack, {
      w: "inherit",
      h: "100%",
      overflowY: "auto",
      align: "stretch",
      children: [(0, _v1.jsx)(_v25.ModuleHeader, {
        text: _v9,
        onClose: _v1
      }), (0, _v1.jsx)(_v16.Box, {
        px: "300",
        children: (0, _v1.jsx)(_v26, {
          videoFiles: _v3,
          texttracks: _v4,
          videoId: _v5,
          clipRequestId: _v6,
          onTranscriptDownload: _v7,
          isLoadingVideoFiles: _v8
        })
      })]
    });
  }], 0);
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  let _v38 = ({
    clipId: _v0,
    isOpen: _v1,
    onClose: _v2,
    onSubmitReport: _v3
  }) => {
    let _v4 = (0, _v37.useReport)({
        clipId: _v0,
        onClose: _v2,
        onSubmitReport: _v3,
        ownConfirmation: !0
      }),
      _v5 = (0, _v28.useRef)(null);
    return (0, _v28.useEffect)(() => {
      _v1 && _v4.hasData && _v5.current?.focus();
    }, [_v1, _v4.hasData]), (0, _v1.jsxs)(_v3.Modal, {
      isOpen: _v1,
      onClose: _v4.handleClose,
      scrollBehavior: "inside",
      initialFocusRef: _v5,
      children: [(0, _v1.jsx)(_v4.ModalOverlay, {}), (0, _v1.jsxs)(_v5.ModalContent, {
        maxHeight: "calc(100% - 3rem)",
        children: [(0, _v1.jsx)(_v7.ModalHeader, {
          children: (0, _v1.jsxs)(_v2.Flex, {
            align: "center",
            gap: "100",
            children: [_v4.canGoBack ? (0, _v1.jsx)(_v22.IconButton, {
              "aria-label": (0, _v33.backLabel)(),
              variant: "tertiary",
              size: "sm",
              icon: (0, _v1.jsx)(_v32.ArrowLeft, {}),
              onClick: _v4.onBack
            }) : null, (0, _v1.jsxs)(_v16.Box, {
              flex: "1",
              minW: "0",
              children: [(0, _v1.jsx)(_v9.Text, {
                variant: "body-lg",
                fontWeight: "bold",
                children: _v4.title
              }), (0, _v1.jsx)(_v9.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: _v4.subtitle
              })]
            }), (0, _v1.jsx)(_v36.ReportHelpLink, {}), (0, _v1.jsx)(_v6.ModalCloseButton, {
              position: "static"
            })]
          })
        }), (0, _v1.jsx)(_v31.Progress, {
          value: _v4.progress,
          size: "xs",
          mt: "200",
          sx: {
            "& > div": {
              transitionProperty: "width",
              transitionDuration: "300ms"
            }
          }
        }), (0, _v1.jsx)(_v8.ModalBody, {
          flex: "1 1 0%",
          overflow: "auto",
          pb: "300",
          children: (0, _v1.jsx)(_v35.ReportBody, {
            isLoading: _v4.isLoading,
            hasData: _v4.hasData,
            error: _v4.error,
            step: _v4.step,
            currentOptions: _v4.currentOptions,
            selected: _v4.selected,
            onSelectNode: _v4.onSelectNode,
            onDone: _v4.handleClose,
            firstOptionRef: _v5
          })
        }), _v4.showFooter ? (0, _v1.jsx)(_v30.ModalFooter, {
          children: (0, _v1.jsxs)(_v2.Flex, {
            direction: "column",
            align: "center",
            width: "100%",
            gap: "100",
            children: [(0, _v1.jsx)(_v34.ContextualReportHelp, {
              currentMenuId: _v4.currentMenuId,
              step: _v4.step
            }), (0, _v1.jsx)(_v29.Button, {
              variant: "primary",
              size: "md",
              width: "100%",
              onClick: _v4.onSubmit,
              isDisabled: _v4.submitDisabled,
              children: _v4.submitLabel
            })]
          })
        }) : null]
      })]
    });
  };
  _v0.s(["ReportVideoModal", 0, _v0 => _v0.isOpen ? (0, _v1.jsx)(_v38, {
    ..._v0
  }) : null], 0);
}