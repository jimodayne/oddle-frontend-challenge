export interface ResponseData<T> {
    total_count: number;
    incomplete_results: boolean;
    items: T;
}
