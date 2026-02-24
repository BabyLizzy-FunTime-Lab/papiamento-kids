import { Storage } from '@ionic/storage';
import { DummyDataFactory } from "@/data/DummyDataFactory";

let storage: Storage | null = null;

export async function initStorage(): Promise<void> {
    if (!storage) {
        storage = new Storage({
            name: '__papiamento_kids_db'
        });
        await storage.create();
    }

    const profiles = await storage.get("profiles");

    if (!profiles || profiles.length === 0) {
        await storage.set('profiles', DummyDataFactory.getDummyProfiles());
    }

    // test profiles content
    // const testProfiles = await storage.get("profiles");
    // console.table(testProfiles);
}

export function getStorage(): Storage {
    if (!storage) {
        throw new Error('Storage not initialized. Call initStorage()');
    }
    return storage;
}