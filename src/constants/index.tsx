import { ProfileIcon, YourOrderIcon, AddressIcon, ContactUsIcon, LogoutIcon, ShampooImage, BournvitaImage, ShampooImage1, DaburRedImage, EnoImage, FaceWashImage, DailyDealsProductImage, FacewashProductImage, NiveaProductImage, HimalayaProductImage, PhoneIcon, MailIcon, AddressIcon1, BestSellerPeroductImage, AyurHerbalShampooImage, AyurCleansingProductImage, AllOutProductImage, CloseUpProductImage, BounvitaProductImage, ClinicPlusProductImage, DenvarProductImage, SilkProductImage, DaburGulabariProductImage, EnoFruitSaltProductImage, FariAndLovelyProductImage, FemProductImage, GarnierMenFaceWash, HimalayaBabyShampoo, HimalayaBabyShampooProductImage, HorlicksProductImage, JhonsonBabyProductImage, FiamaGelBar, GarnierBlackProductImage, DaburLalTelProductImage, EngagePerfumeProductImage, HimalayaBabyLotion, JoyBodyLotion, NiharAmlaProductImage } from "../assets"
import { upperNavbarDropdownMenu, upperNavbarDropdownMenuType } from "../types"


export const upperNavbarDropdownContent: upperNavbarDropdownMenu = [
    {
        id: 1,
        label: "Your Profile",
        path: "/profile",
        icon: ProfileIcon
    },
    {
        id: 2,
        label: "Your Orders",
        path: "/orders",
        icon: YourOrderIcon
    },
    {
        id: 3,
        label: "Manage Address",
        path: "/manage-address",
        icon: AddressIcon
    },
    {
        id: 4,
        label: "Contact Us",
        path: "/contact-us",
        icon: ContactUsIcon

    },
    {
        id: 5,
        label: "Logout",
        icon: LogoutIcon
    }
]

export const navbarContent = [
    {
        id: 1,
        label: "Home",
        path: "/"
    },
    {
        id: 2,
        label: "Bulk Details",
        path: "/bulk-details"
    },
    {
        id: 3,
        label: "Products Category",
        path: "/products-category",
        nestedLabelHeader: "Products A To Z",
        nestedLabel: [
            {
                label: "Face Care",
                path: "/face-care"
            },
            {
                label: "Body Care",
                path: "/body-care"
            },
            {
                label: "Baby Care",
                path: "/baby-care"
            },
            {
                label: "Food Items",
                path: "/food-items"
            },
            {
                label: "Grocery Items",
                path: "/grocery-items"
            }
        ]
    },
    {
        id: 4,
        label: "New Arrivals",
        path: "/new-arrivals"
    },
    {
        id: 5,
        label: "Contact Us",
        path: "/contact-us"
    }
]

export const HowToShopSteps = [
    {
        id: 1,
        title: "Search Products Easily",
        description: "Use the search bar to find items.",
    },
    {
        id: 2,
        title: "Browse Categories",
        description: "Explore sections for more options.",
    },
    {
        id: 3,
        title: "Use Filters & Sorting",
        description: "Narrow choices by price, brand, etc.",
    },
    {
        id: 4,
        title: "Add to Cart",
        description: "Select items and add to your cart.",
    },
    {
        id: 5,
        title: "Proceed to Checkout",
        description: "Review cart, apply promo codes.",
    },
    {
        id: 6,
        title: "Enter Details & Pay",
        description: "Provide shipping info, make payment.",
    },
];

export const allProductsContent = [
    {
        image: ShampooImage,
        header: "Ayur Shampoo"
    },
    {
        image: BournvitaImage,
        header: "Bournvita"
    },
    {
        image: ShampooImage1,
        header: "Clinic Plus"
    },
    {
        image: DaburRedImage,
        header: "Dabur Lal Tail"
    },
    {
        image: EnoImage,
        header: "Eno Fruit Salt"
    }
]

