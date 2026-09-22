
export function Footer() {
  return (
    <footer className="w-full bg-slate-100 px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <div className="space-y-1 text-center text-sm sm:text-base">
          <p>
            <span className="font-semibold text-slate-600">Address:</span>
          </p>
          <p className="text-slate-400">
            Gang Terigu no 55, Jalan Magelang, Yogyakarta
          </p>

          <p className="pt-2">
            <span className="font-semibold text-[#6b7280]">Opening Hour:</span>
          </p>
          <p className="text-slate-400">Office: 8:00-16:00</p>
          <p className="text-slate-400">Store: 8:00-24:00</p>

          <p className="pt-2">
            <span className="font-semibold text-slate-600">Phone:</span>{" "}
            <span className="text-slate-400">08123445678910</span>
          </p>

          <p>
            <span className="font-semibold text-slate-600">E-Mail:</span>{" "}
            <span className="text-slate-400">admin@ecabakery.com</span>
          </p>
        <div className="w-full text-sm text-slate-600 mt-4">
          <span className="text-[#EAB308] font-bold">ECA</span> Bakery © {new Date().getFullYear()}
        </div>
        </div>

       

      </div>
    </footer>
  );
}
