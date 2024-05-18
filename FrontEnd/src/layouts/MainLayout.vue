<template>
	<HeaderComponent />
	<SidebarComponent />
	<div class="lg:ps-56 flex flex-col content min-h-[calc(100vh-72px)]">
		<div class="p-6">
			<router-view />
		</div>
		<FooterComponent />
	</div>
</template>
<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>
