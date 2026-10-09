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
    _v32 = _v0.i(0);
  let _v33 = ({
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
        } = _v27.CRM_CSV_STATUS,
        {
          downloadUri: _v8
        } = (0, _v32.useCSVUploadError)(_v2),
        _v9 = () => {
          _v5?.(_v2 || "");
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v0 === _v6 && (0, _v1.jsx)(_v31.ErrorAlertBanner, {
          message: (0, _v24.translate)({
            singular: '{FAILED} row out of {TOTAL} from "{FILE_NAME}" failed to upload. {LINK}Download errors.{/LINK}',
            plural: '{FAILED} rows out of {TOTAL} from "{FILE_NAME}" failed to upload. {LINK}Download errors.{/LINK}',
            replacements: {
              FAILED: _v1?.error,
              TOTAL: _v1?.total,
              FILE_NAME: (0, _v28.getFileName)(_v3),
              LINK: _v0 => (0, _v1.jsx)(_v30.Link, {
                href: _v8,
                download: `${_v3}`,
                variant: "inline-primary",
                fontSize: "body-md",
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
          onClose: _v9
        }), _v0 === _v7 && (0, _v1.jsx)(_v31.ErrorAlertBanner, {
          message: ((_v0, _v1) => {
            switch (_v1) {
              case _v27.UPLOAD_CSV_ERRORS.EXCEEDS_MAX_ALLOWED_REGISTRANTS:
                return (0, _v24.translate)({
                  singular: "{FILE_NAME} exceeds the max allowed number of rows. Please upload a file under {MAX_REGISTRANTS} rows.",
                  replacements: {
                    FILE_NAME: () => (0, _v1.jsx)("strong", {
                      children: (0, _v28.getFileName)(_v0)
                    }),
                    MAX_REGISTRANTS: _v27.MAX_REGISTRANTS_ALLOWED.toLocaleString()
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
              case _v27.UPLOAD_CSV_ERRORS.TOO_MANY_REGISTRANTS:
                return (0, _v24.translate)({
                  singular: "{FILE_NAME} exceeds the max number of attendees.",
                  replacements: {
                    FILE_NAME: () => (0, _v1.jsx)("strong", {
                      children: (0, _v28.getFileName)(_v0)
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
              case _v27.UPLOAD_CSV_ERRORS.EVENT_COMPLETED:
                return (0, _v24.translate)({
                  singular: "Upload of {FILE_NAME} was interrupted by event completion.",
                  replacements: {
                    FILE_NAME: () => (0, _v1.jsx)("strong", {
                      children: (0, _v28.getFileName)(_v0)
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
                      children: (0, _v28.getFileName)(_v0)
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
          onClose: _v9
        })]
      });
    },
    _v34 = ({
      importRegistrantState: _v0,
      dispatch: _v1,
      fetchAttendeeData: _v2
    }) => {
      let _v3 = (0, _v4.useViewer)(),
        _v4 = _v3?.jwt,
        {
          PROCESSING: _v5,
          UPLOADED: _v6,
          PENDING: _v7,
          SUCCESS: _v8,
          PARTIAL_ERROR: _v9,
          ERROR: _v10
        } = _v27.CRM_CSV_STATUS,
        {
          uploadCSVBanners: _v11
        } = _v0,
        _v12 = (0, _v2.useRef)(void 0),
        _v13 = (0, _v2.useRef)(_v11),
        _v14 = (0, _v10.useToast)(),
        [_v15, _v16] = (0, _v21.useIsVisible)({
          threshold: 1
        }),
        [_v17, {
          data: _v18,
          loading: _v19,
          error: _v20
        }] = (0, _v23.useGetLeadCaptureResourceIdRegistrantsUploadsLazy)(),
        [_v21, {
          data: _v22,
          loading: _v23,
          error: _v24
        }] = (0, _v22.useGetLeadCaptureRegistrantsUploadLazy)(),
        [_v25, {
          data: _v26,
          loading: _v27,
          error: _v28
        }] = (0, _v22.usePatchLeadCaptureRegistrantsUpload)(),
        _v29 = () => {
          clearInterval(_v12.current);
        },
        {
          entityId: _v30,
          entityType: _v31
        } = (0, _v14.useConfigStore)();
      (0, _v2.useEffect)(() => {
        if (_v11) {
          _v29();
          let _v0 = _v11.findIndex(_v0 => _v0.status === _v27.CRM_CSV_STATUS.PROCESSING || _v0.status === _v27.CRM_CSV_STATUS.UPLOADED);
          -1 !== _v0 && (_v12.current = setInterval(() => {
            _v21({
              where: {
                uploadId: (0, _v25.getLastUuidFromUri)(_v11[_v0].uri)
              },
              select: ["status", "fileName", "uri", "partialErrorCount", "errorCode"]
            });
          }, _v27.UPLOAD_CSV_STATUS_INTERVAL));
        }
      }, [_v11, _v4]), (0, _v2.useEffect)(() => {
        !_v19 && !_v20 && _v18?.data && _v1({
          type: _v26.ACTION_TYPE.SET_CSV_BANNERS,
          payload: _v18.data
        });
      }, [_v18, _v19, _v20]), (0, _v2.useEffect)(() => {
        if (!_v23) {
          if (_v24) _v29();else if (_v22 && (_v22.status === _v8 || _v22.status === _v10 || _v22.status === _v9)) {
            if (_v29(), _v11) {
              let _v0 = _v11.findIndex(_v0 => _v0.uri === _v22.uri),
                _v1 = [..._v11];
              _v1[_v0].status = _v22.status, _v1[_v0].partialErrorCount = _v22.partialErrorCount, _v1[_v0].errorCode = _v22.errorCode, _v1({
                type: _v26.ACTION_TYPE.SET_CSV_BANNERS,
                payload: _v1
              });
            }
            (_v22.status === _v8 || _v22.status === _v9) && setTimeout(() => {
              _v2(1, !0, !0, !0);
            }, 0);
          }
        }
      }, [_v22, _v23, _v24]);
      let _v32 = (_v0, _v1) => {
        _v30 && _v31 && _v17({
          where: {
            resourceId: _v30,
            resourceType: _v13.ENTITY_TO_PATH_MAP[_v31]
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
        _v11 || _v32(_v27.MAX_IMPORT_STATUS_BANNERS, 1);
      }, [_v11]);
      let _v33 = _v0 => {
        if (!_v30) return;
        _v13.current = _v11;
        let _v1 = _v11?.filter(_v0 => _v0 !== (0, _v25.getLastUuidFromUri)(_v0.uri)) || [];
        _v1({
          type: _v26.ACTION_TYPE.SET_CSV_BANNERS,
          payload: [..._v1]
        }), _v25({
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
        !_v27 && (_v28 ? (_v14({
          title: _v15.default.ChangesCouldNotBeSaved,
          status: "error"
        }), _v1({
          type: _v26.ACTION_TYPE.SET_CSV_BANNERS,
          payload: _v13.current
        })) : _v26 && (_v14({
          title: _v15.default.ChangesSaved,
          status: "success"
        }), _v32(_v27.MAX_IMPORT_STATUS_BANNERS, 1)));
      }, [_v27, _v28, _v26]);
      let _v34 = (_v0, _v1) => {
        _v14.isActive(_v1) && (_v14.close(_v1), _v33((0, _v25.getLastUuidFromUri)(_v0)));
      };
      return (0, _v2.useEffect)(() => {
        _v16 && _v11?.forEach(({
          status: _v0,
          fileName: _v1,
          uri: _v2,
          pendingUserAction: _v3
        }) => {
          _v0 && [_v7, _v5, _v6].includes(_v0) && !_v14.isActive(_v1) ? _v14({
            render: () => (0, _v1.jsx)(_v29.ToastMessage, {
              status: "info",
              title: (0, _v24.translate)({
                singular: 'Importing registrants from "{NAME}"...',
                replacements: {
                  NAME: (0, _v28.getFileName)(_v1)
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
          }) : [_v8, _v9].includes(_v0 || "") && (_v0 !== _v8 || _v14.isActive(`csvSuccess${_v2}`) || _v3 || (setTimeout(() => {
            _v34(_v2, `csvSuccess${_v2}`);
          }, 0), _v14({
            render: () => (0, _v1.jsx)(_v29.ToastMessage, {
              status: "success",
              title: (0, _v24.translate)({
                singular: 'Registrants imported from "{NAME}"',
                replacements: {
                  NAME: (0, _v28.getFileName)(_v1)
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
              onCloseComplete: () => _v34(_v2, `csvSuccess${_v2}`),
              isClosable: !0
            }),
            id: `csvSuccess${_v2}`,
            duration: null
          })), _v14.close(_v1));
        });
      }, [_v11, _v16]), (0, _v2.useEffect)(() => {
        let _v0 = _v0.uploadedCsv?.name || "";
        _v0.apiPending && _v0.showModalType === _v27.IMPORT_TYPE.CSV && !_v14.isActive(_v0) && _v14({
          render: () => (0, _v1.jsx)(_v29.ToastMessage, {
            status: "info",
            title: (0, _v24.translate)({
              singular: 'Importing registrants from "{NAME}"...',
              replacements: {
                NAME: (0, _v28.getFileName)(_v0)
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
        }), _v0.apiError && _v14.close(_v0.uploadedCsv?.name || "");
      }, [_v0]), (0, _v1.jsx)(_v5.Box, {
        ref: _v15,
        children: _v11?.map(({
          status: _v0,
          fileName: _v1,
          uri: _v2,
          partialErrorCount: _v3,
          errorCode: _v4
        }) => _v0 && [_v9, _v10].includes(_v0) ? (0, _v1.jsx)(_v33, {
          status: _v0,
          fileName: _v1,
          partialErrorCount: _v3,
          errorCode: _v4 ?? void 0,
          uploadId: (0, _v25.getLastUuidFromUri)(_v2),
          handleRemove: _v33
        }, _v2) : null)
      });
    };
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v27,
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v27;
  let _v47 = ({
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
        [_v17] = (0, _v44.usePutLeadCaptureResourceIdRegistrantsImport)(),
        {
          exportRegistrants: _v18
        } = (() => {
          let [_v0, {
              error: _v1,
              data: _v2,
              loading: _v3
            }] = (0, _v45.usePostLeadCaptureResourceIdRegistrantsExport)(),
            _v4 = (0, _v14.useConfigStore)(_v0 => _v0.entityType),
            _v5 = (0, _v14.useConfigStore)(_v0 => _v0.entityId);
          _v13.ENTITY_TO_PATH_MAP;
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
                  resourceType: _v13.ENTITY_TO_PATH_MAP[_v4]
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
        } = (0, _v14.useConfigStore)(),
        {
          downloadUri: _v21
        } = (_v12 = _v5 ?? "", _v13 = (0, _v4.useViewer)(), _v14 = _v13?.jwt, _v15 = _v13?.locale, {
          downloadUri: (_v16 = _v13?.apiUrl) && _v14 && _v15 ? `//${_v16}/lead_capture/registrants/${_v4 === _v27.IMPORT ? "imports" : "exports"}/${_v12}/errors/export?jwt_token=${_v14}&format=csv&locale=${_v15}` : ""
        }),
        _v22 = _v0 => {
          window.open(_v0, "_blank");
        };
      return _v8 === _v46.EVENT_STATUS.ENDED && _v4 === _v46.IMPORT ? (0, _v1.jsx)(_v31.ErrorAlertBanner, {
        message: (0, _v24.translate)({
          singular: 'Import of "{FILE_NAME}" was interrupted by event completion',
          replacements: {
            FILE_NAME: (0, _v28.getFileName)(_v2)
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
          _v10?.(_v0, _v4);
        }
      }) : (0, _v1.jsx)(_v31.ErrorAlertBanner, {
        message: ((_v0, _v1, _v2, _v3 = _v46.IMPORT, _v4) => _v0 === _v46.ERROR_CATEGORY.AUTHENTICATION ? (0, _v24.translate)({
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
        }) : _v3 === _v46.IMPORT ? (0, _v24.translate)({
          singular: 'Unable to import data from "{LIST_NAME}".{LINK}Download errors{/LINK} for details and try again when errors are fixed.',
          replacements: {
            LIST_NAME: _v2,
            LINK: _v0 => (0, _v1.jsx)(_v30.Link, {
              href: _v4,
              download: `${_v2}`,
              fontSize: "body-md",
              variant: "inline-primary",
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
            LINK: _v0 => (0, _v1.jsx)(_v30.Link, {
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
        }))(_v1, _v3, (0, _v28.getFileName)(_v2), _v4, _v21),
        buttonText: _v1 === _v46.ERROR_CATEGORY.AUTHENTICATION ? _v15.default.ManageIntegrations : _v15.default.TryAgain,
        secondaryMsg: _v15.default.GetTroubleshootingTips,
        secondaryMsgClick: () => _v22(_v13.GET_TROUBLESHOOTING_TIPS),
        buttonIcon: _v1 === _v46.ERROR_CATEGORY.AUTHENTICATION ? (0, _v1.jsx)(_v43.PopOut, {}) : void 0,
        onButtonClick: _v1 === _v46.ERROR_CATEGORY.AUTHENTICATION ? () => _v22(_v46.MARKETING_PAGE_INTEGRATION) : () => {
          _v4 === _v46.IMPORT ? _v6 && _v9 && _v19 && _v17({
            where: {
              resourceType: _v13.ENTITY_TO_PATH_MAP[_v20],
              resourceId: _v19
            },
            variables: {
              registrantSource: _v46.CRM_REGISTRANT_SOURCE,
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
    _v48 = ({
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
        } = _v42.CRM_CSV_STATUS,
        _v10 = (0, _v10.useToast)(),
        {
          importCRMStatus: _v11,
          processingCRM: _v12,
          loadingCRM: _v13
        } = _v0,
        [_v14, _v15] = (0, _v2.useState)(!1),
        [_v16, _v17] = (0, _v2.useState)(!1),
        _v18 = (0, _v2.useRef)(_v11),
        {
          schedule: _v19,
          status: _v20
        } = (0, _v39.useEntityStore)(),
        {
          entityId: _v21,
          entityType: _v22
        } = (0, _v14.useConfigStore)(),
        [_v23, {
          loading: _v24,
          data: _v25,
          error: _v26
        }] = (0, _v37.usePatchLeadCaptureResourceIdRegistrantStatuses)(),
        [_v27, _v28] = (0, _v21.useIsVisible)({
          threshold: 1
        }),
        _v29 = (_v0, _v1 = _v42.SYNC_TYPE.IMPORT) => {
          _v18.current = _v11;
          let _v2 = _v11?.filter(_v0 => _v0.uri !== _v0) || [];
          _v1({
            type: _v26.ACTION_TYPE.SET_CRM_STATUS,
            payload: _v2
          }), _v21 && _v22 && _v23({
            where: {
              resourceType: _v13.ENTITY_TO_PATH_MAP[_v22],
              resourceId: _v21
            },
            select: _v38.CRM_IMPORT_FIELDS,
            variables: {
              registrantsStatus: [{
                uuid: (0, _v25.getLastUuidFromUri)(_v0),
                type: _v1
              }]
            }
          });
        },
        _v30 = _v0 => {
          let _v1 = _v11?.filter(_v0 => _v0.uri !== _v0) || [];
          _v1({
            type: _v26.ACTION_TYPE.SET_CRM_STATUS,
            payload: _v1
          });
        };
      (0, _v41.usePoll)(_v3, _v14 && _v28, {
        interval: 0
      }), (0, _v41.usePoll)(_v3, _v16 && _v28, {
        interval: 0
      }), (0, _v41.usePoll)(_v3, _v28, {
        interval: 0
      }), (0, _v2.useEffect)(() => {
        if (_v19?.startTime) {
          let _v0 = new Date(_v19?.startTime).getTime() - new Date().getTime();
          0 > Math.abs(_v0) ? _v17(!0) : _v0 > 0 ? (_v17(!1), setTimeout(() => _v17(!0), _v0 - 0)) : _v17(!1), -_v0 > 0 || setTimeout(() => _v17(!1), _v0 + 0);
        }
      }, [_v19?.startTime]), (0, _v2.useEffect)(() => {
        !_v24 && (_v26 && !(0, _v40.default)(_v18.current, _v11) ? (_v10({
          title: _v15.default.ChangesCouldNotBeSaved,
          status: "error"
        }), _v1({
          type: _v26.ACTION_TYPE.SET_CRM_STATUS,
          payload: _v18.current
        })) : _v25 && (_v18.current = _v11));
      }, [_v24, _v26, _v25, _v1, _v11]), (0, _v2.useEffect)(() => {
        let _v0 = _v11.filter(_v0 => _v0.type === _v42.IMPORT);
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
            _v0 === _v8 && (_v0 = !1), (_v0 === _v6 || _v0 === _v7) && _v12 && !_v13 && (setTimeout(() => {
              _v2(1, !0, !0, !0);
            }, 0), _v4(), _v0 = !1);
          }
          _v15(_v0), _v1({
            type: _v26.ACTION_TYPE.PROCESSING_CRM_DATA,
            payload: _v13 ? _v12 : _v0
          });
        }
      }, [_v11, _v1, _v13]);
      let _v31 = (_v0, _v1, _v2) => {
        _v10.isActive(_v1) && (_v29(_v0, _v2), _v10.close(_v1));
      };
      return (0, _v2.useEffect)(() => {
        _v28 && _v11?.filter(_v0 => _v42.ProvidersWithCRMExport.includes(_v0.emailProviderList.provider.id) || _v0.type === _v42.SYNC_TYPE.IMPORT).forEach(({
          status: _v0,
          emailProviderList: _v1,
          uri: _v2,
          pendingUserAction: _v3,
          type: _v4
        }) => {
          let _v5 = _v1.list?.name;
          if (_v3 && _v0 && _v5?.length) {
            let _v0;
            _v0 = `processing_${_v4}_${_v5}`, [_v7, _v8, _v6].includes(_v0) && _v10.isActive(_v0) && _v10.close(_v0), ((_v0, _v1, _v2, _v3) => {
              let _v4 = `success_${_v1}_${_v2}`,
                _v5 = `processing_${_v1}_${_v2}`;
              if (_v0 !== _v6 || _v10.isActive(_v4)) {
                let _v0;
                [_v9, _v5].includes(_v0) && !_v10.isActive(_v5) && (_v0 = _v1 === _v42.SYNC_TYPE.EXPORT ? (0, _v24.translate)({
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
                }), _v10({
                  render: () => (0, _v1.jsx)(_v29.ToastMessage, {
                    status: "info",
                    title: _v0
                  }),
                  id: _v5,
                  duration: null
                }));
              } else {
                let _v0;
                setTimeout(() => {
                  _v10.isActive(_v4) && _v31(_v3, _v4, _v1);
                }, 0), _v0 = _v1 === _v42.SYNC_TYPE.EXPORT ? (0, _v24.translate)({
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
                }), _v10({
                  render: () => (0, _v1.jsx)(_v29.ToastMessage, {
                    status: "success",
                    title: _v0,
                    onCloseComplete: () => _v31(_v3, _v4, _v1),
                    isClosable: !0
                  }),
                  id: _v4,
                  duration: null
                });
              }
            })(_v0, _v4, _v5, _v2);
          }
        });
      }, [_v11, _v28]), (0, _v1.jsx)(_v5.Box, {
        ref: _v27,
        children: (0, _v28.customCrmSyncSort)(_v11).map(({
          emailProviderList: _v0,
          type: _v1,
          uri: _v2,
          pendingUserAction: _v3,
          status: _v4,
          errorDetails: _v5
        }) => _v3 && [_v7, _v8].includes(_v4 || "") && (_v5?.category === _v42.ERROR_CATEGORY.AUTHENTICATION || !!_v0?.list?.name) && (0, _v1.jsx)(_v47, {
          uri: _v2,
          category: _v5?.category,
          syncId: (0, _v25.getLastUuidFromUri)(_v2),
          type: _v1,
          listName: _v0?.list?.name,
          providerName: _v0?.provider.name,
          handleHide: _v30,
          providerId: _v0?.provider.id,
          fetchCRMStatus: _v3,
          eventStatus: _v22 === _v13.ENTITY_TYPE.EVENT && _v20 ? _v20 : void 0,
          handleRemove: _v29,
          listId: _v0?.list?.id
        }, _v2))
      });
    };
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0);
  let _v54 = (_v0, _v1, _v2) => `//${_v1}/lead_capture${_v0}/registrants?sort=registration_date&direction=asc&page=${_v2}&per_page=${_v27.ATTENDEES_PAGE_SIZE}&fields=${_v38.ATTENDEES_API_FIELDS.join(",")}`,
    _v55 = async (_v0, _v1, _v2, _v3, _v4, _v5) => {
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
          let _v1 = (0, _v53.deepCamelCase)(_v0);
          return _v0?.data?.length && _v0.data.forEach((_v0, _v1) => {
            _v0?.data && _v1?.data[_v1] && (_v1.data[_v1].data = _v0.data);
          }), _v4(_v2, _v1), _v1;
        }) : Promise.reject(_v0);
      }
    },
    _v56 = (_v0, _v1) => _v1?.isBlocked ? (0, _v1.jsx)(_v5.Box, {
      as: "span",
      color: "red.600",
      textDecorationLine: "line-through",
      children: _v0
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: _v0
    }),
    _v57 = {
      fontSize: (0, _v9.rem)(16),
      fontWeight: 500,
      lineHeight: (0, _v9.rem)(20),
      letterSpacing: 0
    },
    _v58 = [{
      name: "id",
      apiName: "id",
      isVisible: !1
    }, {
      name: "firstName",
      apiName: "firstName",
      isVisible: !0,
      minWidth: "10rem",
      style: _v57,
      displayFunc: _v56
    }, {
      name: "lastName",
      apiName: "lastName",
      isVisible: !0,
      minWidth: "10rem",
      style: _v57,
      displayFunc: _v56
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
      align: _v27.ALIGN.CENTER,
      displayFunc: _v0 => _v27.ATTENDEES_TYPES.B === _v0 ? (0, _v1.jsx)(_v49.Tooltip, {
        label: _v15.default.Blocked,
        placement: "left",
        fontSize: 14,
        children: (0, _v1.jsx)("div", {
          children: (0, _v1.jsx)(_v52.MinusCircle, {
            color: "red.500"
          })
        })
      }) : _v27.ATTENDEES_TYPES.Y === _v0 ? (0, _v1.jsx)(_v49.Tooltip, {
        label: _v15.default.Attended,
        placement: "left",
        fontSize: 14,
        children: (0, _v1.jsx)("div", {
          children: (0, _v1.jsx)(_v50.CircleCheck, {
            color: "blue.400"
          })
        })
      }) : (0, _v1.jsx)(_v49.Tooltip, {
        label: _v15.default.DidNotAttend,
        placement: "left",
        fontSize: 14,
        children: (0, _v1.jsx)("div", {
          children: (0, _v1.jsx)(_v51.CloseXCircle, {
            color: "text-secondary"
          })
        })
      })
    }, {
      name: "views",
      apiName: "views",
      isVisible: !0,
      minWidth: "7rem",
      align: _v27.ALIGN.CENTER,
      displayFunc: _v0 => (0, _v1.jsxs)(_v1.Fragment, {
        children: [" ", _v0, " "]
      })
    }, {
      name: "viewPercentage",
      apiName: "analytics.viewPercentage",
      isVisible: !0,
      minWidth: "10rem",
      align: _v27.ALIGN.CENTER,
      displayFunc: _v0 => (0, _v1.jsxs)(_v1.Fragment, {
        children: [" ", null !== _v0 ? `${_v0}%` : "—", " "]
      })
    }, {
      name: "menu",
      apiName: "menu",
      isVisible: !0,
      minWidth: "5rem",
      align: _v27.ALIGN.CENTER
    }];
  var _v59 = _v0.i(0),
    _v60 = _v0.i(0);
  let _v61 = ({
    isCsvProcessing: _v0,
    payloadUri: _v1,
    setDeleteRecordUri: _v2
  }) => {
    let {
        status: _v3
      } = (0, _v39.useEntityStore)(),
      {
        canGoLive: _v4
      } = (0, _v60.useTeamStore)(),
      _v5 = !_v4 || _v0 || _v3 === _v27.EVENT_STATUS.STARTED || _v3 === _v27.EVENT_STATUS.ENDED;
    return (0, _v1.jsx)(_v49.Tooltip, {
      label: _v15.default.RemoveRegistrant,
      children: (0, _v1.jsx)(_v59.IconButton, {
        "aria-label": _v15.default.RemoveRegistrant,
        variant: "tertiary",
        icon: (0, _v1.jsx)(_v52.MinusCircle, {}),
        isDisabled: _v5,
        onClick: () => !_v5 && _v2(_v1)
      })
    });
  };
  var _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  let _v70 = (0, _v68.bokeh)(_v5.Box, {
      baseStyle: {
        width: "100%",
        overflowY: "scroll",
        flex: 1
      }
    }),
    _v71 = (0, _v68.bokeh)(_v5.Box, {
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
    _v72 = (0, _v68.bokeh)(_v5.Box, {
      baseStyle: {
        cursor: "pointer",
        height: (0, _v9.rem)(60)
      }
    }),
    _v73 = (0, _v68.bokeh)(_v5.Box, {
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
    _v74 = (0, _v68.bokeh)(_v69.Text, {
      baseStyle: {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden"
      }
    }),
    _v75 = (0, _v68.bokeh)(_v5.Box, {
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
  var _v76 = _v0.i(0),
    _v77 = _v0.i(0);
  let _v78 = {
      mkcCode: "ent-upgrade-webinar-advanced-analytics"
    },
    _v79 = ({
      fields: _v0
    }) => {
      let {
          status: _v1
        } = (0, _v39.useEntityStore)(),
        _v2 = (0, _v14.useConfigStore)(_v0 => _v0.entityType),
        _v3 = _v2 === _v13.ENTITY_TYPE.VIDEO,
        {
          hasEnterprise: _v4
        } = (0, _v35.useEventCapability)(),
        _v5 = (0, _v11.useIsBokeh)();
      return (0, _v1.jsx)("thead", {
        children: (0, _v1.jsx)("tr", {
          children: _v0.filter(_v0 => !!_v0.isVisible && !_v27.HIDDEN_COLUMNS_FOR_ENTITY[_v2].includes(_v0.name)).map((_v0, _v1) => {
            let _v2 = _v0.align;
            return "viewPercentage" === _v0.name && _v1 !== _v27.EVENT_STATUS.ENDED && (_v2 = _v27.ALIGN.CENTER), (0, _v1.jsx)(_v75, {
              borderStyle: _v5 ? "none" : "solid",
              as: "th",
              width: _v0.minWidth || (0, _v9.rem)(36),
              children: (0, _v1.jsxs)(_v7.Flex, {
                justifyContent: _v2 || _v27.ALIGN.LEFT,
                alignItems: "center",
                children: [(0, _v1.jsx)(_v69.Text, {
                  variant: "body-md",
                  children: _v15.DISPLAY_MAP[_v0.name] ?? _v0.name
                }), _v3 && _v0.name === _v27.ATTENDEE_TABLE_FIELDS.VIEW_PERCENTAGE && (0, _v1.jsx)(_v49.Tooltip, {
                  maxWidth: (0, _v9.rem)(280),
                  label: _v15.default.VideoWatchTime,
                  children: (0, _v1.jsx)(_v5.Box, {
                    children: (0, _v1.jsx)(_v76.InfoCircle, {
                      ml: "x"
                    })
                  })
                }), !_v4 && _v0.name === _v27.ATTENDEE_TABLE_FIELDS.VIEW_PERCENTAGE && (0, _v1.jsx)(_v5.Box, {
                  pl: (0, _v9.rem)(8),
                  children: (0, _v1.jsx)(_v77.UpsellBadge, {
                    enterpriseFeatureOverride: _v2 === _v13.ENTITY_TYPE.EVENT ? _v15.default.AdvancedWebinarAnalytics : void 0,
                    modalConfig: _v2 === _v13.ENTITY_TYPE.EVENT ? _v78 : void 0
                  })
                })]
              })
            }, `table-head-cell-${_v1}`);
          })
        })
      });
    };
  var _v80 = _v0.i(0),
    _v81 = _v0.i(0);
  let _v82 = ({
      isLoading: _v0,
      noData: _v1
    }) => {
      let [_v2, _v3] = (0, _v2.useState)(!1),
        _v4 = (0, _v2.useRef)(null),
        _v5 = (0, _v2.useRef)(null),
        {
          hasUpsell: _v6,
          hasEnterprise: _v7
        } = (0, _v35.useEventCapability)(),
        _v8 = (0, _v14.useConfigStore)(_v0 => _v0.entityType),
        {
          isOwner: _v9
        } = (0, _v60.useTeamStore)(),
        {
          shareEntity: _v10,
          canShare: _v11
        } = (0, _v80.useShareEntity)();
      return (0, _v67.default)([_v4, _v5], () => {
        _v2 && _v3(!1);
      }, null, [_v2]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v71, {
          as: "table",
          children: [(0, _v1.jsx)(_v79, {
            fields: _v58
          }), _v0 && (0, _v1.jsx)(_v5.Box, {
            as: "tbody",
            overflowY: "scroll",
            children: Array.from(Array(_v27.ATTENDEES_PAGE_SIZE)).map((_v0, _v1) => (0, _v1.jsx)(_v72, {
              as: "tr",
              children: _v58.filter(_v0 => _v0.isVisible).map((_v0, _v1) => _v27.HIDDEN_COLUMNS_FOR_ENTITY[_v8].includes(_v0.name) ? null : (0, _v1.jsx)(_v73, {
                as: "td",
                w: _v0.minWidth,
                children: (0, _v1.jsx)(_v7.Flex, {
                  justifyContent: _v0.align,
                  children: (0, _v1.jsx)(_v5.Box, {
                    sx: (0, _v81.PlaceholderStyles)()
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
            children: _v6 ? (0, _v1.jsx)(_v7.Flex, {
              flexDir: "column",
              alignItems: "center",
              w: (0, _v9.rem)(350),
              children: (0, _v1.jsx)(_v66.Upsell, {
                hasEnterprise: _v7 ?? !1,
                isEntityOwner: _v9,
                showExploreButton: !1,
                entityType: _v8
              })
            }) : (0, _v1.jsxs)(_v7.Flex, {
              flexDir: "column",
              alignItems: "center",
              children: [(0, _v1.jsx)(_v65.Registration, {
                boxSize: (0, _v9.rem)(54),
                mb: 3
              }), (0, _v1.jsx)(_v63.Paragraph, {
                size: "md",
                textAlign: "center",
                w: (0, _v9.rem)(280),
                color: "text-secondary",
                children: _v15.default.TableEmptyState[_v8]
              }), _v11 && (0, _v1.jsx)(_v62.Button, {
                mt: (0, _v9.rem)(12),
                variant: "primary",
                leftIcon: (0, _v1.jsx)(_v64.Link, {}),
                onClick: () => _v10(),
                children: _v15.default.ShareEntity[_v8]
              })]
            })
          })
        })]
      });
    },
    _v83 = ({
      fields: _v0,
      payload: _v1,
      onRowClick: _v2,
      isLoading: _v3,
      isCsvProcessing: _v4,
      setDeleteRecordUri: _v5
    }) => {
      let {
          status: _v6
        } = (0, _v39.useEntityStore)(),
        _v7 = _v0.filter(_v0 => _v0.isVisible),
        _v8 = (0, _v2.useRef)(null),
        _v9 = (0, _v14.useConfigStore)(_v0 => _v0.entityType),
        _v10 = (0, _v2.useRef)(null),
        _v11 = (0, _v4.useViewer)();
      return ((0, _v2.useEffect)(() => {
        _v10.current?.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, [_v3]), !_v1.length || _v3) ? (0, _v1.jsx)(_v70, {
        children: (0, _v1.jsx)(_v82, {
          isLoading: _v3,
          noData: !0
        })
      }) : (0, _v1.jsx)(_v70, {
        ref: _v10,
        children: (0, _v1.jsxs)(_v71, {
          as: "table",
          children: [(0, _v1.jsx)(_v79, {
            fields: _v0
          }), (0, _v1.jsx)(_v5.Box, {
            overflowY: "scroll",
            ref: _v8,
            as: "tbody",
            children: _v1.filter(_v0 => !!_v0.uri).map(_v0 => (0, _v1.jsx)(_v72, {
              tabIndex: 0,
              as: "tr",
              onKeyDown: _v0 => {
                _v0.key === _v27.KEY_CODES.ENTER && _v2(_v0);
              },
              role: "group",
              children: _v7.filter(_v0 => !!_v0.isVisible && !_v27.HIDDEN_COLUMNS_FOR_ENTITY[_v9].includes(_v0.name)).map(_v0 => {
                var _v1;
                let _v2 = (Array.isArray(_v1 = _v0.apiName) ? _v1 : _v1.split(".").filter(_v0 => _v0)).flatMap(_v0 => "string" == typeof _v0 ? _v0.split(".") : _v0).reduce((_v0, _v1) => _v0 && _v0[_v1], _v0) ?? "-",
                  _v3 = "-" === _v2 ? "-" : _v0.displayFunc?.(_v2, _v0, _v11 ?? void 0) || _v2,
                  _v4 = _v0.align;
                return _v0.name === _v27.ATTENDEE_TABLE_FIELDS.VIEW_PERCENTAGE && _v6 !== _v27.EVENT_STATUS.ENDED && (_v4 = _v27.ALIGN.CENTER), (0, _v1.jsx)(_v73, {
                  as: "td",
                  w: _v0.minWidth || (0, _v9.rem)(36),
                  style: _v0.style,
                  onClick: () => {
                    _v0.name !== _v27.ATTENDEE_TABLE_FIELDS.MENU && _v2(_v0);
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
                    justifyContent: _v4 || _v27.ALIGN.LEFT,
                    children: _v0.name === _v27.ATTENDEE_TABLE_FIELDS.MENU ? (0, _v1.jsx)(_v5.Box, {
                      visibility: "hidden",
                      _groupHover: {
                        visibility: "visible"
                      },
                      children: (0, _v1.jsx)(_v61, {
                        isCsvProcessing: _v4,
                        payloadUri: _v0.uri,
                        setDeleteRecordUri: _v5
                      }, _v0.uri)
                    }) : (0, _v1.jsx)(_v74, {
                      variant: [_v27.ATTENDEE_TABLE_FIELDS.FIRST_NAME, _v27.ATTENDEE_TABLE_FIELDS.LAST_NAME].includes(_v0.name) ? "heading-sm" : "body-md",
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
    _v84 = {
      data: [],
      total: 0,
      page: 1,
      perPage: _v27.ATTENDEES_PAGE_SIZE,
      paging: {
        next: null,
        previous: null,
        first: null,
        last: null
      }
    },
    _v85 = () => {
      let {
          PROCESSING: _v0,
          PENDING: _v1
        } = _v27.CRM_CSV_STATUS,
        _v2 = (0, _v14.useConfigStore)(_v0 => _v0.entityType),
        _v3 = (0, _v10.useToast)(),
        {
          getFromCache: _v4,
          addToCache: _v5,
          deletePagesFromCache: _v6,
          deleteFromCache: _v7,
          deleteAllCache: _v8
        } = (0, _v36.useAttendeeCache)(),
        _v9 = (0, _v4.useViewer)(),
        _v10 = _v9?.jwt,
        _v11 = _v9?.locale,
        _v12 = _v9?.apiUrl,
        {
          uri: _v13,
          user: _v14,
          emailQuota: _v15,
          registrationData: _v16
        } = (0, _v39.useEntityStore)(),
        _v17 = (0, _v11.useIsBokeh)(),
        {
          setMessage: _v18
        } = (0, _v12.useUpsellContext)(),
        [_v19, _v20] = (0, _v2.useState)(_v84),
        [_v21, _v22] = (0, _v2.useState)(!1),
        [_v23, _v24] = (0, _v2.useState)(1),
        [_v25, _v26] = (0, _v2.useState)(null),
        [_v27, _v28] = (0, _v2.useState)(Math.ceil(_v19.total / _v27.ATTENDEES_PAGE_SIZE)),
        {
          hasAttendeeUpsell: _v29,
          hasUpsell: _v30,
          loading: _v31,
          registrantCapLowerWatermark: _v32,
          hasEmailQuotaUsed: _v33,
          hasLiveSubscription: _v34
        } = (0, _v35.useEventCapability)(),
        [_v35, _v36] = (0, _v26.useImportRegistrantReducer)(),
        {
          processingCRM: _v37,
          uploadCSVBanners: _v38,
          importCRMStatus: _v39
        } = _v35,
        _v40 = _v32 && _v29,
        _v41 = _v32 && _v34,
        _v42 = (0, _v2.useMemo)(() => {
          if (_v2 === _v13.ENTITY_TYPE.EVENT) {
            if (_v33) return _v15.default.EmailQuotaUpsell(_v15?.capping);else if (_v40) return _v15.default.PremiumRegistrantUpsell(_v16?.capping);else if (_v41) return _v15.default.EnterpriseRegistrantUpsell(_v16?.capping);
          }
        }, [_v15?.capping, _v41, _v33, _v40, _v16?.capping, _v2]);
      (0, _v2.useEffect)(() => {
        _v18(_v42);
      }, [_v18, _v42]);
      let [_v43, _v44] = (0, _v2.useState)(!0),
        [_v45, _v46] = (0, _v2.useState)(null),
        {
          fetchCRMInfo: _v47,
          fetchCRMStatus: _v48,
          importCRMData: _v49,
          CRMCalled: _v50,
          isCRMLoading: _v51,
          CRMStatusCalled: _v52,
          CRMStatusData: _v53,
          isCRMStatusLoading: _v54
        } = (() => {
          let [_v0, {
              loading: _v1,
              data: _v2,
              called: _v3
            }] = (0, _v37.useGetLeadCaptureResourceIdRegistrantStatusesLazy)(),
            [_v4, {
              loading: _v5,
              data: _v6,
              called: _v7
            }] = (0, _v37.useGetLeadCaptureResourceIdRegistrantStatusesLazy)(),
            {
              entityType: _v8,
              entityId: _v9
            } = (0, _v14.useConfigStore)(),
            _v10 = (0, _v2.useCallback)(() => !!_v9 && !!_v8 && (_v4({
              where: {
                resourceType: _v13.ENTITY_TO_PATH_MAP[_v8],
                resourceId: _v9
              },
              select: _v38.CRM_IMPORT_FIELDS
            }), !0), [_v9, _v4, _v8]),
            _v11 = (0, _v2.useCallback)(() => (_v9 && _v8 && _v0({
              where: {
                resourceType: _v13.ENTITY_TO_PATH_MAP[_v8],
                resourceId: _v9
              },
              select: _v38.CRM_IMPORT_FIELDS
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
              let _v0 = _v2?.data?.find(_v0 => _v0.type === _v27.IMPORT)?.emailProviderList;
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
        _v55 = (0, _v2.useCallback)(() => {
          _v48() && _v36({
            type: _v26.ACTION_TYPE.PROCESSING_CRM_DATA,
            payload: !0
          });
        }, [_v48, _v36]);
      (0, _v2.useEffect)(() => {
        _v13 && _v14?.uri && (_v39.length || _v50 || _v47(), _v52 || _v55());
      }, [_v13, _v14?.uri, _v50, _v52, _v39.length, _v47, _v55]);
      let _v56 = (0, _v2.useCallback)(() => {
        _v26(null), _v22(!1);
      }, []);
      (0, _v2.useEffect)(() => {
        _v28(Math.ceil(_v19.total / _v27.ATTENDEES_PAGE_SIZE)), _v24(_v19.page ?? 1);
      }, [_v19.total, _v19.page]), (0, _v2.useEffect)(() => {
        _v38 && _v44(_v38.some(_v0 => _v0.status === _v27.CRM_CSV_STATUS.PROCESSING || _v0.status === _v27.CRM_CSV_STATUS.UPLOADED) || !1);
      }, [_v38]), (0, _v2.useEffect)(() => {
        !_v31 && _v30 && _v44(!1);
      }, [_v31, _v30]);
      let _v57 = (0, _v2.useCallback)((_v0 = _v23, _v1 = !0, _v2 = !1, _v3 = !1) => {
        _v3 && _v8(), !_v30 && _v12 && _v10 && _v11 && (_v22(_v1), _v55(_v10, _v11, _v54(_v13, _v12, _v0), _v4, _v5, _v2).then(_v0 => {
          _v20(_v0), _v22(!1);
        }).catch(_v0 => {
          _v56(), _v22(!1), _v3({
            title: _v15.default.SomethingWentWrong,
            status: "error"
          });
        }));
      }, [_v2, _v23, _v30, _v8, _v13, _v14?.uri, _v12, _v10, _v11, _v4, _v5, _v56]);
      return (0, _v2.useEffect)(() => {
        if (_v52 && !_v54 && _v53) {
          let _v0 = _v53.data || [];
          !_v0.some(_v0 => [_v1, _v0].includes(_v0.status || "") && _v0.type === _v27.IMPORT) && _v37 && (_v57(_v23, !0, !0), _v47(), _v36({
            type: _v26.ACTION_TYPE.PROCESSING_CRM_DATA,
            payload: !1
          })), _v36({
            type: _v26.ACTION_TYPE.SET_CRM_STATUS,
            payload: _v0
          });
        }
      }, [_v53, _v54, _v52, _v36]), (0, _v2.useEffect)(_v57, [_v57]), (0, _v2.useEffect)(() => {
        _v26(null);
      }, []), (0, _v2.useEffect)(() => {
        _v46(null);
      }, [_v21]), (0, _v1.jsxs)(_v5.Box, {
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
          children: [(0, _v1.jsx)(_v16.GeneralAlerts, {}), !_v30 && !_v31 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v48, {
              importRegistrantState: _v35,
              dispatch: _v36,
              fetchAttendeeData: _v57,
              fetchCRMStatus: _v55,
              fetchCRMInfo: _v47
            }), (0, _v1.jsx)(_v34, {
              importRegistrantState: _v35,
              dispatch: _v36,
              fetchAttendeeData: _v57
            })]
          }), (0, _v1.jsx)(_v18.AttendeeHeader, {
            response: _v19,
            isLoading: _v21,
            registrationData: _v16,
            importRegistrantState: _v35,
            dispatch: _v36,
            isCsvProcessing: _v43,
            crmInfo: {
              fetchCRMStatus: _v55,
              CRMCalled: _v50,
              importCRMData: _v49,
              isCRMLoading: _v51,
              isCRMStatusLoading: _v54
            }
          }), (0, _v1.jsx)(_v83, {
            fields: _v58,
            payload: _v19 ? _v19.data : [],
            onRowClick: _v26,
            isLoading: _v21,
            isCsvProcessing: _v43,
            setDeleteRecordUri: _v46
          }), _v19.total > 0 && _v27 > 0 && (0, _v1.jsx)(_v7.Flex, {
            justifyContent: "space-between",
            borderStyle: _v17 ? "none" : "solid",
            alignItems: "center",
            borderTopWidth: (0, _v9.rem)(1),
            borderColor: "stroke",
            children: (0, _v1.jsx)(_v6.Center, {
              boxSize: "100%",
              p: (0, _v9.rem)(20),
              children: (0, _v1.jsx)(_v8.Pagination, {
                count: _v19.total,
                pageSize: _v27.ATTENDEES_PAGE_SIZE,
                page: _v23,
                onPageChange: ({
                  page: _v0
                }) => _v24(_v0)
              })
            })
          }), (0, _v1.jsx)(_v19.AttendeesInfoModal, {
            record: _v25,
            onClose: () => {
              _v26(null);
            },
            updateData: () => _v57(_v23, !1, !1)
          }), (0, _v1.jsx)(_v20.ImportRegistrant, {
            importRegistrantState: _v35,
            dispatch: _v36,
            totalAttendees: _v19.total,
            fetchCRMInfo: _v47,
            fetchCRMStatus: _v55
          })]
        }), (0, _v1.jsx)(_v17.AttendeeConfirmationModal, {
          deleteRecordUri: _v45,
          cancelDeleteAttendee: () => {
            _v46(null);
          },
          onDeleteSuccessCallback: () => {
            let _v0 = Object.assign({}, _v19);
            if (_v0.data = _v19.data.filter(_v0 => _v0.uri !== _v45), _v0.total = _v0.total - 1, _v20(_v0), _v46(null), _v3({
              title: _v15.default.SuccessfullyDeleted,
              status: "success"
            }), _v6(_v23), _v23 !== _v27) _v57(_v23, !1, !0);else if (_v12) {
              let _v0 = _v54(_v13, _v12, _v23);
              0 === _v0.data.length && 1 !== _v23 ? (_v24(_v23 - 1), _v7(_v0)) : _v5(_v0, _v0, !0);
            }
          }
        })]
      });
    };
  var _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0);
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
          }] = (0, _v91.useGetUserLiveEventLazy)(),
          [_v6, {
            loading: _v7,
            data: _v8
          }] = (0, _v92.useGetVideoLazy)(),
          [_v9, {
            data: _v10,
            loading: _v11
          }] = (0, _v89.useGetAlbumLazy)(),
          [_v12, {
            data: _v13
          }] = (0, _v90.useGetLeadCaptureResourceIdFormLazy)(),
          _v14 = (0, _v2.useCallback)(() => {
            if (_v0 && _v1) {
              switch (_v1) {
                case _v13.ENTITY_TYPE.EVENT:
                  _v3({
                    where: {
                      liveEventId: Number(_v0),
                      userId: _v2 || 0
                    },
                    select: _v38.EVENT_API_FIELDS_FOR_ATTENDEE_PAGE
                  });
                  break;
                case _v13.ENTITY_TYPE.VIDEO:
                  _v6({
                    where: {
                      videoId: Number(_v0)
                    },
                    select: _v38.VIDEO_API_FIELDS
                  });
                  break;
                case _v13.ENTITY_TYPE.SHOWCASE:
                  _v9({
                    where: {
                      albumId: _v0
                    },
                    select: _v38.SHOWCASE_API_FIELDS
                  });
              }
              _v12({
                where: {
                  resourceType: _v13.ENTITY_TO_PATH_MAP[_v1],
                  resourceId: _v0
                },
                select: _v38.FORM_FIELDS_FOR_ATTENDEE_PAGE
              });
            }
          }, [_v1, _v2, _v0, _v12, _v3, _v6, _v9]);
        return (0, _v2.useEffect)(_v14, [_v14]), (0, _v2.useMemo)(() => {
          switch (_v1) {
            case _v13.ENTITY_TYPE.EVENT:
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
            case _v13.ENTITY_TYPE.VIDEO:
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
            case _v13.ENTITY_TYPE.SHOWCASE:
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
      } : _v86.defaultValue, [_v8, _v9]);
    return ((0, _v2.useEffect)(() => {
      _v14.useConfigStore.setState({
        entityType: _v2,
        entityId: _v0,
        isRegistrationOn: _v3,
        canCompleteEvent: _v4,
        setSelectedSection: _v5
      });
    }, [_v4, _v0, _v2, _v8?.uri, _v3, _v5]), _v8) ? (0, _v1.jsx)(_v86.default, {
      initialValue: _v10,
      children: (0, _v1.jsx)(_v35.default, {
        children: (0, _v1.jsx)(_v87.default, {
          isOwner: _v8?.user?.uri === _v7?.uri,
          canEdit: !!_v8?.metadata?.interactions.edit?.uri,
          children: (0, _v1.jsx)(_v88.default, {
            entityLink: _v8?.uri,
            children: (0, _v1.jsx)(_v85, {})
          })
        })
      })
    }) : (0, _v1.jsx)(_v3.FullScreenLoader, {});
  }], 0);
}