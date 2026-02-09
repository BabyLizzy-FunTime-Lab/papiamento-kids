import { defineStore } from "pinia";
import { Storage } from "@ionic/storage";

interface GameState {
    completedLessons: number[]
    scores: Record<string,number>
}

const storage = new Storage();
storage.create()

export const useGameState = defineStore('game', {
    state: (): GameState => ({
        completedLessons: [],
        scores: {}
    }),

    actions: {
        async load() {
            this.completedLessons =
                (await storage.get('completedLessons') as GameState)['completedLessons'];
            this.scores =
                (await storage.get('scores') as GameState)['scores'];
        },
        async completelesson(id: number) {
            if(!this.completedLessons.includes(id)) {
                this.completedLessons.push(id);
                await storage.set('completedLessons', this.completedLessons);
            }
        },
        async saveScore(quizId: string, score: number) {
            this.scores[quizId] = score;
            await storage.set('scores', this.scores);
        }
    }
})