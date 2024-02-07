import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <LinkedIn
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          sx={{ fontSize: 48 }}
          href="https://www.linkedin.com/in/meganju/"
        ></LinkedIn>
        <GitHub
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          sx={{ fontSize: 48 }}
          href="https://github.com/Megan-J"
        ></GitHub>
        <Email
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          sx={{ fontSize: 48 }}
        ></Email>
      </div>
    </div>
  );
}
