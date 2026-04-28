import styles from "./FormLogin.module.css"
import Input from "../input/Input"
import Button from "../button/Button"

import GoogleIcon from "../../assets/logoGoogle.png"

import { useState } from "react"

export default function FormLogin() {

    interface DataFormType {email: string, password: string }

    const [formData, setFormData] = useState<DataFormType>({email: "", password: ""})

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className={styles.divEmailForm}>
            <h3 className={styles.h3StyleForm}>Conheça nossos produtos</h3>
            <p className={styles.pStyleForm}>Entre com sua conta para comprar nosso produtos e receber novidades.</p>
            <form onSubmit={handleSubmit} className={styles.emailForm}>
                <Input type={"email"} style={{width: "100%", padding: "5px"}} styleType={"third"} placeholder={"E-mail"} onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email}/>
                <Input type={"password"} style={{width: "100%", padding: "5px", marginTop: "10px"}} styleType={"third"} placeholder={"Senha"} onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.password}/>
                <Button type={"primary"} style={{width: "100%", padding: "10px", marginTop: "18px"}} onClick={() => alert("Funcionou")} textContent={"Entrar"} />
                <Button 
                    type={"secondary"} 
                    style={{width: "100%", padding: "8px", marginTop: "2px"}} 
                    onClick={() => alert("Funcionou")} 
                    textContent={
                        <>
                            <img src={GoogleIcon} alt="logo google" className={styles.logoGoogle}/>
                            Entrar com Google
                        </>
                    } 
                />
            </form>
            <div className={styles.divCadastreSe}>
                <p className={styles.pStyleForm}>Não possui conta?</p>
                <a className={styles.aStyleForm} href="">cadastre-se</a>
            </div>
        </div>
    );
}