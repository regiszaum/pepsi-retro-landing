<template>
    <footer class="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <!-- Seção: Sobre a Empresa -->
          <div>
            <h2 class="text-xl font-semibold text-primary">Sobre Nós</h2>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Somos uma empresa dedicada a oferecer os melhores serviços e produtos para você.
            </p>
          </div>
  
          <!-- Seção: Links Úteis -->
          <div>
            <h2 class="text-xl font-semibold text-primary">Links Úteis</h2>
            <ul class="mt-2 space-y-2">
              <li>
                <NuxtLink to="/" class="hover:text-primary">Início</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/sobre" class="hover:text-primary">Sobre</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/servicos" class="hover:text-primary">Serviços</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contato" class="hover:text-primary">Contato</NuxtLink>
              </li>
            </ul>
          </div>
  
          <!-- Seção: Redes Sociais -->
          <div>
            <h2 class="text-xl font-semibold text-primary">Nos Siga</h2>
            <div class="flex justify-center md:justify-start space-x-4 mt-3">
              <a href="#" class="hover:text-primary">
                <i class="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" class="hover:text-primary">
                <i class="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" class="hover:text-primary">
                <i class="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" class="hover:text-primary">
                <i class="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
  
        <!-- Linha divisória -->
        <div class="border-t border-gray-300 dark:border-gray-700 my-6"></div>
  
        <!-- Copyright -->
        <div class="text-center text-sm">
          © {{ new Date().getFullYear() }} Nome da Empresa. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  </template>
  