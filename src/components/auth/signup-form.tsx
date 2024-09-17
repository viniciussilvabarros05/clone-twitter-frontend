"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../ui/button";
import { Input } from "../ui/input";

export const SignupForm = () => {
  const router = useRouter();
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  function handleEnterButton() {
    router.replace("/home");
  }

  return (
    <>
      <Input
        placeholder="Digite seu nome"
        value={nameField}
        onChange={(text) => setNameField(text)}
        
      />
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

      <Button onClick={handleEnterButton} label="Criar Conta" size={1}/>
    </>
  );
};
