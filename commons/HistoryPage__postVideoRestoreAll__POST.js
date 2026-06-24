{
  "use strict";

  _v0.s([], 0), _v0.s(["HistoryPage", () => _v68], 0);
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
  async function _v11({
    baseUrl: _v0,
    where: {
      userId: _v1
    },
    ..._v2
  }) {
    return (0, _v9.measureLatency)("postVideoRestoreAll", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v1}/restore-all`, {
        ..._v2,
        method: "POST"
      });
      if (!_v0.ok) throw new _v10.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v10.deepCamelCase)(_v1);
    });
  }
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  function _v14() {
    let {
        mutate: _v0
      } = (0, _v12.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v13.useGctlConfig)(),
      [_v5, _v6] = (0, _v8.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.userId}/restore-all${(0, _v8.serializeQuery)(_v0)}`, _v11({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
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
  }
  "true" === _v7.default.env.STORYBOOK && (0, _v8.assignMswData)(_v14, {
    endpoint: "/videos/:userId/restore-all",
    method: "POST"
  });
  var _v15 = _v0.i(0),
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
    _v28 = _v0.i(0);
  function _v29() {
    let {
      settings: _v0
    } = (0, _v20.useOrionSettings)();
    return _v0.has_recently_deleted ? (0, _v1.jsxs)(_v24.AlertRoot, {
      size: "sm",
      marginBottom: "100",
      backgroundColor: "#BEE3F87A",
      sx: {
        _dark: {
          backgroundColor: "rgba(26, 54, 93, 1)"
        }
      },
      children: [(0, _v1.jsx)(_v23.AlertIcon, {
        children: (0, _v1.jsx)(_v28.ShieldInfo, {})
      }), (0, _v1.jsxs)(_v26.Box, {
        children: [(0, _v1.jsx)(_v25.AlertTitle, {
          color: "status-info-primary",
          children: (0, _v15.translate)({
            singular: "Looking for videos deleted by team members?",
            dictionary: {
              es: {
                singular: "¿Buscas videos eliminados por miembros del equipo?"
              },
              "de-DE": {
                singular: "Suchen Sie nach Videos, die von Teammitgliedern gelöscht wurden?"
              },
              "fr-FR": {
                singular: "Vous recherchez des vidéos supprimées par des membres de l’équipe ?"
              },
              "ja-JP": {
                singular: "チームメンバーによって削除された動画をお探しですか？"
              },
              "ko-KR": {
                singular: "팀원이 삭제한 동영상을 찾고 계신가요?"
              },
              "pt-BR": {
                singular: "Procurando vídeos excluídos por membros da equipe?"
              },
              "zh-CN": {
                singular: "在查找团队成员删除的视频吗？"
              }
            }
          })
        }), (0, _v1.jsx)(_v22.AlertDescription, {
          color: "status-info-primary",
          children: (0, _v1.jsx)("span", {
            children: (0, _v15.translate)({
              singular: "This page only shows videos removed by your data retention policy. Videos manually deleted by team members live in {LINK}Recently deleted{/LINK}.",
              replacements: {
                LINK: _v0 => (0, _v1.jsxs)(_v27.Link, {
                  href: "/recently-deleted",
                  target: "_blank",
                  variant: "inline-secondary",
                  color: "status-info-primary",
                  fontSize: "inherit",
                  children: [_v0, " ↗"]
                }, "recently-deleted-link")
              },
              dictionary: {
                es: {
                  singular: "Esta página solo muestra los videos eliminados por su política de retención de datos. Los videos eliminados manualmente por miembros del equipo se encuentran en {LINK}Eliminados recientemente{/LINK}."
                },
                "de-DE": {
                  singular: "Diese Seite zeigt nur Videos, die durch Ihre Richtlinie zur Datenaufbewahrung entfernt wurden. Manuell von Teammitgliedern gelöschte Videos finden Sie in {LINK}Kürzlich gelöscht{/LINK}."
                },
                "fr-FR": {
                  singular: "Cette page n'affiche que les vidéos supprimées par votre politique de conservation des données. Les vidéos supprimées manuellement par des membres de l’équipe se trouvent dans {LINK}Récemment supprimées{/LINK}."
                },
                "ja-JP": {
                  singular: "このページにはデータ保持ポリシーによって削除された動画のみが表示されます。 チームメンバーが手動で削除した動画は{LINK}最近削除した項目{/LINK}にあります。"
                },
                "ko-KR": {
                  singular: "이 페이지에는 데이터 보존 정책에 따라 제거된 동영상만 표시됩니다. 팀원이 수동으로 삭제한 동영상은 {LINK}최근 삭제됨{/LINK}에 있습니다."
                },
                "pt-BR": {
                  singular: "Esta página mostra apenas vídeos removidos pela sua política de retenção de dados. Vídeos excluídos manualmente por membros da equipe podem ser encontrados em {LINK}Excluídos recentemente{/LINK}."
                },
                "zh-CN": {
                  singular: "此页面仅显示因您的数据保留策略而移除的视频。团队成员手动删除的视频位于 {LINK}最近删除{/LINK}。"
                }
              }
            })
          })
        })]
      })]
    }) : null;
  }
  var _v30 = _v0.i(0);
  async function _v31({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v9.measureLatency)("getUserVideosDeleted", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/videos/deleted?${(0, _v10.searchQueryString)(_v3)}&fields=${_v1.map(_v10.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v10.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v10.deepCamelCase)(_v1);
    });
  }
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  function _v34() {
    let {
        mutate: _v0
      } = (0, _v12.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v13.useGctlConfig)(),
      [_v5, _v6] = (0, _v8.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/videos/deleted${(0, _v8.serializeQuery)(_v0)}`, _v31({
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
  }
  "true" === _v7.default.env.STORYBOOK && (0, _v8.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v13.useGctlConfig)();
    return (0, _v32.default)(_v2 ? `/users/${_v2.where.userId}/videos/deleted${(0, _v8.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v31({
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
    endpoint: "/users/:userId/videos/deleted",
    method: "GET"
  }), "true" === _v7.default.env.STORYBOOK && (0, _v8.assignMswData)(_v34, {
    endpoint: "/users/:userId/videos/deleted",
    method: "GET"
  }), "true" === _v7.default.env.STORYBOOK && (0, _v8.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v13.useGctlConfig)();
    return (0, _v33.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/videos/deleted?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v31({
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
  }, {
    endpoint: "/users/:userId/videos/deleted",
    method: "GET"
  });
  let _v35 = "recoverable",
    _v36 = "unrecoverable",
    _v37 = {
      failedList: _v21.T.FailedList,
      failedRecover: _v21.T.FailedRecover,
      videoRecovered: _v21.T.ClipRecovered
    },
    _v38 = {
      totalPages: 0,
      page: 1,
      next: "",
      previous: ""
    },
    _v39 = ({
      showNotification: _v0
    }) => {
      let [_v1, {
          error: _v2,
          data: _v3,
          loading: _v4
        }] = _v34(),
        [_v5, _v6] = (0, _v2.useState)([]),
        [_v7, _v8] = (0, _v2.useState)(_v38),
        _v9 = () => _v6([]);
      return (0, _v2.useEffect)(() => {
        let _v0 = _v3?.data;
        _v8(_v3 && !_v2 ? {
          totalPages: Math.ceil(_v3.total / _v3.perPage),
          page: _v3.page || 1,
          next: _v3.paging.next || "",
          previous: _v3.paging.previous || ""
        } : _v38), _v6(_v0 && !_v2 ? _v0 : []);
      }, [_v3, _v2, _v6, _v8]), (0, _v2.useEffect)(() => {
        _v2 && _v0(_v37.failedList);
      }, [_v2]), {
        getDeletedVideos: ({
          page: _v0 = 1,
          recoveryStatus: _v1,
          dateFrom: _v2,
          dateTo: _v3,
          userId: _v4
        }) => (_v9(), _v1({
          select: ["videoId", "thumbnailUrl", "deletedOn", "reasonName", "title", "uploaderName"],
          where: {
            userId: _v4
          },
          query: {
            dateTo: _v3,
            dateFrom: _v2,
            page: _v0,
            reason: "data_retention",
            perPage: 8,
            filter: _v1
          }
        })),
        error: _v2,
        data: _v5,
        loading: _v4,
        cleanResultData: _v9,
        pagination: {
          ..._v7,
          goToPageNumber: _v0 => _v8(_v0 => ({
            ..._v0,
            page: _v0
          }))
        }
      };
    };
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  function _v42() {
    let {
        mutate: _v0
      } = (0, _v12.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v13.useGctlConfig)(),
      [_v5, _v6] = (0, _v8.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/restore${(0, _v8.serializeQuery)(_v0)}`, (0, _v41.postVideosRestore)({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
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
  }
  "true" === _v7.default.env.STORYBOOK && (0, _v8.assignMswData)(_v42, {
    endpoint: "/videos/restore",
    method: "POST"
  });
  let _v43 = (_v0, _v1) => !!_v0 && !!_v1 && _v0.getFullYear() === _v1.getFullYear() && _v0.getMonth() === _v1.getMonth() && _v0.getDate() === _v1.getDate();
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  let _v50 = ({
      thumbnailUrl: _v0,
      title: _v1,
      reasonName: _v2,
      uploaderName: _v3,
      deletedOn: _v4,
      onPopOverClick: _v5,
      isRecoveredStatus: _v6,
      videoId: _v7,
      loadingVideoId: _v8
    }) => {
      let _v9 = _v0 || _v16.EMPTY_THUMBNAIL_SRC;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v48.TeamSettingsTableCell, {
          overflow: "hidden",
          children: (0, _v1.jsxs)(_v3.Flex, {
            alignItems: "center",
            gap: "200",
            children: [(0, _v1.jsx)(_v47.Thumbnail, {
              image: _v9
            }), (0, _v1.jsx)(_v49.ShrinkableText, {
              variant: "body-md",
              children: _v1
            })]
          })
        }), (0, _v1.jsx)(_v48.TeamSettingsTableCell, {
          overflow: "hidden",
          children: (0, _v1.jsx)(_v49.ShrinkableText, {
            variant: "body-md",
            children: _v2
          })
        }), (0, _v1.jsx)(_v48.TeamSettingsTableCell, {
          overflow: "hidden",
          children: (0, _v1.jsx)(_v49.ShrinkableText, {
            variant: "body-md",
            children: _v3
          })
        }), (0, _v1.jsx)(_v48.TeamSettingsTableCell, {
          overflow: "hidden",
          children: (0, _v1.jsx)(_v49.ShrinkableText, {
            variant: "body-md",
            children: (0, _v19.formatDateToNeededLocale)({
              date: new Date(_v4)
            })
          })
        }), _v6 && (0, _v1.jsx)(_v48.TeamSettingsTableCell, {
          textAlign: "right",
          children: (0, _v1.jsx)(_v46.Button, {
            maxWidth: "100%",
            variant: "secondary",
            className: "recover-video-btn",
            isLoading: _v8 === _v7,
            isDisabled: !!(_v8 && _v8 !== _v7),
            onClick: () => {
              _v5(_v7);
            },
            children: (0, _v1.jsx)(_v49.ShrinkableText, {
              variant: "heading-xs",
              children: _v21.T.RecoverVideo
            })
          })
        })]
      });
    },
    _v51 = [{
      title: _v21.T.VideoTitle,
      width: "43%"
    }, {
      title: _v21.T.PolicyName,
      width: "28%"
    }, {
      title: _v21.T.Uploader,
      width: "15%"
    }, {
      title: _v21.T.DeletedOn,
      width: "14%"
    }],
    _v52 = ({
      onPopOverClick: _v0,
      loadingVideoId: _v1,
      list: _v2,
      isRecoveredStatus: _v3,
      pagination: _v4,
      toolBar: _v5,
      placeholder: _v6
    }) => {
      let _v7 = (0, _v2.useMemo)(() => _v3 ? _v51.concat({
        title: "",
        width: (0, _v44.rem)(118)
      }) : _v51, [_v3]);
      return (0, _v1.jsx)(_v45.TeamSettingsTable, {
        columns: _v7,
        pagination: _v4,
        rows: _v2,
        defaultIndexKey: "videoId",
        renderRow: ({
          row: _v0
        }) => (0, _v1.jsx)(_v50, {
          loadingVideoId: _v1,
          isRecoveredStatus: _v3,
          onPopOverClick: _v0,
          ..._v0
        }),
        placeholder: _v6,
        toolBar: _v5
      });
    };
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  let _v60 = ({
    isModalOpen: _v0,
    onModalClick: _v1,
    onModalClose: _v2
  }) => (0, _v1.jsxs)(_v53.Modal, {
    size: "md",
    isOpen: _v0,
    onClose: () => void 0,
    children: [(0, _v1.jsx)(_v58.ModalOverlay, {}), (0, _v1.jsxs)(_v55.ModalContent, {
      children: [(0, _v1.jsxs)(_v57.ModalHeader, {
        position: "relative",
        children: [(0, _v1.jsx)(_v4.Header, {
          size: "md",
          children: _v21.T.RecoverVideo
        }), (0, _v1.jsx)(_v59.ModalCloseButton, {
          onClick: () => _v2()
        })]
      }), (0, _v1.jsx)(_v54.ModalBody, {
        children: (0, _v1.jsx)(_v5.Paragraph, {
          size: "md",
          children: _v21.T.ModalText
        })
      }), (0, _v1.jsxs)(_v56.ModalFooter, {
        children: [(0, _v1.jsx)(_v46.Button, {
          variant: "secondary",
          onClick: () => _v2(),
          children: _v21.T.ModalHeaderButtonCancelText
        }), (0, _v1.jsx)(_v46.Button, {
          variant: "primary",
          onClick: () => _v1(),
          children: _v21.T.ModalHeaderButtonAcceptText
        })]
      })]
    })]
  });
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0);
  let _v66 = ({
      setRecoveredStatus: _v0,
      isRecoveredStatus: _v1,
      exportUri: _v2,
      isListEmpty: _v3,
      onDateChange: _v4,
      dateRange: _v5,
      onRecoverAllClick: _v6,
      recovering: _v7
    }) => {
      let _v8 = (0, _v19.getDateMinusCurrent)(30);
      return (0, _v1.jsxs)(_v3.Flex, {
        justifyContent: "space-between",
        alignItems: "center",
        children: [(0, _v1.jsx)(_v62.Tabs, {
          variant: "inlay",
          onChange: _v0 => {
            _v0(0 === _v0);
          },
          sx: {
            "& button": {
              paddingX: 200,
              whiteSpace: "nowrap",
              fontSize: "body-md"
            }
          },
          children: (0, _v1.jsxs)(_v63.TabList, {
            children: [(0, _v1.jsx)(_v61.Tab, {
              children: _v21.T.LastThirtyDays
            }), (0, _v1.jsx)(_v61.Tab, {
              children: _v21.T.PastThirtyDays
            }), (0, _v1.jsx)(_v62.TabIndicator, {})]
          })
        }), _v1 ? (0, _v1.jsxs)(_v3.Flex, {
          gap: "200",
          children: [(0, _v1.jsx)(_v46.Button, {
            variant: "primary",
            onClick: _v6,
            isDisabled: _v3 || _v7,
            children: _v7 ? _v21.T.RecoveringAllVideos : _v21.T.RecoverAll
          }), (0, _v1.jsx)(_v64.ExportCsvButton, {
            disabled: _v3,
            variant: "primary",
            uri: _v2
          })]
        }) : (0, _v1.jsxs)(_v3.Flex, {
          gap: "md",
          children: [(0, _v1.jsx)(_v65.RangePicker, {
            value: _v5,
            onDateChange: _v4,
            maxDate: _v8,
            defaultButtonText: _v21.T.SelectDate
          }), (0, _v1.jsx)(_v64.ExportCsvButton, {
            variant: "primary",
            uri: _v2
          })]
        })]
      });
    },
    _v67 = ({
      isModalOpen: _v0,
      onModalClick: _v1,
      onModalClose: _v2,
      isLoading: _v3
    }) => (0, _v1.jsxs)(_v53.Modal, {
      size: "md",
      isOpen: _v0,
      onClose: _v2,
      children: [(0, _v1.jsx)(_v58.ModalOverlay, {}), (0, _v1.jsxs)(_v55.ModalContent, {
        children: [(0, _v1.jsxs)(_v57.ModalHeader, {
          position: "relative",
          children: [(0, _v1.jsx)(_v4.Header, {
            size: "md",
            children: _v21.T.RecoverAllVideosModalHeader
          }), (0, _v1.jsx)(_v59.ModalCloseButton, {
            onClick: _v2
          })]
        }), (0, _v1.jsx)(_v54.ModalBody, {
          children: (0, _v1.jsx)(_v5.Paragraph, {
            size: "md",
            children: _v21.T.RecoverAllVideosModalText
          })
        }), (0, _v1.jsxs)(_v56.ModalFooter, {
          children: [(0, _v1.jsx)(_v46.Button, {
            variant: "secondary",
            onClick: _v2,
            disabled: _v3,
            children: _v21.T.ModalHeaderButtonCancelText
          }), (0, _v1.jsx)(_v46.Button, {
            variant: "primary",
            onClick: _v1,
            isLoading: _v3,
            children: _v21.T.RecoverAllVideosModalConfirm
          })]
        })]
      })]
    }),
    _v68 = ({
      userId: _v0
    }) => {
      let {
          settings: _v1
        } = (0, _v20.useOrionSettings)(),
        [_v2, _v3] = (0, _v2.useState)(!0),
        [_v4, _v5] = (0, _v2.useState)(!1),
        [_v6, _v7] = (0, _v2.useState)(0),
        _v8 = (0, _v6.useToast)(),
        _v9 = (0, _v2.useCallback)(_v0 => {
          _v8({
            duration: _v16.NOTIFICATION_DURATION,
            title: _v0
          });
        }, [_v8]),
        [_v10, _v11] = _v14(),
        _v12 = (0, _v2.useCallback)(async () => {
          try {
            localStorage.setItem("RestoreAllLastClick" + _v0, String(Date.now())), _v7(60);
          } catch (_v0) {
            console.error(_v0);
          } finally {
            await _v10({
              where: {
                userId: _v0.toString()
              }
            });
          }
        }, [_v10, _v0]);
      (0, _v2.useEffect)(() => {
        !_v11.data || _v11.loading || _v11.error ? _v11.error && _v9(_v21.T.RecoverAllVideosError) : (_v5(!1), _v9(_v21.T.RecoverAllVideosSuccess));
      }, [_v11.data, _v11.loading, _v11.error, _v9]), (0, _v2.useEffect)(() => {
        try {
          let _v0 = localStorage.getItem("RestoreAllLastClick" + _v0);
          if (!_v0) return;
          let _v1 = Number(_v0);
          if (Number.isNaN(_v1)) return;
          let _v2 = Math.ceil((Date.now() - _v1) / 0);
          _v2 < 60 && _v7(Math.ceil(60 - _v2));
        } catch (_v0) {
          console.error(_v0);
        }
      }, [_v0]);
      let {
          unRecoverablePlaceholderMessage: _v13,
          onDateChange: _v14,
          dateRange: _v15,
          unRecoverableList: _v16,
          unRecoverableListLoading: _v17,
          pagination: _v18
        } = (({
          isRecoveredStatus: _v0,
          showNotification: _v1,
          userId: _v2
        }) => {
          let [_v3, _v4] = (0, _v2.useState)(!1),
            [_v5, _v6] = (0, _v2.useState)({
              startDate: void 0,
              endDate: void 0
            }),
            {
              getDeletedVideos: _v7,
              data: _v8,
              loading: _v9,
              cleanResultData: _v10,
              pagination: _v11
            } = _v39({
              showNotification: _v1
            });
          return (0, _v2.useEffect)(() => {
            !_v0 && _v2 && _v7({
              recoveryStatus: _v36,
              dateTo: (0, _v19.formatDateForApi)(_v5.endDate),
              dateFrom: (0, _v19.formatDateForApi)(_v5.startDate),
              page: _v11.page,
              userId: _v2
            });
          }, [_v11.page, _v2]), {
            unRecoverablePlaceholderMessage: (0, _v2.useMemo)(() => _v0 || _v9 || _v8.length ? null : _v3 ? _v21.T.NoResultsForThisPage : _v21.T.SelectDateRangeText, [_v3, _v0, _v8.length, _v9]),
            onDateChange: ({
              startDate: _v0,
              endDate: _v1
            }) => {
              _v43(_v0, _v5.startDate) && _v43(_v1, _v5.endDate) || (_v6({
                startDate: _v0,
                endDate: _v1
              }), _v4(!0), _v7({
                recoveryStatus: _v36,
                dateTo: (0, _v19.formatDateForApi)(_v1),
                dateFrom: (0, _v19.formatDateForApi)(_v0),
                userId: _v2
              }));
            },
            cleanUnRecoverableData: _v10,
            dateRange: _v5,
            unRecoverableList: _v8,
            unRecoverableListLoading: _v9,
            pagination: _v11
          };
        })({
          isRecoveredStatus: _v2,
          showNotification: _v9,
          userId: _v0
        }),
        {
          isModalOpen: _v19,
          onPopOverClick: _v20,
          closeModal: _v21,
          recoverableList: _v22,
          recoverableListLoading: _v23,
          recoverVideo: _v24,
          recoverablePagination: _v25,
          loadingVideoId: _v26
        } = (({
          showNotification: _v0,
          isRecoveredStatus: _v1,
          userId: _v2
        }) => {
          let _v3 = (0, _v2.useRef)(""),
            [_v4, _v5] = (0, _v2.useState)(!1),
            {
              getDeletedVideos: _v6,
              data: _v7,
              loading: _v8,
              pagination: _v9
            } = _v39({
              showNotification: _v0
            }),
            _v10 = (_v0, _v1) => _v6({
              recoveryStatus: _v35,
              dateFrom: (0, _v19.formatDateForApi)((0, _v19.getDateMinusCurrent)(30)),
              dateTo: (0, _v19.formatDateForApi)(new Date()),
              page: _v0,
              userId: _v1
            });
          (0, _v2.useLayoutEffect)(() => {
            _v1 && _v2 && _v10(_v9.page, _v2);
          }, [_v1, _v9.page, _v2]);
          let {
              onRecover: _v11,
              recoverVideoLoading: _v12
            } = (({
              showNotification: _v0,
              page: _v1,
              goToPageNumber: _v2,
              videoListLength: _v3,
              getDeletedVideosByPage: _v4,
              userId: _v5
            }) => {
              let _v6 = (0, _v2.useRef)(0),
                [_v7, {
                  error: _v8,
                  callCount: _v9,
                  loading: _v10
                }] = _v42();
              return (0, _v2.useEffect)(() => {
                _v8 && _v0(_v37.failedRecover);
              }, [_v8]), (0, _v2.useEffect)(() => {
                !(_v6.current < _v9) || _v10 || _v8 || (1 === _v3 && _v1 > 1 ? _v2(_v1 - 1) : _v4(_v1, _v5), _v0(_v37.videoRecovered), _v6.current = _v9);
              }, [_v9, _v10, _v8]), {
                onRecover: _v0 => {
                  _v7({
                    variables: {
                      uri: `/videos/${_v0}`
                    }
                  });
                },
                recoverVideoLoading: _v10
              };
            })({
              showNotification: _v0,
              page: _v9.page,
              goToPageNumber: _v9.goToPageNumber,
              videoListLength: _v7?.length,
              getDeletedVideosByPage: _v10,
              userId: _v2
            }),
            _v13 = () => {
              _v5(!1);
            };
          return {
            isModalOpen: _v4,
            onPopOverClick: _v0 => {
              _v5(!0), _v3.current = _v0;
            },
            closeModal: _v13,
            recoverableList: _v7,
            recoverableListLoading: _v8,
            recoverVideo: () => {
              _v13(), _v40.BigPictureClient.sendEvent(new _v40.Event("vimeo.click", 48, {
                page: "data_retention_history",
                location: "video_list",
                target: "history/page/path",
                name: "recover_video",
                copy: "Recover video",
                feature: "data_retention",
                type: "general"
              })), _v11(_v3.current);
            },
            recoverablePagination: _v9,
            loadingVideoId: _v12 ? _v3.current : null
          };
        })({
          showNotification: _v9,
          isRecoveredStatus: _v2,
          userId: _v0
        }),
        _v27 = (({
          status: _v0,
          userId: _v1
        }) => {
          let {
            apiUrl: _v2,
            jwt: _v3
          } = (0, _v2.useContext)(_v30.ViewerContext);
          return `//${_v2}/users/${_v1}/videos/deleted/export?reason=data_retention&filter=${_v0}&jwt_token=${_v3}`;
        })({
          status: _v2 ? _v35 : _v36,
          userId: _v0
        }),
        _v28 = _v2 ? _v22 : _v16,
        _v29 = !!_v28.length,
        _v30 = _v2 ? _v25 : _v18,
        _v31 = !_v29 || _v13 ? (0, _v1.jsxs)(_v3.Flex, {
          flexDirection: "column",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v4.Header, {
            size: "lg",
            children: _v21.T.NothingHereYet
          }), _v13 && (0, _v1.jsx)(_v5.Paragraph, {
            children: _v13
          })]
        }) : null;
      return (0, _v19.formatDateToNeededLocale)({
        date: new Date()
      }), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v17.SettingsPageContentHeader, {
          title: _v21.T.HistoryAndRecovery,
          description: _v1.has_recently_deleted ? (0, _v15.translate)({
            singular: "Videos that have been deleted by your organization's data retention policy are archived here. Only videos deleted in the last {DAYS} days can be recovered.",
            replacements: {
              DAYS: 30
            },
            dictionary: {
              es: {
                singular: "Los vídeos que han sido eliminados por la política de retención de datos de su organización se archivan aquí. Solo los vídeos eliminados en los últimos {DAYS} días se pueden recuperar."
              },
              "de-DE": {
                singular: "Videos, die aufgrund der Datenaufbewahrungsrichtlinie Ihrer Organisation gelöscht wurden, werden hier archiviert. Nur Videos, die in den letzten {DAYS} Tagen gelöscht wurden, können wiederhergestellt werden."
              },
              "fr-FR": {
                singular: "Les vidéos supprimées en application de la politique de conservation des données de votre organisation sont archivées ici. Seules les vidéos supprimées au cours des {DAYS} derniers jours peuvent être récupérées."
              },
              "ja-JP": {
                singular: "組織のデータ保持ポリシーによって削除された動画はここにアーカイブされます。過去{DAYS}日以内に削除された動画のみ復元できます。"
              },
              "ko-KR": {
                singular: "귀하의 조직의 데이터 보존 정책에 따라 삭제된 동영상은 이곳에 보관됩니다. 최근 {DAYS}일 이내에 삭제된 동영상만 복구할 수 있습니다."
              },
              "pt-BR": {
                singular: "Os vídeos que foram excluídos pela política de retenção de dados da sua organização ficam arquivados aqui. Somente vídeos excluídos nos últimos {DAYS} dias podem ser recuperados."
              },
              "zh-CN": {
                singular: "因贵组织的数据保留政策被删除的视频会在此处存档。只有在过去 {DAYS} 天内被删除的视频可以恢复。"
              }
            }
          }) : _v2 ? _v21.T.RecoveredVideosText(30) : _v21.T.NotRecoveredVideosText(30)
        }), (0, _v1.jsx)(_v29, {}), (0, _v1.jsx)(_v52, {
          loadingVideoId: _v26,
          pagination: _v30,
          isRecoveredStatus: _v2,
          list: _v28,
          onPopOverClick: _v20,
          placeholder: !_v29 && (_v17 || _v23) ? (0, _v1.jsx)(_v18.LoadSpinner, {}) : _v31,
          toolBar: (0, _v1.jsx)(_v66, {
            setRecoveredStatus: _v3,
            isRecoveredStatus: _v2,
            exportUri: _v27,
            isListEmpty: !_v29,
            onDateChange: _v14,
            dateRange: _v15,
            onRecoverAllClick: () => _v5(!0),
            recovering: _v6 > 0
          })
        }), (0, _v1.jsx)(_v60, {
          isModalOpen: _v19,
          onModalClick: _v24,
          onModalClose: _v21
        }), _v4 && (0, _v1.jsx)(_v67, {
          isModalOpen: _v4,
          onModalClick: _v12,
          onModalClose: () => _v5(!1),
          isLoading: _v11.loading
        })]
      });
    };
}