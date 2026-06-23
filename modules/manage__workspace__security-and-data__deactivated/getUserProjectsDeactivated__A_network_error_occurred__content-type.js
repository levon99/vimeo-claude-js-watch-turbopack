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
    _v12 = _v0.i(0);
  async function _v13({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v11.measureLatency)("getUserProjectsDeactivated", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/projects/deactivated?${(0, _v12.searchQueryString)(_v3)}&fields=${_v1.map(_v12.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v12.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v12.deepCamelCase)(_v1);
    });
  }
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  function _v19(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v18.useGctlConfig)();
    return (0, _v17.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/projects/deactivated?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v13({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }
  "true" === _v10.default.env.STORYBOOK && (0, _v16.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v18.useGctlConfig)();
    return (0, _v14.default)(_v2 ? `/users/${_v2.where.userId}/projects/deactivated${(0, _v16.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v13({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/projects/deactivated",
    method: "GET"
  }), "true" === _v10.default.env.STORYBOOK && (0, _v16.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v15.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v18.useGctlConfig)(),
      [_v5, _v6] = (0, _v16.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/projects/deactivated${(0, _v16.serializeQuery)(_v0)}`, _v13({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/users/:userId/projects/deactivated",
    method: "GET"
  }), "true" === _v10.default.env.STORYBOOK && (0, _v16.assignMswData)(_v19, {
    endpoint: "/users/:userId/projects/deactivated",
    method: "GET"
  });
  var _v20 = _v0.i(0),
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
  let _v40 = _v23.default.div.withConfig({
      displayName: "DeleteFolderModal__ModalContent",
      componentId: "sc-8050be53-0"
    })`
  ${({
      theme: _v0
    }) => _v0.shadows[200]}
  padding: ${(0, _v22.rem)(27)} ${(0, _v22.rem)(21)} ${(0, _v22.rem)(16)} ${(0, _v22.rem)(21)};
  border-radius: ${(0, _v22.rem)(8)};
  background: ${_v29.core.color.surface(0)};
  border: ${(0, _v22.rem)(1)} solid ${({
      theme: _v0
    }) => "dark" === _v0.name ? (0, _v25.grayscale)(600) : (0, _v25.slate)(100)};

  width: ${(0, _v22.rem)(440)};
  max-width: calc(100vw - ${(0, _v22.rem)(20)});
`,
    _v41 = (0, _v23.default)(_v28.Modal.Header).withConfig({
      displayName: "DeleteFolderModal__ModalHeaderContent",
      componentId: "sc-8050be53-1"
    })`
  letter-spacing: ${(0, _v22.rem)(.2)};
  align-items: center;
  display: flex;
  font-size: ${(0, _v22.rem)(18)};
  margin-bottom: ${(0, _v22.rem)(24)};
`,
    _v42 = (0, _v23.default)(_v26.Button).withConfig({
      displayName: "DeleteFolderModal__DismissButton",
      componentId: "sc-8050be53-2"
    })`
  margin-left: auto;
  right: ${(0, _v22.rem)(16)};
  position: absolute;
`,
    _v43 = _v23.default.div.withConfig({
      displayName: "DeleteFolderModal__FooterActions",
      componentId: "sc-8050be53-3"
    })`
  display: flex;
  margin-top: ${(0, _v22.rem)(15)};
  justify-content: flex-end;
  gap: ${(0, _v22.rem)(10)};
`,
    _v44 = ({
      folderId: _v0,
      isOpen: _v1,
      ownerId: _v2,
      closeModal: _v3,
      updateList: _v4
    }) => {
      let _v5 = (0, _v39.useViewer)(),
        [_v6, {
          error: _v7,
          loading: _v8
        }] = (0, _v24.useDeleteUserProject)(),
        _v9 = (0, _v3.useRef)(null);
      (0, _v32.default)([_v9], () => {
        _v1 && _v3();
      }, null, [_v1]);
      let _v10 = async () => {
        if (await _v6({
          where: {
            projectId: _v0,
            userId: _v2
          }
        }), !_v7) {
          let _v0 = (0, _v34.buildActionBpContext)({
              action_type: "click",
              feature: null
            }),
            _v1 = (0, _v35.buildProductAnalyticsBpContext)({
              entity_type: "folder",
              element: "button",
              location: "one_click_bar",
              feature: "folders",
              product: "accounts",
              copy: "delete",
              device_type: (0, _v31.default)()
            }),
            _v2 = (0, _v36.buildWebBpContext)({
              page_name: "team_management_page",
              path: window.location.pathname
            }),
            _v3 = _v5?.teamUser ? (0, _v38.buildTeamBpContextFromTeamUser)(_v5?.teamUser) : (0, _v38.buildTeamBpContextFromTeam)(_v5?.team),
            _v4 = (0, _v37.buildFolderBpContext)({
              folder_id: _v0
            }),
            _v5 = {
              ..._v0,
              ..._v1,
              ..._v2,
              ..._v3,
              ..._v4
            };
          (0, _v33.sendBpEventWithContexts)("vimeo.delete_content", _v5, -1), _v4(), _v3();
        }
      };
      return (0, _v1.jsx)(_v28.Modal, {
        active: _v1,
        size: "md",
        content: (0, _v1.jsxs)(_v40, {
          ref: _v9,
          children: [(0, _v1.jsxs)(_v41, {
            children: [(0, _v20.translate)({
              singular: "Delete folder",
              dictionary: {
                es: {
                  singular: "Eliminar la carpeta"
                },
                "de-DE": {
                  singular: "Ordner löschen"
                },
                "fr-FR": {
                  singular: "Supprimer dossier"
                },
                "ja-JP": {
                  singular: "フォルダーを削除"
                },
                "ko-KR": {
                  singular: "폴더 삭제"
                },
                "pt-BR": {
                  singular: "Excluir pasta"
                },
                "zh-CN": {
                  singular: "删除文件夹"
                }
              }
            }), (0, _v1.jsx)(_v42, {
              id: "delete-folder-modal-dismiss-button",
              icon: (0, _v1.jsx)(_v27.DismissX, {}),
              size: "md",
              variant: "minimalTransparent",
              format: "basic",
              onClick: _v3,
              "aria-label": (0, _v20.translate)({
                singular: "Close",
                dictionary: {
                  es: {
                    singular: "Cerrar"
                  },
                  "de-DE": {
                    singular: "Schließen"
                  },
                  "fr-FR": {
                    singular: "Fermer "
                  },
                  "ja-JP": {
                    singular: "閉じる"
                  },
                  "ko-KR": {
                    singular: "닫기"
                  },
                  "pt-BR": {
                    singular: "Fechar"
                  },
                  "zh-CN": {
                    singular: "关闭"
                  }
                }
              })
            })]
          }), (0, _v1.jsx)(_v30.Paragraph, {
            size: "2",
            children: (0, _v20.translate)({
              singular: "This will delete the folder, and permanently delete all of its items and subfolders. If you don't want to delete items, you can move them to a different folder.",
              dictionary: {
                es: {
                  singular: "Esta acción eliminará la carpeta y borrará de forma permanente todos sus elementos y subcarpetas. Si no quieres eliminar los elementos, puedes moverlos a otra carpeta."
                },
                "de-DE": {
                  singular: "Dadurch wird der Ordner gelöscht, und alle enthaltenen Elemente und Unterordner werden dauerhaft gelöscht. Falls du die Elemente nicht löschen möchtest, kannst du sie in einen anderen Ordner verschieben."
                },
                "fr-FR": {
                  singular: "Le dossier ainsi que tous ses sous-dossiers et éléments seront supprimés définitivement. Si vous ne souhaitez pas supprimer ces éléments, vous pouvez les déplacer vers un autre dossier."
                },
                "ja-JP": {
                  singular: "これにより、フォルダが削除され、すべてのアイテムとサブフォルダーが完全に削除されます。アイテムを削除したくない場合は、別のフォルダーにアイテムを移動してください。"
                },
                "ko-KR": {
                  singular: "폴더가 삭제되고 폴더 내 모든 항목 및 하위 폴더도 영구적으로 삭제됩니다. 항목 삭제를 원하지 않는 경우 해당 항목을 다른 폴더로 이동할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Isso irá excluir a pasta e excluirá permanentemente todos os seus itens e subpastas. Se você não quiser excluir itens, você pode movê-los para uma pasta diferente."
                },
                "zh-CN": {
                  singular: "这将删除文件夹，并永久删除其所有项目和子文件夹。如果不想删除项目，可以将其移动到其他文件夹。"
                }
              }
            })
          }), (0, _v1.jsxs)(_v43, {
            children: [(0, _v1.jsx)(_v26.Button, {
              onClick: () => {
                _v3();
              },
              format: "secondary",
              children: (0, _v20.translate)({
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
            }), (0, _v1.jsx)(_v26.Button, {
              onClick: _v10,
              status: "negative",
              loading: _v8,
              children: (0, _v20.translate)({
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
      });
    },
    _v45 = () => Promise.reject(Error("not implemented yet")),
    _v46 = {
      folderId: -1,
      isOpen: !1,
      ownerId: -1,
      updateList: _v45
    },
    _v47 = _v3.default.createContext({
      state: _v46,
      openDeleteFolderModal: _v45
    });
  function _v48({
    children: _v0
  }) {
    let [_v1, _v2] = (0, _v3.useState)(_v46),
      _v3 = (_v0, _v1, _v2) => {
        _v2({
          folderId: _v0,
          isOpen: !0,
          ownerId: _v1,
          updateList: _v2
        });
      },
      _v4 = _v3.default.useMemo(() => ({
        state: _v1,
        openDeleteFolderModal: _v3
      }), [_v1]);
    return (0, _v1.jsxs)(_v47.Provider, {
      value: _v4,
      children: [_v0, (0, _v1.jsx)(_v44, {
        folderId: _v1.folderId,
        isOpen: _v1.isOpen,
        ownerId: _v1.ownerId,
        updateList: _v1.updateList,
        closeModal: () => {
          _v2(_v46);
        }
      })]
    });
  }
  let _v49 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v48, {
      children: _v0
    }),
    _v50 = "desc",
    _v51 = "alphabetical",
    _v52 = "last_user_action_event_date";
  var _v53 = _v0.i(0);
  let _v54 = () => (0, _v1.jsxs)("svg", {
    width: "128",
    height: "128",
    viewBox: "0 0 128 128",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, _v1.jsx)("circle", {
      cx: "64",
      cy: "64",
      r: "64",
      fill: "#EEF1F4"
    }), (0, _v1.jsx)("path", {
      d: "M72.4204 39.2649L72.7249 39.8516L73.3634 40.0227L97.9065 46.599C99.7737 47.0993 100.882 49.0185 100.381 50.8856L91.9843 82.2241C91.484 84.0912 89.5648 85.1993 87.6977 84.699L40.8267 72.1399C38.9596 71.6396 37.8516 69.7204 38.3519 67.8533L48.6245 29.5152C49.1248 27.6481 51.044 26.54 52.9111 27.0403L67.1367 30.8521C67.8147 31.0337 68.385 31.492 68.7085 32.115L72.4204 39.2649Z",
      fill: "white",
      stroke: "#496073",
      strokeWidth: "3"
    }), (0, _v1.jsx)("path", {
      d: "M57.0084 52.9003L57.4545 53.3881H58.1155H83.5244C85.4574 53.3881 87.0244 54.9551 87.0244 56.8881V89.3321C87.0244 91.2651 85.4574 92.8321 83.5244 92.8321H35C33.067 92.8321 31.5 91.2651 31.5 89.3321V49.6416C31.5 47.7086 33.067 46.1416 35 46.1416H49.7274C50.4293 46.1416 51.0988 46.4367 51.5725 46.9547L57.0084 52.9003Z",
      fill: "white",
      stroke: "#496073",
      strokeWidth: "3"
    }), (0, _v1.jsx)("path", {
      d: "M60 108C61.1046 108 62 107.105 62 106C62 104.895 61.1046 104 60 104C58.8954 104 58 104.895 58 106C58 107.105 58.8954 108 60 108Z",
      fill: "#496073"
    }), (0, _v1.jsx)("path", {
      d: "M89.8824 22.4314L92.7059 23.5294C93.098 23.6863 93.098 24.3137 92.7059 24.4706L89.8824 25.5686C89.7255 25.6471 89.6471 25.7255 89.5686 25.8824L88.4706 28.7059C88.3138 29.098 87.6863 29.098 87.5294 28.7059L86.4314 25.8824C86.3529 25.7255 86.2745 25.6471 86.1177 25.5686L83.2941 24.4706C82.902 24.3137 82.902 23.6863 83.2941 23.5294L86.1177 22.4314C86.2745 22.3529 86.3529 22.2745 86.4314 22.1176L87.5294 19.2941C87.6863 18.902 88.3138 18.902 88.4706 19.2941L89.5686 22.1176C89.6471 22.2745 89.7255 22.4314 89.8824 22.4314Z",
      fill: "#496073"
    }), (0, _v1.jsx)("path", {
      d: "M79.6313 111.773L83.5446 113.325C84.1518 113.595 84.1518 114.405 83.5446 114.675L79.6313 116.227C79.4289 116.294 79.294 116.429 79.2265 116.631L77.6747 120.545C77.4048 121.152 76.5952 121.152 76.3253 120.545L74.7735 116.631C74.706 116.429 74.5711 116.294 74.3687 116.227L70.4554 114.675C69.8482 114.405 69.8482 113.595 70.4554 113.325L74.3687 111.773C74.5711 111.706 74.706 111.571 74.7735 111.369L76.3253 107.455C76.5952 106.848 77.4048 106.848 77.6747 107.455L79.2265 111.369C79.3614 111.571 79.4964 111.706 79.6313 111.773Z",
      fill: "#496073"
    }), (0, _v1.jsx)("path", {
      d: "M74 19C75.1046 19 76 18.1046 76 17C76 15.8954 75.1046 15 74 15C72.8954 15 72 15.8954 72 17C72 18.1046 72.8954 19 74 19Z",
      fill: "#496073"
    }), (0, _v1.jsx)("path", {
      d: "M46.8824 105.431L49.7059 106.529C50.098 106.686 50.098 107.314 49.7059 107.471L46.8824 108.569C46.7255 108.647 46.6471 108.725 46.5686 108.882L45.4706 111.706C45.3138 112.098 44.6863 112.098 44.5294 111.706L43.4314 108.882C43.3529 108.725 43.2745 108.647 43.1177 108.569L40.2941 107.471C39.902 107.314 39.902 106.686 40.2941 106.529L43.1177 105.431C43.2745 105.353 43.3529 105.275 43.4314 105.118L44.5294 102.294C44.6863 101.902 45.3138 101.902 45.4706 102.294L46.5686 105.118C46.6471 105.275 46.7255 105.431 46.8824 105.431Z",
      fill: "#496073"
    }), (0, _v1.jsx)("path", {
      d: "M25.8824 29.4314L28.7059 30.5294C29.098 30.6863 29.098 31.3137 28.7059 31.4706L25.8824 32.5686C25.7255 32.6471 25.6471 32.7255 25.5686 32.8824L24.4706 35.7059C24.3138 36.098 23.6863 36.098 23.5294 35.7059L22.4314 32.8824C22.3529 32.7255 22.2745 32.6471 22.1177 32.5686L19.2941 31.4706C18.902 31.3137 18.902 30.6863 19.2941 30.5294L22.1177 29.4314C22.2745 29.3529 22.3529 29.2745 22.4314 29.1176L23.5294 26.2941C23.6863 25.902 24.3138 25.902 24.4706 26.2941L25.5686 29.1176C25.6471 29.2745 25.7255 29.4314 25.8824 29.4314Z",
      fill: "#496073"
    })]
  });
  function _v55() {
    return (0, _v1.jsx)(_v7.HStack, {
      py: (0, _v9.rem)(200),
      justifyContent: "center",
      children: (0, _v1.jsxs)(_v53.VStack, {
        rowGap: "lg",
        children: [(0, _v1.jsx)(_v54, {}), (0, _v1.jsx)(_v8.Header, {
          size: "xl",
          fontSize: (0, _v9.rem)(36),
          fontWeight: "bold",
          children: (0, _v20.translate)({
            singular: "No deactivated member folders",
            dictionary: {
              es: {
                singular: "No hay carpetas de miembros desactivados"
              },
              "de-DE": {
                singular: "Keine deaktivierten Benutzerordner"
              },
              "fr-FR": {
                singular: "Aucun dossier membre désactivé"
              },
              "ja-JP": {
                singular: "非アクティブ化されたメンバーフォルダーはありません"
              },
              "ko-KR": {
                singular: "비활성화된 팀원 폴더가 없습니다."
              },
              "pt-BR": {
                singular: "Nenhuma pasta de assinantes desativada"
              },
              "zh-CN": {
                singular: "无停用的成员文件夹"
              }
            }
          })
        })]
      })
    });
  }
  var _v56 = _v0.i(0),
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
    _v76 = _v0.i(0);
  function _v77({
    uri: _v0
  }) {
    let {
      data: _v1,
      isValidating: _v2
    } = (0, _v76.useGetUser)(() => _v0 ? {
      where: {
        userId: _v0 ? parseInt(_v0.split("/")[2], 10) : 0
      },
      select: ["name", "pictures"]
    } : null, {
      revalidateOnFocus: !1,
      revalidateOnReconnect: !1
    });
    return _v2 ? (0, _v1.jsx)(_v75.Spinner, {}) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v74.Avatar, {
        size: "md",
        src: _v1?.pictures?.sizes[1].link,
        alt: _v1?.name ?? "",
        nameProps: {
          name: _v1?.name ?? ""
        }
      }), (0, _v1.jsx)(_v62.Paragraph, {
        size: "md",
        fontWeight: "normal",
        color: "text-secondary",
        children: _v1?.name
      })]
    });
  }
  function _v78({
    folder: _v0,
    updateList: _v1
  }) {
    let _v2 = (0, _v3.useContext)(_v73.ViewerContext),
      _v3 = (0, _v65.useRouter)(),
      {
        openDeleteFolderModal: _v4
      } = (0, _v3.useContext)(_v47),
      _v5 = parseInt(_v0.uri.split("/").pop() ?? ""),
      _v6 = _v2?.teamUser?.ownerId || _v2?.user?.id || -1;
    return (0, _v1.jsxs)(_v61.Tr, {
      onClick: () => {
        var _v0, _v1, _v2;
        let _v3, _v4, _v5, _v6;
        return _v0 = _v0.uri, void _v3.push((_v3 = (_v5 = (_v1 = _v0) ? _v1.match(/users\/(\d+)/) : null) && _v5.length > 1 ? _v5[1] : null, _v4 = (_v6 = (_v2 = _v0) ? _v2.match(/projects\/(\d+)/) : null) && _v6.length > 1 ? _v6[1] : null, `/user/${_v3}/folder/${_v4}`));
      },
      _hover: {
        bgColor: "fill-component-hover"
      },
      borderRadius: "sm",
      cursor: "pointer",
      children: [(0, _v1.jsx)(_v59.Td, {
        colSpan: 4,
        px: 0,
        pl: (0, _v9.rem)(16),
        children: (0, _v1.jsxs)(_v7.HStack, {
          columnGap: 24,
          children: [(0, _v1.jsx)(_v7.HStack, {
            w: (0, _v9.rem)(168),
            justifyContent: "center",
            py: (0, _v9.rem)(15),
            bgColor: "fill-component",
            borderRadius: "sm",
            children: (0, _v1.jsx)(_v72.FolderFilled, {
              boxSize: (0, _v9.rem)(60),
              color: "slate.400"
            })
          }), (0, _v1.jsxs)(_v53.VStack, {
            minW: (0, _v9.rem)(50),
            maxW: (0, _v9.rem)(250),
            alignItems: "flex-start",
            gap: 0,
            children: [(0, _v1.jsx)(_v8.Header, {
              size: "sm",
              noOfLines: 1,
              fontWeight: 500,
              children: _v0.name
            }), (0, _v1.jsxs)(_v62.Paragraph, {
              size: "md",
              color: "text-secondary",
              children: [_v0.metadata?.connections?.items?.total, " items"]
            })]
          })]
        })
      }), (0, _v1.jsx)(_v59.Td, {
        colSpan: 2,
        px: 0,
        children: (0, _v1.jsx)(_v7.HStack, {
          children: (0, _v1.jsx)(_v77, {
            uri: _v0.metadata?.connections?.personalTeamFolderOwner?.uri || ""
          })
        })
      }), (0, _v1.jsx)(_v59.Td, {
        colSpan: 2,
        px: 0,
        pr: (0, _v9.rem)(16),
        children: (0, _v1.jsxs)(_v7.HStack, {
          justifyContent: "flex-end",
          children: [(0, _v1.jsx)(_v62.Paragraph, {
            size: "md",
            color: "text-secondary",
            children: new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !0
            }).format(new Date(_v0.modifiedTime))
          }), (0, _v1.jsxs)(_v66.Menu, {
            children: [(0, _v1.jsx)(_v67.MenuButton, {
              as: _v68.IconButton,
              icon: (0, _v1.jsx)(_v71.EllipsisH, {}),
              variant: "tertiary",
              size: "sm",
              onClick: _v0 => {
                _v0.stopPropagation();
              }
            }), (0, _v1.jsx)(_v69.MenuList, {
              children: (0, _v1.jsx)(_v70.MenuItem, {
                onClick: _v0 => {
                  _v0.preventDefault(), _v0.stopPropagation(), _v4?.(_v5, _v6, _v1);
                },
                children: (0, _v20.translate)({
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
              })
            })]
          })]
        })
      })]
    });
  }
  var _v79 = _v0.i(0),
    _v80 = _v0.i(0);
  let _v81 = _v0 => {
      let {
        onClick: _v1,
        sortDirection: _v2 = "asc"
      } = _v0;
      return (0, _v1.jsx)(_v68.IconButton, {
        id: "sorting-arrow-button",
        variant: "tertiary",
        icon: "asc" === _v2 ? (0, _v1.jsx)(_v80.ArrowUp, {}) : (0, _v1.jsx)(_v79.ArrowDown, {}),
        isRound: !0,
        onClick: _v1,
        size: "sm",
        sx: {
          svg: {
            width: (0, _v9.rem)(16),
            height: (0, _v9.rem)(16)
          }
        },
        "aria-label": "sorting-arrow-button"
      });
    },
    _v82 = ({
      children: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v62.Paragraph, {
      size: "md",
      fontWeight: "bold",
      ..._v1,
      children: _v0
    });
  function _v83({
    sortDirection: _v0,
    sortValue: _v1,
    setSortDirection: _v2,
    setSortValue: _v3,
    folders: _v4,
    updateList: _v5,
    isValidating: _v6
  }) {
    let _v7 = () => {
      _v2("asc" === _v0 ? _v50 : "asc");
    };
    return (0, _v1.jsx)(_v57.TableContainer, {
      px: 0,
      children: (0, _v1.jsxs)(_v56.Table, {
        variant: "unstyled",
        children: [(0, _v1.jsx)(_v60.Thead, {
          children: (0, _v1.jsxs)(_v61.Tr, {
            children: [(0, _v1.jsx)(_v64.Th, {
              colSpan: 4,
              p: 0,
              pl: (0, _v9.rem)(16),
              children: (0, _v1.jsxs)(_v7.HStack, {
                children: [(0, _v1.jsx)(_v82, {
                  onClick: () => {
                    _v1 !== _v51 && _v3(_v51);
                  },
                  children: (0, _v20.translate)({
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
                }), _v1 === _v51 && (0, _v1.jsx)(_v81, {
                  sortDirection: _v0,
                  onClick: () => _v7()
                })]
              })
            }), (0, _v1.jsx)(_v64.Th, {
              colSpan: 2,
              p: 0,
              children: (0, _v1.jsx)(_v82, {
                children: (0, _v20.translate)({
                  singular: "Owner",
                  dictionary: {
                    es: {
                      singular: "Propietario(a)"
                    },
                    "de-DE": {
                      singular: "Inhaber"
                    },
                    "fr-FR": {
                      singular: "Propriétaire"
                    },
                    "ja-JP": {
                      singular: "所有者"
                    },
                    "ko-KR": {
                      singular: "계정 소유자"
                    },
                    "pt-BR": {
                      singular: "Proprietário"
                    },
                    "zh-CN": {
                      singular: "所有者"
                    }
                  }
                })
              })
            }), (0, _v1.jsx)(_v64.Th, {
              colSpan: 2,
              p: 0,
              children: (0, _v1.jsxs)(_v7.HStack, {
                justifyContent: "center",
                children: [(0, _v1.jsx)(_v82, {
                  onClick: () => {
                    _v1 !== _v52 && _v3(_v52);
                  },
                  children: (0, _v20.translate)({
                    singular: "Modified",
                    dictionary: {
                      es: {
                        singular: "Modificado"
                      },
                      "de-DE": {
                        singular: "Modifiziert"
                      },
                      "fr-FR": {
                        singular: "Modifiée"
                      },
                      "ja-JP": {
                        singular: "変更日"
                      },
                      "ko-KR": {
                        singular: "수정됨"
                      },
                      "pt-BR": {
                        singular: "Modificado"
                      },
                      "zh-CN": {
                        singular: "修改于"
                      }
                    }
                  })
                }), _v1 === _v52 && (0, _v1.jsx)(_v81, {
                  sortDirection: _v0,
                  onClick: () => _v7()
                })]
              })
            })]
          })
        }), (0, _v1.jsx)(_v58.Tbody, {
          children: !_v6 && _v4 ? _v4.map(_v0 => (0, _v1.jsx)(_v78, {
            folder: _v0,
            updateList: _v5
          }, _v0.uri)) : (0, _v1.jsx)(_v61.Tr, {
            children: (0, _v1.jsx)(_v59.Td, {
              colSpan: 8,
              px: 0,
              children: (0, _v1.jsx)(_v63.Skeleton, {
                h: 130
              })
            })
          })
        })]
      })
    });
  }
  let _v84 = _v23.default.div.withConfig({
      displayName: "LoadMore__LoadMoreWrapper",
      componentId: "sc-b062ef88-0"
    })`
  margin: ${(0, _v22.rem)(40)} 0 ${(0, _v22.rem)(48)};
`,
    _v85 = _v0 => {
      let {
        isLoadingMore: _v1,
        onClick: _v2
      } = _v0;
      return (0, _v1.jsx)(_v84, {
        children: (0, _v1.jsx)(_v26.Button, {
          format: "secondary",
          fluid: !0,
          disabled: _v1,
          onClick: _v2,
          children: _v1 ? (0, _v1.jsx)(_v75.Spinner, {}) : (0, _v20.translate)({
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
  var _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0);
  function _v89({
    onChange: _v0,
    searchValue: _v1
  }) {
    let [_v2, _v3] = (0, _v3.useState)(!1),
      _v4 = (0, _v3.useRef)(null);
    (0, _v88.useOutsideClick)([_v4], () => {
      _v2 && !_v1 && _v3(!1);
    });
    let _v5 = (0, _v3.useCallback)(_v0 => {
      _v0(_v0.target.value);
    }, [_v0]);
    return (0, _v1.jsxs)(_v7.HStack, {
      ref: _v4,
      position: "relative",
      justifyContent: "flex-end",
      children: [(0, _v1.jsx)(_v68.IconButton, {
        "aria-label": (0, _v20.translate)({
          singular: "Search",
          dictionary: {
            es: {
              singular: "Buscar"
            },
            "de-DE": {
              singular: "Suchen"
            },
            "fr-FR": {
              singular: "Chercher"
            },
            "ja-JP": {
              singular: "検索"
            },
            "ko-KR": {
              singular: "검색"
            },
            "pt-BR": {
              singular: "Pesquisar"
            },
            "zh-CN": {
              singular: "搜索"
            }
          }
        }),
        id: "ptfSearchToggle",
        icon: (0, _v1.jsx)(_v87.SearchMagnifier, {}),
        variant: "tertiary",
        onClick: () => _v3(!0)
      }), _v2 && (0, _v1.jsx)(_v91, {
        children: (0, _v1.jsx)(_v86.Search, {
          autoFocus: !0,
          onChange: _v5
        })
      })]
    });
  }
  let _v90 = _v23.keyframes`
  from {
    width: ${(0, _v9.rem)(35)};
    opacity: 0
  }

  to {
    width: ${(0, _v9.rem)(300)};
    opacity: 1
  }
`,
    _v91 = _v23.default.div.withConfig({
      displayName: "SearchField__InputWrapper",
      componentId: "sc-92f9ae7d-0"
    })`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-width: ${(0, _v9.rem)(500)};
  animation: ${_v90} 250ms ease forwards;

  input {
    height: ${(0, _v9.rem)(40)};
  }
`,
    _v92 = ["uri", "name", "creatorUri", "modifiedTime", "metadata.connections.items", "metadata.connections.personalTeamFolderOwner", "metadata.interactions"];
  _v0.s(["DeactivatedPtf", 0, function ({
    ownerUserId: _v0
  }) {
    let [_v1, _v2] = (0, _v3.useState)(_v50),
      [_v3, _v4] = (0, _v3.useState)(_v52),
      [_v5, _v6] = (0, _v3.useState)(""),
      {
        data: _v7,
        size: _v8,
        setSize: _v9,
        error: _v10,
        mutate: _v11,
        isValidating: _v12
      } = _v19(() => ({
        where: {
          userId: _v0
        },
        select: _v92,
        query: {
          query: _v5 ?? null,
          sort: _v3,
          direction: _v1,
          perPage: 25
        }
      }), {
        revalidateOnFocus: !1
      }),
      _v13 = !_v7 && !_v10 || _v8 > 0 && _v7 && void 0 === _v7[_v8 - 1],
      _v14 = _v7?.[_v7?.length - 1]?.paging.next,
      _v15 = (0, _v3.useMemo)(() => _v7?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data.flatMap(_v0 => _v0)), [_v7]),
      {
        debouncedCallback: _v16
      } = (0, _v21.useDebouncedCallback)(async _v0 => {
        _v5 !== _v0 && _v6(_v0);
      }, 0),
      _v17 = (0, _v3.useCallback)(_v0 => {
        _v16(_v0);
      }, [_v16]);
    return (0, _v1.jsx)(_v49, {
      children: (0, _v1.jsxs)(_v4.Box, {
        w: "80%",
        maxW: (0, _v9.rem)(0),
        alignSelf: "center",
        px: (0, _v9.rem)(16),
        children: [(0, _v1.jsxs)(_v7.HStack, {
          justifyContent: "space-between",
          pt: (0, _v9.rem)(46.5),
          pb: (0, _v9.rem)(28.5),
          borderBottom: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "gray.200",
          children: [(0, _v1.jsxs)(_v5.Breadcrumb, {
            children: [(0, _v1.jsx)(_v5.BreadcrumbItem, {
              children: (0, _v1.jsx)(_v6.BreadcrumbLink, {
                as: _v2.default,
                href: "/manage/team/members",
                "data-testid": "primary-breadcrumb",
                color: "slate.600",
                fontWeight: "bold",
                fontSize: (0, _v9.rem)(28),
                children: (0, _v20.translate)({
                  singular: "Team management",
                  dictionary: {
                    es: {
                      singular: "Gestión de equipos"
                    },
                    "de-DE": {
                      singular: "Verwaltung des Teams"
                    },
                    "fr-FR": {
                      singular: "Gestion d'équipe"
                    },
                    "ja-JP": {
                      singular: "チーム管理"
                    },
                    "ko-KR": {
                      singular: "팀 관리"
                    },
                    "pt-BR": {
                      singular: "Gerenciamento de equipe"
                    },
                    "zh-CN": {
                      singular: "团队管理"
                    }
                  }
                })
              })
            }), (0, _v1.jsx)(_v5.BreadcrumbItem, {
              isCurrentPage: !0,
              children: (0, _v1.jsx)(_v6.BreadcrumbLink, {
                children: (0, _v1.jsx)(_v8.Header, {
                  "data-testid": "breadcrumb",
                  fontSize: (0, _v9.rem)(28),
                  color: "text-primary",
                  fontWeight: "bold",
                  size: "xl",
                  children: (0, _v20.translate)({
                    singular: "Deactivated member folders",
                    dictionary: {
                      es: {
                        singular: "Carpetas de miembros desactivados"
                      },
                      "de-DE": {
                        singular: "Deaktivierte Mitgliederordner"
                      },
                      "fr-FR": {
                        singular: "Dossiers membre désactivés"
                      },
                      "ja-JP": {
                        singular: "非アクティブ化されたメンバーフォルダー"
                      },
                      "ko-KR": {
                        singular: "비활성화된 회원 폴더"
                      },
                      "pt-BR": {
                        singular: "Pastas de assinantes desativadas"
                      },
                      "zh-CN": {
                        singular: "停用的成员文件夹"
                      }
                    }
                  })
                })
              })
            })]
          }), (0, _v1.jsx)(_v89, {
            searchValue: _v5,
            onChange: _v17
          })]
        }), _v12 || _v15 && _v15.length > 0 ? (0, _v1.jsx)(_v83, {
          isValidating: _v12,
          folders: _v15,
          updateList: () => {
            _v11();
          },
          sortDirection: _v1,
          setSortDirection: _v0 => _v2(_v0),
          sortValue: _v3,
          setSortValue: _v4
        }) : (0, _v1.jsx)(_v55, {}), !_v12 && _v14 && (0, _v1.jsx)(_v85, {
          isLoadingMore: !!_v13,
          onClick: () => {
            _v9(_v8 + 1);
          }
        })]
      })
    });
  }], 0);
}