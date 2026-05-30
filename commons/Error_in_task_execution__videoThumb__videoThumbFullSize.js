{
  "use strict";

  var _v1,
    _v2,
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  class _v6 {
    queue = [];
    activeCount = 0;
    limit;
    delayMs;
    constructor(_v0 = 10, _v1 = 0) {
      this.limit = _v0, this.delayMs = _v1;
    }
    add(_v0) {
      this.queue.push(_v0), this.processQueue();
    }
    async processQueue() {
      if (this.activeCount >= this.limit || 0 === this.queue.length) return;
      let _v0 = this.queue.shift();
      if (_v0) {
        this.activeCount++;
        try {
          await _v0();
        } catch (_v0) {
          console.error("Error in task execution:", _v0);
        } finally {
          await (0, _v5.forMillis)(this.delayMs), this.activeCount--, this.processQueue();
        }
      }
    }
    dispose() {
      this.queue = [], this.activeCount = 0;
    }
  }
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  function _v20({
    id: _v0,
    videoId: _v1,
    videoDuration: _v2,
    videoThumb: _v3,
    videoThumbFullSize: _v4,
    createdAt: _v5
  }) {
    let _v6 = [];
    return (0, _v19.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v6
    }), (0, _v19.validateString)({
      field: _v3,
      fieldName: "videoThumb",
      errors: _v6
    }), (0, _v19.validateString)({
      field: _v4,
      fieldName: "videoThumbFullSize",
      errors: _v6
    }), (0, _v19.validateNumber)({
      field: _v1,
      fieldName: "videoId",
      errors: _v6
    }), (0, _v19.validateNumber)({
      field: _v2,
      fieldName: "videoDuration",
      errors: _v6
    }), (0, _v19.validateDateField)({
      field: _v5,
      fieldName: "createdAt",
      errors: _v6
    }), _v6;
  }
  function _v21({
    id: _v0,
    createdAt: _v1,
    imageSrc: _v2
  }) {
    let _v3 = [];
    return (0, _v19.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v3
    }), (0, _v19.validateString)({
      field: _v2,
      fieldName: "imageSrc",
      errors: _v3
    }), (0, _v19.validateDateField)({
      field: _v1,
      fieldName: "createdAt",
      errors: _v3
    }), _v3;
  }
  function _v22({
    id: _v0,
    createdAt: _v1,
    type: _v2,
    line: _v3
  }) {
    let _v4 = [];
    return (0, _v19.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v4
    }), (0, _v19.validateString)({
      field: _v3,
      fieldName: "line",
      errors: _v4
    }), (0, _v19.validateDateField)({
      field: _v1,
      fieldName: "createdAt",
      errors: _v4
    }), _v2 !== _v15.EGraphicsDescriptorType.LOWER_THIRD && _v2 !== _v15.EGraphicsDescriptorType.GUEST_LOWER_THIRD && _v4.push(`type should be ${_v15.EGraphicsDescriptorType.LOWER_THIRD} || ${_v15.EGraphicsDescriptorType.GUEST_LOWER_THIRD}, but found ${typeof _v2}, ${_v2}`), _v4;
  }
  function _v23({
    id: _v0,
    createdAt: _v1,
    imageSrc: _v2,
    type: _v3
  }) {
    let _v4 = [];
    return (0, _v19.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v4
    }), (0, _v19.validateString)({
      field: _v2,
      fieldName: "imageSrc",
      errors: _v4
    }), (0, _v19.validateDateField)({
      field: _v1,
      fieldName: "createdAt",
      errors: _v4
    }), _v3 !== _v15.EGraphicsDescriptorType.IMAGE && _v4.push(`type should be ${_v15.EGraphicsDescriptorType.IMAGE}, but found ${typeof _v3}, ${_v3}`), _v4;
  }
  function _v24({
    id: _v0,
    text: _v1,
    votesCount: _v2,
    correct: _v3
  }) {
    let _v4 = [];
    return (0, _v19.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v4
    }), (0, _v19.validateString)({
      field: _v1,
      fieldName: "text",
      errors: _v4
    }), (0, _v19.validateBoolean)({
      field: _v3,
      fieldName: "correct",
      errors: _v4
    }), null != _v2 && (0, _v19.validateNumber)({
      field: _v2,
      fieldName: "votesCount",
      errors: _v4
    }), _v4;
  }
  function _v25({
    id: _v0,
    createdAt: _v1,
    roomId: _v2,
    state: _v3,
    question: _v4,
    options: _v5
  }) {
    let _v6 = [];
    return (0, _v19.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v6
    }), (0, _v19.validateString)({
      field: _v4,
      fieldName: "question",
      errors: _v6
    }), (0, _v19.validateStringOrNumber)({
      field: _v2,
      fieldName: "roomId",
      errors: _v6
    }), (0, _v19.validateDateField)({
      field: _v1,
      fieldName: "createdAt",
      errors: _v6
    }), Object.values(_v16.EPollState).includes(_v3) || _v6.push(`state should exists in EPollState, ${_v3}`), (!Array.isArray(_v5) || _v5.some(_v0 => _v24(_v0).length > 0)) && _v6.push(`options should be an array and all options should be valid, but found  ${JSON.stringify(_v5)}`), Array.isArray(_v5) && (_v5.length < 2 || _v5.length > 4) && _v6.push(`options length should be between 2 and 4, but found  ${_v5.length}`), _v6;
  }
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  function _v29({
    id: _v0,
    updatedAt: _v1 = 0,
    createdAt: _v2 = (0, _v28.getAbsoluteNow)(),
    videoId: _v3,
    videoHash: _v4 = null,
    videoDuration: _v5,
    videoThumb: _v6,
    videoThumbFullSize: _v7,
    hidden: _v8 = !1
  }, _v9 = !0) {
    let _v10 = _v20({
      id: _v0,
      videoId: _v3,
      videoHash: _v4,
      videoDuration: _v5,
      videoThumb: _v6,
      videoThumbFullSize: _v7,
      createdAt: _v2
    });
    return _v9 && (0, _v19.assertNoTypeErrors)("video", _v10), {
      id: _v0,
      type: _v15.EGraphicsDescriptorType.AGORA_MEDIA,
      updatedAt: _v1,
      createdAt: _v2,
      videoId: _v3,
      videoHash: _v4,
      videoDuration: _v5,
      videoThumb: _v6,
      videoThumbFullSize: _v7,
      hidden: _v8
    };
  }
  function _v30(_v0) {
    let _v1 = (0, _v27.parseClipIdFromURI)(_v0.uri);
    if (!_v1) throw new _v17.LiveError("Cannot create video GFX for null video id.", {
      code: _v14.ELiveErrorCode.CORRUPTED_OBJECT,
      data: _v0
    });
    return _v29({
      id: "",
      type: _v15.EGraphicsDescriptorType.AGORA_MEDIA,
      videoId: _v1,
      videoThumb: _v0.pictures?.sizes[3].link,
      videoThumbFullSize: _v0.pictures?.sizes[6].link,
      videoDuration: _v0.duration
    }, !1);
  }
  function _v31({
    id: _v0,
    name: _v1,
    updatedAt: _v2 = 0,
    createdAt: _v3 = (0, _v28.getAbsoluteNow)(),
    fileUrl: _v4,
    slideIndex: _v5,
    status: _v6,
    baseUrl: _v7 = ""
  }, _v8 = !0) {
    let _v9 = function ({
      id: _v0,
      fileUrl: _v1,
      slideIndex: _v2,
      status: _v3,
      createdAt: _v4
    }) {
      let _v5 = [];
      return (0, _v19.validateString)({
        field: _v0,
        fieldName: "id",
        errors: _v5
      }), (0, _v19.validateString)({
        field: _v1,
        fieldName: "fileUrl",
        errors: _v5
      }), (0, _v19.validateNumber)({
        field: _v2,
        fieldName: "slideIndex",
        errors: _v5
      }), (0, _v19.validateString)({
        field: _v3,
        fieldName: "status",
        errors: _v5
      }), (0, _v19.validateDateField)({
        field: _v4,
        fieldName: "createdAt",
        errors: _v5
      }), _v5;
    }({
      id: _v0,
      fileUrl: _v4,
      slideIndex: _v5,
      status: _v6,
      createdAt: _v3
    });
    return _v8 && (0, _v19.assertNoTypeErrors)("video", _v9), {
      id: _v0,
      name: _v1,
      type: _v15.EGraphicsDescriptorType.SLIDES,
      updatedAt: _v2,
      createdAt: _v3,
      fileUrl: _v4,
      slideIndex: _v5,
      status: _v6,
      slides: [],
      thumbnails: [],
      baseUrl: _v7
    };
  }
  function _v32({
    id: _v0,
    updatedAt: _v1 = 0,
    createdAt: _v2 = (0, _v28.getAbsoluteNow)(),
    imageSrc: _v3
  }) {
    let _v4 = _v21({
      id: _v0,
      createdAt: _v2,
      imageSrc: _v3
    });
    return (0, _v19.assertNoTypeErrors)("logo", _v4), {
      id: _v0,
      type: _v15.EGraphicsDescriptorType.LOGO,
      updatedAt: _v1,
      createdAt: _v2,
      imageSrc: _v3
    };
  }
  function _v33({
    id: _v0,
    updatedAt: _v1 = 0,
    createdAt: _v2 = (0, _v28.getAbsoluteNow)(),
    type: _v3 = _v15.EGraphicsDescriptorType.LOWER_THIRD,
    line: _v4,
    imageSrc: _v5 = null,
    subLine: _v6 = null
  }) {
    let _v7 = _v22({
      id: _v0,
      createdAt: _v2,
      type: _v3,
      line: _v4
    });
    return (0, _v19.assertNoTypeErrors)("lower third", _v7), {
      id: _v0,
      type: _v3,
      updatedAt: _v1,
      createdAt: _v2,
      imageSrc: _v5,
      line: _v4,
      subLine: _v6
    };
  }
  function _v34({
    id: _v0,
    updatedAt: _v1 = 0,
    createdAt: _v2 = (0, _v28.getAbsoluteNow)(),
    imageSrc: _v3,
    line: _v4,
    subLine: _v5,
    type: _v6 = _v15.EGraphicsDescriptorType.IMAGE,
    hidden: _v7 = !1
  }, _v8 = !0) {
    let _v9 = _v23({
      id: _v0,
      createdAt: _v2,
      imageSrc: _v3,
      type: _v6
    });
    return _v8 && (0, _v19.assertNoTypeErrors)("lower third", _v9), {
      id: _v0,
      type: _v6,
      updatedAt: _v1,
      createdAt: _v2,
      imageSrc: _v3,
      line: _v4,
      subLine: _v5,
      hidden: _v7
    };
  }
  function _v35({
    id: _v0,
    roomId: _v1,
    createdAt: _v2 = (0, _v28.getAbsoluteNow)(),
    updatedAt: _v3 = 0,
    votesCount: _v4,
    line: _v5,
    subLine: _v6,
    imageSrc: _v7
  }) {
    let _v8 = function ({
      id: _v0,
      roomId: _v1,
      createdAt: _v2,
      votesCount: _v3,
      line: _v4,
      subLine: _v5,
      imageSrc: _v6
    }) {
      let _v7 = [];
      return (0, _v19.validateString)({
        field: _v0,
        fieldName: "id",
        errors: _v7
      }), (0, _v19.validateString)({
        field: _v6,
        fieldName: "imageSrc",
        errors: _v7
      }), (0, _v19.validateDateField)({
        field: _v2,
        fieldName: "createdAt",
        errors: _v7
      }), (0, _v19.validateStringOrNumber)({
        field: _v1,
        fieldName: "roomId",
        errors: _v7
      }), (0, _v19.validateString)({
        field: _v4,
        fieldName: "line",
        errors: _v7
      }), (0, _v19.validateString)({
        field: _v5,
        fieldName: "subLine",
        errors: _v7
      }), (0, _v19.validateNumber)({
        field: _v3,
        fieldName: "votesCount",
        errors: _v7
      }), _v7;
    }({
      id: _v0,
      roomId: _v1,
      createdAt: _v2,
      votesCount: _v4,
      line: _v5,
      subLine: _v6,
      imageSrc: _v7
    });
    return (0, _v19.assertNoTypeErrors)("question", _v8), {
      id: _v0,
      type: _v15.EGraphicsDescriptorType.QNA,
      roomId: _v1,
      createdAt: _v2,
      updatedAt: _v3,
      votesCount: _v4,
      imageSrc: _v7,
      line: _v5,
      subLine: _v6
    };
  }
  function _v36({
    id: _v0,
    createdAt: _v1 = (0, _v28.getAbsoluteNow)(),
    updatedAt: _v2 = 0,
    answer: _v3,
    roomId: _v4,
    state: _v5 = _v16.EPollState.DRAFT,
    question: _v6,
    options: _v7
  }) {
    let _v8 = _v25({
      id: _v0,
      createdAt: _v1,
      roomId: _v4,
      state: _v5,
      question: _v6,
      options: _v7
    });
    (0, _v19.assertNoTypeErrors)("question", _v8);
    let _v9 = _v7.find(_v0 => _v0.correct)?.text;
    return {
      type: _v15.EGraphicsDescriptorType.POLL,
      id: _v0,
      state: _v5,
      answer: _v3 ?? (_v9 ? (0, _v26.T_CORRECT_RESPONSE)(_v9) : null),
      roomId: _v4,
      question: _v6,
      createdAt: _v1,
      updatedAt: _v2,
      options: _v7.map(_v0 => function ({
        id: _v0,
        text: _v1,
        votesCount: _v2 = 0,
        correct: _v3 = !1
      }) {
        let _v4 = _v24({
          id: _v0,
          text: _v1,
          votesCount: _v2,
          correct: _v3
        });
        return (0, _v19.assertNoTypeErrors)("poll option", _v4), {
          id: _v0,
          votesCount: _v2,
          text: _v1,
          correct: _v3
        };
      }(_v0))
    };
  }
  _v0.s(["createGfxFromVimeoVideo", 0, _v30, "createImageGraphicObject", 0, _v34, "createLogoGraphicObject", 0, _v32, "createLowerThirdGraphicObject", 0, _v33, "createPollGraphicObject", 0, _v36, "createQuestionGraphicObject", 0, _v35, "createSlidesGraphicObject", 0, _v31, "createVideoGraphicObject", 0, _v29], 0);
  var _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  function _v44(_v0) {
    return new Promise((_v0, _v1) => {
      if (_v0) {
        let _v0 = new FileReader();
        _v0.onload = _v0 => {
          _v0 && _v0.target ? _v0(_v0.target.result) : _v1(Error("Error while uploading image"));
        }, _v0.readAsDataURL(_v0);
      } else _v1(Error("Error while uploading image"));
    });
  }
  function _v45(_v0) {
    let _v1 = _v0.lastIndexOf(".");
    return -1 === _v1 ? [_v0, ""] : [_v0.slice(0, _v1), _v0.slice(_v1)];
  }
  function _v46(_v0, _v1, _v2, _v3) {
    let _v4 = _v0.context.pendingGraphicsList;
    _v0.setContext({
      pendingGraphicsList: {
        ..._v4,
        [_v1]: {
          id: _v1,
          type: _v2,
          uploadingProgress: 0,
          name: _v3
        }
      }
    });
  }
  function _v47(_v0, _v1) {
    let _v2 = _v0.context.pendingGraphicsList;
    _v0.setContext({
      pendingGraphicsList: (0, _v43.omit)(_v2, _v1)
    });
  }
  async function _v48(_v0, _v1, _v2, _v3) {
    _v0.log.info("Uploading file", _v2), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let [, _v4] = _v45(_v1.name),
      _v5 = _v8.graphicsConfig.UPLOADS.UPLOADED_FILE_NAME(_v4, _v2, _v2 === _v15.EGraphicsDescriptorType.SLIDES ? `${_v3}/` : ""),
      _v6 = _v0.firebase.storage.uploadBytesResumable(_v0.firebase.storage.ref(_v0.storageRef, _v5), _v1, {
        cacheControl: _v8.graphicsConfig.UPLOADS.FILE_CACHE_CONTROL
      });
    _v3 && (_v0.log.info("Add uploading task for gfx", _v3), _v0.uploadingTasks[_v3] = _v6, _v6.on("state_changed", _v0 => {
      let _v1 = Math.floor(_v0.bytesTransferred / _v0.totalBytes * 100);
      _v0.updateGraphicItemUploadingProgress(_v3, _v1);
    }, () => {
      delete _v0.uploadingTasks[_v3], _v0.removeGraphic(_v2, _v3);
    }, () => {
      _v0.log.info("Remove uploading task for graphic", _v3), delete _v0.uploadingTasks[_v3];
    }));
    let _v7 = await _v6;
    return _v0.firebase.storage.getDownloadURL(_v7.ref);
  }
  async function _v49(_v0, _v1, _v2) {
    try {
      _v0.log.info("Removing graphic:", _v1, _v2), _v0.assertIsInitialized(), _v0.assertCanEdit();
      let _v0 = _v1 === _v15.EGraphicsDescriptorType.QNA ? "global/qna" : `${_v1}/${_v2}`;
      await (0, _v18.removeRefValue)(_v0.firebase, (0, _v18.getRefChild)(_v0.firebase, _v0.graphicsRef, _v0)), await _v0.emitSignal({
        type: _v11.ELiveGraphicsSignal.GRAPHIC_DELETED,
        data: {
          graphicId: _v2,
          graphicType: _v1
        }
      });
    } catch (_v0) {
      _v0.log.error("Removing graphic error: ", _v0), (0, _v41.trackLiveError)(_v0, {
        method: "removeGraphic",
        data: {
          graphicType: _v1,
          graphicId: _v2
        },
        category: _v40.ELiveErrorCategory.GRAPHICS
      });
    }
  }
  async function _v50(_v0, _v1) {
    return (_v0.log.info("Purging graphics:", _v1), _v0.assertIsInitialized(), _v0.assertCanEdit(), _v1 === _v15.EGraphicsDescriptorType.QNA) ? (0, _v18.removeRefValue)(_v0.firebase, (0, _v18.getRefChild)(_v0.firebase, _v0.graphicsRef, `global/${_v1}`)) : (0, _v18.removeRefValue)(_v0.firebase, (0, _v18.getRefChild)(_v0.firebase, _v0.graphicsRef, _v1));
  }
  function _v51(_v0, _v1, _v2) {
    let {
        logoList: _v3,
        agoraMediaList: _v4,
        fullscreenList: _v5,
        lowerthirdList: _v6,
        slidesList: _v7,
        pollList: _v8,
        globalList: _v9
      } = _v0.context,
      _v10 = {};
    switch (_v1) {
      case _v15.EGraphicsDescriptorType.SLIDES:
        _v10 = _v7;
        break;
      case _v15.EGraphicsDescriptorType.POLL:
        _v10 = _v8;
        break;
      case _v15.EGraphicsDescriptorType.LOWER_THIRD:
        _v10 = _v6;
        break;
      case _v15.EGraphicsDescriptorType.IMAGE:
        _v10 = _v5;
        break;
      case _v15.EGraphicsDescriptorType.LOGO:
        _v10 = _v3;
        break;
      case _v15.EGraphicsDescriptorType.AGORA_MEDIA:
        _v10 = _v4;
        break;
      case _v15.EGraphicsDescriptorType.QNA:
        return _v9[_v15.EGraphicsDescriptorType.QNA];
    }
    return _v10[_v2] || null;
  }
  _v0.s(["getBase64Image", 0, _v44, "getFileNameAndBase64", 0, function (_v0, _v1 = _v8.graphicsConfig.UPLOADS.FILE_UPLOAD_LIMIT) {
    return new Promise((_v0, _v1) => {
      if (!_v0) return _v1(new _v17.LiveError("Error empty uploaded file"));
      let [_v2, _v3] = _v45(_v0.name);
      return _v2 ? _v0.size > _v1 ? _v1(new _v17.LiveError("Uploaded file must be smaller", {
        code: _v14.ELiveErrorCode.INVALID_UPLOAD_SIZE,
        data: {
          fileName: `${_v2}${_v3}`,
          fileExtension: _v3,
          fileSizeLimit: _v1,
          fileSize: _v0.size
        }
      })) : void _v44(_v0).then(_v0 => {
        _v0({
          fileSrc: _v0,
          fileName: _v2
        });
      }).catch(() => {
        _v1(new _v17.LiveError("Something went wrong uploading..."));
      }) : _v1(new _v17.LiveError("Uploaded file must have filename"));
    });
  }, "getFileNameAndExtension", 0, _v45], 0);
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  function _v62({
    id: _v0,
    className: _v1,
    width: _v2,
    height: _v3,
    track: _v4,
    isMirrored: _v5,
    objectFit: _v6 = "cover",
    children: _v7,
    ..._v8
  }) {
    let _v9 = (0, _v53.useRef)(null),
      _v10 = (0, _v53.useMemo)(() => new MediaStream(), []),
      _v11 = (0, _v53.useMemo)(() => ({
        width: _v2,
        height: _v3
      }), [_v2, _v3]),
      _v12 = (0, _v53.useMemo)(() => ({
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        objectFit: _v6,
        transform: _v5 ? "rotateY(180deg)" : "unset"
      }), [_v5, _v6]);
    return (0, _v53.useEffect)(() => {
      let _v0 = _v9.current;
      _v10.getTracks().forEach(_v0 => _v10.removeTrack(_v0)), _v4 && _v10.addTrack(_v4), _v0 && (_v4 && !_v0.srcObject ? _v0.srcObject = _v10 : _v4 || (_v0.srcObject = null));
    }, [_v10, _v4, _v4?.id]), (0, _v56.jsxs)(_v61.Box, {
      id: _v0,
      className: _v1,
      position: "relative",
      style: _v11,
      ..._v8,
      children: [(0, _v56.jsx)("video", {
        ref: _v9,
        style: _v12,
        muted: !0,
        autoPlay: !0,
        playsInline: !0
      }), (0, _v56.jsx)(_v57.Flex, {
        justifyContent: "center",
        alignItems: "center",
        sx: _v60.FULL_WIDTH_ABSOLUTE_STYLE,
        children: _v7
      })]
    });
  }
  _v0.s(["AgoraMediaTrackPreview", 0, _v62], 0);
  let _v63 = (0, _v53.forwardRef)(({
    className: _v0 = (0, _v59.createDomName)("gfx-agora-screen"),
    screenTrack: _v1,
    descriptor: _v2,
    theme: _v3
  }, _v4) => {
    if (!_v2.position.visible) return null;
    let _v5 = (0, _v58.getActiveAgoraSourceTrack)(_v1);
    return (0, _v56.jsx)(_v57.Flex, {
      className: _v0,
      ref: _v4,
      "data-id": "screen",
      "data-track": "screen",
      "data-value": "track",
      alignItems: "center",
      overflow: "hidden",
      position: "relative",
      width: "100%",
      height: "100%",
      background: _v60.PREVIEW_GRADIENT,
      fontFamily: _v3?.font,
      children: (0, _v56.jsx)(_v62, {
        track: _v5,
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%"
      })
    });
  });
  _v0.s(["AgoraScreen", 0, _v63], 0);
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v59,
    _v67 = _v0.i(0);
  function _v68(_v0) {
    return {
      display: "flex",
      position: "absolute",
      alignItems: "bottomLeft" === _v0.align ? "flex-end" : "flex-start",
      zIndex: _v0.z,
      width: _v0.width + "%",
      height: _v0.height + "%",
      left: _v0.left + "%",
      top: _v0.top + "%"
    };
  }
  function _v69() {
    return {
      width: `${_v8.graphicsConfig.RENDERER.WIDTH}px`,
      height: `${_v8.graphicsConfig.RENDERER.HEIGHT}px`,
      position: "absolute",
      zIndex: -1,
      left: "0",
      top: "0"
    };
  }
  _v0.s(["getDragThumbnailStyle", 0, function () {
    return {
      background: _v60.PREVIEW_GRADIENT,
      width: `${_v8.graphicsConfig.SCENE.GRAPHIC_THUMBNAIL.DRAG.WIDTH}px`,
      height: `${_v8.graphicsConfig.SCENE.GRAPHIC_THUMBNAIL.DRAG.HEIGHT}px`,
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1
    };
  }, "getGraphicCanvasStyle", 0, _v69, "getGraphicWrapperStyle", 0, _v68], 0);
  var _v70 = _v0.i(0),
    _v71 = _v0.i(0);
  let _v72 = _v70.keyframes`
  0% {
    transform: translate3d(-105%, 0, 0);
    animation-timing-function: ${_v8.graphicsConfig.ANIMATION.DEFAULT_TIMING};
  }
  100%{
    transform:translate3d(0, 0, 0);
    animation-timing-function: ${_v8.graphicsConfig.ANIMATION.DEFAULT_TIMING};
  }
`,
    _v73 = _v70.keyframes`
  0% {
    transform: translate3d(0, 0, 0);
    animation-timing-function: ${_v8.graphicsConfig.ANIMATION.DEFAULT_TIMING};
  }
  100%{
    transform:translate3d(-105%, 0, 0);
    animation-timing-function: ${_v8.graphicsConfig.ANIMATION.DEFAULT_TIMING};
  }
`,
    _v74 = _v70.keyframes`
  0% {
    transform: translate3d(100%, 0, 0);
    animation-timing-function: ${_v8.graphicsConfig.ANIMATION.DEFAULT_TIMING};
  }
  100% {
    transform: translate3d(0, 0, 0);
    animation-timing-function: ${_v8.graphicsConfig.ANIMATION.DEFAULT_TIMING};
  }
`,
    _v75 = _v70.keyframes`
  0% {
    transform: translate3d(0, 0, 0);
    animation-timing-function: ${_v8.graphicsConfig.ANIMATION.DEFAULT_TIMING};
  }
  100% {
    transform: translate3d(100%, 0, 0);
    animation-timing-function: ${_v8.graphicsConfig.ANIMATION.DEFAULT_TIMING};
  }
`,
    _v76 = _v70.keyframes`
  0% {
    clip-path: inset(0% 50% 0% 50%);
    animation-timing-function: ${_v8.graphicsConfig.ANIMATION.DEFAULT_TIMING};
  }
  100% {
    clip-path: inset(0% 0% 0% 0%);
    animation-timing-function: ${_v8.graphicsConfig.ANIMATION.DEFAULT_TIMING};
  }
`,
    _v77 = _v70.keyframes`
  0% {
    clip-path: inset(0% 0% 0% 0%);
    animation-timing-function: ${_v8.graphicsConfig.ANIMATION.DEFAULT_TIMING};
  }
  100%{
    clip-path: inset(0% 50% 0% 50%);
    animation-timing-function: ${_v8.graphicsConfig.ANIMATION.DEFAULT_TIMING};
  }
`,
    _v78 = _v70.default.div.withConfig({
      displayName: "graphics-animation.style__LineAnimatedBox",
      componentId: "sc-d1a67faf-0"
    })`
  ${({
      delay: _v0,
      duration: _v1,
      animation: _v2,
      bgColor: _v3
    }) => _v70.css`
    transform: ${_v2 === _v15.EAnimationState.INTRO ? "translate3d(-105%, 0, 0)" : "translate3d(0, 0, 0)"};
    animation: ${_v2 === _v15.EAnimationState.INTRO ? _v72 : _v2 === _v15.EAnimationState.OUTRO ? _v73 : ""}
      forwards;
    background-color: ${_v3 || "transparent"};
    animation-duration: ${_v1}ms;
    animation-delay: ${_v0}ms;
  `}
`,
    _v79 = (0, _v70.default)(_v78).withConfig({
      displayName: "graphics-animation.style__LineAnimatedImage",
      componentId: "sc-d1a67faf-1"
    })`
  ${({
      src: _v0,
      animation: _v1
    }) => _v70.css`
    background-image: url('${_v0}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: ${_v1 === _v15.EAnimationState.INTRO ? "translate3d(105%, 0, 0)" : _v1 === _v15.EAnimationState.OUTRO ? "transform:translate3d(0, 0, 0)" : ""};
    animation-name: ${_v1 === _v15.EAnimationState.INTRO ? _v74 : _v1 === _v15.EAnimationState.OUTRO ? _v75 : ""};
  `}
`,
    _v80 = (0, _v70.default)(_v78).withConfig({
      displayName: "graphics-animation.style__SelfAnimatedBox",
      componentId: "sc-d1a67faf-2"
    })`
  ${({
      animation: _v0
    }) => _v70.css`
    animation-fill-mode: forwards;
    transform: unset;

    animation-name: ${_v0 === _v15.EAnimationState.INTRO ? _v76 : _v0 === _v15.EAnimationState.OUTRO ? _v77 : ""};
    clip-path: ${_v0 === _v15.EAnimationState.INTRO ? "inset(0% 50% 0% 50%)" : _v0 === _v15.EAnimationState.OUTRO ? "inset(0% 0% 0% 0%)" : ""};
  `}
`,
    _v81 = _v70.default.div.withConfig({
      displayName: "LowerThird.style__LowerThirdWrapper",
      componentId: "sc-d3c26eb6-0"
    })`
  ${_v60.NO_SELECTION}
  position: absolute;
  display: flex;
  ${({
      scale: _v0,
      scaleOrigin: _v1
    }) => _v0 ? `
        transform: scale(${_v0});
        transform-origin: ${_v1 || "top left"};
        max-width: ${100 / (_v0 < 1 ? _v0 : 1)}%;
        max-height: ${100 / (_v0 < 1 ? _v0 : 1)}%;
      ` : `
        max-width: 100%;
        max-height: 100%;
      `}
`,
    _v82 = _v70.default.div.withConfig({
      displayName: "LowerThird.style__AnimationWrapper",
      componentId: "sc-d3c26eb6-1"
    })`
  display: flex;
  flex-flow: column wrap;
  width: auto;
  height: 100%;
  max-width: ${({
      withImage: _v0
    }) => _v0 ? "94%" : "100%"};
  align-items: flex-start;
`,
    _v83 = _v70.default.div.withConfig({
      displayName: "LowerThird.style__AnimationContent",
      componentId: "sc-d3c26eb6-2"
    })`
  position: relative;
  overflow: hidden;
  max-width: 100%;
`,
    _v84 = _v70.default.div.withConfig({
      displayName: "LowerThird.style__LineBreak",
      componentId: "sc-d3c26eb6-3"
    })`
  width: 100%;
`,
    _v85 = (0, _v70.default)(_v78).withConfig({
      displayName: "LowerThird.style__AnimatedBoxLowerThird",
      componentId: "sc-d3c26eb6-4"
    })`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: ${({
      position: _v0
    }) => _v0 || "absolute"};
`,
    _v86 = (0, _v70.default)(_v78).withConfig({
      displayName: "LowerThird.style__TextWrapper",
      componentId: "sc-d3c26eb6-5"
    })`
  font-family: ${({
      font: _v0
    }) => _v0};
  text-overflow: ellipsis;
  overflow: hidden;
`,
    _v87 = (0, _v70.default)(_v86).withConfig({
      displayName: "LowerThird.style__PrimaryTextWrapper",
      componentId: "sc-d3c26eb6-6"
    })`
  margin: 16px 56px 12px 28px;
  font-weight: 700;
  font-size: 64px;
  background-color: ${_v71.white};
  line-height: 96px;
  color: ${({
      color: _v0
    }) => _v0};
  white-space: nowrap;
`,
    _v88 = (0, _v70.default)(_v86).withConfig({
      displayName: "LowerThird.style__SecondaryTextWrapper",
      componentId: "sc-d3c26eb6-7"
    })`
  margin: 10px 40px 10px 24px;
  color: ${_v71.white};
  font-weight: 400;
  font-size: 50px;
  line-height: 58px;
  white-space: nowrap;
`,
    _v89 = _v70.default.div.withConfig({
      displayName: "LowerThird.style__LowerThirdImageWrapper",
      componentId: "sc-d3c26eb6-8"
    })`
  height: 120px;
  width: 120px;
  max-width: 120px;
  overflow: hidden;
`,
    _v90 = (0, _v70.default)(_v79).withConfig({
      displayName: "LowerThird.style__LowerThirdImageContainer",
      componentId: "sc-d3c26eb6-9"
    })`
  height: 100%;
  width: 100%;
`;
  var _v91 = _v59;
  function _v92(_v0, [_v1, _v2], [_v3, _v4], [_v5, _v6], _v7) {
    let _v8 = _v0 === _v15.EAnimationState.INTRO;
    return (0, _v56.jsxs)(_v83, {
      children: [(0, _v56.jsx)(_v85, {
        bgColor: _v1,
        animation: _v0,
        delay: 0,
        duration: 600 * !!_v8,
        "data-th-bg": _v2,
        "data-ai-du": 600,
        "data-ao-du": 0,
        "data-ai-dl": 0,
        "data-ao-dl": 0
      }), (0, _v56.jsx)(_v85, {
        bgColor: _v3,
        animation: _v0,
        delay: 300 * !!_v8,
        duration: 750 * !!_v8,
        "data-th-bg": _v4,
        "data-ai-du": 750,
        "data-ao-du": 0,
        "data-ai-dl": 300,
        "data-ao-dl": 0
      }), (0, _v56.jsx)(_v85, {
        bgColor: _v5,
        animation: _v0,
        delay: _v8 ? 500 : 250,
        duration: _v8 ? 0 : 750,
        position: "relative",
        "data-th-bg": _v6,
        "data-ai-du": 0,
        "data-ao-du": 750,
        "data-ai-dl": 500,
        "data-ao-dl": 250,
        children: _v7
      })]
    });
  }
  let _v93 = (0, _v53.memo)((0, _v53.forwardRef)(({
    className: _v0 = (0, _v91.createDomName)("gfx-lower-third"),
    object: _v1,
    theme: {
      font: _v2,
      primaryColor: _v3,
      secondaryColor: _v4
    },
    animation: _v5,
    scale: _v6,
    scaleOrigin: _v7
  }, _v8) => {
    if (!_v1) return null;
    let {
        imageSrc: _v9,
        line: _v10,
        subLine: _v11
      } = _v1,
      _v12 = _v5 === _v15.EAnimationState.INTRO;
    return (0, _v56.jsxs)(_v81, {
      ref: _v8,
      className: _v0,
      "data-id": _v1.id,
      "data-container": !0,
      scale: _v6,
      scaleOrigin: _v7,
      children: [_v9 && (0, _v56.jsx)(_v82, {
        "data-a-t": _v15.EGraphicsAnimation.RIGHT_SLIDE,
        children: (0, _v56.jsx)(_v89, {
          children: (0, _v56.jsx)(_v90, {
            className: (0, _v91.createDomName)(_v0, "img"),
            src: _v9,
            animation: _v5,
            delay: 750 * !!_v12,
            duration: 750,
            "data-image": "imageSrc",
            "data-ai-du": 750,
            "data-ao-du": 750,
            "data-ai-dl": 750,
            "data-ao-dl": 0
          })
        })
      }), (0, _v56.jsxs)(_v82, {
        "data-a-t": _v15.EGraphicsAnimation.LEFT_SLIDE,
        withImage: !!_v9,
        children: [_v92(_v5, ["#FFFFFF", void 0], [_v3, "primary"], ["#FFFFFF", void 0], (0, _v56.jsx)(_v87, {
          className: (0, _v91.createDomName)(_v0, "primary-text"),
          font: _v2,
          color: _v3,
          animation: _v5,
          delay: 750 * !!_v12,
          duration: 750,
          "data-text": "line",
          "data-th-cr": "primary",
          "data-ai-du": 750,
          "data-ao-du": 750,
          "data-ai-dl": 750,
          "data-ao-dl": 0,
          children: _v10
        })), (0, _v56.jsx)(_v84, {}), _v11 && _v92(_v5, [_v4, "secondary"], [_v3, "primary"], [_v4, "secondary"], (0, _v56.jsx)(_v88, {
          className: (0, _v91.createDomName)(_v0, "secondary-text"),
          font: _v2,
          animation: _v5,
          delay: 750 * !!_v12,
          duration: 750,
          "data-text": "subLine",
          "data-ai-du": 750,
          "data-ao-du": 750,
          "data-ai-dl": 750,
          "data-ao-dl": 0,
          children: _v11
        }))]
      })]
    });
  }));
  _v0.s(["LowerThird", 0, _v93], 0);
  var _v94 = _v0.i(0),
    _v95 = _v0.i(0);
  let _v96 = _v94.keyframes`
  0% {
    opacity: 0;
  }
  100% {
     opacity: 1;
  }
`;
  function _v97({
    className: _v0 = (0, _v59.createDomName)("gfx-agora-stream-avatar"),
    avatarSrc: _v1,
    fontSize: _v2 = (0, _v64.rem)(28),
    fontFamily: _v3,
    width: _v4 = "30%",
    name: _v5 = "user",
    colorSeed: _v6,
    withAnimation: _v7 = !0
  }) {
    let _v8 = (_v5[0] || "G").toUpperCase(),
      _v9 = (0, _v53.useMemo)(() => _v95.RANDOMIZED_AVATAR_COLORS[(_v6 || _v8).charCodeAt(0) % _v95.RANDOMIZED_AVATAR_COLORS.length], [_v8, _v6]);
    return (0, _v56.jsx)(_v57.Flex, {
      className: _v0,
      "data-type": "avatar",
      justifyContent: "center",
      alignItems: "center",
      sx: _v60.FULL_WIDTH_ABSOLUTE_STYLE,
      children: (0, _v56.jsx)(_v61.Box, {
        position: "relative",
        width: _v4,
        paddingBottom: "30%",
        animation: _v7 ? `${_v96} 0.2s` : void 0,
        children: _v1 || (0, _v56.jsx)(_v57.Flex, {
          "data-text": "name",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          borderRadius: "50%",
          color: "white",
          background: _v9,
          fontSize: _v2,
          fontFamily: _v3,
          fontWeight: 600,
          sx: _v60.FULL_WIDTH_ABSOLUTE_STYLE,
          children: _v8
        })
      })
    });
  }
  _v0.s(["AgoraStreamAvatar", 0, _v97], 0);
  let _v98 = (0, _v53.forwardRef)(({
      className: _v0 = (0, _v66.createDomName)("gfx-agora-stream"),
      descriptor: _v1,
      guest: _v2,
      broadcasterLowerThird: _v3,
      hasRoundedBorders: _v4,
      localMediaUid: _v5,
      roomMedia: _v6,
      localVideo: _v7,
      theme: _v8,
      sceneMeta: _v9,
      isPIP: _v10 = !1,
      isMirrored: _v11
    }, _v12) => {
      var _v13;
      let [_v14] = (_v13 = _v1.data.sourceId, (0, _v53.useMemo)(() => {
          let _v0 = String(_v13).startsWith(_v52.EAgoraConnectionType.BROADCASTER),
            _v1 = _v0 && String(_v5).startsWith(_v52.EAgoraConnectionType.BROADCASTER),
            _v2 = _v13 === _v5;
          if ((_v1 || _v2) && _v7) return [_v7, null];
          let _v3 = _v6?.find(_v0 => _v0 ? String(_v0.uid).startsWith(_v13 + _v65.liveMediaConfig.AGORA.UID_META_SEPARATOR) : _v0.uid === _v13);
          return [_v3?.video, _v3?.audio];
        }, [_v13, _v5, _v6, _v7, null])),
        _v15 = !!_v9?.guestLabelsVisible,
        _v16 = _v9?.guestLabelsVisibleAt ?? 0,
        _v17 = (0, _v53.useMemo)(() => _v3 ? {
          name: _v3.line || "",
          title: _v3.subLine || ""
        } : {
          name: _v8.graphicsConfig.BROADCASTER.DEFAULT_NAME,
          title: ""
        }, [_v3]),
        _v18 = (0, _v53.useMemo)(() => {
          let _v0 = Date.now(),
            _v1 = _v0 - (_v1.data.visibleAt || 0) < _v8.graphicsConfig.RENDERER.ANIMATION.SYSTEM_DURATION_OFFSET,
            _v2 = _v0 - (_v16 || 0) < _v8.graphicsConfig.RENDERER.ANIMATION.SYSTEM_DURATION_OFFSET,
            _v3 = _v15.EAnimationState.NONE;
          (_v1 || _v2) && (_v3 = _v15 ? _v15.EAnimationState.INTRO : _v15.EAnimationState.OUTRO);
          let _v4 = _v2?.name ?? "Guest",
            _v5 = _v2?.title ?? "";
          return _v1.data.sourceId === _v52.EAgoraConnectionType.BROADCASTER && (_v4 = _v3?.line ?? "Broadcaster", _v5 = _v3?.subLine ?? ""), (0, _v67.getLowerThirdGraphicProps)(_v2?.id ?? "0", _v4, _v5, {
            ..._v8.graphicsConfig.GRAPHICS_POSITIONING.DEFAULT_POSITION_FOR_TYPE(_v15.EGraphicsDescriptorType.GUEST_LOWER_THIRD),
            visible: _v15
          }, _v8, _v3);
        }, [_v15, _v3, _v2?.name, _v2?.title, _v8]),
        _v19 = (0, _v53.useMemo)(() => _v68(_v18.descriptor.position), [_v18.descriptor]),
        _v20 = (0, _v58.getActiveAgoraSourceTrack)(_v14),
        _v21 = _v1.data?.sourceId === _v52.EAgoraConnectionType.BROADCASTER,
        _v22 = _v2?.name || _v17.name || "U",
        _v23 = _v2?.id || (_v21 ? _v52.EAgoraConnectionType.BROADCASTER : "U"),
        _v24 = _v15 || Date.now() - _v16 < 0,
        _v25 = _v1.position.guestLabelScale;
      if (!_v1 || !_v1.position.visible) return null;
      let _v26 = _v24 ? (0, _v56.jsx)("div", {
        style: _v19,
        children: (0, _v56.jsx)(_v93, {
          ..._v18,
          scale: _v25
        })
      }) : null;
      if (_v10 && !_v20?.enabled) return null;
      let _v27 = 240 * (_v1.position.guestLabelScale || 1);
      return (0, _v56.jsxs)(_v57.Flex, {
        ref: _v12,
        className: _v0,
        "data-id": _v1.data.sourceId,
        "data-track": _v1.data.sourceId,
        "data-value": "track",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "100%",
        background: _v60.PREVIEW_GRADIENT,
        borderRadius: _v4 ? "1%" : 0,
        fontFamily: _v8?.font,
        children: [(_v2 || _v21) && !_v10 ? (0, _v56.jsx)(_v97, {
          name: _v22,
          colorSeed: _v23,
          fontSize: (0, _v64.rem)(_v27),
          fontFamily: _v8?.font,
          width: "30%"
        }) : null, (0, _v56.jsx)(_v62, {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          track: _v20,
          isMirrored: _v11
        }), _v26]
      });
    }),
    _v99 = _v70.default.div.withConfig({
      displayName: "Image.style__ImageBackground",
      componentId: "sc-d443a9f1-0"
    })`
  user-select: none;
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
  ${({
      imageSrc: _v0
    }) => _v0 ? `background-image: url('${_v0}')` : ""}
`,
    _v100 = _v70.default.div.withConfig({
      displayName: "Image.style__ImageContainer",
      componentId: "sc-d443a9f1-1"
    })`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  text-align: center;
  font-family: ${({
      font: _v0
    }) => _v0};
  max-width: 80%;
`,
    _v101 = (0, _v70.default)(_v80).withConfig({
      displayName: "Image.style__ImagePrimaryText",
      componentId: "sc-d443a9f1-2"
    })`
  font-weight: 700;
  word-break: break-word;
  vertical-align: middle;

  ${({
      scale: _v0,
      color: _v1
    }) => `
    font-size: ${Math.floor(92 * _v0)}px;
    line-height: ${Math.floor(100 * _v0)}px;
    margin: ${Math.floor(28 * _v0)}px ${Math.floor(32 * _v0)}px;
    color: ${_v1};
  `}
`,
    _v102 = (0, _v70.default)(_v80).withConfig({
      displayName: "Image.style__ImageSecondaryText",
      componentId: "sc-d443a9f1-3"
    })`
  color: #ffffff;
  vertical-align: middle;
  word-break: break-word;

  ${({
      scale: _v0
    }) => `
    font-size: ${Math.floor(60 * _v0)}px;
    line-height: ${Math.floor(68 * _v0)}px;
    margin: ${Math.floor(28 * _v0)}px ${Math.floor(32 * _v0)}px;
  `}
`,
    _v103 = (0, _v70.default)(_v80).withConfig({
      displayName: "Image.style__ImageBox",
      componentId: "sc-d443a9f1-4"
    })`
  width: 100%;
  height: 100%;
  position: ${({
      position: _v0
    }) => _v0};
`;
  var _v104 = _v59;
  let _v105 = (0, _v53.memo)((0, _v53.forwardRef)(({
    className: _v0 = (0, _v104.createDomName)("gfx-image"),
    object: _v1,
    descriptor: _v2,
    theme: _v3,
    animation: _v4,
    isHidden: _v5
  }, _v6) => {
    if (!_v1 || !_v2) return null;
    let {
        imageSrc: _v7,
        line: _v8,
        subLine: _v9
      } = _v1,
      {
        primaryColor: _v10,
        secondaryColor: _v11,
        font: _v12
      } = _v3,
      _v13 = _v2.position.width / 100;
    return _v5 ? (0, _v56.jsx)(_v99, {
      className: _v0,
      ref: _v6,
      imageSrc: _v7 || "",
      "data-id": _v2.data.sourceId,
      "data-image": "imageSrc"
    }) : (0, _v56.jsxs)(_v99, {
      ref: _v6,
      className: _v0,
      imageSrc: _v7 || "",
      "data-id": _v2.data.sourceId,
      "data-image": "imageSrc",
      children: [_v8 ? (0, _v56.jsxs)(_v100, {
        font: _v12,
        "data-a-t": _v15.EGraphicsAnimation.SELF_SLIDE,
        children: [(0, _v56.jsx)(_v103, {
          position: "absolute",
          delay: 300,
          duration: 600,
          animation: _v4,
          bgColor: "#FFFFFF",
          "data-a-dl": 300,
          "data-a-du": 600
        }), (0, _v56.jsx)(_v103, {
          position: "absolute",
          delay: 300,
          duration: 750,
          animation: _v4,
          bgColor: _v11,
          "data-th-bg": "secondary",
          "data-a-dl": 300,
          "data-a-du": 750
        }), (0, _v56.jsx)(_v103, {
          position: "relative",
          delay: 500,
          duration: 0,
          animation: _v4,
          bgColor: "#FFFFFF",
          "data-a-dl": 500,
          "data-a-du": 0,
          children: (0, _v56.jsx)(_v101, {
            className: (0, _v104.createDomName)(_v0, "primary-text"),
            color: _v10,
            animation: _v4,
            duration: 600,
            delay: 750,
            "data-text": "line",
            "data-th-cr": "primary",
            "data-a-dl": 600,
            "data-a-du": 750,
            scale: _v13,
            children: _v8
          })
        })]
      }) : null, _v9 ? (0, _v56.jsxs)(_v100, {
        font: _v12,
        "data-a-t": _v15.EGraphicsAnimation.SELF_SLIDE,
        children: [(0, _v56.jsx)(_v103, {
          position: "absolute",
          delay: 250,
          duration: 600,
          animation: _v4,
          bgColor: _v11,
          "data-a-dl": 250,
          "data-a-du": 600,
          "data-th-bg": "secondary"
        }), (0, _v56.jsx)(_v103, {
          position: "absolute",
          delay: 300,
          duration: 750,
          animation: _v4,
          bgColor: _v10,
          "data-a-dl": 300,
          "data-a-du": 750,
          "data-th-bg": "primary"
        }), (0, _v56.jsx)(_v103, {
          animation: _v4,
          position: "relative",
          bgColor: _v11,
          delay: 500,
          duration: 0,
          "data-a-dl": 500,
          "data-a-du": 0,
          "data-th-bg": "secondary",
          children: (0, _v56.jsx)(_v102, {
            className: (0, _v104.createDomName)(_v0, "secondary-text"),
            animation: _v4,
            delay: 750,
            duration: 600,
            "data-text": "subLine",
            "data-a-dl": 750,
            "data-a-du": 600,
            scale: _v13,
            children: _v9
          })
        })]
      }) : null]
    });
  }));
  _v0.s(["Image", 0, _v105], 0);
  var _v106 = _v59;
  let _v107 = _v94.keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,
    _v108 = _v94.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,
    _v109 = (0, _v53.memo)((0, _v53.forwardRef)(({
      className: _v0 = (0, _v106.createDomName)("gfx-logo"),
      descriptor: _v1,
      object: _v2,
      animation: _v3,
      fadeInDuration: _v4,
      fadeOutDuration: _v5
    }, _v6) => {
      let _v7 = (0, _v53.useMemo)(() => {
        switch (_v3) {
          case _v15.EAnimationState.INTRO:
            return {
              opacity: 1,
              animation: `${_v107} linear`,
              animationDuration: `${_v4}ms`
            };
          case _v15.EAnimationState.OUTRO:
            return {
              opacity: 0,
              animation: `${_v108} linear`,
              animationDuration: `${_v5}ms`
            };
          default:
            return {
              opacity: void 0,
              animation: void 0,
              animationDuration: void 0
            };
        }
      }, [_v3, _v4, _v5]);
      if (!_v1 || !_v2?.imageSrc) return null;
      let _v8 = _v1.position;
      return (0, _v56.jsx)(_v61.Box, {
        ref: _v6,
        className: _v0,
        position: "absolute",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `/**/ url(${_v2.imageSrc})`,
        width: `${_v8.graphicsConfig.RENDERER.WIDTH * _v8.width / 100}px`,
        height: `${_v8.graphicsConfig.RENDERER.HEIGHT * _v8.height / 100}px`,
        sx: _v7,
        "data-id": _v1.data.sourceId,
        "data-image": "imageSrc",
        "data-a-t": _v15.EGraphicsAnimation.FADE_IN,
        "data-a-du": _v4 || _v8.graphicsConfig.ANIMATION.DEFAULT_ANIMATION_DURATION,
        "data-a-dl": 0
      });
    })),
    _v110 = _v70.default.div.withConfig({
      displayName: "Poll.style__PollWrapper",
      componentId: "sc-5d5a2333-0"
    })`
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 520px;
  user-select: none;
  max-width: 100%;
  width: 100%;

  ${({
      font: _v0
    }) => `
    font-family: ${_v0};
  `}
`,
    _v111 = (0, _v70.default)(_v78).withConfig({
      displayName: "Poll.style__PollLineAnimationBox",
      componentId: "sc-5d5a2333-1"
    })`
  ${({
      fit: _v0
    }) => _v0 ? "position: absolute; width: 100%;  height: 100%;" : "position: relative;"};

  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`,
    _v112 = _v70.default.div.withConfig({
      displayName: "PollPreview.style__PollPreviewWrapper",
      componentId: "sc-8b18733-0"
    })`
  display: flex;
  flex-flow: row nowrap;
`,
    _v113 = _v70.default.div.withConfig({
      displayName: "PollPreview.style__PreviewOptionWrapper",
      componentId: "sc-8b18733-1"
    })`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  font-size: 48px;
  ${({
      index: _v0,
      count: _v1
    }) => `
    margin-right: ${_v0 === _v1 - 1 ? 0 : "16px"};
    width: ${100 / _v1}%;
    max-width: ${100 / _v1}%;
  `};
`,
    _v114 = (0, _v70.default)(_v111).withConfig({
      displayName: "PollPreview.style__PollTextBox",
      componentId: "sc-8b18733-2"
    })`
  padding: 12px 28px;
  box-shadow: 2px 2px 0 ${({
      color: _v0
    }) => _v0};
`,
    _v115 = _v70.default.div.withConfig({
      displayName: "PollPreview.style__PollText",
      componentId: "sc-8b18733-3"
    })`
  overflow: hidden;
  color: ${({
      color: _v0
    }) => _v0};
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
  function _v116({
    className: _v0 = (0, _v59.createDomName)("gfx-poll-preview"),
    options: _v1,
    theme: _v2,
    animation: _v3
  }) {
    return (0, _v56.jsx)(_v112, {
      className: _v0,
      children: _v1.map((_v0, _v1) => (0, _v56.jsx)(_v113, {
        count: _v1.length,
        index: _v1,
        children: (0, _v56.jsx)(_v114, {
          animation: _v3,
          delay: _v3 === _v15.EAnimationState.INTRO ? 0 + 500 * _v1 : 250,
          duration: _v3 === _v15.EAnimationState.INTRO ? 0 : 750,
          bgColor: "#FFFFFF",
          "data-ta": "left",
          "data-th-bs": "primary",
          "data-ai-dl": 0 + 500 * _v1,
          "data-ao-dl": 250,
          "data-ai-du": 0,
          "data-ao-du": 750,
          children: (0, _v56.jsx)(_v115, {
            className: (0, _v59.createDomName)(_v0, "option"),
            color: _v2.primaryColor,
            "data-index": _v1,
            "data-text": `options[${_v1}].text`,
            "data-th-cr": "primary",
            children: _v0.text
          })
        })
      }, _v0.id))
    });
  }
  var _v117 = _v53,
    _v118 = _v0.i(0);
  let _v119 = _v70.default.div.withConfig({
      displayName: "PollResults.style__PollResultsStationaryWrapper",
      componentId: "sc-8a0430e9-0"
    })`
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
`,
    _v120 = (0, _v70.default)(_v111).withConfig({
      displayName: "PollResults.style__PollResultsAnimatedWrapper",
      componentId: "sc-8a0430e9-1"
    })`
  display: flex;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  box-shadow: 2px 2px 0 ${({
      color: _v0
    }) => _v0};
  margin-right: 16px;
  margin-bottom: 2px;
`,
    _v121 = _v70.default.div.withConfig({
      displayName: "PollResults.style__ResultOptionWrapper",
      componentId: "sc-8a0430e9-2"
    })`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  padding: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;

  ${({
      count: _v0
    }) => {
      let _v1 = 100 / _v0;
      return `
      width: ${_v1}%;
      max-width: ${_v1}%;
    `;
    }}
`,
    _v122 = _v70.default.div.withConfig({
      displayName: "PollResults.style__ResultOptionTitleWrapper",
      componentId: "sc-8a0430e9-3"
    })`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  overflow-y: visible;
`,
    _v123 = _v70.default.h4.withConfig({
      displayName: "PollResults.style__ResultTitle",
      componentId: "sc-8a0430e9-4"
    })`
  color: ${({
      color: _v0
    }) => _v0};
  margin-bottom: 4px;
  font-size: 40px;
  line-height: 48px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 2px;
`,
    _v124 = _v70.default.div.withConfig({
      displayName: "PollResults.style__ProgressBar",
      componentId: "sc-8a0430e9-5"
    })`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  min-height: 12px;
  height: 40px;
  background-color: ${({
      isCorrect: _v0
    }) => _v0 ? (0, _v71.green)(200) : (0, _v71.slate)(200)};
  overflow: hidden;
  justify-content: center;
`,
    _v125 = _v70.default.div.withConfig({
      displayName: "PollResults.style__ProgressPercentage",
      componentId: "sc-8a0430e9-6"
    })`
  position: relative;
  display: inline;
  margin: 4px 8px;
  color: #ffffff;
  font-weight: 600;
  font-size: 36px;
  background-color: rgba(1, 1, 1, 0);
`,
    _v126 = _v70.default.div.withConfig({
      displayName: "PollResults.style__Progress",
      componentId: "sc-8a0430e9-7"
    })`
  position: absolute;
  width: ${({
      percentage: _v0
    }) => _v0}%;
  height: 100%;
  background-color: ${({
      backgroundColor: _v0
    }) => _v0};
  padding: 0;
`,
    _v127 = (0, _v70.default)(_v118.StarFilled).withConfig({
      displayName: "PollResults.style__StyledStarFilled",
      componentId: "sc-8a0430e9-8"
    })`
  width: 24px;
  height: 24px;
  margin: 4px 12px;
  path {
    fill: ${_v95.CORRECT_POLL_COLOR};
  }
`;
  class _v128 extends _v117.PureComponent {
    render() {
      let {
          className: _v0 = (0, _v59.createDomName)("gfx-poll-results"),
          animation: _v1,
          theme: _v2,
          options: _v3
        } = this.props,
        _v4 = _v3.reduce((_v0, _v1) => _v0 + (_v1.votesCount ?? 0), 0),
        _v5 = _v3.map((_v0, _v1) => this.renderResultOption(_v0, _v0, _v4, _v1));
      return (0, _v56.jsx)(_v119, {
        className: _v0,
        children: (0, _v56.jsx)(_v120, {
          animation: _v1,
          delay: _v1 === _v15.EAnimationState.INTRO ? 0 : 250,
          duration: _v1 === _v15.EAnimationState.INTRO ? 0 : 750,
          bgColor: "#FFFFFF",
          color: _v2.primaryColor,
          "data-th-bs": "primary",
          "data-ai-dl": 0,
          "data-ao-dl": 250,
          "data-ai-du": 0,
          "data-ao-du": 750,
          children: _v5
        })
      });
    }
    renderResultOption(_v0, _v1, _v2, _v3) {
      let {
          theme: _v4,
          options: _v5,
          position: _v6
        } = this.props,
        {
          id: _v7,
          text: _v8,
          correct: _v9,
          votesCount: _v10 = 0
        } = _v1,
        _v11 = _v2 > 0 ? Math.floor(100 * _v10 / _v2) : 0,
        _v12 = 0 === _v11 && _v10 > 0 ? "< 1" : _v11.toString();
      return (0, _v56.jsxs)(_v121, {
        className: _v0,
        position: _v6,
        count: _v5.length,
        "data-index": _v3,
        children: [(0, _v56.jsxs)(_v122, {
          children: [(0, _v56.jsx)(_v123, {
            color: _v4.primaryColor,
            "data-text": `options[${_v3}].text`,
            "data-th-cr": "primary",
            "data-ta": "left",
            children: _v8
          }), _v9 ? (0, _v56.jsx)(_v127, {
            "data-icon": "starFilled"
          }) : null]
        }), (0, _v56.jsxs)(_v124, {
          "data-ta": "left",
          isCorrect: _v9,
          children: [(0, _v56.jsx)(_v126, {
            percentage: _v11,
            backgroundColor: _v9 ? _v95.CORRECT_POLL_COLOR : _v4.secondaryColor,
            "data-value": _v11,
            "data-th-bg": _v9 ? void 0 : "secondary"
          }), (0, _v56.jsx)(_v126, {
            percentage: _v11,
            backgroundColor: _v9 ? _v95.CORRECT_POLL_COLOR : _v4.secondaryColor,
            "data-value": _v11,
            "data-th-bg": _v9 ? void 0 : "secondary"
          }), (0, _v56.jsxs)(_v125, {
            "data-percentage": _v12,
            "data-text": `options[${_v3}].votesCount`,
            children: [_v12, " %"]
          })]
        })]
      }, _v7);
    }
  }
  let _v129 = _v70.default.div.withConfig({
      displayName: "PollTitle.style__PollTitleWrapper",
      componentId: "sc-6925ccdc-0"
    })`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  overflow-x: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
`,
    _v130 = _v70.default.div.withConfig({
      displayName: "PollTitle.style__PollTitleText",
      componentId: "sc-6925ccdc-1"
    })`
  position: relative;
  color: #fff;
  font-weight: bold;
  max-width: unset;
  overflow-x: hidden;
  text-overflow: ellipsis;
  display: block;
  align-items: center;
  font-size: 60px;
  word-break: break-word;
  margin: 16px 32px;
`;
  function _v131({
    className: _v0 = (0, _v59.createDomName)("gfx-poll-title"),
    poll: _v1,
    theme: _v2,
    animation: _v3
  }) {
    let _v4 = _v1.options.find(_v0 => _v0.correct),
      _v5 = !!(_v1.state === _v16.EPollState.CLOSED && _v4),
      _v6 = _v5 ? _v1.answer : _v1.question,
      _v7 = _v3 === _v15.EAnimationState.INTRO;
    return (0, _v56.jsxs)(_v129, {
      className: _v0,
      children: [(0, _v56.jsx)(_v111, {
        animation: _v3,
        delay: 0,
        duration: 600 * !!_v7,
        color: _v2.primaryColor,
        fit: !0,
        "data-a-dl": 0,
        "data-ai-dr": 600,
        "data-ao-dr": 0
      }), (0, _v56.jsx)(_v111, {
        animation: _v3,
        delay: 300 * !!_v7,
        duration: 750 * !!_v7,
        color: _v2.secondaryColor,
        fit: !0,
        "data-ai-dl": 300,
        "data-ao-dl": 0,
        "data-ai-du": 750,
        "data-ao-du": 0
      }), (0, _v56.jsx)(_v111, {
        animation: _v3,
        delay: _v7 ? 500 : 250,
        duration: _v7 ? 0 : 750,
        bgColor: _v2.primaryColor,
        "data-th-bg": "primary",
        "data-ai-dl": 500,
        "data-ao-dl": 250,
        "data-ai-du": 0,
        "data-ao-du": 750,
        children: (0, _v56.jsx)(_v111, {
          animation: _v3,
          delay: _v7 ? 750 : 250,
          duration: _v7 ? 600 : 750,
          "data-ai-dl": 750,
          "data-ao-dl": 250,
          "data-ai-du": 600,
          "data-ao-du": 750,
          children: (0, _v56.jsx)(_v130, {
            className: (0, _v59.createDomName)(_v0, _v5 ? "answer" : "question"),
            "data-ta": "left",
            "data-text": _v5 ? "answer" : "question",
            children: _v6
          })
        })
      })]
    });
  }
  var _v132 = _v59;
  let _v133 = (0, _v53.memo)((0, _v53.forwardRef)(({
    className: _v0 = (0, _v132.createDomName)("gfx-poll"),
    object: _v1,
    theme: _v2,
    animation: _v3,
    descriptor: _v4
  }, _v5) => _v1 && _v4 ? (0, _v56.jsxs)(_v110, {
    ref: _v5,
    className: _v0,
    font: _v2.font,
    "data-id": _v4.data.sourceId,
    "data-a-t": _v15.EGraphicsAnimation.LEFT_SLIDE,
    children: [(0, _v56.jsx)(_v131, {
      className: (0, _v132.createDomName)(_v0, "title"),
      poll: _v1,
      theme: _v2,
      animation: _v3
    }), _v1.state === _v16.EPollState.OPENED || _v1.state === _v16.EPollState.DRAFT ? (0, _v56.jsx)(_v116, {
      className: (0, _v132.createDomName)(_v0, "preview"),
      options: _v1.options,
      theme: _v2,
      animation: _v3
    }) : (0, _v56.jsx)(_v128, {
      className: (0, _v132.createDomName)(_v0, "results"),
      options: _v1.options,
      theme: _v2,
      animation: _v3,
      position: _v4.position
    })]
  }) : null));
  function _v134() {
    return (_v134 = Object.assign.bind()).apply(null, arguments);
  }
  let _v135 = _v70.default.div.withConfig({
      displayName: "Question.style__QuestionWrapper",
      componentId: "sc-f427b860-0"
    })`
  ${_v60.NO_SELECTION};
  position: relative;
  display: flex;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  font-family: ${({
      font: _v0
    }) => _v0};
`,
    _v136 = _v70.default.div.withConfig({
      displayName: "Question.style__QuestionSection",
      componentId: "sc-f427b860-1"
    })`
  display: flex;
  flex-flow: row wrap;
`,
    _v137 = (0, _v70.default)(_v79).withConfig({
      displayName: "Question.style__QuestionImage",
      componentId: "sc-f427b860-2"
    })`
  height: 120px;
  width: 120px;
  margin-bottom: 12px;
  box-shadow: 2px 2px 0 ${({
      color: _v0
    }) => _v0};
`,
    _v138 = _v70.default.div.withConfig({
      displayName: "Question.style__QuestionContainer",
      componentId: "sc-f427b860-3"
    })`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-flow: row;
`,
    _v139 = (0, _v70.default)(_v78).withConfig({
      displayName: "Question.style__QuestionName",
      componentId: "sc-f427b860-4"
    })`
  color: ${(0, _v71.slate)(800)};
  font-size: 50px;
  line-height: 58px;
  margin: 12px 16px 4px;
  white-space: nowrap;
  flex: 1;
`,
    _v140 = (0, _v70.default)(_v78).withConfig({
      displayName: "Question.style__AnimationBox",
      componentId: "sc-f427b860-5"
    })`
  width: 100%;
  height: 100%;
  position: absolute;
`,
    _v141 = (0, _v70.default)(_v78).withConfig({
      displayName: "Question.style__AnimationTextBox",
      componentId: "sc-f427b860-6"
    })`
  width: 100%;
  overflow: hidden;
  box-shadow: 2px 2px 0 ${({
      color: _v0
    }) => _v0};
`,
    _v142 = (0, _v70.default)(function (_v0) {
      return _v53.createElement("svg", _v134({
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _v0), _v1 || (_v1 = _v53.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.074 9H16.05c-.056 0-.111-.002-.167-.01a.775.775 0 01-.184-.046c.003-.073.027-.24.163-.538a8.158 8.158 0 00.68-4.19l-.006-.049a2.404 2.404 0 00-.088-.497 1.29 1.29 0 00-.089-.201 2.976 2.976 0 00-.522-.687A2.603 2.603 0 0014 2.018c-.429 0-.828.099-1.178.307a2.233 2.233 0 00-.76.764c-.299.486-.434 1.074-.52 1.45l-.009.035c-.465 1.544-.895 2.444-1.425 3.06-.49.569-1.135.973-2.206 1.365H3.999A2 2 0 002 11v9a2 2 0 002 2h2.882c.709 0 1.377-.267 1.885-.726.11.05.232.102.362.154A7.8 7.8 0 0012 22h6.004c.217 0 .395-.062.5-.105.116-.048.222-.108.314-.167.183-.118.371-.271.554-.443.367-.347.776-.83 1.159-1.422C21.295 18.683 22 16.997 22 15v-3c0-.648-.16-1.397-.65-2.004C20.83 9.354 20.043 9 19.073 9zm-5.6-3.941l.002-.008c.05-.214.09-.392.142-.558a1.59 1.59 0 01.148-.356c.043-.07.071-.088.078-.092.005-.003.043-.026.156-.026.186 0 .323.078.44.193.042.04.075.08.102.116l.012.103a6.157 6.157 0 01-.512 3.147c-.286.628-.416 1.24-.3 1.81a1.88 1.88 0 00.882 1.246c.36.22.738.303.984.337a3.087 3.087 0 00.457.029h3.009c.455 0 .633.146.72.254.116.143.206.394.206.746v3c0 1.524-.54 2.838-1.148 3.777a5.847 5.847 0 01-.853 1.053c-.081.077-.148.132-.198.17H12a5.8 5.8 0 01-2.129-.428 5.893 5.893 0 01-.627-.294c-.343-.187-.883.091-1.395.355-.364.187-.713.367-.967.367H4v-9h4.075a1 1 0 00.332-.056c1.335-.47 2.384-1.037 3.216-2.005.814-.944 1.343-2.18 1.835-3.819a.999.999 0 00.016-.061z",
        fill: "#23313B"
      })), _v2 || (_v2 = _v53.createElement("path", {
        fill: "#23313B",
        d: "M7 10h2v10H7z"
      })));
    }).withConfig({
      displayName: "Question.style__ThumbsUp",
      componentId: "sc-f427b860-7"
    })`
  width: 36px;
  height: 36px;
  margin-left: 4px;
  margin-bottom: 4px;

  * {
    fill: ${(0, _v71.slate)(800)};
  }
`,
    _v143 = _v70.default.div.withConfig({
      displayName: "Question.style__QuestionVotesWrapper",
      componentId: "sc-f427b860-8"
    })`
  overflow: hidden;
  display: block;
`,
    _v144 = (0, _v70.default)(_v78).withConfig({
      displayName: "Question.style__QuestionVotes",
      componentId: "sc-f427b860-9"
    })`
  color: ${(0, _v71.slate)(800)};
  font-size: 40px;
  line-height: 48px;
  margin: 8px 16px 0;
  flex: 1;
  display: flex;
  align-items: center;
`,
    _v145 = (0, _v70.default)(_v78).withConfig({
      displayName: "Question.style__QuestionText",
      componentId: "sc-f427b860-10"
    })`
  color: ${(0, _v71.slate)(800)};
  font-style: normal;
  font-size: 56px;
  line-height: 64px;
  font-weight: bold;
  max-width: 100%;
  word-break: break-word;
  hyphens: auto;
  margin: 12px 16px 16px;
`;
  var _v146 = _v59;
  let _v147 = (0, _v53.memo)((0, _v53.forwardRef)(({
    className: _v0 = (0, _v146.createDomName)("gfx-question"),
    object: _v1,
    animation: _v2,
    theme: {
      font: _v3,
      primaryColor: _v4
    }
  }, _v5) => {
    if (!_v1) return null;
    let _v6 = _v2 === _v15.EAnimationState.INTRO,
      {
        line: _v7,
        subLine: _v8,
        votesCount: _v9,
        imageSrc: _v10,
        id: _v11
      } = _v1;
    return (0, _v56.jsxs)(_v135, {
      className: _v0,
      font: _v3,
      ref: _v5,
      "data-id": _v11,
      children: [(0, _v56.jsx)(_v136, {
        "data-a-t": _v15.EGraphicsAnimation.RIGHT_SLIDE,
        children: (0, _v56.jsx)(_v138, {
          children: (0, _v56.jsx)(_v137, {
            className: (0, _v146.createDomName)(_v0, "image"),
            color: _v4,
            animation: _v2,
            src: _v10,
            duration: 750,
            delay: 750 * !!_v6,
            "data-image": "imageSrc",
            "data-th-bs": "primary",
            "data-ai-dl": 750,
            "data-ao-dl": 0,
            "data-a-du": 750
          })
        })
      }), (0, _v56.jsx)(_v136, {
        "data-a-t": _v15.EGraphicsAnimation.LEFT_SLIDE,
        children: (0, _v56.jsxs)(_v138, {
          children: [(0, _v56.jsx)(_v140, {
            color: _v4,
            animation: _v2,
            bgColor: "#FFFFFF",
            duration: 600 * !!_v6,
            delay: 0,
            "data-a-dl": 0,
            "data-ai-du": 600,
            "data-ao-du": 0
          }), (0, _v56.jsx)(_v140, {
            animation: _v2,
            color: _v4,
            bgColor: _v4,
            duration: 750 * !!_v6,
            delay: 300 * !!_v6,
            "data-th-bg": "primary",
            "data-ai-du": 750,
            "data-ao-du": 0,
            "data-ai-dl": 300,
            "data-ao-dl": 0
          }), (0, _v56.jsxs)(_v141, {
            animation: _v2,
            bgColor: "#FFFFFF",
            color: _v4,
            duration: _v6 ? 0 : 750,
            delay: _v6 ? 500 : 250,
            "data-th-bs": "primary",
            "data-ai-du": 0,
            "data-ao-du": 750,
            "data-ai-dl": 500,
            "data-ao-dl": 250,
            children: [(0, _v56.jsxs)(_v138, {
              children: [(0, _v56.jsx)(_v139, {
                className: (0, _v146.createDomName)(_v0, "line"),
                animation: _v2,
                duration: 600 * !!_v6,
                delay: 750,
                "data-a-dl": 750,
                "data-ai-du": 600,
                "data-ao-du": 0,
                "data-text": "line",
                children: _v7
              }), _v9 ? (0, _v56.jsx)(_v143, {
                children: (0, _v56.jsxs)(_v144, {
                  className: (0, _v146.createDomName)(_v0, "votes"),
                  "data-text": "votesCount",
                  animation: _v2,
                  duration: 600 * !!_v6,
                  delay: 750,
                  "data-ta": "left",
                  "data-a-dl": 750,
                  "data-ai-du": 600,
                  "data-ao-du": 0,
                  children: [_v9, (0, _v56.jsx)(_v142, {
                    className: (0, _v146.createDomName)("votes-likes"),
                    "data-icon": "thumbsUp"
                  })]
                })
              }) : null]
            }), (0, _v56.jsx)(_v145, {
              className: (0, _v146.createDomName)(_v0, "sub-line"),
              "data-text": "subLine",
              animation: _v2,
              duration: 600,
              delay: 750,
              "data-a-du": 600,
              "data-a-dl": 750,
              children: _v8
            })]
          })]
        })
      })]
    }, _v11);
  }));
  var _v148 = _v59;
  let _v149 = (0, _v53.memo)((0, _v53.forwardRef)(({
    className: _v0 = (0, _v148.createDomName)("gfx-agora-media"),
    descriptor: _v1,
    mediaTrack: _v2,
    graphicObject: _v3,
    isMediaPlaying: _v4
  }, _v5) => {
    if (!_v1 || !_v1.position.visible) return null;
    let _v6 = _v4 ? (0, _v58.getActiveAgoraSourceTrack)(_v2) : null;
    return (0, _v56.jsx)(_v57.Flex, {
      ref: _v5,
      className: _v0,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      "data-id": _v1.data.sourceId,
      "data-track": _v1.data.sourceId,
      "data-value": "track",
      children: (0, _v56.jsx)(_v62, {
        track: _v6,
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        background: _v3?.videoThumbFullSize ? void 0 : _v60.PREVIEW_GRADIENT,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: _v3?.videoThumbFullSize ? `url('${_v3?.videoThumbFullSize}')` : void 0
      })
    });
  }));
  _v0.s(["AgoraMediaPlayer", 0, _v149], 0);
  let _v150 = _v70.default.div.withConfig({
    displayName: "Slide.style__SlideBackground",
    componentId: "sc-a5699c4-0"
  })`
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  ${({
    imageSrc: _v0
  }) => _v0 ? `background-image: url('${_v0}')` : ""}
`;
  var _v151 = _v59;
  function _v152(_v0, _v1 = 0) {
    return _v0?.baseUrl && _v0?.slides ? `${_v0.baseUrl}${_v0.slides[_v1]}` : null;
  }
  _v0.s(["getSlideImage", 0, _v152, "getSlideThumbnail", 0, function (_v0, _v1 = 0) {
    return _v0?.baseUrl && _v0?.thumbnails ? `${_v0.baseUrl}${_v0.thumbnails[_v1]}` : null;
  }], 0);
  let _v153 = (0, _v53.memo)((0, _v53.forwardRef)(({
    className: _v0 = (0, _v151.createDomName)("gfx-slide"),
    object: _v1,
    descriptor: _v2
  }, _v3) => {
    if (!_v1) return null;
    let {
        slideIndex: _v4 = 0
      } = _v2.data,
      _v5 = _v152(_v1, _v4);
    return (0, _v56.jsx)(_v150, {
      ref: _v3,
      className: _v0,
      imageSrc: _v5 || "",
      "data-id": _v2.data.sourceId,
      "data-index": _v4,
      "data-image": "imageSrc"
    });
  }));
  function _v154(_v0) {
    switch (_v0) {
      case _v15.EGraphicsDescriptorType.AGORA_STREAM:
        return _v98;
      case _v15.EGraphicsDescriptorType.AGORA_SCREEN:
        return _v63;
      case _v15.EGraphicsDescriptorType.AGORA_MEDIA:
        return _v149;
      case _v15.EGraphicsDescriptorType.IMAGE:
        return _v105;
      case _v15.EGraphicsDescriptorType.LOGO:
        return _v109;
      case _v15.EGraphicsDescriptorType.POLL:
        return _v133;
      case _v15.EGraphicsDescriptorType.GUEST_LOWER_THIRD:
      case _v15.EGraphicsDescriptorType.LOWER_THIRD:
        return _v93;
      case _v15.EGraphicsDescriptorType.QNA:
        return _v147;
      case _v15.EGraphicsDescriptorType.SLIDES:
        return _v153;
      default:
        return null;
    }
  }
  function _v155(_v0, _v1) {
    let _v2 = {
        type: _v1.type,
        position: _v8.graphicsConfig.GRAPHICS_POSITIONING.DEFAULT_POSITION_FOR_TYPE(_v1.type),
        data: {
          ..._v1,
          sourceId: _v1.id,
          visibleAt: 0
        }
      },
      _v3 = _v154(_v0);
    if (!_v3) return null;
    let _v4 = document.createElement("div"),
      _v5 = document.createElement("div"),
      _v6 = {
        current: null
      };
    Object.assign(_v4.style, _v69()), Object.assign(_v5.style, _v68(_v2.position)), _v4.appendChild(_v5), window.document.body.appendChild(_v4);
    let _v7 = (0, _v55.createRoot)(_v5);
    (0, _v54.flushSync)(() => {
      _v7.render((0, _v53.createElement)(_v3, {
        ref: _v6,
        descriptor: _v2,
        object: _v1,
        theme: _v8.graphicsConfig.DEFAULT_THEME,
        animation: _v15.EAnimationState.NONE,
        fadeInDuration: 0,
        fadeOutDuration: 0
      }));
    });
    let _v8 = _v0 === _v15.EGraphicsDescriptorType.GUEST_LOWER_THIRD ? _v4 : _v6.current,
      _v9 = function _v0(_v1, _v2, _v3, _v4) {
        let _v5 = window.getComputedStyle(_v1),
          _v6 = _v1.getBoundingClientRect();
        for (let _v0 of (_v2.x = +(_v6.x - _v3.x).toFixed(_v8.graphicsConfig.RENDERER.POSITION_PRECISION), _v2.y = +(_v6.y - _v3.y).toFixed(_v8.graphicsConfig.RENDERER.POSITION_PRECISION), _v2.w = +_v6.width.toFixed(_v8.graphicsConfig.RENDERER.POSITION_PRECISION), _v2.h = +_v6.height.toFixed(_v8.graphicsConfig.RENDERER.POSITION_PRECISION), _v5.overflow !== _v8.graphicsConfig.RENDERER.OVERFLOW_VISIBLE && (_v2.ovrfw = _v5.overflow), _v5.backgroundColor !== _v8.graphicsConfig.RENDERER.TRANSPARENT_BACKGROUND && (_v2["bg-c"] = _v5.backgroundColor), _v5.backgroundSize !== _v8.graphicsConfig.RENDERER.AUTO_BACKGROUND && (_v2["bg-s"] = _v5.backgroundSize), _v5.backgroundPosition !== _v8.graphicsConfig.RENDERER.TOP_LEFT_BACKGROUND && (_v2["bg-p"] = _v5.backgroundPosition), _v5.boxShadow !== _v8.graphicsConfig.RENDERER.STYLE_NONE && (_v2.bs = _v5.boxShadow), _v5.textAlign !== _v8.graphicsConfig.RENDERER.TEXT_ALIGN_START && (_v2.ta = _v5.textAlign), _v5.textOverflow !== _v8.graphicsConfig.RENDERER.TEXT_OVERFLOW_CLIP && (_v2.to = _v5.textOverflow), _v5.wordBreak !== _v8.graphicsConfig.RENDERER.WORD_BREAK_NORMAL && (_v2.wb = _v5.wordBreak), _v5.color && _v5.color !== _v4?.color && (_v2.cr = _v5.color), _v5.fontSize && _v5.fontSize !== _v4?.fontSize && (_v2.fs = _v5.fontSize), _v5.fontWeight && _v5.fontWeight !== _v4?.fontWeight && (_v2.fw = _v5.fontWeight), _v5.lineHeight !== _v8.graphicsConfig.RENDERER.LINE_HEIGHT_NORMAL && _v5.lineHeight !== _v4?.lineHeight && (_v2.lh = _v5.lineHeight), _v8.graphicsConfig.RENDERER.REQUIRED_DATA_FIELDS)) {
          let _v0 = `data-${_v0}`,
            _v1 = _v1.getAttribute(_v0);
          null != _v1 && (_v2[`d-${_v0}`] = _v1);
        }
        if (_v1.children.length && !_v1.getAttribute("data-icon")) {
          for (let _v0 of (_v2.ch = [], _v1.children)) if (!_v0.getAttribute("data-ignore")) {
            let _v0 = _v0(_v0, {}, _v3, _v5);
            _v2.ch.push(_v0);
          }
        }
        return _v2;
      }(_v6.current, {}, _v8.getBoundingClientRect(), null);
    return window.document.body.removeChild(_v4), _v9;
  }
  function _v156(_v0, _v1) {
    return btoa(JSON.stringify(_v155(_v0, _v1)));
  }
  async function _v157(_v0) {
    return _v0.log.info("Loading graphics snapshots collection"), _v0.assertIsInitialized(), (0, _v18.getRefValue)(_v0.firebase, _v0.snapshotsRef);
  }
  function _v158(_v0, _v1, _v2) {
    if (_v0.assertIsInitialized(), !_v2.id) throw _v0.log.error("Cannot prerender graphic without id"), new _v17.LiveError("Graphic item requires ID to prerender snapshot.");
    let _v3 = {
      default: _v156(_v1, _v2)
    };
    return [_v1 === _v15.EGraphicsDescriptorType.QNA ? (0, _v18.getRefChild)(_v0.firebase, _v0.snapshotsRef, `global/${_v1}`) : (0, _v18.getRefChild)(_v0.firebase, _v0.snapshotsRef, `${_v1}/${_v2.id}`), _v3];
  }
  _v0.s(["Slide", 0, _v153], 0), _v0.s(["mapTypeToComponent", 0, _v154], 0), _v0.s(["getEncryptedPrerenderedSnapshot", 0, _v156, "getPrerenderedSnapshot", 0, _v155], 0);
  var _v159 = _v0.i(0);
  async function _v160(_v0, _v1) {
    return _v0.log.info("Updating graphic theme:", _v1), _v0.assertIsInitialized(), _v0.assertCanEdit(), (0, _v18.updateRefValue)(_v0.firebase, _v0.themeRef, _v1);
  }
  async function _v161(_v0, _v1) {
    _v0.log.info("Updating broadcaster lowerthird:", _v1), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let _v2 = (0, _v39.queryOptionalViewerSync)(_v0),
      _v3 = _v2?.user?.name ?? _v8.graphicsConfig.BROADCASTER.DEFAULT_NAME,
      _v4 = _v0.context.globalList[_v8.graphicsConfig.BROADCASTER.LOWERTHIRD_KEY] || null,
      _v5 = _v33({
        id: _v52.EAgoraConnectionType.BROADCASTER,
        type: _v15.EGraphicsDescriptorType.GUEST_LOWER_THIRD,
        updatedAt: _v4?.createdAt ? (0, _v28.getAbsoluteNow)() : 0,
        createdAt: _v4?.createdAt || (0, _v28.getAbsoluteNow)(),
        line: _v4?.line || _v159.translations.broadcaster,
        subLine: _v4?.subLine
      });
    _v5.lastChangedBy = _v3, "name" in _v1 && (_v5.line = _v1.name), "title" in _v1 && (_v5.subLine = _v1.title), await (0, _v18.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, [[_v0.broadcasterLowerThirdRef, _v5], _v158(_v0, _v15.EGraphicsDescriptorType.GUEST_LOWER_THIRD, _v5)]);
  }
  async function _v162(_v0, _v1, _v2) {
    if (_v0.log.info("Adding slides graphic:", _v1, _v2), _v0.assertIsInitialized(), _v0.assertCanEdit(), !_v2) throw TypeError("File is not supplied for slides creation.");
    let _v3 = await (0, _v18.pushRefValue)(_v0.firebase, _v0.slidesRef),
      _v4 = _v3.key;
    _v46(_v0, _v4, _v15.EGraphicsDescriptorType.SLIDES, _v1.name);
    try {
      let _v0 = _v2 instanceof File ? await _v48(_v0, _v2, _v15.EGraphicsDescriptorType.SLIDES, _v4) : _v2,
        _v1 = _v31({
          id: _v4,
          name: _v1.name,
          slideIndex: 0,
          status: _v15.ESlidesStatus.UPLOADED,
          fileUrl: _v0
        });
      return await (0, _v18.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, [[_v3, _v1], _v158(_v0, _v15.EGraphicsDescriptorType.SLIDES, _v1)]), _v1;
    } catch (_v0) {
      throw _v0.log.error("Failed to create new slides:", _v0), _v47(_v0, _v4), _v0;
    }
  }
  async function _v163(_v0, _v1, _v2) {
    _v0.log.info("Adding logo gfx:", _v1), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let _v3 = _v2 ? await _v48(_v0, _v2, _v15.EGraphicsDescriptorType.LOGO) : null,
      _v4 = await (0, _v18.pushRefValue)(_v0.firebase, _v0.logoRef),
      _v5 = _v32({
        id: _v4.key,
        imageSrc: _v3
      });
    return await (0, _v18.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, [[_v4, _v5], _v158(_v0, _v15.EGraphicsDescriptorType.LOGO, _v5)]), _v5;
  }
  async function _v164(_v0, _v1, _v2) {
    if (_v0.log.info("Updating logo gfx:", _v1), _v0.assertIsInitialized(), _v0.assertCanEdit(), !_v2) return _v0.log.warn("Skipped logo update, no new file supplied:", _v2), null;
    {
      let _v0 = await _v48(_v0, _v2, _v15.EGraphicsDescriptorType.LOGO),
        _v1 = _v32({
          id: _v1.id,
          imageSrc: _v0,
          updatedAt: (0, _v28.getAbsoluteNow)(),
          createdAt: _v1.createdAt
        });
      return await (0, _v18.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, [[(0, _v18.getRefChild)(_v0.firebase, _v0.logoRef, _v1.id), _v1], _v158(_v0, _v15.EGraphicsDescriptorType.LOGO, _v1)]), _v1;
    }
  }
  async function _v165(_v0, _v1, _v2 = null) {
    _v0.log.info("Adding new lowerthird:", _v1, _v2), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let _v3 = _v2 ? await _v48(_v0, _v2, _v15.EGraphicsDescriptorType.LOWER_THIRD) : null,
      _v4 = await (0, _v18.pushRefValue)(_v0.firebase, _v0.lowerthirdRef),
      _v5 = _v33({
        id: _v4.key,
        imageSrc: _v3,
        line: _v1.line,
        subLine: _v1.subLine
      });
    return await (0, _v18.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, [[_v4, _v5], _v158(_v0, _v15.EGraphicsDescriptorType.LOWER_THIRD, _v5)]), _v5;
  }
  async function _v166(_v0, _v1, _v2 = null) {
    _v0.log.info("Updating lowerthird:", _v1, _v2), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let _v3 = _v2 ? await _v48(_v0, _v2, _v15.EGraphicsDescriptorType.LOWER_THIRD) : _v1.imageSrc,
      _v4 = _v33({
        id: _v1.id,
        createdAt: _v1.createdAt,
        updatedAt: (0, _v28.getAbsoluteNow)(),
        imageSrc: _v3,
        line: _v1.line,
        subLine: _v1.subLine
      });
    return await (0, _v18.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, [[(0, _v18.getRefChild)(_v0.firebase, _v0.lowerthirdRef, _v4.id), _v4], _v158(_v0, _v15.EGraphicsDescriptorType.LOWER_THIRD, _v4)]), _v4;
  }
  async function _v167(_v0, _v1, _v2) {
    if (_v0.log.info("Adding image graphic:", _v1, _v2), _v0.assertIsInitialized(), _v0.assertCanEdit(), !_v2) throw new _v17.LiveError("File is not supplied for image creation.");
    let _v3 = await (0, _v18.pushRefValue)(_v0.firebase, _v0.fullscreenRef),
      _v4 = _v3.key;
    _v46(_v0, _v4, _v15.EGraphicsDescriptorType.IMAGE, _v1.line);
    try {
      let _v0 = _v2 instanceof File ? await _v48(_v0, _v2, _v15.EGraphicsDescriptorType.IMAGE) : _v2,
        _v1 = _v34({
          id: _v4,
          line: _v1.line,
          subLine: _v1.subLine,
          imageSrc: _v0,
          hidden: _v1.hidden || !1
        });
      return await (0, _v18.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, [[_v3, _v1], _v158(_v0, _v15.EGraphicsDescriptorType.IMAGE, _v1)]), _v1;
    } catch (_v0) {
      throw _v0.log.error("Failed to create new fullscreen:", _v0), _v47(_v0, _v4), _v0;
    }
  }
  async function _v168(_v0, _v1) {
    let _v2 = Object.values(_v0.context.agoraMediaList),
      _v3 = Object.values(_v0.context.fullscreenList),
      _v4 = _v1.map(_v0 => {
        switch (_v0.type) {
          case _v15.EGraphicsDescriptorType.IMAGE:
            return _v3.find(_v0 => _v0.imageSrc === _v0.imageSrc) || _v167(_v0, _v34({
              id: "",
              line: "",
              subLine: "",
              imageSrc: _v0.imageSrc,
              hidden: !0
            }, !1), _v0.imageSrc);
          case _v15.EGraphicsDescriptorType.AGORA_MEDIA:
            return _v2.find(_v0 => _v0.videoThumbFullSize === _v0.videoThumbFullSize) || _v170(_v0, _v29({
              id: "",
              videoThumbFullSize: _v0.videoThumbFullSize,
              videoId: _v0.videoId,
              videoThumb: _v0.videoThumb,
              videoDuration: _v0.videoDuration,
              hidden: !0
            }, !1));
          default:
            return _v0;
        }
      });
    return await Promise.all(_v4);
  }
  async function _v169(_v0, _v1, _v2 = null) {
    _v0.log.info("Updating fullscreen graphic:", _v1.id, _v2), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let _v3 = _v2 ? await _v48(_v0, _v2, _v15.EGraphicsDescriptorType.IMAGE) : _v1.imageSrc,
      _v4 = _v34({
        id: _v1.id,
        line: _v1.line,
        subLine: _v1.subLine,
        imageSrc: _v3,
        createdAt: _v1.createdAt,
        updatedAt: (0, _v28.getAbsoluteNow)()
      });
    return await (0, _v18.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, [[(0, _v18.getRefChild)(_v0.firebase, _v0.fullscreenRef, _v4.id), _v4], _v158(_v0, _v15.EGraphicsDescriptorType.IMAGE, _v4)]), _v4;
  }
  async function _v170(_v0, _v1) {
    _v0.log.info("Adding single video gfx:", _v1), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let [_v2, _v3] = await _v173(_v0, _v1);
    return await (0, _v18.setRefValue)(_v0.firebase, _v2, _v3), _v3;
  }
  async function _v171(_v0, _v1) {
    _v0.log.info("Updating video gfx:", _v1), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let _v2 = _v29({
      id: _v1.id,
      createdAt: _v1.createdAt,
      updatedAt: (0, _v28.getAbsoluteNow)(),
      videoId: _v1.videoId,
      videoHash: _v1.videoHash,
      videoDuration: _v1.videoDuration,
      videoThumb: _v1.videoThumb,
      videoThumbFullSize: _v1.videoThumbFullSize,
      hidden: _v1.hidden
    });
    return await (0, _v18.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, [[(0, _v18.getRefChild)(_v0.firebase, _v0.mediaRef, _v1.id), _v2]]), _v2;
  }
  async function _v172(_v0, _v1) {
    if (_v0.log.info("Adding multiple videos gfx:", _v1), _v0.assertIsInitialized(), _v0.assertCanEdit(), 0 === _v1.length) return _v0.log.info("Skip addition of gfx, empty list provided:", _v1), [];
    let _v2 = await Promise.all(_v1.map(_v0 => _v173(_v0, _v0)));
    return await (0, _v18.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, _v2), _v2.map(_v0 => _v0[1]);
  }
  async function _v173(_v0, _v1) {
    _v0.assertIsInitialized(), _v0.assertCanEdit();
    let _v2 = await (0, _v18.pushRefValue)(_v0.firebase, _v0.mediaRef),
      _v3 = _v29({
        id: _v2.key,
        videoThumbFullSize: _v1.videoThumbFullSize,
        videoId: _v1.videoId,
        videoThumb: _v1.videoThumb,
        videoDuration: _v1.videoDuration,
        hidden: _v1.hidden || !1
      });
    return [_v2, _v3];
  }
  var _v174 = _v0.i(0),
    _v175 = _v0.i(0),
    _v176 = _v0.i(0);
  function _v177({
    gctlConfig: _v0,
    videoId: _v1,
    fields: _v2
  }) {
    return (0, _v175.sendApiRequest)({
      method: _v176.ERequestMethod.GET,
      path: `/videos/${_v1}`,
      gctlConfig: _v0,
      fields: _v2
    });
  }
  async function _v178(_v0, _v1) {
    _v1.type === _v15.EGraphicsDescriptorType.AGORA_MEDIA && _v0.resyncQueue.add(() => _v179(_v0, _v1));
  }
  async function _v179(_v0, _v1) {
    if (!_v0.isVpaas) try {
      let _v0 = _v1.videoId;
      if (_v0 && !_v1.videoHash && _v0.sessionApplicationType === _v13.EComposerApplicationType.BROADCASTER) {
        let _v0 = await _v177({
            videoId: _v0,
            gctlConfig: (0, _v174.queryManagerGctlConfig)(_v0)
          }),
          _v1 = _v30(_v0),
          _v2 = _v1.videoDuration !== _v1.videoDuration || _v1.videoThumb !== _v1.videoThumb || _v1.videoThumbFullSize !== _v1.videoThumbFullSize,
          _v3 = _v0.context.agoraMediaList[_v1.id],
          _v4 = !!(_v3 && _v3.videoId && "number" == typeof _v1.videoDuration && _v1.videoThumb && _v1.videoThumbFullSize === _v1.videoThumbFullSize);
        !_v0.IS_DISPOSED && _v2 && _v4 && _v3 && (_v0.log.info("Re-sync of video needed:", _v1, "->", _v1), (0, _v41.trackLiveAction)("graphics_manager_sync_video", {
          clipId: _v0,
          duration: _v1.videoDuration
        }), (0, _v41.trackLiveAction)("graphics_manager_sync_video_dry", {
          clipId: _v0,
          duration: _v1.videoDuration === _v1.videoDuration ? "same" : `${_v1.videoDuration} -> ${_v1.videoDuration}`,
          thumb: _v1.videoThumb === _v1.videoThumb ? "same" : `${_v1.videoThumb} -> ${_v1.videoThumb}`,
          thumbFS: _v1.videoThumbFullSize === _v1.videoThumbFullSize ? "same" : `${_v1.videoThumbFullSize} -> ${_v1.videoThumbFullSize}`
        }), await _v0.updateVideo({
          ..._v3,
          videoDuration: _v1.videoDuration,
          videoThumb: _v1.videoThumb,
          videoThumbFullSize: _v1.videoThumbFullSize
        }));
      }
    } catch (_v0) {
      _v0.log.warn("Re-sync of video item on page load failed:", _v0);
    }
  }
  async function _v180(_v0, _v1) {
    _v0.canEditGraphic && (await (0, _v5.forMillis)(_v8.graphicsConfig.CLEANUP.STALE_OBJECT_REMOVAL_DELAY), _v0.log.warn("Removing stale object:", _v1.type, _v1.id), await _v0.removeGraphic(_v1.type, _v1.id));
  }
  function _v181({
    graphic: _v0,
    graphicsType: _v1,
    methodName: _v2
  }) {
    let _v3 = function (_v0) {
      switch (_v0) {
        case _v15.EGraphicsDescriptorType.LOWER_THIRD:
          return _v22;
        case _v15.EGraphicsDescriptorType.IMAGE:
          return _v23;
        case _v15.EGraphicsDescriptorType.LOGO:
          return _v21;
        case _v15.EGraphicsDescriptorType.POLL:
          return _v25;
        case _v15.EGraphicsDescriptorType.AGORA_MEDIA:
          return _v20;
        default:
          return () => [];
      }
    }(_v1)(_v0);
    return (0, _v41.checkErrorsAndTrack)({
      possibleErrors: _v3,
      methodName: _v2,
      data: _v0
    });
  }
  function _v182(_v0, _v1, _v2) {
    let _v3 = `${_v2}List`,
      _v4 = () => {
        let _v0 = _v0.queryDataSync({
          type: _v10.ELiveConnectionQuery.FIREBASE_INTERACTION_CREDENTIALS
        });
        return _v0?.data?.roomId;
      },
      _v5 = _v0 => {
        _v0.log.info("Graphic added:", _v2, _v0.key);
        let _v1 = _v0.context[_v3],
          _v2 = _v0.context.pendingGraphicsList,
          _v3 = _v0.val();
        if ((0, _v67.isInteractionToolsGraphic)(_v3.type) && (0, _v67.isGraphicStale)(_v3, _v4())) return _v180(_v0, _v3);
        _v181({
          graphic: _v3,
          graphicsType: _v2,
          methodName: "onGraphicAdded"
        }) && (delete _v2[_v3.id], _v0.setContext({
          [_v3]: {
            ..._v1,
            [_v0.key]: _v3
          },
          pendingGraphicsList: (0, _v43.omit)(_v2, _v3.id)
        }), _v178(_v0, _v3));
      },
      _v6 = _v0 => {
        _v0.log.info("Graphic removed:", _v2, _v0.key);
        let _v1 = {
          ..._v0.context[_v3]
        };
        delete _v1[_v0.key];
        let _v2 = {};
        _v2[_v3] = _v1, _v0.setContext(_v2);
      },
      _v7 = _v0 => {
        _v0.log.info("Graphic updated:", _v2, _v0.key);
        let _v1 = {
            ..._v0.context[_v3]
          },
          _v2 = _v0.val();
        if (!((0, _v67.isInteractionToolsGraphic)(_v2.type) && (0, _v67.isGraphicStale)(_v2, _v4())) && _v181({
          graphic: _v2,
          graphicsType: _v2,
          methodName: "onGraphicChanged"
        })) {
          _v1[_v0.key] = _v2;
          let _v0 = {};
          _v0[_v3] = _v1, _v0.setContext(_v0);
        }
      };
    return (0, _v18.onRefEvent)(_v0.firebase, _v1, "child_added", _v5, "gfx-" + _v2), (0, _v18.onRefEvent)(_v0.firebase, _v1, "child_removed", _v6, "gfx-" + _v2), (0, _v18.onRefEvent)(_v0.firebase, _v1, "child_changed", _v7, "gfx-" + _v2), () => {
      (0, _v18.offRefEvent)(_v0.firebase, _v1, "child_added", _v5), (0, _v18.offRefEvent)(_v0.firebase, _v1, "child_removed", _v6), (0, _v18.offRefEvent)(_v0.firebase, _v1, "child_changed", _v7);
    };
  }
  async function _v183(_v0, _v1) {
    try {
      _v0.log.info("Hydrating graphics theme");
      let _v0 = await (0, _v18.getRefValue)(_v0.firebase, _v1);
      _v0.setContext({
        theme: {
          ..._v8.graphicsConfig.DEFAULT_THEME,
          ..._v0
        }
      });
    } catch (_v0) {
      throw _v0.log.error("Failed to hydrate graphics theme:", _v0), (0, _v41.trackLiveError)(_v0, {
        category: _v40.ELiveErrorCategory.GRAPHICS,
        method: "hydrateGraphicsTheme"
      }), _v0;
    }
  }
  _v0.s(["getVideoInfo", 0, _v177], 0);
  class _v184 extends _v38.UnsubscribingContextManager {
    context = {
      graphicsActions: (0, _v4.createActions)({
        removeGraphic: (_v0, _v1) => this.removeGraphic(_v0, _v1),
        addLogo: (_v0, _v1) => this.addLogo(_v0, _v1),
        saveLogo: (_v0, _v1) => this.saveLogo(_v0, _v1),
        addLowerThird: (_v0, _v1) => this.addLowerThird(_v0, _v1),
        saveLowerThird: (_v0, _v1) => this.saveLowerThird(_v0, _v1),
        addImage: (_v0, _v1) => this.addImage(_v0, _v1),
        saveImage: (_v0, _v1) => this.saveImage(_v0, _v1),
        updateTheme: _v0 => this.updateTheme(_v0),
        addVideo: _v0 => this.addVideo(_v0),
        addVideos: _v0 => this.addVideos(_v0),
        updateVideo: _v0 => this.updateVideo(_v0),
        addSlides: (_v0, _v1) => this.addSlides(_v0, _v1),
        cancelUploading: _v0 => this.cancelUploading(_v0),
        updateBroadcasterLowerThird: _v0 => this.updateBroadcasterLowerThird(_v0),
        loadSnapshots: () => _v157(this),
        updateSnapshot: _v0 => {
          let [_v1, _v2] = _v158(this, _v0.type, _v0);
          return (0, _v18.setRefValue)(this.firebase, _v1, _v2);
        },
        purgeGraphics: _v0 => _v50(this, _v0),
        getGraphic: (_v0, _v1) => _v51(this, _v0, _v1)
      }),
      additionalInformation: (0, _v4.createComputed)(({
        globalList: _v0
      }) => {
        let _v1 = _v0[_v8.graphicsConfig.BROADCASTER.LOWERTHIRD_KEY];
        return {
          broadcaster: _v1 ? {
            name: _v1.line || "",
            title: _v1.subLine || ""
          } : {
            name: this.defaultBroadcasterName,
            title: this.defaultBroadcasterTitle
          }
        };
      }, ({
        globalList: _v0
      }) => [_v0]),
      theme: {
        ..._v8.graphicsConfig.DEFAULT_THEME
      },
      isHydrated: !1,
      hydratedAt: null,
      lowerthirdList: {},
      logoList: {},
      fullscreenList: {},
      pollList: {},
      agoraMediaList: {},
      slidesList: {},
      globalList: {},
      pendingGraphicsList: {}
    };
    log = new _v42.Logger("🪄GFX");
    resyncQueue = new _v6(10, 0);
    isVpaas;
    sessionApplicationType;
    canEditGraphic = !1;
    uploadingTasks = {};
    defaultBroadcasterName = _v8.graphicsConfig.BROADCASTER.DEFAULT_NAME;
    defaultBroadcasterTitle = "";
    storage = null;
    storageRef = null;
    firebase;
    rootRef = null;
    snapshotsRef = null;
    graphicsRef = null;
    logoRef = null;
    globalGraphicsRef = null;
    broadcasterLowerThirdRef = null;
    lowerthirdRef = null;
    fullscreenRef = null;
    pollRef = null;
    mediaRef = null;
    slidesRef = null;
    themeRef = null;
    constructor(_v0) {
      super(), this.isVpaas = !!_v0?.isVpaas, this.sessionApplicationType = _v0?.sessionApplicationType ?? _v13.EComposerApplicationType.UNKNOWN, this.canEditGraphic = !!_v0?.graphic?.canEditGraphic, this.defaultBroadcasterTitle = _v0?.graphic?.initialBroadcasterTitle ?? "";
    }
    onProvisionStarted() {
      this.defaultBroadcasterName = (0, _v39.queryOptionalViewerSync)(this)?.user?.name || _v8.graphicsConfig.BROADCASTER.DEFAULT_NAME;
    }
    onProvisionEnded() {
      this.resyncQueue.dispose(), super.onProvisionEnded();
    }
    updateGraphicItemUploadingProgress(_v0, _v1) {
      let _v2;
      (_v2 = {
        ...this.context.pendingGraphicsList
      })[_v0] && _v1 > _v2[_v0].uploadingProgress && (_v2[_v0].uploadingProgress = _v1, this.setContext({
        pendingGraphicsList: _v2
      }));
    }
    cancelUploading(_v0) {
      return (0, _v41.withLiveErrorTracking)(() => function (_v0, _v1) {
        let _v2 = _v0.uploadingTasks[_v1 || ""];
        if (!_v2) return _v0.log.info("Uploading task does not exist");
        _v0.log.info("Cancel uploading task for gfx:", _v1), _v2.cancel();
      }(this, _v0), {
        category: _v40.ELiveErrorCategory.GRAPHICS,
        method: "cancelUploading"
      });
    }
    async removeGraphic(_v0, _v1) {
      return (0, _v41.withLiveErrorTracking)(() => _v49(this, _v0, _v1), {
        category: _v40.ELiveErrorCategory.GRAPHICS,
        method: "removeGraphic"
      });
    }
    async updateBroadcasterLowerThird(_v0) {
      return (0, _v41.withLiveErrorTracking)(() => _v161(this, _v0), {
        category: _v40.ELiveErrorCategory.GRAPHICS,
        method: "updateBroadcasterLowerThird"
      });
    }
    async updateTheme(_v0) {
      return (0, _v41.withLiveErrorTracking)(() => _v160(this, _v0), {
        category: _v40.ELiveErrorCategory.GRAPHICS,
        method: "updateTheme"
      });
    }
    async addVideo(_v0) {
      return (0, _v41.withLiveErrorTracking)(() => _v170(this, _v0), {
        category: _v40.ELiveErrorCategory.GRAPHICS,
        method: "addVideo"
      });
    }
    async addVideos(_v0) {
      return (0, _v41.withLiveErrorTracking)(() => _v172(this, _v0), {
        category: _v40.ELiveErrorCategory.GRAPHICS,
        method: "addVideos"
      });
    }
    async updateVideo(_v0) {
      return (0, _v41.withLiveErrorTracking)(() => _v171(this, _v0), {
        category: _v40.ELiveErrorCategory.GRAPHICS,
        method: "updateVideo"
      });
    }
    async addSlides(_v0, _v1) {
      return (0, _v41.withLiveErrorTracking)(() => _v162(this, _v0, _v1), {
        category: _v40.ELiveErrorCategory.GRAPHICS,
        method: "addSlides"
      });
    }
    async addLogo(_v0, _v1) {
      return (0, _v41.withLiveErrorTracking)(() => _v163(this, _v0, _v1), {
        category: _v40.ELiveErrorCategory.GRAPHICS,
        method: "addLogo"
      });
    }
    async saveLogo(_v0, _v1) {
      return (0, _v41.withLiveErrorTracking)(() => _v0.id ? _v164(this, _v0, _v1) : _v163(this, _v0, _v1), {
        category: _v40.ELiveErrorCategory.GRAPHICS,
        method: "saveLogo"
      });
    }
    async addLowerThird(_v0, _v1) {
      return (0, _v41.withLiveErrorTracking)(() => _v165(this, _v0, _v1), {
        category: _v40.ELiveErrorCategory.GRAPHICS,
        method: "addLowerThird"
      });
    }
    async saveLowerThird(_v0, _v1) {
      return (0, _v41.withLiveErrorTracking)(() => _v0.id ? _v166(this, _v0, _v1) : _v165(this, _v0, _v1), {
        category: _v40.ELiveErrorCategory.GRAPHICS,
        method: "saveLowerThird"
      });
    }
    async addImage(_v0, _v1) {
      return (0, _v41.withLiveErrorTracking)(() => _v167(this, _v0, _v1), {
        category: _v40.ELiveErrorCategory.GRAPHICS,
        method: "addImage"
      });
    }
    async saveImage(_v0, _v1) {
      return (0, _v41.withLiveErrorTracking)(() => _v0.id ? _v169(this, _v0, _v1) : _v167(this, _v0, _v1), {
        category: _v40.ELiveErrorCategory.GRAPHICS,
        method: "saveImage"
      });
    }
    assertIsInitialized() {
      if (!this.storageRef || !this.rootRef || !this.graphicsRef || !this.snapshotsRef || !this.logoRef || !this.lowerthirdRef || !this.fullscreenRef || !this.pollRef || !this.mediaRef || !this.globalGraphicsRef || !this.themeRef) throw new _v17.LiveError("Graphics manager is not initialized.", {
        code: _v14.ELiveErrorCode.INITIALIZATION
      });
    }
    assertCanEdit() {
      if (!this.canEditGraphic) throw new _v17.LiveError("Cannot edit graphic.", {
        code: _v14.ELiveErrorCode.OPERATION_RESTRICTED
      });
    }
    async onBroadcasterApplicationReady({
      data: {
        app: _v0,
        firebase: _v1,
        sessionId: _v2,
        sessionFolder: _v3
      }
    }) {
      var _v4, _v5;
      let _v6;
      this.firebase = _v1;
      let _v7 = (0, _v18.getRealtimeDatabase)(_v1, _v0);
      this.log.info("🚀Initializing graphics connection"), this.storage = _v1.storage.getStorage(_v0), this.storageRef = _v1.storage.ref(this.storage, _v3), this.rootRef = (0, _v18.getDatabaseRootRef)(_v1, _v7), this.graphicsRef = (0, _v18.getDatabaseRef)(_v1, _v7, _v7.firebaseConfig.REFS.COMPOSER.GRAPHICS.ROOT(_v2)), this.snapshotsRef = (0, _v18.getDatabaseRef)(_v1, _v7, _v7.firebaseConfig.REFS.COMPOSER.SNAPSHOTS(_v2)), this.themeRef = (0, _v18.getDatabaseRef)(_v1, _v7, _v7.firebaseConfig.REFS.COMPOSER.THEME(_v2)), this.lowerthirdRef = (0, _v18.getRefChild)(_v1, this.graphicsRef, _v15.EGraphicsDescriptorType.LOWER_THIRD), this.fullscreenRef = (0, _v18.getRefChild)(_v1, this.graphicsRef, _v15.EGraphicsDescriptorType.IMAGE), this.logoRef = (0, _v18.getRefChild)(_v1, this.graphicsRef, _v15.EGraphicsDescriptorType.LOGO), this.pollRef = (0, _v18.getRefChild)(_v1, this.graphicsRef, _v15.EGraphicsDescriptorType.POLL), this.mediaRef = (0, _v18.getRefChild)(_v1, this.graphicsRef, _v15.EGraphicsDescriptorType.AGORA_MEDIA), this.slidesRef = (0, _v18.getRefChild)(_v1, this.graphicsRef, _v15.EGraphicsDescriptorType.SLIDES), this.globalGraphicsRef = (0, _v18.getRefChild)(_v1, this.graphicsRef, "global"), this.broadcasterLowerThirdRef = (0, _v18.getRefChild)(_v1, this.globalGraphicsRef, _v8.graphicsConfig.BROADCASTER.LOWERTHIRD_KEY), await _v183(this, this.themeRef).finally(() => {
        this.log.info("Hydrated graphic theme"), this.setContext({
          isHydrated: !0,
          hydratedAt: (0, _v28.getAbsoluteNow)()
        });
      }), this.addUnSubscribers([_v182(this, this.lowerthirdRef, _v15.EGraphicsDescriptorType.LOWER_THIRD), _v182(this, this.fullscreenRef, _v15.EGraphicsDescriptorType.IMAGE), _v182(this, this.logoRef, _v15.EGraphicsDescriptorType.LOGO), _v182(this, this.pollRef, _v15.EGraphicsDescriptorType.POLL), _v182(this, this.mediaRef, _v15.EGraphicsDescriptorType.AGORA_MEDIA), _v182(this, this.slidesRef, _v15.EGraphicsDescriptorType.SLIDES), _v182(this, this.globalGraphicsRef, "global"), (_v4 = this, _v5 = this.themeRef, _v6 = _v0 => {
        let _v1 = _v0.val();
        _v4.log.info("Theme changed:", _v1), _v4.setContext({
          theme: {
            ..._v8.graphicsConfig.DEFAULT_THEME,
            ..._v1
          }
        });
      }, (0, _v18.onRefEvent)(_v4.firebase, _v5, "value", _v6, "gfx-theme"), () => (0, _v18.offRefEvent)(_v4.firebase, _v5, "value", _v6))]);
    }
    async onQnaStartedAnswering(_v0) {
      let _v1 = this.queryDataSync({
          type: _v10.ELiveConnectionQuery.FIREBASE_INTERACTION_CREDENTIALS
        }),
        {
          data: _v2
        } = _v0,
        _v3 = (0, _v28.getAbsoluteNow)(),
        _v4 = _v1?.data?.roomId;
      if (this.assertIsInitialized(), !_v4) throw new _v17.LiveError("Interaction room is not initialized, cannot update poll.", {
        code: _v14.ELiveErrorCode.INITIALIZATION
      });
      this.log.info("Syncing QNA graphic object:", _v2.id);
      let _v5 = _v9.vimeoConfig.USER.DEFAULT_LOGO_URL(75),
        _v6 = _v35({
          id: _v2.id,
          line: !_v2.anonymous && _v2.user && _v2.user.displayName ? _v2.user.displayName : _v159.translations.anonymous,
          subLine: _v2.text,
          imageSrc: !_v2.anonymous && _v2.user && _v2.user.avatarUrl ? _v2.user.avatarUrl : _v5,
          votesCount: _v2.votesCount,
          updatedAt: _v3,
          createdAt: _v3,
          roomId: _v4
        });
      await (0, _v18.batchedDatabaseUpdate)(this.firebase, this.rootRef, [[(0, _v18.getRefChild)(this.firebase, this.globalGraphicsRef, _v15.EGraphicsDescriptorType.QNA), _v6], _v158(this, _v15.EGraphicsDescriptorType.QNA, _v6)]);
    }
    async onGuestUpdated(_v0) {
      let {
        data: _v1
      } = _v0;
      this.log.info("Updating guest lowerthird for guest:", _v1.id);
      let [_v2, _v3] = _v158(this, _v15.EGraphicsDescriptorType.GUEST_LOWER_THIRD, _v33({
        id: _v1.id,
        line: _v1.name,
        subLine: _v1.title,
        type: _v15.EGraphicsDescriptorType.GUEST_LOWER_THIRD,
        createdAt: _v1.createdAt
      }));
      await (0, _v18.setRefValue)(this.firebase, _v2, _v3);
    }
    async onPollObjectUpdated(_v0) {
      let {
          data: _v1
        } = _v0,
        _v2 = (0, _v28.getAbsoluteNow)();
      if (this.assertIsInitialized(), _v1.state === _v16.EPollState.ARCHIVED) this.log.info("Removing poll graphic object after archiving:", _v1.id), await (0, _v18.removeRefValue)(this.firebase, (0, _v18.getRefChild)(this.firebase, this.pollRef, _v1.id));else {
        this.log.info("Syncing poll graphic object update:", _v1.id);
        let _v0 = this.queryDataSync({
            type: _v10.ELiveConnectionQuery.FIREBASE_INTERACTION_CREDENTIALS
          }),
          _v1 = _v0?.data?.roomId;
        try {
          if (!_v1) throw new _v17.LiveError("Interaction room is not initialized, cannot update poll.", {
            code: _v14.ELiveErrorCode.INITIALIZATION
          });
          let _v0 = _v1.options.find(_v0 => _v0.correct),
            _v1 = _v36({
              id: _v1.id,
              type: _v15.EGraphicsDescriptorType.POLL,
              state: _v1.state,
              question: _v1.question,
              answer: _v0 ? _v159.translations.correctResponse(_v0.text) : "",
              options: _v1.options,
              updatedAt: _v2,
              createdAt: _v2,
              roomId: _v1
            });
          await (0, _v18.batchedDatabaseUpdate)(this.firebase, this.rootRef, [[(0, _v18.getRefChild)(this.firebase, this.pollRef, _v1.id), _v1], _v158(this, _v15.EGraphicsDescriptorType.POLL, _v1)]);
        } catch (_v0) {
          this.log.error("Failed to create poll graphic representation:", _v0), (0, _v41.trackLiveError)(_v0, {
            method: "onPollObjectUpdated",
            data: {
              poll: _v0.data
            },
            category: _v40.ELiveErrorCategory.GRAPHICS
          });
        }
      }
    }
    async onConnectionTypeChanged(_v0) {
      this.assertIsInitialized(), this.assertCanEdit();
      let {
          data: _v1
        } = _v0,
        _v2 = (0, _v39.queryOptionalViewerSync)(this),
        _v3 = _v2?.user?.name ?? _v8.graphicsConfig.BROADCASTER.DEFAULT_NAME;
      if (_v1 === _v12.EEventConnectionType.BROADCASTER) {
        let _v0 = await (0, _v18.getRefValue)(this.firebase, this.broadcasterLowerThirdRef);
        if (_v0 && _v3 === _v0.lastChangedBy) this.log.info("Broadcaster lower third info found");else {
          this.log.info("Creating default lower third info for Broadcaster");
          let _v0 = {
            name: _v3,
            title: this.defaultBroadcasterTitle,
            mail: ""
          };
          this.log.info("Updating broadcaster lower third information:", _v0), await this.updateBroadcasterLowerThird(_v0);
        }
      }
    }
    async onPollObjectRemoved(_v0) {
      let {
        data: _v1
      } = _v0;
      this.log.info("Syncing poll graphic object removal:", _v1), this.assertIsInitialized(), await (0, _v18.removeRefValue)(this.firebase, (0, _v18.getRefChild)(this.firebase, this.pollRef, _v1)), await this.emitSignal({
        type: _v11.ELiveGraphicsSignal.GRAPHIC_DELETED,
        data: {
          graphicId: _v1,
          graphicType: _v15.EGraphicsDescriptorType.POLL
        }
      });
    }
    async onQnaStoppedAnswering() {
      this.log.info("Deactivating QNA graphic object"), this.assertIsInitialized();
      let _v0 = this.context.globalList[_v15.EGraphicsDescriptorType.QNA];
      _v0 && !_v0.disabled && (await (0, _v18.updateRefValue)(this.firebase, (0, _v18.getRefChild)(this.firebase, this.globalGraphicsRef, _v15.EGraphicsDescriptorType.QNA), {
        disabled: !0,
        disabledAt: (0, _v28.getAbsoluteNow)()
      }));
    }
    onGetGraphicsItem({
      data: {
        type: _v0,
        id: _v1
      }
    }) {
      return _v51(this, _v0, _v1);
    }
    onGetBroadcasterInfo() {
      return this.context.additionalInformation.broadcaster;
    }
    createTemplateGraphics({
      data: _v0
    }) {
      return _v168(this, _v0);
    }
  }
  (0, _v3._)([(0, _v37.BoundThrottled)(500, !0)], _v184.prototype, "updateGraphicItemUploadingProgress", null), (0, _v3._)([(0, _v4.OnSignal)(_v11.ELiveRealtimeSignal.FIREBASE_COMPOSER_APP_READY)], _v184.prototype, "onBroadcasterApplicationReady", null), (0, _v3._)([(0, _v4.OnSignal)(_v11.ELiveGraphicsSignal.QNA_QUESTION_SELECTED)], _v184.prototype, "onQnaStartedAnswering", null), (0, _v3._)([(0, _v4.OnSignal)(_v11.ELiveGraphicsSignal.GUEST_UPDATED)], _v184.prototype, "onGuestUpdated", null), (0, _v3._)([(0, _v4.OnSignal)(_v11.ELiveGraphicsSignal.POLL_OBJECT_UPDATED)], _v184.prototype, "onPollObjectUpdated", null), (0, _v3._)([(0, _v4.OnSignal)(_v11.ELiveBroadcasterSignal.EVENT_CONNECTION_TYPE_CHANGED)], _v184.prototype, "onConnectionTypeChanged", null), (0, _v3._)([(0, _v4.OnSignal)(_v11.ELiveGraphicsSignal.POLL_OBJECT_REMOVED)], _v184.prototype, "onPollObjectRemoved", null), (0, _v3._)([(0, _v4.OnSignal)(_v11.ELiveGraphicsSignal.QNA_QUESTION_DESELECTED)], _v184.prototype, "onQnaStoppedAnswering", null), (0, _v3._)([(0, _v4.OnQuery)(_v10.ELiveGraphicsQuery.GRAPHICS_ITEM)], _v184.prototype, "onGetGraphicsItem", null), (0, _v3._)([(0, _v4.OnQuery)(_v10.ELiveGraphicsQuery.BROADCASTER_INFO)], _v184.prototype, "onGetBroadcasterInfo", null), (0, _v3._)([(0, _v4.OnQuery)(_v10.ELiveGraphicsQuery.CREATE_TEMPLATE_GRAPHICS)], _v184.prototype, "createTemplateGraphics", null), _v0.s(["GraphicsManager", 0, _v184], 0);
}