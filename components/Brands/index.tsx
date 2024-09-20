import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "Token Builder",
  },
  {
    id: 2,
    name: "Fair Launch",
  },
  {
    id: 3,
    name: "Ultimate Token",
  },
  {
    id: 4,
    name: "Deflationary Token",
  },
  {
    id: 5,
    name: "Dividend Token",
  },
  {
    id: 6,
    name: "Solana SPL Token",
  },
  {
    id: 7,
    name: "Token Watcher",
  },
    {
    id: 8,
    name: "Ethereum Vanity Address Generator",
  },
  {
    id: 9,
    name: "Multi Chain Balance Checker",
  },
  {
    id: 10,
    name: "Frequently Asked Questions",
  },
  {
    id: 11,
    name: "Privacy Policy",
  },
  {
    id: 12,
    name: "Terms & Conditions",
  },
  {
    id: 13,
    name: "Affiliate Program",
  },
  {
    id: 14,
    name: "Contact",
  },

];

const Brands = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col gap-8 justify-center items-center">
        <div className="flex gap-2 items-center">
          <Image
            src="/images/favicon.svg"
            alt="eth"
            width={40}
            height={40}
          />
          <p className="text-[rgba(2,8,23,1)] text-2xl font-medium">CreateMyToken</p>
        </div>
        <div className="max-w-[750px] mx-auto flex flex-wrap justify-center gap-4">
          {brandsData.map((brand) => (
            <SingleBrand key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { name } = brand;

  return (
    <p className="text-[rgba(2,8,23,1)] text-sm text-nowrap font-medium">{name}</p>
  );
};
