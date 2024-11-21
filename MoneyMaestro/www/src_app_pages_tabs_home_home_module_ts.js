"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_home_home_module_ts"],{

/***/ 4874:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/home/home-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9200);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 6302:
/*!************************************************!*\
  !*** ./src/app/pages/tabs/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 4874);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 9200);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 9737);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 9200:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 2150);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 9801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ 3587);





// install Swiper modules
swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination]);
let HomePage = class HomePage {
    constructor() {
        this.accounts = [];
        this.features = [];
        this.transactions = [];
    }
    ngOnInit() {
        this.accounts = [
            { id: 1, acc_no: '57868945098', balance: '200000' },
            { id: 2, acc_no: '20067091201', balance: '50000' },
            { id: 3, acc_no: '40163081205', balance: '80000' }
        ];
        this.features = [
            { id: 1, color: 'tertiary', icon: 'paper-plane', name: 'Send' },
            { id: 2, color: 'white', icon: 'send', name: 'Request' },
            { id: 3, color: 'success', icon: 'add-circle', name: 'Top-up' },
            { id: 4, color: 'light', icon: 'newspaper', name: 'Bills' },
            { id: 5, color: 'warning', icon: 'card', name: 'Cards' },
        ];
        this.transactions = [
            { id: 1, to: 'Piyush Ag.', date: '2022-05-22', amount: 5000 },
            { id: 2, to: 'Avinash', date: '2022-03-02', amount: 7000 },
            { id: 3, to: 'Catherine', date: '2022-07-28', amount: -3250 },
            { id: 4, to: 'Akhil Ag.', date: '2022-01-09', amount: 1000 },
            { id: 5, to: 'Prem Ag.', date: '2022-04-13', amount: -800 },
        ];
    }
    ngAfterContentChecked() {
        this.bannerConfig = {
            slidesPerView: 1,
            pagination: { clickable: true }
        };
        this.featureConfig = {
            slidesPerView: 3.5,
        };
    }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 9801:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\nion-header ion-toolbar ion-title {\n  max-width: 40vh;\n}\nion-header ion-toolbar ion-title ion-label ion-text {\n  font-size: 1rem;\n}\nion-header ion-toolbar ion-title ion-label p ion-text {\n  font-size: 1.3rem !important;\n}\nion-header ion-toolbar ion-avatar {\n  height: 2.5rem;\n  width: 2.5rem;\n  border: 1px solid var(--ion-color-tertiary);\n}\nion-header ion-toolbar ion-avatar img {\n  max-width: 100%;\n}\nion-content ion-row.banners {\n  position: relative;\n  padding: 1.5rem;\n  height: 34vh;\n  background: linear-gradient(120.67deg, #03b5aa 17.45%, rgba(162, 167, 127, 0.09) 105.58%);\n  border-radius: 2.5rem;\n  margin: 6vh 1rem 0 1rem;\n}\nion-content ion-row.banners swiper div ion-label p.acc-amt {\n  margin: 1rem 0;\n  font-size: 3rem;\n  font-weight: 700;\n}\nion-content ion-row.banners::after {\n  content: \"\";\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n  background: #194648;\n  border-radius: 2.5rem;\n  z-index: 0;\n  border: 2px solid transparent;\n}\nion-content ion-row.feature-list {\n  padding: 5vh 0;\n}\nion-content ion-row.feature-list div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\nion-content ion-row.feature-list div ion-button {\n  --border-radius: 15px;\n  height: 8vh;\n}\nion-content ion-row.feature-list div ion-label {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxJTkdFJTIwNFxcU0VNJTIwMVxcTU9CSUxFJTIwREVWRUxPUE1FTlRcXFNlbWVzdGVyX1Byb2plY3RcXC1pc2k0LWRldi1tb2JpbGUtLWdwNi10aGVtZTItTW9uZXlNYWVzdHJvXFxNb25leU1hZXN0cm9cXHNyY1xcYXBwXFxwYWdlc1xcdGFic1xcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7QUNDWjtBRENnQjtFQUNJLGVBQUE7QUNDcEI7QURFb0I7RUFDSSw0QkFBQTtBQ0F4QjtBREtRO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtBQ0haO0FESVk7RUFDSSxlQUFBO0FDRmhCO0FEVUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUZBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDUFI7QURXb0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVHhCO0FEZ0JJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUNkUjtBRGlCSTtFQUNJLGNBQUE7QUNmUjtBRGdCUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNkWjtBRGVZO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDYmhCO0FEZVk7RUFDSSxlQUFBO0FDYmhCIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MHZoO1xyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWF2YXRhciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcblxyXG4gICAgaW9uLXJvdy5iYW5uZXJzIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgIGhlaWdodDogMzR2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIwLjY3ZGVnLCAjMDNiNWFhIDE3LjQ1JSwgcmdiYSgxNjIsIDE2NywgMTI3LCAwLjA5KSAxMDUuNTglKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyLjVyZW07XHJcbiAgICAgICAgbWFyZ2luOiA2dmggMXJlbSAwIDFyZW07XHJcbiAgICAgICAgc3dpcGVyIHtcclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5hY2MtYW10IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXJvdy5iYW5uZXJzOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgbGVmdDogMXB4O1xyXG4gICAgICAgIHJpZ2h0OiAxcHg7XHJcbiAgICAgICAgYm90dG9tOiAxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE5NDY0ODtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyLjVyZW07XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tcm93LmZlYXR1cmUtbGlzdCB7XHJcbiAgICAgICAgcGFkZGluZzogNXZoIDA7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4dmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBtYXgtd2lkdGg6IDQwdmg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSBpb24tbGFiZWwgaW9uLXRleHQge1xuICBmb250LXNpemU6IDFyZW07XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSBpb24tbGFiZWwgcCBpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1hdmF0YXIge1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWF2YXRhciBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jb250ZW50IGlvbi1yb3cuYmFubmVycyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMS41cmVtO1xuICBoZWlnaHQ6IDM0dmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjAuNjdkZWcsICMwM2I1YWEgMTcuNDUlLCByZ2JhKDE2MiwgMTY3LCAxMjcsIDAuMDkpIDEwNS41OCUpO1xuICBib3JkZXItcmFkaXVzOiAyLjVyZW07XG4gIG1hcmdpbjogNnZoIDFyZW0gMCAxcmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLXJvdy5iYW5uZXJzIHN3aXBlciBkaXYgaW9uLWxhYmVsIHAuYWNjLWFtdCB7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5pb24tY29udGVudCBpb24tcm93LmJhbm5lcnM6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFweDtcbiAgbGVmdDogMXB4O1xuICByaWdodDogMXB4O1xuICBib3R0b206IDFweDtcbiAgYmFja2dyb3VuZDogIzE5NDY0ODtcbiAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xuICB6LWluZGV4OiAwO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbmlvbi1jb250ZW50IGlvbi1yb3cuZmVhdHVyZS1saXN0IHtcbiAgcGFkZGluZzogNXZoIDA7XG59XG5pb24tY29udGVudCBpb24tcm93LmZlYXR1cmUtbGlzdCBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1yb3cuZmVhdHVyZS1saXN0IGRpdiBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICBoZWlnaHQ6IDh2aDtcbn1cbmlvbi1jb250ZW50IGlvbi1yb3cuZmVhdHVyZS1saXN0IGRpdiBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDFyZW07XG59Il19 */";

