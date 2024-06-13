<template>
  <Header />
  <div class="max-h-fit my-16 mx-72">
    <TitleSection link="/ran/komitmen" linkText="Komitmen RAN OGI VII" />
    <h1 class="text-[3rem] font-bold -mt-8 text-center">
      2. Optimalisasi implementasi keterbukaan data benefical ownership
    </h1>
    <div>
      <div class="mt-36 font-inter text-center mx-20">
        <h1 class="text-[3rem] font-bold -mt-8">Deskripsi Komitmen</h1>
        <p class="mt-4">
          Komitmen ini berupaya untuk melakukan penyediaan data Beneficial
          Ownership yang mutakhir melalui pelaksanaan verifikasi dan pemanfaatan
          data Beneficial Ownership
        </p>
        <KomitmenList
          title="Apa yang telah dilakukan sejauh ini untuk mengatasi permasalahan tersebut?"
        />
        <KomitmenList title="Solusi Apa yang diusulkan?" />
        <KomitmenList
          title="Hasil apa yang ingin dicapai dengan mengimplementasi komitmen ini?"
        />
      </div>
      <div class="mt-20 font-inter text-center mx-20">
        <h1 class="text-[3rem] font-bold -mt-8">Identifikasi Masalah</h1>

        <KomitmenList
          title="Masalah apa yang ingin diselesaikan melalui komitmen ini?"
        />
        <KomitmenList title="Apa penyebab permasalahan tersebut?" />
      </div>

      <div class="mt-20 font-inter text-center mx-20">
        <h1 class="text-[3rem] font-bold -mt-8">Analisa Komitmen</h1>

        <KomitmenList
          title="Bagaimana komitmen ini akan mendorong transparansi?"
        />
        <KomitmenList
          title="Bagaimana komitmen ini akan menumbuhkan akuntabilitas?"
        />
        <KomitmenList
          title="Bagaimana komitmen ini akan meningkatkan partisipasi masyarakat dalam mendefinisikan, mengimplementasikan, dan memonitor solusi?"
        />
      </div>

      <div class="mt-20 font-inter text-center mx-20">
        <h1 class="text-[3rem] font-bold -mt-8">Pelaksana Komitmen</h1>

        <KomitmenList title="Kementerian/Lembaga" />
        <KomitmenList title="Organisasi Masyarakat Sipil" />
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
            <tr class="bg-white">
              <td class="py-2 px-4 text-neutral-3 font-inter">
                (K/L) UK 1 : Peningkatan Kualitas Data Pemilik
                Manfaat/Beneficial Ownership
              </td>
              <td class="py-2 px-4"></td>
              <td class="py-2 px-4 text-center">
                <button
                  class="bg-primary-1 text-white py-1 px-3 rounded text-xs whitespace-nowrap"
                >
                  Lihat
                </button>
              </td>
            </tr>
            <tr class="bg-primary-5/25">
              <td class="py-2 px-4 text-neutral-3">
                (OMS) UK 1 : Peningkatan Kualitas Data Pemilik Manfaat/
                Beneficial Ownership
              </td>
              <td class="py-2 px-4"></td>
              <td class="py-2 px-4 text-center">
                <button
                  class="bg-primary-1 text-white py-1 px-3 rounded text-xs whitespace-nowrap"
                >
                  Lihat
                </button>
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
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import TitleSection from "../../components/TitleSection.vue";
import ScrollButton from "../../components/ScrollButton.vue";
import KomitmenList from "../../components/RAN/KomitmenListInfo.vue";

export default {
  components: {
    Header,
    Footer,
    TitleSection,
    ScrollButton,
    KomitmenList,
  },
};
</script>
