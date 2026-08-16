export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} Benjamin Niyodusenga. All rights reserved.
        </p>
        <div className="footer__links">
          <a href="https://github.com/benduse" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/benjaminniyodusenga/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:benjaminiyodusenga@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
