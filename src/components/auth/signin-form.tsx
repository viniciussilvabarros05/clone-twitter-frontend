"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";

export const SigninForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  function handleEnterButton() {
    router.replace("/home");
  }

  return (
    <>
      <Input
        placeholder="Digite seu email"
        value={emailField}
        onChange={(text) => setEmailField(text)}
      />

      <Input
        password
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(text) => setPasswordField(text)}
      />

      <button onClick={handleEnterButton}>Entrar</button>
    </>
  );
};
