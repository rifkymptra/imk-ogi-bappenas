<template>
  <div id="app">
    <Header />
    <div class="container mx-auto">
      <div class="h-[calc(12vh)]"></div>
      <div class="text-center">
        <TitleSection
          link="/pelajari"
          linkText="PELAJARI"
          heading="Perjalanan "
          subheading1="Singkat OGI"
          :headingPrimary="true"
          :subheading1Primary="false"
        />
        <p class="text-black font-inter" :style="{ fontSize: '20px' }">
          Kolaborasi antara Pemerintah Indonesia dan Organisasi Masyarakat Sipil
          (OMS) untuk melahirkan <br />
          ide dan aksi dalam mendorong implementasi nilai
          <span class="text-primary-3"
            >transparansi, partisipasi, inovasi, akuntabilitas dan <br />
            inklusif</span
          >
          guna menciptakan tata kelola pemerintahan yang bersih, efektif,
          demokratis, dan <br />
          terpercaya.
        </p>
      </div>
      <div class="mt-4 space-y-11">
        <CustomDetails title="2023">
          <div class="details-text">
            <h2 class="text-lg font-semibold">Detail 2023</h2>
            <p>Details for the year 2023 go here.</p>
          </div>
        </CustomDetails>
        <CustomDetails title="2022">
          <div class="details-text">
            <h2 class="text-lg font-semibold">Detail 2022</h2>
            <p>Details for the year 2022 go here.</p>
          </div>
        </CustomDetails>
        <CustomDetails title="2021">
          <div class="details-text">
            <h2 class="text-lg font-semibold">Detail 2021</h2>
            <p>Details for the year 2021 go here.</p>
          </div>
        </CustomDetails>
        <CustomDetails title="2020">
          <div class="details-text">
            <h2 class="text-lg font-semibold font-inter">
              1. Working Level Meeting di Jerman
            </h2>
            <p class="ml-5 font-inter font-normal">
              Pemerintah Indonesia sebagai anggota Steering Committee menghadiri
              OGP Steering Committee
            </p>
            <h2 class="text-lg font-semibold mt-4 font-inter">
              2. Peluncuran RAN OGI 2020-2022
            </h2>
            <h2 class="text-lg font-semibold mt-4 font-inter">
              3. Terpilihnya 5 daerah di Indonesia dalam OGP Local
            </h2>
            <div class="flex space-x-4 mt-2 ml-5 font-inter text-neutral-2">
              <LogoCard
                LogoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Lambang_Kabupaten_Banggai.tif/lossless-page1-100px-Lambang_Kabupaten_Banggai.tif.png"
                alt="Kab. Banggai"
                label="Kab. Bangai"
              />
              <LogoCard
                LogoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Seal_of_the_City_of_Semarang.svg/78px-Seal_of_the_City_of_Semarang.svg.png"
                alt="Kota Semarang"
                label="Kota Semarang"
              />
              <LogoCard
                LogoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Coat_of_arms_of_West_Nusa_Tenggara.svg/68px-Coat_of_arms_of_West_Nusa_Tenggara.svg.png"
                alt="NTB"
                label="NTB"
              />
              <LogoCard
                LogoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Lambang_Kabupaten_Sumbawa_Barat.png/77px-Lambang_Kabupaten_Sumbawa_Barat.png"
                alt="Sumbawa Barat"
                label="Sumbawa Barat"
              />
              <LogoCard
                LogoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Seal_of_Brebes_Regency.svg/100px-Seal_of_Brebes_Regency.svg.png"
                alt="Kab. Brebes"
                label="Kab. Brebes"
              />
            </div>
            <p class="mt-4 ml-5 font-inter font-normal">
              <span class="text-primary-1 font-semibold"
                >Open Government Partnership (OGP) Local</span
              >
              merupakan sebuah upaya untuk mendorong kolaborasi antara
              pemerintah daerah dengan masyarakat sipil dalam mewujudkan
              pemerintahan yang transparan, partisipatif, dan akuntabel.
            </p>
            <h3 class="mt-2 ml-5 font-inter font-normal">
              <span class="text-primary-1 font-semibold">Tujuan utamanya</span>
              meliputi :
            </h3>
            <ul class="list-disc ml-9 mt-2 font-inter font-normal">
              <li>
                Mengembangkan nilai keterbukaan pemerintah untuk mewujudkan tata
                kelola pemerintahan di tingkat daerah yang bersifat
                masyarakat-sentris dan meningkatkan pelayanan publik
              </li>
              <li>
                Memperkuat koordinasi dan kolaborasi pemerintah pusat dan daerah
                dalam mendorong implementasi nilai dan praktik keterbukaan
                pemerintah
              </li>
            </ul>
          </div>
        </CustomDetails>
        <CustomDetails title="2019">
          <div class="details-text">
            <h2 class="text-lg font-semibold">Detail 2019</h2>
            <p>Details for the year 2019 go here.</p>
          </div>
        </CustomDetails>
        <CustomDetails title="2018">
          <div class="details-text">
            <h2 class="text-lg font-semibold">Detail 2018</h2>
            <p>Details for the year 2018 go here.</p>
          </div>
        </CustomDetails>
      </div>
      <div class="h-[calc(20vh)]"></div>
    </div>
    <Footer />
    <ScrollButton />
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import ScrollButton from "../../components/ScrollButton.vue";
import TitleSection from "../../components/TitleSection.vue";
import CustomDetails from "../../components/Pelajari/CustomDetails.vue";
import LogoCard from "../../components/Pelajari/LogoCardPelajari.vue";

export default {
  name: "Perjalanan",
  components: {
    Header,
    Footer,
    ScrollButton,
    TitleSection,
    CustomDetails,
    LogoCard,
  },
};
</script>

<style>
/* Add any global styles here */
</style>
