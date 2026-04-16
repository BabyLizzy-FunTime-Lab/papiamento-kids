import type {Profile} from "@/types/profile";

const dummyProfiles: Profile[] = [
    {
        id: "u1",
        name: "Jose",
        avatar_url: "mugshot.jpg",
        createdAt: Date.now(),
        lessonProgress: [
            {
                lessonId: "l1",
                attempts: [
                    {score: 6, date: "2026-01-01"},
                    {score: 8, date: "2026-01-02"},
                ]
            }
        ]
    },
    {
        id: "u2",
        name: "Luis",
        avatar_url: "uglyMugshot.jpg",
        createdAt: Date.now(),
        lessonProgress: [
            {
                lessonId: "l2",
                attempts: [
                    {score: 7, date: "2026-01-02"},
                    {score: 9, date: "2026-01-03"},
                ]
            }
        ]
    },
    {
        id: "u3",
        name: "Rasmussen",
        avatar_url: "bigMugshot.jpg",
        createdAt: Date.now(),
        lessonProgress: [
            {
                lessonId: "l3",
                attempts: [
                    {score: 8, date: "2026-01-05"},
                    {score: 10, date: "2026-01-07"},
                ]
            }
        ]
    }
]

export class DummyDataFactory {
    static getDummyProfiles(): Profile[] {
        return dummyProfiles;
    }
}