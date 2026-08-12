{
  "use strict";

  var _v1 = _v0.i(0),
    [_v2, _v3] = (0, _v1.createContext)({
      name: "PopoverContext",
      errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
    }),
    [_v4, _v5] = (0, _v1.createContext)({
      name: "PopoverStylesContext",
      errorMessage: "usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Popover />\" "
    });
  _v0.s(["PopoverProvider", 0, _v2, "PopoverStylesProvider", 0, _v4, "usePopoverContext", 0, _v3, "usePopoverStyles", 0, _v5]);
}