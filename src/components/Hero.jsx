"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250213-WA0023.jpg-aiCcdaE7sGh1cpNyxbd7bG7aLzZIyo.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250213-WA0022.jpg-ErxELmiEn9nEQErRRVmRQsJk82eQxs.jpeg",
  ]
  const [showDetails, setShowDetails] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0))
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white py-12">
      <div className="container mx-auto px-4 pt-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">NCICPS 25</h2>
              <h1 className="text-4xl font-bold leading-tight mb-4">
                2nd National Conference on Intelligent Cyber Physical Systems
                <br />
                <span className="text-[#00B3B3]">27th February - 1st March 2025</span>
              </h1>
            </div>

            {/* About Us Section */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold mb-2">About Us</h2>
              <p className="text-gray-300">
                The 2nd National Conference on Intelligent Cyber Physical Systems (NCICPS'25) is a premier gathering of
                researchers, practitioners, and innovators in the field of cyber-physical systems and their intelligent
                applications.
              </p>
              <p className="text-gray-300">
                Join us in shaping the future of intelligent systems and their impact on our interconnected world.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xl font-bold text-[#00B3B3]">Organized By</p>
              <p className="text-2xl font-bold">College of Engineering Kallooppara</p>
              <p className="text-gray-300">
                Kadamankulam P.O <br />
                Thiruvalla <br />
                Pathanamthitta District <br />
                Kerala - 689583
              </p>
            </div>
            {/* Paper Presentation Section */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-[#00B3B3]">Paper Presentation</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                  >
                    Details
                  </button>
                  <button
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                    onClick={() => window.open("https://forms.gle/RBfPBWcpbdUeBiyg7", "_blank")}
                  >
                    Registration
                  </button>
                </div>
              </div>
              {showDetails && (
                <div className="mt-2 pl-4">
                  {/* Dropdown Content - Replace with actual details */}
                  <p className="text-gray-300">
                    Details about paper presentation will be shown here. You can add more information like submission
                    guidelines, important dates, etc.
                  </p>
                </div>
              )}
            </div>
            {/* Conclave Section */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-[#00B3B3]">Conclave</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                  >
                    Details
                  </button>
                  <button
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                    onClick={() => window.open("https://www.google.com", "_blank")}
                  >
                    Registration
                  </button>
                </div>
              </div>
              {showDetails && (
                <div className="mt-2 pl-4">
                  {/* Dropdown Content - Replace with actual details */}
                  <p className="text-gray-300">
                    Details about paper presentation will be shown here. You can add more information like submission
                    guidelines, important dates, etc.
                  </p>
                </div>
              )}
            </div>
            {/* Workshop Section */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-[#00B3B3]">Workshop</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                  >
                    Details
                  </button>
                  <button
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                    onClick={() => window.open("https://forms.gle/1UhpazS9LRuJPcPr7", "_blank")}
                  >
                    Registration
                  </button>
                </div>
              </div>
              {showDetails && (
                <div className="mt-2 pl-4">
                  {/* Dropdown Content - Replace with actual details */}
                  <p className="text-gray-300">
                    Details about paper presentation will be shown here. You can add more information like submission
                    guidelines, important dates, etc.
                  </p>
                </div>
              )}
            </div>
            {/* Poster Presentation Section */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-[#00B3B3]"> Poster Presentation</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                  >
                    Details
                  </button>
                  <button
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                    onClick={() => window.open("https://www.google.com", "_blank")}
                  >
                    Registration
                  </button>
                </div>
              </div>
              {showDetails && (
                <div className="mt-2 pl-4">
                  {/* Dropdown Content - Replace with actual details */}
                  <p className="text-gray-300">
                    Details about paper presentation will be shown here. You can add more information like submission
                    guidelines, important dates, etc.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="border-2 border-[#00B3B3] rounded-lg p-6 bg-[#0d0d2a]">
              <img
                src="https://lh3.googleusercontent.com/pw/ABLVV33bt4au7KE4ZdYv-iCfzzWyYthiWkf6tVvKjJ1yO9IciE1c2WDI6jgb0l5GgH7l-7GjF1eWj_rNt3CuHw-jJ1lP5j9j41jCvLpt_XZGt60U9zC06jCa5LQqrz5w8o6iH6syEDoF9oR7ladY1KlVs=w960-h720-no?authuser=0"
                alt="Conference Venue"
                width={500}
                height={300}
                className="w-full rounded-lg cursor-pointer"
                onClick={() =>
                  setSelectedImage(
                    "https://lh3.googleusercontent.com/pw/ABLVV33bt4au7KE4ZdYv-iCfzzWyYthiWkf6tVvKjJ1yO9IciE1c2WDI6jgb0l5GgH7l-7GjF1eWj_rNt3CuHw-jJ1lP5j9j41jCvLpt_XZGt60U9zC06jCa5LQqrz5w8o6iH6syEDoF9oR7ladY1KlVs=w960-h720-no?authuser=0",
                  )
                }
              />
            </div>

            {/* Image Carousel */}
            <div className="relative h-[500px] w-full mx-auto flex items-center justify-center">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src || "/placeholder.svg"}
                  alt={"Conference Information " + (index + 1)}
                  onClick={() => setSelectedImage(src)}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    transition: "opacity 1000ms duration-1000",
                    borderRadius: "0.5rem",
                    opacity: currentImage === index ? 1 : 0,
                    cursor: "pointer",
                  }}
                  className={`object-contain transition-opacity duration-1000 rounded-lg ${
                    currentImage === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Selected conference image"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

