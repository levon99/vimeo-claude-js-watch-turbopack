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
  let _v19 = _v7.default.div.withConfig({
    displayName: "record__CircleWithDot",
    componentId: "sc-414e9f5c-0"
  })`
  width: ${(0, _v6.rem)(20)};
  height: ${(0, _v6.rem)(20)};
  border-radius: 50%;
  border: 2px solid ${_v16.core.color.text(0)};
  position: relative;

  // The dot in the center
  &::after {
    content: '';
    position: absolute;
    width: ${(0, _v6.rem)(8)};
    height: ${(0, _v6.rem)(8)};
    background-color: ${_v16.core.color.text(0)};
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
  var _v20 = _v0.i(0);
  let _v21 = [{
      name: (0, _v9.translate)({
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
      description: (0, _v9.translate)({
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
      icon: (0, _v1.jsx)(_v14.Upload, {}),
      linkTo: "/upload/videos"
    }, {
      name: (0, _v9.translate)({
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
      description: (0, _v9.translate)({
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
      icon: (0, _v1.jsx)(() => (0, _v1.jsx)(_v19, {}), {}),
      linkTo: "/upload/screen-recording"
    }, {
      name: (0, _v9.translate)({
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
      description: (0, _v9.translate)({
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
      icon: (0, _v1.jsx)(_v15.CreateVideo, {
        boxSize: (0, _v6.rem)(32)
      }),
      linkTo: "/upload/video-maker"
    }, {
      name: (0, _v9.translate)({
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
      description: (0, _v9.translate)({
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
      icon: (0, _v1.jsx)(_v12.CameraOn, {}),
      linkTo: "/upload/live-event"
    }],
    _v22 = () => {
      let {
          closeDrawer: _v0
        } = _v35(),
        _v1 = () => {
          _v0();
        };
      return (0, _v1.jsx)(_v32, {
        children: _v21.map(_v0 => (0, _v1.jsx)(_v24, {
          name: _v0.name,
          icon: _v0.icon,
          description: _v0.description,
          linkTo: _v0.linkTo,
          onClick: _v1
        }, _v0.name))
      });
    },
    _v23 = ({
      icon: _v0,
      name: _v1,
      description: _v2
    }) => (0, _v1.jsxs)(_v30, {
      children: [(0, _v1.jsx)(_v31, {
        children: _v0
      }), (0, _v1.jsxs)(_v27, {
        children: [(0, _v1.jsx)(_v28, {
          as: "p",
          children: _v1
        }), (0, _v1.jsx)(_v25, {
          children: _v2
        })]
      }), (0, _v1.jsx)(_v29, {})]
    }),
    _v24 = ({
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
        } = (_v5 = (0, _v20.useHistory)(), _v6 = (0, _v2.useRouter)(), {
          navigate: _v0 => {
            _v5?.replace(_v0), _v6?.replace(_v0);
          },
          isNextRouter: void 0 === _v5 && _v6
        });
      return _v8 ? (0, _v1.jsx)(_v11.default, {
        style: {
          all: "unset"
        },
        onClick: _v4,
        href: _v3,
        children: (0, _v1.jsx)(_v23, {
          icon: _v0,
          name: _v1,
          description: _v2
        })
      }) : (0, _v1.jsx)(_v26, {
        onClick: _v0 => {
          _v0.preventDefault(), _v4(), _v7(_v3);
        },
        children: (0, _v1.jsx)(_v23, {
          icon: _v0,
          name: _v1,
          description: _v2
        })
      });
    },
    _v25 = (0, _v7.default)(_v17.Paragraph).attrs({
      size: 3
    }).withConfig({
      displayName: "UploadOptions__Description",
      componentId: "sc-e67d7eba-0"
    })``,
    _v26 = _v7.default.a.withConfig({
      displayName: "UploadOptions__UnstyledLink",
      componentId: "sc-e67d7eba-1"
    })`
  all: unset;
`,
    _v27 = _v7.default.div.withConfig({
      displayName: "UploadOptions__Column",
      componentId: "sc-e67d7eba-2"
    })`
  display: flex;
  flex-direction: column;
  gap: ${(0, _v6.rem)(4)};

  & ${_v25} {
    margin: unset;
  }
`,
    _v28 = (0, _v7.default)(_v18.Text).attrs({
      size: 300
    }).withConfig({
      displayName: "UploadOptions__Name",
      componentId: "sc-e67d7eba-3"
    })`
  font-weight: 700;
  color: ${_v16.core.color.text(0)};
`,
    _v29 = (0, _v7.default)(_v10.Button).attrs({
      variant: "hyperminimal",
      format: "alternative",
      icon: (0, _v1.jsx)(_v13.PlusCircle, {})
    }).withConfig({
      displayName: "UploadOptions__GoToButton",
      componentId: "sc-e67d7eba-4"
    })`
  // Overriding a user style issue on safari
  padding: 0 !important;
  // Push it over to the right
  margin-left: auto;
  color: ${_v16.core.color.text(0)};
`,
    _v30 = _v7.default.li.withConfig({
      displayName: "UploadOptions__Row",
      componentId: "sc-e67d7eba-5"
    })`
  display: flex;
  align-items: center;
  height: ${(0, _v6.rem)(72)};
  width: 100%;
  gap: ${(0, _v6.rem)(16)};
  cursor: pointer;
`,
    _v31 = _v7.default.div.withConfig({
      displayName: "UploadOptions__Icon",
      componentId: "sc-e67d7eba-6"
    })`
  width: ${(0, _v6.rem)(32)};
  height: ${(0, _v6.rem)(32)};
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: ${(0, _v6.rem)(24)};
    height: ${(0, _v6.rem)(24)};
  }

  & path {
    fill: ${_v16.core.color.text(0)};
  }
