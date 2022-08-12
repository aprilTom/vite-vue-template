import { defineStore } from 'pinia'

const useAppStore = defineStore('app', {
  state: () => ({
    tenantId: 'system',
    access_token: 'eyJraWQiOiI2OTU4YWFhYTliZDA1YTIxZjVmNmZiZTFkNDBmZjY3YyIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJ4aWFvbGl1IiwiYXVkIjoicGMiLCJuYmYiOjE2NTkwODAzMzksInNjb3BlIjpbInNlcnZlciIsIm5vcGFzcyJdLCJleHAiOjE2NTkwODM5MzksImlhdCI6MTY1OTA4MDMzOSwianRpIjoiZjk4Mjc5NzMtOTQ2Ny00NzVkLThhODktMzI5ODY4NzExMmFmIn0.Qq86RiQRzOIvF_ZpS2TMgwsSwv8-3SRLuZ0k4bMwxXNETNkK_5rLk6fGCrThS6-nlwxHVWG38tWsQIaHMgQeg2ov9A9ev0wfpIWWqz4iRXEzriHq73iQwFkZsC0KZULjH2mM8RP2rO5WlxC4yoIDPM-6npM6fKW4ipJi84T4qu1nbjtbJy_kNGZpPm5hqsPnERvvYscxra9GwSDYX5D_F4tuXPCIYqUJLMDLNDCzN6xuBPnakTp5NQIUlKO6k8UZ9wZU9HJdmokMLf7d-54jffgMOQ-zCo455k4Z-94n3vIeHW7qSJ5026u46OHNTz1CHbYLrPThu8LdaI2qMY04AQ',
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
