<template>
  <Header />
  <div class="max-h-fit my-16 mx-72">
    <TitleSection link="/ran/komitmen" linkText="Komitmen RAN OGI VII" />
    <h1 class="text-[3rem] font-bold -mt-8 text-center">
      {{ title }}
    </h1>
    <div>
      <div class="mt-36 font-inter text-center mx-20">
        <h1 class="text-[3rem] font-bold -mt-8">Deskripsi Komitmen</h1>
        <p class="mt-4">
          {{ deskripsi }}
        </p>
        <TemptList
          title="Apa yang telah dilakukan sejauh ini untuk mengatasi permasalahan tersebut?"
          :textToAdd="permasalahan"
        />
        <TemptList title="Solusi Apa yang diusulkan?" :textToAdd="solusi" />
        <TemptList
          title="Hasil apa yang ingin dicapai dengan mengimplementasi komitmen ini?"
          :textToAdd="hasil"
        />
      </div>
      <div class="mt-20 font-inter text-center mx-20">
        <h1 class="text-[3rem] font-bold -mt-8">Identifikasi Masalah</h1>

        <TemptList
          title="Masalah apa yang ingin diselesaikan melalui komitmen ini?"
          :textToAdd="masalah"
        />
        <TemptList
          title="Apa penyebab permasalahan tersebut?"
          :textToAdd="penyebab"
        />
      </div>

      <div class="mt-20 font-inter text-center mx-20">
        <h1 class="text-[3rem] font-bold -mt-8">Analisa Komitmen</h1>

        <TemptList
          title="Bagaimana komitmen ini akan mendorong transparansi?"
          :textToAdd="transparansi"
        />
        <TemptList
          title="Bagaimana komitmen ini akan menumbuhkan akuntabilitas?"
          :textToAdd="akuntabilitas"
        />
        <TemptList
          title="Bagaimana komitmen ini akan meningkatkan partisipasi masyarakat dalam mendefinisikan, mengimplementasikan, dan memonitor solusi?"
          :textToAdd="partisipasi"
        />
      </div>

      <div class="mt-20 font-inter text-center mx-20">
        <h1 class="text-[3rem] font-bold -mt-8">Pelaksana Komitmen</h1>

        <TemptList title="Kementerian/Lembaga" :textToAdd="kementerian" />
        <TemptList title="Organisasi Masyarakat Sipil" :textToAdd="ormas" />
      </div>
    </div>
    <div class="text-center mt-20">
      <h1 class="text-[3rem] font-bold">Perencanaan Komitmen</h1>
      <div class="overflow-x-auto font-inter rounded-3xl">
        <table class="min-w-full bg-white text-left font-inter">
          <thead class="bg-primary-1 text-white">
            <tr>
              <th class="py-2 px-4">Ukuran Keberhasilan</th>
              <th class="py-2 px-4">Status</th>
              <th class="py-2 px-4 whitespace-nowrap">Data Dukung</th>
            </tr>
          </thead>
          <tbody class="font-light text-xl">
            <tr
              v-for="(row, index) in tableData"
              :key="index"
              :class="index % 2 === 0 ? 'bg-white' : 'bg-primary-5/25'"
            >
              <td class="py-2 px-4 text-neutral-3 font-inter">
                {{ row.description }}
              </td>
              <td class="py-2 px-4">{{ row.status }}</td>
              <td class="py-2 px-4 text-center">
                <a
                  :href="row.href"
                  class="bg-primary-1 text-white py-1 px-3 rounded-md text-xs whitespace-nowrap"
                >
                  Lihat
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <ScrollButton />
  </div>
  <Footer />
</template>

<script>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import ScrollButton from "../ScrollButton.vue";
import TitleSection from "../TitleSection.vue";
import TemptList from "../RAN/TemptList.vue";

export default {
  name: "Komitmen",
  props: {
    title: {
      type: String,
      required: true,
    },
    deskripsi: {
      type: String,
      required: true,
    },
    permasalahan: {
      type: String,
      required: true,
    },
    masalah: {
      type: String,
      required: true,
    },
    penyebab: {
      type: String,
      required: true,
    },
    transparansi: {
      type: String,
      required: true,
    },
    akuntabilitas: {
      type: String,
      required: true,
    },
    partisipasi: {
      type: String,
      required: true,
    },
    solusi: {
      type: String,
      required: true,
    },
    hasil: {
      type: String,
      required: true,
    },
    tableData: {
      type: Array,
      required: true,
      default: () => [],
    },
    kementerian: {
      type: String,
      required: true,
    },
    ormas: {
      type: String,
      required: true,
    },
  },
  components: {
    Header,
    Footer,
    TitleSection,
    ScrollButton,
    TemptList,
  },
};
</script>

<style scoped>
/* Tambahkan gaya kustom di sini */
</style>
