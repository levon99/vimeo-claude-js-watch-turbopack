{
  "use strict";

  function _v1(_v0) {
    return new Date(String(_v0).replace(" ", "T").replace(/\.\d+$/, ""));
  }
  function _v2(_v0) {
    let _v1 = _v1(_v0),
      _v2 = _v1.getFullYear(),
      _v3 = String(_v1.getMonth() + 1).padStart(2, "0"),
      _v4 = String(_v1.getDate()).padStart(2, "0");
    return `${_v2}-${_v3}-${_v4}`;
  }
  function _v3(_v0) {
    return _v0.endTime ? _v1(String(_v0.endTime)).getTime() : _v1(_v0.startTime).getTime() + 0;
  }
  function _v4(_v0) {
    return _v0.map(_v0 => {
      let _v1,
        _v2 = ((_v1 = _v1(_v0.startTime)).getHours() - 0 + _v1.getMinutes() / 60) * 72,
        _v3 = function (_v0, _v1) {
          if (!_v1) return 72;
          let _v2 = _v1(_v0);
          return Math.max((_v1(_v1).getTime() - _v2.getTime()) / 0 * 72, 30);
        }(_v0.startTime, _v0.endTime);
      return {
        occurrence: _v0,
        top: _v2,
        height: _v3,
        bottom: _v2 + _v3
      };
    }).sort((_v0, _v1) => _v0.top - _v1.top);
  }
  function _v5(_v0) {
    let _v1 = _v0.length;
    if (0 === _v1) return [];
    let _v2 = _v0.map((_v0, _v1) => _v1);
    function _v3(_v0) {
      let _v1 = _v0;
      for (; _v2[_v1] !== _v1;) _v2[_v1] = _v2[_v2[_v1]], _v1 = _v2[_v1];
      return _v1;
    }
    for (let _v0 = 0; _v0 < _v1; _v0++) for (let _v0 = _v0 + 1; _v0 < _v1 && !(_v0[_v0].top >= _v0[_v0].bottom); _v0++) {
      var _v4, _v5;
      _v4 = _v0[_v0], _v5 = _v0[_v0], _v4.top < _v5.bottom && _v5.top < _v4.bottom && function (_v0, _v1) {
        let _v2 = _v3(_v0),
          _v3 = _v3(_v1);
        _v2 !== _v3 && (_v2[_v2] = _v3);
      }(_v0, _v0);
    }
    let _v6 = new Map();
    for (let _v0 = 0; _v0 < _v1; _v0++) {
      let _v0 = _v3(_v0),
        _v1 = _v6.get(_v0);
      _v1 || (_v1 = [], _v6.set(_v0, _v1)), _v1.push(_v0[_v0]);
    }
    return Array.from(_v6.values()).sort((_v0, _v1) => _v0[0].top - _v1[0].top);
  }
  function _v6(_v0) {
    let _v1 = [];
    for (let _v0 of _v0) _v1.push({
      pos: _v0.top,
      delta: 1
    }), _v1.push({
      pos: _v0.bottom,
      delta: -1
    });
    _v1.sort((_v0, _v1) => _v0.pos - _v1.pos || _v0.delta - _v1.delta);
    let _v2 = 0,
      _v3 = 0;
    for (let _v0 of _v1) (_v3 += _v0.delta) > _v2 && (_v2 = _v3);
    return _v2;
  }
  let _v7 = "__proposed_event__";
  _v0.s(["HOUR_HEIGHT", 0, 72, "START_HOUR", 0, 0, "computeOverlapLayout", 0, function (_v0) {
    if (0 === _v0.length) return [];
    let _v1 = _v5(_v4(_v0)),
      _v2 = [];
    for (let _v0 of _v1) {
      let _v0 = _v0.length;
      _v0.forEach((_v0, _v1) => {
        _v2.push({
          occurrence: _v0.occurrence,
          top: _v0.top,
          height: _v0.height,
          column: _v1,
          totalColumns: _v0
        });
      });
    }
    return _v2;
  }, "evaluateProposedStartAgainstOccurrences", 0, function (_v0) {
    var _v1, _v2;
    let _v3 = _v0.nowMs ?? Date.now(),
      _v4 = _v2(_v0.proposedStartIso),
      {
        conflicts: _v5
      } = function (_v0, _v1) {
        let _v2 = _v5(_v0.map(_v0 => {
            let _v1 = _v1(_v0.startTime).getTime(),
              _v2 = _v3(_v0),
              _v3 = Math.max(_v2 - _v1, 1);
            return {
              occurrence: _v0,
              top: _v1,
              height: _v3,
              bottom: _v2
            };
          }).sort((_v0, _v1) => _v0.top - _v1.top)),
          _v3 = [],
          _v4 = [];
        for (let _v0 of _v2) if (_v6(_v0) > _v1) {
          let _v0 = _v4(_v0.map(_v0 => _v0.occurrence)),
            _v1 = Math.min(..._v0.map(_v0 => _v0.top)),
            _v2 = Math.max(..._v0.map(_v0 => _v0.bottom)),
            _v3 = new Map();
          for (let _v0 of _v0) {
            let _v0 = `${_v0.occurrence.eventUri ?? ""}\0${_v0.occurrence.startTime}`;
            _v3.set(_v0, _v0);
          }
          _v3.push({
            events: _v0.map(_v0 => {
              let _v1 = `${_v0.occurrence.eventUri ?? ""}\0${_v0.occurrence.startTime}`,
                _v2 = _v3.get(_v1),
                _v3 = _v2?.top ?? _v1,
                _v4 = _v2?.height ?? 0;
              return {
                occurrence: _v0.occurrence,
                relativeTop: _v3 - _v1,
                eventHeight: _v4
              };
            }),
            top: _v1,
            height: _v2 - _v1
          });
        } else _v4.push(..._v0.map(_v0 => _v0.occurrence));
        return {
          conflicts: _v3,
          nonConflict: _v4
        };
      }([...(_v1 = _v0.occurrences, _v2 = _v1.filter(_v0 => _v2(_v0.startTime) === _v4), _v2.filter(_v0 => _v3(_v0) > _v3)), function (_v0, _v1) {
        let _v2,
          _v3 = _v1(_v0);
        if (_v1) {
          let _v0 = _v1(_v1);
          _v2 = _v0.getTime() > _v3.getTime() ? _v0.getTime() : _v3.getTime() + 0;
        } else _v2 = _v3.getTime() + 0;
        return {
          startTime: _v0,
          endTime: new Date(_v2).toISOString(),
          eventUri: _v7,
          eventTitle: ""
        };
      }(_v0.proposedStartIso, _v0.proposedEndIso)], _v0.maxStreams),
      _v6 = _v5.filter(_v0 => _v0.events.some(_v0 => _v0.occurrence.eventUri === _v7));
    return {
      exceedsQuota: _v6.length > 0,
      conflicts: _v6
    };
  }, "findConflictGroups", 0, function (_v0, _v1) {
    let _v2 = _v5(_v4(_v0)),
      _v3 = [],
      _v4 = [];
    for (let _v0 of _v2) if (_v6(_v0) > _v1) {
      let _v0 = Math.min(..._v0.map(_v0 => _v0.top)),
        _v1 = Math.max(..._v0.map(_v0 => _v0.bottom));
      _v3.push({
        events: _v0.map(_v0 => ({
          occurrence: _v0.occurrence,
          relativeTop: _v0.top - _v0,
          eventHeight: _v0.height
        })),
        top: _v0,
        height: _v1 - _v0
      });
    } else _v4.push(..._v0.map(_v0 => _v0.occurrence));
    return {
      conflicts: _v3,
      nonConflict: _v4
    };
  }, "getExplicitProposedEndIsoForQuotaCheck", 0, function (_v0, _v1, _v2) {
    if (!_v0 || _v2 || !_v1) return;
    let _v3 = _v1(_v0);
    if (!(_v1(_v1).getTime() <= _v3.getTime())) return _v1;
  }, "getOccurrenceEndMs", 0, _v3, "getOccurrencesQueryRangeForProposedStart", 0, function (_v0) {
    let _v1,
      _v2,
      _v3,
      _v4,
      _v5,
      _v6 = _v2(_v0);
    return {
      startDate: _v6,
      endDate: ((_v2 = new Date(Number((_v1 = _v6.split("-"))[0]), Number(_v1[1]) - 1, Number(_v1[2]))).setDate(_v2.getDate() + 1), _v3 = _v2.getFullYear(), _v4 = String(_v2.getMonth() + 1).padStart(2, "0"), _v5 = String(_v2.getDate()).padStart(2, "0"), `${_v3}-${_v4}-${_v5}`)
    };
  }]);
}