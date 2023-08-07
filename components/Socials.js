// links
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiTelegramLine,
  RiBehanceLine,
  RiPinterestLine,
  RiDribbbleLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        target="_blank"
        href={"https://www.instagram.com/eldor_shodmonov99/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://t.me/JohnDoell"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiTelegramLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link>
    </div>
  );
};

export default Socials;
