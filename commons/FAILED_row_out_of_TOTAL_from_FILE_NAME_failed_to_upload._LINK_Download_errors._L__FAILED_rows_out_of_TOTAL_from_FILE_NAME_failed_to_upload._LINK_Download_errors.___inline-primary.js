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
    _v35 = _v0.i(0);
  let _v36 = ({
      partialErrorCount: _v0,
      status: _v1,
      type: _v2,
      fileName: _v3
    }) => {
      if (_v1 === _v30.CRM_CSV_STATUS.PARTIAL_ERROR) return `${_v0?.error} row out of ${_v0?.total} from "{FILE_NAME}" failed to upload. Download errors.`;
      switch (_v2) {
        case _v30.UPLOAD_CSV_ERRORS.EXCEEDS_MAX_ALLOWED_REGISTRANTS:
          return `${_v3} exceeds the max allowed number of rows. Please upload a file under ${_v30.MAX_REGISTRANTS_ALLOWED.toLocaleString()} rows.`;
        case _v30.UPLOAD_CSV_ERRORS.TOO_MANY_REGISTRANTS:
          return `${(0, _v31.getFileName)(_v3)} exceeds the max number of attendees.`;
        case _v30.UPLOAD_CSV_ERRORS.EVENT_COMPLETED:
          return `Upload of ${(0, _v31.getFileName)(_v3)} was interrupted by event completion.`;
        default:
          return `Something went wrong with ${(0, _v31.getFileName)(_v3)}. Please try again.`;
      }
    },
    _v37 = ({
      status: _v0,
      partialErrorCount: _v1,
      uploadId: _v2,
      fileName: _v3,
      errorCode: _v4,
      handleRemove: _v5
    }) => {
      let {
          PARTIAL_ERROR: _v6,
          ERROR: _v7
        } = _v30.CRM_CSV_STATUS,
        {
          downloadUri: _v8
        } = (0, _v35.useCSVUploadError)(_v2),
        {
          sendAlertBpEvent: _v9
        } = (0, _v27.useAnalytics)();
      (0, _v2.useEffect)(() => {
        _v9({
          eventName: _v29.BP_EVENT_NAME.NOTIFICATION_VIEW,
          integrationName: null,
          notificationCopy: _v36({
            partialErrorCount: _v1,
            status: _v0,
            type: _v4,
            fileName: _v3
          }),
          errorName: _v30.IMPORT_TYPE.CSV.toLowerCase(),
          notificationName: _v29.BP_NOTIFICATION_NAME.CSV_REGISTRANTS_ERROR_IMPORT,
          element: null
        });
      }, []);
      let _v10 = () => {
        _v9({
          eventName: _v29.BP_EVENT_NAME.NOTIFICATION_ACTION,
          copy: _v29.BP_COPY.X,
          element: _v29.BP_ELEMENT.BUTTON,
          integrationName: null,
          notificationCopy: _v36({
            partialErrorCount: _v1,
            status: _v0,
            type: _v4,
            fileName: _v3
          }),
          notificationName: _v29.BP_NOTIFICATION_NAME.CRM_REGISTRANTS_ERROR_IMPORT
        }), _v5?.(_v2 || "");
      };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v0 === _v6 && (0, _v1.jsx)(_v34.ErrorAlertBanner, {
          message: (0, _v24.translate)({
            singular: '{FAILED} row out of {TOTAL} from "{FILE_NAME}" failed to upload. {LINK}Download errors.{/LINK}',
            plural: '{FAILED} rows out of {TOTAL} from "{FILE_NAME}" failed to upload. {LINK}Download errors.{/LINK}',
            replacements: {
              FAILED: _v1?.error,
              TOTAL: _v1?.total,
              FILE_NAME: (0, _v31.getFileName)(_v3),
              LINK: _v0 => (0, _v1.jsx)(_v33.Link, {
                href: _v8,
                download: `${_v3}`,
                variant: "inline-primary",
                fontSize: "body-md",
                onClick: () => {
                  _v9({
                    eventName: _v29.BP_EVENT_NAME.NOTIFICATION_ACTION,
                    copy: _v29.BP_COPY.DOWNLOAD_ERRORS,
                    element: _v29.BP_ELEMENT.BUTTON,
                    integrationName: null,
                    notificationCopy: _v36({
                      partialErrorCount: _v1,
                      status: _v0,
                      type: _v4,
                      fileName: _v3
                    }),
                    errorName: "csv",
                    notificationName: _v29.BP_NOTIFICATION_NAME.CRM_REGISTRANTS_ERROR_IMPORT
                  });
                },
                children: _v0
              })
            },
            count: _v1?.error,
            dictionary: {
              es: {
                singular: "Se produjo un error al subir {FAILED} fila de {TOTAL} de “{FILE_NAME}”. {LINK}Descargue los errores.{/LINK}",
                plural: "Se produjo un error al subir {FAILED} filas de {TOTAL} de “{FILE_NAME}”. {LINK}Descargue los errores.{/LINK}"
              },
              "de-DE": {
                singular: 'Zeile {FAILED} aus {TOTAL} von "{FILE_NAME}" konnte nicht hochgeladen werden. {LINK}Download-Fehler.{/LINK}',
                plural: "{FAILED} Zeilen von {TOTAL} von „{FILE_NAME}“ konnten nicht hochgeladen werden. {LINK}Download-Fehler.{/LINK}"
              },
              "fr-FR": {
                singular: "{FAILED} ligne sur {TOTAL} à partir de « {FILE_NAME} » n’a pas pu être mise en ligne. {LINK}Télécharger les erreurs.{/LINK}",
                plural: "{FAILED} lignes sur {TOTAL} à partir de « {FILE_NAME} » n’ont pas pu être mises en ligne. {LINK}Télécharger les erreurs.{/LINK}"
              },
              "ja-JP": {
                singular: "「{FILE_NAME}」の{TOTAL}列中{FAILED}列をアップロードできませんでした。{LINK}ダウンロードエラーが発生しました。{/LINK}",
                plural: "「{FILE_NAME}」の{TOTAL}列中{FAILED}列をアップロードできませんでした。{LINK}ダウンロードエラーが発生しました。{/LINK}"
              },
              "ko-KR": {
                singular: '"{FILE_NAME}" 파일에서 {TOTAL}개 행 중 {FAILED}개 행을 업로드하는 데 실패했습니다. {LINK}오류 다운로드하기{/LINK}',
                plural: '"{FILE_NAME}" 파일에서 {TOTAL}개 행 중 {FAILED}개 행을 업로드하는 데 실패했습니다. {LINK}오류 다운로드하기{/LINK}'
              },
              "pt-BR": {
                singular: 'Falha ao carregar {FAILED} linha de {TOTAL} de "{FILE_NAME}". {LINK}Erro no download.{/LINK}',
                plural: 'Falha ao carregar {FAILED} linhas de {TOTAL} de "{FILE_NAME}". {LINK}Erro no download.{/LINK}'
              },
              "zh-CN": {
                singular: "无法上传“{FILE_NAME}”中的 {FAILED} 行（共 {TOTAL} 行）。{LINK}下载错误。{/LINK}",
                plural: "{FILE_NAME} 中的 {FAILED} 行（共 {TOTAL} 行）上传失败。{LINK}下载错误。{/LINK}"
              }
            }
          }),
          onClose: _v10
        }), _v0 === _v7 && (0, _v1.jsx)(_v34.ErrorAlertBanner, {
          message: ((_v0, _v1) => {
            switch (_v1) {
              case _v30.UPLOAD_CSV_ERRORS.EXCEEDS_MAX_ALLOWED_REGISTRANTS:
                return (0, _v24.translate)({
                  singular: "{FILE_NAME} exceeds the max allowed number of rows. Please upload a file under {MAX_REGISTRANTS} rows.",
                  replacements: {
                    FILE_NAME: () => (0, _v1.jsx)("strong", {
                      children: (0, _v31.getFileName)(_v0)
                    }),
                    MAX_REGISTRANTS: _v30.MAX_REGISTRANTS_ALLOWED.toLocaleString()
                  },
                  dictionary: {
                    "fr-FR": {
                      singular: "Le fichier {FILE_NAME} dépasse le nombre maximum de lignes. Veuillez importer un fichier contenant moins de {MAX_REGISTRANTS} lignes."
                    },
                    "ja-JP": {
                      singular: "{FILE_NAME} はアップロード可能な最大の行数を超えています。{MAX_REGISTRANTS} 列以下のファイルをアップロードしてください。"
                    },
                    "ko-KR": {
                      singular: "{FILE_NAME} 파일은 허용되는 최대 행 수를 초과합니다. {MAX_REGISTRANTS}행 미만의 파일을 업로드하세요."
                    },
                    "zh-CN": {
                      singular: "{FILE_NAME} 超过允许的最大行数。请上传不超过 {MAX_REGISTRANTS} 行的文件。"
                    }
                  }
                });
              case _v30.UPLOAD_CSV_ERRORS.TOO_MANY_REGISTRANTS:
                return (0, _v24.translate)({
                  singular: "{FILE_NAME} exceeds the max number of attendees.",
                  replacements: {
                    FILE_NAME: () => (0, _v1.jsx)("strong", {
                      children: (0, _v31.getFileName)(_v0)
                    })
                  },
                  dictionary: {
                    "fr-FR": {
                      singular: "Le fichier {FILE_NAME} dépasse le nombre maximum de participants."
                    },
                    "ja-JP": {
                      singular: "{FILE_NAME} は参加者の最大数を超えています。"
                    },
                    "ko-KR": {
                      singular: "{FILE_NAME} 파일은 최대 참석자 수를 초과합니다."
                    },
                    "zh-CN": {
                      singular: "{FILE_NAME} 超过了最大出席者人数。"
                    }
                  }
                });
              case _v30.UPLOAD_CSV_ERRORS.EVENT_COMPLETED:
                return (0, _v24.translate)({
                  singular: "Upload of {FILE_NAME} was interrupted by event completion.",
                  replacements: {
                    FILE_NAME: () => (0, _v1.jsx)("strong", {
                      children: (0, _v31.getFileName)(_v0)
                    })
                  },
                  dictionary: {
                    "fr-FR": {
                      singular: "La mise en ligne de {FILE_NAME} a été interrompue avant la fin de l'événement."
                    },
                    "ja-JP": {
                      singular: "{FILE_NAME} のアップロードは、イベントが完了したため中断されました。"
                    },
                    "ko-KR": {
                      singular: "이벤트가 종료되어 {FILE_NAME} 업로드가 중단되었습니다."
                    },
                    "zh-CN": {
                      singular: "由于活动完成，{FILE_NAME} 的上传中断。"
                    }
                  }
                });
              default:
                return (0, _v24.translate)({
                  singular: "Something went wrong with {FILE_NAME}. Please try again.",
                  replacements: {
                    FILE_NAME: () => (0, _v1.jsx)("strong", {
                      children: (0, _v31.getFileName)(_v0)
                    })
                  },
                  dictionary: {
                    "fr-FR": {
                      singular: "Une erreur s'est produite avec {FILE_NAME}. Veuillez réessayer."
                    },
                    "ja-JP": {
                      singular: "{FILE_NAME} にエラーが発生しました。再度お試しください。"
                    },
                    "ko-KR": {
                      singular: "{FILE_NAME} 파일에 문제가 발생했습니다. 다시 시도해 주세요."
                    },
                    "zh-CN": {
                      singular: "{FILE_NAME} 出错了。请重试。"
                    }
                  }
                });
            }
          })(_v3, _v4),
          onClose: _v10
        })]
      });
    },
    _v38 = ({
      importRegistrantState: _v0,
      dispatch: _v1,
      fetchAttendeeData: _v2
    }) => {
      let _v3 = (0, _v4.useViewer)(),
        _v4 = _v3?.jwt,
        {
          CSV: _v5
        } = _v30.IMPORT_TYPE,
        {
          IMPORT: _v6
        } = _v30.SYNC_TYPE,
        {
          PROCESSING: _v7,
          UPLOADED: _v8,
          PENDING: _v9,
          SUCCESS: _v10,
          PARTIAL_ERROR: _v11,
          ERROR: _v12
        } = _v30.CRM_CSV_STATUS,
        {
          uploadCSVBanners: _v13
        } = _v0,
        _v14 = (0, _v2.useRef)(void 0),
        _v15 = (0, _v2.useRef)(_v13),
        _v16 = (0, _v10.useToast)(),
        {
          sendAlertBpEvent: _v17
        } = (0, _v27.useAnalytics)(),
        [_v18, _v19] = (0, _v25.useIsVisible)({
          threshold: 1
        }),
        [_v20, {
          data: _v21,
          loading: _v22,
          error: _v23
        }] = (0, _v23.useGetLeadCaptureResourceIdRegistrantsUploadsLazy)(),
        [_v24, {
          data: _v25,
          loading: _v26,
          error: _v27
        }] = (0, _v22.useGetLeadCaptureRegistrantsUploadLazy)(),
        [_v28, {
          data: _v29,
          loading: _v30,
          error: _v31
        }] = (0, _v22.usePatchLeadCaptureRegistrantsUpload)(),
        _v32 = () => {
          clearInterval(_v14.current);
        },
        {
          entityId: _v33,
          entityType: _v34
        } = (0, _v15.useConfigStore)();
      (0, _v2.useEffect)(() => {
        if (_v13) {
          _v32();
          let _v0 = _v13.findIndex(_v0 => _v0.status === _v30.CRM_CSV_STATUS.PROCESSING || _v0.status === _v30.CRM_CSV_STATUS.UPLOADED);
          -1 !== _v0 && (_v14.current = setInterval(() => {
            _v24({
              where: {
                uploadId: (0, _v26.getLastUuidFromUri)(_v13[_v0].uri)
              },
              select: ["status", "fileName", "uri", "partialErrorCount", "errorCode"]
            });
          }, _v30.UPLOAD_CSV_STATUS_INTERVAL));
        }
      }, [_v13, _v4]), (0, _v2.useEffect)(() => {
        !_v22 && !_v23 && _v21?.data && _v1({
          type: _v28.ACTION_TYPE.SET_CSV_BANNERS,
          payload: _v21.data
        });
      }, [_v21, _v22, _v23]), (0, _v2.useEffect)(() => {
        if (!_v26) {
          if (_v27) _v32();else if (_v25 && (_v25.status === _v10 || _v25.status === _v12 || _v25.status === _v11)) {
            if (_v32(), _v13) {
              let _v0 = _v13.findIndex(_v0 => _v0.uri === _v25.uri),
                _v1 = [..._v13];
              _v1[_v0].status = _v25.status, _v1[_v0].partialErrorCount = _v25.partialErrorCount, _v1[_v0].errorCode = _v25.errorCode, _v1({
                type: _v28.ACTION_TYPE.SET_CSV_BANNERS,
                payload: _v1
              });
            }
            (_v25.status === _v10 || _v25.status === _v11) && setTimeout(() => {
              _v2(1, !0, !0, !0);
            }, 0);
          }
        }
      }, [_v25, _v26, _v27]);
      let _v35 = (_v0, _v1) => {
        _v33 && _v34 && _v20({
          where: {
            resourceId: _v33,
            resourceType: _v14.ENTITY_TO_PATH_MAP[_v34]
          },
          select: ["status", "fileName", "uri", "partialErrorCount", "errorCode"],
          query: {
            pendingUserInteraction: !0,
            perPage: _v0,
            page: _v1
          }
        });
      };
      (0, _v2.useEffect)(() => {
        _v13 || _v35(_v30.MAX_IMPORT_STATUS_BANNERS, 1);
      }, [_v13]);
      let _v36 = _v0 => {
        if (!_v33) return;
        _v15.current = _v13;
        let _v1 = _v13?.filter(_v0 => _v0 !== (0, _v26.getLastUuidFromUri)(_v0.uri)) || [];
        _v1({
          type: _v28.ACTION_TYPE.SET_CSV_BANNERS,
          payload: [..._v1]
        }), _v28({
          where: {
            uploadId: _v0
          },
          select: [],
          variables: {
            pendingUserAction: !1
          }
        });
      };
      (0, _v2.useEffect)(() => {
        !_v30 && (_v31 ? (_v16({
          title: _v16.default.ChangesCouldNotBeSaved,
          status: "error"
        }), _v1({
          type: _v28.ACTION_TYPE.SET_CSV_BANNERS,
          payload: _v15.current
        })) : _v29 && (_v16({
          title: _v16.default.ChangesSaved,
          status: "success"
        }), _v35(_v30.MAX_IMPORT_STATUS_BANNERS, 1)));
      }, [_v30, _v31, _v29]);
      let _v37 = (_v0, _v1, _v2 = !0) => {
        _v2 && _v17({
          eventName: _v29.BP_EVENT_NAME.NOTIFICATION_ACTION,
          copy: _v29.BP_COPY.X,
          element: _v29.BP_ELEMENT.BUTTON,
          notificationName: _v29.BP_NOTIFICATION_NAME.CSV_REGISTRANTS_SUCCESS,
          notificationCopy: (0, _v29.buildNotificationCopy)(_v5, _v6, _v10, _v1)
        }), _v16.isActive(_v1) && (_v16.close(_v1), _v36((0, _v26.getLastUuidFromUri)(_v0)));
      };
      return (0, _v2.useEffect)(() => {
        _v19 && _v13?.forEach(({
          status: _v0,
          fileName: _v1,
          uri: _v2,
          pendingUserAction: _v3
        }) => {
          _v0 && [_v9, _v7, _v8].includes(_v0) && !_v16.isActive(_v1) ? (_v17({
            eventName: _v29.BP_EVENT_NAME.NOTIFICATION_VIEW,
            notificationName: _v29.BP_NOTIFICATION_NAME.CSV_REGISTRANTS_PROGRESS,
            notificationCopy: (0, _v29.buildNotificationCopy)(_v5, _v6, _v0, _v1),
            element: null
          }), _v16({
            render: () => (0, _v1.jsx)(_v32.ToastMessage, {
              status: "info",
              title: (0, _v24.translate)({
                singular: 'Importing registrants from "{NAME}"...',
                replacements: {
                  NAME: (0, _v31.getFileName)(_v1)
                },
                dictionary: {
                  es: {
                    singular: 'Importando inscritos de "{NAME}"...'
                  },
                  "de-DE": {
                    singular: 'Registranten aus "{NAME}" werden importiert...'
                  },
                  "fr-FR": {
                    singular: "Importation des participants depuis « {NAME} »..."
                  },
                  "ja-JP": {
                    singular: "「{NAME}」から登録者をインポートしています..."
                  },
                  "ko-KR": {
                    singular: '"{NAME}"에서 등록자를 가져오는 중입니다...'
                  },
                  "pt-BR": {
                    singular: 'Importando inscritos de "{NAME}"...'
                  },
                  "zh-CN": {
                    singular: "正在导入“{NAME}”中的注册者..."
                  }
                }
              })
            }),
            id: _v1,
            duration: null
          })) : [_v10, _v11].includes(_v0 || "") && (_v0 !== _v10 || _v16.isActive(`csvSuccess${_v2}`) || _v3 || (_v17({
            eventName: _v29.BP_EVENT_NAME.NOTIFICATION_VIEW,
            notificationName: _v29.BP_NOTIFICATION_NAME.CSV_REGISTRANTS_SUCCESS,
            notificationCopy: (0, _v29.buildNotificationCopy)(_v5, _v6, _v0, _v1),
            element: null
          }), setTimeout(() => {
            _v37(_v2, `csvSuccess${_v2}`, !1);
          }, 0), _v16({
            render: () => (0, _v1.jsx)(_v32.ToastMessage, {
              status: "success",
              title: (0, _v24.translate)({
                singular: 'Registrants imported from "{NAME}"',
                replacements: {
                  NAME: (0, _v31.getFileName)(_v1)
                },
                dictionary: {
                  es: {
                    singular: 'Inscritos importados de "{NAME}"'
                  },
                  "de-DE": {
                    singular: "Registranten importiert aus „{NAME}“"
                  },
                  "fr-FR": {
                    singular: "Participants importés depuis « {NAME} »"
                  },
                  "ja-JP": {
                    singular: "「{NAME}」からインポートされた登録者"
                  },
                  "ko-KR": {
                    singular: '"{NAME}"에서 가져온 등록자'
                  },
                  "pt-BR": {
                    singular: 'Inscritos importados de "{NAME}"'
                  },
                  "zh-CN": {
                    singular: "已导入“{NAME}”中的注册者..."
                  }
                }
              }),
              onCloseComplete: () => _v37(_v2, `csvSuccess${_v2}`),
              isClosable: !0
            }),
            id: `csvSuccess${_v2}`,
            duration: null
          })), _v16.close(_v1));
        });
      }, [_v13, _v19]), (0, _v2.useEffect)(() => {
        let _v0 = _v0.uploadedCsv?.name || "";
        _v0.apiPending && _v0.showModalType === _v30.IMPORT_TYPE.CSV && !_v16.isActive(_v0) && _v16({
          render: () => (0, _v1.jsx)(_v32.ToastMessage, {
            status: "info",
            title: (0, _v24.translate)({
              singular: 'Importing registrants from "{NAME}"...',
              replacements: {
                NAME: (0, _v31.getFileName)(_v0)
              },
              dictionary: {
                es: {
                  singular: 'Importando inscritos de "{NAME}"...'
                },
                "de-DE": {
                  singular: 'Registranten aus "{NAME}" werden importiert...'
                },
                "fr-FR": {
                  singular: "Importation des participants depuis « {NAME} »..."
                },
                "ja-JP": {
                  singular: "「{NAME}」から登録者をインポートしています..."
                },
                "ko-KR": {
                  singular: '"{NAME}"에서 등록자를 가져오는 중입니다...'
                },
                "pt-BR": {
                  singular: 'Importando inscritos de "{NAME}"...'
                },
                "zh-CN": {
                  singular: "正在导入“{NAME}”中的注册者..."
                }
              }
            })
          }),
          id: _v0,
          duration: null
        }), _v0.apiError && _v16.close(_v0.uploadedCsv?.name || "");
      }, [_v0]), (0, _v1.jsx)(_v5.Box, {
        ref: _v18,
        children: _v13?.map(({
          status: _v0,
          fileName: _v1,
          uri: _v2,
          partialErrorCount: _v3,
          errorCode: _v4
        }) => _v0 && [_v11, _v12].includes(_v0) ? (0, _v1.jsx)(_v37, {
          status: _v0,
          fileName: _v1,
          partialErrorCount: _v3,
          errorCode: _v4 ?? void 0,
          uploadId: (0, _v26.getLastUuidFromUri)(_v2),
          handleRemove: _v36
        }, _v2) : null)
      });
    };
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v30,
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v30;
  let _v51 = (_v0, _v1, _v2, _v3 = _v50.IMPORT) => _v0 === _v50.ERROR_CATEGORY.AUTHENTICATION ? `Unable to connect to ${_v1}.` : _v3 === _v50.IMPORT ? `Unable to import data from "${_v2}". Download errors for details and try again when errors are fixed.` : `Unable to export data to "${_v2}". Download errors for details and try again when errors are fixed.`,
    _v52 = "settings",
    _v53 = ({
      uri: _v0,
      category: _v1,
      listName: _v2,
      providerName: _v3,
      type: _v4,
      syncId: _v5,
      providerId: _v6,
      fetchCRMStatus: _v7,
      eventStatus: _v8,
      listId: _v9,
      handleRemove: _v10,
      handleHide: _v11
    }) => {
      var _v12;
      let _v13,
        _v14,
        _v15,
        _v16,
        [_v17] = (0, _v48.usePutLeadCaptureResourceIdRegistrantsImport)(),
        {
          exportRegistrants: _v18
        } = (() => {
          let [_v0, {
              error: _v1,
              data: _v2,
              loading: _v3
            }] = (0, _v49.usePostLeadCaptureResourceIdRegistrantsExport)(),
            _v4 = (0, _v15.useConfigStore)(_v0 => _v0.entityType),
            _v5 = (0, _v15.useConfigStore)(_v0 => _v0.entityId);
          _v14.ENTITY_TO_PATH_MAP;
          let {
            error: _v6,
            data: _v7,
            loading: _v8
          } = (0, _v2.useMemo)(() => ({
            error: _v1,
            data: _v2,
            loading: _v3
          }), [_v1, _v2, _v3]);
          return {
            exportRegistrants: (_v0, _v1) => {
              _v5 && _v0({
                where: {
                  resourceId: _v5,
                  resourceType: _v14.ENTITY_TO_PATH_MAP[_v4]
                },
                variables: {
                  emailProviderList: [{
                    listId: `${_v1}`,
                    providerId: _v0
                  }]
                }
              });
            },
            exportError: _v6,
            exportData: _v7,
            exportLoading: _v8
          };
        })(),
        {
          entityId: _v19,
          entityType: _v20
        } = (0, _v15.useConfigStore)(),
        {
          sendAlertBpEvent: _v21
        } = (0, _v27.useAnalytics)(),
        {
          downloadUri: _v22
        } = (_v12 = _v5 ?? "", _v13 = (0, _v4.useViewer)(), _v14 = _v13?.jwt, _v15 = _v13?.locale, {
          downloadUri: (_v16 = _v13?.apiUrl) && _v14 && _v15 ? `//${_v16}/lead_capture/registrants/${_v4 === _v30.IMPORT ? "imports" : "exports"}/${_v12}/errors/export?jwt_token=${_v14}&format=csv&locale=${_v15}` : ""
        });
      (0, _v2.useEffect)(() => {
        _v21({
          eventName: _v29.BP_EVENT_NAME.NOTIFICATION_VIEW,
          integrationName: _v3,
          notificationCopy: _v51(_v1, _v3, (0, _v31.getFileName)(_v2), _v4),
          errorName: _v1,
          notificationName: _v4 === _v50.IMPORT ? _v29.BP_NOTIFICATION_NAME.CRM_REGISTRANTS_ERROR_IMPORT : _v29.BP_NOTIFICATION_NAME.CRM_REGISTRANTS_ERROR_EXPORT,
          element: null
        });
      }, []);
      let _v23 = (_v0, _v1) => {
        _v21({
          eventName: _v29.BP_EVENT_NAME.NOTIFICATION_ACTION,
          copy: _v1 === _v52 ? _v29.BP_COPY.MANAGE_INTEGRATIONS : _v29.BP_COPY.GET_TIPS,
          element: _v29.BP_ELEMENT.BUTTON,
          integrationName: _v3,
          notificationCopy: _v51(_v1, _v3, (0, _v31.getFileName)(_v2), _v4),
          errorName: _v1,
          notificationName: _v4 === _v50.IMPORT ? _v29.BP_NOTIFICATION_NAME.CRM_REGISTRANTS_ERROR_IMPORT : _v29.BP_NOTIFICATION_NAME.CRM_REGISTRANTS_ERROR_EXPORT,
          targetPath: _v0
        }), window.open(_v0, "_blank");
      };
      return _v8 === _v50.EVENT_STATUS.ENDED && _v4 === _v50.IMPORT ? (0, _v1.jsx)(_v34.ErrorAlertBanner, {
        message: (0, _v24.translate)({
          singular: 'Import of "{FILE_NAME}" was interrupted by event completion',
          replacements: {
            FILE_NAME: (0, _v31.getFileName)(_v2)
          },
          dictionary: {
            es: {
              singular: "La importación de “{FILE_NAME}” se interrumpió porque terminó el evento"
            },
            "de-DE": {
              singular: "Der Import von „ {FILE_NAME}„ wurde durch Abschluss des Events unterbrochen"
            },
            "fr-FR": {
              singular: "L’importation de « {FILE_NAME} » a été interrompue car l’événement a pris fin."
            },
            "ja-JP": {
              singular: "イベントの完了により「{FILE_NAME}」のインポートが中断されました"
            },
            "ko-KR": {
              singular: '이벤트가 종료되어 "{FILE_NAME}" 가져오기가 중단되었습니다.'
            },
            "pt-BR": {
              singular: 'A importação de "{FILE_NAME}" foi interrompida pela conclusão do evento'
            },
            "zh-CN": {
              singular: "“{FILE_NAME}”的导入因活动完成而中断"
            }
          }
        }),
        onClose: () => {
          _v21({
            eventName: _v29.BP_EVENT_NAME.NOTIFICATION_ACTION,
            copy: _v29.BP_COPY.X,
            element: _v29.BP_ELEMENT.BUTTON,
            integrationName: _v3,
            notificationCopy: _v51(_v1, _v3, (0, _v31.getFileName)(_v2), _v4),
            errorName: _v1,
            notificationName: _v4 === _v50.IMPORT ? _v29.BP_NOTIFICATION_NAME.CRM_REGISTRANTS_ERROR_IMPORT : _v29.BP_NOTIFICATION_NAME.CRM_REGISTRANTS_ERROR_EXPORT
          }), _v10?.(_v0, _v4);
        }
      }) : (0, _v1.jsx)(_v34.ErrorAlertBanner, {
        message: ((_v0, _v1, _v2, _v3 = _v50.IMPORT, _v4, _v5) => _v0 === _v50.ERROR_CATEGORY.AUTHENTICATION ? (0, _v24.translate)({
          singular: "Unable to connect to {PROVIDER_NAME}.",
          replacements: {
            PROVIDER_NAME: _v1
          },
          dictionary: {
            es: {
              singular: "No se puede conectar a {PROVIDER_NAME}."
            },
            "de-DE": {
              singular: "Die Verbindung zu {PROVIDER_NAME} kann nicht hergestellt werden."
            },
            "fr-FR": {
              singular: "Impossible de se connecter à {PROVIDER_NAME}."
            },
            "ja-JP": {
              singular: "{PROVIDER_NAME}に接続できません。"
            },
            "ko-KR": {
              singular: "{PROVIDER_NAME}에 연결할 수 없습니다."
            },
            "pt-BR": {
              singular: "Não foi possível vincular {PROVIDER_NAME}."
            },
            "zh-CN": {
              singular: "无法连接到 {PROVIDER_NAME}。"
            }
          }
        }) : _v3 === _v50.IMPORT ? (0, _v24.translate)({
          singular: 'Unable to import data from "{LIST_NAME}".{LINK}Download errors{/LINK} for details and try again when errors are fixed.',
          replacements: {
            LIST_NAME: _v2,
            LINK: _v0 => (0, _v1.jsx)(_v33.Link, {
              href: _v4,
              download: `${_v2}`,
              fontSize: "body-md",
              variant: "inline-primary",
              onClick: _v5,
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "No se pudieron importar los datos de “{LIST_NAME}”.{LINK}Descargue los errores{/LINK} para obtener más detalles e inténtelo de nuevo cuando se solucionen los errores."
            },
            "de-DE": {
              singular: "Daten können nicht aus „ {LIST_NAME} “ importiert werden.{LINK}Herunterladen Fehler{/LINK} für Details und versuchen Sie es erneut, wenn die Fehler behoben werden."
            },
            "fr-FR": {
              singular: "Impossible d’importer des données à partir de « {LIST_NAME} ». {LINK}Téléchargez les erreurs{/LINK} pour en savoir plus et réessayez lorsqu’elles seront corrigées."
            },
            "ja-JP": {
              singular: "データを「{LIST_NAME}」からインポートできません。詳細については{LINK}ダウンロードエラー{/LINK}を参照し、エラーが修正されたらもう一度お試しください。"
            },
            "ko-KR": {
              singular: '"{LIST_NAME}"에서 데이터를 가져올 수 없습니다. 자세한 내용을 보려면 {LINK}오류를 다운로드{/LINK}하고 오류를 수정한 후 다시 시도하세요.'
            },
            "pt-BR": {
              singular: 'Não foi possível importar dados de "{LIST_NAME}".{LINK}Baixe os erros{/LINK} para saber os detalhes e tente novamente quando os erros forem corrigidos.'
            },
            "zh-CN": {
              singular: "无法从“{LIST_NAME}”导入数据。{LINK}下载错误{/LINK}以了解详情，并在错误修复后重试。"
            }
          }
        }) : (0, _v24.translate)({
          singular: 'Unable to export data to "{LIST_NAME}". {LINK}Download errors{/LINK} for details and try again when errors are fixed.',
          replacements: {
            LIST_NAME: _v2,
            LINK: _v0 => (0, _v1.jsx)(_v33.Link, {
              href: _v4,
              download: `${_v2}`,
              variant: "inline-primary",
              fontSize: "body-md",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "No se pudieron exportar los datos a “{LIST_NAME}”. {LINK}Descargue los errores{/LINK} para obtener más detalles e inténtelo de nuevo cuando se solucionen los errores."
            },
            "de-DE": {
              singular: "Daten können nicht nach „ {LIST_NAME} “ exportiert werden. {LINK}Laden Sie die Fehler{/LINK} herunter, um weitere Informationen zu erhalten, und versuchen Sie es erneut, wenn die Fehler behoben sind."
            },
            "fr-FR": {
              singular: "Impossible d’exporter les données vers « {LIST_NAME} ». {LINK}Téléchargez les erreurs{/LINK} pour plus de détails et réessayez lorsque les erreurs seront corrigées."
            },
            "ja-JP": {
              singular: "データを「{LIST_NAME}」にエクスポートできません。詳細については{LINK}ダウンロードエラー{/LINK}を参照し、エラーが修正されたらもう一度お試しください。"
            },
            "ko-KR": {
              singular: '"{LIST_NAME}"(으)로 데이터를 내보낼 수 없습니다. 자세한 내용을 보려면 {LINK}오류를 다운로드{/LINK}하고 오류를 수정한 후 다시 시도하세요.'
            },
            "pt-BR": {
              singular: 'Não foi possível exportar dados para "{LIST_NAME}". {LINK}Baixe os erros{/LINK} para saber os detalhes e tente novamente quando os erros forem corrigidos.'
            },
            "zh-CN": {
              singular: "无法将数据导出到“{LIST_NAME}”。{LINK}下载错误{/LINK}以了解详情，并在错误修复后重试。"
            }
          }
        }))(_v1, _v3, (0, _v31.getFileName)(_v2), _v4, _v22, () => {
          _v21({
            eventName: _v29.BP_EVENT_NAME.NOTIFICATION_ACTION,
            copy: _v29.BP_COPY.DOWNLOAD_ERRORS,
            element: _v29.BP_ELEMENT.BUTTON,
            integrationName: _v3,
            notificationCopy: _v51(_v1, _v3, (0, _v31.getFileName)(_v2), _v4),
            errorName: _v1,
            notificationName: _v4 === _v50.IMPORT ? _v29.BP_NOTIFICATION_NAME.CRM_REGISTRANTS_ERROR_IMPORT : _v29.BP_NOTIFICATION_NAME.CRM_REGISTRANTS_ERROR_EXPORT
          });
        }),
        buttonText: _v1 === _v50.ERROR_CATEGORY.AUTHENTICATION ? _v16.default.ManageIntegrations : _v16.default.TryAgain,
        secondaryMsg: _v16.default.GetTroubleshootingTips,
        secondaryMsgClick: () => _v23(_v14.GET_TROUBLESHOOTING_TIPS, "troubleshoot"),
        buttonIcon: _v1 === _v50.ERROR_CATEGORY.AUTHENTICATION ? (0, _v1.jsx)(_v47.PopOut, {}) : void 0,
        onButtonClick: _v1 === _v50.ERROR_CATEGORY.AUTHENTICATION ? () => _v23(_v50.MARKETING_PAGE_INTEGRATION, _v52) : () => {
          _v21({
            eventName: _v29.BP_EVENT_NAME.NOTIFICATION_ACTION,
            copy: _v29.BP_COPY.TRY_AGAIN,
            element: _v29.BP_ELEMENT.BUTTON,
            integrationName: _v3,
            notificationCopy: _v51(_v1, _v3, (0, _v31.getFileName)(_v2), _v4),
            errorName: _v1,
            notificationName: _v4 === _v50.IMPORT ? _v29.BP_NOTIFICATION_NAME.CRM_REGISTRANTS_ERROR_IMPORT : _v29.BP_NOTIFICATION_NAME.CRM_REGISTRANTS_ERROR_EXPORT
          }), _v4 === _v50.IMPORT ? _v6 && _v9 && _v19 && _v17({
            where: {
              resourceType: _v14.ENTITY_TO_PATH_MAP[_v20],
              resourceId: _v19
            },
            variables: {
              registrantSource: _v50.CRM_REGISTRANT_SOURCE,
              emailProviderList: [{
                listId: _v9,
                providerId: _v6,
                isActive: !0
              }]
            }
          }) : _v6 && _v9 && _v18(_v6, _v9), _v7?.(), _v11?.(_v0);
        }
      });
    },
    _v54 = ({
      importRegistrantState: _v0,
      dispatch: _v1,
      fetchAttendeeData: _v2,
      fetchCRMStatus: _v3,
      fetchCRMInfo: _v4
    }) => {
      let {
          PROCESSING: _v5,
          SUCCESS: _v6,
          PARTIAL_ERROR: _v7,
          ERROR: _v8,
          PENDING: _v9
        } = _v46.CRM_CSV_STATUS,
        {
          CRM: _v10
        } = _v46.IMPORT_TYPE,
        _v11 = (0, _v10.useToast)(),
        {
          importCRMStatus: _v12,
          processingCRM: _v13,
          loadingCRM: _v14
        } = _v0,
        [_v15, _v16] = (0, _v2.useState)(!1),
        [_v17, _v18] = (0, _v2.useState)(!1),
        _v19 = (0, _v2.useRef)(_v12),
        {
          schedule: _v20,
          status: _v21
        } = (0, _v43.useEntityStore)(),
        {
          entityId: _v22,
          entityType: _v23
        } = (0, _v15.useConfigStore)(),
        [_v24, {
          loading: _v25,
          data: _v26,
          error: _v27
        }] = (0, _v41.usePatchLeadCaptureResourceIdRegistrantStatuses)(),
        [_v28, _v29] = (0, _v25.useIsVisible)({
          threshold: 1
        }),
        {
          sendAlertBpEvent: _v30
        } = (0, _v27.useAnalytics)(),
        _v31 = (_v0, _v1 = _v46.SYNC_TYPE.IMPORT) => {
          _v19.current = _v12;
          let _v2 = _v12?.filter(_v0 => _v0.uri !== _v0) || [];
          _v1({
            type: _v28.ACTION_TYPE.SET_CRM_STATUS,
            payload: _v2
          }), _v22 && _v23 && _v24({
            where: {
              resourceType: _v14.ENTITY_TO_PATH_MAP[_v23],
              resourceId: _v22
            },
            select: _v42.CRM_IMPORT_FIELDS,
            variables: {
              registrantsStatus: [{
                uuid: (0, _v26.getLastUuidFromUri)(_v0),
                type: _v1
              }]
            }
          });
        },
        _v32 = _v0 => {
          let _v1 = _v12?.filter(_v0 => _v0.uri !== _v0) || [];
          _v1({
            type: _v28.ACTION_TYPE.SET_CRM_STATUS,
            payload: _v1
          });
        };
      (0, _v45.usePoll)(_v3, _v15 && _v29, {
        interval: 0
      }), (0, _v45.usePoll)(_v3, _v17 && _v29, {
        interval: 0
      }), (0, _v45.usePoll)(_v3, _v29, {
        interval: 0
      }), (0, _v2.useEffect)(() => {
        if (_v20?.startTime) {
          let _v0 = new Date(_v20?.startTime).getTime() - new Date().getTime();
          0 > Math.abs(_v0) ? _v18(!0) : _v0 > 0 ? (_v18(!1), setTimeout(() => _v18(!0), _v0 - 0)) : _v18(!1), -_v0 > 0 || setTimeout(() => _v18(!1), _v0 + 0);
        }
      }, [_v20?.startTime]), (0, _v2.useEffect)(() => {
        !_v25 && (_v27 && !(0, _v44.default)(_v19.current, _v12) ? (_v11({
          title: _v16.default.ChangesCouldNotBeSaved,
          status: "error"
        }), _v1({
          type: _v28.ACTION_TYPE.SET_CRM_STATUS,
          payload: _v19.current
        })) : _v26 && (_v19.current = _v12));
      }, [_v25, _v27, _v26, _v1, _v12]), (0, _v2.useEffect)(() => {
        let _v0 = _v12.filter(_v0 => _v0.type === _v46.IMPORT);
        if (_v0.length > 0) {
          let _v0 = !1;
          for (let _v0 of _v0) {
            let {
              status: _v0
            } = _v0;
            if ([_v9, _v5].includes(_v0 ?? "")) {
              _v0 = !0;
              break;
            }
            _v0 === _v8 && (_v0 = !1), (_v0 === _v6 || _v0 === _v7) && _v13 && !_v14 && (setTimeout(() => {
              _v2(1, !0, !0, !0);
            }, 0), _v4(), _v0 = !1);
          }
          _v16(_v0), _v1({
            type: _v28.ACTION_TYPE.PROCESSING_CRM_DATA,
            payload: _v14 ? _v13 : _v0
          });
        }
      }, [_v12, _v1, _v14]);
      let _v33 = (_v0, _v1, _v2, _v3, _v4, _v5, _v6 = !0) => {
        _v6 && _v30({
          eventName: _v29.BP_EVENT_NAME.NOTIFICATION_ACTION,
          copy: _v29.BP_COPY.X,
          element: _v29.BP_ELEMENT.BUTTON,
          targetPath: _v0,
          integrationName: _v4,
          notificationName: _v29.BP_NOTIFICATION_NAME.CRM_REGISTRANTS_SUCCESS,
          notificationCopy: _v5
        }), _v11.isActive(_v1) && (_v31(_v0, _v2), _v11.close(_v1));
      };
      return (0, _v2.useEffect)(() => {
        _v29 && _v12?.filter(_v0 => _v46.ProvidersWithCRMExport.includes(_v0.emailProviderList.provider.id) || _v0.type === _v46.SYNC_TYPE.IMPORT).forEach(({
          status: _v0,
          emailProviderList: _v1,
          uri: _v2,
          pendingUserAction: _v3,
          type: _v4
        }) => {
          let _v5 = _v1.list?.name,
            _v6 = _v1.provider.name;
          if (_v3 && _v0 && _v5?.length) {
            let _v0;
            _v0 = `processing_${_v4}_${_v5}`, [_v7, _v8, _v6].includes(_v0) && _v11.isActive(_v0) && _v11.close(_v0), ((_v0, _v1, _v2, _v3, _v4) => {
              let _v5 = `success_${_v1}_${_v2}`,
                _v6 = `processing_${_v1}_${_v2}`;
              if (_v0 !== _v6 || _v11.isActive(_v5)) {
                let _v0;
                [_v9, _v5].includes(_v0) && !_v11.isActive(_v6) && (_v0 = _v1 === _v46.SYNC_TYPE.EXPORT ? (0, _v24.translate)({
                  singular: 'Exporting registrants to "{NAME}"...',
                  replacements: {
                    NAME: _v2
                  },
                  dictionary: {
                    es: {
                      singular: "Exportando inscritos a “{NAME}”..."
                    },
                    "de-DE": {
                      singular: 'Registranten werden nach "{NAME}" exportiert...'
                    },
                    "fr-FR": {
                      singular: "Exportation des participants vers « {NAME} »…"
                    },
                    "ja-JP": {
                      singular: "「{NAME}」に登録者をエクスポートしています..."
                    },
                    "ko-KR": {
                      singular: '"{NAME}"(으)로 등록자를 내보내는 중...'
                    },
                    "pt-BR": {
                      singular: 'Exportando inscritos para "{NAME}"...'
                    },
                    "zh-CN": {
                      singular: "正在将注册者导出到 “{NAME}”..."
                    }
                  }
                }) : (0, _v24.translate)({
                  singular: 'Syncing registrants from "{NAME}"...',
                  replacements: {
                    NAME: _v2
                  },
                  dictionary: {
                    es: {
                      singular: 'Sincronizando inscritos de "{NAME}"...'
                    },
                    "de-DE": {
                      singular: 'Registranten aus "{NAME}" werden synchronisiert...'
                    },
                    "fr-FR": {
                      singular: "Synchronisation des participants depuis « {NAME} »..."
                    },
                    "ja-JP": {
                      singular: "「{NAME}」からの登録者を同期しています..."
                    },
                    "ko-KR": {
                      singular: '"{NAME}"의 등록자를 동기화하는 중입니다...'
                    },
                    "pt-BR": {
                      singular: 'Sincronizando inscritos de "{NAME}"...'
                    },
                    "zh-CN": {
                      singular: "正在同步“{NAME}”中的注册者..."
                    }
                  }
                }), _v30({
                  eventName: _v29.BP_EVENT_NAME.NOTIFICATION_VIEW,
                  element: null,
                  integrationName: _v4,
                  notificationName: _v29.BP_NOTIFICATION_NAME.CRM_REGISTRANTS_PROGRESS,
                  notificationCopy: (0, _v29.buildNotificationCopy)(_v10, _v1, _v5, _v2)
                }), _v11({
                  render: () => (0, _v1.jsx)(_v32.ToastMessage, {
                    status: "info",
                    title: _v0
                  }),
                  id: _v6,
                  duration: null
                }));
              } else {
                let _v0;
                setTimeout(() => {
                  _v11.isActive(_v5) && _v33(_v3, _v5, _v1, _v2, _v4, (0, _v29.buildNotificationCopy)(_v10, _v1, _v6, _v2), !1);
                }, 0), _v0 = _v1 === _v46.SYNC_TYPE.EXPORT ? (0, _v24.translate)({
                  singular: 'Registrants exported to "{NAME}"',
                  replacements: {
                    NAME: _v2
                  },
                  dictionary: {
                    es: {
                      singular: "Inscritos exportados a “{NAME}”"
                    },
                    "de-DE": {
                      singular: "Registranten wurden nach „{NAME}“ exportiert"
                    },
                    "fr-FR": {
                      singular: "Participants exportés vers « {NAME} »"
                    },
                    "ja-JP": {
                      singular: "「{NAME}」にエクスポートされた登録者"
                    },
                    "ko-KR": {
                      singular: '"{NAME}"(으)로 등록자를 내보냈습니다'
                    },
                    "pt-BR": {
                      singular: 'Inscritos exportados para "{NAME}"'
                    },
                    "zh-CN": {
                      singular: "已导出注册者至“{NAME}”"
                    }
                  }
                }) : (0, _v24.translate)({
                  singular: 'Registrants synced from "{NAME}"',
                  replacements: {
                    NAME: _v2
                  },
                  dictionary: {
                    es: {
                      singular: 'Inscritos sincronizados de "{NAME}"'
                    },
                    "de-DE": {
                      singular: 'Registranten wurden von "{NAME}" synchronisiert'
                    },
                    "fr-FR": {
                      singular: "Participants synchronisés depuis « {NAME} »"
                    },
                    "ja-JP": {
                      singular: "「{NAME}」から同期された登録者"
                    },
                    "ko-KR": {
                      singular: '"{NAME}"에서 동기화된 등록자'
                    },
                    "pt-BR": {
                      singular: 'Inscritos sincronizados de "{NAME}"'
                    },
                    "zh-CN": {
                      singular: "已同步“{NAME}”中的注册者..."
                    }
                  }
                }), _v30({
                  eventName: _v29.BP_EVENT_NAME.NOTIFICATION_VIEW,
                  integrationName: _v4,
                  notificationName: _v29.BP_NOTIFICATION_NAME.CRM_REGISTRANTS_SUCCESS,
                  element: null,
                  notificationCopy: (0, _v29.buildNotificationCopy)(_v10, _v1, _v6, _v2)
                }), _v11({
                  render: () => (0, _v1.jsx)(_v32.ToastMessage, {
                    status: "success",
                    title: _v0,
                    onCloseComplete: () => _v33(_v3, _v5, _v1, _v2, _v4, `Registrants ${_v1 === _v46.SYNC_TYPE.EXPORT ? "exported" : "synced"} to "${_v2}"`),
                    isClosable: !0
                  }),
                  id: _v5,
                  duration: null
                });
              }
            })(_v0, _v4, _v5, _v2, _v6);
          }
        });
      }, [_v12, _v29]), (0, _v1.jsx)(_v5.Box, {
        ref: _v28,
        children: (0, _v31.customCrmSyncSort)(_v12).map(({
          emailProviderList: _v0,
          type: _v1,
          uri: _v2,
          pendingUserAction: _v3,
          status: _v4,
          errorDetails: _v5
        }) => _v3 && [_v7, _v8].includes(_v4 || "") && (_v5?.category === _v46.ERROR_CATEGORY.AUTHENTICATION || !!_v0?.list?.name) && (0, _v1.jsx)(_v53, {
          uri: _v2,
          category: _v5?.category,
          syncId: (0, _v26.getLastUuidFromUri)(_v2),
          type: _v1,
          listName: _v0?.list?.name,
          providerName: _v0?.provider.name,
          handleHide: _v32,
          providerId: _v0?.provider.id,
          fetchCRMStatus: _v3,
          eventStatus: _v23 === _v14.ENTITY_TYPE.EVENT && _v21 ? _v21 : void 0,
          handleRemove: _v31,
          listId: _v0?.list?.id
        }, _v2))
      });
    };
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  let _v60 = (_v0, _v1, _v2) => `//${_v1}/lead_capture${_v0}/registrants?sort=registration_date&direction=asc&page=${_v2}&per_page=${_v30.ATTENDEES_PAGE_SIZE}&fields=${_v42.ATTENDEES_API_FIELDS.join(",")}`,
    _v61 = async (_v0, _v1, _v2, _v3, _v4, _v5) => {
      let _v6 = _v3(_v2),
        _v7 = _v6 && _v6.total > 0;
      if (!_v5 && _v7) return Promise.resolve(_v6);
      {
        let _v0 = await fetch(_v2, {
          method: "GET",
          credentials: "omit",
          headers: {
            Authorization: `jwt ${_v0}`,
            Accept: "application/vnd.vimeo.*;version=3.4.2",
            "Content-Type": "application/json",
            "Accept-Language": _v1
          }
        });
        return _v0.ok ? _v0.json().then(_v0 => {
          let _v1 = (0, _v59.deepCamelCase)(_v0);
          return _v0?.data?.length && _v0.data.forEach((_v0, _v1) => {
            _v0?.data && _v1?.data[_v1] && (_v1.data[_v1].data = _v0.data);
          }), _v4(_v2, _v1), _v1;
        }) : Promise.reject(_v0);
      }
    },
    _v62 = (_v0, _v1) => _v1?.isBlocked ? (0, _v1.jsx)(_v5.Box, {
      as: "span",
      color: "red.600",
      textDecorationLine: "line-through",
      children: _v0
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: _v0
    }),
    _v63 = {
      fontSize: (0, _v9.rem)(16),
      fontWeight: 500,
      lineHeight: (0, _v9.rem)(20),
      letterSpacing: 0
    },
    _v64 = [{
      name: "id",
      apiName: "id",
      isVisible: !1
    }, {
      name: "firstName",
      apiName: "firstName",
      isVisible: !0,
      minWidth: "10rem",
      style: _v63,
      displayFunc: _v62
    }, {
      name: "lastName",
      apiName: "lastName",
      isVisible: !0,
      minWidth: "10rem",
      style: _v63,
      displayFunc: _v62
    }, {
      name: "email",
      apiName: "email",
      isVisible: !0,
      minWidth: "13rem"
    }, {
      name: "registrationDate",
      apiName: "createdOn",
      isVisible: !0,
      minWidth: "13rem",
      displayFunc: (_v0, _v1, _v2) => {
        let _v3 = _v2?.locale;
        return (0, _v1.jsx)(_v1.Fragment, {
          children: new Intl.DateTimeFormat(_v3 || "en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: !0
          }).format(new Date(_v0))
        });
      }
    }, {
      name: "hasAttended",
      apiName: "hasAttended",
      isVisible: !0,
      minWidth: "7rem",
      align: _v30.ALIGN.CENTER,
      displayFunc: _v0 => _v30.ATTENDEES_TYPES.B === _v0 ? (0, _v1.jsx)(_v55.Tooltip, {
        label: _v16.default.Blocked,
        placement: "left",
        fontSize: 14,
        children: (0, _v1.jsx)("div", {
          children: (0, _v1.jsx)(_v58.MinusCircle, {
            color: "red.500"
          })
        })
      }) : _v30.ATTENDEES_TYPES.Y === _v0 ? (0, _v1.jsx)(_v55.Tooltip, {
        label: _v16.default.Attended,
        placement: "left",
        fontSize: 14,
        children: (0, _v1.jsx)("div", {
          children: (0, _v1.jsx)(_v56.CircleCheck, {
            color: "blue.400"
          })
        })
      }) : (0, _v1.jsx)(_v55.Tooltip, {
        label: _v16.default.DidNotAttend,
        placement: "left",
        fontSize: 14,
        children: (0, _v1.jsx)("div", {
          children: (0, _v1.jsx)(_v57.CloseXCircle, {
            color: "text-secondary"
          })
        })
      })
    }, {
      name: "views",
      apiName: "views",
      isVisible: !0,
      minWidth: "7rem",
      align: _v30.ALIGN.CENTER,
      displayFunc: _v0 => (0, _v1.jsxs)(_v1.Fragment, {
        children: [" ", _v0, " "]
      })
    }, {
      name: "viewPercentage",
      apiName: "analytics.viewPercentage",
      isVisible: !0,
      minWidth: "10rem",
      align: _v30.ALIGN.CENTER,
      displayFunc: _v0 => (0, _v1.jsxs)(_v1.Fragment, {
        children: [" ", null !== _v0 ? `${_v0}%` : "—", " "]
      })
    }, {
      name: "menu",
      apiName: "menu",
      isVisible: !0,
      minWidth: "5rem",
      align: _v30.ALIGN.CENTER
    }];
  var _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  let _v67 = ({
    isCsvProcessing: _v0,
    payloadUri: _v1,
    setDeleteRecordUri: _v2
  }) => {
    let {
        status: _v3
      } = (0, _v43.useEntityStore)(),
      {
        canGoLive: _v4
      } = (0, _v66.useTeamStore)(),
      _v5 = !_v4 || _v0 || _v3 === _v30.EVENT_STATUS.STARTED || _v3 === _v30.EVENT_STATUS.ENDED;
    return (0, _v1.jsx)(_v55.Tooltip, {
      label: _v16.default.RemoveRegistrant,
      children: (0, _v1.jsx)(_v65.IconButton, {
        "aria-label": _v16.default.RemoveRegistrant,
        variant: "tertiary",
        icon: (0, _v1.jsx)(_v58.MinusCircle, {}),
        isDisabled: _v5,
        onClick: () => !_v5 && _v2(_v1)
      })
    });
  };
  var _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0);
  let _v78 = (0, _v76.bokeh)(_v5.Box, {
      baseStyle: {
        width: "100%",
        overflowY: "scroll",
        flex: 1
      }
    }),
    _v79 = (0, _v76.bokeh)(_v5.Box, {
      baseStyle: {
        borderSpacing: 0,
        tableLayout: "fixed",
        width: "100%",
        borderRadius: (0, _v9.rem)(6),
        borderCollapse: "separate",
        "tbody td, thead th": {
          padding: (0, _v9.rem)(8),
          fontSize: (0, _v9.rem)(14),
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: (0, _v9.rem)(20),
          textAlign: "left"
        }
      }
    }),
    _v80 = (0, _v76.bokeh)(_v5.Box, {
      baseStyle: {
        cursor: "pointer",
        height: (0, _v9.rem)(60)
      }
    }),
    _v81 = (0, _v76.bokeh)(_v5.Box, {
      baseStyle: {
        "&:first-child": {
          position: "sticky",
          zIndex: 1,
          left: 0,
          label: {
            fontWeight: "normal"
          }
        }
      }
    }),
    _v82 = (0, _v76.bokeh)(_v77.Text, {
      baseStyle: {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden"
      }
    }),
    _v83 = (0, _v76.bokeh)(_v5.Box, {
      baseStyle: {
        zIndex: 2,
        position: "sticky",
        height: (0, _v9.rem)(60),
        left: 0,
        top: 0,
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderColor: "stroke",
        bgColor: "background",
        "&:first-child": {
          position: "sticky",
          left: 0,
          zIndex: 3
        }
      }
    });
  var _v84 = _v0.i(0),
    _v85 = _v0.i(0);
  let _v86 = {
      mkcCode: "ent-upgrade-webinar-advanced-analytics"
    },
    _v87 = ({
      fields: _v0
    }) => {
      let {
          status: _v1
        } = (0, _v43.useEntityStore)(),
        _v2 = (0, _v15.useConfigStore)(_v0 => _v0.entityType),
        _v3 = _v2 === _v14.ENTITY_TYPE.VIDEO,
        {
          hasEnterprise: _v4
        } = (0, _v39.useEventCapability)(),
        {
          sendUpsellEvent: _v5
        } = (0, _v12.useUpsellAnalytics)(),
        _v6 = (0, _v11.useIsBokeh)(),
        _v7 = () => {
          _v5({
            pageName: _v2 === _v14.ENTITY_TYPE.EVENT ? _v29.BP_PAGE_NAME.EVENT_REGISTRATION_PAGE : _v29.BP_PAGE_NAME.VIDEO_REGISTRATION_PAGE,
            target: _v29.BP_TARGET.UPGRADE_PAGE,
            targetPath: window.location.pathname,
            upsellName: "watch_time_analytics",
            interfaceType: "page",
            product: _v2 === _v14.ENTITY_TYPE.EVENT ? "events" : "gates",
            feature: "watch_time_analytics",
            location: _v29.BP_LOCATION.TOP_ACTION_BAR,
            entityType: _v2,
            copy: _v29.BP_COPY.WATCH_TIME,
            flow: null,
            element: "icon"
          });
        };
      return (0, _v1.jsx)("thead", {
        children: (0, _v1.jsx)("tr", {
          children: _v0.filter(_v0 => !!_v0.isVisible && !_v30.HIDDEN_COLUMNS_FOR_ENTITY[_v2].includes(_v0.name)).map((_v0, _v1) => {
            let _v2 = _v0.align;
            return "viewPercentage" === _v0.name && _v1 !== _v30.EVENT_STATUS.ENDED && (_v2 = _v30.ALIGN.CENTER), (0, _v1.jsx)(_v83, {
              borderStyle: _v6 ? "none" : "solid",
              as: "th",
              width: _v0.minWidth || (0, _v9.rem)(36),
              children: (0, _v1.jsxs)(_v7.Flex, {
                justifyContent: _v2 || _v30.ALIGN.LEFT,
                alignItems: "center",
                children: [(0, _v1.jsx)(_v77.Text, {
                  variant: "body-md",
                  children: _v16.DISPLAY_MAP[_v0.name] ?? _v0.name
                }), _v3 && _v0.name === _v30.ATTENDEE_TABLE_FIELDS.VIEW_PERCENTAGE && (0, _v1.jsx)(_v55.Tooltip, {
                  maxWidth: (0, _v9.rem)(280),
                  label: _v16.default.VideoWatchTime,
                  children: (0, _v1.jsx)(_v5.Box, {
                    children: (0, _v1.jsx)(_v84.InfoCircle, {
                      ml: "x"
                    })
                  })
                }), !_v4 && _v0.name === _v30.ATTENDEE_TABLE_FIELDS.VIEW_PERCENTAGE && (0, _v1.jsx)(_v5.Box, {
                  pl: (0, _v9.rem)(8),
                  children: (0, _v1.jsx)(_v85.UpsellBadge, {
                    enterpriseFeatureOverride: _v2 === _v14.ENTITY_TYPE.EVENT ? _v16.default.AdvancedWebinarAnalytics : void 0,
                    modalConfig: _v2 === _v14.ENTITY_TYPE.EVENT ? _v86 : void 0,
                    onClick: _v7
                  })
                })]
              })
            }, `table-head-cell-${_v1}`);
          })
        })
      });
    };
  var _v88 = _v0.i(0);
  let _v89 = ({
      isLoading: _v0,
      noData: _v1
    }) => {
      let {
          status: _v2,
          entityLink: _v3
        } = (0, _v43.useEntityStore)(),
        [_v4, _v5] = (0, _v2.useState)(!1),
        _v6 = (0, _v2.useRef)(null),
        _v7 = (0, _v2.useRef)(null),
        {
          hasUpsell: _v8,
          hasEnterprise: _v9
        } = (0, _v39.useEventCapability)(),
        _v10 = (0, _v10.useToast)(),
        {
          sendUpsellEvent: _v11
        } = (0, _v12.useUpsellAnalytics)(),
        [_v12, _v13] = (0, _v25.useIsVisible)({
          threshold: 1
        }),
        _v14 = (0, _v15.useConfigStore)(_v0 => _v0.entityType),
        _v15 = _v14 === _v14.ENTITY_TYPE.VIDEO,
        _v16 = _v14 === _v14.ENTITY_TYPE.EVENT,
        _v17 = _v16 ? `${window.location.origin}${_v3}` : _v3,
        {
          isOwner: _v18
        } = (0, _v66.useTeamStore)(),
        {
          sendShareLinkBpEvent: _v19
        } = (0, _v27.useAnalytics)(),
        {
          trackLiveStreamRegistrantsActionClicked: _v20
        } = (0, _v74.useLiveStreamBroadcasterTracking)();
      return (0, _v75.default)([_v6, _v7], () => {
        _v4 && _v5(!1);
      }, null, [_v4]), (0, _v2.useEffect)(() => {
        _v8 && [_v14.ENTITY_TYPE.VIDEO, _v14.ENTITY_TYPE.SHOWCASE].includes(_v14) && _v13 && _v11({
          eventName: _v29.BP_EVENT_NAME.UPSELL_TRIGGER_IMPRESSION,
          pageName: _v15 ? _v29.BP_PAGE_NAME.SINGLE_VIDEO_VIEW_MANAGE : _v29.BP_PAGE_NAME.SHOWCASE_MANAGER,
          target: null,
          targetPath: null,
          upsellName: _v15 ? _v29.UPSELL_NAME.ADD_VIDEO_REG_CAPABILITY : _v29.UPSELL_NAME.ADD_SHOWCASE_REG_CAPABILITY,
          interfaceType: "page",
          product: "gates",
          feature: "registration",
          location: _v29.BP_LOCATION.CONTENT_AREA,
          entityType: _v14,
          copy: _v29.BP_COPY.UPGRADE,
          flow: _v29.BP_FLOW.REGISTRANTS_TAB,
          element: "button"
        });
      }, [_v13]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v79, {
          as: "table",
          children: [(0, _v1.jsx)(_v87, {
            fields: _v64
          }), _v0 && (0, _v1.jsx)(_v5.Box, {
            as: "tbody",
            overflowY: "scroll",
            children: Array.from(Array(_v30.ATTENDEES_PAGE_SIZE)).map((_v0, _v1) => (0, _v1.jsx)(_v80, {
              as: "tr",
              children: _v64.filter(_v0 => _v0.isVisible).map((_v0, _v1) => _v30.HIDDEN_COLUMNS_FOR_ENTITY[_v14].includes(_v0.name) ? null : (0, _v1.jsx)(_v81, {
                as: "td",
                w: _v0.minWidth,
                children: (0, _v1.jsx)(_v7.Flex, {
                  justifyContent: _v0.align,
                  children: (0, _v1.jsx)(_v5.Box, {
                    sx: (0, _v88.PlaceholderStyles)()
                  })
                })
              }, _v1))
            }, _v1))
          })]
        }), _v1 && !_v0 && (0, _v1.jsx)(_v7.Flex, {
          flexDir: "column",
          minH: "65vh",
          children: (0, _v1.jsx)(_v7.Flex, {
            alignItems: "flex-start",
            mt: (0, _v9.rem)(100),
            justifyContent: "center",
            flex: 1,
            children: _v8 ? (0, _v1.jsx)(_v7.Flex, {
              flexDir: "column",
              ref: _v12,
              alignItems: "center",
              w: (0, _v9.rem)(350),
              children: (0, _v1.jsx)(_v73.Upsell, {
                hasEnterprise: _v9 ?? !1,
                isEntityOwner: _v18,
                showExploreButton: !1,
                entityType: _v14,
                onUpsellClick: () => {
                  _v11({
                    pageName: _v15 ? _v29.BP_PAGE_NAME.SINGLE_VIDEO_VIEW_MANAGE : _v29.BP_PAGE_NAME.SHOWCASE_MANAGER,
                    target: _v29.BP_TARGET.UPGRADE_PAGE,
                    targetPath: window.location.pathname,
                    upsellName: _v15 ? _v29.UPSELL_NAME.ADD_VIDEO_REG_CAPABILITY : _v29.UPSELL_NAME.ADD_SHOWCASE_REG_CAPABILITY,
                    interfaceType: "page",
                    product: "gates",
                    feature: "registration",
                    location: _v29.BP_LOCATION.CONTENT_AREA,
                    entityType: _v14,
                    copy: _v29.BP_COPY.UPGRADE,
                    flow: _v29.BP_FLOW.REGISTRANTS_TAB,
                    element: "button"
                  });
                }
              })
            }) : (0, _v1.jsxs)(_v7.Flex, {
              flexDir: "column",
              alignItems: "center",
              children: [(0, _v1.jsx)(_v72.Registration, {
                boxSize: (0, _v9.rem)(54),
                mb: 3
              }), (0, _v1.jsx)(_v70.Paragraph, {
                size: "md",
                textAlign: "center",
                w: (0, _v9.rem)(280),
                color: "text-secondary",
                children: _v16.default.TableEmptyState[_v14]
              }), (_v2 !== _v30.EVENT_STATUS.ENDED || _v15) && (0, _v1.jsx)(_v69.Button, {
                mt: (0, _v9.rem)(12),
                variant: "primary",
                leftIcon: (0, _v1.jsx)(_v71.Link, {}),
                onClick: () => {
                  (0, _v68.default)(_v17 || ""), _v10({
                    title: _v16.default.LinkCopied,
                    status: "info"
                  }), _v19({
                    copy: _v29.BP_COPY.SHARE[_v14],
                    version: 8
                  }), _v16 && _v20({
                    liveStreamRegistrantsAction: "share_event"
                  });
                },
                children: _v16.default.ShareEntity[_v14]
              })]
            })
          })
        })]
      });
    },
    _v90 = ({
      fields: _v0,
      payload: _v1,
      onRowClick: _v2,
      isLoading: _v3,
      isCsvProcessing: _v4,
      setDeleteRecordUri: _v5
    }) => {
      let {
          status: _v6
        } = (0, _v43.useEntityStore)(),
        _v7 = _v0.filter(_v0 => _v0.isVisible),
        _v8 = (0, _v2.useRef)(null),
        _v9 = (0, _v15.useConfigStore)(_v0 => _v0.entityType),
        _v10 = (0, _v2.useRef)(null),
        _v11 = (0, _v4.useViewer)();
      return ((0, _v2.useEffect)(() => {
        _v10.current?.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, [_v3]), !_v1.length || _v3) ? (0, _v1.jsx)(_v78, {
        children: (0, _v1.jsx)(_v89, {
          isLoading: _v3,
          noData: !0
        })
      }) : (0, _v1.jsx)(_v78, {
        ref: _v10,
        children: (0, _v1.jsxs)(_v79, {
          as: "table",
          children: [(0, _v1.jsx)(_v87, {
            fields: _v0
          }), (0, _v1.jsx)(_v5.Box, {
            overflowY: "scroll",
            ref: _v8,
            as: "tbody",
            children: _v1.filter(_v0 => !!_v0.uri).map(_v0 => (0, _v1.jsx)(_v80, {
              tabIndex: 0,
              as: "tr",
              onKeyDown: _v0 => {
                _v0.key === _v30.KEY_CODES.ENTER && _v2(_v0);
              },
              role: "group",
              children: _v7.filter(_v0 => !!_v0.isVisible && !_v30.HIDDEN_COLUMNS_FOR_ENTITY[_v9].includes(_v0.name)).map(_v0 => {
                var _v1;
                let _v2 = (Array.isArray(_v1 = _v0.apiName) ? _v1 : _v1.split(".").filter(_v0 => _v0)).flatMap(_v0 => "string" == typeof _v0 ? _v0.split(".") : _v0).reduce((_v0, _v1) => _v0 && _v0[_v1], _v0) ?? "-",
                  _v3 = "-" === _v2 ? "-" : _v0.displayFunc?.(_v2, _v0, _v11 ?? void 0) || _v2,
                  _v4 = _v0.align;
                return _v0.name === _v30.ATTENDEE_TABLE_FIELDS.VIEW_PERCENTAGE && _v6 !== _v30.EVENT_STATUS.ENDED && (_v4 = _v30.ALIGN.CENTER), (0, _v1.jsx)(_v81, {
                  as: "td",
                  w: _v0.minWidth || (0, _v9.rem)(36),
                  style: _v0.style,
                  onClick: () => {
                    _v0.name !== _v30.ATTENDEE_TABLE_FIELDS.MENU && _v2(_v0);
                  },
                  _first: {
                    borderLeftRadius: (0, _v9.rem)(8)
                  },
                  _last: {
                    borderRightRadius: (0, _v9.rem)(8)
                  },
                  _groupHover: {
                    bgColor: "fill-component-hover"
                  },
                  children: (0, _v1.jsx)(_v7.Flex, {
                    justifyContent: _v4 || _v30.ALIGN.LEFT,
                    children: _v0.name === _v30.ATTENDEE_TABLE_FIELDS.MENU ? (0, _v1.jsx)(_v5.Box, {
                      visibility: "hidden",
                      _groupHover: {
                        visibility: "visible"
                      },
                      children: (0, _v1.jsx)(_v67, {
                        isCsvProcessing: _v4,
                        payloadUri: _v0.uri,
                        setDeleteRecordUri: _v5
                      }, _v0.uri)
                    }) : (0, _v1.jsx)(_v82, {
                      variant: [_v30.ATTENDEE_TABLE_FIELDS.FIRST_NAME, _v30.ATTENDEE_TABLE_FIELDS.LAST_NAME].includes(_v0.name) ? "heading-sm" : "body-md",
                      children: _v3
                    })
                  })
                }, `table-body-row-cell-${_v0.apiName}`);
              })
            }, _v0.uri))
          })]
        })
      });
    },
    _v91 = {
      data: [],
      total: 0,
      page: 1,
      perPage: _v30.ATTENDEES_PAGE_SIZE,
      paging: {
        next: null,
        previous: null,
        first: null,
        last: null
      }
    },
    _v92 = () => {
      let {
          PROCESSING: _v0,
          PENDING: _v1
        } = _v30.CRM_CSV_STATUS,
        _v2 = (0, _v15.useConfigStore)(_v0 => _v0.entityType),
        _v3 = (0, _v10.useToast)(),
        {
          sendUpsellEvent: _v4
        } = (0, _v12.useUpsellAnalytics)(),
        {
          getFromCache: _v5,
          addToCache: _v6,
          deletePagesFromCache: _v7,
          deleteFromCache: _v8,
          deleteAllCache: _v9
        } = (0, _v40.useAttendeeCache)(),
        _v10 = (0, _v4.useViewer)(),
        _v11 = _v10?.jwt,
        _v12 = _v10?.locale,
        _v13 = _v10?.apiUrl,
        {
          uri: _v14,
          user: _v15,
          emailQuota: _v16,
          registrationData: _v17
        } = (0, _v43.useEntityStore)(),
        _v18 = (0, _v11.useIsBokeh)(),
        {
          setMessage: _v19
        } = (0, _v13.useUpsellContext)(),
        [_v20, _v21] = (0, _v2.useState)(_v91),
        [_v22, _v23] = (0, _v2.useState)(!1),
        [_v24, _v25] = (0, _v2.useState)(1),
        [_v26, _v27] = (0, _v2.useState)(null),
        [_v28, _v29] = (0, _v2.useState)(Math.ceil(_v20.total / _v30.ATTENDEES_PAGE_SIZE)),
        {
          hasAttendeeUpsell: _v30,
          hasUpsell: _v31,
          loading: _v32,
          registrantCapLowerWatermark: _v33,
          hasEmailQuotaUsed: _v34,
          hasLiveSubscription: _v35
        } = (0, _v39.useEventCapability)(),
        [_v36, _v37] = (0, _v28.useImportRegistrantReducer)(),
        {
          processingCRM: _v38,
          uploadCSVBanners: _v39,
          importCRMStatus: _v40
        } = _v36,
        _v41 = _v33 && _v30,
        _v42 = _v33 && _v35,
        _v43 = (0, _v2.useMemo)(() => {
          if (_v2 === _v14.ENTITY_TYPE.EVENT) {
            if (_v34) return _v16.default.EmailQuotaUpsell(_v16?.capping);else if (_v41) return _v16.default.PremiumRegistrantUpsell(_v17?.capping);else if (_v42) return _v16.default.EnterpriseRegistrantUpsell(_v17?.capping);
          }
        }, [_v16?.capping, _v42, _v34, _v41, _v17?.capping, _v2]);
      (0, _v2.useEffect)(() => {
        _v19(_v43);
      }, [_v19, _v43]);
      let [_v44, _v45] = (0, _v2.useState)(!0),
        [_v46, _v47] = (0, _v2.useState)(null),
        {
          fetchCRMInfo: _v48,
          fetchCRMStatus: _v49,
          importCRMData: _v50,
          CRMCalled: _v51,
          isCRMLoading: _v52,
          CRMStatusCalled: _v53,
          CRMStatusData: _v54,
          isCRMStatusLoading: _v55
        } = (() => {
          let [_v0, {
              loading: _v1,
              data: _v2,
              called: _v3
            }] = (0, _v41.useGetLeadCaptureResourceIdRegistrantStatusesLazy)(),
            [_v4, {
              loading: _v5,
              data: _v6,
              called: _v7
            }] = (0, _v41.useGetLeadCaptureResourceIdRegistrantStatusesLazy)(),
            {
              entityType: _v8,
              entityId: _v9
            } = (0, _v15.useConfigStore)(),
            _v10 = (0, _v2.useCallback)(() => !!_v9 && !!_v8 && (_v4({
              where: {
                resourceType: _v14.ENTITY_TO_PATH_MAP[_v8],
                resourceId: _v9
              },
              select: _v42.CRM_IMPORT_FIELDS
            }), !0), [_v9, _v4, _v8]),
            _v11 = (0, _v2.useCallback)(() => (_v9 && _v8 && _v0({
              where: {
                resourceType: _v14.ENTITY_TO_PATH_MAP[_v8],
                resourceId: _v9
              },
              select: _v42.CRM_IMPORT_FIELDS
            }), !0), [_v9, _v0, _v8]),
            _v12 = (0, _v2.useMemo)(() => ({
              isCRMStatusLoading: _v5,
              CRMStatusData: _v6,
              CRMStatusCalled: _v7
            }), [_v5, _v6, _v7]);
          return {
            fetchCRMInfo: _v11,
            fetchCRMStatus: _v10,
            ...(0, _v2.useMemo)(() => {
              let _v0 = _v2?.data?.find(_v0 => _v0.type === _v30.IMPORT)?.emailProviderList;
              return {
                isCRMLoading: _v1,
                importCRMData: {
                  emailProviderList: _v0 ? [_v0] : []
                },
                CRMCalled: _v3
              };
            }, [_v1, _v2, _v3]),
            ..._v12
          };
        })(),
        _v56 = (0, _v2.useCallback)(() => {
          _v49() && _v37({
            type: _v28.ACTION_TYPE.PROCESSING_CRM_DATA,
            payload: !0
          });
        }, [_v49, _v37]);
      (0, _v2.useEffect)(() => {
        _v14 && _v15?.uri && (_v40.length || _v51 || _v48(), _v53 || _v56());
      }, [_v14, _v15?.uri, _v51, _v53, _v40.length, _v48, _v56]);
      let _v57 = (0, _v2.useCallback)(() => {
        _v27(null), _v23(!1);
      }, []);
      (0, _v2.useEffect)(() => {
        _v29(Math.ceil(_v20.total / _v30.ATTENDEES_PAGE_SIZE)), _v25(_v20.page ?? 1);
      }, [_v20.total, _v20.page]), (0, _v2.useEffect)(() => {
        _v39 && _v45(_v39.some(_v0 => _v0.status === _v30.CRM_CSV_STATUS.PROCESSING || _v0.status === _v30.CRM_CSV_STATUS.UPLOADED) || !1);
      }, [_v39]), (0, _v2.useEffect)(() => {
        !_v32 && _v31 && _v45(!1);
      }, [_v32, _v31]);
      let _v58 = (0, _v2.useCallback)((_v0 = _v24, _v1 = !0, _v2 = !1, _v3 = !1) => {
        _v3 && _v9(), !_v31 && _v13 && _v11 && _v12 && (_v23(_v1), _v61(_v11, _v12, _v60(_v14, _v13, _v0), _v5, _v6, _v2).then(_v0 => {
          _v21(_v0), _v23(!1);
        }).catch(_v0 => {
          _v57(), _v23(!1), _v3({
            title: _v16.default.SomethingWentWrong,
            status: "error"
          });
        }));
      }, [_v2, _v24, _v31, _v9, _v14, _v15?.uri, _v13, _v11, _v12, _v5, _v6, _v57]);
      return (0, _v2.useEffect)(() => {
        if (_v53 && !_v55 && _v54) {
          let _v0 = _v54.data || [];
          !_v0.some(_v0 => [_v1, _v0].includes(_v0.status || "") && _v0.type === _v30.IMPORT) && _v38 && (_v58(_v24, !0, !0), _v48(), _v37({
            type: _v28.ACTION_TYPE.PROCESSING_CRM_DATA,
            payload: !1
          })), _v37({
            type: _v28.ACTION_TYPE.SET_CRM_STATUS,
            payload: _v0
          });
        }
      }, [_v54, _v55, _v53, _v37]), (0, _v2.useEffect)(_v58, [_v58]), (0, _v2.useEffect)(() => {
        _v27(null);
      }, []), (0, _v2.useEffect)(() => {
        _v47(null);
      }, [_v22]), (0, _v2.useEffect)(() => {
        _v30 && _v2 === _v14.ENTITY_TYPE.EVENT && _v4({
          eventName: _v29.BP_EVENT_NAME.UPSELL_TRIGGER_IMPRESSION,
          pageName: _v29.BP_PAGE.EVENT_REGISTRATION_PAGE,
          target: null,
          targetPath: null,
          upsellName: "add_registrants",
          interfaceType: "page",
          product: "events",
          feature: "registration",
          location: _v29.BP_LOCATION.HEADER,
          entityType: _v2,
          copy: _v29.BP_COPY.UPGRADE,
          flow: _v29.BP_FLOW.REGISTRANTS_TAB
        });
      }, []), (0, _v1.jsxs)(_v5.Box, {
        w: "100%",
        h: "100%",
        overflow: "auto",
        children: [(0, _v1.jsxs)(_v7.Flex, {
          w: "100%",
          h: "100%",
          zIndex: 3,
          transition: "visibility 400ms, opacity 400ms",
          visibility: "visible",
          opacity: 1,
          flexDir: "column",
          children: [(0, _v1.jsx)(_v17.GeneralAlerts, {}), !_v31 && !_v32 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v54, {
              importRegistrantState: _v36,
              dispatch: _v37,
              fetchAttendeeData: _v58,
              fetchCRMStatus: _v56,
              fetchCRMInfo: _v48
            }), (0, _v1.jsx)(_v38, {
              importRegistrantState: _v36,
              dispatch: _v37,
              fetchAttendeeData: _v58
            })]
          }), (0, _v1.jsx)(_v19.AttendeeHeader, {
            response: _v20,
            isLoading: _v22,
            registrationData: _v17,
            importRegistrantState: _v36,
            dispatch: _v37,
            isCsvProcessing: _v44,
            crmInfo: {
              fetchCRMStatus: _v56,
              CRMCalled: _v51,
              importCRMData: _v50,
              isCRMLoading: _v52,
              isCRMStatusLoading: _v55
            }
          }), (0, _v1.jsx)(_v90, {
            fields: _v64,
            payload: _v20 ? _v20.data : [],
            onRowClick: _v27,
            isLoading: _v22,
            isCsvProcessing: _v44,
            setDeleteRecordUri: _v47
          }), _v20.total > 0 && _v28 > 0 && (0, _v1.jsx)(_v7.Flex, {
            justifyContent: "space-between",
            borderStyle: _v18 ? "none" : "solid",
            alignItems: "center",
            borderTopWidth: (0, _v9.rem)(1),
            borderColor: "stroke",
            children: (0, _v1.jsx)(_v6.Center, {
              boxSize: "100%",
              p: (0, _v9.rem)(20),
              children: (0, _v1.jsx)(_v8.Pagination, {
                count: _v20.total,
                pageSize: _v30.ATTENDEES_PAGE_SIZE,
                page: _v24,
                onPageChange: ({
                  page: _v0
                }) => _v25(_v0)
              })
            })
          }), (0, _v1.jsx)(_v20.AttendeesInfoModal, {
            record: _v26,
            onClose: () => {
              _v27(null);
            },
            updateData: () => _v58(_v24, !1, !1)
          }), (0, _v1.jsx)(_v21.ImportRegistrant, {
            importRegistrantState: _v36,
            dispatch: _v37,
            totalAttendees: _v20.total,
            fetchCRMInfo: _v48,
            fetchCRMStatus: _v56
          })]
        }), (0, _v1.jsx)(_v18.AttendeeConfirmationModal, {
          deleteRecordUri: _v46,
          cancelDeleteAttendee: () => {
            _v47(null);
          },
          onDeleteSuccessCallback: () => {
            let _v0 = Object.assign({}, _v20);
            if (_v0.data = _v20.data.filter(_v0 => _v0.uri !== _v46), _v0.total = _v0.total - 1, _v21(_v0), _v47(null), _v3({
              title: _v16.default.SuccessfullyDeleted,
              status: "success"
            }), _v7(_v24), _v24 !== _v28) _v58(_v24, !1, !0);else if (_v13) {
              let _v0 = _v60(_v14, _v13, _v24);
              0 === _v0.data.length && 1 !== _v24 ? (_v25(_v24 - 1), _v8(_v0)) : _v6(_v0, _v0, !0);
            }
          }
        })]
      });
    };
  var _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0);
  _v0.s(["LeadCaptureDashboard", 0, ({
    entityId: _v0,
    entityOwnerId: _v1,
    entityType: _v2,
    isRegistrationOn: _v3,
    canCompleteEvent: _v4,
    setSelectedSection: _v5
  }) => {
    let _v6 = (0, _v4.useViewer)(),
      _v7 = _v6?.user,
      {
        entityData: _v8,
        entityLink: _v9
      } = ((_v0, _v1, _v2) => {
        let [_v3, {
            loading: _v4,
            data: _v5
          }] = (0, _v98.useGetUserLiveEventLazy)(),
          [_v6, {
            loading: _v7,
            data: _v8
          }] = (0, _v99.useGetVideoLazy)(),
          [_v9, {
            data: _v10,
            loading: _v11
          }] = (0, _v96.useGetAlbumLazy)(),
          [_v12, {
            data: _v13
          }] = (0, _v97.useGetLeadCaptureResourceIdFormLazy)(),
          _v14 = (0, _v2.useCallback)(() => {
            if (_v0 && _v1) {
              switch (_v1) {
                case _v14.ENTITY_TYPE.EVENT:
                  _v3({
                    where: {
                      liveEventId: Number(_v0),
                      userId: _v2 || 0
                    },
                    select: _v42.EVENT_API_FIELDS_FOR_ATTENDEE_PAGE
                  });
                  break;
                case _v14.ENTITY_TYPE.VIDEO:
                  _v6({
                    where: {
                      videoId: Number(_v0)
                    },
                    select: _v42.VIDEO_API_FIELDS
                  });
                  break;
                case _v14.ENTITY_TYPE.SHOWCASE:
                  _v9({
                    where: {
                      albumId: _v0
                    },
                    select: _v42.SHOWCASE_API_FIELDS
                  });
              }
              _v12({
                where: {
                  resourceType: _v14.ENTITY_TO_PATH_MAP[_v1],
                  resourceId: _v0
                },
                select: _v42.FORM_FIELDS_FOR_ATTENDEE_PAGE
              });
            }
          }, [_v1, _v2, _v0, _v12, _v3, _v6, _v9]);
        return (0, _v2.useEffect)(_v14, [_v14]), (0, _v2.useMemo)(() => {
          switch (_v1) {
            case _v14.ENTITY_TYPE.EVENT:
              if (!_v5) break;
              let _v0 = "",
                _v1 = _v5.streamPrivacy.unlistedHash;
              return _v1 && (_v0 = `/${_v1}`), {
                entityData: {
                  uri: _v5.uri,
                  title: _v5.title,
                  user: _v5.user,
                  schedule: _v5.schedule,
                  metadata: _v5.metadata,
                  eventsUri: _v5.uri,
                  registrationData: _v13?.registrationData ?? void 0,
                  status: _v5.status,
                  privacy: _v5.streamPrivacy
                },
                entityLink: `${_v5.link}${_v0}`,
                isLoading: _v4
              };
            case _v14.ENTITY_TYPE.VIDEO:
              if (!_v8) break;
              return {
                entityData: {
                  uri: _v8.uri,
                  title: _v8.name,
                  user: _v8.user,
                  metadata: _v8.metadata,
                  eventsUri: _v8.uri,
                  privacy: _v8.privacy,
                  registrationData: {
                    isUnlimited: !0,
                    capping: 0,
                    upperLimit: 0,
                    lowerLimit: 0,
                    total: 0,
                    downloadCsvAsynchronously: !0
                  },
                  hasLeadsFromLegacyForm: _v13?.hasLeadsFromLegacyForm,
                  formCreatedOn: _v13?.createdOn,
                  isVideoPlayable: _v8.isPlayable
                },
                entityLink: _v8.link,
                isLoading: _v7
              };
            case _v14.ENTITY_TYPE.SHOWCASE:
              if (!_v10) break;
              let _v2 = _v10.uri.split("/");
              return {
                entityData: {
                  uri: `/albums/${_v2.pop()}`,
                  title: _v10.name,
                  user: _v10.user,
                  metadata: _v10.metadata,
                  eventsUri: _v10.uri,
                  privacy: _v10.privacy,
                  numberOfVideos: _v10.metadata?.connections?.videos?.total,
                  seoAllowIndexed: _v10.seoAllowIndexed,
                  registrationData: {
                    isUnlimited: !0,
                    capping: 0,
                    upperLimit: 0,
                    lowerLimit: 0,
                    total: 0,
                    downloadCsvAsynchronously: !0
                  }
                },
                entityLink: _v10.link,
                isLoading: _v11
              };
          }
          return null;
        }, [_v1, _v5, _v8, _v10, _v13, _v4, _v7, _v11]);
      })(_v0, _v2, _v1 || _v7?.id) || {},
      _v10 = (0, _v2.useMemo)(() => _v8 && _v9 ? {
        ..._v8,
        entityLink: _v9
      } : _v93.defaultValue, [_v8, _v9]);
    return ((0, _v2.useEffect)(() => {
      _v15.useConfigStore.setState({
        entityType: _v2,
        entityId: _v0,
        isRegistrationOn: _v3,
        canCompleteEvent: _v4,
        setSelectedSection: _v5
      });
    }, [_v4, _v0, _v2, _v8?.uri, _v3, _v5]), _v8) ? (0, _v1.jsx)(_v93.default, {
      initialValue: _v10,
      children: (0, _v1.jsx)(_v39.default, {
        children: (0, _v1.jsx)(_v94.default, {
          isOwner: _v8?.user?.uri === _v7?.uri,
          canEdit: !!_v8?.metadata?.interactions.edit?.uri,
          children: (0, _v1.jsx)(_v95.default, {
            entityLink: _v8?.uri,
            children: (0, _v1.jsx)(_v92, {})
          })
        })
      })
    }) : (0, _v1.jsx)(_v3.FullScreenLoader, {});
  }], 0);
}