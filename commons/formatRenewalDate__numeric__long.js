{
  "use strict";

  let _v1 = /^(\d{4})-(\d{2})-(\d{2})/;
  _v0.s(["formatRenewalDate", 0, (_v0, _v1) => {
    let _v2 = _v0?.match(_v1);
    if (!_v2) return _v0 ?? "";
    let [, _v3, _v4, _v5] = _v2,
      _v6 = new Date(Number(_v3), Number(_v4) - 1, Number(_v5), 12);
    return new Intl.DateTimeFormat(_v1, {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(_v6);
  }, "isCalendarDate", 0, _v0 => _v1.test(_v0 ?? "")]);
}