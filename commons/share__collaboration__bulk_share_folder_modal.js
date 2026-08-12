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
      is_internal: !0,
      distribution_type: "share",
      sharee_id: null,
      sharee_email: null,
      is_send_email_notification: null,
      sharee_entity_permission: null,
      sharee_team_permission: null,
      embed_config: null,
      embed_custom_dimensions: null,
      number_of_items: null,
      target_file_details: null,
      target_quality: null,
      target_resolution: null,
      collection_type: null
    },
    _v24 = () => {
      let _v0,
        _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        {
          webContext: _v8,
          actionContext: _v9,
          teamContext: _v10,
          thirdPartyIntegrationContext: _v11,
          viewContext: _v12,
          productContext: _v13
        } = (_v0 = (0, _v22.useViewer)(), _v1 = _v0?.teamUser, _v2 = _v0?.team, _v3 = (0, _v17.buildProductAnalyticsBpContext)({
          product: "collaboration",
          feature: "share",
          modal_name: "bulk_share_folder_modal",
          location: "modal",
          device_type: (0, _v15.default)(),
          is_user_facing_data: !1,
          entity_type: "folder",
          element: "button",
          flow: "bulk_share_folder"
        }), _v4 = document.referrer ? new URL(document.referrer).pathname : null, _v5 = (0, _v21.buildWebBpContext)({
          page_name: "team_manager",
          path: window.location.href,
          referrer: document.referrer,
          referrer_page_name: _v4 ? function (_v0) {
            let _v1 = "other";
            _v0.match(/\/live\/broadcaster(\/event)?\/[0-9]+.*/) ? _v1 = "live_browser_studio" : _v0.match(/\/live\/rtmp\/event\/[0-9]+.*/) ? _v1 = "live_event_rtmp_page" : _v0.match(/\/events?\/[0-9]+.*/) || _v0.match(/\/live\/(guest\/)?([0-9a-zA-Z])?(\/)?.*/) ? _v1 = "live_event_view_page" : _v0.match(/^\/upload(\/.*)?$/) ? _v1 = "upload_page" : _v0.match(/\/manage\/folders/) ? _v1 = "video_library" : _v0.match(/^\/(home)?/) && (_v1 = "self_serve_logged_in_homepage");
            let _v2 = _v0.match(/\/manage\/(videos|events|showcases|webinars)/);
            if (_v2) switch (_v2[1]) {
              case "videos":
                _v1 = "video_library";
                break;
              case "showcases":
                _v1 = "showcases_library";
                break;
              case "events":
                _v1 = "event_library";
                break;
              case "webinars":
                _v1 = "webinars_library";
                break;
              default:
                _v1 = "other";
            }
            return _v1;
          }(_v4) : null
        }), _v6 = _v1 ? (0, _v18.buildTeamBpContextFromTeamUser)(_v1) : (0, _v18.buildTeamBpContextFromTeam)(_v2), _v7 = (0, _v16.buildActionBpContext)({
          action_type: "click",
          feature: null
        }), {
          productContext: _v3,
          webContext: _v5,
          teamContext: _v6,
          actionContext: _v7,
          viewContext: (0, _v20.buildViewBpContext)({
            view_type: "impression",
            feature: null
          }),
          thirdPartyIntegrationContext: (0, _v19.buildThirdPartyIntegrationBpContext)({
            is_integration: !1,
            integration_id: null,
            integration_name: null,
            managed_user_id: null,
            is_partner: null
          })
        });
      return {
        sendDistributionAnalyticsEvent: ({
          eventName: _v0,
          distributionActionFields: _v1,
          contextOverrides: {
            product: _v2,
            web: _v3,
            folder: _v4
          } = {}
        }) => {
          let _v5 = {
              product_analytics_context: {
                ..._v13.product_analytics_context,
                fields: {
                  ..._v13.product_analytics_context.fields,
                  ..._v2
                }
              }
            },
            _v6 = {
              ...{
                web_context: {
                  ..._v8.web_context,
                  fields: {
                    ..._v8.web_context.fields,
                    ..._v3
                  }
                }
              },
              ..._v5,
              ..._v10,
              ..._v9,
              ..._v12,
              ..._v11
            };
          _v4 && (_v6 = {
            ..._v6,
            ...(0, _v13.buildFolderBpContext)(_v4)
          });
          let _v7 = {
            ..._v23,
            ..._v1
          };
          return (0, _v14.sendBpEventWithContexts)(_v0, _v6, 9, _v7), !0;
        }
      };
    };
  _v0.s(["useDistributionAnalyticsEvent", 0, _v24], 0);
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = ({
    onCancel: _v0,
    onInvite: _v1,
    isLoading: _v2,
    isDisabled: _v3,
    cancelButtonLabel: _v4
  }) => (0, _v1.jsx)(_v29.ModalFooter, {
    className: "add-to-folders-modal-footer",
    pb: (0, _v8.rem)(21),
    children: (0, _v1.jsxs)(_v27.Flex, {
      alignItems: "flex-end",
      gap: (0, _v8.rem)(4),
      children: [(0, _v1.jsx)(_v28.Button, {
        variant: "secondary",
        onClick: _v0,
        children: _v4
      }), (0, _v1.jsx)(_v28.Button, {
        size: "md",
        isLoading: _v2,
        isDisabled: _v3,
        onClick: _v1,
        children: (0, _v11.translate)({
          singular: "Share",
          dictionary: {
            es: {
              singular: "Compartir"
            },
            "de-DE": {
              singular: "Teilen"
            },
            "fr-FR": {
              singular: "Partager"
            },
            "ja-JP": {
              singular: "共有"
            },
            "ko-KR": {
              singular: "공유"
            },
            "pt-BR": {
              singular: "Compartilhar"
            },
            "zh-CN": {
              singular: "分享"
            }
          }
        })
      })]
    })
  });
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  _v0.s(["AddToFoldersModalContent", 0, ({
    teamUsers: _v0,
    onClose: _v1,
    ownerId: _v2,
    onSuccess: _v3,
    actionButtonOverrides: _v4
  }) => {
    let _v5 = (0, _v32.getApplicableFolderPolicies)(_v0),
      _v6 = _v5.length ? _v5[0] : null,
      [_v7, _v8] = (0, _v2.useState)({
        isSelected: !1,
        children: {}
      }),
      [_v9, _v10] = (0, _v2.useState)(!1),
      [_v11, _v12] = (0, _v2.useState)([]),
      [_v13, _v14] = (0, _v2.useState)(_v6),
      {
        settings: _v15
      } = (0, _v12.useOrionSettings)(),
      _v16 = _v15.add_to_folders_modal_select_all_folders,
      _v17 = (0, _v2.useCallback)(_v0 => {
        (!_v0 || _v16) && (_v10(_v0), _v12([]));
      }, [_v16]),
      _v18 = (0, _v2.useMemo)(() => (0, _v33.getSelectedFolderUrisFromTree)(_v7), [_v7]),
      _v19 = (0, _v2.useMemo)(() => new Set(_v11.flatMap(_v0 => _v0.ancestorUris)), [_v11]),
      {
        excludedFolderUrisSet: _v20,
        includedFolderUrisSet: _v21
      } = (0, _v2.useMemo)(() => {
        if (!_v9) return {
          excludedFolderUrisSet: new Set(),
          includedFolderUrisSet: new Set()
        };
        let _v0 = new Set([...(0, _v33.getUnselectedUrisFromTree)(_v7), ..._v11.map(_v0 => _v0.uri)]);
        return {
          excludedFolderUrisSet: _v0,
          includedFolderUrisSet: new Set((0, _v33.getIncludedUrisForSelectAll)(_v7, _v0))
        };
      }, [_v9, _v7, _v11]),
      _v22 = (0, _v2.useCallback)(_v0 => {
        let _v1 = (0, _v33.getFolderPath)(_v0).slice(1).map(_v0 => _v0.uri);
        _v12(_v0 => _v0.some(_v0 => _v0.uri === _v0.uri) ? _v0 : [..._v0, {
          uri: _v0.uri,
          ancestorUris: _v1
        }]);
      }, []),
      _v23 = (0, _v2.useCallback)(_v0 => {
        _v12(_v0 => _v0.length ? _v0.filter(_v0 => _v0.uri !== _v0.uri && !_v0.ancestorUris.includes(_v0.uri)) : _v0);
      }, []),
      [_v24, {
        loading: _v25,
        error: _v26,
        complete: _v27
      }] = (0, _v25.usePutBatchFolderTeamPermissions)(),
      {
        sendDistributionAnalyticsEvent: _v28
      } = _v24(),
      _v29 = (0, _v2.useCallback)(async () => !!_v2 && !!_v13?.uri && (_v9 ? _v24(_v0, [], _v2, _v13.uri, !0, Array.from(_v20), Array.from(_v21)) : !!_v18.length && _v24(_v0, _v18, _v2, _v13.uri)), [_v2, _v18, _v20, _v21, _v13?.uri, _v0, _v24, _v9]);
    return (0, _v2.useEffect)(() => {
      _v27 && !_v26 && _v3();
    }, [_v27, _v26, _v3]), (0, _v1.jsxs)(_v7.ModalContent, {
      boxShadow: "none",
      minHeight: (0, _v8.rem)(350),
      borderRadius: "xl",
      children: [(0, _v1.jsxs)(_v6.ModalHeader, {
        p: 0,
        m: 0,
        children: [(0, _v1.jsx)(_v3.Header, {
          size: "md",
          position: "relative",
          p: (0, _v8.rem)(21),
          pb: "0",
          children: (0, _v11.translate)({
            singular: "Share folders",
            dictionary: {
              es: {
                singular: "Compartir carpetas"
              },
              "de-DE": {
                singular: "Ordner teilen"
              },
              "fr-FR": {
                singular: "Partage de dossiers"
              },
              "ja-JP": {
                singular: "フォルダーを共有"
              },
              "ko-KR": {
                singular: "폴더 공유"
              },
              "pt-BR": {
                singular: "Compartilhar pastas"
              },
              "zh-CN": {
                singular: "分享文件夹"
              }
            }
          })
        }), (0, _v1.jsx)(_v4.IconButton, {
          "aria-label": "close",
          icon: (0, _v1.jsx)(_v10.CloseX, {}),
          size: "sm",
          variant: "tertiary",
          onClick: _v1,
          position: "absolute",
          top: (0, _v8.rem)(16),
          right: (0, _v8.rem)(24)
        })]
      }), (0, _v1.jsxs)(_v5.ModalBody, {
        px: (0, _v8.rem)(21),
        py: 0,
        children: [(0, _v1.jsx)(_v9.Paragraph, {
          size: "lg",
          children: (0, _v11.translate)({
            singular: "Share folders with your team members to start collaborating right away.",
            dictionary: {
              es: {
                singular: "Comparte carpetas con los miembro del equipo para que comiencen a colaborar de inmediato."
              },
              "de-DE": {
                singular: "Teile Ordner mit deinen Teammitgliedern, um sofort mit der Zusammenarbeit zu beginnen."
              },
              "fr-FR": {
                singular: "Partagez des dossiers avec vos collaborateurs pour commencer à collaborer sans plus attendre."
              },
              "ja-JP": {
                singular: "チームメンバーとフォルダーを共有して、すぐにコラボレーションを始めます。"
              },
              "ko-KR": {
                singular: "팀원들과 폴더를 공유하여 바로 협업을 시작하세요."
              },
              "pt-BR": {
                singular: "Compartilhe pastas com os integrantes da equipe para começar a colaborar agora mesmo."
              },
              "zh-CN": {
                singular: "与团队成员分享文件夹，立即开始协作。"
              }
            }
          })
        }), (0, _v1.jsx)(_v26.AddToFoldersModalBodyContent, {
          error: _v26,
          ownerId: _v2,
          selectedFoldersTree: _v7,
          setSelectedFoldersTree: _v8,
          selectedPermissionPolicy: _v13,
          setSelectedPermissionPolicy: _v14,
          applicableFolderPolicies: _v5,
          teamUsers: _v0,
          isSelectAllMode: _v9,
          setIsSelectAllMode: _v17,
          onFolderDeselected: _v22,
          onFolderReselected: _v23,
          excludedFolderUrisSet: _v20,
          includedFolderUrisSet: _v21,
          excludedAncestorUrisSet: _v19
        })]
      }), (0, _v1.jsx)(_v30, {
        onCancel: () => {
          (0, _v31.sendCancelEvent)(_v4?.bigPictureOverrides), _v4?.bigPictureOverrides && _v28({
            eventName: "vimeo.dismiss_distribution_options",
            contextOverrides: {
              product: {
                copy: "Skip for now"
              }
            }
          }), _v1();
        },
        cancelButtonLabel: _v4?.cancelButtonLabel || (0, _v11.translate)({
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
        }),
        isLoading: _v25,
        isDisabled: _v25 || !_v9 && !_v18.length || !_v0.length || !_v13 || !!_v26,
        onInvite: async () => {
          (await _v29()) && (0, _v31.sendInviteEvents)(_v0, _v2, _v9 ? [] : _v18, _v4?.bigPictureOverrides, _v13?.name, _v28);
        }
      })]
    });
  }], 0);
}