import { defineStore } from 'pinia'

const useCountStore = defineStore('user', {
  state: () => ({
    tenantId: 'system',
    access_token: 'eyJraWQiOiI2OTU4YWFhYTliZDA1YTIxZjVmNmZiZTFkNDBmZjY3YyIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJCRFktVEoiLCJhdWQiOiJwYyIsIm5iZiI6MTY1ODIxNzI0Nywic2NvcGUiOlsic2VydmVyIiwibm9wYXNzIl0sImV4cCI6MTY1ODIyMDg0NywiaWF0IjoxNjU4MjE3MjQ3LCJqdGkiOiIzM2EwZmI5Ny1hYmI0LTRkNTMtYTQwNi0wY2YwZGNiNWZiZTYifQ.DK6g5nVaIP4Yihj0S-P3xEEgycN6N1zSjB78T1E8HmpnlDNT2X_lP33chFlkcYDO5kaN-ZxyaI2SAao20NJHud-f4Udux6RAb1RVyWV5VbdCSfb7v3kPbg0DOXXzCbJ5k0gFiP0kb5kU7fhZsBzi3yDuf367nQzxYSeQg9ETiFOmeOosPngY4VgBuHFlSdva-w0GUBoyqFB99JoXh55Bgcs0Ba9QdVRs0Lod6NfOsjmp2GifAB5cX73G0aZYrKRRSinMaKzGtSIhujx_uzW_M4Yn_SUuuw_UZC7LTjnbHlkhJnnLRXn-PgipK0dJq1IsnnOszk2Kjln0mO2p5pYE8w',
  }),
  actions: {
    // setCount() {
    //   this.count++
    // },
  },
})

export default useCountStore
