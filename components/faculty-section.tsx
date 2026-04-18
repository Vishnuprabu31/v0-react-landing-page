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
            src="/placeholder.jpg"
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
                  src="/placeholder.jpg"
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
                  src="/placeholder.jpg"
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
                  src="/placeholder.jpg"
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
                  src="/placeholder.jpg"
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
                  src="/placeholder.jpg"
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
                  src="/placeholder.jpg"
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
                  src="/placeholder.jpg"
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
                  src="/placeholder.jpg"
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
