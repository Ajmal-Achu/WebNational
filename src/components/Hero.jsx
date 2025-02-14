"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function Hero() {
  const [showPaperDetails, setShowPaperDetails] = useState(false)
  const [showConclaveDetails, setShowConclaveDetails] = useState(false)
  const [showWorkshopDetails, setShowWorkshopDetails] = useState(false)
  const [showPosterDetails, setShowPosterDetails] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250213-WA0023.jpg-aiCcdaE7sGh1cpNyxbd7bG7aLzZIyo.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250213-WA0022.jpg-ErxELmiEn9nEQErRRVmRQsJk82eQxs.jpeg",
  ]

  const toggleDetails = (section) => {
    switch (section) {
      case "paper":
        setShowPaperDetails(!showPaperDetails)
        setShowConclaveDetails(false)
        setShowWorkshopDetails(false)
        setShowPosterDetails(false)
        break
      case "conclave":
        setShowConclaveDetails(!showConclaveDetails)
        setShowPaperDetails(false)
        setShowWorkshopDetails(false)
        setShowPosterDetails(false)
        break
      case "workshop":
        setShowWorkshopDetails(!showWorkshopDetails)
        setShowPaperDetails(false)
        setShowConclaveDetails(false)
        setShowPosterDetails(false)
        break
      case "poster":
        setShowPosterDetails(!showPosterDetails)
        setShowPaperDetails(false)
        setShowConclaveDetails(false)
        setShowWorkshopDetails(false)
        break
    }
  }

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
                    onClick={() => toggleDetails("paper")}
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
              {showPaperDetails && (
                <div className="mt-2 pl-4">
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
                    onClick={() => toggleDetails("conclave")}
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                  >
                    Details
                  </button>
                  <button
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                    onClick={() => window.open("https://forms.gle/x5uGtwXZpJhMSSeeA", "_blank")}
                  >
                    Registration
                  </button>
                </div>
              </div>
              {showConclaveDetails && (
                <div className="mt-2 pl-4">
                  <p className="text-gray-300">
                    Details about the conclave will be shown here. You can add more information about the event,
                    speakers, etc.
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
                    onClick={() => toggleDetails("workshop")}
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
              {showWorkshopDetails && (
                <div className="mt-2 pl-4">
                  <p className="text-gray-300">
                  Track I - From Concept to Reality: Developing Intelligent Cyber-Physical System for Smart cities and Beyond
                  </p>
                  <p className="text-gray-300">
                  Session 1: 1. Introduction to IoT and Cyber-Physical Systems (CPS) 2. Single Board Computers and System on Module for CPS. 3. I2C and SPI Protocols for Sensor Interfacing. 
                  Session 2 (Hands on):  1. DS18B20 & DHT22 Sensor interfacing and real-time deployment to open source cloud platform.
                  </p>
                </div>
              )}
            </div>

            {/* Poster Presentation Section */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-[#00B3B3]">Poster Presentation</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleDetails("poster")}
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                  >
                    Details
                  </button>
                  <button
                    className="bg-[#00B3B3] hover:bg-[#009999] text-white font-bold py-2 px-4 rounded"
                    onClick={() => window.open("https://forms.gle/oQWTBWB28RL92csR6", "_blank")}
                  >
                    Registration
                  </button>
                </div>
              </div>
              {showPosterDetails && (
                <div className="mt-2 pl-4">
                  <p className="text-gray-300">
                    Details about poster presentation will be shown here. You can add information about submission
                    guidelines, format, etc.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Modified for larger images without borders */}
          <div className="space-y-6">
            {images.map((src, index) => (
              <div key={index} className="bg-[#0d0d2a]">
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Conference Information ${index + 1}`}
                  className="w-full h-[500px] object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(src)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden">
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

