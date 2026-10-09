{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2() {
    let _v0 = (0, _v1.useViewer)(),
      _v1 = !!_v0?.user;
    return _v0 && _v1 ? _v0 : null;
  }
  _v0.s(["useAuthenticatedViewer", 0, _v2], 0);
  var _v3 = _v0.i(0),
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
  function _v16(_v0, _v1, _v2) {
    let {
        data: _v3
      } = _v17(_v0, _v1, _v2),
      _v4 = _v2(),
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
  let _v17 = (_v0, _v1, _v2) => {
    let _v3 = (0, _v1.useViewer)(),
      _v4 = (0, _v13.useGetVideo)(() => {
        if (!_v3 || !_v0 || !_v2 || _v1) return null;
        let _v0 = (0, _v11.getReviewPasswordHashFromCookie)(_v2);
        return {
          where: {
            videoId: _v0
          },
          select: _v10.USER_PERMISSION_FIELDS,
          query: {
            reviewId: _v2,
            password: _v0
          }
        };
      }, {
        revalidateOnFocus: !1
      }),
      _v5 = (0, _v14.useGetAlbumVideoData)(_v1 || null, Number((0, _v11.getVideoIdFromClipRequestId)(_v0)), (0, _v11.mapToClipFields)(_v10.USER_PERMISSION_FIELDS), !_v1),
      _v6 = (0, _v15.useGetUnlockedVideo)(() => !_v3 || !_v0 || _v1 || _v2 ? null : {
        where: {
          videoId: _v0
        },
        select: _v10.USER_PERMISSION_FIELDS
      }, {
        revalidateOnFocus: !1
      });
    return _v2 ? _v4 : _v1 ? {
      data: (0, _v11.extractClipData)(_v5.data)
    } : _v6;
  };
  function _v18(_v0, _v1, _v2, _v3) {
    let _v4 = (0, _v1.useViewer)(),
      {
        isOwner: _v5,
        canDelete: _v6
      } = _v16(_v0, _v3),
      {
        guestUser: _v7
      } = (0, _v3.useContext)(_v12.guestLoginModalContext),
      _v8 = _v7 ? JSON.parse(_v7)?.guestUserId : null,
      _v9 = (0, _v6.useGetVideoCommentsInfinite)(() => {
        if (!_v0 || _v3) return null;
        let _v0 = (0, _v9.getPasswordHashFromCookie)(_v0);
        return {
          where: {
            videoId: _v0
          },
          select: _v10.PUBLIC_COMMENTS_FIELDS,
          query: (0, _v11.getPublicCommentsQuery)(_v0, _v1, _v2)
        };
      }, {
        parallel: !0
      }),
      _v10 = (0, _v5.useGetAlbumVideoCommentsInfinite)(() => {
        if (!_v0 || !_v3) return null;
        let _v0 = (0, _v11.getShowcasePasswordHashFromCookie)(_v3);
        return {
          where: {
            albumId: _v3,
            videoId: _v0
          },
          select: _v10.PUBLIC_COMMENTS_FIELDS,
          query: (0, _v11.getPublicCommentsQuery)(_v0, _v1, _v2)
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
      comments: (0, _v3.useMemo)(() => {
        let _v0 = _v0 => {
          let _v1 = (0, _v11.checkIsOwnComment)(_v4?.user?.uri, _v8, _v0.metadata?.connections?.user?.uri, _v0.metadata?.connections?.guestUser?.uri);
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
          _v3 = `comment=${(0, _v11.idFromUri)(_v1 || _v0)}`,
          _v4 = _v3 ? `/showcase/${_v3}?video=${_v0.split?.(":")?.[0]}&${_v3}` : `/${_v0.replace(":", "/")}?${_v3}`;
        _v1 && (_v4 = _v4.concat(`&reply=${(0, _v11.idFromUri)(_v0)}`)), (0, _v8.default)(`${_v2}${_v4}`);
      }
    };
  }
  function _v19(_v0, _v1, _v2, _v3, _v4) {
    let {
        isOwner: _v5,
        canDelete: _v6,
        canReactToCollabComments: _v7
      } = _v16(_v0, void 0, _v4),
      _v8 = (0, _v1.useViewer)(),
      _v9 = (0, _v11.getReviewPasswordHashFromCookie)(_v4),
      {
        guestUser: _v10
      } = (0, _v3.useContext)(_v12.guestLoginModalContext),
      _v11 = _v10 ? JSON.parse(_v10)?.guestUserId : null,
      _v12 = _v7 ? ["reactions.reactionCode", "reactions.uri", "reactions.isByCurrentUser", "reactions.userDisplayName", "replies.reactions.reactionCode", "replies.reactions.uri", "replies.reactions.isByCurrentUser", "replies.reactions.userDisplayName"] : [],
      {
        data: _v13,
        isLoading: _v14,
        error: _v15,
        size: _v16,
        setSize: _v17,
        mutate: _v18
      } = (0, _v7.useGetVideoPrivateCommentsInfinite)(() => _v0 ? {
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
      comments: (0, _v3.useMemo)(() => {
        let _v0 = _v0 => {
          let _v1 = (0, _v11.checkIsOwnComment)(_v8?.user?.uri, _v11, _v0.metadata?.connections?.user?.uri, _v0?.guestUserUri);
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
          formattedTimeCode: _v0.timeCode ? (0, _v4.secondsToDisplay)(_v0.timeCode) : null,
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
          _v3 = `${window.location.pathname}?comment=${(0, _v11.idFromUri)(_v1 || _v0)}`;
        _v1 && (_v3 = _v3.concat(`&reply=${(0, _v11.idFromUri)(_v0)}`)), (0, _v8.default)(`${_v2}${_v3}`);
      }
    };
  }
  _v0.s(["useUserPermissions", 0, _v16], 0), _v0.s(["useGetComments", 0, function (_v0, _v1, _v2, _v3, _v4, _v5) {
    return (_v1 ? _v18 : _v19)(_v0, _v2, _v3, _v4, _v5);
  }, "usePrivateComments", 0, _v19, "usePublicComments", 0, _v18], 0);
}