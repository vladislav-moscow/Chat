import "./globals.css";


export const metadata = {
  title: "Chat App",
  description: "Chat app on next.js and FireBase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
