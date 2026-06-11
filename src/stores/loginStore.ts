import { defineStore } from "pinia";
import { getStorage } from "@/services/storage";
import type {Profile} from "@/types/profile";


interface LoginState {
    profiles: Profile[]
    activeProfileId: string | null
}

export const useLoginStore = defineStore('login', {
    state: (): LoginState => {
        return {
            profiles: [],
            activeProfileId: null,
        }
    },
    getters: {
        getActiveProfile(state): Profile | null {
            if (!state.activeProfileId) return null;
            return (
                state.profiles.find(profile => profile.id === state.activeProfileId) || null
            )
        }
    },
    actions: {
        async load() {
            const storage = getStorage();
            // This should get the dummy data.
            this.profiles = (await storage.get('profiles') || [])
            this.activeProfileId = (await storage.get('activeProfileId') || null)
        },

        async createProfile(name: string, avatar: string) {
            const storage = getStorage();

            const profile: Profile = {
                id: crypto.randomUUID(),
                name,
                avatar,
                createdAt: Date.now(),
                lessonProgress: []
            }

            this.profiles.push(profile)
            // await storage.set('profiles', this.profiles)
            await storage.set('profiles', JSON.parse(JSON.stringify(this.profiles)));

            this.activeProfileId = profile.id
            await storage.set('activeProfileId', profile.id)
        },

        async setActiveProfile(id: string) {
            const storage = getStorage();
            this.activeProfileId = id;
            await storage.set('activeProfileId', id);
        }
    }
})
