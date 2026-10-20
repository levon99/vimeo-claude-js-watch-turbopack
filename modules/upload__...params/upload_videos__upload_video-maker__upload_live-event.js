{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = ["/upload/videos", "/upload/video-maker", "/upload/live-event", "/upload/screen-recording"],
    _v8 = _v7.map(_v0 => `${_v0}/privacy`);
  (0, _v3.withPageSetup)(async _v0 => {
    let _v1,
      _v2 = _v0.params?.params?.[0];
    if (_v2 && !_v7.includes(`/upload/${_v2}`) && !_v8.includes(`/upload/${_v2}/privacy`)) return {
      notFound: !0
    };
    try {
      _v1 = await (0, _v4.getMeWorkspaces)({
        headers: _v0.headers,
        baseUrl: _v0.baseUrl,
        select: ["untranslatedUserRole", "teamOwnerId"]
      });
    } catch {
      return {
        notFound: !0
      };
    }
    if (_v1?.total === 1 && _v1?.data?.[0]?.untranslatedUserRole === "Viewer") return {
      redirect: {
        destination: "/",
        permanent: !1
      }
    };
    let {
        query: _v3
      } = _v0,
      _v4 = _v3.team_id ?? _v3.teamId,
      _v5 = _v3.folder_id ?? _v3.folderId,
      _v6 = _v4 ? parseInt(_v4, 10) : void 0,
      _v7 = _v5 ? parseInt(_v5, 10) : void 0,
      _v8 = _v1?.data?.find(_v0 => "Uploader" === _v0.untranslatedUserRole),
      _v9 = _v6 ?? _v8?.teamOwnerId;
    return {
      props: {
        hasThemeSupport: !0,
        hasUploader: !0,
        layoutOptions: {
          globalNotifications: !1
        },
        ...(void 0 !== _v9 && {
          teamIdQueryParam: _v9
        }),
        ...(void 0 !== _v7 && {
          defaultFolderId: _v7
        })
      }
    };
  }, {
    requireLogin: !0,
    noIndex: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, ({
    teamIdQueryParam: _v0,
    defaultFolderId: _v1
  }) => {
    let _v2 = (0, _v2.useRouter)(),
      _v3 = (0, _v6.useViewer)(),
      _v4 = "1" === _v2.query.translator_onboarding;
    if (!_v3) return null;
    let _v5 = _v0 ?? _v3?.teamUser?.ownerId ?? _v3?.user?.id ?? null;
    return (0, _v1.jsx)(_v5.UploadHome, {
      defaultFolderId: _v1,
      initialTeamId: _v5,
      isTranslatorOnboarding: _v4
    });
  }], 0);
}