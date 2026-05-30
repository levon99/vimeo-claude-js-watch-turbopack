{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  class _v5 {
    autorun;
    queue;
    poolOfRunningTasks;
    _concurrency;
    _taskDurationLimit;
    log;
    get taskPoolSize() {
      return this.poolOfRunningTasks.size;
    }
    set taskDurationLimit(_v0) {
      this._taskDurationLimit = _v0;
    }
    get concurrency() {
      return this._concurrency;
    }
    set concurrency(_v0) {
      if (_v0 < 0 || 0 === _v0) throw Error(`Task pool size must be greater than 0; received val: ${_v0}`);
      1 === _v0 && this.log.debug('Task pool size set to "1" therefore leading to sequential execution'), this._concurrency = _v0;
    }
    constructor(_v0 = !0) {
      this.autorun = _v0, this.queue = [], this.poolOfRunningTasks = new Set(), this._concurrency = 3, this._taskDurationLimit = void 0, this.log = (0, _v4.getLogger)("AsyncQueue");
    }
    get haveRunningTasks() {
      return this.poolOfRunningTasks.size > 0;
    }
    get numberOfFreeSlots() {
      return this.concurrency - this.poolOfRunningTasks.size;
    }
    get haveFreeSlots() {
      return this.numberOfFreeSlots > 0;
    }
    clearQueue() {
      this.queue = [];
    }
    length() {
      return this.queue.length;
    }
    scheduleTasks(_v0, _v1) {
      _v0.forEach(({
        task: _v0,
        config: _v1
      }, _v2) => {
        let _v3 = _v0.length === _v2 + 1;
        this.addTask(_v0, {
          ..._v1,
          onCleanup: _v0 => {
            _v3 && _v1?.onCompleteAll?.(), _v1.onCleanup?.(_v0);
          }
        });
      });
    }
    scheduleTasksAsync(_v0) {
      return new Promise(_v0 => {
        this.scheduleTasks(_v0, {
          onCompleteAll: () => _v0()
        });
      });
    }
    addTask(_v0, _v1 = {}) {
      this._addTask(_v0, !1, _v1);
    }
    addPriorityTask(_v0, _v1 = {}) {
      this._addTask(_v0, !0, _v1);
    }
    _addTask(_v0, _v1, _v2 = {}) {
      this.log.debug(`[Add] task at ${new Date().toLocaleTimeString()}`);
      let _v3 = async () => {
        let _v0 = Date.now();
        this.log.debug(`[Start] task at ${new Date(_v0).toLocaleTimeString()}`);
        let _v1 = _v2.abortSignal;
        if (_v2.abortSignal?.aborted) {
          this.log.debug(`[Aborted Early] task at ${new Date(_v0).toLocaleTimeString()} (due to AbortSignal)`), _v2.onCancel?.(_v0);
          return;
        }
        try {
          var _v2;
          let _v0, _v1, _v2;
          await (_v2 = this._taskDurationLimit ?? null, _v1 = new Promise((_v0, _v1) => {
            _v1 && _v1.addEventListener("abort", () => {
              clearTimeout(_v0), _v1(new _v3.CancelError(_v1.reason ?? "Task was cancelled by AbortSignal."));
            }, {
              once: !0
            });
          }), _v2 = new Promise((_v0, _v1) => {
            _v2 && _v2 > 0 && !Number.isNaN(_v2) && (_v0 = setTimeout(() => {
              _v1(new _v2.TimeLimitError(`Task duration limit of ${_v2 / 0} seconds exceeded.`));
            }, _v2));
          }), Promise.race([_v0(_v1).finally(() => clearTimeout(_v0)), _v1, _v2]));
        } catch (_v0) {
          _v0 instanceof _v3.CancelError ? (this.log.debug(`[Aborted] Task cancelled during execution: ${_v0.message}`), _v2.onCancel?.(_v0)) : _v0 instanceof _v2.TimeLimitError ? (this.log.debug(`[Aborted TimeLimit] cancelled due to limit of: ${this._taskDurationLimit}ms`), _v2.onTimeLimit?.(_v0)) : _v2.onFail?.(_v0, _v0);
        } finally {
          _v2.onCleanup?.(_v0), this.log.debug(`[Summary][Finish] task at ${new Date().toLocaleTimeString()}. Took ${(Date.now() - _v0) / 0} seconds.`);
        }
      };
      _v1 ? this.queue.unshift(_v3) : this.queue.push(_v3), this.autorun && this.performQueueStep();
    }
    performQueueStep() {
      this.haveFreeSlots && 0 !== this.queue.length && this.executeTasksInPool();
    }
    async waitPoolEmpty(_v0) {
      for (; this.haveRunningTasks;) {
        let _v0 = [...this.poolOfRunningTasks].map(_v0 => _v0.then(() => void 0).catch(() => void 0));
        if (0 === _v0.length) break;
        await Promise.race(_v0), _v0?.();
      }
    }
    async waitForCompletion(_v0) {
      for (; this.queue.length > 0 || this.haveRunningTasks;) this.haveRunningTasks ? await this.waitPoolEmpty(_v0) : this.queue.length > 0 && (await new Promise(_v0 => setTimeout(_v0, 1)));
    }
    executeTasksInPool() {
      for (; this.haveFreeSlots && this.queue.length > 0;) {
        let _v0 = this.queue.shift();
        if (!_v0) return;
        let _v1 = _v0();
        _v1.catch(_v0 => {
          _v0 instanceof _v3.CancelError || _v0 instanceof _v2.TimeLimitError || this.log.warn("Unhandled error from task:", _v0);
        }).finally(() => {
          this.poolOfRunningTasks.delete(_v1), this.autorun && this.performQueueStep();
        }), this.poolOfRunningTasks.add(_v1);
      }
    }
  }
  var _v6 = _v0.i(0);
  let _v7 = {
      uploads: [],
      isUploading: !1,
      config: {
        maxRequestChunkSize: void 0,
        uploadConcurrency: 2
      },
      queue: new _v5(!0)
    },
    _v8 = (0, _v6.createStore)((_v0, _v1) => ({
      ..._v7,
      private: {
        setIsUploading: _v0 => {
          _v0(_v0 => {
            _v0.isUploading = _v0;
          });
        },
        resetStore: () => {
          _v1().queue.clearQueue(), _v0(_v0 => {
            _v0.queue = new _v5(!0), _v0.uploads = _v7.uploads, _v0.config = _v7.config;
          });
        },
        setConfig: _v0 => {
          let _v1 = _v1().config;
          _v0(_v0 => {
            _v0.config.maxRequestChunkSize = _v0.maxRequestChunkSize ?? _v1.maxRequestChunkSize, _v0.config.uploadConcurrency = _v0.uploadConcurrency ?? _v1.uploadConcurrency, _v0.config.uploadDurationLimit = _v0.uploadDurationLimit ?? _v1.uploadDurationLimit;
          });
        },
        setRetryGetUrlsRequest: _v0 => {
          _v0(_v0 => {
            _v0.uploads = _v0.uploads.map(_v0 => (_v0.id === _v0.uploadId && (_v0.retryGetUploadUrls = _v0.retryGetUploadUrls), _v0));
          });
        },
        setAbortGetUrlsRequest: _v0 => {
          _v0(_v0 => {
            _v0.uploads = _v0.uploads.map(_v0 => (_v0.id === _v0.uploadId && (_v0.abortGetUploadUrls = _v0.abort), _v0));
          });
        },
        setUploadHandle: _v0 => {
          _v0(_v0 => {
            _v0.uploads = _v0.uploads.map(_v0 => (_v0.id === _v0.id && (_v0.storageObjectId = _v0.storageObjectId, _v0.uploaderHandle = _v0.uploadHandle, _v0.fileId = _v0.fileId, _v0.approach = _v0.approach, _v0.numberOfEndpoints = _v0.numberEndpoints), _v0));
          });
        },
        setUploads: _v0 => {
          _v0(_v0 => {
            _v0.uploads = [..._v0.uploadProcesses, ..._v0.uploads];
          });
        },
        setTranscodingCompleted: _v0 => {
          _v0(_v0 => {
            _v0.uploads = _v0.uploads.map(_v0 => (_v0.id === _v0.id && ((0, _v4.getLogger)("[useUploaderStore] [setTranscodingCompleted]").info(`upload #${_v0.id} changed from: ${_v0.status} to: ${_v0.status}`), _v0.status = _v0.status, _v0.result = _v0.result, _v0.transcodingUrl = _v0.transcodingUrl), _v0));
          });
        },
        setTranscodingStep: _v0 => {
          _v0(_v0 => {
            _v0.uploads = _v0.uploads.map(_v0 => (_v0.id === _v0.id && ((0, _v4.getLogger)("[useUploaderStore] [setUploadCompleted]").info(`upload #${_v0.id} step changed from: ${_v0.step} to: ${_v1.STEP.TRANSCODING}`), _v0.step = _v1.STEP.TRANSCODING, _v0.status = _v1.UPLOAD_PROCESS_STATUS.TRANSCODING, _v0.stopTranscodePolling = _v0.stopTranscodePolling), _v0));
          });
        },
        setUploadCompleted: _v0 => {
          _v0(_v0 => {
            _v0.uploads = _v0.uploads.map(_v0 => (_v0.id === _v0.id && ((0, _v4.getLogger)("[useUploaderStore] [setUploadCompleted]").info(`upload #${_v0.id} changed from: ${_v0.status} to: ${_v0.status}`), _v0.status = _v1.STATUS.DONE, _v0.transcodingUrl = _v0.transcodingUrl), _v0));
          });
        },
        setUploadError: _v0 => {
          _v0(_v0 => {
            _v0.uploads = _v0.uploads.map(_v0 => (_v0.id === _v0.id && ((0, _v4.getLogger)("[useUploaderStore] [setUploadError]").info(`upload #${_v0.id} changed from: ${_v0.status} to: ${_v0.status}`), _v0.status = _v1.STATUS.FAILED), _v0));
          });
        },
        setUploadProgress: ({
          id: _v0,
          ..._v1
        }) => {
          _v0(_v0 => {
            _v0.uploads = _v0.uploads.map(_v0 => (_v0.id === _v0 && ((0, _v4.getLogger)("[useUploaderStore] [setUploadProgress]").info(`upload progress for #${_v0.id} relativeProgress: ${_v1.relativeProgress}`), _v0.progress = _v1), _v0));
          });
        },
        setUploadStatus: _v0 => {
          _v0(_v0 => {
            _v0.uploads = _v0.uploads.map(_v0 => (_v0.id === _v0.id && ((0, _v4.getLogger)("[useUploaderStore] [setUploadStatus]").info(`upload #${_v0.id} changed from: ${_v0.status} to: ${_v0.status}`), _v0.status = _v0.status), _v0));
          });
        }
      },
      public: {
        retryUpload: ({
          id: _v0
        }) => {
          let _v1 = _v1().uploads.find(_v0 => _v0.id === _v0);
          _v1 && (_v1.retryGetUploadUrls ? _v1().queue.addPriorityTask(async () => {
            await _v1.retryGetUploadUrls?.(), _v1().private.setRetryGetUrlsRequest({
              uploadId: _v0,
              retryGetUploadUrls: void 0
            });
          }) : _v1.uploaderHandle && _v1().queue.addPriorityTask(async () => {
            await _v1?.uploaderHandle?.retryUpload();
          }));
        },
        pauseUpload: ({
          id: _v0
        }) => {
          _v1().uploads.find(_v0 => _v0.id === _v0)?.uploaderHandle?.pause();
        },
        failUpload: ({
          id: _v0
        }) => {
          let _v1 = _v1().uploads.find(_v0 => _v0.id === _v0);
          _v1?.uploaderHandle ? _v1.uploaderHandle.fail() : _v1?.abortGetUploadUrls && _v1.abortGetUploadUrls(!0);
        },
        resumeUpload: ({
          id: _v0
        }) => {
          let _v1 = _v1().uploads.find(_v0 => _v0.id === _v0);
          _v1?.uploaderHandle && _v1().queue.addPriorityTask(async () => {
            await _v1?.uploaderHandle?.resume();
          });
        },
        clearUploads: () => {
          _v1().uploads.forEach(_v9), _v0(_v0 => {
            _v0.uploads = [];
          });
        },
        clearUpload: ({
          id: _v0,
          storageObjectId: _v1
        }) => {
          let _v2 = (0, _v4.getLogger)("[useUploaderStore] [clearUpload]"),
            _v3 = _v1().uploads.find(_v0 => _v0.id === _v0 || _v1 === _v0.storageObjectId);
          if (!_v3) return _v2.warn(`not found upload #${_v0} to be cleared`);
          _v9(_v3), _v0(_v0 => {
            _v0.uploads = _v0.uploads.filter(_v0 => _v0.id !== _v0);
          }), _v2.info(`clear upload #${_v0} with storageObjectId${_v1} (status before clear: ${_v3.status})`);
        }
      }
    }));
  function _v9(_v0) {
    _v0.uploaderHandle?.cancel(), _v0.abortGetUploadUrls?.(), _v0.stopTranscodePolling?.();
  }
  _v0.s(["useUploaderStore", 0, _v8], 0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = {
      info: () => void 0,
      error: () => void 0,
      debug: () => void 0,
      warn: () => void 0
    },
    _v13 = _v0 => new _v11.Logger().forCategory(_v0);
  _v0.s(["useLogger", 0, (_v0, _v1) => {
    let [_v2, _v3] = (0, _v10.useState)(() => _v13);
    return (0, _v10.useMemo)(() => {
      _v1 && _v3(_v1);
    }, [_v1, _v3]), (0, _v10.useMemo)(() => _v2 ? _v2(_v0) : _v12, [_v0, _v2]);
  }], 0), _v0.s(["normalizeUploads", 0, function (_v0) {
    return _v0.map(_v0 => {
      let {
        id: _v1,
        approach: _v2,
        file: _v3,
        fileId: _v4,
        status: _v5,
        progress: _v6,
        name: _v7,
        step: _v8,
        fileData: {
          thumbnail: _v9
        },
        result: _v10,
        transcodingUrl: _v11,
        params: _v12,
        storageObjectId: _v13,
        apiConfiguration: _v14,
        numberOfEndpoints: _v15
      } = _v0;
      return {
        id: _v4,
        fileId: _v4 ?? "",
        file: _v3,
        approach: _v2,
        uploadId: _v1,
        typeName: _v7,
        numberOfEndpoints: _v15,
        processStatus: _v5,
        status: function (_v0) {
          switch (_v0) {
            case "UPLOADING":
            case "FETCHING_LINK":
            case "IN_QUEUE":
            case "TRANSCODING":
            case "PAUSED":
              return _v1.STATUS.PENDING;
            case "DONE":
              return _v1.STATUS.DONE;
            case "CANCELLED":
            case "FAILED":
              return _v1.STATUS.FAILED;
          }
        }(_v5),
        progress: _v6?.relativeProgress,
        transcodingUrl: _v11,
        step: _v8,
        result: _v10,
        thumbnail: _v9,
        params: _v12,
        storageObjectId: _v13,
        apiConfiguration: _v14
      };
    });
  }], 0);
}