{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
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
  let _v27 = _v15.default.div.withConfig({
    displayName: "record__CircleWithDot",
    componentId: "sc-414e9f5c-0"
  })`
  width: ${(0, _v14.rem)(20)};
  height: ${(0, _v14.rem)(20)};
  border-radius: 50%;
  border: 2px solid ${_v24.core.color.text(0)};
  position: relative;

  // The dot in the center
  &::after {
    content: '';
    position: absolute;
    width: ${(0, _v14.rem)(8)};
    height: ${(0, _v14.rem)(8)};
    background-color: ${_v24.core.color.text(0)};
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = [{
      name: (0, _v17.translate)({
        singular: "Upload",
        dictionary: {
          es: {
            singular: "Subir"
          },
          "de-DE": {
            singular: "Hochladen"
          },
          "fr-FR": {
            singular: "Importer"
          },
          "ja-JP": {
            singular: "アップロード"
          },
          "ko-KR": {
            singular: "업로드"
          },
          "pt-BR": {
            singular: "Carregar"
          },
          "zh-CN": {
            singular: "上传"
          }
        }
      }),
      description: (0, _v17.translate)({
        singular: "Upload a video from your device",
        dictionary: {
          es: {
            singular: "Suba un video desde su dispositivo"
          },
          "de-DE": {
            singular: "Lade ein Video von deinem Gerät hoch."
          },
          "fr-FR": {
            singular: "Mettre une vidéo en ligne depuis votre appareil"
          },
          "ja-JP": {
            singular: "デバイスから動画をアップロード"
          },
          "ko-KR": {
            singular: "기기에서 동영상 업로드"
          },
          "pt-BR": {
            singular: "Carregue um vídeo do seu dispositivo"
          },
          "zh-CN": {
            singular: "从设备上传视频"
          }
        }
      }),
      icon: (0, _v7.jsx)(_v22.Upload, {}),
      linkTo: "/upload/videos",
      bp: "Upload"
    }, {
      name: (0, _v17.translate)({
        singular: "Record",
        dictionary: {
          es: {
            singular: "Grabar"
          },
          "de-DE": {
            singular: "Aufnehmen"
          },
          "fr-FR": {
            singular: "Enregistrer"
          },
          "ja-JP": {
            singular: "録画"
          },
          "ko-KR": {
            singular: "녹화"
          },
          "pt-BR": {
            singular: "Gravar"
          },
          "zh-CN": {
            singular: "录制"
          }
        }
      }),
      description: (0, _v17.translate)({
        singular: "Record your screen, webcam, or both",
        dictionary: {
          es: {
            singular: "Grabe la pantalla, la cámara web o ambas"
          },
          "de-DE": {
            singular: "Bildschirm, Webcam oder beides aufzeichnen"
          },
          "fr-FR": {
            singular: "Enregistrez votre écran et/ou votre webcam"
          },
          "ja-JP": {
            singular: "画面、ウェブカメラ、または両方を録画"
          },
          "ko-KR": {
            singular: "화면, 웹캠 또는 둘 다 녹화"
          },
          "pt-BR": {
            singular: "Grave sua tela, webcam ou ambas"
          },
          "zh-CN": {
            singular: "录制屏幕、摄像头或屏幕和摄像头"
          }
        }
      }),
      icon: (0, _v7.jsx)(() => (0, _v7.jsx)(_v27, {}), {}),
      linkTo: "/upload/screen-recording",
      bp: "Record"
    }, {
      name: (0, _v17.translate)({
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
      }),
      description: (0, _v17.translate)({
        singular: "Start from scratch or choose a template",
        dictionary: {
          es: {
            singular: "Comience desde cero o elija una plantilla"
          },
          "de-DE": {
            singular: "Von Grund auf neu beginnen oder Vorlage auswählen"
          },
          "fr-FR": {
            singular: "Créez ou choisissez un modèle"
          },
          "ja-JP": {
            singular: "最初から作成するか、テンプレートを選択"
          },
          "ko-KR": {
            singular: "처음부터 시작하거나 템플릿 선택"
          },
          "pt-BR": {
            singular: "Comece do zero ou escolha um modelo"
          },
          "zh-CN": {
            singular: "从头开始或选择模板"
          }
        }
      }),
      icon: (0, _v7.jsx)(_v23.CreateVideo, {
        boxSize: (0, _v14.rem)(32)
      }),
      linkTo: "/upload/video-maker",
      bp: "Create"
    }, {
      name: (0, _v17.translate)({
        singular: "Event",
        dictionary: {
          es: {
            singular: "Evento"
          },
          "fr-FR": {
            singular: "Événement"
          },
          "ja-JP": {
            singular: "イベント"
          },
          "ko-KR": {
            singular: "이벤트"
          },
          "pt-BR": {
            singular: "Evento"
          },
          "zh-CN": {
            singular: "活动"
          }
        }
      }),
      description: (0, _v17.translate)({
        singular: "Create a virtual event or webinar",
        dictionary: {
          es: {
            singular: "Cree un evento virtual o seminario web"
          },
          "de-DE": {
            singular: "Virtuelles Event oder Webinar erstellen"
          },
          "fr-FR": {
            singular: "Créez un événement virtuel ou un webinaire"
          },
          "ja-JP": {
            singular: "バーチャルイベントやウェビナーを作成"
          },
          "ko-KR": {
            singular: "가상 이벤트 또는 웨비나 만들기"
          },
          "pt-BR": {
            singular: "Crie um evento virtual ou webinar"
          },
          "zh-CN": {
            singular: "创建虚拟活动或网络研讨会"
          }
        }
      }),
      icon: (0, _v7.jsx)(_v20.CameraOn, {}),
      linkTo: "/upload/live-event",
      bp: "Event"
    }],
    _v31 = () => {
      let {
        closeDrawer: _v0
      } = _v44();
      return (0, _v7.jsx)(_v41, {
        children: _v30.map(_v0 => {
          let _v1, _v2;
          return (0, _v7.jsx)(_v33, {
            name: _v0.name,
            icon: _v0.icon,
            description: _v0.description,
            linkTo: _v0.linkTo,
            onClick: (_v1 = _v0.linkTo, _v2 = _v0.bp, () => {
              _v0(), (0, _v29.sendUploadMethodSelectorTapEvent)({
                target: _v1,
                name: _v2
              });
            })
          }, _v0.name);
        })
      });
    },
    _v32 = ({
      icon: _v0,
      name: _v1,
      description: _v2
    }) => (0, _v7.jsxs)(_v39, {
      children: [(0, _v7.jsx)(_v40, {
        children: _v0
      }), (0, _v7.jsxs)(_v36, {
        children: [(0, _v7.jsx)(_v37, {
          as: "p",
          children: _v1
        }), (0, _v7.jsx)(_v34, {
          children: _v2
        })]
      }), (0, _v7.jsx)(_v38, {})]
    }),
    _v33 = ({
      icon: _v0,
      name: _v1,
      description: _v2,
      linkTo: _v3,
      onClick: _v4
    }) => {
      let _v5,
        _v6,
        {
          navigate: _v7,
          isNextRouter: _v8
        } = (_v5 = (0, _v28.useHistory)(), _v6 = (0, _v8.useRouter)(), {
          navigate: _v0 => {
            _v5?.replace(_v0), _v6?.replace(_v0);
          },
          isNextRouter: void 0 === _v5 && _v6
        });
      return _v8 ? (0, _v7.jsx)(_v19.default, {
        style: {
          all: "unset"
        },
        onClick: _v4,
        href: _v3,
        children: (0, _v7.jsx)(_v32, {
          icon: _v0,
          name: _v1,
          description: _v2
        })
      }) : (0, _v7.jsx)(_v35, {
        onClick: _v0 => {
          _v0.preventDefault(), _v4(), _v7(_v3);
        },
        children: (0, _v7.jsx)(_v32, {
          icon: _v0,
          name: _v1,
          description: _v2
        })
      });
    },
    _v34 = (0, _v15.default)(_v25.Paragraph).attrs({
      size: 3
    }).withConfig({
      displayName: "UploadOptions__Description",
      componentId: "sc-e67d7eba-0"
    })``,
    _v35 = _v15.default.a.withConfig({
      displayName: "UploadOptions__UnstyledLink",
      componentId: "sc-e67d7eba-1"
    })`
  all: unset;
`,
    _v36 = _v15.default.div.withConfig({
      displayName: "UploadOptions__Column",
      componentId: "sc-e67d7eba-2"
    })`
  display: flex;
  flex-direction: column;
  gap: ${(0, _v14.rem)(4)};

  & ${_v34} {
    margin: unset;
  }
`,
    _v37 = (0, _v15.default)(_v26.Text).attrs({
      size: 300
    }).withConfig({
      displayName: "UploadOptions__Name",
      componentId: "sc-e67d7eba-3"
    })`
  font-weight: 700;
  color: ${_v24.core.color.text(0)};
`,
    _v38 = (0, _v15.default)(_v18.Button).attrs({
      variant: "hyperminimal",
      format: "alternative",
      icon: (0, _v7.jsx)(_v21.PlusCircle, {})
    }).withConfig({
      displayName: "UploadOptions__GoToButton",
      componentId: "sc-e67d7eba-4"
    })`
  // Overriding a user style issue on safari
  padding: 0 !important;
  // Push it over to the right
  margin-left: auto;
  color: ${_v24.core.color.text(0)};
`,
    _v39 = _v15.default.li.withConfig({
      displayName: "UploadOptions__Row",
      componentId: "sc-e67d7eba-5"
    })`
  display: flex;
  align-items: center;
  height: ${(0, _v14.rem)(72)};
  width: 100%;
  gap: ${(0, _v14.rem)(16)};
  cursor: pointer;
`,
    _v40 = _v15.default.div.withConfig({
      displayName: "UploadOptions__Icon",
      componentId: "sc-e67d7eba-6"
    })`
  width: ${(0, _v14.rem)(32)};
  height: ${(0, _v14.rem)(32)};
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: ${(0, _v14.rem)(24)};
    height: ${(0, _v14.rem)(24)};
  }

  & path {
    fill: ${_v24.core.color.text(0)};
  }
`,
    _v41 = _v15.default.ul.withConfig({
      displayName: "UploadOptions__List",
      componentId: "sc-e67d7eba-7"
    })`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
  var _v42 = _v0.i(0);
  let _v43 = _v11.default.createContext({
      toggleDrawer: () => null,
      closeDrawer: () => null
    }),
    _v44 = () => (0, _v11.useContext)(_v43),
    _v45 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v11.useState)(!1),
        _v3 = () => _v2(!1);
      return (0, _v7.jsxs)(_v43.Provider, {
        value: {
          toggleDrawer: () => _v2(_v0 => !_v0),
          closeDrawer: _v3
        },
        children: [_v0, (0, _v7.jsxs)(_v42.SlideUpFromBottomDrawer, {
          active: _v1,
          onScreenClick: _v3,
          children: [(0, _v7.jsx)(_v31, {}), (0, _v7.jsx)(_v46, {
            children: (0, _v7.jsx)(_v18.Button, {
              "aria-label": (0, _v17.translate)({
                singular: "Dismiss",
                dictionary: {
                  es: {
                    singular: "Descartar"
                  },
                  "de-DE": {
                    singular: "Information verwerfen"
                  },
                  "fr-FR": {
                    singular: "Ignorer"
                  },
                  "ja-JP": {
                    singular: "閉じる"
                  },
                  "ko-KR": {
                    singular: "닫기"
                  },
                  "pt-BR": {
                    singular: "Ignorar"
                  },
                  "zh-CN": {
                    singular: "拒绝"
                  }
                }
              }),
              format: "secondary",
              icon: (0, _v7.jsx)(_v16.CloseX, {}),
              onClick: _v3
            })
          })]
        })]
      });
    },
    _v46 = _v15.default.div.withConfig({
      displayName: "UploadOptionsDrawer__BottomCenter",
      componentId: "sc-1f420412-0"
    })`
  position: absolute;
  left: 50%;
  bottom: ${(0, _v14.rem)(24)};
  transform: translateX(-50%);
`;
  var _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0);
  let _v53 = _v15.default.footer.withConfig({
    displayName: "styles__Footer",
    componentId: "sc-7342f252-0"
  })`
  background: ${({
    theme: _v0
  }) => _v0.content.background};
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;
  _v15.default.div.withConfig({
    displayName: "styles__UploadPageContainer",
    componentId: "sc-7342f252-1"
  })`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({
    theme: _v0
  }) => _v0.content.background};
`;
  let _v54 = _v15.default.div.withConfig({
      displayName: "styles__DropzoneContainer",
      componentId: "sc-7342f252-2"
    })`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (max-width: ${(0, _v50.rem)(480)}) {
    width: ${(0, _v50.rem)(360)};
  }

  @media screen and (min-width: ${(0, _v50.rem)(950)}) and (max-width: ${(0, _v50.rem)(0)}) {
    width: ${(0, _v50.rem)(880)};
  }

  @media screen and (min-width: ${(0, _v50.rem)(0)}) {
    width: ${(0, _v50.rem)(896)};
    height: ${(0, _v50.rem)(518)};
  }
`,
    _v55 = _v15.default.div.withConfig({
      displayName: "styles__MainContent",
      componentId: "sc-7342f252-3"
    })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(0, _v50.rem)(45)};
  gap: ${(0, _v50.rem)(16)};
  height: 100%;
  width: 100%;
`;
  (0, _v15.default)(_v52.Skeleton).withConfig({
    displayName: "styles__UploadTabsPlaceholder",
    componentId: "sc-7342f252-4"
  })`
  width: ${(0, _v50.rem)(576)};
  height: ${(0, _v50.rem)(50)};
  border-radius: 2rem;

  @media screen and (max-width: ${(0, _v50.rem)(480)}) {
    width: ${(0, _v50.rem)(360)};
  }
`;
  let _v56 = _v15.default.div.withConfig({
      displayName: "styles__Row",
      componentId: "sc-7342f252-5"
    })`
  display: flex;
  margin: ${(0, _v50.rem)(10)} auto;
  flex-direction: ${({
      direction: _v0 = "row"
    }) => _v0};
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: ${(0, _v50.rem)(769)}) {
    justify-content: space-around;
  }

  @media screen and (max-width: ${(0, _v50.rem)(480)}) {
    width: ${(0, _v50.rem)(360)};
  }
`,
    _v57 = _v15.default.div.withConfig({
      displayName: "styles__Section",
      componentId: "sc-7342f252-6"
    })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: ${(0, _v50.rem)(16)};
  &:first-of-type {
    left: ${(0, _v50.rem)(16)};
  }
  &:last-of-type {
    right: ${(0, _v50.rem)(16)};
  }
`,
    _v58 = (0, _v15.default)(_v56).withConfig({
      displayName: "styles__SecondRow",
      componentId: "sc-7342f252-7"
    })`
  align-items: center;
  justify-content: center;
  gap: ${(0, _v50.rem)(16)};
`,
    _v59 = () => (0, _v7.jsxs)(_v48.Flex, {
      bgColor: "background",
      flexGrow: "1",
      align: "center",
      direction: "column",
      pos: "relative",
      children: [(0, _v7.jsx)(_v60, {}), (0, _v7.jsxs)(_v55, {
        children: [(0, _v7.jsx)(_v49.Skeleton, {
          w: {
            base: "360px",
            sm: "576px"
          },
          h: "50px",
          borderRadius: (0, _v50.rem)(32)
        }), (0, _v7.jsxs)(_v54, {
          children: [(0, _v7.jsx)(_v49.Skeleton, {
            m: "auto",
            borderRadius: "input-xs",
            bgColor: "background",
            w: {
              base: "100%",
              md: "100%"
            },
            h: {
              base: "427px",
              md: "100%"
            }
          }), (0, _v7.jsxs)(_v56, {
            children: [(0, _v7.jsx)(_v49.Skeleton, {
              h: "24px",
              w: "520px",
              borderRadius: "xs",
              display: {
                base: "none",
                sm: "block"
              }
            }), (0, _v7.jsx)(_v49.Skeleton, {
              h: "24px",
              w: "520px",
              borderRadius: "xs",
              display: {
                base: "none",
                sm: "block"
              }
            }), (0, _v7.jsx)(_v49.Skeleton, {
              h: "20px",
              w: "96px",
              borderRadius: "xs",
              display: {
                base: "none",
                sm: "block"
              }
            })]
          })]
        }), (0, _v7.jsx)(_v58, {
          children: (0, _v7.jsx)(_v49.Skeleton, {
            h: "56px",
            w: "527px",
            borderRadius: "xs",
            display: {
              base: "none",
              sm: "block"
            }
          })
        })]
      }), (0, _v7.jsx)(_v61, {})]
    }),
    _v60 = () => (0, _v7.jsxs)(_v51.Navigation, {
      children: [(0, _v7.jsxs)(_v51.Navigation.LeftContent, {
        children: [(0, _v7.jsx)(_v49.Skeleton, {
          borderRadius: "sm",
          w: "80px",
          h: "30px"
        }), (0, _v7.jsx)(_v49.Skeleton, {
          borderRadius: "sm",
          w: "80px",
          h: "30px"
        })]
      }), (0, _v7.jsx)(_v51.Navigation.RightContent, {
        children: (0, _v7.jsx)(_v49.Skeleton, {
          borderRadius: "sm",
          w: "80px",
          h: "30px"
        })
      })]
    }),
    _v61 = () => (0, _v7.jsxs)(_v53, {
      children: [(0, _v7.jsx)(_v57, {}), (0, _v7.jsxs)(_v57, {
        children: [(0, _v7.jsx)(_v49.Skeleton, {
          borderRadius: (0, _v50.rem)(32),
          w: "115px",
          h: "35px"
        }), (0, _v7.jsx)(_v49.Skeleton, {
          borderRadius: (0, _v50.rem)(32),
          boxSize: "35px",
          mx: "6px"
        }), (0, _v7.jsx)(_v49.Skeleton, {
          borderRadius: (0, _v50.rem)(32),
          boxSize: "35px",
          mx: "6px"
        })]
      })]
    });
  var _v62 = _v0.i(0),
    _v63 = _v0.i(0);
  let _v64 = {
    pickerTokens: {
      0: "",
      0: "",
      0: "",
      0: {
        clientId: "",
        developerKey: ""
      }
    },
    quota: {
      available: 0,
      free: 0,
      used: 0,
      totalCap: {
        free: 0,
        available: 0
      }
    },
    folders: [],
    owner: null,
    teamUsers: [],
    teamConfigs: [],
    defaultFolderId: null
  };
  var _v65 = ((_v1 = _v65 || {}).FETCH = "FETCH", _v1.UPDATE_CONFIG = "UPDATE_CONFIG", _v1.ERROR = "ERROR", _v1);
  let _v66 = _v0 => ({
      type: "UPDATE_CONFIG",
      payload: _v0
    }),
    _v67 = (_v0, _v1) => {
      switch (_v1.type) {
        case "FETCH":
          return {
            ..._v0,
            loading: !0
          };
        case "UPDATE_CONFIG":
          return {
            ..._v0,
            loading: !1,
            config: _v1.payload
          };
        case "ERROR":
          return {
            ..._v0,
            loading: !1,
            error: _v1.payload
          };
        default:
          return _v0;
      }
    },
    _v68 = _v0 => _v0 ? `UPLOAD_PAGE_CONFIG_${_v0}` : "UPLOAD_PAGE_CONFIG";
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0);
  function _v77() {
    let _v0 = (0, _v75.usePico)(),
      _v1 = (0, _v74.useViewer)(),
      _v2 = _v1?.teamUser?.hasContentSpaceEnabled ?? !1,
      _v3 = (0, _v11.useCallback)(_v0 => null !== _v0 && (_v0.track("upload_page_displayed", {
        referrer_page: _v0.referrerPage,
        upload_active_tab: _v0.uploadActiveTab
      }), !0), [_v0]),
      _v4 = (0, _v11.useCallback)(_v0 => null !== _v0 && (_v0.track("upload_tab_switched", {
        upload_new_tab: _v0.uploadNewTab
      }), !0), [_v0]),
      _v5 = (0, _v11.useCallback)(_v0 => null !== _v0 && (_v0.track("upload_file_selected", {
        upload_method: _v0.uploadMethod
      }), !0), [_v0]),
      _v6 = (0, _v11.useCallback)(_v0 => null !== _v0 && (_v0.track("upload_destination_changed", {
        upload_destination: (0, _v76.deriveLibraryType)({
          hasContentSpaceEnabled: _v2,
          isPrivateToUser: _v0.project?.isPrivateToUser
        })
      }), !0), [_v0, _v2]);
    return {
      trackUploadPageDisplayed: _v3,
      trackUploadTabSwitched: _v4,
      trackUploadFileSelected: _v5,
      trackUploadDestinationChanged: _v6,
      trackUploadThirdPartySourceClicked: (0, _v11.useCallback)(_v0 => null !== _v0 && (_v0.track("upload_third_party_source_clicked", {
        upload_third_party_source: _v0.uploadThirdPartySource
      }), !0), [_v0]),
      trackUploadLinkPrivacyChanged: (0, _v11.useCallback)(_v0 => null !== _v0 && (_v0.track("upload_link_privacy_changed", {
        upload_link_privacy_new_value: _v0.uploadLinkPrivacyNewValue
      }), !0), [_v0])
    };
  }
  var _v78 = _v0.i(0),
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
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0);
  let _v95 = {
      UPLOAD: "/upload/videos",
      CREATE: "/upload/video-maker",
      RECORD: "/upload/screen-recording",
      LIVE: "/upload/live-event"
    },
    _v96 = [".mpg", ".mpeg", ".mp4", ".m4v", ".avi", ".mov", ".flv", ".webm"];
  var _v97 = ((_v2 = {}).UPLOAD = "UPLOAD", _v2.CREATE = "CREATE", _v2.LIVE = "LIVE", _v2.RECORD = "RECORD", _v2),
    _v98 = ((_v3 = {}).UPLOAD = "videos", _v3.CREATE = "video-maker", _v3.LIVE = "live-event", _v3.RECORD = "screen-recording", _v3);
  let _v99 = {
      UPLOAD: "upload",
      RECORD: "record",
      CREATE: "create",
      LIVE: "event"
    },
    _v100 = {
      videos: "UPLOAD",
      "video-maker": "CREATE",
      "live-event": "LIVE",
      "screen-recording": "RECORD"
    };
  (_v4 = {}).TeamId = "team_id", _v4.FolderId = "folder_id";
  var _v101 = ((_v5 = {}).Periodic = "send_quota_email", _v5.Lifetime = "send_total_cap_email", _v5);
  let _v102 = _v15.default.div.withConfig({
      displayName: "styles__DropzoneContainer",
      componentId: "sc-6ff6b251-0"
    })`
  margin-top: ${({
      hasNotice: _v0
    }) => (0, _v50.rem)(_v0 ? 17 : 45)};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${(0, _v50.rem)(896)};

  @media screen and (max-width: ${(0, _v50.rem)(950)}) {
    padding: 0 ${(0, _v50.rem)(24)};
  }
`,
    _v103 = _v15.default.div.withConfig({
      displayName: "styles__OtherUploadsLabel",
      componentId: "sc-6ff6b251-1"
    })`
  font-weight: bold;
  margin-bottom: ${(0, _v50.rem)(10)};
  margin-top: ${(0, _v50.rem)(15)};
`,
    _v104 = _v15.keyframes`
  to { opacity: 1; transform: translateY(0) };
`,
    _v105 = _v15.default.div.withConfig({
      displayName: "styles__OtherUploadsContainer",
      componentId: "sc-6ff6b251-2"
    })`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media screen and (max-width: ${(0, _v50.rem)(550)}) {
    align-items: center;
  }

  & .upload-options {
    flex-wrap: wrap;

    & button {
      opacity: 0;
      transform: translateY(20px);
      animation: ${_v104} 0.3s ease-in-out forwards;
    }

    & button:nth-child(1) {
      animation-delay: 0.2s;
    }
    & button:nth-child(2) {
      animation-delay: 0.3s;
    }
    & button:nth-child(3) {
      animation-delay: 0.4s;
    }
    & button:nth-child(4) {
      animation-delay: 0.5s;
    }
    & button:nth-child(5) {
      animation-delay: 0.6s;
    }
    & button:nth-child(6) {
      animation-delay: 0.7s;
    }
  }
`,
    _v106 = _v15.default.button.withConfig({
      displayName: "styles__LinkButton",
      componentId: "sc-6ff6b251-3"
    })`
  border: unset;
  background-color: unset;
  padding: unset;
  color: ${({
      theme: _v0
    }) => _v0.additions.content.color2};
  font-size: ${(0, _v50.rem)(12)};
  cursor: pointer;
  text-decoration: underline;
`,
    _v107 = _v15.default.div.withConfig({
      displayName: "styles__Row",
      componentId: "sc-6ff6b251-4"
    })`
  display: flex;
  margin-top: ${(0, _v50.rem)(8)};
  justify-content: space-between;
  align-items: baseline;
  width: 100%;

  @media screen and (max-width: ${(0, _v50.rem)(550)}) {
    text-align: center;
  }

  // Components in the team switcher dropzone are laid out awkwardly in the markup
  // which causes the legal copy to sit on top of the team switcher dropdown on mobile
  // We can fix this overlapping issue by giving the row containing the legal copy some margin top
  ${({
      uploadType: _v0
    }) => _v0 === _v97.UPLOAD && _v15.css`
      @media screen and (max-width: ${(0, _v50.rem)(550)}) {
        display: flex;
        width: ${(0, _v50.rem)(330)};
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: ${(0, _v50.rem)(32)};

        // Hiding the 360 Video Settings link
        & ${_v106} {
          display: none;
          visibility: hidden;
        }
      }
    `}
