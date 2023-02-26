export interface Driver {
  id: string
  name: string
  verified: boolean
  image: string
  totalRides: number
  rating: number
  reviewsCount: number
}

export type Drivers = Driver[]
