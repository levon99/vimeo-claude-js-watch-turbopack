{
  "use strict";

  _v0.s(["timestampToListDate", 0, (_v0, _v1) => {
    let _v2 = new Date(_v0);
    return new Intl.DateTimeFormat(_v1, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    }).format(_v2);
  }]);
}