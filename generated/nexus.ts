/**
 * This file was automatically generated by Nexus 0.11.3
 * Do not make changes to this file directly
 */




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ProductCreateInput: { // input type
    color: string; // String!
    imagelink: string; // String!
    name: string; // String!
    price?: number | null; // Float
    size: string; // String!
  }
  ProductUpdateInput: { // input type
    color?: string | null; // String
    imagelink?: string | null; // String
    name?: string | null; // String
    price?: number | null; // Float
    size?: string | null; // String
  }
  ProductWhereInput: { // input type
    AND?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    color?: string | null; // String
    color_contains?: string | null; // String
    color_ends_with?: string | null; // String
    color_gt?: string | null; // String
    color_gte?: string | null; // String
    color_in?: string[] | null; // [String!]
    color_lt?: string | null; // String
    color_lte?: string | null; // String
    color_not?: string | null; // String
    color_not_contains?: string | null; // String
    color_not_ends_with?: string | null; // String
    color_not_in?: string[] | null; // [String!]
    color_not_starts_with?: string | null; // String
    color_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    imagelink?: string | null; // String
    imagelink_contains?: string | null; // String
    imagelink_ends_with?: string | null; // String
    imagelink_gt?: string | null; // String
    imagelink_gte?: string | null; // String
    imagelink_in?: string[] | null; // [String!]
    imagelink_lt?: string | null; // String
    imagelink_lte?: string | null; // String
    imagelink_not?: string | null; // String
    imagelink_not_contains?: string | null; // String
    imagelink_not_ends_with?: string | null; // String
    imagelink_not_in?: string[] | null; // [String!]
    imagelink_not_starts_with?: string | null; // String
    imagelink_starts_with?: string | null; // String
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    OR?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    price?: number | null; // Float
    price_gt?: number | null; // Float
    price_gte?: number | null; // Float
    price_in?: number[] | null; // [Float!]
    price_lt?: number | null; // Float
    price_lte?: number | null; // Float
    price_not?: number | null; // Float
    price_not_in?: number[] | null; // [Float!]
    size?: string | null; // String
    size_contains?: string | null; // String
    size_ends_with?: string | null; // String
    size_gt?: string | null; // String
    size_gte?: string | null; // String
    size_in?: string[] | null; // [String!]
    size_lt?: string | null; // String
    size_lte?: string | null; // String
    size_not?: string | null; // String
    size_not_contains?: string | null; // String
    size_not_ends_with?: string | null; // String
    size_not_in?: string[] | null; // [String!]
    size_not_starts_with?: string | null; // String
    size_starts_with?: string | null; // String
  }
  ProductWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  ProductOrderByInput: "color_ASC" | "color_DESC" | "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "imagelink_ASC" | "imagelink_DESC" | "name_ASC" | "name_DESC" | "price_ASC" | "price_DESC" | "size_ASC" | "size_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
}

export interface NexusGenRootTypes {
  AggregateProduct: { // root type
    count: number; // Int!
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Product: { // root type
    color: string; // String!
    id: string; // ID!
    imagelink: string; // String!
    name: string; // String!
    price?: number | null; // Float
    size: string; // String!
  }
  ProductConnection: { // root type
    edges: NexusGenRootTypes['ProductEdge'][]; // [ProductEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  ProductEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Product']; // Product!
  }
  Query: {};
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  ProductCreateInput: NexusGenInputs['ProductCreateInput'];
  ProductUpdateInput: NexusGenInputs['ProductUpdateInput'];
  ProductWhereInput: NexusGenInputs['ProductWhereInput'];
  ProductWhereUniqueInput: NexusGenInputs['ProductWhereUniqueInput'];
  ProductOrderByInput: NexusGenEnums['ProductOrderByInput'];
}

export interface NexusGenFieldTypes {
  AggregateProduct: { // field return type
    count: number; // Int!
  }
  Mutation: { // field return type
    createProduct: NexusGenRootTypes['Product']; // Product!
    deleteProduct: NexusGenRootTypes['Product'] | null; // Product
    updateProduct: NexusGenRootTypes['Product'] | null; // Product
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Product: { // field return type
    color: string; // String!
    id: string; // ID!
    imagelink: string; // String!
    name: string; // String!
    price: number | null; // Float
    size: string; // String!
  }
  ProductConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateProduct']; // AggregateProduct!
    edges: NexusGenRootTypes['ProductEdge'][]; // [ProductEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  ProductEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Product']; // Product!
  }
  Query: { // field return type
    product: NexusGenRootTypes['Product'] | null; // Product
    products: NexusGenRootTypes['Product'][]; // [Product!]!
    productsConnection: NexusGenRootTypes['ProductConnection']; // ProductConnection!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createProduct: { // args
      data: NexusGenInputs['ProductCreateInput']; // ProductCreateInput!
    }
    deleteProduct: { // args
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
    updateProduct: { // args
      data: NexusGenInputs['ProductUpdateInput']; // ProductUpdateInput!
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
  }
  Query: {
    product: { // args
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
    products: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ProductOrderByInput'] | null; // ProductOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    }
    productsConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ProductOrderByInput'] | null; // ProductOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AggregateProduct" | "Mutation" | "PageInfo" | "Product" | "ProductConnection" | "ProductEdge" | "Query";

export type NexusGenInputNames = "ProductCreateInput" | "ProductUpdateInput" | "ProductWhereInput" | "ProductWhereUniqueInput";

export type NexusGenEnumNames = "ProductOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}