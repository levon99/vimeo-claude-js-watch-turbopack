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
    _v22 = _v0.i(0);
  let _v23 = {
      MicrosoftTeams: (0, _v22.translate)("Microsoft Teams"),
      ConnectedApps: (0, _v22.translate)({
        singular: "Connected apps",
        dictionary: {
          es: {
            singular: "Aplicaciones en línea"
          },
          "de-DE": {
            singular: "Verknüpfte Apps"
          },
          "fr-FR": {
            singular: "Apps connectées"
          },
          "ja-JP": {
            singular: "アプリの接続"
          },
          "ko-KR": {
            singular: "연결된 앱"
          },
          "pt-BR": {
            singular: "Aplicativos Conectados"
          },
          "zh-CN": {
            singular: "已连接的应用"
          }
        }
      }),
      PermissionDenied: (0, _v22.translate)({
        singular: "Permission Denied",
        dictionary: {
          es: {
            singular: "Permiso denegado"
          },
          "de-DE": {
            singular: "Berechtigung verweigert"
          },
          "fr-FR": {
            singular: "Autorisation refusée"
          },
          "ja-JP": {
            singular: "拒否されました"
          },
          "ko-KR": {
            singular: "승인 거부"
          },
          "pt-BR": {
            singular: "Permissão Negada"
          },
          "zh-CN": {
            singular: "权限被拒绝"
          }
        }
      }),
      Errors: {
        RequestError: (0, _v22.translate)({
          singular: "There was an error completing your request. Please try again.",
          dictionary: {
            es: {
              singular: "Se ha producido un error al completar tu solicitud. Inténtalo de nuevo."
            },
            "de-DE": {
              singular: "Deine Anfrage konnte nicht abgeschlossen werden. Bitte versuche es erneut."
            },
            "fr-FR": {
              singular: "Une erreur s'est produite lors du traitement de votre requête. Veuillez réessayer."
            },
            "ja-JP": {
              singular: "リクエストのご対応中にエラーが発生しました。再度お試しください。"
            },
            "ko-KR": {
              singular: "요청을 완료하는 중 오류가 발생했습니다. 다시 시도하세요."
            },
            "pt-BR": {
              singular: "Houve um erro ao concluir sua solicitação. Por favor, tente novamente."
            },
            "zh-CN": {
              singular: "完成您的请求时出现错误。请重试。"
            }
          }
        }),
        UnauthorizedError: "Action not authorized"
      }
    },
    _v24 = () => {
      let {
          showError: _v0,
          errorType: _v1,
          actionError: _v2,
          hasFetchedTeamDetails: _v3,
          teamDetails: _v4,
          isTeamDetailsLoading: _v5,
          setShowError: _v6,
          fetchTeamDetails: _v7
        } = (0, _v2.useContext)(_v18.ManageTeamContext),
        _v8 = (0, _v2.useContext)(_v21.ViewerContext);
      return ((0, _v2.useEffect)(() => {
        _v8 && !_v3 && _v7(_v8);
      }, [_v8?.user, _v3]), !_v8 || _v5) ? (0, _v1.jsx)(_v6.Flex, {
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        children: (0, _v1.jsx)(_v10.Spinner, {
          size: "lg"
        })
      }) : !_v8?.user || _v0 && _v1 === _v16.ErrorType.UNAUTHORIZED && _v2 === _v17.ActionErrorType.FetchTeamMembers || (_v1 === _v16.ErrorType.NOT_FOUND || _v1 === _v16.ErrorType.UNAUTHORIZED) && _v2 === _v17.ActionErrorType.FetchTeamDetails || _v4?.status && (_v4.status === _v16.AdminStatus.Disconnected || _v4.status === _v16.AdminStatus.Pending) ? (0, _v1.jsx)(_v20.ErrorPage, {
        error: new _v11.ForbiddenError(_v23.PermissionDenied)
      }) : (0, _v1.jsxs)(_v5.Box, {
        width: "80%",
        maxWidth: (0, _v7.rem)(0),
        alignSelf: "center",
        mt: "6",
        overflowX: "hidden",
        overflowY: "scroll",
        mx: "auto",
        children: [(0, _v1.jsxs)(_v8.Breadcrumb, {
          children: [(0, _v1.jsx)(_v8.BreadcrumbItem, {
            maxW: "15rem",
            children: (0, _v1.jsx)(_v9.BreadcrumbLink, {
              href: "/settings/apps",
              children: _v23.ConnectedApps
            })
          }), (0, _v1.jsx)(_v8.BreadcrumbItem, {
            children: (0, _v1.jsx)(_v9.BreadcrumbLink, {
              color: "text-primary",
              children: _v23.MicrosoftTeams
            })
          })]
        }), _v0 && (0, _v1.jsx)(_v5.Box, {
          pt: "7",
          children: (0, _v1.jsx)(_v3.Alert, {
            status: "error",
            onClose: () => _v6(!1),
            children: (0, _v1.jsx)(_v4.AlertDescription, {
              children: _v1 === _v16.ErrorType.FORBIDDEN ? _v23.Errors.UnauthorizedError : _v23.Errors.RequestError
            })
          })
        }), (0, _v1.jsx)(_v5.Box, {
          pb: (0, _v7.rem)(128),
          pt: "4",
          children: (0, _v1.jsx)(_v14.ManageMsTeams, {})
        }), (0, _v1.jsx)(_v5.Box, {
          height: "60",
          children: _v8 && (0, _v1.jsx)(_v19.EssentialFooter, {
            ..._v8,
            enableQuotaMenu: !1
          })
        })]
      });
    };
  _v24.getLayout = _v0 => (0, _v1.jsxs)(_v15.ManageTeamProvider, {
    children: [(0, _v1.jsx)(_v13.DefaultNavigation, {}), (0, _v1.jsx)(_v5.Box, {
      mx: "auto",
      width: "100%",
      children: _v0
    })]
  }), (0, _v12.withPageSetup)({
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v24], 0);
}