import "../catalogBody.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { CATALOG_CONTENT } from "../../../../constants/catalogContent";

export const CatalogMiddle = ({
	activeTitleIndex,
	activeServiceIndex,
	onServiceHover,
}) => {
	//getting data of hovered title
	const servicesData = CATALOG_CONTENT[activeTitleIndex].servises;

	const content = servicesData?.map((el, index) => {
		return (
			<li
				key={el.id}
				className="flex items-center gap-3 rounded p-2 mt-1"
				style={{
					background: index === activeServiceIndex ? "#f7f7f9" : "#fff",
				}}
				onMouseEnter={() => {
					onServiceHover(index);
				}}
			>
				<Link to={el.link} className="flex items-center justify-between w-full">
					<p
						style={{ color: index === activeTitleIndex ? "#000" : "#575761" }}
						className="font-nunito"
					>
						{el.titleOfService}
					</p>

					<FontAwesomeIcon icon={faChevronRight} color="#adadc2" />
				</Link>
			</li>
		);
	});

	return (
		<ul className="w-full md:w-[50%] lg:w-[16%] overflow-auto h-full p-2  cursor-pointer pb-[40px] border-r-[1.5px] border-athens">
			{content}
		</ul>
	);
};
