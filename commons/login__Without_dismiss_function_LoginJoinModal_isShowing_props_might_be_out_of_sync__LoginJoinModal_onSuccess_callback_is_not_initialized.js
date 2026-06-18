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
    _v21 = _v0.i(0);
  let _v22 = (0, _v0.i(0).default)(async () => {
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
    _v23 = {
      type: "login",
      isShowing: !1,
      xsrft: "",
      onDismiss: () => console.warn("Without dismiss function, LoginJoinModal isShowing props might be out of sync"),
      onSuccess: () => console.warn("LoginJoinModal: onSuccess callback is not initialized")
    },
    _v24 = (0, _v1.createContext)({
      modalState: _v23,
      setModalState: () => Error("Setter function is not initialized"),
      toggleLoginModal: () => Error("Toggle function is not initialized")
    }),
    _v25 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v1.useState)(_v23),
        _v3 = (0, _v1.useCallback)(_v0 => _v2(_v0 => ({
          ..._v0,
          ..._v0
        })), []),
        _v4 = (0, _v1.useCallback)((_v0, _v1) => {
          _v3({
            isShowing: _v0,
            type: _v1 || "login"
          });
        }, [_v3]);
      return (0, _v11.jsx)(_v24.Provider, {
        value: {
          modalState: _v1,
          setModalState: _v3,
          toggleLoginModal: _v4
        },
        children: _v0
      });
    },
    _v26 = () => {
      let {
        modalState: _v0
      } = (0, _v1.useContext)(_v24);
      return (0, _v11.jsx)(_v12.ThemeProvider, {
        theme: _v16.themes.light,
        children: (0, _v11.jsx)(_v22, {
          ..._v0
        })
      });
    };
  function _v27() {
    let _v0 = (0, _v7.useViewer)(),
      {
        modalState: _v1,
        setModalState: _v2,
        toggleLoginModal: _v3
      } = (0, _v1.useContext)(_v24),
      _v4 = _v1.redirectUrl;
    return (0, _v1.useEffect)(() => {
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
  }
  _v0.s(["LoginModal", 0, _v26, "LoginModalProvider", 0, _v25, "useLoginModal", 0, _v27], 0);
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  function _v31() {
    let _v0 = (0, _v7.useViewer)(),
      _v1 = !!_v0?.user;
    return _v0 && _v1 ? _v0 : null;
  }
  function _v32(_v0, _v1, _v2) {
    let {
        data: _v3
      } = _v33(_v0, _v1, _v2),
      _v4 = _v31(),
      _v5 = _v4?.user?.uri,
      _v6 = _v3?.user?.uri,
      _v7 = _v3?.metadata.interactions,
      _v8 = !!_v7?.edit;
    return {
      isOwner: !!_v5 && _v6 === _v5,
      canEdit: _v8,
      canDelete: !!_v7?.delete,
      canReactToCollabComments: !!_v7?.canReactToCollabComments
    };
  }
  _v0.s(["useAuthenticatedViewer", 0, _v31], 0);
  let _v33 = (_v0, _v1, _v2) => {
    let _v3 = (0, _v7.useViewer)(),
      _v4 = (0, _v28.useGetVideo)(() => {
        if (!_v3 || !_v0 || !_v2 || _v1) return null;
        let _v0 = (0, _v10.getReviewPasswordHashFromCookie)(_v2);
        return {
          where: {
            videoId: _v0
          },
          select: _v9.USER_PERMISSION_FIELDS,
          query: {
            reviewId: _v2,
            password: _v0
          }
        };
      }, {
        revalidateOnFocus: !1
      }),
      _v5 = (0, _v29.useGetAlbumVideoData)(_v1 || null, Number((0, _v10.getVideoIdFromClipRequestId)(_v0)), (0, _v10.mapToClipFields)(_v9.USER_PERMISSION_FIELDS)),
      _v6 = (0, _v30.useGetUnlockedVideo)(() => !_v3 || !_v0 || _v1 || _v2 ? null : {
        where: {
          videoId: _v0
        },
        select: _v9.USER_PERMISSION_FIELDS
      }, {
        revalidateOnFocus: !1
      });
    return _v2 ? _v4 : _v1 ? {
      data: (0, _v10.extractClipData)(_v5.data)
    } : _v6;
  };
  _v0.s(["useUserPermissions", 0, _v32], 0);
  let _v34 = () => Error("Function is not initialized"),
    _v35 = {
      xsrft: "",
      isActive: !1,
      isGuestCommentWithEmail: !0,
      isSubmitLoading: !1,
      emailErrorCode: null
    },
    _v36 = (0, _v1.createContext)({
      modalState: _v35,
      updateModalState: _v34,
      toggleGuestLoginModal: _v34,
      setStashedGuestUser: _v34
    }),
    _v37 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v1.useState)(_v35),
        _v3 = (0, _v7.useViewer)(),
        _v4 = (0, _v20.getStorageInstance)(),
        {
          value: _v5,
          set: _v6
        } = (0, _v13.default)(_v9.STASHED_GUEST_USER_KEY, null, .25, _v4),
        _v7 = _v0 => {
          _v2(_v0 => ({
            ..._v0,
            ..._v0
          }));
        };
      return (0, _v1.useEffect)(() => {
        _v3 && (_v1.xsrft || _v7({
          xsrft: _v3.xsrft
        }));
      }, [_v1, _v3]), (0, _v11.jsx)(_v36.Provider, {
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
    },
    _v38 = ({
      isInlinePrompt: _v0 = !1,
      canReactToCollabComments: _v1
    }) => {
      let {
          modalState: _v2,
          updateModalState: _v3,
          guestUser: _v4,
          setStashedGuestUser: _v5
        } = (0, _v1.useContext)(_v36),
        [_v6, {
          loading: _v7,
          error: _v8,
          data: _v9
        }] = (0, _v15.usePostGuestUsers)(),
        [_v10, _v11] = (0, _v1.useState)(!1),
        _v12 = (0, _v1.useCallback)(async _v0 => {
          await _v6({
            select: ["uri", "name", "metadata.interactions.comments"],
            variables: {
              name: _v0
            }
          }), window.location.reload();
        }, [_v6]),
        _v13 = (0, _v1.useCallback)(() => {
          _v3(_v35), window.location.reload();
        }, [_v3]),
        _v14 = (0, _v1.useCallback)(() => {
          _v11(!0);
        }, []),
        _v15 = (0, _v1.useCallback)(() => {
          _v3({
            isActive: !1
          });
        }, [_v3]),
        _v16 = (0, _v1.useCallback)(() => {
          _v11(!1);
        }, []),
        _v17 = (0, _v1.useCallback)(() => {
          _v11(!1), _v3({
            isActive: !1,
            emailErrorCode: null
          });
        }, [_v3]),
        _v18 = (0, _v1.useCallback)(_v0 => {
          _v3({
            emailErrorCode: _v0
          });
        }, [_v3]);
      return ((0, _v1.useEffect)(() => {
        (async () => {
          if (_v2.isSubmitLoading !== _v7 && _v3({
            isSubmitLoading: _v7
          }), _v7 || _v8 || !_v9 || _v4) {
            if (_v8 instanceof _v14.NetworkError && !_v8.res.bodyUsed) {
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
      }, [_v2, _v7, _v8, _v9, _v3, _v5, _v4]), (0, _v1.useEffect)(() => {
        _v2.isActive || _v11(!1);
      }, [_v2.isActive]), _v0) ? (0, _v11.jsxs)(_v12.ThemeProvider, {
        theme: _v16.themes.light,
        children: [(0, _v11.jsx)(_v18.default, {
          xsrft: _v2.xsrft,
          isActive: _v2.isActive && !_v10,
          onDismiss: _v14,
          onSuccessfulLogin: _v13,
          submitCommentAsGuest: _v12,
          isSubmitLoading: _v2.isSubmitLoading,
          apiErrorCode: _v2.emailErrorCode,
          resetApiErrorCode: _v18,
          titleText: _v2.titleOverride ?? (0, _v5.translate)({
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
          namePlaceholderText: (0, _v5.translate)({
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
        }), (0, _v11.jsx)(_v19.DismissConfirmationModal, {
          isOpen: _v10,
          onContinue: _v16,
          onGoBack: _v17,
          canReactToCollabComments: _v1
        })]
      }) : (0, _v11.jsx)(_v12.ThemeProvider, {
        theme: _v16.themes.light,
        children: (0, _v11.jsx)(_v17.default, {
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
    };
  _v0.s(["GuestLoginModal", 0, _v38, "GuestLoginModalProvider", 0, _v37, "guestLoginModalContext", 0, _v36, "withGuestLoginModal", 0, _v0 => _v0 => {
    let {
        privacy: _v1
      } = (0, _v21.useVideoPrivacy)(_v0.clipRequestId, _v0.showcaseId, _v0.reviewId),
      {
        canReactToCollabComments: _v2
      } = _v32(_v0.clipRequestId, _v0.showcaseId, _v0.reviewId),
      _v3 = _v1?.view === "unlisted" || !!_v0.reviewId;
    return (0, _v11.jsx)(_v37, {
      children: (0, _v11.jsxs)(_v25, {
        children: [(0, _v11.jsx)(_v0, {
          ..._v0,
          shouldUseGuestModal: _v3
        }), !_v0.accountlessCommentRedesignEnabled && _v3 && (0, _v11.jsx)(_v38, {
          canReactToCollabComments: _v2
        }), !_v3 && (0, _v11.jsx)(_v26, {})]
      })
    });
  }], 0);
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  function _v42(_v0, _v1, _v2, _v3) {
    let _v4 = (0, _v7.useViewer)(),
      {
        isOwner: _v5,
        canDelete: _v6
      } = _v32(_v0, _v3),
      {
        guestUser: _v7
      } = (0, _v1.useContext)(_v36),
      _v8 = _v7 ? JSON.parse(_v7)?.guestUserId : null,
      _v9 = (0, _v3.useGetVideoCommentsInfinite)(() => {
        if (!_v0 || _v3) return null;
        let _v0 = (0, _v6.getPasswordHashFromCookie)(_v0);
        return {
          where: {
            videoId: _v0
          },
          select: _v9.PUBLIC_COMMENTS_FIELDS,
          query: (0, _v10.getPublicCommentsQuery)(_v0, _v1, _v2)
        };
      }, {
        parallel: !0
      }),
      _v10 = (0, _v2.useGetAlbumVideoCommentsInfinite)(() => {
        if (!_v0 || !_v3) return null;
        let _v0 = (0, _v10.getShowcasePasswordHashFromCookie)(_v3);
        return {
          where: {
            albumId: _v3,
            videoId: _v0
          },
          select: _v9.PUBLIC_COMMENTS_FIELDS,
          query: (0, _v10.getPublicCommentsQuery)(_v0, _v1, _v2)
        };
      }),
      {
        data: _v11,
        mutate: _v12,
        isLoading: _v13,
        error: _v14,
        size: _v15,
        setSize: _v16
      } = _v3 ? _v10 : _v9,
      _v17 = !_v11?.[_v11?.length - 1]?.paging.next,
      _v18 = !_v11 && !_v14 || _v15 > 0 && _v11 && void 0 === _v11[_v15 - 1];
    return {
      comments: (0, _v1.useMemo)(() => {
        let _v0 = _v0 => {
          let _v1 = (0, _v10.checkIsOwnComment)(_v4?.user?.uri, _v8, _v0.metadata?.connections?.user?.uri, _v0.metadata?.connections?.guestUser?.uri);
          return {
            text: _v0.richtext ?? _v0.text,
            plainText: _v0.text,
            user: {
              name: _v0.metadata?.connections?.user?.name || _v0.metadata?.connections?.guestUser?.name || null,
              link: _v0.metadata?.connections?.user?.link || null,
              pictures: _v0.metadata?.connections?.user?.pictures || null,
              id: _v0.metadata?.connections?.user?.uri || null,
              badge: _v0.metadata?.connections?.user?.badge || null,
              isStaffPicked: _v0.metadata?.connections?.user?.isStaffPicked || !1,
              uri: _v0.metadata?.connections?.user?.uri || null
            },
            id: _v0.uri,
            createdTime: _v0.createdOn,
            isRichComment: !!_v0.richtext,
            isOwnVideo: _v5 || _v6,
            isOwnComment: _v1,
            textDecorations: _v0.textDecorations,
            deletedOn: _v0.deletedOn,
            editedTime: _v0.lastEditedOn ?? void 0
          };
        };
        return _v11?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data.flatMap(_v0 => _v0))?.map(_v0 => ({
          ..._v0(_v0),
          replies: _v0.replies?.map(_v0 => _v0(_v0))
        }));
      }, [_v11, _v5, _v6, _v4?.user, _v8]),
      totalComments: _v11 ? _v11[0]?.filteredTotal : 0,
      commentsLoading: _v13,
      commentsError: _v14,
      revalidateComments: _v12,
      loadMoreComments: _v0 => {
        _v16(_v0 ?? _v15 + 1);
      },
      isCommentsDone: _v17,
      isLoadingMoreComments: _v18,
      page: _v15,
      copyComment: (_v0, _v1 = "") => {
        let _v2 = _v4?.vimeoHttpsUrl,
          _v3 = `comment=${(0, _v10.idFromUri)(_v1 || _v0)}`,
          _v4 = _v3 ? `/showcase/${_v3}?video=${_v0.split?.(":")?.[0]}&${_v3}` : `/${_v0.replace(":", "/")}?${_v3}`;
        _v1 && (_v4 = _v4.concat(`&reply=${(0, _v10.idFromUri)(_v0)}`)), (0, _v41.default)(`${_v2}${_v4}`);
      }
    };
  }
  function _v43(_v0, _v1, _v2, _v3, _v4) {
    let {
        isOwner: _v5,
        canDelete: _v6,
        canReactToCollabComments: _v7
      } = _v32(_v0, void 0, _v4),
      _v8 = (0, _v7.useViewer)(),
      _v9 = (0, _v10.getReviewPasswordHashFromCookie)(_v4),
      {
        guestUser: _v10
      } = (0, _v1.useContext)(_v36),
      _v11 = _v10 ? JSON.parse(_v10)?.guestUserId : null,
      _v12 = _v7 ? ["reactions.reactionCode", "reactions.uri", "reactions.isByCurrentUser", "reactions.userDisplayName", "replies.reactions.reactionCode", "replies.reactions.uri", "replies.reactions.isByCurrentUser", "replies.reactions.userDisplayName"] : [],
      {
        data: _v13,
        isLoading: _v14,
        error: _v15,
        size: _v16,
        setSize: _v17,
        mutate: _v18
      } = (0, _v4.useGetVideoPrivateCommentsInfinite)(() => _v0 ? {
        where: {
          videoId: _v0
        },
        select: ["metadata.connections.replies.total", "text", "richtext", "uri", "metadata.connections.user", "createdTime", "replies.text", "replies.richtext", "replies.createdTime", "replies.metadata.connections.user", "replies.uri", "replies.userName", "replies.lastEditedTime", "replies.guestUserUri", "metadata", "timeCode", "userName", "status", "textDecorations", "deletedOn", "lastEditedTime", "coordinates", "guestUserUri", ..._v12],
        query: {
          includeDeletedComments: !0,
          sort: _v1?.type,
          direction: _v1?.direction,
          status: _v2?.status,
          commented_user_type: ["team", "non_team"].includes(_v2?.userType || "") ? _v2?.userType : void 0,
          mentions_and_replies: _v2?.mentionAndReplies || void 0,
          versionUri: _v2?.videoVersionUri || void 0,
          reviewId: _v4,
          password: _v9
        },
        headers: {
          ...(_v2?.targetApiVersion ? {
            Accept: `application/vnd.vimeo.*+json;version=${_v2.targetApiVersion}`
          } : {})
        }
      } : null, {
        parallel: !0
      }),
      _v19 = !_v13?.[_v13?.length - 1]?.paging.next,
      _v20 = !_v13 && !_v15,
      _v21 = _v20 || _v16 > 0 && _v13 && void 0 === _v13[_v16 - 1];
    return {
      comments: (0, _v1.useMemo)(() => {
        let _v0 = _v0 => {
          let _v1 = (0, _v10.checkIsOwnComment)(_v8?.user?.uri, _v11, _v0.metadata?.connections?.user?.uri, _v0?.guestUserUri);
          return {
            text: _v0.richtext ?? _v0.text,
            textDecorations: _v0.textDecorations,
            plainText: _v0.text,
            user: {
              name: _v0.userName || null,
              link: _v0.metadata?.connections?.user?.link || null,
              pictures: _v0.metadata?.connections?.user?.pictures || null,
              id: _v0.metadata?.connections?.user?.uri || null,
              isStaffPicked: _v0.metadata?.connections?.user?.isStaffPicked || !1,
              uri: _v0.metadata?.connections?.user?.uri || null
            },
            id: _v0.uri,
            createdTime: _v0.createdTime,
            isRichComment: !!_v0.richtext,
            isOwnVideo: _v5 || _v6,
            isOwnComment: _v1,
            status: _v0.status,
            deletedOn: _v0.deletedOn,
            editedTime: _v0.lastEditedTime ?? void 0,
            coordinates: _v0.coordinates,
            reactions: _v0.reactions ?? []
          };
        };
        return _v13?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data.flatMap(_v0 => _v0))?.map(_v0 => ({
          timeCode: _v0.timeCode ? _v0.timeCode : null,
          formattedTimeCode: _v0.timeCode ? (0, _v40.secondsToDisplay)(_v0.timeCode) : null,
          replies: _v0.replies?.map(_v0 => _v0(_v0)) || [],
          ..._v0(_v0)
        })) || [];
      }, [_v5, _v6, _v13, _v8?.user, _v11]),
      totalComments: _v13 ? _v13[0]?.total : 0,
      commentsLoading: _v14 || _v20,
      commentsError: _v15,
      revalidateComments: _v18,
      loadMoreComments: _v0 => {
        _v17(_v0 ?? _v16 + 1);
      },
      isCommentsDone: _v19,
      isLoadingMoreComments: _v21,
      page: _v16,
      copyComment: (_v0, _v1 = "") => {
        let _v2 = _v8?.vimeoHttpsUrl,
          _v3 = `${window.location.pathname}?comment=${(0, _v10.idFromUri)(_v1 || _v0)}`;
        _v1 && (_v3 = _v3.concat(`&reply=${(0, _v10.idFromUri)(_v0)}`)), (0, _v41.default)(`${_v2}${_v3}`);
      }
    };
  }
  function _v44(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
    let _v7 = (0, _v7.useViewer)(),
      _v8 = (0, _v10.getVideoIdFromClipRequestId)(_v0),
      [_v9, {
        data: _v10,
        loading: _v11,
        error: _v12
      }] = (0, _v4.usePostVideoPrivateComments)(),
      {
        revalidateComments: _v13
      } = _v43(_v0, _v1, _v3, void 0, _v5),
      [_v14, _v15] = (0, _v1.useState)(null),
      {
        videoData: _v16
      } = (0, _v39.useVideoData)(_v0, void 0, _v5),
      {
        toggleGuestLoginModal: _v17,
        guestUser: _v18
      } = (0, _v1.useContext)(_v36),
      _v19 = _v31() || !!_v18,
      _v20 = (0, _v10.getReviewPasswordHashFromCookie)(_v5),
      _v21 = _v18 ? JSON.parse(_v18)?.guestUserName : null,
      _v22 = _v18 ? JSON.parse(_v18)?.guestUserId : null,
      _v23 = _v2?.productContextFields?.product === "viewer_home",
      _v24 = async (_v0, _v1, _v2) => {
        _v19 ? await _v9({
          where: {
            videoId: _v0
          },
          select: ["metadata.connections.replies.total", "text", "richtext", "uri", "metadata.connections.user", "createdTime", "replies.text", "replies.richtext", "replies.createdTime", "replies.metadata.connections.user", "replies.uri", "replies.userName", "metadata", "timeCode", "userName"],
          variables: {
            richtext: _v0,
            appOrigin: _v23 ? "viewer_home" : "svv",
            timeCode: _v1,
            coordinates: _v2,
            name: _v21,
            guestUserId: _v22,
            reviewLinkId: _v5
          },
          query: {
            reviewId: _v5,
            password: _v20
          }
        }) : _v17(!0);
      };
    return (0, _v1.useEffect)(() => {
      if (_v10 && !_v11 && !_v12 && _v14 !== _v10.uri) {
        let _v0 = Number((_v16?.uploader?.link || "").match(/user(\d+)/)?.[1] || 0),
          _v1 = _v16?.privacy.view;
        if (_v15(() => _v10.uri), _v2) {
          let _v0 = (0, _v10.checkForMention)(_v10?.richtext || _v10?.text || ""),
            _v1 = {
              ..._v2,
              commentContextFields: {
                comment_id: (0, _v10.idFromUri)(_v10.uri),
                is_reply: !1,
                comment_owner_id: _v7?.user?.id ?? -1,
                comment_length: _v10.text.length,
                is_mention: _v0
              }
            };
          (0, _v8.bpPostComment)(_v8, _v1, _v0, _v1, _v7, !!_v10.timeCode, !1);
        }
        _v13(), _v6?.();
      }
    }, [_v10, _v11, _v12, _v13, _v8, _v7, _v16?.privacy.view, _v16?.uploader?.link, _v14, _v2, _v6]), {
      postComment: _v24,
      postCommentLoading: _v11,
      postCommentError: _v12 ? {
        errorMessage: (0, _v5.translate)({
          singular: "Unable to post comment",
          dictionary: {
            es: {
              singular: "No se pudo publicar el comentario"
            },
            "de-DE": {
              singular: "Nicht möglich, einen Kommentar zu hinterlassen"
            },
            "fr-FR": {
              singular: "Impossible de Laisser un commentaire"
            },
            "ja-JP": {
              singular: "コメントを投稿できませんでした"
            },
            "ko-KR": {
              singular: "댓글 추가 불가"
            },
            "pt-BR": {
              singular: "Não foi Possível Postar Comentário"
            },
            "zh-CN": {
              singular: "无法发布评论"
            }
          }
        })
      } : null,
      lastAddedComment: (0, _v10.idFromUri)(_v10?.uri)
    };
  }
  _v0.s(["useGetComments", 0, function (_v0, _v1, _v2, _v3, _v4, _v5) {
    return (_v1 ? _v42 : _v43)(_v0, _v2, _v3, _v4, _v5);
  }, "usePrivateComments", 0, _v43, "usePublicComments", 0, _v42], 0);
  _v0.s(["usePostComments", 0, function (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) {
    return (_v1 ? function (_v0, _v1, _v2, _v3, _v4) {
      let _v5 = (0, _v7.useViewer)(),
        _v6 = (0, _v10.getVideoIdFromClipRequestId)(_v0),
        [_v7, _v8] = (0, _v3.usePostVideoComments)(),
        [_v9, _v10] = (0, _v2.usePostAlbumVideoComments)(),
        {
          data: _v11,
          loading: _v12,
          error: _v13
        } = _v4 ? _v10 : _v8,
        {
          revalidateComments: _v14
        } = _v42(_v0, _v1, _v3, _v4),
        [_v15, _v16] = (0, _v1.useState)(null),
        {
          videoData: _v17
        } = (0, _v39.useVideoData)(_v0, _v4),
        _v18 = _v17?.privacy.view,
        {
          toggleGuestLoginModal: _v19,
          guestUser: _v20
        } = (0, _v1.useContext)(_v36),
        _v21 = _v31() || !!_v20,
        {
          toggleLoginModal: _v22,
          setRedirectUrl: _v23
        } = _v27(),
        _v24 = (0, _v6.getPasswordHashFromCookie)(_v0),
        _v25 = async _v0 => {
          if (!_v21 && "unlisted" === _v18) return void _v19(!0);
          if (!_v21) {
            _v23(window.location.pathname + window.location.search), _v22(!0);
            return;
          }
          let _v1 = {
            richtext: _v0
          };
          if (_v4) {
            let _v0 = (0, _v10.getShowcasePasswordHashFromCookie)(_v4);
            await _v9({
              where: {
                albumId: _v4,
                videoId: _v0
              },
              select: _v9.POST_PUBLIC_COMMENT_FIELDS,
              variables: _v1,
              ...(_v0 ? {
                query: {
                  password: _v0
                }
              } : {})
            });
          } else await _v7({
            where: {
              videoId: _v0
            },
            select: _v9.POST_PUBLIC_COMMENT_FIELDS,
            variables: _v1,
            ...(_v24 ? {
              query: {
                password: _v24
              }
            } : {})
          });
        };
      return (0, _v1.useEffect)(() => {
        if (_v11 && !_v12 && !_v13 && _v15 !== _v11.uri) {
          let _v0 = Number((_v17?.uploader?.link || "").match(/user(\d+)/)?.[1] || 0);
          if (_v16(() => _v11.uri), _v2) {
            let _v0 = (0, _v10.checkForMention)(_v11?.text || ""),
              _v1 = {
                ..._v2,
                commentContextFields: {
                  comment_id: (0, _v10.idFromUri)(_v11.uri),
                  is_reply: !1,
                  comment_owner_id: _v5?.user?.id ?? -1,
                  comment_length: _v11.text.length,
                  is_mention: _v0
                }
              };
            (0, _v8.bpPostComment)(_v6, _v18, _v0, _v1, _v5);
          }
          _v14();
        }
      }, [_v11, _v12, _v13, _v14, _v6, _v5, _v17?.privacy.view, _v17?.uploader?.link, _v15, _v2, _v18]), {
        postComment: _v25,
        postCommentLoading: _v12,
        postCommentError: _v13 ? {
          errorMessage: (0, _v5.translate)({
            singular: "Unable to post comment",
            dictionary: {
              es: {
                singular: "No se pudo publicar el comentario"
              },
              "de-DE": {
                singular: "Nicht möglich, einen Kommentar zu hinterlassen"
              },
              "fr-FR": {
                singular: "Impossible de Laisser un commentaire"
              },
              "ja-JP": {
                singular: "コメントを投稿できませんでした"
              },
              "ko-KR": {
                singular: "댓글 추가 불가"
              },
              "pt-BR": {
                singular: "Não foi Possível Postar Comentário"
              },
              "zh-CN": {
                singular: "无法发布评论"
              }
            }
          })
        } : null,
        lastAddedComment: (0, _v10.idFromUri)(_v11?.uri)
      };
    } : _v44)(_v0, _v2, _v3, _v4, _v5, _v6, _v1 ? void 0 : _v7);
  }, "usePostPrivateComment", 0, _v44], 0);
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  async function _v48({
    baseUrl: _v0,
    where: {
      albumId: _v1,
      videoId: _v2,
      commentId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v47.measureLatency)("deleteAlbumVideoComment", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/albums/${_v1}/videos/${_v2}/comments/${_v3}?${(0, _v14.searchQueryString)(_v4)}`, {
        ..._v5,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v14.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v14.deepCamelCase)(_v1);
    });
  }
  async function _v49({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      albumId: _v3,
      videoId: _v4,
      commentId: _v5
    },
    query: _v6,
    ..._v7
  }) {
    return (0, _v47.measureLatency)("patchAlbumVideoComment", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/albums/${_v3}/videos/${_v4}/comments/${_v5}?${(0, _v14.searchQueryString)(_v6)}&fields=${_v1.map(_v14.intoSnakeCase).join(",")}`, {
        ..._v7,
        method: "PATCH",
        body: JSON.stringify((0, _v14.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v14.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v14.deepCamelCase)(_v1);
    });
  }
  var _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  function _v52() {
    let {
        mutate: _v0
      } = (0, _v50.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v51.useGctlConfig)(),
      [_v5, _v6] = (0, _v46.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/albums/${_v0.where.albumId}/videos/${_v0.where.videoId}/comments/${_v0.where.commentId}${(0, _v46.serializeQuery)(_v0)}`, _v48({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  function _v53() {
    let {
        mutate: _v0
      } = (0, _v50.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v51.useGctlConfig)(),
      [_v5, _v6] = (0, _v46.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/albums/${_v0.where.albumId}/videos/${_v0.where.videoId}/comments/${_v0.where.commentId}${(0, _v46.serializeQuery)(_v0)}`, _v49({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  async function _v54({
    baseUrl: _v0,
    select: _v1,
    where: {
      videoId: _v2,
      commentId: _v3
    },
    ..._v4
  }) {
    return (0, _v47.measureLatency)("getVideoComment", "GET", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/comments/${_v3}?fields=${_v1.map(_v14.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v14.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v14.deepCamelCase)(_v1);
    });
  }
  async function _v55({
    baseUrl: _v0,
    where: {
      videoId: _v1,
      commentId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v47.measureLatency)("deleteVideoComment", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v1}/comments/${_v2}?${(0, _v14.searchQueryString)(_v3)}`, {
        ..._v4,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v14.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v14.deepCamelCase)(_v1);
    });
  }
  async function _v56({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      videoId: _v3,
      commentId: _v4
    },
    query: _v5,
    ..._v6
  }) {
    return (0, _v47.measureLatency)("patchVideoComment", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v3}/comments/${_v4}?${(0, _v14.searchQueryString)(_v5)}&fields=${_v1.map(_v14.intoSnakeCase).join(",")}`, {
        ..._v6,
        method: "PATCH",
        body: JSON.stringify((0, _v14.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v14.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v14.deepCamelCase)(_v1);
    });
  }
  "true" === _v45.default.env.STORYBOOK && (0, _v46.assignMswData)(_v52, {
    endpoint: "/albums/:albumId/videos/:videoId/comments/:commentId",
    method: "DELETE"
  }), "true" === _v45.default.env.STORYBOOK && (0, _v46.assignMswData)(_v53, {
    endpoint: "/albums/:albumId/videos/:videoId/comments/:commentId",
    method: "PATCH"
  }), _v0.s(["useDeleteAlbumVideoComment", 0, _v52, "usePatchAlbumVideoComment", 0, _v53], 0);
  var _v57 = _v0.i(0);
  function _v58() {
    let {
        mutate: _v0
      } = (0, _v50.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v51.useGctlConfig)(),
      [_v5, _v6] = (0, _v46.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/comments/${_v0.where.commentId}${(0, _v46.serializeQuery)(_v0)}`, _v55({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  function _v59() {
    let {
        mutate: _v0
      } = (0, _v50.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v51.useGctlConfig)(),
      [_v5, _v6] = (0, _v46.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/comments/${_v0.where.commentId}${(0, _v46.serializeQuery)(_v0)}`, _v56({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  async function _v60({
    baseUrl: _v0,
    where: {
      videoId: _v1,
      commentId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v47.measureLatency)("deleteVideoPrivateComment", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v1}/private_comments/${_v2}?${(0, _v14.searchQueryString)(_v3)}`, {
        ..._v4,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v14.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v14.deepCamelCase)(_v1);
    });
  }
  async function _v61({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      videoId: _v3,
      commentId: _v4
    },
    query: _v5,
    ..._v6
  }) {
    return (0, _v47.measureLatency)("patchVideoPrivateComment", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v3}/private_comments/${_v4}?${(0, _v14.searchQueryString)(_v5)}&fields=${_v1.map(_v14.intoSnakeCase).join(",")}`, {
        ..._v6,
        method: "PATCH",
        body: JSON.stringify((0, _v14.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v14.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v14.deepCamelCase)(_v1);
    });
  }
  function _v62() {
    let {
        mutate: _v0
      } = (0, _v50.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v51.useGctlConfig)(),
      [_v5, _v6] = (0, _v46.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/private_comments/${_v0.where.commentId}${(0, _v46.serializeQuery)(_v0)}`, _v60({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  function _v63() {
    let {
        mutate: _v0
      } = (0, _v50.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v51.useGctlConfig)(),
      [_v5, _v6] = (0, _v46.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/private_comments/${_v0.where.commentId}${(0, _v46.serializeQuery)(_v0)}`, _v61({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  function _v64(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
    let _v7 = (0, _v7.useViewer)(),
      _v8 = (0, _v10.getVideoIdFromClipRequestId)(_v0),
      {
        privacy: _v9
      } = (0, _v21.useVideoPrivacy)(_v0, void 0, _v6),
      [_v10, {
        loading: _v11,
        error: _v12
      }] = _v63(),
      {
        revalidateComments: _v13
      } = _v43(_v0, _v2, _v4, void 0, _v6),
      [_v14, _v15] = (0, _v1.useState)(null),
      _v16 = (0, _v10.getReviewPasswordHashFromCookie)(_v6),
      _v17 = async (_v0, _v1) => {
        _v15(_v0), await _v10({
          where: {
            videoId: _v0,
            commentId: (0, _v10.idFromUri)(_v0)
          },
          variables: _v1,
          select: ["metadata.connections.replies.total", "text", "richtext", "uri", "metadata.connections.user", "createdTime", "replies.text", "replies.richtext", "replies.createdTime", "replies.metadata.connections.user", "replies.uri", "replies.userName", "metadata", "timeCode", "userName"],
          query: {
            reviewId: _v6,
            password: _v16
          }
        }), _v18(_v0, _v1);
      },
      _v18 = (_v0, _v1) => {
        if (!_v11 && !_v12) {
          let _v0 = {};
          if (_v13(_v0 => _v0?.filter(_v0 => !!_v0).map(_v0 => ({
            ..._v0,
            data: _v0.data?.map(_v0 => _v0.uri === _v0 ? (_v0.richtext = _v0.richtext, _v0.timeCode = _v0.timeCode, {
              ..._v0,
              ..._v1
            }) : _v0)
          }))), _v3) {
            let _v0 = _v1?.richtext || _v0.richtext || "",
              _v1 = (0, _v10.checkForMention)(_v0),
              _v2 = {
                ..._v3,
                commentContextFields: {
                  comment_id: (0, _v10.idFromUri)(_v0),
                  is_reply: !1,
                  comment_length: _v1?.richtext?.length ?? null,
                  is_mention: _v1
                }
              };
            _v1?.richtext || _v1?.coordinates ? (0, _v8.bpSaveEditComment)(_v8, _v9?.view, !1, _v2, _v7, !!_v0.timeCode, _v1?.uploader?.link, _v1?.coordinates ? "annotation" : "text") : _v1?.status && (0, _v8.bpResolveComment)("closed" === _v1.status, _v8, _v9?.view, _v2, _v7, !!_v0.timeCode, _v1?.uploader?.link);
          }
        }
      };
    return {
      updateCommentText: async (_v0, _v1) => {
        _v17(_v0, {
          richtext: _v1
        });
      },
      resolveComment: async _v0 => {
        _v17(_v0, {
          status: "closed"
        });
      },
      unresolveComment: async _v0 => {
        _v17(_v0, {
          status: "open"
        });
      },
      updateCommentPosition: async (_v0, _v1) => {
        _v17(_v0, {
          coordinates: _v1
        });
      },
      editCommentLoading: _v11,
      editCommentError: _v12 ? {
        errorMessage: (0, _v5.translate)({
          singular: "Unable to edit comment",
          dictionary: {
            es: {
              singular: "No se puede editar el comentario"
            },
            "de-DE": {
              singular: "Kommentar kann nicht bearbeitet werden"
            },
            "fr-FR": {
              singular: "Impossible de modifier le commentaire"
            },
            "ja-JP": {
              singular: "コメントを編集できません"
            },
            "ko-KR": {
              singular: "댓글을 편집할 수 없습니다."
            },
            "pt-BR": {
              singular: "Não foi possível editar o comentário"
            },
            "zh-CN": {
              singular: "无法编辑评论"
            }
          }
        }),
        errorCommentId: _v14
      } : null
    };
  }
  "true" === _v45.default.env.STORYBOOK && (0, _v46.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v51.useGctlConfig)();
    return (0, _v57.default)(_v2 ? `/videos/${_v2.where.videoId}/comments/${_v2.where.commentId}${(0, _v46.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v54({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/videos/:videoId/comments/:commentId",
    method: "GET"
  }), "true" === _v45.default.env.STORYBOOK && (0, _v46.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v50.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v51.useGctlConfig)(),
      [_v5, _v6] = (0, _v46.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/comments/${_v0.where.commentId}${(0, _v46.serializeQuery)(_v0)}`, _v54({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/videos/:videoId/comments/:commentId",
    method: "GET"
  }), "true" === _v45.default.env.STORYBOOK && (0, _v46.assignMswData)(_v58, {
    endpoint: "/videos/:videoId/comments/:commentId",
    method: "DELETE"
  }), "true" === _v45.default.env.STORYBOOK && (0, _v46.assignMswData)(_v59, {
    endpoint: "/videos/:videoId/comments/:commentId",
    method: "PATCH"
  }), _v0.s(["useDeleteVideoComment", 0, _v58, "usePatchVideoComment", 0, _v59], 0), "true" === _v45.default.env.STORYBOOK && (0, _v46.assignMswData)(_v62, {
    endpoint: "/videos/:videoId/private_comments/:commentId",
    method: "DELETE"
  }), "true" === _v45.default.env.STORYBOOK && (0, _v46.assignMswData)(_v63, {
    endpoint: "/videos/:videoId/private_comments/:commentId",
    method: "PATCH"
  }), _v0.s(["useDeleteVideoPrivateComment", 0, _v62, "usePatchVideoPrivateComment", 0, _v63], 0);
  _v0.s(["useEditComment", 0, function (_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
    let {
      videoData: _v7
    } = (0, _v39.useVideoData)(_v0, _v5, _v6);
    return (_v1 ? function (_v0, _v1, _v2, _v3, _v4, _v5) {
      let _v6 = (0, _v7.useViewer)(),
        _v7 = (0, _v10.getVideoIdFromClipRequestId)(_v0),
        {
          privacy: _v8
        } = (0, _v21.useVideoPrivacy)(_v0, _v5),
        [_v9, _v10] = _v59(),
        [_v11, _v12] = _v53(),
        {
          loading: _v13,
          error: _v14
        } = _v5 ? _v12 : _v10,
        {
          revalidateComments: _v15
        } = _v42(_v0, _v2, _v4, _v5),
        [_v16, _v17] = (0, _v1.useState)(null),
        _v18 = (0, _v6.getPasswordHashFromCookie)(_v0),
        _v19 = async (_v0, _v1) => {
          _v17(_v0), await _v9({
            where: {
              videoId: _v0,
              commentId: (0, _v10.idFromUri)(_v0)
            },
            variables: {
              richtext: _v1
            },
            select: _v9.EDIT_PUBLIC_COMMENT_FIELDS,
            ...(_v18 ? {
              query: {
                password: _v18
              }
            } : {})
          }), _v21(_v0, {
            text: _v1
          });
        },
        _v20 = async (_v0, _v1) => {
          if (!_v5) return;
          let _v2 = (0, _v10.getShowcasePasswordHashFromCookie)(_v5);
          _v17(_v0), await _v11({
            where: {
              albumId: _v5,
              videoId: _v0,
              commentId: (0, _v10.idFromUri)(_v0)
            },
            variables: {
              richtext: _v1
            },
            select: _v9.EDIT_PUBLIC_COMMENT_FIELDS,
            ...(_v2 ? {
              query: {
                password: _v2
              }
            } : {})
          }), _v21(_v0, {
            text: _v1
          });
        },
        _v21 = (_v0, _v1) => {
          if (!_v13 && !_v14) {
            if (_v3) {
              let _v0 = (0, _v10.checkForMention)(_v1?.text),
                _v1 = {
                  ..._v3,
                  commentContextFields: {
                    comment_id: (0, _v10.idFromUri)(_v0),
                    is_reply: !1,
                    comment_length: _v1?.text?.length,
                    is_mention: _v0
                  }
                };
              (0, _v8.bpSaveEditComment)(_v7, _v8?.view, !0, _v1, _v6);
            }
            _v15(_v0 => _v0?.filter(_v0 => !!_v0).map(_v0 => ({
              ..._v0,
              data: _v0.data?.map(_v0 => _v0.uri === _v0 ? {
                ..._v0,
                ..._v1
              } : _v0)
            })));
          }
        };
      return {
        updateCommentText: _v5 ? _v20 : _v19,
        resolveComment: () => null,
        unresolveComment: () => null,
        editCommentLoading: _v13,
        editCommentError: _v14 ? {
          errorMessage: (0, _v5.translate)({
            singular: "Unable to edit comment",
            dictionary: {
              es: {
                singular: "No se puede editar el comentario"
              },
              "de-DE": {
                singular: "Kommentar kann nicht bearbeitet werden"
              },
              "fr-FR": {
                singular: "Impossible de modifier le commentaire"
              },
              "ja-JP": {
                singular: "コメントを編集できません"
              },
              "ko-KR": {
                singular: "댓글을 편집할 수 없습니다."
              },
              "pt-BR": {
                singular: "Não foi possível editar o comentário"
              },
              "zh-CN": {
                singular: "无法编辑评论"
              }
            }
          }),
          errorCommentId: _v16
        } : null
      };
    } : _v64)(_v0, _v7, _v2, _v3, _v4, _v5, _v6);
  }, "useEditPrivateComment", 0, _v64], 0);
}