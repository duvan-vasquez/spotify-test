(self["webpackChunkspotify_test"] = self["webpackChunkspotify_test"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/auth.guard */ 27574);




const routes = [
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/main/main.module */ 79582)).then(m => m.MainPageModule),
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/services/common.service */ 50690);








let AppComponent = class AppComponent {
    constructor(platform, statusBar, commonService, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.commonService = commonService;
        this.splashScreen = splashScreen;
        this.initializeApp();
    }
    initializeApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.platform.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                yield this.commonService.loadAuth();
                this.statusBar.styleDefault();
                this.splashScreen.hide();
                this.changeDarkMode();
            }));
        });
    }
    changeDarkMode() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersDark.matches) {
            document.body.classList.toggle('dark');
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar },
    { type: _core_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 61628);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/storage-angular */ 54925);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/component.module */ 78443);
/* harmony import */ var _core_services_inteceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/inteceptor.service */ 91639);
/* harmony import */ var _ionic_native_spotify_auth_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/spotify-auth/ngx */ 37173);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);

















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _components_component_module__WEBPACK_IMPORTED_MODULE_4__.ComponentModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_15__.IonicStorageModule.forRoot({
                name: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.database.name,
                driverOrder: [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Drivers.IndexedDB, _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Drivers.LocalStorage]
            })
        ],
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _components_component_module__WEBPACK_IMPORTED_MODULE_4__.ComponentModule
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__.StatusBar,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__.SplashScreen,
            _ionic_native_spotify_auth_ngx__WEBPACK_IMPORTED_MODULE_6__.SpotifyAuth,
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS, useClass: _core_services_inteceptor_service__WEBPACK_IMPORTED_MODULE_5__.InteceptorService, multi: true },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 78443:
/*!************************************************!*\
  !*** ./src/app/components/component.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentModule": function() { return /* binding */ ComponentModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _molecules_Validators_email_input_email_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./molecules/Validators/email-input/email-input.component */ 16761);
/* harmony import */ var _molecules_Validators_password_input_password_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./molecules/Validators/password-input/password-input.component */ 20939);
/* harmony import */ var _organisms_header_header_organism_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organisms/header/header.organism.component */ 82770);
/* harmony import */ var _organisms_menu_menu_organism_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organisms/menu/menu.organism.component */ 52901);
/* harmony import */ var _molecules_item_play_list_item_play_list_molecule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./molecules/item-play-list/item-play-list.molecule.component */ 17623);
/* harmony import */ var _molecules_item_saved_track_item_save_track_list_molecule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./molecules/item-saved-track/item-save-track-list.molecule.component */ 4359);











let ComponentModule = class ComponentModule {
};
ComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule
        ],
        declarations: [_organisms_menu_menu_organism_component__WEBPACK_IMPORTED_MODULE_3__.MenuOrganism, _molecules_item_saved_track_item_save_track_list_molecule_component__WEBPACK_IMPORTED_MODULE_5__.ItemSaveTrackListMolecule, _molecules_Validators_email_input_email_input_component__WEBPACK_IMPORTED_MODULE_0__.EmailInputAtom, _molecules_Validators_password_input_password_input_component__WEBPACK_IMPORTED_MODULE_1__.PasswordInputAtom, _organisms_header_header_organism_component__WEBPACK_IMPORTED_MODULE_2__.HeaderOrganism, _molecules_item_play_list_item_play_list_molecule_component__WEBPACK_IMPORTED_MODULE_4__.ItemPlayListMolecule],
        entryComponents: [_organisms_menu_menu_organism_component__WEBPACK_IMPORTED_MODULE_3__.MenuOrganism, _molecules_item_saved_track_item_save_track_list_molecule_component__WEBPACK_IMPORTED_MODULE_5__.ItemSaveTrackListMolecule, _molecules_Validators_email_input_email_input_component__WEBPACK_IMPORTED_MODULE_0__.EmailInputAtom, _molecules_Validators_password_input_password_input_component__WEBPACK_IMPORTED_MODULE_1__.PasswordInputAtom, _organisms_header_header_organism_component__WEBPACK_IMPORTED_MODULE_2__.HeaderOrganism, _molecules_item_play_list_item_play_list_molecule_component__WEBPACK_IMPORTED_MODULE_4__.ItemPlayListMolecule],
        exports: [_organisms_menu_menu_organism_component__WEBPACK_IMPORTED_MODULE_3__.MenuOrganism, _molecules_item_saved_track_item_save_track_list_molecule_component__WEBPACK_IMPORTED_MODULE_5__.ItemSaveTrackListMolecule, _molecules_Validators_email_input_email_input_component__WEBPACK_IMPORTED_MODULE_0__.EmailInputAtom, _molecules_Validators_password_input_password_input_component__WEBPACK_IMPORTED_MODULE_1__.PasswordInputAtom, _organisms_header_header_organism_component__WEBPACK_IMPORTED_MODULE_2__.HeaderOrganism, _molecules_item_play_list_item_play_list_molecule_component__WEBPACK_IMPORTED_MODULE_4__.ItemPlayListMolecule]
    })
], ComponentModule);



