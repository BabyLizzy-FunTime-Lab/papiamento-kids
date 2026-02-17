import { defineStore } from "pinia";
import { getStorage } from "@/services/storage";

const storage = getStorage();

interface Profile {
    id: string
    name: string
    avatar: string
    createdAt: number
}

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
            // This should get the dummy data.
            this.profiles = (await storage.get('profiles') || [])
            this.activeProfileId = (await storage.get('activeProfileId') || null)
        },

        async createProfile(name: string, avatar: string) {
            const profile: Profile = {
                id: crypto.randomUUID(),
                name,
                avatar,
                createdAt: Date.now(),
            }

            this.profiles.push(profile)
            await storage.set('profiles', this.profiles)

            this.activeProfileId = profile.id
            await storage.set('activeProfileId', profile.id)
        },

        async selectProfile(id: string) {
            this.activeProfileId = id
            await storage.set('activeProfileId', id)
        }
    }
})
