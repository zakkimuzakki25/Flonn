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
			Title:      "Say No to Plastic",
			Purpose:    "ENVIRONMENT",
			WhyText:    "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FWhyIllustration%2FFrame%20427318829.svg?alt=media&token=58d1f692-9af5-4857-83f5-230095708da0;Kurangi Sampah Plastik;Yuk, hindari plastik sekali pakai, Sobat!#https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FWhyIllustration%2FFrame%20427318829%20(1).svg?alt=media&token=cdc2eea0-2603-46b4-b48d-7d7641e637fc;Langkah Kecil, Dampak Besar;Mulai dari bawa tas belanja dan botol sendiri.#https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FWhyIllustration%2FFrame%20427318829%20(2).svg?alt=media&token=aebcdc02-902a-451f-9b59-dd7a9d410dd7;Gerakan Global;Jadilah Bagian dari Gerakan Hijau.",
			Photo:      "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FBANNER%20SAY%20NO%20TO%20PLASTIC.jpg?alt=media&token=e4d7c3d0-7ed3-44b4-a0ba-113dbf33d38a",
			Highlight:  `"Say No to Plastic" bukan sekadar slogan, melainkan gerakan kita bersama untuk kehidupan yang lebih hijau. Lewat inisiatif ini, kita mengajak Sobat Flonn untuk beraksi mulai dari yang paling sederhana seperti gunakan tas belanja ulang pakai dan bawa botol minum pribadi. Klik "Mulai Beraksi" dan ambil langkah cerdas untuk lingkungan, mulai hari ini!.`,
			Steps:      "Apa Dampak Plastik, Sobat Flonn?#Lautan Tercekik Plastik;Setiap tahun, jutaan hewan laut mati karena plastik. Penyu, burung, dan ikan mengira plastik adalah makanan. Plastik membunuh mereka perlahan.<>Mikroplastik Masuk ke Tubuhmu;Plastik tak hanya di laut, 94% air minum mengandung mikroplastik. Tanpa kita sadari, plastik itu sudah ada di dalam tubuh kita, selamanya.<>Plastik Mempercepat Pemanasan Global;Produksi plastik sama berbahayanya dengan membakar bahan bakar fosil. Semakin banyak plastik yang kita pakai, semakin cepat bumi memanas.<>Sampah Plastik: Tak Terurai, Tak Terlupakan;Plastik yang kita buang hari ini akan tetap ada hingga ratusan tahun. Satu tas plastik kecil hari ini akan menjadi warisan beracun bagi generasi cucu kita.<>Racun Plastik Menghantui Hidup Kita;Plastik mengandung zat kimia berbahaya. BPA dan racun lainnya bisa menyebabkan kanker, gangguan hormon, hingga masalah kesuburan. Setiap kali kita menggunakan plastik, kita membuka pintu untuk racun.",
			StepsPhoto: "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FSteps%20Photo%2FDampak_Plastik.svg?alt=media&token=19b7869d-fc9b-4206-b523-10afc7064e8f",
			Keterangan: "Ayo, Sobat Flonn, sebelum terlambat!#Setiap plastik yang kita hindari adalah satu langkah menyelamatkan bumi dan diri kita sendiri.",
			OpenCampaignTasks: []entity.OpenCampaignTask{
				{
					Title:        "Bawa Tas Sendiri, Belanja Lebih Ramah!",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FFrame%20427318856.svg?alt=media&token=69f0af81-d79d-4037-94d6-1ca21ce5c117",
					FlointReward: 5,
				},
				{
					Title:        "Bawa Botol Minum, Selamatkan Bumi!",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FFrame%20427318860.svg?alt=media&token=ff793a7d-0fc0-4a8d-a11c-c79d7bca4b71",
					FlointReward: 5,
				},
				{
					Title:        "Tolak Sedotan Plastik, Pilih yang Lebih Baik!",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FFrame%20427318860%20(1).svg?alt=media&token=cc504843-4e6a-4041-94d7-107da11e1aa5",
					FlointReward: 10,
				},
				{
					Title:        "Makan Tanpa Plastik? Gunakan Wadahmu!",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FFrame%20427318860%20(2).svg?alt=media&token=88d9aff3-d49c-4652-b086-f75f5442227d",
					FlointReward: 10,
				},
				{
					Title:        "Ayo Bersih-bersih Plastik di Lingkunganmu!",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FFrame%20427318856%20(1).svg?alt=media&token=c82cebb8-8dbd-40ce-b996-46cf10fa7f68",
					FlointReward: 25,
				},
				{
					Title:        "Sebar Kebaikan: Edukasi Pengurangan Plastik!",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FFrame%20427318860%20(3).svg?alt=media&token=f1af0ead-c3ab-4984-b9ac-fde9df079ed7",
					FlointReward: 20,
				},
				{
					Title:        "Di Rumah Tanpa Plastik Sekali Pakai",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FFrame%20427318857.svg?alt=media&token=42ba74b2-039d-4541-bf65-def0182bf70b",
					FlointReward: 10,
				},
			},
		},
		{
			Title:      `Cintai Bumi Dengan “Hijaukan Harimu”`,
			Purpose:    "Environment",
			WhyText:    "",
			Photo:      "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2Fmarkus-spiske-4PG6wLlVag4-unsplash.jpg?alt=media&token=1d499331-dc60-4729-a766-14054a6efcbb",
			Highlight:  `Gabung dalam gerakan "Hijaukan Harimu" dan jadilah bagian dari revolusi hijau. Dengan setiap tindakan kecil, kita dapat membuat perubahan besar. Mari tanam lebih banyak kehidupan, satu pot tanaman dalam waktu bersamaan. Bersama, kita dapat mendorong gaya hidup yang lebih berkelanjutan dan menyegarkan udara yang kita hirup.`,
			Steps:      "Tanam Bibit, petik manfaat#Segarkan Udaramu;Tanamanmu bantu bersihkan udara dan hasilkan oksigen segar. Napas jadi lebih sehat!<>Kurangi Stres;Ruang hijau bikin hati lebih tenang dan mood lebih baik. Tanam tanaman, tanam kebahagiaan!<>Jadi Pahlawan Bumi;Setiap tanaman yang kamu tanam bantu kurangi jejak karbon. Kamu menyelamatkan bumi, satu tanaman dalam satu waktu!<>Percantik Ruanganmu;Tanaman bikin ruangan lebih segar, indah, dan nyaman. Ruang hijau, hidup ceria!<>Belajar Hal Baru;Berkebun itu seru! Kamu bisa belajar cara merawat tanaman dan bantu lingkungan.",
			StepsPhoto: "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FSteps%20Photo%2Fdampak_hijaukan.svg?alt=media&token=57f7bf1b-f7d5-4a98-831d-fadbe260c4e3",
			Keterangan: "Ayo, Sobat Flonn, Hijaukan Harimu Sekarang!#Tanam harapan, tanam masa depan hijau!",
			OpenCampaignTasks: []entity.OpenCampaignTask{
				{
					Title:        "Hijaukan Meja Kerja",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FHijaukan%20Harimu%2FFrame%20427318860.svg?alt=media&token=e11003c1-8201-4d1c-9f99-dcc5baf1a684",
					FlointReward: 5,
				},
				{
					Title:        "Pasang Tanaman Gantung",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FHijaukan%20Harimu%2FFrame%20427318860%20(1).svg?alt=media&token=22a39913-942b-4823-a779-f83fa907010b",
					FlointReward: 10,
				},
				{
					Title:        "Tanam Tanaman Herbal",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FHijaukan%20Harimu%2FFrame%20427318856.svg?alt=media&token=efea3ac7-fabf-477f-b174-e6c95b76ab42",
					FlointReward: 15,
				},
				{
					Title:        "Adopsi Tanaman Hias",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FHijaukan%20Harimu%2FFrame%20427318857.svg?alt=media&token=b5e771cb-179e-41fb-aa9a-5915e9ae4ab8",
					FlointReward: 15,
				},
				{
					Title:        "Ciptakan Taman Mini di Rumah",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FHijaukan%20Harimu%2FFrame%20427318856%20(1).svg?alt=media&token=2a095214-289a-46f2-a4cc-bcfd2c7a40ee",
					FlointReward: 25,
				},
				{
					Title:        "Tanam Pohon Bersama Keluarga",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FHijaukan%20Harimu%2FFrame%20427318860%20(2).svg?alt=media&token=ca437ed8-61cc-4be0-90e0-e8d996294122",
					FlointReward: 40,
				},
				{
					Title:        "Gunakan Kompos",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FHijaukan%20Harimu%2FFrame%20427318857%20(1).svg?alt=media&token=dc73c889-7f7b-48f2-b989-179629209356",
					FlointReward: 20,
				},
				{
					Title:        "Gabung Komunitas Tanam Pohon",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FHijaukan%20Harimu%2FFrame%20427318857%20(2).svg?alt=media&token=eefe9591-02e9-4aa5-ad2a-f04a881082bd",
					FlointReward: 35,
				},
			},
		},
		{
			Title:      "Ubah Sampah Menjadi berharga melalui “Recycle of life”",
			Purpose:    "Waste",
			WhyText:    "",
			Photo:      "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FBANNER%20RECYCLE%20FOR%20LIFE.jpg?alt=media&token=cdc7fbbb-5010-4299-ab84-3038213d2fd2",
			Highlight:  `Di "Recycle for Life", dengan hanya memilah sampah dan mendaur ulang barang-barang yang tidak terpakai, Sobat Flonn telah membantu mengurangi limbah dan menghemat sumber daya alam. Klik 'Mulai Beraksi' sekarang dan jadilah pahlawan bagi planet kita dengan tindakan sederhana yang berdampak besar. Bersama-sama, kita bisa membuat perubahan yang berarti untuk bumi yang kita cintai!`,
			Steps:      "APA MANFAAT DARI DAUR ULANG?#Kurangi Sampah, Selamatkan Bumi;Setiap barang yang kamu daur ulang membantu mengurangi tumpukan sampah di bumi.<>Hemat Energi dan Sumber Daya;Daur ulang jauh lebih hemat energi dibandingkan membuat barang baru.<>Ciptakan Produk Baru dari Limbah;Barang bekas bisa diubah jadi produk baru yang berguna.<>Lindungi Lingkungan, Sehatkan Hidup;Daur ulang menjaga air, tanah, dan udara tetap bersih.<>Bersama Kita Buat Perubahan;Bergabunglah dengan gerakan global untuk daur ulang.",
			StepsPhoto: "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FSteps%20Photo%2FDampak_Plastik.svg?alt=media&token=19b7869d-fc9b-4206-b523-10afc7064e8f",
			Keterangan: "Ayo, Ubah Sampah Jadi Aksi Nyata!#Daur ulang untuk bumi yang lebih bersih dan sehat. Ubah limbah, ciptakan masa depan hijau!",
			OpenCampaignTasks: []entity.OpenCampaignTask{
				{
					Title:        "Pisahkan Sampah",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FRecycle%20for%20life%2FFrame%20427318860.svg?alt=media&token=e24fd0bb-8f2b-401a-9947-30036ff765c4",
					FlointReward: 5,
				},
				{
					Title:        "Ubah Kertas Bekas Jadi Karya",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FRecycle%20for%20life%2FFrame%20427318860%20(1).svg?alt=media&token=0bc47590-6e82-47a4-8993-a2bae2530fdf",
					FlointReward: 15,
				},
				{
					Title:        "Daur Ulang Botol dan Kaleng Bekas",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FRecycle%20for%20life%2FFrame%20427318860%20(2).svg?alt=media&token=f235037e-59a9-4202-a945-acdbbee2b222",
					FlointReward: 5,
				},
				{
					Title:        "Buat Eco-Brick",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FRecycle%20for%20life%2FFrame%20427318857.svg?alt=media&token=8b7a70d7-0e80-40a1-9974-326aa2f176b6",
					FlointReward: 35,
				},
				{
					Title:        "Donasikan Pakaian Bekas",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FRecycle%20for%20life%2FFrame%20427318856.svg?alt=media&token=7e6d122a-2fb3-43f1-969c-3e279bd10236",
					FlointReward: 25,
				},
				{
					Title:        "Kumpulkan Limbah Elektronik",
					Photo:        "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/campaign%2FtaskIllustration%2FRecycle%20for%20life%2FFrame%20427318860%20(3).svg?alt=media&token=35e2d0de-536d-4c47-8bed-3a703fc2c7b2",
					FlointReward: 40,
				},
			},
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
