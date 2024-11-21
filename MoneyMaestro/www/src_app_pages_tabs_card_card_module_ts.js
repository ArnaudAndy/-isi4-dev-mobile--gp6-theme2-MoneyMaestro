"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_card_card_module_ts"],{

/***/ 1820:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/card/card-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardPageRoutingModule": () => (/* binding */ CardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.page */ 4044);




const routes = [
    {
        path: '',
        component: _card_page__WEBPACK_IMPORTED_MODULE_0__.CardPage
    }
];
let CardPageRoutingModule = class CardPageRoutingModule {
};
CardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CardPageRoutingModule);



/***/ }),

/***/ 7292:
/*!************************************************!*\
  !*** ./src/app/pages/tabs/card/card.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardPageModule": () => (/* binding */ CardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 9737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _card_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-routing.module */ 1820);
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.page */ 4044);








let CardPageModule = class CardPageModule {
};
CardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _card_routing_module__WEBPACK_IMPORTED_MODULE_0__.CardPageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule
        ],
        declarations: [_card_page__WEBPACK_IMPORTED_MODULE_1__.CardPage]
    })
], CardPageModule);



/***/ }),

/***/ 4044:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs/card/card.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardPage": () => (/* binding */ CardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _card_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.page.html?ngResource */ 6858);
/* harmony import */ var _card_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.page.scss?ngResource */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ 3587);





// install Swiper modules
swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination]);
let CardPage = class CardPage {
    constructor() {
        this.cards = [];
    }
    ngOnInit() {
        this.cards = [
            { id: 1, company_img: 'assets/imgs/mastercard.png', card_no: '5786 8945 9098 1100', card_holder: 'Nikhil Ag.', exp_date: '08/24' },
            { id: 2, company_img: 'assets/imgs/visa.png', card_no: '2006 7091 2014 8766', card_holder: 'Nikhil Ag.', exp_date: '11/29' },
            { id: 3, company_img: 'assets/imgs/mastercard.png', card_no: '4016 3081 2056 7890', card_holder: 'Nikhil Ag.', exp_date: '06/25' }
        ];
    }
    ngAfterContentChecked() {
        this.bannerConfig = {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 40,
            pagination: { clickable: true }
        };
    }
};
CardPage.ctorParameters = () => [];
CardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-card',
        template: _card_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_card_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CardPage);



/***/ }),

