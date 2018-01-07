import { Shortcut } from './shortcut.interface';

export function getShortuctFromSettings( type, setting): Shortcut {
  const strippedSettingsObj = {
    settings: {},
    visualSettings: {}
  };
  for (const prop of Object.keys(setting.settings)) {
    if (prop) {
      strippedSettingsObj.settings[prop] = setting.settings[prop].value;
    }
  }
  for (const prop of Object.keys(setting.visualSettings)) {
    if (prop) {
      strippedSettingsObj.visualSettings[prop] = setting.visualSettings[prop].value;
    }
  }

  return <Shortcut>{
    type: type,
    settings: strippedSettingsObj.settings,
    visualSettings: strippedSettingsObj.visualSettings,
    timestamp: Date.now()
  };
}
