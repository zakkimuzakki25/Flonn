import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const VolunteerCard = ({judul, subjudul, photo, tanggal, deskripsi, id}) => {

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <div className="flex flex-row w-full h-72 rounded-2xl bg-white overflow-hidden">
      {/* foto donasi */}
      <img src={photo} className="w-80 object-cover" />
      {/* info */}
      <div className="flex flex-col p-6 px-9 justify-center gap-1 text-onyx">
        <p style={{lineHeight: "1.2"}} className="ds">{judul}</p>
        <p style={{lineHeight: "1.2"}} className="bl">{subjudul}</p>
        <p className="bs text-gray">{formatDate(tanggal)}</p>
        <p className="bs max-h-24 overflow-hidden">{deskripsi}</p>
      </div>
      {/* button */}
      <div className="flex pb-6 pr-6">
        <Link to={`/aksi/volunteer/${id}`} className="px-4 py-2 text-nowrap bg-viridian text-onyx rounded-2xl w-fit self-end button uppercase">Mulai Beraksi</Link>
      </div>
    </div>
  );
};

export default VolunteerCard;
