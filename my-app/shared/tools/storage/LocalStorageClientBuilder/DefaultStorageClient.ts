export class DefaultStorageClient {
  storageKey: string;
  mainStorage: Storage | null | undefined;

  constructor(storageKey: string, mainStorage?: Storage | null | undefined) {
    this.storageKey = storageKey;
    this.mainStorage = mainStorage;
  }

  public get() {
    return this.mainStorage?.getItem(this.storageKey);
  }
  public set(value: string) {
    return this.mainStorage?.setItem(this.storageKey, value);
  }
  public remove() {
    return this.mainStorage?.removeItem(this.storageKey);
  }
}