/***/ }),

/***/ 16761:
/*!**************************************************************************************!*\
  !*** ./src/app/components/molecules/Validators/email-input/email-input.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailInputAtom": function() { return /* binding */ EmailInputAtom; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_email_input_atom_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./email-input.atom.html */ 98932);
/* harmony import */ var _email_input_atom_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-input.atom.scss */ 49492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let EmailInputAtom = class EmailInputAtom {
    /** From validator */
    get email() { return this.parentForm.controls.email; }
};
EmailInputAtom.propDecorators = {
    parentForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
EmailInputAtom = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'email-input',
        template: _raw_loader_email_input_atom_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [],
        styles: [_email_input_atom_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EmailInputAtom);



/***/ }),

/***/ 20939:
/*!********************************************************************************************!*\
  !*** ./src/app/components/molecules/Validators/password-input/password-input.component.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordInputAtom": function() { return /* binding */ PasswordInputAtom; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_password_input_atom_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./password-input.atom.html */ 23721);
/* harmony import */ var _password_input_atom_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-input.atom.scss */ 96769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let PasswordInputAtom = class PasswordInputAtom {
    /** From validator */
    get password() { return this.parentForm.controls.password; }
};
PasswordInputAtom.propDecorators = {
    parentForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
PasswordInputAtom = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'password-input',
        template: _raw_loader_password_input_atom_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [],
        styles: [_password_input_atom_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PasswordInputAtom);



/***/ }),

/***/ 17623:
/*!******************************************************************************************!*\
  !*** ./src/app/components/molecules/item-play-list/item-play-list.molecule.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemPlayListMolecule": function() { return /* binding */ ItemPlayListMolecule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_play_list_molecule_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-play-list.molecule.html */ 13812);
/* harmony import */ var _item_play_list_molecule_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-play-list.molecule.scss */ 34258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_core_services_spotify_follow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/spotify/follow.service */ 72570);





let ItemPlayListMolecule = class ItemPlayListMolecule {
    constructor(followService) {
        this.followService = followService;
        this.items = [];
    }
    ngOnInit() { }
    isFavorite(item) {
        return this.followService.listFollowers.findIndex(p => p.track.id === item.id) !== -1;
    }
    addFavorite(item) {
        this.followService.setFollow(item.id);
    }
};
ItemPlayListMolecule.ctorParameters = () => [
    { type: src_app_core_services_spotify_follow_service__WEBPACK_IMPORTED_MODULE_2__.FollowService }
];
ItemPlayListMolecule.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ItemPlayListMolecule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-item-play-list',
        template: _raw_loader_item_play_list_molecule_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [],
        styles: [_item_play_list_molecule_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemPlayListMolecule);



/***/ }),

/***/ 4359:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/molecules/item-saved-track/item-save-track-list.molecule.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemSaveTrackListMolecule": function() { return /* binding */ ItemSaveTrackListMolecule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_save_track_list_molecule_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-save-track-list.molecule.html */ 26435);
/* harmony import */ var _item_save_track_list_molecule_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-save-track-list.molecule.scss */ 34854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_core_services_spotify_follow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/spotify/follow.service */ 72570);






let ItemSaveTrackListMolecule = class ItemSaveTrackListMolecule {
    constructor(followService, loadingCtrl) {
        this.followService = followService;
        this.loadingCtrl = loadingCtrl;
        this.items = [];
        this.removeTrack = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() { }
};
ItemSaveTrackListMolecule.ctorParameters = () => [
    { type: src_app_core_services_spotify_follow_service__WEBPACK_IMPORTED_MODULE_2__.FollowService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
ItemSaveTrackListMolecule.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    removeTrack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
ItemSaveTrackListMolecule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-item-save-track-list',
        template: _raw_loader_item_save_track_list_molecule_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [],
        styles: [_item_save_track_list_molecule_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemSaveTrackListMolecule);



/***/ }),

/***/ 82770:
/*!**************************************************************************!*\
  !*** ./src/app/components/organisms/header/header.organism.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderOrganism": function() { return /* binding */ HeaderOrganism; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_header_organism_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header.organism.html */ 95231);
