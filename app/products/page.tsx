import Image from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";
import RetCam3 from "@/public/images/retcam3.png";
import Algo5 from "@/public/images/algo5.png";

export default function Products() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-4">
            <h2 className="h2 mb-4">NICU / Pediatric</h2>
            <p className="text-xl text-gray-400">Hearing Screening</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div className="flex justify-center">
                <div className="relative inline-flex flex-col mb-4 pt-8">
                  <Image
                    className="rounded-full"
                    src={Algo5}
                    width={300}
                    height={300}
                    alt="ALGO 5"
                  />
                </div>
              </div>
              <blockquote className="text-center flex flex-col justify-end text-lg text-gray-400 grow">
                ALGO 5
              </blockquote>
              <div className="text-custom-taupe font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-custom-taupe not-italic">
                  거래처 이름
                </cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-custom-taupe transition duration-150 ease-in-out"
                  href="#0"
                >
                  거래처 링크 클릭
                </a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800 text-center justify-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src="https://natus.com/wp-content/uploads/Algo7i_product-thumbnail.png"
                    width={300}
                    height={300}
                    alt="ALGO 7i"
                  />
                </div>
              </div>
              <blockquote className="text-center flex flex-col justify-end text-lg text-gray-400 grow">
                ALGO7i
              </blockquote>
              <div className="text-custom-taupe font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-custom-taupe not-italic">
                  거래처 이름
                </cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-custom-taupe transition duration-150 ease-in-out"
                  href="#0"
                >
                  거래처 링크 클릭
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Eye Imaging */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-4">
            <p className="text-xl text-gray-400">Eye Imaging</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src="https://natus.com/wp-content/uploads/Retcam-Envision_product-thumbnail.png"
                    width={300}
                    height={400}
                    alt="RetCam3"
                  />
                </div>
              </div>
              <blockquote className="text-center flex flex-col justify-end text-lg text-gray-400 grow">
                RetCam Envision
              </blockquote>
              <div className="text-custom-taupe font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-custom-taupe not-italic">
                  거래처 이름
                </cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-custom-taupe transition duration-150 ease-in-out"
                  href="#0"
                >
                  거래처 링크 클릭
                </a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4 pt-8">
                  <Image
                    className="rounded-full"
                    src={RetCam3}
                    width={300}
                    height={300}
                    alt="RetCam3"
                  />
                </div>
              </div>
              <blockquote className="text-center flex flex-col justify-end text-lg text-gray-400 grow">
                RetCam3
              </blockquote>
              <div className="text-custom-taupe font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-custom-taupe not-italic">
                  거래처 이름
                </cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-custom-taupe transition duration-150 ease-in-out"
                  href="#0"
                >
                  거래처 링크 클릭
                </a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src="https://neuroptics.com/wp-content/uploads/2021/09/NPi-300_InBase_wSmartGuard_WResults1Screen_1.png"
                    width={200}
                    height={200}
                    alt="Pupilometer"
                  />
                </div>
              </div>
              <blockquote className="text-center flex flex-col justify-end text-lg text-gray-400 grow">
                Pupilometer
              </blockquote>
              <div className="text-custom-taupe font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-custom-taupe not-italic">
                  거래처 이름
                </cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-custom-taupe transition duration-150 ease-in-out"
                  href="#0"
                >
                  거래처 링크 클릭
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Jaundice Management */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-4">
            <p className="text-xl text-gray-400">Jaundice Management</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src="https://img.medicalexpo.com/images_me/photo-g/76900-17860951.webp"
                    width={300}
                    height={300}
                    alt="neoBLUE blanket"
                  />
                </div>
              </div>
              <blockquote className="text-center flex flex-col justify-end text-lg text-gray-400 grow">
                neoBLUE blanket
              </blockquote>
              <div className="text-custom-taupe font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-custom-taupe not-italic">
                  거래처 이름
                </cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-custom-taupe transition duration-150 ease-in-out"
                  href="#0"
                >
                  거래처 링크 클릭
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pt-16 md:pb-4 border-t border-gray-800">
        <h2 className="h2 mb-4">OB/GYN, Neonatal</h2>
        <p className="text-xl text-gray-400">Delivery</p>
      </div>

      {/*  Delivery */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-4">
          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src="https://www.laborie.com/wp-content/uploads/2021/07/Kiwi-Header-no-logo-2.png.webp"
                    width={300}
                    height={300}
                    alt="neoBLUE blanket"
                  />
                </div>
              </div>
              <blockquote className="text-center flex flex-col justify-end text-lg text-gray-400 grow">
                neoBLUE blanket
              </blockquote>
              <div className="text-custom-taupe font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-custom-taupe not-italic">
                  거래처 이름
                </cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-custom-taupe transition duration-150 ease-in-out"
                  href="#0"
                >
                  거래처 링크 클릭
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
