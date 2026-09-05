{
  "use strict";

  let _v1 = _v0 => {
      let _v1 = _v0.uri.match(/\/videos\/(\d+)/);
      return _v1 ? Number(_v1[1]) : null;
    },
    _v2 = _v0 => {
      let _v1 = _v0.streamedOn;
      return _v1 ? new Date(_v1).getTime() : 0;
    };
  _v0.s(["getOnDemandRecordings", 0, (_v0, _v1) => {
    let _v2 = _v0.flatMap(_v0 => [...(_v0.recordings ?? [])]);
    return (_v1?.size ? _v2.filter(_v0 => {
      let _v1 = _v1(_v0);
      return null === _v1 || !_v1.has(_v1);
    }) : _v2).sort((_v0, _v1) => _v2(_v1) - _v2(_v0));
  }, "getRecordingClipId", 0, _v1], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = ({
    iconBoxSize: _v0 = "xl"
  }) => (0, _v3.jsx)(_v6.Center, {
    backgroundColor: "fill-component",
    height: "100%",
    width: "100%",
    opacity: .6,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "stroke",
    children: (0, _v3.jsx)(_v7.CameraOnFilled, {
      boxSize: _v0,
      color: "text-tertiary"
    })
  });
  _v0.s(["DefaultThumbnail", 0, _v8], 0), _v0.s(["EventThumbnail", 0, ({
    src: _v0,
    borderRadius: _v1 = "sm",
    children: _v2
  }) => (0, _v3.jsxs)(_v4.Box, {
    border: "0.5px solid",
    borderColor: "stroke",
    borderRadius: _v1,
    overflow: "hidden",
    paddingBottom: "56.25%",
    position: "relative",
    width: "100%",
    children: [_v0 ? (0, _v3.jsx)(_v5.Image, {
      alt: "",
      height: "100%",
      left: 0,
      objectFit: "cover",
      position: "absolute",
      src: _v0,
      top: 0,
      width: "100%"
    }) : (0, _v3.jsx)(_v4.Box, {
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%",
      children: (0, _v3.jsx)(_v8, {
        iconBoxSize: {
          base: "lg",
          md: "xs",
          lg: "md"
        }
      })
    }), _v2]
  })], 0);
}