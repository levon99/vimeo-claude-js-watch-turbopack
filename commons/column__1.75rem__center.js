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
    _v30 = _v0.i(0);
  let _v31 = ({
    header: _v0,
    cta: _v1,
    reasons: _v2,
    isOpen: _v3,
    isPosting: _v4,
    reportReason: _v5,
    setReportReason: _v6,
    onCloseCleanup: _v7,
    submitReport: _v8
  }) => (0, _v1.jsxs)(_v3.Modal, {
    isOpen: _v3,
    onClose: _v7,
    scrollBehavior: "inside",
    children: [(0, _v1.jsx)(_v4.ModalOverlay, {}), (0, _v1.jsxs)(_v5.ModalContent, {
      maxHeight: "calc(100% - 3rem)",
      children: [(0, _v1.jsx)(_v7.ModalHeader, {
        children: _v0
      }), (0, _v1.jsx)(_v6.ModalCloseButton, {}), (0, _v1.jsx)(_v8.ModalBody, {
        flex: "1 1 0%",
        overflow: "auto",
        children: (0, _v1.jsx)(_v29.ReportReasonList, {
          cta: _v1,
          reasons: _v2,
          reportReason: _v5,
          setReportReason: _v6
        })
      }), (0, _v1.jsx)(_v28.ModalFooter, {
        border: "none",
        py: "200",
        children: (0, _v1.jsx)(_v29.ReportActions, {
          isSubmitDisabled: _v5 == _v30.REASON_UNSELECTED || _v4,
          onClose: _v7,
          onSubmit: _v8
        })
      })]
    })]
  });
  _v0.s(["ReportModal", 0, _v31], 0);
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  _v0.s(["ReportVideoModal", 0, ({
    clipId: _v0,
    isOpen: _v1,
    onClose: _v2,
    onSubmitReport: _v3
  }) => {
    let {
        reportReason: _v4,
        setReportReason: _v5,
        resetReason: _v6,
        isPosting: _v7,
        postReport: _v8
      } = (0, _v33.useReportVideo)({
        clipId: _v0,
        onSuccess: _v3
      }),
      _v9 = () => {
        _v6(), _v2();
      },
      _v10 = async () => {
        await _v8(_v4), _v9();
      };
    return (0, _v1.jsx)(_v31, {
      header: (0, _v20.translate)({
        singular: "Report this video",
        dictionary: {
          es: {
            singular: "Reportar este video"
          },
          "de-DE": {
            singular: "Dieses Video melden"
          },
          "fr-FR": {
            singular: "Signaler cette vidéo"
          },
          "ja-JP": {
            singular: "この動画を報告する"
          },
          "ko-KR": {
            singular: "이 동영상 신고"
          },
          "pt-BR": {
            singular: "Denunciar este vídeo"
          },
          "zh-CN": {
            singular: "举报此视频"
          }
        }
      }),
      cta: (0, _v20.translate)({
        singular: "Why are you reporting this video?",
        dictionary: {
          es: {
            singular: "¿Por qué denuncias este video?"
          },
          "de-DE": {
            singular: "Warum meldest du dieses Video?"
          },
          "fr-FR": {
            singular: "Pourquoi signalez-vous cette vidéo ?"
          },
          "ja-JP": {
            singular: "この動画の報告理由"
          },
          "ko-KR": {
            singular: "이 동영상을 신고하는 이유가 무엇입니까?"
          },
          "pt-BR": {
            singular: "Por que você está denunciando este vídeo?"
          },
          "zh-CN": {
            singular: "您为什么要举报这个视频？"
          }
        }
      }),
      reasons: _v32.ReportReasons,
      isOpen: _v1,
      isPosting: _v7,
      reportReason: _v4,
      setReportReason: _v5,
      onCloseCleanup: _v9,
      submitReport: _v10
    });
  }], 0);
}