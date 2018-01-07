export enum ShortcutType {
  Dial,
  SMS,
  Navigate,
  VolumeUp,
  VolumeDown,
  StartApp
}
export interface VisualSettings {
  label: string;
  image?: string;
  icon?: string;
}

export interface Shortcut {
  settings: any;
  timestamp: number;
  type: ShortcutType;
  onTap: () => any;
  visualSettings: VisualSettings;
}

export class DialShortcutSettings {
  /**
   *
   */
  constructor(init?: { phoneNumber: string; withConfirm: boolean }) {
    if (init) {
      this.phoneNumber.value = init.phoneNumber;
      this.withConfirm.value = init.withConfirm;
    }
  }
  phoneNumber = {
    label: 'Phone number',
    value: '',
    type: 'text',
    validation: {
      required: true,
      phone: true
    }
  };

  withConfirm = {
    label: 'With confirm',
    value: false,
    type: 'checkbox'
  };
}

export const type_settings_map = new Map<ShortcutType, Function>([
  [ShortcutType.Dial, DialShortcutSettings]
]);
