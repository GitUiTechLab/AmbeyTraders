export type upperNavbarDropdownMenuType = {
    id: number;
    label: string;
    path?: string;
    icon: any;
}

type category = {
    value: string | number,
    name: string
}

export type FilterByCategoryProps = {
    headerName: string;
    categories: category[];
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectedCategory?: any;
}

export type upperNavbarDropdownMenu = upperNavbarDropdownMenuType[]

export type PersonDetails = {
    name: string;
    phone_no: number
}

type ProductCardProps = {
    image: any;
    header: string;
    subheader?: string;
    rating: string;
    price: string;
    mainCategory: string;
    category: string;
    subCategory: string;
    imageWidth: number;
    imageHeight: number;
    tag?: string;
    discount?: number
}

export type ProductCardContainerPeops = {
    item: ProductCardProps;
}