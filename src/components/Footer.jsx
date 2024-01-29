import React, { useContext } from "react";
import "./App.css"

function Footer() {
  return (
    <footer class="footer">
            <div class="container-footer">
                <div class="row">
                    <div class="footer-col">
                        <h4>Hevenly Interior </h4>
                        <ul>
                            <li><p>Make room for better living </p></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Useful Links</h4>
                        <ul>
                            <li> <a href="#">About</a></li>
                            <li> <a href="#">Partners</a></li>
                            <li> <a href="#">Contact</a></li>
                            <li> <a href="#"></a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Help?</h4>
                        <ul>
                            <li> <a href="#">FAQ</a></li>
                            <li> <a href="#">Terms & Conditions</a></li>
                            <li> <a href="#">Privacy</a></li>
                        </ul>
                    </div>              
                </div>
            </div>
            <div class="footer-bottom">
                <p>@Dinesh Reddy 2022, heavenlyinterior.com</p>
            </div>
        </footer>
  );
}

export default Footer;
