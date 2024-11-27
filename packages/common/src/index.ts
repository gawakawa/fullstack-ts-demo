export interface BaseEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export interface PaginationParams {
    page: number;
    limit: number;
}

export class AppError extends Error {
    constructor(
        message: string,
        public code: string
    ) {
        super(message);
        this.name = 'AppError';
    }
}
