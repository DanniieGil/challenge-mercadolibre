export interface GetListProductsDto {
  siteID?:                 SiteID;
  countryDefaultTimeZone?: string;
  query?:                  string;
  paging?:                 Paging;
  results?:                Result[];
  sort?:                   Sort;
  availableSorts?:         Sort[];
  filters?:                Filter[];
  availableFilters?:       AvailableFilter[];
}

export interface AvailableFilter {
  id?:     string;
  name?:   string;
  type?:   string;
  values?: AvailableFilterValue[];
}

export interface AvailableFilterValue {
  id?:      string;
  name?:    string;
  results?: number;
}

export interface Sort {
  id?:   string;
  name?: string;
}

export interface Filter {
  id?:     string;
  name?:   string;
  type?:   string;
  values?: FilterValue[];
}

export interface FilterValue {
  id?:           string;
  name?:         string;
  pathFromRoot?: Sort[];
}

export interface Paging {
  total?:          number;
  primaryResults?: number;
  offset?:         number;
  limit?:          number;
}

export interface Result {
  id?:                  string;
  siteID?:              SiteID;
  title?:               string;
  seller?:              Seller;
  price?:               number;
  prices?:              Prices;
  salePrice?:           null;
  currencyID?:          CurrencyID;
  availableQuantity?:   number;
  soldQuantity?:        number;
  buyingMode?:          BuyingMode;
  listingTypeID?:       ListingTypeID;
  stopTime?:            Date;
  condition?:           Condition;
  permalink?:           string;
  thumbnail?:           string;
  thumbnailID?:         string;
  acceptsMercadopago?:  boolean;
  installments?:        Installments;
  address?:             Address;
  shipping?:            Shipping;
  sellerAddress?:       SellerAddress;
  attributes?:          Attribute[];
  differentialPricing?: DifferentialPricing;
  originalPrice?:       null;
  categoryID?:          CategoryID;
  officialStoreID?:     number | null;
  domainID?:            DomainID;
  catalogProductID?:    null;
  tags?:                ResultTag[];
  orderBackend?:        number;
  useThumbnailID?:      boolean;
  offerScore?:          null;
  offerShare?:          null;
  matchScore?:          null;
  winnerItemID?:        null;
  melicoin?:            null;
  discounts?:           null;
}

export interface Address {
  stateID?:   StateID;
  stateName?: StateName;
  cityID?:    string;
  cityName?:  string;
}

export enum StateID {
  CNGd = "CN-GD",
  CoBol = "CO-BOL",
  CoCal = "CO-CAL",
  CoDc = "CO-DC",
  CoNSA = "CO-NSA",
  CoVac = "CO-VAC",
}

export enum StateName {
  BogotáDC = "Bogotá D.C.",
  Bolivar = "Bolivar",
  Caldas = "Caldas",
  Guangdong = "Guangdong",
  NorteDeSantander = "Norte De Santander",
  ValleDelCauca = "Valle Del Cauca",
}

export interface Attribute {
  id?:                 ID;
  valueID?:            null | string;
  valueName?:          null | string;
  valueStruct?:        null;
  values?:             AttributeValue[];
  name?:               Name;
  attributeGroupID?:   AttributeGroupID;
  attributeGroupName?: AttributeGroupName;
  source?:             number;
}

export enum AttributeGroupID {
  Others = "OTHERS",
}

export enum AttributeGroupName {
  Otros = "Otros",
}

export enum ID {
  Brand = "BRAND",
  ItemCondition = "ITEM_CONDITION",
  Line = "LINE",
  Model = "MODEL",
}

export enum Name {
  CondiciónDelÍtem = "Condición del ítem",
  Línea = "Línea",
  Marca = "Marca",
  Modelo = "Modelo",
}

export interface AttributeValue {
  id?:     null | string;
  name?:   null | string;
  struct?: null;
  source?: number;
}

export enum BuyingMode {
  BuyItNow = "buy_it_now",
}

export enum CategoryID {
  Mco118093 = "MCO118093",
  Mco414251 = "MCO414251",
  Mco414610 = "MCO414610",
  Mco414674 = "MCO414674",
  Mco415445 = "MCO415445",
  Mco416005 = "MCO416005",
  Mco5607 = "MCO5607",
}

export enum Condition {
  New = "new",
}

export enum CurrencyID {
  Cop = "COP",
  Usd = "USD",
}

