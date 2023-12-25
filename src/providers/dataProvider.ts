export const BASE_URL = import.meta.env.VITE_BASE_URL + "/v1"

export const AUTH_NAME = import.meta.env.VITE_AUTH_HEADER_NAME

export const dataProvider = {
  // getOne: async ({ resource, id, meta }) => {
  //   const res = await DataHelpers.fetchWithAuthorize(`/${resource}/${id}`)

  //   return {
  //     data: res.data,
  //   }
  // },
  // async getList<TData extends BaseRecord = BaseRecord>(params: GetListParams) {
  //   const query = {
  //     // sort: JSON.stringify([field, order]),
  //     // range: JSON.stringify([rangeStart, rangeEnd]),
  //     page: params.pagination?.current ?? 1,
  //     per_page: params.pagination?.pageSize ?? 10,
  //     // filter: JSON.stringify(params.filter),
  //   }

  //   const res = await DataHelpers.fetchWithAuthorize(
  //     `/${params.resource}?${stringify(query)}`,
  //   )

  //   return {
  //     data: res.data,
  //     total: res.meta?.total,
  //   } as GetListResponse<TData>
  // },
  getApiUrl() {
    return BASE_URL
  },
  // create(params) {
  //   return undefined as any
  // },
  // deleteOne(params) {
  //   return undefined as any
  // },
  // update(params) {
  //   return undefined as any
  // },
  // createMany(params) {
  //   return undefined as any
  // },
  // async custom(params) {
  //   const res = await DataHelpers.fetchWithAuthorize(params.url)
  //   return {
  //     data: res.data,
  //   }
  // },
  // deleteMany(params) {
  //   return undefined as any
  // },
  // getMany(params) {
  //   return undefined as any
  // },
  // updateMany(params) {
  //   return undefined as any
  // },
}
