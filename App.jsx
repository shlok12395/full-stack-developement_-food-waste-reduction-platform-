import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";


// ============================================================
// FOOD WASTE REDUCTION PLATFORM
// Week 1 - React + Vite
// Week 2 - Components + Props
// Week 3 - useState + Forms
// Week 4 - useEffect + Loading
// Week 5 - React Router + Navigation
// ============================================================


// ============================================================
// HEADER COMPONENT
// ============================================================

function Header() {
  return (
    <header className="navbar">

      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo">

          <div className="logo-icon">
            ♻
          </div>

          <div>
            <div className="logo-title">
              Food<span>Share</span>
            </div>

            <small>
              Reduce • Share • Care
            </small>
          </div>

        </Link>


        {/* Navigation */}

        <nav className="navigation">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>


          <NavLink
            to="/donate"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Donate Food
          </NavLink>


          <NavLink
            to="/claim"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Claim Food
          </NavLink>


          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>

        </nav>


        <Link
          to="/donate"
          className="nav-button"
        >
          + Donate Food
        </Link>

      </div>

    </header>
  );
}


// ============================================================
// FOOTER COMPONENT
// ============================================================

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <div className="footer-logo">
            ♻ FoodShare
          </div>

          <p>
            Turning surplus food into hope,
            one meal at a time.
          </p>

        </div>


        <div className="footer-section">

          <h4>Platform</h4>

          <Link to="/">Home</Link>
          <Link to="/donate">Donate Food</Link>
          <Link to="/claim">Claim Food</Link>

        </div>


        <div className="footer-section">

          <h4>Project</h4>

          <Link to="/about">About Us</Link>

          <span>
            MERN Stack Project
          </span>

          <span>
            BCA Honours
          </span>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 FoodShare — Food Waste Reduction Platform
        </p>

        <p>
          Built with React
        </p>

      </div>

    </footer>
  );
}


// ============================================================
// BUTTON COMPONENT
// ============================================================

function Button({
  children,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`primary-button ${className}`}
    >
      {children}
    </button>
  );
}


// ============================================================
// FOOD CARD COMPONENT
// Props are used here
// ============================================================

function FoodCard({
  title,
  quantity,
  location,
  expiry,
  category,
  onClaim,
}) {
  return (
    <div className="food-card">

      <div className="food-image">

        <span className="food-icon">
          🍱
        </span>

        <span className="category-badge">
          {category}
        </span>

      </div>


      <div className="food-content">

        <h3>
          {title}
        </h3>


        <div className="food-details">

          <div className="detail-item">

            <span className="detail-icon">
              📦
            </span>

            <div>
              <small>Quantity</small>
              <strong>{quantity}</strong>
            </div>

          </div>


          <div className="detail-item">

            <span className="detail-icon">
              📍
            </span>

            <div>
              <small>Location</small>
              <strong>{location}</strong>
            </div>

          </div>


          <div className="detail-item">

            <span className="detail-icon">
              ⏰
            </span>

            <div>
              <small>Expiry</small>
              <strong>{expiry}</strong>
            </div>

          </div>

        </div>


        {onClaim && (

          <button
            className="claim-button"
            onClick={onClaim}
          >
            Claim This Food
            <span>→</span>
          </button>

        )}

      </div>

    </div>
  );
}


// ============================================================
// STAT CARD COMPONENT
// ============================================================

function StatCard({
  icon,
  number,
  label,
}) {
  return (
    <div className="stat-card">

      <div className="stat-icon">
        {icon}
      </div>

      <div>
        <h3>{number}</h3>
        <p>{label}</p>
      </div>

    </div>
  );
}


// ============================================================
// HOME PAGE
// ============================================================

