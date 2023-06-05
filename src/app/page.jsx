import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center	w-full translate-y-3/4 ">
        <Image
          width="300"
          height="100"
          alt="Google"
          priority={true}
          className="w-auto h-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
        />

        <HomeSearch />
      </div>
    </>
  );
}
