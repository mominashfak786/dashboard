import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";
const Dashboard = () => {
  const [selected, setSelected] = useState("home");

  function HomeInformation() {
    return (
      <div>
        <h3>Welcome to Letusmaintain.com Channel Partner Dashboard</h3>
      </div>
    );
  }

  function AccountInformation() {
    return (
      <div>
        <h3>Account Details</h3>
      </div>
    );
  }
  function Referral() {
    return (
      <div>
        <h3>Support Account</h3>
        <p>Support information goes here</p>
      </div>
    );
  }
  function Commissions() {
    return (
      <div>
        <h3>Support Account</h3>
        <p>Support information goes here</p>
      </div>
    );
  }
  function Update() {
    return (
      <div>
        <h3>Support Account</h3>
        <p>Support information goes here</p>
      </div>
    );
  }

  function SupportInformation() {
    return (
      <div>
        <h3>Support Account</h3>
        <p>Support information goes here</p>
      </div>
    );
  }

  function FAQInformation() {
    const faqs = [
      {
        id: 1,
        question: "Q1. How does i Signup?	",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officia, sed doloribus unde, fugit quasi esse tempore necessitatibus dolores ipsa aspernatur, molestiae magni aliquam iure corrupti modi provident quas rem.",
      },
      {
        id: 2,
        question: "Q2. What methods of payment do you accept?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officia, sed doloribus unde, fugit quasi esse tempore necessitatibus dolores ipsa aspernatur, molestiae magni aliquam iure corrupti modi provident quas rem.",
      },
      {
        id: 3,
        question: "Q3. How do i cancel my subscription?	",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officia, sed doloribus unde, fugit quasi esse tempore necessitatibus dolores ipsa aspernatur, molestiae magni aliquam iure corrupti modi provident quas rem.",
      },
      {
        id: 4,
        question: "Q4. What do you mean by services allotted?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officia, sed doloribus unde, fugit quasi esse tempore necessitatibus dolores ipsa aspernatur, molestiae magni aliquam iure corrupti modi provident quas rem.",
      },
      {
        id: 5,
        question: "Q5. How do i retrieve my username or password?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officia, sed doloribus unde, fugit quasi esse tempore necessitatibus dolores ipsa aspernatur, molestiae magni aliquam iure corrupti modi provident quas rem.",
      },
      {
        id: 6,
        question: "Q6. What if i don’t pay my subscription fees?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officia, sed doloribus unde, fugit quasi esse tempore necessitatibus dolores ipsa aspernatur, molestiae magni aliquam iure corrupti modi provident quas rem.",
      },
      // {
      //   id: 7,
      //   question: "Q7. How do i update my account information",
      //   answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officia, sed doloribus unde, fugit quasi esse tempore necessitatibus dolores ipsa aspernatur, molestiae magni aliquam iure corrupti modi provident quas rem."

      // },
      // {
      //   id: 8,
      //   question: "Q8. What if i didn’t satisfy with your service engineer?",
      //   answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officia, sed doloribus unde, fugit quasi esse tempore necessitatibus dolores ipsa aspernatur, molestiae magni aliquam iure corrupti modi provident quas rem."

      // },
      // {
      //   id: 9,
      //   question: "Q9. How will be i beneficial by subscription with your service? ",
      //   answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officia, sed doloribus unde, fugit quasi esse tempore necessitatibus dolores ipsa aspernatur, molestiae magni aliquam iure corrupti modi provident quas rem."

      // },
      // {
      //   id: 10,
      //   question: "Q10. Will you add more types of services in your package? ",
      //   answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officia, sed doloribus unde, fugit quasi esse tempore necessitatibus dolores ipsa aspernatur, molestiae magni aliquam iure corrupti modi provident quas rem."

      // }
    ];
    return (
      <div>
        <h3> Questions You May Have Everything You Need To Know</h3>
        <div className="accordion w-100" id="basicAccordion">
          {faqs.map((faq) => (
            <div className="accordion-item" key={faq.id}>
              <h2 className="accordion-header" id={`heading${faq.id}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target={`#basicAccordionCollapse${faq.id}`}
                  aria-expanded="false"
                  aria-controls={`collapse${faq.id}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`basicAccordionCollapse${faq.id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${faq.id}`}
                data-mdb-parent="#basicAccordion"
                style={{}}
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: "18px",
            textAlign: "center",
            color: "black",
            marginTop: "10px",
          }}
        >
          Still not found what you were looking for?
        </p>
        <div class="blue-link" style={{ textAlign: "center" }}>
          Raise your ticket now to get help
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="navbars">
        <img
          src="https://www.letusmaintain.com/img/logo.png"
          alt="Logo"
          className="logo"
        />
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle hidden-arrow"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell" />
                  <span className="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      Some news
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <button type="button" class="btn btn-dark me-3">
            Logout
          </button>
        </nav>
      </div>
      <div className=" d-flex">
        <nav id="sidebar">
          <div className="p-4 pt-4">
            <div
              href="#"
              className="img logo rounded-circle mb-5"
              style={{
                backgroundImage:
                  "url(http://frontendfreecode.com/img/user.jpg)",
              }}
            />
            <ul className="list-unstyled components mb-2">
              <li className={selected === "home" ? "active" : ""}>
                <a href="#!" onClick={() => setSelected("home")}>
                  Home
                </a>
              </li>
              {/*  */}
              <li className={selected === "account" ? "active" : ""}>
                <a
                  href="#pageSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                  onClick={() => setSelected("account")}
                >
                  Account Details
                </a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                  <li className={selected === "refrral" ? "active" : ""}>
                    <a href="#!" onClick={() => setSelected("refrral")}>
                      Referral History
                    </a>
                  </li>
                  <li className={selected === "commissions" ? "active" : ""}>
                    <a href="#!" onClick={() => setSelected("commissions")}>
                      Commissions History{" "}
                    </a>
                  </li>
                  <li className={selected === "Update" ? "active" : ""}>
                    <a href="#!" onClick={() => setSelected("Update")}>
                      Update Payout Details{" "}
                    </a>
                  </li>
                </ul>
              </li>

              {/*  */}

              <li className={selected === "support" ? "active" : ""}>
                <a href="#!" onClick={() => setSelected("support")}>
                  Support Account
                </a>
              </li>
              <li className={selected === "faq" ? "active" : ""}>
                <a href="#!" onClick={() => setSelected("faq")}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          {selected === "home" && <HomeInformation />}
          {selected === "account" && <AccountInformation />}
          {selected === "refrral" && <Referral />}
          {selected === "commissions" && <Commissions />}
          {selected === "Update" && <Update />}
          {selected === "support" && <SupportInformation />}
          {selected === "faq" && <FAQInformation />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
