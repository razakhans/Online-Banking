//export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform for everyone.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const loggedIn = await getLoggedInUser();
//   if(!loggedIn) redirect('/sign-in')

//   return (
//     <main className="flex h-screen w-full font-inter">
//       <Sidebar user={loggedIn} />

//       <div className="flex size-full flex-col">
//         <div className="root-layout">
//           <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
//           <div>
//             <MobileNav user={loggedIn} />
//           </div>
//         </div>
//         {children}
//       </div>
//     </main>
//   );
// }
