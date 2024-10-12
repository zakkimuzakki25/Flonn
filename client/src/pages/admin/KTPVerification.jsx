import { useContext, useEffect, useState } from 'react';
import BaseLayoutAdmin from '../../components/admin/layout/BaseLayoutAdmin'
import PrimerButton3 from '../../components/button/PrimerButton3';
import PrimerButton4 from '../../components/button/PrimerButton4';
import { BaseAdmin } from '../../api/Api';
import { LoadingContext } from '../../context/LoadingContext';

const KTPVerification = () => {
  const [data, setData] = useState(null);
  const {setIsLoading} = useContext(LoadingContext);

  const token = window.localStorage.getItem("token-adm")

  const updateKtpStatusHandle = (status, user_id) => {
    setIsLoading(true);
    BaseAdmin.post(`/ktp/update`, {
      status: status,
      user_id: user_id
    }, {
      headers: { Authorization: `Bearer ${token}` },
    }).catch((err) => {
      console.log("Error :", err);
    }).finally(() => {
      setIsLoading(false);
      getData();
    })
  }

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await BaseAdmin.get(`/ktp/unverified`, {
        headers: { Authorization: `Bearer ${window.localStorage.getItem("token-adm")}` },
      });
      const dp = res.data.data;
      if (dp) {
        setData(dp);
      } else {
        setData(null);
      }
    } catch (err) {
      console.error("Error :", err);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <BaseLayoutAdmin>
        <div className='px-20 py-12 flex flex-wrap justify-center gap-12'>
        {data ? (
          data.map((item, index) => {
            return (
              <div key={index} className='flex flex-col gap-7 bg-oldGreen px-5 py-7 rounded-xl w-fit text-white'>
                <img src={item.link} className='h-56 object-cover'/>
                <div className="flex flex-col gap-1">
                  <h4 style={{lineHeight: "1"}} className='flex-1 bl font-semibold'>Nama Depan</h4>
                  <p className='flex-1 bs mb-2'>{item.first_name}</p>
                  <h4 style={{lineHeight: "1"}} className='flex-1 bl font-semibold'>Nama Belakang</h4>
                  <p className='flex-1 bs mb-2'>{item.last_name}</p>
                  <h4 style={{lineHeight: "1"}} className='flex-1 bl font-semibold'>Email</h4>
                  <p className='flex-1 bs mb-2'>{item.email}</p>
                </div>
                <div className="flex flex-row w-fit gap-5 self-end">
                  <div className="w-48">
                    <PrimerButton4 name={"Tolak"} handle={() => {
                      updateKtpStatusHandle("rejected", item.user_id);
                    }} />
                  </div>
                  <div className="w-48 self">
                    <PrimerButton3 name={"Verifikasi"} handle={() => {
                      updateKtpStatusHandle("verified", item.user_id);
                    }} />
                  </div>
                </div>
              </div>
            )
          })
        ) : (
            <div className="text-white h-40 flex justify-center items-center flex-1">
              <p>No data</p>
            </div>
          )}
        </div>
    </BaseLayoutAdmin>
  )
}

export default KTPVerification