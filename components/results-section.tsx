"use client"

export function ResultsSection() {
  const videos = [
    { id: "POYUXNa6ZAY", thumbnail: "/thumbnail1.jpg" },
    { id: "9YISfaonrdw", thumbnail: "/thumbnail2.jpg" },
    { id: "JNmD_hsLFkE", thumbnail: "/thumbnail3.jpg" },
    { id: "kNyCGPLQMFA", thumbnail: "/thumbnail4.jpg" },
    { id: "QDn7oyvHCiE", thumbnail: "/thumbnail5.jpg" },
    { id: "PeWB0TlY7lo", thumbnail: "/thumbnail6.jpg" },
    { id: "utuKqG79t5Y", thumbnail: "/thumbnail7.jpg" },
    { id: "QSihJVV03z4", thumbnail: "/thumbnail8.jpg" },
    { id: "BoDzyAL-RPg", thumbnail: "/thumbnail9.jpg" },
    { id: "8AcMqH_2Jl0", thumbnail: "/thumbnail10.jpg" }
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-6 text-balance">
          Real Results. Real Aspirants.
        </h2>

        {/* Subtext */}
        <p className="text-center text-lg md:text-xl text-muted-foreground mb-12">
          Consistency matters more than one-time results.
        </p>

        {/* Horizontally Scrollable Video Gallery */}
        <div className="overflow-x-auto pb-4 mb-12 -mx-4 md:-mx-8 px-4 md:px-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex gap-6 min-w-min">
            {videos.map((video, index) => (
              <a
                key={index}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 group"
              >
                <div className="relative w-64 h-36 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={video.thumbnail}
                    alt="YouTube Thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 opacity-90 group-hover:opacity-100 transition-opacity">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Additional Success Message */}
      
      </div>
    </section>
  )
}
