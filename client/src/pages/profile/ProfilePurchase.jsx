import { useContext, useEffect, useState } from "react";
import { BaseAPI } from "../../api/Api";
import ProfileLayout from "../../layout/ProfileLayout";
import { LoadingContext } from "../../context/LoadingContext";

const ProfilePurchase = () => {
    const [data, setData] = useState([])

    const {setIsLoading} = useContext(LoadingContext);

    const getDataPurchase = () => {
        setIsLoading(true);
        BaseAPI.get("merch/purchase", {
          headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` },
        }).then(
          (res) => {
            const data = res.data.data;
            console.log("data purchase history", data);
            setData(data);
          }
        ).catch((err) => {
            console.log("error : ", err);
        }).finally(() => {
            setIsLoading(false);
        });
      };
    
      useEffect(() => {
        getDataPurchase();
      }, []);

  return (
    <ProfileLayout>
      {/* purchase */}
        <div className="gap-5 flex flex-col bg-white rounded-2xl p-10">
          {data ? (
            data && data.map((item, index) => (
                <div
                key={index}
                className="flex flex-row w-full gap-5 rounded-2xl bg-oldGreen shadow-default px-7 py-6"
              >
                {/* image */}
                <div className="h-48 w-64 rounded-xl overflow-hidden">
                    <img src={item.merch_photo} className="w-full h-full object-cover" alt={`Foto merchandise ${item.merch_name}`} />
                </div>
                {/* detail */}
                <div className="flex flex-col text-white py-2 gap-2.5">
                  {/* detail produk */}
                  <div className="flex flex-col">
                    <h4 style={{lineHeight: "1"}} className="headl font-bold">Detail Produk</h4>
                    <p className="tlb">{item.merch_name}</p>
                    <p>Jumlah: {item.quantity}</p>
                  </div>
                  {/* detail pengiriman */}
                  <div className="flex flex-col">
                    <h4 style={{lineHeight: "1"}} className="headl font-bold">Detail Pengiriman</h4>
                    <p>Alamat: {item.address + ", " + item.address_label + ". " + item.phone_number}</p>
                    <p>Status: {item.status}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full items-center flex justify-center">
              <p className="text-white">Belum ada penukaran merchandise</p>
            </div>
          )}
        </div>
    </ProfileLayout>
  );
};

export default ProfilePurchase;
