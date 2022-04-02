<script>
import feather from 'feather-icons';
import projects from '../data/projects.js'
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
// import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',

	props: {
		project_id : {
			type: Number,
			required: true
		}
	},

	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
	},
	data()  {
		return {
			projects,
			id: this.project_id,
			
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	computed: {
		project(){return projects.find( project => project.id === this.id)}
	},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<p class="dark:text-white" >Project-id: {{ id }}</p>
		<p class="dark:text-white" >Project-title: {{ project.title }}</p>
		
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="project.singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="project.projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="project.projectInfo" />

		<!-- Project related projects -->
		<!-- <ProjectRelatedProjects :relatedProject="project.relatedProject" /> -->
	</div>
</template>

<style scoped></style>
