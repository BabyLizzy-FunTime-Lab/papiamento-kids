import { defineStore } from "pinia";
import { getStorage } from "@/services/storage";

const storage = getStorage();

interface Profile {
    id: string
    name: string
    avatar: string
    createdAt: Date
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
            this.profiles = (await storage.get('profiles') || [])
            this.activeProfileId = (await storage.get('activeProfileId') || null)
        }
    }
})
