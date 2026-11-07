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
    _v13 = _v0.i(0);
  let _v14 = {
      maxWidth: 374,
      width: "100%"
    },
    _v15 = {
      display: "flex",
      justifyContent: "center"
    };
  _v0.s(["InvitationFooterCommon", 0, () => {
    let {
        showPurchaseNotice: _v0,
        sendInvites: _v1,
        isInviteButtonDisabled: _v2
      } = (0, _v9.useInvitation)(),
      _v3 = (0, _v10.useParentScreen)(_v13.ShareModalState.Invitation),
      _v4 = (0, _v11.useGlobalStore)(({
        screen: _v0
      }) => _v0.actions.setMainScreen),
      _v5 = (0, _v11.useGlobalStore)(({
        invite: _v0
      }) => _v0.actions.clearSelectedTeamMembers),
      _v6 = (0, _v11.useGlobalStore)(({
        membership: _v0
      }) => _v0.data.isFreeTrial);
    return _v0 ? (0, _v1.jsx)(_v3.Box, {
      sx: _v15,
      children: (0, _v1.jsx)(_v4.Button, {
        onClick: () => {
          _v4(_v13.ShareModalState.Purchase);
        },
        variant: "upsell",
        sx: _v14,
        children: _v6 ? _v12.T.AddSeats : _v12.T.PurchaseSeat
      })
    }) : (0, _v1.jsxs)(_v5.HStack, {
      justifyContent: "flex-end",
      gap: (0, _v6.rem)(10),
      children: [(0, _v1.jsx)(_v4.Button, {
        className: "invitation-footer-cancel-button",
        variant: "secondary",
        style: {
          flex: "0 1 auto"
        },
        onClick: () => {
          _v2.FatalAttraction.trackClick({
            container: "folder_share_modal",
            component: "add_team_members",
            keyword: "cancel"
          }), _v5(), _v4(_v3);
        },
        children: (0, _v7.translate)({
          singular: "Cancel",
          dictionary: {
            es: {
              singular: "Cancelar"
            },
            "de-DE": {
              singular: "Abbrechen"
            },
            "fr-FR": {
              singular: "Annuler"
            },
            "ja-JP": {
              singular: "キャンセル"
            },
            "ko-KR": {
              singular: "취소"
            },
            "pt-BR": {
              singular: "Cancelar"
            },
            "zh-CN": {
              singular: "取消"
            }
          }
        })
      }), (0, _v1.jsx)(_v8.InviteButton, {
        onInvite: _v1,
        isDisabled: _v2
      })]
    });
  }]);
}