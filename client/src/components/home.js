import React from "react";
import style from "../home.css";

const Home = () => {
  return (
    <div className="page-content">
      <nav class="navbar">
        <div class="container">
          <h1 class="logo">O Auth</h1>
          <ul class="nav">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      </nav>

      <section class="section-a">
        <div class="container">
          <div>
            <h1>Authorization of the future.</h1>
            <p>
              OAuth 2.0, which stands for “Open Authorization”, is a standard
              designed to allow a website or application to access resources
              hosted by other web apps on behalf of a user. It replaced OAuth
              1.0 in 2012 and is now the de facto industry standard for online
              authorization. OAuth 2.0 provides consented access and restricts
              actions of what the client app can perform on resources on behalf
              of the user, without ever sharing the user's credentials. Although
              the web is the main platform for OAuth 2, the specification also
              describes how to handle this kind of delegated access to other
              client types (browser-based applications, server-side web
              applications, native/mobile apps, connected devices, etc.)
            </p>
          </div>
          {/* <img src="https://i.ibb.co/37Y74kv/showcase.jpg" alt="" /> */}
        </div>
      </section>

      <section id="about" class="section-b">
        <div class="overlay">
          <div class="section-b-inner py-5">
            <h2 class="text-5 mt-1">
              OAuth 2.0 Access Tokens and Authorization Code
            </h2>
            <p class="mt-1">
              OAuth 2.0 uses Access Tokens. An Access Token is a piece of data
              that represents the authorization to access resources on behalf of
              the end-user. OAuth 2.0 doesn’t define a specific format for
              Access Tokens. However, in some contexts, the JSON Web Token (JWT)
              format is often used. This enables token issuers to include data
              in the token itself. Also, for security reasons, Access Tokens may
              have an expiration date.
            </p>
          </div>
        </div>
      </section>

      {/* <section class="section-c">
        <div class="gallery">
          <a href="https://i.ibb.co/CHLBZnp/gal2323.jpg" class="big">
            <img src="https://i.ibb.co/CHLBZnp/gal2323.jpg" alt="" />
          </a>
          <a href="https://i.ibb.co/4pBbhfY/gal39834.jpg" class="big">
            <img src="https://i.ibb.co/4pBbhfY/gal39834.jpg" alt="" />
          </a>
          <a href="https://i.ibb.co/xSnHP7g/gal43884.jpg" class="big">
            <img src="https://i.ibb.co/xSnHP7g/gal43884.jpg" alt="" />
          </a>
          <a href="https://i.ibb.co/QN6Bnrb/gal4958.jpg" class="big">
            <img src="https://i.ibb.co/QN6Bnrb/gal4958.jpg" alt="" />
          </a>
          <a href="https://i.ibb.co/dGZvj75/gal4545.jpg" class="big">
            <img src="https://i.ibb.co/dGZvj75/gal4545.jpg" alt="" />
          </a>
          <a href="https://i.ibb.co/S6FVFNt/gal74744.jpg" class="big">
            <img src="https://i.ibb.co/S6FVFNt/gal74744.jpg" alt="" />
          </a>
        </div>
      </section> */}
      <footer class="section-footer py-4 bg-primary">
        <div class="container">
          <div>
            <h2 class="text-2 mb-1">Lorem ipsum dolor sit.</h2>
            <a href="http://twitter.com">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a href="http://facebook.com">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="http://youtube.com">
              <i class="fab fa-youtube fa-2x"></i>
            </a>
          </div>
          <div>
            <h3>Company Info</h3>
            <ul>
              <li>
                <a href="#">All Products</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Blog Posts</h3>
            <ul>
              <li>
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
              <li>
                <a href="https://www.facebook.com/home.php">Facebook</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor.</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor.</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Subscribe</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form
              class="mt-1"
              name="email-form"
              method="POST"
              data-netlify="true"
            >
              <div class="email-form">
                <span class="form-control-wrap">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    size="40"
                    class="form-control"
                    placeholder="E-mail"
                  />
                </span>
                <button
                  type="submit"
                  value="Submit"
                  class="form-control submit"
                >
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
