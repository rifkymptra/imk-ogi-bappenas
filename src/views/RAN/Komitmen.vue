<template>
  <Header />
  <div class="container mx-auto text-center max-w-fit pb-8 mt-16">
    <TitleSection
      link="/ran"
      linkText="RENCANA AKSI NASIONAL"
      heading="Komitmen "
      subheading="RAN OGI VII"
    />
    <div class="mb-8 max-w-[59rem] mx-auto font-inter text-xl">
      <p>
        Sebagai upaya implementasi keterbukaan pemerintah, Sekretariat Nasional
        Open Government Indonesia berhasil menyusun Rencana Aksi Nasional Open
        Goverment Indonesia (RAN OGI) untuk periode tahun 2023-2024.
      </p>
      <p class="mt-4">
        Berisi 15 Komitmen keterbukaan pemerintah yang multisektoral, perumusan
        RAN OGI diselenggarakan bersama-sama melalui mekanisme ko-kreasi antara
        Kementrian/Lembaga dan Organisasi Masyarakat Sipil (OMS).
      </p>
    </div>

    <KomitmenList
      title="Mendorong transparansi dan partisipasi dalam pengadaan barang/jasa pemerintah"
      textToAdd="mweehehehehe"
      number="1"
      :link="'/ran/komitmen/1'"
    />
    <KomitmenList
      title="Optimalisasi implementasi keterbukaan data benefical ownership"
      textToAdd="Komitmen ini berupaya untuk melakukan penyediaan data Beneficial Ownership yang mutakhir melalui pelaksanaan verifikasi dan pemanfaatan data Beneficial Ownership"
      number="2"
    />
    <KomitmenList
      title="Perlindungan hukum dalam perkara lingkungan hidup"
      textToAdd="mweehehehehe"
      number="3"
    />

    <KomitmenList
      title="Mengawal perumusan peraturan pelaksana undang-undang no. 27 tahun 2022 tentang pelindungan data pribadi (UU PDP)"
      textToAdd="mweehehehehe"
      number="4"
    />

    <KomitmenList
      title="Penyusunan mekanisme penanganan pemilu dari disinformasi"
      textToAdd="mweehehehehe"
      number="5"
    />

    <KomitmenList
      title="Keterbukaan tata kelola data pemilihan umum"
      textToAdd="mweehehehehe"
      number="6"
    />

    <KomitmenList
      title="Penyediaan pedoman aksesibilitas digital layanan komunikasi dan informasi publik yang inklusif bagi penyandang disabilitas"
      textToAdd="mweehehehehe"
      number="7"
    />

    <KomitmenList
      title="Akuntabilitas sosial keterbukaan anggaran desa"
      textToAdd="mweehehehehe"
      number="8"
    />

    <KomitmenList
      title="Akuntabilitas sosial pelayanan publik dan tata kelola pemerintahan desa"
      textToAdd="mweehehehehe"
      number="9"
    />

    <KomitmenList
      title="Penyusunan Rancangan Undang-Undang Komisi Kebenaran dan Rekonsiliasi (RUU KKR) untuk memenuhi hak atas kebenaran"
      textToAdd="mweehehehehe"
      number="10"
    />

    <KomitmenList
      title="Aksesibilitas dan akuntabilitas proses peradilan di Indonesia"
      textToAdd="mweehehehehe"
      number="11"
    />

    <KomitmenList
      title="Perluasan pemberian bantuan hukum yang berkualitas dan aksesibel di Indonesia"
      textToAdd="mweehehehehe"
      number="12"
    />

    <KomitmenList
      title="Penguatan bantuan hukum bagi kelompok rentan di Indonesia"
      textToAdd="mweehehehehe"
      number="13"
    />

    <KomitmenList
      title="Penguatan mekanisme pemulihan dalam Undang-Undang no. 12 Tahun 2022 tentang Tindak Pidana Kekerasan Seksual (UU TPKS)"
      textToAdd="mweehehehehe"
      number="14"
    />

    <KomitmenList
      title="Perlindungan hukum dalam perkara lingkungan hidup"
      textToAdd="mweehehehehe"
      number="15"
    />
  </div>

  <Footer />

  <ScrollButton />
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import ScrollButton from "../../components/ScrollButton.vue";
import TitleSection from "../../components/TitleSection.vue";
import KomitmenList from "../../components/RAN/KomitmenList.vue";

export default {
  components: {
    Header,
    Footer,
    ScrollButton,
    TitleSection,
    KomitmenList,
  },
};
</script>