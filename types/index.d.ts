export interface Driver {
  id: number
  name: string
  verified: boolean
  image: string
  totalRides: number
  rating: number
  reviewsCount: number
}

export type Drivers = Driver[]
