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
    avatar: string
    createdAt: number
    lessonProgress: LessonProgress[]
}