`,
    _v32 = _v7.default.ul.withConfig({
      displayName: "UploadOptions__List",
      componentId: "sc-e67d7eba-7"
    })`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
  var _v33 = _v0.i(0);
  let _v34 = _v3.default.createContext({
      toggleDrawer: () => null,
      closeDrawer: () => null
    }),
    _v35 = () => (0, _v3.useContext)(_v34),
    _v36 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v3.useState)(!1),
        _v3 = () => _v2(!1);
      return (0, _v1.jsxs)(_v34.Provider, {
        value: {
          toggleDrawer: () => _v2(_v0 => !_v0),
          closeDrawer: _v3
        },
        children: [_v0, (0, _v1.jsxs)(_v33.SlideUpFromBottomDrawer, {
          active: _v1,
          onScreenClick: _v3,
          children: [(0, _v1.jsx)(_v22, {}), (0, _v1.jsx)(_v37, {
            children: (0, _v1.jsx)(_v10.Button, {
              "aria-label": (0, _v9.translate)({
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
              icon: (0, _v1.jsx)(_v8.CloseX, {}),
              onClick: _v3
            })
          })]
        })]
      });
    },
    _v37 = _v7.default.div.withConfig({
      displayName: "UploadOptionsDrawer__BottomCenter",
      componentId: "sc-1f420412-0"
    })`
  position: absolute;
  left: 50%;
  bottom: ${(0, _v6.rem)(24)};
  transform: translateX(-50%);
`;
  var _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  let _v47 = _v7.default.footer.withConfig({
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
  _v7.default.div.withConfig({
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
  let _v48 = _v7.default.div.withConfig({
      displayName: "styles__DropzoneContainer",
      componentId: "sc-7342f252-2"
    })`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (max-width: ${(0, _v44.rem)(480)}) {
    width: ${(0, _v44.rem)(360)};
  }

  @media screen and (min-width: ${(0, _v44.rem)(950)}) and (max-width: ${(0, _v44.rem)(0)}) {
    width: ${(0, _v44.rem)(880)};
  }

  @media screen and (min-width: ${(0, _v44.rem)(0)}) {
    width: ${(0, _v44.rem)(896)};
    height: ${(0, _v44.rem)(518)};
  }
`,
    _v49 = _v7.default.div.withConfig({
      displayName: "styles__MainContent",
      componentId: "sc-7342f252-3"
    })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(0, _v44.rem)(45)};
  gap: ${(0, _v44.rem)(16)};
  height: 100%;
  width: 100%;
`;
  (0, _v7.default)(_v46.Skeleton).withConfig({
    displayName: "styles__UploadTabsPlaceholder",
    componentId: "sc-7342f252-4"
  })`
  width: ${(0, _v44.rem)(576)};
  height: ${(0, _v44.rem)(50)};
  border-radius: 2rem;

  @media screen and (max-width: ${(0, _v44.rem)(480)}) {
    width: ${(0, _v44.rem)(360)};
  }
`;
  let _v50 = _v7.default.div.withConfig({
      displayName: "styles__Row",
      componentId: "sc-7342f252-5"
    })`
  display: flex;
  margin: ${(0, _v44.rem)(10)} auto;
  flex-direction: ${({
      direction: _v0 = "row"
    }) => _v0};
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: ${(0, _v44.rem)(769)}) {
    justify-content: space-around;
  }

  @media screen and (max-width: ${(0, _v44.rem)(480)}) {
    width: ${(0, _v44.rem)(360)};
  }
`,
    _v51 = _v7.default.div.withConfig({
      displayName: "styles__Section",
      componentId: "sc-7342f252-6"
    })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: ${(0, _v44.rem)(16)};
  &:first-of-type {
    left: ${(0, _v44.rem)(16)};
  }
  &:last-of-type {
    right: ${(0, _v44.rem)(16)};
  }
`,
    _v52 = (0, _v7.default)(_v50).withConfig({
      displayName: "styles__SecondRow",
      componentId: "sc-7342f252-7"
    })`
  align-items: center;
  justify-content: center;
  gap: ${(0, _v44.rem)(16)};
`,
    _v53 = () => (0, _v1.jsxs)(_v42.Flex, {
      bgColor: "background",
      flexGrow: "1",
      align: "center",
      direction: "column",
      pos: "relative",
      children: [(0, _v1.jsx)(_v54, {}), (0, _v1.jsxs)(_v49, {
        children: [(0, _v1.jsx)(_v43.Skeleton, {
          w: {
            base: "360px",
            sm: "576px"
          },
          h: "50px",
          borderRadius: (0, _v44.rem)(32)
        }), (0, _v1.jsxs)(_v48, {
          children: [(0, _v1.jsx)(_v43.Skeleton, {
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
          }), (0, _v1.jsxs)(_v50, {
            children: [(0, _v1.jsx)(_v43.Skeleton, {
              h: "24px",
              w: "520px",
              borderRadius: "xs",
              display: {
                base: "none",
                sm: "block"
              }
            }), (0, _v1.jsx)(_v43.Skeleton, {
              h: "24px",
              w: "520px",
              borderRadius: "xs",
              display: {
                base: "none",
                sm: "block"
              }
            }), (0, _v1.jsx)(_v43.Skeleton, {
              h: "20px",
              w: "96px",
              borderRadius: "xs",
              display: {
                base: "none",
                sm: "block"
              }
            })]
          })]
        }), (0, _v1.jsx)(_v52, {
          children: (0, _v1.jsx)(_v43.Skeleton, {
            h: "56px",
            w: "527px",
            borderRadius: "xs",
            display: {
              base: "none",
              sm: "block"
            }
          })
        })]
      }), (0, _v1.jsx)(_v55, {})]
    }),
    _v54 = () => (0, _v1.jsxs)(_v45.Navigation, {
      children: [(0, _v1.jsxs)(_v45.Navigation.LeftContent, {
        children: [(0, _v1.jsx)(_v43.Skeleton, {
          borderRadius: "sm",
          w: "80px",
          h: "30px"
        }), (0, _v1.jsx)(_v43.Skeleton, {
          borderRadius: "sm",
          w: "80px",
          h: "30px"
        })]
      }), (0, _v1.jsx)(_v45.Navigation.RightContent, {
        children: (0, _v1.jsx)(_v43.Skeleton, {
          borderRadius: "sm",
          w: "80px",
          h: "30px"
        })
      })]
    }),
    _v55 = () => (0, _v1.jsxs)(_v47, {
      children: [(0, _v1.jsx)(_v51, {}), (0, _v1.jsxs)(_v51, {
        children: [(0, _v1.jsx)(_v43.Skeleton, {
          borderRadius: (0, _v44.rem)(32),
          w: "115px",
          h: "35px"
        }), (0, _v1.jsx)(_v43.Skeleton, {
          borderRadius: (0, _v44.rem)(32),
          boxSize: "35px",
          mx: "6px"
        }), (0, _v1.jsx)(_v43.Skeleton, {
          borderRadius: (0, _v44.rem)(32),
          boxSize: "35px",
          mx: "6px"
        })]
      })]
    });
  var _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  let _v58 = _v0 => _v0.hasOwnProperty("display_message");
  var _v59 = _v0.i(0),
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
    _v81 = _v0.i(0);
  let _v82 = {
    UPLOAD: "/upload/videos",
    CREATE: "/upload/video-maker",
    RECORD: "/upload/screen-recording",
    LIVE: "/upload/live-event"
  };
  var _v83 = _v0.i(0);
  let _v84 = _v7.default.div.withConfig({
      displayName: "styles__DropzoneContainer",
      componentId: "sc-6ff6b251-0"
    })`
  margin-top: ${({
      hasNotice: _v0
    }) => (0, _v44.rem)(_v0 ? 17 : 45)};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${(0, _v44.rem)(896)};

  @media screen and (max-width: ${(0, _v44.rem)(950)}) {
    padding: 0 ${(0, _v44.rem)(24)};
  }
`,
    _v85 = _v7.default.div.withConfig({
      displayName: "styles__OtherUploadsLabel",
      componentId: "sc-6ff6b251-1"
    })`
  font-weight: bold;
  margin-bottom: ${(0, _v44.rem)(10)};
  margin-top: ${(0, _v44.rem)(15)};
`,
    _v86 = _v7.keyframes`
  to { opacity: 1; transform: translateY(0) };
`,
    _v87 = _v7.default.div.withConfig({
      displayName: "styles__OtherUploadsContainer",
      componentId: "sc-6ff6b251-2"
    })`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media screen and (max-width: ${(0, _v44.rem)(550)}) {
    align-items: center;
  }

  & .upload-options {
    flex-wrap: wrap;

    & button {
      opacity: 0;
      transform: translateY(20px);
      animation: ${_v86} 0.3s ease-in-out forwards;
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
    _v88 = _v7.default.button.withConfig({
      displayName: "styles__LinkButton",
      componentId: "sc-6ff6b251-3"
    })`
  border: unset;
  background-color: unset;
  padding: unset;
  color: ${({
      theme: _v0
    }) => _v0.additions.content.color2};
  font-size: ${(0, _v44.rem)(12)};
  cursor: pointer;
  text-decoration: underline;
`,
    _v89 = _v7.default.div.withConfig({
      displayName: "styles__Row",
      componentId: "sc-6ff6b251-4"
    })`
  display: flex;
  margin-top: ${(0, _v44.rem)(8)};
  justify-content: space-between;
  align-items: baseline;
  width: 100%;

  @media screen and (max-width: ${(0, _v44.rem)(550)}) {
    text-align: center;
  }

  // Components in the team switcher dropzone are laid out awkwardly in the markup
  // which causes the legal copy to sit on top of the team switcher dropdown on mobile
  // We can fix this overlapping issue by giving the row containing the legal copy some margin top
  ${({
      uploadType: _v0
    }) => _v0 === _v83.UPLOAD_TYPES.UPLOAD && _v7.css`
      @media screen and (max-width: ${(0, _v44.rem)(550)}) {
        display: flex;
        width: ${(0, _v44.rem)(330)};
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: ${(0, _v44.rem)(32)};

        // Hiding the 360 Video Settings link
        & ${_v88} {
          display: none;
          visibility: hidden;
        }
      }
    `}
`,
    _v90 = ["anybody", "nobody", "contacts", "password", "users", "unlisted", "disable"];
  var _v91 = _v0.i(0),
    _v92 = _v0.i(474),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0);
  let _v103 = {
      UPLOAD: (0, _v9.translate)({
        singular: "Upload your files",
        dictionary: {
          es: {
            singular: "Suba sus archivos"
          },
          "de-DE": {
            singular: "Laden Sie Ihre Dateien hoch"
          },
          "fr-FR": {
            singular: "Téléversez vos fichiers"
          },
          "ja-JP": {
            singular: "ファイルをアップロードしてください"
          },
          "ko-KR": {
            singular: "파일을 업로드하세요"
          },
          "pt-BR": {
            singular: "Envie seus arquivos"
          },
          "zh-CN": {
            singular: "上传您的文件"
          }
        }
      }),
      CREATE: (0, _v9.translate)({
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
      LIVE: (0, _v9.translate)({
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
      RECORD: (0, _v9.translate)({
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
    _v104 = {
      UPLOAD: (0, _v9.translate)({
        singular: "Upload your files",
        dictionary: {
          es: {
            singular: "Suba sus archivos"
          },
          "de-DE": {
            singular: "Laden Sie Ihre Dateien hoch"
          },
          "fr-FR": {
            singular: "Téléversez vos fichiers"
          },
          "ja-JP": {
            singular: "ファイルをアップロードしてください"
          },
          "ko-KR": {
            singular: "파일을 업로드하세요"
          },
          "pt-BR": {
            singular: "Envie seus arquivos"
          },
          "zh-CN": {
            singular: "上传您的文件"
          }
        }
      }),
      CREATE: (0, _v9.translate)({
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
      LIVE: (0, _v9.translate)({
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
      RECORD: (0, _v9.translate)({
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
    _v105 = (0, _v9.translate)({
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
    _v106 = {
      UPLOAD: (0, _v9.translate)({
        singular: "Videos, images, audio, docs. Drag & drop or click to browse.",
        dictionary: {
          es: {
            singular: "Vídeos, imágenes, audio, documentos. Arrastre y suelte o haga clic para examinar."
          },
          "de-DE": {
            singular: "Videos, Bilder, Audio, Dokumente. Per Drag & Drop oder klicken Sie, um zu durchsuchen."
          },
          "fr-FR": {
            singular: "Vidéos, images, audio, docs. Glissez-déposez ou cliquez pour parcourir."
          },
          "ja-JP": {
            singular: "動画, 画像, 音声, ドキュメント. ドラッグ & ドロップ またはクリックして参照してください."
          },
          "ko-KR": {
            singular: "동영상, 이미지, 오디오, 문서. 드래그 앤 드롭하거나 클릭하여 찾아보세요."
          },
          "pt-BR": {
            singular: "Vídeos, imagens, áudio, documentos. Arraste e solte ou clique para procurar."
          },
          "zh-CN": {
            singular: "视频, 图片, 音频, 文档. 拖放或点击以浏览."
          }
        }
      })
    },
    _v107 = {
      CREATE: (0, _v1.jsx)(() => {
        let _v0 = (0, _v97.useColorModeValue)("black", "white");
        return (0, _v1.jsxs)(_v96.Center, {
          width: (0, _v44.rem)(170),
          height: (0, _v44.rem)(100),
          position: "relative",
          children: [(0, _v1.jsx)(_v99.Player, {
            width: "100%",
            height: "100%"
          }), (0, _v1.jsx)(_v91.Box, {
            position: "absolute",
            left: "0",
            top: (0, _v44.rem)(30),
            children: (0, _v1.jsx)(_v98.AiSparklesFilled, {
              boxSize: "xs",
              stroke: _v0
            })
          }), (0, _v1.jsx)(_v91.Box, {
            position: "absolute",
            right: "0",
            top: (0, _v44.rem)(15),
            children: (0, _v1.jsx)(_v98.AiSparklesFilled, {
              boxSize: "xs",
              stroke: _v0
            })
          }), (0, _v1.jsx)(_v91.Box, {
            position: "absolute",
            right: "0",
            bottom: (0, _v44.rem)(20),
            children: (0, _v1.jsx)(_v98.AiSparklesFilled, {
              boxSize: "xs",
              stroke: _v0,
              width: (0, _v44.rem)(18)
            })
          })]
        });
      }, {}),
      LIVE: (0, _v1.jsx)(() => (0, _v1.jsxs)(_v96.Center, {
        width: (0, _v44.rem)(170),
        height: (0, _v44.rem)(100),
        position: "relative",
        children: [(0, _v1.jsx)(_v12.CameraOn, {
          width: "100%",
          height: "100%"
        }), (0, _v1.jsx)(_v91.Box, {
          position: "absolute",
          top: (0, _v44.rem)(-10),
          left: (0, _v44.rem)(-10),
          transform: "rotate(45deg)",
          children: (0, _v1.jsx)(_v100.SoundWaves, {
            boxSize: "lg"
          })
        }), (0, _v1.jsx)(_v91.Box, {
          position: "absolute",
          right: (0, _v44.rem)(-10),
          top: (0, _v44.rem)(-10),
          transform: "rotate(-45deg)",
          children: (0, _v1.jsx)(_v100.SoundWaves, {
            boxSize: "lg"
          })
        })]
      }), {}),
      RECORD: (0, _v1.jsx)(() => {
        let _v0 = (0, _v97.useColorModeValue)("black", "white");
        return (0, _v1.jsxs)(_v96.Center, {
          width: (0, _v44.rem)(170),
          height: (0, _v44.rem)(100),
          position: "relative",
          children: [(0, _v1.jsx)(_v102.RecordFilled, {
            width: "100%",
            height: "100%"
          }), (0, _v1.jsx)(_v91.Box, {
            position: "absolute",
            left: (0, _v44.rem)(1),
            top: (0, _v44.rem)(14),
            children: (0, _v1.jsx)(_v101.CircleShapeFilled, {
              boxSize: "xs",
              stroke: _v0,
              width: (0, _v44.rem)(20)
            })
          }), (0, _v1.jsx)(_v91.Box, {
            position: "absolute",
            right: (0, _v44.rem)(2),
            top: (0, _v44.rem)(15),
            children: (0, _v1.jsx)(_v101.CircleShapeFilled, {
              boxSize: "xs",
              stroke: _v0,
              width: (0, _v44.rem)(13)
            })
          }), (0, _v1.jsx)(_v91.Box, {
            position: "absolute",
            right: (0, _v44.rem)(14),
            top: (0, _v44.rem)(34),
            children: (0, _v1.jsx)(_v101.CircleShapeFilled, {
              boxSize: "xs",
              stroke: _v0,
              width: (0, _v44.rem)(18)
            })
          })]
        });
      }, {})
    },
    _v108 = {
      UPLOAD: (0, _v9.translate)({
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
      CREATE: (0, _v9.translate)({
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
      LIVE: (0, _v9.translate)({
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
      RECORD: (0, _v9.translate)({
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
      INVITE: (0, _v9.translate)({
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
      UPLOAD_EMPTY: (0, _v9.translate)({
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
      UNIFIED_EVENT_ENTRY: (0, _v9.translate)({
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
    _v109 = {
      UPLOAD: (0, _v9.translate)({
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
      RECORD: (0, _v9.translate)({
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
      CREATE: (0, _v9.translate)({
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
      LIVE: (0, _v9.translate)({
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
      INVITE: (0, _v9.translate)({
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
      UPLOAD_EMPTY: (0, _v9.translate)({
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
      UNIFIED_EVENT_ENTRY: (0, _v9.translate)({
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
    _v110 = {
      CREATE: "/create/edit?blank=true",
      LIVE: "/live/select?location=upload_page",
      RECORD: "https://vimeo.com/record?utm_campaign=screen_recorder&utm_source=onsite&utm_content=upload_flow_record_tab&vcid=39126",
      RECORD_STANDALONE: "/record/start-recording"
    };
  var _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0);
  let _v114 = ({
      isActive: _v0 = !1
    }) => {
      let _v1 = (0, _v3.useRef)(null),
        _v2 = (0, _v3.useRef)(null),
        _v3 = (0, _v3.useEffectEvent)(() => {
          let _v0 = _v2.current;
          !_v0 || "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches || (_v0.setLoop(_v0), _v0.play());
        });
      return (0, _v3.useEffect)(() => {
        let _v0 = !1;
        return _v0.A(0).then(({
          default: _v0
        }) => {
          if (_v0 || !_v1.current) return;
          let _v1 = _v113.default.loadAnimation({
            container: _v1.current,
            renderer: "svg",
            loop: !1,
            autoplay: !1,
            animationData: _v0,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          });
          _v1.goToAndStop(0, !0), _v2.current = _v1, _v3();
        }), () => {
          _v0 = !0, _v2.current?.destroy(), _v2.current = null;
        };
      }, []), (0, _v3.useEffect)(() => {
        _v3();
      }, [_v0]), (0, _v1.jsx)(_v91.Box, {
        ref: _v1,
        width: (0, _v44.rem)(262),
        height: (0, _v44.rem)(131)
      });
    },
    _v115 = ({
      isLoading: _v0,
      uploadType: _v1,
      icon: _v2,
      titleOverride: _v3,
      isHovered: _v4 = !1
    }) => {
      let _v5 = (0, _v92.useMediaQueryVisibility)(`screen and (max-width: ${(0, _v44.rem)(768)})`),
        _v6 = "UPLOAD" === _v1,
        _v7 = _v106[_v1],
        _v8 = _v2 ?? (_v6 ? (0, _v1.jsx)(_v114, {
          isActive: _v4 || _v0
        }) : _v107[_v1]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v42.Flex, {
          width: _v6 ? (0, _v44.rem)(262) : (0, _v44.rem)(170),
          height: _v6 ? (0, _v44.rem)(131) : (0, _v44.rem)(64),
          alignItems: "center",
          justifyContent: "center",
          children: _v0 && !_v6 ? (0, _v1.jsx)(_v112.AnimatedUploadIcon, {}) : _v8
        }), (0, _v1.jsxs)(_v42.Flex, {
          direction: "column",
          align: "center",
          gap: (0, _v44.rem)(6),
          children: [(0, _v1.jsx)(_v111.Header, {
            size: "2xl",
            className: "dropzone-header",
            children: _v3 ?? (_v5 ? _v104[_v1] : _v103[_v1])
          }), void 0 !== _v7 && void 0 === _v3 && (0, _v1.jsx)(_v75.Paragraph, {
            size: "sm",
            color: "text-tertiary",
            margin: 0,
            textAlign: "center",
            children: _v7
          })]
        })]
      });
    };
  var _v116 = _v0.i(0);
  let _v117 = ({
      isLoading: _v0,
      isDisabled: _v1,
      uniqueId: _v2,
      uploadType: _v3,
      onFileSelected: _v4
    }) => {
      let _v5 = (0, _v3.useRef)(null),
        {
          fileInputAccept: _v6
        } = (0, _v67.useUploader)(),
        _v7 = (0, _v92.useMediaQueryVisibility)(`screen and (max-width: ${(0, _v44.rem)(768)})`);
      return (0, _v1.jsx)(_v116.FileInput, {
        label: (0, _v1.jsx)(_v74.Button, {
          size: "lg",
          variant: "primary",
          onClick: () => _v5?.current?.click(),
          children: _v7 ? _v109[_v3] : _v108[_v3]
        }),
        ref: _v5,
        multiple: !0,
        onChange: _v4,
        accept: _v6,
        isDisabled: _v1,
        isLoading: _v0,
        variant: "filled",
        size: "lg"
      }, `file-upload-${_v2}`);
    },
    _v118 = ({
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
        } = (0, _v67.useUploader)(),
        _v13 = (0, _v97.useColorModeValue)("blue.50", "blue.800");
      return _v10 ? (0, _v1.jsx)(_v1.Fragment, {
        children: _v0
      }) : (0, _v1.jsx)(_v96.Center, {
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
    _v119 = ({
      className: _v0,
      isActive: _v1
    }) => (0, _v1.jsx)(_v96.Center, {
      className: _v0,
      ...(_v1 && {
        flexDirection: "column",
        backgroundColor: "inherit",
        borderColor: "fill-component",
        borderStyle: "solid",
        height: `clamp(${(0, _v44.rem)(400)}, 56vh, ${(0, _v44.rem)(518)})`,
        width: "100%",
        marginTop: (0, _v44.rem)(24),
        borderWidth: [0, 0, "2px"],
        gap: (0, _v44.rem)(24),
        borderRadius: "sm"
      })
    }),
    _v120 = (0, _v73.default)(async () => {
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
    _v121 = ({
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
      let _v15 = (0, _v3.useContext)(_v72.ViewerContext),
        _v16 = _v0 ? _v0.id : null,
        {
          trackUploadDestinationChanged: _v17
        } = (0, _v64.useUploadPageTracking)(),
        [_v18, _v19] = (0, _v3.useState)(() => "true" === new URLSearchParams(window.location.search).get("show_ecw")),
        {
          isRecordToolSupported: _v20
        } = _v15 || {
          teamUserPermissionLevel: null
        },
        [_v21, _v22] = (0, _v3.useState)(_v9),
        [_v23, _v24] = (0, _v3.useState)(!1),
        _v25 = (0, _v3.useCallback)(() => _v24(!0), []),
        _v26 = (0, _v3.useCallback)(() => _v24(!1), []),
        _v27 = (0, _v92.useMediaQueryVisibility)(`screen and (max-width: ${(0, _v44.rem)(768)})`),
        {
          uploads: _v28,
          clearUpoads: _v29,
          isUploading: _v30,
          isDragging: _v31,
          onDragEnd: _v32,
          onDragLeave: _v33,
          onDragOver: _v34,
          onDrop: _v35,
          onUploadFiles: _v36
        } = (({
          onFileDrop: _v0,
          onFileDragOver: _v1,
          targetUserId: _v2,
          selectedFolder: _v3,
          uploadClipProperties: _v4
        }) => {
          let [_v5, _v6] = (0, _v3.useState)(!1),
            [_v7, _v8] = (0, _v3.useState)(!1),
            {
              trackUploadFileSelected: _v9
            } = (0, _v64.useUploadPageTracking)(),
            _v10 = _v3 ? (0, _v78.getProjectId)(_v3) : null,
            {
              upload: _v11,
              uploads: _v12,
              clear: _v13
            } = (0, _v67.useUploader)(),
            _v14 = (0, _v3.useCallback)((_v0, _v1) => {
              _v8(_v11(_v0, {
                targetUserId: _v2 || void 0,
                folderId: _v10 || void 0,
                origin: {
                  isDropzone: _v1,
                  surface: "upload_page"
                }
              }, _v4));
            }, [_v10, _v2, _v11, _v4]),
            _v15 = (0, _v3.useCallback)(_v0 => {
              if (!_v0.target || !_v0.target.files) return;
              let {
                files: _v1
              } = _v0.target;
              _v14(_v1, !1), _v9({
                uploadMethod: "file_picker"
              }), _v0.currentTarget.value = "";
            }, [_v9, _v14]),
            _v16 = (0, _v3.useCallback)(() => {
              _v6(!1);
            }, []),
            _v17 = (0, _v3.useCallback)(_v0 => {
              if (_v6(!1), !_v0.dataTransfer || !_v0.dataTransfer.files) return;
              let {
                files: _v1
              } = _v0.dataTransfer;
              _v14(_v1, !0), _v0?.(_v0), _v9({
                uploadMethod: "drag_and_drop"
              });
            }, [_v0, _v9, _v14]);
          return {
            isUploading: _v7,
            isDragging: _v5,
            uploads: _v12,
            clearUpoads: _v13,
            onDragEnd: _v16,
            onDrop: _v17,
            onDragLeave: (0, _v3.useCallback)(() => {
              _v6(!1);
            }, []),
            onDragOver: (0, _v3.useCallback)(_v0 => {
              _v6(!0), _v1?.(_v0);
            }, [_v1]),
            onUploadFiles: _v15
          };
        })({
          targetUserId: _v16,
          selectedFolder: _v5,
          uploadClipProperties: _v7,
          onFileDrop: _v11,
          onFileDragOver: _v10,
          onUploadFailure: _v12
        }),
        _v37 = (0, _v3.useRef)(!0),
        _v38 = (0, _v3.useCallback)(_v0 => {
          _v3?.(_v0?.isPrivateToUser || !1), _v4?.(_v0), _v37.current ? _v37.current = !1 : _v17({
            project: _v0
          });
        }, [_v3, _v4, _v17]);
      (0, _v3.useEffect)(() => {
        _v22(_v9);
      }, [_v9]);
      let _v39 = _v2 && _v2.map(_v0 => ({
          id: _v0.ownerId,
          title: _v0.teamName,
          role: _v0.permissionLevel ?? "",
          imgSrc: _v0?.teamLogoUrl,
          privateToMeFolderId: _v0.privateToMeFolderId
        })),
        _v40 = (0, _v3.useCallback)(_v0 => {
          _v1?.(_v0);
        }, [_v1]),
        [_v41, _v42] = (0, _v3.useState)(_v8),
        [_v43, _v44] = (0, _v3.useState)(0);
      return (0, _v3.useEffect)(() => {
        _v42(_v30);
      }, [_v30]), (0, _v3.useEffect)(() => {
        let _v0 = _v28?.find(_v0 => _v0.state === _v68.STATES.FAILED);
        _v0 && (_v29(_v0), _v42(!1), _v44(_v0 => ++_v0), _v12?.(_v0.error));
      }, [_v29, _v12, _v28]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v119, {
          className: "box-upload-picker",
          isActive: _v13
        }), !_v13 && (0, _v1.jsxs)(_v118, {
          className: "upload-page-dropzone",
          isDragging: _v31,
          onDragEnd: _v32,
          onDragOver: _v34,
          onDrop: _v35,
          onDragLeave: _v33,
          onMouseEnter: _v25,
          onMouseLeave: _v26,
          folderId: _v6 ?? void 0,
          targetUserId: _v16 ?? void 0,
          height: `clamp(${(0, _v44.rem)(400)}, 56vh, ${(0, _v44.rem)(518)})`,
          width: "100%",
          marginTop: (0, _v44.rem)(24),
          borderWidth: [0, 0, "2px"],
          gap: (0, _v44.rem)(24),
          borderRadius: "sm",
          position: "relative",
          children: ["UPLOAD" === _v9 && (0, _v1.jsx)(_v91.Box, {
            position: "absolute",
            top: (0, _v44.rem)(16),
            right: (0, _v44.rem)(16),
            children: (0, _v1.jsx)(_v95.NewBadge, {})
          }), (0, _v1.jsx)(_v115, {
            uploadType: _v9,
            isLoading: _v41,
            isHovered: _v23,
            titleOverride: _v14 && "UPLOAD" === _v9 ? _v105 : void 0
          }), "UPLOAD" === _v9 ? (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v117, {
              isLoading: _v41,
              isDisabled: !_v0 || _v41,
              uniqueId: _v43,
              uploadType: _v9,
              onFileSelected: _v36
            }), _v39 && _v0 && (0, _v1.jsx)(_v93.TeamSwitcher, {
              disabled: _v41,
              teams: _v39,
              selectTeam: _v40,
              selectFolder: _v38,
              selectedFolder: _v5 ?? null,
              selectedTeamId: _v0.id,
              isLoading: !_v0,
              enabledRoles: _v94.ALL_TEAM_ROLES
            })]
          }) : (0, _v1.jsx)(_v76.Link, {
            ...("RECORD" === _v21 ? _v27 ? {
              href: "https://vimeo.page.link/vimeoapp"
            } : _v20 ? {
              href: _v110.RECORD_STANDALONE
            } : {
              href: _v110.RECORD,
              "data-screen-recorder-cta": !0
            } : {
              href: _v110[_v21]
            }),
            textDecoration: "none",
            children: (0, _v1.jsx)(_v74.Button, {
              size: "lg",
              variant: "primary",
              onClick: _v0 => {
                "LIVE" === _v9 && (_v19(!0), _v0.preventDefault());
              },
              children: _v27 ? _v109[_v21] : _v108[_v21]
            })
          })]
        }), (0, _v1.jsx)(_v120, {
          active: _v18,
          activeSet: _v19
        })]
      });
    };
  var _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0);
  let _v126 = ({
      children: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v74.Button, {
      borderColor: "fill-component !important",
      borderRadius: "sm",
      size: "lg",
      variant: "tertiary",
      ..._v1,
      children: _v0
    }),
    _v127 = ["mpg", "mpeg", "mp4", "m4v", "avi", "mov", "flv", "webm"],
    _v128 = ({
      onFilesSelect: _v0,
      onClick: _v1,
      setIsBoxPickerActive: _v2
    }) => {
      let {
          boxClientId: _v3
        } = (0, _v3.useContext)(_v71.PullUploadContext),
        _v4 = (0, _v3.useContext)(_v72.ViewerContext),
        _v5 = new URLSearchParams((0, _v2.useRouter)().asPath.split("?")[1]),
        _v6 = _v5.get("box_access_token"),
        [_v7, _v8] = (0, _v3.useState)(!!_v5.get("show_box_picker")),
        _v9 = (0, _v3.useRef)(null),
        _v10 = (0, _v3.useCallback)(() => {
          _v9.current && (_v9.current.hide(), _v8(!1), _v2(!1));
        }, [_v2]),
        [_v11, _v12] = (0, _v124.useScript)("https://cdn01.boxcdn.net/platform/elements/23.0.0/en-US/picker.js", !_v7);
      (0, _v3.useEffect)(() => {
        if (_v7) {
          let _v0 = document.createElement("link");
          _v0.setAttribute("rel", "stylesheet"), _v0.setAttribute("href", "https://cdn01.boxcdn.net/platform/elements/23.0.0/en-US/picker.css"), document.head.appendChild(_v0);
        }
      }, [_v7]), (0, _v3.useEffect)(() => () => {
        _v10();
      }, [_v10]), (0, _v3.useEffect)(() => {
        if (_v12) return void console.warn("Failed to load Box Picker");
        if (_v11 && window.Box && _v6 && _v7) {
          _v2(!0);
          let _v0 = _v9.current = new window.Box.FilePicker();
          _v0.addListener("choose", _v0 => {
            0 !== _v0.length && (_v0.map(_v0 => (_v0.link = _v0.authenticated_download_url, _v0.url = _v0.shared_link.url, _v0.headers = {
              authorization: `Bearer ${_v6}`
            }, _v0)), _v10(), _v0(_v0, _v68.TYPES.API_PULL_CLIP, _v68.API_APPS.BOX_APP));
          }), _v0.addListener("cancel", () => {
            _v10();
          }), _v0.show("0", _v6, {
            container: ".box-upload-picker",
            size: "small",
            extensions: _v127
          });
        }
      }, [_v6, _v11, _v12, _v0, _v7]);
      let _v13 = (0, _v3.useCallback)(() => {
        fetch("/partner-integration-event/send?integration_id=4&interaction_type=join", {
          method: "POST",
          body: JSON.stringify({
            token: _v4?.xsrft
          }),
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
          }
        }), window.location.replace(`https://account.box.com/api/oauth2/authorize?response_type=code&client_id=${_v3}&redirect_uri=${window.location.origin}/box/oauth_callback`), _v1();
      }, [_v3, _v4?.xsrft, _v1]);
      return (0, _v1.jsx)(_v126, {
        leftIcon: (0, _v1.jsx)(_v125.Box, {}),
        onClick: _v13,
        children: (0, _v9.translate)("Box")
      });
    };
  var _v129 = _v0.i(0);
  let _v130 = ({
    onFilesSelect: _v0,
    onClick: _v1
  }) => {
    let [_v2, _v3] = (0, _v124.useScript)("https://www.dropbox.com/static/api/2/dropins.js"),
      [_v4, _v5] = (0, _v3.useState)(!0),
      {
        dbClientId: _v6
      } = (0, _v3.useContext)(_v71.PullUploadContext),
      _v7 = (0, _v3.useContext)(_v72.ViewerContext);
    (0, _v3.useEffect)(() => {
      window.Dropbox && (window.Dropbox.isBrowserSupported() || _v5(!1), window.Dropbox.appKey = _v6);
    }, [_v6, _v2]);
    let _v8 = (0, _v3.useCallback)(() => {
      if (fetch("/partner-integration-event/send?integration_id=6&interaction_type=join", {
        method: "POST",
        body: JSON.stringify({
          token: _v7?.xsrft
        }),
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json"
        }
      }), window.Dropbox) {
        let _v0 = {
          success: _v0 => {
            _v0.map(_v0 => (_v0.size = parseInt(_v0.bytes, 10), _v0.thumbnailLink = _v0.thumbnailLink?.replace(/bounding_box=(\d*)/, "bounding_box=2048"), _v0.headers = {
              authorization: `Bearer ${_v6}`
            }, _v0)), _v0(_v0, _v68.TYPES.API_PULL_CLIP, _v68.API_APPS.DROPBOX_APP);
          },
          multiselect: !0,
          collapsedButton: !1,
          linkType: "direct",
          extensions: _v83.ACCEPTED_FILE_EXT
        };
        window.Dropbox.choose(_v0);
      }
      _v1();
    }, [_v6, _v0, _v1, _v7?.xsrft]);
    return _v4 && !_v3 ? (0, _v1.jsx)(_v126, {
      leftIcon: (0, _v1.jsx)(_v129.Dropbox, {}),
      onClick: _v8,
      children: (0, _v9.translate)("Dropbox")
    }) : null;
  };
  var _v131 = _v0.i(0),
    _v131 = _v131;
  let _v132 = "https://www.googleapis.com/drive/v3/files/",
    _v133 = "https://www.googleapis.com/auth/drive.file",
    _v134 = "id,name,size,thumbnailLink",
    _v135 = ({
      fields: _v0 = _v134,
      onFilesSelect: _v1,
      scope: _v2 = _v133,
      url: _v3 = _v132,
      onClick: _v4
    }) => {
      let [_v5, _v6] = (0, _v124.useScript)("https://apis.google.com/js/api.js"),
        [_v7, _v8] = (0, _v124.useScript)("https://accounts.google.com/gsi/client"),
        {
          gdClientId: _v9,
          gdDeveloperKey: _v10
        } = (0, _v3.useContext)(_v71.PullUploadContext),
        _v11 = (0, _v3.useRef)(""),
        _v12 = (0, _v3.useRef)(void 0),
        [_v13, _v14] = (0, _v3.useState)(!1),
        _v15 = (0, _v3.useContext)(_v72.ViewerContext),
        _v16 = _v15?.locale || "en",
        _v17 = _v15?.isEnterpriseSite,
        _v18 = (_v0 = "") => {
          let _v1 = encodeURIComponent(window?.location?.origin + "/oauth/token/popup-callback"),
            _v2 = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${_v9}&scope=${_v2}&redirect_uri=https://integrations-redirect.vimeo.work/oauth_redirect_fragmented&state=${_v1}&response_type=token&include_granted_scopes=true&enable_granular_consent=true&prompt=${_v0}`;
          window.connectCallback = _v0 => {
            _v0.access_token && (_v11.current = _v0.access_token, _v21());
          }, window.open(_v2);
        },
        _v19 = window.gapi;
      (0, _v3.useEffect)(() => {
        _v19 && _v5 && !_v6 && _v19.load("picker", {
          callback: () => _v14(!0)
        });
      }, [_v19, _v5, _v6]), (0, _v3.useEffect)(() => {
        _v7 && !_v8 && window.google && _v9 && (_v12.current = google?.accounts?.oauth2?.initTokenClient({
          client_id: _v9,
          scope: _v2
        }));
      }, [_v9, _v7, _v8, _v2]);
      let _v20 = _v0 => {
          _v0[google.picker.Response.ACTION] === google.picker.Action.PICKED && _v22(_v0[google.picker.Response.DOCUMENTS]);
        },
        _v21 = (0, _v3.useCallback)(() => {
          let _v0 = new google.picker.DocsView(google.picker.ViewId.DOCS_VIDEOS);
          _v0.setMode(google.picker.DocsViewMode.LIST), new google.picker.PickerBuilder().addView(_v0).enableFeature(google.picker.Feature.NAV_HIDDEN).enableFeature(google.picker.Feature.MULTISELECT_ENABLED).enableFeature(google.picker.Feature.SUPPORT_DRIVES).setOAuthToken(_v11.current).setOrigin(`${window.location.protocol}//${window.location.host}`).setLocale(_v16).setCallback(_v20).setDeveloperKey(_v10).setAppId(_v9).build().setVisible(!0);
        }, [_v9, _v10, _v16, _v20]),
        _v22 = _v0 => {
          Promise.all(_v0.map(_v0 => {
            let _v1 = {
              method: "GET",
              headers: {
                Authorization: `Bearer ${_v11.current}`
              }
            };
            return fetch(`${_v3}${_v0.id}?fields=${_v0}&supportsAllDrives=true`, _v1).then(_v0 => _v0.json());
          })).then(_v0 => _v23(_v0)).catch(_v0 => _v24(_v0));
        },
        _v23 = _v0 => {
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
          _v1(_v2, _v68.TYPES.API_PULL_CLIP, _v68.API_APPS.GOOGLE_DRIVE_APP);
        },
        _v24 = _v0 => {
          _v1(_v0.map(_v0 => ({
            ..._v0,
            size: _v0.sizeBytes,
            link: `${_v3}${_v0.id}?alt=media`,
            headers: {
              authorization: `Bearer ${_v11.current}`
            }
          })), _v68.TYPES.API_PULL_CLIP, _v68.API_APPS.GOOGLE_DRIVE_APP);
        };
      return _v13 && window?.google?.picker && !_v8 ? (0, _v1.jsx)(_v126, {
        leftIcon: (0, _v1.jsx)(_v131.GoogleDrive, {}),
        onClick: () => {
          fetch("/partner-integration-event/send?integration_id=14&interaction_type=join", {
            method: "POST",
            body: JSON.stringify({
              token: _v15?.xsrft
            }),
            headers: {
              "X-Requested-With": "XMLHttpRequest",
              "Content-Type": "application/json"
            }
          });
          let _v0 = _v12.current;
          _v0 && (_v0.callback = async _v0 => {
            if (void 0 !== _v0.error) throw _v0;
            _v11.current = _v0.access_token, _v21();
          }, _v11.current ? _v17 ? _v18() : _v0.requestAccessToken({
            prompt: ""
          }) : _v17 ? _v18("consent") : _v0.requestAccessToken({
            prompt: "consent"
          }), _v4());
        },
        children: (0, _v9.translate)({
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
    _v136 = _v7.default.img.withConfig({
      displayName: "WebexIcon__Logo",
      componentId: "sc-7cc0d25-0"
    })`
  margin-right: ${(0, _v44.rem)(14)};
`,
    _v137 = () => (0, _v1.jsx)(_v136, {
      width: "20",
      height: "18",
      alt: (0, _v9.translate)({
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
    _v138 = ({
      className: _v0,
      folderId: _v1,
      targetUserId: _v2,
      onFileSelect: _v3,
      setIsBoxPickerActive: _v4
    }) => {
      let {
          upload: _v5
        } = (0, _v67.useUploader)(),
        _v6 = (0, _v3.useContext)(_v72.ViewerContext),
        _v7 = _v6?.isEnterpriseSite,
        {
          trackUploadThirdPartySourceClicked: _v8
        } = (0, _v64.useUploadPageTracking)(),
        {
          capabilities: _v9
        } = (0, _v59.useCapability)(["hasIntegrationCenter"]),
        _v10 = (0, _v123.useGetMeImportApp)({
          select: ["connected"],
          where: {
            appType: "zoom"
          }
        }),
        _v11 = (0, _v123.useGetMeImportApp)({
          select: ["connected"],
          where: {
            appType: "webex"
          }
        }),
        _v12 = _v10?.data?.connected,
        _v13 = _v11?.data?.connected,
        _v14 = (0, _v3.useCallback)((_v0, _v1, _v2) => {
          _v3?.(), _v5(_v0.map(_v0 => (_v0.target_user_id = _v2 ?? void 0, _v0.folder_id = _v1 ?? void 0, _v0)), {
            uploadType: _v1,
            apiApp: _v2,
            origin: {
              isDropzone: !1,
              surface: "upload_page"
            }
          });
        }, [_v3, _v5, _v2, _v1]),
        _v15 = _v0 => {
          window.location.href = _v0;
        };
      return (0, _v1.jsxs)(_v42.Flex, {
        className: _v0,
        gap: (0, _v44.rem)(8),
        justifyContent: ["center", "center", _v7 ? "left" : "space-between"],
        flexWrap: "wrap",
        flexFlow: ["column", "column", "unset"],
        width: "100%",
        children: [(0, _v1.jsx)(_v130, {
          onClick: () => {
            _v8({
              uploadThirdPartySource: "dropbox"
            });
          },
          onFilesSelect: _v14
        }), (0, _v1.jsx)(_v135, {
          onClick: () => {
            _v8({
              uploadThirdPartySource: "google_drive"
            });
          },
          onFilesSelect: _v14
        }), !_v7 && (0, _v1.jsx)(_v128, {
          setIsBoxPickerActive: _v4,
          onClick: () => {
            _v8({
              uploadThirdPartySource: "box"
            });
          },
          onFilesSelect: _v14
        }), (0, _v1.jsx)(_v126, {
          leftIcon: (0, _v1.jsx)(_v122.Zoom, {}),
          onClick: () => {
            _v8({
              uploadThirdPartySource: "zoom"
            }), _v15(_v9?.hasIntegrationCenter ? _v12 ? "/integrations-center/2e4622bd-d6f4-4011-a57a-3c64bc495f27/details/manage" : "/integrations-center/2e4622bd-d6f4-4011-a57a-3c64bc495f27/details" : "/integrations/zoom");
          },
          children: (0, _v9.translate)({
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
        }), !_v7 && (0, _v1.jsx)(_v126, {
          leftIcon: (0, _v1.jsx)(_v137, {}),
          onClick: () => {
            _v8({
              uploadThirdPartySource: "webex"
            }), _v15(_v9?.hasIntegrationCenter ? _v13 ? "/integrations-center/ae19a00e-5bc7-4a71-8da8-144666e31e76/details/manage" : "/integrations-center/ae19a00e-5bc7-4a71-8da8-144666e31e76/details" : "/integrations/webex");
          },
          children: (0, _v9.translate)("Webex")
        }), (0, _v1.jsx)(_v126, {
          onClick: () => {
            _v8({
              uploadThirdPartySource: "other_apps"
            }), _v15(_v9?.hasIntegrationCenter ? "/integrations-center" : "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/sections/12397317457169-Upload-and-video-settings");
          },
          children: (0, _v9.translate)({
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
  var _v139 = _v0.i(0),
    _v140 = _v0.i(0),
    _v141 = _v0.i(0),
    _v142 = _v0.i(0),
    _v143 = _v0.i(0),
    _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0);
  let _v147 = {
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
    _v148 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v146.motion.span, {
      style: {
        display: "inline-block",
        animationTimingFunction: "cubic-bezier(0.33, 0, 0.25, 1)"
      },
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants: _v147,
      transition: {
        type: "keyframes",
        duration: .35
      },
      children: _v0
    }),
    _v149 = {
      "screen-recording": (0, _v9.translate)({
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
      videos: (0, _v9.translate)({
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
      "video-maker": (0, _v9.translate)({
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
      "live-event": (0, _v9.translate)({
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
    _v150 = () => {
      let {
          toggleDrawer: _v0
        } = _v35(),
        _v1 = (0, _v2.useRouter)(),
        _v2 = _v1.query.params?.[0] ?? "videos";
      return (0, _v1.jsxs)(_v151, {
        onClick: () => {
          _v0();
        },
        "aria-label": (0, _v9.translate)({
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
        children: [(0, _v1.jsx)(_v145.Header, {
          size: "4",
          element: "span",
          children: (0, _v1.jsx)(_v142.AnimatePresence, {
            initial: !1,
            mode: "wait",
            children: (0, _v1.jsx)(_v148, {
              children: _v149[_v2]
            }, _v2)
          })
        }), (0, _v1.jsx)(_v152, {
          children: (0, _v1.jsx)(_v143.ChevronDownSmall, {})
        })]
      });
    },
    _v151 = _v7.default.button.withConfig({
      displayName: "UploadOptionsFakeSelect__FakeSelectButton",
      componentId: "sc-fcd88e8d-0"
    })`
  background-color: ${_v16.core.color.background(500)};
  border: 1px solid ${(0, _v144.slate)(200)};
  max-width: ${(0, _v6.rem)(396)};
  width: 100%;
  height: ${(0, _v6.rem)(46)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline-start: ${(0, _v6.rem)(16)};
  padding-inline-end: ${(0, _v6.rem)(8)};
  border-radius: 4px;
  overflow: hidden;

  // Removing margin from Header component
  & > span {
    margin: unset;
  }
`,
    _v152 = _v7.default.span.withConfig({
      displayName: "UploadOptionsFakeSelect__Icon",
      componentId: "sc-fcd88e8d-1"
    })`
  display: inline-flex;
  width: ${(0, _v6.rem)(32)};
  height: ${(0, _v6.rem)(32)};
  justify-content: center;
  align-items: center;

  & svg {
    width: ${(0, _v6.rem)(20)};
    height: ${(0, _v6.rem)(20)};
  }

  & path {
    fill: ${_v16.core.color.text(0)};
  }
`,
    _v153 = ({
      setUploadType: _v0,
      showRecord: _v1 = !0,
      uploadType: _v2,
      showLiveEvent: _v3 = !0,
      showCreate: _v4 = !1
    }) => {
      let _v5 = [{
          label: (0, _v9.translate)({
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
          type: _v83.UPLOAD_TYPES.UPLOAD
        }, {
          label: (0, _v9.translate)({
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
          type: _v83.UPLOAD_TYPES.RECORD
        }, {
          label: (0, _v9.translate)({
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
          type: _v83.UPLOAD_TYPES.CREATE
        }, {
          label: (0, _v9.translate)({
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
          type: _v83.UPLOAD_TYPES.LIVE
        }].filter(_v0 => {
          switch (_v0.type) {
            case _v83.UPLOAD_TYPES.UPLOAD:
              return !0;
            case _v83.UPLOAD_TYPES.RECORD:
              return _v1;
            case _v83.UPLOAD_TYPES.CREATE:
              return _v4;
            case _v83.UPLOAD_TYPES.LIVE:
              return _v3;
          }
        }),
        _v6 = _v5.findIndex(_v0 => _v0.type === _v2),
        _v7;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v42.Flex, {
          justifyContent: "center",
          width: "100%",
          display: {
            base: "flex",
            md: "none"
          },
          children: (0, _v1.jsx)(_v150, {})
        }), (0, _v1.jsx)(_v140.Tabs, {
          display: {
            base: "none",
            md: "block"
          },
          defaultIndex: _v6,
          variant: "default",
          minWidth: (0, _v44.rem)(576),
          "data-id": "video_types_menu",
          size: "md",
          children: (0, _v1.jsxs)(_v141.TabList, {
            borderRadius: _v7,
            children: [_v5.map(_v0 => (0, _v1.jsx)(_v139.Tab, {
              borderRadius: _v7,
              onClick: () => _v0(_v0.type),
              children: _v0.label
            }, _v0.type)), (0, _v1.jsx)(_v140.TabIndicator, {})]
          })
        }, _v5.length)]
      });
    },
    _v154 = (0, _v73.default)(async () => {
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
    _v155 = ({
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
      let _v14 = (0, _v2.useRouter)(),
        _v15 = (0, _v3.useContext)(_v72.ViewerContext),
        _v16 = _v10 || _v15?.user?.id,
        [_v17, _v18] = (0, _v3.useState)(!1),
        [_v19, _v20] = (0, _v3.useState)(),
        [_v21, _v22] = (0, _v3.useState)(!1),
        [_v23, _v24] = (0, _v3.useState)(null),
        _v25 = _v23 ? (0, _v78.getProjectId)(_v23) : null,
        {
          capabilities: _v26
        } = (0, _v59.useCapability)(["hasCreation"]),
        {
          expiryDays: _v27,
          isEligible: _v28
        } = (0, _v39.useFreeTierUnlistedSettings)(),
        {
          capabilities: _v29,
          loading: _v30,
          error: _v31
        } = (0, _v59.useCapability)(["canCreateLiveEvents"], _v10),
        _v32 = (0, _v77.useToast)(),
        [_v33, _v34] = (0, _v3.useState)(!1),
        {
          trackUploadTabSwitched: _v35
        } = (0, _v64.useUploadPageTracking)(),
        _v36 = !!_v5?.hasCreation || !!_v26?.hasCreation,
        _v37 = _v29.canCreateLiveEvents && !_v30 && !_v31,
        _v38 = (0, _v60.useIsMobile)(),
        _v39 = _v83.UPLOAD_ROUTES_TYPE_MAP[_v3],
        _v40 = _v2.owner ? _v2.owner.id : null;
      (0, _v3.useEffect)(() => {
        _v8 && _v8.length > 0 && _v22(!0);
      }, [_v8, _v22]), (0, _v79.useOttRedirect)({
        toast: _v32,
        config: {
          message: (0, _v9.translate)({
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
          isDisabled: _v41
        } = (0, _v80.useGetEditEmbedPrivacyDisabled)(),
        _v42 = (0, _v3.useMemo)(() => function ({
          privacy: _v0,
          threeSixtyType: _v1,
          contentRating: _v2,
          download: _v3,
          canEditEmbedPrivacy: _v4 = !0,
          sharingLinkIntervalDays: _v5
        }) {
          let _v6 = _v0?.embedDomains?.map(_v0 => _v0.domain) ?? [],
            _v7 = function (_v0) {
              if (_v0 && "string" == typeof _v0) return _v90.includes(_v0) ? _v0 : void 0;
            }(_v0?.view),
            _v8 = "unlisted" === _v7 && void 0 !== _v5 && _v5 > 0 ? _v5 : void 0;
          return {
            password: _v0?.password,
            content_rating: _v2,
            privacy: {
              view: _v7,
              embed: _v4 ? _v0?.embed ?? "private" : void 0,
              comments: _v0?.comments,
              add: _v0?.add,
              download: _v3,
              ...(void 0 !== _v8 ? {
                sharing_link_interval_days: _v8
              } : {})
            },
            spatial: _v1 ? {
              stereo_format: _v1,
              projection: "equirectangular"
            } : {},
            embed_domains: _v4 && _v0?.embed === "whitelist" ? _v6.length <= 0 ? void 0 : _v6 : void 0
          };
        }({
          privacy: _v0,
          threeSixtyType: _v19,
          contentRating: _v4,
          download: _v5?.canAllowDownloads ? _v0?.download : void 0,
          canEditEmbedPrivacy: !_v41,
          sharingLinkIntervalDays: _v28 && _v27 > 0 ? Math.min(_v27, _v39.FREE_TIER_UNLISTED_MAX_EXPIRY_DAYS) : void 0
        }), [_v5?.canAllowDownloads, _v4, _v0, _v19, _v41, _v28, _v27]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v6 ? (0, _v1.jsx)(_v43.Skeleton, {
          w: {
            base: "360px",
            sm: "576px"
          },
          h: "50px",
          borderRadius: (0, _v44.rem)(32)
        }) : (0, _v1.jsx)(_v153, {
          setUploadType: _v0 => {
            let _v1 = `${_v82[_v0] || _v82.UPLOAD}`;
            _v35({
              uploadNewTab: _v83.UPLOAD_TYPE_TO_TAB[_v0] ?? "upload"
            }), _v14.push(_v1, void 0, {
              shallow: !0
            });
          },
          uploadType: _v39,
          showCreate: _v36,
          showLiveEvent: _v37
        }), (0, _v1.jsx)(_v121, {
          uploadClipProperties: _v42,
          switchFolder: _v24,
          selectedFolder: _v23,
          selectedFolderId: _v25,
          switchTeam: _v0 => {
            _v12 && _v11?.(), _v1(_v0);
          },
          uploadType: _v39,
          owner: _v2.owner,
          teamConfigs: _v2.teamConfigs,
          setisPrivateToMeFolderSelected: _v9,
          initLoadingAnimation: _v21,
          isBoxPickerActive: _v33,
          isTranslatorOnboarding: _v13
        }, `team-switcher-dropzone-${_v7}-${_v21}`), (0, _v1.jsxs)(_v89, {
          uploadType: _v39,
          children: [(0, _v1.jsx)(_v75.Paragraph, {
            size: "xs",
            children: (0, _v1.jsx)("span", {
              children: (0, _v9.translate)({
                singular: "By submitting a video, you agree to our {TERMS}Terms of Service{/TERMS} and {GUIDE}Community Guidelines{/GUIDE}.",
                replacements: {
                  TERMS: _v0 => (0, _v1.jsx)(_v76.Link, {
                    href: "/terms",
                    target: "_blank",
                    variant: "inline-primary",
                    fontSize: (0, _v44.rem)(12),
                    children: _v0
                  }),
                  GUIDE: _v0 => (0, _v1.jsx)(_v76.Link, {
                    href: "/help/guidelines",
                    target: "_blank",
                    variant: "inline-primary",
                    fontSize: (0, _v44.rem)(12),
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
            })
          }), !_v38 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v74.Button, {
              variant: "tertiary",
              size: "xs",
              onClick: () => _v18(!0),
              children: (0, _v9.translate)({
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
            }), (0, _v1.jsx)(_v154, {
              isOpen: _v17,
              onClose: () => _v18(!1),
              threeSixtyType: _v19,
              set360SourceType: _v20
            })]
          })]
        }), _v39 === _v83.UPLOAD_TYPES.UPLOAD && (0, _v1.jsxs)(_v87, {
          "data-id": "other_ways_to_upload",
          children: [(0, _v1.jsx)(_v85, {
            children: (0, _v9.translate)({
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
            })
          }), (0, _v1.jsx)(_v138, {
            className: "upload-options",
            folderId: _v25 ?? void 0,
            targetUserId: _v40 ?? void 0,
            onFileSelect: () => _v22(!0),
            setIsBoxPickerActive: _v34
          })]
        }), _v15 && (0, _v1.jsx)(_v81.EssentialFooter, {
          enableQuotaMenu: _v10 === _v16 && _v15?.user?.uploadQuota?.restricted == null,
          teamOwnersId: _v10,
          ..._v15
        })]
      });
    };
  var _v156 = _v0.i(0),
    _v157 = _v0.i(0),
    _v158 = _v0.i(0);
  let _v159 = [_v68.STATES.ATTACHING, _v68.STATES.UPLOADING, _v68.STATES.RESUMING, _v68.STATES.REROUTING],
    _v160 = _v0 => _v0.state === _v68.STATES.COMPLETED || _v159.includes(_v0.state),
    _v161 = (_v0, _v1) => _v0 ? _v0.teamConfigs.find(_v0 => _v0.ownerId === _v1) : void 0;
  async function _v162(_v0, _v1) {
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
    return (0, _v158.standardizeResponseObject)(_v4);
  }
  let _v163 = ({
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
    let _v11 = (0, _v3.useContext)(_v72.ViewerContext),
      {
        trackUploadLinkPrivacyChanged: _v12
      } = (0, _v64.useUploadPageTracking)(),
      _v13 = _v3 || _v11?.user?.id,
      _v14 = _v3 === _v13,
      _v15 = _v161(_v6, _v3),
      _v16 = !(!_v14 && _v4 && _v0?.view !== "anybody"),
      {
        allowedPrivacies: _v17
      } = (0, _v156.useUserAllowedPrivacies)({
        teamOwnersId: _v3,
        teamPermissionLevel: _v15?.permissionLevel ?? null
      });
    return (0, _v1.jsx)(_v157.PrivacyDrawer, {
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
      quotaTargetUserId: _v3,
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
          uploadLinkPrivacyNewValue: _v0,
          entityType: "video"
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
  var _v164 = _v0.i(0),
    _v165 = _v0.i(0),
    _v166 = _v0.i(0),
    _v167 = _v0.i(0),
    _v168 = _v0.i(0),
    _v169 = _v0.i(0);
  let _v170 = () => {
      let _v0 = (0, _v97.useColorModeValue)("slate.800", "white");
      return (0, _v1.jsx)(_v169.VimeoV, {
        height: (0, _v44.rem)(26.7),
        color: _v0
      });
    },
    _v171 = (0, _v73.default)(async () => {
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
    _v172 = ({
      isLoadingTeamInfo: _v0 = !1,
      onPrivacyClick: _v1,
      privacy: _v2,
      teamLogoUrl: _v3 = null,
      teamUsersRole: _v4
    }) => {
      let _v5 = (0, _v3.useContext)(_v72.ViewerContext);
      return (0, _v1.jsxs)(_v45.Navigation, {
        id: "header",
        zIndex: "1001",
        children: [(0, _v1.jsx)(_v45.Navigation.LeftContent, {
          children: !_v0 && (0, _v1.jsx)(_v166.default, {
            vimeoLogo: (0, _v1.jsx)(_v170, {}),
            teamLogoUrl: _v3
          })
        }), (0, _v1.jsxs)(_v45.Navigation.RightContent, {
          children: [(0, _v1.jsx)(_v168.default, {
            disabled: _v4 === _v167.TeamUserPermissionLevel.Uploader,
            onClick: _v1,
            privacy: _v2
          }), (0, _v1.jsx)(_v171, {
            withToggle: !0
          }), _v5?.user && (0, _v1.jsx)(_v165.AccountMenu, {})]
        })]
      });
    };
  var _v173 = _v0.i(0),
    _v174 = _v0.i(0);
  function _v175() {
    return (0, _v1.jsx)(_v173.Alert, {
      status: "info",
      maxWidth: ["90%", "90%", "90%", (0, _v44.rem)(880), (0, _v44.rem)(0)],
      marginTop: 200,
      marginBottom: 0,
      children: (0, _v1.jsx)(_v174.AlertDescription, {
        children: (0, _v1.jsx)("span", {
          children: (0, _v9.translate)({
            singular: "{strong}Heads up:{/strong} this video will be private. Only the account’s owner and admins can change its privacy settings.",
            replacements: {
              strong: _v0 => (0, _v1.jsx)("strong", {
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
      })
    });
  }
  var _v176 = _v0.i(0);
  _v7.default.div.withConfig({
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
  let _v177 = _v7.default.div.withConfig({
      displayName: "UI__Content",
      componentId: "sc-ec02b048-1"
    })`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;

  @media screen and (max-width: ${(0, _v44.rem)(480)}) {
    overflow: hidden;
  }
`,
    _v178 = _v7.default.div.withConfig({
      displayName: "UI__MainContent",
      componentId: "sc-ec02b048-2"
    })`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: ${(0, _v44.rem)(480)}) {
    padding-bottom: ${(0, _v44.rem)(100)};
  }
`,
    _v179 = _v7.default.div.withConfig({
      displayName: "UI__ErrorContainer",
      componentId: "sc-ec02b048-3"
    })`
  position: relative;
  margin-top: ${(0, _v44.rem)(-16)};
  z-index: 4;
  display: flex;
  justify-content: center;
  top: ${(0, _v44.rem)(25)};
`;
  var _v180 = _v0.i(0),
    _v181 = _v0.i(0);
  let _v182 = "modal_type_upgrade",
    _v183 = _v0 => {
      var _v1;
      let {
          teamOwnersId: _v2,
          uploadPageConfig: _v3,
          privacy: _v4,
          setPrivacy: _v5,
          uploadRoute: _v6,
          updateContentRating: _v7
        } = _v0,
        _v8 = (0, _v2.useRouter)(),
        _v9 = _v0.isTranslatorOnboarding ?? !1,
        [_v10, _v11] = (0, _v3.useState)(""),
        [_v12, _v13] = (0, _v3.useState)("quota"),
        [_v14, _v15] = (0, _v3.useState)(!1),
        [_v16, _v17] = (0, _v3.useState)(!1),
        [_v18, _v19] = (0, _v3.useState)(""),
        {
          uploads: _v20,
          addShouldUploadStartCallback: _v21,
          clearAll: _v22
        } = (0, _v67.useUploader)(),
        _v23 = _v161(_v3, _v2),
        _v24 = (0, _v3.useContext)(_v72.ViewerContext),
        _v25 = _v2 || _v24?.user?.id,
        {
          quota: _v26
        } = _v3,
        _v27 = _v26.user?.uploadQuota?.space?.unit === "video_count",
        _v28 = (0, _v60.useIsMobile)(),
        _v29 = _v83.UPLOAD_ROUTES_TYPE_MAP[_v6],
        _v30 = _v20.length ? _v20.find(_v0 => _v0.state === _v68.STATES.FAILED) : null,
        _v31 = _v30 && _v30.error || "",
        _v32 = _v23?.permissionLevel === "Uploader",
        {
          data: _v33
        } = (0, _v62.useGetUserTeam)(() => _v25 ? {
          where: {
            userId: _v25
          },
          select: ["accentColor", "pictures.sizes", "teamName"],
          query: {
            sizes: "76"
          }
        } : null),
        _v34 = _v33 && (0, _v61.isTeamInfo)(_v33) && _v33.pictures?.sizes ? ((_v1 = _v33.pictures.sizes)[3] ? _v1[3] : _v1[_v1.length - 1])?.link : null,
        {
          capabilities: _v35,
          loading: _v36
        } = (0, _v59.useCapability)(["canAllowDownloads", "canUnlistVideo", "canHideVideos", "hasExtraEmbedOptions", "hasPrivateModeOff", "hasProEmbedOptions", "hasVideoPasswordPrivacyUpsell", "hasCreation", "hasEnterprise"], _v2),
        {
          isSidePanelOpen: _v37,
          onSidePanelOpen: _v38,
          onSidePanelClose: _v39
        } = (() => {
          let {
              isOpen: _v0,
              onOpen: _v1,
              onClose: _v2
            } = (0, _v180.useDisclosure)(),
            _v3 = (0, _v2.useRouter)(),
            _v4 = (0, _v60.useIsMobile)(),
            {
              drawerDefaultOpen: _v5,
              setDrawerDefaultOpen: _v6
            } = (() => {
              let [_v0, _v1] = (0, _v181.default)("upload_side_drawer", !1);
              return {
                drawerDefaultOpen: _v0,
                setDrawerDefaultOpen: _v1
              };
            })();
          return (0, _v3.useEffect)(() => {
            if (_v3.asPath.includes("/privacy")) {
              let [_v0, _v1] = _v3.asPath.split("?"),
                _v2 = _v0.replace(/\/privacy$/, ""),
                _v3 = _v1 ? `${_v2}?${_v1}` : _v2;
              _v3.replace(_v3, void 0, {
                shallow: !0
              }), _v1();
            }
          }, [_v3, _v3.asPath, _v1]), (0, _v3.useEffect)(() => {
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
          trackUploadPageDisplayed: _v40
        } = (0, _v64.useUploadPageTracking)(),
        _v41 = (0, _v3.useCallback)(_v0 => {
          let _v1 = (0, _v63.buildUpgradePlanUrl)({
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
          (0, _v70.launchLateStagePaywallFromUpgradePlanUrl)(_v1) || _v8.push(_v1);
        }, [_v8]),
        _v42 = (0, _v3.useCallback)(_v0 => {
          _v15(!0);
          let _v1 = Array.from(_v0),
            _v2 = _v1.find(_v0 => {
              var _v1;
              return !("number" == typeof (_v1 = _v0.size) && !isNaN(_v1));
            });
          if (_v2 && "link" in _v2) return _v19(_v2.message || _v68.ERRORS.PULL_FAILED), !1;
          let _v3 = _v27 ? _v1.length : _v1.reduce((_v0, _v1) => _v0 + (_v1.size || 0), 0),
            _v4 = _v26.used + _v3,
            _v5 = !!_v26.totalCap && (_v27 ? _v3 > _v26.totalCap.free : _v3 >= _v26.totalCap.free),
            _v6 = "number" == typeof _v26.dailyCountAvailable && _v1.length > _v26.dailyCountAvailable,
            _v7 = _v26.available >= _v4 && !_v5 && !_v6;
          if (!_v7) {
            let _v0 = _v27 || _v6 || !_v5 ? "quota" : "storage_limit";
            _v13(_v0);
            let _v1 = _v5 ? _v83.QuotaEmailTypes.Lifetime : _v83.QuotaEmailTypes.Periodic;
            _v28 || _v11(_v182);
            let _v2 = _v0[0];
            _v162(`/upload_action?action=${_v1}`, {
              method: "POST",
              headers: {
                "X-Requested-With": "XMLHttpRequest",
                Authorization: `jwt ${_v24?.jwt}`
              },
              body: JSON.stringify({
                file_name: _v2.name,
                file_size: _v2.size,
                total_size: _v3,
                file_count: _v0.length,
                user_id: _v25,
                token: _v24?.xsrft
              })
            }).then(() => {
              _v28 && _v41(_v0);
            });
          }
          if (_v7) {
            let _v0 = _v26.restricted,
              _v1 = _v1.reduce((_v0, _v1) => _v0 + (_v1.size || 0), 0);
            if ((({
              view: _v0,
              embed: _v1,
              restrictedMax: _v2,
              restrictedUsed: _v3,
              uploadSize: _v4
            }) => null != _v2 && ("anybody" !== (_v0 ?? "anybody") || "private" !== (_v1 ?? "private")) && (_v3 ?? 0) + _v4 > _v2)({
              view: _v4?.view,
              embed: _v4?.embed,
              restrictedMax: _v0?.max,
              restrictedUsed: _v0?.used,
              uploadSize: _v1
            })) return _v13("storage_limit"), _v28 ? _v41("storage_limit") : _v11(_v182), !1;
          }
          return _v7;
        }, [_v27, _v26.used, _v26.totalCap, _v26.dailyCountAvailable, _v26.available, _v26.restricted, _v24?.jwt, _v24?.xsrft, _v25, _v28, _v41, _v4?.view, _v4?.embed]);
      return (0, _v65.usePicoEffect)(() => {
        if (!_v25) return !1;
        _v40({
          referrerPage: (0, _v64.deriveUploadReferrerPage)(),
          uploadActiveTab: _v83.UPLOAD_TYPE_TO_TAB[_v29] ?? "upload"
        });
      }, [_v25], {
        once: !0
      }), (0, _v3.useEffect)(() => {
        _v164.FatalAttraction.trackClick({
          container: "svv",
          component: "tabs",
          keyword: _v29
        });
      }, [_v29]), (0, _v3.useEffect)(() => {
        if (_v31) {
          if (_v31.includes("Your account doesn't have enough free space to upload this video") || _v31.includes("You have reached the storage limit for private or embeddable videos")) {
            _v13("storage_limit"), _v28 ? _v41("storage_limit") : _v11(_v182);
            return;
          }
          _v19(_v31.toLowerCase().includes("invalid parameter") ? (0, _v9.translate)({
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
          }) : _v31);
        }
      }, [_v31, _v28, _v41]), (0, _v3.useEffect)(() => {
        _v20 && _v22();
      }, []), (0, _v3.useEffect)(() => {
        let _v0 = _v20.find(_v160);
        if (!_v0 || !_v14) return;
        let _v1 = (({
          clipId: _v0,
          publicId: _v1,
          isMobile: _v2,
          isTranslatorOnboarding: _v3,
          search: _v4
        }) => {
          if (null != _v0 && "" !== _v0) {
            if (_v3) return "/library?utm_campaign=translator_onboarding";
            let _v0 = _v4.includes("source=gif");
            return `/manage/videos/${_v0}${!_v2 && _v0 ? "?tool=gifs" : ""}`;
          }
          return null != _v1 && "" !== _v1 ? `/manage/files/${_v1}` : null;
        })({
          clipId: _v0.clipId,
          publicId: _v0.publicId,
          isMobile: _v28,
          isTranslatorOnboarding: _v9,
          search: window.location.search
        });
        _v1 && _v8.push(_v1);
      }, [_v8, _v20, _v28, _v14, _v9]), (0, _v3.useEffect)(() => _v21(_v42), [_v21, _v42]), (0, _v1.jsx)(_v71.PullUploadProvider, {
        pickerTokens: _v3.pickerTokens,
        children: (0, _v1.jsxs)(_v42.Flex, {
          bgColor: "background",
          flexGrow: "1",
          align: "center",
          direction: "column",
          pos: "relative",
          children: [(0, _v1.jsx)(_v172, {
            onPrivacyClick: () => {
              _v37 ? _v39() : _v38();
            },
            privacy: _v4?.view || "nobody",
            teamLogoUrl: _v34,
            teamUsersRole: _v23?.permissionLevel
          }), _v10 === _v182 && _v24 && (0, _v1.jsx)(_v69.default, {
            apiUrl: _v24.apiUrl,
            userConfig: {
              jwt: _v24.jwt,
              userId: _v24.user?.id
            },
            templateType: "default",
            modalConfig: "storage_limit" === _v12 ? {
              headerText: (0, _v9.translate)({
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
              subHeaderText: (0, _v9.translate)({
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
              headerText: (0, _v9.translate)({
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
              subHeaderText: (0, _v9.translate)({
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
          }), (0, _v1.jsxs)(_v177, {
            children: [_v32 && (0, _v1.jsx)(_v175, {}), _v18 && (0, _v1.jsx)(_v179, {
              children: (0, _v1.jsx)(_v66.UploadErrorMessage, {
                error: _v18,
                onClose: () => _v19("")
              })
            }), (0, _v1.jsx)(_v178, {
              children: (0, _v1.jsx)(_v84, {
                hasNotice: _v18 && _v18.length > 0 || _v32,
                children: (0, _v1.jsx)(_v155, {
                  ..._v0,
                  teamLogoUrl: _v34,
                  capabilities: _v35,
                  isLoading: _v36,
                  upsellModalType: _v10,
                  error: _v18,
                  setisPrivateToMeFolderSelected: _v17
                })
              })
            }), (0, _v1.jsx)(_v176.SideDrawer, {
              isOpen: _v37,
              onClose: _v39,
              side: "right",
              children: (0, _v1.jsx)(_v163, {
                isPrivateToMeFolderSelected: _v16,
                capabilities: _v35 ?? null,
                isLoading: _v36,
                teamOwnersId: _v2,
                setPrivacy: _v5,
                privacy: _v4,
                uploadPageConfig: _v3,
                uploadingFileSize: _v20.length ? _v20.reduce((_v0, _v1) => _v0 + (_v1.initialSize || 0), 0) : void 0,
                updateContentRating: _v7,
                onClose: _v39
              })
            })]
          })]
        })
      });
    },
    _v184 = {
      add: !1,
      comments: "nobody",
      download: !1,
      embed: "private",
      view: "nobody"
    };
  _v0.s(["UploadHome", 0, ({
    initialTeamId: _v0,
    defaultFolderId: _v1,
    isTranslatorOnboarding: _v2 = !1
  }) => {
    let _v3 = (0, _v2.useRouter)(),
      _v4 = _v3.query?.params?.[0] || _v83.UPLOAD_ROUTES.UPLOAD,
      [_v5, _v6] = (0, _v3.useState)(_v0),
      [_v7, _v8] = (0, _v3.useState)(),
      [_v9, _v10] = (0, _v3.useState)(),
      {
        expiryDays: _v11,
        isDefault: _v12,
        isEligible: _v13
      } = (0, _v39.useFreeTierUnlistedSettings)(),
      _v14 = (0, _v41.useViewer)(),
      {
        loading: _v15,
        config: _v16,
        error: _v17
      } = ((_v0, _v1) => {
        let _v2 = (0, _v3.useContext)(_v56.CacheContext),
          [_v3, _v4] = (0, _v3.useReducer)(_v57.configReducer, _v57.initialConfigFetchState);
        return (0, _v3.useEffect)(() => {
          (0, _v57.loadUploadPageConfig)({
            userId: _v0,
            folderId: _v1,
            cache: _v2,
            dispatch: _v4,
            isWebControllerError: _v58
          });
        }, [_v0]), _v3;
      })(_v5, _v1),
      _v18 = (0, _v3.useMemo)(() => _v16?.teamConfigs?.find(_v0 => _v0.ownerId === _v5), [_v16, _v5]),
      {
        data: _v19
      } = (0, _v5.useGetUser)(() => _v5 ? {
        where: {
          userId: _v5
        },
        select: ["preferences.videos.password", "preferences.videos.rating", "preferences.videos.privacy.view", "preferences.videos.privacy.isDefault", "preferences.videos.privacy.comments", "preferences.videos.privacy.embed", "preferences.videos.privacy.download", "preferences.videos.privacy.add", "preferences.videos.privacy.clipEmbedAllowedDomains", "preferences.videos.privacy.allowShareLink"],
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null);
    return ((0, _v3.useEffect)(() => {
      if (_v18?.permissionLevel === "Uploader") _v10(_v184);else if (_v19) {
        _v8(_v19.preferences?.videos?.rating);
        let _v0 = _v19.preferences?.videos?.privacy,
          _v1 = !_v0?.isDefault,
          _v2 = null !== _v5 && _v5 === _v14?.user?.id,
          _v3 = _v2 && _v12 && _v13 && _v11 > 0,
          _v4 = _v2 && _v1 && _v0?.view === _v38.DEFAULT_PRIVACY_VALUES.UNLISTED && _v13 && _v11 <= 0 ? _v38.DEFAULT_PRIVACY_VALUES.PRIVATE : _v1 ? _v0?.view : _v3 ? _v38.DEFAULT_PRIVACY_VALUES.UNLISTED : _v38.DEFAULT_PRIVACY_VALUES.PRIVATE;
        _v10({
          ..._v0,
          view: _v4,
          password: _v19.preferences?.videos?.password,
          embedDomains: _v19.preferences?.videos?.privacy?.clipEmbedAllowedDomains?.map(_v0 => ({
            domain: _v0,
            allowHd: !1,
            uri: _v0
          }))
        });
      }
    }, [_v19, _v5, _v18, _v12, _v13, _v11, _v14?.user?.id]), _v15) ? (0, _v1.jsx)(_v53, {}) : _v19 && _v17 ? (0, _v1.jsx)(_v40.ErrorPage, {
      error: new _v4.UnauthorizedError(_v17.displayMessage)
    }) : (0, _v1.jsx)(_v36, {
      children: (0, _v1.jsx)(_v183, {
        privacy: _v9,
        setPrivacy: _v0 => {
          _v10(_v0 => ({
            ..._v0,
            ..._v0
          }));
        },
        switchTeam: _v6,
        teamOwnersId: _v5,
        uploadPageConfig: _v16,
        uploadRoute: _v4,
        contentRating: _v7,
        updateContentRating: _v0 => {
          _v8(_v0);
        },
        isTranslatorOnboarding: _v2
      })
    });
  }], 0);
}