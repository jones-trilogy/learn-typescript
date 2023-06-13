interface MyInterface {
  id: number
  name: string
  age: number
}

const keysArray = Object.keys({} as { [K in keyof MyInterface]: never })

console.log(keysArray)

const attr = {
  recommendation: {
    eventType: 'opportunity-rejected',
    annualSavings: 0,
    resourceId: 'jonesndev-AsgOptimizationIT-asg-attr',
  },
}

const override = {
  recommendation: {
    eventType: 'opportunity-rejected',
    annualSavings: 0,
    resourceId: 'jonesndev-AsgOptimizationIT-asg-override',
  },
}

export const instanceRequirements = {
  MemoryMiB: { Min: 512 },
  NetworkInterfaceCount: { Min: 2 },
  NetworkBandwidthGbps: { Min: 5 },
  VCpuCount: { Min: 2 },
  BaselineEbsBandwidthMbps: { Min: 43 },
  CpuManufacturers: ['amazon-web-services'],
}
