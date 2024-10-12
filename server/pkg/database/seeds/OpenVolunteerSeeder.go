package seeds

import (
	"flonn-be/pkg/entity"
	"time"

	"gorm.io/gorm"
)

func (s *seeder) seedDummyOpenVolunteer(sql *gorm.DB) error {
	var objects []entity.OpenVolunteer

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}

	parseTime := func(str string) time.Time {
		startDate, _ := time.Parse("2006-01-02", str)
		return startDate
	}

	objects = []entity.OpenVolunteer{
		{
			Title:       "Relawan Konservasi Penyu",
			Subtitle:    "Penyelamat alam",
			Location:    "Pantai Kuta, Bali",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/volunteer%2FVOLUNTEER%20DETAIL%20KONSERVASI%20PENYU.jpg?alt=media&token=8ac46ebc-ac2c-4558-af62-e677fbea27e2",
			Description: "FLONN mengajak para Flonteer untuk terjun langsung dalam aksi konservasi penyu di Pantai Kuta, Bali. Bergabung menjadi Flonteer dan mengambil bagian dalam kegiatan mulai dari pemantauan habitat hingga penyelamatan penyu yang terluka. Di sini, setiap tindakan Flonteer berkontribusi pada pelestarian kehidupan laut. Kegiatan edukasi yang dilakukan juga membuka mata masyarakat tentang pentingnya menjaga keberlangsungan spesies ini. Jadi, siapkah Sobat Flonn untuk membuat perbedaan? Gabung sekarang dan bantu FLONN menjaga agar pantai ini tetap menjadi rumah yang aman bagi penyu untuk generasi yang akan datang.",
			StartDate:   parseTime("2024-06-23"),
			EndDate:     parseTime("2024-08-11"),
			Tasks:       "Pemantauan Habitat<>Flonteer akan melakukan pemantauan rutin di pantai untuk menilai kondisi habitat penyu, mencakup pemantauan kualitas air, kondisi pasir, dan area bertelur. Tugas ini penting untuk memastikan bahwa habitat tersebut tetap kondusif untuk kegiatan bertelur penyu.<>Penyelamatan Penyu yang Terluka<>Jika menemukan penyu yang terluka atau dalam kondisi yang tidak baik, Flonteer akan terlibat dalam proses penyelamatan. Ini termasuk pertolongan pertama di lokasi dan mengkoordinasikan dengan fasilitas rehabilitasi lokal untuk perawatan lebih lanjut.<>Penetasan Telur dan Pelepasan Tukik<>Flonteer akan membantu dalam proses penetasan telur penyu. Mereka akan mengawasi dan melindungi telur hingga menetas dan kemudian membantu dalam pelepasan tukik ke laut, memastikan mereka memiliki kesempatan terbaik untuk bertahan hidup.<>Edukasi Komunitas<>Flonteer akan terlibat dalam program edukasi untuk masyarakat lokal dan pengunjung pantai. Kegiatan ini bertujuan untuk meningkatkan kesadaran tentang pentingnya pelestarian penyu dan cara-cara yang dapat dilakukan masyarakat untuk mendukung usaha ini.<>Pengumpulan Data untuk Penelitian<>Selama kegiatan di lapangan, Flonteer akan mengumpulkan data yang penting untuk penelitian konservasi penyu seperti pengamatan perilaku penyu, pencatatan jumlah telur yang diletakkan, dan monitoring populasi.<>Pembersihan Pantai<>Flonteer akan terlibat dalam kegiatan rutin pembersihan pantai untuk mengurangi polusi dan memastikan pantai tetap bersih dan aman bagi penyu yang bertelur",
			Condition:   "WNI (Warga Negara Indonesia)<>20-45 tahun<>Pengalaman bekerja dalam proyek konservasi lingkungan, terutama yang berhubungan dengan kehidupan laut atau spesies terancam punah, memberi pemahaman yang lebih baik tentang tantangan dan solusi praktis dalam pelestarian.:Pengalaman dalam melakukan pekerjaan lapangan, seperti pengambilan sampel, pemantauan spesies, atau aktivitas serupa di alam bebas.:Pengalaman berbicara di depan publik, yang berguna dalam menyampaikan pesan konservasi kepada audiens yang lebih luas atau dalam acara edukasi.<>Tidak ada batasan khusus mengenai jenjang pendidikan, namun latar belakang di bidang biologi, lingkungan, kelautan, atau pendidikan terkait lainnya akan menjadi nilai tambah.<>Bahasa Indonesia dan Bahasa Inggris<>Mampu berkomunikasi dengan baik dalam Bahasa Indonesia dan/atau Bahasa Inggris.:Mampu berinteraksi dengan berbagai kelompok, termasuk tim internal, masyarakat lokal, dan turis, dalam menyampaikan informasi atau mengatur aktivitas.:Memiliki kemampuan observasi yang baik, terutama dalam mengamati perilaku hewan atau kondisi alam.:Cukup fit untuk melakukan kegiatan di luar ruangan seperti berjalan di pantai, mengangkat atau membawa peralatan.:Mampu mengelola waktu dan sumber daya secara efisien untuk memenuhi kebutuhan program dan jadwal kegiatan.:Kemampuan untuk mengidentifikasi dan menangani masalah yang muncul selama aktivitas konservasi.",
		},
		{
			Title:       "PAHLAWAN PEMULIHAN",
			Subtitle:    "Relawan Bencana Banjir di Kalimantan Selatan",
			Location:    "Pantai Kuta, Bali",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/volunteer%2FRectangle%20107%20(3).png?alt=media&token=e24f2bd3-cf91-4586-92f5-d5b9e31653a9",
			Description: "Siap untuk aksi nyata? Gabung dengan Flonteer membersihkan dan membangun kembali setelah banjir. Kita bisa membuat perbedaan besar dengan tangan dan hati kita. Ayo, tunjukkan kepedulianmu dengan tindakan!",
			StartDate:   parseTime("2024-04-20"),
			EndDate:     parseTime("2024-08-20"),
			Tasks:       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>",
			Condition:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
		},
		{
			Title:       "GARDA DEPAN BANTUAN",
			Subtitle:    "Relawan Erupsi Gunung Semeru",
			Location:    "Pantai Kuta, Bali",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/volunteer%2FRectangle%20107%20(2).png?alt=media&token=a4f1f56d-1c39-4af3-97d7-0b6f61fdc9fa",
			Description: "Jadilah yang pertama di sana untuk memberi bantuan saat dibutuhkan. Bersama tim Flonteer, kita bisa menjadi andalan bagi mereka yang terdampak erupsi. Mari bergabung dan bawa kembali normalitas ke kehidupan mereka.",
			StartDate:   parseTime("2024-04-25"),
			EndDate:     parseTime("2024-08-11"),
			Tasks:       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>",
			Condition:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
		},
		{
			Title:       "Konservator kehidupan",
			Subtitle:    "Relawan Pasca Kebakaran di Bukit Teletubies Gunung Bromo",
			Location:    "Pantai Kuta, Bali",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/volunteer%2FRectangle%20107.png?alt=media&token=cdc164f0-a494-4a4c-88be-c67eebbd2632",
			Description: "Jadi pahlawan regenerasi di Bukit Gunung Bromo! Sobat Flonn bisa berkontribusi langsung pada reboisasi. Mari bersama memulai langkah untuk pemulihan alam kita!",
			StartDate:   parseTime("2024-05-29"),
			EndDate:     parseTime("2024-08-11"),
			Tasks:       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>",
			Condition:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
		},
		{
			Title:       "TIM TANGGAP DARURAT",
			Subtitle:    "Relawan Siap Siaga Gempa",
			Location:    "Pantai Kuta, Bali",
			Photo:       "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/volunteer%2FRectangle%20107%20(1).png?alt=media&token=3c5e0df9-eac0-44db-b7e9-2b0651e18bb3",
			Description: "Bantu Flonteer menjadi yang terdepan dalam memberikan bantuan setelah gempa. Kita bisa membantu lebih cepat dan lebih efektif. Ikut serta dan rasakan dampak nyata dari aksi Flonteer!",
			StartDate:   parseTime("2024-05-17"),
			EndDate:     parseTime("2024-08-11"),
			Tasks:       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>",
			Condition:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
