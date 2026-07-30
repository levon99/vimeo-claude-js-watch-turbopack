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
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = ({
    data: _v0,
    onManageClick: _v1
  }) => {
    let _v2 = (0, _v10.getTranslations)(),
      [_v3, _v4] = (0, _v2.useState)(!1);
    return (0, _v1.jsxs)(_v18.Tr, {
      children: [(0, _v1.jsx)(_v22.Td, {
        paddingY: (0, _v13.rem)(6),
        width: "33%",
        children: (0, _v1.jsxs)(_v11.HStack, {
          children: [(0, _v1.jsx)(_v24.WorkspaceLogo, {
            borderRadius: "input-sm",
            boxSize: "sm",
            fallbackAvatarSize: "sm",
            label: _v0.name,
            logoUrl: _v0.icon?.sizes[0]?.link
          }), (0, _v1.jsx)(_v21.Text, {
            fontWeight: 350,
            minWidth: "6rem",
            variant: "body-md",
            children: _v0.name
          })]
        })
      }), (0, _v1.jsx)(_v22.Td, {
        paddingY: (0, _v13.rem)(6),
        width: "20%",
        children: (0, _v1.jsx)(_v21.Text, {
          fontWeight: 350,
          variant: "body-md",
          children: (0, _v23.humanize)(_v0.adminCount)
        })
      }), (0, _v1.jsx)(_v22.Td, {
        paddingY: (0, _v13.rem)(6),
        width: "20%",
        children: (0, _v1.jsx)(_v21.Text, {
          fontWeight: 350,
          variant: "body-md",
          children: (0, _v23.humanize)(_v0.membersCount)
        })
      }), (0, _v1.jsx)(_v22.Td, {
        paddingY: (0, _v13.rem)(6),
        children: (0, _v1.jsx)(_v11.HStack, {
          justifyContent: "flex-end",
          children: (0, _v1.jsx)(_v20.Button, {
            borderRadius: "md",
            isLoading: _v3,
            onClick: () => {
              var _v0;
              return _v0 = _v0.uri, void (_v4(!0), _v1(_v0));
            },
            size: "md",
            variant: "secondary",
            children: _v2.Manage
          })
        })
      })]
    });
  };
  var _v26 = _v0.i(0);
  let _v27 = () => (0, _v1.jsxs)(_v18.Tr, {
      children: [(0, _v1.jsx)(_v22.Td, {
        width: "33%",
        children: (0, _v1.jsxs)(_v11.HStack, {
          children: [(0, _v1.jsx)(_v26.Skeleton, {
            borderRadius: "sm",
            height: "2rem",
            variant: "text",
            width: "2rem"
          }), (0, _v1.jsx)(_v26.Skeleton, {
            borderRadius: "xs",
            height: "1.25rem",
            variant: "text",
            width: "75%"
          })]
        })
      }), (0, _v1.jsx)(_v22.Td, {
        width: "20%",
        children: (0, _v1.jsx)(_v26.Skeleton, {
          borderRadius: "xs",
          height: "1.25rem",
          variant: "text",
          width: "55%"
        })
      }), (0, _v1.jsx)(_v22.Td, {
        width: "20%",
        children: (0, _v1.jsx)(_v26.Skeleton, {
          borderRadius: "xs",
          height: "1.25rem",
          variant: "text",
          width: "55%"
        })
      }), (0, _v1.jsx)(_v22.Td, {
        children: (0, _v1.jsx)(_v11.HStack, {
          justifyContent: "flex-end",
          children: (0, _v1.jsx)(_v26.Skeleton, {
            borderRadius: "xs",
            height: "2rem",
            variant: "text",
            width: "30%"
          })
        })
      })]
    }),
    _v28 = () => (0, _v1.jsx)(_v1.Fragment, {
      children: Array.from({
        length: 4
      }, (_v0, _v1) => _v1 + 1).map((_v0, _v1) => (0, _v1.jsx)(_v27, {}, _v1))
    });
  var _v29 = _v0.i(0);
  let _v30 = () => {
      let _v0 = (0, _v10.getTranslations)();
      return (0, _v1.jsx)(_v17.Thead, {
        children: (0, _v1.jsxs)(_v18.Tr, {
          children: [(0, _v1.jsx)(_v16.Th, {
            width: {
              base: "25%",
              sm: "30%",
              md: "33%"
            },
            children: (0, _v1.jsx)(_v3.Header, {
              minWidth: "2.5rem",
              size: "xs",
              children: _v0.Name
            })
          }), (0, _v1.jsx)(_v16.Th, {
            width: {
              base: "27%",
              sm: "18%",
              md: "20%"
            },
            children: (0, _v1.jsx)(_v3.Header, {
              minWidth: "4rem",
              size: "xs",
              children: _v0.Admins
            })
          }), (0, _v1.jsx)(_v16.Th, {
            width: {
              base: "30%",
              sm: "18%",
              md: "20%"
            },
            children: (0, _v1.jsx)(_v3.Header, {
              minWidth: "4rem",
              size: "xs",
              children: _v0.Members
            })
          }), (0, _v1.jsx)(_v16.Th, {})]
        })
      });
    },
    _v31 = ({
      changePageNumber: _v0,
      pageNumber: _v1,
      perPageResults: _v2,
      totalWorkspacesCount: _v3,
      workspacesList: _v4
    }) => {
      let [_v5, {
          called: _v6,
          data: _v7,
          loading: _v8
        }] = (0, _v19.usePatchMePreferences)(),
        _v9 = _v0 => {
          _v5({
            select: ["workspaceUri"],
            variables: {
              workspaceUri: _v0
            }
          });
        };
      (0, _v2.useEffect)(() => {
        _v6 && !_v8 && _v7 && (window.location.href = _v29.WORKSPACE_SETTINGS_ROUTES.BASICS);
      }, [_v6, _v7, _v8]);
      let _v10 = _v3 && _v3 > _v2;
      return (0, _v1.jsxs)(_v4.VStack, {
        backgroundColor: "surface",
        borderRadius: "md",
        padding: 3,
        width: "100%",
        children: [(0, _v1.jsxs)(_v14.Table, {
          variant: "undefined",
          children: [(0, _v1.jsx)(_v30, {}), (0, _v1.jsx)(_v15.Tbody, {
            children: _v4?.length ? _v4.map(_v0 => (0, _v1.jsx)(_v25, {
              data: _v0,
              onManageClick: _v9
            }, _v0.uri)) : (0, _v1.jsx)(_v28, {})
          })]
        }), _v10 && (0, _v1.jsx)(_v11.HStack, {
          justifyContent: "center",
          paddingTop: (0, _v13.rem)(32),
          width: "100%",
          children: (0, _v1.jsx)(_v12.Pagination, {
            count: _v3,
            page: _v1,
            pageSize: _v2,
            onPageChange: _v0 => _v0(_v0.page)
          })
        })]
      });
    };
  var _v32 = _v0.i(0);
  let _v33 = ({
    organizationUuid: _v0
  }) => {
    let [_v1, _v2] = (0, _v2.useState)(1),
      _v3 = (0, _v10.getTranslations)(),
      {
        data: _v4,
        error: _v5
      } = (0, _v7.useGetOrganizationWorkspaces)(() => _v0 ? {
        select: ["displayName", "icon", "membershipCount.admins", "membershipCount.members", "uri"],
        where: {
          orgUuid: _v0
        },
        query: {
          page: _v1,
          perPage: 10
        }
      } : null),
      _v6 = _v4?.total ?? 0,
      _v7 = (0, _v2.useMemo)(() => _v4?.data ? _v4.data.map(_v0 => ({
        adminCount: _v0.membershipCount.admins,
        icon: _v0.icon,
        membersCount: _v0.membershipCount.members,
        name: _v0.displayName,
        uri: _v0.uri
      })) : [], [_v4?.data]);
    return _v5 ? (0, _v1.jsx)(_v8.ErrorPage, {
      error: new _v5.ResourceNotFoundError()
    }) : (0, _v1.jsxs)(_v4.VStack, {
      align: "flex-start",
      gap: "lg",
      paddingY: "lg",
      paddingX: "lg",
      children: [(0, _v1.jsx)(_v3.Header, {
        size: "lg",
        children: _v3.Workspaces
      }), (0, _v1.jsx)(_v31, {
        changePageNumber: _v2,
        pageNumber: _v1,
        perPageResults: 10,
        totalWorkspacesCount: _v6,
        workspacesList: _v7
      })]
    });
  };
  (0, _v6.withPageSetup)(_v32.getOrgAndWspUuidServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v33.getLayout = (_v0, _v1) => (0, _v9.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v33], 0);
}