<script>
import feather from 'feather-icons';
// import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';

export default {
	components: {
		// ContactForm,
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'Santa Clara, Cuba',
					icon: 'map-pin',
					link: '#'
				},
				{
					id: 2,
					name: 'e-mail',
					icon: 'mail',
					link: 'mailto:potty3800@gmail.com'
				},
				{
					id: 3,
					name: '(+53) 53 745850',
					icon: 'phone',
					link: '#'
				},
				{
					id: 4,
					name: 'My Linkedin',
					icon: 'linkedin',
					link: 'https://www.linkedin.com/in/leonavarro95/'
				},
			],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div
		class="container mx-auto flex flex-col md:flex-row py-5 md:py-10 md:mt-10"
	>
		<!-- Contact form -->
		<!-- <ContactForm /> -->
		
		<!-- Contact Image -->
		<img class="pt-2 mt-5 md:mt-0 w-full md:w-2/5" src="../assets/images/contact.svg" alt="contact-ilustation">

		<!-- Contact details -->
		<ContactDetails :contacts="contacts" />
	</div>
</template>
