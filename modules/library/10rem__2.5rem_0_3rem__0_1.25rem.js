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
    _v69 = _v0.i(0);
  let _v70 = ({
      layout: _v0,
      isLoading: _v1,
      onLoadMore: _v2
    }) => {
      let _v3 = (0, _v4.useRef)(null),
        _v4 = (0, _v69.useOnScreen)(_v3);
      return ((0, _v4.useEffect)(() => {
        _v4 && !_v1 && _v2();
      }, [_v1, _v4, _v2]), _v0 === _v43.LAYOUT.LIST) ? (0, _v1.jsx)(_v66.Box, {
        height: "10rem",
        ref: _v3,
        children: (0, _v1.jsx)(_v68.LoadingStateList, {})
      }) : (0, _v1.jsx)(_v66.Box, {
        height: "10rem",
        ref: _v3
      });
    },
    _v71 = _v0 => {
      let {
        layout: _v1,
        isLoadingMore: _v2,
        canLoadMore: _v3 = !1,
        onActivate: _v4,
        isDropzoneEnabled: _v5 = !1,
        page: _v6 = ""
      } = _v0;
      return _v3 ? (0, _v1.jsx)(_v70, {
        layout: _v1,
        isLoading: _v2,
        onLoadMore: _v4
      }) : _v5 && !_v2 ? (0, _v1.jsx)(_v67.UploadDropzoneHint, {
        page: _v6
      }) : (0, _v1.jsx)(_v66.Box, {
        margin: "2.5rem 0 3rem",
        padding: "0 1.25rem"
      });
    };
  var _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  let _v80 = (0, _v78.default)(() => _v0.A(0).then(_v0 => _v0.FolderSettingsModal), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v81 = (0, _v4.createContext)({
      setModalContextState: () => console.log("noop")
    }),
    _v82 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v4.useState)({
          activeModal: null,
          activeModalState: null
        }),
        _v3 = (0, _v4.useContext)(_v79.ViewerContext),
        _v4 = _v3?.teamUser?.ownerId ?? _v3?.user?.id,
        {
          activeModal: _v5,
          activeModalState: _v6
        } = _v1;
      return (0, _v1.jsxs)(_v81.Provider, {
        value: {
          setModalContextState: _v2
        },
        children: [_v0, "FolderSettings" === _v5 && _v4 && (0, _v1.jsx)(_v80, {
          closeModal: () => _v2({
            activeModal: null,
            activeModalState: null
          }),
          currentFolderUri: null,
          isOpen: !0,
          location: _v6.location,
          parentFolderUri: null,
          userId: _v4
        })]
      });
    },
    _v83 = (0, _v4.lazy)(() => _v0.A(0).then(({
      TeamSwitcherDropzone: _v0
    }) => ({
      default: _v0
    }))),
    _v84 = ({
      owner: _v0,
      set360SourceType: _v1,
      threeSixtyType: _v2
    }) => {
      let {
          setModalContextState: _v3
        } = (0, _v4.useContext)(_v81),
        _v4 = (0, _v76.useTeamUploadClipProperties)(_v0.id);
      return (0, _v1.jsx)(_v5.Flex, {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        children: (0, _v1.jsx)(_v4.Suspense, {
          fallback: (0, _v1.jsx)(_v66.Box, {
            paddingTop: "25vh",
            children: (0, _v1.jsx)(_v73.Spinner, {
              size: "xl"
            })
          }),
          children: (0, _v1.jsxs)(_v66.Box, {
            maxWidth: "100%",
            width: "100%",
            children: [(0, _v1.jsx)(_v83, {
              uploadClipProperties: _v4,
              uploadType: "UPLOAD",
              owner: _v0,
              selectedFolderId: null,
              selectedFolder: null,
              libraryEmptyStateContent: (0, _v1.jsxs)(_v5.Flex, {
                flexDirection: "column",
                alignItems: "center",
                children: [(0, _v1.jsx)(_v75.TeamLibrary, {
                  width: (0, _v72.rem)(64),
                  height: (0, _v72.rem)(64)
                }), (0, _v1.jsx)(_v74.Text, {
                  variant: "heading-lg",
                  margin: `${(0, _v72.rem)(16)} 0`,
                  children: (0, _v12.translate)({
                    singular: "Add content to share with your team",
                    dictionary: {
                      es: {
                        singular: "Agregue contenido para compartirlo con su equipo"
                      },
                      "de-DE": {
                        singular: "Fügen Sie Inhalte hinzu, um sie mit Ihrem Team zu teilen"
                      },
                      "fr-FR": {
                        singular: "Ajoutez du contenu afin de le partager avec votre équipe"
                      },
                      "ja-JP": {
                        singular: "チームで共有するコンテンツを追加"
                      },
                      "ko-KR": {
                        singular: "팀과 공유할 콘텐츠를 추가하세요."
                      },
                      "pt-BR": {
                        singular: "Adicione conteúdo para compartilhar com sua equipe"
                      },
                      "zh-CN": {
                        singular: "添加内容以与团队共享"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v66.Box, {
                  width: "65%",
                  children: (0, _v1.jsx)(_v74.Text, {
                    variant: "body-lg",
                    color: "text-secondary",
                    textAlign: "center",
                    children: (0, _v12.translate)({
                      singular: "Create a folder or drop videos to upload",
                      dictionary: {
                        es: {
                          singular: "Cree una carpeta o suelte los videos para subirlos"
                        },
                        "de-DE": {
                          singular: "Erstellen Sie einen Ordner oder ziehen Sie Videos zum Hochladen hierher"
                        },
                        "fr-FR": {
                          singular: "Créez un dossier ou glissez-déposez des vidéos pour les mettre en ligne"
                        },
                        "ja-JP": {
                          singular: "フォルダーを作成するか動画をドロップしてアップロード"
                        },
                        "ko-KR": {
                          singular: "폴더를 만들거나 업로드할 동영상을 끌어다 놓으세요."
                        },
                        "pt-BR": {
                          singular: "Crie uma pasta ou carregue um vídeo"
                        },
                        "zh-CN": {
                          singular: "创建文件夹或拖放视频以上传"
                        }
                      }
                    })
                  })
                })]
              }),
              onNewFolderOpen: () => {
                _v3({
                  activeModal: "FolderSettings",
                  activeModalState: {
                    location: "empty_state"
                  }
                });
              }
            }), (0, _v1.jsx)(_v77.EmptyStateDropzoneFooter, {
              set360SourceType: _v1,
              threeSixtyType: _v2
            })]
          })
        })
      });
    };
  var _v85 = _v0.i(0),
    _v86 = _v0.i(0);
  let _v87 = ({
    cta: _v0,
    header: _v1,
    icon: _v2,
    subheader: _v3
  }) => (0, _v1.jsxs)(_v5.Flex, {
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
    children: [_v2, (0, _v1.jsxs)(_v5.Flex, {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      margin: `${(0, _v72.rem)(16)} 0`,
      gap: "md",
      children: ["string" == typeof _v1 ? (0, _v1.jsx)(_v85.Header, {
        size: "lg",
        children: _v1
      }) : _v1, "string" == typeof _v3 ? (0, _v1.jsx)(_v86.Paragraph, {
        size: "lg",
        color: "text-secondary",
        marginBottom: "0",
        children: _v3
      }) : _v3]
    }), _v0]
  });
  _v87.SubheaderText = ({
    children: _v0
  }) => (0, _v1.jsx)(_v86.Paragraph, {
    size: "lg",
    color: "text-secondary",
    marginBottom: "0",
    children: _v0
  });
  let _v88 = ({
    isContributor: _v0 = !1
  }) => (0, _v1.jsx)(_v87, {
    header: (0, _v12.translate)({
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
    icon: (0, _v1.jsx)(_v75.TeamLibrary, {
      width: "64px",
      height: "64px"
    }),
    subheader: _v0 ? (0, _v12.translate)({
      singular: "Trying to add team content? Upload to My library and share with an admin.",
      dictionary: {
        es: {
          singular: "¿Intenta agregar contenido del equipo? Súbalo a Mi biblioteca y compártalo con un administrador."
        },
        "de-DE": {
          singular: "Versuchen Sie, Teaminhalte hinzuzufügen? In „Meine Bibliothek“ hochladen und mit einem Administrator teilen."
        },
        "fr-FR": {
          singular: "Vous essayez d'ajouter du contenu concernant votre équipe ? Téléchargez-le dans Ma bibliothèque et partagez-le avec un administrateur."
        },
        "ja-JP": {
          singular: "チームコンテンツを追加しようとしていますか？マイライブラリにアップロードして、管理者と共有してください。"
        },
        "ko-KR": {
          singular: "팀 콘텐츠를 추가하려 하시나요? 내 라이브러리에 업로드하고 관리자와 공유하세요."
        },
        "pt-BR": {
          singular: "Tentando adicionar conteúdo para a equipe? Carregue em Minha biblioteca e compartilhe com um administrador."
        },
        "zh-CN": {
          singular: "尝试添加团队内容？上传到我的视频库并与管理员共享。"
        }
      }
    }) : (0, _v12.translate)({
      singular: "No team content has been added yet",
      dictionary: {
        es: {
          singular: "Aún no se ha agregado ningún contenido del equipo"
        },
        "de-DE": {
          singular: "Es wurden noch keine Teaminhalte hinzugefügt"
        },
        "fr-FR": {
          singular: "Aucun contenu d'équipe n'a été ajouté"
        },
        "ja-JP": {
          singular: "チームコンテンツはまだ追加されていません"
        },
        "ko-KR": {
          singular: "아직 팀 콘텐츠가 추가되지 않았습니다."
        },
        "pt-BR": {
          singular: "Nenhum conteúdo de equipe foi adicionado ainda"
        },
        "zh-CN": {
          singular: "尚未添加团队内容"
        }
      }
    })
  });
  var _v89 = _v0.i(0);
  let _v90 = () => (0, _v1.jsx)(_v87, {
    icon: (0, _v1.jsx)(_v89.SearchMagnifier, {
      width: "lg",
      height: "lg",
      color: "text-primary"
    }),
    header: (0, _v12.translate)({
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
    subheader: (0, _v12.translate)({
      singular: "Try different filters",
      dictionary: {
        es: {
          singular: "Pruebe diferentes filtros"
        },
        "de-DE": {
          singular: "Verschiedene Filter ausprobieren"
        },
        "fr-FR": {
          singular: "Veuillez essayer différents filtres"
        },
        "ja-JP": {
          singular: "さまざまなフィルターを試す"
        },
        "ko-KR": {
          singular: "다른 필터를 사용해보세요."
        },
        "pt-BR": {
          singular: "Tente filtros diferentes"
        },
        "zh-CN": {
          singular: "尝试不同的过滤器"
        }
      }
    })
  });
  var _v91 = _v0.i(0);
  let _v92 = () => {
    let {
        setModalContextState: _v0
      } = (0, _v4.useContext)(_v81),
      _v1 = (0, _v4.useContext)(_v79.ViewerContext),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      {
        capabilities: _v3
      } = (0, _v8.useCapability)(["hasContentSpaceEnabled"], _v2),
      {
        trackLibraryNewFolderClicked: _v4
      } = (0, _v18.useLibraryTracking)();
    return (0, _v1.jsx)(_v91.NewFolderButton, {
      onClick: () => {
        _v4({
          libraryType: (0, _v19.deriveLibraryType)({
            hasContentSpaceEnabled: !!_v3.hasContentSpaceEnabled
          })
        }), _v0({
          activeModal: "FolderSettings",
          activeModalState: {
            location: "library_header"
          }
        });
      },
      dataTestId: "library-header-new-folder-button",
      dataTestIdMobile: "library-header-new-folder-button-mobile",
      dataId: "vl_library-header-new-folder-button",
      dataIdMobile: "vl_library-header-new-folder-button-mobile"
    });
  };
  var _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0);
  let _v96 = _v0 => _v0.replace("users", "user").replace("projects", "folder");
  var _v97 = _v0.i(0),
    _v98 = _v0.i(0),
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
    _v124 = _v0.i(0);
  (0, _v12.translate)({
    singular: "This video has been deleted.",
    dictionary: {
      es: {
        singular: "Se ha eliminado este video."
      },
      "de-DE": {
        singular: "Dieses Video wurde gelöscht"
      },
      "fr-FR": {
        singular: "Cette vidéo a été supprimée."
      },
      "ja-JP": {
        singular: "この動画は削除されました。"
      },
      "ko-KR": {
        singular: "이 동영상은 삭제되었습니다."
      },
      "pt-BR": {
        singular: "Este vídeo foi excluído"
      },
      "zh-CN": {
        singular: "此视频已删除。"
      }
    }
  }), (0, _v12.translate)({
    singular: "This video couldn’t be deleted. Please try again.",
    dictionary: {
      es: {
        singular: "No se pudo eliminar este video. Vuelve a intentarlo."
      },
      "de-DE": {
        singular: "Dieses Video konnte nicht gelöscht werden. Bitte versuche es erneut."
      },
      "fr-FR": {
        singular: "Impossible de supprimer cette vidéo. Veuillez réessayer."
      },
      "ja-JP": {
        singular: "この動画は削除できませんでした。再度お試しください。"
      },
      "ko-KR": {
        singular: "이 동영상을 삭제할 수 없었습니다. 다시 시도하세요."
      },
      "pt-BR": {
        singular: "Não foi possível excluir o vídeo. Por favor, tente novamente."
      },
      "zh-CN": {
        singular: "此视频无法删除。请重试。"
      }
    }
  }), (0, _v12.translate)({
    singular: "Embed code copied",
    dictionary: {
      es: {
        singular: "Se copió el código de inserción"
      },
      "de-DE": {
        singular: "Einbettungscode kopiert"
      },
      "fr-FR": {
        singular: "Code d'intégration copié"
      },
      "ja-JP": {
        singular: "埋め込みコードがコピーされました"
      },
      "ko-KR": {
        singular: "임베드 코드를 복사했습니다"
      },
      "pt-BR": {
        singular: "Código de incorporação copiado"
      },
      "zh-CN": {
        singular: "嵌入代码已复制"
      }
    }
  }), (0, _v12.translate)({
    singular: "Link copied",
    dictionary: {
      es: {
        singular: "Vínculo copiado"
      },
      "de-DE": {
        singular: "Link kopiert"
      },
      "fr-FR": {
        singular: "Lien copié"
      },
      "ja-JP": {
        singular: "リンクがコピーされました"
      },
      "ko-KR": {
        singular: "링크가 복사됐습니다"
      },
      "pt-BR": {
        singular: "Link copiado"
      },
      "zh-CN": {
        singular: "链接已复制"
      }
    }
  }), (0, _v12.translate)({
    singular: "Link failed to copy",
    dictionary: {
      es: {
        singular: "No se pudo copiar el enlace"
      },
      "de-DE": {
        singular: "Link wurde nicht kopiert"
      },
      "fr-FR": {
        singular: "Impossible de copier le lien"
      },
      "ja-JP": {
        singular: "リンクをコピーできませんでした"
      },
      "ko-KR": {
        singular: "링크 복사를 실패했습니다"
      },
      "pt-BR": {
        singular: "Falha ao copiar o link"
      },
      "zh-CN": {
        singular: "链接复制失败"
      }
    }
  }), (0, _v12.translate)({
    singular: "Public",
    dictionary: {
      es: {
        singular: "Público"
      },
      "de-DE": {
        singular: "Öffentlich"
      },
      "ja-JP": {
        singular: "一般公開"
      },
      "ko-KR": {
        singular: "공개"
      },
      "pt-BR": {
        singular: "Público"
      },
      "zh-CN": {
        singular: "公开"
      }
    }
  }), (0, _v12.translate)({
    singular: "Hide from Vimeo",
    dictionary: {
      es: {
        singular: "Ocultar de Vimeo"
      },
      "de-DE": {
        singular: "Bei Vimeo ausblenden"
      },
      "fr-FR": {
        singular: "Masquer dans Vimeo"
      },
      "ja-JP": {
        singular: "Vimeoで非表示にする"
      },
      "ko-KR": {
        singular: "Vimeo에서 숨기기"
      },
      "pt-BR": {
        singular: "Ocultar do Vimeo"
      },
      "zh-CN": {
        singular: "从 Vimeo 隐藏"
      }
    }
  }), (0, _v12.translate)({
    singular: "Private",
    dictionary: {
      es: {
        singular: "Privado"
      },
      "de-DE": {
        singular: "Privat"
      },
      "fr-FR": {
        singular: "Privé"
      },
      "ja-JP": {
        singular: "プライベート"
      },
      "ko-KR": {
        singular: "비공개"
      },
      "pt-BR": {
        singular: "Privado"
      },
      "zh-CN": {
        singular: "私密"
      }
    }
  }), (0, _v12.translate)({
    singular: "Password",
    dictionary: {
      es: {
        singular: "Contraseña"
      },
      "de-DE": {
        singular: "Kennwort"
      },
      "fr-FR": {
        singular: "Mot de passe "
      },
      "ja-JP": {
        singular: "パスワード"
      },
      "ko-KR": {
        singular: "비밀번호"
      },
      "pt-BR": {
        singular: "Senha"
      },
      "zh-CN": {
        singular: "密码"
      }
    }
  }), (0, _v12.translate)({
    singular: "Unlisted",
    dictionary: {
      es: {
        singular: "Sin listar"
      },
      "de-DE": {
        singular: "Nicht gelistet"
      },
      "fr-FR": {
        singular: "Non répertorié"
      },
      "ja-JP": {
        singular: "限定公開"
      },
      "ko-KR": {
        singular: "일부 공개"
      },
      "pt-BR": {
        singular: "Não listado"
      },
      "zh-CN": {
        singular: "未公开发布"
      }
    }
  }), (0, _v12.translate)({
    singular: "VOD",
    dictionary: {
      "zh-CN": {
        singular: "视频点播"
      }
    }
  }), (0, _v12.translate)({
    singular: "People I follow",
    dictionary: {
      es: {
        singular: "Las personas que sigo"
      },
      "de-DE": {
        singular: "Leute, denen ich folge"
      },
      "fr-FR": {
        singular: "Les personnes que je suis"
      },
      "ja-JP": {
        singular: "自分がフォローしている人"
      },
      "ko-KR": {
        singular: "내가 팔로우하는 사람"
      },
      "pt-BR": {
        singular: "Pessoas que eu sigo"
      },
      "zh-CN": {
        singular: "我关注的人"
      }
    }
  }), (0, _v12.translate)({
    singular: "People I choose",
    dictionary: {
      es: {
        singular: "Las personas que elijo"
      },
      "de-DE": {
        singular: "Von mir ausgewählte Leute"
      },
      "fr-FR": {
        singular: "Personnes de mon choix"
      },
      "ja-JP": {
        singular: "選択した人のみ"
      },
      "ko-KR": {
        singular: "내가 선택한 사람"
      },
      "pt-BR": {
        singular: "Pessoas que eu escolher"
      },
      "zh-CN": {
        singular: "我选择的人"
      }
    }
  }), (0, _v12.translate)({
    singular: "Locked",
    dictionary: {
      es: {
        singular: "Bloqueado"
      },
      "de-DE": {
        singular: "Gesperrt"
      },
      "fr-FR": {
        singular: "Verrouillé"
      },
      "ja-JP": {
        singular: "ロック済み"
      },
      "ko-KR": {
        singular: "잠김"
      },
      "pt-BR": {
        singular: "Bloqueado"
      },
      "zh-CN": {
        singular: "已锁定"
      }
    }
  });
  let _v125 = _v0 => (0, _v12.translate)({
    singular: "{NUM_ITEMS} item",
    plural: "{NUM_ITEMS} items",
    count: _v0,
    replacements: {
      NUM_ITEMS: _v0
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
  });
  _v0.i(0);
  let _v126 = "header",
    _v127 = "video card",
    _v128 = _v0 => ({
      eventName: "vimeo.click",
      version: 91,
      fields: _v0,
      defaultEventFields: {
        third_party_integration: null
      },
      globalAnalyticsToInclude: ["page", "path"]
    }),
    _v129 = ({
      deselectItem: _v0,
      handleMoveItemsOnDrop: _v1,
      hasLibrarySidePanel: _v2,
      isEnterprise: _v3,
      items: _v4,
      libraryTitle: _v5,
      loadingFolderURIs: _v6 = new Set(),
      onCopyVideo: _v7,
      onFolderSettingsChange: _v8,
      onMoreInfo: _v9,
      onMoveFolderSuccess: _v10,
      onMoveFolderFailure: _v11,
      removeItem: _v12,
      selectedItemURIs: _v13,
      selectItem: _v14,
      setIsUploadDropzoneEnabled: _v15,
      sort: _v16,
      isLoading: _v17 = !1
    }) => {
      let _v18 = (0, _v102.useIsBokeh)(),
        _v19 = (0, _v4.useContext)(_v79.ViewerContext),
        {
          notifyItemMoveSuccess: _v20,
          notifyItemMoveToWorkspaceSuccess: _v21
        } = (0, _v38.useNotifications)(),
        _v22 = (0, _v26.useAnalyticsEvent)(),
        _v23 = _v107.BPAnalyticsV2.useContentManagamentHoverEvent(),
        _v24 = (0, _v110.usePageName)(),
        {
          getDisplayDate: _v25
        } = (0, _v117.useFormatDateTime)(),
        {
          settings: _v26
        } = (0, _v15.useOrionSettings)(),
        _v27 = _v19?.teamUser?.ownerId ?? _v19?.user?.id,
        _v28 = (0, _v76.useTeamUploadClipProperties)(_v27),
        {
          capabilities: _v29
        } = (0, _v8.useCapability)(["canSeeUpsellModalOnShare", "hasVideoReviewPageDemo", "hasMultipleReviewLinks", "hasContentSpaceEnabled"], _v27),
        _v30 = (0, _v19.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v29.hasContentSpaceEnabled
        }),
        {
          trackLibraryFolderOpened: _v31
        } = (0, _v18.useLibraryTracking)(),
        _v32 = !!_v29.canSeeUpsellModalOnShare,
        _v33 = !!_v29.hasVideoReviewPageDemo,
        _v34 = !!_v29.hasMultipleReviewLinks,
        {
          openVideoPrivacyModal: _v35
        } = (0, _v123.useVideoPrivacyModal)(),
        {
          revalidateRootItems: _v36
        } = (0, _v36.useRevalidate)(),
        _v37 = (0, _v124.useStorageLimitLockedVideoPaywall)(),
        _v38 = (0, _v6.useToast)(),
        _v39 = (0, _v3.useRouter)();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [!!_v4?.length && _v4.map((_v0, _v1) => {
          if (_v0.video) {
            let _v0 = _v0.video,
              _v1 = _v0.isSelected,
              _v2 = !!_v0.metadata?.interactions?.edit?.uri,
              _v3 = _v0.isColdStorage ?? !1,
              _v4 = !!_v0.canMoveToProject && !_v3,
              _v5 = _v3 ? "" : _v2 ? _v0.manageLink : _v0.link,
              _v6 = (0, _v113.getTimestampBySort)(_v16.type, _v0.lastUserActionEventDate ?? "", _v0.createdTime),
              _v7 = _v104.DEFAULT_PRIVACY_OPTIONS.find(_v0 => _v0.privacy === _v0.privacy?.view),
              _v8 = (0, _v120.getPrivacyTypeIconAndLabel)(_v0.privacy?.view, _v19?.teamUser, _v0.privacy?.originalView),
              _v9 = _v7 ? (0, _v105.getNewPrivacyCopy)("12px", _v19?.teamUser?.teamName, _v19?.teamUser?.isWorkspace)(_v7) : null,
              _v10 = _v3 ? {
                label: (0, _v12.translate)({
                  singular: "Locked",
                  dictionary: {
                    es: {
                      singular: "Bloqueado"
                    },
                    "de-DE": {
                      singular: "Gesperrt"
                    },
                    "fr-FR": {
                      singular: "Verrouillé"
                    },
                    "ja-JP": {
                      singular: "ロック済み"
                    },
                    "ko-KR": {
                      singular: "잠김"
                    },
                    "pt-BR": {
                      singular: "Bloqueado"
                    },
                    "zh-CN": {
                      singular: "已锁定"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v100.CircleExclamation, {
                  boxSize: "2xs",
                  color: "status-caution-primary"
                })
              } : _v26.privacy_settings_new_copy && _v9 ? {
                label: _v9.title,
                icon: _v9.icon
              } : _v8,
              _v11 = (0, _v122.isVideoMetadataLocked)(_v0),
              _v12 = () => _v37({
                location: "video_card",
                paywallTrigger: "cold_storage_video_card_locked_video_button"
              });
            return (0, _v1.jsx)(_v97.AnalyticsEventProvider, {
              eventData: {
                location: _v127,
                video_privacy: _v0.privacy?.view,
                video_id: String((0, _v109.idFromUri)(_v0.uri)),
                video_app_id: (0, _v109.idFromUri)(_v0.app?.uri) ? String((0, _v109.idFromUri)(_v0.app?.uri)) : null,
                is_video_password_protected: !!_v0.password,
                video_embed_privacy: _v0.privacy?.embed,
                team_owner_id: String((0, _v109.idFromUri)(_v0.user.uri)),
                team_subscription_type: _v0.user.account
              },
              children: (0, _v1.jsx)(_v111.FolderItemDragWrapper, {
                type: _v95.ITEM_TYPES.ROOT_VIDEO,
                uri: _v0.uri,
                parentFolderUri: "root",
                thumbnail: _v0.pictures.sizes[1].link,
                canDrag: _v4,
                isSelected: !!_v1,
                selectedItemURIs: _v13,
                onDrop: _v1,
                setIsUploadDropzoneEnabled: _v15,
                children: (0, _v1.jsx)(_v119.VideoCard, {
                  title: _v0.name,
                  subtitle: _v25(_v6),
                  href: _v5 ?? "",
                  isDefaultPicture: _v0.pictures?.defaultPicture,
                  thumbnailSrc: _v0.pictures?.sizes[3].link,
                  avatarSrc: _v0.uploader?.pictures?.sizes[1].link,
                  avatarName: _v0.uploader?.name,
                  tagText: (0, _v103.secondsToDisplay)(_v0.duration),
                  isSelectable: _v0.isSelectable,
                  titleStyles: {
                    maxWidth: _v43.CONTENT_CARD_TITLE_MAX_WIDTH
                  },
                  isSelected: _v1,
                  configUrl: _v0.configUrl ?? "",
                  clipId: (0, _v109.idFromUri)(_v0?.uri),
                  pageName: _v24,
                  isColdStorage: _v3,
                  lockedTooltipLabel: _v124.STORAGE_LIMIT_LOCKED_VIDEO_TOOLTIP_LABEL,
                  onLockedClick: _v3 ? _v12 : void 0,
                  onToggleSelected: () => {
                    _v22(_v128({
                      copy: `${_v13.size}`,
                      feature: _v106.AnalyticsFeatures.VIDEO_LIBRARY,
                      location: "video_card",
                      name: "select_item",
                      page: _v24,
                      target: _v0.isSelected ? "de-selected" : "selected",
                      type: "general",
                      target_path: null,
                      click_type: null,
                      device_type: null
                    })), _v0.isSelected ? _v0(_v0.uri, _v1, _v4) : _v14(_v0.uri, _v1, _v4);
                  },
                  hoverActions: (0, _v1.jsx)(_v116.HoverActions, {
                    type: "video",
                    entity: _v0,
                    canShare: !!(_v0.metadata?.interactions?.invite?.uri || _v32),
                    hasMoreInfo: _v2,
                    onMoreInfo: () => _v9(_v0.uri)
                  }),
                  actionsMenu: (0, _v1.jsx)(_v114.VideoMenu, {
                    video: _v0,
                    feature: _v106.AnalyticsFeatures.VIDEO_LIBRARY,
                    onCopyVideo: _v7 ? () => _v7(_v0) : void 0,
                    onMoreInfo: () => _v9(_v0.uri),
                    onMoveSuccess: ({
                      selectedDestination: _v0,
                      video: _v1,
                      destinationWorkspaceId: _v2,
                      destinationWorkspaceName: _v3
                    }) => {
                      if (_v0(_v1.uri, _v1, _v4), _v12?.(_v1.uri, "video"), _v2 && _v3) {
                        let _v0 = "root" === _v0 ? _v5 : _v0.name,
                          _v1 = "root" === _v0 ? "/library" : _v96(_v0.uri);
                        _v21(_v1.name, {
                          label: _v0,
                          workspaceName: _v3
                        }, () => {
                          _v19 && (0, _v93.switchTeam)(_v2, _v19.xsrft).finally(() => {
                            window.location.href = _v1;
                          });
                        });
                      } else "root" !== _v0 && _v20(_v1.name, {
                        label: _v0.name,
                        link: _v96(_v0.uri)
                      });
                    },
                    onDelete: () => {
                      _v0(_v0.uri, _v1, _v4), _v12?.(_v0.uri, "video"), _v22(_v106.VideoActionAnalytics.clickDeleteVideo({
                        live_event_id: null,
                        origin_folder_id: null,
                        origin_type: null,
                        is_my_videos: null,
                        location: _v127
                      }));
                    },
                    analytics: {
                      location: "card",
                      element: "ellipses"
                    },
                    vimeoClickAnalytics: {
                      location: "video_card"
                    },
                    hasMoreInfo: _v2,
                    hasReviewPageLinkUpsell: _v33,
                    hasUpsellInShareModal: _v32,
                    hasMultipleReviewLinks: _v34
                  }),
                  onClick: () => {
                    _v99.BigPictureClient.sendEvent(new _v99.Event("vimeo.click_video_card", 2, {
                      path: window.location.href,
                      entry_page: "team-library",
                      page: "team-library",
                      location: _v127,
                      video_id: String((0, _v109.idFromUri)(_v0.uri)),
                      video_privacy: _v0.privacy?.view,
                      video_embed_privacy: _v0.privacy?.embed,
                      is_preset_applied: null,
                      is_video_password_protected: !!_v0.password,
                      video_app_id: (0, _v109.idFromUri)(_v0.app?.uri) ? String((0, _v109.idFromUri)(_v0.app?.uri)) : null,
                      team_owner_id: String((0, _v109.idFromUri)(_v0.user.uri)),
                      team_size: _v19?.teamUser?.currentTeamSize ?? null,
                      team_subscription_type: _v19?.teamUser?.accountType ?? null,
                      actor_team_role: _v19?.teamUser?.plainTextPermissionLevel ?? null,
                      product: "Video Library",
                      video_type: null,
                      actor_resource_role: null,
                      target: null,
                      position_row: null,
                      position_column: null,
                      layout: "grid"
                    }));
                  },
                  onMouseEnter: () => {
                    _v23({
                      entityType: "video",
                      pageName: "video_library"
                    });
                  },
                  videoPrivacy: _v10,
                  privacyBadgeVariant: _v3 ? "coldStorage" : "default",
                  onPrivacyBadgeClick: _v3 ? _v12 : _v11 && _v2 && _v26.enable_privacy_badge_modal ? () => (0, _v121.showVideoMetadataLockedToast)({
                    toast: _v38,
                    router: _v39,
                    managePath: (0, _v121.getVideoManagePath)(_v0)
                  }) : _v2 && _v26.enable_privacy_badge_modal ? () => _v35({
                    videoId: (0, _v109.idFromUri)(_v0.uri),
                    videoName: _v0.name,
                    currentPrivacy: _v0.privacy?.view ?? "",
                    currentPassword: _v0.password ?? "",
                    onSuccess: () => _v36()
                  }) : void 0
                })
              })
            }, _v0.uri);
          }
          if (_v0.folder) {
            let _v0 = parseInt(_v0.folder.uri.split("/")?.[2]),
              _v1 = parseInt(_v0.folder.uri.split("/")[4]),
              _v2 = _v16.type === _v43.SORT_OPTION.CREATED ? _v0.folder.createdTime : _v0.folder.lastUserActionEventDate ?? _v0.folder.createdTime;
            return (0, _v1.jsx)(_v112.FolderDropWrapper, {
              dropTarget: _v0.folder,
              dropTargetType: _v95.DROP_TARGET_TYPES.FOLDER_CARD,
              allowedDropEffect: _v95.ALLOWED_DROP_EFFECTS.MOVE,
              dropFileForUploadConfig: null != _v27 ? {
                targetUserId: _v27,
                folderId: _v1,
                folderName: _v0.folder.name,
                uploadClipProperties: _v28
              } : void 0,
              children: _v18 ? (0, _v1.jsx)(_v118.DroppableFolderCard, {
                title: _v0.folder?.name,
                subtitle: _v25(_v2),
                folderId: _v1,
                folderOwnerId: _v0,
                tagText: _v125(_v0.folder.metadata?.connections?.items?.total),
                titleStyles: {
                  maxWidth: _v43.CONTENT_CARD_TITLE_MAX_WIDTH
                },
                href: _v96(_v0.folder.uri),
                backgroundColor: _v0.folder.settings?.color,
                hoverActions: (0, _v1.jsx)(_v116.HoverActions, {
                  type: "folder",
                  entity: _v0.folder
                }),
                pageName: _v24,
                actionsMenu: (0, _v1.jsx)(_v115.FolderMenu, {
                  folder: _v0.folder,
                  onSettingsChange: _v8,
                  onMoveSuccess: _v10,
                  onMoveFailure: _v11,
                  analytics: {
                    product: "Workflow",
                    feature: "video_library",
                    location: "folder_card"
                  },
                  libraryType: _v30
                }),
                onClick: () => {
                  _v99.BigPictureClient.sendEvent(new _v99.Event("vimeo.click_folder_card", 3, {
                    path: window.location.href,
                    entry_page: "team-library",
                    page: "team-library",
                    location: "folder card",
                    team_owner_id: String(_v0),
                    team_size: _v19?.teamUser?.currentTeamSize ?? null,
                    team_subscription_type: _v19?.teamUser?.accountType ?? null,
                    actor_team_role: _v19?.teamUser?.plainTextPermissionLevel ?? null,
                    product: "Video Library",
                    actor_resource_role: null,
                    folder_id: _v0.folder?.uri.split("/").pop() ?? null,
                    is_subfolder: null,
                    folder_share_status: null,
                    is_private_to_me: null,
                    parent_folder_id: null,
                    position_row: null,
                    position_column: null,
                    customizations: null,
                    layout: "grid"
                  })), _v31({
                    folderUri: _v0.folder?.uri,
                    isPrivateToUser: _v0.folder?.isPrivateToUser
                  });
                },
                onMouseEnter: () => {
                  _v23({
                    entityType: "folder",
                    pageName: "video_library"
                  });
                }
              }) : (0, _v1.jsx)(_v108.FolderCard, {
                id: `folder-card-${_v0.folder.uri?.split("/")?.pop()}`,
                folderOwnerId: _v0,
                onSettingsChange: _v8,
                isLoading: !!_v6 && _v6.has(_v0.folder.uri),
                headerSize: "6",
                subheaderSize: 100,
                baseUrl: _v19?.vimeoHttpsUrl || "",
                isEnterprise: _v3,
                ..._v0.folder
              }, _v0.folder.uri)
            }, _v0.folder.uri);
          }
          return (0, _v1.jsx)(_v1.Fragment, {});
        }), _v17 && (0, _v1.jsx)(_v101.LoadingCardsGrid, {})]
      });
    };
  function _v130({
    deselectItem: _v0,
    handleMoveItemsOnDrop: _v1,
    hasLibrarySidePanel: _v2,
    isEnterprise: _v3,
    items: _v4 = [],
    libraryTitle: _v5,
    loadingFolderURIs: _v6 = new Set(),
    onCopyVideo: _v7,
    onMoreInfo: _v8,
    onFolderSettingsChange: _v9,
    onMoveFolderSuccess: _v10,
    onMoveFolderFailure: _v11,
    removeItem: _v12,
    selectedItemURIs: _v13,
    selectItem: _v14,
    setIsUploadDropzoneEnabled: _v15,
    sort: _v16,
    isLoading: _v17 = !1
  }) {
    return (0, _v1.jsx)(_v97.AnalyticsEventProvider, {
      eventData: {
        location: "center",
        product: "Video Library",
        position_column: null
      },
      children: (0, _v1.jsx)(_v98.ContentGrid, {
        children: (0, _v1.jsx)(_v98.ContentGrid.Body, {
          children: (0, _v1.jsx)(_v129, {
            deselectItem: _v0,
            handleMoveItemsOnDrop: _v1,
            hasLibrarySidePanel: _v2,
            loadingFolderURIs: _v6,
            isEnterprise: _v3,
            items: _v4,
            libraryTitle: _v5,
            onCopyVideo: _v7,
            onFolderSettingsChange: _v9,
            onMoreInfo: _v8,
            onMoveFolderSuccess: _v10,
            onMoveFolderFailure: _v11,
            removeItem: _v12,
            selectedItemURIs: _v13,
            selectItem: _v14,
            setIsUploadDropzoneEnabled: _v15,
            sort: _v16,
            isLoading: _v17
          })
        })
      })
    });
  }
  var _v131 = _v0.i(0),
    _v132 = _v0.i(0),
    _v133 = _v0.i(0),
    _v134 = _v0.i(0),
    _v135 = _v0.i(0),
    _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0),
    _v140 = _v0.i(0),
    _v141 = _v0.i(0);
  let _v142 = ["video.allowedPrivacies", "video.app.uri", "video.canMoveToProject", "video.configUrl", "video.contentRatingClass", "video.createdTime", "video.customMetadata", "video.duration", "video.download.link", "video.download.type", "video.download.width", "video.download.height", "video.download.quality", "video.download.size", "video.download.publicName", "video.download.sizeShort", "video.embed.html", "video.embed.sentimentWidgets", "video.filesSize", "video.isColdStorage", "video.lastUserActionEventDate", "video.link", "video.manageLink", "video.metadata.canBeReplaced", "video.metadata.interactions.edit.uri", "video.metadata.interactions.delete.uri", "video.metadata.interactions.invite.uri", "video.metadata.interactions.legalHold.uri", "video.modifiedTime", "video.name", "video.pictures.defaultPicture", "video.pictures.uri", "video.pictures.sizes", "video.password", "video.privacy", "video.privacy.originalView", "video.regionalPrivacies", "video.releaseTime", "video.reviewLinks.uri", "video.reviewPage", "video.status", "video.type", "video.uploader.name", "video.uploader.pictures", "video.uri", "video.user.account", "video.user.uri", "video.user.uploadQuota.lifetime", "video.user.uploadQuota.periodic", "video.user.uploadQuota.space.unit", "folder.createdTime", "folder.isPrivateToUser", "folder.lastUserActionEventDate", "folder.name", "folder.uri", "folder.metadata.connections.items.uri", "folder.metadata.connections.items.total", "folder.metadata.connections.folders.total", "folder.settings", "folder.metadata.interactions.edit", "folder.metadata.interactions.editSettings", "folder.metadata.interactions.delete", "folder.metadata.interactions.invite", "folder.metadata.interactions.moveVideo", "folder.slackIncomingWebhooksId", "type"],
    _v143 = ({
      deselectItem: _v0,
      handleMoveItemsOnDrop: _v1,
      hasFolderShareUpsell: _v2,
      hasLibrarySidePanel: _v3,
      hasReviewPageUpsell: _v4,
      hasMultipleReviewLinks: _v5,
      items: _v6,
      libraryTitle: _v7,
      loadingFolderURIs: _v8,
      onCopyVideo: _v9,
      onMoreInfo: _v10,
      onMoveFolderSuccess: _v11,
      removeItem: _v12,
      selectedItemURIs: _v13,
      selectItem: _v14,
      setIsUploadDropzoneEnabled: _v15,
      shouldShowPrivacy: _v16 = !1,
      shouldShowFileSize: _v17 = !1,
      sort: _v18
    }) => {
      let {
          notifyItemMoveSuccess: _v19,
          notifyItemMoveToWorkspaceSuccess: _v20
        } = (0, _v38.useNotifications)(),
        _v21 = (0, _v26.useAnalyticsEvent)(),
        _v22 = (0, _v110.usePageName)(),
        {
          getDisplayDateWithTime: _v23
        } = (0, _v117.useFormatDateTime)(),
        _v24 = (0, _v4.useContext)(_v79.ViewerContext),
        {
          settings: _v25
        } = (0, _v15.useOrionSettings)(),
        _v26 = (0, _v124.useStorageLimitLockedVideoPaywall)(),
        _v27 = _v24?.teamUser?.ownerId ?? _v24?.user?.id,
        {
          capabilities: _v28
        } = (0, _v8.useCapability)(["hasContentSpaceEnabled"], _v27),
        _v29 = (0, _v19.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v28.hasContentSpaceEnabled
        }),
        {
          trackLibraryFolderOpened: _v30
        } = (0, _v18.useLibraryTracking)(),
        _v31 = (0, _v76.useTeamUploadClipProperties)(_v27);
      return (0, _v1.jsx)(_v66.Box, {
        children: _v6?.length ? _v6?.map((_v0, _v1) => {
          if (_v0.video) {
            let {
                video: _v0
              } = _v0,
              {
                duration: _v1,
                link: _v2,
                privacy: _v3,
                name: _v4,
                pictures: _v5,
                manageLink: _v6,
                uri: _v7,
                filesSize: _v8
              } = _v0,
              _v9 = _v104.DEFAULT_PRIVACY_OPTIONS.find(_v0 => _v0.privacy === _v3?.view),
              _v10 = _v9 ? (0, _v105.getNewPrivacyCopy)("xs", _v24?.teamUser?.teamName, _v24?.teamUser?.isWorkspace)(_v9) : null,
              _v11 = _v18.type === _v43.SORT_OPTION.CREATED ? _v0.createdTime : _v0.lastUserActionEventDate || "",
              _v12 = _v8 && _v8.totalSize > 0 ? (0, _v132.bytesToSize)(_v8.totalSize, 1) : "0MB",
              _v13 = (0, _v138.getFileSizeTooltip)(_v8?.fileSizeType),
              _v14 = _v5?.sizes[3].link,
              _v15 = _v0.isColdStorage ?? !1,
              _v16 = !!_v0.canMoveToProject && !_v15;
            return (0, _v1.jsx)(_v140.DraggableListVideo, {
              uri: _v7,
              title: _v4,
              clipId: (0, _v109.idFromUri)(_v7),
              canRename: !0,
              thumbnail: (0, _v1.jsx)(_v131.VideoThumbnail, {
                alt: _v4,
                badgeText: (0, _v103.secondsToDisplay)(_v1),
                isDefaultPicture: _v5?.defaultPicture,
                thumbnailSrc: _v14,
                isLocked: _v15
              }),
              thumbnailSrc: _v14,
              timestamp: _v23(_v11),
              privacy: _v16 ? _v15 ? (0, _v1.jsx)(_v139.ColdStorageListPrivacyChip, {}) : _v25.privacy_settings_new_copy && _v10 ? _v10.title : (0, _v135.getPrivacyLabel)(_v3?.view ?? "", _v24?.teamUser, _v3?.originalView) : "",
              href: _v15 ? "" : _v6 ?? _v2,
              isLocked: _v15,
              isSelectable: _v0.isSelectable,
              isSelected: _v0.isSelected,
              lockedTooltipLabel: _v124.STORAGE_LIMIT_LOCKED_VIDEO_TOOLTIP_LABEL,
              onLockedClick: _v15 ? () => _v26({
                location: "video_list",
                paywallTrigger: "cold_storage_video_list_locked_video_button"
              }) : void 0,
              pageName: _v22,
              onClick: () => {
                _v99.BigPictureClient.sendEvent(new _v99.Event("vimeo.click_video_card", 2, {
                  path: window.location.href,
                  entry_page: "team-library",
                  page: "team-library",
                  location: _v106.AnalyticsLocations.VIDEO_LIST,
                  video_id: String((0, _v109.idFromUri)(_v0.uri)),
                  video_privacy: _v0.privacy?.view,
                  video_embed_privacy: _v0.privacy?.embed,
                  is_preset_applied: null,
                  is_video_password_protected: !!_v0.password,
                  video_app_id: (0, _v109.idFromUri)(_v0.app?.uri) ? String((0, _v109.idFromUri)(_v0.app?.uri)) : null,
                  team_owner_id: String((0, _v109.idFromUri)(_v0.user.uri)),
                  team_size: _v24?.teamUser?.currentTeamSize ?? null,
                  team_subscription_type: _v24?.teamUser?.accountType ?? null,
                  actor_team_role: _v24?.teamUser?.plainTextPermissionLevel ?? null,
                  product: "Video Library",
                  video_type: null,
                  actor_resource_role: null,
                  target: null,
                  position_row: null,
                  position_column: null,
                  layout: "list"
                }));
              },
              onToggleSelected: () => {
                _v21(_v128({
                  copy: `${_v13.size}`,
                  feature: _v106.AnalyticsFeatures.VIDEO_LIBRARY,
                  location: _v106.AnalyticsLocations.VIDEO_LIST,
                  name: "select_item",
                  page: _v22,
                  target: _v0.isSelected ? "de-selected" : "selected",
                  type: "general",
                  target_path: null,
                  click_type: null,
                  device_type: null
                })), _v0.isSelected ? _v0(_v7, _v1, _v6) : _v14(_v7, _v1, _v6);
              },
              shouldShowFileSize: _v17,
              fileSizeTooltip: _v13 ?? void 0,
              fileSize: _v12,
              hoverActions: (0, _v1.jsx)(_v136.ListViewHoverActionsContainer, {
                disableHoverBackground: _v0.isColdStorage,
                children: (0, _v1.jsx)(_v133.TopRightDecoration, {
                  video: _v0,
                  shouldUpdateSideNavStars: !0,
                  buttonVariant: "minimal",
                  flexDirection: "row",
                  location: "video_list",
                  canShare: !!(_v0.metadata?.interactions?.invite?.uri || _v2),
                  shareEventAnalyticsOverride: {
                    page: "LIBRARY"
                  },
                  hasVideoInfo: _v3,
                  onVideoInfo: () => _v10(_v0.uri)
                })
              }),
              menuButton: (0, _v1.jsx)(_v114.VideoMenu, {
                video: _v0,
                feature: _v106.AnalyticsFeatures.VIDEO_LIBRARY,
                hasMoreInfo: _v3,
                hasReviewPageLinkUpsell: _v4,
                hasUpsellInShareModal: _v2,
                hasMultipleReviewLinks: _v5,
                onCopyVideo: _v9 ? () => _v9(_v0) : void 0,
                onMoreInfo: () => _v10(_v0.uri),
                onMoveSuccess: ({
                  selectedDestination: _v0,
                  video: _v1,
                  destinationWorkspaceId: _v2,
                  destinationWorkspaceName: _v3
                }) => {
                  if (_v0(_v1.uri, _v1, _v6), _v12?.(_v1.uri, "video"), _v2 && _v3) {
                    let _v0 = "root" === _v0 ? _v7 : _v0.name,
                      _v1 = "root" === _v0 ? "/library" : _v96(_v0.uri);
                    _v20(_v1.name, {
                      label: _v0,
                      workspaceName: _v3
                    }, () => {
                      _v24 && (0, _v93.switchTeam)(_v2, _v24.xsrft).finally(() => {
                        window.location.href = _v1;
                      });
                    });
                  } else "root" !== _v0 && _v19(_v1.name, {
                    label: _v0.name,
                    link: _v96(_v0.uri)
                  });
                },
                onDelete: () => {
                  _v0(_v0.uri, _v1, _v6), _v12?.(_v0.uri, "video"), _v21(_v106.VideoActionAnalytics.clickDeleteVideo({
                    live_event_id: null,
                    origin_folder_id: null,
                    origin_type: null,
                    is_my_videos: null,
                    location: _v106.AnalyticsLocations.VIDEO_LIST
                  }));
                },
                analytics: {
                  location: "video_list",
                  element: "ellipses"
                },
                vimeoClickAnalytics: {
                  location: "video_list"
                }
              }),
              onDragBegin: () => {
                _v15?.(!1);
              },
              onDragEnd: _v1,
              type: _v95.ITEM_TYPES.ROOT_VIDEO,
              selectedItemURIs: _v13,
              canDrag: _v16,
              parentFolderUri: "root",
              v2PageName: "video_library"
            }, _v7);
          }
          if (_v0.folder && _v0.folder.uri) {
            let {
                folder: _v0
              } = _v0,
              _v1 = _v18.type === _v43.SORT_OPTION.CREATED ? _v0.createdTime : _v0.lastUserActionEventDate || "",
              _v2 = parseInt(_v0.uri.split("/")?.[2]),
              _v3 = parseInt(_v0.folder.uri.split("/")[4]);
            return (0, _v1.jsx)(_v141.DroppableListFolder, {
              dropTarget: _v0,
              dropTargetType: _v95.DROP_TARGET_TYPES.FOLDER_CARD,
              allowedDropEffect: _v95.ALLOWED_DROP_EFFECTS.MOVE,
              dropFileForUploadConfig: _v25.enable_list_view_folder_upload && null != _v27 ? {
                targetUserId: _v27,
                folderId: _v3,
                folderName: _v0.name,
                uploadClipProperties: _v31
              } : void 0,
              isLoading: !!_v8 && _v8.has(_v0.uri),
              href: _v96(_v0.uri),
              title: _v0.name,
              thumbnail: (0, _v1.jsx)(_v137.FolderRowThumbnail, {
                backgroundColor: _v0.settings?.color
              }),
              subTitle: _v125(_v0.folder.metadata?.connections?.items?.total),
              timestamp: _v23(_v1),
              privacy: _v16 ? "—" : "",
              shouldShowFileSize: _v17,
              pageName: _v22,
              fileSize: "—",
              folderId: _v3,
              canRename: !0,
              folderOwnerId: _v2,
              hoverActions: (0, _v1.jsx)(_v136.ListViewHoverActionsContainer, {
                children: (0, _v1.jsx)(_v134.FolderTopRightDecoration, {
                  folder: _v0,
                  buttonVariant: "minimal",
                  flexDirection: "row",
                  location: "video_list"
                })
              }),
              menuButton: (0, _v1.jsx)(_v115.FolderMenu, {
                folder: _v0,
                analytics: {
                  product: "Video Library",
                  feature: "video_library",
                  location: "folder_card"
                },
                onMoveSuccess: _v11,
                libraryType: _v29
              }),
              onClick: () => {
                _v99.BigPictureClient.sendEvent(new _v99.Event("vimeo.click_folder_card", 3, {
                  path: window.location.href,
                  entry_page: "mvv",
                  page: "mvv",
                  location: _v106.AnalyticsLocations.FOLDER_LIST,
                  team_owner_id: String(_v2),
                  team_size: _v24?.teamUser?.currentTeamSize ?? null,
                  team_subscription_type: _v24?.teamUser?.accountType ?? null,
                  actor_team_role: _v24?.teamUser?.plainTextPermissionLevel ?? null,
                  product: "Video Library",
                  actor_resource_role: null,
                  folder_id: _v0.folder?.uri.split("/").pop() ?? null,
                  is_subfolder: null,
                  folder_share_status: null,
                  is_private_to_me: null,
                  parent_folder_id: null,
                  position_row: null,
                  position_column: null,
                  customizations: null,
                  layout: "list"
                })), _v30({
                  folderUri: _v0.folder?.uri,
                  isPrivateToUser: _v0.folder?.isPrivateToUser
                });
              },
              v2PageName: "video_library"
            }, _v0.uri);
          }
          return (0, _v1.jsx)(_v1.Fragment, {});
        }) : (0, _v1.jsx)(_v5.Flex, {
          direction: "column",
          width: "100%",
          gap: "sm",
          children: (0, _v1.jsx)(_v68.LoadingStateList, {})
        })
      });
    };
  function _v144({
    deselectItem: _v0,
    handleMoveItemsOnDrop: _v1,
    hasFolderShareUpsell: _v2,
    hasLibrarySidePanel: _v3,
    hasReviewPageUpsell: _v4,
    hasMultipleReviewLinks: _v5,
    items: _v6,
    libraryTitle: _v7,
    loadingFolderURIs: _v8 = new Set(),
    onCopyVideo: _v9,
    onMoreInfo: _v10,
    onMoveFolderSuccess: _v11,
    selectedItemURIs: _v12 = new Set(),
    selectItem: _v13,
    setIsUploadDropzoneEnabled: _v14,
    shouldShowPrivacy: _v15 = !1,
    shouldShowFileSize: _v16 = !1,
    sort: _v17
  }) {
    return (0, _v1.jsx)(_v143, {
      deselectItem: _v0,
      handleMoveItemsOnDrop: _v1,
      libraryTitle: _v7,
      loadingFolderURIs: _v8,
      items: _v6,
      onCopyVideo: _v9,
      selectItem: _v13,
      selectedItemURIs: _v12,
      shouldShowPrivacy: _v15,
      shouldShowFileSize: _v16,
      setIsUploadDropzoneEnabled: _v14,
      sort: _v17,
      onMoreInfo: _v10,
      onMoveFolderSuccess: _v11,
      hasFolderShareUpsell: _v2,
      hasReviewPageUpsell: _v4,
      hasLibrarySidePanel: _v3,
      hasMultipleReviewLinks: _v5
    });
  }
  function _v145({
    canUpload: _v0,
    deselectItem: _v1,
    handleMoveItemsOnDrop: _v2,
    hasFolderShareUpsell: _v3,
    hasReviewPageUpsell: _v4,
    hasMultipleReviewLinks: _v5,
    isEnterprise: _v6,
    items: _v7,
    loadingFolderURIs: _v8 = new Set(),
    onCopyVideo: _v9,
    onFolderSettingsChange: _v10,
    onMoreInfo: _v11,
    removeItem: _v12,
    selectedItemURIs: _v13,
    selectItem: _v14,
    setIsUploadDropzoneEnabled: _v15,
    shouldShowPrivacy: _v16 = !1,
    shouldShowFileSize: _v17 = !1,
    sort: _v18,
    layout: _v19,
    isLoading: _v20 = !1,
    hasContentSpaceEnabled: _v21
  }) {
    let _v22 = (0, _v4.useContext)(_v79.ViewerContext),
      {
        capabilities: _v23
      } = (0, _v8.useCapability)(["hasLibrarySidePanel"]),
      _v24 = _v22?.teamUser?.ownerId ?? _v22?.user?.id,
      _v25 = (0, _v76.useTeamUploadClipProperties)(_v24),
      _v26 = _v21 ? (0, _v12.translate)({
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
      }) : (0, _v12.translate)({
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
        notifyItemMoveSuccess: _v27,
        notifyItemMoveToWorkspaceSuccess: _v28,
        notifyItemMoveFailure: _v29
      } = (0, _v38.useNotifications)(),
      {
        revalidateTopLevelFolders: _v30,
        revalidateFolderItems: _v31,
        revalidateRootItems: _v32
      } = (0, _v36.useRevalidate)(),
      _v33 = (_v0, _v1, _v2, _v3) => {
        _v30(), _v1[0].parentFolder?.uri ? _v31(_v1[0]?.parentFolder?.uri ?? "") : _v32(), "root" !== _v0 && _v31(_v0.uri);
        let _v4 = "root" === _v0 ? _v26 : _v0.name,
          _v5 = "root" === _v0 ? "/library" : _v96(_v0.uri);
        _v2 && _v3 ? _v28(_v1[0].name, {
          label: _v4,
          workspaceName: _v3
        }, () => {
          _v22 && (0, _v93.switchTeam)(_v2, _v22.xsrft).finally(() => {
            window.location.href = _v5;
          });
        }) : _v27(_v1[0].name, {
          label: _v4,
          link: _v5
        });
      },
      {
        draggableItemIsHovering: _v34,
        dropRef: _v35
      } = (0, _v94.useDropFolder)({
        dropTargetType: _v95.DROP_TARGET_TYPES.FOLDER_MENU_ITEM,
        dropTarget: void 0,
        allowedDropEffect: null,
        dropFileForUploadConfig: null != _v24 && _v0 ? {
          targetUserId: _v24,
          folderId: void 0,
          folderName: _v26,
          uploadClipProperties: _v25
        } : void 0
      });
    return (0, _v1.jsx)(_v66.Box, {
      height: "100%",
      width: "100%",
      ref: _v35,
      backgroundColor: _v34 ? "rgba(23, 213, 255, 0.06)" : "transparent",
      borderColor: _v34 ? "vimeoBlue.500" : "transparent",
      borderRadius: "lg",
      borderWidth: ".125rem",
      transition: "background-color 0.2s ease, border-color 0.2s ease",
      children: _v19 === _v43.LAYOUT.GRID ? (0, _v1.jsx)(_v130, {
        deselectItem: _v1,
        handleMoveItemsOnDrop: _v2,
        hasLibrarySidePanel: _v23.hasLibrarySidePanel,
        isEnterprise: _v6,
        items: _v7,
        libraryTitle: _v26,
        loadingFolderURIs: _v8,
        onCopyVideo: _v9,
        onFolderSettingsChange: _v10,
        onMoreInfo: _v11,
        onMoveFolderSuccess: _v33,
        onMoveFolderFailure: (_v0, _v1) => {
          _v29(_v1[0].name, "root" === _v0 ? _v26 : _v0.name);
        },
        removeItem: _v12,
        selectedItemURIs: _v13,
        selectItem: _v14,
        setIsUploadDropzoneEnabled: _v15,
        sort: _v18,
        isLoading: _v20
      }) : (0, _v1.jsx)(_v144, {
        deselectItem: _v1,
        handleMoveItemsOnDrop: _v2,
        hasFolderShareUpsell: _v3,
        hasLibrarySidePanel: _v23.hasLibrarySidePanel,
        hasReviewPageUpsell: _v4,
        hasMultipleReviewLinks: _v5,
        items: _v7,
        libraryTitle: _v26,
        loadingFolderURIs: _v8,
        onCopyVideo: _v9,
        selectedItemURIs: _v13,
        selectItem: _v14,
        setIsUploadDropzoneEnabled: _v15,
        shouldShowPrivacy: _v16,
        shouldShowFileSize: _v17,
        sort: _v18,
        onMoreInfo: _v11,
        onMoveFolderSuccess: _v33
      })
    });
  }
  let _v146 = ["video", "folder"];
  function _v147({
    playerAssetUrls: _v0,
    viewer: _v1
  }) {
    let {
        step: _v2,
        handleDismiss: _v3,
        handleCtaClick: _v4,
        handleErrorClose: _v5
      } = (0, _v60.useViewerAiUpsellModal)("library"),
      [_v6, _v7] = (0, _v4.useState)(null),
      _v8 = (0, _v6.useToast)(),
      [_v9, _v10] = (0, _v41.useSortPreference)(_v43.DEFAULT_SORT, _v43.VL_SORT_LOCAL_STORAGE_KEY),
      [_v11, _v12] = (0, _v42.useDateDisplayPreference)(_v43.DEFAULT_DATE_DISPLAY, _v43.VL_DATE_LOCAL_STORAGE_KEY),
      [_v13, _v14] = (0, _v4.useState)(null),
      [_v15, _v16] = (0, _v4.useState)(!1),
      _v17 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      _v18 = (0, _v26.useAnalyticsEvent)(),
      {
        trackLibraryPageDisplayed: _v19,
        trackLibraryViewChanged: _v20,
        trackLibraryFilterApplied: _v21,
        trackLibrarySortChanged: _v22
      } = (0, _v18.useLibraryTracking)(),
      _v23 = (0, _v3.useRouter)(),
      _v24 = {
        alphabetical_asc: "title_a_to_z",
        alphabetical_desc: "title_z_to_a",
        last_user_action_event_date_desc: "last_modified",
        last_user_action_event_date_asc: "first_modified",
        date_desc: "last_added",
        date_asc: "first_added",
        duration_desc: "longest",
        duration_asc: "shortest"
      },
      {
        capabilities: _v25,
        ready: _v26
      } = (0, _v8.useCapability)(["canCreateRootFolders", "canAddTeamMembers", "canSeeUpsellModalOnShare", "privateModeOff", "canManageTeamCollections", "hasVideoReviewPageDemo", "hasContentSpaceEnabled", "hasEnterprise", "regionalDeliveryPublishContentToChina", "hasContentSpaceEnabled", "hasMultipleReviewLinks", "hasTeamPrivacy", "coldStorageClips", "canPerformBulkTranslations", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasVideoLibraryEmbeddableUploader"], `/users/${_v17}`),
      _v27 = !!_v25.canGenerateClipTextTranslation,
      _v28 = (!!_v25.canGenerateClipTranslation || _v27) && !!_v25.canPerformBulkTranslations,
      {
        capabilities: _v29
      } = (0, _v8.useCapability)(["hasLibrarySidePanel"]),
      {
        revalidateRootItems: _v30,
        revalidateTopLevelFolders: _v31
      } = (0, _v36.useRevalidate)(),
      {
        setLoadingSideNavFolderURIs: _v32
      } = (0, _v4.useContext)(_v39.VideoLibraryLayoutContext),
      _v33 = (0, _v38.useNotification)(),
      {
        notifyItemMoveSuccess: _v34
      } = (0, _v38.useNotifications)(),
      _v35 = (0, _v4.useRef)(() => void 0),
      {
        openCopyVideoModal: _v36,
        copyVideoModal: _v37
      } = (0, _v58.useCopyVideoFlow)({
        onAfterCopySuccess: (_v0, _v1) => _v35.current(_v1.uri, _v0)
      }),
      _v38 = _v1?.teamUser?.plainTextPermissionLevel,
      _v39 = _v17 === _v1?.user?.id || "Admin" === _v38,
      _v40 = (0, _v23.useStorageLimitLocking)({
        userId: _v17
      }),
      _v41 = _v40.isEnabled && _v40.hasResolvedAllPages,
      _v42 = _v41 && _v40.isOverLimit,
      {
        hasColdStorage: _v43
      } = (0, _v64.useUserHasColdStorageVideos)(),
      _v44 = _v42 || _v43,
      _v45 = _v40.isEnabled && (_v40.isLoading || _v42),
      _v46 = !!_v25.coldStorageClips && _v39 || _v43 && _v39,
      _v47 = (0, _v33.useContentTypeFilter)([..._v146]),
      _v48 = !(0, _v63.isContentTypeSelectionDefault)(_v146, _v47.value) && !(0, _v63.doesSelectionIncludeVideos)(_v146, _v47.value),
      _v49 = !(0, _v63.isContentTypeSelectionDefault)(_v146, _v47.draft) && !(0, _v63.doesSelectionIncludeVideos)(_v146, _v47.draft),
      _v50 = (0, _v35.useVideoAvailabilityFilter)(),
      _v51 = (0, _v32.useClipPrivacyFilter)(["unlisted", "password", "hide_from_vimeo", "team", "private", "public"], !!_v25?.hasTeamPrivacy),
      _v52 = [..._v51.value],
      _v53 = (0, _v63.doesSelectionIncludeVideos)(_v146, _v47.value) && _v50.value.has("restricted") !== _v50.value.has("available"),
      _v54 = (0, _v34.useCreatedByFilter)(),
      _v55 = !!_v51.isFilterActive || !!_v54.isFilterActive || !!_v50.isFilterActive,
      _v56 = !!_v51.isFilterActive || !!_v54.isFilterActive,
      _v57 = !!_v51.isDraftActive || !!_v54.isDraftActive,
      _v58 = !!_v51.isFilterActive || !!_v54.isFilterActive,
      _v59 = !!_v51.isDraftActive || !!_v54.isDraftActive,
      [_v60, _v61] = (0, _v4.useState)(!0),
      [_v62, _v63] = (0, _v40.useLayoutPreference)(),
      _v64 = !!_v25.canCreateRootFolders,
      _v65 = !!(_v60 && _v39 && !_v45),
      {
        settings: _v66
      } = (0, _v15.useOrionSettings)(),
      _v67 = _v66?.enable_new_library_drag_and_drop_upload ?? !1,
      _v68 = _v65 && !_v67,
      _v69 = !!_v25.hasEnterprise,
      _v70 = _v26 ? _v25?.hasContentSpaceEnabled ? (0, _v12.translate)({
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
      }) : (0, _v12.translate)({
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
      }) : "";
    (0, _v25.useUploadLifecycle)((_v0, _v1) => {
      _v1.clipId && _v30();
    }, []), (0, _v14.useOttRedirect)({
      toast: _v8,
      config: {
        message: (0, _v12.translate)({
          singular: "Team library videos are now managed on Vimeo",
          dictionary: {
            es: {
              singular: "Los videos de la biblioteca del equipo ahora se administran en Vimeo"
            },
            "de-DE": {
              singular: "Videos der Teambibliothek werden jetzt auf Vimeo verwaltet"
            },
            "fr-FR": {
              singular: "Les vidéos de la bibliothèque de l'équipe sont désormais gérées sur Vimeo"
            },
            "ja-JP": {
              singular: "チームライブラリの動画がVimeoで管理されるようになりました"
            },
            "ko-KR": {
              singular: "이제 팀 라이브러리 동영상은 Vimeo에서 관리됩니다."
            },
            "pt-BR": {
              singular: "Os vídeos da biblioteca da equipe agora são gerenciados no Vimeo"
            },
            "zh-CN": {
              singular: "团队视频库的视频现在在 Vimeo 上管理"
            }
          }
        })
      }
    });
    let _v71 = (0, _v9.useIsMobile)(),
      _v72 = !!_v25.hasContentSpaceEnabled,
      _v73 = !_v39 && _v72,
      {
        data: _v74,
        mutate: _v75,
        setSize: _v76,
        size: _v77
      } = (0, _v11.useGetUserFoldersRootInfinite)(() => {
        let _v0 = _v51.isFilterActive && !_v53 ? _v52.join(",") : void 0,
          _v1 = _v54.isFilterActive ? [..._v54.value].map(_v0 => _v0.userId) : void 0,
          _v2 = _v1?.length ? _v1.join(",") : void 0,
          _v3 = (0, _v63.getContentTypeApiFilterParam)(_v146, _v47.value);
        return _v17 ? {
          where: {
            userId: _v17
          },
          select: _v142,
          query: {
            direction: _v9.direction,
            excludePersonalTeamFolder: !_v26 || _v72,
            excludeSharedVideos: _v73,
            includeColdStorageClips: _v46,
            ...(_v3 && {
              filter: _v3
            }),
            clipPrivacyFilters: _v0,
            clipCreatedByFilters: _v2,
            noPadding: !0,
            perPage: 25,
            sort: _v9.type,
            responsive: !0
          },
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4"
          }
        } : null;
      }),
      _v78 = (0, _v4.useMemo)(() => _v74 ? _v74.flatMap(_v0 => {
        if (!_v0) return [];
        let _v1 = _v0.data.map(_v0 => _v0.video && _v41 ? {
          ..._v0,
          video: (0, _v23.applyStorageLimitLockingStateToVideo)(_v0.video, _v40.lockedVideoUris)
        } : _v0).filter(_v0 => (0, _v62.passesLibraryItemClientFilters)({
          clipPrivacyFilter: _v51.value,
          contentTypeOptions: _v146,
          contentTypeSelection: _v47.value,
          item: _v0,
          shouldUseClientPipeline: _v53,
          videoAvailabilityFilter: _v50.value
        }));
        return [{
          ..._v0,
          data: _v1
        }];
      }) : _v74, [_v51.value, _v47.value, _v74, _v41, _v53, _v40.lockedVideoUris, _v50.value]),
      _v79 = (0, _v4.useCallback)(({
        name: _v0,
        settings: {
          color: _v1
        },
        uri: _v2
      }) => {
        _v75(_v0 => _v0?.map(_v0 => ({
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
      }, [_v75]),
      _v80 = (0, _v4.useCallback)((_v0, _v1) => {
        _v75(_v0 => _v0 ? _v0.map(_v0 => ({
          ..._v0,
          data: _v0.data.map(_v0 => _v0.video?.uri === _v0 ? {
            ..._v0,
            video: _v1(_v0.video)
          } : _v0)
        })) : _v0, !1);
      }, [_v75]),
      _v81 = (0, _v4.useCallback)((_v0, _v1) => {
        let _v2 = !1;
        _v75(_v0 => {
          let _v1 = (0, _v61.insertOptimisticVideoCopy)(_v0, _v0, _v1);
          return _v2 = _v1.inserted, _v1.pages;
        }, !1), _v2 || _v30();
      }, [_v75, _v30]);
    (0, _v4.useEffect)(() => {
      _v35.current = _v81;
    }, [_v81]);
    let _v82 = (0, _v4.useCallback)((_v0, _v1) => {
        _v75(_v0 => _v0?.map(_v0 => ({
          ..._v0,
          data: _v0.data.filter(_v0 => _v0?.[_v1]?.uri !== _v0)
        })), !1);
      }, [_v75]),
      _v83 = (0, _v4.useCallback)(_v0 => {
        _v75(_v0 => _v0?.map(_v0 => ({
          ..._v0,
          data: _v0.data.filter(_v0 => {
            let _v1 = _v0.video?.uri || _v0.folder?.uri || _v0.liveEvent?.uri;
            return !!_v1 && !_v0.has(_v1);
          })
        })), !1);
      }, [_v75]),
      [_v84, {
        enhancedSelectItem: _v85,
        enhancedDeselectItem: _v86,
        selectAllItems: _v87,
        deselectAllItems: _v88,
        shiftKeyChange: _v89
      }] = (0, _v65.useSelectedItems)(),
      _v90 = (0, _v4.useCallback)(() => {
        let _v0 = _v47.value,
          _v1 = (0, _v63.isContentTypeOptionChecked)(_v146, _v0, "video"),
          _v2 = _v50.value,
          _v3 = _v2.has("restricted"),
          _v4 = _v2.has("available");
        _v88();
        let _v5 = () => new Set(["restricted", "available"]);
        if (!_v1) {
          _v47.setSelection((0, _v63.includeVideosInSelection)(_v146, _v0)), _v50.setValue(_v5());
          return;
        }
        if (!_v3 && !_v4) {
          _v47.setSelection((0, _v63.excludeVideosFromSelection)(_v146, _v0)), _v50.clearFilter();
          return;
        }
        if (_v3 !== _v4) return void _v50.setValue(_v5());
        if (_v3 && _v4) {
          _v50.clearFilter(), _v47.setSelection((0, _v63.excludeVideosFromSelection)(_v146, _v0));
          return;
        }
      }, [_v47, _v88, _v50]),
      _v91 = (0, _v4.useCallback)(() => {
        let _v0 = _v47.draft,
          _v1 = (0, _v63.isContentTypeOptionChecked)(_v146, _v0, "video"),
          _v2 = _v50.draft,
          _v3 = _v2.has("restricted"),
          _v4 = _v2.has("available");
        _v88();
        let _v5 = () => new Set(["restricted", "available"]);
        if (!_v1) {
          _v47.setSelection((0, _v63.includeVideosInSelection)(_v146, _v0), !0), _v50.setDraft(_v5());
          return;
        }
        if (!_v3 && !_v4) {
          _v47.setSelection((0, _v63.excludeVideosFromSelection)(_v146, _v0), !0), _v50.setDraft(new Set());
          return;
        }
        if (_v3 !== _v4) return void _v50.setDraft(_v5());
        if (_v3 && _v4) {
          _v50.setDraft(new Set()), _v47.setSelection((0, _v63.excludeVideosFromSelection)(_v146, _v0), !0);
          return;
        }
      }, [_v47, _v88, _v50]),
      _v92 = _v43 || _v43 ? {
        onVideoParentCheckboxClick: _v90,
        setVideoAvailabilityFilter: _v0 => {
          let _v1 = _v47.value;
          (0, _v63.isContentTypeOptionChecked)(_v146, _v1, "video") || _v47.setSelection((0, _v63.includeVideosInSelection)(_v146, _v1)), _v50.updateFilterValues(_v0);
        },
        showAvailableOption: _v43,
        showRestrictedOption: _v43,
        videoAvailabilityFilter: _v50.value
      } : void 0,
      _v93 = _v43 || _v43 ? {
        onVideoParentCheckboxClick: _v91,
        onVideoAvailabilityChange: _v0 => {
          let _v1 = _v47.draft;
          (0, _v63.isContentTypeOptionChecked)(_v146, _v1, "video") || _v47.setSelection((0, _v63.includeVideosInSelection)(_v146, _v1), !0), _v50.updateFilterValues(_v0, !0);
        },
        showAvailableOption: _v43,
        showRestrictedOption: _v43,
        videoAvailabilityDraft: _v50.draft
      } : void 0,
      _v94 = (0, _v4.useRef)(!1),
      _v95 = (0, _v4.useCallback)(_v0 => {
        "Shift" === _v0.key && (_v94.current = !_v94.current, _v89(_v94.current));
      }, [_v94, _v89]);
    (0, _v4.useEffect)(() => (window.addEventListener("keydown", _v95), window.addEventListener("keyup", _v95), () => {
      window.removeEventListener("keydown", _v95), window.removeEventListener("keyup", _v95);
    }), [_v95]), (0, _v4.useEffect)(() => {
      _v71 || _v16(!1);
    }, [_v71]);
    let _v96 = _v23.query.filter;
    (0, _v4.useEffect)(() => {
      !_v43 || "string" != typeof _v96 || "locked" !== _v96.toLowerCase() || (!_v50.value.has("restricted") || _v50.value.has("available")) && (_v47.setSelection(new Set(["video"])), _v50.setValue(new Set(["restricted"])));
    }, [_v96, _v43]), (0, _v4.useEffect)(() => {
      if (!_v43 || (0, _v35.isVideoAvailabilityFilterExplicitlyEngaged)(_v50.value)) return;
      let _v0 = _v47.value;
      if (1 !== _v0.size || !_v0.has("video") || (_v47.setSelection(new Set()), !_v23.isReady)) return;
      let _v1 = _v23.query.filter;
      if ("string" != typeof _v1 || "locked" !== _v1.toLowerCase()) return;
      let _v2 = {
        ..._v23.query
      };
      delete _v2.filter, _v23.replace({
        pathname: _v23.pathname,
        query: _v2
      }, void 0, {
        shallow: !0
      });
    }, [_v50.value, _v47.value, _v43, _v23.isReady, _v23.pathname, _v23.query.filter]);
    let _v97 = _v84.selectedItemURIs,
      _v98 = (0, _v4.useMemo)(() => _v78?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data.filter(_v0 => {
        let _v1 = (0, _v10.camelizeString)(_v0.type);
        return _v0[_v1]?.uri;
      })), [_v78]),
      {
        allItems: _v99,
        canMoveSelection: _v100,
        canDeleteSelection: _v101,
        canChangePrivacySelection: _v102,
        canAddToShowcasesSelection: _v103,
        hasLegalHoldSelection: _v104,
        hasReachedMaxSelectionForMove: _v105,
        hasReachedMaxSelectionForPrivacy: _v106,
        hasReachedMaxSelectionForSentimentWidget: _v107,
        hasReachedMaxSelectionForShowcases: _v108,
        canSelectURIs: _v109,
        selectedItems: _v110
      } = (0, _v31.useBulkItems)({
        canDeleteItem: _v0 => !!_v0?.video?.metadata?.interactions?.delete,
        canMoveItem: _v0 => !!_v0?.video?.canMoveToProject,
        canChangeItemPrivacy: _v0 => !!_v0?.video && !!_v0?.video?.metadata?.interactions?.edit,
        canAddToShowcases: _v0 => !!_v0?.video && !!_v0?.video?.metadata?.interactions?.edit,
        hasLegalHold: _v0 => !!_v0.video?.uri && !!_v0.video?.metadata?.interactions?.legalHold?.uri,
        items: _v98,
        selectedURIs: _v97
      }),
      _v111 = !!_v25.canManageTeamCollections && _v103,
      _v112 = (0, _v4.useCallback)(() => {
        _v87(_v99, new Set(_v97));
      }, [_v97, _v99, _v87]),
      [_v113] = (0, _v37.useMoveItem)(),
      [_v114, _v115] = (0, _v4.useState)(new Set());
    (0, _v4.useEffect)(() => {
      !_v71 && _v56 && _v47.setSelection(new Set(["video"]));
    }, [_v71, _v56]), (0, _v4.useEffect)(() => {
      _v57 && _v47.setSelection(new Set(["video"]), !0);
    }, [_v57]);
    let _v116 = _v1?.vimeoHttpsUrl ? _v1?.vimeoHttpsUrl + "/analytics" : void 0,
      _v117 = _v1?.teamUser,
      {
        isDone: _v118,
        isLoadingInitialData: _v119,
        isLoadingMore: _v120
      } = (0, _v24.getInfiniteRequestLoadingState)({
        data: _v74,
        itemsPerPage: 25,
        size: _v77
      }),
      _v121 = _v99?.length === 0,
      _v122 = !!_v47.isFilterApplied,
      _v123 = !_v73,
      _v124 = _v122 || _v55 || (0, _v35.isVideoAvailabilityFilterExplicitlyEngaged)(_v50.value),
      _v125 = _v53 ? _v98?.length : _v78?.[0]?.total,
      _v126 = !_v121 || _v124,
      _v127 = _v39 && !!_v116,
      _v128 = !!_v25.hasVideoLibraryEmbeddableUploader && _v39 && !_v45 && !!_v17,
      _v129 = !!_v25.canCreateRootFolders,
      _v130 = _v126 && (_v127 || _v128 || _v129);
    return (0, _v17.usePicoEffect)(() => {
      if (!_v26 || void 0 === _v125) return !1;
      let _v0 = (0, _v19.deriveLibraryReferrerPage)(_v23.query.library_referrer);
      _v19({
        libraryType: (0, _v19.deriveLibraryType)({
          hasContentSpaceEnabled: _v72
        }),
        libraryItemCount: _v125,
        referrerPage: _v0
      });
    }, [_v26, _v125, _v72, _v23.query.library_referrer], {
      once: !0
    }), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v82, {
        children: (0, _v1.jsxs)(_v53.Page, {
          children: [(0, _v1.jsxs)(_v53.Page.Main, {
            children: [(0, _v1.jsxs)(_v53.Page.StickyTop, {
              children: [(0, _v1.jsx)(_v16.ReverseTrialLateBanner, {
                hostLocation: "library"
              }), _v44 && (0, _v1.jsx)(_v13.ColdStorageBanner, {
                surface: "library"
              }), (0, _v1.jsx)(_v52.PageHeader, {
                actions: _v130 ? (0, _v1.jsxs)(_v1.Fragment, {
                  children: [_v127 && _v116 && (0, _v1.jsx)(_v30.AnalyticsButton, {
                    analyticsLink: _v116,
                    location: _v126,
                    page: "library",
                    name: "click_library_analytics",
                    dataTestId: "library-header-analytics-button"
                  }), _v128 && _v17 && (0, _v1.jsx)(_v29.UploadButton, {
                    paywallTrigger: "library_header_upload_button",
                    targetUserId: _v17,
                    testIdPrefix: "library-header-upload-button",
                    onClick: () => _v18(_v128({
                      copy: "Upload",
                      feature: "video_library",
                      location: _v126,
                      name: "click_upload_button",
                      page: "library",
                      target: null,
                      target_path: null,
                      click_type: null,
                      device_type: null,
                      type: "general"
                    }))
                  }), _v129 && (0, _v1.jsx)(_v92, {})]
                }) : void 0,
                bottomBar: (0, _v1.jsxs)(_v45.FilterSortBar, {
                  checkbox: (0, _v1.jsx)(_v54.CheckboxItemCount, {
                    hasCheckbox: !!_v109.size,
                    isChecked: !!_v97.size,
                    isDisabled: !_v109.size,
                    isIndeterminate: !!_v97.size && _v97.size < _v109.size,
                    isLoading: _v119,
                    onChange: () => {
                      _v97.size ? _v88() : _v112();
                    },
                    selectedItemCount: _v97.size,
                    subtitle: !!_v125 && (_v124 ? (0, _v12.translate)({
                      count: _v125,
                      singular: "{NUM_ITEMS} result",
                      plural: "{NUM_ITEMS} results",
                      replacements: {
                        NUM_ITEMS: _v125
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
                    }) : (0, _v12.translate)({
                      count: _v125,
                      singular: "{NUM_ITEMS} item",
                      plural: "{NUM_ITEMS} items",
                      replacements: {
                        NUM_ITEMS: _v125
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
                    }))
                  }),
                  layout: _v62,
                  setLayout: _v0 => {
                    _v63(_v0), _v20({
                      libraryType: (0, _v19.deriveLibraryType)({
                        hasContentSpaceEnabled: _v72
                      }),
                      libraryNewView: "GRID_LAYOUT" === _v0 ? "grid" : "list"
                    });
                  },
                  shouldHideViewControls: _v121 && !_v124,
                  sort: _v9,
                  setSort: _v0 => {
                    let _v1 = `${_v9.type.toLowerCase()}_${_v9.direction.toLowerCase()}`,
                      _v2 = `${_v0.type.toLowerCase()}_${_v0.direction.toLowerCase()}`;
                    if (_v10(_v0), _v2 !== _v1) {
                      let _v0 = _v24[_v2];
                      _v0 && _v22({
                        libraryType: (0, _v19.deriveLibraryType)({
                          hasContentSpaceEnabled: _v72
                        }),
                        libraryNewSort: _v0
                      });
                    }
                  },
                  setDateDisplay: _v12,
                  sortOptions: _v43.SORT_OPTIONS,
                  isLayoutToggleDisabled: _v121,
                  children: [_v71 && _v123 && (0, _v1.jsxs)(_v5.Flex, {
                    children: [(0, _v1.jsx)(_v47.MobileFilterButton, {
                      isFilterApplied: _v124,
                      onClick: () => {
                        _v16(!0);
                      }
                    }), (0, _v1.jsxs)(_v48.MobileFilterDrawer, {
                      isFilterApplied: _v124,
                      isOpen: _v15,
                      onApplyFilters: () => {
                        let _v0, _v1, _v2, _v3;
                        _v88();
                        let _v4 = (0, _v19.deriveLibraryType)({
                            hasContentSpaceEnabled: _v72
                          }),
                          _v5 = !(0, _v63.areIdenticalSets)(_v47.draft, _v47.value),
                          _v6 = _v51.isDraftActive && _v51.isDraftUpdated(),
                          _v7 = _v50.isDraftActive && _v50.isDraftUpdated(),
                          _v8 = _v54.isDraftActive && _v54.isDraftUpdated();
                        _v47.commitDraft(), _v51.commitDraft(), _v50.commitDraft(), _v54.commitDraft(), _v0 = !(0, _v63.areIdenticalSets)(_v47.draft, _v47.value), _v1 = _v51.isDraftActive && _v51.isDraftUpdated(), _v2 = _v50.isDraftActive && _v50.isDraftUpdated(), _v3 = _v54.isDraftActive && _v54.isDraftUpdated(), _v0 && _v44.FilterBPEvents.sendApplyFilterEvent("content_type", _v70, _v117, "mobile"), _v1 && _v44.FilterBPEvents.sendApplyFilterEvent("clip_privacy", _v70, _v117, "mobile"), _v2 && _v44.FilterBPEvents.sendApplyFilterEvent("content_type", _v70, _v117, "mobile"), _v3 && _v44.FilterBPEvents.sendApplyFilterEvent("clip_created_by", _v70, _v117, "mobile"), _v5 && _v21({
                          libraryType: _v4,
                          libraryFilterType: "type"
                        }), _v6 && _v21({
                          libraryType: _v4,
                          libraryFilterType: "privacy"
                        }), _v7 && _v21({
                          libraryType: _v4,
                          libraryFilterType: "type"
                        }), _v8 && _v21({
                          libraryType: _v4,
                          libraryFilterType: "created_by"
                        }), _v16(!1);
                      },
                      onClearFilters: () => {
                        _v88(), _v47.clearFilter(), _v51.clearFilter(), _v50.clearFilter(), _v54.clearFilter(), _v54.setCreatedByUsersSearchTerm(""), _v16(!1);
                      },
                      onClose: () => {
                        _v47.clearDraft(), _v51.clearDraft(), _v50.clearDraft(), _v54.clearDraft(), _v54.setCreatedByUsersSearchTerm(""), _v16(!1);
                      },
                      children: [(0, _v1.jsx)(_v49.MobileContentTypeFilter, {
                        filter: _v47.draft,
                        onToggle: _v0 => {
                          let _v1 = (0, _v63.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v146, _v47.draft, _v0, (0, _v35.isVideoAvailabilityFilterExplicitlyEngaged)(_v50.draft));
                          _v47.setSelection(_v1, !0), (0, _v63.doesSelectionIncludeVideos)(_v146, _v1) || _v50.setDraft(new Set());
                        },
                        options: _v146,
                        page: _v70,
                        isDisabled: _v59,
                        videoSubmenu: _v93
                      }), _v123 && (0, _v1.jsxs)(_v1.Fragment, {
                        children: [(0, _v1.jsx)(_v50.MobileClipPrivacyFilter, {
                          filter: [..._v51.draft],
                          onChange: _v0 => {
                            _v51.updateFilterValues(_v0, !0);
                          },
                          options: _v51.options,
                          page: _v70,
                          isDisabled: _v49
                        }), !_v54.shouldHideFilter && (0, _v1.jsx)(_v51.MobileCreatedByFilter, {
                          filter: [..._v54.draft],
                          onChange: _v0 => {
                            _v54.updateFilterValues(_v0, !0);
                          },
                          searchQuery: _v54.createdByUsersSearchTerm,
                          setSearchQuery: _v54.setCreatedByUsersSearchTerm,
                          options: _v54.createdByUsers,
                          page: _v70,
                          isDisabled: _v49,
                          isLoadingInitialData: _v54.membersLoadingInitialData,
                          isLoadingMore: _v54.membersLoadingMore,
                          isDone: _v54.membersDone,
                          onLoadMore: _v54.loadMoreMembers
                        })]
                      })]
                    })]
                  }), !_v71 && _v123 && _v124 && (0, _v1.jsx)(_v56.ClearAllFiltersButton, {
                    onClick: () => {
                      _v88(), _v47.clearFilter(), _v51.clearFilter(), _v50.clearFilter(), _v54.clearFilter();
                    }
                  }), !_v71 && _v123 && (0, _v1.jsx)(_v46.ContentTypeFilter, {
                    filter: _v47.value,
                    onToggleType: _v0 => {
                      _v88();
                      let _v1 = (0, _v63.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v146, _v47.value, _v0, (0, _v35.isVideoAvailabilityFilterExplicitlyEngaged)(_v50.value));
                      (0, _v63.areIdenticalSets)(_v1, _v47.value) || _v21({
                        libraryType: (0, _v19.deriveLibraryType)({
                          hasContentSpaceEnabled: _v72
                        }),
                        libraryFilterType: "type"
                      }), _v47.setSelection(_v1), (0, _v63.doesSelectionIncludeVideos)(_v146, _v1) || _v50.clearFilter();
                    },
                    options: _v146,
                    page: _v70,
                    isDisabled: _v58,
                    videoSubmenu: _v92
                  }), !_v71 && _v123 && (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v55.ClipPrivacyTypeFilter, {
                      filter: [..._v51.value],
                      setFilter: _v0 => {
                        _v88(), _v51.updateFilterValues(_v0), _v21({
                          libraryType: (0, _v19.deriveLibraryType)({
                            hasContentSpaceEnabled: _v72
                          }),
                          libraryFilterType: "privacy"
                        });
                      },
                      options: _v51.options,
                      page: _v70,
                      isDisabled: _v48
                    }), !_v54.shouldHideFilter && (0, _v1.jsx)(_v57.CreatedByFilter, {
                      filter: [..._v54.value],
                      setFilter: _v0 => {
                        _v88(), _v54.setFilterValues(_v0), _v21({
                          libraryType: (0, _v19.deriveLibraryType)({
                            hasContentSpaceEnabled: _v72
                          }),
                          libraryFilterType: "created_by"
                        });
                      },
                      searchQuery: _v54.createdByUsersSearchTerm,
                      setSearchQuery: _v54.setCreatedByUsersSearchTerm,
                      options: _v54.createdByUsers,
                      page: _v70,
                      isDisabled: _v48,
                      isLoadingInitialData: _v54.membersLoadingInitialData,
                      isLoadingMore: _v54.membersLoadingMore,
                      isDone: _v54.membersDone,
                      onLoadMore: _v54.loadMoreMembers
                    })]
                  })]
                }),
                isTitleLoading: !_v26,
                title: _v70
              }), "LIST_LAYOUT" === _v62 && !_v121 && (0, _v1.jsx)(_v27.BokehListHeader, {
                setSort: _v10,
                sort: _v9,
                shouldShowPrivacy: _v64,
                shouldShowFileSize: !0,
                setDateDisplay: _v12,
                dateDisplay: _v11
              })]
            }), _v121 ? (0, _v1.jsx)(_v5.Flex, {
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "20px",
              children: _v124 ? (0, _v1.jsx)(_v90, {}) : _v25.canCreateRootFolders ? (0, _v1.jsx)(_v84, {
                owner: {
                  id: _v17 ?? 0
                },
                set360SourceType: _v14,
                threeSixtyType: _v13
              }) : (0, _v1.jsx)(_v88, {
                isContributor: "Contributor" === _v38 || "ContributorPlus" === _v38
              })
            }) : (0, _v1.jsx)(_v28.UploadDropzone, {
              className: "library-upload-dropzone",
              targetUserId: _v17 ?? 0,
              disabled: !_v68 || _v121 && _v25.canCreateRootFolders,
              topPosition: 205,
              destinationText: (0, _v12.translate)({
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
              }),
              children: (0, _v1.jsx)(_v148, {
                assetUrls: _v0,
                type: _v21.PlayerType.BarebonePlayer,
                children: (0, _v1.jsx)(_v145, {
                  canUpload: _v65,
                  deselectItem: _v86,
                  handleMoveItemsOnDrop: ({
                    dropTarget: _v0,
                    items: _v1
                  }) => {
                    let _v2 = new Set("");
                    _v2.add(_v0.uri), _v115(_v2), _v32(_v2);
                    let [,, _v3,, _v4] = _v0.uri.split("/");
                    _v113({
                      ownerId: parseInt(_v3, 10),
                      folderId: parseInt(_v4, 10),
                      targetItems: _v1
                    }).then(() => {
                      1 === _v1.length ? (_v86(_v1[0].uri, 0, _v99 || []), _v82(_v1[0].uri, "video")) : (_v88(), _v83(_v97)), _v34(null, {
                        label: _v0.name,
                        link: _v96(_v0.uri)
                      });
                    }).catch(_v0 => {
                      _v33({
                        content: _v0,
                        status: "error"
                      });
                    }).finally(() => {
                      _v115(new Set()), _v32(new Set());
                    });
                  },
                  hasFolderShareUpsell: !!_v25.canSeeUpsellModalOnShare,
                  hasReviewPageUpsell: !!_v25.hasVideoReviewPageDemo,
                  hasMultipleReviewLinks: !!_v25.hasMultipleReviewLinks,
                  items: _v99,
                  layout: _v62,
                  loadingFolderURIs: _v114,
                  onCopyVideo: _v36,
                  onFolderSettingsChange: _v0 => {
                    _v79(_v0), _v31();
                  },
                  onMoreInfo: _v7,
                  removeItem: _v82,
                  selectedItemURIs: _v97,
                  selectItem: _v85,
                  shouldShowPrivacy: _v64,
                  shouldShowFileSize: !0,
                  sort: _v9,
                  isEnterprise: _v69,
                  setIsUploadDropzoneEnabled: _v61,
                  isLoading: _v119 || !!_v120,
                  hasContentSpaceEnabled: _v25.hasContentSpaceEnabled
                })
              })
            }), (0, _v1.jsx)(_v71, {
              layout: _v62,
              canLoadMore: !_v118,
              isLoadingMore: _v119 || !!_v120,
              onActivate: () => _v76(_v77 + 1),
              isDropzoneEnabled: _v65 && !(_v121 && _v25.canCreateRootFolders),
              page: _v70
            })]
          }), !!_v29?.hasLibrarySidePanel && _v6 && (0, _v1.jsx)(_v53.Page.Panel, {
            children: (0, _v1.jsx)(_v22.ResourceSidePanel, {
              isOpen: !0,
              onClose: () => _v7(null),
              onVideoPrivacyChange: ({
                view: _v0
              }) => _v80(_v6, _v0 => ({
                ..._v0,
                privacy: {
                  ..._v0.privacy,
                  view: _v0
                }
              })),
              pageName: "video_library",
              uri: _v6
            })
          })]
        })
      }), (0, _v1.jsx)(_v59.ViewerAiUpsellModal, {
        step: _v2,
        onDismiss: _v3,
        onCtaClick: _v4,
        onErrorClose: _v5
      }), _v37, (0, _v1.jsx)(_v7.BulkActions, {
        canUseBulkTranslation: _v28,
        canAddToShowcases: _v111,
        canMoveSelection: _v100,
        canDeleteSelection: _v101,
        canChangePrivacySelection: _v102,
        canPublishContentToChina: _v25.regionalDeliveryPublishContentToChina && _v102,
        hasLegalHoldSelection: _v104,
        hasReachedMaxSelectionForMove: _v105,
        hasReachedMaxSelectionForPrivacy: _v106,
        hasReachedMaxSelectionForSentimentWidget: _v107,
        hasReachedMaxSelectionForShowcases: _v108,
        deselectAllItems: _v88,
        removeItems: _v83,
        selectedItems: _v110,
        selectedItemURIs: _v97,
        teamOwnerId: _v17,
        isPrivateModeOn: !_v25.privateModeOff
      })]
    });
  }
  let _v148 = ({
    children: _v0,
    assetUrls: _v1,
    type: _v2
  }) => _v1 ? (0, _v1.jsx)(_v20.PlayerContextProvider, {
    assetUrls: _v1,
    type: _v2,
    children: _v0
  }) : _v0;
  var _v149 = _v0.i(0);
  let _v150 = ({
    playerAssetUrls: _v0
  }) => {
    let _v1 = (0, _v149.useViewer)();
    return (0, _v1.jsx)(_v147, {
      playerAssetUrls: _v0,
      viewer: _v1
    });
  };
  _v150.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v39.VideoLibraryLayout, {
    hasSideNav: !0,
    hasUploader: _v1.hasUploader,
    children: _v0
  }), (0, _v2.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      hasUploader: !0,
      hasPlayerAPI: !0
    }
  }), {
    requireLogin: !0,
    noIndex: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v150], 0);
}