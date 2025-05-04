import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'app_name',
  encryptionKey: 'my_encryption_key',
});

export const mmkvStorage = {
  setItem: (key: string, value: boolean | string | number | ArrayBuffer) =>
    storage.set(key, value),
  getItem: (key: string) => storage.getString(key) ?? null,
  removeItem: (key: string) => storage.delete(key),
};
