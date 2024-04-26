package seeds

import (
	"flonn-be/pkg/entity"

	"gorm.io/gorm"
)

func (s *seeder) seedBiodiversity(sql *gorm.DB) error {
	var objects []entity.Biodiversity

	if err := sql.First(&objects).Error; err != gorm.ErrRecordNotFound {
		return err
	}
	objects = []entity.Biodiversity{
		{
			Name:            "Gajah",
			LatinName:       "Elephas maximus",
			Description:     "paragraf1<>paragraf2<>paragraf3",
			Behavior:        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor.Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Characteristics: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor.Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Photo:           "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/biodiversity%2FGajah1.jpg?alt=media&token=0e9b1be6-a1c3-4041-9922-4907afb0aa54<>https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/biodiversity%2FGajah2.jpg?alt=media&token=a38bc4ce-18dc-4470-87e2-cd6d1303be26<>https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/biodiversity%2FGajah3.jpg?alt=media&token=925d187d-1a18-43b6-80db-44534374fd0b",
			StatusID:        1,
			HabitatID:       7,
			SpeciesID:       1,
		},
		{
			Name:            "Harimau",
			LatinName:       "Panthera tigris",
			Description:     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor. Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Behavior:        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor.Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Characteristics: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor.Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Photo:           "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/biodiversity%2FHarimau1.jpg?alt=media&token=ab2b3ff4-bd04-49ff-a1df-14fb8cf7fd37<>https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/biodiversity%2FHarimau2.jpg?alt=media&token=bf665f3d-646c-4bfb-9c24-38f5eac20f53<>https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/biodiversity%2FHarimau3.jpg?alt=media&token=9ce322ec-9cf3-4829-8624-e743599684a9",
			StatusID:        2,
			HabitatID:       7,
			SpeciesID:       3,
		},
		{
			Name:            "Pakis",
			LatinName:       "Pteridium aquilinum",
			Description:     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor. Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Characteristics: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor.Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Behavior:        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor.Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Photo:           "https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/biodiversity%2FPakis1.jpg?alt=media&token=b46d50b2-42a4-44de-bf95-6d88cf4bdde3<>https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/biodiversity%2FPakis2.jpg?alt=media&token=bb3f52ae-1bf5-4a38-a095-b85fc485559b<>https://firebasestorage.googleapis.com/v0/b/flonn-pubek.appspot.com/o/biodiversity%2FPakis3.jpg?alt=media&token=53ed359d-b0de-4d8b-8450-11a32b33a564",
			StatusID:        3,
			HabitatID:       1,
			SpeciesID:       2,
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
