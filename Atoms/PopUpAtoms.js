import { atom } from 'recoil'

export const openPopUps = atom({
  key: 'openPopUps',
  default: {
    calendarPopUp: false,
    couponPopUp: false,
    karmaPopUp: false,
    walletPopUp: false,
    ProfilePhotoPopUp: false,
    CoverPhotoPopUp: false,
    DescriptionPopUp: false,
    ReviewPopUp: false,
  },
})

export const totalSelectedSlots = atom({
  key: 'totalSelectedSlots',
  default: 0,
})

export const selectedTutor = atom({
  key: 'selectedTutor',
  default: {},
})

export const selectedSlots = atom({
  key: 'selectedSlots',
  default: [],
})
