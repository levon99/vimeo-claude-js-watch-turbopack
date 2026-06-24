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
    _v22 = _v0.i(0);
  async function _v23({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v21.measureLatency)("postTeamAutoArchiveOnboardAdmin", "POST", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/auto_archive/onboard_admin`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v22.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v22.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v22.deepCamelCase)(_v1);
    });
  }
  async function _v24({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v21.measureLatency)("postTeamAutoArchiveOnboardUser", "POST", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/auto_archive/onboard_user`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v22.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v22.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v22.deepCamelCase)(_v1);
    });
  }
  async function _v25({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v21.measureLatency)("patchTeamAutoArchiveOnboardUser", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/auto_archive/onboard_user`, {
        ..._v3,
        method: "PATCH",
        body: JSON.stringify((0, _v22.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v22.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v22.deepCamelCase)(_v1);
    });
  }
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  let _v31 = ["canManage", "canManageOrg", "displayName", "icon", "icon.sizes", "logo", "logo.uri", "logo.sizes", "logo.defaultPicture", "orgUserRole", "orgUuid", "recordType", "teamDomain", "teamDomain.api", "teamDomain.site", "teamOwnerId", "untranslatedOrgUserRole", "untranslatedUserRole", "uri", "userRole", "tier"],
    _v32 = (_v0, _v1, _v2) => {
      let {
        data: _v3,
        error: _v4,
        isValidating: _v5
      } = (0, _v30.useGetUserWorkspaces)(() => _v0 ? {
        where: {
          userId: _v0
        },
        select: _v31
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      });
      return {
        workspaceItems: (0, _v2.useMemo)(() => {
          let _v0 = _v3?.data;
          if (!_v0) return null;
          let _v1 = _v2 ? ["Admin", "Owner"] : ["Admin", "Owner", "Contributor", "Contributor Plus"];
          return _v0.filter(_v0 => !_v1 || "user" === _v0.recordType).map(_v0 => {
            let _v1 = ["user_workspace", "workspace"].includes(_v0.recordType) ? _v0.icon?.sizes[0]?.link : _v0.logo?.sizes[0]?.link ?? _v0.logo?.baseLink;
            return {
              id: _v0.teamOwnerId,
              uri: _v0.uri,
              imgSrc: _v1,
              ownerAccount: _v0.tier,
              privateToMeFolderId: null,
              role: _v0.untranslatedUserRole,
              title: _v0.displayName
            };
          }).filter(({
            role: _v0,
            ownerAccount: _v1
          }) => _v1 ? _v1.includes(_v0) && "enterprise" === _v1 : "Viewer" !== _v0 && "Uploader" !== _v0);
        }, [_v3, _v2, _v1]),
        workspaceLoading: _v5,
        workspaceError: _v4
      };
    };
  var _v33 = _v0.i(0),
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
    _v62 = _v0.i(0);
  let _v63 = ({
    selectedDestination: _v0,
    setSelectedDestination: _v1,
    showLibrarySelect: _v2,
    hasContentSpaceEnabled: _v3
  }) => {
    let _v4 = !!_v0 && ("root" === _v0 || !_v0?.isPrivateToUser),
      _v5 = !!_v0 && "root" !== _v0,
      _v6 = _v3 ? (0, _v29.translate)({
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
      }) : (0, _v29.translate)({
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
      _v7 = [];
    if (_v2 && _v7.push({
      destination: void 0,
      label: (0, _v29.translate)({
        singular: "Locations",
        dictionary: {
          es: {
            singular: "Ubicaciones"
          },
          "de-DE": {
            singular: "Standorte"
          },
          "fr-FR": {
            singular: "Bureaux"
          },
          "ja-JP": {
            singular: "所在地"
          },
          "ko-KR": {
            singular: "위치"
          },
          "pt-BR": {
            singular: "Locais"
          }
        }
      })
    }), _v4 && _v7.push({
      destination: "root",
      label: _v6
    }), _v5 && _v0?.metadata?.connections?.ancestorPath) {
      let _v0 = _v0.metadata.connections.ancestorPath.slice().reverse().filter(_v0 => _v0.canUpload);
      _v7.push(..._v0.map(_v0 => ({
        destination: {
          ..._v0,
          isPrivateToUser: !!_v0.isPrivateToUser
        },
        label: _v0.name
      })));
    }
    _v5 && _v7.push({
      destination: _v0,
      label: _v0.name
    });
    let _v8 = _v7.shift(),
      _v9 = _v7.slice(0, _v7.length - 1),
      _v10 = _v7.slice(-1);
    return (0, _v1.jsxs)(_v36.Breadcrumb, {
      separator: (0, _v1.jsx)(_v45.ChevronRightSmall, {}),
      children: [_v8 && (0, _v1.jsx)(_v36.BreadcrumbItem, {
        minH: (0, _v15.rem)(26),
        children: (0, _v1.jsx)(_v37.BreadcrumbLink, {
          color: _v7.length ? "text-secondary" : "text-primary",
          cursor: "pointer",
          onClick: () => _v1(_v8.destination),
          children: _v8.label
        })
      }), !!_v9.length && (0, _v1.jsx)(_v36.BreadcrumbItem, {
        children: (0, _v1.jsxs)(_v39.Menu, {
          children: [(0, _v1.jsx)(_v40.MenuButton, {
            as: _v38.IconButton,
            "aria-label": "more",
            icon: (0, _v1.jsx)(_v46.EllipsisH, {}),
            size: "xs",
            variant: "tertiary"
          }), (0, _v1.jsx)(_v42.MenuList, {
            children: _v9.map(_v0 => (0, _v1.jsx)(_v41.MenuItem, {
              onClick: () => _v1(_v0.destination),
              children: _v0.label
            }, _v0.label))
          })]
        })
      }), _v10.map(_v0 => (0, _v1.jsx)(_v36.BreadcrumbItem, {
        children: (0, _v1.jsx)(_v37.BreadcrumbLink, {
          color: "text-primary",
          cursor: "pointer",
          onClick: () => _v1(_v0.destination),
          children: _v0.label
        })
      }, _v0.label))]
    });
  };
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  let _v67 = ["isPrivateToUser", "metadata.connections.ancestorPath.canUpload", "metadata.connections.ancestorPath.name", "metadata.connections.ancestorPath.uri", "metadata.connections.folders.total", "metadata.connections.parentFolder.uri", "metadata.interactions.addSubfolder.canAddSubfolders", "metadata.interactions.uploadVideo.uri", "metadata.interactions.edit.uri", "name", "privacy.view", "uri"],
    _v68 = ["folder.isPrivateToUser", "folder.metadata.connections.ancestorPath.canUpload", "folder.metadata.connections.ancestorPath.name", "folder.metadata.connections.ancestorPath.uri", "folder.metadata.connections.folders.total", "folder.metadata.connections.parentFolder.uri", "folder.metadata.interactions.addSubfolder.canAddSubfolders", "folder.metadata.interactions.edit.uri", "folder.metadata.interactions.uploadVideo.uri", "folder.name", "folder.privacy.view", "folder.uri"],
    _v69 = ({
      selectedDestination: _v0,
      setCreatingFolder: _v1,
      setSelectedDestination: _v2
    }) => {
      let {
          ownerOrWorkspaceId: _v3
        } = (0, _v2.useContext)(_v101),
        [_v4, _v5] = (0, _v2.useState)(""),
        [_v6, {
          data: _v7,
          loading: _v8
        }] = (0, _v66.usePostUserProjects)();
      return (0, _v2.useEffect)(() => {
        _v7 && (_v2(_v7), _v1(!1));
      }, [_v7, _v1, _v2]), (0, _v1.jsx)("form", {
        onSubmit: _v0 => {
          _v0.preventDefault(), (({
            name: _v0
          }) => {
            _v3 && _v6({
              where: {
                userId: _v3
              },
              variables: {
                name: _v0,
                parentFolderUri: "root" === _v0 ? void 0 : _v0?.uri
              },
              select: _v67
            });
          })({
            name: _v4
          });
        },
        children: (0, _v1.jsxs)(_v51.InputGroup, {
          children: [(0, _v1.jsx)(_v50.Input, {
            autoFocus: !0,
            isDisabled: _v8,
            maxLength: 32,
            onChange: _v0 => _v5(_v0.target.value),
            placeholder: (0, _v29.translate)({
              singular: "Folder name",
              dictionary: {
                es: {
                  singular: "Nombre de la carpeta"
                },
                "de-DE": {
                  singular: "Ordnername"
                },
                "fr-FR": {
                  singular: "Nom du dossier"
                },
                "ja-JP": {
                  singular: "フォルダー名"
                },
                "ko-KR": {
                  singular: "폴더 이름"
                },
                "pt-BR": {
                  singular: "Nome da pasta"
                },
                "zh-CN": {
                  singular: "文件夹名称"
                }
              }
            }),
            value: _v4
          }), (0, _v1.jsx)(_v52.InputRightElement, {
            children: (0, _v1.jsxs)(_v49.HStack, {
              position: "absolute",
              right: "0.5rem",
              spacing: "0.25rem",
              children: [(0, _v1.jsx)(_v38.IconButton, {
                "aria-label": (0, _v29.translate)({
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
                }),
                icon: (0, _v1.jsx)(_v64.Checkmark, {}),
                isDisabled: !_v4,
                isLoading: _v8,
                size: "xs",
                type: "submit",
                variant: "primary"
              }), (0, _v1.jsx)(_v38.IconButton, {
                "aria-label": (0, _v29.translate)({
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
                }),
                icon: (0, _v1.jsx)(_v65.CloseXSmall, {}),
                isDisabled: _v8,
                onClick: () => _v1(!1),
                size: "xs",
                variant: "secondary"
              })]
            })
          })]
        })
      });
    };
  var _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  function _v73(_v0) {
    return !!_v0 && "root" !== _v0 && !!_v0?.metadata;
  }
  var _v74 = _v0.i(0),
    _v75 = _v0.i(0);
  let _v76 = ({
      copy: _v0,
      cta: _v1,
      icon: _v2,
      subcopy: _v3
    }) => (0, _v1.jsxs)(_v10.Flex, {
      direction: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      color: "text-secondary",
      height: "100%",
      children: [_v2, (0, _v1.jsx)(_v75.Text, {
        variant: "heading-md",
        fontWeight: "500",
        children: _v0
      }), !!_v3 && (0, _v1.jsx)(_v75.Text, {
        variant: "body-md",
        fontWeight: "400",
        children: _v3
      }), _v1]
    }),
    _v77 = ({
      canCreateFolder: _v0,
      isCreatingFolder: _v1,
      onCreateFolder: _v2,
      setIsCreateFolderButtonVisible: _v3
    }) => ((0, _v2.useEffect)(() => {
      _v3(!1);
    }, [_v3]), (0, _v1.jsx)(_v76, {
      copy: (0, _v29.translate)({
        singular: "No folders yet",
        dictionary: {
          es: {
            singular: "No hay ningún folder aún"
          },
          "de-DE": {
            singular: "Noch keine Ordner vorhanden"
          },
          "fr-FR": {
            singular: "Aucun dossier pour l'instant"
          },
          "ja-JP": {
            singular: "フォルダーがありません。"
          },
          "ko-KR": {
            singular: "아직 폴더가 없습니다"
          },
          "pt-BR": {
            singular: "Você não tem nenhuma pasta"
          }
        }
      }),
      cta: _v0 && (0, _v1.jsx)(_v8.Button, {
        isDisabled: _v1,
        onClick: _v2,
        variant: "secondary",
        children: (0, _v29.translate)({
          singular: "Create folder",
          dictionary: {
            es: {
              singular: "Crear carpeta"
            },
            "de-DE": {
              singular: "Ordner erstellen"
            },
            "fr-FR": {
              singular: "Créer un dossier"
            },
            "ja-JP": {
              singular: "フォルダーを作成"
            },
            "ko-KR": {
              singular: "폴더 만들기"
            },
            "pt-BR": {
              singular: "Criar Pasta"
            },
            "zh-CN": {
              singular: "创建文件夹"
            }
          }
        })
      }),
      icon: (0, _v1.jsx)(_v74.FolderOpen, {
        boxSize: "2rem"
      })
    }));
  var _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  let _v80 = 300,
    _v81 = ({
      isLoading: _v0,
      onLoadMore: _v1,
      size: _v2 = _v80
    }) => {
      let _v3 = (0, _v2.useRef)(null),
        _v4 = (0, _v79.useOnScreen)(_v3);
      return (0, _v2.useEffect)(() => {
        _v4 && !_v0 && _v1();
      }, [_v0, _v4, _v1]), (0, _v1.jsx)(_v48.Box, {
        height: (0, _v15.rem)(_v2),
        mt: (0, _v15.rem)(-_v2),
        width: "100%",
        pointerEvents: "none"
      });
    },
    _v82 = ({
      children: _v0,
      onClick: _v1,
      paddingY: _v2 = "0.75rem"
    }) => {
      let _v3 = (0, _v43.useColorModeValue)("#1A365D0F", "#BEE3F814"),
        _v4 = (0, _v43.useColorModeValue)("#1A365D3D", "#BEE3F83D");
      return (0, _v1.jsx)(_v10.Flex, {
        as: "li",
        alignItems: "center",
        border: "1px solid transparent",
        borderRadius: "0.5rem",
        height: "2.75rem",
        gap: "1rem",
        onClick: _v1,
        padding: `${_v2} 0.75rem`,
        role: "button",
        tabIndex: 0,
        _hover: {
          backgroundColor: _v3
        },
        _focusVisible: {
          backgroundColor: "fill-component",
          borderColor: _v4,
          outline: "none"
        },
        children: _v0
      });
    };
  _v82.Label = ({
    children: _v0
  }) => (0, _v1.jsx)(_v48.Box, {
    flex: "1 1",
    children: (0, _v1.jsx)(_v75.Text, {
      variant: "heading-xs",
      children: _v0
    })
  });
  let _v83 = ({
      emptyState: _v0,
      folders: _v1 = [],
      isDone: _v2,
      isLoading: _v3,
      onClickFolder: _v4,
      onLoadMore: _v5
    }) => {
      let {
          isFolderBlacklisted: _v6,
          fauxFolder: _v7,
          selectedDestination: _v8
        } = (0, _v2.useContext)(_v101),
        _v9 = (0, _v2.useMemo)(() => {
          let _v0 = [..._v1];
          return _v7 && _v73(_v8) && _v7.metadata.connections.parentFolder.uri === _v8.uri && _v0.unshift(_v7), _v0;
        }, [_v1, _v7, _v8]);
      return _v3 || _v9.length ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v10.Flex, {
          as: "ul",
          flexDirection: "column",
          children: _v9?.map(_v0 => {
            let _v1 = _v6(_v0);
            return (0, _v1.jsx)(_v48.Box, {
              opacity: _v1 ? .5 : 1,
              pointerEvents: _v1 ? "none" : "auto",
              children: (0, _v1.jsxs)(_v82, {
                onClick: () => !_v1 && _v4(_v0),
                children: [(0, _v1.jsx)(_v47.Folder, {
                  boxSize: "1.25rem"
                }), (0, _v1.jsx)(_v82.Label, {
                  children: _v0.name
                }), _v1 ? (0, _v1.jsx)(_v78.CircleExclamation, {}) : !!_v0.metadata?.connections?.folders?.total && (0, _v1.jsx)(_v45.ChevronRightSmall, {})]
              })
            }, _v0.uri);
          })
        }), _v3 && (0, _v1.jsx)(_v10.Flex, {
          justifyContent: "center",
          marginTop: "1rem",
          children: (0, _v1.jsx)(_v3.Spinner, {
            size: "sm"
          })
        }), !_v2 && (0, _v1.jsx)(_v81, {
          isLoading: _v3,
          onLoadMore: _v5
        })]
      }) : _v0;
    },
    _v84 = _v0 => ({
      folderId: parseInt(_v0.split("/")[4], 10),
      userId: parseInt(_v0.split("/")[2], 10)
    }),
    _v85 = ({
      canCreateFolder: _v0,
      folderUri: _v1,
      isCreatingFolder: _v2,
      onCreateFolder: _v3,
      setSelectDestination: _v4,
      selectedDestination: _v5,
      setIsCreateFolderButtonVisible: _v6
    }) => {
      let {
          ownerOrWorkspaceId: _v7,
          fauxFolder: _v8
        } = (0, _v2.useContext)(_v101),
        {
          data: _v9
        } = (0, _v70.useGetUserProject)(() => {
          if (!_v1 || _v8 && _v1 === _v8.uri) return null;
          let {
            userId: _v0,
            folderId: _v1
          } = _v84(_v1);
          return !_v0 || !_v1 || _v73(_v5) ? null : {
            select: _v67,
            where: {
              projectId: _v1,
              userId: _v7
            }
          };
        }),
        {
          data: _v10,
          setSize: _v11,
          size: _v12
        } = (0, _v71.useGetUserProjectItemsInfinite)(() => {
          if (!_v1 || _v8 && _v1 === _v8.uri) return null;
          let {
            userId: _v0,
            folderId: _v1
          } = _v84(_v1);
          return _v0 && _v1 ? {
            query: {
              filter: "folder",
              perPage: 20,
              sort: "alphabetical"
            },
            select: _v68,
            where: {
              projectId: _v1,
              userId: _v7
            }
          } : null;
        });
      (0, _v2.useEffect)(() => {
        _v9 && _v4(_v9);
      }, [_v9, _v4]);
      let _v13 = _v10?.flatMap(_v0 => _v0.data).map(_v0 => _v0.folder).filter(_v0 => !!_v0?.metadata?.interactions?.uploadVideo),
        {
          isDone: _v14,
          isLoadingInitialData: _v15,
          isLoadingMore: _v16
        } = (0, _v72.getInfiniteRequestLoadingState)({
          data: _v10,
          itemsPerPage: 20,
          size: _v12
        });
      return _v8 && _v1 === _v8.uri ? (0, _v1.jsx)(_v83, {
        emptyState: (0, _v1.jsx)(_v77, {
          canCreateFolder: !1,
          isCreatingFolder: !1,
          onCreateFolder: _v3,
          setIsCreateFolderButtonVisible: _v6
        }),
        folders: [],
        isDone: !0,
        isLoading: !1,
        onClickFolder: _v0 => _v4(_v0),
        onLoadMore: () => null
      }) : (0, _v1.jsx)(_v83, {
        emptyState: (0, _v1.jsx)(_v77, {
          canCreateFolder: _v0,
          isCreatingFolder: _v2,
          onCreateFolder: _v3,
          setIsCreateFolderButtonVisible: _v6
        }),
        folders: _v13,
        isDone: _v14,
        isLoading: _v15 || _v16,
        onClickFolder: _v0 => _v4(_v0),
        onLoadMore: () => _v11(_v12 + 1)
      });
    };
  var _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0);
  let _v91 = ({
    onSelectDestination: _v0
  }) => {
    let {
        ownerOrWorkspaceId: _v1
      } = (0, _v2.useContext)(_v101),
      {
        contentSpaceEnabled: _v2
      } = (0, _v62.useContentSpaceEnabled)(_v1),
      _v3 = _v2 ? (0, _v29.translate)({
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
      }) : (0, _v29.translate)({
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
      {
        data: _v4
      } = (0, _v90.useGetUserFoldersPrivateToMe)(() => _v1 && _v2 ? {
        where: {
          userId: _v1,
          ownerId: _v1
        },
        select: _v67
      } : null);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [!!_v4 && (0, _v1.jsxs)(_v82, {
        onClick: () => _v0(_v4),
        children: [_v2 ? (0, _v1.jsx)(_v86.MyLibrary, {
          boxSize: "1.25rem"
        }) : (0, _v1.jsx)(_v87.PersonUser, {
          boxSize: "1.25rem"
        }), (0, _v1.jsx)(_v82.Label, {
          children: (0, _v29.translate)({
            singular: "My library",
            dictionary: {
              es: {
                singular: "Mi biblioteca"
              },
              "de-DE": {
                singular: "Meine Bibliothek"
              },
              "fr-FR": {
                singular: "Ma bibliothèque"
              },
              "ja-JP": {
                singular: "マイ ライブラリ"
              },
              "ko-KR": {
                singular: "내 라이브러리"
              },
              "pt-BR": {
                singular: "Minha Biblioteca"
              },
              "zh-CN": {
                singular: "我的视频库"
              }
            }
          })
        }), (0, _v1.jsx)(_v45.ChevronRightSmall, {})]
      }), (0, _v1.jsxs)(_v82, {
        onClick: () => _v0("root"),
        children: [_v2 ? (0, _v1.jsx)(_v88.TeamLibrary, {
          boxSize: "1.25rem"
        }) : (0, _v1.jsx)(_v89.VideosStack, {
          boxSize: "1.25rem"
        }), (0, _v1.jsx)(_v82.Label, {
          children: _v3
        }), (0, _v1.jsx)(_v45.ChevronRightSmall, {})]
      })]
    });
  };
  var _v92 = _v0.i(0);
  let _v93 = () => (0, _v1.jsx)(_v76, {
      copy: (0, _v29.translate)({
        singular: "No matching results",
        dictionary: {
          es: {
            singular: "No hay resultados coincidentes"
          },
          "de-DE": {
            singular: "Keine übereinstimmenden Ergebnisse"
          },
          "fr-FR": {
            singular: "Aucun résultat correspondant"
          },
          "ja-JP": {
            singular: "一致する結果がありません"
          },
          "ko-KR": {
            singular: "일치하는 결과가 없습니다."
          },
          "pt-BR": {
            singular: "Nenhum resultado correspondente"
          },
          "zh-CN": {
            singular: "无匹配结果"
          }
        }
      }),
      icon: (0, _v1.jsx)(_v61.SearchMagnifier, {
        boxSize: "2rem"
      }),
      subcopy: (0, _v29.translate)({
        singular: "Try another search",
        dictionary: {
          es: {
            singular: "Pruebe con otra búsqueda"
          },
          "de-DE": {
            singular: "Versuchen Sie eine andere Suche"
          },
          "fr-FR": {
            singular: "Essayez une autre recherche"
          },
          "ja-JP": {
            singular: "別の検索をお試しください"
          },
          "ko-KR": {
            singular: "다르게 검색해 보세요"
          },
          "pt-BR": {
            singular: "Tente outra pesquisa"
          },
          "zh-CN": {
            singular: "尝试其他搜索"
          }
        }
      })
    }),
    _v94 = ({
      onClickFolder: _v0,
      searchQuery: _v1,
      showPrivateFolders: _v2
    }) => {
      let {
          ownerOrWorkspaceId: _v3
        } = (0, _v2.useContext)(_v101),
        {
          data: _v4,
          setSize: _v5,
          size: _v6
        } = (0, _v92.useGetUserItemsInfinite)(() => _v3 ? {
          query: {
            excludePrivateToMe: !_v2,
            filter: "folder",
            perPage: 20,
            query: _v1,
            queryFields: "title"
          },
          select: _v68,
          where: {
            userId: _v3
          }
        } : null),
        _v7 = _v4?.flatMap(_v0 => _v0.data).map(_v0 => _v0.folder).filter(_v0 => !!_v0 && !!_v0?.metadata?.interactions?.uploadVideo),
        {
          isDone: _v8,
          isLoadingInitialData: _v9,
          isLoadingMore: _v10
        } = (0, _v72.getInfiniteRequestLoadingState)({
          data: _v4,
          itemsPerPage: 20,
          size: _v6
        });
      return (0, _v1.jsx)(_v83, {
        emptyState: (0, _v1.jsx)(_v93, {}),
        folders: _v7,
        isDone: _v8,
        isLoading: _v9 || _v10,
        onClickFolder: _v0,
        onLoadMore: () => _v5(_v6 + 1)
      });
    };
  var _v95 = _v0.i(0);
  let _v96 = ({
      canCreateFolder: _v0,
      isCreatingFolder: _v1,
      onClickFolder: _v2,
      onCreateFolder: _v3,
      setIsCreateFolderButtonVisible: _v4
    }) => {
      let {
          ownerOrWorkspaceId: _v5
        } = (0, _v2.useContext)(_v101),
        {
          listingParams: _v6,
          loading: _v7
        } = (0, _v95.usePrivateToMeFolderListingParams)(_v5),
        {
          data: _v8,
          setSize: _v9,
          size: _v10
        } = (0, _v66.useGetUserProjectsInfinite)(() => !_v5 || _v7 ? null : {
          query: {
            permissionAction: "folder.upload_video",
            ..._v6,
            perPage: 20,
            topLevelOnly: !0
          },
          select: _v67,
          where: {
            userId: _v5
          }
        }),
        _v11 = _v8?.flatMap(_v0 => _v0.data).filter(_v0 => !!_v0),
        {
          isDone: _v12,
          isLoadingInitialData: _v13,
          isLoadingMore: _v14
        } = (0, _v72.getInfiniteRequestLoadingState)({
          data: _v8,
          itemsPerPage: 20,
          size: _v10
        });
      return (0, _v1.jsx)(_v83, {
        emptyState: (0, _v1.jsx)(_v77, {
          canCreateFolder: _v0,
          isCreatingFolder: _v1,
          onCreateFolder: _v3,
          setIsCreateFolderButtonVisible: _v4
        }),
        folders: _v11,
        isDone: _v12,
        isLoading: _v13 || _v14,
        onClickFolder: _v2,
        onLoadMore: () => _v9(_v10 + 1)
      });
    },
    _v97 = ({
      selectedDestination: _v0,
      searchQuery: _v1,
      canCreateFolder: _v2,
      isCreatingFolder: _v3,
      onCreateFolder: _v4,
      onSelectDestination: _v5,
      setIsCreateFolderButtonVisible: _v6
    }) => _v1 ? (0, _v1.jsx)(_v94, {
      onClickFolder: _v5,
      searchQuery: _v1,
      showPrivateFolders: !0
    }) : "root" === _v0 ? (0, _v1.jsx)(_v96, {
      canCreateFolder: _v2,
      isCreatingFolder: _v3,
      onCreateFolder: _v4,
      onClickFolder: _v5,
      setIsCreateFolderButtonVisible: _v6
    }) : _v0?.uri ? (0, _v1.jsx)(_v85, {
      canCreateFolder: _v2,
      folderUri: _v0.uri,
      isCreatingFolder: _v3,
      onCreateFolder: _v4,
      setSelectDestination: _v5,
      selectedDestination: _v0,
      setIsCreateFolderButtonVisible: _v6
    }) : (0, _v1.jsx)(_v91, {
      onSelectDestination: _v5
    });
  var _v98 = _v0.i(0),
    _v99 = _v0.i(0);
  let _v100 = _v0 => (0, _v70.useGetUserProject)(() => {
      if (!_v0) return null;
      let {
        userId: _v0,
        folderId: _v1
      } = _v84(_v0);
      return {
        select: _v67,
        where: {
          projectId: _v1,
          userId: _v0
        }
      };
    }),
    _v101 = (0, _v2.createContext)({
      ownerOrWorkspaceId: 0,
      isFolderBlacklisted: () => !1,
      selectedDestination: void 0
    }),
    _v102 = ({
      title: _v0,
      isActive: _v1,
      onSuccess: _v2,
      ownerOrWorkspaceId: _v3,
      initialFolderUri: _v4,
      onClose: _v5 = () => {},
      isFolderBlacklisted: _v6 = () => !1,
      fauxFolder: _v7
    }) => {
      let [_v8, _v9] = (() => {
          let [_v0, _v1] = (0, _v2.useState)(null),
            [_v2, _v3] = (0, _v2.useState)(""),
            _v4 = (0, _v2.useRef)(void 0),
            _v5 = (0, _v2.useCallback)((_v0, _v1 = 500) => {
              _v3(_v0), null !== _v4 && clearTimeout(_v4.current), _v4.current = setTimeout(() => {
                _v1(_v0);
              }, _v1);
            }, [500]);
          return (0, _v2.useEffect)(() => (_v5(""), () => {
            null != _v4.current && clearTimeout(_v4.current);
          }), ["", _v5]), [{
            actual: _v2,
            debounced: _v0
          }, _v5];
        })(),
        [_v10, _v11] = (0, _v2.useState)(!1),
        [_v12, _v13] = (0, _v2.useState)(),
        [_v14, _v15] = (0, _v2.useState)(!0),
        [_v16, _v17] = (0, _v2.useState)(!1),
        _v18 = (({
          selectedDestination: _v0,
          ownerOrWorkspaceId: _v1
        }) => {
          let _v2,
            _v3,
            _v4 = (_v2 = (0, _v99.useViewer)(), _v3 = _v2?.user?.id, _v2?.teamUser?.ownerId ?? _v3),
            {
              capabilities: _v5
            } = (0, _v98.useCapability)(["canCreateRootFolders"], _v1 ?? _v4);
          return !!_v0 && ("root" === _v0 ? _v5.canCreateRootFolders : !!_v0.metadata?.interactions?.addSubfolder?.canAddSubfolders);
        })({
          selectedDestination: _v12,
          ownerOrWorkspaceId: _v3
        }),
        {
          contentSpaceEnabled: _v19
        } = (0, _v62.useContentSpaceEnabled)(_v3),
        {
          data: _v20
        } = _v100("root" === _v4 || _v4 === _v7?.uri ? null : _v4);
      (0, _v2.useEffect)(() => {
        _v20 ? _v13(_v20) : _v4 == _v7?.uri ? _v13(_v7) : "root" === _v4 && _v13("root");
      }, [_v20, _v4, _v7]), (0, _v2.useEffect)(() => {
        _v8.debounced && (_v11(!1), _v13(void 0), _v17(!1));
      }, [_v8.debounced]), (0, _v2.useEffect)(() => {
        _v15(!0), _v12 && "root" !== _v12 ? _v17(!0) : _v17(!1);
      }, [_v12]);
      let _v21 = () => {
        _v13(void 0), _v15(!0), _v17(!1), _v11(!1), _v9("", 0);
      };
      return (0, _v1.jsx)(_v101.Provider, {
        value: {
          ownerOrWorkspaceId: _v3,
          isFolderBlacklisted: _v6,
          fauxFolder: _v7,
          selectedDestination: _v12
        },
        children: (0, _v1.jsxs)(_v53.Modal, {
          autoFocus: !1,
          isOpen: _v1,
          onClose: () => {
            _v21(), _v5();
          },
          children: [(0, _v1.jsx)(_v58.ModalOverlay, {}), (0, _v1.jsx)(_v55.ModalContent, {
            children: (0, _v1.jsxs)(_v48.Box, {
              as: "span",
              whiteSpace: "nowrap",
              flexGrow: 1,
              position: "relative",
              overflow: "hidden",
              children: [(0, _v1.jsx)(_v57.ModalHeader, {
                paddingBottom: "4",
                children: (0, _v1.jsx)(_v11.Header, {
                  size: "md",
                  children: _v0
                })
              }), (0, _v1.jsxs)(_v54.ModalBody, {
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                overflow: "auto",
                children: [(_v12 || _v8.actual) && (0, _v1.jsxs)(_v51.InputGroup, {
                  children: [(0, _v1.jsx)(_v52.InputLeftElement, {
                    pointerEvents: "none",
                    children: (0, _v1.jsx)(_v61.SearchMagnifier, {
                      boxSize: "1.25rem"
                    })
                  }), (0, _v1.jsx)(_v50.Input, {
                    placeholder: (0, _v29.translate)({
                      singular: "Search folders",
                      dictionary: {
                        es: {
                          singular: "Buscar en carpetas"
                        },
                        "de-DE": {
                          singular: "Ordner durchsuchen"
                        },
                        "fr-FR": {
                          singular: "Recherche dans les dossiers"
                        },
                        "ja-JP": {
                          singular: "検索フォルダー"
                        },
                        "ko-KR": {
                          singular: "폴더 검색"
                        },
                        "pt-BR": {
                          singular: "Pesquisar Pastas"
                        },
                        "zh-CN": {
                          singular: "搜索文件夹"
                        }
                      }
                    }),
                    onChange: _v0 => {
                      _v9(_v0.target.value);
                    },
                    value: _v8.actual
                  })]
                }), _v12 && (0, _v1.jsx)(_v63, {
                  selectedDestination: _v12,
                  setSelectedDestination: _v13,
                  showLibrarySelect: void 0 !== _v12,
                  hasContentSpaceEnabled: _v19
                }), _v10 && (0, _v1.jsx)(_v69, {
                  selectedDestination: _v12,
                  setSelectedDestination: _v13,
                  setCreatingFolder: _v11
                }), (0, _v1.jsx)(_v48.Box, {
                  h: "18.75rem",
                  children: (0, _v1.jsx)(_v97, {
                    canCreateFolder: !!_v18,
                    selectedDestination: _v12,
                    isCreatingFolder: _v10,
                    onCreateFolder: () => _v11(!0),
                    onSelectDestination: _v0 => {
                      _v11(!1), _v9("", 0), _v13(_v0);
                    },
                    setIsCreateFolderButtonVisible: _v15,
                    searchQuery: _v8.debounced
                  })
                })]
              }), (0, _v1.jsx)(_v56.ModalFooter, {
                children: (0, _v1.jsxs)(_v10.Flex, {
                  flexGrow: "1",
                  justifyContent: "space-between",
                  children: [(0, _v1.jsx)(_v48.Box, {
                    children: _v14 && (0, _v1.jsx)(_v59.Tooltip, {
                      label: (0, _v29.translate)({
                        singular: "Create folder",
                        dictionary: {
                          es: {
                            singular: "Crear carpeta"
                          },
                          "de-DE": {
                            singular: "Ordner erstellen"
                          },
                          "fr-FR": {
                            singular: "Créer un dossier"
                          },
                          "ja-JP": {
                            singular: "フォルダーを作成"
                          },
                          "ko-KR": {
                            singular: "폴더 만들기"
                          },
                          "pt-BR": {
                            singular: "Criar Pasta"
                          },
                          "zh-CN": {
                            singular: "创建文件夹"
                          }
                        }
                      }),
                      placement: "top",
                      children: (0, _v1.jsx)(_v38.IconButton, {
                        "aria-label": (0, _v29.translate)({
                          singular: "Create folder",
                          dictionary: {
                            es: {
                              singular: "Crear carpeta"
                            },
                            "de-DE": {
                              singular: "Ordner erstellen"
                            },
                            "fr-FR": {
                              singular: "Créer un dossier"
                            },
                            "ja-JP": {
                              singular: "フォルダーを作成"
                            },
                            "ko-KR": {
                              singular: "폴더 만들기"
                            },
                            "pt-BR": {
                              singular: "Criar Pasta"
                            },
                            "zh-CN": {
                              singular: "创建文件夹"
                            }
                          }
                        }),
                        icon: (0, _v1.jsx)(_v60.FolderPlus, {}),
                        isDisabled: !_v18 || _v10,
                        onClick: () => _v11(!0),
                        variant: "tertiary"
                      })
                    })
                  }), (0, _v1.jsxs)(_v49.HStack, {
                    spacing: "0.5rem",
                    justifySelf: "flex-end",
                    children: [(0, _v1.jsx)(_v8.Button, {
                      onClick: () => {
                        _v21(), _v5();
                      },
                      variant: "tertiary",
                      children: (0, _v29.translate)({
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
                    }), (0, _v1.jsx)(_v8.Button, {
                      onClick: () => {
                        _v2(_v12), _v21();
                      },
                      isDisabled: !_v16,
                      variant: "primary",
                      children: (0, _v29.translate)({
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
                })
              })]
            })
          })]
        })
      });
    },
    _v103 = ({
      selectedFolderUri: _v0,
      selectedTeam: _v1,
      onSelect: _v2,
      defaultFolder: _v3,
      shouldUseDefaultFolder: _v4,
      isLoading: _v5,
      isSettingsPage: _v6
    }) => {
      let _v7,
        {
          isOpen: _v8,
          onOpen: _v9,
          onClose: _v10
        } = (0, _v44.useDisclosure)({
          defaultIsOpen: !1
        }),
        [_v11, _v12] = (0, _v2.useState)(),
        {
          data: _v13,
          isLoading: _v14
        } = _v100(_v4 && _v0 === _v3?.uri ? null : _v0),
        _v15 = (0, _v2.useCallback)(() => {
          if (_v4 && _v0 === _v3?.uri) return [{
            label: (0, _v29.translate)({
              singular: "My Library",
              dictionary: {
                es: {
                  singular: "Mi biblioteca"
                },
                "de-DE": {
                  singular: "Meine Mediathek"
                },
                "fr-FR": {
                  singular: "Ma bibliothèque"
                },
                "ja-JP": {
                  singular: "マイライブラリ"
                },
                "ko-KR": {
                  singular: "내 보관함"
                },
                "pt-BR": {
                  singular: "Minha Biblioteca"
                },
                "zh-CN": {
                  singular: "我的媒体库"
                }
              }
            }),
            uri: _v3?.metadata?.connections?.parentFolder?.uri
          }, {
            label: _v3?.name ?? "",
            uri: _v3?.uri
          }];
          if (!_v13) return [{
            label: (0, _v29.translate)({
              singular: "Select Folder",
              dictionary: {
                es: {
                  singular: "Seleccionar carpeta"
                },
                "de-DE": {
                  singular: "Ordner auswählen"
                },
                "fr-FR": {
                  singular: "Sélectionner un dossier"
                },
                "ja-JP": {
                  singular: "フォルダーを選択"
                },
                "ko-KR": {
                  singular: "폴더 선택"
                },
                "pt-BR": {
                  singular: "Selecionar Pasta"
                },
                "zh-CN": {
                  singular: "选择文件夹"
                }
              }
            })
          }];
          let _v0 = [..._v13.metadata.connections.ancestorPath];
          _v0.reverse();
          let _v1 = _v0.map(_v0 => ({
            label: _v0.name,
            uri: _v0.uri
          }));
          return _v1.push({
            label: _v13.name,
            uri: _v13.uri
          }), _v13.isPrivateToUser || _v1.unshift({
            label: (0, _v29.translate)({
              singular: "Team Library",
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
            }),
            uri: "root"
          }), _v1;
        }, [_v4, _v0, _v3, _v13]),
        _v16 = _v0 => {
          _v12(_v0), _v9();
        },
        _v17 = () => {
          _v12(void 0), _v10();
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v10.Flex, {
          maxWidth: _v6 ? "50%" : "none",
          width: 356,
          padding: "sm",
          outline: "1px solid",
          outlineColor: "input-stroke !important",
          borderRadius: "md",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: _v6 ? "input-fill !important" : "none",
          outlineOffset: _v6 ? "-1px" : "0",
          children: _v5 || _v14 ? (0, _v1.jsx)(_v10.Flex, {
            width: "100%",
            alignItems: "center",
            justify: "center",
            children: (0, _v1.jsx)(_v3.Spinner, {
              size: "xs"
            })
          }) : (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsxs)(_v10.Flex, {
              justifyContent: "center",
              alignItems: "center",
              gap: "sm",
              overflow: "hidden",
              children: [(0, _v1.jsx)(_v47.Folder, {
                cursor: "pointer",
                onClick: () => _v16()
              }), (0, _v1.jsx)(_v10.Flex, {
                alignItems: "center",
                justifyContent: "flex-start",
                overflowX: "auto",
                mr: "sm",
                style: {
                  scrollbarWidth: "none"
                },
                children: _v6 ? (0, _v1.jsx)(_v104, {
                  breadcrumbs: (_v7 = _v15()).length ? [_v7[_v7.length - 1]] : [],
                  openModal: _v16,
                  isSettingsPage: _v6
                }) : (0, _v1.jsx)(_v104, {
                  breadcrumbs: _v15(),
                  openModal: _v16
                })
              })]
            }), (0, _v1.jsx)(_v8.Button, {
              size: "xs",
              variant: _v6 ? "primary" : "secondary",
              onClick: () => _v16(_v0),
              children: (0, _v29.translate)({
                singular: "Change",
                dictionary: {
                  es: {
                    singular: "Cambiar"
                  },
                  "de-DE": {
                    singular: "Ändern"
                  },
                  "fr-FR": {
                    singular: "Modifier"
                  },
                  "ja-JP": {
                    singular: "変更"
                  },
                  "ko-KR": {
                    singular: "변경"
                  },
                  "pt-BR": {
                    singular: "Alterar"
                  },
                  "zh-CN": {
                    singular: "更改"
                  }
                }
              })
            })]
          })
        }), (0, _v1.jsx)(_v102, {
          title: (0, _v29.translate)({
            singular: "Choose a folder to store your recordings",
            dictionary: {
              es: {
                singular: "Seleccione una carpeta para guardar sus grabaciones."
              },
              "de-DE": {
                singular: "Wählen Sie einen Ordner zum Speichern Ihrer Aufnahmen."
              },
              "fr-FR": {
                singular: "Veuillez choisir un dossier pour stocker vos enregistrements."
              },
              "ja-JP": {
                singular: "録画を保存するフォルダーを選択してください"
              },
              "ko-KR": {
                singular: "녹화 파일을 저장할 폴더를 선택하세요."
              },
              "pt-BR": {
                singular: "Escolha uma pasta para armazenar suas gravações"
              },
              "zh-CN": {
                singular: "选择一个文件夹来存储您的录制内容"
              }
            }
          }),
          isActive: _v8,
          fauxFolder: _v4 && _v3 ? _v3 : void 0,
          ownerOrWorkspaceId: _v1,
          onSuccess: _v0 => {
            _v17(), _v2(_v0);
          },
          onClose: _v17,
          initialFolderUri: _v11
        })]
      });
    },
    _v104 = ({
      breadcrumbs: _v0,
      openModal: _v1,
      isSettingsPage: _v2
    }) => {
      let _v3 = (0, _v43.useColorModeValue)("black", "white"),
        _v4 = _v0[0],
        _v5 = _v0.length > 1 && _v0.at(-1),
        _v6 = _v0.slice(1, -1);
      return (0, _v1.jsxs)(_v36.Breadcrumb, {
        separator: (0, _v1.jsx)(_v45.ChevronRightSmall, {}),
        spacing: "2xs",
        children: [_v4 && (0, _v1.jsx)(_v36.BreadcrumbItem, {
          children: (0, _v1.jsx)(_v37.BreadcrumbLink, {
            color: _v2 ? _v3 : void 0,
            cursor: "pointer",
            onClick: () => _v1(_v4.uri),
            children: _v4.label
          })
        }), !!_v6.length && (0, _v1.jsx)(_v36.BreadcrumbItem, {
          children: (0, _v1.jsxs)(_v39.Menu, {
            children: [(0, _v1.jsx)(_v40.MenuButton, {
              as: _v38.IconButton,
              "aria-label": "more",
              icon: (0, _v1.jsx)(_v46.EllipsisH, {}),
              size: "xs",
              variant: "tertiary"
            }), (0, _v1.jsx)(_v42.MenuList, {
              children: _v6.map(_v0 => (0, _v1.jsx)(_v41.MenuItem, {
                cursor: "default",
                onClick: () => {
                  _v1(_v0.uri);
                },
                children: _v0.label
              }, _v0.label))
            })]
          })
        }), _v5 && (0, _v1.jsx)(_v36.BreadcrumbItem, {
          children: (0, _v1.jsx)(_v37.BreadcrumbLink, {
            cursor: "pointer",
            onClick: () => _v1(_v5.uri),
            children: _v5.label
          })
        })]
      });
    };
  var _v105 = _v0.i(0),
    _v106 = _v0.i(0);
  function _v107(_v0) {
    return {
      400: "ERR_BAD_REQUEST",
      401: "ERR_UNAUTHORIZED",
      403: "ERR_FORBIDDEN",
      404: "ERR_NOT_FOUND",
      500: "ERR_INTERNAL_SERVER",
      502: "ERR_BAD_GATEWAY",
      503: "ERR_SERVICE_UNAVAILABLE",
      504: "ERR_GATEWAY_TIMEOUT"
    }[_v0] || "ERR_UNKNOWN";
  }
  _v0.s(["getErrorId", 0, _v107, "parseBoolean", 0, _v0 => {
    try {
      return !!JSON.parse(String(_v0 ?? "false"));
    } catch {
      return !1;
    }
  }, "parseTeamOwnerId", 0, _v0 => {
    let _v1 = Number(_v0);
    return Number.isNaN(_v1) ? null : _v1;
  }], 0);
  let _v108 = async (_v0, _v1) => {
    let _v2 = await fetch("/manage/videos?action=SWITCH_TEAMS", {
      body: JSON.stringify({
        team_owner_id: _v0,
        token: _v1
      }),
      method: "POST",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json"
      }
    });
    if (!_v2.ok) throw Error("A network error occurred");
    return await _v2.json();
  };
  var _v109 = _v0.i(0);
  let _v110 = (_v0, _v1) => {
      _v109.BigPictureClient.sendEvent(new _v109.Event("vimeo.autoarchive_folder_selected", 1, {
        product: "vimeo_auto-archive",
        location: "auto-archive folder selection",
        path: window.location.pathname,
        user_id: _v0,
        folder_id: _v1
      }));
    },
    _v111 = ({
      appId: _v0,
      config: _v1,
      viewer: _v2,
      isSettingsPage: _v3,
      msTeamsParams: _v4,
      isMsTeamsApp: _v5 = !1
    }) => {
      let _v6 = _v2.user?.id,
        _v7 = (0, _v7.useRouter)(),
        {
          teamOwnerId: _v8 = null,
          adminOnboarding: _v9 = !1,
          msTeamsEncryptedTeamId: _v10 = "",
          msTeamsEncryptedTeamUserId: _v11 = ""
        } = _v4 || {},
        [_v12, _v13] = (0, _v2.useState)(null),
        [_v14, _v15] = (0, _v2.useState)(!1),
        [_v16, _v17] = (0, _v2.useState)(!0),
        [_v18, _v19] = (0, _v2.useState)(),
        [_v20, _v21] = (0, _v2.useState)(!1),
        [_v22, _v23] = (0, _v2.useState)(!0),
        [_v24, _v25] = (0, _v2.useState)(!1),
        _v26 = (0, _v16.useToast)(),
        _v27 = (0, _v28.useGetUser)(() => {
          if (!_v6 || !_v1.clipPreferencePath) return null;
          if (_v5) {
            let _v0 = _v9 ? _v12 : _v8;
            return _v0 ? {
              select: [_v1.clipPreferencePath],
              where: {
                userId: _v0
              }
            } : null;
          }
          return {
            select: [_v1.clipPreferencePath],
            where: {
              userId: _v6
            }
          };
        }),
        _v28 = _v27?.data?.metadata?.connections?.[_v1.clipPreferenceProperty]?.uri,
        _v29 = _v28 ? Number(_v28.split("/")[2]) : null,
        {
          workspaceItems: _v30,
          workspaceLoading: _v31,
          workspaceError: _v32
        } = _v32(_v6, _v5, _v9),
        _v33 = (0, _v2.useMemo)(() => {
          if (!_v30?.length || _v27?.isValidating) return;
          let _v0 = _v30[0],
            _v1 = _v5 ? _v9 ? _v12 : _v8 : _v12 || _v29,
            _v2 = _v30.find(_v0 => _v0.id === _v1);
          return _v2 ? (_v13(_v2?.id), _v2) : _v5 && !_v9 ? (_v13(null), _v2) : (_v13(_v0?.id ?? null), _v0);
        }, [_v5, _v9, _v12, _v8, _v29, _v30, _v27?.isValidating]),
        {
          showNewFolder: _v34,
          newFolderTemplate: _v35
        } = ((_v0, _v1, _v2, _v3) => {
          let {
              data: _v4
            } = (0, _v90.useGetUserFoldersPrivateToMe)(() => _v0 && _v1 !== _v3?.id ? {
              where: {
                ownerId: _v0
              },
              select: ["uri", "name"]
            } : null),
            _v5 = !1;
          _v1 === _v3?.id ? _v5 = !1 : _v4?.uri ? _v5 = !0 : (_v3?.role === "Owner" || _v3?.role === "Admin") && (_v5 = !0);
          let _v6 = (0, _v2.useMemo)(() => _v5 ? _v2(_v4?.uri || "", _v4?.name || "") : null, [_v5, _v2, _v4?.uri, _v4?.name]);
          return {
            showNewFolder: _v5,
            newFolderTemplate: _v6
          };
        })(_v5 ? _v8 : _v12, _v29, _v1?.getNewFolderTemplate, _v33);
      (0, _v2.useEffect)(() => {
        _v5 ? _v29 === _v8 && _v28 && _v19(_v28) : _v28 && _v19(_v28);
      }, [_v29, _v28, _v5, _v8]), (0, _v2.useEffect)(() => {
        _v34 && !_v18 && _v19(_v35?.uri ?? "");
      }, [_v35, _v18, _v34]);
      let _v36 = (0, _v2.useCallback)(_v0 => {
          _v13(_v0), _v19(""), _v17(!1);
        }, [_v13, _v19]),
        _v37 = (0, _v2.useCallback)(async () => {
          if (_v2 && _v12) {
            _v15(!0);
            try {
              _v106.default.chooseTeamForRecordingEvent(_v12, _v105.ONBOARDING_TYPE.ADMIN, _v0, _v16 ? "TRUE" : "FALSE"), await _v23({
                baseUrl: `//${_v2.apiUrl}`,
                headers: {
                  Authorization: `jwt ${_v2.jwt}`,
                  "Content-Type": "application/json"
                },
                variables: {
                  msTeamsEncryptedTeamId: _v10
                },
                where: {
                  userId: _v12
                }
              });
              let _v0 = `/apps/${_v0}/auto-archive/welcome?teamOwnerId=${_v12}`,
                _v1 = _v7.query?.redirect_uri ? String(_v7.query.redirect_uri) : "",
                _v2 = _v1 && (0, _v34.isVimeoRedirectableUrl)(_v1) ? _v1 : _v0;
              await _v108(_v12, _v2.xsrft), window.location.href = _v2;
            } catch (_v0) {
              _v106.default.chooseTeamForRecordingErrorEvent(_v12, _v105.ONBOARDING_TYPE.ADMIN, _v0, _v0.message, _v107(_v0.status)), _v21(!0), setTimeout(() => _v21(!1), 0);
            } finally {
              _v15(!1);
            }
          }
        }, [_v0, _v16, _v10, _v7.query?.redirect_uri, _v12, _v2, _v21]),
        _v38 = (0, _v2.useCallback)(async () => {
          if (!_v18 || !_v8 || !_v2 || !_v6) return;
          _v15(!0);
          let _v0 = (0, _v20.getProjectId)({
            uri: _v18
          });
          try {
            if (_v106.default.chooseFolderForRecordingEvent(_v8, _v105.ONBOARDING_TYPE.USER, _v0, _v22 ? "TRUE" : "FALSE"), _v18 === _v35?.uri) {
              let _v0 = await (0, _v27.postUserProjects)({
                baseUrl: `//${_v2.apiUrl}`,
                headers: {
                  Authorization: `jwt ${_v2.jwt}`,
                  "Content-Type": "application/json"
                },
                where: {
                  userId: _v8
                },
                select: ["uri"],
                variables: {
                  name: _v35?.folderName,
                  parentFolderUri: _v35?.metadata?.connections?.ancestorPath[0]?.uri
                }
              });
              _v0 = (0, _v20.getProjectId)(_v0);
            }
            if (!_v0) return;
            if (_v110(_v6, _v0), _v3) await fetch("/settings?action=upload_defaults", {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify({
                token: _v2.xsrft,
                clip_ms_teams_upload_folder: _v0
              })
            }), _v26({
              title: (0, _v29.translate)({
                singular: "Folder preference updated",
                dictionary: {
                  es: {
                    singular: "Preferencia de carpeta actualizada"
                  },
                  "de-DE": {
                    singular: "Ordnerpräferenz aktualisiert"
                  },
                  "fr-FR": {
                    singular: "Préférences du dossier mises à jour"
                  },
                  "ja-JP": {
                    singular: "フォルダー設定が更新されました"
                  },
                  "ko-KR": {
                    singular: "폴더 기본 설정 업데이트 완료"
                  },
                  "pt-BR": {
                    singular: "A preferência da pasta foi atualizada"
                  },
                  "zh-CN": {
                    singular: "文件夹偏好设置已更新"
                  }
                }
              }),
              icon: (0, _v1.jsx)(_v18.CircleCheckFilled, {}),
              variant: "success"
            });else {
              await _v24({
                baseUrl: `//${_v2.apiUrl}`,
                headers: {
                  Authorization: `jwt ${_v2.jwt}`,
                  "Content-Type": "application/json"
                },
                variables: {
                  msTeamsEncryptedTeamUserId: _v11,
                  folderId: _v0
                },
                where: {
                  userId: _v8
                }
              }), await _v25({
                baseUrl: `//${_v2.apiUrl}`,
                headers: {
                  Authorization: `jwt ${_v2.jwt}`,
                  "Content-Type": "application/json"
                },
                variables: {
                  msTeamsEncryptedTeamUserId: _v11,
                  uploadPrivacy: {
                    privacy: "_not_set"
                  }
                },
                where: {
                  userId: _v8
                }
              });
              let _v0 = `/apps/${_v0}/auto-archive/privacy?ms_teams_encrypted_team_user_id=${_v11}&team_owner_id=${_v12}`,
                _v1 = _v7.query?.redirect_uri ? String(_v7.query.redirect_uri) : "",
                _v2 = _v1 && (0, _v34.isVimeoRedirectableUrl)(_v1) ? _v1 : _v0;
              await _v108(_v8, _v2.xsrft), window.location.href = _v2;
            }
          } catch (_v0) {
            _v106.default.chooseFolderForRecordingErrorEvent(_v8, _v105.ONBOARDING_TYPE.USER, _v0, _v0.message, _v107(_v0.status)), _v21(!0), setTimeout(() => _v21(!1), 0);
          } finally {
            _v15(!1);
          }
        }, [_v18, _v8, _v2, _v6, _v0, _v22, _v35?.uri, _v35?.folderName, _v35?.metadata?.connections?.ancestorPath, _v3, _v26, _v11, _v7.query?.redirect_uri, _v12]),
        _v39 = (0, _v2.useCallback)(async () => {
          if (!_v18 || !_v12 || !_v2 || !_v6) return;
          _v15(!0);
          let _v0 = (0, _v20.getProjectId)({
            uri: _v18
          });
          if (_v18 != _v28) try {
            if (_v18 === _v35?.uri) {
              let _v0 = await (0, _v27.postUserProjects)({
                baseUrl: `//${_v2.apiUrl}`,
                headers: {
                  Authorization: `jwt ${_v2.jwt}`,
                  "Content-Type": "application/json"
                },
                where: {
                  userId: _v12
                },
                select: ["uri"],
                variables: {
                  name: _v35?.folderName,
                  parentFolderUri: _v35?.metadata?.connections?.ancestorPath[0]?.uri
                }
              });
              _v0 = (0, _v20.getProjectId)(_v0);
            }
            if (!_v0) return;
            await (0, _v26.patchUser)({
              baseUrl: `//${_v2.apiUrl}`,
              headers: {
                Authorization: `jwt ${_v2.jwt}`,
                "Content-Type": "application/json"
              },
              where: {
                userId: _v6
              },
              select: ["metadata"],
              variables: {
                [_v1.clipPreferenceDBProperty]: _v0
              }
            });
          } catch (_v0) {
            _v21(!0), setTimeout(() => _v21(!1), 0);
          }
          if (!_v3) try {
            await (0, _v26.patchUser)({
              baseUrl: `//${_v2.apiUrl}`,
              headers: {
                Authorization: `jwt ${_v2.jwt}`,
                "Content-Type": "application/json"
              },
              where: {
                userId: _v6
              },
              select: ["metadata"],
              variables: {
                [_v1.privacyPreferenceDBProperty]: {
                  privacy: "_not_set"
                }
              }
            });
          } catch (_v0) {
            _v21(!0), setTimeout(() => _v21(!1), 0);
          }
          if (_v15(!1), _v0) {
            if (_v110(_v6, _v0), _v3) return void _v26({
              title: (0, _v29.translate)({
                singular: "Folder preference updated",
                dictionary: {
                  es: {
                    singular: "Preferencia de carpeta actualizada"
                  },
                  "de-DE": {
                    singular: "Ordnerpräferenz aktualisiert"
                  },
                  "fr-FR": {
                    singular: "Préférences du dossier mises à jour"
                  },
                  "ja-JP": {
                    singular: "フォルダー設定が更新されました"
                  },
                  "ko-KR": {
                    singular: "폴더 기본 설정 업데이트 완료"
                  },
                  "pt-BR": {
                    singular: "A preferência da pasta foi atualizada"
                  },
                  "zh-CN": {
                    singular: "文件夹偏好设置已更新"
                  }
                }
              }),
              icon: (0, _v1.jsx)(_v18.CircleCheckFilled, {}),
              variant: "success"
            });
            let _v0 = `/apps/${_v0}/auto-archive/privacy`,
              _v1 = _v7.query?.redirect_uri ? String(_v7.query.redirect_uri) : "";
            _v1 && (0, _v34.isVimeoRedirectableUrl)(_v1) ? _v0 = _v1 : [_v105.PARTNER_APP_ID.DropboxProduction, _v105.PARTNER_APP_ID.DropboxDevelopment].includes(_v0) && (_v0 = `/apps/${_v0}/auto-archive/welcome?folderId=${_v0}`), window.location.href = _v0;
          }
        }, [_v18, _v12, _v2, _v6, _v28, _v35?.uri, _v35?.folderName, _v35?.metadata?.connections?.ancestorPath, _v1.clipPreferenceDBProperty, _v3, _v0, _v7.query?.redirect_uri, _v21]);
      if (_v32) return (0, _v1.jsx)(_v6.ErrorPage, {
        error: new _v4.ResourceNotFoundError(),
        shouldShowSearch: !1
      });
      if (_v31 || !_v30) return _v3 ? (0, _v1.jsx)(_v3.Spinner, {
        size: "sm"
      }) : (0, _v1.jsx)(_v35.LoadingPage, {});
      if (!_v31 && 0 === _v30.length) return (0, _v1.jsx)(_v6.ErrorPage, {
        error: new _v4.UnauthorizedError(),
        shouldShowSearch: !1
      });
      if (_v5) {
        if (_v3) {
          if (!_v8) return (0, _v1.jsx)(_v1.Fragment, {});
        } else if (_v9 && !_v10) return (0, _v1.jsx)(_v6.ErrorPage, {
          error: new _v4.ResourceNotFoundError("Missing msTeamsEncryptedTeamId"),
          shouldShowSearch: !1
        });else if (!_v9 && !_v3 && (!_v11 || !_v8)) return (0, _v1.jsx)(_v6.ErrorPage, {
          error: new _v4.ResourceNotFoundError("Missing msTeamsEncryptedTeamUserId"),
          shouldShowSearch: !1
        });
      }
      let _v40 = _v33?.id || _v8 || _v6 || 0;
      return _v33 ? (0, _v1.jsx)(_v10.Flex, {
        alignItems: _v3 ? void 0 : "center",
        justifyContent: _v3 ? void 0 : "center",
        height: _v3 ? "auto" : "90vh",
        backgroundColor: "",
        width: "100%",
        children: (0, _v1.jsxs)(_v9.Card, {
          padding: _v3 ? "sm" : "xl",
          width: _v3 ? "100%" : (0, _v15.rem)(420),
          boxShadow: "lg",
          minHeight: _v3 ? void 0 : _v5 ? (0, _v15.rem)(420) : (0, _v15.rem)(484),
          children: [!_v3 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsxs)(_v10.Flex, {
              alignItems: "center",
              justifyContent: "center",
              gap: "md",
              mb: "xl",
              children: [_v1.logo, (0, _v1.jsx)(_v17.ArrowsIntegration, {
                boxSize: "xs"
              }), (0, _v1.jsx)(_v19.VimeoV, {
                boxSize: "sm"
              })]
            }), (0, _v1.jsx)(_v11.Header, {
              size: "md",
              textAlign: "center",
              mb: "3",
              color: "text-primary",
              children: _v1.getHeaderText(_v9)
            }), (0, _v1.jsx)(_v12.Paragraph, {
              size: "lg",
              color: "text-secondary",
              mb: "lg",
              textAlign: "center",
              children: _v1.getSubHeaderText(_v9)
            })]
          }), (0, _v1.jsxs)(_v10.Flex, {
            mb: "md",
            gap: "md",
            flexDirection: _v3 ? "row" : "column",
            alignItems: _v3 ? "start" : "center",
            flexWrap: _v3 ? {
              base: "wrap",
              sm: "nowrap"
            } : "wrap",
            children: [(!_v5 || _v5 && _v9) && (0, _v1.jsx)(_v33.TeamListDropdownBokeh, {
              selectedId: _v40,
              items: _v30,
              selectItem: _v0 => {
                _v36(_v0), _v25(!0);
              },
              dropdownWidth: 356
            }), (!_v5 || _v5 && !_v9) && (0, _v1.jsx)(_v103, {
              selectedFolderUri: _v18,
              selectedTeam: _v40,
              onSelect: _v0 => {
                _v0 && (_v19(_v0.uri ?? ""), _v23(!1)), _v25(!0);
              },
              isLoading: _v5 ? !_v33 : !_v40,
              defaultFolder: _v35,
              shouldUseDefaultFolder: _v34,
              isSettingsPage: _v3
            })]
          }), _v20 && (0, _v1.jsx)(_v13.Alert, {
            status: "error",
            mb: "md",
            children: (0, _v1.jsx)(_v14.AlertDescription, {
              children: _v5 ? _v9 ? (0, _v29.translate)({
                singular: "Unable to connect to this team. Try again or select another team.",
                dictionary: {
                  es: {
                    singular: "No se puede conectar a este equipo. Inténtelo de nuevo o seleccione otro."
                  },
                  "de-DE": {
                    singular: "Mit diesem Team kann keine Verbindung hergestellt werden. Versuchen Sie es erneut oder wählen Sie ein anderes Team aus."
                  },
                  "fr-FR": {
                    singular: "Impossible de se connecter à cette équipe. Veuillez réessayer ou sélectionner une autre équipe."
                  },
                  "ja-JP": {
                    singular: "このチームに接続できません。もう一度試すか、別のチームを選択してください。"
                  },
                  "ko-KR": {
                    singular: "이 팀에 연결할 수 없습니다. 다시 시도하거나 다른 팀을 선택하세요."
                  },
                  "pt-BR": {
                    singular: "Não foi possível conectar a equipe. Tente novamente ou selecione outra equipe."
                  },
                  "zh-CN": {
                    singular: "无法连接到该团队。请再次尝试或选择其他团队。"
                  }
                }
              }) : _v12 ? (0, _v29.translate)({
                singular: "Unable to select this folder. Try again or select another folder.",
                dictionary: {
                  es: {
                    singular: "No se puede seleccionar esta carpeta. Inténtelo de nuevo o seleccione otra carpeta."
                  },
                  "de-DE": {
                    singular: "Dieser Ordner kann nicht ausgewählt werden. Versuchen Sie es erneut oder wählen Sie einen anderen Ordner aus."
                  },
                  "fr-FR": {
                    singular: "Impossible de sélectionner ce dossier. Veuillez réessayer ou sélectionner un autre dossier."
                  },
                  "ja-JP": {
                    singular: "このフォルダーは選択できません。もう一度試すか、別のフォルダーを選択してください。"
                  },
                  "ko-KR": {
                    singular: "이 폴더를 선택할 수 없습니다. 다시 시도하거나 다른 폴더를 선택하세요."
                  },
                  "pt-BR": {
                    singular: "Não é possível selecionar essa pasta. Tente novamente ou selecione outra pasta."
                  },
                  "zh-CN": {
                    singular: "无法选择此文件夹。请再次尝试或选择其他文件夹。"
                  }
                }
              }) : (0, _v29.translate)({
                singular: "Invalid team Owner id.",
                dictionary: {
                  es: {
                    singular: "ID de propietario del equipo no válido."
                  },
                  "de-DE": {
                    singular: "Ungültige Teambesitzer-ID."
                  },
                  "fr-FR": {
                    singular: "L'identifiant du propriétaire de l'équipe n'est pas valide."
                  },
                  "ja-JP": {
                    singular: "無効なチーム所有者IDです。"
                  },
                  "ko-KR": {
                    singular: "팀 소유자 ID가 유효하지 않습니다."
                  },
                  "pt-BR": {
                    singular: "O ID do proprietário da equipe é inválido."
                  },
                  "zh-CN": {
                    singular: "团队所有者 ID 无效。"
                  }
                }
              }) : (0, _v29.translate)({
                singular: "We couldn’t load your {APP_NAME} folders. Please refresh the page or try again.",
                replacements: {
                  APP_NAME: _v1?.name
                },
                dictionary: {
                  es: {
                    singular: "No pudimos cargar sus carpetas {APP_NAME}. Actualice la página o vuelva a intentarlo."
                  },
                  "de-DE": {
                    singular: "Wir konnten Ihre {APP_NAME}-Ordner nicht laden. Bitte aktualisieren Sie die Seite oder versuchen Sie es erneut."
                  },
                  "fr-FR": {
                    singular: "Nous n'avons pas pu charger vos dossiers {APP_NAME}. Veuillez actualiser la page ou essayer à nouveau."
                  },
                  "ja-JP": {
                    singular: "「{APP_NAME}」フォルダーを読み込むことができませんでした。ページを更新するか、再度お試しください。"
                  },
                  "ko-KR": {
                    singular: "{APP_NAME} 폴더를 로드할 수 없습니다. 페이지를 새로 고치거나 다시 시도해 주세요."
                  },
                  "pt-BR": {
                    singular: "Não foi possível carregar as suas pastas do {APP_NAME}. Atualize a página e tente novamente."
                  },
                  "zh-CN": {
                    singular: "无法加载您的 {APP_NAME} 文件夹。请刷新页面或重试。"
                  }
                }
              })
            })
          }), (0, _v1.jsxs)(_v10.Flex, {
            gap: "sm",
            justifyContent: "center",
            flexDirection: "column",
            children: [(0, _v1.jsx)(_v8.Button, {
              hidden: !!_v3 && !_v24,
              variant: "primary",
              width: _v3 ? "fit-content" : "100%",
              marginLeft: "auto",
              isDisabled: _v5 ? _v9 ? !_v12 : !_v18 || !_v8 : !_v18 || _v14,
              onClick: async () => {
                let _v0 = _v5 ? _v9 ? _v37 : _v38 : _v39;
                await _v0(), _v25(!1);
              },
              isLoading: _v14,
              children: _v3 ? (0, _v29.translate)({
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
              }) : (0, _v29.translate)({
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
            }), !_v3 && (0, _v1.jsx)(_v8.Button, {
              variant: "tertiary",
              as: "a",
              href: "/settings/apps",
              width: "100%",
              children: (0, _v29.translate)({
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
              })
            })]
          })]
        })
      }) : _v3 ? (0, _v1.jsx)(_v3.Spinner, {
        size: "sm"
      }) : (0, _v1.jsx)(_v35.LoadingPage, {});
    };
  var _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0);
  let _v115 = (_v0, _v1, _v2, _v3) => ({
      isPrivateToUser: !0,
      uri: "new/1",
      metadata: {
        connections: {
          ancestorPath: _v2 ? [{
            uri: _v2,
            name: _v3,
            canUpload: !0
          }] : [],
          folders: {
            total: 0,
            uri: "uri"
          },
          parentFolder: {
            uri: _v2
          }
        },
        interactions: {
          edit: {},
          addSubfolder: {}
        }
      },
      privacy: {},
      name: _v0,
      folderName: _v1
    }),
    _v116 = {
      name: "Webex",
      logo: (0, _v1.jsx)(_v114.Webex, {
        boxSize: "md"
      }),
      supportSettingsPage: !0,
      clipPreferencePath: "metadata.connections.webexUploadFolder",
      clipPreferenceProperty: "webexUploadFolder",
      privacyPreferencePath: "metadata.connections.webexUploadPrivacy",
      privacyPreferenceProperty: "webexUploadPrivacy",
      clipPreferenceDBProperty: "clip_webex_upload_folder",
      privacyPreferenceDBProperty: "clip_webex_upload_privacy",
      getHeaderText: () => (0, _v29.translate)({
        singular: "Choose a default folder for your Webex recordings",
        dictionary: {
          es: {
            singular: "Elija una carpeta predeterminada para sus grabaciones de Webex"
          },
          "de-DE": {
            singular: "Standardordner für Ihre Webex-Aufzeichnungen wählen"
          },
          "fr-FR": {
            singular: "Choisissez un dossier par défaut pour vos enregistrements Webex"
          },
          "ja-JP": {
            singular: "Webexの録画用にデフォルトのフォルダーを選択"
          },
          "ko-KR": {
            singular: "Webex 녹화 파일의 기본 폴더를 선택하세요."
          },
          "pt-BR": {
            singular: "Escolha uma pasta padrão para suas gravações do Webex"
          },
          "zh-CN": {
            singular: "为您的 Webex 录制内容选择默认文件夹"
          }
        }
      }),
      getPrivacyHeaderText: () => (0, _v29.translate)({
        singular: "Set the default privacy for your Webex recordings",
        dictionary: {
          es: {
            singular: "Establezca la configuración de privacidad predeterminada para sus grabaciones de Webex"
          },
          "de-DE": {
            singular: "Standard-Datenschutzeinstellungen für Ihre Webex-Aufnahmen festlegen"
          },
          "fr-FR": {
            singular: "Définissez la confidentialité par défaut de vos enregistrements Webex"
          },
          "ja-JP": {
            singular: "Webex録画のデフォルトのプライバシーを設定"
          },
          "ko-KR": {
            singular: "Webex 녹화의 기본 개인정보 보호 설정을 지정하세요."
          },
          "pt-BR": {
            singular: "Defina a privacidade padrão para as suas gravações do Webex"
          },
          "zh-CN": {
            singular: "为您的 Webex 录制内容设置默认隐私"
          }
        }
      }),
      getSubHeaderText: () => (0, _v29.translate)({
        singular: "You can change the default folder in the Manage tab of your Webex integration page",
        dictionary: {
          es: {
            singular: "Puede cambiar la carpeta predeterminada en la pestaña Administrar de la página de integración de Webex."
          },
          "de-DE": {
            singular: "Sie können den Standardordner auf der Registerkarte „Verwalten“ Ihrer Webex-Integrationsseite ändern."
          },
          "fr-FR": {
            singular: "Vous pouvez modifier le dossier par défaut dans l'onglet « Gérer » de votre page d'intégration Webex."
          },
          "ja-JP": {
            singular: "Webex連携ページの「管理」タブで、デフォルトのフォルダーを変更できます。"
          },
          "ko-KR": {
            singular: "Webex 통합 페이지의 관리 탭에서 기본 폴더를 변경할 수 있습니다."
          },
          "pt-BR": {
            singular: "Você pode alterar a pasta padrão na aba Gerenciar da página de integração do Webex"
          },
          "zh-CN": {
            singular: "您可以在 Webex 集成页面的“管理”选项卡中更改默认文件夹"
          }
        }
      }),
      getPrivacySubHeaderText: () => (0, _v29.translate)({
        singular: "You can change the default privacy in the Manage tab of your Webex integration page",
        dictionary: {
          es: {
            singular: "Puede cambiar la configuración de privacidad predeterminada en la pestaña Administrar en la página de integración de Webex."
          },
          "de-DE": {
            singular: "Sie können die standardmäßigen Datenschutzeinstellungen auf der Registerkarte „Verwalten“ Ihrer Webex-Integrationsseite ändern."
          },
          "fr-FR": {
            singular: "Vous pouvez modifier la confidentialité par défaut dans l'onglet Gérer de votre page d'intégration Webex."
          },
          "ja-JP": {
            singular: "Webex連携ページの「管理」タブで、デフォルトのプライバシー設定を変更できます。"
          },
          "ko-KR": {
            singular: "Webex 통합 페이지의 관리 탭에서 기본 개인정보 보호 설정을 변경할 수 있습니다."
          },
          "pt-BR": {
            singular: "Você pode alterar a privacidade padrão na aba Gerenciar da página de integração do Webex"
          },
          "zh-CN": {
            singular: "您可以在 Webex 集成页面的“管理”选项卡中更改默认隐私设置。"
          }
        }
      }),
      getNewFolderTemplate: (_v0, _v1) => _v115((0, _v29.translate)({
        singular: "Webex Recordings (new)",
        dictionary: {
          es: {
            singular: "Grabaciones de Webex (nuevo)"
          },
          "de-DE": {
            singular: "Webex-Aufnahmen (neu)"
          },
          "fr-FR": {
            singular: "Enregistrements Webex (nouveau)"
          },
          "ja-JP": {
            singular: "Webex録画（新規）"
          },
          "ko-KR": {
            singular: "Webex 녹화본(신규)"
          },
          "pt-BR": {
            singular: "Gravações do Webex (novas)"
          },
          "zh-CN": {
            singular: "Webex 录制文件（新）"
          }
        }
      }), (0, _v29.translate)({
        singular: "Webex Recordings",
        dictionary: {
          es: {
            singular: "Grabaciones de Webex"
          },
          "de-DE": {
            singular: "Webex-Aufnahmen"
          },
          "fr-FR": {
            singular: "Enregistrements Webex"
          },
          "ja-JP": {
            singular: "Webex録画"
          },
          "ko-KR": {
            singular: "Webex 녹화본"
          },
          "pt-BR": {
            singular: "Gravações do Webex"
          },
          "zh-CN": {
            singular: "Webex 录制内容"
          }
        }
      }), _v0, _v1)
    },
    _v117 = {
      name: "Zoom",
      logo: (0, _v1.jsx)(() => (0, _v1.jsxs)("svg", {
        width: "35",
        height: "35",
        viewBox: "0 0 35 35",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, _v1.jsx)("rect", {
          width: "35",
          height: "35",
          rx: "3",
          fill: "#2D8CFF"
        }), (0, _v1.jsxs)("g", {
          clipPath: "url(#clip0)",
          children: [(0, _v1.jsx)("path", {
            d: "M15.4175 23.9919C13.451 23.9919 11.4839 23.9931 9.51746 23.9919C7.48534 23.9907 6.00026 22.4394 5.99969 20.3177C5.99854 17.4892 5.99911 14.6608 5.99969 11.8324C5.99969 11.2121 6.19547 11.0087 6.79261 11.0087C10.8119 11.0081 14.8318 11.0291 18.8517 10.9991C20.7894 10.9847 22.4075 12.6428 22.3776 14.683C22.3355 17.5204 22.3672 20.3596 22.3666 23.1983C22.3666 23.7814 22.1651 23.9919 21.606 23.9919C19.5427 23.9925 17.4801 23.9919 15.4175 23.9919Z",
            fill: "#FDFEFE"
          }), (0, _v1.jsx)("path", {
            d: "M28.9959 17.5008C28.9959 19.43 28.997 21.3592 28.9941 23.2885C28.9935 23.5326 29.0529 23.829 28.7914 23.9603C28.5398 24.0869 28.3377 23.8853 28.1448 23.7384C26.548 22.526 24.9541 21.3095 23.3538 20.1025C23.2029 19.9885 23.1517 19.8709 23.1529 19.682C23.1598 18.2327 23.1598 16.7834 23.1529 15.3335C23.1517 15.1445 23.2035 15.0275 23.3544 14.9135C24.9546 13.7066 26.5486 12.49 28.1453 11.2777C28.3359 11.1325 28.5294 10.9099 28.7851 11.0425C29.0546 11.1823 28.9935 11.4888 28.9941 11.7426C28.997 13.6622 28.9959 15.5818 28.9959 17.5008Z",
            fill: "#FDFDFE"
          })]
        }), (0, _v1.jsx)("defs", {
          children: (0, _v1.jsx)("clipPath", {
            id: "clip0",
            children: (0, _v1.jsx)("rect", {
              width: "23",
              height: "13",
              fill: "white",
              transform: "translate(6 11)"
            })
          })
        })]
      }), {}),
      supportSettingsPage: !0,
      clipPreferencePath: "metadata.connections.zoomUploadFolder",
      clipPreferenceProperty: "zoomUploadFolder",
      privacyPreferencePath: "metadata.connections.zoomUploadPrivacy",
      privacyPreferenceProperty: "zoomUploadPrivacy",
      clipPreferenceDBProperty: "clip_zoom_upload_folder",
      privacyPreferenceDBProperty: "clip_zoom_upload_privacy",
      getHeaderText: () => (0, _v29.translate)({
        singular: "Choose a default folder for your Zoom recordings",
        dictionary: {
          es: {
            singular: "Elija una carpeta predeterminada para sus grabaciones de Zoom"
          },
          "de-DE": {
            singular: "Wählen Sie einen Standardordner für Ihre Zoom-Aufzeichnungen."
          },
          "fr-FR": {
            singular: "Choisissez un dossier par défaut pour vos enregistrements Zoom"
          },
          "ja-JP": {
            singular: "Zoomの録画用にデフォルトのフォルダーを選択"
          },
          "ko-KR": {
            singular: "Zoom 녹화 파일의 기본 폴더를 선택하세요."
          },
          "pt-BR": {
            singular: "Escolha uma pasta padrão para suas gravações do Zoom"
          },
          "zh-CN": {
            singular: "为您的 Zoom 录制内容选择默认文件夹"
          }
        }
      }),
      getPrivacyHeaderText: () => (0, _v29.translate)({
        singular: "Set the default privacy for your Zoom recordings",
        dictionary: {
          es: {
            singular: "Establezca la configuración de privacidad predeterminada para sus grabaciones de Zoom"
          },
          "de-DE": {
            singular: "Standard-Datenschutzeinstellungen für Ihre Zoom-Aufnahmen festlegen"
          },
          "fr-FR": {
            singular: "Définissez la confidentialité par défaut de vos enregistrements Zoom"
          },
          "ja-JP": {
            singular: "Zoom録画のデフォルトのプライバシーを設定"
          },
          "ko-KR": {
            singular: "Zoom 녹화의 기본 개인정보 보호 설정을 지정하세요."
          },
          "pt-BR": {
            singular: "Defina a privacidade padrão para as suas gravações do Zoom"
          },
          "zh-CN": {
            singular: "设置 Zoom 录制的默认隐私设置"
          }
        }
      }),
      getSubHeaderText: () => (0, _v29.translate)({
        singular: "You can change the default folder in the Manage tab of your Zoom integration page",
        dictionary: {
          es: {
            singular: "Puede cambiar la carpeta predeterminada en la pestaña Administrar en la página de integración de Zoom."
          },
          "de-DE": {
            singular: "Sie können den Standardordner auf der Registerkarte „Verwalten“ Ihrer Zoom-Integrationsseite ändern."
          },
          "fr-FR": {
            singular: "Vous pouvez modifier le dossier par défaut dans l'onglet « Gérer » de votre page d'intégration Zoom."
          },
          "ja-JP": {
            singular: "Zoom連携ページの「管理」タブで、デフォルトのフォルダーを変更できます。"
          },
          "ko-KR": {
            singular: "Zoom 통합 페이지의 관리 탭에서 기본 폴더를 변경할 수 있습니다."
          },
          "pt-BR": {
            singular: "Você pode alterar a pasta padrão na aba Gerenciar da página de integração do Zoom"
          },
          "zh-CN": {
            singular: "您可以在 Zoom 集成页面的“管理”选项卡中更改默认文件夹。"
          }
        }
      }),
      getPrivacySubHeaderText: () => (0, _v29.translate)({
        singular: "You can change the default privacy in the Manage tab of your Zoom integration page",
        dictionary: {
          es: {
            singular: "Puede cambiar la configuración de privacidad predeterminada en la pestaña Administrar en la página de integración de Zoom."
          },
          "de-DE": {
            singular: "Sie können die standardmäßigen Datenschutzeinstellungen auf der Registerkarte „Verwalten“ Ihrer Zoom-Integrationsseite ändern."
          },
          "fr-FR": {
            singular: "Vous pouvez modifier la confidentialité par défaut dans l'onglet Gérer de votre page d'intégration Zoom."
          },
          "ja-JP": {
            singular: "Zoom連携ページの「管理」タブで、デフォルトのプライバシー設定を変更できます。"
          },
          "ko-KR": {
            singular: "Zoom 통합 페이지의 관리 탭에서 기본 개인정보 보호 설정을 변경할 수 있습니다."
          },
          "pt-BR": {
            singular: "Você pode alterar a privacidade padrão na aba Gerenciar da página de integração do Zoom"
          },
          "zh-CN": {
            singular: "您可以在 Zoom 集成页面的“管理”选项卡中更改默认隐私设置。"
          }
        }
      }),
      getNewFolderTemplate: (_v0, _v1) => _v115((0, _v29.translate)({
        singular: "Zoom Recordings (new)",
        dictionary: {
          es: {
            singular: "Grabaciones de Zoom (nuevo)"
          },
          "de-DE": {
            singular: "Zoom-Aufnahmen (neu)"
          },
          "fr-FR": {
            singular: "Enregistrements Zoom (nouveau)"
          },
          "ja-JP": {
            singular: "Zoom 録画（新規）"
          },
          "ko-KR": {
            singular: "Zoom 녹화본(신규)"
          },
          "pt-BR": {
            singular: "Gravações do Zoom (novas)"
          },
          "zh-CN": {
            singular: "Zoom 录像（新）"
          }
        }
      }), (0, _v29.translate)({
        singular: "Zoom Recordings",
        dictionary: {
          es: {
            singular: "Grabaciones de Zoom"
          },
          "de-DE": {
            singular: "Zoom-Aufnahmen"
          },
          "fr-FR": {
            singular: "Enregistrements Zoom"
          },
          "ja-JP": {
            singular: "Zoom 録画"
          },
          "ko-KR": {
            singular: "Zoom 녹화본"
          },
          "pt-BR": {
            singular: "Gravações do Zoom"
          },
          "zh-CN": {
            singular: "Zoom 录像"
          }
        }
      }), _v0, _v1)
    },
    _v118 = {
      name: "MS Team",
      logo: (0, _v1.jsx)(_v0 => (0, _v1.jsxs)(_v113.Icon, {
        viewBox: "0 0 24 24",
        ..._v0,
        fill: "none",
        children: [(0, _v1.jsx)("path", {
          d: "M15.9502 9.75H21.1163C21.6044 9.75 22 10.1328 22 10.605V15.1576C22 16.8931 20.5459 18.3 18.7521 18.3H18.7367C16.943 18.3002 15.4886 16.8936 15.4884 15.1581C15.4884 15.1579 15.4884 15.1578 15.4884 15.1576V10.1969C15.4884 9.95006 15.6952 9.75 15.9502 9.75Z",
          fill: "#5059C9"
        }), (0, _v1.jsx)("path", {
          d: "M19.4419 8.85005C20.5978 8.85005 21.5349 7.94343 21.5349 6.82505C21.5349 5.70667 20.5978 4.80005 19.4419 4.80005C18.2859 4.80005 17.3488 5.70667 17.3488 6.82505C17.3488 7.94343 18.2859 8.85005 19.4419 8.85005Z",
          fill: "#5059C9"
        }), (0, _v1.jsx)("path", {
          d: "M12.9302 8.85001C14.5999 8.85001 15.9535 7.54044 15.9535 5.925C15.9535 4.30957 14.5999 3 12.9302 3C11.2605 3 9.90697 4.30957 9.90697 5.925C9.90697 7.54044 11.2605 8.85001 12.9302 8.85001Z",
          fill: "#7B83EB"
        }), (0, _v1.jsx)("path", {
          d: "M16.9614 9.75H8.43394C7.95169 9.76155 7.5702 10.1488 7.58139 10.6154V15.8079C7.51404 18.6079 9.80369 20.9315 12.6977 21C15.5917 20.9315 17.8813 18.6079 17.814 15.8079V10.6154C17.8251 10.1488 17.4436 9.76155 16.9614 9.75Z",
          fill: "#7B83EB"
        }), (0, _v1.jsx)("path", {
          opacity: "0.1",
          d: "M13.1628 9.75V17.0265C13.1605 17.3602 12.9515 17.66 12.6326 17.787C12.531 17.8286 12.4219 17.85 12.3116 17.85H7.99069C7.93023 17.7015 7.87442 17.553 7.8279 17.4C7.66509 16.8836 7.58201 16.3469 7.58139 15.807V10.614C7.57021 10.1482 7.95107 9.76155 8.43255 9.75H13.1628Z",
          fill: "black"
        }), (0, _v1.jsx)("path", {
          opacity: "0.2",
          d: "M12.6977 9.75V17.4765C12.6977 17.5832 12.6755 17.6888 12.6326 17.787C12.5012 18.0956 12.1914 18.2978 11.8465 18.3H8.2093C8.13023 18.1515 8.05581 18.003 7.99069 17.85C7.92557 17.697 7.87442 17.553 7.8279 17.4C7.66509 16.8837 7.58201 16.3469 7.58139 15.807V10.614C7.57021 10.1482 7.95107 9.76155 8.43255 9.75H12.6977Z",
          fill: "black"
        }), (0, _v1.jsx)("path", {
          opacity: "0.2",
          d: "M12.6977 9.75V16.5765C12.6941 17.0299 12.3151 17.3966 11.8465 17.4H7.82792C7.6651 16.8837 7.58203 16.3469 7.5814 15.807V10.614C7.57022 10.1482 7.95108 9.76155 8.43256 9.75H12.6977Z",
          fill: "black"
        }), (0, _v1.jsx)("path", {
          opacity: "0.2",
          d: "M12.2326 9.75V16.5765C12.229 17.0299 11.85 17.3966 11.3814 17.4H7.82792C7.6651 16.8837 7.58203 16.3469 7.5814 15.807V10.614C7.57022 10.1482 7.95108 9.76155 8.43256 9.75H12.2326Z",
          fill: "black"
        }), (0, _v1.jsx)("path", {
          opacity: "0.1",
          d: "M13.1628 7.42347V8.84097C13.0837 8.84546 13.0093 8.84997 12.9302 8.84997C12.8512 8.84997 12.7767 8.84547 12.6977 8.84097C12.5407 8.83089 12.385 8.80679 12.2326 8.76897C11.2907 8.55317 10.5126 7.91409 10.1395 7.04997C10.0753 6.90486 10.0255 6.75418 9.99069 6.59998H12.3116C12.781 6.60169 13.161 6.96937 13.1628 7.42347Z",
          fill: "black"
        }), (0, _v1.jsx)("path", {
          opacity: "0.2",
          d: "M12.6977 7.87354V8.84104C12.5407 8.83096 12.385 8.80686 12.2326 8.76905C11.2907 8.55325 10.5126 7.91417 10.1395 7.05005H11.8465C12.3159 7.05177 12.6959 7.41945 12.6977 7.87354Z",
          fill: "black"
        }), (0, _v1.jsx)("path", {
          opacity: "0.2",
          d: "M12.6977 7.87354V8.84104C12.5407 8.83096 12.385 8.80686 12.2326 8.76905C11.2907 8.55325 10.5126 7.91417 10.1395 7.05005H11.8465C12.3159 7.05177 12.6959 7.41945 12.6977 7.87354Z",
          fill: "black"
        }), (0, _v1.jsx)("path", {
          opacity: "0.2",
          d: "M12.2325 7.87355V8.76905C11.2907 8.55325 10.5126 7.91417 10.1395 7.05005H11.3814C11.8507 7.05178 12.2308 7.41946 12.2325 7.87355Z",
          fill: "black"
        }), (0, _v1.jsx)("path", {
          d: "M2.85255 7.05005H11.38C11.8509 7.05005 12.2325 7.41935 12.2325 7.87489V16.1252C12.2325 16.5807 11.8508 16.95 11.38 16.95H2.85255C2.3817 16.95 2 16.5807 2 16.1252V7.87489C2 7.41935 2.38171 7.05005 2.85255 7.05005Z",
          fill: "url(#paint0_linear_2053_297)"
        }), (0, _v1.jsx)("path", {
          d: "M9.36 10.19H7.65534V14.681H6.5693V10.19H4.87256V9.31885H9.36V10.19Z",
          fill: "white"
        }), (0, _v1.jsx)("defs", {
          children: (0, _v1.jsxs)("linearGradient", {
            id: "paint0_linear_2053_297",
            x1: "3.7776",
            y1: "6.40553",
            x2: "10.1295",
            y2: "17.7764",
            gradientUnits: "userSpaceOnUse",
            children: [(0, _v1.jsx)("stop", {
              stopColor: "#5A62C3"
            }), (0, _v1.jsx)("stop", {
              offset: "0.5",
              stopColor: "#4D55BD"
            }), (0, _v1.jsx)("stop", {
              offset: "1",
              stopColor: "#3940AB"
            })]
          })
        })]
      }), {
        boxSize: "md"
      }),
      supportSettingsPage: !0,
      clipPreferencePath: "metadata.connections.msTeamsTeamFolderId",
      clipPreferenceProperty: "msTeamsTeamFolderId",
      privacyPreferencePath: "metadata.connections.msTeamsTeamUploadPrivacy",
      privacyPreferenceProperty: "msTeamsTeamUploadPrivacy",
      clipPreferenceDBProperty: "mtfi",
      privacyPreferenceDBProperty: "mtfii",
      getHeaderText: _v0 => _v0 ? (0, _v29.translate)({
        singular: "Install Microsoft Teams for your team",
        dictionary: {
          es: {
            singular: "Instale Microsoft Teams para su equipo"
          },
          "de-DE": {
            singular: "Installieren Sie Microsoft Teams für Ihr Team"
          },
          "fr-FR": {
            singular: "Installez Microsoft Teams pour votre équipe"
          },
          "ja-JP": {
            singular: "Microsoft Teamsをインストールしてチームで利用しましょう"
          },
          "ko-KR": {
            singular: "팀을 위해 Microsoft Teams를 설치하세요."
          },
          "pt-BR": {
            singular: "Instale o Microsoft Teams para a sua equipe"
          },
          "zh-CN": {
            singular: "为团队安装 Microsoft Teams"
          }
        }
      }) : (0, _v29.translate)({
        singular: "Choose a default folder for your videos",
        dictionary: {
          es: {
            singular: "Elija una carpeta predeterminada para sus videos"
          },
          "de-DE": {
            singular: "Wählen Sie einen Standardordner für Ihre Videos aus"
          },
          "fr-FR": {
            singular: "Choisissez un dossier par défaut pour vos vidéos"
          },
          "ja-JP": {
            singular: "動画のデフォルトのフォルダーを選択してください"
          },
          "ko-KR": {
            singular: "동영상 기본 폴더를 선택하세요."
          },
          "pt-BR": {
            singular: "Escolha uma pasta padrão para os vídeos"
          },
          "zh-CN": {
            singular: "为您的视频选择一个默认文件夹"
          }
        }
      }),
      getPrivacyHeaderText: () => (0, _v29.translate)({
        singular: "Set the default privacy for your Microsoft Teams recordings",
        dictionary: {
          es: {
            singular: "Establezca la configuración de privacidad predeterminada para sus grabaciones de Microsoft Teams"
          },
          "de-DE": {
            singular: "Standard-Datenschutzeinstellungen für Ihre Microsoft Teams-Aufnahmen festlegen"
          },
          "fr-FR": {
            singular: "Définissez la confidentialité par défaut de vos enregistrements Microsoft Teams"
          },
          "ja-JP": {
            singular: "Microsoft Teams録画のデフォルトのプライバシーを設定"
          },
          "ko-KR": {
            singular: "Microsoft Teams 녹화의 기본 개인정보 보호 설정을 지정하세요."
          },
          "pt-BR": {
            singular: "Defina a privacidade padrão para as suas gravações do Microsoft Teams"
          },
          "zh-CN": {
            singular: "为您的 Microsoft Teams 录制内容设置默认隐私"
          }
        }
      }),
      getSubHeaderText: _v0 => _v0 ? (0, _v29.translate)({
        singular: "You can always change which members have access in in the Manage tab of your Microsoft Teams integration page",
        dictionary: {
          es: {
            singular: "Siempre puede cambiar qué miembros tienen acceso en la pestaña Administrar en la página de integración de Microsoft Teams."
          },
          "de-DE": {
            singular: "Sie können auf der Registerkarte Verwalten Ihrer Microsoft Teams-Integrationsseite jederzeit ändern, welche Mitglieder Zugriff haben."
          },
          "fr-FR": {
            singular: "Vous pourrez toujours modifier l'accès des membres dans l'onglet « Gérer » de votre page d'intégration Microsoft Teams."
          },
          "ja-JP": {
            singular: "Microsoft Teams連携ページの「管理」タブで、アクセス権を持つメンバーをいつでも変更できます。"
          },
          "ko-KR": {
            singular: "언제든지 Microsoft Teams 통합 페이지의 관리 탭에서 액세스 권한을 가진 멤버를 변경할 수 있습니다."
          },
          "pt-BR": {
            singular: "Para alterar quais membros têm acesso, basta acessar a aba Gerenciar na página de integração do Microsoft Teams"
          },
          "zh-CN": {
            singular: "您可以随时在 Microsoft Teams 集成页面的“管理”选项卡中更改哪些成员具有访问权限。"
          }
        }
      }) : (0, _v29.translate)({
        singular: "You can change the default folder in the Manage tab of your Microsoft integration page",
        dictionary: {
          es: {
            singular: "Puede cambiar la carpeta predeterminada en la pestaña Administrar de la página de integración de Microsoft."
          },
          "de-DE": {
            singular: "Sie können den Standardordner auf der Registerkarte „Verwalten“ Ihrer Microsoft-Integrationsseite ändern."
          },
          "fr-FR": {
            singular: "Vous pouvez modifier le dossier par défaut dans l'onglet « Gérer » de votre page d'intégration Microsoft."
          },
          "ja-JP": {
            singular: "Microsoft連携ページの「管理」タブで、デフォルトのフォルダーを変更できます。"
          },
          "ko-KR": {
            singular: "Microsoft 통합 페이지의 관리 탭에서 기본 폴더를 변경할 수 있습니다."
          },
          "pt-BR": {
            singular: "Você pode alterar a pasta padrão na aba Gerenciar da página de integração da Microsoft"
          },
          "zh-CN": {
            singular: "您可以在 Microsoft 集成页面的“管理”选项卡中更改默认文件夹。"
          }
        }
      }),
      getPrivacySubHeaderText: () => (0, _v29.translate)({
        singular: "You can change the default privacy in the Manage tab of your Microsoft Teams integration page",
        dictionary: {
          es: {
            singular: "Puede cambiar la configuración de privacidad predeterminada en la pestaña Administrar en la página de integración de Microsoft Teams."
          },
          "de-DE": {
            singular: "Sie können die standardmäßigen Datenschutzeinstellungen auf der Registerkarte „Verwalten“ Ihrer Microsoft Teams-Integrationsseite ändern."
          },
          "fr-FR": {
            singular: "Vous pouvez modifier la confidentialité par défaut dans l’onglet Gérer de votre page d’intégration Microsoft Teams."
          },
          "ja-JP": {
            singular: "Microsoft Teams連携ページの「管理」タブで、デフォルトのプライバシー設定を変更できます。"
          },
          "ko-KR": {
            singular: "Microsoft Teams 통합 페이지의 관리 탭에서 기본 개인정보 보호 설정을 변경할 수 있습니다."
          },
          "pt-BR": {
            singular: "Você pode alterar a privacidade padrão na aba Gerenciar da página de integração do Microsoft Teams"
          },
          "zh-CN": {
            singular: "您可以在 Microsoft Teams 集成页面的“管理”选项卡中更改默认隐私设置。"
          }
        }
      }),
      getNewFolderTemplate: (_v0, _v1) => _v115((0, _v29.translate)({
        singular: "Microsoft Teams Recordings (new)",
        dictionary: {
          es: {
            singular: "Grabaciones de Microsoft Teams (nuevo)"
          },
          "de-DE": {
            singular: "Microsoft Teams-Aufnahmen (neu)"
          },
          "fr-FR": {
            singular: "Enregistrements Microsoft Teams (nouveau)"
          },
          "ja-JP": {
            singular: "Microsoft Teams録画（新規）"
          },
          "ko-KR": {
            singular: "Microsoft Teams 녹화본(신규)"
          },
          "pt-BR": {
            singular: "Gravações do Microsoft Teams (novo)"
          },
          "zh-CN": {
            singular: "Microsoft Teams 录制内容（新）"
          }
        }
      }), (0, _v29.translate)({
        singular: "Microsoft Teams Recordings",
        dictionary: {
          es: {
            singular: "Grabaciones de Microsoft Teams"
          },
          "de-DE": {
            singular: "Microsoft Teams-Aufnahmen"
          },
          "fr-FR": {
            singular: "Enregistrements Microsoft Teams"
          },
          "ja-JP": {
            singular: "Microsoft Teams録画"
          },
          "ko-KR": {
            singular: "Microsoft Teams 녹화본"
          },
          "pt-BR": {
            singular: "Gravações do Microsoft Teams"
          },
          "zh-CN": {
            singular: "Microsoft Teams 录制内容"
          }
        }
      }), _v0, _v1)
    },
    _v119 = {
      name: "Google Meet",
      logo: (0, _v1.jsx)(_v0 => (0, _v1.jsxs)(_v113.Icon, {
        viewBox: "0 0 24 24",
        ..._v0,
        fill: "none",
        children: [(0, _v1.jsxs)("g", {
          clipPath: "url(#a)",
          children: [(0, _v1.jsx)("path", {
            d: "m13.446 12 2.144 2.438 2.884 1.832.503-4.255-.503-4.16-2.939 1.61L13.445 12Z",
            fill: "#00832D"
          }), (0, _v1.jsx)("path", {
            d: "M1 15.875V19.5c0 .829.675 1.5 1.509 1.5h3.645l.755-2.74-.755-2.385-2.501-.75-2.653.75Z",
            fill: "#0066DA"
          }), (0, _v1.jsx)("path", {
            d: "M6.154 3 1 8.125l2.653.75 2.501-.75.742-2.353L6.154 3Z",
            fill: "#E94235"
          }), (0, _v1.jsx)("path", {
            d: "M6.154 8.125H1v7.75h5.154v-7.75Z",
            fill: "#2684FC"
          }), (0, _v1.jsx)("path", {
            d: "m21.768 5.17-3.294 2.685v8.415l3.31 2.698a.755.755 0 0 0 1.219-.593V5.75c0-.634-.74-.981-1.235-.58ZM13.446 12v3.875H6.154V21h10.812c.833 0 1.508-.671 1.508-1.5v-3.23L13.446 12Z",
            fill: "#00AC47"
          }), (0, _v1.jsx)("path", {
            d: "M16.966 3H6.154v5.125h7.292V12l5.028-4.143V4.5c0-.829-.675-1.5-1.508-1.5Z",
            fill: "#FFBA00"
          })]
        }), (0, _v1.jsx)("defs", {
          children: (0, _v1.jsx)("clipPath", {
            id: "a",
            children: (0, _v1.jsx)("path", {
              fill: "#fff",
              transform: "translate(1 3)",
              d: "M0 0h22v18H0z"
            })
          })
        })]
      }), {
        boxSize: "md"
      }),
      supportSettingsPage: !0,
      clipPreferencePath: "metadata.connections.googleMeetUploadFolder",
      clipPreferenceProperty: "googleMeetUploadFolder",
      privacyPreferencePath: "metadata.connections.googleMeetUploadPrivacy",
      privacyPreferenceProperty: "googleMeetUploadPrivacy",
      clipPreferenceDBProperty: "clip_google_meet_upload_folder",
      privacyPreferenceDBProperty: "clip_google_meet_upload_privacy",
      getHeaderText: () => (0, _v29.translate)({
        singular: "Choose a default folder for your Google Meet recordings",
        dictionary: {
          es: {
            singular: "Elija una carpeta predeterminada para sus grabaciones de Google Meet"
          },
          "de-DE": {
            singular: "Wählen Sie einen Standardordner für Ihre Google Meet-Aufzeichnungen."
          },
          "fr-FR": {
            singular: "Choisissez un dossier par défaut pour vos enregistrements Google Meet"
          },
          "ja-JP": {
            singular: "Google Meetの録画用にデフォルトのフォルダーを選択"
          },
          "ko-KR": {
            singular: "Google Meet 녹화 파일의 기본 폴더를 선택하세요."
          },
          "pt-BR": {
            singular: "Escolha uma pasta padrão para suas gravações do Google Meet"
          },
          "zh-CN": {
            singular: "为您的 Google Meet 录制内容选择默认文件夹"
          }
        }
      }),
      getPrivacyHeaderText: () => (0, _v29.translate)({
        singular: "Set the default privacy for your Google Meet recordings",
        dictionary: {
          es: {
            singular: "Establezca la configuración de privacidad predeterminada para sus grabaciones de Google Meet"
          },
          "de-DE": {
            singular: "Standard-Datenschutzeinstellungen für Ihre Google Meet-Aufnahmen festlegen"
          },
          "fr-FR": {
            singular: "Définissez la confidentialité par défaut de vos enregistrements Google Meet"
          },
          "ja-JP": {
            singular: "Google Meet録画のデフォルトのプライバシーを設定"
          },
          "ko-KR": {
            singular: "Google Meet 녹화의 기본 개인정보 보호 설정을 지정하세요."
          },
          "pt-BR": {
            singular: "Defina a privacidade padrão para as suas gravações do Google Meet"
          },
          "zh-CN": {
            singular: "设置 Google Meet 录制的默认隐私设置"
          }
        }
      }),
      getSubHeaderText: () => (0, _v29.translate)({
        singular: "You can change the default folder in the Manage tab of your Google Meet integration page",
        dictionary: {
          es: {
            singular: "Puede cambiar la carpeta predeterminada en la pestaña Administrar en la página de integración de Google Meet."
          },
          "de-DE": {
            singular: "Sie können den Standardordner auf der Registerkarte „Verwalten“ Ihrer Google Meet-Integrationsseite ändern."
          },
          "fr-FR": {
            singular: "Vous pouvez modifier le dossier par défaut dans l'onglet « Gérer » de votre page d'intégration Google Meet."
          },
          "ja-JP": {
            singular: "Google Meet連携ページの「管理」タブで、デフォルトのフォルダーを変更できます。"
          },
          "ko-KR": {
            singular: "Google Meet 통합 페이지의 관리 탭에서 기본 폴더를 변경할 수 있습니다."
          },
          "pt-BR": {
            singular: "Você pode alterar a pasta padrão na aba Gerenciar na página de integração do Google Meet"
          },
          "zh-CN": {
            singular: "您可以在 Google Meet 集成页面的“管理”选项卡中更改默认文件夹。"
          }
        }
      }),
      getPrivacySubHeaderText: () => (0, _v29.translate)({
        singular: "You can change the default privacy in the Manage tab of your Google Meet integration page",
        dictionary: {
          es: {
            singular: "Puede cambiar la configuración de privacidad predeterminada en la pestaña Administrar en la página de integración de Google Meet."
          },
          "de-DE": {
            singular: "Sie können die standardmäßigen Datenschutzeinstellungen auf der Registerkarte „Verwalten“ Ihrer Google Meet-Integrationsseite ändern."
          },
          "fr-FR": {
            singular: "Vous pouvez modifier la confidentialité par défaut dans l'onglet Gérer de votre page d'intégration Google Meet."
          },
          "ja-JP": {
            singular: "Google Meet連携ページの「管理」タブで、デフォルトのプライバシー設定を変更できます。"
          },
          "ko-KR": {
            singular: "Google Meet 통합 페이지의 관리 탭에서 기본 개인정보 보호 설정을 변경할 수 있습니다."
          },
          "pt-BR": {
            singular: "Você pode alterar a privacidade padrão na aba Gerenciar na página de integração do Google Meet"
          },
          "zh-CN": {
            singular: "您可以在 Google Meet 集成页面的“管理”选项卡中更改默认隐私设置。"
          }
        }
      }),
      getNewFolderTemplate: (_v0, _v1) => _v115((0, _v29.translate)({
        singular: "Google Meet Recordings (new)",
        dictionary: {
          es: {
            singular: "Grabaciones de Google Meet (nuevas)"
          },
          "de-DE": {
            singular: "Google Meet-Aufzeichnungen (neu)"
          },
          "fr-FR": {
            singular: "Enregistrements Google Meet (nouveaux)"
          },
          "ja-JP": {
            singular: "Google Meetの録画（新機能）"
          },
          "ko-KR": {
            singular: "Google Meet 녹화(신규)"
          },
          "pt-BR": {
            singular: "Gravações do Google Meet (novo)"
          },
          "zh-CN": {
            singular: "Google Meet 录制（新）"
          }
        }
      }), (0, _v29.translate)({
        singular: "Google Meet Recordings",
        dictionary: {
          es: {
            singular: "Grabaciones de Google Meet"
          },
          "de-DE": {
            singular: "Google Meet-Aufzeichnungen"
          },
          "fr-FR": {
            singular: "Enregistrements Google Meet"
          },
          "ja-JP": {
            singular: "Google Meetの録画"
          },
          "ko-KR": {
            singular: "Google Meet 녹화"
          },
          "pt-BR": {
            singular: "Gravações do Google Meet"
          },
          "zh-CN": {
            singular: "Google Meet 录制"
          }
        }
      }), _v0, _v1)
    },
    _v120 = {
      name: "Dropbox",
      logo: (0, _v1.jsx)(_v112.Dropbox, {
        boxSize: "md"
      }),
      supportSettingsPage: !0,
      clipPreferencePath: "metadata.connections.dropboxUploadFolder",
      clipPreferenceProperty: "dropboxUploadFolder",
      privacyPreferencePath: "metadata.connections.dropboxUploadPrivacy",
      privacyPreferenceProperty: "zoomUploadPrivacy",
      clipPreferenceDBProperty: "clip_dropbox_upload_folder",
      privacyPreferenceDBProperty: "clip_dropbox_upload_privacy",
      getHeaderText: () => (0, _v29.translate)({
        singular: "Choose where your Dropbox videos will be stored in Vimeo",
        dictionary: {
          es: {
            singular: "Elija dónde se almacenarán sus videos de Dropbox en Vimeo"
          },
          "de-DE": {
            singular: "Wählen Sie aus, wo Ihre Dropbox-Videos in Vimeo gespeichert werden sollen"
          },
          "fr-FR": {
            singular: "Choisissez où vos vidéos Dropbox seront stockées sur Vimeo"
          },
          "ja-JP": {
            singular: "VimeoでDropboxの動画を保存する場所を選択してください"
          },
          "ko-KR": {
            singular: "Vimeo에서 Dropbox 동영상을 저장할 위치를 선택하세요."
          },
          "pt-BR": {
            singular: "Escolha onde os seus vídeos do Dropbox serão armazenados no Vimeo"
          },
          "zh-CN": {
            singular: "选择您希望 Dropbox 视频在 Vimeo 中的存储位置"
          }
        }
      }),
      getPrivacyHeaderText: () => (0, _v29.translate)({
        singular: "Set the default privacy for your Dropbox recordings",
        dictionary: {
          es: {
            singular: "Establezca la configuración de privacidad predeterminada para sus grabaciones de Dropbox"
          },
          "de-DE": {
            singular: "Standard-Datenschutzeinstellungen für Ihre Dropbox-Aufnahmen festlegen"
          },
          "fr-FR": {
            singular: "Définissez la confidentialité par défaut de vos enregistrements Dropbox"
          },
          "ja-JP": {
            singular: "Dropbox録画のデフォルトのプライバシーを設定"
          },
          "ko-KR": {
            singular: "Dropbox 녹화의 기본 개인정보 보호 설정을 지정하세요."
          },
          "pt-BR": {
            singular: "Defina a privacidade padrão para as suas gravações do Dropbox"
          },
          "zh-CN": {
            singular: "设置您的 Dropbox 录制内容的默认隐私设置"
          }
        }
      }),
      getSubHeaderText: () => (0, _v29.translate)({
        singular: "Vimeo can automatically detect new video files in your specified Dropbox folder and upload them to your Vimeo account.",
        dictionary: {
          es: {
            singular: "Vimeo puede detectar automáticamente nuevos archivos de video en su carpeta de Dropbox especificada y subirlos a su cuenta de Vimeo."
          },
          "de-DE": {
            singular: "Vimeo kann neue Videodateien in Ihrem festgelegten Dropbox-Ordner automatisch erkennen und auf Ihr Vimeo-Konto hochladen."
          },
          "fr-FR": {
            singular: "Vimeo peut détecter automatiquement les nouveaux fichiers vidéo dans votre dossier Dropbox spécifié et les mettre en ligne sur votre compte Vimeo."
          },
          "ja-JP": {
            singular: "Vimeoは、指定したDropboxフォルダー内の新しい動画ファイルを自動的に検出し、Vimeoアカウントにアップロードします。"
          },
          "ko-KR": {
            singular: "Vimeo는 지정된 Dropbox 폴더의 새 동영상 파일을 자동으로 감지하여 Vimeo 계정에 업로드할 수 있습니다."
          },
          "pt-BR": {
            singular: "O Vimeo pode detectar automaticamente novos arquivos de vídeo na pasta especificada do Dropbox e carregá-los na sua conta do Vimeo."
          },
          "zh-CN": {
            singular: "Vimeo 可以自动检测指定 Dropbox 文件夹中的新视频文件，并将其上传到您的 Vimeo 账户。"
          }
        }
      }),
      getPrivacySubHeaderText: () => (0, _v29.translate)({
        singular: "You can change the default privacy in the Manage tab of your Dropbox integration page",
        dictionary: {
          es: {
            singular: "Puede cambiar la configuración de privacidad predeterminada en la pestaña Administrar en la página de integración de Dropbox."
          },
          "de-DE": {
            singular: "Sie können die standardmäßigen Datenschutzeinstellungen auf der Registerkarte „Verwalten“ Ihrer Dropbox-Integrationsseite ändern."
          },
          "fr-FR": {
            singular: "Vous pouvez modifier la confidentialité par défaut dans l’onglet Gérer de votre page d’intégration Dropbox."
          },
          "ja-JP": {
            singular: "Dropbox連携ページの「管理」タブで、デフォルトのプライバシー設定を変更できます。"
          },
          "ko-KR": {
            singular: "Dropbox 통합 페이지의 관리 탭에서 기본 개인정보 보호 설정을 변경할 수 있습니다."
          },
          "pt-BR": {
            singular: "Você pode alterar a privacidade padrão na aba Gerenciar da página de integração do Dropbox"
          },
          "zh-CN": {
            singular: "您可以在 Dropbox 集成页面的“管理”选项卡中更改默认隐私设置。"
          }
        }
      }),
      getNewFolderTemplate: (_v0, _v1) => _v115((0, _v29.translate)({
        singular: "Dropbox Recordings (new)",
        dictionary: {
          es: {
            singular: "Grabaciones de Dropbox (nuevo)"
          },
          "de-DE": {
            singular: "Dropbox-Aufnahmen (neu)"
          },
          "fr-FR": {
            singular: "Enregistrements Dropbox (nouveaux)"
          },
          "ja-JP": {
            singular: "Dropboxの録画（新着）"
          },
          "ko-KR": {
            singular: "Dropbox 녹화본 (신규)"
          },
          "pt-BR": {
            singular: "Gravações do Dropbox (novo)"
          },
          "zh-CN": {
            singular: "Dropbox 录制内容（新）"
          }
        }
      }), (0, _v29.translate)({
        singular: "Dropbox Recordings",
        dictionary: {
          es: {
            singular: "Grabaciones de Dropbox"
          },
          "de-DE": {
            singular: "Dropbox-Aufnahmen"
          },
          "fr-FR": {
            singular: "Enregistrements Dropbox"
          },
          "ja-JP": {
            singular: "Dropboxの録画"
          },
          "ko-KR": {
            singular: "Dropbox 녹화본"
          },
          "pt-BR": {
            singular: "Gravações do Dropbox"
          },
          "zh-CN": {
            singular: "Dropbox 录制内容"
          }
        }
      }), _v0, _v1)
    },
    _v121 = {
      [_v105.PARTNER_APP_ID.WebexProduction]: {
        ..._v116
      },
      [_v105.PARTNER_APP_ID.WebexDevelopment]: {
        ..._v116
      },
      [_v105.PARTNER_APP_ID.ZoomProduction]: {
        ..._v117
      },
      [_v105.PARTNER_APP_ID.ZoomDevelopment]: {
        ..._v117
      },
      [_v105.PARTNER_APP_ID.MSTeamDevelopment]: {
        ..._v118
      },
      [_v105.PARTNER_APP_ID.MSTeamProduction]: {
        ..._v118
      },
      [_v105.PARTNER_APP_ID.GoogleMeetDevelopment]: {
        ..._v119
      },
      [_v105.PARTNER_APP_ID.GoogleMeetProduction]: {
        ..._v119
      },
      [_v105.PARTNER_APP_ID.DropboxProduction]: {
        ..._v120
      },
      [_v105.PARTNER_APP_ID.DropboxDevelopment]: {
        ..._v120
      }
    };
  var _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0);
  let _v126 = ["nobody"];
  var _v127 = _v0.i(0),
    _v128 = _v0.i(0);
  let _v129 = ({
      appId: _v0,
      config: _v1,
      viewer: _v2,
      msTeamsParams: _v3,
      isMsTeamsApp: _v4 = !1,
      isSettingsPage: _v5
    }) => {
      let _v6 = (0, _v7.useRouter)(),
        _v7 = (0, _v2.useRef)(void 0),
        [_v8, _v9] = (0, _v2.useState)(!1),
        [_v10, _v11] = (0, _v2.useState)(),
        [_v12, _v13] = (0, _v2.useState)(!1),
        _v14 = (0, _v16.useToast)(),
        _v15 = _v2.user?.id,
        {
          teamOwnerId: _v16 = null,
          adminOnboarding: _v17 = !1,
          msTeamsEncryptedTeamUserId: _v18 = ""
        } = _v3 || {},
        _v19 = (0, _v28.useGetUser)(() => _v15 && _v1.clipPreferencePath ? _v4 ? _v16 ? {
          select: [_v1.clipPreferencePath, _v1.privacyPreferencePath],
          where: {
            userId: _v16
          }
        } : null : {
          select: [_v1.clipPreferencePath, _v1.privacyPreferencePath],
          where: {
            userId: _v15
          }
        } : null),
        _v20 = _v19?.data?.metadata?.connections?.[_v1.clipPreferenceProperty]?.uri,
        _v21 = _v20 ? Number(_v20.split("/")[2]) : null,
        _v22 = _v20 ? Number(_v20.split("/")[4]) : null,
        {
          allowedPrivacies: _v23,
          isLoading: _v24
        } = (({
          userId: _v0,
          teamOwnerId: _v1,
          isMsTeamsApp: _v2
        }) => {
          let {
              workspaceLoading: _v3,
              workspaceItems: _v4
            } = _v32(_v0, _v2),
            _v5 = (0, _v2.useMemo)(() => {
              let _v0;
              if (!_v4) return null;
              let _v1 = _v4.find(_v0 => _v0.id === _v1);
              return _v1 && _v1 ? {
                workspaceUuid: (_v0 = _v1.uri).startsWith("/workspaces") ? _v0.split("/")[2] ?? "" : "",
                teamOwnerId: _v1,
                isAdmin: !!_v1.role && ["Admin", "Owner"].includes(_v1.role),
                isContributor: !!_v1.role && ["Contributor", "Contributor Plus"].includes(_v1.role)
              } : null;
            }, [_v4, _v1]),
            {
              teamSettingsLoading: _v6,
              teamSettingsResult: _v7
            } = (0, _v125.useGetTeamSettings)({
              userId: _v5?.workspaceUuid ? void 0 : _v5?.teamOwnerId,
              workspaceUuid: _v5?.workspaceUuid,
              settings: ["allowedPrivaciesAdmin", "allowedPrivaciesContributor"]
            });
          return {
            allowedPrivacies: (0, _v2.useMemo)(() => _v7 && _v5 ? _v5.isAdmin && _v7.allowedPrivaciesAdmin ? _v7.allowedPrivaciesAdmin : _v5.isContributor && _v7.allowedPrivaciesContributor ? _v7.allowedPrivaciesContributor : _v126 : _v126, [_v7, _v5]).filter(_v0 => "team" !== _v0),
            isLoading: _v3 || _v6
          };
        })({
          teamOwnerId: _v21,
          userId: _v15,
          isMsTeamsApp: _v4
        }),
        _v25 = (0, _v127.useDefaultPrivacyOptions)(_v2, !0).map(_v0 => ({
          ..._v0,
          isDisabled: !_v23.includes(_v0.privacy),
          showUpsell: !1
        })),
        [_v26, _v27] = (0, _v2.useState)({
          title: (0, _v29.translate)({
            singular: "Select privacy",
            dictionary: {
              es: {
                singular: "Seleccionar privacidad"
              },
              "de-DE": {
                singular: "Privatsphäre auswählen"
              },
              "fr-FR": {
                singular: "Sélectionner la confidentialité"
              },
              "ja-JP": {
                singular: "プライバシー設定を選択"
              },
              "ko-KR": {
                singular: "공개 설정 선택"
              },
              "pt-BR": {
                singular: "Selecionar privacidade"
              },
              "zh-CN": {
                singular: "选择隐私"
              }
            }
          }),
          privacy: "placeholder"
        });
      (0, _v2.useEffect)(() => {
        if (!_v19.isLoading && !_v24) {
          let _v0 = _v19?.data?.metadata?.connections[_v1.privacyPreferenceProperty];
          if (_v0 && !_v7.current) {
            let _v0 = "_not_set" === _v0.privacy ? "nobody" : _v0.privacy,
              _v1 = _v25.find(_v0 => _v0.privacy === _v0);
            _v1 && (_v27(_v1), "password" === _v1.privacy && _v11(_v0.password)), _v1 && (_v7.current = {
              ..._v0
            });
          }
        }
      }, [_v19, _v24, _v1.privacyPreferenceProperty, _v25]);
      let _v28 = async () => {
          try {
            if (_v9(!0), _v4 && !_v17 && _v16) {
              await _v25({
                baseUrl: `//${_v2.apiUrl}`,
                headers: {
                  Authorization: `jwt ${_v2.jwt}`,
                  "Content-Type": "application/json"
                },
                variables: {
                  msTeamsEncryptedTeamUserId: _v18,
                  uploadPrivacy: {
                    privacy: _v26.privacy,
                    password: _v10
                  }
                },
                where: {
                  userId: _v16
                }
              });
              let _v0 = `/apps/${_v0}/auto-archive/welcome?folderId=${_v22}&teamOwnerId=${_v16}`,
                _v1 = _v6.query?.redirect_uri ? String(_v6.query.redirect_uri) : "",
                _v2 = _v1 && (0, _v34.isVimeoRedirectableUrl)(_v1) ? _v1 : _v0;
              _v5 ? _v14({
                title: (0, _v29.translate)({
                  singular: "Your privacy settings have been updated",
                  dictionary: {
                    es: {
                      singular: "Se actualizaron sus configuraciones de privacidad"
                    },
                    "de-DE": {
                      singular: "Ihre Datenschutzeinstellungen wurden aktualisiert"
                    },
                    "fr-FR": {
                      singular: "Vos paramètres de confidentialité ont été mis à jour"
                    },
                    "ja-JP": {
                      singular: "プライバシー設定が更新されました"
                    },
                    "ko-KR": {
                      singular: "프라이버시 설정이 업데이트되었습니다."
                    },
                    "pt-BR": {
                      singular: "Suas configurações de privacidade foram atualizadas"
                    },
                    "zh-CN": {
                      singular: "您的隐私设置已更新"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v18.CircleCheckFilled, {}),
                variant: "success"
              }) : window.location.href = _v2;
            } else if (_v15) {
              await (0, _v26.patchUser)({
                baseUrl: `//${_v2.apiUrl}`,
                headers: {
                  Authorization: `jwt ${_v2.jwt}`,
                  "Content-Type": "application/json"
                },
                where: {
                  userId: _v15
                },
                select: ["metadata"],
                variables: {
                  [_v1.privacyPreferenceDBProperty]: {
                    privacy: _v26.privacy,
                    password: _v10
                  }
                }
              }), _v9(!1);
              let _v0 = `/apps/${_v0}/auto-archive/welcome?folderId=${_v22}`,
                _v1 = _v6.query?.redirect_uri ? String(_v6.query.redirect_uri) : "",
                _v2 = _v1 && (0, _v34.isVimeoRedirectableUrl)(_v1) ? _v1 : _v0;
              _v5 ? _v14({
                title: (0, _v29.translate)({
                  singular: "Your privacy settings have been updated",
                  dictionary: {
                    es: {
                      singular: "Se actualizaron sus configuraciones de privacidad"
                    },
                    "de-DE": {
                      singular: "Ihre Datenschutzeinstellungen wurden aktualisiert"
                    },
                    "fr-FR": {
                      singular: "Vos paramètres de confidentialité ont été mis à jour"
                    },
                    "ja-JP": {
                      singular: "プライバシー設定が更新されました"
                    },
                    "ko-KR": {
                      singular: "프라이버시 설정이 업데이트되었습니다."
                    },
                    "pt-BR": {
                      singular: "Suas configurações de privacidade foram atualizadas"
                    },
                    "zh-CN": {
                      singular: "您的隐私设置已更新"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v18.CircleCheckFilled, {}),
                variant: "success"
              }) : window.location.href = _v2;
            }
          } catch {
            _v9(!1), _v14({
              title: (0, _v29.translate)({
                singular: "Unable to select this privacy setting. Try again or select another option.",
                dictionary: {
                  es: {
                    singular: "No se puede seleccionar esta configuración de privacidad. Inténtelo de nuevo o seleccione otra opción."
                  },
                  "de-DE": {
                    singular: "Diese Datenschutzeinstellung konnte nicht ausgewählt werden. Versuchen Sie es erneut oder wählen Sie eine andere Option aus."
                  },
                  "fr-FR": {
                    singular: "Impossible de sélectionner ce paramètre de confidentialité. Veuillez réessayer ou sélectionner une autre option."
                  },
                  "ja-JP": {
                    singular: "このプライバシー設定を選択できません。もう一度試すか、別のオプションを選択してください。"
                  },
                  "ko-KR": {
                    singular: "이 프라이버시 설정을 선택할 수 없습니다. 다시 시도하거나 다른 옵션을 선택하세요."
                  },
                  "pt-BR": {
                    singular: "Não foi possível selecionar esta configuração de privacidade. Tente novamente ou selecione outra opção."
                  },
                  "zh-CN": {
                    singular: "无法选择此隐私设置。请再次尝试或选择其他选项。"
                  }
                }
              }),
              icon: (0, _v1.jsx)(_v122.CloseXCircleFilled, {}),
              variant: "warning"
            });
          }
        },
        _v29 = () => !_v26 || !!_v8 || _v26.privacy === _v128.DEFAULT_PRIVACY_VALUES.PASSWORD && !_v10 || "placeholder" === _v26.privacy;
      return _v19.isLoading ? (0, _v1.jsx)(_v35.LoadingPage, {}) : _v20 && _v21 ? _v5 ? (0, _v1.jsx)(_v48.Box, {
        width: "100%",
        children: (0, _v1.jsxs)(_v9.Card, {
          padding: "sm",
          width: "100%",
          boxShadow: "lg",
          children: [(0, _v1.jsxs)(_v10.Flex, {
            flexDirection: "column",
            width: "100%",
            alignItems: "start",
            justifyContent: "flex-start",
            gap: "md",
            flexWrap: {
              base: "wrap",
              sm: "nowrap"
            },
            children: [(0, _v1.jsx)(_v48.Box, {
              width: "100%",
              children: (0, _v1.jsx)(_v124.PrivacyDropdown, {
                isVideoPrivacy: !0,
                activePrivacy: _v26.privacy,
                onSelect: _v0 => {
                  let _v1 = _v25.find(_v0 => _v0.privacy === _v0);
                  _v1 && _v27(_v1), _v11(""), _v13(!0);
                },
                privacyOptions: _v25.map(_v0 => ({
                  ..._v0,
                  description: void 0
                }))
              })
            }), _v26.privacy === _v128.DEFAULT_PRIVACY_VALUES.PASSWORD && (0, _v1.jsx)(_v48.Box, {
              width: "100%",
              children: (0, _v1.jsx)(_v123.PasswordInput, {
                initialValue: _v10,
                hideRightElement: !_v10,
                onChange: _v0 => {
                  _v11(_v0.target.value), _v13(!0);
                },
                autoFocus: !1
              })
            })]
          }), (0, _v1.jsx)(_v8.Button, {
            hidden: !_v12,
            mt: "md",
            variant: "primary",
            width: "fit-content",
            marginLeft: "auto",
            isDisabled: _v29(),
            onClick: async () => {
              await _v28(), _v13(!1);
            },
            isLoading: _v8,
            children: (0, _v29.translate)({
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
      }) : (0, _v1.jsx)(_v10.Flex, {
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        width: "100%",
        children: (0, _v1.jsxs)(_v9.Card, {
          padding: "xl",
          width: (0, _v15.rem)(420),
          boxShadow: "lg",
          minHeight: (0, _v15.rem)(400),
          children: [(0, _v1.jsxs)(_v10.Flex, {
            alignItems: "center",
            justifyContent: "center",
            gap: "md",
            mb: "xl",
            children: [_v1.logo, (0, _v1.jsx)(_v17.ArrowsIntegration, {
              boxSize: "xs"
            }), (0, _v1.jsx)(_v19.VimeoV, {
              boxSize: "sm"
            })]
          }), (0, _v1.jsx)(_v11.Header, {
            size: "md",
            textAlign: "center",
            mb: "3",
            color: "text-primary",
            children: _v1.getPrivacyHeaderText()
          }), (0, _v1.jsx)(_v12.Paragraph, {
            size: "lg",
            color: "text-secondary",
            textAlign: "center",
            children: _v1.getPrivacySubHeaderText()
          }), (0, _v1.jsxs)(_v48.Box, {
            mt: "md",
            children: [(0, _v1.jsx)(_v124.PrivacyDropdown, {
              isVideoPrivacy: !0,
              activePrivacy: _v26.privacy,
              onSelect: _v0 => {
                let _v1 = _v25.find(_v0 => _v0.privacy === _v0);
                _v1 && _v27(_v1), _v11("");
              },
              privacyOptions: _v25.map(_v0 => ({
                ..._v0,
                description: void 0
              }))
            }), _v26.privacy === _v128.DEFAULT_PRIVACY_VALUES.PASSWORD && (0, _v1.jsx)(_v48.Box, {
              mt: "md",
              children: (0, _v1.jsx)(_v123.PasswordInput, {
                prefillValue: _v10,
                hideRightElement: !0,
                onChange: _v0 => {
                  _v11(_v0.target.value);
                },
                autoFocus: !1
              })
            })]
          }), (0, _v1.jsxs)(_v10.Flex, {
            mt: "md",
            gap: "sm",
            justifyContent: "center",
            flexDirection: "column",
            children: [(0, _v1.jsx)(_v8.Button, {
              variant: "primary",
              width: "100%",
              marginLeft: "auto",
              isDisabled: _v29(),
              onClick: _v28,
              isLoading: _v8,
              children: (0, _v29.translate)({
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
            }), (0, _v1.jsx)(_v8.Button, {
              variant: "tertiary",
              as: "a",
              href: `/apps/${_v0}/folder-select`,
              width: "100%",
              children: (0, _v29.translate)({
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
              })
            })]
          })]
        })
      }) : (0, _v1.jsx)(_v6.ErrorPage, {
        error: new _v4.UnauthorizedError(),
        shouldShowSearch: !1
      });
    },
    _v130 = [_v105.PARTNER_APP_ID.MSTeamProduction, _v105.PARTNER_APP_ID.MSTeamDevelopment],
    _v131 = [_v105.PARTNER_APP_ID.DropboxProduction, _v105.PARTNER_APP_ID.DropboxDevelopment];
  _v0.s(["AppSettingsPage", 0, ({
    viewer: _v0,
    appId: _v1,
    isSettingsPage: _v2,
    msTeamsParams: _v3,
    step: _v4 = "TEAM_FOLDER_SELECTION"
  }) => {
    let [_v5, _v6] = (0, _v2.useState)(!1),
      [_v7, _v8] = (0, _v2.useState)(!0),
      _v9 = _v130.includes(_v1),
      _v10 = _v131.includes(_v1),
      _v11 = _v121[_v1],
      {
        data: _v12,
        isLoading: _v13
      } = (0, _v5.useGetUserIntegration)(() => {
        let _v0 = _v0?.user?.id;
        return _v0 && _v1 && _v10 ? {
          where: {
            userId: String(_v0),
            integrationUuid: String(_v1)
          },
          select: ["connectionStatus"]
        } : (console.warn("App Settings Page: Missing viewer or appId"), null);
      });
    (0, _v2.useEffect)(() => {
      if (_v0) {
        if (_v10 || !_v11) return void _v8(!1);
        window.fetch(`${_v0.vimeoHttpsUrl}/settings?action=get_authorized_apps&app_id=${_v1}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/vnd.vimeo.*+json;version=3.3",
            Authorization: `jwt ${_v0.jwt}`
          }
        }).then(_v0 => {
          if (200 !== _v0.status) throw Error();
          return _v0.json();
        }).then(() => _v6(!0)).catch(() => _v6(!1)).finally(() => _v8(!1));
      }
    }, [_v0, _v1, _v10, _v11]), (0, _v2.useEffect)(() => {
      _v10 && _v12?.connectionStatus === _v105.CONNECTION_STATUS.CONNECTED && _v6(!0);
    }, [_v12, _v10]);
    let _v14 = _v13 || !_v10 && _v7;
    return _v0 && _v1 && !_v14 ? _v11 && _v5 && ("PRIVACY_SELECTION" !== _v4 || !_v10) ? "PRIVACY_SELECTION" === _v4 ? (0, _v1.jsx)(_v129, {
      appId: _v1,
      config: _v11,
      viewer: _v0,
      isMsTeamsApp: _v9,
      msTeamsParams: _v3,
      isSettingsPage: _v2
    }) : (0, _v1.jsx)(_v111, {
      appId: _v1,
      config: _v11,
      viewer: _v0,
      isSettingsPage: _v2,
      isMsTeamsApp: _v9,
      msTeamsParams: _v3
    }) : (0, _v1.jsx)(_v6.ErrorPage, {
      error: new _v4.ResourceNotFoundError(),
      shouldShowSearch: !1
    }) : _v2 ? (0, _v1.jsx)(_v3.Spinner, {
      size: "sm"
    }) : (0, _v1.jsx)(_v35.LoadingPage, {});
  }], 0);
}