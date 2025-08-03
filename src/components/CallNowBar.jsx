export default function CallNowBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 bg-primary text-white p-4 flex justify-center md:hidden z-50">
      <a
        href="tel:5551234567"
        className="font-semibold text-lg hover:text-accent transition"
      >
        📞 Call Us Now
      </a>
    </div>
  );
}