const newArrivalContent = {
    image: FaceWashImage,
    header: "Mamaearth Rice water & Niacinamde for Glass Skin Face...",
    subheader: "100ml",
    rating: "4.3",
    price: "₹1350",
    imageWidth: 78,
    imageHeight: 213
}

const dailyDealsSingleContent = {
    image: DailyDealsProductImage,
    header: "Mamaearth Rice water & Niacinamde for Glass Skin Face...",
    subheader: "100ml",
    rating: "4.3",
    price: "₹1350",
    imageWidth: 191,
    imageHeight: 218
}

const moreToExploreSingleContent = {
    image: FacewashProductImage,
    header: "Mamaearth Rice water & Niacinamde for Glass Skin Face...",
    subheader: "100ml",
    rating: "4.3",
    price: "₹1350",
    imageWidth: 112,
    imageHeight: 218
}

const bestSellersSingleProductContent = {
    image: BestSellerPeroductImage,
    header: "Himalaya Purifying Neem Face Wash",
    subheader: "250ml",
    rating: "5.0",
    price: "390",
    tag: "Best Seller",
    imageWidth: 78,
    imageHeight: 213
}

export const NewArrivalContent = [
    {
        headerName: "New Arrival",
        content: Array(4).fill(null).map(() => ({ ...newArrivalContent })),
        buttonHeader: "Explore New Arrivals",
        path: "/new-arrivals"
    }
]

export const BestSellerContent = [
    {
        headerName: "Best Seller",
        content: Array(4).fill(null).map(() => ({ ...bestSellersSingleProductContent })),
        buttonHeader: "Explore Best Sellers",
        path: "/best-sellers",

    }
]

export const DailyDealsContent = [
    {
        headerName: "Daily Deals",
        content: Array(4).fill(null).map(() => ({ ...dailyDealsSingleContent })),
        buttonHeader: "Explore Best Deals",
        path: "/daily-deals"
    }
]

export const MoreToExploreContent = [
    {
        headerName: "More to Explore",
        content: Array(4).fill(null).map(() => ({
            ...moreToExploreSingleContent
        })),
        buttonHeader: "Explore More",
        path: "/more-to-explore"
    }
]

export const RecenetlyViewedContent = [
    {
        headerName: "Recently Viewed",
        content: [
            {
                image: NiveaProductImage,
                header: "Mamaearth Rice water & Niacinamde for Glass Skin Face...",
                subheader: "100ml",
                rating: "4.3",
                price: "₹1350",
                imageWidth: 78,
                imageHeight: 213

            },
            {
                image: HimalayaProductImage,
                header: "Himalaya Herbals Neem Face Wash for Acne Prone Skin...",
                subheader: "100ml",
                rating: "4.5",
                price: "₹250",
                imageWidth: 78,
                imageHeight: 213
            },
            {
                image: FacewashProductImage,
                header: "Mamaearth Rice water & Niacinamde for Glass Skin Face...",
                subheader: "100ml",
                rating: "4.3",
                price: "₹1350",
                imageWidth: 112,
                imageHeight: 218
            },
            {
                image: DailyDealsProductImage,
                header: "Mamaearth Rice water & Niacinamde for Glass Skin Face...",
                subheader: "100ml",
                rating: "4.3",
                price: "₹1350",
                imageWidth: 191,
                imageHeight: 218
            }
        ]
    }
]

export const testimonialsContent = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,",
        name: "Maniya Smith",
        location: "Hanumangarh, Rajasthan"
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure commodo consequat. Duis aute irure",
        name: "Taniya Smith",
        location: "Jaipur, Rajasthan"
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
        name: "Saanvi Smith",
        location: "Kota, Rajasthan"
    }
];

export const footerLeftContent = [
    {
        icon: PhoneIcon,
        text: "203-638-8150"
    },
    {
        icon: MailIcon,
        text: "info@cgn.com"
    },
    {
        icon: AddressIcon1,
        text: "7400-E Pinnacle Peak Road, Suite 204 Scottsdale, AZ 85255"

    }
]

