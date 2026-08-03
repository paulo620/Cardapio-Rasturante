
import "./globals.css";



export const metadata = {
  title: "Cardapio Digital",
  description: "Cardápio digital para restaurantes, bares e lanchonetes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
