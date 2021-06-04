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
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_spotify-auth_service_ts"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_spotify-auth_service_ts"), __webpack_require__.e("src_app_pages_main_main_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/main/main.module */ 79582)).then(m => m.MainPageModule),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
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
        this.commonService.loadAuth();
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.changeDarkMode();
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar },
    { type: _core_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
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
/* harmony import */ var _molecules_list_list_molecule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./molecules/list/list.molecule.component */ 50905);











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
        declarations: [_molecules_Validators_email_input_email_input_component__WEBPACK_IMPORTED_MODULE_0__.EmailInputAtom, _molecules_Validators_password_input_password_input_component__WEBPACK_IMPORTED_MODULE_1__.PasswordInputAtom, _organisms_header_header_organism_component__WEBPACK_IMPORTED_MODULE_2__.HeaderOrganism, _organisms_menu_menu_organism_component__WEBPACK_IMPORTED_MODULE_3__.MenuOrganism, _molecules_list_list_molecule_component__WEBPACK_IMPORTED_MODULE_5__.ListMolecule, _molecules_item_play_list_item_play_list_molecule_component__WEBPACK_IMPORTED_MODULE_4__.ItemPlayListMolecule],
        entryComponents: [_molecules_Validators_email_input_email_input_component__WEBPACK_IMPORTED_MODULE_0__.EmailInputAtom, _molecules_Validators_password_input_password_input_component__WEBPACK_IMPORTED_MODULE_1__.PasswordInputAtom, _organisms_header_header_organism_component__WEBPACK_IMPORTED_MODULE_2__.HeaderOrganism, _organisms_menu_menu_organism_component__WEBPACK_IMPORTED_MODULE_3__.MenuOrganism, _molecules_list_list_molecule_component__WEBPACK_IMPORTED_MODULE_5__.ListMolecule, _molecules_item_play_list_item_play_list_molecule_component__WEBPACK_IMPORTED_MODULE_4__.ItemPlayListMolecule],
        exports: [_molecules_Validators_email_input_email_input_component__WEBPACK_IMPORTED_MODULE_0__.EmailInputAtom, _molecules_Validators_password_input_password_input_component__WEBPACK_IMPORTED_MODULE_1__.PasswordInputAtom, _organisms_header_header_organism_component__WEBPACK_IMPORTED_MODULE_2__.HeaderOrganism, _molecules_list_list_molecule_component__WEBPACK_IMPORTED_MODULE_5__.ListMolecule, _molecules_item_play_list_item_play_list_molecule_component__WEBPACK_IMPORTED_MODULE_4__.ItemPlayListMolecule]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_play_list_molecule_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-play-list.molecule.html */ 13812);
/* harmony import */ var _item_play_list_molecule_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-play-list.molecule.scss */ 34258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let ItemPlayListMolecule = class ItemPlayListMolecule {
    constructor() {
        this.items = [];
    }
};
ItemPlayListMolecule.ctorParameters = () => [];
ItemPlayListMolecule.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ItemPlayListMolecule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-item-play-list',
        template: _raw_loader_item_play_list_molecule_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [],
        styles: [_item_play_list_molecule_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemPlayListMolecule);



/***/ }),

/***/ 50905:
/*!**********************************************************************!*\
  !*** ./src/app/components/molecules/list/list.molecule.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListMolecule": function() { return /* binding */ ListMolecule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_list_molecule_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./list.molecule.html */ 49727);
