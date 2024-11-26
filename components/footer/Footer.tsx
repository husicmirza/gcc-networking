import Image from "next/image";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 ">
      <div className="container mx-auto px-5 py-8">
        <div className="flex flex-col items-center text-center">
          <Image
            className="w-auto h-14 "
            src="/assets/full-logo.png"
            alt=""
            width={500}
            height={500}
          />

          <p className="max-w-md mx-auto mt-4 text-neutral-700 text-center">
            Balkan Connect is a platform for Balkan expats in the Middle East to
            connect and grow together.
          </p>

          <div className="flex gap-x-4 mt-4">
            <Link href="#">
              <IconBrandInstagram className="text-neutral-700 h-7 w-7 flex-shrink-0" />
            </Link>
            <Link href="#">
              <IconBrandFacebook className="text-neutral-700 h-7 w-7 flex-shrink-0" />
            </Link>
            <Link href="#">
              <IconBrandLinkedin className="text-neutral-700 h-7 w-7 flex-shrink-0" />
            </Link>
          </div>
        </div>
        <hr className="my-10 border-neutral-200" />
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-neutral-500">
            © 2024 Balkan Connect. All Rights Reserved.
          </p>
          <div className="flex mt-3 sm:mt-0">
            <Link
              href="#"
              className="mx-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-neutral-600"
            >
              Teams
            </Link>

            <Link
              href="#"
              className="mx-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-neutral-600"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="mx-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-neutral-600"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