/***/ 2481:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/card/card.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "ion-content .bg_circle {\n  position: absolute;\n  width: 33vh;\n  height: 33vh;\n  left: -8rem;\n  top: 7vh;\n  border-radius: 50%;\n  background: rgba(117, 254, 172, 0.72);\n}\nion-content ion-row {\n  margin: 5vh 1rem 6vh 1rem;\n}\nion-content ion-row swiper {\n  height: 37vh;\n}\nion-content ion-row swiper div.card_details {\n  height: 32vh;\n  border-radius: 2.5rem;\n  padding: 0 1.5rem;\n  background: rgba(255, 255, 255, 0.05);\n  -webkit-backdrop-filter: blur(30px);\n          backdrop-filter: blur(30px);\n  border: 2px solid rgba(127, 212, 168, 0.2);\n}\nion-content ion-row swiper div.card_details img {\n  align-self: start;\n  width: 2.5rem;\n  margin: 2rem 0 2rem 0;\n}\nion-content ion-row swiper div.card_details ion-label div.acc-amt {\n  margin: 0.2rem 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\nion-content ion-row swiper div.card_details ion-label span {\n  font-size: 1.1rem;\n  font-weight: 500;\n}\nion-content ion-row swiper div.card_details p.exp {\n  font-size: 1rem;\n  font-weight: 500;\n  align-self: start;\n  margin: 2rem 0;\n}\nion-content ion-list ion-item ion-label {\n  font-size: 1.1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxJTkdFJTIwNFxcU0VNJTIwMVxcTU9CSUxFJTIwREVWRUxPUE1FTlRcXFNlbWVzdGVyX1Byb2plY3RcXC1pc2k0LWRldi1tb2JpbGUtLWdwNi10aGVtZTItTW9uZXlNYWVzdHJvXFxNb25leU1hZXN0cm9cXHNyY1xcYXBwXFxwYWdlc1xcdGFic1xcY2FyZFxcY2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FDQVI7QURHSTtFQUNJLHlCQUFBO0FDRFI7QURFUTtFQUNJLFlBQUE7QUNBWjtBRENZO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwwQ0FBQTtBQ0NoQjtBREFnQjtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDRXBCO0FEQ29CO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ3hCO0FEQ29CO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0N4QjtBREVnQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0FwQjtBRFFZO0VBQ0ksNEJBQUE7QUNOaEIiLCJmaWxlIjoiY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAuYmdfY2lyY2xlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDMzdmg7XHJcbiAgICAgICAgaGVpZ2h0OiAzM3ZoO1xyXG4gICAgICAgIGxlZnQ6IC04cmVtO1xyXG4gICAgICAgIHRvcDogN3ZoO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDExNywgMjU0LCAxNzIsIDAuNzIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1yb3cge1xyXG4gICAgICAgIG1hcmdpbjogNXZoIDFyZW0gNnZoIDFyZW07XHJcbiAgICAgICAgc3dpcGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzN3ZoO1xyXG4gICAgICAgICAgICBkaXYuY2FyZF9kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzJ2aDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxuICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMHB4KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTI3LCAyMTIsIDE2OCwgMC4yKTtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gMCAycmVtIDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5hY2MtYW10IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLjJyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwLmV4cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24tY29udGVudCAuYmdfY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzN2aDtcbiAgaGVpZ2h0OiAzM3ZoO1xuICBsZWZ0OiAtOHJlbTtcbiAgdG9wOiA3dmg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgxMTcsIDI1NCwgMTcyLCAwLjcyKTtcbn1cbmlvbi1jb250ZW50IGlvbi1yb3cge1xuICBtYXJnaW46IDV2aCAxcmVtIDZ2aCAxcmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLXJvdyBzd2lwZXIge1xuICBoZWlnaHQ6IDM3dmg7XG59XG5pb24tY29udGVudCBpb24tcm93IHN3aXBlciBkaXYuY2FyZF9kZXRhaWxzIHtcbiAgaGVpZ2h0OiAzMnZoO1xuICBib3JkZXItcmFkaXVzOiAyLjVyZW07XG4gIHBhZGRpbmc6IDAgMS41cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzBweCk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTI3LCAyMTIsIDE2OCwgMC4yKTtcbn1cbmlvbi1jb250ZW50IGlvbi1yb3cgc3dpcGVyIGRpdi5jYXJkX2RldGFpbHMgaW1nIHtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIHdpZHRoOiAyLjVyZW07XG4gIG1hcmdpbjogMnJlbSAwIDJyZW0gMDtcbn1cbmlvbi1jb250ZW50IGlvbi1yb3cgc3dpcGVyIGRpdi5jYXJkX2RldGFpbHMgaW9uLWxhYmVsIGRpdi5hY2MtYW10IHtcbiAgbWFyZ2luOiAwLjJyZW0gMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5pb24tY29udGVudCBpb24tcm93IHN3aXBlciBkaXYuY2FyZF9kZXRhaWxzIGlvbi1sYWJlbCBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5pb24tY29udGVudCBpb24tcm93IHN3aXBlciBkaXYuY2FyZF9kZXRhaWxzIHAuZXhwIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgbWFyZ2luOiAycmVtIDA7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 6858:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/card/card.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Cards</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"primary\">\r\n\r\n  <div class=\"bg_circle\"></div>\r\n\r\n  <ion-row>\r\n    <swiper [config]=\"bannerConfig\">\r\n      <ng-template swiperSlide *ngFor=\"let card of cards\">\r\n        <div class=\"card_details\">\r\n          <img [src]=\"card?.company_img\" />\r\n          <div align=\"center\">\r\n            <ion-label>\r\n              <div class=\"acc-amt\"><ion-text color=\"white\">{{card?.card_no}}</ion-text></div>\r\n              <span>{{card?.card_holder}}</span>\r\n            </ion-label>    \r\n          </div>\r\n          <p class=\"exp ion-text-start\"><ion-text color=\"white\">{{card?.exp_date}}</ion-text></p>\r\n        </div>\r\n      </ng-template>\r\n    </swiper>\r\n  </ion-row>\r\n\r\n  <ion-list class=\"transactions\">\r\n    <ion-list-header>\r\n      <ion-label color=\"medium\">Settings</ion-label>\r\n    </ion-list-header>\r\n    <ion-item-group>\r\n      <ion-item lines=\"full\">\r\n        <ion-label>\r\n          Enable Card \r\n        </ion-label>\r\n        <ion-toggle slot=\"end\" [checked]=\"true\"></ion-toggle>\r\n      </ion-item>\r\n    </ion-item-group>\r\n    <ion-item-group>\r\n      <ion-item lines=\"full\" detail>\r\n        <ion-label>\r\n          Change Pin \r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-item-group>\r\n    \r\n  </ion-list>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_card_card_module_ts.js.map