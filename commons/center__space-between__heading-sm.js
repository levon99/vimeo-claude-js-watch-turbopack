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
  let _v21 = ({
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
      _v11 = (0, _v12.default)(_v0 => {
        _v3(_v0.target.value.trim());
      }, 500);
    return (0, _v20.default)([_v7], () => {
      _v4 && !_v2 && _v1();
    }, null, [_v2, _v4]), (0, _v1.jsx)(_v4.Box, {
      padding: "md",
      ref: _v8,
      children: _v4 ? (0, _v1.jsx)(_v19.SearchComments, {
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
          children: (0, _v1.jsx)(_v13.Header, {
            variant: "heading-sm",
            size: "xl",
            children: (0, _v8.translate)({
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
          children: [(0, _v1.jsx)(_v16.Tooltip, {
            label: (0, _v8.translate)({
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
            children: (0, _v1.jsx)(_v14.IconButton, {
              size: "sm",
              variant: "tertiary",
              icon: (0, _v1.jsx)(_v17.SearchMagnifierFilled, {}),
              "aria-label": (0, _v8.translate)({
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
          }), !_v9 && (0, _v1.jsx)(_v16.Tooltip, {
            label: (0, _v8.translate)({
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
            children: (0, _v1.jsx)(_v14.IconButton, {
              size: "sm",
              variant: "tertiary",
              icon: (0, _v1.jsx)(_v18.DownloadImport, {}),
              "aria-label": (0, _v8.translate)({
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
          }), (0, _v1.jsx)(_v16.Tooltip, {
            label: (0, _v8.translate)({
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
            children: (0, _v1.jsx)(_v15.CloseButton, {
              size: "sm",
              variant: "tertiary",
              "aria-label": (0, _v8.translate)({
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
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  let _v26 = ({
    children: _v0,
    isMobile: _v1,
    showComments: _v2
  }) => _v1 ? (0, _v1.jsx)(_v22.Drawer, {
    isOpen: _v2,
    onClose: () => "",
    placement: "bottom",
    closeOnOverlayClick: !1,
    trapFocus: !1,
    preserveScrollBarGap: !0,
    children: (0, _v1.jsx)(_v23.DrawerContent, {
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
    width: (0, _v24.rem)(_v25.COMMENTS_PANEL_WIDTH),
    marginLeft: "lg",
    children: _v0
  }) : null;
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  let _v37 = ({
    isOpen: _v0,
    close: _v1,
    onDownload: _v2,
    collaboratorCommentsCount: _v3 = 0
  }) => (0, _v1.jsxs)(_v27.Modal, {
    size: "sm",
    isOpen: _v0,
    onClose: _v1,
    "data-testid": "download-review-comments-modal",
    children: [(0, _v1.jsx)(_v28.ModalOverlay, {}), (0, _v1.jsxs)(_v32.ModalContent, {
      children: [(0, _v1.jsx)(_v29.ModalHeader, {
        children: (0, _v1.jsx)(_v34.Text, {
          variant: "heading-md",
          children: (0, _v8.translate)({
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
      }), (0, _v1.jsx)(_v30.ModalBody, {
        children: _v3 > 0 && (0, _v1.jsx)(_v35.Alert, {
          size: "sm",
          marginBottom: "10px",
          children: (0, _v1.jsx)(_v36.AlertDescription, {
            children: (0, _v8.translate)({
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
      }), (0, _v1.jsxs)(_v31.ModalFooter, {
        children: [(0, _v1.jsx)(_v33.Button, {
          onClick: _v1,
          variant: "tertiary",
          "data-testid": "download-review-comments-cancel-button",
          children: (0, _v8.translate)({
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
        }), (0, _v1.jsx)(_v33.Button, {
          onClick: _v2,
          variant: "primary",
          "data-testid": "download-review-comments-submit-button",
          children: (0, _v8.translate)({
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
  var _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0);
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
    desktopPanelHeight: _v9,
    analyticsProps: _v10,
    showResolvedComments: _v11 = !0,
    isPreviousVersion: _v12,
    commentTimeCode: _v13,
    pausePlayer: _v14
  }) => {
    let [_v15, _v16] = (0, _v2.useState)(!1),
      [_v17, _v18] = (0, _v2.useState)(0),
      _v19 = (0, _v11.useViewer)(),
      {
        settings: _v20,
        isLoadingResponse: _v21
      } = (0, _v9.useOrionSettings)(),
      _v22 = (0, _v2.useMemo)(() => _v20.review_comment_default_sort ? {
        value: "timecode",
        label: (0, _v8.translate)({
          singular: "By timecode",
          dictionary: {
            es: {
              singular: "Por código de tiempo"
            },
            "de-DE": {
              singular: "Nach Timecode"
            },
            "fr-FR": {
              singular: "Par timecode"
            },
            "ja-JP": {
              singular: "タイムコード順"
            },
            "ko-KR": {
              singular: "타임코드별"
            },
            "pt-BR": {
              singular: "Por código de tempo"
            },
            "zh-CN": {
              singular: "按时间码"
            }
          }
        }),
        type: "time_code",
        direction: "asc"
      } : {
        value: "newest",
        label: (0, _v8.translate)({
          singular: "Newest",
          dictionary: {
            es: {
              singular: "Los más nuevos"
            },
            "de-DE": {
              singular: "Neueste"
            },
            "fr-FR": {
              singular: "Contenu le plus récent"
            },
            "ja-JP": {
              singular: "新着順"
            },
            "ko-KR": {
              singular: "최신"
            },
            "pt-BR": {
              singular: "Mais recentes"
            },
            "zh-CN": {
              singular: "最新"
            }
          }
        }),
        type: "date",
        direction: "desc"
      }, [_v20.review_comment_default_sort]),
      [_v23, _v24] = (0, _v7.useSortPreference)(_v22, "comments-container-sort", !_v21),
      [_v25, _v26] = (0, _v2.useState)(""),
      [_v27, _v28] = (0, _v2.useState)(!1),
      {
        reviewId: _v29
      } = (0, _v2.useContext)(_v39.ReviewLinkContext),
      {
        videoData: _v30
      } = (0, _v38.useVideoData)(_v1, _v29),
      {
        trackReviewCommentPosted: _v31,
        trackReviewCommentReactionAdded: _v32,
        trackReviewCommentReactionRemoved: _v33
      } = (0, _v10.useReviewTracking)(),
      _v34 = (0, _v2.useCallback)(() => {
        let _v0 = (0, _v40.idFromUri)(_v30?.user?.uri);
        return {
          reviewId: _v29 ?? "",
          clipId: _v1,
          clipOwnerId: _v0 ? _v0.toString() : null
        };
      }, [_v29, _v1, _v30?.user?.uri]),
      _v35 = (0, _v2.useCallback)(() => {
        _v31(_v34());
      }, [_v34, _v31]),
      _v36 = (0, _v2.useCallback)((_v0, _v1) => {
        _v32({
          ..._v34(),
          reviewCommentReaction: _v0,
          isReply: _v1
        });
      }, [_v34, _v32]),
      _v37 = (0, _v2.useCallback)((_v0, _v1) => {
        _v33({
          ..._v34(),
          reviewCommentReaction: _v0,
          isReply: _v1
        });
      }, [_v34, _v33]),
      _v38 = _v2 ? `${_v1}:${_v2}` : _v1,
      _v39 = _v2.default.useRef(null),
      _v40 = _v6 ? 10 : _v25.COMMENTS_PANEL_DESKTOP_VERTICAL_SPACING,
      [_v41, _v42] = (0, _v2.useState)(0),
      _v43 = `calc(100vh - ${_v6 ? _v7 : "0"}px - ${_v25.VERSION_PAGE_HEADER_HEIGHT + _v41 + _v40}px )`,
      _v44 = (0, _v2.useCallback)(() => {
        _v26(""), _v28(!1);
      }, [_v26, _v28]),
      _v45 = (0, _v2.useCallback)(_v0 => {
        null !== _v0 && _v41 !== _v0.clientHeight && _v42(_v0.clientHeight);
      }, [_v41]),
      _v46 = (0, _v2.useCallback)(() => {
        (0, _v6.bpStartSearchComment)({
          isInternal: !0,
          videoId: parseFloat(_v1),
          viewer: _v19,
          analyticsProps: _v10
        }), _v28(!0);
      }, [_v28, _v19, _v1, _v10]),
      _v47 = (0, _v2.useCallback)(() => {
        if (!_v1 || !_v29) return;
        let _v0 = (0, _v40.getReviewPasswordHashFromCookie)(_v29),
          _v1 = new URLSearchParams({
            format: "csv",
            source: "collaborator"
          });
        _v1.set("review_id", _v29), _v0 && _v1.set("password", _v0);
        let _v2 = `/videos/${_v1}/comments/export?${_v1.toString()}`;
        window.location.assign(_v2), _v16(!1);
      }, [_v1, _v29]),
      _v48 = (0, _v2.useCallback)((_v0, _v1) => {
        _v1 || _v18(_v0);
      }, [_v18]);
    return (0, _v1.jsxs)(_v26, {
      showComments: _v8,
      isMobile: _v6,
      children: [(0, _v1.jsxs)(_v3.Flex, {
        ref: _v0,
        direction: "column",
        width: "100%",
        height: _v9,
        borderRadius: "20px",
        backgroundColor: "fill-surface",
        children: [(0, _v1.jsx)(_v4.Box, {
          children: (0, _v1.jsx)(_v21, {
            searchCommentQuery: _v25,
            setSearchCommentQuery: _v26,
            searchInputRef: _v39,
            showCommentSearchBar: _v27,
            onSearchClick: _v46,
            onCloseSearch: _v44,
            closeDrawer: _v5,
            panelHeaderRef: _v45,
            onDownloadComments: () => {
              _v16(!0);
            },
            isPreviousVersion: _v12
          })
        }), (0, _v1.jsx)(_v3.Flex, {
          direction: "column",
          width: "100%",
          ...(_v9 ? {
            flexGrow: 1,
            minHeight: 0
          } : {
            height: _v43,
            maxHeight: _v43
          }),
          overflowY: "auto",
          children: !_v21 && (0, _v1.jsx)(_v5.CommentsContainer, {
            clipRequestId: _v38,
            clipId: _v1,
            isPublic: !1,
            enableLinks: !0,
            analyticsProps: _v10,
            onMomentPlay: _v3,
            searchQuery: _v25,
            showCommentsHiddenAlert: !1,
            videoVersionUri: _v4,
            targetApiVersion: _v25.TARGET_API_VERSION,
            isPreviousVersion: _v12,
            reviewId: _v29,
            showResolvedComments: _v11,
            canInsertTimecode: !0,
            commentTimeCode: _v13,
            pausePlayer: _v14,
            setCommentsCount: _v48,
            onCommentPosted: _v35,
            onCommentReactionAdded: _v36,
            onCommentReactionRemoved: _v37,
            defaultSort: _v22,
            sort: _v23,
            setSort: _v24
          })
        })]
      }), (0, _v1.jsx)(_v37, {
        isOpen: _v15,
        close: () => _v16(!1),
        onDownload: _v47,
        collaboratorCommentsCount: _v17
      })]
    });
  }], 0);
}