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
  let _v19 = {
      trial: _v17.Calendar,
      expired: _v0 => (0, _v1.jsx)(_v18.Icon, {
        viewBox: "0 0 24 24",
        ..._v0,
        fill: "none",
        children: (0, _v1.jsx)("path", {
          d: "M12.337 7h-3.34v1a1 1 0 0 1-2 0V7h-1a1 1 0 0 0-1 1v3h1.34a1 1 0 1 1 0 2h-1.34v1.34a1 1 0 1 1-2 0V8a3 3 0 0 1 3-3h1V4a1 1 0 1 1 2 0v1h3.34a1 1 0 1 1 0 2ZM2.287 20.29l1.6-1.6 16.4-16.4a1.005 1.005 0 0 1 1.42 1.42l-1.91 1.9a3 3 0 0 1 1.2 2.39v10a3 3 0 0 1-3 3h-12a3.002 3.002 0 0 1-1.29-.3l-1 1a1 1 0 1 1-1.42-1.41ZM18.997 8a1 1 0 0 0-.66-.93L14.407 11h4.59V8Zm-1 11a1 1 0 0 0 1-1v-5h-6.59l-6 6h11.59Z",
          fill: "currentColor"
        })
      })
    },
    _v20 = ({
      variant: _v0,
      title: _v1,
      description: _v2,
      onContactSalesClick: _v3
    }) => {
      let _v4 = (0, _v16.useColorModeValue)("upsell-secondary", "purple.800"),
        _v5 = _v19[_v0];
      return (0, _v1.jsxs)(_v10.Flex, {
        width: "100%",
        alignItems: "center",
        gap: "4",
        p: "3",
        borderRadius: "lg",
        backgroundColor: _v4,
        children: [(0, _v1.jsx)(_v5, {
          boxSize: "sm",
          color: "text-primary",
          flexShrink: 0,
          "aria-hidden": "true"
        }), (0, _v1.jsxs)(_v10.Flex, {
          direction: "column",
          flex: 1,
          minWidth: 0,
          children: [(0, _v1.jsx)(_v14.Text, {
            variant: "heading-xs",
            color: "text-primary",
            children: _v1
          }), (0, _v1.jsx)(_v14.Text, {
            variant: "body-sm",
            color: "text-primary",
            children: _v2
          })]
        }), (0, _v1.jsx)(_v9.Button, {
          onClick: _v3,
          variant: "upsell",
          size: "sm",
          flexShrink: 0,
          children: (0, _v15.translate)({
            singular: "Contact sales",
            dictionary: {
              es: {
                singular: "Comunicarse con Ventas"
              },
              "de-DE": {
                singular: "Sales-Team kontaktieren"
              },
              "fr-FR": {
                singular: "Service commercial"
              },
              "ja-JP": {
                singular: "営業チームへ問い合わせる"
              },
              "ko-KR": {
                singular: "영업팀에 문의"
              },
              "pt-BR": {
                singular: "Falar com vendas"
              },
              "zh-CN": {
                singular: "联系销售"
              }
            }
          })
        })]
      });
    };
  var _v21 = _v0.i(0),
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
    value: _v0,
    onChange: _v1,
    initialOpen: _v2 = !1,
    fullWidth: _v3 = !1,
    onOpen: _v4,
    onClose: _v5
  }) => {
    let [_v6, _v7] = (0, _v6.useState)(_v2),
      _v8 = (0, _v6.useCallback)(() => {
        _v7(!0), _v4?.();
      }, [_v4]),
      _v9 = (0, _v6.useCallback)(() => {
        _v0 || (_v7(!1), _v5?.());
      }, [_v0, _v5]),
      _v10 = (0, _v6.useCallback)(() => {
        _v1(""), _v7(!1), _v5?.();
      }, [_v1, _v5]);
    return _v6 ? (0, _v1.jsxs)(_v36.InputGroup, {
      size: "sm",
      width: _v3 ? "100%" : "296px",
      children: [(0, _v1.jsx)(_v37.InputLeftElement, {
        pointerEvents: "none",
        h: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        children: (0, _v1.jsx)(_v39.SearchMagnifier, {
          boxSize: "20px",
          color: "text-secondary"
        })
      }), (0, _v1.jsx)(_v35.Input, {
        autoFocus: !0,
        value: _v0,
        onChange: _v0 => _v1(_v0.target.value),
        onBlur: _v9,
        placeholder: (0, _v15.translate)({
          singular: "Search event series",
          dictionary: {
            es: {
              singular: "Buscar series de eventos"
            },
            "de-DE": {
              singular: "Event-Serien suchen"
            },
            "fr-FR": {
              singular: "Rechercher des séries d'événements"
            },
            "ja-JP": {
              singular: "イベントシリーズを検索"
            },
            "ko-KR": {
              singular: "이벤트 시리즈 검색"
            },
            "pt-BR": {
              singular: "Pesquisar séries de eventos"
            },
            "zh-CN": {
              singular: "搜索系列活动"
            }
          }
        }),
        type: "search",
        autoComplete: "off",
        _placeholder: {
          color: "text-secondary"
        },
        sx: {
          "::-webkit-search-cancel-button": {
            WebkitAppearance: "none"
          }
        }
      }), _v0 && (0, _v1.jsx)(_v37.InputRightElement, {
        h: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        children: (0, _v1.jsx)(_v38.CloseXCircleFilled, {
          boxSize: "20px",
          color: "text-primary",
          cursor: "pointer",
          onMouseDown: _v0 => {
            _v0.preventDefault(), _v10();
          }
        })
      })]
    }) : (0, _v1.jsx)(_v34.IconButton, {
      "aria-label": (0, _v15.translate)({
        singular: "Search event series",
        dictionary: {
          es: {
            singular: "Buscar series de eventos"
          },
          "de-DE": {
            singular: "Event-Serien suchen"
          },
          "fr-FR": {
            singular: "Rechercher des séries d'événements"
          },
          "ja-JP": {
            singular: "イベントシリーズを検索"
          },
          "ko-KR": {
            singular: "이벤트 시리즈 검색"
          },
          "pt-BR": {
            singular: "Pesquisar séries de eventos"
          },
          "zh-CN": {
            singular: "搜索系列活动"
          }
        }
      }),
      icon: (0, _v1.jsx)(_v39.SearchMagnifier, {}),
      variant: "tertiary",
      size: "sm",
      onClick: _v8
    });
  };
  var _v41 = _v0.i(0),
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
    _v52 = _v0.i(0);
  let _v53 = /\/event_series\/(\d+)/,
    _v54 = _v0 => {
      let _v1 = _v0.match(_v53);
      return _v1 ? Number(_v1[1]) : null;
    },
    _v55 = _v0 => {
      let _v1 = _v54(_v0);
      return _v1 ? `/manage/event_series/${_v1}` : null;
    },
    _v56 = ["uri", "name"],
    _v57 = ({
      onClose: _v0,
      ownerId: _v1,
      onCreated: _v2
    }) => {
      let _v3 = (0, _v51.useToast)(),
        [_v4, _v5] = (0, _v6.useState)(""),
        [_v6, _v7] = (0, _v6.useState)(""),
        [_v8, {
          loading: _v9,
          error: _v10,
          callCount: _v11,
          data: _v12
        }] = (0, _v52.usePostUserEventSeries)(),
        _v13 = (0, _v6.useRef)(0),
        _v14 = (0, _v6.useRef)(!1),
        {
          trackEventSeriesCreated: _v15
        } = (0, _v22.useEventSeriesTracking)(),
        _v16 = _v4.trim(),
        _v17 = _v16.length > 0 && !_v9 && !!_v1;
      (0, _v6.useEffect)(() => {
        if (0 === _v11 || _v9 || _v11 === _v13.current) return;
        if (_v13.current = _v11, _v10) return void _v3({
          isClosable: !0,
          title: (0, _v15.translate)({
            singular: "Something went wrong. Your event series was not created.",
            dictionary: {
              es: {
                singular: "Algo salió mal. No se creó su serie de eventos."
              },
              "de-DE": {
                singular: "Etwas ist schiefgelaufen. Ihre Eventreihe wurde nicht erstellt."
              },
              "fr-FR": {
                singular: "Un problème est survenu. Votre série d’événements n’a pas été créée."
              },
              "ja-JP": {
                singular: "問題が発生しました。イベントシリーズは作成されませんでした。"
              },
              "ko-KR": {
                singular: "문제가 발생했습니다. 이벤트 시리즈가 생성되지 않았습니다."
              },
              "pt-BR": {
                singular: "Algo deu errado. Sua série de eventos não foi criada."
              },
              "zh-CN": {
                singular: "出现问题。您的活动系列未创建。"
              }
            }
          }),
          variant: "warning"
        });
        _v3({
          isClosable: !0,
          title: (0, _v15.translate)({
            singular: "Event series created",
            dictionary: {
              es: {
                singular: "Serie de eventos creada"
              },
              "de-DE": {
                singular: "Eventreihe erstellt"
              },
              "fr-FR": {
                singular: "Série d’événements créée"
              },
              "ja-JP": {
                singular: "イベントシリーズが作成されました"
              },
              "ko-KR": {
                singular: "이벤트 시리즈가 생성되었습니다."
              },
              "pt-BR": {
                singular: "Série de eventos criada"
              },
              "zh-CN": {
                singular: "活动系列已创建"
              }
            }
          })
        });
        let _v0 = _v12?.uri ? _v54(_v12.uri) : null;
        _v15({
          eventSeriesId: null != _v0 ? String(_v0) : "",
          hasDescription: _v14.current
        });
        let _v1 = _v12?.uri ? _v55(_v12.uri) : null;
        _v1 ? window.location.assign(_v1) : _v2();
      }, [_v11, _v9, _v10, _v3, _v2, _v12, _v15]);
      let _v18 = () => {
        _v9 || _v0();
      };
      return (0, _v1.jsxs)(_v44.Modal, {
        isOpen: !0,
        onClose: _v18,
        children: [(0, _v1.jsx)(_v49.ModalOverlay, {}), (0, _v1.jsx)(_v46.ModalContent, {
          children: (0, _v1.jsxs)("form", {
            onSubmit: _v0 => {
              if (_v0?.preventDefault(), !_v17 || !_v1) return;
              let _v1 = _v6.trim();
              _v14.current = _v1.length > 0, _v8({
                where: {
                  userId: _v1
                },
                select: _v56,
                variables: {
                  name: _v16,
                  privacy: "team",
                  ...(_v1 ? {
                    description: _v1
                  } : {})
                }
              });
            },
            children: [(0, _v1.jsx)(_v48.ModalHeader, {
              children: (0, _v1.jsx)(_v11.Header, {
                size: "md",
                children: (0, _v15.translate)({
                  singular: "New event series",
                  dictionary: {
                    es: {
                      singular: "Nueva serie de eventos"
                    },
                    "de-DE": {
                      singular: "Neue Eventreihe"
                    },
                    "fr-FR": {
                      singular: "Nouvelle série d'événements"
                    },
                    "ja-JP": {
                      singular: "新しいイベントシリーズ"
                    },
                    "ko-KR": {
                      singular: "새 이벤트 시리즈"
                    },
                    "pt-BR": {
                      singular: "Nova série de eventos"
                    },
                    "zh-CN": {
                      singular: "新建活动系列"
                    }
                  }
                })
              })
            }), (0, _v1.jsx)(_v45.ModalBody, {
              children: (0, _v1.jsxs)(_v10.Flex, {
                flexDirection: "column",
                gap: "md",
                children: [(0, _v1.jsxs)(_v41.FormControl, {
                  isRequired: !0,
                  children: [(0, _v1.jsx)(_v42.FormLabel, {
                    size: "sm",
                    children: (0, _v15.translate)({
                      singular: "Name",
                      dictionary: {
                        es: {
                          singular: "Nombre"
                        },
                        "fr-FR": {
                          singular: "Nom"
                        },
                        "ja-JP": {
                          singular: "名前"
                        },
                        "ko-KR": {
                          singular: "이름"
                        },
                        "pt-BR": {
                          singular: "Nome"
                        },
                        "zh-CN": {
                          singular: "姓名"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v35.Input, {
                    autoFocus: !0,
                    isDisabled: _v9,
                    onChange: _v0 => _v5(_v0.target.value),
                    placeholder: (0, _v15.translate)({
                      singular: "Event series name",
                      dictionary: {
                        es: {
                          singular: "Nombre de la serie de eventos"
                        },
                        "de-DE": {
                          singular: "Name der Eventreihe"
                        },
                        "fr-FR": {
                          singular: "Nom de la série d’événements"
                        },
                        "ja-JP": {
                          singular: "イベントシリーズ名"
                        },
                        "ko-KR": {
                          singular: "이벤트 시리즈 이름"
                        },
                        "pt-BR": {
                          singular: "Nome da série de eventos"
                        },
                        "zh-CN": {
                          singular: "活动系列名称"
                        }
                      }
                    }),
                    value: _v4
                  })]
                }), (0, _v1.jsxs)(_v41.FormControl, {
                  children: [(0, _v1.jsx)(_v42.FormLabel, {
                    size: "sm",
                    children: (0, _v15.translate)({
                      singular: "Description",
                      dictionary: {
                        es: {
                          singular: "Descripción"
                        },
                        "de-DE": {
                          singular: "Beschreibung"
                        },
                        "ja-JP": {
                          singular: "説明"
                        },
                        "ko-KR": {
                          singular: "설명"
                        },
                        "pt-BR": {
                          singular: "Descrição"
                        },
                        "zh-CN": {
                          singular: "描述"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v50.Textarea, {
                    isDisabled: _v9,
                    maxLength: 0,
                    onChange: _v0 => _v7(_v0.target.value),
                    placeholder: (0, _v15.translate)({
                      singular: "What is this event series about?",
                      dictionary: {
                        es: {
                          singular: "¿De qué trata esta serie de eventos?"
                        },
                        "de-DE": {
                          singular: "Worum geht es in dieser Eventreihe?"
                        },
                        "fr-FR": {
                          singular: "De quoi parle cette série d’événements ?"
                        },
                        "ja-JP": {
                          singular: "このイベントシリーズは何についてのものですか？"
                        },
                        "ko-KR": {
                          singular: "이 이벤트 시리즈는 어떤 내용인가요?"
                        },
                        "pt-BR": {
                          singular: "Sobre o que é esta série de eventos?"
                        },
                        "zh-CN": {
                          singular: "这个活动系列是关于什么的？"
                        }
                      }
                    }),
                    value: _v6
                  })]
                })]
              })
            }), (0, _v1.jsx)(_v47.ModalFooter, {
              children: (0, _v1.jsxs)(_v43.HStack, {
                spacing: "0.5rem",
                children: [(0, _v1.jsx)(_v9.Button, {
                  onClick: _v18,
                  type: "button",
                  variant: "tertiary",
                  children: (0, _v15.translate)({
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
                }), (0, _v1.jsx)(_v9.Button, {
                  isDisabled: !_v17,
                  isLoading: _v9,
                  type: "submit",
                  variant: "primary",
                  children: (0, _v15.translate)({
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
              })
            })]
          })
        })]
      });
    };
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  let _v60 = ({
    isCreateDisabled: _v0 = !0,
    onCreate: _v1
  }) => (0, _v1.jsx)(_v10.Flex, {
    align: "center",
    direction: "column",
    gap: "lg",
    justify: "center",
    padding: "md",
    children: (0, _v1.jsx)(_v59.EmptyState, {
      cta: (0, _v1.jsx)(_v9.Button, {
        isDisabled: _v0,
        onClick: _v1,
        size: "sm",
        variant: "primary",
        children: (0, _v15.translate)({
          singular: "New event series",
          dictionary: {
            es: {
              singular: "Nueva serie de eventos"
            },
            "de-DE": {
              singular: "Neue Eventreihe"
            },
            "fr-FR": {
              singular: "Nouvelle série d'événements"
            },
            "ja-JP": {
              singular: "新しいイベントシリーズ"
            },
            "ko-KR": {
              singular: "새 이벤트 시리즈"
            },
            "pt-BR": {
              singular: "Nova série de eventos"
            },
            "zh-CN": {
              singular: "新建活动系列"
            }
          }
        })
      }),
      header: (0, _v15.translate)({
        singular: "No event series yet",
        dictionary: {
          es: {
            singular: "Aún no hay series de eventos"
          },
          "de-DE": {
            singular: "Noch keine Eventreihen"
          },
          "fr-FR": {
            singular: "Aucune série d'événements pour le moment"
          },
          "ja-JP": {
            singular: "まだイベントシリーズがありません"
          },
          "ko-KR": {
            singular: "아직 이벤트 시리즈가 없습니다"
          },
          "pt-BR": {
            singular: "Ainda não há séries de eventos"
          },
          "zh-CN": {
            singular: "尚无活动系列"
          }
        }
      }),
      icon: (0, _v1.jsx)(_v58.BrowserWindow, {
        height: "2xl",
        width: "2xl"
      }),
      subheader: (0, _v15.translate)({
        singular: "No event series yet. Create one to start showcasing your live events.",
        dictionary: {
          es: {
            singular: "Aún no hay series de eventos. Crea una para empezar a mostrar tus eventos en vivo."
          },
          "de-DE": {
            singular: "Noch keine Eventreihen. Erstellen Sie eine, um Ihre Live-Events zu präsentieren."
          },
          "fr-FR": {
            singular: "Aucune série d'événements pour le moment. Créez-en une pour commencer à mettre en avant vos événements en direct."
          },
          "ja-JP": {
            singular: "まだイベントシリーズがありません。作成して、ライブイベントを紹介し始めましょう。"
          },
          "ko-KR": {
            singular: "아직 이벤트 시리즈가 없습니다. 하나를 만들어 라이브 이벤트를 선보이기 시작하세요."
          },
          "pt-BR": {
            singular: "Ainda não há séries de eventos. Crie uma para começar a exibir seus eventos ao vivo."
          },
          "zh-CN": {
            singular: "尚无活动系列。创建一个以开始展示您的直播活动。"
          }
        }
      })
    })
  });
  var _v61 = _v0.i(0),
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
    _v77 = _v0.i(0);
  let _v78 = ({
      onClose: _v0,
      onDeleted: _v1,
      userId: _v2,
      eventSeriesId: _v3,
      name: _v4
    }) => {
      let _v5 = (0, _v51.useToast)(),
        [_v6, {
          loading: _v7,
          error: _v8,
          callCount: _v9
        }] = (0, _v77.useDeleteUserEventSery)(),
        _v10 = (0, _v6.useRef)(0),
        {
          trackEventSeriesDeleted: _v11
        } = (0, _v22.useEventSeriesTracking)();
      (0, _v6.useEffect)(() => {
        if (0 !== _v9 && !_v7 && _v9 !== _v10.current) {
          if (_v10.current = _v9, _v8) return void _v5({
            isClosable: !0,
            title: (0, _v15.translate)({
              singular: "Something went wrong. Your event series was not deleted.",
              dictionary: {
                es: {
                  singular: "Algo salió mal. No se eliminó su serie de eventos."
                },
                "de-DE": {
                  singular: "Etwas ist schiefgelaufen. Ihre Eventreihe wurde nicht gelöscht."
                },
                "fr-FR": {
                  singular: "Un problème est survenu. Votre série d’événements n’a pas été supprimée."
                },
                "ja-JP": {
                  singular: "問題が発生しました。イベントシリーズは削除されませんでした。"
                },
                "ko-KR": {
                  singular: "문제가 발생했습니다. 이벤트 시리즈가 삭제되지 않았습니다."
                },
                "pt-BR": {
                  singular: "Algo deu errado. Sua série de eventos não foi excluída."
                },
                "zh-CN": {
                  singular: "出现问题。您的活动系列未删除。"
                }
              }
            }),
            variant: "warning"
          });
          _v5({
            isClosable: !0,
            title: (0, _v15.translate)({
              singular: "Event series deleted",
              dictionary: {
                es: {
                  singular: "Serie de eventos eliminada"
                },
                "de-DE": {
                  singular: "Eventreihe gelöscht"
                },
                "fr-FR": {
                  singular: "Série d’événements supprimée"
                },
                "ja-JP": {
                  singular: "イベントシリーズが削除されました"
                },
                "ko-KR": {
                  singular: "이벤트 시리즈가 삭제되었습니다."
                },
                "pt-BR": {
                  singular: "Série de eventos excluída"
                },
                "zh-CN": {
                  singular: "活动系列已删除"
                }
              }
            })
          }), _v11({
            eventSeriesId: String(_v3)
          }), _v1();
        }
      }, [_v9, _v7, _v8, _v5, _v1, _v11, _v3]);
      let _v12 = () => {
        _v7 || _v0();
      };
      return (0, _v1.jsxs)(_v44.Modal, {
        isOpen: !0,
        onClose: _v12,
        children: [(0, _v1.jsx)(_v49.ModalOverlay, {}), (0, _v1.jsxs)(_v46.ModalContent, {
          borderRadius: "md",
          children: [(0, _v1.jsx)(_v48.ModalHeader, {
            color: "text-primary",
            fontSize: "heading-md",
            padding: "lg",
            children: (0, _v15.translate)({
              singular: "Delete event series?",
              dictionary: {
                es: {
                  singular: "¿Eliminar la serie de eventos?"
                },
                "de-DE": {
                  singular: "Eventreihe löschen?"
                },
                "fr-FR": {
                  singular: "Supprimer la série d’événements ?"
                },
                "ja-JP": {
                  singular: "イベントシリーズを削除しますか？"
                },
                "ko-KR": {
                  singular: "이 이벤트 시리즈를 삭제하시겠습니까?"
                },
                "pt-BR": {
                  singular: "Excluir série de eventos?"
                },
                "zh-CN": {
                  singular: "删除活动系列？"
                }
              }
            })
          }), (0, _v1.jsx)(_v45.ModalBody, {
            color: "text-primary",
            fontSize: "body-md",
            padding: "0.5rem 1.5rem",
            children: (0, _v15.translate)({
              singular: "{NAME} will be deleted. This action can't be undone.",
              replacements: {
                NAME: _v4
              },
              dictionary: {
                es: {
                  singular: "Se eliminará {NAME}. Esta acción no se puede deshacer."
                },
                "de-DE": {
                  singular: "{NAME} wird gelöscht. Diese Aktion kann nicht rückgängig gemacht werden."
                },
                "fr-FR": {
                  singular: "{NAME} sera supprimée. Cette action est irréversible."
                },
                "ja-JP": {
                  singular: "{NAME}は削除されます。この操作は元に戻せません。"
                },
                "ko-KR": {
                  singular: "{NAME}이(가) 삭제됩니다. 이 작업은 되돌릴 수 없습니다."
                },
                "pt-BR": {
                  singular: "{NAME} será excluída. Esta ação não pode ser desfeita."
                },
                "zh-CN": {
                  singular: "{NAME} 将被删除。此操作无法撤销。"
                }
              }
            })
          }), (0, _v1.jsxs)(_v47.ModalFooter, {
            border: "0",
            padding: "lg",
            children: [(0, _v1.jsx)(_v9.Button, {
              onClick: _v12,
              variant: "tertiary",
              children: (0, _v15.translate)({
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
            }), (0, _v1.jsx)(_v9.Button, {
              isDisabled: _v7,
              isLoading: _v7,
              onClick: () => {
                _v6({
                  where: {
                    userId: _v2,
                    eventSeriesId: _v3
                  }
                });
              },
              variant: "destructive",
              children: (0, _v15.translate)({
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
    },
    _v79 = ({
      link: _v0,
      uri: _v1,
      name: _v2,
      onDeleted: _v3,
      size: _v4 = "sm"
    }) => {
      let _v5,
        _v6 = (0, _v51.useToast)(),
        [_v7, _v8] = (0, _v6.useState)(!1),
        _v9 = (_v5 = _v1.match(/\/users\/(\d+)\/event_series\/(\d+)/)) ? {
          userId: Number(_v5[1]),
          eventSeriesId: Number(_v5[2])
        } : null,
        _v10 = _v55(_v1);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v8.Box, {
          onClick: _v0 => {
            _v0.preventDefault(), _v0.stopPropagation();
          },
          children: (0, _v1.jsxs)(_v65.Menu, {
            strategy: "fixed",
            children: [(0, _v1.jsx)(_v66.MenuButton, {
              "aria-label": (0, _v15.translate)({
                singular: "Menu",
                dictionary: {
                  es: {
                    singular: "Menú"
                  },
                  "de-DE": {
                    singular: "Menü"
                  },
                  "ja-JP": {
                    singular: "メニュー"
                  },
                  "ko-KR": {
                    singular: "메뉴"
                  },
                  "zh-CN": {
                    singular: "菜单"
                  }
                }
              }),
              as: _v34.IconButton,
              icon: (0, _v1.jsx)(_v72.EllipsisV, {}),
              size: _v4,
              variant: "tertiary"
            }), (0, _v1.jsx)(_v70.Portal, {
              children: (0, _v1.jsxs)(_v69.MenuList, {
                zIndex: _v25.ACTIONS_MENU_Z_INDEX,
                children: [_v10 && (0, _v1.jsx)(_v68.MenuItem, {
                  icon: (0, _v1.jsx)(_v71.EditPencil, {}),
                  onClick: () => {
                    _v10 && window.location.assign(_v10);
                  },
                  children: (0, _v15.translate)({
                    singular: "Edit",
                    dictionary: {
                      es: {
                        singular: "Editar"
                      },
                      "de-DE": {
                        singular: "Bearbeiten"
                      },
                      "fr-FR": {
                        singular: "Modifier"
                      },
                      "ja-JP": {
                        singular: "編集"
                      },
                      "ko-KR": {
                        singular: "편집"
                      },
                      "pt-BR": {
                        singular: "Editar"
                      },
                      "zh-CN": {
                        singular: "编辑"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v68.MenuItem, {
                  icon: (0, _v1.jsx)(_v74.Link, {}),
                  onClick: () => {
                    _v6((0, _v76.default)(_v0) ? {
                      isClosable: !0,
                      title: (0, _v15.translate)({
                        singular: "Link copied to clipboard",
                        dictionary: {
                          es: {
                            singular: "Copiamos el vínculo en el portapapeles"
                          },
                          "de-DE": {
                            singular: "Link in Zwischenablage kopiert"
                          },
                          "fr-FR": {
                            singular: "Lien copié dans le presse-papier"
                          },
                          "ja-JP": {
                            singular: "リンクがクリップボードにコピーされました"
                          },
                          "ko-KR": {
                            singular: "클립보드로 링크 복사됨"
                          },
                          "pt-BR": {
                            singular: "Link copiado para a área de transferência"
                          },
                          "zh-CN": {
                            singular: "链接已复制到剪贴板"
                          }
                        }
                      })
                    } : {
                      isClosable: !0,
                      title: (0, _v15.translate)({
                        singular: "Couldn't copy the link. Please try again.",
                        dictionary: {
                          es: {
                            singular: "No se pudo copiar el enlace. Por favor, inténtelo de nuevo."
                          },
                          "de-DE": {
                            singular: "Der Link konnte nicht kopiert werden. Bitte versuchen Sie es erneut."
                          },
                          "fr-FR": {
                            singular: "Impossible de copier le lien. Veuillez réessayer."
                          },
                          "ja-JP": {
                            singular: "リンクをコピーできませんでした。もう一度お試しください。"
                          },
                          "ko-KR": {
                            singular: "링크를 복사할 수 없습니다. 다시 시도해주세요."
                          },
                          "pt-BR": {
                            singular: "Não foi possível copiar o link. Por favor, tente novamente."
                          },
                          "zh-CN": {
                            singular: "无法复制链接。请重试。"
                          }
                        }
                      }),
                      variant: "warning"
                    });
                  },
                  children: (0, _v15.translate)({
                    singular: "Copy link",
                    dictionary: {
                      es: {
                        singular: "Copiar vínculo"
                      },
                      "de-DE": {
                        singular: "Link kopieren"
                      },
                      "fr-FR": {
                        singular: "Copier le lien"
                      },
                      "ja-JP": {
                        singular: "リンクをコピー"
                      },
                      "ko-KR": {
                        singular: "링크 복사"
                      },
                      "pt-BR": {
                        singular: "Copiar link"
                      },
                      "zh-CN": {
                        singular: "复制链接"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v68.MenuItem, {
                  icon: (0, _v1.jsx)(_v73.Eye, {}),
                  onClick: () => {
                    window.open(_v0, "_blank", "noopener,noreferrer");
                  },
                  children: (0, _v15.translate)({
                    singular: "Preview page",
                    dictionary: {
                      es: {
                        singular: "Página de vista previa"
                      },
                      "de-DE": {
                        singular: "Vorschau-Seite"
                      },
                      "fr-FR": {
                        singular: "Page d’aperçu"
                      },
                      "ja-JP": {
                        singular: "プレビューページ"
                      },
                      "ko-KR": {
                        singular: "미리보기 페이지"
                      },
                      "pt-BR": {
                        singular: "Visualizar página"
                      },
                      "zh-CN": {
                        singular: "预览页面"
                      }
                    }
                  })
                }), _v9 && (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v67.MenuDivider, {}), (0, _v1.jsx)(_v68.MenuItem, {
                    icon: (0, _v1.jsx)(_v75.TrashBin, {}),
                    onClick: () => _v8(!0),
                    children: (0, _v15.translate)({
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
          })
        }), _v9 && _v7 && (0, _v1.jsx)(_v78, {
          eventSeriesId: _v9.eventSeriesId,
          name: _v2,
          onClose: () => _v8(!1),
          onDeleted: () => {
            _v8(!1), _v3();
          },
          userId: _v9.userId
        })]
      });
    },
    _v80 = _v0 => {
      if (!_v0?.sizes?.length) return _v0?.baseLink ?? null;
      let _v1 = [..._v0.sizes].sort((_v0, _v1) => (_v1.width ?? 0) - (_v0.width ?? 0)),
        _v2 = _v1.find(_v0 => (_v0.width ?? 0) > 0 && (_v0.width ?? 0) <= 720) ?? _v1[0];
      return _v2?.link ?? _v0.baseLink ?? null;
    },
    _v81 = ({
      series: _v0,
      isLoading: _v1 = !1,
      onSeriesDeleted: _v2
    }) => (0, _v1.jsx)(_v64.ContentGrid, {
      children: (0, _v1.jsxs)(_v64.ContentGrid.Body, {
        children: [_v0.map(_v0 => {
          let _v1 = _v80(_v0.pictures),
            _v2 = _v0.metadata.connections.events.total;
          return (0, _v1.jsx)(_v62.ShowcaseCard, {
            actionsMenu: (0, _v1.jsx)(_v79, {
              link: _v0.link,
              name: _v0.name,
              onDeleted: _v2,
              size: "sm",
              uri: _v0.uri
            }),
            href: _v55(_v0.uri) ?? _v0.link,
            showGrid: !!_v1,
            subtitle: `${(0, _v15.translate)({
              singular: "{NUM} event",
              plural: "{NUM} events",
              count: _v2,
              replacements: {
                NUM: _v2
              },
              dictionary: {
                es: {
                  singular: "{NUM} evento",
                  plural: "{NUM} eventos"
                },
                "de-DE": {
                  singular: "{NUM} Event",
                  plural: "{NUM} Events"
                },
                "fr-FR": {
                  singular: "{NUM} événement",
                  plural: "{NUM} événements"
                },
                "ja-JP": {
                  singular: "{NUM} 件のイベント",
                  plural: "{NUM} 件のイベント"
                },
                "ko-KR": {
                  singular: "이벤트 {NUM}개",
                  plural: "이벤트 {NUM}개"
                },
                "pt-BR": {
                  singular: "{NUM} evento",
                  plural: "{NUM} eventos"
                },
                "zh-CN": {
                  singular: "{NUM} 个活动",
                  plural: "{NUM} 个活动"
                }
              }
            })} • ${(0, _v63.getDisplayDate)(_v0.createdTime)}`,
            thumbnails: _v1 ? [_v1] : [],
            title: _v0.name
          }, _v0.uri);
        }), _v1 && (0, _v1.jsx)(_v61.LoadingCardsGrid, {})]
      })
    });
  var _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0);
  let _v85 = `${(0, _v82.rem)(150)} 1fr ${(0, _v82.rem)(200)} ${(0, _v82.rem)(56)}`,
    _v86 = () => (0, _v1.jsxs)(_v83.ContentRow, {
      disableHover: !0,
      listGridColumns: _v85,
      sx: {
        display: {
          base: "none",
          md: "grid"
        },
        backgroundColor: "fill-component",
        minHeight: "2.5rem"
      },
      children: [(0, _v1.jsx)(_v83.ContentRow.Column, {
        children: (0, _v1.jsx)(_v1.Fragment, {})
      }), (0, _v1.jsx)(_v83.ContentRow.Column, {
        children: (0, _v1.jsx)(_v14.Text, {
          color: "text-secondary",
          variant: "heading-xs",
          children: (0, _v15.translate)({
            singular: "Title",
            dictionary: {
              es: {
                singular: "Título"
              },
              "de-DE": {
                singular: "Titel"
              },
              "fr-FR": {
                singular: "Titre"
              },
              "ja-JP": {
                singular: "タイトル"
              },
              "ko-KR": {
                singular: "제목"
              },
              "pt-BR": {
                singular: "Título"
              },
              "zh-CN": {
                singular: "标题"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v83.ContentRow.Column, {
        children: (0, _v1.jsx)(_v14.Text, {
          color: "text-secondary",
          variant: "heading-xs",
          children: (0, _v15.translate)({
            singular: "Added date",
            dictionary: {
              es: {
                singular: "Fecha añadida"
              },
              "de-DE": {
                singular: "Hinzugefügt am"
              },
              "fr-FR": {
                singular: "Date d'ajout"
              },
              "ja-JP": {
                singular: "追加日"
              },
              "ko-KR": {
                singular: "추가 날짜"
              },
              "pt-BR": {
                singular: "Data adicionada"
              },
              "zh-CN": {
                singular: "添加日期"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v83.ContentRow.Column, {
        children: (0, _v1.jsx)(_v1.Fragment, {})
      })]
    }),
    _v87 = ({
      series: _v0,
      isLoading: _v1 = !1,
      onSeriesDeleted: _v2
    }) => (0, _v1.jsxs)(_v10.Flex, {
      direction: "column",
      gap: (0, _v82.rem)(4),
      width: "100%",
      children: [(0, _v1.jsx)(_v86, {}), _v0.map(_v0 => {
        let _v1,
          _v2 = _v80(_v0.pictures);
        return (0, _v1.jsxs)(_v83.ContentRow, {
          cursor: "pointer",
          href: _v55(_v0.uri) ?? _v0.link,
          listGridColumns: _v85,
          children: [(0, _v1.jsx)(_v83.ContentRow.Column, {
            width: "100%",
            children: _v2 ? (0, _v1.jsx)(_v8.Box, {
              aspectRatio: "16 / 9",
              backgroundImage: `url(${_v2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderColor: "stroke",
              borderRadius: "md",
              borderStyle: "solid",
              borderWidth: "1px",
              minWidth: (0, _v82.rem)(120),
              width: "100%"
            }) : (0, _v1.jsx)(_v83.ContentRow.DefaultThumbnail, {
              minWidth: (0, _v82.rem)(120),
              children: (0, _v1.jsx)(_v58.BrowserWindow, {
                color: "text-tertiary",
                boxSize: "lg",
                opacity: "60%"
              })
            })
          }), (0, _v1.jsxs)(_v83.ContentRow.Column, {
            overflow: "hidden",
            children: [(0, _v1.jsx)(_v14.Text, {
              display: "block",
              noOfLines: 1,
              textOverflow: "ellipsis",
              variant: "heading-xs",
              whiteSpace: "nowrap",
              width: "100%",
              children: _v0.name
            }), (0, _v1.jsx)(_v14.Text, {
              color: "text-secondary",
              display: "block",
              noOfLines: 1,
              textOverflow: "ellipsis",
              variant: "body-sm",
              whiteSpace: "nowrap",
              children: (_v1 = _v0.metadata.connections.events.total, (0, _v15.translate)({
                singular: "{NUM} event",
                plural: "{NUM} events",
                count: _v1,
                replacements: {
                  NUM: _v1
                },
                dictionary: {
                  es: {
                    singular: "{NUM} evento",
                    plural: "{NUM} eventos"
                  },
                  "de-DE": {
                    singular: "{NUM} Event",
                    plural: "{NUM} Events"
                  },
                  "fr-FR": {
                    singular: "{NUM} événement",
                    plural: "{NUM} événements"
                  },
                  "ja-JP": {
                    singular: "{NUM} 件のイベント",
                    plural: "{NUM} 件のイベント"
                  },
                  "ko-KR": {
                    singular: "이벤트 {NUM}개",
                    plural: "이벤트 {NUM}개"
                  },
                  "pt-BR": {
                    singular: "{NUM} evento",
                    plural: "{NUM} eventos"
                  },
                  "zh-CN": {
                    singular: "{NUM} 个活动",
                    plural: "{NUM} 个活动"
                  }
                }
              }))
            })]
          }), (0, _v1.jsx)(_v83.ContentRow.Column, {
            overflow: "hidden",
            children: (0, _v1.jsx)(_v14.Text, {
              color: "text-secondary",
              display: "block",
              noOfLines: 1,
              textOverflow: "ellipsis",
              variant: "body-md",
              whiteSpace: "nowrap",
              children: (0, _v63.getDisplayDate)(_v0.createdTime)
            })
          }), (0, _v1.jsx)(_v83.ContentRow.Column, {
            justifyColumn: "flex-end",
            children: (0, _v1.jsx)(_v79, {
              link: _v0.link,
              name: _v0.name,
              onDeleted: _v2,
              size: "md",
              uri: _v0.uri
            })
          })]
        }, _v0.uri);
      }), _v1 && (0, _v1.jsx)(_v84.LoadingStateList, {})]
    }),
    _v88 = ["createdTime", "description", "link", "metadata.connections.events.total", "modifiedTime", "name", "pictures", "pictures.baseLink", "pictures.sizes", "pictures.sizes.link", "pictures.sizes.width", "status", "uri"],
    _v89 = {
      direction: _v25.SORT_DIRECTION.DESC,
      type: _v25.SORT_OPTION.CREATED
    },
    _v90 = ({
      isLoading: _v0,
      onLoadMore: _v1
    }) => {
      let _v2 = (0, _v6.useRef)(null),
        _v3 = (0, _v23.useOnScreen)(_v2);
      return (0, _v6.useEffect)(() => {
        _v3 && !_v0 && _v1();
      }, [_v0, _v3, _v1]), (0, _v1.jsx)(_v8.Box, {
        ref: _v2,
        height: "1px",
        width: "100%"
      });
    },
    _v91 = () => {
      let _v0 = (0, _v32.useViewer)(),
        [_v1, _v2] = (0, _v30.useLayoutPreference)(),
        [_v3, _v4] = (0, _v31.useSortPreference)(_v89, _v25.VL_EVENT_SERIES_SORT_LOCAL_STORAGE_KEY),
        [_v5, _v6] = (0, _v6.useState)(!1),
        [_v7, _v8] = (0, _v6.useState)(!1),
        [_v9, _v10] = (0, _v6.useState)(""),
        [_v11, _v12] = (0, _v6.useState)(""),
        [_v13, _v14] = (0, _v6.useState)(!1),
        _v15 = (0, _v6.useRef)(null),
        {
          trackEventSeriesPageDisplayed: _v16,
          trackEventSeriesCreateButtonClicked: _v17
        } = (0, _v22.useEventSeriesTracking)(),
        _v18 = (0, _v6.useRef)(!1);
      (0, _v6.useEffect)(() => {
        _v18.current || (_v18.current = !0, _v16({
          page: "library",
          eventSeriesId: null,
          referrerPage: (0, _v21.deriveReferrerPage)()
        }));
      }, [_v16]);
      let _v19 = (0, _v7.useAcknowledgeAnnouncement)();
      (0, _v6.useEffect)(() => {
        _v19("event_series_intro");
      }, [_v19]);
      let _v20 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
        {
          series: _v21,
          total: _v22,
          isLoadingInitial: _v23,
          isLoadingMore: _v24,
          isDone: _v25,
          error: _v26,
          loadMore: _v27,
          revalidate: _v28
        } = (({
          ownerId: _v0,
          sort: _v1,
          searchQuery: _v2
        }) => {
          let _v3 = _v2?.trim() ?? "",
            {
              data: _v4,
              error: _v5,
              mutate: _v6,
              setSize: _v7,
              size: _v8
            } = (0, _v52.useGetUserEventSeriesInfinite)(() => _v0 ? {
              select: _v88,
              where: {
                userId: _v0
              },
              query: {
                perPage: 20,
                ...(_v1 ? {
                  sort: _v1.type,
                  direction: _v1.direction
                } : {}),
                ...(_v3 ? {
                  query: _v3
                } : {})
              }
            } : null),
            _v9 = (0, _v6.useRef)(_v3);
          (0, _v6.useEffect)(() => {
            _v9.current !== _v3 && (_v9.current = _v3, _v7(1));
          }, [_v3, _v7]);
          let _v10 = (0, _v6.useMemo)(() => _v4?.flatMap(_v0 => _v0.data), [_v4]),
            _v11 = _v4?.[_v4.length - 1]?.total,
            _v12 = !_v4 && !_v5,
            _v13 = _v12 || _v8 > 0 && !!_v4 && void 0 === _v4[_v8 - 1],
            _v14 = !_v4?.[_v4.length - 1]?.paging.next;
          return {
            error: _v5,
            isDone: _v14,
            isLoadingInitial: _v12,
            isLoadingMore: _v13,
            loadMore: (0, _v6.useCallback)(() => _v7(_v0 => _v0 + 1), [_v7]),
            revalidate: (0, _v6.useCallback)(() => _v6(), [_v6]),
            series: _v10,
            total: _v11
          };
        })({
          ownerId: _v20,
          sort: _v3,
          searchQuery: _v11 || void 0
        }),
        {
          expiresOn: _v29,
          isTrialExpired: _v30,
          isTrialing: _v31,
          canCreateNewEventSeries: _v32,
          revalidateEventSeriesProbe: _v33
        } = (0, _v29.useAccessEventSeriesEditor)(),
        _v34 = _v31 && _v29 ? new Intl.DateTimeFormat((0, _v15.getCurrentLocale)(), {
          day: "numeric",
          month: "long",
          timeZone: "UTC",
          year: "numeric"
        }).format(new Date(`${_v29}T00:00:00Z`)) : null,
        _v35 = _v22 ?? 0,
        _v36 = _v13 || _v11.length > 0,
        _v37 = !!_v21 && _v21.length > 0,
        _v38 = !!_v26 && !_v37,
        _v39 = !_v23 && !_v38 && !_v37,
        _v40 = (0, _v6.useCallback)(_v0 => {
          _v10(_v0), _v15.current && clearTimeout(_v15.current), _v15.current = setTimeout(() => {
            _v12(_v0);
          }, 300);
        }, []);
      (0, _v6.useEffect)(() => () => {
        _v15.current && clearTimeout(_v15.current);
      }, []);
      let _v41 = (0, _v6.useCallback)(() => {
          _v14(!0);
        }, []),
        _v42 = (0, _v6.useCallback)(() => {
          _v15.current && (clearTimeout(_v15.current), _v15.current = null), _v14(!1), _v10(""), _v12("");
        }, []),
        _v43 = (0, _v6.useCallback)(_v0 => {
          _v17({
            source: _v0
          }), _v6(!0);
        }, [_v17, _v6]),
        _v44 = (0, _v6.useCallback)(() => {
          _v8(!0);
        }, []),
        _v45 = (0, _v6.useCallback)(() => {
          _v8(!1);
        }, []),
        _v46 = (0, _v6.useCallback)(() => {
          _v28(), _v33();
        }, [_v28, _v33]);
      return (0, _v1.jsxs)(_v28.Page, {
        children: [(0, _v1.jsxs)(_v28.Page.Main, {
          children: [(0, _v1.jsxs)(_v28.Page.StickyTop, {
            children: [null !== _v34 && (0, _v1.jsx)(_v20, {
              variant: "trial",
              title: (0, _v15.translate)({
                singular: "Complimentary access until {DATE}",
                replacements: {
                  DATE: _v34
                },
                dictionary: {
                  es: {
                    singular: "Acceso de cortesía hasta {DATE}"
                  },
                  "de-DE": {
                    singular: "Kostenfreier Zugang bis {DATE}"
                  },
                  "fr-FR": {
                    singular: "Accès gratuit jusqu'au {DATE}"
                  },
                  "ja-JP": {
                    singular: "無料でご利用いただけます {DATE}まで"
                  },
                  "ko-KR": {
                    singular: "무료 이용 가능: {DATE}까지"
                  },
                  "pt-BR": {
                    singular: "Acesso gratuito até {DATE}"
                  },
                  "zh-CN": {
                    singular: "免费访问至 {DATE}"
                  }
                }
              }),
              description: (0, _v15.translate)({
                singular: "Enjoy “event series” at no additional cost until {DATE}. After that, contact Sales to add it to your plan.",
                replacements: {
                  DATE: _v34
                },
                dictionary: {
                  es: {
                    singular: "Disfruta de las “series de eventos” sin coste adicional hasta {DATE}. Después, contacta con Ventas para añadirlo a tu plan."
                  },
                  "de-DE": {
                    singular: "Genießen Sie “Event-Serien” ohne zusätzliche Kosten bis {DATE}. Danach kontaktieren Sie den Vertrieb, um sie zu Ihrem Tarif hinzuzufügen."
                  },
                  "fr-FR": {
                    singular: "Profitez des “event series” sans coût supplémentaire jusqu'au {DATE}. Ensuite, contactez Sales pour l'ajouter à votre offre."
                  },
                  "ja-JP": {
                    singular: "“event series”を{DATE}まで追加費用なしでご利用いただけます。その後はプランに追加するには営業にお問い合わせください。"
                  },
                  "ko-KR": {
                    singular: "추가 비용 없이 {DATE}까지 “event series”를 이용하세요. 이후에는 요금제에 추가하려면 영업팀에 문의하세요."
                  },
                  "pt-BR": {
                    singular: "Aproveite as “séries de eventos” sem custo adicional até {DATE}. Após essa data, entre em contato com a equipe de Vendas para adicioná-las ao seu plano."
                  },
                  "zh-CN": {
                    singular: "在 {DATE} 之前，可免费使用“活动系列”。之后请联系销售将其添加到您的套餐中。"
                  }
                }
              }),
              onContactSalesClick: _v44
            }), null === _v34 && _v30 && (0, _v1.jsx)(_v20, {
              variant: "expired",
              title: (0, _v15.translate)({
                singular: "You no longer have free access to event series",
                dictionary: {
                  es: {
                    singular: "Ya no tienes acceso gratuito a las series de eventos"
                  },
                  "de-DE": {
                    singular: "Sie haben keinen kostenlosen Zugriff mehr auf Event-Serien"
                  },
                  "fr-FR": {
                    singular: "Vous n'avez plus d'accès gratuit aux séries d'événements"
                  },
                  "ja-JP": {
                    singular: "イベントシリーズへの無料アクセスはもう利用できません"
                  },
                  "ko-KR": {
                    singular: "이제 이벤트 시리즈에 무료로 액세스할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "Você não tem mais acesso gratuito às séries de eventos"
                  },
                  "zh-CN": {
                    singular: "您已不再享有对系列活动的免费访问权限"
                  }
                }
              }),
              description: (0, _v15.translate)({
                singular: "You can still access your existing event series, but you can no longer create new ones. Contact Sales to keep creating.",
                dictionary: {
                  es: {
                    singular: "Todavía puedes acceder a tus series de eventos existentes, pero ya no puedes crear nuevas. Ponte en contacto con Ventas para seguir creando."
                  },
                  "de-DE": {
                    singular: "Sie können weiterhin auf Ihre bestehenden Event-Serien zugreifen, aber keine neuen mehr erstellen. Kontaktieren Sie den Vertrieb, wenn Sie weiterhin neue Serien erstellen möchten."
                  },
                  "fr-FR": {
                    singular: "Vous pouvez toujours accéder à vos séries d'événements existantes, mais vous ne pouvez plus en créer de nouvelles. Contactez le service commercial pour continuer à en créer."
                  },
                  "ja-JP": {
                    singular: "既存のイベントシリーズには引き続きアクセスできますが、新しいシリーズは作成できなくなりました。作成を継続するには営業担当までお問い合わせください。"
                  },
                  "ko-KR": {
                    singular: "기존 이벤트 시리즈에는 계속 액세스할 수 있지만, 새 시리즈를 더 이상 생성할 수 없습니다. 계속 생성하려면 영업팀에 문의하세요."
                  },
                  "pt-BR": {
                    singular: "Você ainda pode acessar suas séries de eventos existentes, mas não pode mais criar novas. Entre em contato com o time de Vendas para continuar criando."
                  },
                  "zh-CN": {
                    singular: "您仍可访问现有的系列活动，但无法再创建新的。请联系销售以继续创建。"
                  }
                }
              }),
              onContactSalesClick: _v44
            }), (0, _v1.jsxs)(_v33.PageHeader.Wrapper, {
              children: [(0, _v1.jsxs)(_v33.PageHeader.LeftContent, {
                children: [(0, _v1.jsx)(_v11.Header, {
                  variant: {
                    base: "heading-lg",
                    md: "heading-xl"
                  },
                  size: "xl",
                  children: (0, _v15.translate)({
                    singular: "Event series",
                    dictionary: {
                      es: {
                        singular: "Serie de eventos"
                      },
                      "de-DE": {
                        singular: "Veranstaltungsreihe"
                      },
                      "fr-FR": {
                        singular: "Série d'événements"
                      },
                      "ja-JP": {
                        singular: "イベントシリーズ"
                      },
                      "ko-KR": {
                        singular: "이벤트 시리즈"
                      },
                      "pt-BR": {
                        singular: "Série de eventos"
                      },
                      "zh-CN": {
                        singular: "系列活动"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v13.Paragraph, {
                  color: "text-secondary",
                  size: "md",
                  children: (0, _v15.translate)({
                    singular: "Event series are branded hubs hosting multiple events and on-demand content in one place.{BR}Individual event pages are managed in the {LINK}live events{/LINK} section.",
                    replacements: {
                      BR: () => (0, _v1.jsx)("br", {}),
                      LINK: _v0 => (0, _v1.jsx)(_v12.Link, {
                        href: "/library/events",
                        variant: "inline",
                        children: _v0
                      })
                    },
                    dictionary: {
                      es: {
                        singular: "Las series de eventos son centros de marca que reúnen múltiples eventos y contenido bajo demanda en un solo lugar.{BR}Las páginas de eventos individuales se gestionan en la sección {LINK}eventos en vivo{/LINK}."
                      },
                      "de-DE": {
                        singular: "Event-Serien sind gebrandete Hubs, die mehrere Events und On-Demand-Inhalte an einem Ort bündeln.{BR}Einzelne Event-Seiten werden im Bereich {LINK}Live-Events{/LINK} verwaltet."
                      },
                      "fr-FR": {
                        singular: "Les séries d'événements sont des hubs de marque regroupant plusieurs événements et du contenu à la demande au même endroit.{BR}Les pages des événements individuels sont gérées dans la section {LINK}événements en direct{/LINK}."
                      },
                      "ja-JP": {
                        singular: "イベントシリーズは、複数のイベントとオンデマンドコンテンツを1か所でまとめて提供するブランド化されたハブです。{BR}個別のイベントページは{LINK}ライブイベント{/LINK}セクションで管理されます。"
                      },
                      "ko-KR": {
                        singular: "이벤트 시리즈는 여러 이벤트와 주문형 콘텐츠를 한곳에서 제공하는 브랜드화된 허브입니다.{BR}개별 이벤트 페이지는 {LINK}라이브 이벤트{/LINK} 섹션에서 관리됩니다."
                      },
                      "pt-BR": {
                        singular: "Séries de eventos são hubs de marca que hospedam vários eventos e conteúdo sob demanda em um só lugar.{BR}As páginas de eventos individuais são gerenciadas na seção {LINK}eventos ao vivo{/LINK}."
                      },
                      "zh-CN": {
                        singular: "活动系列是品牌化的枢纽，可在同一处承载多个活动和点播内容。{BR}单个活动页面在 {LINK}直播活动{/LINK} 部分进行管理。"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsx)(_v33.PageHeader.Actions, {
                children: (0, _v1.jsx)(_v9.Button, {
                  isDisabled: !_v32,
                  onClick: () => _v43("header"),
                  variant: "primary",
                  children: (0, _v15.translate)({
                    singular: "New event series",
                    dictionary: {
                      es: {
                        singular: "Nueva serie de eventos"
                      },
                      "de-DE": {
                        singular: "Neue Eventreihe"
                      },
                      "fr-FR": {
                        singular: "Nouvelle série d'événements"
                      },
                      "ja-JP": {
                        singular: "新しいイベントシリーズ"
                      },
                      "ko-KR": {
                        singular: "새 이벤트 시리즈"
                      },
                      "pt-BR": {
                        singular: "Nova série de eventos"
                      },
                      "zh-CN": {
                        singular: "新建活动系列"
                      }
                    }
                  })
                })
              })]
            }), (0, _v1.jsx)(_v27.FilterSortBar, {
              checkbox: (0, _v1.jsx)(_v24.CheckboxItemCount, {
                isLoading: _v23,
                subtitle: (0, _v15.translate)({
                  count: _v35,
                  singular: "{NUM} event series",
                  plural: "{NUM} event series",
                  replacements: {
                    NUM: _v35
                  },
                  dictionary: {
                    es: {
                      singular: "{NUM} serie de eventos",
                      plural: "{NUM} series de eventos"
                    },
                    "de-DE": {
                      singular: "{NUM} Eventreihe",
                      plural: "{NUM} Eventreihen"
                    },
                    "fr-FR": {
                      singular: "{NUM} série d'événements",
                      plural: "{NUM} séries d'événements"
                    },
                    "ja-JP": {
                      singular: "{NUM} 件のイベントシリーズ",
                      plural: "{NUM} 件のイベントシリーズ"
                    },
                    "ko-KR": {
                      singular: "{NUM}개의 이벤트 시리즈",
                      plural: "{NUM}개의 이벤트 시리즈"
                    },
                    "pt-BR": {
                      singular: "{NUM} série de eventos",
                      plural: "{NUM} séries de eventos"
                    },
                    "zh-CN": {
                      singular: "{NUM} 个活动系列",
                      plural: "{NUM} 个活动系列"
                    }
                  }
                })
              }),
              layout: _v1,
              searchElement: (0, _v1.jsx)(_v40, {
                value: _v9,
                onChange: _v40,
                initialOpen: _v36,
                onOpen: _v41,
                onClose: _v42
              }),
              setLayout: _v2,
              shouldHideViewControls: !1,
              sort: _v3,
              setSort: _v4,
              sortOptions: _v25.EVENT_SERIES_SORT_OPTIONS,
              sortTriggerDataId: "event_series_sort_trigger"
            })]
          }), _v38 ? (0, _v1.jsxs)(_v10.Flex, {
            flex: "1",
            direction: "column",
            align: "center",
            justify: "center",
            gap: "md",
            padding: "xl",
            children: [(0, _v1.jsx)(_v14.Text, {
              color: "text-secondary",
              children: (0, _v15.translate)({
                singular: "Something went wrong loading your event series. We couldn't load them.",
                dictionary: {
                  es: {
                    singular: "Algo salió mal al cargar sus series de eventos. No pudimos cargarlas."
                  },
                  "de-DE": {
                    singular: "Beim Laden Ihrer Eventreihen ist etwas schiefgegangen. Wir konnten sie nicht laden."
                  },
                  "fr-FR": {
                    singular: "Un problème est survenu lors du chargement de vos séries d’événements. Nous n’avons pas pu les charger."
                  },
                  "ja-JP": {
                    singular: "イベントシリーズの読み込み中に問題が発生しました。読み込めませんでした。"
                  },
                  "ko-KR": {
                    singular: "이벤트 시리즈를 불러오는 중 문제가 발생했습니다. 불러올 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "Algo deu errado ao carregar suas séries de eventos. Não conseguimos carregá-las."
                  },
                  "zh-CN": {
                    singular: "加载活动系列时出错。我们无法加载它们。"
                  }
                }
              })
            }), (0, _v1.jsx)(_v9.Button, {
              onClick: () => _v28(),
              variant: "secondary",
              children: (0, _v15.translate)({
                singular: "Try again",
                dictionary: {
                  es: {
                    singular: "Intentar de nuevo"
                  },
                  "de-DE": {
                    singular: "Nochmal versuchen"
                  },
                  "fr-FR": {
                    singular: "Veuillez réessayer"
                  },
                  "ja-JP": {
                    singular: "再試行してください"
                  },
                  "ko-KR": {
                    singular: "다시 시도하세요"
                  },
                  "pt-BR": {
                    singular: "Tente de novo"
                  },
                  "zh-CN": {
                    singular: "再试一次"
                  }
                }
              })
            })]
          }) : _v39 && _v36 ? (0, _v1.jsx)(_v10.Flex, {
            flex: "1",
            justify: "center",
            py: "2xl",
            children: (0, _v1.jsx)(_v14.Text, {
              variant: "body-md",
              color: "text-tertiary",
              children: (0, _v15.translate)({
                singular: "No event series match your search.",
                dictionary: {
                  es: {
                    singular: "Ninguna serie de eventos coincide con su búsqueda."
                  },
                  "de-DE": {
                    singular: "Keine Event-Serien entsprechen Ihrer Suche."
                  },
                  "fr-FR": {
                    singular: "Aucune série d'événements ne correspond à votre recherche."
                  },
                  "ja-JP": {
                    singular: "検索条件に一致するイベントシリーズはありません。"
                  },
                  "ko-KR": {
                    singular: "검색과 일치하는 이벤트 시리즈가 없습니다."
                  },
                  "pt-BR": {
                    singular: "Nenhuma série de eventos corresponde à sua pesquisa."
                  },
                  "zh-CN": {
                    singular: "没有符合您搜索条件的系列活动。"
                  }
                }
              })
            })
          }) : _v39 ? (0, _v1.jsx)(_v10.Flex, {
            flex: "1",
            justify: "center",
            children: (0, _v1.jsx)(_v60, {
              isCreateDisabled: !_v32,
              onCreate: () => _v43("empty_state")
            })
          }) : "LIST_LAYOUT" === _v1 ? (0, _v1.jsx)(_v87, {
            isLoading: _v23 || _v24,
            onSeriesDeleted: _v46,
            series: _v21 ?? []
          }) : (0, _v1.jsx)(_v81, {
            isLoading: _v23 || _v24,
            onSeriesDeleted: _v46,
            series: _v21 ?? []
          }), _v37 && !_v25 && (0, _v1.jsx)(_v90, {
            isLoading: _v24,
            onLoadMore: _v27
          })]
        }), _v5 && (0, _v1.jsx)(_v57, {
          onClose: () => _v6(!1),
          onCreated: () => {
            _v46(), _v6(!1);
          },
          ownerId: _v20
        }), _v7 && (0, _v1.jsx)(_v26.EventSeriesContactSalesModal, {
          onClose: _v45,
          source: "trial_banner"
        })]
      });
    };
  var _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0);
  let _v96 = () => {
    let _v0 = (0, _v32.useViewer)(),
      {
        canAccessEventSeriesEditor: _v1,
        isLoading: _v2
      } = (0, _v29.useAccessEventSeriesEditor)();
    return _v2 || !_v0 ? null : _v1 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v2.default, {
        children: (0, _v1.jsx)("title", {
          children: (0, _v5.translate)({
            singular: "Event series",
            dictionary: {
              es: {
                singular: "Serie de eventos"
              },
              "de-DE": {
                singular: "Veranstaltungsreihe"
              },
              "fr-FR": {
                singular: "Série d'événements"
              },
              "ja-JP": {
                singular: "イベントシリーズ"
              },
              "ko-KR": {
                singular: "이벤트 시리즈"
              },
              "pt-BR": {
                singular: "Série de eventos"
              },
              "zh-CN": {
                singular: "系列活动"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v95.VideoModalContextProvider, {
        children: (0, _v1.jsx)(_v91, {})
      })]
    }) : (0, _v1.jsx)(_v92.ErrorPage, {
      error: new _v3.ResourceNotFoundError()
    });
  };
  _v96.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v94.VideoLibraryLayout, {
    hasSideNav: !0,
    hasUploader: _v1.hasUploader,
    searchContentAlignment: _v28.VIDEO_LIBRARY_PAGE_SEARCH_CONTENT_ALIGNMENT,
    sideNavContent: (0, _v1.jsx)(_v93.SideNavContent, {
      surface: "home"
    }),
    sideNavSurface: "home",
    children: _v0
  }), (0, _v4.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      hasUploader: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v96], 0);
}