import Container from '../Container';

import InstagramLogo from '../InstagramLogo';

export default () => (
  <>
    <style jsx>{`
      footer {
        margin-top: 3rem;
      }
      footer a {
        padding: 1em;
      }
    `}</style>
    <footer>
      <Container>
        
        <a href="https://www.instagram.com/basti_schenk/">
          <InstagramLogo />
          Instagram
        </a>
        <a href="https://www.linkedin.com/in/sebastian-schenk1/">
          <img src="/static/linkedin-logo.png" width="18" />
          Instagram
        </a>
      </Container>
    </footer>
  </>
);
