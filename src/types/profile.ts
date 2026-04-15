interface Attempt {
    score: number
    date: string
}

interface LessonProgress {
    lessonId: string
    attempts: Attempt[]
}

export interface Profile {
    id: string
    name: string
    avatar_url: string
    createdAt: number
    lessonProgress: LessonProgress[]
}

