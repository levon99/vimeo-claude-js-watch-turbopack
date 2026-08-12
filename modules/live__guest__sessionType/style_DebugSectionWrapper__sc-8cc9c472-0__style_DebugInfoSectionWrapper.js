{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9,
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = _v22.default.div.withConfig({
      displayName: "style__DebugSectionWrapper",
      componentId: "sc-8cc9c472-0"
    })`
  border: solid 1px ${_v23.bokehTheme.colors.white};
  padding: ${(0, _v21.rem)(16)};
  margin-bottom: ${(0, _v21.rem)(12)};
  overflow-x: hidden;
  background-color: ${_v23.bokehTheme.colors.gray["800"]};
`,
    _v33 = _v22.default.div.withConfig({
      displayName: "style__DebugInfoSectionWrapper",
      componentId: "sc-8cc9c472-1"
    })`
  padding: ${(0, _v21.rem)(12)};
  margin: ${(0, _v21.rem)(8)} 0;
  border: 1px solid ${_v23.bokehTheme.colors.white};
  overflow-x: auto;
`,
    _v34 = _v22.default.div.withConfig({
      displayName: "style__DebugInfoControlsWrapper",
      componentId: "sc-8cc9c472-2"
    })`
  display: flex;
  flex-direction: row;

  & > * {
    margin: ${(0, _v21.rem)(4)};
  }
`,
    _v35 = (0, _v22.default)(_v28.Header).withConfig({
      displayName: "style__DebugModalUpdateSection",
      componentId: "sc-8cc9c472-3"
    })`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,
    _v36 = (0, _v22.default)(_v29.Text).withConfig({
      displayName: "style__Colored",
      componentId: "sc-8cc9c472-4"
    })`
  color: ${({
      color: _v0
    }) => _v0};
`,
    _v37 = (0, _v22.default)(_v27.Button).attrs({
      size: "sm",
      format: "basic",
      variant: "minimalTransparent",
      theme: _v25.themes.dark,
      icon: (0, _v10.jsx)(_v31.CloseX, {})
    }).withConfig({
      displayName: "style__DebugDismiss",
      componentId: "sc-8cc9c472-5"
    })`
  position: absolute;
  top: ${(0, _v21.rem)(12)};
  right: ${(0, _v21.rem)(12)};
  color: ${_v23.bokehTheme.colors.white};
`;
  function _v38(_v0, _v1) {
    let _v2 = _v1 ? _v1.getSettings() : null;
    return (0, _v10.jsxs)(_v10.Fragment, {
      children: [(0, _v10.jsx)(_v28.Header, {
        theme: _v25.themes.dark,
        size: "5",
        children: _v0
      }), (0, _v10.jsx)(_v33, {
        children: _v1 && _v2 ? (0, _v10.jsxs)(_v10.Fragment, {
          children: [(0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: [" ID: ", _v1.id, " "]
          }), " ", (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: [" Enabled: ", _v1.enabled.toString(), " "]
          }), " ", (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: ["Size: ", _v2.width, " x ", _v2.height]
          }), (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: [" FPS: ", _v2.frameRate, " "]
          }), " ", (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: [" Aspect ratio: ", _v2.aspectRatio || "unknown", " "]
          }), (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: [" Content hint: ", _v1.contentHint || "-", " "]
          })]
        }) : (0, _v10.jsx)(_v29.Text, {
          theme: _v25.themes.dark,
          children: " none "
        })
      })]
    });
  }
  function _v39(_v0, _v1) {
    let _v2 = _v1 ? _v1.getSettings() : null;
    return (0, _v10.jsxs)(_v10.Fragment, {
      children: [(0, _v10.jsx)(_v28.Header, {
        theme: _v25.themes.dark,
        size: "5",
        children: _v0
      }), (0, _v10.jsx)(_v33, {
        children: _v1 && _v2 ? (0, _v10.jsxs)(_v10.Fragment, {
          children: [(0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: [" ID: ", _v1.id, " "]
          }), " ", (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: [" Enabled: ", _v1.enabled.toString(), " "]
          }), " ", (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: [" Channel count: ", _v2.channelCount, " "]
          }), (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: ["Autogain: ", (!!_v2.autoGainControl).toString()]
          }), (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: ["Echo cancellation: ", (!!_v2.echoCancellation).toString()]
          }), (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: ["Noise suppression: ", (!!_v2.noiseSuppression).toString()]
          }), (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: [" Sample size: ", _v2.sampleSize || "unknown", " "]
          }), (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: ["Sample rate: ", _v2.sampleRate || "unknown", " "]
          }), (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: [" Content hint: ", _v1.contentHint || "-", " "]
          })]
        }) : (0, _v10.jsx)(_v29.Text, {
          theme: _v25.themes.dark,
          children: " none "
        })
      })]
    });
  }
  function _v40({
    isScreenSharing: _v0,
    audioDeviceId: _v1,
    videoDeviceId: _v2,
    audioMuted: _v3,
    videoMuted: _v4,
    localPreview: _v5,
    remotePreview: _v6
  }) {
    let [_v7, _v8] = (0, _v17.useState)(!1),
      _v9 = (0, _v17.useCallback)(() => _v8(!_v7), [_v7]);
    return (0, _v10.jsxs)(_v32, {
      children: [(0, _v10.jsx)(_v28.Header, {
        theme: _v25.themes.dark,
        size: "4",
        children: "Media info:"
      }), (0, _v10.jsx)(_v27.Button, {
        onClick: _v9,
        size: "sm",
        children: _v7 ? "Hide" : "Show"
      }), _v7 ? (0, _v10.jsxs)(_v10.Fragment, {
        children: [(0, _v10.jsx)("br", {}), (0, _v10.jsx)(_v28.Header, {
          theme: _v25.themes.dark,
          size: "5",
          children: "General:"
        }), (0, _v10.jsxs)(_v29.Text, {
          theme: _v25.themes.dark,
          children: [" Is screen sharing: ", _v0.toString(), " "]
        }), (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
          theme: _v25.themes.dark,
          children: [" Is video muted: ", _v4.toString(), " "]
        }), " ", (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
          theme: _v25.themes.dark,
          children: [" Is audio muted: ", _v3.toString(), " "]
        }), " ", (0, _v10.jsx)("br", {}), (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
          theme: _v25.themes.dark,
          children: [" Has local preview: ", (!!_v5).toString(), " "]
        }), (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
          theme: _v25.themes.dark,
          children: ["Has remote preview: ", (!!_v6).toString(), " "]
        }), (0, _v10.jsx)("br", {}), (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
          theme: _v25.themes.dark,
          children: [" Video device: ", _v2, " "]
        }), (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
          theme: _v25.themes.dark,
          children: [" Audio device: ", _v1, " "]
        }), (0, _v10.jsx)("br", {}), (0, _v10.jsx)("br", {}), _v38("Local video track:", (0, _v30.getStreamVideoTrack)(_v5)), _v39("Local audio track:", (0, _v30.getStreamAudioTrack)(_v5)), _v38("Remote video track:", (0, _v30.getStreamVideoTrack)(_v6)), _v39("Remote audio track:", (0, _v30.getStreamAudioTrack)(_v6))]
      }) : null]
    });
  }
  function _v41({
    enabled: _v0,
    onEnable: _v1,
    onDisable: _v2,
    onSave: _v3
  }) {
    return (0, _v10.jsxs)(_v32, {
      children: [(0, _v10.jsxs)(_v28.Header, {
        theme: _v25.themes.dark,
        size: "4",
        children: ["Report: [", _v0 ? (0, _v10.jsx)(_v36, {
          color: _v23.bokehTheme.colors.green["500"],
          children: " Active "
        }) : (0, _v10.jsx)(_v36, {
          color: _v23.bokehTheme.colors.red["500"],
          children: " Inactive "
        }), "]"]
      }), (0, _v10.jsxs)(_v34, {
        children: [(0, _v10.jsx)(_v27.Button, {
          onClick: _v0 ? _v2 : _v1,
          size: "sm",
          children: _v0 ? "Disable" : "Enable"
        }), (0, _v10.jsx)(_v27.Button, {
          disabled: !_v0,
          size: "sm",
          onClick: _v3,
          children: "Save"
        })]
      })]
    });
  }
  let _v42 = ["RTCDataChannel", "RTCInbound", "RTCMediaStreamTrack", "RTCOutbound", "RTCRemoteInbound", "RTCIceCandidatePair"],
    _v43 = ["id", "ssrc", "timestamp"];
  function _v44({
    isRTCStatObserving: _v0,
    stats: _v1,
    onEnable: _v2,
    onDisable: _v3
  }) {
    let _v4 = [];
    return _v1 && (_v1.forEach(_v0 => _v4.push(_v0)), _v4 = _v4.filter(_v0 => _v42.some(_v0 => _v0?.id?.startsWith(_v0)))), (0, _v10.jsxs)(_v32, {
      children: [(0, _v10.jsx)(_v28.Header, {
        theme: _v25.themes.dark,
        size: "4",
        children: "RTC info:"
      }), (0, _v10.jsx)(_v27.Button, {
        onClick: _v0 ? _v3 : _v2,
        size: "sm",
        children: _v0 ? "Stop" : "Start"
      }), _v1 ? _v4.map(_v0 => (0, _v10.jsxs)(_v33, {
        children: [(0, _v10.jsxs)(_v28.Header, {
          theme: _v25.themes.dark,
          size: "5",
          children: [_v0.id, ":"]
        }), Object.entries(_v0).filter(([_v0]) => !_v43.includes(_v0)).map(([_v0, _v1]) => (0, _v10.jsxs)(_v17.Fragment, {
          children: [(0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: [(0, _v10.jsx)(_v36, {
              color: _v23.bokehTheme.colors.green["500"],
              children: _v0
            }), ": ", _v1]
          }), (0, _v10.jsx)("br", {})]
        }, _v0))]
      }, _v0.id)) : null]
    });
  }
  function _v45(_v0) {
    return _v0.split("\n").map((_v0, _v1) => {
      var _v2;
      return (0, _v10.jsxs)(_v17.Fragment, {
        children: [(0, _v10.jsx)(_v36, {
          color: (_v2 = _v0).startsWith("m=") ? _v23.bokehTheme.colors.green["500"] : _v2.startsWith("a=msid") || _v2.startsWith("a=ssrc") ? _v23.bokehTheme.colors.blue["500"] : _v2.startsWith("a=candidate") ? _v23.bokehTheme.colors.yellow["600"] : _v2.startsWith("a=rtpmap") ? _v23.bokehTheme.colors.yellow["200"] : _v23.bokehTheme.colors.white,
          children: _v0
        }), (0, _v10.jsx)("br", {})]
      }, _v1);
    });
  }
  function _v46({
    sdpPair: _v0
  }) {
    let [_v1, _v2] = (0, _v17.useState)(!1),
      _v3 = (0, _v17.useCallback)(() => _v2(!_v1), [_v1]);
    return (0, _v10.jsxs)(_v32, {
      children: [(0, _v10.jsx)(_v28.Header, {
        theme: _v25.themes.dark,
        size: "4",
        children: "SDP session:"
      }), (0, _v10.jsx)(_v27.Button, {
        onClick: _v3,
        size: "sm",
        children: _v1 ? "Hide" : "Show"
      }), _v1 ? (0, _v10.jsxs)(_v10.Fragment, {
        children: [(0, _v10.jsx)("br", {}), (0, _v10.jsx)(_v28.Header, {
          theme: _v25.themes.dark,
          size: "5",
          children: "Local description:"
        }), (0, _v10.jsxs)(_v33, {
          children: [(0, _v10.jsx)(_v29.Text, {
            theme: _v25.themes.dark,
            children: _v0.local ? _v45(_v0.local) : "none"
          }), (0, _v10.jsx)("br", {})]
        }), (0, _v10.jsx)(_v28.Header, {
          theme: _v25.themes.dark,
          size: "5",
          children: "Remote description:"
        }), (0, _v10.jsx)(_v33, {
          children: (0, _v10.jsx)(_v29.Text, {
            theme: _v25.themes.dark,
            children: _v0.remote ? _v45(_v0.remote) : "none"
          })
        })]
      }) : null]
    });
  }
  function _v47({
    rtc: _v0,
    signaling: _v1,
    config: _v2
  }) {
    let [_v3, _v4] = (0, _v17.useState)(!1),
      _v5 = (0, _v17.useCallback)(() => _v4(!_v3), [_v3]);
    return (0, _v10.jsxs)(_v32, {
      children: [(0, _v10.jsx)(_v28.Header, {
        theme: _v25.themes.dark,
        size: "4",
        children: "Connection:"
      }), (0, _v10.jsx)(_v27.Button, {
        onClick: _v5,
        size: "sm",
        children: _v3 ? "Hide" : "Show"
      }), _v3 ? (0, _v10.jsxs)(_v10.Fragment, {
        children: [(0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
          theme: _v25.themes.dark,
          children: [" PN: ", _v1 ? "connected" : "disconnected", " "]
        }), " ", (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
          theme: _v25.themes.dark,
          children: [" RTC: ", _v0, " "]
        }), " ", (0, _v10.jsx)("br", {}), (0, _v10.jsx)("br", {}), (0, _v10.jsx)(_v28.Header, {
          theme: _v25.themes.dark,
          size: "4",
          children: "Config:"
        }), _v2 ? (0, _v10.jsxs)(_v10.Fragment, {
          children: [(0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: [" UUID: ", _v2.uuid, " "]
          }), " ", (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: [" Auth: ", _v2.authKey, " "]
          }), " ", (0, _v10.jsx)("br", {}), (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: [" Publish: ", _v2.publishKey, " "]
          }), " ", (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: [" Subscribe: ", _v2.subscribeKey, " "]
          }), " ", (0, _v10.jsx)("br", {}), (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: [" Discovery: ", _v2.channels.discovery, " "]
          }), " ", (0, _v10.jsx)("br", {}), (0, _v10.jsxs)(_v29.Text, {
            theme: _v25.themes.dark,
            children: [" Connection: ", _v2.channels.connection, " "]
          }), " ", (0, _v10.jsx)("br", {})]
        }) : (0, _v10.jsx)(_v29.Text, {
          theme: _v25.themes.dark,
          children: " Config: loading or corrupted "
        })]
      }) : null]
    });
  }
  var _v48 = _v0.i(0);
  function _v49({
    rtc: _v0,
    info: _v1,
    onDisable: _v2,
    onEnable: _v3
  }) {
    let _v4 = _v0 === _v48.ERTCConnectionState.DISCONNECTED || _v0 === _v48.ERTCConnectionState.NEW,
      _v5 = !_v4 && _v0 !== _v48.ERTCConnectionState.CONNECTED;
    return (0, _v10.jsxs)(_v32, {
      children: [(0, _v10.jsx)(_v28.Header, {
        theme: _v25.themes.dark,
        size: "4",
        children: "Studio info:"
      }), (0, _v10.jsxs)(_v34, {
        children: [(0, _v10.jsx)(_v27.Button, {
          loading: _v5,
          size: "sm",
          status: _v4 ? "negative" : void 0,
          disabled: _v4,
          onClick: _v3,
          children: "Send Activate"
        }), (0, _v10.jsx)(_v27.Button, {
          loading: _v5,
          size: "sm",
          disabled: _v4,
          status: _v4 ? "negative" : void 0,
          onClick: _v2,
          children: "Send Deactivate"
        })]
      }), _v1 ? (0, _v10.jsx)(_v33, {
        children: (0, _v10.jsx)(_v29.Text, {
          theme: _v25.themes.dark,
          children: _v1.replace(/<br\/>/g, "\n").replace(/(<b>)|(<\/b>)/g, "").split("\n").filter(_v0 => _v0.length).map((_v0, _v1) => (0, _v10.jsxs)(_v17.Fragment, {
            children: [(0, _v10.jsx)(_v36, {
              color: _v0.trim().endsWith(":") || _v0.trim().startsWith("[[") ? _v23.bokehTheme.colors.green["500"] : _v23.bokehTheme.colors.white,
              children: _v0
            }), (0, _v10.jsx)("br", {})]
          }, _v1))
        })
      }) : null]
    });
  }
  var _v50 = _v0.i(0),
    _v51 = _v16,
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = ((_v1 = {}).CURRENT_RTC_STATE = "CURRENT_RTC_STATE", _v1.CURRENT_LOCAL_MEDIA = "CURRENT_LOCAL_MEDIA", _v1.CURRENT_STUDIO_SERVICE = "CURRENT_STUDIO_SERVICE", _v1),
    _v55 = ((_v2 = {}).INTERVIEW_JOINED = "INTERVIEW_JOINED", _v2.INTERVIEW_LEFT = "INTERVIEW_LEFT", _v2.MEDIA_ERROR_RECEIVED = "MEDIA_ERROR_RECEIVED", _v2.REMOTE_SHUTDOWN_RECEIVED = "REMOTE_SHUTDOWN_RECEIVED", _v2.AIR_STATUS_CHANGE_RECEIVED = "AIR_STATUS_CHANGE_RECEIVED", _v2.STUDIO_DEBUG_INFO_RECEIVED = "STUDIO_DEBUG_INFO_RECEIVED", _v2.GUEST_VIDEO_RECEIVED = "GUEST_VIDEO_RECEIVED", _v2.GUEST_STREAM_RECEIVED = "GUEST_STREAM_RECEIVED", _v2);
  class _v56 extends _v51.ContextManager {
    static RTC_STATS_CHECK_INTERVAL = 0;
    context = {
      debugActions: (0, _v51.createActions)({
        toggleModalVisibility: () => this.toggleModalVisibility(),
        getCurrentSdpPair: () => this.getCurrentSDPsPair(),
        enableStudioDebugInforming: () => this.enableStudioDebugInforming(),
        disableStudioDebugInforming: () => this.disableStudioDebugInforming(),
        enableRTCStatsObserving: () => this.enableRTCStatsObserving(),
        disableRTCStatsObserving: () => this.disableRTCStatsObserving()
      }),
      isModalEnabled: !1,
      isRTCStatObserving: !1,
      info: null,
      stats: null
    };
    log = new _v53.Logger("🔋DCM");
    statsInterval = null;
    toggleModalVisibility() {
      this.log.info("Toggling debug modal visibility"), this.setContext(({
        isModalEnabled: _v0
      }) => ({
        isModalEnabled: !_v0
      }));
    }
    getCurrentSDPsPair() {
      let _v0 = this.getStudioService();
      return _v0 ? _v0.getCurrentSDPsPair() : {
        local: null,
        remote: null
      };
    }
    enableRTCStatsObserving() {
      this.statsInterval && (0, _v52.unRegisterInterval)(this.statsInterval), this.statsInterval = (0, _v52.registerInterval)(async () => {
        let _v0 = this.getStudioService();
        if (_v0) try {
          let _v0 = await _v0.getRTCStats();
          this.setContext({
            stats: _v0
          });
        } catch (_v0) {
          this.disableRTCStatsObserving();
        }
      }, _v56.RTC_STATS_CHECK_INTERVAL, "studioStats"), this.setContext({
        stats: null,
        isRTCStatObserving: !0
      });
    }
    disableRTCStatsObserving() {
      this.statsInterval && ((0, _v52.unRegisterInterval)(this.statsInterval), this.statsInterval = null), this.setContext({
        stats: null,
        isRTCStatObserving: !1
      });
    }
    enableStudioDebugInforming() {
      let _v0 = this.getStudioService();
      _v0 && this.isRTCModuleChannelConnected() && _v0.sendDataChannelMessage(_v48.EStudioChannel.MODULE_INFO, {
        n: _v48.ERTCCommand.START_DEBUG_INFO
      });
    }
    disableStudioDebugInforming() {
      let _v0 = this.getStudioService();
      _v0 && (this.isRTCModuleChannelConnected() && _v0.sendDataChannelMessage(_v48.EStudioChannel.MODULE_INFO, {
        n: _v48.ERTCCommand.STOP_DEBUG_INFO
      }), this.setContext({
        info: null
      }));
    }
    isRTCModuleChannelConnected() {
      let _v0 = this.getStudioService();
      return !!(_v0 && "open" == _v0.getDataChannelState(_v48.EStudioChannel.MODULE_INFO));
    }
    getStudioService() {
      let {
        data: _v0
      } = this.queryDataSync({
        type: _v54.CURRENT_STUDIO_SERVICE
      });
      return _v0;
    }
    onStudioRemoteDebugInfoReceived(_v0) {
      let {
        data: _v1
      } = _v0;
      this.setContext({
        info: _v1
      });
    }
  }
  (0, _v50._)([(0, _v51.OnSignal)(_v55.STUDIO_DEBUG_INFO_RECEIVED)], _v56.prototype, "onStudioRemoteDebugInfoReceived", null);
  var _v57 = _v16,
    _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  async function _v60(_v0, _v1, {
    jwt: _v2,
    baseUrl: _v3
  }) {
    let _v4 = `${_v3}/guest_sessions/${_v0}/config`;
    _v1 && (_v4 += `?client_id=${_v1}`);
    let _v5 = await fetch(_v4, {
      method: "GET",
      headers: new Headers({
        Authorization: `jwt ${_v2}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    });
    if (_v5.status >= 400) throw Error(`Failed to get interview configuration, status: ${_v5.status}`);
    return (0, _v59.camelize)(await _v5.json());
  }
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0);
  let _v64 = "GI_UN",
    _v65 = "GI_UID",
    _v66 = 64,
    _v67 = 4,
    _v68 = 64,
    _v69 = 500,
    _v70 = 140;
  var _v71 = _v0.i(0),
    _v72 = ((_v3 = {})[_v3.LIMIT = 1] = "LIMIT", _v3[_v3.BLACK_LIST = 3] = "BLACK_LIST", _v3[_v3.UNKNOWN = NaN] = "UNKNOWN", _v3),
    _v73 = ((_v4 = {})[_v4.LOCAL_PREVIEW = 0] = "LOCAL_PREVIEW", _v4[_v4.WAITING_FOR_HOST = 1] = "WAITING_FOR_HOST", _v4[_v4.BROADCAST_PREVIEW = 2] = "BROADCAST_PREVIEW", _v4[_v4.ON_AIR = 3] = "ON_AIR", _v4);
  let _v74 = "live_event_interview",
    _v75 = "leave_interview",
    _v76 = "session_end_alert_modal",
    _v77 = "unable_to_join_modal",
    _v78 = "enable",
    _v79 = "disable",
    _v80 = "dismiss",
    _v81 = () => {
      _v71.FatalAttraction.trackClick({
        container: _v74,
        component: _v75,
        keyword: "guest_left_explicitly"
      });
    },
    _v82 = _v0 => {
      _v71.FatalAttraction.trackClick({
        container: _v74,
        component: "screenshare",
        keyword: _v0 ? "share" : "stop_sharing"
      });
    },
    _v83 = _v0 => {
      _v71.FatalAttraction.trackClick({
        container: _v74,
        component: "camera_audio_settings_modal",
        keyword: _v0 ? "save" : "cancel"
      });
    };
  class _v84 extends _v57.ContextManager {
    context = {
      interviewActions: (0, _v57.createActions)({
        setUsername: _v0 => this.setUsername(_v0),
        joinInterview: () => this.joinInterview(),
        leaveInterview: () => this.leaveInterview()
      }),
      config: null,
      username: "",
      remoteShutdown: null,
      isJoined: !1,
      isOnAir: !1
    };
    log = new _v53.Logger("🎤ICM");
    interviewId = "";
    constructor(_v0) {
      super(), _v0?.sessionId ? (this.log.info("Current guest session:", _v0.sessionId), this.interviewId = _v0.sessionId) : this.log.error("Failed interview session detection:", _v0?.sessionId);
    }
    onProvisionStarted() {
      window.addEventListener("beforeunload", this.onBeforePageUnload), this.isGuestSessionIdValid(this.interviewId) || this.emitSignal({
        type: _v55.MEDIA_ERROR_RECEIVED,
        data: _v61.EMediaError.INVALID_INTERVIEW_LINK
      });
    }
    onProvisionEnded() {
      window.removeEventListener("beforeunload", this.onBeforePageUnload);
    }
    setUsername(_v0) {
      let {
        isJoined: _v1
      } = this.context;
      if (_v1) throw Error("Cannot change username while joined interview.");
      _v0.length < _v66 && this.setContext({
        username: _v0
      });
    }
    async joinInterview() {
      let {
        config: _v0,
        username: _v1
      } = this.context;
      this.log.info("Joining interview as:", _v1), this.setContext({
        isJoined: !0
      }), this.emitSignal({
        type: _v55.INTERVIEW_JOINED,
        data: {
          username: _v1,
          config: _v0
        }
      });
    }
    leaveInterview() {
      let {
        data: _v0
      } = this.queryDataSync({
        type: _v54.CURRENT_RTC_STATE
      });
      this.log.info("Leaving studio interview session."), _v0 === _v48.ERTCConnectionState.CONNECTED && _v81(), this.setContext({
        isJoined: !1,
        remoteShutdown: null,
        isOnAir: !1
      }), this.emitSignal({
        type: _v55.INTERVIEW_LEFT
      });
    }
    isGuestSessionIdValid(_v0) {
      return _v0.length >= _v67 && _v0.length <= _v68;
    }
    onBeforePageUnload() {
      let {
          isJoined: _v0
        } = this.context,
        {
          data: _v1
        } = this.queryDataSync({
          type: _v54.CURRENT_RTC_STATE
        });
      _v0 && _v1 === _v48.ERTCConnectionState.CONNECTED && _v81();
    }
    onRemoteShutdownReceived(_v0) {
      let {
        data: _v1
      } = _v0;
      this.setContext({
        remoteShutdown: _v1
      });
    }
    onAirStatusChangeReceived(_v0) {
      let {
        data: _v1
      } = _v0;
      this.log.info("Received air status:", _v1), this.setContext({
        isOnAir: _v1
      });
    }
    async onViewerReady(_v0) {
      let {
          data: _v1
        } = _v0,
        _v2 = (0, _v58.loadCookie)(_v65),
        _v3 = (_v1 && _v1.user ? _v1.user.name : (0, _v58.loadCookie)(_v64)) || "guest";
      try {
        let _v0 = await _v60(this.interviewId, _v2, {
          jwt: _v1.jwt,
          baseUrl: `https://${_v1.apiUrl}`
        });
        if (this.IS_DISPOSED) return this.log.info("Omit config load result - manager is disposed");
        _v0.uuid && (0, _v58.saveCookie)({
          name: _v65,
          value: _v0.uuid
        }), this.log.info("Session config successfully loaded:", _v0), this.setContext({
          username: _v3,
          config: _v0
        });
      } catch (_v0) {
        this.log.error("Failed to load interview config:", _v0);
      }
    }
  }
  (0, _v50._)([(0, _v62.Bind)()], _v84.prototype, "onBeforePageUnload", null), (0, _v50._)([(0, _v57.OnSignal)(_v55.REMOTE_SHUTDOWN_RECEIVED)], _v84.prototype, "onRemoteShutdownReceived", null), (0, _v50._)([(0, _v57.OnSignal)(_v55.AIR_STATUS_CHANGE_RECEIVED)], _v84.prototype, "onAirStatusChangeReceived", null), (0, _v50._)([(0, _v57.OnSignal)(_v63.VIMEO_VIEWER_READY_CONTEXT_SIGNAL)], _v84.prototype, "onViewerReady", null);
  var _v85 = _v16,
    _v86 = _v0.i(0);
  let _v87 = {
    AUDIO_CAPTURE: {},
    AUDIO_ADVANCED: [{
      autoGainControl: {
        exact: !0
      }
    }, {
      echoCancellation: {
        exact: !0
      }
    }, {
      noiseSuppression: {
        exact: !0
      }
    }, {
      googEchoCancellation: {
        exact: !0
      }
    }, {
      googExperimentalEchoCancellation: {
        exact: !0
      }
    }, {
      googHighpassFilter: {
        exact: !0
      }
    }],
    VIDEO_FPS: {
      ideal: 24,
      max: 30
    },
    VIDEO_HEIGHT: {
      min: 360,
      ideal: 720
    },
    VIDEO_WIDTH: [{
      aspectRatio: {
        exact: 16 / 9
      }
    }, {
      width: {
        min: 640,
        max: 0
      }
    }],
    SCREEN_SHARE_FPS: {
      min: 5,
      ideal: 5,
      max: 5
    },
    SCREEN_SHARE_WIDTH: {
      max: 0
    },
    DISPOSE_TIMEOUT: 250
  };
  var _v88 = _v0.i(0),
    _v89 = _v0.i(0);
  let _v90 = {
      BROWSER: (0, _v88.detectBrowser)(),
      SUPPORT: {
        [_v88.ESupportedBrowser.EDGE_CHROMIUM]: {
          version: "80",
          screenShareVersion: "80"
        },
        [_v88.ESupportedBrowser.CHROME]: {
          version: "69",
          screenShareVersion: "72"
        },
        [_v88.ESupportedBrowser.FIREFOX]: {
          version: "59",
          screenShareVersion: null
        },
        [_v88.ESupportedBrowser.SAFARI]: {
          version: "12.1.1",
          screenShareVersion: null
        }
      },
      get CURRENT_PARAMS() {
        return !!this.BROWSER && (this.SUPPORT[this.BROWSER.name] || !1);
      },
      get IS_SCREENSHARE_SUPPORTED() {
        let _v0 = this.CURRENT_PARAMS;
        return !!_v0 && !!_v0.version && !!_v0.screenShareVersion && (0, _v89.compareVersions)(_v0.screenShareVersion, this.BROWSER.version);
      },
      get IS_BROWSER_SUPPORTED() {
        let _v0 = this.CURRENT_PARAMS;
        return !!_v0 && !!_v0.version && (0, _v89.compareVersions)(_v0.version, this.BROWSER.version);
      }
    },
    _v91 = async _v0 => {
      let _v1 = await window.navigator.mediaDevices.getUserMedia({
          audio: _v92(_v0.activeAudioDeviceId),
          video: _v93(_v0.activeVideoDeviceId)
        }),
        _v2 = _v1.getVideoTracks()[0] || null;
      _v2 && (_v2.contentHint = "motion");
      let _v3 = _v1.getAudioTracks()[0] || null;
      return _v3 && (_v3.contentHint = "speech"), _v1;
    },
    _v92 = _v0 => !!_v0 && (null === _v0 ? null : {
      ..._v87.AUDIO_CAPTURE,
      deviceId: "string" == typeof _v0 ? {
        exact: _v0
      } : "default",
      advanced: _v87.AUDIO_ADVANCED
    }),
    _v93 = _v0 => !!_v0 && (null === _v0 ? null : {
      deviceId: "string" == typeof _v0 ? {
        exact: _v0
      } : "default",
      frameRate: _v87.VIDEO_FPS,
      height: _v87.VIDEO_HEIGHT,
      advanced: _v87.VIDEO_WIDTH
    }),
    _v94 = async () => {
      let _v0 = await window.navigator.mediaDevices.getDisplayMedia({
          video: {
            fps: _v87.SCREEN_SHARE_FPS,
            width: _v87.SCREEN_SHARE_WIDTH
          }
        }),
        _v1 = _v0.getVideoTracks()[0] || null;
      return _v1 && (_v1.contentHint = "detail"), _v0;
    };
  class _v95 extends _v85.ContextManager {
    context = {
      mediaActions: (0, _v85.createActions)({
        startDisplaySharing: () => this.startDisplaySharing(),
        startWebcamStream: () => this.startWebcamStream(),
        stopDisplaySharing: () => this.stopDisplaySharing(),
        setActiveDevices: _v0 => this.setActiveDevices(_v0),
        toggleAudioMute: () => this.toggleAudioMute(),
        toggleVideoMute: () => this.toggleVideoMute()
      }),
      audioDevices: [],
      videoDevices: [],
      activeAudioDeviceId: "",
      activeVideoDeviceId: "",
      audioMuted: !1,
      videoMuted: !1,
      isScreenSharing: !1,
      isLocalAudioLoading: !1,
      isLocalVideoLoading: !1,
      localPreview: new MediaStream(),
      mediaError: null
    };
    log = new _v53.Logger("☄️MCM");
    setMediaError(_v0) {
      return this.setContext({
        mediaError: _v0
      });
    }
    async onProvisionStarted() {
      if (_v90.IS_BROWSER_SUPPORTED) this.log.info("Browser was detected as supported:", _v90.BROWSER), await this.getDefaultMedia(), (0, _v30.addMediaDeviceChangeListener)(this.onRefreshDevices);else {
        var _v0;
        this.log.info("Browser was detected as unsupported:", _v90.BROWSER), _v0 = _v90.BROWSER, _v71.FatalAttraction.trackImpression({
          container: _v74,
          component: "browser_not_supported_alert",
          keyword: _v0 ? _v0.name : "unknown"
        }), this.context.mediaError = _v61.EMediaError.INCOMPATIBLE_BROWSER;
      }
    }
    onProvisionEnded() {
      let {
        localPreview: _v0
      } = this.context;
      _v90.IS_BROWSER_SUPPORTED && (0, _v30.removeMediaDeviceChangeListener)(this.onRefreshDevices), (0, _v30.stopStreamVideoTracks)(_v0);
    }
    async setActiveDevices(_v0) {
      this.setContext(_v0), await this.startWebcamStream();
    }
    async getDefaultMedia() {
      let _v0 = await (0, _v30.getMediaDevices)();
      this.log.info("Got media devices list:", _v0);
      let _v1 = await (0, _v30.isMediaAccessGranted)(_v0);
      if (this.IS_DISPOSED) return this.log.info("Omit default media in manager - manager is disposed");
      try {
        this.log.info("Trying to load default media."), this.setContext({
          isLocalAudioLoading: !0,
          isLocalVideoLoading: !0,
          mediaError: _v1 ? null : _v61.EMediaError.DEVICE_NOT_AVAILABLE
        });
        let _v0 = await _v91({
            activeVideoDeviceId: !0,
            activeAudioDeviceId: !0
          }),
          _v1 = (0, _v86.default)(_v0.getAudioTracks()),
          _v2 = (0, _v86.default)(_v0.getVideoTracks());
        this.log.info("Got default media stream, saving it."), this.setContext({
          activeAudioDeviceId: _v1 ? _v1.getSettings().deviceId : "",
          activeVideoDeviceId: _v2 ? _v2.getSettings().deviceId : "",
          localPreview: _v0,
          isLocalAudioLoading: !1,
          isLocalVideoLoading: !1,
          mediaError: null
        }), this.emitSignal({
          type: _v55.GUEST_STREAM_RECEIVED,
          data: {
            stream: _v0,
            type: _v48.ESourceType.WEBCAM
          }
        });
      } catch (_v0) {
        this.log.error("Failed to get default media stream, error:", _v0), this.setContext({
          mediaError: (0, _v30.getMediaError)(_v0),
          isLocalAudioLoading: !1,
          isLocalVideoLoading: !1
        });
      }
      _v1 || (_v0 = await (0, _v30.getMediaDevices)(), this.log.info("Media devices list updated after permissions granted:", _v0));
      let {
        audioDevices: _v2,
        videoDevices: _v3
      } = _v0;
      _v2.length || _v3.length ? this.setContext({
        audioDevices: _v2,
        videoDevices: _v3
      }) : this.setContext({
        mediaError: _v61.EMediaError.NO_DEVICES
      });
    }
    async toggleAudioMute() {
      var _v0;
      let {
        localPreview: _v1,
        audioMuted: _v2
      } = this.context;
      _v0 = !_v2, _v71.FatalAttraction.trackClick({
        container: _v74,
        component: "microphone",
        keyword: _v0 ? _v78 : _v79
      }), (0, _v30.setStreamAudioState)(_v1, _v2), this.setContext({
        audioMuted: !_v2
      });
    }
    async toggleVideoMute() {
      let {
          localPreview: _v0,
          isScreenSharing: _v1,
          activeVideoDeviceId: _v2,
          videoMuted: _v3,
          mediaError: _v4
        } = this.context,
        _v5 = !_v3;
      if (_v71.FatalAttraction.trackClick({
        container: _v74,
        component: "camera",
        keyword: _v5 ? _v78 : _v79
      }), _v4 === _v61.EMediaError.DEVICE_NOT_AVAILABLE || _v1) return this.setContext({
        videoMuted: _v5
      });
      if (_v5) await this.emitSignal({
        type: _v55.GUEST_VIDEO_RECEIVED,
        data: {
          track: null,
          type: _v48.ESourceType.WEBCAM
        }
      }), this.waitForMillis(_v87.DISPOSE_TIMEOUT).then(() => (0, _v30.stopStreamVideoTracks)(_v0)), this.setContext({
        videoMuted: !0,
        localPreview: (0, _v30.shallowCloneAudioStream)(_v0)
      });else try {
        this.setContext({
          isLocalVideoLoading: !0
        });
        let _v0 = await ((_v0 = "default") => _v91({
            activeAudioDeviceId: !1,
            activeVideoDeviceId: _v0
          }))(_v2),
          _v1 = (0, _v30.getStreamVideoTrack)(_v0),
          {
            localPreview: _v2
          } = this.context,
          _v3 = new MediaStream();
        _v3.addTrack(_v1), _v2.getAudioTracks().forEach(_v0 => _v3.addTrack(_v0)), this.waitForMillis(_v87.DISPOSE_TIMEOUT).then(() => (0, _v30.stopStreamVideoTracks)(_v2)), await this.emitSignal({
          type: _v55.GUEST_VIDEO_RECEIVED,
          data: {
            track: _v1,
            type: _v48.ESourceType.WEBCAM
          }
        }), this.setContext({
          localPreview: _v3,
          videoMuted: !1,
          isLocalVideoLoading: !1
        });
      } catch (_v0) {
        this.setContext({
          mediaError: (0, _v30.getMediaError)(_v0),
          isLocalVideoLoading: !1
        });
      }
    }
    async stopDisplaySharing(_v0) {
      let {
          videoMuted: _v1,
          localPreview: _v2,
          activeVideoDeviceId: _v3,
          isScreenSharing: _v4,
          audioDevices: _v5,
          videoDevices: _v6
        } = this.context,
        _v7 = 0 === _v5.length && 0 === _v6.length;
      if (_v4 && (_v82(!1), this.setContext({
        isScreenSharing: !1
      }), _v2)) {
        let _v0 = (0, _v86.default)(_v2.getVideoTracks());
        if (_v0) {
          if (!_v0 || _v0.id !== _v0.id) return;else _v0.stop(), _v2.removeTrack(_v0);
        } else _v0 && (_v0.stop(), _v2.removeTrack(_v0));
        if (_v1) {
          let _v0 = new MediaStream();
          return _v2.getVideoTracks().forEach(_v0 => _v0.addTrack(_v0)), await this.emitSignal({
            type: _v55.GUEST_VIDEO_RECEIVED,
            data: {
              track: null,
              type: _v48.ESourceType.WEBCAM
            }
          }), this.setContext({
            localPreview: _v0
          });
        }
        if (_v7) return this.setContext({
          mediaError: _v61.EMediaError.NO_DEVICES
        });
        try {
          let _v0 = await _v91({
              activeVideoDeviceId: _v3,
              activeAudioDeviceId: !1
            }),
            _v1 = (0, _v86.default)(_v0.getVideoTracks());
          return _v2.addTrack(_v1), await this.emitSignal({
            type: _v55.GUEST_VIDEO_RECEIVED,
            data: {
              track: _v1,
              type: _v48.ESourceType.WEBCAM
            }
          }), this.setContext({
            mediaError: null
          });
        } catch (_v0) {
          return this.setContext({
            mediaError: (0, _v30.getMediaError)(_v0)
          });
        }
      }
    }
    async startDisplaySharing() {
      _v82(!0);
      try {
        let _v0 = await _v94(),
          {
            localPreview: _v1
          } = this.context;
        if (_v1) {
          let _v0 = new MediaStream(),
            _v1 = (0, _v86.default)(_v0.getVideoTracks());
          _v1.getVideoTracks().forEach(_v0 => {
            _v0.stop(), _v1.removeTrack(_v0);
          }), _v0.addTrack(_v1), _v1.getAudioTracks().forEach(_v0 => _v0.addTrack(_v0)), await this.emitSignal({
            type: _v55.GUEST_VIDEO_RECEIVED,
            data: {
              track: _v1,
              type: _v48.ESourceType.SCREEN
            }
          }), this.setContext({
            isScreenSharing: !0,
            localPreview: _v0,
            mediaError: null
          });
        } else await this.emitSignal({
          type: _v55.GUEST_STREAM_RECEIVED,
          data: {
            stream: _v0,
            type: _v48.ESourceType.SCREEN
          }
        }), this.setContext({
          isScreenSharing: !0,
          localPreview: _v0,
          mediaError: null
        });
        _v0.getTracks().forEach(_v0 => _v0.addEventListener("ended", () => this.stopDisplaySharing(_v0)));
      } catch (_v0) {
        await this.stopDisplaySharing();
      }
    }
    async startWebcamStream() {
      let {
        activeAudioDeviceId: _v0,
        activeVideoDeviceId: _v1,
        audioMuted: _v2,
        videoMuted: _v3,
        isScreenSharing: _v4,
        audioDevices: _v5,
        videoDevices: _v6
      } = this.context;
      if (0 === _v5.length && 0 === _v6.length) return this.setContext({
        mediaError: _v61.EMediaError.NO_DEVICES
      });
      try {
        this.setContext({
          isLocalVideoLoading: !0,
          isLocalAudioLoading: !0
        });
        let _v0 = await _v91({
          activeAudioDeviceId: _v0,
          activeVideoDeviceId: !_v4 && !_v3 && _v1
        });
        (0, _v30.setStreamAudioState)(_v0, !_v2);
        let {
            localPreview: _v1
          } = this.context,
          _v2 = (0, _v30.mergeStreams)(_v0, _v1);
        await this.emitSignal({
          type: _v55.GUEST_STREAM_RECEIVED,
          data: {
            stream: _v2,
            type: _v4 ? _v48.ESourceType.SCREEN : _v48.ESourceType.WEBCAM
          }
        }), this.setContext({
          localPreview: _v2,
          mediaError: null,
          isLocalVideoLoading: !1,
          isLocalAudioLoading: !1
        });
      } catch (_v0) {
        let {
          localPreview: _v1
        } = this.context;
        _v1 && (_v1.getTracks().forEach(_v0 => _v0.stop()), await this.emitSignal({
          type: _v55.GUEST_STREAM_RECEIVED,
          data: {
            stream: null,
            type: _v48.ESourceType.WEBCAM
          }
        })), this.setContext({
          localPreview: new MediaStream(),
          isScreenSharing: !1,
          isLocalAudioLoading: !1,
          isLocalVideoLoading: !1,
          mediaError: (0, _v30.getMediaError)(_v0)
        });
      }
    }
    waitForMillis(_v0) {
      return new Promise(_v0 => window.setTimeout(_v0, _v0));
    }
    async onRefreshDevices() {
      try {
        let {
          audioDevices: _v0,
          videoDevices: _v1
        } = await (0, _v30.getMediaDevices)();
        this.setContext({
          audioDevices: _v0,
          videoDevices: _v1
        });
      } catch (_v0) {}
    }
    onCurrentLocalMediaQueries() {
      let {
        isScreenSharing: _v0,
        localPreview: _v1
      } = this.context;
      return {
        isScreenSharing: _v0,
        localPreview: _v1
      };
    }
  }
  (0, _v50._)([(0, _v62.BoundThrottled)(500, !0)], _v95.prototype, "toggleAudioMute", null), (0, _v50._)([(0, _v62.BoundThrottled)(500, !0)], _v95.prototype, "toggleVideoMute", null), (0, _v50._)([(0, _v62.BoundDebounced)(0)], _v95.prototype, "onRefreshDevices", null), (0, _v50._)([(0, _v85.OnQuery)(_v54.CURRENT_LOCAL_MEDIA)], _v95.prototype, "onCurrentLocalMediaQueries", null);
  var _v96 = _v16,
    _v97 = _v48,
    _v98 = _v48;
  class _v99 extends _v98.RTCTransfer {
    static DESIRED_OPUS_CONFIG = "a=fmtp:111 maxplaybackrate=22050; sprop-maxcapturerate=22050;maxaveragebitrate=56000; stereo=0; useinbandfec=1; minptime=4";
    guestName;
    constructor(_v0) {
      super(), this.guestName = _v0;
    }
    async start(_v0) {
      await super.start(_v0), setTimeout(() => this.updateSenders(), 50);
    }
    async setRemoteSDPOffer(_v0, _v1) {
      await super.setRemoteSDPOffer(_v0, _v1), setTimeout(() => this.updateSenders(), 50);
    }
    getCurrentSDPsPair() {
      return this.webRtcPeer ? {
        local: this.webRtcPeer.localDescription?.sdp || null,
        remote: this.webRtcPeer.remoteDescription?.sdp || null
      } : {
        local: null,
        remote: null
      };
    }
    onSendConnectionSourcesInfo() {
      if (this.currentConnectionMediaSources.length > 0) super.onSendConnectionSourcesInfo();else {
        let _v0 = [{
          id: _v98.ESourceId.WEBCAM_0,
          type: _v98.ESourceType.WEBCAM,
          name: this.guestName,
          audioTrackMid: _v98.NONE,
          videoTrackMid: _v98.NONE
        }];
        this.sendDataChannelMessage(_v98.EStudioChannel.MODULE_INFO, {
          n: _v98.ERTCCommand.TRACKS_INFO,
          sources: _v0
        });
      }
    }
    onLocalSDPGenerated(_v0) {
      return _v0.sdp = _v0.sdp.replace(/^a=fmtp:111.*$/gm, _v99.DESIRED_OPUS_CONFIG), _v0;
    }
    async updateSenders() {
      this.webRtcPeer?.getSenders().forEach(_v0 => {
        try {
          if (_v0.track) {
            let _v0 = _v0.getParameters(),
              _v1 = "audio" === _v0.track.kind ? "high" : "low";
            if (_v0.encodings) for (let _v0 of _v0.encodings) _v0.priority = _v1, _v0.networkPriority = _v1;
            _v0.setParameters(_v0);
          }
        } catch (_v0) {
          this.log.error("Senders update failed:", _v0);
        }
      });
    }
  }
  class _v100 extends _v97.AbstractStudioService {
    static generateDescriptorsFromStream(_v0, _v1) {
      let _v2 = [];
      return _v0 && (_v2 = _v100.modifyDescriptorsBundle(_v2, {
        track: (0, _v30.getStreamVideoTrack)(_v0),
        kind: "video",
        ..._v1
      }), _v2 = _v100.modifyDescriptorsBundle(_v2, {
        track: (0, _v30.getStreamAudioTrack)(_v0),
        kind: "audio",
        ..._v1
      })), _v2;
    }
    static modifyDescriptorsBundle(_v0, {
      groupId: _v1,
      sourceType: _v2,
      kind: _v3,
      track: _v4,
      name: _v5
    }) {
      let _v6 = _v0.find(_v0 => _v0.groupId === _v1 && _v0.track.kind === _v3);
      return _v4 ? _v6 && _v4 !== _v6.track ? (_v6.track.stop(), _v6.track = _v4, _v6.type = _v2, _v6.name = _v5, _v0) : _v6 ? _v0 : _v0.concat({
        groupId: _v1,
        track: _v4,
        name: _v5,
        type: _v2
      }) : _v0.filter(_v0 => _v0.groupId !== _v1 || _v0.track.kind !== _v3);
    }
    channels = [_v97.EStudioChannel.MODULE_INFO, _v97.EStudioChannel.MODULE_DEBUG_INFO];
    getCurrentSDPsPair() {
      return this.dataTransfer.getCurrentSDPsPair();
    }
    stopRTCConnection() {
      this.dataTransfer.stop();
    }
    async setWebcamAudioTrack(_v0, _v1) {
      let {
        name: _v2,
        type: _v3
      } = this.signaling.config;
      try {
        await this.setMediaTracks(_v100.modifyDescriptorsBundle(this.getMediaTracks(), {
          sourceType: _v1,
          track: _v0,
          kind: "audio",
          name: _v2 || _v3,
          groupId: _v97.ESourceId.WEBCAM_0
        }));
      } catch (_v0) {}
    }
    async setWebcamVideoTrack(_v0, _v1) {
      let {
        name: _v2,
        type: _v3
      } = this.signaling.config;
      try {
        await this.setMediaTracks(_v100.modifyDescriptorsBundle(this.getMediaTracks(), {
          sourceType: _v1,
          track: _v0,
          kind: "video",
          name: _v2 || _v3,
          groupId: _v97.ESourceId.WEBCAM_0
        }));
      } catch (_v0) {}
    }
    async setWebcamTracksGroupFromStream(_v0, _v1) {
      let {
        name: _v2,
        type: _v3
      } = this.signaling.config;
      try {
        await this.setMediaTracks(_v100.generateDescriptorsFromStream(_v0, {
          sourceType: _v1,
          name: _v2 || _v3,
          groupId: _v97.ESourceId.WEBCAM_0
        }));
      } catch (_v0) {}
    }
    initializeServices(_v0, _v1) {
      this.signaling = new _v97.PubNubSignaling(_v0, _v1), this.dataTransfer = new _v99(_v1.name || _v1.type);
    }
  }
  class _v101 extends _v96.ContextManager {
    static MESSAGE_HISTORY_LIMIT = 500;
    static RTC_DISCONNECT_TIMEOUT = 0;
    context = {
      studioActions: (0, _v96.createActions)({
        sendChatMessage: _v0 => this.sendChatMessage(_v0)
      }),
      rtc: _v48.ERTCConnectionState.NEW,
      signaling: !1,
      chatMessagesHistory: [],
      studioPreview: null
    };
    log = new _v53.Logger("🎸SCM");
    studioService = null;
    rtcTimeout = null;
    constructor() {
      super(), (0, _v48.setRTCLogger)(_v53.Logger);
    }
    async startStudioConnection(_v0, _v1) {
      let {
          data: {
            isScreenSharing: _v2,
            localPreview: _v3
          }
        } = this.queryDataSync({
          type: _v54.CURRENT_LOCAL_MEDIA
        }),
        {
          uuid: _v4,
          authKey: _v5,
          publishKey: _v6,
          subscribeKey: _v7,
          channels: {
            discovery: _v8,
            connection: _v9
          }
        } = _v1;
      (0, _v58.saveCookie)({
        name: _v64,
        value: _v0
      }), this.studioService = new _v100(_v4, {
        authKey: _v5,
        publishKey: _v6,
        subscribeKey: _v7,
        connectionChannel: _v9,
        discoveryChannel: _v8,
        name: _v0,
        type: _v48.EConnectionType.GUEST
      }, {
        onRemoteTracksReceived: this.onRemoteTracksReceived.bind(this),
        onChannelMessage: this.onRemoteDataChannelMessage.bind(this),
        onShutdownReceived: this.onRemoteShutdown.bind(this),
        onSignalingStatusChanged: this.onRemoteSignalingConnectionStateChanged.bind(this),
        onRTCConnectionStateChanged: this.onRemoteRTCConnectionStateChanged.bind(this),
        onChatMessageReceived: this.onRemoteChatMessageReceived.bind(this)
      }), await this.studioService.start(_v100.generateDescriptorsFromStream(_v3, {
        sourceType: _v2 ? _v48.ESourceType.SCREEN : _v48.ESourceType.WEBCAM,
        name: _v0,
        groupId: _v48.ESourceId.WEBCAM_0
      })), this.log.info("Initialized studio connection, user:", _v0);
    }
    stopStudioConnection() {
      this.studioService && (this.studioService.onRTCConnectionStateChanged = () => {}, this.studioService.onSignalingStatusChanged = () => {}, this.studioService.destroy(), this.setContext({
        rtc: _v48.ERTCConnectionState.NEW,
        signaling: !1
      }), this.clearRTCTimeout()), this.log.info("Stopped studio connection."), this.setContext({
        studioPreview: null,
        chatMessagesHistory: []
      });
    }
    async setGuestStream(_v0, _v1) {
      this.studioService && (await this.studioService.setWebcamTracksGroupFromStream(_v0, _v1));
    }
    async setGuestAudio(_v0, _v1) {
      this.studioService && (await this.studioService.setWebcamAudioTrack(_v0, _v1));
    }
    async setGuestVideo(_v0, _v1) {
      this.studioService && (await this.studioService.setWebcamVideoTrack(_v0, _v1));
    }
    onProvisionEnded() {
      this.log.info("Provision of studio store ended, killing connection."), this.studioService && this.stopStudioConnection();
    }
    checkRTCTimeout(_v0, _v1) {
      _v1 === _v48.ERTCConnectionState.DISCONNECTED || _v1 === _v48.ERTCConnectionState.FAILED || _v1 === _v48.ERTCConnectionState.CONNECTING || _v1 === _v48.ERTCConnectionState.CLOSED ? (this.clearRTCTimeout(), this.rtcTimeout = window.setTimeout(() => {
        this.log.info(`Received information about bad connection: ${_v0}-${_v1}.`), this.studioService && (this.log.info("Stop RTC connection, could not satisfy timeout limit."), _v71.FatalAttraction.trackEvent({
          container: _v74,
          component: _v75,
          keyword: "guest_disconnected_and_couldnt_reconnect_within_10_seconds"
        }), this.studioService.stopRTCConnection(), this.setContext({
          rtc: _v48.ERTCConnectionState.NEW,
          studioPreview: null
        }));
      }, _v101.RTC_DISCONNECT_TIMEOUT)) : this.rtcTimeout && (this.log.info(`Connection stabilized: ${_v0}-${_v1}.`), this.clearRTCTimeout());
    }
    clearRTCTimeout() {
      this.rtcTimeout && (window.clearTimeout(this.rtcTimeout), this.rtcTimeout = null);
    }
    async sendChatMessage(_v0) {
      if (!this.studioService) throw Error("Cannot send message. Studio connection was not initialized.");
      await this.studioService.sendChatMessage(_v0);
    }
    onRemoteSignalingConnectionStateChanged(_v0) {
      this.setContext({
        signaling: _v0
      });
    }
    onRemoteRTCConnectionStateChanged(_v0) {
      let {
        rtc: _v1
      } = this.context;
      _v0 === _v48.ERTCConnectionState.DISCONNECTED && _v71.FatalAttraction.trackEvent({
        container: _v74,
        component: _v75,
        keyword: "guest_disconnected"
      }), this.setContext({
        rtc: _v0
      }), this.checkRTCTimeout(_v1, _v0);
    }
    onRemoteChatMessageReceived(_v0, _v1) {
      let {
        chatMessagesHistory: _v2
      } = this.context;
      _v2.length > _v101.MESSAGE_HISTORY_LIMIT ? this.setContext({
        chatMessagesHistory: _v2.slice(Math.floor(.1 * _v101.MESSAGE_HISTORY_LIMIT)).concat({
          message: _v0,
          details: _v1
        })
      }) : this.setContext({
        chatMessagesHistory: _v2.concat({
          message: _v0,
          details: _v1
        })
      });
    }
    onRemoteTracksReceived(_v0) {
      let _v1 = Object.values(_v0).find(_v0 => _v0.type === _v48.ESourceType.PROGRAM);
      if (!_v1.video || !_v1.audio) return this.setContext({
        studioPreview: null
      });
      let _v2 = new MediaStream();
      _v2.addTrack(_v1.video.track), _v2.addTrack(_v1.audio.track), this.setContext({
        studioPreview: _v2
      });
    }
    onRemoteDataChannelMessage(_v0, _v1) {
      switch (_v1.n) {
        case _v48.ERTCCommand.VISIBILITY_CHANGED:
          this.emitSignal({
            type: _v55.AIR_STATUS_CHANGE_RECEIVED,
            data: _v1.air
          });
          break;
        case _v48.ERTCCommand.DEBUG_INFO:
          this.emitSignal({
            type: _v55.STUDIO_DEBUG_INFO_RECEIVED,
            data: _v1.info
          });
      }
    }
    onRemoteShutdown(_v0, _v1) {
      let _v2 = Number.parseInt(_v0, 10);
      switch (_v2) {
        case _v72.BLACK_LIST:
          _v71.FatalAttraction.trackImpression({
            container: _v74,
            component: _v76
          });
          break;
        case _v72.LIMIT:
          _v71.FatalAttraction.trackImpression({
            container: _v74,
            component: _v77
          });
      }
      this.log.info("Received shutdown from remote connection.", _v2, _v1), this.stopStudioConnection(), this.emitSignal({
        type: _v55.REMOTE_SHUTDOWN_RECEIVED,
        data: _v2
      });
    }
    onRTCStateQueries() {
      return this.context.rtc;
    }
    onCurrentStudioServiceQueried() {
      return this.studioService;
    }
    onGuestVideoReceived(_v0) {
      let {
        data: {
          track: _v1,
          type: _v2
        }
      } = _v0;
      return this.setGuestVideo(_v1, _v2);
    }
    onGuestStreamReceived(_v0) {
      let {
        data: {
          stream: _v1,
          type: _v2
        }
      } = _v0;
      return this.setGuestStream(_v1, _v2);
    }
    onInterviewJoined(_v0) {
      let {
        data: {
          username: _v1,
          config: _v2
        }
      } = _v0;
      this.startStudioConnection(_v1, _v2);
    }
    onInterviewLeft() {
      this.stopStudioConnection();
    }
  }
  (0, _v50._)([(0, _v96.OnQuery)(_v54.CURRENT_RTC_STATE)], _v101.prototype, "onRTCStateQueries", null), (0, _v50._)([(0, _v96.OnQuery)(_v54.CURRENT_STUDIO_SERVICE)], _v101.prototype, "onCurrentStudioServiceQueried", null), (0, _v50._)([(0, _v96.OnSignal)(_v55.GUEST_VIDEO_RECEIVED)], _v101.prototype, "onGuestVideoReceived", null), (0, _v50._)([(0, _v96.OnSignal)(_v55.GUEST_STREAM_RECEIVED)], _v101.prototype, "onGuestStreamReceived", null), (0, _v50._)([(0, _v96.OnSignal)(_v55.INTERVIEW_JOINED)], _v101.prototype, "onInterviewJoined", null), (0, _v50._)([(0, _v96.OnSignal)(_v55.INTERVIEW_LEFT)], _v101.prototype, "onInterviewLeft", null);
  let _v102 = _v22.default.div.withConfig({
    displayName: "DebugModal__DebugModalWrapper",
    componentId: "sc-2ac90024-0"
  })`
  padding: ${(0, _v21.rem)(20)};
  background: ${_v23.bokehTheme.colors.gray["700"]};
  min-width: ${(0, _v21.rem)(600)};
  max-height: ${(0, _v21.rem)(600)};
  overflow-y: auto;
`;
  function _v103({
    interviewContext: {
      config: _v0
    } = (0, _v16.useManager)(_v84),
    studioContext: {
      studioPreview: _v1,
      rtc: _v2,
      signaling: _v3
    } = (0, _v16.useManager)(_v101),
    studioDebugContext: {
      isModalEnabled: _v4,
      info: _v5,
      isRTCStatObserving: _v6,
      stats: _v7,
      debugActions: _v8
    } = (0, _v16.useManager)(_v56),
    debugContext: {
      debugActions: _v9,
      isFileLoggingEnabled: _v10
    } = (0, _v16.useManager)(_v20.DebugControlManager),
    mediaContext: {
      isScreenSharing: _v11,
      activeAudioDeviceId: _v12,
      activeVideoDeviceId: _v13,
      audioMuted: _v14,
      videoMuted: _v15,
      localPreview: _v16
    } = (0, _v16.useManager)(_v95)
  }) {
    let _v17 = (0, _v17.useCallback)(() => {
        _v9.setFileReporting(!1);
      }, []),
      _v18 = (0, _v17.useCallback)(() => {
        _v9.setFileReporting(!0);
      }, []);
    return (0, _v10.jsx)(_v24.Modal, {
      size: "lg",
      active: _v4,
      content: (0, _v10.jsxs)(_v102, {
        children: [(0, _v10.jsxs)(_v35, {
          theme: _v25.themes.dark,
          size: "5",
          children: ["Last update: ", new Date().toLocaleString()]
        }), (0, _v10.jsx)(_v37, {
          onClick: _v8.toggleModalVisibility
        }), _v4 ? (0, _v10.jsxs)(_v10.Fragment, {
          children: [(0, _v10.jsx)(_v41, {
            enabled: _v10,
            onEnable: _v18,
            onDisable: _v17,
            onSave: _v9.saveReportFile
          }), (0, _v10.jsx)(_v47, {
            signaling: _v3,
            rtc: _v2,
            config: _v0
          }), (0, _v10.jsx)(_v40, {
            audioDeviceId: _v12,
            videoDeviceId: _v13,
            isScreenSharing: _v11,
            audioMuted: _v14,
            videoMuted: _v15,
            localPreview: _v16,
            remotePreview: _v1
          }), (0, _v10.jsx)(_v46, {
            sdpPair: _v8.getCurrentSdpPair()
          }), (0, _v10.jsx)(_v44, {
            isRTCStatObserving: _v6,
            stats: _v7,
            onEnable: _v8.enableRTCStatsObserving,
            onDisable: _v8.disableRTCStatsObserving
          }), (0, _v10.jsx)(_v49, {
            rtc: _v2,
            info: _v5,
            onDisable: _v8.disableStudioDebugInforming,
            onEnable: _v8.enableStudioDebugInforming
          })]
        }) : null, (0, _v10.jsx)(_v26.Link, {
          href: "chrome://webrtc-internals/",
          children: " chrome://webrtc-internals/ "
        })]
      })
    });
  }
  var _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0);
  let _v107 = {
    addYourNameToJoinAsAGuest: (0, _v106.translate)({
      singular: "Add your name to join as a guest",
      dictionary: {
        es: {
          singular: "Agrega tu nombre para unirte como invitado"
        },
        "de-DE": {
          singular: "Gib deinen Namen ein, um als Gast beizutreten."
        },
        "fr-FR": {
          singular: "Ajoutez votre nom pour rejoindre l'entretien en tant qu'invité"
        },
        "ja-JP": {
          singular: "名前を追加しゲストとして参加"
        },
        "ko-KR": {
          singular: "게스트로 참여하려면 이름을 입력하세요"
        },
        "pt-BR": {
          singular: "Insira seu nome para participar como convidado"
        },
        "zh-CN": {
          singular: "添加您的姓名，以嘉宾身份加入"
        }
      }
    }),
    audio: (0, _v106.translate)({
      singular: "Audio",
      dictionary: {
        "ja-JP": {
          singular: "オーディオ"
        },
        "ko-KR": {
          singular: "오디오"
        },
        "pt-BR": {
          singular: "Áudio"
        },
        "zh-CN": {
          singular: "音频"
        }
      }
    }),
    broadcastPreview: (0, _v106.translate)({
      singular: "Broadcast preview",
      dictionary: {
        es: {
          singular: "Vista previa de transmisión"
        },
        "de-DE": {
          singular: "Übertragungsvorschau"
        },
        "fr-FR": {
          singular: "Aperçu de la diffusion"
        },
        "ja-JP": {
          singular: "放送のプレビュー"
        },
        "ko-KR": {
          singular: "방송 미리 보기"
        },
        "pt-BR": {
          singular: "Transmitir pré-visualização"
        },
        "zh-CN": {
          singular: "广播预览"
        }
      }
    }),
    camera: (0, _v106.translate)({
      singular: "Camera",
      dictionary: {
        es: {
          singular: "Cámara"
        },
        "de-DE": {
          singular: "Kamera"
        },
        "fr-FR": {
          singular: "Caméra"
        },
        "ja-JP": {
          singular: "カメラ"
        },
        "ko-KR": {
          singular: "카메라"
        },
        "pt-BR": {
          singular: "Câmera"
        },
        "zh-CN": {
          singular: "摄像头"
        }
      }
    }),
    chat: (0, _v106.translate)({
      singular: "Chat",
      dictionary: {
        "fr-FR": {
          singular: "Discussion"
        },
        "ja-JP": {
          singular: "チャット"
        },
        "ko-KR": {
          singular: "채팅"
        },
        "zh-CN": {
          singular: "聊天"
        }
      }
    }),
    host: (0, _v106.translate)({
      singular: "Host",
      dictionary: {
        es: {
          singular: "Anfitrión"
        },
        "fr-FR": {
          singular: "Hôte"
        },
        "ja-JP": {
          singular: "ホスティング"
        },
        "ko-KR": {
          singular: "호스팅"
        },
        "pt-BR": {
          singular: "Hospede"
        },
        "zh-CN": {
          singular: "主持人"
        }
      }
    }),
    leave: (0, _v106.translate)({
      singular: "Leave",
      dictionary: {
        es: {
          singular: "Salir"
        },
        "de-DE": {
          singular: "Schließen"
        },
        "fr-FR": {
          singular: "Quitter"
        },
        "ja-JP": {
          singular: "退出"
        },
        "ko-KR": {
          singular: "종료"
        },
        "pt-BR": {
          singular: "Sair"
        },
        "zh-CN": {
          singular: "离开"
        }
      }
    }),
    joinEvent: (0, _v106.translate)({
      singular: "Join event",
      dictionary: {
        es: {
          singular: "Unirse al evento"
        },
        "de-DE": {
          singular: "Event beitreten"
        },
        "fr-FR": {
          singular: "Rejoindre l'événement"
        },
        "ja-JP": {
          singular: "イベントに参加"
        },
        "ko-KR": {
          singular: "이벤트 참여"
        },
        "pt-BR": {
          singular: "Participar do evento"
        },
        "zh-CN": {
          singular: "加入活动"
        }
      }
    }),
    localPreview: (0, _v106.translate)({
      singular: "Local preview",
      dictionary: {
        es: {
          singular: "Vista previa local"
        },
        "de-DE": {
          singular: "Lokale Vorschau"
        },
        "fr-FR": {
          singular: "Aperçu local"
        },
        "ja-JP": {
          singular: "ローカルプレビュー"
        },
        "ko-KR": {
          singular: "현위치 미리 보기 화면"
        },
        "pt-BR": {
          singular: "Visualização local"
        },
        "zh-CN": {
          singular: "本地预览"
        }
      }
    }),
    noMessagesYet: (0, _v106.translate)({
      singular: "No messages yet.",
      dictionary: {
        es: {
          singular: "Aún no hay mensajes."
        },
        "de-DE": {
          singular: "Keine Nachrichten vorhanden."
        },
        "fr-FR": {
          singular: "Aucun message."
        },
        "ja-JP": {
          singular: "メッセージはありません。"
        },
        "ko-KR": {
          singular: "아직 메시지가 없습니다."
        },
        "pt-BR": {
          singular: "Ainda não há mensagens."
        },
        "zh-CN": {
          singular: "暂无消息。"
        }
      }
    }),
    onAir: (0, _v106.translate)({
      singular: "ON AIR",
      dictionary: {
        es: {
          singular: "AL AIRE"
        },
        "de-DE": {
          singular: "AUF SENDUNG"
        },
        "fr-FR": {
          singular: "EN DIRECT"
        },
        "ja-JP": {
          singular: "オンエアー"
        },
        "ko-KR": {
          singular: "방송 중"
        },
        "pt-BR": {
          singular: "NO AR"
        },
        "zh-CN": {
          singular: "正在播出"
        }
      }
    }),
    okay: (0, _v106.translate)({
      singular: "Okay",
      dictionary: {
        es: {
          singular: "Bueno"
        },
        "fr-FR": {
          singular: "D'accord"
        },
        "ja-JP": {
          singular: "OK"
        },
        "ko-KR": {
          singular: "확인"
        },
        "pt-BR": {
          singular: "OK"
        },
        "zh-CN": {
          singular: "好"
        }
      }
    }),
    save: (0, _v106.translate)({
      singular: "Save",
      dictionary: {
        es: {
          singular: "Guardar"
        },
        "de-DE": {
          singular: "Speichern"
        },
        "fr-FR": {
          singular: "Enregistrer"
        },
        "ja-JP": {
          singular: "保存"
        },
        "ko-KR": {
          singular: "저장"
        },
        "pt-BR": {
          singular: "Salvar"
        },
        "zh-CN": {
          singular: "保存"
        }
      }
    }),
    settings: (0, _v106.translate)({
      singular: "Settings",
      dictionary: {
        es: {
          singular: "Configuración"
        },
        "de-DE": {
          singular: "Einstellungen"
        },
        "fr-FR": {
          singular: "Paramètres"
        },
        "ja-JP": {
          singular: "設定"
        },
        "ko-KR": {
          singular: "설정"
        },
        "pt-BR": {
          singular: "Configurações"
        },
        "zh-CN": {
          singular: "设置"
        }
      }
    }),
    shareScreen: (0, _v106.translate)({
      singular: "Share screen",
      dictionary: {
        es: {
          singular: "Compartir pantalla"
        },
        "de-DE": {
          singular: "Bildschirm teilen"
        },
        "fr-FR": {
          singular: "Partager l'écran"
        },
        "ja-JP": {
          singular: "画面の共有"
        },
        "ko-KR": {
          singular: "스크린 공유"
        },
        "pt-BR": {
          singular: "Compartilhar tela"
        },
        "zh-CN": {
          singular: "共享屏幕"
        }
      }
    }),
    shutdowns: {
      blackListed: {
        title: (0, _v106.translate)({
          singular: "Session ended by host",
          dictionary: {
            es: {
              singular: "Sesión finalizada por el anfitrión"
            },
            "de-DE": {
              singular: "Session wurde vom Host beendet"
            },
            "fr-FR": {
              singular: "L'hôte a mis fin à la session"
            },
            "ja-JP": {
              singular: "主催者によって終了されたセッション"
            },
            "ko-KR": {
              singular: "진행자가 세션을 종료함"
            },
            "pt-BR": {
              singular: "Sessão encerrada pelo host"
            },
            "zh-CN": {
              singular: "主持人结束了会话"
            }
          }
        }),
        description: (0, _v106.translate)({
          singular: "The host of the interview has ended your session.",
          dictionary: {
            es: {
              singular: "El anfitrión de la entrevista finalizó tu sesión."
            },
            "de-DE": {
              singular: "Der Host des Interviews hat deine Session beendet"
            },
            "fr-FR": {
              singular: "L'hôte de l'entretien a mis fin à votre session."
            },
            "ja-JP": {
              singular: "インタビューの主催者がセッションを終了しました。"
            },
            "ko-KR": {
              singular: "인터뷰 진행자가 세션을 종료했습니다."
            },
            "pt-BR": {
              singular: "O host da entrevista terminou sua sessão."
            },
            "zh-CN": {
              singular: "访谈主持人结束了您的会话。"
            }
          }
        })
      },
      limit: {
        title: (0, _v106.translate)({
          singular: "Unable to join",
          dictionary: {
            es: {
              singular: "No puedes unirte"
            },
            "de-DE": {
              singular: "Teilnahme nicht möglich"
            },
            "fr-FR": {
              singular: "Connexion impossible"
            },
            "ja-JP": {
              singular: "参加できません"
            },
            "ko-KR": {
              singular: "참여할 수 없음"
            },
            "pt-BR": {
              singular: "Não foi possível participar"
            },
            "zh-CN": {
              singular: "无法加入"
            }
          }
        }),
        description: (0, _v106.translate)({
          singular: "This interview is at its maximum number of guests. To join, contact the host.",
          dictionary: {
            es: {
              singular: "Esta entrevista tiene el máximo de invitados permitidos. Para unirte, ponte en contacto con el anfitrión."
            },
            "de-DE": {
              singular: "Die Höchstzahl an Gästen für dieses Interview wurde bereits erreicht. Nimm bitte Kontakt zum Host auf, um beizutreten."
            },
            "fr-FR": {
              singular: "L'entretien a atteint le nombre maximum de participants. Pour le rejoindre, contactez l'organisateur."
            },
            "ja-JP": {
              singular: "このインタビューは最大ゲスト数に達しました。参加するには主催者にお問い合わせください。"
            },
            "ko-KR": {
              singular: "인터뷰에 참여할 수 있는 최대 게스트 수에 도달했습니다. 참여하려면 진행자에게 문의하세요."
            },
            "pt-BR": {
              singular: "Esta entrevista está no seu número máximo de convidados. Para participar, entre em contato com o host."
            },
            "zh-CN": {
              singular: "此访谈的嘉宾人数已达到上限。如需加入，请联系主持人。"
            }
          }
        })
      },
      unknown: {
        title: (0, _v106.translate)({
          singular: "Removed from session",
          dictionary: {
            es: {
              singular: "Eliminado de la sesión"
            },
            "de-DE": {
              singular: "Aus Session entfernt"
            },
            "fr-FR": {
              singular: "Retiré(e) de la session"
            },
            "ja-JP": {
              singular: "セッションから外れました"
            },
            "ko-KR": {
              singular: "세션에서 제거됨"
            },
            "pt-BR": {
              singular: "Removido da sessão"
            },
            "zh-CN": {
              singular: "已从会话中移除"
            }
          }
        }),
        description: (0, _v106.translate)({
          singular: "Seems like host removed you from live interview session. Please, contact host about details.",
          dictionary: {
            es: {
              singular: "Parece que el anfitrión te eliminó de la sesión de entrevista en vivo. Ponte en contacto con el anfitrión para obtener más información."
            },
            "de-DE": {
              singular: "Scheinbar hat dich der Host aus der Live-Interview-Session entfernt. Bitte nimmt Kontakt zum Host auf, um weitere Informationen zu erhalten."
            },
            "fr-FR": {
              singular: "Il semblerait que l'hôte vous a retiré(e) de la session d'entretien en direct. Veuillez contacter l'hôte pour en savoir plus."
            },
            "ja-JP": {
              singular: "主催者がライブインタビューのセッションからあなたを外したようです。詳細については主催者にご連絡ください。"
            },
            "ko-KR": {
              singular: "진행자가 실시간 인터뷰 세션에서 회원님을 제거했습니다. 자세한 사항은 진행자에게 문의하세요."
            },
            "pt-BR": {
              singular: "Parece que o host o removeu da sessão de entrevista ao vivo. Por favor, entre em contato com o host sobre os detalhes."
            },
            "zh-CN": {
              singular: "主持人似乎将您移出了现场访谈会话。请联系主持人了解详情。"
            }
          }
        })
      }
    },
    stopSharing: (0, _v106.translate)({
      singular: "Stop sharing",
      dictionary: {
        es: {
          singular: "Dejar de compartir"
        },
        "de-DE": {
          singular: "Nicht mehr teilen"
        },
        "fr-FR": {
          singular: "Arrêter le partage"
        },
        "ja-JP": {
          singular: "共有を停止"
        },
        "ko-KR": {
          singular: "공유 중지"
        },
        "pt-BR": {
          singular: "Parar compartilhamento"
        },
        "zh-CN": {
          singular: "停止共享"
        }
      }
    }),
    typeMessage: (0, _v106.translate)({
      singular: "Type a message",
      dictionary: {
        es: {
          singular: "Escribe un mensaje"
        },
        "de-DE": {
          singular: "Nachricht eingeben"
        },
        "fr-FR": {
          singular: "Saisir un message"
        },
        "ja-JP": {
          singular: "メッセージを入力"
        },
        "ko-KR": {
          singular: "메세지 입력"
        },
        "pt-BR": {
          singular: "Digite uma mensagem"
        },
        "zh-CN": {
          singular: "键入消息"
        }
      }
    }),
    waitingForHost: (0, _v106.translate)({
      singular: "Waiting for host",
      dictionary: {
        es: {
          singular: "Esperando al anfitrión"
        },
        "de-DE": {
          singular: "Warten auf Host"
        },
        "fr-FR": {
          singular: "En attente de l'hôte"
        },
        "ja-JP": {
          singular: "ホストを待っています"
        },
        "ko-KR": {
          singular: "진행자를 기다리는 중"
        },
        "pt-BR": {
          singular: "Aguardando pelo host"
        },
        "zh-CN": {
          singular: "正在等待主持人"
        }
      }
    }),
    interviewErrors: {
      incompatibleBrowserErrorTitle: (0, _v106.translate)({
        singular: "Sorry, this browser isn't supported.",
        dictionary: {
          es: {
            singular: "Lo sentimos, este navegador no es compatible."
          },
          "de-DE": {
            singular: "Es tut uns leid, dieser Browser wird nicht unterstützt."
          },
          "fr-FR": {
            singular: "Désolé, ce navigateur n'est pas pris en charge."
          },
          "ja-JP": {
            singular: "このブラウザはサポートされていません。"
          },
          "ko-KR": {
            singular: "죄송합니다, 지원되지 않는 브라우저입니다."
          },
          "pt-BR": {
            singular: "Desculpe, este navegador não é suportado."
          },
          "zh-CN": {
            singular: "抱歉，不支持该浏览器。"
          }
        }
      }),
      incompatibleBrowserErrorMessage: (0, _v106.translate)({
        singular: "Try an updated version of Chrome, Firefox, or Safari.",
        dictionary: {
          es: {
            singular: "Intenta con una versión actualizada de Chrome, Firefox o Safari."
          },
          "de-DE": {
            singular: "Versuche es mit einer aktualisierten Version von Chrome, Firefox oder Safari."
          },
          "fr-FR": {
            singular: "Essayez avec les nouvelles versions de Chrome, Firefox ou Safari."
          },
          "ja-JP": {
            singular: "Chrome、Firefox、またはSafariの最新バージョンをお試しください。"
          },
          "ko-KR": {
            singular: "Chrome, Firefox 또는 Safari의 업데이트 버전을 사용해보세요."
          },
          "pt-BR": {
            singular: "Tente uma versão atualizada do Chrome, Firefox ou Safari."
          },
          "zh-CN": {
            singular: "尝试更新版本的 Chrome、Firefox 或 Safari。"
          }
        }
      }),
      deviceNotAvailableErrorTitle: (0, _v106.translate)({
        singular: "Vimeo needs permission to use your camera and microphone.",
        dictionary: {
          es: {
            singular: "Vimeo necesita autorización para usar la cámara y el micrófono."
          },
          "de-DE": {
            singular: "Vimeo benötigt die Erlaubnis, deine Kamera und dein Mikrofon zu verwenden."
          },
          "fr-FR": {
            singular: "Vimeo a besoin de permission afin d'utiliser votre caméra et votre microphone."
          },
          "ja-JP": {
            singular: "Vimeo にカメラとマイクへのアクセスを許可してください。"
          },
          "ko-KR": {
            singular: "Vimeo는 카메라와 마이크를 사용할 권한이 필요합니다."
          },
          "pt-BR": {
            singular: "O Vimeo precisa de permissão para usar sua câmera e microfone."
          },
          "zh-CN": {
            singular: "Vimeo 需要获得许可才能使用您的摄像头和麦克风。"
          }
        }
      }),
      deviceNotAvailableErrorMessage: (0, _v106.translate)({
        singular: "You won't go live yet.",
        dictionary: {
          es: {
            singular: "Aún no transmitirás en vivo."
          },
          "de-DE": {
            singular: "Keine Angst. Du wirst nicht sofort livegeschaltet."
          },
          "fr-FR": {
            singular: "Vous ne serez pas tout de suite en live."
          },
          "ja-JP": {
            singular: "ライブ配信はまだ開始されません。"
          },
          "ko-KR": {
            singular: "아직 라이브가 시작되기 전입니다."
          },
          "pt-BR": {
            singular: "Você não entrará ao vivo ainda."
          },
          "zh-CN": {
            singular: "您还无法开始直播。"
          }
        }
      }),
      deviceBusyErrorTitle: (0, _v106.translate)({
        singular: "Webcam is busy with another application.",
        dictionary: {
          es: {
            singular: "Otra aplicación está usando la cámara web."
          },
          "de-DE": {
            singular: "Die Webcam ist mit einer anderen Anwendung beschäftigt."
          },
          "fr-FR": {
            singular: "La webcam est occupée par une autre application."
          },
          "ja-JP": {
            singular: "ウェブカメラが他のアプリケーションで使われています。"
          },
          "ko-KR": {
            singular: "다른 애플리케이션에서 웹캠이 실행 중입니다."
          },
          "pt-BR": {
            singular: "A webcam está ativada em outro aplicativo."
          },
          "zh-CN": {
            singular: "网络摄像头正忙于另一个应用程序。"
          }
        }
      }),
      deviceBusyErrorMessage: (0, _v106.translate)({
        singular: "Make sure another application isn't currently using your webcam.",
        dictionary: {
          es: {
            singular: "Asegúrate de que otra aplicación no esté usando tu cámara web."
          },
          "de-DE": {
            singular: "Stelle sicher, dass keine andere Anwendung deine Webcam verwendet."
          },
          "fr-FR": {
            singular: "Vérifiez que votre webcam n'est pas en cours d'utilisation sur une autre application."
          },
          "ja-JP": {
            singular: "別のアプリケーションが現在ウェブカメラを使用していないかご確認ください。"
          },
          "ko-KR": {
            singular: "현재 다른 애플리케이션이 웹캠을 사용 중인지 확인하세요."
          },
          "pt-BR": {
            singular: "Verifique se outro aplicativo não está usando sua webcam no momento."
          },
          "zh-CN": {
            singular: "确保当前没有其他应用程序使用您的网络摄像头。"
          }
        }
      }),
      noDevicesErrorTitle: (0, _v106.translate)({
        singular: "No webcam available.",
        dictionary: {
          es: {
            singular: "No hay una cámara web disponible."
          },
          "de-DE": {
            singular: "Keine Webcam verfügbar."
          },
          "fr-FR": {
            singular: "Aucune webcam n'est disponible."
          },
          "ja-JP": {
            singular: "利用できるウェブカメラがありません。"
          },
          "ko-KR": {
            singular: "사용할 수 있는 웹캠이 없습니다."
          },
          "pt-BR": {
            singular: "Nenhuma webcam disponível."
          },
          "zh-CN": {
            singular: "没有可用的网络摄像头。"
          }
        }
      }),
      noDevicesErrorMessage: (0, _v106.translate)({
        singular: "Please connect a webcam.",
        dictionary: {
          es: {
            singular: "Conecta una cámara web."
          },
          "de-DE": {
            singular: "Bitte verbinde eine Webcam."
          },
          "fr-FR": {
            singular: "Veuillez connecter une webcam."
          },
          "ja-JP": {
            singular: "ウェブカメラを接続してください。"
          },
          "ko-KR": {
            singular: "웹캠을 연결해주세요."
          },
          "pt-BR": {
            singular: "Por favor, conecte uma webcam."
          },
          "zh-CN": {
            singular: "请连接网络摄像头。"
          }
        }
      }),
      deviceAbortedErrorTitle: (0, _v106.translate)({
        singular: "Unable to get video from webcam.",
        dictionary: {
          es: {
            singular: "No podemos obtener el video de la cámara web."
          },
          "de-DE": {
            singular: "Videos funktionieren nicht mit der Webcam."
          },
          "fr-FR": {
            singular: "Impossible d'obtenir de la vidéo de la webcam."
          },
          "ja-JP": {
            singular: "ウェブカメラから動画を取り込めません。"
          },
          "ko-KR": {
            singular: "웹캠에서 동영상을 가져올 수 없습니다."
          },
          "pt-BR": {
            singular: "Não foi possível obter vídeo da webcam."
          },
          "zh-CN": {
            singular: "无法从网络摄像头获取视频。"
          }
        }
      }),
      deviceAbortedErrorMessage: (0, _v106.translate)({
        singular: "Please make sure there aren't any problems with your webcam.",
        dictionary: {
          es: {
            singular: "Asegúrate de que tu cámara web no tenga problemas."
          },
          "de-DE": {
            singular: "Bitte stelle sicher, dass es keine Probleme mit deiner Webcam gibt."
          },
          "fr-FR": {
            singular: "Veuillez vérifier que votre webcam fonctionne correctement."
          },
          "ja-JP": {
            singular: "ウェブカメラに問題がないかご確認ください。"
          },
          "ko-KR": {
            singular: "웹캠에 문제가 없는지 확인해주세요."
          },
          "pt-BR": {
            singular: "Por favor, verifique se não há problemas com sua webcam."
          },
          "zh-CN": {
            singular: "请确保您的网络摄像头没有任何问题。"
          }
        }
      }),
      deviceUnpluggedErrorTitle: (0, _v106.translate)({
        singular: "Webcam was removed.",
        dictionary: {
          es: {
            singular: "La cámara web se eliminó."
          },
          "de-DE": {
            singular: "Webcam wurde entfernt."
          },
          "fr-FR": {
            singular: "La webcam a été déconnectée."
          },
          "ja-JP": {
            singular: "ウェブカメラが削除されました。"
          },
          "ko-KR": {
            singular: "웹캠이 제거되었습니다."
          },
          "pt-BR": {
            singular: "A webcam foi removida."
          },
          "zh-CN": {
            singular: "网络摄像头已移除。"
          }
        }
      }),
      deviceUnpluggedErrorMessage: (0, _v106.translate)({
        singular: "Please plug in a webcam",
        dictionary: {
          es: {
            singular: "Conecta una cámara web"
          },
          "de-DE": {
            singular: "Bitte schließe eine Webcam an"
          },
          "fr-FR": {
            singular: "Veuillez brancher une webcam"
          },
          "ja-JP": {
            singular: "ウェブカメラを接続してください"
          },
          "ko-KR": {
            singular: "웹캠을 플러그인하세요"
          },
          "pt-BR": {
            singular: "Por favor, conecte uma webcam"
          },
          "zh-CN": {
            singular: "请接通网络摄像头"
          }
        }
      }),
      invalidInterviewLinkErrorTitle: (0, _v106.translate)({
        singular: "Invalid link",
        dictionary: {
          es: {
            singular: "Enlace no válido"
          },
          "de-DE": {
            singular: "Ungültiger Link"
          },
          "fr-FR": {
            singular: "Lien invalide"
          },
          "ja-JP": {
            singular: "無効なリンク"
          },
          "ko-KR": {
            singular: "유효하지 않은 링크"
          },
          "pt-BR": {
            singular: "Link inválido"
          },
          "zh-CN": {
            singular: "无效的链接"
          }
        }
      }),
      invalidInterviewLinkErrorMessage: (0, _v106.translate)({
        singular: "Check that your URL is correct, or contact the interview host for help.",
        dictionary: {
          es: {
            singular: "Comprueba que la URL es correcta o ponte en contacto con el anfitrión de la entrevista para obtener ayuda."
          },
          "de-DE": {
            singular: "Überprüfe, ob deine URL korrekt ist, oder wende dich an den Interview-Host, um Hilfe zu erhalten."
          },
          "fr-FR": {
            singular: "Vérifiez que l'URL est correcte ou contactez l'organisateur de l'entretien pour obtenir de l'aide."
          },
          "ja-JP": {
            singular: "URLが正しいかご確認いただくか、インタビューの主催者にお問い合わせください。"
          },
          "ko-KR": {
            singular: "URL이 정확한지 확인하거나 인터뷰 진행자에게 문의하세요."
          },
          "pt-BR": {
            singular: "Verifique se o seu URL está correto ou entre em contato com o host da entrevista para obter ajuda."
          },
          "zh-CN": {
            singular: "检查您的 URL 是否正确，或联系访谈主持人寻求帮助。"
          }
        }
      })
    },
    you: (0, _v106.translate)({
      singular: "you",
      dictionary: {
        es: {
          singular: "tú"
        },
        "de-DE": {
          singular: "du"
        },
        "fr-FR": {
          singular: "vous"
        },
        "ja-JP": {
          singular: "自分"
        },
        "ko-KR": {
          singular: "나"
        },
        "pt-BR": {
          singular: "você"
        },
        "zh-CN": {
          singular: "您"
        }
      }
    })
  };
  function _v108() {
    return (_v108 = Object.assign.bind()).apply(null, arguments);
  }
  let _v109 = function (_v0) {
    return _v17.createElement("svg", _v108({
      viewBox: "0 0 20 18",
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v5 || (_v5 = _v17.createElement("path", {
      d: "M20.747.336c-.633.412-.67 1.044-1.083 1.411L18.256 3h.114L12 8.661v-.102L5.879 14h.115l-2.25 2h-.115l-1.965 1.747a1 1 0 01-1.328-1.494l.617-.549A1.999 1.999 0 010 14V4a2 2 0 012-2h10a2 2 0 012 2v.105L18.336.253a1 1 0 011.411.083zM20 4.226V14a1 1 0 01-1 1h-1.487a1 1 0 01-.717-.303L14 11.823V14a2 2 0 01-2 2H6.754l2.25-2H11a1 1 0 00.993-.883L12 13v-1.663l2.315-2.058 1.118 1.15L17.936 13H18V6.004l2-1.778zM11 4H3a1 1 0 00-.993.883L2 5v8a1 1 0 00.877.993L12 5.883V5a1 1 0 00-1-1z",
      fill: "#FFF"
    })));
  };
  function _v110() {
    return (_v110 = Object.assign.bind()).apply(null, arguments);
  }
  let _v111 = function (_v0) {
    return _v17.createElement("svg", _v110({
      viewBox: "0 0 20 18",
      className: "CameraIcon_svg__sc-jPPmml CameraIcon_svg__jTAsZL"
    }, _v0), _v6 || (_v6 = _v17.createElement("path", {
      d: "M19 3h-1.49a1 1 0 00-.72.3L14 6.18V4a2 2 0 00-2-2H2a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2.18l2.8 2.87a1 1 0 00.72.3H19a1 1 0 001-1V4a1 1 0 00-1-1zm-7 11H2V4h10zm6-1h-.06L14 9l3.89-4H18z",
      fill: "#FFF",
      fillRule: "evenodd"
    })));
  };
  function _v112() {
    return (_v112 = Object.assign.bind()).apply(null, arguments);
  }
  let _v113 = function (_v0) {
    return _v17.createElement("svg", _v112({
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v7 || (_v7 = _v17.createElement("path", {
      d: "M17.07 8.01a1 1 0 01.849 1.132A8.002 8.002 0 0111 15.938V20H9v-4.062a7.965 7.965 0 01-1.165-.235l1.92-1.708a6.001 6.001 0 006.184-5.137 1 1 0 011.132-.848zM10 0a4 4 0 014 4v1.105l4.336-3.852a1 1 0 111.328 1.494l-18 16a1 1 0 01-1.328-1.494l4.024-3.579a7.967 7.967 0 01-2.279-4.532 1 1 0 111.98-.284 5.973 5.973 0 001.799 3.485l1.502-1.336A3.99 3.99 0 016 8V4a4 4 0 014-4z"
    })));
  };
  function _v114() {
    return (_v114 = Object.assign.bind()).apply(null, arguments);
  }
  let _v115 = function (_v0) {
    return _v17.createElement("svg", _v114({
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v8 || (_v8 = _v17.createElement("path", {
      d: "M11 15.938V20H9v-4.062a8.002 8.002 0 01-6.919-6.796 1 1 0 111.98-.284 6.001 6.001 0 0011.878 0 1 1 0 011.98.284A8.002 8.002 0 0111 15.938zM10 0a4 4 0 014 4v4a4 4 0 11-8 0V4a4 4 0 014-4z"
    })));
  };
  function _v116() {
    return (_v116 = Object.assign.bind()).apply(null, arguments);
  }
  let _v117 = function (_v0) {
    return _v17.createElement("svg", _v116({
      viewBox: "0 0 18 21",
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v9 || (_v9 = _v17.createElement("g", {
      transform: "translate(-11 -9)",
      fill: "none",
      fillRule: "evenodd"
    }, _v17.createElement("path", {
      d: "M15 14v2h10v-2h2.326c.925 0 1.674.75 1.674 1.674v8.652c0 .925-.75 1.674-1.674 1.674H12.674C11.749 26 11 25.25 11 24.326v-8.652c0-.925.75-1.674 1.674-1.674H15zm-2 2v8h14v-8H13z",
      fill: "#FFF",
      fillRule: "nonzero"
    }), _v17.createElement("path", {
      fill: "#FFF",
      d: "M19 26h2v2h-2z"
    }), _v17.createElement("rect", {
      fill: "#FFF",
      transform: "rotate(90 20 29)",
      x: 19,
      y: 24,
      width: 2,
      height: 10,
      rx: 1
    }), _v17.createElement("path", {
      d: "M20 19v-6.971",
      stroke: "#FFF",
      strokeWidth: 2,
      strokeLinecap: "round"
    }), _v17.createElement("path", {
      stroke: "#FFF",
      strokeWidth: 2,
      d: "M17 14l3-3 3 3"
    }))));
  };
  var _v118 = _v0.i(0),
    _v119 = _v0.i(0);
  let _v120 = _v22.default.div.withConfig({
      displayName: "GuestInterviewSettingsModal__GuestInterviewSettingsModalWrapper",
      componentId: "sc-e9b05ae-0"
    })`
  background: ${_v23.bokehTheme.colors.gray["800"]};
  padding: ${(0, _v21.rem)(24)};

  h6,
  h2,
  select,
  button:first-child {
    color: ${_v23.bokehTheme.colors.gray["100"]};
  }

  path {
    fill: ${_v23.bokehTheme.colors.gray["100"]};
  }
`,
    _v121 = _v22.default.div.withConfig({
      displayName: "GuestInterviewSettingsModal__SourceConfigBlock",
      componentId: "sc-e9b05ae-1"
    })`
  flex-grow: 1;
  margin-bottom: ${(0, _v21.rem)(44)};
  margin-top: ${(0, _v21.rem)(32)};

  label {
    color: ${_v23.bokehTheme.colors.white};
  }

  select {
    background-color: ${_v23.bokehTheme.colors.gray["700"]};
    border: ${(0, _v21.rem)(1)} solid ${_v23.bokehTheme.colors.gray["600"]};
    border-radius: ${(0, _v21.rem)(4)};
  }
`,
    _v122 = _v22.default.div.withConfig({
      displayName: "GuestInterviewSettingsModal__SelectGroup",
      componentId: "sc-e9b05ae-2"
    })`
  margin-bottom: ${(0, _v21.rem)(16)};
`,
    _v123 = (0, _v22.default)(_v27.Button).attrs({
      size: "sm",
      format: "basic",
      variant: "minimalTransparent",
      theme: _v25.themes.dark,
      icon: (0, _v10.jsx)(_v31.CloseX, {})
    }).withConfig({
      displayName: "GuestInterviewSettingsModal__Dismiss",
      componentId: "sc-e9b05ae-3"
    })`
  position: absolute;
  top: ${(0, _v21.rem)(12)};
  right: ${(0, _v21.rem)(12)};
  color: ${_v23.bokehTheme.colors.white};
`,
    _v124 = _v22.default.div.withConfig({
      displayName: "GuestInterviewSettingsModal__ControlButtonsGroup",
      componentId: "sc-e9b05ae-4"
    })`
  display: flex;
  justify-content: flex-end;

  button:first-child {
    background-color: ${_v23.bokehTheme.colors.gray["700"]};
    margin-right: ${(0, _v21.rem)(20)};
  }

  button:first-child {
    border: none;
  }
`;
  function _v125({
    onSave: _v0,
    onCancel: _v1,
    interviewMediaContext: {
      activeVideoDeviceId: _v2,
      activeAudioDeviceId: _v3,
      audioDevices: _v4,
      videoDevices: _v5,
      mediaError: _v6
    } = (0, _v16.useManager)(_v95)
  }) {
    let [_v7, _v8] = (0, _v17.useState)(_v3),
      [_v9, _v10] = (0, _v17.useState)(_v2),
      _v11 = _v6 === _v61.EMediaError.DEVICE_NOT_AVAILABLE,
      _v12 = (0, _v17.useCallback)(() => {
        _v0({
          activeAudioDeviceId: _v7,
          activeVideoDeviceId: _v9
        });
      }, [_v7, _v9, _v0]),
      _v13 = (0, _v17.useCallback)(_v0 => {
        _v8(_v0.target.value);
      }, []),
      _v14 = (0, _v17.useCallback)(_v0 => {
        _v10(_v0.target.value);
      }, []);
    (0, _v17.useEffect)(() => {
      (0, _v30.isMediaDeviceInList)(_v4, _v7) || 0 === _v4.length || _v8((0, _v30.getFirstMediaDeviceId)(_v4));
    }, [_v4, _v7]), (0, _v17.useEffect)(() => {
      (0, _v30.isMediaDeviceInList)(_v5, _v9) || 0 === _v5.length || _v10((0, _v30.getFirstMediaDeviceId)(_v5));
    }, [_v5, _v9]);
    let _v15 = _v0 => _v0.map(({
      deviceId: _v0,
      label: _v1
    }) => (0, _v10.jsx)(_v118.Select.Option, {
      value: _v0,
      children: _v1
    }, _v0));
    return (0, _v10.jsxs)(_v120, {
      children: [(0, _v10.jsxs)(_v24.Modal.Header, {
        children: [_v107.settings, (0, _v10.jsx)(_v123, {
          onClick: _v1
        })]
      }), (0, _v10.jsxs)(_v121, {
        children: [(0, _v10.jsx)(_v122, {
          children: (0, _v10.jsx)(_v118.Select, {
            value: _v9 || "",
            label: _v107.camera,
            onChange: _v14,
            children: _v11 ? [] : _v15(_v5)
          })
        }), (0, _v10.jsx)(_v122, {
          children: (0, _v10.jsx)(_v118.Select, {
            value: _v7 || "",
            label: _v107.audio,
            onChange: _v13,
            children: _v11 ? [] : _v15(_v4)
          })
        })]
      }), (0, _v10.jsxs)(_v124, {
        children: [(0, _v10.jsx)(_v27.Button, {
          format: "secondary",
          onClick: _v1,
          theme: _v25.themes.dark,
          children: _v119.T_CANCEL
        }), (0, _v10.jsx)(_v27.Button, {
          disabled: _v11,
          format: "primary",
          onClick: _v12,
          children: _v107.save
        })]
      })]
    });
  }
  let _v126 = (0, _v22.default)(_v27.Button).attrs({
      size: "md"
    }).withConfig({
      displayName: "GuestInterviewMediaControls__MediaControlButton",
      componentId: "sc-8c9b88f8-0"
    })`
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  margin-left: ${(0, _v21.rem)(12)};
  color: ${_v23.bokehTheme.colors.white};

  &:hover,
  &:hover:not(:active) {
    background-color: rgba(145, 145, 145, 0.45);
  }

  &:active {
    background-color: rgba(100, 100, 100, 0.45);
  }
`,
    _v127 = (0, _v22.default)(_v126).withConfig({
      displayName: "GuestInterviewMediaControls__ScreenShareButton",
      componentId: "sc-8c9b88f8-1"
    })`
  color: ${_v23.bokehTheme.colors.white};
  width: auto;
  font-weight: 700;
  font-size: ${(0, _v21.rem)(14)};
  padding: 0 ${(0, _v21.rem)(16)};

  ${({
      isActive: _v0
    }) => _v0 ? `background: ${_v23.bokehTheme.colors.blue["500"]};` : ""}

  & svg {
    position: relative;
    margin-right: ${(0, _v21.rem)(8)};
    width: ${(0, _v21.rem)(20)};
    min-width: ${(0, _v21.rem)(20)};
    top: ${(0, _v21.rem)(-1)};
  }
`;
  function _v128({
    interviewMediaContext: {
      audioMuted: _v0,
      videoMuted: _v1,
      isScreenSharing: _v2,
      isLocalAudioLoading: _v3,
      isLocalVideoLoading: _v4,
      mediaActions: _v5
    } = (0, _v16.useManager)(_v95),
    debugControlContext: {
      isEnabled: _v6
    } = (0, _v16.useManager)(_v20.DebugControlManager),
    studioDebugContext: {
      debugActions: _v7
    } = (0, _v16.useManager)(_v56)
  }) {
    let [_v8, _v9] = (0, _v17.useState)(!1),
      _v10 = (0, _v17.useCallback)(_v0 => {
        _v83(!0), _v9(!1), _v5.setActiveDevices(_v0);
      }, []),
      _v11 = (0, _v17.useCallback)(() => {
        _v71.FatalAttraction.trackClick({
          container: _v74,
          component: "camera_audio_settings",
          keyword: "open"
        }), _v9(!0);
      }, []),
      _v12 = (0, _v17.useCallback)(() => {
        _v83(!1), _v9(!1);
      }, []);
    return (0, _v10.jsxs)(_v10.Fragment, {
      children: [_v90.IS_SCREENSHARE_SUPPORTED ? (0, _v10.jsx)(_v127, {
        icon: (0, _v10.jsx)(_v117, {}),
        isActive: _v2,
        disabled: _v4,
        onClick: _v2 ? _v5.stopDisplaySharing : _v5.startDisplaySharing,
        children: _v2 ? _v107.stopSharing : _v107.shareScreen
      }) : null, (0, _v10.jsx)(_v126, {
        loading: _v4,
        disabled: _v4,
        icon: _v1 ? (0, _v10.jsx)(_v109, {}) : (0, _v10.jsx)(_v111, {}),
        onClick: _v5.toggleVideoMute
      }), (0, _v10.jsx)(_v126, {
        loading: _v3,
        icon: _v0 ? (0, _v10.jsx)(_v113, {}) : (0, _v10.jsx)(_v115, {}),
        onClick: _v5.toggleAudioMute
      }), _v6 ? (0, _v10.jsx)(_v126, {
        icon: "D",
        onClick: _v7.toggleModalVisibility
      }) : null, (0, _v10.jsx)(_v24.Modal, {
        active: _v8,
        content: (0, _v10.jsx)(_v125, {
          onSave: _v10,
          onCancel: _v12
        }),
        children: (0, _v10.jsx)(_v126, {
          icon: (0, _v10.jsx)(_v105.SettingsGear, {}),
          disabled: _v3 || _v4,
          onClick: _v11
        })
      })]
    });
  }
  let _v129 = _v22.default.header.withConfig({
      displayName: "GuestInterviewHeader__GuestInterviewHeaderWrapper",
      componentId: "sc-11632862-0"
    })`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${(0, _v21.rem)(24)};
  max-height: ${(0, _v21.rem)(88)};
  z-index: 10;
`,
    _v130 = _v22.default.div.withConfig({
      displayName: "GuestInterviewHeader__GuestInterviewStageLabel",
      componentId: "sc-11632862-1"
    })`
  border-radius: ${(0, _v21.rem)(4)};
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0 ${(0, _v21.rem)(12)};
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  color: ${_v23.bokehTheme.colors.white};
  font-weight: 500;
  height: ${(0, _v21.rem)(40)};

  svg {
    margin-right: ${(0, _v21.rem)(8)};
    height: ${(0, _v21.rem)(20)};
    width: ${(0, _v21.rem)(20)};
  }
`,
    _v131 = _v22.default.div.withConfig({
      displayName: "GuestInterviewHeader__ButtonsControlsWrapper",
      componentId: "sc-11632862-2"
    })`
  display: flex;
`,
    _v132 = (0, _v22.default)(_v27.Button).withConfig({
      displayName: "GuestInterviewHeader__LeaveButton",
      componentId: "sc-11632862-3"
    })`
  margin-left: ${(0, _v21.rem)(12)};
  background-color: ${_v23.bokehTheme.colors.red["500"]};

  &:hover,
  &:hover:not(:active),
  &:active {
    background-color: ${_v23.bokehTheme.colors.red["500"]};
  }

  &:active {
    background-color: ${_v23.bokehTheme.colors.red["600"]};
  }
`;
  function _v133({
    interviewContext: {
      isJoined: _v0,
      isOnAir: _v1,
      interviewActions: _v2
    } = (0, _v16.useManager)(_v84),
    studioContext: {
      rtc: _v3
    } = (0, _v16.useManager)(_v101, ({
      rtc: _v0
    }) => [_v0])
  }) {
    let [_v4, _v5] = (0, _v17.useState)(_v73.LOCAL_PREVIEW),
      _v6 = (0, _v17.useMemo)(() => ({
        [_v73.LOCAL_PREVIEW]: _v107.localPreview,
        [_v73.WAITING_FOR_HOST]: _v107.waitingForHost,
        [_v73.BROADCAST_PREVIEW]: _v107.broadcastPreview,
        [_v73.ON_AIR]: (0, _v10.jsxs)(_v10.Fragment, {
          children: [(0, _v10.jsx)(_v104.CircleShapeFilled, {}), " ", _v107.onAir]
        })
      }), []),
      _v7 = (0, _v17.useCallback)(() => {
        _v71.FatalAttraction.trackClick({
          container: _v74,
          component: _v75,
          keyword: "leave"
        }), _v2.leaveInterview();
      }, []);
    return (0, _v17.useEffect)(() => {
      let _v0 = _v73.LOCAL_PREVIEW;
      _v0 = _v0 ? _v3 === _v48.ERTCConnectionState.CONNECTED ? _v1 ? _v73.ON_AIR : _v73.BROADCAST_PREVIEW : _v73.WAITING_FOR_HOST : _v73.LOCAL_PREVIEW, _v5(_v0 => (_v0 !== _v0 && (_v0 => {
        switch (_v0) {
          case _v73.WAITING_FOR_HOST:
            _v71.FatalAttraction.trackEvent({
              container: _v74,
              component: "waiting_for_host"
            });
            break;
          case _v73.ON_AIR:
            _v71.FatalAttraction.trackEvent({
              container: _v74,
              component: "on_air"
            });
            break;
          case _v73.BROADCAST_PREVIEW:
            _v71.FatalAttraction.trackEvent({
              container: _v74,
              component: "broadcast_preview"
            });
            break;
          case _v73.LOCAL_PREVIEW:
            _v71.FatalAttraction.trackEvent({
              container: _v74,
              component: "local_preview"
            });
        }
      })(_v0), _v0));
    }, [_v0, _v3, _v1, _v4]), (0, _v10.jsx)(_v10.Fragment, {
      children: (0, _v10.jsxs)(_v129, {
        children: [(0, _v10.jsx)(_v130, {
          children: _v6[_v4]
        }), (0, _v10.jsxs)(_v131, {
          children: [_v90.IS_BROWSER_SUPPORTED ? (0, _v10.jsx)(_v128, {}) : null, _v0 ? (0, _v10.jsx)(_v132, {
            onClick: _v7,
            children: _v107.leave
          }) : null]
        })]
      })
    });
  }
  var _v134 = _v0.i(0);
  let _v135 = _v22.default.div.withConfig({
      displayName: "JoinForm__JoinFormWrapper",
      componentId: "sc-dc6117a5-0"
    })`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(0, _v21.rem)(52)};

  h3 {
    color: ${_v23.bokehTheme.colors.gray["50"]};
  }
`,
    _v136 = _v22.default.div.withConfig({
      displayName: "JoinForm__HeaderWrapper",
      componentId: "sc-dc6117a5-1"
    })`
  margin-bottom: ${(0, _v21.rem)(36)};
`,
    _v137 = _v22.default.div.withConfig({
      displayName: "JoinForm__ControlsWrapper",
      componentId: "sc-dc6117a5-2"
    })`
  display: flex;
  align-items: center;
  width: 100%;
`,
    _v138 = _v22.default.div.withConfig({
      displayName: "JoinForm__InputWrapper",
      componentId: "sc-dc6117a5-3"
    })`
  width: 100%;
  margin-right: ${(0, _v21.rem)(16)};

  input {
    color: ${_v23.bokehTheme.colors.gray["200"]};
    background-color: rgba(255, 255, 255, 0.1);
    border: ${(0, _v21.rem)(1)} solid ${_v23.bokehTheme.colors.gray["200"]};
    border-radius: ${(0, _v21.rem)(4)};

    &::placeholder {
      color: rgba(227, 232, 233, 0.5);
    }
  }

  input:hover {
    border: ${(0, _v21.rem)(1)} solid ${_v23.bokehTheme.colors.gray["200"]};
  }
`,
    _v139 = (0, _v22.default)(_v27.Button).withConfig({
      displayName: "JoinForm__JoinButton",
      componentId: "sc-dc6117a5-4"
    })`
  min-width: ${(0, _v21.rem)(104)};
`;
  function _v140({
    disabled: _v0 = !1,
    isLoading: _v1 = !1,
    username: _v2,
    onInterviewJoin: _v3,
    onUsernameChanged: _v4
  }) {
    let _v5 = (0, _v17.useCallback)(_v0 => {
        _v4(_v0.target.value);
      }, []),
      _v6 = (0, _v17.useCallback)(_v0 => {
        "Enter" === _v0.key && 0 !== _v2.length && _v3();
      }, []);
    return (0, _v10.jsxs)(_v135, {
      children: [(0, _v10.jsx)(_v136, {
        children: (0, _v10.jsx)(_v28.Header, {
          size: "3",
          children: _v107.addYourNameToJoinAsAGuest
        })
      }), (0, _v10.jsxs)(_v137, {
        children: [(0, _v10.jsx)(_v138, {
          children: (0, _v10.jsx)(_v134.Input, {
            disabled: _v0,
            value: _v2,
            placeholder: "Enter your name",
            size: "md",
            onChange: _v5,
            onKeyDown: _v6
          })
        }), (0, _v10.jsx)(_v139, {
          disabled: _v0 || !_v2,
          loading: _v1,
          onClick: _v3,
          children: _v107.joinEvent
        })]
      })]
    });
  }
  var _v141 = _v0.i(0),
    _v142 = _v0.i(0);
  let _v143 = _v22.default.div.withConfig({
      displayName: "VideoPreview__LocalPreviewWrapper",
      componentId: "sc-bbf6970c-0"
    })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  color: ${_v23.bokehTheme.colors.white};
  position: relative;
`,
    _v144 = _v22.default.div.withConfig({
      displayName: "VideoPreview__ContentWrapper",
      componentId: "sc-bbf6970c-1"
    })`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${({
      hasPadding: _v0
    }) => _v0 ? (0, _v21.rem)(16) : 0};
  text-align: center;

  video {
    width: 100%;
    height: 100%;
    background-color: ${({
      contain: _v0
    }) => _v0 ? "black" : "inherit"};
    object-fit: ${({
      contain: _v0
    }) => _v0 ? "contain" : "fill"};
  }
`,
    _v145 = _v22.default.div.withConfig({
      displayName: "VideoPreview__NestedContentWrapper",
      componentId: "sc-bbf6970c-2"
    })`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,
    _v146 = {
      [_v61.EMediaError.INCOMPATIBLE_BROWSER]: {
        title: _v107.interviewErrors.incompatibleBrowserErrorTitle,
        value: _v107.interviewErrors.incompatibleBrowserErrorMessage
      },
      [_v61.EMediaError.DEVICE_BUSY]: {
        title: _v107.interviewErrors.deviceBusyErrorTitle,
        value: _v107.interviewErrors.deviceBusyErrorMessage
      },
      [_v61.EMediaError.NO_DEVICES]: {
        title: _v107.interviewErrors.noDevicesErrorTitle,
        value: _v107.interviewErrors.noDevicesErrorMessage
      },
      [_v61.EMediaError.DEVICE_ABORTED]: {
        title: _v107.interviewErrors.deviceAbortedErrorTitle,
        value: _v107.interviewErrors.deviceAbortedErrorMessage
      },
      [_v61.EMediaError.DEVICE_NOT_AVAILABLE]: {
        title: _v107.interviewErrors.deviceNotAvailableErrorTitle,
        value: _v107.interviewErrors.deviceNotAvailableErrorMessage
      },
      [_v61.EMediaError.DEVICE_UNPLUGGED]: {
        title: _v107.interviewErrors.deviceUnpluggedErrorTitle,
        value: _v107.interviewErrors.deviceUnpluggedErrorMessage
      },
      [_v61.EMediaError.INVALID_INTERVIEW_LINK]: {
        title: _v107.interviewErrors.invalidInterviewLinkErrorTitle,
        value: _v107.interviewErrors.invalidInterviewLinkErrorMessage
      }
    },
    _v147 = (0, _v17.forwardRef)(function ({
      contain: _v0,
      error: _v1,
      muted: _v2,
      stream: _v3,
      width: _v4,
      height: _v5,
      children: _v6
    }, _v7) {
      let _v8 = (0, _v17.useRef)(null),
        _v9 = (0, _v17.useMemo)(() => ({
          width: _v4,
          height: _v5
        }), [_v4, _v5]),
        _v10 = _v1 ? _v146[_v1] : null;
      return (0, _v142.useVideoSourceSync)(_v8, _v3), (0, _v10.jsx)(_v143, {
        children: (0, _v10.jsxs)(_v144, {
          ref: _v7,
          style: _v9,
          hasPadding: !!_v1,
          contain: _v0,
          children: [_v10 ? (0, _v10.jsxs)(_v10.Fragment, {
            children: [(0, _v10.jsx)(_v28.Header, {
              size: "4",
              theme: _v25.themes.dark,
              children: _v10.title
            }), (0, _v10.jsx)(_v141.Paragraph, {
              size: "2",
              theme: _v25.themes.dark,
              children: _v10.value
            })]
          }) : (0, _v10.jsx)("video", {
            ref: _v8,
            muted: _v2,
            autoPlay: !0
          }), (0, _v10.jsxs)(_v145, {
            children: [" ", _v6, " "]
          })]
        })
      });
    }),
    _v148 = _v22.default.div.withConfig({
      displayName: "GuestInterviewJoin__GuestInterviewJoinWrapper",
      componentId: "sc-92bbdd2d-0"
    })`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${_v23.bokehTheme.colors.gray["800"]};
  min-width: ${(0, _v21.rem)(840)};
`,
    _v149 = _v22.default.main.withConfig({
      displayName: "GuestInterviewJoin__GuestInterviewJoinContent",
      componentId: "sc-92bbdd2d-1"
    })`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: ${(0, _v21.rem)(16)};
  align-items: center;
`;
  function _v150({
    mediaContext: {
      localPreview: _v0,
      mediaError: _v1,
      isScreenSharing: _v2
    } = (0, _v16.useManager)(_v95),
    interviewContext: {
      interviewActions: _v3,
      username: _v4,
      config: _v5
    } = (0, _v16.useManager)(_v84)
  }) {
    let _v6 = (0, _v17.useCallback)(() => {
      _v71.FatalAttraction.trackClick({
        container: _v74,
        component: "local_preview_guest",
        keyword: "join"
      }), _v3.joinInterview();
    }, [_v3]);
    return (0, _v10.jsxs)(_v148, {
      children: [(0, _v10.jsx)(_v133, {}), (0, _v10.jsxs)(_v149, {
        children: [(0, _v10.jsx)(_v147, {
          stream: _v0,
          width: 800,
          height: 450,
          error: _v1,
          muted: !0,
          contain: _v2
        }), _v90.IS_BROWSER_SUPPORTED ? (0, _v10.jsx)(_v140, {
          isLoading: !_v5,
          disabled: !_v5,
          username: _v4,
          onUsernameChanged: _v3.setUsername,
          onInterviewJoin: _v6
        }) : null]
      })]
    });
  }
  var _v151 = _v0.i(0),
    _v152 = _v0.i(0),
    _v153 = _v0.i(0),
    _v154 = _v0.i(0),
    _v155 = _v17;
  let _v156 = _v22.default.div.withConfig({
      displayName: "GuestInterviewLocalPreview__GuestInterviewLocalPreviewWrapper",
      componentId: "sc-424ae985-0"
    })`
  cursor: move;
  position: absolute;
  background-color: black;
  border: ${(0, _v21.rem)(3)} solid ${_v23.bokehTheme.colors.white};
  right: ${(0, _v21.rem)(36)};
  bottom: ${(0, _v21.rem)(36)};
  box-shadow: ${({
      isSelected: _v0
    }) => _v0 ? `${(0, _v21.rem)(2)} ${(0, _v21.rem)(2)} ${(0, _v21.rem)(6)} 0 ${_v23.bokehTheme.colors.gray["300"]}` : "unset"};
  z-index: 20;
`,
    _v157 = _v22.default.div.withConfig({
      displayName: "GuestInterviewLocalPreview__PreviewTitleWrapper",
      componentId: "sc-424ae985-1"
    })`
  position: absolute;
  background-color: rgba(31, 31, 31, 0.7);
  border-radius: ${(0, _v21.rem)(4)};
  left: ${(0, _v21.rem)(4)};
  top: ${(0, _v21.rem)(4)};
  height: ${(0, _v21.rem)(32)};
  padding-left: ${(0, _v21.rem)(12)};
  padding-right: ${(0, _v21.rem)(12)};
  padding-top: ${(0, _v21.rem)(4)};

  user-select: none;
  max-width: 100%;
  font-size: ${(0, _v21.rem)(16)};
  font-weight: 500;
  color: ${_v23.bokehTheme.colors.white};
  z-index: 20;
`;
  class _v158 extends _v155.PureComponent {
    state = {
      isSelected: !1
    };
    lastMouseCoordinates = void 0;
    wrapperRef = (0, _v155.createRef)();
    componentDidMount() {
      document.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseup", this.onMouseUp), document.addEventListener("mouseleave", this.onMouseLeave);
    }
    componentWillUnmount() {
      document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("mouseup", this.onMouseUp), document.removeEventListener("mouseleave", this.onMouseLeave);
    }
    render() {
      let {
          username: _v0,
          stream: _v1,
          error: _v2,
          isScreenSharing: _v3
        } = this.props,
        {
          isSelected: _v4
        } = this.state;
      return (0, _v10.jsxs)(_v156, {
        ref: this.wrapperRef,
        isSelected: _v4,
        onMouseDown: this.onMouseDown,
        children: [(0, _v10.jsxs)(_v157, {
          children: [_v0, " (", _v107.you, ")"]
        }), (0, _v10.jsx)(_v147, {
          stream: _v1,
          width: 266,
          height: 150,
          muted: !0,
          contain: _v3,
          error: _v2
        })]
      });
    }
    onMouseDown = _v0 => {
      this.setState({
        isSelected: !0
      }), this.lastMouseCoordinates = {
        x: _v0.screenX,
        y: _v0.screenY
      };
    };
    onMouseUp = () => {
      this.setState({
        isSelected: !1
      });
    };
    onMouseLeave = () => {
      this.setState({
        isSelected: !1
      });
    };
    onMouseMove = _v0 => {
      let {
        isSelected: _v1
      } = this.state;
      _v1 && this.lastMouseCoordinates && this.movePreview(this.wrapperRef.current, {
        x: _v0.screenX,
        y: _v0.screenY
      });
    };
    movePreview = (0, _v152.default)((_v0, _v1) => {
      let _v2 = _v0.parentElement,
        _v3 = _v0.offsetTop + _v0.offsetHeight,
        _v4 = _v0.offsetLeft + _v0.offsetWidth,
        _v5 = {
          x: this.lastMouseCoordinates.x - _v1.x,
          y: this.lastMouseCoordinates.y - _v1.y
        },
        _v6 = Math.max(0, _v2.offsetWidth - _v4 + _v5.x);
      _v6 + _v0.offsetWidth < _v2.clientWidth && (_v0.style.right = Math.floor(_v6) + "px");
      let _v7 = Math.max(0, _v2.offsetHeight - _v3 + _v5.y);
      _v7 + _v0.offsetHeight < _v2.clientHeight && (_v0.style.bottom = Math.floor(_v7) + "px"), this.lastMouseCoordinates = _v1;
    }, 40);
  }
  var _v159 = _v0.i(0);
  let _v160 = _v22.default.div.withConfig({
      displayName: "GuestInterviewChatHeader__GuestInterviewChatHeaderWrapper",
      componentId: "sc-564ca575-0"
    })`
  display: flex;
  padding: ${(0, _v21.rem)(24)};
  align-items: center;
  position: relative;

  button {
    position: absolute;
    top: ${(0, _v21.rem)(24)};
  }

  h3 {
    flex-grow: 1;
    text-align: center;
    margin: 0;
  }
`,
    _v161 = (0, _v22.default)(_v27.Button).withConfig({
      displayName: "GuestInterviewChatHeader__GuestInterviewChatToggle",
      componentId: "sc-564ca575-1"
    })`
  color: ${_v23.bokehTheme.colors.white};

  &:hover {
    background-color: ${_v23.bokehTheme.colors.gray["600"]};
  }
`;
  function _v162({
    onVisibilityToggle: _v0
  }) {
    return (0, _v10.jsxs)(_v160, {
      children: [(0, _v10.jsx)(_v161, {
        icon: (0, _v10.jsx)(_v159.ChevronRightSmall, {}),
        onClick: _v0
      }), (0, _v10.jsx)(_v28.Header, {
        size: "3",
        theme: _v25.themes.dark,
        children: _v119.T_CHAT
      })]
    });
  }
  let _v163 = _v22.default.div.withConfig({
      displayName: "GuestInterviewChatMessage__GuestInterviewMessage",
      componentId: "sc-84fed8de-0"
    })`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  margin: ${({
      isFromHost: _v0
    }) => _v0 ? `0 0 ${(0, _v21.rem)(12)} 0` : `0 ${(0, _v21.rem)(20)} ${(0, _v21.rem)(12)} ${(0, _v21.rem)(20)}`};
  background-color: ${({
      isFromHost: _v0
    }) => _v0 ? _v23.bokehTheme.colors.gray["700"] : "transparent"};
  padding: ${({
      isFromHost: _v0
    }) => _v0 ? `${(0, _v21.rem)(12)} ${(0, _v21.rem)(20)}` : 0};

  > :last-child {
    margin: 0;
  }
`,
    _v164 = _v22.default.div.withConfig({
      displayName: "GuestInterviewChatMessage__GuestInterviewOwnMessage",
      componentId: "sc-84fed8de-1"
    })`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  margin: 0 ${(0, _v21.rem)(20)} ${(0, _v21.rem)(12)} ${(0, _v21.rem)(20)};
  color: ${_v23.bokehTheme.colors.white};
  align-self: flex-end;
  background-color: ${_v23.bokehTheme.colors.gray["600"]};
  border-radius: ${(0, _v21.rem)(8)};
  padding: ${(0, _v21.rem)(12)};
  max-width: 75%;

  > :last-child {
    margin: 0;
  }
`;
  function _v165({
    message: _v0
  }) {
    let {
        message: _v1,
        details: {
          senderName: _v2,
          senderType: _v3,
          isMe: _v4
        }
      } = _v0,
      _v5 = _v3 === _v48.EConnectionType.STUDIO;
    return _v4 ? (0, _v10.jsx)(_v164, {
      children: (0, _v10.jsx)(_v141.Paragraph, {
        size: "2",
        children: _v1
      })
    }) : (0, _v10.jsxs)(_v163, {
      isFromHost: _v5,
      children: [(0, _v10.jsx)(_v28.Header, {
        size: "5",
        children: _v5 ? _v107.host : _v2
      }), (0, _v10.jsx)(_v141.Paragraph, {
        size: "2",
        children: _v1
      })]
    });
  }
  let _v166 = _v22.default.div.withConfig({
      displayName: "GuestInterviewChatHistory__GuestInterviewChatHistoryWrapper",
      componentId: "sc-f98966ee-0"
    })`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: ${_v23.bokehTheme.colors.white};
  overflow: auto;
  padding: ${(0, _v21.rem)(12)} 0;

  > :first-child {
    margin-top: auto;
  }

  * {
    color: ${_v23.bokehTheme.colors.white};
  }
`,
    _v167 = _v22.default.div.withConfig({
      displayName: "GuestInterviewChatHistory__GuestInterviewNoMessagesNotification",
      componentId: "sc-f98966ee-1"
    })`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  color: ${_v23.bokehTheme.colors.white};
`,
    _v168 = _v22.default.div.withConfig({
      displayName: "GuestInterviewChatHistory__GuestInterviewMoreMessagesBelow",
      componentId: "sc-f98966ee-2"
    })`
  background: linear-gradient(
    180deg,
    #1d242c10 0%,
    #1d242caa 45%,
    ${_v23.bokehTheme.colors.gray["750"]} 100%
  );
  position: absolute;
  width: 100%;
  display: flex;
  font-weight: 700;
  justify-content: center;
  padding: ${(0, _v21.rem)(8)} ${(0, _v21.rem)(40)};
  bottom: 80px;
  z-index: 10;
`,
    _v169 = _v22.default.div.withConfig({
      displayName: "GuestInterviewChatHistory__GuestInterviewMoreMessagesButton",
      componentId: "sc-f98966ee-3"
    })`
  cursor: pointer;
  color: ${_v23.bokehTheme.colors.white};
  background-color: black;
  padding: ${(0, _v21.rem)(12)} ${(0, _v21.rem)(16)};
  width: 100%;
  border-radius: ${(0, _v21.rem)(4)};
  display: flex;
  justify-content: center;
`;
  function _v170({
    studioContext: {
      chatMessagesHistory: _v0
    } = (0, _v16.useManager)(_v101, ({
      chatMessagesHistory: _v0
    }) => [_v0])
  }) {
    let [_v1, _v2] = (0, _v17.useState)(0),
      _v3 = (0, _v17.useRef)(null),
      _v4 = _v0.length > 0,
      _v5 = (0, _v17.useCallback)(() => {
        let _v0 = _v3.current;
        _v0 && (_v0.scrollTop = _v0.scrollHeight - _v0.clientHeight);
      }, []),
      _v6 = (0, _v17.useCallback)(() => {
        let _v0 = _v3.current;
        _v0 && _v2(_v0.scrollHeight - (_v0.scrollTop + _v0.clientHeight));
      }, []),
      _v7 = (0, _v17.useCallback)(() => {
        let _v0 = _v3.current;
        return !_v0 || _v0.scrollHeight - (_v0.scrollTop + _v0.clientHeight) < 200;
      }, []);
    return (0, _v17.useEffect)(() => {
      _v7() && _v5(), _v6();
    }, [_v0]), (0, _v17.useEffect)(() => {
      _v5();
    }, []), (0, _v10.jsxs)(_v10.Fragment, {
      children: [(0, _v10.jsx)(_v166, {
        ref: _v3,
        onScroll: _v6,
        children: _v4 ? _v0.map((_v0, _v1) => (0, _v10.jsx)(_v165, {
          message: _v0
        }, _v1)) : (0, _v10.jsx)(_v167, {
          children: _v107.noMessagesYet
        })
      }), _v7() ? null : (0, _v10.jsx)(_v168, {
        bottom: _v1,
        children: (0, _v10.jsx)(_v169, {
          onClick: _v5,
          children: "More messages below"
        })
      })]
    });
  }
  var _v171 = _v0.i(0),
    _v172 = _v0.i(0);
  let _v173 = _v22.default.div.withConfig({
      displayName: "GuestInterviewChatInput__GuestInterviewChatInputWrapper",
      componentId: "sc-19108983-0"
    })`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${(0, _v21.rem)(20)};

  > :first-child {
    flex-grow: 1;
    margin: 0 ${(0, _v21.rem)(8)} 0 0;

    * {
      margin: 0;
    }
  }

  svg {
    transform: rotate(180deg);
  }

  // todo: Valid disabled state from iris component.
  button:disabled {
    filter: contrast(0.5) brightness(0.5);
  }
`,
    _v174 = (0, _v22.default)(_v134.Input).withConfig({
      displayName: "GuestInterviewChatInput__ChatInput",
      componentId: "sc-19108983-1"
    })`
  background: rgba(255, 255, 255, 0.1);
`;
  function _v175({
    studioContext: {
      studioActions: _v0,
      signaling: _v1
    } = (0, _v16.useManager)(_v101)
  }) {
    let [_v2, _v3] = (0, _v17.useState)(""),
      [_v4, _v5] = (0, _v17.useState)(!1),
      _v6 = (0, _v17.useRef)(null),
      _v7 = (0, _v17.useRef)(null),
      _v8 = !!(_v2 && !_v4 && _v1),
      _v9 = (0, _v17.useCallback)(_v0 => {
        _v0.target.value.length < _v70 && _v3(_v0.target.value);
      }, []),
      _v10 = (0, _v17.useCallback)(async () => {
        _v71.FatalAttraction.trackClick({
          container: _v74,
          component: "chat",
          keyword: "send_message"
        }), await _v0.sendChatMessage(_v2), _v3(""), _v5(!0), _v6.current = window.setTimeout(() => {
          _v5(!1), _v6.current = null;
        }, _v69);
      }, [_v2]),
      _v11 = (0, _v17.useCallback)(_v0 => {
        _v0.key === _v172.EKey.ENTER && _v8 && _v10();
      }, [_v10, _v8]);
    return (0, _v17.useEffect)(() => (_v7.current?.focus(), () => {
      _v6.current && window.clearTimeout(_v6.current);
    }), []), (0, _v10.jsxs)(_v173, {
      children: [(0, _v10.jsx)(_v174, {
        ref: _v7,
        value: _v2,
        theme: _v25.themes.dark,
        label: !1,
        placeholder: _v107.typeMessage,
        onKeyDown: _v11,
        onChange: _v9
      }), (0, _v10.jsx)(_v27.Button, {
        size: "sm",
        format: "secondary",
        theme: _v25.themes.dark,
        icon: (0, _v10.jsx)(_v171.ArrowDown, {
          color: _v23.bokehTheme.colors.white
        }),
        disabled: !_v8,
        onClick: _v10
      })]
    });
  }
  let _v176 = _v22.default.div.withConfig({
      displayName: "GuestInterviewChat__GuestInterviewChatWrapper",
      componentId: "sc-5cfda14f-0"
    })`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${_v23.bokehTheme.colors.gray["750"]};
  flex-grow: ${({
      isOpen: _v0
    }) => 4 * !!_v0};
  transition-duration: 400ms;
  min-width: ${({
      isOpen: _v0
    }) => _v0 ? (0, _v21.rem)(280) : 0};
  max-width: 25%;
  max-height: 100vh;
  overflow: hidden;
`,
    _v177 = _v22.default.div.withConfig({
      displayName: "GuestInterviewChat__GuestInterviewChatPreview",
      componentId: "sc-5cfda14f-1"
    })`
  display: flex;
  padding: ${(0, _v21.rem)(4)};

  button {
    top: ${(0, _v21.rem)(20)};
  }

  svg {
    transform: rotate(180deg);
  }
`,
    _v178 = (0, _v22.default)(_v27.Button).withConfig({
      displayName: "GuestInterviewChat__GuestInterviewChatToggle",
      componentId: "sc-5cfda14f-2"
    })`
  color: ${_v23.bokehTheme.colors.white};

  &:hover {
    background-color: ${_v23.bokehTheme.colors.gray["600"]};
  }
`,
    _v179 = _v22.default.hr.withConfig({
      displayName: "GuestInterviewChat__GuestInterviewChatDivider",
      componentId: "sc-5cfda14f-3"
    })`
  border-bottom: 0;
  color: ${_v23.bokehTheme.colors.gray["600"]};
  margin: 0 ${(0, _v21.rem)(20)};
  height: ${(0, _v21.rem)(1)};
  z-index: 15;
`,
    _v180 = _v22.default.div.withConfig({
      displayName: "GuestInterviewChat__Spacer",
      componentId: "sc-5cfda14f-4"
    })`
  flex-grow: 4;
`;
  function _v181() {
    let [_v0, _v1] = (0, _v17.useState)(!0),
      [_v2, _v3] = (0, _v17.useState)(!1),
      _v4 = (0, _v17.useCallback)(() => {
        _v3(!0), _v1(_v0 => {
          var _v1;
          return _v1 = !_v0, _v71.FatalAttraction.trackClick({
            container: _v74,
            component: "chat",
            keyword: _v1 ? "expand" : "collapse"
          }), !_v0;
        });
      }, []);
    return (0, _v17.useEffect)(() => {
      let _v0 = window.setTimeout(() => _v3(!1), 400);
      return () => window.clearTimeout(_v0);
    }, [_v2]), (0, _v10.jsx)(_v176, {
      isOpen: _v0,
      children: _v0 ? (0, _v10.jsxs)(_v10.Fragment, {
        children: [(0, _v10.jsx)(_v162, {
          onVisibilityToggle: _v4
        }), (0, _v10.jsx)(_v179, {}), _v2 ? (0, _v10.jsx)(_v180, {}) : (0, _v10.jsx)(_v170, {}), (0, _v10.jsx)(_v179, {}), (0, _v10.jsx)(_v175, {})]
      }) : (0, _v10.jsx)(_v177, {
        children: (0, _v10.jsx)(_v178, {
          icon: (0, _v10.jsx)(_v159.ChevronRightSmall, {}),
          onClick: _v4
        })
      })
    });
  }
  let _v182 = _v22.default.div.withConfig({
      displayName: "ShutdownNotification__ShutdownNotificationBody",
      componentId: "sc-effb2f94-0"
    })`
  display: flex;
  flex-direction: column;
  padding: ${(0, _v21.rem)(16)};
  background: ${_v23.bokehTheme.colors.gray["700"]};

  h6,
  h2 {
    color: ${_v23.bokehTheme.colors.gray["100"]};
  }

  button {
    align-self: flex-end;
  }
`,
    _v183 = {
      [_v72.BLACK_LIST]: _v107.shutdowns.blackListed.title,
      [_v72.LIMIT]: _v107.shutdowns.limit.title,
      [_v72.UNKNOWN]: _v107.shutdowns.unknown.title
    },
    _v184 = {
      [_v72.BLACK_LIST]: _v107.shutdowns.blackListed.description,
      [_v72.LIMIT]: _v107.shutdowns.limit.description,
      [_v72.UNKNOWN]: _v107.shutdowns.unknown.description
    };
  function _v185() {
    let {
        remoteShutdown: _v0,
        interviewActions: _v1
      } = (0, _v16.useManager)(_v84),
      _v2 = (0, _v17.useCallback)(() => {
        switch (_v0) {
          case _v72.BLACK_LIST:
            _v71.FatalAttraction.trackClick({
              container: _v74,
              component: _v76,
              keyword: _v80
            });
            break;
          case _v72.LIMIT:
            _v71.FatalAttraction.trackClick({
              container: _v74,
              component: _v77,
              keyword: _v80
            });
        }
        _v1.leaveInterview();
      }, []);
    return null === _v0 ? null : (0, _v10.jsx)(_v24.Modal, {
      active: !0,
      size: "md",
      content: (0, _v10.jsxs)(_v182, {
        children: [(0, _v10.jsx)(_v24.Modal.Header, {
          children: _v183[_v0]
        }), (0, _v10.jsx)(_v141.Paragraph, {
          size: "2",
          theme: _v25.themes.dark,
          children: _v184[_v0]
        }), (0, _v10.jsx)(_v27.Button, {
          format: "primary",
          onClick: _v2,
          children: _v107.okay
        })]
      })
    });
  }
  let _v186 = _v22.default.div.withConfig({
      displayName: "GuestInterviewPreview__GuestInterviewPreviewWrapper",
      componentId: "sc-34d64ae1-0"
    })`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  background-color: ${_v23.bokehTheme.colors.gray["800"]};
  min-width: ${(0, _v21.rem)(840)};
  height: 100vh;
`,
    _v187 = _v22.default.div.withConfig({
      displayName: "GuestInterviewPreview__GuestInterviewContentWrapper",
      componentId: "sc-34d64ae1-1"
    })`
  position: relative;
  display: flex;
  flex-grow: 10;
  flex-direction: column;
  align-items: center;
  height: 100%;
`,
    _v188 = _v22.default.main.withConfig({
      displayName: "GuestInterviewPreview__GuestInterviewPreviewVideoWrapper",
      componentId: "sc-34d64ae1-2"
    })`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,
    _v189 = _v22.default.div.withConfig({
      displayName: "GuestInterviewPreview__LoaderWrapper",
      componentId: "sc-34d64ae1-3"
    })`
  width: 100%;
  height: 100%;
  background: #000000af;
  display: flex;
  align-items: center;
  justify-content: center;
`,
    _v190 = (0, _v22.default)(_v151.Spinner).withConfig({
      displayName: "GuestInterviewPreview__GuestLoader",
      componentId: "sc-34d64ae1-4"
    })`
  position: absolute;
`;
  function _v191({
    mediaContext: {
      isScreenSharing: _v0,
      localPreview: _v1,
      mediaError: _v2
    } = (0, _v16.useManager)(_v95),
    interviewContext: {
      username: _v3
    } = (0, _v16.useManager)(_v84),
    studioContext: {
      studioPreview: _v4,
      rtc: _v5
    } = (0, _v16.useManager)(_v101)
  }) {
    let _v6 = (0, _v17.useRef)(null),
      _v7 = (0, _v17.useRef)(null),
      _v8 = _v5 !== _v48.ERTCConnectionState.CONNECTED && _v5 !== _v48.ERTCConnectionState.NEW;
    return !function (_v0, _v1, _v2 = {}) {
      let _v3 = (0, _v17.useCallback)((0, _v152.default)(_v0 => {
        let _v1 = _v1.current;
        if (_v1) {
          let {
              contentRect: {
                height: _v0,
                width: _v1
              }
            } = _v0[0],
            _v2 = _v2.maxWidth ? Math.min(_v1, _v2.maxWidth) : _v1,
            {
              width: _v3,
              height: _v4
            } = (0, _v154.recalculateToAspectRatio)(_v2, _v0, 16 / 9);
          _v1.style.width = _v3 + "px", _v1.style.height = _v4 + "px";
        }
      }, 50), [_v2?.maxWidth]);
      (0, _v17.useEffect)(() => {
        let _v0 = new _v153.default(_v3),
          _v1 = _v0.current;
        if (!_v1) throw Error("Failed to find resizing element.");
        return _v0.observe(_v1), () => _v0.unobserve(_v1);
      }, [_v3]);
    }(_v6, _v7), (0, _v10.jsxs)(_v186, {
      children: [(0, _v10.jsxs)(_v187, {
        ref: _v6,
        children: [(0, _v10.jsx)(_v133, {}), (0, _v10.jsx)(_v188, {
          children: (0, _v10.jsx)(_v147, {
            ref: _v7,
            stream: _v4 || _v1,
            muted: null === _v4,
            contain: _v0,
            error: _v4 ? null : _v2,
            children: _v8 ? (0, _v10.jsx)(_v189, {
              children: (0, _v10.jsx)(_v190, {
                size: "lg"
              })
            }) : null
          })
        }), _v4 ? (0, _v10.jsx)(_v158, {
          username: _v3,
          stream: _v1,
          error: _v2,
          isScreenSharing: _v0
        }) : null, (0, _v10.jsx)(_v185, {})]
      }), (0, _v10.jsx)(_v181, {})]
    });
  }
  function _v192({
    debugControlContext: {
      isEnabled: _v0
    } = (0, _v16.useManager)(_v20.DebugControlManager, ({
      isEnabled: _v0
    }) => [_v0]),
    interviewContext: {
      isJoined: _v1
    } = (0, _v16.useManager)(_v84, ({
      isJoined: _v0
    }) => [_v0])
  }) {
    return (0, _v10.jsxs)(_v10.Fragment, {
      children: [_v1 ? (0, _v10.jsx)(_v191, {}) : (0, _v10.jsx)(_v150, {}), _v0 ? (0, _v10.jsx)(_v103, {}) : null]
    });
  }
  let _v193 = (0, _v16.createProvider)([_v84, _v95, _v101, _v56, _v20.DebugControlManager]);
  function _v194({
    initialState: _v0,
    children: _v1
  }) {
    return (0, _v63.useScopeViewerEmitting)(), (0, _v10.jsx)(_v193, {
      initialState: _v0,
      children: _v1
    });
  }
  function _v195(_v0) {
    let _v1 = (0, _v19.useViewer)(),
      _v2 = (0, _v17.useMemo)(() => {
        let {
          sessionId: _v0,
          sessionType: _v1
        } = _v0;
        return {
          sessionApplicationType: _v14.EComposerApplicationType.INTERVIEW,
          sessionType: _v1,
          sessionId: _v0,
          viewer: _v1
        };
      }, [_v0]);
    return (0, _v18.useApplicationTrackingDetailsSync)({
      sessionApplicationType: _v2.sessionApplicationType,
      sessionType: _v2.sessionType,
      sessionId: _v2.sessionId,
      userId: _v1?.user?.id,
      userLocale: _v1?.locale
    }), (0, _v10.jsx)(_v16.ScopeProvider, {
      children: (0, _v10.jsx)(_v194, {
        initialState: _v2,
        children: (0, _v10.jsx)(_v192, {})
      })
    });
  }
  function _v196(_v0) {
    let _v1 = (0, _v15.useOptionalViewer)(),
      _v2 = (0, _v12.useRouter)(),
      _v3 = _v0.sessionId ?? _v2.query.sessionType;
    return _v1 && _v3 ? (0, _v10.jsx)(_v13.LiveErrorBoundary, {
      component: "LiveInterviewRoot",
      children: (0, _v10.jsx)(_v195, {
        sessionType: _v14.EComposerSessionType.INTERVIEW,
        sessionId: _v3
      })
    }) : null;
  }
  (0, _v11.withPageSetup)(async _v0 => {
    let {
      params: _v1
    } = _v0;
    return _v1 && _v1.sessionType ? {
      props: {
        sessionId: _v1.sessionType,
        hasThemeSupport: !0
      }
    } : {
      notFound: !0
    };
  }, {
    inlineViewer: "all"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v0 => (0, _v10.jsx)(_v196, {
    ..._v0
  })], 0);
}