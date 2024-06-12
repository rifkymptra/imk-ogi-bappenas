<template>
    <div id="app">
    <Header />
        <div class="container mx-auto"> 
            <div class="h-[calc(20vh)]"></div>
            <div class="text-center">
                <div class="flex justify-center items-center space-x-1 font-jakarta">
                    <i
                        data-feather="arrow-left"
                        class=" text-primary-1 inline transition-all group-hover:text-primary-5"
                    ></i>
                    <h2 class="text-primary-1 font-bold">PELAJARI</h2>
                </div>
                
                <h1 class="text-4xl font-bold my-5 font-jakarta">
                <span class="text-primary-1 ">Perjalanan </span>Singkat OGI</h1>
                <p class="text-black font-inter">Kolaborasi antara Pemerintah Indonesia dan Organisasi Masyarakat Sipil (OMS) untuk melahirkan <br> ide dan aksi dalam mendorong implementasi nilai <span class="text-primary-3">transparansi, partisipasi, inovasi, akuntabilitas dan <br> inklusif </span>guna menciptakan tata kelola pemerintahan yang bersih, efektif, demokratis, dan <br> terpercaya.
                </p>
            </div>  
            <div class="mt-8 space-y-4">
                <details class="bg-gray-100 rounded-lg p-4">
                    <summary class="text-xl font-semibold">2023</summary>
                </details>
                <details class="bg-gray-100 rounded-lg p-4">
                    <summary class="text-xl font-semibold">2022</summary>
                </details>
                <details class="bg-gray-100 rounded-lg p-4">
                    <summary class="text-xl font-semibold">2021</summary>
                </details>
                <details open class="bg-gray-100 rounded-lg p-4">
                    <summary class="text-xl font-semibold">2020</summary>
                    <div class="mt-4">
                    <h2 class="text-lg font-semibold">1. Working Level Meeting di Jerman</h2>
                    <p>Pemerintah Indonesia sebagai anggota Steering Committee menghadiri OGP Steering Committee</p>
                    <h2 class="text-lg font-semibold mt-4">2. Peluncuran RAN OGI 2020-2022</h2>
                    <h2 class="text-lg font-semibold mt-4">3. Terpilihnya 5 daerah di Indonesia dalam OGP Local</h2>
                    <div class="flex space-x-4 mt-2">
                        <img src="../../assets/bangai.png" alt="Kab. Banggai" class="w-16 h-16">
                        <img src="../../assets/semarang.png" alt="Kota Semarang" class="w-16 h-16">
                        <img src="../../assets/ntb.png" alt="NTB" class="w-16 h-16">
                        <img src="../../assets/sumbawa.png" alt="Sumbawa Barat" class="w-16 h-16">
                        <img src="../../assets/brebes.png" alt="Kab. Brebes" class="w-16 h-16">
                    </div>
                    <p class="mt-4">
                        Open Government Partnership (OGP) Local merupakan sebuah upaya untuk mendorong kolaborasi antara pemerintah daerah dengan masyarakat sipil dalam mewujudkan pemerintahan yang transparan, partisipatif, dan akuntabel.
                    </p>
                    <h3 class="font-semibold mt-2">Tujuan utamanya meliputi :</h3>
                    <ul class="list-disc ml-6 mt-2">
                        <li>Mengembangkan nilai keterbukaan pemerintah untuk mewujudkan tata kelola pemerintahan di tingkat daerah yang bersifat masyarakat-sentris dan meningkatkan pelayanan publik</li>
                        <li>Memperkuat koordinasi dan kolaborasi pemerintah pusat dan daerah dalam mendorong implementasi nilai dan praktik keterbukaan pemerintah</li>
                    </ul>
                    </div>
                </details>
                <details class="bg-gray-100 rounded-lg p-4">
                    <summary class="text-xl font-semibold">2019</summary>
                </details>
                <details class="bg-gray-100 rounded-lg p-4">
                    <summary class="text-xl font-semibold">2018</summary>
                </details>
            </div>

            <div class="h-[calc(20vh)]"></div>
        </div>
    <Footer />
    </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";

export default {
    name : "Perjalanan",
  components: {
    Header,
    Footer,
  },
  
};  
</script>