/* harmony import */ var _header_organism_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.organism.scss */ 72689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let HeaderOrganism = class HeaderOrganism {
    constructor() {
        this.isMenu = false;
        this.isBack = false;
        this.title = '';
    }
    ngOnInit() {
    }
};
HeaderOrganism.propDecorators = {
    isMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
HeaderOrganism = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_organism_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [],
        styles: [_header_organism_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderOrganism);



/***/ }),

/***/ 52901:
/*!**********************************************************************!*\
  !*** ./src/app/components/organisms/menu/menu.organism.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuOrganism": function() { return /* binding */ MenuOrganism; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_menu_organism_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./menu.organism.html */ 3162);
/* harmony import */ var _menu_organism_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.organism.scss */ 97856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_spotify_authorize_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/spotify/authorize.service */ 67880);
/* harmony import */ var src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/global.environment */ 98618);








let MenuOrganism = class MenuOrganism {
    constructor(commonService, menu, authorizeService) {
        this.commonService = commonService;
        this.menu = menu;
        this.authorizeService = authorizeService;
    }
    ngOnInit() {
        this.load();
        this.authorizeService.userServiceSubscribe.subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (res) {
                console.log(this.user);
                this.user = src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_4__.GlobalEnvironment.userSpotify;
            }
        }));
    }
    load() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.commonService.loadUser();
            this.user = src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_4__.GlobalEnvironment.userSpotify;
            console.log(this.user);
        });
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
    logout() {
        console.log('logout');
        this.authorizeService.forget();
        this.commonService.logout();
    }
};
MenuOrganism.ctorParameters = () => [
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: src_app_core_services_spotify_authorize_service__WEBPACK_IMPORTED_MODULE_3__.AuthorizeService }
];
MenuOrganism = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-menu',
        template: _raw_loader_menu_organism_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [],
        styles: [_menu_organism_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MenuOrganism);



/***/ }),

/***/ 27574:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);





let AuthGuard = class AuthGuard {
    constructor(router, commonService, navCtrl) {
        this.router = router;
        this.commonService = commonService;
        this.navCtrl = navCtrl;
    }
    canActivate(route, state) {
        /** No-login. */
        return new Promise((resolve) => {
            this.commonService.isAuth()
                .then(res => res === null || res === void 0 ? void 0 : res.accessToken)
                .then((token) => {
                if (token) { //Valid token
                    resolve(true);
                }
                else {
                    this.navCtrl.navigateForward('login');
                    resolve(false);
                }
            })
                .catch(err => {
                resolve(false);
            });
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 50690:
/*!*************************************************!*\
  !*** ./src/app/core/services/common.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": function() { return /* binding */ CommonService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 22323);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global.environment */ 98618);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);







let CommonService = class CommonService {
    constructor(lStorage, navCtrl, plCtrl, router) {
        this.lStorage = lStorage;
        this.navCtrl = navCtrl;
        this.plCtrl = plCtrl;
        this.router = router;
    }
    loadAuth() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_2__.GlobalEnvironment.auth) {
                yield this.lStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.definitions.authToken).then(res => {
                    src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_2__.GlobalEnvironment.auth = res;
                });
            }
        });
    }
    loadUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_2__.GlobalEnvironment.userSpotify) {
                yield this.lStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.definitions.userSpotify).then(res => {
                    src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_2__.GlobalEnvironment.userSpotify = res;
                });
            }
        });
    }
    setUser(user) {
        this.lStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.definitions.userSpotify, user);
    }
    setAuth(auth) {
        this.lStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.definitions.authToken, auth);
    }
    logout() {
        this.lStorage.removeItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.definitions.authToken);
        this.lStorage.removeItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.definitions.userSpotify);
        this.navCtrl.navigateForward(['login']);
    }
    getToken() {
        var _a, _b;
        return (_b = (_a = src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_2__.GlobalEnvironment.auth) === null || _a === void 0 ? void 0 : _a.accessToken) !== null && _b !== void 0 ? _b : '';
    }
    isAuth() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('is auth', src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_2__.GlobalEnvironment.auth);
            return yield this.lStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.definitions.authToken);
        });
    }
};
CommonService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
CommonService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ 91639:
/*!*****************************************************!*\
  !*** ./src/app/core/services/inteceptor.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteceptorService": function() { return /* binding */ InteceptorService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 5304);




