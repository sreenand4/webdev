import { redirect } from "next/navigation";

export default function AccountPage() {
  redirect("/account/signin");
  // Redirect happens before rendering
  return null;
}
