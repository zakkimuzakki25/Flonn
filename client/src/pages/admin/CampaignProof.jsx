import { useEffect, useState } from 'react';
import BaseLayoutAdmin from '../../components/admin/layout/BaseLayoutAdmin'
import { Base } from "../../api/Api";
import PrimerButton3 from '../../components/button/PrimerButton3';
import { useNavigate } from 'react-router-dom';

const CampaignProof = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await Base.get(`/campaign/all`);
      const dp = res.data.data;
      if (dp != null) {
        setData(dp);
      } else {
        setData([]);
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
          {data.map((item, index) => {
            return (
              <div key={index} className='flex flex-col bg-oldGreen px-4 py-5 rounded-xl w-96 gap-4 text-white'>
                <img src={item.photo} className='h-40 w-full object-cover rounded-xl' />
                <p style={{lineHeight: "1"}} className='flex-1 ds'>{item.title}</p>
                <div className="w-48 self-end">
                  <PrimerButton3 name={"Lihat Detail"} handle={() => {nav(`/b-admin/campaign/${item.ID}`)}} />
                </div>
              </div>
            )
          })}
        </div>
    </BaseLayoutAdmin>
  )
}

export default CampaignProof