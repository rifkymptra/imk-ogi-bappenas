<template>
  <Header />
  <div class="container mx-auto text-center max-w-fit pb-8 mt-16">
    <TitleSection
      link="/ran"
      linkText="RENCANA AKSI NASIONAL"
      heading="Komitmen "
      subheading1="RAN OGI VII"
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
      textToAdd="Komitmen ini akan mendorong transparansi dalam keterbukaan informasi pada Pengadaan Barang/Jasa (PBJ) Pemerintah termasuk juga dalam pengadaan darurat, meningkatkan partisipasi Usaha Mikro Kecil dan Menengah (UMKM) dalam PBJ Pemerintah, dan memperluas keterlibatan masyarakat dalam memantau PBJ Pemerintah."
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
      textToAdd="Komitmen ini mendorong untuk terciptanya kajian mengenai kepastian hukum bagi pembela lingkungan utamanya untuk pembela lingkungan yang menempuh cara non-hukum yang belum menjadi subjek hukum pada Pasal 66 Undang-Undang No. 32 Tahun 2009 tentang Pelindungan dan Pengelolaan Lingkungan Hidup (UU PPLH), hal tersebut perlu perlu diatur arah kebijakannya sebagai optimalisasi pengaturan pelindungan hukum dalam perkara lingkungan hidup."
      number="3"
    />

    <KomitmenList
      title="Mengawal perumusan peraturan pelaksana undang-undang no. 27 tahun 2022 tentang pelindungan data pribadi (UU PDP)"
      textToAdd="Komitmen ini bertujuan mendorong penyusunan regulasi pelaksanaan UU PDP yang jelas, efektif, proposional, dan sesuai dengan tantangan dan kebutuhan riil pengaturan PDP melalui rekomendasi berbasis kajian partisipatif.

