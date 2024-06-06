<template>
  <header class="bg-white border-b font-jakarta">
    <div class="container mx-auto flex items-center justify-between p-4">
      <div class="flex items-center space-x-4">
        <img src="../assets/logo.png" alt="Logo" class="h-16" />
      </div>
      <nav class="flex space-x-8">
        <a href="#" class="text-gray-800 font-semibold hover:text-red-500"
          >Beranda</a
        >
        <div class="relative group">
          <a href="#" class="text-gray-800 font-semibold hover:text-red-500"
            >Rencana Aksi Nasional</a
          >
          <div
            class="absolute hidden group-hover:block bg-white shadow-lg py-2 mt-2"
          >
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Submenu 1</a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Submenu 2</a>
          </div>
        </div>
        <div class="relative group">
          <a href="#" class="text-gray-800 font-semibold hover:text-red-500"
            >Publikasi</a
          >
          <div
            class="absolute hidden group-hover:block bg-white shadow-lg py-2 mt-2"
          >
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Submenu 1</a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Submenu 2</a>
          </div>
        </div>
        <div class="relative group">
          <a href="#" class="text-gray-800 font-semibold hover:text-red-500"
            >Pelajari</a
          >
          <div
            class="absolute hidden group-hover:block bg-white shadow-lg py-2 mt-2"
          >
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Submenu 1</a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Submenu 2</a>
          </div>
        </div>
      </nav>
      <div class="flex items-center space-x-4">
        <button class="text-gray-800 hover:text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button class="text-gray-800 hover:text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
  