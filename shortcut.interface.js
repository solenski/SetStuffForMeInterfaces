"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TNSPhone = require("nativescript-phone");
var ShortcutType;
(function (ShortcutType) {
    ShortcutType[ShortcutType["Dial"] = 0] = "Dial";
    ShortcutType[ShortcutType["SMS"] = 1] = "SMS";
    ShortcutType[ShortcutType["Navigate"] = 2] = "Navigate";
    ShortcutType[ShortcutType["VolumeUp"] = 3] = "VolumeUp";
    ShortcutType[ShortcutType["VolumeDown"] = 4] = "VolumeDown";
    ShortcutType[ShortcutType["StartApp"] = 5] = "StartApp";
})(ShortcutType = exports.ShortcutType || (exports.ShortcutType = {}));
var DialShortcut = (function () {
    function DialShortcut(settings, visualSettings) {
        this.type = ShortcutType.Dial;
        this.visualSettings = visualSettings;
        this.settings = settings;
        this.timestamp = Date.now();
    }
    DialShortcut.prototype.onTap = function () {
        TNSPhone.dial(this.settings.phoneNumber, this.settings.withConfirm);
    };
    return DialShortcut;
}());
exports.DialShortcut = DialShortcut;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnRjdXQuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hvcnRjdXQuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQStDO0FBRS9DLElBQVksWUFPWDtBQVBELFdBQVksWUFBWTtJQUN0QiwrQ0FBSSxDQUFBO0lBQ0osNkNBQUcsQ0FBQTtJQUNILHVEQUFRLENBQUE7SUFDUix1REFBUSxDQUFBO0lBQ1IsMkRBQVUsQ0FBQTtJQUNWLHVEQUFRLENBQUE7QUFDVixDQUFDLEVBUFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFPdkI7QUFXRDtJQVNFLHNCQUNFLFFBR0MsRUFDRCxjQUE4QjtRQVh2QixTQUFJLEdBQWlCLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFhOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFROU1Bob25lIGZyb20gXCJuYXRpdmVzY3JpcHQtcGhvbmVcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFNob3J0Y3V0VHlwZSB7XHJcbiAgRGlhbCxcclxuICBTTVMsXHJcbiAgTmF2aWdhdGUsXHJcbiAgVm9sdW1lVXAsXHJcbiAgVm9sdW1lRG93bixcclxuICBTdGFydEFwcFxyXG59XHJcbmV4cG9ydCB0eXBlIFZpc3VhbFNldHRpbmdzID0geyBsYWJlbDogc3RyaW5nOyBpbWFnZT86IHN0cmluZzsgaWNvbj86IHN0cmluZyB9O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaG9ydGN1dCB7XHJcbiAgc2V0dGluZ3M6IGFueTtcclxuICB0aW1lc3RhbXA6IG51bWJlcjtcclxuICB0eXBlOiBTaG9ydGN1dFR5cGU7XHJcbiAgb25UYXA6ICgpID0+IGFueTtcclxuICB2aXN1YWxTZXR0aW5nczogVmlzdWFsU2V0dGluZ3M7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEaWFsU2hvcnRjdXQgaW1wbGVtZW50cyBTaG9ydGN1dCB7XHJcbiAgdGltZXN0YW1wOiBudW1iZXI7XHJcbiAgdmlzdWFsU2V0dGluZ3M6IFZpc3VhbFNldHRpbmdzO1xyXG4gIHJlYWRvbmx5IHR5cGU6IFNob3J0Y3V0VHlwZSA9IFNob3J0Y3V0VHlwZS5EaWFsO1xyXG4gIHNldHRpbmdzOiB7XHJcbiAgICBwaG9uZU51bWJlcjogc3RyaW5nO1xyXG4gICAgd2l0aENvbmZpcm0/OiBib29sZWFuO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgc2V0dGluZ3M6IHtcclxuICAgICAgcGhvbmVOdW1iZXI6IHN0cmluZztcclxuICAgICAgd2l0aENvbmZpcm06IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICAgdmlzdWFsU2V0dGluZ3M6IFZpc3VhbFNldHRpbmdzXHJcbiAgKSB7XHJcbiAgICB0aGlzLnZpc3VhbFNldHRpbmdzID0gdmlzdWFsU2V0dGluZ3M7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICB0aGlzLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgfVxyXG5cclxuICBvblRhcCgpIHtcclxuICAgIFROU1Bob25lLmRpYWwodGhpcy5zZXR0aW5ncy5waG9uZU51bWJlciwgdGhpcy5zZXR0aW5ncy53aXRoQ29uZmlybSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==