/* harmony import */ var _list_molecule_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.molecule.scss */ 21985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let ListMolecule = class ListMolecule {
    constructor() {
        this.items = [];
    }
};
ListMolecule.ctorParameters = () => [];
ListMolecule.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ListMolecule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-list',
        template: _raw_loader_list_molecule_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [],
        styles: [_list_molecule_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListMolecule);



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
        this.title = '';
    }
    ngOnInit() {
    }
};
HeaderOrganism.propDecorators = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_menu_organism_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./menu.organism.html */ 3162);
/* harmony import */ var _menu_organism_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.organism.scss */ 97856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let MenuOrganism = class MenuOrganism {
    constructor(menu) {
        this.menu = menu;
    }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    openEnd() {
        this.menu.open('end');
    }
    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
};
MenuOrganism.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
];
MenuOrganism = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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
                console.log('guard', token);
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
        // return this.commonService.isAuth().then((p) => {
        //   return p;
        // });
        // if(this.commonService.isAuth() && state.url.indexOf('login') > 0) {
        //   console.log('go to home');
        // }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global.environment */ 98618);






let CommonService = class CommonService {
    constructor(lStorage, navCtrl, plCtrl) {
        this.lStorage = lStorage;
        this.navCtrl = navCtrl;
        this.plCtrl = plCtrl;
    }
    loadAuth() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.lStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.definitions.authToken).then(res => {
                src_app_shared_global_environment__WEBPACK_IMPORTED_MODULE_2__.GlobalEnvironment.auth = res;
            });
        });
    }
    setAuth(auth) {
        this.lStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.definitions.authToken, auth);
    }
    loagout() {
        this.lStorage.removeItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.definitions.authToken);
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform }
];
CommonService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);





let InteceptorService = class InteceptorService {
    constructor() { }
    intercept(req, next) {
        let token = this.getToken();
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
        // console.log("Request in inteceptor.", reqs);
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.error));
    }
    error(err) {
        console.log(err.message);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(err);
    }
    getToken() {
        return '';
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apis.spotify.clientId + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apis.spotify.clientSecret;
    }
};
InteceptorService.ctorParameters = () => [];
InteceptorService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], InteceptorService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 61628);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);




let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
        //this.setEncryption();
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
    setEncryption() {
        this.storage.setEncryptionKey(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.database.key);
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage }
];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



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
    auth: null
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
        key: 'Puu10KlB810',
        name: 'SPOTIFYDATABASE'
    },
    definitions: {
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  color: #ffffff;\n  --ion-item-background: transparent;\n  font-family: \"Spotify\";\n}\nion-item p {\n  color: #949494;\n}\nion-list {\n  --ion-background-color: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tcGxheS1saXN0Lm1vbGVjdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQUk7RUFDSSxjQUFBO0FBRVI7QUFDQTtFQUNJLDZDQUFBO0FBRUoiLCJmaWxlIjoiaXRlbS1wbGF5LWxpc3QubW9sZWN1bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtZmFtaWx5OiAnU3BvdGlmeSc7XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjOTQ5NDk0O1xuICAgIH1cbn1cbmlvbi1saXN0IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59Il19 */");

/***/ }),

/***/ 21985:
/*!**************************************************************!*\
  !*** ./src/app/components/molecules/list/list.molecule.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0Lm1vbGVjdWxlLnNjc3MifQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51Lm9yZ2FuaXNtLnNjc3MifQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item *ngFor=\"let item of items\" lines=\"none\">\n  <ion-thumbnail item-start>\n    <img [src]=\"item.images[0].url\">\n  </ion-thumbnail>\n  <ion-label class=\"ion-padding\">{{item.name}}\n    <p>Total Songs: {{item.tracks.total}}</p>\n  </ion-label>\n  <ion-icon slot=\"end\" size=\"large\" name=\"heart-outline\" color=\"dark\"></ion-icon>\n</ion-item>");

/***/ }),

/***/ 49727:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/molecules/list/list.molecule.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n  <app-item-play-list></app-item-play-list>\n</ion-list>");

/***/ }),

/***/ 95231:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/organisms/header/header.organism.html ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Music</ion-title>\n  </ion-toolbar>\n</ion-header>");

/***/ }),

/***/ 3162:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/organisms/menu/menu.organism.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"end\" type=\"push\" contentId=\"main\">\n  <ion-header>\n    <ion-toolbar color=\"danger\">\n      <ion-title>End Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n");

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