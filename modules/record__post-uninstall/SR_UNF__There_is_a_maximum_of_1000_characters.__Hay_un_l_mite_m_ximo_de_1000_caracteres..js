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
  let _v12 = "SR_UNF";
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = {
    thereIsAMaximum: (0, _v7.translate)({
      singular: "There is a maximum of 1000 characters.",
      dictionary: {
        es: {
          singular: "Hay un límite máximo de 1000 caracteres."
        },
        "de-DE": {
          singular: "Darf maximal 1000 Zeichen umfassen."
        },
        "fr-FR": {
          singular: "Une limite de 1 000 caractères s'applique."
        },
        "ja-JP": {
          singular: "最大文字数は 1000 文字です。"
        },
        "ko-KR": {
          singular: "최대 1000자까지 허용됩니다."
        },
        "pt-BR": {
          singular: "Há um máximo de 1000 caracteres."
        },
        "zh-CN": {
          singular: "最多 1000 个字符。"
        }
      }
    }),
    addYourThoughts: (0, _v7.translate)({
      singular: "Add your thoughts",
      dictionary: {
        es: {
          singular: "Escriba su opinión"
        },
        "de-DE": {
          singular: "Fügen Sie Ihre Gedanken hinzu"
        },
        "fr-FR": {
          singular: "Ajoutez vos commentaires"
        },
        "ja-JP": {
          singular: "意見を追加"
        },
        "ko-KR": {
          singular: "의견 추가하기"
        },
        "pt-BR": {
          singular: "Dê sua opinião"
        },
        "zh-CN": {
          singular: "添加您的想法"
        }
      }
    })
  };
  function _v16() {
    let {
        isSubmitted: _v0,
        onSubmit: _v1
      } = function () {
        let _v0 = (0, _v10.useHasMounted)(),
          [_v1, _v2] = (0, _v2.useState)(null),
          _v3 = (0, _v2.useContext)(_v11.ViewerContext),
          [_v4, _v5] = (0, _v2.useState)(!1),
          [_v6, _v7] = (0, _v2.useState)(!1);
        return (0, _v2.useEffect)(() => {
          _v0 && !_v1?.source && _v7((0, _v9.loadCookie)(_v12) || !1);
        }, [_v0, _v1]), (0, _v2.useEffect)(() => {
          _v2(_v8.default.parse(window.location.search));
        }, []), (0, _v2.useEffect)(() => {
          _v1?.source && ((0, _v9.clearCookie)(_v12), window.history.replaceState(null, window.document.title, window.location.pathname));
        }, [_v1]), (0, _v2.useEffect)(() => {
          _v1?.source && _v3 && setTimeout(() => {
            let _v0;
            return _v0 = _v1?.duplicate === "true", _v13.BigPictureClient.sendEvent(new _v13.Event("record.extension_uninstalled", 2, {
              is_duplicated_install: _v0
            }));
          }, 0);
        }, [_v3, _v1]), {
          isSubmitted: _v4 || !!_v6,
          onSubmit: (0, _v2.useCallback)(_v0 => {
            _v5(!0), (0, _v9.saveCookie)({
              name: _v12,
              value: Date.now().toString()
            }), _v13.BigPictureClient.sendEvent(new _v13.Event("record.uninstall_feedback_submitted", 1, {
              feedback_text: _v0
            }));
          }, []),
          hasMounted: _v0
        };
      }(),
      [_v2, _v3] = (0, _v2.useState)(!1),
      {
        isValid: _v4,
        isEnabled: _v5,
        feedback: _v6,
        onChange: _v7,
        isEdited: _v8,
        handleSubmit: _v9
      } = function (_v0, _v1 = 0) {
        let [_v2, _v3] = (0, _v2.useState)(""),
          [_v4, _v5] = (0, _v2.useState)(!1),
          _v6 = !_v4 || _v2.length > 0 && _v2.length <= _v1,
          _v7 = (0, _v2.useCallback)(_v0 => {
            _v5(!0), _v3(_v0.target.value);
          }, []),
          _v8 = (0, _v2.useCallback)(_v0 => {
            if (_v0?.preventDefault(), !_v2) return _v5(!0);
            _v0(_v2);
          }, [_v2, _v0]);
        return {
          isValid: _v2.length <= _v1,
          isEdited: _v4,
          feedback: _v2,
          isEnabled: _v6,
          handleSubmit: _v8,
          onChange: _v7
        };
      }(_v1),
      _v10 = (0, _v2.useCallback)(() => {
        _v0 ? (window.location.replace("/"), _v3(!0)) : _v9();
      }, [_v9, _v0]);
    return (0, _v1.jsx)(_v14.RecordPageBase, {
      pageType: "postUninstall",
      handleButtonClick: _v10,
      isButtonDisabled: _v2,
      pageState: _v0 ? "alternative" : "default",
      children: !_v0 && (0, _v1.jsxs)(_v5.FormControl, {
        isInvalid: !_v4,
        width: "50%",
        maxWidth: (0, _v3.rem)(600),
        children: [(0, _v1.jsx)(_v4.Textarea, {
          id: "record-feedback-form",
          placeholder: _v15.addYourThoughts,
          value: _v6,
          isInvalid: !_v5 && _v8,
          width: "100%",
          resize: "none",
          minHeight: (0, _v3.rem)(120),
          onChange: _v7
        }), !_v4 && (0, _v1.jsx)(_v6.FormErrorMessage, {
          justifyContent: "center",
          children: _v15.thereIsAMaximum
        })]
      })
    });
  }
  _v16.getLayout = _v0 => (0, _v1.jsx)(_v1.Fragment, {
    children: _v0
  }), _v0.s(["__N_SSG", 0, !0, "default", 0, _v16], 0);
}