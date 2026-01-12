export const metadata = {
  title: "Diya Roy – Farm",
  description: "A story-driven personal website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
