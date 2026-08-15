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
    _v26 = _v0.i(0);
  let _v27 = ({
    folder: _v0,
    children: _v1,
    row: _v2 = null
  }) => {
    if (null === _v0) return _v1;
    let _v3 = _v0.metadata?.connections?.parentFolder;
    return (0, _v1.jsx)(_v26.AnalyticsEventProvider, {
      eventData: {
        position_row: _v2,
        folder_id: _v0.uri.split("/").pop(),
        is_subfolder: !!_v3,
        folder_share_status: _v0.privacy?.view === "nobody" ? "not shared" : "shared",
        is_private_to_me: !!_v0?.isPrivateToUser,
        parent_folder_id: _v3 ? _v3?.uri.split("/").pop() : null,
        is_pinned: _v0.isPinned
      },
      children: _v1
    });
  };
  var _v28 = _v0.i(0),
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
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0);
  let _v89 = () => {
    let {
        data: _v0
      } = (() => {
        let {
            query: _v0
          } = (0, _v3.useRouter)(),
          _v1 = "string" == typeof _v0.userId ? parseInt(_v0.userId, 10) : null,
          _v2 = "string" == typeof _v0.folderId ? parseInt(_v0.folderId, 10) : null,
          _v3 = "string" == typeof _v0.reviewId ? _v0.reviewId : void 0,
          _v4 = (0, _v23.getReviewPasswordHashFromCookie)(_v3);
        return (0, _v14.useGetUserProject)(() => _v1 && _v2 ? {
          where: {
            userId: _v1,
            projectId: _v2
          },
          select: _v75.DEFAULT_FOLDER_API_FIELDS,
          query: {
            reviewId: _v3,
            password: _v4
          }
        } : null);
      })(),
      {
        query: _v1
      } = (0, _v3.useRouter)(),
      _v2 = "string" == typeof _v1.userId ? parseInt(_v1.userId, 10) : void 0,
      _v3 = _v0?.user?.uri ?? (_v2 ? `/users/${_v2}` : void 0),
      {
        contentSpaceEnabled: _v4,
        notTeamGatedContentSpaceEnabled: _v5,
        loading: _v6
      } = (0, _v86.useContentSpaceEnabled)(_v3),
      _v7 = !_v6 && _v5 && !_v4,
      _v8 = _v0?.metadata?.connections?.ancestorPath || [];
    if (!_v8.length) return null;
    let _v9 = _v8.length > 3,
      _v10 = [..._v8].reverse(),
      _v11 = _v10.slice(0, -1),
      [_v12] = _v10.slice(-1),
      _v13 = _v10[0]?.uri,
      _v14 = _v0 => ({
        name: _v7 && _v0.uri === _v13 ? (0, _v87.translate)({
          singular: "Library",
          dictionary: {
            es: {
              singular: "Biblioteca"
            },
            "de-DE": {
              singular: "Bibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque"
            },
            "ja-JP": {
              singular: "ライブラリ"
            },
            "ko-KR": {
              singular: "라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca"
            },
            "zh-CN": {
              singular: "视频库"
            }
          }
        }) : _v0.name,
        href: (0, _v88.getFolderPageUriFromApiUri)(_v0.uri)
      });
    return (0, _v1.jsxs)(_v77.Breadcrumb, {
      separator: (0, _v1.jsx)(_v84.ChevronRightSmall, {
        color: "text-secondary"
      }),
      display: {
        base: "none",
        md: "block"
      },
      children: [_v9 && (0, _v1.jsx)(_v77.BreadcrumbItem, {
        children: (0, _v1.jsxs)(_v80.Menu, {
          children: [(0, _v1.jsx)(_v81.MenuButton, {
            "aria-label": (0, _v87.translate)({
              singular: "Show folder path",
              dictionary: {
                es: {
                  singular: "Mostrar la ruta de la carpeta"
                },
                "de-DE": {
                  singular: "Ordnerpfad anzeigen"
                },
                "fr-FR": {
                  singular: "Afficher le chemin du dossier"
                },
                "ja-JP": {
                  singular: "フォルダーパスを表示"
                },
                "ko-KR": {
                  singular: "폴더 경로 표시"
                },
                "pt-BR": {
                  singular: "Mostrar caminho da pasta"
                },
                "zh-CN": {
                  singular: "显示文件夹路径"
                }
              }
            }),
            as: _v79.IconButton,
            "data-testid": "folder-breadcrumbs-button",
            icon: (0, _v1.jsx)(_v85.Folder, {}),
            size: "xs",
            variant: "tertiary"
          }), (0, _v1.jsx)(_v83.MenuList, {
            children: _v11.map(_v0 => {
              let {
                name: _v1,
                href: _v2
              } = _v14(_v0);
              return (0, _v1.jsx)(_v82.MenuItem, {
                as: _v76.default,
                href: _v2,
                children: _v1
              }, _v0.uri);
            })
          })]
        })
      }), !_v9 && _v11.map(_v0 => {
        let {
          name: _v1,
          href: _v2
        } = _v14(_v0);
        return (0, _v1.jsx)(_v77.BreadcrumbItem, {
          children: (0, _v1.jsx)(_v78.BreadcrumbLink, {
            as: _v76.default,
            href: _v2,
            children: _v1
          })
        }, _v0.uri);
      }), (0, _v1.jsx)(_v77.BreadcrumbItem, {
        children: (() => {
          let {
            name: _v0,
            href: _v1
          } = _v14(_v12);
          return (0, _v1.jsx)(_v78.BreadcrumbLink, {
            as: _v76.default,
            href: _v1,
            children: _v0
          });
        })()
      }, _v12.uri)]
    });
  };
  var _v90 = _v4,
    _v91 = _v0.i(0),
    _v92 = _v0.i(0);
  class _v93 extends _v90.Component {
    state = {
      error: null
    };
    static getDerivedStateFromError(_v0) {
      return {
        error: _v0
      };
    }
    componentDidCatch(_v0, _v1) {
      window.DD_RUM && window.DD_RUM.onReady(() => {
        window.DD_RUM.addError(_v0, {
          ..._v1
        });
      });
    }
    componentDidUpdate(_v0) {
      this.props.folderId !== _v0.folderId && this.state.error && this.setState({
        ...this.state,
        error: null
      });
    }
    render() {
      let {
        error: _v0
      } = this.state;
      if (_v0) return _v0 instanceof _v13.UnauthorizedError ? this.props.viewer?.user ? (0, _v1.jsx)(_v92.ErrorPage, {
        error: new _v13.UnauthorizedError()
      }) : (0, _v1.jsx)(_v91.BrandedLogin, {
        metaUrl: `/sso/project/${this.props.folderId}/meta`,
        errorConstructor: _v13.UnauthorizedError
      }) : _v0 instanceof _v13.ResourceNotFoundError ? (0, _v1.jsx)(_v92.ErrorPage, {
        error: new _v13.ResourceNotFoundError()
      }) : (0, _v1.jsx)(_v92.ErrorPage, {
        error: _v0
      });
      return this.props.children;
    }
  }
  var _v94 = _v0.i(0),
    _v95 = _v0.i(0);
  let _v96 = ({
    count: _v0,
    isMyLibrary: _v1,
    level: _v2,
    isFiltered: _v3 = !1
  }) => {
    let {
      reviewId: _v4
    } = (0, _v4.useContext)(_v95.ReviewLinkContext);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v94.Box, {
        display: {
          base: "inline",
          sm: "none"
        },
        children: _v97(_v0, _v2, _v1, !0, _v3, _v4)
      }), (0, _v1.jsx)(_v94.Box, {
        display: {
          base: "none",
          sm: "inline"
        },
        children: _v97(_v0, _v2, _v1, !1, _v3, _v4)
      })]
    });
  };
  function _v97(_v0, _v1, _v2, _v3 = !1, _v4 = !1, _v5) {
    var _v6;
    return [_v2 || _v5 ? null : _v3 ? function (_v0) {
      switch (_v0) {
        case "manage":
          return (0, _v87.translate)({
            singular: "Manage access",
            dictionary: {
              es: {
                singular: "Gestionar el acceso"
              },
              "de-DE": {
                singular: "Zugriff verwalten"
              },
              "fr-FR": {
                singular: "Gérer l'accès"
              },
              "ja-JP": {
                singular: "アクセスを管理"
              },
              "ko-KR": {
                singular: "액세스 관리"
              },
              "pt-BR": {
                singular: "Gerenciar acesso"
              },
              "zh-CN": {
                singular: "管理访问"
              }
            }
          });
        case "edit":
          return (0, _v87.translate)({
            singular: "Edit access",
            dictionary: {
              es: {
                singular: "Editar acceso"
              },
              "de-DE": {
                singular: "Zugang bearbeiten"
              },
              "fr-FR": {
                singular: "Modifier l'accès"
              },
              "ja-JP": {
                singular: "編集アクセス"
              },
              "ko-KR": {
                singular: "액세스 권한 편집"
              },
              "pt-BR": {
                singular: "Acesso de edição"
              },
              "zh-CN": {
                singular: "编辑访问权限"
              }
            }
          });
        case "comment":
          return (0, _v87.translate)({
            singular: "Comment access",
            dictionary: {
              es: {
                singular: "Acceso para comentar"
              },
              "de-DE": {
                singular: "Zugriff auf Kommentare"
              },
              "fr-FR": {
                singular: "Accès aux commentaires"
              },
              "ja-JP": {
                singular: "コメントアクセス権"
              },
              "ko-KR": {
                singular: "댓글 액세스 권한"
              },
              "pt-BR": {
                singular: "Acesso aos comentários"
              },
              "zh-CN": {
                singular: "评论权限"
              }
            }
          });
        default:
          return (0, _v87.translate)({
            singular: "View access",
            dictionary: {
              es: {
                singular: "Ver acceso"
              },
              "de-DE": {
                singular: "Zugang anzeigen"
              },
              "fr-FR": {
                singular: "Afficher l'accès"
              },
              "ja-JP": {
                singular: "アクセスを表示"
              },
              "ko-KR": {
                singular: "액세스 보기"
              },
              "pt-BR": {
                singular: "Ver acesso"
              },
              "zh-CN": {
                singular: "查看访问权限"
              }
            }
          });
      }
    }(_v1) : function (_v0) {
      switch (_v0) {
        case "manage":
          return (0, _v87.translate)({
            singular: "You have manage access",
            dictionary: {
              es: {
                singular: "Tiene acceso de administrador"
              },
              "de-DE": {
                singular: "Sie haben Verwaltungszugriff"
              },
              "fr-FR": {
                singular: "Vous avez un accès de gestion"
              },
              "ja-JP": {
                singular: "管理アクセス権を所有しています"
              },
              "ko-KR": {
                singular: "관리 액세스 권한이 있습니다."
              },
              "pt-BR": {
                singular: "Você tem permissão para gerenciar"
              },
              "zh-CN": {
                singular: "您拥有管理权限"
              }
            }
          });
        case "edit":
          return (0, _v87.translate)({
            singular: "You have edit access",
            dictionary: {
              es: {
                singular: "Tiene acceso de edición"
              },
              "de-DE": {
                singular: "Sie haben Bearbeitungszugriff"
              },
              "fr-FR": {
                singular: "Vous avez un accès de modification"
              },
              "ja-JP": {
                singular: "編集アクセス権を所有しています"
              },
              "ko-KR": {
                singular: "편집 액세스 권한이 있습니다."
              },
              "pt-BR": {
                singular: "Você tem permissão para editar"
              },
              "zh-CN": {
                singular: "您拥有编辑权限"
              }
            }
          });
        case "comment":
          return (0, _v87.translate)({
            singular: "You have comment access",
            dictionary: {
              es: {
                singular: "Tiene acceso para comentar"
              },
              "de-DE": {
                singular: "Sie haben Kommentarzugriff"
              },
              "fr-FR": {
                singular: "Vous avez un accès de commentaire"
              },
              "ja-JP": {
                singular: "コメント機能にアクセスできます"
              },
              "ko-KR": {
                singular: "댓글 액세스 권한이 있습니다."
              },
              "pt-BR": {
                singular: "Você tem permissão para comentar"
              },
              "zh-CN": {
                singular: "您拥有评论权限"
              }
            }
          });
        default:
          return (0, _v87.translate)({
            singular: "You have view access",
            dictionary: {
              es: {
                singular: "Tiene acceso de vista"
              },
              "de-DE": {
                singular: "Sie haben Ansichtszugriff"
              },
              "fr-FR": {
                singular: "Vous avez un accès de visualisation"
              },
              "ja-JP": {
                singular: "閲覧アクセス権を所有しています"
              },
              "ko-KR": {
                singular: "보기 권한이 있습니다."
              },
              "pt-BR": {
                singular: "Você tem acesso para ver"
              },
              "zh-CN": {
                singular: "您具有查看权限"
              }
            }
          });
      }
    }(_v1), _v0 > 0 ? (_v6 = _v0, _v4 ? (0, _v87.translate)({
      count: _v6,
      singular: "{NUM_ITEMS} result",
      plural: "{NUM_ITEMS} results",
      replacements: {
        NUM_ITEMS: _v6
      },
      dictionary: {
        es: {
          singular: "{NUM_ITEMS} resultado",
          plural: "{NUM_ITEMS} resultados"
        },
        "de-DE": {
          singular: "{NUM_ITEMS} Ergebnis",
          plural: "{NUM_ITEMS} Ergebnisse"
        },
        "fr-FR": {
          singular: "{NUM_ITEMS} résultat",
          plural: "{NUM_ITEMS} résultats"
        },
        "ja-JP": {
          singular: "{NUM_ITEMS}件の検索結果",
          plural: "{NUM_ITEMS} 件の結果"
        },
        "ko-KR": {
          singular: "검색 결과 {NUM_ITEMS}건",
          plural: "결과 {NUM_ITEMS}개"
        },
        "pt-BR": {
          singular: "{NUM_ITEMS} resultado",
          plural: "{NUM_ITEMS} resultados"
        },
        "zh-CN": {
          singular: "{NUM_ITEMS} 个结果",
          plural: "{NUM_ITEMS} 个结果"
        }
      }
    }) : (0, _v87.translate)({
      count: _v6,
      singular: "{NUM_ITEMS} item",
      plural: "{NUM_ITEMS} items",
      replacements: {
        NUM_ITEMS: _v6
      },
      dictionary: {
        es: {
          singular: "{NUM_ITEMS} elemento",
          plural: "{NUM_ITEMS} elementos"
        },
        "de-DE": {
          singular: "{NUM_ITEMS} Element",
          plural: "{NUM_ITEMS} Elemente"
        },
        "fr-FR": {
          singular: "{NUM_ITEMS} élément",
          plural: "{NUM_ITEMS} éléments"
        },
        "ja-JP": {
          singular: "{NUM_ITEMS} 件のアイテム",
          plural: "{NUM_ITEMS} 件のアイテム"
        },
        "ko-KR": {
          singular: "{NUM_ITEMS}개 항목",
          plural: "{NUM_ITEMS}개 항목"
        },
        "pt-BR": {
          singular: "{NUM_ITEMS} iten",
          plural: "{NUM_ITEMS} itens"
        },
        "zh-CN": {
          singular: "{NUM_ITEMS} 项",
          plural: "{NUM_ITEMS} 项"
        }
      }
    })) : null].filter(Boolean).join(" · ");
  }
  var _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0),
    _v127 = _v0.i(0),
    _v128 = _v0.i(0),
    _v129 = _v0.i(0),
    _v130 = _v0.i(0),
    _v131 = _v0.i(0);
  let _v132 = ({
      hasUpsell: _v0,
      onClick: _v1
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v79.IconButton, {
        "aria-label": (0, _v87.translate)({
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
        "data-testid": "header-share-button-mobile",
        display: {
          base: "inline-flex",
          md: "none"
        },
        icon: (0, _v1.jsx)(_v131.Share, {}),
        variant: _v0 ? "upsell" : "secondary",
        size: "md",
        id: "folder-share-button-mobile",
        onClick: _v1
      }), (0, _v1.jsx)(_v130.Button, {
        "data-testid": "header-share-button",
        display: {
          base: "none",
          md: "inline-flex"
        },
        variant: _v0 ? "upsell" : "secondary",
        size: "md",
        id: "folder-share-button",
        onClick: _v1,
        children: (0, _v87.translate)({
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
      })]
    }),
    _v133 = (0, _v2.default)(async () => {
      let {
        Facepile: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      loading: _v100.FacepileLoader,
      ssr: !1
    }),
    _v134 = ({
      ancestorFolders: _v0,
      disableUploads: _v1,
      folderData: _v2,
      folderId: _v3,
      onRename: _v4,
      shouldShowFolderMenu: _v5 = !0,
      userId: _v6,
      viewer: _v7
    }) => {
      let _v8 = (0, _v105.useAnalyticsEvent)(),
        {
          isPersonalTeamFolderAdminView: _v9
        } = (0, _v4.useContext)(_v36.VideoLibraryLayoutContext),
        {
          sendEvent: _v10
        } = (0, _v126.useAnalyticsEvents)(),
        _v11 = (0, _v118.useNotification)(),
        {
          notifyItemMoveFailure: _v12,
          notifyItemMoveSuccess: _v13,
          notifyItemMoveToWorkspaceSuccess: _v14
        } = (0, _v118.useNotifications)(),
        {
          revalidateTopLevelFolders: _v15,
          revalidateFolderItems: _v16,
          revalidateFolder: _v17,
          revalidateSetOfFolderItems: _v18
        } = (0, _v37.useRevalidate)(),
        {
          openBulkAiModal: _v19
        } = (0, _v98.useBulkAiModal)(),
        {
          openDeleteFolderModal: _v20
        } = (0, _v121.useDeleteFolderModal)(),
        {
          openMoveModal: _v21
        } = (0, _v122.useMoveModal)(),
        {
          openShareFolderModal: _v22
        } = (0, _v123.useShareFolderModal)(),
        _v23 = (0, _v116.useCopyFolderLinkToast)(),
        _v24 = (0, _v117.useManageShareAction)({
          canEdit: (0, _v112.getFolderPermissions)(_v2).canEditSettings,
          entityUri: _v2.uri,
          location: _v75.SHARE_RESOURCE_MVV_HEADER_ENTRY_POINT,
          panel: "INVITE_PANEL"
        }),
        {
          openSlackIntegrationModal: _v25
        } = (0, _v124.useSlackIntegrationModal)(),
        {
          openFolderDefaultsModal: _v26
        } = (0, _v119.useFolderDefaultsModal)(),
        {
          openFolderSettingsModal: _v27
        } = (0, _v120.useFolderSettingsModal)(),
        {
          open: _v28,
          close: _v29
        } = (0, _v125.useUpsellModal)(),
        {
          isEnabled: _v30,
          variant: _v31
        } = (0, _v39.useEnableFolderBulkPrivacy)(),
        {
          openBulkPrivacyModal: _v32
        } = (0, _v99.useBulkPrivacyModal)(),
        _v33 = (0, _v11.useIsMobile)(),
        _v34 = _v7?.teamUser?.ownerId || _v7?.user?.id || _v6,
        _v35 = !!_v2?.metadata?.interactions.addSubfolder?.canAddSubfolders,
        _v36 = !!_v2?.metadata.interactions.invite,
        {
          canDelete: _v37,
          canEdit: _v38,
          canEditSettings: _v39,
          canTranslate: _v40
        } = (0, _v112.getFolderPermissions)(_v2),
        {
          contentSpaceEnabled: _v41
        } = (0, _v86.useContentSpaceEnabled)(_v34),
        _v42 = _v2?.isPrivateToUser,
        {
          trackLibraryLevelActionClicked: _v43,
          trackLibraryNewFolderClicked: _v44
        } = (0, _v21.useLibraryTracking)(),
        _v45 = _v0 => _v43({
          libraryType: (0, _v22.deriveLibraryType)({
            hasContentSpaceEnabled: !!_v41,
            isPrivateToUser: _v2?.isPrivateToUser
          }),
          libraryLevelAction: _v0
        }),
        _v46 = _v2?.metadata?.connections?.parentFolder,
        _v47 = !!_v46,
        _v48 = (0, _v129.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
        _v49 = (0, _v87.translate)({
          singular: "Folder defaults saved",
          dictionary: {
            es: {
              singular: "Se guardaron los valores predeterminados de la carpeta."
            },
            "de-DE": {
              singular: "Ordner-Standardeinstellungen gespeichert"
            },
            "fr-FR": {
              singular: "Paramètres par défaut des dossiers enregistrés"
            },
            "ja-JP": {
              singular: "フォルダーのデフォルトが保存されました"
            },
            "ko-KR": {
              singular: "폴더 기본 설정이 저장되었습니다."
            },
            "pt-BR": {
              singular: "Padrões da pasta salvos"
            },
            "zh-CN": {
              singular: "文件夹默认设置已保存"
            }
          }
        }),
        _v50 = _v2?.link ? _v2?.link : `${_v7?.vimeoHttpsUrl}/user/${_v6}/folder/${_v3}`,
        {
          capabilities: _v51
        } = (0, _v10.useCapability)(["canSeeUpsellModalOnShare", "hasExtraEmbedOptions", "hasVideoLibraryEmbeddableUploader", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "clipCreateEmbedPresets", "hasProhibitMultipleReviewLinks", "canPerformBulkTranslations"], _v34),
        _v52 = _v42 && _v2?.metadata?.connections?.ancestorPath?.length === 0,
        _v53 = !_v42 && !_v9 || !_v52 && _v36,
        _v54 = !!_v51.canGenerateClipTextTranslation,
        _v55 = !!_v51.canGenerateClipTranslation,
        _v56 = _v38 && _v40 && (_v55 || _v54) && !!_v51.canPerformBulkTranslations,
        _v57 = _v51.hasExtraEmbedOptions && _v39,
        _v58 = _v41 ? (0, _v87.translate)({
          singular: "Team library",
          dictionary: {
            es: {
              singular: "Biblioteca del equipo"
            },
            "de-DE": {
              singular: "Teambibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque de l'équipe"
            },
            "ja-JP": {
              singular: "チームライブラリ"
            },
            "ko-KR": {
              singular: "팀 라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca da equipe"
            },
            "zh-CN": {
              singular: "团队视频库"
            }
          }
        }) : (0, _v87.translate)({
          singular: "Library",
          dictionary: {
            es: {
              singular: "Biblioteca"
            },
            "de-DE": {
              singular: "Bibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque"
            },
            "ja-JP": {
              singular: "ライブラリ"
            },
            "ko-KR": {
              singular: "라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca"
            },
            "zh-CN": {
              singular: "视频库"
            }
          }
        }),
        _v59 = _v7?.user?.uri === _v2?.user?.uri,
        _v60 = _v59 || _v7?.teamUser?.plainTextPermissionLevel === "Admin",
        _v61 = _v59 && _v51.canSeeUpsellModalOnShare,
        _v62 = _v7?.vimeoHttpsUrl ? _v7?.vimeoHttpsUrl + (0, _v88.getFolderAnalyticsPageUriFromApiUri)(_v2?.uri) : void 0,
        {
          handleStarMenuState: _v63
        } = (0, _v127.useStarMenuItem)(),
        {
          isItemStarred: _v64,
          onStarClick: _v65,
          ..._v66
        } = _v63("folder", _v2),
        _v67 = (0, _v4.useCallback)(() => {
          _v64 && _v65?.();
        }, [_v64, _v65]),
        _v68 = _v0 => {
          if (_v36) {
            (0, _v73.openFolderShare)({
              teamUser: _v7?.teamUser,
              folder: _v2,
              element: "button",
              location: "header",
              page: _v42 ? "my_library" : "video_library"
            }), _v22?.(_v2.uri, _v75.SHARE_RESOURCE_MVV_HEADER_ENTRY_POINT, _v0);
            return;
          }
          _v61 ? _v28({
            tracking: {
              params: {
                feature: "teams",
                location: "folder_header",
                page: "library_folder",
                upsell_name: "share_folder_with_team"
              },
              paywallTracking: {
                paywallTrigger: "folder_review_header_share_button",
                paywallLocation: "folder_header",
                paywallType: "popup",
                paywallFeature: "collaboration"
              }
            },
            onClose: _v29,
            modalConfig: {
              headerText: (0, _v87.translate)({
                singular: "Upgrade to share",
                dictionary: {
                  es: {
                    singular: "Cambia de membresía para compartir"
                  },
                  "de-DE": {
                    singular: "Zum Teilen Upgrade vornehmen"
                  },
                  "fr-FR": {
                    singular: "Passez au niveau supérieur pour partager"
                  },
                  "ja-JP": {
                    singular: "共有するにはアップグレード"
                  },
                  "ko-KR": {
                    singular: "업그레이드하고 공유하세요"
                  },
                  "pt-BR": {
                    singular: "Faça o upgrade para compartilhar"
                  },
                  "zh-CN": {
                    singular: "升级后即可分享"
                  }
                }
              }),
              subHeaderText: (0, _v87.translate)({
                singular: "Get full access to robust collaboration and privacy tools",
                dictionary: {
                  es: {
                    singular: "Obtenga acceso total a herramientas potentes de colaboración y privacidad"
                  },
                  "de-DE": {
                    singular: "Erhalten Sie vollen Zugriff auf zuverlässige Tools für Zusammenarbeit und Datenschutz"
                  },
                  "fr-FR": {
                    singular: "Accédez à tous les outils performants pour la collaboration et la confidentialité"
                  },
                  "ja-JP": {
                    singular: "強力な共同作業ツールとプライバシーツールにフルアクセス"
                  },
                  "ko-KR": {
                    singular: "강력한 협업 및 개인정보 보호 도구 모두 이용"
                  },
                  "pt-BR": {
                    singular: "Tenha acesso total a ferramentas robustas de colaboração e privacidade"
                  },
                  "zh-CN": {
                    singular: "获取对强大协作和隐私工具的完整访问权限"
                  }
                }
              })
            }
          }) : _v23({
            isSuccess: (0, _v104.default)(_v50),
            onManage: _v24
          });
        },
        {
          reviewId: _v69
        } = (0, _v4.useContext)(_v95.ReviewLinkContext),
        _v70 = !!_v51.hasVideoLibraryEmbeddableUploader && !!_v2?.metadata?.interactions?.uploadVideo && !_v69 && !_v1,
        _v71 = _v62 && _v60 ? (0, _v1.jsx)(_v114.AnalyticsButton, {
          analyticsLink: _v62,
          location: _v111.AnalyticsLocations.MVV_HEADER,
          page: "MVV",
          name: "click_folder_analytics",
          dataTestId: "header-analytics-button"
        }) : null,
        _v72 = _v70 ? (0, _v1.jsx)(_v113.UploadButton, {
          folderId: _v3,
          paywallTrigger: "folder_header_upload_button",
          targetUserId: _v34,
          onClick: () => {
            _v8((0, _v111.genericClick)({
              copy: "Upload",
              feature: _v111.AnalyticsFeatures.VIDEO_LIBRARY,
              location: _v111.AnalyticsLocations.MVV_HEADER,
              name: "click_upload_button",
              page: "MVV",
              target: null,
              type: "general"
            }, 53));
          },
          surface: _v41 ? _v42 ? "my_videos" : "teamlibrary" : "library"
        }) : null,
        _v73 = _v35 && !_v69 ? (0, _v1.jsx)(_v115.NewFolderButton, {
          onClick: () => {
            _v44({
              libraryType: (0, _v22.deriveLibraryType)({
                hasContentSpaceEnabled: !!_v41,
                isPrivateToUser: _v2?.isPrivateToUser
              })
            }), _v27({
              userId: _v34,
              parentFolderUri: _v46?.uri ?? "",
              currentFolderUri: _v2.uri,
              location: _v111.AnalyticsLocations.MVV_HEADER,
              isEditingFromFolderHeader: !0
            });
          },
          dataTestId: "header-new-folder-button",
          dataTestIdMobile: "header-new-folder-button-mobile"
        }) : null;
      return _v52 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v71, _v72, _v73]
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v5 && (0, _v1.jsx)(_v101.FolderMenu, {
          canTranslateVideos: _v56,
          handleTranslateVideo: () => {
            _v45("translate_videos"), (0, _v108.sendBpEventWithContexts)("vimeo.select_translate_bulk", {
              ...(0, _v110.buildActionBpContext)({
                action_type: "click",
                feature: null
              }),
              ...(0, _v106.buildProductAnalyticsBpContext)({
                product: "ai",
                feature: "ai_bulk_translate",
                location: "header",
                copy: "translate"
              }),
              ...(0, _v107.buildWebBpContext)({
                page_name: "video_library"
              }),
              ...(0, _v109.buildTeamBpContextFromTeamUser)(_v7?.teamUser)
            }, 1, {
              value: String(1),
              device_type: (0, _v103.default)()
            }), _v19({
              folderId: _v3,
              isFolder: !0,
              folderName: _v2.name,
              canTranslateText: _v54,
              canTranslateDubbing: _v55,
              onComplete: () => {
                _v34 && _v48(_v34);
              }
            });
          },
          onClick: () => {
            _v8((0, _v73.openFolderOverflow)({
              product: _v73.AnalyticsProducts.WORKFLOW,
              path: window.location.pathname,
              location: _v111.AnalyticsLocations.MVV_HEADER,
              folder_id: _v3,
              is_subfolder: !!_v46,
              feature: _v111.AnalyticsFeatures.VIDEO_LIBRARY,
              page: "MVV",
              target_object_location_type: _v42 ? "private folder" : "team folder",
              actor_team_role: _v7?.teamUser?.plainTextPermissionLevel ?? null,
              is_my_videos: _v42 && !!_v41
            }));
          },
          canDelete: _v37,
          onDelete: () => {
            _v45("delete"), _v20?.(_v2.name, _v3, _v111.AnalyticsLocations.MVV_HEADER, _v46?.uri ?? null, _v34, _v42, !!_v41, _v67), _v8((0, _v111.genericClick)({
              copy: "Delete",
              feature: _v111.AnalyticsFeatures.VIDEO_LIBRARY,
              location: _v111.AnalyticsLocations.MVV_HEADER,
              name: "select_folder_menu_item",
              page: "MVV",
              target: null,
              type: "general"
            }, 53));
          },
          canEdit: _v38,
          canEditFolderSettings: _v39,
          onFolderSettings: () => {
            _v45("folder_setting"), _v27({
              userId: _v34,
              parentFolderUri: _v46?.uri ?? "",
              currentFolderUri: _v2.uri,
              location: _v111.AnalyticsLocations.MVV_HEADER,
              isEditingFolder: !0,
              isEditingFromFolderHeader: !0,
              initialColor: _v2?.settings?.color
            }), _v8((0, _v111.genericClick)({
              copy: "Folder settings",
              feature: _v111.AnalyticsFeatures.VIDEO_LIBRARY,
              location: _v111.AnalyticsLocations.MVV_HEADER,
              name: "select_folder_menu_item",
              page: "MVV",
              target: null,
              type: "general"
            }, 53));
          },
          onFolderDefaults: () => {
            _v45("folder_setting"), _v26({
              folderId: _v3,
              ownerId: _v34,
              isFolderOwner: _v59,
              presetId: _v2?.settings?.embedPresetId ?? null,
              isInheritanceEnabled: _v2?.settings?.isEmbedPresetInheritanceEnabled,
              displayUpsell: !_v57,
              location: _v111.AnalyticsLocations.MVV_HEADER,
              feature: _v111.AnalyticsFeatures.VIDEO_LIBRARY,
              page: "MVV",
              onSave: () => {
                _v11({
                  content: _v49,
                  status: ""
                });
              }
            });
          },
          canMove: _v37,
          onMove: () => {
            _v45("move"), _v21({
              activeFolderURI: _v2.uri,
              feature: _v111.AnalyticsFeatures.VIDEO_LIBRARY,
              location: _v111.AnalyticsLocations.MVV_HEADER,
              items: [{
                name: _v2.name,
                type: "folder",
                parentFolder: _v46?.uri ? {
                  uri: _v46.uri,
                  isPrivateToUser: _v42
                } : void 0,
                uri: _v2.uri
              }],
              onMoveSuccess: ({
                selectedDestination: _v0,
                items: _v1,
                destinationWorkspaceId: _v2,
                destinationWorkspaceName: _v3
              }) => {
                _v15();
                let _v4 = !!_v1[0].parentFolder?.uri;
                _v17(_v2.uri), _v4 && _v16(_v1[0]?.parentFolder?.uri ?? ""), "root" !== _v0 && _v16(_v0.uri);
                let _v5 = "root" === _v0 ? _v58 : _v0.name,
                  _v6 = "root" === _v0 ? _v75.TEAM_LIBRARY_PATH : (0, _v88.getFolderPageUriFromApiUri)(_v0.uri);
                _v2 && _v3 ? _v14(_v1, {
                  label: _v5,
                  workspaceName: _v3
                }, () => {
                  _v7 && (0, _v128.switchTeam)(_v2, _v7.xsrft).finally(() => {
                    window.location.href = _v6;
                  });
                }) : _v13(_v1, {
                  label: _v5,
                  link: _v6
                });
              },
              onMoveFailure: ({
                selectedDestination: _v0,
                items: _v1
              }) => {
                _v12(_v1[0].name, "root" === _v0 ? _v58 : _v0.name);
              },
              teamOwnerId: _v34
            }), _v8((0, _v111.genericClick)({
              copy: "move",
              feature: _v111.AnalyticsFeatures.VIDEO_LIBRARY,
              location: _v111.AnalyticsLocations.MVV_HEADER,
              name: "select_folder_menu_item",
              page: "MVV",
              target: null,
              type: "general"
            }, 53));
          },
          analyticsPageLink: _v62,
          onClickAnalyticsLink: () => {
            _v45("analytics"), _v8((0, _v111.genericClick)({
              copy: "Analytics",
              feature: _v111.AnalyticsFeatures.ANALYTICS,
              location: _v111.AnalyticsLocations.MVV_HEADER,
              name: "click_folder_analytics",
              page: "MVV",
              target: _v62 ?? "",
              type: "general"
            }, 53));
          },
          hasSlackIntegration: !(!_v47 && _v2.isPrivateToUser) && !_v2.useParentSlackSettings,
          isConnectedToSlack: !!_v2.slackIncomingWebhooksId,
          onSlackIntegration: () => {
            _v45("connect_to_slack"), _v25({
              userId: _v34,
              hasSlackIntegration: !!_v2.slackIncomingWebhooksId,
              isSlackNotificationEnabled: !!_v2.isSlackNotificationEnabled,
              folderId: _v3,
              folderName: _v2.name,
              currentFolderUri: _v2.uri,
              async updateSubFolderData(_v0) {
                _v17(_v2.uri), _v18(_v0), _v46?.uri ? _v16(_v46.uri) : _v15();
              }
            }), _v2.slackIncomingWebhooksId ? _v10("vimeo.open_connection_settings", -1, {
              includeActionContext: !0,
              element: "dropdown",
              feature: "integrations_settings",
              location: "top_action_bar",
              folderId: _v3,
              integrationType: "folder_base_connect",
              parentFolderId: _v46 && _v46.uri ? Number(_v46.uri.split("/").pop()) : null,
              isPrivateToMe: _v2.isPrivateToUser,
              isPinned: _v2.isPinned
            }) : _v10("vimeo.connect_folder", -1, {
              includeActionContext: !0,
              element: "dropdown",
              feature: "integrations_connections",
              location: "top_action_bar",
              folderId: _v3,
              integrationType: "folder_base_connect",
              parentFolderId: _v46 && _v46.uri ? Number(_v46.uri.split("/").pop()) : null,
              isPrivateToMe: _v2.isPrivateToUser,
              isPinned: _v2.isPinned
            });
          },
          canStar: !_v42 || !!_v0?.length,
          onStarClick: _v65 ? () => {
            _v64 || _v45("add_to_starred"), _v65();
          } : void 0,
          canShare: _v33 && _v36,
          onRename: _v4 ? () => {
            _v45("rename"), _v4();
          } : void 0,
          onShare: () => {
            _v45("share"), _v68();
          },
          canManageReviewLinks: _v33,
          onManageReviewLinks: () => {
            _v45("manage_review_links"), _v68("REVIEW_LINKS_PANEL");
          },
          canBulkPrivacyChange: _v38 && _v30,
          onBulkPrivacyChange: () => {
            _v32({
              userId: _v34,
              folderUris: [_v2.uri],
              folderName: _v2.name,
              location: "folder_header",
              variant: _v31,
              onSuccess: () => {}
            });
          },
          hasProhibitMultipleReviewLinks: _v51.hasProhibitMultipleReviewLinks,
          onCopyLink: _v33 ? () => {
            _v45("copy_link"), _v23({
              isSuccess: (0, _v104.default)(_v50),
              onManage: _v24
            });
          } : void 0,
          folderLink: _v33 ? _v50 : void 0,
          hasShareUpsell: _v61,
          hasFolderDefaultsUpsell: !_v57,
          ..._v66
        }), _v7?.user && _v53 && !_v69 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v133, {
            resourceUri: _v2.uri,
            onAddPeopleClick: _v68
          }), (0, _v1.jsx)(_v132, {
            hasUpsell: !!_v61,
            onClick: _v68
          })]
        }), _v69 && (0, _v1.jsx)(_v102.CopyReviewLinkButton, {
          surface: "folder_review_page",
          folderId: String(_v3)
        }), _v72, _v73]
      });
    };
  var _v135 = _v0.i(0),
    _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0),
    _v140 = _v0.i(0),
    _v141 = _v0.i(0),
    _v142 = _v0.i(0),
    _v143 = _v0.i(0),
    _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0),
    _v148 = _v0.i(0),
    _v149 = _v0.i(0),
    _v150 = _v0.i(0),
    _v151 = _v0.i(0);
  let _v152 = () => (0, _v1.jsx)(_v151.HintWrapper, {
    children: (0, _v1.jsx)(_v149.Text, {
      variant: "body-md",
      color: "text-secondary",
      children: (0, _v87.translate)({
        singular: "Looking for other videos? Try {LINK}Team library{/LINK}",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v150.Link, {
            href: "/library",
            variant: "inline-secondary",
            fontSize: "inherit",
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "¿Está buscando otros videos? Pruebe la {LINK}Biblioteca del equipo{/LINK}"
          },
          "de-DE": {
            singular: "Suchen Sie nach anderen Videos? Werfen Sie einen Blick in die {LINK}Teambibliothek{/LINK}"
          },
          "fr-FR": {
            singular: "Vous recherchez d'autres vidéos ? Essayez la {LINK}bibliothèque d'équipe{/LINK}"
          },
          "ja-JP": {
            singular: "他の動画をお探しですか？{LINK}チームライブラリ{/LINK}をお試しください。"
          },
          "ko-KR": {
            singular: "다른 동영상을 찾고 계신가요? {LINK}팀 라이브러리{/LINK}를 사용해 보세요."
          },
          "pt-BR": {
            singular: "Procurando outros vídeos? Confira a {LINK}Biblioteca da equipe{/LINK}"
          },
          "zh-CN": {
            singular: "在寻找其他视频吗？不妨试用{LINK}团队视频库{/LINK}"
          }
        }
      })
    })
  });
  var _v153 = _v0.i(0);
  let _v154 = _v5.default.div.withConfig({
      displayName: "LoadMore__LoadMoreWrapper",
      componentId: "sc-39ae2d88-0"
    })`
  margin: ${(0, _v146.rem)(40)} 0 ${(0, _v146.rem)(48)};
  padding: 0 1.25rem;
`,
    _v155 = _v0 => {
      let {
          isLoadingMore: _v1,
          canLoadMore: _v2 = !1,
          onClick: _v3,
          isDropzoneEnabled: _v4 = !1,
          page: _v5 = "",
          shouldShowTeamLibraryNotification: _v6 = !1
        } = _v0,
        _v7 = _v4 && !_v1;
      if (!_v2) if (_v6) return (0, _v1.jsx)(_v152, {});else if (_v7) return (0, _v1.jsx)(_v153.UploadDropzoneHint, {
        page: _v5
      });else return (0, _v1.jsx)(_v154, {});
      return (0, _v1.jsx)(_v154, {
        children: (0, _v1.jsx)(_v148.Button, {
          format: "secondary",
          fluid: !0,
          disabled: _v1,
          onClick: _v3,
          children: _v1 ? (0, _v1.jsx)(_v147.Spinner, {}) : (0, _v87.translate)({
            singular: "Load more…",
            dictionary: {
              es: {
                singular: "Cargar más…"
              },
              "de-DE": {
                singular: "Mehr Videos laden.."
              },
              "fr-FR": {
                singular: "Afficher plus…"
              },
              "ja-JP": {
                singular: "もっとロードする…"
              },
              "ko-KR": {
                singular: "더 보기"
              },
              "pt-BR": {
                singular: "Carregar mais…"
              },
              "zh-CN": {
                singular: "加载更多..."
              }
            }
          })
        })
      });
    };
  var _v156 = _v0.i(0),
    _v157 = _v0.i(0);
  let _v158 = _v5.default.h5.withConfig({
      displayName: "WebexFolderEmptyState__HelpLink",
      componentId: "sc-e56c9c55-0"
    })`
  margin-top: ${(0, _v146.rem)(20)};
`,
    _v159 = _v5.default.div.withConfig({
      displayName: "WebexFolderEmptyState__InfoText",
      componentId: "sc-e56c9c55-1"
    })`
  margin-left: 40px;
  text-align: left;
`,
    _v160 = _v5.default.li.withConfig({
      displayName: "WebexFolderEmptyState__Instruction",
      componentId: "sc-e56c9c55-2"
    })`
  display: list-item;
  list-style: disc inside;
  line-height: 200%;
`,
    _v161 = _v5.default.div.withConfig({
      displayName: "WebexFolderEmptyState__Container",
      componentId: "sc-e56c9c55-3"
    })`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: ${(0, _v146.rem)(60)} 0;
`,
    _v162 = _v5.default.img.withConfig({
      displayName: "WebexFolderEmptyState__Image",
      componentId: "sc-e56c9c55-4"
    })`
  width: 40%;
  max-width: ${(0, _v146.rem)(300)};
  margin-right: ${(0, _v146.rem)(40)};
`,
    _v163 = () => {
      let _v0 = "Webex";
      return (0, _v1.jsxs)(_v161, {
        children: [(0, _v1.jsx)(_v162, {
          src: "https://i.vimeocdn.com/custom_asset/c41b7fa74a5b0d8f3cb9956c46e40972",
          alt: "instruction image"
        }), (0, _v1.jsxs)(_v159, {
          children: [(0, _v1.jsx)("h2", {
            children: (0, _v87.translate)({
              singular: "How to record a {appName} meeting",
              replacements: {
                appName: _v0
              },
              dictionary: {
                es: {
                  singular: "Cómo grabar una reunión de {appName}"
                },
                "de-DE": {
                  singular: "So können {appName}-Meetings aufgezeichnet werden"
                },
                "fr-FR": {
                  singular: "Comment enregistrer une réunion {appName}"
                },
                "ja-JP": {
                  singular: "{appName}ミーティングを録画する方法"
                },
                "ko-KR": {
                  singular: "{appName} 회의를 녹화하는 방법"
                },
                "pt-BR": {
                  singular: "Como gravar uma reunião do {appName}"
                },
                "zh-CN": {
                  singular: "如何录制 {appName} 会议"
                }
              }
            })
          }), (0, _v1.jsxs)("ul", {
            children: [(0, _v1.jsx)(_v160, {
              children: (0, _v87.translate)({
                singular: "Confirm that your {appName} account supports cloud recordings.",
                replacements: {
                  appName: _v0
                },
                dictionary: {
                  es: {
                    singular: "Confirma que tu cuenta de {appName} admite grabaciones en la nube."
                  },
                  "de-DE": {
                    singular: "Bestätige, dass dein {appName}-Konto Cloud-Aufnahmen unterstützt."
                  },
                  "fr-FR": {
                    singular: "Confirmez que votre compte {appName} prend en charge les enregistrements dans le Cloud."
                  },
                  "ja-JP": {
                    singular: "{appName}アカウントがクラウド録画に対応していることを確認してください。"
                  },
                  "ko-KR": {
                    singular: "{appName} 계정이 클라우드 녹화를 지원하는지 확인합니다."
                  },
                  "pt-BR": {
                    singular: "Confirme se sua conta do {appName} aceita gravações na nuvem."
                  },
                  "zh-CN": {
                    singular: "确认您的 {appName} 帐户支持云录制。"
                  }
                }
              })
            }), (0, _v1.jsx)(_v160, {
              children: (0, _v87.translate)({
                singular: 'Click "Record in cloud".',
                dictionary: {
                  es: {
                    singular: "Haz clic en Grabar en la nube."
                  },
                  "de-DE": {
                    singular: "Klicke auf „In der Cloud aufnehmen“."
                  },
                  "fr-FR": {
                    singular: "Cliquez sur « Enregistrer dans le Cloud »"
                  },
                  "ja-JP": {
                    singular: "「クラウド録画」をクリックします"
                  },
                  "ko-KR": {
                    singular: "'클라우드에 녹화'를 클릭합니다."
                  },
                  "pt-BR": {
                    singular: 'Clique em "Gravar na nuvem".'
                  },
                  "zh-CN": {
                    singular: "点击“云端录制”。"
                  }
                }
              })
            }), (0, _v1.jsx)(_v160, {
              children: (0, _v87.translate)({
                singular: "Your recordings will automatically save to this folder",
                dictionary: {
                  es: {
                    singular: "Sus grabaciones se guardarán automáticamente en esta carpeta."
                  },
                  "de-DE": {
                    singular: "Deine Aufnahmen werden automatisch in diesem Ordner gespeichert"
                  },
                  "fr-FR": {
                    singular: "Vos enregistrements seront automatiquement sauvegardés dans ce dossier"
                  },
                  "ja-JP": {
                    singular: "録画は自動的にこのフォルダーに保存されます"
                  },
                  "ko-KR": {
                    singular: "녹화본이 이 폴더에 자동으로 저장됩니다."
                  },
                  "pt-BR": {
                    singular: "Suas gravações serão salvas nesta pasta automaticamente"
                  },
                  "zh-CN": {
                    singular: "您的录像将自动保存到此文件夹"
                  }
                }
              })
            })]
          }), (0, _v1.jsx)(_v158, {
            children: (0, _v1.jsx)("a", {
              href: "https://www.vimeo.com/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12427373941649-Record-and-upload-your-Webex-meetings-to-Vimeo",
              children: (0, _v87.translate)({
                singular: "Learn more in the Help Center",
                dictionary: {
                  es: {
                    singular: "Obtener más información en el Centro de ayuda"
                  },
                  "de-DE": {
                    singular: "Erfahre mehr beim Hilfecenter"
                  },
                  "fr-FR": {
                    singular: "En savoir plus dans notre Centre d'aide"
                  },
                  "ja-JP": {
                    singular: "ヘルプセンターで詳細を見る"
                  },
                  "ko-KR": {
                    singular: "도움말 센터에서 자세히 알아보세요"
                  },
                  "pt-BR": {
                    singular: "Saiba mais na Central de Ajuda"
                  },
                  "zh-CN": {
                    singular: "访问“帮助中心”了解更多信息"
                  }
                }
              })
            })
          })]
        })]
      });
    },
    _v164 = _v5.default.h5.withConfig({
      displayName: "ZoomFolderEmptyState__HelpLink",
      componentId: "sc-127e1348-0"
    })`
  margin-top: ${(0, _v146.rem)(20)};
`,
    _v165 = _v5.default.div.withConfig({
      displayName: "ZoomFolderEmptyState__InfoText",
      componentId: "sc-127e1348-1"
    })`
  margin-left: 40px;
  text-align: left;
`,
    _v166 = _v5.default.li.withConfig({
      displayName: "ZoomFolderEmptyState__Instruction",
      componentId: "sc-127e1348-2"
    })`
  display: list-item;
  list-style: disc inside;
  line-height: 200%;
`,
    _v167 = _v5.default.div.withConfig({
      displayName: "ZoomFolderEmptyState__Container",
      componentId: "sc-127e1348-3"
    })`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: ${(0, _v146.rem)(60)} 0;
`,
    _v168 = _v5.default.img.withConfig({
      displayName: "ZoomFolderEmptyState__Image",
      componentId: "sc-127e1348-4"
    })`
  width: 40%;
  max-width: ${(0, _v146.rem)(300)};
  margin-right: ${(0, _v146.rem)(40)};
`,
    _v169 = () => (0, _v1.jsxs)(_v167, {
      children: [(0, _v1.jsx)(_v168, {
        src: "https://i.vimeocdn.com/custom_asset/c575706fd67f11e4cc905fb449195a6b",
        alt: "instruction image"
      }), (0, _v1.jsxs)(_v165, {
        children: [(0, _v1.jsx)("h2", {
          children: (0, _v87.translate)({
            singular: "How to record a Zoom meeting",
            dictionary: {
              es: {
                singular: "Cómo grabar una reunión de Zoom"
              },
              "de-DE": {
                singular: "So können Zoom-Meetings aufgezeichnet werden"
              },
              "fr-FR": {
                singular: "Comment enregistrer une réunion Zoom ?"
              },
              "ja-JP": {
                singular: "Zoom会議を記録する方法"
              },
              "ko-KR": {
                singular: "Zoom 회의를 녹화하는 방법"
              },
              "pt-BR": {
                singular: "Como gravar uma reunião do Zoom"
              },
              "zh-CN": {
                singular: "如何录制 Zoom 会议"
              }
            }
          })
        }), (0, _v1.jsxs)("ul", {
          children: [(0, _v1.jsx)(_v166, {
            children: (0, _v87.translate)({
              singular: "Enable cloud recording in Zoom",
              dictionary: {
                es: {
                  singular: "Habilitar la grabación en la nube en Zoom"
                },
                "de-DE": {
                  singular: "Cloud-Aufnahmen für Zoom aktivieren"
                },
                "fr-FR": {
                  singular: "Activer l'enregistrement cloud dans Zoom"
                },
                "ja-JP": {
                  singular: "Zoomでクラウド記録を有効にする"
                },
                "ko-KR": {
                  singular: "Zoom에서 클라우드 기록을 활성화합니다."
                },
                "pt-BR": {
                  singular: "Habilitar a gravação na nuvem no Zoom"
                },
                "zh-CN": {
                  singular: "在 Zoom 中启用云录制"
                }
              }
            })
          }), (0, _v1.jsx)(_v166, {
            children: (0, _v87.translate)({
              singular: 'Click "Record to the cloud"',
              dictionary: {
                es: {
                  singular: "Haz clic en Grabar en la nube."
                },
                "de-DE": {
                  singular: "Klicke auf „Über die Cloud aufnehmen“."
                },
                "fr-FR": {
                  singular: "Cliquez sur « Enregistrer dans le Cloud »"
                },
                "ja-JP": {
                  singular: "「クラウドにレコーディング」をクリックします"
                },
                "ko-KR": {
                  singular: "'클라우드에 기록'을 클릭합니다."
                },
                "pt-BR": {
                  singular: 'Clique em "Gravar na nuvem"'
                },
                "zh-CN": {
                  singular: "点击“录制到云端”"
                }
              }
            })
          }), (0, _v1.jsx)(_v166, {
            children: (0, _v87.translate)({
              singular: "Your recordings will automatically save to this folder",
              dictionary: {
                es: {
                  singular: "Sus grabaciones se guardarán automáticamente en esta carpeta."
                },
                "de-DE": {
                  singular: "Deine Aufnahmen werden automatisch in diesem Ordner gespeichert"
                },
                "fr-FR": {
                  singular: "Vos enregistrements seront automatiquement sauvegardés dans ce dossier"
                },
                "ja-JP": {
                  singular: "録画は自動的にこのフォルダーに保存されます"
                },
                "ko-KR": {
                  singular: "녹화본이 이 폴더에 자동으로 저장됩니다."
                },
                "pt-BR": {
                  singular: "Suas gravações serão salvas nesta pasta automaticamente"
                },
                "zh-CN": {
                  singular: "您的录像将自动保存到此文件夹"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v164, {
          children: (0, _v1.jsx)("a", {
            href: "https://www.vimeo.com/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12427429159185-How-to-record-and-upload-your-Zoom-meetings-to-Vimeo",
            children: (0, _v87.translate)({
              singular: "Learn more in the Help Center",
              dictionary: {
                es: {
                  singular: "Obtener más información en el Centro de ayuda"
                },
                "de-DE": {
                  singular: "Erfahre mehr beim Hilfecenter"
                },
                "fr-FR": {
                  singular: "En savoir plus dans notre Centre d'aide"
                },
                "ja-JP": {
                  singular: "ヘルプセンターで詳細を見る"
                },
                "ko-KR": {
                  singular: "도움말 센터에서 자세히 알아보세요"
                },
                "pt-BR": {
                  singular: "Saiba mais na Central de Ajuda"
                },
                "zh-CN": {
                  singular: "访问“帮助中心”了解更多信息"
                }
              }
            })
          })
        })]
      })]
    });
  var _v170 = _v0.i(0),
    _v171 = _v0.i(0),
    _v172 = _v0.i(0),
    _v173 = _v0.i(0),
    _v174 = _v0.i(0),
    _v175 = _v0.i(0),
    _v176 = _v0.i(0),
    _v177 = _v0.i(0),
    _v178 = _v0.i(0),
    _v179 = _v0.i(0);
  let _v180 = () => {
      let {
          hasTeamLibraryContent: _v0,
          isLoading: _v1
        } = (() => {
          let _v0 = (0, _v178.useViewer)(),
            {
              data: _v1,
              isLoading: _v2,
              error: _v3
            } = (0, _v179.useGetUserFoldersRoot)(() => {
              let _v0 = _v0?.teamUser?.ownerId ?? _v0?.user?.id;
              return _v0 ? {
                where: {
                  userId: _v0
                },
                select: ["folder.name", "video.name"],
                query: {
                  perPage: 1,
                  excludePersonalTeamFolder: !0
                },
                headers: {
                  Accept: "application/vnd.vimeo.*+json;version=3.4.1"
                }
              } : null;
            });
          return {
            hasTeamLibraryContent: !!_v1?.data?.length,
            isLoading: _v2,
            error: _v3
          };
        })(),
        {
          hasSharedWithMeContent: _v2,
          isLoading: _v3
        } = (() => {
          let _v0 = (0, _v178.useViewer)(),
            {
              data: _v1,
              isLoading: _v2,
              error: _v3
            } = (0, _v177.useGetUserTeamsSharedItems)(() => _v0?.user?.id ? {
              select: ["type"],
              where: {
                userId: _v0.user.id
              },
              query: {
                perPage: 1
              },
              headers: {
                Accept: "application/vnd.vimeo.*+json;version=3.4.1"
              }
            } : null);
          return {
            hasSharedWithMeContent: !!_v1?.data?.length,
            isLoading: _v2,
            error: _v3
          };
        })();
      return _v1 || _v3 ? (0, _v1.jsx)(_v7.Flex, {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        children: (0, _v1.jsx)(_v147.Spinner, {
          size: "xl"
        })
      }) : (0, _v1.jsx)(_v181, {
        title: (0, _v87.translate)({
          singular: "This space is empty",
          dictionary: {
            es: {
              singular: "Este espacio está vacío"
            },
            "de-DE": {
              singular: "Dieser Bereich ist leer"
            },
            "fr-FR": {
              singular: "Cet espace est vide"
            },
            "ja-JP": {
              singular: "このスペースは空です"
            },
            "ko-KR": {
              singular: "이 공간은 비어 있습니다."
            },
            "pt-BR": {
              singular: "Este espaço está vazio"
            },
            "zh-CN": {
              singular: "这个空间是空的"
            }
          }
        }),
        description: _v0 && _v2 ? (0, _v87.translate)({
          singular: "To explore content, try {TEAM_LIBRARY_LINK}Team library{/TEAM_LIBRARY_LINK} or {SHARED_WITH_ME_LINK}Shared with me{/SHARED_WITH_ME_LINK}. To add your own videos, ask an admin to upgrade your role.",
          replacements: {
            SHARED_WITH_ME_LINK: _v0 => (0, _v1.jsx)("u", {
              children: (0, _v1.jsx)(_v76.default, {
                href: "/shared-with-me",
                children: _v0
              })
            }, "shared-with-me-link"),
            TEAM_LIBRARY_LINK: _v0 => (0, _v1.jsx)("u", {
              children: (0, _v1.jsx)(_v76.default, {
                href: "/library",
                children: _v0
              })
            }, "team-library-link")
          },
          dictionary: {
            es: {
              singular: "Para explorar el contenido, pruebe {TEAM_LIBRARY_LINK}Biblioteca del equipo{/TEAM_LIBRARY_LINK} o {SHARED_WITH_ME_LINK}Compartido conmigo{/SHARED_WITH_ME_LINK}. Para agregar sus propios videos, pídale a un administrador que actualice su rol."
            },
            "de-DE": {
              singular: "Um Inhalte zu entdecken, versuchen Sie es mit {TEAM_LIBRARY_LINK}Teambibliothek{/TEAM_LIBRARY_LINK} oder {SHARED_WITH_ME_LINK}Mit mir geteilt{/SHARED_WITH_ME_LINK}. Um eigene Videos hinzuzufügen, bitten Sie einen Admin um ein Upgrade für Ihre Rolle."
            },
            "fr-FR": {
              singular: "Pour explorer le contenu, accédez à la {TEAM_LIBRARY_LINK}bibliothèque d'équipe{/TEAM_LIBRARY_LINK} ou à la section {SHARED_WITH_ME_LINK}Partagé avec moi{/SHARED_WITH_ME_LINK}. Pour ajouter vos propres vidéos, demandez à un administrateur de mettre votre rôle à niveau."
            },
            "ja-JP": {
              singular: "コンテンツを探索するには、{TEAM_LIBRARY_LINK}チームライブラリ{/TEAM_LIBRARY_LINK}または{SHARED_WITH_ME_LINK}共有作品{/SHARED_WITH_ME_LINK}をお試しください。自分の動画を追加するには、管理者に役割のアップグレードを依頼してください。"
            },
            "ko-KR": {
              singular: "콘텐츠를 탐색하려면 {TEAM_LIBRARY_LINK}팀 라이브러리{/TEAM_LIBRARY_LINK} 또는 {SHARED_WITH_ME_LINK}나와 공유된 파일{/SHARED_WITH_ME_LINK}을 사용해보세요. 내 동영상을 추가하려면 관리자에게 역할 업그레이드를 요청하세요."
            },
            "pt-BR": {
              singular: "Para explorar o conteúdo, tente {TEAM_LIBRARY_LINK}Biblioteca da equipe{/TEAM_LIBRARY_LINK} ou {SHARED_WITH_ME_LINK}Compartilhado comigo{/SHARED_WITH_ME_LINK}. Para adicionar seus vídeos, peça a um administrador para atualizar sua função."
            },
            "zh-CN": {
              singular: "要浏览内容，请尝试{TEAM_LIBRARY_LINK}团队视频库{/TEAM_LIBRARY_LINK}或{SHARED_WITH_ME_LINK}与我共享{/SHARED_WITH_ME_LINK}。要添加自己的视频，请让管理员升级您的角色。"
            }
          }
        }) : _v0 ? (0, _v87.translate)({
          singular: "To explore content, go to {TEAM_LIBRARY_LINK}Team library{/TEAM_LIBRARY_LINK}. To add your own videos, ask an admin to upgrade your role.",
          replacements: {
            TEAM_LIBRARY_LINK: _v0 => (0, _v1.jsx)("u", {
              children: (0, _v1.jsx)(_v76.default, {
                href: "/library",
                children: _v0
              })
            })
          },
          dictionary: {
            es: {
              singular: "Para explorar el contenido, vaya a la {TEAM_LIBRARY_LINK}biblioteca del equipo{/TEAM_LIBRARY_LINK}. Para agregar sus propios videos, pídale a un administrador que actualice su rol."
            },
            "de-DE": {
              singular: "Um Inhalte zu erkunden, wechseln Sie zu {TEAM_LIBRARY_LINK}Team-Bibliothek{/TEAM_LIBRARY_LINK}. Um eigene Videos hinzuzufügen, bitten Sie einen Admin um ein Upgrade für Ihre Rolle."
            },
            "fr-FR": {
              singular: "Pour explorer le contenu, accédez à {TEAM_LIBRARY_LINK}bibliothèque de l'équipe{/TEAM_LIBRARY_LINK}. Pour ajouter vos propres vidéos, demandez à un administrateur de mettre votre rôle à niveau."
            },
            "ja-JP": {
              singular: "コンテンツを探索するには、{TEAM_LIBRARY_LINK}チームライブラリ{/TEAM_LIBRARY_LINK}にアクセスしてください。自分の動画を追加するには、管理者に役割のアップグレードを依頼してください。"
            },
            "ko-KR": {
              singular: "콘텐츠를 탐색하려면 {TEAM_LIBRARY_LINK}팀 라이브러리{/TEAM_LIBRARY_LINK}로 이동하세요. 내 동영상을 추가하려면 관리자에게 역할 업그레이드를 요청하세요."
            },
            "pt-BR": {
              singular: "Para explorar o conteúdo, acesse {TEAM_LIBRARY_LINK}Biblioteca da equipe{/TEAM_LIBRARY_LINK}. Para adicionar seus vídeos, peça a um administrador para atualizar sua função."
            },
            "zh-CN": {
              singular: "要浏览内容，请转至{TEAM_LIBRARY_LINK}团队视频库{/TEAM_LIBRARY_LINK}。要添加自己的视频，请让管理员升级您的角色。"
            }
          }
        }) : _v2 ? (0, _v87.translate)({
          singular: "To explore content, go to {SHARED_WITH_ME_LINK}Shared with me{/SHARED_WITH_ME_LINK}. To add your own videos, ask an admin to upgrade your role.",
          replacements: {
            SHARED_WITH_ME_LINK: _v0 => (0, _v1.jsx)("u", {
              children: (0, _v1.jsx)(_v76.default, {
                href: "/shared-with-me",
                children: _v0
              })
            })
          },
          dictionary: {
            es: {
              singular: "Para explorar el contenido, vaya a {SHARED_WITH_ME_LINK}Compartido conmigo{/SHARED_WITH_ME_LINK}. Para agregar sus propios videos, pídale a un administrador que actualice su rol."
            },
            "de-DE": {
              singular: "Um den Inhalt zu entdecken, gehen Sie zu {SHARED_WITH_ME_LINK}Mit mir geteilt{/SHARED_WITH_ME_LINK}. Um eigene Videos hinzuzufügen, bitten Sie einen Admin um ein Upgrade für Ihre Rolle."
            },
            "fr-FR": {
              singular: "Pour explorer le contenu, accédez à {SHARED_WITH_ME_LINK}Partagé avec moi{/SHARED_WITH_ME_LINK}. Pour ajouter vos propres vidéos, demandez à un administrateur de mettre votre rôle à niveau."
            },
            "ja-JP": {
              singular: "コンテンツを探索するには、{SHARED_WITH_ME_LINK}共有作品{/SHARED_WITH_ME_LINK}にアクセスしてください。自分の動画を追加するには、管理者に役割のアップグレードを依頼してください。"
            },
            "ko-KR": {
              singular: "콘텐츠를 탐색하려면 {SHARED_WITH_ME_LINK}나에게 공유됨{/SHARED_WITH_ME_LINK}으로 이동하세요. 내 동영상을 추가하려면 관리자에게 역할 업그레이드를 요청하세요."
            },
            "pt-BR": {
              singular: "Para explorar o conteúdo, acesse {SHARED_WITH_ME_LINK}Compartilhado comigo{/SHARED_WITH_ME_LINK}. Para adicionar seus vídeos, peça a um administrador para atualizar sua função."
            },
            "zh-CN": {
              singular: "如需浏览相关内容，请转至“{SHARED_WITH_ME_LINK}与我分享{/SHARED_WITH_ME_LINK}”栏。若要添加自己的视频，请让管理员升级您的角色。"
            }
          }
        }) : (0, _v87.translate)({
          singular: "To add your own videos, ask an admin to upgrade your role",
          dictionary: {
            es: {
              singular: "Para agregar sus propios videos, pídale a un administrador que actualice su rol."
            },
            "de-DE": {
              singular: "Um eigene Videos hinzuzufügen, bitten Sie einen Admin um ein Upgrade für Ihre Rolle."
            },
            "fr-FR": {
              singular: "Pour ajouter vos propres vidéos, demandez à un administrateur de mettre votre rôle à niveau."
            },
            "ja-JP": {
              singular: "自分の動画を追加するには、管理者に役割のアップグレードを依頼してください"
            },
            "ko-KR": {
              singular: "내 동영상을 추가하려면 관리자에게 역할 업그레이드를 요청하세요."
            },
            "pt-BR": {
              singular: "Para adicionar seus vídeos, peça a um administrador para atualizar sua função"
            },
            "zh-CN": {
              singular: "若要添加自己的视频，请让管理员升级您的角色"
            }
          }
        })
      });
    },
    _v181 = ({
      title: _v0,
      description: _v1,
      icon: _v2
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v2 || (0, _v1.jsx)(_v176.MyLibrary, {
        w: (0, _v175.rem)(64),
        h: (0, _v175.rem)(64)
      }), (0, _v1.jsx)(_v149.Text, {
        variant: {
          base: "heading-md",
          md: "heading-lg"
        },
        margin: {
          base: "1rem 0 0 0",
          md: "1rem 0"
        },
        children: _v0
      }), (0, _v1.jsx)(_v149.Text, {
        display: {
          base: "none",
          md: "block"
        },
        variant: "body-lg",
        color: "text-secondary",
        children: _v1
      })]
    }),
    _v182 = ({
      hasContentSpaceEnabled: _v0,
      canInviteToFolder: _v1,
      folder: _v2,
      isOwner: _v3
    }) => {
      let {
        isPrivateToUser: _v4,
        shouldShowTeamLibraryNotification: _v5
      } = _v2;
      if (_v0 && _v4) {
        let {
            title: _v0,
            icon: _v1
          } = _v2.metadata.connections.parentFolder ? {
            title: (0, _v87.translate)({
              singular: "It's empty in here",
              dictionary: {
                es: {
                  singular: "No hay nada aquí"
                },
                "de-DE": {
                  singular: "Hier ist nichts zu finden."
                },
                "fr-FR": {
                  singular: "Il n'y a rien par ici"
                },
                "ja-JP": {
                  singular: "ここには何もありません"
                },
                "ko-KR": {
                  singular: "비어 있어요"
                },
                "pt-BR": {
                  singular: "Não há nada aqui"
                },
                "zh-CN": {
                  singular: "这里空荡荡的"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v174.FolderOpen, {
              w: {
                base: "3rem",
                md: "4rem"
              },
              h: {
                base: "3rem",
                md: "4rem"
              }
            })
          } : {
            title: (0, _v87.translate)({
              singular: "Add your own videos",
              dictionary: {
                es: {
                  singular: "Agregue sus propios videos"
                },
                "de-DE": {
                  singular: "Ihre eigenen Videos hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajoutez vos propres vidéos"
                },
                "ja-JP": {
                  singular: "自分の動画を追加"
                },
                "ko-KR": {
                  singular: "내 동영상 추가하기"
                },
                "pt-BR": {
                  singular: "Adicione seus vídeos"
                },
                "zh-CN": {
                  singular: "添加您自己的视频"
                }
              }
            })
          },
          _v2 = _v5 ? (0, _v87.translate)({
            singular: "Looking for videos you already added? Try {LINK}Team library{/LINK}",
            replacements: {
              LINK: _v0 => (0, _v1.jsx)(_v150.Link, {
                href: "/library",
                variant: "inline-secondary",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "¿Está buscando los videos que ya ha agregado? Pruebe la {LINK}Biblioteca del equipo{/LINK}."
              },
              "de-DE": {
                singular: "Suchen Sie nach Videos, die Sie bereits hinzugefügt haben? Werfen Sie einen Blick in die {LINK}Teambibliothek{/LINK}"
              },
              "fr-FR": {
                singular: "Vous cherchez des vidéos que vous avez déjà ajoutées ? Essayez la {LINK}bibliothèque d'équipe{/LINK}"
              },
              "ja-JP": {
                singular: "追加済みの動画をお探しですか？{LINK}チームライブラリ{/LINK}をお試しください"
              },
              "ko-KR": {
                singular: "이미 추가한 동영상을 찾고 계신가요? {LINK}팀 라이브러리{/LINK}를 사용해 보세요."
              },
              "pt-BR": {
                singular: "Procurando vídeos que você já adicionou? Confira a {LINK}Biblioteca da equipe{/LINK}"
              },
              "zh-CN": {
                singular: "在寻找您已添加的视频吗？不妨试用{LINK}团队视频库{/LINK}"
              }
            }
          }) : (0, _v87.translate)({
            singular: "Drop videos to upload",
            dictionary: {
              es: {
                singular: "Suelte los videos para subirlos"
              },
              "de-DE": {
                singular: "Videos per Drag-and-Drop hochladen"
              },
              "fr-FR": {
                singular: "Déposez des vidéos pour les mettre en ligne"
              },
              "ja-JP": {
                singular: "アップロードする動画をドロップ"
              },
              "ko-KR": {
                singular: "업로드할 동영상을 여기에 놓으세요"
              },
              "pt-BR": {
                singular: "Solte vídeos para carregar"
              },
              "zh-CN": {
                singular: "拖放视频以上传"
              }
            }
          });
        return (0, _v1.jsx)(_v7.Flex, {
          flexDirection: "column",
          alignItems: "center",
          children: (0, _v1.jsx)(_v181, {
            title: _v0,
            description: _v2,
            icon: _v1
          })
        });
      }
      return _v1 || _v3 ? (0, _v1.jsxs)(_v7.Flex, {
        flexDirection: "column",
        alignItems: "center",
        children: [(0, _v1.jsx)(_v174.FolderOpen, {
          width: {
            base: "3rem",
            md: "4rem"
          },
          height: {
            base: "3rem",
            md: "4rem"
          }
        }), (0, _v1.jsx)(_v172.Header, {
          size: {
            base: "md",
            md: "lg"
          },
          margin: {
            base: "1rem 0 0 0",
            md: "1rem 0"
          },
          children: (0, _v87.translate)({
            singular: "It's empty in here",
            dictionary: {
              es: {
                singular: "No hay nada aquí"
              },
              "de-DE": {
                singular: "Hier ist nichts zu finden."
              },
              "fr-FR": {
                singular: "Il n'y a rien par ici"
              },
              "ja-JP": {
                singular: "ここには何もありません"
              },
              "ko-KR": {
                singular: "비어 있어요"
              },
              "pt-BR": {
                singular: "Não há nada aqui"
              },
              "zh-CN": {
                singular: "这里空荡荡的"
              }
            }
          })
        }), (0, _v1.jsx)(_v173.Paragraph, {
          display: {
            base: "none",
            md: "block"
          },
          size: "lg",
          color: "text-secondary",
          children: (0, _v87.translate)({
            singular: "Drop videos to upload. Or, invite team members to collaborate.",
            dictionary: {
              es: {
                singular: "Suelte los videos para subirlos. O invite a los miembros del equipo a colaborar."
              },
              "de-DE": {
                singular: "Laden Sie Videos per Drag-and-Drop hoch oder Teammitglieder zur Zusammenarbeit ein."
              },
              "fr-FR": {
                singular: "Déposez des vidéos pour les mettre en ligne. Vous pouvez également inviter de nouveaux collaborateurs."
              },
              "ja-JP": {
                singular: "動画をドロップしてアップロードします。または、チームメンバーを招待して共同作業を始めましょう。"
              },
              "ko-KR": {
                singular: "업로드할 동영상을 여기에 놓으세요. 팀원을 초대하여 공동 작업을 시작할 수도 있습니다."
              },
              "pt-BR": {
                singular: "Carregue vídeos ou convide integrantes da equipe para colaborar."
              },
              "zh-CN": {
                singular: "拖放视频以上传。或者，邀请团队成员进行协作。"
              }
            }
          })
        })]
      }) : null;
    };
  var _v183 = _v0.i(0);
  let _v184 = ({
      folder: _v0,
      owner: _v1
    }) => {
      let _v2 = _v0?.metadata?.connections?.personalTeamFolderOwner?.uri ?? null,
        {
          data: _v3,
          isLoading: _v4
        } = (0, _v15.useGetUserTeamRole)(() => _v1?.id ? {
          select: ["role"],
          where: {
            userId: _v1.id
          },
          query: {
            inspectedUserUri: _v2
          }
        } : null);
      return _v4 ? (0, _v1.jsx)(_v147.Spinner, {
        size: "xl"
      }) : _v3?.role === "Viewer" ? (0, _v1.jsx)(_v183.VStack, {
        textAlign: "center",
        children: (0, _v1.jsx)(_v181, {
          title: (0, _v87.translate)({
            singular: "This space is empty",
            dictionary: {
              es: {
                singular: "Este espacio está vacío"
              },
              "de-DE": {
                singular: "Dieser Bereich ist leer"
              },
              "fr-FR": {
                singular: "Cet espace est vide"
              },
              "ja-JP": {
                singular: "このスペースは空です"
              },
              "ko-KR": {
                singular: "이 공간은 비어 있습니다."
              },
              "pt-BR": {
                singular: "Este espaço está vazio"
              },
              "zh-CN": {
                singular: "这个空间是空的"
              }
            }
          }),
          description: (0, _v87.translate)({
            singular: "To let this team member add videos, upgrade their role to Contributor or higher",
            dictionary: {
              es: {
                singular: "Para permitir que este miembro del equipo agregue videos, actualice su rol a colaborador o superior"
              },
              "de-DE": {
                singular: "Um diesem Teammitglied das Hinzufügen von Videos zu ermöglichen, aktualisieren Sie seine Rolle auf „Beitragender“ oder höher."
              },
              "fr-FR": {
                singular: "Pour permettre à ce collaborateur d'ajouter des vidéos, faites passer son rôle à Contributeur ou à un niveau supérieur"
              },
              "ja-JP": {
                singular: "このチームメンバーに動画の追加を許可するには、メンバーの役割を投稿者以上にアップグレードしてください"
              },
              "ko-KR": {
                singular: "이 팀원이 동영상을 추가할 수 있도록 하려면 해당 팀원의 역할을 기여자 이상으로 업그레이드하세요."
              },
              "pt-BR": {
                singular: "Para permitir que este integrante da equipe adicione vídeos, faça o upgrade da função dele para Colaborador ou superior"
              },
              "zh-CN": {
                singular: "要允许此团队成员添加视频，请将其角色升级为贡献者或更高级别"
              }
            }
          })
        })
      }) : (0, _v1.jsx)(_v183.VStack, {
        textAlign: "center",
        children: (0, _v1.jsx)(_v181, {
          title: (0, _v87.translate)({
            singular: "This space is empty",
            dictionary: {
              es: {
                singular: "Este espacio está vacío"
              },
              "de-DE": {
                singular: "Dieser Bereich ist leer"
              },
              "fr-FR": {
                singular: "Cet espace est vide"
              },
              "ja-JP": {
                singular: "このスペースは空です"
              },
              "ko-KR": {
                singular: "이 공간은 비어 있습니다."
              },
              "pt-BR": {
                singular: "Este espaço está vazio"
              },
              "zh-CN": {
                singular: "这个空间是空的"
              }
            }
          }),
          description: (0, _v87.translate)({
            singular: "This team member hasn't added any videos yet",
            dictionary: {
              es: {
                singular: "Este miembro del equipo aún no ha agregado ningún video"
              },
              "de-DE": {
                singular: "Dieses Teammitglied hat noch keine Videos hinzugefügt"
              },
              "fr-FR": {
                singular: "Ce collaborateur n'a pas encore ajouté de vidéos"
              },
              "ja-JP": {
                singular: "このチームメンバーはまだ動画を追加していません"
              },
              "ko-KR": {
                singular: "이 팀원은 아직 동영상을 추가하지 않았습니다."
              },
              "pt-BR": {
                singular: "Este integrante da equipe ainda não adicionou nenhum vídeo"
              },
              "zh-CN": {
                singular: "此团队成员尚未添加任何视频"
              }
            }
          })
        })
      });
    },
    _v185 = (0, _v4.lazy)(() => _v0.A(0).then(({
      TeamSwitcherDropzone: _v0
    }) => ({
      default: _v0
    }))),
    _v186 = ({
      owner: _v0,
      folder: _v1,
      set360SourceType: _v2,
      threeSixtyType: _v3,
      defaultFolderId: _v4,
      folderShareUri: _v5,
      hasContentSpaceEnabled: _v6,
      canInviteToFolder: _v7,
      canAllowDownloads: _v8,
      isOwner: _v9
    }) => {
      let {
          isPersonalTeamFolderAdminView: _v10
        } = (0, _v4.useContext)(_v36.VideoLibraryLayoutContext),
        [_v11, _v12] = (0, _v4.useState)(""),
        {
          data: _v13
        } = (0, _v156.useGetUser)(() => _v0?.id ? {
          select: ["preferences.videos"],
          where: {
            userId: _v0.id
          },
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4.1"
          }
        } : null);
      return _v6 && _v10 ? (0, _v1.jsx)(_v184, {
        folder: _v1,
        owner: _v0
      }) : (0, _v1.jsx)(_v4.Suspense, {
        fallback: (0, _v1.jsx)(_v147.Spinner, {
          size: "xl"
        }),
        children: (0, _v1.jsxs)(_v94.Box, {
          maxWidth: "100%",
          width: "100%",
          children: [_v11 && (0, _v1.jsx)(_v7.Flex, {
            justifyContent: "center",
            children: (0, _v1.jsx)(_v170.UploadErrorMessage, {
              error: _v11,
              onClose: () => _v12("")
            })
          }), (0, _v1.jsx)(_v185, {
            uploadClipProperties: {
              content_rating: _v13?.preferences?.videos?.rating,
              password: _v13?.preferences?.videos?.password,
              privacy: _v13?.preferences?.videos?.privacy ? {
                ..._v13.preferences.videos.privacy,
                download: _v8 ? _v13.preferences.videos.privacy.download : void 0
              } : {},
              spatial: {}
            },
            uploadType: "UPLOAD",
            owner: _v0,
            selectedFolderId: _v4,
            selectedFolder: _v1,
            folderShareUri: _v5,
            onUploadFailure: _v0 => {
              _v12(_v0);
            },
            mvvEmptyStateContent: (0, _v1.jsx)(_v182, {
              canInviteToFolder: _v7,
              folder: _v1,
              hasContentSpaceEnabled: _v6,
              isOwner: _v9
            })
          }), (0, _v1.jsx)(_v171.EmptyStateDropzoneFooter, {
            set360SourceType: _v2,
            threeSixtyType: _v3
          })]
        })
      });
    },
    _v187 = ({
      isContentSpacePrivateToMeFolder: _v0
    }) => _v0 ? (0, _v1.jsx)(_v7.Flex, {
      flexDirection: "column",
      alignItems: "center",
      margin: "auto",
      px: {
        md: (0, _v175.rem)(100),
        xl: (0, _v175.rem)(300),
        "2xl": (0, _v175.rem)(400)
      },
      textAlign: "center",
      maxWidth: (0, _v175.rem)(0),
      children: (0, _v1.jsx)(_v180, {})
    }) : (0, _v1.jsxs)(_v7.Flex, {
      flexDirection: "column",
      alignItems: "center",
      margin: "auto",
      children: [(0, _v1.jsx)(_v174.FolderOpen, {
        w: (0, _v175.rem)(64),
        h: (0, _v175.rem)(64)
      }), (0, _v1.jsx)(_v149.Text, {
        variant: "heading-lg",
        margin: `${(0, _v175.rem)(16)} 0`,
        children: (0, _v87.translate)({
          singular: "This folder is empty",
          dictionary: {
            es: {
              singular: "Esta carpeta está vacía"
            },
            "de-DE": {
              singular: "Dieser Ordner ist leer"
            },
            "fr-FR": {
              singular: "Ce dossier est vide"
            },
            "ja-JP": {
              singular: "このフォルダは空です"
            },
            "ko-KR": {
              singular: "이 폴더는 비어 있습니다."
            },
            "pt-BR": {
              singular: "Esta pasta está vazia"
            },
            "zh-CN": {
              singular: "此文件夹为空"
            }
          }
        })
      }), (0, _v1.jsx)(_v149.Text, {
        variant: "body-lg",
        color: "text-secondary",
        children: (0, _v87.translate)({
          singular: "Nothing has been added to this folder yet",
          dictionary: {
            es: {
              singular: "Aún no se ha agregado nada a esta carpeta"
            },
            "de-DE": {
              singular: "Diesem Ordner wurde noch nichts hinzugefügt."
            },
            "fr-FR": {
              singular: "Aucun élément n'a encore été ajouté à ce dossier"
            },
            "ja-JP": {
              singular: "このフォルダーにはまだ何も追加されていません"
            },
            "ko-KR": {
              singular: "아직 이 폴더에 추가된 항목이 없습니다."
            },
            "pt-BR": {
              singular: "Nada foi adicionado a esta pasta ainda."
            },
            "zh-CN": {
              singular: "尚未向此文件夹添加任何内容"
            }
          }
        })
      })]
    }),
    _v188 = ({
      canEditFolder: _v0,
      defaultFolderId: _v1,
      owner: _v2,
      set360SourceType: _v3,
      threeSixtyType: _v4,
      canInviteToFolder: _v5 = !1,
      folderShareUri: _v6 = "",
      folder: _v7,
      viewer: _v8,
      areFiltersApplied: _v9 = !1
    }) => {
      let {
          data: _v10,
          isLoading: _v11
        } = (0, _v156.useGetUser)(() => _v8?.user?.id ? {
          select: ["metadata.connections.webexUploadFolder", "metadata.connections.zoomUploadFolder"],
          where: {
            userId: _v8.user.id
          }
        } : null),
        {
          capabilities: {
            canAllowDownloads: _v12
          }
        } = (0, _v10.useCapability)(["canAllowDownloads"], _v2?.id),
        {
          contentSpaceEnabled: _v13
        } = (0, _v86.useContentSpaceEnabled)(_v2?.id),
        {
          zoomUploadFolder: _v14,
          webexUploadFolder: _v15
        } = _v10?.metadata?.connections || {};
      return _v11 ? (0, _v1.jsx)(_v7.Flex, {
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 30px",
        w: "100%",
        h: "100%",
        children: (0, _v1.jsx)(_v147.Spinner, {
          size: "xl"
        })
      }) : _v14?.uri === _v6 ? (0, _v1.jsx)(_v169, {}) : _v15?.uri === _v6 ? (0, _v1.jsx)(_v163, {}) : (0, _v1.jsx)(_v7.Flex, {
        alignItems: "center",
        justifyContent: "center",
        w: "100%",
        h: "100%",
        children: _v9 ? (0, _v1.jsx)(_v157.FilterEmptyState, {}) : _v0 ? (0, _v1.jsx)(_v186, {
          owner: _v2,
          folder: _v7,
          defaultFolderId: _v1,
          folderShareUri: _v6,
          set360SourceType: _v3,
          threeSixtyType: _v4,
          canInviteToFolder: _v5,
          canAllowDownloads: _v12,
          hasContentSpaceEnabled: _v13,
          isOwner: !!(_v8?.user?.id && _v8?.user?.id === _v2?.id)
        }) : (0, _v1.jsx)(_v187, {
          isContentSpacePrivateToMeFolder: _v7.isPrivateToUser && !!_v13
        })
      });
    },
    _v189 = (0, _v2.default)(() => _v0.A(0).then(_v0 => ({
      default: _v0.GridView
    })), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v190 = (0, _v2.default)(() => _v0.A(0).then(_v0 => ({
      default: _v0.ListView
    })), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v191 = ({
      canEditFolder: _v0 = !1,
      disableUploads: _v1 = !1,
      folderData: _v2,
      folderId: _v3,
      playerAssetUrls: _v4,
      layout: _v5,
      threeSixtyType: _v6,
      setThreeSixtyType: _v7,
      sort: _v8,
      userId: _v9,
      viewer: _v10,
      selectItem: _v11,
      deselectItem: _v12,
      deselectAllItems: _v13,
      selectedItemURIs: _v14,
      folderItems: _v15,
      removeItemFromCacheByUri: _v16,
      removeMultipleItemsFromCacheByURI: _v17,
      insertVideoCopyAfterOriginal: _v18,
      onFolderSettingsChange: _v19,
      isDone: _v20,
      onLoadMore: _v21,
      isLoadingMore: _v22,
      areFiltersApplied: _v23 = !1,
      onMoreInfo: _v24
    }) => {
      let [_v25, _v26] = (0, _v4.useState)(!1),
        [_v27, _v28] = (0, _v4.useState)(!0),
        {
          capabilities: _v29
        } = (0, _v10.useCapability)(["canSeeUpsellModalOnShare", "privateModeOff", "canManageTeamCollections", "hasVideoReviewPageDemo", "regionalDeliveryPublishContentToChina", "hasMultipleReviewLinks"], _v10?.teamUser?.ownerId),
        {
          contentSpaceEnabled: _v30
        } = (0, _v86.useContentSpaceEnabled)(_v10?.teamUser?.ownerId),
        _v31 = (0, _v141.getLibraryUploadSurface)({
          contentSpaceEnabled: !!_v30,
          isPrivateToUser: _v2.isPrivateToUser
        }),
        _v32 = _v10?.teamUser?.ownerId ?? _v10?.user?.id ?? _v9,
        _v33 = _v30 ? (0, _v87.translate)({
          singular: "Team library",
          dictionary: {
            es: {
              singular: "Biblioteca del equipo"
            },
            "de-DE": {
              singular: "Teambibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque de l'équipe"
            },
            "ja-JP": {
              singular: "チームライブラリ"
            },
            "ko-KR": {
              singular: "팀 라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca da equipe"
            },
            "zh-CN": {
              singular: "团队视频库"
            }
          }
        }) : (0, _v87.translate)({
          singular: "Library",
          dictionary: {
            es: {
              singular: "Biblioteca"
            },
            "de-DE": {
              singular: "Bibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque"
            },
            "ja-JP": {
              singular: "ライブラリ"
            },
            "ko-KR": {
              singular: "라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca"
            },
            "zh-CN": {
              singular: "视频库"
            }
          }
        }),
        _v34 = (0, _v118.useNotification)(),
        {
          notifyItemMoveFailure: _v35,
          notifyItemMoveSuccess: _v36,
          notifyItemMoveToWorkspaceSuccess: _v37
        } = (0, _v118.useNotifications)(),
        {
          setLoadingSideNavFolderURIs: _v38
        } = (0, _v4.useContext)(_v36.VideoLibraryLayoutContext),
        {
          revalidateFolderItems: _v39,
          revalidateTopLevelFolders: _v40,
          revalidateRootItems: _v41
        } = (0, _v37.useRevalidate)(),
        {
          openCopyVideoModal: _v42,
          copyVideoModal: _v43
        } = (0, _v139.useCopyVideoFlow)({
          onAfterCopySuccess: (_v0, _v1) => _v18(_v1.uri, _v0)
        }),
        {
          reviewId: _v44
        } = (0, _v4.useContext)(_v95.ReviewLinkContext),
        _v45 = !!(_v27 && _v2.metadata.interactions.uploadVideo && !_v44 && !_v1),
        {
          settings: _v46
        } = (0, _v17.useOrionSettings)(),
        _v47 = _v46?.enable_new_library_drag_and_drop_upload ?? !1,
        _v48 = _v45 && !_v47,
        _v49 = (0, _v143.useLiveEventDeleteModal)(),
        _v50 = (0, _v142.useDeleteLiveEvent)({
          onFailure: () => {
            _v49.setIsLoading(!1);
          },
          onSuccess: ({
            uri: _v0
          }) => {
            _v16(_v0), _v34({
              content: (0, _v87.translate)({
                singular: "This event has been deleted",
                dictionary: {
                  es: {
                    singular: "Se ha eliminado este evento"
                  },
                  "de-DE": {
                    singular: "Dieses Event wurde gelöscht"
                  },
                  "fr-FR": {
                    singular: "Cet événement a été supprimé"
                  },
                  "ja-JP": {
                    singular: "このイベントは削除されました"
                  },
                  "ko-KR": {
                    singular: "이 이벤트는 삭제되었습니다."
                  },
                  "pt-BR": {
                    singular: "Este vídeo foi excluído"
                  },
                  "zh-CN": {
                    singular: "此活动已被删除"
                  }
                }
              })
            }), _v49.setIsLoading(!1), _v49.close();
          }
        }),
        _v51 = (0, _v1.jsx)(_v155, {
          canLoadMore: !_v20,
          isLoadingMore: !!_v22,
          onClick: _v21,
          isDropzoneEnabled: _v45,
          page: _v2.name,
          shouldShowTeamLibraryNotification: _v2.shouldShowTeamLibraryNotification
        }),
        [_v52, {
          loading: _v53
        }] = (0, _v144.useMoveItem)(),
        [_v54, _v55] = (0, _v4.useState)(null),
        [_v56, _v57] = (0, _v4.useState)([]),
        [_v58, _v59] = (0, _v4.useState)(new Set()),
        _v60 = ({
          dropTarget: _v0,
          items: _v1
        }) => {
          if (_v55(_v0), _v57(_v1), _v0) if (!_v2.isPrivateToUser || _v0.isPrivateToUser || _v25) {
            let _v0 = new Set("");
            _v0.add(_v0.uri), _v59(_v0), _v38(_v0);
            let [,, _v1,, _v2] = _v0.uri.split("/");
            _v52({
              ownerId: parseInt(_v1, 10),
              folderId: parseInt(_v2, 10),
              targetItems: _v1
            }).then(() => {
              1 === _v1.length ? (_v12(_v1[0].uri, 0), _v16(_v1[0].uri)) : (_v13(), _v17(_v14)), _v36(null, {
                label: _v0.name,
                link: (0, _v88.getFolderPageUriFromApiUri)(_v0.uri)
              });
            }).catch(_v0 => {
              _v34({
                content: _v0,
                status: "error"
              });
            }).finally(() => {
              _v55(null), _v57([]), _v59(new Set()), _v38(new Set()), _v26(!1), _v1.length > 1 ? _v33.gtm.trackBulkMove() : _v33.gtm.trackVideoMove();
            });
          } else _v26(!0);
        },
        {
          draggableItemIsHovering: _v61,
          dropRef: _v62
        } = (0, _v140.useDropFolder)({
          dropTargetType: _v145.DROP_TARGET_TYPES.FOLDER_MENU_ITEM,
          dropTarget: void 0,
          allowedDropEffect: null,
          dropFileForUploadConfig: null != _v32 && _v2.metadata.interactions.uploadVideo ? {
            targetUserId: _v32,
            folderId: _v3,
            folderName: _v2.name,
            surface: _v31
          } : void 0
        });
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v15?.length === 0 && _v20 ? (0, _v1.jsx)(_v188, {
          canEditFolder: _v0,
          defaultFolderId: _v3,
          owner: {
            id: _v32
          },
          set360SourceType: _v7,
          threeSixtyType: _v6,
          canInviteToFolder: !!_v2?.metadata?.interactions.invite,
          folderShareUri: _v2.uri,
          folder: _v2,
          viewer: _v10,
          areFiltersApplied: _v23
        }) : (0, _v1.jsx)(_v138.UploadDropzone, {
          className: "mvv-upload-dropzone",
          surface: _v31,
          targetUserId: _v32,
          selectedFolderId: _v3,
          disabled: !_v48,
          destinationText: _v2.name,
          children: (0, _v1.jsx)(_v94.Box, {
            ref: _v62,
            backgroundColor: _v61 ? "rgba(23, 213, 255, 0.06)" : "transparent",
            borderColor: _v61 ? "vimeoBlue.500" : "transparent",
            borderRadius: "lg",
            borderWidth: ".125rem",
            transition: "background-color 0.2s ease, border-color 0.2s ease",
            flexGrow: 1,
            children: _v5 === _v42.LAYOUT.GRID ? (0, _v1.jsx)(_v135.PlayerContextProvider, {
              assetUrls: _v4,
              type: _v136.PlayerType.BarebonePlayer,
              children: (0, _v1.jsx)(_v189, {
                deselectItem: _v12,
                folder: _v2,
                handleRemoveVideo: _v16,
                hasFolderShareUpsell: !!_v29.canSeeUpsellModalOnShare,
                hasReviewPageLinkUpsell: !!_v29.hasVideoReviewPageDemo,
                projectItems: _v15,
                libraryTitle: _v33,
                contentSpaceEnabled: !!_v30,
                loadMoreCta: _v51,
                onFolderSettingsChange: _v19,
                sortOptions: _v8,
                selectItem: _v11,
                selectedItemURIs: _v14,
                handleMoveItemsOnDrop: _v60,
                onDeleteLiveEvent: (_v0, _v1, _v2) => {
                  _v49.open({
                    onConfirm: () => {
                      _v49.setIsLoading(!0), _v50({
                        title: _v0,
                        uri: _v1,
                        ownerId: _v2
                      });
                    },
                    onDismiss: () => {
                      _v49.close();
                    },
                    name: _v0
                  });
                },
                setIsUploadDropzoneEnabled: _v28,
                onMoveFolderSuccess: (_v0, _v1, _v2, _v3) => {
                  _v40(), _v1[0].parentFolder?.uri ? _v39(_v1[0]?.parentFolder?.uri ?? "") : _v41(), "root" !== _v0 && _v39(_v0.uri);
                  let _v4 = "root" === _v0 ? _v33 : _v0.name,
                    _v5 = "root" === _v0 ? "/library" : (0, _v88.getFolderPageUriFromApiUri)(_v0.uri);
                  _v2 && _v3 ? _v37(_v1[0].name, {
                    label: _v4,
                    workspaceName: _v3
                  }, () => {
                    _v10 && (0, _v128.switchTeam)(_v2, _v10.xsrft).finally(() => {
                      window.location.href = _v5;
                    });
                  }) : _v36(_v1[0].name, {
                    label: _v4,
                    link: _v5
                  });
                },
                onMoveFolderFailure: (_v0, _v1) => {
                  _v35(_v1[0].name, "root" === _v0 ? _v33 : _v0.name);
                },
                baseUrl: _v10?.vimeoHttpsUrl || "",
                hasMultipleReviewLinks: !!_v29.hasMultipleReviewLinks,
                onMoreInfo: _v24,
                onCopyVideo: _v42
              })
            }) : (0, _v1.jsx)(_v190, {
              folder: _v2,
              projectItems: _v15,
              deselectItem: _v12,
              libraryTitle: _v33,
              contentSpaceEnabled: !!_v30,
              loadingFolderURIs: _v58,
              loadMoreCta: _v51,
              selectedItemURIs: _v14,
              selectItem: _v11,
              sort: _v8,
              handleRemoveVideo: _v16,
              handleMoveItemsOnDrop: _v60,
              setIsUploadDropzoneEnabled: _v28,
              hasFolderShareUpsell: !!_v29.canSeeUpsellModalOnShare,
              hasReviewPageLinkUpsell: !!_v29.hasVideoReviewPageDemo,
              hasMultipleReviewLinks: !!_v29.hasMultipleReviewLinks,
              onMoreInfo: _v24,
              onCopyVideo: _v42
            })
          })
        }), _v25 && (0, _v1.jsx)(_v137.MovePrivateVideoConfirmationModal, {
          dropTarget: _v54,
          items: _v56,
          isOpen: _v25,
          setIsOpen: _v26,
          onMoveConfirmation: _v60,
          isLoading: _v53
        }), _v43]
      });
    },
    _v192 = () => (0, _v1.jsx)(_v7.Flex, {
      height: "100vh",
      justifyContent: "center",
      width: "100%",
      top: "0",
      left: "0",
      opacity: "0.7",
      position: "absolute",
      children: (0, _v1.jsx)(_v7.Flex, {
        alignItems: "center",
        children: (0, _v1.jsx)(_v147.Spinner, {
          size: "xl"
        })
      })
    }),
    _v193 = ["video", "folder"],
    _v194 = (0, _v2.default)(() => _v0.A(0).then(_v0 => ({
      default: _v0.BulkActions
    })), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v195 = (0, _v2.default)(() => _v0.A(0).then(_v0 => ({
      default: _v0.ResourceSidePanel
    })), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v196 = ({
      folderData: _v0,
      folderId: _v1,
      playerAssetUrls: _v2,
      userId: _v3,
      viewer: _v4,
      reviewId: _v5,
      showPasswordPage: _v6 = !1
    }) => {
      let _v7 = (0, _v3.useRouter)(),
        _v8 = (0, _v11.useIsMobile)(),
        [_v9, _v10] = (0, _v4.useState)(null),
        {
          revalidateFolderItems: _v11
        } = (0, _v37.useRevalidate)(),
        {
          setIsPersonalTeamFolderAdminView: _v12,
          shouldShowSideNav: _v13
        } = (0, _v4.useContext)(_v36.VideoLibraryLayoutContext),
        {
          setFolderName: _v14
        } = (0, _v4.useContext)(_v28.OmnisearchContext),
        _v15 = _v4?.teamUser?.ownerId || _v4?.user?.id || null,
        {
          capabilities: _v16
        } = (0, _v10.useCapability)(["canManageTeamCollections", "hasContentSpaceEnabled", "regionalDeliveryPublishContentToChina", "privateModeOff", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasTeamPrivacy", "coldStorageClips", "canPerformBulkTranslations"], null != _v15 ? `/users/${_v15}` : null),
        _v17 = (0, _v41.usePageName)(),
        {
          step: _v18,
          handleDismiss: _v19,
          handleCtaClick: _v20,
          handleErrorClose: _v21
        } = (0, _v64.useViewerAiUpsellModal)("my_library"),
        {
          trackColdStorageUxDisplayed: _v22
        } = (0, _v19.useColdStorageTracking)(),
        {
          trackLibraryPageDisplayed: _v23,
          trackLibraryViewChanged: _v24,
          trackLibrarySortChanged: _v25,
          trackLibraryFilterApplied: _v26
        } = (0, _v21.useLibraryTracking)(),
        {
          hasColdStorage: _v27
        } = (0, _v72.useUserHasColdStorageVideos)(),
        _v28 = _v4?.teamUser?.plainTextPermissionLevel || null,
        _v29 = _v15 === _v4?.user?.id || "Admin" === _v28,
        {
          settings: _v30
        } = (0, _v17.useOrionSettings)(),
        _v31 = _v30?.cold_privacy_enabled ?? !1,
        {
          hasColdPrivacy: _v32,
          isLoading: _v33
        } = (0, _v71.useUserHasColdPrivacyVideos)({
          enabled: _v31 || _v27
        }),
        _v34 = _v31 && _v32,
        _v35 = _v27 || _v34,
        _v36 = (0, _v4.useMemo)(() => (0, _v19.deriveColdStorageRestrictions)({
          hasColdStorage: _v27,
          hasColdPrivacy: _v32
        }), [_v27, _v32]);
      (0, _v20.usePicoEffect)(() => {
        if (!_v27 || _v33) return !1;
        _v22({
          surface: "folder_review",
          restrictions: _v36
        });
      }, [_v27, _v33, _v36], {
        once: !0
      });
      let _v37 = !!_v16.coldStorageClips && _v29 || _v27 && _v29,
        _v38 = (0, _v52.useContentTypeFilter)([..._v193]),
        _v39 = (0, _v55.useVideoAvailabilityFilter)(),
        _v40 = (0, _v53.useClipPrivacyFilter)(["unlisted", "password", "hide_from_vimeo", "team", "private", "public", ...(_v34 ? ["cold_privacy"] : [])], !!_v16?.hasTeamPrivacy),
        _v41 = [..._v40.value],
        _v42 = _v40.value.has("cold_privacy"),
        _v43 = (0, _v67.doesSelectionIncludeVideos)(_v193, _v38.value) && _v39.value.has("restricted") !== _v39.value.has("available") || _v42,
        _v44 = !!_v16.canGenerateClipTextTranslation,
        _v45 = (!!_v16.canGenerateClipTranslation || _v44) && !!_v16.canPerformBulkTranslations,
        _v46 = (0, _v54.useCreatedByFilter)(),
        _v47 = _v40.isFilterActive || _v46.isFilterActive || _v39.isFilterActive,
        _v48 = !!_v40.isFilterActive || !!_v46.isFilterActive,
        _v49 = !!_v40.isDraftActive || !!_v46.isDraftActive,
        _v50 = !!_v38.isFilterApplied || _v47 || (0, _v55.isVideoAvailabilityFilterExplicitlyEngaged)(_v39.value);
      (0, _v4.useEffect)(() => {
        if (!_v27 || (0, _v55.isVideoAvailabilityFilterExplicitlyEngaged)(_v39.value)) return;
        let _v0 = _v38.value;
        if (1 !== _v0.size || !_v0.has("video") || (_v38.setSelection(new Set()), !_v7.isReady)) return;
        let _v1 = _v7.query.filter;
        if ("string" != typeof _v1 || "locked" !== _v1.toLowerCase()) return;
        let _v2 = {
          ..._v7.query
        };
        delete _v2.filter, _v7.replace({
          pathname: _v7.pathname,
          query: _v2
        }, void 0, {
          shallow: !0
        });
      }, [_v39.value, _v38.value, _v27, _v7.isReady, _v7.pathname, _v7.query.filter]);
      let _v51 = !(0, _v67.isContentTypeSelectionDefault)(_v193, _v38.value) && !(0, _v67.doesSelectionIncludeVideos)(_v193, _v38.value),
        _v52 = !(0, _v67.isContentTypeSelectionDefault)(_v193, _v38.draft) && !(0, _v67.doesSelectionIncludeVideos)(_v193, _v38.draft),
        [_v53, _v54] = (0, _v4.useState)(!1),
        [_v55, _v56] = (0, _v4.useState)(!1),
        [_v57, _v58] = (0, _v4.useState)(),
        [_v59, _v60] = (0, _v4.useState)(new Set()),
        [_v61, _v62] = (0, _v4.useState)(!1),
        _v63 = (0, _v29.usePrevious)(_v1),
        _v64 = !!_v16?.hasContentSpaceEnabled,
        [_v65, _v66] = (0, _v12.default)(_v75.MVV_VISIT_LOCAL_STORAGE_KEY, 0),
        [_v67, _v68] = (0, _v34.useLayoutPreference)(),
        [_v69, _v70] = (0, _v35.useSortPreference)(_v42.DEFAULT_SORT, _v42.VL_SORT_LOCAL_STORAGE_KEY),
        [_v71, _v72] = (0, _v40.useDateDisplayPreference)(_v42.DEFAULT_DATE_DISPLAY, _v42.VL_DATE_LOCAL_STORAGE_KEY),
        [_v73, _v74] = (0, _v4.useState)(_v0),
        _v75 = (0, _v23.getReviewPasswordHashFromCookie)(_v5),
        {
          data: _v76,
          error: _v77
        } = (0, _v14.useGetUserProject)({
          where: {
            userId: _v3,
            projectId: _v1
          },
          select: _v75.DEFAULT_FOLDER_API_FIELDS,
          query: {
            reviewId: _v5,
            password: _v75
          }
        }),
        {
          data: _v78,
          error: _v79,
          size: _v80,
          setSize: _v81,
          mutate: _v82,
          updateVideo: _v83
        } = (({
          userId: _v0,
          folderId: _v1,
          sort: _v2,
          contentType: _v3 = "all",
          clipPrivacyFilters: _v4 = [],
          createdByFilter: _v5 = [],
          reviewId: _v6,
          includeColdStorageClips: _v7 = !1
        }) => {
          let _v8 = _v4.length > 0 ? _v4.join(",") : void 0,
            _v9 = _v5.length > 0 ? _v5.map(_v0 => _v0.userId) : void 0,
            _v10 = _v9?.length ? _v9.join(",") : void 0,
            _v11 = (0, _v23.getReviewPasswordHashFromCookie)(_v6),
            {
              data: _v12,
              error: _v13,
              isLoading: _v14,
              mutate: _v15,
              setSize: _v16,
              size: _v17
            } = (0, _v74.useGetUserProjectItemsInfinite)(() => _v0 && _v1 ? {
              where: {
                userId: _v0,
                projectId: _v1
              },
              select: _v75.DEFAULT_ITEM_API_FIELDS,
              query: {
                direction: _v2.direction,
                sort: _v2.type,
                perPage: _v75.ITEMS_PER_PAGE,
                liveEventType: "all",
                noPadding: !0,
                responsive: !0,
                ...("all" !== _v3 && {
                  filter: _v3
                }),
                clipPrivacyFilters: _v8,
                clipCreatedByFilters: _v10,
                includeColdStorageClips: _v7,
                reviewId: _v6,
                password: _v11
              },
              headers: {
                Accept: "application/vnd.vimeo.*+json;version=3.4.1"
              }
            } : null, {
              revalidateAll: !0
            }),
            _v18 = (0, _v4.useCallback)((_v0, _v1) => {
              _v15(_v0 => _v0 ? _v0.map(_v0 => ({
                ..._v0,
                data: _v0.data.map(_v0 => _v0.video?.uri === _v0 ? {
                  ..._v0,
                  video: _v1(_v0.video)
                } : _v0)
              })) : _v0, !1);
            }, [_v15]);
          return {
            data: _v12,
            error: _v13,
            isLoading: _v14,
            mutate: _v15,
            setSize: _v16,
            size: _v17,
            updateVideo: _v18
          };
        })({
          userId: _v3,
          folderId: _v1,
          sort: _v69,
          contentType: (0, _v67.getContentTypeApiFilterParam)(_v193, _v38.value) ?? "all",
          clipPrivacyFilters: _v43 ? [] : _v41,
          createdByFilter: [..._v46.value],
          includeColdStorageClips: _v37,
          reviewId: _v5
        }),
        _v84 = (0, _v4.useMemo)(() => _v78 ? _v78.flatMap(_v0 => {
          if (!_v0) return [];
          let _v1 = _v0.data.filter(_v0 => (0, _v66.passesLibraryItemClientFilters)({
            clipPrivacyFilter: _v40.value,
            contentTypeOptions: _v193,
            contentTypeSelection: _v38.value,
            item: _v0,
            shouldUseClientPipeline: _v43,
            videoAvailabilityFilter: _v39.value
          }));
          return [{
            ..._v0,
            data: _v1
          }];
        }) : _v78, [_v40.value, _v38.value, _v78, _v43, _v39.value]),
        _v85 = _v43 ? _v84?.reduce((_v0, _v1) => _v0 + _v1.data.length, 0) : _v84?.[0]?.total,
        _v86 = (0, _v22.deriveLibraryType)({
          hasContentSpaceEnabled: _v64,
          isPrivateToUser: _v73?.isPrivateToUser
        });
      (0, _v20.usePicoEffect)(() => {
        if (!_v73 || void 0 === _v85) return !1;
        _v23({
          libraryType: _v86,
          libraryItemCount: _v85,
          referrerPage: (0, _v22.deriveLibraryReferrerPage)(_v7.query.library_referrer)
        });
      }, [_v73?.uri, _v86, _v85, _v7.query.library_referrer], {
        once: !0
      });
      let {
          isDone: _v87,
          isLoadingMore: _v88,
          isLoadingInitialData: _v89
        } = (0, _v30.getInfiniteRequestLoadingState)({
          data: _v78,
          error: _v77,
          size: _v80,
          itemsPerPage: _v75.ITEMS_PER_PAGE
        }),
        _v90 = _v69.type === _v42.DEFAULT_SORT.type && _v69.direction === _v42.DEFAULT_SORT.direction,
        _v91 = _v89 && !_v50 && _v90,
        _v92 = !_v91 && !_v5,
        [_v93, _v94] = (0, _v4.useState)(!1),
        [_v95, _v96] = (0, _v4.useState)(_v73?.name ?? "");
      (0, _v25.useReviewBPViewPage)(_v1, "folder", _v75, "vimeo.open_review_page", "review_page"), (0, _v4.useEffect)(() => {
        let _v0 = _v65 + 1;
        _v0 >= _v75.SURVEY_VISIT_THRESHOLD && _v33.gtm.trackFolderRepeatVisit(), _v0 <= _v75.MAX_VISITS_TO_COUNT && _v66(_v0);
      }, []);
      let _v97 = _v73?.metadata?.connections?.personalTeamFolderOwner?.uri ?? null,
        _v98 = !!_v73?.metadata?.interactions?.view?.uri,
        _v99 = !!_v73?.metadata?.interactions?.edit?.uri,
        _v100 = !!_v73?.metadata?.interactions?.canComment,
        _v101 = !!_v73?.metadata?.interactions?.editSettings?.uri,
        _v102 = _v73?.metadata?.connections?.ancestorPath,
        _v103 = !!_v73?.metadata?.interactions?.addSubfolder?.canAddSubfolders;
      (0, _v4.useEffect)(() => {
        let _v0 = _v4?.user?.id,
          _v1 = _v4?.teamUser ? _v4?.teamUser.ownerId : _v0,
          _v2 = (0, _v32.idFromUri)(_v97),
          _v3 = (0, _v32.idFromUri)(_v73?.uri),
          _v4 = _v73?.metadata?.connections?.ancestorPath?.some(_v0 => "/shared-with-me" === _v0.uri);
        _v1 === _v3 && _v64 && _v97 && _v0 !== _v2 && _v0 === _v1 && !_v4 && _v12(!0);
      }, [_v64, _v97, _v98, _v4?.user?.id, _v4?.teamUser?.ownerId, _v73?.uri, _v12]), (0, _v4.useEffect)(() => (_v76 && (_v14(_v76.name), _v74(_v76)), () => {
        _v14("");
      }), [_v76]), (0, _v4.useEffect)(() => {
        _v10(null);
      }, [_v1]);
      let {
          data: _v104
        } = (0, _v15.useGetUserTeamRole)(() => _v4?.user?.id ? {
          select: ["role"],
          where: {
            userId: _v3
          }
        } : null),
        [_v105, _v106] = (0, _v4.useState)(null);
      (0, _v31.useUploadLifecycle)((_v0, _v1) => {
        _v1.clipId && (_v73 ? _v11(_v73.uri) : _v7.push(`/manage/videos/${_v1.clipId}/privacy`));
      }, []);
      let _v107 = _v4?.user?.id === _v3 || _v4?.teamUser?.ownerId === _v3,
        _v108 = _v46.shouldHideFilter || _v73?.isPrivateToUser,
        _v109 = (0, _v4.useMemo)(() => _v84?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data.flatMap(_v0 => _v0)), [_v84]),
        _v110 = (0, _v4.useMemo)(() => _v107 || _v5 && _v73?.metadata?.interactions?.allowMultipleReviewLinks ? _v109 : _v109?.filter(_v0 => !!_v0.video && _v0.video.reviewPage?.active), [_v107, _v109]),
        _v111 = (0, _v4.useMemo)(() => ({
          canAddToShowcases: {
            fields: ["video.metadata.interactions.edit.uri"],
            test: _v0 => !!_v0?.video && !!_v0?.video?.metadata?.interactions?.edit
          },
          canChangeItemPrivacy: {
            fields: ["video.metadata.interactions.edit.uri"],
            test: _v0 => !!_v0?.video && !!_v0?.video?.metadata?.interactions?.edit
          },
          canDeleteItem: {
            fields: ["video.metadata.interactions.delete.uri", "liveEvent.metadata.interactions.delete"],
            test: _v0 => !!_v0?.video?.metadata?.interactions?.delete || !!_v0?.liveEvent?.metadata?.interactions?.delete
          },
          canMoveItem: {
            fields: ["video.uri", "liveEvent.uri"],
            test: _v0 => _v99 && (!!_v0?.video || !!_v0?.liveEvent)
          },
          hasLegalHold: {
            fields: ["video.metadata.interactions.legalHold.uri"],
            test: _v0 => !!_v0.video?.uri && !!_v0.video?.metadata?.interactions?.legalHold?.uri
          }
        }), [_v99]),
        {
          canDeleteSelection: _v112,
          canMoveSelection: _v113,
          canChangePrivacySelection: _v114,
          hasColdStorageSelection: _v115,
          hasLegalHoldSelection: _v116,
          canSelectURIs: _v117,
          allItems: _v118,
          selectedItems: _v119,
          canAddToShowcasesSelection: _v120,
          hasReachedMaxSelectionForMove: _v121,
          hasReachedMaxSelectionForPrivacy: _v122,
          hasReachedMaxSelectionForSentimentWidget: _v123,
          hasReachedMaxSelectionForShowcases: _v124,
          maxBulkActionSelection: _v125
        } = (0, _v38.useBulkItems)({
          ...(0, _v69.toPredicateFns)(_v111),
          items: _v110,
          selectedURIs: _v59,
          reviewId: _v5,
          allowColdStorageDeletion: !0
        }),
        _v126 = (0, _v70.useMarketingVideoCard)(),
        _v127 = !!_v73?.isPrivateToUser && _v102?.length === 0,
        _v128 = (0, _v9.useLibraryMergeAnnouncement)("library", {
          enabled: _v127
        }),
        _v129 = "becoming" === _v128.active,
        _v130 = (0, _v4.useMemo)(() => {
          let _v0 = (_v118?.length ?? 0) > 0;
          return _v127 && _v126.shouldShow && !_v50 && _v0 ? [{
            type: "video",
            metadata: {
              connections: {}
            },
            isSelected: !1,
            isSelectable: !1,
            marketingVideo: {
              videoId: _v126.videoId,
              entryPoint: "my_library",
              onDismiss: _v126.dismiss
            }
          }, ...(_v118 ?? [])] : _v118;
        }, [_v127, _v126.shouldShow, _v126.videoId, _v126.dismiss, _v50, _v118]),
        _v131 = (0, _v4.useCallback)(_v0 => {
          "Shift" === _v0.key && _v56(!_v55);
        }, [_v55]);
      (0, _v4.useEffect)(() => (window.addEventListener("keydown", _v131), window.addEventListener("keyup", _v131), () => {
        window.removeEventListener("keydown", _v131), window.removeEventListener("keyup", _v131);
      }), [_v131]);
      let _v132 = (0, _v4.useCallback)((_v0, _v1) => {
          let _v2 = _v0.video?.uri || _v0.liveEvent?.uri;
          _v2 && !_v1.has(_v2) && _v1.add(_v2);
        }, []),
        _v133 = (0, _v4.useCallback)((_v0, _v1) => {
          if (void 0 === _v57) {
            _v60(new Set([_v0])), _v58(_v1);
            return;
          }
          let _v2 = new Set(_v59),
            _v3 = _v57 > _v1,
            _v4 = _v3 ? _v1 : _v57,
            _v5 = _v3 ? _v57 : _v1;
          if (_v55 && _v110) for (let _v0 = _v4; _v0 <= _v5; _v0++) _v132(_v110[_v0], _v2);else _v2.add(_v0);
          _v60(_v2), _v58(_v1);
        }, [_v55, _v57, _v58, _v59, _v60, _v110, _v132]),
        _v134 = (0, _v4.useCallback)((_v0, _v1) => {
          let _v2 = new Set(_v59);
          if (void 0 === _v57) {
            _v2.delete(_v0), _v60(_v2), _v62(!1);
            return;
          }
          let _v3 = _v57 > _v1,
            _v4 = _v3 ? _v1 : _v57,
            _v5 = _v3 ? _v57 : _v1;
          if (_v55 && _v110) for (let _v0 = _v4; _v0 <= _v5; _v0++) {
            let _v0 = _v110[_v0].video?.uri || _v110[_v0].liveEvent?.uri;
            _v0 && _v2.delete(_v0);
          }
          _v2.delete(_v0), _v60(_v2), _v58(_v1), _v62(!1);
        }, [_v59, _v60, _v57, _v58, _v55, _v110]),
        _v135 = (0, _v4.useCallback)(() => {
          _v60(new Set()), _v58(void 0), _v62(!1);
        }, [_v60]),
        _v136 = (0, _v4.useCallback)(() => {
          let _v0 = _v38.value,
            _v1 = (0, _v67.isContentTypeOptionChecked)(_v193, _v0, "video"),
            _v2 = _v39.value,
            _v3 = _v2.has("restricted"),
            _v4 = _v2.has("available");
          _v135();
          let _v5 = () => new Set(["restricted", "available"]);
          if (!_v1) {
            _v38.setSelection((0, _v67.includeVideosInSelection)(_v193, _v0)), _v39.setValue(_v5());
            return;
          }
          if (!_v3 && !_v4) {
            _v38.setSelection((0, _v67.excludeVideosFromSelection)(_v193, _v0)), _v39.clearFilter();
            return;
          }
          if (_v3 !== _v4) return void _v39.setValue(_v5());
          if (_v3 && _v4) {
            _v39.clearFilter(), _v38.setSelection((0, _v67.excludeVideosFromSelection)(_v193, _v0));
            return;
          }
        }, [_v38, _v135, _v39]),
        _v137 = (0, _v4.useCallback)(() => {
          let _v0 = _v38.draft,
            _v1 = (0, _v67.isContentTypeOptionChecked)(_v193, _v0, "video"),
            _v2 = _v39.draft,
            _v3 = _v2.has("restricted"),
            _v4 = _v2.has("available");
          _v135();
          let _v5 = () => new Set(["restricted", "available"]);
          if (!_v1) {
            _v38.setSelection((0, _v67.includeVideosInSelection)(_v193, _v0), !0), _v39.setDraft(_v5());
            return;
          }
          if (!_v3 && !_v4) {
            _v38.setSelection((0, _v67.excludeVideosFromSelection)(_v193, _v0), !0), _v39.setDraft(new Set());
            return;
          }
          if (_v3 !== _v4) return void _v39.setDraft(_v5());
          if (_v3 && _v4) {
            _v39.setDraft(new Set()), _v38.setSelection((0, _v67.excludeVideosFromSelection)(_v193, _v0), !0);
            return;
          }
        }, [_v38, _v135, _v39]),
        _v138 = _v27 || _v27 ? {
          onVideoParentCheckboxClick: _v136,
          setVideoAvailabilityFilter: _v0 => {
            let _v1 = _v38.value;
            (0, _v67.isContentTypeOptionChecked)(_v193, _v1, "video") || _v38.setSelection((0, _v67.includeVideosInSelection)(_v193, _v1)), _v39.updateFilterValues(_v0);
          },
          showAvailableOption: _v27,
          showRestrictedOption: _v27,
          videoAvailabilityFilter: _v39.value
        } : void 0,
        _v139 = _v27 || _v27 ? {
          onVideoParentCheckboxClick: _v137,
          onVideoAvailabilityChange: _v0 => {
            let _v1 = _v38.draft;
            (0, _v67.isContentTypeOptionChecked)(_v193, _v1, "video") || _v38.setSelection((0, _v67.includeVideosInSelection)(_v193, _v1), !0), _v39.updateFilterValues(_v0, !0);
          },
          showAvailableOption: _v27,
          showRestrictedOption: _v27,
          videoAvailabilityDraft: _v39.draft
        } : void 0,
        _v140 = (0, _v4.useCallback)(() => {
          _v117.size && _v60(new Set(_v117));
        }, [_v60, _v117]),
        _v141 = (0, _v4.useCallback)(() => _v62(!0), []);
      (0, _v4.useEffect)(() => {
        _v61 && _v117.size && _v60(_v0 => {
          let _v1 = new Set(_v0);
          return _v117.forEach(_v0 => _v1.add(_v0)), _v1.size === _v0.size ? _v0 : _v1;
        });
      }, [_v61, _v117]);
      let {
          isEnabled: _v142
        } = (0, _v39.useEnableFolderBulkPrivacy)(),
        _v143 = _v73?.metadata?.connections?.videos?.total ?? 0,
        _v144 = _v119?.filter(_v0 => !!_v0.video)?.length ?? 0,
        _v145 = _v142 && !!_v144 && !!_v143 && _v143 <= _v125 && !_v50,
        _v146 = (0, _v69.useSelectAllItems)({
          enabled: _v142 && _v61 && !!_v143 && _v143 <= _v125 && !_v50,
          maxItems: _v125,
          source: {
            kind: "project",
            userId: _v3,
            projectId: _v1,
            reviewId: _v5,
            password: _v75,
            includeColdStorageClips: _v37
          },
          predicates: _v111
        }),
        _v147 = _v61 && !_v146.isReady,
        _v148 = _v61 && _v146.isReady ? _v146 : {
          selectedItems: _v119,
          selectedItemURIs: _v59,
          canAddToShowcasesSelection: _v120,
          canMoveSelection: _v113,
          canDeleteSelection: _v112,
          canChangePrivacySelection: _v114,
          hasColdStorageSelection: _v115,
          hasLegalHoldSelection: _v116,
          hasReachedMaxSelectionForMove: _v121,
          hasReachedMaxSelectionForPrivacy: _v122,
          hasReachedMaxSelectionForSentimentWidget: _v123,
          hasReachedMaxSelectionForShowcases: _v124
        };
      (0, _v4.useEffect)(_v135, [_v135, _v73?.uri, _v69.direction, _v69.type]);
      let _v149 = _v4?.teamUser,
        _v150 = _v0 => {
          _v82(_v0 => _v0?.map(_v0 => ({
            ..._v0,
            data: _v0.data.filter(_v0 => !!_v0.folder || (_v0.liveEvent ? _v0.liveEvent.uri && !_v0.has(_v0.liveEvent.uri) : !_v0.video || _v0.video.uri && !_v0.has(_v0.video.uri)))
          })), !0);
        },
        _v151 = (0, _v4.useCallback)(() => {
          _v135(), _v38.clearFilter(), _v40.clearFilter(), _v39.clearFilter(), _v46.clearFilter();
        }, [_v40, _v38, _v46, _v135, _v39]);
      if ((0, _v4.useEffect)(() => {
        _v1 !== _v63 && _v151();
      }, [_v1, _v63, _v151]), _v77 && !_v5) {
        if (!_v4?.user) throw new _v13.UnauthorizedError();
        throw new _v13.ResourceNotFoundError();
      }
      if (_v79 && !_v5) {
        if (_v82(_v0 => _v0, !1), !_v4?.user) throw new _v13.UnauthorizedError();
        throw new _v13.ResourceNotFoundError();
      }
      return _v73 || _v77 ? _v6 && _v5 ? (0, _v1.jsx)(_v24.PasswordPage, {
        reviewId: _v5
      }) : (0, _v1.jsx)(_v5.ThemeProvider, {
        theme: _v6.applyCustomThemeSVV,
        children: (0, _v1.jsx)(_v26.AnalyticsEventProvider, {
          eventData: {
            actor_team_role: _v104?.role || null,
            product: _v73.AnalyticsProducts.VIDEO_LIBRARY
          },
          children: (0, _v1.jsx)(_v27, {
            folder: _v73 || null,
            children: (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v8.LibrariesBecomingOneModal, {
                isOpen: _v129,
                onClose: () => _v128.dismiss("becoming"),
                userId: _v15 ?? void 0,
                mergeDate: _v128.mergeDate
              }), (0, _v1.jsxs)(_v45.Page, {
                children: [(0, _v1.jsxs)(_v45.Page.Main, {
                  children: [(0, _v1.jsx)(_v26.AnalyticsEventProvider, {
                    eventData: {
                      location: _v73.AnalyticsLocations.MVV_HEADER
                    },
                    children: (0, _v1.jsxs)(_v45.Page.StickyTop, {
                      children: [(0, _v1.jsx)(_v18.ReverseTrialLateBanner, {
                        hostLocation: "folder"
                      }), _v35 && (0, _v1.jsx)(_v16.ColdStorageBanner, {
                        surface: "folder_review",
                        hasColdStorage: _v27,
                        hasColdPrivacy: _v34,
                        hasColdPrivacyForTracking: _v32,
                        isColdPrivacyLoading: _v33
                      }), (0, _v1.jsx)(_v46.PageHeader, {
                        actions: (0, _v1.jsx)(_v134, {
                          ancestorFolders: _v102,
                          disableUploads: !1,
                          folderData: _v73,
                          folderId: _v1,
                          onRename: () => {
                            _v94(!0);
                          },
                          shouldShowFolderMenu: _v13,
                          userId: _v3,
                          viewer: _v4
                        }),
                        bottomBar: (0, _v1.jsxs)(_v43.FilterSortBar, {
                          checkbox: (0, _v1.jsx)(_v48.CheckboxItemCount, {
                            hasCheckbox: !!_v117.size && !_v5,
                            isChecked: !!_v59.size,
                            isDisabled: !_v117.size,
                            isIndeterminate: !!_v59.size && _v59.size < _v117.size,
                            isLoading: _v89,
                            onChange: () => {
                              _v59.size ? _v135() : _v140();
                            },
                            subtitle: (0, _v1.jsx)(_v96, {
                              count: _v85 ?? 0,
                              isFiltered: _v50,
                              isMyLibrary: !!_v73?.isPrivateToUser && _v102?.length === 0,
                              level: _v101 ? "manage" : _v99 || _v103 ? "edit" : _v100 ? "comment" : "view"
                            })
                          }),
                          layout: _v67,
                          setLayout: _v0 => {
                            _v68(_v0), _v24({
                              libraryType: _v86,
                              libraryNewView: "GRID_LAYOUT" === _v0 ? "grid" : "list"
                            });
                          },
                          sort: _v69,
                          setSort: _v0 => {
                            let _v1 = `${_v69.type.toLowerCase()}_${_v69.direction.toLowerCase()}`,
                              _v2 = `${_v0.type.toLowerCase()}_${_v0.direction.toLowerCase()}`;
                            if (_v70(_v0), _v2 !== _v1) {
                              let _v0 = {
                                alphabetical_asc: "title_a_to_z",
                                alphabetical_desc: "title_z_to_a",
                                last_user_action_event_date_desc: "last_modified",
                                last_user_action_event_date_asc: "first_modified",
                                date_desc: "last_added",
                                date_asc: "first_added",
                                duration_desc: "longest",
                                duration_asc: "shortest"
                              }[_v2];
                              _v0 && _v25({
                                libraryType: _v86,
                                libraryNewSort: _v0
                              });
                            }
                          },
                          setDateDisplay: _v72,
                          shouldHideViewControls: 0 === _v85 && !_v50,
                          sortOptions: _v42.SORT_OPTIONS,
                          isLayoutToggleDisabled: 0 === _v85,
                          isInitialLoadInProgress: _v91,
                          children: [_v8 && _v92 && (0, _v1.jsxs)(_v7.Flex, {
                            children: [(0, _v1.jsx)(_v57.MobileFilterButton, {
                              isFilterApplied: _v50,
                              onClick: () => {
                                _v54(!0);
                              }
                            }), (0, _v1.jsxs)(_v58.MobileFilterDrawer, {
                              isFilterApplied: _v50,
                              isOpen: _v53,
                              onApplyFilters: () => {
                                let _v0, _v1, _v2, _v3;
                                _v135();
                                let _v4 = !(0, _v67.areIdenticalSets)(_v38.draft, _v38.value),
                                  _v5 = _v40.isDraftActive && _v40.isDraftUpdated(),
                                  _v6 = _v39.isDraftActive && _v39.isDraftUpdated(),
                                  _v7 = _v46.isDraftActive && _v46.isDraftUpdated();
                                _v38.commitDraft(), _v40.commitDraft(), _v39.commitDraft(), _v46.commitDraft(), _v0 = !(0, _v67.areIdenticalSets)(_v38.draft, _v38.value), _v1 = _v40.isDraftActive && _v40.isDraftUpdated(), _v2 = _v39.isDraftActive && _v39.isDraftUpdated(), _v3 = _v46.isDraftActive && _v46.isDraftUpdated(), _v0 && _v62.FilterBPEvents.sendApplyFilterEvent("content_type", _v17, _v149, "mobile"), _v1 && _v62.FilterBPEvents.sendApplyFilterEvent("clip_privacy", _v17, _v149, "mobile"), _v2 && _v62.FilterBPEvents.sendApplyFilterEvent("content_type", _v17, _v149, "mobile"), _v3 && _v62.FilterBPEvents.sendApplyFilterEvent("clip_created_by", _v17, _v149, "mobile"), _v4 && _v26({
                                  libraryType: _v86,
                                  libraryFilterType: "type"
                                }), _v5 && _v26({
                                  libraryType: _v86,
                                  libraryFilterType: "privacy"
                                }), _v6 && _v26({
                                  libraryType: _v86,
                                  libraryFilterType: "type"
                                }), _v7 && _v26({
                                  libraryType: _v86,
                                  libraryFilterType: "created_by"
                                }), _v54(!1);
                              },
                              onClearFilters: () => {
                                _v135(), _v38.clearFilter(), _v40.clearFilter(), _v39.clearFilter(), _v46.clearFilter(), _v54(!1);
                              },
                              onClose: () => {
                                _v38.clearDraft(), _v40.clearDraft(), _v39.clearDraft(), _v46.clearDraft(), _v54(!1);
                              },
                              children: [(0, _v1.jsx)(_v59.MobileContentTypeFilter, {
                                filter: _v38.draft,
                                onToggle: _v0 => {
                                  let _v1 = (0, _v67.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v193, _v38.draft, _v0, (0, _v55.isVideoAvailabilityFilterExplicitlyEngaged)(_v39.draft));
                                  _v38.setSelection(_v1, !0), (0, _v67.doesSelectionIncludeVideos)(_v193, _v1) || _v39.setDraft(new Set());
                                },
                                options: _v193,
                                page: _v17,
                                isDisabled: _v49,
                                videoSubmenu: _v139
                              }), (0, _v1.jsx)(_v60.MobileClipPrivacyFilter, {
                                filter: [..._v40.draft],
                                onChange: _v0 => {
                                  _v38.setSelection(new Set(["video"]), !0), _v40.updateFilterValues(_v0, !0);
                                },
                                options: _v40.options,
                                page: _v17,
                                isDisabled: _v52
                              }), !_v46.shouldHideFilter && (0, _v1.jsx)(_v61.MobileCreatedByFilter, {
                                filter: [..._v46.draft],
                                onChange: _v0 => {
                                  _v38.setSelection(new Set(["video"]), !0), _v46.updateFilterValues(_v0, !0);
                                },
                                searchQuery: _v46.createdByUsersSearchTerm,
                                setSearchQuery: _v46.setCreatedByUsersSearchTerm,
                                options: _v46.createdByUsers,
                                page: _v17,
                                isDisabled: _v52,
                                isLoadingInitialData: _v46.membersLoadingInitialData,
                                isLoadingMore: _v46.membersLoadingMore,
                                isDone: _v46.membersDone,
                                onLoadMore: _v46.loadMoreMembers
                              })]
                            })]
                          }), !_v8 && _v92 && (0, _v1.jsxs)(_v1.Fragment, {
                            children: [_v50 && (0, _v1.jsx)(_v56.ClearAllFiltersButton, {
                              onClick: _v151
                            }), (0, _v1.jsx)(_v49.ContentTypeFilter, {
                              filter: _v38.value,
                              onToggleType: _v0 => {
                                _v135();
                                let _v1 = (0, _v67.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v193, _v38.value, _v0, (0, _v55.isVideoAvailabilityFilterExplicitlyEngaged)(_v39.value));
                                (0, _v67.areIdenticalSets)(_v1, _v38.value) || _v26({
                                  libraryType: _v86,
                                  libraryFilterType: "type"
                                }), _v38.setSelection(_v1), (0, _v67.doesSelectionIncludeVideos)(_v193, _v1) || _v39.clearFilter();
                              },
                              options: _v193,
                              page: _v17,
                              isDisabled: _v48,
                              videoSubmenu: _v138
                            }), (0, _v1.jsx)(_v50.ClipPrivacyTypeFilter, {
                              filter: [..._v40.value],
                              setFilter: _v0 => {
                                _v135(), _v38.setSelection(new Set(["video"])), _v40.updateFilterValues(_v0), _v26({
                                  libraryType: _v86,
                                  libraryFilterType: "privacy"
                                });
                              },
                              options: _v40.options,
                              page: _v17,
                              isDisabled: _v51
                            }), !_v108 && (0, _v1.jsx)(_v51.CreatedByFilter, {
                              filter: [..._v46.value],
                              setFilter: _v0 => {
                                _v135(), _v38.setSelection(new Set(["video"])), _v46.setFilterValues(_v0), _v26({
                                  libraryType: _v86,
                                  libraryFilterType: "created_by"
                                });
                              },
                              searchQuery: _v46.createdByUsersSearchTerm,
                              setSearchQuery: _v46.setCreatedByUsersSearchTerm,
                              options: _v46.createdByUsers,
                              page: _v17,
                              isDisabled: _v51,
                              isLoadingInitialData: _v46.membersLoadingInitialData,
                              isLoadingMore: _v46.membersLoadingMore,
                              isDone: _v46.membersDone,
                              onLoadMore: _v46.loadMoreMembers
                            })]
                          })]
                        }),
                        breadcrumbs: (0, _v1.jsx)(_v89, {}),
                        editableTitle: (0, _v1.jsx)(_v44.FolderEditableTitle, {
                          folderId: _v1,
                          folderOwnerId: (0, _v32.idFromUri)(_v73?.uri),
                          isEditing: _v93,
                          setCurrentTitle: _v96,
                          setIsEditingContentTitle: _v94,
                          value: _v95,
                          fontSize: {
                            base: "heading-lg",
                            md: "heading-xl"
                          },
                          fontWeight: "bold"
                        }),
                        isEditingTitle: _v93,
                        title: _v95
                      }), _v145 && (0, _v1.jsx)(_v68.SelectAllBanner, {
                        folderName: _v95,
                        libraryType: _v86,
                        loadedSelectedCount: _v144,
                        totalVideosCount: _v143,
                        actualSelectedCount: _v146.isReady ? _v146.selectedItemURIs.size : void 0,
                        onSelectAllInFolder: _v141,
                        onClearSelection: _v135,
                        allInFolderEnabled: _v61
                      }), "LIST_LAYOUT" === _v67 && 0 !== _v85 && (0, _v1.jsx)(_v47.BokehListHeader, {
                        setSort: _v70,
                        sort: _v69,
                        shouldShowPrivacy: !!_v73?.metadata?.interactions?.edit,
                        shouldShowFileSize: !0,
                        setDateDisplay: _v72,
                        dateDisplay: _v71
                      })]
                    })
                  }), _v73 && (0, _v1.jsx)(_v191, {
                    threeSixtyType: _v105,
                    setThreeSixtyType: _v106,
                    canEditFolder: _v99,
                    folderData: _v73,
                    folderId: _v1,
                    layout: _v67,
                    playerAssetUrls: _v2,
                    sort: _v69,
                    userId: _v3,
                    viewer: _v4,
                    folderItems: _v130,
                    deselectAllItems: _v135,
                    selectItem: _v133,
                    deselectItem: _v134,
                    selectedItemURIs: _v59,
                    removeItemFromCacheByUri: _v0 => {
                      _v82(_v0 => _v0?.map(_v0 => ({
                        ..._v0,
                        data: _v0.data.filter(_v0 => !!_v0.folder || (_v0.liveEvent ? _v0.liveEvent.uri !== _v0 : !_v0.video || _v0.video.uri !== _v0))
                      })), !1);
                    },
                    removeMultipleItemsFromCacheByURI: _v150,
                    insertVideoCopyAfterOriginal: (_v0, _v1) => {
                      let _v2 = !1;
                      _v82(_v0 => {
                        let _v1 = (0, _v65.insertOptimisticVideoCopy)(_v0, _v0, _v1);
                        return _v2 = _v1.inserted, _v1.pages;
                      }, !1), !_v2 && _v73 && _v11(_v73.uri);
                    },
                    onFolderSettingsChange: ({
                      name: _v0,
                      settings: {
                        color: _v1
                      },
                      uri: _v2
                    }) => {
                      _v82(_v0 => _v0?.map(_v0 => ({
                        ..._v0,
                        data: _v0.data.map(_v0 => _v0.folder?.uri === _v2 ? {
                          ..._v0,
                          folder: {
                            ..._v0.folder,
                            name: _v0,
                            settings: {
                              ..._v0.folder.settings,
                              color: _v1
                            }
                          }
                        } : _v0)
                      })), !1);
                    },
                    isDone: _v87,
                    isLoadingMore: !!_v88,
                    onLoadMore: () => _v81(_v80 + 1),
                    disableUploads: !1,
                    areFiltersApplied: _v50,
                    onMoreInfo: _v10
                  }), _v73 && (0, _v1.jsx)(_v194, {
                    ..._v148,
                    isLoading: _v147,
                    canUseBulkTranslation: _v45,
                    canAddToShowcases: !!_v16.canManageTeamCollections,
                    canPublishContentToChina: _v16.regionalDeliveryPublishContentToChina,
                    currentFolder: {
                      uri: _v73.uri,
                      isPrivateToUser: _v73.isPrivateToUser,
                      id: _v1
                    },
                    deselectAllItems: _v135,
                    removeItems: _v150,
                    teamOwnerId: _v4?.teamUser?.ownerId || _v3,
                    isPrivateModeOn: !_v16.privateModeOff,
                    revalidateItems: () => _v11(_v73.uri),
                    eventData: {
                      page: _v17,
                      folder_id: _v1,
                      folder_share_status: _v73.privacy?.view === "anybody" ? "shared" : "not_shared",
                      is_private_to_me: _v73.isPrivateToUser,
                      is_subfolder: !!_v73.metadata?.connections?.parentFolder,
                      parent_folder_id: _v73.metadata?.connections?.parentFolder?.uri?.split("/").pop() ?? null
                    }
                  })]
                }), _v9 && (0, _v1.jsx)(_v45.Page.Panel, {
                  children: (0, _v1.jsx)(_v195, {
                    isOpen: !0,
                    onClose: () => _v10(null),
                    onVideoPrivacyChange: ({
                      view: _v0
                    }) => _v83(_v9, _v0 => ({
                      ..._v0,
                      privacy: {
                        ..._v0.privacy,
                        view: _v0
                      }
                    })),
                    pageName: "video_library",
                    uri: _v9
                  })
                })]
              }), (0, _v1.jsx)(_v63.ViewerAiUpsellModal, {
                step: _v129 ? "closed" : _v18,
                onDismiss: _v19,
                onCtaClick: _v20,
                onErrorClose: _v21
              })]
            })
          })
        })
      }) : (0, _v1.jsx)(_v192, {});
    };
  _v0.s(["App", 0, _v0 => (0, _v1.jsx)(_v93, {
    folderId: _v0.folderId,
    viewer: _v0.viewer,
    children: (0, _v1.jsx)(_v196, {
      ..._v0
    }, _v0.folderId)
  })], 0);
  let _v197 = (0, _v4.createContext)({
    locale: "default"
  });
  _v0.s(["ConfigContext", 0, _v197], 0), _v0.s(["setCdnUrl", 0, _v0 => {}], 0);
}