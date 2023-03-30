import App from "./App";
import './back.css'
function Home({ user }) {
  if (user) {
    return (
      <h1><App /></h1>
    );
  } else {
    return (
      <div className="body-back">
        <div className="yog">
            <div class="portfolio-description">
              <h2>Welcome! <span>To Serenity Strength & ZenFit Yoga </span></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam</p>
              <div class="portfolio-social-icons">
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
                <a href="#"><i class="bi bi-telegram"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Home;
