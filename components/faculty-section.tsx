'use client'

import Image from 'next/image'

export function FacultySection() {
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-4">
            Our Top Achievers
          </h2>
          <p className="text-xl text-secondary/90 text-balance">
            Meet students who excelled in their UPSC CSE exam and built successful careers as IAS officers
          </p>
        </div>

        {/* Faculty Board */}
        <div className="mb-16 rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VBOARD%202-DFGqoTgkfEDHT89rJONY0Vh4xGPgea.jpg"
            alt="Raja Sir's Top IAS Officers - Successful Alumni"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Top Scorer Students Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-secondary mb-12 text-center">
            Distinguished Alumni
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {/* Top Scorer 1 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden shadow-lg border-4 border-secondary hover:shadow-2xl transition-shadow">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f53252d9-a049-4156-be7c-a80d3ccffd7a-qxpdGhoanMhM8XF0xD2RiiNG4jfnzp.jpeg"
                  alt="Top IAS Score Achiever"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-secondary font-semibold text-sm">IAS Officer</p>
            </div>

            {/* Top Scorer 2 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden shadow-lg border-4 border-secondary hover:shadow-2xl transition-shadow">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1586-s90uvO6d5w1NNgz3JcBvxHESghezNB.jpeg"
                  alt="Top IAS Score Achiever"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-secondary font-semibold text-sm">IAS Officer</p>
            </div>

            {/* Top Scorer 3 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden shadow-lg border-4 border-secondary hover:shadow-2xl transition-shadow">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0abbf3a0-aa60-4c8b-aa3d-3935d136b076-zjZnF2ee71h0iZF66ZTulflcbY396C.jpeg"
                  alt="Top IAS Score Achiever"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-secondary font-semibold text-sm">IAS Officer</p>
            </div>

            {/* Top Scorer 4 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden shadow-lg border-4 border-secondary hover:shadow-2xl transition-shadow">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9cab395a-635e-4b04-8825-497847572d37-9G1cbfqDAUKdKHhAlZSRrc7551TPqG.jpeg"
                  alt="Top IAS Score Achiever"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-secondary font-semibold text-sm">IAS Officer</p>
            </div>

            {/* Top Scorer 5 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden shadow-lg border-4 border-secondary hover:shadow-2xl transition-shadow">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/747ccd1e-f81d-4072-b90c-99616206e5ce-d9Bq8ikYSmyl5Dz2C1QIsA38L3pvrt.jpeg"
                  alt="Top IAS Score Achiever"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-secondary font-semibold text-sm">IAS Officer</p>
            </div>

            {/* Top Scorer 6 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden shadow-lg border-4 border-secondary hover:shadow-2xl transition-shadow">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/911f2494-1218-45ed-ae69-d4b5c0f63dd4-LpjRpSl5M3UVQJpfwrhdX2AERB05EQ.jpeg"
                  alt="Top IAS Score Achiever"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-secondary font-semibold text-sm">IAS Officer</p>
            </div>

            {/* Top Scorer 7 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden shadow-lg border-4 border-secondary hover:shadow-2xl transition-shadow">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/35fdfac5-abdd-440f-9d3e-b68c2f18e441-GpPH56WzCID0efRpLp6PScD7psUx4f.jpeg"
                  alt="Top IAS Score Achiever"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-secondary font-semibold text-sm">IAS Officer</p>
            </div>

            {/* Top Scorer 8 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden shadow-lg border-4 border-secondary hover:shadow-2xl transition-shadow">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/113e2bcb-1169-4cad-8708-5d57154a4238-PcYLQSxtdW8xiqPozwFvBzh7jW2fPb.jpeg"
                  alt="Top IAS Score Achiever"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-secondary font-semibold text-sm">IAS Officer</p>
            </div>
          </div>
        </div>

        {/* Success Statistics */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-secondary text-primary p-8 rounded-lg text-center">
            <p className="text-5xl font-bold mb-2">533+</p>
            <p className="text-lg font-semibold">Successful Officers</p>
          </div>
          <div className="bg-secondary text-primary p-8 rounded-lg text-center">
            <p className="text-5xl font-bold mb-2">21+</p>
            <p className="text-lg font-semibold">Years of Excellence</p>
          </div>
          <div className="bg-secondary text-primary p-8 rounded-lg text-center">
            <p className="text-5xl font-bold mb-2">100%</p>
            <p className="text-lg font-semibold">Success Track Record</p>
          </div>
        </div>
      </div>
    </section>
  )
}
