import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/logins.css";

const Login = () => {
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleInputChange = (index, event) => {
    const input = event.target;
    const value = input.value;
    if (/^\d$/.test(value)) {
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };
  return (
    <>
      <div className="shadows">
        <img
          src="https://www.letusmaintain.com/img/logo.png"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="mainloginform">
        <form className="form">
          <p
            className=""
            style={{
              fontSize: "19px",
              textAlign: "center",
              fontWeight: "bold",
              marginTop:'10px'
            }}
          >
            Channel Partner Login
          </p>
          <p className="heading">Referral ID*</p>
          <svg
            className="check"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="60px"
            height="60px"
            viewBox="0 0 60 60"
            xmlSpace="preserve"
          >
            <image
              id="image0"
              width={60}
              height={60}
              x={0}
              y={0}
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAQAAACQ9RH5AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
            AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
            cwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0NDzN/r+StAAACR0lEQVRYw+3Yy2sTURTH8W+bNgVf
            aGhFaxNiAoJou3FVEUQE1yL031BEROjCnf4PLlxILZSGYncuiiC48AEKxghaNGiliAojiBWZNnNd
            xDza3pl77jyCyPzO8ubcT85wmUkG0qT539In+MwgoxQoUqDAKDn2kSNLlp3AGi4uDt9xWOUTK3xg
            hVU2wsIZSkxwnHHGKZOxHKfBe6rUqFGlTkPaVmKGn6iYao1ZyhK2zJfY0FZ9ldBzsbMKxZwZjn/e
            5szGw6UsD5I0W6T+hBhjUjiF7bNInjz37Ruj3igGABjbtpIo3GIh30u4ww5wr3fwfJvNcFeznhBs
            YgXw70TYX2bY/ulkZhWfzfBbTdtrzjPFsvFI+T/L35jhp5q2owDs51VIVvHYDM9sa/LY8XdtKy1l
            FXfM8FVN2/X2ajctZxVXzPA5TZvHpfb6CFXxkerUWTOcY11LX9w0tc20inX2mmF4qG3upnNWrOKB
            hIXLPu3dF1x+kRWq6ysHpkjDl+7eQjatYoOCDIZF3006U0unVSxIWTgTsI3HNP3soSJkFaflMDwL
            3OoHrph9YsPCJJ5466DyOGUHY3Epg2rWloUxnMjsNw7aw3AhMjwVhgW4HYm9FZaFQZ/bp6QeMRQe
            hhHehWKXGY7CAuSpW7MfKUZlAUqWdJ3DcbAAB3guZl9yKC4WYLfmT4muFtgVJwvQx7T2t0mnXK6J
            XlGGyAQvfNkaJ5JBmxnipubJ5HKDbJJsM0eY38QucSx5tJWTVHBwqDDZOzRNmn87fwDoyM4J2hRz
            NgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0xM1QxMzoxNTo1MCswMDowMKC8JaoAAAAldEVY
            dGRhdGU6bW9kaWZ5ADIwMjMtMDItMTNUMTM6MTU6NTArMDA6MDDR4Z0WAAAAKHRFWHRkYXRlOnRp
            bWVzdGFtcAAyMDIzLTAyLTEzVDEzOjE1OjUxKzAwOjAwIIO3fQAAAABJRU5ErkJggg=="
            />
          </svg>
          <div className="boxes">
            <input
              className="input"
              type="text"
              maxLength={1}
              ref={inputRefs[0]}
              onChange={(event) => handleInputChange(0, event)}
            />
            <input
              className="input"
              type="text"
              maxLength={1}
              ref={inputRefs[1]}
              onChange={(event) => handleInputChange(1, event)}
            />
            <input
              className="input"
              type="text"
              maxLength={1}
              ref={inputRefs[2]}
              onChange={(event) => handleInputChange(2, event)}
            />
            <input
              className="input"
              type="text"
              maxLength={1}
              ref={inputRefs[3]}
              onChange={(event) => handleInputChange(3, event)}
            />
            <input
              className="input"
              type="text"
              maxLength={1}
              ref={inputRefs[4]}
              onChange={(event) => handleInputChange(4, event)}
            />
            <input
              className="input"
              type="text"
              maxLength={1}
              ref={inputRefs[5]}
              onChange={(event) => handleInputChange(5, event)}
            />
          </div>
          <label class="remember-me">
            <input type="checkbox" name="remember-me" id="remember-me" />
            Remember Me
          </label>

        
          <Link to="/dashboard" className="link">
    <button className="click" type="submit">Login</button>
  </Link>
          <p style={{ fontSize: "15px", textAlign: "center" }}>
            For Sign up as a Channel Partner{" "}
            <div class="blue-link">click here</div>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
