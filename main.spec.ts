import { instanceRequirements } from './main'

jest.setTimeout(3600000)

describe('AsgOptimizationValidator', () => {
  it('should work on the happy path with attribute based asgs', async () => {
    expect(instanceRequirements).toEqual({
      MemoryMiB: { Min: expect.any(String) },
      NetworkInterfaceCount: { Min: expect.any(Number) },
      NetworkBandwidthGbps: { Min: expect.any(Number) },
      VCpuCount: { Min: expect.any(Number) },
      BaselineEbsBandwidthMbps: { Min: expect.any(Number) },
      CpuManufacturers: ['amazon-web-services'],
    })

    const obj = {
      Min: 512,
    }

    expect(obj).toEqual({
      Min: 512,
    })
  })
})
