<template>
  <Header />
  <div class="max-w-screen-lg mx-auto my-8 md:my-16 px-4 md:px-8">
    <TitleSection
      link="/ran"
      linkText="Rencana Aksi Nasional"
      heading="Pelaporan Monev"
      subheading1=" OMS"
      :headingPrimary="false"
      :subheading1Primary="true"
    />

    <!-- Form Section -->
    <div
      class="bg-white p-8 rounded-lg shadow-md mt-8 border-2 border-primary-1"
    >
      <form @submit.prevent="submitForm" class="">
        <div class="mb-6">
          <label for="name" class="block text-gray-700 font-semibold mb-2"
            >Nama Lengkap<span class="text-primary-1">*</span></label
          >
          <input
            type="text"
            id="name"
            v-model="form.name"
            class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-gray-500"
            placeholder="Nama lengkap anda"
            required
          />
        </div>

        <div class="mb-6">
          <label for="email" class="block text-gray-700 font-semibold mb-2"
            >Email yang dapat dihubungi<span class="text-primary-1"
              >*</span
            ></label
          >
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-gray-500"
            placeholder="Email anda"
            required
          />
        </div>

        <div class="mb-6">
          <label for="report" class="block text-gray-700 font-semibold mb-2"
            >Isi Laporan<span class="text-primary-1">*</span></label
          >
          <textarea
            id="report"
            v-model="form.report"
            class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-gray-500"
            rows="5"
            placeholder="Tuliskan laporan dengan selengkap-lengkapnya"
            required
          ></textarea>
        </div>

        <div class="text-right">
          <button
            type="submit"
            class="bg-primary-1 text-white px-6 py-3 rounded-md hover:bg-primary-2 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  <ScrollButton />
  <Footer />
</template>
  
  <script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import ScrollButton from "../../components/ScrollButton.vue";
import TitleSection from "../../components/TitleSection.vue";
import Swal from "sweetalert2"; // Import SweetAlert

export default {
  components: {
    Header,
    Footer,
    ScrollButton,
    TitleSection,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        report: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Logika untuk menangani submit form
      console.log(this.form);
      Swal.fire({
        icon: "success",
        title: "Laporan OMS berhasil disampaikan.",
        showConfirmButton: false,
        timer: 1500, // Pop-up akan hilang setelah 1.5 detik
      }).then(() => {
        this.$router.push("/ran/monitoring-dan-evaluasi");
      });
    },
  },
};
</script>
  