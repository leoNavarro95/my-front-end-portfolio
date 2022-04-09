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
			singleProjectTitle: 'An app to record the electricity consumption of your home',
			singleProjectDate: 'Dec 15, 2020',
			singleProjectTag: 'UI / Frontend / Flutter / Multiplatform',
		},
		projectImages: [
			{
				id: 1,
				title: 'Ktao app',
				img: require('@/assets/images/projects/ktao app/ktao-app.jpg'),
			},
			{
				id: 2,
				title: 'Ktao app 2',
				img: require('@/assets/images/projects/ktao app/ktao-app-2.jpg'),
			},
			{
				id: 3,
				title: 'Ktao app 3',
				img: require('@/assets/images/projects/ktao app/ktao-app-3.jpg'),
			},
			{
				id: 4,
				title: 'Ktao app 4',
				img: require('@/assets/images/projects/ktao app/ktao-app-4.jpg'),
			},
		],

		projectInfo: {
			clientHeading: 'Personal Project',
			companyInfos: [
			
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				'This mobile app will allow the user to keep a full electricity registry of his house, business or in general any entity he has. In addition, each electrical consumption record will be displayed in charts that help the user to better understand the consumption of their establishment. In all cases, you will be in a clear and attractive UI. It will also have dark theme selector.',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Flutter',
						'GetX',
						'SQL',
					],
				},
			],
			projectDetailsHeading: 'Challenge',
			projectDetails: [
				{
					id: 1,
					details:
						'This is my first mobile app development, I had to learn a lot of new and interesting things: such as the Dart programming language and the Flutter ecosystem. Why Flutter? Well, I have the idea to make this project multiplatform in a early future, so Flutter is my best choice. Also, Flutter is awesome and my short experience with it has been wonderfull!',
				},
				{
					id: 2,
					details:
						'In this project I had to design from scratch all the UI interface, I learned to work with new concepts to me like hero animations, theme managment, user preferences, and page transitions. Also, I get some tricks from UX design to do this app such as the use of tabs for navigation, floating action button to interact with the interface, and intuitive animation and a wise palette of color for a better user experience.',
				},
				{
					id: 3,
					details:
						'From the perspective of the database design It has been a really interesting experience to me, I used SQL in that sense and I had to model the tables: Counter, Readings and Consumption to make all the relations between them to make this app work correctly.',
				},
				{
					id: 4,
					details:
						'Currently I have a pre-release of the app in Android Environment that made me to learn about Android configuration such as: Android SDK, packages management, architectures, Android Manifest, and so on...',
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
			singleProjectTitle: 'Web Pokemon Game',
			singleProjectDate: 'Oct 17, 2021',
			singleProjectTag: 'UI / Frontend / Quiz Game',
		},
		projectImages: [
			{
				id: 1,
				title: 'Pokemon-hide',
				img: require('@/assets/images/projects/pokemon game/web-project-Pokemon-hide.png'),
			},
			{
				id: 2,
				title: 'Pokemon-show',
				img: require('@/assets/images/projects/pokemon game/web-project-Pokemon-show.png'),
			}
		],

		projectInfo: {
			clientHeading: 'Personal Project',
			companyInfos: [
				
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
