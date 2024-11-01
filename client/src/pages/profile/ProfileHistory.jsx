import { useContext, useEffect, useState } from "react";
import { BaseAPI } from "../../api/Api";
import ProfileLayout from "../../layout/ProfileLayout";
import { LoadingContext } from "../../context/LoadingContext";

const ProfileHistory = () => {
    const [data, setData] = useState({})

    const {setIsLoading} = useContext(LoadingContext);

    const getDataUser = () => {
        setIsLoading(true);
        BaseAPI.get("user/profile", {
          headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` },
        }).then(
          (res) => {
            const data = res.data.data;
            console.log("data lengkap history", data);
            setData(data);
          }
        ).catch((err) => {
            console.log("error : ", err);
        }).finally(() => {
            setIsLoading(false);
        });
      };
    
      useEffect(() => {
        getDataUser();
      }, []);

  return (
    <ProfileLayout>
      {/* riwayat */}
        <div className="gap-5 flex flex-col bg-white rounded-2xl p-10">
          {data && data.histories ? (
            data.histories.map((item, index) => (
              <div
                key={index}
                className="flex flex-row w-full gap-10 rounded-2xl bg-oldGreen shadow-default px-7 py-6 justify-between"
              >
                <div className="flex flex-col gap-1 items-center">
                  <div className="bg-cambridgeBlue px-4 py-2 rounded-2xl">
                    <p className="button text-white uppercase text-nowrap">
                      {item.status}
                    </p>
                  </div>
                  <p className="bs text-white">
                    {new Date(item.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex self-center">
                  <p className="bl text-white">{item.description}</p>
                </div>

                <div className="bg-jasmine px-4 py-2 rounded-2xl h-fit w-fit flex text-nowrap self-center">
                  <p className="button text-onyx uppercase">
                    +{item.floint} floint
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full items-center flex justify-center">
              <p className="text-white">Belum ada aktifitas</p>
            </div>
          )}
        </div>
    </ProfileLayout>
  );
};

export default ProfileHistory;
