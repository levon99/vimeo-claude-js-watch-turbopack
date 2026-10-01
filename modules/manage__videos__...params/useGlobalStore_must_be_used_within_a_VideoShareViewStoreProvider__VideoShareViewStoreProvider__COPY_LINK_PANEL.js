{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8,
    _v9 = _v0 => {
      let _v1 = (0, _v1.useContext)(_v10);
      if (!_v1) throw Error("useGlobalStore must be used within a VideoShareViewStoreProvider");
      return (0, _v5.useStore)(_v1, _v0);
    },
    _v10 = (0, _v1.createContext)(null);
  _v0.s(["VideoShareViewStoreProvider", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v1.useMemo)(() => {
      let _v0;
      return _v0 = (_v0, _v1) => ({
        clip: (({
          set: _v0,
          get: _v1
        }) => ({
          clipId: _v1()?.clip.clipId ?? "",
          clipHash: _v1()?.clip.clipHash ?? _v8,
          actions: {
            setClipParams: (_v0, _v1) => {
              _v0(({
                clip: _v0
              }) => {
                _v0.clipId = _v0, _v0.clipHash = _v1;
              });
            },
            resetClip: () => _v0(({
              clip: _v0
            }) => {
              _v0.clipHash = _v8, _v0.clipId = "";
            })
          }
        }))({
          set: _v0,
          get: _v1
        }),
        util: (({
          set: _v0,
          get: _v1
        }) => ({
          isVideoOwnerCapabilitiesReady: _v1()?.util.isVideoOwnerCapabilitiesReady ?? !1,
          isInputtingPassword: _v1()?.util.isInputtingPassword ?? !1,
          trackingContextConfig: _v1()?.util.trackingContextConfig,
          selectedPanel: _v1()?.util.selectedPanel ?? "COPY_LINK_PANEL",
          isCreateReviewLinkModalOpen: _v1()?.util.isCreateReviewLinkModalOpen ?? !1,
          actions: {
            setVideoOwnerCapabilitiesReady: () => {
              _v0(({
                util: _v0
              }) => {
                _v0.isVideoOwnerCapabilitiesReady = !0;
              });
            },
            setIsInputtingPassword: _v0 => {
              _v0(({
                util: _v0
              }) => {
                _v0.isInputtingPassword = _v0;
              });
            },
            setTrackingContextConfig: _v0 => {
              _v0(({
                util: _v0
              }) => {
                _v0.trackingContextConfig = _v0;
              });
            },
            setCreateReviewLinkModalOpen: _v0 => {
              _v0(({
                util: _v0
              }) => {
                _v0.isCreateReviewLinkModalOpen = _v0;
              });
            },
            setSelectedPanel: _v0 => {
              _v0(({
                util: _v0
              }) => {
                _v0.selectedPanel = _v0;
              });
            },
            resetUtil: () => _v0(({
              util: _v0
            }) => {
              _v0.isVideoOwnerCapabilitiesReady = !1, _v0.isInputtingPassword = !1, _v0.trackingContextConfig = null, _v0.selectedPanel = "COPY_LINK_PANEL", _v0.isCreateReviewLinkModalOpen = !1;
            })
          }
        }))({
          set: _v0,
          get: _v1
        }),
        actions: {
          resetStore: () => {
            _v1().clip.actions.resetClip(), _v1().util.actions.resetUtil();
          }
        }
      }), (0, _v5.create)((0, _v7.immer)((0, _v6.devtools)(_v0, {
        enabled: !1
      })));
    }, []);
    return (0, _v4.jsx)(_v10.Provider, {
      value: _v1,
      children: _v0
    });
  }, "useGlobalStore", 0, _v9], 0);
  let _v11 = (_v0, _v1) => _v1 ? `${_v0}:${_v1}` : _v0,
    _v12 = /^(http(s)?\:)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(localhost|(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?))(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
  _v0.s(["getClipRequestId", 0, _v11, "getHashFromVideoEmbedCode", 0, _v0 => {
    let _v1 = _v0.match(/(\?h=)\w{3,}[&,"]/);
    if (!_v1) return null;
    let [_v2] = _v1;
    return _v2.replace(/[?h=&"]/g, "");
  }, "getMemberIdFromUri", 0, _v0 => {
    let _v1 = _v0.split("/");
    return parseInt(_v1[_v1.length - 1]);
  }, "getUserIdFromUri", 0, _v0 => {
    let _v1 = _v0 && _v0.match(/\/users\/(\d+)/);
    return _v1 ? parseInt(_v1[1], 10) : 0;
  }, "idFromUri", 0, _v0 => _v0 ? parseInt(_v0.split("/")[2], 10) : 0, "sanitizeUrl", 0, _v0 => _v0.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").replace(/\s/g, "").split("/")[0].toLowerCase(), "validateUrl", 0, _v0 => {
    if (!_v0) return;
    let _v1 = _v0.trim();
    return _v1 && !_v1.match(/^(http(s)?\:)?\/\//) && (_v1 = `https://${_v1}`), _v1.length < 250 && _v12.test(_v1);
  }], 0);
  let _v13 = ["allowedPrivacies", "customMetadata", "manageLink", "name", "uri", "user.uri", "user.email", "user.name", "user.link", "user.pictures", "user.membership.type", "user.metadata.connections.teamMembers.total", "user.metadata.connections.teamMembers.invitesRemaining", "user.metadata.connections.portfolios.options", "parentProject.uri", "parentProject.isPrivateToUser", "password", "pictures", "privacy", "link", "customUrl", "disabledProperties", "embed.html", "embed.uri", "width", "height", "duration", "editSession.isMusicLicensed", "metadata.isScreenRecord", "contentRating", "metadata.connections.resourceCreatorTeamUser", "metadata.interactions.canUpdatePrivacyToPublic", "metadata.interactions.edit", "metadata.interactions.invite", "metadata.interactions.viewPrivacy", "usesDrm", "filesSize", "fileTransfer.link", "vod.id"];
  function _v14(_v0) {
    return _v0 ? {
      where: {
        videoId: _v0
      },
      select: _v13,
      headers: {
        Accept: "application/vnd.vimeo.*;version=3.4.2"
      }
    } : null;
  }
  function _v15() {
    let {
        clipId: _v0,
        clipHash: _v1
      } = _v9(({
        clip: _v0
      }) => _v0),
      _v2 = _v11(_v0, _v1);
    return (0, _v3.useGetUnlockedVideo)(() => _v14(_v2));
  }
  _v0.s(["useGetVideoSharingData", 0, _v15, "useGetVideoSharingDataForClip", 0, function (_v0, _v1) {
    let _v2 = _v0 ? _v11(String(_v0), _v1) : void 0;
    return (0, _v3.useGetUnlockedVideo)(() => _v14(_v2));
  }], 0), _v0.s(["useGetVideoOwnerCapabilities", 0, function () {
    let _v0 = _v9(({
        util: _v0
      }) => _v0.actions.setVideoOwnerCapabilitiesReady),
      _v1 = _v9(({
        util: _v0
      }) => _v0.isVideoOwnerCapabilitiesReady),
      {
        data: _v2
      } = _v15(),
      _v3 = _v2?.user?.uri,
      _v4 = (0, _v2.useCapability)(_v3 ? ["canAddCustomUrl", "canAllowDownloads", "canCreateEmbeddedPlaylists", "canCreateLiveEvents", "canCustomizeAlbums", "canHideVideos", "canLmsExport", "canSeeUpsellModalOnShare", "canUnlistVideo", "canUsePaymentsService", "contentSpaceEnabled", "hasEnterprise", "hasExtraEmbedOptions", "hasPerSeatPricingModelTeamMember", "hasPrivateModeOff", "hasRestrictedPrivacyOptions", "hasShowcasePasswordPrivacyUpsell", "hasShowcaseTeamPrivacy", "hasSunsetHideFromVimeo", "hasTeamInvite", "hasUpsellsForFlatRateTiers", "hasVideoInEmail", "hasVideoPasswordPrivacyUpsell", "regionalDeliveryPublishContentToChina", "hasMultipleReviewLinks", "hasProhibitMultipleReviewLinks"] : [], _v3 ?? "skip");
    return (0, _v1.useEffect)(() => {
      _v4.ready && _v3 && _v0();
    }, [_v4.ready, _v3, _v0]), {
      isVideoOwnerCapabilitiesReady: !!_v3 && _v1,
      videoOwnerCapabilities: _v4.capabilities
    };
  }], 0);
}