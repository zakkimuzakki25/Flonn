import DropDown from "../../components/bar/Dropdown";
import InputProfile from "../../components/bar/InputProfile";
import PrimerButton from "../../components/button/PrimerButton";
import FakeButton from "../../components/button/FakeButton";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import CameraIcon from "../../assets/icon/Camera.svg";
import { useContext, useEffect, useState } from "react";
import { DefaultPhotoProfile } from "../../data/DefaultData";
import ProfileIcon from "../../assets/icon/Profile.svg";
import GenderIcon from "../../assets/icon/Gender.svg";
import CloseIcon from "../../assets/icon/Close.svg";
import EmailIcon from "../../assets/icon/Email.svg";
import UploadIcon from "../../assets/icon/Upload.svg";
import TimerIcon from "../../assets/icon/Timer.svg";
import ChecklistCurlyBorderIcon from "../../assets/icon/ChecklistCurlyBorder.svg";
import InfoBar from "../../components/bar/InfoBar";
import { BaseAPI } from "../../api/Api";
import PrimerButton3 from "../../components/button/PrimerButton3";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase/Firebase";
import { v4 } from "uuid";
import { LoadingContext } from "../../context/LoadingContext";
import { ConfirmationContext } from "../../context/ConfirmationContext";

const ProfileEdit = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState("");
  const [ktpStatus, setKTPStatus] = useState("");
  const [ktpLink, setKTPLink] = useState("");
  const [selectedKTPFile, setSelectedKTPFile] = useState(null);
  const { setIsLoading } = useContext(LoadingContext);

  const token = window.localStorage.getItem("token");

  const {showPopup, hidePopup} = useContext(ConfirmationContext)

  const getDataUser = () => {
    setIsLoading(true);
    BaseAPI.get("user/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(
        (res) => {
          const data = res.data.data;
          console.log("data lengkap", data);
          setFirstName(data.firstname);
          setLastName(data.lastname);
          setEmail(data.email);
          setPhoto(data.photo);
          setBirthDate(data.birthdate);
          setGender(data.gender);
          setAddress(data.address);
          setKTPStatus(data.ktp_status);
          setKTPLink(data.ktp_link);
        },
        (err) => {
          console.log("error : ", err);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateProfileHandle = () => {
    setIsLoading(true);
    BaseAPI.post(
      "user/profile",
      {
        firstname: firstName,
        lastname: lastName,
        email: email,
        birthdate: birthDate,
        jenis_kelamin: gender,
        address: address,
        photo: photo,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((err) => {
        console.log("error : ", err);
      })
      .finally(() => {
        setIsLoading(false);
        getDataUser();
      });
  };

  const handleFileChange = (e) => {
    setSelectedKTPFile(e.target.files[0]);
  };

  const handleProfileChange = async (e) => {
    if (e.target.files[0]) {
      setIsLoading(true);
      try {
        const imgRef = ref(storage, `user-photo/${email + "-" + v4()}`);

        await uploadBytes(imgRef, e.target.files[0]);

        const link = await getDownloadURL(imgRef);

        BaseAPI.post(
          "user/photo",
          {
            photo: link,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
          .then(
            (res) => {
              console.log("data lengkap", res);
            },
            (err) => {
              console.log("error : ", err);
            }
          )
          .finally(() => {
            setIsLoading(false);
            getDataUser();
          });
      } catch (error) {
        console.log("error : ", error);
      }
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setSelectedKTPFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUpload = async () => {
    try {
      setIsLoading(true);

      const imgRef = ref(storage, `ktp-user/${email + "-" + v4()}`);
      await uploadBytes(imgRef, selectedKTPFile);

      const link = await getDownloadURL(imgRef);

      const res = await BaseAPI.post(
        "user/ktp",
        { link: link },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("success : ", res);

      getDataUser();
    } catch (error) {
      console.log("error : ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-default px-40 pt-40 pb-20 gap-12    ">
        {/* profile */}
        <div className="flex flex-row gap-8 bg-white w-full h-fit rounded-2xl p-12 shadow-default">
          {/* photo */}
          <div className="h-56 w-56 shrink-0 rounded-full bg-black relative">
            <img
              src={photo ? photo : DefaultPhotoProfile}
              alt="foto profil"
              className="rounded-full object-cover w-full h-full"
            />

            <label
              htmlFor="profile-photo"
              className="absolute bottom-4 right-4 opacity-95 cursor-pointer"
            >
              <img src={CameraIcon} alt="icon kamera" />
            </label>

            <input
              type="file"
              id="profile-photo"
              accept="image/*"
              className="hidden"
              onChange={handleProfileChange}
            />
          </div>

          {/* profile info */}
          <div className="flex flex-col w-full gap-5">
            <div className="flex flex-row gap-5 w-full">
              <InputProfile
                textLabel={"Nama Depan"}
                holder={"Nama Depan"}
                icon={ProfileIcon}
                value={firstName}
                handleChange={(e) => setFirstName(e.target.value)}
              />
              <InputProfile
                textLabel={"Nama Belakang"}
                holder={"Nama Belakang"}
                icon={ProfileIcon}
                value={lastName}
                handleChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex flex-row w-full gap-5">
              <InputProfile
                textLabel={"Tanggal Lahir"}
                holder={"Tanggal Lahir"}
                type="date"
                value={birthDate}
                handleChange={(e) => setBirthDate(e.target.value)}
              />
              <dif className="w-full"></dif>
            </div>
            <div className="flex flex-row w-full gap-5">
              <DropDown
                textLabel={"Jenis Kelamin"}
                optionAll={false}
                options={[
                  { id: 1, name: "Perempuan" },
                  { id: 2, name: "Laki-laki" },
                ]}
                holder={gender ? gender : "Jenis Kelamin"}
                icon={GenderIcon}
                handleChange={(e) => setGender(e.target.value.split("#")[1])}
              />
              <dif className="w-full"></dif>
            </div>
            <InfoBar
              textLabel={"Email"}
              type="email"
              text={email}
              icon={EmailIcon}
            />
            <div className="w-64 self-end mt-2">
              <PrimerButton name={"PERBARUI"} handle={() => {
                    showPopup({
                      title: 'Apakah kamu yakin ingin mengubah informasi akun?',
                      message: null,
                      confirmText: 'IYA',
                      cancelText: 'BATAL',
                      onConfirm: () => {
                        updateProfileHandle
                      },
                      onCancel: () => {
                        hidePopup();
                      },
                    })
                  }} />
            </div>
          </div>
        </div>

        {/* alamat */}
        <div className="flex flex-row bg-white w-full h-fit rounded-2xl py-10 px-28 shadow-default gap-5">
          <div className="w-full">
            <InputProfile
              textLabel={"Alamat"}
              holder={"Alamat"}
              value={address}
              handleChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        {/* verifikasi ktp */}
        <div className="flex flex-col gap-5 bg-white w-full h-fit rounded-2xl py-10 px-28 shadow-default">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold">Verifikasi KTP</h2>
                <p className="text-gray-600">
                    Yuk, unggah kartu identitas nasional Anda sesuai dengan aturan yang berlaku. Jangan khawatir, data pribadi Anda akan aman dan kerahasiaannya tetap terjaga
                </p>
              </div>
          {/* Area Drag & Drop OR status KTP*/}
          {ktpLink ? (
            <>
              <div className="border-2 border-double border-gray-400 p-8 rounded-lg text-center flex flex-col gap-4 items-center">
                  {/* icone status */}
                  <div className="flex w-52 h-52 bg-viridian bg-opacity-40 rounded-full justify-center items-center">
                    <div className="flex w-44 h-44 bg-viridian bg-opacity-40 rounded-full justify-center items-center">
                      <div className="flex w-36 h-36 bg-viridian bg-opacity-40 rounded-full justify-center items-center">
                      {ktpStatus == "pending" ? (
                        <img src={TimerIcon} alt="icon status ktp pending" className="w-14" />
                      ) : (
                        <img src={ChecklistCurlyBorderIcon} alt="icon status verified ktp" className="w-14"/>
                      )}
                      </div>
                    </div>
                  </div>
                {ktpStatus == "pending" ? (
                  <p>Saat ini, kami sedang memverifikasi identitas Anda. Proses ini akan memakan waktu maksimal 2x24 jam.</p>
                ) : (
                  <p>Saat ini, kami sedang memverifikasi identitas Anda. Proses ini akan memakan waktu maksimal 2x24 jam.</p>
                )}
                <img src={ktpLink} alt="Foto KTP" className="max-h-96" />
              </div>
            </>
          ) : (
            <>
              <div
                className="border-2 border-dashed border-gray-400 p-8 rounded-lg text-center flex flex-col gap-4 items-center"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                {selectedKTPFile ? (
                  <>
                    <div className="mx-auto max-h-96 h-fit w-fit relative">
                      <img
                        src={URL.createObjectURL(selectedKTPFile)}
                        alt="Upload Preview"
                        className="h-96 max-h-96 "
                      />
                      <button
                        className="absolute right-4 top-4 opacity-95 w-8 cursor-pointer rounded-full p-1 bg-white"
                        onClick={() => setSelectedKTPFile(null)}
                      >
                        <img src={CloseIcon} alt="icon close" />
                      </button>
                    </div>
                    <input
                      type="file"
                      id="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="file"
                      className="bg-yellow-200 text-yellow-700 px-4 py-2 rounded cursor-pointer w-44"
                    >
                      Ubah Foto
                    </label>
                    <p className="mt-4 text-gray-700">{selectedKTPFile.name}</p>
                  </>
                ) : (
                  <>
                    <img
                      src={UploadIcon}
                      alt="Upload icon"
                      className="mx-auto"
                    />
                    <p className="text-gray-500 tl font-semibold text-xl">
                      Tarik dan lepas file kamu di sini.
                    </p>

                    <p className="text-gray-500">Atau</p>

                    <input
                      type="file"
                      id="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="file"
                      className="bg-yellow-200 text-yellow-700 px-4 py-2 rounded cursor-pointer w-44"
                    >
                      Pilih File
                    </label>
                  </>
                )}
              </div>
              <div className="flex justify-end">
                <div className="w-44">
                  {selectedKTPFile ? (
                    <PrimerButton3 name={"Unggah"} handle={handleUpload} />
                  ) : (
                    <FakeButton name={"Unggah"} />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProfileEdit;
