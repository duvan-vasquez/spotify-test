(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkspotify_test"] = self["webpackChunkspotify_test"] || []).push([["src_app_pages_main_main_module_ts"], {
    /***/
    39966:
    /*!***********************************************************!*\
      !*** ./src/app/core/services/spotify/category.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoryService": function CategoryService() {
          return (
            /* binding */
            _CategoryService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var _authorize_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./authorize.service */
      67880);

      var _CategoryService = /*#__PURE__*/function () {
        function CategoryService(authorizeService) {
          _classCallCheck(this, CategoryService);

          this.authorizeService = authorizeService;
          this.listCategories = [];
          this.categoryServiceSubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        }

        _createClass(CategoryService, [{
          key: "get",
          value: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.authorizeService.spotifyApi.getCategories({
                        offset: 0,
                        limit: 30
                      }).then(function (res) {
                        return res.categories.items;
                      });

                    case 2:
                      return _context.abrupt("return", _context.sent);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getById",
          value: function getById(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.authorizeService.spotifyApi.getCategoryPlaylists(id).then(function (res) {
                        return res.playlists.items;
                      });

                    case 2:
                      return _context2.abrupt("return", _context2.sent);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getRecommendation",
          value: function getRecommendation() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.authorizeService.spotifyApi.getRecommendations({
                        limit: 30,
                        seed_genres: 'pop'
                      }).then(function (res) {
                        return res.tracks;
                      });

                    case 2:
                      this.listCategories = _context3.sent;

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return CategoryService;
      }();

      _CategoryService.ctorParameters = function () {
        return [{
          type: _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizeService
        }];
      };

      _CategoryService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _CategoryService);
      /***/
    },

    /***/
    33907:
    /*!***************************************************!*\
      !*** ./src/app/pages/main/main-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainPageRoutingModule": function MainPageRoutingModule() {
          return (
            /* binding */
            _MainPageRoutingModule
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


      var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main.page */
      44746);

      var routes = [{
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_0__.MainPage,
        children: [{
          path: 'music',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_main_music_music-tab_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./music/music-tab.module */
            20801)).then(function (p) {
              return p.MusicTabPageModule;
            });
          }
        }, {
          path: 'favorite',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_main_favorite_favorite-tab_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./favorite/favorite-tab.module */
            2271)).then(function (p) {
              return p.FavoriteTabPageModule;
            });
          }
        }, {
          path: '',
          redirectTo: 'music',
          pathMatch: 'full'
        }]
      }];

      var _MainPageRoutingModule = function MainPageRoutingModule() {
        _classCallCheck(this, MainPageRoutingModule);
      };

      _MainPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MainPageRoutingModule);
      /***/
    },

    /***/
    79582:
    /*!*******************************************!*\
      !*** ./src/app/pages/main/main.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainPageModule": function MainPageModule() {
          return (
            /* binding */
            _MainPageModule
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


      var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main.page */
      44746);
      /* harmony import */


      var _main_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main-routing.module */
      33907);
      /* harmony import */


      var src_app_components_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/component.module */
      78443);
      /* harmony import */


      var src_app_components_molecules_item_play_list_item_play_list_molecule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/components/molecules/item-play-list/item-play-list.molecule.component */
      17623);

      var _MainPageModule = function MainPageModule() {
        _classCallCheck(this, MainPageModule);
      };

      _MainPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, src_app_components_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule, _main_routing_module__WEBPACK_IMPORTED_MODULE_1__.MainPageRoutingModule],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_0__.MainPage],
        entryComponents: [src_app_components_molecules_item_play_list_item_play_list_molecule_component__WEBPACK_IMPORTED_MODULE_3__.ItemPlayListMolecule]
      })], _MainPageModule);
      /***/
    },

    /***/
    44746:
    /*!*****************************************!*\
      !*** ./src/app/pages/main/main.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainPage": function MainPage() {
          return (
            /* binding */
            _MainPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./main.page.html */
      51375);
      /* harmony import */


      var _main_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main.page.scss */
      18805);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_core_services_spotify_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/spotify/category.service */
      39966);
      /* harmony import */


      var src_app_core_services_spotify_follow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/spotify/follow.service */
      72570);

      var _MainPage = /*#__PURE__*/function () {
        function MainPage(categoryService, followService) {
          _classCallCheck(this, MainPage);

          this.categoryService = categoryService;
          this.followService = followService;
          this.selected = '';
        }

        _createClass(MainPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadList();
          }
        }, {
          key: "loadList",
          value: function loadList() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.followService.get().then(function () {});

                    case 2:
                      _context4.next = 4;
                      return this.categoryService.getRecommendation().then(function () {});

                    case 4:
                      _context4.next = 6;
                      return this.categoryService.categoryServiceSubscribe.next(true);

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "setTab",
          value: function setTab() {
            console.log('load data');
            this.selected = this.tabs.getSelected();
          }
        }]);

        return MainPage;
      }();

      _MainPage.ctorParameters = function () {
        return [{
          type: src_app_core_services_spotify_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService
        }, {
          type: src_app_core_services_spotify_follow_service__WEBPACK_IMPORTED_MODULE_3__.FollowService
        }];
      };

      _MainPage.propDecorators = {
        tabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTabs]
        }]
      };
      _MainPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-main',
        template: _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_main_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MainPage);
      /***/
    },

    /***/
    18805:
    /*!*******************************************!*\
      !*** ./src/app/pages/main/main.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6Im1haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";
      /***/
    },

    /***/
    51375:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<app-header [isMenu]=\"true\" [title]=\"'Musica'\"></app-header>\n<app-menu></app-menu>\n<ion-content>\n  <ion-tabs #tabs (ionTabsDidChange)=\"setTab()\">\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"music\">\n        <ion-icon size=\"large\" name=\"musical-notes-outline\"></ion-icon>\n        <ion-label>Music</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"favorite\">\n        <ion-icon size=\"large\" name=\"star-outline\"></ion-icon>\n        <ion-label>Favorites</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_main_main_module_ts-es5.js.map