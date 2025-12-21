import Footer from "@/components/sheard/Footer";
import Navbar from "@/components/sheard/Navbar";

export const metadata = {
  title: "Authentication | Bd Calling Academy",
  description: "Login or Register to access your Bd Calling Academy account.",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body className=" ">
        <div className=" ">
           
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
