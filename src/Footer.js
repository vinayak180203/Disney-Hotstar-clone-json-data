import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.css';


function Footer() {
    

return (<footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">Company</h1>
    <ul class="nav__ul">
        <li>
          <a href="#">About us</a>
        </li>

        <li>
          <a href="#">Careers</a>
        </li>
    </ul>
  </div>

  <div class="footer__addr">
    <h1 class="footer__logo">View Website in</h1>
    <ul class="nav__ul">
        <li>
          <a href="#"><i class="fas fa-check icon"></i>English</a>
        </li>
    </ul>
  </div>

  <div class="footer__addr">
    <h1 class="footer__logo">Need Help?</h1>
    <ul class="nav__ul">
        <li>
          <a href="#">Visit Help Center</a>
        </li>

        <li>
          <a href="#">Share Feedback</a>
        </li>
    </ul>
  </div>

  <div class="footer__addr">
    <h1 class="footer__logo">Connect with Us</h1>
    <a href="#"><i class="fa-brands fa-facebook-f facebook-icon"></i></a><a href="#"><i class="fa-brands fa-twitter icon"></i></a>
  </div>
  
  <div class="legal">
  <ul class="nav__ul">
        <li>
        <p>&copy; 2023 STAR. All Rights Reserved.</p>
        </li>
        <li>
        <p>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">FAQ</a>
        </p>
        </li>
    </ul>
  </div>
</footer>)

};

export default Footer;