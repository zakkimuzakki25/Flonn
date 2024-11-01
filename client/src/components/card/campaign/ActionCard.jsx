import { useContext, useEffect, useRef, useState } from "react";
import PrimerButton from "../../button/PrimerButton";
import { ConfirmationContext } from "../../../context/ConfirmationContext";
import { BaseAPI } from "../../../api/Api";
import { LoadingContext } from "../../../context/LoadingContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase/Firebase";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import FakeButton from "../../button/FakeButton";

// eslint-disable-next-line react/prop-types
const ActionCard = ({ id, title, photo, flointReward }) => {
  const { showPopup, hidePopup } = useContext(ConfirmationContext);
  const { setIsLoading } = useContext(LoadingContext);
  const fileInputRef = useRef(null);
  const [status, setStatus] = useState("tidak terdaftar");

  const nav = useNavigate();

  const token = window.localStorage.getItem("token");

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      showPopup({
        title: "Apakah kamu yakin ingin mengunggah foto ini?",
        message: null,
        confirmText: "IYA",
        cancelText: "BATAL",
        onConfirm: () => {
          hidePopup();
          uploadHandle(e);
        },
        onCancel: () => {
          hidePopup();
        },
      });
    }
  };

  const uploadHandle = async (e) => {
    if (e.target.files[0]) {
      setIsLoading(true);
      const imgRef = ref(storage, `user-campaign-prove/${title}/${v4()}`);

      await uploadBytes(imgRef, e.target.files[0]);

      const link = await getDownloadURL(imgRef);

      BaseAPI.post(
        `user/campaign/${id}`,
        {
          photo: link,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
        .then(() => {
          showPopup({
            title:
              "Berhasil mengunggah foto, harap tunggu untuk proses verifikasi",
            message: null,
            confirmText: "Oke",
            cancelText: "Kembali ke Beranda",
            onConfirm: () => {
              hidePopup();
              window.location.reload();
            },
            onCancel: () => {
              hidePopup();
              nav("/");
            },
          });
        })
        .catch((err) => {
          console.log("error SINI");
          console.log("error : ", err);
          if (err.response.status === 401) {
            window.localStorage.setItem("token", "");
            showPopup({
              title:
                "Anda sedang berada dalam mode tamu, harap masuk terlebih dahulu",
              message: null,
              confirmText: "MASUK",
              cancelText: "BATAL",
              onConfirm: () => {
                hidePopup();
                nav("/masuk");
              },
              onCancel: () => {
                hidePopup();
              },
            });
          }
        })
        .finally(() => {
          setIsLoading(false);
          fileInputRef.current.value = null;
        });
    }
  };

  const handleUploadClick = () => {
    console.log("upload");
    BaseAPI.get(`/user/ktp-status`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        const dp = res.data.data;
        if (dp.status == "verified") {
          fileInputRef.current.click();
        } else {
          showPopup({
            title:
              "Akun anda belum terverifikasi, harap melakukan verifikasi terlebih dahulu",
            message: "Jika KTP sedang tahap verifikasi harap tunggu hingga verifikasi selesai",
            confirmText: "Verifikasi",
            cancelText: "Batal",
            onConfirm: () => {
              hidePopup();
              nav("/profile/edit");
            },
            onCancel: () => {
              hidePopup();
            },
          });
        }
        console.log(res);
      })
      .catch((err) => {
        console.log("Error", err);
        showPopup({
          title:
            "Akun anda belum terverifikasi, harap melakukan verifikasi terlebih dahulu",
          message: "Jika KTP sedang tahap verifikasi harap tunggu hingga verifikasi selesai",
          confirmText: "Verifikasi",
          cancelText: "Batal",
          onConfirm: () => {
            hidePopup();
            nav("/profile/edit");
          },
          onCancel: () => {
            hidePopup();
          },
        });
      });
  };

  const getStatus = () => {
    BaseAPI.get(`/campaign/user-status/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        const dp = res.data.data;
        setStatus(dp.status);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <article className="flex flex-col w-80 bg-jasmine rounded-2xl px-7 py-4 gap-3 justify-between">
      <header className="text-3xl font-semibold text-black w-full text-left">
        {title}
      </header>
      <figure>
        <img src={photo} className="h-40" alt={title} />
      </figure>
      <div className="flex flex-col w-full items-center gap-1">
        {status != "tidak terdaftar" ? (
          <>
            <FakeButton name={status && status.toUpperCase()} />
            {status == "tertolak" && (
              <PrimerButton
                name={"Unggah Ulang"}
                widthType="full"
                handle={handleUploadClick}
              />
            ) }
          </>
        ) : (
          <PrimerButton
            name={"Unggah Aksimu"}
            widthType="full"
            handle={handleUploadClick}
          />
        )}
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />
        <span className="text-oldGreen font-bold">+{flointReward} floint</span>
      </div>
    </article>
  );
};

export default ActionCard;
