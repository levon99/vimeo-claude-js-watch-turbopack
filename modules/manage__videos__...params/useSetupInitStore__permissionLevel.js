{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(474),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  _v0.i(0);
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  _v0.s(["useSetupInitStore", 0, _v0 => {
    let {
        page: _v1,
        entryPoint: _v2,
        uri: _v3,
        emailPrefills: _v4,
        modalState: _v5,
        onPrivacyChange: _v6,
        onEmbedPrivacyChange: _v7,
        closeResourceShareModal: _v8,
        getPlayerCurrentTime: _v9,
        onLoginRequired: _v10
      } = _v0,
      _v11 = (0, _v1.useContext)(_v8.ViewerContext),
      [_v12, _v13] = (0, _v5.useGetUserSettingsBillingMembershipLazy)(),
      _v14 = (0, _v1.useRef)(!1),
      _v15 = (0, _v1.useRef)(!1),
      _v16 = (0, _v12.useGlobalStore)(({
        capabilities: _v0
      }) => _v0.actions.setCapabilities),
      _v17 = (0, _v12.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.actions.setResourceType),
      _v18 = (0, _v12.useGlobalStore)(_v0 => _v0.capabilities.data.hasPerSeatPricingModelTeamMember),
      _v19 = (0, _v12.useGlobalStore)(({
        shared: _v0
      }) => _v0.actions.setSharedData),
      _v20 = (0, _v12.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.data.userId),
      _v21 = (0, _v12.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.isResourcePropsLoaded),
      _v22 = (0, _v12.useGlobalStore)(({
        shared: _v0
      }) => _v0.data.teamPermissionLevel),
      _v23 = (0, _v12.useGlobalStore)(({
        invite: _v0
      }) => _v0.data.newEmails),
      {
        addNewEmailAddress: _v24,
        setNewMemberRole: _v25,
        setShouldSendEmail: _v26
      } = (0, _v12.useGlobalStore)(({
        invite: _v0
      }) => _v0.actions),
      _v27 = (0, _v12.useGlobalStore)(({
        screen: _v0
      }) => _v0.actions.setMainScreen),
      _v28 = (0, _v12.useGlobalStore)(({
        membership: _v0
      }) => _v0.actions.setMembership),
      _v29 = (0, _v12.useGlobalStore)(({
        membership: _v0
      }) => _v0.actions.setFetchMembershipFunc),
      {
        setOnPrivacyChangeFunc: _v30,
        setOnEmbedPrivacyChangeFunc: _v31,
        setCloseResourceShareModal: _v32,
        setPlayerCurrentTimeFunc: _v33,
        setOnLoginRequired: _v34
      } = (0, _v12.useGlobalStore)((0, _v2.useShallow)(({
        shared: _v0
      }) => ({
        setOnPrivacyChangeFunc: _v0.actions.setOnPrivacyChangeFunc,
        setOnEmbedPrivacyChangeFunc: _v0.actions.setOnEmbedPrivacyChange,
        setCloseResourceShareModal: _v0.actions.setCloseResourceShareModalFunc,
        setPlayerCurrentTimeFunc: _v0.actions.setPlayerCurrentTimeFunc,
        setOnLoginRequired: _v0.actions.setOnLoginRequired
      }))),
      _v35 = (0, _v4.useMediaQueryVisibility)(`screen and (max-width: ${(0, _v3.rem)(_v7.BREAKPOINTS.medium)})`),
      _v36 = (0, _v4.useMediaQueryVisibility)(`screen and (max-width: ${(0, _v3.rem)(_v7.BREAKPOINTS.small)})`),
      _v37 = _v35 || _v36,
      _v38 = _v11?.user,
      _v39 = (0, _v14.getResourceTypeFromUri)(_v3);
    (0, _v1.useEffect)(() => {
      _v6 && _v30(_v6), _v7 && _v31(_v7), _v8 && _v32(_v8), _v9 && _v33(_v9), _v10 && _v34(_v10);
    }, [_v8, _v9, _v7, _v10, _v6, _v32, _v31, _v34, _v30, _v33]), (0, _v1.useEffect)(() => {
      _v5 !== _v13.ShareModalState.Default && _v27(_v5);
    }, [_v5, _v27]), (0, _v1.useEffect)(() => {
      _v38 && _v21 && _v19({
        isOwner: _v20 === _v38.id
      });
    }, [_v38, _v21, _v19, _v20]), (0, _v1.useEffect)(() => {
      _v29(_v12);
    }, [_v12, _v29]), (0, _v1.useEffect)(() => {
      _v18 && _v20 && _v12({
        select: [],
        where: {
          userId: _v20
        }
      });
    }, [_v12, _v18, _v20]), (0, _v1.useEffect)(() => {
      let {
        data: _v0
      } = _v13;
      _v0 && _v28((0, _v14.mapMembershipResponse)({
        ..._v0
      }));
    }, [_v13, _v28]), (0, _v1.useEffect)(() => {
      _v14.current || (_v17(_v39), _v19({
        page: _v1 ?? "",
        entryPoint: _v2 ?? ""
      }), _v14.current = !0);
    }, [_v2, _v1, _v39, _v17, _v19]), (0, _v1.useEffect)(() => {
      if (!_v15.current && _v4) {
        _v15.current = !0;
        let _v0 = [];
        for (let _v0 = 0; _v0 < _v4.length; _v0++) {
          let _v0 = _v4[_v0];
          _v23.includes(_v0) || _v0.includes(_v0) || _v0.push(_v0);
        }
        _v0.length > 0 && (_v24(_v0), _v25((0, _v14.getPermissionLevels)(_v39, null)[0]), _v26(!0), _v27(_v13.ShareModalState.Invitation));
      }
    }, [_v24, _v23, _v4, _v39, _v25, _v26, _v27]), (0, _v1.useEffect)(() => {
      _v19({
        isMobileOrTab: _v37
      });
    }, [_v37, _v19]);
    let _v40 = (0, _v1.useCallback)(() => {
      _v22 && -1 !== _v20 && _v11 && _v16(_v20, _v11);
    }, [_v16, _v22, _v20, _v11]);
    (0, _v1.useEffect)(() => {
      _v40();
    }, [_v40]);
    let _v41 = -1 === _v20 ? null : _v20,
      {
        data: _v42
      } = (0, _v6.useGetUserTeamRole)(() => _v41 && _v38 ? {
        where: {
          userId: _v41
        },
        select: ["permissionLevel"]
      } : null, _v10.API_REVALIDATE_OPTIONS);
    (0, _v1.useEffect)(() => {
      _v42 && _v19({
        teamPermissionLevel: _v42.permissionLevel?.toLowerCase() ?? ""
      });
    }, [_v19, _v42]), (0, _v1.useEffect)(() => {
      _v11.PendoClient.updateOptions({
        visitor: {
          client_can_comment_policy: !0
        }
      });
    }, []), function ({
      resourceType: _v0,
      resourceId: _v1 = null,
      pageName: _v2 = null,
      userId: _v3 = null,
      userLocale: _v4 = null
    }, _v5 = !0) {
      (0, _v1.useEffect)(() => {
        (0, _v9.updateTrackingConfig)({
          RESOURCE_TYPE: _v0,
          RESOURCE_ID: _v1,
          USER_ID: _v3,
          USER_LOCALE: _v4,
          PAGE_NAME: _v2
        }), _v5 && (0, _v9.updateDatadogGlobals)((0, _v9.getApplicationGlobals)());
      }, [_v0, _v5, _v2, _v1, _v3, _v4]);
    }({
      resourceType: _v39,
      resourceId: (0, _v14.getResourceIdFromUri)(_v3),
      pageName: _v1,
      userId: _v20,
      userLocale: _v11?.locale
    });
  }], 0);
}