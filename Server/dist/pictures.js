"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicturesNamespace = exports.DropDownControlData = exports.DropDownOption = void 0;
class DropDownOption {
    constructor(index, label, value) {
        this.index = index;
        this.label = label;
        this.value = value;
    }
}
exports.DropDownOption = DropDownOption;
class DropDownControlData {
    constructor(options, selectedIndex, disabled) {
        this.options = options;
        this.selectedIndex = selectedIndex;
        this.disabled = disabled;
    }
}
exports.DropDownControlData = DropDownControlData;
class PicturesNamespace {
    constructor() {
        this.imageOptions = [
            new DropDownOption(1, "Christie Sound system", "assets/audio.png"),
            new DropDownOption(2, "boxer-4k30", "assets/boxer-4k30-main1.png"),
            new DropDownOption(3, "Christie Spyder-X80", "assets/Christie_Spyder-X80-main1a.png"),
            new DropDownOption(4, "LW551i", "assets/Christie-LW551i-3LCD-digital-projector-main-image-4.png"),
            new DropDownOption(5, "MicroTiles LED", "assets/Christie-MicroTilesLED.jpg"),
            new DropDownOption(6, "Q-Series-main", "assets/Q-Series-main.png"),
            new DropDownOption(7, "Spyder X80", "assets/Christie_Spyder-X80-main1a.png"),
        ];
        this.pictureSelector = new DropDownControlData(this.imageOptions, 5, false);
    }
    getPictureSelector() {
        return this.pictureSelector;
    }
    setPictureSelectorEnabled(isEnabled) {
        this.pictureSelector.disabled = !isEnabled;
    }
    setPictureSelected(selectedIndex) {
        if (selectedIndex >= 0 &&
            selectedIndex < this.pictureSelector.options.length) {
            this.pictureSelector.selectedIndex = selectedIndex;
        }
        else {
            console.error("Attempted to select invalid image index");
        }
    }
    getSelectedPicture() {
        return this.pictureSelector.options[this.pictureSelector.selectedIndex]
            .value;
    }
}
exports.PicturesNamespace = PicturesNamespace;
PicturesNamespace.GET_PICTURE_SELECTOR = "pictures:getSelector";
//# sourceMappingURL=pictures.js.map