/***/ }),

/***/ 2150:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title mode=\"md\" class=\"ion-no-padding\">\r\n      <ion-label>\r\n        <ion-text color=\"tertiary\">Welcome</ion-text>\r\n        <p><ion-text color=\"white\"><strong>Allabira</strong></ion-text></p>\r\n      </ion-label>\r\n    </ion-title>\r\n    <ion-avatar slot=\"end\">\r\n      <img src=\"assets/imgs/img.png\" />\r\n    </ion-avatar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"primary\">\r\n\r\n  <ion-row class=\"banners\">\r\n    <swiper [config]=\"bannerConfig\">\r\n      <ng-template swiperSlide *ngFor=\"let account of accounts\">\r\n        <div align=\"center\">\r\n          <ion-label>\r\n            <span>Total Balance</span>\r\n            <p class=\"acc-amt\"><ion-text color=\"white\">₹{{account?.balance}}</ion-text></p>\r\n            <span>{{account?.acc_no}}</span>\r\n          </ion-label>\r\n        </div>\r\n      </ng-template>\r\n    </swiper>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"ion-text-center feature-list\" *ngIf=\"features?.length > 0\">\r\n    <swiper [config]=\"featureConfig\">\r\n      <ng-template swiperSlide *ngFor=\"let feature of features\">\r\n        <div>\r\n          <ion-button slot=\"icon-only\" [color]=\"feature?.color\">\r\n            <ion-icon [name]=\"feature?.icon\"></ion-icon>\r\n          </ion-button>\r\n          <ion-label>{{feature?.name}}</ion-label>\r\n        </div>\r\n      </ng-template>\r\n    </swiper>\r\n  </ion-row>\r\n\r\n  <ion-list class=\"transactions\" *ngIf=\"transactions?.length > 0\">\r\n\r\n    <ion-list-header>\r\n      <ion-label color=\"medium\">Transactions</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item-group>\r\n      <ion-item lines=\"full\" *ngFor=\"let transaction of transactions\">\r\n        <ion-thumbnail slot=\"start\" class=\"ion-text-center\">\r\n          <img [src]=\"'assets/imgs/' + (transaction?.amount >= 0 ? 'up-right.png' : 'down-left-arrow.png')\" />\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <ion-text>{{transaction?.to}}</ion-text>\r\n          <p>\r\n            <ion-text>\r\n              {{transaction?.date | date: 'MMM d, y'}}\r\n            </ion-text>\r\n          </p>\r\n        </ion-label>\r\n        <ion-text slot=\"end\" color=\"primary\">\r\n          {{transaction?.amount >= 0 ? '₹' + transaction?.amount : '-₹' + (transaction?.amount * (-1))}}\r\n        </ion-text>\r\n      </ion-item>\r\n    </ion-item-group>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_home_home_module_ts.js.map