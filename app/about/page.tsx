export const metadata = {
  title: "Sign In - Open PRO",
  description: "Page description",
};

import Link from "next/link";

export default function About() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">About Us</h1>
            <p>About us</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">History</h1>
            <p>Est. 2008 June 4th</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Address</h1>
            <p>
              17, Songbu-ro 291beonan-gil, Unit 406, Gunpo-si, Gyeonggi-do,
              Republic of Korea, 15880
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Contact Us</h1>
            <p>andrew@medisoneconet.com</p>
            <p>KOR: 0082 31 461 0606</p>
            <br />
            <a href="https://www.google.com/maps?q=1141-4+Bugok-dong,+Gunpo-si,+Gyeonggi-do,+South+Korea">
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
