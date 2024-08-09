import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Uz from '../../assets/uzflag.svg';

export default function SignInModal() {
    const [show, setShow] = useState(true);
    const [tg, setTg] = useState(true);
    const [phone, setPhone] = useState("");

    useEffect(() => {
        const closeModal = (e) => {
            if (e.key === "Escape") setShow(false);
        };
        document.addEventListener("keydown", closeModal);
        return () => document.removeEventListener("keydown", closeModal);
    }, []);

    const classes1 = "font-medium bg-lupa text-clay px-3 py-1 rounded-full text-[13px]";
    const classes2 = "font-medium bg-clay text-white px-3 py-1 rounded-full text-[13px]";

    const formatPhoneNumber = (value) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, "");
        const phoneNumberLength = phoneNumber.length;
        
        if (phoneNumberLength < 3) return phoneNumber;
        if (phoneNumberLength < 6) return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2)}`;
        if (phoneNumberLength < 8) return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)}-${phoneNumber.slice(5)}`;
        
        return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)}-${phoneNumber.slice(5, 7)}-${phoneNumber.slice(7, 9)}`;
    };

    const handlePhoneChange = (e) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setPhone(formattedPhoneNumber);
    };

    return (
        <>
            {show && (
                <div 
                    className="fixed z-50 top-0 left-0 flex items-center justify-center w-full h-full bg-[#42425f9b]"
                    onClick={() => setShow(false)}
                >
                    <div className="bg-white w-[450px] max-mm:w-full mx-auto p-5 max-sm:pt-7 rounded-xl" onClick={(e) => e.stopPropagation()}>
                        {/* Вход */}
                        <div className="flex items-center justify-between mb-[28px]">
                            <span className="font-extrabold text-[21px] text-clay">Вход</span>
                            <button className="text-cadet text-[18px]" onClick={() => setShow(false)}>
                                <FontAwesomeIcon icon={faX} />
                            </button>
                        </div>

                        {/* tg buttons */}
                        <div className="flex gap-3 items-center mb-4">
                            <button onClick={() => setTg(false)} className={tg ? classes1 : classes2}>Код СМС</button>
                            <button onClick={() => setTg(true)} className={tg ? classes2 : classes1}>Код Telegram</button>
                        </div>

                        {/* input */}
                        <form className="w-full">
                            <div className="flex items-center relative bg-lupa rounded-lg mb-2 text-waterloo">
                                <div className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center rounded-s-lg">
                                    <img src={Uz} className="w-5 rounded-full" alt="Uzbekistan flag" />
                                    +998
                                </div>

                                <input 
                                    className="!bg-lupa w-full h-full block p-4 text-sm text-gray-900 rounded-e-lg focus:outline-none" 
                                    placeholder="93 000-00-00" 
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    maxLength={12} 
                                    required 
                                />
                            </div>

                            <span className="text-waterloo font-normal max-sm:text-[14px] mt-1">Вам будет отправлен код, который нужно ввести на следующем шаге</span>
                            <div className="p-3 border-[#8282919c] border my-3 rounded-xl">
                                <span className="font-normal text-waterloo max-sm:text-[14px] leading-1">
                                    Нажимая “Далее” вы даете согласие на сбор, использование и передачу персональных данных в соответствии с 
                                    <a className="text-blue font-normal" href="">“Политикой конфиденциальности”</a> и 
                                    <a className="text-blue font-normal" href="">“Условиями использования приложения”</a>
                                </span>
                            </div>

                            <button className="rounded-xl bg-blue w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 text-md px-6 py-3">Далее</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}