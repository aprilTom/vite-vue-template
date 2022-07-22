import { defineStore } from 'pinia'

const useAppStore = defineStore('app', {
  state: () => ({
    tenantId: 'system',
    access_token: 'eyJraWQiOiI2OTU4YWFhYTliZDA1YTIxZjVmNmZiZTFkNDBmZjY3YyIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJCRFktVEoiLCJhdWQiOiJwYyIsIm5iZiI6MTY1ODQxNjEzNSwic2NvcGUiOlsic2VydmVyIiwibm9wYXNzIl0sImV4cCI6MTY1ODQxOTczNSwiaWF0IjoxNjU4NDE2MTM1LCJqdGkiOiJjYmJkNDBiYS1jMTYyLTRiMzctODhlMi1kMjg3MTMwYWViNzUifQ.RNTHRudY3IbxvzQ3tr_zRRR3GN9zd_DXVa8eIJ82_NdeafCv8N-L66BP_QP4UDtTCjd-TUJ6uujmLF2n_TBYPC1lFW3TXzgEesjSUUYhlPwUiQT5hY2DTwtaucjq6eqpGwbwebonPjvtRuTPVzrDiiFFlD2f1ocGgt8pdjX9t0AmDN2C1fxDUsVTPnVZ8Am6RKv5uR7JJbtaFAzptgfqTP8ILf6KMkBM5gJLgP-JkRZ4tNCvyTFds4FhOcUJizQuqW9I1IQfS3HgVlkgAn6i4ev_tVAqjnfVcnnN1Y3g74IEpOeZelALdSStjflVBsPyvxJnxmX2cuDPw3dnwM0s_w',
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
