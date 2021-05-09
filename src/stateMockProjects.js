const projects = Array(9).fill({
	name: 'project 1',
	description: 'A completely worthwhile description, worthy of reading',
	createdAt: new Date(),
	modifiedAt: new Date(),
	notes: {
		1: {
			name: 'some thought on flow',
			content: 'I was thinking that with the main character having a mysterious backstory, it would be tedious to throw this in the audience\'s face first thing. Show, don\'t tell, right? So it should be pretty inconspicuous at first; interactions that don\'t wholly make sense, "off"-seeming reactions to actions of other characters, etc.',
			createdAt: new Date(),
			modifiedAt: new Date(),
		},
		2: {
			name: 'comic relief',
			content: 'Will come back to this later, but: beginning to think comic relief characters are outdated. If there\'s an opportunity for some well-placed humor, take it; but don\'t center a character\'s role in the story around taking the audience out of the story through fourth wall breaks.',
			createdAt: new Date(),
			modifiedAt: new Date(),
		},
	},
	timelines: {
		1: {
			name: 'Main Timeline',
			description: 'the "main" timeline',
		},
	},
	charactersMeta: {
		1: {
			projectId: 1,
			name: 'meta-Adam',
		},
		2: {
			projectId: 1,
			name: 'meta-Eve',
		},
	},
	characters: {
		1: {
			metaCharacterId: 1,
			name: 'Adam',
			nameForWriterReference: null,
			birthplace: 'Garden of Feedin\'',
		},
		2: {
			name: 'Eve',
			nameForWriterReference: null,
			birthplace: 'Garden of Feedin\'',
		},
	},
	events: {
		1: {
			nameForWriterReference: 'protag birth',
			nameCanon: 'Terrence\'s 0th birthday',
			description: 'a hero is born',
			timelineId: 1,
			datetimeStart: new Date(),
			datetimeEnd: new Date(),
		}
	},
	locationsMeta: {
		1: {
			name: 'hometown',
			description: 'just ya boi\'s old haunts',
			projectId: 1,
		}
	},
	locations: {
		1: {
			metaLocationId: 1,
			nameForWriterReference: 'hometown normal',
			nameCanon: 'Callto-Actionville',
			description: 'where the protag grew up',
		},
		2: {
			metaLocationId: 1,
			nameForWriterReference: 'hometown evil',
			nameCanon: 'Callto-Actionville',
			description: 'hero\'s hometown undert evil military rule',
		}
	}
});

export default projects;
