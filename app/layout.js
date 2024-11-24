import "./globals.css";
import { GlobalProvider } from "./components/context/GlobalContext";

export const metadata = {
    title: "AnalizujKase app",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <GlobalProvider>{children}</GlobalProvider>
        </body>
        </html>
    );
}
