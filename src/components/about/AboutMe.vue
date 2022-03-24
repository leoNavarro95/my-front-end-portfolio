<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Automation Engineer graduate, adept front-end developer focusing on JavaScript mobile-first development. After initialice with Vue.js front-end development, I am eager to continue my career by joining a hardworking and interactive team where I will continue expanding my JavaScript knowledge into perfecting accessibility and responsive design.',
				},
				{
					id: 2,
					bio:
						'I have strong knowledge of: HTML, CSS, JavaScript, Vue.js, Bootstrap, Tailwind, Flutter and SQL. I am familiar with Node.js in back-end scenario. Enthusiast of Multi-platform front-end development with Flutter',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