export const footerContentRightOne = [
    {
        header: "Lorem ipsum",
        subheader: [
            {
                name: "Lorem ipsum",
                link: "/lorem-ipsum"
            },
            {
                name: "Aigile Messaging",
                link: "/aigile-messaging"
            },
            {
                name: "Choose Message Optimisation",
                link: "/"
            },
            {
                name: "Choose Vis Aid",
                link: "/"
            },
            {
                name: "Choose Message Recall",
                link: "/"
            },
            {
                name: "KRITSL Scoreboard",
                link: "/"
            },
            {
                name: "KRISTL Predictive Message Testing",
                link: "/"
            }
        ]
    },
]

export const footerContentRightMiddleOne = [
    {
        header: "Lorem ipsum",
        subheader: [
            {
                name: "Content Creation",
                path: "/content-creation"
            },
            {
                name: "Market Research",
                path: "/market-research"
            },
            {
                name: "Machine Learning",
                path: "/machine-learning"
            }
        ]
    }
]

export const footerContentMiddleTwo = [
    {
        header: "Lorem ipsum",
        subheader: [
            {
                name: "Phase 1-Phase 2",
                path: "/"
            },
            {
                name: "Phase 3- Launch",
                path: "/"
            },
            {
                name: "Post Launch- LOE",
                path: "/"
            }
        ]
    }
]

export const footerContentRightTwo = [
    {
        header: "Lorem ipsum",
        subheader: [
            {
                name: "Home",
                path: "/"
            },
            {
                name: "Heuristic Science Institute",
                path: "/"
            },
            {
                name: "Knowledge Center",
                path: "/"
            },
            {
                name: "News",
                path: "/"
            },
            {
                name: "About",
                path: "/"
            },
            {
                name: "Contact",
                path: "/"
            },
            {
                name: "People",
                path: "/"
            },
            {
                name: "Pay It Forward",
                path: "/"
            }
        ]
    }

]

