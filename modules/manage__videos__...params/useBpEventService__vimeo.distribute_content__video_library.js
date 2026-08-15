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
    _v10 = _v0.i(0);
  let _v11 = _v9.BPEventService.init();
  _v0.s(["useBpEventService", 0, () => {
    let _v0 = (0, _v1.useContext)(_v4.ViewerContext),
      {
        isPrivateToUser: _v1,
        hasParent: _v2,
        folderId: _v3,
        resourceType: _v4
      } = (0, _v7.useGlobalStore)((0, _v2.useShallow)(({
        resourceProps: _v0
      }) => ({
        isPrivateToUser: _v0.data.isPrivateToUser,
        hasParent: _v0.data.hasParent,
        folderId: _v0.data.folderId,
        resourceType: _v0.resourceType
      }))),
      _v5 = (0, _v7.useGlobalStore)(({
        shared: _v0
      }) => _v0.data.teamPermissionLevel),
      _v6 = (0, _v1.useMemo)(() => _v5.ALLOWED_RESOURCE_FOR_COMMENT_POLICY.includes(_v4) ? {
        folder_id: _v3 ?? 0,
        is_subfolder: _v4 === _v8.ResourceType.Folder ? _v2 : null,
        is_private_to_me: _v1,
        access_permission_to_folder: _v5
      } : null, [_v3, _v2, _v1, _v4, _v5]),
      {
        hooks: {
          useEventStore: _v7
        }
      } = (0, _v1.useContext)(_v6.ResourceConfigContext),
      _v8 = (0, _v7.useGlobalStore)(({
        shared: _v0
      }) => _v0.data.page),
      {
        context: _v9
      } = _v7(),
      _v10 = ({
        eventName: _v0 = "vimeo.distribute_content",
        distAnalyticsProps: _v1,
        productAnalyticsCtx: _v2
      }) => {
        if (!_v11) return;
        let _v3 = "video_library" === _v8.PageMap[_v8] && _v1 ? "my_library" : _v8.PageMap[_v8];
        _v11.withWebCtx({
          page_name: _v3
        }).withActionCtx().withTeamCtx(_v0).withThirdPartyIntegrationCtx().withProductAnalyticsCtx(_v2).addResourceContext(_v9 ?? {}), _v6 && _v11.withFolderCtx(_v6), _v11.send({
          eventName: _v0,
          version: _v10.VIMEO_DISTRIBUTION_ACTIONS_VERSION,
          additionalFields: {
            ..._v10.DistributionActionDefaults,
            ...(_v1 ?? {})
          }
        });
      },
      _v11 = (0, _v1.useCallback)(({
        eventName: _v0 = "vimeo.change_link_privacy",
        productAnalyticsCtx: _v1,
        videoAnalyticsCtx: _v2,
        privacyActionFields: _v3
      }) => {
        _v11 && (_v11.withWebCtx({
          page_name: _v8.PageMap[_v8]
        }).withActionCtx().withTeamCtx(_v0).withProductAnalyticsCtx(_v1).withThirdPartyIntegrationCtx(), _v2 ? _v11.withVideoCtx(_v2) : _v11.addResourceContext(_v9 ?? {}), _v11.send({
          eventName: _v0,
          version: _v10.VIMEO_PRIVACY_ACTIONS_VERSION,
          additionalFields: {
            ..._v10.PrivacyActionDefaults,
            ...(_v3 ?? {})
          }
        }));
      }, [_v8, _v9, _v0]),
      _v12 = (0, _v1.useCallback)(({
        eventName: _v0 = "vimeo.open_tab",
        productAnalyticsCtx: _v1,
        shareModalActionFields: _v2
      }) => {
        _v11.withWebCtx({
          page_name: _v8.PageMap[_v8]
        }).withActionCtx().withTeamCtx(_v0).withProductAnalyticsCtx(_v1).withThirdPartyIntegrationCtx().addResourceContext(_v9 ?? {}), _v6 && _v11.withFolderCtx(_v6), _v11.send({
          eventName: _v0,
          version: _v10.VIMEO_SHARE_MODAL_ACTIONS_VERSION,
          additionalFields: {
            ..._v10.ShareModalActionDefaults,
            ...(_v2 ?? {})
          }
        });
      }, [_v6, _v8, _v9, _v0]),
      _v13 = (0, _v1.useCallback)(({
        eventName: _v0 = "vimeo.change_permission",
        productAnalyticsCtx: _v1,
        permissionActionFields: _v2
      }) => {
        _v11 && (_v11.withWebCtx({
          page_name: _v8.PageMap[_v8]
        }).withActionCtx().withTeamCtx(_v0).withProductAnalyticsCtx(_v1).withThirdPartyIntegrationCtx().addResourceContext(_v9 ?? {}), _v6 && _v11.withFolderCtx(_v6), _v11.send({
          eventName: _v0,
          version: _v10.VIMEO_PERMISSION_ACTIONS_VERSION,
          additionalFields: {
            ..._v10.PermissionActionDefaults,
            ...(_v2 ?? {})
          }
        }));
      }, [_v8, _v9, _v0, _v6]),
      _v14 = (0, _v1.useCallback)(({
        privacyActionFields: _v0,
        videoAnalyticsCtx: _v1
      }) => {
        _v11({
          eventName: "vimeo.change_link_privacy",
          productAnalyticsCtx: {
            product: "distribution",
            feature: "share_link",
            flow: "share_video_link",
            element: "dropdown",
            copy: "old_video_privacy"
          },
          videoAnalyticsCtx: _v1,
          privacyActionFields: _v0
        });
      }, [_v11]);
    return {
      trackChangeVideoPrivacyLink: _v14,
      trackCustomizeEmbed: ({
        privacyActionFields: _v0
      }) => {
        _v11({
          eventName: "vimeo.customize_embed",
          productAnalyticsCtx: {
            product: "distribution",
            feature: "embed",
            flow: "embed_modal",
            element: "button",
            copy: "Customize"
          },
          privacyActionFields: _v0
        });
      },
      trackEmbedBoxResize: ({
        privacyActionFields: _v0
      }) => {
        _v11({
          eventName: "vimeo.resize_embed_code_box",
          productAnalyticsCtx: {
            product: "distribution",
            feature: "embed",
            flow: "embed_modal",
            element: "text",
            copy: null
          },
          privacyActionFields: _v0
        });
      },
      trackChangeEmbedPrivacy: ({
        privacyActionFields: _v0
      }) => {
        _v11({
          eventName: "vimeo.change_embed_privacy",
          productAnalyticsCtx: {
            product: "distribution",
            feature: "embed",
            flow: "embed_modal",
            element: "text",
            copy: null
          },
          privacyActionFields: _v0
        });
      },
      trackHelpActionEvent: ({
        helpActionFields: _v0
      }) => {
        (({
          eventName: _v0 = "vimeo.trigger_help_center",
          productAnalyticsCtx: _v1,
          helpActionFields: _v2
        }) => {
          _v11 && (_v11.withWebCtx({
            page_name: _v8.PageMap[_v8]
          }).withActionCtx().withTeamCtx(_v0).withProductAnalyticsCtx(_v1).withThirdPartyIntegrationCtx().addResourceContext(_v9 ?? {}), _v11.send({
            eventName: _v0,
            version: _v10.VIMEO_HELP_CENTER_ACTIONS_VERSION,
            additionalFields: {
              ..._v10.HelpActionDefaults,
              ...(_v2 ?? {})
            }
          }));
        })({
          productAnalyticsCtx: {
            modal_name: "share_entity_modal",
            element: "button",
            copy: "find_out_more",
            feature: "embed",
            flow: null,
            product: "distribution"
          },
          helpActionFields: _v0
        });
      },
      trackCopyShareLink: ({
        resourceType: _v0,
        modalName: _v1,
        distAnalyticsProps: _v2
      }) => {
        _v10({
          productAnalyticsCtx: {
            flow: _v10.ResourceTypeEntityMap[_v0]?.linkFlow ?? null,
            element: "button",
            copy: "Copy link",
            modal_name: _v1,
            entity_type: _v10.ResourceTypeEntityMap[_v0]?.entityType
          },
          distAnalyticsProps: _v2
        });
      },
      trackAddingTeamMember: ({
        resourceType: _v0,
        distAnalyticsProps: _v1
      }) => {
        _v10({
          productAnalyticsCtx: {
            flow: _v10.ResourceTypeEntityMap[_v0]?.flow ?? null,
            element: "button",
            copy: "Send invite",
            entity_type: _v10.ResourceTypeEntityMap[_v0]?.entityType
          },
          distAnalyticsProps: _v1
        });
      },
      trackInviteUserToTeam: ({
        resourceType: _v0,
        distAnalyticsProps: _v1,
        targetTeamCtx: _v2,
        ..._v3
      }) => {
        let _v4 = {
          flow: _v10.ResourceTypeEntityMap[_v0]?.flow ?? null,
          element: "button",
          copy: "send_invite",
          feature: "teams",
          entity_type: _v10.ResourceTypeEntityMap[_v0]?.entityType
        };
        _v10({
          productAnalyticsCtx: _v4,
          distAnalyticsProps: _v1
        }), (({
          eventName: _v0 = "vimeo.invite_members_to_team",
          productAnalyticsCtx: _v1,
          targetTeamCtx: _v2,
          ..._v3
        }) => {
          _v11 && (_v11.withWebCtx({
            page_name: _v8.PageMap[_v8]
          }).withActionCtx().withTeamCtx(_v0).withProductAnalyticsCtx(_v1).withTargetTeamCtx(_v2 ?? {}), _v11.send({
            eventName: _v0,
            version: 4,
            additionalFields: {
              search_query: null,
              search_result_qty: null,
              action_name: "manage_members",
              action_value: null,
              entity_name: null,
              entity_id: null,
              tab_name: null,
              number_of_users_invited: null,
              new_role: null,
              old_role: null,
              includes_message: null,
              filter_name: null,
              filter_value: null,
              sorted_by_field: null,
              new_resource_permission: null,
              old_resource_permission: null,
              ..._v3
            }
          }));
        })({
          productAnalyticsCtx: _v4,
          targetTeamCtx: _v2,
          ..._v3
        });
      },
      trackClickShareLink: ({
        distAnalyticsProps: _v0
      }) => {
        _v10({
          productAnalyticsCtx: {
            flow: "share_video_link",
            element: "button",
            copy: "Send link",
            entity_type: "video"
          },
          distAnalyticsProps: _v0
        });
      },
      trackShareAnyway: ({
        distAnalyticsProps: _v0
      }) => {
        _v10({
          productAnalyticsCtx: {
            feature: "notification",
            flow: "share_video_link",
            element: "button",
            copy: "Share anyway",
            entity_type: "video"
          },
          distAnalyticsProps: _v0
        });
      },
      trackCancelShareConfirmation: ({
        distAnalyticsProps: _v0
      }) => {
        _v10({
          productAnalyticsCtx: {
            feature: "notification",
            flow: "share_video_link",
            element: "button",
            copy: "Cancel",
            entity_type: "video"
          },
          distAnalyticsProps: _v0
        });
      },
      trackCopyEmbedCode: ({
        modalName: _v0,
        distAnalyticsProps: _v1,
        resourceType: _v2
      }) => {
        _v10({
          productAnalyticsCtx: {
            feature: "embed",
            flow: "copy_embed_code",
            element: "button",
            copy: "copy_embed_code",
            product: "distribution",
            entity_type: _v10.ResourceTypeEntityMap[_v2]?.entityType ?? null,
            modal_name: _v0
          },
          distAnalyticsProps: _v1
        });
      },
      trackCloseShareModal: ({
        distAnalyticsProps: _v0,
        resourceType: _v1
      }) => {
        _v10({
          eventName: "vimeo.dismiss_distribution_options",
          productAnalyticsCtx: {
            flow: _v10.ResourceTypeEntityMap[_v1]?.closeFlow ?? null,
            element: "button",
            copy: "",
            product: "distribution",
            entity_type: _v10.ResourceTypeEntityMap[_v1]?.entityType ?? null,
            modal_name: "share_entity_modal"
          },
          distAnalyticsProps: _v0
        });
      },
      trackOpenInheritedAccessScreen: (0, _v1.useCallback)(({
        shareModalActionFields: _v0
      } = {}) => {
        _v12({
          eventName: "vimeo.open_inherited_access",
          productAnalyticsCtx: {
            element: "button",
            copy: ">",
            entity_type: _v4
          },
          shareModalActionFields: _v0
        });
      }, [_v4, _v12]),
      trackCopyEmbedCodeV2: ({
        distAnalyticsProps: _v0
      }) => {
        _v10({
          productAnalyticsCtx: {
            feature: "embed",
            flow: "copy_embed_code",
            element: "button",
            copy: "copy embed code",
            product: "distribution",
            entity_type: "video",
            modal_name: "share_entity_modal",
            location: "modal",
            device_type: (0, _v3.default)()
          },
          distAnalyticsProps: _v0
        });
      },
      trackChangePermission: (0, _v1.useCallback)(({
        resourceType: _v0,
        permissionActionFields: _v1,
        productAnalyticsCtx: _v2
      }) => {
        _v13({
          productAnalyticsCtx: {
            product: "collaboration",
            feature: "access",
            location: "modal",
            modal_name: "share_entity_modal",
            element: "dropdown",
            entity_type: _v10.ResourceTypeEntityMap[_v0]?.entityType,
            ..._v2
          },
          permissionActionFields: _v1
        });
      }, [_v13]),
      trackSharingSuggestionCount: ({
        resourceType: _v0,
        modalName: _v1,
        shareSuggestionsFields: _v2
      }) => {
        _v11 && (_v11.withWebCtx({
          page_name: _v8.PageMap[_v8]
        }).withActionCtx().withTeamCtx(_v0).withProductAnalyticsCtx({
          flow: _v10.ResourceTypeEntityMap[_v0]?.linkFlow ?? null,
          element: "dropdown",
          modal_name: _v1,
          entity_type: _v10.ResourceTypeEntityMap[_v0]?.entityType,
          location: "share_entity_modal",
          product: "collaboration",
          feature: "share"
        }), _v11.send({
          eventName: "vimeo.suggested_users_impression",
          version: 1,
          additionalFields: _v2
        }));
      },
      trackSharingSuggestionClick: ({
        resourceType: _v0,
        modalName: _v1,
        shareSuggestionsFields: _v2
      }) => {
        _v11 && (_v11.withWebCtx({
          page_name: _v8.PageMap[_v8]
        }).withActionCtx().withTeamCtx(_v0).withProductAnalyticsCtx({
          flow: _v10.ResourceTypeEntityMap[_v0]?.linkFlow ?? null,
          element: "dropdown",
          modal_name: _v1,
          entity_type: _v10.ResourceTypeEntityMap[_v0]?.entityType,
          location: "share_entity_modal",
          product: "collaboration",
          feature: "share"
        }), _v11.send({
          eventName: "vimeo.suggested_user_click",
          version: 1,
          additionalFields: _v2
        }));
      }
    };
  }]);
}