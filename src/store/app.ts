import { defineStore } from 'pinia'

const useAppStore = defineStore('app', {
  state: () => ({
    tenantId: 'system',
    access_token: 'eyJraWQiOiI2OTU4YWFhYTliZDA1YTIxZjVmNmZiZTFkNDBmZjY3YyIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJCRFktVEoiLCJhdWQiOiJwYyIsIm5iZiI6MTY1ODgwMTUxNSwic2NvcGUiOlsic2VydmVyIiwibm9wYXNzIl0sImV4cCI6MTY1ODgwNTExNSwiaWF0IjoxNjU4ODAxNTE1LCJqdGkiOiJlMDAwZWRmNy1lNmQ2LTQxNzItOTliOS00ZjQzNGUyMDFiMmEifQ.OOGwQS8LPixopGu50BwiqB17rKXGz5WpgguOQ8sMIGNqMfxwjSUgbQo3YVLywatoUizcQv17BpEI3tdR2jzBNifFmArM1qJIcTuGUUwBAvJF2K13exJyleP2YKUE78yudmhD_3EeIz22A97TuGierIojOinS8k1MZbhcV3fqL9SOaldiUbBEEwVBjCWAOHVtr1Y4sIMxdybWww6leuxVWyzYPxgAA9AZ2IFLKpRL2zimykIcJIOst1jHRq0atvBM0WXkXnNMt6OEkWRwxUGlHPOb5YrB0dmjiqfDCXgw5C_L2FsjbgYFprAKncxRNREsEIggbMk0z7X4pazBBz0P0g',
  }),
  actions: {
    // setCount() {
    //   this.count++
    // },
    cleanSession() {
      console.log('session clean')
    },
  },
})

export default useAppStore
