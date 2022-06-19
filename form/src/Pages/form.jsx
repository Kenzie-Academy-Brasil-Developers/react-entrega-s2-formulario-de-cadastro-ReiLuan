import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";

const Form = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email(),
    password: yup
      .string()
      .required("Insira uma senha")
      .min(8, "Senha muito curta")
      .matches(
        "Minimo 8 caracteres, Maiuscula, Minuscula, Um numero e um simbolo especial"
      ).password,
    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password"), null]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const signIn = (data) => {};

  console.log(errors);
  const history = useHistory();

  return (
    <div className="Header">
      <div className="container">
        <h3>Formulário</h3>
        <form
          className="form"
          onSubmit={(handleSubmit(signIn), () => history.push("/home"))}
        >
          <input placeholder="Nome:" {...register("name")} />
          {errors.name?.message}
          <input placeholder="Email:" {...register("email")} />
          {errors.email?.message}
          <input placeholder="Senha:" {...register("password")} />
          {errors.password?.message}
          <input
            placeholder="Confirme Senha:"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message}

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
