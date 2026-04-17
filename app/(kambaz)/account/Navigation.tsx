"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const pathname = usePathname();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const links = currentUser ? ["profile"] : ["signin", "signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "text-danger");
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link} href={`/account/${link}`} id={`wd-account-${link}-link`} className={`list-group-item border-0 ${active(link)}`}>
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </Link>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link href="/account/users" className={`list-group-item border-0 ${active("users")}`}>
          Users
        </Link>
      )}
    </div>
  );
}
