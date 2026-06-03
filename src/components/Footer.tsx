function Footer() {
  return (
    <footer className="footer footer-center bg-black text-white border-t border-emas/30 p-4">
      <aside>
        <p className="font-nunito text-sm">
          Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
          <span className="font-headliner tracking-widest text-emas">
            ivan.dev
          </span>
        </p>
      </aside>
    </footer>
  );
}

export default Footer;