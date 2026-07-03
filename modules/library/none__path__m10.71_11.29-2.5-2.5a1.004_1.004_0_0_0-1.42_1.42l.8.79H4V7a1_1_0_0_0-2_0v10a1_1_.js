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
    _v10 = _v0.i(0);
  let _v11 = _v0 => (0, _v1.jsx)(_v10.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "m10.71 11.29-2.5-2.5a1.004 1.004 0 0 0-1.42 1.42l.8.79H4V7a1 1 0 0 0-2 0v10a1 1 0 1 0 2 0v-4h3.59l-.8.79a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l2.5-2.5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76 1 1 0 0 0-.21-.33ZM21 6a1 1 0 0 0-1 1v4h-3.59l.8-.79a1.005 1.005 0 0 0-1.42-1.42l-2.5 2.5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l2.5 2.5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095l-.8-.79H20v4a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1Z",
      fill: "currentColor"
    })
  });
  var _v12 = _v0.i(0),
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
    _v88 = _v0.i(0),
    _v89 = _v0.i(0);
  let _v90 = ({
      layout: _v0,
      isLoading: _v1,
      onLoadMore: _v2
    }) => {
      let _v3 = (0, _v5.useRef)(null),
        _v4 = (0, _v89.useOnScreen)(_v3);
      return ((0, _v5.useEffect)(() => {
        _v4 && !_v1 && _v2();
      }, [_v1, _v4, _v2]), _v0 === _v58.LAYOUT.LIST) ? (0, _v1.jsx)(_v86.Box, {
        height: "10rem",
        ref: _v3,
        children: (0, _v1.jsx)(_v88.LoadingStateList, {})
      }) : (0, _v1.jsx)(_v86.Box, {
        height: "10rem",
        ref: _v3
      });
    },
    _v91 = _v0 => {
      let {
        layout: _v1,
        isLoadingMore: _v2,
        canLoadMore: _v3 = !1,
        onActivate: _v4,
        isDropzoneEnabled: _v5 = !1,
        page: _v6 = ""
      } = _v0;
      return _v3 ? (0, _v1.jsx)(_v90, {
        layout: _v1,
        isLoading: _v2,
        onLoadMore: _v4
      }) : _v5 && !_v2 ? (0, _v1.jsx)(_v87.UploadDropzoneHint, {
        page: _v6
      }) : (0, _v1.jsx)(_v86.Box, {
        margin: "2.5rem 0 3rem",
        padding: "0 1.25rem"
      });
    };
  var _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0);
  let _v101 = (0, _v99.default)(() => _v0.A(0).then(_v0 => _v0.FolderSettingsModal), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v102 = (0, _v5.createContext)({
      setModalContextState: () => console.log("noop")
    }),
    _v103 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v5.useState)({
          activeModal: null,
          activeModalState: null
        }),
        _v3 = (0, _v5.useContext)(_v100.ViewerContext),
        _v4 = _v3?.teamUser?.ownerId ?? _v3?.user?.id,
        {
          activeModal: _v5,
          activeModalState: _v6
        } = _v1;
      return (0, _v1.jsxs)(_v102.Provider, {
        value: {
          setModalContextState: _v2
        },
        children: [_v0, "FolderSettings" === _v5 && _v4 && (0, _v1.jsx)(_v101, {
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
    _v104 = (0, _v5.lazy)(() => _v0.A(0).then(({
      TeamSwitcherDropzone: _v0
    }) => ({
      default: _v0
    }))),
    _v105 = ({
      owner: _v0,
      set360SourceType: _v1,
      threeSixtyType: _v2,
      isUnifiedLibrary: _v3 = !1
    }) => {
      let {
          setModalContextState: _v4
        } = (0, _v5.useContext)(_v102),
        _v5 = (0, _v97.useTeamUploadClipProperties)(_v0.id);
      return (0, _v1.jsx)(_v7.Flex, {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        children: (0, _v1.jsx)(_v5.Suspense, {
          fallback: (0, _v1.jsx)(_v86.Box, {
            paddingTop: "25vh",
            children: (0, _v1.jsx)(_v93.Spinner, {
              size: "xl"
            })
          }),
          children: (0, _v1.jsxs)(_v86.Box, {
            maxWidth: "100%",
            width: "100%",
            children: [(0, _v1.jsx)(_v104, {
              uploadClipProperties: _v5,
              uploadType: "UPLOAD",
              owner: _v0,
              selectedFolderId: null,
              selectedFolder: null,
              libraryEmptyStateContent: (0, _v1.jsxs)(_v7.Flex, {
                flexDirection: "column",
                alignItems: "center",
                children: [_v3 ? (0, _v1.jsx)(_v96.VideosStack, {
                  width: (0, _v92.rem)(64),
                  height: (0, _v92.rem)(64)
                }) : (0, _v1.jsx)(_v95.TeamLibrary, {
                  width: (0, _v92.rem)(64),
                  height: (0, _v92.rem)(64)
                }), (0, _v1.jsx)(_v94.Text, {
                  variant: "heading-lg",
                  margin: `${(0, _v92.rem)(16)} 0`,
                  children: _v3 ? (0, _v24.translate)({
                    singular: "Add content to your library",
                    dictionary: {
                      es: {
                        singular: "Añadir contenido a tu biblioteca"
                      },
                      "de-DE": {
                        singular: "Inhalte zu Ihrer Bibliothek hinzufügen"
                      },
                      "fr-FR": {
                        singular: "Ajouter du contenu à votre bibliothèque"
                      },
                      "ja-JP": {
                        singular: "ライブラリにコンテンツを追加"
                      },
                      "ko-KR": {
                        singular: "라이브러리에 콘텐츠 추가"
                      },
                      "pt-BR": {
                        singular: "Adicionar conteúdo à sua biblioteca"
                      },
                      "zh-CN": {
                        singular: "将内容添加到您的库"
                      }
                    }
                  }) : (0, _v24.translate)({
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
                }), (0, _v1.jsx)(_v86.Box, {
                  width: "65%",
                  children: (0, _v1.jsx)(_v94.Text, {
                    variant: "body-lg",
                    color: "text-secondary",
                    textAlign: "center",
                    children: (0, _v24.translate)({
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
                _v4({
                  activeModal: "FolderSettings",
                  activeModalState: {
                    location: "empty_state"
                  }
                });
              }
            }), (0, _v1.jsx)(_v98.EmptyStateDropzoneFooter, {
              set360SourceType: _v1,
              threeSixtyType: _v2
            })]
          })
        })
      });
    };
  var _v106 = _v0.i(0),
    _v107 = _v0.i(0);
  let _v108 = ({
    cta: _v0,
    header: _v1,
    icon: _v2,
    subheader: _v3
  }) => (0, _v1.jsxs)(_v7.Flex, {
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
    children: [_v2, (0, _v1.jsxs)(_v7.Flex, {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      margin: `${(0, _v92.rem)(16)} 0`,
      gap: "md",
      children: ["string" == typeof _v1 ? (0, _v1.jsx)(_v106.Header, {
        size: "lg",
        children: _v1
      }) : _v1, "string" == typeof _v3 ? (0, _v1.jsx)(_v107.Paragraph, {
        size: "lg",
        color: "text-secondary",
        marginBottom: "0",
        children: _v3
      }) : _v3]
    }), _v0]
  });
  _v108.SubheaderText = ({
    children: _v0
  }) => (0, _v1.jsx)(_v107.Paragraph, {
    size: "lg",
    color: "text-secondary",
    marginBottom: "0",
    children: _v0
  });
  let _v109 = ({
    isContributor: _v0 = !1
  }) => (0, _v1.jsx)(_v108, {
    header: (0, _v24.translate)({
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
    icon: (0, _v1.jsx)(_v95.TeamLibrary, {
      width: "64px",
      height: "64px"
    }),
    subheader: _v0 ? (0, _v24.translate)({
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
    }) : (0, _v24.translate)({
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
  var _v110 = _v0.i(0);
  let _v111 = _v0 => (0, _v1.jsx)(_v10.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        d: "M12.38 9.58a1 1 0 0 1 .33.21l2 2a.998.998 0 0 1 0 1.42.997.997 0 0 1-1.095.219.998.998 0 0 1-.325-.219l-.29-.3v2.59a1 1 0 1 1-2 0v-2.59l-.29.3a1.004 1.004 0 1 1-1.42-1.42l2-2a1 1 0 0 1 .33-.21 1 1 0 0 1 .76 0Z"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.224 6.055C10.021 6.006 9.794 6 9.012 6H7.8c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.82C4 8.361 4 8.942 4 9.8v4.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C6.361 18 6.943 18 7.8 18h8.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-2.4c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C17.639 8 17.057 8 16.2 8H13a1 1 0 0 1-.707-.293l-.594-.594c-.553-.552-.718-.709-.897-.818a2.002 2.002 0 0 0-.578-.24ZM9.114 4c.635 0 1.114 0 1.577.11a4 4 0 0 1 1.156.48c.406.248.745.588 1.194 1.037l.072.072.301.301h2.827c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01v2.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H7.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C2 15.71 2 15.046 2 14.242V9.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C6.29 4 6.954 4 7.758 4h1.356Z"
      })]
    })
  });
  var _v112 = _v0.i(0),
    _v113 = _v0.i(0);
  let _v114 = ({
    targetUserId: _v0,
    onInvitePeople: _v1,
    hasTeamMembers: _v2
  }) => {
    let _v3 = (0, _v5.useRef)(null),
      {
        uploadFiles: _v4,
        isLoading: _v5
      } = (0, _v113.useUploadFileList)({
        targetUserId: _v0,
        paywallTracking: {
          paywallTrigger: "team_library_empty_state_add_content",
          paywallLocation: "video_library",
          paywallType: "popup",
          paywallFeature: "quota"
        }
      });
    return (0, _v1.jsx)(_v7.Flex, {
      justifyContent: "center",
      width: "100%",
      children: (0, _v1.jsxs)(_v7.Flex, {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2xl",
        padding: "md",
        width: "100%",
        minHeight: (0, _v92.rem)(500),
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "stroke",
        borderRadius: "md",
        children: [(0, _v1.jsxs)(_v7.Flex, {
          flexDirection: "column",
          alignItems: "center",
          gap: "md",
          children: [(0, _v1.jsx)(_v95.TeamLibrary, {
            width: (0, _v92.rem)(64),
            height: (0, _v92.rem)(64)
          }), (0, _v1.jsx)(_v94.Text, {
            variant: "heading-lg",
            children: (0, _v24.translate)({
              singular: "Your Team Library is ready",
              dictionary: {
                es: {
                  singular: "La biblioteca de tu equipo está lista"
                },
                "de-DE": {
                  singular: "Ihre Team-Bibliothek ist bereit"
                },
                "fr-FR": {
                  singular: "La bibliothèque de votre équipe est prête"
                },
                "ja-JP": {
                  singular: "チームライブラリの準備ができました"
                },
                "ko-KR": {
                  singular: "팀 라이브러리가 준비되었습니다"
                },
                "pt-BR": {
                  singular: "A biblioteca da sua equipe está pronta"
                },
                "zh-CN": {
                  singular: "您的团队资料库已准备就绪"
                }
              }
            })
          }), (0, _v1.jsx)(_v86.Box, {
            maxWidth: (0, _v92.rem)(392),
            children: (0, _v1.jsx)(_v94.Text, {
              variant: "body-lg",
              color: "text-secondary",
              textAlign: "center",
              children: (0, _v24.translate)({
                singular: "This is your team's shared space. Collaborate, share content, and keep everyone in one place.",
                dictionary: {
                  es: {
                    singular: "Este es el espacio compartido de tu equipo. Colabora, comparte contenido y mantén a todos en un solo lugar."
                  },
                  "de-DE": {
                    singular: "Dies ist der gemeinsame Bereich Ihres Teams. Arbeiten Sie gemeinsam, teilen Sie Inhalte und halten Sie alle an einem Ort zusammen."
                  },
                  "fr-FR": {
                    singular: "Voici l'espace partagé de votre équipe. Collaborez, partagez du contenu et rassemblez tout le monde au même endroit."
                  },
                  "ja-JP": {
                    singular: "ここはチームの共有スペースです。共同で作業し、コンテンツを共有し、メンバー全員を一か所にまとめておきましょう。"
                  },
                  "ko-KR": {
                    singular: "여기는 팀의 공유 공간입니다. 협업하고, 콘텐츠를 공유하며 모든 구성원을 한곳에 모아두세요."
                  },
                  "pt-BR": {
                    singular: "Este é o espaço compartilhado da sua equipe. Colabore, compartilhe conteúdo e mantenha todos em um só lugar."
                  },
                  "zh-CN": {
                    singular: "这是您团队的共享空间。协作、分享内容，并将所有人集中在一处。"
                  }
                }
              })
            })
          })]
        }), (0, _v1.jsxs)(_v7.Flex, {
          flexDirection: "column",
          alignItems: "center",
          gap: "sm",
          width: (0, _v92.rem)(292),
          children: [!_v2 && (0, _v1.jsx)(_v6.Button, {
            variant: "primary",
            size: "lg",
            width: "100%",
            leftIcon: (0, _v1.jsx)(_v112.PersonUserAdd, {}),
            onClick: _v1,
            children: (0, _v24.translate)({
              singular: "Invite people",
              dictionary: {
                es: {
                  singular: "Invitar personas"
                },
                "de-DE": {
                  singular: "Personen einladen"
                },
                "fr-FR": {
                  singular: "Inviter des personnes"
                },
                "ja-JP": {
                  singular: "メンバーを招待する"
                },
                "ko-KR": {
                  singular: "초대"
                },
                "pt-BR": {
                  singular: "Convidar pessoas"
                },
                "zh-CN": {
                  singular: "邀请他人"
                }
              }
            })
          }), (0, _v1.jsx)(_v110.FileInput, {
            multiple: !0,
            ref: _v3,
            onChange: _v0 => {
              let _v1 = _v0.target.files;
              _v1?.length && _v4({
                files: _v1,
                targetUserId: _v0,
                folderId: void 0,
                uploadClipProperties: void 0
              }), _v3.current && (_v3.current.value = "");
            },
            isDisabled: _v5,
            sx: {
              display: "none"
            },
            accept: "video/*,.mkv,.m2ts"
          }), (0, _v1.jsx)(_v6.Button, {
            variant: _v2 ? "secondary" : "tertiary",
            size: "lg",
            width: "100%",
            leftIcon: (0, _v1.jsx)(_v111, {}),
            isDisabled: _v5,
            onClick: () => _v3.current?.click(),
            children: (0, _v24.translate)({
              singular: "Move content from My Library",
              dictionary: {
                es: {
                  singular: "Mover contenido desde Mi biblioteca"
                },
                "de-DE": {
                  singular: "Inhalte aus „Meine Bibliothek“ verschieben"
                },
                "fr-FR": {
                  singular: "Déplacer le contenu de Ma bibliothèque"
                },
                "ja-JP": {
                  singular: "マイライブラリからコンテンツを移動"
                },
                "ko-KR": {
                  singular: "내 라이브러리에서 콘텐츠 이동"
                },
                "pt-BR": {
                  singular: "Mover conteúdo da Minha Biblioteca"
                },
                "zh-CN": {
                  singular: "从“我的资料库”移动内容"
                }
              }
            })
          })]
        })]
      })
    });
  };
  var _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0);
  let _v121 = ({
    isOpen: _v0,
    onClose: _v1,
    analyticsLink: _v2,
    onAnalyticsClick: _v3,
    showNewFolder: _v4,
    showMergeLibraries: _v5,
    onMergeLibraries: _v6
  }) => {
    let {
        setModalContextState: _v7
      } = (0, _v5.useContext)(_v102),
      _v8 = (0, _v5.useContext)(_v100.ViewerContext),
      _v9 = _v8?.teamUser?.ownerId ?? _v8?.user?.id,
      {
        capabilities: _v10
      } = (0, _v20.useCapability)(["hasContentSpaceEnabled"], _v9),
      {
        trackLibraryNewFolderClicked: _v11
      } = (0, _v30.useLibraryTracking)();
    return (0, _v1.jsxs)(_v115.Drawer, {
      placement: "bottom",
      isOpen: _v0,
      onClose: _v1,
      children: [(0, _v1.jsx)(_v118.DrawerOverlay, {}), (0, _v1.jsxs)(_v117.DrawerContent, {
        bgColor: "fill-surface",
        margin: "0 auto !important",
        borderTopRadius: "xl",
        borderBottomRadius: "0",
        sx: {
          '&[data-placement="bottom"]': {
            maxWidth: `${(0, _v92.rem)(480)} !important`
          }
        },
        "data-testid": "library-header-overflow-sheet",
        children: [(0, _v1.jsx)(_v7.Flex, {
          justify: "center",
          pt: "2xs",
          pb: "2xs",
          children: (0, _v1.jsx)(_v86.Box, {
            w: (0, _v92.rem)(50),
            h: (0, _v92.rem)(4),
            borderRadius: "3xl",
            bgColor: "stroke"
          })
        }), (0, _v1.jsx)(_v116.DrawerBody, {
          pb: "lg",
          children: (0, _v1.jsxs)(_v7.Flex, {
            direction: "column",
            gap: "2xs",
            children: [_v2 && (0, _v1.jsx)(_v6.Button, {
              as: "a",
              href: _v2,
              variant: "tertiary",
              size: "lg",
              w: "100%",
              justifyContent: "flex-start",
              leftIcon: (0, _v1.jsx)(_v119.Analytics, {}),
              "data-testid": "library-header-overflow-analytics",
              onClick: () => {
                _v3?.(), _v1();
              },
              children: (0, _v24.translate)({
                singular: "Analytics",
                dictionary: {
                  es: {
                    singular: "Análisis"
                  },
                  "de-DE": {
                    singular: "Analytik"
                  },
                  "fr-FR": {
                    singular: "Analyses"
                  },
                  "ja-JP": {
                    singular: "分析"
                  },
                  "ko-KR": {
                    singular: "애널리틱스"
                  },
                  "pt-BR": {
                    singular: "Análises"
                  },
                  "zh-CN": {
                    singular: "分析"
                  }
                }
              })
            }), _v4 && (0, _v1.jsx)(_v6.Button, {
              variant: "tertiary",
              size: "lg",
              w: "100%",
              justifyContent: "flex-start",
              leftIcon: (0, _v1.jsx)(_v120.FolderPlus, {}),
              "data-testid": "library-header-overflow-new-folder",
              onClick: () => {
                _v11({
                  libraryType: (0, _v31.deriveLibraryType)({
                    hasContentSpaceEnabled: !!_v10.hasContentSpaceEnabled
                  })
                }), _v7({
                  activeModal: "FolderSettings",
                  activeModalState: {
                    location: "library_header"
                  }
                }), _v1();
              },
              children: (0, _v24.translate)({
                singular: "New folder",
                dictionary: {
                  es: {
                    singular: "Carpeta nueva"
                  },
                  "de-DE": {
                    singular: "Neuer Ordner"
                  },
                  "fr-FR": {
                    singular: "Nouveau dossier"
                  },
                  "ja-JP": {
                    singular: "新しいフォルダー"
                  },
                  "ko-KR": {
                    singular: "새 폴더"
                  },
                  "pt-BR": {
                    singular: "Nova pasta"
                  },
                  "zh-CN": {
                    singular: "新文件夹"
                  }
                }
              })
            }), _v5 && (0, _v1.jsx)(_v6.Button, {
              variant: "tertiary",
              size: "lg",
              w: "100%",
              justifyContent: "flex-start",
              leftIcon: (0, _v1.jsx)(_v11, {}),
              "data-testid": "library-header-overflow-merge-libraries",
              onClick: () => {
                _v6(), _v1();
              },
              children: (0, _v24.translate)({
                singular: "Merge libraries",
                dictionary: {
                  es: {
                    singular: "Fusionar bibliotecas"
                  },
                  "de-DE": {
                    singular: "Bibliotheken zusammenführen"
                  },
                  "fr-FR": {
                    singular: "Fusionner les bibliothèques"
                  },
                  "ja-JP": {
                    singular: "ライブラリを統合"
                  },
                  "ko-KR": {
                    singular: "라이브러리 병합"
                  },
                  "pt-BR": {
                    singular: "Mesclar bibliotecas"
                  },
                  "zh-CN": {
                    singular: "合并资料库"
                  }
                }
              })
            })]
          })
        })]
      })]
    });
  };
  var _v122 = _v0.i(0);
  let _v123 = () => {
    let {
        setModalContextState: _v0
      } = (0, _v5.useContext)(_v102),
      _v1 = (0, _v5.useContext)(_v100.ViewerContext),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      {
        capabilities: _v3
      } = (0, _v20.useCapability)(["hasContentSpaceEnabled"], _v2),
      {
        trackLibraryNewFolderClicked: _v4
      } = (0, _v30.useLibraryTracking)();
    return (0, _v1.jsx)(_v122.NewFolderButton, {
      onClick: () => {
        _v4({
          libraryType: (0, _v31.deriveLibraryType)({
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
  var _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0),
    _v127 = _v0.i(0),
    _v128 = _v0.i(0),
    _v129 = _v0.i(0),
    _v130 = _v0.i(0),
    _v131 = _v0.i(0),
    _v132 = _v0.i(0),
    _v133 = _v0.i(0),
    _v134 = _v0.i(0),
    _v135 = _v0.i(0),
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
    _v148 = _v0.i(0);
  let _v149 = "header",
    _v150 = "video card",
    _v151 = ({
      deselectItem: _v0,
      handleMoveItemsOnDrop: _v1,
      isEnterprise: _v2,
      items: _v3,
      libraryTitle: _v4,
      loadingFolderURIs: _v5 = new Set(),
      onCopyVideo: _v6,
      onFolderSettingsChange: _v7,
      onMoreInfo: _v8,
      onMoveFolderSuccess: _v9,
      onMoveFolderFailure: _v10,
      removeItem: _v11,
      selectedItemURIs: _v12,
      selectItem: _v13,
      setIsUploadDropzoneEnabled: _v14,
      sort: _v15,
      isLoading: _v16 = !1
    }) => {
      let _v17 = (0, _v131.useIsBokeh)(),
        _v18 = (0, _v5.useContext)(_v100.ViewerContext),
        {
          notifyItemMoveSuccess: _v19,
          notifyItemMoveToWorkspaceSuccess: _v20
        } = (0, _v53.useNotifications)(),
        _v21 = (0, _v39.useAnalyticsEvent)(),
        _v22 = _v133.BPAnalyticsV2.useContentManagamentHoverEvent(),
        _v23 = (0, _v136.usePageName)(),
        {
          getDisplayDateWithTime: _v24
        } = (0, _v143.useFormatDateTime)(),
        _v25 = (0, _v146.useVideoPrivacyBadgeHandlers)({
          surface: "card"
        }),
        _v26 = _v18?.teamUser?.ownerId ?? _v18?.user?.id,
        _v27 = (0, _v97.useTeamUploadClipProperties)(_v26),
        {
          capabilities: _v28
        } = (0, _v20.useCapability)(["canSeeUpsellModalOnShare", "hasVideoReviewPageDemo", "hasMultipleReviewLinks", "hasContentSpaceEnabled"], _v26),
        _v29 = (0, _v31.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v28.hasContentSpaceEnabled
        }),
        {
          trackLibraryFolderOpened: _v30
        } = (0, _v30.useLibraryTracking)(),
        _v31 = !!_v28.canSeeUpsellModalOnShare,
        _v32 = !!_v28.hasVideoReviewPageDemo,
        _v33 = !!_v28.hasMultipleReviewLinks;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [!!_v3?.length && _v3.map((_v0, _v1) => {
          if (_v0.video) {
            let _v0 = _v0.video,
              _v1 = _v0.isSelected,
              _v2 = !!_v0.metadata?.interactions?.edit?.uri,
              _v3 = _v0.isColdStorage ?? !1,
              _v4 = !!_v0.canMoveToProject && !_v3,
              _v5 = _v3 ? "" : _v2 ? _v0.manageLink : _v0.link,
              _v6 = (0, _v139.getTimestampBySort)(_v15.type, _v0.lastUserActionEventDate ?? "", _v0.createdTime),
              {
                videoPrivacy: _v7,
                variant: _v8,
                onPrivacyBadgeClick: _v9,
                openLockedVideoPaywall: _v10,
                tooltipLabel: _v11
              } = _v25(_v0);
            return (0, _v1.jsx)(_v127.AnalyticsEventProvider, {
              eventData: {
                location: _v150,
                video_privacy: _v0.privacy?.view,
                video_id: String((0, _v135.idFromUri)(_v0.uri)),
                video_app_id: (0, _v135.idFromUri)(_v0.app?.uri) ? String((0, _v135.idFromUri)(_v0.app?.uri)) : null,
                is_video_password_protected: !!_v0.password,
                video_embed_privacy: _v0.privacy?.embed,
                team_owner_id: String((0, _v135.idFromUri)(_v0.user.uri)),
                team_subscription_type: _v0.user.account
              },
              children: (0, _v1.jsx)(_v137.FolderItemDragWrapper, {
                type: _v126.ITEM_TYPES.ROOT_VIDEO,
                uri: _v0.uri,
                parentFolderUri: "root",
                thumbnail: _v0.pictures.sizes[1].link,
                canDrag: _v4,
                isSelected: !!_v1,
                selectedItemURIs: _v12,
                onDrop: _v1,
                setIsUploadDropzoneEnabled: _v14,
                children: (0, _v1.jsx)(_v145.VideoCard, {
                  title: _v0.name,
                  subtitle: _v24(_v6),
                  href: _v5 ?? "",
                  isDefaultPicture: _v0.pictures?.defaultPicture,
                  thumbnailSrc: _v0.pictures?.sizes[3].link,
                  avatarSrc: _v0.uploader?.pictures?.sizes[1].link,
                  avatarName: _v0.uploader?.name,
                  tagText: (0, _v132.secondsToDisplay)(_v0.duration),
                  isSelectable: _v0.isSelectable,
                  titleStyles: {
                    maxWidth: _v58.CONTENT_CARD_TITLE_MAX_WIDTH
                  },
                  isSelected: _v1,
                  configUrl: _v0.configUrl ?? "",
                  clipId: (0, _v135.idFromUri)(_v0?.uri),
                  pageName: _v23,
                  isColdStorage: _v3,
                  isManagedStorage: !0 === _v0.countsTowardManagedStorage,
                  lockedTooltipLabel: _v147.STORAGE_LIMIT_LOCKED_VIDEO_TOOLTIP_LABEL,
                  onLockedClick: _v3 ? _v10 : void 0,
                  onToggleSelected: () => {
                    _v21((0, _v82.genericClick)({
                      copy: `${_v12.size}`,
                      feature: _v82.AnalyticsFeatures.VIDEO_LIBRARY,
                      location: "video_card",
                      name: "select_item",
                      page: _v23,
                      target: _v0.isSelected ? "de-selected" : "selected",
                      type: "general",
                      target_path: null,
                      click_type: null,
                      device_type: null
                    }, 91)), _v0.isSelected ? _v0(_v0.uri, _v1, _v3) : _v13(_v0.uri, _v1, _v3);
                  },
                  hoverActions: (0, _v1.jsx)(_v142.HoverActions, {
                    type: "video",
                    entity: _v0,
                    canShare: !!(_v0.metadata?.interactions?.invite?.uri || _v31),
                    hasMoreInfo: !0,
                    onMoreInfo: () => _v8(_v0.uri)
                  }),
                  actionsMenu: (0, _v1.jsx)(_v140.VideoMenu, {
                    video: _v0,
                    feature: _v82.AnalyticsFeatures.VIDEO_LIBRARY,
                    onCopyVideo: _v6 ? () => _v6(_v0) : void 0,
                    onMoreInfo: () => _v8(_v0.uri),
                    onMoveSuccess: ({
                      selectedDestination: _v0,
                      video: _v1,
                      destinationWorkspaceId: _v2,
                      destinationWorkspaceName: _v3
                    }) => {
                      if (_v0(_v1.uri, _v1, _v3), _v11?.(_v1.uri, "video"), _v2 && _v3) {
                        let _v0 = "root" === _v0 ? _v4 : _v0.name,
                          _v1 = "root" === _v0 ? "/library" : (0, _v79.getFolderPageUriFromApiUri)(_v0.uri);
                        _v20(_v1.name, {
                          label: _v0,
                          workspaceName: _v3
                        }, () => {
                          _v18 && (0, _v124.switchTeam)(_v2, _v18.xsrft).finally(() => {
                            window.location.href = _v1;
                          });
                        });
                      } else "root" !== _v0 && _v19(_v1.name, {
                        label: _v0.name,
                        link: (0, _v79.getFolderPageUriFromApiUri)(_v0.uri)
                      });
                    },
                    onDelete: () => {
                      _v0(_v0.uri, _v1, _v3), _v11?.(_v0.uri, "video"), _v21(_v82.VideoActionAnalytics.clickDeleteVideo({
                        live_event_id: null,
                        origin_folder_id: null,
                        origin_type: null,
                        is_my_videos: null,
                        location: _v150
                      }));
                    },
                    analytics: {
                      location: "card",
                      element: "ellipses"
                    },
                    vimeoClickAnalytics: {
                      location: "video_card"
                    },
                    hasMoreInfo: !0,
                    hasReviewPageLinkUpsell: _v32,
                    hasUpsellInShareModal: _v31,
                    hasMultipleReviewLinks: _v33
                  }),
                  onClick: () => {
                    _v129.BigPictureClient.sendEvent(new _v129.Event("vimeo.click_video_card", 2, {
                      path: window.location.href,
                      entry_page: "team-library",
                      page: "team-library",
                      location: _v150,
                      video_id: String((0, _v135.idFromUri)(_v0.uri)),
                      video_privacy: _v0.privacy?.view,
                      video_embed_privacy: _v0.privacy?.embed,
                      is_preset_applied: null,
                      is_video_password_protected: !!_v0.password,
                      video_app_id: (0, _v135.idFromUri)(_v0.app?.uri) ? String((0, _v135.idFromUri)(_v0.app?.uri)) : null,
                      team_owner_id: String((0, _v135.idFromUri)(_v0.user.uri)),
                      team_size: _v18?.teamUser?.currentTeamSize ?? null,
                      team_subscription_type: _v18?.teamUser?.accountType ?? null,
                      actor_team_role: _v18?.teamUser?.plainTextPermissionLevel ?? null,
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
                    _v22({
                      entityType: "video",
                      pageName: "video_library"
                    });
                  },
                  videoPrivacy: _v7,
                  privacyBadgeVariant: _v8,
                  privacyBadgeTooltip: _v11,
                  onPrivacyBadgeClick: _v9
                })
              })
            }, _v0.uri);
          }
          if (_v0.folder) {
            let _v0 = parseInt(_v0.folder.uri.split("/")?.[2]),
              _v1 = parseInt(_v0.folder.uri.split("/")[4]),
              _v2 = _v15.type === _v58.SORT_OPTION.CREATED ? _v0.folder.createdTime : _v0.folder.lastUserActionEventDate ?? _v0.folder.createdTime;
            return (0, _v1.jsx)(_v138.FolderDropWrapper, {
              dropTarget: _v0.folder,
              dropTargetType: _v126.DROP_TARGET_TYPES.FOLDER_CARD,
              allowedDropEffect: _v126.ALLOWED_DROP_EFFECTS.MOVE,
              dropFileForUploadConfig: null != _v26 ? {
                targetUserId: _v26,
                folderId: _v1,
                folderName: _v0.folder.name,
                uploadClipProperties: _v27
              } : void 0,
              children: _v17 ? (0, _v1.jsx)(_v144.DroppableFolderCard, {
                title: _v0.folder?.name,
                subtitle: _v24(_v2),
                folderId: _v1,
                folderOwnerId: _v0,
                tagText: (0, _v148.numItemsText)(_v0.folder.metadata?.connections?.items?.total),
                titleStyles: {
                  maxWidth: _v58.CONTENT_CARD_TITLE_MAX_WIDTH
                },
                href: (0, _v79.getFolderPageUriFromApiUri)(_v0.folder.uri),
                backgroundColor: _v0.folder.settings?.color,
                hoverActions: (0, _v1.jsx)(_v142.HoverActions, {
                  type: "folder",
                  entity: _v0.folder
                }),
                pageName: _v23,
                actionsMenu: (0, _v1.jsx)(_v141.FolderMenu, {
                  folder: _v0.folder,
                  onSettingsChange: _v7,
                  onMoveSuccess: _v9,
                  onMoveFailure: _v10,
                  analytics: {
                    product: "Workflow",
                    feature: "video_library",
                    location: "folder_card"
                  },
                  libraryType: _v29
                }),
                onClick: () => {
                  _v129.BigPictureClient.sendEvent(new _v129.Event("vimeo.click_folder_card", 3, {
                    path: window.location.href,
                    entry_page: "team-library",
                    page: "team-library",
                    location: "folder card",
                    team_owner_id: String(_v0),
                    team_size: _v18?.teamUser?.currentTeamSize ?? null,
                    team_subscription_type: _v18?.teamUser?.accountType ?? null,
                    actor_team_role: _v18?.teamUser?.plainTextPermissionLevel ?? null,
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
                  })), _v30({
                    folderUri: _v0.folder?.uri,
                    isPrivateToUser: _v0.folder?.isPrivateToUser
                  });
                },
                onMouseEnter: () => {
                  _v22({
                    entityType: "folder",
                    pageName: "video_library"
                  });
                }
              }) : (0, _v1.jsx)(_v134.FolderCard, {
                id: `folder-card-${_v0.folder.uri?.split("/")?.pop()}`,
                folderOwnerId: _v0,
                onSettingsChange: _v7,
                isLoading: !!_v5 && _v5.has(_v0.folder.uri),
                headerSize: "6",
                subheaderSize: 100,
                baseUrl: _v18?.vimeoHttpsUrl || "",
                isEnterprise: _v2,
                ..._v0.folder
              }, _v0.folder.uri)
            }, _v0.folder.uri);
          }
          return (0, _v1.jsx)(_v1.Fragment, {});
        }), _v16 && (0, _v1.jsx)(_v130.LoadingCardsGrid, {})]
      });
    };
  function _v152({
    deselectItem: _v0,
    handleMoveItemsOnDrop: _v1,
    isEnterprise: _v2,
    items: _v3 = [],
    libraryTitle: _v4,
    loadingFolderURIs: _v5 = new Set(),
    onCopyVideo: _v6,
    onMoreInfo: _v7,
    onFolderSettingsChange: _v8,
    onMoveFolderSuccess: _v9,
    onMoveFolderFailure: _v10,
    removeItem: _v11,
    selectedItemURIs: _v12,
    selectItem: _v13,
    setIsUploadDropzoneEnabled: _v14,
    sort: _v15,
    isLoading: _v16 = !1
  }) {
    return (0, _v1.jsx)(_v127.AnalyticsEventProvider, {
      eventData: {
        location: "center",
        product: "Video Library",
        position_column: null
      },
      children: (0, _v1.jsx)(_v128.ContentGrid, {
        children: (0, _v1.jsx)(_v128.ContentGrid.Body, {
          children: (0, _v1.jsx)(_v151, {
            deselectItem: _v0,
            handleMoveItemsOnDrop: _v1,
            loadingFolderURIs: _v5,
            isEnterprise: _v2,
            items: _v3,
            libraryTitle: _v4,
            onCopyVideo: _v6,
            onFolderSettingsChange: _v8,
            onMoreInfo: _v7,
            onMoveFolderSuccess: _v9,
            onMoveFolderFailure: _v10,
            removeItem: _v11,
            selectedItemURIs: _v12,
            selectItem: _v13,
            setIsUploadDropzoneEnabled: _v14,
            sort: _v15,
            isLoading: _v16
          })
        })
      })
    });
  }
  var _v153 = _v0.i(0),
    _v154 = _v0.i(0),
    _v155 = _v0.i(0),
    _v156 = _v0.i(0),
    _v157 = _v0.i(0),
    _v158 = _v0.i(0),
    _v159 = _v0.i(0),
    _v160 = _v0.i(0),
    _v161 = _v0.i(0),
    _v162 = _v0.i(0);
  let _v163 = ["video.allowedPrivacies", "video.app.uri", "video.canMoveToProject", "video.configUrl", "video.contentRatingClass", "video.countsTowardManagedStorage", "video.createdTime", "video.customMetadata", "video.duration", "video.download.link", "video.download.type", "video.download.width", "video.download.height", "video.download.quality", "video.download.size", "video.download.publicName", "video.download.sizeShort", "video.embed.html", "video.embed.sentimentWidgets", "video.filesSize", "video.isColdStorage", "video.isColdPrivacyRestricted", "video.lastUserActionEventDate", "video.link", "video.manageLink", "video.metadata.canBeReplaced", "video.metadata.interactions.edit.uri", "video.metadata.interactions.delete.uri", "video.metadata.interactions.invite.uri", "video.metadata.interactions.legalHold.uri", "video.modifiedTime", "video.name", "video.pictures.defaultPicture", "video.pictures.uri", "video.pictures.sizes", "video.password", "video.privacy.view", "video.privacy.embed", "video.privacy.download", "video.privacy.add", "video.privacy.comments", "video.privacy.originalView", "video.regionalPrivacies", "video.releaseTime", "video.reviewLinks.uri", "video.reviewLinks.expiresOn", "video.reviewPage", "video.status", "video.type", "video.uploader.name", "video.uploader.pictures", "video.uri", "video.user.account", "video.user.uri", "video.user.uploadQuota.lifetime", "video.user.uploadQuota.periodic", "video.user.uploadQuota.space.unit", "folder.createdTime", "folder.isPrivateToUser", "folder.lastUserActionEventDate", "folder.name", "folder.uri", "folder.metadata.connections.items.uri", "folder.metadata.connections.items.total", "folder.metadata.connections.folders.total", "folder.settings", "folder.metadata.interactions.edit", "folder.metadata.interactions.editSettings", "folder.metadata.interactions.delete", "folder.metadata.interactions.invite", "folder.metadata.interactions.moveVideo", "folder.slackIncomingWebhooksId", "type"],
    _v164 = ({
      deselectItem: _v0,
      handleMoveItemsOnDrop: _v1,
      hasFolderShareUpsell: _v2,
      hasReviewPageUpsell: _v3,
      hasMultipleReviewLinks: _v4,
      items: _v5,
      libraryTitle: _v6,
      loadingFolderURIs: _v7,
      onCopyVideo: _v8,
      onMoreInfo: _v9,
      onMoveFolderSuccess: _v10,
      removeItem: _v11,
      selectedItemURIs: _v12,
      selectItem: _v13,
      setIsUploadDropzoneEnabled: _v14,
      shouldShowPrivacy: _v15 = !1,
      shouldShowFileSize: _v16 = !1,
      sort: _v17
    }) => {
      let {
          notifyItemMoveSuccess: _v18,
          notifyItemMoveToWorkspaceSuccess: _v19
        } = (0, _v53.useNotifications)(),
        _v20 = (0, _v39.useAnalyticsEvent)(),
        _v21 = (0, _v136.usePageName)(),
        {
          getDisplayDateWithTime: _v22
        } = (0, _v143.useFormatDateTime)(),
        _v23 = (0, _v5.useContext)(_v100.ViewerContext),
        {
          settings: _v24
        } = (0, _v27.useOrionSettings)(),
        _v25 = (0, _v146.useVideoPrivacyBadgeHandlers)({
          surface: "list"
        }),
        _v26 = _v23?.teamUser?.ownerId ?? _v23?.user?.id,
        {
          capabilities: _v27
        } = (0, _v20.useCapability)(["hasContentSpaceEnabled"], _v26),
        _v28 = (0, _v31.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v27.hasContentSpaceEnabled
        }),
        {
          trackLibraryFolderOpened: _v29
        } = (0, _v30.useLibraryTracking)(),
        _v30 = (0, _v97.useTeamUploadClipProperties)(_v26);
      return (0, _v1.jsx)(_v86.Box, {
        children: _v5?.length ? _v5?.map((_v0, _v1) => {
          if (_v0.video) {
            let {
                video: _v0
              } = _v0,
              {
                duration: _v1,
                link: _v2,
                name: _v3,
                pictures: _v4,
                manageLink: _v5,
                uri: _v6,
                filesSize: _v7
              } = _v0,
              _v8 = _v17.type === _v58.SORT_OPTION.CREATED ? _v0.createdTime : _v0.lastUserActionEventDate || "",
              _v9 = _v7 && _v7.totalSize > 0 ? (0, _v155.bytesToSize)(_v7.totalSize, 1) : "0MB",
              _v10 = (0, _v160.getFileSizeTooltip)(_v7?.fileSizeType),
              _v11 = _v4?.sizes[3].link,
              _v12 = _v0.isColdStorage ?? !1,
              _v13 = !!_v0.canMoveToProject && !_v12,
              {
                videoPrivacy: _v14,
                variant: _v15,
                onPrivacyBadgeClick: _v16,
                openLockedVideoPaywall: _v17,
                tooltipLabel: _v18
              } = _v25(_v0);
            return (0, _v1.jsx)(_v161.DraggableListVideo, {
              uri: _v6,
              title: _v3,
              clipId: (0, _v135.idFromUri)(_v6),
              canRename: !0,
              thumbnail: (0, _v1.jsx)(_v154.VideoThumbnail, {
                alt: _v3,
                badgeText: (0, _v132.secondsToDisplay)(_v1),
                isDefaultPicture: _v4?.defaultPicture,
                thumbnailSrc: _v11,
                isLocked: _v12
              }),
              thumbnailSrc: _v11,
              timestamp: _v22(_v8),
              privacy: _v15 ? (0, _v1.jsx)(_v153.ContentCard.VideoPrivacyBadge, {
                videoPrivacy: _v14,
                variant: _v15,
                layout: "inline",
                onClick: _v16,
                tooltipLabel: _v18,
                isDimmed: _v12
              }) : "",
              href: _v12 ? "" : _v5 ?? _v2,
              isLocked: _v12,
              isSelectable: _v0.isSelectable,
              isSelected: _v0.isSelected,
              lockedTooltipLabel: _v147.STORAGE_LIMIT_LOCKED_VIDEO_TOOLTIP_LABEL,
              onLockedClick: _v12 ? _v17 : void 0,
              pageName: _v21,
              onClick: () => {
                _v129.BigPictureClient.sendEvent(new _v129.Event("vimeo.click_video_card", 2, {
                  path: window.location.href,
                  entry_page: "team-library",
                  page: "team-library",
                  location: _v82.AnalyticsLocations.VIDEO_LIST,
                  video_id: String((0, _v135.idFromUri)(_v0.uri)),
                  video_privacy: _v0.privacy?.view,
                  video_embed_privacy: _v0.privacy?.embed,
                  is_preset_applied: null,
                  is_video_password_protected: !!_v0.password,
                  video_app_id: (0, _v135.idFromUri)(_v0.app?.uri) ? String((0, _v135.idFromUri)(_v0.app?.uri)) : null,
                  team_owner_id: String((0, _v135.idFromUri)(_v0.user.uri)),
                  team_size: _v23?.teamUser?.currentTeamSize ?? null,
                  team_subscription_type: _v23?.teamUser?.accountType ?? null,
                  actor_team_role: _v23?.teamUser?.plainTextPermissionLevel ?? null,
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
                _v20((0, _v82.genericClick)({
                  copy: `${_v12.size}`,
                  feature: _v82.AnalyticsFeatures.VIDEO_LIBRARY,
                  location: _v82.AnalyticsLocations.VIDEO_LIST,
                  name: "select_item",
                  page: _v21,
                  target: _v0.isSelected ? "de-selected" : "selected",
                  type: "general",
                  target_path: null,
                  click_type: null,
                  device_type: null
                }, 91)), _v0.isSelected ? _v0(_v6, _v1, _v5) : _v13(_v6, _v1, _v5);
              },
              shouldShowFileSize: _v16,
              fileSizeTooltip: _v10 ?? void 0,
              fileSize: _v9,
              isManagedStorage: !0 === _v0.countsTowardManagedStorage,
              hoverActions: (0, _v1.jsx)(_v158.ListViewHoverActionsContainer, {
                disableHoverBackground: _v0.isColdStorage,
                children: (0, _v1.jsx)(_v156.TopRightDecoration, {
                  video: _v0,
                  buttonVariant: "minimal",
                  flexDirection: "row",
                  location: "video_list",
                  canShare: !!(_v0.metadata?.interactions?.invite?.uri || _v2),
                  shareEventAnalyticsOverride: {
                    page: "LIBRARY"
                  },
                  hasVideoInfo: !0,
                  onVideoInfo: () => _v9(_v0.uri)
                })
              }),
              menuButton: (0, _v1.jsx)(_v140.VideoMenu, {
                video: _v0,
                feature: _v82.AnalyticsFeatures.VIDEO_LIBRARY,
                hasMoreInfo: !0,
                hasReviewPageLinkUpsell: _v3,
                hasUpsellInShareModal: _v2,
                hasMultipleReviewLinks: _v4,
                onCopyVideo: _v8 ? () => _v8(_v0) : void 0,
                onMoreInfo: () => _v9(_v0.uri),
                onMoveSuccess: ({
                  selectedDestination: _v0,
                  video: _v1,
                  destinationWorkspaceId: _v2,
                  destinationWorkspaceName: _v3
                }) => {
                  if (_v0(_v1.uri, _v1, _v5), _v11?.(_v1.uri, "video"), _v2 && _v3) {
                    let _v0 = "root" === _v0 ? _v6 : _v0.name,
                      _v1 = "root" === _v0 ? "/library" : (0, _v79.getFolderPageUriFromApiUri)(_v0.uri);
                    _v19(_v1.name, {
                      label: _v0,
                      workspaceName: _v3
                    }, () => {
                      _v23 && (0, _v124.switchTeam)(_v2, _v23.xsrft).finally(() => {
                        window.location.href = _v1;
                      });
                    });
                  } else "root" !== _v0 && _v18(_v1.name, {
                    label: _v0.name,
                    link: (0, _v79.getFolderPageUriFromApiUri)(_v0.uri)
                  });
                },
                onDelete: () => {
                  _v0(_v0.uri, _v1, _v5), _v11?.(_v0.uri, "video"), _v20(_v82.VideoActionAnalytics.clickDeleteVideo({
                    live_event_id: null,
                    origin_folder_id: null,
                    origin_type: null,
                    is_my_videos: null,
                    location: _v82.AnalyticsLocations.VIDEO_LIST
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
                _v14?.(!1);
              },
              onDragEnd: _v1,
              type: _v126.ITEM_TYPES.ROOT_VIDEO,
              selectedItemURIs: _v12,
              canDrag: _v13,
              parentFolderUri: "root",
              v2PageName: "video_library"
            }, _v6);
          }
          if (_v0.folder && _v0.folder.uri) {
            let {
                folder: _v0
              } = _v0,
              _v1 = _v17.type === _v58.SORT_OPTION.CREATED ? _v0.createdTime : _v0.lastUserActionEventDate || "",
              _v2 = parseInt(_v0.uri.split("/")?.[2]),
              _v3 = parseInt(_v0.folder.uri.split("/")[4]);
            return (0, _v1.jsx)(_v162.DroppableListFolder, {
              dropTarget: _v0,
              dropTargetType: _v126.DROP_TARGET_TYPES.FOLDER_CARD,
              allowedDropEffect: _v126.ALLOWED_DROP_EFFECTS.MOVE,
              dropFileForUploadConfig: _v24.enable_list_view_folder_upload && null != _v26 ? {
                targetUserId: _v26,
                folderId: _v3,
                folderName: _v0.name,
                uploadClipProperties: _v30
              } : void 0,
              isLoading: !!_v7 && _v7.has(_v0.uri),
              href: (0, _v79.getFolderPageUriFromApiUri)(_v0.uri),
              title: _v0.name,
              thumbnail: (0, _v1.jsx)(_v159.FolderRowThumbnail, {
                backgroundColor: _v0.settings?.color
              }),
              subTitle: (0, _v148.numItemsText)(_v0.folder.metadata?.connections?.items?.total),
              timestamp: _v22(_v1),
              privacy: _v15 ? "—" : "",
              shouldShowFileSize: _v16,
              pageName: _v21,
              fileSize: "—",
              folderId: _v3,
              canRename: !0,
              folderOwnerId: _v2,
              hoverActions: (0, _v1.jsx)(_v158.ListViewHoverActionsContainer, {
                children: (0, _v1.jsx)(_v157.FolderTopRightDecoration, {
                  folder: _v0,
                  buttonVariant: "minimal",
                  flexDirection: "row",
                  location: "video_list"
                })
              }),
              menuButton: (0, _v1.jsx)(_v141.FolderMenu, {
                folder: _v0,
                analytics: {
                  product: "Video Library",
                  feature: "video_library",
                  location: "folder_card"
                },
                onMoveSuccess: _v10,
                libraryType: _v28
              }),
              onClick: () => {
                _v129.BigPictureClient.sendEvent(new _v129.Event("vimeo.click_folder_card", 3, {
                  path: window.location.href,
                  entry_page: "mvv",
                  page: "mvv",
                  location: _v82.AnalyticsLocations.FOLDER_LIST,
                  team_owner_id: String(_v2),
                  team_size: _v23?.teamUser?.currentTeamSize ?? null,
                  team_subscription_type: _v23?.teamUser?.accountType ?? null,
                  actor_team_role: _v23?.teamUser?.plainTextPermissionLevel ?? null,
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
                })), _v29({
                  folderUri: _v0.folder?.uri,
                  isPrivateToUser: _v0.folder?.isPrivateToUser
                });
              },
              v2PageName: "video_library"
            }, _v0.uri);
          }
          return (0, _v1.jsx)(_v1.Fragment, {});
        }) : (0, _v1.jsx)(_v7.Flex, {
          direction: "column",
          width: "100%",
          gap: "sm",
          children: (0, _v1.jsx)(_v88.LoadingStateList, {})
        })
      });
    };
  function _v165({
    deselectItem: _v0,
    handleMoveItemsOnDrop: _v1,
    hasFolderShareUpsell: _v2,
    hasReviewPageUpsell: _v3,
    hasMultipleReviewLinks: _v4,
    items: _v5,
    libraryTitle: _v6,
    loadingFolderURIs: _v7 = new Set(),
    onCopyVideo: _v8,
    onMoreInfo: _v9,
    onMoveFolderSuccess: _v10,
    removeItem: _v11,
    selectedItemURIs: _v12 = new Set(),
    selectItem: _v13,
    setIsUploadDropzoneEnabled: _v14,
    shouldShowPrivacy: _v15 = !1,
    shouldShowFileSize: _v16 = !1,
    sort: _v17
  }) {
    return (0, _v1.jsx)(_v164, {
      deselectItem: _v0,
      handleMoveItemsOnDrop: _v1,
      libraryTitle: _v6,
      loadingFolderURIs: _v7,
      items: _v5,
      onCopyVideo: _v8,
      selectItem: _v13,
      selectedItemURIs: _v12,
      shouldShowPrivacy: _v15,
      shouldShowFileSize: _v16,
      setIsUploadDropzoneEnabled: _v14,
      sort: _v17,
      onMoreInfo: _v9,
      onMoveFolderSuccess: _v10,
      removeItem: _v11,
      hasFolderShareUpsell: _v2,
      hasReviewPageUpsell: _v3,
      hasMultipleReviewLinks: _v4
    });
  }
  function _v166({
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
    let _v22 = (0, _v5.useContext)(_v100.ViewerContext),
      _v23 = _v22?.teamUser?.ownerId ?? _v22?.user?.id,
      _v24 = (0, _v97.useTeamUploadClipProperties)(_v23),
      _v25 = _v21 ? (0, _v24.translate)({
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
      }) : (0, _v24.translate)({
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
        notifyItemMoveSuccess: _v26,
        notifyItemMoveToWorkspaceSuccess: _v27,
        notifyItemMoveFailure: _v28
      } = (0, _v53.useNotifications)(),
      {
        revalidateTopLevelFolders: _v29,
        revalidateFolderItems: _v30,
        revalidateRootItems: _v31
      } = (0, _v51.useRevalidate)(),
      _v32 = (_v0, _v1, _v2, _v3) => {
        _v29(), _v1[0].parentFolder?.uri ? _v30(_v1[0]?.parentFolder?.uri ?? "") : _v31(), "root" !== _v0 && _v30(_v0.uri);
        let _v4 = "root" === _v0 ? _v25 : _v0.name,
          _v5 = "root" === _v0 ? "/library" : (0, _v79.getFolderPageUriFromApiUri)(_v0.uri);
        _v2 && _v3 ? _v27(_v1[0].name, {
          label: _v4,
          workspaceName: _v3
        }, () => {
          _v22 && (0, _v124.switchTeam)(_v2, _v22.xsrft).finally(() => {
            window.location.href = _v5;
          });
        }) : _v26(_v1[0].name, {
          label: _v4,
          link: _v5
        });
      },
      {
        draggableItemIsHovering: _v33,
        dropRef: _v34
      } = (0, _v125.useDropFolder)({
        dropTargetType: _v126.DROP_TARGET_TYPES.FOLDER_MENU_ITEM,
        dropTarget: void 0,
        allowedDropEffect: null,
        dropFileForUploadConfig: null != _v23 && _v0 ? {
          targetUserId: _v23,
          folderId: void 0,
          folderName: _v25,
          uploadClipProperties: _v24
        } : void 0
      });
    return (0, _v1.jsx)(_v86.Box, {
      height: "100%",
      width: "100%",
      ref: _v34,
      backgroundColor: _v33 ? "rgba(23, 213, 255, 0.06)" : "transparent",
      borderColor: _v33 ? "vimeoBlue.500" : "transparent",
      borderRadius: "lg",
      borderWidth: ".125rem",
      transition: "background-color 0.2s ease, border-color 0.2s ease",
      children: _v19 === _v58.LAYOUT.GRID ? (0, _v1.jsx)(_v152, {
        deselectItem: _v1,
        handleMoveItemsOnDrop: _v2,
        isEnterprise: _v6,
        items: _v7,
        libraryTitle: _v25,
        loadingFolderURIs: _v8,
        onCopyVideo: _v9,
        onFolderSettingsChange: _v10,
        onMoreInfo: _v11,
        onMoveFolderSuccess: _v32,
        onMoveFolderFailure: (_v0, _v1) => {
          _v28(_v1[0].name, "root" === _v0 ? _v25 : _v0.name);
        },
        removeItem: _v12,
        selectedItemURIs: _v13,
        selectItem: _v14,
        setIsUploadDropzoneEnabled: _v15,
        sort: _v18,
        isLoading: _v20
      }) : (0, _v1.jsx)(_v165, {
        deselectItem: _v1,
        handleMoveItemsOnDrop: _v2,
        hasFolderShareUpsell: _v3,
        hasReviewPageUpsell: _v4,
        hasMultipleReviewLinks: _v5,
        items: _v7,
        libraryTitle: _v25,
        loadingFolderURIs: _v8,
        onCopyVideo: _v9,
        removeItem: _v12,
        selectedItemURIs: _v13,
        selectItem: _v14,
        setIsUploadDropzoneEnabled: _v15,
        shouldShowPrivacy: _v16,
        shouldShowFileSize: _v17,
        sort: _v18,
        onMoreInfo: _v11,
        onMoveFolderSuccess: _v32
      })
    });
  }
  let _v167 = ["video", "folder"];
  function _v168({
    playerAssetUrls: _v0,
    viewer: _v1
  }) {
    let {
        step: _v2,
        handleDismiss: _v3,
        handleCtaClick: _v4,
        handleErrorClose: _v5
      } = (0, _v77.useViewerAiUpsellModal)("library"),
      [_v6, _v7] = (0, _v5.useState)(null),
      _v8 = (0, _v9.useToast)(),
      [_v9, _v10] = (0, _v56.useSortPreference)(_v58.DEFAULT_SORT, _v58.VL_SORT_LOCAL_STORAGE_KEY),
      [_v11, _v12] = (0, _v57.useDateDisplayPreference)(_v58.DEFAULT_DATE_DISPLAY, _v58.VL_DATE_LOCAL_STORAGE_KEY),
      [_v13, _v14] = (0, _v5.useState)(null),
      [_v15, _v16] = (0, _v5.useState)(!1),
      _v17 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      [_v18, _v19] = (0, _v5.useState)(!1),
      _v20 = (0, _v5.useRef)(null),
      [_v21, _v22] = (0, _v5.useState)(!1),
      [_v23, _v24] = (0, _v5.useState)(!1),
      [_v25, _v26] = (0, _v5.useState)(!1),
      _v27 = _v17 && _v1 ? {
        apiUrl: _v1.apiUrl,
        jwt: _v1.jwt,
        ownerId: _v17
      } : void 0,
      _v28 = (0, _v39.useAnalyticsEvent)(),
      {
        trackLibraryPageDisplayed: _v29,
        trackLibraryViewChanged: _v30,
        trackLibraryFilterApplied: _v31,
        trackLibrarySortChanged: _v32
      } = (0, _v30.useLibraryTracking)(),
      _v33 = (0, _v4.useRouter)(),
      _v34 = {
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
        capabilities: _v35,
        ready: _v36
      } = (0, _v20.useCapability)(["canCreateRootFolders", "canAddTeamMembers", "canSeeUpsellModalOnShare", "privateModeOff", "canManageTeamCollections", "hasVideoReviewPageDemo", "hasEnterprise", "regionalDeliveryPublishContentToChina", "hasMultipleReviewLinks", "hasTeamPrivacy", "coldStorageClips", "canPerformBulkTranslations", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasVideoLibraryEmbeddableUploader"], `/users/${_v17}`),
      {
        loading: _v37,
        contentSpaceEnabled: _v38,
        isTeamGateEnabled: _v39,
        isSoleTeamOwner: _v40
      } = (0, _v18.useMergeLibrariesVisible)(`/users/${_v17}`),
      {
        listingParams: _v41
      } = (0, _v19.usePrivateToMeFolderListingParams)(`/users/${_v17}`),
      _v42 = !!_v35.canGenerateClipTextTranslation,
      _v43 = (!!_v35.canGenerateClipTranslation || _v42) && !!_v35.canPerformBulkTranslations,
      {
        revalidateRootItems: _v44,
        revalidateTopLevelFolders: _v45
      } = (0, _v51.useRevalidate)(),
      {
        setLoadingSideNavFolderURIs: _v46
      } = (0, _v5.useContext)(_v54.VideoLibraryLayoutContext),
      _v47 = (0, _v53.useNotification)(),
      {
        notifyItemMoveSuccess: _v48
      } = (0, _v53.useNotifications)(),
      _v49 = (0, _v5.useRef)(() => void 0),
      {
        openCopyVideoModal: _v50,
        copyVideoModal: _v51
      } = (0, _v74.useCopyVideoFlow)({
        onAfterCopySuccess: (_v0, _v1) => _v49.current(_v1.uri, _v0)
      }),
      _v52 = _v1?.teamUser?.plainTextPermissionLevel,
      _v53 = _v17 === _v1?.user?.id || "Admin" === _v52,
      _v54 = (0, _v36.useGracePeriodBillingUi)({
        orionFlag: "enable_library_grace_period_notifications",
        layout: {
          type: "library"
        }
      }),
      {
        hasColdStorage: _v55
      } = (0, _v84.useUserHasColdStorageVideos)({
        forceEligible: _v54.isStorageSuspended
      }),
      _v56 = !!_v35.coldStorageClips && _v53 || _v55 && _v53,
      {
        settings: _v57
      } = (0, _v27.useOrionSettings)(),
      _v58 = _v57?.cold_privacy_enabled ?? !1,
      {
        hasColdPrivacy: _v59,
        isLoading: _v60
      } = (0, _v83.useUserHasColdPrivacyVideos)({
        enabled: _v58 || _v55
      }),
      _v61 = _v58 && _v59,
      _v62 = (0, _v48.useContentTypeFilter)([..._v167]),
      _v63 = !(0, _v81.isContentTypeSelectionDefault)(_v167, _v62.value) && !(0, _v81.doesSelectionIncludeVideos)(_v167, _v62.value),
      _v64 = !(0, _v81.isContentTypeSelectionDefault)(_v167, _v62.draft) && !(0, _v81.doesSelectionIncludeVideos)(_v167, _v62.draft),
      _v65 = (0, _v50.useVideoAvailabilityFilter)(),
      _v66 = (0, _v47.useClipPrivacyFilter)(["unlisted", "password", "hide_from_vimeo", "team", "private", "public", ...(_v61 ? ["cold_privacy"] : [])], !!_v35?.hasTeamPrivacy),
      _v67 = [..._v66.value],
      _v68 = _v66.value.has("cold_privacy"),
      _v69 = (0, _v81.doesSelectionIncludeVideos)(_v167, _v62.value) && _v65.value.has("restricted") !== _v65.value.has("available") || _v68,
      _v70 = (0, _v49.useCreatedByFilter)(),
      _v71 = !!_v66.isFilterActive || !!_v70.isFilterActive || !!_v65.isFilterActive,
      _v72 = !!_v66.isFilterActive || !!_v70.isFilterActive,
      _v73 = !!_v66.isDraftActive || !!_v70.isDraftActive,
      _v74 = !!_v66.isFilterActive || !!_v70.isFilterActive,
      _v75 = !!_v66.isDraftActive || !!_v70.isDraftActive,
      [_v76, _v77] = (0, _v5.useState)(!0),
      [_v78, _v79] = (0, _v55.useLayoutPreference)(),
      _v80 = !!_v35.canCreateRootFolders,
      _v81 = !!(_v76 && _v53),
      _v82 = _v57?.enable_new_library_drag_and_drop_upload ?? !1,
      _v83 = _v55 || _v61,
      _v84 = _v81 && !_v82,
      _v85 = !!_v35.hasEnterprise,
      _v86 = !_v36 || _v37 ? "" : _v38 ? (0, _v24.translate)({
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
      }) : (0, _v24.translate)({
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
      });
    (0, _v38.useUploadLifecycle)((_v0, _v1) => {
      _v1.clipId && _v44();
    }, []), (0, _v26.useOttRedirect)({
      toast: _v8,
      config: {
        message: (0, _v24.translate)({
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
    let _v87 = (0, _v21.useIsMobile)(),
      _v88 = !!_v38,
      _v89 = !_v53 && _v88,
      {
        data: _v90,
        mutate: _v91,
        setSize: _v92,
        size: _v93
      } = (0, _v23.useGetUserFoldersRootInfinite)(() => {
        let _v0 = _v66.isFilterActive && !_v69 ? _v67.join(",") : void 0,
          _v1 = _v70.isFilterActive ? [..._v70.value].map(_v0 => _v0.userId) : void 0,
          _v2 = _v1?.length ? _v1.join(",") : void 0,
          _v3 = (0, _v81.getContentTypeApiFilterParam)(_v167, _v62.value);
        return _v17 && _v36 && !_v37 ? {
          where: {
            userId: _v17
          },
          select: _v163,
          query: {
            direction: _v9.direction,
            excludePersonalTeamFolder: _v38,
            flattenPrivateToMe: _v41.flattenPrivateToMe,
            excludeSharedVideos: _v89,
            includeColdStorageClips: _v56,
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
      {
        data: _v94
      } = (0, _v23.useGetUserFoldersRoot)(() => _v17 && _v36 && !_v37 ? {
        where: {
          userId: _v17
        },
        select: ["type"],
        query: {
          filter: "video",
          excludePersonalTeamFolder: _v38,
          flattenPrivateToMe: _v41.flattenPrivateToMe,
          excludeSharedVideos: _v89,
          includeColdStorageClips: _v56,
          perPage: 1
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      _v95 = _v94?.total ?? 0,
      _v96 = (0, _v5.useMemo)(() => _v90 ? _v90.flatMap(_v0 => {
        if (!_v0) return [];
        let _v1 = _v0.data.filter(_v0 => (0, _v80.passesLibraryItemClientFilters)({
          clipPrivacyFilter: _v66.value,
          contentTypeOptions: _v167,
          contentTypeSelection: _v62.value,
          item: _v0,
          shouldUseClientPipeline: _v69,
          videoAvailabilityFilter: _v65.value
        }));
        return [{
          ..._v0,
          data: _v1
        }];
      }) : _v90, [_v66.value, _v62.value, _v90, _v69, _v65.value]),
      _v97 = (0, _v5.useCallback)(({
        name: _v0,
        settings: {
          color: _v1
        },
        uri: _v2
      }) => {
        _v91(_v0 => _v0?.map(_v0 => ({
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
      }, [_v91]),
      _v98 = (0, _v5.useCallback)((_v0, _v1) => {
        _v91(_v0 => _v0 ? _v0.map(_v0 => ({
          ..._v0,
          data: _v0.data.map(_v0 => _v0.video?.uri === _v0 ? {
            ..._v0,
            video: _v1(_v0.video)
          } : _v0)
        })) : _v0, !1);
      }, [_v91]),
      _v99 = (0, _v5.useCallback)((_v0, _v1) => {
        let _v2 = !1;
        _v91(_v0 => {
          let _v1 = (0, _v78.insertOptimisticVideoCopy)(_v0, _v0, _v1);
          return _v2 = _v1.inserted, _v1.pages;
        }, !1), _v2 || _v44();
      }, [_v91, _v44]);
    (0, _v5.useEffect)(() => {
      _v49.current = _v99;
    }, [_v99]);
    let _v100 = (0, _v5.useCallback)((_v0, _v1) => {
        _v91(_v0 => _v0?.map(_v0 => ({
          ..._v0,
          data: _v0.data.filter(_v0 => _v0?.[_v1]?.uri !== _v0)
        })), !1);
      }, [_v91]),
      _v101 = (0, _v5.useCallback)(_v0 => {
        _v91(_v0 => _v0?.map(_v0 => ({
          ..._v0,
          data: _v0.data.filter(_v0 => {
            let _v1 = _v0.video?.uri || _v0.folder?.uri || _v0.liveEvent?.uri;
            return !!_v1 && !_v0.has(_v1);
          })
        })), !1);
      }, [_v91]),
      [_v102, {
        enhancedSelectItem: _v103,
        enhancedDeselectItem: _v104,
        selectAllItems: _v105,
        selectAllInFolder: _v106,
        syncAllInFolderSelection: _v107,
        deselectAllItems: _v108,
        shiftKeyChange: _v109
      }] = (0, _v85.useSelectedItems)(),
      _v110 = (0, _v5.useCallback)(() => {
        let _v0 = _v62.value,
          _v1 = (0, _v81.isContentTypeOptionChecked)(_v167, _v0, "video"),
          _v2 = _v65.value,
          _v3 = _v2.has("restricted"),
          _v4 = _v2.has("available");
        _v108();
        let _v5 = () => new Set(["restricted", "available"]);
        if (!_v1) {
          _v62.setSelection((0, _v81.includeVideosInSelection)(_v167, _v0)), _v65.setValue(_v5());
          return;
        }
        if (!_v3 && !_v4) {
          _v62.setSelection((0, _v81.excludeVideosFromSelection)(_v167, _v0)), _v65.clearFilter();
          return;
        }
        if (_v3 !== _v4) return void _v65.setValue(_v5());
        if (_v3 && _v4) {
          _v65.clearFilter(), _v62.setSelection((0, _v81.excludeVideosFromSelection)(_v167, _v0));
          return;
        }
      }, [_v62, _v108, _v65]),
      _v111 = (0, _v5.useCallback)(() => {
        let _v0 = _v62.draft,
          _v1 = (0, _v81.isContentTypeOptionChecked)(_v167, _v0, "video"),
          _v2 = _v65.draft,
          _v3 = _v2.has("restricted"),
          _v4 = _v2.has("available");
        _v108();
        let _v5 = () => new Set(["restricted", "available"]);
        if (!_v1) {
          _v62.setSelection((0, _v81.includeVideosInSelection)(_v167, _v0), !0), _v65.setDraft(_v5());
          return;
        }
        if (!_v3 && !_v4) {
          _v62.setSelection((0, _v81.excludeVideosFromSelection)(_v167, _v0), !0), _v65.setDraft(new Set());
          return;
        }
        if (_v3 !== _v4) return void _v65.setDraft(_v5());
        if (_v3 && _v4) {
          _v65.setDraft(new Set()), _v62.setSelection((0, _v81.excludeVideosFromSelection)(_v167, _v0), !0);
          return;
        }
      }, [_v62, _v108, _v65]),
      _v112 = _v55 || _v55 ? {
        onVideoParentCheckboxClick: _v110,
        setVideoAvailabilityFilter: _v0 => {
          let _v1 = _v62.value;
          (0, _v81.isContentTypeOptionChecked)(_v167, _v1, "video") || _v62.setSelection((0, _v81.includeVideosInSelection)(_v167, _v1)), _v65.updateFilterValues(_v0);
        },
        showAvailableOption: _v55,
        showRestrictedOption: _v55,
        videoAvailabilityFilter: _v65.value
      } : void 0,
      _v113 = _v55 || _v55 ? {
        onVideoParentCheckboxClick: _v111,
        onVideoAvailabilityChange: _v0 => {
          let _v1 = _v62.draft;
          (0, _v81.isContentTypeOptionChecked)(_v167, _v1, "video") || _v62.setSelection((0, _v81.includeVideosInSelection)(_v167, _v1), !0), _v65.updateFilterValues(_v0, !0);
        },
        showAvailableOption: _v55,
        showRestrictedOption: _v55,
        videoAvailabilityDraft: _v65.draft
      } : void 0,
      _v114 = (0, _v5.useRef)(!1),
      _v115 = (0, _v5.useCallback)(_v0 => {
        "Shift" === _v0.key && (_v114.current = !_v114.current, _v109(_v114.current));
      }, [_v114, _v109]);
    (0, _v5.useEffect)(() => (window.addEventListener("keydown", _v115), window.addEventListener("keyup", _v115), () => {
      window.removeEventListener("keydown", _v115), window.removeEventListener("keyup", _v115);
    }), [_v115]), (0, _v5.useEffect)(() => {
      _v87 || _v16(!1);
    }, [_v87]);
    let _v116 = _v33.query.filter;
    (0, _v5.useEffect)(() => {
      !_v55 || "string" != typeof _v116 || "locked" !== _v116.toLowerCase() || (!_v65.value.has("restricted") || _v65.value.has("available")) && (_v62.setSelection(new Set(["video", "folder"])), _v65.setValue(new Set(["restricted"])));
    }, [_v116, _v55]);
    let _v117 = (0, _v5.useRef)(!1);
    (0, _v5.useEffect)(() => {
      _v117.current || !_v61 || "string" != typeof _v116 || "cold_privacy" === _v116.toLowerCase() && (_v117.current = !0, _v66.value.has("cold_privacy") || _v66.updateFilterValues("cold_privacy"));
    }, [_v116, _v61]), (0, _v5.useEffect)(() => {
      if (!_v55 || (0, _v50.isVideoAvailabilityFilterExplicitlyEngaged)(_v65.value)) return;
      let _v0 = _v62.value;
      if (1 !== _v0.size || !_v0.has("video") || (_v62.setSelection(new Set()), !_v33.isReady)) return;
      let _v1 = _v33.query.filter;
      if ("string" != typeof _v1 || "locked" !== _v1.toLowerCase()) return;
      let _v2 = {
        ..._v33.query
      };
      delete _v2.filter, _v33.replace({
        pathname: _v33.pathname,
        query: _v2
      }, void 0, {
        shallow: !0
      });
    }, [_v65.value, _v62.value, _v55, _v33.isReady, _v33.pathname, _v33.query.filter]);
    let _v118 = _v102.selectedItemURIs,
      _v119 = (0, _v5.useMemo)(() => _v96?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data.filter(_v0 => {
        let _v1 = (0, _v22.camelizeString)(_v0.type);
        return _v0[_v1]?.uri;
      })), [_v96]),
      _v120 = (0, _v5.useMemo)(() => ({
        canDeleteItem: {
          fields: ["video.metadata.interactions.delete.uri"],
          test: _v0 => !!_v0?.video?.metadata?.interactions?.delete
        },
        canMoveItem: {
          fields: ["video.canMoveToProject"],
          test: _v0 => !!_v0?.video?.canMoveToProject
        },
        canChangeItemPrivacy: {
          fields: ["video.metadata.interactions.edit.uri"],
          test: _v0 => !!_v0?.video && !!_v0?.video?.metadata?.interactions?.edit
        },
        canAddToShowcases: {
          fields: ["video.metadata.interactions.edit.uri"],
          test: _v0 => !!_v0?.video && !!_v0?.video?.metadata?.interactions?.edit
        },
        hasLegalHold: {
          fields: ["video.metadata.interactions.legalHold.uri"],
          test: _v0 => !!_v0.video?.uri && !!_v0.video?.metadata?.interactions?.legalHold?.uri
        }
      }), []),
      {
        allItems: _v121,
        canMoveSelection: _v122,
        canDeleteSelection: _v123,
        canChangePrivacySelection: _v124,
        canAddToShowcasesSelection: _v125,
        hasColdStorageSelection: _v126,
        hasLegalHoldSelection: _v127,
        hasReachedMaxSelectionForMove: _v128,
        hasReachedMaxSelectionForPrivacy: _v129,
        hasReachedMaxSelectionForSentimentWidget: _v130,
        hasReachedMaxSelectionForShowcases: _v131,
        canSelectURIs: _v132,
        selectedItems: _v133,
        maxBulkActionSelection: _v134
      } = (0, _v45.useBulkItems)({
        ...(0, _v44.toPredicateFns)(_v120),
        items: _v119,
        selectedURIs: _v118,
        allowColdStorageDeletion: !0
      }),
      _v135 = !!_v35.canManageTeamCollections,
      _v136 = (0, _v5.useCallback)(() => {
        _v105(_v121, _v132);
      }, [_v121, _v132, _v105]),
      [_v137] = (0, _v52.useMoveItem)(),
      [_v138, _v139] = (0, _v5.useState)(new Set());
    (0, _v5.useEffect)(() => {
      !_v87 && _v72 && _v62.setSelection(new Set(["video"]));
    }, [_v87, _v72]), (0, _v5.useEffect)(() => {
      _v73 && _v62.setSelection(new Set(["video"]), !0);
    }, [_v73]);
    let _v140 = _v1?.vimeoHttpsUrl ? _v1?.vimeoHttpsUrl + "/analytics" : void 0,
      _v141 = _v1?.teamUser,
      {
        isDone: _v142,
        isLoadingInitialData: _v143,
        isLoadingMore: _v144
      } = (0, _v37.getInfiniteRequestLoadingState)({
        data: _v90,
        itemsPerPage: 25,
        size: _v93
      }),
      _v145 = _v121?.length === 0,
      _v146 = !!_v62.isFilterApplied,
      _v147 = !_v89,
      _v148 = _v146 || _v71 || (0, _v50.isVideoAvailabilityFilterExplicitlyEngaged)(_v65.value),
      _v149 = _v69 ? _v119?.length : _v96?.[0]?.total,
      _v150 = (0, _v5.useRef)(!1);
    (0, _v5.useEffect)(() => {
      if (!_v33.isReady || _v150.current || "1" !== _v33.query.library_merge_toast || void 0 === _v149) return;
      _v150.current = !0, _v47({
        content: (0, _v24.translate)({
          singular: "Your library is now one place. {COUNT} item is here.",
          plural: "Your library is now one place. All {COUNT} items are here.",
          count: _v149,
          replacements: {
            COUNT: _v149
          },
          dictionary: {
            es: {
              singular: "Tu biblioteca ahora está en un solo lugar. {COUNT} elemento está aquí.",
              plural: "Tu biblioteca ahora está en un solo lugar. Todos los {COUNT} elementos están aquí."
            },
            "de-DE": {
              singular: "Ihre Bibliothek ist jetzt an einem Ort. {COUNT} Element ist hier.",
              plural: "Ihre Bibliothek ist jetzt an einem Ort. Alle {COUNT} Elemente sind hier."
            },
            "fr-FR": {
              singular: "Votre bibliothèque est désormais en un seul et même endroit. {COUNT} élément est ici.",
              plural: "Votre bibliothèque est désormais en un seul et même endroit. Tous les {COUNT} éléments sont ici."
            },
            "ja-JP": {
              singular: "ライブラリが1か所にまとまりました。 {COUNT}件がここにあります。",
              plural: "ライブラリが1か所にまとまりました。 {COUNT}件すべてがここにあります。"
            },
            "ko-KR": {
              singular: "이제 라이브러리가 한 곳에 모였습니다. {COUNT}개의 항목이 여기에 있습니다.",
              plural: "이제 라이브러리가 한 곳에 모였습니다. 모든 {COUNT}개의 항목이 여기에 있습니다."
            },
            "pt-BR": {
              singular: "Sua biblioteca agora está em um único lugar. {COUNT} item está aqui.",
              plural: "Sua biblioteca agora está em um único lugar. Todos os {COUNT} itens estão aqui."
            },
            "zh-CN": {
              singular: "您的媒体库现在已集中到一个地方. 此处有 {COUNT} 个项目在这里.",
              plural: "您的媒体库现在已集中到一个地方. 所有 {COUNT} 个项目都在这里."
            }
          }
        }),
        status: "success"
      });
      let _v0 = {
        ..._v33.query
      };
      delete _v0.library_merge_toast, _v33.replace({
        pathname: _v33.pathname,
        query: _v0
      }, void 0, {
        shallow: !0
      });
    }, [_v33.isReady, _v33.query.library_merge_toast, _v149]);
    let {
        isEnabled: _v151
      } = (0, _v46.useEnableFolderBulkPrivacy)(),
      _v152 = _v151 && !!_v118.size && !!_v95 && _v95 <= _v134 && !_v148,
      _v153 = !!_v102.isAllInFolderSelected,
      _v154 = (0, _v44.useSelectAllItems)({
        enabled: _v151 && _v153 && !!_v95 && _v95 <= _v134 && !_v148 && !!_v17 && _v36 && !_v37,
        maxItems: _v134,
        source: {
          kind: "root",
          userId: _v17,
          excludePersonalTeamFolder: _v38,
          flattenPrivateToMe: _v41.flattenPrivateToMe,
          excludeSharedVideos: _v89,
          includeColdStorageClips: _v56
        },
        predicates: _v120
      }),
      _v155 = _v153 && !_v154.isReady,
      _v156 = _v153 && _v154.isReady ? _v154 : {
        selectedItems: _v133,
        selectedItemURIs: _v118,
        canAddToShowcasesSelection: _v125,
        canMoveSelection: _v122,
        canDeleteSelection: _v123,
        canChangePrivacySelection: _v124,
        hasColdStorageSelection: _v126,
        hasLegalHoldSelection: _v127,
        hasReachedMaxSelectionForMove: _v128,
        hasReachedMaxSelectionForPrivacy: _v129,
        hasReachedMaxSelectionForSentimentWidget: _v130,
        hasReachedMaxSelectionForShowcases: _v131
      };
    (0, _v5.useEffect)(() => {
      _v153 && _v132.size && _v107(_v121, _v132);
    }, [_v153, _v121, _v132, _v107]);
    let _v157 = _v53 && !!_v140,
      _v158 = !!_v35.hasVideoLibraryEmbeddableUploader && _v53 && !!_v17,
      _v159 = !!_v35.canCreateRootFolders,
      _v160 = _v39 && !_v37 && _v53,
      _v161 = _v157 || _v158 || _v159 || _v160;
    return (0, _v29.usePicoEffect)(() => {
      if (!_v36 || void 0 === _v149) return !1;
      let _v0 = (0, _v31.deriveLibraryReferrerPage)(_v33.query.library_referrer);
      _v29({
        libraryType: (0, _v31.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v38
        }),
        libraryItemCount: _v149,
        referrerPage: _v0
      });
    }, [_v36, _v149, _v38, _v33.query.library_referrer], {
      once: !0
    }), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v35.InviteModal, {
        onSuccess: () => window.location.reload(),
        children: (0, _v1.jsx)("button", {
          ref: _v20,
          type: "button",
          "aria-hidden": "true",
          tabIndex: -1,
          style: {
            display: "none"
          }
        })
      }), _v27 && (0, _v1.jsx)(_v16.StartYourTeamFlow, {
        apiConfig: _v27,
        defaultTeamName: _v1?.user?.name ?? "",
        isOpen: _v18,
        onClose: () => _v19(!1),
        paywall: {
          templateType: "default",
          tracking: {
            params: {
              feature: "teams",
              location: "library_header",
              page: "library",
              upsell_name: "start_team",
              integration: "none"
            },
            paywallTracking: {
              paywallTrigger: "library_header_start_team_button",
              paywallLocation: "library_header",
              paywallType: "popup",
              paywallFeature: "teams"
            }
          }
        }
      }), _v27 && (0, _v1.jsx)(_v14.DropYourTeamModal, {
        apiConfig: _v27,
        isOpen: _v21,
        onClose: () => _v22(!1),
        onDropped: () => window.location.reload()
      }), _v27 && (0, _v1.jsx)(_v15.MergeLibrariesModal, {
        isOpen: _v23,
        onClose: () => _v24(!1),
        userId: _v1?.user?.id,
        apiConfig: _v27,
        onMerged: () => window.location.reload()
      }), (0, _v1.jsx)(_v103, {
        children: (0, _v1.jsxs)(_v68.Page, {
          children: [(0, _v1.jsxs)(_v68.Page.Main, {
            children: [(0, _v1.jsxs)(_v68.Page.StickyTop, {
              children: [_v54.banner, (0, _v1.jsx)(_v28.ReverseTrialLateBanner, {
                hostLocation: "library"
              }), _v83 && (0, _v1.jsx)(_v25.ColdStorageBanner, {
                surface: "library",
                hasColdStorage: _v55,
                hasColdPrivacy: _v61,
                hasColdPrivacyForTracking: _v59,
                isColdPrivacyLoading: _v60
              }), (0, _v1.jsx)(_v67.PageHeader, {
                actions: (() => {
                  if (!_v161) return;
                  let _v0 = _v160 && _v17 ? (0, _v1.jsx)(_v17.TeamMembersPreview, {
                      ownerId: _v17,
                      viewerName: _v1?.user?.name ?? "",
                      viewerAvatarSrc: _v1?.user?.pictures?.sizes?.[0]?.link,
                      viewerUri: _v1?.user?.uri,
                      contentSpaceEnabled: _v38,
                      isSoleTeamMember: _v40,
                      isLoading: _v37,
                      onStartYourTeam: () => _v19(!0),
                      onInviteMembers: () => _v20.current?.click()
                    }) : null,
                    _v1 = _v157 && _v140 ? (0, _v1.jsx)(_v43.AnalyticsButton, {
                      analyticsLink: _v140,
                      location: _v149,
                      page: "library",
                      name: "click_library_analytics",
                      dataTestId: "library-header-analytics-button"
                    }) : null,
                    _v2 = _v158 && _v17 ? (0, _v1.jsx)(_v42.UploadButton, {
                      paywallTrigger: "library_header_upload_button",
                      targetUserId: _v17,
                      testIdPrefix: "library-header-upload-button",
                      onClick: () => _v28((0, _v82.genericClick)({
                        copy: "Upload",
                        feature: "video_library",
                        location: _v149,
                        name: "click_upload_button",
                        page: "library",
                        target: null,
                        target_path: null,
                        click_type: null,
                        device_type: null,
                        type: "general"
                      }, 91))
                    }) : null,
                    _v3 = _v159 ? (0, _v1.jsx)(_v123, {}) : null,
                    _v4 = !!(_v27 && _v39 && !_v37 && _v40 && _v38),
                    _v5 = _v4 ? (0, _v1.jsx)(_v6.Button, {
                      "data-testid": "library-header-merge-libraries-button",
                      variant: "secondary",
                      size: "md",
                      leftIcon: (0, _v1.jsx)(_v11, {}),
                      onClick: () => _v24(!0),
                      children: (0, _v24.translate)({
                        singular: "Merge libraries",
                        dictionary: {
                          es: {
                            singular: "Fusionar bibliotecas"
                          },
                          "de-DE": {
                            singular: "Bibliotheken zusammenführen"
                          },
                          "fr-FR": {
                            singular: "Fusionner les bibliothèques"
                          },
                          "ja-JP": {
                            singular: "ライブラリを統合"
                          },
                          "ko-KR": {
                            singular: "라이브러리 병합"
                          },
                          "pt-BR": {
                            singular: "Mesclar bibliotecas"
                          },
                          "zh-CN": {
                            singular: "合并资料库"
                          }
                        }
                      })
                    }) : null;
                  if (!_v87) return (0, _v1.jsxs)(_v1.Fragment, {
                    children: [_v0, _v1, _v2, _v3, _v5]
                  });
                  let _v6 = !!(_v157 && _v140),
                    _v7 = _v6 || _v159 || _v4;
                  return (0, _v1.jsxs)(_v1.Fragment, {
                    children: [_v0, _v2, _v7 && (0, _v1.jsxs)(_v1.Fragment, {
                      children: [(0, _v1.jsx)(_v8.IconButton, {
                        "aria-label": (0, _v24.translate)({
                          singular: "More options",
                          dictionary: {
                            es: {
                              singular: "Más opciones"
                            },
                            "de-DE": {
                              singular: "Mehr Optionen"
                            },
                            "fr-FR": {
                              singular: "Plus d'options"
                            },
                            "ja-JP": {
                              singular: "その他のオプション"
                            },
                            "ko-KR": {
                              singular: "옵션 더 보기"
                            },
                            "pt-BR": {
                              singular: "Mais opções"
                            },
                            "zh-CN": {
                              singular: "更多选项"
                            }
                          }
                        }),
                        "data-testid": "library-header-overflow-button",
                        icon: (0, _v1.jsx)(_v12.EllipsisV, {}),
                        variant: "tertiary",
                        size: "md",
                        onClick: () => _v26(!0)
                      }), (0, _v1.jsx)(_v121, {
                        isOpen: _v25,
                        onClose: () => _v26(!1),
                        analyticsLink: _v6 ? _v140 : void 0,
                        onAnalyticsClick: () => _v28((0, _v82.genericClick)({
                          copy: "Analytics",
                          feature: _v82.AnalyticsFeatures.ANALYTICS,
                          location: _v149,
                          name: "click_library_analytics",
                          page: "library",
                          target: _v140 ?? "",
                          target_path: null,
                          type: "general"
                        })),
                        showNewFolder: _v159,
                        showMergeLibraries: _v4,
                        onMergeLibraries: () => _v24(!0)
                      })]
                    })]
                  });
                })(),
                bottomBar: (0, _v1.jsxs)(_v60.FilterSortBar, {
                  checkbox: (0, _v1.jsx)(_v69.CheckboxItemCount, {
                    hasCheckbox: !!_v132.size,
                    isChecked: !!_v118.size,
                    isDisabled: !_v132.size,
                    isIndeterminate: !!_v118.size && _v118.size < _v132.size,
                    isLoading: _v143,
                    onChange: () => {
                      _v118.size ? _v108() : _v136();
                    },
                    selectedItemCount: _v118.size,
                    subtitle: !!_v149 && (_v148 ? (0, _v24.translate)({
                      count: _v149,
                      singular: "{NUM_ITEMS} result",
                      plural: "{NUM_ITEMS} results",
                      replacements: {
                        NUM_ITEMS: _v149
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
                    }) : (0, _v24.translate)({
                      count: _v149,
                      singular: "{NUM_ITEMS} item",
                      plural: "{NUM_ITEMS} items",
                      replacements: {
                        NUM_ITEMS: _v149
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
                  layout: _v78,
                  setLayout: _v0 => {
                    _v79(_v0), _v30({
                      libraryType: (0, _v31.deriveLibraryType)({
                        hasContentSpaceEnabled: !!_v38
                      }),
                      libraryNewView: "GRID_LAYOUT" === _v0 ? "grid" : "list"
                    });
                  },
                  shouldHideViewControls: _v145 && !_v148,
                  sort: _v9,
                  setSort: _v0 => {
                    let _v1 = `${_v9.type.toLowerCase()}_${_v9.direction.toLowerCase()}`,
                      _v2 = `${_v0.type.toLowerCase()}_${_v0.direction.toLowerCase()}`;
                    if (_v10(_v0), _v2 !== _v1) {
                      let _v0 = _v34[_v2];
                      _v0 && _v32({
                        libraryType: (0, _v31.deriveLibraryType)({
                          hasContentSpaceEnabled: !!_v38
                        }),
                        libraryNewSort: _v0
                      });
                    }
                  },
                  setDateDisplay: _v12,
                  sortOptions: _v58.SORT_OPTIONS,
                  isLayoutToggleDisabled: _v145,
                  children: [_v87 && _v147 && (0, _v1.jsxs)(_v7.Flex, {
                    children: [(0, _v1.jsx)(_v62.MobileFilterButton, {
                      isFilterApplied: _v148,
                      onClick: () => {
                        _v16(!0);
                      }
                    }), (0, _v1.jsxs)(_v63.MobileFilterDrawer, {
                      isFilterApplied: _v148,
                      isOpen: _v15,
                      onApplyFilters: () => {
                        let _v0, _v1, _v2, _v3;
                        _v108();
                        let _v4 = (0, _v31.deriveLibraryType)({
                            hasContentSpaceEnabled: !!_v38
                          }),
                          _v5 = !(0, _v81.areIdenticalSets)(_v62.draft, _v62.value),
                          _v6 = _v66.isDraftActive && _v66.isDraftUpdated(),
                          _v7 = _v65.isDraftActive && _v65.isDraftUpdated(),
                          _v8 = _v70.isDraftActive && _v70.isDraftUpdated();
                        _v62.commitDraft(), _v66.commitDraft(), _v65.commitDraft(), _v70.commitDraft(), _v0 = !(0, _v81.areIdenticalSets)(_v62.draft, _v62.value), _v1 = _v66.isDraftActive && _v66.isDraftUpdated(), _v2 = _v65.isDraftActive && _v65.isDraftUpdated(), _v3 = _v70.isDraftActive && _v70.isDraftUpdated(), _v0 && _v59.FilterBPEvents.sendApplyFilterEvent("content_type", _v86, _v141, "mobile"), _v1 && _v59.FilterBPEvents.sendApplyFilterEvent("clip_privacy", _v86, _v141, "mobile"), _v2 && _v59.FilterBPEvents.sendApplyFilterEvent("content_type", _v86, _v141, "mobile"), _v3 && _v59.FilterBPEvents.sendApplyFilterEvent("clip_created_by", _v86, _v141, "mobile"), _v5 && _v31({
                          libraryType: _v4,
                          libraryFilterType: "type"
                        }), _v6 && _v31({
                          libraryType: _v4,
                          libraryFilterType: "privacy"
                        }), _v7 && _v31({
                          libraryType: _v4,
                          libraryFilterType: "type"
                        }), _v8 && _v31({
                          libraryType: _v4,
                          libraryFilterType: "created_by"
                        }), _v16(!1);
                      },
                      onClearFilters: () => {
                        _v108(), _v62.clearFilter(), _v66.clearFilter(), _v65.clearFilter(), _v70.clearFilter(), _v70.setCreatedByUsersSearchTerm(""), _v16(!1);
                      },
                      onClose: () => {
                        _v62.clearDraft(), _v66.clearDraft(), _v65.clearDraft(), _v70.clearDraft(), _v70.setCreatedByUsersSearchTerm(""), _v16(!1);
                      },
                      children: [(0, _v1.jsx)(_v64.MobileContentTypeFilter, {
                        filter: _v62.draft,
                        onToggle: _v0 => {
                          let _v1 = (0, _v81.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v167, _v62.draft, _v0, (0, _v50.isVideoAvailabilityFilterExplicitlyEngaged)(_v65.draft));
                          _v62.setSelection(_v1, !0), (0, _v81.doesSelectionIncludeVideos)(_v167, _v1) || _v65.setDraft(new Set());
                        },
                        options: _v167,
                        page: _v86,
                        isDisabled: _v75,
                        videoSubmenu: _v113
                      }), _v147 && (0, _v1.jsxs)(_v1.Fragment, {
                        children: [(0, _v1.jsx)(_v65.MobileClipPrivacyFilter, {
                          filter: [..._v66.draft],
                          onChange: _v0 => {
                            _v66.updateFilterValues(_v0, !0);
                          },
                          options: _v66.options,
                          page: _v86,
                          isDisabled: _v64
                        }), !_v70.shouldHideFilter && (0, _v1.jsx)(_v66.MobileCreatedByFilter, {
                          filter: [..._v70.draft],
                          onChange: _v0 => {
                            _v70.updateFilterValues(_v0, !0);
                          },
                          searchQuery: _v70.createdByUsersSearchTerm,
                          setSearchQuery: _v70.setCreatedByUsersSearchTerm,
                          options: _v70.createdByUsers,
                          page: _v86,
                          isDisabled: _v64,
                          isLoadingInitialData: _v70.membersLoadingInitialData,
                          isLoadingMore: _v70.membersLoadingMore,
                          isDone: _v70.membersDone,
                          onLoadMore: _v70.loadMoreMembers
                        })]
                      })]
                    })]
                  }), !_v87 && _v147 && _v148 && (0, _v1.jsx)(_v72.ClearAllFiltersButton, {
                    onClick: () => {
                      _v108(), _v62.clearFilter(), _v66.clearFilter(), _v65.clearFilter(), _v70.clearFilter();
                    }
                  }), !_v87 && _v147 && (0, _v1.jsx)(_v61.ContentTypeFilter, {
                    filter: _v62.value,
                    onToggleType: _v0 => {
                      _v108();
                      let _v1 = (0, _v81.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v167, _v62.value, _v0, (0, _v50.isVideoAvailabilityFilterExplicitlyEngaged)(_v65.value));
                      (0, _v81.areIdenticalSets)(_v1, _v62.value) || _v31({
                        libraryType: (0, _v31.deriveLibraryType)({
                          hasContentSpaceEnabled: !!_v38
                        }),
                        libraryFilterType: "type"
                      }), _v62.setSelection(_v1), (0, _v81.doesSelectionIncludeVideos)(_v167, _v1) || _v65.clearFilter();
                    },
                    options: _v167,
                    page: _v86,
                    isDisabled: _v74,
                    videoSubmenu: _v112
                  }), !_v87 && _v147 && (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v71.ClipPrivacyTypeFilter, {
                      filter: [..._v66.value],
                      setFilter: _v0 => {
                        _v108(), _v66.updateFilterValues(_v0), _v31({
                          libraryType: (0, _v31.deriveLibraryType)({
                            hasContentSpaceEnabled: !!_v38
                          }),
                          libraryFilterType: "privacy"
                        });
                      },
                      options: _v66.options,
                      page: _v86,
                      isDisabled: _v63
                    }), !_v70.shouldHideFilter && (0, _v1.jsx)(_v73.CreatedByFilter, {
                      filter: [..._v70.value],
                      setFilter: _v0 => {
                        _v108(), _v70.setFilterValues(_v0), _v31({
                          libraryType: (0, _v31.deriveLibraryType)({
                            hasContentSpaceEnabled: !!_v38
                          }),
                          libraryFilterType: "created_by"
                        });
                      },
                      searchQuery: _v70.createdByUsersSearchTerm,
                      setSearchQuery: _v70.setCreatedByUsersSearchTerm,
                      options: _v70.createdByUsers,
                      page: _v86,
                      isDisabled: _v63,
                      isLoadingInitialData: _v70.membersLoadingInitialData,
                      isLoadingMore: _v70.membersLoadingMore,
                      isDone: _v70.membersDone,
                      onLoadMore: _v70.loadMoreMembers
                    })]
                  })]
                }),
                isTitleLoading: !_v36,
                title: _v86
              }), _v152 && (0, _v1.jsx)(_v70.SelectAllBanner, {
                folderName: _v86,
                loadedSelectedCount: _v118.size,
                totalVideosCount: _v95,
                actualSelectedCount: _v154.isReady ? _v154.selectedItemURIs.size : void 0,
                onSelectAllInFolder: _v106,
                onClearSelection: _v108,
                allInFolderEnabled: _v153
              }), "LIST_LAYOUT" === _v78 && !_v145 && (0, _v1.jsx)(_v40.BokehListHeader, {
                setSort: _v10,
                sort: _v9,
                shouldShowPrivacy: _v80,
                shouldShowFileSize: !0,
                setDateDisplay: _v12,
                dateDisplay: _v11
              })]
            }), _v145 ? (0, _v1.jsx)(_v7.Flex, {
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "20px",
              children: _v148 ? (0, _v1.jsx)(_v75.FilterEmptyState, {}) : _v35.canCreateRootFolders ? _v39 && _v38 ? (0, _v1.jsx)(_v114, {
                targetUserId: _v17 ?? 0,
                onInvitePeople: () => _v20.current?.click(),
                hasTeamMembers: !_v40
              }) : (0, _v1.jsx)(_v105, {
                owner: {
                  id: _v17 ?? 0
                },
                set360SourceType: _v14,
                threeSixtyType: _v13,
                isUnifiedLibrary: !_v38
              }) : (0, _v1.jsx)(_v109, {
                isContributor: "Contributor" === _v52 || "ContributorPlus" === _v52
              })
            }) : (0, _v1.jsx)(_v41.UploadDropzone, {
              className: "library-upload-dropzone",
              targetUserId: _v17 ?? 0,
              disabled: !_v84 || _v145 && _v35.canCreateRootFolders,
              topPosition: 205,
              destinationText: (0, _v24.translate)({
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
              children: (0, _v1.jsx)(_v169, {
                assetUrls: _v0,
                type: _v33.PlayerType.BarebonePlayer,
                children: (0, _v1.jsx)(_v166, {
                  canUpload: _v81,
                  deselectItem: _v104,
                  handleMoveItemsOnDrop: ({
                    dropTarget: _v0,
                    items: _v1
                  }) => {
                    let _v2 = new Set("");
                    _v2.add(_v0.uri), _v139(_v2), _v46(_v2);
                    let [,, _v3,, _v4] = _v0.uri.split("/");
                    _v137({
                      ownerId: parseInt(_v3, 10),
                      folderId: parseInt(_v4, 10),
                      targetItems: _v1
                    }).then(() => {
                      1 === _v1.length ? (_v104(_v1[0].uri, 0, _v121 || []), _v100(_v1[0].uri, "video")) : (_v108(), _v101(_v118)), _v48(null, {
                        label: _v0.name,
                        link: (0, _v79.getFolderPageUriFromApiUri)(_v0.uri)
                      });
                    }).catch(_v0 => {
                      _v47({
                        content: _v0,
                        status: "error"
                      });
                    }).finally(() => {
                      _v139(new Set()), _v46(new Set());
                    });
                  },
                  hasFolderShareUpsell: !!_v35.canSeeUpsellModalOnShare,
                  hasReviewPageUpsell: !!_v35.hasVideoReviewPageDemo,
                  hasMultipleReviewLinks: !!_v35.hasMultipleReviewLinks,
                  items: _v121,
                  layout: _v78,
                  loadingFolderURIs: _v138,
                  onCopyVideo: _v50,
                  onFolderSettingsChange: _v0 => {
                    _v97(_v0), _v45();
                  },
                  onMoreInfo: _v7,
                  removeItem: _v100,
                  selectedItemURIs: _v118,
                  selectItem: _v103,
                  shouldShowPrivacy: _v80,
                  shouldShowFileSize: !0,
                  sort: _v9,
                  isEnterprise: _v85,
                  setIsUploadDropzoneEnabled: _v77,
                  isLoading: _v143 || !!_v144,
                  hasContentSpaceEnabled: !!_v38
                })
              })
            }), (0, _v1.jsx)(_v91, {
              layout: _v78,
              canLoadMore: !_v142,
              isLoadingMore: _v143 || !!_v144,
              onActivate: () => _v92(_v93 + 1),
              isDropzoneEnabled: _v81 && !(_v145 && _v35.canCreateRootFolders),
              page: _v86
            })]
          }), _v6 && (0, _v1.jsx)(_v68.Page.Panel, {
            children: (0, _v1.jsx)(_v34.ResourceSidePanel, {
              isOpen: !0,
              onClose: () => _v7(null),
              onVideoPrivacyChange: ({
                view: _v0
              }) => _v98(_v6, _v0 => ({
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
      }), (0, _v1.jsx)(_v76.ViewerAiUpsellModal, {
        step: _v2,
        onDismiss: _v3,
        onCtaClick: _v4,
        onErrorClose: _v5
      }), _v51, _v54.modal, (0, _v1.jsx)(_v13.BulkActions, {
        ..._v156,
        isLoading: _v155,
        canUseBulkTranslation: _v43,
        canAddToShowcases: _v135,
        canPublishContentToChina: _v35.regionalDeliveryPublishContentToChina,
        deselectAllItems: _v108,
        removeItems: _v101,
        teamOwnerId: _v17,
        isPrivateModeOn: !_v35.privateModeOff
      })]
    });
  }
  let _v169 = ({
    children: _v0,
    assetUrls: _v1,
    type: _v2
  }) => _v1 ? (0, _v1.jsx)(_v32.PlayerContextProvider, {
    assetUrls: _v1,
    type: _v2,
    children: _v0
  }) : _v0;
  var _v170 = _v0.i(0),
    _v171 = _v0.i(0),
    _v172 = _v0.i(0);
  let _v173 = ({
    playerAssetUrls: _v0
  }) => {
    let _v1 = (0, _v172.useViewer)();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v168, {
        playerAssetUrls: _v0,
        viewer: _v1
      }), (0, _v1.jsx)(_v3.ManagedAccountsPromo, {}), (0, _v1.jsx)(_v171.VimeoReviewUpsellPromo, {})]
    });
  };
  _v173.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v54.VideoLibraryLayout, {
    hasSideNav: !0,
    hasUploader: _v1.hasUploader,
    sideNavContent: (0, _v1.jsx)(_v170.SideNavContent, {
      surface: "library"
    }),
    sideNavSurface: "library",
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
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v173], 0);
}