export const AllProductsContent = [
    {
        image: AyurHerbalShampooImage,
        header: "Ayur Herbal Shampoo Amla & Shikakai With Reetha ",
        subheader: "500ml",
        rating: "5.0",
        price: "₹210",
        mainCategory: "all",
        category: "body-care",
        subCategory: "shampoo",
        imageWidth: 78,
        imageHeight: 213
    },
    {
        image: AyurCleansingProductImage,
        header: "Ayur Herbal Deep Pore Cleansing Milk",
        subheader: "100ml",
        rating: "5.0",
        price: "₹80",
        mainCategory: "all",
        category: "face-care",
        subCategory: "scrubs",
        imageWidth: 78,
        imageHeight: 213,
        tag: "Best Seller"
    },
    {
        image: AllOutProductImage,
        header: "All Out Ultra Power+ Slider Mosquito Repellent Machine",
        rating: "5.0",
        price: "₹100",
        mainCategory: "all",
        category: "grocery-items",
        subCategory: "mosquito-repellent",
        imageWidth: 141,
        imageHeight: 224,
        tag: "New Launch"
    },
    {
        image: BounvitaProductImage,
        header: "BOURNVITA Cadbury Chocolate",
        subheader: "500ml",
        rating: "5.0",
        price: "₹255",
        mainCategory: "all",
        category: "grocery-items",
        subCategory: "energy-drinks",
        imageWidth: 141,
        imageHeight: 224
    },
    {
        image: CloseUpProductImage,
        header: "Closeup Everfresh+ Red Hot Gel Toothpaste",
        subheader: "150ml",
        rating: "5.0",
        price: "₹130",
        mainCategory: "all",
        category: "grocery-item",
        subCategory: "toothpaste",
        imageWidth: 141,
        imageHeight: 224
    },
    {
        image: ClinicPlusProductImage,
        header: "Clinic Plus+ Strong & Long Health Shampoo ",
        subheader: "355ml",
        rating: "5.0",
        price: "₹285",
        mainCategory: "all",
        category: "body-care",
        subCategory: "shampoo",
        imageWidth: 78,
        imageHeight: 213
    },
    {
        image: DenvarProductImage,
        header: "Denver Deodorant Body Spray Caliber and Imperial for Men, ",
        subheader: "165ml",
        rating: "5.0",
        price: "₹230",
        mainCategory: "all",
        category: "body-care",
        subCategory: "deodorants",
        imageWidth: 93,
        imageHeight: 213
    },
    {
        image: SilkProductImage,
        header: "Dairy Milk Silk Chocolate",
        subheader: "200g",
        rating: "5.0",
        price: "₹60",
        mainCategory: "all",
        category: "grocery-items",
        subCategory: "chocolates",
        imageWidth: 141,
        imageHeight: 231
    },
    {
        image: DaburGulabariProductImage,
        header: "Dabur Gulabari ",
        subheader: "200ml",
        rating: "5.0",
        price: "₹60",
        mainCategory: "all",
        category: "face-care",
        subCategory: "scrubs",
        imageWidth: 78,
        imageHeight: 213
    },
    {
        image: EnoFruitSaltProductImage,
        header: "Eno Fruit Salt",
        rating: "5.0",
        price: "₹20",
        mainCategory: "all",
        category: "grocery-items",
        subCategory: "digestives",
        imageWidth: 141,
        imageHeight: 224
    },
    {
        image: FariAndLovelyProductImage,
        header: "Fair & Lovely Advanced Multi Vitamin Face Cream",
        subheader: "50g",
        rating: "5.0",
        price: "₹125",
        mainCategory: "all",
        category: "face-care",
        subCategroy: "face-wash",
        imageWidth: 78,
        imageHeight: 213
    },
    {
        image: FemProductImage,
        header: "FEM Fairness (Turmeric&Milk) Crème Bleach-24G",
        subheader: "40ml",
        rating: "5.0",
        price: "₹80",
        mainCategory: "all",
        category: "face-care",
        subCategory: "face-wash",
        imageWidth: 78,
        imageHeight: 213
    },
    {
        image: GarnierMenFaceWash,
        header: "Garnier Men Acno Fight Anti-Pimple Facewash,",
        subheader: "60ml",
        rating: "5.0",
        price: "₹160",
        mainCategory: "all",
        category: "face-care",
        subCategory: "face-wash",
        imageWidth: 78,
        imageHeight: 213
    },
    {
        image: HimalayaBabyShampoo,
        header: "Himalaya Shampoo For Baby",
        subheader: "200ml",
        rating: "5.0",
        price: "₹210",
        mainCategory: "all",
        category: "baby-care",
        subCategory: "shampoo",
        imageWidth: 78,
        imageHeight: 213
    },
    {
        image: HimalayaBabyShampooProductImage,
        header: "Himalaya Baby Shampoo",
        subheader: "200ml",
        rating: "5.0",
        price: "₹210",
        mainCategory: "all",
        category: "baby-care",
        subCategory: "shampoo",
        imageWidth: 78,
        imageHeight: 213
    },
    {
        image: HorlicksProductImage,
        header: "Horlicks Nutrition Drink Jar|500ml ",
        rating: "5.0",
        price: "₹294",
        mainCategory: "all",
        category: "food-items",
        subCategory: "energy-drinks",
        imageWidth: 141,
        imageHeight: 224
    },
    {
        image: JhonsonBabyProductImage,
        header: " Johnson & Johnson Johnson's Baby Powder",
        subheader: "50ml",
        price: "₹65",
        mainCategory: "all",
        subCategory: "baby-care",
        category: "baby-care",
        imageWidth: 78,
        imageHeight: 213
    },
    {
        image: FiamaGelBar,
        header: "Fiama Multivariant Gel Bar ",
        subheader: "5PCS",
        price: "₹399",
        mainCategory: "all",
        category: "body-care",
        subCategory: "soaps",
        imageWidth: 141,
        imageHeight: 224
    },
    {
        image: GarnierBlackProductImage,
        header: "Black Cream Garnier Hair Color, Pouch",
        rating: "5.0",
        price: "₹45",
        mainCategory: "all",
        category: "body-care",
        subCategory: "DYE",
        imageWidth: 136,
        imageheight: 195
    },
    {
        image: DaburLalTelProductImage,
        header: "Dabur Lal Tail",
        subheader: "50ml",
        rating: "5.0",
        price: "₹45",
        mainCategory: "all",
        category: "baby-care",
        subCategory: "baby-care",
        imageWidth: 78,
        imageHeight: 213
    },
    {
        image: EngagePerfumeProductImage,
        header: "Engage ON Cool Marine Pocket Perfume For Men,",
        rating: "5.0",
        price: "₹60",
        mainCategory: "all",
        category: "body-care",
        subCategory: "deodorants",
        imageWidth: 78,
        imageHeight: 213,
        discount: 35
    },
    {
        image: HimalayaBabyLotion,
        header: "Himalaya Lotion For Baby",
        subheader: "200ml",
        rating: "5.0",
        price: "₹60",
        mainCategory: "all",
        category: "baby-care",
        subCategory: "baby-care",
        imageWidth: 78,
        imageHeight: 213
    },
    {
        image: JoyBodyLotion,
        header: "Joy Honey & Almonds Advanced Nourishing Body Lotion",
        rating: "5.0",
        subheader: "40ml",
        price: "₹40",
        mainCategory: "all",
        category: "body-care",
        subCategory: "face-creams",
        imageWidth: 78,
        imageHeight: 213
    }

]

