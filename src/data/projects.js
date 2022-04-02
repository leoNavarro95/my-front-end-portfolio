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
	},


	{
		id: 2,
		title: 'Ktao-App',
		route: `/projects/2`,
		category: 'Mobile Application',
		img: require('@/assets/images/projects/ktao app/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'Pokemon Game',
		route: `/projects/3`,
		category: 'Web Application',
		img: require('@/assets/images/projects/pokemon game/web-project-Pokemon.png'),
	}
];

export default projects;