`,
    _v108 = ["anybody", "nobody", "contacts", "password", "users", "unlisted", "disable"];
  var _v109 = _v0.i(474),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0);
  let _v120 = _v0 => (0, _v7.jsx)(_v119.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v7.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v7.jsx)("path", {
        d: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z"
      }), (0, _v7.jsx)("path", {
        d: "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      })]
    })
  });
  var _v121 = _v0.i(0);
  let _v122 = _v0 => (0, _v7.jsx)(_v119.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v7.jsx)("path", {
        d: "M18.42 9.21a7 7 0 0 0-13.36 1.9A4 4 0 0 0 6 19h11a5 5 0 0 0 1.42-9.79ZM17 17H6a2 2 0 1 1 0-4 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.66A3 3 0 0 1 17 17Z",
        fill: "currentColor"
      })
    }),
    _v123 = _v0 => (0, _v7.jsx)(_v119.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v7.jsx)("path", {
        d: "M18 11h-5V6c0-.6-.4-1-1-1s-1 .4-1 1v5H6c-.6 0-1 .4-1 1s.4 1 1 1h5v5c0 .6.4 1 1 1s1-.4 1-1v-5h5c.6 0 1-.4 1-1s-.4-1-1-1Z",
        fill: "currentColor"
      })
    }),
    _v124 = ({
      left: _v0 = "auto",
      right: _v1 = "auto",
      top: _v2 = "auto",
      bottom: _v3 = "auto",
      ..._v4
    }) => {
      let {
          children: _v5
        } = _v4,
        _v6 = (0, _v114.useColorModeValue)("black", "white");
      return (0, _v7.jsxs)(_v48.Flex, {
        position: "absolute",
        left: _v0,
        right: _v1,
        top: _v2,
        bottom: _v3,
        width: (0, _v50.rem)(40),
        height: (0, _v50.rem)(40),
        justifyContent: "center",
        alignItems: "center",
        ..._v4,
        children: [(0, _v7.jsx)(_v123, {
          boxSize: "xs",
          stroke: _v6,
          strokeWidth: "3"
        }), _v5]
      });
    },
    _v125 = {
      UPLOAD: (0, _v17.translate)("Drop files to upload"),
      CREATE: (0, _v17.translate)({
        singular: "Start from scratch or choose a template",
        dictionary: {
          es: {
            singular: "Comience desde cero o elija una plantilla"
          },
          "de-DE": {
            singular: "Von Grund auf neu beginnen oder Vorlage auswählen"
          },
          "fr-FR": {
            singular: "Créez ou choisissez un modèle"
          },
          "ja-JP": {
            singular: "最初から作成するか、テンプレートを選択"
          },
          "ko-KR": {
            singular: "처음부터 시작하거나 템플릿 선택"
          },
          "pt-BR": {
            singular: "Comece do zero ou escolha um modelo"
          },
          "zh-CN": {
            singular: "从头开始或选择模板"
          }
        }
      }),
      LIVE: (0, _v17.translate)({
        singular: "Create a virtual event or webinar",
        dictionary: {
          es: {
            singular: "Cree un evento virtual o seminario web"
          },
          "de-DE": {
            singular: "Virtuelles Event oder Webinar erstellen"
          },
          "fr-FR": {
            singular: "Créez un événement virtuel ou un webinaire"
          },
          "ja-JP": {
            singular: "バーチャルイベントやウェビナーを作成"
          },
          "ko-KR": {
            singular: "가상 이벤트 또는 웨비나 만들기"
          },
          "pt-BR": {
            singular: "Crie um evento virtual ou webinar"
          },
          "zh-CN": {
            singular: "创建虚拟活动或网络研讨会"
          }
        }
      }),
      RECORD: (0, _v17.translate)({
        singular: "Record your screen, webcam, or both",
        dictionary: {
          es: {
            singular: "Grabe la pantalla, la cámara web o ambas"
          },
          "de-DE": {
            singular: "Bildschirm, Webcam oder beides aufzeichnen"
          },
          "fr-FR": {
            singular: "Enregistrez votre écran et/ou votre webcam"
          },
          "ja-JP": {
            singular: "画面、ウェブカメラ、または両方を録画"
          },
          "ko-KR": {
            singular: "화면, 웹캠 또는 둘 다 녹화"
          },
          "pt-BR": {
            singular: "Grave sua tela, webcam ou ambas"
          },
          "zh-CN": {
            singular: "录制屏幕、摄像头或屏幕和摄像头"
          }
        }
      })
    },
    _v126 = {
      UPLOAD: (0, _v17.translate)({
        singular: "Choose video files to upload",
        dictionary: {
          es: {
            singular: "Elija los archivos de video que desea subir"
          },
          "de-DE": {
            singular: "Videodateien zum Hochladen auswählen"
          },
          "fr-FR": {
            singular: "Choisir les fichiers vidéo à mettre en ligne"
          },
          "ja-JP": {
            singular: "アップロードする動画ファイルを選択"
          },
          "ko-KR": {
            singular: "업로드할 동영상 파일 선택"
          },
          "pt-BR": {
            singular: "Escolha os arquivos de vídeo que deseja carregar"
          },
          "zh-CN": {
            singular: "选择要上传的视频文件"
          }
        }
      }),
      CREATE: (0, _v17.translate)({
        singular: "Start from scratch or choose a template",
        dictionary: {
          es: {
            singular: "Comience desde cero o elija una plantilla"
          },
          "de-DE": {
            singular: "Von Grund auf neu beginnen oder Vorlage auswählen"
          },
          "fr-FR": {
            singular: "Créez ou choisissez un modèle"
          },
          "ja-JP": {
            singular: "最初から作成するか、テンプレートを選択"
          },
          "ko-KR": {
            singular: "처음부터 시작하거나 템플릿 선택"
          },
          "pt-BR": {
            singular: "Comece do zero ou escolha um modelo"
          },
          "zh-CN": {
            singular: "从头开始或选择模板"
          }
        }
      }),
      LIVE: (0, _v17.translate)({
        singular: "Live stream without limits",
        dictionary: {
          es: {
            singular: "Transmisión en vivo sin límites"
          },
          "de-DE": {
            singular: "Livestream ohne Grenzen"
          },
          "fr-FR": {
            singular: "Streaming en direct sans limites"
          },
          "ja-JP": {
            singular: "上限なしのライブストリーム"
          },
          "ko-KR": {
            singular: "무제한 라이브 스트리밍"
          },
          "pt-BR": {
            singular: "Faça transmissões ao vivo sem limites"
          },
          "zh-CN": {
            singular: "自由直播，毫无限制"
          }
        }
      }),
      RECORD: (0, _v17.translate)({
        singular: "Get the app to record your screen or camera",
        dictionary: {
          es: {
            singular: "Obtenga la aplicación para grabar su pantalla o cámara"
          },
          "de-DE": {
            singular: "Hol dir die App, um deinen Bildschirm oder deine Kamera aufzunehmen"
          },
          "fr-FR": {
            singular: "Téléchargez l'application pour enregistrer votre écran ou votre caméra"
          },
          "ja-JP": {
            singular: "アプリを入手して画面またはカメラを録画する"
          },
          "ko-KR": {
            singular: "앱을 다운로드하여 화면이나 카메라 녹화하기"
          },
          "pt-BR": {
            singular: "Baixe o aplicativo para gravar sua tela ou câmera"
          },
          "zh-CN": {
            singular: "获取录制屏幕或摄像头的应用程序"
          }
        }
      })
    },
    _v127 = (0, _v17.translate)({
      singular: "Upload your video for translation now.",
      dictionary: {
        es: {
          singular: "Sube tu vídeo para su traducción ahora."
        },
        "de-DE": {
          singular: "Laden Sie Ihr Video jetzt zur Übersetzung hoch."
        },
        "fr-FR": {
          singular: "Mettez en ligne votre vidéo pour la traduction dès maintenant."
        },
        "ja-JP": {
          singular: "今すぐ翻訳用に動画をアップロードしてください。"
        },
        "ko-KR": {
          singular: "지금 번역을 위해 동영상을 업로드하세요."
        },
        "pt-BR": {
          singular: "Envie seu vídeo para tradução agora."
        },
        "zh-CN": {
          singular: "立即上传您的视频以进行翻译。"
        }
      }
    }),
    _v128 = {
      UPLOAD: (0, _v7.jsx)(() => {
        let _v0 = (0, _v114.useColorModeValue)("black", "white");
        return (0, _v7.jsxs)(_v113.Center, {
          width: (0, _v50.rem)(170),
          height: (0, _v50.rem)(100),
          position: "relative",
          children: [(0, _v7.jsx)(_v122, {
            width: "100%",
            height: "100%"
          }), (0, _v7.jsx)(_v112.Box, {
            position: "absolute",
            bottom: (0, _v50.rem)(20),
            children: (0, _v7.jsx)(_v121.ArrowUpFilled, {
              boxSize: "md",
              stroke: _v0,
              strokeWidth: "2"
            })
          }), (0, _v7.jsx)(_v124, {
            left: (0, _v50.rem)(-12),
            bottom: (0, _v50.rem)(10)
          }), (0, _v7.jsx)(_v124, {
            right: (0, _v50.rem)(6),
            top: (0, _v50.rem)(11)
          }), (0, _v7.jsx)(_v124, {
            right: (0, _v50.rem)(-11),
            top: (0, _v50.rem)(34)
          })]
        });
      }, {}),
      CREATE: (0, _v7.jsx)(() => {
        let _v0 = (0, _v114.useColorModeValue)("black", "white");
        return (0, _v7.jsxs)(_v113.Center, {
          width: (0, _v50.rem)(170),
          height: (0, _v50.rem)(100),
          position: "relative",
          children: [(0, _v7.jsx)(_v116.Player, {
            width: "100%",
            height: "100%"
          }), (0, _v7.jsx)(_v112.Box, {
            position: "absolute",
            left: "0",
            top: (0, _v50.rem)(30),
            children: (0, _v7.jsx)(_v115.AiSparklesFilled, {
              boxSize: "xs",
              stroke: _v0
            })
          }), (0, _v7.jsx)(_v112.Box, {
            position: "absolute",
            right: "0",
            top: (0, _v50.rem)(15),
            children: (0, _v7.jsx)(_v115.AiSparklesFilled, {
              boxSize: "xs",
              stroke: _v0
            })
          }), (0, _v7.jsx)(_v112.Box, {
            position: "absolute",
            right: "0",
            bottom: (0, _v50.rem)(20),
            children: (0, _v7.jsx)(_v115.AiSparklesFilled, {
              boxSize: "xs",
              stroke: _v0,
              width: (0, _v50.rem)(18)
            })
          })]
        });
      }, {}),
      LIVE: (0, _v7.jsx)(() => (0, _v7.jsxs)(_v113.Center, {
        width: (0, _v50.rem)(170),
        height: (0, _v50.rem)(100),
        position: "relative",
        children: [(0, _v7.jsx)(_v20.CameraOn, {
          width: "100%",
          height: "100%"
        }), (0, _v7.jsx)(_v112.Box, {
          position: "absolute",
          top: (0, _v50.rem)(-10),
          left: (0, _v50.rem)(-10),
          transform: "rotate(45deg)",
          children: (0, _v7.jsx)(_v117.SoundWaves, {
            boxSize: "lg"
          })
        }), (0, _v7.jsx)(_v112.Box, {
          position: "absolute",
          right: (0, _v50.rem)(-10),
          top: (0, _v50.rem)(-10),
          transform: "rotate(-45deg)",
          children: (0, _v7.jsx)(_v117.SoundWaves, {
            boxSize: "lg"
          })
        })]
      }), {}),
      RECORD: (0, _v7.jsx)(() => {
        let _v0 = (0, _v114.useColorModeValue)("black", "white");
        return (0, _v7.jsxs)(_v113.Center, {
          width: (0, _v50.rem)(170),
          height: (0, _v50.rem)(100),
          position: "relative",
          children: [(0, _v7.jsx)(_v120, {
            width: "100%",
            height: "100%"
          }), (0, _v7.jsx)(_v112.Box, {
            position: "absolute",
            left: (0, _v50.rem)(1),
            top: (0, _v50.rem)(14),
            children: (0, _v7.jsx)(_v118.CircleShapeFilled, {
              boxSize: "xs",
              stroke: _v0,
              width: (0, _v50.rem)(20)
            })
          }), (0, _v7.jsx)(_v112.Box, {
            position: "absolute",
            right: (0, _v50.rem)(2),
            top: (0, _v50.rem)(15),
            children: (0, _v7.jsx)(_v118.CircleShapeFilled, {
              boxSize: "xs",
              stroke: _v0,
              width: (0, _v50.rem)(13)
            })
          }), (0, _v7.jsx)(_v112.Box, {
            position: "absolute",
            right: (0, _v50.rem)(14),
            top: (0, _v50.rem)(34),
            children: (0, _v7.jsx)(_v118.CircleShapeFilled, {
              boxSize: "xs",
              stroke: _v0,
              width: (0, _v50.rem)(18)
            })
          })]
        });
      }, {})
    },
    _v129 = {
      UPLOAD: (0, _v17.translate)({
        singular: "Select files",
        dictionary: {
          es: {
            singular: "Seleccionar archivos"
          },
          "de-DE": {
            singular: "Dateien auswählen"
          },
          "fr-FR": {
            singular: "Sélectionnez des fichiers"
          },
          "ja-JP": {
            singular: "ファイルを選択"
          },
          "ko-KR": {
            singular: "파일 선택하기"
          },
          "pt-BR": {
            singular: "Selecionar arquivos"
          },
          "zh-CN": {
            singular: "选择文件"
          }
        }
      }),
      CREATE: (0, _v17.translate)({
        singular: "Create video",
        dictionary: {
          es: {
            singular: "Crear un video"
          },
          "de-DE": {
            singular: "Video erstellen"
          },
          "fr-FR": {
            singular: "Créer une vidéo"
          },
          "ja-JP": {
            singular: "動画を作成"
          },
          "ko-KR": {
            singular: "동영상 제작"
          },
          "pt-BR": {
            singular: "Criar vídeo"
          },
          "zh-CN": {
            singular: "创建视频"
          }
        }
      }),
      LIVE: (0, _v17.translate)({
        singular: "Create event",
        dictionary: {
          es: {
            singular: "Crear evento"
          },
          "de-DE": {
            singular: "Event erstellen"
          },
          "fr-FR": {
            singular: "Créer un événement"
          },
          "ja-JP": {
            singular: "イベントを作成"
          },
          "ko-KR": {
            singular: "이벤트 생성"
          },
          "pt-BR": {
            singular: "Criar evento"
          },
          "zh-CN": {
            singular: "创建活动"
          }
        }
      }),
      RECORD: (0, _v17.translate)({
        singular: "Record video",
        dictionary: {
          es: {
            singular: "Grabar video"
          },
          "de-DE": {
            singular: "Video aufzeichnen"
          },
          "fr-FR": {
            singular: "Enregistrer une vidéo"
          },
          "ja-JP": {
            singular: "動画を録画する"
          },
          "ko-KR": {
            singular: "동영상 녹화하기"
          },
          "pt-BR": {
            singular: "Gravar vídeo"
          },
          "zh-CN": {
            singular: "录制视频"
          }
        }
      }),
      INVITE: (0, _v17.translate)({
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
      }),
      UPLOAD_EMPTY: (0, _v17.translate)({
        singular: "Upload",
        dictionary: {
          es: {
            singular: "Subir"
          },
          "de-DE": {
            singular: "Hochladen"
          },
          "fr-FR": {
            singular: "Importer"
          },
          "ja-JP": {
            singular: "アップロード"
          },
          "ko-KR": {
            singular: "업로드"
          },
          "pt-BR": {
            singular: "Carregar"
          },
          "zh-CN": {
            singular: "上传"
          }
        }
      }),
      UNIFIED_EVENT_ENTRY: (0, _v17.translate)({
        singular: "Create event",
        dictionary: {
          es: {
            singular: "Crear evento"
          },
          "de-DE": {
            singular: "Event erstellen"
          },
          "fr-FR": {
            singular: "Créer un événement"
          },
          "ja-JP": {
            singular: "イベントを作成"
          },
          "ko-KR": {
            singular: "이벤트 생성"
          },
          "pt-BR": {
            singular: "Criar evento"
          },
          "zh-CN": {
            singular: "创建活动"
          }
        }
      })
    },
    _v130 = {
      UPLOAD: (0, _v17.translate)({
        singular: "Choose files",
        dictionary: {
          es: {
            singular: "Elegir archivos"
          },
          "de-DE": {
            singular: "Dateien auswählen"
          },
          "fr-FR": {
            singular: "Choisir des fichiers"
          },
          "ja-JP": {
            singular: "ファイルを選択"
          },
          "ko-KR": {
            singular: "파일 선택"
          },
          "pt-BR": {
            singular: "Escolher arquivos"
          },
          "zh-CN": {
            singular: "选择文件"
          }
        }
      }),
      RECORD: (0, _v17.translate)({
        singular: "Get app",
        dictionary: {
          es: {
            singular: "Obtener la aplicación"
          },
          "de-DE": {
            singular: "App holen"
          },
          "fr-FR": {
            singular: "Obtenir l'app"
          },
          "ja-JP": {
            singular: "アプリをゲット"
          },
          "ko-KR": {
            singular: "앱 받기"
          },
          "pt-BR": {
            singular: "Obter aplicativo"
          },
          "zh-CN": {
            singular: "获取应用程序"
          }
        }
      }),
      CREATE: (0, _v17.translate)({
        singular: "Create video",
        dictionary: {
          es: {
            singular: "Crear un video"
          },
          "de-DE": {
            singular: "Video erstellen"
          },
          "fr-FR": {
            singular: "Créer une vidéo"
          },
          "ja-JP": {
            singular: "動画を作成"
          },
          "ko-KR": {
            singular: "동영상 제작"
          },
          "pt-BR": {
            singular: "Criar vídeo"
          },
          "zh-CN": {
            singular: "创建视频"
          }
        }
      }),
      LIVE: (0, _v17.translate)({
        singular: "Create event",
        dictionary: {
          es: {
            singular: "Crear evento"
          },
          "de-DE": {
            singular: "Event erstellen"
          },
          "fr-FR": {
            singular: "Créer un événement"
          },
          "ja-JP": {
            singular: "イベントを作成"
          },
          "ko-KR": {
            singular: "이벤트 생성"
          },
          "pt-BR": {
            singular: "Criar evento"
          },
          "zh-CN": {
            singular: "创建活动"
          }
        }
      }),
      INVITE: (0, _v17.translate)({
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
      }),
      UPLOAD_EMPTY: (0, _v17.translate)({
        singular: "Upload",
        dictionary: {
          es: {
            singular: "Subir"
          },
          "de-DE": {
            singular: "Hochladen"
          },
          "fr-FR": {
            singular: "Importer"
          },
          "ja-JP": {
            singular: "アップロード"
          },
          "ko-KR": {
            singular: "업로드"
          },
          "pt-BR": {
            singular: "Carregar"
          },
          "zh-CN": {
            singular: "上传"
          }
        }
      }),
      UNIFIED_EVENT_ENTRY: (0, _v17.translate)({
        singular: "Create event",
        dictionary: {
          es: {
            singular: "Crear evento"
          },
          "de-DE": {
            singular: "Event erstellen"
          },
          "fr-FR": {
            singular: "Créer un événement"
          },
          "ja-JP": {
            singular: "イベントを作成"
          },
          "ko-KR": {
            singular: "이벤트 생성"
          },
          "pt-BR": {
            singular: "Criar evento"
          },
          "zh-CN": {
            singular: "创建活动"
          }
        }
      })
    },
    _v131 = {
      CREATE: "/create/edit?blank=true",
      LIVE: "/live/select?location=upload_page",
      RECORD: "https://vimeo.com/record?utm_campaign=screen_recorder&utm_source=onsite&utm_content=upload_flow_record_tab&vcid=39126",
      RECORD_STANDALONE: "/record/start-recording"
    };
  var _v132 = _v0.i(0),
    _v133 = _v0.i(0);
  let _v134 = ({
    isLoading: _v0,
    uploadType: _v1,
    icon: _v2,
    titleOverride: _v3
  }) => {
    let _v4 = (0, _v109.useMediaQueryVisibility)(`screen and (max-width: ${(0, _v50.rem)(768)})`);
    return (0, _v7.jsxs)(_v7.Fragment, {
      children: [(0, _v7.jsx)(_v48.Flex, {
        width: (0, _v50.rem)(170),
        height: (0, _v50.rem)(64),
        alignItems: "center",
        children: _v0 ? (0, _v7.jsx)(_v133.AnimatedUploadIcon, {}) : _v2 ?? _v128[_v1]
      }), (0, _v7.jsx)(_v132.Header, {
        size: "2xl",
        className: "dropzone-header",
        children: _v3 ?? (_v4 ? _v126[_v1] : _v125[_v1])
      })]
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
    _v148 = _v0.i(0);
  let _v149 = new class {
      videoId = 0;
      video;
      teamUser;
      init({
        videoId: _v0,
        video: _v1,
        teamUser: _v2
      }) {
        this.videoId = _v0, this.video = _v1, this.teamUser = _v2;
      }
      initTeamUser(_v0) {
        this.teamUser = _v0;
      }
      send({
        eventName: _v0,
        fields: _v1,
        contexts: _v2,
        version: _v3 = -1
      }) {
        let _v4 = new _v136.Event(_v0, _v3, _v1);
        _v2 ? _v136.BigPictureClient.sendEventWithContexts(_v4, _v2) : _v136.BigPictureClient.sendEvent(_v4);
      }
      buildVideoContext() {
        return (0, _v145.buildVideoBpContext)({
          video_id: this.videoId,
          title: this.video?.name ?? "",
          video_owner_id: parseInt(this.video?.user?.uri.split("/")[2] ?? ""),
          is_demo: !1,
          video_privacy: this.video?.privacy?.view || null,
          video_embed_privacy: this.video?.privacy?.embed || null,
          upload_method_api: null,
          upload_method_api_id: null,
          duration: this.video?.duration ?? 0,
          resolution: null,
          video_height: this.video?.height ?? 0,
          video_width: this.video?.width ?? 0,
          orientation: null
        });
      }
      buildVideoViewContext() {
        let _v0 = this.video?.metadata?.aiContent,
          _v1 = _v0 ? _v0.audio || _v0.audioAuto || _v0.visual || _v0.visualAuto : null;
        return (0, _v146.buildVideoViewBpContext)({
          viewer_home_session_id: document.querySelector('meta[name="bp-server-session-id"]')?.getAttribute("content") ?? "",
          has_like_available: !!this.video?.metadata?.connections?.likes?.uri,
          has_watch_later_available: !!this.video?.metadata?.interactions?.watchlater?.added,
          has_share_available: this.video?.privacy?.allowShareLink ?? !1,
          has_ai: _v1,
          existing_like_counts: this.video?.metadata?.connections?.likes?.total ?? null,
          existing_view_counts: this.video?.stats?.plays ?? null,
          listed_categories_counts: 0
        });
      }
      buildTeamContext() {
        return (0, _v143.buildTeamBpContextFromTeamUser)(this.teamUser);
      }
      buildWebContext(_v0) {
        return (0, _v148.buildWebBpContext)({
          referrer: (0, _v138.getEntryPage)(document.referrer || ""),
          path: window.location.pathname,
          target_path: null,
          ..._v0
        });
      }
      buildProductAnalyticsContext(_v0) {
        return (0, _v142.buildProductAnalyticsBpContext)({
          ..._v0,
          device_type: (0, _v139.default)(),
          entity_type: _v0.entity_type ?? null,
          is_user_facing_data: _v0.is_user_facing_data ?? null
        });
      }
      buildActionContext(_v0) {
        return (0, _v140.buildActionBpContext)(_v0);
      }
      buildViewContext(_v0) {
        return (0, _v147.buildViewBpContext)(_v0);
      }
      buildThirdPartyIntegrationContext(_v0 = {}) {
        return (0, _v144.buildThirdPartyIntegrationBpContext)({
          integration_id: null,
          integration_name: null,
          is_partner: null,
          ..._v0
        });
      }
      buildEditorContext(_v0) {
        return (0, _v141.buildEditorBpContext)(_v0);
      }
    }(),
    _v150 = {
      drive: {
        integration_id: 14,
        partnerships_flag: 1,
        app_id: 0,
        integration_name: "Google Drive",
        integration_type: "join",
        partner_bucket: "Upload_VUP"
      },
      dropbox: {
        integration_id: 6,
        partnerships_flag: 1,
        app_id: 0,
        integration_name: "Dropbox",
        integration_type: "join",
        partner_bucket: "Upload_VUP"
      },
      box: {
        integration_id: 4,
        partnerships_flag: 1,
        app_id: 0,
        integration_name: "Box",
        integration_type: "join",
        partner_bucket: "Upload_VUP"
      },
      zoom: {
        integration_id: 32,
        partnerships_flag: 1,
        app_id: 0,
        integration_name: "Zoom to Vimeo",
        integration_type: "oauth",
        partner_bucket: "Autoarchive"
      },
      webex: {
        integration_id: 28,
        partnerships_flag: 1,
        app_id: 0,
        integration_name: "Webex",
        integration_type: "oauth",
        partner_bucket: "Autoarchive"
      }
    };
  function _v151(_v0, _v1) {
    return Math.round(_v0 / _v1 * 100);
  }
  function _v152(_v0) {
    return "number" == typeof _v0 && !isNaN(_v0);
  }
  let _v153 = _v0 => {
      _v149.send({
        eventName: "vimeo.open_team_switcher",
        contexts: {
          ..._v149.buildActionContext({
            action_type: "click",
            feature: null
          }),
          ..._v149.buildProductAnalyticsContext({
            feature: "not_applicable_pageview",
            product: "upload",
            location: "content_area",
            element: "dropdown",
            copy: _v0.title ?? null,
            modal_name: null,
            flow: null,
            entity_type: "user"
          }),
          ..._v149.buildWebContext({
            page_name: "upload_page",
            referrer_page_name: null,
            target: null,
            location: null,
            copy: null
          }),
          ..._v149.buildTeamContext()
        }
      });
    },
    _v154 = ({
      copy: _v0,
      target: _v1,
      app_name: _v2
    }) => {
      _v149.send({
        eventName: "vimeo.start_new_video_flow",
        contexts: {
          ..._v149.buildActionContext({
            action_type: "click",
            feature: null
          }),
          ..._v149.buildWebContext({
            page_name: "upload_page",
            referrer_page_name: null,
            location: null,
            target: _v1,
            copy: _v0
          }),
          ..._v149.buildProductAnalyticsContext({
            product: "upload",
            feature: "import",
            location: "bottom_panel",
            flow: "import",
            element: "button",
            entity_type: "video",
            copy: _v0
          }),
          ..._v149.buildTeamContext(),
          ..._v149.buildThirdPartyIntegrationContext({
            is_integration: !0,
            integration_id: _v150[_v2].integration_id,
            integration_name: _v150[_v2].integration_name,
            managed_user_id: null,
            app_id: _v150[_v2].app_id,
            integration_type: _v150[_v2].integration_type,
            partner_bucket: _v150[_v2].partner_bucket,
            is_partner: !0
          })
        }
      });
    },
    _v155 = _v0 => {
      _v136.BigPictureClient.sendEvent(new _v137.Event("vimeo.click_autoarchive_install", 1, {
        product: _v0,
        location: "upload_page",
        path: window.location.pathname
      }));
    },
    _v156 = _v0 => {
      let _v1 = new _v137.Event("click_svv_upload_button", 1, {
        product: "Upload",
        click_target: _v0,
        page_version: "single_video_view"
      });
      _v136.BigPictureClient.sendEvent(_v1);
    },
    _v157 = _v0 => {
      let _v1 = new _v137.Event("vimeo.click", 23, {
        page: "LIUP",
        location: "svv_main_field",
        name: "upload_option_click",
        feature: "upload",
        type: "general",
        ..._v0
      });
      _v136.BigPictureClient.sendEvent(_v1);
    },
    _v158 = ({
      isLoading: _v0,
      isDisabled: _v1,
      uniqueId: _v2,
      uploadType: _v3,
      onFileSelected: _v4
    }) => {
      let _v5 = (0, _v11.useRef)(null),
        _v6 = (0, _v109.useMediaQueryVisibility)(`screen and (max-width: ${(0, _v50.rem)(768)})`);
      return (0, _v7.jsx)(_v135.FileInput, {
        label: (0, _v7.jsx)(_v87.Button, {
          size: "lg",
          variant: "primary",
          onClick: () => _v5?.current?.click(),
          children: _v6 ? _v130[_v3] : _v129[_v3]
        }),
        ref: _v5,
        multiple: !0,
        onClick: () => _v156(_v3),
        onChange: _v4,
        accept: "video/*,.mkv,.m2ts",
        isDisabled: _v1,
        isLoading: _v0,
        variant: "filled",
        size: "lg"
      }, `file-upload-${_v2}`);
    },
    _v159 = ({
      children: _v0,
      className: _v1,
      folderId: _v2,
      isDragging: _v3 = !1,
      targetUserId: _v4,
      onDragEnd: _v5,
      onDragEnter: _v6,
      onDragLeave: _v7,
      onDragOver: _v8,
      onDrop: _v9,
      disabled: _v10 = !1,
      ..._v11
    }) => {
      let {
          upload: _v12
        } = (0, _v80.useUploader)(),
        _v13 = (0, _v114.useColorModeValue)("blue.50", "blue.800");
      return _v10 ? (0, _v7.jsx)(_v7.Fragment, {
        children: _v0
      }) : (0, _v7.jsx)(_v113.Center, {
        flexDirection: "column",
        className: _v1,
        onDragEnd: _v0 => {
          _v5?.(_v0), _v0.preventDefault();
        },
        onDragEnter: _v0 => {
          _v6?.(_v0), _v0.preventDefault();
        },
        onDragLeave: _v0 => {
          _v7?.(_v0), _v0.preventDefault();
        },
        onDragOver: _v0 => {
          _v8?.(_v0), _v0.preventDefault();
        },
        onDrop: _v0 => {
          if (_v9) _v9(_v0);else {
            let _v0 = _v0.target?.files;
            _v0 && _v12(_v0, {
              folderId: _v2,
              targetUserId: _v4
            });
          }
          _v0.preventDefault();
        },
        backgroundColor: _v3 ? _v13 : "inherit",
        borderColor: _v3 ? "blue.500" : "fill-component",
        borderStyle: _v3 ? "dashed" : "solid",
        sx: {
          div: {
            button: {
              pointerEvents: _v3 ? "none" : "auto",
              zIndex: _v3 ? "101" : "auto"
            }
          }
        },
        ..._v11,
        children: _v0
      });
    },
    _v160 = ({
      className: _v0,
      isActive: _v1
    }) => (0, _v7.jsx)(_v113.Center, {
      className: _v0,
      ...(_v1 && {
        flexDirection: "column",
        backgroundColor: "inherit",
        borderColor: "fill-component",
        borderStyle: "solid",
        height: `clamp(${(0, _v50.rem)(400)}, 56vh, ${(0, _v50.rem)(518)})`,
        width: "100%",
        marginTop: (0, _v50.rem)(24),
        borderWidth: [0, 0, "2px"],
        gap: (0, _v50.rem)(24),
        borderRadius: "sm"
      })
    });
  var _v161 = _v0.i(0);
  let _v162 = (0, _v86.default)(async () => {
      let {
        EventCreationWizardModal: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v163 = ({
      owner: _v0,
      switchTeam: _v1,
      teamConfigs: _v2,
      setisPrivateToMeFolderSelected: _v3,
      switchFolder: _v4,
      selectedFolder: _v5,
      selectedFolderId: _v6,
      uploadClipProperties: _v7,
      initLoadingAnimation: _v8 = !1,
      uploadType: _v9,
      onDragOver: _v10,
      onDrop: _v11,
      onUploadFailure: _v12,
      isBoxPickerActive: _v13,
      isTranslatorOnboarding: _v14 = !1
    }) => {
      let _v15 = (0, _v11.useContext)(_v85.ViewerContext),
        _v16 = _v0 ? _v0.id : null,
        {
          trackUploadDestinationChanged: _v17
        } = _v77(),
        [_v18, _v19] = (0, _v11.useState)(() => "true" === new URLSearchParams(window.location.search).get("show_ecw")),
        {
          isRecordToolSupported: _v20
        } = _v15 || {
          teamUserPermissionLevel: null
        },
        {
          capabilities: _v21
        } = (0, _v69.useCapability)(["hasContentSpaceEnabled"], _v0?.id),
        [_v22, _v23] = (0, _v11.useState)(_v9),
        _v24 = (0, _v109.useMediaQueryVisibility)(`screen and (max-width: ${(0, _v50.rem)(768)})`),
        {
          uploads: _v25,
          clearUpoads: _v26,
          isUploading: _v27,
          isDragging: _v28,
          onDragEnd: _v29,
          onDragLeave: _v30,
          onDragOver: _v31,
          onDrop: _v32,
          onUploadFiles: _v33
        } = (({
          onFileDrop: _v0,
          onFileDragOver: _v1,
          targetUserId: _v2,
          selectedFolder: _v3,
          uploadClipProperties: _v4,
          hasContentSpaceEnabled: _v5
        }) => {
          let [_v6, _v7] = (0, _v11.useState)(!1),
            [_v8, _v9] = (0, _v11.useState)(!1),
            {
              trackUploadFileSelected: _v10
            } = _v77(),
            _v11 = _v3 ? (0, _v91.getProjectId)(_v3) : null,
            _v12 = (0, _v161.usePage)().includes("upload") ? "single_video_view" : "video_library_empty_state",
            {
              upload: _v13,
              uploaderSummary: _v14,
              uploads: _v15,
              clear: _v16
            } = (0, _v80.useUploader)(),
            {
              user: _v17
            } = (0, _v11.useContext)(_v85.ViewerContext) || {
              teamUserPermissionLevel: null
            },
            _v18 = (0, _v11.useCallback)((_v0, _v1) => {
              (({
                selectedFolder: _v0,
                actionType: _v1,
                numberOfFiles: _v2,
                pageVersion: _v3,
                numFilesUploading: _v4,
                permissionLevel: _v5,
                hasContentSpaceEnabled: _v6
              }) => {
                let _v7 = {
                    product: "Upload",
                    action: "Attempt",
                    num_files_uploading: _v4,
                    num_files: _v2,
                    upload_input_type: _v1,
                    page_version: _v3,
                    team_permission_level: _v5 ?? null,
                    folder_id: _v0 ? (0, _v91.getProjectId)(_v0) : null,
                    is_subfolder: !!_v0?.metadata?.connections?.parentFolder,
                    folder_share_status: _v0?.privacy?.view === "nobody" ? "not_shared" : "shared",
                    is_private_to_me: !!_v0?.isPrivateToUser,
                    parent_folder_id: _v0?.metadata?.connections?.parentFolder ? (0, _v91.getProjectId)(_v0?.metadata.connections.parentFolder) : null,
                    is_my_videos: (!!_v0?.isPrivateToUser && _v6) ?? null
                  },
                  _v8 = new _v137.Event("upload_video_from_browser", 7, _v7);
                _v136.BigPictureClient.sendEvent(_v8);
              })({
                permissionLevel: _v17?.teamUserPermissionLevel,
                numFilesUploading: _v14.activeCount,
                numberOfFiles: _v0.length,
                selectedFolder: _v3,
                pageVersion: _v12,
                actionType: _v1,
                hasContentSpaceEnabled: _v5 ?? !1
              });
            }, [_v12, _v3, _v14.activeCount, _v17?.teamUserPermissionLevel, _v5]),
            _v19 = (0, _v11.useCallback)(_v0 => {
              _v9(!0), _v13(_v0, {
                targetUserId: _v2 || void 0,
                folderId: _v11 || void 0
              }, _v4);
            }, [_v11, _v2, _v13, _v4]),
            _v20 = (0, _v11.useCallback)(_v0 => {
              if (!_v0.target || !_v0.target.files) return;
              let {
                files: _v1
              } = _v0.target;
              _v19(_v1), _v18(_v1, "filepicker"), _v10({
                uploadMethod: "file_picker"
              });
            }, [_v18, _v10, _v19]),
            _v21 = (0, _v11.useCallback)(() => {
              _v7(!1);
            }, []),
            _v22 = (0, _v11.useCallback)(_v0 => {
              if (_v7(!1), !_v0.dataTransfer || !_v0.dataTransfer.files) return;
              let {
                files: _v1
              } = _v0.dataTransfer;
              _v19(_v1), _v0?.(_v0), _v18(_v1, "dropzone"), _v10({
                uploadMethod: "drag_and_drop"
              });
            }, [_v18, _v0, _v10, _v19]);
          return {
            isUploading: _v8,
            isDragging: _v6,
            uploads: _v15,
            clearUpoads: _v16,
            onDragEnd: _v21,
            onDrop: _v22,
            onDragLeave: (0, _v11.useCallback)(() => {
              _v7(!1);
            }, []),
            onDragOver: (0, _v11.useCallback)(_v0 => {
              _v7(!0), _v1?.(_v0);
            }, [_v1]),
            onUploadFiles: _v20
          };
        })({
          targetUserId: _v16,
          selectedFolder: _v5,
          uploadClipProperties: _v7,
          hasContentSpaceEnabled: _v21?.hasContentSpaceEnabled,
          onFileDrop: _v11,
          onFileDragOver: _v10,
          onUploadFailure: _v12
        }),
        _v34 = _v15?.teamUser?.accountType || null,
        _v35 = (0, _v11.useRef)(!0),
        _v36 = (0, _v11.useCallback)(_v0 => {
          let _v1, _v2;
          _v3?.(_v0?.isPrivateToUser || !1), _v4?.(_v0), _v1 = {
            actor_resource_role: null,
            actor_team_role: null,
            entry_page: null,
            is_pinned: !!_v5?.isPinned,
            location: "content_area",
            page: "upload_page",
            path: window.location.pathname,
            position_row: null,
            product: "Upload",
            team_owner_id: _v16 ? String(_v16) : null,
            team_size: null,
            team_subscription_type: _v34,
            folder_id: _v5 ? String((0, _v91.getProjectId)(_v5)) : null,
            is_subfolder: !!_v5?.metadata?.connections?.parentFolder,
            folder_share_status: _v5?.privacy?.view === "nobody" ? "not_shared" : "shared",
            is_private_to_me: !!_v5?.isPrivateToUser,
            parent_folder_id: _v5?.metadata?.connections?.parentFolder ? String((0, _v91.getProjectId)(_v5?.metadata.connections.parentFolder)) : null
          }, _v2 = new _v137.Event("vimeo.click_folder_title", 2, _v1), _v136.BigPictureClient.sendEvent(_v2), _v35.current ? _v35.current = !1 : _v17({
            project: _v0
          });
        }, [_v3, _v4, _v5, _v16, _v34, _v17]);
      (0, _v11.useEffect)(() => {
        _v23(_v9);
      }, [_v9]);
      let _v37 = _v2 && _v2.map(_v0 => ({
          id: _v0.ownerId,
          title: _v0.teamName,
          role: _v0.permissionLevel ?? "",
          imgSrc: _v0?.teamLogoUrl,
          privateToMeFolderId: _v0.privateToMeFolderId
        })),
        _v38 = (0, _v11.useCallback)(_v0 => {
          _v1?.(_v0);
        }, [_v1]),
        [_v39, _v40] = (0, _v11.useState)(_v8),
        [_v41, _v42] = (0, _v11.useState)(0);
      return (0, _v11.useEffect)(() => {
        _v40(_v27);
      }, [_v27]), (0, _v11.useEffect)(() => {
        let _v0 = _v25?.find(_v0 => _v0.state === _v81.STATES.FAILED);
        _v0 && (_v26(_v0), _v40(!1), _v42(_v0 => ++_v0), _v12?.(_v0.error));
      }, [_v26, _v12, _v25]), (0, _v7.jsxs)(_v7.Fragment, {
        children: [(0, _v7.jsx)(_v160, {
          className: "box-upload-picker",
          isActive: _v13
        }), !_v13 && (0, _v7.jsxs)(_v159, {
          className: "upload-page-dropzone",
          isDragging: _v28,
          onDragEnd: _v29,
          onDragOver: _v31,
          onDrop: _v32,
          onDragLeave: _v30,
          folderId: _v6 ?? void 0,
          targetUserId: _v16 ?? void 0,
          height: `clamp(${(0, _v50.rem)(400)}, 56vh, ${(0, _v50.rem)(518)})`,
          width: "100%",
          marginTop: (0, _v50.rem)(24),
          borderWidth: [0, 0, "2px"],
          gap: (0, _v50.rem)(24),
          borderRadius: "sm",
          children: [(0, _v7.jsx)(_v134, {
            uploadType: _v9,
            isLoading: _v39,
            titleOverride: _v14 && "UPLOAD" === _v9 ? _v127 : void 0
          }), "UPLOAD" === _v9 ? (0, _v7.jsxs)(_v7.Fragment, {
            children: [(0, _v7.jsx)(_v158, {
              isLoading: _v39,
              isDisabled: !_v0 || _v39,
              uniqueId: _v41,
              uploadType: _v9,
              onFileSelected: _v33
            }), _v37 && _v0 && (0, _v7.jsx)(_v110.TeamSwitcher, {
              disabled: _v39,
              teams: _v37,
              selectTeam: _v38,
              selectFolder: _v36,
              selectedFolder: _v5 ?? null,
              selectedTeamId: _v0.id,
              isLoading: !_v0,
              enabledRoles: _v111.ALL_TEAM_ROLES,
              onTeamsDropdownShown: _v153
            })]
          }) : (0, _v7.jsx)(_v89.Link, {
            ...("RECORD" === _v22 ? _v24 ? {
              href: "https://vimeo.page.link/vimeoapp"
            } : _v20 ? {
              href: _v131.RECORD_STANDALONE
            } : {
              href: _v131.RECORD,
              "data-screen-recorder-cta": !0
            } : {
              href: _v131[_v22]
            }),
            textDecoration: "none",
            children: (0, _v7.jsx)(_v87.Button, {
              size: "lg",
              variant: "primary",
              onClick: _v0 => {
                _v156(_v9), "LIVE" === _v9 && (_v19(!0), _v0.preventDefault());
              },
              children: _v24 ? _v130[_v22] : _v129[_v22]
            })
          })]
        }), (0, _v7.jsx)(_v162, {
          active: _v18,
          activeSet: _v19
        })]
      });
    };
  var _v164 = _v0.i(0),
    _v165 = _v0.i(0),
    _v166 = _v0.i(0),
    _v167 = _v0.i(0),
    _v168 = (0, _v11.forwardRef)(function (_v0, _v1) {
      return _v11.default.createElement("svg", (0, _v167.c)({
        viewBox: "0 0 20 20",
        ref: _v1
      }, _v0), _v11.default.createElement("path", {
        d: "M19.71 14.25l-2.05-2.49 2-2.52a.69.69 0 0 0-.17-1 .84.84 0 0 0-1.11.14l-1.74 2.17-1.76-2.16a.84.84 0 0 0-1.1-.13.7.7 0 0 0-.17 1l2.06 2.49-2 2.52a.69.69 0 0 0 .17 1 .86.86 0 0 0 1.11-.14L16.67 13l1.78 2.15a.83.83 0 0 0 1.1.12.68.68 0 0 0 .16-1",
        fill: "#22a7f0"
      }), _v11.default.createElement("path", {
        d: "M10.24 14a2.2 2.2 0 1 1 2.19-2.21A2.19 2.19 0 0 1 10.24 14m-6.46 0A2.2 2.2 0 1 1 6 11.83 2.2 2.2 0 0 1 3.78 14m6.43-5.9a3.65 3.65 0 0 0-3.22 2 3.65 3.65 0 0 0-5.44-1.17V5.85a.74.74 0 0 0-.74-.72.73.73 0 0 0-.72.72v6.08A3.66 3.66 0 0 0 7 13.54a3.66 3.66 0 1 0 3.2-5.4",
        fill: "#22a7f0"
      }));
    }),
    _v169 = (0, _v11.forwardRef)(function (_v0, _v1) {
      return _v11.default.createElement("svg", (0, _v167.c)({
        viewBox: "0 0 20 20",
        ref: _v1
      }, _v0), _v11.default.createElement("defs", null, _v11.default.createElement("radialGradient", {
        id: "drive_svg__a",
        cx: -181.3,
        cy: 100.59,
        r: 1.98,
        gradientTransform: "matrix(6.03 0 0 -6.03 1124.65 619.63)",
        gradientUnits: "userSpaceOnUse"
      }, _v11.default.createElement("stop", {
        offset: 0,
        stopColor: "#4387fd"
      }), _v11.default.createElement("stop", {
        offset: .65,
        stopColor: "#3078f0"
      }), _v11.default.createElement("stop", {
        offset: .91,
        stopColor: "#2b72ea"
      }), _v11.default.createElement("stop", {
        offset: 1,
        stopColor: "#286ee6"
      })), _v11.default.createElement("radialGradient", {
        id: "drive_svg__b",
        cx: -197.93,
        cy: 106.77,
        r: 1.06,
        gradientTransform: "matrix(11.29 0 0 -11.29 2267.18 1219.22)",
        gradientUnits: "userSpaceOnUse"
      }, _v11.default.createElement("stop", {
        offset: 0,
        stopColor: "#ffd24d"
      }), _v11.default.createElement("stop", {
        offset: 1,
        stopColor: "#f6c338"
      }))), _v11.default.createElement("path", {
        fill: "#0da960",
        d: "M3.48 18.32L0 12.29 6.52 1 10 7.03 3.48 18.32z"
      }), _v11.default.createElement("path", {
        fill: "url(#drive_svg__a)",
        d: "M3.48 18.32l3.48-6.03H20l-3.48 6.03H3.48z"
      }), _v11.default.createElement("path", {
        fill: "url(#drive_svg__b)",
        d: "M20 12.29h-6.96L6.52 1h6.96L20 12.29z"
      }), _v11.default.createElement("path", {
        fill: "#2d6fdd",
        d: "M10 12.29H6.96l1.51-2.63-4.99 8.66L10 12.29z"
      }), _v11.default.createElement("path", {
        fill: "#e5b93c",
        d: "M13.04 12.29H20l-8.47-2.63 1.51 2.63z"
      }), _v11.default.createElement("path", {
        fill: "#0c9b57",
        d: "M8.47 9.66L10 7.03 6.52 1l1.95 8.66z"
      }));
    }),
    _v170 = (0, _v11.forwardRef)(function (_v0, _v1) {
      return _v11.default.createElement("svg", (0, _v167.c)({
        viewBox: "0 0 20 20",
        ref: _v1
      }, _v0), _v11.default.createElement("path", {
        d: "M10 5.2L5 8.39l5 3.2-5 3.19-5-3.22 5-3.2L0 5.2 5 2zM5 15.79l5-3.19 5 3.19L10 19zm5-4.23l5-3.2-5-3.16L15 2l5 3.2-5 3.19 5 3.2-5 3.19z",
        fill: "#0061ff"
      }));
    }),
    _v171 = (0, _v11.forwardRef)(function (_v0, _v1) {
      return _v11.default.createElement("svg", (0, _v167.c)({
        viewBox: "0 0 20 20",
        ref: _v1
      }, _v0), _v11.default.createElement("path", {
        d: "M17.55 11.12a2 2 0 0 1 1.77 2.13 1.85 1.85 0 0 1-1.77 2H7.44a2.47 2.47 0 0 1-2.64-2.67c0-2.31 2.55-2.39 2.55-2.39s.21-2.52 2.44-3a3.23 3.23 0 0 1 3.64 1.4A3 3 0 0 1 16 8.47a2.62 2.62 0 0 1 1.54 2.65",
        fill: "#094ab2"
      }), _v11.default.createElement("path", {
        d: "M4.18 12.59c0-2.55 2.69-2.93 2.69-2.93a3.89 3.89 0 0 1 2.79-3.07A3.52 3.52 0 0 1 13.6 7.9a2.3 2.3 0 0 1 1.33-.26 4.16 4.16 0 0 0-2.59-3.34 3.9 3.9 0 0 0-4.95 1.8 3.09 3.09 0 0 0-2.94 0 3.28 3.28 0 0 0-1.68 3.16A2.49 2.49 0 0 0 .5 11.87 2.61 2.61 0 0 0 3 14.39h1.69a3.25 3.25 0 0 1-.51-1.8",
        fill: "#094ab2"
      }));
    });
  let _v172 = (0, _v15.default)(_v169).withConfig({
      displayName: "style__Drive",
      componentId: "sc-b87fbf-0"
    })`
  path:nth-child(2) {
    fill: rgb(13, 169, 96) !important;
  }
  path:nth-child(3),
  path:nth-child(5) {
    fill: rgb(45, 111, 221) !important;
  }
  path:nth-child(4) {
    fill: rgb(255, 208, 75) !important;
  }
  path:nth-child(6) {
    fill: rgb(229, 185, 60) !important;
  }
  path:last-child {
    fill: rgb(12, 155, 87) !important;
  }
