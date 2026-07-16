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
    _v15 = _v0.i(0);
  let _v16 = _v14.default.div.withConfig({
      displayName: "PartnerSupportPage.style__PageWrapper",
      componentId: "sc-cd8aa9ff-0"
    })`
  margin: 0 auto;
  padding: ${(0, _v3.rem)(100)} 0;
  width: ${(0, _v3.rem)(235)};
  ${_v15.media.xsm`
    width: ${(0, _v3.rem)(294)};
  `}
  ${_v15.media.sm`
    width: ${(0, _v3.rem)(588)};
  `}
`,
    _v17 = {
      asana: {
        companyName: "Asana",
        emailDomain: "asana.com"
      },
      vimeo: {
        companyName: "Vimeo",
        emailDomain: "vimeo.com"
      }
    };
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = _v14.default.div.withConfig({
      displayName: "PartnerSupportForm.style__ButtonWrapper",
      componentId: "sc-3d8ad4e8-0"
    })`
  padding: ${(0, _v3.rem)(10)};
`,
    _v28 = _v14.default.div.withConfig({
      displayName: "PartnerSupportForm.style__FieldsWrapper",
      componentId: "sc-3d8ad4e8-1"
    })`
  text-align: initial;
  padding: ${(0, _v3.rem)(10)};
  overflow: auto;
`,
    _v29 = _v14.default.div.withConfig({
      displayName: "PartnerSupportForm.style__FormField",
      componentId: "sc-3d8ad4e8-2"
    })`
  padding: ${(0, _v3.rem)(16)} 0;
`,
    _v30 = _v14.default.h1.withConfig({
      displayName: "PartnerSupportForm.style__PageHeader",
      componentId: "sc-3d8ad4e8-3"
    })`
  position: relative;
  padding: ${(0, _v3.rem)(16)} ${(0, _v3.rem)(10)} ${(0, _v3.rem)(4)} ${(0, _v3.rem)(10)};
`,
    _v31 = _v14.default.h2.withConfig({
      displayName: "PartnerSupportForm.style__PageSubheader",
      componentId: "sc-3d8ad4e8-4"
    })`
  position: relative;
  padding: ${(0, _v3.rem)(10)} ${(0, _v3.rem)(10)} ${(0, _v3.rem)(10)} ${(0, _v3.rem)(10)};
  color: ${(0, _v26.slate)(600)};
`,
    _v32 = (0, _v14.default)(_v19.Button).withConfig({
      displayName: "PartnerSupportForm.style__DismissButton",
      componentId: "sc-3d8ad4e8-5"
    })`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${(0, _v3.rem)(6)};
  color: ${(0, _v26.red)(300)};
`;
  (0, _v14.default)(_v22.Notice).withConfig({
    displayName: "PartnerSupportForm.style__MaxAttachmentsNotice",
    componentId: "sc-3d8ad4e8-6"
  })`
  background-color: ${(0, _v26.yellow)(100)};
`;
  let _v33 = ["image/jpeg", "text/*", "application/json", "application/pdf", "application/zip", ".heic", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx"],
    _v34 = async (_v0, _v1) => {
      let _v2 = new FormData();
      _v2.append("attachment", _v0), _v2.append("token", _v1);
      let _v3 = await fetch("/help/contact?action=upload_file", {
        method: "POST",
        body: _v2
      });
      if (!_v3.ok) throw Error("There was an error uploading your attachment. Please try again in a few minutes.");
      let _v4 = await _v3.json();
      if (_v4.error) throw Error(_v4.error.display);
      return _v4.response.upload.token;
    },
    _v35 = async (_v0, _v1) => Promise.all(_v0.map(_v0 => _v34(_v0, _v1))),
    _v36 = async (_v0, _v1, _v2, _v3) => {
      let _v4 = {
          ..._v0,
          uploadTokens: _v1,
          companyName: _v2,
          token: _v3
        },
        _v5 = await fetch("/help/contact?action=partner_support", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(_v4)
        });
      if (!_v5.ok) throw Error("There was an error submitting your ticket. Please try again in a few minutes.");
      let _v6 = await _v5.json();
      if (_v6.error) throw Error(_v6.error.display);
      return _v6.response.ticket.id;
    };
  var _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  let _v40 = _v14.default.div.withConfig({
      displayName: "AttachmentField.style__AttachmentsBlock",
      componentId: "sc-ea5d7e8d-0"
    })`
  padding: ${(0, _v3.rem)(16)} 0;
`,
    _v41 = (0, _v14.default)(_v24.Paragraph).withConfig({
      displayName: "AttachmentField.style__FileUploadHelperMessage",
      componentId: "sc-ea5d7e8d-1"
    })`
  padding-left: ${(0, _v3.rem)(15)};
  opacity: 0.5;
`,
    _v42 = (0, _v14.default)(_v22.Notice).withConfig({
      displayName: "AttachmentField.style__MaxAttachmentsNotice",
      componentId: "sc-ea5d7e8d-2"
    })`
  background-color: ${(0, _v26.yellow)(100)};
`,
    _v43 = (0, _v14.default)(_v19.Button).withConfig({
      displayName: "AttachmentField.style__DismissButton",
      componentId: "sc-ea5d7e8d-3"
    })`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${(0, _v3.rem)(6)};
  color: ${(0, _v26.red)(300)};
`,
    _v44 = ({
      files: _v0,
      maxAttachments: _v1,
      maxFileSize: _v2,
      acceptedFileTypes: _v3,
      isSubmitting: _v4,
      onRemoveFile: _v5,
      onAddFiles: _v6
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v40, {
        children: [(0, _v1.jsx)(_v38.FileUpload, {
          accept: _v3.join(","),
          onChange: _v0 => {
            _v6(_v0.target.files), _v0.target.value = "";
          },
          disabled: _v4 || _v0.length >= _v1,
          children: (0, _v1.jsxs)(_v19.Button, {
            format: "alternative",
            variant: "dashed",
            disabled: _v4 || _v0.length >= _v1,
            children: ["Attach ", _v0.length > 0 ? "another" : "a", " file"]
          })
        }), (0, _v1.jsxs)(_v41, {
          size: "3",
          children: ["Maximum file size is ", (0, _v25.bytesToSize)(_v2), "."]
        })]
      }), _v0.length >= _v1 && (0, _v1.jsx)(_v40, {
        children: (0, _v1.jsx)(_v42, {
          format: "primary",
          icon: !1,
          children: "You've reached the maximum number of attachments."
        })
      }), _v0.length > 0 && (0, _v1.jsxs)(_v40, {
        children: [(0, _v1.jsx)(_v39.Header, {
          size: "5",
          format: "soft",
          children: "Attachments"
        }), _v0.map(_v0 => (0, _v1.jsxs)(_v22.Notice, {
          format: "primary",
          icon: !1,
          children: [(0, _v1.jsx)(_v24.Paragraph, {
            size: "2",
            children: _v0.name
          }), " ", (0, _v1.jsxs)(_v24.Paragraph, {
            size: "4",
            format: "alternative",
            children: ["[", (0, _v25.bytesToSize)(_v0.size, 1), "]"]
          }), (0, _v1.jsx)(_v43, {
            icon: (0, _v1.jsx)(_v23.DismissX, {}),
            size: "sm",
            variant: "minimalTransparent",
            format: "basic",
            onClick: () => _v5(_v0),
            disabled: _v4
          })]
        }, (0, _v37.v4)()))]
      })]
    }),
    _v45 = {
      severity: "",
      description: ""
    },
    _v46 = [{
      name: "Critical service impact",
      value: "psf_critical"
    }, {
      name: "High service impact",
      value: "psf_high"
    }, {
      name: "Minor service impact",
      value: "psf_minor"
    }],
    _v47 = ({
      viewer: _v0,
      companyName: _v1,
      enableAttachments: _v2
    }) => {
      let {
          register: _v3,
          handleSubmit: _v4,
          reset: _v5,
          formState: {
            errors: _v6,
            isSubmitting: _v7
          }
        } = (0, _v18.useForm)({
          defaultValues: _v45,
          mode: "onSubmit"
        }),
        [_v8, _v9] = (0, _v4.useState)(null),
        [_v10, _v11] = (0, _v4.useState)([]),
        [_v12, _v13] = (0, _v4.useState)(null),
        _v14 = async _v0 => {
          _v13(null), _v9(null);
          try {
            let _v0 = [];
            _v2 && _v10.length > 0 && (_v0 = await _v35(_v10, _v0.xsrft));
            let _v1 = await _v36(_v0, _v0, _v1, _v0.xsrft);
            _v9(_v1), _v5(), _v11([]);
          } catch (_v0) {
            _v13(_v0.message);
          }
        },
        _v15 = async _v0 => {
          _v0 && _v11([..._v10, ...Array.from(_v0).filter(_v0 => {
            let _v1 = _v0.size > 0;
            if (_v1) {
              let _v0 = (0, _v25.bytesToSize)(_v0.size, 1);
              _v13(`File ${_v0.name} (${_v0}) is larger than ${(0, _v25.bytesToSize)(0)}.`);
            }
            return !_v1;
          })]);
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v30, {
          children: ["Vimeo Partner Support: ", _v1]
        }), (0, _v1.jsx)(_v31, {
          children: "Submit a request"
        }), (0, _v1.jsxs)(_v28, {
          children: [_v8 && (0, _v1.jsx)(_v22.Notice, {
            format: "positive",
            children: (0, _v1.jsxs)(_v24.Paragraph, {
              size: "2",
              children: ["Your ticket (#", _v8, ") has been submitted."]
            })
          }), _v12 && (0, _v1.jsxs)(_v22.Notice, {
            format: "negative",
            children: [(0, _v1.jsx)(_v24.Paragraph, {
              size: "2",
              children: _v12
            }), (0, _v1.jsx)(_v32, {
              icon: (0, _v1.jsx)(_v23.DismissX, {}),
              size: "sm",
              variant: "minimalTransparent",
              format: "basic",
              onClick: () => _v13(null),
              disabled: _v7
            })]
          }), (0, _v1.jsx)(_v29, {
            children: (0, _v1.jsxs)(_v21.Select, {
              id: "severity",
              label: "Rate the severity of your issue",
              ..._v3("severity", {
                required: !0
              }),
              status: _v6.severity ? "negative" : void 0,
              disabled: _v7,
              children: [(0, _v1.jsx)("option", {
                value: "",
                disabled: !0,
                children: "Choose severity"
              }), _v46.map((_v0, _v1) => (0, _v1.jsx)(_v21.Select.Option, {
                value: _v0.value,
                children: _v0.name
              }, `SEVERITY_${_v1}`))]
            })
          }), (0, _v1.jsx)(_v29, {
            children: (0, _v1.jsx)(_v20.TextArea, {
              id: "description",
              label: "Description",
              ..._v3("description", {
                required: !0
              }),
              status: _v6.description ? "negative" : void 0,
              disabled: _v7,
              placeholder: "Please enter a detailed description of your issue."
            })
          }), _v2 && (0, _v1.jsx)(_v44, {
            files: _v10,
            maxAttachments: 5,
            maxFileSize: 0,
            acceptedFileTypes: _v33,
            isSubmitting: _v7,
            onAddFiles: _v0 => _v15(_v0),
            onRemoveFile: _v0 => {
              _v11(_v10.filter(_v0 => _v0 !== _v0));
            }
          })]
        }), (0, _v1.jsx)(_v27, {
          children: (0, _v1.jsx)(_v19.Button, {
            onClick: _v4(_v14),
            disabled: _v7,
            children: "Submit request"
          })
        })]
      });
    },
    _v48 = ({
      viewer: _v0,
      partner: _v1
    }) => {
      let _v2,
        {
          data: _v3
        } = (0, _v13.useGetMe)({
          select: ["email"]
        }),
        _v4 = _v3 ? _v3.email : null;
      if (!_v4) return (0, _v1.jsx)(_v10.default, {});
      if (_v1 in _v17) {
        let _v0 = _v17[_v1];
        _v4.substring(_v4.lastIndexOf("@") + 1).toLowerCase() === _v0.emailDomain.toLowerCase() && (_v2 = _v0.companyName);
      }
      return _v2 ? (0, _v1.jsxs)(_v16, {
        children: [(0, _v1.jsx)(_v12.default, {
          children: (0, _v1.jsxs)("title", {
            children: ["Vimeo Partner Support | ", _v2]
          })
        }), (0, _v1.jsx)(_v47, {
          viewer: _v0,
          companyName: _v2,
          enableAttachments: !1
        })]
      }) : (0, _v1.jsx)(_v8.ErrorPage, {
        error: new _v5.ResourceNotFoundError()
      });
    };
  function _v49() {
    let _v0 = (0, _v4.useContext)(_v11.ViewerContext),
      {
        partner: _v1
      } = (0, _v2.useRouter)().query;
    return _v0 && _v1 ? "string" != typeof _v1 ? (0, _v1.jsx)(_v8.ErrorPage, {
      error: new _v5.ResourceNotFoundError()
    }) : (0, _v1.jsx)(_v48, {
      viewer: _v0,
      partner: _v1
    }) : (0, _v1.jsx)(_v10.default, {});
  }
  _v49.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v7.Ribbon, {
      animate: !1,
      style: {
        height: (0, _v3.rem)(3)
      }
    }), _v0, (0, _v1.jsx)(_v9.MinimalFooterLayout, {})]
  }), (0, _v6.withPageSetup)({
    requireLogin: !0,
    omitEsi: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v49], 0);
}