import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Navbar from "~/component/Navbar";
import Footer from "~/component/Footer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="flex flex-col justify-between min-h-screen">
        <Navbar />
        <div className="pt-40 pb-10">
          <Component {...pageProps} />
        </div>
        <Footer />

      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
