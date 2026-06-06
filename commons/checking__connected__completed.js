{
  "use strict";

  var _v3,
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  function _v7(_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  }
  var _v8,
    _v9,
    _v10,
    _v11,
    _v12 = _v7(_v4),
    _v13 = _v7(_v6),
    _v14 = {
      GLOBAL_PREFIX: "L",
      IS_ENABLED: !1,
      IMPLEMENTATION: null,
      MODULES: {
        RTC: !0,
        SIGNALING: !0,
        SERVICE: !0
      }
    };
  (_v15 = _v8 || (_v8 = {})).NEW = "new", _v15.CHECKING = "checking", _v15.CONNECTED = "connected", _v15.COMPLETED = "completed", _v15.FAILED = "failed", _v15.DISCONNECTED = "disconnected", _v15.CLOSED = "closed", (_v16 = _v9 || (_v9 = {})).NEW = "new", _v16.GATHERING = "gathering", _v16.COMPLETE = "complete", _v16.CLOSED = "closed", (_v17 = _v10 || (_v10 = {})).STABLE = "stable", _v17.HAVE_LOCAL_OFFER = "have-local-offer", _v17.HAVE_REMOTE_OFFER = "have-remote-offer", _v17.HAVE_LOCAL_PRANSWER = "have-local-pranswer", _v17.HAVE_REMOTE_PRANSWER = "have-remote-pranswer", _v17.CLOSED = "closed", (_v18 = _v11 || (_v11 = {})).NEW = "new", _v18.CONNECTING = "connecting", _v18.CONNECTED = "connected", _v18.DISCONNECTED = "disconnected", _v18.FAILED = "failed", _v18.CLOSED = "closed";
  var _v15,
    _v16,
    _v17,
    _v18,
    _v19,
    _v20 = !1,
    _v21 = function () {
      function _v0(_v0, _v1) {
        this.enabled = !0, this.prefix = "[".concat(_v14.GLOBAL_PREFIX, "][").concat(_v0, "]"), void 0 !== _v1 && (this.enabled = _v1);
      }
      return _v0.prototype.debug = function () {
        for (var _v0 = [], _v1 = 0; _v1 < arguments.length; _v1++) _v0[_v1] = arguments[_v1];
        this.logAs("debug", _v0);
      }, _v0.prototype.warn = function () {
        for (var _v0 = [], _v1 = 0; _v1 < arguments.length; _v1++) _v0[_v1] = arguments[_v1];
        this.logAs("warn", _v0);
      }, _v0.prototype.error = function () {
        for (var _v0 = [], _v1 = 0; _v1 < arguments.length; _v1++) _v0[_v1] = arguments[_v1];
        this.logAs("error", _v0);
      }, _v0.prototype.info = function () {
        for (var _v0 = [], _v1 = 0; _v1 < arguments.length; _v1++) _v0[_v1] = arguments[_v1];
        this.logAs("info", _v0);
      }, _v0.prototype.group = function (_v0) {
        _v14.IS_ENABLED && this.enabled && window.console.group(_v0);
      }, _v0.prototype.closeGroup = function () {
        _v14.IS_ENABLED && this.enabled && window.console.groupEnd();
      }, _v0.prototype.logAs = function (_v0, _v1) {
        var _v2;
        if (_v14.IS_ENABLED && this.enabled) {
          var _v3 = new Date(),
            _v4 = _v3.getMilliseconds().toString().padStart(3, "0");
          (_v2 = window.console)[_v0].apply(_v2, _v5.__spreadArray(["%c".concat(_v3.toLocaleTimeString("en-GB"), ":").concat(_v4, " ").concat(this.prefix), _v0.PREFIX_STYLE], _v5.__read(_v1), !1));
        }
      }, _v0.PREFIX_STYLE = "color: #bada53", _v0;
    }();
  _v2.ECommandType = void 0, (_v19 = _v2.ECommandType || (_v2.ECommandType = {})).ANSWER = "answer", _v19.ICE_CANDIDATE = "icecandidate", _v19.CHAT_MESSAGE = "chat_message", _v19.INIT = "init", _v19.UPDATE = "update", _v19.REQUEST_NEW_OFFER = "request_new_offer", _v19.SHUTDOWN = "shutdown", _v19.PACKED = "_packed";
  var _v22,
    _v23 = {
      MODULE_DEBUG_INFO: {
        name: "module_debug_info",
        id: 9
      },
      MODULE_INFO: {
        name: "module_info",
        id: 1
      }
    };
  _v2.ERTCCommand = void 0, (_v22 = _v2.ERTCCommand || (_v2.ERTCCommand = {})).CLOSE = "Close", _v22.CURRENT_AUDIO_TRACK = "CurrentAudioTrack", _v22.DEBUG_INFO = "DebugInfo", _v22.DELAY_REQUEST = "DelayRequest", _v22.DELAY_RESPONSE = "DelayResponse", _v22.PING = "Ping", _v22.PONG = "Pong", _v22.PROGRAM_CHANGE = "ProgramChange", _v22.REQUEST_AUDIO_TRACK = "RequestAudioTrack", _v22.REQUEST_START_STREAMING = "RequestStartStreaming", _v22.REQUEST_STOP_STREAMING = "RequestStopStreaming", _v22.REQUEST_TRACKS_INFO = "RequestTracksInfo", _v22.START_DEBUG_INFO = "StartDebugInfo", _v22.STOP_DEBUG_INFO = "StopDebugInfo", _v22.TRACKS_INFO = "TracksInfo", _v22.VISIBILITY_CHANGED = "VisibilityChanged";
  var _v24,
    _v25,
    _v26,
    _v27 = "none";
  _v2.EClientMode = void 0, (_v25 = _v2.EClientMode || (_v2.EClientMode = {})).VIEWER = "viewer", _v25.BROADCASTER = "broadcaster", _v25.FORCED_BROADCASTER = "forcedBroadcaster", _v2.EConnectionType = void 0, (_v26 = _v2.EConnectionType || (_v2.EConnectionType = {})).OWNER = "owner", _v26.GUEST = "guest", _v26.STUDIO = "studio";
  var _v28,
    _v29,
    _v30,
    _v31 = ((_v24 = {})[_v2.EConnectionType.STUDIO] = "0", _v24[_v2.EConnectionType.GUEST] = "1", _v24[_v2.EConnectionType.OWNER] = "2", _v24);
  function _v32(_v0) {
    return void 0 === _v0 && (_v0 = 6), _v13.default.generateUUID().slice(0, _v0);
  }
  function _v33(_v0) {
    return _v31[_v0] + _v13.default.generateUUID().slice(1);
  }
  function _v34(_v0) {
    return _v0.map(function (_v0) {
      var _v1 = {
        urls: [_v0.url]
      };
      return _v0.username && _v0.credential && (_v1.username = _v0.username, _v1.credential = _v0.credential), _v1;
    });
  }
  function _v35(_v0, _v1) {
    return void 0 === _v1 && (_v1 = !0), new (_v14.IMPLEMENTATION || _v21)(_v0, _v1);
  }
  _v2.ESourceType = void 0, (_v28 = _v2.ESourceType || (_v2.ESourceType = {})).PROGRAM = "PROGRAM", _v28.GUEST = "GUEST", _v28.WEBCAM = "WEBCAM", _v28.SCREEN = "SCREEN", _v28.RTMP = "RTMP", _v2.ESourceId = void 0, (_v29 = _v2.ESourceId || (_v2.ESourceId = {})).PROGRAM = "program", _v29.WEBCAM_0 = "webcam_0", _v29.WEBCAM_1 = "webcam_1", _v29.WEBCAM_2 = "webcam_2", _v29.WEBCAM_3 = "webcam_3", _v29.WEBCAM_4 = "webcam_4", _v29.SCREEN_0 = "screen_0", _v29.SCREEN_1 = "screen_1", _v29.SCREEN_2 = "screen_2", _v2.ERTCConnectionState = void 0, (_v3 = _v2.ERTCConnectionState || (_v2.ERTCConnectionState = {})).NEW = "new", _v3.CONNECTING = "connecting", _v3.CONNECTED = "connected", _v3.DISCONNECTED = "disconnected", _v3.FAILED = "failed", _v3.CLOSED = "closed", _v2.ETransceiverDirection = void 0, (_v30 = _v2.ETransceiverDirection || (_v2.ETransceiverDirection = {})).INACTIVE = "inactive", _v30.RECV_ONLY = "recvonly", _v30.SEND_ONLY = "sendonly", _v30.SEND_RECV = "sendrecv", _v30.STOPPED = "stopped";
  var _v36 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
    _v37 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;
  function _v38() {
    return navigator.userAgent || navigator.vendor || window.opera;
  }
  function _v39(_v0) {
    return _v0.direction === _v2.ETransceiverDirection.STOPPED || _v0.direction === _v2.ETransceiverDirection.INACTIVE ? (_v0.direction = _v2.ETransceiverDirection.SEND_ONLY, !0) : _v0.direction === _v2.ETransceiverDirection.RECV_ONLY && (_v0.direction = _v2.ETransceiverDirection.SEND_RECV, !0);
  }
  var _v40 = function () {
      function _v0() {
        this.lastMessagesMap = {}, this.lastMessagesIndexesMap = {}, this.lastCommandsIndexesMap = {}, this.log = _v35("🌲ME");
      }
      return _v0.decodeB64Unicode = function (_v0) {
        for (var _v1 = atob(_v0), _v2 = 0, _v3 = 0, _v4 = 0, _v5 = 0, _v6 = ""; _v2 < _v1.length;) if ((_v3 = _v1.charCodeAt(_v2)) < 128) _v6 += String.fromCharCode(_v3), _v2++;else if (_v3 > 191 && _v3 < 224) _v6 += String.fromCharCode((31 & _v3) << 6 | 63 & (_v4 = _v1.charCodeAt(_v2 + 1))), _v2 += 2;else {
          var _v7 = (15 & _v3) << 18 | (63 & (_v4 = _v1.charCodeAt(_v2 + 1))) << 12 | (63 & (_v5 = _v1.charCodeAt(_v2 + 2))) << 6 | 63 & _v1.charCodeAt(_v2 + 3);
          _v7 > 0 && _v7 < 0 ? (_v6 += String.fromCodePoint(_v7), _v2 += 4) : (_v6 += String.fromCharCode((15 & _v3) << 12 | (63 & _v4) << 6 | 63 & _v5), _v2 += 3);
        }
        return _v6;
      }, _v0.prototype.decode = function (_v0, _v1) {
        var _v2 = _v1[0],
          _v3 = _v2 === _v0.B64_SEPARATOR_START;
        return _v2 === _v0.JSON_SEPARATOR_START ? this.decodeJSON(_v0, _v1) : _v3 ? this.decodeBase64(_v0, _v1) : this.decodeMessageParts(_v0, _v1);
      }, _v0.prototype.decodeBase64 = function (_v0, _v1) {
        var _v2 = _v1.substring(1, _v1.indexOf(_v0.B64_SEPARATOR_END)).split(_v0.B64_ARGS_SEPARATOR),
          _v3 = _v2.length > 3 && "1" === _v2[3],
          _v4 = parseInt(_v2[0], 10),
          _v5 = parseInt(_v2[1], 10),
          _v6 = parseInt(_v2[2], 10),
          _v7 = _v1.substring(_v1.indexOf(_v0.B64_SEPARATOR_END) + 1);
        if (this.lastMessagesIndexesMap[_v0.label] = _v5, this.lastMessagesMap[_v0.label] = (this.lastMessagesMap[_v0.label] || "") + _v3 ? _v0.decodeB64Unicode(_v7) : _v7, _v5 === _v6) {
          _v4 > 0 && (this.lastCommandsIndexesMap[_v0.label] = _v4);
          var _v8 = this.lastMessagesMap[_v0.label];
          return this.lastMessagesMap[_v0.label] = "", this.lastMessagesIndexesMap[_v0.label] = 0, this.decodeJSON(_v0, _v8);
        }
        return null;
      }, _v0.prototype.decodeMessageParts = function (_v0, _v1) {
        var _v2 = _v1.indexOf(_v0.JSON_SEPARATOR_START),
          _v3 = parseInt(_v1.substring(0, _v2), 10),
          _v4 = _v1.substring(_v2);
        return _v3 > 0 && (this.lastCommandsIndexesMap[_v0.label] = _v3), this.decodeJSON(_v0, _v4);
      }, _v0.prototype.decodeJSON = function (_v0, _v1) {
        try {
          return JSON.parse(_v1);
        } catch (_v0) {
          return this.log.error("Failed to parse message from studio:", _v0, _v1), null;
        }
      }, _v0.JSON_SEPARATOR_START = "{", _v0.B64_SEPARATOR_START = "[", _v0.B64_SEPARATOR_END = "]", _v0.B64_ARGS_SEPARATOR = "|", _v0;
    }(),
    _v41 = function (_v0) {
      function _v1() {
        var _v0 = _v0.apply(this, _v5.__spreadArray([], _v5.__read(arguments), !1)) || this;
        return _v0.localTracksDescriptors = [], _v0.mediaTransceivers = {}, _v0.mediaGroups = {}, _v0.currentConnectionMediaSources = [], _v0.currentConnectionMediaSourcesShouldUpdate = !1, _v0;
      }
      return _v5.__extends(_v1, _v0), _v1.prototype.start = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          return _v5.__generator(this, function (_v0) {
            return this.currentConnectionMediaSourcesShouldUpdate = !1, [2, _v0.prototype.start.call(this, _v0)];
          });
        });
      }, _v1.prototype.stop = function () {
        return this.currentConnectionMediaSourcesShouldUpdate = !1, this.mediaTransceivers = {}, _v0.prototype.stop.call(this);
      }, _v1.prototype.getLocalMediaTracks = function () {
        return _v5.__spreadArray([], _v5.__read(this.localTracksDescriptors), !1);
      }, _v1.prototype.hasMediaTracks = function () {
        return this.localTracksDescriptors.length > 0;
      }, _v1.prototype.setLocalMediaTracks = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          var _v0,
            _v1,
            _v2 = this;
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                return this.isStarted && this.webRtcPeer && this.webRtcPeer.connectionState !== _v2.ERTCConnectionState.FAILED ? (_v0 = this.webRtcPeer, _v1 = !1, this.log.info("🎞Setting media tracks:", _v0.length, _v0.id), this.log.info("🎞[1]Cleaning up senders"), [4, Promise.all(this.localTracksDescriptors.map(function (_v0) {
                  return _v5.__awaiter(_v2, void 0, void 0, function () {
                    var _v0, _v1, _v2;
                    return _v5.__generator(this, function (_v0) {
                      var _v1;
                      switch (_v0.label) {
                        case 0:
                          if (_v0 = this.mediaTransceivers[this.generateSenderName(_v0)], _v1 = -1 !== _v0.findIndex(function (_v0) {
                            return _v0.groupId === _v0.groupId && _v0.track.kind === _v0.track.kind;
                          }), !_v0 || !_v1 || !(_v1 = _v0.transceiver) || _v1.direction !== _v2.ETransceiverDirection.SEND_RECV && _v1.direction !== _v2.ETransceiverDirection.SEND_ONLY) return [3, 5];
                          _v0.label = 1;
                        case 1:
                          return _v0.trys.push([1, 3,, 4]), [4, _v0.transceiver.sender.replaceTrack(null)];
                        case 2:
                          return _v0.sent(), this.log.info("🎞[1]Nullified sender track for:", _v0.groupId, _v0.track), [3, 4];
                        case 3:
                          return _v2 = _v0.sent(), this.log.warn("🎞[1]Failed to nullify sender track:", _v2, _v0.id, _v0.connectionState), [3, 4];
                        case 4:
                          return this.removeFromMediaGroup(_v0), [3, 6];
                        case 5:
                          this.log.info("🎞[1]Descriptor has no sender, skipping:", _v0.groupId, _v0.track, _v1), _v0.label = 6;
                        case 6:
                          return [2];
                      }
                    });
                  });
                }))]) : (this.clearMediaGroups(), this.localTracksDescriptors = _v0, this.localTracksDescriptors.forEach(function (_v0) {
                  return _v2.mergeMediaGroup(_v0);
                }), [2, this.log.info("🔩Setting RTC tracks descriptors in local mode", this.webRtcPeer ? this.webRtcPeer.connectionState : "offline", this.webRtcPeer ? this.webRtcPeer.id : null)]);
              case 1:
                return _v0.sent(), this.log.info("🎞[1]Cleaned up senders"), this.log.info("🎞[2]Replacing with next descriptors"), [4, Promise.all(_v0.map(function (_v0) {
                  return _v5.__awaiter(_v2, void 0, void 0, function () {
                    var _v0, _v1, _v2, _v3, _v4;
                    return _v5.__generator(this, function (_v0) {
                      switch (_v0.label) {
                        case 0:
                          if (_v0 = this.generateSenderName(_v0), !(_v1 = this.mediaTransceivers[_v0])) return [3, 5];
                          _v2 = _v1.transceiver, _v0.label = 1;
                        case 1:
                          return _v0.trys.push([1, 3,, 4]), _v39(_v2) && (_v1 = !0, this.log.info("🎞🧯[2]Transceiver was not sending, updated it as:", _v2.direction, _v2.mid)), this.mergeMediaGroup(_v0), [4, _v2.sender.replaceTrack(_v0.track)];
                        case 2:
                          return _v0.sent(), this.log.info("🎞[2]Replaced track for sender:", _v0.groupId, _v0.track), [3, 4];
                        case 3:
                          return _v3 = _v0.sent(), this.log.warn("🎞[2]Failed to replace track:", _v3, _v0.id, _v0.connectionState), [3, 4];
                        case 4:
                          return [3, 8];
                        case 5:
                          return _v0.trys.push([5, 7,, 8]), _v1 = !0, [4, this.createNewSenderForTrack(_v0, _v0)];
                        case 6:
                          return _v0.sent(), this.log.info("🎞[2]Created new sender for track", _v0.groupId, _v0.track), [3, 8];
                        case 7:
                          return _v4 = _v0.sent(), this.log.warn("🎞[2]Failed to create new sender:", _v0.groupId, _v0.track, _v4), [3, 8];
                        case 8:
                          return [2];
                      }
                    });
                  });
                }))];
              case 2:
                return _v0.sent(), this.localTracksDescriptors = _v0, this.log.info("🎞[2]Replaced tracks with new descriptors"), _v1 && this.log.info("🎞Seems like negotiation is needed after tracks application process"), this.saveConnectionSourcesInfo(), this.onSendConnectionSourcesInfo(), this.log.info("🎞Tracks were replaced in exchange mode"), [2];
            }
          });
        });
      }, _v1.prototype.addMediaTrack = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          var _v0, _v1, _v2, _v3, _v4, _v5;
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                if (!this.isStarted || !this.webRtcPeer) return this.localTracksDescriptors.push(_v0), this.mergeMediaGroup(_v0), this.log.info("🎞Added media track in offline mode"), [2];
                if (this.log.info("🎞Adding media track:", _v0.groupId, _v0.type), _v0 = !1, _v1 = this.webRtcPeer, !(_v2 = this.mediaTransceivers[this.generateSenderName(_v0)])) return [3, 6];
                _v3 = _v2.transceiver, _v4 = this.localTracksDescriptors.find(function (_v0) {
                  return _v0.groupId === _v0.groupId && _v0.track.kind === _v0.track.kind;
                }), _v39(_v2.transceiver) && (_v0 = !0, this.log.info("🎞🧯Transceiver was not sending, updated it as:", _v3.direction, _v3.mid)), _v0.label = 1;
              case 1:
                return _v0.trys.push([1, 3,, 5]), [4, _v2.transceiver.sender.replaceTrack(_v0.track)];
              case 2:
              case 4:
                return _v0.sent(), [3, 5];
              case 3:
                return _v5 = _v0.sent(), _v0 = !0, this.log.warn("🎞Backup: trying to add track instead of replacing. Cause:", _v5), [4, this.createNewSenderForTrack(_v1, _v0)];
              case 5:
                return _v4 ? _v4.track = _v0.track : this.localTracksDescriptors.push(_v0), [3, 8];
              case 6:
                return _v0 = !0, this.localTracksDescriptors.push(_v0), [4, this.createNewSenderForTrack(_v1, _v0)];
              case 7:
                _v0.sent(), _v0.label = 8;
              case 8:
                return _v0 && this.log.info("🎞Should renegotiate after track addition"), this.saveConnectionSourcesInfo(), this.onSendConnectionSourcesInfo(), [2];
            }
          });
        });
      }, _v1.prototype.removeMediaTrack = function (_v0) {
        this.log.info("🎞Removing media track:", _v0.type, _v0.groupId), this.removeFromMediaGroup(_v0);
        var _v1 = this.localTracksDescriptors.filter(function (_v0) {
          return _v0.track !== _v0.track;
        });
        if (this.log.info("🎞Tracks left:", _v1.length, _v1), !this.isStarted || !this.webRtcPeer) return this.localTracksDescriptors = _v1, this.log.info("🎞Removed track in offline mode.");
        var _v2 = this.mediaTransceivers[this.generateSenderName(_v0)];
        if (!_v2) throw Error("🎞No existent sender for track removal. Something unexpected happened.");
        _v2.transceiver.sender.replaceTrack(null), this.localTracksDescriptors = _v1, this.saveConnectionSourcesInfo(), this.onSendConnectionSourcesInfo();
      }, _v1.prototype.applyMedia = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          var _v0 = this;
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                return this.log.info("🎞Applying media tracks:", this.localTracksDescriptors.length), this.localTracksDescriptors.length ? [4, Promise.all(this.localTracksDescriptors.map(function (_v0) {
                  return _v5.__awaiter(_v0, void 0, void 0, function () {
                    var _v0, _v1, _v2, _v3;
                    return _v5.__generator(this, function (_v0) {
                      switch (_v0.label) {
                        case 0:
                          _v0 = this.generateSenderName(_v0), _v1 = this.mediaTransceivers[_v0], _v0.label = 1;
                        case 1:
                          return _v0.trys.push([1, 6,, 7]), _v1 ? (_v39(_v2 = _v1.transceiver) && this.log.info("🎞🧯Transceiver was not sending, updated it as:", _v2.direction, _v2.mid), this.log.info("🎞Replacing sender on media apply:", _v0.name, _v0.groupId, _v0.track), [4, _v2.sender.replaceTrack(_v0.track)]) : [3, 3];
                        case 2:
                          return _v0.sent(), [3, 5];
                        case 3:
                          return [4, this.createNewSenderForTrack(_v0, _v0)];
                        case 4:
                          _v0.sent(), _v0.label = 5;
                        case 5:
                          return [3, 7];
                        case 6:
                          throw _v3 = _v0.sent(), this.log.error("🎞Media apply failed when starting peer, investigate:", _v0, _v1, _v3), _v3;
                        case 7:
                          return [2];
                      }
                    });
                  });
                }))] : [3, 2];
              case 1:
                _v0.sent(), _v0.label = 2;
              case 2:
                return this.log.info("🎞Applied media tracks:", this.localTracksDescriptors.length), [2];
            }
          });
        });
      }, _v1.prototype.onRTCMessageReceived = function (_v0) {
        switch (_v0.prototype.onRTCMessageReceived.call(this, _v0), _v0.n) {
          case _v2.ERTCCommand.TRACKS_INFO:
            this.unpackTracksInfo(_v0.sources);
            break;
          case _v2.ERTCCommand.REQUEST_TRACKS_INFO:
            this.onSendConnectionSourcesInfo();
        }
      }, _v1.prototype.saveConnectionSourcesInfo = function () {
        if (!this.webRtcPeer) throw Error("🎞Cannot generate tracks info. WebRTC peer is not present.");
        var _v0,
          _v1,
          _v2 = this.webRtcPeer.getTransceivers(),
          _v3 = [];
        this.log.info("🎞Generating map for descriptors+transceivers:", this.localTracksDescriptors, _v2);
        var _v4 = function (_v0) {
            var _v1 = _v5.generateSenderName(_v0),
              _v2 = _v3.find(function (_v0) {
                return _v0.id === _v0.groupId;
              }),
              _v3 = _v5.mediaTransceivers[_v1],
              _v4 = _v3 && _v3.transceiver.mid || "new";
            if ("new" === _v4 && _v5.log.warn("🎞Requesting new transceiver with NEW mid:", _v0, _v3.transceiver), _v2) {
              if ("video" === _v0.track.kind) _v2.videoTrackMid = _v4;else {
                if ("audio" !== _v0.track.kind) throw Error("Something gone wrong: bad descriptor was provided with corrupted track instance.");
                _v2.audioTrackMid = _v4;
              }
            } else _v3.push({
              audioTrackMid: "audio" === _v0.track.kind ? _v4 : _v27,
              id: _v0.groupId,
              name: _v0.name,
              type: _v0.type,
              videoTrackMid: "video" === _v0.track.kind ? _v4 : _v27
            });
          },
          _v5 = this;
        try {
          for (var _v6 = _v5.__values(this.localTracksDescriptors), _v7 = _v6.next(); !_v7.done; _v7 = _v6.next()) _v4(_v7.value);
        } catch (_v0) {
          _v0 = {
            error: _v0
          };
        } finally {
          try {
            _v7 && !_v7.done && (_v1 = _v6.return) && _v1.call(_v6);
          } finally {
            if (_v0) throw _v0.error;
          }
        }
        this.log.info("🎞Cached source info:", _v3), this.currentConnectionMediaSources = _v3;
      }, _v1.prototype.onSendConnectionSourcesInfo = function () {
        if (!this.webRtcPeer) throw Error("Cannot send cached tracks info. WebRTC peer is not present.");
        var _v0 = this.getDataChannelState(_v23.MODULE_INFO);
        if (this.log.info("🎞Sending cached connection tracks info:", this.currentConnectionMediaSources), this.currentConnectionMediaSourcesShouldUpdate = !0, "open" !== _v0) return this.log.warn("🎞Datachannel was disconnected or closed, but we tried to generate own map. Waiting for connection.");
        try {
          this.sendDataChannelMessage(_v23.MODULE_INFO, {
            n: _v2.ERTCCommand.TRACKS_INFO,
            sources: this.currentConnectionMediaSources
          }), this.currentConnectionMediaSourcesShouldUpdate = !1;
        } catch (_v0) {
          this.log.warn("🎞Failed to send tracks map info, leaving it as pending operation till channels are open:", _v0);
        }
      }, _v1.prototype.unpackTracksInfo = function (_v0) {
        if (!this.webRtcPeer) throw Error("Unexpected error. WebRTC peer was removed before tracks info unpacking. Started: ".concat(this.isStarted, "."));
        this.log.info("🎞Unpacking remote tracks array:", _v0);
        var _v1,
          _v2,
          _v3 = !1,
          _v4 = this.webRtcPeer.getTransceivers(),
          _v5 = _v0.filter(function (_v0) {
            return _v0.videoTrackMid !== _v27;
          }).length,
          _v6 = _v0.filter(function (_v0) {
            return _v0.audioTrackMid !== _v27;
          }).length,
          _v7 = this.webRtcPeer.getTransceivers().filter(function (_v0) {
            return "video" === _v0.receiver.track.kind && ("recvonly" === _v0.direction || "sendrecv" === _v0.direction);
          }).length,
          _v8 = this.webRtcPeer.getTransceivers().filter(function (_v0) {
            return "audio" === _v0.receiver.track.kind && ("recvonly" === _v0.direction || "sendrecv" === _v0.direction);
          }).length;
        if (_v5 > _v7) {
          this.log.warn("🎞Need more video transceivers. Creating new ones."), _v3 = !0;
          for (var _v9 = 0; _v9 < _v5 - _v7; _v9++) this.webRtcPeer.addTransceiver("video", {
            direction: "sendrecv"
          });
        }
        if (_v6 > _v8) {
          this.log.warn("🎞Need more audio transceivers. Creating new ones."), _v3 = !0;
          for (var _v10 = 0; _v10 < _v6 - _v8; _v10++) this.webRtcPeer.addTransceiver("audio", {
            direction: "sendrecv"
          });
        }
        if (_v3) this.log.warn("🎞Should renegotiate after transceivers sync.");else {
          var _v11 = {},
            _v12 = function (_v0, _v1, _v2, _v3, _v4) {
              if (_v0 === _v27 && _v4 === _v27) return _v13.log.warn("🎞Received media info with empty mid pair:", _v1, _v3), "continue";
              var _v5 = {
                type: _v1
              };
              _v4 !== _v27 && (_v5.video = {
                groupId: _v3,
                name: _v2,
                track: _v4.find(function (_v0) {
                  return _v0.mid === _v4;
                }).receiver.track,
                type: _v1
              }), _v0 !== _v27 && (_v5.audio = {
                groupId: _v3,
                name: _v2,
                track: _v4.find(function (_v0) {
                  return _v0.mid === _v0;
                }).receiver.track,
                type: _v1
              }), _v11[_v3] = _v5;
            },
            _v13 = this;
          try {
            for (var _v14 = _v5.__values(_v0), _v15 = _v14.next(); !_v15.done; _v15 = _v14.next()) {
              var _v16 = _v15.value;
              _v12(_v16.audioTrackMid, _v16.type, _v16.name, _v16.id, _v16.videoTrackMid);
            }
          } catch (_v0) {
            _v1 = {
              error: _v0
            };
          } finally {
            try {
              _v15 && !_v15.done && (_v2 = _v14.return) && _v2.call(_v14);
            } finally {
              if (_v1) throw _v1.error;
            }
          }
          this.onRemoteTracksReceived(_v11);
        }
      }, _v1.prototype.generateSenderName = function (_v0) {
        return _v0.groupId + "_" + _v0.track.kind;
      }, _v1.prototype.mergeMediaGroup = function (_v0) {
        var _v1 = this.mediaGroups[_v0.groupId] || new MediaStream();
        return _v1.getTracks().forEach(function (_v0) {
          return _v0.kind === _v0.track.kind ? _v1.removeTrack(_v0) : void 0;
        }), _v1.addTrack(_v0.track), this.mediaGroups[_v0.groupId] = _v1, _v1;
      }, _v1.prototype.removeFromMediaGroup = function (_v0) {
        var _v1 = this.mediaGroups[_v0.groupId];
        _v1 && _v1.removeTrack(_v0.track);
      }, _v1.prototype.clearMediaGroup = function (_v0) {
        var _v1 = this.mediaGroups[_v0.groupId];
        _v1 && _v1.getTracks().forEach(function (_v0) {
          _v1.removeTrack(_v0);
        });
      }, _v1.prototype.clearMediaGroups = function () {
        var _v0,
          _v1,
          _v2 = function (_v0) {
            _v0.getTracks().forEach(function (_v0) {
              return _v0.removeTrack(_v0);
            });
          };
        try {
          for (var _v3 = _v5.__values(Object.values(this.mediaGroups)), _v4 = _v3.next(); !_v4.done; _v4 = _v3.next()) _v2(_v4.value);
        } catch (_v0) {
          _v0 = {
            error: _v0
          };
        } finally {
          try {
            _v4 && !_v4.done && (_v1 = _v3.return) && _v1.call(_v3);
          } finally {
            if (_v0) throw _v0.error;
          }
        }
      }, _v1.prototype.onRTCModuleInfoChannelConnected = function () {
        this.currentConnectionMediaSourcesShouldUpdate && (this.log.info("🎞Module info channel connected, sending tracks map as requested before"), this.onSendConnectionSourcesInfo());
      }, _v1.prototype.configureSender = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          return _v5.__generator(this, function (_v0) {
            return [2, _v0];
          });
        });
      }, _v1.prototype.createNewSenderForTrack = function (_v0, _v1) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          var _v0, _v1, _v2;
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                return _v0 = this.generateSenderName(_v1), this.log.info("🎞Creating sender:", _v0), [4, this.configureSender(_v0.addTrack(_v1.track, this.mergeMediaGroup(_v1)))];
              case 1:
                var _v1;
                return _v1 = _v0.sent(), _v2 = {
                  trackDescriptor: _v1,
                  transceiver: (_v1 = _v0.getTransceivers(), _v1.find(function (_v0) {
                    return _v0.sender === _v1;
                  }))
                }, this.mediaTransceivers[_v0] = _v2, [2, _v2];
            }
          });
        });
      }, _v1;
    }(function (_v0) {
      function _v1() {
        var _v0 = _v0.apply(this, _v5.__spreadArray([], _v5.__read(arguments), !1)) || this;
        return _v0.dataChannels = {}, _v0.messageEncoder = new _v40(), _v0;
      }
      return _v5.__extends(_v1, _v0), _v1.prototype.openDataChannel = function (_v0, _v1, _v2) {
        var _v3 = this;
        this.log.info("📮Creating data channel:", _v1.id, _v1.name);
        var _v4 = _v0.createDataChannel(_v1.name, _v5.__assign({
          id: _v1.id
        }, _v2));
        this.dataChannels[_v1.name] = _v4, _v4.onmessage = function (_v0) {
          _v3.webRtcPeer === _v0 ? _v3.onRTCDataChannelMessage(_v4, _v0) : _v3.log.warn("📮Ignored data channel message event from non-current peer.");
        }, _v4.onerror = function (_v0) {
          _v3.webRtcPeer === _v0 ? (_v3.log.error("📮Data channel error:", _v1.id, _v1.name, _v0), _v3.onDataChannelError(_v4, _v0)) : _v3.log.warn("📮Ignored data channel error event from non-current peer.");
        }, _v4.onopen = function (_v0) {
          _v3.webRtcPeer === _v0 ? (_v3.log.info("📮Data channel opened:", _v1.id, _v1.name), _v1.id === _v23.MODULE_INFO.id && _v3.onRTCModuleInfoChannelConnected(_v4, _v0), _v3.onDataChannelOpened(_v4, _v0)) : _v3.webRtcPeer === _v0 && _v3.log.warn("📮Ignored data channel open event from non-current peer.");
        }, _v4.onclose = function (_v0) {
          _v3.log.info("📮Data channel closed:", _v1.id, _v1.name, _v0), _v3.onDataChannelClosed(_v4, _v0);
        };
      }, _v1.prototype.closeDataChannel = function (_v0) {
        this.log.info("📮Closing data channel:", _v0);
        var _v1 = this.dataChannels[_v0.name];
        if (!_v1) throw Error("Channel was not found.");
        _v1.onopen = null, _v1.onmessage = null, _v1.onerror = null, delete this.dataChannels[_v0.name], _v1.close();
      }, _v1.prototype.sendDataChannelMessage = function (_v0, _v1) {
        var _v2 = this.dataChannels[_v0.name];
        if (!_v2) throw Error("Channel was not found.");
        _v2.send(JSON.stringify(_v1));
      }, _v1.prototype.getCreatedDataChannels = function () {
        return this.webRtcPeer ? Object.keys(this.dataChannels) : [];
      }, _v1.prototype.getDataChannelState = function (_v0) {
        var _v1 = this.dataChannels[_v0.name] || null;
        return _v1 ? _v1.readyState : null;
      }, _v1.prototype.applyChannels = function (_v0) {
        var _v1 = this,
          _v2 = this.webRtcChannelsList;
        this.log.info("📮Applying data channels:", _v2.length), _v2.forEach(function (_v0) {
          return _v1.openDataChannel(_v0, _v0, {
            negotiated: !0
          });
        });
      }, _v1.prototype.closeChannels = function () {
        var _v0 = this,
          _v1 = Object.keys(this.dataChannels);
        this.log.info("📮Closing data channels:", _v1.length), _v1.forEach(function (_v0) {
          return _v0.closeDataChannel({
            name: _v0
          });
        });
      }, _v1.prototype.onRTCDataChannelMessage = function (_v0, _v1) {
        var _v2 = this.messageEncoder.decode(_v0, _v1.data);
        _v2 && (this.onRTCMessageReceived(_v2), this.onDataChannelMessage(_v0, _v2));
      }, _v1.prototype.onRTCMessageReceived = function (_v0) {
        _v0.n === _v2.ERTCCommand.PING && this.sendDataChannelMessage(_v23.MODULE_INFO, {
          n: _v2.ERTCCommand.PONG
        }), _v0.n === _v2.ERTCCommand.CLOSE && (this.log.info("Remote studio application closes connection"), this.onRemoteConnectionClose());
      }, _v1;
    }(function (_v0) {
      function _v1() {
        var _v0 = _v0.apply(this, _v5.__spreadArray([], _v5.__read(arguments), !1)) || this;
        return _v0.webRtcPeer = null, _v0.webRtcOfferConfiguration = null, _v0.webRtcChannelsList = [], _v0.webRtcPeerConnectionState = void 0, _v0.isStarted = !1, _v0.isNegotiating = !1, _v0;
      }
      return _v5.__extends(_v1, _v0), _v1.prototype.start = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          var _v0,
            _v1,
            _v2,
            _v3,
            _v4,
            _v5,
            _v6,
            _v7 = this;
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                return this.webRtcPeer && this.stop(), _v0 = _v0.dataChannels, _v1 = _v0.offerOptions, _v2 = _v0.options, _v3 = _v0.sdp, this.log.info("🍀1(I): Got remote sdp init"), this.isNegotiating = !0, (_v4 = new RTCPeerConnection(_v2)).id = _v32(), this.emitConnectionStateChange(_v2.ERTCConnectionState.NEW), this.webRtcPeer = _v4, this.webRtcOfferConfiguration = _v1, this.webRtcChannelsList = _v0, _v4.onicegatheringstatechange = function (_v0) {
                  return _v7.onRTCConnectionIceGatheringStateChange(_v0, _v4);
                }, _v4.onicecandidate = function (_v0) {
                  return _v7.onRTCICECandidateReceived(_v0, _v4);
                }, _v4.onnegotiationneeded = function (_v0) {
                  return _v7.onRTCNegotiationNeeded(_v4);
                }, _v4.onconnectionstatechange = function (_v0) {
                  return _v7.onRTCConnectionStateChange(_v0, _v4);
                }, _v4.onsignalingstatechange = function (_v0) {
                  return _v7.onRTCSignalingConnectionStateChange(_v0, _v4);
                }, _v4.oniceconnectionstatechange = function (_v0) {
                  return _v7.onRTCIceConnectionStateChange(_v0, _v4);
                }, _v4.ontrack = function (_v0) {
                  var _v1 = _v0.track,
                    _v2 = _v0.transceiver,
                    _v3 = _v0.streams;
                  _v7.log.info("🎙Remote sdp track detected: ".concat(_v1.kind, ", ").concat(_v1.id.slice(0, 8), "-*,"), "".concat(_v3.map(function (_v0) {
                    return _v0.id.slice(0, 8) + "-*";
                  }).join("&"), ", m").concat(_v2.mid, ".")), _v1.addEventListener("ended", function () {
                    return _v7.log.info("🎙Remote track ended:", _v1.kind, _v1.id);
                  }), _v1.addEventListener("mute", function () {
                    return _v7.log.info("🎙Remote track muted:", _v1.kind, _v1.id);
                  }), _v1.addEventListener("unmute", function () {
                    return _v7.log.info("🎙Remote track un-muted:", _v1.kind, _v1.id);
                  });
                }, this.log.info("🧩Initialized peer connection instance:", _v4.id), this.applyChannels(_v4), [4, this.applyMedia(_v4)];
              case 1:
                return _v0.sent(), this.isStarted = !0, this.log.info("🧩Applying remote SDP. Signaling state:", _v4.signalingState), [4, _v4.setRemoteDescription({
                  type: "offer",
                  sdp: _v3
                })];
              case 2:
                return _v0.sent(), this.log.info("🧩Generating local SDP. Signaling state:", _v4.signalingState), _v6 = this.onLocalSDPGenerated, [4, _v4.createAnswer(_v1)];
              case 3:
                return _v5 = _v6.apply(this, [_v0.sent()]), [4, _v4.setLocalDescription(_v5)];
              case 4:
                return _v0.sent(), this.saveConnectionSourcesInfo(), this.log.info("🍀2(I): Applied exchange. Returning answer. Signaling state:", _v4.signalingState), this.onGeneratedSDPAnswer(_v5.sdp, !_v0.isMediaRestricted, this.hasMediaTracks()), this.isNegotiating = !1, [2];
            }
          });
        });
      }, _v1.prototype.setRemoteSDPOffer = function (_v0, _v1) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          var _v0, _v1, _v2, _v3;
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                if (this.log.info("🍀1(U) Got remote SDP update"), _v0 = this.webRtcPeer, _v1 = this.webRtcOfferConfiguration, !_v0 || !_v1) throw Error("Cannot handle remote SDP update request when webRtc peer does not exist.");
                return this.isNegotiating = !0, this.log.info("🧩Applying remote SDP. Signaling state:", _v0.signalingState), [4, _v0.setRemoteDescription({
                  sdp: _v0,
                  type: "offer"
                })];
              case 1:
                return _v0.sent(), this.log.info("🧩Generating local SDP. Signaling state:", _v0.signalingState), _v3 = this.onLocalSDPGenerated, [4, _v0.createAnswer(_v1)];
              case 2:
                return _v2 = _v3.apply(this, [_v0.sent()]), [4, _v0.setLocalDescription(_v2)];
              case 3:
                return _v0.sent(), this.saveConnectionSourcesInfo(), this.isNegotiating = !1, this.log.info("🍀2(U) Exchange process completed, sending SDP answer:", _v0.id), this.onGeneratedSDPAnswer(_v2.sdp, !_v1, this.hasMediaTracks()), [2];
            }
          });
        });
      }, _v1.prototype.stop = function () {
        var _v0;
        this.webRtcPeer ? (this.log.info("🍀Stopping RTC data transfer:", this.webRtcPeer.id), this.closeChannels(), (_v0 = this.webRtcPeer).setLocalDescription = function () {
          return Promise.reject("RTC peer was destroyed, cannot set local description.");
        }, _v0.createAnswer = function () {
          return Promise.reject("RTC peer was destroyed, cannot create answer.");
        }, _v0.onicecandidate = null, _v0.onnegotiationneeded = null, _v0.onconnectionstatechange = null, _v0.onsignalingstatechange = null, _v0.oniceconnectionstatechange = null, _v0.ontrack = null, _v0.close(), this.webRtcPeer = null, this.emitConnectionStateChange(_v2.ERTCConnectionState.CLOSED), this.log.info("🍀RTC data transfer peer is closed")) : this.log.info("🍀Ensured RTC data transfer is closed"), this.isStarted = !1;
      }, _v1.prototype.addRemoteICECandidate = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          var _v0;
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                if (!this.webRtcPeer) return [2, this.log.error("🧩Cannot apply candidate. RTC peer does not exist.")];
                _v0.label = 1;
              case 1:
                return _v0.trys.push([1, 3,, 4]), [4, this.webRtcPeer.addIceCandidate(_v0)];
              case 2:
                return _v0.sent(), [3, 4];
              case 3:
                return _v0 = _v0.sent(), this.log.error("🧩Failed to apply ICE:", _v0), [3, 4];
              case 4:
                return [2];
            }
          });
        });
      }, _v1.prototype.getRTCStats = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          return _v5.__generator(this, function (_v0) {
            if (this.webRtcPeer) return [2, this.webRtcPeer.getStats(_v0)];
            throw Error("WebRTC peer does not exist, cannot retrieve stats.");
          });
        });
      }, _v1.prototype.onRTCNegotiationNeeded = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                return _v0 !== this.webRtcPeer ? [2, this.log.info("🧩Ignoring renegotiation request. Reason: requested by old peer")] : this.isNegotiating ? [2, this.log.info("🧩Ignoring renegotiation request. Reason: processing")] : "stable" !== _v0.signalingState ? [2, this.log.info("🧩Ignoring renegotiation request. Reason: signaling state is not stable:", _v0.signalingState)] : (this.log.info("[🍀0] Renegotiation is needed, trying to request new offer"), [4, this.onRequestSDPOffer()]);
              case 1:
                return _v0.sent(), [2];
            }
          });
        });
      }, _v1.prototype.onRTCICECandidateReceived = function (_v0, _v1) {
        _v1 === this.webRtcPeer ? _v0.candidate && this.onLocalICECandidate(_v0.candidate) : this.log.warn("Ignored ICE event from non-current RTC peer:", _v0.type);
      }, _v1.prototype.onLocalSDPGenerated = function (_v0) {
        return _v0.sdp && (_v0.sdp = _v0.sdp.replace(/(\r\nb=AS:30\r\n)/g, "\r\n")), _v0;
      }, _v1.prototype.onRTCConnectionStateChange = function (_v0, _v1) {
        _v1 === this.webRtcPeer ? this.emitConnectionStateChange(_v1.connectionState) : this.log.warn("Ignored event from non-current RTC peer:", _v0.type);
      }, _v1.prototype.onRTCConnectionIceGatheringStateChange = function (_v0, _v1) {
        _v1 === this.webRtcPeer ? this.log.info("🧩ICE gathering state:", _v1.iceGatheringState) : this.log.warn("Ignored event from non-current RTC peer:", _v0.type);
      }, _v1.prototype.onRTCIceConnectionStateChange = function (_v0, _v1) {}, _v1.prototype.onRTCSignalingConnectionStateChange = function (_v0, _v1) {
        _v1 === this.webRtcPeer ? this.emitConnectionStateChange(_v1.connectionState) : this.log.warn("Ignored event from non-current RTC peer:", _v0.type);
      }, _v1.prototype.emitConnectionStateChange = function (_v0) {
        _v0 !== this.webRtcPeerConnectionState && (this.log.info("🧩RTC connection state changed:", _v0), this.webRtcPeerConnectionState = _v0, this.onConnectionStateChange(_v0));
      }, _v1;
    }(function () {
      function _v0() {
        this.log = _v35("🌈DT", _v14.MODULES.RTC), this.log.info("🔩️Creating RTC handler. Current browser: ".concat(_v12.default.browserDetails.browser, "_").concat(_v12.default.browserDetails.version, "."));
      }
      return _v0.prototype.onGeneratedSDPAnswer = function (_v0, _v1, _v2) {
        throw Error("'onGeneratedSDPAnswer' should be injected.");
      }, _v0.prototype.onRemoteTracksReceived = function (_v0) {
        throw Error("'onRemoteTrackReceived' should be injected.");
      }, _v0.prototype.onRequestSDPOffer = function () {
        throw Error("'onLocalSDPOffer' should be injected.");
      }, _v0.prototype.onLocalICECandidate = function (_v0) {
        throw Error("'onICECandidate' should be injected.");
      }, _v0.prototype.onRemoteConnectionClose = function () {
        throw Error("'onRemoteConnectionClose' should be injected.");
      }, _v0.prototype.onConnectionStateChange = function (_v0) {
        throw Error("'onRTCConnectionStateChange' method should be injected.");
      }, _v0.prototype.onDataChannelMessage = function (_v0, _v1) {
        throw Error("'onDataChannelMessage' should be injected.");
      }, _v0.prototype.onDataChannelOpened = function (_v0, _v1) {
        throw Error("'onDataChannelOpened' method should be injected.");
      }, _v0.prototype.onDataChannelClosed = function (_v0, _v1) {
        throw Error("'onDataChannelClosed' method should be injected.");
      }, _v0.prototype.onDataChannelError = function (_v0, _v1) {
        throw Error("'onDataChannelError' method should be injected.");
      }, _v0;
    }()))),
    _v42 = function (_v0) {
      function _v1() {
        return null !== _v0 && _v0.apply(this, arguments) || this;
      }
      return _v5.__extends(_v1, _v0), _v1;
    }(_v41),
    _v43 = function () {
      function _v0() {
        this.cache = {};
      }
      return _v0.prototype.flush = function () {
        var _v0, _v1;
        try {
          for (var _v2 = _v5.__values(Object.keys(this.cache)), _v3 = _v2.next(); !_v3.done; _v3 = _v2.next()) {
            var _v4 = _v3.value;
            delete this.cache[_v4];
          }
        } catch (_v0) {
          _v0 = {
            error: _v0
          };
        } finally {
          try {
            _v3 && !_v3.done && (_v1 = _v2.return) && _v1.call(_v2);
          } finally {
            if (_v0) throw _v0.error;
          }
        }
      }, _v0.prototype.decode = function (_v0, _v1, _v2) {
        var _v3 = this.cache[_v2.commandId];
        _v3 ? (_v3.parts.push([_v2.part, _v0.body]), this.tryFlushAccumulator(_v3)) : this.cache[_v2.commandId] = {
          from: _v1,
          meta: _v2,
          parts: [[_v2.part, _v0.body]]
        };
      }, _v0.prototype.encode = function (_v0) {
        for (var _v1 = window.btoa(JSON.stringify(_v0)), _v2 = [], _v3 = 0; _v3 < _v1.length; _v3 += _v0.OPTIMAL_PART_SIZE) _v2.push(_v1.slice(_v3, _v3 + Math.min(_v0.OPTIMAL_PART_SIZE, _v1.length)));
        return _v2;
      }, _v0.prototype.onMessageDecoded = function (_v0, _v1, _v2) {}, _v0.prototype.tryFlushAccumulator = function (_v0) {
        var _v1, _v2;
        if (_v0.parts.length === _v0.meta.count) {
          var _v3 = "";
          _v0.parts.sort(function (_v0, _v1) {
            return _v0[0] - _v1[0];
          });
          try {
            for (var _v4 = _v5.__values(_v0.parts), _v5 = _v4.next(); !_v5.done; _v5 = _v4.next()) _v3 += _v5.value[1];
          } catch (_v0) {
            _v1 = {
              error: _v0
            };
          } finally {
            try {
              _v5 && !_v5.done && (_v2 = _v4.return) && _v2.call(_v4);
            } finally {
              if (_v1) throw _v1.error;
            }
          }
          delete this.cache[_v0.meta.commandId], this.onMessageDecoded(JSON.parse(atob(_v3)), _v0.from, _v0.meta);
        }
      }, _v0.CHUNKING_THRESHOLD = 0, _v0.OPTIMAL_PART_SIZE = 0, _v0;
    }(),
    _v44 = _v13.default,
    _v45 = function () {
      function _v0(_v0, _v1) {
        this.clientMode = _v2.EClientMode.BROADCASTER, this.isForcedBroadcaster = !1, this.log = _v35("💧PN", _v14.MODULES.SERVICE), this.messageEncoder = new _v43(), this.isStarted = !1, this.isConnected = !1, this.sessionId = "initial", this.index = -1, this.studioUUID = "", this.studioSDP = "", this.studioSDPReceived = -1, this.lastSDPRequestTimestamp = 0, this.uuid = _v0, this.config = _v5.__assign(_v5.__assign({}, _v1), {
          name: _v1.name || _v1.type
        }), this.pubNub = new _v44({
          authKey: _v1.authKey,
          autoNetworkDetection: !0,
          heartbeatInterval: _v1.heartbeatInterval,
          presenceTimeout: _v1.presenceTimeout,
          publishKey: _v1.publishKey,
          subscribeKey: _v1.subscribeKey,
          uuid: this.uuid
        }), this.log.info("🔩️Creating signaling handler. PN version: ".concat(this.pubNub.getVersion())), this.log.info("🔩Connection uuid:", _v0), this.messageEncoder.onMessageDecoded = this.handleMessage.bind(this), this.pubNub.addListener({
          message: this.onMessage.bind(this),
          presence: this.onPresence.bind(this),
          status: this.onStatus.bind(this)
        });
      }
      return _v0.prototype.start = function () {
        return _v5.__awaiter(this, void 0, void 0, function () {
          return _v5.__generator(this, function (_v0) {
            if (this.isStarted) throw Error("Signaling is already started");
            return this.log.info("🔥Connecting signaling"), this.sessionId = "initial", this.isStarted = !0, this.subscribeToChannels(), [2];
          });
        });
      }, _v0.prototype.stop = function () {
        this.log.info("🔥Stopping signaling"), this.pubNub && (this.log.info("📻Unsubscribe from channels"), this.pubNub.unsubscribeAll(), this.pubNub.stop(), this.onSignalingStatusChange(!1)), this.messageEncoder.flush(), this.isStarted = !1;
      }, _v0.prototype.destroy = function () {
        this.log.info("🔥Destroying PN signaling"), this.pubNub ? (this.stop(), this.pubNub.destroy(), delete this.pubNub, this.log.info("🔥Destroyed PN instance")) : this.log.info("🔥PN was already destroyed");
      }, _v0.prototype.forceBroadcasterMode = function () {
        return _v5.__awaiter(this, void 0, void 0, function () {
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                if (this.log.info("🧰Force broadcaster mode received"), this.config.type !== _v2.EConnectionType.OWNER) throw TypeError("Switching mode is not allowed for non-owner connections");
                return this.isForcedBroadcaster = !0, [4, this.sendSDPRequest({
                  forceBroadcaster: !0
                })];
              case 1:
                return _v0.sent(), [2];
            }
          });
        });
      }, _v0.prototype.sendChatMessage = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          var _v0, _v1, _v2;
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                return _v1 = (_v0 = this.config).type, _v2 = _v0.name, this.log.info("📩Sending PN chat message"), [4, this.sendMessage(this.config.discoveryChannel, {
                  command: _v2.ECommandType.CHAT_MESSAGE,
                  message: _v0,
                  sender: _v1,
                  senderName: _v2 || _v1
                }, null)];
              case 1:
                return _v0.sent(), [2];
            }
          });
        });
      }, _v0.prototype.sendSDPAnswer = function (_v0, _v1, _v2) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          var _v0, _v1, _v2, _v3;
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                return _v1 = (_v0 = this.config).name, _v2 = _v0.type, this.log.info("📩Sending SDP answer. Media expected: ".concat(_v1, ", has local media: ").concat(_v2, ", was ").concat(this.clientMode)), this.detectConnectionType(_v1, _v2), _v3 = {
                  clientType: "web",
                  enableRtcCommunication: !0,
                  name: _v1 || _v2,
                  webBrowser: "".concat(_v12.default.browserDetails.browser, " ").concat(_v12.default.browserDetails.version),
                  webMachine: _v38().match(_v37) ? "tablet" : _v38().match(_v36) ? "mobile" : "computer",
                  ownerMode: this.isForcedBroadcaster ? _v2.EClientMode.FORCED_BROADCASTER : this.clientMode
                }, this.config.type === _v2.EConnectionType.OWNER && (this.log.info("🧰Current owner mode:", this.isForcedBroadcaster ? _v2.EClientMode.FORCED_BROADCASTER : this.clientMode), this.isForcedBroadcaster = !1), [4, this.sendMessage(this.config.connectionChannel, {
                  sdp: _v0,
                  command: _v2.ECommandType.ANSWER
                }, this.studioUUID, _v3)];
              case 1:
                return _v0.sent(), [2];
            }
          });
        });
      }, _v0.prototype.sendSDPRequest = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          var _v0, _v1;
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                return _v0 = Date.now() - this.lastSDPRequestTimestamp, _v1 = !!(this.config.type === _v2.EConnectionType.OWNER && (null == _v0 ? void 0 : _v0.forceBroadcaster)), _v0 < _v0.EXTERNAL_SDP_REQUEST_RESERVED_TIME ? [2, this.log.warn("📩Ignoring SDP request. Reason: request rate, limit:", _v0, _v0.EXTERNAL_SDP_REQUEST_RESERVED_TIME)] : (this.lastSDPRequestTimestamp = Date.now(), this.log.info("📩Last negotiation request at:", this.lastSDPRequestTimestamp), this.log.info("📩Sending SDP request, force mode:", _v1), [4, this.sendMessage(this.config.connectionChannel, {
                  command: _v2.ECommandType.REQUEST_NEW_OFFER,
                  forceBroadcaster: _v1
                }, this.studioUUID)]);
              case 1:
                return _v0.sent(), [2];
            }
          });
        });
      }, _v0.prototype.sendICECandidate = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                return [4, this.sendMessage(this.config.connectionChannel, {
                  candidate: _v0.candidate,
                  command: _v2.ECommandType.ICE_CANDIDATE,
                  sdpMLineIndex: _v0.sdpMLineIndex,
                  sdpMid: _v0.sdpMid
                }, this.studioUUID)];
              case 1:
                return _v0.sent(), [2];
            }
          });
        });
      }, _v0.prototype.onSignalingStatusChange = function (_v0) {
        throw Error("'onSignalingStatusChange' method should be injected.");
      }, _v0.prototype.onClientModeSelected = function (_v0) {
        throw Error("'onClientModeSelected' method should be injected.");
      }, _v0.prototype.onRemoteSDPInit = function (_v0, _v1, _v2) {
        throw Error("'onRemoteSDPInit' should be injected.");
      }, _v0.prototype.onRemoteSDPUpdated = function (_v0, _v1) {
        throw Error("'onRemoteSDPUpdated' should be injected.");
      }, _v0.prototype.onRemoteICEReceived = function (_v0) {
        throw Error("'onRemoteICEReceived' should be injected.");
      }, _v0.prototype.onRemoteShutdownReceived = function (_v0, _v1) {
        throw Error("'onRemoteShutdownReceived' should be injected.");
      }, _v0.prototype.onRemoteChatMessage = function (_v0, _v1) {
        throw Error("'onRemoteChatMessage' should be injected.");
      }, _v0.prototype.onMessage = function (_v0) {
        var _v1 = this.config.connectionChannel,
          _v2 = _v0.channel,
          _v3 = _v0.message,
          _v4 = _v0.publisher;
        if (_v4 && _v0.userMetadata) {
          var _v5 = _v4.startsWith(_v31[_v2.EConnectionType.STUDIO]),
            _v6 = this.sessionId === _v0.userMetadata.sessionId,
            _v7 = _v2 === _v1 && this.uuid === _v0.userMetadata.toClient,
            _v8 = _v3.command === _v2.ECommandType.INIT || _v3.command === _v2.ECommandType.SHUTDOWN;
          return _v3.command === _v2.ECommandType.CHAT_MESSAGE || _v5 && _v7 && (_v6 || _v8) ? this.handleMessage(_v3, _v4, _v0.userMetadata) : void 0;
        }
      }, _v0.prototype.onPresence = function (_v0) {
        var _v1 = _v0.action,
          _v2 = _v0.uuid,
          _v3 = _v0.timestamp,
          _v4 = _v0.occupancy,
          _v5 = _v0.channel;
        this.log.info("📡Presence: ".concat(_v1, " # ").concat(_v2.slice(0, 8), "-* # ").concat(_v5, " # ").concat(this.uuid === _v2 ? "+" : "-", " # ").concat(_v4, " # ").concat(_v3));
      }, _v0.prototype.onStatus = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          var _v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8;
          return _v5.__generator(this, function (_v0) {
            if (_v0 = _v44.CATEGORIES, _v1 = _v44.OPERATIONS, _v3 = (_v2 = this.config).connectionChannel, _v4 = _v2.discoveryChannel, _v5 = _v0.category, _v6 = _v0.operation, _v7 = _v0.affectedChannels, _v8 = _v0.subscribedChannels, !this.isStarted) return _v1.PNUnsubscribeOperation ? this.log.info("📻Signaling unsubscribed from channels:", _v7) : this.log.warn("Received PN events when signaling is not started:", _v5, _v6, _v7), [2];
            switch (_v5) {
              case _v0.PNConnectedCategory:
                _v6 === _v1.PNSubscribeOperation && ((null == _v7 ? void 0 : _v7.includes(_v3)) && (this.log.info("📻Subscribed to CONNECTION channel:", _v3), this.pubNub.subscribe({
                  channels: [_v4],
                  withPresence: !0
                })), (null == _v8 ? void 0 : _v8.includes(_v4)) && this.log.info("📻Subscribed to DISCOVERY channel:", _v4)), this.emitConnectionChange(!0);
                break;
              case _v0.PNNetworkDownCategory:
              case _v0.PNTimeoutCategory:
                this.log.info("📻PN network issue received:", _v5), this.emitConnectionChange(!1);
                break;
              case _v0.PNNetworkUpCategory:
              case _v0.PNReconnectedCategory:
                this.log.info("📻PN network up received:", _v5), this.isConnected || this.subscribeToChannels(), this.emitConnectionChange(!0);
                break;
              case _v0.PNAccessDeniedCategory:
                this.log.warn("PN signaling received access denied event");
                break;
              case _v0.PNUnknownCategory:
                this.log.warn("PN signaling received access UNKNOWN event", _v5, _v6);
                break;
              case _v0.PNRequestMessageCountExceedCategory:
                this.log.warn("PN signaling received messages limit event");
                break;
              case void 0:
                _v6 === _v1.PNUnsubscribeOperation && (this.log.info("📻Unsubscribed from channels:", _v7), this.emitConnectionChange(!1));
            }
            return [2];
          });
        });
      }, _v0.prototype.sendMessage = function (_v0, _v1, _v2, _v3) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          var _v0,
            _v1,
            _v2,
            _v3,
            _v4,
            _v5,
            _v6 = this;
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                return _v0 = this.calculatePayloadMessageSize(_v0, _v1), _v1 = _v2 ? _v5.__assign({
                  index: this.index,
                  sessionId: this.sessionId,
                  toClient: _v2
                }, _v3 || {}) : _v3 ? _v5.__assign({}, _v3) : {}, _v0 > _v43.CHUNKING_THRESHOLD ? (_v2 = _v44.generateUUID(), _v3 = this.messageEncoder.encode(_v1), _v4 = function (_v0, _v1) {
                  return _v6.pubNub.publish({
                    channel: _v0,
                    message: {
                      body: _v0,
                      command: _v2.ECommandType.PACKED
                    },
                    meta: _v5.__assign({
                      commandId: _v2,
                      count: _v3.length,
                      part: _v1
                    }, _v1),
                    sendByPost: !0,
                    storeInHistory: !1
                  });
                }, [4, Promise.all(_v3.map(function (_v0, _v1) {
                  return _v4(_v0, _v1).catch(function (_v0) {
                    _v6.log.error("Failed to send PN message part:", _v1, _v0.length, _v0);
                  });
                }))]) : [3, 2];
              case 1:
              case 3:
                return _v0.sent(), [3, 5];
              case 2:
                return _v0.trys.push([2, 4,, 5]), [4, this.pubNub.publish({
                  channel: _v0,
                  message: _v1,
                  meta: _v1,
                  sendByPost: !0,
                  storeInHistory: !1
                })];
              case 4:
                return _v5 = _v0.sent(), this.log.error("Failed to send PN message:", _v5), [3, 5];
              case 5:
                return [2];
            }
          });
        });
      }, _v0.prototype.handleMessage = function (_v0, _v1, _v2) {
        var _v3 = Date.now(),
          _v4 = _v1.slice(0, 8) + "-*";
        switch (_v0.command) {
          case _v2.ECommandType.INIT:
            if (_v0.sdp === this.studioSDP && _v3 - this.studioSDPReceived < _v0.SAME_SDP_PROCESSING_RESERVED_TIME) {
              this.log.warn("📩Ignore same init. Last: ".concat(this.studioSDPReceived, ". Studio:"), _v4);
              break;
            }
            this.log.info("📩Received INIT. Studio: ".concat(_v4, ", media restricted: ").concat(_v2.ownerVideoRestricted)), this.studioUUID = _v1, this.studioSDP = _v0.sdp, this.studioSDPReceived = _v3, this.sessionId = _v2.sessionId, this.index = 0, this.onRemoteSDPInit(_v0.sdp, _v0.iceServers, !!_v2.ownerVideoRestricted);
            break;
          case _v2.ECommandType.UPDATE:
            if (this.index >= _v2.index) {
              this.log.warn("📩Ignore incorrectly indexed UPDATE[".concat(_v2.index, "]. Studio:"), _v4);
              break;
            }
            this.log.info("📩Received UPDATE[".concat(_v2.index, "]. Studio:"), _v4), this.index = _v2.index, this.onRemoteSDPUpdated(_v0.sdp, !!_v2.ownerVideoRestricted);
            break;
          case _v2.ECommandType.ICE_CANDIDATE:
            this.onRemoteICEReceived(_v0);
            break;
          case _v2.ECommandType.SHUTDOWN:
            this.log.info("📩Received SHUTDOWN. Studio:", _v4), this.onRemoteShutdownReceived(_v0.reason, _v0.textHint);
            break;
          case _v2.ECommandType.CHAT_MESSAGE:
            this.onRemoteChatMessage(_v0.message, {
              isMe: this.uuid === _v1,
              senderName: _v0.senderName,
              senderType: _v0.sender,
              senderUUID: _v1
            });
            break;
          case _v2.ECommandType.PACKED:
            this.log.info("📩Received PACKED: ".concat(_v2.part, " / ").concat(_v2.count, ". Studio:"), _v4), this.messageEncoder.decode(_v0, _v1, _v2);
        }
      }, _v0.prototype.subscribeToChannels = function () {
        var _v0 = this.config.connectionChannel;
        this.log.info("📻Subscribing to channels"), this.pubNub.subscribe({
          channels: [_v0],
          withPresence: !1
        });
      }, _v0.prototype.emitConnectionChange = function (_v0) {
        this.isConnected !== _v0 && (this.isConnected = _v0, this.onSignalingStatusChange(_v0));
      }, _v0.prototype.detectConnectionType = function (_v0, _v1) {
        var _v2 = this.config.type !== _v2.EConnectionType.OWNER || this.isForcedBroadcaster || _v0 && _v1 ? _v2.EClientMode.BROADCASTER : _v2.EClientMode.VIEWER;
        this.clientMode = _v2, this.onClientModeSelected(_v2);
      }, _v0.prototype.calculatePayloadMessageSize = function (_v0, _v1) {
        return encodeURIComponent(_v0 + JSON.stringify(_v1)).length + 100;
      }, _v0.SAME_SDP_PROCESSING_RESERVED_TIME = 0, _v0.EXTERNAL_SDP_REQUEST_RESERVED_TIME = 150, _v0;
    }(),
    _v46 = function () {
      function _v0(_v0, _v1, _v2) {
        void 0 === _v2 && (_v2 = {}), this.started = !1, this.destroyed = !1, this.channels = [_v23.MODULE_INFO], this.log = _v35("🍁SS", _v14.MODULES.SERVICE), this.log.info("🔩️Constructing studio connection service"), this.log.info("🔩Version ".concat("1.3.1", " - ").concat("2:46:01 PM 1/6/2026", " - ").concat("e50b2e2ab00d515b1ea7a3f778cd8bf6cb0cb4f0")), this.checkRTCSupport(), this.applyPolyfills(), this.applyHandlers(_v2), this.initializeServices(_v0, _v1), this.initializeHandlers();
      }
      return _v0.generateUUID = function (_v0) {
        return _v33(_v0);
      }, _v0.prototype.start = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                if (this.started) throw Error("Studio service is already started");
                if (this.destroyed) throw Error("Studio service is destroyed");
                return window.addEventListener("unload", this.onWindowUnload), _v0 && this.setMediaTracks(_v0), this.log.info("🔥Starting studio service"), [4, this.signaling.start()];
              case 1:
                return _v0.sent(), this.started = !0, [2];
            }
          });
        });
      }, _v0.prototype.stop = function () {
        this.log.info("🔥Stopping studio service"), window.removeEventListener("unload", this.onWindowUnload), this.signaling.stop(), this.dataTransfer.stop(), this.started = !1;
      }, _v0.prototype.destroy = function () {
        this.log.info("🔥Destroying studio service"), window.removeEventListener("unload", this.onWindowUnload), this.signaling.destroy(), this.dataTransfer.stop(), this.dataTransfer.setLocalMediaTracks([]), this.started = !1, this.destroyed = !0;
      }, _v0.prototype.forceBroadcasterMode = function () {
        return _v5.__awaiter(this, void 0, void 0, function () {
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                return [4, this.signaling.forceBroadcasterMode()];
              case 1:
                return _v0.sent(), [2];
            }
          });
        });
      }, _v0.prototype.startStreaming = function () {
        this.dataTransfer.sendDataChannelMessage(_v23.MODULE_INFO, {
          n: _v2.ERTCCommand.REQUEST_START_STREAMING
        });
      }, _v0.prototype.stopStreaming = function () {
        this.dataTransfer.sendDataChannelMessage(_v23.MODULE_INFO, {
          n: _v2.ERTCCommand.REQUEST_STOP_STREAMING
        });
      }, _v0.prototype.sendChatMessage = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                return [4, this.signaling.sendChatMessage(_v0)];
              case 1:
                return _v0.sent(), [2];
            }
          });
        });
      }, _v0.prototype.addMediaTrack = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                return [4, this.dataTransfer.addMediaTrack(_v0)];
              case 1:
                return _v0.sent(), [2];
            }
          });
        });
      }, _v0.prototype.removeMediaTrack = function (_v0) {
        this.dataTransfer.removeMediaTrack(_v0);
      }, _v0.prototype.setMediaTracks = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          return _v5.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                return [4, this.dataTransfer.setLocalMediaTracks(_v0)];
              case 1:
                return _v0.sent(), [2];
            }
          });
        });
      }, _v0.prototype.getMediaTracks = function () {
        return this.dataTransfer.getLocalMediaTracks();
      }, _v0.prototype.getRTCStats = function (_v0) {
        return _v5.__awaiter(this, void 0, void 0, function () {
          return _v5.__generator(this, function (_v0) {
            return [2, this.dataTransfer.getRTCStats(_v0)];
          });
        });
      }, _v0.prototype.getCreatedDataChannels = function () {
        return this.dataTransfer.getCreatedDataChannels();
      }, _v0.prototype.getDataChannelState = function (_v0) {
        return this.dataTransfer.getDataChannelState(_v0);
      }, _v0.prototype.sendDataChannelMessage = function (_v0, _v1) {
        this.dataTransfer.sendDataChannelMessage(_v0, _v1);
      }, _v0.prototype.onRemoteTracksReceived = function (_v0) {}, _v0.prototype.onSignalingStatusChanged = function (_v0) {}, _v0.prototype.onRTCConnectionStateChanged = function (_v0) {}, _v0.prototype.onChannelOpened = function (_v0, _v1) {}, _v0.prototype.onChannelClosed = function (_v0, _v1) {}, _v0.prototype.onChannelError = function (_v0, _v1) {}, _v0.prototype.onChannelMessage = function (_v0, _v1) {}, _v0.prototype.onShutdownReceived = function (_v0, _v1) {}, _v0.prototype.onChatMessageReceived = function (_v0, _v1) {}, _v0.prototype.onClientModeSelected = function (_v0) {}, _v0.prototype.onRemoteConnectionClose = function () {
        this.log.info("Received 'close' from remote studio, stopping local data transfer"), this.dataTransfer.stop();
      }, _v0.prototype.checkRTCSupport = function () {
        if (!1 === _v12.default.browserDetails.supportsUnifiedPlan) throw Error("Cannot start service: UNIFIED plan should be supported.");
        if (null === _v12.default.browserDetails.version) throw Error("Current browser is not supported or denied RTC access.");
        if (window && !("RTCPeerConnection" in window)) throw Error("Current window has disabled access to RTC api.");
        try {
          new RTCPeerConnection();
        } catch (_v0) {
          throw Error("Cannot construct peer connections correctly: " + _v0.message);
        }
        this.log.info("🔩️Checked RTC support, UNIFIED is supported");
      }, _v0.prototype.initializeHandlers = function () {
        var _v0 = this;
        this.onWindowUnload = this.onWindowUnload.bind(this), this.signaling.onRemoteSDPInit = function (_v0, _v1) {
          for (var _v2 = [], _v3 = 2; _v3 < arguments.length; _v3++) _v2[_v3 - 2] = arguments[_v3];
          return _v5.__awaiter(_v0, _v5.__spreadArray([_v0, _v1], _v5.__read(_v2), !1), void 0, function (_v0, _v1, _v2) {
            return void 0 === _v2 && (_v2 = !1), _v5.__generator(this, function (_v0) {
              switch (_v0.label) {
                case 0:
                  return [4, this.dataTransfer.start({
                    dataChannels: this.channels,
                    isMediaRestricted: _v2,
                    offerOptions: {
                      iceRestart: !1
                    },
                    options: {
                      iceServers: _v1 ? _v34(_v1) : [{
                        urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302", "stun:stun3.l.google.com:19302", "stun:stun4.l.google.com:19302"]
                      }],
                      sdpSemantics: "unified-plan"
                    },
                    sdp: _v0
                  })];
                case 1:
                  return _v0.sent(), [2];
              }
            });
          });
        }, this.signaling.onRemoteSDPUpdated = function (_v0, _v1) {
          return void 0 === _v1 && (_v1 = !1), _v0.dataTransfer.setRemoteSDPOffer(_v0, _v1);
        }, this.signaling.onRemoteICEReceived = function (_v0) {
          return _v0.dataTransfer.addRemoteICECandidate(_v0);
        }, this.signaling.onRemoteShutdownReceived = function (_v0, _v1) {
          return _v0.onShutdownReceived(_v0, _v1);
        }, this.signaling.onRemoteChatMessage = function (_v0, _v1) {
          return _v0.onChatMessageReceived(_v0, _v1);
        }, this.signaling.onSignalingStatusChange = function (_v0) {
          return _v0.onSignalingStatusChanged(_v0);
        }, this.signaling.onClientModeSelected = function (_v0) {
          return _v0.onClientModeSelected(_v0);
        }, this.dataTransfer.onGeneratedSDPAnswer = function (_v0, _v1, _v2) {
          return _v0.signaling.sendSDPAnswer(_v0, _v1, _v2);
        }, this.dataTransfer.onConnectionStateChange = function (_v0) {
          return _v0.onRTCConnectionStateChanged(_v0);
        }, this.dataTransfer.onRequestSDPOffer = function () {
          return _v0.signaling.sendSDPRequest();
        }, this.dataTransfer.onLocalICECandidate = function (_v0) {
          return _v0.signaling.sendICECandidate(_v0);
        }, this.dataTransfer.onRemoteTracksReceived = function (_v0) {
          return _v0.onRemoteTracksReceived(_v0);
        }, this.dataTransfer.onRemoteConnectionClose = function () {
          return _v0.onRemoteConnectionClose();
        }, this.dataTransfer.onDataChannelMessage = function (_v0, _v1) {
          return _v0.onChannelMessage(_v0, _v1);
        }, this.dataTransfer.onDataChannelOpened = function (_v0, _v1) {
          return _v0.onChannelOpened(_v0, _v1);
        }, this.dataTransfer.onDataChannelClosed = function (_v0, _v1) {
          return _v0.onChannelClosed(_v0, _v1);
        }, this.dataTransfer.onDataChannelError = function (_v0, _v1) {
          return _v0.onChannelError(_v0, _v1);
        };
      }, _v0.prototype.applyHandlers = function (_v0) {
        for (var _v1 in _v0) _v1 in this && (this[_v1] = _v0[_v1]);
      }, _v0.prototype.applyPolyfills = function () {
        var _v0;
        _v0 = window, !_v20 && "object" == typeof _v0 && _v0.RTCPeerConnection && (Object.defineProperty(_v0.RTCPeerConnection.prototype, "connectionState", {
          get: function () {
            return (this.iceConnectionState || this.iceGatheringState) && (this.iceConnectionState !== _v8.NEW && this.iceGatheringState !== _v9.NEW || this.iceConnectionState === _v8.FAILED || this.iceConnectionState === _v8.DISCONNECTED || this.iceConnectionState === _v8.CHECKING) && (this.iceConnectionState !== _v8.CLOSED || this.iceGatheringState !== _v9.CLOSED) ? this.iceConnectionState === _v8.CHECKING && this.iceGatheringState === _v9.GATHERING ? this._connectionState = _v11.CONNECTING : this.iceConnectionState !== _v8.CONNECTED && this.iceConnectionState !== _v8.COMPLETED || this.iceGatheringState !== _v9.GATHERING && this.iceGatheringState !== _v9.COMPLETE || this.signalingState !== _v10.STABLE ? this.signalingState === _v10.CLOSED || this.iceConnectionState === _v8.DISCONNECTED ? this._connectionState = _v11.DISCONNECTED : this.iceConnectionState === _v8.FAILED ? this._connectionState = _v11.FAILED : this._connectionState = _v11.CLOSED : this._connectionState = _v11.CONNECTED : this._connectionState = _v11.NEW, this._connectionState;
          },
          configurable: !1,
          enumerable: !0
        }), _v20 = !0);
      }, _v0.prototype.initializeServices = function (_v0, _v1) {
        this.signaling = new _v45(_v0, _v1), this.dataTransfer = new _v42();
      }, _v0.prototype.onWindowUnload = function () {
        return this.started && this.destroy(), null;
      }, _v0;
    }();
  _v2.AbstractStudioService = _v46, _v2.EStudioChannel = _v23, _v2.NEW = "new", _v2.NONE = _v27, _v2.PubNubSignaling = _v45, _v2.RTCMediaTransfer = _v41, _v2.RTCMessageEncoder = _v40, _v2.RTCTransfer = _v42, _v2.connectionUUIDPrefixMap = _v31, _v2.createLogger = _v35, _v2.generateClientUUID = _v33, _v2.generateShortUUID = _v32, _v2.generateUUID = function () {
    return _v13.default.generateUUID();
  }, _v2.getDefaultIceServers = function () {
    return [{
      urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302", "stun:stun3.l.google.com:19302", "stun:stun4.l.google.com:19302"]
    }];
  }, _v2.isSupportedInCurrentEnvironment = function () {
    if (!1 === _v12.default.browserDetails.supportsUnifiedPlan || null === _v12.default.browserDetails.version || window && !("RTCPeerConnection" in window)) return !1;
    try {
      new RTCPeerConnection();
    } catch (_v0) {
      return !1;
    }
    return !0;
  }, _v2.normalizeIceServers = _v34, _v2.setGlobalPrefix = function (_v0) {
    _v14.GLOBAL_PREFIX = _v0;
  }, _v2.setLoggingProfile = function (_v0) {
    _v14.MODULES = _v5.__assign(_v5.__assign({}, _v14.MODULES), _v0);
  }, _v2.setRTCLogger = function (_v0) {
    _v14.IMPLEMENTATION = _v0;
  }, _v2.setRTCLoggingState = function (_v0) {
    _v14.IS_ENABLED = _v0;
  };
}