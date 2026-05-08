import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import s from "./Contato.module.scss";

const Toast = Swal.mixin({
  toast: true,
  position: "top-right",
  timer: 3000,
  timerProgressBar: true,
  background: "#042c53",
  color: "#e6f1fb",
  customClass: {
    container: "toast-topo",
  },
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const Contato = () => {
  const [formulario, setFormulario] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const mudanca = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const envio = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Enviando mensagem...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formulario,
        import.meta.env.VITE_EMAILJS_KEY,
      )
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "Mensagem enviada com sucesso!",
        });
        setFormulario({ nome: "", email: "", telefone: "", mensagem: "" });
      })
      .catch(() => {
        alert("Erro ao enviar mensagem, por favor tente novamente.");
      });
  };

  return (
    <main>
      <section className={s.contato}>
        <h1>Entre em contato comigo</h1>
        <p>Entre em contato comigo através do formulário abaixo.</p>

        <form className={s.formContato} onSubmit={envio}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Informe seu nome"
            value={formulario.nome}
            onChange={mudanca}
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Insira seu e-mail"
            value={formulario.email}
            onChange={mudanca}
            required
          />

          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            name="telefone"
            id="telefone"
            placeholder="Insira seu telefone ou WhatsApp"
            value={formulario.telefone}
            onChange={mudanca}
          />

          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            name="mensagem"
            id="mensagem"
            placeholder="Escreva sua mensagem, entrarei em contato"
            rows={5}
            value={formulario.mensagem}
            onChange={mudanca}
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
};

export default Contato;
