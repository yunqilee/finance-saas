import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/next.svg" alt="Logo" height={75} width={75} />
        <p className="font-semibold text-black text-2xl ml-2.5">Finance SaaS</p>
      </div>
    </Link>
  );
};
