<template>
	<footer class="mt-auto">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" class="rotate-180 w-full h-12 md:h-24 -mb-1">
			<path
				:class="fillClass"
				opacity="0.33"
				d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
			></path>
			<path
				:class="fillClass"
				opacity="0.66"
				d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
			></path>
			<path
				:class="fillClass"
				d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
			></path>
		</svg>
		<div :class="['flex flex-col md:flex-row justify-between items-center px-12 pb-4', mainClass]">
			<!-- <LogoImg src="../assets/BAER.svg" :class="['w-32', logoClass]" /> -->
			<!--START LOGO-->
			<logoSidebar />
			<!--END LOGO-->
			<div class="flex-col md:flex-row">
				<p class="md:ml-8 text-sm">© 2024 Todos los derechos reservados a Bolivariana de Aeropuertos, S.A. (BAER).</p>
				<div class="flex flex-col md:flex-row justify-center">
					<a href="#" class="text-sm hover:text-blue-400 mr-4">Términos de servicio</a>
					<a href="#" class="text-sm hover:text-blue-400 mr-4">Política de privacidad</a>
					<a href="#" class="text-sm hover:text-blue-400">Contáctenos</a>
				</div>
			</div>
			<div class="flex flex-col md:flex-row justify-between items-center">
				<LogoImg src="../assets/logo.svg" :class="['w-32', logoClass]" />
			</div>
		</div>
	</footer>
</template>
<script setup lang="ts">
import { defineProps, computed } from 'vue';
import logoSidebar from '@/components/icons/logoSidebar.vue';

import LogoImg from '@/components/icons/LogoImg.vue';

const props = defineProps({
	color: {
		type: String,
	},
});

const fillClass = computed(() => {
	if (props.color === 'primary') {
		return 'fill-white';
	} else {
		return 'fill-primary dark:fill-darkmode-800';
	}
});

const mainClass = computed(() => {
	if (props.color === 'primary') {
		return 'text-primary bg-white';
	} else {
		return 'text-gray-200 bg-primary dark:bg-darkmode-800';
	}
});

const logoClass = computed(() => {
	if (props.color === 'primary') {
		return 'fill-primary';
	} else {
		return 'fill-gray-200 dark:fill-gray-200';
	}
});
</script>
