import "../catalogBody.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CATALOG_CONTENT } from "../../../../constants/catalogContent";

export const CatalogLeft = ({ activeTitleIndex, onTitleHover }) => {
	const content = CATALOG_CONTENT.map((el, index) => {
		return (
			<li
				key={el.id}
				className="flex items-center gap-3 rounded p-2  mt-2 justify-between"
				style={{ background: index === activeTitleIndex ? "#f7f7f9" : "#fff" }}
				onMouseEnter={() => {
					onTitleHover(index);
				}}
			>
				<div className="flex gap-2 items-center">
					<FontAwesomeIcon icon={el.icon} color="#adadc2" />
					<p
						style={{ color: index === activeTitleIndex ? "#000" : "#575761" }}
						className="font-nunito"
					>
						{el.title}
					</p>
				</div>

				<FontAwesomeIcon icon={faChevronRight} color="#adadc2" className="" />
			</li>
		);
	});
	return (
		<>
			<ul className=" w-full md:w-[50%] lg:w-[16%] overflow-auto h-full p-2 cursor-pointer border-r-[1.5px] border-athens">
				{content}
			</ul>
		</>
	);
};
