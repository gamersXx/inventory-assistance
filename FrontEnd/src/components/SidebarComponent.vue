<style scoped>
.open.hs-overlay-open\:translate-x-0 {
	--tw-translate-x: 0px;
	transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
		scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
</style>
<template>
	<div class="top-0 inset-x-0bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-darkmode-700 dark:border-gray-700">
		<div class="flex items-center py-4">
			<!-- Navigation Toggle -->
			<button
				type="button"
				class="text-gray-500 hover:text-gray-600"
				data-hs-overlay="#application-sidebar"
				aria-controls="application-sidebar"
				aria-label="Toggle navigation"
				v-on:click="toggleSidebar()"
			>
				<span class="sr-only">Toggle Navigation</span>
				<svg
					class="flex-shrink-0 w-4 h-4"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="3" x2="21" y1="6" y2="6"></line>
					<line x1="3" x2="21" y1="12" y2="12"></line>
					<line x1="3" x2="21" y1="18" y2="18"></line>
				</svg>
			</button>
			<!-- End Navigation Toggle -->

			<!-- Breadcrumb -->
			<ol class="ms-3 flex items-center whitespace-nowrap" aria-label="Breadcrumb">
				<li class="flex items-center text-sm text-gray-800 dark:text-gray-400">
					Application Layout
					<svg
						class="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						></path>
					</svg>
				</li>
				<li class="text-sm font-semibold text-gray-800 truncate dark:text-gray-400" aria-current="page">Dashboard</li>
			</ol>
			<!-- End Breadcrumb -->
		</div>
	</div>

	<div
		:class="[
			'hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transform fixed top-0 start-0 bottom-0 z-40 bg-primary dark:bg-darkmode-800 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&amp;::-webkit-scrollbar]:w-2 [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-track]:bg-gray-100 [&amp;::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&amp;::-webkit-scrollbar-track]:bg-slate-700 dark:[&amp;::-webkit-scrollbar-thumb]:bg-slate-500 w-56',
			isSidebarOpen ? 'open' : 'hidden',
		]"
	>
		<div class="px-6">
			<a
				class="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
				href="#"
				aria-label="Brand"
			>
				<LogoImg class="w-32 fill-white mx-auto" />
			</a>
		</div>
		<hr class="border-gray-200 dark:border-gray-400 my-4 mx-6" />
		<nav class="py-6 pl-4 w-full flex flex-col flex-wrap side-nav overflow-y-hidden">
			<ul class="space-y-1.5">
				<li v-for="menu in menuList" :key="menu.name">
					<!-- CHECK IF SUBMENU EXISTS -->
					<template v-if="menu.submenu">
						<div
							v-on:click="menu.show = !menu.show"
							:class="[
								'side-menu w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-200 cursor-pointer',
								activeMenu.includes(menu.name) ? 'active' : '',
							]"
						>
							<div class="side-menu__icon">
								<svg
									class="flex-shrink-0 w-4 h-4"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
									<line x1="16" x2="16" y1="2" y2="6"></line>
									<line x1="8" x2="8" y1="2" y2="6"></line>
									<line x1="3" x2="21" y1="10" y2="10"></line>
									<path d="M8 14h.01"></path>
									<path d="M12 14h.01"></path>
									<path d="M16 14h.01"></path>
									<path d="M8 18h.01"></path>
									<path d="M12 18h.01"></path>
									<path d="M16 18h.01"></path>
								</svg>
							</div>
							{{ sideLanguage(menu.name) }}
						</div>
						<Transition @enter="enter" @leave="leave">
							<div class="bg-darkmode-900 rounded-md" v-show="menu.show">
								<RouterLink
									v-for="submenu in menu.submenu"
									:key="submenu.name"
									:to="submenu.route ? { name: submenu.route } : ''"
									:class="[
										'side-menu w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-200 cursor-pointer',
										activeMenu.includes(submenu.name) ? 'active' : '',
									]"
								>
									<div class="side-menu__icon">
										<svg
											class="flex-shrink-0 w-4 h-4"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
											<line x1="16" x2="16" y1="2" y2="6"></line>
											<line x1="8" x2="8" y1="2" y2="6"></line>
											<line x1="3" x2="21" y1="10" y2="10"></line>
											<path d="M8 14h.01"></path>
											<path d="M12 14h.01"></path>
											<path d="M16 14h.01"></path>
											<path d="M8 18h.01"></path>
											<path d="M12 18h.01"></path>
											<path d="M16 18h.01"></path>
										</svg>
									</div>
									{{ sideLanguage(submenu.name) }}
								</RouterLink>
							</div>
						</Transition>
					</template>
					<!-- IF NOT, CHECK IF ROUTE EXISTS -->
					<RouterLink
						v-else
						:class="[
							'side-menu w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-200 cursor-pointer',
							activeMenu.includes(menu.name) ? 'active' : '',
						]"
						:to="menu.route ? { name: menu.route } : ''"
					>
						<div class="side-menu__icon">
							<svg
								class="flex-shrink-0 w-4 h-4"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
								<line x1="16" x2="16" y1="2" y2="6"></line>
								<line x1="8" x2="8" y1="2" y2="6"></line>
								<line x1="3" x2="21" y1="10" y2="10"></line>
								<path d="M8 14h.01"></path>
								<path d="M12 14h.01"></path>
								<path d="M16 14h.01"></path>
								<path d="M8 18h.01"></path>
								<path d="M12 18h.01"></path>
								<path d="M16 18h.01"></path>
							</svg>
						</div>
						{{ sideLanguage(menu.name) }}
					</RouterLink>
				</li>
			</ul>
		</nav>
	</div>
	<ul class="space-y-1.5"></ul>
	<div
		class="transition duration fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 hs-overlay-backdrop z-30"
		v-if="isSidebarOpen"
		v-on:click="toggleSidebar()"
	></div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import LogoImg from './icons/LogoImg.vue';
