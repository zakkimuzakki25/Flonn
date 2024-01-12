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
			Name:        "Gajah",
			LatinName:   "Elephas maximus",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor. Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Behavior:    "Herbivora",
			StatusID:    1,
			HabitatID:   1,
			SpeciesID:   1,
		},
		{
			Name:        "Singa",
			LatinName:   "Panthera leo",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor. Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Behavior:    "Karnivora",
			StatusID:    1,
			HabitatID:   2,
			SpeciesID:   2,
		},
		{
			Name:        "Harimau",
			LatinName:   "Panthera tigris",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor. Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Behavior:    "Karnivora",
			StatusID:    1,
			HabitatID:   3,
			SpeciesID:   3,
		},
		{
			Name:        "Komodo",
			LatinName:   "Varanus komodoensis",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor. Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Behavior:    "Karnivora",
			StatusID:    1,
			HabitatID:   4,
			SpeciesID:   4,
		},
		{
			Name:        "Panda",
			LatinName:   "Ailuropoda melanoleuca",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor. Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Behavior:    "Herbivora",
			StatusID:    1,
			HabitatID:   5,
			SpeciesID:   5,
		},
		{
			Name:        "Kanguru",
			LatinName:   "Macropus",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor. Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Behavior:    "Herbivora",
			StatusID:    1,
			HabitatID:   1,
			SpeciesID:   1,
		},
		{
			Name:        "Gorila",
			LatinName:   "Gorilla",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor. Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Behavior:    "Herbivora",
			StatusID:    1,
			HabitatID:   2,
			SpeciesID:   2,
		},
		{
			Name:        "Hiu Putih",
			LatinName:   "Carcharodon carcharias",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor. Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Behavior:    "Karnivora",
			StatusID:    1,
			HabitatID:   3,
			SpeciesID:   3,
		},
		{
			Name:        "Kuda Nil",
			LatinName:   "Hippopotamus amphibius",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor. Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Behavior:    "Herbivora",
			StatusID:    1,
			HabitatID:   4,
			SpeciesID:   4,
		},
		{
			Name:        "Koala",
			LatinName:   "Phascolarctos cinereus",
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus ante. Morbi sagittis, mauris vel accumsan hendrerit, nunc mauris gravida justo, at egestas justo sem sollicitudin mi. Nam a porta sapien. Etiam massa sem, auctor quis placerat id, finibus non odio. Ut blandit massa vitae eros sodales ultrices. Morbi id mattis mi. Vivamus porttitor turpis suscipit purus consequat ullamcorper vel eu tortor. Fusce risus nisl, suscipit sed viverra a, sollicitudin nec neque. Sed dui leo, posuere sit amet orci vitae, iaculis ultrices enim. Maecenas sit amet fringilla dolor. Etiam eget odio porta, accumsan erat hendrerit, viverra dolor. Cras eget augue eu erat pharetra iaculis eget quis magna. Nullam sit amet rhoncus elit. Vivamus nec efficitur tortor. Nullam et mauris id enim tempor maximus vitae at sem. In tempus hendrerit quam, condimentum lobortis ligula vulputate et. Nulla quis fringilla purus. In et massa in turpis gravida tincidunt sit amet at metus. Sed dapibus, nunc non eleifend feugiat, arcu mauris tempus sem, at lobortis dui eros sit amet enim. Vivamus sagittis, eros at rutrum sodales, odio lacus blandit leo, eu condimentum nibh metus ut metus. Vivamus a lorem in justo congue mollis. In viverra nec lectus non mattis. Integer pulvinar turpis augue, eget sagittis est consequat at. Proin blandit arcu a aliquet pretium. Donec tincidunt purus arcu, vitae vulputate sem imperdiet interdum. Fusce quis tincidunt nisi.",
			Behavior:    "Herbivora",
			StatusID:    1,
			HabitatID:   5,
			SpeciesID:   5,
		},
	}

	if err := sql.Create(&objects).Error; err != nil {
		return err
	}
	return nil
}
