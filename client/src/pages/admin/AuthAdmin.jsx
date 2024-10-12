import { Link, useNavigate } from "react-router-dom";
import background from "../../assets/images/background/AuthAdmin.jpg";
import logo from "../../assets/logo/logo-white.png";
import Input from "../../components/bar/Input";
import { useState } from "react";
import SecondButton from "../../components/button/SecondButton";
import { Base } from "../../api/Api";

const AuthAdmin = () => {
  const nav = useNavigate();

  const [key, setKey] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();

    Base.post("/admin/login", {
      key: key,
      password: password,
    })
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem('token-adm', res.data.data.token)
        nav("/b-admin");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-default flex ">
      {/* left */}
      <div className="lg:w-full flex justify-center items-center">
        <form onSubmit={submitHandle} className="bg-white -shadow-x-axis lg:w-455 h-fit flex flex-col lg:gap-8 lg:py-12 lg:px-16 text-default rounded-xl justify-center items-center">
          <h1 className="dl text-5xl">ADMIN</h1>
          <div className="flex flex-col w-full">
            <Input
              type="password"
              id="key"
              holder="masukkan key"
              handleChange={(e) => setKey(e.target.value)}
            />
            <Input
              type="password"
              id="password"
              holder="masukkan password"
              handleChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* button */}
          <div className="flex flex-col gap-3 w-full mt-2">
            <SecondButton type={"submit"} name={"MASUK"}/>
          </div>
        </form>
      </div>

      {/* right */}
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
        }}
        className="lg:w-700 bg-white"
      >
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          className="w-full h-full flex flex-row justify-center items-center"
        >
          <Link to={"/"}>
            <img src={logo} alt="" className="w-40 h-40" />
          </Link>
          <div className="flex flex-col text-white">
            <Link to={"/"}>
              <h1 className="ds lg:text-7xl">FLONN</h1>
            </Link>
            <p className="flex flex-col">bukan jalan umum!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthAdmin;