function Home({ foods }) {

  const [search, setSearch] = useState("");


  // Search functionality

  const filteredFoods = foods.filter((food) =>

    food.title
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    food.location
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    food.category
      .toLowerCase()
      .includes(search.toLowerCase())

  );


  return (
    <div>


      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="hero">

        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-tag">
              🌱 Together for a Waste-Free Future
            </div>


            <h1>
              Good Food
              <span> Should Never </span>
              Go to Waste.
            </h1>


            <p>
              FoodShare connects restaurants, households and
              organizations with people who can put surplus
              food to good use.
            </p>


            <div className="hero-buttons">

              <Link
                to="/donate"
                className="hero-primary"
              >
                Donate Surplus Food
                <span>→</span>
              </Link>


              <Link
                to="/claim"
                className="hero-secondary"
              >
                Find Available Food
              </Link>

            </div>


            <div className="hero-trust">

              <div className="avatars">
                <span>👨</span>
                <span>👩</span>
                <span>🧑</span>
                <span>👨</span>
              </div>

              <p>
                Join our community
                <strong> making a difference</strong>
              </p>

            </div>

          </div>


          {/* Hero Visual */}

          <div className="hero-visual">

            <div className="hero-circle">

              <div className="hero-food-card">

                <div className="large-food-icon">
                  🥗
                </div>

                <div>

                  <h4>
                    Fresh & Healthy
                  </h4>

                  <p>
                    Ready to share
                  </p>

                </div>

                <span className="heart">
                  ♡
                </span>

              </div>


              <div className="floating-card floating-one">

                <span>🍎</span>

                <div>
                  <strong>25 kg</strong>
                  <small>Food Saved</small>
                </div>

              </div>


              <div className="floating-card floating-two">

                <span>🌍</span>

                <div>
                  <strong>Community</strong>
                  <small>Making Impact</small>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <section className="stats-section">

        <div className="stats-container">

          <StatCard
            icon="🍱"
            number={foods.length}
            label="Food Items Available"
          />


          <StatCard
            icon="♻"
            number="120+"
            label="Meals Saved"
          />


          <StatCard
            icon="🤝"
            number="45+"
            label="Community Members"
          />


          <StatCard
            icon="🌱"
            number="80 kg"
            label="Food Waste Reduced"
          />

        </div>

      </section>


      {/* =====================================================
          AVAILABLE FOOD
      ===================================================== */}

      <section className="section">

        <div className="section-heading">

          <div>

            <span className="section-label">
              AVAILABLE NOW
            </span>

            <h2>
              Fresh Food Waiting
              <span> to be Shared</span>
            </h2>

            <p>
              Discover surplus food available in your
              community and help prevent unnecessary waste.
            </p>

          </div>


          <Link
            to="/claim"
            className="view-all"
          >
            View All Food →
          </Link>

        </div>


        {/* Search */}

        <div className="search-box">

          <span>
            🔍
          </span>

          <input
            type="text"
            placeholder="Search food, category or location..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        <div className="food-grid">

          {filteredFoods.length > 0 ? (

            filteredFoods
              .slice(0, 6)
              .map((food) => (

                <FoodCard
                  key={food.id}
                  title={food.title}
                  quantity={food.quantity}
                  location={food.location}
                  expiry={food.expiry}
                  category={food.category}
                />

              ))

          ) : (

            <div className="no-food">

              <div>
                🍽️
              </div>

              <h3>
                No food found
              </h3>

              <p>
                Try another search or donate some surplus food.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="how-section">

        <div className="section-heading center">

          <span className="section-label">
            SIMPLE PROCESS
          </span>

          <h2>
            How FoodShare Works
          </h2>

          <p>
            Making food donation simple, quick and meaningful.
          </p>

        </div>


        <div className="steps">

          <div className="step">

            <div className="step-number">
              01
            </div>

            <div className="step-icon">
              📦
            </div>

            <h3>
              Donate
            </h3>

            <p>
              Have extra food? Add its details
              to our platform.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step">

            <div className="step-number">
              02
            </div>

            <div className="step-icon">
              🔎
            </div>

            <h3>
              Discover
            </h3>

            <p>
              People in your community can
              find available food.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step">

            <div className="step-number">
              03
            </div>

            <div className="step-icon">
              🤝
            </div>

            <h3>
              Claim
            </h3>

            <p>
              Claim available food and help
              reduce food waste.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CALL TO ACTION
      ===================================================== */}

      <section className="cta-section">

        <div className="cta-content">

          <div className="cta-icon">
            🌱
          </div>

          <h2>
            Have Extra Food?
          </h2>

          <p>
            Your surplus could become someone's next meal.
            Share it instead of throwing it away.
          </p>

          <Link
            to="/donate"
            className="cta-button"
          >
            Donate Food Today →
          </Link>

        </div>

      </section>

    </div>
  );
}


// ============================================================
// DONATE PAGE
// ============================================================

function Donate({ addFood }) {

  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [expiry, setExpiry] = useState("");
  const [category, setCategory] = useState("Cooked Food");


  const handleSubmit = (event) => {

    event.preventDefault();


    if (
      !title ||
      !quantity ||
      !location ||
      !expiry
    ) {

      alert(
        "Please fill in all required fields."
      );

      return;
    }


    addFood({

      title,
      quantity,
      location,
      expiry,
      category,

    });


    // Clear form

    setTitle("");
    setQuantity("");
    setLocation("");
    setExpiry("");
    setCategory("Cooked Food");


    alert(
      "Food has been successfully donated!"
    );

  };


  return (
    <div className="form-page">

      <div className="form-header">

        <span className="section-label">
          MAKE A DIFFERENCE
        </span>

        <h1>
          Donate Surplus Food
        </h1>

        <p>
          Share your extra food with someone who needs it
          and help reduce food waste in our community.
        </p>

      </div>


      <div className="form-layout">


        {/* Information Card */}

        <div className="info-card">

          <div className="info-icon">
            💚
          </div>

          <h2>
            Every Donation Matters
          </h2>

          <p>
            By donating surplus food, you help create
            a more sustainable community and ensure
            good food reaches people instead of landfills.
          </p>


          <div className="info-points">

            <div>
              <span>✓</span>
              Reduce food waste
            </div>

            <div>
              <span>✓</span>
              Help your community
            </div>

            <div>
              <span>✓</span>
              Support sustainability
            </div>

            <div>
              <span>✓</span>
              Make a positive impact
            </div>

          </div>

        </div>


        {/* Form */}

        <form
          className="donate-form"
          onSubmit={handleSubmit}
        >

          <div className="form-title">

            <h2>
              Food Details
            </h2>

            <p>
              Enter information about the food you want
              to donate.
            </p>

          </div>


          <div className="input-row">

            <div className="input-group">

              <label>
                Food Name *
              </label>

              <input
                type="text"
                placeholder="e.g. Vegetable Biryani"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
              />

            </div>


            <div className="input-group">

              <label>
                Quantity *
              </label>

              <input
                type="text"
                placeholder="e.g. 5 kg / 20 packets"
                value={quantity}
                onChange={(e) =>
                  setQuantity(e.target.value)
                }
              />

            </div>

          </div>


          <div className="input-row">

            <div className="input-group">

              <label>
                Food Category
              </label>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
              >

                <option>
                  Cooked Food
                </option>

                <option>
                  Fruits & Vegetables
                </option>

                <option>
                  Bakery
                </option>

                <option>
                  Packaged Food
                </option>

                <option>
                  Dairy Products
                </option>

              </select>

            </div>


            <div className="input-group">

              <label>
                Expiry Date *
              </label>

              <input
                type="date"
                value={expiry}
                onChange={(e) =>
                  setExpiry(e.target.value)
                }
              />

            </div>

          </div>


          <div className="input-group">

            <label>
              Pickup Location *
            </label>

            <input
              type="text"
              placeholder="Enter pickup location"
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
            />

          </div>


          <div className="form-note">

            💡 Please ensure the food is safe
            and suitable for consumption.

          </div>


          <Button type="submit">
            Donate Food →
          </Button>

        </form>

      </div>

    </div>
  );
}


// ============================================================
// CLAIM PAGE
// ============================================================

function Claim({
  foods,
  claimFood,
}) {

  const [search, setSearch] = useState("");


  const filteredFoods = foods.filter((food) =>

    food.title
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    food.location
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    food.category
      .toLowerCase()
      .includes(search.toLowerCase())

  );


  return (
    <div className="claim-page">


      <div className="claim-header">

        <div>

          <span className="section-label">
            AVAILABLE FOOD
          </span>

          <h1>
            Find Food Near You
          </h1>

          <p>
            Discover surplus food available from
            our community.
          </p>

        </div>


        <div className="available-count">

          <strong>
            {foods.length}
          </strong>

          <span>
            Available Items
          </span>

        </div>

      </div>


      {/* Search */}

      <div className="search-box large">

        <span>
          🔍
        </span>

        <input
          type="text"
          placeholder="Search by food name, location or category..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>


      {/* Food List */}

      {filteredFoods.length > 0 ? (

        <div className="food-grid claim-grid">

          {filteredFoods.map((food) => (

            <FoodCard
              key={food.id}
              title={food.title}
              quantity={food.quantity}
              location={food.location}
              expiry={food.expiry}
              category={food.category}
              onClaim={() =>
                claimFood(food.id)
              }
            />

          ))}

        </div>

      ) : (

        <div className="empty-state">

          <div>
            🍽️
          </div>

          <h2>
            No Food Available
          </h2>

          <p>
            There are currently no food items matching
            your search.
          </p>

          <Link
            to="/donate"
            className="hero-primary"
          >
            Donate Food Instead →
          </Link>

        </div>

      )}

    </div>
  );
}


// ============================================================
// ABOUT PAGE
// ============================================================

function About() {

  return (
    <div className="about-page">


      <section className="about-hero">

        <span className="section-label">
          ABOUT OUR PROJECT
        </span>

        <h1>
          Building a More
          <span> Sustainable Future</span>
        </h1>

        <p>
          FoodShare is a Food Waste Reduction Platform
          designed to connect surplus food with people
          who can use it.
        </p>

      </section>


      <section className="about-grid">

        <div className="about-card">

          <div className="about-card-icon">
            🎯
          </div>

          <h2>
            Our Mission
          </h2>

          <p>
            To reduce unnecessary food waste by creating
            a simple digital platform where surplus food
            can be donated and claimed.
          </p>

        </div>


        <div className="about-card">

          <div className="about-card-icon">
            🌱
          </div>

          <h2>
            Our Vision
          </h2>

          <p>
            A community where good food is shared instead
            of wasted and every available meal can make
            a meaningful difference.
          </p>

        </div>


        <div className="about-card">

          <div className="about-card-icon">
            🤝
          </div>

          <h2>
            Community
          </h2>

          <p>
            Bringing donors and food seekers together
            through an easy-to-use platform.
          </p>

        </div>

      </section>


      <section className="technology-section">

        <div>

          <span className="section-label">
            PROJECT TECHNOLOGY
          </span>

          <h2>
            Built with Modern
            <span> Web Technology</span>
          </h2>

        </div>


        <div className="technology-list">

          <div className="technology">
            <strong>React</strong>
            <span>Frontend UI</span>
          </div>

          <div className="technology">
            <strong>Vite</strong>
            <span>Development Tool</span>
          </div>

          <div className="technology">
            <strong>JavaScript</strong>
            <span>Application Logic</span>
          </div>

          <div className="technology">
            <strong>React Router</strong>
            <span>Navigation</span>
          </div>

        </div>

      </section>

    </div>
  );
}


// ============================================================
// MAIN APP
// ============================================================

function App() {


  // ==========================================================
  // WEEK 3 - STATE MANAGEMENT
  // ==========================================================

  const [foods, setFoods] = useState([]);


  // ==========================================================
  // WEEK 4 - LOADING STATE
  // ==========================================================

  const [loading, setLoading] = useState(true);


  // ==========================================================
  // WEEK 4 - useEffect
  // Mock Data Loading + Cleanup
  // ==========================================================

  useEffect(() => {

    console.log(
      "Food data is loading..."
    );


    const timer = setTimeout(() => {

      setFoods([

        {
          id: 1,
          title: "Vegetable Biryani",
          quantity: "5 kg",
          location: "SG Road, Ahmedabad",
          expiry: "20 Sep 2026",
          category: "Cooked Food",
        },

        {
          id: 2,
          title: "Fresh Bread",
          quantity: "15 loaves",
          location: "CG Road, Ahmedabad",
          expiry: "21 Sep 2026",
          category: "Bakery",
        },

        {
          id: 3,
          title: "Fresh Vegetables",
          quantity: "10 kg",
          location: "Satellite, Ahmedabad",
          expiry: "22 Sep 2026",
          category: "Fruits & Vegetables",
        },

        {
          id: 4,
          title: "Packaged Snacks",
          quantity: "30 packets",
          location: "Navrangpura, Ahmedabad",
          expiry: "25 Sep 2026",
          category: "Packaged Food",
        },

        {
          id: 5,
          title: "Fresh Fruit Basket",
          quantity: "8 kg",
          location: "Vastrapur, Ahmedabad",
          expiry: "23 Sep 2026",
          category: "Fruits & Vegetables",
        },

        {
          id: 6,
          title: "Rice & Dal Meals",
          quantity: "20 meals",
          location: "Paldi, Ahmedabad",
          expiry: "20 Sep 2026",
          category: "Cooked Food",
        },

      ]);


      setLoading(false);

    }, 1000);


    // Cleanup function

    return () => {

      clearTimeout(timer);

      console.log(
        "Food loading cleanup completed."
      );

    };

  }, []);


  // ==========================================================
  // ADD FOOD
  // ==========================================================

  const addFood = (food) => {

    setFoods((previousFoods) => [

      ...previousFoods,

      {
        id: Date.now(),
        ...food,
      },

    ]);

  };


  // ==========================================================
  // CLAIM FOOD
  // ==========================================================

  const claimFood = (id) => {

    setFoods((previousFoods) =>

      previousFoods.filter(
        (food) => food.id !== id
      )

    );

  };


  // ==========================================================
  // APPLICATION UI
  // ==========================================================

  return (

    <BrowserRouter>

      <div className="app">

        <Header />


        <main>

          {loading ? (

            <div className="loading-screen">

              <div className="loading-icon">
                ♻
              </div>

              <h2>
                Loading FoodShare...
              </h2>

              <p>
                Preparing available food for you
              </p>

              <div className="loader"></div>

            </div>

          ) : (

            <Routes>

              <Route
                path="/"
                element={
                  <Home foods={foods} />
                }
              />


              <Route
                path="/donate"
                element={
                  <Donate
                    addFood={addFood}
                  />
                }
              />


              <Route
                path="/claim"
                element={
                  <Claim
                    foods={foods}
                    claimFood={claimFood}
                  />
                }
              />


              <Route
                path="/about"
                element={
                  <About />
                }
              />

            </Routes>

          )}

        </main>


        <Footer />

      </div>


      {/* ======================================================
          ALL CSS IS INCLUDED HERE
          So you do NOT need a separate App.css file.
         ====================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }


        body {
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          background: #f7faf7;
          color: #173b2a;
        }


        a {
          text-decoration: none;
          color: inherit;
        }


        button,
        input,
        select {
          font-family: inherit;
        }


        /* ================================================
           NAVBAR
        ================================================ */

        .navbar {
          background: #ffffff;
          border-bottom: 1px solid #e7eee9;
          position: sticky;
          top: 0;
          z-index: 100;
        }


        .nav-container {
          max-width: 1200px;
          margin: auto;
          padding: 16px 24px;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }


        .logo {
          display: flex;
          align-items: center;
          gap: 11px;
        }


        .logo-icon {
          width: 45px;
          height: 45px;
          border-radius: 13px;
          background: #dff4e5;
          color: #159447;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 25px;
        }


        .logo-title {
          font-size: 22px;
          font-weight: 800;
          color: #163d2a;
        }


        .logo-title span {
          color: #159447;
        }


        .logo small {
          font-size: 10px;
          color: #7b9183;
          letter-spacing: 1px;
        }


        .navigation {
          display: flex;
          align-items: center;
          gap: 8px;
        }


        .nav-link {
          padding: 10px 14px;
          border-radius: 9px;
          color: #65796d;
          font-size: 14px;
          font-weight: 600;
          transition: 0.2s;
        }


        .nav-link:hover {
          background: #eff8f1;
          color: #159447;
        }


        .nav-link.active {
          color: #159447;
          background: #eaf7ed;
        }


        .nav-button {
          background: #159447;
          color: white;
          padding: 12px 18px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 14px;
        }


        /* ================================================
           HERO
        ================================================ */

        .hero {
          background:
            linear-gradient(
              135deg,
              #f0faf2 0%,
              #ffffff 60%,
              #e8f7ec 100%
            );

          overflow: hidden;
        }


        .hero-container {
          max-width: 1200px;
          min-height: 570px;
          margin: auto;
          padding: 75px 24px;

          display: grid;
          grid-template-columns: 1fr 0.9fr;
          align-items: center;
          gap: 50px;
        }


        .hero-tag {
          display: inline-block;
          background: #e1f4e5;
          color: #148b42;
          padding: 9px 15px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 20px;
        }


        .hero h1 {
          font-size: clamp(44px, 5vw, 68px);
          line-height: 1.05;
          letter-spacing: -2.5px;
          color: #163b29;
          max-width: 650px;
        }


        .hero h1 span {
          color: #159447;
        }


        .hero-content > p {
          max-width: 570px;
          color: #63776b;
          font-size: 17px;
          line-height: 1.8;
          margin-top: 22px;
        }


        .hero-buttons {
          display: flex;
          gap: 14px;
          margin-top: 30px;
          flex-wrap: wrap;
        }


        .hero-primary,
        .hero-secondary {
          padding: 14px 21px;
          border-radius: 10px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }


        .hero-primary {
          background: #159447;
          color: white;
          box-shadow: 0 8px 20px rgba(21, 148, 71, 0.2);
        }


        .hero-secondary {
          background: white;
          color: #315440;
          border: 1px solid #d9e7dc;
        }


        .hero-trust {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 32px;
        }


        .avatars {
          display: flex;
        }


        .avatars span {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid white;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-left: -7px;
        }


        .avatars span:first-child {
          margin-left: 0;
        }


        .hero-trust p {
          color: #728379;
          font-size: 13px;
        }


        .hero-trust strong {
          color: #315440;
        }


        /* Hero Visual */

        .hero-visual {
          display: flex;
          align-items: center;
          justify-content: center;
        }


        .hero-circle {
          width: 390px;
          height: 390px;
          border-radius: 50%;
          background: #dff3e4;

          position: relative;

          display: flex;
          align-items: center;
          justify-content: center;
        }


        .hero-food-card {
          width: 270px;
          background: white;
          border-radius: 20px;
          padding: 20px;

          display: flex;
          align-items: center;
          gap: 15px;

          box-shadow:
            0 20px 50px rgba(35, 82, 52, 0.15);

          transform: rotate(-5deg);
        }


        .large-food-icon {
          width: 65px;
          height: 65px;
          background: #e7f7ea;
          border-radius: 15px;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 34px;
        }


        .hero-food-card h4 {
          font-size: 15px;
          color: #214832;
        }


        .hero-food-card p {
          font-size: 12px;
          color: #83958a;
          margin-top: 4px;
        }


        .heart {
          margin-left: auto;
          color: #ef6c67;
          font-size: 25px;
        }


        .floating-card {
          position: absolute;
          background: white;
          padding: 12px 16px;
          border-radius: 13px;

          display: flex;
          align-items: center;
          gap: 10px;

          box-shadow: 0 12px 30px rgba(35, 82, 52, 0.12);
        }


        .floating-card > span {
          font-size: 25px;
        }


        .floating-card strong,
        .floating-card small {
          display: block;
        }


        .floating-card strong {
          font-size: 13px;
          color: #214832;
        }


        .floating-card small {
          color: #829288;
          font-size: 10px;
          margin-top: 2px;
        }


        .floating-one {
          top: 45px;
          left: -30px;
        }


        .floating-two {
          bottom: 45px;
          right: -30px;
        }


        /* ================================================
           STATS
        ================================================ */

        .stats-section {
          background: white;
          border-bottom: 1px solid #edf1ee;
        }


        .stats-container {
          max-width: 1200px;
          margin: auto;
          padding: 28px 24px;

          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }


        .stat-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px;
        }


        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #eaf7ed;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 23px;
        }


        .stat-card h3 {
          font-size: 23px;
          color: #173d29;
        }


        .stat-card p {
          color: #7b8d82;
          font-size: 12px;
          margin-top: 3px;
        }


        /* ================================================
           GENERAL SECTION
        ================================================ */

        .section {
          max-width: 1200px;
          margin: auto;
          padding: 80px 24px;
        }


        .section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 30px;
        }


        .section-heading.center {
          display: block;
          text-align: center;
        }


        .section-label {
          color: #159447;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }


        .section-heading h2,
        .technology-section h2 {
          font-size: 36px;
          color: #173d29;
          margin-top: 7px;
          letter-spacing: -1px;
        }


        .section-heading h2 span,
        .technology-section h2 span {
          color: #159447;
        }


        .section-heading p {
          color: #77897f;
          max-width: 600px;
          line-height: 1.7;
          margin-top: 10px;
        }


        .view-all {
          color: #159447;
          font-weight: 700;
          font-size: 14px;
          white-space: nowrap;
        }


        /* ================================================
           SEARCH
        ================================================ */

        .search-box {
          background: white;
          border: 1px solid #e1eae3;
          border-radius: 12px;

          display: flex;
          align-items: center;
          gap: 10px;

          max-width: 520px;
          padding: 13px 16px;
          margin-bottom: 25px;
        }


        .search-box.large {
          max-width: 100%;
          margin: 0 0 35px;
        }


        .search-box span {
          font-size: 17px;
        }


        .search-box input {
          border: 0;
          outline: 0;
          width: 100%;
          font-size: 14px;
          color: #284634;
        }


        /* ================================================
           FOOD CARDS
        ================================================ */

        .food-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }


        .food-card {
          background: white;
          border: 1px solid #e5ece7;
          border-radius: 17px;
          overflow: hidden;

          box-shadow: 0 7px 25px rgba(31, 69, 45, 0.05);

          transition:
            transform 0.2s,
            box-shadow 0.2s;
        }


        .food-card:hover {
          transform: translateY(-5px);
          box-shadow:
            0 15px 35px rgba(31, 69, 45, 0.1);
        }


        .food-image {
          height: 145px;
          background:
            linear-gradient(
              135deg,
              #e6f6e9,
              #f7fbf7
            );

          display: flex;
          align-items: center;
          justify-content: center;

          position: relative;
        }


        .food-icon {
          font-size: 65px;
        }


        .category-badge {
          position: absolute;
          top: 12px;
          right: 12px;

          background: white;
          color: #159447;

          padding: 6px 9px;
          border-radius: 7px;

          font-size: 10px;
          font-weight: 700;
        }


        .food-content {
          padding: 18px;
        }


        .food-content h3 {
          color: #1b402c;
          font-size: 18px;
          margin-bottom: 17px;
        }


        .food-details {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }


        .detail-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }


        .detail-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: #f0f8f2;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 13px;
        }


        .detail-item small,
        .detail-item strong {
          display: block;
        }


        .detail-item small {
          color: #87978e;
          font-size: 10px;
        }


        .detail-item strong {
          color: #315440;
          font-size: 12px;
          margin-top: 2px;
        }


        .claim-button {
          border: 0;
          width: 100%;
          margin-top: 18px;
          padding: 12px;

          border-radius: 9px;
          background: #eaf7ed;
          color: #159447;

          font-weight: 700;
          cursor: pointer;

          display: flex;
          justify-content: center;
          gap: 8px;
        }


        .claim-button:hover {
          background: #159447;
          color: white;
        }


        /* ================================================
           HOW IT WORKS
        ================================================ */

        .how-section {
          background: #f0f8f2;
          padding: 80px 24px;
        }


        .steps {
          max-width: 900px;
          margin: 50px auto 0;

          display: flex;
          align-items: center;
          justify-content: center;
        }


        .step {
          text-align: center;
          max-width: 230px;
          position: relative;
        }


        .step-number {
          color: #b1c8b7;
          font-size: 11px;
          font-weight: 800;
          margin-bottom: 8px;
        }


        .step-icon {
          width: 65px;
          height: 65px;
          margin: auto;
          border-radius: 50%;
          background: white;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 27px;

          box-shadow: 0 7px 20px rgba(25, 74, 40, 0.08);
        }


        .step h3 {
          color: #214832;
          margin-top: 15px;
        }


        .step p {
          color: #788a80;
          font-size: 13px;
          line-height: 1.6;
          margin-top: 7px;
        }


        .step-line {
          width: 90px;
          border-top: 2px dashed #c5dbca;
          margin: 0 15px;
        }


        /* ================================================
           CTA
        ================================================ */

        .cta-section {
          padding: 80px 24px;
          background: #16432d;
          text-align: center;
        }


        .cta-content {
          max-width: 600px;
          margin: auto;
        }


        .cta-icon {
          width: 55px;
          height: 55px;
          margin: auto;
          border-radius: 50%;
          background: #276443;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 25px;
        }


        .cta-section h2 {
          color: white;
          font-size: 38px;
          margin-top: 18px;
        }


        .cta-section p {
          color: #bdd1c4;
          line-height: 1.7;
          margin: 12px auto 25px;
        }


        .cta-button {
          display: inline-block;
          background: white;
          color: #159447;
          padding: 14px 22px;
          border-radius: 9px;
          font-weight: 800;
        }


        /* ================================================
           DONATE FORM
        ================================================ */

        .form-page,
        .claim-page,
        .about-page {
          max-width: 1200px;
          margin: auto;
          padding: 70px 24px;
        }


        .form-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 45px;
        }


        .form-header h1,
        .claim-header h1,
        .about-hero h1 {
          font-size: 46px;
          color: #173d29;
          margin-top: 8px;
          letter-spacing: -1.5px;
        }


        .form-header p,
        .claim-header p,
        .about-hero p {
          color: #74877c;
          line-height: 1.7;
          margin-top: 13px;
        }


        .form-layout {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 25px;
          align-items: start;
        }


        .info-card {
          background: #16432d;
          border-radius: 20px;
          padding: 35px;
          color: white;
          min-height: 480px;
        }


        .info-icon {
          width: 55px;
          height: 55px;
          background: #276443;
          border-radius: 14px;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 25px;
        }


        .info-card h2 {
          font-size: 27px;
          margin-top: 25px;
        }


        .info-card > p {
          color: #bdd1c4;
          line-height: 1.8;
          margin-top: 12px;
          font-size: 14px;
        }


        .info-points {
          margin-top: 28px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }


        .info-points div {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #d9e8dd;
          font-size: 14px;
        }


        .info-points span {
          color: #6ee095;
          font-weight: bold;
        }


        .donate-form {
          background: white;
          border: 1px solid #e4ebe6;
          border-radius: 20px;
          padding: 32px;
        }


        .form-title {
          margin-bottom: 25px;
        }


        .form-title h2 {
          color: #204631;
        }


        .form-title p {
          color: #84948b;
          font-size: 13px;
          margin-top: 5px;
        }


        .input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px;
        }


        .input-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 17px;
        }


        .input-group label {
          color: #385744;
          font-size: 12px;
          font-weight: 700;
        }


        .input-group input,
        .input-group select {
          border: 1px solid #dce6df;
          border-radius: 9px;
          padding: 13px;
          outline: none;
          color: #315440;
          background: #fbfdfb;
          font-size: 13px;
        }


        .input-group input:focus,
        .input-group select:focus {
          border-color: #159447;
          box-shadow: 0 0 0 3px #e6f5e9;
        }


        .form-note {
          background: #f0f8f2;
          color: #5f7768;
          border-radius: 9px;
          padding: 12px;
          font-size: 12px;
          margin-bottom: 18px;
        }


        .primary-button {
          width: 100%;
          border: 0;
          background: #159447;
          color: white;
          padding: 14px;
          border-radius: 9px;
          font-weight: 800;
          cursor: pointer;
          font-size: 14px;
        }


        .primary-button:hover {
          background: #117a39;
        }


        /* ================================================
           CLAIM PAGE
        ================================================ */

        .claim-header {
          display: flex;
          align-items: end;
          justify-content: space-between;
          margin-bottom: 35px;
        }


        .available-count {
          background: #eaf7ed;
          border-radius: 13px;
          padding: 14px 20px;
          text-align: center;
        }


        .available-count strong,
        .available-count span {
          display: block;
        }


        .available-count strong {
          font-size: 27px;
          color: #159447;
        }


        .available-count span {
          color: #678070;
          font-size: 11px;
        }


        .claim-grid {
          grid-template-columns: repeat(3, 1fr);
        }


        .empty-state,
        .no-food {
          grid-column: 1 / -1;
          text-align: center;
          background: white;
          border: 1px solid #e5ece7;
          border-radius: 18px;
          padding: 60px 20px;
        }


        .empty-state > div,
        .no-food > div {
          font-size: 50px;
        }


        .empty-state h2,
        .no-food h3 {
          color: #254a34;
          margin-top: 12px;
        }


        .empty-state p,
        .no-food p {
          color: #829188;
          margin: 8px 0 20px;
        }


        /* ================================================
           ABOUT
        ================================================ */

        .about-hero {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 60px;
        }


        .about-hero h1 span {
          color: #159447;
        }


        .about-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }


        .about-card {
          background: white;
          border: 1px solid #e4ebe6;
          border-radius: 17px;
          padding: 30px;
        }


        .about-card-icon {
          width: 55px;
          height: 55px;
          border-radius: 13px;
          background: #eaf7ed;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 25px;
        }


        .about-card h2 {
          color: #244b34;
          margin-top: 20px;
        }


        .about-card p {
          color: #788a80;
          line-height: 1.7;
          font-size: 14px;
          margin-top: 10px;
        }


        .technology-section {
          background: #16432d;
          border-radius: 22px;
          margin-top: 30px;
          padding: 40px;
          color: white;

          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }


        .technology-section h2 {
          color: white;
        }


        .technology-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }


        .technology {
          background: #235b3e;
          border-radius: 12px;
          padding: 17px;
        }


        .technology strong,
        .technology span {
          display: block;
        }


        .technology strong {
          color: white;
          font-size: 14px;
        }


        .technology span {
          color: #a9c4b3;
          font-size: 11px;
          margin-top: 4px;
        }


        /* ================================================
           LOADING
        ================================================ */

        .loading-screen {
          min-height: 650px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          text-align: center;
        }


        .loading-icon {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          background: #e4f5e8;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 35px;
        }


        .loading-screen h2 {
          color: #214832;
          margin-top: 20px;
        }


        .loading-screen p {
          color: #84948a;
          margin-top: 6px;
          font-size: 13px;
        }


        .loader {
          width: 35px;
          height: 35px;
          border: 3px solid #dcebe0;
          border-top-color: #159447;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin-top: 22px;
        }


        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }


        /* ================================================
           FOOTER
        ================================================ */

        .footer {
          background: #102f20;
          color: white;
          margin-top: 0;
        }


        .footer-container {
          max-width: 1200px;
          margin: auto;
          padding: 50px 24px;

          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 50px;
        }


        .footer-logo {
          font-size: 22px;
          font-weight: 800;
        }


        .footer-brand p {
          color: #91aa9a;
          max-width: 300px;
          line-height: 1.6;
          font-size: 13px;
          margin-top: 10px;
        }


        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }


        .footer-section h4 {
          color: white;
          margin-bottom: 5px;
        }


        .footer-section a,
        .footer-section span {
          color: #91aa9a;
          font-size: 13px;
        }


        .footer-section a:hover {
          color: #6ee095;
        }


        .footer-bottom {
          max-width: 1200px;
          margin: auto;
          padding: 17px 24px;
          border-top: 1px solid #284b38;

          display: flex;
          justify-content: space-between;

          color: #718c7c;
          font-size: 11px;
        }


        /* ================================================
           RESPONSIVE DESIGN
        ================================================ */

        @media (max-width: 900px) {

          .navigation {
            display: none;
          }


          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }


          .hero-content > p {
            margin-left: auto;
            margin-right: auto;
          }


          .hero-buttons,
          .hero-trust {
            justify-content: center;
          }


          .stats-container {
            grid-template-columns: 1fr 1fr;
          }


          .food-grid,
          .claim-grid {
            grid-template-columns: 1fr 1fr;
          }


          .form-layout {
            grid-template-columns: 1fr;
          }


          .about-grid {
            grid-template-columns: 1fr;
          }


          .technology-section {
            grid-template-columns: 1fr;
          }

        }


        @media (max-width: 600px) {

          .nav-button {
            display: none;
          }


          .nav-container {
            padding: 13px 16px;
          }


          .hero-container {
            padding: 55px 18px;
          }


          .hero h1 {
            font-size: 43px;
          }


          .hero-circle {
            width: 290px;
            height: 290px;
          }


          .hero-food-card {
            width: 220px;
          }


          .floating-one {
            left: -10px;
          }


          .floating-two {
            right: -10px;
          }


          .stats-container {
            grid-template-columns: 1fr;
          }


          .section {
            padding: 55px 18px;
          }


          .section-heading {
            display: block;
          }


          .view-all {
            display: inline-block;
            margin-top: 15px;
          }


          .food-grid,
          .claim-grid {
            grid-template-columns: 1fr;
          }


          .steps {
            flex-direction: column;
            gap: 25px;
          }


          .step-line {
            width: 1px;
            height: 40px;
            border-top: 0;
            border-left: 2px dashed #c5dbca;
          }


          .form-page,
          .claim-page,
          .about-page {
            padding: 50px 18px;
          }


          .form-header h1,
          .claim-header h1,
          .about-hero h1 {
            font-size: 36px;
          }


          .input-row {
            grid-template-columns: 1fr;
            gap: 0;
          }


          .claim-header {
            display: block;
          }


          .available-count {
            display: inline-block;
            margin-top: 20px;
          }


          .technology-section {
            padding: 28px 22px;
          }


          .technology-list {
            grid-template-columns: 1fr;
          }


          .footer-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }


          .footer-bottom {
            display: block;
            line-height: 1.8;
          }

        }

      `}</style>

    </BrowserRouter>
  );
}


export default App; 