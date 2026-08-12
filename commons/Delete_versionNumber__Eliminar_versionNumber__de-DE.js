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
    _v39 = _v0.i(0);
  let _v40 = ({
    isOpen: _v0,
    fileName: _v1,
    onDelete: _v2,
    onCancel: _v3,
    isDeleteApiInProgress: _v4,
    versionLabel: _v5
  }) => {
    let _v6 = _v5 ? (0, _v18.translate)({
      singular: "Delete {versionNumber}",
      replacements: {
        versionNumber: _v5
      },
      dictionary: {
        es: {
          singular: "Eliminar {versionNumber}"
        },
        "de-DE": {
          singular: "{versionNumber} löschen"
        },
        "fr-FR": {
          singular: "Supprimer {versionNumber}"
        },
        "ja-JP": {
          singular: "{versionNumber} を削除"
        },
        "ko-KR": {
          singular: "{versionNumber} 삭제"
        },
        "pt-BR": {
          singular: "Excluir {versionNumber}"
        },
        "zh-CN": {
          singular: "删除 {versionNumber}"
        }
      }
    }) : (0, _v18.translate)({
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
    });
    return (0, _v1.jsxs)(_v34.Modal, {
      isOpen: _v0,
      onClose: () => _v3(),
      children: [(0, _v1.jsx)(_v39.ModalOverlay, {}), (0, _v1.jsxs)(_v36.ModalContent, {
        children: [(0, _v1.jsx)(_v38.ModalHeader, {
          pb: "0px",
          children: _v6
        }), (0, _v1.jsx)(_v35.ModalBody, {
          children: (0, _v1.jsx)(_v4.Box, {
            display: "flex",
            children: _v1 ? (0, _v1.jsx)(_v12.Text, {
              variant: "body-md",
              mb: "28px",
              children: (0, _v18.translate)({
                singular: "{FILE_NAME} will be permanently deleted",
                replacements: {
                  FILE_NAME: () => (0, _v1.jsx)("strong", {
                    children: _v1
                  })
                },
                dictionary: {
                  es: {
                    singular: "{FILE_NAME} se eliminará permanentemente"
                  },
                  "de-DE": {
                    singular: "{FILE_NAME} wird dauerhaft gelöscht"
                  },
                  "fr-FR": {
                    singular: "{FILE_NAME} sera définitivement supprimé"
                  },
                  "ja-JP": {
                    singular: "{FILE_NAME} は完全に削除されます"
                  },
                  "ko-KR": {
                    singular: "{FILE_NAME}이(가) 영구적으로 삭제됩니다"
                  },
                  "pt-BR": {
                    singular: "{FILE_NAME} será excluído permanentemente"
                  },
                  "zh-CN": {
                    singular: "{FILE_NAME} 将被永久删除"
                  }
                }
              })
            }) : (0, _v1.jsx)(_v12.Text, {
              variant: "body-md",
              mb: "28px",
              children: (0, _v18.translate)({
                singular: "The video file associated with this version will be permanently deleted",
                dictionary: {
                  es: {
                    singular: "El archivo de video asociado con esta versión se eliminará permanentemente"
                  },
                  "de-DE": {
                    singular: "Die mit dieser Version verknüpfte Videodatei wird dauerhaft gelöscht"
                  },
                  "fr-FR": {
                    singular: "Le fichier vidéo associé à cette version sera définitivement supprimé"
                  },
                  "ja-JP": {
                    singular: "このバージョンに関連付けられた動画ファイルは完全に削除されます"
                  },
                  "ko-KR": {
                    singular: "이 버전과 연결된 비디오 파일은 영구적으로 삭제됩니다"
                  },
                  "pt-BR": {
                    singular: "O arquivo de vídeo associado a esta versão será excluído permanentemente"
                  },
                  "zh-CN": {
                    singular: "与此版本关联的视频文件将被永久删除"
                  }
                }
              })
            })
          })
        }), (0, _v1.jsxs)(_v37.ModalFooter, {
          children: [(0, _v1.jsx)(_v33.Button, {
            variant: "tertiary",
            onClick: () => _v3(),
            disabled: _v4,
            children: (0, _v18.translate)({
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
            variant: "destructive",
            onClick: () => _v2(),
            isLoading: _v4,
            children: (0, _v18.translate)({
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
    });
  };
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = (0, _v2.forwardRef)(({
    duration: _v0,
    fileName: _v1,
    fileSize: _v2,
    index: _v3,
    isActive: _v4,
    isLastElement: _v5,
    isLoadingMoreVersion: _v6,
    thumbnail: _v7,
    createdTime: _v8,
    uploadDate: _v9,
    userName: _v10,
    uri: _v11,
    videoId: _v12,
    clipHash: _v13,
    versionType: _v14,
    editSession: _v15,
    versionTranscodeStatus: _v16,
    downloadConfig: _v17,
    setIsVersionMenuActive: _v18,
    sequenceNumber: _v19,
    sequenceNumberWidth: _v20,
    currentVersion: _v21,
    analyticsProps: _v22,
    isCurrentVersionEnabled: _v23,
    revalidateVideoData: _v24,
    onVersionRestoreSuccess: _v25,
    reviewId: _v26,
    showDownload: _v27,
    showRestore: _v28,
    showDeleteVersion: _v29
  }, _v30) => {
    let _v31 = (0, _v14.useToast)(),
      _v32 = (0, _v24.useViewer)(),
      _v33 = (0, _v2.useRef)(null),
      _v34 = (0, _v2.useRef)(null),
      _v35 = (0, _v2.useRef)(null),
      _v36 = (0, _v25.useFindEllipsis)(_v33),
      _v37 = (0, _v25.useFindEllipsis)(_v34),
      _v38 = (0, _v25.useFindEllipsis)(_v35),
      [_v39, _v40] = (0, _v2.useState)(!1),
      [_v41, _v42] = (0, _v2.useState)(!1),
      [_v43, _v44] = (0, _v2.useState)(!1),
      _v45 = (0, _v30.idFromUri)(_v11),
      {
        mutateVideoVersion: _v46
      } = (0, _v26.useGetVideoVersion)({
        versionId: _v45,
        videoId: _v12
      }),
      {
        settings: _v47
      } = (0, _v19.useOrionSettings)(),
      _v48 = _v47.new_replace_feature,
      [_v49, {
        error: _v50,
        loading: _v51,
        called: _v52
      }] = (0, _v17.useDeleteVideoVersion)(),
      {
        deleteVersionWorkflow: _v53,
        isDeleteInProgress: _v54
      } = (0, _v21.useDeleteVersionWorkflow)(),
      _v55 = _v48 ? _v54 : _v51,
      _v56 = (0, _v23.useVersionsStore)(_v0 => _v0.deleteVersion),
      _v57 = (0, _v23.useVersionsStore)(_v0 => _v0.addNewVersion),
      _v58 = (0, _v30.formVersionRedirectUri)(_v45, _v12.toString(), _v13, _v26),
      _v59 = (0, _v41.isStaleIncompleteVersion)({
        createdTime: _v8 ?? "",
        sequenceNumber: _v19,
        versionTranscodeStatus: _v16
      }),
      _v60 = _v15?.status === "failed" || _v59,
      _v61 = !_v17?.files?.length,
      _v62 = (0, _v41.getVersionLabel)(_v19),
      _v63 = _v59 ? "" : _v62,
      _v64 = _v59 ? (0, _v18.translate)({
        singular: "Version",
        dictionary: {
          es: {
            singular: "Versión"
          },
          "ja-JP": {
            singular: "バージョン"
          },
          "ko-KR": {
            singular: "버전"
          },
          "pt-BR": {
            singular: "Versão"
          },
          "zh-CN": {
            singular: "版本"
          }
        }
      }) : _v62,
      _v65 = _v9 || _v8 || "",
      _v66 = !_v59 && !_v4,
      _v67 = !_v59 && _v4 && _v23,
      _v68 = _v29 || !_v59,
      _v69 = () => {
        _v66 && (_v22 && (0, _v28.bpViewVersion)({
          videoId: _v12,
          viewer: _v32,
          currentVersion: _v21,
          chosenVersion: _v62,
          analyticsProps: _v22
        }), window.location.href = _v58, _v18(!1));
      },
      _v70 = (0, _v2.useCallback)(() => {
        _v42(!0), _v18(!1), _v22 && (0, _v28.bpStartDeleteVersion)({
          videoId: _v12,
          viewer: _v32,
          currentVersion: _v21,
          chosenVersion: _v62,
          analyticsProps: _v22
        });
      }, [_v42, _v18, _v22, _v12, _v32, _v21, _v62]),
      _v71 = _v0 => {
        if (_v0 && !_v37) return "";
        let _v1 = _v1;
        return _v14 === _v41.VERSION_TYPE_VIMEO_CREATE ? _v1 = (0, _v18.translate)({
          singular: "Created with Vimeo",
          dictionary: {
            es: {
              singular: "Creado con Vimeo"
            },
            "de-DE": {
              singular: "Erstellt mit Vimeo"
            },
            "fr-FR": {
              singular: "Créé avec Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoで作成"
            },
            "ko-KR": {
              singular: "Vimeo로 제작"
            },
            "pt-BR": {
              singular: "Criado com o Vimeo"
            },
            "zh-CN": {
              singular: "使用 Vimeo 创建"
            }
          }
        }) : _v14 === _v41.VERSION_TYPE_VIMEO_RECORD && (_v1 = (0, _v18.translate)({
          singular: "Recorded with Vimeo",
          dictionary: {
            es: {
              singular: "Grabado con Vimeo"
            },
            "de-DE": {
              singular: "Aufgenommen mit Vimeo"
            },
            "fr-FR": {
              singular: "Enregistré avec Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoで録画"
            },
            "ko-KR": {
              singular: "Vimeo로 녹화"
            },
            "pt-BR": {
              singular: "Gravado com o Vimeo"
            },
            "zh-CN": {
              singular: "使用 Vimeo 录制完成"
            }
          }
        })), _v1;
      },
      _v72 = (0, _v2.useRef)("");
    (0, _v2.useEffect)(() => {
      _v52 && !_v55 && (_v31.close(_v72.current), _v50 ? _v72.current = _v31({
        title: (0, _v18.translate)({
          singular: "Unable to delete {versionNumber}. {LINK}Try again{/LINK}",
          replacements: {
            LINK: _v0 => (0, _v1.jsx)(_v7.Link, {
              color: "inherit",
              _hover: {
                cursor: "pointer",
                _dark: {
                  color: "inherit"
                }
              },
              onClick: () => {
                _v70();
              },
              fontSize: "body-md",
              variant: "inline-primary",
              children: _v0
            }),
            versionNumber: _v62
          },
          dictionary: {
            es: {
              singular: "No se pudo eliminar {versionNumber}. {LINK}Inténtalo de nuevo{/LINK}"
            },
            "de-DE": {
              singular: "Konnte {versionNumber} nicht löschen. {LINK}Erneut versuchen{/LINK}"
            },
            "fr-FR": {
              singular: "Impossible de supprimer {versionNumber}. {LINK}Réessayez{/LINK}"
            },
            "ja-JP": {
              singular: "{versionNumber} を削除できませんでした。{LINK}もう一度お試しください{/LINK}"
            },
            "ko-KR": {
              singular: "{versionNumber}을(를) 삭제할 수 없습니다. {LINK}다시 시도해 주세요{/LINK}"
            },
            "pt-BR": {
              singular: "Não foi possível excluir {versionNumber}. {LINK}Tente novamente{/LINK}"
            },
            "zh-CN": {
              singular: "无法删除 {versionNumber}。{LINK}请重试{/LINK}"
            }
          }
        }),
        duration: _v30.TOAST_WITH_LINK_DURATION,
        isClosable: !1,
        variant: "warning"
      }) : (_v72.current = _v31({
        title: (0, _v18.translate)({
          singular: "{versionNumber} deleted",
          replacements: {
            versionNumber: _v64
          },
          dictionary: {
            es: {
              singular: "{versionNumber} eliminado"
            },
            "de-DE": {
              singular: "{versionNumber} gelöscht"
            },
            "fr-FR": {
              singular: "{versionNumber} supprimée"
            },
            "ja-JP": {
              singular: "{versionNumber} が削除されました"
            },
            "ko-KR": {
              singular: "{versionNumber}이 삭제되었습니다"
            },
            "pt-BR": {
              singular: "{versionNumber} excluído"
            },
            "zh-CN": {
              singular: "{versionNumber} 已删除"
            }
          }
        }),
        duration: _v30.TOAST_DURATION,
        isClosable: !1
      }), _v56(_v11), _v46(), _v22 && (0, _v28.bpDeleteVersion)({
        videoId: _v12,
        viewer: _v32,
        currentVersion: _v21,
        chosenVersion: _v62,
        analyticsProps: _v22
      })));
    }, [_v50, _v52, _v55, _v70, _v19, _v56]);
    let _v73 = () => {
        _v22 && (0, _v28.bpOpenVersionMenu)({
          videoId: _v12,
          viewer: _v32,
          analyticsProps: _v22
        });
      },
      [_v74, _v75] = (0, _v2.useState)(!1),
      {
        restoreVersion: _v76,
        isRestoreInProgress: _v77,
        isRestoreCalled: _v78,
        restoredVersion: _v79
      } = (0, _v27.useRestoreVersion)(),
      {
        restore: _v80,
        isRestoreInProgress: _v81
      } = (0, _v22.useRestoreVersionWorkflow)(),
      _v82 = _v48 ? _v81 : _v77;
    return (0, _v2.useEffect)(() => {
      _v78 && !_v82 && _v79 && _v25?.(!1, _v79.configUrl);
    }, [_v78, _v82, _v79, _v25]), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v4.Box, {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "80px",
        p: "sm",
        gap: "sm",
        _hover: {
          cursor: _v66 || _v67 ? "pointer" : "default",
          borderRadius: "md",
          background: "fill-component-hover",
          _dark: {
            background: "fill-component-hover-dark"
          }
        },
        ref: _v5 ? _v30 : void 0,
        onMouseEnter: () => _v40(!0),
        onMouseLeave: () => _v40(!1),
        onClick: () => {
          (_v66 || _v67) && (_v22 && (0, _v28.bpViewVersion)({
            videoId: _v12,
            viewer: _v32,
            currentVersion: _v21,
            chosenVersion: _v62,
            analyticsProps: _v22
          }), _v4 ? _v23 && (window.location.href = _v26 ? (0, _v30.buildReviewClipUri)(_v12.toString(), _v26) : (0, _v30.formClipManageUri)(_v12.toString(), _v13)) : window.location.href = _v58);
        },
        children: [(0, _v1.jsx)(_v12.Text, {
          id: "version-id",
          variant: "heading-xs",
          p: "sm",
          minW: `${_v20}px`,
          children: _v63
        }), (0, _v1.jsx)(_v4.Box, {
          id: "version-thumbnail",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "black",
          minWidth: "114px",
          maxWidth: "114px",
          borderRadius: "sm",
          overflow: "hidden",
          children: (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v6.Image, {
              src: _v7,
              alt: "Version thumbnail",
              height: "64px"
            }), _v0 && (0, _v1.jsx)(_v3.Badge, {
              position: "absolute",
              right: "0.3rem",
              bottom: "0.2rem",
              size: "sm",
              children: (0, _v16.secondsToDisplay)(_v0)
            })]
          })
        }), (0, _v1.jsxs)(_v4.Box, {
          flexGrow: "1",
          overflow: "hidden",
          gap: "2px",
          display: "flex",
          flexDirection: "column",
          children: [(0, _v1.jsxs)(_v4.Box, {
            display: "flex",
            flexDirection: "row",
            gap: "sm",
            children: [(0, _v1.jsx)(_v13.Tooltip, {
              label: _v36 ? (0, _v41.formatDate)(_v65, _v32?.locale) : "",
              children: (0, _v1.jsx)(_v12.Text, {
                ref: _v33,
                variant: "heading-xs",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                children: (0, _v41.formatDate)(_v65, _v32?.locale)
              })
            }), _v4 && (0, _v1.jsx)(_v3.Badge, {
              size: "sm",
              fontSize: "14px",
              fontWeight: "500",
              variant: "default",
              children: (0, _v18.translate)({
                singular: "Current",
                dictionary: {
                  es: {
                    singular: "Actual"
                  },
                  "de-DE": {
                    singular: "Aktuell"
                  },
                  "fr-FR": {
                    singular: "En cours"
                  },
                  "ja-JP": {
                    singular: "現在"
                  },
                  "ko-KR": {
                    singular: "최근"
                  },
                  "pt-BR": {
                    singular: "Atual"
                  },
                  "zh-CN": {
                    singular: "当前"
                  }
                }
              })
            }), _v60 && (0, _v1.jsx)(_v3.Badge, {
              size: "sm",
              fontSize: "14px",
              fontWeight: "500",
              variant: "warning",
              children: (0, _v18.translate)({
                singular: "Failed",
                dictionary: {
                  es: {
                    singular: "Fallido"
                  },
                  "de-DE": {
                    singular: "Fehlgeschlagen"
                  },
                  "fr-FR": {
                    singular: "Échec"
                  },
                  "ja-JP": {
                    singular: "失敗しました"
                  },
                  "ko-KR": {
                    singular: "실패"
                  },
                  "pt-BR": {
                    singular: "Com falha"
                  },
                  "zh-CN": {
                    singular: "失败"
                  }
                }
              })
            })]
          }), (0, _v1.jsx)(_v13.Tooltip, {
            label: _v71(!0),
            children: (0, _v1.jsx)(_v12.Text, {
              ref: _v34,
              variant: "body-md",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              children: _v71()
            })
          }), (0, _v1.jsxs)(_v4.Box, {
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: "sm",
            children: [(0, _v1.jsx)(_v13.Tooltip, {
              label: _v38 ? _v10 : "",
              children: (0, _v1.jsx)(_v12.Text, {
                ref: _v35,
                variant: "body-md",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                children: _v10
              })
            }), (0, _v1.jsx)(_v12.Text, {
              variant: "body-md",
              children: "•"
            }), (0, _v1.jsx)(_v12.Text, {
              variant: "body-md",
              children: (0, _v20.bytesToSize)(_v2, _v29.FILE_SIZE_DECIMAL_PLACES)
            })]
          })]
        }), !_v4 && _v68 && (0, _v1.jsx)(_v8.Menu, {
          children: ({
            isOpen: _v0
          }) => (0, _v1.jsxs)(_v4.Box, {
            onClick: _v0 => _v0.stopPropagation(),
            children: [(0, _v1.jsx)(_v9.MenuButton, {
              as: _v5.IconButton,
              "aria-label": "Version menu options",
              icon: (0, _v1.jsx)(_v15.EllipsisV, {}),
              variant: "tertiary",
              size: "sm",
              opacity: {
                base: 1,
                md: _v0 || _v39 ? 1 : 0
              },
              onClick: _v73
            }), (0, _v1.jsxs)(_v11.MenuList, {
              minW: "138px",
              backgroundColor: "#f4f6f8",
              _dark: {
                backgroundColor: "#3d4751"
              },
              children: [!_v59 && (0, _v1.jsx)(_v10.MenuItem, {
                onClick: _v69,
                children: (0, _v18.translate)({
                  singular: "View",
                  dictionary: {
                    es: {
                      singular: "Ver"
                    },
                    "de-DE": {
                      singular: "Anzeigen"
                    },
                    "fr-FR": {
                      singular: "Voir"
                    },
                    "ja-JP": {
                      singular: "見る"
                    },
                    "ko-KR": {
                      singular: "보기"
                    },
                    "pt-BR": {
                      singular: "Ver"
                    },
                    "zh-CN": {
                      singular: "查看"
                    }
                  }
                })
              }), _v28 && !_v59 && (0, _v1.jsx)(_v10.MenuItem, {
                onClick: () => void (_v75(!0), _v22 && (0, _v28.bpStartRestoreVersion)({
                  videoId: _v12,
                  viewer: _v32,
                  currentVersion: _v21,
                  chosenVersion: _v62,
                  analyticsProps: _v22
                })),
                children: (0, _v18.translate)({
                  singular: "Restore",
                  dictionary: {
                    es: {
                      singular: "Restaurar"
                    },
                    "de-DE": {
                      singular: "Wiederherstellen"
                    },
                    "fr-FR": {
                      singular: "Réinstaurer"
                    },
                    "ja-JP": {
                      singular: "復元"
                    },
                    "ko-KR": {
                      singular: "복원"
                    },
                    "pt-BR": {
                      singular: "Restaure"
                    },
                    "zh-CN": {
                      singular: "恢复"
                    }
                  }
                })
              }), _v27 && !_v60 && (0, _v1.jsx)(_v10.MenuItem, {
                isDisabled: _v61,
                onClick: () => {
                  _v18(!1), _v44(!0);
                },
                children: (0, _v18.translate)({
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
              }), _v29 && (0, _v1.jsx)(_v10.MenuItem, {
                onClick: () => _v70(),
                children: (0, _v18.translate)({
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
          })
        })]
      }, _v3), _v5 && _v6 && (0, _v1.jsx)(_v42.VersionsSkeleton, {
        width: `${_v20}px`
      }), (0, _v1.jsx)(_v40, {
        fileName: [_v41.VERSION_TYPE_VIMEO_CREATE, _v41.VERSION_TYPE_VIMEO_RECORD].includes(_v14) ? "" : _v1,
        versionLabel: _v62,
        isDeleteApiInProgress: _v55,
        isOpen: _v41,
        onDelete: () => {
          _v48 ? _v53(_v12, _v45, {
            headers: {
              Accept: _v29.API_ACCEPT_HEADER
            }
          }).then(() => {
            _v42(!1), _v31.close(_v72.current), _v72.current = _v31({
              title: (0, _v18.translate)({
                singular: "{versionNumber} deleted",
                replacements: {
                  versionNumber: _v64
                },
                dictionary: {
                  es: {
                    singular: "{versionNumber} eliminado"
                  },
                  "de-DE": {
                    singular: "{versionNumber} gelöscht"
                  },
                  "fr-FR": {
                    singular: "{versionNumber} supprimée"
                  },
                  "ja-JP": {
                    singular: "{versionNumber} が削除されました"
                  },
                  "ko-KR": {
                    singular: "{versionNumber}이 삭제되었습니다"
                  },
                  "pt-BR": {
                    singular: "{versionNumber} excluído"
                  },
                  "zh-CN": {
                    singular: "{versionNumber} 已删除"
                  }
                }
              }),
              duration: _v30.TOAST_DURATION,
              isClosable: !1
            }), _v56(_v11), _v46(), _v22 && (0, _v28.bpDeleteVersion)({
              videoId: _v12,
              viewer: _v32,
              currentVersion: _v21,
              chosenVersion: _v62,
              analyticsProps: _v22
            });
          }).catch(() => _v42(!1)) : _v49({
            where: {
              videoId: _v12,
              versionId: _v45
            },
            headers: {
              Accept: _v29.API_ACCEPT_HEADER
            }
          }).then(() => {
            _v42(!1);
          });
        },
        onCancel: () => _v42(!1)
      }), !_v61 && (0, _v1.jsx)(_v31.DownloadVersionModal, {
        isOpen: _v43,
        onClose: () => _v44(!1),
        videoId: _v12,
        downloadConfig: _v17,
        versionSequenceNumber: _v19 ?? 1,
        versionUri: _v11,
        pageName: _v22?.webContextFields?.page_name
      }), (0, _v1.jsx)(_v32.RestoreConfirmationModal, {
        isOpen: _v74,
        onClose: () => _v75(!1),
        onRestoreVersion: () => {
          (_v22 && (0, _v28.bpRestoreVersion)({
            videoId: _v12,
            viewer: _v32,
            currentVersion: _v21,
            chosenVersion: _v62,
            analyticsProps: _v22
          }), _v48) ? _v80(_v12, _v45, {
            headers: {
              Accept: _v29.API_ACCEPT_HEADER
            }
          }).then(_v0 => {
            _v75(!1), _v57(_v0), _v25?.(!1, _v0.configUrl), _v24?.(), _v31({
              title: (0, _v18.translate)({
                singular: "Version restored",
                dictionary: {
                  es: {
                    singular: "Versión restaurada"
                  },
                  "de-DE": {
                    singular: "Version wiederhergestellt"
                  },
                  "fr-FR": {
                    singular: "Version restaurée"
                  },
                  "ja-JP": {
                    singular: "バージョンを復元しました"
                  },
                  "ko-KR": {
                    singular: "버전이 복원되었습니다."
                  },
                  "pt-BR": {
                    singular: "Versão restaurada"
                  },
                  "zh-CN": {
                    singular: "版本已恢复"
                  }
                }
              }),
              duration: _v30.TOAST_DURATION,
              isClosable: !1
            });
          }).catch(() => {
            _v31({
              title: (0, _v18.translate)({
                singular: "Unable to restore",
                dictionary: {
                  es: {
                    singular: "No se puede restaurar"
                  },
                  "de-DE": {
                    singular: "Wiederherstellung nicht möglich"
                  },
                  "fr-FR": {
                    singular: "Restauration impossible"
                  },
                  "ja-JP": {
                    singular: "復元できません"
                  },
                  "ko-KR": {
                    singular: "복원할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "Não foi possível restaurar"
                  },
                  "zh-CN": {
                    singular: "无法恢复"
                  }
                }
              }),
              duration: _v30.TOAST_DURATION,
              isClosable: !1,
              variant: "warning"
            });
          }) : _v76(_v12, _v45).then(() => {
            _v75(!1), _v24?.();
          });
        },
        isRestoreApiInProgress: _v82
      })]
    });
  });
  _v0.s(["VersionListItem", 0, _v43], 0);
  var _v44 = _v0.i(0);
  _v0.s(["useGetVersionsHook", 0, (_v0, _v1, _v2) => {
    let [_v3, _v4] = (0, _v2.useState)(void 0),
      {
        versionList: _v5,
        addVersions: _v6,
        resetVersions: _v7
      } = (0, _v23.useVersionsStore)(_v0 => ({
        versionList: _v0.versionList,
        addVersions: _v0.addVersions,
        resetVersions: _v0.resetVersions
      })),
      {
        data: _v8,
        isLoading: _v9
      } = (0, _v44.useGetVideoVersions)(() => {
        if (!_v0 || _v1 && void 0 === _v3) return null;
        let _v0 = (0, _v30.getReviewPasswordHashFromCookie)(_v2);
        return {
          where: {
            videoId: _v0
          },
          select: _v29.VIDEO_VERSION_FIELDS,
          query: {
            perPage: 5,
            includeDeletedVersions: !0,
            beforeVersionId: _v3 ?? void 0,
            fetchOnlyCompletedVersions: !0,
            reviewId: _v2,
            password: _v0
          },
          headers: {
            Accept: _v29.API_ACCEPT_HEADER
          }
        };
      }, {
        revalidateOnFocus: !1
      });
    (0, _v2.useEffect)(() => {
      let _v0 = (0, _v30.videoIdFromUri)(_v5.at(0)?.uri);
      _v0 && _v0 && _v0 !== _v0 && (_v7(), _v4(void 0));
    }, [_v0, _v7, _v5]);
    let _v10 = _v8?.data,
      _v11 = (0, _v2.useMemo)(() => (0, _v30.idFromUri)(_v5.at(-1)?.uri), [_v5]),
      _v12 = (0, _v2.useMemo)(() => (0, _v30.idFromUri)(_v10?.at(-1)?.uri), [_v10]);
    return (0, _v2.useEffect)(() => {
      _v10 && (0 === _v5.length || _v12 < _v11) && _v6(_v10);
    }, [_v5, _v12, _v11, _v6, _v10]), {
      versions: _v5,
      isLoading: _v9,
      isLoadingMoreVersion: _v9 && !!_v3,
      loadMoreVersions: () => {
        let _v0 = (0, _v30.idFromUri)(_v5.at(-1)?.uri);
        _v3 !== _v0 && _v4(_v0);
      },
      canLoadMore: !!_v8?.paging.next
    };
  }], 0), _v0.s(["useInfiniteScrollVersion", 0, function (_v0, _v1) {
    let _v2 = (0, _v2.useRef)(null);
    return [(0, _v2.useCallback)(_v0 => {
      _v0 && (_v2.current && _v2.current.disconnect(), _v2.current = new IntersectionObserver(_v0 => {
        _v0[0].isIntersecting && _v0 && _v1();
      }), _v0 && _v2.current.observe(_v0));
    }, [_v0, _v1])];
  }], 0);
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  let _v47 = ["upload_complete", "unknown", "starting", "finishing", "active", "pending", "standby"];
  _v0.s(["useReplace", 0, (_v0, _v1) => {
    let _v2 = (0, _v24.useViewer)(),
      {
        data: _v3,
        isLoading: _v4
      } = (0, _v45.useGetVideo)(() => !_v2 || _v1 ? null : {
        where: {
          videoId: _v0
        },
        select: ["metadata.canBeReplaced", "metadata.interactions.edit.uri", "user.uploadQuota.lifetime", "user.uploadQuota.periodic"],
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      }),
      {
        data: _v5,
        isLoading: _v6
      } = (0, _v46.useGetVideoStatus)(() => !_v2 || _v1 ? null : {
        where: {
          videoId: _v0
        },
        select: ["state"]
      }),
      _v7 = !!_v3?.metadata?.interactions?.edit?.uri;
    return {
      replaceEnabled: _v3 && _v3.metadata.canBeReplaced && _v5 && !(_v5?.state && _v47.includes(_v5?.state)) && _v7,
      userQuota: _v3?.user?.uploadQuota,
      isLoading: _v4 || _v6
    };
  }], 0);
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  _v0.s(["ConfirmUploadModal", 0, ({
    onCancel: _v0,
    onConfirm: _v1,
    isOpen: _v2 = !1,
    fileName: _v3,
    isLoading: _v4 = !1
  }) => (0, _v1.jsxs)(_v34.Modal, {
    isOpen: _v2,
    onClose: _v0,
    children: [(0, _v1.jsx)(_v39.ModalOverlay, {}), (0, _v1.jsxs)(_v36.ModalContent, {
      maxW: (0, _v49.rem)(480),
      children: [(0, _v1.jsx)(_v38.ModalHeader, {
        children: (0, _v18.translate)({
          singular: "Create new version",
          dictionary: {
            es: {
              singular: "Crear nueva versión"
            },
            "de-DE": {
              singular: "Neue Version erstellen"
            },
            "fr-FR": {
              singular: "Créer une nouvelle version"
            },
            "ja-JP": {
              singular: "新しいバージョンを作成"
            },
            "ko-KR": {
              singular: "새 버전을 생성하세요."
            },
            "pt-BR": {
              singular: "Criar nova versão"
            },
            "zh-CN": {
              singular: "创建新版本"
            }
          }
        })
      }), (0, _v1.jsx)(_v35.ModalBody, {
        children: (0, _v1.jsx)(_v48.Flex, {
          flexDirection: "column",
          gap: 200,
          children: (0, _v1.jsx)(_v12.Text, {
            variant: "body-md",
            children: _v3 ? (0, _v18.translate)({
              singular: "{BOLD}{FILENAME}{/BOLD} will replace this video on vimeo.com and anywhere the video is embedded. Analytics, viewer comments, and likes will not be affected.",
              replacements: {
                FILENAME: _v3,
                BOLD: _v0 => (0, _v1.jsx)("b", {
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "{BOLD}{FILENAME}{/BOLD} reemplazará este video en vimeo.com y en cualquier lugar donde esté insertado. Los análisis, los comentarios de los espectadores y los me gusta no se verán afectados."
                },
                "de-DE": {
                  singular: "{BOLD}{FILENAME}{/BOLD} wird dieses Video auf vimeo.com und überall dort ersetzen, wo es eingebettet ist. Analysen, Kommentare von Zuschauenden und Likes sind davon nicht betroffen."
                },
                "fr-FR": {
                  singular: "{BOLD}{FILENAME}{/BOLD} remplacera cette vidéo sur vimeo.com et partout où la vidéo est intégrée. Cela n'aura aucun effet sur les statistiques, les commentaires des spectateurs et les mentions « J'aime »."
                },
                "ja-JP": {
                  singular: "{BOLD}{FILENAME}{/BOLD}により、vimeo.comおよび動画が埋め込まれているすべての場所でこの動画が置き換えられます。分析、視聴者のコメント、いいねには影響しません。"
                },
                "ko-KR": {
                  singular: "vimeo.com과 동영상이 임베드된 모든 곳에서 이 동영상이 {BOLD}{FILENAME}{/BOLD}(으)로 대체됩니다. 분석, 시청자 의견 및 좋아요는 영향을 받지 않습니다."
                },
                "pt-BR": {
                  singular: "{BOLD}{FILENAME}{/BOLD} substituirá este vídeo em vimeo.com e em qualquer lugar onde ele esteja incorporado. As análises, os comentários dos espectadores e as curtidas não serão afetados."
                },
                "zh-CN": {
                  singular: "{BOLD}{FILENAME}{/BOLD} 将替换在 vimeo.com 上以及视频嵌入的任何位置的该视频。分析、观众评论和点赞将不会受到影响。"
                }
              }
            }) : (0, _v18.translate)({
              singular: "This action will replace this video on vimeo.com and anywhere the video is embedded. Analytics, viewer comments, and likes will not be affected.",
              dictionary: {
                es: {
                  singular: "Esta acción reemplazará este video en vimeo.com y en cualquier sitio donde esté insertado. Los análisis, los comentarios de los espectadores y los me gusta no se verán afectados."
                },
                "de-DE": {
                  singular: "Mit dieser Aktion wird dieses Video auf vimeo.com und überall dort ersetzt, wo es eingebettet ist. Analysen, Kommentare von Zuschauenden und Likes sind davon nicht betroffen."
                },
                "fr-FR": {
                  singular: "Cette action remplacera cette vidéo sur vimeo.com et partout où la vidéo est intégrée. Cela n'aura aucun effet sur les statistiques, les commentaires des spectateurs et les mentions « J'aime »."
                },
                "ja-JP": {
                  singular: "この操作により、vimeo.comおよび動画が埋め込まれているすべての場所でこの動画が置き換えられます。分析、視聴者のコメント、いいねには影響しません。"
                },
                "ko-KR": {
                  singular: "이 작업을 진행하면 vimeo.com과 동영상이 임베드된 모든 곳에서 이 동영상이 대체됩니다. 분석, 시청자 의견 및 좋아요는 영향을 받지 않습니다."
                },
                "pt-BR": {
                  singular: "Esta ação substituirá este vídeo em vimeo.com e em qualquer lugar onde ele esteja incorporado. As análises, os comentários dos espectadores e as curtidas não serão afetados."
                },
                "zh-CN": {
                  singular: "此操作将替换 vimeo.com 上以及视频嵌入的任何位置的该视频。分析、观众评论和点赞将不会受到影响。"
                }
              }
            })
          })
        })
      }), (0, _v1.jsxs)(_v37.ModalFooter, {
        children: [(0, _v1.jsx)(_v33.Button, {
          isDisabled: _v4,
          size: "md",
          variant: "tertiary",
          onClick: _v0,
          children: (0, _v18.translate)({
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
          size: "md",
          variant: "primary",
          onClick: _v1,
          isLoading: _v4,
          children: (0, _v18.translate)({
            singular: "Create",
            dictionary: {
              es: {
                singular: "Crear"
              },
              "de-DE": {
                singular: "Erstellen"
              },
              "fr-FR": {
                singular: "Créer"
              },
              "ja-JP": {
                singular: "作成"
              },
              "ko-KR": {
                singular: "만들기"
              },
              "pt-BR": {
                singular: "Criar"
              },
              "zh-CN": {
                singular: "创建"
              }
            }
          })
        })]
      })]
    })]
  })], 0), _v0.s(["isFileSizeWithinQuota", 0, (_v0, _v1, _v2, _v3 = 0) => {
    if (!_v1) return !0;
    let _v4 = !1 === _v2 ? _v0 - _v3 : _v0,
      _v5 = _v1.lifetime?.free,
      _v6 = _v1.periodic?.free;
    return !("number" == typeof _v6 && _v4 > _v6) && !("number" == typeof _v5 && _v4 > _v5);
  }], 0);
}