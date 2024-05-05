import { Link, useNavigate } from "react-router-dom";
import background from "../../assets/images/background/AuthUser.jpg";
import logo from "../../assets/logo/logo-white.png";
import Input from "../../components/bar/Input";
import { useState } from "react";
import GoogleButton from "../../components/button/GoogleButton";
import { Base } from "../../api/API";
import FakeButton from "../../components/button/FakeButton";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import PrimerButton2 from "../../components/button/PrimerButton2";
import LoadingPic from "../../components/helper/LoadingPic";

const Daftar = () => {
  const nav = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [message, setMessage] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

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
  })
  .finally(() => {
    setIsLoading(false);
  });
  }

  const SignUpGoogle = () => {
    setIsLoading(true);
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-default flex">
      {isLoading && <div className="fixed w-screen h-screen bg-black bg-opacity-50 z-50"><LoadingPic /></div>}
      {/* left */}
      <div className="lg:w-full flex justify-center items-center">
        <form
          onSubmit={submitHandle}
          className="bg-white -shadow-x-axis lg:w-fit h-fit flex flex-col lg:gap-3 lg:py-10 lg:px-12 text-default rounded-xl"
        >
          <h1 className="dl text-5xl self-center">DAFTAR</h1>
          <div className="flex flex-col gap-0 w-full">
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
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-row gap-2.5">
              <input type="checkbox" className="self-center" onChange={() => setIsCheck(!isCheck)}
                checked={isCheck}/>
              <p className="bs flex flex-row gap-1">
                saya setuju dengan 
                <Link className="text-oldGreen underline" to={"/snk"}>syarat & ketentuan</Link>
                  yang berlaku.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
                {isCheck && firstname && lastname && email && password ? (<PrimerButton2 type={"submit"} name={"DAFTAR"} />) : (
                    <FakeButton name={"DAFTAR"} />
                )}
              <div className="flex items-center gap-2 self-stretch">
              <div className="flex-grow h-0.5 bg-default mx-2"></div>
              <div className="tl text-default">atau</div>
              <div className="flex-grow h-0.5 bg-default mx-2"></div>
            </div>
              <GoogleButton name="Dengan Google" handler={googleHandle}/>
            </div>
            <p className="bs text-red-600 self-center">{message}</p>
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
