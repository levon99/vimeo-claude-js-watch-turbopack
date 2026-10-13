{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
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
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = ["publicId", "uri", "name", "description", "contentType", "thumbnail.url", "fileSize", "privacy", "password", "allowDownloads", "downloadUrl", "createdTime", "modifiedTime", "metadata.connections.ancestorPath.name", "metadata.connections.ancestorPath.link", "parentFolder.name", "parentFolder.uri", "parentFolder.isPrivateToUser", "uploadState", "uploader.name", "canUserEdit", "canUserDelete"],
    _v22 = {
      video: (0, _v17.translate)({
        singular: "Video",
        dictionary: {
          "fr-FR": {
            singular: "Vidéo"
          },
          "ja-JP": {
            singular: "動画"
          },
          "ko-KR": {
            singular: "동영상"
          },
          "pt-BR": {
            singular: "Vídeo"
          },
          "zh-CN": {
            singular: "视频"
          }
        }
      }),
      document: (0, _v17.translate)({
        singular: "Document",
        dictionary: {
          es: {
            singular: "Documento"
          },
          "de-DE": {
            singular: "Dokument"
          },
          "ja-JP": {
            singular: "ドキュメント"
          },
          "ko-KR": {
            singular: "문서"
          },
          "pt-BR": {
            singular: "Documento"
          },
          "zh-CN": {
            singular: "文档"
          }
        }
      }),
      image: (0, _v17.translate)({
        singular: "Image",
        dictionary: {
          es: {
            singular: "Imagen"
          },
          "de-DE": {
            singular: "Bild"
          },
          "ja-JP": {
            singular: "画像"
          },
          "ko-KR": {
            singular: "이미지"
          },
          "pt-BR": {
            singular: "Imagem"
          },
          "zh-CN": {
            singular: "图片"
          }
        }
      }),
      audio: (0, _v17.translate)({
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
      })
    },
    _v23 = ({
      label: _v0,
      placeholder: _v1,
      value: _v2,
      onSave: _v3,
      isReadOnly: _v4 = !1
    }) => (0, _v1.jsxs)(_v5.Flex, {
      alignItems: "center",
      gap: "lg",
      children: [(0, _v1.jsx)(_v12.Text, {
        flexShrink: 0,
        variant: "heading-xs",
        width: "11rem",
        children: _v0
      }), (0, _v1.jsx)(_v11.Input, {
        "aria-label": _v0,
        defaultValue: _v2,
        flexGrow: 1,
        isReadOnly: _v4,
        onBlur: _v0 => {
          if (_v4) return;
          let _v1 = _v0.target.value.trim();
          _v1 !== _v2 && _v3(_v1);
        },
        onKeyDown: _v0 => {
          "Enter" === _v0.key && _v0.currentTarget.blur();
        },
        placeholder: _v1,
        variant: "outlined"
      }, _v2)]
    }),
    _v24 = ({
      label: _v0,
      value: _v1
    }) => (0, _v1.jsxs)(_v5.Flex, {
      alignItems: "center",
      gap: "sm",
      children: [(0, _v1.jsx)(_v12.Text, {
        color: "text-secondary",
        flexShrink: 0,
        variant: "body-md",
        width: "7.5rem",
        children: _v0
      }), (0, _v1.jsx)(_v12.Text, {
        variant: "body-md",
        children: _v1
      })]
    }),
    _v25 = ({
      publicId: _v0,
      ownerId: _v1,
      file: _v2,
      onChanged: _v3
    }) => {
      let _v4 = (0, _v13.useToast)(),
        {
          baseUrl: _v5,
          jwt: _v6,
          xVimeoPage: _v7,
          locale: _v8
        } = (0, _v16.useGctlConfig)(),
        _v9 = (0, _v19.useFormatDateTime)(),
        _v10 = async _v0 => {
          try {
            await (0, _v15.patchUserFile)({
              where: {
                userId: _v1,
                fileId: _v0
              },
              select: _v21,
              variables: _v0,
              baseUrl: _v5,
              headers: {
                "Content-Type": "application/json",
                Authorization: _v6 ? `jwt ${_v6}` : "",
                "Vimeo-Page": `${_v7}`,
                "Accept-Language": _v8 ?? "en"
              }
            }), _v4({
              title: (0, _v17.translate)({
                singular: "Changes saved",
                dictionary: {
                  es: {
                    singular: "Guardamos los cambios"
                  },
                  "de-DE": {
                    singular: "Änderungen wurden gespeichert"
                  },
                  "fr-FR": {
                    singular: "Changements sauvegardés"
                  },
                  "ja-JP": {
                    singular: "変更内容が保存されました"
                  },
                  "ko-KR": {
                    singular: "변경 사항 저장 완료"
                  },
                  "pt-BR": {
                    singular: "Alterações salvas"
                  },
                  "zh-CN": {
                    singular: "已保存更改"
                  }
                }
              })
            }), _v3();
          } catch {
            _v4({
              title: (0, _v17.translate)({
                singular: "Something went wrong",
                dictionary: {
                  es: {
                    singular: "Se ha producido un error"
                  },
                  "de-DE": {
                    singular: "Hier ist etwas schief gelaufen"
                  },
                  "fr-FR": {
                    singular: "Quelque chose a planté"
                  },
                  "ja-JP": {
                    singular: "エラーが発生しました"
                  },
                  "ko-KR": {
                    singular: "문제가 발생했습니다"
                  },
                  "pt-BR": {
                    singular: "Alguma coisa deu errado"
                  },
                  "zh-CN": {
                    singular: "出错了"
                  }
                }
              }),
              variant: "warning"
            });
          }
        },
        _v11 = (0, _v14.getFileExtension)(_v2.name),
        _v12 = null != _v2.fileSize && _v2.fileSize > 0 ? String((0, _v18.bytesToSize)(_v2.fileSize, 1)) : "",
        _v13 = _v2.uploader.name ? (0, _v17.translate)({
          singular: "{date} by {name}",
          replacements: {
            date: _v9.getDisplayDate(_v2.createdTime),
            name: _v2.uploader.name
          },
          dictionary: {
            es: {
              singular: "{date} por {name}"
            },
            "de-DE": {
              singular: "{date} von {name}"
            },
            "fr-FR": {
              singular: "{date} par {name}"
            },
            "ja-JP": {
              singular: "{date}　{name} による"
            },
            "ko-KR": {
              singular: "{date} 작성자 {name}"
            },
            "pt-BR": {
              singular: "{date} por {name}"
            },
            "zh-CN": {
              singular: "{date} 由 {name}"
            }
          }
        }) : _v9.getDisplayDate(_v2.createdTime);
      return (0, _v1.jsxs)(_v5.Flex, {
        flexDirection: "column",
        gap: "2xl",
        pt: "md",
        children: [(0, _v1.jsxs)(_v5.Flex, {
          flexDirection: "column",
          gap: "md",
          children: [(0, _v1.jsx)(_v23, {
            isReadOnly: !_v2.canUserEdit,
            label: (0, _v17.translate)({
              singular: "Title",
              dictionary: {
                es: {
                  singular: "Título"
                },
                "de-DE": {
                  singular: "Titel"
                },
                "fr-FR": {
                  singular: "Titre"
                },
                "ja-JP": {
                  singular: "タイトル"
                },
                "ko-KR": {
                  singular: "제목"
                },
                "pt-BR": {
                  singular: "Título"
                },
                "zh-CN": {
                  singular: "标题"
                }
              }
            }),
            value: _v2.name,
            onSave: _v0 => void _v10({
              name: _v0
            })
          }), (0, _v1.jsx)(_v23, {
            isReadOnly: !_v2.canUserEdit,
            label: (0, _v17.translate)({
              singular: "Description",
              dictionary: {
                es: {
                  singular: "Descripción"
                },
                "de-DE": {
                  singular: "Beschreibung"
                },
                "ja-JP": {
                  singular: "説明"
                },
                "ko-KR": {
                  singular: "설명"
                },
                "pt-BR": {
                  singular: "Descrição"
                },
                "zh-CN": {
                  singular: "描述"
                }
              }
            }),
            placeholder: (0, _v17.translate)({
              singular: "Add description",
              dictionary: {
                es: {
                  singular: "Agregar descripción"
                },
                "de-DE": {
                  singular: "Beschreibung hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter une description"
                },
                "ja-JP": {
                  singular: "説明を追加"
                },
                "ko-KR": {
                  singular: "설명 추가"
                },
                "pt-BR": {
                  singular: "Adicionar descrição"
                },
                "zh-CN": {
                  singular: "添加描述"
                }
              }
            }),
            value: _v2.description,
            onSave: _v0 => void _v10({
              description: _v0
            })
          })]
        }), (0, _v1.jsxs)(_v5.Flex, {
          alignItems: "flex-start",
          gap: "md",
          children: [(0, _v1.jsx)(_v12.Text, {
            flexShrink: 0,
            variant: "heading-xs",
            width: "11rem",
            children: (0, _v17.translate)({
              singular: "File information",
              dictionary: {
                es: {
                  singular: "Información del archivo"
                },
                "de-DE": {
                  singular: "Dateiinformationen"
                },
                "fr-FR": {
                  singular: "Informations sur le fichier"
                },
                "ja-JP": {
                  singular: "ファイル情報"
                },
                "ko-KR": {
                  singular: "파일 정보"
                },
                "pt-BR": {
                  singular: "Informações do arquivo"
                },
                "zh-CN": {
                  singular: "文件信息"
                }
              }
            })
          }), (0, _v1.jsxs)(_v5.Flex, {
            flexDirection: "column",
            flexGrow: 1,
            gap: "sm",
            children: [(0, _v1.jsx)(_v24, {
              label: (0, _v17.translate)({
                singular: "File size",
                dictionary: {
                  es: {
                    singular: "Tamaño del archivo"
                  },
                  "de-DE": {
                    singular: "Dateigröße"
                  },
                  "fr-FR": {
                    singular: "Taille du fichier"
                  },
                  "ja-JP": {
                    singular: "ファイルサイズ"
                  },
                  "ko-KR": {
                    singular: "파일 크기"
                  },
                  "pt-BR": {
                    singular: "Tamanho do Arquivo"
                  },
                  "zh-CN": {
                    singular: "文件大小"
                  }
                }
              }),
              value: _v12
            }), (0, _v1.jsx)(_v24, {
              label: (0, _v17.translate)({
                singular: "File type",
                dictionary: {
                  es: {
                    singular: "Tipo de archivo"
                  },
                  "de-DE": {
                    singular: "Dateityp"
                  },
                  "fr-FR": {
                    singular: "Type de fichier"
                  },
                  "ja-JP": {
                    singular: "ファイルタイプ"
                  },
                  "ko-KR": {
                    singular: "파일 유형"
                  },
                  "pt-BR": {
                    singular: "Tipo de arquivo"
                  },
                  "zh-CN": {
                    singular: "文件类型"
                  }
                }
              }),
              value: _v22[(0, _v14.getContentTypeCategory)(_v2.contentType)]
            }), "" !== _v11 && (0, _v1.jsx)(_v24, {
              label: (0, _v17.translate)({
                singular: "File format",
                dictionary: {
                  es: {
                    singular: "Formato de archivo"
                  },
                  "de-DE": {
                    singular: "Dateiformat"
                  },
                  "fr-FR": {
                    singular: "Format du fichier"
                  },
                  "ja-JP": {
                    singular: "ファイル形式"
                  },
                  "ko-KR": {
                    singular: "파일 형식"
                  },
                  "pt-BR": {
                    singular: "Formato do arquivo"
                  },
                  "zh-CN": {
                    singular: "文件格式"
                  }
                }
              }),
              value: _v11
            }), (0, _v1.jsx)(_v24, {
              label: (0, _v17.translate)({
                singular: "Uploaded",
                dictionary: {
                  es: {
                    singular: "Subido el"
                  },
                  "de-DE": {
                    singular: "Hochgeladen"
                  },
                  "fr-FR": {
                    singular: "Mis en ligne"
                  },
                  "ja-JP": {
                    singular: "アップロード時期"
                  },
                  "ko-KR": {
                    singular: "업로드"
                  },
                  "pt-BR": {
                    singular: "Carregado"
                  },
                  "zh-CN": {
                    singular: "已上传"
                  }
                }
              }),
              value: _v13
            })]
          })]
        })]
      });
    };
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  let _v48 = ({
    publicId: _v0,
    ownerId: _v1,
    file: _v2
  }) => {
    let _v3 = (0, _v33.useRouter)(),
      _v4 = (0, _v13.useToast)(),
      {
        baseUrl: _v5,
        jwt: _v6,
        xVimeoPage: _v7,
        locale: _v8
      } = (0, _v16.useGctlConfig)(),
      {
        openCopyFileModal: _v9,
        copyModal: _v10
      } = (0, _v47.useCopyFileFlow)(),
      [_v11, _v12] = (0, _v3.useState)(!1),
      [_v13, _v14] = (0, _v3.useState)(!1),
      [_v15, _v16] = (0, _v3.useState)(!1),
      _v17 = _v2.canUserEdit,
      _v18 = _v2.canUserDelete,
      _v19 = _v17 && "complete" === _v2.uploadState,
      _v20 = _v2.downloadUrl,
      _v21 = null != _v20,
      _v22 = async () => {
        _v12(!0);
        try {
          await (0, _v15.deleteUserFile)({
            where: {
              userId: _v1,
              fileId: _v0
            },
            variables: {
              sendToRecentlyDeleted: !0
            },
            baseUrl: _v5,
            headers: {
              "Content-Type": "application/json",
              Authorization: _v6 ? `jwt ${_v6}` : "",
              "Vimeo-Page": `${_v7}`,
              "Accept-Language": _v8 ?? "en"
            }
          }), _v4({
            title: (0, _v17.translate)({
              singular: "Moved to Recently Deleted",
              dictionary: {
                es: {
                  singular: "Movido a Recientemente eliminados"
                },
                "de-DE": {
                  singular: 'In "Zuletzt gelöscht" verschoben'
                },
                "fr-FR": {
                  singular: "Déplacé vers Récemment supprimés"
                },
                "ja-JP": {
                  singular: "最近削除した項目に移動しました"
                },
                "ko-KR": {
                  singular: "최근 삭제된 항목으로 이동됨"
                },
                "pt-BR": {
                  singular: "Movido para Excluídos recentemente"
                },
                "zh-CN": {
                  singular: "已移至“最近删除”"
                }
              }
            })
          }), _v16(!1), _v3.push("/library");
        } catch {
          _v4({
            title: (0, _v17.translate)({
              singular: "Something went wrong",
              dictionary: {
                es: {
                  singular: "Se ha producido un error"
                },
                "de-DE": {
                  singular: "Hier ist etwas schief gelaufen"
                },
                "fr-FR": {
                  singular: "Quelque chose a planté"
                },
                "ja-JP": {
                  singular: "エラーが発生しました"
                },
                "ko-KR": {
                  singular: "문제가 발생했습니다"
                },
                "pt-BR": {
                  singular: "Alguma coisa deu errado"
                },
                "zh-CN": {
                  singular: "出错了"
                }
              }
            }),
            variant: "warning"
          });
        } finally {
          _v12(!1);
        }
      };
    return _v21 || _v17 || _v18 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v35.Menu, {
        children: [(0, _v1.jsx)(_v36.MenuButton, {
          "aria-label": (0, _v17.translate)({
            singular: "More actions",
            dictionary: {
              es: {
                singular: "Más acciones"
              },
              "de-DE": {
                singular: "Weitere Aktionen"
              },
              "fr-FR": {
                singular: "Plus d'actions"
              },
              "ja-JP": {
                singular: "その他の操作"
              },
              "ko-KR": {
                singular: "기능 더 보기"
              },
              "pt-BR": {
                singular: "Mais ações"
              },
              "zh-CN": {
                singular: "更多操作"
              }
            }
          }),
          as: _v34.IconButton,
          icon: (0, _v1.jsx)(_v42.EllipsisV, {}),
          size: "md",
          variant: "tertiary"
        }), (0, _v1.jsxs)(_v39.MenuList, {
          children: [_v21 && (0, _v1.jsxs)(_v38.MenuItem, {
            as: "a",
            href: _v20,
            icon: (0, _v1.jsx)(_v41.DownloadImport, {}),
            children: [(0, _v17.translate)({
              singular: "Download",
              dictionary: {
                es: {
                  singular: "Descargar"
                },
                "de-DE": {
                  singular: "Herunterladen"
                },
                "fr-FR": {
                  singular: "Télécharger "
                },
                "ja-JP": {
                  singular: "ダウンロード"
                },
                "ko-KR": {
                  singular: "다운로드"
                },
                "pt-BR": {
                  singular: "Baixar"
                },
                "zh-CN": {
                  singular: "下载"
                }
              }
            }), "…"]
          }), _v17 && (0, _v1.jsx)(_v38.MenuItem, {
            icon: (0, _v1.jsx)(_v43.FolderOpen, {}),
            onClick: () => _v14(!0),
            children: (0, _v17.translate)({
              singular: "Move…",
              dictionary: {
                es: {
                  singular: "Mover…"
                },
                "de-DE": {
                  singular: "Verschieben…"
                },
                "fr-FR": {
                  singular: "Déplacer…"
                },
                "ja-JP": {
                  singular: "移動…"
                },
                "ko-KR": {
                  singular: "이동…"
                },
                "pt-BR": {
                  singular: "Mover…"
                },
                "zh-CN": {
                  singular: "移动…"
                }
              }
            })
          }), _v19 && (0, _v1.jsx)(_v38.MenuItem, {
            icon: (0, _v1.jsx)(_v40.CopyPortrait, {}),
            onClick: () => _v9(_v2),
            children: (0, _v17.translate)({
              singular: "Create a copy",
              dictionary: {
                es: {
                  singular: "Crear una copia"
                },
                "de-DE": {
                  singular: "Kopie erstellen"
                },
                "fr-FR": {
                  singular: "Créer une copie"
                },
                "ja-JP": {
                  singular: "コピーを作成"
                },
                "ko-KR": {
                  singular: "사본 만들기"
                },
                "pt-BR": {
                  singular: "Criar uma cópia"
                },
                "zh-CN": {
                  singular: "创建副本"
                }
              }
            })
          }), (_v21 || _v17) && _v18 && (0, _v1.jsx)(_v37.MenuDivider, {}), _v18 && (0, _v1.jsx)(_v38.MenuItem, {
            icon: (0, _v1.jsx)(_v44.TrashBin, {}),
            onClick: () => _v16(!0),
            children: (0, _v17.translate)({
              singular: "Delete",
              dictionary: {
                es: {
                  singular: "Eliminar"
                },
                "de-DE": {
                  singular: "Löschen"
                },
                "fr-FR": {
                  singular: "Supprimer"
                },
                "ja-JP": {
                  singular: "削除"
                },
                "ko-KR": {
                  singular: "삭제"
                },
                "pt-BR": {
                  singular: "Excluir"
                },
                "zh-CN": {
                  singular: "删除"
                }
              }
            })
          })]
        })]
      }), (0, _v1.jsx)(_v46.MoveModal, {
        feature: "file_manage",
        location: "file_manage",
        isActive: _v13,
        setIsActive: _v14,
        items: [{
          name: _v2.name,
          uri: _v2.uri,
          type: "file",
          parentFolder: null != _v2.parentFolder ? {
            uri: _v2.parentFolder.uri,
            isPrivateToUser: _v2.parentFolder.isPrivateToUser
          } : void 0
        }],
        teamOwnerId: _v1,
        onMoveSuccess: () => {
          _v4({
            title: (0, _v17.translate)({
              singular: "Changes saved",
              dictionary: {
                es: {
                  singular: "Guardamos los cambios"
                },
                "de-DE": {
                  singular: "Änderungen wurden gespeichert"
                },
                "fr-FR": {
                  singular: "Changements sauvegardés"
                },
                "ja-JP": {
                  singular: "変更内容が保存されました"
                },
                "ko-KR": {
                  singular: "변경 사항 저장 완료"
                },
                "pt-BR": {
                  singular: "Alterações salvas"
                },
                "zh-CN": {
                  singular: "已保存更改"
                }
              }
            })
          });
        },
        onMoveFailure: () => {
          _v4({
            title: (0, _v17.translate)({
              singular: "Something went wrong",
              dictionary: {
                es: {
                  singular: "Se ha producido un error"
                },
                "de-DE": {
                  singular: "Hier ist etwas schief gelaufen"
                },
                "fr-FR": {
                  singular: "Quelque chose a planté"
                },
                "ja-JP": {
                  singular: "エラーが発生しました"
                },
                "ko-KR": {
                  singular: "문제가 발생했습니다"
                },
                "pt-BR": {
                  singular: "Alguma coisa deu errado"
                },
                "zh-CN": {
                  singular: "出错了"
                }
              }
            }),
            variant: "warning"
          });
        }
      }), (0, _v1.jsx)(_v45.DeleteModal, {
        headerContent: (0, _v17.translate)({
          singular: "Move to Recently deleted?",
          dictionary: {
            es: {
              singular: "¿Mover a Eliminados recientemente?",
              plural: "¿Mover {NUM_ITEMS_DELETED} vídeos a Eliminados recientemente?"
            },
            "de-DE": {
              singular: "In „Kürzlich gelöscht“ verschieben?",
              plural: "{NUM_ITEMS_DELETED} Videos in „Kürzlich gelöscht“ verschieben?"
            },
            "fr-FR": {
              singular: "Déplacer vers Supprimés récemment ?",
              plural: "Déplacer {NUM_ITEMS_DELETED} vidéos vers Supprimés récemment ?"
            },
            "ja-JP": {
              singular: "この動画を「最近削除した項目」に移動しますか？",
              plural: "{NUM_ITEMS_DELETED}本の動画を「最近削除した項目」に移動しますか？"
            },
            "ko-KR": {
              singular: "최근 삭제됨으로 이동하시겠습니까?",
              plural: "{NUM_ITEMS_DELETED}개의 동영상을 최근 삭제됨으로 이동하시겠습니까?"
            },
            "pt-BR": {
              singular: "Mover para Excluídos recentemente?",
              plural: "Mover {NUM_ITEMS_DELETED} vídeos para Excluídos recentemente?"
            },
            "zh-CN": {
              singular: "移动到最近删除?",
              plural: "将 {NUM_ITEMS_DELETED} 个视频移动到最近删除?"
            }
          }
        }),
        bodyContent: (0, _v17.translate)({
          singular: '"{NAME}" will be deleted forever after 30 days.',
          replacements: {
            NAME: _v2.name
          },
          dictionary: {
            es: {
              singular: '"{NAME}" se eliminará de forma permanente después de 30 días.'
            },
            "de-DE": {
              singular: '"{NAME}" wird nach 30 Tagen dauerhaft gelöscht.'
            },
            "fr-FR": {
              singular: '"{NAME}" sera définitivement supprimé après 30 jours.'
            },
            "ja-JP": {
              singular: '"{NAME}"は30日後に完全に削除されます。'
            },
            "ko-KR": {
              singular: '"{NAME}"은 30일 후 영구적으로 삭제됩니다.'
            },
            "pt-BR": {
              singular: '"{NAME}" será excluído permanentemente após 30 dias.'
            },
            "zh-CN": {
              singular: '"{NAME}" 将在 30 天后被永久删除。'
            }
          }
        }),
        isLoading: _v11,
        isOpen: _v15,
        onClose: () => _v16(!1),
        onConfirm: () => void _v22()
      }), _v10]
    }) : (0, _v1.jsx)(_v1.Fragment, {});
  };
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  let _v52 = () => {
      let _v0 = (0, _v49.useColorModeValue)("slate.800", "white");
      return (0, _v1.jsx)(_v51.VimeoV, {
        height: (0, _v50.rem)(26.7),
        color: _v0
      });
    },
    _v53 = ({
      publicId: _v0,
      ownerId: _v1,
      file: _v2,
      onShareClick: _v3
    }) => {
      let _v4 = (0, _v3.useRef)(null);
      return (0, _v1.jsxs)(_v29.Navigation, {
        id: "header",
        children: [(0, _v1.jsx)(_v29.Navigation.LeftContent, {
          children: (0, _v1.jsx)("div", {
            ref: _v4,
            children: (0, _v1.jsxs)(_v5.Flex, {
              alignItems: "center",
              children: [(0, _v1.jsx)(_v31.default, {
                vimeoLogo: (0, _v1.jsx)(_v52, {})
              }), (0, _v1.jsx)(_v4.Box, {
                pl: "md",
                children: (0, _v1.jsx)(_v28.ContentBreadcrumbs, {
                  ancestorPath: _v2.metadata.connections.ancestorPath,
                  ownerUri: `/users/${_v1}`,
                  page: "manage",
                  title: _v2.name
                })
              })]
            })
          })
        }), (0, _v1.jsx)(_v29.Navigation.RightContent, {
          children: (0, _v1.jsxs)(_v5.Flex, {
            alignItems: "center",
            gap: "sm",
            children: [_v2.canUserEdit && (0, _v1.jsx)(_v26.Button, {
              leftIcon: (0, _v1.jsx)(_v27.Globe, {}),
              onClick: _v3,
              variant: "primary",
              children: (0, _v17.translate)({
                singular: "Share",
                dictionary: {
                  es: {
                    singular: "Compartir"
                  },
                  "de-DE": {
                    singular: "Teilen"
                  },
                  "fr-FR": {
                    singular: "Partager"
                  },
                  "ja-JP": {
                    singular: "共有"
                  },
                  "ko-KR": {
                    singular: "공유"
                  },
                  "pt-BR": {
                    singular: "Compartilhar"
                  },
                  "zh-CN": {
                    singular: "分享"
                  }
                }
              })
            }), (0, _v1.jsx)(_v48, {
              file: _v2,
              ownerId: _v1,
              publicId: _v0
            }), (0, _v1.jsx)(_v32.SearchField, {
              fadeOutLeftNav: !0,
              leftNavbarRef: _v4,
              withToggle: !0
            }), (0, _v1.jsx)(_v30.AccountMenu, {})]
          })
        })]
      });
    };
  _v0.i(0);
  var _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  let _v57 = {
      audio: (0, _v17.translate)({
        singular: "Audio preview",
        dictionary: {
          es: {
            singular: "Vista previa de audio"
          },
          "de-DE": {
            singular: "Audio‑Vorschau"
          },
          "fr-FR": {
            singular: "Aperçu audio"
          },
          "ja-JP": {
            singular: "オーディオプレビュー"
          },
          "ko-KR": {
            singular: "오디오 미리보기"
          },
          "pt-BR": {
            singular: "Prévia de áudio"
          },
          "zh-CN": {
            singular: "音频预览"
          }
        }
      }),
      image: (0, _v17.translate)({
        singular: "Image preview",
        dictionary: {
          es: {
            singular: "Vista previa de la imagen"
          },
          "de-DE": {
            singular: "Bildvorschau"
          },
          "fr-FR": {
            singular: "Aperçu de l'image"
          },
          "ja-JP": {
            singular: "画像プレビュー"
          },
          "ko-KR": {
            singular: "이미지 미리보기"
          },
          "pt-BR": {
            singular: "Pré-visualização da imagem"
          },
          "zh-CN": {
            singular: "图片预览"
          }
        }
      }),
      none: (0, _v17.translate)({
        singular: "No preview available",
        dictionary: {
          es: {
            singular: "No hay vista previa disponible"
          },
          "de-DE": {
            singular: "Keine Vorschau verfügbar"
          },
          "fr-FR": {
            singular: "Aucun aperçu disponible"
          },
          "ja-JP": {
            singular: "プレビューは利用できません"
          },
          "ko-KR": {
            singular: "미리보기가 없습니다"
          },
          "pt-BR": {
            singular: "Nenhuma visualização disponível"
          },
          "zh-CN": {
            singular: "暂无预览"
          }
        }
      })
    },
    _v58 = ({
      file: _v0
    }) => {
      let _v1 = (0, _v49.useColorModeValue)("surface", "fill-component"),
        _v2 = (0, _v56.getFilePreviewKind)({
          contentType: _v0.contentType,
          thumbnailUrl: _v0.thumbnail?.url,
          downloadUrl: _v0.downloadUrl
        });
      return (0, _v1.jsxs)(_v5.Flex, {
        background: "fill-component",
        borderRadius: "lg",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        minHeight: "37.5rem",
        children: [(0, _v1.jsxs)(_v5.Flex, {
          alignItems: "center",
          background: _v1,
          borderTopRadius: "lg",
          gap: "md",
          py: "md",
          pl: "md",
          pr: "lg",
          children: [(0, _v1.jsx)(_v14.FileThumbnailContent, {
            name: _v0.name,
            contentType: _v0.contentType,
            variant: "filled"
          }), (0, _v1.jsxs)(_v5.Flex, {
            flexDirection: "column",
            minWidth: 0,
            children: [(0, _v1.jsx)(_v12.Text, {
              variant: "heading-md",
              noOfLines: 1,
              children: _v0.name
            }), (0, _v1.jsx)(_v12.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: (0, _v55.getFileMeta)({
                name: _v0.name,
                contentType: _v0.contentType,
                fileSize: _v0.fileSize
              })
            })]
          })]
        }), (0, _v1.jsx)(_v5.Flex, {
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "center",
          minHeight: 0,
          children: (0, _v1.jsx)(_v54.FilePreview, {
            contentType: _v0.contentType,
            downloadUrl: _v0.downloadUrl,
            fileSize: _v0.fileSize,
            name: _v0.name,
            thumbnailUrl: _v0.thumbnail?.url
          })
        }), (0, _v1.jsx)(_v5.Flex, {
          background: _v1,
          borderBottomRadius: "lg",
          px: "lg",
          py: "md",
          children: (0, _v1.jsx)(_v12.Text, {
            variant: "body-sm",
            color: "text-tertiary",
            children: _v57[_v2]
          })
        })]
      });
    };
  var _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0);
  let _v69 = ["nobody", "team", "unlisted", "password"],
    _v70 = ({
      publicId: _v0,
      ownerId: _v1,
      file: _v2,
      onClose: _v3,
      onChanged: _v4
    }) => {
      let _v5 = (0, _v10.useViewer)(),
        _v6 = (0, _v13.useToast)(),
        {
          baseUrl: _v7,
          jwt: _v8,
          xVimeoPage: _v9,
          locale: _v10
        } = (0, _v16.useGctlConfig)(),
        {
          capabilities: _v11
        } = (0, _v63.useCapability)(["canAllowDownloads"], `/users/${_v1}`),
        _v12 = (0, _v3.useMemo)(() => _v69.map(_v0 => ({
          privacy: _v0,
          title: (0, _v68.getPrivacyLabel)(_v0, _v5?.teamUser),
          description: (0, _v65.getFilePrivacyDescription)(_v0),
          icon: (0, _v65.videoPrivacyIcons)("xs")[_v0]?.icon
        })), [_v5?.teamUser]),
        [_v13, _v14] = (0, _v3.useState)("password" === _v2.privacy),
        [_v15, _v16] = (0, _v3.useState)(!1),
        _v17 = (0, _v3.useRef)(null),
        _v18 = (0, _v67.getFileLink)(_v2.publicId),
        _v19 = _v11.canAllowDownloads,
        _v20 = async _v0 => {
          try {
            return await (0, _v15.patchUserFile)({
              where: {
                userId: _v1,
                fileId: _v0
              },
              select: _v21,
              variables: _v0,
              baseUrl: _v7,
              headers: {
                "Content-Type": "application/json",
                Authorization: _v8 ? `jwt ${_v8}` : "",
                "Vimeo-Page": `${_v9}`,
                "Accept-Language": _v10 ?? "en"
              }
            }), _v6({
              title: (0, _v17.translate)({
                singular: "Changes saved",
                dictionary: {
                  es: {
                    singular: "Guardamos los cambios"
                  },
                  "de-DE": {
                    singular: "Änderungen wurden gespeichert"
                  },
                  "fr-FR": {
                    singular: "Changements sauvegardés"
                  },
                  "ja-JP": {
                    singular: "変更内容が保存されました"
                  },
                  "ko-KR": {
                    singular: "변경 사항 저장 완료"
                  },
                  "pt-BR": {
                    singular: "Alterações salvas"
                  },
                  "zh-CN": {
                    singular: "已保存更改"
                  }
                }
              })
            }), _v4(), !0;
          } catch {
            return _v6({
              title: (0, _v17.translate)({
                singular: "Something went wrong",
                dictionary: {
                  es: {
                    singular: "Se ha producido un error"
                  },
                  "de-DE": {
                    singular: "Hier ist etwas schief gelaufen"
                  },
                  "fr-FR": {
                    singular: "Quelque chose a planté"
                  },
                  "ja-JP": {
                    singular: "エラーが発生しました"
                  },
                  "ko-KR": {
                    singular: "문제가 발생했습니다"
                  },
                  "pt-BR": {
                    singular: "Alguma coisa deu errado"
                  },
                  "zh-CN": {
                    singular: "出错了"
                  }
                }
              }),
              variant: "warning"
            }), !1;
          }
        },
        _v21 = async _v0 => {
          await _v20({
            privacy: "password",
            password: _v0
          });
        };
      return (0, _v3.useEffect)(() => () => {
        null != _v17.current && clearTimeout(_v17.current);
      }, []), (0, _v1.jsxs)(_v5.Flex, {
        background: "surface",
        borderRadius: "xl",
        flexDirection: "column",
        width: "22.5rem",
        flexShrink: 0,
        alignSelf: "stretch",
        children: [(0, _v1.jsxs)(_v5.Flex, {
          alignItems: "center",
          justifyContent: "space-between",
          p: "lg",
          children: [(0, _v1.jsx)(_v12.Text, {
            variant: "heading-sm",
            children: (0, _v17.translate)({
              singular: "Share",
              dictionary: {
                es: {
                  singular: "Compartir"
                },
                "de-DE": {
                  singular: "Teilen"
                },
                "fr-FR": {
                  singular: "Partager"
                },
                "ja-JP": {
                  singular: "共有"
                },
                "ko-KR": {
                  singular: "공유"
                },
                "pt-BR": {
                  singular: "Compartilhar"
                },
                "zh-CN": {
                  singular: "分享"
                }
              }
            })
          }), (0, _v1.jsx)(_v34.IconButton, {
            "aria-label": (0, _v17.translate)({
              singular: "Close",
              dictionary: {
                es: {
                  singular: "Cerrar"
                },
                "de-DE": {
                  singular: "Schließen"
                },
                "fr-FR": {
                  singular: "Fermer "
                },
                "ja-JP": {
                  singular: "閉じる"
                },
                "ko-KR": {
                  singular: "닫기"
                },
                "pt-BR": {
                  singular: "Fechar"
                },
                "zh-CN": {
                  singular: "关闭"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v60.CloseX, {}),
            onClick: _v3,
            size: "xs",
            variant: "tertiary"
          })]
        }), (0, _v1.jsxs)(_v5.Flex, {
          flexDirection: "column",
          gap: "2xl",
          px: "lg",
          pb: "lg",
          children: [(0, _v1.jsxs)(_v5.Flex, {
            flexDirection: "column",
            gap: "md",
            children: [(0, _v1.jsxs)(_v5.Flex, {
              flexDirection: "column",
              gap: "xs",
              children: [(0, _v1.jsx)(_v12.Text, {
                variant: "heading-xs",
                children: (0, _v17.translate)({
                  singular: "Privacy",
                  dictionary: {
                    es: {
                      singular: "Privacidad"
                    },
                    "de-DE": {
                      singular: "Datenschutz"
                    },
                    "fr-FR": {
                      singular: "Confidentialité "
                    },
                    "ja-JP": {
                      singular: "プライバシー"
                    },
                    "ko-KR": {
                      singular: "프라이버시"
                    },
                    "pt-BR": {
                      singular: "Privacidade"
                    },
                    "zh-CN": {
                      singular: "隐私"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v62.PrivacyDropdown, {
                activePrivacy: _v2.privacy,
                onSelect: _v0 => {
                  "password" === _v0 ? _v14(!0) : (_v14(!1), _v20({
                    privacy: _v0
                  }).then(_v0 => {
                    _v0 || "password" !== _v2.privacy || _v14(!0);
                  }));
                },
                privacyOptions: _v12,
                isVideoPrivacy: !0,
                variant: "outlined"
              })]
            }), _v13 && (0, _v1.jsx)(_v61.PasswordInput, {
              initialValue: "password" === _v2.privacy ? _v2.password ?? "" : "",
              onSave: _v21
            }), (0, _v1.jsxs)(_v5.Flex, {
              flexDirection: "column",
              gap: "xs",
              children: [(0, _v1.jsx)(_v12.Text, {
                my: (0, _v50.rem)(6),
                variant: "heading-xs",
                children: (0, _v17.translate)({
                  singular: "Viewer permissions",
                  dictionary: {
                    es: {
                      singular: "Permisos de los espectadores"
                    },
                    "de-DE": {
                      singular: "Zuschauerberechtigungen"
                    },
                    "fr-FR": {
                      singular: "Autorisations du spectateur"
                    },
                    "ja-JP": {
                      singular: "視聴者権限"
                    },
                    "ko-KR": {
                      singular: "뷰어 권한"
                    },
                    "pt-BR": {
                      singular: "Permissões do espectador"
                    },
                    "zh-CN": {
                      singular: "观众权限"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v5.Flex, {
                alignItems: "center",
                gap: "xs",
                h: (0, _v50.rem)(32),
                children: [(0, _v1.jsx)(_v12.Text, {
                  flexGrow: 1,
                  variant: "body-md",
                  children: (0, _v17.translate)({
                    singular: "Downloads",
                    dictionary: {
                      es: {
                        singular: "Descargas"
                      },
                      "fr-FR": {
                        singular: "Téléchargements"
                      },
                      "ja-JP": {
                        singular: "ダウンロード"
                      },
                      "ko-KR": {
                        singular: "다운로드"
                      },
                      "zh-CN": {
                        singular: "下载"
                      }
                    }
                  })
                }), !0 !== _v19 && (0, _v1.jsx)(_v64.UpgradeBadge, {
                  modalConfig: {
                    headerText: (0, _v17.translate)({
                      singular: "Upgrade to allow downloads",
                      dictionary: {
                        es: {
                          singular: "Actualice para permitir descargas"
                        },
                        "de-DE": {
                          singular: "Upgrade vornehmen, um Downloads zu ermöglichen"
                        },
                        "fr-FR": {
                          singular: "Mettez à niveau pour autoriser les téléchargements"
                        },
                        "ja-JP": {
                          singular: "アップグレードしてダウンロード可能に"
                        },
                        "ko-KR": {
                          singular: "다운로드를 허용하려면 업그레이드하세요."
                        },
                        "pt-BR": {
                          singular: "Faça upgrade para permitir downloads"
                        },
                        "zh-CN": {
                          singular: "升级以允许下载功能"
                        }
                      }
                    }),
                    subHeaderText: (0, _v17.translate)({
                      singular: "Get full access to robust privacy and engagement tools",
                      dictionary: {
                        es: {
                          singular: "Obtenga acceso total a herramientas potentes de privacidad e interacción"
                        },
                        "de-DE": {
                          singular: "Sie erhalten vollen Zugang zu leistungsstarken Datenschutz- und Interaktionstools."
                        },
                        "fr-FR": {
                          singular: "Accédez à tous les outils performants pour la confidentialité et l'engagement"
                        },
                        "ja-JP": {
                          singular: "強力なプライバシー機能とエンゲージメントツールにフルアクセス"
                        },
                        "ko-KR": {
                          singular: "강력한 개인정보 보호 및 참여 도구를 모두 활용하세요."
                        },
                        "pt-BR": {
                          singular: "Tenha acesso total a ferramentas robustas de privacidade e engajamento"
                        },
                        "zh-CN": {
                          singular: "获取对强大的隐私和参与工具的完整访问权限"
                        }
                      }
                    })
                  },
                  children: (0, _v17.translate)({
                    singular: "Upgrade",
                    dictionary: {
                      es: {
                        singular: "Actualizar"
                      },
                      "de-DE": {
                        singular: "Upgraden"
                      },
                      "fr-FR": {
                        singular: "Mettre à niveau"
                      },
                      "ja-JP": {
                        singular: "アップグレード"
                      },
                      "ko-KR": {
                        singular: "업그레이드"
                      },
                      "zh-CN": {
                        singular: "升级"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v59.Switch, {
                  isChecked: _v2.allowDownloads,
                  isDisabled: !0 !== _v19,
                  onChange: _v0 => {
                    _v20({
                      allowDownloads: _v0.target.checked
                    });
                  },
                  size: "md"
                })]
              })]
            })]
          }), (0, _v1.jsxs)(_v5.Flex, {
            flexDirection: "column",
            gap: "sm",
            children: [(0, _v1.jsx)(_v12.Text, {
              variant: "heading-xs",
              children: (0, _v17.translate)({
                singular: "Link",
                dictionary: {
                  es: {
                    singular: "Vínculo"
                  },
                  "fr-FR": {
                    singular: "Lien"
                  },
                  "ja-JP": {
                    singular: "リンク"
                  },
                  "ko-KR": {
                    singular: "링크"
                  },
                  "zh-CN": {
                    singular: "链接"
                  }
                }
              })
            }), (0, _v1.jsx)(_v11.Input, {
              id: "file-share-link",
              isReadOnly: !0,
              value: _v18,
              variant: "outlined"
            }), (0, _v1.jsx)(_v26.Button, {
              variant: "primary",
              onClick: () => {
                (0, _v66.default)(_v18) && (_v6({
                  title: (0, _v17.translate)({
                    singular: "Link copied",
                    dictionary: {
                      es: {
                        singular: "Vínculo copiado"
                      },
                      "de-DE": {
                        singular: "Link kopiert"
                      },
                      "fr-FR": {
                        singular: "Lien copié"
                      },
                      "ja-JP": {
                        singular: "リンクがコピーされました"
                      },
                      "ko-KR": {
                        singular: "링크가 복사됐습니다"
                      },
                      "pt-BR": {
                        singular: "Link copiado"
                      },
                      "zh-CN": {
                        singular: "链接已复制"
                      }
                    }
                  })
                }), _v16(!0), null != _v17.current && clearTimeout(_v17.current), _v17.current = setTimeout(() => _v16(!1), 0));
              },
              children: _v15 ? (0, _v17.translate)({
                singular: "Copied!",
                dictionary: {
                  es: {
                    singular: "Copiado"
                  },
                  "de-DE": {
                    singular: "Kopiert!"
                  },
                  "fr-FR": {
                    singular: "Copié !"
                  },
                  "ja-JP": {
                    singular: "コピー完了！"
                  },
                  "ko-KR": {
                    singular: "복사 완료!"
                  },
                  "pt-BR": {
                    singular: "Copiado!"
                  },
                  "zh-CN": {
                    singular: "已复制！"
                  }
                }
              }) : (0, _v17.translate)({
                singular: "Copy link",
                dictionary: {
                  es: {
                    singular: "Copiar vínculo"
                  },
                  "de-DE": {
                    singular: "Link kopieren"
                  },
                  "fr-FR": {
                    singular: "Copier le lien"
                  },
                  "ja-JP": {
                    singular: "リンクをコピー"
                  },
                  "ko-KR": {
                    singular: "링크 복사"
                  },
                  "pt-BR": {
                    singular: "Copiar link"
                  },
                  "zh-CN": {
                    singular: "复制链接"
                  }
                }
              })
            })]
          })]
        })]
      });
    },
    _v71 = ({
      publicId: _v0
    }) => {
      let _v1 = (0, _v10.useViewer)(),
        _v2 = (0, _v8.useOrionLoading)(),
        _v3 = (0, _v9.useUniversalHostingEnabled)(),
        _v4 = (_v0 => {
          let _v1 = (0, _v10.useViewer)(),
            {
              data: _v2,
              error: _v3,
              isLoading: _v4,
              mutate: _v5
            } = (0, _v20.useGetUserFile)(() => _v1?.user ? {
              where: {
                userId: _v1.user.id,
                fileId: _v0
              },
              select: _v21
            } : null),
            _v6 = (0, _v3.useCallback)(() => {
              _v5();
            }, [_v5]);
          return _v4 ? {
            status: "loading",
            refresh: _v6
          } : null != _v3 || null == _v2 ? {
            status: "error",
            refresh: _v6
          } : {
            status: "success",
            file: _v2,
            refresh: _v6
          };
        })(_v0),
        [_v5, _v6] = (0, _v3.useState)(!0);
      if (!_v1?.user || _v2 || "loading" === _v4.status) return (0, _v1.jsx)(_v4.Box, {
        minHeight: "100vh"
      });
      if (!_v3 || "error" === _v4.status) return (0, _v1.jsx)(_v7.ErrorPageWithHeader, {
        error: new _v6.ForbiddenError(),
        shouldShowSearch: !1
      });
      let _v7 = Number(_v4.file.uri.split("/")[2]);
      return (0, _v1.jsxs)(_v5.Flex, {
        direction: "column",
        height: {
          base: "auto",
          lg: "100vh"
        },
        overflow: {
          base: "visible",
          lg: "hidden"
        },
        children: [(0, _v1.jsx)(_v53, {
          file: _v4.file,
          onShareClick: () => _v6(_v0 => !_v0),
          ownerId: _v7,
          publicId: _v0
        }), (0, _v1.jsxs)(_v5.Flex, {
          as: "main",
          flexDirection: {
            base: "column",
            lg: "row"
          },
          flex: {
            lg: "1"
          },
          gap: "lg",
          justifyContent: "space-between",
          minHeight: {
            lg: 0
          },
          overflow: {
            base: "visible",
            lg: "hidden"
          },
          paddingX: "lg",
          paddingY: "lg",
          children: [(0, _v1.jsx)(_v5.Flex, {
            flexDirection: "column",
            flexGrow: 1,
            minWidth: 0,
            overflowY: {
              base: "visible",
              lg: "auto"
            },
            children: (0, _v1.jsxs)(_v5.Flex, {
              flexDirection: "column",
              gap: "2xl",
              marginX: "auto",
              maxWidth: "56rem",
              minWidth: 0,
              width: "100%",
              children: [(0, _v1.jsx)(_v58, {
                file: _v4.file
              }), (0, _v1.jsx)(_v25, {
                file: _v4.file,
                onChanged: _v4.refresh,
                ownerId: _v7,
                publicId: _v0
              })]
            })
          }), _v5 && (0, _v1.jsx)(_v70, {
            file: _v4.file,
            onChanged: _v4.refresh,
            onClose: () => _v6(!1),
            ownerId: _v7,
            publicId: _v0
          })]
        })]
      });
    };
  (0, _v2.withPageSetup)(_v0 => {
    let _v1 = _v0.query.publicId;
    return {
      props: {
        publicId: (Array.isArray(_v1) ? _v1[0] : _v1) ?? ""
      }
    };
  }, {
    noIndex: !0,
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, ({
    publicId: _v0
  }) => (0, _v1.jsx)(_v71, {
    publicId: _v0
  }, _v0)], 0);
}