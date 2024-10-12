import { useContext, useEffect, useState } from "react";
import BaseLayoutAdmin from "../../components/admin/layout/BaseLayoutAdmin"
import PrimerButton3 from  "../../components/button/PrimerButton3"
import PrimerButton4 from  "../../components/button/PrimerButton4"
import { BaseAdmin } from "../../api/Api";
import { useParams } from "react-router-dom";
import { LoadingContext } from "../../context/LoadingContext";

const CampaignProofList = () => {
    const [data, setData] = useState(null);
    const {setIsLoading} = useContext(LoadingContext);

    const token = window.localStorage.getItem("token-adm")

    const { id } = useParams();

    const updateTaskStatusHandle = (task_id, user_id, status) => {
      setIsLoading(true);
      BaseAdmin.post(`/campaign/proof/update`, {
        task_id: task_id,
        user_id: user_id,
        status: status
      }, {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        console.log("res = ", res);
      }).catch((err) => {
        console.log("Error :", err);
      }).finally(() => {
        setIsLoading(false);
        getData();
      })
    }

    const getData = async () => {
        try {
          const res = await BaseAdmin.get(`/campaign/proof/${id}`, {
            headers: { Authorization: `Bearer ${window.localStorage.getItem("token-adm")}` },
          });
          const dp = res.data.data;
          console.log("data = ", dp);
          if (dp != null) {
            setData(dp);
          } else {
            setData(null);
          }
        } catch (err) {
          console.error("Error :", err);
        }
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
                <p style={{lineHeight: "1"}} className='flex-1 ds'>{item.title}</p>
                <div className="flex flex-row gap-10">
                  <img src={item.proof_photo} className='w-96 h-56 object-cover' />
                  <img src={item.ktp_photo} className='w-96 h-56 object-cover'/>
                </div>
                <p style={{lineHeight: "1"}} className='flex-1 ds'>{item.username}</p>
                <div className="flex flex-row w-fit gap-5 self-end">
                  <div className="w-48">
                    <PrimerButton4 name={"Tolak"} handle={() => {
                      updateTaskStatusHandle(item.task_id, item.user_id, "rejected");
                    }} />
                  </div>
                  <div className="w-48 self">
                    <PrimerButton3 name={"Verifikasi"} handle={() => {
                      updateTaskStatusHandle(item.task_id, item.user_id, "accepted");
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

export default CampaignProofList