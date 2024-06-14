<template>
    <div id="app">
        <Header />
        <div class="container mx-auto">
            <div class="h-[calc(12vh)]"></div>
            <div class="text-center">
                <TitleSection 
                    link="/pelajari" 
                    linkText="PELAJARi" 
                    heading="Kenali " 
                    subheading="Sekretariat Kami" 
                    :headingPrimary="false"
                    :subheadingPrimary="true"
                /> 
                <p class="text-black font-inter" :style= "{fontSize: '20px'}">Sekretariat Open Government Indonesia hadir untuk memfasilitasi tercapainya RAN Keterbukaan <br> Pemerintah (Open Government Indonesia). Kami bekerja sama dengan berbagai pemangku <br> kepentingan untuk mengkonsolidasikan berbagai gerakan keterbukaan, baik di tingkat nasional <br> maupun daerah, sehingga tercipta pemerintahan yang lebih transparan dan partisipatif. </p> 


            </div>
            <div class="py-8">
                <TeamSection title="Dewan Pengarah" :icon="icons.user">
                <!-- Anggota Dewan Pengarah -->
                </TeamSection>

                <TeamSection title="Pengurus Harian Open Government Indonesia" :icon="icons.briefcase">
                <TeamMemberCard
                    photoSrc="path/to/maharani.jpg"
                    alt="Maharani Putri S.W."
                    name="Maharani Putri S.W."
                    role="Open Government Partnership Point of Contact for Indonesia"
                />
                <TeamMemberCard
                    photoSrc="path/to/karina.jpg"
                    alt="Karina Apriliadhatin"
                    name="Karina Apriliadhatin"
                    role="Perencana"
                />
                <TeamMemberCard
                    photoSrc="path/to/theodorus.jpg"
                    alt="Theodorus Agustinus H."
                    name="Theodorus Agustinus H."
                    role="Tenaga Ahli Kebijakan Publik"
                />
                <TeamMemberCard
                    photoSrc="path/to/andrieta.jpg"
                    name="Andrieta Rafaela A."
                    role="Tenaga Ahli Kebijakan Publik"
                />
                <TeamMemberCard
                    photoSrc="path/to/kiki.jpg"
                    alt="Kiki Mulyawati"
                    name="Kiki Mulyawati"
                    role="Tenaga Ahli Web Developer"
                />
                <TeamMemberCard
                    photoSrc="path/to/rabbania.jpg"
                    alt="Rabbania Aulia F."
                    name="Rabbania Aulia F."
                    role="Tenaga Pendukung Administrasi"
                />
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
        briefcase: feather.icons.briefcase.toSvg()
      }
    };
  }
};

</script>
