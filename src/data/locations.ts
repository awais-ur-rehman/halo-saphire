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
        "user_review": "\"Lovely dresses with quality fabrics\""
    },
    {
        "position": 5,
        "title": "Sapphire - The Mall of Lahore",
        "place_id": "ChIJI9D98mOZETkRnb5D7fDksw8",
        "data_id": "0x3991639de2f0d023:0x0fb3e0f0edc3be9d",
        "data_cid": "1.13267E+18",
        "gps_coordinates": {
            "latitude": 31.4742222,
            "longitude": 74.3247222
        },
        "rating": 4.2,
        "reviews": 1021,
        "type": "Clothing store",
        "address": "The Mall of Lahore, Upper Ground Level, UG-32 & 33 Sector U, Block C 2 Cantt, Lahore, Pakistan",
        "phone": "+92 42 35754700",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Ok quality but very over priced\""
    },
    {
        "position": 6,
        "title": "Sapphire - Packages Mall Lahore",
        "place_id": "ChIJdQgGRPmZETkRKFDc-6vPNAE",
        "data_id": "0x399919f944068075:0x01344bbdfc15dc50",
        "data_cid": "8.8556E+16",
        "gps_coordinates": {
            "latitude": 31.4698889,
            "longitude": 74.3897222
        },
        "rating": 4.5,
        "reviews": 687,
        "type": "Clothing store",
        "address": "Shop No 210 2nd Floor, Packages Mall, 32 Walton Rd, Lahore, Pakistan",
        "phone": "+92 42 111 738 738",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Visit for good quality stuff\""
    },
    {
        "position": 7,
        "title": "Sapphire - Mall of Sialkot",
        "place_id": "ChIJ7_fFiRGrHDkR9K6oGnqtLtk",
        "data_id": "0x3a1cab118945f7ef:0xd92eadd7a6a8aef4",
        "data_cid": "1.56375E+19",
        "gps_coordinates": {
            "latitude": 32.4949722,
            "longitude": 74.5352778
        },
        "rating": 4.3,
        "reviews": 462,
        "type": "Clothing store",
        "address": "Mall of Sialkot, 2nd Floor, Shop # 272, Sialkot Bypass, Sialkot, Pakistan",
        "phone": "+92 52 3560082",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Good quality but expensive\""
    },
    {
        "position": 8,
        "title": "Sapphire - Giga Mall Islamabad",
        "place_id": "ChIJW0CQfqe_3zgR_Dh9cI9jUdw",
        "data_id": "0x38dfaf7e9a9040bb:0xdc5163f0706f38fc",
        "data_cid": "1.58682E+19",
        "gps_coordinates": {
            "latitude": 33.6509583,
            "longitude": 72.9802778
        },
        "rating": 4.2,
        "reviews": 436,
        "type": "Clothing store",
        "address": "Shop No. 1206, First Floor, Giga Mall DHA Phase II, Islamabad, Pakistan",
        "phone": "+92 51 2701510",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Nice collection for young boys and girls\""
    },
    {
        "position": 9,
        "title": "Sapphire - Dolmen Mall Karachi",
        "place_id": "ChIJkYPBYrfMsz4RB5TcqNPJzks",
        "data_id": "0x3eb3cc62c1c18391:0x4bce9dd3a8dc9407",
        "data_cid": "5.47651E+18",
        "gps_coordinates": {
            "latitude": 24.8216667,
            "longitude": 67.0613889
        },
        "rating": 4.1,
        "reviews": 1087,
        "type": "Clothing store",
        "address": "Dolmen Mall, Ground Floor, 103-C/1, Block 4 SMCHS, Karachi, Pakistan",
        "phone": "+92 21 34820689",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Branded clothes but expensive\""
    },
    {
        "position": 10,
        "title": "Sapphire - Lucky One Mall Karachi",
        "place_id": "ChIJd3qQLr7Isz4R9wBY7oAaHWs",
        "data_id": "0x3ec8be2e906a7b77:0x6b1d1a80ee5800f7",
        "data_cid": "7.74421E+18",
        "gps_coordinates": {
            "latitude": 24.8802778,
            "longitude": 67.1319444
        },
        "rating": 4.2,
        "reviews": 1458,
        "type": "Clothing store",
        "address": "Shop G34, Ground Floor, Lucky One Mall, Rashid Minhas Rd, Gulshan-e-Johar, Karachi, Pakistan",
        "phone": "+92 21 34820089",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Good for formal and casual wear\""
    },
    {
        "position": 11,
        "title": "Sapphire - Fortress Square Mall Lahore",
        "place_id": "ChIJww0wc7OZETEK8YXqXm7YWF0",
        "data_id": "0x3991b6b1734d0dc3:0x5d5b98eee6ea8590",
        "data_cid": "6.72624E+18",
        "gps_coordinates": {
            "latitude": 31.4469444,
            "longitude": 74.2830556
        },
        "rating": 4.4,
        "reviews": 589,
        "type": "Clothing store",
        "address": "Shop # G-27, Ground Floor, Fortress Square Mall, Block A-1 Gulberg 3, Lahore, Pakistan",
        "phone": "+92 42 35754306",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Great quality but pricey\""
    },
    {
        "position": 12,
        "title": "Sapphire - Emporium Mall Lahore",
        "place_id": "ChIJK-vCROmZETkRPdMnl_qEQC4",
        "data_id": "0x3991994e44c2eb2b:0x2e40847fab2943b7",
        "data_cid": "3.34072E+18",
        "gps_coordinates": {
            "latitude": 31.4719444,
            "longitude": 74.3886111
        },
        "rating": 4.3,
        "reviews": 1654,
        "type": "Clothing store",
        "address": "Shop # 129, First Floor Emporium Mall, Abdullah Haroon Rd, Johar Town, Lahore, Pakistan",
        "phone": "+92 42 111 738 738",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Good collection and quality\""
    },
    {
        "position": 13,
        "title": "Sapphire - M.M Alam Road",
        "place_id": "ChIJI0V7mPKTETkRgb4HQV6kn18",
        "data_id": "0x399031f298d57b23:0x5f9f9e5e4107be81",
        "data_cid": "6.89975E+18",
        "gps_coordinates": {
            "latitude": 31.4825,
            "longitude": 74.4086111
        },
        "rating": 4.1,
        "reviews": 2178,
        "type": "Clothing store",
        "address": "Shop No. 40-C, M.M Alam Rd, Gulberg III, Lahore, Pakistan",
        "phone": "+92 42 35754309",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Expensive but quality is good\""
    },
    {
        "position": 14,
        "title": "Sapphire - Port Grand Karachi",
        "place_id": "ChIJocsV_VrMsz4RTVL8WTX99aQ",
        "data_id": "0x3eb3cc5affe1cba1:0xa4f5f6359bfc524d",
        "data_cid": "1.18933E+19",
        "gps_coordinates": {
            "latitude": 24.8177778,
            "longitude": 67.0280556
        },
        "rating": 4.2,
        "reviews": 864,
        "type": "Clothing store",
        "address": "Shop 215, Port Grand, Opposite KPT, Near MQM Head Office Azizabad Karachi, Pakistan",
        "phone": "+92 21 32566800",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Good quality fabrics\""
    },
    {
        "position": 15,
        "title": "Sapphire - Mall One Karachi",
        "place_id": "ChIJJ_d5-PPJsz4RUxwrCMIIWR8",
        "data_id": "0x3eb3c9fcf9f97727:0x1f59082c82b1c53",
        "data_cid": "5.48582E+17",
        "gps_coordinates": {
            "latitude": 24.8666667,
            "longitude": 67.1025
        },
        "rating": 4.1,
        "reviews": 729,
        "type": "Clothing store",
        "address": "Shop G-26, Ground Floor, Mall One, C.A Area Karachi, Pakistan",
        "phone": "+92 21 34820089",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Nice collection for ladies\""
    },
    {
        "position": 16,
        "title": "Sapphire - Atrium Mall Karachi",
        "place_id": "ChIJVSjL_8Tosz4R3wIwYJIvW_o",
        "data_id": "0x3eb3a8c4fc4cb955:0xfa5b2f9260301df",
        "data_cid": "1.11821E+18",
        "gps_coordinates": {
            "latitude": 24.8491667,
            "longitude": 67.0627778
        },
        "rating": 4.3,
        "reviews": 589,
        "type": "Clothing store",
        "address": "Ground Floor, Atrium Mall, Plot 83/1-5, Block 13-C Gulshan-e-Iqbal, Karachi, Pakistan",
        "phone": "+92 21 34820089",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Great for special occasions\""
    },
    {
        "position": 17,
        "title": "Sapphire - Forum Mall Karachi",
        "place_id": "ChIJXfTKfuXLsz4Rz6fBp4XK0g8",
        "data_id": "0x3eb3cb7ee6ca54ff:0x0fd2cac585c1a7cf",
        "data_cid": "1.13149E+18",
        "gps_coordinates": {
            "latitude": 24.8152778,
            "longitude": 67.0691667
        },
        "rating": 4.1,
        "reviews": 567,
        "type": "Clothing store",
        "address": "Shop G-35, Ground Floor, Forum Mall, Khayaban-e-Jami, Block 9 Clifton, Karachi, Pakistan",
        "phone": "+92 21 35880621",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Quality clothing but overpriced\""
    },
    {
        "position": 18,
        "title": "Sapphire - Millennium Mall Karachi",
        "place_id": "ChIJc1btwdHJsz4R2QlYoL8SdHE",
        "data_id": "0x3eb3c9d1c1bd6673:0x7174249f608249d9",
        "data_cid": "8.17953E+18",
        "gps_coordinates": {
            "latitude": 24.8561111,
            "longitude": 67.0830556
        },
        "rating": 4.2,
        "reviews": 643,
        "type": "Clothing store",
        "address": "Shop G-21, Ground Floor, Millennium Mall, Rashid Minhas Rd, Gulshan-e-Iqbal, Karachi, Pakistan",
        "phone": "+92 21 34820089",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Good variety and quality\""
    },
    {
        "position": 19,
        "title": "Sapphire - Chase Mall Karachi",
        "place_id": "ChIJl4ZTQq_Jsz4RggJ0tZmFJwE",
        "data_id": "0x3eb3cf42ab5386a3:0x0127859566742082",
        "data_cid": "8.14097E+16",
        "gps_coordinates": {
            "latitude": 24.8544444,
            "longitude": 67.1175
        },
        "rating": 4,
        "reviews": 394,
        "type": "Clothing store",
        "address": "Shop G-33, Ground Floor, Chase Mall, Shahrah-e-Quaideen, Gulshan-e-Iqbal, Karachi, Pakistan",
        "phone": "+92 21 34820089",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Good quality but expensive\""
    },
    {
        "position": 20,
        "title": "Sapphire - Hyperstar Karachi",
        "place_id": "ChIJ07xW2OTJsz4ReDEBPK5SqQo",
        "data_id": "0x3eb3c9e4d856bcd3:0x0aa952aef2c01378",
        "data_cid": "7.74117E+17",
        "gps_coordinates": {
            "latitude": 24.8569444,
            "longitude": 67.0827778
        },
        "rating": 4.1,
        "reviews": 489,
        "type": "Clothing store",
        "address": "Unit 1-60A, Hyperstar, Millennium Mall, Rashid Minhas Rd, Gulshan-e-Iqbal, Karachi, Pakistan",
        "phone": "+92 21 34820089",
        "website": "http://sapphireonline.pk/",
        "extensions": {
            "service_options": "In-store pickup"
        },
        "service_options": {
            "in_store_shopping": null,
            "in_store_pickup": true
        },
        "user_review": "\"Good collection of clothing\""
    }
] 