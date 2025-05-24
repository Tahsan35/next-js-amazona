import {
  CartSchema,
  OrderInputSchema,
  OrderItemSchema,
  ProductInputSchema,
  ReviewInputSchema,
  ShippingAddressSchema,
  UserInputSchema,
  UserNameSchema,
  UserSignInSchema,
  UserSignUpSchema,
} from "@/lib/validator";
import { z } from "zod";

export type IReviewInput = z.infer<typeof ReviewInputSchema>;
export type IReviewDetails = IReviewInput & {
  _id: string;
  createdAt: string;
  user: {
    name: string;
  };
};

// product
export type IProductInput = z.infer<typeof ProductInputSchema>;

export type Data = {
  settings: ISettingInput[];
  webPages: IWebPageInput[];
  users: IUserInput[];
  products: IProductInput[];
  reviews: {
    title: string;
    rating: number;
    comment: string;
  }[];
  headerMenus: {
    name: string;
    href: string;
  }[];
  carousels: {
    image: string;
    url: string;
    title: string;
    buttonCaption: string;
    isPublished: boolean;
  }[];
};

// Order
export type IOrderInput = z.infer<typeof OrderInputSchema>;
export type IOrderList = IOrderInput & {
  _id: string;
  user: {
    name: string;
    email: string;
  };
  createdAt: Date;
};

export type OrderItem = z.infer<typeof OrderItemSchema>;
export type Cart = z.infer<typeof CartSchema>;
// shipping address
export type ShippingAddress = z.infer<typeof ShippingAddressSchema>;

// user
export type IUserInput = z.infer<typeof UserInputSchema>;
export type IUserSignIn = z.infer<typeof UserSignInSchema>;
export type IUserSignUp = z.infer<typeof UserSignUpSchema>;
export type IUserName = z.infer<typeof UserNameSchema>;

// webpage
export type IWebPageInput = z.infer<typeof WebPageInputSchema>;

// setting
export type ICarousel = z.infer<typeof CarouselSchema>;

// Define interfaces for nested structures if not already defined
interface ICommonSettings {
  pageSize: number;
  isMaintenanceMode: boolean;
  freeShippingMinPrice: number;
  defaultTheme: string;
  defaultColor: string;
}

interface ISiteSettings {
  name: string;
  url: string;
  logo: string;
  slogan: string;
  description: string;
  keywords: string;
  email: string;
  phone: string;
  author: string;
  copyright: string;
  address: string;
}

interface ICarouselItem {
  title: string;
  url: string;
  image: string;
  buttonCaption: string;
}

interface IAvailableLanguage {
  name: string;
  code: string;
}

interface IAvailableCurrency {
  name: string;
  code: string;
  convertRate: number;
  symbol: string;
}

interface IAvailablePaymentMethod {
  name: string;
  commission: number;
}

interface IAvailableDeliveryDate {
  name: string;
  daysToDeliver: number;
  shippingPrice: number;
  freeShippingMinPrice: number;
}

// Update ISettingInput to match the Mongoose schema
export type ISettingInput = {
  common: ICommonSettings;
  site: ISiteSettings;
  carousels: ICarouselItem[];
  availableLanguages: IAvailableLanguage[];
  defaultLanguage: string;
  availableCurrencies: IAvailableCurrency[];
  defaultCurrency: string;
  availablePaymentMethods: IAvailablePaymentMethod[];
  defaultPaymentMethod: string;
  availableDeliveryDates: IAvailableDeliveryDate[];
  defaultDeliveryDate: string;
};
export type SiteLanguage = z.infer<typeof SiteLanguageSchema>;
export type SiteCurrency = z.infer<typeof SiteCurrencySchema>;
export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;
export type DeliveryDate = z.infer<typeof DeliveryDateSchema>;

// Ensure SettingInputSchema in lib/validator.ts also aligns if it's being used
// For example, if you are using Zod for validation:
// import { z } from 'zod';
// export const SettingInputSchema = z.object({
//   common: z.object({ ... }),
//   site: z.object({ ... }),
//   // ... and so on for all properties
// });

export type ClientSetting = ISettingInput & {
  currency: string;
};
export type SiteLanguage = z.infer<typeof SiteLanguageSchema>;
export type SiteCurrency = z.infer<typeof SiteCurrencySchema>;
export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;
export type DeliveryDate = z.infer<typeof DeliveryDateSchema>;