import router from '@/router';
import { getI18N } from '@/i18n';

interface Menu {
	name: string;
	icon: string;
	route?: string;
	submenu?: Menu[];
	show?: boolean;
}

const isSidebarOpen = ref(false);
const menuList = ref<Menu[]>([]);
const i18n = getI18N();

const sideLanguage = (item: string) => {
	// @ts-ignore-next-line
	const text = i18n.menu[item];
	if (!text) return item;
	return text;
};

const toggleSidebar = () => {
	isSidebarOpen.value = !isSidebarOpen.value;
	//add class to body
	if (isSidebarOpen.value) {
		document.body.classList.add('overflow-hidden');
	} else {
		document.body.classList.remove('overflow-hidden');
	}
};

const activeMenu = computed(() => {
	const activeMenu = [];

	for (const menu of menuList.value) {
		if (menu.route && router.currentRoute.value.name === menu.route) {
			activeMenu.push(menu.name);
		}
		for (const submenu of menu.submenu ?? []) {
			if (submenu.route && router.currentRoute.value.name === submenu.route) {
				activeMenu.push(menu.name);
				activeMenu.push(submenu.name);
			}
		}
	}
	return activeMenu;
});

onMounted(async () => {
	menuList.value = (await router.currentRoute.value.meta.menu) as Menu[];
	for (const menu of menuList.value) {
		for (const submenu of menu.submenu ?? []) {
			if (router.currentRoute.value.name === submenu.route) {
				menu.show = true;
			}
		}
	}
});

const slideUp = (
	el: HTMLElement,
	duration = 300,
	// @ts-ignore-next-line
	callback = (el: HTMLElement) => {}
) => {
	el.style.transitionProperty = 'height, margin, padding';
	el.style.transitionDuration = duration + 'ms';
	el.style.height = el.offsetHeight + 'px';
	el.offsetHeight;
	el.style.overflow = 'hidden';
	el.style.height = '0';
	el.style.paddingTop = '0';
	el.style.paddingBottom = '0';
	el.style.marginTop = '0';
	el.style.marginBottom = '0';
	window.setTimeout(() => {
		el.style.display = 'none';
		el.style.removeProperty('height');
		el.style.removeProperty('padding-top');
		el.style.removeProperty('padding-bottom');
		el.style.removeProperty('margin-top');
		el.style.removeProperty('margin-bottom');
		el.style.removeProperty('overflow');
		el.style.removeProperty('transition-duration');
		el.style.removeProperty('transition-property');
		callback(el);
	}, duration);
};

const slideDown = (
	el: HTMLElement,
	duration = 300,
	// @ts-ignore-next-line
	callback = (el: HTMLElement) => {}
) => {
	el.style.removeProperty('display');
	let display = window.getComputedStyle(el).display;
	if (display === 'none') display = 'block';
	el.style.display = display;
	let height = el.offsetHeight;
	el.style.overflow = 'hidden';
	el.style.height = '0';
	el.style.paddingTop = '0';
	el.style.paddingBottom = '0';
	el.style.marginTop = '0';
	el.style.marginBottom = '0';
	el.offsetHeight;
	el.style.transitionProperty = 'height, margin, padding';
	el.style.transitionDuration = duration + 'ms';
	el.style.height = height + 'px';
	el.style.removeProperty('padding-top');
	el.style.removeProperty('padding-bottom');
	el.style.removeProperty('margin-top');
	el.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		el.style.removeProperty('height');
		el.style.removeProperty('overflow');
		el.style.removeProperty('transition-duration');
		el.style.removeProperty('transition-property');
		callback(el);
	}, duration);
};

const enter = (el: Element) => {
	slideDown(el as HTMLElement, 300);
};

const leave = (el: Element) => {
	slideUp(el as HTMLElement, 300);
};
</script>
