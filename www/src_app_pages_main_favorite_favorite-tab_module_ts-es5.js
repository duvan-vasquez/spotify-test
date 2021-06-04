(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkspotify_test"] = self["webpackChunkspotify_test"] || []).push([["src_app_pages_main_favorite_favorite-tab_module_ts"], {
    /***/
    32351:
    /*!********************************************************************!*\
      !*** ./src/app/pages/main/favorite/favorite-tab-routing.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FavoriteTabPageRoutingModule": function FavoriteTabPageRoutingModule() {
          return (
            /* binding */
            _FavoriteTabPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _favorite_tab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./favorite-tab.page */
      83224);

      var routes = [{
        path: '',
        component: _favorite_tab_page__WEBPACK_IMPORTED_MODULE_0__.FavoriteTabPage
      }];

      var _FavoriteTabPageRoutingModule = function FavoriteTabPageRoutingModule() {
        _classCallCheck(this, FavoriteTabPageRoutingModule);
      };

      _FavoriteTabPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FavoriteTabPageRoutingModule);
      /***/
    },

    /***/
    2271:
    /*!************************************************************!*\
      !*** ./src/app/pages/main/favorite/favorite-tab.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FavoriteTabPageModule": function FavoriteTabPageModule() {
          return (
            /* binding */
            _FavoriteTabPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _favorite_tab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./favorite-tab.page */
      83224);
      /* harmony import */


      var _favorite_tab_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./favorite-tab-routing.module */
      32351);
      /* harmony import */


      var src_app_components_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/component.module */
      78443);

      var _FavoriteTabPageModule = function FavoriteTabPageModule() {
        _classCallCheck(this, FavoriteTabPageModule);
      };

      _FavoriteTabPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_components_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule, _favorite_tab_routing_module__WEBPACK_IMPORTED_MODULE_1__.FavoriteTabPageRoutingModule],
        entryComponents: [],
        declarations: [_favorite_tab_page__WEBPACK_IMPORTED_MODULE_0__.FavoriteTabPage]
      })], _FavoriteTabPageModule);
      /***/
    },

    /***/
    83224:
    /*!**********************************************************!*\
      !*** ./src/app/pages/main/favorite/favorite-tab.page.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FavoriteTabPage": function FavoriteTabPage() {
          return (
            /* binding */
            _FavoriteTabPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_favorite_tab_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./favorite-tab.page.html */
      98357);
      /* harmony import */


      var _favorite_tab_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./favorite-tab.page.scss */
      27980);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_core_services_spotify_follow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/spotify/follow.service */
      72570);
      /* harmony import */


      var src_app_core_utils_loading_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/utils/loading.util */
      46543);

      var _FavoriteTabPage = /*#__PURE__*/function () {
        function FavoriteTabPage(followService, loadingUtil) {
          _classCallCheck(this, FavoriteTabPage);

          this.followService = followService;
          this.loadingUtil = loadingUtil;
          this.title = "Favorite";
          this.items = [];
        }

        _createClass(FavoriteTabPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            console.log('Favorite component.');
            this.loadList();
            this.followService.followServiceSubscribe.subscribe(function (res) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (res) {
                          this.items = this.followService.listFollowers;
                        }

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "removeTrack",
          value: function removeTrack(item) {
            this.followService.unFollow(item.track.id).then(function () {});
          }
        }, {
          key: "loadList",
          value: function loadList() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingUtil.init();

                    case 2:
                      this.items = this.followService.listFollowers;
                      _context2.next = 5;
                      return this.loadingUtil.dismiss();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return FavoriteTabPage;
      }();

      _FavoriteTabPage.ctorParameters = function () {
        return [{
          type: src_app_core_services_spotify_follow_service__WEBPACK_IMPORTED_MODULE_2__.FollowService
        }, {
          type: src_app_core_utils_loading_util__WEBPACK_IMPORTED_MODULE_3__.LoadingUtil
        }];
      };

      _FavoriteTabPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-favorite-tab',
        template: _raw_loader_favorite_tab_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_favorite_tab_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FavoriteTabPage);
      /***/
    },

    /***/
    27980:
    /*!************************************************************!*\
      !*** ./src/app/pages/main/favorite/favorite-tab.page.scss ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvcml0ZS10YWIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    98357:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/favorite/favorite-tab.page.html ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <app-item-save-track-list \n        [items]=\"items\"\n        (removeTrack)=\"removeTrack($event)\"\n        ></app-item-save-track-list>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_main_favorite_favorite-tab_module_ts-es5.js.map