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
    }
]

export class DummyDataFactory {
    static getDummyProfiles(): Profile[] {
        return dummyProfiles;
    }
}