`,
    _v173 = (0, _v15.default)(_v170).withConfig({
      displayName: "style__Dropbox",
      componentId: "sc-b87fbf-1"
    })`
  > * {
    fill: rgb(0, 97, 255) !important;
  }
`;
  (0, _v15.default)(_v171).withConfig({
    displayName: "style__Onedrive",
    componentId: "sc-b87fbf-2"
  })`
  > * {
    fill: rgb(9, 74, 178) !important;
  }
`;
  let _v174 = (0, _v15.default)(_v168).withConfig({
      displayName: "style__Box",
      componentId: "sc-b87fbf-3"
    })`
  > * {
    fill: rgb(34, 167, 240) !important;
  }
`,
    _v175 = ({
      children: _v0,
      ..._v1
    }) => (0, _v7.jsx)(_v87.Button, {
      borderColor: "fill-component !important",
      borderRadius: "sm",
      size: "lg",
      variant: "tertiary",
      ..._v1,
      children: _v0
    }),
    _v176 = ["mpg", "mpeg", "mp4", "m4v", "avi", "mov", "flv", "webm"],
    _v177 = ({
      onFilesSelect: _v0,
      onClick: _v1,
      setIsBoxPickerActive: _v2
    }) => {
      let {
          boxClientId: _v3
        } = (0, _v11.useContext)(_v84.PullUploadContext),
        _v4 = (0, _v11.useContext)(_v85.ViewerContext),
        _v5 = new URLSearchParams((0, _v8.useRouter)().asPath.split("?")[1]),
        _v6 = _v5.get("box_access_token"),
        [_v7, _v8] = (0, _v11.useState)(!!_v5.get("show_box_picker")),
        _v9 = (0, _v11.useRef)(null),
        _v10 = (0, _v11.useCallback)(() => {
          _v9.current && (_v9.current.hide(), _v8(!1), _v2(!1));
        }, [_v2]),
        [_v11, _v12] = (0, _v166.useScript)("https://cdn01.boxcdn.net/platform/elements/23.0.0/en-US/picker.js", !_v7);
      (0, _v11.useEffect)(() => {
        if (_v7) {
          let _v0 = document.createElement("link");
          _v0.setAttribute("rel", "stylesheet"), _v0.setAttribute("href", "https://cdn01.boxcdn.net/platform/elements/23.0.0/en-US/picker.css"), document.head.appendChild(_v0);
        }
      }, [_v7]), (0, _v11.useEffect)(() => () => {
        _v10();
      }, [_v10]), (0, _v11.useEffect)(() => {
        if (_v12) return void console.warn("Failed to load Box Picker");
        if (_v11 && window.Box && _v6 && _v7) {
          _v2(!0);
          let _v0 = _v9.current = new window.Box.FilePicker();
          _v0.addListener("choose", _v0 => {
            0 !== _v0.length && (_v0.map(_v0 => (_v0.link = _v0.authenticated_download_url, _v0.url = _v0.shared_link.url, _v0.headers = {
              authorization: `Bearer ${_v6}`
            }, _v0)), _v10(), _v0(_v0, _v81.TYPES.API_PULL_CLIP, _v81.API_APPS.BOX_APP));
          }), _v0.addListener("cancel", () => {
            _v10();
          }), _v0.show("0", _v6, {
            container: ".box-upload-picker",
            size: "small",
            extensions: _v176
          });
        }
      }, [_v6, _v11, _v12, _v0, _v7]);
      let _v13 = (0, _v11.useCallback)(() => {
        fetch("/partner-integration-event/send?integration_id=4&interaction_type=join", {
          method: "POST",
          body: JSON.stringify({
            token: _v4?.xsrft
          }),
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
          }
        }), window.location.replace(`https://account.box.com/api/oauth2/authorize?response_type=code&client_id=${_v3}&redirect_uri=${window.location.origin}/box/oauth_callback`), _v157({
          target: "box_option",
          copy: "Box"
        }), _v1();
      }, [_v3, _v4?.xsrft, _v1]);
      return (0, _v7.jsx)(_v175, {
        leftIcon: (0, _v7.jsx)(_v174, {}),
        onClick: _v13,
        children: (0, _v17.translate)("Box")
      });
    },
    _v178 = ({
      onFilesSelect: _v0,
      onClick: _v1
    }) => {
      let [_v2, _v3] = (0, _v166.useScript)("https://www.dropbox.com/static/api/2/dropins.js"),
        [_v4, _v5] = (0, _v11.useState)(!0),
        {
          dbClientId: _v6
        } = (0, _v11.useContext)(_v84.PullUploadContext),
        _v7 = (0, _v11.useContext)(_v85.ViewerContext);
      (0, _v11.useEffect)(() => {
        window.Dropbox && (window.Dropbox.isBrowserSupported() || _v5(!1), window.Dropbox.appKey = _v6);
      }, [_v6, _v2]);
      let _v8 = (0, _v11.useCallback)(() => {
        fetch("/partner-integration-event/send?integration_id=6&interaction_type=join", {
          method: "POST",
          body: JSON.stringify({
            token: _v7?.xsrft
          }),
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
          }
        }), window.Dropbox && window.Dropbox.choose({
          success: _v0 => {
            _v0.map(_v0 => (_v0.size = parseInt(_v0.bytes, 10), _v0.thumbnailLink = _v0.thumbnailLink?.replace(/bounding_box=(\d*)/, "bounding_box=2048"), _v0.headers = {
              authorization: `Bearer ${_v6}`
            }, _v0)), _v0(_v0, _v81.TYPES.API_PULL_CLIP, _v81.API_APPS.DROPBOX_APP);
          },
          multiselect: !0,
          collapsedButton: !1,
          linkType: "direct",
          extensions: _v96
        }), _v157({
          target: "dropbox_option",
          copy: "Dropbox"
        }), _v1();
      }, [_v6, _v0, _v1, _v7?.xsrft]);
      return _v4 && !_v3 ? (0, _v7.jsx)(_v175, {
        leftIcon: (0, _v7.jsx)(_v173, {}),
        onClick: _v8,
        children: (0, _v17.translate)("Dropbox")
      }) : null;
    },
    _v179 = "https://www.googleapis.com/drive/v3/files/",
    _v180 = "https://www.googleapis.com/auth/drive.file",
    _v181 = "id,name,size,thumbnailLink",
    _v182 = ({
      fields: _v0 = _v181,
      onFilesSelect: _v1,
      scope: _v2 = _v180,
      url: _v3 = _v179,
      onClick: _v4
    }) => {
      let [_v5, _v6] = (0, _v166.useScript)("https://apis.google.com/js/api.js"),
        [_v7, _v8] = (0, _v166.useScript)("https://accounts.google.com/gsi/client"),
        {
          gdClientId: _v9,
          gdDeveloperKey: _v10
        } = (0, _v11.useContext)(_v84.PullUploadContext),
        _v11 = (0, _v11.useRef)(""),
        _v12 = (0, _v11.useRef)(void 0),
        _v13 = (0, _v11.useContext)(_v85.ViewerContext),
        _v14 = _v13?.locale || "en",
        _v15 = _v13?.isEnterpriseSite,
        _v16 = (_v0 = "") => {
          let _v1 = encodeURIComponent(window?.location?.origin + "/oauth/token/popup-callback"),
            _v2 = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${_v9}&scope=${_v2}&redirect_uri=https://integrations-redirect.vimeo.work/oauth_redirect_fragmented&state=${_v1}&response_type=token&include_granted_scopes=true&enable_granular_consent=true&prompt=${_v0}`;
          window.connectCallback = _v0 => {
            _v0.access_token && (_v11.current = _v0.access_token, _v19());
          }, window.open(_v2);
        },
        _v17 = window.gapi;
      (0, _v11.useEffect)(() => {
        _v17 && _v5 && !_v6 && _v17.load("picker", {});
      }, [_v17, _v5, _v6]), (0, _v11.useEffect)(() => {
        _v7 && !_v8 && window.google && (_v12.current = google?.accounts?.oauth2?.initTokenClient({
          client_id: _v9,
          scope: _v2
        }));
      }, [_v9, _v7, _v8, _v2]);
      let _v18 = _v0 => {
          _v0[google.picker.Response.ACTION] === google.picker.Action.PICKED && _v20(_v0[google.picker.Response.DOCUMENTS]);
        },
        _v19 = (0, _v11.useCallback)(() => {
          let _v0 = new google.picker.DocsView(google.picker.ViewId.DOCS_VIDEOS);
          _v0.setMode(google.picker.DocsViewMode.LIST), new google.picker.PickerBuilder().addView(_v0).enableFeature(google.picker.Feature.NAV_HIDDEN).enableFeature(google.picker.Feature.MULTISELECT_ENABLED).enableFeature(google.picker.Feature.SUPPORT_DRIVES).setOAuthToken(_v11.current).setOrigin(`${window.location.protocol}//${window.location.host}`).setLocale(_v14).setCallback(_v18).setDeveloperKey(_v10).setAppId(_v9).build().setVisible(!0);
        }, [_v9, _v10, _v14, _v18]),
        _v20 = _v0 => {
          Promise.all(_v0.map(_v0 => {
            let _v1 = {
              method: "GET",
              headers: {
                Authorization: `Bearer ${_v11.current}`
              }
            };
            return fetch(`${_v3}${_v0.id}?fields=${_v0}&supportsAllDrives=true`, _v1).then(_v0 => _v0.json());
          })).then(_v0 => _v21(_v0)).catch(_v0 => _v22(_v0));
        },
        _v21 = _v0 => {
          let _v1 = [],
            _v2 = _v0.map(_v0 => _v0.error ? (console.warn(_v0.error), _v1.push(_v0.error)) : {
              ..._v0,
              size: parseInt(_v0.size),
              link: `${_v3}${_v0.id}?alt=media`,
              headers: {
                authorization: `Bearer ${_v11.current}`
              }
            });
          if (_v1.length > 0) return Promise.reject(_v1);
          _v1(_v2, _v81.TYPES.API_PULL_CLIP, _v81.API_APPS.GOOGLE_DRIVE_APP);
        },
        _v22 = _v0 => {
          _v1(_v0.map(_v0 => ({
            ..._v0,
            size: _v0.sizeBytes,
            link: `${_v3}${_v0.id}?alt=media`,
            headers: {
              authorization: `Bearer ${_v11.current}`
            }
          })), _v81.TYPES.API_PULL_CLIP, _v81.API_APPS.GOOGLE_DRIVE_APP);
        };
      return window?.google?.picker && !_v8 ? (0, _v7.jsx)(_v175, {
        leftIcon: (0, _v7.jsx)(_v172, {}),
        onClick: () => {
          fetch("/partner-integration-event/send?integration_id=14&interaction_type=join", {
            method: "POST",
            body: JSON.stringify({
              token: _v13?.xsrft
            }),
            headers: {
              "X-Requested-With": "XMLHttpRequest",
              "Content-Type": "application/json"
            }
          });
          let _v0 = _v12.current;
          _v0 && (_v0.callback = async _v0 => {
            if (void 0 !== _v0.error) throw _v0;
            _v11.current = _v0.access_token, _v19();
          }, _v11.current ? _v15 ? _v16() : _v0.requestAccessToken({
            prompt: ""
          }) : _v15 ? _v16("consent") : _v0.requestAccessToken({
            prompt: "consent"
          }), _v157({
            target: "google_drive_option",
            copy: "Drive"
          }), _v4());
        },
        children: (0, _v17.translate)({
          singular: "Drive",
          dictionary: {
            "ja-JP": {
              singular: "ドライブ"
            },
            "ko-KR": {
              singular: "드라이브"
            }
          }
        })
      }) : null;
    },
    _v183 = _v15.default.img.withConfig({
      displayName: "WebexIcon__Logo",
      componentId: "sc-7cc0d25-0"
    })`
  margin-right: ${(0, _v50.rem)(14)};
`,
    _v184 = () => (0, _v7.jsx)(_v183, {
      width: "20",
      height: "18",
      alt: (0, _v17.translate)({
        singular: "webex logo",
        dictionary: {
          es: {
            singular: "logo de webex"
          },
          "de-DE": {
            singular: "webex-Logo"
          },
          "fr-FR": {
            singular: "logo webex"
          },
          "ja-JP": {
            singular: "webexロゴ"
          },
          "ko-KR": {
            singular: "webex 로고"
          },
          "pt-BR": {
            singular: "logotipo do webex"
          },
          "zh-CN": {
            singular: "Webex 徽标"
          }
        }
      }),
      src: "https://i.vimeocdn.com/custom_asset/a7c83a201590384a09318e71a60f9475"
    }),
    _v185 = ({
      className: _v0,
      folderId: _v1,
      targetUserId: _v2,
      onFileSelect: _v3,
      setIsBoxPickerActive: _v4
    }) => {
      let {
          upload: _v5
        } = (0, _v80.useUploader)(),
        _v6 = (0, _v11.useContext)(_v85.ViewerContext),
        _v7 = _v6?.isEnterpriseSite,
        {
          trackUploadThirdPartySourceClicked: _v8
        } = _v77(),
        {
          capabilities: _v9
        } = (0, _v69.useCapability)(["hasIntegrationCenter"]),
        _v10 = (0, _v165.useGetMeImportApp)({
          select: ["connected"],
          where: {
            appType: "zoom"
          }
        }),
        _v11 = (0, _v165.useGetMeImportApp)({
          select: ["connected"],
          where: {
            appType: "webex"
          }
        }),
        _v12 = _v10?.data?.connected,
        _v13 = _v11?.data?.connected,
        _v14 = (0, _v11.useCallback)((_v0, _v1, _v2) => {
          _v3?.(), _v5(_v0.map(_v0 => (_v0.target_user_id = _v2 ?? void 0, _v0.folder_id = _v1 ?? void 0, _v0)), {
            uploadType: _v1,
            apiApp: _v2
          });
        }, [_v3, _v5, _v2, _v1]),
        _v15 = (_v0, _v1, _v2) => {
          _v157({
            target: _v1,
            copy: _v2
          }), window.location.href = _v0;
        };
      return (0, _v7.jsxs)(_v48.Flex, {
        className: _v0,
        gap: (0, _v50.rem)(8),
        justifyContent: ["center", "center", _v7 ? "left" : "space-between"],
        flexWrap: "wrap",
        flexFlow: ["column", "column", "unset"],
        width: "100%",
        children: [(0, _v7.jsx)(_v178, {
          onClick: () => {
            _v8({
              uploadThirdPartySource: "dropbox"
            }), _v154({
              copy: "Dropbox",
              target: "dropbox_option",
              app_name: "dropbox"
            });
          },
          onFilesSelect: _v14
        }), (0, _v7.jsx)(_v182, {
          onClick: () => {
            _v8({
              uploadThirdPartySource: "google_drive"
            }), _v154({
              copy: "Drive",
              target: "google_drive_option",
              app_name: "drive"
            });
          },
          onFilesSelect: _v14
        }), !_v7 && (0, _v7.jsx)(_v177, {
          setIsBoxPickerActive: _v4,
          onClick: () => {
            _v8({
              uploadThirdPartySource: "box"
            }), _v154({
              copy: "Box",
              target: "box_option",
              app_name: "box"
            });
          },
          onFilesSelect: _v14
        }), (0, _v7.jsx)(_v175, {
          leftIcon: (0, _v7.jsx)(_v164.Zoom, {}),
          onClick: () => {
            _v8({
              uploadThirdPartySource: "zoom"
            }), _v154({
              copy: "Zoom",
              target: "zoom_option",
              app_name: "zoom"
            }), _v155("zoom"), _v15(_v9?.hasIntegrationCenter ? _v12 ? "/integrations-center/2e4622bd-d6f4-4011-a57a-3c64bc495f27/details/manage" : "/integrations-center/2e4622bd-d6f4-4011-a57a-3c64bc495f27/details" : "/integrations/zoom", "zoom_option", "Zoom");
          },
          children: (0, _v17.translate)({
            singular: "Zoom",
            dictionary: {
              "ja-JP": {
                singular: "ズーム"
              },
              "zh-CN": {
                singular: "缩放"
              }
            }
          })
        }), !_v7 && (0, _v7.jsx)(_v175, {
          leftIcon: (0, _v7.jsx)(_v184, {}),
          onClick: () => {
            _v8({
              uploadThirdPartySource: "webex"
            }), _v154({
              copy: "Webex",
              target: "webex_option",
              app_name: "webex"
            }), _v155("webex"), _v15(_v9?.hasIntegrationCenter ? _v13 ? "/integrations-center/ae19a00e-5bc7-4a71-8da8-144666e31e76/details/manage" : "/integrations-center/ae19a00e-5bc7-4a71-8da8-144666e31e76/details" : "/integrations/webex", "webex_option", "Webex");
          },
          children: (0, _v17.translate)("Webex")
        }), (0, _v7.jsx)(_v175, {
          onClick: () => {
            _v8({
              uploadThirdPartySource: "other_apps"
            }), _v15(_v9?.hasIntegrationCenter ? "/integrations-center" : "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/sections/12397317457169-Upload-and-video-settings", "other_apps_option", "Other Apps");
          },
          children: (0, _v17.translate)({
            singular: "Other apps",
            dictionary: {
              es: {
                singular: "Otras aplicaciones"
              },
              "de-DE": {
                singular: "Andere Apps"
              },
              "fr-FR": {
                singular: "Autres Apps"
              },
              "ja-JP": {
                singular: "他のアプリ"
              },
              "ko-KR": {
                singular: "다른 앱"
              },
              "pt-BR": {
                singular: "Outros aplicativos"
              },
              "zh-CN": {
                singular: "其他应用程序"
              }
            }
          })
        })]
      });
    };
  var _v186 = _v0.i(0),
    _v187 = _v0.i(0),
    _v188 = _v0.i(0),
    _v189 = _v0.i(0),
    _v190 = _v0.i(0),
    _v191 = _v0.i(0),
    _v192 = _v0.i(0),
    _v193 = _v0.i(0);
  let _v194 = {
      initial: {
        y: "135%"
      },
      animate: {
        y: "0"
      },
      exit: {
        y: "-135%"
      }
    },
    _v195 = ({
      children: _v0
    }) => (0, _v7.jsx)(_v193.motion.span, {
      style: {
        display: "inline-block",
        animationTimingFunction: "cubic-bezier(0.33, 0, 0.25, 1)"
      },
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants: _v194,
      transition: {
        type: "keyframes",
        duration: .35
      },
      children: _v0
    }),
    _v196 = {
      "screen-recording": (0, _v17.translate)({
        singular: "Record",
        dictionary: {
          es: {
            singular: "Grabar"
          },
          "de-DE": {
            singular: "Aufnehmen"
          },
          "fr-FR": {
            singular: "Enregistrer"
          },
          "ja-JP": {
            singular: "録画"
          },
          "ko-KR": {
            singular: "녹화"
          },
          "pt-BR": {
            singular: "Gravar"
          },
          "zh-CN": {
            singular: "录制"
          }
        }
      }),
      videos: (0, _v17.translate)({
        singular: "Upload",
        dictionary: {
          es: {
            singular: "Subir"
          },
          "de-DE": {
            singular: "Hochladen"
          },
          "fr-FR": {
            singular: "Importer"
          },
          "ja-JP": {
            singular: "アップロード"
          },
          "ko-KR": {
            singular: "업로드"
          },
          "pt-BR": {
            singular: "Carregar"
          },
          "zh-CN": {
            singular: "上传"
          }
        }
      }),
      "video-maker": (0, _v17.translate)({
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
      }),
      "live-event": (0, _v17.translate)({
        singular: "Event",
        dictionary: {
          es: {
            singular: "Evento"
          },
          "fr-FR": {
            singular: "Événement"
          },
          "ja-JP": {
            singular: "イベント"
          },
          "ko-KR": {
            singular: "이벤트"
          },
          "pt-BR": {
            singular: "Evento"
          },
          "zh-CN": {
            singular: "活动"
          }
        }
      })
    },
    _v197 = {
      "screen-recording": "Record",
      videos: "Upload",
      "video-maker": "Create",
      "live-event": "Event"
    },
    _v198 = () => {
      let {
          toggleDrawer: _v0
        } = _v44(),
        _v1 = (0, _v8.useRouter)(),
        _v2 = _v1.query.params?.[0] ?? "videos";
      return (0, _v7.jsxs)(_v199, {
        onClick: () => {
          (0, _v29.sendUploadMethodButtonTapEvent)({
            copy: _v197[_v2]
          }), _v0();
        },
        "aria-label": (0, _v17.translate)({
          singular: "Open upload options",
          dictionary: {
            es: {
              singular: "Abrir opciones de subida"
            },
            "de-DE": {
              singular: "Upload-Optionen öffnen"
            },
            "fr-FR": {
              singular: "Ouvrir les options de mise en ligne"
            },
            "ja-JP": {
              singular: "アップロードオプションを開く"
            },
            "ko-KR": {
              singular: "업로드 옵션 열기"
            },
            "pt-BR": {
              singular: "Abrir opções de carregar"
            },
            "zh-CN": {
              singular: "打开上传选项"
            }
          }
        }),
        children: [(0, _v7.jsx)(_v192.Header, {
          size: "4",
          element: "span",
          children: (0, _v7.jsx)(_v189.AnimatePresence, {
            initial: !1,
            mode: "wait",
            children: (0, _v7.jsx)(_v195, {
              children: _v196[_v2]
            }, _v2)
          })
        }), (0, _v7.jsx)(_v200, {
          children: (0, _v7.jsx)(_v190.ChevronDownSmall, {})
        })]
      });
    },
    _v199 = _v15.default.button.withConfig({
      displayName: "UploadOptionsFakeSelect__FakeSelectButton",
      componentId: "sc-fcd88e8d-0"
    })`
  background-color: ${_v24.core.color.background(500)};
  border: 1px solid ${(0, _v191.slate)(200)};
  max-width: ${(0, _v14.rem)(396)};
  width: 100%;
  height: ${(0, _v14.rem)(46)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline-start: ${(0, _v14.rem)(16)};
  padding-inline-end: ${(0, _v14.rem)(8)};
  border-radius: 4px;
  overflow: hidden;

  // Removing margin from Header component
  & > span {
    margin: unset;
  }
`,
    _v200 = _v15.default.span.withConfig({
      displayName: "UploadOptionsFakeSelect__Icon",
      componentId: "sc-fcd88e8d-1"
    })`
  display: inline-flex;
  width: ${(0, _v14.rem)(32)};
  height: ${(0, _v14.rem)(32)};
  justify-content: center;
  align-items: center;

  & svg {
    width: ${(0, _v14.rem)(20)};
    height: ${(0, _v14.rem)(20)};
  }

  & path {
    fill: ${_v24.core.color.text(0)};
  }
`,
    _v201 = ({
      setUploadType: _v0,
      showRecord: _v1 = !0,
      uploadType: _v2,
      showLiveEvent: _v3 = !0,
      showCreate: _v4 = !1
    }) => {
      let _v5 = [{
          label: (0, _v17.translate)({
            singular: "Upload",
            dictionary: {
              es: {
                singular: "Subir"
              },
              "de-DE": {
                singular: "Hochladen"
              },
              "fr-FR": {
                singular: "Importer"
              },
              "ja-JP": {
                singular: "アップロード"
              },
              "ko-KR": {
                singular: "업로드"
              },
              "pt-BR": {
                singular: "Carregar"
              },
              "zh-CN": {
                singular: "上传"
              }
            }
          }),
          type: _v97.UPLOAD
        }, {
          label: (0, _v17.translate)({
            singular: "Record",
            dictionary: {
              es: {
                singular: "Grabar"
              },
              "de-DE": {
                singular: "Aufnehmen"
              },
              "fr-FR": {
                singular: "Enregistrer"
              },
              "ja-JP": {
                singular: "録画"
              },
              "ko-KR": {
                singular: "녹화"
              },
              "pt-BR": {
                singular: "Gravar"
              },
              "zh-CN": {
                singular: "录制"
              }
            }
          }),
          type: _v97.RECORD
        }, {
          label: (0, _v17.translate)({
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
          }),
          type: _v97.CREATE
        }, {
          label: (0, _v17.translate)({
            singular: "Event",
            dictionary: {
              es: {
                singular: "Evento"
              },
              "fr-FR": {
                singular: "Événement"
              },
              "ja-JP": {
                singular: "イベント"
              },
              "ko-KR": {
                singular: "이벤트"
              },
              "pt-BR": {
                singular: "Evento"
              },
              "zh-CN": {
                singular: "活动"
              }
            }
          }),
          type: _v97.LIVE
        }].filter(_v0 => {
          switch (_v0.type) {
            case _v97.UPLOAD:
              return !0;
            case _v97.RECORD:
              return _v1;
            case _v97.CREATE:
              return _v4;
            case _v97.LIVE:
              return _v3;
          }
        }),
        _v6 = _v5.findIndex(_v0 => _v0.type === _v2),
        _v7;
      return (0, _v7.jsxs)(_v7.Fragment, {
        children: [(0, _v7.jsx)(_v48.Flex, {
          justifyContent: "center",
          width: "100%",
          display: {
            base: "flex",
            md: "none"
          },
          children: (0, _v7.jsx)(_v198, {})
        }), (0, _v7.jsx)(_v187.Tabs, {
          display: {
            base: "none",
            md: "block"
          },
          defaultIndex: _v6,
          variant: "default",
          minWidth: (0, _v50.rem)(576),
          "data-id": "video_types_menu",
          size: "md",
          children: (0, _v7.jsxs)(_v188.TabList, {
            borderRadius: _v7,
            children: [_v5.map(_v0 => (0, _v7.jsx)(_v186.Tab, {
              borderRadius: _v7,
              onClick: () => _v0(_v0.type),
              children: _v0.label
            }, _v0.type)), (0, _v7.jsx)(_v187.TabIndicator, {})]
          })
        })]
      });
    },
    _v202 = (0, _v86.default)(async () => {
      let {
        ThreeSixtyModal: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v203 = ({
      privacy: _v0,
      switchTeam: _v1,
      uploadPageConfig: _v2,
      uploadRoute: _v3,
      contentRating: _v4,
      capabilities: _v5,
      isLoading: _v6,
      upsellModalType: _v7,
      error: _v8,
      setisPrivateToMeFolderSelected: _v9,
      teamOwnersId: _v10,
      onSidePanelClose: _v11,
      isSidePanelOpen: _v12,
      isTranslatorOnboarding: _v13
    }) => {
      let _v14 = (0, _v8.useRouter)(),
        _v15 = (0, _v11.useContext)(_v85.ViewerContext),
        _v16 = _v10 || _v15?.user?.id,
        [_v17, _v18] = (0, _v11.useState)(!1),
        [_v19, _v20] = (0, _v11.useState)(),
        [_v21, _v22] = (0, _v11.useState)(!1),
        [_v23, _v24] = (0, _v11.useState)(null),
        _v25 = _v23 ? (0, _v91.getProjectId)(_v23) : null,
        {
          capabilities: _v26
        } = (0, _v69.useCapability)(["hasCreation"]),
        {
          capabilities: _v27,
          loading: _v28,
          error: _v29
        } = (0, _v69.useCapability)(["canCreateLiveEvents"], _v10),
        _v30 = (0, _v90.useToast)(),
        [_v31, _v32] = (0, _v11.useState)(!1),
        {
          trackUploadTabSwitched: _v33
        } = _v77(),
        _v34 = !!_v5?.hasCreation || !!_v26?.hasCreation,
        _v35 = _v27.canCreateLiveEvents && !_v28 && !_v29,
        _v36 = (0, _v70.useIsMobile)(),
        _v37 = _v100[_v3],
        _v38 = _v2.owner ? _v2.owner.id : null;
      (0, _v11.useEffect)(() => {
        _v8 && _v8.length > 0 && _v22(!0);
      }, [_v8, _v22]), (0, _v11.useEffect)(() => {
        _v149.initTeamUser(_v15?.teamUser);
      }, [_v15?.teamUser]), (0, _v92.useOttRedirect)({
        toast: _v30,
        config: {
          message: (0, _v17.translate)({
            singular: "Streaming site videos are now uploaded on Vimeo",
            dictionary: {
              es: {
                singular: "Los videos del sitio de transmisión ahora se suben a Vimeo"
              },
              "de-DE": {
                singular: "Videos der Streaming-Website werden jetzt auf Vimeo hochgeladen"
              },
              "fr-FR": {
                singular: "Les vidéos du site de streaming sont désormais mises en ligne sur Vimeo"
              },
              "ja-JP": {
                singular: "ストリーミングサイトの動画がVimeoにアップロードされるようになりました"
              },
              "ko-KR": {
                singular: "스트리밍 사이트 동영상은 이제 Vimeo에 업로드됩니다."
              },
              "pt-BR": {
                singular: "Os vídeos do site de transmissão agora são carregados no Vimeo"
              },
              "zh-CN": {
                singular: "流媒体网站的视频现已上传至 Vimeo"
              }
            }
          })
        }
      });
      let {
          isDisabled: _v39
        } = (0, _v93.useGetEditEmbedPrivacyDisabled)(),
        _v40 = (0, _v11.useMemo)(() => function ({
          privacy: _v0,
          threeSixtyType: _v1,
          contentRating: _v2,
          download: _v3,
          canEditEmbedPrivacy: _v4 = !0
        }) {
          let _v5 = _v0?.embedDomains?.map(_v0 => _v0.domain) ?? [];
          return {
            password: _v0?.password,
            content_rating: _v2,
            privacy: {
              view: function (_v0) {
                if (_v0 && "string" == typeof _v0) return _v108.includes(_v0) ? _v0 : void 0;
              }(_v0?.view),
              embed: _v4 ? _v0?.embed ?? "private" : void 0,
              comments: _v0?.comments,
              add: _v0?.add,
              download: _v3
            },
            spatial: _v1 ? {
              stereo_format: _v1,
              projection: "equirectangular"
            } : {},
            embed_domains: _v4 && _v0?.embed === "whitelist" ? _v5.length <= 0 ? void 0 : _v5 : void 0
          };
        }({
          privacy: _v0,
          threeSixtyType: _v19,
          contentRating: _v4,
          download: _v5?.canAllowDownloads ? _v0?.download : void 0,
          canEditEmbedPrivacy: !_v39
        }), [_v5?.canAllowDownloads, _v4, _v0, _v19, _v39]);
      return (0, _v7.jsxs)(_v7.Fragment, {
        children: [_v6 ? (0, _v7.jsx)(_v49.Skeleton, {
          w: {
            base: "360px",
            sm: "576px"
          },
          h: "50px",
          borderRadius: (0, _v50.rem)(32)
        }) : (0, _v7.jsx)(_v201, {
          setUploadType: _v0 => {
            let _v1 = `${_v95[_v0] || _v95.UPLOAD}`;
            _v33({
              uploadNewTab: _v99[_v0] ?? "upload"
            }), _v14.push(_v1, void 0, {
              shallow: !0
            });
          },
          uploadType: _v37,
          showCreate: _v34,
          showLiveEvent: _v35
        }), (0, _v7.jsx)(_v163, {
          uploadClipProperties: _v40,
          switchFolder: _v24,
          selectedFolder: _v23,
          selectedFolderId: _v25,
          switchTeam: _v0 => {
            _v12 && _v11?.(), _v1(_v0);
          },
          uploadType: _v37,
          owner: _v2.owner,
          teamConfigs: _v2.teamConfigs,
          setisPrivateToMeFolderSelected: _v9,
          initLoadingAnimation: _v21,
          isBoxPickerActive: _v31,
          isTranslatorOnboarding: _v13
        }, `team-switcher-dropzone-${_v7}-${_v21}`), (0, _v7.jsxs)(_v107, {
          uploadType: _v37,
          children: [(0, _v7.jsx)(_v88.Paragraph, {
            size: "xs",
            children: (0, _v17.translate)({
              singular: "By submitting a video, you agree to our {TERMS}Terms of Service{/TERMS} and {GUIDE}Community Guidelines{/GUIDE}.",
              replacements: {
                TERMS: _v0 => (0, _v7.jsx)(_v89.Link, {
                  href: "/terms",
                  target: "_blank",
                  variant: "inline-primary",
                  fontSize: (0, _v50.rem)(12),
                  children: _v0
                }),
                GUIDE: _v0 => (0, _v7.jsx)(_v89.Link, {
                  href: "/help/guidelines",
                  target: "_blank",
                  variant: "inline-primary",
                  fontSize: (0, _v50.rem)(12),
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "Al enviar un video, acepta nuestros {TERMS}Términos de servicio{/TERMS} y las {GUIDE}Directrices de la comunidad{/GUIDE}."
                },
                "de-DE": {
                  singular: "Indem Sie ein Video einreichen, stimmen Sie unseren {TERMS}Nutzungsbedingungen{/TERMS} und {GUIDE}Community-Richtlinien{/GUIDE} zu."
                },
                "fr-FR": {
                  singular: "En soumettant une vidéo, vous acceptez nos {TERMS}Conditions d'utilisation{/TERMS} et les {GUIDE}Règles de la communauté{/GUIDE}."
                },
                "ja-JP": {
                  singular: "動画を送信することにより、{TERMS}利用規約{/TERMS}および{GUIDE}コミュニティガイドライン{/GUIDE}に同意したものとみなされます。"
                },
                "ko-KR": {
                  singular: "동영상을 제출하면 당사 {TERMS}서비스 약관{/TERMS} 및 {GUIDE}커뮤니티 가이드라인{/GUIDE}에 동의하는 것입니다."
                },
                "pt-BR": {
                  singular: "Ao enviar um vídeo, você concorda com nossos {TERMS}Termos de Serviço{/TERMS} e {GUIDE}Regras da Comunidade{/GUIDE}."
                },
                "zh-CN": {
                  singular: "提交视频，即表示您同意我们的 {TERMS}服务条款{/TERMS} 和 {GUIDE}社区准则{/GUIDE}。"
                }
              }
            })
          }), !_v36 && (0, _v7.jsxs)(_v7.Fragment, {
            children: [(0, _v7.jsx)(_v87.Button, {
              variant: "tertiary",
              size: "xs",
              onClick: () => _v18(!0),
              children: (0, _v17.translate)({
                singular: "360 video settings",
                dictionary: {
                  es: {
                    singular: "360 ajustes de video"
                  },
                  "de-DE": {
                    singular: "360°-Video-Einstellungen"
                  },
                  "fr-FR": {
                    singular: "Paramètres des vidéos à 360°"
                  },
                  "ja-JP": {
                    singular: "360度動画の設定"
                  },
                  "ko-KR": {
                    singular: "360 동영상 설정"
                  },
                  "pt-BR": {
                    singular: "Configurações de vídeo 360"
                  },
                  "zh-CN": {
                    singular: "360 视频设置"
                  }
                }
              })
            }), (0, _v7.jsx)(_v202, {
              isOpen: _v17,
              onClose: () => _v18(!1),
              threeSixtyType: _v19,
              set360SourceType: _v20
            })]
          })]
        }), _v37 === _v97.UPLOAD && (0, _v7.jsxs)(_v105, {
          "data-id": "other_ways_to_upload",
          children: [(0, _v7.jsxs)(_v103, {
            children: [" ", (0, _v17.translate)({
              singular: "Other ways to upload:",
              dictionary: {
                es: {
                  singular: "Otras formas de subir sus videos:"
                },
                "de-DE": {
                  singular: "Andere Methoden zum Hochladen:"
                },
                "fr-FR": {
                  singular: "Autres options de mise en ligne :"
                },
                "ja-JP": {
                  singular: "その他のアップロード方法："
                },
                "ko-KR": {
                  singular: "다른 업로드 방법:"
                },
                "pt-BR": {
                  singular: "Outras formas de carregar:"
                },
                "zh-CN": {
                  singular: "其他上传方式："
                }
              }
            }), " "]
          }), (0, _v7.jsx)(_v185, {
            className: "upload-options",
            folderId: _v25 ?? void 0,
            targetUserId: _v38 ?? void 0,
            onFileSelect: () => _v22(!0),
            setIsBoxPickerActive: _v32
          })]
        }), _v15 && (0, _v7.jsx)(_v94.EssentialFooter, {
          enableQuotaMenu: _v10 === _v16 && _v15?.user?.uploadQuota?.restricted == null,
          teamOwnersId: _v10,
          ..._v15
        })]
      });
    };
  var _v204 = _v0.i(0),
    _v205 = _v0.i(0),
    _v206 = _v0.i(0),
    _v207 = _v0.i(0),
    _v208 = _v0.i(0),
    _v209 = _v0.i(0),
    _v210 = _v0.i(0),
    _v211 = _v0.i(0),
    _v212 = _v0.i(0),
    _v213 = _v0.i(0),
    _v214 = _v0.i(0),
    _v215 = _v0.i(0),
    _v216 = _v0.i(0),
    _v217 = _v0.i(0),
    _v218 = _v0.i(0),
    _v219 = _v0.i(0),
    _v220 = _v0.i(0),
    _v221 = _v0.i(0),
    _v222 = _v0.i(0),
    _v223 = _v0.i(0),
    _v224 = _v0.i(0),
    _v225 = _v0.i(0),
    _v226 = _v0.i(0),
    _v227 = _v0.i(0),
    _v228 = _v0.i(0),
    _v229 = _v0.i(0),
    _v230 = _v0.i(0),
    _v231 = _v0.i(0),
    _v232 = _v0.i(0);
  let _v233 = (_v0, _v1, _v2 = {}, _v3 = _v234) => ({
      eventName: _v0,
      version: _v1,
      fields: _v2,
      defaultEventFields: _v3
    }),
    _v234 = {
      ..._v231.nullVideoContextData,
      ..._v231.nullTeamContext,
      ..._v231.nullUploadContextData
    },
    _v235 = {
      ..._v234,
      location: null
    },
    _v236 = _v0 => _v233("workflow.change_link_privacy", 2, {
      ..._v0,
      is_video_password_protected: "password" === _v0.video_privacy
    }, _v235);
  var _v237 = _v0.i(0),
    _v238 = _v0.i(0),
    _v239 = _v0.i(0),
    _v240 = ((_v6 = {}).Safe = "safe", _v6.Mature = "mature", _v6.Unrated = "unrated", _v6.Ads = "advertisement", _v6);
  let _v241 = {
      violence: (0, _v17.translate)({
        singular: "Violence",
        dictionary: {
          es: {
            singular: "Violencia"
          },
          "de-DE": {
            singular: "Gewalt"
          },
          "ja-JP": {
            singular: "暴力"
          },
          "ko-KR": {
            singular: "폭력"
          },
          "pt-BR": {
            singular: "Violência"
          },
          "zh-CN": {
            singular: "暴力"
          }
        }
      }),
      language: (0, _v17.translate)({
        singular: "Profanity",
        dictionary: {
          es: {
            singular: "Lenguaje vulgar"
          },
          "de-DE": {
            singular: "Vulgäre Ausdrucksweise"
          },
          "fr-FR": {
            singular: "Contenu à caractère injurieux"
          },
          "ja-JP": {
            singular: "冒涜"
          },
          "ko-KR": {
            singular: "욕설"
          },
          "pt-BR": {
            singular: "Linguagem imprópria"
          },
          "zh-CN": {
            singular: "粗言秽语"
          }
        }
      }),
      nudity: (0, _v17.translate)({
        singular: "Nudity",
        dictionary: {
          es: {
            singular: "Desnudez"
          },
          "de-DE": {
            singular: "Nacktheit"
          },
          "fr-FR": {
            singular: "Nudité"
          },
          "ja-JP": {
            singular: "ヌード"
          },
          "ko-KR": {
            singular: "나체"
          },
          "pt-BR": {
            singular: "Nudez"
          },
          "zh-CN": {
            singular: "裸露"
          }
        }
      }),
      drugs: (0, _v17.translate)({
        singular: "Drug or alcohol use",
        dictionary: {
          es: {
            singular: "Consumo de drogas o alcohol"
          },
          "de-DE": {
            singular: "Drogen- oder Alkoholkonsum"
          },
          "fr-FR": {
            singular: "Consommation de drogues ou d'alcool"
          },
          "ja-JP": {
            singular: "ドラッグ、アルコールの使用"
          },
          "ko-KR": {
            singular: "약물 복용 또는 음주"
          },
          "pt-BR": {
            singular: "Uso de drogas ou álcool"
          },
          "zh-CN": {
            singular: "吸毒或酗酒"
          }
        }
      }),
      safe: (0, _v17.translate)({
        singular: "All audiences",
        dictionary: {
          es: {
            singular: "Para todos los públicos"
          },
          "de-DE": {
            singular: "Alle Zuschauergruppen"
          },
          "fr-FR": {
            singular: "Tout public"
          },
          "ja-JP": {
            singular: "すべての視聴者"
          },
          "ko-KR": {
            singular: "모든 시청자"
          },
          "pt-BR": {
            singular: "Para todas as idades"
          },
          "zh-CN": {
            singular: "所有观众"
          }
        }
      }),
      mature: (0, _v17.translate)({
        singular: "Mature",
        dictionary: {
          es: {
            singular: "Para adultos"
          },
          "de-DE": {
            singular: "Nicht jugendfrei"
          },
          "fr-FR": {
            singular: "Adulte"
          },
          "ja-JP": {
            singular: "成人向け"
          },
          "ko-KR": {
            singular: "성인"
          },
          "pt-BR": {
            singular: "Adulto"
          },
          "zh-CN": {
            singular: "成人"
          }
        }
      }),
      unrated: (0, _v17.translate)({
        singular: "Select rating",
        dictionary: {
          es: {
            singular: "Seleccionar clasificación"
          },
          "de-DE": {
            singular: "Bewertung auswählen"
          },
          "fr-FR": {
            singular: "Sélectionner la classification"
          },
          "ja-JP": {
            singular: "レーティングを選択"
          },
          "ko-KR": {
            singular: "등급 선택"
          },
          "pt-BR": {
            singular: "Selecionar classificação"
          },
          "zh-CN": {
            singular: "选择分级"
          }
        }
      })
    },
    _v242 = {
      contentRatings: _v240.Unrated,
      generalRating: _v240.Unrated,
      matureCheckboxes: {
        drugs: !1,
        violence: !1,
        nudity: !1,
        language: !1
      },
      containsAds: !1
    },
    _v243 = (_v0, _v1) => {
      switch (_v1.type) {
        case "HYDRATE":
          return _v1.payload;
        case "CHANGE_CONTENT_RATING":
          return {
            ..._v0,
            contentRatings: _v1.payload
          };
        case "CHANGE_GENERAL_RATING":
          let _v0 = {
              ..._v0.matureCheckboxes
            },
            _v1 = [..._v0.contentRatings];
          return _v1.payload === _v240.Mature && (_v1 = Object.keys(_v0 = {
            drugs: !0,
            violence: !0,
            language: !0,
            nudity: !0
          })), _v1.payload !== _v240.Safe || _v1.includes(_v240.Safe) || (_v1 = [_v240.Safe]), _v0.containsAds && _v1.push(_v240.Ads), {
            ..._v0,
            generalRating: _v1.payload,
            matureCheckboxes: _v0,
            contentRatings: _v1
          };
        case "CHANGE_MATURE_CHECKBOXES":
          return {
            ..._v0,
            matureCheckboxes: _v1.payload
          };
        case "TOGGLE_MATURE_RATING":
          let _v2 = _v0.matureCheckboxes[_v1.payload],
            _v3 = _v0.generalRating,
            _v4 = {
              ..._v0.matureCheckboxes,
              [_v1.payload]: !_v2
            },
            _v5 = Object.keys(_v4).filter(_v0 => _v4[_v0]),
            _v6 = _v5.length ? _v5 : [_v240.Safe];
          return _v5.length || (_v3 = _v240.Safe), _v0.containsAds && _v6.push(_v240.Ads), {
            ..._v0,
            matureCheckboxes: _v4,
            contentRatings: _v6,
            generalRating: _v3
          };
        case "TOGGLE_CONTAINS_ADS":
          let _v7 = [..._v0.contentRatings],
            _v8 = !_v0.containsAds;
          return _v8 ? _v7.push(_v240.Ads) : _v7 = _v7.filter(_v0 => _v0 !== _v240.Ads), {
            ..._v0,
            containsAds: _v8,
            contentRatings: _v7
          };
        default:
          return _v0;
      }
    };
  var _v244 = _v0.i(0);
  let _v245 = [{
      value: "safe",
      label: _v241.safe
    }, {
      value: "mature",
      label: _v241.mature
    }],
    _v246 = ({
      onRatingChange: _v0,
      isRatingModlocked: _v1,
      selectedGeneralRating: _v2
    }) => (0, _v7.jsx)(_v244.Select, {
      placeholder: (0, _v17.translate)({
        singular: "Select a rating...",
        dictionary: {
          es: {
            singular: "Seleccione una calificación..."
          },
          "de-DE": {
            singular: "Wählen Sie eine Bewertung aus ..."
          },
          "fr-FR": {
            singular: "Sélectionner une classification..."
          },
          "ja-JP": {
            singular: "レーティングを選択してください..."
          },
          "ko-KR": {
            singular: "등급 선택..."
          },
          "pt-BR": {
            singular: "Selecione uma classificação..."
          },
          "zh-CN": {
            singular: "选择分级..."
          }
        }
      }),
      items: _v245,
      value: [_v2 ?? ""],
      disabled: _v1,
      onValueChange: _v0 => {
        _v0(_v0.value[0]);
      },
      variant: "outlined",
      children: _v0 => (0, _v7.jsx)(_v244.SelectItem, {
        display: "flex",
        "data-testid": `${_v0.value}-option`,
        children: (0, _v7.jsx)(_v244.SelectItemText, {
          children: _v0.label
        })
      })
    }),
    _v247 = "violence",
    _v248 = "language",
    _v249 = "nudity",
    _v250 = "drugs",
    _v251 = [_v248, _v250, _v247, _v249],
    _v252 = ["unrated"],
    _v253 = ({
      video: _v0,
      updateContentRating: _v1
    }) => {
      let _v2 = _v0?.id,
        _v3 = _v0?.contentRating ?? _v252,
        _v4 = _v0?.ratingModLocked ?? !1,
        [_v5, _v6] = (0, _v11.useState)(!1),
        _v7 = (0, _v11.useRef)(null),
        _v8 = (0, _v138.useAnalyticsEvent)(),
        _v9 = (0, _v11.useRef)(!1),
        _v10 = () => ({
          ..._v242,
          contentRatings: _v3,
          containsAds: _v3.includes(_v240.Ads),
          generalRating: _v3.includes(_v240.Safe) ? _v240.Safe : _v3.includes(_v240.Unrated) ? _v240.Unrated : _v240.Mature,
          matureCheckboxes: {
            drugs: _v3.includes(_v250),
            violence: _v3.includes(_v247),
            language: _v3.includes(_v248),
            nudity: _v3.includes(_v249)
          }
        }),
        _v11 = _v10(),
        [_v12, _v13] = (0, _v11.useReducer)(_v243, _v11);
      return (0, _v11.useEffect)(() => {
        _v2 || _v13({
          type: "HYDRATE",
          payload: _v10()
        });
      }, [_v3]), (0, _v239.default)([_v7], () => {
        _v6(!1);
      }, null, [_v5]), (0, _v11.useEffect)(() => {
        _v9.current && _v1?.(_v12.contentRatings), _v9.current = !0;
      }, [_v12.contentRatings]), (0, _v7.jsxs)(_v208.VStack, {
        alignItems: "stretch",
        children: [(0, _v7.jsxs)(_v48.Flex, {
          alignItems: "center",
          gap: "sm",
          children: [(0, _v7.jsx)(_v218.Text, {
            variant: "heading-xs",
            color: "text-primary",
            children: (0, _v17.translate)({
              singular: "Content rating",
              dictionary: {
                es: {
                  singular: "Calificación del contenido"
                },
                "de-DE": {
                  singular: "Inhaltsbewertung"
                },
                "fr-FR": {
                  singular: "Classification des contenus"
                },
                "ja-JP": {
                  singular: "コンテンツ レーティング"
                },
                "ko-KR": {
                  singular: "콘텐츠 등급"
                },
                "pt-BR": {
                  singular: "Classificação de conteúdo"
                },
                "zh-CN": {
                  singular: "内容分级"
                }
              }
            })
          }), (0, _v7.jsx)(_v211.Tooltip, {
            label: (0, _v17.translate)({
              singular: "Labeling the contents of your video keeps Vimeo safe and accessible to as many audiences as possible",
              dictionary: {
                es: {
                  singular: "Etiquetar el contenido de su video hace que Vimeo sea seguro y accesible para la mayor cantidad de audiencia posible"
                },
                "de-DE": {
                  singular: "Die Kennzeichnung der Inhalte Ihres Videos sorgt dafür, dass Vimeo sicher und für möglichst viele Zielgruppen zugänglich ist."
                },
                "fr-FR": {
                  singular: "L'étiquetage du contenu de votre vidéo contribue à assurer la sécurité de Vimeo et à le rendre accessible au plus grand nombre de publics possibles"
                },
                "ja-JP": {
                  singular: "動画に含まれるコンテンツにラベル付けすると、Vimeoに安全にアクセス可能なオーディエンス数を最大化できます"
                },
                "ko-KR": {
                  singular: "동영상 콘텐츠에 라벨을 추가하면 최대한 많은 시청자가 Vimeo를 안전하게 이용할 수 있습니다."
                },
                "pt-BR": {
                  singular: "O rótulo com o conteúdo do seu vídeo mantém o Vimeo seguro e acessível para o maior público possível"
                },
                "zh-CN": {
                  singular: "给您的视频内容贴上标签有助于保证 Vimeo 的安全，让尽可能多的观众可以访问"
                }
              }
            }),
            placement: "top",
            maxWidth: (0, _v50.rem)(240),
            children: (0, _v7.jsx)(_v48.Flex, {
              children: (0, _v7.jsx)(_v219.InfoCircle, {
                boxSize: "2xs"
              })
            })
          })]
        }), _v12.generalRating === _v240.Unrated ? (0, _v7.jsx)(_v212.Alert, {
          status: "info",
          children: (0, _v7.jsx)(_v213.AlertDescription, {
            children: (0, _v7.jsx)(_v88.Paragraph, {
              size: "md",
              children: (0, _v17.translate)({
                singular: "Videos without a content rating can't be watched by some viewers. {LINK}Learn more{/LINK}",
                replacements: {
                  LINK: _v0 => (0, _v7.jsx)(_v89.Link, {
                    target: "_blank",
                    href: "https://vimeo.zendesk.com/hc/en-us/articles/224818087-Content-ratings",
                    fontSize: 14,
                    textDecoration: "underline",
                    children: _v0
                  }, "rating-help-message")
                },
                dictionary: {
                  es: {
                    singular: "Algunos espectadores no pueden ver los videos sin calificación del contenido. {LINK}Conocer más{/LINK}"
                  },
                  "de-DE": {
                    singular: "Videos ohne Inhaltsbewertung können von einigen Zuschauern nicht angesehen werden. {LINK}Mehr erfahren{/LINK}"
                  },
                  "fr-FR": {
                    singular: "Les vidéos sans classification de contenu ne peuvent pas être visionnées par certains spectateurs. {LINK}En savoir plus{/LINK}"
                  },
                  "ja-JP": {
                    singular: "コンテンツレーティングのない動画は、一部の視聴者にはご覧いただけません。{LINK}詳細はこちら{/LINK}"
                  },
                  "ko-KR": {
                    singular: "일부 시청자는 콘텐츠 등급이 없는 동영상을 시청할 수 없습니다. {LINK}자세히 보기{/LINK}"
                  },
                  "pt-BR": {
                    singular: "Alguns espectadores não podem assistir a vídeos sem classificação de conteúdo. {LINK}Saiba mais{/LINK}"
                  },
                  "zh-CN": {
                    singular: "有些观众无法观看内容未分级的视频。{LINK}了解更多{/LINK}"
                  }
                }
              })
            })
          })
        }) : null, (0, _v7.jsx)(_v246, {
          onRatingChange: _v0 => {
            _v13({
              type: "CHANGE_GENERAL_RATING",
              payload: _v0
            }), _v6(!1), _v8(_v233("vimeo.change_content_rating", 2, {
              location: "privacy drawer",
              ...{
                rating: _v0.toString()
              }
            }));
          },
          isRatingModlocked: _v4,
          selectedGeneralRating: _v12.generalRating
        }), _v4 && (0, _v7.jsx)(_v212.Alert, {
          status: "info",
          children: (0, _v7.jsx)(_v213.AlertDescription, {
            children: (0, _v7.jsx)(_v88.Paragraph, {
              size: "md",
              children: (0, _v17.translate)({
                singular: "The moderator has locked this content rating, and it cannot be changed.",
                dictionary: {
                  es: {
                    singular: "El moderador ha asegurado esta calificación del contenido y no se puede modificar."
                  },
                  "de-DE": {
                    singular: "Der Moderator hat diese Inhaltsbewertung endgültig festgelegt und sie kann nicht bearbeitet werden."
                  },
                  "fr-FR": {
                    singular: "Le modérateur a verrouillé la classification de ce contenu, et celle-ci ne peut pas être modifiée."
                  },
                  "ja-JP": {
                    singular: "モデレータがこのコンテンツ レーティングをロックしたので、変更できません。"
                  },
                  "ko-KR": {
                    singular: "관리자가 이 콘텐츠 등급을 잠궈 변경할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "O moderador bloqueou esta classificação de conteúdo e ela não pode ser alterada."
                  },
                  "zh-CN": {
                    singular: "版主已锁定此内容分级，无法更改。"
                  }
                }
              })
            })
          })
        }), _v12.generalRating === _v240.Mature && (0, _v7.jsxs)(_v7.Fragment, {
          children: [(0, _v7.jsxs)(_v112.Box, {
            children: [(0, _v7.jsx)(_v132.Header, {
              size: "xs",
              id: "mature-selection-text",
              display: "inline-block",
              mb: (0, _v50.rem)(8),
              mt: (0, _v50.rem)(6),
              children: (0, _v17.translate)({
                singular: "Select one or more of the following:",
                dictionary: {
                  es: {
                    singular: "Selecciona una o más de las siguientes:"
                  },
                  "de-DE": {
                    singular: "Wählen Sie eine oder mehrere der folgenden Optionen:"
                  },
                  "fr-FR": {
                    singular: "Sélectionnez une ou plusieurs des options suivantes :"
                  },
                  "ja-JP": {
                    singular: "以下のいずれか1つ以上を選択してください："
                  },
                  "ko-KR": {
                    singular: "다음 항목 중 하나 이상을 선택하세요:"
                  },
                  "pt-BR": {
                    singular: "Selecione uma ou mais das seguintes opções:"
                  },
                  "zh-CN": {
                    singular: "选择以下一项或多项："
                  }
                }
              })
            }), (0, _v7.jsx)(_v48.Flex, {
              direction: "column",
              gap: "2",
              mt: (0, _v50.rem)(8),
              children: _v251.map(_v0 => (0, _v7.jsx)(_v7.Fragment, {
                children: (0, _v7.jsx)(_v237.Checkbox, {
                  isDisabled: _v4,
                  onChange: () => {
                    _v13({
                      type: "TOGGLE_MATURE_RATING",
                      payload: _v0
                    });
                  },
                  isChecked: _v12.matureCheckboxes[_v0],
                  name: _v0,
                  id: `${_v0}-checkbox`,
                  value: _v0,
                  children: _v241[_v0]
                }, `${_v0}-checkbox`)
              }))
            })]
          }), (0, _v7.jsx)(_v238.Divider, {
            borderColor: "stroke",
            _dark: {
              borderColor: "stroke"
            }
          })]
        }), (0, _v7.jsx)(_v112.Box, {
          children: (0, _v7.jsx)(_v237.Checkbox, {
            disabled: _v4,
            name: "ads",
            "data-testid": "ads-checkbox",
            value: "ads",
            isChecked: _v12.containsAds,
            onChange: _v0 => {
              _v8(_v233("vimeo.change_content_notice", 2, {
                location: "privacy drawer",
                ...{
                  contains_ad: _v0.target.checked
                }
              })), _v13({
                type: "TOGGLE_CONTAINS_ADS"
              });
            },
            children: (0, _v17.translate)({
              singular: "Contains advertisement",
              dictionary: {
                es: {
                  singular: "Contiene publicidad"
                },
                "de-DE": {
                  singular: "Enthält Werbung"
                },
                "fr-FR": {
                  singular: "Contient une publicité"
                },
                "ja-JP": {
                  singular: "広告が含まれています"
                },
                "ko-KR": {
                  singular: "광고 포함"
                },
                "pt-BR": {
                  singular: "Contém anúncios"
                },
                "zh-CN": {
                  singular: "包含广告"
                }
              }
            })
          })
        })]
      });
    };
  var _v254 = _v0.i(0),
    _v255 = _v0.i(0),
    _v256 = _v0.i(0),
    _v257 = _v0.i(0),
    _v258 = _v0.i(0),
    _v259 = _v0.i(0);
  let _v260 = ({
      domain: _v0,
      removeDomain: _v1,
      canBeRemoved: _v2 = !0
    }) => (0, _v7.jsxs)(_v259.Tag, {
      size: "sm",
      children: [(0, _v7.jsxs)(_v259.TagLabel, {
        children: [" ", _v0.slice(0, 56)]
      }), _v2 && (0, _v7.jsx)(_v259.TagCloseButton, {
        onClick: _v1
      })]
    }),
    _v261 = /^(http(s)?\:)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(localhost|(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?))(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
    _v262 = _v0 => _v0.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").replace(/\s/g, "").split("/")[0].toLowerCase(),
    _v263 = ({
      onPrivacyChange: _v0,
      initialPrivacy: _v1,
      onDeletingLastDomain: _v2,
      onEmbedDomainsChange: _v3,
      initialDomains: _v4,
      isDisabled: _v5 = !1
    }) => {
      let [_v6, _v7] = (0, _v11.useState)(""),
        [_v8, _v9] = (0, _v11.useState)(!0),
        [_v10, _v11] = (0, _v11.useState)(null),
        _v12 = _v1 === _v258.EmbedPrivacy.Whitelist,
        _v13 = _v4 ?? [],
        _v14 = _v13.map(_v0 => _v0.domain),
        _v15 = _v13.length > 0,
        _v16 = _v0 => {
          _v9(_v0);
        },
        _v17 = async () => {
          _v10 && (await _v19(_v10), _v11(null), _v2(null));
        },
        _v18 = async _v0 => {
          if (!(_v0 => {
            if (_v0.trim().length < 1) return !1;
            if (!(_v0 => {
              let _v1;
              if (!_v0) return;
              let _v2 = ((_v1 = _v0.trim()) && !_v1.match(/^(http(s)?\:)?\/\//) && (_v1 = `https://${_v1}`), _v1);
              return _v2.length < 250 && _v261.test(_v2);
            })(_v0)) return _v16(!1), !1;
            let _v1 = _v262(_v0);
            return !(_v14.indexOf(_v1) > -1);
          })(_v0)) return;
          _v8 || _v16(!0);
          let _v1 = _v262(_v0);
          _v7(""), _v3?.([..._v13, {
            domain: _v1,
            allowHd: !1,
            uri: _v1
          }]), await _v17(), _v12 || (await _v0("whitelist"));
        },
        _v19 = async (_v0, _v1) => {
          if (_v3?.(_v13.filter(_v0 => _v0.domain !== _v0.domain)), _v13.length > 1 || _v1) ;else _v11(_v0), _v2(_v0);
        };
      return (0, _v11.useEffect)(() => {
        _v15 && !_v12 && _v0("whitelist");
      }, [_v15, _v0, _v12]), (0, _v7.jsxs)(_v7.Fragment, {
        children: [(0, _v7.jsx)(_v218.Text, {
          variant: "heading-xs",
          color: "text-primary",
          children: (0, _v17.translate)({
            singular: "Allowed domains",
            dictionary: {
              es: {
                singular: "Dominios permitidos"
              },
              "de-DE": {
                singular: "Zulässige Domains"
              },
              "fr-FR": {
                singular: "Domaines autorisés"
              },
              "ja-JP": {
                singular: "許可ドメイン"
              },
              "ko-KR": {
                singular: "허용되는 도메인"
              },
              "pt-BR": {
                singular: "Domínios permitidos"
              },
              "zh-CN": {
                singular: "允许的域名"
              }
            }
          })
        }), (0, _v7.jsxs)(_v215.FormControl, {
          isInvalid: !_v8,
          children: [(0, _v7.jsxs)(_v254.InputGroup, {
            size: "md",
            children: [(0, _v7.jsx)(_v255.Input, {
              placeholder: (0, _v17.translate)({
                singular: "domain.com",
                dictionary: {
                  es: {
                    singular: "dominio.com"
                  }
                }
              }),
              value: _v6,
              isDisabled: _v5,
              onBlur: () => {
                _v18(_v6);
              },
              onChange: _v0 => {
                _v8 || _v16(!0), _v7(_v0.target.value);
              },
              onKeyDown: _v0 => {
                "Enter" === _v0.key && _v18(_v6);
              },
              variant: "outlined"
            }), (0, _v7.jsx)(_v256.InputRightElement, {
              children: (0, _v7.jsx)(_v206.IconButton, {
                "aria-label": "add domain",
                icon: (0, _v7.jsx)(_v21.PlusCircle, {
                  cursor: "pointer"
                }),
                onClick: () => {
                  _v18(_v6);
                },
                isDisabled: _v5,
                variant: "tertiary",
                size: "sm"
              })
            })]
          }), !_v8 && (0, _v7.jsx)(_v257.FormErrorMessage, {
            children: (0, _v17.translate)({
              singular: "Enter a valid URL.",
              dictionary: {
                es: {
                  singular: "Ingresar una URL válida."
                },
                "de-DE": {
                  singular: "Gib eine gültige URL ein."
                },
                "fr-FR": {
                  singular: "Saisissez une URL valide."
                },
                "ja-JP": {
                  singular: "正しいURLを入力してください。"
                },
                "ko-KR": {
                  singular: "유효한 URL을 입력하세요."
                },
                "pt-BR": {
                  singular: "Insira um URL válido."
                },
                "zh-CN": {
                  singular: "输入有效的 URL。"
                }
              }
            })
          })]
        }), (0, _v7.jsx)(_v205.HStack, {
          flexWrap: "wrap",
          maxH: "initial",
          overflowY: "initial",
          children: _v13.map((_v0, _v1) => (0, _v7.jsx)(_v260, {
            domain: _v0.domain,
            removeDomain: () => _v19(_v0),
            canBeRemoved: !_v5
          }, `${_v0.domain}${_v1}`))
        })]
      });
    };
  var _v264 = _v0.i(0),
    _v265 = _v0.i(0),
    _v266 = _v0.i(0);
  let _v267 = [{
      value: "public",
      label: (0, _v17.translate)({
        singular: "Anywhere",
        dictionary: {
          es: {
            singular: "En cualquier sitio"
          },
          "de-DE": {
            singular: "Überall"
          },
          "fr-FR": {
            singular: "N'importe où"
          },
          "ja-JP": {
            singular: "すべてのサイト"
          },
          "ko-KR": {
            singular: "어디에나"
          },
          "pt-BR": {
            singular: "Em qualquer lugar"
          },
          "zh-CN": {
            singular: "任何位置"
          }
        }
      })
    }, {
      value: "private",
      label: (0, _v17.translate)({
        singular: "Nowhere",
        dictionary: {
          es: {
            singular: "En ningún sitio"
          },
          "de-DE": {
            singular: "Nirgendwo"
          },
          "fr-FR": {
            singular: "Nulle part"
          },
          "ja-JP": {
            singular: "いっさい許可しない"
          },
          "ko-KR": {
            singular: "불가"
          },
          "pt-BR": {
            singular: "Em nenhum lugar"
          },
          "zh-CN": {
            singular: "无处"
          }
        }
      })
    }, {
      value: "whitelist",
      label: (0, _v17.translate)({
        singular: "Specific domains",
        dictionary: {
          es: {
            singular: "En dominios específicos"
          },
          "de-DE": {
            singular: "Bestimmte Domains"
          },
          "fr-FR": {
            singular: "Domaines spécifiques"
          },
          "ja-JP": {
            singular: "特定のドメイン"
          },
          "ko-KR": {
            singular: "특정 도메인"
          },
          "pt-BR": {
            singular: "Domínios específicos"
          },
          "zh-CN": {
            singular: "特定域"
          }
        }
      })
    }],
    _v268 = {
      public: {
        icon: (0, _v7.jsx)(_v265.Globe, {})
      },
      private: {
        icon: (0, _v7.jsx)(_v264.EyeShut, {})
      },
      whitelist: {
        icon: (0, _v7.jsx)(_v266.Lock, {})
      }
    },
    _v269 = ({
      shouldDisableAll: _v0,
      selectedEmbedPrivacy: _v1,
      hasExtraEmbedOptions: _v2,
      onEmbedChangeClick: _v3,
      onEmbedUpsellClick: _v4,
      hidePrivateOption: _v5
    }) => {
      let _v6 = _v5 ? _v267.filter(_v0 => "private" !== _v0.value) : _v267;
      return (0, _v7.jsx)(_v244.Select, {
        "data-testid": "embed-dropdown",
        placeholder: "",
        items: _v6,
        value: [_v1 ?? ""],
        disabled: _v0,
        onValueChange: _v0 => {
          let _v1 = _v0.value[0];
          "whitelist" !== _v1 || _v2 ? _v3(_v1) : _v4?.();
        },
        leftIcon: _v268[_v1]?.icon,
        variant: "outlined",
        children: _v0 => "whitelist" !== _v0.value || _v2 ? (0, _v7.jsxs)(_v244.SelectItem, {
          display: "flex",
          "data-testid": `embed-privacy-${_v0.value}`,
          children: [_v268[_v0.value].icon, (0, _v7.jsx)(_v244.SelectItemText, {
            children: _v0.label
          })]
        }) : (0, _v7.jsxs)(_v244.SelectItem, {
          "data-testid": `embed-privacy-${_v0.value}`,
          children: [(0, _v7.jsx)(_v112.Box, {
            children: _v268[_v0.value].icon
          }), (0, _v7.jsx)(_v112.Box, {
            children: (0, _v7.jsx)(_v244.SelectItemText, {
              children: _v0.label
            })
          }), (0, _v7.jsx)(_v222.UpgradeBadge, {
            "data-testid": "embed-domains-upsell",
            name: "upload_home_embed_domains_upgrade_button",
            location: "upload_home_privacy_drawer"
          })]
        })
      });
    },
    _v270 = {
      activeLinkPrivacyOption: "",
      showEmbedInput: !1,
      allowDownloads: !1,
      allowShareLink: !0,
      allowShowcase: !1,
      activeEmbedPrivacy: "",
      allowComments: !0
    },
    _v271 = (_v0, _v1) => {
      switch (_v1.type) {
        case "PRIVACY_DRAWER.HYDRATE":
          return _v1.payload;
        case "PRIVACY_DRAWER.SET_ACTIVE_LINK_PRIVACY_OPTION":
          return {
            ..._v0,
            activeLinkPrivacyOption: _v1.payload
          };
        case "PRIVACY_DRAWER.TOGGLE_ALLOW_DOWNLOADS":
          return {
            ..._v0,
            allowDownloads: !_v0.allowDownloads
          };
        case "PRIVACY_DRAWER.TOGGLE_ALLOW_SHARE_LINK":
          return {
            ..._v0,
            allowShareLink: !_v0.allowShareLink
          };
        case "PRIVACY_DRAWER.TOGGLE_ALLOW_SHOWCASE":
          return {
            ..._v0,
            allowShowcase: !_v0.allowShowcase
          };
        case "PRIVACY_DRAWER.TOGGLE_ALLOW_COMMENTS":
          return {
            ..._v0,
            allowComments: !_v0.allowComments
          };
        default:
          return _v0;
      }
    },
    _v272 = ({
      linkText: _v0,
      privacyMessageOnClick: _v1,
      showLink: _v2 = !1
    }) => (0, _v7.jsx)(_v212.Alert, {
      status: "info",
      mb: 0,
      children: (0, _v7.jsxs)(_v213.AlertDescription, {
        children: [(0, _v7.jsx)(_v88.Paragraph, {
          size: "md",
          children: (0, _v17.translate)({
            singular: "This video is set to Private. Only people with access can view the embedded video.",
            dictionary: {
              es: {
                singular: "Este video está configurado como Privado. Solo las personas que tienen acceso pueden ver el video insertado."
              },
              "de-DE": {
                singular: "Dieses Video ist auf „Privat“ eingestellt. Nur Personen mit Zugriffsrechten können das eingebettete Video ansehen."
              },
              "fr-FR": {
                singular: "Cette vidéo est définie sur le mode Privé. Le visionnage de la vidéo intégrée est réservé aux utilisateurs disposant d'un accès."
              },
              "ja-JP": {
                singular: "この動画は「プライベート」に設定されています。アクセス権を持つ人のみ埋め込み動画を視聴できます。"
              },
              "ko-KR": {
                singular: "이 동영상은 '비공개'로 설정되어 있습니다. 액세스 권한이 있는 사람만 임베드된 동영상을 볼 수 있습니다."
              },
              "pt-BR": {
                singular: "O vídeo está definido como Privado. Somente pessoas com acesso podem ver o vídeo incorporado."
              },
              "zh-CN": {
                singular: "此视频已设置为私密。只有具有访问权限的人员才能查看嵌入的视频。"
              }
            }
          })
        }), _v2 && (0, _v7.jsx)(_v89.Link, {
          textDecoration: "none",
          onClick: () => {
            _v1 && _v1();
          },
          children: _v0
        })]
      })
    }),
    _v273 = (0, _v17.translate)({
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
    }),
    _v274 = {
      contacts: _v273,
      users: (0, _v17.translate)({
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
      }),
      disable: (0, _v17.translate)({
        singular: "Hide this video from vimeo.com",
        dictionary: {
          es: {
            singular: "Ocultar este video de vimeo.com"
          },
          "de-DE": {
            singular: "Dieses Video auf Vimeo.com ausblenden"
          },
          "fr-FR": {
            singular: "Masquer cette vidéo sur Vimeo.com"
          },
          "ja-JP": {
            singular: "この動画をVimeo.comで非表示にする"
          },
          "ko-KR": {
            singular: "vimeo.com에서 이 동영상 숨기기"
          },
          "pt-BR": {
            singular: "Ocultar este vídeo do vimeo.com"
          },
          "zh-CN": {
            singular: "对 vimeo.com 隐藏此视频"
          }
        }
      })
    },
    _v275 = {
      legacy: _v0 => (0, _v17.translate)({
        singular: 'Based on community feedback, we improved privacy settings. This video\'s current setting, "{PRIVACY}," is no longer supported. Instead, we recommend "Private" below. Your embeds won\'t be affected, and your video won\'t be searchable.',
        replacements: {
          PRIVACY: _v274[_v0]
        },
        dictionary: {
          es: {
            singular: 'Mejoramos la configuración de privacidad en función de los comentarios de la comunidad. Ya no se admite la configuración actual de este video, "{PRIVACY}". En su lugar, te recomendamos la opción "Privado" que aparece debajo. No se verán afectadas las inserciones, y el video no se podrá buscar.'
          },
          "de-DE": {
            singular: "Basierend auf Feedback unserer Community haben wir die Privatsphäreeinstellungen verbessert. Die aktuelle Einstellung dieses Videos „{PRIVACY}“ wird nicht mehr unterstützt. Wir empfehlen stattdessen die untenstehende Option „Privat“. Das betrifft deine Einbettungen nicht und dein Video kann nicht gesucht werden."
          },
          "fr-FR": {
            singular: "Nous avons pris en compte les avis de la communauté et avons amélioré nos paramètres de confidentialité. Par conséquent, le paramètre « {PRIVACY} » défini pour cette vidéo n'est plus pris en charge. Nous vous recommandons le paramètre « Privé » ci-dessous. Ce changement n'aura pas d'impact sur vos intégrations et vos vidéos ne pourront pas être recherchées."
          },
          "ja-JP": {
            singular: "コミュニティからのフィードバックを受け、プライバシー設定を改善しました。この動画の現在の設定「{PRIVACY}」のサポートは終了しました。代わりに、以下の「プライベート」設定をお勧めします。埋め込み動画に影響はなく、動画も検索できなくなります。"
          },
          "ko-KR": {
            singular: "커뮤니티 피드백을 바탕으로 프라이버시 설정이 개선되었습니다. 이 동영상에 현재 적용된 '{PRIVACY}' 설정은 더 이상 지원되지 않습니다. 대신 아래의 '비공개' 설정 사용을 권장합니다. 임베드에는 영향을 주지 않으며 동영상은 검색 결과에 나타나지 않습니다."
          },
          "pt-BR": {
            singular: 'Com base nos comentários da comunidade, melhoramos as configurações de privacidade. A configuração atual deste vídeo "{PRIVACY}" não é mais suportada. Em vez disso, recomendamos "Privado" como abaixo. Suas incorporações não serão afetadas e seu vídeo não será pesquisável.'
          },
          "zh-CN": {
            singular: "我们根据社区反馈改进了隐私设置。本视频的当前设置“{PRIVACY}”已不再支持。因此，我们建议在下方使用“私密”(Private)。您嵌入的内容不会受到影响，您的视频也不会被搜索到。"
          }
        }
      }),
      vod: _v0 => (0, _v17.translate)({
        singular: "Vimeo On Demand videos are automatically private. Edit VOD settings {A}here{/A}.",
        replacements: {
          A: _v0 => (0, _v7.jsx)(_v89.Link, {
            href: _v0,
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "Los videos de VOD son privados de manera automática. Edita la configuración de VOD {A}aquí{/A}."
          },
          "de-DE": {
            singular: "Vimeo On Demand-Videos sind automatisch privat. VOD-Einstellungen {A}hier{/A} bearbeiten."
          },
          "fr-FR": {
            singular: "Les vidéos Vimeo On Demand sont automatiquement privées. Modifiez les paramètres VOD {A}ici{/A}."
          },
          "ja-JP": {
            singular: "Vimeoオンデマンド動画は自動的にプライベート公開となります。VOD設定の編集は{A}こちら{/A}から。"
          },
          "ko-KR": {
            singular: "Vimeo 온디맨드 동영상은 자동으로 비공개됩니다. {A}여기{/A}에서 VOD 설정을 편집하세요."
          },
          "pt-BR": {
            singular: "Vídeos do Vimeo On Demand são automaticamente privados. Edite as configurações do VOD {A}aqui{/A}."
          },
          "zh-CN": {
            singular: "Vimeo On Demand 视频将自动设为私人视频。在{A}此处{/A}编辑 VOD 设置。"
          }
        }
      }),
      stock: (0, _v17.translate)({
        singular: "Privacy can’t be changed on Vimeo Stock clips.",
        dictionary: {
          es: {
            singular: "No puedes cambiar la privacidad en los videos de archivo de Vimeo."
          },
          "de-DE": {
            singular: "Die Datenschutzbestimmungen können bei Vimeo-Stock-Clips nicht geändert werden."
          },
          "fr-FR": {
            singular: "La confidentialité ne peut pas être changée pour les clips de Vimeo Stock."
          },
          "ja-JP": {
            singular: "Vimeo Stockのクリップでプライバシー情報は変更できません。"
          },
          "ko-KR": {
            singular: "Vimeo Stock 클립에서는 프라이버시 설정을 변경할 수 없습니다."
          },
          "pt-BR": {
            singular: "A privacidade não pode ser alterada nos Clipes do Vimeo Stock."
          },
          "zh-CN": {
            singular: "无法更改 Vimeo Stock 剪辑的隐私。"
          }
        }
      }),
      unlicensedMusic: (0, _v17.translate)({
        singular: "Videos containing your own uploaded music cannot be public. To go public, use music available on Vimeo.",
        dictionary: {
          es: {
            singular: "Los videos en los que hayas subido música no pueden establecerse como públicos. Para ello, usa la música que está disponible en Vimeo."
          },
          "de-DE": {
            singular: "Videos, die von dir hochgeladene Musik enthalten, können nicht öffentlich geteilt werden. Wenn du sie öffentlich teilen möchtest, verwende Musik, die auf Vimeo verfügbar ist."
          },
          "fr-FR": {
            singular: "Les vidéos contenant votre propre musique ne peuvent pas être publiques. Pour les rendre publiques, utilisez la musique disponible sur Vimeo."
          },
          "ja-JP": {
            singular: "自分でアップロードした音楽を含む動画は公開できません。公開するには、Vimeoで利用可能な音楽を使用して下さい。"
          },
          "ko-KR": {
            singular: "자신이 업로드한 음악을 사용한 동영상은 공개할 수 없습니다. 모두에게 공개하려면 Vimeo에서 찾을 수 있는 음악을 사용하세요."
          },
          "pt-BR": {
            singular: "Os vídeos que contêm suas próprias músicas carregadas não podem ser públicos. Para ser público, use as músicas disponíveis no Vimeo."
          },
          "zh-CN": {
            singular: "包含您自己上传的音乐的视频不能公开。若要公开，可使用 Vimeo 上的音乐。"
          }
        }
      })
    },
    _v276 = _v0 => {
      let {
        privacy: _v1,
        privacySettingLink: _v2,
        isMusicLicensed: _v3
      } = _v0;
      return (0, _v7.jsx)(_v212.Alert, {
        status: "info",
        children: (0, _v7.jsx)(_v213.AlertDescription, {
          children: (0, _v7.jsx)(_v88.Paragraph, {
            size: "md",
            children: (() => {
              if (!_v3) return _v275.unlicensedMusic;
              switch (_v1) {
                case "contacts":
                case "disable":
                case "users":
                  return _v275.legacy(_v1);
                case "ptv":
                case "ptvhide":
                  return _v275.vod(_v2);
                case "stock":
                case "stock_purchased":
                  return _v275.stock;
              }
            })()
          })
        })
      });
    },
    _v277 = {
      privacy: {
        feature: "teams",
        upsell_name: "video_share",
        location: "privacy drawer"
      },
      download: {
        feature: "privacy",
        upsell_name: "privacy_settings_allow_downloads",
        location: "privacy drawer"
      },
      embed: {
        feature: "privacy",
        upsell_name: "privacy_settings_embed_specific_domains",
        location: "privacy drawer"
      },
      storage_limit: {
        feature: "storage",
        upsell_name: "embed_storage_limit",
        location: "privacy drawer"
      }
    },
    _v278 = {
      privacy: {
        paywallTrigger: "upload_privacy_drawer_share_button",
        paywallLocation: "privacy_drawer",
        paywallType: "popup",
        paywallFeature: "privacy"
      },
      download: {
        paywallTrigger: "upload_privacy_drawer_download_button",
        paywallLocation: "privacy_drawer",
        paywallType: "popup",
        paywallFeature: "privacy"
      },
      embed: {
        paywallTrigger: "upload_privacy_drawer_embed_button",
        paywallLocation: "privacy_drawer",
        paywallType: "popup",
        paywallFeature: "privacy"
      },
      storage_limit: {
        paywallTrigger: "upload_embed_toggle_storage_limit",
        paywallLocation: "privacy_drawer",
        paywallType: "popup",
        paywallFeature: "storage_limit"
      }
    },
    _v279 = {
      privacy: "password privacy",
      download: "allow video download",
      embed: "embed domain privacy",
      storage_limit: "embed domain privacy"
    },
    _v280 = ["contacts", "users"],
    _v281 = ["ptv", "ptvhide", "stock", "stock_purchased"],
    _v282 = ({
      video: _v0,
      show: _v1,
      capabilities: _v2,
      canUpdatePrivacyToPublic: _v3,
      privacySettingLink: _v4,
      hasRestrictedPrivacyOptions: _v5,
      uploadingFileSize: _v6,
      onAllowDownloadsChange: _v7,
      onAllowShowcaseChange: _v8,
      onAllowCommentsChange: _v9,
      onPrivacyChange: _v10,
      onEmbedPrivacyChange: _v11,
      onEmbedDomainsChange: _v12,
      updateContentRating: _v13
    }) => {
      let _v14 = _v0?.id,
        _v15 = (0, _v138.useAnalyticsEvent)(),
        {
          user: _v16,
          vuid: _v17
        } = (0, _v11.useContext)(_v230.ConfigContext),
        _v18 = (0, _v11.useContext)(_v85.ViewerContext),
        _v19 = _v18?.user?.uploadQuota?.restricted,
        {
          uploadQuota: _v20,
          isValidating: _v21
        } = (0, _v227.useUserQuotaApi)(),
        _v22 = (0, _v229.useHasMounted)(),
        _v23 = (0, _v11.useRef)(_v0?.privacy?.view),
        {
          tooltip: _v24,
          isDisabled: _v25
        } = (0, _v93.useGetEditEmbedPrivacyDisabled)(),
        [_v26, _v27] = (0, _v11.useState)(),
        [_v28, _v29] = (0, _v11.useState)(null),
        [_v30, _v31] = (0, _v11.useState)(_v0?.password ?? ""),
        [_v32, _v33] = (0, _v11.useState)(!1),
        [_v34, _v35] = (0, _v11.useState)(null),
        [_v36, _v37] = (0, _v11.useState)(!1),
        _v38 = (0, _v11.useMemo)(() => ({
          privacy: {
            headerText: (0, _v17.translate)({
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
            subHeaderText: (0, _v17.translate)({
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
          },
          download: {
            headerText: (0, _v17.translate)({
              singular: "Upgrade to allow downloads",
              dictionary: {
                es: {
                  singular: "Actualice para permitir descargas"
                },
                "de-DE": {
                  singular: "Upgrade vornehmen, um Downloads zu ermöglichen"
                },
                "fr-FR": {
                  singular: "Mettez à niveau pour autoriser les téléchargements"
                },
                "ja-JP": {
                  singular: "アップグレードしてダウンロード可能に"
                },
                "ko-KR": {
                  singular: "다운로드를 허용하려면 업그레이드하세요."
                },
                "pt-BR": {
                  singular: "Faça upgrade para permitir downloads"
                },
                "zh-CN": {
                  singular: "升级以允许下载功能"
                }
              }
            }),
            subHeaderText: (0, _v17.translate)({
              singular: "Get full access to robust privacy and engagement tools",
              dictionary: {
                es: {
                  singular: "Obtenga acceso total a herramientas potentes de privacidad e interacción"
                },
                "de-DE": {
                  singular: "Sie erhalten vollen Zugang zu leistungsstarken Datenschutz- und Interaktionstools."
                },
                "fr-FR": {
                  singular: "Accédez à tous les outils performants pour la confidentialité et l'engagement"
                },
                "ja-JP": {
                  singular: "強力なプライバシー機能とエンゲージメントツールにフルアクセス"
                },
                "ko-KR": {
                  singular: "강력한 개인정보 보호 및 참여 도구를 모두 활용하세요."
                },
                "pt-BR": {
                  singular: "Tenha acesso total a ferramentas robustas de privacidade e engajamento"
                },
                "zh-CN": {
                  singular: "获取对强大的隐私和参与工具的完整访问权限"
                }
              }
            })
          },
          embed: {
            headerText: (0, _v17.translate)({
              singular: "Upgrade to restrict domains",
              dictionary: {
                es: {
                  singular: "Actualice para restringir dominios"
                },
                "de-DE": {
                  singular: "Upgrade vornehmen, um Domains einzuschränken"
                },
                "fr-FR": {
                  singular: "Mettez à niveau pour restreindre les domaines"
                },
                "ja-JP": {
                  singular: "アップグレードしてドメイン制限可能に"
                },
                "ko-KR": {
                  singular: "도메인을 제한하려면 업그레이드하세요."
                },
                "pt-BR": {
                  singular: "Faça upgrade para restringir domínios"
                },
                "zh-CN": {
                  singular: "升级以限制域"
                }
              }
            }),
            subHeaderText: (0, _v17.translate)({
              singular: "Get full access to robust privacy and engagement tools",
              dictionary: {
                es: {
                  singular: "Obtenga acceso total a herramientas potentes de privacidad e interacción"
                },
                "de-DE": {
                  singular: "Sie erhalten vollen Zugang zu leistungsstarken Datenschutz- und Interaktionstools."
                },
                "fr-FR": {
                  singular: "Accédez à tous les outils performants pour la confidentialité et l'engagement"
                },
                "ja-JP": {
                  singular: "強力なプライバシー機能とエンゲージメントツールにフルアクセス"
                },
                "ko-KR": {
                  singular: "강력한 개인정보 보호 및 참여 도구를 모두 활용하세요."
                },
                "pt-BR": {
                  singular: "Tenha acesso total a ferramentas robustas de privacidade e engajamento"
                },
                "zh-CN": {
                  singular: "获取对强大的隐私和参与工具的完整访问权限"
                }
              }
            })
          },
          storage_limit: {
            headerText: (0, _v17.translate)({
              singular: "You've reached your storage limit",
              dictionary: {
                es: {
                  singular: "Alcanzaste el límite de almacenamiento."
                },
                "de-DE": {
                  singular: "Du hast dein Speicherlimit erreicht."
                },
                "fr-FR": {
                  singular: "Vous avez atteint votre limite de stockage"
                },
                "ja-JP": {
                  singular: "ストレージ容量の上限に達しました"
                },
                "ko-KR": {
                  singular: "저장소 한도에 도달했습니다."
                },
                "pt-BR": {
                  singular: "Você atingiu seu limite de armazenamento"
                }
              }
            }),
            subHeaderText: (0, _v17.translate)({
              singular: "Upgrade your plan to get more storage",
              dictionary: {
                es: {
                  singular: "Actualiza tu plan para obtener más espacio de almacenamiento"
                },
                "de-DE": {
                  singular: "Aktualisieren Sie Ihren Tarif, um mehr Speicherplatz zu erhalten"
                },
                "fr-FR": {
                  singular: "Passez à un forfait supérieur pour obtenir plus d'espace de stockage"
                },
                "ja-JP": {
                  singular: "ストレージを増やすにはプランをアップグレードしてください"
                },
                "ko-KR": {
                  singular: "저장 공간을 늘리려면 요금제를 업그레이드하세요"
                },
                "pt-BR": {
                  singular: "Atualize seu plano para obter mais armazenamento"
                },
                "zh-CN": {
                  singular: "升级您的套餐以获得更多存储空间"
                }
              }
            })
          }
        }), []),
        _v39 = _v32 && !(_v30 && _v30.trim().length > 0 && _v30.trim().length <= 32),
        {
          canAllowDownloads: _v40,
          canHideVideos: _v41,
          canUnlistVideo: _v42,
          hasVideoPasswordPrivacyUpsell: _v43,
          hasPrivateModeOff: _v44
        } = _v2 ?? {},
        [_v45] = (0, _v221.useDeleteVideoPrivacyDomain)(),
        _v46 = async (_v0, _v1) => {
          _v27(_v0), ("whitelist" !== _v0 || _v1) && (_v28 && _v14 && (await _v45({
            where: {
              videoId: _v14,
              domain: _v28.domain
            }
          }), _v29(null)), _v0 !== _v51 && _v15(_v233("workflow.change_embed_privacy", 2, {
            old_embed_privacy: _v51,
            video_embed_privacy: _v0
          }, _v235)), _v11(_v0));
        },
        _v47 = async _v0 => {
          _v46(_v0, !1);
        },
        _v48 = async _v0 => {
          _v46(_v0, !0);
        },
        _v49 = _v0?.privacy?.add ?? !1,
        _v50 = _v0?.privacy?.allowShareLink ?? !0,
        _v51 = _v0?.privacy?.embed ?? "private",
        _v52 = _v0?.editSession?.isMusicLicensed ?? !0,
        _v53 = _v0?.metadata?.isScreenRecord,
        _v54 = _v2?.hasSunsetHideFromVimeo ?? !1,
        _v55 = _v2?.hasUpsellsForFlatRateTiers ?? !1,
        _v56 = _v2?.enterprise ?? !1,
        _v57 = _v0?.privacy?.download ?? !1,
        _v58 = _v0?.privacy?.comments === "anybody",
        _v59 = {
          ..._v270,
          activeLinkPrivacyOption: _v0?.privacy?.view,
          allowDownloads: _v57,
          allowShareLink: _v50,
          allowShowcase: _v49,
          activeEmbedPrivacy: _v51,
          allowComments: _v58
        },
        [_v60, _v61] = (0, _v11.useReducer)(_v271, _v59);
      (0, _v11.useEffect)(() => {
        _v0?.privacy?.view && _v60?.activeLinkPrivacyOption !== _v0?.privacy?.view && (_v31(""), _v61({
          type: "PRIVACY_DRAWER.SET_ACTIVE_LINK_PRIVACY_OPTION",
          payload: _v0?.privacy?.view
        }));
      }, [_v0?.privacy?.view]);
      let _v62 = void 0 !== _v44 && !_v44,
        _v63 = _v0?.allowedPrivacies && _v0?.privacy?.view && !_v0.allowedPrivacies.includes(_v0?.privacy?.view),
        _v64 = !_v0?.privacy?.view || _v281.indexOf(_v0?.privacy?.view) > -1 || _v63,
        _v65 = _v0?.privacy?.view && _v280.indexOf(_v0?.privacy?.view) > -1,
        _v66 = _v0?.privacy?.view && ["stock", "stock_purchased"].indexOf(_v0?.privacy?.view) > -1,
        {
          privacyOptions: _v67
        } = (0, _v224.useClipPrivacyOptions)(_v14, !1),
        _v68 = (0, _v225.useDefaultPrivacyOptions)(_v18, _v42 && !_v43 && _v41, !1),
        _v69 = (0, _v11.useMemo)(() => _v67?.length ? _v67 : _v68, [_v67, _v68]),
        _v70 = (0, _v11.useMemo)(() => _v69.filter(_v0 => "unlisted" !== _v0.privacy || !_v54).map(_v0 => ({
          ..._v0,
          showUpsell: _v0.showUpsell ?? (!_v56 && !!_v0?.allowedPrivacies && !_v0?.allowedPrivacies?.includes(_v0.privacy)),
          isDisabled: _v0.isDisabled || !_v52 || "unlisted" === _v0.privacy && !_v42 && !_v53 || "disable" === _v0.privacy && (!_v41 && !_v62 || _v62 && _v54) || "anybody" === _v0.privacy && !!_v5 && !!_v3
        })), [_v41, _v42, _v3, _v62, _v5, _v54, _v56, _v52, _v53, _v69, _v0?.allowedPrivacies]);
      (0, _v11.useEffect)(() => {
        _v1 && _v61({
          type: "PRIVACY_DRAWER.HYDRATE",
          payload: _v59
        });
      }, [_v1]);
      let _v71 = (0, _v228.useDebouncedCallback)(_v0 => {
          !_v39 && (_v23.current && _v15(_v236({
            old_video_privacy: _v23.current,
            video_privacy: "password"
          })), _v10("password", _v0 ?? void 0), _v23.current = "password");
        }, 600),
        _v72 = (0, _v11.useRef)({
          notification_name: "embed_privacy_notification",
          product: "vimeo create",
          location: "video page",
          path: window.location.pathname,
          session_id: null,
          client_timestamp: null,
          platform: window.navigator.platform,
          user_id: `${_v16 && _v16.id}`,
          vsid: null,
          user_package_type: null,
          third_party_integration: "none",
          flow: "create_homepage",
          device_id: _v17,
          clients_session_start_ts: null,
          client_ver: null,
          debug_mode: null,
          in_background: null,
          is_guest: null,
          lang: _v18?.locale || "en"
        });
      (0, _v11.useEffect)(() => {
        _v0?.privacy?.view === "nobody" && _v22 && _v136.BigPictureClient.sendEvent(new _v136.Event("view_notification", 1, {
          ..._v72.current
        }));
      }, [_v0?.privacy?.view, _v72]), (0, _v11.useEffect)(() => {
        _v0?.privacy?.embed && _v27(_v0?.privacy?.embed);
      }, [_v0?.privacy?.embed]);
      let _v73 = (_v0, _v1) => {
          _v15(_v233("workflow.click_svv_upsell", 2, {
            upsell: _v1 ?? _v279[_v0],
            tier: _v55 ? "plus" : "starter",
            target: "/upgrade"
          }, _v235)), _v35(_v0);
        },
        _v74 = _v25 && _v24 ? (0, _v7.jsx)(_v211.Tooltip, {
          shouldWrapChildren: !0,
          label: _v24,
          children: (0, _v7.jsx)(_v219.InfoCircle, {
            display: "block",
            width: "2xs",
            height: "2xs"
          })
        }) : null;
      return _v60.activeLinkPrivacyOption ? (0, _v7.jsxs)(_v7.Fragment, {
        children: [(0, _v7.jsxs)(_v208.VStack, {
          alignItems: "stretch",
          gap: "lg",
          children: [(0, _v7.jsxs)(_v208.VStack, {
            alignItems: "stretch",
            gap: "2",
            children: [(0, _v7.jsx)(_v218.Text, {
              variant: "heading-xs",
              color: "text-primary",
              children: (0, _v17.translate)({
                singular: "Link privacy",
                dictionary: {
                  es: {
                    singular: "Privacidad de los enlaces"
                  },
                  "de-DE": {
                    singular: "Link-Datenschutz"
                  },
                  "fr-FR": {
                    singular: "Confidentialité du lien"
                  },
                  "ja-JP": {
                    singular: "リンクのプライバシー"
                  },
                  "ko-KR": {
                    singular: "링크 프라이버시"
                  },
                  "pt-BR": {
                    singular: "Link de Privacidade"
                  },
                  "zh-CN": {
                    singular: "链接隐私"
                  }
                }
              })
            }), _v0?.privacy?.view && (_v64 || _v65 || !_v52) && !_v63 && (0, _v7.jsx)(_v276, {
              privacy: _v0?.privacy?.view,
              privacySettingLink: _v4,
              isMusicLicensed: _v52
            }), (0, _v7.jsx)(_v220.PrivacyDropdown, {
              isVideoPrivacy: !0,
              privacyOptions: _v70,
              activePrivacy: _v60.activeLinkPrivacyOption,
              onSelect: _v0 => {
                if (null != _v19 && "anybody" !== _v0) {
                  let _v0 = _v20?.restricted?.max ?? _v19?.max,
                    _v1 = _v20?.restricted?.used ?? _v19?.used;
                  if (null != _v0 && null != _v1 && _v1 + (_v6 ?? 0) > _v0) return void _v35("storage_limit");
                }
                _v61({
                  type: "PRIVACY_DRAWER.SET_ACTIVE_LINK_PRIVACY_OPTION",
                  payload: _v0
                }), _v0 !== _v223.DEFAULT_PRIVACY_VALUES.PASSWORD && _v0 !== _v23.current && (_v23.current && _v15(_v236({
                  old_video_privacy: _v23.current,
                  video_privacy: _v0
                })), _v10(_v0), _v31(""), _v23.current = _v0);
              },
              onUpsellClick: _v0 => _v73("privacy", _v0),
              isRedirectUpsell: !1,
              variant: "outlined"
            }), _v60.activeLinkPrivacyOption !== _v223.DEFAULT_PRIVACY_VALUES.PASSWORD || _v63 ? null : (0, _v7.jsxs)(_v208.VStack, {
              alignItems: "stretch",
              gap: "2",
              children: [(0, _v7.jsx)(_v217.Password, {
                name: "upload-page-password-input",
                size: "md",
                variant: "outlined",
                autoFocus: _v60.activeLinkPrivacyOption === _v223.DEFAULT_PRIVACY_VALUES.PASSWORD && _v0?.privacy?.view !== _v223.DEFAULT_PRIVACY_VALUES.PASSWORD,
                autoComplete: "new-password",
                isInvalid: _v39,
                value: _v30,
                placeholder: (0, _v17.translate)({
                  singular: "Enter password",
                  dictionary: {
                    es: {
                      singular: "Ingresar la contraseña"
                    },
                    "de-DE": {
                      singular: "Bitte Kennwort eingeben"
                    },
                    "fr-FR": {
                      singular: "Saisir mot de passe"
                    },
                    "ja-JP": {
                      singular: "パスワードを入力"
                    },
                    "ko-KR": {
                      singular: "비밀번호 입력"
                    },
                    "pt-BR": {
                      singular: "Digite a senha"
                    },
                    "zh-CN": {
                      singular: "输入密码"
                    }
                  }
                }),
                "data-lpignore": "true",
                "data-1p-ignore": "true",
                onChange: _v0 => {
                  _v32 || _v33(!0), _v31(_v0.target.value), _v71.debouncedCallback(_v0.target.value);
                },
                onFocus: () => _v37(!0),
                onBlur: () => _v37(!1)
              }), (0, _v7.jsx)(_v189.AnimatePresence, {
                children: _v36 ? (0, _v7.jsx)(_v48.Flex, {
                  as: _v193.motion.div,
                  initial: {
                    height: 0,
                    opacity: 0
                  },
                  animate: {
                    height: "auto",
                    opacity: 1
                  },
                  exit: {
                    height: 0,
                    opacity: 0
                  },
                  transition: {
                    duration: "2",
                    type: "spring",
                    stiffness: "600",
                    damping: "32"
                  },
                  children: (0, _v7.jsxs)(_v218.Text, {
                    variant: "body-sm",
                    color: "text-secondary",
                    flex: "1",
                    textAlign: "right",
                    mt: "0",
                    children: [_v30.length, " / ", 32]
                  })
                }) : null
              })]
            })]
          }), null != _v19 ? (0, _v7.jsxs)(_v208.VStack, {
            alignItems: "stretch",
            gap: "lg",
            children: [(0, _v7.jsx)(_v226.EmbeddableQuotaMeter, {
              isChecked: _v26 !== _v223.EMBED_PRIVACY_VALUES.PRIVATE,
              isDisabled: !!_v66 || _v25,
              viewPrivacy: _v60.activeLinkPrivacyOption,
              onChange: () => {
                if (_v26 === _v223.EMBED_PRIVACY_VALUES.PRIVATE) {
                  let _v0 = _v20?.restricted?.max ?? _v19?.max,
                    _v1 = _v20?.restricted?.used ?? _v19?.used;
                  if (null != _v0 && null != _v1 && _v1 + (_v6 ?? 0) > _v0) return void _v35("storage_limit");
                }
                _v47(_v26 === _v223.EMBED_PRIVACY_VALUES.PRIVATE ? _v223.EMBED_PRIVACY_VALUES.PUBLIC : _v223.EMBED_PRIVACY_VALUES.PRIVATE);
              },
              quota: _v20 ?? null,
              isQuotaLoading: _v21,
              highlightedValue: _v6,
              isHighlightedAdditional: !0
            }), _v26 !== _v223.EMBED_PRIVACY_VALUES.PRIVATE && (0, _v7.jsxs)(_v208.VStack, {
              alignItems: "stretch",
              gap: "2",
              children: [(0, _v7.jsxs)(_v48.Flex, {
                alignItems: "center",
                gap: "1",
                children: [(0, _v7.jsx)(_v218.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (0, _v17.translate)({
                    singular: "Where can this be embedded?",
                    dictionary: {
                      es: {
                        singular: "¿Dónde pueden insertarlo?"
                      },
                      "de-DE": {
                        singular: "Wo kann das eingebettet werden?"
                      },
                      "fr-FR": {
                        singular: "Où est-ce que cette vidéo peut être intégrée ?"
                      },
                      "ja-JP": {
                        singular: "どこに動画の埋め込みを許可しますか？"
                      },
                      "ko-KR": {
                        singular: "어디에 임베드할 수 있나요?"
                      },
                      "pt-BR": {
                        singular: "Onde este vídeo pode ser incorporado?"
                      },
                      "zh-CN": {
                        singular: "可以在哪里嵌入？"
                      }
                    }
                  })
                }), _v74]
              }), _v0?.privacy?.view === "nobody" && (0, _v7.jsx)(_v272, {}), (0, _v7.jsx)(_v269, {
                selectedEmbedPrivacy: _v66 ? _v223.EMBED_PRIVACY_VALUES.PRIVATE : _v26,
                shouldDisableAll: !!_v66 || _v25,
                hasUpsellsForFlatRateTiers: _v2?.hasUpsellsForFlatRateTiers,
                hasExtraEmbedOptions: _v2?.hasExtraEmbedOptions,
                onEmbedChangeClick: _v47,
                onEmbedUpsellClick: () => _v73("embed"),
                hidePrivateOption: !0
              }), !_v52 && (0, _v7.jsx)(_v212.Alert, {
                status: "info",
                mb: 0,
                "data-testid": "embed-music-notice",
                children: (0, _v7.jsx)(_v213.AlertDescription, {
                  children: (0, _v7.jsx)(_v88.Paragraph, {
                    size: "md",
                    children: (0, _v17.translate)({
                      singular: "Videos with your own uploaded music will be visible only to you on Vimeo and anywhere you embed them. If you wish for your video to be publicly viewable on Vimeo or as an embed, please use licensed music available on Vimeo.",
                      dictionary: {
                        es: {
                          singular: "Los videos en los que hayas subido música serán visibles solo para ti tanto en Vimeo como en todos los lugares en los que los insertes. Si deseas que tu video se pueda ver de forma pública en Vimeo o en los lugares en los que lo insertes, usa la música con licencia que está disponible en Vimeo."
                        },
                        "de-DE": {
                          singular: "Videos, die von dir hochgeladene Musik enthalten, sind nur für dich auf Vimeo und überall dort, wo du sie einbettest, sichtbar. Wenn du möchtest, dass dein Video auf Vimeo, oder wo auch immer du es einbettest, öffentlich zu sehen ist, verwende bitte lizenzierte Musik, die auf Vimeo verfügbar ist."
                        },
                        "fr-FR": {
                          singular: "Les vidéos contenant votre propre musique ne seront visibles que par vous sur Vimeo et partout où vous les intégrez. Si vous voulez que votre vidéo soit visible publiquement sur Vimeo ou en tant qu'intégration, veuillez utiliser des musiques sous licence disponibles sur Vimeo."
                        },
                        "ja-JP": {
                          singular: "自分でアップロードした音楽を含む動画は、Vimeo上と埋め込んだすべての場所で自分にのみ表示されます。Vimeo上と埋め込み動画として動画を一般公開したい場合は、Vimeoで利用可能なライセンスされた音楽を使用してください。"
                        },
                        "ko-KR": {
                          singular: "자신이 업로드한 음악을 사용한 동영상은 Vimeo 및 임베드 장소에서 나만 볼 수 있습니다. Vimeo와 임베드 장소에서 모두가 동영상을 볼 수 있도록 하려면 Vimeo에서 이용 가능한 라이선스 음악을 사용하시기 바랍니다."
                        },
                        "pt-BR": {
                          singular: "Os vídeos com sua própria música carregada serão visíveis apenas para você no Vimeo e em qualquer lugar que você incorporá-los. Se você deseja que seu vídeo seja visível publicamente no Vimeo ou como uma incorporação, use as músicas licenciadas disponíveis no Vimeo."
                        },
                        "zh-CN": {
                          singular: "如果视频中使用了您自己上传的音乐，则只能在 Vimeo 和您嵌入视频之处看到。如果希望您的视频能在 Vimeo 上公开观看或嵌入，请使用 Vimeo 上提供的授权音乐。"
                        }
                      }
                    })
                  })
                })
              })]
            }), _v0?.privacy?.embed && _v26 === _v223.EMBED_PRIVACY_VALUES.WHITELIST && (0, _v7.jsx)(_v208.VStack, {
              align: "stetch",
              gap: "2",
              children: (0, _v7.jsx)(_v263, {
                initialPrivacy: _v0?.privacy?.embed,
                onPrivacyChange: _v48,
                onDeletingLastDomain: _v0 => {
                  _v29(_v0);
                },
                onEmbedDomainsChange: _v0 => {
                  _v12(_v0);
                },
                initialDomains: _v0?.privacy?.embedDomains,
                isDisabled: _v25
              })
            })]
          }) : (0, _v7.jsxs)(_v208.VStack, {
            alignItems: "stretch",
            gap: "lg",
            children: [(0, _v7.jsxs)(_v208.VStack, {
              alignItems: "stretch",
              gap: "2",
              children: [(0, _v7.jsxs)(_v48.Flex, {
                alignItems: "center",
                gap: "1",
                children: [(0, _v7.jsx)(_v218.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (0, _v17.translate)({
                    singular: "Where can this be embedded?",
                    dictionary: {
                      es: {
                        singular: "¿Dónde pueden insertarlo?"
                      },
                      "de-DE": {
                        singular: "Wo kann das eingebettet werden?"
                      },
                      "fr-FR": {
                        singular: "Où est-ce que cette vidéo peut être intégrée ?"
                      },
                      "ja-JP": {
                        singular: "どこに動画の埋め込みを許可しますか？"
                      },
                      "ko-KR": {
                        singular: "어디에 임베드할 수 있나요?"
                      },
                      "pt-BR": {
                        singular: "Onde este vídeo pode ser incorporado?"
                      },
                      "zh-CN": {
                        singular: "可以在哪里嵌入？"
                      }
                    }
                  })
                }), _v74]
              }), _v0?.privacy?.view === "nobody" && (0, _v7.jsx)(_v272, {}), (0, _v7.jsx)(_v269, {
                selectedEmbedPrivacy: _v66 ? _v223.EMBED_PRIVACY_VALUES.PRIVATE : _v26,
                shouldDisableAll: !!_v66 || _v25,
                hasUpsellsForFlatRateTiers: _v2?.hasUpsellsForFlatRateTiers,
                hasExtraEmbedOptions: _v2?.hasExtraEmbedOptions,
                onEmbedChangeClick: _v47,
                onEmbedUpsellClick: () => _v73("embed")
              }), _v26 !== _v223.EMBED_PRIVACY_VALUES.PRIVATE && !_v52 && (0, _v7.jsx)(_v212.Alert, {
                status: "info",
                mb: 0,
                "data-testid": "embed-music-notice",
                children: (0, _v7.jsx)(_v213.AlertDescription, {
                  children: (0, _v7.jsx)(_v88.Paragraph, {
                    size: "md",
                    children: (0, _v17.translate)({
                      singular: "Videos with your own uploaded music will be visible only to you on Vimeo and anywhere you embed them. If you wish for your video to be publicly viewable on Vimeo or as an embed, please use licensed music available on Vimeo.",
                      dictionary: {
                        es: {
                          singular: "Los videos en los que hayas subido música serán visibles solo para ti tanto en Vimeo como en todos los lugares en los que los insertes. Si deseas que tu video se pueda ver de forma pública en Vimeo o en los lugares en los que lo insertes, usa la música con licencia que está disponible en Vimeo."
                        },
                        "de-DE": {
                          singular: "Videos, die von dir hochgeladene Musik enthalten, sind nur für dich auf Vimeo und überall dort, wo du sie einbettest, sichtbar. Wenn du möchtest, dass dein Video auf Vimeo, oder wo auch immer du es einbettest, öffentlich zu sehen ist, verwende bitte lizenzierte Musik, die auf Vimeo verfügbar ist."
                        },
                        "fr-FR": {
                          singular: "Les vidéos contenant votre propre musique ne seront visibles que par vous sur Vimeo et partout où vous les intégrez. Si vous voulez que votre vidéo soit visible publiquement sur Vimeo ou en tant qu'intégration, veuillez utiliser des musiques sous licence disponibles sur Vimeo."
                        },
                        "ja-JP": {
                          singular: "自分でアップロードした音楽を含む動画は、Vimeo上と埋め込んだすべての場所で自分にのみ表示されます。Vimeo上と埋め込み動画として動画を一般公開したい場合は、Vimeoで利用可能なライセンスされた音楽を使用してください。"
                        },
                        "ko-KR": {
                          singular: "자신이 업로드한 음악을 사용한 동영상은 Vimeo 및 임베드 장소에서 나만 볼 수 있습니다. Vimeo와 임베드 장소에서 모두가 동영상을 볼 수 있도록 하려면 Vimeo에서 이용 가능한 라이선스 음악을 사용하시기 바랍니다."
                        },
                        "pt-BR": {
                          singular: "Os vídeos com sua própria música carregada serão visíveis apenas para você no Vimeo e em qualquer lugar que você incorporá-los. Se você deseja que seu vídeo seja visível publicamente no Vimeo ou como uma incorporação, use as músicas licenciadas disponíveis no Vimeo."
                        },
                        "zh-CN": {
                          singular: "如果视频中使用了您自己上传的音乐，则只能在 Vimeo 和您嵌入视频之处看到。如果希望您的视频能在 Vimeo 上公开观看或嵌入，请使用 Vimeo 上提供的授权音乐。"
                        }
                      }
                    })
                  })
                })
              })]
            }), _v0?.privacy?.embed && _v26 === _v223.EMBED_PRIVACY_VALUES.WHITELIST && (0, _v7.jsx)(_v208.VStack, {
              align: "stetch",
              gap: "2",
              children: (0, _v7.jsx)(_v263, {
                initialPrivacy: _v0?.privacy?.embed,
                onPrivacyChange: _v48,
                onDeletingLastDomain: _v0 => {
                  _v29(_v0);
                },
                onEmbedDomainsChange: _v0 => {
                  _v12(_v0);
                },
                initialDomains: _v0?.privacy?.embedDomains,
                isDisabled: _v25
              })
            })]
          }), (0, _v7.jsx)(_v253, {
            video: _v0,
            updateContentRating: _v13
          }), (0, _v7.jsxs)(_v208.VStack, {
            alignItems: "stretch",
            gap: "3",
            children: [(0, _v7.jsx)(_v218.Text, {
              variant: "heading-xs",
              color: "text-primary",
              children: (0, _v17.translate)({
                singular: "Viewer permissions",
                dictionary: {
                  es: {
                    singular: "Permisos de los espectadores"
                  },
                  "de-DE": {
                    singular: "Zuschauerberechtigungen"
                  },
                  "fr-FR": {
                    singular: "Autorisations du spectateur"
                  },
                  "ja-JP": {
                    singular: "視聴者権限"
                  },
                  "ko-KR": {
                    singular: "뷰어 권한"
                  },
                  "pt-BR": {
                    singular: "Permissões do espectador"
                  },
                  "zh-CN": {
                    singular: "观众权限"
                  }
                }
              })
            }), (0, _v7.jsxs)(_v215.FormControl, {
              display: "flex",
              justifyContent: "space-between",
              variant: "success",
              children: [(0, _v7.jsx)(_v216.FormLabel, {
                htmlFor: "allow-downloads-toggle",
                size: "sm",
                fontFamily: "body",
                mb: 0,
                children: (0, _v17.translate)({
                  singular: "Downloads",
                  dictionary: {
                    es: {
                      singular: "Descargas"
                    },
                    "fr-FR": {
                      singular: "Téléchargements"
                    },
                    "ja-JP": {
                      singular: "ダウンロード"
                    },
                    "ko-KR": {
                      singular: "다운로드"
                    },
                    "zh-CN": {
                      singular: "下载"
                    }
                  }
                })
              }), (0, _v7.jsxs)(_v112.Box, {
                children: [_v40 ? null : (0, _v7.jsx)(_v222.UpgradeBadge, {
                  onClick: () => _v73("download"),
                  name: "upload_home_downloads_upgrade_button",
                  location: "upload_home_privacy_drawer",
                  children: (0, _v17.translate)({
                    singular: "Upgrade",
                    dictionary: {
                      es: {
                        singular: "Actualizar"
                      },
                      "de-DE": {
                        singular: "Upgraden"
                      },
                      "fr-FR": {
                        singular: "Mettre à niveau"
                      },
                      "ja-JP": {
                        singular: "アップグレード"
                      },
                      "ko-KR": {
                        singular: "업그레이드"
                      },
                      "zh-CN": {
                        singular: "升级"
                      }
                    }
                  })
                }), (0, _v7.jsx)(_v214.Switch, {
                  isChecked: _v60.allowDownloads,
                  isDisabled: _v64 || !_v40,
                  id: "allow-downloads-toggle",
                  size: "md",
                  onChange: () => {
                    _v61({
                      type: "PRIVACY_DRAWER.TOGGLE_ALLOW_DOWNLOADS"
                    }), _v7(!_v60.allowDownloads);
                  },
                  placeContent: "space-between"
                })]
              })]
            }), (0, _v7.jsxs)(_v215.FormControl, {
              display: "flex",
              justifyContent: "space-between",
              children: [(0, _v7.jsx)(_v216.FormLabel, {
                htmlFor: "allow-comments-toggle",
                color: "text-primary",
                size: "sm",
                fontFamily: "body",
                mb: 0,
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
              }), (0, _v7.jsx)(_v214.Switch, {
                isChecked: _v60.allowComments,
                isDisabled: _v64,
                id: "allow-comments-toggle",
                size: "md",
                onChange: () => {
                  _v61({
                    type: "PRIVACY_DRAWER.TOGGLE_ALLOW_COMMENTS"
                  }), _v9 && _v9(!_v60.allowComments), _v136.BigPictureClient.sendEvent(new _v136.Event("vimeo.svv_click", 1, {
                    name: "action",
                    location: "privacy_drawer",
                    component: "save_comments_privacy",
                    page: "upload"
                  }));
                }
              })]
            }), (0, _v7.jsxs)(_v215.FormControl, {
              display: "flex",
              justifyContent: "space-between",
              children: [(0, _v7.jsxs)(_v48.Flex, {
                alignItems: "center",
                gap: "sm",
                children: [(0, _v7.jsx)(_v216.FormLabel, {
                  htmlFor: "allow-showcase-toggle",
                  color: "text-primary",
                  size: "sm",
                  fontFamily: "body",
                  mb: 0,
                  children: (0, _v17.translate)({
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
                  })
                }), (0, _v7.jsx)(_v211.Tooltip, {
                  label: (0, _v17.translate)({
                    singular: "Showcases, channels, or groups",
                    dictionary: {
                      es: {
                        singular: "Presentaciones, canales o grupos"
                      },
                      "de-DE": {
                        singular: "Präsentationen, Kanäle oder Gruppen"
                      },
                      "fr-FR": {
                        singular: "Présentations, chaînes ou groupes"
                      },
                      "ja-JP": {
                        singular: "ショーケース、チャンネル、またはグループ"
                      },
                      "ko-KR": {
                        singular: "쇼케이스, 채널 또는 그룹"
                      },
                      "pt-BR": {
                        singular: "Vitrines, canais ou grupos"
                      },
                      "zh-CN": {
                        singular: "展示、频道或群组"
                      }
                    }
                  }),
                  placement: "top",
                  maxWidth: (0, _v50.rem)(240),
                  children: (0, _v7.jsx)(_v48.Flex, {
                    children: (0, _v7.jsx)(_v219.InfoCircle, {
                      boxSize: "2xs"
                    })
                  })
                })]
              }), (0, _v7.jsx)(_v214.Switch, {
                isChecked: _v60.allowShowcase,
                isDisabled: _v64,
                id: "allow-showcase-toggle",
                size: "md",
                onChange: () => {
                  let _v0;
                  _v61({
                    type: "PRIVACY_DRAWER.TOGGLE_ALLOW_SHOWCASE"
                  }), _v8 && _v8(!_v60.allowShowcase), _v0 = "number" == typeof _v14 ? "manage" : "upload", _v136.BigPictureClient.sendEvent(new _v136.Event("vimeo.svv_click", 1, {
                    name: "action",
                    location: "privacy_drawer",
                    component: "toggle_showcase_privacy",
                    page: _v0
                  }));
                }
              })]
            })]
          })]
        }), !!_v34 && (0, _v7.jsx)(_v82.default, {
          apiUrl: _v18?.apiUrl,
          userConfig: {
            jwt: _v18?.jwt,
            userId: _v18?.user?.id
          },
          templateType: "default",
          onClose: () => _v35(null),
          modalConfig: _v38[_v34],
          tracking: {
            params: _v277[_v34],
            paywallTracking: _v278[_v34]
          }
        })]
      }) : null;
    },
    _v283 = _v0 => (0, _v7.jsx)(_v210.AnalyticsEventProvider, {
      eventData: {
        location: "privacy drawer",
        product: "privacy settings"
      },
      children: (0, _v7.jsx)(_v285, {
        ..._v0
      })
    }),
    _v284 = ({
      video: _v0,
      capabilities: _v1,
      hasRestrictedPrivacyOptions: _v2,
      uploadingFileSize: _v3,
      onAllowDownloadsChange: _v4,
      onAllowShareLinkChange: _v5,
      onAllowShowcaseChange: _v6,
      onAllowCommentsChange: _v7,
      onEmbedPrivacyChange: _v8,
      onPrivacyChange: _v9,
      canUpdatePrivacyToPublic: _v10,
      page: _v11,
      privacySettingLink: _v12,
      show: _v13,
      updateContentRating: _v14,
      onEmbedDomainsChange: _v15
    }) => (0, _v7.jsxs)(_v208.VStack, {
      width: "100%",
      height: "100%",
      minH: "0",
      children: [(0, _v7.jsx)(_v208.VStack, {
        flex: "1",
        overflowY: "auto",
        p: "4",
        gap: "md",
        w: "100%",
        alignItems: "stretch",
        children: (0, _v7.jsx)(_v282, {
          video: _v0,
          show: _v13,
          capabilities: _v1,
          canUpdatePrivacyToPublic: _v10,
          privacySettingLink: _v12,
          hasRestrictedPrivacyOptions: _v2,
          uploadingFileSize: _v3,
          page: _v11,
          onAllowDownloadsChange: _v4,
          onAllowShareLinkChange: _v5,
          onAllowShowcaseChange: _v6,
          onAllowCommentsChange: _v7,
          onPrivacyChange: _v9,
          onEmbedPrivacyChange: _v8,
          onEmbedDomainsChange: _v15,
          updateContentRating: _v14
        })
      }), (0, _v7.jsx)(_v112.Box, {
        p: "4",
        w: "100%",
        children: (0, _v7.jsxs)(_v87.Button, {
          variant: "secondary",
          width: "100%",
          as: "a",
          href: "/settings/videos/upload_defaults",
          target: "_blank",
          onClick: () => {
            ((_v0, _v1 = 1) => _v136.BigPictureClient.sendEvent(new _v136.Event("vimeo.svv_click", _v1 ?? 1, _v0)))({
              component: "open_upload_defaults",
              location: "privacy_drawer",
              name: "open",
              page: _v11
            });
          },
          children: [(0, _v7.jsx)(_v209.PopOut, {
            fontSize: 20
          }), (0, _v17.translate)({
            singular: "Set defaults",
            dictionary: {
              es: {
                singular: "Establecer valores predeterminados"
              },
              "de-DE": {
                singular: "Standardwerte festlegen"
              },
              "fr-FR": {
                singular: "Définir les paramètres par défaut"
              },
              "ja-JP": {
                singular: "デフォルトを設定"
              },
              "ko-KR": {
                singular: "기본값 설정"
              },
              "pt-BR": {
                singular: "Definir padrões"
              },
              "zh-CN": {
                singular: "设置默认值"
              }
            }
          })]
        })
      })]
    }),
    _v285 = _v0 => {
      let {
        onClose: _v1,
        show: _v2
      } = _v0;
      return (0, _v7.jsxs)(_v208.VStack, {
        alignItems: "start",
        h: "100%",
        children: [(0, _v7.jsxs)(_v205.HStack, {
          justifyContent: "space-between",
          width: "100%",
          p: "4",
          children: [(0, _v7.jsx)(_v132.Header, {
            size: "sm",
            children: (0, _v17.translate)({
              singular: "Privacy",
              dictionary: {
                es: {
                  singular: "Privacidad"
                },
                "de-DE": {
                  singular: "Datenschutz"
                },
                "fr-FR": {
                  singular: "Confidentialité "
                },
                "ja-JP": {
                  singular: "プライバシー"
                },
                "ko-KR": {
                  singular: "프라이버시"
                },
                "pt-BR": {
                  singular: "Privacidade"
                },
                "zh-CN": {
                  singular: "隐私"
                }
              }
            })
          }), (0, _v7.jsx)(_v206.IconButton, {
            "aria-label": "close-icon",
            variant: "tertiary",
            size: "sm",
            icon: (0, _v7.jsx)(_v16.CloseX, {}),
            onClick: _v1
          })]
        }), _v2 ? (0, _v7.jsx)(_v284, {
          ..._v0
        }) : (0, _v7.jsx)(_v113.Center, {
          h: "100%",
          w: "100%",
          children: (0, _v7.jsx)(_v207.Spinner, {})
        })]
      });
    };
  var _v286 = _v0.i(0);
  let _v287 = [_v81.STATES.ATTACHING, _v81.STATES.UPLOADING, _v81.STATES.RESUMING, _v81.STATES.REROUTING],
    _v288 = _v0 => _v0.state === _v81.STATES.COMPLETED || _v287.includes(_v0.state),
    _v289 = (_v0, _v1) => _v0 ? _v0.teamConfigs.find(_v0 => _v0.ownerId === _v1) : void 0;
  async function _v290(_v0, _v1) {
    let _v2 = {
        method: _v1.method || "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/vnd.vimeo.*;version=3.4.1",
          ..._v1.headers
        },
        body: _v1.body || void 0
      },
      _v3 = await fetch(_v0, _v2);
    if (!_v3.ok) throw Error(`Request failed: ${_v3.status} ${_v3.statusText}`);
    let _v4 = await _v3.json();
    return (0, _v286.standardizeResponseObject)(_v4);
  }
  let _v291 = ({
    privacy: _v0,
    isLoading: _v1,
    capabilities: _v2,
    teamOwnersId: _v3,
    isPrivateToMeFolderSelected: _v4,
    contentRating: _v5,
    uploadPageConfig: _v6,
    uploadingFileSize: _v7,
    setPrivacy: _v8,
    updateContentRating: _v9,
    onClose: _v10
  }) => {
    let _v11 = (0, _v11.useContext)(_v85.ViewerContext),
      {
        trackUploadLinkPrivacyChanged: _v12
      } = _v77(),
      _v13 = _v3 || _v11?.user?.id,
      _v14 = _v3 === _v13,
      _v15 = _v289(_v6, _v3),
      _v16 = !(!_v14 && _v4 && _v0?.view !== "anybody"),
      {
        allowedPrivacies: _v17
      } = (0, _v204.useUserAllowedPrivacies)({
        teamOwnersId: _v3,
        teamPermissionLevel: _v15?.permissionLevel ?? null
      });
    return (0, _v7.jsx)(_v283, {
      video: {
        privacy: {
          ..._v0,
          view: _v0?.view ?? "nobody"
        },
        contentRating: _v5,
        password: _v0?.password,
        allowedPrivacies: _v17
      },
      capabilities: {
        ...(_v2 || {}),
        enterprise: _v2?.hasEnterprise
      },
      isOwner: _v14,
      uploadingFileSize: _v7,
      onAllowDownloadsChange: _v0 => _v8({
        download: _v0
      }),
      onAllowShowcaseChange: _v0 => _v8({
        add: _v0
      }),
      onEmbedPrivacyChange: _v0 => _v8({
        embed: _v0
      }),
      onAllowShareLinkChange: _v0 => _v8({
        allowShareLink: _v0
      }),
      onAllowCommentsChange: _v0 => _v8({
        comments: _v0 ? "anybody" : "nobody"
      }),
      onPrivacyChange: (_v0, _v1) => {
        _v0 !== _v0?.view && _v12({
          uploadLinkPrivacyNewValue: _v0
        }), _v8({
          view: _v0,
          password: _v1
        });
      },
      onEmbedDomainsChange: _v0 => _v8({
        embedDomains: _v0
      }),
      show: !_v1,
      privacySettingLink: "/settings/videos/upload_defaults",
      canUpdatePrivacyToPublic: _v16,
      hasRestrictedPrivacyOptions: _v6.restrictedPrivacyOptions,
      updateContentRating: _v9,
      page: "upload",
      onClose: _v10
    });
  };
  var _v292 = _v0.i(0),
    _v293 = _v0.i(0),
    _v294 = _v0.i(0),
    _v295 = _v0.i(0),
    _v296 = _v0.i(0),
    _v297 = _v0.i(0),
    _v298 = _v0.i(0);
  let _v299 = ({
    disabled: _v0 = !1,
    onClick: _v1,
    privacy: _v2
  }) => {
    let _v3 = (0, _v8.useRouter)(),
      _v4 = (0, _v74.useViewer)(),
      {
        settings: _v5
      } = (0, _v298.useOrionSettings)(),
      _v6 = (0, _v225.useDefaultPrivacyOptions)(_v4, !1).find(_v0 => _v0.privacy === _v2),
      _v7 = (0, _v109.useMediaQueryVisibility)(`screen and (min-width: ${(0, _v50.rem)(0)})`),
      {
        icon: _v8,
        label: _v9
      } = (0, _v11.useMemo)(() => ({
        icon: _v5.privacy_settings_new_copy && "disable" === _v2 ? (0, _v7.jsx)(_v297.Code, {
          boxSize: "xs"
        }) : _v223.VIDEO_PRIVACY_ICON_MAP[_v2]?.icon ?? ("ptv" === _v2 || "ptvhide" === _v2 ? (0, _v7.jsx)(_v296.OnDemand, {}) : (0, _v7.jsx)(_v266.Lock, {})),
        label: _v6?.title ?? ("ptv" === _v2 || "ptvhide" === _v2 ? "VOD" : "Privacy")
      }), [_v2, _v6?.title, _v5.privacy_settings_new_copy]);
    return (0, _v7.jsx)(_v211.Tooltip, {
      placement: "bottom",
      label: (0, _v17.translate)({
        singular: "Manage privacy",
        dictionary: {
          es: {
            singular: "Gestionar privacidad"
          },
          "de-DE": {
            singular: "Datenschutzeinstellungen verwalten"
          },
          "fr-FR": {
            singular: "Gérer la confidentialité"
          },
          "ja-JP": {
            singular: "プライバシーを管理"
          },
          "ko-KR": {
            singular: "프라이버시 관리"
          },
          "pt-BR": {
            singular: "Gerenciar privacidade"
          },
          "zh-CN": {
            singular: "管理隐私"
          }
        }
      }),
      children: (0, _v7.jsx)(_v7.Fragment, {
        children: _v7 ? (0, _v7.jsx)(_v87.Button, {
          isDisabled: _v0,
          leftIcon: _v8,
          onClick: _v1,
          variant: _v3.pathname.includes("/privacy") ? "secondary" : "tertiary",
          id: "privacy-status-button",
          "data-id": "header_video_privacy_button",
          "aria-label": "privacy-status",
          children: _v9
        }) : (0, _v7.jsx)(_v206.IconButton, {
          isDisabled: _v0,
          icon: _v8,
          onClick: _v1,
          variant: _v3.pathname.includes("/privacy") ? "secondary" : "tertiary",
          id: "privacy-status-button",
          "data-id": "header_video_privacy_button",
          "aria-label": "privacy-status"
        })
      })
    });
  };
  var _v300 = _v0.i(0);
  let _v301 = () => {
      let _v0 = (0, _v114.useColorModeValue)("slate.800", "white");
      return (0, _v7.jsx)(_v300.VimeoV, {
        height: (0, _v50.rem)(26.7),
        color: _v0
      });
    },
    _v302 = (0, _v86.default)(async () => {
      let {
        SearchField: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v303 = ({
      isLoadingTeamInfo: _v0 = !1,
      onPrivacyClick: _v1,
      privacy: _v2,
      teamLogoUrl: _v3 = null,
      teamUsersRole: _v4
    }) => {
      let _v5 = (0, _v11.useContext)(_v85.ViewerContext);
      return (0, _v7.jsxs)(_v51.Navigation, {
        id: "header",
        zIndex: "1001",
        children: [(0, _v7.jsx)(_v51.Navigation.LeftContent, {
          children: !_v0 && (0, _v7.jsx)(_v294.default, {
            vimeoLogo: (0, _v7.jsx)(_v301, {}),
            teamLogoUrl: _v3
          })
        }), (0, _v7.jsxs)(_v51.Navigation.RightContent, {
          children: [(0, _v7.jsx)(_v299, {
            disabled: _v4 === _v295.TeamUserPermissionLevel.Uploader,
            onClick: _v1,
            privacy: _v2
          }), (0, _v7.jsx)(_v302, {
            withToggle: !0
          }), _v5?.user && (0, _v7.jsx)(_v293.AccountMenu, {})]
        })]
      });
    };
  function _v304() {
    return (0, _v7.jsx)(_v212.Alert, {
      status: "info",
      maxWidth: ["90%", "90%", "90%", (0, _v50.rem)(880), (0, _v50.rem)(0)],
      marginTop: 200,
      marginBottom: 0,
      children: (0, _v7.jsx)(_v213.AlertDescription, {
        children: (0, _v17.translate)({
          singular: "{strong}Heads up:{/strong} this video will be private. Only the account’s owner and admins can change its privacy settings.",
          replacements: {
            strong: _v0 => (0, _v7.jsx)("strong", {
              children: _v0
            }, "heads-up")
          },
          dictionary: {
            es: {
              singular: "{strong}Atención{/strong}: Este video pasará a ser privado. Solo el propietario y los administradores de la cuenta podrán cambiar su configuración de privacidad."
            },
            "de-DE": {
              singular: "{strong}Achtung:{/strong} Dieses Video wird nur privat zu sehen sein. Nur der Kontoinhaber und die Administratoren können die Datenschutzeinstellungen ändern."
            },
            "fr-FR": {
              singular: "{strong}Attention :{/strong} cette vidéo sera privée. Seul le détenteur du compte ainsi que ses gestionnaires pourront en modifier les paramètres de confidentialité."
            },
            "ja-JP": {
              singular: "{strong}注意：{/strong}この動画はプライベート公開になります。アカウント所有者と管理者だけがプライバシー設定を変更することができます。"
            },
            "ko-KR": {
              singular: "{strong}알림:{/strong} 이 동영상은 비공개 처리됩니다. 계정 소유자와 관리자만 프라이버시 설정을 변경할 수 있습니다."
            },
            "pt-BR": {
              singular: "{strong}Atenção:{/strong} este vídeo será privado. Somente o proprietário e os administradores da conta podem alterar suas configurações de privacidade."
            },
            "zh-CN": {
              singular: "{strong}注意：{/strong}此视频将保留为私人视频。只有账户所有者及其管理员可以更改其隐私设置。"
            }
          }
        })
      })
    });
  }
  var _v305 = _v0.i(0),
    _v306 = _v0.i(0),
    _v307 = _v0.i(0),
    _v308 = _v0.i(0),
    _v309 = _v0.i(0);
  let _v310 = `${_v309.Duration.xl}s cubic-bezier(${_v309.Easing["basic-entrance"].join(", ")})`,
    _v311 = ({
      children: _v0,
      side: _v1 = "left",
      isTwoColumn: _v2,
      portalRef: _v3,
      isOpen: _v4,
      onClose: _v5
    }) => {
      let _v6,
        _v7 = (0, _v305.useBreakpointValue)({
          base: "bottom",
          md: _v1
        }),
        _v8 = _v3?.current ? _v3.current.getBoundingClientRect().top : 64,
        _v9 = (_v6 = _v3?.current ? _v3.current.getBoundingClientRect().left : 80, {
          right: {
            margin: (0, _v50.rem)(16),
            top: `${(0, _v50.rem)(_v8)} !important`
          },
          left: {
            margin: (0, _v50.rem)(16),
            ml: 0,
            top: `${(0, _v50.rem)(_v8)} !important`,
            left: `${(0, _v50.rem)(_v6)} !important`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "transparent"
          },
          bottom: {
            maxW: "100vw",
            mb: 0,
            top: `${(0, _v50.rem)(_v8)} !important`
          },
          landscape: {
            top: (0, _v50.rem)(64)
          }
        }),
        _v10 = {
          '&[data-placement="right"]': _v9.right,
          '&[data-placement="left"]': _v9.left,
          '&[data-placement="bottom"]': _v9.bottom,
          "@media screen and (max-width: 767px) and (orientation: landscape)": {
            '&[data-placement="bottom"]': _v9.landscape
          },
          "z-index": "var(--vimeo-zIndices-dropdown)"
        },
        _v11 = (0, _v7.jsx)(_v306.Drawer, {
          isOpen: _v4,
          placement: _v7,
          onClose: _v5,
          blockScrollOnMount: !1,
          trapFocus: !1,
          children: (0, _v7.jsx)(_v307.DrawerContent, {
            maxW: _v2 ? (0, _v50.rem)(720) : (0, _v50.rem)(360),
            sx: _v10,
            transition: `max-width ${_v310}`,
            containerProps: {
              zIndex: "var(--vimeo-zIndices-dropdown)"
            },
            children: _v0
          })
        });
      return _v3 && _v3.current ? (0, _v7.jsx)(_v308.Portal, {
        containerRef: _v3,
        children: _v11
      }) : _v11;
    };
  _v15.default.div.withConfig({
    displayName: "UI__PageContainer",
    componentId: "sc-ec02b048-0"
  })`
  background-color: ${({
    theme: _v0
  }) => _v0.content.background};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
  let _v312 = _v15.default.div.withConfig({
      displayName: "UI__Content",
      componentId: "sc-ec02b048-1"
    })`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;

  @media screen and (max-width: ${(0, _v50.rem)(480)}) {
    overflow: hidden;
  }
`,
    _v313 = _v15.default.div.withConfig({
      displayName: "UI__MainContent",
      componentId: "sc-ec02b048-2"
    })`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: ${(0, _v50.rem)(480)}) {
    padding-bottom: ${(0, _v50.rem)(100)};
  }
`,
    _v314 = _v15.default.div.withConfig({
      displayName: "UI__ErrorContainer",
      componentId: "sc-ec02b048-3"
    })`
  position: relative;
  margin-top: ${(0, _v50.rem)(-16)};
  z-index: 4;
  display: flex;
  justify-content: center;
  top: ${(0, _v50.rem)(25)};
`;
  var _v315 = _v0.i(0),
    _v316 = _v0.i(0);
  let _v317 = "modal_type_upgrade",
    _v318 = _v0 => {
      var _v1;
      let {
          teamOwnersId: _v2,
          uploadPageConfig: _v3,
          privacy: _v4,
          setPrivacy: _v5,
          uploadRoute: _v6,
          updateContentRating: _v7
        } = _v0,
        _v8 = (0, _v8.useRouter)(),
        _v9 = _v0.isTranslatorOnboarding ?? !1,
        [_v10, _v11] = (0, _v11.useState)(""),
        [_v12, _v13] = (0, _v11.useState)("quota"),
        [_v14, _v15] = (0, _v11.useState)(!0),
        [_v16, _v17] = (0, _v11.useState)(!1),
        [_v18, _v19] = (0, _v11.useState)(!1),
        [_v20, _v21] = (0, _v11.useState)(""),
        {
          uploads: _v22,
          addShouldUploadStartCallback: _v23,
          clearAll: _v24
        } = (0, _v80.useUploader)(),
        _v25 = _v289(_v3, _v2),
        _v26 = (0, _v11.useContext)(_v85.ViewerContext),
        _v27 = _v2 || _v26?.user?.id,
        {
          quota: _v28
        } = _v3,
        _v29 = _v28.user?.uploadQuota?.space?.unit === "video_count",
        _v30 = (0, _v70.useIsMobile)(),
        _v31 = _v100[_v6],
        _v32 = _v22.length ? _v22.find(_v0 => _v0.state === _v81.STATES.FAILED) : null,
        _v33 = _v32 && _v32.error || "",
        _v34 = _v25?.permissionLevel === "Uploader",
        {
          data: _v35
        } = (0, _v72.useGetUserTeam)(() => _v27 ? {
          where: {
            userId: _v27
          },
          select: ["accentColor", "pictures.sizes", "teamName"],
          query: {
            sizes: "76"
          }
        } : null),
        _v36 = _v35 && (0, _v71.isTeamInfo)(_v35) && _v35.pictures?.sizes ? ((_v1 = _v35.pictures.sizes)[3] ? _v1[3] : _v1[_v1.length - 1])?.link : null,
        {
          capabilities: _v37,
          loading: _v38
        } = (0, _v69.useCapability)(["canAllowDownloads", "canUnlistVideo", "canHideVideos", "hasExtraEmbedOptions", "hasPrivateModeOff", "hasProEmbedOptions", "hasVideoPasswordPrivacyUpsell", "hasCreation", "hasEnterprise"], _v2),
        {
          isSidePanelOpen: _v39,
          onSidePanelOpen: _v40,
          onSidePanelClose: _v41
        } = (() => {
          let {
              isOpen: _v0,
              onOpen: _v1,
              onClose: _v2
            } = (0, _v315.useDisclosure)(),
            _v3 = (0, _v8.useRouter)(),
            _v4 = (0, _v70.useIsMobile)(),
            {
              drawerDefaultOpen: _v5,
              setDrawerDefaultOpen: _v6
            } = (() => {
              let [_v0, _v1] = (0, _v316.default)("upload_side_drawer", !1);
              return {
                drawerDefaultOpen: _v0,
                setDrawerDefaultOpen: _v1
              };
            })();
          return (0, _v11.useEffect)(() => {
            if (_v3.asPath.includes("/privacy")) {
              let [_v0, _v1] = _v3.asPath.split("?"),
                _v2 = _v0.replace(/\/privacy$/, ""),
                _v3 = _v1 ? `${_v2}?${_v1}` : _v2;
              _v3.replace(_v3, void 0, {
                shallow: !0
              }), _v1();
            }
          }, [_v3, _v3.asPath, _v1]), (0, _v11.useEffect)(() => {
            !_v5 || _v0 || _v4 || _v1();
          }, [_v5, _v0, _v1, _v4]), {
            isSidePanelOpen: _v0,
            onSidePanelOpen: () => {
              _v1(), _v5 || _v6(!0);
            },
            onSidePanelClose: () => {
              _v2(), _v5 && _v6(!1);
            }
          };
        })(),
        {
          trackUploadPageDisplayed: _v42
        } = _v77(),
        _v43 = (0, _v11.useCallback)(_v0 => {
          let _v1 = (0, _v73.buildUpgradePlanUrl)({
            paywallTrigger: "upload_page_quota_limit_button",
            paywallLocation: "upload_page",
            paywallFeature: _v0
          }, {
            feature: "quota",
            location: "page_area",
            page: "upload_page",
            paywall: "1",
            upsell: "at_limit_quota"
          });
          (0, _v83.launchLateStagePaywallFromUpgradePlanUrl)(_v1) || _v8.push(_v1);
        }, [_v8]),
        _v44 = (0, _v11.useCallback)(_v0 => {
          _v17(!0);
          let _v1 = Array.from(_v0),
            _v2 = _v1.find(_v0 => {
              var _v1;
              return !("number" == typeof (_v1 = _v0.size) && !isNaN(_v1));
            });
          if (_v2 && "link" in _v2) return _v21(_v2.message || _v81.ERRORS.PULL_FAILED), !1;
          let _v3 = _v29 ? _v1.length : _v1.reduce((_v0, _v1) => _v0 + (_v1.size || 0), 0),
            _v4 = _v28.used + _v3,
            _v5 = !!_v28.totalCap && (_v29 ? _v3 > _v28.totalCap.free : _v3 >= _v28.totalCap.free),
            _v6 = "number" == typeof _v28.dailyCountAvailable && _v1.length > _v28.dailyCountAvailable,
            _v7 = _v28.available >= _v4 && !_v5 && !_v6;
          if (!_v7) {
            var _v8;
            let _v0,
              _v1,
              _v2 = _v29 || _v6 || !_v5 ? "quota" : "storage_limit";
            _v13(_v2);
            let _v3 = _v5 ? _v101.Lifetime : _v101.Periodic;
            _v30 || _v11(_v317), _v8 = _v26?.user?.uploadQuota, _v0 = {
              product: "Upload",
              path: location.pathname,
              page: "/upload/videos",
              location: "quota_error_modal",
              weekly_quota_percent_used: _v8 && _v152(_v8.periodic.used) && _v152(_v8.periodic.max) ? _v151(_v8.periodic.used, _v8.periodic.max) : null,
              total_quota_percent_used: _v8 && _v152(_v8.lifetime.used) && _v152(_v8.lifetime.max) ? _v151(_v8.lifetime.used, _v8.lifetime.max) : null
            }, _v1 = new _v137.Event("vimeo.view_quota_upsell", 2, {
              ..._v0,
              upsell: _v5 ? "total_quota" : "weekly_quota",
              file_size: _v3,
              user_initiated: !1
            }), _v136.BigPictureClient.sendEvent(_v1);
            let _v4 = _v0[0];
            _v290(`/upload_action?action=${_v3}`, {
              method: "POST",
              headers: {
                "X-Requested-With": "XMLHttpRequest",
                Authorization: `jwt ${_v26?.jwt}`
              },
              body: JSON.stringify({
                file_name: _v4.name,
                file_size: _v4.size,
                total_size: _v3,
                file_count: _v0.length,
                user_id: _v27,
                token: _v26?.xsrft
              })
            }).then(() => {
              _v30 && _v43(_v2);
            });
          }
          if (_v7) {
            let _v0 = _v26?.user?.uploadQuota?.restricted;
            if (_v0?.max != null) {
              let _v0 = _v4?.view ?? "anybody",
                _v1 = _v4?.embed ?? "public";
              if ("anybody" !== _v0 || "private" !== _v1) {
                let _v0 = _v1.reduce((_v0, _v1) => _v0 + (_v1.size || 0), 0);
                if ((_v0.used ?? 0) + _v0 > _v0.max) return _v13("storage_limit"), _v30 ? _v43("storage_limit") : _v11(_v317), !1;
              }
            }
          }
          return _v7;
        }, [_v29, _v28.used, _v28.totalCap, _v28.dailyCountAvailable, _v28.available, _v26?.user?.uploadQuota, _v26?.jwt, _v26?.xsrft, _v27, _v30, _v43, _v4?.view, _v4?.embed]);
      return (0, _v11.useEffect)(() => {
        _v27 && _v136.BigPictureClient.sendEvent(new _v137.Event("visit_upload_page", 2, {
          referrer: document.referrer,
          entry_page: (0, _v138.getEntryPage)(document.referrer || ""),
          url: document.URL,
          page_version: "single_video_view",
          product: "Upload"
        })), _v15(!1);
      }, [_v14, _v27]), (0, _v78.usePicoEffect)(() => {
        if (!_v27) return !1;
        _v42({
          referrerPage: function () {
            if ("u" < typeof document || !document.referrer) return "unknown";
            try {
              let _v0 = new URL(document.referrer).pathname;
              if ("/" === _v0 || "/home" === _v0 || "/home/" === _v0) return "homepage";
              return _v0;
            } catch {
              return "unknown";
            }
          }(),
          uploadActiveTab: _v99[_v31] ?? "upload"
        });
      }, [_v27], {
        once: !0
      }), (0, _v11.useEffect)(() => {
        _v292.FatalAttraction.trackClick({
          container: "svv",
          component: "tabs",
          keyword: _v31
        });
      }, [_v31]), (0, _v11.useEffect)(() => {
        if (_v33) {
          if (_v33.includes("Your account doesn't have enough free space to upload this video") || _v33.includes("You have reached the storage limit for private or embeddable videos")) {
            _v13("storage_limit"), _v30 ? _v43("storage_limit") : _v11(_v317);
            return;
          }
          _v21(_v33.toLowerCase().includes("invalid parameter") ? (0, _v17.translate)({
            singular: "Your upload settings contain an invalid value. If you're on a team, contact your team administrator.",
            dictionary: {
              es: {
                singular: "Su configuración de carga contiene un valor no válido. Si forma parte de un equipo, póngase en contacto con el administrador de su equipo."
              },
              "de-DE": {
                singular: "Ihre Upload-Einstellungen enthalten einen ungültigen Wert. Wenn Sie Teil eines Teams sind, wenden Sie sich an Ihren Teamadministrator."
              },
              "fr-FR": {
                singular: "Vos paramètres de téléversement contiennent une valeur non valide. Si vous faites partie d'une équipe, contactez l'administrateur de votre équipe."
              },
              "ja-JP": {
                singular: "アップロード設定に無効な値が含まれています。チームに所属している場合は、チーム管理者にお問い合わせください。"
              },
              "ko-KR": {
                singular: "업로드 설정에 잘못된 값이 포함되어 있습니다. 팀에 속해 있는 경우 팀 관리자에게 문의하세요."
              },
              "pt-BR": {
                singular: "Suas configurações de upload contêm um valor inválido. Se você faz parte de uma equipe, entre em contato com o administrador da equipe."
              },
              "zh-CN": {
                singular: "您的上传设置包含无效值。如果您在团队中，请联系团队管理员。"
              }
            }
          }) : _v33);
        }
      }, [_v33, _v30, _v43]), (0, _v11.useEffect)(() => {
        _v22 && _v24();
      }, []), (0, _v11.useEffect)(() => {
        let _v0 = _v22.find(_v288);
        _v0?.clipId && _v16 && _v8.push((({
          clipId: _v0,
          isMobile: _v1,
          isTranslatorOnboarding: _v2,
          search: _v3
        }) => {
          if (_v2) return "/library?utm_campaign=translator_onboarding";
          let _v4 = _v3.includes("source=gif");
          return `/manage/videos/${_v0}${!_v1 && _v4 ? "?tool=gifs" : ""}`;
        })({
          clipId: _v0.clipId,
          isMobile: _v30,
          isTranslatorOnboarding: _v9,
          search: window.location.search
        }));
      }, [_v8, _v22, _v30, _v16, _v9]), (0, _v11.useEffect)(() => {
        _v23(_v44);
      }, [_v23, _v44]), (0, _v7.jsx)(_v84.PullUploadProvider, {
        pickerTokens: _v3.pickerTokens,
        children: (0, _v7.jsxs)(_v48.Flex, {
          bgColor: "background",
          flexGrow: "1",
          align: "center",
          direction: "column",
          pos: "relative",
          children: [(0, _v7.jsx)(_v303, {
            onPrivacyClick: () => {
              var _v0;
              let _v1;
              _v0 = _v26?.teamUser, _v1 = {
                ...(0, _v142.buildProductAnalyticsBpContext)({
                  product: "single_video_view",
                  feature: "privacy",
                  location: "header"
                }),
                ...(0, _v140.buildActionBpContext)({
                  feature: "privacy",
                  action_type: "click"
                }),
                ...(0, _v148.buildWebBpContext)({
                  page_name: "single_video_view_manage",
                  location: void 0 ?? "sidebar",
                  referrer_page_name: "single_video_view_manage",
                  referrer: (0, _v138.getEntryPage)(document.referrer || ""),
                  path: window.location.pathname,
                  target: null,
                  copy: null
                }),
                ...(0, _v143.buildTeamBpContextFromTeamUser)(_v0 ?? void 0),
                ...void 0
              }, (0, _v232.sendBpEventWithContexts)(_v39 ? "vimeo.close_privacy_drawer" : "vimeo.open_privacy_drawer", _v1), _v39 ? _v41() : _v40();
            },
            privacy: _v4?.view || "nobody",
            teamLogoUrl: _v36,
            teamUsersRole: _v25?.permissionLevel
          }), _v10 === _v317 && _v26 && (0, _v7.jsx)(_v82.default, {
            apiUrl: _v26.apiUrl,
            userConfig: {
              jwt: _v26.jwt,
              userId: _v26.user?.id
            },
            templateType: "default",
            modalConfig: "storage_limit" === _v12 ? {
              headerText: (0, _v17.translate)({
                singular: "You've reached your storage limit",
                dictionary: {
                  es: {
                    singular: "Alcanzaste el límite de almacenamiento."
                  },
                  "de-DE": {
                    singular: "Du hast dein Speicherlimit erreicht."
                  },
                  "fr-FR": {
                    singular: "Vous avez atteint votre limite de stockage"
                  },
                  "ja-JP": {
                    singular: "ストレージ容量の上限に達しました"
                  },
                  "ko-KR": {
                    singular: "저장소 한도에 도달했습니다."
                  },
                  "pt-BR": {
                    singular: "Você atingiu seu limite de armazenamento"
                  }
                }
              }),
              subHeaderText: (0, _v17.translate)({
                singular: "Upgrade your plan to get more storage",
                dictionary: {
                  es: {
                    singular: "Actualiza tu plan para obtener más espacio de almacenamiento"
                  },
                  "de-DE": {
                    singular: "Aktualisieren Sie Ihren Tarif, um mehr Speicherplatz zu erhalten"
                  },
                  "fr-FR": {
                    singular: "Passez à un forfait supérieur pour obtenir plus d'espace de stockage"
                  },
                  "ja-JP": {
                    singular: "ストレージを増やすにはプランをアップグレードしてください"
                  },
                  "ko-KR": {
                    singular: "저장 공간을 늘리려면 요금제를 업그레이드하세요"
                  },
                  "pt-BR": {
                    singular: "Atualize seu plano para obter mais armazenamento"
                  },
                  "zh-CN": {
                    singular: "升级您的套餐以获得更多存储空间"
                  }
                }
              })
            } : {
              headerText: (0, _v17.translate)({
                singular: "You've reached the video limit",
                dictionary: {
                  es: {
                    singular: "Has alcanzado el límite de vídeos"
                  },
                  "de-DE": {
                    singular: "Sie haben das Video-Limit erreicht"
                  },
                  "fr-FR": {
                    singular: "Vous avez atteint la limite de vidéos"
                  },
                  "ja-JP": {
                    singular: "動画の上限に達しました"
                  },
                  "ko-KR": {
                    singular: "동영상 한도에 도달했습니다"
                  },
                  "pt-BR": {
                    singular: "Você atingiu o limite de vídeos"
                  },
                  "zh-CN": {
                    singular: "您已达到视频上限"
                  }
                }
              }),
              subHeaderText: (0, _v17.translate)({
                singular: "To get more videos, upgrade your account",
                dictionary: {
                  es: {
                    singular: "Para obtener más videos, actualice su cuenta"
                  },
                  "de-DE": {
                    singular: "Nimm ein Upgrade vor, um weitere Videos hochzuladen"
                  },
                  "fr-FR": {
                    singular: "Pour obtenir plus de vidéos, mettez votre compte à niveau."
                  },
                  "ja-JP": {
                    singular: "動画をさらに視聴するには、アカウントをアップグレードしてください"
                  },
                  "ko-KR": {
                    singular: "더 많은 동영상을 보려면 계정을 업그레이드하세요"
                  },
                  "pt-BR": {
                    singular: "Para ter direito a mais vídeos, faça upgrade da sua conta"
                  },
                  "zh-CN": {
                    singular: "要上传更多视频，请升级您的账户"
                  }
                }
              })
            },
            onClose: () => {
              _v11(""), _v13("quota");
            },
            tracking: {
              params: {
                feature: "storage_limit" === _v12 ? "storage" : "quota",
                location: "page_area",
                page: "upload_page",
                upsell_name: "storage_limit" === _v12 ? "upload_storage_limit" : "at_limit_quota"
              },
              paywallTracking: {
                paywallTrigger: "upload_page_quota_limit_button",
                paywallLocation: "upload_page",
                paywallType: "popup",
                paywallFeature: _v12
              }
            }
          }), (0, _v7.jsxs)(_v312, {
            children: [_v34 && (0, _v7.jsx)(_v304, {}), _v20 && (0, _v7.jsx)(_v314, {
              children: (0, _v7.jsx)(_v79.UploadErrorMessage, {
                error: _v20,
                onClose: () => _v21("")
              })
            }), (0, _v7.jsx)(_v313, {
              children: (0, _v7.jsx)(_v102, {
                hasNotice: _v20 && _v20.length > 0 || _v34,
                children: (0, _v7.jsx)(_v203, {
                  ..._v0,
                  teamLogoUrl: _v36,
                  capabilities: _v37,
                  isLoading: _v38,
                  upsellModalType: _v10,
                  error: _v20,
                  setisPrivateToMeFolderSelected: _v19
                })
              })
            }), (0, _v7.jsx)(_v311, {
              isOpen: _v39,
              onClose: _v41,
              side: "right",
              children: (0, _v7.jsx)(_v291, {
                isPrivateToMeFolderSelected: _v18,
                capabilities: _v37 ?? null,
                isLoading: _v38,
                teamOwnersId: _v2,
                setPrivacy: _v5,
                privacy: _v4,
                uploadPageConfig: _v3,
                uploadingFileSize: _v22.length ? _v22.reduce((_v0, _v1) => _v0 + (_v1.initialSize || 0), 0) : void 0,
                updateContentRating: _v7,
                onClose: _v41
              })
            })]
          })]
        })
      });
    },
    _v319 = {
      add: !1,
      comments: "nobody",
      download: !1,
      embed: "private",
      view: "nobody"
    },
    _v320 = ({
      initialTeamId: _v0,
      defaultFolderId: _v1,
      isTranslatorOnboarding: _v2 = !1
    }) => {
      let _v3 = (0, _v8.useRouter)(),
        _v4 = _v3.query?.params?.[0] || _v98.UPLOAD,
        [_v5, _v6] = (0, _v11.useState)(_v0),
        [_v7, _v8] = (0, _v11.useState)(),
        [_v9, _v10] = (0, _v11.useState)(),
        {
          loading: _v11,
          config: _v12,
          error: _v13
        } = ((_v0, _v1) => {
          let _v2 = (0, _v11.useContext)(_v63.CacheContext),
            [_v3, _v4] = (0, _v11.useReducer)(_v67, {
              loading: !0,
              config: _v64,
              error: null
            });
          return (0, _v11.useEffect)(() => {
            let _v0 = async () => {
              let _v0 = await fetch(`/upload_action?action=get_config_data&user_id=${_v0}${_v1 ? `&folder_id=${_v1}` : ""}`, {
                  headers: {
                    "X-Requested-With": "XMLHttpRequest"
                  }
                }),
                _v1 = await _v0.json();
              if (_v1.hasOwnProperty("display_message")) _v4({
                type: "ERROR",
                payload: _v1
              });else {
                let _v0 = (0, _v62.camelizeDeep)(_v1);
                _v2?.set(_v68(_v0), _v0), _v4(_v66(_v0));
              }
            };
            if (_v0) {
              let _v0 = _v2?.get(_v68(_v0));
              _v0 ? _v4(_v66(_v0)) : _v0();
            }
          }, [_v0]), _v3;
        })(_v5, _v1),
        _v14 = (0, _v11.useMemo)(() => _v12?.teamConfigs?.find(_v0 => _v0.ownerId === _v5), [_v12, _v5]),
        {
          data: _v15
        } = (0, _v13.useGetUser)(() => _v5 ? {
          where: {
            userId: _v5
          },
          select: ["preferences.videos.password", "preferences.videos.rating", "preferences.videos.privacy.view", "preferences.videos.privacy.comments", "preferences.videos.privacy.embed", "preferences.videos.privacy.download", "preferences.videos.privacy.add", "preferences.videos.privacy.clipEmbedAllowedDomains", "preferences.videos.privacy.allowShareLink"],
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4.1"
          }
        } : null);
      return ((0, _v11.useEffect)(() => {
        if (_v15) {
          let _v0 = _v14?.permissionLevel === "Uploader";
          _v0 && _v10(_v319), _v0 || (_v8(_v15.preferences?.videos?.rating), _v10({
            ..._v15.preferences?.videos?.privacy,
            password: _v15.preferences?.videos?.password,
            embedDomains: _v15.preferences?.videos?.privacy?.clipEmbedAllowedDomains?.map(_v0 => ({
              domain: _v0,
              allowHd: !1,
              uri: _v0
            }))
          }));
        }
      }, [_v15, _v14]), _v11) ? (0, _v7.jsx)(_v59, {}) : _v15 && _v13 ? (0, _v7.jsx)(_v47.ErrorPage, {
        error: new _v12.UnauthorizedError(_v13.displayMessage)
      }) : (0, _v7.jsx)(_v45, {
        children: (0, _v7.jsx)(_v318, {
          privacy: _v9,
          setPrivacy: _v0 => {
            _v10(_v0 => ({
              ..._v0,
              ..._v0
            }));
          },
          switchTeam: _v6,
          teamOwnersId: _v5,
          uploadPageConfig: _v12,
          uploadRoute: _v4,
          contentRating: _v7,
          updateContentRating: _v0 => {
            _v8(_v0);
          },
          isTranslatorOnboarding: _v2
        })
      });
    },
    _v321 = ["/upload/videos", "/upload/video-maker", "/upload/live-event", "/upload/screen-recording"],
    _v322 = _v321.map(_v0 => `${_v0}/privacy`);
  (0, _v9.withPageSetup)(async _v0 => {
    let _v1,
      _v2 = _v0.params?.params?.[0];
    if (_v2 && !_v321.includes(`/upload/${_v2}`) && !_v322.includes(`/upload/${_v2}/privacy`)) return {
      notFound: !0
    };
    try {
      _v1 = await (0, _v10.getMeWorkspaces)({
        headers: _v0.headers,
        baseUrl: _v0.baseUrl,
        select: ["untranslatedUserRole"]
      });
    } catch {
      return {
        notFound: !0
      };
    }
    if (_v1?.total === 1 && _v1?.data?.[0]?.untranslatedUserRole === "Viewer") return {
      redirect: {
        destination: "/",
        permanent: !1
      }
    };
    let {
        query: _v3
      } = _v0,
      _v4 = _v3.teamId ? parseInt(_v3.teamId, 10) : void 0,
      _v5 = _v3.folderId ? parseInt(_v3.folderId, 10) : void 0;
    return {
      props: {
        hasThemeSupport: !0,
        hasUploader: !0,
        layoutOptions: {
          globalNotifications: !1
        },
        ...(void 0 !== _v4 && {
          teamIdQueryParam: _v4
        }),
        ...(void 0 !== _v5 && {
          defaultFolderId: _v5
        })
      }
    };
  }, {
    requireLogin: !0,
    noIndex: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, ({
    teamIdQueryParam: _v0,
    defaultFolderId: _v1
  }) => {
    let _v2 = (0, _v8.useRouter)(),
      _v3 = (0, _v74.useViewer)(),
      _v4 = "1" === _v2.query.translator_onboarding;
    if (!_v3) return null;
    let _v5 = _v0 ?? _v3?.teamUser?.ownerId ?? _v3?.user?.id ?? null;
    return (0, _v7.jsx)(_v320, {
      defaultFolderId: _v1,
      initialTeamId: _v5,
      isTranslatorOnboarding: _v4
    });
  }], 0);
}