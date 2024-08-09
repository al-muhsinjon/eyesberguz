import "./Catalog.css";
import { Button } from "../../Button/Button";
import { EnhancedCatalogBody } from "../childs/catalogBody";
import { faClose, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const Catalog = ({ setCatalog, display }) => {
	const [activeView, setActiveView] = useState("left");

	// FUNCTION THAT CLOSES CATALOG
	const closeCatalog = () => {
		setCatalog(!display)
		document.body.style.overflow = 'visible'
	};

	const backToCatalog = () => {
		if (activeView === "right") {
			return setActiveView("middle");
		} else if (activeView === "middle") {
			return setActiveView("left");
		}
	};

	useEffect(() => {
	}, [activeView]);

	return (
		<section className={`fixed left-0 z-[99999] top-0 w-full h-[100vh] catalog-wrapper flex flex-col ${display ? "block" : "hidden"}`}>
			<div
				className="catalog-close border-b-[1.5px] border-athens p-6 flex items-center"
				style={{
					justifyContent: activeView !== "left" ? "space-between" : "end",
				}}
			>
				{/* BUTTON THAT CLOSES CATALOG */}
				<FontAwesomeIcon icon={faXmark} size="xl" onClick={closeCatalog} className="cursor-pointer"/>
				
				{activeView !== "left" && (
					<Button
					className="text-scarpe block lg:hidden"
					onClick={backToCatalog}
					>
						<FontAwesomeIcon icon={faClose}/>
					</Button>
				)}

			</div>
			<div className="catalog-body flex h-screen">
				<EnhancedCatalogBody
					setActiveView={setActiveView}
					activeView={activeView}
				/>
			</div>
		</section>
	);
};
