{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["UpsellModal", 0, ({
    onClose: _v0,
    tracking: _v1,
    templateType: _v2 = "default",
    modalConfig: _v3
  }) => {
    let _v4 = (0, _v2.useContext)(_v4.ViewerContext);
    return (0, _v1.jsx)(_v3.default, {
      apiUrl: _v4?.apiUrl,
      userConfig: {
        jwt: _v4?.jwt,
        userId: _v4?.user?.id
      },
      templateType: _v2,
      onClose: _v0,
      tracking: _v1,
      modalConfig: _v3
    });
  }]);
}