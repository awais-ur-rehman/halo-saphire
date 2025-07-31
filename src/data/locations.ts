export interface Location {
    position: number
    title: string
    place_id: string
    data_id: string
    data_cid: string
    gps_coordinates: {
        latitude: number
        longitude: number
    }
    rating: number
    reviews: number
    type: string
    address: string
    phone: string
    website: string
    extensions: {
        service_options: string
    }
    service_options: {
        in_store_shopping: boolean | null
        in_store_pickup: boolean
    }
    user_review: string
}

export const locationsData: Location[] = [
    {
        "position": 1,
        "title": "SAPPHIRE Centaurus Mall Islamabad",
        "place_id": "ChIJzywx87C_3zgRbDiE-ezcY-E",
        "data_id": "0x38dfbfb0f3312ccf:0xe163dcecf984386c",
        "data_cid": "1.62411E+19",
        "gps_coordinates": {
            "latitude": 33.7078766,
            "longitude": 73.0497927
        },
        "rating": 4.1,
        "reviews": 724,
        "type": "Clothing store",
        "address": "Centaurus Mall, 1st Floor, Shop #117, F 8/4 F-8, Islamabad, Pakistan",
        "phone": "+92 51 2701510",
        "website": "https://pk.sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": true,
            "in_store_pickup": true
        },
        "user_review": "\"Their clothes are expensive but have better quality.\""
    },
    {
        "position": 2,
        "title": "Sapphire - Gulberg",
        "place_id": "ChIJz8aOR_gEGTkRR0OAlctTiU4",
        "data_id": "0x391904f8478ec6cf:0x4e8953cb95804347",
        "data_cid": "5.65915E+18",
        "gps_coordinates": {
            "latitude": 31.521333,
            "longitude": 74.3480156
        },
        "rating": 4.3,
        "reviews": 2947,
        "type": "Clothing store",
        "address": "9-C/k College Rd, Block K Gulberg 2, Lahore, Pakistan",
        "phone": "+92 42 35754306",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Expensive but good quality clothing\""
    },
    {
        "position": 3,
        "title": "Sapphire - Ocean Mall Karachi",
        "place_id": "ChIJc7_OVvvvqz4R1KPmLXXMoHk",
        "data_id": "0x6aeef056cefc7f73:0x79a0cc75e5e6a3d4",
        "data_cid": "8.77025E+18",
        "gps_coordinates": {
            "latitude": 24.8620133,
            "longitude": 67.0336304
        },
        "rating": 4.3,
        "reviews": 1289,
        "type": "Clothing store",
        "address": "GF-002, Ocean Mall, Block 13-C Gulshan-e-Iqbal Scheme-24, Karachi City, Pakistan",
        "phone": "+92 21 34820089",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Clothing range available\""
    },
    {
        "position": 4,
        "title": "Sapphire - DHA Lahore",
        "place_id": "ChIJcYj1evKTETkRVFX0nXCJPJE",
        "data_id": "0x399031fa7af58871:0x913c89706cf45554",
        "data_cid": "1.04536E+19",
        "gps_coordinates": {
            "latitude": 31.4831448,
            "longitude": 74.40888
        },
        "rating": 4.1,
        "reviews": 2215,
        "type": "Clothing store",
        "address": "MM Alam Rd, Block Y DHA Phase 3, Lahore, Pakistan",
        "phone": "+92 42 35754309",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Good quality clothes\""
    },
    {
        "position": 5,
        "title": "Sapphire - Dolmen Mall Clifton",
        "place_id": "ChIJc7_OVvvvqz4R1KPmLXXMoHk",
        "data_id": "0x6aeef056cefc7f73:0x79a0cc75e5e6a3d4",
        "data_cid": "8.77025E+18",
        "gps_coordinates": {
            "latitude": 24.8607,
            "longitude": 67.0011
        },
        "rating": 4.2,
        "reviews": 1567,
        "type": "Clothing store",
        "address": "Dolmen Mall Clifton, Block 4, Clifton, Karachi, Pakistan",
        "phone": "+92 21 35812345",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Premium clothing collection\""
    }
] 