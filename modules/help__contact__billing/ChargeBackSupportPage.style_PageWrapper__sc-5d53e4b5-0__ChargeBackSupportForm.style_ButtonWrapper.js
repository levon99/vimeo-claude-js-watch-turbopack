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
    displayName: "ChargeBackSupportPage.style__PageWrapper",
    componentId: "sc-5d53e4b5-0"
  })`
  margin: 0 auto;
  padding: ${(0, _v9.rem)(100)} 0;
  width: ${(0, _v9.rem)(235)};
  ${_v11.media.xsm`
    width: ${(0, _v9.rem)(294)};
  `}
  ${_v11.media.sm`
    width: ${(0, _v9.rem)(588)};
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
    _v22 = _v0.i(0);
  let _v23 = _v10.default.div.withConfig({
      displayName: "ChargeBackSupportForm.style__ButtonWrapper",
      componentId: "sc-620c9ade-0"
    })`
  padding: ${(0, _v9.rem)(10)};
`,
    _v24 = _v10.default.div.withConfig({
      displayName: "ChargeBackSupportForm.style__FieldsWrapper",
      componentId: "sc-620c9ade-1"
    })`
  text-align: initial;
  padding: ${(0, _v9.rem)(10)};
  overflow: auto;
`,
    _v25 = _v10.default.div.withConfig({
      displayName: "ChargeBackSupportForm.style__FormField",
      componentId: "sc-620c9ade-2"
    })`
  padding: ${(0, _v9.rem)(16)} 0;
`,
    _v26 = _v10.default.h2.withConfig({
      displayName: "ChargeBackSupportForm.style__PageSubheader",
      componentId: "sc-620c9ade-3"
    })`
  padding: ${(0, _v9.rem)(10)} ${(0, _v9.rem)(10)} ${(0, _v9.rem)(10)} ${(0, _v9.rem)(10)};
  color: ${(0, _v22.slate)(600)};
`,
    _v27 = ["image/jpeg", "text/*", "application/json", "application/pdf", "application/zip", ".heic", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".png"],
    _v28 = async (_v0, _v1) => {
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
    _v29 = async (_v0, _v1) => Promise.all(_v0.map(_v0 => _v28(_v0, _v1))),
    _v30 = async (_v0, _v1, _v2) => {
      let _v3 = {
          ..._v0,
          uploadTokens: _v1,
          token: _v2
        },
        _v4 = await fetch("/help/contact?action=chargeback_support", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(_v3)
        });
      if (!_v4.ok) throw Error("There was an error submitting your ticket. Please try again in a few minutes.");
      let _v5 = await _v4.json();
      if (_v5.error) throw Error(_v5.error.display);
      return _v5.response.ticket.id;
    },
    _v31 = (0, _v10.default)(_v14.Button).withConfig({
      displayName: "style__DismissButton",
      componentId: "sc-d11fdb8e-0"
    })`
  position: absolute;
  top: 20%;
  right: ${(0, _v9.rem)(6)};
  color: ${(0, _v22.red)(300)};
`;
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  let _v35 = _v10.default.div.withConfig({
      displayName: "AttachmentField.style__AttachmentsBlock",
      componentId: "sc-4a9db4df-0"
    })`
  padding: ${(0, _v9.rem)(16)} 0;
`,
    _v36 = (0, _v10.default)(_v20.Paragraph).withConfig({
      displayName: "AttachmentField.style__FileUploadHelperMessage",
      componentId: "sc-4a9db4df-1"
    })`
  padding-left: ${(0, _v9.rem)(15)};
  opacity: 0.5;
`,
    _v37 = (0, _v10.default)(_v17.Notice).withConfig({
      displayName: "AttachmentField.style__MaxAttachmentsNotice",
      componentId: "sc-4a9db4df-2"
    })`
  background-color: ${(0, _v22.yellow)(100)};
`,
    _v38 = ({
      files: _v0,
      maxAttachments: _v1,
      maxFileSize: _v2,
      acceptedFileTypes: _v3,
      isSubmitting: _v4,
      onRemoveFile: _v5,
      onAddFiles: _v6
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v35, {
        children: [(0, _v1.jsx)(_v33.FileUpload, {
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
        }), (0, _v1.jsxs)(_v36, {
          size: "3",
          children: ["Maximum file size is ", (0, _v21.bytesToSize)(_v2), "."]
        })]
      }), _v0.length >= _v1 && (0, _v1.jsx)(_v35, {
        children: (0, _v1.jsx)(_v37, {
          format: "primary",
          icon: !1,
          children: "You've reached the maximum number of attachments."
        })
      }), _v0.length > 0 && (0, _v1.jsxs)(_v35, {
        children: [(0, _v1.jsx)(_v34.Header, {
          size: "5",
          format: "soft",
          children: "Attachments"
        }), _v0.map(_v0 => (0, _v1.jsxs)(_v17.Notice, {
          format: "primary",
          icon: !1,
          children: [(0, _v1.jsx)(_v20.Paragraph, {
            size: "2",
            children: _v0.name
          }), " ", (0, _v1.jsxs)(_v20.Paragraph, {
            size: "4",
            format: "alternative",
            children: ["[", (0, _v21.bytesToSize)(_v0.size, 1), "]"]
          }), (0, _v1.jsx)(_v31, {
            icon: (0, _v1.jsx)(_v19.DismissX, {}),
            size: "sm",
            variant: "minimalTransparent",
            format: "basic",
            onClick: () => _v5(_v0),
            disabled: _v4
          })]
        }, (0, _v32.v4)()))]
      })]
    }),
    _v39 = {
      name: "",
      email: "",
      category: "",
      description: ""
    },
    _v40 = [{
      name: "Questions about a charge on my credit card",
      value: "cf_questions_about_a_charge_on_my_credit_card"
    }, {
      name: "Dispute transaction with Vimeo",
      value: "cf_dispute_transaction_with_vimeo"
    }],
    _v41 = ({
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
          defaultValues: _v39,
          mode: "onSubmit"
        }),
        [_v7, _v8] = (0, _v2.useState)(null),
        [_v9, _v10] = (0, _v2.useState)([]),
        [_v11, _v12] = (0, _v2.useState)(null),
        _v13 = async _v0 => {
          _v12(null), _v8(null);
          try {
            let _v0 = [];
            _v1 && _v9.length > 0 && (_v0 = await _v29(_v9, _v0.xsrft));
            let _v1 = await _v30(_v0, _v0, _v0.xsrft);
            _v8(_v1), _v4(), _v10([]);
          } catch (_v0) {
            _v12(_v0.message);
          }
        },
        _v14 = async _v0 => {
          _v0 && _v10([..._v9, ...Array.from(_v0).filter(_v0 => {
            let _v1 = _v0.size > 0;
            if (_v1) {
              let _v0 = (0, _v21.bytesToSize)(_v0.size, 1);
              _v12(`File ${_v0.name} (${_v0}) is larger than ${(0, _v21.bytesToSize)(0)}.`);
            }
            return !_v1;
          })]);
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v26, {
          children: "Submit a billing inquiry"
        }), (0, _v1.jsxs)(_v24, {
          children: [_v7 && (0, _v1.jsx)(_v17.Notice, {
            format: "positive",
            children: (0, _v1.jsxs)(_v20.Paragraph, {
              size: "2",
              children: ["Your ticket (#", _v7, ") has been submitted."]
            })
          }), _v11 && (0, _v1.jsxs)(_v17.Notice, {
            format: "negative",
            children: [(0, _v1.jsx)(_v20.Paragraph, {
              size: "2",
              children: _v11
            }), (0, _v1.jsx)(_v31, {
              icon: (0, _v1.jsx)(_v19.DismissX, {}),
              size: "sm",
              variant: "minimalTransparent",
              format: "basic",
              onClick: () => _v12(null),
              disabled: _v6
            })]
          }), !_v0.user && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v25, {
              children: (0, _v1.jsx)(_v18.Input, {
                id: "name",
                placeholder: "Name",
                label: "Name",
                ..._v2("name", {
                  required: !0
                }),
                status: _v5.name ? "negative" : void 0,
                type: "text",
                disabled: _v6
              })
            }), (0, _v1.jsx)(_v25, {
              children: (0, _v1.jsx)(_v18.Input, {
                id: "email",
                placeholder: "Email",
                label: "Email",
                ..._v2("email", {
                  required: !0
                }),
                status: _v5.email ? "negative" : void 0,
                type: "text",
                disabled: _v6
              })
            })]
          }), (0, _v1.jsx)(_v25, {
            children: (0, _v1.jsxs)(_v16.Select, {
              id: "category",
              label: "What can we help you with?",
              ..._v2("category", {
                required: !0
              }),
              status: _v5.category ? "negative" : void 0,
              disabled: _v6,
              children: [(0, _v1.jsx)("option", {
                value: "",
                disabled: !0,
                children: "Choose"
              }), _v40.map((_v0, _v1) => (0, _v1.jsx)(_v16.Select.Option, {
                value: _v0.value,
                children: _v0.name
              }, `category_${_v1}`))]
            })
          }), (0, _v1.jsx)(_v25, {
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
          }), _v1 && (0, _v1.jsx)(_v38, {
            files: _v9,
            maxAttachments: 5,
            maxFileSize: 0,
            acceptedFileTypes: _v27,
            isSubmitting: _v6,
            onAddFiles: _v0 => _v14(_v0),
            onRemoveFile: _v0 => {
              _v10(_v9.filter(_v0 => _v0 !== _v0));
            }
          })]
        }), (0, _v1.jsx)(_v23, {
          children: (0, _v1.jsx)(_v14.Button, {
            onClick: _v3(_v13),
            disabled: _v6,
            children: "Submit request"
          })
        })]
      });
    },
    _v42 = ({
      viewer: _v0
    }) => (0, _v1.jsxs)(_v12, {
      children: [(0, _v1.jsx)(_v8.default, {
        children: (0, _v1.jsx)("title", {
          children: "Billing Support"
        })
      }), (0, _v1.jsx)(_v41, {
        viewer: _v0,
        enableAttachments: !0
      })]
    }),
    _v43 = () => {
      let _v0 = (0, _v2.useContext)(_v7.ViewerContext);
      return _v0 ? (0, _v1.jsx)(_v42, {
        viewer: _v0
      }) : (0, _v1.jsx)(_v6.default, {});
    };
  _v43.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v4.DefaultNavigation, {
      hasThemeSupport: !1
    }), _v0, (0, _v1.jsx)(_v5.MinimalFooterLayout, {})]
  }), (0, _v3.withPageSetup)({
    omitEsi: !0,
    inlineViewer: "all"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v43], 0);
}