let InteceptorService = class InteceptorService {
    constructor() { }
    intercept(req, next) {
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
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.error));
    }
    error(err) {
        console.log(err.message);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(err);
    }
};
InteceptorService.ctorParameters = () => [];
InteceptorService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], InteceptorService);



/***/ }),

/***/ 67880:
/*!************************************************************!*\
  !*** ./src/app/core/services/spotify/authorize.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizeService": function() { return /* binding */ AuthorizeService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! spotify-web-api-js */ 33804);
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(spotify_web_api_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/global.environment */ 98618);
/* harmony import */ var _utils_loading_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/loading.util */ 46543);
/* harmony import */ var _utils_toast_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/toast.util */ 29726);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);











let AuthorizeService = class AuthorizeService {
    constructor(commonService, navCtrl, loadingUtil, toastUtil, router) {
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
    forget() {
        cordova.plugins.spotifyAuth.forget();
    }
    /**
     * Connect with api of spotify.
     */
    auth(refresh) {
        const config = {
            clientId: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apis.spotify.clientId,
            redirectUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.scheme + '://callback',
            scopes: ['streaming', 'user-library-read', 'playlist-modify-public', 'playlist-modify-public', 'playlist-read-private', 'user-read-email', 'user-follow-modify', 'user-follow-read', 'user-read-private', 'user-library-modify'],
            tokenExchangeUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apis.spotify.urlResponse.tokenExchangeUrl,
            tokenRefreshUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apis.spotify.urlResponse.tokenRefreshUrl
        };
        if (refresh) {
            cordova.plugins.spotifyAuth.forget();
        }
        cordova.plugins.spotifyAuth.authorize(config)
            .then((auth) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadingUtil.init();
            console.log(auth);
            if (auth.accessToken) {
                auth.loggedIn = true;
                this.spotifyApi.setAccessToken(auth.accessToken);
                yield this.getUser();
                this.commonService.setAuth(auth);
                yield this.loadingUtil.dismiss();
                this.navCtrl.navigateForward(['home']);
            }
            else {
                yield this.loadingUtil.dismiss();
                cordova.plugins.spotifyAuth.forget();
                this.toastUtil.show('Retry login.', 'danger');
            }
        }))
            .catch(err => {
            cordova.plugins.spotifyAuth.forget();
        });
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_3__.GlobalEnvironment.userSpotify = yield this.spotifyApi.getMe()
                .then((data) => {
                return data;
            }, err => {
                console.error(err);
            });
            this.commonService.setUser(src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_3__.GlobalEnvironment.userSpotify);
            this.userServiceSubscribe.next(true);
        });
    }
};
AuthorizeService.ctorParameters = () => [
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _utils_loading_util__WEBPACK_IMPORTED_MODULE_4__.LoadingUtil },
    { type: _utils_toast_util__WEBPACK_IMPORTED_MODULE_5__.ToastUtil },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
AuthorizeService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
        providedIn: 'root'
    })
], AuthorizeService);



/***/ }),

/***/ 72570:
/*!*********************************************************!*\
  !*** ./src/app/core/services/spotify/follow.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowService": function() { return /* binding */ FollowService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorize.service */ 67880);




let FollowService = class FollowService {
    constructor(authorizeService) {
        this.authorizeService = authorizeService;
        this.listFollowers = [];
        this.followServiceSubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    setFollow(id) {
        return this.authorizeService.spotifyApi.addToMySavedTracks([id])
            .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const indexItem = this.listFollowers.findIndex(p => p.track.id === id);
            if (indexItem === -1) {
                const item = yield this.getTrack(id);
                this.listFollowers.unshift({ added_at: '', track: item });
                this.followServiceSubscribe.next(true);
            }
        }), err => {
            console.error(err);
        });
    }
    unFollow(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return this.authorizeService.spotifyApi.removeFromMySavedTracks([id])
                .then(data => {
                const indexItem = this.listFollowers.findIndex(p => p.track.id === id);
                if (indexItem !== -1) {
                    this.listFollowers.splice(indexItem, 1);
                    this.followServiceSubscribe.next(true);
                }
                //this.list = data.items;
            }, err => {
                console.error(err);
            });
        });
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.listFollowers = yield this.authorizeService.spotifyApi.getMySavedTracks({
                offset: 0,
                limit: 50
            })
                .then((res) => {
                return res.items;
            })
                .catch(err => {
                return [];
            });
        });
    }
    getTrack(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.authorizeService.spotifyApi.getTrack(id)
                .then((res) => {
                return res;
            });
        });
    }
};
FollowService.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizeService }
];
FollowService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], FollowService);



