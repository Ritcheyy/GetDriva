interface StepOption {
  step: number
  title: string
  description: string
}

type HowItWorksOption = {
  carOwners: StepOption[]
  driver: StepOption[]
}

export const useHowItWorkSteps = (): HowItWorksOption => {
  return {
    carOwners: [
      {
        step: 1,
        title: "Select your timeframe or destination",
        description: "Choose your pickup location and the time range/duration that you’ll need a driver for",
      },
      {
        step: 2,
        title: "Book a driver",
        description: "GetDriva will match you with the nearest driver",
      },
      {
        step: 3,
        title: "Pay when service is rendered",
        description: "Pay the driver the accumulated fee either by cash or card",
      },
      {
        step: 4,
        title: "Rate your driver",
        description: "Rate your driver according to the service rendered, you can also leave a review about your ride",
      },
    ],
    driver: [
      {
        step: 1,
        title: "Sign up",
        description: "Choose your pickup location and the time range/duration that you’ll need a driver for",
      },
      {
        step: 2,
        title: "Get verified",
        description: "GetDriva will match you with the nearest driver",
      },
      {
        step: 3,
        title: "Get matched with a client that needs your service",
        description: "Pay the driver the accumulated fee either by cash or card",
      },
      {
        step: 4,
        title: "Get paid when service is rendered",
        description: "Rate your driver according to the service rendered, you can also leave a review about your ride",
      },
    ],
  }
}
