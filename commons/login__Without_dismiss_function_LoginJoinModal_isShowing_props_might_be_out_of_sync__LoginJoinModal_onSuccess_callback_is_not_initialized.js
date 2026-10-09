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
  let _v16 = (0, _v0.i(0).default)(async () => {
      let {
        LoginJoinModal: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v17 = {
      type: "login",
      isShowing: !1,
      xsrft: "",
      onDismiss: () => console.warn("Without dismiss function, LoginJoinModal isShowing props might be out of sync"),
      onSuccess: () => console.warn("LoginJoinModal: onSuccess callback is not initialized")
    },
    _v18 = (0, _v2.createContext)({
      modalState: _v17,
      setModalState: () => Error("Setter function is not initialized"),
      toggleLoginModal: () => Error("Toggle function is not initialized")
    }),
    _v19 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v2.useState)(_v17),
        _v3 = (0, _v2.useCallback)(_v0 => _v2(_v0 => ({
          ..._v0,
          ..._v0
        })), []),
        _v4 = (0, _v2.useCallback)((_v0, _v1) => {
          _v3({
            isShowing: _v0,
            type: _v1 || "login"
          });
        }, [_v3]),
        _v5 = (0, _v2.useMemo)(() => ({
          modalState: _v1,
          setModalState: _v3,
          toggleLoginModal: _v4
        }), [_v1, _v3, _v4]);
      return (0, _v1.jsx)(_v18.Provider, {
        value: _v5,
        children: _v0
      });
    },
    _v20 = () => {
      let {
        modalState: _v0
      } = (0, _v2.useContext)(_v18);
      return (0, _v1.jsx)(_v3.ThemeProvider, {
        theme: _v8.themes.light,
        children: (0, _v1.jsx)(_v16, {
          ..._v0
        })
      });
    };
  _v0.s(["LoginModal", 0, _v20, "LoginModalProvider", 0, _v19, "useLoginModal", 0, function () {
    let _v0 = (0, _v11.useViewer)(),
      {
        modalState: _v1,
        setModalState: _v2,
        toggleLoginModal: _v3
      } = (0, _v2.useContext)(_v18),
      _v4 = _v1.redirectUrl;
    return (0, _v2.useEffect)(() => {
      _v0 && _v2({
        xsrft: _v0.xsrft,
        onDismiss: () => _v3(!1),
        onSuccess: () => {
          _v4 ? window.location.assign(_v4) : window.location.reload();
        }
      });
    }, [_v0, _v2, _v3, _v4]), {
      toggleLoginModal: _v3,
      setRedirectUrl: _v0 => _v2({
        redirectUrl: _v0
      })
    };
  }], 0);
  let _v21 = () => Error("Function is not initialized"),
    _v22 = {
      xsrft: "",
      isActive: !1,
      isGuestCommentWithEmail: !0,
      isSubmitLoading: !1,
      emailErrorCode: null
    },
    _v23 = (0, _v2.createContext)({
      modalState: _v22,
      updateModalState: _v21,
      toggleGuestLoginModal: _v21,
      setStashedGuestUser: _v21
    }),
    _v24 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v2.useState)(_v22),
        _v3 = (0, _v11.useViewer)(),
        _v4 = (0, _v14.getStorageInstance)(),
        {
          value: _v5,
          set: _v6
        } = (0, _v4.default)(_v13.STASHED_GUEST_USER_KEY, null, .25, _v4),
        _v7 = _v0 => {
          _v2(_v0 => ({
            ..._v0,
            ..._v0
          }));
        };
      return (0, _v2.useEffect)(() => {
        _v3 && (_v1.xsrft || _v7({
          xsrft: _v3.xsrft
        }));
      }, [_v1, _v3]), (0, _v1.jsx)(_v23.Provider, {
        value: {
          modalState: _v1,
          updateModalState: _v7,
          toggleGuestLoginModal: (_v0, _v1) => {
            _v2(_v0 => ({
              ..._v0,
              isActive: _v0,
              titleOverride: _v0 ? _v1?.titleOverride : void 0,
              submitButtonOverride: _v0 ? _v1?.submitButtonOverride : void 0
            }));
          },
          guestUser: _v5,
          setStashedGuestUser: _v6
        },
        children: _v0
      });
    };
  _v0.s(["GuestLoginModal", 0, ({
    isInlinePrompt: _v0 = !1,
    canReactToCollabComments: _v1
  }) => {
    let {
        modalState: _v2,
        updateModalState: _v3,
        guestUser: _v4,
        setStashedGuestUser: _v5
      } = (0, _v2.useContext)(_v23),
      [_v6, {
        loading: _v7,
        error: _v8,
        data: _v9
      }] = (0, _v6.usePostGuestUsers)(),
      [_v10, _v11] = (0, _v2.useState)(!1),
      _v12 = (0, _v2.useCallback)(async _v0 => {
        await _v6({
          select: ["uri", "name", "metadata.interactions.comments"],
          variables: {
            name: _v0
          }
        }), window.location.reload();
      }, [_v6]),
      _v13 = (0, _v2.useCallback)(() => {
        _v3(_v22), window.location.reload();
      }, [_v3]),
      _v14 = (0, _v2.useCallback)(() => {
        _v11(!0);
      }, []),
      _v15 = (0, _v2.useCallback)(() => {
        _v3({
          isActive: !1
        });
      }, [_v3]),
      _v16 = (0, _v2.useCallback)(() => {
        _v11(!1);
      }, []),
      _v17 = (0, _v2.useCallback)(() => {
        _v11(!1), _v3({
          isActive: !1,
          emailErrorCode: null
        });
      }, [_v3]),
      _v18 = (0, _v2.useCallback)(_v0 => {
        _v3({
          emailErrorCode: _v0
        });
      }, [_v3]);
    return ((0, _v2.useEffect)(() => {
      (async () => {
        if (_v2.isSubmitLoading !== _v7 && _v3({
          isSubmitLoading: _v7
        }), _v7 || _v8 || !_v9 || _v4) {
          if (_v8 instanceof _v5.NetworkError && !_v8.res.bodyUsed) {
            let _v0 = await _v8.res.json();
            _v3({
              emailErrorCode: _v0?.error_code
            });
          }
        } else {
          let _v0 = _v9.name;
          _v5(JSON.stringify({
            guestUserName: _v0,
            guestUserId: _v9.uri.split("/").pop(),
            guestUserJwt: _v9.metadata.interactions.comments
          })), _v3({
            isActive: !1
          });
        }
      })();
    }, [_v2, _v7, _v8, _v9, _v3, _v5, _v4]), (0, _v2.useEffect)(() => {
      _v2.isActive || _v11(!1);
    }, [_v2.isActive]), _v0) ? (0, _v1.jsxs)(_v3.ThemeProvider, {
      theme: _v8.themes.light,
      children: [(0, _v1.jsx)(_v10.default, {
        xsrft: _v2.xsrft,
        isActive: _v2.isActive && !_v10,
        onDismiss: _v14,
        onSuccessfulLogin: _v13,
        submitCommentAsGuest: _v12,
        isSubmitLoading: _v2.isSubmitLoading,
        apiErrorCode: _v2.emailErrorCode,
        resetApiErrorCode: _v18,
        titleText: _v2.titleOverride ?? (0, _v7.translate)({
          singular: "Add your name to comment",
          dictionary: {
            es: {
              singular: "Añade tu nombre para comentar"
            },
            "de-DE": {
              singular: "Ihren Namen zum Kommentar hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter votre nom pour commenter"
            },
            "ja-JP": {
              singular: "コメントに名前を追加"
            },
            "ko-KR": {
              singular: "댓글에 이름 추가"
            },
            "pt-BR": {
              singular: "Adicione seu nome para comentar"
            },
            "zh-CN": {
              singular: "在评论中添加您的姓名"
            }
          }
        }),
        submitButtonText: _v2.submitButtonOverride,
        namePlaceholderText: (0, _v7.translate)({
          singular: "Your full name",
          dictionary: {
            es: {
              singular: "Tu nombre completo"
            },
            "de-DE": {
              singular: "Ihr vollständiger Name"
            },
            "fr-FR": {
              singular: "Votre nom complet"
            },
            "ja-JP": {
              singular: "あなたのフルネーム"
            },
            "ko-KR": {
              singular: "전체 이름"
            },
            "pt-BR": {
              singular: "Seu nome completo"
            },
            "zh-CN": {
              singular: "您的全名"
            }
          }
        }),
        canReactToCollabComments: _v1,
        isCompact: !0
      }), (0, _v1.jsx)(_v12.DismissConfirmationModal, {
        isOpen: _v10,
        onContinue: _v16,
        onGoBack: _v17,
        canReactToCollabComments: _v1
      })]
    }) : (0, _v1.jsx)(_v3.ThemeProvider, {
      theme: _v8.themes.light,
      children: (0, _v1.jsx)(_v9.default, {
        ..._v2,
        closeModal: _v15,
        onSuccessfulLogin: _v13,
        submitCommentAsGuest: _v12,
        resetApiErrorCode: _v18,
        titleText: _v2.titleOverride,
        submitButtonText: _v2.submitButtonOverride,
        canReactToCollabComments: _v1
      })
    });
  }, "GuestLoginModalProvider", 0, _v24, "guestLoginModalContext", 0, _v23, "withGuestLoginModal", 0, _v0 => _v0 => {
    let {
        privacy: _v1
      } = (0, _v15.useVideoPrivacy)(_v0.clipRequestId, _v0.showcaseId, _v0.reviewId),
      _v2 = _v1?.view === "unlisted" || !!_v0.reviewId;
    return (0, _v1.jsx)(_v24, {
      children: (0, _v1.jsxs)(_v19, {
        children: [(0, _v1.jsx)(_v0, {
          ..._v0,
          shouldUseGuestModal: _v2
        }), !_v2 && (0, _v1.jsx)(_v20, {})]
      })
    });
  }], 0);
}