export const DailyDealsPageContent = [
    {
        image: AyurCleansingProductImage,
        header: "Ayur Herbal Deep Pore Cleansing Milk",
        subheader: "100ml",
        rating: "5.0",
        price: "₹80",
        mainCategory: "all",
        category: "face-care",
        subCategory: "scrubs",
        imageWidth: 78,
        imageHeight: 213,
        tag: "Best Seller"

    },
    {
        image: FemProductImage,
        header: "FEM Fairness (Turmeric&Milk) Crème Bleach-24G",
        subheader: "40ml",
        rating: "5.0",
        price: "₹80",
        mainCategory: "all",
        category: "face-care",
        subCategory: "face-wash",
        imageWidth: 78,
        imageHeight: 213,
        tag: "Best Seller"
    },
    {
        image: DaburGulabariProductImage,
        header: "Dabur Gulabari ",
        subheader: "200ml",
        rating: "5.0",
        price: "₹60",
        mainCategory: "all",
        category: "face-care",
        subCategory: "scrubs",
        imageWidth: 78,
        imageHeight: 213,
        discount: 30,
        tag: "Best Seller"
    }

]

export const NewArrivalsPageContent = [
    {
        image: AyurCleansingProductImage,
        header: "Ayur Herbal Deep Pore Cleansing Milk",
        subheader: "100ml",
        rating: "5.0",
        price: "₹80",
        mainCategory: "all",
        category: "face-care",
        subCategory: "scrubs",
        imageWidth: 78,
        imageHeight: 213,
        tag: "Best Seller"
    },
    {
        image: FemProductImage,
        header: "FEM Fairness (Turmeric&Milk) Crème Bleach-24G",
        subheader: "40ml",
        rating: "5.0",
        price: "₹80",
        mainCategory: "all",
        category: "face-care",
        subCategory: "face-wash",
        imageWidth: 78,
        imageHeight: 213,
        tag: "Best Seller"
    },
    {
        image: DaburGulabariProductImage,
        header: "Dabur Gulabari ",
        subheader: "200ml",
        rating: "5.0",
        price: "₹60",
        mainCategory: "all",
        category: "face-care",
        subCategory: "scrubs",
        imageWidth: 78,
        imageHeight: 213,
        tag: "Best Seller"
    }
]

