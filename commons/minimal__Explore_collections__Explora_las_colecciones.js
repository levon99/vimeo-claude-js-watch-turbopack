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
    _v33 = _v0.i(0);
  _v0.s(["default", 0, function ({
    buttonVariant: _v0 = "minimal",
    totalLikes: _v1,
    totalComments: _v2,
    totalCollections: _v3,
    likedClip: _v4 = !1,
    canLike: _v5 = !0,
    isOnWatchList: _v6,
    isWatchLaterLoading: _v7,
    isLikeLoading: _v8 = !1,
    disableScroll: _v9 = !0,
    disableTooltips: _v10 = !1,
    showShare: _v11 = !1,
    showLike: _v12 = !0,
    showAnimatedLike: _v13 = !1,
    showWatchlater: _v14 = !0,
    showDownload: _v15 = !1,
    showComments: _v16 = !1,
    showCommentsOnDesktop: _v17 = !1,
    showVimeoAI: _v18 = !1,
    showCollections: _v19 = !1,
    showExploreCollections: _v20 = !1,
    showChapters: _v21 = !1,
    showTranscript: _v22 = !1,
    showReport: _v23,
    onShareClick: _v24,
    onLikeClick: _v25,
    onCommentClick: _v26,
    onWatchLaterClick: _v27,
    onDownloadClick: _v28,
    onAskAIClick: _v29,
    onReportClick: _v30,
    onCollectionClick: _v31,
    onExploreCollectionsClick: _v32,
    onChaptersClick: _v33,
    onTranscriptClick: _v34,
    onCollectionsButtonClick: _v35
  }) {
    let _v36 = (0, _v14.useBreakpointValue)({
        base: _v16,
        md: _v17
      }, {
        fallback: "md"
      }),
      [_v37, _v38] = (0, _v32.default)(),
      _v39 = _v38.some(_v0 => !_v0) && _v9,
      {
        ref: _v40,
        dimension: {
          width: _v41
        }
      } = (0, _v33.useResizeObserver)(),
      _v42 = (0, _v26.translate)({
        singular: "Explore collections",
        dictionary: {
          es: {
            singular: "Explora las colecciones"
          },
          "de-DE": {
            singular: "Kollektionen entdecken"
          },
          "fr-FR": {
            singular: "Explorez des collections"
          },
          "ja-JP": {
            singular: "コレクション全体を探索してみる"
          },
          "ko-KR": {
            singular: "컬렉션 탐색"
          },
          "pt-BR": {
            singular: "Explore coleções"
          },
          "zh-CN": {
            singular: "浏览收藏集"
          }
        }
      });
    return (0, _v1.jsxs)(_v4.Flex, {
      gap: 100,
      borderY: _v38.length && "minimal" === _v0 ? "1px solid" : "none",
      borderColor: "stroke",
      align: "center",
      "data-testid": "action-bar",
      ref: _v40,
      children: [(0, _v1.jsxs)(_v29.RowRenderIfSpace, {
        ref: _v37,
        childrenShowing: _v38,
        disableScroll: _v9,
        children: [_v11 ? (0, _v1.jsx)(_v13.Tooltip, {
          label: (0, _v26.translate)({
            singular: "Share",
            dictionary: {
              es: {
                singular: "Compartir"
              },
              "de-DE": {
                singular: "Teilen"
              },
              "fr-FR": {
                singular: "Partager"
              },
              "ja-JP": {
                singular: "共有"
              },
              "ko-KR": {
                singular: "공유"
              },
              "pt-BR": {
                singular: "Compartilhar"
              },
              "zh-CN": {
                singular: "分享"
              }
            }
          }),
          placement: "top",
          children: (0, _v1.jsx)(_v6.IconButton, {
            "aria-label": "Share button",
            title: "Share button",
            onClick: _v0 => {
              _v24?.(), _v0.currentTarget.blur();
            },
            variant: _v0,
            size: "sm",
            icon: (0, _v1.jsx)(_v30.HoverAnimatedIcon, {
              iconName: "send"
            })
          })
        }) : null, _v12 ? _v13 ? (0, _v1.jsx)(_v27.AnimatedLikeButton, {
          isLiked: _v4,
          isDisabled: !_v5,
          likesCount: _v1,
          isLoading: _v8,
          disableTooltips: _v10,
          onLikeClick: _v25,
          variant: _v0
        }) : (0, _v1.jsx)(_v13.Tooltip, {
          label: _v4 ? (0, _v26.translate)({
            singular: "Unlike",
            dictionary: {
              es: {
                singular: "Ya no me gusta"
              },
              "de-DE": {
                singular: "Gefällt mir nicht mehr"
              },
              "fr-FR": {
                singular: "Je n'aime plus"
              },
              "ja-JP": {
                singular: "と違い、"
              },
              "ko-KR": {
                singular: "싫어요"
              },
              "pt-BR": {
                singular: "Remover curtida"
              },
              "zh-CN": {
                singular: "不喜欢"
              }
            }
          }) : (0, _v26.translate)({
            singular: "Like",
            dictionary: {
              es: {
                singular: "Me gusta"
              },
              "fr-FR": {
                singular: "J'aime"
              },
              "ja-JP": {
                singular: "いいね"
              },
              "ko-KR": {
                singular: "좋아하기"
              },
              "pt-BR": {
                singular: "Curtir"
              },
              "zh-CN": {
                singular: "喜欢"
              }
            }
          }),
          isDisabled: _v10,
          placement: "top",
          closeOnClick: !1,
          children: _v1 ? (0, _v1.jsx)(_v3.Button, {
            onClick: _v25,
            variant: _v0,
            size: "sm",
            isDisabled: !_v5,
            isLoading: _v8,
            leftIcon: _v4 ? (0, _v1.jsx)(_v19.HeartFilled, {}) : (0, _v1.jsx)(_v30.HoverAnimatedIcon, {
              iconName: "heart"
            }),
            children: _v1
          }) : (0, _v1.jsx)(_v6.IconButton, {
            "aria-label": "Like button",
            title: "Like button",
            onClick: _v25,
            variant: _v0,
            size: "sm",
            isDisabled: !_v5,
            icon: _v4 ? (0, _v1.jsx)(_v19.HeartFilled, {}) : (0, _v1.jsx)(_v30.HoverAnimatedIcon, {
              iconName: "heart"
            })
          })
        }) : null, _v36 ? (0, _v1.jsx)(_v13.Tooltip, {
          label: (0, _v26.translate)({
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
          placement: "top",
          isDisabled: _v10,
          children: _v2 ? (0, _v1.jsx)(_v3.Button, {
            onClick: _v26,
            variant: _v0,
            size: "sm",
            leftIcon: (0, _v1.jsx)(_v30.HoverAnimatedIcon, {
              iconName: "comment"
            }),
            children: _v2
          }) : (0, _v1.jsx)(_v6.IconButton, {
            "aria-label": "Comments button",
            title: "Comments button",
            onClick: _v26,
            variant: _v0,
            size: "sm",
            icon: (0, _v1.jsx)(_v30.HoverAnimatedIcon, {
              iconName: "comment"
            })
          })
        }) : null, _v19 ? (0, _v1.jsxs)(_v7.Menu, {
          children: [(0, _v1.jsx)(_v13.Tooltip, {
            label: (0, _v26.translate)({
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
            placement: "top",
            isDisabled: _v10,
            children: _v3 ? (0, _v1.jsx)(_v8.MenuButton, {
              as: _v3.Button,
              variant: _v0,
              size: "sm",
              leftIcon: (0, _v1.jsx)(_v30.HoverAnimatedIcon, {
                iconName: "3-layers"
              }),
              onFocus: _v0 => _v0.preventDefault(),
              onClick: _v35,
              children: _v3
            }) : (0, _v1.jsx)(_v8.MenuButton, {
              as: _v6.IconButton,
              variant: _v0,
              size: "sm",
              icon: (0, _v1.jsx)(_v30.HoverAnimatedIcon, {
                iconName: "3-layers"
              }),
              onFocus: _v0 => _v0.preventDefault(),
              title: "Collections button",
              onClick: _v35
            })
          }), (0, _v1.jsxs)(_v12.MenuList, {
            children: [(0, _v1.jsxs)(_v10.MenuGroup, {
              title: (0, _v26.translate)({
                singular: "Add to",
                dictionary: {
                  es: {
                    singular: "Añadir a"
                  },
                  "de-DE": {
                    singular: "Hinzufügen zu"
                  },
                  "fr-FR": {
                    singular: "Ajouter à"
                  },
                  "ja-JP": {
                    singular: "追加"
                  },
                  "ko-KR": {
                    singular: "다음에 추가"
                  },
                  "pt-BR": {
                    singular: "Adicionar a"
                  },
                  "zh-CN": {
                    singular: "添加到"
                  }
                }
              }),
              children: [(0, _v1.jsx)(_v11.MenuItem, {
                onClick: () => _v31?.("showcases"),
                children: (0, _v26.translate)({
                  singular: "Showcase",
                  dictionary: {
                    es: {
                      singular: "Presentaciones"
                    },
                    "de-DE": {
                      singular: "Präsentation"
                    },
                    "fr-FR": {
                      singular: "Présentation"
                    },
                    "ja-JP": {
                      singular: "作品集"
                    },
                    "ko-KR": {
                      singular: "쇼케이스"
                    },
                    "pt-BR": {
                      singular: "Vitrine"
                    },
                    "zh-CN": {
                      singular: "橱窗"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v11.MenuItem, {
                onClick: () => _v31?.("channels"),
                children: (0, _v26.translate)({
                  singular: "Channel",
                  dictionary: {
                    es: {
                      singular: "Canal"
                    },
                    "de-DE": {
                      singular: "Kanal"
                    },
                    "fr-FR": {
                      singular: "Chaîne"
                    },
                    "ja-JP": {
                      singular: "チャンネル"
                    },
                    "ko-KR": {
                      singular: "채널"
                    },
                    "pt-BR": {
                      singular: "Canal"
                    },
                    "zh-CN": {
                      singular: "频道"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v11.MenuItem, {
                onClick: () => _v31?.("groups"),
                children: (0, _v26.translate)({
                  singular: "Group",
                  dictionary: {
                    es: {
                      singular: "Grupo"
                    },
                    "de-DE": {
                      singular: "Gruppe"
                    },
                    "fr-FR": {
                      singular: "Groupe"
                    },
                    "ja-JP": {
                      singular: "グループ"
                    },
                    "ko-KR": {
                      singular: "그룹"
                    },
                    "pt-BR": {
                      singular: "Grupo"
                    },
                    "zh-CN": {
                      singular: "群组"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v9.MenuDivider, {}), _v20 && (0, _v1.jsx)(_v11.MenuItem, {
              onClick: _v32,
              children: _v42
            })]
          })]
        }) : null, _v14 ? (0, _v1.jsx)(_v13.Tooltip, {
          label: _v6 ? (0, _v26.translate)({
            singular: "Remove from Watch later",
            dictionary: {
              es: {
                singular: "Quitar de la lista “Ver después”"
              },
              "de-DE": {
                singular: "Aus „Später anschauen“ entfernen"
              },
              "fr-FR": {
                singular: "Supprimer de la liste Regarder plus tard"
              },
              "ja-JP": {
                singular: "「後で見る」から削除"
              },
              "ko-KR": {
                singular: "나중에 보기에서 제거"
              },
              "pt-BR": {
                singular: "Remover da lista Assistir Depois"
              },
              "zh-CN": {
                singular: "从稍后观看中移除"
              }
            }
          }) : (0, _v26.translate)({
            singular: "Add to Watch later",
            dictionary: {
              es: {
                singular: 'Agregar a "Ver después"'
              },
              "de-DE": {
                singular: 'Zu „Später anschauen" hinzufügen'
              },
              "fr-FR": {
                singular: "Ajouter à la liste Regarder plus tard"
              },
              "ja-JP": {
                singular: "後で見るに追加"
              },
              "ko-KR": {
                singular: "나중에 보기"
              },
              "pt-BR": {
                singular: "Adicionar ao Assistir Depois"
              },
              "zh-CN": {
                singular: "添加到稍后观看"
              }
            }
          }),
          isDisabled: _v10,
          placement: "top",
          closeOnClick: !1,
          children: (0, _v1.jsx)(_v6.IconButton, {
            "aria-label": "Watch later button",
            onClick: _v27,
            isLoading: _v7,
            variant: _v0,
            size: "sm",
            icon: _v6 ? (0, _v1.jsx)(_v22.ClockFilled, {}) : (0, _v1.jsx)(_v30.HoverAnimatedIcon, {
              iconName: "clock"
            }),
            children: (0, _v26.translate)({
              singular: "Watch later",
              dictionary: {
                es: {
                  singular: "Ver después"
                },
                "de-DE": {
                  singular: "Später anschauen"
                },
                "fr-FR": {
                  singular: "Regarder plus tard"
                },
                "ja-JP": {
                  singular: "後で見る"
                },
                "ko-KR": {
                  singular: "나중에 보기"
                },
                "pt-BR": {
                  singular: "Assistir depois"
                },
                "zh-CN": {
                  singular: "稍后观看"
                }
              }
            })
          })
        }) : null, _v15 ? (0, _v1.jsx)(_v13.Tooltip, {
          label: (0, _v26.translate)({
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
          isDisabled: _v10,
          children: (0, _v1.jsx)(_v6.IconButton, {
            "aria-label": "Download button",
            onClick: _v28,
            variant: _v0,
            size: "sm",
            icon: (0, _v1.jsx)(_v30.HoverAnimatedIcon, {
              iconName: "download-import"
            }),
            children: (0, _v26.translate)({
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
          })
        }) : null, _v23 ? (0, _v1.jsx)(_v13.Tooltip, {
          label: (0, _v26.translate)({
            singular: "Report",
            dictionary: {
              es: {
                singular: "Denunciar"
              },
              "de-DE": {
                singular: "Melden"
              },
              "fr-FR": {
                singular: "Signaler"
              },
              "ja-JP": {
                singular: "通報"
              },
              "ko-KR": {
                singular: "신고"
              },
              "pt-BR": {
                singular: "Denunciar"
              },
              "zh-CN": {
                singular: "报告"
              }
            }
          }),
          placement: "top",
          isDisabled: _v10,
          children: (0, _v1.jsx)(_v6.IconButton, {
            "aria-label": "Report button",
            onClick: _v30,
            variant: _v0,
            size: "sm",
            icon: (0, _v1.jsx)(_v30.HoverAnimatedIcon, {
              iconName: "flag"
            }),
            children: (0, _v26.translate)({
              singular: "Report",
              dictionary: {
                es: {
                  singular: "Denunciar"
                },
                "de-DE": {
                  singular: "Melden"
                },
                "fr-FR": {
                  singular: "Signaler"
                },
                "ja-JP": {
                  singular: "通報"
                },
                "ko-KR": {
                  singular: "신고"
                },
                "pt-BR": {
                  singular: "Denunciar"
                },
                "zh-CN": {
                  singular: "报告"
                }
              }
            })
          })
        }) : null]
      }), _v39 ? (0, _v1.jsxs)(_v7.Menu, {
        children: [(0, _v1.jsx)(_v8.MenuButton, {
          as: _v6.IconButton,
          variant: _v0,
          size: "xs",
          icon: (0, _v1.jsx)(_v25.EllipsisV, {})
        }), (0, _v1.jsxs)(_v28.ListOverflowItems, {
          childrenShowing: _v38,
          children: [_v11 ? (0, _v1.jsx)(_v11.MenuItem, {
            onClick: () => {
              _v24?.();
            },
            icon: (0, _v1.jsx)(_v16.Send, {}),
            children: (0, _v26.translate)({
              singular: "Share",
              dictionary: {
                es: {
                  singular: "Compartir"
                },
                "de-DE": {
                  singular: "Teilen"
                },
                "fr-FR": {
                  singular: "Partager"
                },
                "ja-JP": {
                  singular: "共有"
                },
                "ko-KR": {
                  singular: "공유"
                },
                "pt-BR": {
                  singular: "Compartilhar"
                },
                "zh-CN": {
                  singular: "分享"
                }
              }
            })
          }) : null, _v12 ? (0, _v1.jsx)(_v11.MenuItem, {
            onClick: () => {
              _v25?.();
            },
            icon: _v4 ? (0, _v1.jsx)(_v19.HeartFilled, {}) : (0, _v1.jsx)(_v18.Heart, {}),
            children: (0, _v26.translate)({
              singular: "Like",
              dictionary: {
                es: {
                  singular: "Me gusta"
                },
                "fr-FR": {
                  singular: "J'aime"
                },
                "ja-JP": {
                  singular: "いいね"
                },
                "ko-KR": {
                  singular: "좋아하기"
                },
                "pt-BR": {
                  singular: "Curtir"
                },
                "zh-CN": {
                  singular: "喜欢"
                }
              }
            })
          }) : null, _v36 ? (0, _v1.jsx)(_v11.MenuItem, {
            onClick: () => {
              _v26?.();
            },
            icon: (0, _v1.jsx)(_v20.Comment, {}),
            children: (0, _v26.translate)({
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
          }) : null, _v19 ? (0, _v1.jsxs)(_v10.MenuGroup, {
            title: (0, _v26.translate)({
              singular: "Add to",
              dictionary: {
                es: {
                  singular: "Añadir a"
                },
                "de-DE": {
                  singular: "Hinzufügen zu"
                },
                "fr-FR": {
                  singular: "Ajouter à"
                },
                "ja-JP": {
                  singular: "追加"
                },
                "ko-KR": {
                  singular: "다음에 추가"
                },
                "pt-BR": {
                  singular: "Adicionar a"
                },
                "zh-CN": {
                  singular: "添加到"
                }
              }
            }),
            children: [(0, _v1.jsx)(_v11.MenuItem, {
              onClick: () => {
                _v35?.(), _v31?.("showcases");
              },
              children: (0, _v26.translate)({
                singular: "Showcase",
                dictionary: {
                  es: {
                    singular: "Presentaciones"
                  },
                  "de-DE": {
                    singular: "Präsentation"
                  },
                  "fr-FR": {
                    singular: "Présentation"
                  },
                  "ja-JP": {
                    singular: "作品集"
                  },
                  "ko-KR": {
                    singular: "쇼케이스"
                  },
                  "pt-BR": {
                    singular: "Vitrine"
                  },
                  "zh-CN": {
                    singular: "橱窗"
                  }
                }
              })
            }), (0, _v1.jsx)(_v11.MenuItem, {
              onClick: () => {
                _v35?.(), _v31?.("channels");
              },
              children: (0, _v26.translate)({
                singular: "Channel",
                dictionary: {
                  es: {
                    singular: "Canal"
                  },
                  "de-DE": {
                    singular: "Kanal"
                  },
                  "fr-FR": {
                    singular: "Chaîne"
                  },
                  "ja-JP": {
                    singular: "チャンネル"
                  },
                  "ko-KR": {
                    singular: "채널"
                  },
                  "pt-BR": {
                    singular: "Canal"
                  },
                  "zh-CN": {
                    singular: "频道"
                  }
                }
              })
            }), (0, _v1.jsx)(_v11.MenuItem, {
              onClick: () => {
                _v35?.(), _v31?.("groups");
              },
              children: (0, _v26.translate)({
                singular: "Group",
                dictionary: {
                  es: {
                    singular: "Grupo"
                  },
                  "de-DE": {
                    singular: "Gruppe"
                  },
                  "fr-FR": {
                    singular: "Groupe"
                  },
                  "ja-JP": {
                    singular: "グループ"
                  },
                  "ko-KR": {
                    singular: "그룹"
                  },
                  "pt-BR": {
                    singular: "Grupo"
                  },
                  "zh-CN": {
                    singular: "群组"
                  }
                }
              })
            }), (0, _v1.jsx)(_v9.MenuDivider, {}), _v20 && (0, _v1.jsx)(_v11.MenuItem, {
              onClick: _v32,
              children: _v42
            }), (0, _v1.jsx)(_v9.MenuDivider, {})]
          }) : null, _v14 ? (0, _v1.jsx)(_v11.MenuItem, {
            onClick: () => {
              _v27?.();
            },
            icon: _v6 ? (0, _v1.jsx)(_v22.ClockFilled, {}) : (0, _v1.jsx)(_v21.Clock, {}),
            children: (0, _v26.translate)({
              singular: "Watch later",
              dictionary: {
                es: {
                  singular: "Ver después"
                },
                "de-DE": {
                  singular: "Später anschauen"
                },
                "fr-FR": {
                  singular: "Regarder plus tard"
                },
                "ja-JP": {
                  singular: "後で見る"
                },
                "ko-KR": {
                  singular: "나중에 보기"
                },
                "pt-BR": {
                  singular: "Assistir depois"
                },
                "zh-CN": {
                  singular: "稍后观看"
                }
              }
            })
          }) : null, _v15 ? (0, _v1.jsx)(_v11.MenuItem, {
            onClick: () => {
              _v28?.();
            },
            icon: (0, _v1.jsx)(_v23.DownloadImport, {}),
            children: (0, _v26.translate)({
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
          }) : null, _v23 ? (0, _v1.jsx)(_v11.MenuItem, {
            onClick: () => {
              _v30?.();
            },
            icon: (0, _v1.jsx)(_v24.Flag, {}),
            children: (0, _v26.translate)({
              singular: "Report",
              dictionary: {
                es: {
                  singular: "Denunciar"
                },
                "de-DE": {
                  singular: "Melden"
                },
                "fr-FR": {
                  singular: "Signaler"
                },
                "ja-JP": {
                  singular: "通報"
                },
                "ko-KR": {
                  singular: "신고"
                },
                "pt-BR": {
                  singular: "Denunciar"
                },
                "zh-CN": {
                  singular: "报告"
                }
              }
            })
          }) : null]
        })]
      }) : null, (0, _v1.jsx)(_v5.HStack, {
        ml: "auto",
        children: _v41 < 480 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v21 ? (0, _v1.jsx)(_v13.Tooltip, {
            label: (0, _v26.translate)({
              singular: "Chapters",
              dictionary: {
                es: {
                  singular: "Capítulos"
                },
                "de-DE": {
                  singular: "Kapitel"
                },
                "fr-FR": {
                  singular: "Chapitres"
                },
                "ja-JP": {
                  singular: "チャプター"
                },
                "ko-KR": {
                  singular: "챕터"
                },
                "pt-BR": {
                  singular: "Capítulos"
                },
                "zh-CN": {
                  singular: "章节"
                }
              }
            }),
            placement: "top",
            isDisabled: _v10,
            children: (0, _v1.jsx)(_v6.IconButton, {
              "aria-label": "Chapters button",
              icon: (0, _v1.jsx)(_v15.BookmarkChapter, {}),
              variant: _v0,
              size: "sm",
              onClick: _v33
            })
          }) : null, _v22 ? (0, _v1.jsx)(_v13.Tooltip, {
            label: (0, _v26.translate)({
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
            }),
            placement: "top",
            isDisabled: _v10,
            children: (0, _v1.jsx)(_v6.IconButton, {
              "aria-label": "Transcript button",
              icon: (0, _v1.jsx)(_v17.FileSearchAlt, {}),
              variant: _v0,
              size: "sm",
              onClick: _v34
            })
          }) : null, _v18 ? (0, _v1.jsx)(_v13.Tooltip, {
            label: (0, _v26.translate)({
              singular: "Vimeo AI",
              dictionary: {
                "fr-FR": {
                  singular: "IA Vimeo"
                }
              }
            }),
            placement: "top",
            isDisabled: _v10,
            children: (0, _v1.jsx)(_v6.IconButton, {
              "aria-label": "Vimeo AI button",
              icon: (0, _v1.jsx)(_v31.SparkleIcon, {}),
              sx: {
                "*": {
                  fill: "text-primary"
                }
              },
              variant: _v0,
              size: "sm",
              onClick: _v29
            })
          }) : null]
        }) : (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v21 ? (0, _v1.jsx)(_v3.Button, {
            leftIcon: (0, _v1.jsx)(_v15.BookmarkChapter, {}),
            variant: _v0,
            size: "sm",
            onClick: _v33,
            children: (0, _v26.translate)({
              singular: "Chapters",
              dictionary: {
                es: {
                  singular: "Capítulos"
                },
                "de-DE": {
                  singular: "Kapitel"
                },
                "fr-FR": {
                  singular: "Chapitres"
                },
                "ja-JP": {
                  singular: "チャプター"
                },
                "ko-KR": {
                  singular: "챕터"
                },
                "pt-BR": {
                  singular: "Capítulos"
                },
                "zh-CN": {
                  singular: "章节"
                }
              }
            })
          }) : null, _v22 ? (0, _v1.jsx)(_v3.Button, {
            leftIcon: (0, _v1.jsx)(_v17.FileSearchAlt, {}),
            variant: _v0,
            size: "sm",
            onClick: _v34,
            children: (0, _v26.translate)({
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
          }) : null, _v18 ? (0, _v1.jsx)(_v2.AiActionBarButton, {
            onClick: _v29,
            variant: _v0
          }) : null]
        })
      })]
    });
  }], 0);
}