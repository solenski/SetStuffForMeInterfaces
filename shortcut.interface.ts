export interface VisualSettings {
  label: string;
  image?: string;
  icon?: string;
}

export interface Shortcut {
  settings: any;
  timestamp: number;
  type: string;
  onTap: () => any;
  visualSettings: VisualSettings;
}

export const shortcutTypes = ['dial', 'sms'];

export class VisualSettingsBase {
  visualSettings = {
    label: {
      label: 'label',
      value: '',
      type: 'text',
      validation: {
        required: true,
        phone: true
      }
    },

    image: {
      label: 'image',
      value: '',
      type: 'text'
    },

    icon: {
      label: 'icon',
      value: '',
      type: 'text'
    }
  };
  constructor(init?: VisualSettings) {
    if (init) {
      this.visualSettings.icon.value = init.icon;
      this.visualSettings.image.value = init.image;
      this.visualSettings.label.value = init.label;
    }
  }
}

export class TextShortcutSettings extends VisualSettingsBase {
  /**
   *
   */
  constructor(
    init?: { phoneNumber: string; message: string },
    visualSettings?: VisualSettings
  ) {
    super(visualSettings);
    if (init) {
      this.settings.phoneNumber.value = init.phoneNumber;
      this.settings.message.value = init.message;
    }
  }
  settings = {
    phoneNumber: {
      label: 'Phone number',
      value: '',
      type: 'text',
      validation: {
        required: true,
        phone: true
      }
    },

    message: {
      label: 'Message',
      value: '',
      type: 'text'
    }
  };
}

export class DialShortcutSettings extends VisualSettingsBase {
  /**
   *
   */
  constructor(
    init?: { phoneNumber: string; withConfirm: boolean },
    visualSettings?: VisualSettings
  ) {
    super(visualSettings);
    if (init) {
      this.settings.phoneNumber.value = init.phoneNumber;
      this.settings.withConfirm.value = init.withConfirm;
    }
  }
  settings = {
    phoneNumber: {
      label: 'Phone number',
      value: '',
      type: 'text',
      validation: {
        required: true,
        phone: true
      }
    },

    withConfirm: {
      label: 'With confirm',
      value: false,
      type: 'checkbox'
    }
  };
}

export function resolveSettingForShortcut(shortuct: Shortcut): any {
  switch (shortuct.type) {
    case 'dial':
      return new DialShortcutSettings(
        shortuct.settings,
        shortuct.visualSettings
      );
    case 'sms':
      return new TextShortcutSettings(
        shortuct.settings,
        shortuct.visualSettings
      );
  }
}
