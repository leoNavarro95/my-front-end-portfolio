// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.
 
const projects = [
	{
		id: 1,
		title: 'Personal journal',
		route: `/projects/1`,
		category: 'Web Application',
		img: require('@/assets/images/projects/personal journal/PersonalJournal-Login.png'),


		singleProjectHeader: {
			singleProjectTitle: 'Web Personal Journal',
			singleProjectDate: 'Dec 23, 2021',
			singleProjectTag: 'UI / Frontend',
		},
		projectImages: [
			{
				id: 1,
				title: 'Personal journal Home',
				img: require('@/assets/images/projects/personal journal/PersonalJournal-Home.png'),
			},
			{
				id: 2,
				title: 'Personal Journal Login',
				img: require('@/assets/images/projects/personal journal/PersonalJournal-Login.png'),
			},
			{
				id: 3,
				title: 'Personal Journal AddImg',
				img: require('@/assets/images/projects/personal journal/PersonalJournal-AddImg.png'),
			},
		],
		
		projectInfo: {
			clientHeading: 'Personal Project',
			companyInfos: [
				// {
				// 	id: 1,
				// 	title: 'Name',
				// 	details: 'Company Ltd',
				// },
				// {
				// 	id: 2,
				// 	title: 'Services',
				// 	details: 'UI Design & Frontend Development',
				// },
				// {
				// 	id: 3,
				// 	title: 'Website',
				// 	details: 'https://company.com',
				// },
				// {
				// 	id: 4,
				// 	title: 'Phone',
				// 	details: '555 8888 888',
				// },
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				'The web will be designed to allows the user to simply writing down his thoughts and feelings to understand them more clearly. Also, it will allows to save pictures of the day to support those thoughts and feelings. All this information will be saved in a section where each user can Login or Register with a system of password and email authentication',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue 2 and Vue 3',
						'Axios',
						'Firebase'
					],
				},
			],
			projectDetailsHeading: 'Challenge',
			projectDetails: [
				{
					id: 1,
					details:
						'In this project I had to learn many different things, one was a very difficult to me: to organice the code of a bigger project in a intuitive way. First I started to code with out any order of the folders structure, and that put me in a mess really fast. For that reason, I had to learn about project organization in modules and that saved me a lot of time later. In Vue is very easy by handle this issue and I learned fast how to do it, the key: modules.',
				},
				{
					id: 2,
					details:
						'At the middle of the project I learned to work with the Vue 3 new paradigm: Composition API, the setup function and the Composables approach. I realized that in one same project can be mixed Vue 2 and Vue 3 code, and that doesn\'t lead to disaster, fortunately. So this project is a completely mix of Vue 2 with Vue 3 as a trace of my learning process. I was able to realize the great improvement that the inclusion of the new version of the framework meant. In this journey, I took to practice all my previous knowledge about Vue: Vue Router, Vuex State Management and Option API.',
				},
				{
					id: 3,
					details:
						'To develop a web app that can handle users athentication, in the environment of Firebase. This challenged me to do somthing that I never has done, and I had to do a lot of research. In this way, I have to manage myself and there was many times when I get stuck, but never give up. I used the REST-API of this platform to manage all the entries of the users, also I implement uniques ID for each entry',
				},
				{
					id: 4,
					details:
						'Finally I encouraged to do unitary tests, and that was awesome I got in love with Jest. It\'s a really efficient way to detect early bugs in the development process. This will improve the code quality and make the testing phase easier.',
				},
			],
			socialSharingsHeading: 'Share This',
			socialSharings: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: 'facebook',
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/',
				}
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
			relatedProjects: [
				{
					id: 1,
					title: 'Personal journal',
					category: 'Web Application',
					img: require('@/assets/images/projects/personal journal/PersonalJournal-Home.png'),
				},
				{
					id: 2,
					title: 'Ktao-App',
					category: 'Mobile Application',
					img: require('@/assets/images/projects/ktao app/mobile-project-2.jpg'),
				},
				{
					id: 3,
					title: 'Pokemon Game',
					category: 'Web Application',
					img: require('@/assets/images/projects/pokemon game/web-project-Pokemon.png'),
				}
			],
		},
	},


	{
		id: 2,
		title: 'Ktao-App',
		route: `/projects/2`,
		category: 'Mobile Application',
		img: require('@/assets/images/projects/ktao app/mobile-project-2.jpg'),

		singleProjectHeader: {
			singleProjectTitle: 'An app to track the consume of your house',
			singleProjectDate: 'Dec 15, 2020',
			singleProjectTag: 'UI / Frontend / Flutter / Multiplatform',
		},
		projectImages: [
			{
				id: 1,
				title: 'Personal journal Home',
				img: require('@/assets/images/projects/personal journal/PersonalJournal-Home.png'),
			},
			{
				id: 2,
				title: 'Personal Journal Login',
				img: require('@/assets/images/projects/personal journal/PersonalJournal-Login.png'),
			},
			{
				id: 3,
				title: 'Personal Journal Entry',
				img: require('@/assets/images/projects/personal journal/PersonalJournal-Entry.png'),
			},
			{
				id: 4,
				title: 'Personal Journal EntryEd',
				img: require('@/assets/images/projects/personal journal/PersonalJournal-EntryEd.png'),
			},
			{
				id: 5,
				title: 'Personal Journal Login',
				img: require('@/assets/images/projects/personal journal/PersonalJournal-AddImg.png'),
			},
		],

		projectInfo: {
			clientHeading: 'Personal Project',
			companyInfos: [
				// {
				// 	id: 1,
				// 	title: 'Name',
				// 	details: 'Company Ltd',
				// },
				// {
				// 	id: 2,
				// 	title: 'Services',
				// 	details: 'UI Design & Frontend Development',
				// },
				// {
				// 	id: 3,
				// 	title: 'Website',
				// 	details: 'https://company.com',
				// },
				// {
				// 	id: 4,
				// 	title: 'Phone',
				// 	details: '555 8888 888',
				// },
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'Firebase'
					],
				},
			],
			projectDetailsHeading: 'Challenge',
			projectDetails: [
				{
					id: 1,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: 2,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: 3,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: 4,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
			],
			socialSharingsHeading: 'Share This',
			socialSharings: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: 'facebook',
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/',
				}
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
			relatedProjects: [
				{
					id: 1,
					title: 'Personal journal',
					category: 'Web Application',
					img: require('@/assets/images/projects/personal journal/PersonalJournal-Home.png'),
				},
				{
					id: 2,
					title: 'Ktao-App',
					category: 'Mobile Application',
					img: require('@/assets/images/projects/ktao app/mobile-project-2.jpg'),
				},
				{
					id: 3,
					title: 'Pokemon Game',
					category: 'Web Application',
					img: require('@/assets/images/projects/pokemon game/web-project-Pokemon.png'),
				}
			],
		},

	},


	{
		id: 3,
		title: 'Pokemon Game',
		route: `/projects/3`,
		category: 'Web Application',
		img: require('@/assets/images/projects/pokemon game/web-project-Pokemon.png'),

		singleProjectHeader: {
			singleProjectTitle: 'Web Personal Journal',
			singleProjectDate: 'Jul 26, 2021',
			singleProjectTag: 'UI / Frontend',
		},
		projectImages: [
			{
				id: 1,
				title: 'Personal journal Home',
				img: require('@/assets/images/projects/personal journal/PersonalJournal-Home.png'),
			},
			{
				id: 2,
				title: 'Personal Journal Login',
				img: require('@/assets/images/projects/personal journal/PersonalJournal-Login.png'),
			},
			{
				id: 3,
				title: 'Personal Journal Entry',
				img: require('@/assets/images/projects/personal journal/PersonalJournal-Entry.png'),
			},
			{
				id: 4,
				title: 'Personal Journal EntryEd',
				img: require('@/assets/images/projects/personal journal/PersonalJournal-EntryEd.png'),
			},
			{
				id: 5,
				title: 'Personal Journal Login',
				img: require('@/assets/images/projects/personal journal/PersonalJournal-AddImg.png'),
			},
		],

		projectInfo: {
			clientHeading: 'Personal Project',
			companyInfos: [
				// {
				// 	id: 1,
				// 	title: 'Name',
				// 	details: 'Company Ltd',
				// },
				// {
				// 	id: 2,
				// 	title: 'Services',
				// 	details: 'UI Design & Frontend Development',
				// },
				// {
				// 	id: 3,
				// 	title: 'Website',
				// 	details: 'https://company.com',
				// },
				// {
				// 	id: 4,
				// 	title: 'Phone',
				// 	details: '555 8888 888',
				// },
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'Firebase'
					],
				},
			],
			projectDetailsHeading: 'Challenge',
			projectDetails: [
				{
					id: 1,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: 2,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: 3,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: 4,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
			],
			socialSharingsHeading: 'Share This',
			socialSharings: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://instagram.com/',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: 'facebook',
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/',
				}
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
			relatedProjects: [
				{
					id: 1,
					title: 'Personal journal',
					category: 'Web Application',
					img: require('@/assets/images/projects/personal journal/PersonalJournal-Home.png'),
				},
				{
					id: 2,
					title: 'Ktao-App',
					category: 'Mobile Application',
					img: require('@/assets/images/projects/ktao app/mobile-project-2.jpg'),
				},
				{
					id: 3,
					title: 'Pokemon Game',
					category: 'Web Application',
					img: require('@/assets/images/projects/pokemon game/web-project-Pokemon.png'),
				}
			],
		},

	}
];

export default projects;
