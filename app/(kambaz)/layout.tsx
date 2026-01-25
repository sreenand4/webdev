import { ReactNode } from "react";
import KambazNavigation from "./Navigation";

export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz-layout"> {/* Added wrapper div to be safe, though not strictly in snippet but good practice */}
      <table>
        <tbody>
          <tr>
            <td valign="top" width="200px">
              <KambazNavigation />
            </td>
            <td valign="top" width="100%">{children}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
