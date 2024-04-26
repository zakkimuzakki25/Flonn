import { Link, useNavigate } from "react-router-dom";
import background from "../../assets/images/background/AuthUser.jpg";
import logo from "../../assets/logo/logo-white.png";
import Input from "../../components/bar/Input";
import { useState } from "react";
import GoogleButton from "../../components/button/GoogleButton";
import { Base } from "../../api/API";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import PrimerButton2 from "../../components/button/PrimerButton2";

const Masuk = () => {
  const nav = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [photo, setPhoto] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const provider = new GoogleAuthProvider();

  const submitHandle = (e) => {
    e.preventDefault();

    Base.post("/user/login", {
      email: email,
      password: password,
    })
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem('token', res.data.data.token)
        nav("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        setMessage(err.response.data.message);
      });
  };

  const googleHandle = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    const user = result.user;

    const fullNameArray = user.displayName.split(" ")
    const firstName = fullNameArray[0]
    if (fullNameArray.length > 1) {
      const lastName = fullNameArray.slice(1).join(" ")
      setLastname(lastName)
    }
    
    setFirstname(firstName)
    setPhoto(user.photoURL)
    setEmail(user.email)
    SignUpGoogle()
  }).catch((error) => {
    // Handle Errors here.
    console.log("error", error)
  });
  }

  const SignUpGoogle = () => {
    Base.post("/user/auth/google", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      photo: photo,
    })
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem('token', res.data.data.token)
        nav("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        setMessage(err.response.data.message);
      });
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-default flex ">
      {/* left */}
      <div className="lg:w-full flex justify-center items-center">
        <form onSubmit={submitHandle} className="bg-white -shadow-x-axis lg:w-100 h-fit flex flex-col lg:gap-4 lg:py-12 lg:px-12 text-default rounded-xl justify-center items-center">
          <h1 className="dl text-5xl">MASUK</h1>
          <div className="flex flex-col gap-0 w-full">
            <Input
              type="email"
              id="email"
              holder="Masukkan email"
              handleChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              id="password"
              holder="Masukkan password"
              handleChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* button */}
          <div className="flex flex-col gap-3 w-full">
            <p className="bl text-red-600">{message}</p>
            <PrimerButton2 type={"submit"} name={"MASUK"} />
            <div className="flex items-center gap-2 self-stretch">
              <div className="flex-grow h-0.5 bg-default mx-2"></div>
              <div className="tl text-default">atau</div>
              <div className="flex-grow h-0.5 bg-default mx-2"></div>
            </div>
            <GoogleButton name="Dengan Google" handler={googleHandle}/>
          </div>
        </form>
      </div>

      {/* right */}
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
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
              <h1 className="dl">FLONN</h1>
            </Link>
            <p className="flex tl flex-col -translate-y-3">
              Belum memiliki akun?
              <Link
                to={"/daftar"}
                className="text-onyx hover:text-oldGreen button bg-white py-0.5 px-3 rounded-full w-fit"
              >
                DAFTAR
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masuk;