export const BestSellerPageContent = [
    {
        image: JoyBodyLotion,
        header: "Joy Honey & Almonds Advanced Nourishing Body Lotion",
        rating: "5.0",
        subheader: "40ml",
        price: "₹40",
        mainCategory: "all",
        category: "body-care",
        subCategory: "face-creams",
        imageWidth: 78,
        imageHeight: 213,
        discount: 30,
        tag: "Best Seller"
    },
    {
        image: DenvarProductImage,
        header: "Denver Deodorant Body Spray Caliber and Imperial for Men, ",
        subheader: "165ml",
        rating: "5.0",
        price: "₹230",
        mainCategory: "all",
        category: "body-care",
        subCategory: "deodorants",
        imageWidth: 93,
        imageHeight: 213,
        tag: "Best Seller"
    },
    {
        image: AyurCleansingProductImage,
        header: "Ayur Herbal Deep Pore Cleansing Milk",
        subheader: "100ml",
        rating: "5.0",
        price: "₹80",
        mainCategory: "all",
        category: "face-care",
        subCategory: "scrubs",
        imageWidth: 78,
        imageHeight: 213,
        tag: "Best Seller"
    },
    {
        image: NiharAmlaProductImage,
        header: "Nihar Shanti Amla Badam Hair Oil",
        subheader: "28ml",
        price: "₹10",
        mainCategory: "all",
        category: "body-care",
        subCategory: "hair-oils",
        imageWidth: 78,
        imageHeight: 213,
        tag: "Best Seller"
    },
    {
        image: AyurCleansingProductImage,
        header: "Ayur Herbal Deep Pore Cleansing Milk",
        subheader: "100ml",
        rating: "5.0",
        price: "₹80",
        mainCategory: "all",
        category: "face-care",
        subCategory: "scrubs",
        imageWidth: 78,
        imageHeight: 213,
        tag: "Best Seller"
    },
    {
        image: FemProductImage,
        header: "FEM Fairness (Turmeric&Milk) Crème Bleach-24G",
        subheader: "40ml",
        rating: "5.0",
        price: "₹80",
        mainCategory: "all",
        category: "face-care",
        subCategory: "face-wash",
        imageWidth: 156,
        imageHeight: 213,
        tag: "Best Seller"
    },
    {
        image: DaburGulabariProductImage,
        header: "Dabur Gulabari ",
        subheader: "200ml",
        rating: "5.0",
        price: "₹60",
        mainCategory: "all",
        category: "face-care",
        subCategory: "scrubs",
        imageWidth: 78,
        imageHeight: 213,
        tag: "Best Seller"
    }
]


export const categories = [
    { name: 'Products A -Z', value: 'all' },
    { name: 'Face Care', value: 'face-care' },
    { name: 'Body Care', value: 'body-care' },
    { name: 'Baby Care', value: 'baby-care' },
    { name: 'Food Items', value: 'food-items' },
    { name: 'Grocery Items', value: 'grocery-items' },
];

export const discounts = [
    { name: '10% and above', value: "10" },
    { name: '20% and above', value: "20" },
    { name: '30% and above', value: "30" },
    { name: '40% and above', value: "40" },
    { name: '50% and above', value: "50" },
    { name: '60% and above', value: "60" },
];

export const products = [
    { name: 'Baby Lotion', value: 'baby-lotion' },
    { name: 'Chocolates', value: 'chocolates' },
    { name: 'Deodorants', value: 'deodorants' },
    { name: 'Detergents', value: 'detergents' },
    { name: 'DYE', value: 'dye' },
    { name: 'Energy Drinks', value: 'energy-drinks' },
    { name: 'Face Creams', value: 'face-creams' },
    { name: 'Facewash', value: 'facewash' },
    { name: 'Hair Oils', value: 'hair-oils' },
    { name: 'Health & Nutrition', value: 'health-nutrition' },
    { name: 'Mosquito Repellent', value: 'mosquito-repellent' },
    { name: 'Powders', value: 'powders' },
    { name: 'Room Sprays', value: 'room-sprays' },
    { name: 'Scrubs', value: 'scrubs' },
    { name: 'Shampoo', value: 'shampoo' },
    { name: 'Shaving Product', value: 'shaving-product' },
    { name: 'Soaps', value: 'soaps' },
    { name: 'Tea & Coffee', value: 'tea-coffee' },
    { name: 'Toothbrush', value: 'toothbrush' },
    { name: 'Toothpaste', value: 'toothpaste' },
];