{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = "anybody",
    _v4 = "password",
    _v5 = "contacts",
    _v6 = "users";
  _v0.s(["EDIT_PUBLIC_COMMENT_FIELDS", 0, ["createdOn", "link", "metadata.connections.replies.total", "text", "richtext", "metadata.connections.user.name", "metadata.connections.user.link", "metadata.connections.user.uri", "metadata.connections.user.pictures.sizes", "metadata.connections.user.badge", "uri", "metadata", "replies.createdOn", "replies.link", "replies.text", "replies.richtext", "replies.metadata.connections.user.name", "replies.metadata.connections.user.link", "replies.metadata.connections.user.uri", "replies.metadata.connections.user.pictures.sizes", "replies.metadata.connections.user.badge", "replies.uri"], "EDIT_PUBLIC_REPLY_FIELDS", 0, ["createdOn", "link", "metadata.connections.replies.total", "text", "richtext", "metadata.connections.user.name", "metadata.connections.user.link", "metadata.connections.user.uri", "metadata.connections.user.pictures.sizes", "uri", "metadata"], "POST_PUBLIC_COMMENT_FIELDS", 0, ["createdOn", "link", "richtext", "metadata.connections.replies.total", "text", "metadata.connections.user.name", "metadata.connections.user.link", "metadata.connections.user.uri", "metadata.connections.user.pictures.sizes", "metadata.connections.user.badge", "uri", "metadata", "replies.createdOn", "replies.link", "replies.text", "replies.richtext", "replies.metadata.connections.user.name", "replies.metadata.connections.user.link", "replies.metadata.connections.user.uri", "replies.metadata.connections.user.pictures.sizes", "replies.metadata.connections.user.badge", "replies.uri"], "POST_PUBLIC_REPLY_FIELDS", 0, ["createdOn", "link", "metadata.connections.replies.total", "text", "richtext", "metadata.connections.user.name", "metadata.connections.user.link", "metadata.connections.user.uri", "metadata.connections.user.pictures.sizes", "metadata.connections.user.badge", "uri", "metadata"], "PRIVACY_FOLLOW", 0, _v5, "PRIVACY_PASSWORD", 0, _v4, "PRIVACY_PUBLIC", 0, _v3, "PRIVACY_USER", 0, _v6, "PUBLIC_COMMENTS_FIELDS", 0, ["createdOn", "metadata.connections.replies.total", "text", "richtext", "metadata.connections.user.name", "metadata.connections.user.link", "metadata.connections.user.uri", "metadata.connections.user.pictures.sizes", "metadata.connections.user.badge", "metadata.connections.user.isStaffPicked", "metadata.connections.guestUser.name", "metadata.connections.guestUser.uri", "uri", "replies.createdOn", "replies.text", "replies.richtext", "replies.metadata.connections.user.link", "replies.metadata.connections.user.name", "replies.metadata.connections.user.uri", "replies.metadata.connections.user.pictures.sizes", "replies.metadata.connections.user.badge", "replies.metadata.connections.user.isStaffPicked", "replies.metadata.connections.guestUser.name", "replies.metadata.connections.guestUser.uri", "replies.uri", "replies.lastEditedOn", "textDecorations", "deletedOn", "lastEditedOn"], "STASHED_COMMENTS_KEY", 0, "stashed_comment", "STASHED_GUEST_USER_KEY", 0, "stashed_guest_user", "STASHED_REACTION_KEY", 0, "stashed_reaction", "USER_PERMISSION_FIELDS", 0, ["user.uri", "user.metadata.interactions.follow", "metadata.interactions.edit", "metadata.interactions.delete", "metadata.interactions.watchlater", "metadata.interactions.like", "metadata.interactions.ask_ai_viewer", "metadata.interactions.flag_clip", "metadata.interactions.interact", "metadata.interactions.canReactToCollabComments"], "VIDEO_DATA_FIELDS", 0, ["app.uri", "name", "createdTime", "stats.plays", "contentRating", "status", "spatial.stereoFormat", "privacy.comments", "privacy.view", "privacy.download", "embed.badges.dolby_vision", "embed.badges.hdr_10", "embed.badges.hdr_10_plus", "license", "descriptionHtml", "manageLink", "metadata.is_screen_record", "metadata.is_vimeo_create", "metadata.connections.privateComments.isEnabled", "type", "tags.name", "tags.canonical", "user.backgroundVideo.aspectRatio", "user.backgroundVideo.clipId", "user.backgroundVideo.configUrl", "user.backgroundVideo.endTime", "user.backgroundVideo.firstFrameUrl", "user.backgroundVideo.startTime", "user.backgroundVideo.yPosition", "user.uri", "user.link", "user.name", "user.capabilities", "user.pictures.sizes.link", "user.pictures.sizes.width", "user.locationDetails.formattedAddress", "user.skills", "user.metadata.connections.followers.total", "uploader.link", "uploader.name", "uploader.pictures.sizes", "metadata.interactions.view_team_members", "show_svv_footer_banner", "metadata.connections.versions.latestIncompleteVersion", "metadata.interactions.invite", "metadata.ai_content", "allow_guest_comments", "page", "metadata.interactions.edit", "metadata.interactions.canComment"]], 0);
  let _v7 = _v0 => _v0 ? parseInt(_v0.split("/")[2]) : null;
  _v0.s(["EMAIL_REGEX", 0, /^\w+([\+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/, "FilterToBPOptionMap", 0, {
    everyone: {
      copy: "Everyone",
      option: "everyone"
    },
    team: {
      copy: "Only from Team",
      option: "team_only"
    },
    non_team: {
      copy: "Only Guests",
      option: "guest_only"
    },
    mentions_replies: {
      copy: "Mentions and Replies",
      option: "mentions_replies"
    }
  }, "buildMentionNodePayload", 0, ({
    name: _v0,
    email: _v1,
    userId: _v2,
    teamUserId: _v3,
    guestUserId: _v4
  }) => ({
    label: _v0 ?? _v1,
    userId: _v2,
    teamUserId: _v3,
    guestUserId: _v4
  }), "buildUserMentionSuggestion", 0, _v0 => {
    let _v1,
      _v2,
      _v3,
      {
        email: _v4,
        name: _v5,
        isTeamInvitePending: _v6,
        pictures: _v7,
        uri: _v8
      } = _v0;
    if (_v8.includes("/team_users/")) _v1 = _v8 ? parseInt(_v8.split("/")[4]) : null;else _v8.includes("/guest_users/") ? _v3 = _v8.split("/").pop() : _v8.includes("/users/") && (_v2 = _v7(_v8));
    let [_v9, _v10] = (0, _v1.getAvatarImages)(_v7?.sizes);
    return {
      name: _v5 ?? void 0,
      email: _v4 ?? void 0,
      isPending: _v6 ?? void 0,
      teamUserId: _v1 ?? void 0,
      userId: _v2 ?? void 0,
      guestUserId: _v3 ?? void 0,
      src: _v9,
      srcSet: _v10
    };
  }, "checkForMention", 0, (_v0 = "") => {
    if (!(_v0 => {
      try {
        return JSON.parse(_v0), !0;
      } catch {
        return !1;
      }
    })(_v0)) return /(^|\W)@\w+(\.\w+)?\b/.test(_v0);
    let _v1 = JSON.parse(_v0);
    return Array.isArray(_v1?.content) && _v1.content.some(_v0 => _v0?.content?.some(_v0 => "mention" === _v0.type));
  }, "checkIsOwnComment", 0, (_v0, _v1, _v2, _v3) => !!_v0 && _v0 === _v2 || !!_v1 && _v1 === (_v3 ? _v3.split("/")[2] : null), "extractClipData", 0, _v0 => {
    let _v1 = _v0?.clip;
    if (_v1) return _v1;
  }, "extractDeepLinkReplyId", 0, () => {
    let _v0 = new URLSearchParams(window.location.search).get("reply");
    return _v0 ? Number(_v0) : null;
  }, "extractDeeplinkNoteId", 0, () => {
    let _v0;
    if (!(_v0 = new URLSearchParams(window.location.search).get("comment"))) {
      let _v0 = window.location.hash.match(/#comment_(\d+)/);
      _v0 = _v0 ? _v0[1] : void 0;
    }
    return _v0;
  }, "getDeepLinkPublicCommentsQuery", 0, (_v0, _v1, _v2) => ({
    commentId: _v0,
    perPage: 25,
    sort: _v2?.type,
    direction: _v2?.direction,
    ...(_v1 ? {
      password: _v1
    } : null),
    includeDeletedComments: !0
  }), "getParentCommentIdFromUri", 0, _v0 => {
    let _v1 = _v0.match(/\/(?:comments|private_comments)\/(\d+)\//);
    return _v1 ? _v1[1] : null;
  }, "getPublicCommentsCountQuery", 0, _v0 => ({
    password: _v0,
    includeDeletedComments: !0,
    page: 1,
    perPage: 1
  }), "getPublicCommentsQuery", 0, (_v0, _v1, _v2) => ({
    sort: _v1?.type,
    direction: _v1?.direction,
    password: _v0,
    includeDeletedComments: !0,
    commented_user_type: ["team", "non_team"].includes(_v2?.userType || "") ? _v2?.userType : void 0,
    mentions_and_replies: _v2?.mentionAndReplies ?? void 0
  }), "getReviewPasswordHashFromCookie", 0, _v0 => {
    if (!_v0) return;
    let _v1 = `${_v0}_password`;
    return (0, _v2.loadCookie)(_v1) ?? void 0;
  }, "getShowcasePasswordHashFromCookie", 0, _v0 => {
    let _v1 = `${_v0}_albumpassword`;
    return (0, _v2.loadCookie)(_v1);
  }, "getUserIdFromUri", 0, _v7, "getUserIdFromUserLink", 0, _v0 => _v0 ? Number((_v0 || "").match(/user(\d+)/)?.[1]) : 0, "getVideoIdFromClipRequestId", 0, _v0 => _v0.split(":")[0], "idFromUri", 0, _v0 => _v0 ? parseInt(_v0.substring(_v0.lastIndexOf("/") + 1), 10) : 0, "isInternalFacingPrivacy", 0, _v0 => ![_v3, _v4, _v6, _v5].includes(_v0), "mapToClipFields", 0, _v0 => _v0.map(_v0 => `clip.${_v0}`), "matchCommentRichText", 0, function (_v0, _v1) {
    if (_v1) {
      let _v0;
      return (_v0 = JSON.parse(_v1 || ""), _v0.content?.map(_v0 => _v0.content?.map(_v0 => {
        let _v1 = "text" === _v0.type ? _v0.text.trim() : "";
        return ("mention" === _v0.type ? _v0.attrs?.label : _v1) ?? "";
      }).filter(_v0 => !!_v0).join(" ")).join(" ")).toLowerCase().includes(_v0);
    }
  }, "sanitiseSpaceInRichtext", 0, _v0 => {
    let _v1 = JSON.parse(_v0 || ""),
      _v2 = _v1.content;
    if (_v2.length) {
      let _v0 = _v2[0],
        _v1 = _v2[_v2.length - 1];
      if (_v0.content) {
        let _v0 = (_v0 => {
          if (0 === _v0.length) return _v0;
          for (; "hardBreak" === _v0[0].type;) _v0.shift();
          return "text" === _v0[0].type && (_v0[0].text = _v0[0].text.trimStart(), _v0[0].text || _v0.shift()), _v0;
        })(_v0.content);
        _v1.content[0].content = _v0;
      }
      if (_v1.content) {
        let _v0 = (_v0 => {
          if (0 === _v0.length) return _v0;
          for (; "hardBreak" === _v0[_v0.length - 1].type;) _v0.pop();
          let _v1 = _v0.length - 1;
          return _v0.length > 0 && "text" === _v0[_v1].type && (_v0[_v1].text = _v0[_v1].text.trimEnd(), _v0[_v1].text || ("mention" === _v0[_v1 - 1].type ? _v0[_v1].text += " " : _v0.pop())), _v0;
        })(_v1.content);
        _v1.content[_v2.length - 1].content = _v0;
      }
    }
    return _v1 && JSON.stringify(_v1);
  }], 0);
}