export class DropDownOption {
  constructor(
    public index: number,
    public label: string,
    public value: string
  ) {}
}

export class DropDownControlData {
  constructor(
    public options: DropDownOption[],
    public selectedIndex: number,
    public disabled: boolean
  ) {}
}

export class PicturesNamespace {
  public static GET_PICTURE_SELECTOR: string = "pictures:getSelector";

  private imageOptions: DropDownOption[] = [
    new DropDownOption(1, "Christie Sound system", "assets/audio.png"),
    new DropDownOption(2, "boxer-4k30", "assets/boxer-4k30-main1.png"),
    new DropDownOption(
      3,
      "Christie Spyder-X80",
      "assets/Christie_Spyder-X80-main1a.png"
    ),
    new DropDownOption(
      4,
      "LW551i",
      "assets/Christie-LW551i-3LCD-digital-projector-main-image-4.png"
    ),
    new DropDownOption(
      5,
      "MicroTiles LED",
      "assets/Christie-MicroTilesLED.jpg"
    ),
    new DropDownOption(6, "Q-Series-main", "assets/Q-Series-main.png"),
    new DropDownOption(
      7,
      "Spyder X80",
      "assets/Christie_Spyder-X80-main1a.png"
    ),
  ];

  private pictureSelector: DropDownControlData;

  constructor() {
    this.pictureSelector = new DropDownControlData(this.imageOptions, 5, false);
  }

  public getPictureSelector() {
    return this.pictureSelector;
  }

  public setPictureSelectorEnabled(isEnabled: boolean) {
    this.pictureSelector.disabled = !isEnabled;
  }

  public setPictureSelected(selectedIndex: number) {
    if (
      selectedIndex >= 0 &&
      selectedIndex < this.pictureSelector.options.length
    ) {
      this.pictureSelector.selectedIndex = selectedIndex;
    } else {
      console.error("Attempted to select invalid image index");
    }
  }

  public getSelectedPicture() {
    return this.pictureSelector.options[this.pictureSelector.selectedIndex]
      .value;
  }
}
