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
    _v11 = _v0.i(0);
  let _v12 = _v10.default.div.withConfig({
    displayName: "AMsSupportPage.style__PageWrapper",
    componentId: "sc-4bb97acc-0"
  })`
  margin: 0 auto;
  padding: ${(0, _v2.rem)(100)} 0;
  width: ${(0, _v2.rem)(235)};
  ${_v11.media.xsm`
    width: ${(0, _v2.rem)(294)};
  `}
  ${_v11.media.sm`
    width: ${(0, _v2.rem)(588)};
  `}
`;
  var _v13 = _v0.i(0),
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
    _v25 = _v0.i(0);
  let _v26 = _v10.default.div.withConfig({
      displayName: "AMsSupportForm.style__ButtonWrapper",
      componentId: "sc-4500aec-0"
    })`
  padding: ${(0, _v2.rem)(10)};
`,
    _v27 = _v10.default.div.withConfig({
      displayName: "AMsSupportForm.style__FieldsWrapper",
      componentId: "sc-4500aec-1"
    })`
  text-align: initial;
  padding: ${(0, _v2.rem)(10)};
  overflow: auto;
`,
    _v28 = _v10.default.div.withConfig({
      displayName: "AMsSupportForm.style__FormField",
      componentId: "sc-4500aec-2"
    })`
  padding: ${(0, _v2.rem)(16)} 0;
`,
    _v29 = _v10.default.h2.withConfig({
      displayName: "AMsSupportForm.style__PageSubheader",
      componentId: "sc-4500aec-3"
    })`
  padding: ${(0, _v2.rem)(10)} ${(0, _v2.rem)(10)} ${(0, _v2.rem)(10)} ${(0, _v2.rem)(10)};
  color: ${(0, _v25.slate)(600)};
`,
    _v30 = ["image/jpeg", "text/*", "application/json", "application/pdf", "application/zip", ".heic", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".png"],
    _v31 = async (_v0, _v1) => {
      let _v2 = new FormData();
      _v2.append("attachment", _v0), _v2.append("token", _v1);
      let _v3 = await fetch("/help/contact?action=upload_file", {
        method: "POST",
        body: _v2
      });
      if (!_v3.ok) throw Error("There was an error uploading your attachment. Please try again in a few minutes.");
      let _v4 = await _v3.json();
      if (_v4.error) throw Error(_v4.error.display);
      return _v4.upload.token;
    },
    _v32 = async (_v0, _v1) => Promise.all(_v0.map(_v0 => _v31(_v0, _v1))),
    _v33 = async (_v0, _v1, _v2, _v3, _v4) => {
      let _v5 = {
          ..._v0,
          uploadTokens: _v1,
          emailCCs: _v2,
          emailFollowers: _v3,
          token: _v4
        },
        _v6 = await fetch("/help/contact?action=account_managers_support", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(_v5)
        });
      if (!_v6.ok) throw Error("There was an error submitting your ticket. Please try again in a few minutes.");
      let _v7 = await _v6.json();
      if (_v7.error) throw Error(_v7.error.display);
      return _v7.response.ticket.id;
    },
    _v34 = (0, _v10.default)(_v14.Button).withConfig({
      displayName: "style__DismissButton",
      componentId: "sc-df4c689e-0"
    })`
  position: absolute;
  top: 20%;
  right: ${(0, _v2.rem)(6)};
  color: ${(0, _v25.red)(300)};
`;
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  let _v38 = _v10.default.div.withConfig({
      displayName: "AttachmentField.style__AttachmentsBlock",
      componentId: "sc-8b0748f0-0"
    })`
  padding: ${(0, _v2.rem)(16)} 0;
`,
    _v39 = (0, _v10.default)(_v22.Paragraph).withConfig({
      displayName: "AttachmentField.style__FileUploadHelperMessage",
      componentId: "sc-8b0748f0-1"
    })`
  padding-left: ${(0, _v2.rem)(15)};
  opacity: 0.5;
`,
    _v40 = (0, _v10.default)(_v16.Notice).withConfig({
      displayName: "AttachmentField.style__MaxAttachmentsNotice",
      componentId: "sc-8b0748f0-2"
    })`
  background-color: ${(0, _v25.yellow)(100)};
`,
    _v41 = ({
      files: _v0,
      maxAttachments: _v1,
      maxFileSize: _v2,
      acceptedFileTypes: _v3,
      isSubmitting: _v4,
      onRemoveFile: _v5,
      onAddFiles: _v6
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v38, {
        children: [(0, _v1.jsx)(_v36.FileUpload, {
          accept: _v3.join(","),
          onChange: _v0 => {
            _v6(_v0.target.files), _v0.target.value = "";
          },
          disabled: _v4 || _v0.length >= _v1,
          children: (0, _v1.jsxs)(_v14.Button, {
            format: "alternative",
            variant: "dashed",
            disabled: _v4 || _v0.length >= _v1,
            children: ["Attach ", _v0.length > 0 ? "another" : "a", " file"]
          })
        }), (0, _v1.jsxs)(_v39, {
          size: "3",
          children: ["Maximum file size is ", (0, _v24.bytesToSize)(_v2), "."]
        })]
      }), _v0.length >= _v1 && (0, _v1.jsx)(_v38, {
        children: (0, _v1.jsx)(_v40, {
          format: "primary",
          icon: !1,
          children: "You've reached the maximum number of attachments."
        })
      }), _v0.length > 0 && (0, _v1.jsxs)(_v38, {
        children: [(0, _v1.jsx)(_v37.Header, {
          size: "5",
          format: "soft",
          children: "Attachments"
        }), _v0.map(_v0 => (0, _v1.jsxs)(_v16.Notice, {
          format: "primary",
          icon: !1,
          children: [(0, _v1.jsx)(_v22.Paragraph, {
            size: "2",
            children: _v0.name
          }), " ", (0, _v1.jsxs)(_v22.Paragraph, {
            size: "4",
            format: "alternative",
            children: ["[", (0, _v24.bytesToSize)(_v0.size, 1), "]"]
          }), (0, _v1.jsx)(_v34, {
            icon: (0, _v1.jsx)(_v21.DismissX, {}),
            size: "sm",
            variant: "minimalTransparent",
            format: "basic",
            onClick: () => _v5(_v0),
            disabled: _v4
          })]
        }, (0, _v35.v4)()))]
      })]
    });
  var _v42 = _v0.i(0);
  let _v43 = _v10.default.div.withConfig({
      displayName: "TagInput.style__TagInputBlock",
      componentId: "sc-2fc18138-0"
    })`
  display: flex;
  flex-wrap: wrap;
  min-height: ${(0, _v2.rem)(48)};
  padding: 0 ${(0, _v2.rem)(8)};
  border: ${(0, _v2.rem)(1)} solid rgba(0, 0, 0, 0.25);
  border-radius: ${(0, _v2.rem)(6)};
`,
    _v44 = _v10.default.ul.withConfig({
      displayName: "TagInput.style__TagList",
      componentId: "sc-2fc18138-1"
    })`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: ${(0, _v2.rem)(8)} 0 0;
`,
    _v45 = _v10.default.input.withConfig({
      displayName: "TagInput.style__TagInputText",
      componentId: "sc-2fc18138-2"
    })`
  flex: 1;
  border: none;
  height: ${(0, _v2.rem)(35)};
  font-size: ${(0, _v2.rem)(14)};
  padding: ${(0, _v2.rem)(4)} 0 0;
  &:focus {
    outline: transparent;
  }
`,
    _v46 = ({
      tags: _v0,
      inputFieldId: _v1,
      placeholderText: _v2,
      isSubmitting: _v3,
      onAddTag: _v4,
      onRemoveTag: _v5
    }) => (0, _v1.jsxs)(_v43, {
      children: [(0, _v1.jsx)(_v44, {
        children: _v0.map((_v0, _v1) => (0, _v1.jsxs)(_v42.Tag, {
          size: "sm",
          children: [(0, _v1.jsx)(_v42.TagLabel, {
            children: _v0
          }), (0, _v1.jsx)(_v42.TagCloseButton, {
            onClick: () => _v5(_v1)
          })]
        }, `tag_${_v1}`))
      }), (0, _v1.jsx)(_v45, {
        id: _v1,
        placeholder: _v2,
        type: "text",
        onKeyUp: _v0 => "Enter" === _v0.key ? _v4(_v0) : null,
        disabled: _v3
      })]
    }),
    _v47 = {
      name: "",
      email: "",
      cf_ent_sla_priority: "",
      subject: "",
      description: "",
      cf_support_group: ""
    },
    _v48 = [{
      name: "High",
      value: "ent_p1"
    }, {
      name: "Medium",
      value: "ent_p2"
    }, {
      name: "Low",
      value: "ent_p3"
    }],
    _v49 = [{
      name: "Core - PAC",
      value: "group_core_pac"
    }, {
      name: "Service Desk - OTT",
      value: "group_sd_ott"
    }, {
      name: "Accounts Receivable Tier-1",
      value: "group_ar_tier1"
    }],
    _v50 = (0, _v1.jsxs)("div", {
      style: {
        textAlign: "left"
      },
      children: [(0, _v1.jsxs)(_v22.Paragraph, {
        size: "3",
        children: [(0, _v1.jsx)("strong", {
          children: "High - "
        }), "A significant issue that makes the product unusable for the customer"]
      }), (0, _v1.jsx)("br", {}), (0, _v1.jsxs)(_v22.Paragraph, {
        size: "3",
        children: [(0, _v1.jsx)("strong", {
          children: "Medium - "
        }), "Issue with the product that needs support or engineering assistance to resolve"]
      }), (0, _v1.jsx)("br", {}), (0, _v1.jsxs)(_v22.Paragraph, {
        size: "3",
        children: [(0, _v1.jsx)("strong", {
          children: "Low - "
        }), "General product knowledge"]
      })]
    }),
    _v51 = ({
      viewer: _v0,
      enableAttachments: _v1
    }) => {
      let {
          register: _v2,
          handleSubmit: _v3,
          reset: _v4,
          formState: {
            errors: _v5,
            isSubmitting: _v6
          }
        } = (0, _v13.useForm)({
          defaultValues: _v47,
          mode: "onSubmit"
        }),
        [_v7, _v8] = (0, _v3.useState)(null),
        [_v9, _v10] = (0, _v3.useState)([]),
        [_v11, _v12] = (0, _v3.useState)(null),
        [_v13, _v14] = (0, _v3.useState)([]),
        [_v15, _v16] = (0, _v3.useState)(!1),
        [_v17, _v18] = (0, _v3.useState)([]),
        [_v19, _v20] = (0, _v3.useState)(!1),
        _v21 = async _v0 => {
          _v12(null), _v8(null);
          try {
            let _v0 = [];
            _v1 && _v9.length > 0 && (_v0 = await _v32(_v9, _v0.xsrft));
            let _v1 = await _v33(_v0, _v0, _v13, _v17, _v0.xsrft);
            _v8(_v1), _v4(), _v10([]), _v14([]), _v16(!1), _v18([]), _v20(!1);
          } catch (_v0) {
            _v12(_v0.message);
          }
        },
        _v22 = async _v0 => {
          "" !== _v0.target.value && "cc" === _v0.target.id && _v14([..._v13, _v0.target.value]), "" !== _v0.target.value && "follow" === _v0.target.id && _v18([..._v17, _v0.target.value]), _v0.target.value = "";
        },
        _v23 = async _v0 => {
          _v0 && _v10([..._v9, ...Array.from(_v0).filter(_v0 => {
            let _v1 = _v0.size > 0;
            if (_v1) {
              let _v0 = (0, _v24.bytesToSize)(_v0.size, 1);
              _v12(`File ${_v0.name} (${_v0}) is larger than ${(0, _v24.bytesToSize)(0)}.`);
            }
            return !_v1;
          })]);
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v16.Notice, {
          format: "primary",
          children: (0, _v1.jsxs)(_v22.Paragraph, {
            size: "3",
            children: ["You can find the instructions for this form", " ", (0, _v1.jsx)(_v23.Link, {
              href: "https://vimean.atlassian.net/wiki/spaces/COM/pages/3798335663/Submit+an+Internal+Request",
              target: "_blank",
              children: "here"
            }), " ", "[Updated June 2023]"]
          })
        }), (0, _v1.jsx)(_v29, {
          children: "Submit a request"
        }), (0, _v1.jsxs)(_v27, {
          children: [_v7 && (0, _v1.jsx)(_v16.Notice, {
            format: "positive",
            children: (0, _v1.jsxs)(_v22.Paragraph, {
              size: "2",
              children: ["Your ticket (#", _v7, ") has been submitted."]
            })
          }), _v11 && (0, _v1.jsxs)(_v16.Notice, {
            format: "negative",
            children: [(0, _v1.jsx)(_v22.Paragraph, {
              size: "2",
              children: _v11
            }), (0, _v1.jsx)(_v34, {
              icon: (0, _v1.jsx)(_v21.DismissX, {}),
              size: "sm",
              variant: "minimalTransparent",
              format: "basic",
              onClick: () => _v12(null),
              disabled: _v6
            })]
          }), (0, _v1.jsx)(_v28, {
            children: (0, _v1.jsx)(_v17.Input, {
              id: "name",
              placeholder: "Name",
              label: "Customer Name",
              ..._v2("name", {
                required: !0
              }),
              status: _v5.name ? "negative" : void 0,
              type: "text",
              disabled: _v6
            })
          }), (0, _v1.jsx)(_v28, {
            children: (0, _v1.jsx)(_v17.Input, {
              id: "email",
              placeholder: "Email",
              label: "Customer Email",
              ..._v2("email", {
                required: !0
              }),
              status: _v5.email ? "negative" : void 0,
              type: "text",
              disabled: _v6
            })
          }), (0, _v1.jsx)(_v28, {
            children: (0, _v1.jsx)(_v18.Toggle, {
              onChange: () => _v16(_v0 => !_v0),
              label: "CC",
              name: "demoToggle1",
              id: "Toggle1",
              value: "1",
              checked: _v15,
              disabled: _v6
            })
          }), _v15 && (0, _v1.jsx)(_v46, {
            tags: _v13,
            inputFieldId: "cc",
            placeholderText: "Enter email id & press enter to add cc'd",
            isSubmitting: _v6,
            onAddTag: _v0 => _v22(_v0),
            onRemoveTag: _v0 => {
              _v14([..._v13.filter((_v0, _v1) => _v1 !== _v0)]);
            }
          }), (0, _v1.jsx)(_v16.Notice, {
            format: "primary",
            children: (0, _v1.jsx)(_v22.Paragraph, {
              size: "3",
              children: "People who are added as CCs will have their email addresses visible to all end users in the thread. CCs can respond to ticket notifications publicly, or they can remove the requester from the notification to submit a private response."
            })
          }), (0, _v1.jsx)(_v28, {
            children: (0, _v1.jsx)(_v18.Toggle, {
              onChange: () => _v20(_v0 => !_v0),
              label: "Follow",
              name: "followToggle",
              id: "followToggle",
              value: "1",
              checked: _v19,
              disabled: _v6
            })
          }), _v19 && (0, _v1.jsx)(_v46, {
            tags: _v17,
            inputFieldId: "follow",
            placeholderText: "Enter email id & press enter to add follower",
            isSubmitting: _v6,
            onAddTag: _v0 => _v22(_v0),
            onRemoveTag: _v0 => {
              _v18([..._v17.filter((_v0, _v1) => _v1 !== _v0)]);
            }
          }), (0, _v1.jsx)(_v16.Notice, {
            format: "primary",
            children: (0, _v1.jsx)(_v22.Paragraph, {
              size: "3",
              children: "Followers allow you to include additional internal users (Vimeo) on ticket notifications. Internal users can add followers to tickets. Followers receive updates on the ticket without exposing their identity to end users."
            })
          }), (0, _v1.jsx)(_v20.Tip, {
            attach: "right",
            content: _v50,
            children: (0, _v1.jsx)(_v28, {
              children: (0, _v1.jsxs)(_v19.Select, {
                id: "cf_ent_sla_priority",
                label: "Priority",
                ..._v2("cf_ent_sla_priority", {
                  required: !0
                }),
                status: _v5.cf_ent_sla_priority ? "negative" : void 0,
                disabled: _v6,
                children: [(0, _v1.jsx)("option", {
                  value: "",
                  disabled: !0,
                  children: "Choose"
                }), _v48.map((_v0, _v1) => (0, _v1.jsx)(_v19.Select.Option, {
                  value: _v0.value,
                  children: _v0.name
                }, `cf_ent_sla_priority${_v1}`))]
              })
            })
          }), (0, _v1.jsx)(_v28, {
            children: (0, _v1.jsxs)(_v19.Select, {
              id: "cf_support_group",
              label: "Support Group",
              ..._v2("cf_support_group", {
                required: !0
              }),
              status: _v5.cf_support_group ? "negative" : void 0,
              disabled: _v6,
              children: [(0, _v1.jsx)("option", {
                value: "",
                disabled: !0,
                children: "Choose"
              }), _v49.map((_v0, _v1) => (0, _v1.jsx)(_v19.Select.Option, {
                value: _v0.value,
                children: _v0.name
              }, `cf_support_group${_v1}`))]
            })
          }), (0, _v1.jsx)(_v16.Notice, {
            format: "primary",
            children: (0, _v1.jsx)(_v22.Paragraph, {
              size: "3",
              children: '"Service Desk - Core" group has now been updated to "Core - PAC" group.'
            })
          }), (0, _v1.jsx)(_v28, {
            children: (0, _v1.jsx)(_v17.Input, {
              id: "subject",
              placeholder: "Subject",
              label: "Subject",
              ..._v2("subject", {
                required: !0
              }),
              status: _v5.subject ? "negative" : void 0,
              type: "text",
              disabled: _v6
            })
          }), (0, _v1.jsx)(_v28, {
            children: (0, _v1.jsx)(_v15.TextArea, {
              id: "description",
              label: "Description",
              ..._v2("description", {
                required: !0
              }),
              format: _v5.description ? "negative" : void 0,
              disabled: _v6,
              placeholder: "Please enter a detailed description of your issue."
            })
          }), _v1 && (0, _v1.jsx)(_v41, {
            files: _v9,
            maxAttachments: 5,
            maxFileSize: 0,
            acceptedFileTypes: _v30,
            isSubmitting: _v6,
            onAddFiles: _v0 => _v23(_v0),
            onRemoveFile: _v0 => {
              _v10(_v9.filter(_v0 => _v0 !== _v0));
            }
          })]
        }), (0, _v1.jsx)(_v26, {
          children: (0, _v1.jsx)(_v14.Button, {
            onClick: _v3(_v21),
            disabled: _v6,
            children: "Submit request"
          })
        })]
      });
    },
    _v52 = ({
      viewer: _v0
    }) => (0, _v1.jsxs)(_v12, {
      children: [(0, _v1.jsx)(_v9.default, {
        children: (0, _v1.jsx)("title", {
          children: "Internal Support Request Form"
        })
      }), (0, _v1.jsx)(_v51, {
        viewer: _v0,
        enableAttachments: !0
      })]
    });
  function _v53() {
    let _v0 = (0, _v3.useContext)(_v8.ViewerContext);
    return _v0 ? (0, _v1.jsx)(_v52, {
      viewer: _v0
    }) : (0, _v1.jsx)(_v7.default, {});
  }
  _v53.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v5.Ribbon, {
      animate: !1,
      style: {
        height: (0, _v2.rem)(3)
      }
    }), _v0, (0, _v1.jsx)(_v6.MinimalFooterLayout, {})]
  }), (0, _v4.withPageSetup)({
    staffOnly: !0,
    omitEsi: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v53], 0);
}