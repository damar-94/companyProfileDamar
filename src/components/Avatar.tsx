function Avatar() {
  return (
    <nav className="flex items-center px-4">
      <img className="size-10 md:size-12 rounded-lg" src="/cake.png" alt="" />
      <div className="font-Inter text-[#FAFAFF]">
        <p className="md:text-[18px] text-[14px] px-4"><span className="text-[#EAB308]">ECA</span> Bakery</p>
      </div>
    </nav>
  );
}
export default Avatar;
