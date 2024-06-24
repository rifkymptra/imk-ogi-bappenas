<template>
  <div id="app">
    <Header />
    <div class="container mx-auto flex flex-col items-center">
      <div class="h-[calc(12vh)]"></div>
      <div class="text-center">
        <TitleSection
          link="/pelajari"
          linkText="PELAJARI"
          heading="Kenali "
          subheading1="Sekretariat "
          subheading2="Kami"
          :headingPrimary="false"
          :subheading1Primary="true"
          :subheading2Primary="false"
        />
        <p class="text-black font-inter" :style="{ fontSize: '20px' }">
          Sekretariat Open Government Indonesia hadir untuk memfasilitasi
          tercapainya RAN Keterbukaan
          <br />
          Pemerintah (Open Government Indonesia). Kami bekerja sama dengan
          berbagai pemangku <br />
          kepentingan untuk mengkonsolidasikan berbagai gerakan keterbukaan,
          baik di tingkat nasional <br />
          maupun daerah, sehingga tercipta pemerintahan yang lebih transparan
          dan partisipatif.
        </p>
        <div class="h-[calc(10vh)]"></div>
      </div>
      <div class="space-y-8">
        <TeamSection title="Dewan Pengarah" icon="key">
          <!-- Members of Dewan Pengarah -->
        </TeamSection>

        <TeamSection
          title="Pengurus Harian Open Government Indonesia"
          icon="briefcase"
        >
          <div class="flex flex-col items-center">
            <div class="grid grid-cols-2 gap-y-10 space-x-10 pt-4">
              <TeamMemberCard
                class="ml-10"
                photoSrc="https://ogi.bappenas.go.id/assets/img/team/Maharani_photo-removebg-preview%20(1).png"
                alt="Maharani Putri S.W."
                name="Maharani Putri S.W."
                role="Open Government Partnership Point of Contact for Indonesia"
              />
              <TeamMemberCard
                photoSrc="https://ogi.bappenas.go.id/assets/img/team/karina.png"
                alt="Karina Apriliadhatin"
                name="Karina Apriliadhatin"
                role="Perencana"
              />
              <TeamMemberCard
                photoSrc="https://ogi.bappenas.go.id/assets/img/team/THEO.png"
                alt="Theodorus Agustinus H."
                name="Theodorus Agustinus H."
                role="Tenaga Ahli Kebijakan Publik"
              />
              <TeamMemberCard
                photoSrc="https://ogi.bappenas.go.id/assets/img/team/tata.png"
                name="Andrieta Rafaela A."
                role="Tenaga Ahli Kebijakan Publik"
              />
              <TeamMemberCard
                photoSrc="https://ogi.bappenas.go.id/assets/img/team/kikinew.png"
                alt="Kiki Mulyawati"
                name="Kiki Mulyawati"
                role="Tenaga Ahli Web Developer"
              />
              <TeamMemberCard
                photoSrc="https://ogi.bappenas.go.id/assets/img/team/mbakniya.png"
                alt="Rabbania Aulia F."
                name="Rabbania Aulia F."
                role="Tenaga Pendukung Administrasi"
              />
            </div>
          </div>

          <div class="h-[calc(4vh)]"></div>
        </TeamSection>
      </div>

      <div class="h-[calc(12vh)]"></div>
    </div>

    <Footer />
    <ScrollButton />
  </div>
</template>

<script>
import feather from "feather-icons";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import ScrollButton from "../../components/ScrollButton.vue";
import TitleSection from "../../components/TitleSection.vue";
import TeamSection from "../../components/Pelajari/TeamSection.vue";
import TeamMemberCard from "../../components/Pelajari/TeamMemberCard.vue";

export default {
  name: "Sekretariat",
  components: {
    Header,
    Footer,
    ScrollButton,
    TitleSection,
    TeamSection,
    TeamMemberCard,
  },
  data() {
    return {
      icons: {
        user: feather.icons.user.toSvg(),
        briefcase: feather.icons.briefcase.toSvg(),
      },
    };
  },
};
</script>

