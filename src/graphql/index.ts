import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AddItemImageInput = {
  alt?: InputMaybe<Scalars['String']>;
  link: Scalars['String'];
};

export type CommonFilterOptionInput = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortKey?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type CreateItemInput = {
  code: Scalars['String'];
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<AddItemImageInput>>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type CreateOrderDetailInput = {
  itemCode: Scalars['String'];
  orderId?: InputMaybe<Scalars['Float']>;
  quantity: Scalars['Int'];
  unitPrice: Scalars['Float'];
};

export type CreateUploadInput = {
  mimeType: Scalars['String'];
  purpose: UploadPurpose;
};

export type FilterOrderInput = {
  placedAt?: InputMaybe<Scalars['DateTime']>;
  referenceNumber?: InputMaybe<Scalars['String']>;
};

export type Item = {
  __typename?: 'Item';
  code: Scalars['String'];
  currency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  images?: Maybe<Array<ItemImage>>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type ItemImage = {
  __typename?: 'ItemImage';
  alt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  item: Item;
  link: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createItem: Item;
  createOrder: Order;
  deleteItems: Scalars['Boolean'];
  generateSignedUrl: SignedUrl;
  updateItem: Item;
  updateOrder: Order;
};


export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


export type MutationCreateOrderArgs = {
  input: PlaceOrderInput;
};


export type MutationDeleteItemsArgs = {
  codes: Array<Scalars['String']>;
};


export type MutationGenerateSignedUrlArgs = {
  input: CreateUploadInput;
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  id: Scalars['String'];
  orderDetails?: Maybe<Array<OrderDetail>>;
  placedAt: Scalars['DateTime'];
  referenceNumber: Scalars['String'];
  status: Scalars['String'];
  totalPrice: Scalars['Float'];
};

export type OrderDetail = {
  __typename?: 'OrderDetail';
  id: Scalars['String'];
  item: Item;
  order: Order;
  quantity: Scalars['Int'];
  unitPrice: Scalars['Float'];
};

export type Orders = {
  __typename?: 'Orders';
  hasMore: Scalars['Boolean'];
  items: Array<Order>;
  page: Scalars['Int'];
  pages: Scalars['Int'];
  total: Scalars['Int'];
};

export type PlaceOrderInput = {
  orders: Array<CreateOrderDetailInput>;
  placedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Price = {
  __typename?: 'Price';
  currency: Scalars['String'];
  price: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  calculateTotalPrice: Price;
  getItems: Array<Item>;
  getNextReferenceNumber: Scalars['String'];
  getOrderById: Order;
  getPaginatedOrders: Orders;
};


export type QueryCalculateTotalPriceArgs = {
  input: PlaceOrderInput;
};


export type QueryGetItemsArgs = {
  searchText?: InputMaybe<Scalars['String']>;
};


export type QueryGetOrderByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetPaginatedOrdersArgs = {
  filter?: InputMaybe<FilterOrderInput>;
  options: CommonFilterOptionInput;
};

export type SignedUrl = {
  __typename?: 'SignedUrl';
  signedUrl?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type UpdateItemInput = {
  code: Scalars['String'];
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<AddItemImageInput>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type UpdateOrderInput = {
  id: Scalars['String'];
  placedAt?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Scalars['String']>;
};

export enum UploadPurpose {
  Image = 'IMAGE'
}

export type ItemInfoFragment = { __typename?: 'Item', id: string, code: string, price: number, currency: string };

export type GetItemsQueryVariables = Exact<{
  searchText?: InputMaybe<Scalars['String']>;
}>;


export type GetItemsQuery = { __typename?: 'Query', getItems: Array<{ __typename?: 'Item', id: string, code: string, price: number, currency: string }> };

export const ItemInfoFragmentDoc = gql`
    fragment ItemInfo on Item {
  id
  code
  price
  currency
}
    `;
export const GetItemsDocument = gql`
    query getItems($searchText: String) {
  getItems(searchText: $searchText) {
    ...ItemInfo
  }
}
    ${ItemInfoFragmentDoc}`;

/**
 * __useGetItemsQuery__
 *
 * To run a query within a React component, call `useGetItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemsQuery({
 *   variables: {
 *      searchText: // value for 'searchText'
 *   },
 * });
 */
export function useGetItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, options);
      }
export function useGetItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, options);
        }
export type GetItemsQueryHookResult = ReturnType<typeof useGetItemsQuery>;
export type GetItemsLazyQueryHookResult = ReturnType<typeof useGetItemsLazyQuery>;
export type GetItemsQueryResult = Apollo.QueryResult<GetItemsQuery, GetItemsQueryVariables>;