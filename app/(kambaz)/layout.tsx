import "./styles.css";
import KambazNavigation from "./Navigation";

export default function KambazLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="wd-kambaz-layout">
      <div className="d-flex">
        <div className="d-none d-md-block bg-black">
          <KambazNavigation />
        </div>
        <div className="wd-main-content-offset p-3">
          {children}
        </div>
      </div>
    </div>
  );
}

