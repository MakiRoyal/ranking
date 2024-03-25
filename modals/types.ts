type List<T> = {
    data: T[]
    meta: Meta
}

type Element<T> = {
    data: T
    meta: {}
}

export type Players = List<Player>
export type PlayerType = Element<Player>


export type Meta = {
    pagination: {
        page:      number;
        pageSize:  number;
        pageCount: number;
        total:     number;
    }
}


export type Player = {
    id:          number;
    name:        string;
    createdAt:   string;
    updatedAt:   string;
    publishedAt: Date;
    ranking:     number;
    slug:        string;
    image:       Image | null;
}

type Image = {
    id:                number;
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

type Formats = {
    large?:    Large;
    small:     Large;
    medium:    Large;
    thumbnail: Large;
}

type Large = {
    ext:         string;
    url:         string;
    hash:        string;
    mime:        string;
    name:        string;
    path:        null;
    size:        number;
    width:       number;
    height:      number;
    sizeInBytes: number;
}

type QueryType = {
    populate: string
    filters: {
        (key: string): {
            (key: string): string
        }
    }
    pagination: {
        page: number
        pageSize: number
    }
}