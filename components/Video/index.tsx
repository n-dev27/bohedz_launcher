"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {

  return (
    <section className="relative z-10 py-12 md:py-16 lg:py-20">
      <div className="container flex flex-col gap-20 justify-center items-center">
        <SectionTitle
          title="No compromises, no matter the choice."
          paragraph="We offer a number of options, so we include a standard set of features with all our tokens. All of these features are included with all of our tokens, for no extra cost, so you can rest assured that you already have the best."
          center
          mb="20px"
        />

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {/* Row 1 */}
          <div className="flex flex-col justify-between items-center gap-4">
            <Image
              src="/images/video/compliant.svg"
              alt="compliant"
              width={64}
              height={64}
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[rgba(51,65,85,1)] text-sm text-center font-medium">Spec Compliant</p>
              <p className="text-[rgba(15,23,42,1)] text-xl text-center font-normal">Works with every wallet and exchange.</p>
              <p className="text-[rgba(100,116,139,1)] text-sm text-center font-normal">All of our tokens go through rigorous testing to make sure they are fully compliant with the standards.</p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center gap-4">
            <Image
              src="/images/video/audited.svg"
              alt="audited"
              width={64}
              height={64}
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[rgba(51,65,85,1)] text-sm text-center font-medium">Audited</p>
              <p className="text-[rgba(15,23,42,1)] text-xl text-center font-normal">Tested by the best.</p>
              <p className="text-[rgba(100,116,139,1)] text-sm text-center font-normal">All of our tokens have been audited to ensure the best security practices and standards are taken care of.</p>
            </div>
          </div>
          
          <div className="flex flex-col justify-between items-center gap-4">
            <Image
              src="/images/video/formally.svg"
              alt="formally"
              width={64}
              height={64}
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[rgba(51,65,85,1)] text-sm text-center font-medium">Formally Verified</p>
              <p className="text-[rgba(15,23,42,1)] text-xl text-center font-normal">The highest security standard.</p>
              <p className="text-[rgba(100,116,139,1)] text-sm text-center font-normal">All our tokens go through a formal verification process to ensure they are safe and secure.</p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col justify-between items-center gap-4">
            <Image
              src="/images/video/source.svg"
              alt="source"
              width={64}
              height={64}
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[rgba(51,65,85,1)] text-sm text-center font-medium">Source Code Verified</p>
              <p className="text-[rgba(15,23,42,1)] text-xl text-center font-normal">Verified before you're done.</p>
              <p className="text-[rgba(100,116,139,1)] text-sm text-center font-normal">All of our tokens are pre-verified on all major block explorers, they show up as verified immediately.</p>
            </div>
          </div>
          
          <div className="flex flex-col justify-between items-center gap-4">
            <Image
              src="/images/video/access.svg"
              alt="access"
              width={64}
              height={64}
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[rgba(51,65,85,1)] text-sm text-center font-medium">Advanced Access Control</p>
              <p className="text-[rgba(15,23,42,1)] text-xl text-center font-normal">You're the only one with access.</p>
              <p className="text-[rgba(100,116,139,1)] text-sm text-center font-normal">Our tokens come with advance access control, making sure that only you have access to all token functions.</p>
            </div>
          </div>
          
          <div className="flex flex-col justify-between items-center gap-4">
            <Image
              src="/images/video/trust.svg"
              alt="trust"
              width={64}
              height={64}
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[rgba(51,65,85,1)] text-sm text-center font-medium">Trust & Confidence</p>
              <p className="text-[rgba(15,23,42,1)] text-xl text-center font-normal">Immaculate track record.</p>
              <p className="text-[rgba(100,116,139,1)] text-sm text-center font-normal">We've been building tokens for 5+ years, our tokens are used by thousands of people. Unbeatable track record.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Video;
