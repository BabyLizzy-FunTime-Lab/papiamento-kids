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
    // Seed with a guest profile if the storage is empty //
    const guestProfile: Profile = DummyDataFactory.getGuestProfile();
    const profiles: Profile[] = await storage.get("profiles");
    if (!profiles || profiles.length === 0) {
        await storage.set('profiles', [guestProfile]);
        await storage.set('activeProfileId', guestProfile.id);
    }

    // Seed with dummy data //
    // const dummyProfiles: Profile[] = DummyDataFactory.getDummyProfiles();
    //
    // if (!profiles || profiles.length === 0) {
    //     await storage.set('profiles', dummyProfiles);
    // }
    //
    // const existingProfiles = new Set( profiles.map(p => p.id));
    // const newProfiles: Profile[] = dummyProfiles.filter(p => !existingProfiles.has(p.id) );
    //
    // // This will add new dummy profiles without rewriting all data in storage.
    // if (newProfiles.length > 0) {
    //     profiles = [...profiles, ...newProfiles];
    //     await storage.set('profiles', profiles);
    // }
    //
    // // This will delete all profiles that no longer exist in the dummy data.
    // profiles = await storage.get("profiles");
    //
    // const existingDummyProfiles = new Set( dummyProfiles.map(p => p.id));
    // const deletedProfiles: Profile[] = profiles.filter(p => !existingDummyProfiles.has(p.id));
    // if (deletedProfiles.length > 0) {
    //     const correctedProfileList: Profile[] = profiles.filter(p => existingDummyProfiles.has(p.id));
    //     await storage.set('profiles', correctedProfileList);
    // }

    // test profiles content //
    // const testProfiles = await storage.get("profiles");
    // console.table(testProfiles);
}

export function getStorage(): Storage {
    if (!storage) {
        throw new Error('Storage not initialized. Call initStorage()');
    }
    return storage;
}