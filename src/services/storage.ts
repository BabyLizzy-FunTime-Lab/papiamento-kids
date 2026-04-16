import { Storage } from '@ionic/storage';
import { DummyDataFactory } from "@/data/DummyDataFactory";
import {Profile} from "@/types/profile";

let storage: Storage | null = null;

export async function initStorage(): Promise<void> {
    if (!storage) {
        storage = new Storage({
            name: '__papiamento_kids_db'
        });
        await storage.create();
    }

    const dummyProfiles: Profile[] = DummyDataFactory.getDummyProfiles()
    let profiles: Profile[] = await storage.get("profiles");

    if (!profiles || profiles.length === 0) {
        await storage.set('profiles', dummyProfiles);
    }

    // This will add new dummy profiles without rewriting all data in storage.
    const existingProfiles = new Set( profiles.map(p => p.id));
    const newProfiles: Profile[] = dummyProfiles.filter(p => !existingProfiles.has(p.id) );
    if (newProfiles.length > 0) {
        profiles = [...profiles, ...newProfiles];
        await storage.set('profiles', profiles);
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