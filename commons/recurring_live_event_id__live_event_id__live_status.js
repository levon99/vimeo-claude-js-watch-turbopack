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
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  let _v37 = (0, _v31.createNullObject)(["recurring_live_event_id", "live_event_id", "live_status", "live_production_method", "encoder_type", "audience_type", "lead_source", "event_privacy", "live_feature", "is_guest_speaker"]),
    _v38 = () => {
      let _v0 = (0, _v35.useGlobalStore)(_v0 => _v0.entityType),
        _v1 = (0, _v35.useGlobalStore)(_v0 => _v0.entityOwnerId),
        _v2 = (0, _v35.useGlobalStore)(_v0 => _v0.entityId),
        _v3 = (0, _v35.useGlobalStore)(_v0 => _v0.entity.duration) || null,
        _v4 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.uuid),
        _v5 = (0, _v35.useGlobalStore)(_v0 => _v0.entity?.privacy?.view),
        _v6 = (0, _v35.useGlobalStore)(_v0 => _v0.entity?.privacy?.embed),
        _v7 = (0, _v35.useGlobalStore)(_v0 => !!_v0.leadCapture.privacyPolicyUrl),
        _v8 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.emailLists || []),
        _v9 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.customFields || []),
        _v10 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.hiddenFields || []),
        _v11 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.logo?.isActive),
        _v12 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.background?.isActive),
        _v13 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.layout),
        _v14 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.isSkippable) ?? !1,
        _v15 = (0, _v32.useViewer)()?.teamUser,
        {
          dropdownFieldsCount: _v16,
          textFieldsCount: _v17
        } = (0, _v2.useMemo)(() => ({
          dropdownFieldsCount: _v9.filter(_v0 => _v0.type === _v34.CustomFieldTypes.Dropdown).length || 0,
          textFieldsCount: _v9.filter(_v0 => _v0.type === _v34.CustomFieldTypes.Text).length || 0
        }), [_v9]),
        _v18 = _v10.length,
        _v19 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.placement),
        _v20 = (0, _v2.useMemo)(() => {
          if (_v0 === _v6.ENTITY_TYPE.EVENT) switch (_v5) {
            case "anybody":
              return "public";
            case "nobody":
              return "private";
            case "password":
              return "password";
            case "unlisted":
              return "unlisted";
            case "embed_only":
              return "hide_from_vimeo";
          }
          return null;
        }, [_v5, _v0]),
        _v21 = (0, _v2.useMemo)(() => Array.from(new Set(_v8.map(_v0 => _v0.providerId ? _v6.PROVIDER_ID_TO_SERVICE_ID_MAPPING[parseInt(_v0.providerId)] : null).filter(_v0 => !!_v0))), [_v8]),
        _v22 = _v21.length > 0;
      return {
        sendViewerBpEvent: ({
          eventName: _v0
        }) => {
          let _v1,
            _v2,
            _v3 = _v33.BP_EVENT_VERSIONS[_v0],
            _v4 = {
              ...(_v0 === _v33.BP_EVENT_NAMES.REGISTRATION_FORM_COMPLETE && (0, _v25.buildActionBpContext)({
                action_type: "click",
                feature: null
              })),
              ...(_v0 === _v33.BP_EVENT_NAMES.REGISTRATION_FORM_VIEWED && (_v1 = {
                view_type: "impression",
                feature: null,
                is_empty_state: null
              }, {
                view_context: new _v36.EventContext("view_context", 7, _v1)
              })),
              ...(0, _v30.buildWebBpContext)({
                path: window.location.href,
                page_name: _v0 === _v6.ENTITY_TYPE.EVENT ? "live_event_view_page" : "viewer_home"
              }),
              ...(0, _v26.buildProductAnalyticsBpContext)({
                product: "gates",
                feature: "registration",
                location: "player",
                element: "vimeo.registration_form_complete" === _v0 ? "button" : null,
                copy: "vimeo.registration_form_complete" === _v0 ? "register" : null,
                device_type: (0, _v24.default)(),
                entity_type: (0, _v17.getFormattedEntityType)(_v0),
                scrolling_percentage: null
              }),
              ...(_v0 === _v6.ENTITY_TYPE.VIDEO && (0, _v29.buildVideoBpContext)({
                video_id: Number(_v2),
                video_privacy: _v5,
                video_embed_privacy: _v6,
                duration: _v3
              })),
              ...(_v0 === _v6.ENTITY_TYPE.EVENT && (_v2 = {
                recurring_live_event_id: _v2,
                event_privacy: _v20,
                live_feature: "registration",
                audience_type: "live_event"
              }, {
                live_context: new _v36.EventContext("live_context", 6, {
                  ..._v37,
                  ..._v2
                })
              })),
              ...(0, _v28.buildThirdPartyIntegrationBpContext)({
                is_integration: _v22,
                integration_id: null,
                integration_name: null,
                managed_user_id: null,
                app_id: null,
                integration_type: null,
                partner_bucket: null,
                is_partner: null
              }),
              ...(0, _v27.buildTeamBpContextFromTeamUser)(_v15 ?? void 0)
            };
          (0, _v31.sendBpEventWithContexts)(_v0, _v4, _v3, {
            form_id: _v4,
            provider_name: _v21,
            dropdown_fields_count: _v16,
            text_fields_count: _v17,
            hidden_fields_count: _v18,
            layout: _v13,
            is_logo_added: _v11,
            is_background_added: _v12,
            is_skippable: _v14,
            placement: _v0 === _v6.ENTITY_TYPE.VIDEO ? _v19 : null,
            is_privacy_policy_url: _v7,
            view_location: "local",
            prefilled_data: null,
            prefilled_from: null,
            owner_id: null != _v1 ? String(_v1) : null
          });
        }
      };
    };
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = ({
    currentStep: _v0,
    totalStep: _v1
  }) => {
    let _v2 = (0, _v39.useViewerStrings)(),
      _v3 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.primaryButtonStyle.buttonColor),
      _v4 = (0, _v43.useRtfStore)(_v0 => _v0.buttonLivePreview.showPreview),
      _v5 = (0, _v43.useRtfStore)(_v0 => _v0.buttonLivePreview.selectedButton),
      _v6 = (0, _v43.useRtfStore)(_v0 => _v0.buttonLivePreview.buttonColor),
      _v7 = (_v4 && _v5?.role === _v34.BUTTON_ROLES.PRIMARY ? _v6 : _v3) || "blue.500";
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v3.Box, {
        pb: "sm",
        fontSize: "body-lg",
        zIndex: 100,
        pointerEvents: "none",
        children: _v2.StepXofY(_v0, _v1)
      }), (0, _v1.jsx)(_v42.Progress, {
        pointerEvents: "none",
        zIndex: 1,
        colorScheme: _v7,
        sx: {
          "[role=progressbar]": {
            bgColor: _v7
          }
        },
        size: "xs",
        value: _v0 / _v1 * 100,
        background: "gray.100"
      })]
    });
  };
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  let _v52 = _v0 => (0, _v1.jsx)(_v51.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M18.562 14.634 14 12l4.562-2.634a1 1 0 0 0-1-1.732L13 10.268V5a1 1 0 0 0-2 0v5.268L6.438 7.634a1 1 0 0 0-1 1.732L10 12l-4.562 2.634a1 1 0 0 0 1 1.732L11 13.732V19a1 1 0 0 0 2 0v-5.268l4.562 2.634a1 1 0 0 0 1-1.732Z",
      fill: "currentColor"
    })
  });
  _v0.s(["Asterisk", 0, _v52], 0);
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(916),
    _v61 = _v0.i(0);
  let _v62 = (0, _v2.forwardRef)(({
    content: _v0,
    editable: _v1 = !1,
    maxCharacter: _v2 = 0,
    scrollTopOnBlur: _v3 = !1,
    onBlur: _v4 = () => void 0,
    onFocus: _v5 = () => void 0,
    onKeyDown: _v6 = () => void 0,
    onSelectionUpdate: _v7 = () => void 0,
    onUpdate: _v8 = () => void 0,
    ..._v9
  }, _v10) => {
    let _v11 = (0, _v2.useRef)(null),
      _v12 = (0, _v57.useEditor)({
        extensions: [_v58.default, _v56.default, _v54.default, _v60.Underline, _v60.Color, _v60.NoNewLine, _v55.default.configure({
          openOnClick: !1
        }), _v60.TextAlign.configure({
          types: ["heading", "paragraph"],
          alignments: ["left", "center", "right", "justify"]
        }), _v60.CharacterCount.configure({
          limit: _v1 ? _v2 : 0
        }), _v60.PasteHandler.configure({
          stripStyles: !0
        })],
        content: `${_v59.default.sanitize(_v0, {
          ADD_ATTR: ["target"]
        })}`,
        onFocus: () => {
          _v5();
        },
        onBlur: () => {
          _v4(_v12?.getHTML()), _v3 && _v11.current && (_v11.current.scrollTop = 0);
        },
        onUpdate: _v8,
        onSelectionUpdate: _v7,
        editable: _v1
      });
    return (0, _v2.useImperativeHandle)(_v10, () => ({
      getHTML: () => _v12?.getHTML(),
      setHTML: _v0 => _v12?.chain().setMeta(_v34.CHARACTER_LIMIT_BYPASS_META, !0).setContent(_v0).run(),
      addLink(_v0) {
        _v12?.chain().focus().setLink({
          href: _v0
        }).run();
      },
      removeLink() {
        _v12?.chain().focus().unsetLink().run();
      },
      getEditor: () => _v12,
      focus() {
        _v12?.chain().focus().selectAll().run();
      },
      getText: () => _v12?.getText()
    })), (0, _v1.jsx)(_v4.Flex, {
      fontSize: (0, _v11.rem)(14),
      ref: _v11,
      ..._v9,
      children: (0, _v1.jsx)(_v61.StyledEditorContent, {
        editor: _v12,
        padding: 0,
        onKeyDown: _v6,
        cursor: "pointer",
        border: "none"
      })
    });
  });
  _v0.s(["EditableTextWithRTF", 0, _v62], 0);
  let _v63 = (0, _v2.forwardRef)(({
    index: _v0,
    isRequired: _v1,
    label: _v2,
    color: _v3,
    onChange: _v4
  }, _v5) => {
    let _v6 = (0, _v43.useRtfStore)(_v0 => _v0.fieldLivePreview.showPreview),
      _v7 = (0, _v43.useRtfStore)(_v0 => _v0.fieldLivePreview.color),
      _v8 = (0, _v43.useRtfStore)(_v0 => _v0.fieldLivePreview.index),
      {
        currentPageType: _v9
      } = (0, _v2.useContext)(_v18.CurrentPageContext),
      _v10 = (0, _v35.useGlobalStore)(_v0 => _v0.setSideMenuType),
      _v11 = (0, _v35.useGlobalStore)(_v0 => _v0.setCurrentSelectedFieldIndex),
      _v12 = (0, _v2.useRef)(null),
      _v13 = (0, _v39.useViewerStrings)(),
      _v14 = _v6 && _v0 === _v8 ? _v7 : _v3;
    return (0, _v2.useEffect)(() => {
      let _v0 = _v12.current?.getHTML();
      _v2 && _v0 && _v2 !== _v0 && _v12.current?.setHTML(_v2);
    }, [_v2]), (0, _v1.jsx)(_v3.Box, {
      position: "relative",
      children: (0, _v1.jsx)(_v53.Checkbox, {
        ref: _v5,
        label: (0, _v1.jsx)(_v4.Flex, {
          border: `${(0, _v11.rem)(2)} solid`,
          borderColor: "transparent",
          borderRadius: (0, _v11.rem)(8),
          color: _v14,
          _hover: {
            borderColor: _v9 === _v34.PAGE_TYPES.ADMIN ? _v34.COLORS.VIMEO_BLUE : "transparent"
          },
          onClick: () => {
            _v9 === _v34.PAGE_TYPES.ADMIN && (_v11(_v0), _v10(_v34.SIDE_MENU_CONTENT.CHECKBOX_STYLING));
          },
          children: (0, _v1.jsxs)(_v4.Flex, {
            textAlign: "left",
            color: _v14,
            overflow: "hidden",
            wordBreak: "break-word",
            sx: {
              a: {
                textDecorationColor: "white"
              }
            },
            children: [(0, _v1.jsx)(_v62, {
              ref: _v12,
              fontSize: (0, _v11.rem)(11),
              content: _v2
            }), _v1 && (0, _v1.jsx)(_v52, {
              marginLeft: (0, _v11.rem)(4),
              boxSize: (0, _v11.rem)(10),
              color: "red",
              verticalAlign: "top"
            })]
          })
        }),
        validator: (0, _v50.getValidator)(_v2, _v13, _v1),
        onChange: _v4
      })
    });
  });
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0);
  let _v66 = (0, _v2.forwardRef)(({
      options: _v0 = [],
      placeholder: _v1,
      selected: _v2,
      required: _v3,
      autoFocus: _v4,
      onSelectedChanged: _v5,
      validator: _v6
    }, _v7) => {
      let [_v8, _v9] = (0, _v2.useState)(),
        [_v10, _v11] = (0, _v2.useState)(),
        [_v12, _v13] = (0, _v2.useState)(!1),
        _v14 = (0, _v2.useRef)(null),
        _v15 = (0, _v2.useRef)(null),
        _v16 = _v0 => {
          let _v1 = _v6?.(_v0 || "");
          return _v1 ? (_v11(_v1), _v14.current?.shakeError(), !1) : (_v11(void 0), !0);
        };
      return (0, _v2.useEffect)(() => {
        _v9(_v2);
      }, [_v2]), (0, _v2.useEffect)(() => {
        _v4 && _v15.current?.focus();
      }, [_v4, _v15]), (0, _v2.useImperativeHandle)(_v7, () => ({
        validate: () => _v16(_v8?.optionValue ?? _v8?.optionLabel),
        getValue: () => _v8?.optionValue ?? _v8?.optionLabel ?? ""
      })), (0, _v1.jsxs)(_v3.Box, {
        position: "relative",
        children: [(0, _v1.jsxs)(_v3.Box, {
          as: "select",
          ref: _v15,
          width: "100%",
          height: (0, _v11.rem)(55),
          onChange: _v0 => {
            let _v1 = _v0.target.value,
              _v2 = _v0.find(_v0 => (_v0.optionValue ?? _v0.optionLabel) === _v1);
            _v5?.(_v2), _v9?.(_v2), _v16(_v1);
          },
          opacity: 0,
          onFocus: () => _v13(!0),
          onBlur: () => _v13(!1),
          outline: "none",
          "aria-label": _v1 + " dropdown",
          value: _v8?.optionValue ?? _v8?.optionLabel,
          "aria-required": _v3,
          color: "black",
          background: "white",
          children: [(0, _v1.jsx)(_v3.Box, {
            as: "option",
            value: "",
            selected: !0,
            children: _v1
          }), _v0.map((_v0, _v1) => (0, _v1.jsx)(_v3.Box, {
            as: "option",
            value: _v0.optionValue ?? _v0.optionLabel,
            children: _v0?.optionLabel
          }, _v0.optionCid ?? _v0.optionLabel + _v1))]
        }), (0, _v1.jsxs)(_v3.Box, {
          borderRadius: "sm",
          height: (0, _v11.rem)(55),
          textAlign: "left",
          pl: "sm",
          fontSize: "body-sm",
          border: `${_v10 || _v12 ? (0, _v11.rem)(2) : (0, _v11.rem)(1)} solid`,
          borderColor: void 0 !== _v10 ? "red.500" : _v12 ? "blue.500" : "grayscale.200",
          background: "white",
          color: "slate.500",
          width: "100%",
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          left: 0,
          children: [_v8 ? (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsxs)(_v4.Flex, {
              alignItems: "center",
              width: "90%",
              children: [(0, _v1.jsx)(_v3.Box, {
                pt: (0, _v11.rem)(7),
                fontSize: "body-md",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                children: _v1
              }), _v3 && (0, _v1.jsx)(_v67, {})]
            }), (0, _v1.jsx)(_v3.Box, {
              fontSize: "body-md",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "90%",
              textColor: "black",
              children: _v8.optionLabel
            })]
          }) : (0, _v1.jsxs)(_v4.Flex, {
            alignItems: "center",
            width: "90%",
            height: "100%",
            children: [(0, _v1.jsx)(_v3.Box, {
              fontSize: "body-md",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              children: _v1
            }), _v3 && (0, _v1.jsx)(_v67, {})]
          }), (0, _v1.jsx)(_v3.Box, {
            position: "absolute",
            top: (0, _v11.rem)(15),
            right: (0, _v11.rem)(10),
            children: (0, _v1.jsx)(_v64.ChevronDown, {
              width: (0, _v11.rem)(18)
            })
          })]
        }), _v10 && (0, _v1.jsx)(_v65.StyledError, {
          error: _v10,
          ref: _v14
        })]
      });
    }),
    _v67 = () => (0, _v1.jsx)(_v3.Box, {
      as: "span",
      pl: (0, _v11.rem)(2),
      color: "red.500",
      children: "*"
    });
  var _v68 = _v0.i(0);
  let _v69 = ({
      field: _v0,
      value: _v1,
      onSaveValue: _v2,
      fieldElementRefs: _v3,
      index: _v4,
      autoFocus: _v5 = !0,
      onEnterKeyPressed: _v6,
      errorMessage: _v7
    }) => {
      let _v8 = (0, _v48.useFormLocale)(),
        _v9 = (0, _v39.useViewerStrings)();
      if (!_v0) return null;
      let _v10 = (0, _v49.resolveLocalizedField)(_v0, _v8);
      return (0, _v1.jsx)(_v70, {
        children: (() => {
          let {
            type: _v0,
            name: _v1,
            metadata: _v2,
            isRequired: _v3
          } = _v10;
          switch (_v0) {
            case _v34.CustomFieldTypes.Text:
              return (0, _v1.jsx)(_v68.Input, {
                onBlur: _v0 => {
                  _v2(_v0);
                },
                onEnterKeyPressed: _v0 => _v6(_v0),
                autoFocus: _v5,
                ref: _v0 => {
                  _v3[_v4] = _v0;
                },
                value: "string" == typeof _v1 ? _v1 : void 0,
                placeholder: _v1,
                required: _v3,
                validator: (0, _v50.getValidator)(_v1, _v9, _v3),
                errorMessage: _v7
              });
            case _v34.CustomFieldTypes.Dropdown:
              {
                let _v0 = null != _v1 && "object" == typeof _v1 ? _v2?.options?.find(_v0 => (_v0.optionValue ?? _v0.optionLabel) === (_v1.optionValue ?? _v1.optionLabel)) : void 0;
                return (0, _v1.jsx)(_v66, {
                  onSelectedChanged: _v0 => {
                    _v2(_v0);
                  },
                  autoFocus: _v5,
                  ref: _v0 => {
                    _v3[_v4] = _v0;
                  },
                  selected: _v0,
                  placeholder: _v1,
                  required: _v10.isRequired,
                  options: _v2?.options || [],
                  validator: (0, _v50.getValidator)(_v1, _v9, _v3)
                });
              }
            case _v34.CustomFieldTypes.Checkbox:
              return (0, _v1.jsx)(_v63, {
                index: _v4,
                label: _v10.metadata?.description || "",
                isRequired: _v10.isRequired,
                color: _v10.metadata?.color || "white",
                ref: _v0 => {
                  _v3[_v4] = _v0;
                },
                onChange: _v0 => _v2(_v0.target.checked)
              });
            case _v34.CustomFieldTypes.Description:
              return (0, _v1.jsx)(_v46.Text, {
                variant: "body-md",
                textAlign: "center",
                width: "100%",
                children: _v1
              });
            default:
              return null;
          }
        })()
      });
    },
    _v70 = _v0 => (0, _v1.jsx)(_v3.Box, {
      mb: "md",
      width: "100%",
      mt: (0, _v11.rem)(2),
      ..._v0,
      children: _v0.children
    });
  var _v71 = _v0.i(0);
  let _v72 = "30px",
    _v73 = _v71.keyframes`
  0%{
    transform: translateY(0);
    opacity: 1;
  }
  100%{
    transform: translateY(-${_v72});
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
`,
    _v74 = _v71.keyframes`
  0% {
    transform: translateY(${_v72});
     opacity: 0;
   }
   100% {
    transform: translateY(0);
     opacity: 1;
   }
`,
    _v75 = _v71.keyframes`
0% {
    transform: translateY(-${_v72});
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,
    _v76 = _v71.keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(${_v72});
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
`;
  var _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  let _v80 = ({
      onSaveValue: _v0,
      onEnterKeyPressed: _v1,
      onCheckboxChecked: _v2,
      onNextClick: _v3,
      onMultiStepSubmit: _v4,
      fieldElementRefs: _v5,
      agreeCheckboxRef: _v6,
      animationDirection: _v7,
      inputtedData: _v8,
      agreeCheckboxChecked: _v9,
      agreeCheckboxNotCheckedError: _v10,
      checkValidEmailStateLoading: _v11,
      apiError: _v12,
      disableButton: _v13,
      autoFocus: _v14
    }) => {
      let _v15 = (0, _v35.useGlobalStore)(_v0 => _v0.currentSelectedFieldIndex),
        _v16 = (0, _v35.useGlobalStore)(_v0 => _v0.lastSelectedFieldIndex),
        _v17 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.customFields),
        _v18 = (0, _v2.useRef)([]),
        {
          setPreviewType: _v19
        } = (0, _v2.useContext)(_v19.PreviewContext),
        _v20 = (0, _v48.useFormLocale)(),
        _v21 = (0, _v35.useGlobalStore)(_v0 => _v0.setCurrentSelectedFieldIndex);
      return (0, _v1.jsxs)(_v3.Box, {
        pt: "sm",
        children: [(0, _v1.jsx)(_v3.Box, {
          position: "relative",
          width: "100%",
          minHeight: (0, _v11.rem)(_v18.current[_v15]?.clientHeight || 60),
          overflow: "visible",
          zIndex: 1,
          children: _v17.map((_v0, _v1) => {
            let _v2 = _v1 === _v15;
            return (0, _v1.jsx)(_v3.Box, {
              ref: _v0 => {
                _v18.current[_v1] = _v0;
              },
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              animation: "up" === _v7.current ? _v2 ? `${_v74} .2s forwards` : `${_v73} .2s forwards` : _v2 ? `${_v75} .2s forwards` : `${_v76} .2s forwards`,
              visibility: [_v15, _v16].includes(_v1) ? "visible" : "hidden",
              children: (0, _v1.jsx)(_v69, {
                value: _v8.find(_v0 => _v0.cid === _v0?.cid)?.value,
                onSaveValue: _v0 => _v0(_v0, _v1),
                onEnterKeyPressed: _v0 => _v1(_v0, _v0.cid),
                fieldElementRefs: _v5.current,
                field: _v0,
                index: _v1,
                autoFocus: _v14 && _v2,
                errorMessage: _v0?.name === _v34.FORM_FIELD_NAME_VALUES.EMAIL ? _v12 : ""
              })
            }, _v0.cid);
          })
        }), _v15 === _v17.length - 1 && (0, _v1.jsx)(_v79.default, {
          ref: _v6,
          checked: _v9,
          error: _v10,
          onChange: _v0 => _v2(_v0)
        }), (0, _v1.jsxs)(_v81, {
          children: [0 !== _v15 && (0, _v1.jsx)(_v4.Flex, {
            flex: 1,
            children: (0, _v1.jsx)(_v77.StylableButton, {
              disabled: 0 === _v15 || _v13,
              onClick: () => {
                _v7.current = "down", _v21(_v15 - 1);
              },
              role: _v34.BUTTON_ROLES.SECONDARY,
              textType: _v34.BUTTON_TEXT_TYPE.BACK
            })
          }), (0, _v1.jsxs)(_v4.Flex, {
            flex: 1,
            children: [_v15 < _v17.length - 1 && (0, _v1.jsx)(_v77.StylableButton, {
              role: _v34.BUTTON_ROLES.PRIMARY,
              onClick: _v3,
              textType: _v34.BUTTON_TEXT_TYPE.NEXT,
              loading: _v11,
              disabled: _v11
            }), _v15 === _v17.length - 1 && (0, _v1.jsx)(_v77.StylableButton, {
              role: _v34.BUTTON_ROLES.PRIMARY,
              onClick: _v4,
              textType: _v34.BUTTON_TEXT_TYPE.REGISTER,
              loading: _v13,
              disabled: _v13
            })]
          })]
        }), (0, _v1.jsx)(_v3.Box, {
          mt: "md",
          children: (0, _v1.jsx)(_v78.StylableNonEditText, {
            fieldName: _v34.NON_EDIT_FIELDS.ALREADY_REGISTERED,
            children: (0, _v1.jsx)(_v3.Box, {
              px: "xs",
              children: (0, _v1.jsx)(_v46.Text, {
                variant: "body-md",
                children: (0, _v47.translate)({
                  singular: "Already registered? {LINK}Sign in{/LINK}",
                  locale: _v20,
                  replacements: {
                    LINK: _v0 => (0, _v1.jsx)(_v3.Box, {
                      as: "u",
                      cursor: "pointer",
                      tabIndex: 0,
                      onKeyDown: _v0 => _v0.key === _v34.KEY_CODES.ENTER && _v19(_v34.PREVIEW_TYPE.LOGIN_SCREEN),
                      onClick: () => _v19(_v34.PREVIEW_TYPE.LOGIN_SCREEN),
                      children: _v0
                    })
                  },
                  dictionary: {
                    es: {
                      singular: "¿Ya está registrado? {LINK}Inicie sesión{/LINK}"
                    },
                    "de-DE": {
                      singular: "Schon registriert? {LINK}Einloggen{/LINK}"
                    },
                    "fr-FR": {
                      singular: "Déjà inscrit(e) ? {LINK}Connectez-vous{/LINK}"
                    },
                    "ja-JP": {
                      singular: "すでにご登録済みですか？ {LINK}ログイン{/LINK}"
                    },
                    "ko-KR": {
                      singular: "이미 가입하셨나요? {LINK}로그인{/LINK}"
                    },
                    "pt-BR": {
                      singular: "Já se inscreveu? {LINK}Faça o login{/LINK}"
                    },
                    "zh-CN": {
                      singular: "已经注册？{LINK}登录{/LINK}"
                    }
                  }
                })
              })
            })
          })
        })]
      });
    },
    _v81 = _v0 => (0, _v1.jsx)(_v4.Flex, {
      justifyContent: "center",
      width: "100%",
      gap: (0, _v11.rem)(8),
      pt: (0, _v11.rem)(6),
      alignItems: "center",
      ..._v0,
      children: _v0.children
    }),
    _v82 = ({
      onSaveValue: _v0,
      onEnterKeyPressed: _v1,
      onCheckboxChecked: _v2,
      onSingleStepSubmit: _v3,
      fieldElementRefs: _v4,
      agreeCheckboxRef: _v5,
      inputtedData: _v6,
      autoFocus: _v7,
      apiError: _v8,
      agreeCheckboxNotCheckedError: _v9,
      agreeCheckboxChecked: _v10,
      disableButton: _v11
    }) => {
      let {
          setPreviewType: _v12
        } = (0, _v2.useContext)(_v19.PreviewContext),
        _v13 = (0, _v48.useFormLocale)(),
        _v14 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.customFields);
      return (0, _v1.jsxs)(_v3.Box, {
        py: "md",
        children: [_v14.map((_v0, _v1) => (0, _v1.jsx)(_v69, {
          value: _v6.find(_v0 => _v0.cid === _v0?.cid)?.value,
          onSaveValue: _v0 => _v0(_v0, _v1),
          onEnterKeyPressed: _v0 => _v1(_v0, _v0.cid),
          fieldElementRefs: _v4.current,
          field: _v0,
          index: _v1,
          autoFocus: !1,
          errorMessage: _v0?.name === _v34.FORM_FIELD_NAME_VALUES.EMAIL ? _v8 : ""
        }, _v0.cid)), (0, _v1.jsx)(_v79.default, {
          ref: _v5,
          error: _v9,
          checked: _v10,
          onChange: _v0 => _v2(_v0)
        }), (0, _v1.jsx)(_v83, {
          children: (0, _v1.jsx)(_v77.StylableButton, {
            role: _v34.BUTTON_ROLES.PRIMARY,
            onClick: _v3,
            textType: _v34.BUTTON_TEXT_TYPE.REGISTER,
            loading: _v11,
            disabled: _v11
          })
        }), (0, _v1.jsx)(_v3.Box, {
          mt: "md",
          children: (0, _v1.jsx)(_v78.StylableNonEditText, {
            fieldName: _v34.NON_EDIT_FIELDS.ALREADY_REGISTERED,
            children: (0, _v1.jsx)(_v3.Box, {
              px: "xs",
              children: (0, _v1.jsx)(_v46.Text, {
                variant: "body-md",
                children: (0, _v47.translate)({
                  singular: "Already registered? {LINK}Sign in{/LINK}",
                  locale: _v13,
                  replacements: {
                    LINK: _v0 => (0, _v1.jsx)(_v3.Box, {
                      as: "u",
                      cursor: "pointer",
                      tabIndex: 0,
                      onKeyDown: _v0 => _v0.key === _v34.KEY_CODES.ENTER && _v12(_v34.PREVIEW_TYPE.LOGIN_SCREEN),
                      onClick: () => _v12(_v34.PREVIEW_TYPE.LOGIN_SCREEN),
                      children: _v0
                    })
                  },
                  dictionary: {
                    es: {
                      singular: "¿Ya está registrado? {LINK}Inicie sesión{/LINK}"
                    },
                    "de-DE": {
                      singular: "Schon registriert? {LINK}Einloggen{/LINK}"
                    },
                    "fr-FR": {
                      singular: "Déjà inscrit(e) ? {LINK}Connectez-vous{/LINK}"
                    },
                    "ja-JP": {
                      singular: "すでにご登録済みですか？ {LINK}ログイン{/LINK}"
                    },
                    "ko-KR": {
                      singular: "이미 가입하셨나요? {LINK}로그인{/LINK}"
                    },
                    "pt-BR": {
                      singular: "Já se inscreveu? {LINK}Faça o login{/LINK}"
                    },
                    "zh-CN": {
                      singular: "已经注册？{LINK}登录{/LINK}"
                    }
                  }
                })
              })
            })
          })
        })]
      });
    },
    _v83 = _v0 => (0, _v1.jsx)(_v4.Flex, {
      justifyContent: "center",
      width: "100%",
      gap: (0, _v11.rem)(8),
      pt: (0, _v11.rem)(6),
      alignItems: "center",
      ..._v0,
      children: _v0.children
    }),
    _v84 = ({
      setLeadUuid: _v0
    }) => {
      let _v1 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.alignment),
        _v2 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.layout),
        _v3 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.joinPageTitle.tagsResolved),
        _v4 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.joinPageTitle.tagsUnresolved) || "",
        _v5 = (0, _v22.useLocalizedPageCopy)("joinPageTitle", _v3),
        _v6 = (0, _v22.useAuthoredPageCopy)("joinPageTitle", _v4),
        _v7 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.logo),
        _v8 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.customFields),
        _v9 = (0, _v2.useRef)(null),
        _v10 = (0, _v35.useGlobalStore)(_v0 => _v0.setSideMenuType),
        _v11 = (0, _v22.useSavePageCopy)(),
        {
          editor: _v12,
          setEditor: _v13
        } = (0, _v20.useRichTextContext)(),
        _v14 = (0, _v35.useGlobalStore)(_v0 => _v0.setCurrentSelectedFieldIndex),
        _v15 = (0, _v35.useGlobalStore)(_v0 => _v0.currentSelectedFieldIndex),
        _v16 = (0, _v35.useGlobalStore)(_v0 => _v0.setEmailAddressCached),
        _v17 = (0, _v35.useGlobalStore)(_v0 => _v0.emailAddressCached),
        {
          previewMode: _v18
        } = (0, _v2.useContext)(_v19.PreviewContext),
        _v19 = (0, _v2.useRef)("up"),
        _v20 = (0, _v2.useRef)([]),
        [_v21, _v22] = (0, _v2.useState)(!1),
        [_v23, _v24] = (0, _v2.useState)(!1),
        [_v25, _v26] = (0, _v2.useState)(),
        _v27 = (0, _v2.useRef)(null),
        [_v28, _v29] = (0, _v14.usePostLeadCaptureResourceIdLogin)(),
        {
          isMiniaturePreview: _v30
        } = (0, _v19.usePreviewContext)(),
        [_v31, _v32] = (0, _v2.useState)([]),
        _v33 = (0, _v35.useGlobalStore)(_v0 => _v0.entityType),
        _v34 = (0, _v35.useGlobalStore)(_v0 => _v0.entityId),
        _v35 = (0, _v35.useGlobalStore)(_v0 => _v0.authRoomPassword),
        _v36 = (0, _v35.useGlobalStore)(_v0 => _v0.pageReferrer),
        {
          currentPageType: _v37
        } = (0, _v2.useContext)(_v18.CurrentPageContext),
        {
          setPreviewType: _v38,
          autoFocusField: _v39
        } = (0, _v2.useContext)(_v19.PreviewContext),
        _v40 = (0, _v21.useFeatureFlow)(_v34.FEATURES.CONFIRMATION_VIEW),
        {
          sendViewerBpEvent: _v41
        } = _v38(),
        _v42 = (0, _v39.useViewerStrings)(),
        [_v43, _v44] = (0, _v2.useState)(_v37 === _v34.PAGE_TYPES.REGISTRATION && _v39),
        [_v45, _v46] = (0, _v15.usePutLeadCaptureResourceIdRegistrants)(),
        {
          refreshConfirmationPageHTML: _v47,
          refreshConfirmationPageHTMLState: _v48
        } = (0, _v23.useRefreshConfirmationPageHTML)(),
        [_v49, _v50] = (0, _v2.useState)(!1),
        _v51 = (0, _v12.useToast)(),
        _v52 = _v46.loading || _v48.loading,
        _v53 = (0, _v2.useCallback)(() => {
          _v9.current?.getHTML() !== _v6 && _v37 === _v34.PAGE_TYPES.ADMIN && _v11("joinPageTitle", _v4, _v9.current?.getHTML());
        }, [_v37, _v6, _v4, _v11]),
        _v54 = (_v0, _v1) => {
          let _v2 = _v31.findIndex(_v0 => _v0.cid === _v1),
            _v3 = [..._v31];
          _v2 >= 0 ? _v3[_v2] = {
            cid: _v1,
            value: _v0
          } : _v3.push({
            cid: _v1,
            value: _v0
          }), _v32(_v3);
          let _v4 = _v8.find(_v0 => _v0.cid === _v1);
          _v4?.name === _v34.FORM_FIELD_NAME_VALUES.EMAIL && _v16(_v0);
        },
        _v55 = async () => {
          let _v0 = _v20.current[_v15],
            _v1 = _v8[_v15];
          if (_v26(void 0), _v1?.type === _v34.CustomFieldTypes.Description || _v0?.validate()) if (_v1.name === _v34.FORM_FIELD_NAME_VALUES.EMAIL && _v37 === _v34.PAGE_TYPES.REGISTRATION) {
            let _v0 = (0, _v16.getEntityCookiePassword)(_v34, _v33) ?? _v35;
            await _v28({
              select: [],
              query: {
                ...(_v0 && {
                  password: _v0
                }),
                ...(_v36 && {
                  referrer: _v36
                })
              },
              variables: {
                email: _v0?.getValue() || ""
              },
              where: {
                resourceId: _v34,
                resourceType: _v6.ENTITY_TO_PATH_MAP[_v33]
              }
            });
          } else _v19.current = "up", _v14(_v15 + 1);
        },
        _v56 = async () => {
          let _v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9;
          _v37 === _v34.PAGE_TYPES.ADMIN ? _v38(_v34.PREVIEW_TYPE.CONFIRMATION) : (_v26(void 0), _v0 = _v8.find(_v0 => _v0.name === _v34.FORM_FIELD_NAME_VALUES.FIRST_NAME)?.cid, _v1 = _v8.find(_v0 => _v0.name === _v34.FORM_FIELD_NAME_VALUES.LAST_NAME)?.cid, _v2 = _v8.find(_v0 => _v0.name === _v34.FORM_FIELD_NAME_VALUES.EMAIL)?.cid, _v3 = _v31.find(_v0 => _v0.cid === _v0)?.value, _v4 = _v31.find(_v0 => _v0.cid === _v1)?.value, _v5 = _v31.find(_v0 => _v0.cid === _v2)?.value, _v6 = [_v34.FORM_FIELD_NAME_VALUES.EMAIL, _v34.FORM_FIELD_NAME_VALUES.FIRST_NAME, _v34.FORM_FIELD_NAME_VALUES.LAST_NAME], _v7 = _v8.filter(_v0 => !_v6.includes(_v0.name) && _v0.type !== _v34.CustomFieldTypes.Description).map(_v0 => {
            var _v1;
            let _v2;
            return {
              [_v0.name]: (_v1 = _v0.cid, "string" == typeof (_v2 = _v31.find(_v0 => _v0.cid === _v1)?.value) || "boolean" == typeof _v2 ? _v2 : _v2?.optionValue ?? _v2?.optionLabel)
            };
          }), _v8 = {}, _v7.forEach(_v0 => {
            for (let [, _v0] of Object.entries(_v0)) ("string" == typeof _v0 && _v0.length > 0 || "boolean" == typeof _v0 && _v0) && (_v8 = {
              ..._v8,
              ..._v0
            });
          }), _v9 = (0, _v16.getEntityCookiePassword)(_v34, _v33) ?? _v35, _v45({
            where: {
              resourceId: _v34,
              resourceType: _v6.ENTITY_TO_PATH_MAP[_v33]
            },
            select: [],
            query: {
              ...(_v9 && {
                password: _v9
              }),
              ...(_v36 && {
                referrer: _v36
              })
            },
            variables: {
              firstName: _v3,
              lastName: _v4,
              email: _v5,
              data: JSON.stringify(_v8),
              sourceMetadata: {
                url: window.location.href
              },
              timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
            }
          }), _v41({
            eventName: "vimeo.registration_form_complete"
          }));
        },
        _v57 = async () => {
          let _v0 = _v8.every((_v0, _v1) => _v0.type === _v34.CustomFieldTypes.Description || _v20.current[_v1]?.validate() === !0);
          _v24(!_v21), _v27.current?.shakeError(), _v21 && _v0 && _v56();
        },
        _v58 = async () => {
          let _v0 = _v8[_v8.length - 1],
            _v1 = _v0?.type === _v34.CustomFieldTypes.Description || _v20.current[_v8.length - 1]?.validate();
          _v24(!_v21), _v27.current?.shakeError(), _v21 && _v1 && _v56();
        },
        _v59 = _v0 => {
          _v22(_v0), _v24(!_v0);
        },
        _v60 = (_v0, _v1) => {
          void 0 !== _v0 && void 0 !== _v1 && _v54(_v0, _v1), _v15 < _v8.length - 1 ? _v55() : _v58();
        },
        _v61 = (_v0, _v1) => {
          _v54(_v0, _v8[_v1].cid), _v44(!0);
        };
      (0, _v2.useEffect)(() => {
        let {
          error: _v0,
          data: _v1,
          loading: _v2
        } = _v29;
        !_v2 && (_v0 || _v1) && async function () {
          try {
            let _v0 = await _v0?.res?.json(),
              _v1 = (0, _v13.deepCamelCase)(_v0)?.errorCode;
            if (_v1 === _v34.LOGIN_ERROR_CODES.INVALID_EMAIL) return void _v26(_v42.InvalidEmailAddress);
            if (_v1?.uri || _v1 === _v34.LOGIN_ERROR_CODES.NOT_REGISTERED) {
              let _v0 = _v35.useGlobalStore.getState().currentSelectedFieldIndex + 1;
              _v19.current = "up", _v14(_v0);
            }
          } catch (_v0) {}
        }();
      }, [_v29, _v14, _v42.InvalidEmailAddress]), (0, _v2.useEffect)(() => {
        if (_v37 === _v34.PAGE_TYPES.ADMIN) {
          let _v0 = _v12?.view.state.selection;
          _v9.current?.setHTML(_v6), _v0 && _v12?.chain().setTextSelection({
            from: _v0.from,
            to: _v0.to
          }).run();
        }
      }, [_v6, _v37]), (0, _v2.useEffect)(() => {
        _v37 === _v34.PAGE_TYPES.REGISTRATION && _v9.current?.setHTML(_v5);
      }, [_v5, _v37]), (0, _v2.useEffect)(() => {
        _v15 > _v8.length - 1 && _v14(Math.max(_v8.length - 1, 0));
      }, [_v8]), (0, _v2.useEffect)(() => {
        let _v0 = _v8.find(_v0 => _v0.name === _v34.FORM_FIELD_NAME_VALUES.EMAIL)?.cid;
        void 0 !== _v0 && _v32([{
          cid: _v0,
          value: _v17
        }]);
      }, []), (0, _v2.useEffect)(() => {
        _v24(!1);
      }, [_v2]), (0, _v2.useEffect)(() => {
        !async function () {
          try {
            let {
                error: _v0
              } = _v46,
              _v1 = await _v0?.res?.json(),
              _v2 = (0, _v13.deepCamelCase)(_v1)?.errorCode;
            _v34.REGISTRATION_FULL_ERROR_CODE.includes(_v2) ? _v38(_v34.PREVIEW_TYPE.FORM_FULL) : (_v0 || _v48.error) && (_v2 === _v34.LOGIN_ERROR_CODES.INVALID_EMAIL ? _v26(_v42.InvalidEmailAddress) : _v51({
              title: _v42.UhOhThereWasAProblem,
              status: "error"
            }));
          } catch (_v0) {}
        }();
      }, [_v46.error, _v48.error]), (0, _v2.useEffect)(() => {
        !_v46.loading && _v46.data?.uri && (_v40 ? _v47((0, _v17.getLastUuidFromUri)(_v46.data.uri)) : ((0, _v16.setCookie)(_v34, (0, _v17.getLastUuidFromUri)(_v46.data.uri)), _v0?.((0, _v17.getLastUuidFromUri)(_v46.data.uri))), _v50(!0));
      }, [_v46, _v34, _v40, _v38, _v0]), (0, _v2.useEffect)(() => {
        _v49 && !_v48.loading && _v48.data && _v46.data?.uri && ((0, _v16.setCookie)(_v34, (0, _v17.getLastUuidFromUri)(_v46.data.uri)), _v0 && _v0((0, _v17.getLastUuidFromUri)(_v46.data.uri)), _v38(_v34.PREVIEW_TYPE.CONFIRMATION), _v14(0));
      }, [_v48, _v38, _v0, _v34, _v49, _v46]);
      let _v62 = (0, _v2.useRef)(_v31);
      return _v62.current = _v31, (0, _v2.useEffect)(() => {
        let _v0 = [];
        _v62.current.forEach(_v0 => {
          let _v1 = _v8.find(_v0 => _v0.cid === _v0.cid)?.type,
            _v2 = _v1 === _v34.CustomFieldTypes.Text && "string" == typeof _v0.value,
            _v3 = _v1 === _v34.CustomFieldTypes.Dropdown && "object" == typeof _v0.value,
            _v4 = _v1 === _v34.CustomFieldTypes.Checkbox && "boolean" == typeof _v0.value;
          (_v2 || _v3 || _v4) && _v0.push(_v0);
        }), _v0.length !== _v62.current.length && _v32(_v0);
      }, [_v8]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v45.Alignment, {
          previewMode: _v18,
          align: _v1,
          onMouseDownCapture: _v0 => {
            _v0.target == _v0.currentTarget && (_v10(_v34.SIDE_MENU_CONTENT.SETTINGS), _v13(null));
          },
          isMiniaturePreview: _v30,
          children: (0, _v1.jsxs)(_v45.WrapperBox, {
            py: "3xl",
            maxWidth: _v34.PREVIEW_FORM_FIELDS_WIDTH + 8,
            children: [_v7.isActive && (0, _v1.jsx)(_v45.LogoLink, {
              showColorOnHover: _v37 === _v34.PAGE_TYPES.ADMIN,
              variant: "minimal",
              ...(_v7.isLinkActive && (_v7.customLink?.length ?? 0) > 0 && _v37 === _v34.PAGE_TYPES.REGISTRATION ? {
                href: _v7.customLink || "",
                target: "_blank"
              } : {}),
              children: (0, _v1.jsx)(_v45.Logo, {
                src: _v7.url
              })
            }), (0, _v1.jsx)(_v41.StylableText, {
              ref: _v9,
              saveChanges: _v53,
              onBlur: _v53,
              overRideFontSize: !0,
              content: _v37 === _v34.PAGE_TYPES.ADMIN ? _v6 : _v5
            }), (0, _v1.jsx)(_v3.Box, {
              px: "xs",
              children: (0, _v1.jsx)(_v40.EventDate, {})
            }), (0, _v1.jsx)(_v3.Box, {
              px: "xs",
              children: _v2 === _v34.FORM_LAYOUT_OPTIONS.SINGLE_STEP_FORM ? (0, _v1.jsx)(_v82, {
                onSaveValue: _v61,
                onEnterKeyPressed: _v60,
                onCheckboxChecked: _v59,
                onSingleStepSubmit: _v57,
                fieldElementRefs: _v20,
                agreeCheckboxRef: _v27,
                inputtedData: _v31,
                autoFocus: _v43,
                apiError: _v25,
                agreeCheckboxNotCheckedError: _v23,
                agreeCheckboxChecked: _v21,
                disableButton: _v52
              }) : (0, _v1.jsx)(_v80, {
                animationDirection: _v19,
                inputtedData: _v31,
                onSaveValue: _v61,
                onEnterKeyPressed: _v60,
                fieldElementRefs: _v20,
                agreeCheckboxRef: _v27,
                agreeCheckboxChecked: _v21,
                agreeCheckboxNotCheckedError: _v23,
                onCheckboxChecked: _v59,
                onNextClick: _v55,
                checkValidEmailStateLoading: _v29.loading,
                onMultiStepSubmit: _v58,
                disableButton: _v52,
                autoFocus: _v43,
                apiError: _v25
              })
            })]
          })
        }), _v2 === _v34.FORM_LAYOUT_OPTIONS.MULTI_STEP_FORM && (0, _v1.jsx)(_v3.Box, {
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          pb: (0, _v11.rem)(26),
          px: "lg",
          pointerEvents: "none",
          children: (0, _v1.jsx)(_v44, {
            currentStep: _v15 + 1,
            totalStep: _v8.length
          })
        })]
      });
    };
  var _v85 = _v0.i(0);
  let _v86 = () => {
    let _v0 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.logo),
      _v1 = (0, _v35.useGlobalStore)(_v0 => _v0.leadCapture.alignment),
      _v2 = (0, _v35.useGlobalStore)(_v0 => _v0.entity.title),
      {
        previewMode: _v3
      } = (0, _v2.useContext)(_v19.PreviewContext),
      {
        setPreviewType: _v4
      } = (0, _v2.useContext)(_v19.PreviewContext),
      {
        isMiniaturePreview: _v5
      } = (0, _v19.usePreviewContext)(),
      _v6 = (0, _v48.useFormLocale)(),
      _v7 = (0, _v39.useViewerStrings)();
    return (0, _v1.jsx)(_v45.Alignment, {
      previewMode: _v3,
      align: _v1,
      isMiniaturePreview: _v5,
      children: (0, _v1.jsxs)(_v45.WrapperBox, {
        pb: (0, _v11.rem)(98),
        children: [_v0.isActive && (0, _v1.jsx)(_v45.LogoLink, {
          variant: "minimal",
          ...(_v0.isLinkActive && (_v0.customLink?.length ?? 0) > 0 && {
            href: _v0.customLink || "",
            target: "_blank"
          }),
          children: (0, _v1.jsx)(_v3.Box, {
            as: "img",
            maxHeight: (0, _v11.rem)(56),
            mb: "md",
            mx: "sm",
            src: _v0.url
          })
        }), (0, _v1.jsxs)(_v85.Header, {
          variant: "heading-2xl",
          lineHeight: (0, _v11.rem)(41.7),
          letterSpacing: (0, _v11.rem)(-1.2),
          size: "xl",
          children: [(0, _v1.jsx)("p", {
            children: _v7.RegistrationFullMessage
          }), (0, _v1.jsx)(_v46.Text, {
            variant: "body-xl",
            mt: "sm",
            fontSize: "heading-lg",
            fontWeight: "normal",
            children: _v2
          })]
        }), (0, _v1.jsx)(_v3.Box, {
          pt: "md",
          pl: "xs",
          pr: "xs",
          children: (0, _v1.jsx)(_v40.EventDate, {})
        }), (0, _v1.jsx)(_v3.Box, {
          px: "xs",
          mt: "md",
          children: (0, _v1.jsx)(_v46.Text, {
            variant: "body-sm",
            children: (0, _v47.translate)({
              singular: "Already registered? {LINK}Sign in{/LINK}",
              locale: _v6,
              replacements: {
                LINK: _v0 => (0, _v1.jsx)(_v3.Box, {
                  as: "u",
                  cursor: "pointer",
                  tabIndex: 0,
                  onKeyPress: _v0 => _v0.key === _v34.KEY_CODES.ENTER && _v4(_v34.PREVIEW_TYPE.LOGIN_SCREEN),
                  onClick: () => _v4(_v34.PREVIEW_TYPE.LOGIN_SCREEN),
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "¿Ya está registrado? {LINK}Inicie sesión{/LINK}"
                },
                "de-DE": {
                  singular: "Schon registriert? {LINK}Einloggen{/LINK}"
                },
                "fr-FR": {
                  singular: "Déjà inscrit(e) ? {LINK}Connectez-vous{/LINK}"
                },
                "ja-JP": {
                  singular: "すでにご登録済みですか？ {LINK}ログイン{/LINK}"
                },
                "ko-KR": {
                  singular: "이미 가입하셨나요? {LINK}로그인{/LINK}"
                },
                "pt-BR": {
                  singular: "Já se inscreveu? {LINK}Faça o login{/LINK}"
                },
                "zh-CN": {
                  singular: "已经注册？{LINK}登录{/LINK}"
                }
              }
            })
          })
        })]
      })
    });
  };
  _v0.s(["Preview", 0, ({
    setLeadUuid: _v0
  }) => {
    let {
        previewType: _v1
      } = (0, _v2.useContext)(_v19.PreviewContext),
      {
        currentPageType: _v2
      } = (0, _v2.useContext)(_v18.CurrentPageContext),
      {
        sendViewerBpEvent: _v3
      } = _v38(),
      {
        isMiniaturePreview: _v4
      } = (0, _v19.usePreviewContext)(),
      _v5 = (0, _v35.useGlobalStore)(_v0 => _v0.presetLoading),
      _v6 = (0, _v35.useGlobalStore)(_v0 => _v0.entityType);
    return (0, _v2.useEffect)(() => {
      setTimeout(() => {
        _v2 === _v34.PAGE_TYPES.ADMIN && (0, _v7.setLocationQuery)(_v6.LOCATION_STATE.PREVIEW_TYPE, _v1);
      }, 0);
    }, [_v1, _v2]), (0, _v2.useEffect)(() => {
      _v2 === _v34.PAGE_TYPES.REGISTRATION && [_v34.PREVIEW_TYPE.FORM, _v34.PREVIEW_TYPE.LOGIN_SCREEN].includes(_v1) && !_v4 && _v3({
        eventName: _v33.BP_EVENT_NAMES.REGISTRATION_FORM_VIEWED
      });
    }, []), (0, _v1.jsxs)(_v3.Box, {
      position: "relative",
      width: "100%",
      height: "100%",
      "aria-busy": _v5,
      children: [(0, _v1.jsx)(_v4.Flex, {
        width: "100%",
        height: "100%",
        justifyContent: "space-around",
        flexWrap: "wrap",
        inert: _v5 || void 0,
        children: (0, _v1.jsxs)(_v8.BackgroundWrapper, {
          disableBackground: _v1 === _v34.PREVIEW_TYPE.FORM_FULL,
          children: [_v1 === _v34.PREVIEW_TYPE.CONFIRMATION && _v6 !== _v6.ENTITY_TYPE.SHOWCASE && (0, _v1.jsx)(_v9.ConfirmationView, {}), _v1 === _v34.PREVIEW_TYPE.LOGIN_SCREEN && (0, _v1.jsx)(_v10.LoginView, {
            setLeadUuid: _v0
          }), _v1 === _v34.PREVIEW_TYPE.FORM && (0, _v1.jsx)(_v84, {
            setLeadUuid: _v0
          }), _v1 === _v34.PREVIEW_TYPE.FORM_FULL && (0, _v1.jsx)(_v86, {})]
        })
      }), _v5 && (0, _v1.jsx)(_v4.Flex, {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "auto",
        children: (0, _v1.jsx)(_v5.Spinner, {})
      })]
    });
  }], 0);
}