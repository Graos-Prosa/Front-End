import styles from './Address.module.css';

import Button from '../button/Button';

import { truncateString } from '../../../utils/Util';

interface AddressProps {
    id: number;
    type?: "primary" | "secondary";
    isSelected?: boolean;
    street: string;
    number: string;
    cep: string;
    state: string;
    neighborhood: string;
    city: string;
    complement: string;
}

export default function Address({ id, type, isSelected, street, number, cep, state, neighborhood, city, complement }: AddressProps) {

    function handleDeleteAddress(addressId: number) {
        console.log(`Excluir endereço com ID: ${addressId}`);
        //tratar a lógica de exclusão do endereço aqui, como fazer uma requisição para o backend ou atualizar o estado global
    }

    function handleEditAddress(addressId: number) {
        console.log(`Editar endereço com ID: ${addressId}`);
        //tratar a lógica de edição do endereço aqui, como redirecionar para uma página de edição ou abrir um modal com o formulário de edição
    }

    function handleSelectAddress(addressId: number) {
        console.log(`Selecionar endereço com ID: ${addressId}`);
        //tratar a lógica de seleção do endereço aqui, como atualizar o estado global ou redirecionar para uma página de detalhes
    }

    const isSelectedAddress = isSelected ? "primary" : "secondary";

    return (
        <div key={id} className={styles.address}>
            <p><span className={styles.blueColor}>Logradouro:</span> {street}</p>
            <p><span className={styles.blueColor}>Número:</span> {number}</p>
            <div className={styles.addressDetails}>
                <p><span className={styles.blueColor}>CEP:</span> {cep}</p>
                <p><span className={styles.blueColor}>Estado:</span> {state}</p>
            </div>
            <div className={styles.addressDetails}>
                <p><span className={styles.blueColor}>Bairro:</span> {neighborhood}</p>
                <p><span className={styles.blueColor}>Cidade:</span> {city}</p>
            </div>
            <p><span className={styles.blueColor}>Complemetento:</span> {truncateString(complement, 51)}</p>
            <div className={styles.buttonsContainer} style={{display: type === "secondary" ? "" : "none"}}>
                <Button type="secondary" style={{width: '100%', height: '29px', fontSize: '12px', borderRadius: '5px'}} onClick={() => handleDeleteAddress(id)} textContent="Excluir" />
                <Button type="primary" style={{width: '100%', height: '29px', fontSize: '12px', borderRadius: '5px'}} onClick={() => handleEditAddress(id)} textContent="Editar" />
            </div>
            <div className={styles.uniqueButtonContainer} style={{display: type === "primary" ? "" : "none"}}>
                <Button type={isSelectedAddress} style={{width: '100%', height: '29px', fontSize: '12px', borderRadius: '5px'}} onClick={() => handleSelectAddress(id)} textContent="Endereço selecionado" />
            </div>
        </div>
    );
}