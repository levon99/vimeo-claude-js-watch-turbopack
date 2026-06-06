{
  "use strict";

  let _v1 = !0,
    _v2 = !0;
  function _v3(_v0, _v1, _v2) {
    let _v3 = _v0.match(_v1);
    return _v3 && _v3.length >= _v2 && parseFloat(_v3[_v2], 10);
  }
  function _v4(_v0, _v1, _v2) {
    if (!_v0.RTCPeerConnection) return;
    let _v3 = _v0.RTCPeerConnection.prototype,
      _v4 = _v3.addEventListener;
    _v3.addEventListener = function (_v0, _v1) {
      if (_v0 !== _v1) return _v4.apply(this, arguments);
      let _v2 = _v0 => {
        let _v1 = _v2(_v0);
        _v1 && (_v1.handleEvent ? _v1.handleEvent(_v1) : _v1(_v1));
      };
      return this._eventMap = this._eventMap || {}, this._eventMap[_v1] || (this._eventMap[_v1] = new Map()), this._eventMap[_v1].set(_v1, _v2), _v4.apply(this, [_v0, _v2]);
    };
    let _v5 = _v3.removeEventListener;
    _v3.removeEventListener = function (_v0, _v1) {
      if (_v0 !== _v1 || !this._eventMap || !this._eventMap[_v1] || !this._eventMap[_v1].has(_v1)) return _v5.apply(this, arguments);
      let _v2 = this._eventMap[_v1].get(_v1);
      return this._eventMap[_v1].delete(_v1), 0 === this._eventMap[_v1].size && delete this._eventMap[_v1], 0 === Object.keys(this._eventMap).length && delete this._eventMap, _v5.apply(this, [_v0, _v2]);
    }, Object.defineProperty(_v3, "on" + _v1, {
      get() {
        return this["_on" + _v1];
      },
      set(_v0) {
        this["_on" + _v1] && (this.removeEventListener(_v1, this["_on" + _v1]), delete this["_on" + _v1]), _v0 && this.addEventListener(_v1, this["_on" + _v1] = _v0);
      },
      enumerable: !0,
      configurable: !0
    });
  }
  function _v5(_v0) {
    return "boolean" != typeof _v0 ? Error("Argument type: " + typeof _v0 + ". Please use a boolean.") : (_v1 = _v0, _v0 ? "adapter.js logging disabled" : "adapter.js logging enabled");
  }
  function _v6(_v0) {
    return "boolean" != typeof _v0 ? Error("Argument type: " + typeof _v0 + ". Please use a boolean.") : (_v2 = !_v0, "adapter.js deprecation warnings " + (_v0 ? "disabled" : "enabled"));
  }
  function _v7() {
    "object" == typeof window && !_v1 && "u" > typeof console && "function" == typeof console.log && console.log.apply(console, arguments);
  }
  function _v8(_v0, _v1) {
    _v2 && console.warn(_v0 + " is deprecated, please use " + _v1 + " instead.");
  }
  function _v9(_v0) {
    return "[object Object]" === Object.prototype.toString.call(_v0);
  }
  function _v10(_v0, _v1, _v2) {
    let _v3 = _v2 ? "outbound-rtp" : "inbound-rtp",
      _v4 = new Map();
    if (null === _v1) return _v4;
    let _v5 = [];
    return _v0.forEach(_v0 => {
      "track" === _v0.type && _v0.trackIdentifier === _v1.id && _v5.push(_v0);
    }), _v5.forEach(_v0 => {
      _v0.forEach(_v0 => {
        _v0.type === _v3 && _v0.trackId === _v0.id && function _v0(_v1, _v2, _v3) {
          !_v2 || _v3.has(_v2.id) || (_v3.set(_v2.id, _v2), Object.keys(_v2).forEach(_v0 => {
            _v0.endsWith("Id") ? _v0(_v1, _v1.get(_v2[_v0]), _v3) : _v0.endsWith("Ids") && _v2[_v0].forEach(_v0 => {
              _v0(_v1, _v1.get(_v0), _v3);
            });
          }));
        }(_v0, _v0, _v4);
      });
    }), _v4;
  }
  function _v11(_v0) {
    _v0.MediaStream = _v0.MediaStream || _v0.webkitMediaStream;
  }
  function _v12(_v0) {
    if ("object" != typeof _v0 || !_v0.RTCPeerConnection || "ontrack" in _v0.RTCPeerConnection.prototype) _v4(_v0, "track", _v0 => (_v0.transceiver || Object.defineProperty(_v0, "transceiver", {
      value: {
        receiver: _v0.receiver
      }
    }), _v0));else {
      Object.defineProperty(_v0.RTCPeerConnection.prototype, "ontrack", {
        get() {
          return this._ontrack;
        },
        set(_v0) {
          this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = _v0);
        },
        enumerable: !0,
        configurable: !0
      });
      let _v0 = _v0.RTCPeerConnection.prototype.setRemoteDescription;
      _v0.RTCPeerConnection.prototype.setRemoteDescription = function () {
        return this._ontrackpoly || (this._ontrackpoly = _v0 => {
          _v0.stream.addEventListener("addtrack", _v0 => {
            let _v1;
            _v1 = _v0.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find(_v0 => _v0.track && _v0.track.id === _v0.track.id) : {
              track: _v0.track
            };
            let _v2 = new Event("track");
            _v2.track = _v0.track, _v2.receiver = _v1, _v2.transceiver = {
              receiver: _v1
            }, _v2.streams = [_v0.stream], this.dispatchEvent(_v2);
          }), _v0.stream.getTracks().forEach(_v0 => {
            let _v1;
            _v1 = _v0.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find(_v0 => _v0.track && _v0.track.id === _v0.id) : {
              track: _v0
            };
            let _v2 = new Event("track");
            _v2.track = _v0, _v2.receiver = _v1, _v2.transceiver = {
              receiver: _v1
            }, _v2.streams = [_v0.stream], this.dispatchEvent(_v2);
          });
        }, this.addEventListener("addstream", this._ontrackpoly)), _v0.apply(this, arguments);
      };
    }
  }
  function _v13(_v0) {
    if ("object" == typeof _v0 && _v0.RTCPeerConnection && !("getSenders" in _v0.RTCPeerConnection.prototype) && "createDTMFSender" in _v0.RTCPeerConnection.prototype) {
      let _v0 = function (_v0, _v1) {
        return {
          track: _v1,
          get dtmf() {
            return void 0 === this._dtmf && ("audio" === _v1.kind ? this._dtmf = _v0.createDTMFSender(_v1) : this._dtmf = null), this._dtmf;
          },
          _pc: _v0
        };
      };
      if (!_v0.RTCPeerConnection.prototype.getSenders) {
        _v0.RTCPeerConnection.prototype.getSenders = function () {
          return this._senders = this._senders || [], this._senders.slice();
        };
        let _v0 = _v0.RTCPeerConnection.prototype.addTrack;
        _v0.RTCPeerConnection.prototype.addTrack = function (_v0, _v1) {
          let _v2 = _v0.apply(this, arguments);
          return _v2 || (_v2 = _v0(this, _v0), this._senders.push(_v2)), _v2;
        };
        let _v1 = _v0.RTCPeerConnection.prototype.removeTrack;
        _v0.RTCPeerConnection.prototype.removeTrack = function (_v0) {
          _v1.apply(this, arguments);
          let _v1 = this._senders.indexOf(_v0);
          -1 !== _v1 && this._senders.splice(_v1, 1);
        };
      }
      let _v1 = _v0.RTCPeerConnection.prototype.addStream;
      _v0.RTCPeerConnection.prototype.addStream = function (_v0) {
        this._senders = this._senders || [], _v1.apply(this, [_v0]), _v0.getTracks().forEach(_v0 => {
          this._senders.push(_v0(this, _v0));
        });
      };
      let _v2 = _v0.RTCPeerConnection.prototype.removeStream;
      _v0.RTCPeerConnection.prototype.removeStream = function (_v0) {
        this._senders = this._senders || [], _v2.apply(this, [_v0]), _v0.getTracks().forEach(_v0 => {
          let _v1 = this._senders.find(_v0 => _v0.track === _v0);
          _v1 && this._senders.splice(this._senders.indexOf(_v1), 1);
        });
      };
    } else if ("object" == typeof _v0 && _v0.RTCPeerConnection && "getSenders" in _v0.RTCPeerConnection.prototype && "createDTMFSender" in _v0.RTCPeerConnection.prototype && _v0.RTCRtpSender && !("dtmf" in _v0.RTCRtpSender.prototype)) {
      let _v0 = _v0.RTCPeerConnection.prototype.getSenders;
      _v0.RTCPeerConnection.prototype.getSenders = function () {
        let _v0 = _v0.apply(this, []);
        return _v0.forEach(_v0 => _v0._pc = this), _v0;
      }, Object.defineProperty(_v0.RTCRtpSender.prototype, "dtmf", {
        get() {
          return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
        }
      });
    }
  }
  function _v14(_v0) {
    if (!("object" == typeof _v0 && _v0.RTCPeerConnection && _v0.RTCRtpSender && _v0.RTCRtpReceiver)) return;
    if (!("getStats" in _v0.RTCRtpSender.prototype)) {
      let _v0 = _v0.RTCPeerConnection.prototype.getSenders;
      _v0 && (_v0.RTCPeerConnection.prototype.getSenders = function () {
        let _v0 = _v0.apply(this, []);
        return _v0.forEach(_v0 => _v0._pc = this), _v0;
      });
      let _v1 = _v0.RTCPeerConnection.prototype.addTrack;
      _v1 && (_v0.RTCPeerConnection.prototype.addTrack = function () {
        let _v0 = _v1.apply(this, arguments);
        return _v0._pc = this, _v0;
      }), _v0.RTCRtpSender.prototype.getStats = function () {
        let _v0 = this;
        return this._pc.getStats().then(_v0 => _v10(_v0, _v0.track, !0));
      };
    }
    if (!("getStats" in _v0.RTCRtpReceiver.prototype)) {
      let _v0 = _v0.RTCPeerConnection.prototype.getReceivers;
      _v0 && (_v0.RTCPeerConnection.prototype.getReceivers = function () {
        let _v0 = _v0.apply(this, []);
        return _v0.forEach(_v0 => _v0._pc = this), _v0;
      }), _v4(_v0, "track", _v0 => (_v0.receiver._pc = _v0.srcElement, _v0)), _v0.RTCRtpReceiver.prototype.getStats = function () {
        let _v0 = this;
        return this._pc.getStats().then(_v0 => _v10(_v0, _v0.track, !1));
      };
    }
    if (!("getStats" in _v0.RTCRtpSender.prototype && "getStats" in _v0.RTCRtpReceiver.prototype)) return;
    let _v1 = _v0.RTCPeerConnection.prototype.getStats;
    _v0.RTCPeerConnection.prototype.getStats = function () {
      if (arguments.length > 0 && arguments[0] instanceof _v0.MediaStreamTrack) {
        let _v0,
          _v1,
          _v2,
          _v3 = arguments[0];
        return (this.getSenders().forEach(_v0 => {
          _v0.track === _v3 && (_v0 ? _v2 = !0 : _v0 = _v0);
        }), this.getReceivers().forEach(_v0 => (_v0.track === _v3 && (_v1 ? _v2 = !0 : _v1 = _v0), _v0.track === _v3)), _v2 || _v0 && _v1) ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : _v0 ? _v0.getStats() : _v1 ? _v1.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
      }
      return _v1.apply(this, arguments);
    };
  }
  function _v15(_v0) {
    _v0.RTCPeerConnection.prototype.getLocalStreams = function () {
      return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(_v0 => this._shimmedLocalStreams[_v0][0]);
    };
    let _v1 = _v0.RTCPeerConnection.prototype.addTrack;
    _v0.RTCPeerConnection.prototype.addTrack = function (_v0, _v1) {
      if (!_v1) return _v1.apply(this, arguments);
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      let _v2 = _v1.apply(this, arguments);
      return this._shimmedLocalStreams[_v1.id] ? -1 === this._shimmedLocalStreams[_v1.id].indexOf(_v2) && this._shimmedLocalStreams[_v1.id].push(_v2) : this._shimmedLocalStreams[_v1.id] = [_v1, _v2], _v2;
    };
    let _v2 = _v0.RTCPeerConnection.prototype.addStream;
    _v0.RTCPeerConnection.prototype.addStream = function (_v0) {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {}, _v0.getTracks().forEach(_v0 => {
        if (this.getSenders().find(_v0 => _v0.track === _v0)) throw new DOMException("Track already exists.", "InvalidAccessError");
      });
      let _v1 = this.getSenders();
      _v2.apply(this, arguments);
      let _v2 = this.getSenders().filter(_v0 => -1 === _v1.indexOf(_v0));
      this._shimmedLocalStreams[_v0.id] = [_v0].concat(_v2);
    };
    let _v3 = _v0.RTCPeerConnection.prototype.removeStream;
    _v0.RTCPeerConnection.prototype.removeStream = function (_v0) {
      return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[_v0.id], _v3.apply(this, arguments);
    };
    let _v4 = _v0.RTCPeerConnection.prototype.removeTrack;
    _v0.RTCPeerConnection.prototype.removeTrack = function (_v0) {
      return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, _v0 && Object.keys(this._shimmedLocalStreams).forEach(_v0 => {
        let _v1 = this._shimmedLocalStreams[_v0].indexOf(_v0);
        -1 !== _v1 && this._shimmedLocalStreams[_v0].splice(_v1, 1), 1 === this._shimmedLocalStreams[_v0].length && delete this._shimmedLocalStreams[_v0];
      }), _v4.apply(this, arguments);
    };
  }
  function _v16(_v0, _v1) {
    if (!_v0.RTCPeerConnection) return;
    if (_v0.RTCPeerConnection.prototype.addTrack && _v1.version >= 65) return _v15(_v0);
    let _v2 = _v0.RTCPeerConnection.prototype.getLocalStreams;
    _v0.RTCPeerConnection.prototype.getLocalStreams = function () {
      let _v0 = _v2.apply(this);
      return this._reverseStreams = this._reverseStreams || {}, _v0.map(_v0 => this._reverseStreams[_v0.id]);
    };
    let _v3 = _v0.RTCPeerConnection.prototype.addStream;
    _v0.RTCPeerConnection.prototype.addStream = function (_v0) {
      if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, _v0.getTracks().forEach(_v0 => {
        if (this.getSenders().find(_v0 => _v0.track === _v0)) throw new DOMException("Track already exists.", "InvalidAccessError");
      }), !this._reverseStreams[_v0.id]) {
        let _v0 = new _v0.MediaStream(_v0.getTracks());
        this._streams[_v0.id] = _v0, this._reverseStreams[_v0.id] = _v0, _v0 = _v0;
      }
      _v3.apply(this, [_v0]);
    };
    let _v4 = _v0.RTCPeerConnection.prototype.removeStream;
    function _v5(_v0, _v1) {
      let _v2 = _v1.sdp;
      return Object.keys(_v0._reverseStreams || []).forEach(_v0 => {
        let _v1 = _v0._reverseStreams[_v0],
          _v2 = _v0._streams[_v1.id];
        _v2 = _v2.replace(RegExp(_v2.id, "g"), _v1.id);
      }), new RTCSessionDescription({
        type: _v1.type,
        sdp: _v2
      });
    }
    _v0.RTCPeerConnection.prototype.removeStream = function (_v0) {
      this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, _v4.apply(this, [this._streams[_v0.id] || _v0]), delete this._reverseStreams[this._streams[_v0.id] ? this._streams[_v0.id].id : _v0.id], delete this._streams[_v0.id];
    }, _v0.RTCPeerConnection.prototype.addTrack = function (_v0, _v1) {
      if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
      let _v2 = [].slice.call(arguments, 1);
      if (1 !== _v2.length || !_v2[0].getTracks().find(_v0 => _v0 === _v0)) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
      if (this.getSenders().find(_v0 => _v0.track === _v0)) throw new DOMException("Track already exists.", "InvalidAccessError");
      this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
      let _v3 = this._streams[_v1.id];
      if (_v3) _v3.addTrack(_v0), Promise.resolve().then(() => {
        this.dispatchEvent(new Event("negotiationneeded"));
      });else {
        let _v0 = new _v0.MediaStream([_v0]);
        this._streams[_v1.id] = _v0, this._reverseStreams[_v0.id] = _v1, this.addStream(_v0);
      }
      return this.getSenders().find(_v0 => _v0.track === _v0);
    }, ["createOffer", "createAnswer"].forEach(function (_v0) {
      let _v1 = _v0.RTCPeerConnection.prototype[_v0];
      _v0.RTCPeerConnection.prototype[_v0] = {
        [_v0]() {
          let _v0 = arguments,
            _v1 = arguments.length && "function" == typeof arguments[0];
          return _v1 ? _v1.apply(this, [_v0 => {
            let _v1 = _v5(this, _v0);
            _v0[0].apply(null, [_v1]);
          }, _v0 => {
            _v0[1] && _v0[1].apply(null, _v0);
          }, arguments[2]]) : _v1.apply(this, arguments).then(_v0 => _v5(this, _v0));
        }
      }[_v0];
    });
    let _v6 = _v0.RTCPeerConnection.prototype.setLocalDescription;
    _v0.RTCPeerConnection.prototype.setLocalDescription = function () {
      var _v0, _v1;
      let _v2;
      return arguments.length && arguments[0].type ? (arguments[0] = (_v0 = this, _v1 = arguments[0], _v2 = _v1.sdp, Object.keys(_v0._reverseStreams || []).forEach(_v0 => {
        let _v1 = _v0._reverseStreams[_v0],
          _v2 = _v0._streams[_v1.id];
        _v2 = _v2.replace(RegExp(_v1.id, "g"), _v2.id);
      }), new RTCSessionDescription({
        type: _v1.type,
        sdp: _v2
      })), _v6.apply(this, arguments)) : _v6.apply(this, arguments);
    };
    let _v7 = Object.getOwnPropertyDescriptor(_v0.RTCPeerConnection.prototype, "localDescription");
    Object.defineProperty(_v0.RTCPeerConnection.prototype, "localDescription", {
      get() {
        let _v0 = _v7.get.apply(this);
        return "" === _v0.type ? _v0 : _v5(this, _v0);
      }
    }), _v0.RTCPeerConnection.prototype.removeTrack = function (_v0) {
      let _v1;
      if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
      if (!_v0._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
      if (_v0._pc !== this) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
      this._streams = this._streams || {}, Object.keys(this._streams).forEach(_v0 => {
        this._streams[_v0].getTracks().find(_v0 => _v0.track === _v0) && (_v1 = this._streams[_v0]);
      }), _v1 && (1 === _v1.getTracks().length ? this.removeStream(this._reverseStreams[_v1.id]) : _v1.removeTrack(_v0.track), this.dispatchEvent(new Event("negotiationneeded")));
    };
  }
  function _v17(_v0, _v1) {
    !_v0.RTCPeerConnection && _v0.webkitRTCPeerConnection && (_v0.RTCPeerConnection = _v0.webkitRTCPeerConnection), _v0.RTCPeerConnection && _v1.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (_v0) {
      let _v1 = _v0.RTCPeerConnection.prototype[_v0];
      _v0.RTCPeerConnection.prototype[_v0] = {
        [_v0]() {
          return arguments[0] = new ("addIceCandidate" === _v0 ? _v0.RTCIceCandidate : _v0.RTCSessionDescription)(arguments[0]), _v1.apply(this, arguments);
        }
      }[_v0];
    });
  }
  function _v18(_v0, _v1) {
    _v4(_v0, "negotiationneeded", _v0 => {
      let _v1 = _v0.target;
      if (!(_v1.version < 72) && (!_v1.getConfiguration || "plan-b" !== _v1.getConfiguration().sdpSemantics) || "stable" === _v1.signalingState) return _v0;
    });
  }
  _v0.s(["fixNegotiationNeeded", 0, _v18, "shimAddTrackRemoveTrack", 0, _v16, "shimAddTrackRemoveTrackWithNative", 0, _v15, "shimGetSendersWithDtmf", 0, _v13, "shimMediaStream", 0, _v11, "shimOnTrack", 0, _v12, "shimPeerConnection", 0, _v17, "shimSenderReceiverGetStats", 0, _v14], 0), _v0.i(0), _v0.s(["fixNegotiationNeeded", 0, _v18, "shimAddTrackRemoveTrack", 0, _v16, "shimAddTrackRemoveTrackWithNative", 0, _v15, "shimGetSendersWithDtmf", 0, _v13, "shimGetUserMedia", 0, function (_v0, _v1) {
    let _v2 = _v0 && _v0.navigator;
    if (!_v2.mediaDevices) return;
    let _v3 = function (_v0) {
        if ("object" != typeof _v0 || _v0.mandatory || _v0.optional) return _v0;
        let _v1 = {};
        return Object.keys(_v0).forEach(_v0 => {
          if ("require" === _v0 || "advanced" === _v0 || "mediaSource" === _v0) return;
          let _v1 = "object" == typeof _v0[_v0] ? _v0[_v0] : {
            ideal: _v0[_v0]
          };
          void 0 !== _v1.exact && "number" == typeof _v1.exact && (_v1.min = _v1.max = _v1.exact);
          let _v2 = function (_v0, _v1) {
            return _v0 ? _v0 + _v1.charAt(0).toUpperCase() + _v1.slice(1) : "deviceId" === _v1 ? "sourceId" : _v1;
          };
          if (void 0 !== _v1.ideal) {
            _v1.optional = _v1.optional || [];
            let _v0 = {};
            "number" == typeof _v1.ideal ? (_v0[_v2("min", _v0)] = _v1.ideal, _v1.optional.push(_v0), (_v0 = {})[_v2("max", _v0)] = _v1.ideal) : _v0[_v2("", _v0)] = _v1.ideal, _v1.optional.push(_v0);
          }
          void 0 !== _v1.exact && "number" != typeof _v1.exact ? (_v1.mandatory = _v1.mandatory || {}, _v1.mandatory[_v2("", _v0)] = _v1.exact) : ["min", "max"].forEach(_v0 => {
            void 0 !== _v1[_v0] && (_v1.mandatory = _v1.mandatory || {}, _v1.mandatory[_v2(_v0, _v0)] = _v1[_v0]);
          });
        }), _v0.advanced && (_v1.optional = (_v1.optional || []).concat(_v0.advanced)), _v1;
      },
      _v4 = function (_v0, _v1) {
        if (_v1.version >= 61) return _v1(_v0);
        if ((_v0 = JSON.parse(JSON.stringify(_v0))) && "object" == typeof _v0.audio) {
          let _v0 = function (_v0, _v1, _v2) {
            _v1 in _v0 && !(_v2 in _v0) && (_v0[_v2] = _v0[_v1], delete _v0[_v1]);
          };
          _v0((_v0 = JSON.parse(JSON.stringify(_v0))).audio, "autoGainControl", "googAutoGainControl"), _v0(_v0.audio, "noiseSuppression", "googNoiseSuppression"), _v0.audio = _v3(_v0.audio);
        }
        if (_v0 && "object" == typeof _v0.video) {
          let _v0 = _v0.video.facingMode;
          _v0 = _v0 && ("object" == typeof _v0 ? _v0 : {
            ideal: _v0
          });
          let _v1 = _v1.version < 66;
          if (_v0 && ("user" === _v0.exact || "environment" === _v0.exact || "user" === _v0.ideal || "environment" === _v0.ideal) && !(_v2.mediaDevices.getSupportedConstraints && _v2.mediaDevices.getSupportedConstraints().facingMode && !_v1)) {
            let _v0;
            if (delete _v0.video.facingMode, "environment" === _v0.exact || "environment" === _v0.ideal ? _v0 = ["back", "rear"] : ("user" === _v0.exact || "user" === _v0.ideal) && (_v0 = ["front"]), _v0) return _v2.mediaDevices.enumerateDevices().then(_v0 => {
              let _v1 = (_v0 = _v0.filter(_v0 => "videoinput" === _v0.kind)).find(_v0 => _v0.some(_v0 => _v0.label.toLowerCase().includes(_v0)));
              return !_v1 && _v0.length && _v0.includes("back") && (_v1 = _v0[_v0.length - 1]), _v1 && (_v0.video.deviceId = _v0.exact ? {
                exact: _v1.deviceId
              } : {
                ideal: _v1.deviceId
              }), _v0.video = _v3(_v0.video), _v7("chrome: " + JSON.stringify(_v0)), _v1(_v0);
            });
          }
          _v0.video = _v3(_v0.video);
        }
        return _v7("chrome: " + JSON.stringify(_v0)), _v1(_v0);
      },
      _v5 = function (_v0) {
        return _v1.version >= 64 ? _v0 : {
          name: {
            PermissionDeniedError: "NotAllowedError",
            PermissionDismissedError: "NotAllowedError",
            InvalidStateError: "NotAllowedError",
            DevicesNotFoundError: "NotFoundError",
            ConstraintNotSatisfiedError: "OverconstrainedError",
            TrackStartError: "NotReadableError",
            MediaDeviceFailedDueToShutdown: "NotAllowedError",
            MediaDeviceKillSwitchOn: "NotAllowedError",
            TabCaptureError: "AbortError",
            ScreenCaptureError: "AbortError",
            DeviceCaptureError: "AbortError"
          }[_v0.name] || _v0.name,
          message: _v0.message,
          constraint: _v0.constraint || _v0.constraintName,
          toString() {
            return this.name + (this.message && ": ") + this.message;
          }
        };
      };
    if (_v2.getUserMedia = function (_v0, _v1, _v2) {
      _v4(_v0, _v0 => {
        _v2.webkitGetUserMedia(_v0, _v1, _v0 => {
          _v2 && _v2(_v5(_v0));
        });
      });
    }.bind(_v2), _v2.mediaDevices.getUserMedia) {
      let _v0 = _v2.mediaDevices.getUserMedia.bind(_v2.mediaDevices);
      _v2.mediaDevices.getUserMedia = function (_v0) {
        return _v4(_v0, _v0 => _v0(_v0).then(_v0 => {
          if (_v0.audio && !_v0.getAudioTracks().length || _v0.video && !_v0.getVideoTracks().length) throw _v0.getTracks().forEach(_v0 => {
            _v0.stop();
          }), new DOMException("", "NotFoundError");
          return _v0;
        }, _v0 => Promise.reject(_v5(_v0))));
      };
    }
  }, "shimMediaStream", 0, _v11, "shimOnTrack", 0, _v12, "shimPeerConnection", 0, _v17, "shimSenderReceiverGetStats", 0, _v14], 0);
  var _v19 = _v0.i(0);
  function _v20(_v0) {
    "object" == typeof _v0 && _v0.RTCTrackEvent && "receiver" in _v0.RTCTrackEvent.prototype && !("transceiver" in _v0.RTCTrackEvent.prototype) && Object.defineProperty(_v0.RTCTrackEvent.prototype, "transceiver", {
      get() {
        return {
          receiver: this.receiver
        };
      }
    });
  }
  function _v21(_v0, _v1) {
    if ("object" != typeof _v0 || !(_v0.RTCPeerConnection || _v0.mozRTCPeerConnection)) return;
    !_v0.RTCPeerConnection && _v0.mozRTCPeerConnection && (_v0.RTCPeerConnection = _v0.mozRTCPeerConnection), _v1.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (_v0) {
      let _v1 = _v0.RTCPeerConnection.prototype[_v0];
      _v0.RTCPeerConnection.prototype[_v0] = {
        [_v0]() {
          return arguments[0] = new ("addIceCandidate" === _v0 ? _v0.RTCIceCandidate : _v0.RTCSessionDescription)(arguments[0]), _v1.apply(this, arguments);
        }
      }[_v0];
    });
    let _v2 = {
        inboundrtp: "inbound-rtp",
        outboundrtp: "outbound-rtp",
        candidatepair: "candidate-pair",
        localcandidate: "local-candidate",
        remotecandidate: "remote-candidate"
      },
      _v3 = _v0.RTCPeerConnection.prototype.getStats;
    _v0.RTCPeerConnection.prototype.getStats = function () {
      let [_v0, _v1, _v2] = arguments;
      return _v3.apply(this, [_v0 || null]).then(_v0 => {
        if (_v1.version < 53 && !_v1) try {
          _v0.forEach(_v0 => {
            _v0.type = _v2[_v0.type] || _v0.type;
          });
        } catch (_v0) {
          if ("TypeError" !== _v0.name) throw _v0;
          _v0.forEach((_v0, _v1) => {
            _v0.set(_v1, Object.assign({}, _v0, {
              type: _v2[_v0.type] || _v0.type
            }));
          });
        }
        return _v0;
      }).then(_v1, _v2);
    };
  }
  function _v22(_v0) {
    if (!("object" == typeof _v0 && _v0.RTCPeerConnection && _v0.RTCRtpSender) || _v0.RTCRtpSender && "getStats" in _v0.RTCRtpSender.prototype) return;
    let _v1 = _v0.RTCPeerConnection.prototype.getSenders;
    _v1 && (_v0.RTCPeerConnection.prototype.getSenders = function () {
      let _v0 = _v1.apply(this, []);
      return _v0.forEach(_v0 => _v0._pc = this), _v0;
    });
    let _v2 = _v0.RTCPeerConnection.prototype.addTrack;
    _v2 && (_v0.RTCPeerConnection.prototype.addTrack = function () {
      let _v0 = _v2.apply(this, arguments);
      return _v0._pc = this, _v0;
    }), _v0.RTCRtpSender.prototype.getStats = function () {
      return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
    };
  }
  function _v23(_v0) {
    if (!("object" == typeof _v0 && _v0.RTCPeerConnection && _v0.RTCRtpSender) || _v0.RTCRtpSender && "getStats" in _v0.RTCRtpReceiver.prototype) return;
    let _v1 = _v0.RTCPeerConnection.prototype.getReceivers;
    _v1 && (_v0.RTCPeerConnection.prototype.getReceivers = function () {
      let _v0 = _v1.apply(this, []);
      return _v0.forEach(_v0 => _v0._pc = this), _v0;
    }), _v4(_v0, "track", _v0 => (_v0.receiver._pc = _v0.srcElement, _v0)), _v0.RTCRtpReceiver.prototype.getStats = function () {
      return this._pc.getStats(this.track);
    };
  }
  function _v24(_v0) {
    !_v0.RTCPeerConnection || "removeStream" in _v0.RTCPeerConnection.prototype || (_v0.RTCPeerConnection.prototype.removeStream = function (_v0) {
      _v8("removeStream", "removeTrack"), this.getSenders().forEach(_v0 => {
        _v0.track && _v0.getTracks().includes(_v0.track) && this.removeTrack(_v0);
      });
    });
  }
  function _v25(_v0) {
    _v0.DataChannel && !_v0.RTCDataChannel && (_v0.RTCDataChannel = _v0.DataChannel);
  }
  function _v26(_v0) {
    if (!("object" == typeof _v0 && _v0.RTCPeerConnection)) return;
    let _v1 = _v0.RTCPeerConnection.prototype.addTransceiver;
    _v1 && (_v0.RTCPeerConnection.prototype.addTransceiver = function () {
      this.setParametersPromises = [];
      let _v0 = arguments[1] && arguments[1].sendEncodings;
      void 0 === _v0 && (_v0 = []);
      let _v1 = (_v0 = [..._v0]).length > 0;
      _v1 && _v0.forEach(_v0 => {
        if ("rid" in _v0 && !/^[a-z0-9]{0,16}$/i.test(_v0.rid)) throw TypeError("Invalid RID value provided.");
        if ("scaleResolutionDownBy" in _v0 && !(parseFloat(_v0.scaleResolutionDownBy) >= 1)) throw RangeError("scale_resolution_down_by must be >= 1.0");
        if ("maxFramerate" in _v0 && !(parseFloat(_v0.maxFramerate) >= 0)) throw RangeError("max_framerate must be >= 0.0");
      });
      let _v2 = _v1.apply(this, arguments);
      if (_v1) {
        let {
            sender: _v0
          } = _v2,
          _v1 = _v0.getParameters();
        "encodings" in _v1 && (1 !== _v1.encodings.length || 0 !== Object.keys(_v1.encodings[0]).length) || (_v1.encodings = _v0, _v0.sendEncodings = _v0, this.setParametersPromises.push(_v0.setParameters(_v1).then(() => {
          delete _v0.sendEncodings;
        }).catch(() => {
          delete _v0.sendEncodings;
        })));
      }
      return _v2;
    });
  }
  function _v27(_v0) {
    if (!("object" == typeof _v0 && _v0.RTCRtpSender)) return;
    let _v1 = _v0.RTCRtpSender.prototype.getParameters;
    _v1 && (_v0.RTCRtpSender.prototype.getParameters = function () {
      let _v0 = _v1.apply(this, arguments);
      return "encodings" in _v0 || (_v0.encodings = [].concat(this.sendEncodings || [{}])), _v0;
    });
  }
  function _v28(_v0) {
    if (!("object" == typeof _v0 && _v0.RTCPeerConnection)) return;
    let _v1 = _v0.RTCPeerConnection.prototype.createOffer;
    _v0.RTCPeerConnection.prototype.createOffer = function () {
      return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => _v1.apply(this, arguments)).finally(() => {
        this.setParametersPromises = [];
      }) : _v1.apply(this, arguments);
    };
  }
  function _v29(_v0) {
    if (!("object" == typeof _v0 && _v0.RTCPeerConnection)) return;
    let _v1 = _v0.RTCPeerConnection.prototype.createAnswer;
    _v0.RTCPeerConnection.prototype.createAnswer = function () {
      return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => _v1.apply(this, arguments)).finally(() => {
        this.setParametersPromises = [];
      }) : _v1.apply(this, arguments);
    };
  }
  _v0.s(["shimAddTransceiver", 0, _v26, "shimCreateAnswer", 0, _v29, "shimCreateOffer", 0, _v28, "shimGetParameters", 0, _v27, "shimOnTrack", 0, _v20, "shimPeerConnection", 0, _v21, "shimRTCDataChannel", 0, _v25, "shimReceiverGetStats", 0, _v23, "shimRemoveStream", 0, _v24, "shimSenderGetStats", 0, _v22], 0), _v0.i(0), _v0.s(["shimAddTransceiver", 0, _v26, "shimCreateAnswer", 0, _v29, "shimCreateOffer", 0, _v28, "shimGetDisplayMedia", 0, function (_v0, _v1) {
    _v0.navigator.mediaDevices && "getDisplayMedia" in _v0.navigator.mediaDevices || _v0.navigator.mediaDevices && (_v0.navigator.mediaDevices.getDisplayMedia = function (_v0) {
      if (!(_v0 && _v0.video)) {
        let _v0 = new DOMException("getDisplayMedia without video constraints is undefined");
        return _v0.name = "NotFoundError", _v0.code = 8, Promise.reject(_v0);
      }
      return !0 === _v0.video ? _v0.video = {
        mediaSource: _v1
      } : _v0.video.mediaSource = _v1, _v0.navigator.mediaDevices.getUserMedia(_v0);
    });
  }, "shimGetParameters", 0, _v27, "shimGetUserMedia", 0, function (_v0, _v1) {
    let _v2 = _v0 && _v0.navigator,
      _v3 = _v0 && _v0.MediaStreamTrack;
    if (_v2.getUserMedia = function (_v0, _v1, _v2) {
      _v8("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), _v2.mediaDevices.getUserMedia(_v0).then(_v1, _v2);
    }, !(_v1.version > 55 && "autoGainControl" in _v2.mediaDevices.getSupportedConstraints())) {
      let _v0 = function (_v0, _v1, _v2) {
          _v1 in _v0 && !(_v2 in _v0) && (_v0[_v2] = _v0[_v1], delete _v0[_v1]);
        },
        _v1 = _v2.mediaDevices.getUserMedia.bind(_v2.mediaDevices);
      if (_v2.mediaDevices.getUserMedia = function (_v0) {
        return "object" == typeof _v0 && "object" == typeof _v0.audio && (_v0((_v0 = JSON.parse(JSON.stringify(_v0))).audio, "autoGainControl", "mozAutoGainControl"), _v0(_v0.audio, "noiseSuppression", "mozNoiseSuppression")), _v1(_v0);
      }, _v3 && _v3.prototype.getSettings) {
        let _v0 = _v3.prototype.getSettings;
        _v3.prototype.getSettings = function () {
          let _v0 = _v0.apply(this, arguments);
          return _v0(_v0, "mozAutoGainControl", "autoGainControl"), _v0(_v0, "mozNoiseSuppression", "noiseSuppression"), _v0;
        };
      }
      if (_v3 && _v3.prototype.applyConstraints) {
        let _v0 = _v3.prototype.applyConstraints;
        _v3.prototype.applyConstraints = function (_v0) {
          return "audio" === this.kind && "object" == typeof _v0 && (_v0(_v0 = JSON.parse(JSON.stringify(_v0)), "autoGainControl", "mozAutoGainControl"), _v0(_v0, "noiseSuppression", "mozNoiseSuppression")), _v0.apply(this, [_v0]);
        };
      }
    }
  }, "shimOnTrack", 0, _v20, "shimPeerConnection", 0, _v21, "shimRTCDataChannel", 0, _v25, "shimReceiverGetStats", 0, _v23, "shimRemoveStream", 0, _v24, "shimSenderGetStats", 0, _v22], 0);
  var _v30 = _v0.i(0);
  function _v31(_v0) {
    return _v0 && void 0 !== _v0.video ? Object.assign({}, _v0, {
      video: function _v0(_v1) {
        return _v9(_v1) ? Object.keys(_v1).reduce(function (_v0, _v1) {
          let _v2 = _v9(_v1[_v1]),
            _v3 = _v2 ? _v0(_v1[_v1]) : _v1[_v1],
            _v4 = _v2 && !Object.keys(_v3).length;
          return void 0 === _v3 || _v4 ? _v0 : Object.assign(_v0, {
            [_v1]: _v3
          });
        }, {}) : _v1;
      }(_v0.video)
    }) : _v0;
  }
  _v0.s(["shimAudioContext", 0, function (_v0) {
    "object" != typeof _v0 || _v0.AudioContext || (_v0.AudioContext = _v0.webkitAudioContext);
  }, "shimCallbacksAPI", 0, function (_v0) {
    if ("object" != typeof _v0 || !_v0.RTCPeerConnection) return;
    let _v1 = _v0.RTCPeerConnection.prototype,
      _v2 = _v1.createOffer,
      _v3 = _v1.createAnswer,
      _v4 = _v1.setLocalDescription,
      _v5 = _v1.setRemoteDescription,
      _v6 = _v1.addIceCandidate;
    _v1.createOffer = function (_v0, _v1) {
      let _v2 = arguments.length >= 2 ? arguments[2] : arguments[0],
        _v3 = _v2.apply(this, [_v2]);
      return _v1 ? (_v3.then(_v0, _v1), Promise.resolve()) : _v3;
    }, _v1.createAnswer = function (_v0, _v1) {
      let _v2 = arguments.length >= 2 ? arguments[2] : arguments[0],
        _v3 = _v3.apply(this, [_v2]);
      return _v1 ? (_v3.then(_v0, _v1), Promise.resolve()) : _v3;
    };
    let _v7 = function (_v0, _v1, _v2) {
      let _v3 = _v4.apply(this, [_v0]);
      return _v2 ? (_v3.then(_v1, _v2), Promise.resolve()) : _v3;
    };
    _v1.setLocalDescription = _v7, _v1.setRemoteDescription = _v7 = function (_v0, _v1, _v2) {
      let _v3 = _v5.apply(this, [_v0]);
      return _v2 ? (_v3.then(_v1, _v2), Promise.resolve()) : _v3;
    }, _v1.addIceCandidate = function (_v0, _v1, _v2) {
      let _v3 = _v6.apply(this, [_v0]);
      return _v2 ? (_v3.then(_v1, _v2), Promise.resolve()) : _v3;
    };
  }, "shimConstraints", 0, _v31, "shimCreateOfferLegacy", 0, function (_v0) {
    let _v1 = _v0.RTCPeerConnection.prototype.createOffer;
    _v0.RTCPeerConnection.prototype.createOffer = function (_v0) {
      if (_v0) {
        void 0 !== _v0.offerToReceiveAudio && (_v0.offerToReceiveAudio = !!_v0.offerToReceiveAudio);
        let _v0 = this.getTransceivers().find(_v0 => "audio" === _v0.receiver.track.kind);
        !1 === _v0.offerToReceiveAudio && _v0 ? "sendrecv" === _v0.direction ? _v0.setDirection ? _v0.setDirection("sendonly") : _v0.direction = "sendonly" : "recvonly" === _v0.direction && (_v0.setDirection ? _v0.setDirection("inactive") : _v0.direction = "inactive") : !0 !== _v0.offerToReceiveAudio || _v0 || this.addTransceiver("audio", {
          direction: "recvonly"
        }), void 0 !== _v0.offerToReceiveVideo && (_v0.offerToReceiveVideo = !!_v0.offerToReceiveVideo);
        let _v1 = this.getTransceivers().find(_v0 => "video" === _v0.receiver.track.kind);
        !1 === _v0.offerToReceiveVideo && _v1 ? "sendrecv" === _v1.direction ? _v1.setDirection ? _v1.setDirection("sendonly") : _v1.direction = "sendonly" : "recvonly" === _v1.direction && (_v1.setDirection ? _v1.setDirection("inactive") : _v1.direction = "inactive") : !0 !== _v0.offerToReceiveVideo || _v1 || this.addTransceiver("video", {
          direction: "recvonly"
        });
      }
      return _v1.apply(this, arguments);
    };
  }, "shimGetUserMedia", 0, function (_v0) {
    let _v1 = _v0 && _v0.navigator;
    if (_v1.mediaDevices && _v1.mediaDevices.getUserMedia) {
      let _v0 = _v1.mediaDevices,
        _v1 = _v0.getUserMedia.bind(_v0);
      _v1.mediaDevices.getUserMedia = _v0 => _v1(_v31(_v0));
    }
    !_v1.getUserMedia && _v1.mediaDevices && _v1.mediaDevices.getUserMedia && (_v1.getUserMedia = function (_v0, _v1, _v2) {
      _v1.mediaDevices.getUserMedia(_v0).then(_v1, _v2);
    }.bind(_v1));
  }, "shimLocalStreamsAPI", 0, function (_v0) {
    if ("object" == typeof _v0 && _v0.RTCPeerConnection) {
      if ("getLocalStreams" in _v0.RTCPeerConnection.prototype || (_v0.RTCPeerConnection.prototype.getLocalStreams = function () {
        return this._localStreams || (this._localStreams = []), this._localStreams;
      }), !("addStream" in _v0.RTCPeerConnection.prototype)) {
        let _v0 = _v0.RTCPeerConnection.prototype.addTrack;
        _v0.RTCPeerConnection.prototype.addStream = function (_v0) {
          this._localStreams || (this._localStreams = []), this._localStreams.includes(_v0) || this._localStreams.push(_v0), _v0.getAudioTracks().forEach(_v0 => _v0.call(this, _v0, _v0)), _v0.getVideoTracks().forEach(_v0 => _v0.call(this, _v0, _v0));
        }, _v0.RTCPeerConnection.prototype.addTrack = function (_v0, ..._v1) {
          return _v1 && _v1.forEach(_v0 => {
            this._localStreams ? this._localStreams.includes(_v0) || this._localStreams.push(_v0) : this._localStreams = [_v0];
          }), _v0.apply(this, arguments);
        };
      }
      "removeStream" in _v0.RTCPeerConnection.prototype || (_v0.RTCPeerConnection.prototype.removeStream = function (_v0) {
        this._localStreams || (this._localStreams = []);
        let _v1 = this._localStreams.indexOf(_v0);
        if (-1 === _v1) return;
        this._localStreams.splice(_v1, 1);
        let _v2 = _v0.getTracks();
        this.getSenders().forEach(_v0 => {
          _v2.includes(_v0.track) && this.removeTrack(_v0);
        });
      });
    }
  }, "shimRTCIceServerUrls", 0, function (_v0) {
    if (!_v0.RTCPeerConnection) return;
    let _v1 = _v0.RTCPeerConnection;
    _v0.RTCPeerConnection = function (_v0, _v1) {
      if (_v0 && _v0.iceServers) {
        let _v0 = [];
        for (let _v0 = 0; _v0 < _v0.iceServers.length; _v0++) {
          let _v0 = _v0.iceServers[_v0];
          void 0 === _v0.urls && _v0.url ? (_v8("RTCIceServer.url", "RTCIceServer.urls"), (_v0 = JSON.parse(JSON.stringify(_v0))).urls = _v0.url, delete _v0.url, _v0.push(_v0)) : _v0.push(_v0.iceServers[_v0]);
        }
        _v0.iceServers = _v0;
      }
      return new _v1(_v0, _v1);
    }, _v0.RTCPeerConnection.prototype = _v1.prototype, "generateCertificate" in _v1 && Object.defineProperty(_v0.RTCPeerConnection, "generateCertificate", {
      get: () => _v1.generateCertificate
    });
  }, "shimRemoteStreamsAPI", 0, function (_v0) {
    if ("object" == typeof _v0 && _v0.RTCPeerConnection && ("getRemoteStreams" in _v0.RTCPeerConnection.prototype || (_v0.RTCPeerConnection.prototype.getRemoteStreams = function () {
      return this._remoteStreams ? this._remoteStreams : [];
    }), !("onaddstream" in _v0.RTCPeerConnection.prototype))) {
      Object.defineProperty(_v0.RTCPeerConnection.prototype, "onaddstream", {
        get() {
          return this._onaddstream;
        },
        set(_v0) {
          this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = _v0), this.addEventListener("track", this._onaddstreampoly = _v0 => {
            _v0.streams.forEach(_v0 => {
              if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(_v0)) return;
              this._remoteStreams.push(_v0);
              let _v1 = new Event("addstream");
              _v1.stream = _v0, this.dispatchEvent(_v1);
            });
          });
        }
      });
      let _v0 = _v0.RTCPeerConnection.prototype.setRemoteDescription;
      _v0.RTCPeerConnection.prototype.setRemoteDescription = function () {
        let _v0 = this;
        return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function (_v0) {
          _v0.streams.forEach(_v0 => {
            if (_v0._remoteStreams || (_v0._remoteStreams = []), _v0._remoteStreams.indexOf(_v0) >= 0) return;
            _v0._remoteStreams.push(_v0);
            let _v1 = new Event("addstream");
            _v1.stream = _v0, _v0.dispatchEvent(_v1);
          });
        }), _v0.apply(_v0, arguments);
      };
    }
  }, "shimTrackEventTransceiver", 0, function (_v0) {
    "object" == typeof _v0 && _v0.RTCTrackEvent && "receiver" in _v0.RTCTrackEvent.prototype && !("transceiver" in _v0.RTCTrackEvent.prototype) && Object.defineProperty(_v0.RTCTrackEvent.prototype, "transceiver", {
      get() {
        return {
          receiver: this.receiver
        };
      }
    });
  }], 0);
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  function _v34(_v0) {
    if (!_v0.RTCIceCandidate || _v0.RTCIceCandidate && "foundation" in _v0.RTCIceCandidate.prototype) return;
    let _v1 = _v0.RTCIceCandidate;
    _v0.RTCIceCandidate = function (_v0) {
      if ("object" == typeof _v0 && _v0.candidate && 0 === _v0.candidate.indexOf("a=") && ((_v0 = JSON.parse(JSON.stringify(_v0))).candidate = _v0.candidate.substring(2)), _v0.candidate && _v0.candidate.length) {
        let _v0 = new _v1(_v0),
          _v1 = _v33.default.parseCandidate(_v0.candidate);
        for (let _v0 in _v1) _v0 in _v0 || Object.defineProperty(_v0, _v0, {
          value: _v1[_v0]
        });
        return _v0.toJSON = function () {
          return {
            candidate: _v0.candidate,
            sdpMid: _v0.sdpMid,
            sdpMLineIndex: _v0.sdpMLineIndex,
            usernameFragment: _v0.usernameFragment
          };
        }, _v0;
      }
      return new _v1(_v0);
    }, _v0.RTCIceCandidate.prototype = _v1.prototype, _v4(_v0, "icecandidate", _v0 => (_v0.candidate && Object.defineProperty(_v0, "candidate", {
      value: new _v0.RTCIceCandidate(_v0.candidate),
      writable: "false"
    }), _v0));
  }
  function _v35(_v0) {
    !_v0.RTCIceCandidate || _v0.RTCIceCandidate && "relayProtocol" in _v0.RTCIceCandidate.prototype || _v4(_v0, "icecandidate", _v0 => {
      if (_v0.candidate) {
        let _v0 = _v33.default.parseCandidate(_v0.candidate.candidate);
        "relay" === _v0.type && (_v0.candidate.relayProtocol = {
          0: "tls",
          1: "tcp",
          2: "udp"
        }[_v0.priority >> 24]);
      }
      return _v0;
    });
  }
  function _v36(_v0, _v1) {
    if (!_v0.RTCPeerConnection) return;
    "sctp" in _v0.RTCPeerConnection.prototype || Object.defineProperty(_v0.RTCPeerConnection.prototype, "sctp", {
      get() {
        return void 0 === this._sctp ? null : this._sctp;
      }
    });
    let _v2 = function (_v0) {
        if (!_v0 || !_v0.sdp) return !1;
        let _v1 = _v33.default.splitSections(_v0.sdp);
        return _v1.shift(), _v1.some(_v0 => {
          let _v1 = _v33.default.parseMLine(_v0);
          return _v1 && "application" === _v1.kind && -1 !== _v1.protocol.indexOf("SCTP");
        });
      },
      _v3 = function (_v0) {
        let _v1 = _v0.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
        if (null === _v1 || _v1.length < 2) return -1;
        let _v2 = parseInt(_v1[1], 10);
        return _v2 != _v2 ? -1 : _v2;
      },
      _v4 = function (_v0) {
        let _v1 = 0;
        return "firefox" === _v1.browser && (_v1 = _v1.version < 57 ? -1 === _v0 ? 0 : 0 : _v1.version < 60 ? 57 === _v1.version ? 0 : 0 : 0), _v1;
      },
      _v5 = function (_v0, _v1) {
        let _v2 = 0;
        "firefox" === _v1.browser && 57 === _v1.version && (_v2 = 0);
        let _v3 = _v33.default.matchPrefix(_v0.sdp, "a=max-message-size:");
        return _v3.length > 0 ? _v2 = parseInt(_v3[0].substring(19), 10) : "firefox" === _v1.browser && -1 !== _v1 && (_v2 = 0), _v2;
      },
      _v6 = _v0.RTCPeerConnection.prototype.setRemoteDescription;
    _v0.RTCPeerConnection.prototype.setRemoteDescription = function () {
      if (this._sctp = null, "chrome" === _v1.browser && _v1.version >= 76) {
        let {
          sdpSemantics: _v0
        } = this.getConfiguration();
        "plan-b" === _v0 && Object.defineProperty(this, "sctp", {
          get() {
            return void 0 === this._sctp ? null : this._sctp;
          },
          enumerable: !0,
          configurable: !0
        });
      }
      if (_v2(arguments[0])) {
        let _v0,
          _v1 = _v3(arguments[0]),
          _v2 = _v4(_v1),
          _v3 = _v5(arguments[0], _v1);
        _v0 = 0 === _v2 && 0 === _v3 ? 1 / 0 : 0 === _v2 || 0 === _v3 ? Math.max(_v2, _v3) : Math.min(_v2, _v3);
        let _v4 = {};
        Object.defineProperty(_v4, "maxMessageSize", {
          get: () => _v0
        }), this._sctp = _v4;
      }
      return _v6.apply(this, arguments);
    };
  }
  function _v37(_v0) {
    if (!(_v0.RTCPeerConnection && "createDataChannel" in _v0.RTCPeerConnection.prototype)) return;
    function _v1(_v0, _v1) {
      let _v2 = _v0.send;
      _v0.send = function () {
        let _v0 = arguments[0],
          _v1 = _v0.length || _v0.size || _v0.byteLength;
        if ("open" === _v0.readyState && _v1.sctp && _v1 > _v1.sctp.maxMessageSize) throw TypeError("Message too large (can send a maximum of " + _v1.sctp.maxMessageSize + " bytes)");
        return _v2.apply(_v0, arguments);
      };
    }
    let _v2 = _v0.RTCPeerConnection.prototype.createDataChannel;
    _v0.RTCPeerConnection.prototype.createDataChannel = function () {
      let _v0 = _v2.apply(this, arguments);
      return _v1(_v0, this), _v0;
    }, _v4(_v0, "datachannel", _v0 => (_v1(_v0.channel, _v0.target), _v0));
  }
  function _v38(_v0) {
    if (!_v0.RTCPeerConnection || "connectionState" in _v0.RTCPeerConnection.prototype) return;
    let _v1 = _v0.RTCPeerConnection.prototype;
    Object.defineProperty(_v1, "connectionState", {
      get() {
        return {
          completed: "connected",
          checking: "connecting"
        }[this.iceConnectionState] || this.iceConnectionState;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(_v1, "onconnectionstatechange", {
      get() {
        return this._onconnectionstatechange || null;
      },
      set(_v0) {
        this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), _v0 && this.addEventListener("connectionstatechange", this._onconnectionstatechange = _v0);
      },
      enumerable: !0,
      configurable: !0
    }), ["setLocalDescription", "setRemoteDescription"].forEach(_v0 => {
      let _v1 = _v1[_v0];
      _v1[_v0] = function () {
        return this._connectionstatechangepoly || (this._connectionstatechangepoly = _v0 => {
          let _v1 = _v0.target;
          if (_v1._lastConnectionState !== _v1.connectionState) {
            _v1._lastConnectionState = _v1.connectionState;
            let _v0 = new Event("connectionstatechange", _v0);
            _v1.dispatchEvent(_v0);
          }
          return _v0;
        }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), _v1.apply(this, arguments);
      };
    });
  }
  function _v39(_v0, _v1) {
    if (!_v0.RTCPeerConnection || "chrome" === _v1.browser && _v1.version >= 71 || "safari" === _v1.browser && _v1._safariVersion >= 13.1) return;
    let _v2 = _v0.RTCPeerConnection.prototype.setRemoteDescription;
    _v0.RTCPeerConnection.prototype.setRemoteDescription = function (_v0) {
      if (_v0 && _v0.sdp && -1 !== _v0.sdp.indexOf("\na=extmap-allow-mixed")) {
        let _v0 = _v0.sdp.split("\n").filter(_v0 => "a=extmap-allow-mixed" !== _v0.trim()).join("\n");
        _v0.RTCSessionDescription && _v0 instanceof _v0.RTCSessionDescription ? arguments[0] = new _v0.RTCSessionDescription({
          type: _v0.type,
          sdp: _v0
        }) : _v0.sdp = _v0;
      }
      return _v2.apply(this, arguments);
    };
  }
  function _v40(_v0, _v1) {
    if (!(_v0.RTCPeerConnection && _v0.RTCPeerConnection.prototype)) return;
    let _v2 = _v0.RTCPeerConnection.prototype.addIceCandidate;
    _v2 && 0 !== _v2.length && (_v0.RTCPeerConnection.prototype.addIceCandidate = function () {
      return arguments[0] ? ("chrome" === _v1.browser && _v1.version < 78 || "firefox" === _v1.browser && _v1.version < 68 || "safari" === _v1.browser) && arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : _v2.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
    });
  }
  function _v41(_v0, _v1) {
    if (!(_v0.RTCPeerConnection && _v0.RTCPeerConnection.prototype)) return;
    let _v2 = _v0.RTCPeerConnection.prototype.setLocalDescription;
    _v2 && 0 !== _v2.length && (_v0.RTCPeerConnection.prototype.setLocalDescription = function () {
      let _v0 = arguments[0] || {};
      if ("object" != typeof _v0 || _v0.type && _v0.sdp) return _v2.apply(this, arguments);
      if (!(_v0 = {
        type: _v0.type,
        sdp: _v0.sdp
      }).type) switch (this.signalingState) {
        case "stable":
        case "have-local-offer":
        case "have-remote-pranswer":
          _v0.type = "offer";
          break;
        default:
          _v0.type = "answer";
      }
      return _v0.sdp || "offer" !== _v0.type && "answer" !== _v0.type ? _v2.apply(this, [_v0]) : ("offer" === _v0.type ? this.createOffer : this.createAnswer).apply(this).then(_v0 => _v2.apply(this, [_v0]));
    });
  }
  _v0.s(["removeExtmapAllowMixed", 0, _v39, "shimAddIceCandidateNullOrEmpty", 0, _v40, "shimConnectionState", 0, _v38, "shimMaxMessageSize", 0, _v36, "shimParameterlessSetLocalDescription", 0, _v41, "shimRTCIceCandidate", 0, _v34, "shimRTCIceCandidateRelayProtocol", 0, _v35, "shimSendThrowTypeError", 0, _v37], 0);
  var _v42 = _v0.i(0);
  let _v43 = function ({
    window: _v0
  } = {}, _v1 = {
    shimChrome: !0,
    shimFirefox: !0,
    shimSafari: !0
  }) {
    let _v2 = function (_v0) {
        let _v1 = {
          browser: null,
          version: null
        };
        if (void 0 === _v0 || !_v0.navigator || !_v0.navigator.userAgent) return _v1.browser = "Not a browser.", _v1;
        let {
          navigator: _v2
        } = _v0;
        if (_v2.userAgentData && _v2.userAgentData.brands) {
          let _v0 = _v2.userAgentData.brands.find(_v0 => "Chromium" === _v0.brand);
          if (_v0) return {
            browser: "chrome",
            version: parseInt(_v0.version, 10)
          };
        }
        return _v2.mozGetUserMedia ? (_v1.browser = "firefox", _v1.version = parseInt(_v3(_v2.userAgent, /Firefox\/(\d+)\./, 1))) : _v2.webkitGetUserMedia || !1 === _v0.isSecureContext && _v0.webkitRTCPeerConnection ? (_v1.browser = "chrome", _v1.version = parseInt(_v3(_v2.userAgent, /Chrom(e|ium)\/(\d+)\./, 2))) : _v0.RTCPeerConnection && _v2.userAgent.match(/AppleWebKit\/(\d+)\./) ? (_v1.browser = "safari", _v1.version = parseInt(_v3(_v2.userAgent, /AppleWebKit\/(\d+)\./, 1)), _v1.supportsUnifiedPlan = _v0.RTCRtpTransceiver && "currentDirection" in _v0.RTCRtpTransceiver.prototype, _v1._safariVersion = _v3(_v2.userAgent, /Version\/(\d+(\.?\d+))/, 1)) : _v1.browser = "Not a supported browser.", _v1;
      }(_v0),
      _v3 = {
        browserDetails: _v2,
        commonShim: _v42,
        extractVersion: _v3,
        disableLog: _v5,
        disableWarnings: _v6,
        sdp: _v33
      };
    switch (_v2.browser) {
      case "chrome":
        if (!_v19 || !_v19.shimPeerConnection || !_v1.shimChrome) {
          _v7("Chrome shim is not included in this adapter release.");
          break;
        }
        if (null === _v2.version) {
          _v7("Chrome shim can not determine version, not shimming.");
          break;
        }
        _v7("adapter.js shimming chrome."), _v3.browserShim = _v19, _v40(_v0, _v2), _v41(_v0, _v2), _v19.shimGetUserMedia(_v0, _v2), _v19.shimMediaStream(_v0, _v2), _v19.shimPeerConnection(_v0, _v2), _v19.shimOnTrack(_v0, _v2), _v19.shimAddTrackRemoveTrack(_v0, _v2), _v19.shimGetSendersWithDtmf(_v0, _v2), _v19.shimSenderReceiverGetStats(_v0, _v2), _v19.fixNegotiationNeeded(_v0, _v2), _v34(_v0, _v2), _v35(_v0, _v2), _v38(_v0, _v2), _v36(_v0, _v2), _v37(_v0, _v2), _v39(_v0, _v2);
        break;
      case "firefox":
        if (!_v30 || !_v30.shimPeerConnection || !_v1.shimFirefox) {
          _v7("Firefox shim is not included in this adapter release.");
          break;
        }
        _v7("adapter.js shimming firefox."), _v3.browserShim = _v30, _v40(_v0, _v2), _v41(_v0, _v2), _v30.shimGetUserMedia(_v0, _v2), _v30.shimPeerConnection(_v0, _v2), _v30.shimOnTrack(_v0, _v2), _v30.shimRemoveStream(_v0, _v2), _v30.shimSenderGetStats(_v0, _v2), _v30.shimReceiverGetStats(_v0, _v2), _v30.shimRTCDataChannel(_v0, _v2), _v30.shimAddTransceiver(_v0, _v2), _v30.shimGetParameters(_v0, _v2), _v30.shimCreateOffer(_v0, _v2), _v30.shimCreateAnswer(_v0, _v2), _v34(_v0, _v2), _v38(_v0, _v2), _v36(_v0, _v2), _v37(_v0, _v2);
        break;
      case "safari":
        if (!_v32 || !_v1.shimSafari) {
          _v7("Safari shim is not included in this adapter release.");
          break;
        }
        _v7("adapter.js shimming safari."), _v3.browserShim = _v32, _v40(_v0, _v2), _v41(_v0, _v2), _v32.shimRTCIceServerUrls(_v0, _v2), _v32.shimCreateOfferLegacy(_v0, _v2), _v32.shimCallbacksAPI(_v0, _v2), _v32.shimLocalStreamsAPI(_v0, _v2), _v32.shimRemoteStreamsAPI(_v0, _v2), _v32.shimTrackEventTransceiver(_v0, _v2), _v32.shimGetUserMedia(_v0, _v2), _v32.shimAudioContext(_v0, _v2), _v34(_v0, _v2), _v35(_v0, _v2), _v36(_v0, _v2), _v37(_v0, _v2), _v39(_v0, _v2);
        break;
      default:
        _v7("Unsupported browser!");
    }
    return _v3;
  }({
    window: "u" < typeof window ? void 0 : window
  });
  _v0.s(["default", 0, _v43], 0);
}