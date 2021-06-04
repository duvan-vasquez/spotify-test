(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkspotify_test"] = self["webpackChunkspotify_test"] || []).push([["src_app_pages_main_music_music-tab_module_ts"], {
    /***/
    16605:
    /*!**************************************************************!*\
      !*** ./src/app/pages/main/music/music-tab-routing.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MusicTabPageRoutingModule": function MusicTabPageRoutingModule() {
          return (
            /* binding */
            _MusicTabPageRoutingModule
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


      var _music_tab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./music-tab.page */
      43329);

      var routes = [{
        path: '',
        component: _music_tab_page__WEBPACK_IMPORTED_MODULE_0__.MusicTabPage
      }];

      var _MusicTabPageRoutingModule = function MusicTabPageRoutingModule() {
        _classCallCheck(this, MusicTabPageRoutingModule);
      };

      _MusicTabPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MusicTabPageRoutingModule);
      /***/
    },

    /***/
    20801:
    /*!******************************************************!*\
      !*** ./src/app/pages/main/music/music-tab.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MusicTabPageModule": function MusicTabPageModule() {
          return (
            /* binding */
            _MusicTabPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _music_tab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./music-tab.page */
      43329);
      /* harmony import */


      var _music_tab_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./music-tab-routing.module */
      16605);
      /* harmony import */


      var src_app_components_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/component.module */
      78443);
      /* harmony import */


      var src_app_components_molecules_item_play_list_item_play_list_molecule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/components/molecules/item-play-list/item-play-list.molecule.component */
      17623);

      var _MusicTabPageModule = function MusicTabPageModule() {
        _classCallCheck(this, MusicTabPageModule);
      };

      _MusicTabPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, src_app_components_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule, _music_tab_routing_module__WEBPACK_IMPORTED_MODULE_1__.MusicTabPageRoutingModule],
        entryComponents: [src_app_components_molecules_item_play_list_item_play_list_molecule_component__WEBPACK_IMPORTED_MODULE_3__.ItemPlayListMolecule],
        declarations: [_music_tab_page__WEBPACK_IMPORTED_MODULE_0__.MusicTabPage]
      })], _MusicTabPageModule);
      /***/
    },

    /***/
    43329:
    /*!****************************************************!*\
      !*** ./src/app/pages/main/music/music-tab.page.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MusicTabPage": function MusicTabPage() {
          return (
            /* binding */
            _MusicTabPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_music_tab_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./music-tab.page.html */
      53017);
      /* harmony import */


      var _music_tab_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./music-tab.page.scss */
      70226);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_core_services_spotify_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/spotify/category.service */
      39966);
      /* harmony import */


      var src_app_core_utils_loading_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/utils/loading.util */
      46543);

      var _MusicTabPage = /*#__PURE__*/function () {
        function MusicTabPage(categoryService, loadingUtil) {
          _classCallCheck(this, MusicTabPage);

          this.categoryService = categoryService;
          this.loadingUtil = loadingUtil;
          this.items = [];
          this.title = 'Music';
        }

        _createClass(MusicTabPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loadList();
            this.categoryService.categoryServiceSubscribe.subscribe(function (res) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (res) {
                          console.log('Suscribe', res);
                          this.items = this.categoryService.listCategories;
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
                      this.items = this.categoryService.listCategories;
                      console.log('Loading', this.items);
                      _context2.next = 6;
                      return this.loadingUtil.dismiss();

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return MusicTabPage;
      }();

      _MusicTabPage.ctorParameters = function () {
        return [{
          type: src_app_core_services_spotify_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService
        }, {
          type: src_app_core_utils_loading_util__WEBPACK_IMPORTED_MODULE_3__.LoadingUtil
        }];
      };

      _MusicTabPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-music-tab',
        template: _raw_loader_music_tab_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_music_tab_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MusicTabPage);
      /***/
    },

    /***/
    70226:
    /*!******************************************************!*\
      !*** ./src/app/pages/main/music/music-tab.page.scss ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdXNpYy10YWIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    53017:
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/music/music-tab.page.html ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <app-item-play-list [items]=\"items\"></app-item-play-list>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_main_music_music-tab_module_ts-es5.js.map