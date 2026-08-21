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
    _v21 = _v0.i(0);
  async function _v22(_v0, _v1) {
    let _v2 = await fetch(`/settings/apps?action=dropbox_list&path=${encodeURIComponent(_v0)}&recursive=${!!_v1}`);
    if (!_v2.ok) throw Error("Failed to fetch folders");
    return await _v2.json();
  }
  async function _v23(_v0, _v1) {
    if (!(await fetch("/settings/apps?action=modify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        path: _v0,
        service: "dropbox",
        token: _v1
      })
    })).ok) throw Error("Failed to save folder path");
  }
  let _v24 = 2;
  var _v25 = _v0.i(0),
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
    _v36 = _v0.i(0);
  let _v37 = ({
      folder: _v0,
      selectedPath: _v1,
      onSelect: _v2,
      handleLoadChildren: _v3,
      depth: _v4
    }) => {
      let [_v5, _v6] = (0, _v3.useState)(!1),
        {
          hasChildren: _v7 = !1,
          isLoading: _v8 = !1,
          done: _v9,
          children: _v10 = []
        } = _v0 ?? {},
        _v11 = (0, _v3.useMemo)(() => {
          if (_v8 || !1 === _v9) return !0;
          for (let _v0 of _v10) if (_v0?.done === !1) return !0;
          return !1;
        }, [_v8, _v9, _v10]);
      return (0, _v1.jsxs)(_v4.Box, {
        marginLeft: _v9 && !_v7 ? (0, _v10.rem)(12 * _v4 + 28) : (0, _v10.rem)(12 * _v4),
        children: [(0, _v1.jsx)(_v5.Button, {
          variant: "tertiary",
          width: "100%",
          justifyContent: "flex-start",
          onClick: () => _v2(_v0.path),
          children: (0, _v1.jsxs)(_v8.Flex, {
            alignItems: "center",
            children: [(_v7 && _v0.done || !_v0.done) && (0, _v1.jsx)(_v4.Box, {
              marginRight: "xs",
              onClick: _v0 => {
                _v0.stopPropagation(), _v6(!_v5), _v3(_v0.path);
              },
              children: _v5 ? (0, _v1.jsx)(_v35.ChevronDownSmall, {}) : (0, _v1.jsx)(_v36.ChevronRightSmall, {})
            }), (0, _v1.jsx)(_v4.Box, {
              marginRight: "sm",
              children: (0, _v1.jsx)(_v33.Folder, {
                boxSize: "md"
              })
            }), (0, _v1.jsx)(_v13.Paragraph, {
              size: "md",
              fontWeight: _v0.path === _v1 ? "bold" : "normal",
              children: _v0.name
            })]
          })
        }), _v5 && _v0.children && (0, _v1.jsx)(_v4.Box, {
          paddingLeft: "sm",
          children: _v11 ? (0, _v1.jsx)(_v38, {}) : (0, _v1.jsx)(_v39, {
            folders: _v0.children,
            selectedPath: _v1,
            onSelect: _v2,
            handleLoadChildren: _v3,
            depth: _v4 + 1
          })
        })]
      });
    },
    _v38 = () => (0, _v1.jsx)(_v11.Center, {
      height: "100%",
      children: (0, _v1.jsx)(_v12.Spinner, {
        size: "sm",
        my: "sm"
      })
    }),
    _v39 = ({
      folders: _v0,
      selectedPath: _v1,
      onSelect: _v2,
      depth: _v3,
      handleLoadChildren: _v4,
      root: _v5
    }) => _v0.length ? (0, _v1.jsx)(_v8.Flex, {
      height: `calc(100% - ${(0, _v10.rem)(60)})`,
      width: "100%",
      minWidth: (0, _v10.rem)(350),
      overflowY: "auto",
      gap: "xs",
      flexDirection: "column",
      paddingY: "sm",
      children: _v0.map(_v0 => (0, _v1.jsx)(_v37, {
        folder: _v0,
        selectedPath: _v1,
        onSelect: _v2,
        handleLoadChildren: _v4,
        depth: _v3
      }, _v0.path))
    }) : _v5 ? (0, _v1.jsx)(_v40, {}) : null,
    _v40 = () => (0, _v1.jsxs)(_v11.Center, {
      flexDirection: "column",
      height: "100%",
      children: [(0, _v1.jsx)(_v34.SearchMagnifier, {
        boxSize: "lg",
        color: "text-secondary"
      }), (0, _v1.jsx)(_v13.Paragraph, {
        size: "sm",
        children: (0, _v18.translate)({
          singular: "Sorry, no results found.",
          dictionary: {
            es: {
              singular: "Lo sentimos, no se encontraron resultados."
            },
            "de-DE": {
              singular: "Leider keine Ergebnisse gefunden."
            },
            "fr-FR": {
              singular: "Désolés, aucun résultat."
            },
            "ja-JP": {
              singular: "申し訳ありません。検索結果がありません。"
            },
            "ko-KR": {
              singular: "죄송합니다, 검색 결과가 없습니다."
            },
            "pt-BR": {
              singular: "Desculpe, mas não encontramos nenhum resultado."
            },
            "zh-CN": {
              singular: "抱歉，未找到结果。"
            }
          }
        })
      })]
    }),
    _v41 = ({
      selectedPath: _v0,
      folders: _v1,
      onSelect: _v2,
      handleLoadChildren: _v3,
      isLoading: _v4 = !1,
      disabled: _v5 = !1,
      label: _v6,
      attach: _v7 = "top",
      isSettingsPage: _v8
    }) => {
      let [_v9, _v10] = (0, _v3.useState)(!1),
        _v11 = (0, _v3.useRef)(null),
        _v12 = (0, _v3.useRef)(null),
        {
          colorMode: _v13
        } = (0, _v31.useColorMode)(),
        _v14 = _v0 ? _v0.split("/").pop() || "/" : (0, _v18.translate)({
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
        });
      return (0, _v29.useOutsideClick)({
        enabled: _v9,
        ref: _v11,
        handler: _v0 => {
          _v12.current && _v0.target && (_v12.current == _v0.target || _v12.current?.contains(_v0.target)) || _v10(!1);
        }
      }), (0, _v1.jsxs)(_v25.Popover, {
        placement: _v7,
        isOpen: _v9,
        children: [(0, _v1.jsx)(_v28.PopoverTrigger, {
          children: (0, _v1.jsx)(_v5.Button, {
            ref: _v12,
            variant: _v8 && "dark" === _v13 ? "secondary" : "tertiary",
            onClick: () => _v10(!_v9),
            minWidth: (0, _v10.rem)(210),
            isLoading: _v4,
            isDisabled: _v4 || _v5,
            rightIcon: _v4 ? void 0 : (0, _v1.jsx)(_v32.ChevronDown, {
              boxSize: "sm"
            }),
            width: "100%",
            size: "md",
            children: (0, _v1.jsxs)(_v8.Flex, {
              alignItems: "center",
              overflow: "hidden",
              width: "100%",
              children: [(0, _v1.jsx)(_v8.Flex, {
                marginRight: "sm",
                alignItems: "center",
                children: (0, _v1.jsx)(_v33.Folder, {
                  boxSize: "md"
                })
              }), (0, _v1.jsx)(_v13.Paragraph, {
                size: "md",
                textOverflow: "ellipsis",
                overflow: "hidden",
                children: _v14
              })]
            })
          })
        }), (0, _v1.jsx)(_v30.Portal, {
          children: (0, _v1.jsx)(_v27.PopoverContent, {
            ref: _v11,
            children: (0, _v1.jsx)(_v26.PopoverBody, {
              children: (0, _v1.jsxs)(_v4.Box, {
                height: (0, _v10.rem)(320),
                padding: "sm",
                minW: (0, _v10.rem)(340),
                children: [_v6 && (0, _v1.jsx)(_v13.Paragraph, {
                  size: "lg",
                  children: _v6
                }), (0, _v1.jsx)(_v39, {
                  folders: _v1,
                  selectedPath: _v0,
                  onSelect: _v2,
                  handleLoadChildren: _v3,
                  depth: 0,
                  root: !0
                })]
              })
            })
          })
        })]
      });
    },
    _v42 = ({
      selectedPath: _v0,
      onChange: _v1,
      label: _v2,
      error: _v3,
      handleSave: _v4,
      isButtonLoading: _v5,
      isSettingsPage: _v6
    }) => {
      let {
          loadChildren: _v7,
          loadingPaths: _v8,
          loadedPaths: _v9,
          tree: _v10
        } = function () {
          let [_v0, _v1] = (0, _v3.useState)({}),
            [_v2, _v3] = (0, _v3.useState)(new Set()),
            [_v4, _v5] = (0, _v3.useState)(new Set()),
            _v6 = (_v0, _v1) => {
              let _v2 = new Set(_v0);
              return _v2.add(_v1), _v2;
            },
            _v7 = (0, _v3.useCallback)(async _v0 => {
              _v5(_v0 => _v6(_v0, _v0));
              try {
                let _v0 = (await _v22(_v0)).map(_v0 => _v0.path);
                return _v1(_v0 => ({
                  ..._v0,
                  [_v0]: _v0
                })), _v3(_v0 => _v6(_v0, _v0)), _v0;
              } finally {
                _v5(_v0 => {
                  let _v1;
                  return (_v1 = new Set(_v0)).delete(_v0), _v1;
                });
              }
            }, []),
            _v8 = (0, _v3.useCallback)(async (_v0, _v1 = _v24) => {
              _v0 || (_v0 = "/");
              let _v2 = _v2.has(_v0) ? _v0[_v0] ?? [] : await _v7(_v0);
              if (_v1 <= 1) return;
              let _v3 = (_v2 || []).filter(_v0 => !_v2.has(_v0));
              0 !== _v3.length && (await Promise.all(_v3.map(_v7)));
            }, [_v2, _v0, _v7]);
          return (0, _v3.useEffect)(() => {
            _v8("/", _v24);
          }, [_v8]), (0, _v3.useMemo)(() => {
            let _v0 = _v0["/"] || [];
            return {
              tree: _v0,
              rootFolders: _v0,
              loadedPaths: _v2,
              loadingPaths: _v4,
              loadChildren: _v8
            };
          }, [_v0, _v2, _v4, _v8]);
        }(),
        _v11 = async _v0 => {
          _v1(_v0), await _v7(_v0);
        },
        _v12 = async _v0 => {
          await _v7(_v0);
        },
        _v13 = (0, _v3.useCallback)(_v0 => (_v10[_v0] || []).map(_v0 => {
          let _v1 = _v0.split("/").pop() || "/",
            _v2 = _v8.has(_v0),
            _v3 = _v13(_v0);
          return {
            path: _v0,
            name: _v1,
            isLoading: _v2,
            hasChildren: _v3.length > 0,
            children: _v3,
            done: _v9.has(_v0)
          };
        }), [_v9, _v8, _v10]),
        _v14 = (0, _v3.useMemo)(() => _v13("/"), [_v13]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v4.Box, {
          mb: "lg",
          children: (0, _v1.jsx)(_v41, {
            selectedPath: _v14.length ? _v0 : "",
            folders: _v14,
            onSelect: _v11,
            handleLoadChildren: _v12,
            isLoading: _v8.has("/"),
            label: _v2,
            isSettingsPage: _v6
          })
        }), _v3 && (0, _v1.jsx)(_v21.Alert, {
          variant: "error",
          mb: "md",
          children: _v3
        }), (0, _v1.jsx)(_v4.Box, {
          textAlign: _v6 ? "right" : void 0,
          children: (0, _v1.jsx)(_v5.Button, {
            variant: "primary",
            onClick: _v4,
            isLoading: _v5,
            isDisabled: !_v0 || _v5 || !_v14.length,
            width: _v6 ? "auto" : "100%",
            mb: "sm",
            children: _v6 ? (0, _v18.translate)({
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
            }) : (0, _v18.translate)({
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
          })
        }), !_v6 && (0, _v1.jsx)(_v5.Button, {
          variant: "tertiary",
          as: "a",
          href: "/settings/apps",
          isDisabled: _v5,
          width: "100%",
          children: (0, _v18.translate)({
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
      });
    };
  var _v43 = _v0.i(0);
  _v0.s(["DropboxConnect", 0, ({
    appId: _v0,
    isSettingsPage: _v1
  }) => {
    let _v2 = (0, _v20.useViewer)(),
      _v3 = (0, _v2.useRouter)(),
      [_v4, _v5] = (0, _v3.useState)(!1),
      [_v6, _v7] = (0, _v3.useState)(""),
      [_v8, _v9] = (0, _v3.useState)(null),
      {
        data: _v10,
        isLoading: _v11,
        error: _v12
      } = (0, _v43.useFetchAppsData)(!1),
      {
        xsrft: _v13
      } = _v2 || {},
      _v14 = _v10?.upload_apps?.dropbox;
    (0, _v3.useEffect)(() => {
      _v14?.auto_upload_path && _v7(_v14.auto_upload_path);
    }, [_v14]);
    let _v15 = (0, _v3.useCallback)(async () => {
      if (!_v6) return void _v9((0, _v18.translate)({
        singular: "Please select a Dropbox folder",
        dictionary: {
          es: {
            singular: "Por favor, seleccione una carpeta de Dropbox"
          },
          "de-DE": {
            singular: "Bitte wählen Sie einen Dropbox-Ordner aus"
          },
          "fr-FR": {
            singular: "Veuillez sélectionner un dossier Dropbox"
          },
          "ja-JP": {
            singular: "Dropboxフォルダーを選択してください"
          },
          "ko-KR": {
            singular: "드롭박스 폴더를 선택하세요."
          },
          "pt-BR": {
            singular: "Selecione uma pasta do Dropbox"
          },
          "zh-CN": {
            singular: "请选择一个 Dropbox 文件夹"
          }
        }
      }));
      _v5(!0), _v9(null);
      try {
        await _v23(_v6, _v13), _v1 || _v3.push(`/apps/${_v0}/folder-select`);
      } catch (_v0) {
        _v9((0, _v18.translate)({
          singular: "Failed to save Dropbox folder. Please try again.",
          dictionary: {
            es: {
              singular: "Error al guardar la carpeta de Dropbox. Inténtelo de nuevo."
            },
            "de-DE": {
              singular: "Der Dropbox-Ordner konnte nicht gespeichert werden. Bitte versuchen Sie es erneut."
            },
            "fr-FR": {
              singular: "Échec de l'enregistrement du dossier Dropbox. Veuillez réessayer."
            },
            "ja-JP": {
              singular: "Dropboxフォルダーを保存できませんでした。再度お試しください。"
            },
            "ko-KR": {
              singular: "Dropbox 폴더를 저장하지 못했습니다. 다시 시도해 주세요."
            },
            "pt-BR": {
              singular: "Não foi possível salvar a pasta do Dropbox. Tente novamente."
            },
            "zh-CN": {
              singular: "未能保存 Dropbox 文件夹。请重试。"
            }
          }
        }));
      } finally {
        _v5(!1);
      }
    }, [_v6, _v13, _v1, _v3, _v0]);
    return _v11 ? _v1 ? (0, _v1.jsx)(_v12.Spinner, {
      size: "sm"
    }) : (0, _v1.jsx)(_v11.Center, {
      height: "90vh",
      children: (0, _v1.jsx)(_v12.Spinner, {
        size: "sm"
      })
    }) : _v12 || !_v2 ? (0, _v1.jsx)(_v19.ErrorPage, {
      error: new _v17.ResourceNotFoundError(),
      shouldShowSearch: !1
    }) : _v14?.action !== "disconnect" ? (0, _v1.jsx)(_v4.Box, {
      mt: "lg",
      children: (0, _v1.jsxs)(_v8.Flex, {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        maxWidth: (0, _v10.rem)(470),
        m: "auto",
        mt: "3xl",
        children: [(0, _v1.jsx)(_v6.Header, {
          size: "xl",
          textAlign: "center",
          mb: "lg",
          children: (0, _v18.translate)({
            singular: "Dropbox not connected",
            dictionary: {
              es: {
                singular: "Dropbox no está conectado"
              },
              "de-DE": {
                singular: "Dropbox ist nicht verbunden"
              },
              "fr-FR": {
                singular: "Dropbox n'est pas connecté"
              },
              "ja-JP": {
                singular: "Dropboxが接続されていません"
              },
              "ko-KR": {
                singular: "Dropbox 연결 실패"
              },
              "pt-BR": {
                singular: "O Dropbox não está conectado"
              },
              "zh-CN": {
                singular: "Dropbox 未连接"
              }
            }
          })
        }), (0, _v1.jsx)(_v9.Text, {
          variant: "body-lg",
          color: "textSecondary",
          mb: "xl",
          textAlign: "center",
          children: (0, _v18.translate)({
            singular: "Your Dropbox account failed to connect. Please go to Settings to complete the connection.",
            dictionary: {
              es: {
                singular: "No se pudo conectar su cuenta de Dropbox. Vaya a Configuración para completar la conexión."
              },
              "de-DE": {
                singular: "Ihr Dropbox-Konto konnte nicht verbunden werden. Bitte gehen Sie zu Einstellungen, um die Verbindung abzuschließen."
              },
              "fr-FR": {
                singular: "Impossible de connecter votre compte Dropbox : veuillez accéder aux Paramètres pour terminer la connexion."
              },
              "ja-JP": {
                singular: "Dropboxのアカウントを接続できませんでした。「設定」に移動して接続を完了してください。"
              },
              "ko-KR": {
                singular: "Dropbox 계정 연결에 실패했습니다. 설정으로 이동하여 연결을 완료하세요."
              },
              "pt-BR": {
                singular: "Não foi possível conectar sua conta do Dropbox. Acesse as Configurações para concluir a conexão."
              },
              "zh-CN": {
                singular: "您的 Dropbox 账户无法连接。请前往“设置”完成连接。"
              }
            }
          })
        }), (0, _v1.jsx)(_v5.Button, {
          variant: "primary",
          href: "/settings/apps",
          width: (0, _v10.rem)(164),
          mt: "1",
          as: "a",
          children: (0, _v18.translate)({
            singular: "Back to Integrations",
            dictionary: {
              es: {
                singular: "Volver a Integraciones"
              },
              "de-DE": {
                singular: "Zurück zu Integrationen"
              },
              "fr-FR": {
                singular: "Retour aux Intégrations"
              },
              "ja-JP": {
                singular: "統合に戻る"
              },
              "ko-KR": {
                singular: "통합으로 돌아가기"
              },
              "pt-BR": {
                singular: "Voltar para as integrações"
              },
              "zh-CN": {
                singular: "返回到集成"
              }
            }
          })
        })]
      })
    }) : _v1 ? (0, _v1.jsx)(_v42, {
      label: (0, _v18.translate)({
        singular: "Select Dropbox Folder",
        dictionary: {
          es: {
            singular: "Seleccione la carpeta de Dropbox"
          },
          "de-DE": {
            singular: "Einen Dropbox-Ordner auswählen"
          },
          "fr-FR": {
            singular: "Sélectionnez le dossier Dropbox"
          },
          "ja-JP": {
            singular: "Dropboxフォルダーを選択"
          },
          "ko-KR": {
            singular: "Dropbox 폴더 선택"
          },
          "pt-BR": {
            singular: "Selecione a Pasta do Dropbox"
          },
          "zh-CN": {
            singular: "选择 Dropbox 文件夹"
          }
        }
      }),
      selectedPath: _v6,
      onChange: _v7,
      error: _v8 || "",
      handleSave: _v15,
      isButtonLoading: _v4,
      isSettingsPage: _v1
    }) : (0, _v1.jsx)(_v8.Flex, {
      alignItems: "center",
      justifyContent: "center",
      height: "90vh",
      children: (0, _v1.jsxs)(_v7.Card, {
        padding: "xl",
        width: (0, _v10.rem)(420),
        boxShadow: "lg",
        height: (0, _v10.rem)(446),
        borderRadius: "lg",
        children: [(0, _v1.jsxs)(_v8.Flex, {
          alignItems: "center",
          justifyContent: "center",
          gap: "md",
          mb: "xl",
          children: [(0, _v1.jsx)(_v16.Dropbox, {
            boxSize: "md"
          }), (0, _v1.jsx)(_v14.ArrowsIntegration, {
            boxSize: "xs"
          }), (0, _v1.jsx)(_v15.VimeoV, {
            boxSize: "sm"
          })]
        }), (0, _v1.jsx)(_v6.Header, {
          size: "md",
          textAlign: "center",
          mb: "3",
          color: "text-primary",
          children: (0, _v18.translate)({
            singular: "Select a Dropbox folder you want to import to Vimeo",
            dictionary: {
              es: {
                singular: "Seleccione una carpeta de Dropbox que quiera importar a Vimeo"
              },
              "de-DE": {
                singular: "Wählen Sie einen Dropbox-Ordner aus, den Sie in Vimeo importieren möchten."
              },
              "fr-FR": {
                singular: "Sélectionnez un dossier Dropbox que vous souhaitez importer sur Vimeo"
              },
              "ja-JP": {
                singular: "VimeoにインポートしたいDropboxフォルダーを選択してください"
              },
              "ko-KR": {
                singular: "Vimeo로 가져올 Dropbox 폴더를 선택하세요."
              },
              "pt-BR": {
                singular: "Selecione a pasta do Dropbox que você quer importar para o Vimeo"
              },
              "zh-CN": {
                singular: "选择您要导入到 Vimeo 的 Dropbox 文件夹"
              }
            }
          })
        }), (0, _v1.jsx)(_v13.Paragraph, {
          size: "lg",
          color: "text-secondary",
          mb: "lg",
          textAlign: "center",
          children: (0, _v18.translate)({
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
          })
        }), (0, _v1.jsx)(_v42, {
          label: (0, _v18.translate)({
            singular: "Select Dropbox Folder",
            dictionary: {
              es: {
                singular: "Seleccione la carpeta de Dropbox"
              },
              "de-DE": {
                singular: "Einen Dropbox-Ordner auswählen"
              },
              "fr-FR": {
                singular: "Sélectionnez le dossier Dropbox"
              },
              "ja-JP": {
                singular: "Dropboxフォルダーを選択"
              },
              "ko-KR": {
                singular: "Dropbox 폴더 선택"
              },
              "pt-BR": {
                singular: "Selecione a Pasta do Dropbox"
              },
              "zh-CN": {
                singular: "选择 Dropbox 文件夹"
              }
            }
          }),
          selectedPath: _v6,
          onChange: _v7,
          error: _v8 || "",
          handleSave: _v15,
          isButtonLoading: _v4
        })]
      })
    });
  }], 0);
}