/***/ }),

/***/ 22323:
/*!**************************************************!*\
  !*** ./src/app/core/services/storage.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": function() { return /* binding */ StorageService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 61628);



let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
        this.storage.create();
    }
    setItem(key, data) {
        this.storage.set(key, data);
    }
    getItem(key) {
        return this.storage.get(key);
    }
    removeItem(key) {
        this.storage.remove(key);
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage }
];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 46543:
/*!********************************************!*\
  !*** ./src/app/core/utils/loading.util.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingUtil": function() { return /* binding */ LoadingUtil; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);




const { SplashScreen } = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Plugins;
let LoadingUtil = class LoadingUtil {
    constructor(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create();
            yield this.loading.present();
        });
    }
    dismiss() {
        this.loading.dismiss();
    }
};
LoadingUtil.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController }
];
LoadingUtil = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LoadingUtil);



/***/ }),

/***/ 29726:
/*!******************************************!*\
  !*** ./src/app/core/utils/toast.util.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastUtil": function() { return /* binding */ ToastUtil; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);




3;
const { SplashScreen } = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Plugins;
let ToastUtil = class ToastUtil {
    constructor(toastCrtl) {
        this.toastCrtl = toastCrtl;
    }
    show(text, color = 'primary') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCrtl.create({
                message: text,
                color: color,
                duration: 2000
            });
            toast.present();
        });
    }
};
ToastUtil.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController }
];
ToastUtil = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ToastUtil);



/***/ }),

/***/ 98618:
/*!**********************************************!*\
  !*** ./src/app/shared/global.environment.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalEnvironment": function() { return /* binding */ GlobalEnvironment; }
/* harmony export */ });
let GlobalEnvironment = {
    auth: null,
    userSpotify: null
};


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 49492:
/*!***********************************************************************************!*\
  !*** ./src/app/components/molecules/Validators/email-input/email-input.atom.scss ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".message-validator {\n  font-size: 0.85rem;\n  color: var(--ion-color-danger);\n  display: block;\n  margin: 5px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLWlucHV0LmF0b20uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImVtYWlsLWlucHV0LmF0b20uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLXZhbGlkYXRvciB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDVweCAwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ 96769:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/molecules/Validators/password-input/password-input.atom.scss ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".message-validator {\n  font-size: 0.85rem;\n  color: var(--ion-color-danger);\n  display: block;\n  margin: 5px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLWlucHV0LmF0b20uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6InBhc3N3b3JkLWlucHV0LmF0b20uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLXZhbGlkYXRvciB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDVweCAwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ 34258:
/*!**********************************************************************************!*\
  !*** ./src/app/components/molecules/item-play-list/item-play-list.molecule.scss ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --ion-item-background: transparent;\n  font-family: \"Spotify\";\n}\nion-item p {\n  color: #949494;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tcGxheS1saXN0Lm1vbGVjdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQ0FBQTtFQUNBLHNCQUFBO0FBQUo7QUFDSTtFQUNJLGNBQUE7QUFDUiIsImZpbGUiOiJpdGVtLXBsYXktbGlzdC5tb2xlY3VsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAgLy8gY29sb3I6ICNmZmZmZmY7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmb250LWZhbWlseTogJ1Nwb3RpZnknO1xuICAgIHAge1xuICAgICAgICBjb2xvcjogIzk0OTQ5NDtcbiAgICB9XG59XG5pb24tbGlzdCB7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59Il19 */");

/***/ }),

/***/ 34854:
/*!******************************************************************************************!*\
  !*** ./src/app/components/molecules/item-saved-track/item-save-track-list.molecule.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --ion-item-background: transparent;\n  font-family: \"Spotify\";\n}\nion-item p {\n  color: #949494;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tc2F2ZS10cmFjay1saXN0Lm1vbGVjdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQ0FBQTtFQUNBLHNCQUFBO0FBQUo7QUFDSTtFQUNJLGNBQUE7QUFDUiIsImZpbGUiOiJpdGVtLXNhdmUtdHJhY2stbGlzdC5tb2xlY3VsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAgLy8gY29sb3I6ICNmZmZmZmY7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmb250LWZhbWlseTogJ1Nwb3RpZnknO1xuICAgIHAge1xuICAgICAgICBjb2xvcjogIzk0OTQ5NDtcbiAgICB9XG59XG5pb24tbGlzdCB7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59Il19 */");

