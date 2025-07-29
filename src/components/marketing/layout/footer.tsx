export default function Footer() {
  return (
    <footer
      className="container mx-auto max-w-7xl px-6 py-4 text-center"
      role="contentinfo"
      aria-label="site footer"
    >
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
}
