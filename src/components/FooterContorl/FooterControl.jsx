import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../Button/Button";
import { bottomNav } from "../../constants/footerItems";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Catalog } from "../Catalog";

export const FooterControl = () => {
	const [catalog, setCatalog] = useState(false);

	const handleMenu = () => {
		// BU YERDA KATALOGNI OCHIB YOPISH QISMI BO'LADI
		setCatalog(!catalog);
		document.body.style.overflowY = 'hidden'
	};

	return ReactDOM.createPortal((
		<>
      <Catalog setCatalog={setCatalog} display={catalog} />
			<nav className="relative z-50">
				<div className="fixed bottom-0 left-0 right-0 lg:hidden flex w-full py-3 px-5 bg-white text-[#575761] border border-[#EAEAEF] justify-center items-center ">
					<div className="flex w-full items-center justify-center gap-6 mt-1.5">
						{bottomNav.map((item, i) => {
							return (
								<div
									className="flex flex-col items-center justify-center w-20"
									key={item.id}>

									{i !== 2 ? (
										<NavLink
											to={item.path}
											className={`flex flex-col text-[14px] cursor-pointer font-semibold items-center justify-center ${
												item.name === "Создать" && "mt-4"
											}`}
										>
											{item.name == "Создать" ? (
												<span className="absolute top-0 -translate-y-[50%] mb-4 bg-[#0A84FF] text-white p-2.5 flex items-center justify-center cursor-pointer rounded-md">
													<FontAwesomeIcon icon={item.icon} fontSize={20} />
												</span>
											) : (
												<FontAwesomeIcon className="mb-1" icon={item.icon} />
											)}
											{item.name}
										</NavLink>
									) : (
										<Button className={`flex-col text-[14px] `}
											onClick={handleMenu} spanClasses={`flex-col text-clay font-semibold`}>
											<FontAwesomeIcon className="mb-1" icon={item.icon} />
											{item.name}
										</Button>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</nav>
		</>
	), document.body.children[0]);
};
