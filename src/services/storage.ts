import { Storage } from '@ionic/storage';

let storage: Storage | null = null;

export async function initStorage(): Promise<void> {
    if (!storage) {
        storage = new Storage({
            name: '__papiamento-kids'
        });
        await storage.create();
    }
}
// add dummy data
// We need a test user and linked progress object

export function getStorage(): Storage {
    if (!storage) {
        throw new Error('Storage not initialized. Call initStorage()');
    }
    return storage;
}