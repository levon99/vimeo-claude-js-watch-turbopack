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
    _v18 = _v0.i(0);
  let _v19 = ({
    closeDrawer: _v0,
    onCloseSearch: _v1,
    searchCommentQuery: _v2,
    setSearchCommentQuery: _v3,
    showCommentSearchBar: _v4,
    onSearchClick: _v5,
    onDownloadComments: _v6,
    searchInputRef: _v7,
    panelHeaderRef: _v8,
    isPreviousVersion: _v9 = !1
  }) => {
    let _v10 = (0, _v2.useRef)(null),
      _v11 = (0, _v9.default)(_v0 => {
        _v3(_v0.target.value.trim());
      }, 500);
    return (0, _v18.default)([_v7], () => {
      _v4 && !_v2 && _v1();
    }, null, [_v2, _v4]), (0, _v1.jsx)(_v4.Box, {
      padding: "md",
      ref: _v8,
      children: _v4 ? (0, _v1.jsx)(_v16.SearchComments, {
        updateCommentSearchQuery: _v11,
        onCloseSearch: _v1,
        searchInputRef: _v7
      }) : (0, _v1.jsxs)(_v3.Flex, {
        gap: "xs",
        alignItems: "center",
        justifyContent: "space-between",
        height: "sm",
        children: [(0, _v1.jsx)(_v3.Flex, {
          alignItems: "center",
          gap: "sm",
          children: (0, _v1.jsx)(_v10.Header, {
            variant: "heading-sm",
            size: "xl",
            children: (0, _v17.translate)({
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
            })
          })
        }), (0, _v1.jsxs)(_v3.Flex, {
          gap: "xs",
          children: [(0, _v1.jsx)(_v13.Tooltip, {
            label: (0, _v17.translate)({
              singular: "Search",
              dictionary: {
                es: {
                  singular: "Buscar"
                },
                "de-DE": {
                  singular: "Suchen"
                },
                "fr-FR": {
                  singular: "Chercher"
                },
                "ja-JP": {
                  singular: "検索"
                },
                "ko-KR": {
                  singular: "검색"
                },
                "pt-BR": {
                  singular: "Pesquisar"
                },
                "zh-CN": {
                  singular: "搜索"
                }
              }
            }),
            placement: "top",
            children: (0, _v1.jsx)(_v11.IconButton, {
              size: "sm",
              variant: "tertiary",
              icon: (0, _v1.jsx)(_v14.SearchMagnifierFilled, {}),
              "aria-label": (0, _v17.translate)({
                singular: "Search",
                dictionary: {
                  es: {
                    singular: "Buscar"
                  },
                  "de-DE": {
                    singular: "Suchen"
                  },
                  "fr-FR": {
                    singular: "Chercher"
                  },
                  "ja-JP": {
                    singular: "検索"
                  },
                  "ko-KR": {
                    singular: "검색"
                  },
                  "pt-BR": {
                    singular: "Pesquisar"
                  },
                  "zh-CN": {
                    singular: "搜索"
                  }
                }
              }),
              onClick: _v5
            })
          }), !_v9 && (0, _v1.jsx)(_v13.Tooltip, {
            label: (0, _v17.translate)({
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
            placement: "top",
            children: (0, _v1.jsx)(_v11.IconButton, {
              size: "sm",
              variant: "tertiary",
              icon: (0, _v1.jsx)(_v15.DownloadImport, {}),
              "aria-label": (0, _v17.translate)({
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
              onClick: () => {
                _v10.current && _v10.current.blur(), _v6();
              },
              ref: _v10
            })
          }), (0, _v1.jsx)(_v13.Tooltip, {
            label: (0, _v17.translate)({
              singular: "Close",
              dictionary: {
                es: {
                  singular: "Cerrar"
                },
                "de-DE": {
                  singular: "Schließen"
                },
                "fr-FR": {
                  singular: "Fermer "
                },
                "ja-JP": {
                  singular: "閉じる"
                },
                "ko-KR": {
                  singular: "닫기"
                },
                "pt-BR": {
                  singular: "Fechar"
                },
                "zh-CN": {
                  singular: "关闭"
                }
              }
            }),
            placement: "top",
            shouldWrapChildren: !0,
            children: (0, _v1.jsx)(_v12.CloseButton, {
              size: "sm",
              variant: "tertiary",
              "aria-label": (0, _v17.translate)({
                singular: "close",
                dictionary: {
                  es: {
                    singular: "Cerrar"
                  },
                  "de-DE": {
                    singular: "Schließen"
                  },
                  "fr-FR": {
                    singular: "fermer"
                  },
                  "ja-JP": {
                    singular: "閉じる"
                  },
                  "ko-KR": {
                    singular: "닫기"
                  },
                  "pt-BR": {
                    singular: "fechar"
                  },
                  "zh-CN": {
                    singular: "关闭"
                  }
                }
              }),
              onClick: () => _v0(!0)
            })
          })]
        })]
      })
    });
  };
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = ({
    children: _v0,
    isMobile: _v1,
    showComments: _v2
  }) => _v1 ? (0, _v1.jsx)(_v20.Drawer, {
    isOpen: _v2,
    onClose: () => "",
    placement: "bottom",
    closeOnOverlayClick: !1,
    trapFocus: !1,
    preserveScrollBarGap: !0,
    children: (0, _v1.jsx)(_v21.DrawerContent, {
      sx: {
        '&[data-placement="bottom"]': {
          maxWidth: "100%",
          marginBottom: "0px",
          marginTop: "10px"
        }
      },
      children: _v0
    })
  }) : _v2 ? (0, _v1.jsx)(_v4.Box, {
    width: (0, _v22.rem)(_v23.COMMENTS_PANEL_WIDTH),
    marginLeft: "lg",
    children: _v0
  }) : null;
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  let _v35 = ({
    isOpen: _v0,
    close: _v1,
    onDownload: _v2,
    collaboratorCommentsCount: _v3 = 0
  }) => (0, _v1.jsxs)(_v25.Modal, {
    size: "sm",
    isOpen: _v0,
    onClose: _v1,
    "data-testid": "download-review-comments-modal",
    children: [(0, _v1.jsx)(_v26.ModalOverlay, {}), (0, _v1.jsxs)(_v30.ModalContent, {
      children: [(0, _v1.jsx)(_v27.ModalHeader, {
        children: (0, _v1.jsx)(_v32.Text, {
          variant: "heading-md",
          children: (0, _v17.translate)({
            singular: "Download comments as CSV",
            dictionary: {
              es: {
                singular: "Descargar comentarios como CSV"
              },
              "de-DE": {
                singular: "Kommentare als CSV herunterladen"
              },
              "fr-FR": {
                singular: "Télécharger les commentaires au format CSV"
              },
              "ja-JP": {
                singular: "コメントをCSVとしてダウンロード"
              },
              "ko-KR": {
                singular: "댓글을 CSV로 다운로드"
              },
              "pt-BR": {
                singular: "Baixar comentários em CSV"
              },
              "zh-CN": {
                singular: "以 CSV 格式下载评论"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v28.ModalBody, {
        children: _v3 > 0 && (0, _v1.jsx)(_v33.Alert, {
          size: "sm",
          marginBottom: "10px",
          children: (0, _v1.jsx)(_v34.AlertDescription, {
            children: (0, _v17.translate)({
              singular: "Downloads are limited to the most recent {MAXIMUM_DOWNLOADABLE_COMMENTS_COUNT} collaborator comments.",
              replacements: {
                MAXIMUM_DOWNLOADABLE_COMMENTS_COUNT: 0
              },
              dictionary: {
                es: {
                  singular: "Las descargas están limitadas a los {MAXIMUM_DOWNLOADABLE_COMMENTS_COUNT} comentarios de colaboradores más recientes."
                },
                "de-DE": {
                  singular: "Downloads sind auf die {MAXIMUM_DOWNLOADABLE_COMMENTS_COUNT} neuesten Kommentare von Mitwirkenden beschränkt."
                },
                "fr-FR": {
                  singular: "Les téléchargements sont limités aux {MAXIMUM_DOWNLOADABLE_COMMENTS_COUNT} commentaires des collaborateurs les plus récents."
                },
                "ja-JP": {
                  singular: "ダウンロードは最新の{MAXIMUM_DOWNLOADABLE_COMMENTS_COUNT}件の共同作業者のコメントに限定されます."
                },
                "ko-KR": {
                  singular: "다운로드는 최신 {MAXIMUM_DOWNLOADABLE_COMMENTS_COUNT}개의 협업자 댓글로 제한됩니다."
                },
                "pt-BR": {
                  singular: "Os downloads são limitados aos {MAXIMUM_DOWNLOADABLE_COMMENTS_COUNT} comentários de colaboradores mais recentes."
                },
                "zh-CN": {
                  singular: "下载仅限最近 {MAXIMUM_DOWNLOADABLE_COMMENTS_COUNT} 条协作者评论."
                }
              }
            })
          })
        })
      }), (0, _v1.jsxs)(_v29.ModalFooter, {
        children: [(0, _v1.jsx)(_v31.Button, {
          onClick: _v1,
          variant: "tertiary",
          "data-testid": "download-review-comments-cancel-button",
          children: (0, _v17.translate)({
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
        }), (0, _v1.jsx)(_v31.Button, {
          onClick: _v2,
          variant: "primary",
          "data-testid": "download-review-comments-submit-button",
          children: (0, _v17.translate)({
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
          })
        })]
      })]
    })]
  });
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  _v0.s(["CommentsPanel", 0, ({
    ref: _v0,
    clipId: _v1,
    clipHash: _v2,
    onMomentPlay: _v3,
    videoVersionUri: _v4,
    closeDrawer: _v5,
    isMobile: _v6,
    playerHeight: _v7,
    showComments: _v8,
    analyticsProps: _v9,
    showResolvedComments: _v10 = !0,
    isPreviousVersion: _v11,
    commentTimeCode: _v12,
    pausePlayer: _v13
  }) => {
    let [_v14, _v15] = (0, _v2.useState)(!1),
      [_v16, _v17] = (0, _v2.useState)(0),
      _v18 = (0, _v8.useViewer)(),
      [_v19, _v20] = (0, _v2.useState)(""),
      [_v21, _v22] = (0, _v2.useState)(!1),
      {
        reviewId: _v23
      } = (0, _v2.useContext)(_v37.ReviewLinkContext),
      {
        videoData: _v24
      } = (0, _v36.useVideoData)(_v1, _v23),
      {
        trackReviewCommentPosted: _v25
      } = (0, _v7.useReviewTracking)(),
      _v26 = (0, _v2.useCallback)(() => {
        let _v0 = (0, _v38.idFromUri)(_v24?.user?.uri);
        _v25({
          reviewId: _v23 ?? "",
          clipId: _v1,
          clipOwnerId: _v0 ? _v0.toString() : null
        });
      }, [_v23, _v1, _v24, _v25]),
      _v27 = _v2 ? `${_v1}:${_v2}` : _v1,
      _v28 = _v2.default.useRef(null),
      _v29 = _v6 ? 10 : 48,
      [_v30, _v31] = (0, _v2.useState)(0),
      _v32 = `calc(100vh - ${_v6 ? _v7 : "0"}px - ${_v23.VERSION_PAGE_HEADER_HEIGHT + _v30 + _v29}px )`,
      _v33 = (0, _v2.useCallback)(() => {
        _v20(""), _v22(!1);
      }, [_v20, _v22]),
      _v34 = (0, _v2.useCallback)(_v0 => {
        null !== _v0 && _v30 !== _v0.clientHeight && _v31(_v0.clientHeight);
      }, [_v30]),
      _v35 = (0, _v2.useCallback)(() => {
        (0, _v6.bpStartSearchComment)({
          isInternal: !0,
          videoId: parseFloat(_v1),
          viewer: _v18,
          analyticsProps: _v9
        }), _v22(!0);
      }, [_v22, _v18, _v1, _v9]),
      _v36 = (0, _v2.useCallback)(() => {
        if (!_v1 || !_v23) return;
        let _v0 = (0, _v38.getReviewPasswordHashFromCookie)(_v23),
          _v1 = new URLSearchParams({
            format: "csv",
            source: "collaborator"
          });
        _v1.set("review_id", _v23), _v0 && _v1.set("password", _v0);
        let _v2 = `/videos/${_v1}/comments/export?${_v1.toString()}`;
        window.location.assign(_v2), _v15(!1);
      }, [_v1, _v23]),
      _v37 = (0, _v2.useCallback)((_v0, _v1) => {
        _v1 || _v17(_v0);
      }, [_v17]);
    return (0, _v1.jsxs)(_v24, {
      showComments: _v8,
      isMobile: _v6,
      children: [(0, _v1.jsxs)(_v3.Flex, {
        ref: _v0,
        direction: "column",
        width: "100%",
        borderRadius: "20px",
        backgroundColor: "fill-surface",
        children: [(0, _v1.jsx)(_v4.Box, {
          children: (0, _v1.jsx)(_v19, {
            searchCommentQuery: _v19,
            setSearchCommentQuery: _v20,
            searchInputRef: _v28,
            showCommentSearchBar: _v21,
            onSearchClick: _v35,
            onCloseSearch: _v33,
            closeDrawer: _v5,
            panelHeaderRef: _v34,
            onDownloadComments: () => {
              _v15(!0);
            },
            isPreviousVersion: _v11
          })
        }), (0, _v1.jsx)(_v3.Flex, {
          direction: "column",
          width: "100%",
          height: _v32,
          maxHeight: _v32,
          overflowY: "auto",
          children: (0, _v1.jsx)(_v5.CommentsContainer, {
            clipRequestId: _v27,
            clipId: _v1,
            isPublic: !1,
            enableLinks: !0,
            analyticsProps: _v9,
            onMomentPlay: _v3,
            searchQuery: _v19,
            showCommentsHiddenAlert: !1,
            videoVersionUri: _v4,
            targetApiVersion: _v23.TARGET_API_VERSION,
            isPreviousVersion: _v11,
            reviewId: _v23,
            showResolvedComments: _v10,
            canInsertTimecode: !0,
            commentTimeCode: _v12,
            pausePlayer: _v13,
            setCommentsCount: _v37,
            onCommentPosted: _v26
          })
        })]
      }), (0, _v1.jsx)(_v35, {
        isOpen: _v14,
        close: () => _v15(!1),
        onDownload: _v36,
        collaboratorCommentsCount: _v16
      })]
    });
  }], 0);
}