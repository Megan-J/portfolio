import { Description, LinkedIn, GitHub, Email } from "@mui/icons-material";
import Link from "@mui/material/Link";
//import Link from "next/link";

export default function Socials() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        <Link
          href=""
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          target="_blank"
        >
          <Description sx={{ fontSize: 48 }}></Description>
        </Link>

        <Link
          href="https://www.linkedin.com/in/meganju/"
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          target="_blank"
        >
          <LinkedIn sx={{ fontSize: 48 }}></LinkedIn>
        </Link>

        <Link
          href="https://github.com/Megan-J"
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          target="_blank"
        >
          <GitHub sx={{ fontSize: 48 }}></GitHub>
        </Link>

        <Link
          href="mailto:mmju2103@gmail.com"
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          target="_blank"
        >
          <Email sx={{ fontSize: 48 }}></Email>
        </Link>
      </div>
    </div>
  );
}
