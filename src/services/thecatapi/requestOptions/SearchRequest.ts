// Todo:: maybe better type naming?
export type _SearchRequest = {
    page: number
    order: string
    limit: number
    size: string
    breed_id: string
    mime_types: string
}

export function SearchRequest(options?: Partial<_SearchRequest>): _SearchRequest {
    const defaults = {
        page: 0,
        order: "Desc",
        limit: 25,
        size: "full",
        breed_id: "",
        mime_types: "jpg,png,gif",
    }

    return {
        ...defaults,
        ...options
    }
}