export interface DifferentialPricing {
  id?: number;
}

export enum DomainID {
  McoBootsAndBooties = "MCO-BOOTS_AND_BOOTIES",
  McoFlats = "MCO-FLATS",
  McoFootwear = "MCO-FOOTWEAR",
  McoLoafersAndOxfords = "MCO-LOAFERS_AND_OXFORDS",
  McoSandalsAndClogs = "MCO-SANDALS_AND_CLOGS",
  McoSlippers = "MCO-SLIPPERS",
  McoSneakers = "MCO-SNEAKERS",
}

export interface Installments {
  quantity?:   number;
  amount?:     number;
  rate?:       number;
  currencyID?: CurrencyID;
}

export enum ListingTypeID {
  GoldPro = "gold_pro",
  GoldSpecial = "gold_special",
}

export interface Prices {
  id?:                  string;
  prices?:              Price[];
  presentation?:        Presentation;
  paymentMethodPrices?: any[];
  referencePrices?:     ReferencePrice[];
  purchaseDiscounts?:   any[];
}

export interface Presentation {
  displayCurrency?: CurrencyID;
}

export interface Price {
  id?:                  string;
  type?:                PriceType;
  amount?:              number;
  regularAmount?:       number | null;
  currencyID?:          CurrencyID;
  lastUpdated?:         Date;
  conditions?:          Conditions;
  exchangeRateContext?: ExchangeRateContext;
  metadata?:            Metadata;
}

export interface Conditions {
  contextRestrictions?: ContextRestriction[];
  startTime?:           Date | null;
  endTime?:             Date | null;
  eligible?:            boolean;
}

export enum ContextRestriction {
  ChannelMarketplace = "channel_marketplace",
  ChannelMshops = "channel_mshops",
}

export enum ExchangeRateContext {
  CbtOn = "CBT-ON",
  Default = "DEFAULT",
}

export interface Metadata {
  promotionID?:   string;
  promotionType?: string;
  campaignID?:    string;
}

export enum PriceType {
  Promotion = "promotion",
  Standard = "standard",
}

export interface ReferencePrice {
  id?:                  string;
  type?:                ReferencePriceType;
  conditions?:          Conditions;
  amount?:              number;
  currencyID?:          CurrencyID;
  exchangeRateContext?: ExchangeRateContext;
  tags?:                any[];
  lastUpdated?:         Date;
}

export enum ReferencePriceType {
  MinStandard = "min_standard",
}

export interface Seller {
  id?:               number;
  permalink?:        null;
  registrationDate?: null;
  carDealer?:        boolean;
  realEstateAgency?: boolean;
  tags?:             null;
}

export interface SellerAddress {
  id?:          string;
  comment?:     string;
  addressLine?: string;
  zipCode?:     string;
  country?:     Sort;
  state?:       Sort;
  city?:        Sort;
  latitude?:    string;
  longitude?:   string;
}

export interface Shipping {
  freeShipping?: boolean;
  mode?:         Mode;
  tags?:         ShippingTag[];
  logisticType?: LogisticType;
  storePickUp?:  boolean;
}

export enum LogisticType {
  CrossDocking = "cross_docking",
  DropOff = "drop_off",
  Fulfillment = "fulfillment",
  XdDropOff = "xd_drop_off",
}

export enum Mode {
  Me2 = "me2",
}

export enum ShippingTag {
  FSThresholdMcoChangeApr2021 = "fs_threshold_mco_change_apr2021",
  FSThresholdMcoChangeJul2021 = "fs_threshold_mco_change_jul2021",
  Fulfillment = "fulfillment",
  MandatoryFreeShipping = "mandatory_free_shipping",
  SelfServiceIn = "self_service_in",
  SelfServiceOut = "self_service_out",
}

export enum SiteID {
  Mco = "MCO",
}

export enum ResultTag {
  BestSellerCandidate = "best_seller_candidate",
  CartEligible = "cart_eligible",
  CbtItem = "cbt_item",
  GoodQualityPicture = "good_quality_picture",
  GoodQualityThumbnail = "good_quality_thumbnail",
  ImmediatePayment = "immediate_payment",
  LoyaltyDiscountEligible = "loyalty_discount_eligible",
  ShippingGuaranteed = "shipping_guaranteed",
  StandardPriceByChannel = "standard_price_by_channel",
}
