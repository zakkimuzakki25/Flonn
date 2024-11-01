import { Link, useNavigate } from "react-router-dom";
import background from "../../assets/images/background/AuthUser.jpg";
import logo from "../../assets/logo/logo-white.png";
import Input from "../../components/bar/Input";
import { useContext, useState } from "react";
import GoogleButton from "../../components/button/GoogleButton";
import FakeButton from "../../components/button/FakeButton";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import PrimerButton2 from "../../components/button/PrimerButton2";
import { LoadingContext } from "../../context/LoadingContext";
import { Base } from "../../api/Api";

const Daftar = () => {
  const nav = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  const { setIsLoading } = useContext(LoadingContext);

  const provider = new GoogleAuthProvider();

  const submitHandle = (e) => {
    e.preventDefault();

    setIsLoading(true);
    Base.post("/user/register", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    })
      .then((res) => {
        console.log(res.data);
        nav("/masuk");
      })
      .catch((err) => {
        console.log(err.response.data);
        setMessage(err.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const googleHandle = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const fullNameArray = user.displayName.split(" ");
        const firstName = fullNameArray[0];
        const lastName = fullNameArray.length > 1 ? fullNameArray.slice(1).join(" ") : "";

        SignUpGoogle(firstName, lastName, user.email, user.photoURL);
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const SignUpGoogle = (firstName, lastName, email, photo) => {
    setIsLoading(true);
    Base.post("/user/auth/google", {
      firstname: firstName,
      lastname: lastName,
      email: email,
      photo: photo,
    })
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem("token", res.data.data.token);
        nav("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        setMessage(err.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-default flex flex-col justify-center gap-5 sm:gap-0 sm:flex-row">
      {/* header mobile */}
      <div className="w-full flex flex-row justify-center items-center sm:hidden -translate-x-2">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-16 h-16" />
        </Link>
        <div className="flex flex-col text-white justify-center">
          <Link to={"/"}>
            <h1 style={{ lineHeight: "1" }} className="dl">
              FLONN
            </h1>
          </Link>
        </div>
      </div>

      {/* left */}
      <div className="w-full sm:w-full flex justify-center items-center">
        <form
          onSubmit={submitHandle}
          className="bg-white -shadow-x-axis w-72 lg:w-100 h-fit flex flex-col gap-4 lg:gap-4 py-7 lg:py-12 px-6 lg:px-12 text-default rounded-xl justify-center items-center"
        >
          <h1 className="dl sm:dl text-4xl sm:text-5xl">DAFTAR</h1>
          <div className="flex flex-col gap-1.5 sm:gap-0 w-full">
            <Input
              type="text"
              id="namaDepan"
              holder="nama depan"
              handleChange={(e) => setFirstname(e.target.value)}
            />
            <Input
              type="text"
              id="namaBelakang"
              holder="nama belakang"
              handleChange={(e) => setLastname(e.target.value)}
            />
            <Input
              type="email"
              id="email"
              holder="masukkan email"
              handleChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              id="password"
              holder="masukkan password"
              handleChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* button */}
          <div className="flex flex-col gap-2 sm:gap-3 w-full">
            <div className="flex flex-row gap-2.5">
              <input type="checkbox" className="self-center" onChange={() => setIsCheck(!isCheck)}
                checked={isCheck}/>
              <p className="bs flex flex-row gap-1 text-xs">
                saya setuju dengan 
                <Link className="text-oldGreen underline" to={"/snk"}>syarat & ketentuan</Link>
                  yang berlaku.
              </p>
            </div>
            <div className="flex flex-col gap-1 sm:gap-2.5">
                {isCheck && firstname && lastname && email && password ? (<PrimerButton2 type={"submit"} name={"DAFTAR"} />) : (
                    <FakeButton name={"DAFTAR"} />
                )}
              <div className="flex items-center gap-1 sm:gap-2 self-stretch">
              <div className="flex-grow h-0.5 bg-default mx-2"></div>
              <div className="tl text-default text-base sm:text-xl">atau</div>
              <div className="flex-grow h-0.5 bg-default mx-2"></div>
            </div>
              <GoogleButton handler={googleHandle}/>
            </div>
            <p className="bs text-red-600 self-center">{message}</p>
          </div>
        </form>
      </div>

      {/* footer mobile */}
        <div className="flex flex-row w-full items-center justify-center -translate-y-3 sm:hidden px-10 gap-1">
        <p className="tl text-base text-white">Sudah memiliki akun?</p>
        <Link
          to={"/masuk"}
          className="text-white hover:text-oldGreen w-fit font-semibold"
        >
          MASUK
        </Link>
      </div>

      {/* right */}
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
        className="lg:w-700 bg-white hidden sm:block"
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
              <h1 className="dl">FLONN</h1>
            </Link>
            <p className="gap-1 flex flex-col tl -translate-y-3 ">
              Memiliki akun?
              <Link
                to={"/masuk"}
                className="text-onyx hover:text-oldGreen button bg-white py-0.5 px-3 rounded-full w-fit"
              >
                MASUK
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
