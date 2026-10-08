{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = () => ({
      isTyping: !1,
      isLoading: !1,
      isTimestampIncluded: !1,
      linkToCopy: "",
      timestampParam: "",
      playerCurrentTime: 0,
      teamUsersRole: ""
    }),
    _v3 = (0, _v1.createContext)(_v2()),
    _v4 = (0, _v1.createContext)({
      setIsLoading: () => null,
      setIsTyping: () => null,
      setIsTimestampIncluded: () => null,
      setLinkToCopy: () => null,
      copyUrlLink: () => Promise.resolve()
    });
  _v3.displayName = "CustomUrlState", _v4.displayName = "CustomUrlDispatcher", _v0.s(["CustomUrlDispatcherCtx", 0, _v4, "CustomUrlStateCtx", 0, _v3, "initState", 0, _v2]);
}