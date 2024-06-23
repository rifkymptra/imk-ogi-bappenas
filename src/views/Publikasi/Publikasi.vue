    <template>
        <div id="app">
        <Header />
        <div class="container mx-auto flex flex-col items-center">
            <div class="h-[calc(20vh)]"></div>
            <h1 class="text-[3.5rem] font-bold my-5">
            Publikasi <span class="text-primary-1">OGI</span>
            </h1>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
            <Card
                image="/src/assets/news.jpg"
                title="OGI News"
                description="Baca berita terkini terkait OGI."
                linkText="Baca lebih lanjut"
                link="/publikasi/ogi-news"
            />
            <Card
                image="/src/assets/infografis.jpg"
                title="Infografis"
                description="Hasil pengolahan dan analisis oleh tim OGI."
                linkText="Lihat infografis"
                link="/publikasi/infografis"
            />
            <Card
                image="/src/assets/laporan kajian.jpg"
                title="Laporan dan Kajian"
                description="Laporan pelaksanaan dari kegiatan yang telah dilakukan."
                linkText="Unduh Berkas"
                link="/publikasi/laporan-dan-kajian"
            />
            <Card
                image="/src/assets/IRM.jpg"
                title="IRM"
                description="Independent Reporting Mechanism"
                linkText="Unduh IRM"
                link="/publikasi/irm"
            />
            </div>
            <div class="h-[calc(12vh)]"></div>
        </div>
        <Footer />
        <ScrollButton />
        </div>
    </template>
    
    <script>
    import Header from "../../components/Header.vue";
    import Footer from "../../components/Footer.vue";
    import Card from "../../components/Card.vue";
    import ScrollButton from "../../components/ScrollButton.vue";
    
    export default {
        name: "Publikasi",
        components: {
        Header,
        Footer,
        Card,
        ScrollButton,
        },
    };
    </script>
    