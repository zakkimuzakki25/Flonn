package seeds

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func (s *seeder) seedDummyOpenCampaign(sql *gorm.DB) error {
	var objects []entity.OpenCampaign

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}
	objects = []entity.OpenCampaign{
		{
			Title:       "Say No to Plastic",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FBANNER%20SAY%20NO%20TO%20PLASTIC.jpg?alt=media&token=e4d7c3d0-7ed3-44b4-a0ba-113dbf33d38a",
			Highlight:   `"Say No to Plastic" bukan sekadar slogan, melainkan gerakan kita bersama untuk kehidupan yang lebih hijau. Lewat inisiatif ini, kita mengajak Sobat Flonn untuk beraksi mulai dari yang paling sederhana seperti gunakan tas belanja ulang pakai dan bawa botol minum pribadi. Klik "Mulai Beraksi" dan ambil langkah cerdas untuk lingkungan, mulai hari ini!.`,
			Description: `Dalam menghadapi tantangan lingkungan yang semakin mendesak, kampanye "Say No to Plastic" bertujuan untuk mengurangi penggunaan plastik sekali pakai yang telah lama memberikan dampak negatif terhadap alam. Mulailah dengan langkah sederhana seperti menggunakan tas belanja yang dapat digunakan kembali dan membawa botol minum pribadi. Langkah-langkah kecil ini, ketika dilakukan secara konsisten, dapat membawa perubahan besar terhadap kelestarian lingkungan kita. Dengan berpartisipasi dalam kampanye "Say No to Plastic," Sobat Flonn tidak hanya membantu mengurangi sampah plastik, tapi juga menjadi bagian dari gerakan global untuk kehidupan yang lebih hijau.`,
			Keterangan:  "Plastik sekali pakai sangat sulit terurai dan bisa bertahan di alam selama ratusan tahun, mengakibatkan polusi yang masif di lingkungan. Di lautan, plastik sekali pakai seperti tas belanja, sedotan, dan bungkus makanan berakhir mengotori perairan dan membahayakan kehidupan laut. Tidak hanya menumpuk sebagai sampah, plastik juga dapat memecah menjadi partikel mikro yang lebih kecil, yang kemudian dikonsumsi oleh hewan laut. Partikel ini berpotensi mengkontaminasi rantai makanan, bahkan bisa berakhir di piring makan kita, membawa dampak negatif terhadap kesehatan manusia.<>Selain itu, produksi plastik sekali pakai menghabiskan sumber daya alam yang berharga dan menghasilkan emisi karbon yang tinggi. Proses produksinya seringkali melibatkan penggunaan bahan kimia berbahaya yang dapat mencemari udara, air, dan tanah. Ini tidak hanya merusak habitat alami tetapi juga mempengaruhi kesehatan komunitas yang tinggal di dekat fasilitas produksi plastik. Dengan menurunkan ketergantungan kita pada plastik sekali pakai, kita tidak hanya mengurangi dampak langsung terhadap lingkungan tetapi juga mendukung prinsip ekonomi sirkular yang lebih berkelanjutan.",
			Steps:       "Bawa tas belanja sendiri ketika berbelanja.<>Gunakan botol minum dan wadah makanan yang dapat digunakan.<>Belanja di toko yang menawarkan barang tanpa kemasan, atau pilih produk dengan kemasan yang bisa didaur ulang atau biodegradable.<>Bawa peralatan makan sendiri seperti garpu, sendok, dan sedotan yang bisa dicuci dan digunakan kembali.<>Hindari pembelian makanan cepat saji yang sering kali dikemas dalam plastik dan styrofoam.<>Pisahkan sampah plastik dari jenis sampah lainnya dan pastikan sampah plastik tersebut masuk ke fasilitas daur ulang yang tepat.<>Edukasi keluarga dan teman tentang pentingnya mengurangi penggunaan plastik dan bagaimana mereka juga bisa berkontribusi.",
		},
		{
			Title:       "RECYCLE FOR LIFE",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FBANNER%20RECYCLE%20FOR%20LIFE.jpg?alt=media&token=cdc7fbbb-5010-4299-ab84-3038213d2fd2",
			Highlight:   `Di "Recycle for Life", dengan hanya memilah sampah dan mendaur ulang barang-barang yang tidak terpakai, Sobat Flonn telah membantu mengurangi limbah dan menghemat sumber daya alam. Klik 'Mulai Beraksi' sekarang dan jadilah pahlawan bagi planet kita dengan tindakan sederhana yang berdampak besar. Bersama-sama, kita bisa membuat perubahan yang berarti untuk bumi yang kita cintai!`,
			Description: `-`,
			Keterangan:  "-",
			Steps:       "-",
		},
		{
			Title:       "hijaukan harimu",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2Fmarkus-spiske-4PG6wLlVag4-unsplash.jpg?alt=media&token=1d499331-dc60-4729-a766-14054a6efcbb",
			Highlight:   `Gabung dalam gerakan "Hijaukan Harimu" dan jadilah bagian dari revolusi hijau. Dengan setiap tindakan kecil, kita dapat membuat perubahan besar. Mari tanam lebih banyak kehidupan, satu pot tanaman dalam waktu bersamaan. Bersama, kita dapat mendorong gaya hidup yang lebih berkelanjutan dan menyegarkan udara yang kita hirup.`,
			Description: `-`,
			Keterangan:  "-",
			Steps:       "-",
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
