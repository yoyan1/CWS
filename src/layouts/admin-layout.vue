<template>
	<main class="flex h-screen w-full">
		<aside class="w-64 h-full transition-transform border-r shadow-lg">
			<div
				class="h-full p-4 overflow-y-auto flex flex-col bg-gray-50 dark:bg-gray-800">
				<a class="flex items-center ps-2.5 mb-5">
					<span
						class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
						>LOGO/TITLE</span
					>
				</a>
				<ul class="space-y-2 font-medium grow">
					<li>
						<a
							class="flex items-center p-2 rounded-lg bg-primary-500 text-white cursor-pointer hover:bg-primary-400">
							<span>Dashboard</span>
						</a>
					</li>
					<li>
						<a
							class="flex items-center p-2 text-gray-900 rounded-lg hover:text-white hover:bg-primary-400 cursor-pointer">
							<span class="flex-1 whitespace-nowrap">Users</span>
						</a>
					</li>
					<li>
						<a
							class="flex items-center p-2 text-gray-900 rounded-lg hover:text-white dark:text-white hover:bg-primary-400 cursor-pointer">
							<span class="flex-1 whitespace-nowrap">Transactions</span>
						</a>
					</li>
				</ul>
				<Button label="Sign Out" />
			</div>
		</aside>
		<div>
			<slot />
		</div>
	</main>
</template>
