"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VideoService = void 0;
var core_1 = require("@angular/core");
var VideoService = /** @class */ (function () {
    function VideoService(http) {
        this.http = http;
    }
    VideoService.prototype.getVideos = function () {
        return this.http.get('http://localhost:4000/api/videos');
    };
    VideoService.prototype.addVideo = function (newVideo) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.append('http://localhost:4000/api/video', newVideo);
    };
    VideoService.prototype.deleteVideo = function (_id) {
        var headers = new Headers();
        return this.http["delete"]('http://localhost:4000/api/video', _id);
    };
    VideoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], VideoService);
    return VideoService;
}());
exports.VideoService = VideoService;