/***/ }),

/***/ 72689:
/*!******************************************************************!*\
  !*** ./src/app/components/organisms/header/header.organism.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIub3JnYW5pc20uc2NzcyJ9 */");

/***/ }),

/***/ 97856:
/*!**************************************************************!*\
  !*** ./src/app/components/organisms/menu/menu.organism.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-background {\n  height: 100px;\n  width: 100%;\n}\n\n.header-content {\n  position: absolute;\n  align-items: center;\n  display: flex;\n  left: 20px;\n  top: 20px;\n}\n\n.header-content .img-menu {\n  width: 75px;\n  border-radius: 50%;\n}\n\nion-menu ion-content ion-label h2 {\n  font-weight: bold;\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUub3JnYW5pc20uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBQ0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFDUjs7QUFNWTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFIaEIiLCJmaWxlIjoibWVudS5vcmdhbmlzbS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGVmdDogMjBweDtcbiAgICB0b3A6IDIwcHg7XG5cbiAgICAuaW1nLW1lbnUge1xuICAgICAgICB3aWR0aDogNzVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbn1cblxuaW9uLW1lbnUge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 98932:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/molecules/Validators/email-input/email-input.atom.html ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item [formGroup]=\"parentForm\">\n    <ion-label position=\"floating\">Email</ion-label>\n    <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n</ion-item>\n<span class=\"message-validator\" *ngIf=\"email.touched && email.invalid && email.errors?.required\">Required</span>\n<span class=\"message-validator\" *ngIf=\"email.touched && email.invalid && email.errors?.email\">Correo Invalido</span>");

/***/ }),

/***/ 23721:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/molecules/Validators/password-input/password-input.atom.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item [formGroup]=\"parentForm\">\n    <ion-label position=\"floating\">Password</ion-label>\n    <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n</ion-item>\n<span class=\"message-validator\" *ngIf=\"password.touched && password.invalid && password.errors?.required\">Required</span>\n");

/***/ }),

/***/ 13812:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/molecules/item-play-list/item-play-list.molecule.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n  <ion-item *ngFor=\"let item of items\" lines=\"none\">\n    <ion-thumbnail item-start>\n      <img [src]=\"item.album.images[0].url\">\n    </ion-thumbnail>\n    <ion-label class=\"ion-padding\">{{item.name}}\n      <p>Popularity: {{item.popularity}}</p>\n    </ion-label>\n    <ion-icon (click)=\"addFavorite(item)\" [color]=\"isFavorite(item) ? 'success' : ''\" slot=\"end\" size=\"large\" [name]=\"isFavorite(item) ? 'heart' : 'heart-outline'\">\n    </ion-icon>\n  </ion-item>\n</ion-list>");

/***/ }),

/***/ 26435:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/molecules/item-saved-track/item-save-track-list.molecule.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n  <ion-item *ngFor=\"let item of items\" lines=\"none\">\n    <ion-thumbnail item-start>\n      <img [src]=\"item.track.album.images[0].url\">\n    </ion-thumbnail>\n    <ion-label class=\"ion-padding\">{{item.track.name}}\n      <p>Total Songs: {{item.track.track_number}}\n    </ion-label>\n    <ion-icon (click)=\"this.removeTrack.emit(item)\" class=\"ripple-parent\" slot=\"end\" size=\"large\" name=\"heart\" color=\"success\">\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-icon>\n  </ion-item>\n</ion-list>");

/***/ }),

/***/ 95231:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/organisms/header/header.organism.html ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button *ngIf=\"isMenu\" autoHide=\"false\"></ion-menu-button>\n      <ion-back-button *ngIf=\"isBack\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>");

/***/ }),

/***/ 3162:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/organisms/menu/menu.organism.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\n  <ion-content>\n    <div class=\"header-background\"></div>\n    <div class=\"header-content\">\n      <img class=\"img-menu\" src=\"{{user?.images[0]?.url}}\">\n    </div>\n    <ion-label>\n      <h2>{{user?.display_name}}</h2>\n    </ion-label>\n    <ion-button (click)=\"logout()\" class=\"ion-padding\" expand=\"block\">\n      <ion-icon slot=\"start\" name=\"star\"></ion-icon>\n      Logout\n    </ion-button>\n  </ion-content>\n</ion-menu>");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map