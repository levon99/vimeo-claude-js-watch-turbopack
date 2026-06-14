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
    _v24 = _v0.i(0);
  let _v25 = _v0 => new _v23.BokehDate.DateFormatter("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(_v0?.toDate(_v23.BokehDate.getLocalTimeZone())),
    _v26 = (_v0, _v1) => {
      let {
          day: _v2,
          month: _v3,
          year: _v4
        } = _v0.value[0],
        _v5 = new _v23.BokehDate.CalendarDate(_v4, _v3, _v2),
        _v6 = _v1 ? new _v23.BokehDate.Time(23, 59, 59, 999) : new _v23.BokehDate.Time(0, 0, 0, 0);
      return _v23.BokehDate.toCalendarDateTime(_v5, _v6);
    },
    _v27 = (_v0, _v1 = !0, _v2 = !1) => {
      let _v3 = _v2 ? new _v23.BokehDate.Time(23, 59, 59, 999) : new _v23.BokehDate.Time(0, 0, 0, 0);
      if (!_v0) {
        let {
          startOfYear: _v0,
          today: _v1,
          getLocalTimeZone: _v2
        } = _v23.BokehDate;
        return _v1 ? _v23.BokehDate.toCalendarDateTime(_v0(_v1(_v2()))) : _v23.BokehDate.toCalendarDateTime(_v1(_v2()), _v3);
      }
      return _v23.BokehDate.toCalendarDateTime(_v0, _v3);
    };
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = "downloading-csv";
  _v0.s(["DownloadRegistrantModal", 0, ({
    isOpen: _v0,
    onClose: _v1
  }) => {
    let [_v2, _v3] = (0, _v2.useState)(),
      [_v4, _v5] = (0, _v2.useState)(!1),
      [_v6, _v7] = (0, _v2.useState)(!1),
      [_v8, _v9] = (0, _v2.useState)(),
      [_v10, _v11] = (0, _v2.useState)(),
      _v12 = (0, _v18.useIsBokeh)(),
      _v13 = (0, _v17.useToast)(),
      {
        sendBpEvent: _v14
      } = (0, _v21.useAnalytics)(),
      {
        user: _v15
      } = (0, _v20.useViewer)(),
      {
        fetchAndDownload: _v16,
        isLoading: _v17,
        error: _v18
      } = (() => {
        let [_v0, _v1] = (0, _v2.useState)(!1),
          [_v2, _v3] = (0, _v2.useState)(null),
          {
            jwt: _v4,
            locale: _v5,
            apiUrl: _v6,
            teamUser: _v7,
            user: _v8
          } = (0, _v20.useViewer)(),
          {
            data: _v9,
            isLoading: _v10
          } = (0, _v22.useGetUser)(() => {
            let _v0 = _v7?.ownerId;
            return _v0 ? {
              select: ["metadata.connections.leadCaptureForm"],
              where: {
                userId: _v0
              }
            } : null;
          }),
          _v11 = (0, _v2.useCallback)((_v0, _v1) => {
            try {
              let _v0 = window.URL.createObjectURL(_v0),
                _v1 = document.createElement("a");
              _v1.href = _v0, _v1.download = _v1, _v1.style.display = "none", document.body.appendChild(_v1), _v1.click(), document.body.removeChild(_v1), window.URL.revokeObjectURL(_v0);
            } catch (_v0) {
              throw console.error("Download file error:", _v0), _v0;
            }
          }, []),
          _v12 = (0, _v2.useCallback)(_v0 => {
            let _v1 = _v0.headers.get("Content-Type") || "";
            return _v1.includes("application/json") ? "json" : _v1.includes("text/csv") ? "csv" : "unknown";
          }, []);
        return {
          fetchAndDownload: (0, _v2.useCallback)(async (_v0, _v1, _v2 = {}) => {
            _v1(!0), _v3(null);
            let _v3 = _v9?.metadata?.connections?.leadCaptureForm?.options?.length ? _v7?.ownerId ?? _v8?.id : _v8?.id,
              _v4 = `//${_v6}/users/${_v3}/lead_capture/registrants/export?jwt_token=${_v4}&report_type=form_submission_report&locale=${_v5}`;
            _v0 && _v1 && (_v4 = `${_v4}&from=${_v0}&to=${_v1}`);
            try {
              let _v0 = new URL(_v4, window.location.origin).toString(),
                _v1 = {
                  method: _v2.method || "GET",
                  headers: {
                    Accept: "*/*",
                    ..._v2.headers
                  },
                  credentials: _v2.credentials || "same-origin",
                  mode: "cors"
                },
                _v2 = await fetch(_v0, _v1);
              if (!_v2.ok) {
                let _v0 = Error(`HTTP error! status: ${_v2.status}`);
                throw _v0.status = _v2.status, _v0;
              }
              switch (_v12(_v2)) {
                case "json":
                  if (202 === _v2.status) {
                    let _v0 = await _v2.json();
                    return {
                      responseType: "json",
                      status: "success",
                      data: _v0
                    };
                  }
                  return _v3(Error("Invalid response status")), null;
                case "csv":
                  let _v0,
                    _v1 = (_v0 = new _v23.BokehDate.DateFormatter("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    }).format(new Date()), `All Vimeo registration data – ${_v0}.csv`),
                    _v2 = await _v2.blob();
                  return _v11(_v2, _v1), {
                    responseType: "csv",
                    filename: _v1,
                    contentType: _v2.headers.get("Content-Type")
                  };
                default:
                  throw Error("Unsupported response type");
              }
            } catch (_v0) {
              return _v3(_v0), null;
            } finally {
              _v1(!1);
            }
          }, [_v11, _v12, _v9, _v10]),
          isLoading: _v0,
          error: _v2
        };
      })(),
      _v19 = async () => {
        let _v0 = _v8?.toDate("UTC")?.toISOString(),
          _v1 = _v10?.toDate("UTC")?.toISOString(),
          _v2 = await _v16(_v0, _v1);
        _v2 && (_v13.close(_v30), "csv" === _v2.responseType ? _v13({
          title: _v29.default.YourDownloadWillBeReady,
          isClosable: !1
        }) : "json" === _v2.responseType && _v13({
          title: (0, _v19.translate)({
            singular: "Emailing CSV file to: {UL}{/UL}",
            replacements: {
              UL: () => (0, _v1.jsx)("u", {
                children: _v15?.email
              })
            },
            dictionary: {
              es: {
                singular: "Enviando el archivo CSV por correo electrónico a: {UL}{/UL}"
              },
              "de-DE": {
                singular: "CSV-Datei wird per E-Mail gesendet an: {UL}{/UL}"
              },
              "fr-FR": {
                singular: "Envoi du fichier CSV par e-mail à : {UL}{/UL}"
              },
              "ja-JP": {
                singular: "{UL}{/UL}宛にCSVファイルをメールで送信しています"
              },
              "ko-KR": {
                singular: "{UL}{/UL}에게 CSV 파일을 이메일로 보냅니다"
              },
              "pt-BR": {
                singular: "Enviando o arquivo CSV por e-mail para: {UL}{/UL}"
              },
              "zh-CN": {
                singular: "正在通过电子邮件将 CSV 文件发送至：{UL}{/UL}"
              }
            }
          }),
          isClosable: !1
        }));
      };
    (0, _v2.useEffect)(() => {
      _v17 && _v13({
        title: _v29.default.ExportingData,
        id: _v30,
        isClosable: !1
      }), _v18 && (_v13.close(_v30), _v13({
        title: (0, _v19.translate)({
          singular: "Couldn’t export data. Try again or {LINK}contact us{/LINK} for help.",
          replacements: {
            LINK: _v0 => (0, _v1.jsx)(_v6.Link, {
              href: _v24.HELP_URL,
              fontSize: "body-md",
              variant: "inline-primary",
              color: "grey.900",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "Error al exportar los datos. Inténtelo de nuevo o {LINK}póngase en contacto con nosotros{/LINK} para obtener ayuda."
            },
            "de-DE": {
              singular: "Daten konnten nicht exportiert werden. Versuchen Sie es erneut oder {LINK}kontaktieren Sie uns{/LINK} für Hilfe."
            },
            "fr-FR": {
              singular: "Impossible d’exporter les données. Réessayez ou {LINK}contactez-nous{/LINK} pour obtenir de l'aide."
            },
            "ja-JP": {
              singular: "データをエクスポートできませんでした。もう一度お試しいただくか、{LINK}お問い合わせ{/LINK}ください。"
            },
            "ko-KR": {
              singular: "데이터를 내보낼 수 없습니다. 다시 시도하거나 {LINK}당사에 문의{/LINK}하여 도움을 받으세요."
            },
            "pt-BR": {
              singular: "Não foi possível exportar os dados. Tente novamente ou {LINK}entre em contato conosco{/LINK} para obter ajuda."
            },
            "zh-CN": {
              singular: "无法导出数据。请重试或{LINK}联系我们{/LINK}寻求帮助。"
            }
          }
        }),
        variant: "warning",
        isClosable: !1
      }));
    }, [_v17, _v18]);
    let _v20 = () => {
        _v3(_v24.ALL_TIME), _v1();
      },
      _v21 = _v0 => {
        let _v1 = document.querySelectorAll(`[id*="${_v0}::"][id*="::positioner"]`);
        if (_v1) for (let _v0 of _v1) _v0.style.zIndex = "10000";
      };
    return (0, _v2.useEffect)(() => {
      let _v0;
      _v21("datepicker"), _v0 = /^datePicker::[a-zA-Z0-9]+::input:\d+$/i, document.querySelectorAll('[id*="datepicker::"]').forEach(_v0 => {
        let _v1 = _v0.id;
        _v0.test(_v1) && (_v0.disabled = !0, _v0.style.opacity = "1", _v0.style.cursor = "default");
      });
    }, [_v4]), (0, _v2.useEffect)(() => {
      _v21("select");
    }, [_v6]), (0, _v2.useEffect)(() => {
      if (_v2) switch (_v2) {
        case _v24.ALL_TIME:
          _v9(void 0), _v11(void 0);
          break;
        case _v24.CUSTOM:
          _v9(_v27()), _v11(_v27(void 0, !1, !0));
          break;
        default:
          let {
            startDate: _v0,
            endDate: _v1
          } = (_v0 => {
            let _v1,
              _v2,
              {
                Time: _v3,
                toCalendarDateTime: _v4,
                today: _v5
              } = _v23.BokehDate,
              _v6 = _v5("UTC");
            switch (_v0) {
              case _v24.TODAY:
                _v1 = _v6, _v2 = _v6;
                break;
              case _v24.YESTERDAY:
                _v1 = _v6.subtract({
                  days: 1
                }), _v2 = _v6.subtract({
                  days: 1
                });
                break;
              case _v24.LAST_7_DAYS:
                _v1 = _v6.subtract({
                  days: 6
                }), _v2 = _v6;
                break;
              case _v24.LAST_30_DAYS:
                _v1 = _v6.subtract({
                  days: 29
                }), _v2 = _v6;
                break;
              case _v24.LAST_365_DAYS:
                _v1 = _v6.subtract({
                  days: 364
                }), _v2 = _v6;
                break;
              default:
                throw Error("Invalid period");
            }
            return {
              startDate: _v4(_v1, new _v3(0, 0, 0, 0)),
              endDate: _v4(_v2, new _v3(23, 59, 59, 999))
            };
          })(_v2);
          _v9(_v0), _v11(_v1);
      }
    }, [_v2]), (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsxs)(_v7.Modal, {
        isOpen: _v0,
        onClose: _v20,
        children: [(0, _v1.jsx)(_v12.ModalOverlay, {}), (0, _v1.jsxs)(_v9.ModalContent, {
          maxWidth: (0, _v13.rem)(480),
          containerProps: {
            flexDirection: "column",
            justifyContent: "flex-start",
            marginTop: (0, _v13.rem)(80)
          },
          children: [(0, _v1.jsx)(_v11.ModalHeader, {
            fontWeight: "medium",
            fontSize: (0, _v13.rem)(20),
            paddingBottom: 0,
            marginBottom: _v12 ? "0" : "100",
            children: _v29.default.ExportData
          }), (0, _v1.jsxs)(_v8.ModalBody, {
            paddingBottom: "xs",
            children: [(0, _v1.jsx)(_v16.Text, {
              variant: "body-md",
              children: _v29.default.ExportFileDesc
            }), (0, _v1.jsx)(_v16.Text, {
              variant: "heading-sm",
              marginTop: (0, _v13.rem)(10),
              marginBottom: "xs",
              children: _v29.default.DateRange
            }), (0, _v1.jsx)(_v14.Select, {
              items: _v24.selectRangeValues,
              placeholder: _v29.default.AllTime,
              onValueChange: _v0 => _v3(_v0.value[0]),
              onClick: () => _v7(_v0 => !_v0)
            }), _v2 === _v24.CUSTOM && (0, _v1.jsxs)(_v15.Stack, {
              direction: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: "md",
              children: [(0, _v1.jsxs)(_v3.Box, {
                children: [(0, _v1.jsx)(_v16.Text, {
                  variant: "heading-sm",
                  marginTop: "md",
                  marginBottom: "xs",
                  children: _v29.default.Start
                }), (0, _v1.jsx)(_v5.DatePicker, {
                  dir: "ltr",
                  width: (0, _v13.rem)(_v12 ? 212 : 204),
                  value: [_v27(_v8)],
                  onClick: () => _v5(_v0 => !_v0),
                  format: _v25,
                  onValueChange: _v0 => {
                    _v9(_v26(_v0, !1));
                  },
                  max: _v27(_v10)
                })]
              }), (0, _v1.jsxs)(_v3.Box, {
                children: [(0, _v1.jsx)(_v16.Text, {
                  variant: "heading-sm",
                  marginTop: "md",
                  marginBottom: "xs",
                  children: _v29.default.End
                }), (0, _v1.jsx)(_v5.DatePicker, {
                  dir: "ltr",
                  width: (0, _v13.rem)(_v12 ? 212 : 204),
                  value: [_v27(_v10, !1, !0)],
                  onClick: () => _v5(_v0 => !_v0),
                  format: _v25,
                  onValueChange: _v0 => {
                    _v11(_v26(_v0, !0));
                  },
                  min: _v27(_v8),
                  max: _v27(_v10, !1, !0)
                })]
              })]
            })]
          }), (0, _v1.jsxs)(_v10.ModalFooter, {
            borderTop: "none",
            paddingTop: "md",
            children: [(0, _v1.jsx)(_v4.Button, {
              variant: "tertiary",
              onClick: _v20,
              children: _v29.default.Cancel
            }), (0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              onClick: () => {
                _v14({
                  eventName: _v28.BP_EVENT_NAMES.REGISTRANTS_EXPORT_CSV,
                  element: _v28.ELEMENT.BUTTON,
                  location: _v28.LOCATION.TOP_TOOLBAR,
                  copy: _v28.COPY.EXPORT_CSV,
                  pageName: _v28.PAGE_NAMES.REGISTRATION_MANAGER
                }), _v19(), _v20();
              },
              children: _v29.default.ExportData
            })]
          })]
        })]
      })
    });
  }], 0);
}