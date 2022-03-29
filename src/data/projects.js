// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Personal journal',
		route: '/projects/personal-journal',
		category: 'Web Application',
		img: require('@/assets/images/web-PersonalJournal-Login.png'),
	},
	{
		id: 2,
		title: 'Ktao-App',
		route: '/projects/ktao-app',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'Pokemon Game',
		route: '/projects/pokemon-game',
		category: 'Web Application',
		img: require('@/assets/images/web-project-Pokemon.png'),
	}
];

export default projects;
