{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = "PAUSING",
    _v7 = "PRCS";
  async function _v8(_v0, _v1) {
    let _v2 = (0, _v4.getGctlData)();
    if (!_v1 || !_v2?.baseUrl || 0 === _v0.length) return _v0;
    let _v3 = _v0.filter(_v0 => _v0.status !== _v7 && _v0.status !== _v6);
    if (0 === _v3.length) return _v0;
    try {
      let _v0 = await Promise.allSettled(_v3.map(_v0 => {
          let _v1 = String(_v0.uri.split("/").pop());
          return (0, _v5.getUserAiBatchsession)({
            baseUrl: _v2.baseUrl ?? void 0,
            where: {
              userId: _v1,
              batchsessionId: _v1
            },
            select: ["csvUrl"],
            headers: _v2.headers
          });
        })),
        _v1 = new Map();
      return _v0.forEach((_v0, _v1) => {
        "fulfilled" === _v0.status && _v0.value?.csvUrl ? _v1.set(_v3[_v1].uri, _v0.value.csvUrl) : "rejected" === _v0.status && console.error(`Failed to fetch CSV URL for job ${_v3[_v1].uri}:`, _v0.reason);
      }), _v0.map(_v0 => ({
        ..._v0,
        csvUrl: _v1.get(_v0.uri) || _v0.csvUrl
      }));
    } catch (_v0) {
      return console.error("Failed to fetch CSV URLs for completed jobs", _v0), _v0;
    }
  }
  let _v9 = (0, _v1.create)()((0, _v2.devtools)((_v0, _v1) => ({
    isVisible: !1,
    inProgressJobs: [],
    doneJobs: [],
    isInitialLoad: !0,
    lastFetchTimestamp: 0,
    pollingTimeoutId: void 0,
    error: null,
    currentUserId: null,
    stopPolling: () => {
      let {
        pollingTimeoutId: _v0
      } = _v1();
      void 0 !== _v0 && (clearTimeout(_v0), _v0({
        pollingTimeoutId: void 0
      }, void 0, "activityCenter/stopPolling"));
    },
    hide: () => {
      _v0({
        isVisible: !1,
        doneJobs: []
      }, void 0, "activityCenter/hide");
    },
    clearDoneJobs: () => {
      _v0({
        doneJobs: []
      });
    },
    handleNewTranslationJob: _v0 => {
      _v0({
        isVisible: !0
      }, void 0, "activityCenter/handleNewTranslationJob"), _v1().fetchBatchSessions(_v0, {
        isTriggeredByUser: !0
      });
    },
    fetchBatchSessions: async (_v0, _v1) => {
      if (!_v0) return;
      let _v2 = Date.now();
      if (_v1?.isTriggeredByUser || !(_v2 - _v1().lastFetchTimestamp < 0)) {
        _v0({
          error: null,
          lastFetchTimestamp: _v2,
          currentUserId: _v0
        });
        try {
          let _v0 = (0, _v4.getGctlData)();
          if (!_v0 || !_v0.baseUrl) throw Error("API credentials not available");
          let _v1 = (await (0, _v3.getUserAiBatchsessions)({
              baseUrl: _v0.baseUrl ?? void 0,
              where: {
                userId: _v0
              },
              query: {
                serviceFilter: "translations",
                aggregateByVideo: !0
              },
              select: ["folderIds", "params", "status", "total", "type", "stats", "uri", "folderName"],
              headers: _v0.headers
            })).data,
            _v2 = _v1().inProgressJobs,
            _v3 = _v1.filter(_v0 => _v0.status === _v7 || _v0.status === _v6),
            _v4 = _v2.filter(_v0 => !_v3.some(_v0 => _v0.uri === _v0.uri)).map(_v0 => {
              let _v1 = _v1.find(_v0 => _v0.uri === _v0.uri);
              return _v1 || console.warn("Job not found in API response, using stale data:", _v0), _v1;
            }).filter(_v0 => void 0 !== _v0),
            _v5 = await _v8(_v4, _v0),
            _v6 = _v1().doneJobs,
            _v7 = _v5.length > 0 ? [..._v6, ..._v5] : _v6,
            _v8 = _v3.length > 0 || _v7.length > 0,
            _v9 = _v1().isVisible;
          if (_v1().isInitialLoad ? _v3.length > 0 && (_v9 = !0) : _v8 && (_v9 = !0), _v1().stopPolling(), _v3.length > 0) {
            let _v0 = setTimeout(() => {
              let _v0 = _v1().currentUserId;
              _v0 && _v1().fetchBatchSessions(_v0);
            }, 0);
            _v0({
              pollingTimeoutId: _v0
            });
          }
          _v0({
            inProgressJobs: _v3,
            doneJobs: _v7,
            isVisible: _v9,
            isInitialLoad: !1
          });
        } catch (_v0) {
          _v0({
            error: _v0 instanceof Error ? _v0 : Error("An unknown error occurred")
          });
        }
      }
    }
  }), {
    name: "ActivityCenterStore"
  }));
  _v0.s(["useActivityCenterStore", 0, _v9], 0);
}