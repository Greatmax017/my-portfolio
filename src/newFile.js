import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

export default (await import("vue")).defineComponent({
  data() {
    return {
      name: null,
      phone: null,
      email: null,
      message: null,
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_8axsp6p",
          "template_zz2oi7j",
          this.$refs.form,
          "HD34HmPYw8YvoP1lo"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            this.name = null;
            this.phone = null;
            this.email = null;
            this.message = null;
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Message sent",
              text: "you will get a feedback wihin few hours",
              showConfirmButton: true,
              timer: 3000,
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
});
