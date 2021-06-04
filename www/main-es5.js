(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkspotify_test"] = self["webpackChunkspotify_test"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
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


      var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core/guards/auth.guard */
      27574);

      var routes = [{
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/login/login.module */
          21053)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/main/main.module */
          79582)).then(function (m) {
            return m.MainPageModule;
          });
        },
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
      }, {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      51524);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73494);
      /* harmony import */


      var _core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./core/services/common.service */
      50690);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, statusBar, commonService, splashScreen) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.statusBar = statusBar;
          this.commonService = commonService;
          this.splashScreen = splashScreen;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.platform.ready().then(function () {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return this.commonService.loadAuth();

                                case 2:
                                  this.statusBar.styleDefault();
                                  this.splashScreen.hide();
                                  this.changeDarkMode();

                                case 5:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "changeDarkMode",
          value: function changeDarkMode() {
            var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

            if (prefersDark.matches) {
              document.body.classList.toggle('dark');
            }
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar
        }, {
          type: _core_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      61628);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/storage-angular */
      54925);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _components_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/component.module */
      78443);
      /* harmony import */


      var _core_services_inteceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./core/services/inteceptor.service */
      91639);
      /* harmony import */


      var _ionic_native_spotify_auth_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/spotify-auth/ngx */
      37173);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73494);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      51524);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _components_component_module__WEBPACK_IMPORTED_MODULE_4__.ComponentModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_15__.IonicStorageModule.forRoot({
          name: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.database.name,
          driverOrder: [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Drivers.IndexedDB, _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Drivers.LocalStorage]
        })],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _components_component_module__WEBPACK_IMPORTED_MODULE_4__.ComponentModule],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__.StatusBar, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__.SplashScreen, _ionic_native_spotify_auth_ngx__WEBPACK_IMPORTED_MODULE_6__.SpotifyAuth, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
          useClass: _core_services_inteceptor_service__WEBPACK_IMPORTED_MODULE_5__.InteceptorService,
          multi: true
        }, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    78443:
    /*!************************************************!*\
      !*** ./src/app/components/component.module.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentModule": function ComponentModule() {
          return (
            /* binding */
            _ComponentModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _molecules_Validators_email_input_email_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./molecules/Validators/email-input/email-input.component */
      16761);
      /* harmony import */


      var _molecules_Validators_password_input_password_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./molecules/Validators/password-input/password-input.component */
      20939);
      /* harmony import */


      var _organisms_header_header_organism_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./organisms/header/header.organism.component */
      82770);
      /* harmony import */


      var _organisms_menu_menu_organism_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./organisms/menu/menu.organism.component */
      52901);
      /* harmony import */


      var _molecules_item_play_list_item_play_list_molecule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./molecules/item-play-list/item-play-list.molecule.component */
      17623);
      /* harmony import */


      var _molecules_item_saved_track_item_save_track_list_molecule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./molecules/item-saved-track/item-save-track-list.molecule.component */
      4359);

      var _ComponentModule = function ComponentModule() {
        _classCallCheck(this, ComponentModule);
      };

      _ComponentModule = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule],
        declarations: [_organisms_menu_menu_organism_component__WEBPACK_IMPORTED_MODULE_3__.MenuOrganism, _molecules_item_saved_track_item_save_track_list_molecule_component__WEBPACK_IMPORTED_MODULE_5__.ItemSaveTrackListMolecule, _molecules_Validators_email_input_email_input_component__WEBPACK_IMPORTED_MODULE_0__.EmailInputAtom, _molecules_Validators_password_input_password_input_component__WEBPACK_IMPORTED_MODULE_1__.PasswordInputAtom, _organisms_header_header_organism_component__WEBPACK_IMPORTED_MODULE_2__.HeaderOrganism, _molecules_item_play_list_item_play_list_molecule_component__WEBPACK_IMPORTED_MODULE_4__.ItemPlayListMolecule],
        entryComponents: [_organisms_menu_menu_organism_component__WEBPACK_IMPORTED_MODULE_3__.MenuOrganism, _molecules_item_saved_track_item_save_track_list_molecule_component__WEBPACK_IMPORTED_MODULE_5__.ItemSaveTrackListMolecule, _molecules_Validators_email_input_email_input_component__WEBPACK_IMPORTED_MODULE_0__.EmailInputAtom, _molecules_Validators_password_input_password_input_component__WEBPACK_IMPORTED_MODULE_1__.PasswordInputAtom, _organisms_header_header_organism_component__WEBPACK_IMPORTED_MODULE_2__.HeaderOrganism, _molecules_item_play_list_item_play_list_molecule_component__WEBPACK_IMPORTED_MODULE_4__.ItemPlayListMolecule],
        exports: [_organisms_menu_menu_organism_component__WEBPACK_IMPORTED_MODULE_3__.MenuOrganism, _molecules_item_saved_track_item_save_track_list_molecule_component__WEBPACK_IMPORTED_MODULE_5__.ItemSaveTrackListMolecule, _molecules_Validators_email_input_email_input_component__WEBPACK_IMPORTED_MODULE_0__.EmailInputAtom, _molecules_Validators_password_input_password_input_component__WEBPACK_IMPORTED_MODULE_1__.PasswordInputAtom, _organisms_header_header_organism_component__WEBPACK_IMPORTED_MODULE_2__.HeaderOrganism, _molecules_item_play_list_item_play_list_molecule_component__WEBPACK_IMPORTED_MODULE_4__.ItemPlayListMolecule]
      })], _ComponentModule);
      /***/
    },

    /***/
    16761:
    /*!**************************************************************************************!*\
      !*** ./src/app/components/molecules/Validators/email-input/email-input.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailInputAtom": function EmailInputAtom() {
          return (
            /* binding */
            _EmailInputAtom
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_email_input_atom_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./email-input.atom.html */
      98932);
      /* harmony import */


      var _email_input_atom_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email-input.atom.scss */
      49492);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _EmailInputAtom = /*#__PURE__*/function () {
        function EmailInputAtom() {
          _classCallCheck(this, EmailInputAtom);
        }

        _createClass(EmailInputAtom, [{
          key: "email",
          get:
          /** From validator */
          function get() {
            return this.parentForm.controls.email;
          }
        }]);

        return EmailInputAtom;
      }();

      _EmailInputAtom.propDecorators = {
        parentForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _EmailInputAtom = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'email-input',
        template: _raw_loader_email_input_atom_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [],
        styles: [_email_input_atom_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EmailInputAtom);
      /***/
    },

    /***/
    20939:
    /*!********************************************************************************************!*\
      !*** ./src/app/components/molecules/Validators/password-input/password-input.component.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PasswordInputAtom": function PasswordInputAtom() {
          return (
            /* binding */
            _PasswordInputAtom
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_password_input_atom_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./password-input.atom.html */
      23721);
      /* harmony import */


      var _password_input_atom_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./password-input.atom.scss */
      96769);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PasswordInputAtom = /*#__PURE__*/function () {
        function PasswordInputAtom() {
          _classCallCheck(this, PasswordInputAtom);
        }

        _createClass(PasswordInputAtom, [{
          key: "password",
          get:
          /** From validator */
          function get() {
            return this.parentForm.controls.password;
          }
        }]);

        return PasswordInputAtom;
      }();

      _PasswordInputAtom.propDecorators = {
        parentForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _PasswordInputAtom = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'password-input',
        template: _raw_loader_password_input_atom_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [],
        styles: [_password_input_atom_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PasswordInputAtom);
      /***/
    },

    /***/
    17623:
    /*!******************************************************************************************!*\
      !*** ./src/app/components/molecules/item-play-list/item-play-list.molecule.component.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemPlayListMolecule": function ItemPlayListMolecule() {
          return (
            /* binding */
            _ItemPlayListMolecule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_item_play_list_molecule_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./item-play-list.molecule.html */
      13812);
      /* harmony import */


      var _item_play_list_molecule_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./item-play-list.molecule.scss */
      34258);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_core_services_spotify_follow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/spotify/follow.service */
      72570);

      var _ItemPlayListMolecule = /*#__PURE__*/function () {
        function ItemPlayListMolecule(followService) {
          _classCallCheck(this, ItemPlayListMolecule);

          this.followService = followService;
          this.items = [];
        }

        _createClass(ItemPlayListMolecule, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "isFavorite",
          value: function isFavorite(item) {
            return this.followService.listFollowers.findIndex(function (p) {
              return p.track.id === item.id;
            }) !== -1;
          }
        }, {
          key: "addFavorite",
          value: function addFavorite(item) {
            this.followService.setFollow(item.id);
          }
        }]);

        return ItemPlayListMolecule;
      }();

      _ItemPlayListMolecule.ctorParameters = function () {
        return [{
          type: src_app_core_services_spotify_follow_service__WEBPACK_IMPORTED_MODULE_2__.FollowService
        }];
      };

      _ItemPlayListMolecule.propDecorators = {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _ItemPlayListMolecule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-item-play-list',
        template: _raw_loader_item_play_list_molecule_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [],
        styles: [_item_play_list_molecule_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ItemPlayListMolecule);
      /***/
    },

    /***/
    4359:
    /*!**************************************************************************************************!*\
      !*** ./src/app/components/molecules/item-saved-track/item-save-track-list.molecule.component.ts ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemSaveTrackListMolecule": function ItemSaveTrackListMolecule() {
          return (
            /* binding */
            _ItemSaveTrackListMolecule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_item_save_track_list_molecule_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./item-save-track-list.molecule.html */
      26435);
      /* harmony import */


      var _item_save_track_list_molecule_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./item-save-track-list.molecule.scss */
      34854);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_core_services_spotify_follow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/spotify/follow.service */
      72570);

      var _ItemSaveTrackListMolecule = /*#__PURE__*/function () {
        function ItemSaveTrackListMolecule(followService, loadingCtrl) {
          _classCallCheck(this, ItemSaveTrackListMolecule);

          this.followService = followService;
          this.loadingCtrl = loadingCtrl;
          this.items = [];
          this.removeTrack = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        }

        _createClass(ItemSaveTrackListMolecule, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ItemSaveTrackListMolecule;
      }();

      _ItemSaveTrackListMolecule.ctorParameters = function () {
        return [{
          type: src_app_core_services_spotify_follow_service__WEBPACK_IMPORTED_MODULE_2__.FollowService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController
        }];
      };

      _ItemSaveTrackListMolecule.propDecorators = {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        removeTrack: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
        }]
      };
      _ItemSaveTrackListMolecule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-item-save-track-list',
        template: _raw_loader_item_save_track_list_molecule_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [],
        styles: [_item_save_track_list_molecule_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ItemSaveTrackListMolecule);
      /***/
    },

    /***/
    82770:
    /*!**************************************************************************!*\
      !*** ./src/app/components/organisms/header/header.organism.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderOrganism": function HeaderOrganism() {
          return (
            /* binding */
            _HeaderOrganism
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_header_organism_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./header.organism.html */
      95231);
      /* harmony import */


      var _header_organism_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header.organism.scss */
      72689);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _HeaderOrganism = /*#__PURE__*/function () {
        function HeaderOrganism() {
          _classCallCheck(this, HeaderOrganism);

          this.isMenu = false;
          this.isBack = false;
          this.title = '';
        }

        _createClass(HeaderOrganism, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderOrganism;
      }();

      _HeaderOrganism.propDecorators = {
        isMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        isBack: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _HeaderOrganism = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_organism_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [],
        styles: [_header_organism_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HeaderOrganism);
      /***/
    },

    /***/
    52901:
    /*!**********************************************************************!*\
      !*** ./src/app/components/organisms/menu/menu.organism.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuOrganism": function MenuOrganism() {
          return (
            /* binding */
            _MenuOrganism
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_menu_organism_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./menu.organism.html */
      3162);
      /* harmony import */


      var _menu_organism_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu.organism.scss */
      97856);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var src_app_core_services_spotify_authorize_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/spotify/authorize.service */
      67880);
      /* harmony import */


      var src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/global.environment */
      98618);

      var _MenuOrganism = /*#__PURE__*/function () {
        function MenuOrganism(commonService, menu, authorizeService) {
          _classCallCheck(this, MenuOrganism);

          this.commonService = commonService;
          this.menu = menu;
          this.authorizeService = authorizeService;
        }

        _createClass(MenuOrganism, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.load();
            this.authorizeService.userServiceSubscribe.subscribe(function (res) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (res) {
                          console.log(this.user);
                          this.user = src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_4__.GlobalEnvironment.userSpotify;
                        }

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });
          }
        }, {
          key: "load",
          value: function load() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.commonService.loadUser();

                    case 2:
                      this.user = src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_4__.GlobalEnvironment.userSpotify;
                      console.log(this.user);

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
          /*openFirst() {
            this.menu.enable(true, 'first');
            this.menu.open('first');
          }
             openEnd() {
            this.menu.open('end');
          }
             openCustom() {
            this.menu.enable(true, 'custom');
            this.menu.open('custom');
          }*/

        }, {
          key: "logout",
          value: function logout() {
            console.log('logout');
            this.authorizeService.forget();
            this.commonService.logout();
          }
        }]);

        return MenuOrganism;
      }();

      _MenuOrganism.ctorParameters = function () {
        return [{
          type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController
        }, {
          type: src_app_core_services_spotify_authorize_service__WEBPACK_IMPORTED_MODULE_3__.AuthorizeService
        }];
      };

      _MenuOrganism = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-menu',
        template: _raw_loader_menu_organism_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [],
        styles: [_menu_organism_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MenuOrganism);
      /***/
    },

    /***/
    27574:
    /*!*******************************************!*\
      !*** ./src/app/core/guards/auth.guard.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);

      var _AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, commonService, navCtrl) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.commonService = commonService;
          this.navCtrl = navCtrl;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var _this3 = this;

            /** No-login. */
            return new Promise(function (resolve) {
              _this3.commonService.isAuth().then(function (res) {
                return res === null || res === void 0 ? void 0 : res.accessToken;
              }).then(function (token) {
                if (token) {
                  //Valid token
                  resolve(true);
                } else {
                  _this3.navCtrl.navigateForward('login');

                  resolve(false);
                }
              })["catch"](function (err) {
                resolve(false);
              });
            });
          }
        }]);

        return AuthGuard;
      }();

      _AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
        }, {
          type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController
        }];
      };

      _AuthGuard = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _AuthGuard);
      /***/
    },

    /***/
    50690:
    /*!*************************************************!*\
      !*** ./src/app/core/services/common.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommonService": function CommonService() {
          return (
            /* binding */
            _CommonService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./storage.service */
      22323);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/global.environment */
      98618);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _CommonService = /*#__PURE__*/function () {
        function CommonService(lStorage, navCtrl, plCtrl, router) {
          _classCallCheck(this, CommonService);

          this.lStorage = lStorage;
          this.navCtrl = navCtrl;
          this.plCtrl = plCtrl;
          this.router = router;
        }

        _createClass(CommonService, [{
          key: "loadAuth",
          value: function loadAuth() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_2__.GlobalEnvironment.auth) {
                        _context5.next = 3;
                        break;
                      }

                      _context5.next = 3;
                      return this.lStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.definitions.authToken).then(function (res) {
                        src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_2__.GlobalEnvironment.auth = res;
                      });

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "loadUser",
          value: function loadUser() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_2__.GlobalEnvironment.userSpotify) {
                        _context6.next = 3;
                        break;
                      }

                      _context6.next = 3;
                      return this.lStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.definitions.userSpotify).then(function (res) {
                        src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_2__.GlobalEnvironment.userSpotify = res;
                      });

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "setUser",
          value: function setUser(user) {
            this.lStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.definitions.userSpotify, user);
          }
        }, {
          key: "setAuth",
          value: function setAuth(auth) {
            this.lStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.definitions.authToken, auth);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.lStorage.removeItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.definitions.authToken);
            this.lStorage.removeItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.definitions.userSpotify);
            this.navCtrl.navigateForward(['login']);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            var _a, _b;

            return (_b = (_a = src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_2__.GlobalEnvironment.auth) === null || _a === void 0 ? void 0 : _a.accessToken) !== null && _b !== void 0 ? _b : '';
          }
        }, {
          key: "isAuth",
          value: function isAuth() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      console.log('is auth', src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_2__.GlobalEnvironment.auth);
                      _context7.next = 3;
                      return this.lStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.definitions.authToken);

                    case 3:
                      return _context7.abrupt("return", _context7.sent);

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return CommonService;
      }();

      _CommonService.ctorParameters = function () {
        return [{
          type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }];
      };

      _CommonService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
      })], _CommonService);
      /***/
    },

    /***/
    91639:
    /*!*****************************************************!*\
      !*** ./src/app/core/services/inteceptor.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InteceptorService": function InteceptorService() {
          return (
            /* binding */
            _InteceptorService
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
      40205);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      5304);

      var _InteceptorService = /*#__PURE__*/function () {
        function InteceptorService() {
          _classCallCheck(this, InteceptorService);
        }

        _createClass(InteceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            /*let headersModify = req.headers.set('Access-Control-Allow-Headers', 'Content-Type');
            headersModify = req.headers.set('Access-Control-Allow-Methods', 'GET, POST DELETE, PUT');
            headersModify = req.headers.set('Access-Control-Allow-Origin', '*');*/

            /*const headers = new HttpHeaders({
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, content-type',
                'Access-Control-Allow-Methods': 'GET, POST DELETE, PUT',
                'Access-Control-Allow-Origin': '*'
            });*/

            /*const reqs = req.clone({
                headers
            })*/
            return next.handle(req).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.error));
          }
        }, {
          key: "error",
          value: function error(err) {
            console.log(err.message);
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(err);
          }
        }]);

        return InteceptorService;
      }();

      _InteceptorService.ctorParameters = function () {
        return [];
      };

      _InteceptorService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _InteceptorService);
      /***/
    },

    /***/
    67880:
    /*!************************************************************!*\
      !*** ./src/app/core/services/spotify/authorize.service.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthorizeService": function AuthorizeService() {
          return (
            /* binding */
            _AuthorizeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! spotify-web-api-js */
      33804);
      /* harmony import */


      var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(spotify_web_api_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/global.environment */
      98618);
      /* harmony import */


      var _utils_loading_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../utils/loading.util */
      46543);
      /* harmony import */


      var _utils_toast_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../utils/toast.util */
      29726);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AuthorizeService = /*#__PURE__*/function () {
        function AuthorizeService(commonService, navCtrl, loadingUtil, toastUtil, router) {
          _classCallCheck(this, AuthorizeService);

          var _a;

          this.commonService = commonService;
          this.navCtrl = navCtrl;
          this.loadingUtil = loadingUtil;
          this.toastUtil = toastUtil;
          this.router = router;
          this.userServiceSubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
          console.log('loading', src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_3__.GlobalEnvironment.auth);
          this.spotifyApi = new (spotify_web_api_js__WEBPACK_IMPORTED_MODULE_2___default())();
          this.spotifyApi.setAccessToken((_a = src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_3__.GlobalEnvironment.auth) === null || _a === void 0 ? void 0 : _a.accessToken);
        }

        _createClass(AuthorizeService, [{
          key: "forget",
          value: function forget() {
            cordova.plugins.spotifyAuth.forget();
          }
          /**
           * Connect with api of spotify.
           */

        }, {
          key: "auth",
          value: function auth(refresh) {
            var _this4 = this;

            var config = {
              clientId: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apis.spotify.clientId,
              redirectUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.scheme + '://callback',
              scopes: ['streaming', 'user-library-read', 'playlist-modify-public', 'playlist-modify-public', 'playlist-read-private', 'user-read-email', 'user-follow-modify', 'user-follow-read', 'user-read-private', 'user-library-modify'],
              tokenExchangeUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apis.spotify.urlResponse.tokenExchangeUrl,
              tokenRefreshUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apis.spotify.urlResponse.tokenRefreshUrl
            };

            if (refresh) {
              cordova.plugins.spotifyAuth.forget();
            }

            cordova.plugins.spotifyAuth.authorize(config).then(function (auth) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return this.loadingUtil.init();

                      case 2:
                        console.log(auth);

                        if (!auth.accessToken) {
                          _context8.next = 14;
                          break;
                        }

                        auth.loggedIn = true;
                        this.spotifyApi.setAccessToken(auth.accessToken);
                        _context8.next = 8;
                        return this.getUser();

                      case 8:
                        this.commonService.setAuth(auth);
                        _context8.next = 11;
                        return this.loadingUtil.dismiss();

                      case 11:
                        this.navCtrl.navigateForward(['home']);
                        _context8.next = 18;
                        break;

                      case 14:
                        _context8.next = 16;
                        return this.loadingUtil.dismiss();

                      case 16:
                        cordova.plugins.spotifyAuth.forget();
                        this.toastUtil.show('Retry login.', 'danger');

                      case 18:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));
            })["catch"](function (err) {
              cordova.plugins.spotifyAuth.forget();
            });
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.spotifyApi.getMe().then(function (data) {
                        return data;
                      }, function (err) {
                        console.error(err);
                      });

                    case 2:
                      src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_3__.GlobalEnvironment.userSpotify = _context9.sent;
                      this.commonService.setUser(src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_3__.GlobalEnvironment.userSpotify);
                      this.userServiceSubscribe.next(true);

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return AuthorizeService;
      }();

      _AuthorizeService.ctorParameters = function () {
        return [{
          type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
        }, {
          type: _utils_loading_util__WEBPACK_IMPORTED_MODULE_4__.LoadingUtil
        }, {
          type: _utils_toast_util__WEBPACK_IMPORTED_MODULE_5__.ToastUtil
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }];
      };

      _AuthorizeService = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
        providedIn: 'root'
      })], _AuthorizeService);
      /***/
    },

    /***/
    72570:
    /*!*********************************************************!*\
      !*** ./src/app/core/services/spotify/follow.service.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FollowService": function FollowService() {
          return (
            /* binding */
            _FollowService
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

      var _FollowService = /*#__PURE__*/function () {
        function FollowService(authorizeService) {
          _classCallCheck(this, FollowService);

          this.authorizeService = authorizeService;
          this.listFollowers = [];
          this.followServiceSubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        }

        _createClass(FollowService, [{
          key: "setFollow",
          value: function setFollow(id) {
            var _this5 = this;

            return this.authorizeService.spotifyApi.addToMySavedTracks([id]).then(function (data) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                var indexItem, item;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        indexItem = this.listFollowers.findIndex(function (p) {
                          return p.track.id === id;
                        });

                        if (!(indexItem === -1)) {
                          _context10.next = 7;
                          break;
                        }

                        _context10.next = 4;
                        return this.getTrack(id);

                      case 4:
                        item = _context10.sent;
                        this.listFollowers.unshift({
                          added_at: '',
                          track: item
                        });
                        this.followServiceSubscribe.next(true);

                      case 7:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this);
              }));
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "unFollow",
          value: function unFollow(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      return _context11.abrupt("return", this.authorizeService.spotifyApi.removeFromMySavedTracks([id]).then(function (data) {
                        var indexItem = _this6.listFollowers.findIndex(function (p) {
                          return p.track.id === id;
                        });

                        if (indexItem !== -1) {
                          _this6.listFollowers.splice(indexItem, 1);

                          _this6.followServiceSubscribe.next(true);
                        } //this.list = data.items;

                      }, function (err) {
                        console.error(err);
                      }));

                    case 1:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "get",
          value: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.authorizeService.spotifyApi.getMySavedTracks({
                        offset: 0,
                        limit: 50
                      }).then(function (res) {
                        return res.items;
                      })["catch"](function (err) {
                        return [];
                      });

                    case 2:
                      this.listFollowers = _context12.sent;

                    case 3:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "getTrack",
          value: function getTrack(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.authorizeService.spotifyApi.getTrack(id).then(function (res) {
                        return res;
                      });

                    case 2:
                      return _context13.abrupt("return", _context13.sent);

                    case 3:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }]);

        return FollowService;
      }();

      _FollowService.ctorParameters = function () {
        return [{
          type: _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizeService
        }];
      };

      _FollowService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _FollowService);
      /***/
    },

    /***/
    22323:
    /*!**************************************************!*\
      !*** ./src/app/core/services/storage.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StorageService": function StorageService() {
          return (
            /* binding */
            _StorageService
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/storage */
      61628);

      var _StorageService = /*#__PURE__*/function () {
        function StorageService(storage) {
          _classCallCheck(this, StorageService);

          this.storage = storage;
          this.storage.create();
        }

        _createClass(StorageService, [{
          key: "setItem",
          value: function setItem(key, data) {
            this.storage.set(key, data);
          }
        }, {
          key: "getItem",
          value: function getItem(key) {
            return this.storage.get(key);
          }
        }, {
          key: "removeItem",
          value: function removeItem(key) {
            this.storage.remove(key);
          }
        }]);

        return StorageService;
      }();

      _StorageService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage
        }];
      };

      _StorageService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _StorageService);
      /***/
    },

    /***/
    46543:
    /*!********************************************!*\
      !*** ./src/app/core/utils/loading.util.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoadingUtil": function LoadingUtil() {
          return (
            /* binding */
            _LoadingUtil
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      68384);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var SplashScreen = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Plugins.SplashScreen;

      var _LoadingUtil = /*#__PURE__*/function () {
        function LoadingUtil(loadingCtrl) {
          _classCallCheck(this, LoadingUtil);

          this.loadingCtrl = loadingCtrl;
        }

        _createClass(LoadingUtil, [{
          key: "init",
          value: function init() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.loadingCtrl.create();

                    case 2:
                      this.loading = _context14.sent;
                      _context14.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.loading.dismiss();
          }
        }]);

        return LoadingUtil;
      }();

      _LoadingUtil.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController
        }];
      };

      _LoadingUtil = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _LoadingUtil);
      /***/
    },

    /***/
    29726:
    /*!******************************************!*\
      !*** ./src/app/core/utils/toast.util.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ToastUtil": function ToastUtil() {
          return (
            /* binding */
            _ToastUtil
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      68384);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      3;
      var SplashScreen = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Plugins.SplashScreen;

      var _ToastUtil = /*#__PURE__*/function () {
        function ToastUtil(toastCrtl) {
          _classCallCheck(this, ToastUtil);

          this.toastCrtl = toastCrtl;
        }

        _createClass(ToastUtil, [{
          key: "show",
          value: function show(text) {
            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'primary';
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var toast;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.toastCrtl.create({
                        message: text,
                        color: color,
                        duration: 2000
                      });

                    case 2:
                      toast = _context15.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }]);

        return ToastUtil;
      }();

      _ToastUtil.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController
        }];
      };

      _ToastUtil = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _ToastUtil);
      /***/
    },

    /***/
    98618:
    /*!**********************************************!*\
      !*** ./src/app/shared/global.environment.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GlobalEnvironment": function GlobalEnvironment() {
          return (
            /* binding */
            _GlobalEnvironment
          );
        }
        /* harmony export */

      });

      var _GlobalEnvironment = {
        auth: null,
        userSpotify: null
      };
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        scheme: 'io.ionic.starter',
        apis: {
          spotify: {
            clientId: '005985beb5d847c7808a15f7e2c4302c',
            clientSecret: 'b398450cb66b4ef0b1dd0ce0e7f928aa',
            urlResponse: {
              tokenExchangeUrl: 'https://spotify-dashboard1.herokuapp.com/exchange',
              tokenRefreshUrl: 'https://spotify-dashboard1.herokuapp.com/refresh'
            }
          }
        },
        database: {
          name: 'SPOTIFYDATABASE'
        },
        definitions: {
          userSpotify: 'user_spotify',
          authToken: 'auth',
          loggedIn: 'logged_in',
          token: 'token',
          accessToken: 'access_token',
          expireIn: 'expire_in',
          refreshToken: 'refresh_token'
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [16034, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [76272, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    43069:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    49492:
    /*!***********************************************************************************!*\
      !*** ./src/app/components/molecules/Validators/email-input/email-input.atom.scss ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".message-validator {\n  font-size: 0.85rem;\n  color: var(--ion-color-danger);\n  display: block;\n  margin: 5px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLWlucHV0LmF0b20uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImVtYWlsLWlucHV0LmF0b20uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLXZhbGlkYXRvciB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDVweCAwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    96769:
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/molecules/Validators/password-input/password-input.atom.scss ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".message-validator {\n  font-size: 0.85rem;\n  color: var(--ion-color-danger);\n  display: block;\n  margin: 5px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLWlucHV0LmF0b20uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6InBhc3N3b3JkLWlucHV0LmF0b20uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLXZhbGlkYXRvciB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDVweCAwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    34258:
    /*!**********************************************************************************!*\
      !*** ./src/app/components/molecules/item-play-list/item-play-list.molecule.scss ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --ion-item-background: transparent;\n  font-family: \"Spotify\";\n}\nion-item p {\n  color: #949494;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tcGxheS1saXN0Lm1vbGVjdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQ0FBQTtFQUNBLHNCQUFBO0FBQUo7QUFDSTtFQUNJLGNBQUE7QUFDUiIsImZpbGUiOiJpdGVtLXBsYXktbGlzdC5tb2xlY3VsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAgLy8gY29sb3I6ICNmZmZmZmY7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmb250LWZhbWlseTogJ1Nwb3RpZnknO1xuICAgIHAge1xuICAgICAgICBjb2xvcjogIzk0OTQ5NDtcbiAgICB9XG59XG5pb24tbGlzdCB7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59Il19 */";
      /***/
    },

    /***/
    34854:
    /*!******************************************************************************************!*\
      !*** ./src/app/components/molecules/item-saved-track/item-save-track-list.molecule.scss ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --ion-item-background: transparent;\n  font-family: \"Spotify\";\n}\nion-item p {\n  color: #949494;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tc2F2ZS10cmFjay1saXN0Lm1vbGVjdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQ0FBQTtFQUNBLHNCQUFBO0FBQUo7QUFDSTtFQUNJLGNBQUE7QUFDUiIsImZpbGUiOiJpdGVtLXNhdmUtdHJhY2stbGlzdC5tb2xlY3VsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAgLy8gY29sb3I6ICNmZmZmZmY7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmb250LWZhbWlseTogJ1Nwb3RpZnknO1xuICAgIHAge1xuICAgICAgICBjb2xvcjogIzk0OTQ5NDtcbiAgICB9XG59XG5pb24tbGlzdCB7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59Il19 */";
      /***/
    },

    /***/
    72689:
    /*!******************************************************************!*\
      !*** ./src/app/components/organisms/header/header.organism.scss ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIub3JnYW5pc20uc2NzcyJ9 */";
      /***/
    },

    /***/
    97856:
    /*!**************************************************************!*\
      !*** ./src/app/components/organisms/menu/menu.organism.scss ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-background {\n  height: 100px;\n  width: 100%;\n}\n\n.header-content {\n  position: absolute;\n  align-items: center;\n  display: flex;\n  left: 20px;\n  top: 20px;\n}\n\n.header-content .img-menu {\n  width: 75px;\n  border-radius: 50%;\n}\n\nion-menu ion-content ion-label h2 {\n  font-weight: bold;\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUub3JnYW5pc20uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBQ0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFDUjs7QUFNWTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFIaEIiLCJmaWxlIjoibWVudS5vcmdhbmlzbS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGVmdDogMjBweDtcbiAgICB0b3A6IDIwcHg7XG5cbiAgICAuaW1nLW1lbnUge1xuICAgICAgICB3aWR0aDogNzVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbn1cblxuaW9uLW1lbnUge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    91106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    98932:
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/molecules/Validators/email-input/email-input.atom.html ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item [formGroup]=\"parentForm\">\n    <ion-label position=\"floating\">Email</ion-label>\n    <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n</ion-item>\n<span class=\"message-validator\" *ngIf=\"email.touched && email.invalid && email.errors?.required\">Required</span>\n<span class=\"message-validator\" *ngIf=\"email.touched && email.invalid && email.errors?.email\">Correo Invalido</span>";
      /***/
    },

    /***/
    23721:
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/molecules/Validators/password-input/password-input.atom.html ***!
      \*******************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item [formGroup]=\"parentForm\">\n    <ion-label position=\"floating\">Password</ion-label>\n    <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n</ion-item>\n<span class=\"message-validator\" *ngIf=\"password.touched && password.invalid && password.errors?.required\">Required</span>\n";
      /***/
    },

    /***/
    13812:
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/molecules/item-play-list/item-play-list.molecule.html ***!
      \************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list>\n  <ion-item *ngFor=\"let item of items\" lines=\"none\">\n    <ion-thumbnail item-start>\n      <img [src]=\"item.album.images[0].url\">\n    </ion-thumbnail>\n    <ion-label class=\"ion-padding\">{{item.name}}\n      <p>Popularity: {{item.popularity}}</p>\n    </ion-label>\n    <ion-icon (click)=\"addFavorite(item)\" [color]=\"isFavorite(item) ? 'success' : ''\" slot=\"end\" size=\"large\" [name]=\"isFavorite(item) ? 'heart' : 'heart-outline'\">\n    </ion-icon>\n  </ion-item>\n</ion-list>";
      /***/
    },

    /***/
    26435:
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/molecules/item-saved-track/item-save-track-list.molecule.html ***!
      \********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list>\n  <ion-item *ngFor=\"let item of items\" lines=\"none\">\n    <ion-thumbnail item-start>\n      <img [src]=\"item.track.album.images[0].url\">\n    </ion-thumbnail>\n    <ion-label class=\"ion-padding\">{{item.track.name}}\n      <p>Total Songs: {{item.track.track_number}}\n    </ion-label>\n    <ion-icon (click)=\"this.removeTrack.emit(item)\" class=\"ripple-parent\" slot=\"end\" size=\"large\" name=\"heart\" color=\"success\">\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-icon>\n  </ion-item>\n</ion-list>";
      /***/
    },

    /***/
    95231:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/organisms/header/header.organism.html ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button *ngIf=\"isMenu\" autoHide=\"false\"></ion-menu-button>\n      <ion-back-button *ngIf=\"isBack\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>";
      /***/
    },

    /***/
    3162:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/organisms/menu/menu.organism.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\n  <ion-content>\n    <div class=\"header-background\"></div>\n    <div class=\"header-content\">\n      <img class=\"img-menu\" src=\"{{user?.images[0]?.url}}\">\n    </div>\n    <ion-label>\n      <h2>{{user?.display_name}}</h2>\n    </ion-label>\n    <ion-button (click)=\"logout()\" class=\"ion-padding\" expand=\"block\">\n      <ion-icon slot=\"start\" name=\"star\"></ion-icon>\n      Logout\n    </ion-button>\n  </ion-content>\n</ion-menu>";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map