"
      number="4"
    />

    <KomitmenList
      title="Penyusunan mekanisme penanganan pemilu dari disinformasi"
      textToAdd="Menghadirkan sistem pemantauan dan pengawasan Pemilihan Umum untuk menciptakan Pemilu yang Bebas Berekspresi dan Tanpa Disinformasi, sehingga meningkatkan akuntabilitas pelaksanaan Pemilu."
      number="5"
    />

    <KomitmenList
      title="Keterbukaan tata kelola data pemilihan umum"
      textToAdd="Komitmen ini berupaya untuk menghadirkan keterbukaan data atau informasi terkait Pemilu yang tersedia dalam format data terbuka (open data), sehingga masyarakat dapat memanfaatkan data-data tersebut untuk menghadirkan Pemilu yang unggul."
      number="6"
    />

    <KomitmenList
      title="Penyediaan pedoman aksesibilitas digital layanan komunikasi dan informasi publik yang inklusif bagi penyandang disabilitas"
      textToAdd="Penyusunan Pedoman terkait Aksesibilitas Digital bagi kelompok disabilitas untuk mewujudkan transparansi informasi yang layak serta akses bagi seluruh lapisan masyarakat."
      number="7"
    />

    <KomitmenList
      title="Akuntabilitas sosial keterbukaan anggaran desa"
      textToAdd="Komitmen ini mendorong terwujudnya Sistem Integritas Desa (SINTESA) di 15 Desa yang ada di Kabupaten Kupang, Aceh dan Jember. Komitmen ini akan mewujudkan penguatan dari aspek transparansi, partisipasi, dan akuntabilitas di tingkat desa."
      permasalahan="Komisi Informasi Pusat telah menerbitkan Peraturan Komisi Informasi No 1 Tahun 2018 tentang Standar Layanan Informasi Desa, namun implementasinya masih belum banyak desa yang menerapkan standar tersebut. Selain itu, Kementerian Desa, Pembangunan Daerah Tertinggal dan Transmigrasi juga telah menerbitkan aturan tentang publikasi keuangan desa melalui poster dan baliho, namun informasi tersebut masih dinilai belum cukup informatif dan diperlukan informasi yang lebih rinci. Telah ada aplikasi untuk melakukan pencatatan pengelolaan keuangan desa, namun prakteknya informasi tersebut belum dapat diakses oleh publik, padahal risiko korupsi dalam pengelolaan keuangan desa biasanya terdapat dalam proses pencatatan pendapatan asli desa dan implementasi belanja desa yang di mark-up."
      number="8"
    />

    <KomitmenList
      title="Akuntabilitas sosial pelayanan publik dan tata kelola pemerintahan desa"
      textToAdd="Komitmen ini akan mendorong penguatan akuntabilitas sosial pada program pembangunan di desa dalam meningkatkan pelayanan publik di tingkat desa dan tata kelola pemerintahan desa dalam konteks musyawarah desa."
      number="9"
    />

    <KomitmenList
      title="Penyusunan Rancangan Undang-Undang Komisi Kebenaran dan Rekonsiliasi (RUU KKR) untuk memenuhi hak atas kebenaran"
      textToAdd="Adanya proses penyusunan RUU KKR dengan keterlibatan masyarakat. Kemajuan dalam proses penyusunan kebijakan mengenai KKR di tingkat nasional penting untuk dasar pengungkapan kebenaran atas peristiwa pelanggaran HAM berat di masa lalu."
      number="10"
    />

    <KomitmenList
      title="Aksesibilitas dan akuntabilitas proses peradilan di Indonesia"
      textToAdd="Sebagai respon dari berbagai reformasi dan adaptasi yang dilakukan terhadap proses peradilan, perlu dilihat implementasi dan dievaluasi sejauh mana proses yang ada sesuai dengan kebutuhan dan kondisi pencari keadilan serta dapat dipertanggungjawabkan, termasuk bagi kelompok rentan."
      number="11"
    />

    <KomitmenList
      title="Perluasan pemberian bantuan hukum yang berkualitas dan aksesibel di Indonesia"
      textToAdd="Adanya panduan penyusunan standar operasional (Stopela) pemberian layanan bantuan hukum untuk menjamin pemberian bantuan hukum yang berkualitas, serta pemetaan kebutuhan hukum masyarakat untuk memastikan informasi dan layanan bantuan hukum tepat sasaran"
      permasalahan="Pada tahun 2021 diterbitkan Peraturan Komisi Informasi Pusat No. 1 Tahun 2021 tentang Standar Layanan Informasi Publik (Perkislip 1/2021) yang memiliki muatan pasal yang mengatur mengenai penjelasan rinci informasi PBJ yang harus dibuka oleh Badan Publik. Selain itu, Indikator Keterbukaan PBJ juga sudah masuk sebagai salah satu indikator dalam Indeks Keterbukaan Informasi Publik (IKIP). Pada sistem pengadaan secara elektronik, LKPP juga sudah mempublikasi dashboard PBJ Darurat dalam kanal Layanan Pengadaan Secara Elektronik (LPSE)."
      number="12"
    />

    <KomitmenList
      title="Penguatan bantuan hukum bagi kelompok rentan di Indonesia"
      textToAdd="Komitmen ini mendorong partisipasi publik dalam memetakan kebutuhan hukum kelompok rentan, memberi masukan untuk revisi UU Bantuan Hukum, dan penguatan kapasitas bagi Pemberi Bantuan Hukum (PBH) untuk memberi layanan bagi kelompok rentan."
      number="13"
    />

    <KomitmenList
      title="Penguatan mekanisme pemulihan dalam Undang-Undang no. 12 Tahun 2022 tentang Tindak Pidana Kekerasan Seksual (UU TPKS)"
      textToAdd="Adanya partisipasi masyarakat dalam penyusunan dan sosialisasi peraturan turunan UPTD PPA dan DBK yang dimandatkan UU TPKS untuk memastikan pembentukan peraturan turunan yang dilandaskan riset dan kebutuhan masyarakat di lapangan, serta adanya pengarusutamaan yang lebih luas."
      number="14"
    />

    <KomitmenList
      title="Pengembangan Sistem Satu Data Sumber Daya Alam-Lingkungan Hidup (SDA-LH) yang menjamin keterbukaan data dan informasi perizinan dan tata ruang"
      textToAdd="Pengembangan tata kelola dan transparansi satu data tematik sumber daya alam, lingkungan hidup dan tata ruang yang meliputi integrasi, pemeriksaan, pengelompokan, dan manajemen akses data bagi publik"
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