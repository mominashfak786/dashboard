import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";
const Dashboard = () => {
  const [selected, setSelected] = useState("home");

  function HomeInformation() {
    return (
      <div>
        <div class="entry-page">
          <p
            style={{
              textAlign: "center",
              fontSize: "35px",
              marginTop: "10rem",
            }}
          >
            Welcome to Letusmaintain.com Channel Partner Dashboard
          </p>
        </div>
      </div>
    );
  }

  function AccountInformation() {
    return (
      <div>
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle img-fluid"
                      style={{ width: 150 }}
                    />
                    <h5 className="my-3">John Smith</h5>
                    <p className="text-muted mb-1">Full Stack Developer</p>
                    <p className="text-muted mb-4">
                      Bay Area, San Francisco, CA
                    </p>
                    <div className="d-flex justify-content-center mb-2">
                      <button type="button" className="btn btn-primary">
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary ms-1"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">My Referral ID:</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">xxxxxx</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-4">
                        <p className="mb-0">Business Category :</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-4">
                        <p className="mb-0">Business Name :</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">ID Activated on:</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">xx/xx/xxxx</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Full Name:</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">Johnatan Smith</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email:</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">example@example.com</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Mobile:</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">(098) 765-4321</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Address:</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          Bay Area, San Francisco, CA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  function Referral() {
    return (
      <div>
        <div className="form-group">
          <h3>
            <label style={{ color: "black" }}>
              List of All Referrals Till date*
            </label>
          </h3>
          <select id="referrals-dropdown" className="form-control">
            <option value="">-- Select an option --</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option1">Option 4</option>
            <option value="option2">Option 5</option>
            <option value="option3">Option 6</option>
          </select>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name of the lead</th>
                <th>Solution Type</th>
                <th>Category of Premises</th>
              </tr>
            </thead>
            <tbody>
              {/* Add rows dynamically based on data */}
              <tr>
                <td>01/01/2023</td>
                <td>Mr.Avinash Sharma</td>
                <td> Full Solution Package</td>
                <td>Residential</td>
              </tr>
              <tr>
                <td>01/02/2023</td>
                <td>Mr.Prasad Tetme</td>
                <td>Energy Audit</td>
                <td>Commercial</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  function Commissions() {
    return (
      <div>
        <div className="form-group">
          <h3>
            <label style={{ color: "black" }}> Select from the list *</label>
          </h3>
          <select id="referrals-dropdown" className="form-control">
            <option value="">-- Select an option --</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option1">Option 4</option>
            <option value="option2">Option 5</option>
            <option value="option3">Option 6</option>
          </select>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name of the lead</th>
                <th>Solution Type</th>
                <th>Commission Amount </th>
                <th> Payment Mode </th>
              </tr>
            </thead>
            <tbody>
              {/* Add rows dynamically based on data */}
              <tr>
                <td>01/01/2023</td>
                <td>Mr.Avinash Sharma</td>
                <td> Full Solution Package</td>
                <td> SGD XXXXX</td>
                <td>Bank Transfer </td>
              </tr>
              <tr>
                <td>01/02/2023</td>
                <td>Mr.Prasad Tetme</td>
                <td>Energy Audit</td>
                <td>xxxxxxxxxxxxxx</td>
                <td>Bank Transfer </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  function Update() {
    return (
      <div>
        <div className="payout-form">
          <h3>
            <label style={{ color: "black" }}> Select any one of them:</label>
          </h3>
          <form>
            <div className="row">
              <div className="col-md-6">
                <label className="checkbox-container">
                  Bank Transfer
                  <input
                    type="checkbox"
                    name="payout-type"
                    defaultValue="bank-transfer"
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="col-md-6">
                <label className="checkbox-container">
                  PayPal
                  <input
                    type="checkbox"
                    name="payout-type"
                    defaultValue="paypal"
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="col-md-6">
                <label className="checkbox-container">
                  Payment Link
                  <input
                    type="checkbox"
                    name="payout-type"
                    defaultValue="payment-link"
                  />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
            <div className="details">
              <div className="row">
                <div className="col-md-6">
                  <label>Name of the Account Holder</label>
                  <input type="text" name="account-holder-name" />
                </div>
                <div className="col-md-6">
                  <label>Account Number</label>
                  <input type="text" name="account-number" />
                </div>
                <div className="col-md-6">
                  <label>Bank Name</label>
                  <input type="text" name="bank-name" />
                </div>
                <div className="col-md-6">
                  <label>Bank Address</label>
                  <input type="text" name="bank-address" />
                </div>
                <div className="col-md-6">
                  <label>SWIFT Code</label>
                  <input type="text" name="swift-code" />
                </div>
                <div className="col-md-6">
                  <label>IFSC Code</label>
                  <input type="text" name="ifsc-code" />
                </div>
                <div className="col-md-6">
                  <label>Mobile Number</label>
                  <input type="text" name="mobile-number" />
                </div>
                <div className="col-md-6">
                  <label>Your Address</label>
                  <input type="text" name="your-address" />
                </div>
                <div className="col-md-6">
                  <label>Enter the PayPal Details</label>
                  <input type="text" name="paypal-details" />
                </div>
                <div className="col-md-6">
                  <label>Enter the Payment Link</label>
                  <input type="text" name="payment-link" />
                </div>
              </div>
            </div>
            <button
              type="button"
              class="btn btn-dark mt-3"
              style={{ textAlign: "center" }}
            >
              Done
            </button>
          </form>
        </div>
      </div>
    );
  }

  function SupportInformation() {
    return (
      <div className="supportcss">
        <div className="container contact-form">
          <div className="contact-image">
            <img
              src="https://image.ibb.co/kUagtU/rocket_contact.png"
              alt="rocket_contact"
            />
          </div>

          <form method="post">
            <h3>Drop Us a Message</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="txtName"
                    className="form-control"
                    placeholder="Subject*"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <select className="form-control" name="type">
                    <option value="">Select Type *</option>
                    <option value="Account">Account</option>
                    <option value="Payouts">Payouts</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Question">Question</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="txtPhone"
                    className="form-control"
                    placeholder="Your Phone Number *"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    name="btnSubmit"
                    className="btnContact"
                    defaultValue="Send Message"
                    style={{ textAlign: "center" }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    name="txtMsg"
                    className="form-control"
                    placeholder="Your Message *"
                    style={{ width: "100%", height: 150 }}
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
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
