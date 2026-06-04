import type {Profile} from "@/types/profile";

const guestProfile: Profile =
    {
        id: "u12",
        name: "Guest",
        avatar: "tree-avatar.jpg",
        createdAt: Date.now(),
        lessonProgress: []
    };


const dummyProfiles: Profile[] = [
    {
        id: "u12",
        name: "Jose",
        avatar: "tree-avatar.jpg",
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
        id: "u13",
        name: "Luis",
        avatar: "shoco-avatar.png",
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
        id: "u14",
        name: "Rasmussen",
        avatar: "tree-avatar.jpg",
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
    },
    {
        id: "u9",
        name: "Esther",
        avatar: "tree-avatar.jpg",
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
        id: "u15",
        name: "Lizzy",
        avatar: "shoco-avatar.png",
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
    },
    {
        id: "u11",
        name: "Evee",
        avatar: "tree-avatar.jpg",
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
]

export class DummyDataFactory {
    static getDummyProfiles(): Profile[] {
        return dummyProfiles;
    }
    static getGuestProfile(): Profile {
        return guestProfile;
    }
}