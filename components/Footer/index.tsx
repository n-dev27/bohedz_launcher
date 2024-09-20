import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 flex justify-center px-8"
        data-wow-delay=".1s"
      >
        <div className="py-8 w-[1280px] border-t-[1px] border-[rgba(148,163,184,0.2)] flex justify-between items-center">
          <p className="text-[rgba(100,116,139,1)] text-sm">
            © 2024 CreateMyToken. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Image
              src="/images/footer/x.svg"
              alt="twitter"
              width={24}
              height={24}
            />
            <Image
              src="/images/footer/github.svg"
              alt="github"
              width={24}
              height={24}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
