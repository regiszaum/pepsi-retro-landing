<template>
  <footer class="bg-black py-10">
    <div class="w-full flex flex-col">
      <div class="w-full flex justify-center">
        <div class="flex justify-center md:justify-start space-x-4 mt-3">
          <a href="https://www.tiktok.com/@pepsiglobal" class="text-white hover:text-[#C9002B]" target="_blank">
            <Icon name="lucide:joystick" class="text-2xl" />
          </a>
          <a href="https://www.instagram.com/pepsi" class="text-white hover:text-[#C9002B]" target="_blank">
            <Icon name="lucide:instagram" class="text-2xl" />
          </a>
          <a href="https://www.facebook.com/pepsi" class="text-white hover:text-[#C9002B]" target="_blank">
            <Icon name="lucide:facebook" class="text-2xl" />
          </a>
          <a href="https://www.youtube.com/@Pepsi" class="text-white hover:text-[#C9002B]" target="_blank">
            <Icon name="lucide:youtube" class="text-2xl" />
          </a>
        </div>
      </div>
    </div>
    <!-- Linha divisória -->
    <div class="border-t border-white my-6"></div>
    <!-- Copyright -->
    <div class="text-center text-sm fpress text-white">
      © {{ new Date().getFullYear() }} Pepsico, Inc.
    </div>
  </footer>
</template>
